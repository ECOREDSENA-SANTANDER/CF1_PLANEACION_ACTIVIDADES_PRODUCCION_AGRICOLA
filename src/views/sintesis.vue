<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La empresa agrícola se define como una unidad de producción organizada cuyo objetivo es alcanzar la rentabilidad y sostenibilidad. Los tipos de empresa agrícola se clasifican según tamaño, propiedad y gestión, lo que permite comprender las distintas formas de operar. La estructura comprende los recursos humanos, materiales y procesos necesarios para su funcionamiento. El diagnóstico empresarial se realiza desde dos perspectivas: interno, que evalúa recursos y procesos internos, y externo, que analiza factores del entorno como mercado, clima, legislación y competencia. Para ello, se utilizan herramientas como el FODA, que identifica fortalezas, oportunidades, debilidades y amenazas, y el PESTEL, que examina factores políticos, económicos, sociales, tecnológicos, ecológicos y legales. Este diagnóstico permite optimizar recursos, fortalecer la planificación estratégica y mejorar la toma de decisiones, asegurando la sostenibilidad y el éxito de la empresa agrícola.

    .bgs.p-2.mb-0 
      .row.justify-content-center
        .col-lg-12.mb-5.p-4
          figure
            img(src="@/assets/curso/sintesis.png", alt="La síntesis organiza los conceptos y conocimientos básicos que se deben tener en cuenta para caracterización empresarial, se requiere comprender su tipología y los requisitos legales y operativos que garantizan su adecuado funcionamiento. Para su éxito, es fundamental contar con una estructura organizacional clara, que defina los tipos de organización, los cargos, y los procesos administrativos clave como la planificación, organización, dirección, control y una comunicación interna efectiva. Esta estructura debe alinearse con una estrategia organizacional. Además, conocer el mercado en el que se opera, sus tipos y variables esto permite adaptar las acciones comerciales y productivas a las condiciones externas. Para reforzar la gestión, es necesario aplicar herramientas de análisis organizacional, que ofrecen características, usos y aplicaciones útiles para mejorar el desempeño institucional. Finalmente, un diagnóstico organizacional y técnico, con sus respectivas características e importancia, permite evaluar la situación actual de la empresa.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
