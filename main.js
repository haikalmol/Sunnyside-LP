$(".nav-link-btn").click(function (e) {
  $(".menu-icon").toggleClass("menu-icon-active");
  $(".nav-links-container").toggle("slow");
});

const linksMob = [...$(".nav-link-mob")];
linksMob.forEach((link) => {
  $(link).click(function (e) {
    linksMob.forEach((link) => {
      $(link).removeClass("active-link-mob");
    });
    $(link).addClass("active-link-mob");
  });
});

const links = [...$(".nav-link")];
links.forEach((link) => {
  $(link).click(function (e) {
    links.forEach((link) => {
      $(link).removeClass("active-link");
    });
    $(link).addClass("active-link");
  });
});

console.log($(document).width());
