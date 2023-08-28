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
import { useParticleEffect } from '../../utils/coolmode';
import { useDrippyEffect } from '../../utils/drippyEffect';
import { useExplodedEffect } from '../../utils/explodedEffect';
import AnimateWrapper from '../../utils/animatewrapper';
import './Button.css';
import 'font-awesome/css/font-awesome.min.css';
/**
 * A modern button component with cool particle effects.
 *
 * @param props The properties for the Button component.
 */
var Button = function (_a) {
    var text = _a.text, coolmode = _a.coolmode, _b = _a.explodedMode, explodedMode = _b === void 0 ? false : _b, _c = _a.drippyMode, drippyMode = _c === void 0 ? false : _c, className = _a.className, _d = _a.size, size = _d === void 0 ? 'medium' : _d, href = _a.href, disabled = _a.disabled, loading = _a.loading, rounded = _a.rounded, _e = _a.variant, variant = _e === void 0 ? 'primary' : _e, _f = _a.outline, outline = _f === void 0 ? false : _f, _g = _a.plain, plain = _g === void 0 ? false : _g, icon = _a.icon, shadow = _a.shadow, tooltip = _a.tooltip, animation = _a.animation, onClick = _a.onClick, animateOnClick = _a.animateOnClick, particleOptions = __rest(_a, ["text", "coolmode", "explodedMode", "drippyMode", "className", "size", "href", "disabled", "loading", "rounded", "variant", "outline", "plain", "icon", "shadow", "tooltip", "animation", "onClick", "animateOnClick"]);
    var _h = useState(animation || null), currentAnimation = _h[0], setCurrentAnimation = _h[1];
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
    var drippyRef = useDrippyEffect(drippyMode);
    var explodedRef = useExplodedEffect(explodedMode);
    var coolRef = useParticleEffect(typeof coolmode === 'string'
        ? coolmode
        : coolmode
            ? 'coolmode'
            : undefined, particleOptions);
    var finalRef = drippyMode
        ? drippyRef
        : explodedMode
            ? explodedRef
            : coolRef;
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