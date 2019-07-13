#pragma strict

function OnTriggerEnter(col:Collider)
{
	if(col.tag == "Player")
	{
		CounterScript.score++;
		Destroy(gameObject);
		SoundManager.thing.playCollect();
	}
}