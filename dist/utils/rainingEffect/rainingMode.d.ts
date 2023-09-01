import { RefObject } from 'react';
interface RainingOptions {
    rainingParticleCount?: number;
    rainingSpeed?: number;
    rainingSize?: number;
    rainingCustomImage?: string;
}
export declare const useRainingEffect: (options?: RainingOptions) => RefObject<HTMLButtonElement | HTMLAnchorElement>;
export {};
