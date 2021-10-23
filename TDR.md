# Calculadora Verde MVP - Hackathon BBVA 2021
<!-- For the title I usually like to have a structure like: Technical Design Review - %PROJECT_CATEGORY% -->

## 🔮 Idea general 🔮
<!-- Start at the beginning. What problem are you trying to solve? If you jump straight into solutions, it will be hard for people to orient themselves and will inevitably lead to misalignment and misunderstanding. It’s worth spending 2 or 3 sentences to effectively set the context for your spec.

Then, briefly state your proposed solution. This should be enough for most people to decide whether they should continue reading and should be understandable by someone who is not familiar with the project. Between a few sentences and two paragraphs should be enough.-->

El mercado cada vez más está considerando la importancia de integrar soluciones de impacto 0 medioambiental. Esto hace que las marcas y las empresas se vean forzadas a integrar procesos y conocimiento sobre éste ambito.

Por ello queremos proponer un panel de control interactivo que muestra de forma sencilla toda la información medioambiental de un dado dataset de empresas. Datos como las emisiones de CO2, el gráfico de evolución del impacto medioambiental e insights generados a partir de los consumos de gas, diesel y gasolina estarán contemplados.

## 💡 Motivación 💡

<!-- It’s unlikely that writing the design document is the first time you’ve thought about the problem. The background section is an opportunity to bring readers up to speed, and share the context you have on the problem space.

What are the motivations for the project or design? Is there any historical perspective that will help people understand the proposal? Has someone tried to solve the problem in the past? If so, why are those solutions no longer appropriate? Are there any other things going on that will affect the design?-->

El ser humano lleva más de una decada que conoce el problema medioambiental que estamos generando, también sabe que si para 2050 no ponemos remedio a nuestra forma de vida, la vida en este planeta empezará cada vez más a ser insostenible.

Al ser el problema meidoambiental un problema de carácter general, varias personas ya han hipotizado, investigado e incluso empezado a desarrollar una serie de soluciones a este problema.
Haciendo un análisis de mercado sobre las Calculadoras Verdes, hemos encontrado que gran parte de las soluciones están pensadas para que una persona u empresa pueda insertar sus datos, con un esquema tipo formulario, recibiendo como respuesta una calificación medioambiental y en algunos casos sugerencias sobre como mejorar.

Nosotros queremos ir un paso más allá y proporcionar una forma sencilla y visual de hacer un seguimiento en el tiempo de dichas empresas y actividades medioambientales integrando todas las funcionalidades comunes en las Calculadoras Verdes.

## ⚓ Objetivos, no objetivos y futuros objetivos ⚓

### ✅ Objetivos ✅

<!-- In order to build alignment and communicate a definition of done, it is important to clearly articulate the goals of this work. The best goals are simple, truthy sentences that describe a future state of the world. Unlike an OKR, it’s fine for these goals to be hyper-specific. Projects will often have 3-5 goals. -->

- Panel de control con vista tipo lista de todas las empresas con ciertos datos relevantes.

- Panel de control con vista detallada por cada empresa con todos los datos medioambientales podamos proporcionar y calcular.

- Datos por tipo de emisión :
    - *Emisiones directas* : Tipo de sector, GHG Protocol, Tipo de producto/servicio, Combustión estacionaria, Combustión móvil, Procesos industriales, Liberación de GEI en sistemas antropogénicos, Uso del suelo, los cambios de uso del suelo y la silvicultura.

    - *Emisiones indirectas* : Transporte hasta cliente final, Gastos energénticos, Extracción, transporte y procesamiento del combustible, Producción de los bienes de capital, Pérdidas por transporte y distribución, Electricidad importada, Energía importada, excluyendo la electricidad.

    - *Otras emisiones indirectas* : Combustible quemado en los medios de transporte, Fugas de gases de refrigeración, Aguas arriba provenientes de la generación y del transporte/distribución del combustible, Construcción de los medios de transporte, Transporte y distribución de bienes aguas arriba, provenientes de fletes pagados por la organización, Transporte y distribución de bienes aguas abajo, que no son costeados por la organización, Desplazamiento diario de los empleados o teletrabajo, Transporte de clientes y visitantes, a las instalaciones de la compañía, Viajes de negocio, debidas a combustible consumido en las fuentes móviles. Se pueden incluir las noches de hotel del viaje de negocio, provenientes de los productos comprados, fase de aguas arriba de los productos comprados debidas a su fabricación, Fase de aguas arriba de la producción de todos los bienes de capital comprados y amortizados: equipos, maquinarias, edificios, instalaciones y vehículos, Disposición de residuos sólidos y líquidos. Las emisiones provenientes del transporte de de los residuos se pueden cuantificar aquí o en el apartado de emisiones debidas al transporte, equipos arrendados por la organización, Otros servicios, como consultoría, limpieza, mantenimiento, correos, mensajería, bancos, etc, provenientes del uso del producto durante su vida útil, etapa de fin de vida del producto vendido, provenientes de las inversiones.

