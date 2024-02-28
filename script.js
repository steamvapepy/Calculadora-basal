const button = document.getElementById("calcular");
const input = document.getElementById("peso");
const RES = document.getElementById("resultado");
button.addEventListener("click", calcularDosisDeHidratacion);
input.addEventListener("click", () => {
  RES.style.display = "none";
});
function calcularDosisDeHidratacion() {
  const PESO = Number(input.value);

  if (PESO <= 30) {
    console.log(hollidaySegar(PESO));
    let resultado = hollidaySegar(PESO);
    let mm = hollidaySegar(PESO) * 1.5;
    let mante = hollidaySegar(PESO) / 24;
    RES.innerHTML = `<p>mantenimiento ${resultado}</p>`;
    RES.innerHTML += `<p>+medio ${mm}</p>`;
    RES.innerHTML += `<p> cc/hr ${mante}</p>`;
    RES.style.display = "block";
  } else {
    let resultado = superficieCorporal(PESO);
    RES.innerHTML = `<p>sc*1500= ${ Math.round(resultado*1500) }</p>`;
    RES.innerHTML += `<p>sc*2000= ${ Math.round(resultado*2000)}</p>`;
    RES.style.display = "block";
  }

}

function hollidaySegar(PESO) {
  if (PESO <= 10) {
    return PESO * 100;
  } else if (PESO <= 20) {
    return 1000 + (PESO - 10) * 50;
  } else if (PESO <= 30) {
    return 1000 + 500 + (PESO - 20) * 20;
  }

  
}

function superficieCorporal(PESO) {
  return (PESO * 4 + 7) / (PESO + 90);
}


