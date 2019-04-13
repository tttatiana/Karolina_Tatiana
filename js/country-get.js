
//Get country from ID
//https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href;
var url = new URL(url_string);
var Country = url.searchParams.get("country");
console.log(Country);



$(function () {
    //Placing text in empty space
    $("title").text(Country);
    $("#country-title").text(Country);
    $("#country-history").text("Some history about " + Country);
    $("#country-interesting").text("Interesting facts about " + Country);
    $("#country-news").text("News from " + Country);

    //Change source of the video
    //https://stackoverflow.com/questions/3983036/how-do-you-change-video-src-using-jquery
    $(".video-container video source").attr('src', "resources/videos/" + Country + ".mp4");
    $(".video-container video")[0].load();


    //redirects back
    //https://stackoverflow.com/questions/3646914/how-do-i-check-if-file-exists-in-jquery-or-pure-javascript
    $.ajax({
        url:"resources/videos/" + Country + ".mp4",
        type:'HEAD',
        error: function()
        {
            //file doesn't exist
            //https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage?page=2&tab=Votes
            $(window).attr("location","main_page.html");
        },
        success: function()
        {
            //file exists
        }
    });
});
