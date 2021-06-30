export default class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }
    preload(){
        this.load.image('card', 'assets/card.png');
        this.load.image('armour', 'assets/armour.png');
        this.load.image('dead', 'assets/dead.png');
        this.load.image('deathknight', 'assets/deathknight.png');
        this.load.image('firedrake', 'assets/firedrake.png');
        this.load.image('goldendragon', 'assets/goldendragon.png');
        this.load.image('healingpotion', 'assets/healingpotion.png');
        this.load.image('healthandarmour', 'assets/healingpotion.png');
        this.load.image('kobold', 'assets/kobold.png');
        this.load.image('ogre', 'assets/ogre');
        this.load.image('paladin', 'assets/palading.png');
        this.load.image('restart', 'assets/restart.png');
        this.load.image('troll', 'assets/troll.png');
    }
    create(){
        this.player = new CardBase()
    }
}