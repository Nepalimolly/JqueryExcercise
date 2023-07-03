let curId = 0;

let moviesList = [];

$(function () {
  $("#movieform").on("submit", function (e) {
    e.preventDefault();
    let title = $("#movie-title").val();
    let rating = $("#movie-rating").val();

    let movieData = { title, rating, curId };
    const HTMLAppend = createMovieDataHTML(movieData);

    curId++;
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLAppend);
    $("#movieform").trigger("reset");
  });
});
