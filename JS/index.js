/*Scroll Animations*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



/*Light and Dark Modes*/

var toggleDay = document.getElementById("toggleDN");
var paper = document.getElementById("paper");
var bug = document.getElementById("bug");
var squares = document.getElementById("squares");
toggleDay.addEventListener('click', dayMode);

console.log(toggleDay);

 function dayMode() {
  document.body.classList.toggle("light-mode");
  console.log("clicked");
  if (document.body.classList.contains("light-mode")){
    toggleDay.src = "icons/icons8-moon-90.png";
    bug.src = "icons/icons8-bug-black-48.png";
    paper.src = "icons/icons8-paper-black-50.png";
    squares.src = "icons/icons8-four-squares-black-50.png";
    console.log(day);
  } else {
    toggleDay.src = "icons/icons8-sun.svg";
    bug.src = "icons/icons8-bug-48.png";
    paper.src = "icons/icons8-paper-50.png";
    squares.src = "icons/icons8-four-squares-50.png";
    console.log(night);
  }
}

/*Hamburger Menu*/
const hamMenu = document.querySelector('.ham-menu');
console.log(hamMenu);
const offScreenMenu = document.querySelector('.off-screen-menu');
console.log(offScreenMenu);

hamMenu.addEventListener('click', () => {
  console.log('clicked');
hamMenu.classList.toggle("active");
offScreenMenu.classList.toggle("active");
})


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
let skillGrid = document.createElement("div");
skillGrid.classList.add('skill-grid');

// let skillsList = document.createElement("ul");
// skillsSection.appendChild(skillsList);


for (let skill of skills) {
    let skillItem = document.createElement("div");
    let skillText = document.createElement("h3");
    skillText.innerText = skill; 
    skillItem.append(skillText);
    skillGrid.append(skillItem);
    skillsSection.append(skillGrid);
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
      console.log(`This is the data you want ${data}`);
      console.log(data[0].html_url);
      console.log(data[1].html_url);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector(".projects-list");
    console.log(projectSection);
    
    for (let i = 0; i < data.length; i++) {
        let project = document.createElement("a");
        console.log(project);
        let repo = data[i].html_url;
        console.log(repo)
        project.href = repo;

        function getLastSection(url) {
          
          url = url.replace(/\/$/, "");
          
        
          var lastSlashIndex = url.lastIndexOf("/");
          
       
          var lastSection = url.substring(lastSlashIndex + 1);
          
          return lastSection;
      }
        let repoText = getLastSection(repo);
        let result = repoText.toString();
        project.innerText = result;
        projectList.append(project);
        projectSection.append(projectList);
        console.log(projectSection);
    }

    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  getGithubRepo(); 

  function getLastSection(url) {
          
    url = url.replace(/\/$/, "");
    
  
    var lastSlashIndex = url.lastIndexOf("/");
    
 
    var lastSection = url.substring(lastSlashIndex + 1);
    
    return lastSection;
}

  console.log(getLastSection('https://github.com/sarross88/sarah-dapkiewicz-haumea'));