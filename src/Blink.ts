function blink(ms: number) {
    let ledOn = false;
    setInterval(() => {
        console.log(`led = ${ledOn}`);
        digitalWrite(cfg.pin.led1, ledOn);
        ledOn = !ledOn;
    }, ms);
}