<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Otras técnicas de análisis financiero

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis financiero es indispensable en la organización, teniendo en cuenta que permite visualizar la situación económica y financiera de esta; por lo tanto, se revisan las siguientes técnicas con el fin de dar valor agregado a la empresa, medir el desempeño y generar rentabilidad. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 3.1 Valor económico agregado (EVA)

    .row.align-items-center
      .col-lg-7
        .bloque-texto-c.bg-29.p-4(data-aos="fade-right")
          i.fas.fa-quote-right
          h3.mb-2 El Valor Económico Agregado (EVA) es un método de desempeño financiero para calcular el verdadero beneficio económico de una empresa.
          span - (Coral, D., L. y Gudiño, E., 2014). 

        p.mt-4 Este método permite conocer la rentabilidad de la empresa, teniendo en cuenta que el resultado que genera ya tiene deducidos los costos y los gastos. Asimismo, permite analizar el incremento de la inversión de los inversionistas o socios.  

      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img9.png', alt='', style="width: 505px").m-auto

    
    .row.bg-26
      .col-12
        .p-5
          .row.mb-2.ms-0.mt-4 
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Interpretación del EVA

          .row.justify-content-center.mt-4
            .col-lg-10(data-aos="fade-down")
              .row.d-flex.align-items-strech.bg-19
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema3/img8.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                .col-lg.d-flex
                  .p-4.w-100.align-items-center
                    p Es importante tener en cuenta lo siguiente:

                    ul.lista-ul--color(data-aos="fade-right")
                      li.d-flex.bg-20.p-2
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Positivo:]  cuando se genera rentabilidad por encima de los costos.


                      li.d-flex.bg-20.p-2
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Cero “0”:]  existe un equilibrio.


                      li.d-flex.bg-20.p-2
                        i.fa-solid.fa-greater-than
                        |
                        p.mb-0 #[b Negativo:]  indica que la rentabilidad está por debajo de lo exigido por los propietarios.


    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Cálculo del EVA  

    p.mt-4 Se debe calcular el capital invertido neto (CIN) o activo neto financiero (ANF). Una forma clara y sencilla de calcular el capital invertido es:   

    .row.justify-content-center
      .col-lg-6
        .row.p-4.align-items-center.bg-27.me-lg-2
          p #[b Opción 1 de cálculo:]

          figure
            img(src="@/assets/curso/tema3/img6.svg", alt="Fórmula de capital invertido o activo neto financiero (CIN o ANF) es igual a: activos totales, menos pasivos que no generen intereses.", style="width: 490px")

      .col-lg-6
        .row.p-4.align-items-center.bg-27.me-lg-2
          p #[b Opción 2 de cálculo:]

          figure
            img(src="@/assets/curso/tema3/img7.svg", alt="Fórmula de capital invertido o activo neto financiero (CIN o ANF) es igual a: patrimonio total, más obligaciones financieras.", style="width: 490px")

    .row.align-items-center.bg-13.mt-4.p-3
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema3/img3.svg", alt="", style="width: 90px").m-auto

      .col-lg-11
        p.mt-2 Calcular la utilidad operacional neta antes de gastos financieros y después de impuestos (UODI): su objetivo es determinar si la utilidad excede o no el valor necesario para atender el costo de los recursos utilizados, tanto de pasivo como de patrimonio.

    .row.justify-content-center.mt-4
      .col-lg-10
        p Determinar el costo promedio ponderado de capital (CPPC):  es la tasa de rendimiento que debe tener la empresa sobre sus inversiones. Para su cálculo se tiene en cuenta los pasivos y la Tasa Interna de Oportunidad (TIO).

        .row.justify-content-center.align-items-center.bg-23.p-4(data-aos="fade-right")
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img5.svg', alt='Fórmula de costo promedio ponderado de capital (CPPC) es igual a:costo de capital multiplicado por patrimonio dividido capital invertido, más costo ponderado de la deuda multiplicado por pasivo dividido el capital invertido, multiplicado por 1 menos la tasa de impuestos sobre la renta y complementarios.', style="width: 540px").m-auto
          
          .col-lg-6
            p Donde:

            p.bg-20.p-2 #[b C#[sup *]:] Costo de capital.

            p.bg-20.p-2 #[b C#[sub i]:] Costo ponderado de la deuda.

            p.bg-20.p-2 #[b t:] tasa de impuestos sobre la renta y complementarios.

            p.bg-20.p-2 Calcular el Valor Económico Agregado (EVA).

        .row.justify-content-center.align-items-center.bg-21.p-4.mt-4(data-aos="fade-right")
          .col-lg-5.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 373px").m-auto

          .col-lg-7
            p La fórmula básica del EVA es la siguiente:

            figure
              img(src="@/assets/curso/tema3/img4.svg", alt="Promedio ponderado de capital, multiplicado por capital invertido o activo neto financiado (ANF).", style="width: 279px").m-auto

            p Donde:

            p.bg-20.p-2 #[b EVA] = Economic Value Added (Valor Económico Agregado)

            p.bg-20.p-2 #[b UOIDI] = Utilidad operacional antes de intereses y después de impuestos.

            p.bg-20.p-2 #[b CPPC] = Costo promedio ponderado de capital.

            p.bg-20.p-2 #[b CIN ] = Capital invertido o activo neto financiero (ANF).

    .tarjeta.bg-14.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img13.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-white #[b Ejemplo de cálculo del EVA] 
              p.text-white A continuación, se presenta el estado de situación financiera y el estado de resultados integral para calcular el EVA.

    .row.bg-28
      .col-12
        .p-5 
          .row.justify-content-center.align-items-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 21. 
                span Estado de resultados integral de la Empresa Contable SAS para el año 2019

              .tabla-a.color-acento-contenido.mt-4
                table
                  thead
                    tr(style="background-color: #FD9826")
                      th Concepto
                      th Valor
                  tbody
                    tr(style="background-color: #F6F6F6")
                      td.text-start Ingresos operacionales
                      td.text-end -
                    tr(style="background-color: #FFFF")
                      td.text-start #[b Ingresos por actividades ordinarias]
                      td.text-end $300.000.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start Costo de ventas
                      td.text-end $189.600.000
                    tr(style="background-color: #FFFF")
                      td.text-start #[b Utilidad bruta]
                      td.text-end $110.400.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start #[b Gastos operacionales]
                      td.text-end -
                    tr(style="background-color: #FFFF")
                      td.text-start Gastos de administración
                      td.text-end $28.800.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start Gastos de ventas
                      td.text-end $12.000.000
                    tr(style="background-color: #FFFF")
                      td.text-start #[b Utilidad operacional]
                      td.text-end $69.600.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start Ingresos no operacionales
                      td.text-end $2.400.000
                    tr(style="background-color: #FFFF")
                      td.text-start Gastos financieros
                      td.text-end $1.200.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start #[b Utilidad antes de impuestos]
                      td.text-end $70.800.000
                    tr(style="background-color: #FFFF")
                      td.text-start Provisión para impuesto de renta
                      td.text-end $24.072.000
                    tr(style="background-color: #F6F6F6")
                      td.text-start #[b Utilidad líquida]
                      td.text-end $46.728.000
                    tr(style="background-color: #FFFF")
                      td.text-start Reservas
                      td.text-end $4.672.800
                    tr(style="background-color: #F6F6F6")
                      td.text-start #[b Utilidad del ejercicio]
                      td.text-end $42.055.200

          .row.justify-content-center.align-items-center.mt-4
            .col-lg-11
              .row.justify-content-center
                .col-lg-8
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 22.  
                    span Estado de situación financiera – Activos de la Empresa Contable SAS al 31 de diciembre de 2019

                  .tabla-responsive
                    .tabla-a.color-acento-contenido.mt-4
                      table
                        thead
                          tr(style="background-color: #FD9826")
                            th.min-padding Concepto
                            th.min-padding Valor
                        tbody
                          tr(style="background-color: #F6F6F6")
                            td.text-start.min-padding #[b Activo corriente]
                            td.text-end.min-padding #[b -]
                          tr(style="background-color: #FFFF")
                            td.text-start.min-padding Disponible
                            td.text-end.min-padding $18.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start.min-padding Inversiones
                            td.text-end.min-padding $2.400.000
                          tr(style="background-color: #FFFF")
                            td.text-start.min-padding Deudores corto plazo
                            td.text-end.min-padding $36.000.000
                          tr(style="background-color: #F6F6F6")
                            td.text-start.min-padding Inventarios
                            td.text-end.min-padding $86.400.000
                          tr(style="background-color: #FFFF")
                            td.text-start.min-padding #[b Total activo corriente]
                            td.text-end.min-padding #[b $142.800.000]
                          tr(style="background-color: #F6F6F6")
                            td.text-start.min-padding Propiedades, planta y equipo
                            td.text-end.min-padding $60.000.000
                          tr(style="background-color: #FFFF")
                            td.text-start.min-padding #[b Total activo]
                            td.text-end.min-padding #[b $202.800.000]

                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img10.png', alt='', style="width: 400px").m-auto

              .row.justify-content-center.mt-4
                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img11.png', alt='', style="width: 400px").m-auto
                .col-lg-8
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 23.  
                    span Estado de situación financiera – Pasivos de la Empresa Contable SAS al 31 de diciembre de 2019

                  .tabla-a.color-acento-contenido.mt-4
                    table
                      thead
                        tr(style="background-color: #FD9826")
                          th.min-padding(style="width:40%") Concepto
                          th.min-padding(style="width:60%") Valor
                      tbody
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding #[b Pasivo corriente]
                          td.text-end.min-padding #[b -]
                        tr(style="background-color: #FFFF")
                          td.text-start.min-padding Obligaciones financieras
                          td.text-end.min-padding $28.800.000
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding Proveedores
                          td.text-end.min-padding $37.165.200
                        tr(style="background-color: #FFFF")
                          td.text-start.min-padding Cuentas por pagar
                          td.text-end.min-padding $20.800.000
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding Impuestos, gravámenes y tasas
                          td.text-end.min-padding $24.831.600
                        tr(style="background-color: #FFFF")
                          td.text-start.min-padding Pasivo estimado y provisiones
                          td.text-end.min-padding $4.200.000
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding #[b Total pasivo]
                          td.text-end.min-padding #[b $115.796.800]


              .row.justify-content-center.mt-4
                .col-lg-8
                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 24.  
                    span Estado de situación financiera – Patrimonio de la Empresa Contable SAS al 31 de diciembre de 2019.

                  .tabla-a.color-acento-contenido.mt-4
                    table
                      thead
                        tr(style="background-color: #FD9826")
                          th.min-padding(style="width:60%") Concepto
                          th.min-padding(style="width:40%") Valor
                      tbody
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding Capital
                          td.text-end.min-padding $20.000.000
                        tr(style="background-color: #FFFF")
                          td.text-start.min-padding Utilidades acumuladas
                          td.text-end.min-padding $67.003.200
                        tr(style="background-color: #F6F6F6")
                          td.text-start.min-padding #[b Total patrimonio]
                          td.text-end.min-padding #[b $87.003.200]
                        tr(style="background-color: #FFFF")
                          td.text-start.min-padding #[b Total pasivo + patrimonio]
                          td.text-end.min-padding #[b $202.800.000]

                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img12.png', alt='', style="width: 400px").m-auto
                


    .row.justify-content-center.align-items-center.mt-4
      .col-lg-11
        .row.justify-content-center.bg-1.p-4(data-aos="fade-right")

          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 400px").m-auto
          .col-lg-8

            p.mb-0 #[b Cálculo del EVA - Empresa Contable SAS:]
            p Se debe calcular el capital invertido neto (CIN) o activo neto financiero (ANF).
            P.mb-0 #[b Opción 1 de cálculo:]
            p #[b Total activos:] $202.800.000  

            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 25. 
              span Estado de situación financiera – Pasivos de la Empresa Contable

            .tabla-a.color-acento-contenido.my-4
              table
                thead
                  tr(style="background-color: #FD9826")
                    th.min-padding(style="width:40%") Concepto
                    th.min-padding(style="width:60%") Valor
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start.min-padding Proveedores
                    td.text-end.min-padding $37.165.200
                  tr(style="background-color: #FFFF")
                    td.text-start.min-padding Cuentas por pagar
                    td.text-end.min-padding $20.800.000
                  tr(style="background-color: #F6F6F6")
                    td.text-start.min-padding Impuestos, gravámenes y tasas
                    td.text-end.min-padding $24.831.600
                  tr(style="background-color: #FFFF")
                    td.text-start.min-padding Pasivo estimado y provisiones
                    td.text-end.min-padding $4.200.000
                  tr(style="background-color: #F6F6F6")
                    td.text-start.min-padding Total pasivo
                    td.text-end.min-padding $86.996.800
            figure
              img(src='@/assets/curso/tema3/img13.svg', alt='Fórmula de capital invertido o activo neto financiero (CIN o ANF) es igual a: activos totales, menos pasivos que no generen intereses.', style="width: 504px").m-auto
            figure.mt-4
              img(src="@/assets/curso/tema3/img14.svg", alt="Sustitución numérica en la fórmula anterior para el capital invertido o activo neto financiero (CIN o ANF) del ejercicio: resta de $202,800,000 menos $86,996,800 es igual a $115,803,200.", style="width: 400px").m-auto


        .row.mt-4
          p Opción 2 de cálculo:

          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img15.svg', alt='Fórmula de capital invertido o activo neto financiero (CIN o ANF) es igual a: patrimonio total, más obligaciones financieras.', style="width: 504px").m-auto

          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img16.svg', alt='Sustitución numérica en la fórmula anterior para el capital invertido o activo neto financiero (CIN o ANF) del ejercicio: suma de $87,003,200 más $28,000,000 es igual a $115,803,200.', style="width: 504px").m-auto

        .row.mt-4
          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img17.png', alt='', style="width: 295px").m-auto

          .col-lg-8
            p.p-4.bg-12 Calcular la utilidad operacional neta antes de gastos financieros y después de impuestos (UOIDI).

            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 26. 
              span Reconciliación de la utilidad del ejercicio con utilidad antes de intereses – Empresa Contable SAS (2019).
            
            .tabla-a.color-acento-contenido.mt-4
              table
                thead
                  tr(style="background-color: #FD9826")
                    th.min-padding(style="width:60%") Concepto
                    th.min-padding(style="width:40%") Valor
                tbody
                  tr(style="background-color: #F6F6F6")
                    td.text-start.min-padding Utilidad neta del ejercicio
                    td.text-end.min-padding $42.055.200
                  tr(style="background-color: #FFFF")
                    td.text-start.min-padding Más: Gastos financieros (intereses)
                    td.text-end.min-padding $1.200.000
                  tr(style="background-color: #F6F6F6")
                    td.text-start.min-padding Utilidad del ejercicio antes de intereses
                    td.text-end.min-padding $43.255.200

          p.p-4.bg-12.text-center(data-aos="fade-right") Determinar el costo promedio ponderado de capital (CPPC).

          p La empresa contable SAS desea obtener un rendimiento del 30 % (TIO); el costo de las obligaciones financieras es del 21 % anual.

          .row.justify-content-center.align-items-center.bg-23.p-4(data-aos="fade-right")
            .col-lg-6
              figure
                img(src='@/assets/curso/tema3/img18.svg', alt='Fórmula de costo promedio ponderado de capital (CPPC) es igual a:costo de capital multiplicado por patrimonio dividido capital invertido, más costo ponderado de la deuda multiplicado por pasivo dividido el capital invertido, multiplicado por 1 menos la tasa de impuestos sobre la renta y complementarios.', style="width: 540px").m-auto
            
            .col-lg-6
              p Donde:

              p.bg-20.p-2 #[b C#[sup *]:] Costo de capital.

              p.bg-20.p-2 #[b C#[sub i]:] Costo ponderado de la deuda.

              p.bg-20.p-2 #[b t:] tasa de impuestos sobre la renta y complementarios.

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Tabla 27. 
            span Reconciliación de la utilidad del ejercicio con utilidad antes de intereses - Empresa Contable SAS (2019)

          .tabla-a.color-acento-contenido.mt-4
            table
              thead
                tr(style="background-color: #FD9826")
                  th.min-padding(style="width: 15%") Recurso
                  th.min-padding(style="width: 15%") Valor
                  th.min-padding(style="width: 15%") ANF
                  th.min-padding(style="width: 15%") TIO
                  th.min-padding(style="width: 20%") Participación
                  th.min-padding(style="width: 20%") Ponderación
                  th.min-padding(style="width: 20%") Costo promedio
              tbody
                tr(style="background-color: #F6F6F6")
                  td.text-start.min-padding Obligaciones financieras
                  td.text-end.min-padding $28.800.000
                  td.text-end.min-padding $15.803.200
                  td.text-end.min-padding 21,00 %
                  td.text-end.min-padding 24,87 %
                  td.text-end.min-padding 5,22 %
                  td.text-end.min-padding -
                tr(style="background-color: #FFFF")
                  td.text-start.min-padding Patrimonio
                  td.text-end.min-padding $87.003.200
                  td.text-end.min-padding $115.803.200
                  td.text-end.min-padding 30,00 %
                  td.text-end.min-padding 75,13 %
                  td.text-end.min-padding 22,54 %
                  td.text-end.min-padding -
                tr(style="background-color: #F6F6F6")
                  td.text-start.min-padding #[b Total]
                  td.text-end.min-padding 
                  td.text-end.min-padding 
                  td.text-end.min-padding #[b 51,00 %]
                  td.text-end.min-padding #[b 100 %]
                  td.text-end.min-padding #[b 27,76 %]
                  td.text-end.min-padding #[b 27,76 %]
    
    p.my-4 Para hallar el porcentaje de participación se realiza lo siguiente:

    .row.align-items-center.mt-4
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-14")
          .row(titulo="Participación de obligaciones financieras")
            .col-12.mb-4.mb-md-0

              figure
                img(src='@/assets/curso/tema3/img20.svg', alt='Fórmula de participación obligaciones financieras: obligaciones financieras dividido entre capital invertido.', style="width: 567px").m-auto

              figure.mt-4
                img(src='@/assets/curso/tema3/img21.svg', alt='Sustitución numérica en la fórmula anterior para la participación obligaciones financieras del ejercicio: división de $28,800,000 entre $115,803,200, es igual a 24,87%.', style="width: 567px").m-auto              

          div(titulo="Participación del patrimonio")

            figure
                img(src='@/assets/curso/tema3/img22.svg', alt='Fórmula de participación patrimonio: patrimonio dividido entre capital invertido.', style="width: 401px").m-auto

            figure.mt-4
              img(src='@/assets/curso/tema3/img23.svg', alt='Sustitución numérica en la fórmula anterior para la participación patrimonio del ejercicio: división de $87,003,200 entre $115,803,200, es igual a 75,13%.', style="width: 401px").m-auto  

          div(titulo="Ponderación de obligaciones")
            p.px-5 Para calcular la ponderación se realiza el siguiente procedimiento:
            figure
              img(src='@/assets/curso/tema3/img24.svg', alt='Fórmula de ponderación obligaciones es igual a: tasa interna de oportunidad, multiplicada por la participación.', style="width: 390px").m-auto

          div(titulo="Ponderación de patrimonio")
            figure
              img(src='@/assets/curso/tema3/img25.svg', alt='Fórmula de ponderación patrimonio es igual a: tasa interna de oportunidad, multiplicada por la participación.', style="width: 390px").m-auto

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img19.png', alt='', style="width: 505px").m-auto

    .row.justify-content-center.align-items-center.bg-1.p-4.mt-4(data-aos="fade-right")
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img26.png', alt='', style="width: 421px").m-auto

      .col-lg-7
        p Calcular el Valor Económico Agregado (EVA).

        p.bg-20.p-2 #[b EVA] = UOIDI – (CPPC * CIN)

        p.bg-20.p-2 #[b EVA] = $43.255.200 – (27,76 % * $115.803.200)

        p.bg-20.p-2 #[b CPPC] = Costo promedio ponderado de capital.

        p.bg-20.p-2 #[b EVA ] = $11.108.231,68

        p El indicador de acuerdo con el caso planteado da positivo; sin embargo, es importante realizar un seguimiento constante con el fin de verificar las variaciones que se puedan generar, además de practicar simultáneamente otras técnicas de análisis financiero. Asimismo, la empresa debe diseñar e implementar estrategias que permitan mantener o fortalecer el EVA, mediante el adecuado manejo de cartera, de inventarios, activos fijos, costos y gastos, etc.

    .tarjeta.bg-25.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema2/img54.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1(style="color: #FD9826 !important") Analisis Financiero Aplicado
              p.text-small.mb-0.text-white Para profundizar en este tema por favor revise el Capítulo VII del texto: Ortiz, A., H. (2011). Análisis financiero aplicado y principios de administración financiera (14a ed.). Universidad Externado de Colombia. 
    
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.academia.edu/26760979/Analisis_Financiero_Aplicado_pdf" target="_blank")
                span.text-black Descargar
                i.fas.fa-file-download.text-black

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 3.2 Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un indicador financiero que mide la capacidad de la empresa de generar beneficios económicos en el desarrollo de sus actividades.  Al calcular el indicador se tiene en cuenta determinar la utilidad operacional, sumando las depreciaciones y amortizaciones, sin que sean descontados los intereses e impuestos. Es conocido por sus siglas en inglés #[i earnings before interests, taxes, depreciations and amortizations].

    .row.mt-4.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img28.png', alt='', style="width: 400px").m-auto
      .col-lg-5
        p Para calcular el EBITDA se tiene en cuenta la siguiente estructura:

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2. 
          span Cálculo del EBITDA – Empresa Contable SAS

        figure
          img(src='@/assets/curso/tema3/img29.svg', alt='Tabla sobre el cálculo del EBITDA en una empresa contable que incluye conceptos como utilidad bruta, gastos de administración y ventas, utilidad operativa (EBIT), depreciaciones y amortizaciones.', style="width: 504px").m-auto

    .tarjeta.bg-14.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img28.png", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-white.mb-0 #[b Ejemplo:] 
              p.text-white La empresa Contable SAS presenta el estado de resultados integral, con el fin de calcular el EBITDA, las depreciaciones y amortizaciones equivalen a $6.000.000.

    .row.mt-4.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 28. 
          span Cálculo del EBITDA – empresa contable SAS (2019)
        
        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th.min-padding Concepto
                th.min-padding.text-end Valor
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Utilidad bruta
                td.text-end.min-padding $110.400.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding (–) Gastos de administración
                td.text-end.min-padding $28.800.000
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding (–) Gastos de ventas
                td.text-end.min-padding $12.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding #[b (=) Utilidad operativa (EBIT)]
                td.text-end.min-padding #[b $69.600.000]
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding (+) Depreciaciones y amortizaciones
                td.text-end.min-padding Dato no disponible
              tr(style="background-color: #FFFF")
                td.text-start.min-padding #[b (=) EBITDA]
                td.text-end.min-padding #[b Pendiente de calcular]

      .col-lg-7.mt-4
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 29. 
          span Cálculo del EBITDA – empresa contable SAS (2019)
        .tabla-a.color-acento-contenido.mt-4
          table(style="width: 100%; table-layout: fixed")
            thead
              tr(style="background-color: #FD9826")
                th.min-padding(style="width: 70%") Concepto
                th.min-padding.text-end(style="width: 30%") Valor
            tbody
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Utilidad bruta
                td.text-end.min-padding $110.400.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding (–) Gastos de administración
                td.text-end.min-padding $28.800.000
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding (–) Gastos de ventas
                td.text-end.min-padding $12.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding #[b (=) Utilidad operativa (EBIT)]
                td.text-end.min-padding #[b $69.600.000]
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding (+) Depreciaciones y amortizaciones
                td.text-end.min-padding $6.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding #[b (=) EBITDA]
                td.text-end.min-padding #[b $75.600.000]



    .row.mt-4.justify-content-center.align-items-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img30.png', alt='', style="width: 505px").m-auto
      .col-lg-7
        p Se puede observar que para calcular el EBITDA se suman las depreciaciones y amortizaciones, adicionalmente, no se tiene en cuenta los gastos financieros (intereses) y las provisiones de impuestos, puesto que su objetivo es medir los beneficios frente a las actividades operacionales; sin embargo, el cálculo de este indicador no mide la liquidez de la empresa, es un indicador que muestra las ganancias sin descontar determinados gastos, lo que permite generar el flujo de caja operativo. Cabe resaltar que este indicador es útil para realizar comparaciones de empresas del mismo sector, con el fin de determinar cuál de estas genera más beneficios económicos. 

    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 3.3 Punto de equilibrio

    .row.justify-content-center.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-strech.align-items-center.bg-29
          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema3/img31.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
          .col-lg.d-flex
            .p-4.w-100.align-items-center
              p El punto de equilibrio es la igualdad que existe entre los ingresos y los gastos, en el que no existe utilidad, pero tampoco hay pérdida, en este punto se recupera la inversión realizada. Es una herramienta de análisis que sirve para la toma de decisiones en cuanto a los niveles de producción y cantidad de productos a comercializar, teniendo en cuenta las siguientes variables: costos fijos y variables, precios y volumen de ventas. 

    p.mt-4 Para aplicar adecuadamente el punto de equilibrio es importante tener claridad de los siguientes conceptos:

    .row.justify-content-center.mt-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-19.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img32.svg', style="width: 85px").m-auto

          p.text-center #[b Costos fijos]
          p.mb-0.text-center Son aquellos valores que permanecen constantes sin interesar los niveles de producción o de ventas, por ejemplo, el arriendo.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-19.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img33.svg', style="width: 85px").m-auto

          p.text-center #[b Costos variables]
          p.mb-0.text-center Son aquellos conceptos que varían de acuerdo con los niveles de producción, por ejemplo, materia prima, mano de obra, comisiones a los vendedores.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img34.png', alt='', style="width: 400px").m-auto

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img35.png', alt='', style="width: 400px").m-auto
      .col-lg-8 
        p La fórmula del punto de equilibrio es la siguiente:

        .row.align-items-center.p-4.justify-content-center.bg-23(data-aos="fade-right")
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img36.svg', alt='Fórmula de punto de equilibrio: costos fijos dividido entre Precio de venta unitario menos costo variable unitario.', style="width: 250px").m-auto
          .col-lg-6
            p Donde:
            p.bg-20.p-1 #[b PEQ:]  Punto de equilibrio
            p.bg-20.p-1 #[b CF: ] Costos fijos
            p.bg-20.p-1 #[b PVU: ] Precio de venta unitario
            p.bg-20.p-1 #[b CVU: ] Costo variable unitario

    .tarjeta.bg-14.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img13.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-white #[b Ejemplo:] 
              p.text-white La empresa Contable SAS contrata a un asesor contable para determinar el punto de equilibrio en unidades y en pesos; por lo tanto, presenta la siguiente información.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.p-4.justify-content-center.bg-23(data-aos="fade-right")
          .col-lg-4
            p CF:  $40.000.000
            p PVU: $40.000 / unidad
            p CVU: $35.000 / unidad
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img37.svg', alt='Fórmula de punto de equilibrio: costos fijos dividido entre Precio de venta unitario menos costo variable unitario.', style="width: 480px").m-auto
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img38.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: división de $40,000,000 entre $40,000 menos $35,000, es igual a 8,000.', style="width: 480px").m-auto

    .row.bg-30
      .col-12 
        .p-5
          .row.justify-content-center
            .col-lg-11
              p La empresa contable SAS debe vender 8.000 unidades para no perder, ni obtener utilidad.

              p Seguidamente, se calcula el punto de equilibrio en pesos con la siguiente fórmula:

              .row.align-items-center
                .col-lg-6.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img39.png', alt='', style="width: 507px").m-auto
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema3/img40.svg', alt='Fórmula de punto de equilibrio: costos fijos dividido entre precio de venta unitario menos costo variable unitario dividido precio de venta unitario.', style="width: 295px")

                  figure.mt-2
                    img(src='@/assets/curso/tema3/img41.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: división de $40,000,000 entre $40,000 menos $35,000 dividido $40,000, es igual a $320,000,000.', style="width: 400px")

                  p.bg-11.p-4.mt-2 El punto de equilibrio en pesos es de $320.000.000.

              .row.align-items-center.mt-4
                .col-lg-8
                  p Luego, se realiza la comprobación mediante el estado de resultados: Estado de resultados integral de la Empresa Contable SAS al 31 de diciembre de 2020 

                  .titulo-sexto.color-acento-contenido.mb-3
                    h5 Tabla 30. 
                    span Análisis de resultados operacionales – año 2020
                  
                  .tabla-a.color-acento-contenido.mt-4
                    table(style="table-layout: fixed; width: auto;")
                      thead
                        tr(style="background-color: #FD9826")
                          th.min-padding(style="width:250px") Concepto
                          th.min-padding(style="width:250px") Valor
                      tbody
                        tr(style="background-color: #F6F6F6")
                          td.min-padding.text-start Ingresos operacionales
                          td.text-end.min-padding $320.000.000
                        tr(style="background-color: #FFFFFF")
                          td.min-padding.text-start Costos variables
                          td.text-end.min-padding $280.000.000
                        tr(style="background-color: #F6F6F6")
                          td.min-padding.text-start Margen de contribución
                          td.text-end.min-padding $40.000.000
                        tr(style="background-color: #FFFFFF")
                          td.min-padding.text-start Costos fijos
                          td.text-end.min-padding $40.000.000
                        tr(style="background-color: #F6F6F6")
                          td.min-padding.text-start #[b Utilidad operacional]
                          td.text-end.min-padding #[b 0]

                .col-lg-4.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema3/img42.png', alt='', style="width: 400px").m-auto

    .row.mb-2.ms-0.mt-4 
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Fórmula para obtener una utilidad operacional

    p.mt-4 Permite calcular las unidades a vender para generar la utilidad deseada.

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img43.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.align-items-center.bg-23.justify-content-center(data-aos="fade-right")
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img44.svg', alt='Fórmula de punto de equilibrio: la suma de los costos fijos más la utilidad deseada dividido entre precio de venta unitario menos costo variable unitario.', style="width: 259px").m-auto
          .col-lg-7

            p.mt-4 Donde:
            p.bg-20.p-1 #[b PEQ:] Punto de equilibrio.
            p.bg-20.p-1 #[b CF:] Costos fijos.
            p.bg-20.p-1 #[b PVU:] Precio de venta unitario.
            p.bg-20.p-1 #[b CVU:] Costo variable unitario.
            p.bg-20.p-1 #[b UD:] Utilidad deseada.

    .tarjeta.bg-14.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img13.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-white #[b Ejemplo:] 
              p.text-white A partir de la información del ejemplo anterior se desea obtener una utilidad de $10.000.000 al finalizar el período.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img45.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: suma de $40,000,000 más $10,000,000 dividido entre $40,000 menos $35,000, es igual a 10,000.', style="width: 505px").m-auto
      .col-lg-7
        p Para obtener una utilidad de $10.000.000, la empresa debe vender 10.000 unidades. Cálculo del punto de equilibrio en pesos:

        figure
          img(src='@/assets/curso/tema3/img46.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: suma de $40,000,000 más $10,000,000 dividido entre $40,000 menos $35,000 dividido por $40,000, es igual a $400,000,000.', style="width: 400px")

        p.bg-11.p-4.mt-2 Para generar una utilidad de $10.000.000, al finalizar el período debe obtener ingresos por ventas de $400.000.000.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img47.png', alt='', style="width: 505px").m-auto
      .col-lg-7
        p Luego, se realiza la comprobación mediante el estado de resultados:

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 31. 
          span Estado de resultados integral de la Empresa Contable SAS al 31 de diciembre de 2020

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th.min-padding Concepto
                th.min-padding Valor
            tbody
              tr
                td.text-start.min-padding Ingresos operacionales
                td.text-end.min-padding $400.000.000
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Costos variables
                td.text-end.min-padding $350.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding Margen de contribución
                td.text-end.min-padding $50.000.000
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Costos fijos
                td.text-end.min-padding $40.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding Utilidad operacional
                td.text-end.min-padding $10.000.000

    p.mt-4 Permite calcular las unidades a vender para generar la utilidad deseada.

    .row.mt-4.align-items-center
      .col-lg-8
        .row.align-items-center.bg-23.justify-content-center(data-aos="fade-right")
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img48.svg', alt='Fórmula de punto de equilibrio: la suma de los costos fijos más la utilidad deseada dividida entre 1 menos la tasa de impuestos, dividido por el precio de venta unitario menos costo variable unitario.', style="width: 259px").m-auto
          .col-lg-7

            p.mt-4 Donde:
            p.bg-20.p-1 #[b PEQ:] punto de equilibrio.
            p.bg-20.p-1 #[b CF:] costos fijos.
            p.bg-20.p-1 #[b PVU:] precio de venta unitario.
            p.bg-20.p-1 #[b CVU:] costo variable unitario.
            p.bg-20.p-1 #[b UD:] utilidad deseada.
            p.bg-20.p-1 #[b t:] tasa de impuestos.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img49.png', alt='', style="width: 400px").m-auto

    .tarjeta.bg-14.p-4.mt-4
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/tema1/img13.svg", style="width: 72px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.text-white #[b Ejemplo:] 
              p.text-white Conforme a la información del ejemplo anterior se desarrolla el ejercicio. La tasa de impuesto es del 34 %. 


    .row.mt-4.align-items-center.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img50.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: suma entre $40,000,000 más $10,000,000 dividido por 1 menos 0,34, dividido entre $40,000 menos $35,000, es igual a 11,030.30.', style="width: 505px").m-auto
      .col-lg-7
        p Para obtener una utilidad después de impuesto, la empresa debe vender 111.030,30 unidades.

        p Cálculo del punto de equilibrio en pesos:

        figure
          img(src='@/assets/curso/tema3/img51.svg', alt='Sustitución numérica en la fórmula anterior para el punto de equilibrio del ejercicio: suma entre $40,000,000 más $10,000,000 dividido por 1 menos 0,34, dividido entre $40,000 menos $35,000 dividido $40,000 es igual a $441,212,120.', style="width: 400px")

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-5.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img52.png', alt='', style="width: 505px").m-auto
      .col-lg-7
        p Luego, se realiza la comprobación mediante el estado de resultados:

        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 32. 
          span Estado de resultados integral de la Empresa Contable SAS al 31 de diciembre de 2020

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th.min-padding Concepto
                th.min-padding Valor
            tbody
              tr
                td.text-start.min-padding Ingresos operacionales
                td.text-end.min-padding $441.212.120
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Costos variables
                td.text-end.min-padding $386.060.605
              tr(style="background-color: #FFFF")
                td.text-start.min-padding Margen de contribución
                td.text-end.min-padding $55.151.515
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Costos fijos
                td.text-end.min-padding $40.000.000
              tr(style="background-color: #FFFF")
                td.text-start.min-padding Utilidad operacional
                td.text-end.min-padding $15.151.515
              tr(style="background-color: #F6F6F6")
                td.text-start.min-padding Provisión para impuestos
                td.text-end.min-padding $5.151.515
              tr(style="background-color: #FFFF")
                td.text-start.min-padding Utilidad neta
                td.text-end.min-padding $10.000.000

        p.mt-4 Se puede observar en la comprobación que se genera una utilidad de $10.000.000 después de impuestos.


    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-right") 3.4 Generación de informes

    p Para la generación de informes financieros es importante tener en cuenta los estándares internacionales y la normatividad vigente, ya que la presentación y revelación de estos debe cumplir los lineamientos que allí se establecen.

    .row.mt-4.align-items-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img53.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.align-items-center.bg-13.justify-content-center.p-2
          .col-lg-12
            p.mt-4 Cabe resaltar que el analista financiero debe tener pleno conocimiento de la empresa, del entorno en el cual se desenvuelve, de la planeación estratégica y de los objetivos que persigue a corto, mediano y largo plazo. Asimismo, tendrá el conocimiento para la presentación del compendio de los estados financieros de propósito general que se relacionan en la Norma Internacional de Contabilidad (NIC) 1, los cuales se relacionan a continuación:

            ul.lista-ul--color.p-3(data-aos="fade-right")
              li.d-flex.bg-20.p-2
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Estado de situación financiera.

              li.d-flex.bg-20.p-2
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Estado de resultados integral.

              li.d-flex.bg-20.p-2
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Estado de cambio en el patrimonio.

              li.d-flex.bg-20.p-2
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Estado de flujos de efectivo.

              li.d-flex.bg-20.p-2
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Notas a los estados financieros. (Varón, 2015, p. 45)


    .row.mt-4.align-items-center
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema3/img54.svg", alt="", style="width: 85px").m-auto
      .col-lg-11
        p En el componente formativo denominado “Estados financieros” se encuentra de forma detallada el procedimiento de elaboración de cada uno de estos, en el que se da importancia a la aplicación de la Norma Internacional y a las cualidades fundamentales y de mejora. Los estados financieros se elaboran por lo menos una vez al año, teniendo en cuenta el período contable, estos deben ser claros, comprensibles y fiables, que reflejen la situación económica y financiera de la entidad.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/img55.png', alt='', style="width: 400px").m-auto

      .col-lg-8
        p.bg-11.p-5.mt-2(data-aos="fade-right") Para complementar los informes financieros es importante aplicar las diferentes técnicas e indicadores de análisis financiero, en las que se obtienen datos cuantitativos y cualitativos que permiten tomar decisiones de inversión, rentabilidad y endeudamiento. Es indispensable que se realice la interpretación de los resultados obtenidos, teniendo en cuenta que los valores por sí solos no son comprensibles para los diferentes usuarios de la información financiera; por lo tanto, se realiza el informe cualitativo, teniendo en cuenta los datos generados en el análisis horizontal y vertical, además, de los indicadores de liquidez, rentabilidad, actividad y endeudamiento.

        .row.mt-4.justify-content-center
          .col-lg-4.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema3/img56.png', alt='', style="width: 295px").m-auto
          .col-lg-8
            p Finalmente, estas técnicas deben ser acompañadas del cálculo del punto de equilibrio, el EBITDA y el EVA, cuyo objetivo es analizar el desempeño de la organización y de esta manera, diseñar e implementar estrategias que conduzcan a la mejora continua de la empresa.

    p.mt-4 Las características que debe reflejar la información financiera son las siguientes:

    .row.align-items-center
      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img57.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Confiabilidad.]

      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img58.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Relevancia o materialidad relativa.]


      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img59.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Utilidad.]

      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img60.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Objetividad.]

    .row.align-items-center.mt-2
      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img61.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Oportunidad.]

      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img62.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Verificabilidad.]


      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img63.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Comparabilidad.]

      .col-lg-3
        .row.p-2.align-items-center.bg-13.me-lg-2
          .col-lg-4.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img64.svg", alt="", style="width: 63px").m-auto
          .col-lg-8
            p.mt-2.text-small #[b Comprensibilidad.]

</template>

<script>
export default {
  name: 'Tema3',
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
