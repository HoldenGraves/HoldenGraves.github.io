# 🎲 Dice Simulator

A simple interactive dice app built with HTML, CSS, and JavaScript (using jQuery). This version is structured for use in VS Code with separate files for markup, styles, and behavior.

## 📚 Table of Contents

- [📁 Project Files](#-project-files)
- [🧱 TODO 1: Create the Die Element](#-todo-1-create-the-die-element)
- [🧲 TODO 2: Import jQuery](#-todo-2-import-jquery)
- [🎯 TODO 3: Create a Dot with jQuery](#-todo-3-create-a-dot-with-jquery)
- [🖱️ TODO 4: Make a Click Handler Function](#️-todo-4-make-a-click-handler-function)
- [🔁 TODO 5: Register a Click Event with jQuery](#-todo-5-register-a-click-event-with-jquery)
- [🎲 TODO 6: Generate a Random Number](#-todo-6-generate-a-random-number)
- [🎯 TODO 7: Add Dots Based on the Random Number](#-todo-7-add-dots-based-on-the-random-number)
- [🧹 TODO 8: Clear the Die Before Each Roll](#-todo-8-clear-the-die-before-each-roll)
- [🎯 TODO 9: Add the Final Dice Face (Six Dots)](#-todo-9-add-the-final-dice-face-six-dots)
- [🌟 Bonus Challenge](#-bonus-challenge)

---

## 📁 Project Files

This mini-project uses three files:

- `index.html` – Contains the structure of the dice app
- `style.css` – Defines the visual styling of the die and its components
- `dice.js` – Handles all dice functionality using jQuery

---

## 🧱 TODO 1: Create the Die Element

🎯 **Goal:** Set up the main structure of the page, including the die element and stylesheet connection.

1.  In `index.html`, inside the `<body>`, add a single die element:

    ```html
    <div id="die"></div>
    ```

2.  In the `<head>`, link to your external CSS file:

    ```html
    <link rel="stylesheet" href="style.css" />
    ```

3.  Then, in `style.css`, define the basic styles for the die:

    ```css
    #die {
      height: 100px;
      width: 100px;
      background-color: lightgray; /* Feel free to customize */
      position: relative;
    }
    ```

<br><br><br><br>

## 🧲 TODO 2: Import jQuery

🎯 **Goal:** Set up jQuery to handle interactions with the die.

1. Still in the `<head>` of `index.html`, include jQuery using a CDN:

   ```html
   <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
   ```

2. Just before the closing `</body>` tag, link to your JavaScript file:

   ```html
   <script src="dice.js"></script>
   ```

<br><br><br><br>

## ⏺️ TODO 3: Create a Dot with jQuery

🎯 **Goal:** Use jQuery to create a dot inside the die element.

1. In `dice.js`, use the following code to create a single dot positioned in the center of the die:

```js
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
```

---

### ✅ **Check Your Work!**

- When you open `index.html` in your browser, you should see:
  - A **gray square** representing the die (unless you changed the background color)
  - A **black dot** in the center of the die
- If you don’t see the dot:
  - Make sure jQuery is properly loaded
  - Confirm that your `dice.js` file is linked correctly
  - Confirm that your `style.css` file is linked correctly
  - Check your file and folder names for typos

<br><br><br><br>

## 🖱️ TODO 4: Make a Click Handler Function

🎯 **Goal:** Create a function that logs a message when it runs, so you can test that it's connected correctly later.

1. In `dice.js`, create a function called `rollDie`, that will only log the word **“clicked”** to the console.

2. Just below the function, call `rollDie()` directly to test it.

---

### ✅ **Check Your Work!**

- Open your browser’s **DevTools Console** (`Right click → Inspect → Console`)
- You should see the word **“clicked”** printed once
- If nothing appears:
  - Make sure `dice.js` is linked correctly in `index.html`
  - Check for typos in your function name or `console.log` statement

<br><br><br><br>

## 🔁 TODO 5: Register a Click Event with jQuery

🎯 **Goal:** Use jQuery to run your function whenever the die is clicked.

Replace your direct function call with this:

```js
$("#die").on("click", handleClick);
```

This tells the browser: “When the element with the ID `die` is clicked, run the `handleClick` function.”

---

### ✅ **Check Your Work!**

- Open your page in the browser
- Click on the die square
- Each time you click, you should see **“clicked”** appear in the Console
- If it doesn’t work:
  - Make sure your `#die` element exists in `index.html`
  - Double-check the ID and the function name
  - Ensure jQuery is loaded before your script in `index.html`

<br><br><br><br>

## 🎲 TODO 6: Generate a Random Number

🎯 **Goal:** Generate a new random number between 1 and 6 each time the die is clicked.

Now that your click handler is set up, it’s time to give it some functionality!

1. Inside the function, generate a random number:

   ```js
   var randomNum = Math.ceil(Math.random() * 6);
   console.log(randomNum);
   ```

---

### ✅ **Check Your Work!**

- Open the Console and click the die
- You should see a random number between **1 and 6** each time you click
- If it’s not working:
  - Make sure you are now printing the random number inside your `handleClick` function instead of `"clicked"`
  - Double-check the `Math.random()` line for typos

<br><br><br><br>

## 🔢 TODO 7: Add Dots Based on the Random Number

🎯 **Goal:** Use the random number to display the correct number of dots on the die.

Now let’s make the die show the right face by calling a helper function called `makeDot`.

1. **Copy and paste** the following code inside your `rollDie` function, after generating the random number:

   ```js
   if (randomNum === 1) {
     makeDot(50, 50, "#die"); // middle middle
   } else if (randomNum === 2) {
     makeDot(25, 25, "#die"); // top left
     makeDot(75, 75, "#die"); // bottom right
   } else if (randomNum === 3) {
     makeDot(25, 25, "#die"); // top left
     makeDot(75, 75, "#die"); // bottom right
     makeDot(50, 50, "#die"); // middle middle
   } else if (randomNum === 4) {
     makeDot(75, 75, "#die"); // bottom right
     makeDot(25, 25, "#die"); // top left
     makeDot(25, 75, "#die"); // bottom left
     makeDot(75, 25, "#die"); // top right
   } else if (randomNum === 5) {
     makeDot(50, 50, "#die"); // middle middle
     makeDot(75, 75, "#die"); // bottom right
     makeDot(25, 25, "#die"); // top left
     makeDot(25, 75, "#die"); // bottom left
     makeDot(75, 25, "#die"); // top right
   }
   ```

2. Define a new function above `rollDie` called `makeDot`. This function will handle creating and positioning a dot anywhere on the die. For this function, copy your code from TODO 3, but modify it to accept three parameters: `top`, `left`, and `elementID`.

   💡 **Hint:** Think about which values change every time you place a dot. Your function will need:

   > - One parameter for the **top** position
   > - One parameter for the **left** position
   > - One parameter for the **element to append to**
   >
   > Use these parameters when setting the CSS properties and when calling `.appendTo()`.

---

### ✅ **Check Your Work!**

- Click the die multiple times to test different outcomes
- The dot patterns should update as you click, but will not erase the previous dots yet
- If it’s not working:
  - Double-check your `makeDot` function definition
  - Make sure that you are using the parameters correctly in the `makeDot` function

<br><br><br><br>

## 🧹 TODO 8: Clear the Die Before Each Roll

🎯 **Goal:** Prevent new dots from piling up by clearing the die before each roll.

Each time the die is clicked, it should start fresh. To do that, just clear the contents of the die element at the beginning of the `rollDie` function.

1. At the very top of your `rollDie` function, add:

   ```js
   $("#die").empty();
   ```

   This removes all existing dots inside the die before drawing new ones.

---

### ✅ **Check Your Work!**

- Click the die a few times
- You should only ever see the number of dots for the current roll—no leftover dots from before
- If dots seem to be multiplying:
  - Make sure `.empty()` is at the top of your `rollDie` function
  - Confirm the selector is correct: `#die`

<br><br><br><br>

## 🎯 TODO 9: Add the Final Dice Face (Six Dots)

🎯 **Goal:** Complete the random roll logic by handling the final case: when the number is 6.

You’ve got the dot patterns for numbers 1 through 5—now it’s time to finish it off by adding one more `else if` block for when `randomNum === 6`.

> 💡 **Hint:** Think about how six dots are arranged on a real die. You’ll want to use three pairs of dots, evenly spaced vertically. You can also reference the image below if needed.

Make sure to use your `makeDot` function and append the new dots to `#die`.

<img src="https://github.com/OperationSpark/images/blob/master/hs-curriculum/asd-projects/dice-app/dice.jpg?raw=true" width="300">

---

### ✅ **Check Your Work!**

- Click the die until you see **six** dots
- Make sure they’re evenly spaced and visually consistent with the other faces
- If something’s off:
  - Double-check your coordinates
  - Make sure you’re appending to the correct element
  - Look for typos in your conditional structure

<br><br><br><br>

# 🌟 Bonus Challenge

🎯 **Goal:** Add a second die that can roll independently from the first.

Once you’ve got one die working, try adding a second! You’ll need to update your HTML and CSS to include another `div` for the second die, and you’ll need to call your `rollDie` function twice—once for each die.

> 💡 **Hint:** Your `rollDie` and `makeDot` functions already take an element ID as a parameter. This makes them reusable! Try calling `rollDie("#die2")` when the second die is clicked, just like you did with the first.

Get creative! You could even:

- Display the total of both dice
- Color each die differently
- Style them to look more like real dice
