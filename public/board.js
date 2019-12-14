// Making the space to render our objects
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

// variables random and row2c, row4c are for the following:
// random: on collision with a diamond on one of the even rows, do a math.random() that will be used to determine the direcion the ball goes
// row2c, row4c: these will ensure that the math is done only on the first frame of collision
var camera, scene, ball, random;
var row2c = 0;
var row4c = 0;

// Running the function to create a basic scene
scene = createScene();
engine.runRenderLoop(function() {
  scene.render();
});

// Function that sets up the scene and camera
function createScene() {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -25),
    scene
  );

  // Putting light in the scene so the ball isn't just black
  var light = new BABYLON.DirectionalLight(
    "balllight",
    new BABYLON.Vector3(0, -0.2, 0.2),
    scene
  );

  // Physics for the scene
  var gravityVector = BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  // Creating a ball that goes into the scene
  ball = BABYLON.MeshBuilder.CreateSphere("plinkoBall", { diameter: 1 }, scene);
  // Putting a texture on the ball
  var ballMaterial = new BABYLON.StandardMaterial("ballMat", scene);
  ballMaterial.diffuseTexture = new BABYLON.Texture("images/ball.jpg", scene);
  ball.material = ballMaterial;
  // Making the ball fall
  ball.physicsImpostor = new BABYLON.PhysicsImpostor(
    ball,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 0.2 },
    scene
  );

  // setting ball positions and tag
  ball.tag = "ball";
  ball.position.y = 10;
  ball.position.x = -0.5;

  // Create the plane as well as the material for the plane
  var plane = BABYLON.MeshBuilder.CreatePlane(
    "plane",
    { width: 28.2, size: 22, tileSize: 1 },
    scene
  );
  var planeMaterial = new BABYLON.StandardMaterial("planeMat", scene);
  planeMaterial.diffuseTexture = new BABYLON.Texture("images/wall.jpg", scene);
  plane.material = planeMaterial;

  // Dragger behaviors, which was taken from https://doc.babylonjs.com/how_to/meshbehavior
  var pointerDragBehavior = new BABYLON.PointerDragBehavior({
    dragAxis: new BABYLON.Vector3(1, 0, 0)
  });

  // Use drag plane in world space
  pointerDragBehavior.useObjectOrienationForDragging = false;

  // Listening for when to drag
  pointerDragBehavior.onDragStartObservable.add(event => {});
  pointerDragBehavior.onDragObservable.add(event => {});
  pointerDragBehavior.onDragEndObservable.add(event => {});

  // allowing the ball to be dragged
  ball.addBehavior(pointerDragBehavior);

  // Creating the ground for the ball to be on. For some reason it is invisible, but it looks better visually
  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 20, width: 50, subdivions: 4 },
    scene
  );

  // making the pressure plates
  var left100 = BABYLON.MeshBuilder.CreateGround(
    "left100",
    { height: 20, width: 2.25, subdivions: 4 },
    scene
  );
  var right100 = BABYLON.MeshBuilder.CreateGround(
    "right100",
    { height: 20, width: 2.25, subdivions: 4 },
    scene
  );
  var left500 = BABYLON.MeshBuilder.CreateGround(
    "left500",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var right500 = BABYLON.MeshBuilder.CreateGround(
    "right500",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var left1000 = BABYLON.MeshBuilder.CreateGround(
    "left1000",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var right1000 = BABYLON.MeshBuilder.CreateGround(
    "right1000",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var left0 = BABYLON.MeshBuilder.CreateGround(
    "left0",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var right0 = BABYLON.MeshBuilder.CreateGround(
    "right0",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  var maximum = BABYLON.MeshBuilder.CreateGround(
    "maximum",
    { height: 20, width: 1.75, subdivions: 4 },
    scene
  );
  // setting the material for the plates
  var plateMaterial = new BABYLON.StandardMaterial("plateMat", scene);
  plateMaterial.diffuseTexture = new BABYLON.Texture("images/plate.jpg", scene);
  left0.material = plateMaterial;
  right0.material = plateMaterial;

  var maxMaterial = new BABYLON.StandardMaterial("maxMat", scene);
  maxMaterial.diffuseTexture = new BABYLON.Texture("images/nice.jpg", scene);
  maximum.material = maxMaterial;

  var outerMat = new BABYLON.StandardMaterial("outerMat", scene);
  outerMat.diffuseTexture = new BABYLON.Texture("images/orange.jpg", scene);
  left100.material = outerMat;
  right100.material = outerMat;

  var midMat = new BABYLON.StandardMaterial("midMat", scene);
  midMat.diffuseTexture = new BABYLON.Texture("images/yellow.jpg", scene);
  left500.material = midMat;
  right500.material = midMat;

  var innerMat = new BABYLON.StandardMaterial("innerMat", scene);
  innerMat.diffuseTexture = new BABYLON.Texture("images/blue.jpg", scene);
  left1000.material = innerMat;
  right1000.material = innerMat;

  left100.position.y = -7;
  left100.position.x = -8.25;

  right100.position.y = -7;
  right100.position.x = 8.25;

  left500.position.y = -7;
  left500.position.x = -6;

  right500.position.y = -7;
  right500.position.x = 6;

  left1000.position.y = -7;
  left1000.position.x = -4;

  right1000.position.y = -7;
  right1000.position.x = 4;

  left0.position.y = -7;
  left0.position.x = -2;

  right0.position.y = -7;
  right0.position.x = 2;

  maximum.position.y = -7;
  ground.position.y = 9;
  ground.position.z = 9;
  // Making it so the ball will actually land on the ground
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );

  // making a button
  var button = document.createElement("button");
  button.textContent = "Start Plinko";
  button.style.fontSize = "20px";
  button.style.width = "800px";
  button.style.borderRadius = "12px";
  button.style.backgroundColor = "black";
  button.style.color = "white";
  document.body.appendChild(button);
  button.onclick = function() {
    // Show/Hide myMeshThree
    ground.dispose();
  };

  // row 1 start

  var diamond11 = BABYLON.Mesh.CreateCylinder(
    "diamond11",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond12 = BABYLON.Mesh.CreateCylinder(
    "diamond12",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond13 = BABYLON.Mesh.CreateCylinder(
    "diamond13",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond14 = BABYLON.Mesh.CreateCylinder(
    "diamond14",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond15 = BABYLON.Mesh.CreateCylinder(
    "diamond15",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );

  diamond11.rotation.x = 80;
  diamond11.position.x = -12;
  diamond11.position.y = 7;

  diamond12.rotation.x = 80;
  diamond12.position.x = -6;
  diamond12.position.y = 7;

  diamond13.rotation.x = 80;
  diamond13.position.x = 0;
  diamond13.position.y = 7;

  diamond14.rotation.x = 80;
  diamond14.position.x = 6;
  diamond14.position.y = 7;

  diamond15.rotation.x = 80;
  diamond15.position.x = 12;
  diamond15.position.y = 7;

  // row 1 end

  // row 2 start

  var diamond21 = BABYLON.Mesh.CreateCylinder(
    "diamond11",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond22 = BABYLON.Mesh.CreateCylinder(
    "diamond12",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond23 = BABYLON.Mesh.CreateCylinder(
    "diamond13",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond24 = BABYLON.Mesh.CreateCylinder(
    "diamond14",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );

  diamond21.rotation.x = 80;
  diamond21.position.x = -9.25;
  diamond21.position.y = 4;

  diamond22.rotation.x = 80;
  diamond22.position.x = -3.25;
  diamond22.position.y = 4;

  diamond23.rotation.x = 80;
  diamond23.position.x = 3.25;
  diamond23.position.y = 4;

  diamond24.rotation.x = 80;
  diamond24.position.x = 9.25;
  diamond24.position.y = 4;

  // row 2 end

  // row 3 start

  var diamond31 = BABYLON.Mesh.CreateCylinder(
    "diamond11",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond32 = BABYLON.Mesh.CreateCylinder(
    "diamond12",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond33 = BABYLON.Mesh.CreateCylinder(
    "diamond13",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond34 = BABYLON.Mesh.CreateCylinder(
    "diamond14",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond35 = BABYLON.Mesh.CreateCylinder(
    "diamond15",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );

  diamond31.rotation.x = 80;
  diamond31.position.x = -12;
  diamond31.position.y = 1;

  diamond32.rotation.x = 80;
  diamond32.position.x = -6;
  diamond32.position.y = 1;

  diamond33.rotation.x = 80;
  diamond33.position.x = 0;
  diamond33.position.y = 1;

  diamond34.rotation.x = 80;
  diamond34.position.x = 6;
  diamond34.position.y = 1;

  diamond35.rotation.x = 80;
  diamond35.position.x = 12;
  diamond35.position.y = 1;

  // row 3 end

  // row 4 start

  var diamond41 = BABYLON.Mesh.CreateCylinder(
    "diamond41",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond42 = BABYLON.Mesh.CreateCylinder(
    "diamond42",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond43 = BABYLON.Mesh.CreateCylinder(
    "diamond43",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond44 = BABYLON.Mesh.CreateCylinder(
    "diamond44",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );

  diamond41.rotation.x = 80;
  diamond41.position.x = -9.25;
  diamond41.position.y = -2;

  diamond42.rotation.x = 80;
  diamond42.position.x = -3.25;
  diamond42.position.y = -2;

  diamond43.rotation.x = 80;
  diamond43.position.x = 3.25;
  diamond43.position.y = -2;

  diamond44.rotation.x = 80;
  diamond44.position.x = 9.25;
  diamond44.position.y = -2;

  // row 4 end

  // row 5 start

  var diamond51 = BABYLON.Mesh.CreateCylinder(
    "diamond11",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond52 = BABYLON.Mesh.CreateCylinder(
    "diamond12",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond53 = BABYLON.Mesh.CreateCylinder(
    "diamond13",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond54 = BABYLON.Mesh.CreateCylinder(
    "diamond14",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );
  var diamond55 = BABYLON.Mesh.CreateCylinder(
    "diamond15",
    1.5,
    1.5,
    1.5,
    4,
    1,
    scene,
    false,
    BABYLON.Mesh.DEFAULT
  );

  diamond51.rotation.x = 80;
  diamond51.position.x = -12;
  diamond51.position.y = -5;

  diamond52.rotation.x = 80;
  diamond52.position.x = -6;
  diamond52.position.y = -5;

  diamond53.rotation.x = 80;
  diamond53.position.x = 0;
  diamond53.position.y = -5;

  diamond54.rotation.x = 80;
  diamond54.position.x = 6;
  diamond54.position.y = -5;

  diamond55.rotation.x = 80;
  diamond55.position.x = 12;
  diamond55.position.y = -5;

  // row 5 end

  // collision with the diamonds and plates
  scene.registerAfterRender(function() {
    // row 1 collisions
    if (ball.intersectsMesh(diamond11, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond12, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    if (ball.intersectsMesh(diamond13, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    if (ball.intersectsMesh(diamond14, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond15, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    // row 2 collisions
    if (ball.intersectsMesh(diamond21, false)) {
      row2c++;
      if (row2c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond22, false)) {
      row2c++;
      if (row2c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond23, false)) {
      row2c++;
      if (row2c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond24, false)) {
      row2c++;
      if (row2c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    // row 3 collisions
    if (ball.intersectsMesh(diamond31, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond32, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond33, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond34, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    if (ball.intersectsMesh(diamond35, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    // row 4 collisions
    if (ball.intersectsMesh(diamond41, false)) {
      row4c++;
      if (row4c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        console.log(random);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond42, false)) {
      row4c++;
      if (row4c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond43, false)) {
      row4c++;
      if (row4c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    if (ball.intersectsMesh(diamond44, false)) {
      row4c++;
      if (row4c == 1) {
        random = Math.floor(Math.random() * 100 + 1);
        if (random % 2 == 0) {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
        } else {
          ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
        }
      }
    }
    // row 5 collisions
    if (ball.intersectsMesh(diamond51, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond52, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    if (ball.intersectsMesh(diamond53, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }
    if (ball.intersectsMesh(diamond54, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(3, 0, 0));
    }
    if (ball.intersectsMesh(diamond55, false)) {
      ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-3, 0, 0));
    }

    // collision with the plates
    if (
      ball.intersectsMesh(left100, false) ||
      ball.intersectsMesh(right100, false)
    ) {
      console.log("100");
      itWorks();
      document.getElementById("100").classList.remove("hidden");
    }
    if (
      ball.intersectsMesh(left500, false) ||
      ball.intersectsMesh(right500, false)
    ) {
      console.log("500");
      itWorks();
      document.getElementById("500").classList.remove("hidden");
    }
    if (
      ball.intersectsMesh(left1000, false) ||
      ball.intersectsMesh(right1000, false)
    ) {
      console.log("1000");
      itWorks();
      document.getElementById("1000").classList.remove("hidden");
    }
    if (
      ball.intersectsMesh(left0, false) ||
      ball.intersectsMesh(right0, false)
    ) {
      console.log("0");
      itWorks();
      document.getElementById("0").classList.remove("hidden");
    }
    if (ball.intersectsMesh(maximum, false)) {
      console.log("maximum");
      itWorks();
      document.getElementById("100000").classList.remove("hidden");
    }
  });

  return scene;
}

// test function just to make sure that functions work with collision
function itWorks() {
  console.log("yes");
}

// this doesn't do anything right now
function resetBall() {
  // The ball is placed back at 0, 0, 0
  ball.position = new BABYLON.Vector3();

  // The ball's speed is set back to 0
  ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
  ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

  // This gets rid of any remaining timeout, which helps solve the issue of 2 resets happening on collision with the wall
  clearTimeout(timeoutId);
}

function enablePhysics() {
  ground.setEnabled(false);
}
