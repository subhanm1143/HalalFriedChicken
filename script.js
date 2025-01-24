
AOS.init();
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
let menuItems = [
    { title: "Menu Item 1", description: "Description of menu item 1." },
    { title: "Menu Item 2", description: "Description of menu item 2." },
    { title: "Menu Item 3", description: "Description of menu item 3." }
];

let currentIndex = 0;
let cardElement = document.getElementById("menu-card");

function updateMenuItem() {
    cardElement.classList.remove("fade-in-out"); // Fade out first
    setTimeout(() => {
        cardElement.querySelector("h3").innerText = menuItems[currentIndex].title;
        cardElement.querySelector("p").innerText = menuItems[currentIndex].description;
        cardElement.classList.add("fade-in-out"); // Fade in new content
        currentIndex = (currentIndex + 1) % menuItems.length;
    }, 1000); // Wait for fade-out before updating content
}

setInterval(updateMenuItem, 4000); // Change item every 4 seconds
updateMenuItem(); // Initialize with the first menu item