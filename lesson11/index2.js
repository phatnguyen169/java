let listUser = [];
if (localStorage.getItem('users')) {
	listUser = JSON.parse(localStorage.getItem('users'));
}

document.getElementById('register').addEventListener('click', function () {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getAnimations('password').value;
	const rePassword = document.getElementById('re-password').value;
});