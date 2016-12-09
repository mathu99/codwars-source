function goodVsEvil(good, evil){
  var good = good.split(" ");
  var evil = evil.split(" ");
  var goodScore = 0;
  var evilScore = 0;
  for (i = 0; i < good.length; i++){
      switch(i){
        case 0 : { goodScore += +good[i]*1 } break;
        case 1 : { goodScore += +good[i]*2 } break;
        case 2 : { goodScore += +good[i]*3 } break;
        case 3 : { goodScore += +good[i]*3 } break;
        case 4 : { goodScore += +good[i]*4 } break;
        case 5 : { goodScore += +good[i]*10 } break;
      }
  }
  for (x = 0; x < evil.length; x++){
      switch(x){
        case 0 : { evilScore += +evil[x]*1 } break;
        case 1 : { evilScore += +evil[x]*2 } break;
        case 2 : { evilScore += +evil[x]*2 } break;
        case 3 : { evilScore += +evil[x]*2 } break;
        case 4 : { evilScore += +evil[x]*3 } break;
        case 5 : { evilScore += +evil[x]*5 } break;
        case 6 : { evilScore += +evil[x]*10 } break;
      }
  }
  return goodScore > evilScore ? "Battle Result: Good triumphs over Evil" : evilScore > goodScore ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field" 
}
