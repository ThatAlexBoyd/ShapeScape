#pragma strict

var spawnTime:float;
var prefab:GameObject;
var isEnabled:boolean;
var smokePart: GameObject;



function FixedUpdate () {

if(isEnabled)
{
 var temp: GameObject = Instantiate(smokePart, transform.position, transform.rotation);
 Instantiate(prefab,transform.position,transform.rotation);
 Cycle();
}

}

function Cycle()
{

 isEnabled = false;
 yield WaitForSeconds(spawnTime);
 isEnabled = true;

}

function TurnOn()
{
 isEnabled = true;
}