<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic 2D Game</title>
    <style>
        body { margin: 0; }
        canvas { display: block; background: #f0f0f0; }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script type="module">
        import { startGameLoop } from './src/gameLoop.js';
        import { checkCollision } from './src/collision.js';
        import { ImageLoader } from './src/imageLoader.js';
        import { ObjectPool } from './src/objectPool.js';
        import { optimizeCanvasRendering } from './src/performance.js';

        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        optimizeCanvasRendering(ctx);

        // Example game assets
        const imageLoader = new ImageLoader();
        imageLoader.load(['player.png', 'enemy.png'])
            .then(() => {
                console.log('Assets loaded');
                startGameLoop(update, render);
            });

        const player = { x: 100, y: 100, width: 50, height: 50, dx: 2, dy: 2 };

        function update(deltaTime) {
            // Handle player movement
            player.x += player.dx;
            player.y += player.dy;

            // Prevent player from going off-screen
            if (player.x < 0 || player.x > canvas.width - player.width) player.dx = -player.dx;
            if (player.y < 0 || player.y > canvas.height - player.height) player.dy = -player.dy;
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'blue';
            ctx.fillRect(player.x, player.y, player.width, player.height);
        }
    </script>
</body>
</html>
