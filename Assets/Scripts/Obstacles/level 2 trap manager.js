#pragma strict

var enemies:GameObject[];

var platforms:GameObject[];

function ClearEnemies()
{

	for(var i:int;  i < enemies.length ; i++)  
	{  
	enemies[i].SendMessage("die");
	}
}

function RaisePlatforms()
{

	for(var i:int; i < platforms.length ; i++)
	{
		platforms[i].SendMessage("TurnOn"); 
	}

}