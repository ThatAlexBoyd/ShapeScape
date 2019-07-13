#pragma strict

//Drag in the three characters here
var square: GameObject;
var circle: GameObject;
var triangle: GameObject;

//The Main Camera goes here
var theCamera: Camera;
var cameraStart: GameObject;

//Object to follow
var follower: GameObject;

//Number to keep track of who is active
// 0 = square 1 = circle 2 = triangle
static var charCount: int;


function Awake()
{
	
	//Makes sure that charCount starts at 0 when loaded
	charCount = 0;
	//Calls the script to make sure not all activated on awake
	ControlScripts();
}

function  Update()
{
	if(Input.GetKeyDown("tab"))
	{
		//SwitchChar will handle which scripts are active
		SwitchChar();
		//MoveCam will move the camera to the appropriate character
	}
	CameraSet();
}

function CameraSet()
{
	var holder: Vector3 = follower.transform.position;
	holder.z -= 10;
	theCamera.transform.position = holder;
}

function SwitchChar()
{
	//Simply cycles the count from 0-2
	if(charCount > 1 )
	{
		charCount = 0;
	}
	else
	{
		charCount++;
	}
	
	//Calls the case statement to handle which scripts active
	ControlScripts();
}


function ControlScripts()
{
	//switch is going to handle who is and who is not active
	//the script names inside "GetComponent()" will need to change to the ones attached to characters
	//the "GetComponents()" is simply taking the said gameObject and disabling or enabling
	//the MoveCam() is taking the object that enabled and passing its position in
	switch(charCount)
	{
		case 0:
//		square.GetComponent(Square).enabled = true;
//		circle.GetComponent(Circle).enabled = false;
//		triangle.GetComponent(Triangle).enabled = false;
		Square.isSqActive = true;
		Circle.isCirActive = false;
		Triangle.isTriActive = false;
		MoveCam(square);
		break;

		case 1:
//		square.GetComponent(Square).enabled = false;
//		circle.GetComponent(Circle).enabled = true;
//		triangle.GetComponent(Triangle).enabled = false;
		Square.isSqActive = false;
		Circle.isCirActive = true;
		Triangle.isTriActive = false;
		MoveCam(circle);
		break;
		
		case 2:
//		square.GetComponent(Square).enabled = false;
//		circle.GetComponent(Circle).enabled = false;
//		triangle.GetComponent(Triangle).enabled = true;
		Square.isSqActive = false;
		Circle.isCirActive = false;
		Triangle.isTriActive = true;
		MoveCam(triangle);
		break;
	}
}


function MoveCam(object:GameObject)
{
	follower = object;
}