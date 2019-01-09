class Player {
  playTurn(warrior) {
    // Cool code goes here.
    if(warrior.feel().isEmpty()){
      warrior.walk()
    }
    else {
      warrior.attack()
    }
  }
}
