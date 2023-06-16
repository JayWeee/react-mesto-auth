import { useState } from 'react';

export function useForms(inputValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    console.log(values)
  };
  return { values, handleChange, setValues };
}
