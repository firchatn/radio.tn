// mimes:
// audio/mp4                             aac f4a f4b m4a
// audio/mpeg                            mp3
// audio/x-wav                           wav
// application/vnd.apple.mpegurl         m3u8
// application/x-mpegURL                 m3u8

// other radios:
// mosaique radios for musics, ....
// national radios: radio culturelle,
const radios = [{
  title: "Radio Nationale",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamnat/streamnat/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radionationale.png",
  url: "http://www.radionationale.tn/",
}, {
  title: "Radio Jeunes",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamjeu/streamjeu/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiojeunes.png",
  url: "http://www.radiojeunes.tn/",
}, {
  title: "Radio Tunis Chaîne Internationale",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamrtc/streamrtc/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/rtci.png",
  url: "http://www.rtci.tn/",
}, {
  title: "Radio Sfax",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamsfa/streamsfa/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiosfax.png",
  url: "http://www.radiosfax.tn/",
}, {
  title: "Radio Monastir",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streammon/streammon/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiomonastir.png",
  url: "http://www.radiomonastir.tn/",
}, {
  title: "Radio Kef",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamkef/streamkef/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiokef.png",
  url: "http://www.radiokef.tn/",
}, {
  title: "Radio Gafsa",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamgaf/streamgaf/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiogafsa.png",
  url: "http://www.radiogafsa.tn/",
}, {
  title: "Radio Tatouin",
  src: "http://streamedge.radiotunisienne.com:1936/rliveedge/streamtat/streamtat/manifest.mpd",
  type: "application/dash+xml",
  img: "./imgs/radios/radiotataouine.png",
  url: "http://www.radiotataouine.tn/",
}, {
  title: "Mosaique FM",
  src: "http://radio.mosaiquefm.net:8000/mosalive",
  type: "audio/mpeg",
  img: "./imgs/radios/mosaiquefm.png",
  url: "https://www.mosaiquefm.net/",
}, {
  title: "Diwan FM",
  src: "http://stream8.tanitweb.com/diwanfm",
  type: "audio/mpeg",
  img: "./imgs/radios/diwanfm.png",
  url: "http://www.diwanfm.net/",
}, {
  title: "Shems FM",
  src: "http://stream6.tanitweb.com/shems",
  type: "audio/mpeg",
  img: "./imgs/radios/shemsfm.png",
  url: "http://shemsfm.net:8080/",
}, {
  title: "Jawhara FM",
  src: "http://streaming2.toutech.net:8000/jawharafm",
  type: "audio/mpeg",
  img: "./imgs/radios/jawharafm.png",
  url: "http://www.jawharafm.net/",
}, {
  title: "Zitouna FM",
  src: "http://stream8.tanitweb.com/zitounafm",
  type: "audio/mpeg",
  img: "./imgs/radios/zitounafm.png",
  url: "http://www.zitounafm.net/",
}, {
  title: "Express FM",
  src: "http://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
  type: "audio/mpeg",
  img: "./imgs/radios/radioexpressfm.png",
  url: "http://www.radioexpressfm.com/",
}, {
  title: "Oxygene FM",
  src: "http://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3",
  type: "audio/mpeg",
  img: "./imgs/radios/radiooxygene.png",
  url: "http://www.radiooxygene.tn/",
}, {
  title: "Knooz FM",
  src: "http://streaming.knoozfm.net:8000/knoozfm",
  type: "audio/mpeg",
  img: "./imgs/radios/knoozfm.png",
  url: "http://www.knoozfm.net/",
}, {
  title: "Cap FM",
  src: "http://stream8.tanitweb.com/capfm",
  type: "audio/mpeg",
  img: "./imgs/radios/capradio.png",
  url: "http://www.capradio.tn/",
}, {
  title: "I FM",
  src: "http://5.135.138.182:8000/direct",
  type: "audio/mpeg",
  img: "./imgs/radios/ifm.png",
  url: "https://www.ifm.tn/",
}, {
  title: "Sabra FM",
  src: "http://stream6.tanitweb.com/sabrafm",
  type: "audio/mpeg",
  img: "./imgs/radios/radiosabrafm.png",
  url: "http://www.radiosabrafm.net/",
}, {
  title: "Misk FM",
  src: "http://178.32.253.134:8000/stream?type=.mp3",
  type: "audio/mpeg",
  img: "./imgs/radios/miskfm.png",
  url: "http://misk.fm/",
}, {
  title: "Radio Med",
  src: "http://stream6.tanitweb.com/radiomed",
  type: "audio/mpeg",
  img: "./imgs/radios/radiomedtunisie.png",
  url: "http://radiomedtunisie.com/",
}, {
  title: "Oasis FM",
  src: "http://stream6.tanitweb.com/oasis",
  type: "audio/mpeg",
  img: "./imgs/radios/oasisfm.png",
  url: "http://www.oasisfm.tn/",
}, {
  title: "Ulysse FM",
  src: "http://188.165.79.152:9990/;stream.mp3",
  type: "audio/mpeg",
  img: "./imgs/radios/ulysse-fm.png",
  url: "http://www.ulysse-fm.net/",
}, {
  title: "Saraha FM",
  src: "http://ns326208.ip-37-59-9.eu:8000/sarahafm",
  type: "audio/mpeg",
  img: "./imgs/radios/sarahafm.png",
  url: "http://sarahafm.tn/",
}, {
  title: "MFM FM",
  src: "http://92.222.225.69:9300/;",
  type: "audio/mpeg",
  img: "./imgs/radios/radiomfm.png",
  url: "http://www.radiomfm.tn/",
}, {
  title: "Nejma FM",
  src: "http://188.166.109.186:8000/stream",
  type: "audio/mpeg",
  img: "./imgs/radios/nejmafm.png",
  url: "http://nejmafm.com/",
}, {
  title: "Radio 6",
  src: "http://streaming.radio6tunis.net:8000/radio6tunis",
  type: "audio/mpeg",
  img: "./imgs/radios/radio6tunis.png",
  url: "http://www.radio6tunis.net/",
}];

