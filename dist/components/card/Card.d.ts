import React from 'react';
import { AnimationName } from '../../utils/animatewrapper';
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
declare const Card: React.FC<CardProps>;
export default Card;
