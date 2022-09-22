export default class Activity {
  constructor() {
    this._myActivity = this.fetchData();
    this._work = this._myActivity[0].timeframes;
    this._play = this._myActivity[1].timeframes;
    this._study = this._myActivity[2].timeframes;
    this._exercise = this._myActivity[3].timeframes;
    this._social = this._myActivity[4].timeframes;
    this._self = this._myActivity[5].timeframes;
  }

  fetchData() {
    fetch('../../../data.json')
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
  
}
