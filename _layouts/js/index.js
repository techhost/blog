$(function() {
  $("#guanwang").fullpage({
   verticalCentered: false,
   scrollingSpeed: 1000,
   autoScrolling: true,
   scrollBar: true,
   fixedElements: '.titles-pane',
   anchors: ['guanwang1','guanwang2','guanwang3','guanwang4','guanwang5'],
   navigation: true,
   navigationPosition: 'right'
  });
});