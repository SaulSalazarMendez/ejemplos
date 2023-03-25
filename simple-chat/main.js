import {contesto} from './contesto.js';

const api_key = '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';



const url = "https://api.openai.com/v1/completions";
let anteriorPregunta = '';
let anteriorRespuesta = '';
const div = document.querySelector('.salida');

const entrada = document.querySelector('#entrada');
const btn = document.querySelector('button');
const chat = document.querySelector('.input-chat');


function reemplazaLinks(cad){
  const exp = /(?:(?:https)?:\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/ig;
  return cad.replace(exp,"<a href='$&' target='_blank'>$&</a>");
}

function generaOptons(pregunta){


  const data = {
      prompt: contesto + '\n cliente: '+ pregunta ,
      temperature: 0.5,
      max_tokens: 2000,
      model: 'text-davinci-002'
  }

  return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      },
      body: JSON.stringify(data)
  };
}

function peticion(pregunta){
    div.innerHTML += `<p class="message pregunta">${pregunta}</p></div>`;
    entrada.value = '';
    fetch (url, generaOptons(pregunta)).then(res => res.json())
    .then(data => {
        anteriorRespuesta = data.choices[0].text;
        anteriorRespuesta = reemplazaLinks(anteriorRespuesta);
        div.innerHTML += `<p class="message respuesta">${anteriorRespuesta}</p>`;
        chat.scrollIntoView({
            behavior: "smooth",
        });
        entrada.focus();
    }).catch((err) => {

    });
}



btn.addEventListener('click',() => {
  peticion(entrada.value);
  entrada.value = '';
});

console.log('listo');
