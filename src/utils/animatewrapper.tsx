import React from 'react';
import 'animate.css';

export type AnimationName =
    | 'bounce'
    | 'flash'
    | 'pulse'
    | 'rubberBand'
    | 'shakeX'
    | 'shakeY'
    | 'headShake'
    | 'swing'
    | 'tada'
    | 'wobble'
    | 'jello'
    | 'heartBeat'
    | 'backInDown'
    | 'backInLeft'
    | 'backInRight'
    | 'backInUp'
    | 'backOutDown'
    | 'backOutLeft'
    | 'backOutRight'
    | 'backOutUp'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceInUp'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'bounceOutUp'
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInDownBig'
    | 'fadeInLeft'
    | 'fadeInLeftBig'
    | 'fadeInRight'
    | 'fadeInRightBig'
    | 'fadeInUp'
    | 'fadeInUpBig'
    | 'fadeInTopLeft'
    | 'fadeInTopRight'
    | 'fadeInBottomLeft'
    | 'fadeInBottomRight'
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutDownBig'
    | 'fadeOutLeft'
    | 'fadeOutLeftBig'
    | 'fadeOutRight'
    | 'fadeOutRightBig'
    | 'fadeOutUp'
    | 'fadeOutUpBig'
    | 'fadeOutTopLeft'
    | 'fadeOutTopRight'
    | 'fadeOutBottomLeft'
    | 'fadeOutBottomRight'
    | 'flip'
    | 'flipInX'
    | 'flipInY'
    | 'flipOutX'
    | 'flipOutY'
    | 'lightSpeedInRight'
    | 'lightSpeedInLeft'
    | 'lightSpeedOutRight'
    | 'lightSpeedOutLeft'
    | 'rotateIn'
    | 'rotateInDownLeft'
    | 'rotateInDownRight'
    | 'rotateInUpLeft'
    | 'rotateInUpRight'
    | 'rotateOut'
    | 'rotateOutDownLeft'
    | 'rotateOutDownRight'
    | 'rotateOutUpLeft'
    | 'rotateOutUpRight'
    | 'hinge'
    | 'jackInTheBox'
    | 'rollIn'
    | 'rollOut'
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'zoomInUp'
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutLeft'
    | 'zoomOutRight'
    | 'zoomOutUp'
    | 'slideInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp'
    | 'slideOutDown'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'slideOutUp';

interface AnimateProps {
    animation: AnimationName;
    duration?: string;
    delay?: string;
    iterationCount?: string | number;
    children?: React.ReactNode;
}

const AnimateWrapper: React.FC<AnimateProps> = ({
    animation,
    duration,
    delay,
    iterationCount,
    children,
}) => {
    return (
        <div
            className={`animate__animated animate__${animation}`}
            style={{
                animationDuration: duration,
                animationDelay: delay,
                animationIterationCount: iterationCount,
            }}
        >
            {children}
        </div>
    );
};

export default AnimateWrapper;
