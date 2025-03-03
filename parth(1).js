
function updateBio() {
    
    let name = prompt("What is your name?");
    let profession = prompt("What is your profession?");
    let profilePicUrl = prompt("Enter the URL of your profile picture:");

    if (!name || !profession) {
        alert("Please enter both your name and profession.");
        return;
    }

    alert(`Name: ${name}\nProfession: ${profession}\nProfile Picture URL: ${profilePicUrl}`);

    console.log(`Name: ${name}`);
    console.log(`Profession: ${profession}`);
    console.log(`Profile Picture URL: ${profilePicUrl}`);

    document.getElementById("name").textContent = name;
    document.getElementById("profession").textContent = profession;

    let profilePicElement = document.getElementById("profile-pic");
    if (profilePicUrl) {
        profilePicElement.src = profilePicUrl;
        profilePicElement.style.display = "block";
    } else {
        profilePicElement.style.display = "none";
    }
}


document.getElementById("update-btn").addEventListener("click", updateBio);

updateBio();
