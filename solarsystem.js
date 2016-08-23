var SolarSystem = (function(newSolarSystem)) {
  var planets = ["mercury"];
  var ActiveSpacecraft = ["Voyager I"];
  var PlanetsLandedOn = 0;

  return{
      lastModified: new Date(),
      getPlanets: function(){
        return planets;
    },
    setPlanets: function(newPlanets){
      planets.push(newPlanets);
    },
    getActiveSpacecraft: function(){
      return activeSpacecraft;
    },
    setActiveSpacecraft: function(newActiveSpacecraft){
      activeSpacecraft.push(newActiveSpacecraft);
    },
    getPlanetsLandedOn: function(){
      return PlanetsLandedOn;
    },
    setPlanetsLandedOn: function(numLandedOn){
      PlanetsLandedOn.push(numLandedOn);
    }

  }

})();

