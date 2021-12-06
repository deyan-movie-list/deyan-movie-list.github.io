 
import * as movieServices from './../services/movieServices.js';
import {movieFormTemplate} from './templates/movieFormTemplate.js'

export function editMoviePage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description  = formData.get('description');
        let imageUrl  = formData.get('imageUrl');

        movieServices.update(ctx.params.movieId, title, imageUrl, description)
            .then(res =>{
                ctx.page.redirect(`/movies/${ctx.params.movieId}`)
            })
    }

    movieServices.getOne(ctx.params.movieId)
        .then(movie =>{

            ctx.render(movieFormTemplate(onSubmit, movie))

        })
}