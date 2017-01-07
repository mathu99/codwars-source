var GeneticAlgorithm = function () {};

populationSize = 100;

GeneticAlgorithm.prototype.generate = function(length) {
    var str = "";
    for (i = 0; i < length; i++){
      str += Math.random()*1 > 0.5 ? "1" : "0";
    }
    return str;
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
    var totalFitness = 0;
    for (let x = 0; x < fitnesses.length; x++){
      totalFitness += fitnesses[x];
    }
    
    var prevProb = 0;
    var rouletteWheel = [];
    for (let x = 0; x < population.length; x++){
      rouletteWheel[x] = prevProb + (fitnesses[x] / totalFitness);
      prevProb = rouletteWheel[x];
    }
    
    var selection = [];
    for (var a = 0; a < 2; a++) {
      var rand = Math.random();
      var i = 0;
      while(rand > rouletteWheel[i]){
        ++i;
      }
      selection.push(population[i])
    }
    return selection;
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  var newChrom = "";
  for (i = 0; i < chromosome.length; i++){
    if (Math.random() < p){
      newChrom += chromosome[i] == '1' ? '0' : '1';  //flip bit
    }else{
      newChrom += chromosome[i];
    }
  }
  return newChrom;
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
  var splitPoint = Math.floor((Math.random() * chromosome1.length));
  var bin1 = chromosome1.substr(0, splitPoint) + chromosome2.substr(splitPoint, chromosome2.length);
  var bin2 = chromosome2.substr(0,splitPoint) + chromosome1.substr(splitPoint, chromosome2.length);
  chromosome1 = bin1;
  chromosome2 = bin2;
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  let population = [], fitnesses = [];
  for (let i = 0; i < populationSize; i++) {
    var node = this.generate(length);
    population.push(node);
    fitnesses.push(fitness(node));
  }
  for (let i = 0; i < 500; i++) {
    var newPopulation = [], newFitnesses = [];
    for (let x = 0; x < populationSize/2; x++) { 
      var selection = this.select(population, fitnesses);
      if (Math.random() <= p_c) {
        this.crossover(selection[0], selection[1]);
      }
      if (Math.random() <= p_c) {
        this.crossover(selection[0], selection[1]);
      }
      selection[0] = this.mutate(selection[0], p_m);
      selection[1] = this.mutate(selection[1], p_m);
      newPopulation.push(selection[0]);
      newPopulation.push(selection[1]);
      newFitnesses.push(fitness(selection[0]));
      newFitnesses.push(fitness(selection[1]));
    }
    population = newPopulation;
    fitnesses = newFitnesses;
  }
  
  var returnStr = '';
  var best = 0;
  for(var i = 0; i < populationSize; i++) {
      if(fitness(population[i]) > best) {
        returnStr = population[i];
        best = fitness(population[i]);
      }
  }
  return returnStr;
};