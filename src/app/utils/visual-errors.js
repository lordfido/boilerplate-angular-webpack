
const addVisualError = (message) => {
  var visualErrors = document.querySelector('#visual-errors'); // eslint-disable-line no-var,no-undef

  if (!visualErrors) {
    visualErrors = document.createElement('div'); // eslint-disable-line no-undef
    visualErrors.id = 'visual-errors';
    visualErrors.classList.add('VisualErros');
    document.body.appendChild(visualErrors); // eslint-disable-line no-undef
  }

  const newError = document.createElement('p'); // eslint-disable-line no-undef
  newError.classList.add('alert');
  newError.classList.add('alert-danger');
  newError.innerText = message;

  visualErrors.appendChild(newError);
};

export default addVisualError;
