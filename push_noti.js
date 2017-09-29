var FCM = require('fcm-node');
var serverKey = 'AIzaSyBM7_X3e8RXSWTh6UiPb0nyGQil4YYSAIs';
var fcm = new FCM(serverKey);
var message = {
    to: 'ftDi8WS4brw:APA91bEqKcML1z9NQ0_SDXOLoNsJB67ZGP6RqPdMx696fF8Aqa3eHn_k2aB3Jp9LPA5vHAgxT6eqzRNHlRl8JCvmiUKfaOy-53UgJtrQ55GCpXNFdAi7_udydM_TSXmNsJOy8Ubi67dm',
    notification: {
        title: 'push notification',
        body: 'push notification testing',
        sound: 'default',
        icon: 'ic_notif',
    },
    data: {
        title: 'send_push',
        body: {
            id: '121212',
        },
        remote: true,
    }
};
fcm.send(message, function(err, response) {
    if (err) {
        console.log("Something went wrong");
    } else {
        console.log("message sent ", response);
    }
});