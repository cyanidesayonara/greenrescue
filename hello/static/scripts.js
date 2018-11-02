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
  .on("click", ".dropdown-content .option", function(e) {
    e.preventDefault();
    var selected = $(this).clone();
    var active = $(".dropdown>.option").get(0);
    $(".dropdown>.option").replaceWith(selected);
    this.replaceWith(active);
    $(this).parents(".dropdown").blur();
  })
  .on("click", ".buy", function() {
    alert("Ostettu!");
  });