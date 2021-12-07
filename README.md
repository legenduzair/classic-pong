# Classic Pong!
## Introduction
Classic Pong is a fully responsive project that utilises HTML, CSS and Javascript to create an alternate version of the 2d old school classic 'ping-pong'. This game will allow the user to play against the computer by operating the paddle with keys on desktop or using touch controls on mobile and tablets. To win the game, the user will defeat the computer by deflecting the ball off their paddle and bypass the computer's paddle to reach the high score. If there is a rally between the user and the computer, the difficulty of the game increases as it is hastened. This will allow the user to make quicker decisions and force them to react faster. Classic Pong is targetted at an audience of all ages and interests who want to have fun and enjoy playing a classic ping pong game that is functional. 

![Responsive Screenshot Markup](/documentation/screenshots/responsive-screenshot.png)

[The live website can be viewed here on GitHub pages.](https://legenduzair.github.io/classic-pong/)

## UX & Planning

Before initiating the project, I planned the layout and structure of the game across multiple screens using Balsamiq Wireframes. During the project, I also produced handwritten notes and calculations to help me understand the logic of the game and develop my knowledge of Javascript at its core. The wireframes and handwritten notes designed are listed below.

### Wireframes
- Desktop View
  - [Title Screen](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/home-page-ss.png)
  - [Main Game Screen](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/canvas-page-ss.png)
  - [Game Over Screen](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/gameover-page-ss.png)
- Tablet View
  - [All Screens](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/tablet-view-allpages.png)
- Mobile View
  - [All Screens](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/mobile-view-allpages.png)

### Calculations and Notes
- Measurements (Wireframes)
  - [Canvas Width Measurement](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/canvas-width-measure.png)
  - [Canvas Height Measurement](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/canvas-height-measure.png)
  - [Net Measurement](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/net-measure.png)
  - [Paddles Measurement](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/paddle-measure.png)
  - [Scores Measurement](https://github.com/legenduzair/classic-pong/blob/main/documentation/screenshots/scores-measure.png)
- Handwritten Calculations
  - [All Calculations and Notes](https://github.com/legenduzair/classic-pong/blob/main/documentation/calculations/calculations-scan-pong.pdf)

## Features 

### Existing Features
- Main Menu Screen

  - The main menu consists of the Classic Pong logo, the name of the game which is displayed in an arcade style font to correspond with the vibe of the project and an interactive button to allow the user to navigate from this screen to the main game where it is played. 
  - The interactive button is also displayed in the same font and lighting up white when hovered over. 

![Main Menu](/documentation/screenshots/main-menu-ss.png)

- Main Game Board

  - When the user navigates to this screen, the main game is displayed where the user can play against the computer. The left paddle will be controlled by the user by pressing the up and down arrow keys. The computer's paddle will have automated movement and will match the ball movement to attempt to score past the user.
  - The ball which is constantly moving and bouncing off the top and bottom walls, will have to be deflected off the user's paddle to attempt to bypass the computer's paddle to gain a score point.
  - The scoreboard on the top of the game board will also allow the user to see how well they are performing during the game. 
  - The interactive button located at the bottom of the page is present to allow the user to navigate back to the main menu screen if needs be. 

![Main Game](/documentation/screenshots/main-game-ss.png)

- Game Over Screen

  - Once the user reaches a certain high score, the game over screen will be displayed.
  - This screen consists of a heading portraying the text 'Game Over' to let the user acknowledge that the game is finished. The text is displayed in the same arcade style font in different elements throughout the project.
  - The interactive button located below the heading allows the user to navigate back to the main game screen where they can attempt to play the game again. 

![Game Over](/documentation/screenshots/game-over-ss.png)