input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Down), function () {
    radio.sendNumber(1)
    basic.setLedColor(0x00ff00)
    control.waitMicros(10000000)
    basic.setLedColor(0xff0000)
})
radio.setGroup(39)
basic.setLedColor(0xff0000)
