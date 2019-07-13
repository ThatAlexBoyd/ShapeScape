#pragma strict

var fadeIn:boolean;
var fadeOut:boolean;

function Awake()
{
	fadeIn = false;
	fadeOut = true;
}

function Update()
{

	if(fadeIn)
	{
		flickIn();
	}
	
	if(fadeOut)
	{
		flickOut();
	}
	
	Check();
	
}

function flickIn()
{
	gameObject.renderer.material.color.a += .5 * Time.deltaTime;
}

function flickOut()
{
	gameObject.renderer.material.color.a -= .5 * Time.deltaTime;
}

function Check()
{
	if(gameObject.renderer.material.color.a <= 130)
	{
		fadeOut = false;
		fadeIn = true;
	}
	if(gameObject.renderer.material.color.a >= 240)
	{
		fadeIn  = false;
		fadeOut = true;
	}
}