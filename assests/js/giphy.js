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

    $(document).on("click", ".giphy", function (event) {
        $("#images").empty();
        var word = $(this).attr("data-name");
        var queryURl = "http://api.giphy.com/v1/gifs/search?q=" + word  + "&api_key=2P35x6Bb2Gs5VQh6CspSeGBJwJIGjhYT&limit=10";
        console.log("button is clicked");
        $.ajax({
            url: queryURl,
            method: "GET"
        }).then(function (response) {
         
            console.log(response);
            for(var i = 0; i<response.data.length;i++)
            {
            var image = $("<img>");
             var stillUrl = response.data[i].images.fixed_height_still.url;
             var animatedUrl = response.data[i].images.fixed_height.url;
             console.log(stillUrl,animatedUrl);
             image.addClass("giphy-image");
             image.attr("src", stillUrl);
             image.attr("data-motion",animatedUrl); 
             image.attr("data-still",stillUrl)
             $("#images").append(image);
             
             
            }
            
           
        });
    });

    $(document).on("click", ".giphy-image", function (event) 
    {
        
         var still = $(this).attr("data-still");
         var animate = $(this).attr("data-motion");
        // $(this).attr("src",animate);
         var src = $(this).attr("src")
        
         if (state === "still") {
            $(this).attr("src", $(this).attr("data-motion"));
             $(this).attr("src", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
             $(this).attr("src", "still");
          }




          
        // if(src === still)
        // {
        //     $(this).attr("src"), $(this).attr("");
        // }
        // else
        // {
        //     $(this).attr(src) ==  $(this).attr(still);
        // }

    });
    // $(document).on("click", ".giphy-image", function (event) 
    // {
    //    
    //     $(this).attr("src",still);
    // });

});