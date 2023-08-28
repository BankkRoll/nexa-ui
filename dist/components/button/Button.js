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
import React from 'react';
import { useParticleEffect } from '../../utils/coolmode';
import AnimateWrapper from '../../utils/animatewrapper';
import './Button.css';
/**
 * A modern button component with cool particle effects.
 *
 * @param props The properties for the Button component.
 */
var Button = function (_a) {
    var text = _a.text, coolmode = _a.coolmode, className = _a.className, _b = _a.size, size = _b === void 0 ? 'medium' : _b, href = _a.href, disabled = _a.disabled, loading = _a.loading, rounded = _a.rounded, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.outline, outline = _d === void 0 ? false : _d, _e = _a.plain, plain = _e === void 0 ? false : _e, icon = _a.icon, shadow = _a.shadow, tooltip = _a.tooltip, animation = _a.animation, particleOptions = __rest(_a, ["text", "coolmode", "className", "size", "href", "disabled", "loading", "rounded", "variant", "outline", "plain", "icon", "shadow", "tooltip", "animation"]);
    var coolRef = useParticleEffect(typeof coolmode === 'string'
        ? coolmode
        : coolmode
            ? 'coolmode'
            : undefined, particleOptions);
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
                    return (coolRef.current = node);
                }, className: combinedClassName, href: disabled ? undefined : href, title: tooltip }, content));
        }
        return (React.createElement("button", { ref: function (node) {
                return (coolRef.current = node);
            }, className: combinedClassName, disabled: disabled, title: tooltip }, content));
    };
    // Use the AnimateWrapper if an animation prop is provided
    return animation ? (React.createElement(AnimateWrapper, { animation: animation }, renderButton())) : (renderButton());
};
export default Button;
//# sourceMappingURL=Button.js.map