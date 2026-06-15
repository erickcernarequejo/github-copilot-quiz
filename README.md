# Copilot Quiz

Quiz web estático para practicar preguntas sobre GitHub Copilot.

## Descripción

Esta aplicación muestra una serie de preguntas de opción múltiple y múltiple respuesta sobre GitHub Copilot. Incluye:

- navegación entre preguntas
- selección de respuestas simples y múltiples
- retroalimentación inmediata
- explicación de cada respuesta
- pantalla de resultados con puntaje final

## Estructura del proyecto

- `index.html`: estructura principal de la interfaz
- `style.css`: estilos de la aplicación
- `app.js`: lógica del quiz y navegación
- `questions.js`: banco de preguntas
- `raw_questions.md`: fuente original de preguntas en formato markdown
- `preguntas.md`: versión en español del banco de preguntas
- `banco_preguntas_gh300_copilot.md`: documento de referencia adicional

## Requisitos

La aplicación es estática y no requiere instalación de dependencias. Solo necesitas un navegador moderno.

## Uso

1. Abre `index.html` en un navegador.
2. Presiona **Comenzar Test**.
3. Responde las preguntas y navega entre ellas.
4. Al finalizar, revisa tu puntaje y el mensaje de resultado.

## Desarrollo

Si vas a modificar el cuestionario:

- actualiza `questions.js` con nuevas preguntas o respuestas
- conserva el formato actual de cada pregunta
- revisa `app.js` si cambias la estructura de las preguntas

## Notas

- La aplicación soporta preguntas de respuesta única y múltiple.
- El comportamiento visual depende de `style.css` y la lógica de estado en `app.js`.
