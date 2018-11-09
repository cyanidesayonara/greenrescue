function openModal() {
  $("#modal").fadeIn();
};
function closeModal() {
  $("#modal").fadeOut();
};
function pushState(url) {
  var main = $(".main");
  var context = main[0].innerHTML;
  var state = {
    "context": context,
    "url": url,
  };
  history.pushState(state, "", "");
};
function replaceState(url) {
  var main = $(".main");
  var context = main[0].innerHTML;
  var state = {
    "context": context,
    "url": url,
  };
  history.replaceState(state, "", "");
};

$(document)
  .ready(function() {
    replaceState(window.location.href);
  })
  .on("click", "#modal", function(e) {
    if (e.target != this) {
      return false;
    }
    closeModal();
  })
  .on("click", ".ajax", function(e) {
    e.preventDefault();
    var url = $(this).data("url");
    var dump = $(this).data("dump");
    if (dump == "#modal") {
      openModal();
    }
    pushState(url);
    $.ajax({
      type: "GET",
      url: url,
    })
      .fail(function(xhr, ajaxOptions, thrownError) {
        console.log(thrownError);
      })
      .done(function(response) {
        $(dump).html(response);
        replaceState(url);
      });
  })
  .on("click", ".buy", function() {
    alert("Ostettu!");
  })
  .on("click", ".amount .decrease", function() {
    var amount = parseInt($(this).siblings("span").html());
    if (amount !== 0) {
      $(this).siblings("span").html(amount - 1);
    }
  })
  .on("click", ".amount .increase", function () {
    var amount = parseInt($(this).siblings("span").html());
    $(this).siblings("span").html(amount + 1);
  });

$(window)
  .on("popstate", function (e) {
    var state = e.originalEvent.state;
    if (state) {
      $(".main").html(state.context);
    }
  })