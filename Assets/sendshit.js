#pragma strict

var thing: GameObject;

function OnTriggerEnter(col:Collider)
{
	thing.SendMessage("TurnOn");
}