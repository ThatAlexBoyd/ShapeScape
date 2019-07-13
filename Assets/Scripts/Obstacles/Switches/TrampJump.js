#pragma strict

//This is what gets passed to the character
//higher number more jump
//try not to have it launch the character to the smack the ceiling
//the square sometimes likes to get confused which way is up when it does
var trampPower: float;

function OnTriggerEnter(col:Collider)
{
	if(col.gameObject.tag == "Player")
	{ 
		col.gameObject.SendMessage("Tramp", trampPower);
		col.gameObject.transform.position.y += .3;
	}
}
