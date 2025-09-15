<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo1.justify-content-center.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            .bg1.p-3.mb-lg-0.mb-4
              p.mb-0.mb-lg-2.my-0.my-lg-1 La empresa agrícola es una unidad económica y productiva dedicada a la explotación de recursos naturales con fines agropecuarios, cuyo objetivo principal puede ser la producción de alimentos o de materias primas de origen vegetal o animal. Para que una empresa agrícola sea eficiente, rentable y sostenible, es fundamental comprender y organizar su estructura interna, así como realizar un diagnóstico que permita evaluar su situación actual. 
          .col-lg-4
            img.mb-0.d-none.d-lg-block(src='@/assets/curso/intro/1.png')
          .col-lg-4
            p.mb-0(data-aos="fade-right") El análisis de la estructura abarca aspectos como los recursos humanos, físicos, tecnológicos, financieros y organizacionales que la conforman, mientras que el diagnóstico facilita la identificación de fortalezas, debilidades, oportunidades y amenazas (análisis FODA), además de la revisión de procesos clave, niveles de productividad y cumplimiento normativo. Mediante una visión integral de su funcionamiento, la empresa agrícola puede establecer estrategias que fortalezcan su competitividad y su capacidad de adaptación frente a los cambios del entorno rural, económico, climático y comercial. 

        .row.justify-content-center.align-items-center.mb-0        
          .col-lg-12
            figure
              .video
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NL83a4WqQis?si=BiSAkBqrirrfe_Ln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
