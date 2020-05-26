$(function() {
    $('#commentform').submit(handleSubmit);
  });
  

  function handleSubmit() {
    var form = $(this);
    var data = {
      "name": form.find('#name').val(),
      "email": form.find('#email').val(),
      "comment": form.find('#comment').val(),
      "comment_post_ID": form.find('#comment_post_ID').val()
    };
  
    postComment(data);
  
    return false;
  }
  
  function postComment(data) {
    // send the data to the server
  }