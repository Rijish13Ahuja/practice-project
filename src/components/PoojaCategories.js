import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/PoojaCategories.css'; 

const PoojaCategories = () => {
  const navigate = useNavigate(); // Initialize the hook

  const poojaData = [
    {
      id: 1,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    },
    {
      id: 2,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    },
    {
      id: 3,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Grah Pravesh (गृह प्रवेश)',
      description: 'The Puja is performed by a Pandit ji by doing Ganesh puja along with the Navagraha Jaaps.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  const handleNextClick = () => {
    navigate('/service-updated'); // Navigate to the Service Updated page
  };

  return (
    <div className="pooja-categories-container">
      <h1 className="pooja-title">Categories of Pooja</h1>
      <div className="pooja-grid">
        {poojaData.map((pooja) => (
          <div key={pooja.id} className="pooja-card">
            <div className="pooja-card-content">
              <img src={pooja.imageUrl} alt={pooja.name} className="pooja-image" />
              <div className="pooja-details">
                <h3>{pooja.name}</h3>
                <p>{pooja.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default PoojaCategories;
