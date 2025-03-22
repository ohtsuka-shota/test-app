import React, { useState, useEffect } from 'react';
import chapter01 from '../data/chapter01';
import chapter02 from '../data/chapter02';

// 章とそれに関連する問題を定義
const chapters = {
  'Chapter 1 VPCとEC2等': chapter01,
  'Chapter 2 IAMユーザやロール、S3、Cloudtrail等': chapter02
};

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Quiz = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (selectedChapter !== null) {
      setShuffledOptions(shuffleArray(chapters[selectedChapter][currentQuestionIndex].options));
    }
  }, [currentQuestionIndex, selectedChapter]);

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (option) => {
    setUserAnswer(option);
    if (option === chapters[selectedChapter][currentQuestionIndex].answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer('');
    setIsCorrect(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setSelectedChapter(null);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  if (selectedChapter === null) {
    return (
      <div>
        <h2>チャプターを選んでください！</h2>
        {Object.keys(chapters).map((chapter) => (
          <button key={chapter} onClick={() => handleChapterSelect(chapter)}>
            {chapter}
          </button>
        ))}
      </div>
    );
  }

  const currentQuestion = chapters[selectedChapter][currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === chapters[selectedChapter].length - 1;

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <div>
        {shuffledOptions.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {isCorrect !== null && (
        <div>
          {isCorrect ? <p>Correct!</p> : <p>Incorrect. Try again.</p>}
          {isCorrect && !isLastQuestion && (
            <button onClick={handleNextQuestion}>Next</button>
          )}
          {isCorrect && isLastQuestion && (
            <div>
              <p>You've completed the chapter!</p>
              <button onClick={handleRestart}>Back to Chapter Selection</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;