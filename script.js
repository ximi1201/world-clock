function updateTime() {
  let losAngelesElement = document.querySelector("#LA");
  if (losAngelesElement) {
    let laDateElement = losAngelesElement.querySelector(".date");
    let laTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = losAngelesTime.format("MMMM D YYYY");
    laTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#syd");
  if (sydneyElement) {
    let sydDateElement = sydneyElement.querySelector(".date");
    let sydTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydDateElement.innerHTML = sydneyTime.format("dddd, MMMM D YYYY");
    sydTimeElement.innerHTML = sydneyTime.format(
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
            <div class="date">${cityTime.format("MMMM D YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
    </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
