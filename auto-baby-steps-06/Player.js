class Player {

  constructor() {
    this.health = 20; // MAX_HEALTH
  }

  playTurn(warrior) {
    // Cool code goes here.

    if (this.isUnderAttack(warrior) && this.hasNotEnoughHealth(warrior)) {
      this.movement(warrior, 'backward')
    } else if(this.isUnderAttack(warrior)) {
      this.movement(warrior, 'forward')
    } else if(this.isInjured(warrior)) {
      warrior.rest()
    } else {
      this.movement(warrior, 'forward')
    }

    this.health = warrior.health()
  }

  movement(warrior, direction) {
    if (warrior.feel(direction).isEmpty()) {
      warrior.walk(direction)
    } else if (warrior.feel(direction).getUnit().isBound()) {
      warrior.rescue(direction)
    } else if(direction=='forward') {
      warrior.attack(direction)
    } else {
      warrior.rest()
    }
  }

  isUnderAttack(warrior) {
     if(warrior.health() < this.health){
       return true
     }
     return false;
   }

  isInjured(warrior) {
    return warrior.health() < warrior.maxHealth();
  }

  hasNotEnoughHealth(warrior) {
    return warrior.health() < warrior.maxHealth()/2;
  }

}
