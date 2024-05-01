import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 21600, // expires in 15days
  });
  console.log("generate token ==> ", token);

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // expires in 1 minutes
    httpOnly: true, // so the cookie only accessible by the web server
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "production",
  });
};

export default generateTokenAndSetCookie;
