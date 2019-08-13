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

    if (cfg.wifi.ssid)
        require("Wifi").connect(cfg.wifi.ssid, { password: cfg.wifi.pass }, () => {
            console.log("wifi ok");
        }); 
}

