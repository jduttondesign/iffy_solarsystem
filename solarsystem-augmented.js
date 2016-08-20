var SolarSystem = (function(newSolarSystem)) {
  var planets = ["mercury"];
  var ActiveSpacecraft = ["Voyager I"];
  var PlanetsLandedOn = 0;



  return{
    lastModified: new Date(),
    getPlanets: function(){
      return planets;
    },
    setPlanets: function(newPlanet){
      planets.push(newPlanet);
    },
    getActiveSpacecraft: function(){
      return activeSpacecraft;
    },
    setActiveSpacecraft: function(newActiveSpacecraft){
      planets.push(ActiveSpacecraft);
    },
    getPlanetsLandedOn: function(){
      return PlanetsLandedOn;
    },
    setPlanetsLandedOn: function(numLandedOn){
      planets.push(numLandedOn);
    }

  }

})();




  return newSolarSystem;


})(SolarSystem || {});