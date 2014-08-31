$(document).ready(function() {
  $('#contact').submit(function(event) {
    var form = $(this);
    var data = {
      name : $('#contact_name').val(),
      from : $('#contact_from').val(),
      subject : $('#contact_subject').val(),
      age : $('#contact_age').val(),
      licence_country : $('#contact_licence_country').val(),
      message : $('#contact_message').val(),
    }

    var contact_response = $('#contact_response');

    contact_response.removeClass('success').removeClass('error').hide().text('');

    $.ajax({
      url: form.prop('action'),
      data: data,
      method: 'POST'
    }).success(function(response) {
      contact_response.text('Email has been sent. We will be in contact with you soon.').addClass('success').slideDown();
      form.slideUp();
    }).error(function(response){
      contact_response.text(response.responseJSON.error).addClass('error').slideDown();
    });

    event.preventDefault();
  });
});
