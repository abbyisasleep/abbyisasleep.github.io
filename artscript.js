const submit = document.querySelectorAll("#submit");
const reset = document.querySelectorAll("#reset");
const feedback = document.querySelector("#feedback");
const updateFeedback = document.querySelector("#updateFeedback");

feedback.oninput = function() {
    if(feedback.value === ""){
        updateFeedback.innerHTML = feedback.value;
    } else {
        updateFeedback.innerHTML = "Thanks for giving feedback!";
    }
}
submit[0].onclick = function() {
    alert('You submitted your feedback! Thank you!!');
}
reset[0].onclick = function() {
    alert('Restarting the page!');
}

if (userWantsToRestart === true) {
    // Reloads the current page
    window.location.reload(); 
}