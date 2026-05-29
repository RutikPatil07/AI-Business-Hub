from flask_mail import Mail, Message

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'yourmail@gmail.com'
app.config['MAIL_PASSWORD'] = 'password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route("/contact", methods=["POST"])
def contact():

    data = request.json

    msg = Message(
        "New Contact",
        sender=data["email"],
        recipients=["yourmail@gmail.com"]
    )

    msg.body = data["message"]

    mail.send(msg)

    return {
        "message":"Mail Sent"
    }