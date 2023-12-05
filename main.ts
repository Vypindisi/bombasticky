input.onGesture(Gesture.Shake, function () {
    basic.showString("negr")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Rollerskate)
    }
    for (let index = 0; index < 1; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
    }
    for (let index = 0; index < 790; index++) {
        music.stopMelody(MelodyStopOptions.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallSquare)
    }
    for (let index = 0; index < 1; index++) {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("2")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(17 * 4)
    for (let index = 0; index < 9; index++) {
        led.plotBarGraph(
        2,
        3
        )
    }
})
