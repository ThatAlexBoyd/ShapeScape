#pragma strict

var speed:int = 10;
var destroyTime:float = 1;

var normTxt: Texture;
var frzTxt: Texture;
var enemy: GameObject;
var frzPart: GameObject;

function Update () {

	rigidbody.AddForce(Vector3.right * speed );
	SelfDestruct();

}

function SelfDestruct()
{

	yield WaitForSeconds(destroyTime);
	Destroy(gameObject);

}

function StopMoving()
{
	enemy.renderer.material.mainTexture = frzTxt;
	var temp: GameObject = Instantiate(frzPart, transform.position, transform. rotation);
	rigidbody.isKinematic = true;
	yield WaitForSeconds(5);
	enemy.renderer.material.mainTexture = normTxt;
	rigidbody.isKinematic = false;
	gameObject.transform.position.y +=.00001;
	
}

function OnCollisionEnter(col: Collision)
{

	if(col.gameObject.tag == "enemy")
	{
		
		col.gameObject.SendMessage("die");
	}

}