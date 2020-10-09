function blink(ms: number) {
    let ledOn = false;
    return setInterval(function () {
        digitalWrite(cfg.pin.led1, ledOn);
        ledOn = !ledOn;
    }, ms);
}