// src/utils/rainingMode.ts
import { useEffect, useRef, useCallback } from 'react';
export var useRainingEffect = function (options) {
    var ref = useRef(null);
    var particles = useRef([]).current;
    var particleCount = (options === null || options === void 0 ? void 0 : options.rainingParticleCount) || 30;
    var speed = (options === null || options === void 0 ? void 0 : options.rainingSpeed) || 5;
    var size = (options === null || options === void 0 ? void 0 : options.rainingSize) || 50;
    var customImage = options === null || options === void 0 ? void 0 : options.rainingCustomImage;
    var cleanupParticles = function () {
        particles.forEach(function (p) { return p.element.remove(); });
        particles.length = 0; // Clear the array
    };
    var generateParticle = function () {
        var left = Math.random() * window.innerWidth;
        var top = 0;
        var particle = document.createElement('div');
        if (customImage) {
            particle.innerHTML = "<img src=\"".concat(customImage, "\" width=\"").concat(size, "\" height=\"").concat(size, "\" />");
        }
        else {
            var svgNS = 'http://www.w3.org/2000/svg';
            var squareSVG = document.createElementNS(svgNS, 'svg');
            var square = document.createElementNS(svgNS, 'rect');
            square.setAttributeNS(null, 'width', size.toString());
            square.setAttributeNS(null, 'height', size.toString());
            square.setAttributeNS(null, 'fill', "hsl(".concat(Math.random() * 360, ", 70%, 50%)"));
            squareSVG.appendChild(square);
            squareSVG.setAttribute('width', size.toString());
            squareSVG.setAttribute('height', size.toString());
            particle.appendChild(squareSVG);
        }
        particle.style.position = 'fixed';
        particle.style.top = "".concat(top, "px");
        particle.style.left = "".concat(left, "px");
        document.body.appendChild(particle);
        particles.push({
            element: particle,
            left: left,
            size: size,
            speedDown: speed,
            top: top,
        });
    };
    var refreshParticles = function () {
        particles.forEach(function (p, index) {
            p.top += p.speedDown;
            if (p.top > window.innerHeight) {
                p.element.remove();
                particles.splice(index, 1);
            }
            else {
                p.element.style.transform = "translate3d(".concat(p.left, "px, ").concat(p.top, "px, 0)");
            }
        });
    };
    var handleClick = useCallback(function () {
        // Clear existing particles
        cleanupParticles();
        // Generate new particles
        var intervalId = setInterval(function () {
            generateParticle();
            if (particles.length >= particleCount) {
                clearInterval(intervalId);
            }
        }, 100);
    }, [particleCount]);
    useEffect(function () {
        var animationFrame;
        var loop = function () {
            refreshParticles();
            animationFrame = requestAnimationFrame(loop);
        };
        var handlePopState = function () {
            cleanupParticles();
        };
        window.addEventListener('popstate', handlePopState);
        if (ref.current) {
            ref.current.addEventListener('click', handleClick);
        }
        loop();
        return function () {
            window.removeEventListener('popstate', handlePopState);
            if (ref.current) {
                ref.current.removeEventListener('click', handleClick);
            }
            cancelAnimationFrame(animationFrame);
            cleanupParticles();
        };
    }, [handleClick]);
    return ref;
};
//# sourceMappingURL=rainingMode.js.map