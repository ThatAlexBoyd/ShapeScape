#pragma strict

var switcher:GameObject;


function OnTriggerEnter (col:Collider) 
{

	if(col.gameObject.tag == "Player")
	{
	
	Debug.Log("inside!");
	switcher.SendMessage("CountUpOne");
	
	}

}

function OnTriggerExit (col:Collider) 
{

	if(col.gameObject.tag == "Player")
	{
	
	switcher.SendMessage("CountDownOne");
	
	}

}