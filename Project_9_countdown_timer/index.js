import inquirer from "inquirer";
const ans = await inquirer.prompt({
    name: "input",
    type: "number",
    message: "Enter Seconds"
});
class CountdownTimer {
    constructor(seconds) {
        this.seconds = seconds;
        this.startTime = this.currentTime = this.seconds;
    }
    start() {
        console.log(`Countdown started for ${this.seconds} seconds.`);
        this.intervalId = setInterval(() => {
            this.currentTime--;
            if (this.currentTime < 0) {
                console.log('Countdown finished.');
                this.stop();
            }
            else {
                console.log(`Time remaining: ${this.currentTime} seconds.`);
            }
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
    }
}
const timer = new CountdownTimer(ans.input);
timer.start();
