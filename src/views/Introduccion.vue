<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción
    
    .row.align-items-center.justify-content-center
      .col-lg-3.d-none.d-lg-block 
        figure(data-aos="fade-up")
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 292px").m-auto
      .col-lg-9
        .row.align-items-center.justify-content-center.bg-1.p-2(data-aos="fade-left")
          .col-lg-2.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/img2.svg", alt="", style="width: 91px").m-auto  
          .col-lg-10
            p El análisis financiero es una herramienta fundamental en la gestión contable, ya que permite conocer la situación económica de una empresa a través de sus estados financieros. A partir de esta información, se pueden identificar fortalezas y debilidades que influyen en la toma de decisiones estratégicas.

        .row.align-items-center.justify-content-center.bg-2.p-2.mt-2(data-aos="fade-right")
          .col-lg-8.order-2.order-lg-1.mt-lg-0.mt-4
            p Dentro del análisis financiero, se aplican técnicas como el análisis vertical, horizontal y diversos indicadores que evalúan aspectos clave como la liquidez, rentabilidad, endeudamiento y eficiencia operativa. Estas herramientas ayudan a interpretar los resultados contables de manera objetiva y útil.
          .col-lg-4.order-1.order-lg-2
            figure
              img(src="@/assets/curso/intro/img3.png", alt="", style="width: 295px").m-auto


    p.mt-4 Adicionalmente, otras metodologías como el EVA, el EBITDA y el punto de equilibrio permiten profundizar en el desempeño económico de la organización. Su correcta aplicación favorece la planificación, el control y la mejora continua, aportando valor agregado a los procesos financieros empresariales.
      


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
