/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: 
 * Jan 2026
 * This program is a while loop again.
*/

let x = 0
let y = 0
let direction = 0   // 0=right, 1=down, 2=left, 3=up

basic.clearScreen()

input.onButtonPressed(Button.A, function () {
    // Clockwise
    direction = 0
    x = 0
    y = 0

    while (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x, y)

        // Move clockwise
        if (direction == 0) { // right
            x++
            if (x == 4) direction = 1
        } else if (direction == 1) { // down
            y++
            if (y == 4) direction = 2
        } else if (direction == 2) { // left
            x--
            if (x == 0) direction = 3
        } else { // up
            y--
            if (y == 0) direction = 0
        }

        basic.pause(150)
    }
})

input.onButtonPressed(Button.B, function () {
    // Counter-clockwise
    direction = 0
    x = 0
    y = 0

    while (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(x, y)

        // Move counter-clockwise
        if (direction == 0) { // down
            y++
            if (y == 4) direction = 1
        } else if (direction == 1) { // right
            x++
            if (x == 4) direction = 2
        } else if (direction == 2) { // up
            y--
            if (y == 0) direction = 3
        } else { // left
            x--
            if (x == 0) direction = 0
        }

        basic.pause(150)
    }
})
