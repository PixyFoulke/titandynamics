function startAnimation() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    const img5 = document.getElementById("img5");
    const input = document.getElementById("username");
    const button = document.querySelector(".authenticate-btn");
  
    // Move images off-frame
    img1.style.transform = "translate(400%, 0%)";
    img2.style.transform = "translate(0%, 300%)";
    img3.style.transform = "translate(-400%, 0%)";
    img4.style.transform = "translate(0%, 300%)";
    
    // Move the input box and button off-frame
    input.style.transform = "translate(0%, 300%)"; // Move input down
    button.style.transform = "translate(0%, 300%)"; // Move button down
    
    // Zoom in and fade out the final image
    img5.style.transform = "scale(3)";
    img5.style.opacity = "0";
  
    // Add transition duration for all images and form elements
    const elements = [img1, img2, img3, img4, img5, input, button];
    elements.forEach(el => {
      el.style.transition = "transform 2s ease, opacity 2s ease"; // Adjust duration to match your needs
    });
  }
  