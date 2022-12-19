const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51LURq3HnZqhZ7uCL9rrVQ6KZmRvrGDJLoBUzFmfIAYywneLKLk2y0QbMSPyJkNvYN1t8TRfSoj686BadUX0dHyrj00TfLOA2Q1"
);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.get("/test", (req, res) => res.status(200).send("Bu test World!"));

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;
    console.log("Payment Request", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    console.log(paymentIntent.client_secret);

    // OK Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

// http function initialized http://127.0.0.1:5001/fir-9230e/us-central1/api