let name = document.querySelector("#name");
let lastname = document.querySelector("#lastname");
let age = document.querySelector("#age");
let mob = document.querySelector("#mob");
let addData = document.querySelector("#form-submit");
let tableBody = document.querySelector("table tbody");
let form = document.querySelector("#form");

let submitData = false;
let $tr;
function checkEdit() {
  submitData = false;
}
addData.addEventListener("submit", function (e) {
  if (!submitData) {
    tableBody.innerHTML +=
      "<tr><td> " +
      name.value + " " +
      lastname.value +
      "  </td><td>" +
      mob.value +
      "</td><td>" +
      age.value;
  } else {
    $tr.querySelectorAll("td")[0].innerText = name.value;
    $tr.querySelectorAll("td")[1].innerText = lastname.value;
    $tr.querySelectorAll("td")[2].innerText = age.value;
    $tr.querySelectorAll("td")[3].innerText = mob.value;
  }
  event.preventDefault();
});