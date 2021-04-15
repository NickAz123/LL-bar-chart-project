//DOCUMENT TRIGGERS
$("document").ready(function () {
  $("#generatebars").on("click", generateChart);
  // $("#generate").on("click", printGraph);
  console.log("ready")
})

//MAIN FUNCTION
let generateChart = function (ev) {
  let data = Array.from(document.querySelectorAll('.databox')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
  let options = Array.from(document.querySelectorAll('.databox2')).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
  let element = Array.from(document.querySelectorAll("#bars"));
  drawBarChart(data, options, element);
}

//DRAWING CHART FUNCTION
let drawBarChart = function (data, options, element) {

  //Create maximum value
  let maximum;
  if (options.xaxismax != "") {
    maximum = options.xaxismax;
  } else {
    maximum = 100;
  }

  //Set Bar Names
  $("#bar1text").contents()[0].textContent = data.bar1name;
  $("#bar2text").contents()[0].textContent = data.bar2name;
  $("#bar3text").contents()[0].textContent = data.bar3name;
  $("#bar4text").contents()[0].textContent = data.bar4name;
  $("#bar5text").contents()[0].textContent = data.bar5name;

  //Set Bar Values
  $("#bar1text span:nth-child(2)").animate({"width": ((data.bar1amount / maximum) * 100) + "%"})
  $("#bar2text span:nth-child(2)").animate({"width": ((data.bar2amount / maximum) * 100) + "%"});
  $("#bar3text span:nth-child(2)").animate({"width": ((data.bar3amount / maximum) * 100) + "%"});
  $("#bar4text span:nth-child(2)").animate({"width": ((data.bar4amount / maximum) * 100) + "%"});
  $("#bar5text span:nth-child(2)").animate({"width": ((data.bar5amount / maximum) * 100) + "%"});

  //Set Bar Colors
  $("#bar1text span:nth-child(2)").css("background-color", options.bar1color);
  $("#bar2text span:nth-child(2)").css("background-color", options.bar2color);
  $("#bar3text span:nth-child(2)").css("background-color", options.bar3color);
  $("#bar4text span:nth-child(2)").css("background-color", options.bar4color);
  $("#bar5text span:nth-child(2)").css("background-color", options.bar5color);
}
