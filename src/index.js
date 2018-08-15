const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dob = document.getElementById("date_of_birth");

const button = document.querySelector('button')

let content
fetch ('https://randomuser.me/api/')
.then( res => res.json() )
.then( json => content = json)

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  button.addEventListener('click', () => {
    fullname.innerText = content.results[0].name.first + " " + content.results[0].name.last
    email.innerText = content.results[0].email
    street.innerText = content.results[0].location.street
    city.innerText = content.results[0].location.city
    state.innerText = content.results[0].location.state
    postcode.innerText = content.results[0].location.postcode
    phone.innerText = content.results[0].phone
    cell.innerText = content.results[0].cell
    dob.innerText = content.results[0].dob.date.slice(0, 10)
  })
});
