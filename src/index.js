// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')
const logoContainer = document.getElementsByClassName('logo-container')
const logoHeading = document.getElementById('logoTitle')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.getElementsByClassName('card')[0]
const allCards = document.querySelectorAll('.card')
const allMenuItems = document.querySelectorAll('.menu-item')

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector('h2')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
const nav = document.querySelector('#mainNav')
// A- Find all the anchor tags inside the nav element
const navTags = document.querySelectorAll('nav > a')
// B- Loop over the links and console.log their text content
navTags.forEach(navTag => console.log(navTag.innerText))
// C- Turn the collection of links into a real array
const navTagsArray = Array.from(navTags)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const home = navTagsArray.filter(navTag => navTag.textContent === 'Home')    


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'Lambda Dog'
link2FirstCard.textContent = 'Dog Ipsum'
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = 'LogoHeading'
imageFirstCard.setAttribute = ('src', 'https://picsum.photos/200/300')
//  B- Using .setAttribute to change a few attributes
link2FirstCard.setAttribute = ('href', 'www.google.com')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky')
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em'
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const newLink = document.createElement('a')
newLink.textContent = "I am a new link!!"
newLink.href = "#"
nav.appendChild(newLink)
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
const cardGroup = document.querySelector('.card-group')
cardGroup.appendChild(secondCard)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
