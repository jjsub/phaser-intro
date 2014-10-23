var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
//updaute get call every 60 frame x sec.

function preload(){
  game.load.image('br','/img/1984-nocooper-space.png');
  game.load.atlasJSONHash('bot', 'img/running_bot.png', 'img/running_bot.json');





}

function create(){
  var bot = game.add.sprite(200, 200, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);


  //prite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
  //s1.anchor.set(0.5);


  s1 = game.add.sprite(20,30,'br');
  var s2 = game.add.sprite(20,30,'br2');

  s1.scale.setTo(1.1);

  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s1, Phaser.Physics.ARCADE);

  //s1.body.velocity.x =150;
  //s1.body.velocity.y =150;
  var tween = game.add.tween(s1);
  tween.to({ x: 600 }, 6000);
  tween.start();

  tween = game.add.tween(bot);
  tween.to({ y: 600, x:600 }, 6000);
  tween.start();


}

function update(){
  if (game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8){
        game.physics.arcade.moveToPointer(s1, 300);
     }else{
        s1.body.velocity.set(0);
     }


}
