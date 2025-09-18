<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de análisis organizacional
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema5/1.png', alt='')
      .col-lg-7
        .bg7.mb-0.p-lg-5.p-4
          p.mb-0.mx-lg-5.my-lg-5 Las herramientas de análisis organizacional son métodos, técnicas o instrumentos que permiten examinar y evaluar el funcionamiento interno de una empresa agrícola. Estas facilitan la identificación de fortalezas, debilidades, oportunidades y amenazas, contribuyendo a optimizar la gestión y a tomar decisiones más informadas.
        
    .row.justify-content-center.align-items.mb-5
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-2(titulo="Análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas)")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-0 Evalúa factores internos y externos que afectan a la empresa.
          .row.justify-content-center.align-items.p-2(titulo="Diagrama de flujo")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-0 Representa procesos y actividades para identificar cuellos de botella o redundancias.
          .row.justify-content-center.align-items.p-2(titulo="Encuestas y entrevistas")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-0 Recogen información directa del personal o clientes.
          .row.justify-content-center.align-items.p-2(titulo="Matriz de responsabilidades (RACI)")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-4 Ayuda a definir quién hace qué dentro de un proyecto o proceso, aclarando responsabilidades para evitar confusiones.
              p.mb-4 Las letras RACI significan:
              ul.lista-ul
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b R (Responsable):] la persona que realiza la tarea o la lleva a cabo directamente.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b A (Aprobador o Autoridad):] la persona que tiene la última palabra y debe asegurarse de que la tarea se haga correctamente. Solo puede haber una por tarea.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b C (Consultado):] personas que deben ser consultadas para aportar información, opiniones o recomendaciones antes o durante la tarea.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 #[b I (Informado):] personas que deben estar al tanto del avance o resultados, pero que no participan activamente en la tarea.
          .row.justify-content-center.align-items.p-2(titulo="Análisis PESTEL")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-0 Examina factores: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales que influyen en la empresa.
          .row.justify-content-center.align-items.p-2(titulo="Benchmarking")
            .col-lg-11.mb-lg-0.mb-4
              p.mb-0 Comparación con otras empresas agrícolas para adoptar mejores prácticas.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema5/2.png', alt='')

    TabsC.color-primario.mb-lg-5.mb-5(data-aos="fade-right")
      .py-3.py-md-4.bg3.px-3(titulo="Características")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-9.col-10.order-lg-1.order-md-2.order-2
                img.mb-2(src='@/assets/curso/tema5/3.png', alt='')
              .col-lg-5.order-lg-2.order-md-1.order-1
                h4.mb-4 Características
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Sistematizadas:] siguen un procedimiento ordenado.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Objetivas:] basadas en datos verificables.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Prácticas:] aplicables en el contexto real.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 #[b Flexibles:] adaptables a distintos tipos y tamaños de empresas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-lg-0.mb-4 #[b Multidimensionales:] consideran aspectos técnicos, humanos, económicos y ambientales.
      .py-3.py-md-4.bg3.px-3(titulo="Usos")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-9.col-10.order-lg-1.order-md-2.order-2
                img.mb-2(src='@/assets/curso/tema5/4.png', alt='')
              .col-lg-5.order-lg-2.order-md-1.order-1
                h4.mb-4 Usos
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Diagnosticar el estado de la empresa.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Identificar problemas y áreas de mejora.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Planificar estrategias y optimizar recursos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Facilitar la comunicación y toma de decisiones.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-lg-0.mb-4 Evaluar el impacto de cambios o nuevas políticas.
      .py-3.py-md-4.bg3.px-3(titulo="Aplicación")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-9.col-10.order-lg-1.order-md-2.order-2
                img.mb-2(src='@/assets/curso/tema5/5.png', alt='')
              .col-lg-5.order-lg-2.order-md-1.order-1
                h4.mb-4 Aplicación
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Mejorar productividad y eficiencia de los cultivos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Definir responsabilidades claras.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Evaluar la viabilidad de nuevos proyectos.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Analizar mercado y competencia.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-lg-0.mb-4 Adaptarse a cambios climáticos o normativos.
      .py-3.py-md-4.bg3.px-3(titulo="Importancia")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-9.col-10.order-lg-1.order-md-2.order-2
                img.mb-2(src='@/assets/curso/tema5/6.png', alt='')
              .col-lg-5.order-lg-2.order-md-1.order-1
                h4.mb-4 Importancia
                ul.lista-ul
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Evitar la improvisación en la gestión.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Reducir riesgos y pérdidas económicas.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Potenciar fortalezas y minimizar debilidades.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-0 Mantener competitividad.
                  li.d-flex.mb-0
                    i.fas.fa-circle-check
                    p.mb-lg-0.mb-4 Fomentar una cultura de mejora continua.
 
    .titulo.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Diagnóstico organizacional y técnico

    .row.justify-content.align-items-center.mb-5
      .col-lg-5
        .bg5.mb-lg-0.p-4.mb-4
          p.mb-3 El diagnóstico organizacional y técnico es un proceso de evaluación integral que analiza el funcionamiento interno de una empresa agrícola desde dos perspectivas complementarias:
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Organizacional:] examina la estructura, los recursos humanos, los procesos administrativos y la gestión de la empresa.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 #[b Técnico:] evalúa los aspectos productivos, tecnológicos y operativos, incluyendo cultivos, maquinaria, insumos y prácticas agrícolas.
      .col-lg-4
        img.img-t.mb-lg-4.mb-0.d-none.d-lg-block(src='@/assets/curso/tema5/7.svg', alt='')
      .col-lg-3
        p.mb-0 El objetivo de este diagnóstico es identificar fortalezas y debilidades internas, así como oportunidades y amenazas externas que puedan influir en el desempeño general de la empresa agrícola. Esto permite diseñar estrategias de mejora, optimizar recursos, fortalecer áreas clave y reducir riesgos, contribuyendo a una gestión más eficiente y a la sostenibilidad del negocio.

    .titulo3.mb-lg-5.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Características

    .bg2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema5/8.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            ul.lista-ul
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 #[b Integral:] combina aspectos humanos, administrativos, productivos y tecnológicos.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 #[b Objetivo:] se basa en datos y evidencias recopiladas mediante observación, entrevistas y registros.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 #[b Dinámico:] debe ser actualizado periódicamente para adaptarse a cambios.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 #[b Participativo:] involucra a diferentes niveles de la organización para obtener información precisa.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 #[b Orientado a la mejora:] busca detectar áreas críticas para optimizar el rendimiento y la eficiencia.

    .titulo3.mb-lg-0.mb-5.mb-md-5.ps-1.pe-1.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/sub.svg', alt='Imagen decorativa')
      h3.mb-0.mx-lg-4.mx-3.mx-md-4.ps-lg-3 Importancia

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        ul.lista-ul
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Permite tomar decisiones fundamentadas para mejorar la productividad y rentabilidad.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Facilita la identificación de problemas ocultos o estructurales.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Ayuda a priorizar inversiones en tecnología, capacitación o infraestructura.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Mejora la coordinación y comunicación interna.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-lg-0.mb-4 Incrementa la capacidad de adaptación a cambios del mercado o ambientales.
      .col-lg-5.col-md-9.col-10
        img(src='@/assets/curso/tema5/9.png', alt='')

</template>

<script>
export default {
  name: 'Tema5',
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
