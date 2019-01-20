const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lab-mongoose-movies';

const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const celebrities = [
  {
    name: "Marilyn Monroe",
    occupation: "actress",
    catchPhrase: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring", 
    photo: "https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2013/10/ap_225600nyr111_12625973.jpg?itok=aVqpC-yA"
  },
  {
    name: "Audrey Hepburn",
    occupation: "actress",
    catchPhrase: "The beauty of a woman is not in the clothes she wears, the figure that she carries, or the way she combs her hair",
    photo: "https://cdn.glamour.es/uploads/images/thumbs/201304/audrey_hepburn_20_razones_que_hacen_de_ella_un_icono_irreemplazable_900952532_667x1000.jpg"
  },
  {
    name: "Charlie Chaplin",
    occupation: "actor",
    catchPhrase: "You’ll never find rainbows if you’re looking down",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Charlie_Chaplin_portrait.jpg/220px-Charlie_Chaplin_portrait.jpg"
  },
  {
    name: "Clark Gable",
    occupation: "actor",
    catchPhrase: "Frankly, my dear, I don't give a damn",
    photo: "https://images03.military.com/sites/default/files/styles/full/public/media/people/2013/07/clarkgable.jpg?itok=MYM3Itrp"
  },
  {
    name: "James Dean",
    occupation: "actor",
    catchPhrase: "Dream as if you will live forever; Live as if you will die today",
    photo: "https://upload.wikimedia.org/wikipedia/commons/4/40/James_Dean_-_publicity_-_early.JPG"    
  },
  {
    name: "Rita Hayworth",
    occupation: "actress",
    catchPhrase: "I like having my picture taken and being a glamorous person",
    photo: "https://m.media-amazon.com/images/M/MV5BMTQxOTk1NTQ1M15BMl5BanBnXkFtZTcwMjI1MDAwNA@@._V1_.jpg"    
  },
  {
    name: "Clint Eastwood",
    occupation: "actor",
    catchPhrase: "I tried being reasonable, but I didn't like it",
    photo: "https://i.pinimg.com/originals/58/ec/10/58ec10fe3a7185cb24c9f3449806e4b9.jpg"    
  },
   {
    name: "Morgan Freeman",
    occupation: "actor",
    catchPhrase: "Challenge yourself; it's the only path which leads to growth",
    photo: "https://evcnoticias.files.wordpress.com/2018/05/640x480_60527p00-gmpoo.png?w=320&h=350&crop=1"  
  }
]

const movies = [
  {
    title: "El bueno, el feo y el malo",
    genre: "Western",
    plot: "Blondie (Clint Eastwood), Tucco (Eli Wallach) y Angel Eyes (Lee Van Cleef) emprenden en una odisea para desenterrar un tesoro escondido en una tierra devastada por los acontecimientos de la Guerra Civil Americana.",
    cover: "http://es.web.img3.acsta.net/c_215_290/pictures/14/03/21/13/49/293020.jpg"
  },
  {
    title: "El gran dictador",
    genre: "Comedia dramática",
    plot: "Chaplin interpreta a un barbero judío y a un dictador alemán, en esta crítica del fascismo de la II Guerra Mundial.",
    cover: "http://www.amnistiacatalunya.org/edu/pelis/dudh/elgrandictador.jpg"
  },
  {
    title: "Lo que el viento se llevó",
    genre: "Novela",
    plot: "Estamos en 1861, en los prolegómenos de la guerra de Secesión, y todos los jóvenes sureños muestran entusiasmo por entrar en combate, excepto el atractivo aventurero Rhett Butler. A Butler le gusta Scarlett, pero ésta sigue enamorada de Ashley, que acaba de hacer público su compromiso con Melanie.",
    cover: "https://cadenaser00.epimg.net/ser/imagenes/2008/08/27/cultura/1219792629_740215_0000000000_noticia_normal.jpg"
  },
  {
    title: "Gilda",
    genre: "Cine negro",
    plot: "Un veterano con buena suerte en las mesas de juego de un casino en Buenos Aires, se enamora de la esposa del dueño.",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Gilda.jpg/220px-Gilda.jpg"
  },
  {
    title: "Cadena perpetua",
    genre: "Drama",
    plot: "Un hombre inocente es enviado a una corrupta penitenciaria de Maine en 1947 y sentenciado a dos cadenas perpetuas por un doble asesinato.",
    cover: "https://www.ecartelera.com/carteles/5600/5676/003_m.jpg"
  },
  {
    title: "Gran Torino",
    genre: "Drama",
    plot: "Vecinos inmigrantes obligan a un veterano a enfrentarse a los prejuicios de mucho tiempo.",
    cover: "http://www.argenteam.net/resources/covers/7367aece4ff240bf7e96384daf5d6836.jpg"
  },
  {
    title: "La muerte tenía un precio",
    genre: "Western",
    plot: "Dos cazarrecompensas persiguen al líder de una banda de forajidos que está aterrorizando la zona del suroeste. En un principio los hombres se ven como rivales, pero acabarán colaborando para dar caza a este infame criminal.",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51ZwF0aHzZL._SY445_.jpg"
  },
  {
    title: "Desayuno con diamantes",
    genre: "Comedia romántica",
    plot: "Cuando Holly, una joven neoyorquina que aparentemente lleva una vida fácil y alegre conoce a Paul, un escritor, sus vidas cambian para siempre. Él se relaciona con una señora mayor adinerada que le mantiene mientras persigue su sueño de convertirse en escritor; y ella por su parte vive obsesionada con poder llevar una vida plagada de lujos y bienes materiales. Tras conocerse, ya nada será igual.",
    cover: "http://es.web.img2.acsta.net/pictures/14/03/17/09/21/169854.jpg"
  }
]

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const p1 = Celebrity.create(celebrities);
    const p2 = Movie.create(movies);
    console.info(`Successfully connected to ${MONGO_URI}`);
    Promise.all([p1, p2])
      .then(() =>
        moongoose.connection.close())
          .then(() => console.log("celebrities and movies created (and end of connection)"))
          .catch(() => console.log("a la mierda, ya se jodió"))         
  }) 
  .catch(error => console.error('An error ocurred trying to connect to database', error));