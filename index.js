// JavaScript to store debit card details
const person = {
    Name : "CARDHOLDER NAME",
    address : "house no. L 920 sector 48-E korangi 2 karachi",
    DateOfBirth : "5-5-2003",
    MobileNumber : 923056789012,
    EmailAddress : "ruba@gmail.com",
    CNIC : 42201123456789,
    bankName :"BANK NAME",
    number: "1234  5678  9012  3456",
    expiry: "01/25",
    cvv: "1234"
}

let  {bankName, expiry, number, Name, cvv } = person ;

document.getElementById("bn").innerHTML = bankName;
document.getElementById("numb").innerHTML = number;
document.getElementById("cv").innerHTML = cvv;
document.getElementById("exp").innerHTML += expiry;
document.getElementById("name").innerHTML = Name;



// Add event listener on page load
document.addEventListener("DOMContentLoaded", () => {
    const debitCard = document.getElementById('debitCard');
    
    // Display card details in the console when card is clicked
    debitCard.addEventListener('click', showCardDetails);
})