// This is a working 2D Platform controller with 
//Note this has no Z Lock so it can move in the Z

@script RequireComponent(CharacterController)

var speed: float = 6;
var jumpSpeed: float = 8;
var gravity: float = 20;
var canJump: int = 0;
var maxJumps:int = 2;
var moveDirection: Vector3 = Vector3.zero;

var onWall:boolean = false;
var controller: CharacterController;
var antiBump:float = .75;

var normTime: boolean;
var trampJump: float;
static var isCirActive: boolean;

//keep form moving
var theZ: float;


var faceText: Texture[]; //array to hold all the texture
//0. actvie
//1. !active
//2. blink
//3. death
//4. jump
//5. skill
 
var eyes: GameObject; //for the plane eyes material is on
var alive: boolean = true;

var body: GameObject;
var col: GameObject;
var deadPart: GameObject;

function Awake()
{
	theZ = gameObject.transform.position.z;
	
	//Get controller
	controller = GetComponent(CharacterController);
	normTime = true;
	
}

//MovingPlatform Vars 
private var activePlatform : Transform;
private var activeLocalPlatformPoint : Vector3;
private var activeGlobalPlatformPoint : Vector3;
private var lastPlatformVelocity : Vector3;
//For Platform Rotation System
private var activeLocalPlatformRotation : Quaternion;
private var activeGlobalPlatformRotation : Quaternion;

function Update()
{	
	gameObject.transform.position.z = theZ;
	
	if(isCirActive == true)
	{
		//Chec to see if on Ground
		if(controller.isGrounded)
		{
			if(alive)
			{
				//makes texture active
				eyes.renderer.material.mainTexture = faceText[0];
			}
			else
			{
				//makes texture active
				eyes.renderer.material.mainTexture = faceText[3];
			}
			
			
			canJump = 0;
			//Add some Negitive Y for anti Bump for going down hills
			moveDirection = Vector3(Input.GetAxis("Horizontal"),-antiBump, 0);
			//Move in the Correct Direction
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;	
		}
		else
		{
			//Fixed for Advanced Jumping
			moveDirection.x = Input.GetAxis("Horizontal");
			moveDirection.x *= speed;
			
		}
		//Apply Jump Code
		Jumping();	
	

		if(Input.GetKeyUp("g"))
		{
			//makes texture skill
				eyes.renderer.material.mainTexture = faceText[5];
			if(normTime == true)
			{
				Time.timeScale = 1;
				normTime = false;
			}
			else
			{
				Time.timeScale = .25;
				normTime = true;
			}
			
		}
	}
	else
	{
		//makes texture not active
		
		eyes.renderer.material.mainTexture = faceText[1];
		moveDirection.x = 0;
	}
	
		//apply gravity
		if(!controller.isGrounded)
		{
			moveDirection.y -= gravity * Time.deltaTime;
		}
	
	//Moving the Charactor Apply all effects such as jumping || gravity || dash before this STEP!
	MoveCharactor();
	
	//Detect which direction you are moving	
	DetectDirection();
	
}

public function DetectDirection()
{
	//Does nothing yet but soon for animations
	if(moveDirection.x >= .5)
	{
		//print("Right");
		return;
	}
	if(moveDirection.x <= -.5)
	{
		//print("Left");
		return;
	}
}




public function Jumping()
{
//Allow Double or more
if(canJump != maxJumps)
{
	if (Input.GetButtonDown("Jump") || Input.GetKeyDown("w"))
	{
		//makes texture jump
		eyes.renderer.material.mainTexture = faceText[4];
		SoundManager.thing.playJump();
		canJump++;
		moveDirection.y = jumpSpeed;
	}
	
}

}

function MoveCharactor()
{
	//The complicated code
	if (activePlatform != null) {
        var newGlobalPlatformPoint = activePlatform.TransformPoint(activeLocalPlatformPoint);
        var moveDistance = (newGlobalPlatformPoint - activeGlobalPlatformPoint);
        if (moveDistance != Vector3.zero)
        	{
        		//Move With Platform
        		//####################################################################
                controller.Move(moveDistance);
            }
        
        	lastPlatformVelocity = (newGlobalPlatformPoint - activeGlobalPlatformPoint) / Time.deltaTime;


        // If you want to support moving platform rotation as well:
        var newGlobalPlatformRotation = activePlatform.rotation * activeLocalPlatformRotation;
        var rotationDiff = newGlobalPlatformRotation * Quaternion.Inverse(activeGlobalPlatformRotation);

        // Prevent rotation of the local up vector
        rotationDiff = Quaternion.FromToRotation(rotationDiff * transform.up, transform.up) * rotationDiff;

        transform.rotation = rotationDiff * transform.rotation;
    }
    else {
        lastPlatformVelocity = Vector3.zero;
    }

    //Apply MOVEMENT!
    //####################################################################
	
		controller.Move(moveDirection * Time.deltaTime);


    // Moving platforms support
    if (activePlatform != null) {
        activeGlobalPlatformPoint = transform.position;
        activeLocalPlatformPoint = activePlatform.InverseTransformPoint (transform.position);

        // If you want to support moving platform rotation as well:
        activeGlobalPlatformRotation = transform.rotation;
        activeLocalPlatformRotation = Quaternion.Inverse(activePlatform.rotation) * transform.rotation; 
    }

}


function OnControllerColliderHit (hit : ControllerColliderHit) {
    // Make sure we are really standing on a straight platform
    // Not on the underside of one and not falling down from it either!
    //Get Active Platform
    if (hit.moveDirection.y < -0.9 && hit.normal.y > 0.5) {
        activePlatform = hit.collider.transform;    
    }
    //Knock the Player down
    if(controller.collisionFlags == CollisionFlags.Above)
    {
    	moveDirection.y -= gravity * Time.deltaTime;
    }
}
function Tramp(temp)
{
	trampJump = temp;
	moveDirection.y = trampJump;
}

function Death()
{
	alive = false;
	yield WaitForSeconds(.1);
	col.collider.enabled = false;
	eyes.renderer.enabled = false;
	body.renderer.enabled = false;
	var temp: GameObject = Instantiate(deadPart, transform.position, transform.rotation);
	SoundManager.thing.playDeath();
	yield WaitForSeconds(.5);
	//instantiate particle
	Application.LoadLevel(Application.loadedLevelName);
}
