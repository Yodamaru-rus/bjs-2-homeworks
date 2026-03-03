class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (var i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].time == time) {
        console.warn("Уже присутствует звонок на это же время");
        break;
      }
    }
    let canCall = true;
    this.alarmCollection.push({ callback, time, canCall });
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.time != time
    );
  }
  getCurrentFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" });
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (item.time == this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((item) => {
      item.canCall = true;
    });
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
