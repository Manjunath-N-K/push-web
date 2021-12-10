var push=require('web-push')

let vapidKeys=
    {
        publicKey: 'BI9uuVSpc7ba6ThmQmG1BCEbrn_jfPjSF6fy2dK_AxGSe2qhN3Bi31ZV5KIU9W8xHd23qMnNQSt4VvBUjURMuWA', 
         privateKey: 'wPbUYzu__ll6EjHptWFPvjQbucjlvtt1uSc3lQNWRKQ'
    }

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub={};
push.sendNotification(sub,'test message')