- Datos por categoría :
    - *Producto* : Tipo de sector, GHG Protocol, Tipo de produto/servicio, Transporte hasta cliente final,
    Gestión energética, reciclaje y gestión de residuos.
    - *Gestión* : Grado de automatización de los procesos, Aumento de la inversión, Grado de digitalización, Tipología de ERP, Cantidad de siniestros y negligéncias.
    - *Empleados* : Grado de teletrabajo vs presencial, m2 de las oficinas y vestimenta reglamentaria de los empleados, numero de empleados, viajes relacionados con el trabajo.

- Creación de una calificación absoluta, objetiva y ponderada sobre el impacto medioambiental de dicha empresa.

- Creación de un gráfico de evolución de emisiones CO2.

- Creación de una API que devuelva toda los datos mejorados respecto a las emisiones de las empresas que hemos proporiconado.

- Creación de un modelo de mejora para los datos proporcionados.

- Integración de procesos y fuentes de datos para mejorar la calidad de lso datos proporcionados.

### ❌ No Objetivos ❌

<!-- As well as explaining what you want to achieve, it is equally important to say what you are explicitly not addressing. These can sometimes be hard to identify, but imagine what another person might expect to be coupled with this work. -->

- No ofreceremos una solución de tipo convencional donde el usuario pueda inserir sus datos y recibir una calificación energética.

### 🤞🏻 Futuros Objetivos 🤞🏻

<!-- Future goals are an opportunity to list things you want to do in the future, but have descoped for this phase of the project. In other words, these are things you want to make sure your solution doesn’t accidentally make difficult or 
impossible. -->

- Integración de un apartado de sugerencias para mejorar la calificación energetica de la empresa.
- Integración de un apartado de noticias medioambientales de interes.
- Test unitarios, integración y e2e de las funcionalidades propuestas.
- Migración de JavaScript tanto en frontend com oen backend a TypeScript por el beneficio en seguridad que este aporta.
- Nos enfocaremos solo en la versión desktop de nuestra UI, versiones móvil y tablet quedan relegadas a un futuro dessarrollo

## ⚙️ Especificaciones técnicas ⚙️

<!-- What are the user requirements?
What systems will be affected?
What new data structures are needed, what data structures will be changed?
What new APIs will be needed, what APIs will be changed?
What are the efficiency considerations (time/space)?
What are the expected access patterns (load/throughput)?
How will data be validated and what are the potential error states?
Are there any logging, monitoring or observability needs?
Are there any security considerations?
Are there any privacy considerations?
Are there any mobile considerations?
Are there any web-specific considerations?
How will the changes be tested?
How does internationalization and localization — translations, time zones, unicode, etc. — affect your solution? -->

### Histórias de usuario
Como responsable de cuentas me gustaría poder tener un panel de control donde poder ver de forma sencilla todos los datos medioambientales de las empresas de nuestra base de datos mejorados y cruzados con datos de dominio publico.
Adicionalmente a esto me gustaría tener una vista detallada de cada empresa con un analisis más detallado para yo poder promover diferentes productos y asesoramiento.


### Limitaciones técnicas
Después de hacer una extensa busqueda en las fuentes de datos, parece ser que no hay un ente internacional que regula todos estos aspectos más allá de GHG Protocol. Por ello y por el corto tiempo.

### Dipositivos coniderados
Para el MVP de nuestra solución solo consideramos un desarrollo exlusivamente en entorno web para dispositivos de dimensiones ordenador portátil y desktop.

### Test y prubas técnicas
Para una primera versión el test lo haremos de forma manual pero, en caso de continuar con el desarrollo del proyecto a futuro consideramos implementar test unitario, test de integración y test de extremo a extremo utilizando principalmente frameworks como Jest, Mocha y Cypress.


## 🎨 Prototipos y diseño 🎨
Para nuestro panel de control contemplamos dos tipos de vista diferentes: Vista general y vista en detalle.

### Vista general de las empresas
Para la vista general nos queremos inspirar en un diseño parecido al de abajo.
<img src="images/green-calculator-generic-view-frontend.png" alt="Logo">

