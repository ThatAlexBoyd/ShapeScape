#pragma strict

function Awake()
{
	KillMe();
}

function KillMe()
{
	yield WaitForSeconds (1);
	Destroy(gameObject);
}