const converters = require("./converters");
const { hexToRgb, rgbToHex } = require("./converters");

let args = process.argv;

let type = args[2];
let hex = args[3];
let rgbNums = [args[3], args[4], args[5]];



if (type === "hex") {
    if (hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
        console.log(converters.hexToRgb(hex));
    }
    else {
    console.log("Invalid hex numbers");
    }
}
else if (type === "rgb") {
    if (rgbNums.filter(x => !x.match(/\d{3}/))) {
        console.log(converters.rgbToHex(parseInt(args[3]), parseInt(args[4]), parseInt(args[5])));//this does not work
    }
    else {
    console.log("Invalid rgb numbers");
    }
}
