$(document).ready(function() {
    // $("#detailsForm").hide();

    var getFirstName = $('input[name=firstname]').val();
    var getLastName = $('input[name=lastname]').val();

    // this.showhide();
    $("#nameButton").click(function() {
      $("#detailsEntry").show();
      $("#detailsForm").hide();
      $("#nameButtom").hide();
    });
    // this.showhide();
    // function showhide(){
    //   $("#nameForm").ready(function() {
    //     $("#acceptInvitation").hide();
    //   $("#decideInvitation").hide();
    //   $("#nameButtom").hide();
    //   })
    // };

    // $("#accept").click(function () {
    //     $("#acceptNote").show();
    //     $("#acceptnote").show();
    //     $("#decideInvitation").show();
    //     $("#declineInvitation").toggle();
    // });
    
    // $("#decline").click(function () {
    //     $("#acceptInvitation").toggle();
    //     $("#couplenote").show();
    //     $("#wisdomeParagraph").show();
    //     $("#wisdomnote").show();
    //     $("#decideInvitation").show();
    // });
    let rsvpInfo = {
      "phoneNumber": "8675309",
      "firstName": "value",
      "lastName": "value",
      "accept": "value",
      "decline": "value",
      "coupleNote": "value",
      "wisdomNote": "value",
      "lastName": "value"
  }
  $.ajax({
    type: 'put',
    url: 'https://l6a4uu9pxh.execute-api.us-east-2.amazonaws.com/v1/store-info',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(rsvpInfo),
    })
    .done(function (results) {
      console.log(results);
    })
  });
  