// src/components/card/Card.tsx
import React, { useState } from 'react';
import AnimateWrapper, { AnimationName } from '../../utils/animatewrapper';
import './Card.css';

interface CardProps {
    title?: string;
    content?: string | JSX.Element;
    image?: string;
    imagePosition?: 'top' | 'middle' | 'bottom';
    footerContent?: string | JSX.Element;
    variant?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger';
    rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'circle';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    animation?: AnimationName;
    actions?: JSX.Element[];
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    animateOnClick?: AnimationName;
}

const Card: React.FC<CardProps> = ({
    title,
    content,
    image,
    imagePosition = 'top',
    footerContent,
    variant = 'primary',
    rounded = 'md',
    shadow = 'md',
    animation,
    actions,
    onClick,
    animateOnClick,
}) => {
    const [currentAnimation, setCurrentAnimation] =
        useState<AnimationName | null>(animation || null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(event);
        }

        if (animateOnClick) {
            setCurrentAnimation(animateOnClick);
            setTimeout(() => setCurrentAnimation(animation || null), 1000);
        }
    };

    const combinedClassName = `card ${rounded} ${variant} shadow-${shadow}`;

    const renderCard = () => (
        <div className={combinedClassName} onClick={handleClick}>
            {title && <header className="card-title">{title}</header>}
            {image && imagePosition === 'top' && (
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
            <section className="card-content">{content}</section>
            {image && imagePosition === 'middle' && (
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
            {actions && <div className="card-actions">{actions}</div>}
            {footerContent && (
                <footer className="card-footer">{footerContent}</footer>
            )}
            {image && imagePosition === 'bottom' && (
                <div
                    className="card-image"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
        </div>
    );

    return currentAnimation ? (
        <AnimateWrapper animation={currentAnimation}>
            {renderCard()}
        </AnimateWrapper>
    ) : (
        renderCard()
    );
};

export default Card;
