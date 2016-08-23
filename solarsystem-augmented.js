//getter/setter for closets stars to sun
//getter/setter for age of solar system
//getter/setter for know drawf planets



var SolarSystem = (function(newSolarSystem) {
 //newSolarSystem.greeting = "hello";
 var closestStars = [Alpha];
 var ageSolarSystem = 0;
 var drawfPlanets = ["Pluto"];

newSolarSystem.getClosestStars = function(){
  return closest_stars;
};
newSolarSystem.setClosestStars = function(newClosestStars){
    closestStars.push(newClosestStars);
  };


 newSolarSystem.getAgeofSolarSystem = function(){
  return ageofSolarSystem;
}; 
newSolarSystem.setAgeofSolarSystem = function(newAge){
     ageofSolarSystem = newAge;
  };



newSolarSystem.getDwarfPlanets = function(){
  return drawfPlanets;
};

newSolarSystem.setDwarfPlanets = function(newDrawfPlanets){
  drawfPlanets.push(newClosestStars);
};


    

newSolarSystem.greeting = "hello";
  return newSolarSystem;
};



})(SolarSystem || {});



