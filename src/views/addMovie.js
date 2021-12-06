 
import * as movieServices from './../services/movieServices.js';
import {movieFormTemplate} from './templates/movieFormTemplate.js'



export function addMoviePage(context){

    const onSubmit=(e)=> {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        movieServices.create(title,imageUrl,description)
            .then(res=>{
                console.log(res);
                context.page.redirect('/movies')
            })

    }
    context.render(movieFormTemplate(onSubmit))
}