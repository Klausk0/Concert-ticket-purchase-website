document.addEventListener("DOMContentLoaded", function() {
    const concerts = [
        {
            name: "The Rolling Stones",
            date: "2024-11-01",
            image: "roll.png"
        },
        {
            name: "Taylor Swift",
            date: "2024-12-15",
            image: "tay.png"
        },
        {
            name: "Boywithuke",
            date: "2025-01-20",
            image: "boy.png"
        },
        {
            name: "Ed Sheeran",
            date: "2025-02-10",
            image: "ed.png"
        },
        {
            name: "Ariana Grande",
            date: "2025-03-05",
            image: "ari.png"
        }
    ];

    const carousel = document.getElementById("carousel");
    const concertList = document.getElementById("concert-list");
    const ticketPurchaseSection = document.getElementById("ticket-purchase");
    const concertDetails = document.getElementById("concert-details");
    const purchaseButton = document.getElementById("purchase-button");
    const ticketQuantity = document.getElementById("ticket-quantity");
    const closeButton = document.querySelector(".close-button");

    let currentFeaturedIndex = 0;

    function updateFeaturedConcerts() {
        carousel.innerHTML = '';
        const featuredConcerts = concerts.slice(currentFeaturedIndex, currentFeaturedIndex + 3);
        featuredConcerts.forEach(concert => {
            const div = document.createElement("div");
            div.className = "carousel-item";
            div.innerHTML = `<img src="${concert.image}" alt="${concert.name}"><p>${concert.name} - ${concert.date}</p>`;
            carousel.appendChild(div);
        });
        currentFeaturedIndex = (currentFeaturedIndex + 1) % concerts.length;
    }

    setInterval(updateFeaturedConcerts, 5000);
    updateFeaturedConcerts();

    concerts.forEach(concert => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${concert.image}" alt="${concert.name}"><p>${concert.name} - ${concert.date}</p>`;
        div.addEventListener("click", function() {
            ticketPurchaseSection.style.display = "flex";
            concertDetails.textContent = `Concert: ${concert.name}\nDate: ${concert.date}`;
            purchaseButton.setAttribute("data-concert-name", concert.name);
        });
        concertList.appendChild(div);
    });

    closeButton.addEventListener("click", function() {
        ticketPurchaseSection.style.display = "none";
    });

    purchaseButton.addEventListener("click", function() {
        const quantity = ticketQuantity.value;
        const concertName = purchaseButton.getAttribute("data-concert-name");
        alert(`Successfully purchased ${quantity} tickets for ${concertName}!`);
        ticketPurchaseSection.style.display = "none";
    });
});
