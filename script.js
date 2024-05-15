// Select all filter buttons and filtarebale cards

const filterButtons = document.querySelectorAll(".filter-button button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

// Define the filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    // Iterate over each filterable card
    filterableCards.forEach(card =>{
        // Add "hide" class to hide the card initially
        card.classList.add("hide");
        // check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.targt.dataset.name || e.targt.dataset.name === "all"){
            card.classList.remove("hide")
        }

    })


};

// Add click event listener to each filter button

filterButtons.forEach(button => button.addEventListener("click",filterCards));