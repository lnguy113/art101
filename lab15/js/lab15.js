// index.js - Lab 15: AJAX
// Author: Lily Nguyen
// Date: 31 May 2023

// Constants

// Functions
URL = "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry"

// attach click action to button
$('#action').click(function()
{
    $.ajax({
        url: URL,
        type: "GET",
    })

    // If the request succeeds
    .done(function(data) {
        console.log(data);
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        $("#title").html(data.title)
        $("#output").append("<img src=" + data.url + ">");
        $("#output").append("<p>" + data.explanation);

    })
});

id:1
name:"cheri"
growth_time:3
max_harvest:5
natural_gift_power:60
size:20
smoothness:25
soil_dryness:15
name:"soft"
url:"https://pokeapi.co/api/v2/berry-firmness/2/"
potency:10
name:"spicy"
url:"https://pokeapi.co/api/v2/berry-flavor/1/"
name:"cheri-berry"
url:"https://pokeapi.co/api/v2/item/126/"
name:"fire"
url:"https://pokeapi.co/api/v2/type/10/"
