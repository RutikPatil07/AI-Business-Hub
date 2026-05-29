from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from groq import Groq

app = Flask(__name__)
CORS(app)

# JWT
app.config["JWT_SECRET_KEY"] = "secret-key"
jwt = JWTManager(app)

# GROQ CLIENT
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# ---------------- HOME ----------------
@app.route("/")
def home():
    return jsonify({
        "message": "Backend Running Successfully"
    })

# ---------------- LOGIN ----------------
@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if email == "patilrutik7259@gmail.com" and password == "#Rutik11223344":

        token = create_access_token(identity=email)

        return jsonify({
            "token": token,
            "message": "Login Successful"
        })

    return jsonify({
        "message": "Invalid Credentials"
    }), 401

# ---------------- CHAT ----------------
@app.route("/chat", methods=["POST"])
def chat():

    try:

        data = request.get_json()

        user_message = data.get("message")

        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[
                {
                    "role": "system",
                    "content": "You are a smart AI assistant. Give proper structured answers."
                },
                {
                    "role": "user",
                    "content": user_message
                }
            ],

            temperature=0.7,
            max_tokens=1000
        )

        ai_reply = response.choices[0].message.content

        return jsonify({
            "reply": ai_reply
        })

    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "reply": f"AI Error: {str(e)}"
        })

# ---------------- RUN ----------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)