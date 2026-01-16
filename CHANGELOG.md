# Historial de Cambios - Calcu

Este documento mantiene el registro histórico de todos los commits, ramas y versiones del proyecto Calcu.

## 📊 Estado Actual

**Versión:** 0.1.0 (Initial)
**Rama activa:** master
**Último commit:** 7b73d0c
**Fecha inicial:** 16 de Enero 2026

---

## 🌿 Ramas del Proyecto

| Nombre de Rama | Estado | Descripción |
|----------------|--------|-------------|
| `master` | ✅ Activa | Rama principal de desarrollo |

---

## 📝 Historial de Commits

### 2026-01-16 - Commit Inicial

```
Commit: 7b73d0c
Autor: OpenCode
Mensaje: feat: Add project documentation and CSS refactoring with custom properties
Archivos: 2
```

**Cambios realizados:**

#### 📄 README.md (Nuevo archivo)
- Documentación completa del proyecto
  * Descripción y estructura del proyecto
  * Funcionalidades principales
  * Tecnologías utilizadas (HTML5, CSS3, JavaScript ES6)
  * Estilo visual y diseño
  * Documentación de módulos (operaciones-aritmeticas.mjs, index.js)

#### 🎨 css/index.css (Refactorización)
- Implementación de CSS Custom Properties (:root)
- Creación de 8 variables CSS reutilizables:

| Variable | Valor | Usos |
|----------|-------|------|
| `--margin-small` | 1rem | 3 |
| `--margin-medium` | 2rem | 2 |
| `--margin-button` | 0 1rem | 4 |
| `--transition-fast` | 0.2s | 4 |
| `--shadow-small` | 0px 2px 6px rgba(0,0,0,0.07) | 1 |
| `--shadow-button-offset-x` | 10px | 4 |
| `--shadow-button-offset-y` | 4px | 4 |
| `--shadow-button-blur` | 12px | 4 |

**Beneficios:**
- ✅ Mejor mantenibilidad del código
- ✅ Centralización de valores duplicados
- ✅ Facilidad para personalización de temas
- ✅ Reducción de duplicación de código
- ✅ Mayor consistencia en el stylesheet

---

## 📈 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Total de Commits | 1 |
| Ramas creadas | 1 |
| Archivos modificados | 2 |
| Líneas añadidas | 190 |
| Líneas eliminadas | 0 |
| Archivos en el proyecto | 7 |

---

## 🗂️ Estructura de Archivos

```
NodeClone/
├── index.html                    # HTML principal
├── README.md                     # Documentación del proyecto
├── CHANGELOG.md                  # Este archivo (historial de cambios)
├── css/
│   └── index.css                 # Estilos con variables CSS
└── js/
    ├── index.js                  # Lógica principal (módulo ES)
    └── operaciones-aritmeticas.mjs  # Funciones matemáticas
```

---

## 🏷️ Convención de Mensajes de Commit

Este proyecto sigue el formato de commits convencionales:

```
<tipo>(<alcance>): <descripción>

OpenCode Changes:
- Cambio 1
- Cambio 2
```

**Tipos usados:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Formateo de código (sin lógica)
- `refactor`: Refactorización
- `perf`: Mejoras de rendimiento
- `test`: Adición de tests
- `chore`: Tareas de mantenimiento

---

## 📋 Roadmap Futuro

### Pendiente de implementación
- [ ] Implementación de mejoras SEO 2026 (según reporte)
- [ ] Adición de meta tags completos
- [ ] Implementación de Schema.org JSON-LD
- [ ] Optimización de Core Web Vitals
- [ ] Mejoras de accesibilidad (WCAG)
- [ ] Estructura Answer-First para AEO

---

## 🔍 Notas Importantes

- **Estado del repositorio:** Git inicializado el 16/01/2026
- **Herramienta principal:** OpenCode (asistente de desarrollo)
- **Objetivo:** Proyecto educativo/personal de calculadora aritmética
- **Ambiente:** Desarrollo local sin planificación de publicación inmediata

---

*Última actualización: 16 de Enero 2026*
