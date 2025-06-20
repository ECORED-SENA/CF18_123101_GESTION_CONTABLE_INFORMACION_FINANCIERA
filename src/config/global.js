export default {
  global: {
    Name: 'Técnicas de análisis e indicadores financieros',
    Description:
      'Es importante realizar el análisis de los estados financieros, mediante la aplicación de técnicas como el análisis vertical y horizontal, indicadores financieros y de gestión; aunado a ello, el cálculo de punto de equilibrio, el EBITDA y el Valor Económico Agregado (EVA), además, de otros elementos que contribuyen a la generación e implementación de estrategias con valor agregado para la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de análisis financiero',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Metodología de cálculo de las técnicas de análisis horizontal y vertical',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores financieros y de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Indicadores de gestión',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Indicadores financieros',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Otras técnicas de análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Valor Económico Agregado (EVA)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Beneficios antes de intereses, impuestos, depreciaciones y amortizaciones (EBITDA)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Punto de equilibrio',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Generación de informes',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF18_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis financiero',
      referencia:
        'Presidencia de la República. (2015). Decreto 2420 de 2015: Por el cual se expide el DUR de las Normas de Contabilidad e Información Financiera. Diario Oficial No. 49.674.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      tema:
        'Metodología de cálculo de las técnicas de análisis horizontal y vertical',
      referencia:
        'Vlex. (s.f.). Análisis vertical y horizontal en estados financieros.',
      tipo: 'Artículo informativo',
      link:
        'https://vlex.com.co/vid/vertical-horizontal-reexpresion-financieros-57840481',
    },
    {
      tema: 'Indicadores financieros y de gestión',
      referencia:
        'Universidad Autónoma de Occidente (UAO). (s.f.). ¿Qué son los estados financieros y para qué sirven?',
      tipo: 'Artículo educativo',
      link: 'https://virtual.uao.edu.co/blog/que-son-los-estados-financieros',
    },
  ],
  glosario: [
    {
      termino: 'Análisis horizontal',
      significado:
        'técnica de análisis que permite determinar la tendencia de cada una de las cuentas o grupo de cuentas de los estados financieros básicos en dos o más períodos contables, esta tendencia se puede expresar en pesos o en porcentaje.',
    },
    {
      termino: 'Análisis vertical',
      significado:
        'herramienta de análisis financiero que determina la participación de una cuenta en relación con un grupo o subgrupo de cuentas de los estados financieros.',
    },
    {
      termino: 'Apalancamiento financiero',
      significado:
        'grado de endeudamiento de la organización, mide el nivel de utilización que hace la empresa de las diferentes fuentes de financiación externas.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'se refiere a las diferentes cuentas que conforman los rubros que se clasifican como activo corriente.',
    },
    {
      termino: 'Capital de trabajo neto',
      significado:
        'se define como la diferencia entre los activos y los pasivos corrientes, muestra la disponibilidad de la organización para cumplir con sus compromisos periódicos.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'índice financiero que muestra el derecho que tienen los acreedores sobre los activos de la empresa, se conoce también como razón de apalancamiento.',
    },
    {
      termino: 'Liquidez',
      significado:
        'disponibilidad de activos corrientes de una empresa para responder por sus compromisos a corto plazo.',
    },
    {
      termino: 'Razones financieras',
      significado:
        'índices usados en el análisis financiero que permiten relacionar cuentas de un estado financiero con otras cuentas del mismo estado o de otro diferente.',
    },
    {
      termino: 'Rentabilidad',
      significado: 'capacidad para generar utilidades con recursos propios.',
    },
    {
      termino: 'Rotación',
      significado:
        'índices que miden la eficiencia de la administración de los recursos de una empresa por sus ejecutivos, se conoce también como razón de actividad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bonsón, E., Cortijo, V. y Flores, F. (2009). <em>Análisis de estados financieros</em>. <em>Fundamentos teóricos y casos prácticos. </em>Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública -CTCP- (2020, 24 de noviembre). Norma Internacional de Contabilidad 1. Presentación de estados financieros.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/1_NIC.pdf',
    },
    {
      referencia:
        'Coral, D., L., Gudiño, E. (2014). Contabilidad universitaria. (7a. ed.) McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia: 'Gerencie.com (s.f.). <em>Capital de trabajo</em>.',
      link: 'https://www.gerencie.com/capital-de-trabajo.html',
    },
    {
      referencia:
        'Martínez, H. (s.f.). <em>Indicadores financieros y su interpretación.</em>',
      link:
        'https://pdf4pro.com/view/iv-indicadores-financieros-y-su-6a73b.html',
    },
    {
      referencia: 'Mejía, A. (s.f.). <em>Indicadores de gestión.</em>',
      link: '',
    },
    {
      referencia:
        'Ortiz, A., H. (2011). <em>Análisis financiero aplicado y principios de administración financiera</em> (14a ed.). Universidad Externado de Colombia. ',
      link: '',
    },
    {
      referencia:
        'Roncancio, G. (2019).  <em>Indicadores de gestión (KPI s): tipos y ejemplos. </em> Pensemos.',
      link:
        'https://gestion.pensemos.com/indicadores-de-gestion-tipos-y-ejemplos',
    },
    {
      referencia:
        'Sinisterra V., Polanco L. y Henao H. (2011). <em>Contabilidad: sistema de información para las organizaciones.</em> McGraw Hill.',
      link:
        'http://fullseguridad.net/wp-content/uploads/2016/10/Contabilidad-6ta-Edici%C3%B3n-Gonzalo-Sinisterra.pdf',
    },
    {
      referencia:
        'Super Contable Sage. (s.f.). <em>Glosario de términos contables. </em>',
      link: '',
    },
    {
      referencia:
        'Varón, G., L. (2015). <em>Presentación de estados financieros.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
