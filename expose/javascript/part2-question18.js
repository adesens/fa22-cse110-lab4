function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();

    return console.log(time);
}

setInterval(displayTime, 1000);