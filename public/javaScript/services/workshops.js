





















// import Config from '../config.js';

// const fetchWorkshops = async ( page ) => {
//     const response = await fetch( `${Config.baseUrl}/workshops?` + new URLSearchParams({
//         _page: page
//     }));
    
//     // take care of cases when backend returns an error - we need to throw the error from this function ourselves
//     if( !response.ok ) {
//         const responseText = await response.text(); // get the text error message from the backend
//         throw new Error( responseText || 'Some error occured' );
//     }

//     const workshops = await response.json();
//     console.log(response);
//     return workshops;
// };

// const addWorkshop = async ( workshop ) => {
//     const response = await fetch( `${Config.baseUrl}/workshops`, {
//         method: 'post',
//         body: JSON.stringify( workshop ),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if( !response.ok ) {
//         const responseText = await response.text(); // get the text error message from the backend
//         throw new Error( responseText || 'Some error occured' );
//     }

//     return response.json();
// };

// export {
//     fetchWorkshops,
//     addWorkshop
// }