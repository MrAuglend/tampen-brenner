radio.onReceivedString(function (receivedString) {
    led.plotBarGraph(
    radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100,
    60
    )
})
radio.setGroup(11)
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.forever(function () {
	
})
