import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/refresh-token", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = jwt.sign(
      { userId: user.userId },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.cookie("jwt", newAccessToken, {
      maxAge: 15 * 60 * 1000, // expires in 15 minutes
      httpOnly: true, // so the cookie only accessible by the web server
      sameSite: "strict", // CSRF attacks cross-site request forgery attacks
      secure: process.env.NODE_ENV !== "production",
    });

    res.json({ accessToken: newAccessToken });
  });
});

export default router;
