window.addEventListener("offline", () => {
    const statusDisplay = document.querySelector(".alert");
    statusDisplay.style.display = "block";
  });
  
  window.addEventListener("online", () => {
    const statusDisplay = document.querySelector(".alert");
    statusDisplay.style.display = "none";
  });

  $('.close').on('click', (e) => {
    // console.log(e.target);
    const statusDisplay = document.querySelector(".alert");
    statusDisplay.style.display = "none";
  })