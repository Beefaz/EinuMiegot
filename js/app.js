(function(){
    const body = document.querySelector('body');
    const section = document.querySelector('section');
    const rodyti = document.querySelector('.rodyti');
    const maisyti = document.querySelector('.maisyti');

    section.style.width = "100%";
    section.style.textAlign = "center";
    rodyti.style.color = maisyti.style.color = "white";
    rodyti.style.background = maisyti.style.background  = "blue";
    rodyti.style.border = maisyti.style.border  = "none";
    rodyti.style.height = maisyti.style.height = "30px";
    rodyti.style.width = maisyti.style.width  = "150px";
    rodyti.style.borderRadius = maisyti.style.borderRadius ="5px";

    rodyti.addEventListener('click', funkcija1);
    maisyti.addEventListener('click', funkcija2);

    let nuotraukos = ["img/photo1.jpg",
        "img/photo2.jpg",
        "img/photo3.jpg",
        "img/photo4.jpg",
        "img/photo5.jpg",
        "img/photo6.jpg",
        "img/photo7.jpg",
        "img/photo8.jpg"];

    function funkcija1(){
        let ul = document.createElement('ul');
            ul.style.display = "flex";
            ul.style.flexWrap = "wrap";
            ul.style.listStyleType = "none";
        body.appendChild(ul);
        //sukuria tiek li kiek yra elementu nuotraukos array
        for (let i = 0; i<nuotraukos.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            let img  = document.createElement("img");
                img.style.height = "20vw";
                img.style.width = "15vw";
                img.style.padding = "4vw";
                img.id = 'pic'+[i];     //selectoriai rikiavimui pagal array
                img.src = nuotraukos[i];
            li.appendChild(img);
        }
        rodyti.style.display="none";
    }
    function funkcija2() {
        let trinamasArray = [];
        var uzpildomasArray = [];
        //sukuria nauja laikina array is pradinio
        for (i = 0; nuotraukos.length > i; i++){
            trinamasArray.push(nuotraukos[i]);
        }

        //paima is trinamoArray random, istrina, pries tai idedamas i uzpildomasArray
        while (uzpildomasArray.length != nuotraukos.length) {
            let a = Math.floor(Math.random() * trinamasArray.length);
            uzpildomasArray.push(trinamasArray[a]);
            trinamasArray.splice([a], 1);
        }

        //overridina img src pagal id suformuotame html
        for (i=0;uzpildomasArray.length>i; i++){
            document.getElementById('pic'+[i]).src=uzpildomasArray[i];
        }
    }
})();