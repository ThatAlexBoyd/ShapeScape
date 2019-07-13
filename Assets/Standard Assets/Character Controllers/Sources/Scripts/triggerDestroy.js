#pragma strict

var platform:GameObject;
var chandelier:GameObject;

function DropTheBass()
{

chandelier.rigidbody.isKinematic = 	false;

}

function OnTriggerEnter (col: Collider) 
{
	if(col.gameObject.tag == "dropper")
	{
	
	platform.SendMessage("Seppuku");
	yield WaitForSeconds(.05);
	Destroy(gameObject);
	}

}