const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "68564922377-ohvkei1ne0fs1ht037re57srr5a4lusa.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "563ed07be377e2268234";
const GITHUB_CLIENT_SECRET = "61e9bcf221ec2c9d18f609628a078f6aa6ea8669";

const FACEBOOK_CLIENT_ID = "682509516968669";
const FACEBOOK_CLIENT_SECRET = "05b0097798f0d355b62114bfb8217c29";

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // if you to store the date of user in database
      done(null, profile);
    }
  )
);


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // if you to store the date of user in database
      done(null, profile);
    }
  )
);


passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // if you to store the date of user in database
      done(null, profile);
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