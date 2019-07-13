var elevators:GameObject[];





function OnTriggerEnter (col: Collider) 

{
	
elevators[0].SendMessage("TurnOn");
elevators[1].SendMessage("TurnOn");

}

