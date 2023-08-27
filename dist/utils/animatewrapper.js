import React from 'react';
import 'animate.css';
var AnimateWrapper = function (_a) {
    var animation = _a.animation, duration = _a.duration, delay = _a.delay, iterationCount = _a.iterationCount, children = _a.children;
    return (React.createElement("div", { className: "animate__animated animate__".concat(animation), style: {
            animationDuration: duration,
            animationDelay: delay,
            animationIterationCount: iterationCount,
        } }, children));
};
export default AnimateWrapper;
//# sourceMappingURL=animatewrapper.js.map