class App {
  constructor() {
    this.initAudio();
    this.initUI();
    this.initPlaylist();
  }
  initUI() {
    if ("_cordovaNative" in window) {
      document.body.classList.add("webview");
    }
    this.controls = {
      prev: document.querySelector("#btn-prev"),
      next: document.querySelector("#btn-next"),
      play: document.querySelector("#btn-play"),
      volume: document.querySelector("#btn-volume"),
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
      } else if (!this.playing && this.audioReady) {
        i.classList.remove("fa-play");
        i.classList.add("fa-pause");
        this.playing = true;
        this.audio.play();
      } else if (this.audioReady === undefined) {
        this.loadAudio();
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
      this.audio.volume = this.volume;
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
    this.background.classList.remove("loading");
  }
  initPlaylist() {
    let idx = 0;
    for (const radio of radios) {
      if (radio.type === "audio/mpeg") {
        const item = document.createElement("li");
        const img = document.createElement("img");
        img.src = radio.img;
        img.dataset.idx = idx;
        item.dataset.idx = idx;
        item.appendChild(img);
        this.playlist.appendChild(item);
      }
      idx++;
    }
  }
  initAudio() {
    this.currentSong = 0;
    this.volume = 1;

    this.audio = document.getElementById("audio");
  }
  loadAudio() {
    this.audioReady = false;
    this.playing = false;
    this.background.classList.add("loading");

    this.controls.prev.classList.add("disabled");
    this.controls.next.classList.add("disabled");
    this.controls.play.classList.add("disabled");

    switch (radios[this.currentSong].type) {
      case "audio/mpeg":
        this.audio.src = radios[this.currentSong].src;
        this.audio.load();
        break;
    }
    this.audio.oncanplay = () => {
      this.audio.oncanplay = undefined;
      this.playAudio();
    };
  }
  playAudio() {
    this.audioReady = true;
    this.playing = true;

    this.background.classList.remove("loading");
    this.title.innerHTML = radios[this.currentSong].title;

    this.controls.prev.classList.remove("disabled");
    this.controls.next.classList.remove("disabled");
    this.controls.play.classList.remove("disabled");

    this.controls.play.getElementsByTagName("i")[0].classList.remove("fa-play");
    this.controls.play.getElementsByTagName("i")[0].classList.add("fa-pause");

    this.audio.play();
  }
}

window.onload = () => {
  // eslint-disable-next-line no-unused-vars
  window.app = new App();
};
