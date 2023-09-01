// src/components/card/Card.stories.ts
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../index';

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            defaultValue: 'Card Title',
        },
        content: {
            control: { type: 'text' },
            defaultValue: 'This is the card content.',
        },
        image: {
            control: { type: 'text' },
            defaultValue: 'https://via.placeholder.com/150',
        },
        imagePosition: {
            control: {
                type: 'select',
                options: ['top', 'middle', 'bottom'],
            },
            defaultValue: 'top',
        },
        footerContent: {
            control: { type: 'text' },
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'info', 'warning', 'danger'],
            },
            defaultValue: 'primary',
        },
        rounded: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'circle'],
            },
        },
        shadow: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg'],
            },
            defaultValue: 'sm',
        },
        animation: {
            control: {
                type: 'select',
                options: [
                    'bounce',
                    'flash',
                    'pulse',
                    'rubberBand',
                    'shakeX',
                    'shakeY',
                    'headShake',
                    'swing',
                    'tada',
                    'wobble',
                    'jello',
                    'heartBeat',
                    'backInDown',
                    'backInLeft',
                    'backInRight',
                    'backInUp',
                    'backOutDown',
                    'backOutLeft',
                    'backOutRight',
                    'backOutUp',
                    'bounceIn',
                    'bounceInDown',
                    'bounceInLeft',
                    'bounceInRight',
                    'bounceInUp',
                    'bounceOut',
                    'bounceOutDown',
                    'bounceOutLeft',
                    'bounceOutRight',
                    'bounceOutUp',
                    'fadeIn',
                    'fadeInDown',
                    'fadeInDownBig',
                    'fadeInLeft',
                    'fadeInLeftBig',
                    'fadeInRight',
                    'fadeInRightBig',
                    'fadeInUp',
                    'fadeInUpBig',
                    'fadeInTopLeft',
                    'fadeInTopRight',
                    'fadeInBottomLeft',
                    'fadeInBottomRight',
                    'fadeOut',
                    'fadeOutDown',
                    'fadeOutDownBig',
                    'fadeOutLeft',
                    'fadeOutLeftBig',
                    'fadeOutRight',
                    'fadeOutRightBig',
                    'fadeOutUp',
                    'fadeOutUpBig',
                    'fadeOutTopLeft',
                    'fadeOutTopRight',
                    'fadeOutBottomLeft',
                    'fadeOutBottomRight',
                    'flip',
                    'flipInX',
                    'flipInY',
                    'flipOutX',
                    'flipOutY',
                    'lightSpeedInRight',
                    'lightSpeedInLeft',
                    'lightSpeedOutRight',
                    'lightSpeedOutLeft',
                    'rotateIn',
                    'rotateInDownLeft',
                    'rotateInDownRight',
                    'rotateInUpLeft',
                    'rotateInUpRight',
                    'rotateOut',
                    'rotateOutDownLeft',
                    'rotateOutDownRight',
                    'rotateOutUpLeft',
                    'rotateOutUpRight',
                    'hinge',
                    'jackInTheBox',
                    'rollIn',
                    'rollOut',
                    'zoomIn',
                    'zoomInDown',
                    'zoomInLeft',
                    'zoomInRight',
                    'zoomInUp',
                    'zoomOut',
                    'zoomOutDown',
                    'zoomOutLeft',
                    'zoomOutRight',
                    'zoomOutUp',
                    'slideInDown',
                    'slideInLeft',
                    'slideInRight',
                    'slideInUp',
                    'slideOutDown',
                    'slideOutLeft',
                    'slideOutRight',
                    'slideOutUp',
                ],
            },
            description: 'Animation effect on the button',
        },
        animateOnClick: {
            control: {
                type: 'select',
                options: [
                    'bounce',
                    'flash',
                    'pulse',
                    'rubberBand',
                    'shakeX',
                    'shakeY',
                    'headShake',
                    'swing',
                    'tada',
                    'wobble',
                    'jello',
                    'heartBeat',
                    'backInDown',
                    'backInLeft',
                    'backInRight',
                    'backInUp',
                    'backOutDown',
                    'backOutLeft',
                    'backOutRight',
                    'backOutUp',
                    'bounceIn',
                    'bounceInDown',
                    'bounceInLeft',
                    'bounceInRight',
                    'bounceInUp',
                    'bounceOut',
                    'bounceOutDown',
                    'bounceOutLeft',
                    'bounceOutRight',
                    'bounceOutUp',
                    'fadeIn',
                    'fadeInDown',
                    'fadeInDownBig',
                    'fadeInLeft',
                    'fadeInLeftBig',
                    'fadeInRight',
                    'fadeInRightBig',
                    'fadeInUp',
                    'fadeInUpBig',
                    'fadeInTopLeft',
                    'fadeInTopRight',
                    'fadeInBottomLeft',
                    'fadeInBottomRight',
                    'fadeOut',
                    'fadeOutDown',
                    'fadeOutDownBig',
                    'fadeOutLeft',
                    'fadeOutLeftBig',
                    'fadeOutRight',
                    'fadeOutRightBig',
                    'fadeOutUp',
                    'fadeOutUpBig',
                    'fadeOutTopLeft',
                    'fadeOutTopRight',
                    'fadeOutBottomLeft',
                    'fadeOutBottomRight',
                    'flip',
                    'flipInX',
                    'flipInY',
                    'flipOutX',
                    'flipOutY',
                    'lightSpeedInRight',
                    'lightSpeedInLeft',
                    'lightSpeedOutRight',
                    'lightSpeedOutLeft',
                    'rotateIn',
                    'rotateInDownLeft',
                    'rotateInDownRight',
                    'rotateInUpLeft',
                    'rotateInUpRight',
                    'rotateOut',
                    'rotateOutDownLeft',
                    'rotateOutDownRight',
                    'rotateOutUpLeft',
                    'rotateOutUpRight',
                    'hinge',
                    'jackInTheBox',
                    'rollIn',
                    'rollOut',
                    'zoomIn',
                    'zoomInDown',
                    'zoomInLeft',
                    'zoomInRight',
                    'zoomInUp',
                    'zoomOut',
                    'zoomOutDown',
                    'zoomOutLeft',
                    'zoomOutRight',
                    'zoomOutUp',
                    'slideInDown',
                    'slideInLeft',
                    'slideInRight',
                    'slideInUp',
                    'slideOutDown',
                    'slideOutLeft',
                    'slideOutRight',
                    'slideOutUp',
                ],
            },
            description: 'Animation effect on the button when clicked',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Base card configurations
export const Default: Story = {
    args: {
        title: 'Default Card',
        content: 'This is the default card content.',
    },
};

export const CardWithImage: Story = {
    args: {
        title: 'Card With Image',
        content: 'This is the card content.',
        footerContent: 'This is the card footer content.',
        image: 'https://via.placeholder.com/150',
        imagePosition: 'top',
    },
};

export const PrimaryCard: Story = {
    args: {
        title: 'Primary Card',
        variant: 'primary',
    },
};

export const InfoCard: Story = {
    args: {
        title: 'Info Card',
        variant: 'info',
    },
};

export const WarningCard: Story = {
    args: {
        title: 'Warning Card',
        variant: 'warning',
    },
};

export const DangerCard: Story = {
    args: {
        title: 'Danger Card',
        variant: 'danger',
    },
};

export const SuccessCard: Story = {
    args: {
        title: 'Success Card',
        variant: 'success',
    },
};

export const RoundedCard: Story = {
    args: {
        title: 'Rounded Card',
        rounded: 'md',
    },
};

export const ShadowCard: Story = {
    args: {
        title: 'Shadow Card',
        shadow: 'md',
    },
};

export const OnClickAnimation: Story = {
    args: {
        title: 'OnClick Animation',
        content: 'Click Me!',
        animateOnClick: 'flash',
    },
};

export const AnimatedCard: Story = {
    args: {
        title: 'Animated Card',
        animation: 'flash',
    },
};
