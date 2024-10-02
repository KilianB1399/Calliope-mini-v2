radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        modus = 1
    }
    if (receivedNumber == 12) {
        modus = 0
    }
})
let modus = 0
radio.setGroup(1)
basic.forever(function () {
    if (modus == 0) {
        if (input.lightLevel() <= 100) {
            music.stopAllSounds()
        }
        if (input.lightLevel() > 100) {
            music.playTone(932, music.beat(BeatFraction.Whole))
        }
    }
})
