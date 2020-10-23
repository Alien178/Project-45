function Bullet1() {
    var bullet1 = createSprite(10000, 10000, 10, 10);
    bullet1.addImage("bullet1", bulletSprite);
    bullet1.setCollider("circle", 100, 0, 100);
    if (mouseX < player.x) {
        bullet1.x = player.x - 32.5, bullet1.y = player.y - 25;
        player.mirrorX(-1);
    } else if (mouseX >= player.x) {
        bullet1.x = player.x + 32.5, bullet1.y = player.y - 25;
        player.mirrorX(1);
    }

    bullet1.scale = 0.075;
    bullet1.rotateToDirection = true;
    bullet1.maxSpeed = 500;
    bullet1.attractionPoint(12, mouseX, mouseY);
    bullet1.lifetime = 200;
    bulletGroup.add(bullet1); 
        
}

function Bullet2() {
    var bullet2 = createSprite(10000, 10000, 10, 10);
    bullet2.addImage("bullet2", bulletSprite);
    bullet2.setCollider("circle", 100, 0, 100);
    if (mouseX < player.x) {
        bullet2.x = player.x - 32.5, bullet2.y = player.y - 25;
        player.mirrorX(-1)
    } else if (mouseX >= player.x) {
        bullet2.x = player.x + 32.5, bullet2.y = player.y - 25;
        player.mirrorX(1)
    }
    bullet2.scale = 0.075;
    bullet2.rotateToDirection = true;
    bullet2.maxSpeed = 500;
    //bullet.friction = 10;
    bullet2.attractionPoint(12, mouseX, mouseY);
    bullet2.lifetime = 200;
    bulletGroup2.add(bullet2); 
        
}

function Bullet3() {
    var bullet3 = createSprite(10000, 10000, 10, 10);
    bullet3.addImage("bullet3", bulletSprite);
    bullet3.setCollider("circle", 100, 0, 100);
    if (mouseX < player.x) {
        bullet3.x = player.x - 32.5, bullet3.y = player.y - 25;
        player.mirrorX(-1)
    } else if (mouseX >= player.x) {
        bullet3.x = player.x + 32.5, bullet3.y = player.y - 25;
        player.mirrorX(1)
    }
    bullet3.scale = 0.075;
    bullet3.rotateToDirection = true;
    bullet3.maxSpeed = 500;
    //bullet.friction = 10;
    bullet3.attractionPoint(12, mouseX, mouseY);
    bullet3.lifetime = 200;
    bulletGroup3.add(bullet3); 
        
}

function Bullet4() {
    var bullet4 = createSprite(10000, 10000, 10, 10);
    bullet4.addImage("bullet4", bulletSprite);
    bullet4.setCollider("circle", 100, 0, 100);
    if (mouseX < player.x) {
        bullet4.x = player.x - 32.5, bullet4.y = player.y - 25;
        player.mirrorX(-1)
    } else if (mouseX >= player.x) {
        bullet4.x = player.x + 32.5, bullet4.y = player.y - 25;
        player.mirrorX(1)
    }
    bullet4.scale = 0.075;
    bullet4.rotateToDirection = true;
    bullet4.maxSpeed = 500;
    //bullet.friction = 10;
    bullet4.attractionPoint(12, mouseX, mouseY);
    bullet4.lifetime = 200;
    bulletGroup4.add(bullet4);
        
}