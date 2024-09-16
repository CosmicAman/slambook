import React, { useState, useEffect } from 'react';
import { personData } from './Person'; // Import personData from Person.jsx
import { useLocation } from 'react-router-dom';
import './FriendshipMeter.css';

function FriendshipMeter() {
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

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
      }, 1000); // 1 seconds delay
    } else {
      setScore(null); // Reset score if both people aren't selected or are the same
    }
  };

  return (
    <>
    <div className='container'>
      <h2>Friendship Meter</h2>
      
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

      <button className='f-button' onClick={handleCalculate} disabled={loading}>{loading ? 'Calculating...' : 'Calculate Friendship Score'}</button>

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}


      {score !== null && !loading && (
        <div>
          <h3>Friendship Score</h3>
          <p className='score'>{personData[person1].name} and {personData[person2].name}'s friendship score is: {score}/10</p>
        </div>
        )}
      {person1 === person2 && person1 !== "" && <p>Please choose a different persons!</p>}
       



    </div>


   

    </>
  );
}

export default FriendshipMeter;
