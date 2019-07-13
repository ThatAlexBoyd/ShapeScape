#pragma strict

var trapDoor:GameObject;
var spikes:GameObject;
private var switchOn:boolean = false;

function OnTriggerEnter (col: Collider) 

{
if(switchOn == false)
{
	if(col.tag == "Player")
	{
	switchOn = true;
	
	trapDoor.SendMessage("TurnOn");
	}
	
	if(col.tag == "SpikeTrap" || col.tag == "Player")
	{
	
		spikes.SendMessage("TurnOn");
	}
}
}


function OnTriggerExit (col: Collider)
{

	if(col.tag == "SpikeTrap")
	{
	
		spikes.SendMessage("TurnOff");
	}

}
