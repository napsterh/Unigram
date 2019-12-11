var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads')
    },
    filename: function (req, file, cb){
        cb(null, +Date.now() + '.' + ext(file.originalname))
    }    
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', { title:'Unigram' });
})

app.get('/signup', function(req, res){
    res.render('index', { title:'Unigram - Signup' });
})

app.get('/signin', function(req, res){
    res.render('index', { title:'Unigram - Signin' });
})


app.get('/api/pictures', function(req, res){
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
    setTimeout(() => res.send(pictures), 2000)
})

app.post('/api/pictures', function (req, res){
    upload(req, res, function (err){
        if(err){
            return res.send(500, "Error uploading file");
        }
        res.send('File uploaded');
    })
})

app.get('/api/user/:username', function(req, res){//devolvera los datos del usuario
    const user = {
        username: 'napster.lopez',
        avatar: 'https://avatars2.githubusercontent.com/u/37810245?s=400&u=5da66b632546c062b8d2b2c9571424ef1ff7c9f0&v=4',
        pictures: [
            {
                id: 1,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/37661036_1363696980431453_8201223739426209792_n.jpg?_nc_cat=102&_nc_oc=AQnH0jgI2NVQ59espIzdl01EP5pYpSS3NJlnZmINtq8rR4ItpQ2rpLfgu2yQYCmD-VI&_nc_ht=scontent.flim18-1.fna&oh=4aaa09a9bdcabf1c6a91f95f5bfdd1f7&oe=5E30D96C',
                likes: 15
            },
            {
                id: 2,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/62571630_1659349847532830_1437662112456376320_n.jpg?_nc_cat=103&_nc_oc=AQkONAy1ALGdUpX71x4W1zOz75u2-tzfaxlxCjk-XUpG-Uk3c4eKIGrHMlMgK3lIrag&_nc_ht=scontent.flim18-1.fna&oh=76bce0bffb2e089824ecadd52e87c970&oe=5E23C979',
                likes: 10
            },
            {
                id: 3,
                src: 'https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/61751007_1645209075613574_5695051498338123776_n.jpg?_nc_cat=107&_nc_oc=AQkiyTADjCDiLDydJwPP2dkss09kHdomkLWyZSY-GztAAor8HmXa0z97iWtrbcIUVa4&_nc_ht=scontent.flim18-3.fna&oh=27c47d11598ea115db4af67dfe5bc799&oe=5E1ED546',
                likes: 12
            },
            {
                id: 4,
                src: 'https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-9/44924188_1455546804579803_5268671909972672512_n.jpg?_nc_cat=111&_nc_oc=AQlrV7Qv3IPSKdK4eO1T55pDTGmwku596X7COnvWEXJJz7j1LsMr68uAvPdB_Equ6A8&_nc_ht=scontent.flim18-2.fna&oh=627a508588b789c4a151972c266daf7f&oe=5E1DBFD0',
                likes: 5
            },
            {
                id: 5,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/39943606_1406827012785116_481102587022540800_n.jpg?_nc_cat=103&_nc_oc=AQltytN9cO8yhGlRw133Id_xyzhvehhRz4y_7ml_igUEcMuaoI25gTrXNcFeoD8Vfqg&_nc_ht=scontent.flim18-1.fna&oh=d42e3dc78d0a888ffe065c8c3d698b09&oe=5E2CB72A',
                likes: 8
            },
            {
                id: 6,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/39512255_1400151560119328_2284923533479903232_n.jpg?_nc_cat=102&_nc_oc=AQkcMZZ2o_o6kvRh1sYf1g91hNGVUzdWhFF18nnPYhJwsR26h2_EBGuwhfw2FTrVPAw&_nc_ht=scontent.flim18-1.fna&oh=d9aea0be485b7b84f295c52a72419140&oe=5E5FD620',
                likes: 4
            },
            {
                id: 7,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/54731030_1574268539374295_8569938534234849280_n.jpg?_nc_cat=102&_nc_oc=AQmipoMP9ShaJ6Bx8EPYgIA2mJEyM5Dw4M-QLmnbzYGWOHRVtfqi18awouFHMqmXBE0&_nc_ht=scontent.flim18-1.fna&oh=06a51900fd476aaf5606bec37d723422&oe=5E5F27E1',
                likes: 1
            },
            {
                id: 8,
                src: 'https://scontent.flim18-1.fna.fbcdn.net/v/t1.0-9/44755822_1453264384808045_9078933167158591488_n.jpg?_nc_cat=102&_nc_oc=AQnKH1xmEQPv-AXh0iOCiSoQhYjkWS1RqubVX4kQX01LRiVNUFk6B1C_p01uStPGavc&_nc_ht=scontent.flim18-1.fna&oh=c348242f5cf520a425ede7842691e8a2&oe=5E6495CC',
                likes: 14
            },
            {
                id: 9,
                src: 'https://scontent.flim18-3.fna.fbcdn.net/v/t1.0-9/56444212_1593944317406717_6279232312622186496_n.png?_nc_cat=110&_nc_oc=AQkM90Y1cnGGSpV79b15RLFxR61oUBQerhKBRU8SLbB94U-LNHVTQj-EC35wI9ZQKJ0&_nc_ht=scontent.flim18-3.fna&oh=243921c96c9306c846b84c5485a85735&oe=5E30181F',
                likes: 9
            }
        ]
    }
    res.send(user);
})

app.get('/:username', function(req, res){//crea la ruta desde el servidor(para no mostrar el Cannot GET /homer.lopez de error)
    res.render('index', { title: `Unigram - ${req.params.username}`})//el index retorna el index.pug
})

app.get('/:username/:id', function(req, res){//crea la ruta desde el servidor(para no mostrar el Cannot GET /homer.lopez de error)
    res.render('index', { title: `Unigram - ${req.params.username}`})//el index retorna el index.pug
})

app.listen(3000, function(err){
    if(err) return console.log('Hubo un error'), process.exit(1);
    console.log('Unigram se esta ejecutando en el puerto 3000');
})
