import { useEffect, useRef } from 'react';
export var useExplodedEffect = function (explodedMode) {
    var ref = useRef(null);
    useEffect(function () {
        if (ref.current && explodedMode) {
            return applyExplodedEffect(ref.current);
        }
    }, [explodedMode]);
    return ref;
};
var getExplodedContainer = function () {
    var id = '_exploded_container';
    var container = document.getElementById(id);
    if (!container) {
        container = document.createElement('div');
        container.id = id;
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '2147483647';
        document.body.appendChild(container);
    }
    return container;
};
function applyExplodedEffect(element) {
    var container = getExplodedContainer();
    var buttonColor = getComputedStyle(element).backgroundColor;
    var particles = [];
    function getRandomPoint(maxWidth, maxHeight) {
        return "".concat(Math.random() * maxWidth, "% ").concat(Math.random() * maxHeight, "%");
    }
    function explode() {
        for (var i = 0; i < 50; i++) {
            var particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.backgroundColor = buttonColor || 'red';
            var randomWidth = Math.random() * 15 + 5;
            var randomHeight = Math.random() * 25 + 10;
            particle.style.width = "".concat(randomWidth, "px");
            particle.style.height = "".concat(randomHeight, "px");
            // Create a random clip-path with 4-6 points to make it irregular
            var pointsCount = Math.floor(Math.random() * 3) + 4;
            var points = [];
            for (var j = 0; j < pointsCount; j++) {
                points.push(getRandomPoint(100, 100));
            }
            particle.style.clipPath = "polygon(".concat(points.join(', '), ")");
            particle.style.left = "".concat(element.getBoundingClientRect().left +
                Math.random() * element.offsetWidth, "px");
            particle.style.top = "".concat(element.getBoundingClientRect().top +
                Math.random() * element.offsetHeight, "px");
            container.appendChild(particle);
            var direction = Math.random() * 360;
            var speed = Math.random() * 10;
            particles.push({
                element: particle,
                direction: direction,
                speed: speed,
            });
        }
        // Hide the original element to give the illusion it exploded
        element.style.visibility = 'hidden';
        // Set a timer to remove all particles and restore the element's visibility after 6 seconds
        setTimeout(function () {
            particles.forEach(function (p) { return p.element.remove(); });
            particles.length = 0;
            element.style.visibility = 'visible';
        }, 5000);
    }
    function refreshParticles() {
        particles.forEach(function (p) {
            var radians = (p.direction * Math.PI) / 180;
            var dx = p.speed * Math.cos(radians);
            var dy = p.speed * Math.sin(radians);
            var x = parseFloat(p.element.style.left) + dx;
            var y = parseFloat(p.element.style.top) + dy;
            p.element.style.left = "".concat(x, "px");
            p.element.style.top = "".concat(y, "px");
        });
    }
    var animationFrame;
    function loop() {
        refreshParticles();
        animationFrame = requestAnimationFrame(loop);
    }
    element.addEventListener('click', explode);
    loop();
    return function () {
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        element.removeEventListener('click', explode);
        // Restore the original element's visibility
        element.style.visibility = 'visible';
        particles.forEach(function (p) { return p.element.remove(); });
        if (!container.hasChildNodes()) {
            container.remove();
        }
    };
}
//# sourceMappingURL=explodedEffect.js.map