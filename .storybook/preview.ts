import type { Preview } from '@storybook/react';
import yourTheme from './YourTheme';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: { hideNoControlsWarning: true },
        actions: { argTypesRegex: '^on.*' },
        docs: {
            yourTheme,
        },
        options: {
            storySort: {
                order: ['Docs/Intro', '*'],
            },
        },
    },
};

export default preview;
