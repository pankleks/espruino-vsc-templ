function blink(pin: Pin | number, ms: number, ledT?: number) {
    if (typeof ledT === "number")
        clearInterval(ledT);

    let ledOn = false;
    return setInterval(function () {
        digitalWrite(pin, ledOn);
        ledOn = !ledOn;
    }, ms);
}