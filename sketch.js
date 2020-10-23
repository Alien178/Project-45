var player, playerRun, playerIdle, playerJump, playerStaff;
var enemy1, enemySprite;
var ground;
var InAir = 0;
var jumping =  1;
var playAnimation = 0;
var bulletGroup, bulletGroup2, bulletGroup3, bulletGroup4, bulletSprite;
var enemyBulletGroup, enemyBulletGroup2, enemyBulletGroup3, enemyBulletGroup4, enemyBulletSprite;
var mana = 100;
var health = 100;
var shootTimer = 0;
var shoot = true;
var font, font1;
var backgroundImg;
var mouse, mouseImg;

function preload() {
  playerRun = loadAnimation("Player/run/run_1.png", "Player/run/run_2.png", "Player/run/run_3.png", "Player/run/run_4.png");
  playerIdle = loadImage("Player/idle/idle_1.png");
  playerJump = loadImage("Player/jump/jump_2.png");
  bulletSprite = loadImage("images/fireball.png");
  playerStaff = loadImage("images/fire_staff.png");
  font = loadFont("Fonts/inverted.ttf");
  font1 = loadFont("Fonts/lightpixel7.ttf");
  backgroundImg = loadImage("images/background1.png");
  enemySprite = loadAnimation("Enemy/B Flame 1.png", "Enemy/B Flame 2.png", "Enemy/B Flame 3.png", "Enemy/B Flame 4.png", "Enemy/B Flame 5.png", "Enemy/B Flame 6.png", "Enemy/B Flame 7.png", "Enemy/B Flame 8.png", "Enemy/B Flame 9.png", "Enemy/B Flame 10.png", "Enemy/B Flame 11.png", "Enemy/B Flame 12.png");
  enemyBulletSprite = loadImage("images/fireball2.png");
  mouseImg = loadImage("images/cursorOne.png");
}

function setup() {
  createCanvas(800, 400);
  player = createSprite(200, 300,);
  player.addImage("Player", playerIdle);
  player.scale = 0.25;
  player.setCollider("rectangle", 0, 22, 275, 355);
  ground = createSprite(width / 2, 395, width + 10, 15);

  enemy1 = createSprite(600, 200);
  enemy1.addAnimation("enemy1", enemySprite);
  enemy1.scale = 0.20;
  enemy1.setCollider("circle", 0, 15, 150);
  
  bulletGroup = createGroup();
  bulletGroup2 = createGroup();
  bulletGroup3 = createGroup();
  bulletGroup4 = createGroup();
  enemyBulletGroup = createGroup();
  enemyBulletGroup2 = createGroup();
  enemyBulletGroup3 = createGroup();
  enemyBulletGroup4 = createGroup();

  mouse = createSprite(mouseX, mouseY);
  mouse.addImage("mouse", mouseImg);
  mouse.scale = 0.15;
  mouse.rotation = 20;
  noCursor();
}

function draw() {
  background(backgroundImg);

  mouse.x = mouseX + 5.25;
  mouse.y = mouseY + 20;

  detect();
  playerMove();
  Attack();
  playerEnergy();
  EnemyShoot();
  bulletDestroy();
  drawSprites();
}