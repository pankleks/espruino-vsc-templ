const cfg = {
    wifi: {
        ssid: "",
        pass: ""
    },
    pin: {
        led1: 13
    }
};

function onInit() {
    blink(500);

    if (cfg.wifi.ssid) {
        const wifi = require("Wifi");
        wifi.connect(cfg.wifi.ssid, { password: cfg.wifi.pass }, (err) => {
            if (err)
                console.error(`can't connect wifi -> ${err}`);
            else
                console.log(`wifi ok -> ${wifi.getIP().ip}`);
        });
    }

    setInterval(() => {
        console.log(((E.getTemperature() - 32) / 1.8).toFixed(1));
    }, 2000);
}

