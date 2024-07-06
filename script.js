function updateTime() {
  let losAngelesElement = document.querySelector("#LA");
  if (losAngelesElement) {
    let laDateElement = losAngelesElement.querySelector(".date");
    let laTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    laTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#syd");
  if (sydneyElement) {
    let sydDateElement = sydneyElement.querySelector(".date");
    let sydTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
    sydTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaDateElement = singaporeElement.querySelector(".date");
    let singaTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaDateElement.innerHTML = singaporeTime.format("dddd, MMMM Do YYYY");
    singaTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2> ${cityName} </h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">All cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
