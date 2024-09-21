import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const MultipleAnswerQuestion = ({ question }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (optionId) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(optionId)
        ? prevSelected.filter((id) => id !== optionId)
        : [...prevSelected, optionId]
    );
    // Store selectedOptions for submission
  };

  return (
    <MathJaxContext>
      <div>
        <MathJax>{question.questionText}</MathJax>
        {question.options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="checkbox"
                name={question.id}
                value={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
              />
              <MathJax>{option.text}</MathJax>
            </label>
          </div>
        ))}
      </div>
    </MathJaxContext>
  );
};

export default MultipleAnswerQuestion;
