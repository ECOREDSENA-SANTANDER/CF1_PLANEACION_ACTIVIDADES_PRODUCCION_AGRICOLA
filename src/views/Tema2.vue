<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructura organizacional

    .bg2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            p.mb-0.mx-lg-4(data-aos="fade-left") Una estructura organizacional bien definida y adecuada es esencial para el éxito de cualquier empresa, ya que optimiza la eficiencia y la productividad al establecer de forma clara las funciones, responsabilidades y jerarquías. De esta manera, se minimizan confusiones y duplicidades, se agiliza la toma de decisiones y se fortalece la comunicación interna. Además, una estructura sólida permite adaptarse con mayor facilidad a los cambios del entorno, alinear a los equipos con los objetivos estratégicos y facilitar la atracción y retención de talento. En el caso de las empresas agrícolas, también contribuye a coordinar de manera efectiva las actividades productivas, administrativas y comerciales, maximizando el aprovechamiento de los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        p.mb-lg-0.mb-4 Es el sistema que determina cómo se dividen, organizan y coordinan las actividades dentro de la empresa, estableciendo las líneas de autoridad, responsabilidad y comunicación entre los diferentes niveles y áreas. Su propósito es asegurar que cada función esté claramente definida, que los recursos se utilicen de forma eficiente y que los objetivos organizacionales se alcancen de manera ordenada. En el ámbito agrícola, la estructura organizacional también facilita la integración entre las labores productivas, administrativas, logísticas y comerciales, garantizando una gestión coherente y orientada a resultados.
      .col-lg-7.col-md-10.col-10
        img(src='@/assets/curso/tema2/2.svg', alt='Imagen decorativa')

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Tipos de estructura organizacional
    
    p.mb-5 Existen diversos tipos de estructuras organizacionales, cada una con características, ventajas y limitaciones que influyen en la forma en que se gestionan los recursos, se asignan responsabilidades y se toman decisiones. La elección del tipo de estructura más adecuado depende del tamaño de la empresa, su actividad económica, el nivel de especialización requerido y los objetivos estratégicos que se persigan.
   
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/3.png', alt='Imagen decorativa')  
      .col-lg-8  
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-6")
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')
              .bgr.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 Estructura funcional
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Se organiza por funciones o departamentos (producción, administración, finanzas, comercialización). 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Es común en empresas agrícolas medianas o grandes.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')
              .bgr.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 Estructura jerárquica o lineal
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Tiene una cadena de mando clara. 
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Cada trabajador responde a un superior.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Es típica en empresas familiares o pequeñas fincas.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')
              .bgr.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 Estructura matricial
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Combina la funcional con la organización por proyectos o cultivos.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Cada empleado puede tener dos jefes: uno por función y otro por proyecto.
          .tarjeta.tarjeta--slyder.b2.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4
              .col-8.mb-4
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')
              .bgr.p-1.mb-4
                h4.text-center.mb-0.ps-1.pe-1 Estructura por producto o cultivo
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Se organiza según los diferentes cultivos o unidades productivas (por ejemplo, café, plátano, ganadería). 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Se usa en explotaciones agrícolas diversificadas.
 
    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Importancia de la definición de cargos en la gestión empresarial agrícola

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.col-10
        img.mb-lg-0.mb-4(src='@/assets/curso/tema2/4.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-4 En una empresa agrícola, la definición clara de los cargos es esencial para garantizar una organización eficiente del trabajo y un uso óptimo de los recursos. Cada puesto conlleva responsabilidades específicas que contribuyen al adecuado funcionamiento de la organización.
        p.mb-4 Contar con cargos bien establecidos permite asignar funciones de manera precisa, evitando duplicación de esfuerzos y confusiones. Asimismo, facilita la creación de líneas de mando claras, la evaluación del desempeño individual y por áreas, y la toma de decisiones oportunas dentro del ámbito de cada responsable.
        p.mb-0 Además, una estructura de cargos definida favorece la comunicación formal entre niveles y departamentos, impulsa la capacitación continua y promueve el desarrollo del personal, fortaleciendo así el capital humano de la empresa.

    SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
          h4.text-center.mb-0 Gerente general o administrador agrícola
        p.mb-2.text-center(data-aos="fade-right") Supervisa todas las operaciones de la empresa y toma decisiones estratégicas.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
          h4.text-center.mb-0 Jefe de producción
        p.mb-2.text-center(data-aos="fade-right") Coordina siembras, cosechas, riegos, fertilización y demás labores del campo.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
          h4.text-center.mb-0 Encargado de maquinaria o mantenimiento
        p.mb-2.text-center(data-aos="fade-right") Asegura el funcionamiento óptimo de equipos agrícolas.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
          h4.text-center.mb-0 Encargado de recursos humanos
        p.mb-2.text-center(data-aos="fade-right") Gestiona el personal, contrataciones y capacitación.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
          h4.text-center.mb-0 Responsable de comercialización o ventas
        p.mb-2.text-center(data-aos="fade-right") Se encarga de la venta de productos, relaciones con clientes y distribución.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/10.svg' alt='AvatarTop')
          h4.text-center.mb-0 Contador o responsable financiero
        p.mb-2.text-center(data-aos="fade-right") Administra los recursos económicos, costos y registros contables.
      .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
        .row.justify-content-center.align-items-center.mb-4
          .col-8.mb-4
            img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
          h4.text-center.mb-0 Operarios agrícolas
        p.mb-2.text-center(data-aos="fade-right") Realizan las labores del campo: siembra, riego, cosecha, etc.

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Procesos en la empresa agrícola

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .bg5.p-lg-5.p-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center.mb-0.my-lg-3.mb-lg-3.my-0
            .col-lg-3
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/13.svg', alt='Imagen decorativa')
            .col-lg-9
              p.mb-0 Los procesos organizacionales son el conjunto de actividades sistemáticas y coordinadas que una empresa desarrolla para gestionar y optimizar sus recursos, alcanzar sus objetivos y asegurar un funcionamiento armonioso entre sus distintas áreas, como producción, administración y comercialización.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema2/12.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema2/14.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-2(titulo="Planificación")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 La planificación es el proceso mediante el cual se establecen objetivos, se definen estrategias y se organizan los recursos necesarios para cumplir las metas productivas y comerciales de la empresa agrícola.
              h4.mb-4 Funciones clave:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Selección de cultivos o productos]
                p.mb-0.mx-4 Elegir qué sembrar según la demanda del mercado y las condiciones climáticas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Cronogramas productivos]
                p.mb-0.mx-4 Programar las fechas de siembra, cosecha y comercialización.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Presupuesto agrícola]
                p.mb-0.mx-4 Calcular costos de insumos, mano de obra y maquinaria.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Evaluación de riesgos]
                p.mb-0.mx-4 Identificar amenazas como plagas, enfermedades o eventos climáticos adversos.
              h4.mb-4 Importancia:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Prevención:] anticipa posibles problemas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Organización:] coordina esfuerzos entre áreas y personas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Eficiencia:] optimiza el uso de recursos disponibles.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Rentabilidad:] contribuye a maximizar la producción y los beneficios.
          .row.justify-content-center.align-items.p-2(titulo="Organización")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 La organización es el proceso mediante el cual se distribuyen y asignan actividades, tareas, responsabilidades y recursos humanos y materiales, creando una estructura que facilite la ejecución eficiente del plan.
              h4.mb-4 Funciones clave:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Definir roles y cargos]
                p.mb-0.mx-4 Determinar quién se encargará de tareas específicas, como el riego, la cosecha o las ventas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Establecer líneas de autoridad y comunicación]
                p.mb-0.mx-4 Precisar jerarquías y canales formales para transmitir información y tomar decisiones.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Crear departamentos o equipos]
                p.mb-0.mx-4 Agrupar funciones según áreas productivas o administrativas, como producción, administración y comercialización.
              h4.mb-4 Importancia:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Claridad:] evita confusiones sobre las responsabilidades de cada persona.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Eficiencia:] reduce la duplicación de esfuerzos.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Coordinación:] facilita el trabajo conjunto entre áreas y mejora el rendimiento general de la empresa.
          .row.justify-content-center.align-items.p-2(titulo="Dirección")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 La dirección implica liderar y motivar a los colaboradores para que realicen sus tareas con compromiso y eficiencia.
              h4.mb-4 Funciones clave:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Comunicar  los objetivos y estrategias a todo el personal.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Motivar al equipo mediante incentivos, capacitación o reconocimiento.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Tomar decisiones rápidas para resolver problemas en el día a día.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Coordinar actividades para asegurar que se cumplan los plazos y estándares de calidad.
              h4.mb-4 Importancia:
              p.mb-0 Sin una dirección adecuada, el personal puede perder enfoque, generarse conflictos o disminuir la productividad.
          .row.justify-content-center.align-items.p-2(titulo="Control")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 Es el proceso mediante el cual se supervisa y evalúa el desarrollo de las actividades para verificar que se cumplan los planes y objetivos establecidos, asegurando la calidad y la eficiencia en cada etapa del trabajo.
              h4.mb-4 Funciones clave:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Medir indicadores de producción]
                p.mb-0.mx-4 Comparar resultados reales con las metas establecidas, como la cantidad de kilos cosechados frente al objetivo.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Verificar el uso de insumos y recursos]
                p.mb-0.mx-4 Revisar que se empleen correctamente materiales, maquinaria y mano de obra.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Detectar y corregir desviaciones]
                p.mb-0.mx-4 Identificar problemas a tiempo y aplicar medidas correctivas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Elaborar informes para la toma de decisiones]
                p.mb-0.mx-4 Registrar resultados y conclusiones para guiar las acciones futuras.
              h4.mb-4 Importancia:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Seguimiento:] permite confirmar que la empresa avanza según lo planeado.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Mejora continua:] facilita la detección de oportunidades de optimización.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Eficiencia:] evita pérdidas y asegura un mejor aprovechamiento de los recursos.
          .row.justify-content-center.align-items.p-2(titulo="Comunicación interna")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 La comunicación interna es el proceso que permite el flujo de información entre todas las áreas y niveles jerárquicos de la empresa, asegurando que las instrucciones, datos y retroalimentación circulen de manera clara y oportuna.
              h4.mb-4 Funciones clave:
              ul.lista-ul.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Transmitir instrucciones claras y oportunas]
                p.mb-0.mx-4 Garantizar que el personal reciba indicaciones precisas para el desarrollo de sus tareas.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Recoger sugerencias, dudas o reportes de problemas]
                p.mb-0.mx-4 Escuchar y atender las inquietudes del personal para mejorar los procesos.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Mantener informados a todos sobre cambios o resultados]
                p.mb-0.mx-4 Compartir avances, logros y modificaciones en la planificación o ejecución.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Facilitar la coordinación entre departamentos]
                p.mb-0.mx-4 Asegurar el trabajo conjunto y alineado entre áreas como producción, administración y comercialización.
              h4.mb-4 Importancia:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Claridad:] evita malentendidos y errores por falta de información.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Colaboración:] fomenta el trabajo en equipo y el sentido de pertenencia.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b Efectividad:] mejora la toma de decisiones y la ejecución de las actividades.















</template>

<script>
export default {
  name: 'Tema2',
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
