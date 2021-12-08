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

## Color Scheme

For the general color scheme of the project, I went with a smoky blue background with a bright red/pink color for the content structured on the various screens. When hovered over, the interactive buttons all light up white which fit the pink color of the buttons. This theme makes the project appear stylish and easily visible to the user as the foreground content stands out from the background. For the canvas, I used a plain black background with majority of the objects being white and the ball being the bright red/pink color used before on different screens. This allows the user to view the canvas properly when playing the game and does not distract them from colors that are blinding to the human eye. These colors were chosen from one source called [Coolors](https://coolors.co/). Hex values were used when inputting the colors in the CSS file. 

## Typography

When designing Classic Pong, I felt like a retro style font would fit the theme of the game and therefore picked 'Press Start 2P' from [Google Fonts](https://fonts.google.com/). This corresponded with the minimalistic and classic feel the game portrayed. 

## Features 

### Existing Features
- Main Menu Screen

  - The main menu consists of the Classic Pong logo, the name of the game which is displayed in an arcade style font to correspond with the vibe of the project and an interactive button to allow the user to navigate from this screen to the main game where it is played. 
  - The interactive button is also displayed in the same font and lighting up white when hovered over. 

![Main Menu](/documentation/screenshots/main-menu-ss.png)

  - When the user views this screen on a laptop/tablet, the structure of the content is very similar but reduced to a smaller scale to fit the viewport size.

![Main Menu - Medium Screen Sizes](/documentation/screenshots/medium-screens-mainmenu.png)

  - When the user views this screen on a mobile, the orientation of the page is forced into landscape mode which allows the layout of the content to fit the viewport size without getting too small.

![Main Menu - Small Screen Sizes](/documentation/screenshots/small-screens-mainmenu.png)

- Main Game Board

  - When the user navigates to this screen, the main game is displayed where the user can play against the computer. The left paddle will be controlled by the user by pressing the up and down arrow keys. The computer's paddle will have automated movement and will match the ball movement to attempt to score past the user.
  - The ball which is constantly moving and bouncing off the top and bottom walls, will have to be deflected off the user's paddle to attempt to bypass the computer's paddle to gain a score point.
  - The scoreboard on the top of the game board will also allow the user to see how well they are performing during the game. 
  - The interactive button located at the bottom of the page is present to allow the user to navigate back to the main menu screen if needs be. 

![Main Game](/documentation/screenshots/main-game-ss.png)

  - When the user views this screen on a laptop/tablet, the structure of the content is very similar but reduced to a smaller scale to fit the viewport size.

![Main Game - Medium Screen Sizes](/documentation/screenshots/medium-screens-maingame.png)

  - When the user views this screen on a mobile, the orientation of the page is forced into landscape mode which allows the layout of the content to fit the viewport size without getting too small.

![Main Game - Small Screen Sizes](/documentation/screenshots/small-screens-maingame.png)

- Game Over Screen

  - Once the user reaches a certain high score, the game over screen will be displayed.
  - This screen consists of a heading portraying the text 'Game Over' to let the user acknowledge that the game is finished. The text is displayed in the same arcade style font in different elements throughout the project.
  - The interactive button located below the heading allows the user to navigate back to the main game screen where they can attempt to play the game again. 

![Game Over](/documentation/screenshots/game-over-ss.png)

  - When the user views this screen on a laptop/tablet, the structure of the content is very similar but reduced to a smaller scale to fit the viewport size.

![Game Over - Medium Screen Sizes](/documentation/screenshots/medium-screens-gameover.png)

  - When the user views this screen on a mobile, the orientation of the page is forced into landscape mode which allows the layout of the content to fit the viewport size without getting too small.

![Game Over - Small Screen Sizes](/documentation/screenshots/small-screens-gameover.png)

### Controls 

  - The project has a variety of controls that can be used to make the game more acessible for the user. When playing Classic Pong on devices with keyboards, the up and down arrow key and can be used to control the user's paddle. 
  - When playing Classic Pong on devices that do not have keyboards but rely on touch instead, the user will be able to control the paddle by touching the game board and swiping up and down on medium screens.
  - Due to landscape orientation on smaller screen sizes, the user will be able to control the paddle by touching the game board and swiping right and left. The interactive buttons on the project are also accessible by touch on touchscreen supported devices. 

## Future Improvements

Ongoing improvements and developments are vital to any project and their success. Future ideas I would implement are:

  - Integrate increasing difficulty levels if the user has beaten the computer each stage rather than game being over after one level.
  - Visually improve graphics of the ping pong game, making the canvas appear more stylish.
  - Implement audio to the game when user or computer hits the ball or when either player scores. 
  - Polish up touch controls on mobile either by improving current conrols or adding a controller buttons for the user to press.

## Testing

During the development of Classic Pong, the project went through rigorous testing to ensure a fully responsive and functional game was created across all screen sizes. To accomplish this, I used Google Chrome's Developer Tools to continuously test the game when applying styling, adjusting HTML and Javascript codes using a live server window. If any errors occured in the console, these would be seen to immediately to make sure the project would function properly. Many browsers and devices with varied screen sizes were used to test the responsiveness and amend the design of the game to fit all viewports. 

To ensure cross-compatibility, I tested the project on four different browsers during and after development:
  
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - iOS Safari

After developing the game for desktop screens (1920 x 1080 pixels), I further examined it on different devices to ensure full responsiveness was acquired. On medium sized screens (laptop/tablet), the layout of the game was the same but the scale of the content was reduced to fit the respective viewport size. I achieved responsiveness on small sized screens (small & large mobiles) by forcing the orientation of the screen to portray as landscape. This landscape orientation is present on devices that are 600 pixels or lower in width. Following this procedure, I manually tested the game on different mobile devices such as iPhone 11 Pro Max, IPhone 5/SE and a variety of Android phones that my family & friends own. Classic Pong was also tested on the iPad Air, iPad Pro and the HP EliteBook 840 G4 for examination on medium sized screens. 

## Bugs

During and after development of Classic Pong, I encountered many bugs which needed attending to. These are listed below:

### Fixed Bugs

 - **Bug No 1**
   - **Problem**: The game was running in the background when user was on title screen.
   - **Cause**: The variable which allowed the game to run 60 frames per second (gameLoopInterval) was being assigned globally.
   - **Fix**: This variable was assigned in an event listener for the first button, so the game would only run if the button was clicked.

 - **Bug No 2**
   - **Problem**: The game was running in the background after the user had completed the game and was on the game over screen. 
   - **Cause**: The function to reset the game was called in the game over function.
   - **Fix**: The reset game function was taken out of the game over function.

  - **Bug No 3**
   - **Problem**: The main game div was occupying space on the title screen leaving huge space below the 'click to play' button.
   - **Cause**: The main game div had a flex display on.
   - **Fix**: The flex display from the main game div was removed and was set to display none. The flex display was added in the event listener for the first button.