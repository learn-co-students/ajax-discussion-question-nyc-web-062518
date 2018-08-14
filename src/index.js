const fullname = document.getElementById("fullname");
const email = document.getElementById("email")
const street = document.getElementById("street")
const city = document.getElementById("city")
const state = document.getElementById("state")
const postcode = document.getElementById("postcode")
const phone = document.getElementById("phone")
const cell = document.getElementById("cell")
const dob = document.getElementById("date_of_birth")

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
const button = document.querySelector(".btn-primary")


function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then(renderData)
}


function renderData(data) {
  let info = data.results[0]
  console.log(info);
  fullname.innerText = `${info.name.title} ${info.name.first} ${info.name.last}`
  email.innerText = info.email
  street.innerText = info.location.street
  city.innerText = info.location.city
  state.innerText = info.location.state
  postcode.innerText = info.location.postcode
  phone.innerText = info.phone
  cell.innerText = info.cell
  dob.innerText = info.dob.date
}


button.addEventListener("click", fetchData)

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});
