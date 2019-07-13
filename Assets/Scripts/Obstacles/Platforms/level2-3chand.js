
var platform1: GameObject;
var platform2: GameObject;

var count:int = 0;
var thrdSwitch:boolean = false;

function Awake()
{
	thrdSwitch = false;
}
function Update()
{
	if(count == 2)
	{
	
		platform1.SendMessage("DropPlatform");
	
	}
	if(thrdSwitch == true)
	{
		
		platform2.SendMessage("TurnOn");
	}
	
	
}


function CountUp()
{
	count += 1;
}

function CountDown()
{
	count -= 1;
}

function thirdSwitch()
{

	thrdSwitch = true;
}


