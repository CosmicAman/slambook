import React from 'react';
import { useNavigate } from 'react-router-dom';
import photo from './assets/anu.jpeg';
import photo2 from './assets/aman.jpeg';
import photo3 from './assets/dinesh.jpeg';
import photo4 from './assets/chucha.jpeg';
import photo5 from './assets/aku.jpg';
import photo6 from './assets/ad.jpeg';
import photo7 from './assets/ak.jpeg';
import photo8 from './assets/mohitt.jpeg';
import './index.css'
function Card() {
  const navigate = useNavigate();
  const people = [
    { img: photo, name: 'Anu', alt: "Anu's photo" },
    { img: photo2, name: 'Aman', alt: "Aman's photo" },
    { img: photo3, name: 'Dinesh', alt: "Dinesh's photo" },
    { img: photo4, name: 'Shubham', alt: "Shubham's photo" },
    { img: photo5, name: 'Akanksha', alt: "Akanksha's photo" },
    { img: photo6, name: 'Adarsh', alt: "Adarsh's photo" },
    { img: photo7, name: 'Amit', alt: "Amit's photo" },
    { img: photo8, name: 'Mohit', alt: "Mohit's photo" }
    
  ];

  return (
    <>
      {people.map((person, index) => (
        <div className="card" key={index}>
          <img className="card-image" src={person.img} alt={person.alt} />
          <h2 className='h2'>{person.name}</h2>
          <button className='button'onClick={() => navigate(`/person/${person.name.toLowerCase()}`)}>Know {person.name}</button>
          <button className='button' onClick={() => navigate(`/friendship-meter?person1=${person.name.toLowerCase()}`)}>Friendship Meter</button>
        </div>
      ))}
    </>
  );
}

export default Card;
