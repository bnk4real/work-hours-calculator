function calculateEarnings() {
    // Get input value
    const hoursInput = document.getElementById("hours");
    const hoursRates = document.getElementById("rates");
    const hoursRatesValue = parseFloat(hoursRates.value);
    const hoursValue = parseFloat(hoursInput.value);

    // Validate input
    if (isNaN(hoursRatesValue) || hoursRatesValue <= 0) {
        alert("Please enter number for rates.");
        return;
    }
    if (isNaN(hoursValue) || hoursValue <= 0) {
        alert("Please enter number for hours.");
        return;
    }

    // Hourly rate and tax rate
    const hourlyRate = hoursRatesValue;
    const taxRate = 20.1 / 100;

    // Calculate earnings
    const earnings = hoursValue * hourlyRate;
    const netEarnings = earnings * (1 - taxRate);

    // Add hours to the list
    const hoursList = document.getElementById("hoursList");                                                                                                                                                            
    const listItem = document.createElement("li");
    listItem.textContent = "Worked " + hoursValue + " hours - Earnings: $" + netEarnings.toFixed(2);
    hoursList.appendChild(listItem);

    // Update total hours
    const totalHours = document.getElementById("totalHours");
    const currentTotalHours = parseFloat(totalHours.textContent);
    totalHours.textContent = (currentTotalHours + hoursValue).toFixed(2);

    // Update total earnings
    const totalEarnings = document.getElementById("totalEarnings");
    const currentTotalEarnings = parseFloat(totalEarnings.textContent);
    totalEarnings.textContent = (currentTotalEarnings + netEarnings).toFixed(2);

    // Update earnings per hour
    const earningsPerHour = document.getElementById("earningsPerHour");
    const currentEarningsPerHour = parseFloat(earningsPerHour.textContent);
    earningsPerHour.textContent = ((currentEarningsPerHour * currentTotalHours + netEarnings) / (currentTotalHours + hoursValue)).toFixed(2);

    hoursInput.value = "";
    hoursRates.value = "";
}

function refreshPage() {
    location.reload();
}