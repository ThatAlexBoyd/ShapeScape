#pragma strict

var elevator:GameObject;




function OnTriggerEnter (col: Collider) 

{
	
	if(col.tag == "Player")
	{
	
	elevator.SendMessage("TurnOn");
	}
}

function OnTriggerExit (col: Collider) 

{
	
	if(col.tag == "Player")
	{
	
	elevator.SendMessage("TurnOff");
	}
}