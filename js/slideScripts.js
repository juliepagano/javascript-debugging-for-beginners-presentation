var exampleVariable = ["walk", "without", "rhythm"];

var foo = 'gom jabbar';

// This intentionally has an error. Can you find it?
function alertSpice() {
  var message = 'THE SPICE MUST FLOW';
  alert(messages);
}

function testDebugging() {
  debugger;
  makeItColor('red');
  makeItColor('green');
  makeItColor('red');
  makeItColor('');
};

function makeItColor(color) {
  $('body').css('background-color', color);
};

var testAjax = {};

testAjax.toggleLoader = function(show) {
  $('#dune-quotes .loader').toggle(show);
};

testAjax.ajax = function(source) {
  $('#dune-quotes .container').empty();
  testAjax.toggleLoader(true);

  window.setTimeout(function() {
    $.ajax({
      url: source,
      success: testAjax.onSuccess,
      error: testAjax.onError,
      complete: testAjax.onComplete
    });
  }, 500);
};

testAjax.onSuccess = function(data, textStatus, jqXHR) {
  var list = $('<ul></ul>');
  for(var i = 0; i < data.quotes.length; i++) {
    var item = $('<li></li>').text(data.quotes[i]);
    list.append(item);
  }
  $('#dune-quotes .container').html(list);
};

testAjax.onError = function(jqXHR, textStatus, errorThrown) {
  $('#dune-quotes .container').text("We're sorry. A sandworm ate the Dune quotes.");
};

testAjax.onComplete = function() {
  testAjax.toggleLoader(false);
};