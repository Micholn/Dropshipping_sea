import server from './server';
require("dotenv").config();

const port = parseInt(process.env.PORT || '8000')

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;











 }  




  passport.serializeUser((user, done) => (null, user.id))
  passport.deserializeUser((id, done) => {  
    return done(null, getUserById(id))
   })

}

module.exports = initialize; //exporting the function so that it can be useable