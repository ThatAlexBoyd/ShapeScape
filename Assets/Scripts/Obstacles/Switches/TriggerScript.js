#pragma strict

//this is the platform we need to move
var thingToMove: GameObject;


function OnTriggerEnter(col:Collider)
{
	if(col.tag == "Player")
	{
	thingToMove.SendMessage("TurnOn");
	}
}