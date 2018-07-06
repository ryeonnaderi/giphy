//  the words in the array should have buttons 
// when clicking on the buttons then the non animated giphys should pop up and the rating for it.
// when the next button is clicked then the new giphys should take its place
// 


var words =["incredibles 2", "deadpool 2", "war dogs","rush hour","21 jumpstreet"];
function makingBtn ()
{
    for(var i; i<words.length;i++)
    {
        var buttons = $("<buttons>");
        buttons.addClass("giphy");
        buttons.attr("words");
        buttons.attr("data-name",words[i]);
        buttons.text(words[i]);
        $("giphy-view").append(buttons);
    }
}



