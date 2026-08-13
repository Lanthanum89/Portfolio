interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
}

const LINK_DIST = 130;
const MOUSE_RADIUS = 170;
const MOUSE_PUSH = 0.6;

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
  let mutedColor = '#9296a3';
  let accentColor = '#e8b339';
  let pinkColor = '#f2789f';
  let frameId = 0;
  let mouseX = -Infinity;
  let mouseY = -Infinity;

  const readColors = (): void => {
    const styles = getComputedStyle(document.documentElement);
    mutedColor = styles.getPropertyValue('--color-text-muted').trim() || mutedColor;
    accentColor = styles.getPropertyValue('--color-accent').trim() || accentColor;
    pinkColor = styles.getPropertyValue('--color-pink').trim() || pinkColor;
  };

  const seedParticles = (): void => {
    const count = Math.min(85, Math.max(30, Math.round((width * height) / 12000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.2 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14,
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

  const proximityAt = (x: number, y: number): number => {
    const dist = Math.hypot(x - mouseX, y - mouseY);
    return dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;
  };

  const paintScene = (): void => {
    ctx.clearRect(0, 0, width, height);
    ctx.shadowBlur = 0;

    for (let i = 0; i < particles.length; i += 1) {
      const a = particles[i];
      const proxA = proximityAt(a.x, a.y);
      for (let j = i + 1; j < particles.length; j += 1) {
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist >= LINK_DIST) continue;
        const proxB = proximityAt(b.x, b.y);
        const prox = Math.max(proxA, proxB);
        const lineAlpha = (1 - dist / LINK_DIST) * (prox > 0 ? 0.55 : 0.18);
        ctx.strokeStyle = prox > 0 ? accentColor : mutedColor;
        ctx.globalAlpha = lineAlpha + prox * 0.35;
        ctx.lineWidth = prox > 0 ? 1.2 : 0.75;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    particles.forEach((p, index) => {
      const prox = proximityAt(p.x, p.y);
      const color = prox > 0 ? (index % 2 === 0 ? accentColor : pinkColor) : mutedColor;
      ctx.globalAlpha = prox > 0 ? 0.85 + prox * 0.15 : 0.4;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = prox > 0 ? 10 * prox : 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (1 + prox * 0.8), 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  };

  const drawFrame = (): void => {
    particles.forEach((p) => {
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.hypot(dx, dy);
      if (dist < MOUSE_RADIUS) {
        const push = (1 - dist / MOUSE_RADIUS) * MOUSE_PUSH;
        const nx = dist === 0 ? 0 : dx / dist;
        const ny = dist === 0 ? 0 : dy / dist;
        p.x += nx * push;
        p.y += ny * push;
      }

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    });

    paintScene();
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
    paintScene();
  } else {
    frameId = requestAnimationFrame(drawFrame);
    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);
  }

  new MutationObserver(() => {
    readColors();
    if (reducedMotion) paintScene();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  new ResizeObserver(() => {
    cancelAnimationFrame(frameId);
    resize();
    if (reducedMotion) paintScene();
    else frameId = requestAnimationFrame(drawFrame);
  }).observe(hero);
}
