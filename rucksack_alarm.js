let brightness = 0
function triggerbrightness2 () {
    music.stopAllSounds()
}
function checkbrightness (brightness2: number) {
    if (brightness2 >= 100) {
        triggerbrightness()
    }
    if (brightness2 < 100) {
        triggerbrightness2()
    }
}
function triggerbrightness () {
    music.playTone(988, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    brightness = input.lightLevel()
    checkbrightness(brightness)
})
