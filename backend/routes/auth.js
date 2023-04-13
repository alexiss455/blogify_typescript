const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:5173/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      massage: "successfull",
      user: req.user,
      cookies: req.cookies,
      //COOKIES or JWT TOKEN
    });
  }
});
router.get("/login/failed", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: false,
      massage: "failed",
    });
  }
});


router.get("/logut", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);



router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


module.exports = router;
