def on_button_a():
    global selection
    selection += -1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global selection
    selection += 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

radio.set_group(1)
for index in range(5):
    music.play_tone(262, music.beat(BeatFraction.QUARTER))
    control.wait_micros(4)
selection = 1

def on_forever():
    global selection
    if selection == -1:
        selection = 1
    if selection == 0:
        radio.send_number(13)
        basic.set_led_color(0x00ff00)
    if selection == 1:
        radio.send_number(12)
        basic.set_led_color(0xff0000)
    if selection == 2:
        selection = 0
basic.forever(on_forever)
