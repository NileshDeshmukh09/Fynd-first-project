import { addWorkshop } from '../services/workshops.js';

const nameEl = document.getElementById( 'name' );
const description = document.getElementById( 'description' );
const startDate = document.getElementById( 'startDate' );
const endDate = document.getElementById( 'endDate' );
const time = document.getElementById( 'time' );
const imageUrl = document.getElementById( 'imageUrl' );

function validate(){
     return nameEl.value.trim() !== '' &&
     description.value.trim() !== '' &&
     startDate.value.trim() !== '' &&
     endDate.value.trim() !== '' &&
     imageUrl.value.trim() !== '' &&
     time.value.trim() !== '' ;
}

// async function addWorkshop( workshop ){
//     console.log("ADDWorkshop");


//     const response = await fetch(`https://workshops-server.herokuapp.com/workshops`, {
//             method : 'post',
//             body : JSON.stringify( workshop ) ,
//             headers : {
//                 'Content-Type' : 'application/json' // MIME type for JSON Format
//             }
        
//         });

//         if( !response.ok ){
//             // Get the text errror message frim the Backend
//             const responseText = await response.text();
//             throw new Error( responseText || "Some errror occured");
//         }

//         return response.json();
// }

async function onSubmitWorkshop( event ){
    event.preventDefault();
    console.log("OnSubmit");


    const data ={
        name : nameEl.value.trim(),
        description : description.value.trim(),
        startDate : startDate.value.trim(),
        endDate : endDate.value.trim(),
        time : time.value.trim(),
        imageUrl : imageUrl.value.trim(),
    }

    /* Do Proper Validation */
   if( validate() ){

        try{  
        
            const addedWorkshop = await addWorkshop( data );
            alert( `Added new Workshop with ID ${addedWorkshop.id} !` );

        }catch( error ){
            alert("error occured  in Fetching !");
        }
   }else{
    alert("Something u missed  !");
   }


}

function onLoad(){
    const form = document.getElementById( 'add-workshop-form' );
    form.addEventListener('submit', onSubmitWorkshop)
    console.log("OnLoad");

}

document.addEventListener( 'DOMContentLoaded', onLoad );

























// import { addWorkshop } from '../services/workshops.js';

// const nameEl = document.getElementById( 'name' );
// const description = document.getElementById( 'description' );
// const startDate = document.getElementById( 'startDate' );
// const endDate = document.getElementById( 'endDate' );
// const time = document.getElementById( 'time' );
// const imageUrl = document.getElementById( 'imageUrl' );

// function validate() {
//     return nameEl.value.trim() !== '' &&
//     description.value.trim() !== '' &&
//     startDate.value.trim() !== '' &&
//     endDate.value.trim() !== '' &&
//     time.value.trim() !== '' &&
//     imageUrl.value.trim() !== '';
// }

// async function onSubmitWorkshop( event ) {
//     event.preventDefault();

//     const data = {
//         name: nameEl.value.trim(),
//         description: description.value.trim(),
//         startDate: startDate.value.trim(),
//         endDate: endDate.value.trim(),
//         time: time.value.trim(),
//         imageUrl: imageUrl.value.trim()
//     };

//     // do proper validation
//     // here we are not doing it!
//     if( validate() ) {
//         try {
//             const addedWorkshop = await addWorkshop( data );

//             alert( `Added new workshop with id ${addedWorkshop.id}` );
//         } catch( error ) {
//             alert( error.message );
//         }
//     } else {
//         alert( 'Something is wrong' );
//     }
// }

// function onLoad() {
//     const form = document.getElementById( 'add-workshop-form' );

//     form.addEventListener( 'submit', onSubmitWorkshop );
// }

// document.addEventListener( 'DOMContentLoaded', onLoad );