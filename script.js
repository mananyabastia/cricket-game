const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#d0f0c0",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let score = 0;

function preload() {
  this.load.image("bat", "assets/bat.png");
  this.load.image("ball", "assets/ball.png");
  this.load.audio("howzat", "sounds/howzat.mp3");
}

function create() {
  const bat = this.add.image(200, 500, "bat").setScale(0.5);
  const ball = this.add.image(300, 200, "ball").setScale(0.2);
  const howzat = this.sound.add("howzat");

  ball.setInteractive();
  ball.on("pointerdown", () => {
    score++;
    howzat.play();
    alert(`SIX! Memory #${score} unlocked!`);
    // TODO: Load memory popup
  });
}

function update() {}

new Phaser.Game(config);
