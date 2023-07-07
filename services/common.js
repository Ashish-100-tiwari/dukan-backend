const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}
exports.cookieExtractor=function(req){
    var token=null;
    if(req&&req.cookies){
        token=req.cookies['jwt'];
    }
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTg2NzMzYTE2Yzc4YTc3ZTJhMWUyOSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg4NzYwNDgzfQ.Jpha86l8PXNGFsC9TyG2q64iQAGx-byaNTnNgZowlRg"
    return token;
}