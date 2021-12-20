window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.scrollTo(0, 0);

var activeMapEvent=null;

isElementOnScreen = function(id) {
      if(document.getElementById(id)){
        var element = document.getElementById(id)
        var bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
      }
}




eventNames=Object.keys(events)
window.onscroll = function() {
      for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          if (isElementOnScreen(eventName)) {
              if(activeMapEvent!==eventName){
                events[eventName]();
                activeMapEvent=eventName;
                break;
              }
          }
      }
};


$(document).ready(function(){
  mapInits();
  uiInits();
})

function uiInits(){

  if($(document).width()<700){
    // projectBounds=[-110.366,45.993,-110.136,46.165]
  }


  $('#restartStoryButton').click(function(){
    restartStory();
  })


  // $('#publicLandsLegendBox').css('background-color',publicLandsColor)
  // $('#privateInholdingsLegendBox').css('background-color',privateHighlight)
  // $('#publicSwapsLegendBox').css('background-color',publicHighlightColor)

}

function getMoveParams(id){
  moveParams={};
  boxTop=$('#'+id).position().top;
  boxBottom=$('#'+id).position().bottom;
  boxHeight=$('#'+id).height();
  scrollTop=$(document).scrollTop();
  winHeight=$(window).height()
  moveParams.startPoint=(boxHeight*1.25)+boxTop
  moveParams.endPoint=(boxHeight*1.25)+winHeight+boxTop
  moveParams.disScrolled=scrollTop-moveParams.startPoint
  // moveParams.prcScrolled=(moveParams.disScrolled/(winHeight+boxHeight+(winHeight)))
  moveParams.prcScrolled=(moveParams.disScrolled/(winHeight+boxHeight+(winHeight*0.15)))
  if(moveParams.prcScrolled<0){
    moveParams.prcScrolled=0
  }
  if(moveParams.prcScrolled>1){
    moveParams.prcScrolled=1
  }
  return(moveParams)
}
