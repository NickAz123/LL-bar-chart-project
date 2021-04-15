//DOCUMENT TRIGGERS
$("document").ready(function () {
  $("#generatebars").on("click", generateChart);
  console.log("ready")
})

//MAIN FUNCTION
let generateChart = function (ev) {
  //These functions take form information and store them in key value pairs in an object
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

  //Set Graph Title Options
  $("h3").contents()[0].textContent = options.graphtitle;
  $("h3").css("color", options.titlecolor);

  if($("#titlesize").val()==="smalltitle"){
    $("h3").css("font-size", "30px");
  }
  if($("#titlesize").val()==="mediumtitle"){
    $("h3").css("font-size", "60px");
  }
  if($("#titlesize").val()==="largetitle"){
    $("h3").css("font-size", "80px");
  }
  if($("#titlesize").val()==="xlargetitle"){
    $("h3").css("font-size", "100px");
  }

  //Set Graph Axis
  $("h4").contents()[0].textContent = options.yaxisname;
  $("h5").contents()[0].textContent = options.xaxisname;

  //Set Bar Names
  $("#bar1text").contents()[0].textContent = data.bar1name;
  $("#bar2text").contents()[0].textContent = data.bar2name;
  $("#bar3text").contents()[0].textContent = data.bar3name;
  $("#bar4text").contents()[0].textContent = data.bar4name;
  $("#bar5text").contents()[0].textContent = data.bar5name;

  //Set Bar Values w/ animation
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

  //Set Bar Heights
  $("#bar1text").animate({"height": options.bar1height + "px"});
  $("#bar2text").animate({"height": options.bar2height + "px"});
  $("#bar3text").animate({"height": options.bar3height + "px"});
  $("#bar4text").animate({"height": options.bar4height + "px"});
  $("#bar5text").animate({"height": options.bar5height + "px"});
}
