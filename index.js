// First Class Plus button
document.getElementById("fClassPlusBtn").addEventListener("click", function () {
    ticketHandler('f-class', true);
})

// First Class Minus Plus button
document.getElementById("fClassMinusBtn").addEventListener("click", function () {
    ticketHandler('f-class', false);
})

// Economy Class Plus button
document.getElementById("eClassPlusBtn").addEventListener("click", function () {
    ticketHandler('e-class', true);
})

// Economy Class Plus button
document.getElementById("eClassMinusBtn").addEventListener("click", function () {
    ticketHandler('e-class', false);
});

// Ticket Handler Part
function ticketHandler(ticket, increase) {
    const InputCount = document.getElementById(ticket + '-input');
    const InputCountNumber = parseInt(InputCount.value);
    let inputNewCount = InputCountNumber;
    if (increase == true) {
        inputNewCount = InputCountNumber + 1;
    }
    else if (increase == false && inputNewCount > 0) {
        inputNewCount = InputCountNumber - 1;
    }
    InputCount.value = inputNewCount;
    calculateTotalTicketPrice()
}

// Calculate Ticket Part
function calculateTotalTicketPrice() {
    const firstClassPriceNum = ticketCount("f-class")
    const economyClassPriceNum = ticketCount("e-class")
    totalPrice = firstClassPriceNum * 150 + economyClassPriceNum * 100; //Sub Total Price 
    document.getElementById("subTotal").innerText = "$" + totalPrice;
    const vat = Math.round(totalPrice * 0.10); //10% charge Vat Count
    document.getElementById("vat").innerText = "$" + vat;
    const grandTotal = totalPrice + vat; //Grand Total Ticket Price With vat
    document.getElementById("grandTotal").innerText = "$" + grandTotal;
}

//Ticket Count-
function ticketCount(className) {
    const classPrice = document.getElementById(className + "-input");
    const classPriceNum = parseInt(classPrice.value);
    return classPriceNum;
}

// Success Message
document.getElementById("bookingBtn").addEventListener("click", function () {
    if (confirm("Do you want to Booking Ticket?") == true) {
        document.getElementById("body-content").style.display = "none";
        document.body.style.backgroundImage = "none";
        document.getElementById("success-message").style.display = "block";

    } else {
        userPreference = "Tour Ticket Booking Canceled! Please try again.";
        document.getElementById("main-content").style.display = "none";
    }
})

//Thank You !