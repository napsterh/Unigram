import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

page('/:username', loadUser, header , function(ctx, next){ //:username porque la ruta varia dependiendo del usuario que inicie sesion, tambien incluimos header para cargarlo en la vista
    var main = document.getElementById('main-container');
    title(`Unigram - ${ctx.user.username}`); //ctx obtiene parametros del contexto
    empty(main).appendChild(template(ctx.user));//el empty eliminara todo lo que hubo en la pagina actual y cuando cargue la nueva ruta, insertara o cargara el tamplate
}); 

page('/:username/:id', loadUser, header, function(ctx, next){ 
    var main = document.getElementById('main-container');
    title(`Unigram - ${ctx.user.username}`); 
    empty(main).appendChild(template(ctx.user));
    //$(`#modal${ctx.params.id}`).openModal();

    var elem= document.querySelector(`#modal${ctx.params.id}`);
    var instance = M.Modal.init(elem);
    instance.open({
        onOpenStart: function(){
            const path = `/${ctx.params.username}`;
            page(path)
        }
    });
});

async function loadUser (ctx, next){
    try{
        ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
        next()
    }catch (err){
        console.log(err)
    }
}


