const
    esp = require("espruino"),
    board = require("./../board.json");

if (!board.port)
    throw new Error("[port] not set in Board.json");

esp.init(() => {
    Espruino.Config.BAUD_RATE = (board.speed || 115200).toString();
    Espruino.Config.SAVE_ON_SEND = 1;
    Espruino.Config.BLUETOOTH_LOW_ENERGY = false;

    const t = new Date().getTime();

    esp.sendFile(board.port, board.file || "Output.js", () => {
        console.log(`ok -> ${new Date().getTime() - t} ms.`);        
    });
});