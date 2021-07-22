const body = document.querySelector("body");
const header = document.querySelector(".header");
const ham = document.querySelector("#hamburger");
const overlay = document.querySelector(".overlay");
const fade_visible = document.querySelectorAll(".has-fade");

// The Hamburger Menu for header for small screen sizes
ham.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    body.classList.remove("scroll-lock");
    // Close Hamburger Menu
    header.classList.remove("open");
    fade_visible.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("scroll-lock");
    // Open Hamburger Menu
    header.classList.add("open");
    fade_visible.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Fitting the user review data inside the DOM
function appendData(data) {
  let mainContainer = document.querySelector(".carousel");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.className = "card2 carousel_card";

    let header = document.createElement("header");
    header.innerHTML =
      `
    <div>
                    <img src="/images/` +
      data[i].path +
      `">
                    <p><strong>` +
      data[i].name +
      `</strong><br>` +
      data[i].address +
      `</p>
                </div>

                <div>
                    <p style="color: #0B132A; font-size: 15px;">` +
      data[i].rating +
      `</p>
                    <img src="/images/star.svg">
                </div>
    `;

    let review = document.createElement("p");
    review.innerHTML = data[i].review;

    div.appendChild(header);
    div.appendChild(review);
    mainContainer.appendChild(div);
  }
  return true;
}

// Loading the data from json file into the DOM using the "fetch" API, then running the jQuery
// script for the "Carousel Effect" only after DOM is fully loaded
$(document).ready(async function () {
  fetch("app/js/reviews.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .then(function (isLoaded) {
      // jQuery Slick for Carousel Effect
      $(".carousel").slick({
        dots: true,
        infinite: false,
        prevArrow: `<svg class='a-left control-c prev slick-prev' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="29" stroke="#F53838" stroke-width="2"/>
<path d="M38.75 28.75H23.925L28.4625 23.3C28.6747 23.0447 28.7768 22.7156 28.7463 22.3851C28.7158 22.0545 28.5553 21.7497 28.3 21.5375C28.0447 21.3253 27.7156 21.2232 27.3851 21.2537C27.0546 21.2842 26.7497 21.4447 26.5375 21.7L20.2875 29.2C20.2455 29.2596 20.2078 29.3223 20.175 29.3875C20.175 29.45 20.175 29.4875 20.0875 29.55C20.0308 29.6933 20.0012 29.8459 20 30C20.0012 30.1541 20.0308 30.3067 20.0875 30.45C20.0875 30.5125 20.0875 30.55 20.175 30.6125C20.2078 30.6777 20.2455 30.7403 20.2875 30.8L26.5375 38.3C26.655 38.4411 26.8022 38.5546 26.9686 38.6323C27.1349 38.7101 27.3164 38.7503 27.5 38.75C27.7921 38.7505 28.0751 38.6488 28.3 38.4625C28.4266 38.3575 28.5312 38.2287 28.6079 38.0832C28.6846 37.9378 28.7318 37.7787 28.7469 37.6149C28.762 37.4512 28.7447 37.2861 28.6959 37.1291C28.6471 36.9721 28.5678 36.8263 28.4625 36.7L23.925 31.25H38.75C39.0815 31.25 39.3995 31.1183 39.6339 30.8839C39.8683 30.6494 40 30.3315 40 30C40 29.6685 39.8683 29.3505 39.6339 29.1161C39.3995 28.8817 39.0815 28.75 38.75 28.75Z" fill="#F53838"/>
</svg>`,
        nextArrow: `<svg class='a-right control-c next slick-next' style="display: block; transform: scale(-1,1)" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="29" stroke="#F53838" stroke-width="2"/>
<path d="M38.75 28.75H23.925L28.4625 23.3C28.6747 23.0447 28.7768 22.7156 28.7463 22.3851C28.7158 22.0545 28.5553 21.7497 28.3 21.5375C28.0447 21.3253 27.7156 21.2232 27.3851 21.2537C27.0546 21.2842 26.7497 21.4447 26.5375 21.7L20.2875 29.2C20.2455 29.2596 20.2078 29.3223 20.175 29.3875C20.175 29.45 20.175 29.4875 20.0875 29.55C20.0308 29.6933 20.0012 29.8459 20 30C20.0012 30.1541 20.0308 30.3067 20.0875 30.45C20.0875 30.5125 20.0875 30.55 20.175 30.6125C20.2078 30.6777 20.2455 30.7403 20.2875 30.8L26.5375 38.3C26.655 38.4411 26.8022 38.5546 26.9686 38.6323C27.1349 38.7101 27.3164 38.7503 27.5 38.75C27.7921 38.7505 28.0751 38.6488 28.3 38.4625C28.4266 38.3575 28.5312 38.2287 28.6079 38.0832C28.6846 37.9378 28.7318 37.7787 28.7469 37.6149C28.762 37.4512 28.7447 37.2861 28.6959 37.1291C28.6471 36.9721 28.5678 36.8263 28.4625 36.7L23.925 31.25H38.75C39.0815 31.25 39.3995 31.1183 39.6339 30.8839C39.8683 30.6494 40 30.3315 40 30C40 29.6685 39.8683 29.3505 39.6339 29.1161C39.3995 28.8817 39.0815 28.75 38.75 28.75Z" fill="#F53838"/>
</svg>`,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
});
