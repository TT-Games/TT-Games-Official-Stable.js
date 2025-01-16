// gameLoop.js
let lastTime = 0;

function startGameLoop(update, render) {
    function loop(timestamp) {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        update(deltaTime);
        render();

        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
}

export { startGameLoop };
