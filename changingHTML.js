// let mydiv = document.querySelector('#mydiv');         //select tag or element

// let newElement = document.createElement('span');      //create tag or element
// newElement.textContent = " This is me Jatin ";        //enter content in new element

// mydiv.insertAdjacentElement('afterend', newElement);  //insert at manual positions


let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);


// let parent = child.parentElement;