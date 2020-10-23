function EnemyBullet1() {
    var EnemyB1 = createSprite(10000, 10000, 10, 10);
    EnemyB1.addImage("Ebullet1", enemyBulletSprite);
    EnemyB1.setCollider("circle", 100, 0, 100);
    EnemyB1.x = enemy1.x, EnemyB1.y = enemy1.y;
    EnemyB1.scale = 0.075;
    EnemyB1.rotateToDirection = true;
    //EnemyB1.debug = true;
    EnemyB1.maxSpeed = 500;
    EnemyB1.attractionPoint(12, player.x, player.y);
    EnemyB1.lifetime = 200;
    enemyBulletGroup.add(EnemyB1);       
}

function EnemyBullet2() {
    var EnemyB2 = createSprite(10000, 10000, 10, 10);
    EnemyB2.addImage("Ebullet2", enemyBulletSprite);
    EnemyB2.setCollider("circle", 100, 0, 100);
    EnemyB2.x = enemy1.x, EnemyB2.y = enemy1.y;
    EnemyB2.scale = 0.075;
    EnemyB2.rotateToDirection = true;
    EnemyB2.maxSpeed = 500;
    EnemyB2.attractionPoint(12, player.x, player.y);
    EnemyB2.lifetime = 200;
    enemyBulletGroup2.add(EnemyB2);       
}

function EnemyBullet3() {
    var EnemyB3 = createSprite(10000, 10000, 10, 10);
    EnemyB3.addImage("Ebullet3", enemyBulletSprite);
    EnemyB3.setCollider("circle", 100, 0, 100);
    EnemyB3.x = enemy1.x, EnemyB3.y = enemy1.y;
    EnemyB3.scale = 0.075;
    EnemyB3.rotateToDirection = true;
    EnemyB3.maxSpeed = 500;
    EnemyB3.attractionPoint(12, player.x, player.y);
    EnemyB3.lifetime = 200;
    enemyBulletGroup3.add(EnemyB3);       
}

function EnemyBullet4() {
    var EnemyB4 = createSprite(10000, 10000, 10, 10);
    EnemyB4.addImage("Ebullet1", enemyBulletSprite);
    EnemyB4.setCollider("circle", 100, 0, 100);
    EnemyB4.x = enemy1.x, EnemyB4.y = enemy1.y;
    EnemyB4.scale = 0.075;
    EnemyB4.rotateToDirection = true;
    EnemyB4.maxSpeed = 500;
    EnemyB4.attractionPoint(12, player.x, player.y);
    EnemyB4.lifetime = 200;
    enemyBulletGroup4.add(EnemyB4);       
}