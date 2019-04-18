function setCookie(c_name, value, exdays) {
	var date = new Date();
	date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
	expires = '; expires=' + date.toGMTString();
	document.cookie = c_name + "=" + value + expires + '; path=/';
}

function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1) {
		c_start = c_value.indexOf(c_name + "=");
	}
	if (c_start == -1) {
		c_value = null;
	} else {
		c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
		}
		c_value = unescape(c_value.substring(c_start, c_end));
	}
	return c_value;
}

var visit_number = getCookie("visit_number_tp");
if (visit_number != null && visit_number != "") {
	visit_number = parseInt(visit_number) + 1;
	setCookie('visit_number_tp', visit_number, 2);
	document.getElementById('third_party').textContent = getCookie("visit_number_tp");
} else {
	setCookie('visit_number_tp', 1, 2);
	document.getElementById('third_party').textContent = getCookie("visit_number_tp");
}