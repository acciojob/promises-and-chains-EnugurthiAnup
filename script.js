//your JS code here. If required.

let age = document.querySelector('#age');
let name = document.querySelector('#name');
let btn = document.querySelector('#btn');

btn.addEventListener("click", function (event) {


  // validation
  if (age.value.trim() === "" || name.value.trim() === "") {
    alert("Please enter valid details.");
    return;
  }

  // promise
  const votingPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (Number(age.value) > 18) {
        resolve(`Welcome, ${name.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${name.value}. You aren't old enough.`);
      }

    }, 4000);

  });

  votingPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });

});