/*Los servicios dentro de angular tienen caracteristicas
 principales como brindar informacion a quien la necesite,
 realizar peticiones CRUD(create, read, update, delete),
 mantener la data de forma persistente, servir como un
 recurso re-utilizable para nuestra APP*/

/*'Injectable' es un decorador o funcion que pondremos
 en nuestra clase*/
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {



/*Propiedad que cargara la data de los heroes y que sera de tipo 'Heroe' implemenatdo Interface */
  private heroes: Heroes[] = [
    {
      nombre: 'Thor',
      bio:
        'Thor (Thor Odinson) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje, que se basa en la deidad nórdica del mismo nombre, es el dios del trueno asgardiano que posee el martillo encantado, Mjolnir, que le otorga la capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/88c1e338650505.598fa119bc679.jpg',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Aquaman',
      bio:
        'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Batman',
      bio:
        'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5e49138650505.598fa7a1c96e2.jpg',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      nombre: 'Daredevil',
      bio:
        'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/31b3e238650505.598fa5ee0c37d.jpg',
      aparicion: '1964-01-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio:
        'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7dae7438650505.598fa119bd7b4.jpg',
      aparicion: '1962-05-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio:
        'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Deadpool',
      bio:
        'Wade Winston Wilson, más conocido como Deadpool, es un personaje ficticio, mercenario, supervillano6​7​ y antihéroe; era un asesino internacional que había trabajado para varios gobiernos cuando desarrolló cáncer, en un esfuerzo por encontrar una cura, se matriculó en el programa Arma-X en Canadá, lo que le dio un factor de curación sobrehumano. Él es mercenario salvaje e imprevisible, un ex miembro de X-Force, un miembro confeso de los X -Men y se ha incorporado recientemente a los Thunderbolts. Él es conocido como “el Mercenario Bocazas”, capaz de por romper la Cuarta Pared.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6938438650505.598fa5ee0cdf7.jpg',
      aparicion: '1991-04-05',
      casa: 'Marvel'
    },
    {
      nombre: 'Spider-Man',
      bio:
        'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64838738650505.598fa28916115.png',
      aparicion: '1962-08-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio:
        'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14bc8b38650505.598fa5eee1e95.jpg',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Capitan America',
      bio:
        'Capitán América cuyo nombre real es Steven Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, El Capitán América viste un traje que lleva un motivo de la bandera de los Estados Unidos, y utiliza un escudo casi indestructible que lanza como proyectil. El personaje es generalmente representado como el álter ego de Steve Rogers, un joven frágil mejorado a la cima de la perfección humana por un suero experimental para ayudar a los esfuerzos inminentes del gobierno de Estados Unidos en la Segunda Guerra Mundial.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bdadd38650505.598fa118c9a00.jpg',
      aparicion: '1941-9-14',
      casa: 'Marvel'
    },
    {
      nombre: 'Ant-Man',
      bio:
        'Ant-Man (Scott Lang) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Scott Lang es un ex convicto y experto en electrónica contratado por Stark International, que le permite robar el traje Ant-Man de Hank Pym, que hace tiempo que renunció al nombre. Lang roba el traje por problemas económicos . Cuando Pym se entera, le da el traje a Lang, lo que le permite convertirse en el segundo Ant-Man. Como Ant-Man sirve como Vengador durante años, hasta que muere durante la historia de Avengers ',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14809638650505.598fa118c91f3.jpg',
      aparicion: '1979-05-21',
      casa: 'Marvel'
    },
    {
      nombre: 'Black Panter',
      bio:'T’Challa es el alias “civil” de Black Panther. Es el rey de la nación africana de Wakanda, una pequeña nación que solo existe en los relatos ficticios de Marvel. Estuvo muchos años casado con Ororo (Storm) hasta los acontecimientos de Avengers vs X-Men, donde escogió el bando contrario al de su esposa. Sus habilidades van desde la fuerza sobrehumana hasta los súper reflejos, sin embargo, es su gran astucia (de pantera) lo que lo vuelve distintivo. ',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1454d038650505.598fa118c9674.jpg',
      aparicion: '1966-06-08',
      casa: 'Marvel'
    },
    {
      nombre: 'Vision',
      bio:
        'Su creador en el Universo Marvel no es menos que el propio Ultron, en un proyecto que denominó "vision of perfection" (visión de perfección), intentando forjar una inteligencia que llamaría "Sintezoide" (básicamente, "un humano creado artificialmente" según el propio Ultron), para eliminar a Hank Pym (también conocido como Ant-Man, y creador de Ultron en su versión impresa). Su cualidad más importante es, además de ser un ser artificial pero con consciencia y pensamiento como cualquier humano, poder aumentar o reducir a voluntad la densidad de su cuerpo.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7383d138650505.598fa11956e27.jpg',
      aparicion: '1968-11-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Iron-Man',
      bio:
        'Anthony Edward Stark, más conocido como Tony Stark, un rico magnate empresarial estadounidense, playboy e ingenioso científico, sufre una grave lesión en el pecho durante un secuestro. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva crea, en cambio, una armadura poderosa para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Industrias Stark. Él usa el traje y las versiones sucesivas para proteger al mundo como Iron Man.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e13eb438650505.598fa118c8eab.jpg',
      aparicion: '1963-03-18',
      casa: 'Marvel'
    },
    {
      nombre: 'Super-Man',
      bio:
        'La historia original de Superman relata que nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6eb6f38650505.598fa7a08736e.jpg',
      aparicion: '1938-01-01',
      casa: 'DC'
    },
    {
      nombre: 'Flash',
      bio:
        'Apodado el "Corredor Escarlata", todas las encarnaciones del Flash poseen "súper velocidad", que incluye la capacidad de correr, moverse y pensar extremadamente rápido, también puede atravesar la materia sólida, usar reflejos sobrehumanos y aparentemente violar ciertas leyes de la física, como superar la velocidad de la luz.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/05b88f38650505.598fa7a086e49.jpg',
      aparicion: '1939-01-05',
      casa: 'DC'
    },
    {
      nombre: 'Wonder-Women',
      bio:
        'El personaje es una princesa guerrera de las Amazonas (basado en la raza de las amazonas de la mitología griega) y es conocida en su tierra natal como la princesa Diana de Temiscira. Cuando está fuera de su tierra natal, utiliza un alter-ego, por lo que también es conocida por su identidad secreta Diana Prince. Está dotada de una amplia gama de poderes superhumanos y habilidades de combate de batalla superiores, gracias a sus dones obtenidos de los dioses y su amplio entrenamiento. Ella posee un gran arsenal de armas, incluyendo entre las principales el Lazo de la Verdad, un par de brazaletes mágicos indestructibles, su tiara, que sirve como arma, y en algunos relatos, en la edad de oro, tuvo un avión invisible.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61b37438650505.598fa7a1c8da3.jpg',
      aparicion: '1941-12-10',
      casa: 'DC'
    },
     {
      nombre: 'Arrow',
      bio:
        'Flecha Verde es un héroe vigilante que combate al crimen utilizando la arquería, artes marciales y la tecnología. En su identidad secreta es Oliver Queen y vive en Ciudad Estrella como un multimillonario y playboy; Desde pequeño Oliver adoraba a su héroe, Robin Hood, y soñaba con ser un arquero natural, por lo que frecuentemente practicaba con su arco y flecha.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a152ca38650505.598fa7a0878f6.jpg',
      aparicion: '1941-02-07',
      casa: 'DC'
    },
    {
      nombre: 'Robin',
      bio:
        'Dick Grayson en su niñez era un acróbata callejero, el más joven de una familia llamada The Flying Graysons (Los Graysons Voladores). En la historia del cómic, un gánster llamado Anthony "Tony" Zucco mató a los padres de Grayson al sabotear su trapecio y equipamientos. Batman (con la identidad de Bruce Wayne) estaba investigando el crimen y puso a Dick bajo su custodia como tutor legal. Lo entrenó física y psicológicamente para que pudiera ser su asistente. Juntos investigaron el caso de la muerte de los padres y atraparon a Zucco.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73cef838650505.598fa7a3e8b23.jpg',
      aparicion: '1940-08-01',
      casa: 'DC'
    }, {
      nombre: 'Doctor Strange',
      bio:
        'Stephen Strange es un exitoso neurocirujano con un ego enorme, codicioso e insufrible. De la noche a la mañana, toda su carrera se va al garete cuando sus hábiles manos quedan destrozadas en un accidente de coche, Atrapado en una espiral descendente, Strange termina en el arroyo y acaba viajando a Tibet, donde le han asegurado que vive un anciano capaz de curar los daños en sus manos. El anciano resulta ser un maestro de las artes místicas. Aunque al principio se muestra escéptico, Stephen Strange termina convirtiéndose en su discípulo. Tras una serie de pruebas, el ex-cirujano se convierte en el nuevo hechicero supremo, un defensor encargado de proteger la Tierra de amenazas sobrenaturales.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fd44d538650505.598fa11957245.jpg',
      aparicion: '1963-07-10',
      casa: 'Marvel'
    },
    {
      nombre: 'Venom',
      bio:
        'Una deformación descomunal y retorcida de Spider-Man, Venom es el resultado de un simbionte alienígena fusionado con un humano que guarda rencor contra Peter Parker. Esta combinación ha demostrado ser casi letal para el trepador de paredes en numerosas ocasiones. A pesar de su odio hacia Spider-Man, Venom tiene un retorcido sentido de la moralidad, evitando dañar a cualquiera que considere inocente e incluso realizando actos heroicos. Sin embargo, nunca está claro por cuánto tiempo se pueden controlar los impulsos más oscuros de Venom. No importa cuán duro alguien trate de mantener el simbionte abajo, Venom siempre logra regresar, como una plaga.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/37c5ef38650505.598fa5eee28d2.jpg',
      aparicion: '1984-05-02',
      casa: 'Marvel'
    },
    
    
  ];

  constructor() {
    console.log('Servicio listo para usar!!');
  }

  /*Metodo que se encargara de obtener la data de los
  'heroes' y sera de visibilidad 'public' ya que la
  propiedad de la clase es 'private'*/
  public getHeroes() {
     return this.heroes;
  }

  /*Metodo que regresa un heroe en especifico */
  public getHeroe(index: string) {
    return this.heroes[index];
 }

 /*Sevicio que nos ayudara a buscar un heroe en especifico
 en nuestro 'arrays' de objetos donde se encuentran todos
 los heroes, resive un termino, que sera el que se valla a
 buscar */
                                // indicando que regresara una interface de tipo 'Heroes'
 buscarHeroes(termino: string): Heroes[] {

 const heroesArr: Heroes[] = [];

 // el termino puede venir en Mayúscula o Minúscula
 termino = termino.toLowerCase();

 /*barrido de todos nuestro heroes, para saber si alguno
 tiene el nombre que coincida con ese termino*/
 // tslint:disable-next-line: prefer-for-of
 for (let i = 0; i < this.heroes.length; i++ ) {

     let heroe = this.heroes[i];

   // nombre que se encontrara dentro de la variable 'heroe' ya que sera la encargada de extraer a cada 'heroe'
      let nombre = heroe.nombre.toLowerCase();

      // si el nombre del heroe es encontrado en el termino que se busco

      if (nombre.indexOf(termino) >= 0)  {// si es igual o superior a 0, fue encontrado el heroe, sino regresa un -1

           heroe.idx = i;
        // si lo encuentra, se agregara a nuestro arreglo de 'heroe'
           heroesArr.push(heroe);
      }

   }
 return heroesArr; // regresa el heroe encontrados
 }

}



/*Indicandole a TSC que si se quiere agregar otro heroe
tendra que tener obligatoriamente las propiedades que ya estan
definidas por medio de una '@interface' */
/*se lo pondra 'export' para poder ser exportado y utilizado
en otra parte del codigo*/
export interface Heroes {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}


/*Se le tiene que especificar a angular que este servicio
 puede se utilizado, y se declara en l archivo 'app.module.ts'*/


 /*Los 'pipes' tansforman la data en el template
  de forma visual son pequeñas funciones que se le
  pueden dar a nuestos alementos HTML
  la sintaxis es la siguiente '<h1>{{ejemplo | nombre_pipe }}</h1>' ,
  para enviarle parametros a los 'pipes' es de la siente manera
  " nombre-pipe:'parametro' "  */
