export default class CardBase extends Phaser.GameObjects.Container{
constructor(data){
    let {scene, x, y, name, card,image,depth} = data;
    let spriteCard = new Phaser.GameObjects.Sprite(scene,0,0,card);
    let spriteImage = new Phaser.GameObjects.Sprite(scene,0,0,image);
    // let textName = new Phaser.GameObjects.textName(scene,0,0,'restart');
    
    super(scene,x,y,[SpriteCard, spriteImage, textName]);
    this.spriteCard=spriteCard;
    this.spriteImage = spriteImage;
    this.textName = textName;
    this.cardname = name;
    this.depth = depth;
    this.scene = scene;
    this.scene.add.existing(this);

}
}