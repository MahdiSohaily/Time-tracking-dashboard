import Activity from './modules/Activity.js';
const navigator = document.querySelectorAll('.navigator');
let obj = null;

fetch('./data.json')
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    displayData();
  });

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
  const currentElem = document.querySelectorAll('.currentElem');
  const lastElem = document.querySelectorAll('.last');
  const size = currentElem.length;
  // pass data to the UI
  for (let item = 0; item < size; item++) {
    lastElem[item].innerHTML = activity[item].data.previous;
    currentElem[item].innerHTML = activity[item].data.current;
  }
}
