#pragma strict

var door:GameObject;




function OnTriggerEnter(col:Collider)
{
	if(col.gameObject.tag == "Player")
	{
	door.SendMessage("TurnOn");
	}
}

function OnTriggerExit(col: Collider)
{
	if(col.gameObject.tag == "Player")
	{
	door.SendMessage("TurnOff");
	}
}