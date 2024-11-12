import React from 'react';
import Course from './Course';

const courseData = [
  { id: 1, title: " Eternal Echoes ", description: "Science Fiction, Dystopian, Mystery, Thriller" },
  { id: 2, title: "Whispers of Winter", description: "Gothic Fiction, Mystery, Psychological Thriller" },
  { id: 3, title: "Veil of Ashes", description: "Fantasy, Adventure, Dark Fantasy, Mythology" },
  { id: 4, title: "Threads of Time", description: "Science Fiction, Time Travel, Thriller, Philosophical Fiction" },
  { id: 5, title: "Shadows of the Sea", description: "Paranormal Mystery, Supernatural Thriller" },
  { id: 7, title: "Echoes of Elysium", description: "Epic Fantasy, Adventure, Mythology" },
  { id: 8, title: "The Quantum Paradox", description: "Epic Fantasy, Adventure, Mythology" },
  { id: 9, title: "Shadows of the Bayou", description: "Epic Fantasy, Adventure, Mythology" },
  { id: 10, title: "Forgotten Kingdoms", description: "Epic Fantasy, Adventure, Mythology" },
  { id: 11, title: "remembered Kingdoms", description: "Epic Fantasy, Adventure, Thriller" }
  // Add more courses as needed
];

const Cards = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      padding: '2rem',
    }}>
      {courseData.map(course => (
        <Course key={course.id} title={course.title} description={course.description} />
      ))}
    </div>
  );
};

export default Cards;
