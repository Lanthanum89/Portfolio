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
const CALM_SPEED = 0.35;

export function initHeroParticles(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-particles]');
  const hero = canvas?.closest<HTMLElement>('.hero');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !hero || !ctx) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let calm = motionQuery.matches;
  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  let mutedColor = '#9296a3';
  let accentColor = '#e8b339';
  let pinkColor = '#f2789f';
  let mouseX = -Infinity;
  let mouseY = -Infinity;

  const readColors = (): void => {
    const styles = getComputedStyle(document.documentElement);
    mutedColor = styles.getPropertyValue('--color-text-muted').trim() || mutedColor;
    accentColor = styles.getPropertyValue('--color-accent').trim() || accentColor;
    pinkColor = styles.getPropertyValue('--color-pink').trim() || pinkColor;
  };

  const targetCount = (): number =>
    Math.min(85, Math.max(30, Math.round((width * height) / 12000)));

  const createParticle = (): Particle => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 1.2 + Math.random() * 1.4,
    vx: (Math.random() - 0.5) * 0.14,
    vy: (Math.random() - 0.5) * 0.14,
  });

  const fitParticleCount = (): void => {
    const count = targetCount();
    if (particles.length > count) {
      particles.length = count;
      return;
    }
    while (particles.length < count) particles.push(createParticle());
  };

  const resize = (): void => {
    const rect = hero.getBoundingClientRect();
    const nextWidth = Math.round(rect.width);
    const nextHeight = Math.round(rect.height);
    if (nextWidth === width && nextHeight === height) return;
    if (nextWidth === 0 || nextHeight === 0) return;

    const scaleX = width === 0 ? 0 : nextWidth / width;
    const scaleY = height === 0 ? 0 : nextHeight / height;

    width = nextWidth;
    height = nextHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (particles.length && scaleX > 0 && scaleY > 0) {
      particles.forEach((p) => {
        p.x *= scaleX;
        p.y *= scaleY;
      });
    } else {
      particles = [];
    }
    fitParticleCount();
  };

  const proximityAt = (x: number, y: number): number => {
    if (calm) return 0;
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
    const speed = calm ? CALM_SPEED : 1;

    particles.forEach((p) => {
      if (!calm) {
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
      }

      p.x += p.vx * speed;
      p.y += p.vy * speed;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    });

    paintScene();
    requestAnimationFrame(drawFrame);
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

  hero.addEventListener('pointermove', handlePointerMove);
  hero.addEventListener('pointerleave', handlePointerLeave);

  motionQuery.addEventListener('change', (event) => {
    calm = event.matches;
    if (calm) handlePointerLeave();
  });

  new MutationObserver(readColors).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  new ResizeObserver(resize).observe(hero);

  requestAnimationFrame(drawFrame);
}
