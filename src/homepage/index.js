var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
    title('Unigram')
    var main = document.getElementById('main-container');

    var pictures = [
        {
            user: {
                username:'homer.lopez',
                avatar:'https://i.blogs.es/de3e88/steve-jobs/450_1000.png'
            },
            url:'office.jpg',
            likes: 10,
            liked: true
        },
        {
            user: {
                username:'homer.lopez',
                avatar:'https://i.blogs.es/de3e88/steve-jobs/450_1000.png'
            },
            url:'office.jpg',
            likes: 2,
            liked: true
        }
    ];

    empty(main).appendChild(template(pictures));
})

    