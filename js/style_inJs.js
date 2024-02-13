
const sections = document.querySelectorAll('section');
console.log(sections);
for(const section of sections){
    //console.log(section);
    section.style.border='2px solid steelblue';
    section.style.marginBottom='10px';
    section.style.padding='15px';
    section.style.borderRadius='5px';
    section.style.backgroundColor='lightgray';
}
// const domContainers=document.getElementById('dom_container');
// domContainers.style.backgroundColor='yellow';

//const domContainers=document.getElementById('dom_container');
//domContainers.classList.add('dom');
//domContainers.classList.remove('large-text');




//dom node
 const domContainer=document.getElementById('dom_container');
//const childShow=domContainer.firstChild;//#text
//const childShow=domContainer.childNodes;// NodeList(5) [text, h1, text, ul, text]
//const childShow=domContainer.childNodes[3];//show ul list
//const childShow=domContainer.childNodes[3].childNodes;//NodeList(9) [text, li, text, li, text, li, text, li, text]
//const childShow=domContainer.childNodes[3].childNodes[3];//li
//const childShow=domContainer.childNodes[3].childNodes[3].nextSibling;//#text
const childShow=domContainer.childNodes[3].childNodes[3].previousSibling;//#text
console.log(childShow);
const placesUl=document.querySelector('#dom_container ul')
//console.log(placesUl) //kar vetore ache oita bar kora 
console.log(placesUl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);//#document er pore parent jante chaile null dekhabe.

//create element

const li =document.createElement('li');
li.innerText='Dynamic li';//create li
placesUl.appendChild(li);
const li_2=document.createElement('li');
li_2.innerText='Dynamic another';
placesUl.appendChild(li_2); 











