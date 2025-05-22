import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload(this: Phaser.Scene) {
    // Load the sprite sheet
    this.load.spritesheet('rowlet', 'assets/Rowlet-Sheet.png', {
        frameWidth: 100,
        frameHeight: 100
    });
}

function create(this: Phaser.Scene) {
    // Add Rowlet sprite to the center of the screen
    const rowlet = this.add.sprite(400, 300, 'rowlet');

    // Create an animation from the sprite sheet
    this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('rowlet', { start: 0, end: 10 }),
        frameRate: 10,
        repeat: -1
    });

    // Play the animation
    rowlet.play('fly');
}

function update(this: Phaser.Scene) {
    // Any updates to the game loop can go here
}
