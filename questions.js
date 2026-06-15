const questions = [
    {
        question: "¿Qué es GitHub Copilot?",
        options: [
            "Un editor de código de texto plano.",
            "Un asistente de programación basado en inteligencia artificial.",
            "Una herramienta de control de versiones.",
            "Un lenguaje de programación."
        ],
        answer: 1, // Index of correct option
        explanation: "GitHub Copilot es un asistente de IA desarrollado por GitHub y OpenAI que sugiere código y funciones completas mientras escribes."
    },
    {
        question: "¿Qué atajo de teclado se utiliza comúnmente para aceptar una sugerencia de GitHub Copilot?",
        options: [
            "Ctrl + Espacio",
            "Enter",
            "Tab",
            "Shift + Alt + F"
        ],
        answer: 2,
        explanation: "El atajo predeterminado para aceptar una sugerencia en línea de GitHub Copilot en la mayoría de los editores es la tecla Tab."
    },
    {
        question: "¿Cuál de los siguientes comentarios es el MEJOR para ayudar a Copilot a generar una función útil?",
        options: [
            "// haz una función",
            "// función para calcular",
            "// Función que toma una lista de números, los suma y devuelve el promedio",
            "// código aquí"
        ],
        answer: 2,
        explanation: "Copilot funciona mejor con contexto detallado y específico. Describir la entrada, el propósito y la salida de la función proporciona el mejor resultado."
    },
    {
        question: "En una gran empresa de medios, el Copilot Agent Mode se está probando para manejar las actualizaciones de todo el repositorio durante la limpieza trimestral de la deuda tecnológica. Los desarrolladores quieren que funcione sin una supervisión excesiva y realicen mejoras continuas si falla la primera ejecución. ¿Qué características del Agent Mode son las más compatibles con este escenario?",
        options: [
            "Autonomía de ejecución de herramientas",
            "Razonamiento de varios pasos",
            "Autocuración",
            "Aprobación manual de pasos"
        ],
        answer: [0,1,2],
        explanation: "Agent Mode ejecuta herramientas por sí solo, razona en varios pasos y puede replanificar y reintentar cuando detecta fallas."
    },
    {
        question: "Durante una sesión de incorporación a GitHub Copilot, un desarrollador junior pregunta cómo la IA subyacente del Copilot comprende y procesa el lenguaje humano simple. Usted explica al desarrollador que cuando un usuario teclea una frase en lenguaje natural como \"A car drives on the road,\" se le divide en pedacitos antes de interpretar y el modelo lo completa. ¿Cuál de lo siguiente mejor describe cómo un modelo de lenguaje natural procesa la entrada?",
        options: [
            "Predice la siguiente palabra mediante las ventanas del contexto",
            "Asigna weights mediante vectores neuronales",
            "Tokeniza la entrada en unidades discretas",
            "Codifica partes de la oración para reglas gramaticales"
        ],
        answer: 2,
        explanation: "Los LLM comienzan tokenizando la entrada en unidades discretas para convertirla en representaciones numéricas."
    },
    {
        question: "Su líder de operaciones de TI quiere automatizar la gestión de asientos para las licencias de Copilot en todos los departamentos y pregunta si esto se puede hacer sin usar el GitHub UI. ¿Se puede administrar Copilot Business and Enterprise a través de las API REST de GitHub?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "GitHub ofrece de manera oficial puntos de conexión en su API REST (Copilot User Management) para asignar, revocar y listar licencias en planes Business y Enterprise."
    },
    {
        question: "Un ingeniero de DevOps necesita implementar una canalización de CI/CD y quiere usar GitHub Copilot para escribir flujos de trabajo repetitivos rápidamente en lugar de copiar plantillas de la documentación. ¿Qué capacidad de Copilot se adapta mejor a este caso de uso?",
        options: [
            "GitHub Actions Plugin",
            "Snippet Importer",
            "Boilerplate Generation",
            "Copilot Chat con GPT-4.5"
        ],
        answer: 2,
        explanation: "Copilot sobresale en generar plantillas de inicio y código repetitivo."
    },
    {
        question: "Un gerente de ingeniería quiere un plan de Copilot que admita resúmenes de relaciones públicas y sugerencias de código, pero también debe asegurarse de que los desarrolladores eviten los riesgos legales de la reutilización de código público. ¿Qué combinación de configuración y plan es la más adecuada?",
        options: [
            "Copilot Pro con revisión manual de PR",
            "Copilot Business con el filtrado de código público habilitado",
            "Copilot Pro con privilegios de PR ampliados",
            "Copilot Free con marcas de política"
        ],
        answer: 1,
        explanation: "Business admite filtrado de código público y funciones de PR."
    },
    {
        question: "Su organización admite una fuerza laboral de desarrolladores híbrida que utiliza varias herramientas. El líder de desarrollo quiere asegurarse de que Copilot funcione sin problemas en sus IDE preferidos. ¿Cuál de los siguientes entornos de desarrollo admite la integración de GitHub Copilot?",
        options: [
            "Visual Studio Code",
            "Xcode (vista previa)",
            "JetBrains IDEs",
            "Eclipse"
        ],
        answer: [0,1,2,3],
        explanation: "GitHub Copilot cuenta con extensiones y soporte oficial para todos los entornos listados: VS Code, Xcode (en vista previa), IDEs de JetBrains y Eclipse."
    },
    {
        question: "Tiene la tarea de modernizar una plataforma de procesamiento de préstamos heredada en Contoso Bank. El equipo de desarrollo dedica mucho tiempo a actualizar el código obsoleto y a realizar refactorizaciones de la interfaz de usuario. Necesitan una herramienta que pueda manejar cambios de código repetitivos y a gran escala en múltiples módulos de forma autónoma. ¿Qué característica del GitHub Copilot Agent Mode admite mejor este escenario?",
        options: [
            "Copilot Ask",
            "Copilot Edits",
            "Copilot Agent Mode",
            "GitHub Actions"
        ],
        answer: 2,
        explanation: "Agent Mode puede planificar, editar y probar cambios de forma autónoma a gran escala."
    },
    {
        question: "Está trabajando en VS Code con varios archivos abiertos. Observa que Copilot proporciona una sugerencia muy precisa para corregir un error que estaba solucionando en todas las pestañas. ¿Cómo generó Copilot esta sugerencia consciente del contexto?",
        options: [
            "Basado en el orden de tabulación",
            "Desde el código almacenado en GitHub",
            "Mediante el uso de pestañas abiertas como contexto de prompt",
            "Consultó un modelo externo"
        ],
        answer: 2,
        explanation: "Copilot usa el contenido de las pestañas abiertas para crear contexto."
    },
    {
        question: "Durante una iniciativa de migración de código en Northwind Health Systems, el Copilot Agent Mode identifica un error en la nueva canalización de transformación de datos. Vuelve a intentar automáticamente la operación mediante una lógica de reserva que dedujo de los patrones de código existentes. ¿Es este un ejemplo de autocuración?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "La autocuración implica detectar fallas y aplicar estrategias automáticas de reintento."
    },
    {
        question: "Un pasante que trabaja desde una ubicación remota con conectividad a Internet restringida, asume que Copilot aún puede proporcionar finalizaciones localmente. Indique si la siguiente afirmación es verdadera o falsa. GitHub Copilot requiere una conexión a Internet activa para funcionar.",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Las sugerencias se generan en modelos alojados y requieren acceso a Internet."
    },
    {
        question: "Su equipo está comparando Copilot Ask y Copilot Chat para determinar cuál es mejor para la documentación interna y los flujos de trabajo de revisión de código. ¿Cuál es la diferencia clave entre Copilot Ask y Copilot Chat?",
        options: [
            "Ask es un asistente para navegar por internet; Chat está integrado localmente.",
            "Ask está restringido a consultas informativas/conceptuales fuera del espacio de trabajo; Chat (a través de Edit/Agent) permite analizar y modificar el código del repositorio.",
            "Ask procesa comandos en base de datos; Chat procesa llamadas a funciones nativas.",
            "Ask es exclusivo para administradores de TI; Chat es para desarrolladores."
        ],
        answer: 1,
        explanation: "En los entornos de Copilot, 'Ask' se utiliza para hacer consultas conceptuales o explicativas sin alterar el proyecto, mientras que 'Chat' (junto a los modos Edit y Agent) interactúa directamente modificando el repositorio."
    },
    {
        question: "Un desarrollador principal está guiando a su equipo sobre cómo usar Copilot de manera más efectiva mientras equilibra la calidad, el costo y la seguridad. Se espera que el equipo aplique las mejores prácticas de Copilot. ¿Cuáles de las siguientes son las mejores prácticas recomendadas al usar Copilot?",
        options: [
            "Escriba prompts claros y concisos",
            "Revise y edite todas las sugerencias de código",
            "Utilice siempre GPT-4.5 para obtener la máxima precisión",
            "Limite el uso del chat a menos que sea necesario"
        ],
        answer: [0,1],
        explanation: "La claridad en los prompts y la revisión humana son claves; use modelos avanzados solo cuando sea necesario."
    },
    {
        question: "Un desarrollador de su equipo de DevOps está configurando la infraestructura de Docker y Kubernetes, se pregunta si Copilot puede acelerar la creación de archivos repetitivos como Dockerfile y deployment.yaml. ¿Qué función de Copilot es más relevante para esta tarea?",
        options: [
            "Edits",
            "Generación de Boilerplate",
            "Variables de Chat",
            "Modo Refactor"
        ],
        answer: 1,
        explanation: "Copilot sobresale en generar plantillas repetitivas para tareas DevOps."
    },
    {
        question: "Después de cambiar a GPT-4.5 en la configuración del IDE, el equipo de desarrollo de Contoso notó un fuerte aumento en su uso mensual. Se le pide que determine qué desencadena un mayor número de solicitudes de primas. ¿Qué es lo que más contribuye al uso de solicitudes premium en Copilot?",
        options: [
            "Recuento de pestañas abiertas",
            "Actualizaciones del IDE",
            "Selección avanzada de modelos",
            "Tamaño del espacio de trabajo"
        ],
        answer: 2,
        explanation: "Los modelos avanzados como GPT-4.5 disparan el uso de solicitudes premium."
    },
    {
        question: "Un equipo de software está evaluando las características avanzadas de GitHub Copilot Chat y Agent Mode. Quieren comprender qué funcionalidades se extienden más allá de las interacciones tradicionales de prompt-respuestas. ¿Cuáles de las siguientes características son exclusivas del Agent mode del Copilot?",
        options: [
            "Planificación de tareas de varios pasos",
            "Resolución de prompt conversacional",
            "Selección y ejecución de herramientas",
            "Access to IDE chat window"
        ],
        answer: [0,2],
        explanation: "Agent Mode permite planificación multi-paso y ejecución de herramientas; Chat se centra en respuestas a prompts."
    },
    {
        question: "Un agente de Copilot está revisando su base de código y comienza a realizar operaciones utilizando las API de WebSocket, lo que permite una integración perfecta con las herramientas de backend. Esto mejora su latencia y capacidad de respuesta. ¿Qué característica de MCP se está demostrando en este caso?",
        options: [
            "Comunicación y transporte estandarizado",
            "Integración segura",
            "Integración multimodal",
            "Traducción de comandos en tiempo real"
        ],
        answer: 0,
        explanation: "El protocolo MCP define transportes estandarizados y ligeros (como WebSockets, SSE y STDIO) para conectar de forma rápida y agnóstica los clientes de IA con los servidores de backend."
    },
    {
        question: "Una estudiante universitaria se suscribe a GitHub y activa Copilot para experimentar con proyectos JavaScript y diseño frontend. Nota un soporte limitado en comparación con las experiencias profesionales de IDE. ¿Qué plan es más probable que está usando la estudiante?",
        options: [
            "Copilot Enterprise",
            "Copilot Pro",
            "Copilot Free",
            "Copilot Business"
        ],
        answer: 2,
        explanation: "Copilot Free ofrece acceso básico para usuarios individuales."
    },
    {
        question: "Durante un ciclo de control de calidad, un usuario observa cambios inesperados introducidos por Copilot Agent Mode. Solicitan al sistema que revierta sus últimas tres acciones. ¿El Agent Mode permite a los usuarios interrumpir o deshacer acciones autónomas?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Agent Mode admite interrupción, revisión y deshacer durante operaciones autónomas."
    },
    {
        question: "Está configurando un agente de IA seguro para interactuar con herramientas de análisis empresarial a través de MCP. La atención se centra en garantizar el acceso a las herramientas mientras se cumplen los estándares de seguridad y escalabilidad de su organización. ¿Qué característica de MCP es más relevante en este contexto?",
        options: [
            "Linting del repositorio",
            "Integración segura y escalable",
            "Procesamiento por lotes de comandos estáticos",
            "Resumen de prompts"
        ],
        answer: 1,
        explanation: "MCP se diseñó para integraciones empresariales seguras y escalables."
    },
    {
        question: "Un ingeniero de DevOps está evaluando las restricciones de rendimiento para diferentes niveles de Copilot y está interesado en comprender los límites de velocidad del modelo. ¿Cuál de las siguientes afirmaciones es cierta sobre los límites de tarifa de Copilot Enterprise en comparación con otros planes?",
        options: [
            "Límite de solicitudes diarias más alto que Business",
            "Menor simultaneidad que Individual",
            "Se permite un aumento de las solicitudes simultáneas",
            "Mismos límites de velocidad que el nivel Free"
        ],
        answer: [0,2],
        explanation: "Enterprise tiene más solicitudes diarias y mayor simultaneidad que Business."
    },
    {
        question: "Durante las pruebas de GitHub Copilot en su organización, surgen dudas sobre el comportamiento del Agent Mode. ¿Cuál de los siguientes comportamientos describe correctamente una funcionalidad nativa del Copilot Agent Mode?",
        options: [
            "Puede pausar una actualización autónoma ante conflictos y solicitar confirmación manual del desarrollador.",
            "Requiere supervisión humana en cada línea de código escrita sin autonomía.",
            "Detecta fallas en pruebas, revierte automáticamente cambios e intenta autónomamente una nueva ruta de corrección (Autocuración).",
            "Es incapaz de abrir Pull Requests de forma autónoma al finalizar sus tareas."
        ],
        answer: [0, 2],
        explanation: "El modo Agente destaca por su ejecución autónoma, incluyendo la autocuración (reintentar soluciones tras fallar pruebas) y pausar de forma inteligente para solicitar feedback humano si encuentra conflictos."
    },
    {
        question: "Como parte de un equipo nativo de la nube, está adoptando un programador de pares de IA para acelerar los ciclos de desarrollo. Necesita una herramienta que no solo pueda sugerir código, sino también descomponer tareas complejas de lógica empresarial en subtareas ordenadas y resolverlas de forma iterativa. ¿Qué funcionalidad del GitHub Copilot Agent Mode admite este caso de uso?",
        options: [
            "Refinamiento de prompt",
            "Planificación y descomposición de tareas",
            "Depuración en tiempo real",
            "Resumen de comandos"
        ],
        answer: 1,
        explanation: "El agente desglosa tareas complejas y las ejecuta paso a paso."
    },
    {
        question: "Un administrador de GitHub desea comparar las características adicionales que proporciona el plan Enterprise con el plan Business. ¿Cuál de las siguientes características solo está disponible en el plan GitHub Copilot Enterprise?",
        options: [
            "Copilot Knowledgebase Search (Búsqueda en bases de conocimiento)",
            "IP Indemnification (Indemnización de propiedad intelectual)",
            "Copilot Chat Skills en IDE",
            "Indexación avanzada y personalización basada en repositorios de la organización"
        ],
        answer: [0, 3],
        explanation: "Copilot Enterprise se diferencia por incluir capacidades a nivel de repositorio web como la búsqueda en bases de conocimiento corporativas (Knowledgebases) y resúmenes/personalización de contexto organizacionales."
    },
    {
        question: "Su equipo está creando una aplicación de chatbot. Desea aprovechar las funcionalidades de GitHub Copilot para interactuar con varias API de diagnóstico internas en tiempo real. Su objetivo es asegurarse de que la herramienta pueda consumir resultados a través de múltiples formatos de transmisión. ¿Qué capacidad de MCP permitiría esto?",
        options: [
            "Autenticación basada en tokens",
            "Prompts contextuales",
            "Mecanismos de transporte estandarizados (como STDIO y SSE)",
            "Asignación de SDK a API"
        ],
        answer: 2,
        explanation: "El protocolo MCP define transportes estándar (como Standard Input/Output - STDIO, y Server-Sent Events - SSE) para transmitir de forma estructurada mensajes JSON-RPC entre clientes y servidores de IA."
    },
    {
        question: "Es un profesor universitario que enseña Python. Su institución educativa está solicitando acceso a GitHub Copilot. ¿Copilot Pro es gratuito para profesores y estudiantes del programa educativo?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Profesores, estudiantes y mantenedores open source pueden acceder a Copilot Pro vía GitHub Education."
    },
    {
        question: "Ha asignado un problema de corrección de errores de backend en GitHub y, sin indicaciones manuales, el agente de Copilot lo recoge, realiza cambios en el código, valida la corrección y genera una solicitud de incorporación de cambios. ¿Está esto dentro de las capacidades actuales del GitHub Copilot Agent Mode (versión preliminar pública)?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "En vista previa, el Agent puede tomar issues, modificar código y abrir PR."
    },
    {
        question: "Un desarrollador utiliza con frecuencia las funciones de chat y finalizaciones en línea de Copilot en los IDE de JetBrains para optimizar su flujo de trabajo de desarrollo full-stack. Necesita un nivel de suscripción que admita un acceso sin problemas en varios entornos compatibles, incluidos IntelliJ, WebStorm y VS Code. ¿Qué plan de GitHub Copilot es el más adecuado para la compatibilidad con IDE con todas las funciones?",
        options: [
            "Copilot Free",
            "Copilot Pro",
            "Copilot Business",
            "Copilot Enterprise"
        ],
        answer: 1,
        explanation: "Pro admite integraciones completas en IDEs compatibles."
    },
    {
        question: "Un líder del equipo de producto nota que los desarrolladores de GPT-4.5 lo están usando ampliamente para completar simplemente. Se le pregunta si GPT-4.5 debe usarse en todas las interacciones con los desarrolladores, independientemente de su complejidad. ¿Es una buena práctica usar GPT-4.5 para cada prompt?",
        options: [
            "True",
            "False"
        ],
        answer: 1,
        explanation: "GPT-4.5 es más costoso; debe usarse cuando sea necesario."
    },
    {
        question: "Está asesorando a un colaborador de código abierto que trabaja con varias organizaciones. Quieren usar GitHub Copilot sin pagar una suscripción. ¿Qué grupo califica para el acceso gratuito a GitHub Copilot Pro?",
        options: [
            "Fundadores de startups",
            "GitHub Campus Experts",
            "GitHub Stars",
            "Mantenedores de código abierto verificados"
        ],
        answer: 3,
        explanation: "Los mantenedores verificados de proyectos populares califican para Pro gratuito."
    },
    {
        question: "El equipo de ingeniería de productos utiliza el modo de agente de Copilot para realizar actualizaciones coordinadas en varios microservicios. Observa que el agente realiza un seguimiento de los pasos lógicos y conserva la comprensión a lo largo del flujo de trabajo. ¿Qué características del Agent mode contribuyen a esta capacidad?",
        options: [
            "Razonamiento de varios pasos",
            "Persistencia del contexto",
            "Clasificación de problemas de GitHub",
            "Generación de comentarios en línea"
        ],
        answer: [0,1],
        explanation: "El Agent mantiene contexto entre pasos y razona sobre secuencias de trabajo."
    },
    {
        question: "Su equipo de operaciones de seguridad está explorando MCP como un mecanismo para conectar asistentes de IA con fuentes seguras de inteligencia de amenazas en tiempo real. El objetivo es reducir los tiempos de respuesta aprovechando las interacciones de herramientas estandarizadas e impulsadas por IA. ¿Cuál es el principal beneficio de MCP en este escenario?",
        options: [
            "Autorización de webhook",
            "Comunicación estandarizada con herramientas",
            "Cifrado de registro",
            "Almacenamiento de tokens de OAuth"
        ],
        answer: 1,
        explanation: "MCP proporciona interacción consistente de herramientas en todos los entornos."
    },
    {
        question: "Está dirigiendo una reunión de toma de decisiones técnicas con el liderazgo de TI, comparando los planes de licencias de GitHub Copilot. La organización busca un control centralizado, métricas de uso y capacidad para hacer cumplir las políticas de codificación en todos los departamentos. ¿Cuál de los planes de GitHub Copilot admite características extendidas en toda la organización como facturas centralizadas y control de políticas?",
        options: [
            "Copilot Pro",
            "Copilot Business",
            "Copilot Free",
            "Copilot Enterprise"
        ],
        answer: [1,3],
        explanation: "Business y Enterprise incluyen gestión centralizada y políticas."
    },
    {
        question: "Su cliente quiere un resumen de lo que ofrece Copilot Enterprise más allá del plan Business. ¿Cuáles son los diferenciadores clave de Copilot Enterprise sobre Copilot Business?",
        options: [
            "Capacidad para ajustar un LLM",
            "Acceso a registros de auditoría",
            "Acceso a Knowledgebase",
            "Aumento de los límites de velocidad del modelo"
        ],
        answer: [0,2,3],
        explanation: "Enterprise agrega knowledgebase, ajuste de modelo y mayor concurrencia/limites."
    },
    {
        question: "Como líder técnico en Tailwind Traders, está explorando cómo GitHub Copilot se integra con API de terceros y herramientas de desarrollo internas. Desea asegurarse de que su asistente de IA se comunique de manera confiable y segura a través de diferentes servicios. ¿Cuáles de las siguientes opciones describen beneficios reales del Model Context Protocol (MCP)?",
        options: [
            "Integración segura con herramientas empresariales bajo estándares abiertos",
            "Actualizaciones manuales del modelo de solo triggers",
            "Restricción exclusiva para que los modelos no consuman datos externos",
            "Comunicación estandarizada y agnóstica entre modelos de IA y herramientas de software"
        ],
        answer: [0,3],
        explanation: "MCP actúa como un puente estandarizado y seguro que permite a los desarrolladores conectar clientes de IA con servidores de herramientas externos de forma agnóstica, facilitando la integración empresarial."
    },
    {
        question: "Su empresa prefiere administrar sus licencias de Copilot a través de la automatización y los scripts en lugar de la interfaz de usuario de GitHub. ¿Cuál de las siguientes opciones permite la gestión de licencias a través de la automatización?",
        options: [
            "GitHub REST API",
            "GitHub CLI con permisos limitados",
            "Extensiones de VS Code",
            "Azure DevOps Service Hook"
        ],
        answer: 0,
        explanation: "La REST API expone endpoints para gestión de licencias y puestos."
    },
    {
        question: "Está implementando Copilot Agent Mode en su entorno de trabajo y desea configurar servidores MCP locales para expandir las capacidades del asistente de IA. ¿Cuál es el método estándar de configuración para definir un servidor MCP?",
        options: [
            "Crear un archivo .vscode/mcp.json con el JSON de configuración en el espacio de trabajo",
            "Escribir scripts bash personalizados ejecutados en segundo plano",
            "Instalar un ejecutable binario cerrado en el sistema operativo",
            "Configurar las propiedades mediante variables de entorno del sistema"
        ],
        answer: 0,
        explanation: "Los entornos de desarrollo compatibles permiten estructurar y declarar la conexión de servidores MCP locales (comandos, argumentos y variables requeridas) a través de un archivo de configuración en formato JSON (`mcp.json`)."
    },
    {
        question: "Un desarrollador de su equipo utiliza el Copilot Agent Mode e informa de que está completando largas tareas de migración de bases de datos de varios pasos mientras realiza un seguimiento del estado de los cambios en varios archivos. ¿Qué características del Agent Mode lo hacen posible?",
        options: [
            "Instantáneas de memoria",
            "Razonamiento de varios pasos",
            "Gestión del contexto",
            "Compilación estática"
        ],
        answer: [1,2],
        explanation: "El Agent coordina pasos secuenciales y mantiene el contexto entre archivos."
    },
    {
        question: "Al revisar el extracto de facturación mensual de Copilot, observa un aumento en el uso de primas que coincide con una semana de alta actividad de relaciones públicas y refactorizaciones en bloque. Tiene la tarea de analizar qué características pueden haber activado las invocaciones de modelos avanzados (como GPT-4.5) con más frecuencia al modificar múltiples archivos. ¿Qué característica es más probable que contribuya al uso de premium alto en modificaciones de código simultáneas?",
        options: [
            "Copilot Edits (Edición simultánea de archivos)",
            "Copilot Chat conceptual estándar",
            "Sugerencias básicas en línea (Autocomplete)",
            "Filtrado de contexto estático"
        ],
        answer: 0,
        explanation: "Copilot Edits procesa ediciones simultáneas en múltiples archivos del espacio de trabajo utilizando modelos avanzados de la capa premium para mantener la consistencia del código, lo que eleva el consumo de la cuota en periodos de refactorización masiva."
    },
    {
        question: "Un equipo de desarrollo de Fabrikam está integrando un asistente de IA en su IDE interno. Quieren que este asistente refactorice el código y optimice el rendimiento sin entradas continuas del desarrollador. GitHub Copilot Agent Mode puede refactorizar de forma independiente las interfaces de usuario y la lógica en su base de código.",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Agent Mode puede realizar refactorizaciones autónomas dentro de la base de codigo."
    },
    {
        question: "Está asesorando a una organización gubernamental con estrictos requisitos de cumplimiento y auditoría. Quieren visibilidad del uso de GitHub Copilot y el seguimiento de eventos a un nivel granular. ¿Qué característica responde a sus necesidades?",
        options: [
            "Resúmenes de solicitudes de incorporación de cambios",
            "Seguimiento de la actividad mediante CLI",
            "Registros de auditoría",
            "Habilidades de chat en IDE"
        ],
        answer: 2,
        explanation: "Los audit logs permiten seguimiento granular de uso y eventos."
    },
    {
        question: "Su startup está escalando rápidamente. Desea que los desarrolladores usen el modo de agente de GitHub Copilot para generar automáticamente documentación en todos los métodos y clases públicos para mejorar la incorporación. ¿Qué tarea se alinea mejor con las capacidades del modo agente?",
        options: [
            "Escribir archivos README desde cero",
            "Documentar todos los métodos y funciones en una base de código",
            "Chateando con Copilot sobre la lógica del código",
            "Crear plantillas de markdown"
        ],
        answer: 1,
        explanation: "Agent Mode puede leer y documentar código de manera estructurada."
    },
    {
        question: "Está trabajando con un cliente que usa GitHub Enterprise Cloud y desea implementar Copilot, pero no se hospeda en GitHub.com. Preguntan si Copilot está disponible para GitHub Enterprise Server (GHE). ¿GitHub Copilot está disponible en GHE sin GitHub Connect?",
        options: [
            "Sí, con implementación especial",
            "Sí, solo para empresas",
            "No, a menos que GitHub Connect esté habilitado",
            "Sí, a través de la Marketplace"
        ],
        answer: 2,
        explanation: "Copilot en GHE requiere GitHub Connect."
    },
    {
        question: "Usted es responsable de configurar el acceso de los usuarios a las características de GitHub Copilot en varios equipos. Desea asegurarse de que solo los usuarios seleccionados puedan acceder a él. ¿Qué configuraciones permiten el acceso controlado a Copilot en una organización?",
        options: [
            "Habilitar a través de Org Settings > Access",
            "Solo opt-in de usuario individual",
            "Policy exclusions for certain files",
            "Asignar puestos mediante REST API"
        ],
        answer: [0,3],
        explanation: "El aprovisionamiento de asientos y accesos a la herramienta a nivel corporativo se controla directamente desde las opciones de administración de la organización (Org Settings) o automatizando las altas/bajas mediante llamadas a la API REST de GitHub."
    },
    {
        question: "Una startup fintech de rápido crecimiento está decidiendo entre GitHub Copilot Business y Enterprise. Quieren integrar la documentación de Markdown en sus repositorios privados en la experiencia de Copilot. ¿Qué plan habilita esta funcionalidad?",
        options: [
            "Copilot Business",
            "Copilot Pro",
            "Copilot Free",
            "Copilot Enterprise"
        ],
        answer: 3,
        explanation: "Enterprise permite búsqueda de documentación Markdown en repositorios privados."
    },
    {
        question: "Un ingeniero de datos está limpiando grandes conjuntos de datos JSON e interactuando con las API de REST para los flujos de trabajo ETL. ¿Cuáles de los siguientes casos de uso se alinean directamente con las capacidades de asistencia técnica de Copilot?",
        options: [
            "Análisis y parseo de estructuras JSON anidadas complejas",
            "Escribir scripts de automatización en Bash o Python para interactuar con APIs",
            "Administración de versiones físicas del modelo de Machine Learning en servidores de producción",
            "Monitoreo de hardware de red en tiempo real"
        ],
        answer: [0,1],
        explanation: "Copilot agiliza el desarrollo de pipelines ETL mediante la generación rápida de expresiones de filtrado de datos (JSON) y la creación de scripts conectores en lenguajes como Python o Bash."
    },
    {
        question: "El equipo evalúa las herramientas de GitHub Copilot para comprender cuál es la más adecuada para la asistencia en lenguaje natural con código, pero no ejecuta ni planifica tareas. ¿Qué producto Copilot deberían elegir?",
        options: [
            "Copilot Agent Mode",
            "Copilot Edits",
            "Copilot Ask",
            "Copilot Studio"
        ],
        answer: 2,
        explanation: "Ask ofrece soporte conversacional sin autonomía."
    },
    {
        question: "Indique si la siguiente afirmación es verdadera o falsa: GitHub Copilot requiere de forma obligatoria que el entorno local del desarrollador posea tarjetas gráficas (GPUs) dedicadas para poder ejecutar y renderizar las sugerencias de código de Inteligencia Artificial.",
        options: [
            "True",
            "False"
        ],
        answer: 1,
        explanation: "Las sugerencias e inferencias de GitHub Copilot se procesan e interpretan en los centros de datos en la nube de GitHub/Microsoft, por lo que el equipo local del desarrollador solo requiere una conexión ligera a internet y un IDE compatible."
    },
    {
        question: "Un desarrollador de Woodgrove Insurance está probando GitHub Copilot Agent en un contenedor de desarrollo hospedado en la nube. Después de completar sus tareas, el agente crea una nueva rama y abre una solicitud de extracción con los cambios. ¿Puede GitHub Copilot Agent Mode generar una solicitud de incorporación de cambios automáticamente después de modificar el código en un repositorio?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "En vista previa, el Agent puede crear PR de forma autonoma."
    },
    {
        question: "El cliente supone que puede ejecutar modelos de GitHub Copilot localmente para mejorar la privacidad de los datos. Quieren alojar Copilot en una nube privada. GitHub Copilot se puede ejecutar completamente en el entorno local u hospedarse de forma privada sin los servicios en la nube de GitHub. Seleccione la respuesta correcta.",
        options: [
            "True",
            "False"
        ],
        answer: 1,
        explanation: "Copilot no se ejecuta localmente; requiere los servicios en la nube de GitHub."
    },
    {
        question: "Su equipo de control de calidad tiene plazos ajustados y explora opciones de automatización para optimizar su proceso de prueba. Preguntan si Copilot puede admitir la generación de casos de prueba automatizados y datos de prueba para sus módulos de JavaScript y Python. ¿Qué tipos de soporte de pruebas puede proporcionar Copilot?",
        options: [
            "Generación de casos de prueba unitarios",
            "Refactorización de pruebas legacy",
            "Escribir datos de prueba estructurados (como Data Providers)",
            "Ejecución y despliegue automático de suites de pruebas en servidores"
        ],
        answer: [0,1,2],
        explanation: "GitHub Copilot asiste de forma integral en el diseño de pruebas automatizadas: genera scaffolds unitarios, refactora pruebas legacy y construye sets de datos para pruebas parametrizadas. Sin embargo, no actúa como un motor de ejecución de CI/CD por sí solo."
    },
    {
        question: "Como administrador de TI, has habilitado GitHub Copilot para tu organización, pero no has configurado ninguna configuración de facturación. Los miembros del equipo pueden seguir utilizando las funciones sin ninguna interrupción. ¿Es cierto que las organizaciones pueden acceder completamente a las funciones de GitHub Copilot sin configuración de facturación?",
        options: [
            "True",
            "False"
        ],
        answer: 1,
        explanation: "Business y Enterprise requieren configuracion de facturacion a nivel de organizacion."
    },
    {
        question: "Un nuevo desarrollador de su equipo está trabajando con código heredado que no escribió y no está seguro de cómo funciona la lógica y quiere usar Copilot para la explicación del código. ¿Puede GitHub Copilot explicar el código cuando se pregunta en lenguaje natural?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Copilot Ask y Chat pueden interpretar y explicar codigo."
    },
    {
        question: "Un nuevo empleado en el equipo de frontend quiere saber si Copilot puede generar diseños de página completa, incluidos HTML y marcos de estilo como Tailwind. ¿Puede GitHub Copilot generar HTML, CSS y JavaScript repetitivo?",
        options: [
            "True",
            "False"
        ],
        answer: 0,
        explanation: "Copilot es compatible con lenguajes frontend y scaffolds rapidos."
    },
    {
        question: "Está liderando un equipo de DevOps en una empresa de comercio electrónico. Ha notado que Copilot Agent Mode ocasionalmente vuelve a ejecutar herramientas fallidas después de verificar los registros y reevaluar el problema automáticamente. Este proceso ocurre sin la intervención del desarrollador. ¿Qué característica del Copilot Agent Mode ilustra este comportamiento?",
        options: [
            "Encadenamiento de Prompt",
            "Sandboxing de herramientas",
            "Autocuración",
            "Revisión manual"
        ],
        answer: 2,
        explanation: "La autocuracion implica reintentos automaticos y respuestas adaptativas."
    },
    {
        question: "Un desarrollador junior quiere comprender qué problemas específicos es adecuado para manejar GitHub Copilot Agent Mode de forma autónoma. ¿Cuál de las siguientes tareas se adapta mejor a los flujos del Agent Mode?",
        options: [
            "Refactorización de patrones de diseño de software a gran escala en múltiples archivos",
            "Monitoreo perimetral de firewalls de red",
            "Localización y resolución automatizada de incidencias (issues) o marcas TODO dentro del proyecto",
            "Búsqueda iterativa y corrección de bugs lógicos basados en fallas de testing local"
        ],
        answer: [0,2,3],
        explanation: "El Agent Mode sobresale en flujos repetitivos o multiarchivo estructurados de desarrollo, tales como corregir bugs guiados por errores de testeo, resolver issues del repositorio y aplicar refactorizaciones integrales en el código del espacio de trabajo."
    },
    {
        question: "Un desarrollador está realizando una refactorización a gran escala en varios módulos y usa Copilot para sugerir mejoras, pero quiere una visibilidad completa de todos los cambios antes de aplicarlos. ¿Qué característica habilita este flujo de trabajo?",
        options: [
            "Copilot Ask",
            "GitHub Actions",
            "Copilot Edits",
            "Visual Studio Debugger"
        ],
        answer: 2,
        explanation: "Copilot Edits permite previsualizar, aceptar o rechazar cambios multiarchivo."
    },
    {
        question: "Su responsable de cumplimiento de seguridad quiere entender cómo GitHub Copilot protege contra infracciones de derechos de autor involuntarias en entornos empresariales. ¿Qué salvaguarda de gobernanza nativa proporciona GitHub para mitigar este riesgo?",
        options: [
            "Encriptación estática del disco local",
            "La política corporativa de filtrado/bloqueo de sugerencias coincidentes con código público",
            "Inyección automática de licencias GPL en cada archivo",
            "La desactivación remota de las conexiones SSH de los desarrolladores"
        ],
        answer: 1,
        explanation: "GitHub incluye en sus planes corporativos una opción de política centralizada para 'Bloquear sugerencias que coincidan con código público'. Al activarse, el motor de Copilot analiza las sugerencias en tiempo real y descarta aquellas que repliquen código público existente."
    },
    {
        question: "Eres parte de un equipo de ingeniería de productos en una empresa multinacional de logística. Su equipo necesita modernizar los sistemas heredados y planea usar Copilot Agent Mode para abordar tareas que abarcan múltiples módulos y servicios. Quieren asegurarse de que el agente utilice herramientas y servicios de forma dinámica para mejorar la velocidad de desarrollo. ¿Qué características del modo de agente de GitHub Copilot ayudan a respaldar esta iniciativa?",
        options: [
            "Usuario de herramientas y ejecución de comandos",
            "Validación de reglas estáticas",
            "Descomposición de tareas",
            "Iteración autónoma"
        ],
        answer: [0,2,3],
        explanation: "Agent Mode ejecuta herramientas, descompone tareas y reintenta de forma autonoma."
    },
    {
        question: "Un arquitecto de soluciones está evaluando cómo GitHub Copilot admite flujos de trabajo de desarrollo de software colaborativos entre equipos dentro de la plataforma web de GitHub. ¿Qué característica está diseñada específicamente para enriquecer la colaboración grupal mediante IA en Pull Requests?",
        options: [
            "Generación automática de resúmenes y análisis de cambios en Pull Requests",
            "Programación de pares en línea por telepatía de red",
            "Inyección de variables de chat locales compartidas",
            "Limpieza automatizada del historial de commits locales"
        ],
        answer: 0,
        explanation: "A nivel colaborativo, GitHub Copilot (especialmente en su plan Enterprise) asiste a los equipos automatizando la documentación de revisiones de código, generando descripciones detalladas de Pull Requests y facilitando auditorías rápidas del trabajo de otros desarrolladores."
    },
    {
        question: "Al crear una arquitectura de microservicios, su equipo desea implementar una solución en la que el asistente de IA pueda razonar lógicamente a través de múltiples cambios de código y dependencias. El asistente debe comprender la relación entre los módulos y actuar en consecuencia. ¿Qué tipo de razonamiento permite a los agentes de Copilot realizar un seguimiento de la memoria en todos los pasos en un entorno multitarea?",
        options: [
            "Replicación de tareas",
            "Encadenamiento de lógica estática",
            "Razonamiento de varios pasos",
            "Encadenamiento basado en prompts"
        ],
        answer: 2,
        explanation: "El razonamiento multi-paso permite mantener el estado a lo largo de acciones y decisiones."
    },
    {
        question: "Estás utilizando GitHub Copilot en un proyecto de código abierto y notas que una sugerencia incluye lógica que podría sesgar los resultados de un algoritmo de toma de decisiones. ¿Qué principio de IA Responsable debes priorizar para evaluar y mitigar este riesgo?",
        options: [
            "Transparencia (Transparency)",
            "Equidad (Fairness)",
            "Confiabilidad y Seguridad (Reliability & Safety)",
            "Privacidad y Seguridad (Privacy & Security)"
        ],
        answer: 1,
        explanation: "El principio de Equidad en el uso de IA se centra fundamentalmente en evitar sesgos y asegurar que las sugerencias no produzcan resultados discriminatorios para ciertos grupos."
    },
    {
        question: "Quieres que GitHub Copilot genere una nueva función compleja adoptando un estilo de codificación y estructuras de datos específicos que ya existen en el proyecto. ¿Cuál es la estrategia principal recomendada para proporcionar el mejor contexto (implicit prompt) a la herramienta?",
        options: [
            "Redactar un comentario de una sola línea muy largo justo antes de declarar la función.",
            "Mantener abiertas en el IDE las pestañas de los archivos clave que contienen las estructuras y el estilo deseado.",
            "Configurar un archivo `.copilotignore` en la raíz del repositorio.",
            "Reiniciar constantemente la extensión del IDE para limpiar la cache de sugerencias previas."
        ],
        answer: 1,
        explanation: "GitHub Copilot analiza automáticamente el archivo actual y las pestañas adyacentes activas en el editor para construir un contexto enriquecido y generar sugerencias mucho más precisas."
    },
    {
        question: "Eres responsable de administrar GitHub Copilot en tu organización y requieres garantizar que la herramienta NUNCA analice ni sugiera código basado en ciertos directorios que contienen algoritmos propietarios y altamente confidenciales. ¿Qué acción resuelve este requerimiento?",
        options: [
            "Añadir las rutas de los archivos confidenciales al archivo `.gitignore` estándar.",
            "Desactivar las sugerencias de código que coincidan con código público en las políticas globales.",
            "Configurar políticas de Exclusiones de Contenido (Content Exclusions) a nivel de repositorio o de organización.",
            "Cambiar la licencia principal del proyecto a 'Proprietaria' mediante un archivo `LICENSE.txt`."
        ],
        answer: 2,
        explanation: "Las Exclusiones de Contenido son la función de administración nativa diseñada específicamente para denegar a la IA el acceso de lectura a archivos o rutas críticas seleccionadas."
    },
    {
        question: "El departamento legal de tu empresa exige que los fragmentos de código del equipo no se retengan en servidores externos ni se utilicen para entrenar futuros modelos base de inteligencia artificial. ¿Qué modelo de licenciamiento cumple con este estricto requisito de manera predeterminada?",
        options: [
            "GitHub Copilot Individual, desmarcando manualmente la opción de telemetría.",
            "GitHub Copilot Business o Enterprise.",
            "Cualquier versión, siempre que se combine con GitHub Advanced Security.",
            "No es posible evitarlo; todas las versiones recopilan los prompts para mejorar el servicio central."
        ],
        answer: 1,
        explanation: "Ambos planes empresariales incluyen garantías robustas de privacidad por diseño, asegurando que el código del usuario y los prompts nunca se retengan ni se utilicen para reentrenar modelos."
    },
    {
        question: "Estás utilizando GitHub Copilot Chat para generar pruebas unitarias para un servicio en tu backend de Spring Boot que maneja transacciones financieras. Notas que las pruebas generadas ignoran casos extremos críticos. ¿Qué enfoque (prompting) corrige mejor esta situación?",
        options: [
            "Enviar el prompt: '¿Puedes generar pruebas para este controlador de Spring Boot?'",
            "Enviar el prompt: 'Genera pruebas para este servicio. Asegúrate de incluir y asertar escenarios para valores negativos, inputs nulos y violaciones de concurrencia.'",
            "Enviar el prompt: 'Optimiza la arquitectura de este servicio y luego escribe una prueba rápida.'",
            "Usar el autocompletado en línea (ghost text) escribiendo un comentario de TODO al final de la clase."
        ],
        answer: 1,
        explanation: "Dirigir explícitamente a la IA sobre las condiciones de límite y casos extremos deseados garantiza la generación de una batería de pruebas mucho más profunda y confiable."
    },
    {
        question: "Una vez instalada la extensión oficial de Copilot para la GitHub CLI (`gh-copilot`), ¿cuál es el comando base que utiliza el desarrollador en su terminal para solicitar una explicación en lenguaje natural sobre un comando de consola desconocido?",
        options: [
            "`gh copilot explain`",
            "`gh auth status`",
            "`gh copilot suggest`",
            "`gh extension setup`"
        ],
        answer: 0,
        explanation: "La extensión de terminal oficial de Copilot expone el comando `gh copilot explain` seguido de la consulta para desglosar la estructura, argumentos y banderas de cualquier comando complejo de la consola."
    },
    {
        question: "¿Cómo se define y aplica la técnica de 'Few-Shot Prompting' cuando interactúas con GitHub Copilot para generar un bloque de código complejo?",
        options: [
            "Formular una pregunta muy directa al chat, utilizando la menor cantidad de palabras posibles.",
            "Pedir a la herramienta que genere varias opciones de respuesta y luego escoger la que mejor se adapte.",
            "Incluir deliberadamente en el prompt un par de ejemplos demostrativos de entradas y sus respectivas salidas esperadas antes de pedir la solución real.",
            "Dividir una tarea grande en cinco o más prompts separados para reducir la carga de procesamiento."
        ],
        answer: 2,
        explanation: "El 'Few-Shot Prompting' consiste precisamente en dotar al modelo de ejemplos concretos dentro del contexto para que aprenda el formato o patrón exacto antes de procesar el requerimiento final."
    },
    {
        question: "Tienes un segmento de lógica heredada (legacy) en una clase de tu backend en Java y deseas que Copilot evalúe si el código es susceptible a vulnerabilidades como Inyección SQL. ¿Cuál es el flujo de trabajo más efectivo?",
        options: [
            "Copilot detecta automáticamente y bloquea la compilación de la aplicación en el IDE si detecta llamadas vulnerables.",
            "Seleccionar explícitamente las líneas de código, abrir Copilot Chat y usar un comando como `/explain` centrado en seguridad, o preguntar directamente si existen vulnerabilidades.",
            "Agregar un comentario `// CHECK-SECURITY` al inicio del archivo y esperar a que el texto fantasma resalte los errores.",
            "Pegar el volcado de la base de datos en una nueva pestaña para que Copilot cruce los datos con el código."
        ],
        answer: 1,
        explanation: "Resaltar el fragmento en el editor ancla perfectamente el contexto para que el chat analice la lógica específica bajo un prisma de seguridad y ofrezca sugerencias de remediación concretas."
    },
    {
        question: "En la arquitectura subyacente de GitHub Copilot, ¿qué rol desempeña el componente conocido como filtro de post-procesamiento (post-processing filter)?",
        options: [
            "Captura las pulsaciones del teclado localmente antes de empaquetarlas hacia la nube para ahorrar ancho de banda.",
            "Evalúa el texto generado por el LLM antes de mostrarlo en el editor del usuario, aplicando bloqueos de contenido ofensivo o previniendo coincidencias directas con código público.",
            "Ejecuta un linter en segundo plano para asegurar que la sintaxis de la sugerencia coincida exactamente con la versión del compilador instalada.",
            "Traduce automáticamente los prompts enviados en lenguaje natural hacia código estructurado de bajo nivel."
        ],
        answer: 1,
        explanation: "El filtro de post-procesamiento actúa como la última línea de defensa de seguridad y cumplimiento, interviniendo la respuesta de la IA antes de que llegue a la pantalla del desarrollador."
    },
    {
        question: "Te encuentras auditando un componente extenso de React y decides que necesitas refactorizar únicamente el método de renderizado principal. ¿Qué acción en Copilot Chat produce el resultado más preciso para esta tarea aislada?",
        options: [
            "Escribir en el chat: 'Refactoriza el método principal', sin realizar ninguna otra acción en el editor.",
            "Borrar por completo el método problemático y esperar pacientemente a que Copilot reconstruya la lógica de la nada.",
            "Sombrear (seleccionar) estrictamente todo el bloque del método en el editor y utilizar un comando como `/simplify` o un prompt directo pidiendo la mejora.",
            "Copiar todo el código de los múltiples componentes de React, pegarlo crudo en la ventana del chat y solicitar una refactorización integral."
        ],
        answer: 2,
        explanation: "Enfocar explícitamente la atención del LLM seleccionando un área acotada elimina el ruido del resto del documento y dirige todo el poder de refactorización hacia ese segmento específico."
    },
    {
        question: "En el contexto de la seguridad y el principio de Responsabilidad en IA, estás realizando pruebas de 'red-teaming' en un sistema que integra Copilot. Si intentas forzar al modelo mediante prompts maliciosos para que ignore sus directrices de seguridad y genere código destructivo, ¿qué tipo de vulnerabilidad estás evaluando?",
        options: [
            "Sesgo algorítmico (Algorithmic Bias)",
            "Inyección de Prompts o 'Jailbreaking'",
            "Exfiltración de datos (Data Exfiltration)",
            "Falta de Transparencia"
        ],
        answer: 1,
        explanation: "Esta técnica consiste en diseñar entradas específicas para engañar al modelo de lenguaje, logrando que evada sus restricciones y genere contenido prohibido o dañino."
    },
    {
        question: "Has ejecutado `gh auth login` exitosamente, pero al intentar usar `gh copilot suggest` la terminal indica que el comando no existe o no se reconoce. ¿Qué paso crítico falta en la configuración de GitHub CLI?",
        options: [
            "Asignar el alcance (scope) `read:packages` al token de acceso personal.",
            "Instalar explícitamente la extensión mediante `gh extension install github/gh-copilot`.",
            "Reiniciar el servicio de terminal y limpiar la caché de DNS.",
            "Actualizar el sistema operativo a la última versión compatible con Git."
        ],
        answer: 1,
        explanation: "La funcionalidad de IA no viene preinstalada por defecto en la herramienta de línea de comandos base; requiere la instalación de su extensión oficial correspondiente."
    },
    {
        question: "En GitHub Copilot Enterprise, deseas que la IA responda preguntas basándose en la documentación interna de la arquitectura de tu empresa. ¿Cuál es el formato óptimo para estructurar estos repositorios y mejorar la recuperación de contexto (RAG)?",
        options: [
            "Un único archivo PDF indexado de gran tamaño con todo el contenido corporativo.",
            "Archivos XML con etiquetas personalizadas para forzar el análisis de la IA.",
            "Múltiples archivos Markdown pequeños con jerarquías de encabezados claras y descriptivas.",
            "Comentarios en línea densos dentro del código fuente compilado."
        ],
        answer: 2,
        explanation: "El formato Markdown estructurado en piezas modulares permite que el sistema de recuperación localice, fragmente e inyecte el contexto semántico exacto en el prompt de manera altamente eficiente."
    },
    {
        question: "Le estás pidiendo a Copilot Chat que escriba una expresión regular muy compleja para validar identificadores fiscales, pero la respuesta inicial ignora ciertos casos límite. ¿Qué técnica avanzada de prompting mejora significativamente el razonamiento lógico del modelo para esta tarea?",
        options: [
            "Role Prompting ('Actúa como un desarrollador senior').",
            "Chain of Thought ('Piensa paso a paso y explica cada parte de la regex antes de escribirla').",
            "Zero-shot Prompting ('Genera la regex ahora').",
            "Negative Prompting ('No uses grupos de captura')."
        ],
        answer: 1,
        explanation: "Inducir al modelo a desglosar su proceso de pensamiento antes de entregar el resultado final reduce drásticamente las alucinaciones en tareas que requieren estricta precisión lógica."
    },
    {
        question: "Su organización utiliza una suscripción corporativa (Copilot Business / Enterprise). Un desarrollador interactúa con Copilot Chat e incluye accidentalmente un secreto de producción (API Key) en el prompt. De acuerdo con las políticas oficiales de privacidad de datos corporativos de GitHub, ¿cuál es el destino de esa información?",
        options: [
            "Se indexa inmediatamente y pasa a formar parte del set de entrenamiento global para futuros modelos públicos.",
            "Se almacena de forma permanente en los servidores públicos de OpenAI sin cifrado.",
            "Se procesa de manera segura y aislada bajo políticas estrictas que garantizan que los prompts y el código NUNCA se utilizarán para entrenar modelos de IA.",
            "Es enviada de forma automática al repositorio público de código abierto de la comunidad."
        ],
        answer: 2,
        explanation: "Las licencias empresariales de GitHub Copilot garantizan por contrato que las transmisiones de código, prompts y contextos de chat se manejan de manera privada, asegurando que los datos de la organización nunca se almacenen para entrenar modelos comerciales."
    },
    {
        question: "Estás trabajando en un entorno microservicios con 15 repositorios distintos. En GitHub Copilot Enterprise, ¿qué mecanismo permite al chat entender el contexto global de tu arquitectura sin necesidad de abrir todos los repositorios localmente?",
        options: [
            "Bases de Conocimiento (Knowledge Bases) configuradas en la organización.",
            "El archivo global `.copilot-workspace` en la máquina del desarrollador.",
            "El uso del comando `@terminal` apuntando al directorio raíz del sistema.",
            "Es técnicamente imposible; Copilot solo comprende el repositorio activo actual."
        ],
        answer: 0,
        explanation: "Esta característica empresarial permite agregar y pre-indexar múltiples repositorios, posibilitando que la herramienta recupere contexto de toda la arquitectura directamente en el chat."
    },
    {
        question: "Al utilizar la función nativa de generación de resúmenes de Pull Requests en la interfaz web de GitHub, ¿qué elementos técnicos escanea la IA de Copilot de forma directa para redactar la descripción del cambio?",
        options: [
            "Únicamente las líneas de código modificadas (diff) y los títulos/mensajes de los commits de la rama.",
            "Las bases de datos completas de issues e historiales de despliegue de los últimos 6 meses.",
            "El código fuente de todas las ramas adyacentes del repositorio de producción.",
            "Los logs de ejecución de las GitHub Actions ejecutadas previamente."
        ],
        answer: 0,
        explanation: "El motor de resúmenes de Pull Requests analiza detalladamente los deltas de código (diffs) de los archivos modificados junto con los mensajes de los commits incluidos en la rama para estructurar una descripción resumida y organizada de los cambios."
    },
    {
        question: "En Visual Studio Code, aparece un error detectado por el linter en una línea de tu código. ¿Cuál es la forma más rápida y directa de solicitar a Copilot que resuelva este problema específico sin interrumpir tu flujo redactando un prompt manual?",
        options: [
            "Abrir el panel lateral de Chat, copiar el mensaje de error del terminal y pegarlo.",
            "Utilizar la acción de código rápido (icono de bombilla) y seleccionar 'Fix using Copilot'.",
            "Eliminar la línea de código, escribir un comentario describiendo el error y esperar el autocompletado.",
            "Ejecutar el comando `/explain` en el chat in-line."
        ],
        answer: 1,
        explanation: "Esta integración nativa en el IDE inyecta instantáneamente el contexto del error y la línea problemática al modelo, ofreciendo una sugerencia de refactorización en línea casi inmediata."
    },
    {
        question: "Tanto GitHub Copilot Business como Enterprise ofrecen protección legal bajo una cláusula de indemnización de propiedad intelectual (IP Indemnification). ¿Qué requisito de configuración es obligatorio para mantener la validez de esta cobertura corporativa?",
        options: [
            "Mantener activa la política de filtrado que bloquea sugerencias coincidentes con código público (Block suggestions matching public code).",
            "Configurar exclusiones de contenido para todas las carpetas de dependencias de node_modules.",
            "Migrar obligatoriamente al plan Enterprise, ya que el plan Business carece de esta protección legal.",
            "Obligar a todos los desarrolladores a utilizar exclusivamente el IDE Xcode en fase beta."
        ],
        answer: 0,
        explanation: "Para asegurar la cobertura de indemnización por propiedad intelectual, la organización debe tener configurada la política de bloqueo de código público. De esta manera, GitHub previene proactivamente la emisión de fragmentos idénticos a proyectos de código abierto protegidos."
    },
    {
        question: "Tienes un problema de red en tu entorno corporativo y el icono de Copilot muestra una advertencia de desconexión. Al revisar los logs, notas errores de certificados SSL. ¿Cuál es la causa más probable y su solución?",
        options: [
            "La licencia ha caducado; se debe renovar la suscripción en el portal de GitHub.",
            "El IDE está obsoleto; se debe actualizar a la última versión disponible.",
            "Un proxy corporativo está interceptando el tráfico; se deben inyectar los certificados raíz personalizados en el IDE o configurar la herramienta para que confíe en el proxy.",
            "Copilot detectó código malicioso y bloqueó las conexiones salientes por seguridad."
        ],
        answer: 2,
        explanation: "La intercepción TLS por firewalls corporativos es la causa principal de los fallos de red seguros; la extensión requiere conocer los certificados de la empresa para restablecer la conexión confiable hacia la nube."
    },
    {
        question: "Dentro del Chat de VS Code, ¿qué variable de contexto usarías si quieres preguntar específicamente sobre las responsabilidades de una clase llamada 'AuthService' que está definida en tu proyecto, sin tener que abrir su archivo?",
        options: [
            "`#file`",
            "`@workspace`",
            "`@terminal`",
            "`/explain`"
        ],
        answer: 1,
        explanation: "Este agente instruye al modelo a indexar y buscar a través de todo el entorno local, permitiéndole localizar y comprender las definiciones de la clase sin importar en qué archivo resida."
    },
    {
        question: "En ocasiones, mientras escribes código, Copilot sugiere un bloque grande e inmediatamente después la sugerencia desaparece del editor o queda en blanco. Basado en la arquitectura del servicio, ¿cuál es la razón técnica de este comportamiento?",
        options: [
            "El IDE del usuario se quedó sin memoria RAM para renderizar el texto fantasma.",
            "El modelo de lenguaje experimentó una 'alucinación' y descartó su propia respuesta.",
            "El filtro de post-procesamiento evaluó la sugerencia generada, detectó una coincidencia con código público (o contenido bloqueado) y suprimió la salida antes de entregarla final.",
            "El desarrollador movió el cursor del ratón, cancelando la solicitud de red."
        ],
        answer: 2,
        explanation: "Los filtros de cumplimiento de políticas y seguridad operan de forma asíncrona o inmediatamente después de la inferencia. Si el motor de post-procesamiento detecta que el fragmento transmitido viola restricciones (como coincidencias con código público), detiene la entrega y suprime el texto del editor del desarrollador."
    },
    {
        question: "Si configuras una política de 'Exclusiones de Contenido' (Content Exclusions) para ignorar la carpeta 'config/secrets', pero luego un desarrollador incluye intencionalmente en el chat el comando `#file config/secrets/keys.yaml`, ¿qué sucederá?",
        options: [
            "El chat procesará el archivo porque las inclusiones manuales del usuario anulan las políticas globales.",
            "El sistema denegará el acceso silenciosamente y procesará el prompt sin el contexto de ese archivo.",
            "El IDE lanzará un error de compilación bloqueando la aplicación.",
            "Copilot leerá el archivo, pero alertará al administrador mediante un correo electrónico."
        ],
        answer: 1,
        explanation: "Las políticas de exclusión son estrictas y operan a nivel del servicio base, por lo que la herramienta no extraerá información de los directorios vetados bajo ninguna circunstancia interactiva."
    },
    {
        question: "En el área de Ingeniería de Prompts, has notado que al pedir 'No utilices bucles for' Copilot ocasionalmente los sigue generando. ¿Por qué ocurre esto y cuál es la alternativa más efectiva (Positive Prompting)?",
        options: [
            "El modelo ignora directivas de una sola línea; se debe repetir la restricción al final del prompt.",
            "Los LLMs a veces tienen dificultades con las restricciones negativas estrictas; es más efectivo indicar la herramienta deseada, como 'Utiliza métodos funcionales como map o filter'.",
            "La extensión carece de los permisos locales para aplicar restricciones sintácticas a lenguajes tipados.",
            "El filtro público bloquea la directiva; se deben desactivar las configuraciones de telemetría."
        ],
        answer: 1,
        explanation: "Proporcionar un camino afirmativo y claro orienta el análisis probabilístico del modelo hacia los patrones de código deseados, evitando la confusión semántica de la negación."
    },
    {
        question: "Bajo la arquitectura general de GitHub Copilot, ¿cómo se logra la personalización para que entienda el código específico de una empresa sin comprometer la seguridad de los datos?",
        options: [
            "Entregando el código de la empresa a OpenAI para que realice un 'Fine-Tuning' directo sobre el modelo de fundación.",
            "Utilizando Generación Aumentada por Recuperación (RAG) mediante indexación local y Bases de Conocimiento, inyectando contexto temporalmente en el prompt.",
            "Instalando un clúster local de hardware en las oficinas de la empresa para ejecutar un modelo Open Source aislado.",
            "Obligando a los desarrolladores a escribir comentarios extensos en cada archivo que actúen como manuales de entrenamiento."
        ],
        answer: 1,
        explanation: "Esta técnica extrae fragmentos relevantes de la infraestructura privada y los anexa de forma efímera a la petición, logrando precisión contextual sin alterar ni reentrenar la IA base."
    },
    {
        question: "En el contexto del licenciamiento para organizaciones, ¿existe un límite estricto (rate limit) en la cantidad de sugerencias de código (ghost text) que un desarrollador puede solicitar por día bajo un plan Copilot Business?",
        options: [
            "Sí, está estrictamente limitado a 500 sugerencias por día para evitar sobrecarga del servidor.",
            "No, el uso general para sugerencias de autocompletado es ilimitado bajo las políticas de uso razonable (Fair Use).",
            "Sí, pero se basa en la longitud de tokens procesados y requiere pago adicional por exceso.",
            "Solo las interacciones del panel de chat están limitadas; el autocompletado está restringido a 1000 por mes."
        ],
        answer: 1,
        explanation: "El servicio está diseñado para funcionar de manera continua e imperceptible en segundo plano, por lo que los niveles comerciales no imponen límites artificiales estrictos que bloqueen la productividad típica."
    },
    {
        question: "Solicitas a Copilot que evalúe y sugiera una corrección para una vulnerabilidad de inyección SQL identificada por tu equipo de seguridad en una consulta heredada. ¿Cuál es la postura arquitectónica oficial sobre la adopción de estas remediaciones?",
        options: [
            "Las correcciones generadas por la IA vinculadas a vulnerabilidades conocidas son infalibles y deben automatizarse en el flujo de CI/CD.",
            "Se pueden aceptar ciegamente siempre que el entorno de producción utilice GitHub Advanced Security.",
            "Copilot actúa exclusivamente como un asistente de par (pair programmer); todo código de seguridad generado debe ser revisado humanamente y validado con pruebas específicas.",
            "Copilot bloquea intencionalmente la generación de código relacionado con la mitigación de seguridad por razones legales."
        ],
        answer: 2,
        explanation: "El principio de co-pilotaje delega el borrador inicial a la herramienta, pero exige irrevocablemente que el desarrollador ejerza el juicio final y asuma la responsabilidad de la robustez del parche."
    },
    {
        question: "En GitHub CLI, ¿cuál es la diferencia funcional principal entre ejecutar 'gh copilot suggest' y 'gh copilot explain'?",
        options: [
            "'suggest' autocompleta el código dentro de un archivo local, mientras que 'explain' documenta la API del lenguaje.",
            "'suggest' traduce lenguaje natural a un comando de terminal ejecutable, mientras que 'explain' desglosa y describe qué hace un comando de terminal ya existente.",
            "'suggest' requiere permisos de administración para ejecutarse, mientras que 'explain' funciona en modo de solo lectura.",
            "Ambos realizan la misma acción, pero 'suggest' está optimizado para sistemas Windows y 'explain' para entornos basados en Unix."
        ],
        answer: 1,
        explanation: "La primera opción construye soluciones desde cero basándose en la intención del usuario, y la segunda actúa como un manual dinámico diseccionando lógicas complejas de scripting."
    },
    {
        question: "Si tu organización adquiere GitHub Copilot Enterprise, ¿en qué ubicación principal obtienen los desarrolladores una nueva superficie de interacción con la IA que no está disponible en las versiones Individual o Business?",
        options: [
            "Exclusivamente dentro del editor Visual Studio Community Edition.",
            "Integración directa en la interfaz web de GitHub.com, permitiendo interactuar con el código, repositorios y Pull Requests desde el navegador.",
            "Una aplicación independiente de escritorio instalable llamada Copilot Studio.",
            "Un panel de administración en la nube para auditar pulsaciones de teclado."
        ],
        answer: 1,
        explanation: "La principal propuesta de valor del nivel Enterprise es expandir la presencia del asistente inteligente fuera del IDE local, integrándolo nativamente en el flujo de revisión de código y navegación de la plataforma web corporativa."
    },
    {
        question: "Has creado una extensión de Copilot Chat (Copilot Extension) para tu empresa que consulta el estado de despliegue interno. ¿Qué directriz de diseño es fundamental para garantizar una buena experiencia de usuario en estas extensiones conversacionales?",
        options: [
            "Forzar al usuario a enviar mensajes muy largos incluyendo un token de autenticación cada vez.",
            "Asegurar que la extensión responda de forma silenciosa e imperceptible modificando el código del usuario sin avisar.",
            "Retornar mensajes claros, concisos y contextualizados utilizando componentes visuales de interfaz (UI components) cuando sea posible, respetando el tono colaborativo.",
            "Redirigir sistemáticamente todas las respuestas a una página web externa administrada por la empresa."
        ],
        answer: 2,
        explanation: "El éxito de un asistente se basa en aportar valor inmediato de manera natural, combinando texto eficiente con representaciones ricas que ahorren tiempo cognitivo al desarrollador."
    }
];

export default questions;