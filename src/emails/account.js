const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)
const welcome = (email,name) => {
    sgMail.send({
        to: email,
        from: 'Kukabiceps@pvtltd.com',
        subject: 'Thanks for Signing Up! Welcome.',
        text: 'Welcome to kukabiceps.Feel free to connect to us!'
    })
}
const cancel = (email,name) => {
    sgMail.send({
        to: email,
        from: 'Kukabiceps@pvtltd.com',
        subject: 'Let us know why you deleted the account!',
        text: 'Give a feedback so that we can improve' 
    })
}
module.exports = {
    welcome,
    cancel
}