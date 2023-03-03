// var loginlist = {
//   userlist: [
//     { uname: "usr1", pword: "a123" }
//   ]
// };

function validateForm() {
  let url = window.location.href;
  url = url.substring(0, url.lastIndexOf('/')+1)
  window.location.replace(url+"dashboard.html");
    // var username = document.getElementById("form__username").value;
    // var password = document.getElementById("form__password").value;
    // console.log(username, password);
    // if(username === '' || password === ''){
    //     console.log('here1')
    //     return false;
    // }
    // const auth = userlist.find((element) => element.uname === username && element.pword === password);
    // if(auth){
    //     let url = window.location.href;
    //     url = url.substring(0, url.lastIndexOf('/')+1)
    //     window.location.replace(url+"dashboard.html");
    // }
    // return;
}

document.getElementById('submit').addEventListener('click', validateForm);
