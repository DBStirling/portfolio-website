function scrollToSection() {
    const section = document.getElementById('scrollToSection');
    const sectionPosition = section.offsetTop; // Get the top position of the section
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }
  
  // Add event listener to the scroll button
  document.getElementById('scroll-button').addEventListener('click', scrollToSection);