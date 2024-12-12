$(document).ready(function() {
  // Client Logos Carousel
  $('#owl-carousel-client').owlCarousel({
    loop: true,               // Infinite loop
    margin: 10,              // Space between items
    nav: true,               // Show navigation buttons
    autoplay: true,           // Auto-slide
    autoplayTimeout: 3000,    // Time between auto-slide (3 seconds)
    responsive: {
      0: {
        items: 2             // 2 items on extra small screens
      },
      768: {
        items: 4             // 4 items on medium screens
      },
      1000: {
        items: 6             // 6 items on large screens
      }
    }
  });
});


  // Testimonials Carousel
  $('#owl-carousel-testimonials').owlCarousel({
    loop: true,             // Infinite loop
    margin: 10,             // Space between items
    nav: true,              // Show navigation buttons
           // Show dots (pagination)
    autoplay: true,         // Auto-slide
    autoplayTimeout: 5000,  // Time between auto-slide (5 seconds)
    // Pause on hover
    responsive: {
      0: {
        items: 1            // 1 item on small screens
      },
      768: {
        items: 2            // 2 items on medium screens
      },
      1000: {
        items: 3            // 3 items on large screens
      }
    }
  });


// portfolio

 // Wait for the DOM to load before adding event listeners
 document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.navbar-nav .nav-item');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Function to show or hide items based on the filter
  function filterGallery(category) {
      portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (category === 'all' || category === itemCategory) {
              item.style.display = 'block'; // Show item
          } else {
              item.style.display = 'none'; // Hide item
          }
      });
  }

  // Event listeners for filter buttons
  filterItems.forEach(filter => {
      filter.addEventListener('click', function() {
          const category = filter.getAttribute('data-filter');
          filterGallery(category);
      });
  });
});