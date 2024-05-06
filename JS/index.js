

/*Date Setup*/
const currentDate = new Date();
const currYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Website created by Sarah Dapkiewicz &copy; ${currYear}</small>`

footer.appendChild(copyright);
document.body.appendChild(footer);


let skills = ["HTML", "CSS", "Javascript", "GitHub", "AdobeXD", "Webflow"];
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);


for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill; 
    skillsList.appendChild(skillItem);
}

/* FORM */

const usersName = document.getElementById("usersName");
const form = document.getElementById("leave_message");
const usersMessage = document.getElementById('usersMessage');
const btnSubmit = document.getElementById('btnSubmit');
const ulMessage = document.getElementById('ulMessage');
const leaveMessage = document.getElementById('leave_message');
const logMessageSection = document.getElementById('messages');

function messageSubmit (event) {
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let logMessage =  event.target.usersMessage.value;
    console.log(name, email, logMessage);

    form.reset();
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${logMessage}</span>`;

    const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';
        removeButton.addEventListener('click', function () {
            const entry = removeButton.parentNode;
            entry.remove();
        });

    newMessage.appendChild(removeButton);
    ulMessage.appendChild(newMessage);

};

form.addEventListener("submit", messageSubmit);

/*API photo*/

const img = document.getElementById('gif');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=8SqL9qrrx5SB81E84CQ5S8dJMLft9VRf&s=cat', {mode: 'cors'})
.then(function(response) {
  return response.json()
})
.then(function(response) {
  img.src = response.data.images.original.url
})
.catch(e => {
  console.log(e)
})

/*Git Hub stuff*/



async function getGithubRepo() {
    try {    
      const response = await fetch('https://api.github.com/users/sarross88/repos');
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log(data[0].html_url);
      console.log(data[1].html_url);

    /*const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement("li");
        project.innerText = data[i].html_url;
        projectList.appendChild(project);
    }*/

    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  getGithubRepo(); 
