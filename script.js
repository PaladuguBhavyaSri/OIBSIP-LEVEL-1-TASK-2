// Optional JavaScript code

// Smooth scrolling effect for anchor links
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  );
});

// Form submission
$('form').on('submit', function (e) {
  e.preventDefault();
  
  // Code to submit form data
  alert('Form submitted!');
});
