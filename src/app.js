import page from '//unpkg.com/page/page.mjs'


import { homePage } from './views/homeView.js';
import { moviePage, myMoviesPage } from './views/movieView.js';
import { loginPage } from './views/loginView.js';
import { renderMiddleware } from './middleware/renderMiddleware.js'
import { movieDetailsPage } from './views/movieDetailsView.js';
import { renderNavigation } from './views/navigationView.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import { addMoviePage } from './views/addMovie.js';
import { editMoviePage } from './views/editMovie.js';
import {deleteMoviePage} from './views/deleteMoviePage.js'

page(authMiddleware)
page(renderMiddleware);

page('/',homePage);
page('/movies', moviePage);
page('/login',loginPage);
page('/movies/add', addMoviePage)
page('/movies/:movieId',movieDetailsPage)
page('/movies/:movieId/edit',editMoviePage)
page('/my-movies',myMoviesPage);
page('/movies/:movieId/delete', deleteMoviePage)

page.start();

