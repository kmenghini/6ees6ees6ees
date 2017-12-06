class HoneyMakerBee extends Bee {
  constructor() {
    super();
    super.age = 10
    super.job = 'make honey'
    super.honeyPot = 0
  }
  makeHoney() {
    this.honeyPot++
  }
  giveHoney() {
    this.honeyPot--
  }
}
