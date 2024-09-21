import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

const ShortAnswerQuestion = ({ question }) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
    // Store answer for submission
  };

  return (
    <MathJaxContext>
      <div>
        <MathJax>{question.questionText}</MathJax>
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          placeholder="Your answer"
        />
      </div>
    </MathJaxContext>
  );
};

export default ShortAnswerQuestion;
