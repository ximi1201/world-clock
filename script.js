function updateTime() {
  let losAngelesElement = document.querySelector("#LA");
  let laDateElement = losAngelesElement.querySelector(".date");
  let laTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  laDateElement.innerHTML = losAngelesTime.format("dddd, MMMM D YYYY");
  laTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#syd");
  let sydDateElement = sydneyElement.querySelector(".date");
  let sydTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydDateElement.innerHTML = sydneyTime.format("dddd, MMMM D YYYY");
  sydTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
