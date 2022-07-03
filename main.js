var dog = 0;
var cat = 0;
var cow = 0;
var sparrow = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ihxfq4xpB/model.json', startModel);
}

function startModel() {
    classifier.classify(gotResult);
    console.log("model ready")
}

function gotResult(error, result) {
    if (error) {
        console.log(error)
    }

    else {
        console.log(result)

        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;



        document.getElementById("sound").innerHTML = 'Detected voice is of- ' + result[0].label;
        document.getElementById("sound_counting").innerHTML = "Detected dog - " + dog + ", Dectected cat - " + cat + ", Dectected cow - " + cow + ", Dectected sparrow - " + sparrow;
        document.getElementById("sound").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_r + ")";
        document.getElementById("sound_counting").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_r + ")";

        if (result[0].label == 'Barking') {
            document.getElementById("animal_image").src = "dog.gif";
            dog = dog + 1;
        }
        else if (result[0].label == 'Meowing') {
            document.getElementById("animal_image").src = "cat.gif";
            cat = cat + 1;
        }
        else if (result[0].label == 'Mooing') {
            document.getElementById("animal_image").src = "cow.gif";
            cow = cow + 1;
        }
        else if (result[0].label == 'Chirping') {
            document.getElementById("animal_image").src = "sparrow.gif";
            sparrow = sparrow + 1;
        }
        else {
            document.getElementById("animal_image").src = "giphy.gif";
        }

    }

}