$(document).ready(function() {
  var url = window.location.href;
  if (url.indexOf('overview') > -1) {
    alert('overview');
    $('business-hours').remove();
    var arr = [];
    $('md-input-container.md-input-has-value').each(function(e) {
      var label = $(this).find('label').text();
      var input = $(this).find('input').val();
      var text = $(this).find('md-select-value span .md-text').text();
      if (input) {
        var inputArray = [];
        inputArray.push(label);
        inputArray.push(input);
        arr.push(inputArray);
      }
      else {
        var inputArray = [];
        inputArray.push(label);
        inputArray.push(text);
        arr.push(inputArray);
      }
    });
    console.log(arr);
  }
  else if (url.indexOf('account-success') > -1) {
    alert('account-successs');
    $('md-input-container').each(function(e) {
    	console.log($(this).find('label').text() + " " + $(this).find('input').val());
    });
  }
  else {
    alert('none');
  }
});
