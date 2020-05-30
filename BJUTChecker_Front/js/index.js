$(function() {

    var token = localStorage.getItem('token');

    /*校验*/
    if (token == null) {
        window.location.href = 'login.html';
    }
});