const navigator = document.querySelectorAll('.navigator');
navigator.forEach((item) => {
  item.addEventListener('click', (element) => {
    const { target } = element;
    const dataState = target.getAttribute('data-display').toLowerCase();
    switch (dataState) {
      case 'daily':
        {
          displayData(dataState);
        }
        break;
      case 'weekly':
        {
          displayData(dataState);
        }
        break;
      case 'monthly': {
        displayData(dataState);
      }
    }
  });
});

function displayData(dataState = 'daily') {
  console.log(dataState);
}
