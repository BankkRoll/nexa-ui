import { useEffect, useRef, RefObject } from 'react';

interface ExplodedParticle {
    direction: number;
    element: HTMLElement;
    speed: number;
}

export const useExplodedEffect = (
    explodedMode: boolean,
): RefObject<HTMLButtonElement | HTMLAnchorElement> => {
    const ref: RefObject<HTMLButtonElement | HTMLAnchorElement> = useRef(null);

    useEffect(() => {
        if (ref.current && explodedMode) {
            return applyExplodedEffect(ref.current);
        }
    }, [explodedMode]);

    return ref;
};

const getExplodedContainer = () => {
    const id = '_exploded_container';
    let container = document.getElementById(id);
    if (!container) {
        container = document.createElement('div');
        container.id = id;
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '2147483647';
        document.body.appendChild(container);
    }
    return container;
};

function applyExplodedEffect(element: HTMLElement): () => void {
    const container = getExplodedContainer();
    const buttonColor = getComputedStyle(element).backgroundColor;

    const particles: ExplodedParticle[] = [];

    function getRandomPoint(maxWidth: number, maxHeight: number) {
        return `${Math.random() * maxWidth}% ${Math.random() * maxHeight}%`;
    }

    function explode() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.backgroundColor = buttonColor || 'red';

            const randomWidth = Math.random() * 15 + 5;
            const randomHeight = Math.random() * 25 + 10;

            particle.style.width = `${randomWidth}px`;
            particle.style.height = `${randomHeight}px`;

            // Create a random clip-path with 4-6 points to make it irregular
            const pointsCount = Math.floor(Math.random() * 3) + 4;
            const points = [];
            for (let j = 0; j < pointsCount; j++) {
                points.push(getRandomPoint(100, 100));
            }
            particle.style.clipPath = `polygon(${points.join(', ')})`;

            particle.style.left = `${
                element.getBoundingClientRect().left +
                Math.random() * element.offsetWidth
            }px`;
            particle.style.top = `${
                element.getBoundingClientRect().top +
                Math.random() * element.offsetHeight
            }px`;

            container.appendChild(particle);

            const direction = Math.random() * 360;
            const speed = Math.random() * 10;

            particles.push({
                element: particle,
                direction,
                speed,
            });
        }

        // Hide the original element to give the illusion it exploded
        element.style.visibility = 'hidden';

        // Set a timer to remove all particles and restore the element's visibility after 6 seconds
        setTimeout(() => {
            particles.forEach((p) => p.element.remove());
            particles.length = 0;
            element.style.visibility = 'visible';
        }, 5000);
    }

    function refreshParticles() {
        particles.forEach((p) => {
            const radians = (p.direction * Math.PI) / 180;
            const dx = p.speed * Math.cos(radians);
            const dy = p.speed * Math.sin(radians);

            const x = parseFloat(p.element.style.left) + dx;
            const y = parseFloat(p.element.style.top) + dy;

            p.element.style.left = `${x}px`;
            p.element.style.top = `${y}px`;
        });
    }

    let animationFrame: number | undefined;

    function loop() {
        refreshParticles();
        animationFrame = requestAnimationFrame(loop);
    }

    element.addEventListener('click', explode);
    loop();

    return () => {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        element.removeEventListener('click', explode);
        // Restore the original element's visibility
        element.style.visibility = 'visible';
        particles.forEach((p) => p.element.remove());
        if (!container.hasChildNodes()) {
            container.remove();
        }
    };
}
