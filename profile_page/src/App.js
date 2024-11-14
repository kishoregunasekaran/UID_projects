// src/App.js
import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const userData = {
    image: 'https://via.placeholder.com/150',
    name: 'Kishore Gunasekaran',
    bio: 'A passionate software developer who loves coding and solving problems.',
    email: 'kishoregunasekaran04@gmail.com',
    location: 'Erode-638004, TamilNadu, India',
    skills: ['JavaScript', 'React', 'Node.js', 'Python','Java','C'],
    projects: ['Grocery Website', 'Online Book Shopping Platform','Student Result website','TN law enforcement website'],
    achievements: ['Award for Best Developer 2023', 'Certified React Developer'],
  };

  return (
    <div>
      <UserProfile
        image={userData.image}
        name={userData.name}
        bio={userData.bio}
        email={userData.email}
        location={userData.location}
        skills={userData.skills}
        projects={userData.projects}
        achievements={userData.achievements}
      />
    </div>
  );
}

export default App;
