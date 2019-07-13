#pragma strict

var playerCount: int;
var levelString: String;

function Awake () 
{
	playerCount = 0;
}

function OnTriggerEnter(col:Collider)
{
	if(col.tag == "Player")
	{
		playerCount++;
		LoadLevel();
	}
}

function OnTriggerExit(col:Collider)
{
	if(col.tag == "Player")
	{
		playerCount--;
	}
}

function LoadLevel()
{
	if(playerCount == 3)
	{
		Application.LoadLevel(levelString);
	}
}