var push=require('web-push')

let vapidKeys=
    {
        publicKey: 'BI9uuVSpc7ba6ThmQmG1BCEbrn_jfPjSF6fy2dK_AxGSe2qhN3Bi31ZV5KIU9W8xHd23qMnNQSt4VvBUjURMuWA', 
         privateKey: 'wPbUYzu__ll6EjHptWFPvjQbucjlvtt1uSc3lQNWRKQ'
    }

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub={
    "endpoint":"https://fcm.googleapis.com/fcm/send/eatS59il9Zk:APA91bFCx95Kx7K3Raf8UuypulAeVruAYl5gh4PWqs8YhPOya0nCp_V5hrhY_f3mZ9Y7NEzuzv7fhiVFbxgRw0rLcxh5VD6PrSfMoJfjBS6MWbDqXDEkfSs0wOlfabkOpGJzaqDEgdPN","expirationTime":null,"keys":{"p256dh":"BCutJ1T4hyF0a2zcS6PgcMZ80REmdGsOHxVgUJYcfgv17RQKRnD57-0HRY86fYIWEwm9Jr5l2R22u1lW1FDvGBU","auth":"oGDcw5a-csEYDNKef_yALw"}
};
push.sendNotification(sub,'test message')
