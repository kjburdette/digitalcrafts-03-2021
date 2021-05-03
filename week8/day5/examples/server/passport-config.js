const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, userEmail, userId) {
    const authenticateUser = async (email, password, done) =>{
        const user = userEmail(email)

        // if the user is not in the db, error out
        if(user == null){
            return done(null,false, {message: "No user with that email."})
         }
         try{
            if(await bcrypt.compare(password, user.password)){
                return done(null,user)
            }else{
                return done(null, false, {
                    message: "Password does not match in our db."
                })
            }
         }catch (error){
            return done(error);
         }
    }
    passport.use(new LocalStrategy({ usernameField: "email"}, authenticateUser));
// this logs you in as a user and creates a session
    passport.serialzeUser((user,done) => done(null,user.id));
// this unlogs that session
    passport.deserializeUser((id,done) => {
    return done(null, userId);
});
}

module.exports = initialize;
