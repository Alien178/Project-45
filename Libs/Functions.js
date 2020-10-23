function detect() {
    player.collide(ground);

    //Player Damage
    if (enemyBulletGroup.isTouching(player)) {
        health = health - 10;
        enemyBulletGroup.destroyEach();
    } else if (enemyBulletGroup2.isTouching(player)) {
        health = health - 10;
        enemyBulletGroup2.destroyEach();
    } else if (enemyBulletGroup3.isTouching(player)) {
        health = health - 10;
        enemyBulletGroup3.destroyEach();
    } else if (enemyBulletGroup4.isTouching(player)) {
        health = health - 10;
        enemyBulletGroup4.destroyEach();
    }

    if (health <= 0) {
        health = 0;
    }
}

function bulletDestroy() {
    if (enemyBulletGroup.isTouching(bulletGroup)) {
        enemyBulletGroup.destroyEach();
        bulletGroup.destroyEach();
    } else if (enemyBulletGroup2.isTouching(bulletGroup)) {
        enemyBulletGroup2.destroyEach();
        bulletGroup.destroyEach();
    } else if (enemyBulletGroup3.isTouching(bulletGroup)) {
        enemyBulletGroup3.destroyEach();
        bulletGroup.destroyEach();
    } else if (enemyBulletGroup4.isTouching(bulletGroup)) {
        enemyBulletGroup4.destroyEach();
        bulletGroup.destroyEach();
    }

    if (enemyBulletGroup.isTouching(bulletGroup2)) {
        enemyBulletGroup.destroyEach();
        bulletGroup2.destroyEach();
    } else if (enemyBulletGroup2.isTouching(bulletGroup2)) {
        enemyBulletGroup2.destroyEach();
        bulletGroup2.destroyEach();
    } else if (enemyBulletGroup3.isTouching(bulletGroup2)) {
        enemyBulletGroup3.destroyEach();
        bulletGroup2.destroyEach();
    } else if (enemyBulletGroup4.isTouching(bulletGroup2)) {
        enemyBulletGroup4.destroyEach();
        bulletGroup2.destroyEach();
    }

    if (enemyBulletGroup.isTouching(bulletGroup3)) {
        enemyBulletGroup.destroyEach();
        bulletGroup3.destroyEach();
    } else if (enemyBulletGroup2.isTouching(bulletGroup3)) {
        enemyBulletGroup2.destroyEach();
        bulletGroup3.destroyEach();
    } else if (enemyBulletGroup3.isTouching(bulletGroup3)) {
        enemyBulletGroup3.destroyEach();
        bulletGroup3.destroyEach();
    } else if (enemyBulletGroup4.isTouching(bulletGroup3)) {
        enemyBulletGroup4.destroyEach();
        bulletGroup3.destroyEach();
    }

    if (enemyBulletGroup.isTouching(bulletGroup4)) {
        enemyBulletGroup.destroyEach();
        bulletGroup4.destroyEach();
    } else if (enemyBulletGroup2.isTouching(bulletGroup4)) {
        enemyBulletGroup2.destroyEach();
        bulletGroup4.destroyEach();
    } else if (enemyBulletGroup3.isTouching(bulletGroup4)) {
        enemyBulletGroup3.destroyEach();
        bulletGroup4.destroyEach();
    } else if (enemyBulletGroup4.isTouching(bulletGroup4)) {
        enemyBulletGroup4.destroyEach();
        bulletGroup4.destroyEach();
    }
}
