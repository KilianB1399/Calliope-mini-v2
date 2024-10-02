input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    selection += -1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    selection += 1
})
radio.setGroup(1)
for (let index = 0; index < 5; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    control.waitMicros(4)
}
let selection = 1
basic.forever(function () {
    if (selection == -1) {
        selection = 1
    }
    if (selection == 0) {
        radio.sendNumber(13)
        basic.setLedColor(0x00ff00)
    }
    if (selection == 1) {
        radio.sendNumber(12)
        basic.setLedColor(0xff0000)
    }
    if (selection == 2) {
        selection = 0
    }
})
