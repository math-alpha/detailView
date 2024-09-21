// LongAnswerQuestion.js
'use client';

import React, { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import styles from './LongAnswerQuestion.module.css';

const LongAnswerQuestion = ({ question, onResponseChange }) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setAnswer(newValue);
    // Pass the answer up to the parent component
    onResponseChange(question.id, newValue);
  };

  return (
    <MathJaxContext>
      <div className={styles.questionContainer}>
        <div className={styles.questionText}>
          <MathJax>{question.questionText}</MathJax>
        </div>
        <textarea
          className={styles.textarea}
          value={answer}
          onChange={handleChange}
          placeholder="Type your answer here..."
          rows={8}
        />
      </div>
    </MathJaxContext>
  );
};

export default LongAnswerQuestion;
