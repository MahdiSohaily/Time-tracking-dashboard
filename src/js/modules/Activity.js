export default class Activity {
  constructor(data) {
    this._activities = data;
  }

  activities(stage = 'daily') {
    let data = [];
    this._activities.forEach((element) => {
      data.push(this.getData(element.title, element.timeframes[stage]));
    });
    return data;
  }

  getData(title, data) {
    return {
      title,
      data,
    };
  }
}
