$(document)
  .on("click", ".ajax", function(e) {
    e.preventDefault();
    var url = this.href;
    var dump = $(this).data("dump");
    $.ajax({
      type: "GET",
      url: url,
    })
      .fail(function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
      })
      .done(function(response) {
        $(dump).html(response);
      })
  })
  .on("click", ".buy", function() {
    alert("Ostettu!");
  });