# **Faulty Calculator**

## **Overview**

The Faulty Calculator is a fun and interactive JavaScript project designed to enhance learning. It works like a normal calculator but introduces intentional calculation errors when in Faulty Mode. Users can switch between normal and faulty behavior using secret codes.


## **Features**

- **Switchable Faulty Mode:**

  By default, the calculator behaves normally.

  Enter a secret code to activate Faulty Mode, which introduces a 20% error rate.

  Enter another secret code to deactivate Faulty Mode and return to normal behavior.

- **Intentional Calculation Errors (Faulty Mode Only):**

  With a 20% probability, the calculator randomly swaps operators:

  Multiplication (_) --> Division (/)

  Subtraction (-) --> Addition (+)

  Division (/) --> Subtraction (-)

  Addition (+) --> Multiplication (_)

- **Faulty Mode Notification:**

  When Faulty Mode is toggled, a brief animation (0.8s) notifies the user.

- **Equation Persistence:**

  The last entered equation is saved in localStorage.

  When reopening the calculator, it retains its last state (including Faulty Mode status).

- **Adaptive Equation Display:**

  If the equation length exceeds the container, it shrinks to fit.

  Once the font size reaches 30px, a scroll appears instead.

- **Quick Estimate Panel:**

  Displays large decimal numbers with an approximate value (up to 3 decimal places) for better readability.

## **Technologies Used**

  **HTML –** Structure of the calculator

  **CSS –** Styling and responsive adjustments

  **JavaScript –** Functional logic, faulty mode, and localStorage persistence

## **How It Works**

1. Enter numbers and operators as you would on a normal calculator.

2. The calculator behaves normally unless Faulty Mode is activated.

3. To activate Faulty Mode, enter the secret code.

4. Once active, there is a 20% chance of incorrect calculations due to operator swapping.

5. To deactivate, enter another secret code, returning the calculator to normal.

6. The last equation and mode are saved and restored when the calculator is reopened.

## **Demo**

Live Preview: [https://novamxter.github.io/Faulty_Calculator/]

## **Installation**

1. Clone the repository:

  git clone https://github.com/novamxter/Faulty-calculator.git

2. Open index.html in your browser.

## **Future Improvements**

More error variations for added fun

Customizable faulty mode settings

Enhanced UI/UX with theme options

## **Contributing**

> Feel free to fork the repository and submit pull requests with improvements!
