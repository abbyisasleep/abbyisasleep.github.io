const submit = document.querySelectorAll("#submit");
const reset = document.querySelectorAll("#reset");

submit[0].onclick = function() {
    alert('You submitted your answers! Thank you!!');
}
reset[0].onclick = function() {
    alert('Restarting the page!');
}