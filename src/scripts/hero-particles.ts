interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  colorIndex: number;
}

const INFLUENCE_RADIUS = 150;
const PUSH_STRENGTH = 2.2;

export function initHeroParticles(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-particles]');
  const hero = canvas?.closest<HTMLElement>('.hero');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !hero || !ctx) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  let colors: [string, string] = ['#e8b339', '#f2789f'];
  let frameId = 0;
  let mouseX = -Infinity;
  let mouseY = -Infinity;

  const readColors = (): void => {
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--color-accent').trim();
    const pink = styles.getPropertyValue('--color-pink').trim();
    colors = [accent || '#e8b339', pink || '#f2789f'];
  };

  const seedParticles = (): void => {
    const count = Math.min(110, Math.max(36, Math.round((width * height) / 9500)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.3 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.16,
      vy: 0.05 + Math.random() * 0.1,
      phase: Math.random() * Math.PI * 2,
      colorIndex: Math.random() < 0.65 ? 0 : 1,
    }));
  };

  const resize = (): void => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedParticles();
  };

  const paintParticle = (p: Particle, alpha: number, radius: number, glow: number): void => {
    const color = colors[p.colorIndex];
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = glow;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawStatic = (): void => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => paintParticle(p, 0.6, p.r, 6));
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  };

  const drawFrame = (time: number): void => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.hypot(dx, dy);
      let boost = 0;
      if (dist < INFLUENCE_RADIUS) {
        boost = 1 - dist / INFLUENCE_RADIUS;
        const nx = dist === 0 ? 0 : dx / dist;
        const ny = dist === 0 ? 0 : dy / dist;
        p.x += nx * boost * PUSH_STRENGTH;
        p.y += ny * boost * PUSH_STRENGTH;
      }

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y > height + 10) {
        p.y = -10;
        p.x = Math.random() * width;
      }

      const twinkle = 0.45 + 0.4 * Math.sin(time / 900 + p.phase);
      const alpha = Math.min(1, twinkle + boost * 0.5);
      const radius = p.r * (1 + boost * 0.9);
      const glow = 5 + boost * 14;
      paintParticle(p, alpha, radius, glow);
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    frameId = requestAnimationFrame(drawFrame);
  };

  const handlePointerMove = (event: PointerEvent): void => {
    const rect = hero.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
  };

  const handlePointerLeave = (): void => {
    mouseX = -Infinity;
    mouseY = -Infinity;
  };

  readColors();
  resize();

  if (reducedMotion) {
    drawStatic();
  } else {
    frameId = requestAnimationFrame(drawFrame);
    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);
  }

  new MutationObserver(() => {
    readColors();
    if (reducedMotion) drawStatic();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  new ResizeObserver(() => {
    cancelAnimationFrame(frameId);
    resize();
    if (reducedMotion) drawStatic();
    else frameId = requestAnimationFrame(drawFrame);
  }).observe(hero);
}
