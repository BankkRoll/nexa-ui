import { RefObject } from 'react';
import './drippy.css';
interface DrippyOptions {
    color?: string;
}
export declare const useDrippyEffect: (drippyMode: boolean, drippyOptions?: DrippyOptions) => RefObject<HTMLButtonElement | HTMLAnchorElement>;
export {};
