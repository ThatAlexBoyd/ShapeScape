#pragma strict

var door:GameObject;
var count:int = 0;


function Awake()
{

	count = 0;

}

function Update () {


	if(count == 4)
	{
		
		door.SendMessage("TurnOn");
	
	}

}

function CountUp()
{

	count ++;

}

function CountDown()
{

	count --;

}