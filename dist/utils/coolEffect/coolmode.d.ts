import { RefObject } from 'react';
interface ParticleOptions {
    direction?: number;
    size?: number;
    speedHorz?: number;
    speedUp?: number;
    spinSpeed?: number;
    spinVal?: number;
}
export declare const useParticleEffect: (coolMode?: string, particleOptions?: ParticleOptions) => RefObject<HTMLButtonElement | HTMLAnchorElement>;
export {};
