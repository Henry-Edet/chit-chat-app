import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15m", // expires in 15 minutes
  });

  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d", // expires in 7 days
  });

  console.log("generate access token ==>", accessToken);
  console.log("generate refresh token ==>", refreshToken);

  res.cookie("jwt", accessToken, {
    maxAge: 15 * 60 * 1000, // expires in 15 minutes
    httpOnly: true, // so the cookie only accessible by the web server
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "production",
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // expires in 7 days
    httpOnly: true, // so the cookie only accessible by the web server
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "production",
  });
};

export default generateTokenAndSetCookie;

// import jwt from "jsonwebtoken";

// const generateTokenAndSetCookie = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: 21600, // expires in 15days
//   });
//   console.log("generate token ==>", token);

//   res.cookie("jwt", token, {
//     maxAge: 15 * 24 * 60 * 60 * 1000, // expires in 1 minutes
//     httpOnly: true, // so the cookie only accessible by the web server
//     sameSite: "strict", //CSRF attacks cross-site request forgery attacks
//     secure: process.env.NODE_ENV !== "production",
//   });
// };

// export default generateTokenAndSetCookie;
