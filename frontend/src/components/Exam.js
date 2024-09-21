'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import styles from './Exam.module.css';

const Exam = ({ data }) => {
  const { examTitle, examMeta, questions } = data;
  const [responses, setResponses] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [examSubmitted, setExamSubmitted] = useState(false);

  // Constants
  const examDurationInSeconds = examMeta.duration * 60; // Convert minutes to seconds
  const examKey = 'examStartTime'; // Key for localStorage

  // Initialize timer
  useEffect(() => {
    let startTime = localStorage.getItem(examKey);
    const currentTime = Date.now();

    if (!startTime) {
      // No start time found, set it now
      startTime = currentTime;
      localStorage.setItem(examKey, startTime);
    } else {
      startTime = parseInt(startTime, 10);
    }

    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const initialTimeLeft = examDurationInSeconds - elapsedTime;

    if (initialTimeLeft <= 0) {
      // Time is up, auto-submit the exam
      handleSubmit();
      setTimeLeft(0);
    } else {
      setTimeLeft(initialTimeLeft);
    }

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examDurationInSeconds]);

  // Warn user before leaving the page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleResponseChange = (questionId, answer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    // Clear the exam start time from localStorage
    localStorage.removeItem(examKey);

    // Send responses to the back-end
    try {
      const result = await axios.post('http://localhost:5000/api/submit', responses);
      // Handle the result (e.g., display score or confirmation)
      console.log(result.data);
      // Indicate that the exam has been submitted
      setExamSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (examSubmitted) {
    return (
      <div className={styles.container}>
        <h2>Thank you for completing the exam!</h2>
        <p>Your responses have been submitted.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{examTitle}</h1>
        <div className={styles.metaData}>
          <p>
            <strong>Subject:</strong> {examMeta.subject}
          </p>
          <p>
            <strong>Passing Score:</strong> {examMeta.passingScore}%
          </p>
          {examMeta.duration && timeLeft !== null && (
            <p>
              <strong>Time Left:</strong> {formatTime(timeLeft)}
            </p>
          )}
        </div>
      </header>
      <div className={styles.instructions}>
        <p>Please read each question carefully and provide your best answer.</p>
      </div>
      <div className={styles.questions}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onResponseChange={handleResponseChange}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default Exam;
