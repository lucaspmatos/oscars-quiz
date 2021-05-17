import React from "react";
import "./Radio.css";

export default function Radio({
  question,
  options,
  onChange,
  value,
  id,
  active,
}) {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{question}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {" " + option}
        </label>
      ))}
    </fieldset>
  );
}
