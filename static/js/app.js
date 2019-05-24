// Use D3 to select the table
// var UFOtable = d3.select("#ufo-table");

// // Use d3 to create a bootstrap striped table
// // http://getbootstrap.com/docs/3.3/css/#tables-striped
// UFOtable.attr("class", "table table-striped");


// log the data from data.js
console.log(data);

var tbody = d3.select("tbody");

data.forEach(
    (sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(
            ([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
    });
  });


var filter_button = d3.select("#filter-btn");

filter_button.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get a reference to the input element on the page with the id property set to 'datetime'
    var inputField = d3.select("#datetime");
    var dateValue = inputField.property("value");
    
    console.log(dateValue);

    var filteredData = data.filter(sighting => sighting.datetime === dateValue);

    console.log(filteredData);

    tbody.html("")

    filteredData.forEach(
      (sighting) => {
          var row = tbody.append("tr");
          Object.entries(sighting).forEach(
              ([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
      });
    });

    });
