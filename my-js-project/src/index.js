// NOTE: FOR GET REQUEST EXAMPLE:
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { insertMovie, results, searchMovies } from "./movies";
import { initSortable } from "./plugins/init_sortable";

// Stimulus starter
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// Selections
const searchForm = document.querySelector("#search-movies");

// Listeners
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = " ";
  const keyword = document.querySelector("#keyword").value;
  searchMovies(keyword);
});

// API call
searchMovies("Kamen");

// Plugins
initSortable();
