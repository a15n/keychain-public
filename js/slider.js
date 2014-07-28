function sliderHtml(number, index) {
  var key = angular.element(document.getElementsByClassName('key' + index)[0]);
  number = Math.ceil(number * 2);
  if (number > 1) {
    key.css({
      background: ''
    });
    key.css({
      background: 'linear-gradient( 90deg, #66cc33, #FFF ' + number + '%)'
    });
  } else {
    key.css({
      background: 'linear-gradient( 90deg, #66cc33, #FFF ' + number + '%)'
    });
  }
}