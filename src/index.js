import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const text = $("#text").val();
    const entry = new Entry(title, text);
    $("#counts").html("<p>Number of words: " + entry.wordCounter() + ".</p><p>Number of vowels: " + entry.vowelCounter() + ".</p><p>Number of consonants: " + entry.consonantCounter() + ".");
    $("#teaser").html("<p>Teaser: " + entry.getTeaser() + "</p>");
  });
});