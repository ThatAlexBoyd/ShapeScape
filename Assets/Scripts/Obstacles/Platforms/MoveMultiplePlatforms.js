#pragma strict

var platforms: GameObject[];

var count:int = 0;


function Update()
{
	if(count == 0)
	{
		
	platforms[0].SendMessage("TurnOff");
	platforms[1].SendMessage("TurnOff");
	platforms[2].SendMessage("TurnOff");
	}
	if(count == 1)
	{
	
	platforms[0].SendMessage("TurnOn");	
	platforms[1].SendMessage("TurnOff");
	platforms[2].SendMessage("TurnOff");
	}
	if(count == 2)
	{
	
	platforms[1].SendMessage("TurnOn");	
	platforms[0].SendMessage("TurnOff");
	platforms[2].SendMessage("TurnOff");
	}
	if(count == 3)
	{
	
	platforms[0].SendMessage("TurnOff");
	platforms[1].SendMessage("TurnOff");
	platforms[2].SendMessage("TurnOn");	
	}
	if(count >= 50)
	{
	
	platforms[0].SendMessage("TurnOn");
	platforms[1].SendMessage("TurnOn");
	platforms[2].SendMessage("TurnOn");
	platforms[3].SendMessage("TurnOn");
	}
	
	
}


function CountUpOne()
{
	count += 1;
}

function CountDownOne()
{
	count -= 1;
}


function CountUpTwo()
{
	count += 2;
}

function CountDownTwo()
{
	count -= 2;
}

function CountUpThree()
{
	count += 50;
}