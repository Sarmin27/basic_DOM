console.log('append js');
// //1.where to add
// const placeList = document.getElementById('place_list');
// //2.what to be added
// const addLi= document.createElement('li');
// addLi.innerText='pabna';
// //3.add the child
// placeList.appendChild(addLi);



// section add
// sejonno main er vetore j hetu add korbo so main k ekta id vetore dhore nibo. 
//where to add[main e]
const mainContainer =document.getElementById('main_container');
//2.what to be added
const section =document.createElement('section');
// 3.add the child
mainContainer.appendChild(section);

const h1 =document.createElement('h1');
h1.innerText='My Food List';
// 3.add the child
section.appendChild(h1);

const ul =document.createElement('ul');
// 3.add the child
section.appendChild(ul);

const li1 =document.createElement('li');
li1.innerText='biryani';
// 3.add the child
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText='borhani';
// 3.add the child
ul.appendChild(li2);

const li3 =document.createElement('li');
li3.innerText='kabab';
// 3.add the child
ul.appendChild(li3);


//innerHTML directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My dress section:</h1>
        <ul>
            <li>Sari</li>
            <li>Panjabi</li>
            <li>Shirt</li>
            <li>Pant</li>
           
        </ul>
`
mainContainer.appendChild(sectionDress);














