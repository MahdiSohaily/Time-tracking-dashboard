const navigator = document.querySelectorAll('.navigator');
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
  fetch('../../data.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].timeframes);
    });
}

function updateTimeline(timeline = 'day') {
  const timelines = document.querySelectorAll('.timeline');
  timelines.forEach((item) => {
    item.innerHTML = timeline;
  });
}
