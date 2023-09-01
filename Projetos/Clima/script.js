document.querySelector(".busca").addEventListener("submit", async (event) => {
  //preventDefault() - evita o comportamento padrão de um elemento. Se usado
  // em um form , ele impede o envio (submit)
    event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    clearInfo();
    showWarning("Carregando...");
  }

  // apiKey -Forma simplificada de autenticação que fornece o acesso seguro de um sistema em uma web API
  let apiKey = "d06cdb298fafc83c520d5ab677fc477e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input
  )}&appid=${apiKey}&units=metric&lang=pt_br`;

  /**
   * @param - Faz uma solicitação a API de previsão do tempo, analisa a resposta 
   *  como JSON e, com base no código de resposta 'cod', exibe informações de previsão
   *  do tempo usando a função showInfo() se o código for 200 (indicando uma resposta
   *  bem-sucedida), ou limpa informações anteriores e exibe uma mensagem de aviso
   *  usando as funções clearInfo() e showWarning() caso contrário.
   */
  let results = await fetch(url);
  let json = await results.json();

  if (json.cod === 200) {
    showInfo({
      name: json.name,
      country: json.sys.country,
      temp: json.main.temp,
      tempIcon: json.weather[0].icon,
      windSpeed: json.wind.speed,
      windAngle: json.wind.deg,
    });
  } else {
    clearInfo();
    showWarning("Não encontramos esta localização");
  }
});

/**
 * @param {function} showInfo - E responsável por exibir informações
 *  de previsão do tempo com base no objeto JSON passado como argumento.
 *  Ela limpa qualquer aviso anterior, atualiza o nome da cidade e país,
 *  a temperatura, o ícone do tempo, a velocidade do vento e o ângulo do
 *  vento na página HTML, usando os valores do objeto JSON. Além disso,
 *  torna visível o elemento com a classe .resultado para exibir as informações
 *  atualizadas. 
 */
function showInfo(json) {
  showWarning("");

  document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
  document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>Cº</sup>`;
  document.querySelector(
    ".ventoInfo"
  ).innerHTML = `${json.windSpeed} <span>km/h</span>`;

  document
    .querySelector(".temp img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.tempIcon}.png`
    );

  document.querySelector(
    ".ventoPonto"
  ).style.transform = `rotate(${json.windAngle}deg)`;

  document.querySelector(".resultado").style.display = "block";
}

/**
 * @param {Function} clearInfo - Essa fução limpa o campo interno
 * de avisos, e esconde a div resultado 
 */
function clearInfo() {
  showWarning("");
  document.querySelector(".resultado").style.display = "none";
}

/**
 * @param {Function} showWarning - Essa fução exibe avisos que 
 * são redirecionados a ela
 */
function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}