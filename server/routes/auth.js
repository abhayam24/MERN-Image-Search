import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login/failed" }),
  (req, res) => {
    res.redirect("http://localhost:3000");
  }
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({ success: false, message: "Google login failed" });
});

router.get("/logout", (req, res) => {
  req.logout(() => res.redirect("http://localhost:3000"));
});

export default router;
