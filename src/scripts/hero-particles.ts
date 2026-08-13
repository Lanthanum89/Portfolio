interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  colorIndex: number;
}

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

  const readColors = (): void => {
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--color-accent').trim();
    const pink = styles.getPropertyValue('--color-pink').trim();
    colors = [accent || '#e8b339', pink || '#f2789f'];
  };

  const seedParticles = (): void => {
    const count = Math.min(90, Math.max(24, Math.round((width * height) / 14000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.6 + Math.random() * 1.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: 0.04 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
      colorIndex: Math.random() < 0.7 ? 0 : 1,
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

  const drawStatic = (): void => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = colors[p.colorIndex];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  };

  const drawFrame = (time: number): void => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y > height) {
        p.y = 0;
        p.x = Math.random() * width;
      }
      const twinkle = 0.35 + 0.35 * Math.sin(time / 900 + p.phase);
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = colors[p.colorIndex];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    frameId = requestAnimationFrame(drawFrame);
  };

  readColors();
  resize();

  if (reducedMotion) {
    drawStatic();
  } else {
    frameId = requestAnimationFrame(drawFrame);
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
