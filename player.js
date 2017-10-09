const radios = [{
    title: "I FM",
    src: "http://5.135.138.182:8000/direct",
    img: "./imgs/ifm.png",
    url: "https://www.ifm.tn/",
}, {
    title: "Oxygene FM",
    src: "http://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3",
    img: "./imgs/radiooxygene.png",
    url: "http://www.radiooxygene.tn/",
}, {
    title: "Express FM",
    src: "http://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
    img: "./imgs/radioexpressfm.png",
    url: "http://www.radioexpressfm.com/",
}, {
    title: "Sabra FM",
    src: "http://stream6.tanitweb.com/sabrafm",
    img: "./imgs/radiosabrafm.png",
    url: "http://www.radiosabrafm.net/",
}, {
    title: "Shems FM",
    src: "http://stream6.tanitweb.com/shems",
    img: "./imgs/shemsfm.png",
    url: "http://shemsfm.net:8080/",
}, {
    title: "Mosaique FM",
    src: "http://radio.mosaiquefm.net:8000/mosalive",
    img: "./imgs/mosaiquefm.png",
    url: "https://www.mosaiquefm.net/",
}, {
    title: "Jawhara FM",
    src: "http://streaming2.toutech.net:8000/jawharafm",
    img: "./imgs/jawharafm.png",
    url: "http://www.jawharafm.net/",
}, {
    title: "Zitouna FM",
    src: "http://stream8.tanitweb.com/zitounafm",
    img: "./imgs/zitounafm.png",
    url: "http://www.zitounafm.net/",
}, {
    title: "Knooz FM",
    src: "http://streaming.knoozfm.net:8000/knoozfm",
    img: "./imgs/knoozfm.png",
    url: "http://www.knoozfm.net/",
}, {
    title: "Cap FM",
    src: "http://stream8.tanitweb.com/capfm",
    img: "./imgs/capradio.png",
    url: "http://www.capradio.tn/",
}, {
    title: "Diwan FM",
    src: "http://stream8.tanitweb.com/diwanfm",
    img: "./imgs/diwanfm.png",
    url: "http://www.diwanfm.net/",
}, {
    title: "Misk FM",
    src: "http://178.32.253.134:8000/stream?type=.mp3",
    img: "./imgs/miskfm.png",
    url: "http://misk.fm/",
}, {
    title: "Radio Med",
    src: "http://stream6.tanitweb.com/radiomed",
    img: "./imgs/radiomedtunisie.png",
    url: "http://radiomedtunisie.com/",
}, {
    title: "Oasis FM",
    src: "http://stream6.tanitweb.com/oasis",
    img: "./imgs/oasisfm.png",
    url: "http://www.oasisfm.tn/",
}, {
    title: "Ulysse FM",
    src: "http://188.165.79.152:9990/;stream.mp3",
    img: "./imgs/ulysse-fm.png",
    url: "http://www.ulysse-fm.net/",
}, {
    title: "Saraha FM",
    src: "http://ns326208.ip-37-59-9.eu:8000/sarahafm",
    img: "./imgs/sarahafm.png",
    url: "http://sarahafm.tn/",
}, {
    title: "MFM FM",
    src: "http://92.222.225.69:9300/;",
    img: "./imgs/radiomfm.png",
    url: "http://www.radiomfm.tn/",
}, {
    title: "Nejma FM",
    src: "http://188.166.109.186:8000/stream",
    img: "./imgs/nejmafm.png",
    url: "http://nejmafm.com/",
}, {
    title: "Radio 6",
    src: "http://streaming.radio6tunis.net:8000/radio6tunis",
    img: "./imgs/radio6tunis.png",
    url: "http://www.radio6tunis.net/",
}];

class App {
    constructor() {
        this.globalMovement = new Vector2();
        this.initAudio();
        this.initUI();
        this.initPlaylist();
        this.loadAudio();
    }
    initUI() {
        this.controls = {
            prev: document.querySelector("#btn-prev"),
            next: document.querySelector("#btn-next"),
            play: document.querySelector("#btn-play"),
            volume: document.querySelector("#btn-volume")
        };
        this.controls.prev.onclick = () => {
            this.currentSong = this.currentSong > 0 ?
                this.currentSong - 1 :
                radios.length - 1;
            this.loadAudio();
        };
        this.controls.next.onclick = () => {
            this.currentSong = this.currentSong < radios.length - 1 ?
                this.currentSong + 1 :
                0;
            this.loadAudio();
        };
        this.controls.play.onclick = () => {
            let i = this.controls.play.getElementsByTagName("i")[0];
            if (this.playing && this.audioReady) {
                i.classList.remove("fa-pause");
                i.classList.add("fa-play");
                this.playing = false;
                this.audio.pause();
            } else if (this.playing && this.audioReady) {
                i.classList.remove("fa-play");
                i.classList.add("fa-pause");
                this.playing = true;
                this.audio.play();
            }
        };
        this.controls.volume.onclick = () => {
            let i = this.controls.volume.getElementsByTagName("i")[0];
            this.volume = this.volume > 0 ? this.volume - 0.5 : 1;
            switch (this.volume) {
                case 1:
                    i.classList.remove("fa-volume-off");
                    i.classList.add("fa-volume-up");
                    break;
                case 0.5:
                    i.classList.remove("fa-volume-up");
                    i.classList.add("fa-volume-down");
                    break;
                case 0:
                    i.classList.remove("fa-volume-down");
                    i.classList.add("fa-volume-off");
                    break;
                default:
                    break;
            }
            this.gainNode.gain.value = this.volume;
        };
        this.background = document.getElementById("background");
        this.title = document.getElementById("title");
        this.playlist = document.getElementById("playlist");
        this.playlist.onclick = (e) => {
            if (!e.target.dataset.idx) {
                return;
            }
            this.currentSong = parseInt(e.target.dataset.idx);
            this.loadAudio();
        };
    }
    initPlaylist() {
        let idx = 0;
        for (const radio of radios) {
            const item = document.createElement("li");
            const img = document.createElement("img");
            img.src = radio.img;
            img.dataset.idx = idx;
            item.dataset.idx = idx;
            item.appendChild(img);
            this.playlist.appendChild(item);
            idx++;
        }
    }
    initAudio() {
        this.currentSong = 0;
        this.volume = 1;

        this.audio = document.getElementById("audio");

    }
    loadAudio() {
        let request = new XMLHttpRequest();

        this.audioReady = false;
        this.playing = false;
        this.background.classList.add("loading");

        this.controls.prev.classList.add("disabled");
        this.controls.next.classList.add("disabled");
        this.controls.play.classList.add("disabled");

        this.playAudio(radios[this.currentSong].src);
    }
    playAudio(url) {
        this.audioReady = true;
        this.playing = true;

        this.background.classList.remove("loading");
        this.title.innerHTML = radios[this.currentSong].title;

        this.controls.prev.classList.remove("disabled");
        this.controls.next.classList.remove("disabled");
        this.controls.play.classList.remove("disabled");

        this.controls.play.getElementsByTagName("i")[0].classList.remove("fa-play");
        this.controls.play.getElementsByTagName("i")[0].classList.add("fa-pause");

        this.audio.src = url;
        this.audio.load();
        this.audio.play();
    }
}

window.onload = () => {
    let app = new App();
};
