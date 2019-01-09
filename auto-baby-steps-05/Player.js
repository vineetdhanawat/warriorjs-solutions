class Player {

  constructor() {
    this.health = 20; // MAX_HEALTH
  }

  playTurn(warrior) {
    // Cool code goes here.
    if(warrior.feel().isEmpty()) {
      if(this.isInjured(warrior) && !this.underAttack(warrior)) {
        warrior.rest()
      } else {
        warrior.walk()
      }
    } else if (warrior.feel().getUnit().isBound()) {
      warrior.rescue()
    }
    else {
      warrior.attack()
    }
    this.health = warrior.health()
  }

  underAttack(warrior) {
     if(warrior.health() < this.health){
       return true
     }
     return false;
   }

  isInjured(warrior) {
    return warrior.health() < warrior.maxHealth();
  }
}
