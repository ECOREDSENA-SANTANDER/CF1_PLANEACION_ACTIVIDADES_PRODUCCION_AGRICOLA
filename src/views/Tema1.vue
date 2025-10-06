<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Empresa agrícola 
        
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.col-md-9.col-10
          img.mb-lg-0.mb-4(src='@/assets/curso/tema1/1.png')
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-2
              img.mb-0.d-none.d-lg-block(src='@/assets/curso/tema1/2.svg')
            .col-lg-10
              p.mb-0 La empresa agrícola es una unidad productiva organizada que se dedica a la explotación de recursos naturales (principalmente suelo y agua) con el fin de generar bienes agrícolas como frutas, verduras, granos, legumbres y otros cultivos destinados al consumo humano, animal o a la industria. Su funcionamiento requiere la integración de diversos recursos (humanos, técnicos, financieros y tecnológicos) así como la aplicación de prácticas de manejo eficiente y sostenible. 
          p.mb-0 Estas empresas cumplen un papel esencial en la economía, ya que garantizan el suministro de alimentos, contribuyen a la seguridad alimentaria, generan empleo e ingresos en las zonas rurales y dinamizan cadenas productivas relacionadas con el transporte, la agroindustria y el comercio. Asimismo, cuando se gestionan de forma responsable, promueven el desarrollo sostenible mediante la conservación de los recursos naturales, la adaptación a cambios climáticos y la implementación de innovaciones que mejoran la productividad sin comprometer el equilibrio ecológico. 

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1 Tipos de empresas agrícolas según su producción 

      .bg2.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            .p-4
              p.mb-0.mx-lg-4(data-aos="fade-left") El sector agrícola es amplio y diverso, y sus empresas pueden clasificarse de distintas maneras según criterios como el tipo de producción, la escala, el destino de los productos o las técnicas utilizadas. Esta clasificación no solo permite comprender la especialización de cada empresa, sino también identificar las estrategias productivas, las tecnologías aplicadas y los mercados a los que se orientan. Conocer los diferentes tipos de empresas agrícolas es fundamental para optimizar su gestión, fomentar la competitividad y promover prácticas sostenibles acordes con las demandas actuales. 
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema1/3.png', alt='')

      .titulo.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Clasificación de las empresas agrícolas 

      .row.justify-content-center.align-items-center.mb-lg-4.mb-0
        .col-lg-4
          img.mb-0.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/4.png')
        .col-lg-8
          .tarjetaf.p-4.mb-5
            SlyderA(tipo="b")(data-aos="zoom-in-left")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-4 Empresas agrícolas de cultivos alimentarios 
                  p.mb-4 Se dedican a la producción de alimentos básicos como arroz, maíz, trigo, papa, legumbres, etc. 
                  img.mb-0(alt="" src="@/assets/curso/tema1/5.png")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-4 Empresas hortofrutícolas 
                  p.mb-4 Se especializan en frutas, verduras y hortalizas (tomate, lechuga, plátano, uva, etc.). 
                  img.mb-0(alt="" src="@/assets/curso/tema1/6.png")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-4 Empresas industriales o agroindustriales
                  p.mb-4 Producen cultivos destinados a procesos industriales, como caña de azúcar, algodón, tabaco o palma de aceite.
                  img(alt="" src="@/assets/curso/tema1/7.png")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-4 Empresas agrícolas especializadas
                  p.mb-4 Enfocadas en cultivos específicos de alto valor, como flores, hierbas aromáticas, café orgánico, o plantas medicinales.
                  img.mb-0(alt="" src="@/assets/curso/tema1/8.png")

      .titulo.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Tipos de empresas agrícolas por tamaño

      .row.justify-content-center.align-items-center.mb-lg-5.mb-0
        .col-lg-6
          img.mb-lg-0.mb-4(src='@/assets/curso/tema1/9.svg')
        .col-lg-6
          p.mb-lg-0.mb-4 Las empresas agrícolas también pueden clasificarse en función de su tamaño, lo que se determina principalmente por la extensión de la superficie cultivada, el volumen de producción, la cantidad de trabajadores y el nivel de inversión. Esta categorización permite diferenciar entre pequeñas, medianas y grandes unidades productivas, cada una con características, capacidades y retos particulares. Analizar el tamaño de la empresa es clave para comprender su alcance en el mercado, su acceso a tecnologías, su potencial de crecimiento y su impacto en la economía local y regional.

      TabsC.color-primario.mb-5(data-aos="fade-right")
        .py-3.py-md-4.bg3.px-3(titulo="Microempresas agrícolas")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-11
              .row.justify-content-center.align-items-center.p-lg-4.p-3
                .col-lg-7.order-lg-1.order-md-2.order-2
                  img.mb-0(src='@/assets/curso/tema1/10.png', alt='')
                .col-lg-5.order-lg-2.order-md-1.order-1
                  h4.mb-4 Microempresas agrícolas
                  p.mb-4.mb-lg-0 Pequeñas explotaciones, generalmente de carácter familiar, con producción limitada y orientada principalmente al mercado local. Suelen contar con una plantilla de 0 a 10 trabajadores.
        .py-3.py-md-4.bg3.px-3(titulo="Pequeñas empresas agrícolas (pymes)")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-11
              .row.justify-content-center.align-items-center.p-lg-4.p-3
                .col-lg-7.order-lg-1.order-md-2.order-2
                  img.mb-0(src='@/assets/curso/tema1/11.png', alt='')
                .col-lg-5.order-lg-2.order-md-1.order-1
                  h4.mb-4 Pequeñas empresas agrícolas (pymes)
                  p.mb-4.mb-lg-0 Unidades productivas con mayor nivel de organización, capaces de comercializar en mercados regionales o nacionales. Generalmente cuentan con una plantilla de entre 11 y 49 trabajadores.
        .py-3.py-md-4.bg3.px-3(titulo="Medianas empresas agrícolas")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-11
              .row.justify-content-center.align-items-center.p-lg-4.p-3
                .col-lg-8.order-lg-1.order-md-2.order-2
                  .row.justify-content-center.align-items-center.mb-lg-0
                    .col-lg-6
                      img.mb-lg-0.mb-4(src='@/assets/curso/tema1/12.png', alt='')
                    .col-lg-6
                      img.mb-0.d-none.d-lg-block(src='@/assets/curso/tema1/13.png', alt='')
                  .row.justify-content-center.align-items-center.mb-lg-0
                    .col-lg-6
                      img.mb-0(src='@/assets/curso/tema1/14.png', alt='')
                    .col-lg-6
                      img.mb-0.d-none.d-lg-block(src='@/assets/curso/tema1/15.png', alt='')
                .col-lg-4.order-lg-2.order-md-1.order-1
                  h4.mb-4 Medianas empresas agrícolas
                  p.mb-4.mb-lg-0 Más organizadas que las pequeñas empresas, estas unidades productivas tienen capacidad para comercializar en mercados nacionales e internacionales y suelen contar con entre 50 y 250 trabajadores.
        .py-3.py-md-4.bg3.px-3(titulo="Grandes empresas agrícolas")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-11
              .row.justify-content-center.align-items-center.p-lg-4.p-3
                .col-lg-7.order-lg-1.order-md-2.order-2
                  img.mb-0(src='@/assets/curso/tema1/16.png', alt='')
                .col-lg-5.order-lg-2.order-md-1.order-1
                  h4.mb-4 Grandes empresas agrícolas
                  p.mb-4.mb-lg-0 Explotaciones de gran escala, caracterizadas por su alta mecanización, uso de tecnología avanzada y amplia presencia en los mercados. Generalmente emplean a más de 250 trabajadores.

      .titulo1.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Según su forma jurídica

      .bg4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            .p-4
              p.mb-0.mx-lg-4(data-aos="fade-left") En Colombia, la legislación establece diversas formas jurídicas para la creación de sociedades, brindando a los empresarios múltiples opciones para estructurar sus negocios de acuerdo con sus objetivos, el tamaño de su empresa, el capital disponible y el nivel de responsabilidad que están dispuestos a asumir. Estas alternativas permiten adaptar la figura societaria a las características específicas de cada actividad económica, ya sea que se trate de emprendimientos individuales, pequeñas y medianas empresas, o grandes corporaciones. Elegir el tipo de sociedad adecuado es un paso fundamental, ya que determina aspectos clave como la gestión, la responsabilidad legal, la tributación y la posibilidad de acceder a financiación.
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema1/17.svg', alt='')

      .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/18.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.bro Video: Tipos de sociedades en Colombia
                p.mb-0 Se invita a explorar sobre el tipo de sociedades existentes en Colombia.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=IvTbUlDBrrg" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
  
      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12(alt="En Colombia, las empresas pueden constituirse bajo diferentes figuras jurídicas, cada una con características, requisitos y niveles de responsabilidad distintos. Conocer estas modalidades permite elegir la estructura más adecuada según el tamaño, el tipo de actividad y los objetivos del negocio.")
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 1. 
            | Clasificación de empresas según su forma jurídica en Colombia

      .tabla-a.cf1.mb-5(data-aos="fade-right")
        table
          thead
            tr
              th Tipo de empresa
              th Sigla
              th Características principales
              th Nº mínimo de socios
              th Nº máximo de socios
              th Responsabilidad de los socios
          tbody
            tr.bgg
              td #[b Sociedad de Responsabilidad Limitada]
              td Ltda.
              td.tl Común en pequeñas y medianas empresas. Capital dividido en cuotas de igual valor.
              td 2
              td 25
              td.tl Limitada al aporte de capital.
            tr
              td #[b Sociedad Anónima]
              td S.A.
              td.tl Adecuada para grandes empresas o aquellas que buscan capital mediante emisión de acciones. Capital dividido en acciones.
              td 5
              td Sin límite.
              td.tl Limitada al aporte de capital.
            tr.bgg
              td #[b Sociedad por Acciones Simplificada]
              td S.A.S.
              td.tl Creada por la Ley 1258 de 2008. Estructura flexible, puede tener un solo accionista. Capital dividido en acciones.
              td 1
              td Sin límite.
              td.tl Limitada al aporte de capital.
            tr
              td #[b Sociedad en Comandita por Acciones]
              td S.C.A.
              td.tl Tiene socios comanditarios (responsabilidad limitada) y comanditados (responsabilidad ilimitada). Capital dividido en acciones.
              td 2 (mínimo un socio comanditado y uno comanditario). Sin límite.
              td Sin límite.
              td.tl Comanditarios: limitada; Comanditados: ilimitada.
            tr.bgg
              td #[b Sociedad en Comandita Simple]
              td S. en C.
              td.tl Similar a la S.C.A., pero capital dividido en participaciones.
              td 2 (mínimo un socio comanditado y uno comanditario).
              td Sin límite.
              td.tl Comanditarios: limitada; Comanditados: ilimitada.
            tr
              td #[b Sociedad Colectiva]
              td -
              td.tl Todos los socios administran y responden solidaria e ilimitadamente. Poco usada.
              td 2
              td Sin límite.
              td.tl Ilimitada y solidaria.
            tr.bgg
              td #[b Empresa Unipersonal]
              td E.U.
              td.tl Creada por una sola persona (natural o jurídica). Patrimonio separado del personal.
              td 1
              td 1
              td.tl Limitada al capital destinado a la empresa.

      .titulo1.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Según el uso de tecnología

      .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}"
        )
        .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
          p La clasificación de las empresas agrícolas según el uso de tecnología permite identificar los diferentes niveles de desarrollo técnico y productivo presentes en sus procesos. Esta categorización resulta fundamental para comprender su eficiencia, productividad, impacto ambiental y capacidad de adaptación frente al cambio climático.

      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12(alt="La tabla presenta los principales tipos de empresas agrícolas según el nivel de tecnología utilizada, desde sistemas tradicionales con baja mecanización hasta modelos de agricultura de precisión y producción orgánica. Cada categoría se distingue por su grado de innovación, productividad, enfoque de mercado y compromiso con la sostenibilidad.")
          .titulo-sexto.color-secundario.mb-4
            h5 Tabla 2. 
            | Tipos de empresas según el uso de tecnología

      .tabla-a.cf2.mb-5(data-aos="fade-right")
        table
          thead
            tr
              th Tipo de empresa agrícola
              th Características principales
              th Nivel tecnológico
              th Productividad
              th Enfoque principal
          tbody
            tr.bgg
              td #[b Tradicionales]
              td.tl Uso de métodos agrícolas heredados, escasa o nula mecanización, alta dependencia del trabajo manual o tracción animal, poco uso de insumos químicos. Común en zonas rurales de bajos ingresos.
              td Bajo.
              td Baja y dependiente del clima.
              td Subsistencia y mercado local.
            tr
              td #[b Modernas o tecnificadas]
              td.tl Incorporan maquinaria agrícola (tractores, sistemas de riego tecnificado), semillas mejoradas y manejo eficiente de insumos. Buscan mayor rendimiento y competitividad.
              td Medio - alto.
              td Media a alta.
              td Productividad y rentabilidad.
            tr.bgg
              td #[b Agricultura de precisión / inteligente]
              td.tl Uso de tecnología avanzada (sensores, GPS, drones, imágenes satelitales, software de gestión). Toman decisiones basadas en datos en tiempo real para optimizar recursos y reducir impacto ambiental.
              td Muy alto.
              td Alta.
              td Eficiencia, innovación y sostenibilidad.
            tr
              td #[b Agricultura orgánica]
              td.tl Producción libre de insumos sintéticos (pesticidas, herbicidas, fertilizantes químicos, transgénicos). Requiere certificaciones y promueve biodiversidad y salud del suelo.
              td Variable.
              td Media o menor que la convencional.
              td Sostenibilidad y salud del consumidor.

      .titulo2.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Según el destino de la producción

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-2
          img.d-none.d-lg-block(src="@/assets/curso/tema1/19.svg")
        .col-lg-7
          .bg5.p-4.p-lg-5.mb-lg-0.mb-4
            p.mb-lg-3.my-lg-3.my-0.mb-0 Esta clasificación se basa en el propósito final de los productos agrícolas, diferenciando si la producción está destinada principalmente al autoconsumo o a la comercialización. Esta distinción es clave para analizar el grado de integración al mercado, la escala económica y el nivel de tecnificación de las actividades agrícolas.
        .col-lg-3
          img.d-none.d-lg-block(src="@/assets/curso/tema1/20.png")

      .titulo3.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Autoconsumo

      .bg4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema1/22.svg', alt='')
          .col-lg-7(data-aos="fade-left")
            .p-4
              p.mb-0.mx-lg-4(data-aos="fade-left") Las empresas o unidades productivas orientadas al autoconsumo cultivan principalmente para satisfacer las necesidades alimentarias de la familia o comunidad que las opera. Generalmente son explotaciones de pequeña escala, con bajo nivel de tecnificación y diversificación de cultivos básicos como maíz, yuca, frijol, hortalizas y tubérculos. Suelen depender fuertemente de las condiciones climáticas y de los ciclos naturales, manteniendo un vínculo limitado o inexistente con el mercado formal. Este modelo es característico de zonas rurales con economías campesinas o de subsistencia, donde la prioridad es la seguridad alimentaria antes que la rentabilidad.

      .titulo4.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
        img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
        h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Comercial

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-6
          p.mb-lg-0.mb-4 Las empresas agrícolas con fines comerciales están orientadas a producir excedentes para su venta en mercados locales, regionales, nacionales o internacionales. Pueden variar en tamaño, desde pequeños productores organizados en cooperativas o asociaciones hasta grandes corporaciones agroexportadoras. Su objetivo central es la generación de ingresos, por lo que suelen adoptar prácticas productivas más eficientes, incorporar tecnologías modernas y aplicar estrategias de gestión que les permitan cumplir con las exigencias del mercado en términos de calidad, volumen, trazabilidad y certificaciones. Además, este modelo fomenta la especialización y puede integrarse a cadenas de valor agroindustriales, fortaleciendo su competitividad y capacidad de adaptación a cambios económicos y climáticos.
        .col-lg-6.col-md-10.col-10
          img(src="@/assets/curso/tema1/23.png")

      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Requisitos para el funcionamiento

      p.mb-4 Son las condiciones esenciales, tanto en recursos como en normativas, que una empresa agrícola debe cumplir para llevar a cabo sus actividades productivas, administrativas y comerciales de manera legal, eficiente y sostenible.

      AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
        .row.justify-content-center.align-items.p-2(titulo="Requisitos legales")
          .col-lg-11.mb-lg-0.mb-4
            p.mb-4 En Colombia, para que una empresa funcione legalmente, debe cumplir con una serie de requisitos y trámites establecidos por la normatividad nacional. Estos pasos pueden variar levemente según el tipo de empresa, la actividad económica y el lugar de operación, pero en términos generales, los requisitos legales de funcionamiento son los siguientes:
            .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
              .col-lg-12(alt="La tabla presenta los principales requisitos legales que una empresa agrícola debe cumplir para su funcionamiento, incluyendo el registro formal, la obtención de NIT, las licencias y permisos necesarios, así como la afiliación al sistema de seguridad social. Estos elementos garantizan el desarrollo de las actividades de manera legal, segura y conforme a la normativa vigente.")
                .titulo-sexto.color-secundario.mb-4
                  h5 Tabla 3. 
                  | Requisitos legales
            .tabla-a.cf3.mb-0(data-aos="fade-right")
              table
                thead
                  tr
                    th Requisito
                    th Descripción
                tbody
                  tr.bgg
                    td #[b Registro legal de la empresa]
                    td.tl Inscripción en el registro mercantil o equivalente (puede ser como persona natural, sociedad, cooperativa, etc.).
                  tr.bgw
                    td #[b NIT]
                    td.tl Obtener el número de identificación tributaria para poder facturar y declarar impuestos.
                  tr.bgg
                    td #[b Licencia municipal o de funcionamiento]
                    td.tl Permiso otorgado por la alcaldía o autoridad local para operar en un determinado lugar.
                  tr.bgw
                    td #[b Permisos agrícolas y ambientales]
                    td.tl Entre ellos se encuentran el uso del suelo (certificado que indica que el terreno es apto para uso agrícola), la licencia ambiental si se utilizan agroquímicos, riego a gran escala, o maquinaria pesada y el permiso de uso de agua, si se extrae de ríos, pozos o fuentes públicas.
                  tr.bgg
                    td #[b Afiliación a entidades sociales y de salud]
                    td.tl En Colombia, la afiliación a entidades sociales y de salud es el proceso obligatorio mediante el cual empleadores y trabajadores se inscriben en el Sistema de Seguridad Social Integral, que incluye salud, pensiones, riesgos laborales y subsidios familiares.
        .row.justify-content-center.align-items.p-2(titulo="Requisitos técnicos y operativos")
          .col-lg-11.mb-lg-0.mb-4
            p.mb-4 Son las condiciones, procedimientos y recursos necesarios para garantizar que la actividad agrícola se desarrolle de manera adecuada, segura y eficiente. Incluyen la correcta planificación de cultivos, la disponibilidad y mantenimiento de maquinaria y equipos, la capacitación del personal, la implementación de buenas prácticas agrícolas y el cumplimiento de estándares de calidad e inocuidad. Asimismo, abarcan la gestión de insumos, el manejo responsable del agua y del suelo, y la adopción de medidas preventivas para minimizar riesgos laborales y ambientales.
            .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
              .col-lg-12(alt="La tabla resume los principales requisitos técnicos y operativos que facilitan el desarrollo eficiente de la actividad agrícola, incluyendo el estudio previo del suelo, la planificación productiva, la infraestructura necesaria y el acceso a insumos esenciales para la siembra y el manejo de cultivos.")
                .titulo-sexto.color-secundario.mb-4
                  h5 Tabla 4. 
                  | Requisitos técnicos y operativos
            .tabla-a.cf3.mb-0.tsh(data-aos="fade-right")
              table
                thead
                  tr
                    th Requisito
                    th Descripción
                tbody
                  tr.bgg
                    td #[b Estudio de suelos]
                    td.tl Para saber qué cultivos son viables en el terreno.
                  tr.bgw
                    td #[b Plan de manejo agrícola]
                    td.tl Documento que detalla las prácticas, calendarios de siembra, manejo de plagas, fertilización, etc.
                  tr.bgg
                    td #[b Infraestructura básica]
                    td.tl
                      .row.justify-content-center.align-items-center.mb-0
                        .col-lg-12
                        ul.lista-ul
                          li.d-flex.mb-2
                            i.fas.fa-circle-check
                            p.mb-0 Acceso al terreno.
                          li.d-flex.mb-2
                            i.fas.fa-circle-check
                            p.mb-0 Agua y riego.
                          li.d-flex.mb-2
                            i.fas.fa-circle-check
                            p.mb-0 Almacenamiento (bodegas, silos, cámaras frías si aplica).
                          li.d-flex.mb-0
                            i.fas.fa-circle-check
                            p.mb-0 Maquinaria agrícola (tractores, fumigadoras, herramientas).
                  tr.bgw
                    td #[b Acceso a insumos]
                    td.tl Semillas, fertilizantes, pesticidas, abonos, etc.
        .row.justify-content-center.align-items.p-2(titulo="Requisitos administrativos y de gestión")
          .col-lg-11.mb-lg-0.mb-4
            p.mb-4 Son elementos fundamentales para garantizar el manejo eficiente de la empresa agrícola, optimizar el uso de recursos, asegurar el cumplimiento de la normativa vigente y respaldar la toma de decisiones estratégicas que impulsen su competitividad y sostenibilidad.
            .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
              .col-lg-12(alt="La tabla reúne los principales requisitos administrativos y de gestión para una empresa agrícola, desde la planificación estratégica y el control de la producción hasta la capacitación técnica y la implementación de sistemas de calidad y trazabilidad que permitan acceder a mercados exigentes.")
                .titulo-sexto.color-secundario.mb-4
                  h5 Tabla 5. 
                  | Requisitos administrativos y de gestión
            .tabla-a.cf3.mb-0(data-aos="fade-right")
              table
                thead
                  tr
                    th Requisito
                    th Descripción
                tbody
                  tr.bgg
                    td #[b Plan de negocio agrícola]
                    td.tl Define objetivos, mercado, costos, ingresos, estrategia y análisis financiero.
                  tr.bgw
                    td #[b Gestión de registros productivos]
                    td.tl Control de siembras, cosechas, insumos, costos, rendimientos, etc.
                  tr.bgg
                    td #[b Capacitación técnica]
                    td.tl Conocimiento del cultivo, Buenas Prácticas Agrícolas (BPA), control de plagas, etc.
                  tr.bgw
                    td #[b Gestión de calidad y trazabilidad]
                    td.tl Muy importante si se vende a supermercados o se exporta. Puede requerir certificaciones (como Global G.A.P., orgánico, etc.).
                    
        .row.justify-content-center.align-items.p-2(titulo="Requisitos financieros")
          .col-lg-11.mb-lg-0.mb-4
            p.mb-4 Son esenciales para asegurar que la empresa disponga de los recursos necesarios para iniciar, mantener y ampliar sus operaciones, así como para garantizar su viabilidad y sostenibilidad económica a largo plazo.
            .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
              .col-lg-12(alt="La tabla presenta los principales requisitos financieros para una empresa agrícola, incluyendo la disponibilidad de capital inicial, el acceso a fuentes de financiamiento y la gestión contable básica necesaria para un control adecuado de los recursos.")
                .titulo-sexto.color-secundario.mb-4
                  h5 Tabla 6. 
                  | Requisitos financieros
            .tabla-a.cf3.mb-0(data-aos="fade-right")
              table
                thead
                  tr
                    th Requisito
                    th Descripción
                tbody
                  tr.bgg
                    td #[b Capital inicial]
                    td.tl Para comprar tierras, herramientas, semillas, pagar salarios, etc.     
                  tr.bgw
                    td #[b Acceso a financiamiento]
                    td.tl Créditos agrícolas, subsidios estatales, o inversión privada.
                  tr.bgg
                    td #[b Contabilidad básica y facturación]
                    td.tl Registro de ingresos, egresos, compras y ventas.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
