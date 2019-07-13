#pragma strict

function DropPlatform()
{

	rigidbody.isKinematic = false;
	gameObject.transform.position.y += .0001;

}

function OnCollisionEnter(col: Collision)
{
	if(col.gameObject.tag == "enemy")
	{
		
		col.gameObject.SendMessage("die");
	
	}

}
	
