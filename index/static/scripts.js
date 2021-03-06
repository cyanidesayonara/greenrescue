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
    if (e.target == this) {
      closeModal();
    }
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
  .on("click", ".amount .decrease", function() {
    var amount = parseInt($(this).siblings("span").html());
    if (amount !== 0) {
      $(this).siblings("span").html(amount - 1);
    }
  })
  .on("click", ".amount .increase", function () {
    var amount = parseInt($(this).siblings("span").html());
    $(this).siblings("span").html(amount + 1);
  })
  .on("click", ".cart", function() {
    var button = $(this);
    var amount = button.siblings(".amount").children("span").html().trim();
    console.log(amount)
    button.siblings(".amount").attr("data-amount", amount);
    button.addClass("flash");
    setTimeout(function() {
      button.removeClass("flash");
    }, 1000)
  });

$(window)
  .on("popstate", function (e) {
    var state = e.originalEvent.state;
    if (state) {
      $(".main").html(state.context);
    }
  })