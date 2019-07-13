#pragma strict

var spotLeft: GameObject;
var spotRight: GameObject;
var check1:boolean = false;
var check2:boolean = false;


function Update()
{
	if(Input.GetKeyDown("f") && check1 == true && check2 == true)
	{
		CallPlayers();
	}
}


function CallPlayers()
{

	switch(BodyManager.charCount)
	{
		case 0:
		GameObject.Find("Triangle").transform.position = spotLeft.transform.position;
		GameObject.Find("Circle").transform.position = spotRight.transform.position;
		break;
		
		case 1:
		GameObject.Find("Triangle").transform.position = spotLeft.transform.position;
		GameObject.Find("Square").transform.position = spotRight.transform.position;
		break;
		
		case 2:
		GameObject.Find("Square").transform.position = spotLeft.transform.position;
		GameObject.Find("Circle").transform.position = spotRight.transform.position;
		break;
		
	
	}


}

function Check1Pass()
{

	check1 = true;

}

function Check1Fail()
{

	check1 = false;

}

function Check2Pass()
{

	check2 = true;

}

function Check2Fail()
{

	check2 = false;

}