// Notification API
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    Notification.requestPermission()
        .then(result => console.log(`The result is ${result}`))
        .catch(() => console.log('Error'));
});

if(Notification.permission === 'granted'){
    new Notification('This is a notification', {
        icon: 'img/ccj.png',
        body: 'This is the body of the notification',
        tag: 'notification'
    });
}