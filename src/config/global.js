export default {
  global: {
    Name: 'Empresa agrícola, estructura y diagnóstico',
    Description:
      'Este componente formativo brinda herramientas para obtener una visión integral de una empresa agrícola, centrándose en su organización interna (estructura) y en la evaluación de su situación actual (diagnóstico). Esto facilita la identificación de estrategias y mercados, así como la detección de fortalezas, debilidades, oportunidades y amenazas, con el propósito de tomar decisiones que optimicen su eficiencia y garanticen su sostenibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Empresa agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de empresas agrícolas según su producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Requisitos para el funcionamiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de estructura organizacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Importancia de la definición de cargos en la gestión empresarial agrícola',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procesos en la empresa agrícola',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategia organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Importancia en una empresa agrícola',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Componentes clave de una estrategia organizacional agrícola',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de mercados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Variables del mercado',
            hash: 't_4_2',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas de análisis organizacional',
        desarrolloContenidos: true,
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
        download: 'downloads/dist.pdf',
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
      tema: 'Empresa agrícola',
      referencia:
        'Thompson, I. (2006, enero). Definición de empresa. Promonegocios.',
      tipo: 'Página web',
      link:
        'https://www.promonegocios.net/mercadotecnia/empresa-definicion-concepto.html',
    },
    {
      tema: 'Tipos de empresas agrícolas según su producción',
      referencia:
        'Sánchez Galán, J., & Sevilla Arias, A. (s. f.). Tipos de empresas. Economipedia.',
      tipo: 'Página web',
      link: 'https://economipedia.com/definiciones/tipos-de-empresas.html',
    },
    {
      tema: 'Estructura organizacional',
      referencia:
        'Universidad Internacional de La Rioja – UNIR Revista. (2021, 19 de julio). ¿Qué es la estructura empresarial y qué tipos existen? UNIR Revista.',
      tipo: 'Revista',
      link: 'https://www.unir.net/revista/empresa/estructura-empresarial/',
    },
    {
      tema: 'Estrategia organizacional',
      referencia:
        'Introducción a los Agronegocios: Planificación. (2019). Audiovisuales UNED.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3OyuQnmlmjE',
    },
  ],
  glosario: [
    {
      termino: 'Comercialización agrícola',
      significado: 'Actividades para vender y distribuir productos agrícolas.',
    },
    {
      termino: 'Control',
      significado:
        'Supervisión de actividades para asegurar que se cumplan los objetivos.',
    },
    {
      termino: 'Costos de producción',
      significado:
        'Gastos asociados a la siembra, manejo, cosecha y venta de productos.',
    },
    {
      termino: 'Insumos agrícolas',
      significado:
        'Materiales necesarios para producir: semillas, fertilizantes, etc.',
    },
    {
      termino: 'Organización',
      significado:
        'Acción de asignar recursos, roles y responsabilidades de forma ordenada.',
    },
    {
      termino: 'Planificación',
      significado:
        'Definición anticipada de metas, recursos y actividades a realizar.',
    },
    {
      termino: 'Producción agrícola',
      significado:
        'Proceso de cultivo de plantas o cría de animales para comercialización.',
    },
    {
      termino: 'Recursos financieros',
      significado: 'Fondos y capital necesarios para operar la empresa.',
    },
    {
      termino: 'Recursos humanos',
      significado:
        'Conjunto de personas que trabajan en la empresa y su gestión.',
    },
    {
      termino: 'Riesgos laborales',
      significado:
        'Factores que pueden afectar la salud o seguridad de los trabajadores.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Producción que cuida los recursos naturales y es viable a largo plazo.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'Recursos líquidos disponibles para operar en el corto plazo.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'Conjunto de actividades que agregan valor desde la producción hasta la venta.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de la empresa para destacarse en el mercado frente a sus competidores.',
    },
    {
      termino: 'Inventario',
      significado:
        'Registro y control de los insumos, productos y recursos almacenados.',
    },
    {
      termino: 'Productividad',
      significado:
        'Relación entre los recursos utilizados y la cantidad producida.',
    },
    {
      termino: 'Tecnología agrícola',
      significado:
        'Uso de herramientas y conocimientos técnicos para mejorar la producción.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear el origen y recorrido de un producto desde el campo hasta el consumidor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Escobar Guevara, J. (2025). Estrategia organizacional: tipos, importancia, herramientas, técnica. En Colombia.',
      link:
        'https://encolombia.com/economia/empresas/r-humanos/estrategia-organizacional/',
    },
    {
      referencia:
        'Grupo Soluciones Horizonte (GSH). (25 de octubre de 2022). Diagnóstico organizacional: métodos y técnicas.',
      link:
        'https://www.gsh.com.co/blog/diagnostico-organizacional-metodos-y-tecnicas/',
    },
    {
      referencia:
        'LAB ES. (2024). Diagnóstico organizacional: evaluación y mejora de empresas.',
      link:
        'https://labes-unizar.es/diagnostico-organizacional-evaluacion-y-mejora-de-empresas/?expand_article=1',
    },
    {
      referencia:
        'Mancilla, R. (2018). Administración de empresas agrícolas: Recursos y gestión financiera. Editorial Agropecuaria.',
      link: '',
    },
    {
      referencia:
        'Penn State Extension. (s.f.). Inicio o Diversificación de un Negocio Agrícola.',
      link:
        'https://extension.psu.edu/inicio-o-diversificacion-de-un-negocio-agricola',
    },
    {
      referencia:
        'MyPymes. (2025). Definición Tamaño Empresarial Micro, Pequeña, Mediana o Grande.',
      link:
        'https://www.mipymes.gov.co/temas-de-interes/definicion-tamano-empresarial-micro-pequena-median',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
