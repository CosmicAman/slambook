import React from 'react';
import styles from './Person.module.css';
import { useParams } from 'react-router-dom';
import photo from './assets/anu.jpeg';
import photo2 from './assets/aman.jpeg';
import photo3 from './assets/dinesh.jpeg';
import photo4 from './assets/chucha.jpeg';
import photo5 from './assets/aku.jpg';
import photo6 from './assets/ad.jpeg';
import photo7 from './assets/ak.jpeg';
import photo8 from './assets/mohitt.jpeg';
import Header from './Header';
import Footer from './Footer';


export const personData = {
  anu: {
    name: 'Anu',
    description: 'Hi, my name is Anu.',
    img: photo,
    hobbie: 'Dancing',
    color: 'Black',
    food: 'Chicken Curry',
    bestSkill: 'Art',
    bloodGroup: 'B+',
    zodiacSign: 'Aries',
    profession: 'Pharmacist',
    destination: 'Paris'
  },
  aman: {
    name: 'Aman',
    description: 'Hi, my name is Aman.',
    img: photo2,
    hobbie: 'Photography',
    color: 'Sky-Blue',
    food: 'Allu Paratha',
    bestSkill: 'Tech',
    bloodGroup: 'O+',
    zodiacSign: 'Pisces',
    profession: 'Computer Science Engineer',
    destination: 'Japan'
  },
  dinesh: {
    name: 'Dinesh',
    description: 'Hi, my name is Dinesh.',
    img: photo3,
    hobbie: 'Sleeping',
    color: 'Black',
    food: 'Biryani',
    bestSkill: 'N/A',
    bloodGroup: 'O+',
    zodiacSign: 'Pisces',
    profession: 'Software Engineer',
    destination: 'Kashmir',
  },
  shubham: {
    name: 'Shubham',
    description: 'Hi, my name is Shubham.',
    img: photo4,
    hobbie: 'Cooking',
    color: 'Grey',
    food: 'Pizza',
    bestSkill: 'Communication',
    bloodGroup: 'B+',
    zodiacSign: 'Aquarius',
    profession: 'Computer Science Engineer',
    destination: 'Bankok',
  },
  akanksha: {
    name: 'Akanksha',
    description: 'Hi, my name is Akanksha.',
    img: photo5,
    hobbie: 'Drawing',
    color: 'Black',
    food: 'Chicken Biryani',
    bestSkill: 'Problem solving',
    bloodGroup: 'O-',
    zodiacSign: 'Aries',
    profession: 'Doctor',
    destination: 'Bali'
  },
  adarsh: {
    name: 'Adarsh',
    description: 'Hi, my name is Adarsh.',
    img: photo6,
    hobbie: 'Cricket',
    color: 'Black',
    food: 'Mutton Curry',
    bestSkill: 'Toucking nose with tongue',
    bloodGroup: 'O+',
    zodiacSign: 'Aries',
    profession: 'Associate Software Engineer',
    destination: 'Rome'
  },
  amit: {
    name: 'Amit',
    description: 'Hi, my name is Amit.',
    img: photo7,
    hobbie: 'Stock Market',
    color: 'Red',
    food: 'Litti Chokha',
    bestSkill: 'Javascript',
    bloodGroup: 'O+',
    zodiacSign: 'Scorpio',
    profession: 'Frontend Developer',
    destination: 'south korea'
  },
  mohit: {
    name: 'Mohit',
    description: 'Hi, my name is Mohit.',
    img: photo8,
    hobbie: 'N/A',
    color: 'Black',
    food: 'Mutton Curry',
    bestSkill: 'N/A',
    bloodGroup: 'N/A',
    zodiacSign: 'N/A',
    profession: 'Computer Science Engineer',
    destination: 'Dholakpur'
  },
  
};

function Person() {
  const { name } = useParams();
  const person = personData[name];

  if (!person) {
    return <p>Person not found</p>;
  }

  return (
    <>
      
      <img className={styles.card} src={person.img} alt={`${person.name}'s photo`} />
      <p className={styles.p}>{person.description}</p> 
      <div className={styles.description}>
        <p><strong>Hobbies:</strong> {person.hobbie}</p>
        <p><strong>Favorite Color:</strong> {person.color}</p>
        <p><strong>Best Skill:</strong> {person.bestSkill}</p>
        <p><strong>Blood Group:</strong> {person.bloodGroup}</p>
        <p><strong>Zodiac Sign:</strong> {person.zodiacSign}</p>
        <p><strong>Profession:</strong> {person.profession}</p>
        <p><strong>Favorite Food:</strong> {person.food}</p>
        <p><strong> Dream Destination:</strong> {person.destination}</p>
      </div>
      
    </>
  );
}

export default Person;
