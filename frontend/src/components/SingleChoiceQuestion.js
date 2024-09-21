import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const SingleChoiceQuestion = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    // You can also store this in a parent state or context for submission
  };

  return (
    <MathJaxContext>
      <div>
        <MathJax>{question.questionText}</MathJax>
        {question.options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={selectedOption === option.id}
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

export default SingleChoiceQuestion;
