#pragma strict

var elevator:GameObject;
var playerCount:int = 0;
var waitTime:int = 2;



function OnTriggerEnter (col: Collider) 
{
	Debug.Log("Fuck");
	if(col.tag == "Player")
	{
	playerCount ++;
	RunVator();
	}
	
}

function OnTriggerExit (col: Collider)
{
	if(col.tag == "Player")
	{
		playerCount --;
	}

}

function RunVator()
{
	if( playerCount == 2)
	{
		yield WaitForSeconds(waitTime);
		elevator.SendMessage("TurnOn");
	}
}
