#pragma strict

var manager:GameObject;


function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.tag == "Player")
	{
		manager.SendMessage("ClearEnemies");
		manager.SendMessage("RaisePlatforms");
	}
}