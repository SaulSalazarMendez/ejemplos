/** @type {HTMLVideoElement} */
const videoElem = document.getElementById("video");
const botonAccion = document.getElementById("start");
const descarga = document.getElementById("descarga");

const fondoAudio = null;
const estatus = {
  libre: 0,
  intro: 1,
  ocupado: 2,  
}

var estadoBoton = 0;

// Options for getDisplayMedia()

var displayMediaOptions = {  
  video: true,
  audio: true
};

var options = {mimeType: 'video/webm; codecs=vp9'};
var mediaRecorder = null;
var recordedChunks = [];
/**@type {MediaStream} */
var mediaSource;

var audioSource = null;


// Set event listeners for the start and stop buttons
botonAccion.addEventListener("click", function(evt) {   
  if (estadoBoton == estatus.libre) {
    startCapture();
  } else {
    stopCapture();
  }
}, false);

descarga.addEventListener("click", function(evt) {
    descargaVideo();
  }, false);

function showTextoRegresivo() {
  setTimeout(() => {
    botonAccion.innerHTML = 'Comienza en 3';
  }, 500);
  setTimeout(() => {
    botonAccion.innerHTML = 'Comienza en 2';
  }, 1000);
  setTimeout(() => {
    botonAccion.innerHTML = 'Comienza en 1';
  }, 1500);
  setTimeout(() => {
    botonAccion.innerHTML = 'Comienza ya';
  }, 2000);
}

async function startCapture() {    
    videoElem.innerHTML = '';
    videoElem.pause();
    videoElem.load();
    let audio = new Audio('./assets/sonido.mp3');      
    try {
      recordedChunks = [];
      await initAudio();
      mediaSource = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);      
      mediaRecorder = new MediaRecorder(mediaSource, options);
      mediaRecorder.ondataavailable = handleDataAvailable;
      let indiceTrackVideo = 0;
      if (audioSource) {
        mediaSource.addTrack(audioSource.getTracks()[0]);
        indiceTrackVideo = 1;
      }
      
      audio.play();      
      estadoBoton = estatus.intro;
      showTextoRegresivo();      
      //agregar esto para cada track del media source
      mediaSource.getTracks()[indiceTrackVideo].addEventListener('ended', ev => {
        console.log('fin');
      });       
      audio.addEventListener('ended', ev => {
        if (estadoBoton == estatus.intro) {                    
          mediaRecorder.start();
          estadoBoton = estatus.ocupado;
          botonAccion.innerHTML = 'Parar';
          botonAccion.classList.add('grabando');          
        }
      });
    } catch(err) {      
        if(audioSource) {
          audioSource.getTracks()[0].stop();
        }
        console.error("Error: " + err);
        audio.pause();
        audio.load();
        estadoBoton = estatus.libre;
    }
}

function handleDataAvailable(event) {  
    if (event.data.size > 0) {
      recordedChunks.push(event.data);      
      showVideo();
      stopCapture();
    }
}

function stopCapture(evt) {      
    for(let track of mediaSource.getTracks()){
      track.stop();
    }
    estadoBoton = estatus.libre;
    botonAccion.innerHTML = 'Grabar';
    botonAccion.classList.remove('grabando');    
}

function showVideo() { 
    var blob = new Blob(recordedChunks, {
        type: 'video/webm'
    });       
    var url = URL.createObjectURL(blob);    
    videoElem.innerHTML = `
    <source src="${url}" type="video/webm" >
    `;
    videoElem.load();
}

function descargaVideo() {
    var blob = new Blob(recordedChunks, {
        type: 'video/webm'
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'test.webm';
      a.click();
      window.URL.revokeObjectURL(url);
}

function initAudio() {
  const microfono = document.querySelector('#microfono');
  if (!microfono.checked) {
    return new Promise((resolve, reject) => {
      audioSource = null;
      resolve(null);      
    });
  }
  return navigator.mediaDevices.getUserMedia (
    // constraints - only audio needed for this app
    {
       audio: true
    })

    // Success callback
    .then(function(stream) {
      audioSource = stream;
    })

    // Error callback
    .catch(function(err) {
       console.log('Error de audio: ' + err);
    }
 );
}
