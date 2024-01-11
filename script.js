function login() {
  // Implement login functionality
  // Check credentials and redirect to admin or user page accordingly
  // For simplicity, let's assume username "admin" grants admin access
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.toLowerCase() === "admin" && password === "password") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "user.html";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;

  function scrollToCurrentStep() {
      steps[currentStep].scrollIntoView({ behavior: 'smooth' });
  }

  function handleScroll(event) {
      if (event.deltaY > 0 && currentStep < steps.length - 1) {
          // Scrolling down
          currentStep++;
      } else if (event.deltaY < 0 && currentStep > 0) {
          // Scrolling up
          currentStep--;
      }

      scrollToCurrentStep();
  }

  window.addEventListener('wheel', handleScroll);
  scrollToCurrentStep(); // Scroll to the first step on page load
});
