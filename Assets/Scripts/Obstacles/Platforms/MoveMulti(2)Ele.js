#pragma strict

var waitTime:int = 3;
var elevator:GameObject;
var playerCount:int = 0;

function FixedUpdate()
{
if( playerCount == 2)
	{
	
	
	TurnOn();
	}
	if(playerCount == 0)
	{
	TurnOff();
	}
}


function OnTriggerEnter (col: Collider) {
	
	if(col.tag == "Player")
	{
	
	playerCount ++;
	}
	
}

function OnTriggerExit (col: Collider)
{
	if(col.tag == "Player")
	{
		playerCount --;
	}

}

function TurnOn()
{
yield WaitForSeconds (waitTime);
elevator.SendMessage("TurnOn");
}

function TurnOff()
{
yield WaitForSeconds (waitTime);
elevator.SendMessage("TurnOff");
}