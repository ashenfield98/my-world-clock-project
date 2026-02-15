function updateTime() {
  // sydney

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateElement = sydneyElement.querySelector(".date");

    let sydneyFormat = moment().tz("Australia/Sydney");

    sydneyTimeElement.innerHTML = `${sydneyFormat.format("h:mm:ss [<small>]A[</small>]")}`;
    sydneyDateElement.innerHTML = `${sydneyFormat.format("MMMM Do YYYY")}`;
  }
  // amsterdam

  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamDateElement = amsterdamElement.querySelector(".date");

    let amsterdamFormat = moment().tz("Europe/Amsterdam");

    amsterdamTimeElement.innerHTML = `${amsterdamFormat.format("h:mm:ss [<small>]A[</small>]")}`;
    amsterdamDateElement.innerHTML = `${amsterdamFormat.format("MMMM Do YYYY")}`;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>
        <a href="/">All cities</a>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
