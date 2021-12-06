import {html} from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieServices.js'


const moviesTemplate=(movies)=>html`
<h2>
    <ul class="movie-list">
 ${movies.map(x=>html`<h6 class="card-title">Movie Name:  <p>  ${x.title}  </p>    </h6>`)}
    </ul>
</h2>

`

export  function moviePage(ctx) {
    movieService.getAll()
    .then(movies=>{
        ctx.render(moviesTemplate(movies))
    })

//    ctx.render(moviesTemplate())
}

