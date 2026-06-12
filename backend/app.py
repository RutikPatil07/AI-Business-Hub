from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from groq import Groq
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# JWT Configuration
app.config["JWT_SECRET_KEY"] = "secret-key"
jwt = JWTManager(app)

# Groq Client
groq_key = os.getenv("GROQ_API_KEY")

print("GROQ KEY FOUND:", bool(groq_key))

client = Groq(
    api_key=groq_key
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

    try:
        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        if (
            email == "patilrutik7259@gmail.com"
            and password == "#Rutik11223344"
        ):

            token = create_access_token(identity=email)

            return jsonify({
                "token": token,
                "message": "Login Successful"
            }), 200

        return jsonify({
            "message": "Invalid Credentials"
        }), 401

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# ---------------- CHAT ----------------
@app.route("/chat", methods=["POST"])
def chat():

    try:

        data = request.get_json()
        user_message = data.get("message", "")

        if not user_message:
            return jsonify({
                "reply": "Please enter a message."
            }), 400

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful AI assistant. Give clear, accurate and structured answers."
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

        print("GROQ ERROR:", str(e))

        return jsonify({
            "reply": "AI service error. Check backend logs.",
            "error": str(e)
        }), 500


# ---------------- RUN ----------------
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )