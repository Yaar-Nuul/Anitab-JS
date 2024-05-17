const documentElement = document.documentElement;
console.log(documentElement);

console.log(`body`, document.body);
console.log(`head`, document.head);

const container = document.getElementById(`container`);
console.log(`parent`, container.parentElement);
console.log(`previousSibling`, container.previousElementSibling);
console.log(`nextSibling`, container.nextElementSibling);
console.log(`children`, container.children);
console.log(`firstChild`, container.firstElementChild);
console.log(`lastChild`, container.lastElementChild);

// Updating DOM
const heading = document.getElementById('container-heading');
heading.innerHTML = "Introduction to DOM Manipulation";
heading.style.color = 'red'

// Create DOM
const newChild = document.createElement(`p`);
container.appendChild(newChild);
newChild.innerHTML = 'I am the new child';
newChild.setAttribute(`class`, `container-new-text`);

// Delete DOM
const lastChild = document.getElementById(`container-text`);
lastChild.remove();

const button = document.getElementById(`button`);
button.style.border = `none`;
button.style.padding = `10px 15px`;
button.style.borderRadius = `5px`;
button.style.backgroundColor = `#0039a6`
button.style.color = `#ffffff`;

button.addEventListener(`Click`, function(){
    button.innerHTML = `Clicked!`;
    button.style.backgroundColor = '#00FF00';
})
