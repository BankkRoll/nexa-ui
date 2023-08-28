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
        onClick: {
            action: 'clicked',
            description: 'Event triggered when the button is clicked',
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

// Base button configurations
export const Default: Story = {
    args: {
        text: 'Default Button',
    },
};

export const RoundedSM: Story = {
    args: {
        text: 'Rounded Button',
        rounded: 'sm',
    },
};

export const RoundedLG: Story = {
    args: {
        text: 'Rounded Button',
        rounded: 'lg',
    },
};

export const SmallButton: Story = {
    args: {
        text: 'Small Button',
        size: 'small',
    },
};

export const LargeButton: Story = {
    args: {
        text: 'Large Button',
        size: 'large',
    },
};

export const PrimaryButton: Story = {
    args: {
        text: 'Primary Button',
        variant: 'primary',
    },
};

export const SecondaryButton: Story = {
    args: {
        text: 'Secondary Button',
        variant: 'secondary',
    },
};

export const SuccessButton: Story = {
    args: {
        text: 'Success Button',
        variant: 'success',
    },
};

export const DangerButton: Story = {
    args: {
        text: 'Danger Button',
        variant: 'danger',
    },
};

export const WarningButton: Story = {
    args: {
        text: 'Warning Button',
        variant: 'warning',
    },
};

export const InfoButton: Story = {
    args: {
        text: 'Info Button',
        variant: 'info',
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
        text: 'Plain Text Button',
        plain: true,
    },
};

export const IconButton: Story = {
    args: {
        text: 'Button with Icon',
        icon: 'fa fa-rocket',
    },
};

export const ButtonWithSMShadow: Story = {
    args: {
        text: 'Button Small Shadow',
        shadow: 'sm',
    },
};

export const ButtonWithLGShadow: Story = {
    args: {
        text: 'Button Large Shadow',
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
export const ButtonWithAlert: Story = {
    args: {
        text: 'Click for Alert',
        onClick: () => alert('Button clicked!'),
    },
};

export const AnimatedButton: Story = {
    args: {
        text: 'Animated Button',
        animation: 'flash',
    },
};

export const OnClickAnimation: Story = {
    args: {
        text: 'Click Me!',
        animateOnClick: 'flash',
    },
};

export const ButtonWithLink: Story = {
    args: {
        text: 'Button as Link',
        href: 'https://bankkroll.xyz',
    },
};

export const DrippyMode: Story = {
    args: {
        text: 'Button with Drippy Mode',
        drippyMode: true,
    },
};

export const ExplodedMode: Story = {
    args: {
        text: 'Button with Exploded Mode',
        explodedMode: true,
    },
};
export const CoolMode: Story = {
    args: {
        text: 'Button with Cool Mode',
        coolmode: true,
    },
};

export const CoolModeWithImage: Story = {
    args: {
        text: 'Button with Custom Cool Mode',
        coolmode: './custom.png',
    },
};

export const CoolModeCustomizations: Story = {
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
