import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

page('/:username', header, loadUser, function(ctx, next){ //:username porque la ruta varia dependiendo del usuario que inicie sesion, tambien incluimos header para cargarlo en la vista
    var main = document.getElementById('main-container')
    title(`Unigram - ${ctx.params.username}`) //ctx obtiene parametros del contexto
    empty(main).appendChild(template(ctx.user))//el empty eliminara todo lo que hubo en la pagina actual y cuando cargue la nueva ruta, insertara o cargara el tamplate
}) 


async function loadUser (ctx, next){
    try{
        ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
        next()
    }catch (err){
        console.log(err)
    }
}
