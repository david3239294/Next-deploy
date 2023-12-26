import React, { useEffect, useRef } from 'react';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas?.getContext('2d');

    function canvasSizes(canvas: HTMLCanvasElement) {
      if (window.innerWidth < 800) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth;
      } else {
        canvas.height = window.innerHeight;
        canvas.width = window.innerHeight;
      }
    }

    if (canvas) {
      canvasSizes(canvas);
    }

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    class Effect {
      w: number;
      h: number;
      img: HTMLImageElement | null;
      particleArray: Particle[];
      mouse: {
        radius: number;
        x: number;
        y: number;
      };

      constructor(width: number, height: number) {
        this.w = width;
        this.h = height;
        this.img = null;
        this.particleArray = [];
        this.mouse = {
          radius: 1000,
          x: 0,
          y: 0,
        };

        window.addEventListener('mousemove', (e) => {
          const bounds = canvas?.getBoundingClientRect();
          if (bounds) {
            this.mouse.x = e.clientX - bounds.left;
            this.mouse.y = e.clientY - bounds.top;
          }
        });
      }

      init(ctx: CanvasRenderingContext2D) {
        const image1 = new Image();
        image1.src = './images/Speaker.png';
        image1.onload = () => {
          this.img = image1;

          if (this.img) {
            ctx.drawImage(this.img, 0, 0, this.w, this.h);

            for (let y = 0; y < this.h; y += 3) {
              for (let x = 0; x < this.w; x += 3) {
                const index = (y * this.w + x) * 4;
                const red = 0; // Example: Set red color value
                const green = 255; // Example: Set green color value
                const blue = 0; // Example: Set blue color value
                const alpha = 255; // Example: Set alpha value

                const color = `rgba(${red},${green},${blue},${alpha})`;
                if (alpha > 0) {
                  this.particleArray.push(new Particle(x, y, 3, color));
                }
              }
            }
          }
        };
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.img) {
          this.particleArray.forEach((particle: Particle) => particle.draw(ctx));
        }
      }

      update() {
        // Update particle positions
        // For instance, you can update particle positions here based on the mouse interaction
        this.particleArray.forEach((particle) => {
          particle.x += (this.mouse.x - particle.x) * 0.02;
          particle.y += (this.mouse.y - particle.y) * 0.02;
        });
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    if (c) {
      effect.init(c);
    }

    function animate() {
      if (c) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        effect.draw(c);
        effect.update();
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, []);

  return (
    <div>
      <div className="h-full w-full canvas-container">
        <canvas id="Canvas" ref={canvasRef}></canvas>
        <img alt="avatar" src="/images/Speaker.png" width={100} height={100} />
      </div>
    </div>
  );
};

export default Canvas;
