import {
    html
} from "./../../node_modules/lit-html/lit-html.js";

const privateButtons = () => html `
<a class="nav-link" href="/my-movies">My Movies</a>
<a class="nav-link" href="/movies/add">Add Movies</a>
`
const guestButtons=()=>html``
const navigationTemplate = (isAuthenticated, email) => html `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">MovieDB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        
             
                <a class="nav-link active" aria-current="page" href="/">Home</a>
       
                <a class="nav-link" href="/movies">Movies</a>
           
                ${isAuthenticated
                ? privateButtons()
                : guestButtons()
                }
                <a class="nav-link" href="/login">Login</a>
            
           
        
    </div>

    <span> Welcome ${isAuthenticated&&email}
    </span>
</div>
</nav>`

export function renderNavigation(ctx) {

    return navigationTemplate(ctx.isAuthenticated, ctx.email);
}