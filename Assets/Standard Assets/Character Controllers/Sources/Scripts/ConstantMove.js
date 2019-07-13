#pragma strict
//for the enemies that move around platforms
//comments for whoever uses it


var wayPoint: Transform[];
//the waypoint is an array that takes the point to move to
var curPos: int;
//the point in the array it is at
var speed: float;
//speed... deal with it
var isEnabled:boolean = true;
// is it enabled
var waitTime:float = 5.0;
// wait time cuz puzzles fucking suck

//all this script needs is to be attached to the enemy
//next you need to set up the waypoint it will be moving to, i suggest cubes
//make sure you set the speed and it is off


var normTxt: Texture;
var frzTxt: Texture;
var body: GameObject;
var frzPart: GameObject;

function Update () 
{	
	if(isEnabled == true)
	{
	if(transform.position == wayPoint[curPos].position)
	{
		curPos++;
		if(curPos == wayPoint.Length)
		{
			curPos = 0;
		}
	}
	
	Move();
	}
}

function Move()
{
	transform.position = Vector3.MoveTowards(transform.position,wayPoint[curPos].position, speed*Time.deltaTime);
}

function die()
{
	
	Destroy(gameObject);
}

function StopMoving()
{
	
	isEnabled = false;
	body.renderer.material.mainTexture = frzTxt;
	var temp: GameObject = Instantiate(frzPart, transform.position, transform.rotation);
	gameObject.tag = "frozen";
	if(gameObject.rigidbody)
	{
	rigidbody.isKinematic = false;
	}
	yield WaitForSeconds(waitTime);
	body.renderer.material.mainTexture = normTxt;
	if(gameObject.rigidbody)
	{
	rigidbody.isKinematic = true;
	}
	gameObject.tag = "enemy";
	isEnabled = true;
	
}

