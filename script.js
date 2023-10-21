// JavaScript for create-event.html

document.addEventListener("DOMContentLoaded", function () {
    const budgetTypePerHead = document.getElementById("per-head-budget");
    const budgetTypeOverall = document.getElementById("overall-budget");
    const budgetAmount = document.getElementById("budget-amount");

    budgetTypeOverall.addEventListener("change", function () {
        budgetAmount.disabled = !budgetAmount.disabled;
    });

    const createEventForm = document.querySelector("form");
    createEventForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Here, you can implement the logic to create the event, generate a code, etc.
        // Modify this code based on your specific requirements.
    });
});

// JavaScript for join-event.html

document.addEventListener("DOMContentLoaded", function () {
    const joinEventForm = document.querySelector("form");
    joinEventForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Here, you can implement the logic to join the event, verify the event code, etc.
        // Modify this code based on your specific requirements.
    });
});
