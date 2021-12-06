 
import { html } from 'https://unpkg.com/lit-html?module';
import * as movieServices from './../services/movieServices.js';
import {movieFormTemplate} from './templates/movieFormTemplate.js'


const deleteMovieTemplate=(onClick,movie)=>html`
<div class="alert alert-danger" role="alert">
 Are you sure you want to delete movie ${movie.title}
</div>

<a class="btn btn-info" href="/movies/${movie._id}"  >Cancel</a>
<button class="btn btn-danger" @click=${onClick} >Delete</button>
`

export function deleteMoviePage(ctx) {
    const onMovieDelete=()=>{
        movieServices.deleteMovie(ctx.params.movieId)
        .then(res=>{
            console.log(res);
            ctx.page.redirect('/movies')
        })
    }

    movieServices.getOne(ctx.params.movieId)
        .then(movie=>{
            ctx.render(deleteMovieTemplate(onMovieDelete, movie))
        })
    
    
}