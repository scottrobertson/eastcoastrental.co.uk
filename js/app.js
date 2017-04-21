$(document).ready(function() {
  $('#contact').submit(function(event) {
    var form = $(this);

    var data = {
      message: $('#contact_message').val(),
      email: $('#contact_from').val(),
      next: 'https://eastcoastrental.co.uk',
      subject: $('#contact_subject').val(),
      cc: 'scott@eastcoastrental.co.uk',
      licence_country : $('#contact_licence_country').val(),
      age : $('#contact_age').val(),
    }

    var contact_response = $('#contact_response');

    contact_response.removeClass('success').removeClass('error').hide().text('');

    $.ajax({
        url: "https://formspree.io/contact@eastcoastrental.co.uk",
        method: "POST",
        data: data,
        dataType: "json"
    }).success(function(response) {
      contact_response.text('Email has been sent. We will be in contact with you soon.').addClass('success').slideDown();
      form.slideUp();
    }).error(function(response){
      contact_response.text(response.responseJSON.error).addClass('error').slideDown();
    });

    event.preventDefault();
  });
});
