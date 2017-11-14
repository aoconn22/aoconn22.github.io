var projects = [
	{"name": "Chicago Food Inspection Search", "display": false, "description" : "A project using AJAX, Bootstrap, and Google Maps API to search the City of Chicago Dataset for food inspection results based on user inputted search requirements.", "technologies": "AJAX, Responsive Design, Material Components", "url" : "https://aoconn22.github.io/IT202/project3/"},
	{"name": "Raining Ball Game", "display" : true ,"description" : "A simple game using Canvas, Request Animation Frame, and collision detection. Collide with the green ball to get points and collide with the red ball to receive damage.", "technologies": "Canvas, Request Animation Frame", "url" : "https://aoconn22.github.io/IT202/ballgame/"},
	{"name": "Progressive Weather App", "display" : true ,"description" : "A progressive web app which uses AJAX and service workers to allow for an offline weather app that displays the most recently cached weather data.", "technologies": "Ajax, Responsive Design, Service Workers, Material Components", "url" : "https://aoconn22.github.io/IT202/project5/"},
	{"name": "Air Horn Progressive Web App", "display" : true ,"description" : "A progressive web app which uses service workers and air horn sounds to honk the horn every time the button is pressed", "technologies": "Service Workers, Responsive Design, Material Components", "url" : "https://aoconn22.github.io/IT202/project7/"}


];
console.log(projects);
$.each(projects, function(i,v){
                var clone = $("#template").clone();
                
                clone.find("#name").text(v.name);
                
                clone.find("#description").text(v.description);
                
                clone.find("#url").attr("href", v.url);
                clone.find("#url").text(v.url);
                
                clone.find("#divider").text("--------------------------------------------------------");
                
                $("#final").append(clone);
            });