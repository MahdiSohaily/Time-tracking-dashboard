import Activity from './modules/Activity.js';
const navigator = document.querySelectorAll('.navigator');
let obj = null;

fetch('../data.json')
  .then((res) => res.json())
  .then((data) => (obj = data));

navigator.forEach((item) => {
  item.addEventListener('click', (element) => {
    const { target } = element;
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
  console.log(activity.activities());
}

function updateTimeline(timeline = 'day') {
  const timelines = document.querySelectorAll('.timeline');
  timelines.forEach((item) => {
    item.innerHTML = timeline;
  });
}
