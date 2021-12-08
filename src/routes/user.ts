import { Router } from "express";
import passport from "passport";
import env from "../config/config";

export const router = Router();

const FortyTwoStrategy = require("passport-42").Strategy;

passport.use(
  new FortyTwoStrategy(
    {
      clientID: env.client.id,
      clientSecret: env.client.secret,
      callbackURL: env.client.callback,
      profileFields: {
        id: (obj: any) => String(obj.id),
        username: "login",
        displayName: "displayname",
        "name.familyName": "last_name",
        "name.givenName": "first_name",
        profileUrl: "url",
        "emails.0.value": "email",
        "phoneNumbers.0.value": "phone",
        "photos.0.value": "image_url"
      }
    },
    function(
      accessToken: string,
      refreshToken: string,
      profile: string,
      cb: Function
    ) {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      console.log(cb);
    }
  )
);

router.get("/login/", passport.authenticate("42"));
router.get(
  "/login/callback/42",
  passport.authenticate("42", { failureRedirect: "/login" })
);
