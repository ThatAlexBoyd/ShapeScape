#pragma strict

 var check1:boolean = false;
 var check2:boolean = false;






function Update ()
{
    //CanISpawn();
    CanISpawn();
}


function CanISpawn()
{
	
	// going on player
	 var Downray:Ray = new Ray(transform.position, transform.TransformDirection( Vector3.down));
	 var Leftray:Ray = new Ray(transform.position, transform.TransformDirection(Vector3.left)); 
	 Debug.DrawLine(transform.position, transform.position+Downray.direction * 1.5 , Color.red);
	Debug.DrawLine(transform.position, transform.position+Leftray.direction * 1.5, Color.green);
	if(Physics.Raycast(Downray, 1.5))
	{
		//Debug.Log("Hit");
		check1 = true;
	}
	else
	{
		check1 = false;
	}
	if(Physics.Raycast(Leftray, 1.5))
	{
	
		//Debug.Log("Hit");
		check2 = true;
	}
	else
	{
		check2 = false;
	}
	
	if( check2 == false && check1 == true)
    {
    	GameObject.Find("GameManager").SendMessage("Check2Pass");
    }
    
    if( check2 == true && check1 == true)
    {
    
    	GameObject.Find("GameManager").SendMessage("Check2Fail");
    
    }
      if( check2 == false && check1 == false)
    {
    
    	GameObject.Find("GameManager").SendMessage("Check2Fail");
    
    }
    
		

}
