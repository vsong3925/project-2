d3.json("/home_values").then(data => {
    console.log(data)

    // create variables for two counties
    var county1 = "Lee County"; 
    var state1 = "FL"
    
    var county2 = "Arlington County";
    var state2 = "VA" 

    // filter data based on counties and states
    var result1 = data.filter(record => (record.RegionName == county1) & (record.State == state1))
    var result2 = data.filter(record => (record.RegionName == county2) & (record.State == state2))

    // console.log(result1)
    
    // select data for home values and years
    for (let result of result1) {
        var years_county1 = Object.keys(result).slice(5, 305)
        var values_county1 = Object.values(result).slice(5, 305);
    }

    for (let result of result2) {
        var years_county2 = Object.keys(result).slice(5, 305)
        var values_county2 = Object.values(result).slice(5, 305);
    }

    console.log(years_county1)

    // Plotly
    trace1 = {
        type: 'scatter',
        x: years_county1,
        y: values_county1,
        mode: 'lines',
        name: 'Red',
        line: {
          color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
      
      trace2 = {
        type: 'scatter',
        x: years_county2,
        y: values_county2,
        mode: 'lines',
        name: 'Blue',
        line: {
          color: 'rgb(55, 128, 191)',
          width: 1
        }
      };
      
      var layout = {
        width: 500,
        height: 500
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('myDiv', data, layout);
    

    // // an array of all the counties names
    // var regionName = data.map(r => r.RegionName)


});