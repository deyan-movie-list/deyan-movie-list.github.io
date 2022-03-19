import {
  html
} from 'https://unpkg.com/lit-html?module';
import * as authServices from './../../src/services/authService.js'

const loginTemplate = (onSubmit) => html `
   <div class="login-container">
  <div class="mb-3 row">
    <h4>Login Page</h4>

    <form  @submit=${onSubmit}>
    <div class="col-sm-10">
    <label for="eamil" class="col-sm-2 col-form-label">Email</label>
    
    
      <input type="text"  class="form-control" id="email" name="email" >
    </div>
 <br>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" name="password">
    </div>
   </div>
    <div class="mb-3 row">
    <div style="width:150px;">
      <input type="submit" class="form-control" >
    </div>
 
  </div>

    </form>

  </div>`

export function loginPage(ctx) {
  const onLoginSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
 
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    authServices.login(email, password)
      .then(() => {
        ctx.page.redirect('/');
      })
console.log('here we go')
    if (email && password) {
      return
    }

  }
  
  ctx.render(loginTemplate(onLoginSubmit))
}
