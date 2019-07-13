#pragma strict

var manager:GameObject;


function OnTriggerEnter (col: Collider) 
{

	if(col.tag == "Player")
	{
		manager.SendMessage("CountUp");
	}


}

function OnTriggerExit (col: Collider)
{

	if(col.tag == "Player")
	{
		manager.SendMessage("CountDown");
	}

	
}