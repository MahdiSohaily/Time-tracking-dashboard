export default class Activity {
  constructor() {
    this._myActivity = this.fetchData();
  }

  fetchData() {
    fetch('../../../data.json')
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  get activity() {
    return this._myActivity;
  }
}
