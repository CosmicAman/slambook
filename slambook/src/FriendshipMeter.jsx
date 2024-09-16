import React, { useState, useEffect } from 'react';
import { personData } from './Person'; // Import personData from Person.jsx
import { useLocation } from 'react-router-dom';
import './FriendshipMeter.css';

function FriendshipMeter() {
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState('');

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fixedPerson = params.get('person1');
    if (fixedPerson && personData[fixedPerson]) {
      setPerson1(fixedPerson);
    }
  }, [location.search]);

  const handlePerson2Change = (event) => {
    setPerson2(event.target.value);
  };

  const handleCalculate = () => {
    if (person1 && person2 && person1 !== person2) {
      setLoading(true);
      setTimeout(() => {
        const randomScore = Math.floor(Math.random() * 10) + 1;
        setScore(randomScore);
        setLoading(false);
      }, 1000); // 1 second delay
    } else {
      setScore(null); // Reset score if both people aren't selected or are the same
    }
  };

  const handleAnswerSelection = (answerValue) => {
    const updatedAnswers = [...userAnswers, answerValue];
    setUserAnswers(updatedAnswers);
    console.log(`Selected answer value: ${answerValue}`);
    console.log(`Updated answers: ${updatedAnswers}`);

    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(quizIndex + 1);
    } else {
      calculateQuizResult(updatedAnswers);
      setQuizIndex(quizQuestions.length); // Ensure quizIndex is set to length to display result
    }
  };

  const calculateQuizResult = (answers) => {
    const totalScore = answers.reduce((total, answerValue) => total + answerValue, 0);
    console.log(`Total Quiz Score: ${totalScore}`);

    let resultText = '';
    if (totalScore >= 6 && totalScore <= 10) {
      resultText = "You're the “Doesn’t Take Life Too Seriously” Friend, life can be like one big party and you like to have fun. Friends enjoy your sense of fun although sometimes they can feel like you’re unsupportive. Having fun with friends is good but perhaps sometimes slow down and try to really listen to what friends are telling you.";
    } else if (totalScore >= 11 && totalScore <= 15) {
      resultText = "You're the “Supportive And Encouraging” Friend, you are supportive and friends often turn to you for help as they know you can be a good source of encouragement. You listen and try to give good advice, although sometimes you can be a little self-centred so make sure you pay attention to what friends may be telling you.";
    } else if (totalScore >= 16 && totalScore <= 20) {
      resultText = "You're the Loyal Friend, you are there for your friends no matter what the circumstance and you always show you care. You like to show your friends what is good about them and make them feel good about themselves.";
    } else if (totalScore >= 21 && totalScore <= 24) {
      resultText = "You're the Challenger Friend, you are a loyal caring friend and you will make a stand for your friends. Although you may not always say what your friends want to hear you are admired for your honesty. You will always be on your friend’s side no matter what decision they make, even if in your opinion it’s the wrong one.";
    } else {
      resultText = "There was an error calculating your result. Please try again.";
    }

    console.log(`Quiz Result: ${resultText}`);
    setQuizResult(resultText);
  };

  const quizQuestions = [
    {
      question: "1. Two of your friends have fallen out. Do you…",
      options: [
        { text: "A. Take one side", value: 2 },
        { text: "B. Talk to them both together", value: 4 },
        { text: "C. Ignore them", value: 3 },
        { text: "D. Join in the falling out", value: 1 },
      ],
    },
    {
      question: "2. What do you do when someone is gossiping about your best friend. Do you…",
      options: [
        { text: "A. Say nothing", value: 2 },
        { text: "B. Speak up and confront the gossips", value: 4 },
        { text: "C. Join in with the gossip", value: 1 },
        { text: "D. Listen and tell the friend later", value: 3 },
      ],
    },
    {
      question: "3. The most important thing about friendship is...",
      options: [
        { text: "A. Spending fun time together", value: 3 },
        { text: "B. Always being there for each other", value: 4 },
        { text: "C. Being part of a popular group at school", value: 2 },
        { text: "D. Having cool friends", value: 1 },
      ],
    },
    {
      question: "4. Your friend is having a difficult week how would you cheer them up",
      options: [
        { text: "A. Suggest you do something fun together", value: 4 },
        { text: "B. Tell them they'll get over it", value: 2 },
        { text: "C. Offer them a shoulder to cry on", value: 3 },
        { text: "D. Tell them about your bad week", value: 1 },
      ],
    },
    {
      question: "5. Your friend has not done as well in an exam as they hoped to. Do you...",
      options: [
        { text: "A. Offer to help", value: 3 },
        { text: "B. Tell them how well you’ve done", value: 1 },
        { text: "C. Remind them of the things they are good at", value: 4 },
        { text: "D. Tell them it's their own fault", value: 2 },
      ],
    },
    {
      question: "6. Your friend tells you they are being bullied. What do you do?",
      options: [
        { text: "A. Listen", value: 3 },
        { text: "B. Encourage them to get help", value: 4 },
        { text: "C. Ignore them", value: 2 },
        { text: "D. Laugh and tell them they are being silly", value: 1 },
      ],
    },
  ];

  return (
    <>
      <div className='container'>
        <h2 className='quiz-title'>Friendship Meter</h2>
        
        <div>
          <label className='label'>Select Person: </label>
          <select className='drop' value={person2} onChange={handlePerson2Change}>
            <option value="">--Choose--</option>
            {Object.keys(personData).map((personKey) => (
              <option key={personKey} value={personKey}>
                {personData[personKey].name}
              </option>
            ))}
          </select>
        </div>

        <button className='f-button' onClick={handleCalculate} disabled={loading}>
          {loading ? 'Calculating...' : 'Calculate Friendship Score'}
        </button>

        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}

        {score !== null && !loading && (
          <div>
            <h3>Friendship Score</h3>
            <p className='score'>
              {personData[person1].name} and {personData[person2].name}'s friendship score is: {score}/10
            </p>
          </div>
        )}
        {person1 === person2 && person1 !== "" && <p>Please choose different persons!</p>}
      </div>

      <div className='quiz-container'>
        <h2 className='quiz-title'>Friendship Quiz</h2>
        {quizIndex < quizQuestions.length ? (
          <div className='quiz-question'>
            <h3>{quizQuestions[quizIndex].question}</h3>
            <div className='quiz-options'>
              {quizQuestions[quizIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerSelection(option.value)}>
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className='quiz-result'>
            <h3>Quiz Result</h3>
            <p>{quizResult}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FriendshipMeter;
