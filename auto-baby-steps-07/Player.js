class Player {

  constructor() {
    this.health = 20; // MAX_HEALTH
    this.direction = "forward"
    this.oppositeDirection = "backward"
  }

  playTurn(warrior) {
    // Cool code goes here.

    if(warrior.feel().isWall()) {
      warrior.think("I'm moving " + this.direction);
      warrior.pivot()
      // return ends the turn
      return
    }

    if (this.isUnderAttack(warrior) && this.hasNotEnoughHealth(warrior)) {
      this.movement(warrior, this.oppositeDirection)
    } else if(this.isUnderAttack(warrior)) {
      this.movement(warrior, this.direction)
    } else if(this.isInjured(warrior)) {
      warrior.rest()
    } else {
      this.movement(warrior, this.direction)
    }

    this.health = warrior.health()
  }

  movement(warrior, direction) {
    if (warrior.feel(direction).isEmpty()) {
      warrior.walk(direction)
    } else if (!warrior.feel(direction).isWall() && warrior.feel(direction).getUnit().isBound()) {
      warrior.rescue(direction)
    } else if(direction == this.direction) {
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
