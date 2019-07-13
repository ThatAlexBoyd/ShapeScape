#pragma strict

var fov: int;
var camIn: boolean;

function Awake()
{
	camIn = true;
}

function Update () 
{
	if(Input.GetKeyDown("c"))
	{
		MoveCam();
	}
}


function MoveCam()
{

	if(camIn)
	{
		Camera.mainCamera.fieldOfView = 90;
		camIn = false;
	}
	
	else
	{
		Camera.mainCamera.fieldOfView = 60;
		camIn = true;
	}

}