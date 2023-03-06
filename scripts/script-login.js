function validateForm() {
  let url = window.location.href;
  url = url.substring(0, url.lastIndexOf('/')+1)
  window.location.replace(url+"dashboard.html");
}

document.getElementById('submit').addEventListener('click', validateForm);
