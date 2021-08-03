import getInputsValuesFromForm from './utils/_getInputsValuesFromForm';

const DOM = {
  caloriesCalculatorForm: document.querySelector('form.caloriesCalculator'),
  caloriesCalculatorResultElement: document.querySelector(
    '#CaloriesCalculatorResult'
  ),
};

function calculateCalories({ age, weight, height, physicalActivity, gender }) {
  const basalMetabolicRateOffset = gender === 'male' ? 5 : -161;

  const basalMetabolicRate =
    10 * weight + 6.25 * height - 5 * age + basalMetabolicRateOffset;

  const caloriesToMaintainWeight = basalMetabolicRate * physicalActivity;
  const caloriesToLoseWeight = basalMetabolicRate * physicalActivity - 450;
  const caloriesToGainWeight = basalMetabolicRate * physicalActivity + 450;

  return {
    basalMetabolicRate,
    caloriesToGainWeight,
    caloriesToLoseWeight,
    caloriesToMaintainWeight,
  };
}

function displayTheCaloriesCalculatorResult(caloriesCalculatorResult) {
  Object.entries(caloriesCalculatorResult).forEach(([key, value]) => {
    const spanElement = DOM.caloriesCalculatorResultElement.querySelector(
      `span.${key}`
    );

    spanElement.innerText = `${Math.round(value)} calories`;
  });

  DOM.caloriesCalculatorResultElement.classList.remove('hidden');
}

DOM.caloriesCalculatorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formValues = getInputsValuesFromForm(DOM.caloriesCalculatorForm);
  const caloriesCalculatorResult = calculateCalories(formValues);

  displayTheCaloriesCalculatorResult(caloriesCalculatorResult);
});
