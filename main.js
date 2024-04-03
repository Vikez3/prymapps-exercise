$(document).ready(function () {
  // movies Array
  let moviesData = [
    {
      id: 0,
      title: "The Conjuring",
      year: "2013",
      genre: "Horror",
      desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    },
    {
      id: 1,
      title: "Before Sunrise",
      year: "1995",
      genre: "Romance",
      desc: "A young man and woman meet on a train in Europe and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
    },
    {
      id: 2,
      title: "A Quiet Place",
      year: "2018",
      genre: "Horror",
      desc: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
      genre: "Action",
      desc: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      id: 4,
      title: "Top Gun",
      year: "2022",
      genre: "Action",
      desc: "An airliner filled with 800 passengers is forced to fly fast and low, above farmlands, suburbs and skyscraper-packed cities or the tons of explosives aboard will detonate. When an elite unit of US Air Force fighter jets is sent to provide escort, they find themselves facing a squadron of unidentifiable warplanes which ignites a deadly air battle that threatens to destroy all life above and below.",
    },
    {
      id: 5,
      title: "La La Land",
      year: "2016",
      genre: "Romance",
      desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    },
    {
      id: 6,
      title: "The Big Bang Theory",
      year: "2007",
      genre: "Comedy",
      desc: "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon’s equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali.",
    },
    {
      id: 7,
      title: "Hellhole",
      year: "2022",
      genre: "Horror",
      desc: "In a monastery cut off from the world, the monks run a clinic for the possessed. One day, a young policeman Marek comes to the convent. Posing as a clergyman, he penetrates monastic life and tries to explain the recent, mysterious disappearance of several tormented inmates. It turns out, however, that there is no way out of the monastery.",
    },
    {
      id: 8,
      title: "The Notebook",
      year: "2004",
      genre: "Romance",
      desc: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    },
    {
      id: 9,
      title: "Pride and Prejudice",
      year: "2005",
      genre: "Romance",
      desc: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
    },
    {
      id: 10,
      title: "Hereditary",
      year: "2018",
      genre: "Horror",
      desc: "A grieving family is haunted by tragic and disturbing occurrences.",
    },
    {
      id: 11,
      title: "Die Hard",
      year: "1988",
      genre: "Action",
      desc: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    },
    {
      id: 12,
      title: "Avatar",
      year: "2009",
      genre: "Action",
      desc: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    },
    {
      id: 13,
      title: "Mad Max: Fury Road",
      year: "2015",
      genre: "Action",
      desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    },
    {
      id: 14,
      title: "Get Out",
      year: "2017",
      genre: "Horror",
      desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    },
    {
      id: 15,
      title: "Cranberry Christmas",
      year: "2020",
      genre: "Romance",
      desc: "A separated couple feign marital bliss on national television to help their town’s Christmas festival – and their business. But what will the future hold for them when rekindled love is complicated by new opportunities?",
    },
    {
      id: 16,
      title: "Superbad",
      year: "2007",
      genre: "Comedy",
      desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    },
    {
      id: 17,
      title: "The Hangover",
      year: "2009",
      genre: "Comedy",
      desc: "Three buddies wake",
    },
    {
      id: 18,
      title: "Dragon Ball Z",
      year: "1991",
      genre: "Anime",
      desc: "A Super Namekian named Slug comes to invade Earth. But the Z Warriors do their best to stop Slug and his gang.",
    },
    {
      id: 19,
      title: "Minions & More Volume 1",
      year: "2022",
      genre: "Anime",
      desc: "This collection of Minions shorts from the “Despicable Me” franchise includes mini-movies like “Training Wheels,” “Puppy” and “Yellow Is the New Black.”",
    },
    {
      id: 20,
      title: "Noel Next Door",
      year: "2022",
      genre: "Comedy",
      desc: "A hard-working, single mom gets into a war of words with a neighbor who she feels is ruining Christmas, only to find that this misunderstood grouch just may steal her heart.",
    },
    {
      id: 21,
      title: "Mia and Me: The Hero of Centopia",
      year: "2022",
      genre: "Anime",
      desc: "Mia discovers her magic stone is part of an ancient prophecy and embarks on a thrilling journey to the farthest islands of Centopia to face a great evil, and shape her own destiny.",
    },
    {
      id: 22,
      title: "Full House",
      year: "1987",
      genre: "Comedy",
      desc: "After the death of his wife, Danny enlists his best friend and his brother-in-law to help raise his three daughters, D.J., Stephanie, and Michelle.",
    },
    {
      id: 23,
      title: "Groot Takes a Bath",
      year: "2022",
      genre: "Anime",
      desc: "Everybody needs some alone time to relax and wash up, but things go quite differently when you’re a Flora Colossi toddler.",
    },
    {
      id: 24,
      title: "The Monkey King: Reborn",
      year: "2021",
      genre: "Anime",
      desc: "At the beginning of chaos, the first demon in the world was born, named Yuandi, and it was worshipped as the ancestor of demons. Thousands of years later, the former demon king Sun Wukong is rescued from the Five Elements Mountain by Monk Tang, who promises to protect him and go to the West to get the scriptures.",
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
