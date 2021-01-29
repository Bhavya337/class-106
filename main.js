//https://teachablemachine.withgoogle.com/models/hdie2tG8e/
 

predict_1="";
predict_2="";
 
Webcam.set({
    width:310,
    height:300,
    
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function Takesnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hdie2tG8e/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+ predict_1 ;
    speak_data_2="the second prediction is "+ predict_2 ;
    var speak_this=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(speak_this); }
      
  
      
  function result()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name_1").innerHTML = results[1].label;
    predict_1=results[0].label;
    predict_2=results[1].label;
    console.log(predict_2);
    console.log(predict_1);
    speak();
   if (results[0].label=="happy"){
     document.getElementById("result_emoji").innerHTML="&#128522;";


   }


   if (results[0].label=="smilling"){
    document.getElementById("result_emoji").innerHTML="&#128512;";


  }

   if (results[0].label=="sad"){
    document.getElementById("result_emoji").innerHTML="&#128532;";


  }

  if (results[0].label=="angry"){
    document.getElementById("result_emoji").innerHTML="&#128548;";


  }
  if (results[0].label=="crying"){
    document.getElementById("result_emoji").innerHTML="&#128546;";


  

  }
  
  if (results[1].label=="happy"){
    document.getElementById("result_emoji_1").innerHTML="&#128522;";


  }
  if (results[1].label=="sad"){
    document.getElementById("result_emoji_1").innerHTML="&#128532;";


  }
  if (results[1].label=="angry"){
    document.getElementById("result_emoji_1").innerHTML="&#128548;";


  }
  if (results[1].label=="crying"){
    document.getElementById("result_emoji_1").innerHTML="&#128546;";


  }

  if (results[1].label=="smilling"){
    document.getElementById("result_emoji_1").innerHTML="&#128512;";


  }


  }}