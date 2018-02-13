var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertx=["Willy the Goblin",
"Big Daddy",
"Father Christmas"
];
var inserty=["the soup kitchen",
"Disneyland",
"the White House"];
var insertz=["spontaneously ",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];



randomize.addEventListener('click', result);

function result() {
  var newStory=storyText;
  var Itemx=randomValueFromArray(insertx);
  var Itemy=randomValueFromArray(inserty);
  var Itemz=randomValueFromArray(insertz);
  newStory= newStory.replace(":insertx:",Itemx);
  newStory= newStory.replace(":insertx:",Itemx);
  newStory= newStory.replace(":inserty:",Itemy);
  newStory= newStory.replace(":insertz:",Itemz);
  if(customName.value != '') {
    var name = customName.value;
    newStory=newStory.replace("Bob",name);
    
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071429);
    var temperature =  Math.round((94-32)/1.8);
    newStory=newStory.replace("94 farenheit",temperature+" celcius");
  	newStory=newStory.replace("300",weight+" stones");
    
  }
  


  story.textContent = newStory;
  story.style.visibility = 'visible';
}