// src/components/button/Button.tsx
import React from 'react';
import { useParticleEffect } from '../../utils/coolmode';
import AnimateWrapper, { AnimationName } from '../../utils/animatewrapper';
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
}

/**
 * A modern button component with cool particle effects.
 *
 * @param props The properties for the Button component.
 */
const Button: React.FC<ButtonProps> = ({
    text,
    imageUrl,
    disabledCoolMode,
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
    ...particleOptions
}) => {
    const coolRef = useParticleEffect(
        imageUrl,
        disabledCoolMode,
        particleOptions,
    );

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
                            coolRef as React.MutableRefObject<
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
                        coolRef as React.MutableRefObject<
                            HTMLButtonElement | HTMLAnchorElement | null
                        >
                    ).current = node)
                }
                className={combinedClassName}
                disabled={disabled}
                title={tooltip}
            >
                {content}
            </button>
        );
    };

    // Use the AnimateWrapper if an animation prop is provided
    return animation ? (
        <AnimateWrapper animation={animation}>{renderButton()}</AnimateWrapper>
    ) : (
        renderButton()
    );
};

export default Button;
