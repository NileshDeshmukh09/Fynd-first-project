import { fetchWorkshops } from '../services/workshops.js';

let page = 1;

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
    // console.log( workshopsListStr );
    workshopsListEl.innerHTML += workshopsListStr;
}

const fetchAndShowWorkshops =async () => {
    try{
        const workshops = await fetchWorkshops();
        showWorkshops(workshops);
    }
    catch(err){
        const errorMessage = document.getElementById( 'error-message');
        errorMessage.classList.remove('d-none'); 
        errorMessage.textContent = err.message;

    }

    // hide the loading message Now ...
    const loadingMessage = document.getElementById( 'loading-message');
    loadingMessage.classList.add( 'd-none' );
};


// window.addEventListener('load', async function(){
/**
 * DOMContentLoaded fires when the DOM is ready ( happens before load event ),
 * does not wait for all the content of the Page is Load only waiting for DOM load.
 * 
 * Load : will wait for the HTML loading and CSS LoaDing on the webpage  , so 
 * it takes a much time 
 * 
 * DOMContentLoad : it will wait for only HTML loading and , Dom content load does not wait for CSS loading it
 * start fucntioning as the DOM is ready  ( ***** IMP Interview Question ****** [ load vs DOMContentL oad])
*/

window.addEventListener('DOMContentLoaded',  function(){
    // *** IMP ***
    /* 
    This will not be able to select the workshops list items element , becouse
    it does not exist right now
    */
   // document.querySelector( '.workshops-list-item' );

    setupPagination();
    fetchAndShowWorkshops()
        .then(()=> {
            // RUns after the fetchAndShowWorkshops() complete execution
            console.log('first workshop-list item = ', document.querySelector( ".workshops-list-item" ));
        }) ;
});

const setupPagination = () => {

     /* Yay ! DOM is ready! */

    const nextpageBtn = document.getElementById( 'next-page' );
    const previousPageBtn = document.getElementById( 'previous-page' );

    nextpageBtn.addEventListener('click' , function(){
        page = page +1;
        fetchAndShowWorkshops();
    });

    previousPageBtn.addEventListener('click' , function(){
        page = page-1; 
        fetchAndShowWorkshops();
    });
}











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