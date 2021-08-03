"use strict"

const getVideos = (() => {
    const privateVideoFunction = (url, id) => {
        const iframe = document.querySelector(id);
        iframe.setAttribute("src", url)
    }

    return {
        publicVideoFunction: (url, id) => {
           return privateVideoFunction(url, id);
        }
    }
})();

class Multimedia {
    constructor(url){
        let _url = url;

        this.getUrl = () => _url;
    };

    get url(){
        return this.getUrl();
    };

    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    };
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    };

    playMultimedia(){
        getVideos.publicVideoFunction(this.url, this.id)
    };

    setInicio(tiempo) {
        super.getUrl(this.url) += `?start=${tiempo}`;
    };
};

const Musica = new Reproductor(
    "https://www.youtube.com/embed/L4sbDxR22z4",
    "#musica"
);
  
const Pelicula = new Reproductor(
    "https://www.youtube.com/embed/oCIeWol8jVk",
    "#peliculas"
);
  
const Serie = new Reproductor(
    "https://www.youtube.com/embed/rXxfN7DiGsQ",
    "#series"
);

const collapseOneElement = document.querySelector("#headingOne");
    collapseOneElement.addEventListener("click", function () {
    Musica.playMultimedia();
});
  
const collapseTwoElement = document.querySelector("#headingTwo");
    collapseTwoElement.addEventListener("click", function () {
    Pelicula.playMultimedia();
});

const collapseThreeElement = document.querySelector("#headingThree");
    collapseThreeElement.addEventListener("click", function () {
    Serie.playMultimedia();
});

Pelicula.setInicio(15);

Serie.setInicio(30);