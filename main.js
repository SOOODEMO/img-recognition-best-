Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("cam");

Webcam.attach('#cam');

function capture()
    {
        Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="camimg" src="'+data_uri+'"/>';

        });
    }
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yz-3kz5Bi/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function identify(){
    
    img = document.getElementById('camimg');
    classifier.classify(img , gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);

    } else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}