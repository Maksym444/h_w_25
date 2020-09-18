//1 задание
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var x= Number(prompt("Введите по оси x от 0 до 1200"));
var y= Number(prompt("Введите по оси y от 0 до 1200"));
var circle = Number(prompt ("Введите диаметр самого маленького круга"))

var hatHeight = circle*2;
var hatWidth = circle*2+10;
var eyeSize = circle/3.5;
var buttonsSize = circle/3.5;

const drawSnowMan = (x, y, circle, hatHeight,hatWidth,eyeSize,buttonsSize)=> {
    ctx.arc(x,y,circle,0,2*Math.PI);   
    ctx.fillStyle = "#b8e1ff"
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y+(circle*3),circle*2,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y+(circle*5)+circle*3,circle*3,0,2*Math.PI);
    ctx.fill();

    var d = x -(circle+5);
    var e = y-(circle/2);
    ctx.beginPath ();
    ctx.fillStyle = "black"
    ctx.moveTo(d, e);
    ctx.lineTo(d, e-hatHeight);
    ctx.lineTo(d+ hatWidth, e-hatHeight);
    ctx.lineTo(d+ hatWidth, e);
    ctx.lineTo(d, e);
    ctx.fill()

    let f = x - circle/2;
    for (i=0;i<=4;i++){
        if (i%4==0){
            ctx.fillStyle = 'red'
            ctx.beginPath ();
            ctx.arc(f+eyeSize*i,y,eyeSize,0,2*Math.PI)
            ctx.fill()
        }
    }

    var g = y +circle*6;
    for (i=0;i<=8;i++) {
        if (i%4==0){
            ctx.beginPath ();
            ctx.arc(x,g +buttonsSize*i,buttonsSize,0,2*Math.PI)
                if (i==4){
                    ctx.fillStyle = "green"
                ctx.fill()
            }else{
                ctx.fillStyle = "orange"
                ctx.fill()
            }
        }
    }
}

drawSnowMan(x, y, circle, hatHeight,hatWidth,eyeSize,buttonsSize)

//2 задание
const scene = new THREE.Scene();
    const fov = 70;
    const aspectRatio = window.innerWidth /window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov,aspectRatio,near,far);

    const renderer = new THREE.WebGLRenderer ({
        antialias:true
    });
    renderer.setSize (window.innerWidth, window.innerHeight);
    renderer.setClearColor ('#ccc');
    console.log(renderer);
    document.body.prepend(renderer.domElement)

    const controls = new THREE.OrbitControls (camera, renderer.domElement)

    var geometry = new THREE.ConeBufferGeometry( 14, 16, 4);
    var material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
    var cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
    camera.position.z = 20;
    controls.update();

    const light = new THREE.DirectionalLight('#fff', 1)
    scene.add(light)
    light.position.set(-1,2,4)
    function animate (){
        requestAnimationFrame(animate);
        renderer.render(scene,camera);
        cone.rotation.x+=0.01;
        cone.rotation.y+=0.01;
    }
    animate()


