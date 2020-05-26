$(function () {
    $(
        "#tributeForm input,#tributeForm textarea,#tributeForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "/assets/mail/post_comment.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message,
                },
                cache: false,
                success: postSuccess,
                error: postError,
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
            function postSuccess(data, textStatus, jqXHR) {
                // Success message
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-success").append(
                    "<strong>Your message has been sent. </strong>"
                );
                $("#success > .alert-success").append("</div>");
                //clear all fields
                $("#tributeForm").get(0).reset();
                displayComment(data)
            };
            function displayComment(data) {
                var commentHtml = createComment(data);
                var commentEl = $(commentHtml);
                commentEl.hide();
                var postsList = $('#posts-list');
                postsList.addClass('has-comments');
                postsList.prepend(commentEl);
                commentEl.slideDown();
            }
              
            function postError(jgXHR, textStatus, errorThrown) {
                // Fail message
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-danger").append(
                    $("<strong>").text(
                        "Sorry " +
                            firstName +
                            ", it seems that my mail server is not responding. Please try again later!"
                    )
                );
                $("#success > .alert-danger").append("</div>");
                //clear all fields
                $("#tributeForm").trigger("reset");
            }

            function createComment(data) {
                var html = ’ +
                '<li><article id="' + data.id + '" class="hentry">' +
                  '<footer class="post-info">' +
                    '<abbr class="published" title="' + data.date + '">' +
                      parseDisplayDate(data.date) +
                    '</abbr>' +
                    '<address class="vcard author">' +
                      'By <a class="url fn" href="#">' + data.name + '</a>' +
                    '</address>' +
                  '</footer>' +
                  '<div class="entry-content">' +
                    '<p>' + data.comment + '</p>' +
                  '</div>' +
                '</article></li>';
              
                return html;
              }
              
              function parseDisplayDate(date) {
                date = (date instanceof Date? date : new Date( Date.parse(date) ) );
                var display = date.getDate() + ' ' +
                              ['January', 'February', 'March',
                               'April', 'May', 'June', 'July',
                               'August', 'September', 'October',
                               'November', 'December'][date.getMonth()] + ' ' +
                              date.getFullYear();
                return display;
              }
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
