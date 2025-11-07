<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mercados

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema4/1.png', alt='')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-8
            .bg7.p-4.mb-lg-0.mb-4
              p.mb-0 Analizar el mercado permite a la empresa identificar qué productos ofrecer, a quién vender, a qué precio y cómo competir de manera efectiva. 
              p.mb-0 En una empresa agrícola, el mercado está conformado por los consumidores y compradores potenciales de sus productos agropecuarios, así como por el entorno económico, social y comercial en el que estos se comercializan.
          .col-lg-4
            img.d-none.d-lg-block(src='@/assets/curso/tema4/2.svg', alt='')
        p.mb-0 Ejemplo: en el caso de una finca productora de guayaba, su mercado puede incluir consumidores locales, supermercados, empresas exportadoras o industrias procesadoras.

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Tipos de mercados 

    .row.justify-content.align-items-center.mb-5
      .col-lg-5
        .bg5.mb-0.p-4.mb-lg-0.mb-4
          p.mb-0 Comprender los distintos tipos de mercados es fundamental para que una empresa agrícola pueda posicionar sus productos de manera estratégica.
          p.mb-0 Cada mercado presenta características propias en cuanto a tamaño, ubicación, poder adquisitivo, necesidades de los consumidores y nivel de competencia. 
          p.mb-0 Identificar el tipo de mercado al que se dirige una empresa permite seleccionar los canales de comercialización más adecuados, establecer precios competitivos y diseñar estrategias de promoción efectivas.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema4/3.png', alt='')
      .col-lg-4
        img.img-t.mb-lg-4.mb-0.d-none.d-lg-block(src='@/assets/curso/tema4/4.svg', alt='')
        p.mb-0 En el sector agrícola, esta clasificación ayuda a diferenciar si los productos se venderán de forma local, regional, nacional o internacional, y si se orientarán a consumidores finales, intermediarios o industrias procesadoras.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12(alt="Clasifica los mercados según distintos criterios: por tipo de producto (frescos o procesados), por destino (local, nacional o internacional), por comprador (consumidor final, intermediarios o empresas transformadoras) y por competencia (competencia perfecta u oligopolio/monopolio).")
        .titulo-sexto.color-secundario.mb-4(alt="Clasifica los mercados según distintos criterios: por tipo de producto (frescos o procesados), por destino (local, nacional o internacional), por comprador (consumidor final, intermediarios o empresas transformadoras) y por competencia (competencia perfecta u oligopolio/monopolio).")
          h5 Tabla 7. 
          | Clasificación según los tipos de mercados
  
        .tabla-a.cf5(alt="Clasifica los mercados según distintos criterios: por tipo de producto (frescos o procesados), por destino (local, nacional o internacional), por comprador (consumidor final, intermediarios o empresas transformadoras) y por competencia (competencia perfecta u oligopolio/monopolio).")
          table
            thead
              tr
                th Criterio
                th Descripción
                th Ejemplo
            tbody
              tr.bgg
                td.tl #[b Según el tipo de producto]
                td.tl Mercado de productos frescos.
                td.tl Frutas, verduras, hortalizas directamente del campo.
              tr
                td.tl #[b Según el tipo de producto]
                td.tl Mercado de productos procesados.
                td.tl Jugos, conservas, mermeladas, etc.
              tr.bgg
                td.tl #[b Según el destino]
                td.tl Mercado local.
                td.tl Ventas en la misma zona o municipio.
              tr
                td.tl #[b Según el destino]
                td.tl Mercado regional o nacional.
                td.tl Distribución a ciudades o cadenas comerciales del país.
              tr.bgg
                td.tl #[b Según el destino]
                td.tl Mercado internacional (exportación).
                td.tl Ventas fuera del país, con mayores requisitos de calidad y certificaciones.
              tr
                td.tl #[b Según el tipo de comprador]
                td.tl Consumidor final.
                td.tl Personas que compran para su consumo directo (ferias, tiendas).
              tr.bgg
                td.tl #[b Según el tipo de comprador]
                td.tl Intermediarios.
                td.tl Comerciantes o distribuidores que revenden.
              tr
                td.tl #[b Según el tipo de comprador]
                td.tl Competencia perfecta.
                td.tl Industrias que usan el producto como materia prima.
              tr.bgg
                td.tl #[b Según la competencia]
                td.tl Oligopolio o monopolio.
                td.tl Muchos oferentes y compradores (ejemplo: maíz, papa).
              tr
                td.tl #[b Según la competencia]
                td.tl Oligopolio o monopolio.
                td.tl Pocos vendedores dominan el mercado (ejemplo: producción de azúcar controlada por pocas empresas).

    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Variables
    
    p.mb-5 Las variables del mercado son factores que afectan el comportamiento de los consumidores y la manera en que la empresa agrícola toma decisiones sobre producción, precios, distribución y promoción. Estas pueden ser:
    
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-12(alt="Las variables de mercado son factores que influyen en la producción, venta y aceptación de los productos agrícolas, incluyendo aspectos económicos, demográficos, culturales, tecnológicos, legales, precio, oferta, demanda, calidad, canales de comercialización, promoción y competencia.")
            .titulo-sexto.color-secundario.mb-4
              h5 Tabla 8. 
              | Variables del mercado
  
        .tabla-a.cf6
          table
            thead
              tr
                th Factor
                th Descripción
            tbody
              tr.bgg
                td.p-3.tl #[b Económicas]
                td.p-3.tl Factores como ingresos de los consumidores, precios de productos y costos de producción.
              tr
                td.p-3.tl #[b Demográficas]
                td.p-3.tl Características de los compradores: edad, género, tamaño de la familia y ubicación geográfica.
              tr.bgg
                td.p-3.tl #[b Culturales y sociales]
                td.p-3.tl Hábitos de consumo, tradiciones y preferencias alimenticias de los consumidores.
              tr
                td.p-3.tl #[b Tecnológicas]
                td.p-3.tl Innovaciones en producción, almacenamiento y comercialización de productos.
              tr.bgg
                td.p-3.tl #[b Políticas y legales]
                td.p-3.tl Normativas, subsidios o restricciones que afectan la producción y venta de alimentos.
              tr
                td.p-3.tl #[b Precio]
                td.p-3.tl Valor de venta del producto; depende de la oferta y demanda, costos de producción y competencia.
              tr.bgg
                td.p-3.tl #[b Oferta]
                td.p-3.tl Cantidad de producto disponible en el mercado en un período determinado.
              tr
                td.p-3.tl #[b Demanda]
                td.p-3.tl Cantidad de producto que los consumidores están dispuestos a comprar.
              tr.bgg
                td.p-3.tl #[b Calidad del producto]
                td.p-3.tl Características como frescura, tamaño, presentación y certificaciones que influyen en la aceptación.
              tr
                td.p-3.tl #[b Canales de comercialización]
                td.p-3.tl Vías que sigue el producto desde el productor hasta el consumidor (venta directa, mayoristas, intermediarios).
              tr.bgg
                td.p-3.tl #[b Promoción y publicidad]
                td.p-3.tl Estrategias para dar a conocer el producto y atraer compradores.
              tr
                td.p-3.tl #[b Competencia]
                td.p-3.tl Número y tipo de productores que ofrecen productos similares. 

      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema4/5.png', alt='', data-aos="fade-right")


</template>

<script>
export default {
  name: 'Tema4',
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
