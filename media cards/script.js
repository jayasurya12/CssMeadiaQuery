let gridContainer=document.createElement('div');
gridContainer.setAttribute('class','grid-container');
document.body.appendChild(gridContainer);

for(let i=1; i<9; i++){
    let section=document.createElement('section');
    section.setAttribute('class','main');
    gridContainer.appendChild(section);

let header=document.createElement('div');
header.setAttribute('class','header');
section.appendChild(header);

let img=document.createElement('img');
img.setAttribute('class','img');
img.setAttribute('src',"https://miro.medium.com/max/11038/1*muKdXfyNBdDDehayIa8dJA.jpeg");
section.appendChild(img);

let bodyContainer=document.createElement('div');
bodyContainer.setAttribute('class','bodyContainer');
bodyContainer.innerText="Product title"
section.appendChild(bodyContainer);

let p=document.createElement('p');
p.setAttribute('class','p');
p.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quos, porro consequatur tempora, ullam reiciendis Lorem ipsum dolor sit amet consectetur'
section.appendChild(p);

let space=document.createElement('div');
space.setAttribute('class','space');
section.appendChild(space);

let span=document.createElement('span');
span.setAttribute('class','price');
span.innerText='$21.000'
section.appendChild(span);

let button=document.createElement('button');
button.setAttribute('class','button');
button.innerText='Add to cart'
section.appendChild(button);
}

console.log(window.innerWidth);