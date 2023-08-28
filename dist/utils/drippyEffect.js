import { useEffect, useRef } from 'react';
import './drippy.css';
export var useDrippyEffect = function (drippyMode, drippyOptions) {
    var ref = useRef(null);
    var drippyElement = null;
    useEffect(function () {
        if (ref.current && drippyMode) {
            ref.current.addEventListener('mouseenter', function () {
                drippyElement = createDrippyEffect(ref.current, drippyOptions);
            });
            ref.current.addEventListener('mouseleave', function () {
                if (drippyElement) {
                    drippyElement.remove();
                }
            });
        }
    }, [drippyMode, drippyOptions]);
    return ref;
};
var createDrippyEffect = function (element, options) {
    var drippy = document.createElement('div');
    drippy.className = 'loader';
    var drops = document.createElement('div');
    drops.className = 'drops';
    var drop2 = document.createElement('div');
    drop2.className = 'drop2';
    drops.appendChild(drop2);
    drippy.appendChild(drops);
    var rect = element.getBoundingClientRect();
    var computedStyle = window.getComputedStyle(element);
    var buttonColor = computedStyle.backgroundColor;
    var color = (options === null || options === void 0 ? void 0 : options.color) || buttonColor;
    drop2.style.backgroundColor = color;
    // Function to set a random horizontal position for the drop
    var setRandomPosition = function () {
        var randomOffset = Math.random() * rect.width - 50;
        drop2.style.left = "".concat(randomOffset, "px");
    };
    // Set initial position
    setRandomPosition();
    // Adjust position every time the animation iterates
    drop2.addEventListener('animationiteration', setRandomPosition);
    drippy.style.left = "".concat(rect.left, "px");
    drippy.style.top = "".concat(rect.bottom, "px");
    document.body.appendChild(drippy);
    return drippy;
};
//# sourceMappingURL=drippyEffect.js.map