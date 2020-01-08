"use strict";

$(document).ready(function() {
  if (annyang) {
    var delInput = function() {
      if ( $("input").is(":focus") ) {
        $("input:focus").val("");
      } else if ( $("textarea").is(":focus") ) {
        $("textarea:focus").val("");
      }
    };

    var inclText = function(txt) {
      if ( $("input").is(":focus") ) {
        $("input:focus").val(function(_, oldVal) {
           return oldVal + txt;
        });
      } else if ( $("textarea").is(":focus") ) {
        $("textarea:focus").val(function(_, oldVal) {
           return oldVal + txt;
        });
      }
    };
    
    var commands = {
      "clear input": delInput,
      "target input *search": inclText,
    };
    
    annyang.addCommands(commands);
    annyang.start();
    
    $("input, textarea").on("focus", function() {
      annyang.resume();
    }).on("blur", function() {
      annyang.pause();
    });
  }
});
