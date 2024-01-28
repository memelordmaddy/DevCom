function showHome() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("hobbiesSection").style.display = "none";
    document.getElementById("contactSection").style.display = "none";
}

function showHobbies() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("hobbiesSection").style.display = "block";
    document.getElementById("contactSection").style.display = "none";
}

function showContact() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("hobbiesSection").style.display = "none";
    document.getElementById("contactSection").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    var dontClickLink = document.getElementById("dontClickLink");

    dontClickLink.addEventListener("click", function(event) {
        this.textContent = "I told you so"; 
    });
});
function quiz() {
    document.getElementById("quizSection").style.display = "block"; 
   document.getElementById("quizForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var answer = document.getElementById("answerInput").value.trim().toLowerCase();

        // Check if the answer is correct
        if (answer === "curling") {
            document.getElementById("quizResult").textContent = "Correct!";
        } else {
            document.getElementById("quizResult").textContent = "Ans was curling";
        }
    });
}