### Vista en detalle de la empresa
Para la vista en detalle queremos inspirarnos en un diseño parecido al siguiente.
<br></br>
<img src="images/green-calculator-detailed-view-frontend.png" alt="Logo">

## 🤖 Estack técnico 🤖

<!-- Frontend -->
- [React](https://reactjs.org/docs/getting-started.html) : Adoptaremos el frontend de nuestra aplicación con react por su senzillez de uso, extensión en la comunidad de desarrollo y facilidad para adoptar la aplicación nativa con [React Native](https://reactnative.dev/docs/getting-started).
- [Material UI](https://mui.com/): proporciona una gran variedad de componentes preconfigurados compatibles con [React](https://reactjs.org/docs/getting-started.html) por lo que delegamos la interfaz gráfica y experiencia de usuario a ésta librería.
- [Netlify](https://www.netlify.com/) : Desplegaremos nuestro frontend usando la plataforma cloud de Netlify. Ésta decisión está tomada basandonos en el objetivo del proyecto que es crear una versión demo o MVP de nuestra solución. En un futuro lo ideal sería desplegar nuestro frontend en [AWS](https://aws.amazon.com/es/getting-started/hands-on/build-react-app-amplify-graphql/).

<!-- Backend -->
- [Node](https://nodejs.org/es/docs/) : Adoptaremos el backend de nuestra aplicación con NodeJS ya que tiene un ecositema de librerías perfecto para el desarrollo de servicios y comparten lenguaje de base con ReactJS lo que permite reútilizar recursos IT.
- [Express](https://www.npmjs.com/package/express) : Estando en el ámbito de NodeJS, Express provee una forma sencilla y out of the box de crear servidores y aplicaciones.
- [Helmet](https://www.npmjs.com/package/helmet) : Por motivos de seguridad y por la facilidad de uso con Express, Helmet proporciona un middleware que actua como un Facade de OOP el cual por debajo automatiza ciertas buenas prácticas que hacen los intercambios de información entre fron y back más seguros.
- [MySQL](https://www.npmjs.com/package/mysql) : Delegamos la conexión y la gestión de SQL queries a ésta librería de NPM.
-[Mongoose](https://www.npmjs.com/search?q=mongoose) : Delegamos la conexión y gestión de queries a bases de datos no relacionales así como la creación de los esquemas a esta librería de npm.
- [Otras librerías de NPM]() : Usaremos librerías como *body-parser*, *cors* y *dotenv* para añadir habilidades a nuestra aplicación de controlar los parametros de las llamadas HTTP, el orígen de dichas llamadas y la gestión de variables de entorno.
- [Heroku](https://aws.amazon.com/es/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc) : Desplegaremos nuestro servicio de backend en el proveedor cloud de Heroku en vez de un [EC2 de AWS](https://aws.amazon.com/es/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc) ya que por motivos de MVP, Heroku provee una facilidad mayor en terminos de despliegue con nuestro repositorio de código en [GitHub](https://github.com/VictorGreco/hackathon-bbva-2021).
- [GitHub & Git](https://github.com/) : El repositiorio principal de nuestro código estará en GitHub ya que éste ofrece una gran facilidad de integracion con otras plataformas cloud. 

<!-- Databases -->
- [S3 AWS](https://aws.amazon.com/es/s3/) : Implementaremos un servicio de almacenamiento cloud de archivos estáticos como s3 de AWS para la gestión de los archivos de datos principales.
- [RDS AWS](https://aws.amazon.com/es/rds/) : Usaremos el servicio de bases de datos relacional de AWS para el volcado de los datos iniciales proporcionados y guardar las mejoras de los diferentes datos en el mismo.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) : En caso de necesitar un soporte temporal de calculo planteamos usar un servicio gratuito de MongoDB con el proveedor de Atlas.

<!-- 3rd party APIs -->
- [APIs y datos de terceros](https://github.com/VictorGreco/hackathon-bbva-2021/blob/main/TDR.md#third-party-considerations) : Visita la sección *Third-party considerations* para más informacion.

<img src="images/tech-stack-graphic.png" alt="Logo">

## 📚 Otros recursos 📚

- [Canvas](https://docs.google.com/drawings/d/15fluS7dNZnYVzJOZF_jkzR-5FCfLUPFGq3hQFZ6uvCc/edit)
- [Slides](https://www.canva.com/design/DAEtkL1Kg2g/FOaSGUvGc59WjMyYzacdgw/view?utm_content=DAEtkL1Kg2g&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel#1)