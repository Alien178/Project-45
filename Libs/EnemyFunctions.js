function EnemyShoot() {
    if (frameCount % 100 === 0) {
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: EnemyBullet1()
                  break;
          case 2: EnemyBullet2()
                  break;
          case 3: EnemyBullet3()
                  break;
          case 4: EnemyBullet4()
                  break;
          default: break;
        }
      }
}