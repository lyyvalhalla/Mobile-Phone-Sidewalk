var container;
var plane;

var camera, scene, renderer;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var mesh, helper;
var FLOOR = -250;

var clock = new THREE.Clock();

function init(){
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.y = 150;
	camera.position.z = 500;

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0xffffff, 2000, 10000 );

	var planeGeometry = new THREE.PlaneGeometry( 16000, 16000 );
	var planeMaterial = new THREE.MeshPhongMaterial( { emissive: 0xbbbbbb } );

	plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.position.set( 0, FLOOR, 0 );
	scene.add(plane);
	plane.receiveShadow = true;

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor( scene.fog.color, 1 );
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMapEnabled = true;
 
	var loader = new THREE.JSONLoader();
	loader.load( "js/human_walk.js", function ( geometry, materials ) {
		createScene( geometry, materials, 0, FLOOR, -300, 60 )
	} );


 	/* addEventListerner('upKeyPressed', ....) 
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	*/

	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}


function ensureLoop(animation){
	for ( var i = 0; i < animation.hierarchy.length; i ++ ) {

		var bone = animation.hierarchy[ i ];

		var first = bone.keys[ 0 ];
		var last = bone.keys[ bone.keys.length - 1 ];

		last.pos = first.pos;
		last.rot = first.rot;
		last.scl = first.scl;

	}
}


function createScene( geometry, materials, x, y, z, s ){
	ensureLoop( geometry.animation );

	geometry.computeBoundingBox();
	var bb = geometry.boundingBox;

	for ( var i = 0; i < materials.length; i ++ ) {

		var m = materials[ i ];
		m.skinning = true;
		m.morphTargets = true;

		m.specular.setHSL( 0, 0, 0.1 );

		m.color.setHSL( 0.6, 0, 0.6 );
		m.ambient.copy( m.color );

		//m.map = map;
		//m.envMap = envMap;
		//m.bumpMap = bumpMap;
		//m.bumpScale = 2;

		//m.combine = THREE.MixOperation;
		//m.reflectivity = 0.75;

		m.wrapAround = true;
	}

	mesh = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	mesh.position.set( x, y - bb.min.y * s, z );
	mesh.scale.set( s, s, s );
	scene.add( mesh );

	mesh.castShadow = true;
	mesh.receiveShadow = true;

	helper = new THREE.SkeletonHelper( mesh );
	helper.material.linewidth = 3;
	helper.visible = false;
	scene.add( helper );

	var animation = new THREE.Animation( mesh, geometry.animation );
	animation.play();

}



function animate(){
	requestAnimationFrame( animate );
	render();
}


function render(){
	var delta = 0.75 * clock.getDelta();
	camera.lookAt(scene.position);

	// update skinning

	THREE.AnimationHandler.update( delta );

	if ( helper !== undefined ) helper.update();

	// update morphs

	if ( mesh ) {

		var time = Date.now() * 0.001;

		/*
		// mouth

		mesh.morphTargetInfluences[ 1 ] = ( 1 + Math.sin( 4 * time ) ) / 2;

		// frown ?

		mesh.morphTargetInfluences[ 2 ] = ( 1 + Math.sin( 2 * time ) ) / 2;

		// eyes

		mesh.morphTargetInfluences[ 3 ] = ( 1 + Math.cos( 4 * time ) ) / 2;
		*/
	}

	renderer.render( scene, camera );
}