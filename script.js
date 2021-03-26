Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
})
    
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
   document.getElementById("captured_img").innerHTML='<img id="result" src="'+data_uri+'"/>';
    });

}

console.log("ML5 version:"+ ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wE4ers4Uw/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model Loaded!");
}



function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="And the second prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function predict(){
    console.log("checking...");
    img=document.getElementById("result");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
if (error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;
    document.getElementById("result_gesture_name_2").innerHTML=results[1].label;
}
}


