'use client';

import React from 'react';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import MultipleAnswerQuestion from './MultipleAnswerQuestion';
import ShortAnswerQuestion from './ShortAnswerQuestion';
import LongAnswerQuestion from './LongAnswerQuestion';

const Question = ({ question, onResponseChange }) => {
  switch (question.type) {
    case 'single-choice':
      return (
        <SingleChoiceQuestion
          question={question}
          onResponseChange={onResponseChange}
        />
      );
    case 'multiple-answer':
      return (
        <MultipleAnswerQuestion
          question={question}
          onResponseChange={onResponseChange}
        />
      );
    case 'short-answer':
      return (
        <ShortAnswerQuestion
          question={question}
          onResponseChange={onResponseChange}
        />
      );
    case 'long-answer':
      return (
        <LongAnswerQuestion
          question={question}
          onResponseChange={onResponseChange}
        />
      );
    default:
      return null;
  }
};

export default Question;
