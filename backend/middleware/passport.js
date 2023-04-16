const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
require("dotenv").config();
const User = require("../models/users");

async function userSave(profile, done) {
  try {
    const existingUser = await User.findOne({ passport: profile.id });
    if (existingUser) {
      console.log("User already exists");
      done(null, profile);
      return;
    } else {
      const user = new User({
        passport: profile.id,
        displayName: profile.displayName,
      });
      await user.save();
      console.log("User saved");
      done(null, profile);
    }
  } catch (error) {
    console.error(error);
    done(error, null);
  }
}

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userSave(profile, done);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userSave(profile, done);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      userSave(profile, done);
    }
  )
);

passport.deserializeUser((user, done) => {
  done(null, user);
});
passport.serializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
