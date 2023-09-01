import { Button } from 'nexa-ui';
import React from 'react';

const Intro: React.FC = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '960px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <img
                    style={{ width: '300px', margin: '0 auto 2em auto' }}
                    src="./logo.png" // Replace with your actual logo
                    alt="nexa-ui logo"
                />
                <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>
                    Welcome to nexa-ui
                </h1>
                <h2
                    style={{ fontSize: '1.5em', marginTop: '0', color: '#555' }}
                >
                    A Interactive Component Library for React
                </h2>
                <hr style={{ margin: '2em 0', border: '2px solid #eee' }} />
            </div>

            <div style={{ margin: '2em auto' }}>
                <h2
                    style={{
                        fontSize: '2em',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '0.5em',
                    }}
                >
                    🌟 Features
                </h2>
                <ul style={{ lineHeight: '1.6em', fontSize: '1.2em' }}>
                    <li>
                        <strong>Styling Flexibility</strong>: Adapt to various
                        CSS frameworks or use custom styles.
                    </li>
                    <li>
                        <strong>Integrated Animations</strong>: Smooth,
                        high-quality animations via animate.css.
                    </li>
                    <li>
                        <strong>Icon Support</strong>: Font Awesome integration
                        for enhanced UI.
                    </li>
                    <li>
                        <strong>Custom Interactions</strong>: Advanced
                        interactive features for unique UI experiences.
                    </li>
                    <li>
                        <strong>Fully Customizable</strong>: Customize each
                        component to align with your brand.
                    </li>
                </ul>

                <h2
                    style={{
                        fontSize: '2em',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '0.5em',
                    }}
                >
                    📦 Installation
                </h2>
                <pre
                    style={{
                        padding: '1em',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '5px',
                    }}
                >
                    <code>npm install nexa-ui</code>
                </pre>

                <h2
                    style={{
                        fontSize: '2em',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '0.5em',
                    }}
                >
                    🛠 Usage Flexibility
                </h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6em' }}>
                    The <strong>nexa-ui</strong> library is meticulously crafted
                    to offer utmost flexibility. Whether you're a developer who
                    loves pre-designed components or one who likes to add custom
                    interactions to existing elements, we've got you covered.
                    Here are the ways you can utilize our library:
                </p>
                <ul style={{ fontSize: '1.2em', lineHeight: '1.6em' }}>
                    <li>
                        <strong>Pre-built Components:</strong> Our library
                        offers a wide range of components like Buttons, Cards,
                        and more. Import them and you're ready to go!
                        <pre
                            style={{
                                padding: '1em',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '5px',
                            }}
                        >
                            <code>{`import { Button, Card } from 'nexa-ui';`}</code>
                        </pre>
                    </li>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            margin: '2em',
                        }}
                    >
                        <Button
                            text="Cool Mode"
                            coolMode={'./custom.png'}
                            variant="primary"
                        />
                        <Button
                            text="Raining Mode"
                            rainingMode
                            rainingCustomImage={'./custom.png'}
                            variant="secondary"
                        />
                        <Button
                            text="Drippy Mode"
                            drippyMode
                            variant="success"
                        />
                        <Button
                            text="Exploded Mode"
                            explodedMode
                            variant="danger"
                        />
                    </div>
                    <li>
                        <strong>Utility Hooks:</strong> Want to sprinkle some
                        interactive magic to your custom or third-party
                        components? You can directly use our utility hooks!
                        <pre
                            style={{
                                padding: '1em',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '5px',
                            }}
                        >
                            <code>{`import { useCoolMode, useRainingMode, useDrippyMode, useExplodedMode } from 'nexa-ui';`}</code>
                        </pre>
                    </li>
                </ul>

                <h2>🔗 Additional Resources</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.npmjs.com/package/nexa-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            npm package
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://nexa-ui.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Storybook Demo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/BankkRoll/nexa-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </li>
                </ul>

                <h2>🔜 Stay Tuned for More Updates!</h2>
                <p>
                    Keep an eye on this space for future updates and new
                    components.
                </p>
            </div>
        </div>
    );
};

export default Intro;
