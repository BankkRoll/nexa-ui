import React from 'react';
import { AnimationName } from '../../utils/animatewrapper';
import './Button.css';
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
 * Props for the Button component.
 */
interface ButtonProps extends ParticleOptions {
    text?: string;
    imageUrl?: string;
    disabledCoolMode?: boolean;
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
}
/**
 * A modern button component with cool particle effects.
 *
 * @param props The properties for the Button component.
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
