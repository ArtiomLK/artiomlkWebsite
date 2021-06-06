var options = [
  {
    selector: '#year0A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year2A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year8A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year18A',
    offset: $(window).height() - $(window).height() / 3,
    callback: function (el) {
      showView(el)
      year18APlayer.playVideo()
    },
  },
  {
    selector: '#year23B',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year23A',
    offset: $(window).height() - $(window).height() / 3,
    callback: function (el) {
      showView(el)
      year18APlayer.pauseVideo()
      year23APlayer.playVideo()
    },
  },
  {
    selector: '#year24A',
    offset: 500,
    callback: function (el) {
      showView(el)
      year23APlayer.pauseVideo()
    },
  },
  {
    selector: '#year25A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year26A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
  {
    selector: '#year27A',
    offset: 500,
    callback: function (el) {
      showView(el)
    },
  },
]

function showView(el) {
  Materialize.fadeInImage($(el))
  el.style.visibility = 'visible'
}

Materialize.scrollFire(options)

$(document).ready(function () {
  $('.slider').slider()
})

var tag = document.createElement('script')
tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var year18APlayer
var year23APlayer

function onYouTubeIframeAPIReady() {
  year18APlayer = new YT.Player('year18AIframe')
  year23APlayer = new YT.Player('year23AIframe')
}

/*Side Bar*/
;(function ($) {
  $(function () {
    $('.button-collapse').sideNav()
    $('.parallax').parallax()
  })
})(jQuery)
