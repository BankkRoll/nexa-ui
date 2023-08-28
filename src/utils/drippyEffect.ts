import { useEffect, useRef, RefObject } from 'react';
import './drippy.css';

interface DrippyOptions {
    color?: string;
}

export const useDrippyEffect = (
    drippyMode: boolean,
    drippyOptions?: DrippyOptions,
) => {
    const ref: RefObject<HTMLButtonElement | HTMLAnchorElement> = useRef(null);
    let drippyElement: HTMLElement | null = null;

    useEffect(() => {
        if (ref.current && drippyMode) {
            ref.current.addEventListener('mouseenter', () => {
                drippyElement = createDrippyEffect(
                    ref.current as HTMLElement,
                    drippyOptions,
                );
            });

            ref.current.addEventListener('mouseleave', () => {
                if (drippyElement) {
                    drippyElement.remove();
                }
            });
        }
    }, [drippyMode, drippyOptions]);

    return ref;
};

const createDrippyEffect = (
    element: HTMLElement,
    options?: DrippyOptions,
): HTMLElement => {
    const drippy = document.createElement('div');
    drippy.className = 'loader';

    const drops = document.createElement('div');
    drops.className = 'drops';

    const drop2 = document.createElement('div');
    drop2.className = 'drop2';

    drops.appendChild(drop2);
    drippy.appendChild(drops);

    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);
    const buttonColor = computedStyle.backgroundColor;

    const color = options?.color || buttonColor;
    drop2.style.backgroundColor = color;

    // Function to set a random horizontal position for the drop
    const setRandomPosition = () => {
        const randomOffset = Math.random() * rect.width - 50;
        drop2.style.left = `${randomOffset}px`;
    };

    // Set initial position
    setRandomPosition();

    // Adjust position every time the animation iterates
    drop2.addEventListener('animationiteration', setRandomPosition);

    drippy.style.left = `${rect.left}px`;
    drippy.style.top = `${rect.bottom}px`;

    document.body.appendChild(drippy);
    return drippy;
};
