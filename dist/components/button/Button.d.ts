import React from 'react';
import { AnimationName } from '../../utils/animatewrapper';
import './Button.css';
import 'font-awesome/css/font-awesome.min.css';
/**
 * Options for controlling the appearance and behavior of particles.
 */
interface ParticleOptions {
    direction?: number;
    particleSize?: number;
    speedHorz?: number;
    speedUp?: number;
    spinSpeed?: number;
    spinVal?: number;
}
/**
 * Props for the Particle component.
 */
interface RainingOptions {
    rainingParticleCount?: number;
    rainingSpeed?: number;
    rainingSize?: number;
    rainingCustomImage?: string;
}
/**
 * Props for the Button component.
 */
interface ButtonProps extends ParticleOptions, RainingOptions {
    text?: string;
    coolMode?: true;
    explodedMode?: true;
    drippyMode?: true;
    rainingMode?: true | RainingOptions;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    href?: string;
    disabled?: boolean;
    loading?: boolean;
    rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circle';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    outline?: boolean;
    plain?: boolean;
    icon?: string;
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    tooltip?: string;
    animation?: AnimationName;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    animateOnClick?: AnimationName;
}
/**
 * A advanced button component that supports animation, cool mode, exploded mode, drippy mode and much more.
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
