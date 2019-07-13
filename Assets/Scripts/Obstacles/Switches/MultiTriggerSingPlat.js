#pragma strict

var door:GameObject;
var count:int = 0;


function Awake()
{

	count = 0;

}

function Update () {


	if(count == 3)
	{
		
		door.SendMessage("TurnOn");
	
	}
	if(count == 2 && gameObject.tag == "managers")
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