#pragma strict
var wayPoints:Transform[]; // [] makes it an array
var speed:float;
var isEnabled:boolean =true;
var pauseDuration:float;
var currentWay:int;
var TurningOff:boolean = false;



function Awake()
{
	
	//currentWay = 0;
	
	
}

function FixedUpdate ()
{

	if(isEnabled)
	{
		MoveObject();
		if(transform.position == wayPoints[currentWay].position)
		{
			currentWay++;
			
				if(currentWay == 4)
				{
					Debug.Log("woop");
					PauseObject();
				}
				if(currentWay == wayPoints.Length) // so the code wont go out of bounds
				{
					currentWay = 0;
					PauseObject();
				}
				
		}
	}
	if(TurningOff)
	{
		TurnOff();
	}
}

function MoveObject()
{
	
	transform.position = Vector3.MoveTowards(transform.position,wayPoints[currentWay].position,speed*Time.deltaTime);
	

	
}


function PauseObject()
{
isEnabled = false;
yield WaitForSeconds(pauseDuration);
isEnabled = true;
}

function TurnOn()
{

	isEnabled = true ;

}

function TurnOff()
{
	
	
	if(currentWay == 2 || currentWay == 10)
	{
		isEnabled = false;
		
	}
}

function TurnedOff()
{
	TurningOff = true;
}

function StopMoving()
{
	isEnabled = false;
	gameObject.tag = "frozen";
	yield WaitForSeconds(3);
	isEnabled = true;
	gameObject.tag = "enemy";
	
	

}

function die()

{

	Destroy(gameObject);

}



