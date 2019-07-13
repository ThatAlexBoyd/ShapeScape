#pragma strict

function OnTriggerEnter(col:Collider)
{
	if(col.tag == "enemy")
	{
		Debug.Log("froze");
		col.SendMessage("StopMoving");
	}
	if(col.tag == "Cylinder")
	{
		Debug.Log("froze");
		col.SendMessage("StopMoving");
	}
	if(col.tag == "bullet")
	{
		Debug.Log("froze");
		col.SendMessage("StopMoving");
	}

}
