let rightWHELL = 0
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
let leftWHELL = 0
leftWHELL = 0
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . # . #
        # . . . #
        # . . . #
        `)
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 150) {
        cuteBot.moveTime(cuteBot.Direction.backward, 20, 2)
    } else {
        leftWHELL = randint(-100, 100)
        rightWHELL = randint(-100, 100)
    }
    cuteBot.motors(leftWHELL, rightWHELL)
    basic.pause(100)
})
