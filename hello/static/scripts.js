function openModal() {
  $(".modal").fadeIn();
}
function closeModal() {
  $(".modal").fadeOut();
}

$(document)
  .on("click", ".ajax", function(e) {
    e.preventDefault();
    var url = $(this).data("url");
    var dump = $(this).data("dump");
    if (dump == ".modal") {
      openModal();
    }
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