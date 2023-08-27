// src/components/button/Button.tsx
import React from 'react';
import { useCoolMode } from '../../utils/coolmode';
import './Button.css'; 

interface ParticleOptions {
    direction?: number;
    particleSize?: number;
    speedHorz?: number;
    speedUp?: number;
    spinSpeed?: number;
    spinVal?: number;
}

interface ButtonProps extends ParticleOptions {
    text?: string;
    imageUrl?: string;
    disabledCoolMode?: boolean;
    className?: string;
    size?: "small" | "medium" | "large";
    href?: string;
    disabled?: boolean;
    loading?: boolean;
}

const Button = ({ 
    text, 
    imageUrl, 
    disabledCoolMode, 
    className, 
    size = "medium",
    href,
    disabled,
    loading,
    ...particleOptions 
}: ButtonProps) => {
    const coolRef = useCoolMode(imageUrl, disabledCoolMode, particleOptions);
    const combinedClassName = `button-default ${size} ${className || ''} ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`;

    const content = loading 
    ? (
        <div className="loading-container">
            Loading 
            <span className="spinner"></span>
        </div>
    ) 
    : text;

    if (href) {
        return (
            <a 
                ref={coolRef as any} 
                className={combinedClassName}
                href={disabled ? undefined : href}
            >
                {content}
            </a>
        );
    }

    return (
        <button 
            ref={coolRef as any}  
            className={combinedClassName}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

export default Button;