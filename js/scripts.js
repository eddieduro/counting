function counting(countBy, countTo){
  var counts = [];
    for(var i = countBy; i <= countTo; i += countBy){
      counts.push(i);
    }
    var result = counts.join(", ");
    return result;
}


$(document).ready(function() {
  $('form#countForm').submit(function(event){
    var countBy = parseInt($('input#count').val());
    var countTo = parseInt($('input#countTo').val());
    var results = counting(countBy, countTo);

    $('#results').show().append('<p> Your results are ' + results + '</p>');
    // document.write(counts);
    event.preventDefault();
  });
});
