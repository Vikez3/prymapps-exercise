$(document).ready(function () {
  // movies Array
  let moviesData = [
    {
      id: 0,
      title: "Top Gun",
      year: "2022",
      genre: "Action",
      desc: "An airliner filled with 800 passengers is forced to fly fast and low, above farmlands, suburbs and skyscraper-packed cities or the tons of explosives aboard will detonate. When an elite unit of US Air Force fighter jets is sent to provide escort, they find themselves facing a squadron of unidentifiable warplanes which ignites a deadly air battle that threatens to destroy all life above and below.",
    },
    {
      id: 1,
      title: "Cranberry Christmas",
      year: "2020",
      genre: "Romance",
      desc: "A separated couple feign marital bliss on national television to help their town’s Christmas festival – and their business. But what will the future hold for them when rekindled love is complicated by new opportunities?",
    },
    {
      id: 2,
      title: "Hellhole",
      year: "2022",
      genre: "Horror",
      desc: "In a monastery cut off from the world, the monks run a clinic for the possessed. One day, a young policeman Marek comes to the convent. Posing as a clergyman, he penetrates monastic life and tries to explain the recent, mysterious disappearance of several tormented inmates. It turns out, however, that there is no way out of the monastery.",
    },
    {
      id: 3,
      title: "The Big Bang Theory",
      year: "2007",
      genre: "Comedy",
      desc: "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon’s equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali.",
    },
    {
      id: 4,
      title: "Dragon Ball Z",
      year: "1991",
      genre: "Anime",
      desc: "A Super Namekian named Slug comes to invade Earth. But the Z Warriors do their best to stop Slug and his gang.",
    },
  ];
  // movies Array

  // get unique genere
  let filterArray = new Set(moviesData.map((movie) => movie.genre));
  let filterArrayUnique = Array.from(filterArray);
  // get unique genere
  // rendering filter buttons
  function renderButtons() {
    $(".filter-conainer").html("");
    let buttonsHTML = filterArrayUnique
      .map(
        (genre) =>
          `<button class="btn btn-outline-dark px-3 filter-btn">${genre}</button>`
      )
      .join("");

    $(".filter-conainer").html(`
  <button class="btn btn-outline-dark px-3 show-all-btn">Show All</button>
  ${buttonsHTML}
  `);
  }
  renderButtons();
  // rendering filter buttons

  // render films
  function RenderFilms(moviesArr) {
    moviesArr.forEach(function (film) {
      let col = $("<div>").addClass("col");

      col.html(`
      <div class="card mb-4 rounded-3 shadow-sm h-100">
                    <div class="card-header py-3">
                        <h3 class="my-0 fw-normal">${film.title}</h3>
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h2 class="card-title">${film.year}</h2>
                            <p class="genre">${film.genre}</p>
                            <p>${film.desc}</p>
                        </div>
                        <button type="button" class="w-100 btn btn-outline-primary read-more">Read More</button>
                    </div>
                </div>
      `);

      $(".cards-grid").append(col);
      $(".cards-grid").on("click", ".read-more", readMoreHandler);
    });
  }

  RenderFilms(moviesData);
  // render films

  // cards filter
  $(".filter-btn").on("click", function () {
    let filteredMovies = moviesData.filter(
      (movie) =>
        movie.genre.toLowerCase() === $(this).text().trim().toLowerCase()
    );

    $(".cards-grid").html("");
    RenderFilms(filteredMovies);
  });

  $(".show-all-btn").on("click", function () {
    $(".cards-grid").html("");
    RenderFilms(moviesData);
  });
  // cards filter

  // modal
  let currentFilmInModal;

  function readMoreHandler() {
    let parentClone = $(this).parent().parent().clone();
    parentClone.find(".read-more").remove();
    currentFilmInModal = parentClone.html();

    $(".modal").addClass("d-block");
    $(".modal").find(".modal-body").html(currentFilmInModal);
    $(".modal").find(".read-more").addClass("d-none");
  }

  $(".modal-close").on("click", function () {
    $(".modal").removeClass("d-block");
  });
  // modal

  // random quote

  // $(".randomQuoteBtn").on("click", function () {
  //   $.ajax({
  //     url: "https://quoteapi.pythonanywhere.com/random",
  //     method: "GET",
  //     success: function (response) {
  //       console.log(response);
  //     },
  //     error: function (error) {
  //       console.error(error);
  //     },
  //   });
  // });

  // Access to XMLHttpRequest at 'https://quoteapi.pythonanywhere.com/random' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // random quote

  // add film
  function addMovie(movie) {
    moviesData.push(movie);
    $(".cards-grid").html("");
    RenderFilms(moviesData);
  }

  let selectOptions = filterArrayUnique
    .map((genre) => `<option value="${genre}">${genre}</option>`)
    .join("");

  $("#genre").html(`<option value="">Select Genre</option>${selectOptions}`);

  $("#addMovieForm").submit(function (event) {
    event.preventDefault();

    let title = $("#title").val();
    let year = $("#year").val();
    let genre = $("#genre").val();
    let desc = $("#desc").val();

    let movie = {
      id: moviesData.length,
      title: title,
      year: year,
      genre: genre,
      desc: desc,
    };

    addMovie(movie);

    this.reset();
  });
  // add film
});
