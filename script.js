
AOS.init();
let menuItems = [
    {
      title: "Menu Item 1",
      description: "Description of menu item 1.",
      image: "imgs/MenuItem1.jpg",
    },
    {
      title: "Menu Item 2",
      description: "Description of menu item 2.",
      image: "imgs/MenuItem2.jpg",
    },
    {
      title: "Menu Item 3",
      description: "Description of menu item 3.",
      image: "imgs/MenuItem3.jpg",
    },
  ];
  
  let currentIndex = 0;
  let cardElement = document.getElementById("menu-card");
  
  function updateMenuItem() {
    cardElement.classList.remove("fade-in-out"); // Fade out first
    setTimeout(() => {
      cardElement.querySelector("h3").innerText = menuItems[currentIndex].title;
      cardElement.querySelector("p").innerText = menuItems[currentIndex].description;
      cardElement.querySelector(".menu-card-img").src = menuItems[currentIndex].image;
      cardElement.classList.add("fade-in-out"); // Fade in new content
      currentIndex = (currentIndex + 1) % menuItems.length;
    }, 1000); // Wait for fade-out before updating content
  }
  
  setInterval(updateMenuItem, 4000); // Change item every 4 seconds
  updateMenuItem(); // Initialize with the first menu item
  

  //POPULAR ITEMS
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}