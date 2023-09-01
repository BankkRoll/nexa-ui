// src/components/card/Card.tsx
import React, { useState } from 'react';
import AnimateWrapper from '../../utils/animatewrapper';
import './Card.css';
var Card = function (_a) {
    var title = _a.title, content = _a.content, image = _a.image, _b = _a.imagePosition, imagePosition = _b === void 0 ? 'top' : _b, footerContent = _a.footerContent, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.rounded, rounded = _d === void 0 ? 'md' : _d, _e = _a.shadow, shadow = _e === void 0 ? 'md' : _e, animation = _a.animation, actions = _a.actions, onClick = _a.onClick, animateOnClick = _a.animateOnClick;
    var _f = useState(animation || null), currentAnimation = _f[0], setCurrentAnimation = _f[1];
    var handleClick = function (event) {
        if (onClick) {
            onClick(event);
        }
        if (animateOnClick) {
            setCurrentAnimation(animateOnClick);
            setTimeout(function () { return setCurrentAnimation(animation || null); }, 1000);
        }
    };
    var combinedClassName = "card ".concat(rounded, " ").concat(variant, " shadow-").concat(shadow);
    var renderCard = function () { return (React.createElement("div", { className: combinedClassName, onClick: handleClick },
        title && React.createElement("header", { className: "card-title" }, title),
        image && imagePosition === 'top' && (React.createElement("div", { className: "card-image", style: { backgroundImage: "url(".concat(image, ")") } })),
        React.createElement("section", { className: "card-content" }, content),
        image && imagePosition === 'middle' && (React.createElement("div", { className: "card-image", style: { backgroundImage: "url(".concat(image, ")") } })),
        actions && React.createElement("div", { className: "card-actions" }, actions),
        footerContent && (React.createElement("footer", { className: "card-footer" }, footerContent)),
        image && imagePosition === 'bottom' && (React.createElement("div", { className: "card-image", style: { backgroundImage: "url(".concat(image, ")") } })))); };
    return currentAnimation ? (React.createElement(AnimateWrapper, { animation: currentAnimation }, renderCard())) : (renderCard());
};
export default Card;
//# sourceMappingURL=Card.js.map