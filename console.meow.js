/**
 *  Console.meow. A better way to log!
 *    - Logs a Cat, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 *
 *  Forked by:
 *  Rafael Miranda, http://rafamiranda.me
 */

(function dothething() {

  if( !window.console ) {
    // Well... nothing really... let it be!
    return;
  }

  window.console.meow = function() {

    var i,
      css = "color: orange";

    // Should be enough to make this fine in node.
    var inBrowser = (typeof window !== 'undefined');
    
    // This looks like a cat, right?
    // Taken from here - http://www.asciiworld.com/-Cats-.html

    var cat;
    if( inBrowser ) {
      cat = ['%c%c',
        "%c              /\\_____/\\ %c",
        "%c             (  o   o  )%c",
        "%c             (   =^=   )%c",
        "%c            (          )%c",
        "%c           (           )%c",
        "%c(((((((((((            )%c",
        '%c%c'];
    } else {
      cat = ['',
        "              /\_____/\ ",
        "             (  o   o  )",
        "             (   =^=   )",
        "            (          )",
        "           (           )",
        "(((((((((((            )",
        ''];
    }
      

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {  
      cat[1] = cat[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      cat[2] = cat[2] + "-(   " + stringOfArgs + "   )";
      cat[3] = cat[3] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the cat!
    if( inBrowser ) {
      for( i = 0; i < cat.length; i++ ) {
        console.log(cat[i], css, "");
      }
    } else {
      for( i = 0; i < cat.length; i++ ) {
        console.log(cat[i]);
      }  
    }
  }
})();
