import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

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
    imageUrl: {
      control: {
        type: 'text',
      },
      description: 'URL for the image to be used in cool mode or "coolmode" for random circles',
    },
    disabledCoolMode: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the cool mode for the button if set to true',
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
        options: ['small', 'medium', 'large']
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
      description: 'Displays the button in a loading state if set to true',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Stories for the Button component

export const Default: Story = {
  args: {
    text: 'Default Button',
  },
};

export const CoolModeWithRandomCircles: Story = {
  args: {
    text: 'Button with Cool Mode',
    imageUrl: 'coolmode',
  },
};

export const WithImageUrl: Story = {
  args: {
    text: 'Button with Custom Cool Mode',
    imageUrl: './custom.png',
  },
};

export const ButtonSizes: Story = {
  args: {
    text: 'Small Button',
    size: 'small',
  },
};

export const ButtonAsLink: Story = {
  args: {
    text: 'Button as Link',
    href: 'https://bankkroll.xyz',
  },
};

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

export const WithParticleCustomizations: Story = {
  args: {
    text: 'Button with Particle Customizations',
    imageUrl: 'coolmode',
    direction: 1,
    particleSize: 20,
    speedHorz: 5,
    speedUp: 10,
    spinSpeed: 30,
    spinVal: 45,
  },
};
