import {html} from 'https://unpkg.com/lit-html?module';
import * as movieService from '../services/movieServices.js'

const movieCardTemplate=({title,description,img,_id})=>html`
<li class="movie-list-item" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <a href="/movies/${_id}" class="btn btn-primary">Details</a>
  </div>
</li>`

const moviesTemplate=(movies)=>html`
<h2>
    <ul class="movie-list">
 ${movies.map(x=>movieCardTemplate(x))}
    </ul>
</h2>

`

export function moviePage(ctx) {
    movieService.getAll()
    .then(movies=>{
     
        ctx.render(moviesTemplate(movies))
    })

  //  ctx.render(moviesTemplate())
}

export function myMoviesPage(ctx) {
 
  movieService.getMyMovies(ctx.userId)
  .then(movies=>{
    
      ctx.render(moviesTemplate(movies))
  })

//  ctx.render(moviesTemplate())
}