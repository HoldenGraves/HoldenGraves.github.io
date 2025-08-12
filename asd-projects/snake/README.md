# 🐍 Snake Game

Build your own version of the classic arcade game, **Snake** — where a hungry snake slithers around the board, gobbling up apples and growing longer with each bite! This project will guide you step-by-step through building the game from the ground up using HTML, CSS, JavaScript, and jQuery.

Along the way, you’ll practice essential programming skills like keyboard input handling, data modeling with objects and arrays, screen updates using helper functions, and collision detection logic.

<img src="https://github.com/OperationSpark/images/blob/master/hs-curriculum/asd-projects/snake/snakeDemo.gif?raw=true" alt="snake game demo gif" />

---

## What You'll Learn

- How to build a full project from start to finish using HTML, CSS, and JavaScript
- How to model game data using arrays and objects
- How to handle real-time input with keyboard events
- How to draw and update elements dynamically with jQuery
- How to break code into helper functions for clarity and reuse

---

## Table of Contents

- [Overview](#overview)
- [Project Grading](#project-grading)
- [Part 1 - HTML & CSS](#part-1---html--css)
  - [TODO 1: Add the initial HTML elements](#todo-1-add-the-initial-html-elements)
  - [TODO 2: Add CSS](#todo-2-add-css)
  - [TODO 3: Add JavaScript](#todo-3-add-javascript)
- [Part 2 - Modeling Data & jQuery](#part-2---modeling-data--jquery)
  - [TODO 4: Create the Apple](#todo-4-create-the-apple)
  - [TODO 5: Create the Snake](#todo-5-create-the-snake)
  - [TODO 6: The `update` Function](#todo-6-the-update-function)
- [Part 3 - Completing the Game's Logic](#part-3---completing-the-games-logic)
  - [TODO 7: Change the snake's direction](#todo-7-change-the-snakes-direction)
  - [TODO 8: Make the head move](#todo-8-make-the-head-move)
  - [TODO 9: Create a helper function to move the body](#todo-9-create-a-helper-function-to-move-one-part-of-the-snakes-body)
  - [TODO 10: Move the body](#todo-10-move-the-body)
  - [TODO 11: Check for collisions with the wall](#todo-11-check-for-collisions-with-the-wall)
  - [TODO 12: Check for collisions with the apple](#todo-12-check-for-collisions-with-the-apple)
  - [TODO 13: Check for snake collisions with itself](#todo-13-check-for-snake-collisions-with-itself)
  - [TODO 14: Make sure our Apple is placed only in available positions](#todo-14-make-sure-our-apple-is-placed-only-in-available-positions)
- [🌟 Extra Challenges](#-extra-challenges)
- [📤 Push Your Work](#-push-your-work)

---

## Overview

Your goal is to build a playable Snake game that runs in the browser. You'll start by building a static HTML and CSS layout, then use JavaScript and jQuery to animate the snake, track score, detect collisions, and spawn apples. Once your game works, try out the optional challenges to add new features like color changes or competitive gameplay!

---

## Learning Objectives

- Become comfortable writing and linking together HTML, CSS, and JavaScript files
- Practice using jQuery to create and manipulate elements on the screen
- Store and update data using arrays and objects
- Use keyboard inputs to control behavior in real-time
- Organize code into clearly defined helper functions

---

## Push Reminder

To save your progress on GitHub, use the following commands in your terminal:

```bash
git add -A
git commit -m "finished setup for snake"
git push
```

## Project Grading

Your project is graded based on completion of each major step. Make sure each TODO is fully implemented and functional before moving on to the next!

| Section / TODO | Description                                 | Points |
| -------------- | ------------------------------------------- | ------ |
| **Part 1**     | Set up HTML, CSS, and JavaScript            | 7      |
| **TODO 4**     | Create the apple                            | 4      |
| **TODO 5**     | Create the snake                            | 4      |
| **TODO 6**     | Create and configure the game loop          | 5      |
| **TODO 7**     | Handle keyboard input and set direction     | 10     |
| **TODO 8**     | Move the snake's head based on direction    | 10     |
| **TODO 9**     | Create helper function for body movement    | 10     |
| **TODO 10**    | Make the snake's body follow the head       | 10     |
| **TODO 11**    | Detect wall collisions                      | 10     |
| **TODO 12**    | Detect apple collisions                     | 10     |
| **TODO 13**    | Detect collisions with the snake itself     | 10     |
| **TODO 14**    | Ensure apple spawns only in empty positions | 10     |

# Part 1 - HTML & CSS

## Learning Objectives

- Learn how the various files in a program are linked together in an index.html file
- Use jQuery to dynamically create HTML elements and modify their properties
- Practice using Objects and Arrays to model game components
- Learn about keyboard inputs
- Learn about Asynchronous function calls
- Learn how to organize code in a program

## **TODO 1: Add the Initial HTML Elements**

🎯 **Goal:** Set up the main structure of the page, including the board and score display elements.

---

### Step-by-Step Instructions

1. **Open your `index.html` file.**

2. **Inside the `<body>` section**, add the following three elements:

   - A `<div>` with the ID `board`
   - An `<h1>` with the ID `score` and the text “Score: 0”
   - Another `<h1>` with the ID `highScore` and the text “High Score: 0”

   ```html
   <div id="board"></div>
   <h1 id="score">Score: 0</h1>
   <h1 id="highScore">High Score: 0</h1>
   ```

3. **Save your file**, and preview it in the browser by opening `index.html` or using Live Server.

---

### 💡 What’s Happening Here?

You’re creating the **static parts** of the game — the things that will appear on screen and stay in place while the game runs. The board will eventually contain the snake and apples, and the score displays will update as you play.

The snake and apple elements will be **dynamic** — they’ll be added later using JavaScript.

---

### ✅ **Check Your Work!**

- "Score: 0" and "High Score: 0" should both appear at the top of the page.
- The board itself won't be visible yet — that's coming up in the next step.
- If you don’t see the scores:
  - Double-check your HTML syntax
  - Make sure the IDs and text match exactly

<br><br><br><br>

## **TODO 2: Add CSS**

🎯 **Goal:** Link your stylesheet and make the game board visible with a border.

---

### Step-by-Step Instructions

1. **Open your `index.html` file.**

2. Inside the `<head>` section, **add the following line** to connect your CSS:

   ```html
   <link rel="stylesheet" type="text/css" href="index.css" />
   ```

3. **Save your file**, then preview your game in the browser.

---

### 💡 Why This Matters

Without linking the CSS file, your page will load — but it won’t look like anything! By adding this line, you're telling the browser to also load your styles so the layout and visuals appear as intended.

---

### ✅ **Check Your Work!**

- You should now see:
  - A square game board with a border
  - The board placed below the score displays
  - The board should be empty (no snake or apple yet)
- If the board doesn’t appear:
  - Make sure your `<link>` tag is inside the `<head>`
  - Double-check the filename: it must be exactly `index.css`

<br><br><br><br>

## **TODO 3: Add JavaScript**

🎯 **Goal:** Link your JavaScript and jQuery files so your game logic can run properly.

---

### Step-by-Step Instructions

1. **Open your `index.html` file.**

2. At the **very bottom of the file**, just **before the closing `</html>` tag**, add this line to connect your JavaScript:

   ```html
   <script src="index.js"></script>
   ```

   > ⏳ **Why put it at the bottom?**  
   > JavaScript often needs to interact with HTML elements — and if those elements haven’t loaded yet, the code will break. Putting the script at the end ensures the page loads _first_, then runs the JavaScript.

3. In the `<head>` section, just below your link to the CSS file, add **one more script tag** to load jQuery:

   ```html
   <script src="jquery.min.js"></script>
   ```

   > 💡 This must come _before_ your `index.js` file loads — otherwise your code will try to use jQuery before it exists.

4. **Save your file** and reload the page in the browser.

---

### 🧰 Troubleshooting Common Setup Issues

If your game isn’t working as expected, check these common problems:

| Problem                                 | Fix                                                            |
| --------------------------------------- | -------------------------------------------------------------- |
| ❌ `$ is not defined`                   | Make sure jQuery is loaded _before_ `index.js`                 |
| ❌ Page looks unstyled                  | Check your `<link>` to `index.css` in the `<head>` section     |
| ❌ Nothing happens when pressing keys   | Make sure `index.js` is linked _after_ the HTML, at the bottom |
| ❌ Snake or apple don’t appear later on | Open the console and check for typos or JavaScript errors      |

---

### ✅ **Check Your Work!**

- Open your page in the browser and then open the **Console** (right-click → Inspect → Console).
- You should see **no jQuery-related errors**.
- If you see something like `"$ is not defined"`:
  - Confirm that `jquery.min.js` is linked correctly _before_ your `index.js`
  - Double-check for typos in the script tag paths

<br><br><br><br>

# Part 2 - Modeling Data & jQuery

## **TODO 4: Create the Apple**

🎯 **Goal:** Show an apple on a random empty square. 🍎

---

### Quick Steps

1. Add `const apple = {};` at the top of `index.js` (inside **Game Variables**).
2. Write a helper `makeApple()` that:
   - Builds a new `<div>` with class `apple` and adds it to `#board`.
   - Finds a free spot using `getRandomAvailablePosition()`.
   - Stores that row / column on the `apple` object.
   - Calls `repositionSquare(apple)` to move it on screen.
3. In the `init` function's code block (look for `// TODO 4-2`) call `makeApple();`.

---

### Step-by-Step Instructions

1. **Declare an empty `apple` object** near the top of your `index.js` file.

   🔍 Search for the section labeled `"Game Variables"` and add:

   ```js
   var apple = {};
   ```

2. **Add code to the `makeApple()` function**. This function creates an apple element and places it on the board.

   🔍 Find the `makeApple` function, which is located in the **helper functions** section. Copy and paste the following code inside the function's code block:

   ```javascript
   // make the apple jQuery Object and append it to the board
   apple.element = $("<div>").addClass("apple").appendTo(board);

   // get a random available row/column on the board
   var randomPosition = getRandomAvailablePosition();

   // initialize the row/column properties on the Apple Object
   apple.row = randomPosition.row;
   apple.column = randomPosition.column;

   // position the apple on the screen
   repositionSquare(apple);
   ```

3. **Call the `makeApple()` function** inside the `init` function's code block.

---

### 💡 Why This Works

You’re using jQuery to create a new `<div>` with the class `apple`, then randomly placing it on the board. This makes the apple appear visually _and_ stores its location in code so you can detect when the snake reaches it.

The helper function `getRandomAvailablePosition()` handles the logic to avoid putting the apple on top of the snake — we'll improve it later in the project.

---

### ✅ **Check Your Work!**

- A small red square (the apple) should now appear somewhere on your game board.
- Refreshing the page should place the apple in a new random spot.
- If nothing appears:
  - Check your `makeApple()` function for typos
  - Confirm the function is being called in `init()`
  - Make sure the apple has the correct CSS class (`apple`)

<br><br><br><br>

## **TODO 5: Create the Snake**

🎯 **Goal:** Build the starting snake on the board. 🐍

---

### Quick Steps

1. Near the top of `index.js` add `const snake = {};`.
2. Create a helper `makeSnakeSquare(row, column)` that:
   - Builds a `<div>` with class `snake` and positions it using `repositionSquare()`.
   - Pushes the square into `snake.body` and updates `snake.tail`.
   - Gives the first square the id `snake-head`.
3. Inside `init()` (look for `// TODO 5, Part 3`) set up the first three squares:

   ```js
   snake.body = [];
   makeSnakeSquare(10, 10);
   makeSnakeSquare(10, 9);
   makeSnakeSquare(10, 8);
   snake.head = snake.body[0];
   ```

Check: You should see a three-square snake in the middle of the board.

**Important**: Ensure that this code for making three snake squares is **above** the code for making the apple.

---

### Step-by-Step Instructions

1. **Declare an empty `snake` object** in the `"Game Variables"` section at the top of your `index.js` file:

   ```js
   const snake = {};
   ```

2. **Add code to the `makeSnakeSquare` function**. This function builds one segment of the snake and places it on the board.

   🔍 Find the `makeSnakeSquare` function, which is located in the **helper functions** section. Copy and paste the following code inside the function's code block:

   ```js
   // initialize a new snakeSquare Object
   const snakeSquare = {};

   // make the snakeSquare element and add it to the board
   snakeSquare.element = $("<div>").addClass("snake").appendTo(board);

   // assign the row and column position
   snakeSquare.row = row;
   snakeSquare.column = column;

   // set the snake’s position visually
   repositionSquare(snakeSquare);

   // if this is the head, give it a unique ID
   if (snake.body.length === 0) {
     snakeSquare.element.attr("id", "snake-head");
   }

   // add the square to the snake’s body and update the tail
   snake.body.push(snakeSquare);
   snake.tail = snakeSquare;
   ```

   > 🧠 `makeSnakeSquare()` handles everything needed to create a new body piece, place it on the screen, and track its position in code.

3. **Initialize the snake inside the `init()` function** (at TODO 5, Part 3):

   ```js
   snake.body = []; // Start with an empty body
   makeSnakeSquare(10, 10); // Create the first square in the middle of the board
   makeSnakeSquare(10, 9); // Create a second square to the left of the first
   makeSnakeSquare(10, 8); // Create a third square to the left of the second
   snake.head = snake.body[0]; // Mark the first segment as the head
   ```

---

<br>
<h3 align="center">PLEASE CLICK THE ARROW BELOW AND READ HOW THE SNAKE IS MODELED</h3>
<br>

> <details> <summary> CLICK TO READ about the Snake's data </summary>
>
> We can refer to each part of the snake as a `snakeSquare` Object which will have the following properties:
>
> - `snakeSquare.row`: A reference to the row where the `snakeSquare` currently exists.
> - `snakeSquare.column`: A reference to the column where the `snakeSquare` currently exists.
> - `snakeSquare.direction`: A reference to the direction that this particular `snakeSquare` is currently moving in.
>
> Because the Snake is made up of multiple `snakeSquares` that are in a particular order, we can model the Snake's body as an Array. It will also be useful to have a quick reference for the head and tail of the snake.
>
> This data will be stored in the `snake` Object:
>
> - `snake.body`: An Array containing all `snakeSquare` Objects.
> - `snake.head`: Reference to the jQuery `snakeSquare` Object at the head of the snake. The same as `snake.body[0]` but easier to read.
> - `snake.tail`: Reference to the jQuery `snakeSquare` Object at the end of the snake. The same as `snake.body[snake.body.length - 1]` but easier to read.
>
> Most of this will be handled automatically, but first you'll have to create and call the functions that do that.
>
> </details>

---

### ✅ **Check Your Work!**

- Three green squares should appear on the board — these are the body segments of your snake. The head is a darker green square.
- If you refresh the page, they should appear in the same spot (head in row 10, column 10).
- If nothing appears:
  - Confirm that `makeSnakeSquare()` is being called in `init()` three times.
  - Make sure the CSS class `snake` exists and has visible styles.

<br><br><br><br>

## **TODO 6: The `update` Function**

🎯 **Goal:** Start the game's update cycle so the snake can move and the screen can refresh in real time.

---

### Step-by-Step Instructions

1. **In your `init()` function's code block**, find the comment labeled `// TODO 6, Part 1` and add the following line:

   ```js
   updateInterval = setInterval(update, 100);
   ```

> 🌀 This starts a **game loop** — a function that runs repeatedly on a timer. In this case, the `update()` function will run every 100 milliseconds (10 times per second).

2. **Find the `update()` function** in your code (it should already be declared), and add the follow code to its code block:

   ```js
   if (started) {
     moveSnake();
   }

   if (hasHitWall() || hasCollidedWithSnake()) {
     endGame();
   }

   if (hasCollidedWithApple()) {
     handleAppleCollision();
   }
   ```

---

### 💡 What’s a Game Loop?

Every frame of your game — just like in an animation — the following happens:

1. The snake updates its position.
2. The game checks for any collisions.
3. The screen redraws based on new positions.

The `setInterval()` function makes that happen repeatedly and smoothly, giving us a live game experience.

---

### ✅ **Check Your Work!**

1. **Open your browser and use Live Server to preview your game.**
2. Open the **Developer Tools Console** (Right-click → Inspect → Console).
3. Inside the `update()` function, temporarily add this line at the top:

   ```js
   console.log("updating...");
   ```

4. Refresh the browser. You should see “updating...” printed every 100 milliseconds — this means your game loop is working!

5. **Once you've confirmed it works, delete the `console.log`** so your console doesn’t get flooded during gameplay.

---

## 📋 Part 2 Summary: What You've Built

**Congratulations!** You've completed the foundation of your Snake game. Here's what you accomplished:

✅ **Data Modeling**: Created Objects to represent the snake and apple with properties like position and direction  
✅ **Game Loop**: Set up `setInterval()` to create smooth animation by calling `update()` 10 times per second  
✅ **Visual Elements**: Used jQuery to create and position HTML elements for the snake and apple  
✅ **Game State**: Established the basic structure for tracking score and game components

**What's working now:**

- Apple appears randomly on the board
- Snake head is visible and positioned correctly
- Game loop is running (even though movement isn't implemented yet)

**Coming up in Part 3:** You'll add movement, collision detection, and all the game logic that makes Snake actually playable!

<br><br><br><br>

# Part 3 - Completing the Game's Logic

## **TODO 7: Change the Snake's Direction**

🎯 **Goal:** Detect keyboard input and update the snake's direction accordingly.

---

### Step-by-Step Instructions

1. **Find the `handleKeyDown(event)` function** in the **helper functions** section near the bottom of `index.js`.

2. Inside the function, add the following lines above the if statement:

   ```js
   activeKey = event.which;
   console.log(activeKey);
   ```

> ⌨️ This saves the key code of the last key pressed and logs it to the console so you can check if input is working correctly.

3. Open your game in the browser and press the arrow keys. In the console, you should see numbers like:

   - `37` for Left
   - `38` for Up
   - `39` for Right
   - `40` for Down

4. **Find the function `checkForNewDirection()`**. This is where you’ll update the snake's movement based on which arrow key was pressed.

5. 🔍 Find the code that checks if the active key is the `LEFT` key. It should look like this:

   ```js
   if (activeKey === KEY.LEFT) {
     snake.head.direction = "left";
   }
   ```

6. Now it's your turn!  
   👉 Using the same pattern, add `else if` statements to check for the other three keys: `KEY.RIGHT`, `KEY.UP`, and `KEY.DOWN`.  
   Each one should set `snake.head.direction` to the matching direction.
   - Make sure the `direction` property is being assigned to a string!

---

### ✅ **Check Your Work!**

- Uncomment the `console.log` statement that prints the value stored in `snake.head.direction`.
- Press any arrow key while your game is running.
- You should see the direction change in the console (e.g. `"left"`, `"up"`, etc.).
- If you see key codes but not directions:
  - Make sure `checkForNewDirection()` is being called inside `moveSnake()`
  - Double-check the `KEY` values and that `activeKey` is being updated
- Once it’s working, **comment out the `console.log()`** statements ``to keep your console clean.

<br><br><hr><br><br>

### 🐛 Debugging Tips: Using console.log() Strategically

> **console.log() is your debugging superpower!** Here are smart ways to use it throughout this project:
>
> **Position Debugging:**
>
> ```js
> console.log("Snake head at:", snake.head.row, snake.head.column);
> console.log("Apple at:", apple.row, apple.column);
> ```
>
> **Direction Debugging:**
>
> ```js
> console.log("Snake direction:", snake.head.direction);
> console.log("Active key pressed:", activeKey);
> ```
>
> **Collision Debugging:**
>
> ```js
> console.log("Hit wall?", hasHitWall());
> console.log("Hit apple?", hasCollidedWithApple());
> ```
>
> **Body Movement Debugging:**
>
> ```js
> // In your loop, add:
> console.log(
>   "Moving piece",
>   i,
>   "from",
>   snakeSquare.row,
>   snakeSquare.column,
>   "to",
>   nextRow,
>   nextColumn
> );
> ```
>
> **Pro Tip:** Add `console.log` statements when something isn't working, then remove them once it's fixed!

<br><br><hr><br><br>

## **TODO 8: Make the Head Move**

🎯 **Goal:** Update the snake's head position on each frame based on its current direction.

---

### Step-by-Step Instructions

1. **Find the `moveSnake()` function** and locate the `TODO 8` comment.

2. Add this `if` statement directly under the comment to handle movement to the left:

   ```js
   if (snake.head.direction === "left") {
     snake.head.column = snake.head.column - 1;
   }
   ```

> 🧠 This decreases the column number by 1, moving the head one square to the left. (Remember: columns increase from left to right.)

3. Now it's your turn!  
   👉 Add three more `else if` statements to move the head in the other directions:
   - `"right"` should increase the column by 1
   - `"up"` should decrease the row by 1
   - `"down"` should increase the row by 1

> 🔁 Don’t forget: The `row` value increases as you go **down** the screen, and `column` increases as you go **right**.

4. **Call the `repositionSquare` function at the end of the `moveSnake` function** so the snake head moves across the screen.
   - The call to `repositionSquare` should have one argument - `snake.head`

---

### ✅ **Check Your Work!**

- Open your game in the browser and use the arrow keys to control the snake.
- The snake should move **one square per update** in whichever direction you press.
- Only the snake's head will move for now - you'll add code to move the rest of the snake in the next two TODOs.
- If it only moves left:
  - Check that your new `else if` blocks are inside `moveSnake()`
  - Make sure `snake.head.direction` is spelled correctly in each condition

---

### 🐛 Debugging Tip: Logging Position

If your snake isn’t moving as expected, try this:

   ```js
   console.log("Head is at:", snake.head.row, snake.head.column);
   console.log("Direction:", snake.head.direction);
   ```

> Watch the console as you press arrow keys — you should see the direction update and the position change accordingly. If you don't, then check where those values are being set and updated in your code.

<br><br><br><br>

## TODO 9: Create a helper function to move one part of the snake's body

🎯 **Goal:** Create a function that moves one segment of the snake's body to a new position.

---

### Step-by-Step Instructions

1. **Find the comment for `// TODO 9`** in your code. It is located in the **Helper Functions** section.

2. **Create a new function called `moveBodyAToBodyB`** that takes two parameters: `bodyA` and `bodyB`.
   - These will represent two segments of the snake's body, which will both be objects with `row`, `column`, and `direction` properties.

3. Inside the function, **add code that does the following**:
   - Set `bodyA`'s `row`, `column`, and `direction` properties to match `bodyB`'s.

4. **Test your function.**

   - Below the function, add the following code to test it:

      ```js
      var bodyA = { row: 5, column: 5, direction: "right" };
      var bodyB = { row: 6, column: 5, direction: "down" };
      console.log(`before moving, body A: ${JSON.stringify(bodyA)}`); // Should log: { row: 5, column: 5, direction: "right" }
      moveBodyAToBodyB(bodyA, bodyB);
      console.log(`after moving, body A: ${JSON.stringify(bodyA)}`); // Should log: { row: 6, column: 5, direction: "down" } || Note the match with bodyB
      ```

   - If the output matches, your function is most likely working!

   - Next, delete the test code and replace it with the following:

      ```js
      console.log("Moving body A to body B...");
      setTimeout(() => {
        moveBodyAToBodyB(snake.body[1], snake.head);
        repositionSquare(snake.body[1]);
      }, 2_000);
      ```

- This will move the second segment of the snake's body to the position of the head after 2 seconds.
- If your function is working correctly, you should see the second segment of the snake's body move to the position of the head after 2 seconds after refreshing your live server tab. There will now be a gap between the head and the third segment of the snake's body after this happens.
- If your function is behaving as expected, delete the code you added to test the function so that your code is kept clean.

### ✅ **Check Your Work!**

- If you have successfully run the test code and seen the expected output, your function is working correctly.
- If the output does not match, double-check that you are correctly setting `bodyA`'s properties to match `bodyB`'s properties.

<br><br><br><br>

## **TODO 10: Move the Body**

🎯 **Goal:** Update each segment of the snake’s body so it follows the head.

---

### Read Before You Code - Looping Backwards through the Body

When moving the body, you need to loop **backwards** through the array stored in the `snake`'s `body` property. This is because each segment needs to take the position of the segment in front of it, effectively making the snake chase itself from the back towards the front. If you loop from the beginning of the array, you’ll overwrite positions before they can be used!

---

### Step-by-Step Instructions

1. **Find the `moveSnake()` function**, where the snake’s movement logic is happening.

2. Just before moving the head, add this loop to update the rest of the body:

   ```js
   for ( /* start, stop, and update statements to loop backwards through the indexes of snake.body */ ) {
       var currentSnakeSquare = "???";
       var snakeSquareInFront = "???";

       moveBodyAToBodyB(currentSnakeSquare, snakeSquareInFront);

       repositionSquare(currentSnakeSquare);
   }
   ```

> 🧠 You are making each square “chase” the one ahead of it — just like how a real snake’s body moves.

3. Replace each `???` with the code that will correctly access the current and next segments of the snake's body.

   - **HINT**: Because `snake.body` is an array, you can use the index to access each segment, such as: `snake.body[0]` for the first segment and `snake.body[snake.body.length - 1]` for the last segment.
   - However, you shouldn't hard code the index, and instead use the loop variable to access the segments dynamically.

---

### 💡 Why Loop Backwards?

Below are two images. The first shows the snake movement with correct backward looping, and the second shows what happens if you loop forward. Notice how the snake seems to shrink in the incorrect version!

<h3 align="center">Correct Backward Looping</h3>

<p align="center">
  <img src="https://github.com/OperationSpark/images/blob/master/hs-curriculum/asd-projects/snake/snakeGoodMovement.gif?raw=true" alt="Correct Backward Looping" />
</p>

<h3 align="center">Incorrect Forward Looping</h3>

<p align="center">
  <img src="https://github.com/OperationSpark/images/blob/master/hs-curriculum/asd-projects/snake/snakeBadMovement.gif?raw=true" alt="Incorrect Forward Looping" />
</p>

---

### ✅ **Check Your Work!**

- Run your game and press arrow keys to move.
- You should see:
  - The snake’s head moves one square in the chosen direction
  - The body segments follow the exact path of the head
- If the snake “breaks apart” or overlaps weirdly:
  - Double-check that you're looping _backward_
  - Make sure you're updating the `.row`, `.column`, and `.direction` correctly

<br><br><br><br>

## **TODO 11: Check for Collisions with the Wall**

🎯 **Goal:** End the game if the snake moves off the board.

---

### Step-by-Step Instructions

1. **Find the `hasHitWall()` function**. This function should return `true` if the snake’s head is outside the bounds of the game board, and `false` otherwise.

2. Inside the function, check whether the **head's row or column** is beyond the board limits:

   - `snake.head.row` should be between `0` and `ROWS - 1`
   - `snake.head.column` should be between `0` and `COLUMNS - 1`

3. If either value is outside that range, return `true` to signal a collision.
   Otherwise, return `false`.

> 🧱 This function is used in the game loop to detect when the snake hits a wall — and if it does, the game ends using `endGame()`.

---

### 💡 How the Bounds Work

- The board is a grid with a fixed number of rows (`ROWS`) and columns (`COLUMNS`).
- If `snake.head.row` is less than 0 or greater than or equal to `ROWS`, the snake is off the top or bottom edge.
- If `snake.head.column` is less than 0 or greater than or equal to `COLUMNS`, the snake is off the left or right edge.

---

### ✅ **Check Your Work!**

- Run your game and drive the snake into all four walls.
- The game should stop, and the snake should no longer move.
- If the game _keeps going_:
  - Make sure `hasHitWall()` returns `true` when the head is out of bounds
  - Confirm that `hasHitWall()` is being called inside the `update()` function

<br><br><br><br>

## **TODO 12: Check for Collisions with the Apple**

🎯 **Goal:** Detect when the snake’s head reaches the apple’s position.

---

### Step-by-Step Instructions

1. **Find the `hasCollidedWithApple()` function**.

2. Inside this function, compare the **head’s row and column** to the **apple’s row and column**.

3. If both the row _and_ the column match, return `true`.  
   Otherwise, return `false`.

> 🍎 This tells the game when the snake has reached the apple so we can grow the snake and reposition the apple in the next step.

---

### ✅ **Check Your Work!**

- Run your game and try to guide the snake toward the apple.
- When the snake touches the apple, the apple should move to a new position and the score should increase.
- If the apple doesn’t move:
  - Make sure `hasCollidedWithApple()` is being called inside the `update()` function
  - Check that the row and column comparisons are correct

<br><br><br><br>

## **TODO 13: Check for snake collisions with itself**

🎯 **Goal:** End the game if the snake runs into its own body.

---

### Step-by-Step Instructions

1. **Find the `hasCollidedWithSnake()` function.**

2. Inside this function, loop through all the squares in `snake.body` **except the head** (which is at index `0`).

3. If the **head’s row and column** match any other square’s row and column, return `true`.  
   Otherwise, return `false`.

> 🧠 This check tells us if the head has “crashed” into the body — if so, the game will end via the `update()` loop.

---

### 💡 Helpful Tips

- You’ll need to compare each square’s `.row` and `.column` with `snake.head.row` and `snake.head.column`.
- Be sure to **skip index 0**, since that’s the head itself — you don’t want to compare it to itself!

---

### ✅ **Check Your Work!**

- Run your game and eat a few apples to grow the snake.
- Try turning the snake into its own body.
- You should see:
  - The game immediately ends
  - The snake stops moving
  - The “Game Over” message appears
- If the game doesn’t end:
  - Make sure you’re looping through `snake.body` starting at index `1`
  - Check that you’re comparing both the `row` and `column`

<br><br><br><br>

## **TODO 14: Make sure our Apple is placed only in available positions**

🎯 **Goal:** Make sure the apple never spawns on top of the snake.

---

### Step-by-Step Instructions

1. **Find the `getRandomAvailablePosition()` function.**

2. You’ll see this basic structure:

   ```js
   var spaceIsAvailable;
   var randomPosition = {};

   while (!spaceIsAvailable) {
     randomPosition.column = Math.floor(Math.random() * COLUMNS);
     randomPosition.row = Math.floor(Math.random() * ROWS);
     spaceIsAvailable = true;
   }

   return randomPosition;
   ```

3. Your job is to **add a check inside the `while` loop** to make sure that `randomPosition` is not already occupied by the snake.

   > 🍎 If it _is_ on the snake, set `spaceIsAvailable = false;` so the loop tries again.

---

### 💡 Hints and Strategy

- Use a `for` loop inside the `while` loop to check each square in `snake.body`.
- Compare each body square’s `row` and `column` with the `randomPosition` object's `row` and `column`.
- If both match for any snake square, that means the spot is taken — set `spaceIsAvailable = false;`

> 🧠 This is similar to how you checked for head collisions — but now you're comparing the apple’s spot against **every part** of the snake (including the head).

---

### ✅ **Check With Your Instructor**

This step is tricky to test unless the snake is already large or you’ve played for a long time.

📣 **Before moving on, ask your instructor to review your logic.**  
Make sure your loop checks **every piece** of the snake and correctly handles collisions.

> Pro tip: Once you’ve finished, try logging potential collisions in the console to confirm they’re being caught.

<br><br><br><br>

# 🌟 Extra Challenges

## 🌈 Challenge: Rainbow Snake

What if your snake changed color each time it grew?

In this challenge, you’ll make your snake cycle through a set of colors — red, orange, yellow, green, blue, and purple — one square at a time. Each new segment should appear in the next color, and then the pattern repeats.

This will turn your snake into a moving rainbow!

---

### 🔧 What to Do

- Create a list (array) called `colors`:

   ```js
   ["red", "orange", "yellow", "green", "blue", "purple"];
   ```

- Add a new variable (like `colorIndex`) to track which color comes next
- After you call `makeSnakeSquare()`, immediately apply the background color using:

   ```js
   snake.tail.element.css("backgroundColor", colors[colorIndex]);
   ```

- After each new square is created, increase `colorIndex`. If it goes past the end of the list, loop it back to 0.
  - Bonus: use the modulo operator (`%`) to wrap around the index.

<br><br>

## 🔁 Challenge: Reverse Controls Every 10 Points

Let’s make things a bit more interesting.

In this challenge, your snake will start with normal movement — but once your score hits a multiple of 10, the controls will flip:

- Up becomes down
- Left becomes right
- Chaos becomes your new best friend

The controls should continue to swap every time the score passes another multiple of 10.

---

### 🔧 What to Do

- Track the current score using the existing score variable
- Add a new boolean variable called `isReversed` and set it to `false` initially
- Inside of the `handleAppleCollision()` function, check if the score is a multiple of 10:
  - If it is, toggle `isReversed` to its opposite value
- Update the `handleKeyDown()` function to account for the `isReversed` state
  - If `isReversed` is `true`, reverse the direction logic
  - If `isReversed` is `false`, use the normal direction logic

---

## 🚀 Push Your Work

When you're completely finished:

1. Save all your files
2. Open your terminal
3. Add, commit, and push your code:

   ```bash
   git add .
   git commit -m "Completed Snake game"
   git push
   ```

✅ Confirm that your changes are visible on GitHub.

> 🧠 Reminder: Always write clear commit messages so your collaborators (and future you!) know what changed.

🎉 Congratulations on finishing the Snake game! 🎉

You've built a fully functional game from scratch using HTML, CSS, and JavaScript. You've also learned how to use jQuery to manipulate HTML elements and how to organize your code using functions. 🐍
