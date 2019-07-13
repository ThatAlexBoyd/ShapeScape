#pragma strict

var level: String;
var isQuit: boolean;

function OnMouseDown()
{
	if(isQuit)
	{
		End();
	}
	else
	{
		Run();
	}
}

function Run()
{
	yield WaitForSeconds(.5);
	Application.LoadLevel(level);
}

function End()
{
	Application.Quit();
}