//  the words in the array should have buttons 
// when clicking on the buttons then the non animated giphys should pop up and the rating for it.
// when the next button is clicked then the new giphys should take its place




$(document).ready(function () {
    


    var animals = ["panda", "monkey", "tiger"];

    function makingBtn() {
        console.log("calling button");
        $("#giphy-view").empty();
        for (var i = 0; i < animals.length; i++) {
            var button = $("<button>");
            button.addClass("giphy");
            button.attr("data-name", animals[i]);
            button.text(animals[i]);
            $("#giphy-view").append(button);
            console.log("button has been made")
        }
    }


    $("#picture").on("click", function (event) {
        event.preventDefault();
        var animal = $("#input").val().trim();
        animals.push(animal);
        // console.log(animal);
        makingBtn();
    });

    makingBtn();

    $(".giphy").on("click", function (event) {
        var word = $(this).attr("data-name");
        var queryURl = "http://api.giphy.com/v1/gifs/search?q=" + word  + "&api_key=2P35x6Bb2Gs5VQh6CspSeGBJwJIGjhYT&limit=10";
        console.log("button is clicked");
        $.ajax({
            url: queryURl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.data[0].url);
            var url = response.data[0].url;
            image .attr ("src",url); 
            $image.append(image);
        })
    });

});