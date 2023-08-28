// src/components/button/Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import 'font-awesome/css/font-awesome.min.css';

import { Button } from '../../index';

// Define the storybook settings for the Button component
const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
            defaultValue: 'Button',
        },
        coolmode: {
            control: {
                type: 'text',
            },
            description:
                'Either "coolmode" for random circles or provide a URL for a custom image for the cool mode',
        },
        direction: {
            control: {
                type: 'number',
            },
            description: 'Direction for the particle animation in cool mode',
        },
        particleSize: {
            control: {
                type: 'number',
            },
            description: 'Size of the particle in cool mode',
        },
        speedHorz: {
            control: {
                type: 'number',
            },
            description: 'Horizontal speed of the particle in cool mode',
        },
        speedUp: {
            control: {
                type: 'number',
            },
            description: 'Upward speed of the particle in cool mode',
        },
        spinSpeed: {
            control: {
                type: 'number',
            },
            description: 'Spin speed of the particle in cool mode',
        },
        spinVal: {
            control: {
                type: 'number',
            },
            description: 'Spin value of the particle in cool mode',
        },
        className: {
            control: {
                type: 'text',
            },
            description: 'Custom CSS class for additional styling',
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
            defaultValue: 'medium',
            description: 'Size of the button',
        },
        href: {
            control: {
                type: 'text',
            },
            description: 'Link URL if the button acts as a link',
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            description: 'Disables the button if set to true',
        },
        loading: {
            control: {
                type: 'boolean',
            },
            description:
                'Displays the button in a loading state if set to true',
        },
        rounded: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'circle'],
            },
            description: 'Rounded corners of the button',
        },
        variant: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                ],
            },
            defaultValue: 'primary',
            description: 'Color variant of the button',
        },
        outline: {
            control: {
                type: 'boolean',
            },
            description: 'Outline style of the button',
        },
        plain: {
            control: {
                type: 'boolean',
            },
            description:
                'Displays the button as plain text without background or outline',
        },
        icon: {
            control: {
                type: 'text',
            },
            description: 'Icon for the button',
        },
        shadow: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg'],
            },
            defaultValue: 'sm',
            description: 'Shadow depth of the button',
        },
        tooltip: {
            control: {
                type: 'text',
            },
            description: 'Tooltip to show on button hover',
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
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Base button configurations
export const Default: Story = {
    args: {
        text: 'Default Button',
    },
};

export const ButtonSizes: Story = {
    args: {
        text: 'Small Button',
        size: 'small',
    },
};

export const RoundedButtons: Story = {
    args: {
        text: 'Rounded Button',
        rounded: 'xl',
    },
};

export const VariantButtons: Story = {
    args: {
        text: 'Danger Button',
        variant: 'danger',
    },
};

export const OutlineButton: Story = {
    args: {
        text: 'Outline Button',
        outline: true,
    },
};

export const PlainButton: Story = {
    args: {
        text: 'Plain Button',
        plain: true,
    },
};

export const IconButton: Story = {
    args: {
        text: 'Button with Icon',
        icon: 'fa fa-rocket',
    },
};

export const ButtonWithShadow: Story = {
    args: {
        text: 'Button with Large Shadow',
        shadow: 'lg',
    },
};

export const ButtonWithTooltip: Story = {
    args: {
        text: 'Button with Tooltip',
        tooltip: 'This is a tooltip!',
    },
};

// Button states
export const DisabledButton: Story = {
    args: {
        text: 'Disabled Button',
        disabled: true,
    },
};

export const LoadingButton: Story = {
    args: {
        text: 'Button',
        loading: true,
    },
};

// Button with additional features
export const ButtonAsLink: Story = {
    args: {
        text: 'Button as Link',
        href: 'https://bankkroll.xyz',
    },
};

export const CoolModeWithRandomCircles: Story = {
    args: {
        text: 'Button with Cool Mode',
        coolmode: true,
    },
};

export const WithImageUrl: Story = {
    args: {
        text: 'Button with Custom Cool Mode',
        coolmode: './custom.png',
    },
};

export const WithParticleCustomizations: Story = {
    args: {
        text: 'Button with Particle Customizations',
        coolmode: true,
        direction: 4,
        particleSize: 100,
        speedHorz: 5,
        speedUp: 40,
        spinSpeed: 40,
        spinVal: 45,
    },
};

// Animated button configurations
export const AnimatedButton: Story = {
    args: {
        text: 'Animated Button',
        animation: 'flash',
    },
};
