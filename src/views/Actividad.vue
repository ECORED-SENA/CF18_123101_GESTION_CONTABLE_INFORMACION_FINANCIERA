<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del análisis financiero en la empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interpretar los resultados de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conocer la situación económica mediante los estados financieros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular únicamente el EBITDA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar la tasa impositiva aplicable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué representa el análisis vertical en los estados financieros?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La proporción que representa cada cuenta respecto a un total.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La comparación entre dos periodos consecutivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La rotación de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad de pago de deudas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál de los siguientes es un indicador de liquidez?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rentabilidad sobre patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Razón corriente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Valor económico agregado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'EBITDA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué mide la prueba ácida en una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad de pago sin recurrir a los inventarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La utilidad operativa neta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El margen de contribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El análisis horizontal permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comparar la evolución de las cuentas entre periodos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evaluar el cumplimiento del presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar la participación porcentual de cada cuenta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular el CPPC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué mide el EBITDA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La utilidad bruta después de impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad de generar beneficios antes de intereses e impuestos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La rentabilidad sobre el capital invertido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eficiencia del equipo de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál de los siguientes no es un indicador financiero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rotación de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rentabilidad sobre ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Razón de endeudamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa un EVA negativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una rentabilidad inferior al costo de capital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un alto endeudamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un crecimiento sostenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una utilidad neta positiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la fórmula del punto de equilibrio en unidades?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Costo fijo / (Precio de venta unitario – Costo variable unitario).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio de venta – Costo variable unitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo fijo / Costo variable total.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ventas netas / Costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué indicador mide la rapidez en convertir cuentas por cobrar en efectivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rotación de cartera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Razón corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'EBITDA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prueba ácida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El análisis vertical se aplica comparando estados financieros de dos periodos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La utilidad operativa se calcula antes de aplicar los impuestos y gastos financieros.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Un indicador de gestión puede ser la eficiencia operativa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El capital de trabajo neto se obtiene restando los activos no corrientes a los pasivos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El EVA positivo indica que la empresa está generando valor para sus propietarios.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
