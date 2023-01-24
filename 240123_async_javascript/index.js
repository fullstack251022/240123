console.log('1')

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const insertDataToDatabase = (cb, users) => {
    setTimeout(() => {
        console.log(`inserting users to database SUCCESS!!!` + users)
        cb(1);
    }, 4000);
}

const getUsersFromDatabase = (cb) => {
    setTimeout(() => {

        const randomNumber = randomInteger(0, 1);
        if (randomNumber === 0) {
            const users = [{ name: "Beni", age: 34 }, { name: 'Sarah', age: 20 }];
            cb(null, users);
        } else {
            cb('Something went wrong');
        }
    }, 1000)
}


//me called to this function from library 
getUsersFromDatabase((err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
    insertDataToDatabase((isSuccess) => {
        console.log('isSuccess: ', isSuccess)
    }, data)
    console.log("Insert this data to database");
})


console.log('2')


// create a function named "bigFunction" that accepts function as a parameter (callback)
// when the callback function is called pass your name to callback as paramaeter
// log your name from anonymous function (function that you pass as callback function)


// // blabla is callback
// const bigFunction = (blabla) => {
//     blabla('Benjamin')
// }

// bigFunction((x) => {
//     console.log(x)
//  })

