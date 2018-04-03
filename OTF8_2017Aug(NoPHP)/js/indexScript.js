
var isMenuButtonPressed = false;

document.getElementById('indexMainTitle').onclick = function()
{
	if(!isMenuButtonPressed)
		{
			document.getElementById('Background2').style.display = 'block';
			document.getElementById('Background1').style.display = 'none';
			document.getElementById('indexMainTitle').style.color = RGB(0, 0, 0);
			isMenuButtonPressed = true;
		}
	else
		{
			document.getElementById('Background1').style.display = 'block';
			document.getElementById('Background2').style.display = 'none';
			isMenuButtonPressed = false;
		}
}

document.getElementById('Exit').onclick = function()
{
	document.getElementById('Background1').style.display = 'block';
	document.getElementById('Background2').style.display = 'none';
	isMenuButtonPressed = false;
}