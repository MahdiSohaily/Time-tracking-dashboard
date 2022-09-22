import Activity from './modules/Activity.js';
const navigator = document.querySelectorAll('.navigator');
let obj = null;

fetch('../data.json')
  .then((res) => res.json())
  .then((data) => (obj = data));

navigator.forEach((item) => {
  item.addEventListener('click', (element) => {
    const { target } = element;
    target.classList.toggle('active');
    const dataState = target.getAttribute('data-display').toLowerCase();
    switch (dataState) {
      case 'daily':
        {
          updateTimeline('day');
          displayData(dataState);
        }
        break;
      case 'weekly':
        {
          updateTimeline('week');
          displayData(dataState);
        }
        break;
      case 'monthly': {
        updateTimeline('month');
        displayData(dataState);
      }
    }
  });
});

function displayData(dataState = 'daily') {
  const activity = new Activity(obj);
  updateCurrent(activity.activities(dataState));
}

function updateTimeline(timeline = 'day') {
  const timelines = document.querySelectorAll('.timeline');
  timelines.forEach((item) => {
    item.innerHTML = timeline;
  });
}

function updateCurrent(activity) {
  const currentElem = document.querySelectorAll('.current');
//   const lastElem = document.querySelectorAll('.last');
  for (let item in currentElem) {
    currentElem[item].innerHTML = activity[item].data.current;
    // lastElem[item].innerHTML = activity[item].data.previous;
  }
}
