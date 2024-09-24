(function () {
 
      console.log('functionName');
      document.querySelectorAll('#hype-style-test').forEach((el) => {
        el.remove();
      });
  
      const qs = (selector) => document.querySelector(selector);
      const qsa = (selector) => document.querySelectorAll(selector);
  
      const hypeStyleId = 'hype-style-test';
      if (!document.querySelector('#' + hypeStyleId)) {
        const hypeStyle =
          `<style id=${hypeStyleId}>
            .popup-con {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              z-index: 1000000000;
            }
            #popup {
              width: 400px;
              height: 400px;
              background: white;
              border: 2px solid #333;
              display: none;
              justify-content: center;
              align-items: center;
              padding: 27px;
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              overflow: hidden;
              border-radius: 12px;
            }
            #gameCanvas {
              border: 1px solid #000;
            }
            .toggle-tab {
              position: fixed;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              background: #333;
              color: white;
              padding: 10px;
              cursor: pointer;
              z-index: 1000000001;
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            }
            .start-container {
              text-align: center;
              margin-bottom: 10px;
            }
            .start-container p {
              margin: 5px 0;
            }
          </style>`;
  
        document.head.insertAdjacentHTML('beforeend', hypeStyle);
      }
  
      // Insert the toggle tab and popup into the body
      document.querySelector('body').insertAdjacentHTML(
        'beforeend',
        `
        <div class="toggle-tab" id="toggleTab">Open Game</div>
        <div class="popup-con" id="gamePopupContainer">
          <div id="popup">
            <div class="start-container">
              <p>Would you like to have fun?</p>
              <button id="startPromptBtn">Yes</button>
            </div>
            <canvas id="gameCanvas" width="400" height="400" style="display: none;"></canvas>
            <div id="startGameContainer" style="display: none;">
              <p>Use keys 4 (left), 5 (down), 6 (right), 8 (up) or arrow keys to play!</p>
              <button id="startGameBtn">Start</button>
            </div>
          </div>
        </div>
      `
      );
  
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
  
      let snake = [{ x: 10, y: 10 }];
      let direction = { x: 1, y: 0 };
      let food = {};
      let score = 0;
      let speed = 100;
      let game;
  
      function createFood() {
        food.x = Math.floor(Math.random() * (canvas.width / 10)) * 10;
        food.y = Math.floor(Math.random() * (canvas.height / 10)) * 10;
      }
  
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Draw food
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, 10, 10);
  
        // Draw snake
        for (let segment of snake) {
          ctx.fillStyle = 'green';
          ctx.fillRect(segment.x, segment.y, 10, 10);
        }
      }
  
      function update() {
        let head = { x: snake[0].x + direction.x * 10, y: snake[0].y + direction.y * 10 };
  
        if (head.x === food.x && head.y === food.y) {
          score++;
          createFood();
          snake.unshift(head);
          speed = Math.max(50, speed - 5); // Speed up
        } else {
          snake.unshift(head);
          snake.pop();
        }
  
        // Game over conditions
        if (
          head.x < 0 ||
          head.x >= canvas.width ||
          head.y < 0 ||
          head.y >= canvas.height ||
          snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
          alert('Game Over! Your Score: ' + score);
          clearInterval(game);
          return;
        }
  
        draw();
      }
  
      function changeDirection(event) {
        switch (event.key) {
          case 'ArrowUp':
          case '8':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
          case 'ArrowDown':
          case '5':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
          case 'ArrowLeft':
          case '4':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
          case 'ArrowRight':
          case '6':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
        }
      }
  
      // Start the game
      function startGame() {
        createFood();
        document.addEventListener('keydown', changeDirection);
        game = setInterval(update, speed);
      }
  
      // Event Listeners
      document.getElementById('toggleTab').addEventListener('click', () => {
        document.getElementById('gamePopupContainer').style.display = 'flex';
      });
  
      document.getElementById('startPromptBtn').addEventListener('click', () => {
        document.getElementById('startGameContainer').style.display = 'block';
        document.getElementById('gameCanvas').style.display = 'none';
      });
  
      document.getElementById('startGameBtn').addEventListener('click', () => {
        document.getElementById('gameCanvas').style.display = 'block';
        document.getElementById('startGameContainer').style.display = 'none';
        startGame();
      });
  
  
  
  })();
  