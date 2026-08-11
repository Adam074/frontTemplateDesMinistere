import {
  ArticleCategory,
  ArticleStatus
} from "./chunk-MDVDJK3Z.js";
import {
  Router,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-IZU5KOS7.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  isPlatformBrowser,
  isPlatformServer,
  numberAttribute,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L2DNARFP.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@primeuix/utils/dist/classnames/index.mjs
function f(...e229) {
  if (e229) {
    let t166 = [];
    for (let i116 = 0; i116 < e229.length; i116++) {
      let n152 = e229[i116];
      if (!n152) continue;
      let s49 = typeof n152;
      if (s49 === "string" || s49 === "number") t166.push(n152);
      else if (s49 === "object") {
        let c113 = Array.isArray(n152) ? [f(...n152)] : Object.entries(n152).map(([r338, o349]) => o349 ? r338 : void 0);
        t166 = c113.length ? t166.concat(c113.filter((r338) => !!r338)) : t166;
      }
    }
    return t166.join(" ").trim();
  }
}

// node_modules/@primeuix/utils/dist/dom/index.mjs
function R(t166, e229) {
  return t166 ? t166.classList ? t166.classList.contains(e229) : new RegExp("(^| )" + e229 + "( |$)", "gi").test(t166.className) : false;
}
function W(t166, e229) {
  if (t166 && e229) {
    let o349 = (n152) => {
      R(t166, n152) || (t166.classList ? t166.classList.add(n152) : t166.className += " " + n152);
    };
    [e229].flat().filter(Boolean).forEach((n152) => n152.split(" ").forEach(o349));
  }
}
function P(t166, e229) {
  if (t166 && e229) {
    let o349 = (n152) => {
      t166.classList ? t166.classList.remove(n152) : t166.className = t166.className.replace(new RegExp("(^|\\b)" + n152.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e229].flat().filter(Boolean).forEach((n152) => n152.split(" ").forEach(o349));
  }
}
function x(t166) {
  for (let e229 of document == null ? void 0 : document.styleSheets) try {
    for (let o349 of e229 == null ? void 0 : e229.cssRules) for (let n152 of o349 == null ? void 0 : o349.style) if (t166.test(n152)) return { name: n152, value: o349.style.getPropertyValue(n152).trim() };
  } catch (o349) {
  }
  return null;
}
function E(t166) {
  return t166 ? Math.abs(t166.scrollLeft) : 0;
}
function v(t166, e229) {
  if (t166 instanceof HTMLElement) {
    let o349 = t166.offsetWidth;
    if (e229) {
      let n152 = getComputedStyle(t166);
      o349 += parseFloat(n152.marginLeft) + parseFloat(n152.marginRight);
    }
    return o349;
  }
  return 0;
}
function y(t166) {
  if (t166) {
    let e229 = t166.parentNode;
    return e229 && e229 instanceof ShadowRoot && e229.host && (e229 = e229.host), e229;
  }
  return null;
}
function T(t166) {
  return !!(t166 !== null && typeof t166 != "undefined" && t166.nodeName && y(t166));
}
function c(t166) {
  return typeof Element != "undefined" ? t166 instanceof Element : t166 !== null && typeof t166 == "object" && t166.nodeType === 1 && typeof t166.nodeName == "string";
}
function H(t166) {
  let e229 = t166;
  return t166 && typeof t166 == "object" && (Object.hasOwn(t166, "current") ? e229 = t166.current : Object.hasOwn(t166, "el") && (Object.hasOwn(t166.el, "nativeElement") ? e229 = t166.el.nativeElement : e229 = t166.el)), c(e229) ? e229 : void 0;
}
function j(t166, e229) {
  var o349, n152, r338;
  if (t166) switch (t166) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return e229 == null ? void 0 : e229.nextElementSibling;
    case "@prev":
      return e229 == null ? void 0 : e229.previousElementSibling;
    case "@first":
      return e229 == null ? void 0 : e229.firstElementChild;
    case "@last":
      return e229 == null ? void 0 : e229.lastElementChild;
    case "@child":
      return (o349 = e229 == null ? void 0 : e229.children) == null ? void 0 : o349[0];
    case "@parent":
      return e229 == null ? void 0 : e229.parentElement;
    case "@grandparent":
      return (n152 = e229 == null ? void 0 : e229.parentElement) == null ? void 0 : n152.parentElement;
    default: {
      if (typeof t166 == "string") {
        let s49 = t166.match(/^@child\[(\d+)]/);
        return s49 ? ((r338 = e229 == null ? void 0 : e229.children) == null ? void 0 : r338[parseInt(s49[1], 10)]) || null : document.querySelector(t166) || null;
      }
      let l72 = ((s49) => typeof s49 == "function" && "call" in s49 && "apply" in s49)(t166) ? t166() : t166, d140 = H(l72);
      return T(d140) ? d140 : (l72 == null ? void 0 : l72.nodeType) === 9 ? l72 : void 0;
    }
  }
}
function A(t166, e229 = {}) {
  if (c(t166)) {
    let o349 = (n152, r338) => {
      var l72, d140;
      let i116 = (l72 = t166 == null ? void 0 : t166.$attrs) != null && l72[n152] ? [(d140 = t166 == null ? void 0 : t166.$attrs) == null ? void 0 : d140[n152]] : [];
      return [r338].flat().reduce((s49, a176) => {
        if (a176 != null) {
          let u26 = typeof a176;
          if (u26 === "string" || u26 === "number") s49.push(a176);
          else if (u26 === "object") {
            let p18 = Array.isArray(a176) ? o349(n152, a176) : Object.entries(a176).map(([f37, g22]) => n152 === "style" && (g22 || g22 === 0) ? `${f37.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g22}` : g22 ? f37 : void 0);
            s49 = p18.length ? s49.concat(p18.filter((f37) => !!f37)) : s49;
          }
        }
        return s49;
      }, i116);
    };
    Object.entries(e229).forEach(([n152, r338]) => {
      if (r338 != null) {
        let i116 = n152.match(/^on(.+)/);
        i116 ? t166.addEventListener(i116[1].toLowerCase(), r338) : n152 === "p-bind" || n152 === "pBind" ? A(t166, r338) : (r338 = n152 === "class" ? [...new Set(o349("class", r338))].join(" ").trim() : n152 === "style" ? o349("style", r338).join(";").trim() : r338, (t166.$attrs = t166.$attrs || {}) && (t166.$attrs[n152] = r338), t166.setAttribute(n152, r338));
      }
    });
  }
}
function z(t166, e229) {
  return c(t166) ? t166.matches(e229) ? t166 : t166.querySelector(e229) : null;
}
function Tt(t166) {
  if (t166) {
    let e229 = t166.offsetHeight, o349 = getComputedStyle(t166);
    return e229 -= parseFloat(o349.paddingTop) + parseFloat(o349.paddingBottom) + parseFloat(o349.borderTopWidth) + parseFloat(o349.borderBottomWidth), e229;
  }
  return 0;
}
function K(t166) {
  if (t166) {
    let e229 = t166.getBoundingClientRect();
    return { top: e229.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e229.left + (window.pageXOffset || E(document.documentElement) || E(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function C(t166, e229) {
  if (t166) {
    let o349 = t166.offsetHeight;
    if (e229) {
      let n152 = getComputedStyle(t166);
      o349 += parseFloat(n152.marginTop) + parseFloat(n152.marginBottom);
    }
    return o349;
  }
  return 0;
}
function Rt(t166) {
  if (t166) {
    let e229 = t166.offsetWidth, o349 = getComputedStyle(t166);
    return e229 -= parseFloat(o349.paddingLeft) + parseFloat(o349.paddingRight) + parseFloat(o349.borderLeftWidth) + parseFloat(o349.borderRightWidth), e229;
  }
  return 0;
}
function Zt(t166) {
  var e229;
  t166 && ("remove" in Element.prototype ? t166.remove() : (e229 = t166.parentNode) == null || e229.removeChild(t166));
}
function _t(t166, e229 = "", o349) {
  c(t166) && o349 !== null && o349 !== void 0 && t166.setAttribute(e229, o349);
}

// node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s() {
  let r338 = /* @__PURE__ */ new Map();
  return { on(e229, t166) {
    let n152 = r338.get(e229);
    return n152 ? n152.push(t166) : n152 = [t166], r338.set(e229, n152), this;
  }, off(e229, t166) {
    let n152 = r338.get(e229);
    return n152 && n152.splice(n152.indexOf(t166) >>> 0, 1), this;
  }, emit(e229, t166) {
    let n152 = r338.get(e229);
    n152 && n152.forEach((i116) => {
      i116(t166);
    });
  }, clear() {
    r338.clear();
  } };
}

// node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var x2 = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var c2 = Object.prototype.hasOwnProperty;
var y2 = Object.prototype.propertyIsEnumerable;
var m = (t166, r338, e229) => r338 in t166 ? x2(t166, r338, { enumerable: true, configurable: true, writable: true, value: e229 }) : t166[r338] = e229;
var u = (t166, r338) => {
  for (var e229 in r338 || (r338 = {})) c2.call(r338, e229) && m(t166, e229, r338[e229]);
  if (d) for (var e229 of d(r338)) y2.call(r338, e229) && m(t166, e229, r338[e229]);
  return t166;
};
function i(...t166) {
  if (t166) {
    let r338 = [];
    for (let e229 = 0; e229 < t166.length; e229++) {
      let a176 = t166[e229];
      if (!a176) continue;
      let o349 = typeof a176;
      if (o349 === "string" || o349 === "number") r338.push(a176);
      else if (o349 === "object") {
        let f37 = Array.isArray(a176) ? [i(...a176)] : Object.entries(a176).map(([s49, n152]) => n152 ? s49 : void 0);
        r338 = f37.length ? r338.concat(f37.filter((s49) => !!s49)) : r338;
      }
    }
    return r338.join(" ").trim();
  }
}
function l(t166) {
  return typeof t166 == "function" && "call" in t166 && "apply" in t166;
}
function p({ skipUndefined: t166 = false }, ...r338) {
  return r338 == null ? void 0 : r338.reduce((e229, a176 = {}) => {
    for (let o349 in a176) {
      let f37 = a176[o349];
      if (!(t166 && f37 === void 0)) if (o349 === "style") e229.style = u(u({}, e229.style), a176.style);
      else if (o349 === "class" || o349 === "className") e229[o349] = i(e229[o349], a176[o349]);
      else if (l(f37)) {
        let s49 = e229[o349];
        e229[o349] = s49 ? (...n152) => {
          s49(...n152), f37(...n152);
        } : f37;
      } else e229[o349] = f37;
    }
    return e229;
  }, {});
}
function w(...t166) {
  return p({ skipUndefined: false }, ...t166);
}

// node_modules/@primeuix/utils/dist/object/index.mjs
var ie = Object.defineProperty;
var K2 = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty;
var ae = Object.prototype.propertyIsEnumerable;
var N = (e229, t166, n152) => t166 in e229 ? ie(e229, t166, { enumerable: true, configurable: true, writable: true, value: n152 }) : e229[t166] = n152;
var d2 = (e229, t166) => {
  for (var n152 in t166 || (t166 = {})) se.call(t166, n152) && N(e229, n152, t166[n152]);
  if (K2) for (var n152 of K2(t166)) ae.call(t166, n152) && N(e229, n152, t166[n152]);
  return e229;
};
function l2(e229) {
  return e229 == null || e229 === "" || Array.isArray(e229) && e229.length === 0 || !(e229 instanceof Date) && typeof e229 == "object" && Object.keys(e229).length === 0;
}
function b(e229, t166, n152 = /* @__PURE__ */ new WeakSet()) {
  if (e229 === t166) return true;
  if (!e229 || !t166 || typeof e229 != "object" || typeof t166 != "object" || n152.has(e229) || n152.has(t166)) return false;
  n152.add(e229).add(t166);
  let o349 = Array.isArray(e229), r338 = Array.isArray(t166), u26, f37, T2;
  if (o349 && r338) {
    if (f37 = e229.length, f37 != t166.length) return false;
    for (u26 = f37; u26-- !== 0; ) if (!b(e229[u26], t166[u26], n152)) return false;
    return true;
  }
  if (o349 != r338) return false;
  let S2 = e229 instanceof Date, A2 = t166 instanceof Date;
  if (S2 != A2) return false;
  if (S2 && A2) return e229.getTime() == t166.getTime();
  let I = e229 instanceof RegExp, L = t166 instanceof RegExp;
  if (I != L) return false;
  if (I && L) return e229.toString() == t166.toString();
  let R2 = Object.keys(e229);
  if (f37 = R2.length, f37 !== Object.keys(t166).length) return false;
  for (u26 = f37; u26-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t166, R2[u26])) return false;
  for (u26 = f37; u26-- !== 0; ) if (T2 = R2[u26], !b(e229[T2], t166[T2], n152)) return false;
  return true;
}
function y3(e229, t166) {
  return b(e229, t166);
}
function c3(e229) {
  return typeof e229 == "function" && "call" in e229 && "apply" in e229;
}
function s2(e229) {
  return !l2(e229);
}
function p2(e229, t166) {
  if (!e229 || !t166) return null;
  try {
    let n152 = e229[t166];
    if (s2(n152)) return n152;
  } catch (n152) {
  }
  if (Object.keys(e229).length) {
    if (c3(t166)) return t166(e229);
    if (t166.indexOf(".") === -1) return e229[t166];
    {
      let n152 = t166.split("."), o349 = e229;
      for (let r338 = 0, u26 = n152.length; r338 < u26; ++r338) {
        if (o349 == null) return null;
        o349 = o349[n152[r338]];
      }
      return o349;
    }
  }
  return null;
}
function k(e229, t166, n152) {
  return n152 ? p2(e229, n152) === p2(t166, n152) : y3(e229, t166);
}
function i2(e229, t166 = true) {
  return e229 instanceof Object && e229.constructor === Object && (t166 || Object.keys(e229).length !== 0);
}
function $(e229 = {}, t166 = {}) {
  let n152 = d2({}, e229);
  return Object.keys(t166).forEach((o349) => {
    let r338 = o349;
    i2(t166[r338]) && r338 in e229 && i2(e229[r338]) ? n152[r338] = $(e229[r338], t166[r338]) : n152[r338] = t166[r338];
  }), n152;
}
function w2(...e229) {
  return e229.reduce((t166, n152, o349) => o349 === 0 ? n152 : $(t166, n152), {});
}
function m2(e229, ...t166) {
  return c3(e229) ? e229(...t166) : e229;
}
function a(e229, t166 = true) {
  return typeof e229 == "string" && (t166 || e229 !== "");
}
function g(e229) {
  return a(e229) ? e229.replace(/(-|_)/g, "").toLowerCase() : e229;
}
function F(e229, t166 = "", n152 = {}) {
  let o349 = g(t166).split("."), r338 = o349.shift();
  if (r338) {
    if (i2(e229)) {
      let u26 = Object.keys(e229).find((f37) => g(f37) === r338) || "";
      return F(m2(e229[u26], n152), o349.join("."), n152);
    }
    return;
  }
  return m2(e229, n152);
}
function C2(e229, t166 = true) {
  return Array.isArray(e229) && (t166 || e229.length !== 0);
}
function z2(e229) {
  return s2(e229) && !isNaN(e229);
}
function G(e229, t166) {
  if (t166) {
    let n152 = t166.test(e229);
    return t166.lastIndex = 0, n152;
  }
  return false;
}
function H2(...e229) {
  return w2(...e229);
}
function Y(e229) {
  return e229 && e229.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function X(e229) {
  if (e229 && /[\xC0-\xFF\u0100-\u017E]/.test(e229)) {
    let n152 = { A: /[\xC0-\xC5\u0100\u0102\u0104]/g, AE: /[\xC6]/g, C: /[\xC7\u0106\u0108\u010A\u010C]/g, D: /[\xD0\u010E\u0110]/g, E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g, G: /[\u011C\u011E\u0120\u0122]/g, H: /[\u0124\u0126]/g, I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g, IJ: /[\u0132]/g, J: /[\u0134]/g, K: /[\u0136]/g, L: /[\u0139\u013B\u013D\u013F\u0141]/g, N: /[\xD1\u0143\u0145\u0147\u014A]/g, O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g, OE: /[\u0152]/g, R: /[\u0154\u0156\u0158]/g, S: /[\u015A\u015C\u015E\u0160]/g, T: /[\u0162\u0164\u0166]/g, U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g, W: /[\u0174]/g, Y: /[\xDD\u0176\u0178]/g, Z: /[\u0179\u017B\u017D]/g, a: /[\xE0-\xE5\u0101\u0103\u0105]/g, ae: /[\xE6]/g, c: /[\xE7\u0107\u0109\u010B\u010D]/g, d: /[\u010F\u0111]/g, e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g, g: /[\u011D\u011F\u0121\u0123]/g, i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g, ij: /[\u0133]/g, j: /[\u0135]/g, k: /[\u0137,\u0138]/g, l: /[\u013A\u013C\u013E\u0140\u0142]/g, n: /[\xF1\u0144\u0146\u0148\u014B]/g, p: /[\xFE]/g, o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g, oe: /[\u0153]/g, r: /[\u0155\u0157\u0159]/g, s: /[\u015B\u015D\u015F\u0161]/g, t: /[\u0163\u0165\u0167]/g, u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g, w: /[\u0175]/g, y: /[\xFD\xFF\u0177]/g, z: /[\u017A\u017C\u017E]/g };
    for (let o349 in n152) e229 = e229.replace(n152[o349], o349);
  }
  return e229;
}
function re(e229) {
  return a(e229) ? e229.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e229;
}

// node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s3(n152 = "pui_id_") {
  return Object.hasOwn(t, n152) || (t[n152] = 0), t[n152]++, `${n152}${t[n152]}`;
}

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = p2(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = X(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = X(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) == X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return X(value.toString()).toLocaleLowerCase(filterLocale) != X(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i116 = 0; i116 < filter.length; i116++) {
        if (k(value, filter[i116])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  parentDragSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  parentDragObservable = this.parentDragSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  emitParentDrag(container) {
    this.parentDragSource.next(container);
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer],
    imports: [CommonModule, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F2 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e229, t166, r338) => t166 in e229 ? rt(e229, t166, { enumerable: true, configurable: true, writable: true, value: r338 }) : e229[t166] = r338;
var h = (e229, t166) => {
  for (var r338 in t166 || (t166 = {})) xe.call(t166, r338) && _e(e229, r338, t166[r338]);
  if (F2) for (var r338 of F2(t166)) be.call(t166, r338) && _e(e229, r338, t166[r338]);
  return e229;
};
var $2 = (e229, t166) => st(e229, nt(t166));
var v2 = (e229, t166) => {
  var r338 = {};
  for (var s49 in e229) xe.call(e229, s49) && t166.indexOf(s49) < 0 && (r338[s49] = e229[s49]);
  if (e229 != null && F2) for (var s49 of F2(e229)) t166.indexOf(s49) < 0 && be.call(e229, s49) && (r338[s49] = e229[s49]);
  return r338;
};
var at = s();
var N2 = at;
var k2 = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie2 = /var\([^)]+\)/g;
function oe(e229) {
  return a(e229) ? e229.replace(/[A-Z]/g, (t166, r338) => r338 === 0 ? t166 : "." + t166.toLowerCase()).toLowerCase() : e229;
}
function ve(e229) {
  return i2(e229) && e229.hasOwnProperty("$value") && e229.hasOwnProperty("$type") ? e229.$value : e229;
}
function dt(e229) {
  return e229.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e229 = "", t166 = "") {
  return dt(`${a(e229, false) && a(t166, false) ? `${e229}-` : e229}${t166}`);
}
function ae2(e229 = "", t166 = "") {
  return `--${Q(e229, t166)}`;
}
function ht(e229 = "") {
  let t166 = (e229.match(/{/g) || []).length, r338 = (e229.match(/}/g) || []).length;
  return (t166 + r338) % 2 !== 0;
}
function Y2(e229, t166 = "", r338 = "", s49 = [], i116) {
  if (a(e229)) {
    let a176 = e229.trim();
    if (ht(a176)) return;
    if (G(a176, k2)) {
      let n152 = a176.replaceAll(k2, (l72) => {
        let c113 = l72.replace(/{|}/g, "").split(".").filter((m20) => !s49.some((d140) => G(m20, d140)));
        return `var(${ae2(r338, re(c113.join("-")))}${s2(i116) ? `, ${i116}` : ""})`;
      });
      return G(n152.replace(ie2, "0"), ne) ? `calc(${n152})` : n152;
    }
    return a176;
  } else if (z2(e229)) return e229;
}
function Re(e229, t166, r338) {
  a(t166, false) && e229.push(`${t166}:${r338};`);
}
function C3(e229, t166) {
  return e229 ? `${e229}{${t166}}` : "";
}
function le(e229, t166) {
  if (e229.indexOf("dt(") === -1) return e229;
  function r338(n152, l72) {
    let o349 = [], c113 = 0, m20 = "", d140 = null, u26 = 0;
    for (; c113 <= n152.length; ) {
      let g22 = n152[c113];
      if ((g22 === '"' || g22 === "'" || g22 === "`") && n152[c113 - 1] !== "\\" && (d140 = d140 === g22 ? null : g22), !d140 && (g22 === "(" && u26++, g22 === ")" && u26--, (g22 === "," || c113 === n152.length) && u26 === 0)) {
        let f37 = m20.trim();
        f37.startsWith("dt(") ? o349.push(le(f37, l72)) : o349.push(s49(f37)), m20 = "", c113++;
        continue;
      }
      g22 !== void 0 && (m20 += g22), c113++;
    }
    return o349;
  }
  function s49(n152) {
    let l72 = n152[0];
    if ((l72 === '"' || l72 === "'" || l72 === "`") && n152[n152.length - 1] === l72) return n152.slice(1, -1);
    let o349 = Number(n152);
    return isNaN(o349) ? n152 : o349;
  }
  let i116 = [], a176 = [];
  for (let n152 = 0; n152 < e229.length; n152++) if (e229[n152] === "d" && e229.slice(n152, n152 + 3) === "dt(") a176.push(n152), n152 += 2;
  else if (e229[n152] === ")" && a176.length > 0) {
    let l72 = a176.pop();
    a176.length === 0 && i116.push([l72, n152]);
  }
  if (!i116.length) return e229;
  for (let n152 = i116.length - 1; n152 >= 0; n152--) {
    let [l72, o349] = i116[n152], c113 = e229.slice(l72 + 3, o349), m20 = r338(c113, t166), d140 = t166(...m20);
    e229 = e229.slice(0, l72) + d140 + e229.slice(o349 + 1);
  }
  return e229;
}
var E2 = (...e229) => ue(S.getTheme(), ...e229);
var ue = (e229 = {}, t166, r338, s49) => {
  if (t166) {
    let { variable: i116, options: a176 } = S.defaults || {}, { prefix: n152, transform: l72 } = (e229 == null ? void 0 : e229.options) || a176 || {}, o349 = G(t166, k2) ? t166 : `{${t166}}`;
    return s49 === "value" || l2(s49) && l72 === "strict" ? S.getTokenValue(t166) : Y2(o349, void 0, n152, [i116.excludedKeyRegex], r338);
  }
  return "";
};
function ar(e229, ...t166) {
  if (e229 instanceof Array) {
    let r338 = e229.reduce((s49, i116, a176) => {
      var n152;
      return s49 + i116 + ((n152 = m2(t166[a176], { dt: E2 })) != null ? n152 : "");
    }, "");
    return le(r338, E2);
  }
  return m2(e229, { dt: E2 });
}
var w3 = (e229 = {}) => {
  let { preset: t166, options: r338 } = e229;
  return { preset(s49) {
    return t166 = t166 ? H2(t166, s49) : s49, this;
  }, options(s49) {
    return r338 = r338 ? h(h({}, r338), s49) : s49, this;
  }, primaryPalette(s49) {
    let { semantic: i116 } = t166 || {};
    return t166 = $2(h({}, t166), { semantic: $2(h({}, i116), { primary: s49 }) }), this;
  }, surfacePalette(s49) {
    var o349, c113;
    let { semantic: i116 } = t166 || {}, a176 = s49 && Object.hasOwn(s49, "light") ? s49.light : s49, n152 = s49 && Object.hasOwn(s49, "dark") ? s49.dark : s49, l72 = { colorScheme: { light: h(h({}, (o349 = i116 == null ? void 0 : i116.colorScheme) == null ? void 0 : o349.light), !!a176 && { surface: a176 }), dark: h(h({}, (c113 = i116 == null ? void 0 : i116.colorScheme) == null ? void 0 : c113.dark), !!n152 && { surface: n152 }) } };
    return t166 = $2(h({}, t166), { semantic: h(h({}, i116), l72) }), this;
  }, define({ useDefaultPreset: s49 = false, useDefaultOptions: i116 = false } = {}) {
    return { preset: s49 ? S.getPreset() : t166, options: i116 ? S.getOptions() : r338 };
  }, update({ mergePresets: s49 = true, mergeOptions: i116 = true } = {}) {
    let a176 = { preset: s49 ? H2(S.getPreset(), t166) : t166, options: i116 ? h(h({}, S.getOptions()), r338) : r338 };
    return S.setTheme(a176), a176;
  }, use(s49) {
    let i116 = this.define(s49);
    return S.setTheme(i116), i116;
  } };
};
function de(e229, t166 = {}) {
  let r338 = S.defaults.variable, { prefix: s49 = r338.prefix, selector: i116 = r338.selector, excludedKeyRegex: a176 = r338.excludedKeyRegex } = t166, n152 = [], l72 = [], o349 = [{ node: e229, path: s49 }];
  for (; o349.length; ) {
    let { node: m20, path: d140 } = o349.pop();
    for (let u26 in m20) {
      let g22 = m20[u26], f37 = ve(g22), p18 = G(u26, a176) ? Q(d140) : Q(d140, re(u26));
      if (i2(f37)) o349.push({ node: f37, path: p18 });
      else {
        let y4 = ae2(p18), R2 = Y2(f37, p18, s49, [a176]);
        Re(l72, y4, R2);
        let T2 = p18;
        s49 && T2.startsWith(s49 + "-") && (T2 = T2.slice(s49.length + 1)), n152.push(T2.replace(/-/g, "."));
      }
    }
  }
  let c113 = l72.join("");
  return { value: l72, tokens: n152, declarations: c113, css: C3(i116, c113) };
}
var b2 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e229) {
  return { type: "class", selector: e229, matched: this.pattern.test(e229.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e229) {
  return { type: "attr", selector: `:root${e229},:host${e229}`, matched: this.pattern.test(e229.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e229) {
  return { type: "media", selector: e229, matched: this.pattern.test(e229.trim()) };
} }, system: { pattern: /^system$/, resolve(e229) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e229.trim()) };
} }, custom: { resolve(e229) {
  return { type: "custom", selector: e229, matched: true };
} } }, resolve(e229) {
  let t166 = Object.keys(this.rules).filter((r338) => r338 !== "custom").map((r338) => this.rules[r338]);
  return [e229].flat().map((r338) => {
    var s49;
    return (s49 = t166.map((i116) => i116.resolve(r338)).find((i116) => i116.matched)) != null ? s49 : this.rules.custom.resolve(r338);
  });
} }, _toVariables(e229, t166) {
  return de(e229, { prefix: t166 == null ? void 0 : t166.prefix });
}, getCommon({ name: e229 = "", theme: t166 = {}, params: r338, set: s49, defaults: i116 }) {
  var R2, T2, j2, O, M, z3, V;
  let { preset: a176, options: n152 } = t166, l72, o349, c113, m20, d140, u26, g22;
  if (s2(a176) && n152.transform !== "strict") {
    let { primitive: L, semantic: te, extend: re2 } = a176, f37 = te || {}, { colorScheme: K3 } = f37, A2 = v2(f37, ["colorScheme"]), x4 = re2 || {}, { colorScheme: X2 } = x4, G2 = v2(x4, ["colorScheme"]), p18 = K3 || {}, { dark: U } = p18, B = v2(p18, ["dark"]), y4 = X2 || {}, { dark: I } = y4, H3 = v2(y4, ["dark"]), W2 = s2(L) ? this._toVariables({ primitive: L }, n152) : {}, q = s2(A2) ? this._toVariables({ semantic: A2 }, n152) : {}, Z = s2(B) ? this._toVariables({ light: B }, n152) : {}, pe = s2(U) ? this._toVariables({ dark: U }, n152) : {}, fe = s2(G2) ? this._toVariables({ semantic: G2 }, n152) : {}, ye = s2(H3) ? this._toVariables({ light: H3 }, n152) : {}, Se = s2(I) ? this._toVariables({ dark: I }, n152) : {}, [Me, ze] = [(R2 = W2.declarations) != null ? R2 : "", W2.tokens], [Ke, Xe] = [(T2 = q.declarations) != null ? T2 : "", q.tokens || []], [Ge, Ue] = [(j2 = Z.declarations) != null ? j2 : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z3 = ye.declarations) != null ? z3 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
    l72 = this.transformCSS(e229, Me, "light", "variable", n152, s49, i116), o349 = ze;
    let Qe2 = this.transformCSS(e229, `${Ke}${Ge}`, "light", "variable", n152, s49, i116), Ye = this.transformCSS(e229, `${Be}`, "dark", "variable", n152, s49, i116);
    c113 = `${Qe2}${Ye}`, m20 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e229, `${He}${qe}color-scheme:light`, "light", "variable", n152, s49, i116), tt = this.transformCSS(e229, `${Fe}color-scheme:dark`, "dark", "variable", n152, s49, i116);
    d140 = `${et}${tt}`, u26 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g22 = m2(a176.css, { dt: E2 });
  }
  return { primitive: { css: l72, tokens: o349 }, semantic: { css: c113, tokens: m20 }, global: { css: d140, tokens: u26 }, style: g22 };
}, getPreset({ name: e229 = "", preset: t166 = {}, options: r338, params: s49, set: i116, defaults: a176, selector: n152 }) {
  var f37, x4, p18;
  let l72, o349, c113;
  if (s2(t166) && r338.transform !== "strict") {
    let y4 = e229.replace("-directive", ""), m20 = t166, { colorScheme: R2, extend: T2, css: j2 } = m20, O = v2(m20, ["colorScheme", "extend", "css"]), d140 = T2 || {}, { colorScheme: M } = d140, z3 = v2(d140, ["colorScheme"]), u26 = R2 || {}, { dark: V } = u26, L = v2(u26, ["dark"]), g22 = M || {}, { dark: te } = g22, re2 = v2(g22, ["dark"]), K3 = s2(O) ? this._toVariables({ [y4]: h(h({}, O), z3) }, r338) : {}, A2 = s2(L) ? this._toVariables({ [y4]: h(h({}, L), re2) }, r338) : {}, X2 = s2(V) ? this._toVariables({ [y4]: h(h({}, V), te) }, r338) : {}, [G2, U] = [(f37 = K3.declarations) != null ? f37 : "", K3.tokens || []], [B, I] = [(x4 = A2.declarations) != null ? x4 : "", A2.tokens || []], [H3, W2] = [(p18 = X2.declarations) != null ? p18 : "", X2.tokens || []], q = this.transformCSS(y4, `${G2}${B}`, "light", "variable", r338, i116, a176, n152), Z = this.transformCSS(y4, H3, "dark", "variable", r338, i116, a176, n152);
    l72 = `${q}${Z}`, o349 = [.../* @__PURE__ */ new Set([...U, ...I, ...W2])], c113 = m2(j2, { dt: E2 });
  }
  return { css: l72, tokens: o349, style: c113 };
}, getPresetC({ name: e229 = "", theme: t166 = {}, params: r338, set: s49, defaults: i116 }) {
  var o349;
  let { preset: a176, options: n152 } = t166, l72 = (o349 = a176 == null ? void 0 : a176.components) == null ? void 0 : o349[e229];
  return this.getPreset({ name: e229, preset: l72, options: n152, params: r338, set: s49, defaults: i116 });
}, getPresetD({ name: e229 = "", theme: t166 = {}, params: r338, set: s49, defaults: i116 }) {
  var c113, m20;
  let a176 = e229.replace("-directive", ""), { preset: n152, options: l72 } = t166, o349 = ((c113 = n152 == null ? void 0 : n152.components) == null ? void 0 : c113[a176]) || ((m20 = n152 == null ? void 0 : n152.directives) == null ? void 0 : m20[a176]);
  return this.getPreset({ name: a176, preset: o349, options: l72, params: r338, set: s49, defaults: i116 });
}, applyDarkColorScheme(e229) {
  return !(e229.darkModeSelector === "none" || e229.darkModeSelector === false);
}, getColorSchemeOption(e229, t166) {
  var r338;
  return this.applyDarkColorScheme(e229) ? this.regex.resolve(e229.darkModeSelector === true ? t166.options.darkModeSelector : (r338 = e229.darkModeSelector) != null ? r338 : t166.options.darkModeSelector) : [];
}, getLayerOrder(e229, t166 = {}, r338, s49) {
  let { cssLayer: i116 } = t166;
  return i116 ? `@layer ${m2(i116.order || i116.name || "primeui", r338)}` : "";
}, getCommonStyleSheet({ name: e229 = "", theme: t166 = {}, params: r338, props: s49 = {}, set: i116, defaults: a176 }) {
  let n152 = this.getCommon({ name: e229, theme: t166, params: r338, set: i116, defaults: a176 }), l72 = Object.entries(s49).reduce((o349, [c113, m20]) => o349.push(`${c113}="${m20}"`) && o349, []).join(" ");
  return Object.entries(n152 || {}).reduce((o349, [c113, m20]) => {
    if (i2(m20) && Object.hasOwn(m20, "css")) {
      let d140 = Y(m20.css), u26 = `${c113}-variables`;
      o349.push(`<style type="text/css" data-primevue-style-id="${u26}" ${l72}>${d140}</style>`);
    }
    return o349;
  }, []).join("");
}, getStyleSheet({ name: e229 = "", theme: t166 = {}, params: r338, props: s49 = {}, set: i116, defaults: a176 }) {
  var c113;
  let n152 = { name: e229, theme: t166, params: r338, set: i116, defaults: a176 }, l72 = (c113 = e229.includes("-directive") ? this.getPresetD(n152) : this.getPresetC(n152)) == null ? void 0 : c113.css, o349 = Object.entries(s49).reduce((m20, [d140, u26]) => m20.push(`${d140}="${u26}"`) && m20, []).join(" ");
  return l72 ? `<style type="text/css" data-primevue-style-id="${e229}-variables" ${o349}>${Y(l72)}</style>` : "";
}, createTokens(e229 = {}, t166, r338 = "", s49 = "", i116 = {}) {
  let a176 = function(l72, o349 = {}, c113 = []) {
    if (c113.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l72, path: this.path, paths: o349, value: void 0 };
    c113.push(this.path), o349.name = this.path, o349.binding || (o349.binding = {});
    let m20 = this.value;
    if (typeof this.value == "string" && k2.test(this.value)) {
      let u26 = this.value.trim().replace(k2, (g22) => {
        var y4;
        let f37 = g22.slice(1, -1), x4 = this.tokens[f37];
        if (!x4) return console.warn(`Token not found for path: ${f37}`), "__UNRESOLVED__";
        let p18 = x4.computed(l72, o349, c113);
        return Array.isArray(p18) && p18.length === 2 ? `light-dark(${p18[0].value},${p18[1].value})` : (y4 = p18 == null ? void 0 : p18.value) != null ? y4 : "__UNRESOLVED__";
      });
      m20 = ne.test(u26.replace(ie2, "0")) ? `calc(${u26})` : u26;
    }
    return l2(o349.binding) && delete o349.binding, c113.pop(), { colorScheme: l72, path: this.path, paths: o349, value: m20.includes("__UNRESOLVED__") ? void 0 : m20 };
  }, n152 = (l72, o349, c113) => {
    Object.entries(l72).forEach(([m20, d140]) => {
      let u26 = G(m20, t166.variable.excludedKeyRegex) ? o349 : o349 ? `${o349}.${oe(m20)}` : oe(m20), g22 = c113 ? `${c113}.${m20}` : m20;
      i2(d140) ? n152(d140, u26, g22) : (i116[u26] || (i116[u26] = { paths: [], computed: (f37, x4 = {}, p18 = []) => {
        if (i116[u26].paths.length === 1) return i116[u26].paths[0].computed(i116[u26].paths[0].scheme, x4.binding, p18);
        if (f37 && f37 !== "none") for (let y4 = 0; y4 < i116[u26].paths.length; y4++) {
          let R2 = i116[u26].paths[y4];
          if (R2.scheme === f37) return R2.computed(f37, x4.binding, p18);
        }
        return i116[u26].paths.map((y4) => y4.computed(y4.scheme, x4[y4.scheme], p18));
      } }), i116[u26].paths.push({ path: g22, value: d140, scheme: g22.includes("colorScheme.light") ? "light" : g22.includes("colorScheme.dark") ? "dark" : "none", computed: a176, tokens: i116 }));
    });
  };
  return n152(e229, r338, s49), i116;
}, getTokenValue(e229, t166, r338) {
  var l72;
  let i116 = ((o349) => o349.split(".").filter((m20) => !G(m20.toLowerCase(), r338.variable.excludedKeyRegex)).join("."))(t166), a176 = t166.includes("colorScheme.light") ? "light" : t166.includes("colorScheme.dark") ? "dark" : void 0, n152 = [(l72 = e229[i116]) == null ? void 0 : l72.computed(a176)].flat().filter((o349) => o349);
  return n152.length === 1 ? n152[0].value : n152.reduce((o349 = {}, c113) => {
    let u26 = c113, { colorScheme: m20 } = u26, d140 = v2(u26, ["colorScheme"]);
    return o349[m20] = d140, o349;
  }, void 0);
}, getSelectorRule(e229, t166, r338, s49) {
  return r338 === "class" || r338 === "attr" ? C3(s2(t166) ? `${e229}${t166},${e229} ${t166}` : e229, s49) : C3(e229, C3(t166 != null ? t166 : ":root,:host", s49));
}, transformCSS(e229, t166, r338, s49, i116 = {}, a176, n152, l72) {
  if (s2(t166)) {
    let { cssLayer: o349 } = i116;
    if (s49 !== "style") {
      let c113 = this.getColorSchemeOption(i116, n152);
      t166 = r338 === "dark" ? c113.reduce((m20, { type: d140, selector: u26 }) => (s2(u26) && (m20 += u26.includes("[CSS]") ? u26.replace("[CSS]", t166) : this.getSelectorRule(u26, l72, d140, t166)), m20), "") : C3(l72 != null ? l72 : ":root,:host", t166);
    }
    if (o349) {
      let c113 = { name: "primeui", order: "primeui" };
      i2(o349) && (c113.name = m2(o349.name, { name: e229, type: s49 })), s2(c113.name) && (t166 = C3(`@layer ${c113.name}`, t166), a176 == null || a176.layerNames(c113.name));
    }
    return t166;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e229 = {}) {
  let { theme: t166 } = e229;
  t166 && (this._theme = $2(h({}, t166), { options: h(h({}, this.defaults.options), t166.options) }), this._tokens = b2.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e229;
  return ((e229 = this.theme) == null ? void 0 : e229.preset) || {};
}, get options() {
  var e229;
  return ((e229 = this.theme) == null ? void 0 : e229.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e229) {
  this.update({ theme: e229 }), N2.emit("theme:change", e229);
}, getPreset() {
  return this.preset;
}, setPreset(e229) {
  this._theme = $2(h({}, this.theme), { preset: e229 }), this._tokens = b2.createTokens(e229, this.defaults), this.clearLoadedStyleNames(), N2.emit("preset:change", e229), N2.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e229) {
  this._theme = $2(h({}, this.theme), { options: e229 }), this.clearLoadedStyleNames(), N2.emit("options:change", e229), N2.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e229) {
  this._layerNames.add(e229);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e229) {
  return this._loadedStyleNames.has(e229);
}, setLoadedStyleName(e229) {
  this._loadedStyleNames.add(e229);
}, deleteLoadedStyleName(e229) {
  this._loadedStyleNames.delete(e229);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e229) {
  return b2.getTokenValue(this.tokens, e229, this.defaults);
}, getCommon(e229 = "", t166) {
  return b2.getCommon({ name: e229, theme: this.theme, params: t166, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e229 = "", t166) {
  let r338 = { name: e229, theme: this.theme, params: t166, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetC(r338);
}, getDirective(e229 = "", t166) {
  let r338 = { name: e229, theme: this.theme, params: t166, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetD(r338);
}, getCustomPreset(e229 = "", t166, r338, s49) {
  let i116 = { name: e229, preset: t166, options: this.options, selector: r338, params: s49, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPreset(i116);
}, getLayerOrderCSS(e229 = "") {
  return b2.getLayerOrder(e229, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e229 = "", t166, r338 = "style", s49) {
  return b2.transformCSS(e229, t166, s49, r338, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e229 = "", t166, r338 = {}) {
  return b2.getCommonStyleSheet({ name: e229, theme: this.theme, params: t166, props: r338, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e229, t166, r338 = {}) {
  return b2.getStyleSheet({ name: e229, theme: this.theme, params: t166, props: r338, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e229) {
  this._loadingStyles.add(e229);
}, onStyleUpdated(e229) {
  this._loadingStyles.add(e229);
}, onStyleLoaded(e229, { name: t166 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t166), N2.emit(`theme:${t166}:load`, e229), !this._loadingStyles.size && N2.emit("theme:load"));
} };
function Ve(...e229) {
  let t166 = w2(S.getPreset(), ...e229);
  return S.setPreset(t166), t166;
}
function Ae(e229) {
  return w3().surfacePalette(e229).update().preset;
}

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css36, options = {}) {
    let isLoaded = false;
    let cssRef = css36;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css36;
        const HEAD = this.document.head;
        _t(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        A(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style11, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m2(style11, {
      dt: E2
    })}`);
    return computedStyle ? this.useStyle.use(Y(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style11 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style11}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m2(this.css, {
        dt: E2
      });
      const _style = Y(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k13, v11]) => acc.push(`${k13}="${v11}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css36 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m2(this.style, {
        dt: E2
      })}`;
      const _style = Y(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k13, v11]) => acc.push(`${k13}="${v11}"`) && acc, []).join(" ");
      css36.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css36.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N2.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    N2.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style11
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style11);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : (
    /* istanbul ignore next */
    []
  ));
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class _BaseComponent {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  $parentInstance = inject(PARENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  parent = this.$params.parent;
  cn = f;
  _themeScopedListener;
  themeChangeListenerMap = /* @__PURE__ */ new Map();
  /******************** Inputs ********************/
  /**
   * Defines scoped design tokens of the component.
   * @defaultValue undefined
   * @group Props
   */
  dt = input(...ngDevMode ? [void 0, {
    debugName: "dt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  unstyled = input(...ngDevMode ? [void 0, {
    debugName: "unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to pass attributes to DOM elements inside the component.
   * @defaultValue undefined
   * @group Props
   */
  pt = input(...ngDevMode ? [void 0, {
    debugName: "pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Used to configure passthrough(pt) options of the component.
   * @group Props
   * @defaultValue undefined
   */
  ptOptions = input(...ngDevMode ? [void 0, {
    debugName: "ptOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /******************** Computed ********************/
  $attrSelector = s3("pc");
  get $name() {
    return this["componentName"] || "UnknownComponent";
  }
  get $hostName() {
    return this["hostName"];
  }
  get $el() {
    return this.el?.nativeElement;
  }
  directivePT = signal(void 0, ...ngDevMode ? [{
    debugName: "directivePT"
  }] : (
    /* istanbul ignore next */
    []
  ));
  directiveUnstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "directiveUnstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $unstyled = computed(() => {
    return this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? false;
  }, ...ngDevMode ? [{
    debugName: "$unstyled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $pt = computed(() => {
    return m2(this.pt() || this.directivePT(), this.$params);
  }, ...ngDevMode ? [{
    debugName: "$pt"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get $globalPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => m2(value, this.$params));
  }
  get $defaultPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || m2(value, this.$params));
  }
  get $style() {
    return __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
  }
  get $styleOptions() {
    return {
      nonce: this.config?.csp().nonce
    };
  }
  get $params() {
    const parentInstance = this._getHostInstance(this) || this.$parentInstance;
    return {
      instance: this,
      parent: {
        instance: parentInstance
      }
    };
  }
  /******************** Lifecycle Hooks ********************/
  onInit() {
  }
  onChanges(changes) {
  }
  onDoCheck() {
  }
  onAfterContentInit() {
  }
  onAfterContentChecked() {
  }
  onAfterViewInit() {
  }
  onAfterViewChecked() {
  }
  onDestroy() {
  }
  /******************** Angular Lifecycle Hooks ********************/
  constructor() {
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_themeScopedListener");
      });
    });
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (!this.$unstyled()) {
          this._loadCoreStyles();
          this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_loadCoreStyles");
      });
    });
    this._hook("onBeforeInit");
  }
  /**
   * ⚠ Do not override ngOnInit!
   *
   * Use 'onInit()' in subclasses instead.
   */
  ngOnInit() {
    this._loadCoreStyles();
    this._loadStyles();
    this.onInit();
    this._hook("onInit");
  }
  /**
   * ⚠ Do not override ngOnChanges!
   *
   * Use 'onChanges(changes: SimpleChanges)' in subclasses instead.
   */
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  /**
   * ⚠ Do not override ngDoCheck!
   *
   * Use 'onDoCheck()' in subclasses instead.
   */
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  /**
   * ⚠ Do not override ngAfterContentInit!
   *
   * Use 'onAfterContentInit()' in subclasses instead.
   */
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  /**
   * ⚠ Do not override ngAfterContentChecked!
   *
   * Use 'onAfterContentChecked()' in subclasses instead.
   */
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  /**
   * ⚠ Do not override ngAfterViewInit!
   *
   * Use 'onAfterViewInit()' in subclasses instead.
   */
  ngAfterViewInit() {
    this.$el?.setAttribute(this.$attrSelector, "");
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  /**
   * ⚠ Do not override ngAfterViewChecked!
   *
   * Use 'onAfterViewChecked()' in subclasses instead.
   */
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  /**
   * ⚠ Do not override ngOnDestroy!
   *
   * Use 'onDestroy()' in subclasses instead.
   */
  ngOnDestroy() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    this._hook("onDestroy");
  }
  /******************** Methods ********************/
  _mergeProps(fn, ...args) {
    return c3(fn) ? fn(...args) : w(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    return this[name] || this._getHostInstance(this)?.[name];
  }
  _getOptionValue(options, key = "", params = {}) {
    return F(options, key, params);
  }
  _hook(hookName, ...args) {
    if (!this.$hostName) {
      const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
      const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
      selfHook?.(...args);
      defaultHook?.(...args);
    }
  }
  /********** Load Styles **********/
  _load() {
    if (!base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      base.setLoadedStyleName("base");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener("_load", () => this._load());
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    s2(globalCSS) && this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions));
  }
  _loadCoreStyles() {
    if (!base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    if (this.$unstyled() || this.config?.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style11
      } = this.$style?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, this.$styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, this.$styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style11);
      S.setLoadedStyleName("common");
    }
    if (!S.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      const {
        css: css36,
        style: style11
      } = this.$style?.getComponentTheme?.() || {};
      this.$style?.load(css36, __spreadValues({
        name: `${this.$style?.name}-variables`
      }, this.$styleOptions));
      this.$style?.loadStyle(__spreadValues({
        name: `${this.$style?.name}-style`
      }, this.$styleOptions), style11);
      S.setLoadedStyleName(this.$style?.name);
    }
    if (!S.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      S.setLoadedStyleName("layer-order");
    }
  }
  _loadScopedThemeStyles(preset) {
    const {
      css: css36
    } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
    const scopedStyle = this.$style?.load(css36, __spreadValues({
      name: `${this.$attrSelector}-${this.$style?.name}`
    }, this.$styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.scopedStyleEl?.remove();
  }
  _themeChangeListener(id, callback = () => {
  }) {
    this._offThemeChangeListener(id);
    base.clearLoadedStyleNames();
    const hold = callback.bind(this);
    this.themeChangeListenerMap.set(id, hold);
    N2.on("theme:change", hold);
  }
  _removeThemeListeners() {
    this._offThemeChangeListener("_themeScopedListener");
    this._offThemeChangeListener("_loadCoreStyles");
    this._offThemeChangeListener("_load");
  }
  _offThemeChangeListener(id) {
    if (this.themeChangeListenerMap.has(id)) {
      N2.off("theme:change", this.themeChangeListenerMap.get(id));
      this.themeChangeListenerMap.delete(id);
    }
  }
  /********** Passthrough **********/
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const {
      mergeSections = true,
      mergeProps: useMergeProps = false
    } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
    const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
    const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), {
      global: global || {}
    }));
    const datasets = this._getPTDatasets(key);
    return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
  }
  _getPTDatasets(key = "") {
    const datasetPrefix = "data-pc-";
    const isExtended = key === "root" && s2(this.$pt()?.["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: g(isExtended ? this.$pt()?.["data-pc-section"] : this.$name)
    }, isExtended && {
      [`${datasetPrefix}extend`]: g(this.$name)
    }), {
      [`${this.$attrSelector}`]: ""
      // @todo - use `data-pc-id: this.$attrSelector` instead.
    })), {
      [`${datasetPrefix}section`]: g(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return a(value) || C2(value) ? {
      class: value
    } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = g(key);
      const _cKey = g(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
    };
    return pt?.hasOwnProperty("_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    const fn = (value) => callback?.call(this, value, key, params);
    if (pt?.hasOwnProperty("_usept")) {
      const {
        mergeSections = true,
        mergeProps: useMergeProps = false
      } = pt["_usept"] || this.config?.["ptOptions"]() || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (a(value)) return value;
      else if (a(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
    }
    return fn(pt);
  }
  _useGlobalPT(callback, key, params) {
    return this._usePT(this.$globalPT, callback, key, params);
  }
  _useDefaultPT(callback, key, params) {
    return this._usePT(this.$defaultPT, callback, key, params);
  }
  /******************** Exposed API ********************/
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = w(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? f(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      const base2 = this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, base2), self);
    }
    return void 0;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
    inputs: {
      dt: [1, "dt"],
      unstyled: [1, "unstyled"],
      pt: [1, "pt"],
      ptOptions: [1, "ptOptions"]
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], () => [], {
    dt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dt",
        required: false
      }]
    }],
    unstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unstyled",
        required: false
      }]
    }],
    pt: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pt",
        required: false
      }]
    }],
    ptOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptOptions",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $filled = computed(() => s2(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "required"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-bind.mjs
var Bind = class _Bind {
  el;
  renderer;
  /**
   * Dynamic attributes, properties, and event listeners to be applied to the host element.
   * @group Props
   */
  pBind = input(void 0, ...ngDevMode ? [{
    debugName: "pBind"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _attrs = signal(void 0, ...ngDevMode ? [{
    debugName: "_attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{
    debugName: "attrs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{
    debugName: "styles"
  }] : (
    /* istanbul ignore next */
    []
  ));
  classes = computed(() => f(this.attrs()?.class), ...ngDevMode ? [{
    debugName: "classes"
  }] : (
    /* istanbul ignore next */
    []
  ));
  listeners = [];
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    effect(() => {
      const _a = this.attrs() || {}, {
        style: style11,
        class: className
      } = _a, rest = __objRest(_a, [
        "style",
        "class"
      ]);
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("on") && typeof value === "function") {
          const eventName = key.slice(2).toLowerCase();
          if (!this.listeners.some((l72) => l72.eventName === eventName)) {
            const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
            this.listeners.push({
              eventName,
              unlisten
            });
          }
        } else if (value === null || value === void 0) {
          this.renderer.removeAttribute(this.el.nativeElement, key);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) {
            this.el.nativeElement[key] = value;
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!k(this._attrs(), attrs)) {
      this._attrs.set(attrs);
    }
  }
  clearListeners() {
    this.listeners.forEach(({
      unlisten
    }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Bind)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Bind,
    selectors: [["", "pBind", ""]],
    hostVars: 4,
    hostBindings: function Bind_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styles());
        \u0275\u0275classMap(ctx.classes());
      }
    },
    inputs: {
      pBind: [1, "pBind"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
    type: Directive,
    args: [{
      selector: "[pBind]",
      standalone: true,
      host: {
        "[style]": "styles()",
        "[class]": "classes()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    pBind: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBind",
        required: false
      }]
    }]
  });
})();
var BindModule = class _BindModule {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BindModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BindModule,
    imports: [Bind],
    exports: [Bind]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
    type: NgModule,
    args: [{
      imports: [Bind],
      exports: [Bind]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/editor/index.mjs
var style2 = "\n    /*!\n* Quill Editor v1.3.3\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n    .ql-container {\n        box-sizing: border-box;\n        font-family: Helvetica, Arial, sans-serif;\n        font-size: 13px;\n        height: 100%;\n        margin: 0;\n        position: relative;\n    }\n    .ql-container.ql-disabled .ql-tooltip {\n        visibility: hidden;\n    }\n    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n        pointer-events: none;\n    }\n    .ql-clipboard {\n        inset-inline-start: -100000px;\n        height: 1px;\n        overflow-y: hidden;\n        position: absolute;\n        top: 50%;\n    }\n    .ql-clipboard p {\n        margin: 0;\n        padding: 0;\n    }\n    .ql-editor {\n        box-sizing: border-box;\n        line-height: 1.42;\n        height: 100%;\n        outline: none;\n        overflow-y: auto;\n        padding: 12px 15px;\n        tab-size: 4;\n        -moz-tab-size: 4;\n        text-align: left;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n    }\n    .ql-editor > * {\n        cursor: text;\n    }\n    .ql-editor p,\n    .ql-editor ol,\n    .ql-editor ul,\n    .ql-editor pre,\n    .ql-editor blockquote,\n    .ql-editor h1,\n    .ql-editor h2,\n    .ql-editor h3,\n    .ql-editor h4,\n    .ql-editor h5,\n    .ql-editor h6 {\n        margin: 0;\n        padding: 0;\n        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol,\n    .ql-editor ul {\n        padding-inline-start: 1.5rem;\n    }\n    .ql-editor ol > li,\n    .ql-editor ul > li {\n        list-style-type: none;\n    }\n    .ql-editor ul > li::before {\n        content: '\\2022';\n    }\n    .ql-editor ul[data-checked='true'],\n    .ql-editor ul[data-checked='false'] {\n        pointer-events: none;\n    }\n    .ql-editor ul[data-checked='true'] > li *,\n    .ql-editor ul[data-checked='false'] > li * {\n        pointer-events: all;\n    }\n    .ql-editor ul[data-checked='true'] > li::before,\n    .ql-editor ul[data-checked='false'] > li::before {\n        color: #777;\n        cursor: pointer;\n        pointer-events: all;\n    }\n    .ql-editor ul[data-checked='true'] > li::before {\n        content: '\\2611';\n    }\n    .ql-editor ul[data-checked='false'] > li::before {\n        content: '\\2610';\n    }\n    .ql-editor li::before {\n        display: inline-block;\n        white-space: nowrap;\n        width: 1.2rem;\n    }\n    .ql-editor li:not(.ql-direction-rtl)::before {\n        margin-inline-start: -1.5rem;\n        margin-inline-end: 0.3rem;\n        text-align: right;\n    }\n    .ql-editor li.ql-direction-rtl::before {\n        margin-inline-start: 0.3rem;\n        margin-inline-end: -1.5rem;\n    }\n    .ql-editor ol li:not(.ql-direction-rtl),\n    .ql-editor ul li:not(.ql-direction-rtl) {\n        padding-inline-start: 1.5rem;\n    }\n    .ql-editor ol li.ql-direction-rtl,\n    .ql-editor ul li.ql-direction-rtl {\n        padding-inline-end: 1.5rem;\n    }\n    .ql-editor ol li {\n        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n        counter-increment: list-0;\n    }\n    .ql-editor ol li:before {\n        content: counter(list-0, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-1 {\n        counter-increment: list-1;\n    }\n    .ql-editor ol li.ql-indent-1:before {\n        content: counter(list-1, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-1 {\n        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-2 {\n        counter-increment: list-2;\n    }\n    .ql-editor ol li.ql-indent-2:before {\n        content: counter(list-2, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-2 {\n        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-3 {\n        counter-increment: list-3;\n    }\n    .ql-editor ol li.ql-indent-3:before {\n        content: counter(list-3, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-3 {\n        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-4 {\n        counter-increment: list-4;\n    }\n    .ql-editor ol li.ql-indent-4:before {\n        content: counter(list-4, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-4 {\n        counter-reset: list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-5 {\n        counter-increment: list-5;\n    }\n    .ql-editor ol li.ql-indent-5:before {\n        content: counter(list-5, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-5 {\n        counter-reset: list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-6 {\n        counter-increment: list-6;\n    }\n    .ql-editor ol li.ql-indent-6:before {\n        content: counter(list-6, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-6 {\n        counter-reset: list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-7 {\n        counter-increment: list-7;\n    }\n    .ql-editor ol li.ql-indent-7:before {\n        content: counter(list-7, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-7 {\n        counter-reset: list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-8 {\n        counter-increment: list-8;\n    }\n    .ql-editor ol li.ql-indent-8:before {\n        content: counter(list-8, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-8 {\n        counter-reset: list-9;\n    }\n    .ql-editor ol li.ql-indent-9 {\n        counter-increment: list-9;\n    }\n    .ql-editor ol li.ql-indent-9:before {\n        content: counter(list-9, decimal) '. ';\n    }\n    .ql-editor .ql-video {\n        display: block;\n        max-width: 100%;\n    }\n    .ql-editor .ql-video.ql-align-center {\n        margin: 0 auto;\n    }\n    .ql-editor .ql-video.ql-align-right {\n        margin: 0 0 0 auto;\n    }\n    .ql-editor .ql-bg-black {\n        background: #000;\n    }\n    .ql-editor .ql-bg-red {\n        background: #e60000;\n    }\n    .ql-editor .ql-bg-orange {\n        background: #f90;\n    }\n    .ql-editor .ql-bg-yellow {\n        background: #ff0;\n    }\n    .ql-editor .ql-bg-green {\n        background: #008a00;\n    }\n    .ql-editor .ql-bg-blue {\n        background: #06c;\n    }\n    .ql-editor .ql-bg-purple {\n        background: #93f;\n    }\n    .ql-editor .ql-color-white {\n        color: #fff;\n    }\n    .ql-editor .ql-color-red {\n        color: #e60000;\n    }\n    .ql-editor .ql-color-orange {\n        color: #f90;\n    }\n    .ql-editor .ql-color-yellow {\n        color: #ff0;\n    }\n    .ql-editor .ql-color-green {\n        color: #008a00;\n    }\n    .ql-editor .ql-color-blue {\n        color: #06c;\n    }\n    .ql-editor .ql-color-purple {\n        color: #93f;\n    }\n    .ql-editor .ql-font-serif {\n        font-family:\n            Georgia,\n            Times New Roman,\n            serif;\n    }\n    .ql-editor .ql-font-monospace {\n        font-family:\n            Monaco,\n            Courier New,\n            monospace;\n    }\n    .ql-editor .ql-size-small {\n        font-size: 0.75rem;\n    }\n    .ql-editor .ql-size-large {\n        font-size: 1.5rem;\n    }\n    .ql-editor .ql-size-huge {\n        font-size: 2.5rem;\n    }\n    .ql-editor .ql-direction-rtl {\n        direction: rtl;\n        text-align: inherit;\n    }\n    .ql-editor .ql-align-center {\n        text-align: center;\n    }\n    .ql-editor .ql-align-justify {\n        text-align: justify;\n    }\n    .ql-editor .ql-align-right {\n        text-align: right;\n    }\n    .ql-editor.ql-blank::before {\n        color: dt('form.field.placeholder.color');\n        content: attr(data-placeholder);\n        font-style: italic;\n        inset-inline-start: 15px;\n        pointer-events: none;\n        position: absolute;\n        inset-inline-end: 15px;\n    }\n    .ql-snow.ql-toolbar:after,\n    .ql-snow .ql-toolbar:after {\n        clear: both;\n        content: '';\n        display: table;\n    }\n    .ql-snow.ql-toolbar button,\n    .ql-snow .ql-toolbar button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        display: inline-block;\n        float: left;\n        height: 24px;\n        padding-block: 3px;\n        padding-inline: 5px;\n        width: 28px;\n    }\n    .ql-snow.ql-toolbar button svg,\n    .ql-snow .ql-toolbar button svg {\n        float: left;\n        height: 100%;\n    }\n    .ql-snow.ql-toolbar button:active:hover,\n    .ql-snow .ql-toolbar button:active:hover {\n        outline: none;\n    }\n    .ql-snow.ql-toolbar input.ql-image[type='file'],\n    .ql-snow .ql-toolbar input.ql-image[type='file'] {\n        display: none;\n    }\n    .ql-snow.ql-toolbar button:hover,\n    .ql-snow .ql-toolbar button:hover,\n    .ql-snow.ql-toolbar button:focus,\n    .ql-snow .ql-toolbar button:focus,\n    .ql-snow.ql-toolbar button.ql-active,\n    .ql-snow .ql-toolbar button.ql-active,\n    .ql-snow.ql-toolbar .ql-picker-label:hover,\n    .ql-snow .ql-toolbar .ql-picker-label:hover,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active,\n    .ql-snow.ql-toolbar .ql-picker-item:hover,\n    .ql-snow .ql-toolbar .ql-picker-item:hover,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n        color: #06c;\n    }\n    .ql-snow.ql-toolbar button:hover .ql-fill,\n    .ql-snow .ql-toolbar button:hover .ql-fill,\n    .ql-snow.ql-toolbar button:focus .ql-fill,\n    .ql-snow .ql-toolbar button:focus .ql-fill,\n    .ql-snow.ql-toolbar button.ql-active .ql-fill,\n    .ql-snow .ql-toolbar button.ql-active .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n        fill: #06c;\n    }\n    .ql-snow.ql-toolbar button:hover .ql-stroke,\n    .ql-snow .ql-toolbar button:hover .ql-stroke,\n    .ql-snow.ql-toolbar button:focus .ql-stroke,\n    .ql-snow .ql-toolbar button:focus .ql-stroke,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n    .ql-snow .ql-toolbar button.ql-active .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n        stroke: #06c;\n    }\n    @media (pointer: coarse) {\n        .ql-snow.ql-toolbar button:hover:not(.ql-active),\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n            color: #444;\n        }\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n            fill: #444;\n        }\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n            stroke: #444;\n        }\n    }\n    .ql-snow {\n        box-sizing: border-box;\n    }\n    .ql-snow * {\n        box-sizing: border-box;\n    }\n    .ql-snow .ql-hidden {\n        display: none;\n    }\n    .ql-snow .ql-out-bottom,\n    .ql-snow .ql-out-top {\n        visibility: hidden;\n    }\n    .ql-snow .ql-tooltip {\n        position: absolute;\n        transform: translateY(10px);\n    }\n    .ql-snow .ql-tooltip a {\n        cursor: pointer;\n        text-decoration: none;\n    }\n    .ql-snow .ql-tooltip.ql-flip {\n        transform: translateY(-10px);\n    }\n    .ql-snow .ql-formats {\n        display: inline-block;\n        vertical-align: middle;\n    }\n    .ql-snow .ql-formats:after {\n        clear: both;\n        content: '';\n        display: table;\n    }\n    .ql-snow .ql-stroke {\n        fill: none;\n        stroke: #444;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 2;\n    }\n    .ql-snow .ql-stroke-miter {\n        fill: none;\n        stroke: #444;\n        stroke-miterlimit: 10;\n        stroke-width: 2;\n    }\n    .ql-snow .ql-fill,\n    .ql-snow .ql-stroke.ql-fill {\n        fill: #444;\n    }\n    .ql-snow .ql-empty {\n        fill: none;\n    }\n    .ql-snow .ql-even {\n        fill-rule: evenodd;\n    }\n    .ql-snow .ql-thin,\n    .ql-snow .ql-stroke.ql-thin {\n        stroke-width: 1;\n    }\n    .ql-snow .ql-transparent {\n        opacity: 0.4;\n    }\n    .ql-snow .ql-direction svg:last-child {\n        display: none;\n    }\n    .ql-snow .ql-direction.ql-active svg:last-child {\n        display: inline;\n    }\n    .ql-snow .ql-direction.ql-active svg:first-child {\n        display: none;\n    }\n    .ql-snow .ql-editor h1 {\n        font-size: 2rem;\n    }\n    .ql-snow .ql-editor h2 {\n        font-size: 1.5rem;\n    }\n    .ql-snow .ql-editor h3 {\n        font-size: 1.17rem;\n    }\n    .ql-snow .ql-editor h4 {\n        font-size: 1rem;\n    }\n    .ql-snow .ql-editor h5 {\n        font-size: 0.83rem;\n    }\n    .ql-snow .ql-editor h6 {\n        font-size: 0.67rem;\n    }\n    .ql-snow .ql-editor a {\n        text-decoration: underline;\n    }\n    .ql-snow .ql-editor blockquote {\n        border-inline-start: 4px solid #ccc;\n        margin-block-end: 5px;\n        margin-block-start: 5px;\n        padding-inline-start: 16px;\n    }\n    .ql-snow .ql-editor code,\n    .ql-snow .ql-editor pre {\n        background: #f0f0f0;\n        border-radius: 3px;\n    }\n    .ql-snow .ql-editor pre {\n        white-space: pre-wrap;\n        margin-block-end: 5px;\n        margin-block-start: 5px;\n        padding: 5px 10px;\n    }\n    .ql-snow .ql-editor code {\n        font-size: 85%;\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-editor pre.ql-syntax {\n        background: #23241f;\n        color: #f8f8f2;\n        overflow: visible;\n    }\n    .ql-snow .ql-editor img {\n        max-width: 100%;\n    }\n    .ql-snow .ql-picker {\n        color: #444;\n        display: inline-block;\n        float: left;\n        inset-inline-start: 0;\n        font-size: 14px;\n        font-weight: 500;\n        height: 24px;\n        position: relative;\n        vertical-align: middle;\n    }\n    .ql-snow .ql-picker-label {\n        cursor: pointer;\n        display: inline-block;\n        height: 100%;\n        padding-inline-start: 8px;\n        padding-inline-end: 2px;\n        position: relative;\n        width: 100%;\n    }\n    .ql-snow .ql-picker-label::before {\n        display: inline-block;\n        line-height: 22px;\n    }\n    .ql-snow .ql-picker-options {\n        background: #fff;\n        display: none;\n        min-width: 100%;\n        padding: 4px 8px;\n        position: absolute;\n        white-space: nowrap;\n    }\n    .ql-snow .ql-picker-options .ql-picker-item {\n        cursor: pointer;\n        display: block;\n        padding-block-end: 5px;\n        padding-block-start: 5px;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        color: #ccc;\n        z-index: 2;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n        fill: #ccc;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n        stroke: #ccc;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        display: block;\n        margin-block-start: -1px;\n        top: 100%;\n        z-index: 1;\n    }\n    .ql-snow .ql-color-picker,\n    .ql-snow .ql-icon-picker {\n        width: 28px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-label,\n    .ql-snow .ql-icon-picker .ql-picker-label {\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-label svg,\n    .ql-snow .ql-icon-picker .ql-picker-label svg {\n        inset-inline-end: 4px;\n    }\n    .ql-snow .ql-icon-picker .ql-picker-options {\n        padding: 4px 0;\n    }\n    .ql-snow .ql-icon-picker .ql-picker-item {\n        height: 24px;\n        width: 24px;\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-options {\n        padding: 3px 5px;\n        width: 152px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-item {\n        border: 1px solid transparent;\n        float: left;\n        height: 16px;\n        margin: 2px;\n        padding: 0;\n        width: 16px;\n    }\n    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n        position: absolute;\n        margin-block-start: -9px;\n        inset-inline-end: 0;\n        top: 50%;\n        width: 18px;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n        content: attr(data-label);\n    }\n    .ql-snow .ql-picker.ql-header {\n        width: 98px;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item::before {\n        content: 'Normal';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n        content: 'Heading 1';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n        content: 'Heading 2';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n        content: 'Heading 3';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n        content: 'Heading 4';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n        content: 'Heading 5';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n        content: 'Heading 6';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n        font-size: 2rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n        font-size: 1.5rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n        font-size: 1.17rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n        font-size: 1rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n        font-size: 0.83rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n        font-size: 0.67rem;\n    }\n    .ql-snow .ql-picker.ql-font {\n        width: 108px;\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item::before {\n        content: 'Sans Serif';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n        content: 'Serif';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n        content: 'Monospace';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n        font-family:\n            Georgia,\n            Times New Roman,\n            serif;\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n        font-family:\n            Monaco,\n            Courier New,\n            monospace;\n    }\n    .ql-snow .ql-picker.ql-size {\n        width: 98px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item::before {\n        content: 'Normal';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n        content: 'Small';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n        content: 'Large';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n        content: 'Huge';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n        font-size: 10px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n        font-size: 18px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n        font-size: 32px;\n    }\n    .ql-snow .ql-color-picker.ql-background .ql-picker-item {\n        background: #fff;\n    }\n    .ql-snow .ql-color-picker.ql-color .ql-picker-item {\n        background: #000;\n    }\n    .ql-toolbar.ql-snow {\n        border: 1px solid #ccc;\n        box-sizing: border-box;\n        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n        padding: 8px;\n    }\n    .ql-toolbar.ql-snow .ql-formats {\n        margin-inline-end: 15px;\n    }\n    .ql-toolbar.ql-snow .ql-picker-label {\n        border: 1px solid transparent;\n    }\n    .ql-toolbar.ql-snow .ql-picker-options {\n        border: 1px solid transparent;\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n    }\n    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        border-color: #ccc;\n    }\n    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        border-color: #ccc;\n    }\n    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n        border-color: #000;\n    }\n    .ql-toolbar.ql-snow + .ql-container.ql-snow {\n        border-block-start: 0;\n    }\n    .ql-snow .ql-tooltip {\n        background: #fff;\n        border: 1px solid #ccc;\n        box-shadow: 0 0 5px #ddd;\n        color: #444;\n        padding: 5px 12px;\n        white-space: nowrap;\n    }\n    .ql-snow .ql-tooltip::before {\n        content: 'Visit URL:';\n        line-height: 26px;\n        margin-inline-end: 8px;\n    }\n    .ql-snow .ql-tooltip input[type='text'] {\n        display: none;\n        border: 1px solid #ccc;\n        font-size: 13px;\n        height: 26px;\n        margin: 0;\n        padding: 3px 5px;\n        width: 170px;\n    }\n    .ql-snow .ql-tooltip a.ql-preview {\n        display: inline-block;\n        max-width: 200px;\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        vertical-align: top;\n    }\n    .ql-snow .ql-tooltip a.ql-action::after {\n        border-inline-end: 1px solid #ccc;\n        content: 'Edit';\n        margin-inline-start: 16px;\n        padding-inline-end: 8px;\n    }\n    .ql-snow .ql-tooltip a.ql-remove::before {\n        content: 'Remove';\n        margin-inline-start: 8px;\n    }\n    .ql-snow .ql-tooltip a {\n        line-height: 26px;\n    }\n    .ql-snow .ql-tooltip.ql-editing a.ql-preview,\n    .ql-snow .ql-tooltip.ql-editing a.ql-remove {\n        display: none;\n    }\n    .ql-snow .ql-tooltip.ql-editing input[type='text'] {\n        display: inline-block;\n    }\n    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n        border-inline-end: 0;\n        content: 'Save';\n        padding-inline-end: 0;\n    }\n    .ql-snow .ql-tooltip[data-mode='link']::before {\n        content: 'Enter link:';\n    }\n    .ql-snow .ql-tooltip[data-mode='formula']::before {\n        content: 'Enter formula:';\n    }\n    .ql-snow .ql-tooltip[data-mode='video']::before {\n        content: 'Enter video:';\n    }\n    .ql-snow a {\n        color: #06c;\n    }\n    .ql-container.ql-snow {\n        border: 1px solid #ccc;\n    }\n\n    .p-editor {\n        display: block;\n    }\n\n    .p-editor .p-editor-toolbar {\n        background: dt('editor.toolbar.background');\n        border-start-end-radius: dt('editor.toolbar.border.radius');\n        border-start-start-radius: dt('editor.toolbar.border.radius');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow {\n        border: 1px solid dt('editor.toolbar.border.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {\n        stroke: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-fill {\n        fill: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {\n        border: 0 none;\n        color: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {\n        color: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {\n        stroke: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {\n        fill: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        color: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n        stroke: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n        fill: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        background: dt('editor.overlay.background');\n        border: 1px solid dt('editor.overlay.border.color');\n        box-shadow: dt('editor.overlay.shadow');\n        border-radius: dt('editor.overlay.border.radius');\n        padding: dt('editor.overlay.padding');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {\n        color: dt('editor.overlay.option.color');\n        border-radius: dt('editor.overlay.option.border.radius');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {\n        background: dt('editor.overlay.option.focus.background');\n        color: dt('editor.overlay.option.focus.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {\n        padding: dt('editor.overlay.option.padding');\n    }\n\n    .p-editor .p-editor-content {\n        border-end-end-radius: dt('editor.content.border.radius');\n        border-end-start-radius: dt('editor.content.border.radius');\n    }\n\n    .p-editor .p-editor-content.ql-snow {\n        border: 1px solid dt('editor.content.border.color');\n    }\n\n    .p-editor .p-editor-content .ql-editor {\n        background: dt('editor.content.background');\n        color: dt('editor.content.color');\n        border-end-end-radius: dt('editor.content.border.radius');\n        border-end-start-radius: dt('editor.content.border.radius');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover,\n    .p-editor .ql-snow.ql-toolbar button:focus {\n        color: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {\n        stroke: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,\n    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {\n        fill: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {\n        color: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {\n        stroke: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {\n        fill: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {\n        color: dt('editor.toolbar.item.active.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-editor.mjs
var _c02 = ["header"];
var _c1 = [[["p-header"]]];
var _c2 = ["p-header"];
function Editor_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Editor_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Editor_div_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("toolbar"));
    \u0275\u0275property("pBind", ctx_r0.ptm("toolbar"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Editor_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4)(2, "select", 5)(3, "option", 6);
    \u0275\u0275text(4, "Heading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 7);
    \u0275\u0275text(6, "Subheading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 8);
    \u0275\u0275text(8, "Normal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 9)(10, "option", 8);
    \u0275\u0275text(11, "Sans Serif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 10);
    \u0275\u0275text(13, "Serif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15, "Monospace");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "span", 4);
    \u0275\u0275element(17, "button", 12)(18, "button", 13)(19, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 4);
    \u0275\u0275element(21, "select", 15)(22, "select", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 4);
    \u0275\u0275element(24, "button", 17)(25, "button", 18);
    \u0275\u0275elementStart(26, "select", 19);
    \u0275\u0275element(27, "option", 8);
    \u0275\u0275elementStart(28, "option", 20);
    \u0275\u0275text(29, "center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 21);
    \u0275\u0275text(31, "right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 22);
    \u0275\u0275text(33, "justify");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "span", 4);
    \u0275\u0275element(35, "button", 23)(36, "button", 24)(37, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 4);
    \u0275\u0275element(39, "button", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("toolbar"));
    \u0275\u0275property("pBind", ctx_r0.ptm("toolbar"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("select"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("bold"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("italic"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("underline"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("color"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("background"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("list"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("list"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("select"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("option"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("link"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("image"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("codeBlock"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("formats"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r0.ptm("clean"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-editor", {
    "p-invalid": instance.invalid()
  }],
  toolbar: "p-editor-toolbar",
  content: "p-editor-content"
};
var EditorStyle = class _EditorStyle extends BaseStyle {
  name = "editor";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EditorStyle_BaseFactory;
    return function EditorStyle_Factory(__ngFactoryType__) {
      return (\u0275EditorStyle_BaseFactory || (\u0275EditorStyle_BaseFactory = \u0275\u0275getInheritedFactory(_EditorStyle)))(__ngFactoryType__ || _EditorStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _EditorStyle,
    factory: _EditorStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorStyle, [{
    type: Injectable
  }], null, null);
})();
var EditorClasses;
(function(EditorClasses2) {
  EditorClasses2["root"] = "p-editor";
  EditorClasses2["toolbar"] = "p-editor-toolbar";
  EditorClasses2["content"] = "p-editor-content";
})(EditorClasses || (EditorClasses = {}));
var EDITOR_INSTANCE = new InjectionToken("EDITOR_INSTANCE");
var EDITOR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Editor),
  multi: true
};
var Editor = class _Editor extends BaseEditableHolder {
  componentName = "Editor";
  $pcEditor = inject(EDITOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Inline style of the container.
   * @group Props
   */
  style;
  /**
   * Style class of the container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Placeholder text to show when editor is empty.
   * @group Props
   */
  placeholder;
  /**
   * Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options.
   * @group Props
   */
  formats;
  /**
   * Modules configuration of Editor, see [here](https://quilljs.com/docs/modules/) for available options.
   * @group Props
   */
  modules;
  /**
   * DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.
   * @group Props
   */
  bounds;
  /**
   * DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..
   * @group Props
   */
  scrollingContainer;
  /**
   * Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.
   * @group Props
   */
  debug;
  /**
   * Whether to instantiate the editor to read-only mode.
   * @group Props
   */
  get readonly() {
    return this._readonly;
  }
  set readonly(val) {
    this._readonly = val;
    if (this.quill) {
      if (this._readonly) this.quill.disable();
      else this.quill.enable();
    }
  }
  /**
   * Callback to invoke when the quill modules are loaded.
   * @param {EditorInitEvent} event - custom event.
   * @group Emits
   */
  onEditorInit = new EventEmitter();
  /**
   * Callback to invoke when text of editor changes.
   * @param {EditorTextChangeEvent} event - custom event.
   * @group Emits
   */
  onTextChange = new EventEmitter();
  /**
   * Callback to invoke when selection of the text changes.
   * @param {EditorSelectionChangeEvent} event - custom event.
   * @group Emits
   */
  onSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when editor content changes (combines both text and selection changes).
   * @param {EditorChangeEvent} event - custom event.
   * @group Emits
   */
  onEditorChange = new EventEmitter();
  /**
   * Callback to invoke when editor receives focus.
   * @param {EditorFocusEvent} event - custom event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when editor loses focus.
   * @param {EditorBlurEvent} event - custom event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  toolbar;
  value;
  delayedCommand = null;
  _readonly = false;
  quill;
  dynamicQuill;
  /**
   * Custom item template.
   * @group Templates
   */
  headerTemplate;
  templates;
  _headerTemplate;
  get isAttachedQuillEditorToDOM() {
    return this.quillElements?.editorElement?.isConnected;
  }
  quillElements;
  focusListener = null;
  blurListener = null;
  _componentStyle = inject(EditorStyle);
  constructor() {
    super();
    afterNextRender(() => {
      this.initQuillElements();
      this.initQuillEditor();
    });
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    this.value = value;
    if (this.quill) {
      if (value) {
        const command = () => {
          this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2") ? {
            html: this.value
          } : this.value));
        };
        if (this.isAttachedQuillEditorToDOM) {
          command();
        } else {
          this.delayedCommand = command;
        }
      } else {
        const command = () => {
          this.quill.setText("");
        };
        if (this.isAttachedQuillEditorToDOM) {
          command();
        } else {
          this.delayedCommand = command;
        }
      }
    }
  }
  getQuill() {
    return this.quill;
  }
  initQuillEditor() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    if (!this.dynamicQuill) {
      import("./chunk-2J5OJR67.js").then((quillModule) => {
        this.dynamicQuill = quillModule.default;
        this.createQuillEditor();
      }).catch((e229) => console.error(e229.message));
    } else {
      this.createQuillEditor();
    }
  }
  createQuillEditor() {
    this.initQuillElements();
    const {
      toolbarElement,
      editorElement
    } = this.quillElements;
    let defaultModule = {
      toolbar: toolbarElement
    };
    let modules = this.modules ? __spreadValues(__spreadValues({}, defaultModule), this.modules) : defaultModule;
    this.quill = new this.dynamicQuill(editorElement, {
      modules,
      placeholder: this.placeholder,
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      bounds: this.bounds,
      debug: this.debug,
      scrollingContainer: this.scrollingContainer
    });
    const isQuill2 = this.dynamicQuill.version.startsWith("2");
    if (this.value) {
      this.quill.setContents(this.quill.clipboard.convert(isQuill2 ? {
        html: this.value
      } : this.value));
    }
    this.quill.on("text-change", (delta, oldContents, source) => {
      if (source === "user") {
        let html = isQuill2 ? this.quill.getSemanticHTML() : z(editorElement, ".ql-editor")?.innerHTML;
        let text = this.quill.getText().trim();
        if (html === "<p><br></p>") {
          html = null;
        }
        this.onTextChange.emit({
          htmlValue: html,
          textValue: text,
          delta,
          source
        });
        this.onModelChange(html);
        this.onModelTouched();
      }
    });
    this.quill.on("selection-change", (range, oldRange, source) => {
      this.onSelectionChange.emit({
        range,
        oldRange,
        source
      });
    });
    this.quill.on("editor-change", (eventName, ...args) => {
      this.onEditorChange.emit({
        eventName,
        args
      });
    });
    const editorEl = this.quill.root;
    this.focusListener = () => {
      this.onFocus.emit({
        source: "user"
      });
    };
    this.blurListener = () => {
      this.onBlur.emit({
        source: "user"
      });
    };
    editorEl.addEventListener("focus", this.focusListener);
    editorEl.addEventListener("blur", this.blurListener);
    this.onEditorInit.emit({
      editor: this.quill
    });
  }
  onDestroy() {
    if (this.quill && this.quill.root) {
      const editorEl = this.quill.root;
      if (this.focusListener) {
        editorEl.removeEventListener("focus", this.focusListener);
        this.focusListener = null;
      }
      if (this.blurListener) {
        editorEl.removeEventListener("blur", this.blurListener);
        this.blurListener = null;
      }
    }
  }
  initQuillElements() {
    if (!this.quillElements) {
      this.quillElements = {
        editorElement: z(this.el.nativeElement, 'div[data-pc-section="content"]'),
        toolbarElement: z(this.el.nativeElement, 'div[data-pc-section="toolbar"]')
      };
    }
  }
  static \u0275fac = function Editor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Editor)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Editor,
    selectors: [["p-editor"]],
    contentQueries: function Editor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5)(dirIndex, _c02, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.toolbar = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 2,
    hostBindings: function Editor_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      placeholder: "placeholder",
      formats: "formats",
      modules: "modules",
      bounds: "bounds",
      scrollingContainer: "scrollingContainer",
      debug: "debug",
      readonly: "readonly"
    },
    outputs: {
      onEditorInit: "onInit",
      onTextChange: "onTextChange",
      onSelectionChange: "onSelectionChange",
      onEditorChange: "onEditorChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([EDITOR_VALUE_ACCESSOR, EditorStyle, {
      provide: EDITOR_INSTANCE,
      useExisting: _Editor
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Editor
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 6,
    consts: [[3, "class", "pBind", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet"], [1, "ql-formats", 3, "pBind"], [1, "ql-header", 3, "pBind"], ["value", "1", 3, "pBind"], ["value", "2", 3, "pBind"], ["selected", "", 3, "pBind"], [1, "ql-font", 3, "pBind"], ["value", "serif", 3, "pBind"], ["value", "monospace", 3, "pBind"], ["aria-label", "Bold", "type", "button", 1, "ql-bold", 3, "pBind"], ["aria-label", "Italic", "type", "button", 1, "ql-italic", 3, "pBind"], ["aria-label", "Underline", "type", "button", 1, "ql-underline", 3, "pBind"], [1, "ql-color", 3, "pBind"], [1, "ql-background", 3, "pBind"], ["value", "ordered", "aria-label", "Ordered List", "type", "button", 1, "ql-list", 3, "pBind"], ["value", "bullet", "aria-label", "Unordered List", "type", "button", 1, "ql-list", 3, "pBind"], [1, "ql-align", 3, "pBind"], ["value", "center", 3, "pBind"], ["value", "right", 3, "pBind"], ["value", "justify", 3, "pBind"], ["aria-label", "Insert Link", "type", "button", 1, "ql-link", 3, "pBind"], ["aria-label", "Insert Image", "type", "button", 1, "ql-image", 3, "pBind"], ["aria-label", "Insert Code Block", "type", "button", 1, "ql-code-block", 3, "pBind"], ["aria-label", "Remove Styles", "type", "button", 1, "ql-clean", 3, "pBind"]],
    template: function Editor_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275template(0, Editor_div_0_Template, 3, 4, "div", 0)(1, Editor_div_1_Template, 40, 33, "div", 0);
        \u0275\u0275element(2, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.toolbar || ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.toolbar && !ctx.headerTemplate && !ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("ngStyle", ctx.style)("pBind", ctx.ptm("content"));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Editor, [{
    type: Component,
    args: [{
      selector: "p-editor",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [class]="cx('toolbar')" *ngIf="toolbar || headerTemplate || _headerTemplate" [pBind]="ptm('toolbar')">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [class]="cx('toolbar')" *ngIf="!toolbar && !headerTemplate && !_headerTemplate" [pBind]="ptm('toolbar')">
            <span class="ql-formats" [pBind]="ptm('formats')">
                <select class="ql-header" [pBind]="ptm('header')">
                    <option value="1" [pBind]="ptm('option')">Heading</option>
                    <option value="2" [pBind]="ptm('option')">Subheading</option>
                    <option selected [pBind]="ptm('option')">Normal</option>
                </select>
                <select class="ql-font" [pBind]="ptm('select')">
                    <option selected [pBind]="ptm('option')">Sans Serif</option>
                    <option value="serif" [pBind]="ptm('option')">Serif</option>
                    <option value="monospace" [pBind]="ptm('option')">Monospace</option>
                </select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-bold" aria-label="Bold" type="button" [pBind]="ptm('bold')"></button>
                <button class="ql-italic" aria-label="Italic" type="button" [pBind]="ptm('italic')"></button>
                <button class="ql-underline" aria-label="Underline" type="button" [pBind]="ptm('underline')"></button>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <select class="ql-color" [pBind]="ptm('color')"></select>
                <select class="ql-background" [pBind]="ptm('background')"></select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-list" value="ordered" aria-label="Ordered List" type="button" [pBind]="ptm('list')"></button>
                <button class="ql-list" value="bullet" aria-label="Unordered List" type="button" [pBind]="ptm('list')"></button>
                <select class="ql-align" [pBind]="ptm('select')">
                    <option selected [pBind]="ptm('option')"></option>
                    <option value="center" [pBind]="ptm('option')">center</option>
                    <option value="right" [pBind]="ptm('option')">right</option>
                    <option value="justify" [pBind]="ptm('option')">justify</option>
                </select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-link" aria-label="Insert Link" type="button" [pBind]="ptm('link')"></button>
                <button class="ql-image" aria-label="Insert Image" type="button" [pBind]="ptm('image')"></button>
                <button class="ql-code-block" aria-label="Insert Code Block" type="button" [pBind]="ptm('codeBlock')"></button>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-clean" aria-label="Remove Styles" type="button" [pBind]="ptm('clean')"></button>
            </span>
        </div>
        <div [class]="cx('content')" [ngStyle]="style" [pBind]="ptm('content')"></div>
    `,
      providers: [EDITOR_VALUE_ACCESSOR, EditorStyle, {
        provide: EDITOR_INSTANCE,
        useExisting: Editor
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Editor
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    formats: [{
      type: Input
    }],
    modules: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    scrollingContainer: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    onEditorInit: [{
      type: Output,
      args: ["onInit"]
    }],
    onTextChange: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    onEditorChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    toolbar: [{
      type: ContentChild,
      args: [Header]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var EditorModule = class _EditorModule {
  static \u0275fac = function EditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _EditorModule,
    imports: [Editor, SharedModule],
    exports: [Editor, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Editor, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorModule, [{
    type: NgModule,
    args: [{
      imports: [Editor, SharedModule],
      exports: [Editor, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/themes/dist/index.mjs
var a2 = (...t166) => Ve(...t166);
var s4 = (t166) => Ae(t166);

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t2 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c4 = { root: o, panel: r, header: t2, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d3 = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l3 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i3 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c5 = { borderRadius: "{border.radius.sm}" };
var f2 = { padding: "{list.option.padding}" };
var s5 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a3 = { root: o2, overlay: r2, list: d3, option: e2, optionGroup: l3, dropdown: i3, chip: c5, emptyMessage: f2, colorScheme: s5 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t3 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i4 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t3, xl: i4 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c6 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a4 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d4 = { root: r4, dot: o4, sm: e4, lg: c6, xl: a4, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i5 = { color: "{navigation.item.icon.color}" };
var t4 = { root: o7, item: r7, separator: i5 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t5 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a5 = { color: "{text.muted.color}" };
var d5 = { root: o9, body: r9, caption: t5, title: e7, subtitle: a5 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a6 = { padding: "1rem", gap: "0.5rem" };
var i6 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c7 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t6 = { root: r10, content: o10, indicatorList: a6, indicator: i6, colorScheme: c7 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d6 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l4 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i7 = { color: "{form.field.icon.color}" };
var f3 = { root: o11, dropdown: r11, overlay: d6, list: l4, option: e8, clearIcon: i7 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c8 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i8 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s6 = { root: o13, image: r13, icon: e10, removeIcon: c8, colorScheme: i8 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a7 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s7 = { root: r14, preview: o14, panel: e11, colorScheme: a7 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p3 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a8 = { root: o16, content: r16, icon: e13, footer: p3 };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i9 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a9 = { mobileIndent: "1rem" };
var t7 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c9 = { root: o17, list: i9, item: n3, submenu: a9, submenuIcon: t7, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var t8 = "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d7 = { fontWeight: "600" };
var t9 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l5 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c10 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a10 = { fontWeight: "600" };
var n4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i10 = { color: "{primary.color}" };
var s8 = { width: "0.5rem" };
var g2 = { width: "1px", color: "{primary.color}" };
var u2 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b3 = { size: "2rem" };
var p4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m3 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h2 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f4 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css2 = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v3 = { root: o18, header: r18, headerCell: e14, columnTitle: d7, row: t9, bodyCell: l5, footerCell: c10, columnFooter: a10, footer: n4, dropPoint: i10, columnResizer: s8, resizeIndicator: g2, sortIcon: u2, loadingIcon: b3, rowToggleButton: p4, filter: m3, paginatorTop: h2, paginatorBottom: k3, colorScheme: f4, css: css2 };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d8 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c11 = { root: o19, header: r19, content: d8, footer: e15, paginatorTop: t10, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c12 = { gap: "0.5rem", fontWeight: "500" };
var d9 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t11 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a11 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i11 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l6 = { margin: "0.5rem 0 0 0" };
var u3 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s9 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g3 = { margin: "0.5rem 0 0 0" };
var f5 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h3 = { margin: "0.5rem 0 0 0" };
var b4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m4 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p5 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v4 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k4 = { root: o20, panel: r20, header: e16, title: c12, dropdown: d9, inputIcon: n6, selectMonth: t11, selectYear: a11, group: i11, dayView: l6, weekDay: u3, date: s9, monthView: g3, month: f5, yearView: h3, year: b4, buttonbar: m4, timePicker: p5, colorScheme: v4 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a12 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d10 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l7 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a12, title: d10, content: r21, footer: l7 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t12 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d11 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a13 = { padding: "{overlay.modal.padding}" };
var d12 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l8 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a13, title: d12, content: r24, footer: l8 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t13 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d13 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l9 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t13, content: d13 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t14, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t15 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a14 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d14 = { gap: "0.5rem" };
var i12 = { root: r27, header: o27, content: e22, file: t15, fileList: a14, progressbar: n9, basic: d14 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i13 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a15 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d15 = { root: o28, over: i13, in: r28, on: a15 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t16 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c13 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a16 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s10 = { gap: "0.5rem", padding: "1rem" };
var u4 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i14 = { background: "rgba(0, 0, 0, 0.5)" };
var d16 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g4 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f6 = { size: "1.5rem" };
var h4 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l10 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t16, thumbnailNavButton: c13, thumbnailNavButtonIcon: n10, caption: a16, indicatorList: s10, indicatorButton: u4, insetIndicatorList: i14, insetIndicatorButton: d16, closeButton: g4, closeButtonIcon: f6, colorScheme: h4 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l11 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i15 = { root: o31, input: l11 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a17 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i16 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a17, action: i16 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a18 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d17 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f7 = { root: o36, chip: r35, colorScheme: d17 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a19 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t17 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t17 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d18 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t18 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c14 = { root: o40, value: r39, range: t18, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i17 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t19 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l12 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d19, optionGroup: i17, checkmark: t19, emptyMessage: e28, colorScheme: l12 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i18 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a20 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t20 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c15 = { borderColor: "{content.border.color}" };
var d20 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g5 = { root: o42, baseItem: n15, item: i18, overlay: a20, submenu: r41, submenuLabel: t20, submenuIcon: e29, separator: c15, mobileButton: d20 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a21 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i19 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t21 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a21, submenuLabel: i19, separator: t21 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i20 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a22 = { borderColor: "{content.border.color}" };
var t22 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i20, item: n17, submenu: r43, separator: a22, mobileButton: t22 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l13 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s11 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c16 = { root: { borderWidth: "1px" } };
var a23 = { content: { padding: "0" } };
var d21 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u5 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l13, closeIcon: s11, outlined: c16, simple: a23, colorScheme: d21 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a24 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l14 = { size: "1rem" };
var t23 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b5 = { root: e32, meters: r45, label: a24, labelMarker: o46, labelIcon: l14, labelList: t23 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d22 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l15 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i21 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var a25 = { borderRadius: "{border.radius.sm}" };
var c17 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d22, overlay: r46, list: l15, option: i21, optionGroup: e33, chip: a25, clearIcon: f8, emptyMessage: c17 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a26 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a26 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t24 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t24 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t25 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t26 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t26, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d23 = { fontWeight: "600" };
var t27 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a27 = { root: r50, header: o52, toggleableHeader: e36, title: d23, content: t27, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i22 = { indent: "1rem" };
var t28 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a28 = { root: o53, panel: r51, item: n23, submenu: i22, submenuIcon: t28 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a29 = { gap: "0.5rem" };
var d24 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a29, colorScheme: d24 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a30 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a30 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t29 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i23 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s12 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a31 = { root: r60, bar: o62, colorScheme: s12 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d25 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i24 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f9 = { color: "{form.field.icon.color}" };
var c18 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a32 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d25, list: l16, option: i24, optionGroup: e41, clearIcon: f9, checkmark: c18, emptyMessage: a32 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d26 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a33 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a33 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t30 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a34 = { root: o66, track: r64, range: n26, handle: t30, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t31 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a35 = { root: t31 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d27 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t32 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t33 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a36 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c19 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d28 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i25 = { root: o68, separator: r67, step: e43, stepHeader: t33, stepTitle: n28, stepNumber: a36, steppanels: c19, steppanel: d28 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t34 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c20 = { root: o69, separator: r68, itemLink: t34, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c21 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t35, itemIcon: e45, activeBar: c21 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t36 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c22 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a37 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i26 = { root: o71, tablist: r70, tab: t36, tabpanel: n31, navButton: c22, activeBar: e46, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t37 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a38 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c23 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t37, tabPanel: n32, navButton: a38, colorScheme: c23 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a39 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a39 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d29 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d29 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d30 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i27 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a40 = { mobileIndent: "1rem" };
var t38 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c24 = { root: o76, list: i27, item: n34, submenu: a40, submenuIcon: t38, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t39 = { color: "{content.border.color}", size: "2px" };
var d31 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t39 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a41 = { fontWeight: "500", fontSize: "1rem" };
var s13 = { fontWeight: "500", fontSize: "0.875rem" };
var c25 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l17 = { size: "1rem" };
var t40 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u6 = { root: o78, icon: r76, content: e50, text: n36, summary: a41, detail: s13, closeButton: c25, closeIcon: l17, colorScheme: t40 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d32 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c26 = { root: r77, icon: o79, content: e51, colorScheme: d32 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c27 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t41 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n37 = { size: "2rem" };
var c28 = { margin: "0 0 0.5rem 0" };
var css3 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d33 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t41, loadingIcon: n37, filter: c28, css: css3 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d34 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l18 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i28 = { borderRadius: "{border.radius.sm}" };
var f10 = { color: "{form.field.icon.color}" };
var a42 = { root: o84, dropdown: r82, overlay: d34, tree: l18, emptyMessage: e55, chip: i28, clearIcon: f10 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t42 = { fontWeight: "600" };
var c29 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l19 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d35 = { fontWeight: "600" };
var a43 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i29 = { width: "0.5rem" };
var g6 = { width: "1px", color: "{primary.color}" };
var s14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u7 = { size: "2rem" };
var b6 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m5 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f11 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css4 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k5 = { root: o85, header: r83, headerCell: e56, columnTitle: t42, row: c29, bodyCell: n38, footerCell: l19, columnFooter: d35, footer: a43, columnResizer: i29, resizeIndicator: g6, sortIcon: s14, loadingIcon: u7, nodeToggleButton: b6, paginatorTop: h5, paginatorBottom: m5, colorScheme: f11, css: css4 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m6 = Object.getOwnPropertyDescriptors;
var i30 = Object.getOwnPropertySymbols;
var t43 = Object.prototype.hasOwnProperty;
var a44 = Object.prototype.propertyIsEnumerable;
var o87 = (e229, m20, i116) => m20 in e229 ? r84(e229, m20, { enumerable: true, configurable: true, writable: true, value: i116 }) : e229[m20] = i116;
var Nr;
var Qr = (Nr = ((r338, e229) => {
  for (var m20 in e229 || (e229 = {})) t43.call(e229, m20) && o87(r338, m20, e229[m20]);
  if (i30) for (var m20 of i30(e229)) a44.call(e229, m20) && o87(r338, m20, e229[m20]);
  return r338;
})({}, e5), e58(Nr, m6({ components: { accordion: c4, autocomplete: a3, avatar: n, badge: d4, blockui: o6, breadcrumb: t4, button: e6, card: d5, carousel: t6, cascadeselect: f3, checkbox: e9, chip: s6, colorpicker: s7, confirmdialog: r15, confirmpopup: a8, contextmenu: c9, datatable: v3, dataview: c11, datepicker: k4, dialog: e17, divider: t12, dock: d11, drawer: e19, editor: l9, fieldset: e21, fileupload: i12, floatlabel: d15, galleria: l10, iconfield: r30, iftalabel: i15, image: e24, imagecompare: r32, inlinemessage: a18, inplace: n12, inputchips: f7, inputgroup: o37, inputnumber: a19, inputotp: e27, inputtext: d18, knob: c14, listbox: n14, megamenu: g5, menu: r42, menubar: e30, message: u5, metergroup: b5, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t25, paginator: n21, panel: a27, panelmenu: a28, password: n24, picklist: o55, popover: e38, progressbar: t29, progressspinner: r56, radiobutton: e40, rating: i23, ripple: o61, scrollpanel: a31, select: n25, selectbutton: d26, skeleton: o65, slider: a34, speeddial: a35, splitbutton: d27, splitter: t32, stepper: i25, steps: c20, tabmenu: n30, tabs: i26, tabview: e47, tag: n33, terminal: e48, textarea: d30, tieredmenu: c24, timeline: d31, toast: u6, togglebutton: c26, toggleswitch: c27, toolbar: r79, tooltip: e53, tree: d33, treeselect: a42, treetable: k5, virtualscroller: e57 }, css: t8 })));

// node_modules/@primeuix/themes/dist/lara/accordion/index.mjs
var o88 = { transitionDuration: "{transition.duration}" };
var r85 = { borderWidth: "0", borderColor: "{content.border.color}" };
var e59 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var t44 = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" };
var c30 = { light: { header: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.50}", activeHoverBackground: "{surface.100}" } }, dark: { header: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.800}", activeHoverBackground: "{surface.700}" } } };
var d36 = { root: o88, panel: r85, header: e59, content: t44, colorScheme: c30 };

// node_modules/@primeuix/themes/dist/lara/autocomplete/index.mjs
var o89 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r86 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d37 = { padding: "{list.padding}", gap: "{list.gap}" };
var e60 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l20 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i31 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var c31 = { borderRadius: "{border.radius.sm}" };
var f12 = { padding: "{list.option.padding}" };
var s15 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a45 = { root: o89, overlay: r86, list: d37, option: e60, optionGroup: l20, dropdown: i31, chip: c31, emptyMessage: f12, colorScheme: s15 };

// node_modules/@primeuix/themes/dist/lara/avatar/index.mjs
var e61 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r87 = { size: "1rem" };
var o90 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t45 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i32 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n39 = { root: e61, icon: r87, group: o90, lg: t45, xl: i32 };

// node_modules/@primeuix/themes/dist/lara/badge/index.mjs
var r88 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o91 = { size: "0.5rem" };
var e62 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c32 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a46 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n40 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d38 = { root: r88, dot: o91, sm: e62, lg: c32, xl: a46, colorScheme: n40 };

// node_modules/@primeuix/themes/dist/lara/base/index.mjs
var o92 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var r89 = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "transparent", offset: "0" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.625rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.5rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.75rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.625rem 1rem 0 1rem" }, option: { padding: "0.625rem 1rem", borderRadius: "0" }, optionGroup: { padding: "0.625rem 1rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.625rem 1rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.625rem 1rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "1rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.5rem", shadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }, navigation: { shadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, focusRing: { shadow: "0 0 0 0.2rem {primary.200}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.0}", borderColor: "{surface.300}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.500}", shadow: "none" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, focusRing: { shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.950}", borderColor: "{surface.600}", hoverBorderColor: "{primary.color}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e63 = { primitive: o92, semantic: r89 };

// node_modules/@primeuix/themes/dist/lara/blockui/index.mjs
var r90 = { borderRadius: "{content.border.radius}" };
var o93 = { root: r90 };

// node_modules/@primeuix/themes/dist/lara/breadcrumb/index.mjs
var o94 = { padding: "1.25rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r91 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i33 = { color: "{navigation.item.icon.color}" };
var t46 = { root: o94, item: r91, separator: i33 };

// node_modules/@primeuix/themes/dist/lara/button/index.mjs
var r92 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.75rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.25rem" }, label: { fontWeight: "600" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", offset: "{form.field.focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o95 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {primary.200}" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.200}" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {sky.200}" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {green.200}" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {orange.200}" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {purple.200}" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {red.200}" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem {surface.400}" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {sky.400}, transparent 80%)" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.400}, transparent 80%)" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {orange.400}, transparent 80%)" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {purple.400}, transparent 80%)" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.400}, transparent 80%)" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "transparent", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.0}, transparent 80%)" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {help.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {help.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {danger.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {danger.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e64 = { root: r92, colorScheme: o95 };

// node_modules/@primeuix/themes/dist/lara/card/index.mjs
var o96 = { background: "{content.background}", borderRadius: "{border.radius.lg}", color: "{content.color}", shadow: "0 .125rem .25rem rgba(0,0,0,.075)" };
var r93 = { padding: "1.5rem", gap: "0.75rem" };
var e65 = { gap: "0.5rem" };
var t47 = { fontSize: "1.25rem", fontWeight: "700" };
var a47 = { color: "{text.muted.color}" };
var d39 = { root: o96, body: r93, caption: e65, title: t47, subtitle: a47 };

// node_modules/@primeuix/themes/dist/lara/carousel/index.mjs
var r94 = { transitionDuration: "{transition.duration}" };
var o97 = { gap: "0.25rem" };
var a48 = { padding: "1rem", gap: "0.5rem" };
var i34 = { width: "1rem", height: "1rem", borderRadius: "50", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c33 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t48 = { root: r94, content: o97, indicatorList: a48, indicator: i34, colorScheme: c33 };

// node_modules/@primeuix/themes/dist/lara/cascadeselect/index.mjs
var o98 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r95 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d40 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l21 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1.25rem" };
var e66 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i35 = { color: "{form.field.icon.color}" };
var f13 = { root: o98, dropdown: r95, overlay: d40, list: l21, option: e66, clearIcon: i35 };

// node_modules/@primeuix/themes/dist/lara/checkbox/index.mjs
var o99 = { borderRadius: "{border.radius.sm}", width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } };
var r96 = { size: "1rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } };
var e67 = { root: o99, icon: r96 };

// node_modules/@primeuix/themes/dist/lara/chip/index.mjs
var o100 = { borderRadius: "16px", paddingX: "0.875rem", paddingY: "0.625rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r97 = { width: "2rem", height: "2rem" };
var e68 = { size: "1rem" };
var c34 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i36 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s16 = { root: o100, image: r97, icon: e68, removeIcon: c34, colorScheme: i36 };

// node_modules/@primeuix/themes/dist/lara/colorpicker/index.mjs
var r98 = { transitionDuration: "{transition.duration}" };
var o101 = { width: "1.75rem", height: "1.75rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var e69 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a49 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var d41 = { root: r98, preview: o101, panel: e69, colorScheme: a49 };

// node_modules/@primeuix/themes/dist/lara/confirmdialog/index.mjs
var o102 = { size: "2rem", color: "{overlay.modal.color}" };
var e70 = { gap: "1rem" };
var r99 = { icon: o102, content: e70 };

// node_modules/@primeuix/themes/dist/lara/confirmpopup/index.mjs
var o103 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r100 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e71 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p6 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a50 = { root: o103, content: r100, icon: e71, footer: p6 };

// node_modules/@primeuix/themes/dist/lara/contextmenu/index.mjs
var o104 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i37 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n41 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a51 = { mobileIndent: "1.25rem" };
var t49 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r101 = { borderColor: "{content.border.color}" };
var c35 = { root: o104, list: i37, item: n41, submenu: a51, submenuIcon: t49, separator: r101 };

// node_modules/@primeuix/themes/dist/lara/datatable/index.mjs
var o105 = { transitionDuration: "{transition.duration}" };
var r102 = { borderColor: "{datatable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e72 = { selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d42 = { fontWeight: "700" };
var l22 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c36 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var t50 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a52 = { fontWeight: "700" };
var n42 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var s17 = { color: "{primary.color}" };
var i38 = { width: "0.5rem" };
var g7 = { width: "1px", color: "{primary.color}" };
var u8 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b7 = { size: "2rem" };
var p7 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f14 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h6 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var m7 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v5 = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k6 = { root: o105, header: r102, headerCell: e72, columnTitle: d42, row: l22, bodyCell: c36, footerCell: t50, columnFooter: a52, footer: n42, dropPoint: s17, columnResizer: i38, resizeIndicator: g7, sortIcon: u8, loadingIcon: b7, rowToggleButton: p7, filter: f14, paginatorTop: h6, paginatorBottom: m7, colorScheme: v5 };

// node_modules/@primeuix/themes/dist/lara/dataview/index.mjs
var o106 = { borderColor: "{content.border.color}", borderWidth: "1px", borderRadius: "4px", padding: "0" };
var r103 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.875rem 1.125rem", borderRadius: "5px 5px 0 0" };
var e73 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "5px" };
var d43 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.875rem 1.125rem", borderRadius: "0 0 5px 5px" };
var t51 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n43 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c37 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var a53 = { root: o106, header: r103, content: e73, footer: d43, paginatorTop: t51, paginatorBottom: n43, colorScheme: c37 };

// node_modules/@primeuix/themes/dist/lara/datepicker/index.mjs
var o107 = { transitionDuration: "{transition.duration}" };
var r104 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e74 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.75rem 0" };
var d44 = { gap: "0.5rem", fontWeight: "700" };
var c38 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var n44 = { color: "{form.field.icon.color}" };
var t52 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" };
var a54 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}" };
var i39 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l23 = { margin: "0.75rem 0 0 0" };
var f15 = { padding: "0.375rem", fontWeight: "700", color: "{content.color}" };
var u9 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.375rem", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var s18 = { margin: "0.75rem 0 0 0" };
var g8 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var h7 = { margin: "0.75rem 0 0 0" };
var m8 = { padding: "0.5rem", borderRadius: "{content.border.radius}" };
var b8 = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}" };
var p8 = { padding: "0.75rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v6 = { light: { dropdown: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k7 = { root: o107, panel: r104, header: e74, title: d44, dropdown: c38, inputIcon: n44, selectMonth: t52, selectYear: a54, group: i39, dayView: l23, weekDay: f15, date: u9, monthView: s18, month: g8, yearView: h7, year: m8, buttonbar: b8, timePicker: p8, colorScheme: v6 };

// node_modules/@primeuix/themes/dist/lara/dialog/index.mjs
var o108 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a55 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d45 = { fontSize: "1.25rem", fontWeight: "600" };
var r105 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e75 = { root: o108, header: a55, title: d45, content: r105, footer: l24 };

// node_modules/@primeuix/themes/dist/lara/divider/index.mjs
var r106 = { borderColor: "{content.border.color}" };
var o109 = { background: "{content.background}", color: "{text.color}" };
var n45 = { margin: "1.125rem 0", padding: "0 1.125rem", content: { padding: "0 0.625rem" } };
var e76 = { margin: "0 1.125rem", padding: "1.125rem 0", content: { padding: "0.625rem 0" } };
var t53 = { root: r106, content: o109, horizontal: n45, vertical: e76 };

// node_modules/@primeuix/themes/dist/lara/dock/index.mjs
var r107 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.lg}" };
var o110 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d46 = { root: r107, item: o110 };

// node_modules/@primeuix/themes/dist/lara/drawer/index.mjs
var o111 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a56 = { padding: "{overlay.modal.padding}" };
var d47 = { fontSize: "1.5rem", fontWeight: "600" };
var r108 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l25 = { padding: "{overlay.modal.padding}" };
var e77 = { root: o111, header: a56, title: d47, content: r108, footer: l25 };

// node_modules/@primeuix/themes/dist/lara/editor/index.mjs
var o112 = { borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r109 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e78 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var l26 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var t54 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var c39 = { light: { toolbar: { background: "{surface.50}" } }, dark: { toolbar: { background: "{surface.800}" } } };
var d48 = { toolbar: o112, toolbarItem: r109, overlay: e78, overlayOption: l26, content: t54, colorScheme: c39 };

// node_modules/@primeuix/themes/dist/lara/fieldset/index.mjs
var o113 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r110 = { borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.625rem 0.875rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e79 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t55 = { padding: "0" };
var c40 = { light: { legend: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}", hoverColor: "{text.hover.color}" } }, dark: { legend: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" } } };
var n46 = { root: o113, legend: r110, toggleIcon: e79, content: t55, colorScheme: c40 };

// node_modules/@primeuix/themes/dist/lara/fileupload/index.mjs
var r111 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o114 = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0", gap: "0.5rem" };
var e80 = { highlightBorderColor: "{primary.color}", padding: "1.125rem", gap: "1rem" };
var a57 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var t56 = { gap: "0.5rem" };
var d49 = { height: "0.25rem" };
var n47 = { gap: "0.5rem" };
var c41 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var i40 = { root: r111, header: o114, content: e80, file: a57, fileList: t56, progressbar: d49, basic: n47, colorScheme: c41 };

// node_modules/@primeuix/themes/dist/lara/floatlabel/index.mjs
var o115 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i41 = { active: { top: "-1.375rem" } };
var r112 = { input: { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a58 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d50 = { root: o115, over: i41, in: r112, on: a58 };

// node_modules/@primeuix/themes/dist/lara/galleria/index.mjs
var o116 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r113 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0", prev: { borderRadius: "0 12px 12px 0" }, next: { borderRadius: "12px 0 0 12px" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e81 = { size: "1.5rem" };
var t57 = { padding: "1rem 0.25rem" };
var n48 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var a59 = { size: "1rem" };
var c42 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s19 = { gap: "0.5rem", padding: "1rem" };
var u10 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i42 = { background: "rgba(0, 0, 0, 0.5)" };
var d51 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g9 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f16 = { size: "1.5rem" };
var h8 = { light: { thumbnailsContent: { background: "{surface.50}" }, thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailsContent: { background: "{surface.800}" }, thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l27 = { root: o116, navButton: r113, navIcon: e81, thumbnailsContent: t57, thumbnailNavButton: n48, thumbnailNavButtonIcon: a59, caption: c42, indicatorList: s19, indicatorButton: u10, insetIndicatorList: i42, insetIndicatorButton: d51, closeButton: g9, closeButtonIcon: f16, colorScheme: h8 };

// node_modules/@primeuix/themes/dist/lara/iconfield/index.mjs
var o117 = { color: "{form.field.icon.color}" };
var r114 = { icon: o117 };

// node_modules/@primeuix/themes/dist/lara/iftalabel/index.mjs
var o118 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l28 = { paddingTop: "1.875rem", paddingBottom: "{form.field.padding.y}" };
var i43 = { root: o118, input: l28 };

// node_modules/@primeuix/themes/dist/lara/image/index.mjs
var o119 = { transitionDuration: "{transition.duration}" };
var r115 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a60 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" };
var e82 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i44 = { root: o119, preview: r115, toolbar: a60, action: e82 };

// node_modules/@primeuix/themes/dist/lara/imagecompare/index.mjs
var r116 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o120 = { handle: r116 };

// node_modules/@primeuix/themes/dist/lara/inlinemessage/index.mjs
var r117 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o121 = { fontWeight: "500" };
var n49 = { size: "1.125rem" };
var e83 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "color-mix(in srgb, {blue.50}, transparent 5%)", color: "{blue.600}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "color-mix(in srgb, {green.50}, transparent 5%)", color: "{green.600}", shadow: "none" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "color-mix(in srgb,{yellow.50}, transparent 5%)", color: "{yellow.600}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "color-mix(in srgb, {red.50}, transparent 5%)", color: "{red.600}", shadow: "none" }, secondary: { background: "{surface.100}", borderColor: "{surface.100}", color: "{surface.600}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "none" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.500}, transparent 84%)", color: "{blue.500}", shadow: "none" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.500}", shadow: "none" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.500}, transparent 84%)", color: "{yellow.500}", shadow: "none" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.500}", shadow: "none" }, secondary: { background: "{surface.800}", borderColor: "{surface.800}", color: "{surface.300}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } };
var a61 = { root: r117, text: o121, icon: n49, colorScheme: e83 };

// node_modules/@primeuix/themes/dist/lara/inplace/index.mjs
var o122 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r118 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n50 = { root: o122, display: r118 };

// node_modules/@primeuix/themes/dist/lara/inputchips/index.mjs
var o123 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r119 = { borderRadius: "{border.radius.sm}" };
var d52 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f17 = { root: o123, chip: r119, colorScheme: d52 };

// node_modules/@primeuix/themes/dist/lara/inputgroup/index.mjs
var r120 = { borderRadius: "{form.field.border.radius}", padding: "0.625rem 0.5rem", minWidth: "2.75rem" };
var o124 = { light: { addon: { background: "{surface.50}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } }, dark: { addon: { background: "{surface.800}", borderColor: "{form.field.border.color}", color: "{text.muted.color}" } } };
var d53 = { addon: r120, colorScheme: o124 };

// node_modules/@primeuix/themes/dist/lara/inputnumber/index.mjs
var r121 = { transitionDuration: "{transition.duration}" };
var o125 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e84 = { light: { button: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { button: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.500}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var d54 = { root: r121, button: o125, colorScheme: e84 };

// node_modules/@primeuix/themes/dist/lara/inputotp/index.mjs
var r122 = { gap: "0.5rem" };
var t58 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e85 = { root: r122, input: t58 };

// node_modules/@primeuix/themes/dist/lara/inputtext/index.mjs
var o126 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d55 = { root: o126 };

// node_modules/@primeuix/themes/dist/lara/knob/index.mjs
var o127 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r123 = { background: "{primary.color}" };
var t59 = { background: "{content.border.color}" };
var n51 = { color: "{text.muted.color}" };
var c43 = { root: o127, value: r123, range: t59, text: n51 };

// node_modules/@primeuix/themes/dist/lara/listbox/index.mjs
var o128 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r124 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d56 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i45 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t60 = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" };
var e86 = { padding: "{list.option.padding}" };
var l29 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n52 = { root: o128, list: r124, option: d56, optionGroup: i45, checkmark: t60, emptyMessage: e86, colorScheme: l29 };

// node_modules/@primeuix/themes/dist/lara/megamenu/index.mjs
var o129 = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.75rem 1rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n53 = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" };
var a62 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var i46 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r125 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t61 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e87 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c44 = { borderColor: "{content.border.color}" };
var d57 = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g10 = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } };
var u11 = { root: o129, baseItem: n53, item: a62, overlay: i46, submenu: r125, submenuLabel: t61, submenuIcon: e87, separator: c44, mobileButton: d57, colorScheme: g10 };

// node_modules/@primeuix/themes/dist/lara/menu/index.mjs
var o130 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n54 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a63 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i47 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t62 = { borderColor: "{content.border.color}" };
var r126 = { root: o130, list: n54, item: a63, submenuLabel: i47, separator: t62 };

// node_modules/@primeuix/themes/dist/lara/menubar/index.mjs
var o131 = { borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem 1rem", transitionDuration: "{transition.duration}" };
var r127 = { borderRadius: "{content.border.radius}", padding: "0.75rem 1rem" };
var i48 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var n55 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1.25rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a64 = { borderColor: "{content.border.color}" };
var t63 = { borderRadius: "50%", size: "2rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e88 = { light: { root: { background: "{surface.50}" } }, dark: { root: { background: "{surface.800}" } } };
var c45 = { root: o131, baseItem: r127, item: i48, submenu: n55, separator: a64, mobileButton: t63, colorScheme: e88 };

// node_modules/@primeuix/themes/dist/lara/message/index.mjs
var o132 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r128 = { padding: "0.75rem 1rem", gap: "0.5rem", sm: { padding: "0.5rem 0.625rem" }, lg: { padding: "0.75rem 0.875rem" } };
var e89 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n56 = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } };
var l30 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c46 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var s20 = { root: { borderWidth: "1px" } };
var a65 = { content: { padding: "0" } };
var t64 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "transparent", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "transparent", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "transparent", color: "{yellow.600}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "transparent", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "transparent", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "transparent", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "transparent", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "transparent", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "transparent", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "transparent", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "transparent", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "transparent", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u12 = { root: o132, content: r128, text: e89, icon: n56, closeButton: l30, closeIcon: c46, outlined: s20, simple: a65, colorScheme: t64 };

// node_modules/@primeuix/themes/dist/lara/metergroup/index.mjs
var e90 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r129 = { background: "{content.border.color}", size: "0.625rem" };
var a66 = { gap: "0.5rem" };
var o133 = { size: "0.5rem" };
var l31 = { size: "1rem" };
var t65 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b9 = { root: e90, meters: r129, label: a66, labelMarker: o133, labelIcon: l31, labelList: t65 };

// node_modules/@primeuix/themes/dist/lara/multiselect/index.mjs
var o134 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d58 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r130 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l32 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i49 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e91 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f18 = { color: "{form.field.icon.color}" };
var a67 = { borderRadius: "{border.radius.sm}" };
var c47 = { padding: "{list.option.padding}" };
var n57 = { root: o134, dropdown: d58, overlay: r130, list: l32, option: i49, optionGroup: e91, chip: a67, clearIcon: f18, emptyMessage: c47 };

// node_modules/@primeuix/themes/dist/lara/orderlist/index.mjs
var r131 = { gap: "1.125rem" };
var a68 = { gap: "0.5rem" };
var o135 = { root: r131, controls: a68 };

// node_modules/@primeuix/themes/dist/lara/organizationchart/index.mjs
var o136 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r132 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" };
var e92 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t66 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n58 = { root: o136, node: r132, nodeToggleButton: e92, connector: t66 };

// node_modules/@primeuix/themes/dist/lara/overlaybadge/index.mjs
var o137 = { outline: { width: "2px", color: "{content.background}" } };
var t67 = { root: o137 };

// node_modules/@primeuix/themes/dist/lara/paginator/index.mjs
var o138 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r133 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t68 = { color: "{text.muted.color}" };
var e93 = { maxWidth: "2.5rem" };
var n59 = { root: o138, navButton: r133, currentPageReport: t68, jumpToPageInput: e93 };

// node_modules/@primeuix/themes/dist/lara/panel/index.mjs
var r134 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}" };
var o139 = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", padding: "1.125rem", borderRadius: "5px 5px 0 0" };
var e94 = { padding: "0.25rem 1.125rem" };
var d59 = { fontWeight: "700" };
var t69 = { padding: "1.125rem" };
var a69 = { padding: "1.125rem" };
var c48 = { light: { header: { background: "{surface.50}", color: "{text.color}" } }, dark: { header: { background: "{surface.800}", color: "{text.color}" } } };
var n60 = { root: r134, header: o139, toggleableHeader: e94, title: d59, content: t69, footer: a69, colorScheme: c48 };

// node_modules/@primeuix/themes/dist/lara/panelmenu/index.mjs
var o140 = { gap: "0", transitionDuration: "{transition.duration}" };
var r135 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } };
var n61 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i50 = { indent: "1rem" };
var t70 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a70 = { root: o140, panel: r135, item: n61, submenu: i50, submenuIcon: t70 };

// node_modules/@primeuix/themes/dist/lara/password/index.mjs
var r136 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o141 = { color: "{form.field.icon.color}" };
var e95 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a71 = { gap: "0.75rem" };
var d60 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n62 = { meter: r136, icon: o141, overlay: e95, content: a71, colorScheme: d60 };

// node_modules/@primeuix/themes/dist/lara/picklist/index.mjs
var r137 = { gap: "1.125rem" };
var a72 = { gap: "0.5rem" };
var o142 = { root: r137, controls: a72 };

// node_modules/@primeuix/themes/dist/lara/popover/index.mjs
var o143 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r138 = { padding: "{overlay.popover.padding}" };
var e96 = { root: o143, content: r138 };

// node_modules/@primeuix/themes/dist/lara/progressbar/index.mjs
var r139 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.5rem" };
var o144 = { background: "{primary.color}" };
var e97 = { color: "{primary.contrast.color}", fontSize: "0.875rem", fontWeight: "600" };
var t71 = { root: r139, value: o144, label: e97 };

// node_modules/@primeuix/themes/dist/lara/progressspinner/index.mjs
var o145 = { light: { root: { colorOne: "{pink.500}", colorTwo: "{sky.500}", colorThree: "{emerald.500}", colorFour: "{amber.500}" } }, dark: { root: { colorOne: "{pink.400}", colorTwo: "{sky.400}", colorThree: "{emerald.400}", colorFour: "{amber.400}" } } };
var r140 = { colorScheme: o145 };

// node_modules/@primeuix/themes/dist/lara/radiobutton/index.mjs
var o146 = { width: "1.5rem", height: "1.5rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1.25rem", height: "1.25rem" }, lg: { width: "1.75rem", height: "1.75rem" } };
var r141 = { size: "1rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1.25rem" } };
var e98 = { root: o146, icon: r141 };

// node_modules/@primeuix/themes/dist/lara/rating/index.mjs
var o147 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r142 = { size: "1.25rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i51 = { root: o147, icon: r142 };

// node_modules/@primeuix/themes/dist/lara/ripple/index.mjs
var r143 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o148 = { colorScheme: r143 };

// node_modules/@primeuix/themes/dist/lara/scrollpanel/index.mjs
var r144 = { transitionDuration: "{transition.duration}" };
var o149 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s21 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } };
var a73 = { root: r144, bar: o149, colorScheme: s21 };

// node_modules/@primeuix/themes/dist/lara/select/index.mjs
var o150 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r145 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d61 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l33 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i52 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e99 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f19 = { color: "{form.field.icon.color}" };
var c49 = { color: "{list.option.color}", gutterStart: "-0.5rem", gutterEnd: "0.5rem" };
var a74 = { padding: "{list.option.padding}" };
var n63 = { root: o150, dropdown: r145, overlay: d61, list: l33, option: i52, optionGroup: e99, clearIcon: f19, checkmark: c49, emptyMessage: a74 };

// node_modules/@primeuix/themes/dist/lara/selectbutton/index.mjs
var r146 = { borderRadius: "{form.field.border.radius}" };
var o151 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d62 = { root: r146, colorScheme: o151 };

// node_modules/@primeuix/themes/dist/lara/skeleton/index.mjs
var r147 = { borderRadius: "{content.border.radius}" };
var a75 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o152 = { root: r147, colorScheme: a75 };

// node_modules/@primeuix/themes/dist/lara/slider/index.mjs
var o153 = { transitionDuration: "{transition.duration}" };
var r148 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var e100 = { background: "{primary.color}" };
var n64 = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var d63 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a76 = { root: o153, track: r148, range: e100, handle: n64, colorScheme: d63 };

// node_modules/@primeuix/themes/dist/lara/speeddial/index.mjs
var t72 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a77 = { root: t72 };

// node_modules/@primeuix/themes/dist/lara/splitbutton/index.mjs
var r149 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d64 = { root: r149 };

// node_modules/@primeuix/themes/dist/lara/splitter/index.mjs
var o154 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r150 = { background: "{content.border.color}" };
var n65 = { size: "24px", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t73 = { light: { handle: { background: "{surface.400}" } }, dark: { handle: { background: "{surface.600}" } } };
var c50 = { root: o154, gutter: r150, handle: n65, colorScheme: t73 };

// node_modules/@primeuix/themes/dist/lara/stepper/index.mjs
var o155 = { transitionDuration: "{transition.duration}" };
var r151 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e101 = { padding: "0.5rem", gap: "1rem" };
var t74 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n66 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a78 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c51 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var i53 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var d65 = { root: o155, separator: r151, step: e101, stepHeader: t74, stepTitle: n66, stepNumber: a78, steppanels: c51, steppanel: i53 };

// node_modules/@primeuix/themes/dist/lara/steps/index.mjs
var o156 = { transitionDuration: "{transition.duration}" };
var r152 = { background: "{content.border.color}" };
var t75 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e102 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var i54 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2.25rem", fontSize: "1.125rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c52 = { root: o156, separator: r152, itemLink: t75, itemLabel: e102, itemNumber: i54 };

// node_modules/@primeuix/themes/dist/lara/tabmenu/index.mjs
var o157 = { transitionDuration: "{transition.duration}" };
var r153 = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" };
var t76 = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e103 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var a79 = { height: "0", bottom: "0", background: "transparent" };
var c53 = { light: { item: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { item: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } };
var i55 = { root: o157, tablist: r153, item: t76, itemIcon: e103, activeBar: a79, colorScheme: c53 };

// node_modules/@primeuix/themes/dist/lara/tabs/index.mjs
var o158 = { transitionDuration: "{transition.duration}" };
var r154 = { borderWidth: "0", background: "{content.background}", borderColor: "{content.border.color}" };
var t77 = { borderWidth: "2px 0 0 0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var n67 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c54 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var e104 = { height: "0", bottom: "0", background: "transparent" };
var a80 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" }, tab: { background: "{surface.50}", hoverBackground: "{surface.100}", activeBackground: "{surface.0}" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" }, tab: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.900}" } } };
var s22 = { root: o158, tablist: r154, tab: t77, tabpanel: n67, navButton: c54, activeBar: e104, colorScheme: a80 };

// node_modules/@primeuix/themes/dist/lara/tabview/index.mjs
var o159 = { transitionDuration: "{transition.duration}" };
var r155 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t78 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n68 = { background: "{content.background}", color: "{content.color}" };
var a81 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c55 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e105 = { root: o159, tabList: r155, tab: t78, tabPanel: n68, navButton: a81, colorScheme: c55 };

// node_modules/@primeuix/themes/dist/lara/tag/index.mjs
var r156 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o160 = { size: "0.75rem" };
var c56 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var a82 = { root: r156, icon: o160, colorScheme: c56 };

// node_modules/@primeuix/themes/dist/lara/terminal/index.mjs
var r157 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o161 = { gap: "0.25rem" };
var d66 = { margin: "2px 0" };
var e106 = { root: r157, prompt: o161, commandResponse: d66 };

// node_modules/@primeuix/themes/dist/lara/textarea/index.mjs
var o162 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d67 = { root: o162 };

// node_modules/@primeuix/themes/dist/lara/tieredmenu/index.mjs
var o163 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i56 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n69 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a83 = { mobileIndent: "1.25rem" };
var t79 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r158 = { borderColor: "{content.border.color}" };
var c57 = { root: o163, list: i56, item: n69, submenu: a83, submenuIcon: t79, separator: r158 };

// node_modules/@primeuix/themes/dist/lara/timeline/index.mjs
var e107 = { minHeight: "5rem" };
var r159 = { eventContent: { padding: "1rem 0" } };
var n70 = { eventContent: { padding: "0 1rem" } };
var o164 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } };
var t80 = { color: "{content.border.color}", size: "2px" };
var a84 = { event: e107, horizontal: r159, vertical: n70, eventMarker: o164, eventConnector: t80 };

// node_modules/@primeuix/themes/dist/lara/toast/index.mjs
var o165 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}" };
var r160 = { size: "1.25rem" };
var e108 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a85 = { gap: "0.5rem" };
var s23 = { fontWeight: "500", fontSize: "1rem" };
var c58 = { fontWeight: "500", fontSize: "0.875rem" };
var n71 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l34 = { size: "1rem" };
var u13 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.500}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {blue.200}" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.500}", color: "{green.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {green.200}" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.500}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {yellow.200}" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.500}", color: "{red.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {red.200}" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.500}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.200}" } } }, contrast: { background: "{surface.900}", borderColor: "{primary.color}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem {surface.400}" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {blue.500}, transparent 80%)" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {green.500}, transparent 80%)" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {yellow.500}, transparent 80%)" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {red.500}, transparent 80%)" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{focus.ring.color}", shadow: "0 0 0 0.2rem color-mix(in srgb, {surface.950}, transparent 80%)" } } } } };
var d68 = { root: o165, icon: r160, content: e108, text: a85, summary: s23, detail: c58, closeButton: n71, closeIcon: l34, colorScheme: u13 };

// node_modules/@primeuix/themes/dist/lara/togglebutton/index.mjs
var o166 = { padding: "0.625rem 1rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.5rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.75rem 1.25rem" } };
var r161 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" };
var d69 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var e109 = { light: { root: { hoverBackground: "{surface.100}" } }, dark: { root: { hoverBackground: "{surface.800}" } } };
var i57 = { root: o166, icon: r161, content: d69, colorScheme: e109 };

// node_modules/@primeuix/themes/dist/lara/toggleswitch/index.mjs
var r162 = { width: "3rem", height: "1.75rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o167 = { borderRadius: "50%", size: "1.25rem" };
var e110 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c59 = { root: r162, handle: o167, colorScheme: e110 };

// node_modules/@primeuix/themes/dist/lara/toolbar/index.mjs
var o168 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r163 = { light: { root: { background: "{surface.50}", color: "{content.color}" } }, dark: { root: { background: "{surface.800}", color: "{content.color}" } } };
var c60 = { root: o168, colorScheme: r163 };

// node_modules/@primeuix/themes/dist/lara/tooltip/index.mjs
var r164 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.625rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o169 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e111 = { root: r164, colorScheme: o169 };

// node_modules/@primeuix/themes/dist/lara/tree/index.mjs
var o170 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r165 = { padding: "0.375rem 0.625rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" }, gap: "0.25rem" };
var e112 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t81 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c61 = { size: "2rem" };
var n72 = { margin: "0 0 0.5rem 0" };
var d70 = { root: o170, node: r165, nodeIcon: e112, nodeToggleButton: t81, loadingIcon: c61, filter: n72 };

// node_modules/@primeuix/themes/dist/lara/treeselect/index.mjs
var o171 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r166 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d71 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l35 = { padding: "{list.padding}" };
var e113 = { padding: "{list.option.padding}" };
var i58 = { borderRadius: "{border.radius.sm}" };
var f20 = { color: "{form.field.icon.color}" };
var a86 = { root: o171, dropdown: r166, overlay: d71, tree: l35, emptyMessage: e113, chip: i58, clearIcon: f20 };

// node_modules/@primeuix/themes/dist/lara/treetable/index.mjs
var o172 = { transitionDuration: "{transition.duration}" };
var r167 = { borderColor: "{treetable.border.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" };
var e114 = { selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var t82 = { fontWeight: "700" };
var c62 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{sr.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var l36 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d72 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem" };
var n73 = { fontWeight: "700" };
var a87 = { borderColor: "{treetable.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i59 = { width: "0.5rem" };
var s24 = { width: "1px", color: "{primary.color}" };
var g11 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u14 = { size: "2rem" };
var h9 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f21 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var b10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m9 = { light: { root: { borderColor: "{content.border.color}" }, header: { background: "{surface.50}", color: "{text.color}" }, headerCell: { background: "{surface.50}", hoverBackground: "{surface.100}", color: "{text.color}" }, footer: { background: "{surface.50}", color: "{text.color}" }, footerCell: { background: "{surface.50}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, header: { background: "{surface.800}", color: "{text.color}" }, headerCell: { background: "{surface.800}", hoverBackground: "{surface.700}", color: "{text.color}" }, footer: { background: "{surface.800}", color: "{text.color}" }, footerCell: { background: "{surface.800}", color: "{text.color}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var C4 = { root: o172, header: r167, headerCell: e114, columnTitle: t82, row: c62, bodyCell: l36, footerCell: d72, columnFooter: n73, footer: a87, columnResizer: i59, resizeIndicator: s24, sortIcon: g11, loadingIcon: u14, nodeToggleButton: h9, paginatorTop: f21, paginatorBottom: b10, colorScheme: m9 };

// node_modules/@primeuix/themes/dist/lara/virtualscroller/index.mjs
var o173 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e115 = { loader: o173 };

// node_modules/@primeuix/themes/dist/lara/index.mjs
var r168 = Object.defineProperty;
var e116 = Object.defineProperties;
var m10 = Object.getOwnPropertyDescriptors;
var i60 = Object.getOwnPropertySymbols;
var t83 = Object.prototype.hasOwnProperty;
var a88 = Object.prototype.propertyIsEnumerable;
var o174 = (e229, m20, i116) => m20 in e229 ? r168(e229, m20, { enumerable: true, configurable: true, writable: true, value: i116 }) : e229[m20] = i116;
var Nr2;
var Qr2 = (Nr2 = ((r338, e229) => {
  for (var m20 in e229 || (e229 = {})) t83.call(e229, m20) && o174(r338, m20, e229[m20]);
  if (i60) for (var m20 of i60(e229)) a88.call(e229, m20) && o174(r338, m20, e229[m20]);
  return r338;
})({}, e63), e116(Nr2, m10({ components: { accordion: d36, autocomplete: a45, avatar: n39, badge: d38, blockui: o93, breadcrumb: t46, button: e64, datepicker: k7, card: d39, carousel: t48, cascadeselect: f13, checkbox: e67, chip: s16, colorpicker: d41, confirmdialog: r99, confirmpopup: a50, contextmenu: c35, dataview: a53, datatable: k6, dialog: e75, divider: t53, dock: d46, drawer: e77, editor: d48, fieldset: n46, fileupload: i40, iftalabel: i43, floatlabel: d50, galleria: l27, iconfield: r114, image: i44, imagecompare: o120, inlinemessage: a61, inplace: n50, inputchips: f17, inputgroup: d53, inputnumber: d54, inputotp: e85, inputtext: d55, knob: c43, listbox: n52, megamenu: u11, menu: r126, menubar: c45, message: u12, metergroup: b9, multiselect: n57, orderlist: o135, organizationchart: n58, overlaybadge: t67, popover: e96, paginator: n59, password: n62, panel: n60, panelmenu: a70, picklist: o142, progressbar: t71, progressspinner: r140, radiobutton: e98, rating: i51, ripple: o148, scrollpanel: a73, select: n63, selectbutton: d62, skeleton: o152, slider: a76, speeddial: a77, splitter: c50, splitbutton: d64, stepper: d65, steps: c52, tabmenu: i55, tabs: s22, tabview: e105, textarea: d67, tieredmenu: c57, tag: a82, terminal: e106, timeline: a84, togglebutton: i57, toggleswitch: c59, tree: d70, treeselect: a86, treetable: C4, toast: d68, toolbar: c60, tooltip: e111, virtualscroller: e115 } })));

// node_modules/@primeuix/themes/dist/material/accordion/index.mjs
var o175 = { transitionDuration: "{transition.duration}" };
var r169 = { borderWidth: "0", borderColor: "{content.border.color}" };
var t84 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.25rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.muted.color}", activeColor: "{text.muted.color}", activeHoverColor: "{text.muted.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var n74 = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.25rem 1.25rem 1.25rem" };
var css5 = "\n.p-accordionpanel {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n    transition: margin dt('accordion.transition.duration');\n}\n\n.p-accordionpanel-active {\n    margin: 1rem 0;\n}\n\n.p-accordionpanel:first-child {\n    border-top-left-radius: dt('content.border.radius');\n    border-top-right-radius: dt('content.border.radius');\n    margin-top: 0;\n}\n\n.p-accordionpanel:last-child {\n    border-bottom-left-radius: dt('content.border.radius');\n    border-bottom-right-radius: dt('content.border.radius');\n    margin-bottom: 0;\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var e117 = { root: o175, panel: r169, header: t84, content: n74, css: css5 };

// node_modules/@primeuix/themes/dist/material/autocomplete/index.mjs
var o176 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r170 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var e118 = { padding: "{list.padding}", gap: "{list.gap}" };
var d73 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var t85 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var l37 = { width: "3rem", sm: { width: "2.5rem" }, lg: { width: "3.5rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var a89 = { borderRadius: "{border.radius.sm}" };
var n75 = { padding: "{list.option.padding}" };
var c63 = { light: { chip: { focusBackground: "{surface.300}", focusColor: "{surface.950}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.600}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var css6 = "\n.p-autocomplete-dropdown:focus-visible {\n    background: dt('autocomplete.dropdown.hover.background');\n    border-color: dt('autocomplete.dropdown.hover.border.color');\n    color: dt('autocomplete.dropdown.hover.color');\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('autocomplete.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: dt('autocomplete.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {\n    outline: 0 none;\n    background: dt('autocomplete.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));\n}\n\n.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {\n    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));\n}\n\n.p-autocomplete-option {\n    transition: none;\n}\n";
var i61 = { root: o176, overlay: r170, list: e118, option: d73, optionGroup: t85, dropdown: l37, chip: a89, emptyMessage: n75, colorScheme: c63, css: css6 };

// node_modules/@primeuix/themes/dist/material/avatar/index.mjs
var e119 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r171 = { size: "1rem" };
var o177 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t86 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i62 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n76 = { root: e119, icon: r171, group: o177, lg: t86, xl: i62, css: "" };

// node_modules/@primeuix/themes/dist/material/badge/index.mjs
var r172 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o178 = { size: "0.5rem" };
var e120 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c64 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a90 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n77 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d74 = { root: r172, dot: o178, sm: e120, lg: c64, xl: a90, colorScheme: n77, css: "" };

// node_modules/@primeuix/themes/dist/material/base/index.mjs
var o179 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#E8F6F1", 100: "#C5EBE1", 200: "#9EDFCF", 300: "#76D3BD", 400: "#58C9AF", 500: "#3BBFA1", 600: "#35AF94", 700: "#2D9B83", 800: "#268873", 900: "#1A6657", 950: "#0d3329" }, green: { 50: "#E8F5E9", 100: "#C8E6C9", 200: "#A5D6A7", 300: "#81C784", 400: "#66BB6A", 500: "#4CAF50", 600: "#43A047", 700: "#388E3C", 800: "#2E7D32", 900: "#1B5E20", 950: "#0e2f10" }, lime: { 50: "#F9FBE7", 100: "#F0F4C3", 200: "#E6EE9C", 300: "#DCE775", 400: "#D4E157", 500: "#CDDC39", 600: "#C0CA33", 700: "#AFB42B", 800: "#9E9D24", 900: "#827717", 950: "#413c0c" }, red: { 50: "#FFEBEE", 100: "#FFCDD2", 200: "#EF9A9A", 300: "#E57373", 400: "#EF5350", 500: "#F44336", 600: "#E53935", 700: "#D32F2F", 800: "#C62828", 900: "#B71C1C", 950: "#5c0e0e" }, orange: { 50: "#FFF3E0", 100: "#FFE0B2", 200: "#FFCC80", 300: "#FFB74D", 400: "#FFA726", 500: "#FF9800", 600: "#FB8C00", 700: "#F57C00", 800: "#EF6C00", 900: "#E65100", 950: "#732900" }, amber: { 50: "#FFF8E1", 100: "#FFECB3", 200: "#FFE082", 300: "#FFD54F", 400: "#FFCA28", 500: "#FFC107", 600: "#FFB300", 700: "#FFA000", 800: "#FF8F00", 900: "#FF6F00", 950: "#803800" }, yellow: { 50: "#FFFDE7", 100: "#FFF9C4", 200: "#FFF59D", 300: "#FFF176", 400: "#FFEE58", 500: "#FFEB3B", 600: "#FDD835", 700: "#FBC02D", 800: "#F9A825", 900: "#F57F17", 950: "#7b400c" }, teal: { 50: "#E0F2F1", 100: "#B2DFDB", 200: "#80CBC4", 300: "#4DB6AC", 400: "#26A69A", 500: "#009688", 600: "#00897B", 700: "#00796B", 800: "#00695C", 900: "#004D40", 950: "#002720" }, cyan: { 50: "#E0F7FA", 100: "#B2EBF2", 200: "#80DEEA", 300: "#4DD0E1", 400: "#26C6DA", 500: "#00BCD4", 600: "#00ACC1", 700: "#0097A7", 800: "#00838F", 900: "#006064", 950: "#003032" }, sky: { 50: "#E1F5FE", 100: "#B3E5FC", 200: "#81D4FA", 300: "#4FC3F7", 400: "#29B6F6", 500: "#03A9F4", 600: "#039BE5", 700: "#0288D1", 800: "#0277BD", 900: "#01579B", 950: "#012c4e" }, blue: { 50: "#E3F2FD", 100: "#BBDEFB", 200: "#90CAF9", 300: "#64B5F6", 400: "#42A5F5", 500: "#2196F3", 600: "#1E88E5", 700: "#1976D2", 800: "#1565C0", 900: "#0D47A1", 950: "#072451" }, indigo: { 50: "#E8EAF6", 100: "#C5CAE9", 200: "#9FA8DA", 300: "#7986CB", 400: "#5C6BC0", 500: "#3F51B5", 600: "#3949AB", 700: "#303F9F", 800: "#283593", 900: "#1A237E", 950: "#0d123f" }, violet: { 50: "#EDE7F6", 100: "#D1C4E9", 200: "#B39DDB", 300: "#9575CD", 400: "#7E57C2", 500: "#673AB7", 600: "#5E35B1", 700: "#512DA8", 800: "#4527A0", 900: "#311B92", 950: "#190e49" }, purple: { 50: "#F3E5F5", 100: "#E1BEE7", 200: "#CE93D8", 300: "#BA68C8", 400: "#AB47BC", 500: "#9C27B0", 600: "#8E24AA", 700: "#7B1FA2", 800: "#6A1B9A", 900: "#4A148C", 950: "#250a46" }, fuchsia: { 50: "#FDE6F3", 100: "#FBC1E3", 200: "#F897D1", 300: "#F56DBF", 400: "#F34DB2", 500: "#F12DA5", 600: "#E0289D", 700: "#CC2392", 800: "#B81E88", 900: "#951777", 950: "#4b0c3c" }, pink: { 50: "#FCE4EC", 100: "#F8BBD0", 200: "#F48FB1", 300: "#F06292", 400: "#EC407A", 500: "#E91E63", 600: "#D81B60", 700: "#C2185B", 800: "#AD1457", 900: "#880E4F", 950: "#440728" }, rose: { 50: "#FFF0F0", 100: "#FFD9D9", 200: "#FFC0C0", 300: "#FFA7A7", 400: "#FF8E8E", 500: "#FF7575", 600: "#FF5252", 700: "#FF3838", 800: "#F71C1C", 900: "#D50000", 950: "#3E0000" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var r173 = { transitionDuration: "0.2s", focusRing: { width: "0", style: "none", color: "unset", offset: "0" }, disabledOpacity: "0.38", iconSize: "1rem", anchorGutter: "0", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.75rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.625rem" }, lg: { fontSize: "1.125rem", paddingX: "0.825rem", paddingY: "0.825rem" }, borderRadius: "{border.radius.sm}", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "-2px", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.5rem 0", gap: "0", header: { padding: "0.75rem 1rem" }, option: { padding: "0.75rem 1rem", borderRadius: "{border.radius.none}" }, optionGroup: { padding: "0.75rem 1rem", fontWeight: "700" } }, content: { borderRadius: "{border.radius.sm}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.5rem 0", gap: "0" }, item: { padding: "0.75rem 1rem", borderRadius: "{border.radius.none}", gap: "0.5rem" }, submenuLabel: { padding: "0.75rem 1rem", fontWeight: "700" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.sm}", shadow: "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)" }, popover: { borderRadius: "{border.radius.sm}", padding: "1rem", shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)" }, modal: { borderRadius: "{border.radius.sm}", padding: "1.5rem", shadow: "0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)" }, navigation: { shadow: "0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)" } }, colorScheme: { light: { focusRing: { shadow: "0 0 1px 4px {surface.200}" }, surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.400}", activeColor: "{primary.300}" }, highlight: { background: "color-mix(in srgb, {primary.color}, transparent 88%)", focusBackground: "color-mix(in srgb, {primary.color}, transparent 76%)", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.32)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.300}", filledBackground: "{surface.100}", filledHoverBackground: "{surface.200}", filledFocusBackground: "{surface.100}", borderColor: "{surface.400}", hoverBorderColor: "{surface.900}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.800}", color: "{surface.900}", disabledColor: "{surface.600}", placeholderColor: "{surface.600}", invalidPlaceholderColor: "{red.800}", floatLabelColor: "{surface.600}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.600}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.600}", shadow: "none" }, text: { color: "{surface.900}", hoverColor: "{surface.900}", mutedColor: "{surface.600}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.300}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.0}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.0}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.0}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.600}", focusColor: "{surface.600}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.200}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.600}", focusColor: "{surface.600}", activeColor: "{surface.600}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{surface.600}", focusColor: "{surface.600}", activeColor: "{surface.600}" } } }, dark: { focusRing: { shadow: "0 0 1px 4px {surface.700}" }, surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.700}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.300}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.400}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.900}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.900}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.900}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e121 = { primitive: o179, semantic: r173 };

// node_modules/@primeuix/themes/dist/material/blockui/index.mjs
var r174 = { borderRadius: "{content.border.radius}" };
var o180 = { root: r174, css: "" };

// node_modules/@primeuix/themes/dist/material/breadcrumb/index.mjs
var o181 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r175 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i63 = { color: "{navigation.item.icon.color}" };
var t87 = { root: o181, item: r175, separator: i63, css: "" };

// node_modules/@primeuix/themes/dist/material/button/index.mjs
var r176 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "1rem", paddingY: "0.625rem", iconOnlyWidth: "3rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2.5rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3.5rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o182 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.400}", activeBackground: "{sky.300}", borderColor: "{sky.500}", hoverBorderColor: "{sky.400}", activeBorderColor: "{sky.300}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.400}", activeBackground: "{green.300}", borderColor: "{green.500}", hoverBorderColor: "{green.400}", activeBorderColor: "{green.300}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.400}", activeBackground: "{orange.300}", borderColor: "{orange.500}", hoverBorderColor: "{orange.400}", activeBorderColor: "{orange.300}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.400}", activeBackground: "{purple.300}", borderColor: "{purple.500}", hoverBorderColor: "{purple.400}", activeBorderColor: "{purple.300}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.400}", activeBackground: "{red.300}", borderColor: "{red.500}", hoverBorderColor: "{red.400}", activeBorderColor: "{red.300}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.950}", hoverBorderColor: "{surface.800}", activeBorderColor: "{surface.700}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.600}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.500}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.500}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.500}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.500}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.500}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.950}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.900}", color: "{surface.900}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.900}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var css7 = "\n.p-button:focus-visible {\n    background: dt('button.primary.active.background');\n    border-color: dt('button.primary.active.background');\n}\n\n.p-button-secondary:focus-visible {\n    background: dt('button.secondary.active.background');\n    border-color: dt('button.secondary.active.background');\n}\n\n.p-button-success:focus-visible {\n    background: dt('button.success.active.background');\n    border-color: dt('button.success.active.background');\n}\n\n.p-button-info:focus-visible {\n    background: dt('button.info.active.background');\n    border-color: dt('button.info.active.background');\n}\n\n.p-button-warn:focus-visible {\n    background: dt('button.warn.active.background');\n    border-color: dt('button.warn.active.background');\n}\n\n.p-button-help:focus-visible {\n    background: dt('button.help.active.background');\n    border-color: dt('button.help.active.background');\n}\n\n.p-button-danger:focus-visible {\n    background: dt('button.danger.active.background');\n    border-color: dt('button.danger.active.background');\n}\n\n.p-button-contrast:focus-visible {\n    background: dt('button.contrast.active.background');\n    border-color: dt('button.contrast.active.background');\n}\n\n.p-button-link:focus-visible {\n    background: color-mix(in srgb, dt('primary.color'), transparent 84%);\n    border-color: transparent;\n}\n\n.p-button-text:focus-visible {\n    background: dt('button.text.primary.active.background');\n    border-color: transparent;\n}\n\n.p-button-secondary.p-button-text:focus-visible {\n    background: dt('button.text.secondary.active.background');\n    border-color: transparent;\n}\n\n.p-button-success.p-button-text:focus-visible {\n    background: dt('button.text.success.active.background');\n    border-color: transparent;\n}\n\n.p-button-info.p-button-text:focus-visible {\n    background: dt('button.text.info.active.background');\n    border-color: transparent;\n}\n\n.p-button-warn.p-button-text:focus-visible {\n    background: dt('button.text.warn.active.background');\n    border-color: transparent;\n}\n\n.p-button-help.p-button-text:focus-visible {\n    background: dt('button.text.help.active.background');\n    border-color: transparent;\n}\n\n.p-button-danger.p-button-text:focus-visible {\n    background: dt('button.text.danger.active.background');\n    border-color: transparent;\n}\n\n.p-button-contrast.p-button-text:focus-visible {\n    background: dt('button.text.contrast.active.background');\n    border-color: transparent;\n}\n\n.p-button-plain.p-button-text:focus-visible {\n    background: dt('button.text.plain.active.background');\n    border-color: transparent;\n}\n\n.p-button-outlined:focus-visible {\n    background: dt('button.outlined.primary.active.background');\n}\n\n.p-button-secondary.p-button-outlined:focus-visible {\n    background: dt('button.outlined.secondary.active.background');\n    border-color: dt('button.outlined.secondary.border.color');\n}\n\n.p-button-success.p-button-outlined:focus-visible {\n    background: dt('button.outlined.success.active.background');\n}\n\n.p-button-info.p-button-outlined:focus-visible {\n    background: dt('button.outlined.info.active.background');\n}\n\n.p-button-warn.p-button-outlined:focus-visible {\n    background: dt('button.outlined.warn.active.background');\n}\n\n.p-button-help.p-button-outlined:focus-visible {\n    background: dt('button.outlined.help.active.background');\n}\n\n.p-button-danger.p-button-outlined:focus-visible {\n    background: dt('button.outlined.danger.active.background');\n}\n\n.p-button-contrast.p-button-outlined:focus-visible {\n    background: dt('button.outlined.contrast.active.background');\n}\n\n.p-button-plain.p-button-outlined:focus-visible {\n    background: dt('button.outlined.plain.active.background');\n}\n";
var e122 = { root: r176, colorScheme: o182, css: css7 };

// node_modules/@primeuix/themes/dist/material/card/index.mjs
var o183 = { background: "{content.background}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)" };
var r177 = { padding: "1.5rem", gap: "0.75rem" };
var t88 = { gap: "0.5rem" };
var e123 = { fontSize: "1.25rem", fontWeight: "500" };
var a91 = { color: "{text.muted.color}" };
var d75 = { root: o183, body: r177, caption: t88, title: e123, subtitle: a91, css: "" };

// node_modules/@primeuix/themes/dist/material/carousel/index.mjs
var o184 = { transitionDuration: "{transition.duration}" };
var r178 = { gap: "0.25rem" };
var n78 = { padding: "1rem", gap: "1rem" };
var a92 = { width: "1.25rem", height: "1.25rem", borderRadius: "50%", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var t89 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var css8 = "\n.p-carousel-indicator-button:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-carousel-indicator-button:focus-visible {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 92%);\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 84%);\n}\n";
var i64 = { root: o184, content: r178, indicatorList: n78, indicator: a92, colorScheme: t89, css: css8 };

// node_modules/@primeuix/themes/dist/material/cascadeselect/index.mjs
var o185 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var e124 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r179 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d76 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var c65 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var l38 = { color: "{form.field.icon.color}" };
var css9 = "\n.p-cascadeselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('cascadeselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('cascadeselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('cascadeselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));\n}\n\n.p-cascadeselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));\n}\n\n.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));\n}\n\n.p-cascadeselect-option {\n    transition: none;\n}\n";
var a93 = { root: o185, dropdown: e124, overlay: r179, list: d76, option: c65, clearIcon: l38, css: css9 };

// node_modules/@primeuix/themes/dist/material/checkbox/index.mjs
var o186 = { borderRadius: "{border.radius.xs}", width: "18px", height: "18px", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "14px", height: "14px" }, lg: { width: "22px", height: "22px" } };
var r180 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var css10 = `
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow dt('checkbox.transition.duration');
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`;
var c66 = { root: o186, icon: r180, css: css10 };

// node_modules/@primeuix/themes/dist/material/chip/index.mjs
var o187 = { borderRadius: "2rem", paddingX: "0.75rem", paddingY: "0.75rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r181 = { width: "2.25rem", height: "2.25rem" };
var e125 = { size: "1rem" };
var c67 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}" } };
var s25 = { light: { root: { background: "{surface.200}", color: "{surface.900}" }, icon: { color: "{surface.600}" }, removeIcon: { color: "{surface.600}", focusRing: { shadow: "0 0 1px 4px {surface.300}" } } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}", focusRing: { shadow: "0 0 1px 4px {surface.600}" } } } };
var a94 = { root: o187, image: r181, icon: e125, removeIcon: c67, colorScheme: s25, css: "" };

// node_modules/@primeuix/themes/dist/material/colorpicker/index.mjs
var r182 = { transitionDuration: "{transition.duration}" };
var o188 = { width: "2rem", height: "2rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e126 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a95 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s26 = { root: r182, preview: o188, panel: e126, colorScheme: a95, css: "" };

// node_modules/@primeuix/themes/dist/material/confirmdialog/index.mjs
var o189 = { size: "2rem", color: "{overlay.modal.color}" };
var e127 = { gap: "1rem" };
var r183 = { icon: o189, content: e127, css: "" };

// node_modules/@primeuix/themes/dist/material/confirmpopup/index.mjs
var o190 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r184 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e128 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p9 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a96 = { root: o190, content: r184, icon: e128, footer: p9, css: "" };

// node_modules/@primeuix/themes/dist/material/contextmenu/index.mjs
var o191 = { background: "{content.background}", borderColor: "transparent", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i65 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n79 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a97 = { mobileIndent: "1rem" };
var t90 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r185 = { borderColor: "{content.border.color}" };
var c68 = { root: o191, list: i65, item: n79, submenu: a97, submenuIcon: t90, separator: r185, css: "" };

// node_modules/@primeuix/themes/dist/material/datatable/index.mjs
var o192 = { transitionDuration: "{transition.duration}" };
var r186 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e129 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d77 = { fontWeight: "600" };
var t91 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l39 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c69 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var n80 = { fontWeight: "600" };
var a98 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i66 = { color: "{primary.color}" };
var s27 = { width: "0.5rem" };
var g12 = { width: "1px", color: "{primary.color}" };
var u15 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b11 = { size: "2rem" };
var p10 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m11 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h10 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f22 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v7 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css11 = "\n.p-datatable-header-cell,\n.p-datatable-tbody > tr {\n    transition: none;\n}\n";
var k8 = { root: o192, header: r186, headerCell: e129, columnTitle: d77, row: t91, bodyCell: l39, footerCell: c69, columnFooter: n80, footer: a98, dropPoint: i66, columnResizer: s27, resizeIndicator: g12, sortIcon: u15, loadingIcon: b11, rowToggleButton: p10, filter: m11, paginatorTop: h10, paginatorBottom: f22, colorScheme: v7, css: css11 };

// node_modules/@primeuix/themes/dist/material/dataview/index.mjs
var o193 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r187 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d78 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e130 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t92 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n81 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c70 = { root: o193, header: r187, content: d78, footer: e130, paginatorTop: t92, paginatorBottom: n81, css: "" };

// node_modules/@primeuix/themes/dist/material/datepicker/index.mjs
var o194 = { transitionDuration: "{transition.duration}" };
var r188 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "0.5rem" };
var e131 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var n82 = { gap: "0.5rem", fontWeight: "700" };
var d79 = { width: "3rem", sm: { width: "2.5rem" }, lg: { width: "3.5rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var c71 = { color: "{form.field.icon.color}" };
var t93 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.5rem 0.75rem", borderRadius: "{content.border.radius}" };
var a99 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.5rem 0.75rem", borderRadius: "{content.border.radius}" };
var i67 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l40 = { margin: "0.5rem 0 0 0" };
var u16 = { padding: "0.5rem", fontWeight: "700", color: "{content.color}" };
var s28 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", padding: "0.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g13 = { margin: "0.5rem 0 0 0" };
var h11 = { padding: "0.625rem", borderRadius: "{content.border.radius}" };
var b12 = { margin: "0.5rem 0 0 0" };
var p11 = { padding: "0.625rem", borderRadius: "{content.border.radius}" };
var f23 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var k9 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var m12 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var css12 = "\n.p-datepicker-header {\n    justify-content: start;\n}\n\n.p-datepicker-title {\n    order: 1;\n}\n\n.p-datepicker-prev-button {\n    order: 2;\n    margin-inline-start: auto;\n}\n\n.p-datepicker-next-button {\n    order: 2;\n    margin-inline-start: 0.5rem;\n}\n\n.p-datepicker-select-month:focus-visible {\n    background: dt('datepicker.select.month.hover.background');\n    color: dt('datepicker.select.month.hover.color');\n    outline: 0 none;\n}\n\n.p-datepicker-select-year:focus-visible {\n    background: dt('datepicker.select.year.hover.background');\n    color: dt('datepicker.select.year.hover.color');\n    outline: 0 none;\n}\n\n.p-datepicker-dropdown:focus-visible {\n    outline: 0 none;\n    background: dt('datepicker.dropdown.hover.background');\n    border-color: dt('datepicker.dropdown.hover.border.color');\n    color: dt('datepicker.dropdown.hover.color');\n}\n";
var v8 = { root: o194, panel: r188, header: e131, title: n82, dropdown: d79, inputIcon: c71, selectMonth: t93, selectYear: a99, group: i67, dayView: l40, weekDay: u16, date: s28, monthView: g13, month: h11, yearView: b12, year: p11, buttonbar: f23, timePicker: k9, colorScheme: m12, css: css12 };

// node_modules/@primeuix/themes/dist/material/dialog/index.mjs
var o195 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a100 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d80 = { fontSize: "1.25rem", fontWeight: "600" };
var r189 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l41 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e132 = { root: o195, header: a100, title: d80, content: r189, footer: l41, css: "" };

// node_modules/@primeuix/themes/dist/material/divider/index.mjs
var r190 = { borderColor: "{content.border.color}" };
var o196 = { background: "{content.background}", color: "{text.color}" };
var n83 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e133 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t94 = { root: r190, content: o196, horizontal: n83, vertical: e133, css: "" };

// node_modules/@primeuix/themes/dist/material/dock/index.mjs
var r191 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o197 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s29 = { root: r191, item: o197, css: "" };

// node_modules/@primeuix/themes/dist/material/drawer/index.mjs
var o198 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a101 = { padding: "{overlay.modal.padding}" };
var d81 = { fontSize: "1.5rem", fontWeight: "600" };
var r192 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l42 = { padding: "{overlay.modal.padding}" };
var e134 = { root: o198, header: a101, title: d81, content: r192, footer: l42, css: "" };

// node_modules/@primeuix/themes/dist/material/editor/index.mjs
var o199 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r193 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e135 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t95 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d82 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var css13 = "\n.p-editor .p-editor-toolbar {\n    padding: 0.75rem\n}\n";
var l43 = { toolbar: o199, toolbarItem: r193, overlay: e135, overlayOption: t95, content: d82, css: css13 };

// node_modules/@primeuix/themes/dist/material/fieldset/index.mjs
var o200 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.25rem 1.25rem 1.25rem", transitionDuration: "{transition.duration}" };
var r194 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.75rem 1rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var n84 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t96 = { padding: "0" };
var css14 = "\n.p-fieldset-toggle-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var e136 = { root: o200, legend: r194, toggleIcon: n84, content: t96, css: css14 };

// node_modules/@primeuix/themes/dist/material/fileupload/index.mjs
var r195 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o201 = { background: "transparent", color: "{text.color}", padding: "1.25rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e137 = { highlightBorderColor: "{primary.color}", padding: "0 1.25rem 1.25rem 1.25rem", gap: "1rem" };
var t97 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a102 = { gap: "0.5rem" };
var n85 = { height: "0.25rem" };
var d83 = { gap: "0.5rem" };
var i68 = { root: r195, header: o201, content: e137, file: t97, fileList: a102, progressbar: n85, basic: d83, css: "" };

// node_modules/@primeuix/themes/dist/material/floatlabel/index.mjs
var o202 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i69 = { active: { top: "-1.25rem" } };
var r196 = { input: { paddingTop: "1.5rem", paddingBottom: "0.5rem" }, active: { top: "0.5rem" } };
var e138 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var a103 = { root: o202, over: i69, in: r196, on: e138, css: "" };

// node_modules/@primeuix/themes/dist/material/galleria/index.mjs
var o203 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r197 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e139 = { size: "1.5rem" };
var c72 = { background: "{content.background}", padding: "1rem 0.25rem" };
var t98 = { size: "2rem", borderRadius: "50%", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var a104 = { size: "1rem" };
var n86 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s30 = { gap: "0.5rem", padding: "1rem" };
var u17 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i70 = { background: "rgba(0, 0, 0, 0.5)" };
var d84 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g14 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f24 = { size: "1.5rem" };
var h12 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l44 = { root: o203, navButton: r197, navIcon: e139, thumbnailsContent: c72, thumbnailNavButton: t98, thumbnailNavButtonIcon: a104, caption: n86, indicatorList: s30, indicatorButton: u17, insetIndicatorList: i70, insetIndicatorButton: d84, closeButton: g14, closeButtonIcon: f24, colorScheme: h12, css: "" };

// node_modules/@primeuix/themes/dist/material/iconfield/index.mjs
var o204 = { color: "{form.field.icon.color}" };
var c73 = { icon: o204, css: "" };

// node_modules/@primeuix/themes/dist/material/iftalabel/index.mjs
var o205 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "0.5rem", fontSize: "0.75rem", fontWeight: "400" };
var l45 = { paddingTop: "1.5rem", paddingBottom: "0.5rem" };
var i71 = { root: o205, input: l45, css: "" };

// node_modules/@primeuix/themes/dist/material/image/index.mjs
var o206 = { transitionDuration: "{transition.duration}" };
var r198 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a105 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i72 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e140 = { root: o206, preview: r198, toolbar: a105, action: i72, css: "" };

// node_modules/@primeuix/themes/dist/material/imagecompare/index.mjs
var o207 = { size: "20px", hoverSize: "40px", background: "rgba(255,255,255,0.4)", hoverBackground: "rgba(255,255,255,0.6)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r199 = { handle: o207, css: "" };

// node_modules/@primeuix/themes/dist/material/inlinemessage/index.mjs
var r200 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o208 = { fontWeight: "500" };
var e141 = { size: "1rem" };
var n87 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a106 = { root: r200, text: o208, icon: e141, colorScheme: n87, css: "" };

// node_modules/@primeuix/themes/dist/material/inplace/index.mjs
var o209 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r201 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n88 = { root: o209, display: r201, css: "" };

// node_modules/@primeuix/themes/dist/material/inputchips/index.mjs
var o210 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r202 = { borderRadius: "{border.radius.sm}" };
var d85 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f25 = { root: o210, chip: r202, colorScheme: d85, css: "" };

// node_modules/@primeuix/themes/dist/material/inputgroup/index.mjs
var r203 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.75rem", minWidth: "3rem" };
var css15 = "\n.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {\n    border-block-start-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n";
var o211 = { addon: r203, css: css15 };

// node_modules/@primeuix/themes/dist/material/inputnumber/index.mjs
var r204 = { transitionDuration: "{transition.duration}" };
var o212 = { width: "3rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e142 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var css16 = "\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    top: 2px;\n    right: 2px;\n    height: calc(100% - 4px);\n}\n\n.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-start-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-color: dt('inputtext.filled.background');\n    border-inline-color: dt('inputtext.filled.background');\n    background: dt('inputtext.filled.background') no-repeat;\n}\n\n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {\n    border-block-end: 1px solid dt('inputtext.border.color')\n}\n";
var n89 = { root: r204, button: o212, colorScheme: e142, css: css16 };

// node_modules/@primeuix/themes/dist/material/inputotp/index.mjs
var r205 = { gap: "0.5rem" };
var t99 = { width: "3rem", sm: { width: "2.5rem" }, lg: { width: "3.5rem" } };
var e143 = { root: r205, input: t99, css: "" };

// node_modules/@primeuix/themes/dist/material/inputtext/index.mjs
var o213 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var css17 = "\n.p-inputtext.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('inputtext.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-inputtext.p-variant-filled:enabled:hover {\n    background: dt('inputtext.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    outline: 0 none;\n    background: dt('inputtext.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-inputtext.p-variant-filled:enabled:hover:focus {\n    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));\n}\n\n.p-inputtext.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));\n}\n\n.p-inputtext.p-variant-filled.p-invalid:enabled:focus {\n    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));\n}\n\n.p-inputtext.p-variant-filled:disabled {\n    background: dt('inputtext.disabled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n";
var r206 = { root: o213, css: css17 };

// node_modules/@primeuix/themes/dist/material/knob/index.mjs
var o214 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r207 = { background: "{primary.color}" };
var t100 = { background: "{content.border.color}" };
var n90 = { color: "{text.muted.color}" };
var s31 = { root: o214, value: r207, range: t100, text: n90, css: "" };

// node_modules/@primeuix/themes/dist/material/listbox/index.mjs
var o215 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r208 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i73 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d86 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t101 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e144 = { padding: "{list.option.padding}" };
var l46 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var css18 = "\n.p-listbox-option {\n    transition: none;\n}\n";
var n91 = { root: o215, list: r208, option: i73, optionGroup: d86, checkmark: t101, emptyMessage: e144, colorScheme: l46, css: css18 };

// node_modules/@primeuix/themes/dist/material/megamenu/index.mjs
var o216 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n92 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var a107 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var i74 = { padding: "0", background: "{content.background}", borderColor: "transparent", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var t102 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var r209 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e145 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c74 = { borderColor: "{content.border.color}" };
var d87 = { borderRadius: "50%", size: "2.5rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css19 = "\n.p-megamenu-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var g15 = { root: o216, baseItem: n92, item: a107, overlay: i74, submenu: t102, submenuLabel: r209, submenuIcon: e145, separator: c74, mobileButton: d87, css: css19 };

// node_modules/@primeuix/themes/dist/material/menu/index.mjs
var o217 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n93 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a108 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i75 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var r210 = { borderColor: "{content.border.color}" };
var css20 = "\n.p-menu-overlay {\n    border-color: transparent;\n}\n";
var t103 = { root: o217, list: n93, item: a108, submenuLabel: i75, separator: r210, css: css20 };

// node_modules/@primeuix/themes/dist/material/menubar/index.mjs
var o218 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var n94 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i76 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a109 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "transparent", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var r211 = { borderColor: "{content.border.color}" };
var t104 = { borderRadius: "50%", size: "2.5rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css21 = "\n.p-menubar-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var e146 = { root: o218, baseItem: n94, item: i76, submenu: a109, separator: r211, mobileButton: t104, css: css21 };

// node_modules/@primeuix/themes/dist/material/message/index.mjs
var o219 = { borderRadius: "{content.border.radius}", borderWidth: "0", transitionDuration: "{transition.duration}" };
var r212 = { padding: "1rem 1.25rem", gap: "0.5rem", sm: { padding: "0.625rem 0.625rem" }, lg: { padding: "0.825rem 0.825rem" } };
var e147 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n95 = { size: "1.25rem", sm: { size: "1rem" }, lg: { size: "1.5rem" } };
var l47 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c75 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var s32 = { root: { borderWidth: "1px" } };
var a110 = { content: { padding: "0" } };
var d88 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "none", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "none", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.900}", shadow: "none", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.900}", borderColor: "{yellow.900}" }, simple: { color: "{yellow.900}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "none", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.600}", borderColor: "{surface.600}" }, simple: { color: "{surface.600}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "none", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "none", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "none", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u18 = { root: o219, content: r212, text: e147, icon: n95, closeButton: l47, closeIcon: c75, outlined: s32, simple: a110, colorScheme: d88, css: "" };

// node_modules/@primeuix/themes/dist/material/metergroup/index.mjs
var e148 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r213 = { background: "{content.border.color}", size: "0.5rem" };
var a111 = { gap: "0.5rem" };
var o220 = { size: "0.5rem" };
var l48 = { size: "1rem" };
var t105 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var s33 = { root: e148, meters: r213, label: a111, labelMarker: o220, labelIcon: l48, labelList: t105, css: "" };

// node_modules/@primeuix/themes/dist/material/multiselect/index.mjs
var o221 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r214 = { width: "2.5rem", color: "{form.field.icon.color}" };
var e149 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d89 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var l49 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.75rem" };
var i77 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t106 = { color: "{form.field.icon.color}" };
var n96 = { borderRadius: "{border.radius.sm}" };
var c76 = { padding: "{list.option.padding}" };
var css22 = "\n.p-multiselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('multiselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('multiselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('multiselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));\n}\n\n.p-multiselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));\n}\n\n.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));\n}\n\n.p-multiselect-option {\n    transition: none;\n}\n";
var a112 = { root: o221, dropdown: r214, overlay: e149, list: d89, option: l49, optionGroup: i77, chip: n96, clearIcon: t106, emptyMessage: c76, css: css22 };

// node_modules/@primeuix/themes/dist/material/orderlist/index.mjs
var r215 = { gap: "1.125rem" };
var a113 = { gap: "0.5rem" };
var o222 = { root: r215, controls: a113, css: "" };

// node_modules/@primeuix/themes/dist/material/organizationchart/index.mjs
var o223 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r216 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "1rem 1.25rem", toggleablePadding: "1rem 1.25rem 1.5rem 1.25rem", borderRadius: "{content.border.radius}" };
var e150 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t107 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n97 = { root: o223, node: r216, nodeToggleButton: e150, connector: t107, css: "" };

// node_modules/@primeuix/themes/dist/material/overlaybadge/index.mjs
var o224 = { outline: { width: "2px", color: "{content.background}" } };
var t108 = { root: o224, css: "" };

// node_modules/@primeuix/themes/dist/material/paginator/index.mjs
var o225 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r217 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t109 = { color: "{text.muted.color}" };
var e151 = { maxWidth: "2.5rem" };
var n98 = { root: o225, navButton: r217, currentPageReport: t109, jumpToPageInput: e151, css: "" };

// node_modules/@primeuix/themes/dist/material/panel/index.mjs
var r218 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o226 = { background: "transparent", color: "{text.color}", padding: "1.25rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e152 = { padding: "0.5rem 1.25rem" };
var d90 = { fontWeight: "600" };
var t110 = { padding: "0 1.25rem 1.25rem 1.25rem" };
var n99 = { padding: "0 1.25rem 1.25rem 1.25rem" };
var a114 = { root: r218, header: o226, toggleableHeader: e152, title: d90, content: t110, footer: n99, css: "" };

// node_modules/@primeuix/themes/dist/material/panelmenu/index.mjs
var o227 = { gap: "0", transitionDuration: "{transition.duration}" };
var n100 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "0", color: "{content.color}", padding: "0", borderRadius: "0", first: { borderWidth: "0", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0", bottomBorderRadius: "{content.border.radius}" } };
var r219 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var t111 = { indent: "1rem" };
var a115 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var css23 = "\n.p-panelmenu-panel {\n    box-shadow: 0 0 0 1px dt('panelmenu.panel.border.color');\n    transition: margin dt('panelmenu.transition.duration');\n}\n\n.p-panelmenu-panel:has(.p-panelmenu-header-active) {\n    margin: 1rem 0;\n}\n\n.p-panelmenu-panel:first-child {\n    border-top-left-radius: dt('content.border.radius');\n    border-top-right-radius: dt('content.border.radius');\n    margin-top: 0;\n}\n\n.p-panelmenu-panel:last-child {\n    border-bottom-left-radius: dt('content.border.radius');\n    border-bottom-right-radius: dt('content.border.radius');\n    margin-bottom: 0;\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var i78 = { root: o227, panel: n100, item: r219, submenu: t111, submenuIcon: a115, css: css23 };

// node_modules/@primeuix/themes/dist/material/password/index.mjs
var r220 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o228 = { color: "{form.field.icon.color}" };
var e153 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a116 = { gap: "0.5rem" };
var d91 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n101 = { meter: r220, icon: o228, overlay: e153, content: a116, colorScheme: d91, css: "" };

// node_modules/@primeuix/themes/dist/material/picklist/index.mjs
var r221 = { gap: "1.125rem" };
var a117 = { gap: "0.5rem" };
var o229 = { root: r221, controls: a117, css: "" };

// node_modules/@primeuix/themes/dist/material/popover/index.mjs
var o230 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r222 = { padding: "{overlay.popover.padding}" };
var e154 = { root: o230, content: r222, css: "" };

// node_modules/@primeuix/themes/dist/material/progressbar/index.mjs
var r223 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1rem" };
var o231 = { background: "{primary.color}" };
var e155 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t112 = { root: r223, value: o231, label: e155, css: "" };

// node_modules/@primeuix/themes/dist/material/progressspinner/index.mjs
var o232 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r224 = { colorScheme: o232, css: "" };

// node_modules/@primeuix/themes/dist/material/radiobutton/index.mjs
var o233 = { width: "20px", height: "20px", background: "{form.field.background}", checkedBackground: "{primary.contrast.color}", checkedHoverBackground: "{primary.contrast.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "16px", height: "16px" }, lg: { width: "24px", height: "24px" } };
var r225 = { size: "10px", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "8px" }, lg: { size: "12px" } };
var css24 = "\n.p-radiobutton {\n    border-radius: 50%;\n    transition: box-shadow dt('radiobutton.transition.duration');\n}\n\n.p-radiobutton-box {\n    border-width: 2px;\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 92%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('radiobutton.checked.border.color'), transparent 84%);\n}\n";
var d92 = { root: o233, icon: r225, css: css24 };

// node_modules/@primeuix/themes/dist/material/rating/index.mjs
var o234 = { gap: "0.5rem", transitionDuration: "{transition.duration}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var n102 = { size: "1.125rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var css25 = "\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {\n    background: color-mix(in srgb, dt('rating.icon.color'), transparent 96%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.color'), transparent 96%);\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {\n    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);\n}\n\n.p-rating-option.p-focus-visible {\n    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);\n}\n";
var r226 = { root: o234, icon: n102, css: css25 };

// node_modules/@primeuix/themes/dist/material/ripple/index.mjs
var r227 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o235 = { colorScheme: r227, css: "" };

// node_modules/@primeuix/themes/dist/material/scrollpanel/index.mjs
var r228 = { transitionDuration: "{transition.duration}" };
var o236 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s34 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } };
var a118 = { root: r228, bar: o236, colorScheme: s34, css: "" };

// node_modules/@primeuix/themes/dist/material/select/index.mjs
var o237 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r229 = { width: "2.5rem", color: "{form.field.icon.color}" };
var e156 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d93 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var l50 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i79 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var n103 = { color: "{form.field.icon.color}" };
var t113 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var c77 = { padding: "{list.option.padding}" };
var css26 = "\n.p-select.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('select.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-select.p-variant-filled:not(.p-disabled):hover {\n    background: dt('select.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('select.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));\n}\n\n.p-select.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));\n}\n\n.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));\n}\n\n.p-select-option {\n    transition: none;\n}\n";
var a119 = { root: o237, dropdown: r229, overlay: e156, list: d93, option: l50, optionGroup: i79, clearIcon: n103, checkmark: t113, emptyMessage: c77, css: css26 };

// node_modules/@primeuix/themes/dist/material/selectbutton/index.mjs
var r230 = { borderRadius: "{form.field.border.radius}" };
var o238 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d94 = { root: r230, colorScheme: o238, css: "" };

// node_modules/@primeuix/themes/dist/material/skeleton/index.mjs
var r231 = { borderRadius: "{content.border.radius}" };
var a120 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o239 = { root: r231, colorScheme: a120, css: "" };

// node_modules/@primeuix/themes/dist/material/slider/index.mjs
var r232 = { transitionDuration: "{transition.duration}" };
var o240 = { background: "{content.border.color}", borderRadius: "{border.radius.xs}", size: "2px" };
var n104 = { background: "{primary.color}" };
var d95 = { width: "18px", height: "18px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", width: "18px", height: "18px", shadow: "0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)" }, focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var css27 = "\n.p-slider-handle {\n    transition: box-shadow dt('slider.transition.duration');\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 92%);\n}\n\n.p-slider-handle:focus-visible,\n.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 84%);\n}\n";
var a121 = { root: r232, track: o240, range: n104, handle: d95, css: css27 };

// node_modules/@primeuix/themes/dist/material/speeddial/index.mjs
var t114 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a122 = { root: t114, css: "" };

// node_modules/@primeuix/themes/dist/material/splitbutton/index.mjs
var r233 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d96 = { root: r233, css: "" };

// node_modules/@primeuix/themes/dist/material/splitter/index.mjs
var o241 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r234 = { background: "{content.border.color}" };
var n105 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t115 = { root: o241, gutter: r234, handle: n105, css: "" };

// node_modules/@primeuix/themes/dist/material/stepper/index.mjs
var r235 = { transitionDuration: "{transition.duration}" };
var o242 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e157 = { padding: "0.5rem", gap: "1rem" };
var t116 = { padding: "0.75rem 1rem", borderRadius: "{content.border.radius}", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, gap: "0.5rem" };
var a123 = { color: "{text.muted.color}", activeColor: "{text.color}", fontWeight: "500" };
var n106 = { activeBackground: "{primary.color}", activeBorderColor: "{primary.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c78 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var i80 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var d97 = { light: { stepNumber: { background: "{surface.400}", borderColor: "{surface.400}", color: "{surface.0}" } }, dark: { stepNumber: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.900}" } } };
var css28 = "\n.p-step-header:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var s35 = { root: r235, separator: o242, step: e157, stepHeader: t116, stepTitle: a123, stepNumber: n106, steppanels: c78, steppanel: i80, colorScheme: d97, css: css28 };

// node_modules/@primeuix/themes/dist/material/steps/index.mjs
var o243 = { transitionDuration: "{transition.duration}" };
var r236 = { background: "{content.border.color}" };
var t117 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e158 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var c79 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var n107 = { root: o243, separator: r236, itemLink: t117, itemLabel: e158, itemNumber: c79, css: "" };

// node_modules/@primeuix/themes/dist/material/tabmenu/index.mjs
var o244 = { transitionDuration: "{transition.duration}" };
var r237 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t118 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e159 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c80 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n108 = { root: o244, tablist: r237, item: t118, itemIcon: e159, activeBar: c80, css: "" };

// node_modules/@primeuix/themes/dist/material/tabs/index.mjs
var o245 = { transitionDuration: "{transition.duration}" };
var r238 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var n109 = { background: "transparent", hoverBackground: "{content.hover.background}", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.25rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var t119 = { background: "{content.background}", color: "{content.color}", padding: "1.25rem 1.25rem 1.25rem 1.25rem", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var e160 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "3rem", shadow: "none", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" } };
var a124 = { height: "2px", bottom: "-1px", background: "{primary.color}" };
var css29 = "\n.p-tabs-scrollable .p-tab {\n    flex-grow: 0\n}\n\n.p-tab-active {\n    --p-ripple-background: color-mix(in srgb, dt('primary.color'), transparent 90%);\n}\n\n.p-tab:not(.p-disabled):focus-visible {\n    background: dt('navigation.item.active.background');\n}\n\n.p-tablist-nav-button:focus-visible {\n    background: dt('navigation.item.active.background');\n}\n";
var c81 = { root: o245, tablist: r238, tab: n109, tabpanel: t119, navButton: e160, activeBar: a124, css: css29 };

// node_modules/@primeuix/themes/dist/material/tabview/index.mjs
var o246 = { transitionDuration: "{transition.duration}" };
var r239 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t120 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n110 = { background: "{content.background}", color: "{content.color}" };
var c82 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var a125 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e161 = { root: o246, tabList: r239, tab: t120, tabPanel: n110, navButton: c82, colorScheme: a125, css: "" };

// node_modules/@primeuix/themes/dist/material/tag/index.mjs
var r240 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o247 = { size: "0.75rem" };
var c83 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var a126 = { root: r240, icon: o247, colorScheme: c83, css: "" };

// node_modules/@primeuix/themes/dist/material/terminal/index.mjs
var r241 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o248 = { gap: "0.25rem" };
var d98 = { margin: "2px 0" };
var e162 = { root: r241, prompt: o248, commandResponse: d98, css: "" };

// node_modules/@primeuix/themes/dist/material/textarea/index.mjs
var o249 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var css30 = "\n.p-textarea.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('textarea.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-textarea.p-variant-filled:enabled:hover {\n    background: dt('textarea.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:focus {\n    outline: 0 none;\n    background: dt('textarea.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-textarea.p-variant-filled:enabled:hover:focus {\n    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));\n}\n\n.p-textarea.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));\n}\n\n.p-textarea.p-variant-filled.p-invalid:enabled:focus {\n    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));\n}\n";
var r242 = { root: o249, css: css30 };

// node_modules/@primeuix/themes/dist/material/tieredmenu/index.mjs
var o250 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n111 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var i81 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a127 = { mobileIndent: "1rem" };
var r243 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var t121 = { borderColor: "{content.border.color}" };
var css31 = "\n.p-tieredmenu-overlay {\n    border-color: transparent;\n}\n";
var c84 = { root: o250, list: n111, item: i81, submenu: a127, submenuIcon: r243, separator: t121, css: css31 };

// node_modules/@primeuix/themes/dist/material/timeline/index.mjs
var e163 = { minHeight: "5rem" };
var r244 = { eventContent: { padding: "1rem 0" } };
var o251 = { eventContent: { padding: "0 1rem" } };
var n112 = { size: "1.5rem", borderRadius: "50%", borderWidth: "2px", background: "{primary.color}", content: { borderRadius: "50%", size: "0", background: "{primary.color}", insetShadow: "none" } };
var t122 = { color: "{content.border.color}", size: "2px" };
var a128 = { light: { eventMarker: { borderColor: "{surface.0}" } }, dark: { eventMarker: { borderColor: "{surface.900}" } } };
var d99 = { event: e163, horizontal: r244, vertical: o251, eventMarker: n112, eventConnector: t122, colorScheme: a128, css: "" };

// node_modules/@primeuix/themes/dist/material/toast/index.mjs
var o252 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0", transitionDuration: "{transition.duration}" };
var r245 = { size: "1.25rem" };
var e164 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a129 = { gap: "0.5rem" };
var p12 = { fontWeight: "500", fontSize: "1rem" };
var x3 = { fontWeight: "500", fontSize: "0.875rem" };
var n113 = { width: "2rem", height: "2rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c85 = { size: "1rem" };
var s36 = { light: { root: { blur: "0" }, info: { background: "{blue.50}", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "{green.50}", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "{yellow.50}", borderColor: "{yellow.200}", color: "{yellow.900}", detailColor: "{surface.700}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "{red.50}", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 36%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{surface.0}", detailColor: "{blue.100}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 36%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{surface.0}", detailColor: "{green.100}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 36%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{surface.0}", detailColor: "{yellow.50}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 36%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{surface.0}", detailColor: "{red.100}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var l51 = { root: o252, icon: r245, content: e164, text: a129, summary: p12, detail: x3, closeButton: n113, closeIcon: c85, colorScheme: s36, css: "" };

// node_modules/@primeuix/themes/dist/material/togglebutton/index.mjs
var o253 = { padding: "0.75rem 1rem", borderRadius: "{form.field.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedColor: "{form.field.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "0", style: "none", offset: "0", color: "unset", shadow: "none" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.625rem 0.75rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.875rem 1.25rem" } };
var r246 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{text.muted.color}", disabledColor: "{form.field.disabled.color}" };
var e165 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var d100 = { light: { root: { hoverBackground: "{surface.100}", checkedBackground: "{surface.200}" } }, dark: { root: { hoverBackground: "{surface.800}", checkedBackground: "{surface.700}" } } };
var css32 = "\n.p-togglebutton:focus-visible {\n    background: dt('togglebutton.hover.background');\n}\n";
var l52 = { root: o253, icon: r246, content: e165, colorScheme: d100, css: css32 };

// node_modules/@primeuix/themes/dist/material/toggleswitch/index.mjs
var r247 = { width: "2.75rem", height: "1rem", borderRadius: "30px", gap: "0px", shadow: "none", focusRing: { width: "0", style: "none", color: "unset", offset: "0", shadow: "none" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o254 = { borderRadius: "50%", size: "1.5rem" };
var e166 = { light: { root: { background: "{surface.300}", disabledBackground: "{surface.400}", hoverBackground: "{surface.300}", checkedBackground: "{primary.200}", checkedHoverBackground: "{primary.200}" }, handle: { background: "{surface.0}", disabledBackground: "{surface.200}", hoverBackground: "{surface.0}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.700}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.500}", hoverBackground: "{surface.300}", checkedBackground: "{primary.200}", checkedHoverBackground: "{primary.200}", color: "{surface.800}", hoverColor: "{surface.900}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}" } } };
var css33 = "\n.p-toggleswitch-handle {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n";
var a130 = { root: r247, handle: o254, colorScheme: e166, css: css33 };

// node_modules/@primeuix/themes/dist/material/toolbar/index.mjs
var r248 = { color: "{content.color}", borderRadius: "{content.border.radius}", gap: "0.5rem", padding: "1rem" };
var o255 = { light: { root: { background: "{surface.100}", borderColor: "{surface.100}" } }, dark: { root: { background: "{surface.800}", borderColor: "{surface.800}" } } };
var e167 = { root: r248, colorScheme: o255, css: "" };

// node_modules/@primeuix/themes/dist/material/tooltip/index.mjs
var r249 = { background: "{surface.600}", color: "{surface.0}", maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o256 = { root: r249, css: "" };

// node_modules/@primeuix/themes/dist/material/tree/index.mjs
var o257 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "2rem", transitionDuration: "{transition.duration}" };
var r250 = { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.xs}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e168 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t123 = { borderRadius: "50%", size: "2rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n114 = { size: "2rem" };
var c86 = { margin: "0 0 0.75rem 0" };
var css34 = "\n.p-tree-node-content {\n    transition: none;\n}\n";
var d101 = { root: o257, node: r250, nodeIcon: e168, nodeToggleButton: t123, loadingIcon: n114, filter: c86, css: css34 };

// node_modules/@primeuix/themes/dist/material/treeselect/index.mjs
var o258 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var e169 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r251 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d102 = { padding: "{list.padding}" };
var l53 = { padding: "{list.option.padding}" };
var t124 = { borderRadius: "{border.radius.sm}" };
var i82 = { color: "{form.field.icon.color}" };
var css35 = "\n.p-treeselect.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: dt('treeselect.filled.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled):hover {\n    background: dt('treeselect.filled.hover.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: dt('treeselect.filled.focus.background') no-repeat;\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));\n}\n\n.p-treeselect.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));\n}\n\n.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));\n}\n";
var n115 = { root: o258, dropdown: e169, overlay: r251, tree: d102, emptyMessage: l53, chip: t124, clearIcon: i82, css: css35 };

// node_modules/@primeuix/themes/dist/material/treetable/index.mjs
var o259 = { transitionDuration: "{transition.duration}" };
var r252 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e170 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t125 = { fontWeight: "600" };
var c87 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n116 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l54 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d103 = { fontWeight: "600" };
var i83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var a131 = { width: "0.5rem" };
var g16 = { width: "1px", color: "{primary.color}" };
var s37 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var h13 = { size: "2rem" };
var u19 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b13 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f26 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m13 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var p13 = { root: o259, header: r252, headerCell: e170, columnTitle: t125, row: c87, bodyCell: n116, footerCell: l54, columnFooter: d103, footer: i83, columnResizer: a131, resizeIndicator: g16, sortIcon: s37, loadingIcon: h13, nodeToggleButton: u19, paginatorTop: b13, paginatorBottom: f26, colorScheme: m13 };

// node_modules/@primeuix/themes/dist/material/virtualscroller/index.mjs
var o260 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e171 = { loader: o260, css: "" };

// node_modules/@primeuix/themes/dist/material/index.mjs
var e172 = Object.defineProperty;
var m14 = Object.defineProperties;
var r253 = Object.getOwnPropertyDescriptors;
var i84 = Object.getOwnPropertySymbols;
var t126 = Object.prototype.hasOwnProperty;
var a132 = Object.prototype.propertyIsEnumerable;
var o261 = (m20, r338, i116) => r338 in m20 ? e172(m20, r338, { enumerable: true, configurable: true, writable: true, value: i116 }) : m20[r338] = i116;
var Ne;
var Qe = (Ne = ((e229, m20) => {
  for (var r338 in m20 || (m20 = {})) t126.call(m20, r338) && o261(e229, r338, m20[r338]);
  if (i84) for (var r338 of i84(m20)) a132.call(m20, r338) && o261(e229, r338, m20[r338]);
  return e229;
})({}, e121), m14(Ne, r253({ components: { accordion: e117, autocomplete: i61, avatar: n76, badge: d74, blockui: o180, breadcrumb: t87, button: e122, datepicker: v8, card: d75, carousel: i64, cascadeselect: a93, checkbox: c66, chip: a94, colorpicker: s26, confirmdialog: r183, confirmpopup: a96, contextmenu: c68, dataview: c70, datatable: k8, dialog: e132, divider: t94, dock: s29, drawer: e134, editor: l43, fieldset: e136, fileupload: i68, iftalabel: i71, floatlabel: a103, galleria: l44, iconfield: c73, image: e140, imagecompare: r199, inlinemessage: a106, inplace: n88, inputchips: f25, inputgroup: o211, inputnumber: n89, inputotp: e143, inputtext: r206, knob: s31, listbox: n91, megamenu: g15, menu: t103, menubar: e146, message: u18, metergroup: s33, multiselect: a112, orderlist: o222, organizationchart: n97, overlaybadge: t108, popover: e154, paginator: n98, password: n101, panel: a114, panelmenu: i78, picklist: o229, progressbar: t112, progressspinner: r224, radiobutton: d92, rating: r226, ripple: o235, scrollpanel: a118, select: a119, selectbutton: d94, skeleton: o239, slider: a121, speeddial: a122, splitter: t115, splitbutton: d96, stepper: s35, steps: n107, tabmenu: n108, tabs: c81, tabview: e161, textarea: r242, tieredmenu: c84, tag: a126, terminal: e162, timeline: d99, togglebutton: l52, toggleswitch: a130, tree: d101, treeselect: n115, treetable: p13, toast: l51, toolbar: e167, tooltip: o256, virtualscroller: e171 } })));

// node_modules/@primeuix/themes/dist/nora/accordion/index.mjs
var o262 = { transitionDuration: "{transition.duration}" };
var r254 = { borderWidth: "0", borderColor: "{content.border.color}" };
var t127 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e173 = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" };
var c88 = { root: o262, panel: r254, header: t127, content: e173 };

// node_modules/@primeuix/themes/dist/nora/autocomplete/index.mjs
var o263 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r255 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d104 = { padding: "{list.padding}", gap: "{list.gap}" };
var e174 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l55 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i85 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c89 = { borderRadius: "{border.radius.xs}" };
var f27 = { padding: "{list.option.padding}" };
var s38 = { light: { chip: { focusBackground: "{surface.300}", focusColor: "{surface.900}" }, dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { chip: { focusBackground: "{surface.600}", focusColor: "{surface.0}" }, dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } };
var a133 = { root: o263, overlay: r255, list: d104, option: e174, optionGroup: l55, dropdown: i85, chip: c89, emptyMessage: f27, colorScheme: s38 };

// node_modules/@primeuix/themes/dist/nora/avatar/index.mjs
var e175 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.hover.background}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r256 = { size: "1rem" };
var o264 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t128 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i86 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n117 = { root: e175, icon: r256, group: o264, lg: t128, xl: i86 };

// node_modules/@primeuix/themes/dist/nora/badge/index.mjs
var r257 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o265 = { size: "0.5rem" };
var e176 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c90 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a134 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n118 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d105 = { root: r257, dot: o265, sm: e176, lg: c90, xl: a134, colorScheme: n118 };

// node_modules/@primeuix/themes/dist/nora/base/index.mjs
var o266 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var r258 = { transitionDuration: "0s", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "0", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.xs}", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "-1px", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.125rem 0", gap: "0", header: { padding: "0.5rem 0.75rem 0.375rem 0.75rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "0" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "700" } }, content: { borderRadius: "{border.radius.xs}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.125rem 0", gap: "0" }, item: { padding: "0.5rem 0.75rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "700" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.xs}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.xs}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xs}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.600}", contrastColor: "#ffffff", hoverColor: "{primary.700}", activeColor: "{primary.800}" }, highlight: { background: "{primary.600}", focusBackground: "{primary.700}", color: "#ffffff", focusColor: "#ffffff" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.300}", filledBackground: "{surface.100}", filledHoverBackground: "{surface.100}", filledFocusBackground: "{surface.100}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.500}", color: "{surface.900}", disabledColor: "{surface.600}", placeholderColor: "{surface.600}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.600}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.600}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.900}", shadow: "none" }, text: { color: "{surface.900}", hoverColor: "{surface.950}", mutedColor: "{surface.600}", hoverMutedColor: "{surface.700}" }, content: { background: "{surface.0}", hoverBackground: "{surface.200}", borderColor: "{surface.400}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.200}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.200}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.500}", contrastColor: "{surface.950}", hoverColor: "{primary.400}", activeColor: "{primary.300}" }, highlight: { background: "{primary.500}", focusBackground: "{primary.400}", color: "{surface.950}", focusColor: "{surface.950}" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.400}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.0}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.700}", borderColor: "{surface.500}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.700}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.700}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } } } };
var e177 = { primitive: o266, semantic: r258 };

// node_modules/@primeuix/themes/dist/nora/blockui/index.mjs
var r259 = { borderRadius: "{content.border.radius}" };
var o267 = { root: r259 };

// node_modules/@primeuix/themes/dist/nora/breadcrumb/index.mjs
var o268 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r260 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{text.muted.color}", hoverColor: "{text.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t129 = { color: "{navigation.item.icon.color}" };
var i87 = { root: o268, item: r260, separator: t129 };

// node_modules/@primeuix/themes/dist/nora/button/index.mjs
var r261 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "700" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o269 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{surface.400}", borderColor: "{surface.200}", hoverBorderColor: "{surface.300}", activeBorderColor: "{surface.400}", color: "{surface.700}", hoverColor: "{surface.800}", activeColor: "{surface.900}", focusRing: { color: "{surface.700}", shadow: "none" } }, info: { background: "{sky.600}", hoverBackground: "{sky.700}", activeBackground: "{sky.800}", borderColor: "{sky.600}", hoverBorderColor: "{sky.700}", activeBorderColor: "{sky.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.600}", shadow: "none" } }, success: { background: "{green.600}", hoverBackground: "{green.700}", activeBackground: "{green.800}", borderColor: "{green.600}", hoverBorderColor: "{green.700}", activeBorderColor: "{green.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.600}", shadow: "none" } }, warn: { background: "{orange.600}", hoverBackground: "{orange.700}", activeBackground: "{orange.800}", borderColor: "{orange.600}", hoverBorderColor: "{orange.700}", activeBorderColor: "{orange.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.600}", shadow: "none" } }, help: { background: "{purple.600}", hoverBackground: "{purple.700}", activeBackground: "{purple.800}", borderColor: "{purple.600}", hoverBorderColor: "{purple.700}", activeBorderColor: "{purple.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.600}", shadow: "none" } }, danger: { background: "{red.600}", hoverBackground: "{red.700}", activeBackground: "{red.800}", borderColor: "{red.600}", hoverBorderColor: "{red.700}", activeBorderColor: "{red.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.600}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.600}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.600}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.600}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.600}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.600}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.600}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.950}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.900}", color: "{surface.900}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.900}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{surface.500}", borderColor: "{surface.700}", hoverBorderColor: "{surface.600}", activeBorderColor: "{surface.500}", color: "{surface.200}", hoverColor: "{surface.100}", activeColor: "{surface.0}", focusRing: { color: "{surface.200}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.400}", activeBackground: "{sky.300}", borderColor: "{sky.500}", hoverBorderColor: "{sky.400}", activeBorderColor: "{sky.300}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.400}", activeBackground: "{green.300}", borderColor: "{green.500}", hoverBorderColor: "{green.400}", activeBorderColor: "{green.300}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.400}", activeBackground: "{orange.300}", borderColor: "{orange.500}", hoverBorderColor: "{orange.400}", activeBorderColor: "{orange.300}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.400}", activeBackground: "{purple.300}", borderColor: "{purple.500}", hoverBorderColor: "{purple.400}", activeBorderColor: "{purple.300}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.400}", activeBackground: "{red.300}", borderColor: "{red.500}", hoverBorderColor: "{red.400}", activeBorderColor: "{red.300}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.400}", color: "{surface.400}" }, success: { hoverBackground: "{green.950}", activeBackground: "{green.900}", borderColor: "{green.500}", color: "{green.500}" }, info: { hoverBackground: "{sky.950}", activeBackground: "{sky.900}", borderColor: "{sky.500}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.950}", activeBackground: "{orange.900}", borderColor: "{orange.500}", color: "{orange.500}" }, help: { hoverBackground: "{purple.950}", activeBackground: "{purple.900}", borderColor: "{purple.500}", color: "{purple.500}" }, danger: { hoverBackground: "{red.950}", activeBackground: "{red.900}", borderColor: "{red.500}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.500}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.500}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.500}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.500}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e178 = { root: r261, colorScheme: o269 };

// node_modules/@primeuix/themes/dist/nora/card/index.mjs
var o270 = { background: "{content.background}", borderRadius: "{border.radius.sm}", color: "{content.color}", shadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)" };
var r262 = { padding: "1.25rem", gap: "0.5rem" };
var t130 = { gap: "0.5rem" };
var e179 = { fontSize: "1.25rem", fontWeight: "500" };
var a135 = { color: "{text.muted.color}" };
var d106 = { root: o270, body: r262, caption: t130, title: e179, subtitle: a135 };

// node_modules/@primeuix/themes/dist/nora/carousel/index.mjs
var r263 = { transitionDuration: "{transition.duration}" };
var o271 = { gap: "0.25rem" };
var a136 = { padding: "1rem", gap: "0.5rem" };
var i88 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c91 = { light: { indicator: { background: "{surface.300}", hoverBackground: "{surface.400}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.600}", hoverBackground: "{surface.500}", activeBackground: "{primary.color}" } } };
var t131 = { root: r263, content: o271, indicatorList: a136, indicator: i88, colorScheme: c91 };

// node_modules/@primeuix/themes/dist/nora/cascadeselect/index.mjs
var o272 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r264 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d107 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l56 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e180 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i89 = { color: "{form.field.icon.color}" };
var f28 = { root: o272, dropdown: r264, overlay: d107, list: l56, option: e180, clearIcon: i89 };

// node_modules/@primeuix/themes/dist/nora/checkbox/index.mjs
var r265 = { borderRadius: "{border.radius.xs}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o273 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e181 = { root: r265, icon: o273 };

// node_modules/@primeuix/themes/dist/nora/chip/index.mjs
var o274 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r266 = { width: "2rem", height: "2rem" };
var e182 = { size: "1rem" };
var c92 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i90 = { light: { root: { background: "{surface.200}", color: "{surface.900}" }, icon: { color: "{surface.900}" }, removeIcon: { color: "{surface.900}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s39 = { root: o274, image: r266, icon: e182, removeIcon: c92, colorScheme: i90 };

// node_modules/@primeuix/themes/dist/nora/colorpicker/index.mjs
var r267 = { transitionDuration: "{transition.duration}" };
var o275 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e183 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a137 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s40 = { root: r267, preview: o275, panel: e183, colorScheme: a137 };

// node_modules/@primeuix/themes/dist/nora/confirmdialog/index.mjs
var o276 = { size: "2rem", color: "{overlay.modal.color}" };
var e184 = { gap: "1rem" };
var r268 = { icon: o276, content: e184 };

// node_modules/@primeuix/themes/dist/nora/confirmpopup/index.mjs
var o277 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r269 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e185 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p14 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a138 = { root: o277, content: r269, icon: e185, footer: p14 };

// node_modules/@primeuix/themes/dist/nora/contextmenu/index.mjs
var o278 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i91 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n119 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a139 = { mobileIndent: "1rem" };
var t132 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r270 = { borderColor: "{content.border.color}" };
var c93 = { root: o278, list: i91, item: n119, submenu: a139, submenuIcon: t132, separator: r270 };

// node_modules/@primeuix/themes/dist/nora/datatable/index.mjs
var o279 = { transitionDuration: "{transition.duration}" };
var r271 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e186 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d108 = { fontWeight: "700" };
var t133 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l57 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c94 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var n120 = { fontWeight: "700" };
var a140 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i92 = { color: "{primary.color}" };
var s41 = { width: "0.5rem" };
var g17 = { width: "1px", color: "{primary.color}" };
var u20 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var p15 = { size: "2rem" };
var b14 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m15 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h14 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f29 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v9 = { light: { root: { borderColor: "{surface.300}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k10 = { root: o279, header: r271, headerCell: e186, columnTitle: d108, row: t133, bodyCell: l57, footerCell: c94, columnFooter: n120, footer: a140, dropPoint: i92, columnResizer: s41, resizeIndicator: g17, sortIcon: u20, loadingIcon: p15, rowToggleButton: b14, filter: m15, paginatorTop: h14, paginatorBottom: f29, colorScheme: v9 };

// node_modules/@primeuix/themes/dist/nora/dataview/index.mjs
var o280 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r272 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d109 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e187 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t134 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n121 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c95 = { root: o280, header: r272, content: d109, footer: e187, paginatorTop: t134, paginatorBottom: n121 };

// node_modules/@primeuix/themes/dist/nora/datepicker/index.mjs
var o281 = { transitionDuration: "{transition.duration}" };
var r273 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e188 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var d110 = { gap: "0.5rem", fontWeight: "500" };
var c96 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n122 = { color: "{form.field.icon.color}" };
var t135 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a141 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i93 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l58 = { margin: "0.5rem 0 0 0" };
var g18 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var u21 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s42 = { margin: "0.5rem 0 0 0" };
var f30 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h15 = { margin: "0.5rem 0 0 0" };
var b15 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m16 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p16 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v10 = { light: { dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k11 = { root: o281, panel: r273, header: e188, title: d110, dropdown: c96, inputIcon: n122, selectMonth: t135, selectYear: a141, group: i93, dayView: l58, weekDay: g18, date: u21, monthView: s42, month: f30, yearView: h15, year: b15, buttonbar: m16, timePicker: p16, colorScheme: v10 };

// node_modules/@primeuix/themes/dist/nora/dialog/index.mjs
var o282 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a142 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d111 = { fontSize: "1.25rem", fontWeight: "700" };
var r274 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l59 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e189 = { root: o282, header: a142, title: d111, content: r274, footer: l59 };

// node_modules/@primeuix/themes/dist/nora/divider/index.mjs
var r275 = { borderColor: "{content.border.color}" };
var o283 = { background: "{content.background}", color: "{text.color}" };
var n123 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e190 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t136 = { root: r275, content: o283, horizontal: n123, vertical: e190 };

// node_modules/@primeuix/themes/dist/nora/dock/index.mjs
var r276 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o284 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d112 = { root: r276, item: o284 };

// node_modules/@primeuix/themes/dist/nora/drawer/index.mjs
var o285 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a143 = { padding: "{overlay.modal.padding}" };
var d113 = { fontSize: "1.5rem", fontWeight: "700" };
var r277 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l60 = { padding: "{overlay.modal.padding}" };
var e191 = { root: o285, header: a143, title: d113, content: r277, footer: l60 };

// node_modules/@primeuix/themes/dist/nora/editor/index.mjs
var o286 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r278 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e192 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t137 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d114 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l61 = { toolbar: o286, toolbarItem: r278, overlay: e192, overlayOption: t137, content: d114 };

// node_modules/@primeuix/themes/dist/nora/fieldset/index.mjs
var o287 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r279 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e193 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var t138 = { padding: "0" };
var n124 = { root: o287, legend: r279, toggleIcon: e193, content: t138 };

// node_modules/@primeuix/themes/dist/nora/fileupload/index.mjs
var r280 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o288 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e194 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t139 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a144 = { gap: "0.5rem" };
var n125 = { height: "0.25rem" };
var d115 = { gap: "0.5rem" };
var i94 = { root: r280, header: o288, content: e194, file: t139, fileList: a144, progressbar: n125, basic: d115 };

// node_modules/@primeuix/themes/dist/nora/floatlabel/index.mjs
var o289 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i95 = { active: { top: "-1.25rem" } };
var r281 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a145 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d116 = { root: o289, over: i95, in: r281, on: a145 };

// node_modules/@primeuix/themes/dist/nora/galleria/index.mjs
var o290 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r282 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t140 = { size: "1.5rem" };
var e195 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c97 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n126 = { size: "1rem" };
var a146 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s43 = { gap: "0.5rem", padding: "1rem" };
var u22 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i96 = { background: "rgba(0, 0, 0, 0.5)" };
var d117 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g19 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f31 = { size: "1.5rem" };
var l62 = { light: { thumbnailNavButton: { hoverBackground: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, indicatorButton: { background: "{surface.300}", hoverBackground: "{surface.400}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.0}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.600}", hoverBackground: "{surface.500}" } } };
var h16 = { root: o290, navButton: r282, navIcon: t140, thumbnailsContent: e195, thumbnailNavButton: c97, thumbnailNavButtonIcon: n126, caption: a146, indicatorList: s43, indicatorButton: u22, insetIndicatorList: i96, insetIndicatorButton: d117, closeButton: g19, closeButtonIcon: f31, colorScheme: l62 };

// node_modules/@primeuix/themes/dist/nora/iconfield/index.mjs
var o291 = { color: "{form.field.icon.color}" };
var r283 = { icon: o291 };

// node_modules/@primeuix/themes/dist/nora/iftalabel/index.mjs
var o292 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l63 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i97 = { root: o292, input: l63 };

// node_modules/@primeuix/themes/dist/nora/image/index.mjs
var o293 = { transitionDuration: "{transition.duration}" };
var r284 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a147 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" };
var e196 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i98 = { root: o293, preview: r284, toolbar: a147, action: e196 };

// node_modules/@primeuix/themes/dist/nora/imagecompare/index.mjs
var r285 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "{content.border.radius}", transitionDuration: "0.2s", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var o294 = { handle: r285 };

// node_modules/@primeuix/themes/dist/nora/inlinemessage/index.mjs
var o295 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var r286 = { fontWeight: "700" };
var e197 = { size: "1rem" };
var d118 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none" }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none" }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none" }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none" }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none" }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none" }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none" }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none" }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } };
var n127 = { root: o295, text: r286, icon: e197, colorScheme: d118 };

// node_modules/@primeuix/themes/dist/nora/inplace/index.mjs
var o296 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r287 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n128 = { root: o296, display: r287 };

// node_modules/@primeuix/themes/dist/nora/inputchips/index.mjs
var o297 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r288 = { borderRadius: "{border.radius.xs}" };
var d119 = { light: { chip: { focusBackground: "{surface.300}", color: "{surface.900}" } }, dark: { chip: { focusBackground: "{surface.600}", color: "{surface.0}" } } };
var f32 = { root: o297, chip: r288, colorScheme: d119 };

// node_modules/@primeuix/themes/dist/nora/inputgroup/index.mjs
var r289 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o298 = { addon: r289 };

// node_modules/@primeuix/themes/dist/nora/inputnumber/index.mjs
var o299 = { transitionDuration: "{transition.duration}" };
var r290 = { background: "transparent", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e198 = { light: { button: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { button: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } };
var d120 = { root: o299, button: r290, colorScheme: e198 };

// node_modules/@primeuix/themes/dist/nora/inputotp/index.mjs
var r291 = { gap: "0.5rem" };
var t141 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e199 = { root: r291, input: t141 };

// node_modules/@primeuix/themes/dist/nora/inputtext/index.mjs
var o300 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d121 = { root: o300 };

// node_modules/@primeuix/themes/dist/nora/knob/index.mjs
var o301 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r292 = { background: "{primary.color}" };
var t142 = { color: "{text.muted.color}" };
var a148 = { light: { range: { background: "{surface.300}" } }, dark: { range: { background: "{surface.600}" } } };
var c98 = { root: o301, value: r292, text: t142, colorScheme: a148 };

// node_modules/@primeuix/themes/dist/nora/listbox/index.mjs
var o302 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r293 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d122 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i99 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t143 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e200 = { padding: "{list.option.padding}" };
var l64 = { light: { option: { stripedBackground: "{surface.100}" } }, dark: { option: { stripedBackground: "{surface.800}" } } };
var n129 = { root: o302, list: r293, option: d122, optionGroup: i99, checkmark: t143, emptyMessage: e200, colorScheme: l64 };

// node_modules/@primeuix/themes/dist/nora/megamenu/index.mjs
var o303 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n130 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i100 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a149 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r294 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t144 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e201 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c99 = { borderColor: "{content.border.color}" };
var d123 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g20 = { root: o303, baseItem: n130, item: i100, overlay: a149, submenu: r294, submenuLabel: t144, submenuIcon: e201, separator: c99, mobileButton: d123 };

// node_modules/@primeuix/themes/dist/nora/menu/index.mjs
var o304 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n131 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a150 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i101 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t145 = { borderColor: "{content.border.color}" };
var r295 = { root: o304, list: n131, item: a150, submenuLabel: i101, separator: t145 };

// node_modules/@primeuix/themes/dist/nora/menubar/index.mjs
var o305 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i102 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n132 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r296 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a151 = { borderColor: "{content.border.color}" };
var t146 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e202 = { root: o305, baseItem: i102, item: n132, submenu: r296, separator: a151, mobileButton: t146 };

// node_modules/@primeuix/themes/dist/nora/message/index.mjs
var o306 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r297 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e203 = { fontSize: "1rem", fontWeight: "700", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var l65 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var n133 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var c100 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var s44 = { root: { borderWidth: "1px" } };
var d124 = { content: { padding: "0" } };
var u23 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } }, outlined: { color: "{blue.800}", borderColor: "{blue.800}" }, simple: { color: "{blue.800}" } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } }, outlined: { color: "{green.800}", borderColor: "{green.800}" }, simple: { color: "{green.800}" } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } }, outlined: { color: "{red.800}", borderColor: "{red.800}" }, simple: { color: "{red.800}" } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } }, outlined: { color: "{surface.600}", borderColor: "{surface.600}" }, simple: { color: "{surface.600}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } }, outlined: { color: "{blue.200}", borderColor: "{blue.200}" }, simple: { color: "{blue.200}" } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } }, outlined: { color: "{green.200}", borderColor: "{green.200}" }, simple: { color: "{green.200}" } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } }, outlined: { color: "{yellow.200}", borderColor: "{yellow.200}" }, simple: { color: "{yellow.200}" } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } }, outlined: { color: "{red.200}", borderColor: "{red.200}" }, simple: { color: "{red.200}" } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var a152 = { root: o306, content: r297, text: e203, icon: l65, closeButton: n133, closeIcon: c100, outlined: s44, simple: d124, colorScheme: u23 };

// node_modules/@primeuix/themes/dist/nora/metergroup/index.mjs
var e204 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r298 = { size: "0.5rem" };
var a153 = { gap: "0.5rem" };
var l66 = { size: "0.5rem" };
var o307 = { size: "1rem" };
var s45 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var t147 = { light: { meters: { background: "{surface.300}" } }, dark: { meters: { background: "{surface.600}" } } };
var m17 = { root: e204, meters: r298, label: a153, labelMarker: l66, labelIcon: o307, labelList: s45, colorScheme: t147 };

// node_modules/@primeuix/themes/dist/nora/multiselect/index.mjs
var o308 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d125 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r299 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l67 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i103 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e205 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f33 = { color: "{form.field.icon.color}" };
var a154 = { borderRadius: "{border.radius.xs}" };
var c101 = { padding: "{list.option.padding}" };
var n134 = { root: o308, dropdown: d125, overlay: r299, list: l67, option: i103, optionGroup: e205, chip: a154, clearIcon: f33, emptyMessage: c101 };

// node_modules/@primeuix/themes/dist/nora/orderlist/index.mjs
var r300 = { gap: "1.125rem" };
var a155 = { gap: "0.5rem" };
var o309 = { root: r300, controls: a155 };

// node_modules/@primeuix/themes/dist/nora/organizationchart/index.mjs
var o310 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r301 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e206 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t148 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n135 = { root: o310, node: r301, nodeToggleButton: e206, connector: t148 };

// node_modules/@primeuix/themes/dist/nora/overlaybadge/index.mjs
var o311 = { outline: { width: "2px", color: "{content.background}" } };
var t149 = { root: o311 };

// node_modules/@primeuix/themes/dist/nora/paginator/index.mjs
var o312 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r302 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t150 = { color: "{text.muted.color}" };
var e207 = { maxWidth: "2.5rem" };
var n136 = { root: o312, navButton: r302, currentPageReport: t150, jumpToPageInput: e207 };

// node_modules/@primeuix/themes/dist/nora/panel/index.mjs
var r303 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o313 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", borderRadius: "0" };
var e208 = { padding: "0.375rem 1.125rem" };
var d126 = { fontWeight: "700" };
var t151 = { padding: "1.125rem" };
var n137 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a156 = { root: r303, header: o313, toggleableHeader: e208, title: d126, content: t151, footer: n137 };

// node_modules/@primeuix/themes/dist/nora/panelmenu/index.mjs
var o314 = { gap: "0", transitionDuration: "{transition.duration}" };
var r304 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } };
var n138 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i104 = { indent: "1rem" };
var t152 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a157 = { root: o314, panel: r304, item: n138, submenu: i104, submenuIcon: t152 };

// node_modules/@primeuix/themes/dist/nora/password/index.mjs
var r305 = { borderRadius: "{content.border.radius}", height: ".75rem" };
var o315 = { color: "{form.field.icon.color}" };
var e209 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a158 = { gap: "0.5rem" };
var d127 = { light: { meter: { background: "{surface.300}" }, strength: { weakBackground: "{red.600}", mediumBackground: "{yellow.600}", strongBackground: "{green.600}" } }, dark: { meter: { background: "{surface.600}" }, strength: { weakBackground: "{red.500}", mediumBackground: "{yellow.500}", strongBackground: "{green.500}" } } };
var n139 = { meter: r305, icon: o315, overlay: e209, content: a158, colorScheme: d127 };

// node_modules/@primeuix/themes/dist/nora/picklist/index.mjs
var r306 = { gap: "1.125rem" };
var a159 = { gap: "0.5rem" };
var o316 = { root: r306, controls: a159 };

// node_modules/@primeuix/themes/dist/nora/popover/index.mjs
var o317 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r307 = { padding: "{overlay.popover.padding}" };
var e210 = { root: o317, content: r307 };

// node_modules/@primeuix/themes/dist/nora/progressbar/index.mjs
var r308 = { borderRadius: "{content.border.radius}", height: "1.25rem" };
var o318 = { background: "{primary.color}" };
var a160 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "700" };
var e211 = { light: { root: { background: "{surface.300}" } }, dark: { root: { background: "{surface.600}" } } };
var t153 = { root: r308, value: o318, label: a160, colorScheme: e211 };

// node_modules/@primeuix/themes/dist/nora/progressspinner/index.mjs
var o319 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r309 = { colorScheme: o319 };

// node_modules/@primeuix/themes/dist/nora/radiobutton/index.mjs
var o320 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{form.field.background}", checkedHoverBackground: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{form.field.border.color}", checkedHoverBorderColor: "{form.field.hover.border.color}", checkedFocusBorderColor: "{form.field.focus.border.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r310 = { size: "0.75rem", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e212 = { root: o320, icon: r310 };

// node_modules/@primeuix/themes/dist/nora/rating/index.mjs
var o321 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r311 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i105 = { root: o321, icon: r311 };

// node_modules/@primeuix/themes/dist/nora/ripple/index.mjs
var r312 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.4)" } } };
var o322 = { colorScheme: r312 };

// node_modules/@primeuix/themes/dist/nora/scrollpanel/index.mjs
var r313 = { transitionDuration: "{transition.duration}" };
var o323 = { size: "9px", borderRadius: "{border.radius.xs}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s46 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } };
var a161 = { root: r313, bar: o323, colorScheme: s46 };

// node_modules/@primeuix/themes/dist/nora/select/index.mjs
var o324 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r314 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d128 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l68 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i106 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e213 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f34 = { color: "{form.field.icon.color}" };
var c102 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a162 = { padding: "{list.option.padding}" };
var n140 = { root: o324, dropdown: r314, overlay: d128, list: l68, option: i106, optionGroup: e213, clearIcon: f34, checkmark: c102, emptyMessage: a162 };

// node_modules/@primeuix/themes/dist/nora/selectbutton/index.mjs
var r315 = { borderRadius: "{form.field.border.radius}" };
var o325 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d129 = { root: r315, colorScheme: o325 };

// node_modules/@primeuix/themes/dist/nora/skeleton/index.mjs
var r316 = { borderRadius: "{content.border.radius}" };
var a163 = { light: { root: { background: "{surface.300}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.1)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o326 = { root: r316, colorScheme: a163 };

// node_modules/@primeuix/themes/dist/nora/slider/index.mjs
var r317 = { transitionDuration: "{transition.duration}" };
var o327 = { borderRadius: "{content.border.radius}", size: "3px" };
var a164 = { background: "{primary.color}" };
var c103 = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i107 = { light: { track: { background: "{surface.300}" } }, dark: { track: { background: "{surface.600}" } } };
var n141 = { root: r317, track: o327, range: a164, handle: c103, colorScheme: i107 };

// node_modules/@primeuix/themes/dist/nora/speeddial/index.mjs
var t154 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a165 = { root: t154 };

// node_modules/@primeuix/themes/dist/nora/splitbutton/index.mjs
var r318 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d130 = { root: r318 };

// node_modules/@primeuix/themes/dist/nora/splitter/index.mjs
var o328 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r319 = { background: "{content.border.color}" };
var n142 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t155 = { root: o328, gutter: r319, handle: n142 };

// node_modules/@primeuix/themes/dist/nora/stepper/index.mjs
var o329 = { transitionDuration: "{transition.duration}" };
var r320 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e214 = { padding: "0.5rem", gap: "1rem" };
var t156 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n143 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" };
var a166 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c104 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var i108 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var d131 = { root: o329, separator: r320, step: e214, stepHeader: t156, stepTitle: n143, stepNumber: a166, steppanels: c104, steppanel: i108 };

// node_modules/@primeuix/themes/dist/nora/steps/index.mjs
var o330 = { transitionDuration: "{transition.duration}" };
var r321 = { background: "{content.border.color}" };
var t157 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e215 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" };
var i109 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" };
var c105 = { root: o330, separator: r321, itemLink: t157, itemLabel: e215, itemNumber: i109 };

// node_modules/@primeuix/themes/dist/nora/tabmenu/index.mjs
var o331 = { transitionDuration: "{transition.duration}" };
var r322 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t158 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e216 = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}" };
var n144 = { height: "0", bottom: "0", background: "transparent" };
var a167 = { root: o331, tablist: r322, item: t158, itemIcon: e216, activeBar: n144 };

// node_modules/@primeuix/themes/dist/nora/tabs/index.mjs
var o332 = { transitionDuration: "{transition.duration}" };
var r323 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t159 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" } };
var n145 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c106 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var e217 = { height: "0", bottom: "0", background: "transparent" };
var a168 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i110 = { root: o332, tablist: r323, tab: t159, tabpanel: n145, navButton: c106, activeBar: e217, colorScheme: a168 };

// node_modules/@primeuix/themes/dist/nora/tabview/index.mjs
var o333 = { transitionDuration: "{transition.duration}" };
var r324 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t160 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n146 = { background: "{content.background}", color: "{content.color}" };
var a169 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c107 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e218 = { root: o333, tabList: r324, tab: t160, tabPanel: n146, navButton: a169, colorScheme: c107 };

// node_modules/@primeuix/themes/dist/nora/tag/index.mjs
var r325 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o334 = { size: "0.75rem" };
var c108 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var a170 = { root: r325, icon: o334, colorScheme: c108 };

// node_modules/@primeuix/themes/dist/nora/terminal/index.mjs
var r326 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o335 = { gap: "0.25rem" };
var d132 = { margin: "2px 0" };
var e219 = { root: r326, prompt: o335, commandResponse: d132 };

// node_modules/@primeuix/themes/dist/nora/textarea/index.mjs
var o336 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d133 = { root: o336 };

// node_modules/@primeuix/themes/dist/nora/tieredmenu/index.mjs
var o337 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i111 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n147 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a171 = { mobileIndent: "1rem" };
var t161 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r327 = { borderColor: "{content.border.color}" };
var c109 = { root: o337, list: i111, item: n147, submenu: a171, submenuIcon: t161, separator: r327 };

// node_modules/@primeuix/themes/dist/nora/timeline/index.mjs
var e220 = { minHeight: "5rem" };
var r328 = { eventContent: { padding: "1rem 0" } };
var o338 = { eventContent: { padding: "0 1rem" } };
var n148 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{primary.color}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } };
var t162 = { color: "{content.border.color}", size: "2px" };
var a172 = { event: e220, horizontal: r328, vertical: o338, eventMarker: n148, eventConnector: t162 };

// node_modules/@primeuix/themes/dist/nora/toast/index.mjs
var o339 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}", blur: "0" };
var r329 = { size: "1.125rem" };
var e221 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var a173 = { gap: "0.5rem" };
var l69 = { fontWeight: "700", fontSize: "1rem" };
var c110 = { fontWeight: "500", fontSize: "0.875rem" };
var n149 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var d134 = { size: "1rem" };
var s47 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", detailColor: "{blue.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", detailColor: "{green.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", detailColor: "{yellow.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", detailColor: "{red.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", detailColor: "{blue.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", detailColor: "{green.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", detailColor: "{yellow.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", detailColor: "{red.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", detailColor: "{surface.200}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u24 = { root: o339, icon: r329, content: e221, text: a173, summary: l69, detail: c110, closeButton: n149, closeIcon: d134, colorScheme: s47 };

// node_modules/@primeuix/themes/dist/nora/togglebutton/index.mjs
var o340 = { padding: "0.5rem 0.75rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.375rem 0.625rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.625rem 0.875rem" } };
var r330 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" };
var d135 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } };
var e222 = { light: { root: { hoverBackground: "{surface.200}" } }, dark: { root: { hoverBackground: "{surface.700}" } } };
var i112 = { root: o340, icon: r330, content: d135, colorScheme: e222 };

// node_modules/@primeuix/themes/dist/nora/toggleswitch/index.mjs
var r331 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", invalidBorderColor: "{form.field.invalid.border.color}", background: "{form.field.background}", hoverBackground: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.1s", disabledBackground: "{form.field.disabled.background}" };
var o341 = { borderRadius: "50%", size: "1rem", background: "{form.field.border.color}", hoverBackground: "{form.field.border.color}", checkedBackground: "{primary.contrast.color}", checkedHoverBackground: "{primary.contrast.color}", disabledBackground: "{form.field.disabled.color}", color: "{surface.0}", hoverColor: "{surface.0}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}" };
var d136 = { root: r331, handle: o341 };

// node_modules/@primeuix/themes/dist/nora/toolbar/index.mjs
var o342 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r332 = { root: o342 };

// node_modules/@primeuix/themes/dist/nora/tooltip/index.mjs
var r333 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o343 = { light: { root: { background: "{surface.900}", color: "{surface.0}" } }, dark: { root: { background: "{surface.0}", color: "{surface.900}" } } };
var e223 = { root: r333, colorScheme: o343 };

// node_modules/@primeuix/themes/dist/nora/tree/index.mjs
var o344 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r334 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e224 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t163 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c111 = { size: "2rem" };
var n150 = { margin: "0 0 0.5rem 0" };
var d137 = { root: o344, node: r334, nodeIcon: e224, nodeToggleButton: t163, loadingIcon: c111, filter: n150 };

// node_modules/@primeuix/themes/dist/nora/treeselect/index.mjs
var o345 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r335 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d138 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l70 = { padding: "{list.padding}" };
var e225 = { padding: "{list.option.padding}" };
var i113 = { borderRadius: "{border.radius.sm}" };
var f35 = { color: "{form.field.icon.color}" };
var a174 = { root: o345, dropdown: r335, overlay: d138, tree: l70, emptyMessage: e225, chip: i113, clearIcon: f35 };

// node_modules/@primeuix/themes/dist/nora/treetable/index.mjs
var o346 = { transitionDuration: "{transition.duration}" };
var r336 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" };
var e226 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t164 = { fontWeight: "700" };
var c112 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n151 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d139 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var l71 = { fontWeight: "700" };
var i114 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var a175 = { width: "0.5rem" };
var g21 = { width: "1px", color: "{primary.color}" };
var s48 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u25 = { size: "2rem" };
var h17 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b16 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f36 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m18 = { light: { root: { borderColor: "{surface.300}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k12 = { root: o346, header: r336, headerCell: e226, columnTitle: t164, row: c112, bodyCell: n151, footerCell: d139, columnFooter: l71, footer: i114, columnResizer: a175, resizeIndicator: g21, sortIcon: s48, loadingIcon: u25, nodeToggleButton: h17, paginatorTop: b16, paginatorBottom: f36, colorScheme: m18 };

// node_modules/@primeuix/themes/dist/nora/virtualscroller/index.mjs
var o347 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e227 = { loader: o347 };

// node_modules/@primeuix/themes/dist/nora/index.mjs
var r337 = Object.defineProperty;
var e228 = Object.defineProperties;
var m19 = Object.getOwnPropertyDescriptors;
var o348 = Object.getOwnPropertySymbols;
var i115 = Object.prototype.hasOwnProperty;
var t165 = Object.prototype.propertyIsEnumerable;
var p17 = (e229, m20, o349) => m20 in e229 ? r337(e229, m20, { enumerable: true, configurable: true, writable: true, value: o349 }) : e229[m20] = o349;
var Nr3;
var Qr3 = (Nr3 = ((r338, e229) => {
  for (var m20 in e229 || (e229 = {})) i115.call(e229, m20) && p17(r338, m20, e229[m20]);
  if (o348) for (var m20 of o348(e229)) t165.call(e229, m20) && p17(r338, m20, e229[m20]);
  return r338;
})({}, e177), e228(Nr3, m19({ components: { accordion: c88, autocomplete: a133, avatar: n117, badge: d105, blockui: o267, breadcrumb: i87, button: e178, datepicker: k11, card: d106, carousel: t131, cascadeselect: f28, checkbox: e181, chip: s39, colorpicker: s40, confirmdialog: r268, confirmpopup: a138, contextmenu: c93, dataview: c95, datatable: k10, dialog: e189, divider: t136, dock: d112, drawer: e191, editor: l61, fieldset: n124, fileupload: i94, iftalabel: i97, floatlabel: d116, galleria: h16, iconfield: r283, image: i98, imagecompare: o294, inlinemessage: n127, inplace: n128, inputchips: f32, inputgroup: o298, inputnumber: d120, inputotp: e199, inputtext: d121, knob: c98, listbox: n129, megamenu: g20, menu: r295, menubar: e202, message: a152, metergroup: m17, multiselect: n134, orderlist: o309, organizationchart: n135, overlaybadge: t149, popover: e210, paginator: n136, password: n139, panel: a156, panelmenu: a157, picklist: o316, progressbar: t153, progressspinner: r309, radiobutton: e212, rating: i105, ripple: o322, scrollpanel: a161, select: n140, selectbutton: d129, skeleton: o326, slider: n141, speeddial: a165, splitter: t155, splitbutton: d130, stepper: d131, steps: c105, tabmenu: a167, tabs: i110, tabview: e218, textarea: d133, tieredmenu: c109, tag: a170, terminal: e219, timeline: a172, togglebutton: i112, toggleswitch: d136, tree: d137, treeselect: a174, treetable: k12, toast: u24, toolbar: r332, tooltip: e223, virtualscroller: e227 } })));

// node_modules/@primeuix/styles/dist/togglebutton/index.mjs
var style3 = "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n";

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style4 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style5 = (
  /*css*/
  `
    ${style4}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`
);
var classes2 = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  style = style5;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  componentName = "Ripple";
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  onAfterViewInit() {
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    !this.$unstyled() && P(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "false");
    if (!Tt(ink) && !Rt(ink)) {
      let d140 = Math.max(v(this.el.nativeElement), C(this.el.nativeElement));
      ink.style.height = d140 + "px";
      ink.style.width = d140 + "px";
    }
    let offset = K(this.el.nativeElement);
    let x4 = event.pageX - offset.left + this.document.body.scrollTop - Rt(ink) / 2;
    let y4 = event.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
    this.renderer.setStyle(ink, "top", y4 + "px");
    this.renderer.setStyle(ink, "left", x4 + "px");
    !this.$unstyled() && W(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "true");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        !this.$unstyled() && P(ink2, "p-ink-active");
        ink2.setAttribute("data-p-ink-active", "false");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i116 = 0; i116 < children.length; i116++) {
      if (typeof children[i116].className === "string" && children[i116].className.indexOf("p-ink") !== -1) {
        return children[i116];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      !this.$unstyled() && P(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    !this.$unstyled() && P(event.currentTarget, "p-ink-active");
    event.currentTarget.setAttribute("data-p-ink-active", "false");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "data-p-ink", "true");
    this.renderer.setAttribute(ink, "data-p-ink-active", "false");
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      Zt(ink);
    }
  }
  onDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [\u0275\u0275ProvidersFeature([RippleStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RippleModule,
    imports: [Ripple],
    exports: [Ripple]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c03 = ["icon"];
var _c12 = ["content"];
var _c22 = (a0) => ({
  $implicit: a0
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon, ctx_r0.iconPos === "left" ? ctx_r0.cx("iconLeft") : ctx_r0.cx("iconRight")));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 3, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var style6 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => ["p-togglebutton p-component", {
    "p-togglebutton-checked": instance.checked,
    "p-invalid": instance.invalid(),
    "p-disabled": instance.$disabled(),
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large",
    "p-togglebutton-fluid": instance.fluid()
  }],
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  iconLeft: "p-togglebutton-icon-left",
  iconRight: "p-togglebutton-icon-right",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  style = style6;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["iconLeft"] = "p-togglebutton-icon-left";
  ToggleButtonClasses2["iconRight"] = "p-togglebutton-icon-right";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_INSTANCE = new InjectionToken("TOGGLEBUTTON_INSTANCE");
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseEditableHolder {
  componentName = "ToggleButton";
  $pcToggleButton = inject(TOGGLEBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  toggle(event) {
    if (!this.$disabled() && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.writeModelValue(this.checked);
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @param {ToggleButtonIconTemplateContext} context - icon context.
   * @see {@link ToggleButtonIconTemplateContext}
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @param {ToggleButtonContentTemplateContext} context - content context.
   * @see {@link ToggleButtonContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onInit() {
    if (this.checked === null || this.checked === void 0) {
      this.checked = false;
    }
  }
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      checked: this.active,
      invalid: this.invalid(),
      [this.size]: this.size
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4)(dirIndex, _c12, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 11,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-pressed", ctx.checked ? "true" : "false")("role", "button")("tabindex", ctx.tabindex !== void 0 ? ctx.tabindex : !ctx.$disabled() ? 0 : -1)("data-pc-name", "togglebutton")("data-p-checked", ctx.active)("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: "size",
      allowEmpty: "allowEmpty",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
      provide: TOGGLEBUTTON_INSTANCE,
      useExisting: _ToggleButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleButton
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 9,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275conditionalCreate(2, ToggleButton_Conditional_2_Template, 4, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c22, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      hostDirectives: [{
        directive: Ripple
      }, Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-pressed]": 'checked ? "true" : "false"',
        "[attr.role]": '"button"',
        "[attr.tabindex]": "tabindex !== undefined ? tabindex : (!$disabled() ? 0 : -1)",
        "[attr.data-pc-name]": "'togglebutton'",
        "[attr.data-p-checked]": "active",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      template: `<span [class]="cx('content')" [pBind]="ptm('content')" [attr.data-p]="dataP">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span [class]="cn(cx('icon'), checked ? this.onIcon : this.offIcon, iconPos === 'left' ? cx('iconLeft') : cx('iconRight'))" [pBind]="ptm('icon')"></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [class]="cx('label')" [pBind]="ptm('label')">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
        provide: TOGGLEBUTTON_INSTANCE,
        useExisting: ToggleButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/selectbutton/index.mjs
var style7 = "\n    .p-selectbutton {\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        outline-color: transparent;\n        border-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton {\n        border-radius: 0;\n        border-width: 1px 1px 1px 0;\n    }\n\n    .p-selectbutton .p-togglebutton:focus-visible {\n        position: relative;\n        z-index: 1;\n    }\n\n    .p-selectbutton .p-togglebutton:first-child {\n        border-inline-start-width: 1px;\n        border-start-start-radius: dt('selectbutton.border.radius');\n        border-end-start-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton:last-child {\n        border-start-end-radius: dt('selectbutton.border.radius');\n        border-end-end-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton.p-invalid {\n        outline: 1px solid dt('selectbutton.invalid.border.color');\n        outline-offset: 0;\n    }\n\n    .p-selectbutton-fluid {\n        width: 100%;\n    }\n    \n    .p-selectbutton-fluid .p-togglebutton {\n        flex: 1 1 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var _c04 = ["item"];
var _c13 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function _forTrack0($index, $item) {
  return this.getOptionLabel($item);
}
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const \u0275$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c13, option_r3, \u0275$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-togglebutton", 2);
    \u0275\u0275listener("onChange", function SelectButton_For_1_Template_p_togglebutton_onChange_0_listener($event) {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const \u0275$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onOptionSelect($event, option_r3, \u0275$index_1_r4));
    });
    \u0275\u0275conditionalCreate(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.$disabled() || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.getAllowEmpty())("size", ctx_r4.size())("fluid", ctx_r4.fluid())("pt", ctx_r4.ptm("pcToggleButton"))("unstyled", ctx_r4.unstyled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var style8 = (
  /*css*/
  `
    ${style7}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`
);
var classes4 = {
  root: ({
    instance
  }) => ["p-selectbutton p-component", {
    "p-invalid": instance.invalid(),
    "p-selectbutton-fluid": instance.fluid()
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  style = style8;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectButtonStyle_BaseFactory || (\u0275SelectButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var SELECTBUTTON_INSTANCE = new InjectionToken("SELECTBUTTON_INSTANCE");
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseEditableHolder {
  componentName = "SelectButton";
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  get unselectable() {
    return this._unselectable;
  }
  _unselectable = false;
  set unselectable(value) {
    this._unselectable = value;
    this.allowEmpty = !value;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom item template.
   * @param {SelectButtonItemTemplateContext} context - item context.
   * @see {@link SelectButtonItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  $pcSelectButton = inject(SELECTBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getAllowEmpty() {
    if (this.multiple) {
      return this.allowEmpty || this.value?.length !== 1;
    }
    return this.allowEmpty;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p2(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p2(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p2(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  onOptionSelect(event, option, index) {
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !k(val, optionValue, this.equalityKey || void 0));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i116 = 0; i116 <= this.el.nativeElement.children.length - 1; i116++) {
      if (this.el.nativeElement.children[i116].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i116],
        index: i116
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !k(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (k(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = k(this.getOptionValue(option), this.value, this.equalityKey || void 0);
    }
    return selected;
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (\u0275SelectButton_BaseFactory || (\u0275SelectButton_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 5,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "group")("aria-labelledby", ctx.ariaLabelledBy)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: [1, "size"],
      fluid: [1, "fluid"]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
      provide: SELECTBUTTON_INSTANCE,
      useExisting: _SelectButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SelectButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SelectButton_For_1_Template, 2, 12, "p-togglebutton", 1, _forTrack0, true);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule, BindModule],
      template: `
        @for (option of options; track getOptionLabel(option); let i = $index) {
            <p-togglebutton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="$disabled() || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="getAllowEmpty()"
                [size]="size()"
                [fluid]="fluid()"
                [pt]="ptm('pcToggleButton')"
                [unstyled]="unstyled()"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-togglebutton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
        provide: SELECTBUTTON_INSTANCE,
        useExisting: SelectButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SelectButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.role]": '"group"',
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static \u0275fac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectButtonModule,
    imports: [SelectButton, SharedModule],
    exports: [SelectButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-styleclass.mjs
var StyleClass = class _StyleClass {
  el;
  renderer;
  zone;
  constructor(el, renderer, zone) {
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
  }
  /**
   * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
   * @group Props
   */
  selector;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterFromClass;
  /**
   * Style class to add during enter animation.
   * @group Props
   */
  enterActiveClass;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterToClass;
  /**
   * Style class to add when item begins to get hidden.
   * @group Props
   */
  leaveFromClass;
  /**
   * Style class to add during leave animation.
   * @group Props
   */
  leaveActiveClass;
  /**
   * Style class to add when leave animation is completed.
   * @group Props
   */
  leaveToClass;
  /**
   * Whether to trigger leave animation when outside of the element is clicked.
   * @group Props
   */
  hideOnOutsideClick;
  /**
   * Adds or removes a class when no enter-leave animation is required.
   * @group Props
   */
  toggleClass;
  /**
   * Whether to trigger leave animation when escape key pressed.
   * @group Props
   */
  hideOnEscape;
  /**
   * Whether to trigger leave animation when the target element resized.
   * @group Props
   */
  hideOnResize;
  /**
   * Target element to listen resize. Valid values are "window", "document" or target element selector.
   * @group Props
   */
  resizeSelector;
  eventListener;
  documentClickListener;
  documentKeydownListener;
  windowResizeListener;
  resizeObserver;
  target;
  enterListener;
  leaveListener;
  animating;
  _enterClass;
  _leaveClass;
  _resizeTarget;
  clickListener() {
    this.target ||= j(this.selector, this.el.nativeElement);
    if (this.toggleClass) {
      this.toggle();
    } else {
      if (this.target?.offsetParent === null) this.enter();
      else this.leave();
    }
  }
  toggle() {
    if (R(this.target, this.toggleClass)) P(this.target, this.toggleClass);
    else W(this.target, this.toggleClass);
  }
  enter() {
    if (this.enterActiveClass) {
      if (!this.animating) {
        this.animating = true;
        if (this.enterActiveClass.includes("slidedown")) {
          this.target.style.height = "0px";
          P(this.target, this.enterFromClass || "hidden");
          this.target.style.maxHeight = this.target.scrollHeight + "px";
          W(this.target, this.enterFromClass || "hidden");
          this.target.style.height = "";
        }
        W(this.target, this.enterActiveClass);
        if (this.enterFromClass) {
          P(this.target, this.enterFromClass);
        }
        this.enterListener = this.renderer.listen(this.target, "animationend", () => {
          P(this.target, this.enterActiveClass);
          if (this.enterToClass) {
            W(this.target, this.enterToClass);
          }
          this.enterListener && this.enterListener();
          if (this.enterActiveClass?.includes("slidedown")) {
            this.target.style.maxHeight = "";
          }
          this.animating = false;
        });
      }
    } else {
      if (this.enterFromClass) {
        P(this.target, this.enterFromClass);
      }
      if (this.enterToClass) {
        W(this.target, this.enterToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.bindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.bindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.bindResizeListener();
    }
  }
  leave() {
    if (this.leaveActiveClass) {
      if (!this.animating) {
        this.animating = true;
        W(this.target, this.leaveActiveClass);
        if (this.leaveFromClass) {
          P(this.target, this.leaveFromClass);
        }
        this.leaveListener = this.renderer.listen(this.target, "animationend", () => {
          P(this.target, this.leaveActiveClass);
          if (this.leaveToClass) {
            W(this.target, this.leaveToClass);
          }
          this.leaveListener && this.leaveListener();
          this.animating = false;
        });
      }
    } else {
      if (this.leaveFromClass) {
        P(this.target, this.leaveFromClass);
      }
      if (this.leaveToClass) {
        W(this.target, this.leaveToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.unbindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.unbindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.unbindResizeListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "click", (event) => {
        if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentClickListener();
        else if (this.isOutsideClick(event)) this.leave();
      });
    }
  }
  bindDocumentKeydownListener() {
    if (!this.documentKeydownListener) {
      this.zone.runOutsideAngular(() => {
        this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "keydown", (event) => {
          const {
            key,
            keyCode,
            which,
            type
          } = event;
          if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentKeydownListener();
          if (this.isVisible() && key === "Escape" && keyCode === 27 && which === 27) this.leave();
        });
      });
    }
  }
  isVisible() {
    return this.target.offsetParent !== null;
  }
  isOutsideClick(event) {
    return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  unbindDocumentKeydownListener() {
    if (this.documentKeydownListener) {
      this.documentKeydownListener();
      this.documentKeydownListener = null;
    }
  }
  bindResizeListener() {
    this._resizeTarget = j(this.resizeSelector);
    if (c(this._resizeTarget)) {
      this.bindElementResizeListener();
    } else {
      this.bindWindowResizeListener();
    }
  }
  unbindResizeListener() {
    this.unbindWindowResizeListener();
    this.unbindElementResizeListener();
  }
  bindWindowResizeListener() {
    if (!this.windowResizeListener) {
      this.zone.runOutsideAngular(() => {
        this.windowResizeListener = this.renderer.listen(window, "resize", () => {
          if (!this.isVisible()) {
            this.unbindWindowResizeListener();
          } else {
            this.leave();
          }
        });
      });
    }
  }
  unbindWindowResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  bindElementResizeListener() {
    if (!this.resizeObserver && this._resizeTarget) {
      let isFirstResize = true;
      this.resizeObserver = new ResizeObserver(() => {
        if (isFirstResize) {
          isFirstResize = false;
          return;
        }
        if (this.isVisible()) {
          this.leave();
        }
      });
      this.resizeObserver.observe(this._resizeTarget);
    }
  }
  unbindElementResizeListener() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
  }
  ngOnDestroy() {
    this.target = null;
    this._resizeTarget = null;
    if (this.eventListener) {
      this.eventListener();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentKeydownListener();
    this.unbindResizeListener();
  }
  static \u0275fac = function StyleClass_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClass)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _StyleClass,
    selectors: [["", "pStyleClass", ""]],
    hostBindings: function StyleClass_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function StyleClass_click_HostBindingHandler() {
          return ctx.clickListener();
        });
      }
    },
    inputs: {
      selector: [0, "pStyleClass", "selector"],
      enterFromClass: "enterFromClass",
      enterActiveClass: "enterActiveClass",
      enterToClass: "enterToClass",
      leaveFromClass: "leaveFromClass",
      leaveActiveClass: "leaveActiveClass",
      leaveToClass: "leaveToClass",
      hideOnOutsideClick: [2, "hideOnOutsideClick", "hideOnOutsideClick", booleanAttribute],
      toggleClass: "toggleClass",
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      hideOnResize: [2, "hideOnResize", "hideOnResize", booleanAttribute],
      resizeSelector: "resizeSelector"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClass, [{
    type: Directive,
    args: [{
      selector: "[pStyleClass]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    selector: [{
      type: Input,
      args: ["pStyleClass"]
    }],
    enterFromClass: [{
      type: Input
    }],
    enterActiveClass: [{
      type: Input
    }],
    enterToClass: [{
      type: Input
    }],
    leaveFromClass: [{
      type: Input
    }],
    leaveActiveClass: [{
      type: Input
    }],
    leaveToClass: [{
      type: Input
    }],
    hideOnOutsideClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggleClass: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizeSelector: [{
      type: Input
    }],
    clickListener: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var StyleClassModule = class _StyleClassModule {
  static \u0275fac = function StyleClassModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClassModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StyleClassModule,
    imports: [StyleClass],
    exports: [StyleClass]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClassModule, [{
    type: NgModule,
    args: [{
      imports: [StyleClass],
      exports: [StyleClass]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i116 = 0; i116 < styles.length; i116++) {
          element.classList.add(styles[i116]);
        }
      } else {
        let styles = className.split(" ");
        for (let i116 = 0; i116 < styles.length; i116++) {
          element.className += " " + styles[i116];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i116 = 0; i116 < children.length; i116++) {
      if (children[i116] == element)
        return num;
      if (children[i116].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i116 = 0; i116 < children.length; i116++) {
      if (children[i116] == element)
        return num;
      if (children[i116].attributes && children[i116].attributes[attributeName] && children[i116].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      origin2 = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    if (gutter) {
      const gutterValue = x(/-anchor-gutter$/)?.value;
      element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
    }
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        if (window.requestAnimationFrame)
          window.requestAnimationFrame(tick);
        else
          setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p18 = Element.prototype;
    var f37 = p18["matches"] || p18.webkitMatchesSelector || p18["mozMatchesSelector"] || p18["msMatchesSelector"] || function(s49) {
      return [].indexOf.call(document.querySelectorAll(s49), this) !== -1;
    };
    return f37.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style11 = getComputedStyle(el);
      width += parseFloat(style11.marginLeft) + parseFloat(style11.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style11 = getComputedStyle(el);
    return parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style11 = getComputedStyle(el);
    return parseFloat(style11.marginLeft) + parseFloat(style11.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style11 = getComputedStyle(el);
    width += parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style11 = getComputedStyle(el);
    width -= parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style11 = getComputedStyle(el);
    height += parseFloat(style11.paddingTop) + parseFloat(style11.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style11 = getComputedStyle(el);
      height += parseFloat(style11.marginTop) + parseFloat(style11.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style11 = getComputedStyle(el);
    height -= parseFloat(style11.paddingTop) + parseFloat(style11.paddingBottom) + parseFloat(style11.borderTopWidth) + parseFloat(style11.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style11 = getComputedStyle(el);
    width -= parseFloat(style11.paddingLeft) + parseFloat(style11.paddingRight) + parseFloat(style11.borderLeftWidth) + parseFloat(style11.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d140 = document, e229 = d140.documentElement, g22 = d140.getElementsByTagName("body")[0], w4 = win.innerWidth || e229.clientWidth || g22.clientWidth, h18 = win.innerHeight || e229.clientHeight || g22.clientHeight;
    return { width: w4, height: h18 };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode?.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style11 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style11.borderLeftWidth) - parseFloat(style11.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection && window.getSelection()) {
      if (window.getSelection()?.empty) {
        window.getSelection()?.empty();
      } else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) {
        window.getSelection()?.removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection()?.toString();
    else if (document.getSelection)
      return document.getSelection()?.toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement?.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v11) => {
          if (v11 !== null && v11 !== void 0) {
            const type = typeof v11;
            if (type === "string" || type === "number") {
              cv.push(v11);
            } else if (type === "object") {
              const _cv = Array.isArray(v11) ? computedStyles(rule, v11) : Object.entries(v11).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c113) => !!c113)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  onAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toggleswitch/index.mjs
var style9 = "\n    .p-toggleswitch {\n        display: inline-block;\n        width: dt('toggleswitch.width');\n        height: dt('toggleswitch.height');\n    }\n\n    .p-toggleswitch-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border-radius: dt('toggleswitch.border.radius');\n    }\n\n    .p-toggleswitch-slider {\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        border-width: dt('toggleswitch.border.width');\n        border-style: solid;\n        border-color: dt('toggleswitch.border.color');\n        background: dt('toggleswitch.background');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            border-color dt('toggleswitch.transition.duration'),\n            outline-color dt('toggleswitch.transition.duration'),\n            box-shadow dt('toggleswitch.transition.duration');\n        border-radius: dt('toggleswitch.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('toggleswitch.shadow');\n    }\n\n    .p-toggleswitch-handle {\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: dt('toggleswitch.handle.background');\n        color: dt('toggleswitch.handle.color');\n        width: dt('toggleswitch.handle.size');\n        height: dt('toggleswitch.handle.size');\n        inset-inline-start: dt('toggleswitch.gap');\n        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));\n        border-radius: dt('toggleswitch.handle.border.radius');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            inset-inline-start dt('toggleswitch.slide.duration'),\n            box-shadow dt('toggleswitch.slide.duration');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.background');\n        border-color: dt('toggleswitch.checked.border.color');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.background');\n        color: dt('toggleswitch.handle.checked.color');\n        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n        background: dt('toggleswitch.hover.background');\n        border-color: dt('toggleswitch.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.hover.background');\n        color: dt('toggleswitch.handle.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.hover.background');\n        border-color: dt('toggleswitch.checked.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.hover.background');\n        color: dt('toggleswitch.handle.checked.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n        box-shadow: dt('toggleswitch.focus.ring.shadow');\n        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');\n        outline-offset: dt('toggleswitch.focus.ring.offset');\n    }\n\n    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n        border-color: dt('toggleswitch.invalid.border.color');\n    }\n\n    .p-toggleswitch.p-disabled {\n        opacity: 1;\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-slider {\n        background: dt('toggleswitch.disabled.background');\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.disabled.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c05 = ["handle"];
var _c14 = ["input"];
var _c23 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleSwitch_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleSwitch_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.handleTemplate || ctx_r1._handleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c23, ctx_r1.checked()));
  }
}
var style10 = (
  /*css*/
  `
    ${style9}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes5 = {
  root: ({
    instance
  }) => ["p-toggleswitch p-component", {
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid()
  }],
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  style = style10;
  classes = classes5;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitchStyle_BaseFactory || (\u0275ToggleSwitchStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_INSTANCE = new InjectionToken("TOGGLESWITCH_INSTANCE");
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseEditableHolder {
  componentName = "ToggleSwitch";
  $pcToggleSwitch = inject(TOGGLESWITCH_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Custom handle template.
   * @param {ToggleSwitchHandleTemplateContext} context - handle context.
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  focused = false;
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  onHostClick(event) {
    this.onClick(event);
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.writeModelValue(this.checked() ? this.falseValue : this.trueValue);
      this.onModelChange(this.modelValue());
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue()
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  checked() {
    return this.modelValue() === this.trueValue;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      checked: this.checked(),
      disabled: this.$disabled(),
      invalid: this.invalid()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitch_BaseFactory || (\u0275ToggleSwitch_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.handleTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.input = _t2.first);
      }
    },
    hostVars: 7,
    hostBindings: function ToggleSwitch_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ToggleSwitch_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p-checked", ctx.checked())("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      size: [1, "size"],
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
      provide: TOGGLESWITCH_INSTANCE,
      useExisting: _ToggleSwitch
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleSwitch
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 22,
    consts: [["input", ""], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "pAutoFocus", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function ToggleSwitch_Template_input_focus_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus());
        })("blur", function ToggleSwitch_Template_input_blur_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 2);
        \u0275\u0275conditionalCreate(4, ToggleSwitch_Conditional_4_Template, 1, 4, "ng-container");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("input"));
        \u0275\u0275property("checked", ctx.checked())("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name())("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("slider"));
        \u0275\u0275property("pBind", ctx.ptm("slider"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("handle"));
        \u0275\u0275property("pBind", ctx.ptm("handle"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.handleTemplate || ctx._handleTemplate ? 4 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            role="switch"
            [class]="cx('input')"
            [checked]="checked()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-checked]="checked()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.name]="name()"
            [attr.tabindex]="tabindex"
            (focus)="onFocus()"
            (blur)="onBlur()"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('slider')" [pBind]="ptm('slider')" [attr.data-p]="dataP">
            <div [class]="cx('handle')" [pBind]="ptm('handle')" [attr.data-p]="dataP">
                @if (handleTemplate || _handleTemplate) {
                    <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                }
            </div>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
        provide: TOGGLESWITCH_INSTANCE,
        useExisting: ToggleSwitch
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleSwitch
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p-checked]": "checked()",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static \u0275fac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleSwitchModule,
    imports: [ToggleSwitch, SharedModule],
    exports: [ToggleSwitch, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/admin/article/themeswitcher.ts
var presets = {
  Aura: Qr,
  Material: Qe,
  Lara: Qr2,
  Nora: Qr3
};
var ThemeSwitcher = class _ThemeSwitcher {
  STORAGE_KEY = "themeSwitcherState";
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  config = inject(PrimeNG);
  // ✅ FIX IMPORTANT : PLUS DE NULL
  themeState = signal({
    preset: "Aura",
    primary: "noir",
    surface: "slate",
    darkTheme: false
  }, ...ngDevMode ? [{ debugName: "themeState" }] : []);
  transitionComplete = signal(false, ...ngDevMode ? [{ debugName: "transitionComplete" }] : []);
  // ========================
  // COMPUTED SAFE
  // ========================
  iconClass = computed(() => this.themeState().darkTheme ? "pi-sun" : "pi-moon", ...ngDevMode ? [{ debugName: "iconClass" }] : []);
  theme = computed(() => this.themeState().darkTheme ? "dark" : "light", ...ngDevMode ? [{ debugName: "theme" }] : []);
  selectedPreset = computed(() => this.themeState().preset, ...ngDevMode ? [{ debugName: "selectedPreset" }] : []);
  selectedSurfaceColor = computed(() => this.themeState().surface, ...ngDevMode ? [{ debugName: "selectedSurfaceColor" }] : []);
  selectedPrimaryColor = computed(() => this.themeState().primary, ...ngDevMode ? [{ debugName: "selectedPrimaryColor" }] : []);
  presets = Object.keys(presets);
  // ========================
  // PRIMARY COLORS SAFE
  // ========================
  primaryColors = computed(() => {
    const presetName = this.themeState().preset;
    const presetPalette = presets[presetName]?.primitive || {};
    const colors = [
      "emerald",
      "green",
      "lime",
      "orange",
      "amber",
      "yellow",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose"
    ];
    const palettes = [
      { name: "noir", palette: {} }
    ];
    colors.forEach((color) => {
      palettes.push({
        name: color,
        palette: presetPalette[color] || {}
      });
    });
    return palettes;
  }, ...ngDevMode ? [{ debugName: "primaryColors" }] : []);
  // ========================
  // SURFACES
  // ========================
  surfaces = [
    {
      name: "slate",
      palette: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
      }
    }
    // (reste inchangé)
  ];
  // ========================
  // CONSTRUCTOR
  // ========================
  constructor() {
    this.themeState.set(this.loadthemeState());
    effect(() => {
      const state = this.themeState();
      this.savethemeState(state);
      this.handleDarkModeTransition(state);
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onPresetChange(this.themeState().preset);
    }
  }
  // ========================
  // RIPPLE
  // ========================
  get ripple() {
    return this.config.ripple();
  }
  set ripple(value) {
    this.config.ripple.set(value);
  }
  // ========================
  // THEME TOGGLE
  // ========================
  onThemeToggler() {
    this.themeState.update((state) => __spreadProps(__spreadValues({}, state), {
      darkTheme: !state.darkTheme
    }));
  }
  // ========================
  // PRESET EXT SAFE
  // ========================
  getPresetExt() {
    const color = this.primaryColors().find((c113) => c113.name === this.selectedPrimaryColor()) || this.primaryColors()[0];
    if (color.name === "noir") {
      return {
        semantic: {
          primary: {},
          colorScheme: {
            light: {},
            dark: {}
          }
        }
      };
    }
    return {
      semantic: {
        primary: color.palette,
        colorScheme: {
          light: {},
          dark: {}
        }
      }
    };
  }
  // ========================
  // COLORS
  // ========================
  updateColors(event, type, color) {
    if (type === "primary") {
      this.themeState.update((s49) => __spreadProps(__spreadValues({}, s49), { primary: color.name }));
    }
    if (type === "surface") {
      this.themeState.update((s49) => __spreadProps(__spreadValues({}, s49), { surface: color.name }));
    }
    this.applyTheme(type, color);
    event.stopPropagation();
  }
  applyTheme(type, color) {
    if (type === "primary") {
      a2(this.getPresetExt());
    }
    if (type === "surface") {
      s4(color.palette);
    }
  }
  // ========================
  // PRESET CHANGE
  // ========================
  onPresetChange(event) {
    this.themeState.update((s49) => __spreadProps(__spreadValues({}, s49), {
      preset: event
    }));
    const preset = presets[event];
    const surfacePalette = this.surfaces.find((s49) => s49.name === this.selectedSurfaceColor())?.palette;
    if (event === "Material") {
      document.body.classList.add("material");
      this.config.ripple.set(true);
    } else {
      document.body.classList.remove("material");
      this.config.ripple.set(false);
    }
    w3().preset(preset).preset(this.getPresetExt()).surfacePalette(surfacePalette).use({ useDefaultOptions: true });
  }
  // ========================
  // DARK MODE
  // ========================
  toggleDarkMode(state) {
    if (state.darkTheme) {
      this.document.documentElement.classList.add("p-dark");
    } else {
      this.document.documentElement.classList.remove("p-dark");
    }
  }
  handleDarkModeTransition(state) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleDarkMode(state);
    }
  }
  // ========================
  // STORAGE
  // ========================
  loadthemeState() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored)
        return JSON.parse(stored);
    }
    return {
      preset: "Aura",
      primary: "noir",
      surface: "slate",
      darkTheme: false
    };
  }
  savethemeState(state) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    }
  }
  static \u0275fac = function ThemeSwitcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeSwitcher)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSwitcher, selectors: [["theme-switcher"]], decls: 1, vars: 0, template: function ThemeSwitcher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275text(0, "...");
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    StyleClassModule,
    SelectButtonModule,
    ToggleSwitchModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSwitcher, [{
    type: Component,
    args: [{
      selector: "theme-switcher",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        StyleClassModule,
        SelectButtonModule,
        ToggleSwitchModule
      ],
      template: `...`
      // (inchangé pour éviter surcharge)
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSwitcher, { className: "ThemeSwitcher", filePath: "src/app/features/admin/article/themeswitcher.ts", lineNumber: 50 });
})();

// src/app/features/admin/article/article.component.ts
var _c06 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c15 = () => ({});
var _c24 = (a0, a1, a210) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a210 });
var _forTrack02 = ($index, $item) => $item.id;
function ArticleComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function ArticleComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Aucun article pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function ArticleComponent_Conditional_14_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 23)(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 27)(17, "div", 28)(18, "button", 29);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_For_18_Template_button_click_18_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 30);
    \u0275\u0275element(20, "path", 31)(21, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 33);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_For_18_Template_button_click_22_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 34);
    \u0275\u0275element(24, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 36);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_For_18_Template_button_click_25_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 37);
    \u0275\u0275element(27, "path", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.summary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryLabel(article_r3.category));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getStatusBadgeClass(article_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getStatusLabel(article_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.viewCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(article_r3.createdAt));
  }
}
function ArticleComponent_Conditional_14_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_ng_container_22_Template_button_click_1_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.currentPage() === page_r6 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r3.currentPage() === page_r6 ? \u0275\u0275pureFunction0(3, _c06) : \u0275\u0275pureFunction0(4, _c15));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r6, " ");
  }
}
function ArticleComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Vues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 19);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ArticleComponent_Conditional_14_For_18_Template, 28, 8, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "button", 21);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(21, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ArticleComponent_Conditional_14_ng_container_22_Template, 3, 5, "ng-container", 22);
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_14_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(24, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.articles());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function ArticleComponent_Conditional_15_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 72);
    \u0275\u0275text(1, " Le titre est obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ArticleComponent_Conditional_15_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 44);
    \u0275\u0275text(2, "Image mise en avant ");
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 73);
    \u0275\u0275listener("change", function ArticleComponent_Conditional_15_div_51_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function ArticleComponent_Conditional_15_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 44);
    \u0275\u0275text(2, "Fichier joint (PDF)");
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 74);
    \u0275\u0275listener("change", function ArticleComponent_Conditional_15_div_52_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function ArticleComponent_Conditional_15_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 71);
  }
}
function ArticleComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 40)(2, "div", 41)(3, "h2", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 43, 0);
    \u0275\u0275listener("ngSubmit", function ArticleComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveArticle());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 44);
    \u0275\u0275text(9, "Titre ");
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 46, 1);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.title, $event) || (ctx_r3.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ArticleComponent_Conditional_15_p_14_Template, 2, 0, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 44);
    \u0275\u0275text(17, "R\xE9sum\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.summary, $event) || (ctx_r3.form.summary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "theme-switcher");
    \u0275\u0275elementStart(20, "div", 49)(21, "p-editor", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_p_editor_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.content, $event) || (ctx_r3.form.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 51)(23, "div")(24, "label", 44);
    \u0275\u0275text(25, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.category, $event) || (ctx_r3.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ArticleComponent_Conditional_15_Template_select_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedImage = null);
    });
    \u0275\u0275elementStart(27, "option", 53);
    \u0275\u0275text(28, "Actualit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 54);
    \u0275\u0275text(30, "Communiqu\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 55);
    \u0275\u0275text(32, "\xC9v\xE9nement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 56);
    \u0275\u0275text(34, "Projet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 57);
    \u0275\u0275text(36, "Rapport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 58);
    \u0275\u0275text(38, "Discours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div")(40, "label", 44);
    \u0275\u0275text(41, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.status, $event) || (ctx_r3.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 60);
    \u0275\u0275text(44, "Brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 61);
    \u0275\u0275text(46, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 62);
    \u0275\u0275text(48, "Publi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 63);
    \u0275\u0275text(50, "Archiv\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(51, ArticleComponent_Conditional_15_div_51_Template, 6, 0, "div", 64)(52, ArticleComponent_Conditional_15_div_52_Template, 6, 0, "div", 64);
    \u0275\u0275elementStart(53, "div", 65)(54, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ArticleComponent_Conditional_15_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.featured, $event) || (ctx_r3.form.featured = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "label", 67);
    \u0275\u0275text(56, "Mettre en avant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 68)(58, "button", 69);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_15_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(59, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 70);
    \u0275\u0275conditionalCreate(61, ArticleComponent_Conditional_15_Conditional_61_Template, 1, 0, "div", 71);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const title_r10 = \u0275\u0275reference(13);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Modifier l'article" : "Nouvel article", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", title_r10.invalid && title_r10.touched);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.summary);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.content);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.category);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.status);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r3.form.category === "ACTUALITE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.category !== "ACTUALITE");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.featured);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function ArticleComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 79);
    \u0275\u0275elementEnd();
  }
}
function ArticleComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 80);
    \u0275\u0275elementEnd();
  }
}
function ArticleComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function ArticleComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 75);
    \u0275\u0275template(2, ArticleComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 76)(3, ArticleComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 76)(4, ArticleComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 76);
    \u0275\u0275elementStart(5, "span", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c24, ctx_r3.notification().type === "success", ctx_r3.notification().type === "error", ctx_r3.notification().type === "info"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.notification().message);
  }
}
function ArticleComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 82)(2, "h3", 83);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "button", 86);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 87);
    \u0275\u0275listener("click", function ArticleComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmModal().onConfirm());
    });
    \u0275\u0275text(10, " Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.confirmModal().message);
  }
}
var ArticleComponent = class _ArticleComponent {
  apiService;
  router;
  // ---------------- NOTIFICATION MODAL ----------------
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  text;
  selectedImages = [];
  // pour ACTUALITE
  selectedFile = null;
  // pour PDF
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingArticle = signal(null, ...ngDevMode ? [{ debugName: "editingArticle" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  selectedImage = null;
  fileError = false;
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    title: "",
    summary: "",
    content: "",
    category: ArticleCategory.ACTUALITE,
    status: ArticleStatus.DRAFT,
    featured: false,
    images: []
  };
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles(page = 0) {
    this.loading.set(true);
    this.apiService.getAllArticles(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(page + 1);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadArticles(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadArticles(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadArticles(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i116) => i116 + 1);
  }
  openModal() {
    this.form = { title: "", summary: "", content: "", category: ArticleCategory.ACTUALITE, status: ArticleStatus.DRAFT, featured: false, images: [] };
    this.selectedImage = null;
    this.selectedImages = [];
    this.selectedFile = null;
    this.fileError = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  closeModal(form) {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
    this.selectedImages = [];
    this.selectedFile = null;
    this.fileError = false;
    form?.resetForm();
  }
  onFileSelected1(event) {
    const input2 = event.target;
    if (!input2.files || input2.files.length === 0) {
      this.selectedImage = null;
      return;
    }
    const file = input2.files[0];
    if (this.form.category === "ACTUALITE") {
      if (!file.type.startsWith("image/")) {
        alert("Pour une actualit\xE9, veuillez s\xE9lectionner une image");
        input2.value = "";
        this.selectedImage = null;
        return;
      }
    } else {
      if (file.type !== "application/pdf") {
        alert("Veuillez s\xE9lectionner un fichier PDF");
        input2.value = "";
        this.selectedImage = null;
        return;
      }
    }
    this.selectedImage = file;
    this.fileError = false;
  }
  extractImagesFromContent(content) {
    const div = document.createElement("div");
    div.innerHTML = content || "";
    return Array.from(div.querySelectorAll("img")).map((img) => img.getAttribute("src") || "").filter((src) => src !== "");
  }
  async urlToFile(url, index) {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], `image-${index}.jpg`, {
      type: blob.type || "image/jpeg"
    });
  }
  async updateSelectedImagesFromEditor() {
    const urls = this.extractImagesFromContent(this.form.content);
    this.selectedImages = await Promise.all(urls.map((url, i116) => this.urlToFile(url, i116)));
  }
  async save() {
    await this.updateSelectedImagesFromEditor();
    console.log(this.selectedImages);
    const formData = new FormData();
    this.selectedImages.forEach((file) => {
      formData.append("files", file);
    });
  }
  onFileSelected(event) {
    const input2 = event.target;
    if (!input2.files || input2.files.length === 0) {
      this.selectedImages = [];
      return;
    }
    const files = Array.from(input2.files);
    if (this.form.category === "ACTUALITE") {
      const validImages = files.filter((file) => file.type.startsWith("image/"));
      if (validImages.length !== files.length) {
        alert("Certains fichiers ne sont pas des images");
      }
      if (validImages.length === 0) {
        input2.value = "";
        this.selectedImages = [];
        this.fileError = true;
        return;
      }
      this.selectedImages = validImages;
    } else {
      const file = files[0];
      if (file.type !== "application/pdf") {
        alert("Veuillez s\xE9lectionner un fichier PDF");
        input2.value = "";
        this.selectedImages = [];
        this.fileError = true;
        return;
      }
      this.selectedImages = [file];
    }
    this.fileError = false;
  }
  onFileSelected2(event) {
    const input2 = event.target;
    if (!input2.files || input2.files.length === 0) {
      this.selectedImages = [];
      this.selectedFile = null;
      return;
    }
    const files = Array.from(input2.files);
    if (this.form.category === "ACTUALITE") {
      const validImages = [];
      for (const file of files) {
        if (!file.type.startsWith("image/")) {
          alert(`Le fichier ${file.name} n'est pas une image`);
          continue;
        }
        validImages.push(file);
      }
      if (validImages.length === 0) {
        input2.value = "";
        this.selectedImages = [];
        this.fileError = true;
        return;
      }
      this.selectedImages = validImages;
      this.selectedFile = null;
    } else {
      const file = files[0];
      if (file.type !== "application/pdf") {
        alert("Veuillez s\xE9lectionner un fichier PDF");
        input2.value = "";
        this.selectedFile = null;
        this.fileError = true;
        return;
      }
      this.selectedFile = file;
      this.selectedImages = [];
    }
    this.fileError = false;
  }
  // Fonction viewArticle
  viewArticle(article) {
    this.router.navigate([`/admin/Articles`, article.id]);
  }
  editArticle(article) {
    this.form = {
      title: article.title,
      summary: article.summary || "",
      content: article.content,
      category: article.category,
      status: article.status,
      featured: article.featured,
      images: article.images || []
    };
    this.selectedImages = [];
    this.selectedFile = null;
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  saveArticle(form) {
    if (!this.form.title || !this.form.content)
      return;
    if (this.form.category === "ACTUALITE" && !this.selectedImages) {
      this.fileError = true;
      return;
    }
    this.saving.set(true);
    const editing = this.editingArticle();
    const articleDTO = {
      title: this.form.title,
      summary: this.form.summary,
      content: this.form.content,
      category: this.form.category,
      status: this.form.status,
      featured: this.form.featured
    };
    const formData = new FormData();
    formData.append("article", new Blob([JSON.stringify(articleDTO)], { type: "application/json" }));
    formData.append("authorId", "1");
    this.selectedImages.forEach((file) => {
      formData.append("file", file);
    });
    const request = editing ? this.apiService.updateArticle(editing.id, formData) : this.apiService.createArticle(formData);
    request.subscribe({
      next: (response) => {
        this.loadArticles();
        this.closeModal(form);
        this.saving.set(false);
        this.showNotification(editing ? "Article mis \xE0 jour avec succ\xE8s" : "Article cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
  deleteArticle1(article) {
    if (confirm(`Supprimer l'article "${article.title}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
  }
  getCategoryLabel(category) {
    const labels = {
      "ACTUALITE": "Actualit\xE9",
      "COMMUNIQUE": "Communiqu\xE9",
      "EVENEMENT": "\xC9v\xE9nement",
      "PROJET": "Projet",
      "RAPPORT": "Rapport",
      "DISCOURS": "Discours"
    };
    return labels[category] || category;
  }
  getStatusLabel(status) {
    const labels = { DRAFT: "Brouillon", PENDING: "En attente", PUBLISHED: "Publi\xE9", ARCHIVED: "Archiv\xE9" };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes6 = {
      DRAFT: "badge bg-neutral-100 text-neutral-700 ring-1 ring-neutral-300",
      PENDING: "badge bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
      PUBLISHED: "badge bg-green-50 text-green-700 ring-1 ring-green-200",
      ARCHIVED: "badge bg-red-50 text-red-700 ring-1 ring-red-200"
    };
    return classes6[status] || "badge bg-neutral-100 text-neutral-600";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  // ----------------- HELPERS -----------------
  trackByArticleId(index, article) {
    return article.id;
  }
  // ----------------- NOTIFICATIONS -----------------
  showNotification(message, type = "success", duration = 2e3) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update((n152) => __spreadProps(__spreadValues({}, n152), { show: false })), duration);
  }
  // ----------------- CONFIRMATION MODAL -----------------
  confirmModal = signal({
    show: false,
    message: "",
    onConfirm: () => {
    }
  }, ...ngDevMode ? [{ debugName: "confirmModal" }] : []);
  openConfirmModal(message, onConfirm) {
    this.confirmModal.set({ show: true, message, onConfirm });
  }
  closeConfirmModal() {
    this.confirmModal.update((c113) => __spreadProps(__spreadValues({}, c113), { show: false }));
  }
  deleteArticle(article) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => {
          this.loadArticles();
          this.closeConfirmModal();
          this.showNotification("Article supprim\xE9 avec succ\xE8s", "success");
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
  static \u0275fac = function ArticleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArticleComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleComponent, selectors: [["app-article"]], decls: 18, vars: 4, consts: [["articleForm", "ngForm"], ["title", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "text-sm", "text-neutral-500"], [1, "px-6", "py-4", "text-right"], [1, "flex", "justify-end", "gap-2"], ["title", "Voir l'article", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-blue-500", "rounded-full", "bg-white", "hover:bg-blue-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], ["novalidate", "", 1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-red-500"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["name", "summary", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "card"], ["name", "content", "required", "", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "category", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "ACTUALITE"], ["value", "COMMUNIQUE"], ["value", "EVENEMENT"], ["value", "PROJET"], ["value", "RAPPORT"], ["value", "DISCOURS"], ["name", "status", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "DRAFT"], ["value", "PENDING"], ["value", "PUBLISHED"], ["value", "ARCHIVED"], [4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "featured", "id", "featured", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "featured", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], [1, "text-sm", "text-red-500", "mt-1"], ["type", "file", "multiple", "", "accept", "image/*", 1, "input", 3, "change"], ["type", "file", "accept", "application/pdf", 1, "input", 3, "change"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Articles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "G\xE9rez les actualit\xE9s et communiqu\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ArticleComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel article ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275conditionalCreate(12, ArticleComponent_Conditional_12_Template, 2, 0, "div", 10)(13, ArticleComponent_Conditional_13_Template, 5, 0, "div", 10)(14, ArticleComponent_Conditional_14_Template, 25, 3, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, ArticleComponent_Conditional_15_Template, 63, 13, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ArticleComponent_Conditional_16_Template, 7, 9, "div", 13);
      \u0275\u0275conditionalCreate(17, ArticleComponent_Conditional_17_Template, 11, 1, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.articles().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule, EditorModule, Editor, ThemeSwitcher], styles: ["\n\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in 0.3s ease-out;\n}\n/*# sourceMappingURL=article.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleComponent, [{
    type: Component,
    args: [{ selector: "app-article", standalone: true, imports: [CommonModule, FormsModule, RouterModule, EditorModule, ThemeSwitcher], template: `  <div class="space-y-6">\r
      <!-- Header -->\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Articles</h1>\r
          <p class="text-neutral-500">G\xE9rez les actualit\xE9s et communiqu\xE9s</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouvel article\r
        </button>\r
      </div>\r
      \r
      <!-- Table -->\r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center">\r
            <div class="spinner w-8 h-8 mx-auto"></div>\r
          </div>\r
        } @else if (articles().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun article pour le moment</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Titre</th>\r
                  <th>Cat\xE9gorie</th>\r
                  <th>Statut</th>\r
                  <th>Vues</th>\r
                  <th>Date</th>\r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (article of articles(); track article.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="max-w-xs">\r
                        <p class="font-medium text-neutral-900 truncate">{{ article.title }}</p>\r
                        <p class="text-xs text-neutral-400 truncate">{{ article.summary }}</p>\r
                      </div>\r
                    </td>\r
                    <td>{{ getCategoryLabel(article.category) }}</td>\r
                     <td><span [class]="getStatusBadgeClass(article.status)">{{ getStatusLabel(article.status) }}</span></td>\r
                    <td>{{ article.viewCount }}</td>\r
                    <td class="text-sm text-neutral-500">{{ formatDate(article.createdAt) }}</td>\r
                    <td class="px-6 py-4 text-right">\r
                      <div class="flex justify-end gap-2">\r
\r
                        <button (click)="viewArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-blue-500 rounded-full bg-white hover:bg-blue-50 transition-colors"\r
                                title="Voir l'article">\r
                          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Modifier -->\r
                        <button (click)="editArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                                title="Modifier">\r
                          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Supprimer -->\r
                        <button (click)="deleteArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"\r
                                title="Supprimer">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                          </svg>\r
                        </button>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
\r
          <!-- Pagination int\xE9gr\xE9e au tableau avec couleur #00843B -->\r
          <div class="flex justify-end items-center mt-2 px-6 py-2 gap-2 border-t border-gray-200 bg-gray-50 rounded-b-lg">\r
          <!-- Bouton pr\xE9c\xE9dent -->\r
          <button (click)="prevPage()" \r
                  [disabled]="currentPage() === 1"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              &laquo; Pr\xE9c\xE9dent\r
          </button>\r
\r
          <!-- Pages num\xE9rot\xE9es -->\r
          <ng-container *ngFor="let page of pages()">\r
              <button (click)="goToPage(page)"\r
                      [ngClass]="currentPage() === page\r
                              ? 'px-3 py-1 border rounded text-white' \r
                              : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors'"\r
                      [ngStyle]="currentPage() === page ? {'background-color':'#00843B', 'border-color':'#00843B'} : {}">\r
              {{ page }}\r
              </button>\r
          </ng-container>\r
\r
          <!-- Bouton suivant -->\r
          <button (click)="nextPage()" \r
                  [disabled]="currentPage() === totalPages()"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              Suivant &raquo;\r
          </button>\r
          </div>\r
\r
            \r
          </div>\r
        }\r
      </div>\r
      \r
      \r
      <!-- Modal -->\r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">\r
              {{ editingArticle() ? "Modifier l'article" : 'Nouvel article' }}\r
            </h2>\r
\r
            </div>\r
            \r
            <form #articleForm="ngForm" (ngSubmit)="saveArticle()"  class="p-6 space-y-5" novalidate>\r
              <div>\r
                <label class="label">Titre <span class="text-red-500">*</span></label>\r
\r
                <input type="text"\r
                      [(ngModel)]="form.title"\r
                      name="title"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
\r
                <p *ngIf="title.invalid && title.touched"\r
                  class="text-sm text-red-500 mt-1">\r
                  Le titre est obligatoire\r
                </p>\r
              </div>\r
\r
              \r
              <div>\r
                <label class="label">R\xE9sum\xE9</label>\r
                <textarea [(ngModel)]="form.summary" name="summary" rows="2" class="input resize-none"></textarea>\r
              </div>\r
              \r
            <theme-switcher />\r
                  <div class="card">\r
          <p-editor\r
            [(ngModel)]="form.content"\r
            name="content"\r
            required>\r
          </p-editor>\r
                  </div>\r
\r
\r
              \r
              <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                <label class="label">Cat\xE9gorie</label>\r
                <select [(ngModel)]="form.category" name="category" class="input" (ngModelChange)="selectedImage=null">\r
                  <option value="ACTUALITE">Actualit\xE9</option>\r
                  <option value="COMMUNIQUE">Communiqu\xE9</option>\r
                  <option value="EVENEMENT">\xC9v\xE9nement</option>\r
                  <option value="PROJET">Projet</option>\r
                  <option value="RAPPORT">Rapport</option>\r
                  <option value="DISCOURS">Discours</option>\r
                </select>\r
              </div>\r
                <div>\r
                  <label class="label">Statut</label>\r
                  <select [(ngModel)]="form.status" name="status" class="input">\r
                    <option value="DRAFT">Brouillon</option>\r
                    <option value="PENDING">En attente</option>\r
                    <option value="PUBLISHED">Publi\xE9</option>\r
                    <option value="ARCHIVED">Archiv\xE9</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
             \r
\r
              <div *ngIf="form.category==='ACTUALITE'">\r
                <label class="label">Image mise en avant <span class="text-red-500">*</span></label>\r
                <input type="file" multiple (change)="onFileSelected($event)" accept="image/*" class="input">\r
              </div>\r
\r
              <div *ngIf="form.category!=='ACTUALITE'">\r
                <label class="label">Fichier joint (PDF)<span class="text-red-500">*</span></label>\r
                <input type="file" (change)="onFileSelected($event)" accept="application/pdf" class="input">\r
              </div>\r
\r
              \r
              <div class="flex items-center gap-2">\r
                <input type="checkbox" [(ngModel)]="form.featured" name="featured" id="featured" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">\r
                <label for="featured" class="text-sm text-neutral-700">Mettre en avant</label>\r
              </div>\r
              \r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="px-4 py-2 rounded-lg bg-[#00843B] text-white hover:bg-[#006830] transition-colors font-medium flex items-center justify-center gap-2">\r
                  @if (saving()) {\r
                    <div class="spinner w-4 h-4 mr-2"></div>\r
                  }\r
                  {{ editingArticle() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
\r
\r
    <!-- Notification Modal -->\r
@if(notification().show) {\r
  <div class="fixed top-4 right-4 z-50 pointer-events-none">\r
    <div\r
      [ngClass]="{\r
        'bg-green-50 border-green-500 text-green-700': notification().type === 'success',\r
        'bg-red-50 border-red-500 text-red-700': notification().type === 'error',\r
        'bg-blue-50 border-blue-500 text-blue-700': notification().type === 'info'\r
      }"\r
      class="pointer-events-auto border-l-4 rounded-lg shadow-lg p-6 max-w-sm w-full flex items-center gap-4 animate-fade-in"\r
    >\r
      <svg *ngIf="notification().type === 'success'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'error'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'info'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"></path>\r
      </svg>\r
      <span class="text-sm font-medium">{{ notification().message }}</span>\r
    </div>\r
  </div>\r
}\r
\r
\r
\r
<!-- Modal de confirmation -->\r
@if(confirmModal().show) {\r
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">\r
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">\r
      <h3 class="text-lg font-semibold text-neutral-900">Confirmation</h3>\r
      <p class="text-neutral-700">{{ confirmModal().message }}</p>\r
      \r
      <div class="flex justify-end gap-3 mt-4">\r
        <button (click)="closeConfirmModal()" \r
                class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium">\r
          Annuler\r
        </button>\r
        <button (click)="confirmModal().onConfirm()" \r
                class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium">\r
          Supprimer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/features/admin/article/article.component.scss */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in {\n  animation: fade-in 0.3s ease-out;\n}\n/*# sourceMappingURL=article.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleComponent, { className: "ArticleComponent", filePath: "src/app/features/admin/article/article.component.ts", lineNumber: 17 });
})();
export {
  ArticleComponent
};
//# sourceMappingURL=chunk-EMAYPPB5.js.map
