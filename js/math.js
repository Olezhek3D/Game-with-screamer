        window.onload = function () {
    // Check if the user has already entered the correct number
    if (!localStorage.getItem("screamerAlertShown")) {
      // Show the warning alert
      window.alert("WARNING!! THE SITE CONTAINS A SCREAMER!!");
  
      // Prompt the user to solve the math problem
      const userInput = window.prompt("Solve the problem: log2(x + 1) + log2(x - 1) = 3 Enter the value of x:");
  
      // Convert the input to a number
      const x = Number(userInput);
  
      // Check if the user entered the correct answer (x = 3)
      if (x === 3) {
        localStorage.setItem("screamerAlertShown", "true"); // Save their status
        window.alert("Correct! Enjoy the game!");
      } else {
        window.alert("Incorrect answer! You need to learn math. The site will now close.");
        window.close();
        setTimeout(function(){document.style.display = "none"})
      }
    }
  };
  
