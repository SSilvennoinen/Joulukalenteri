document.addEventListener("DOMContentLoaded", function() {
    let calendar = document.getElementById("calendar");
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modalImage");
    let closeBtn = document.getElementsByClassName("close")[0];
    let today = new Date().getDate();
    let musicButton = document.getElementById("musicButton");
    let backgroundMusic = document.getElementById("backgroundMusic");

    let images = [ //kuvat ja kuvatekstit
    
    { src: "Alli.JPG", caption: "Tonttu Alli" },
    { src: "Manuel.jpg", caption: "Tonttu Manuel" },
    { src: "Nelly.jpg", caption: "Tonttu Nelly" },
    { src: "Luna.jpeg", caption: "Tonttu Luna" },
    { src: "Vili.jpeg", caption: "Tonttu Vili" },
    { src: "Kisu.jpg", caption: "Tonttu Kisu" },
    { src: "Elsa ja Alma.jpg", caption: "Tontut Elsa ja Alma" },
    { src: "Sansa2.jpeg", caption: "Tonttu Sansa" },
    { src: "Remu.jpg", caption: "Tonttu Remu" },
    { src: "Nappula.jpg", caption: "Tonttu Nappula" },
    { src: "Veturi2.jpg", caption: "Tonttu Veturi" },
    { src: "Tico ja Capo.jpg", caption: "Tontut Tico ja Capo" },
    { src: "Unna.jpeg", caption: "Tonttu Unna" },
    { src: "Suhina.jpeg", caption: "Tonttu Suhina" },
    { src: "Myy.jpg", caption: "Tonttu Myy" },
    { src: "Vili2.JPG", caption: "Tonttu Vili" },
    { src: "Sansa3.jpeg", caption: "Tonttu Sansa" },
    { src: "Robin ja Onslow.jpg", caption: "Tontut Robin ja Onslow" },
    { src: "Hannu.jpg", caption: "Tonttu Hannu" },
    { src: "Doris.jpg", caption: "Tonttu Doris" },
    { src: "Veturi.jpg", caption: "Tonttu Veturi" },
    { src: "Taiga.jpg", caption: "Tonttu Taiga" },
    { src: "Sansa.jpeg", caption: "Tonttu Sansa" },
    { src: "Severus ja Manuel.jpg", caption: "Tontut Severus ja Manuel" },

];

for (let i = 1; i <= 24; i++) {
    let door = document.createElement("div");
    door.className = "door";

    let number = document.createElement("div");
    number.className = "number";
    number.textContent = i;
    door.appendChild(number);

        let img = document.createElement("img");
        img.src = images[i - 1]?.src;
        img.alt = `Luukku ${i}`; // Lisää alt-teksti vain saavutettavuutta varten
        door.appendChild(img);

        if (i <= today) {
            door.addEventListener("click", function() {
                if (door.classList.contains("open")) {
                    door.classList.remove("open");
                } else {
                    door.classList.add("open");
                    setTimeout(() => {
                        modal.style.display = "block";
                        modalImage.src = img.src;
                        modalCaption.textContent = images[i - 1]?.caption; // Lisää kuvateksti vain modaalissa
                    }, 1000); // Odota 1 sekunti ennen modaalin avaamista
                }
            });
        } else {
            door.style.pointerEvents = "none";
    }

    calendar.appendChild(door);
}


    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Musiikin toisto ja pysäytys
    musicButton.addEventListener("click", function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.textContent = "Lopeta tunnelmointi";
        } else {
            backgroundMusic.pause();
            musicButton.textContent = "Lisää tunnelmaa";
        }
    });

    // Lumisadeanimaatio
    function createSnowflake() {
        let snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.width = snowflake.style.height = Math.random() * 10 + 10 + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("snowflakes").appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Poistaa lumihiutaleen 5 sekunnin kuluttua
    }

    setInterval(createSnowflake, 200); // Luo uuden lumihiutaleen 200 millisekunnin välein
});
      
