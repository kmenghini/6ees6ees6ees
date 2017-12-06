class RetiredForagerBee extends ForagerBee {
  constructor () {
    super ()
    super.age = 40
    super.job = 'gamble'
    super.canFly = false
    super.color = 'grey'
  }
  forage () {
    return 'I am too old, let me play cards instead'
  }
  gamble (treasure) {
    this.treasureChest.push(treasure)
  }
};
