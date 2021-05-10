const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

const Constraint = Matter.Constraint;

var engine;
var Mworld;
var bgImg;
var g;
var roof;
var bond;
var supe;


function preload() {
//preload the images here
bgImg = loadImage("Images/Sky.jpeg");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  g = new Ground(1500,800);
  roof = new Ground(1500,0);
  supe = new Super(200,100);
  bond = new Bond(supe.body,{x:1500,y:0});

}

function draw() {
  background(bgImg);
  g.show();
  roof.show();
  supe.show();

}

function mouseDragged() {
  Matter.Body.setPosition(supe.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased() {
  bond.fly();   
  }

