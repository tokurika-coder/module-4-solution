
// let arr=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
// for(Element in arr){
//     if(arr[Element][0]=='J'||'j'){
//         console.log(speakWord+" "+arr[Element]);
//     }
//     else{
//         console.log(speakWord+" " +arr[Element]);
//     }
// }
(function (helloSpeaker,byeSpeaker){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    })(helloSpeaker,byeSpeaker);