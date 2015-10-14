$("#slider").slider({
    max: 10
});

$("#slider").slider({
    min: 1
});


$("#slider").slider({
    slide: function (event, ui) {
        var selection = $("#slider").slider("value");
        console.log(selection);
        //Width and height
        var w = 500;
        var h = 50;

        //Data
var dataset = [[
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}],
   [{ "x_axis": 50, "y_axis": 31, "radius": 10, "color" : "green" },
   { "x_axis": 20, "y_axis": 20, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 50, "color" : "red"}],
   [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}],
   [{ "x_axis": 50, "y_axis": 31, "radius": 10, "color" : "green" },
   { "x_axis": 20, "y_axis": 20, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 50, "color" : "red"}],
   [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}],
   [{ "x_axis": 50, "y_axis": 31, "radius": 10, "color" : "green" },
   { "x_axis": 20, "y_axis": 20, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 50, "color" : "red"}],
   [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}],
   [{ "x_axis": 50, "y_axis": 31, "radius": 10, "color" : "green" },
   { "x_axis": 20, "y_axis": 20, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 50, "color" : "red"}],
   [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}],
   [{ "x_axis": 50, "y_axis": 31, "radius": 10, "color" : "green" },
   { "x_axis": 20, "y_axis": 20, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 50, "color" : "red"}]
   ];

        pushdata = dataset[selection-1];

          
	
var circles = svgContainer.selectAll("circle")
                          .data(pushdata);
						  
						  circles
                          .enter()
                          .append("circle");
						  
						  console.log(pushdata); 

var circleAttributes = circles
						//.transition()
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });
					   
           
    }
});

var svgContainer = d3.select("#time-chart")
									 .append("svg")
                                     .attr("width", 300)
                                     .attr("height", 300);	 
