#pragma strict



function OnTriggerEnter(col:Collider)
{
	if(col.tag == "enemy")
	{
		Debug.Log("enemy killed you");
		SendMessageUpwards("Death");
	}
	
	if(col.tag == "death")
	{
		Debug.Log("____ killed you");
		SendMessageUpwards("Death");
	}
		if(col.tag == "bullet")
	{
		Debug.Log("____ killed you");
		SendMessageUpwards("Death");
	}
}