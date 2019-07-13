#pragma strict

var switcher:GameObject;


function OnTriggerEnter (col:Collider) 
{

	if(col.gameObject.tag == "Player")
	{
	
	
	switcher.SendMessage("CountUpThree");
	
	}

}

function OnTriggerExit (col:Collider) 
{

	if(col.gameObject.tag == "Player")
	{
	
	switcher.SendMessage("CountDownThree");
	
	}

}