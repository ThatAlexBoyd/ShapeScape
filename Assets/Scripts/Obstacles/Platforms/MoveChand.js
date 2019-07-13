//This will move a platform from its starting position to another position. 
//Attach it to the object you wish to move. It will need a "moveTo" position. 
//So it will need a cube to be at the position you wish it to move too.
//You will send a message to "TurnOn()" to enable the moving.
// (Cole) Added a destroy self and an object function for one of the puzzles. 



#pragma strict
//Drag in location for the game object to move too
var moveTo:Transform;
//how fast the object moves
var speed:float = 1;
//cant access in the inspector, it will set itself on awake
var startpos:Vector3;
//lets it know if it can or cannot move
var isEnabled:boolean = false;

function Awake()
{
	isEnabled = false;
}

function Start () 
{
	//takes where ever the game object is and makes it its starting position
	startpos = transform.position;
}

function Update () 
{
	//is checking to see if it is time to move it

	if(isEnabled == false)
	{
		//	transform.position = Vector3.MoveTowards(transform.position,startpos,speed*Time.deltaTime);
	}
	if(isEnabled)
	{
		
		MovePlatform();
	}
	
}

function TurnOn()
{
	//when this function is called it will turn the platform on
	isEnabled = true;
}

function MovePlatform()
{
	//moves the object from its starting position towards its "moveTo"
	;
	transform.position = Vector3.MoveTowards(transform.position,moveTo.position,speed*Time.deltaTime);

}

function TurnOff()
{
	//when this function is called it will turn the platform off
	isEnabled = false;
}


function OnCollisionEnter(col: Collision)
{
	if(col.gameObject.tag == "enemy")
	{
		
		col.gameObject.SendMessage("die");
	
	}

}
	



