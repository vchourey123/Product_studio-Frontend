localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');



if (localStorage.getItem('username') == 'admin' && localStorage.getItem('password') == 'admin') {
    console.log('You are logged in');
} else {
    console.log('You are not logged in');
}


