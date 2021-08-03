export default function getInputsValuesFromForm(form) {
  function isNumeric(value) {
    return /^-?\d+\.?\d*$/.test(value);
  }

  const values = {};

  form.querySelectorAll('[name]').forEach((input) => {
    const value = input.value === '' ? undefined : input.value;

    values[input.name] = isNumeric(value) ? Number(value) : value;
  });

  return values;
}
