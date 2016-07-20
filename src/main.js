$(document).ready(function() {
  console.log('sanity check'); // sanity check
  $('form').on('submit', function() {
    event.preventDefault();
    console.log('This is working');
    var formFields = $(this).serialize();
    console.log(formFields);
  });
});
