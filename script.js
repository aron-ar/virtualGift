const $mensaje = document.getElementById("mensaje");
const $buenosDeseos = document.getElementById("buenosDeseos");
const $voluntariado = document.getElementById("voluntariado");
const $modal = document.getElementById("modal");
const $overlay = document.getElementById("overlay");

$mensaje.addEventListener("click", () => {
  window.scroll(0, 0);
  $overlay.classList.add("active");
  $modal.style.animation = "modalIn .8s forwards";
  const HTMLString = templateMensaje;
  const playElement = createTemplate(HTMLString);
  $modal.replaceChildren(playElement);
});

$buenosDeseos.addEventListener("click", () => {
  window.scroll(0, 0);
  $overlay.classList.add("active");
  $modal.style.animation = "modalIn .8s forwards";
  const HTMLString = templateBuenosDeseos;
  const playElement = createTemplate(HTMLString);
  $modal.replaceChildren(playElement);
});

$voluntariado.addEventListener("click", () => {
  window.scroll(0, 0);
  $overlay.classList.add("active");
  $modal.style.animation = "modalIn .8s forwards";
  const HTMLString = templateVoluntariado;
  const playElement = createTemplate(HTMLString);
  $modal.replaceChildren(playElement);
});

function hideModal() {
  $modal.style.animation = "modalOut .8s forwards";
  $overlay.classList.remove("active");
}
$overlay.addEventListener("click", hideModal);

function templateMensaje() {
  return `
      <div class="description-element">
        <h1 class="titulo">Mensaje navideño</h1>
        <p class="mensaje">
          Esta navidad es atípica y todos la pasaremos diferente manera, pero no
          se pierde las ganas y entusiasmo de compartir con nuestra familia y
          amigos ya sea por las formas tradicionales o las nuevas formas que nos
          ha enseñado esta epoca a través de la tecnologia. <br />
          <span>
            🎄 ¡Feliz Navidad! 🎄 <br />
            Te deseo a ti y toda tu familia...
          </span>
        </p>
      </div>
  `;
}

function templateBuenosDeseos() {
  return `
  <div class="description-element">
    <h1 class="titulo">Buenos deseos</h1>
    <p class="mensaje">
      Treyci este año no se si de casualidad o por cosas del destino me
      permitió conocerte un poco más que en la universidad y bueno te deseo
      lo mejor: <br />
      Que cumplas todas tus metas 🙌 y sueños 💫<br />
      Que sigas viajando 🛫🛬🚀 por todo el mundo 🌎🗼🗽🏯🎡🗿🌃🌉🌁🎑<br />
      Que tengas muchos exitos profesionales 👩‍🎓👷‍♀️<br />
      Que tu amor por los animales siga creciendo 🐶🐱 ya que son criaturas
      que necesitan muchas veces eso <br />
      Y que nunca pares de hacer lo que te encanta 💃💃💃.
    </p>
  </div>
  `;
}

function templateVoluntariado() {
  return `
  <div class="description-element">
    <h1 class="titulo">Voluntariado</h1>
    <p class="mensaje">
      Terminar agradeciendo tu compromiso y el tiempo dedicado a el proyecto
      que inició con una idea pequeña y ahora es una organización que ya
      tiene reconocimientos, sin tu apoyo no hubieramos llegado hasta donde
      estamos ahora y seguiremos creciendo para cumplir con el proposito con
      el que inició nuestra organización. <br />
      Me siento muy feliz de trabajar con todo el equipo y que te hayas
      animado a ser parte de esto, es todo un honor trabajar junto a ti.
      <br />
      Fue muy divertido y todo un reto hacerte este regalo virtual 😁👍
      <br />
    </p>
  </div>
  `;
}

function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}
