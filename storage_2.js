var uid = window.localStorage.getItem('name');

if (!uid) {
	window.localStorage.setItem('name', Math.random());
}
console.log(uid);
