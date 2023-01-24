// console.log('1')


// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// setDataToOtherDatabase = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {          

//             if (randomInteger(0, 1) === 0) {
//                 console.log('data:', data)
//                 resolve('SUCCESS!!!! data insereted in database')
//             }else{
//                 reject("[setDataToOtherDatabase]: Something went wrong")
//             }
//         }, 2000)
//     });
// }

// getDataFromDatabase = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [{ name: "Sarah", lastName: "Conor" },
//             { name: "Jhon", lastName: "Macclane" }]

//             if (randomInteger(0, 1) === 0) {
//                 resolve(data)
//             }else{
//                 reject("[getDataFromDatabase]:Something went wrong")
//             }
//         }, 2000)
//     });
// }

// async function checkSomePromisesWork(){
//     try {    
//         const data = await getDataFromDatabase();
//         console.log(data)
//         const response = await setDataToOtherDatabase(data);
//         console.log(response)

//     } catch (error) {
//         console.log(error)
//     }
// }

// checkSomePromisesWork();



// console.log('2')

// getDataFromDatabase()
//     .then((data) => {
//         setDataToOtherDatabase(data)
//         .then(msg=>{
//             console.log(msg)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     })
//     .catch((err)=>{
//         console.log('ERROR::::',err)
//     })



// getDataFromDatabase().then(data=>{
//     console.log(data)
// })




// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//     })
//     .catch(err => {
//         console.log(err)
//     })


(async()=>{
    try {        
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await response.json();
        console.log('json: ',json)
    } catch (error) {
        
    }
})()