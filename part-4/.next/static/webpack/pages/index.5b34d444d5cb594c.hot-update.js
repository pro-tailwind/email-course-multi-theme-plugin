"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/plugin/multi-theme-plugin.js":
/*!******************************************!*\
  !*** ./src/plugin/multi-theme-plugin.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar plugin = __webpack_require__(/*! tailwindcss/plugin */ \"./node_modules/tailwindcss/plugin.js\");\nvar colors = __webpack_require__(/*! tailwindcss/colors */ \"./node_modules/tailwindcss/colors.js\");\nvar Color = __webpack_require__(/*! color */ \"./node_modules/color/index.js\");\n// -----------------------------------------------------------------\n// Get RGB channels for a given color\n// -----------------------------------------------------------------\nfunction getRgbChannels(color) {\n    return Color(color).rgb().array().join(\", \");\n}\n// -----------------------------------------------------------------\n// Compose Tailwind's `opacityValue` into the alpha channel\n// -----------------------------------------------------------------\nfunction withOpacityValue(variable) {\n    return function(param) {\n        var opacityValue = param.opacityValue;\n        if (opacityValue !== undefined) {\n            return \"rgba(var(\".concat(variable, \"), \").concat(opacityValue, \")\");\n        }\n        return \"rgb(\".concat(variable, \")\");\n    };\n}\n// -----------------------------------------------------------------\n// Themes definition\n// -----------------------------------------------------------------\nvar themes = [\n    {\n        name: \"default\",\n        colors: {\n            \"text-base\": colors.fuchsia[\"800\"],\n            \"text-inverted\": colors.fuchsia[\"100\"],\n            \"bg-base\": colors.fuchsia[\"100\"],\n            \"bg-inverted\": colors.fuchsia[\"800\"]\n        }\n    },\n    {\n        name: \"swiss\",\n        colors: {\n            \"text-base\": colors.red[\"800\"],\n            \"text-inverted\": colors.red[\"100\"],\n            \"bg-base\": colors.red[\"100\"],\n            \"bg-inverted\": colors.red[\"800\"]\n        }\n    },\n    {\n        name: \"forest\",\n        colors: {\n            \"text-base\": colors.green[\"800\"],\n            \"text-inverted\": colors.green[\"100\"],\n            \"bg-base\": colors.green[\"100\"],\n            \"bg-inverted\": colors.green[\"800\"]\n        }\n    },\n    {\n        name: \"aqua\",\n        colors: {\n            \"text-base\": colors.cyan[\"800\"],\n            \"text-inverted\": colors.cyan[\"100\"],\n            \"bg-base\": colors.cyan[\"100\"],\n            \"bg-inverted\": colors.cyan[\"800\"]\n        }\n    }, \n];\n// -----------------------------------------------------------------\n// Tailwind CSS plugin\n// -----------------------------------------------------------------\nvar multiThemePlugin = plugin(function(param) {\n    var addBase = param.addBase, addVariant = param.addVariant;\n    // Add `:root` scope CSS variables (set to default theme)\n    var defaultColors = themes[0].colors;\n    addBase({\n        \":root\": {\n            \"--color-text-base\": getRgbChannels(defaultColors[\"text-base\"]),\n            \"--color-text-inverted\": getRgbChannels(defaultColors[\"text-inverted\"]),\n            \"--color-bg-base\": getRgbChannels(defaultColors[\"bg-base\"]),\n            \"--color-bg-inverted\": getRgbChannels(defaultColors[\"bg-inverted\"])\n        }\n    });\n    // Redefine the CSS variables for each theme scope\n    themes.forEach(function(theme) {\n        var colors1 = theme.colors;\n        addBase(_defineProperty({}, \"[data-theme=\".concat(theme.name, \"]\"), {\n            \"--color-text-base\": getRgbChannels(colors1[\"text-base\"]),\n            \"--color-text-inverted\": getRgbChannels(colors1[\"text-inverted\"]),\n            \"--color-bg-base\": getRgbChannels(colors1[\"bg-base\"]),\n            \"--color-bg-inverted\": getRgbChannels(colors1[\"bg-inverted\"])\n        }));\n    });\n    // BONUS: Add theme-specific variant for bespoke theming overrides\n    themes.forEach(function(theme) {\n        addVariant(\"theme-\".concat(theme.name), \"[data-theme=\".concat(theme.name, \"] &\"));\n    });\n}, // Add semantic color names to Tailwind's color palette\n{\n    theme: {\n        extend: {\n            textColor: {\n                multi: {\n                    base: withOpacityValue(\"--color-text-base\"),\n                    inverted: withOpacityValue(\"--color-text-inverted\")\n                }\n            },\n            backgroundColor: {\n                multi: {\n                    base: withOpacityValue(\"--color-bg-base\"),\n                    inverted: withOpacityValue(\"--color-bg-inverted\")\n                }\n            }\n        }\n    }\n});\nmodule.exports = multiThemePlugin;\nmodule.exports.themesList = themes.map(function(theme) {\n    return theme.name;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL211bHRpLXRoZW1lLXBsdWdpbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsZ0VBQW9CLENBQUM7QUFDNUMsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGdFQUFvQixDQUFDO0FBQzVDLElBQU1FLEtBQUssR0FBR0YsbUJBQU8sQ0FBQyw0Q0FBTyxDQUFDO0FBRTlCLG9FQUFvRTtBQUNwRSxxQ0FBcUM7QUFDckMsb0VBQW9FO0FBRXBFLFNBQVNHLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFO0lBQzdCLE9BQU9GLEtBQUssQ0FBQ0UsS0FBSyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDQyxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztDQUM3QztBQUVELG9FQUFvRTtBQUNwRSwyREFBMkQ7QUFDM0Qsb0VBQW9FO0FBRXBFLFNBQVNDLGdCQUFnQixDQUFDQyxRQUFRLEVBQUU7SUFDbEMsT0FBTyxTQUFVLEtBQWdCLEVBQUU7WUFBbEIsWUFBYyxHQUFkLEtBQWdCLENBQWRDLFlBQVk7UUFDN0IsSUFBSUEsWUFBWSxLQUFLQyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxXQUFVLENBQWdCRCxNQUFZLENBQTFCRCxRQUFRLEVBQUMsS0FBRyxDQUFlLE9BQUMsQ0FBZEMsWUFBWSxFQUFDLEdBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sTUFBSyxDQUFXLE1BQUMsQ0FBVkQsUUFBUSxFQUFDLEdBQUMsQ0FBQztLQUMxQjtDQUNGO0FBRUQsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQixvRUFBb0U7QUFFcEUsSUFBTUcsTUFBTSxHQUFHO0lBQ2I7UUFDRUMsSUFBSSxFQUFFLFNBQVM7UUFDZlosTUFBTSxFQUFFO1lBQ04sV0FBVyxFQUFFQSxNQUFNLENBQUNhLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbEMsZUFBZSxFQUFFYixNQUFNLENBQUNhLE9BQU8sQ0FB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RVcsTUFBTSxDQUFDVSxPQUFPLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1FBQ3hCSCxVQUFVLENBQUMsUUFBTyxDQUFhLE9BQVhHLEtBQUssQ0FBQ1YsSUFBSSxDQUFFLEVBQUUsY0FBYSxDQUFhLE1BQUcsQ0FBZFUsS0FBSyxDQUFDVixJQUFJLEVBQUMsS0FBRyxDQUFDLENBQUM7S0FDbEUsQ0FBQztDQUNILEVBQ0QsdURBQXVEO0FBQ3ZEO0lBQ0VVLEtBQUssRUFBRTtRQUNMQyxNQUFNLEVBQUU7WUFDTkMsU0FBUyxFQUFFO2dCQUNUQyxLQUFLLEVBQUU7b0JBQ0xDLElBQUksRUFBRW5CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO29CQUMzQ29CLFFBQVEsRUFBRXBCLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDO2lCQUNwRDthQUNGO1lBQ0RxQixlQUFlLEVBQUU7Z0JBQ2ZILEtBQUssRUFBRTtvQkFDTEMsSUFBSSxFQUFFbkIsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7b0JBQ3pDb0IsUUFBUSxFQUFFcEIsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7aUJBQ2xEO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FDRjtBQUVEc0IsTUFBTSxDQUFDQyxPQUFPLEdBQUdiLGdCQUFnQjtBQUNqQ1kseUJBQXlCLEdBQUdsQixNQUFNLENBQUNxQixHQUFHLENBQUMsU0FBQ1YsS0FBSztXQUFLQSxLQUFLLENBQUNWLElBQUk7Q0FBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbHVnaW4vbXVsdGktdGhlbWUtcGx1Z2luLmpzPzhlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGx1Z2luID0gcmVxdWlyZSgndGFpbHdpbmRjc3MvcGx1Z2luJylcbmNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoJ3RhaWx3aW5kY3NzL2NvbG9ycycpXG5jb25zdCBDb2xvciA9IHJlcXVpcmUoJ2NvbG9yJylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdldCBSR0IgY2hhbm5lbHMgZm9yIGEgZ2l2ZW4gY29sb3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFJnYkNoYW5uZWxzKGNvbG9yKSB7XG4gIHJldHVybiBDb2xvcihjb2xvcikucmdiKCkuYXJyYXkoKS5qb2luKCcsICcpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb21wb3NlIFRhaWx3aW5kJ3MgYG9wYWNpdHlWYWx1ZWAgaW50byB0aGUgYWxwaGEgY2hhbm5lbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gd2l0aE9wYWNpdHlWYWx1ZSh2YXJpYWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHsgb3BhY2l0eVZhbHVlIH0pIHtcbiAgICBpZiAob3BhY2l0eVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBgcmdiYSh2YXIoJHt2YXJpYWJsZX0pLCAke29wYWNpdHlWYWx1ZX0pYFxuICAgIH1cbiAgICByZXR1cm4gYHJnYigke3ZhcmlhYmxlfSlgXG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZW1lcyBkZWZpbml0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCB0aGVtZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgY29sb3JzOiB7XG4gICAgICAndGV4dC1iYXNlJzogY29sb3JzLmZ1Y2hzaWFbJzgwMCddLFxuICAgICAgJ3RleHQtaW52ZXJ0ZWQnOiBjb2xvcnMuZnVjaHNpYVsnMTAwJ10sXG4gICAgICAnYmctYmFzZSc6IGNvbG9ycy5mdWNoc2lhWycxMDAnXSxcbiAgICAgICdiZy1pbnZlcnRlZCc6IGNvbG9ycy5mdWNoc2lhWyc4MDAnXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3N3aXNzJyxcbiAgICBjb2xvcnM6IHtcbiAgICAgICd0ZXh0LWJhc2UnOiBjb2xvcnMucmVkWyc4MDAnXSxcbiAgICAgICd0ZXh0LWludmVydGVkJzogY29sb3JzLnJlZFsnMTAwJ10sXG4gICAgICAnYmctYmFzZSc6IGNvbG9ycy5yZWRbJzEwMCddLFxuICAgICAgJ2JnLWludmVydGVkJzogY29sb3JzLnJlZFsnODAwJ10sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmb3Jlc3QnLFxuICAgIGNvbG9yczoge1xuICAgICAgJ3RleHQtYmFzZSc6IGNvbG9ycy5ncmVlblsnODAwJ10sXG4gICAgICAndGV4dC1pbnZlcnRlZCc6IGNvbG9ycy5ncmVlblsnMTAwJ10sXG4gICAgICAnYmctYmFzZSc6IGNvbG9ycy5ncmVlblsnMTAwJ10sXG4gICAgICAnYmctaW52ZXJ0ZWQnOiBjb2xvcnMuZ3JlZW5bJzgwMCddLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYXF1YScsXG4gICAgY29sb3JzOiB7XG4gICAgICAndGV4dC1iYXNlJzogY29sb3JzLmN5YW5bJzgwMCddLFxuICAgICAgJ3RleHQtaW52ZXJ0ZWQnOiBjb2xvcnMuY3lhblsnMTAwJ10sXG4gICAgICAnYmctYmFzZSc6IGNvbG9ycy5jeWFuWycxMDAnXSxcbiAgICAgICdiZy1pbnZlcnRlZCc6IGNvbG9ycy5jeWFuWyc4MDAnXSxcbiAgICB9LFxuICB9LFxuXVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGFpbHdpbmQgQ1NTIHBsdWdpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgbXVsdGlUaGVtZVBsdWdpbiA9IHBsdWdpbihcbiAgZnVuY3Rpb24gKHsgYWRkQmFzZSwgYWRkVmFyaWFudCB9KSB7XG4gICAgLy8gQWRkIGA6cm9vdGAgc2NvcGUgQ1NTIHZhcmlhYmxlcyAoc2V0IHRvIGRlZmF1bHQgdGhlbWUpXG4gICAgY29uc3QgZGVmYXVsdENvbG9ycyA9IHRoZW1lc1swXS5jb2xvcnNcbiAgICBhZGRCYXNlKHtcbiAgICAgICc6cm9vdCc6IHtcbiAgICAgICAgJy0tY29sb3ItdGV4dC1iYXNlJzogZ2V0UmdiQ2hhbm5lbHMoZGVmYXVsdENvbG9yc1sndGV4dC1iYXNlJ10pLFxuICAgICAgICAnLS1jb2xvci10ZXh0LWludmVydGVkJzogZ2V0UmdiQ2hhbm5lbHMoZGVmYXVsdENvbG9yc1sndGV4dC1pbnZlcnRlZCddKSxcbiAgICAgICAgJy0tY29sb3ItYmctYmFzZSc6IGdldFJnYkNoYW5uZWxzKGRlZmF1bHRDb2xvcnNbJ2JnLWJhc2UnXSksXG4gICAgICAgICctLWNvbG9yLWJnLWludmVydGVkJzogZ2V0UmdiQ2hhbm5lbHMoZGVmYXVsdENvbG9yc1snYmctaW52ZXJ0ZWQnXSksXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICAvLyBSZWRlZmluZSB0aGUgQ1NTIHZhcmlhYmxlcyBmb3IgZWFjaCB0aGVtZSBzY29wZVxuICAgIHRoZW1lcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgICAgY29uc3QgeyBjb2xvcnMgfSA9IHRoZW1lXG4gICAgICBhZGRCYXNlKHtcbiAgICAgICAgW2BbZGF0YS10aGVtZT0ke3RoZW1lLm5hbWV9XWBdOiB7XG4gICAgICAgICAgJy0tY29sb3ItdGV4dC1iYXNlJzogZ2V0UmdiQ2hhbm5lbHMoY29sb3JzWyd0ZXh0LWJhc2UnXSksXG4gICAgICAgICAgJy0tY29sb3ItdGV4dC1pbnZlcnRlZCc6IGdldFJnYkNoYW5uZWxzKGNvbG9yc1sndGV4dC1pbnZlcnRlZCddKSxcbiAgICAgICAgICAnLS1jb2xvci1iZy1iYXNlJzogZ2V0UmdiQ2hhbm5lbHMoY29sb3JzWydiZy1iYXNlJ10pLFxuICAgICAgICAgICctLWNvbG9yLWJnLWludmVydGVkJzogZ2V0UmdiQ2hhbm5lbHMoY29sb3JzWydiZy1pbnZlcnRlZCddKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIEJPTlVTOiBBZGQgdGhlbWUtc3BlY2lmaWMgdmFyaWFudCBmb3IgYmVzcG9rZSB0aGVtaW5nIG92ZXJyaWRlc1xuICAgIHRoZW1lcy5mb3JFYWNoKCh0aGVtZSkgPT4ge1xuICAgICAgYWRkVmFyaWFudChgdGhlbWUtJHt0aGVtZS5uYW1lfWAsIGBbZGF0YS10aGVtZT0ke3RoZW1lLm5hbWV9XSAmYClcbiAgICB9KVxuICB9LFxuICAvLyBBZGQgc2VtYW50aWMgY29sb3IgbmFtZXMgdG8gVGFpbHdpbmQncyBjb2xvciBwYWxldHRlXG4gIHtcbiAgICB0aGVtZToge1xuICAgICAgZXh0ZW5kOiB7XG4gICAgICAgIHRleHRDb2xvcjoge1xuICAgICAgICAgIG11bHRpOiB7XG4gICAgICAgICAgICBiYXNlOiB3aXRoT3BhY2l0eVZhbHVlKCctLWNvbG9yLXRleHQtYmFzZScpLFxuICAgICAgICAgICAgaW52ZXJ0ZWQ6IHdpdGhPcGFjaXR5VmFsdWUoJy0tY29sb3ItdGV4dC1pbnZlcnRlZCcpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICAgIG11bHRpOiB7XG4gICAgICAgICAgICBiYXNlOiB3aXRoT3BhY2l0eVZhbHVlKCctLWNvbG9yLWJnLWJhc2UnKSxcbiAgICAgICAgICAgIGludmVydGVkOiB3aXRoT3BhY2l0eVZhbHVlKCctLWNvbG9yLWJnLWludmVydGVkJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG11bHRpVGhlbWVQbHVnaW5cbm1vZHVsZS5leHBvcnRzLnRoZW1lc0xpc3QgPSB0aGVtZXMubWFwKCh0aGVtZSkgPT4gdGhlbWUubmFtZSlcbiJdLCJuYW1lcyI6WyJwbHVnaW4iLCJyZXF1aXJlIiwiY29sb3JzIiwiQ29sb3IiLCJnZXRSZ2JDaGFubmVscyIsImNvbG9yIiwicmdiIiwiYXJyYXkiLCJqb2luIiwid2l0aE9wYWNpdHlWYWx1ZSIsInZhcmlhYmxlIiwib3BhY2l0eVZhbHVlIiwidW5kZWZpbmVkIiwidGhlbWVzIiwibmFtZSIsImZ1Y2hzaWEiLCJyZWQiLCJncmVlbiIsImN5YW4iLCJtdWx0aVRoZW1lUGx1Z2luIiwiYWRkQmFzZSIsImFkZFZhcmlhbnQiLCJkZWZhdWx0Q29sb3JzIiwiZm9yRWFjaCIsInRoZW1lIiwiZXh0ZW5kIiwidGV4dENvbG9yIiwibXVsdGkiLCJiYXNlIiwiaW52ZXJ0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwidGhlbWVzTGlzdCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugin/multi-theme-plugin.js\n");

/***/ })

});