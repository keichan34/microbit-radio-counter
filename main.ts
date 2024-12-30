let count = 0
radio.onReceivedNumber(function (receivedNumber) {
    count = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    count += 1
    radio.sendNumber(count)
})
input.onButtonPressed(Button.B, function () {
    count = 0
    radio.sendNumber(count)
})
basic.forever(function () {
    basic.showNumber(count)
})
basic.forever(function () {
    control.waitMicros(10000)
    radio.sendNumber(count)
})
