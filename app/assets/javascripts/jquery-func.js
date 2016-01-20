!function ($) {

// ScrollTO // 

$body.scrollspy({
      target: '#nav-main',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    $('#nav-main [href=#]').click(function (e) {
      e.preventDefault()
    })


});

