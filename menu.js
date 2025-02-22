document.querySelectorAll('.carousel').forEach(carousel => {
    const container = carousel.querySelector('.carousel-container');
    const grid = carousel.querySelector('.menu-grid');
    const leftButton = carousel.querySelector('.carousel-button.left');
    const rightButton = carousel.querySelector('.carousel-button.right');
    
    const itemsVisible = 4; // 4 items visible at a time
    const totalItems = grid.children.length;
    const maxIndex = totalItems - itemsVisible;
    let currentIndex = 0;
  
    // Function to update the transform based on the actual card width
    function updateCarousel() {
      // Assume all cards have the same width plus gap:
      const itemElement = grid.children[0];
      // Get the full width of a card (including gap).
      // You may need to add the gap manually if not included in offsetWidth.
      const itemWidth = itemElement.offsetWidth + 20; // 20px is the gap
      grid.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  
      // Optionally disable buttons when limits are reached:
      leftButton.classList.toggle('disabled', currentIndex === 0);
      rightButton.classList.toggle('disabled', currentIndex === maxIndex);
    }
  
    leftButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    rightButton.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Initialize the carousel
    updateCarousel();
  
    // Update on window resize in case dimensions change
    window.addEventListener('resize', updateCarousel);
  });
  