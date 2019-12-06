$(document).ready(function(){
  $("form#favoritethings").submit(function(){
    event.preventDefault();

    var cat = $("input#catinput").val();
    var dog = $("input#doginput").val();
    var person = $("input#personinput").val();

    var favoriteThings = [cat,dog,person]

    var favoriteCats = []
    var favoriteDogs = []
    var favoritePeople = []

    favoriteCats.push(favoriteThings[0]);
    favoriteDogs.push(favoriteThings[1]);
    favoritePeople.push(favoriteThings[2]);

    $("ul#catlist").append('<li>' + favoriteCats[0] + '</li>');
    $("ul#doglist").append('<li>' + favoriteDogs[0] + '</li>');
    $("ul#peoplelist").append('<li>' + favoritePeople[0] + '</li>');


    console.log(cat);
    console.log(dog);
    console.log(person);
    console.log(favoriteThings);
    console.log(favoriteCats);
    console.log(favoriteDogs);
    console.log(favoritePeople);

  });
});
