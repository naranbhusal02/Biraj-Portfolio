document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Typing Animation
    const typingElement = document.querySelector(".typing-text")
    const phrases = ["CS Student & Developer", "Web Developer", "Problem Solver", "AI Enthusiast"]
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function typeText() {
      const currentPhrase = phrases[phraseIndex]
  
      if (isDeleting) {
        // Deleting text
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50 // Faster when deleting
      } else {
        // Typing text
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100 // Normal typing speed
      }
  
      // Check if word is complete
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of word
        isDeleting = true
        typingSpeed = 1000 // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing next word
      }
  
      setTimeout(typeText, typingSpeed)
    }
  
    // Start the typing animation
    if (typingElement) {
      setTimeout(typeText, 1000)
    }
    // Animate elements when scrolled into view
    function animateOnScroll() {
      const elements = document.querySelectorAll(".qualification-item, .achievement-card, .skill-level")
      const windowHeight = window.innerHeight
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
  
        if (elementPosition < windowHeight * 0.9) {
          if (element.classList.contains("skill-level")) {
            element.classList.add("animate")
          } else {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          }
        }
      })
    }
  
    // Set initial state for animation
    document.querySelectorAll(".qualification-item, .achievement-card").forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Check elements on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)
  })
  