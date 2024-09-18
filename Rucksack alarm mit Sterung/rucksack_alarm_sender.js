radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13.7) {
        locked = 1
        control.waitMicros(10000000)
        locked = 0
    }
})
function triggerbrightness2 () {
    music.stopAllSounds()
}
function checkbrightness (brightness2: number) {
    if (locked == 0) {
        if (brightness2 >= 100) {
            triggerbrightness()
        }
        if (brightness2 < 100) {
            triggerbrightness2()
        }
    }
}
function triggerbrightness () {
    music.playTone(988, music.beat(BeatFraction.Whole))
}
let brightness = 0
let locked = 0
radio.setGroup(39)
basic.forever(function () {
    brightness = input.lightLevel()
    checkbrightness(brightness)
})
