//DOCUMENT TRIGGERS
$("document").ready(function () {
  $("#generatebars").on("click", generateChart);
  // $("#generate").on("click", printGraph);
  console.log("ready")
})

let generateChart = function (ev) {
  let data = Array.from(document.querySelectorAll('.databox')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
  let datalength = Object.keys(formObject).length;s

  drawBarChart(data, options, element);

  for (let i = 0; i < data.length; i++) {

  }
  $("#bar1text").contents()[0].textContent = data.bar1name;
  $("#bar2text").contents()[0].textContent = data.bar2name;
  $("#bar3text").contents()[0].textContent = data.bar3name;
  $("#bar4text").contents()[0].textContent = data.bar4name;
  $("#bar5text").contents()[0].textContent = data.bar5name;
}
