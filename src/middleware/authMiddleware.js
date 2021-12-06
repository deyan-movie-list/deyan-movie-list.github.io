import * as authServices from './../services/authService.js';

export function authMiddleware(ctx,next) {
    let userData= authServices.getData();
    if (userData.accessToken) {
      
        ctx.isAuthenticated=true;
        ctx.userId = userData._id
        ctx.email=userData.email
        ctx.token = userData.accessToken;
    } 

    next();

}



