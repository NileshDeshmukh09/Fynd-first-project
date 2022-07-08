console.log("HII , this is workshops list");

const fetchWorkshops = async ()=> {
    const response = await fetch(`https://workshops-server.herokuapp.com/workshop`);

        /* 
            Take care of cases when BACKEND Returns - we need to throw the error from this function ourselves 
        */
        if( !response.ok ){ 
            const responseText = await response.text(); //  get the text error message from the backend
            throw new Error( responseText || "Some Error Occured ");
        }
    const workshops = await response.json();
    return workshops;
}

const showWorkshops = async ( workshops ) => {
    const workshopsListEl = document.querySelector('.workshops-list');

    let workshopsListStr ='';

    workshops.forEach(      
        workshop => {
            const {
                name,
                imageUrl,
                startDate,
                endDate,
                time,
                description,
                id,
            } = workshop;
            const workshopStr = `
            <a class="workshops-list-item link-plain" href="/workshop-details.html">
                <img src="${imageUrl}" alt="${name}" class="img-responsive img-workshop" />
                <div class="workshop-title mt-3 mb-3">
                    ${name}
                </div>
                <div class="workshop-date mt-2 mb-2">
                    ${startDate} - ${endDate}
                </div>
                <div class="workshop-time mt-2 mb-2">
                    ${time}
                </div>
            </a>
            `;

        workshopsListStr += workshopStr;
        
    }
    )
    console.log( workshopsListStr );
    workshopsListEl.innerHTML += workshopsListStr;
}

window.addEventListener('load', async function(){
    try{

        const workshops = await fetchWorkshops();
        showWorkshops(workshops);

    }catch(err){

        const errorMessage = document.getElementById( 'error-message');
        errorMessage.classList.remove('d-none'); 
        errorMessage.textContent = err.message;

    }


    // hide the loading message Now ...
    const loadingMessage = document.getElementById( 'loading-message');
    loadingMessage.classList.add( 'd-none' );

    
})












/* ------------------ Main Code ------------ */

// import { fetchWorkshops } from '../services/workshops.js';

// let page = 1;

// const showWorkshops = ( workshops ) => {
//     const workshopsListEl = document.querySelector( '.workshops-list' );

//     let workshopsListStr = '';

//     workshops.forEach(
//         workshop => {
//             const {
//                 imageUrl,
//                 name,
//                 startDate,
//                 endDate,
//                 time,
//                 description,
//                 id
//             } = workshop;

//             const workshopStr = `
//                 <a class="workshops-list-item link-plain" href="/workshop-details.html">
//                     <img src="${imageUrl}" alt="${name}" class="img-responsive img-workshop" />
//                     <div class="workshop-title mt-3 mb-3">
//                         ${name}
//                     </div>
//                     <div class="workshop-date mt-2 mb-2">
//                         ${startDate} - ${endDate}
//                     </div>
//                     <div class="workshop-time mt-2 mb-2">
//                         ${time}
//                     </div>
//                 </a>
//             `;

//             workshopsListStr += workshopStr;
//         }
//     );

//     workshopsListEl.innerHTML = workshopsListStr;
// };

// const fetchAndShowWorkshops = async () => {
//     try {
//         const workshops = await fetchWorkshops( page );
//         showWorkshops( workshops );
//     } catch( error ) {
//         const errorMessage = document.getElementById( 'error-message' );
//         errorMessage.classList.remove( 'd-none' );
//         errorMessage.textContent = error.message;
//     }

//     // hide the loading message now...
//     const loadingMessage = document.getElementById( 'loading-message' );
//     loadingMessage.classList.add( 'd-none' );
// };

// const setupPagination = () => {
//     const nextPageBtn = document.getElementById( 'next-page' );
//     const previousPageBtn = document.getElementById( 'previous-page' );

//     nextPageBtn.addEventListener( 'click', function() {
//         page = page + 1;
//         fetchAndShowWorkshops();
//     });
    
//     previousPageBtn.addEventListener( 'click', function() {
//         page = page - 1;
//         fetchAndShowWorkshops();
//     });
// };

// // window.addEventListener( 'load', async function() {
// // DOMContentLoaded fires when the DOM is ready (happens before load event)
// document.addEventListener( 'DOMContentLoaded', function() {
//     // IMPORTANT: This will not be able to select the workshops list item element, because it does not exist right now
//     // document.querySelector( '.workshops-list-item' );

//     setupPagination();
//     fetchAndShowWorkshops()
//         .then(() => { // runs after the fetchAndShowWorkshops() completes execution
//             console.log( 'first workshop list item = ', document.querySelector( '.workshops-list-item' ) );
//         });
// });