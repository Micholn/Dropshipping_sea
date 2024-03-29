import server from './server';
require("dotenv").config();

const port = parseInt(process.env.PORT || '8000')

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;












const LocalStrategy = require("passport-local").Strategy//the local version that allows us to login
const bcrypt = require("bcrypt"); //for hashing

/**initialize passport and pass it to our different functions */
function initialize(passport, getUserByEmail, getUserById) {
  /**the parameters we're authenticating are: email, password and the done function is going 
   * to be called when we're done authenticating our user*/
  const authenticateUser = async (email, password, done) => {
      const user = getUserByEmail(email)
      if (user == null) {
        return done(null, false, { message: "No user with that email"});
      }  




  passport.serializeUser((user, done) => (null, user.id))
  passport.deserializeUser((id, done) => {  
    return done(null, getUserById(id))
   })

}

module.exports = initialize; //exporting the function so that it can be useable