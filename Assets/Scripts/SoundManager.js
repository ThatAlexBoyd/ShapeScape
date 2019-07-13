#pragma strict

var jump: AudioClip;
var death: AudioClip;
var collect: AudioClip;

var level: AudioClip;

static var thing: SoundManager;

function Awake()
{
	//level.Play();
	thing = this;
}

function playJump()
{
	audio.PlayOneShot(jump);
}

function playDeath()
{
	audio.PlayOneShot(death);
}

function playCollect()
{
	audio.PlayOneShot(collect);
}
