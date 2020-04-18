radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("-")
    basic.showNumber(receivedNumber)
})
radio.setGroup(1)
basic.showIcon(IconNames.SmallHeart)
