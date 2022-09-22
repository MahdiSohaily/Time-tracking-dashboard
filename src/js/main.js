const navigator = document.querySelectorAll('.navigator');
navigator.array.forEach((item) => {
  item.addEventListener('click', (element) => {
    const { target } = element;
    switch (target.toLowerCase) {
      case 'daily':
        {
        }
        break;
      case 'weekly':
        {
        }
        break;
      case 'monthly': {
      }
    }
  });
});

function displayData(dataState = 'daily') {
    
}
