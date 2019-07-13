#pragma strict

var spawnPoint:Transform;
var spawnPoint2:Transform;

function Update()
{
	if(Input.GetKeyDown("f"))
	{
	
	GameObject.Find("Square").SendMessage("Teleport", spawnPoint);
	GameObject.Find("Circle").SendMessage("Teleport", spawnPoint2);
	}
}

