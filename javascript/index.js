function updateTime() {
  let genevaElement = document.querySelector("#geneva");
  if (genevaElement) {
    let genevaDateElement = genevaElement.querySelector(".date");
    let genevaTimeElement = genevaElement.querySelector(".time");
    let genevaTime = moment().tz("Europe/Geneva");

    genevaDateElement.innerHTML = genevaTime.format("MMMM	Do YYYY");
    genevaTimeElement.innerHTML = genevaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM	Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
