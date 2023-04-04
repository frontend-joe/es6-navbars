const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const resetLinks = () => {
  navLinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = () => {
  const { pageYOffset } = window;

  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;

    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navLinks.forEach((link) => {
        if (link.dataset.scroll === id) {
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);

// $(function () {
//   var link = $("#navbar a.dot");

//   // Move to specific section when click on menu link
//   link.on("click", function (e) {
//     var target = $($(this).attr("href"));
//     $("html, body").animate(
//       {
//         scrollTop: target.offset().top,
//       },
//       600
//     );
//     $(this).addClass("active");
//     e.preventDefault();
//   });

//   // Run the scrNav when scroll
//   $(window).on("scroll", function () {
//     scrNav();
//   });

//   // scrNav function
//   // Change active dot according to the active section in the window
//   function scrNav() {
//     var sTop = $(window).scrollTop();
//     $("section").each(function () {
//       var id = $(this).attr("id"),
//         offset = $(this).offset().top - 1,
//         height = $(this).height();
//       if (sTop >= offset && sTop < offset + height) {
//         link.removeClass("active");
//         $("#navbar")
//           .find('[data-scroll="' + id + '"]')
//           .addClass("active");
//       }
//     });
//   }
//   scrNav();
// });
