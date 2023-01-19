input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    0,
    5
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.playMelody("D E D E F E F E ", 300)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.North)
})
basic.showLeds(`
    # . . . #
    # . # . #
    # # . # #
    # # . # #
    # # # # #
    `)
