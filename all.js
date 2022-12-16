speak();

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "This information will help you to pursue the profession of your choice";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);}