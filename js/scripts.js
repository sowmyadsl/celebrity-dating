$(document).ready(function() {
  var assignCelebrity = function (value) {
    var celebrity = '';
    if (value < 9) {
      celebrity = 'Donald Trump';
    } else if (value > 9 && value < 15) {
      celebrity = 'Tom Hanks';
    } else {
      celebrity = 'Leonardo DiCaprio';
    }
    return celebrity;
  };
  var sumAllValues = function() {
    var total = 0;
    var arrayOfValues = $('form select').map(function() {
      return parseInt($(this).val());
    });
    arrayOfValues.each(function(index, value) {
      total += value;
    });
    return total;
  }
  $('.result').hide();
  $('form').submit(function() {
    $('.result').hide();
    var sum = sumAllValues();
    var celebrity = assignCelebrity(sum);
    if (celebrity === 'Donald Trump') {
      $('#trump').show();
    } else if (celebrity === 'Tom Hanks') {
      $('#hanks').show();
    } else {
      $('#leo').show();
    }
    return false;
  });
});
