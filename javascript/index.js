function updateTime() {
  let genevaElement = document.querySelector("#geneva");
  if (genevaElement) {
    let genevaDateElement = genevaElement.querySelector(".date");
    let genevaTimeElement = genevaElement.querySelector(".time");
    let genevaTime = moment().tz("Europe/Geneva");

    genevaDateElement.innerHTML = genevaTime.format("MMMM Do YYYY");
    genevaTimeElement.innerHTML = genevaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let beirutElement = document.querySelector("#beirut");
  if (beirutElement) {
    let beirutDateElement = beirutElement.querySelector(".date");
    let beirutTimeElement = beirutElement.querySelector(".time");
    let beirutTime = moment().tz("Asia/Beirut");

    beirutDateElement.innerHTML = beirutTime.format("MMMM Do YYYY");
    beirutTimeElement.innerHTML = beirutTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

let cityInterval;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let citiesElement = document.querySelector(".cities");

  if (!cityTimeZone) {
    if (cityInterval) {
      clearInterval(cityInterval);
      cityInterval = null;
    }

    citiesElement.innerHTML = `
      <div class="city" id="geneva">
        <div>
          <h2>Geneva 🇨🇭</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="london">
        <div>
          <h2>London 🇬🇧</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="beirut">
        <div>
          <h2>Beirut 🇱🇧</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="tokyo">
        <div>
          <h2>Tokyo 🇯🇵</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="toronto">
        <div>
          <h2>Toronto 🇨🇦</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
      </div>
    `;
    updateTime();
    return;
  }

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  if (cityInterval) {
    clearInterval(cityInterval);
  }

  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} 
          <small>${cityTime.format("A")}</small>
        </div>
      </div>
      <a href="/" id="home-link"> ← All Cities</a>
    `;
  }

  updateSelectedCityTime();
  cityInterval = setInterval(updateSelectedCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesChosenElement = document.querySelector("#city");
citiesChosenElement.addEventListener("change", updateCity);
