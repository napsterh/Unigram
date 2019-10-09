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
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
                username:'Juan.vidal',
                avatar:'https://i.blogs.es/de3e88/steve-jobs/450_1000.png'
            },
            url:'office.jpg',
            likes: 1,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];

    empty(main).appendChild(template(pictures));
})
