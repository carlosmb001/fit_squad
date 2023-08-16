const profileData = {
    name: "Clark Kent",
    age: 32,
    location: "Smallville",
    mood: "Happy"
  };
  
  function generateProfileCard(data) {
    return `
      <div class="profile-card">
        <h2>${data.name}</h2>
        <p>Age: ${data.age}</p>
        <p>Location: ${data.location}</p>
        <p>Mood: ${data.mood}</p>
      </div>
    `;
  }
  
  const container = document.getElementById("profile-container");

  container.innerHTML = generateProfileCard(profileData);