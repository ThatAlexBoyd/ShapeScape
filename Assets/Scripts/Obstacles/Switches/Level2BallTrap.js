#pragma strict

var psgway:GameObject;
var psgway2:GameObject;
var trap:GameObject;


function OnTriggerEnter (col:Collider) 
{

	if(col.gameObject.tag == "Player")
	{
		psgway.SendMessage("TurnOn");
		psgway2.SendMessage("TurnOn");
		trap.SendMessage("TurnedOff");
	}

}