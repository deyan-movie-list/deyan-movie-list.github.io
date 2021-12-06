import {render} from 'https://unpkg.com/lit-html?module';
import {renderNavigation}  from '../views/navigationView.js';

let root = document.querySelector('.root');
let navigationElement = document.querySelector('.navigation')
 

const contextRender=(templateResult) => {
   render(templateResult,root)
}

export function renderMiddleware(ctx,next) {
    render(renderNavigation(ctx),navigationElement);
    ctx.render=contextRender;
    next();
}