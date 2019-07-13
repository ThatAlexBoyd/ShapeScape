#pragma strict

var manager:GameObject;


function OnTriggerEnter (col: Collider) 
{

	if(col.gameObject.tag == "enemy")
	{
		
		manager.SendMessage("CountUp");
	}


}

function OnTriggerExit (col: Collider)
{

	if(col.gameObject.tag == "enemy")
	{
		
		manager.SendMessage("CountDown");
	}

	
}