// src/utils/rainingMode.ts
import { useEffect, useRef, RefObject, useCallback } from 'react';

interface Particle {
    element: HTMLElement;
    left: number;
    size: number;
    speedDown: number;
    top: number;
}

interface RainingOptions {
    rainingParticleCount?: number;
    rainingSpeed?: number;
    rainingSize?: number;
    rainingCustomImage?: string;
}

export const useRainingEffect = (options?: RainingOptions) => {
    const ref: RefObject<HTMLButtonElement | HTMLAnchorElement> = useRef(null);
    const particles: Particle[] = useRef([]).current;

    const particleCount = options?.rainingParticleCount || 30;
    const speed = options?.rainingSpeed || 5;
    const size = options?.rainingSize || 50;
    const customImage = options?.rainingCustomImage;

    const cleanupParticles = () => {
        particles.forEach((p) => p.element.remove());
        particles.length = 0; // Clear the array
    };

    const generateParticle = () => {
        const left = Math.random() * window.innerWidth;
        const top = 0;
        const particle = document.createElement('div');

        if (customImage) {
            particle.innerHTML = `<img src="${customImage}" width="${size}" height="${size}" />`;
        } else {
            const svgNS = 'http://www.w3.org/2000/svg';
            const squareSVG = document.createElementNS(svgNS, 'svg');
            const square = document.createElementNS(svgNS, 'rect');
            square.setAttributeNS(null, 'width', size.toString());
            square.setAttributeNS(null, 'height', size.toString());
            square.setAttributeNS(
                null,
                'fill',
                `hsl(${Math.random() * 360}, 70%, 50%)`,
            );

            squareSVG.appendChild(square);
            squareSVG.setAttribute('width', size.toString());
            squareSVG.setAttribute('height', size.toString());

            particle.appendChild(squareSVG);
        }

        particle.style.position = 'fixed';
        particle.style.top = `${top}px`;
        particle.style.left = `${left}px`;

        document.body.appendChild(particle);

        particles.push({
            element: particle,
            left,
            size,
            speedDown: speed,
            top,
        });
    };

    const refreshParticles = () => {
        particles.forEach((p, index) => {
            p.top += p.speedDown;
            if (p.top > window.innerHeight) {
                p.element.remove();
                particles.splice(index, 1);
            } else {
                p.element.style.transform = `translate3d(${p.left}px, ${p.top}px, 0)`;
            }
        });
    };

    const handleClick = useCallback(() => {
        // Clear existing particles
        cleanupParticles();

        // Generate new particles
        let intervalId = setInterval(() => {
            generateParticle();
            if (particles.length >= particleCount) {
                clearInterval(intervalId);
            }
        }, 100);
    }, [particleCount]);

    useEffect(() => {
        let animationFrame: number;

        const loop = () => {
            refreshParticles();
            animationFrame = requestAnimationFrame(loop);
        };

        const handlePopState = () => {
            cleanupParticles();
        };

        window.addEventListener('popstate', handlePopState);

        if (ref.current) {
            ref.current.addEventListener('click', handleClick);
        }

        loop();

        return () => {
            window.removeEventListener('popstate', handlePopState);

            if (ref.current) {
                ref.current.removeEventListener('click', handleClick);
            }

            cancelAnimationFrame(animationFrame);
            cleanupParticles();
        };
    }, [handleClick]);

    return ref;
};
