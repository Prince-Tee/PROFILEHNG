
document.addEventListener("DOMContentLoaded", function () {
    
    function getCurrentDay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        return daysOfWeek[currentDate.getUTCDay()];
    }

    function getCurrentUTCTime() {
        return Date.now();
    }

    document.getElementById("currentDay").textContent = getCurrentDay();
    document.getElementById("currentUTC").textContent = getCurrentUTCTime();
});