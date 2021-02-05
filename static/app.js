d3.json("/home_values").then(data => {
    console.log(data)

    var county1 = "Lee County"; 

    var result = data.filter(record => {
        record.RegionName == county1

        console.log(result)
    })

    console.log(result)



    // // array of region names
    // var regionName = data.map(r => r.RegionName);
       
    // var filteredData = data.filter(regionName == "Lee County")


})