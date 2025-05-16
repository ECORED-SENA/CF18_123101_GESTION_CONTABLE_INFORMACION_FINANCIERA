<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Indicadores financieros y de gestión
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las empresas se encuentran en constantes cambios por las variaciones generadas en el mercado; por lo tanto, las actividades deben ser modificadas conforme con los requerimientos y necesidades. Asimismo, se realiza el  monitoreo y el seguimiento frecuentemente, por ello, para medir los resultados se diseñan e implementan indicadores que sean útiles y comprensibles para tomar decisiones que contribuyan al logro de los objetivos organizacionales.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 2.1 Indicadores de gestión
    
    p Los indicadores permiten que la gestión de las organizaciones sea efectiva y eficiente, puesto que facilita a los integrantes mejorar su desempeño, permitiéndoles evaluar la gestión y mejorar los niveles de aprendizaje en la organización.

    .row.justify-content-center
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-6(data-aos="fade-right")
          .col-lg.d-flex
            .p-4.w-100.align-items-center
              p Un indicador es una medición cuantitativa o cualitativa, cuyo objetivo es verificar el cumplimiento de objetivos específicos. Los indicadores de gestión miden el cumplimiento de los objetivos estratégicos de la organización, teniendo en cuenta lo señalado en la planeación estratégica. Se enfocan en la medición del desempeño, eficiencia, eficacia, efectividad y productividad de la empresa, buscando la mejora continua de los procesos y procedimientos. Cabe resaltar que los indicadores se diseñan por las diferentes áreas de la organización de acuerdo con las actividades que se desean medir de forma cuantitativa o cualitativa (Roncancio, 2019).

          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema2/img2.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.bg-18
      .col-12
        .p-5
          .row.mb-2.ms-0.mt-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Metodología para definir indicadores

          p.mt-4 A continuación se describen los pasos a seguir: 

          .row.justify-content-center.align-items-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 15.
                span Pasos para la Definición y Aplicación de Indicadores de Gestión

              .tabla-a.color-acento-contenido.mt-4
                table
                  thead
                    tr(style="background-color: #FD9826")
                      th Paso
                      th Descripción

                  tbody
                    tr(style="background-color: #FFFF")
                      td.text-start Definir objetivos y estrategias
                      td.text-start Saber qué se va a medir y su propósito dentro de la organización.
                    tr(style="background-color: #F6F6F6")
                      td.text-start Precisar los Factores Críticos de Éxito (FCE)
                      td.text-start Identificar variables internas y externas que afectan el logro de objetivos.
                    tr(style="background-color: #FFFF")
                      td.text-start Relacionar el indicador para cada FCE
                      td.text-start Monitorear actividades asociadas a cada objetivo.
                    tr(style="background-color: #F6F6F6")
                      td.text-start Identificar el tipo de escala valorativa
                      td.text-start Utilizar escala: estado (valor inicial), umbral (meta) y rango de gestión (límites aceptables).
                    tr(style="background-color: #FFFF")
                      td.text-start Debe ser confiable y fácil de medir
                      td.text-start Usar información verídica y métodos adecuados; asignar responsables del proceso.
                    tr(style="background-color: #F6F6F6")
                      td.text-start Establecer y asignar recursos
                      td.text-start Determinar los recursos necesarios según los objetivos.
                    tr(style="background-color: #FFFF")
                      td.text-start Medir y ajustar
                      td.text-start Indicador debe ser claro, válido y útil para la toma de decisiones.
                    tr(style="background-color: #F6F6F6")
                      td.text-start Estandarizar y formalizar
                      td.text-start Documentar, divulgar y dar a conocer los indicadores de gestión.

              .row.justify-content-center.mt-4
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-strech.bg-19
                    .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/tema2/img3.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p Los indicadores poseen los siguientes elementos:

                        ul.lista-ul--color(data-aos="fade-right")
                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 #[b Nombre:] debe ser claro y concreto.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 #[b Fórmula:] para calcular el indicador.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 #[b Escala de medida:] la forma como se presenta el resultado, por ejemplo, en porcentajes, unidades, etc.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 #[b Definición:] expresa el concepto del indicador, lo que mide para el cumplimiento de los objetivos.

              .row.justify-content-center.mt-4
                .col-lg-12(data-aos="fade-down")
                  .row.d-flex.align-items-strech.bg-21
                    .col-lg.d-flex
                      .p-4.w-100.align-items-center
                        p Las ventajas de los indicadores de gestión son:

                        ul.lista-ul--color(data-aos="fade-right")
                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Incentiva a los colaboradores a trabajar continuamente por el cumplimiento de los objetivos.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Permite la mejora continua.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Fortalece el trabajo en equipo.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Motiva a desarrollar las actividades en términos de eficiencia, eficacia y productividad.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Permite realizar comparativos para el diseño e implementación de estrategias acorde con la planeación estratégica.

                          li.d-flex.bg-20.p-2
                            i.fa-solid.fa-greater-than
                            |
                            p.mb-0 Presenta información oportuna para la toma de decisiones.


                    .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                      figure.m-0.p-0.w-100.h-100.d-flex
                        img(src='@/assets/curso/tema2/img4.png', alt='', class="w-100 h-100 object-fit-cover")


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Clasificación    

    p.mt-4 Para hablar de la clasificación es importante definir que se divide de acuerdo con su naturaleza y según su vigencia, ambas deben ser objeto de revisión.     

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 De acuerdo con su naturaleza

    .row.justify-content-center.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img5.svg', style="width: 85px").m-auto

          p.text-center #[b Efectividad]
          p.mb-0.text-center Mide el impacto en el logro de los resultados en términos de eficiencia y eficacia, de acuerdo con el grado de cumplimiento de los objetivos.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width: 85px").m-auto

          p.text-center #[b Eficiencia]
          p.mb-0.text-center Mide el cumplimiento de los objetivos, teniendo en cuenta realizar los procesos en el menor tiempo posible, así mismo, se enfoca en la reducción de costos. 
          
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width: 85px").m-auto

          p.text-center #[b Eficacia]
          p.mb-0.text-center Mide el cumplimiento de los objetivos, teniendo en cuenta el logro de los resultados propuestos.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-6.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img8.svg', style="width: 85px").m-auto

          p.text-center #[b Productividad]
          p.mb-0.text-center Mide el rendimiento en los procesos, teniendo en cuenta optimizar resultados y disminuir gastos.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Según la vigencia


    .row.justify-content-center.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-strech.bg-19
          .col-lg.d-flex
            .p-4.w-100.align-items-center
              .row.align-items-center.bg-20.mt-4
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 95px").m-auto
                .col-lg-10
                  p.mt-2 #[b Permanentes]
                  p Son indicadores que se diseñan para actividades específicas dentro de la organización, que son constantes y permanecen en el tiempo.

              .row.align-items-center.bg-20.mt-4
                .col-lg-2.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 95px").m-auto
                .col-lg-10
                  p.mt-2 #[b Temporales]
                  p Generalmente se asocian al logro de objetivos de un proyecto o actividad, tiene fecha de vencimiento una vez finalice dicha tarea.


          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema2/img9.png', alt='', class="w-100 h-100 object-fit-cover")




    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Según el nivel de generación y utilización


    p.mt-4 Los siguientes indicadores se encuentran relacionados con la organización y planeación estratégica para el cumplimiento de los objetivos propuestos. Los resultados obtenidos son el insumo para tomar decisiones:

    .row.justify-content-center
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img12.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        .row.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/img13.svg', style="width: 85px").m-auto

              p.text-center #[b Estratégico]
              p.mb-0.text-center Se desarrolla en la dirección, incluye la relación de la empresa con el entorno. Se maneja a largo plazo.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/img14.svg', style="width: 85px").m-auto

              p.text-center #[b Táctico]
              p.mb-0.text-center Se desarrolla con base en la gestión estratégica. Se enfoca en las actividades de organización y coordinación, y se maneja a mediano plazo.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-6.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/img15.svg', style="width: 85px").m-auto

              p.text-center #[b Operativo]
              p.mb-0.text-center Se desarrolla con base en la gestión táctica, relacionada con las actividades de ejecución y control. El impacto es a corto plazo.
      
        p.mt-4 Cabe resaltar que la empresa de acuerdo con sus necesidades, objetivos de medición y mejora continua diseña e implementa los indicadores; por lo tanto, es importante que tenga en cuenta los objetivos que persigue con el fin de crear indicadores acordes con los resultados esperados y que sean útiles para la toma de decisiones.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c6(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Clasificación de indicadores por áreas

    .row.mt-4
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="Área comercial")
            p #[b Área comercial] 
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Nivel de ventas. 
              
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Satisfacción del cliente. 

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Calificación de proveedores.


          .tarjeta.clr-paleYellow.p-4(titulo="Área de calidad")
            p #[b Área de calidad] 
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Cumplimiento del programa de auditorías. 

              
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Seguimiento de acciones correctivas y preventivas. 


              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Capacitaciones.

          .tarjeta.clr-paleYellow.p-4(titulo="Área de planificación")
            p #[b Área de planificación] 
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Cumplimiento de la producción programada. 

              
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Utilización de la capacidad instalada. 


              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Eficiencia operativa.

          .tarjeta.clr-paleYellow.p-4(titulo="Área de producción")
            p #[b Área de producción] 
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Productividad en unidades reales. 

              
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Productividad por empleado.

          .tarjeta.clr-paleYellow.p-4(titulo="Área de mantenimiento")
            p #[b Área de mantenimiento] 
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Disponibilidad de maquinaria. 
        
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Mantenibilidad de la planta. 

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Confiabilidad de la maquinaria.


      .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/img16.png", alt="alt", style="width:295px;").m-auto


    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Cálculo e interpretación de indicadores de gestión 

    p.mt-4 A continuación, se presentan algunos ejemplos de los indicadores de gestión: 

    .row.align-items-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-14")
          .row(titulo="Indicador de gestión de un equipo de ventas")
            .col-12.mb-4.mb-md-0
              p.px-5 Para su desarrollo se presentan los siguientes supuestos:

              ul.lista-ul--color.px-5
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 Se trabajan ocho horas diarias, cinco días a la semana.
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 Cada vendedor tiene la capacidad para realizar doce visitas diarias, sesenta visitas semanales.
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 Se tiene establecido que de las doce visitas se obtenga diez ventas. Se esperan cincuenta ventas por vendedor.
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 Cada visita tiene un costo de $12.000.
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 Cada artículo vendido tiene un precio de $19.000.
                li.d-flex
                  i.fa-solid.fa-greater-than
                  |
                  p.mb-0 El grupo está compuesto por cinco vendedores. (Mejía, s.f., p.1)

          div(titulo="Factores críticos de éxito")
            ul.lista-ul--color.px-5
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Eficacia, eficiencia, efectividad, resultado y productividad (expresada en unidades vendidas por hora-vendedor y respecto del monto de las ventas frente a los costos de las visitas).
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Cumplimiento de los clientes (cartera).

          div(titulo="Rangos")

            ul.lista-ul--color.px-5
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Valor máximo: 120 % del umbral.
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Valor sobresaliente: 105 % del umbral.
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Valor satisfactorio: 100 % del umbral.
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Valor aceptable: 95 % del umbral.
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Valor mínimo: 90 % del umbral.

          div(titulo="Indicador de eficacia")
            p.px-5 Mide el cumplimiento de cada vendedor y del grupo en general, de acuerdo con la cantidad semanal programada.

            .row.justify-content-center
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema2/img17.svg", alt="", style="width: 399px").m-auto

              .col-lg-6.mt-lg-0.mt-2
                figure
                  img(src="@/assets/curso/tema2/img18.svg", alt="", style="width: 399px")

          div(titulo="Resultado")
            p.px-5 Mide el total de ventas realizadas por cada vendedor y el grupo

            .row.justify-content-center
              .col-lg-6
                figure
                  img(src="@/assets/curso/tema2/img19.svg", alt="", style="width: 399px").m-auto

              .col-lg-6.mt-lg-0.mt-2
                figure
                  img(src="@/assets/curso/tema2/img20.svg", alt="", style="width: 399px")


    .row.bg-22
      .col-12
        .p-5
          .row.mb-2.ms-0.mt-4
            .col-auto.bg-c6(data-aos="fade-left")
              .row.align-items-center
                .col
                  h3.mb-0 Otros indicadores

          .row.mt-4
            .col-lg-11
              .row.align-items-center.p-4.bg-23(data-aos="fade-right")
                .col-lg-7
                  p #[b De organización:]
                  p Ejecución presupuestal: mide el cumplimiento de la ejecución del presupuesto.

                  figure
                  img(src="@/assets/curso/tema2/img21.svg", alt="", style="width: 540px")
                .col-lg-5.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema2/img22.png', alt='', style="width: 472px").m-auto

          .row.mt-4.justify-content-center
            .col-lg-3
              figure
                img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 480px").m-auto

            .col-lg-7.bg-23.p-4(data-aos="fade-right")
              p #[b Indicadores de recursos humanos]
              p Productividad de mano de obra: mide el rendimiento laboral de los trabajadores.

              figure
                img(src="@/assets/curso/tema2/img24.svg", alt="", style="width: 540px").m-auto

              p.mt-2 #[b Ausentismo:] mide el cumplimiento del horario de los trabajadores.
              figure
                img(src="@/assets/curso/tema2/img25.svg", alt="", style="width: 430px").m-auto

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 2.2 Indicadores financieros  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img26.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para aplicar el procedimiento de cálculo de los indicadores financieros es importante tener los estados financieros de dos o más períodos, lo que permitirá analizar y observar las debilidades y fortalezas de la empresa en términos monetarios y porcentuales, con el fin de diseñar e implementar acciones de mejora.
        br
        br
        |Los indicadores o razones financieras pertenecen a la metodología de análisis financiero, cuyo objetivo es medir y cuantificar la información para la adecuada toma de decisiones en inversión, rentabilidad, liquidez y endeudamiento.

    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Clasificación

    p.mt-4 Los estados financieros reflejan la realidad económica y financiera de la empresa; sin embargo, para realizar el análisis detallado, comprensible y útil se requiere comparar dos o más períodos, por ello, la importancia de aplicar los indicadores financieros. Estos permiten verificar la situación financiera de la empresa en un período determinado, así mismo, validar las proyecciones realizadas, comparando lo presupuestado con lo ejecutado, constatando el cumplimiento de los objetivos financieros.

    .row.mt-4 
      .col-lg-3.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img27.png', alt='', style="width: 295px").m-auto
      .col-lg-9
        p Los indicadores que se utilizan con mayor frecuencia son los siguientes:

        .row.align-items-center
          .col-lg-4
            .row.p-2.align-items-center.bg-13.me-lg-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img28.svg", alt="", style="width: 63px").m-auto
              .col-lg-8
                p.mt-2.text-small #[b Razones de liquidez.]

          .col-lg-4
            .row.p-2.align-items-center.bg-13.me-lg-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img29.svg", alt="", style="width: 63px").m-auto
              .col-lg-8
                p.mt-2.text-small #[b Razones de actividad.]

          .col-lg-4
            .row.p-2.align-items-center.bg-13.me-lg-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img30.svg", alt="", style="width: 63px").m-auto
              .col-lg-8
                p.mt-2.text-small #[b Razones de endeudamiento o apalancamiento.]

        .row.align-items-center.mt-3
          .col-lg-4
            .row.p-2.align-items-center.bg-13.me-lg-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img31.svg", alt="", style="width: 63px").m-auto
              .col-lg-8
                p.mt-2.text-small #[b Razones de rentabilidad.]

          .col-lg-5.mx-2
            .row.p-2.align-items-center.bg-13.me-lg-2
              .col-lg-4.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema2/img32.svg", alt="", style="width: 63px").m-auto
              .col-lg-8
                p.mt-2.text-small #[b Razones de valor de mercado de la empresa.  (Martínez, s.f., p.1)]

      


    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Cálculo e interpretación de indicadores financieros

    .row.bg-24
      .col-12 
        .p-5
          p Para calcular los indicadores la empresa Contable SAS presenta la siguiente información, correspondiente a los años 2018 y 2019: 

          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 1. 
                span Cálculo de indicadores financieros.
              
              figure
                img(src='@/assets/curso/tema2/img33.svg', alt='Texto alternativo: Tabla del estado de resultados integral de la Empresa Contable SAS para 2019 y 2018, que presenta ingresos operacionales, costos, utilidad bruta, gastos, utilidad operativa, impuestos, utilidad líquida, reservas y utilidad del ejercicio, con valores en pesos colombianos. ', style="width: 820px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6.p-4(style='background-color: white !important')
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 16. 
                      span Cálculo del costo de ventas
                    
                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th Concepto
                            th Año 2019
                            th Año 2018
                        tbody
                          tr(style="background-color: #FFFF")
                            td.text-start Inventario inicial
                            td.text-end $72.000.000
                            td.text-end $60.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Compras de contado
                            td.text-end $55.200.000
                            td.text-end $54.000.000
                          tr(style="background-color: #FFFF")
                            td.text-start Compras a crédito
                            td.text-end $148.800.000
                            td.text-end $120.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Igual mercancía disponible
                            td.text-end $276.000.000
                            td.text-end $234.000.000
                          tr(style="background-color: #FFFF")
                            td.text-start Menos inventario final de mercancías
                            td.text-end $86.400.000
                            td.text-end $72.000.000


                .row.justify-content-center.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 17. 
                      span Ingresos por ventas y recaudo de cartera

                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th Concepto
                            th Año 2019
                            th Año 2018
                        tbody
                          tr(style="background-color: #FFFF")
                            td.text-start Ventas a crédito
                            td.text-end $192.000.000
                            td.text-end $144.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Ventas de contado
                            td.text-end $108.000.000
                            td.text-end $93.600.000
                          tr(style="background-color: #FFFF")
                            td.text-start #[b Total ingresos por actividades ordinarias]
                            td.text-end #[b $300.000.000]
                            td.text-end #[b $237.600.000]



                .row.justify-content-center.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 18. 
                      span Estado de situación financiera: activos

                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th Concepto
                            th Año 2019
                            th Año 2018
                        tbody
                          tr(style="background-color: #FFFF")
                            td.text-start #[b Activo corriente]
                            td.text-end 
                            td.text-end 
                          tr(style="background-color: #F6F6F6")
                            td.text-start Disponible
                            td.text-end $18.000.000
                            td.text-end $19.200.000
                          tr(style="background-color: #FFFF")
                            td.text-start Inversiones
                            td.text-end $2.400.000
                            td.text-end $1.800.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Deudores a corto plazo
                            td.text-end $36.000.000
                            td.text-end $32.400.000
                          tr(style="background-color: #FFFF")
                            td.text-start Inventarios
                            td.text-end $86.400.000
                            td.text-end $72.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start #[b Total activo corriente]
                            td.text-end #[b $142.800.000]
                            td.text-end #[b $125.400.000]
                          tr(style="background-color: #FFFF")
                            td.text-start Propiedades, planta y equipo
                            td.text-end $60.000.000
                            td.text-end $42.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start #[b Total activo]
                            td.text-end #[b $202.800.000]
                            td.text-end #[b $167.400.000]



                .row.justify-content-center.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 19. 
                      span Estado de situación financiera: pasivos

                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th Concepto
                            th Año 2019
                            th Año 2018
                        tbody
                          tr(style="background-color: #FFFF")
                            td.text-start #[b Pasivo corriente]
                            td.text-end 
                            td.text-end 
                          tr(style="background-color: #F6F6F6")
                            td.text-start Obligaciones financieras
                            td.text-end $28.800.000
                            td.text-end $25.344.000
                          tr(style="background-color: #FFFF")
                            td.text-start Proveedores
                            td.text-end $37.165.200
                            td.text-end $60.600.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Cuentas por pagar
                            td.text-end $20.800.000
                            td.text-end $15.772.000
                          tr(style="background-color: #FFFF")
                            td.text-start Impuestos, gravámenes y tasas
                            td.text-end $24.831.600
                            td.text-end $17.136.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Pasivo estimado y provisiones
                            td.text-end $4.200.000
                            td.text-end $3.600.000
                          tr(style="background-color: #FFFF")
                            td.text-start #[b Total pasivo]
                            td.text-end #[b $115.796.800]
                            td.text-end #[b $122.452.000]



                .row.justify-content-center.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Tabla 20. 
                      span Estado de situación financiera: patrimonio

                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th Concepto
                            th Año 2019
                            th Año 2018
                        tbody
                          tr(style="background-color: #FFFF")
                            td.text-start Capital
                            td.text-end $20.000.000
                            td.text-end $20.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start Utilidades acumuladas
                            td.text-end $67.003.200
                            td.text-end $24.948.000
                          tr(style="background-color: #FFFF")
                            td.text-start #[b Total patrimonio]
                            td.text-end #[b $87.003.200]
                            td.text-end #[b $44.948.000]
                          tr(style="background-color: #F6F6F6")
                            td.text-start #[b Total pasivo más patrimonio]
                            td.text-end #[b $202.800.000]
                            td.text-end #[b $167.400.000]

    

    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Indicadores de liquidez

    p.mt-4 Los indicadores de liquidez miden la capacidad de la empresa para asumir las obligaciones a corto plazo (un año). En el cálculo intervienen los activos y pasivos corrientes que se encuentran relacionados en el estado de situación financiera. Los indicadores de liquidez más utilizados son los siguientes:

    .row.align-items-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-14")
          .row(titulo="Razón corriente")
            .col-12.mb-4.mb-md-0
              p.px-5 El indicador de razón corriente o razón circulante mide la capacidad que tiene la empresa para cubrir las obligaciones a corto plazo; para ello, verifique cuántos pesos del activo corriente tiene disponibles para respaldar dichas deudas inferiores a un año.

              p.px-5 Fórmula de razón corriente:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img34.svg', alt='', style="width: 267px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img35.svg', alt='', style="width: 325px") 


              p.px-5.mt-4 #[b Interpretación:] la empresa tiene una razón corriente de 1,23 en el año 2019, es decir, que por cada peso que la empresa debe en el corto plazo cuenta con $1,23 del activo corriente para respaldar la obligación.

              

          div(titulo="Capital neto de trabajo")
            p.px-5 El capital de trabajo neto es el indicador que muestra la disponibilidad del activo corriente para asumir los compromisos de la empresa y operar en condiciones normales, es decir, adquirir materias primas, pagar servicios, arrendamientos, sueldos, entre otros (Gerencie, 2020).

              p.px-5 Fórmula capital neto de trabajo:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img36.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img37.svg', alt='', style="width: 504px")


              p.px-5.mt-4 #[b Interpretación:] la empresa tiene una razón corriente de 1,23 en el año 2019, es decir, que por cada peso que la empresa debe en el corto plazo cuenta con $1,23 del activo corriente para respaldar la obligación.

          div(titulo="Prueba ácida")
              p.px-5 El indicador de prueba o razón ácida mide la capacidad que tiene la empresa para cubrir las obligaciones a corto plazo, sin tener que recurrir a la venta de sus inventarios y sin tener en cuenta los gastos pagados por anticipado. También se conoce con el nombre de liquidez seca, incluye los saldos de efectivo, cuentas por cobrar e inversiones temporales.

              p.px-5  Fórmula prueba ácida:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img38.svg', alt='', style="width: 440px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img39.svg', alt='', style="width: 440px") 


              p.px-5.mt-4 #[b Interpretación:] la empresa Contable SAS tiene disponible $0,49 centavos para respaldar las obligaciones a corto plazo, sin tener que vender sus inventarios.
    
    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Indicadores de endeudamiento

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img40.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Miden la capacidad que tiene la empresa para acceder a nuevos créditos y cumplir con los compromisos adquiridos.


    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Indicadores de actividad o rotación

    p.mt-4 Los indicadores de actividad también se les denomina indicadores de rotación o de eficiencia. Estos indicadores miden la capacidad de la empresa para generar ingresos frente a sus activos.

    .row.align-items-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-14")
          .row(titulo="Rotación de cartera")
            .col-12.mb-4.mb-md-0
              p.px-5 Este indicador muestra el número de veces en que la empresa convierte sus cuentas por cobrar en efectivo durante el período de un año.

              p.px-5 Fórmula rotación de cartera:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img41.svg', alt='', style="width: 460px").m-auto

              p.px-5.mt-4 Para calcular el promedio de clientes se realiza la sumatoria del año 1 y el año 2, posteriormente se divide en dos para determinar el promedio.

              p.px-5 La empresa contable SAS presenta la siguiente información de deudores a corto plazo, en la que se estima que el 90% corresponde a la cuenta de clientes

              figure
                img(src='@/assets/curso/tema2/img42.svg', alt='', style="width: 513px").m-auto

              figure.mt-4
                img(src='@/assets/curso/tema2/img43.svg', alt='', style="width: 512px").m-auto

              p.px-5.mt-4 #[b Interpretación:] el resultado indica que la empresa Contable SAS convierte en efectivo las cuentas por cobrar-clientes cada 6,23 veces en el año.

              

          div(titulo="Período promedio de cobro")

              p.px-5 Indica el número de días en que las cuentas de clientes se convierten en efectivo durante el año.

              p.px-5 Fórmula:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img44.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img45.svg', alt='', style="width: 504px")


              p.px-5.mt-4 #[b Interpretación:] el resultado indica que la empresa Contable SAS convierte en efectivo las cuentas por cobrar a clientes cada 58 días en el año, es decir, es el período en el cual percibe ingresos por las ventas a crédito.

          div(titulo="Rotación de inventarios")

              p.px-5 Indica el número de veces en que los inventarios se venden durante el año, convirtiéndose en efectivo o en cuentas por cobrar a clientes.

              p.px-5 Fórmula:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img46.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img47.svg', alt='', style="width: 465px")

              .row.justify-content-center.align-items-center.mt-3
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img48.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img49.svg', alt='', style="width: 465px")


              p.px-5.mt-4 #[b Interpretación:] el inventario de la empresa Contable SAS rota 2,39 veces en el año, es decir, se convierte 2,39 veces por año en efectivo o en cuentas por cobrar, lo que corresponde a un período promedio de 152 días. Por lo tanto, la rotación es muy baja, la empresa debe implementar estrategias que permitan una rotación con mayor frecuencia.

          div(titulo="Rotación de proveedores")

              p.px-5 Este indicador muestra el período en que se cancelan las cuentas por pagar a proveedores durante el año.

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img50.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img51.svg', alt='', style="width: 560px")

              .row.justify-content-center.align-items-center.mt-3
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img52.svg', alt='', style="width: 504px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img53.svg', alt='', style="width: 560px")


              p.px-5.mt-4 #[b Interpretación:] la empresa contable SAS paga las cuentas a proveedores cada 121 días, es decir, 3 veces en el año.


    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Indicadores de rendimiento

    p.mt-4 Los indicadores de rentabilidad o rendimiento miden la capacidad de la empresa para generar utilidades.

    .row.align-items-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-14")
          .row(titulo="Rentabilidad sobre ingresos operacionales")
            .col-12.mb-4.mb-md-0
              p.px-5 Indica el porcentaje de participación de la utilidad generada por los ingresos de actividades ordinarias.

              figure
                img(src='@/assets/curso/tema2/img55.svg', alt='', style="width: 603px").m-auto

              figure.mt-4
                img(src='@/assets/curso/tema2/img56.svg', alt='', style="width: 603px").m-auto

              p.px-5.mt-4 #[b Interpretación:] la empresa contable SAS por cada peso vendido generó el 15,01% de utilidad neta.
              

          div(titulo="Rentabilidad sobre el patrimonio")

              p.px-5 El indicador de rentabilidad sobre el patrimonio o denominada también rentabilidad financiera muestra la rentabilidad de la inversión realizada por los socios.

              p.px-5 Fórmula:

              .row.justify-content-center.align-items-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img57.svg', alt='', style="width: 495px").m-auto

                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema2/img58.svg', alt='', style="width: 524px")

              p.px-5.mt-4 #[b Interpretación:] la empresa contable SAS obtuvo una rentabilidad de 51,78% sobre la inversión realizada por los socios.

          div(titulo="Rentabilidad de la utilidad bruta sobre ventas")

              p.px-5 Representa el porcentaje de participación de la utilidad bruta sobre las ventas generadas, es decir, sobre los ingresos por actividades ordinarias.

              p.px-5 Fórmula:

              figure
                img(src='@/assets/curso/tema2/img59.svg', alt='', style="width: 603px").m-auto

              figure.mt-4
                img(src='@/assets/curso/tema2/img60.svg', alt='', style="width: 603px").m-auto

              p.px-5.mt-4 #[b Interpretación:] la empresa contable SAS obtuvo una rentabilidad de 36,8% de utilidad bruta sobre los ingresos operacionales generados.
              

    .tarjeta.bg-25.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema2/img54.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Indicadores financieros
              p.text-small.mb-0.text-white Se invita a leer el documento Indicadores financieros, donde se aborda una recopilación clara y concisa de los principales indicadores financieros utilizados para evaluar la salud económica de una empresa.
    
            .col-sm-auto
              a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black

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
