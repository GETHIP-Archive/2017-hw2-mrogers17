$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-mrogers17/master/mc.json", function(data){
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $("#highschool").text(data.highschool);
    $.each(data.nickNames, function(key, value){
      $("#nicknames").append("<li>" + value.nick + "</li>");
    });

  });
});
