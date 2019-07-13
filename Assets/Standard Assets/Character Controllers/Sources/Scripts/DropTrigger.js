#pragma strict

var dropper:GameObject;


function OnTriggerEnter (col: Collider) 
{
	if(col.tag == "Player")
	{
	dropper.rigidbody.isKinematic = false;
	dropper.transform.position.y += .0001;
	}
}
