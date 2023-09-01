# nexa-ui

![nexa-ui](https://github.com/BankkRoll/nexa-ui/assets/106103625/f45326f5-f355-4e7d-a1e9-6ca927d9232f)

Welcome to nexa-ui, a cutting-edge component library for React designed for both developers and designers.

## 🌟 Features

-   **Styling Flexibility**: Designed to adapt seamlessly with popular CSS frameworks like Tailwind, Bootstrap, and your custom styles.
-   **Integrated Animations**: Enjoy smooth, high-quality animations courtesy of animate.css.
-   **Icon Support**: Leverage Font Awesome icons to enhance your UI components.
-   **Custom Interactions**: Add interactive flair to your UI with our advanced custom features.
-   **Fully Customizable**: Tailor each component to align perfectly with your brand.
-   **Regular Updates**: An actively maintained library, stay tuned for regular feature updates and improvements.

## 📦 Installation

To install nexa-ui, run the following command:

```bash
npm install nexa-ui
```

## 🛠 Usage Flexibility

`nexa-ui` is meticulously crafted to offer utmost flexibility. Here are ways you can use our library:

### Pre-built Components

Simply import our Button, Card, and other components to get started instantly.

```jsx
import { Button, Card } from 'nexa-ui';
```

### Utility Hooks

Want to add some nexa-ui magic to your custom or third-party components? You can directly use our utility hooks like `useCoolMode`, `useDrippyMode`, etc.

```jsx
import {
    useCoolMode,
    useRainingMode,
    useExplodedMode,
    useDrippyMode,
} from 'nexa-ui';
```

#### Example: Adding Cool Mode to a Custom Button

```jsx
import React from 'react';
import { useCoolMode } from 'nexa-ui';

const MyCustomButton = () => {
    const coolMode = useCoolMode();

    return (
        <button {...coolMode} className="my-custom-button">
            My Cool Button
        </button>
    );
};
```

## 🔗 Additional Resources

-   [npm package](https://www.npmjs.com/package/nexa-ui)
-   [Storybook Demo](https://nexa-ui.vercel.app/)
-   [GitHub Repository](https://github.com/BankkRoll/nexa-ui)

## 🔜 Stay Tuned for More Updates!

We are constantly working to improve `nexa-ui` and add new features. Keep an eye on this space for future updates.
