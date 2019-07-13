#pragma strict

//needs a rigidbody



var jumpPower: float;
var waitTime:float = 5.0;

var normTxt: Texture;
var frzTxt: Texture;
var enemy: GameObject;
var frzPart: GameObject;


function Awake()
{

gameObject.AddComponent(Rigidbody);
rigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotationZ;
 

}

function OnCollisionEnter()
{
	rigidbody.AddForce(Vector3.up * jumpPower);
}

function StopMoving()
{
	var temp: GameObject;
	
	enemy.renderer.material.mainTexture = frzTxt;
	temp  = Instantiate(frzPart, transform.position, transform.rotation);
	rigidbody.isKinematic = true;
	gameObject.tag = "frozen";
	yield WaitForSeconds(waitTime);
	rigidbody.isKinematic = false;
	enemy.renderer.material.mainTexture = normTxt;
	gameObject.tag = "enemy";
	gameObject.transform.position.y +=.00001;
	
}

function die()

{

	Destroy(gameObject);

}

