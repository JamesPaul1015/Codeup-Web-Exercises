// /*
//  * Complete the TODO items below
//  */
// const users = [
//   {
//     name: 'zach',
//     email: 'zach@codeup.com',
//     languages: ['javascript', 'bash']
//   },
//   {
//     name: 'ryan',
//     email: 'ryan@codeup.com',
//     languages: ['clojure', 'javascript']
//   },
//   {
//     name: 'luis',
//     email: 'luis@codeup.com',
//     languages: ['java', 'scala', 'php']
//   },
//   {
//     name: 'fernando',
//     email: 'fernando@codeup.com',
//     languages: ['java', 'php', 'sql']
//   },
//   {
//     name: 'justin',
//     email: 'justin@codeup.com',
//     languages: ['html', 'css', 'javascript', 'php']
//   }
//
// ];
//
// // TODO: fill in your name and email and add some programming languages you know
// // to the languages array
// // TODO: replace the `var` keyword with `const`, then try to reassign a variable
// // declared as `const`
// const name = 'paul';
// const email = 'jamespaul1015@yahoo.com';
// const languages = ['html', 'css', 'javascript'];
//
// // TODO: rewrite the object literal using object property shorthand
//
//         users.push({;
//         name,
//         email,
//         languages
// });
//
// // TODO: replace `var` with `let` in the following variable declarations
// let emails = [];
// let names = [];
//
// // TODO: rewrite the following using arrow functions
//
//
//
//
//    users.forEach (user => {
//   return emails.push(user.email);
// )}
//
// users.forEach (user => {
//     return names.push(user.email);
// )};
//
//
// // {
// //   return emails.push(user.email);
// // });
// // users.forEach(function(user) {
// //   return names.push(user.name);
// // });
//
// // TODO: replace `var` with `let` in the following declaration
//
// let developers = [];
// users.forEach(function({name, email, languages}) {
//   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//
//     const name = {name: email, languages};
//   console.log(name);
//   console.log(email);
//   console.log(languages);
//   // TODO: rewrite the assignment below to use template strings
//
//
//
//
//
//   developers.push(`${name}'s email is ' ${email} ${name} ' knows ' + ${languages}`);
// });
//
// // TODO: Use `let` for the following variable
//   let list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop
//
//       for (let developer of developers){
//
//
//
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += `<li>` + developer + `</li>`;
// });
// list += `</ul>`;
// document.body.innerHTML =list;


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],

    },



];
const filteredUsers = users.filter((element) => {
    return element.languages.length >= 3;


});
// console.log(filteredUsers);









// let arrayOfEmails = users.map((element) =>{
//     return element.email;
// });
// console.log(arrayOfEmails);
//
//
//
//
//
//
//
//
//
// const userObject = users.reduce((object, user) => {
//     object[user.id] = user;
//     return object;
// }, {});
//
// console.log(userObject);






const wait = timePassed => {
    const promiseThing = new Promise((resolve, reject) => {
        setTimeout(resolve, timePassed);
    });
    return promiseThing;
};

    // console.log(wait); // a pending promise
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));














// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})









