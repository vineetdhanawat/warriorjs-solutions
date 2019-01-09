class Player {

  constructor() {
    this.health = 0;
  }

  playTurn(warrior) {
    // Cool code goes here.
    if(warrior.feel().isEmpty()){
      if(warrior.health() < warrior.maxHealth() && warrior.health() >= this.health){
        warrior.rest()
      } else {
        warrior.walk()
      }
    }
    else {
      warrior.attack()
    }

    this.health = warrior.health()
  }
}
