def on_received_number(receivedNumber):
    global modus
    if receivedNumber == 13:
        modus = 1
    if receivedNumber == 12:
        modus = 0
radio.on_received_number(on_received_number)

modus = 0
radio.set_group(1)

def on_forever():
    if modus == 0:
        if input.light_level() <= 100:
            music.stop_all_sounds()
        if input.light_level() > 100:
            music.play_tone(932, music.beat(BeatFraction.WHOLE))
basic.forever(on_forever)
