let smily = 0
basic.forever(function () {
    if (smily == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (smily == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    calliBot2.setRgbLed(C2RgbLed.All, randint(0, 255), randint(0, 255), randint(0, 255))
    basic.pause(200)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        while (!(input.buttonIsPressed(Button.A))) {
            if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) || calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel) || (calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an) || calliBot2.readBumperSensor(C2Sensor.links, C2State.an))) {
                basic.setLedColor(0xff0000)
                smily = 1
                calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 80)
                basic.pause(500)
                calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 70)
                calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 70)
                smily = 0
                basic.pause(500)
            } else {
                basic.setLedColor(0x00ff00)
                calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 100)
            }
        }
    }
})
