 

for(var i=0; i<3; i++){
    document.querySelectorAll(".myDiv")[i].addEventListener("click", function(){
        var text = this.innerHTML; 
        audioPlay(text);
        AddAnimations(text);
        
         
    });
   
}

function audioPlay(text){
     
    switch(text){
        case "a":
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;

            case "b":
                var audio = new Audio("sound/b.mp3");
                audio.play();
                break;

           case "c":
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;
    }
}

function AddAnimations(text){
   var Button = document.querySelector("."+text);
   Button.classList.add("anim");

   setTimeout(function(){
        Button.classList.remove("anim");
   }, 1000)
}
 