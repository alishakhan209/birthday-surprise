// ================================
// Loading Screen
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "opacity 1s ease";

        }, 3000);

    }

});

// ================================
// Start Button
// ================================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document.body.style.transition = "0.8s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            // Next Page
            window.location.href = "dob.html";

        }, 800);

    });

}




// ================================
// Welcome Animation
// ================================

const card = document.querySelector(".glass");

if (card) {

    card.animate(

        [
            {
                opacity: 0,
                transform: "translateY(50px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],

        {
            duration: 1800,
            easing: "ease"
        }

    );

}

/* ===================================
   DOB Verification
=================================== */

const verifyBtn = document.getElementById("verifyBtn");

if (verifyBtn) {

    verifyBtn.addEventListener("click", function () {

        const day = document.getElementById("day").value.trim();

        const month = document.getElementById("month").value;

        const message = document.getElementById("message");

        // Empty Fields
        if (day === "" || month === "") {

            message.style.color = "#ff4d6d";

            message.innerHTML =
                "❤️ Please enter your complete Date of Birth.";

            return;
        }

        // Correct DOB
        if (day == "12" && month === "November") {

            message.style.color = "#FFD700";

            message.innerHTML =
                "🎉 Access Granted ❤️<br>Welcome My Love...";

            // Button Disable
            verifyBtn.disabled = true;
            verifyBtn.innerHTML = "Opening Surprise... ❤️";

            // Little animation
            document.querySelector(".verify-card").style.transform = "scale(1.03)";
            document.querySelector(".verify-card").style.transition = "0.5s";

            // Redirect after 3 seconds
            setTimeout(function () {

                window.location.href = "story.html";

            }, 3000);

        }

        // Wrong DOB
        else {

            message.style.color = "#ff4d6d";

            message.innerHTML =
                "❌ Oops! This surprise is locked.<br>Please enter the correct birthday ❤️";

        }

    });

}

/* ===========================
Story Page
=========================== */

const nextStory = document.getElementById("nextStory");

if(nextStory){

nextStory.addEventListener("click",()=>{

document.body.style.opacity="0";

document.body.style.transition="1s";

setTimeout(()=>{

window.location.href="gallery.html";

},1000);

});

}


/* ===========================
Music
=========================== */

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}

else{

music.pause();

musicBtn.innerHTML="🎵";

}

}

}

/* ===========================
Typewriter
=========================== */

const text=

"Every moment with you became the most beautiful chapter of my life. ❤️";

const typing=document.getElementById("typingText");

let i=0;

function write(){

if(typing){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(write,50);

}

}

}

write();

/* ======================================
Gallery Page
====================================== */

const nextGallery=document.getElementById("nextGallery");

if(nextGallery){

nextGallery.onclick=()=>{

document.body.style.opacity="0";

document.body.style.transition="1s";

setTimeout(()=>{

window.location.href="videos.html";

},1000);

}

}


/* ===========================
VIDEOS PAGE
=========================== */

const nextVideo=document.getElementById("nextVideo");

if(nextVideo){

nextVideo.onclick=()=>{

document.body.style.opacity="0";

document.body.style.transition="1s";

setTimeout(()=>{

window.location.href="letter.html";

},1000);

}

}

/* =====================================
   LOVE LETTER PAGE
===================================== */


const openLetter = document.getElementById("openLetter");

const letterBox = document.getElementById("letterBox");

const typingLetter = document.getElementById("typingLetter");

const nextSurprise = document.getElementById("nextSurprise");



if(openLetter){


    openLetter.addEventListener("click",()=>{


        // Hide Envelope

        openLetter.style.transform="scale(0)";

        openLetter.style.opacity="0";


        setTimeout(()=>{


            openLetter.style.display="none";


            letterBox.style.display="block";


            startLetter();


        },700);



    });


}



// Typewriter Letter

function startLetter(){


const letter = 
`Happy Birthday My Love ❤️


Thank you for coming into my life.

Ap meri zindagi ka woh khoobsurat hissa ho
jiske bina sab kuch adhura lagta hai.


Thank you for always supporting me,
understanding me,
and making me smile.


May Allah always keep you happy,
healthy and successful.


You are my happiness,
my peace,
and my forever.


I Love You More Than Words Can Say ❤️


Love,
Apki Jaan Alisha😍❤️`;



let index=0;



function type(){

    if(index < letter.length){


        typingLetter.innerHTML += letter.charAt(index);


        index++;


        setTimeout(type,40);


    }

    else{


        nextSurprise.style.display="inline-block";


    }

}


type();


}



// Next Surprise Button

if(nextSurprise){


nextSurprise.addEventListener("click",()=>{


document.body.style.opacity="0";

document.body.style.transition="1s";



setTimeout(()=>{


window.location.href="final.html";


},1000);



});


}

/* =====================================
   FINAL SURPRISE PAGE
===================================== */


const giftBox = document.getElementById("giftBox");

const giftText = document.getElementById("giftText");

const finalMessage = document.getElementById("finalMessage");



if(giftBox){


giftBox.addEventListener("click",()=>{


    // Gift hide effect

    giftBox.style.transform="scale(0)";

    giftBox.style.opacity="0";


    setTimeout(()=>{


        giftBox.style.display="none";

        giftText.style.display="none";


        // Show Message

        finalMessage.style.display="block";


        // Start Fireworks

        createFireworks();



    },800);



});

}



// Fireworks Function

function createFireworks(){


for(let i=0; i<30; i++){


    const firework=document.createElement("div");


    firework.className="firework";


    firework.style.left=Math.random()*100+"vw";

    firework.style.top=Math.random()*100+"vh";


    document.body.appendChild(firework);



    setTimeout(()=>{


        firework.remove();


    },1000);



}


}