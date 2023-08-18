const container = document.getElementById("profile-container");

const profileData = {
    name: "Clark Kent",
    age: 32,
    location: "Smallville",
    mood: "Happy",
    profile_pic: "path/to/profile-pic.jpg"
};

function generateProfileCard(data) {
    return `
        <div class="profile-card">
            <img src="${data.profile_pic}" alt="profile pic" class="profile-pic">
            <h2>${data.name}</h2>
            <p>Age: ${data.age}</p>
            <p>Location: ${data.location}</p>
            <p>Mood: ${data.mood}</p>
        </div>
    `;
}