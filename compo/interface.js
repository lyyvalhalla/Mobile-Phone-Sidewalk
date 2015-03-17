// var container;
// var laneWidth = 512, laneHeight = 1024;
// var height = 128*10;
// var lane, frWall, baWall, leWall, riWall;
// var walls, obstacles, world =[];




// var camera, scene, renderer, light;

// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;

// // movements
// var character;
// var master;
// init();
// animate();


// function init(){
// 	container = document.createElement( 'div' );
// 	document.body.appendChild( container );

// 	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	
// 	camera.position.y = 900;


// 	scene = new THREE.Scene();

	
// 	var ground = new THREE.PlaneGeometry(laneWidth, laneHeight);
// 	var laneMaterial = new THREE.MeshLambertMaterial( { color: 0x99CCFF, visible:true } );
// 	lane = new THREE.Mesh(ground, laneMaterial);
// 	lane.rotation.x = -Math.PI / 2;

// 	scene.add(lane);
// 	world.push(lane);

// 	// var front = new THREE.PlaneGeometry(laneHeight, height);
// 	// var back = new THREE.PlaneGeometry(laneHeight, height);
// 	// var left = new THREE.PlaneGeometry(laneWidth, height);
// 	// var right = new THREE.PlaneGeometry(laneWidth, height);
// 	var wallMaterial = new THREE.MeshLambertMaterial( { color: 0x66CCFF, visible:true } );
	
// 	frWall = new THREE.Mesh( new THREE.PlaneGeometry(laneHeight, height), wallMaterial);
// 	baWall = new THREE.Mesh( new THREE.PlaneGeometry(laneHeight, height), wallMaterial);
// 	leWall = new THREE.Mesh( new THREE.PlaneGeometry(laneWidth, height), wallMaterial);
// 	riWall = new THREE.Mesh( new THREE.PlaneGeometry(laneWidth, height), wallMaterial);
// 	frWall.rotation.y = -Math.PI / 2; // front
// 	frWall.position.x = laneWidth / 2; 
// 	baWall.rotation.y = Math.PI / 2; // back
// 	baWall.position.y = -laneWidth / 2;
// 	leWall.rotation.y = Math.PI / 2; // left
// 	leWall.position.x = laneHeight/2;
// 	riWall.position.z = -laneHeight/2; // right
// 	scene.add(frWall);
// 	scene.add(baWall);
// 	scene.add(leWall);
// 	scene.add(riWall);
// 	console.log(leWall.position);
// 	 // walls[0].rotation.y = -Math.PI / 2;      front
// 	 //    walls[0].position.x = ground.width / 2; front
// 	 //    walls[1].rotation.y = Math.PI;				left
// 	 //    walls[1].position.z = ground.height / 2; left
// 	 //    walls[2].rotation.y = Math.PI / 2;			back 
// 	 //    walls[2].position.x = -ground.width / 2; back
// 	 //    walls[3].position.z = -ground.height / 2; right


// 	 // obstacles
// 	for (var i=0; i<20; i++) {
// 		var geometry = new THREE.BoxGeometry( 50, 50, 50 );
// 		var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
// 		obstacles = new THREE.Mesh(geometry, material);
// 		obstacles.position.x = getRandomInt(-100, 100);
// 		obstacles.position.y = getRandomInt(-100, 100);
// 		obstacles.position.z = getRandomInt(-100, 100);
// 		scene.add(obstacles);
// 	}



// 	var head = newes  THREE.SphereGeometry(32, 16, 16);
// 	var headMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
// 	headMesh = new THREE.Mesh(head, headMaterial);
// 	headMesh.position.y = 50;


// 	light = new THREE.PointLight();
//     light.position.set(-256, 256, -256);
//     scene.add(light);




// 	renderer = new THREE.WebGLRenderer();
// 	renderer.setClearColor( 0xffffff );
// 	renderer.setSize( window.innerWidth, window.innerHeight );

// 	container.appendChild( renderer.domElement );
 
//  	 addEventListerner('upKeyPressed', ....) 
// 	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
// 	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
// 	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	

// 	window.addEventListener( 'resize', onWindowResize, false );
// }

// function onWindowResize() {

// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = window.innerHeight / 2;

// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();

// 	renderer.setSize( window.innerWidth, window.innerHeight );
// }

// /*
// var apple = new function() {
//     this.type = "macintosh";
//     this.color = "red";
//     this.getInfo = function () {
//         return this.color + ' ' + this.type + ' apple';
//     };
// }
// */


// function character (){
// 	// var head = newes  THREE.SphereGeometry(32, 16, 16);
// 	// var headMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
// 	// var headMesh = new THREE.Mesh(head, headMaterial);
// 	// headMesh.position.y = 50;
// 	scene.add(headMesh);
// 	console.log("yay");

// 	// var head = new THREE.SphereGeometry(32, 16, 16),
//  //    hand = new THREE.SphereGeometry(8, 8, 8),
//  //    foot = new THREE.CylinderGeometry(5, 5, 5),
//  //    nose = new THREE.SphereGeometry(4, 8, 8),
//  //    // Set the material, the "skin"
//  //    material = new THREE.MeshLambertMaterial({color:0x000000});
//  //    // Set the character modelisation object
//  //    this.mesh = new THREE.Object3D();
//  //    this.mesh.position.y = 48;
//  //    // Set and add its head
//  //    this.head = new THREE.Mesh(head, material);
//  //    this.head.position.y = 0;
//  //    this.mesh.add(this.head);
//  //    // Set and add its hands
//  //    this.hands = {
//  //        left: new THREE.Mesh(hand, material),
//  //        right: new THREE.Mesh(hand, material)
//  //    };
//  //    this.hands.left.position.x = -40;
//  //    this.hands.left.position.y = -8;
//  //    this.hands.right.position.x = 40;
//  //    this.hands.right.position.y = -8;
//  //    this.mesh.add(this.hands.left);
//  //    this.mesh.add(this.hands.right);
//  //    // Set and add its feet
//  //    this.feet = {
//  //        left: new THREE.Mesh(foot, material),
//  //        right: new THREE.Mesh(foot, material)
//  //    };
//  //    this.feet.left.position.x = -20;
//  //    this.feet.left.position.y = -48;
//  //    this.feet.left.rotation.y = Math.PI / 4;
//  //    this.feet.right.position.x = 20;
//  //    this.feet.right.position.y = -48;
//  //    this.feet.right.rotation.y = Math.PI / 4;
//  //    this.mesh.add(this.feet.left);
//  //    this.mesh.add(this.feet.right);
//  //    // Set and add its nose
//  //    this.nose = new THREE.Mesh(nose, material);
//  //    this.nose.position.y = 0;
//  //    this.nose.position.z = 32;
//  //    this.mesh.add(this.nose);
// }


// // character = function () {
// // 	var masterGeometry = new THREE.SphereGeometry(32, 16, 16); 
// // 	var masterMaterial = new THREE.MeshLambertMaterial( {
// // 		color: 0xff0000,
// // 		opacity:0.8
// // 	} );
// // 	master = new THREE.Mesh(masterGeometry, masterMaterial);
// // 	master.position.set(0, 0, 0);
// // 	scene.add(master);
// // }






// function animate(){
// 	requestAnimationFrame( animate );
// 	render();
// }


// function render(){

// 	camera.lookAt(scene.position);
// 	renderer.render( scene, camera );
// }