#pragma strict

static var score: int;


function Update () 
{
	GetComponent(TextMesh).text = score.ToString();
}