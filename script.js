document.getElementById("animateBtn").addEventListener("click", () => {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    const img4 = document.getElementById("img4");
    const img5 = document.getElementById("img5");
  
    // Move images off-frame
    img1.style.transform = "translate(400%, 0%)";
    img2.style.transform = "translate(0%, 300%)";
    img3.style.transform = "translate(-400%, 0%)";
    img4.style.transform = "translate(0%, 300%)";
  
    // Zoom in and fade out the final image
    img5.style.transform = "scale(3)";
    img5.style.opacity = "0";
  });
  