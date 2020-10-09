const cfg = {
    wifi: {
        ssid: "",
        pass: ""
    },
    pin: {
        led1: 2
    }
};

function onInit() {
    console.log(`board serial: ${getSerial()}`);

    blink(cfg.pin.led1, 1000);

    if (cfg.wifi.ssid) {
        console.log("connecting wifi");

        const wifi = require("Wifi");
        wifi.connect(cfg.wifi.ssid, { password: cfg.wifi.pass }, (err) => {
            if (err)
                console.log(`can't connect wifi -> ${err}`);
            else {
                console.log(`wifi ok -> ${wifi.getIP().ip}`);
                // todo: code here
            }
        });
    }

    setInterval(() => {
        console.log(`chip temp = ${((E.getTemperature() - 32) / 1.8).toFixed(1)} C`);
    }, 5000);
}

