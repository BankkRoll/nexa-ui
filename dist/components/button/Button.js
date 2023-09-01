var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// src/components/button/Button.tsx
import React, { useState } from 'react';
import { useParticleEffect } from '../../utils/coolEffect/coolmode';
import { useDrippyEffect } from '../../utils/drippyEffect/drippyMode';
import { useExplodedEffect } from '../../utils/explodedEffect/explodedMode';
import { useRainingEffect } from '../../utils/rainingEffect/rainingMode';
import AnimateWrapper from '../../utils/animatewrapper';
import './Button.css';
import 'font-awesome/css/font-awesome.min.css';
/**
 * A advanced button component that supports animation, cool mode, exploded mode, drippy mode and much more.
 */
var Button = function (_a) {
    var text = _a.text, coolMode = _a.coolMode, explodedMode = _a.explodedMode, drippyMode = _a.drippyMode, rainingMode = _a.rainingMode, className = _a.className, _b = _a.size, size = _b === void 0 ? 'medium' : _b, href = _a.href, disabled = _a.disabled, loading = _a.loading, rounded = _a.rounded, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.outline, outline = _d === void 0 ? false : _d, _e = _a.plain, plain = _e === void 0 ? false : _e, icon = _a.icon, shadow = _a.shadow, tooltip = _a.tooltip, animation = _a.animation, onClick = _a.onClick, animateOnClick = _a.animateOnClick, rainingParticleCount = _a.rainingParticleCount, rainingSpeed = _a.rainingSpeed, rainingSize = _a.rainingSize, rainingCustomImage = _a.rainingCustomImage, particleOptions = __rest(_a, ["text", "coolMode", "explodedMode", "drippyMode", "rainingMode", "className", "size", "href", "disabled", "loading", "rounded", "variant", "outline", "plain", "icon", "shadow", "tooltip", "animation", "onClick", "animateOnClick", "rainingParticleCount", "rainingSpeed", "rainingSize", "rainingCustomImage"]);
    var _f = useState(animation || null), currentAnimation = _f[0], setCurrentAnimation = _f[1];
    var handleClick = function (event) {
        if (onClick) {
            onClick(event);
        }
        // If animateOnClick prop is provided, set the currentAnimation state
        if (animateOnClick) {
            setCurrentAnimation(animateOnClick);
            // Reset the animation state after a short delay (equal to animation duration)
            setTimeout(function () { return setCurrentAnimation(animation || null); }, 1000); // Assuming 1 second for animation duration
        }
    };
    var drippyRef = useDrippyEffect(drippyMode !== null && drippyMode !== void 0 ? drippyMode : false);
    var explodedRef = useExplodedEffect(explodedMode !== null && explodedMode !== void 0 ? explodedMode : false);
    var coolRef = useParticleEffect(typeof coolMode === 'string'
        ? coolMode
        : coolMode
            ? 'coolMode'
            : undefined, particleOptions);
    var rainingOptions = rainingMode
        ? {
            rainingParticleCount: rainingParticleCount,
            rainingSpeed: rainingSpeed,
            rainingSize: rainingSize,
            rainingCustomImage: rainingCustomImage,
        }
        : undefined;
    var rainingRef = useRainingEffect(rainingOptions);
    var finalRef = drippyMode
        ? drippyRef
        : explodedMode
            ? explodedRef
            : coolMode
                ? coolRef
                : rainingRef;
    var combinedClassName = "button-default ".concat(size, " rounded-").concat(rounded, " ").concat(variant, " ").concat(outline ? 'outline' : '', " ").concat(plain ? 'plain' : '', " shadow-").concat(shadow, " ").concat(loading ? 'loading' : '', " ").concat(disabled ? 'disabled' : '', " ").concat(className || '');
    var content = loading ? (React.createElement("div", { className: "loading-container" },
        icon && React.createElement("i", { className: "icon ".concat(icon) }),
        "Loading",
        React.createElement("span", { className: "spinner" }))) : (React.createElement(React.Fragment, null,
        icon && React.createElement("i", { className: "icon ".concat(icon) }),
        text));
    /**
     * Render the appropriate button or link element based on props.
     */
    var renderButton = function () {
        if (href) {
            return (React.createElement("a", { ref: function (node) {
                    return (finalRef.current = node);
                }, className: combinedClassName, href: disabled ? undefined : href, title: tooltip }, content));
        }
        return (React.createElement("button", { ref: function (node) {
                return (finalRef.current = node);
            }, className: combinedClassName, disabled: disabled || loading, title: tooltip, onClick: handleClick }, content));
    };
    // Use the AnimateWrapper if an animation prop is provided
    return currentAnimation ? (React.createElement(AnimateWrapper, { animation: currentAnimation }, renderButton())) : (renderButton());
};
export default Button;
//# sourceMappingURL=Button.js.map