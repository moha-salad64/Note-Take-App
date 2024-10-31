//get all the elements that you want to manipulate

const notecontainer = document.querySelector('.container');
const createNote = document.querySelector('.createnote');
let notes = document.querySelectorAll('.input-box');

function showNote(){
    notecontainer.innerHTML = localStorage.getItem('notes');
}
showNote();
    


//store the note in the local storage 
function saveNote(){
    localStorage.setItem('notes', notecontainer.innerHTML);
   
}

// event listener for create note button
createNote.addEventListener("click", (event) =>{
    event.preventDefault();
    //create paragraph element and 
    let inputBox = document.createElement('p');
    //create img element
    let img = document.createElement('img');
    //set the paragraph element class name
    inputBox.className = 'input-box';
     //set the paragraph attributes
     inputBox.setAttribute('contenteditable', 'true');
    //set the image source
    img.src = 'image/delete.png';
    //set appendchildren attribute
    notecontainer.appendChild(inputBox).appendChild(img);
})


//delete the paragraph element event 
notecontainer.addEventListener("click", (e) =>{
    // removeNote(e);
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove(); //removing the note element
        // e.target.parentElement.style.display = "none"; // other way to remove the note element

        // save the note in the local storage
        saveNote();
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function() {
                saveNote();
            }
        })
    }
});

// function removeNote(e){
//     if(e.target.tagName === "IMG"){
//         e.target.parentElement.remove(); //removing the note element
//         // e.target.parentElement.style.display = "none"; // other way to remove the note element
//         // save the note in the local storage
//         saveNote();
//     }

//     else if(e.target.tagName === "P"){
//         note = document.querySelectorAll('input-box');
//         note.forEach(nt =>{
//             nt.onkeyup = function() {
//                 saveNote();
//             }

//         })
//     }
    
// }