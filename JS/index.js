alert("Hello! I am an alert box!!");

/*Date Setup*/
const currentDate = new Date();
const currYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Sarah Dap &copy; ${currYear}</small>`

footer.appendChild(copyright);
document.body.appendChild(footer);

/*const date = document.createElement('div');
date.innerHTML = `${currYear}`;
footer.appendChild(date);*/

/*Copyright*/


/*const sup = document.querySelector('sup');
const img = document.createElement('img');
img.src = images/salmonCopyright.png;
sup.appendChild(img);*/

/*Skill Section*/

/*let skills = ["JavaScript", "HTML", "CSS", "Adobe XD", "GitHub"];

let skillsSection = document.getElementById('skills-section');


let skillsList = document.querySelector("#myList");


for (i = 0; i < skills.length; ++i) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}*/

let skills = ["HTML", "CSS", "Javascript", "GitHub", "AdobeXD", "Webflow"];
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);


for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill; 
    skillsList.appendChild(skillItem);
}