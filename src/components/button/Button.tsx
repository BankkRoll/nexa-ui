// src/components/button/Button.tsx
import React, { useState } from 'react';
import { useParticleEffect } from '../../utils/coolEffect/coolmode';
import { useDrippyEffect } from '../../utils/drippyEffect/drippyMode';
import { useExplodedEffect } from '../../utils/explodedEffect/explodedMode';
import { useRainingEffect } from '../../utils/rainingEffect/rainingMode';
import AnimateWrapper, { AnimationName } from '../../utils/animatewrapper';
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
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info';
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
const Button: React.FC<ButtonProps> = ({
    text,
    coolMode,
    explodedMode,
    drippyMode,
    rainingMode,
    className,
    size = 'medium',
    href,
    disabled,
    loading,
    rounded,
    variant = 'primary',
    outline = false,
    plain = false,
    icon,
    shadow,
    tooltip,
    animation,
    onClick,
    animateOnClick,
    rainingParticleCount,
    rainingSpeed,
    rainingSize,
    rainingCustomImage,
    ...particleOptions
}) => {
    const [currentAnimation, setCurrentAnimation] =
        useState<AnimationName | null>(animation || null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }

        // If animateOnClick prop is provided, set the currentAnimation state
        if (animateOnClick) {
            setCurrentAnimation(animateOnClick);

            // Reset the animation state after a short delay (equal to animation duration)
            setTimeout(() => setCurrentAnimation(animation || null), 1000); // Assuming 1 second for animation duration
        }
    };
    const drippyRef = useDrippyEffect(drippyMode ?? false);
    const explodedRef = useExplodedEffect(explodedMode ?? false);
    const coolRef = useParticleEffect(
        typeof coolMode === 'string'
            ? coolMode
            : coolMode
            ? 'coolMode'
            : undefined,
        particleOptions,
    );
    const rainingOptions: RainingOptions | undefined = rainingMode
        ? {
              rainingParticleCount,
              rainingSpeed,
              rainingSize,
              rainingCustomImage,
          }
        : undefined;

    const rainingRef = useRainingEffect(rainingOptions);

    const finalRef = drippyMode
        ? drippyRef
        : explodedMode
        ? explodedRef
        : coolMode
        ? coolRef
        : rainingRef;

    const combinedClassName = `button-default ${size} rounded-${rounded} ${variant} ${
        outline ? 'outline' : ''
    } ${plain ? 'plain' : ''} shadow-${shadow} ${loading ? 'loading' : ''} ${
        disabled ? 'disabled' : ''
    } ${className || ''}`;

    const content = loading ? (
        <div className="loading-container">
            {icon && <i className={`icon ${icon}`}></i>}
            Loading
            <span className="spinner"></span>
        </div>
    ) : (
        <>
            {icon && <i className={`icon ${icon}`}></i>}
            {text}
        </>
    );

    /**
     * Render the appropriate button or link element based on props.
     */
    const renderButton = () => {
        if (href) {
            return (
                <a
                    ref={(node: HTMLButtonElement | HTMLAnchorElement | null) =>
                        ((
                            finalRef as React.MutableRefObject<
                                HTMLButtonElement | HTMLAnchorElement | null
                            >
                        ).current = node)
                    }
                    className={combinedClassName}
                    href={disabled ? undefined : href}
                    title={tooltip}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={(node: HTMLButtonElement | HTMLAnchorElement | null) =>
                    ((
                        finalRef as React.MutableRefObject<
                            HTMLButtonElement | HTMLAnchorElement | null
                        >
                    ).current = node)
                }
                className={combinedClassName}
                disabled={disabled || loading}
                title={tooltip}
                onClick={handleClick}
            >
                {content}
            </button>
        );
    };

    // Use the AnimateWrapper if an animation prop is provided
    return currentAnimation ? (
        <AnimateWrapper animation={currentAnimation}>
            {renderButton()}
        </AnimateWrapper>
    ) : (
        renderButton()
    );
};

export default Button;
