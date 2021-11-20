window.SpeechRecognition=window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

let p = document.createElement('p');
let template = document.getElementById('template');
template.appendChild(p);
var value=1;

recognition.addEventListener("result",e=>{
let text=(e.results[0][0].transcript);
//p.innerHTML=localStorage.setItem("key",text);
p.innerHTML=text;
if(e.results[0].isFinal===true){
       p = document.createElement("p");
    template.appendChild(p);
}
window.localStorage.setItem(`key:${value}`,text);
value++;
}
);

// recognition()
recognition.addEventListener('end',recognition.start);
recognition.start();