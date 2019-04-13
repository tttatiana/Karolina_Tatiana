$(".country").hover(function(){
  //If hovered

  //Set BG image
  var country_code = $(this).attr('id');
  var image = country_code + ".jpg";
  $(".bg-image").css("background-image", 'url("resources/images/countries/' + image + '")');
  // alert(image);

  var country_name = $(this).attr('name');
  $(".ft-title").text(country_name);
  $(".ft-description").text(country_name + " is a nice country. To get more lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam beatae consectetur inventore obcaecati carter. Click and read!");


  //if not hovered
  //https://stackoverflow.com/questions/2788950/jquery-if-not-hover
}, function () {
  $(".bg-image").css("background-image", 'url("resources/images/countries/BG2.jpg")');
  $(".ft-title").text("Instructions:");
  $(".ft-description").text("Hover country to see info about country. Press on country to see more information. Enjoy!");
});
