import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import express from "express";
import { UserModel } from "./db.js";
const app = express();
app.use(express.json);
app.post("/api/v1/signup", async (req, res) => {
    // Todo: zod alidation , hash the password
    const username = req.body.username;
    const password = req.body.password;
    await UserModel.create({
        username: username,
        password: password
    });
    res.json({
        msg: "user signed up"
    });
});
app.post("/api/v1/signin", (req, res) => {
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
//.d.ts
//# sourceMappingURL=index.js.map