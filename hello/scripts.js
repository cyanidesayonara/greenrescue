$(document)
  .on("click", ".ajax", function(e) {
    e.preventDefault();
    var url = this.href;
    $.ajax({
      type: "GET",
      url: url,
    })
      .fail(function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
      })
      .done(function(response) {
        $(".main").html(response);
      })
  })
  .on("click", ".dropdown-content .option", function(e) {
    e.preventDefault();
    var selected = $(this).clone();
    var active = $(".dropdown>.option").get(0);
    $(".dropdown>.option").replaceWith(selected);
    this.replaceWith(active);
  })
  .on("click", ".buy.target", function() {
    alert("Onneksi olkoon!");
  });