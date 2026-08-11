import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
  RouterLink
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  environment,
  inject,
  interval,
  registerLocaleData,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@angular/common/locales/fr.js
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 0 || i === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var fr_default = ["fr", [["AM", "PM"]], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", u, u], [",", "\u202F", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "ARS": ["$AR", "$"], "AUD": ["$AU", "$"], "BEF": ["FB"], "BMD": ["$BM", "$"], "BND": ["$BN", "$"], "BYN": [u, "\u0440."], "BZD": ["$BZ", "$"], "CAD": ["$CA", "$"], "CLP": ["$CL", "$"], "CNY": [u, "\xA5"], "COP": ["$CO", "$"], "CYP": ["\xA3CY"], "EGP": [u, "\xA3E"], "FJD": ["$FJ", "$"], "FKP": ["\xA3FK", "\xA3"], "FRF": ["F"], "GBP": ["\xA3GB", "\xA3"], "GIP": ["\xA3GI", "\xA3"], "HKD": [u, "$"], "IEP": ["\xA3IE"], "ILP": ["\xA3IL"], "ITL": ["\u20A4IT"], "JPY": [u, "\xA5"], "KMF": [u, "FC"], "LBP": ["\xA3LB", "\xA3L"], "MTP": ["\xA3MT"], "MXN": ["$MX", "$"], "NAD": ["$NA", "$"], "NIO": [u, "$C"], "NZD": ["$NZ", "$"], "PHP": [u, "\u20B1"], "RHD": ["$RH"], "RON": [u, "L"], "RWF": [u, "FR"], "SBD": ["$SB", "$"], "SGD": ["$SG", "$"], "SRD": ["$SR", "$"], "TOP": [u, "$T"], "TTD": ["$TT", "$"], "TWD": [u, "NT$"], "USD": ["$US", "$"], "UYU": ["$UY", "$"], "WST": ["$WS"], "XCD": [u, "$"], "XPF": ["FCFP"], "ZMW": [u, "Kw"] }, "ltr", plural];

// src/app/features/home/home/home.component.ts
var _c0 = (a0) => ["/articles", a0];
var _c1 = (a0) => ["/agendas", a0];
var _c2 = (a0) => ["/projects", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const etat_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r3 % 2 === 0 ? "text-primary-600" : "text-accent-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", etat_r2.valeur, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", etat_r2.nom, " ");
  }
}
function HomeComponent_ng_container_44_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 60);
  }
  if (rf & 2) {
    const article_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r4.getImageUrl(article_r4.images[0].imageUrl), \u0275\u0275sanitizeUrl)("alt", article_r4.title);
  }
}
function HomeComponent_ng_container_44_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 61);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_ng_container_44_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58)(1, "div", 59);
    \u0275\u0275conditionalCreate(2, HomeComponent_ng_container_44_For_3_Conditional_2_Template, 1, 2, "img", 60)(3, HomeComponent_ng_container_44_For_3_Conditional_3_Template, 2, 0, ":svg:svg", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 63)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 64)(10, "span", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p", 66);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, article_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(article_r4.images && article_r4.images.length > 0 ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(article_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(article_r4.publishedAt || article_r4.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.getCategoryLabel(article_r4.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", article_r4.viewCount, " vues");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r4.summary);
  }
}
function HomeComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275repeaterCreate(2, HomeComponent_ng_container_44_For_3_Template, 16, 9, "a", 58, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.articles());
  }
}
function HomeComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h3", 69);
    \u0275\u0275text(2, "Aucune actualit\xE9 disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Les actualit\xE9s seront affich\xE9es ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.prevPage());
    });
    \u0275\u0275text(2, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.nextPage());
    });
    \u0275\u0275text(6, " Suivant ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r4.currentPage(), " / ", ctx_r4.totalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentPage() >= ctx_r4.totalPages());
  }
}
function HomeComponent_ng_container_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 74)(1, "div", 76)(2, "div", 77)(3, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 79);
    \u0275\u0275element(5, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 81)(7, "div", 82)(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 84);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h3", 85);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 86);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const com_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r4.getImageUrl(com_r7 == null ? null : com_r7.featuredImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatDate(com_r7.publishedAt || com_r7.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getCategoryLabel(com_r7.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(com_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(com_r7.summary);
  }
}
function HomeComponent_ng_container_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "a", 88);
    \u0275\u0275listener("click", function HomeComponent_ng_container_58_div_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.voirTousCommuniques());
    });
    \u0275\u0275text(2, " Voir tous les communiqu\xE9s \u2192 ");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275repeaterCreate(1, HomeComponent_ng_container_58_For_2_Template, 16, 5, "a", 74, _forTrack0);
    \u0275\u0275template(3, HomeComponent_ng_container_58_div_3_Template, 3, 0, "div", 75);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.communiques());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r4.commShowAll());
  }
}
function HomeComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h3", 69);
    \u0275\u0275text(2, "Aucun communiqu\xE9 disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Les communiqu\xE9s seront affich\xE9s ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.prevCommPage());
    });
    \u0275\u0275text(2, "Pr\xE9c\xE9dent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.nextCommPage());
    });
    \u0275\u0275text(6, "Suivant");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.commCurrentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r4.commCurrentPage(), " / ", ctx_r4.commTotalPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.commCurrentPage() >= ctx_r4.commTotalPages());
  }
}
function HomeComponent_ng_container_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 96);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 81)(10, "div", 82)(11, "span", 97);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 99);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agenda_r11 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, agenda_r11.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, agenda_r11.publishedAt, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, agenda_r11.publishedAt, "MMM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(agenda_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agenda_r11.lieux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agenda_r11.summary);
  }
}
function HomeComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomeComponent_ng_container_63_div_1_Template, 17, 14, "div", 90);
    \u0275\u0275elementStart(2, "div", 91)(3, "a", 88);
    \u0275\u0275listener("click", function HomeComponent_ng_container_63_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.voirTousAgendas());
    });
    \u0275\u0275text(4, " Voir tout l'agenda \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.latestAgendas);
  }
}
function HomeComponent_ng_template_64_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "span", 95);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 96);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 81)(10, "div", 82)(11, "span", 97);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 99);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agenda_r12 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, agenda_r12.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, agenda_r12.publishedAt, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, agenda_r12.publishedAt, "MMM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(agenda_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agenda_r12.lieux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(agenda_r12.summary);
  }
}
function HomeComponent_ng_template_64_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_ng_template_64_ng_container_0_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.prevAgendaPage());
    });
    \u0275\u0275text(2, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_ng_template_64_ng_container_0_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.nextAgendaPage());
    });
    \u0275\u0275text(6, " Suivant ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentAgendaPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r4.currentAgendaPage(), " / ", ctx_r4.totalAgendaPages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentAgendaPage() >= ctx_r4.totalAgendaPages());
  }
}
function HomeComponent_ng_template_64_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomeComponent_ng_template_64_ng_container_0_div_1_Template, 17, 14, "div", 90)(2, HomeComponent_ng_template_64_ng_container_0_div_2_Template, 7, 4, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.agendas());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.totalAgendaPages() > 1);
  }
}
function HomeComponent_ng_template_64_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h3", 69);
    \u0275\u0275text(2, "Aucun agenda disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 70);
    \u0275\u0275text(4, "Les agendas seront affich\xE9s ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_ng_template_64_ng_container_0_Template, 3, 2, "ng-container", 38)(1, HomeComponent_ng_template_64_ng_template_1_Template, 5, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noAgendas_r14 = \u0275\u0275reference(2);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.agendas().length > 0)("ngIfElse", noAgendas_r14);
  }
}
function HomeComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function HomeComponent_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.voirTousProjets());
    });
    \u0275\u0275text(1, " Voir les autres ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 101);
    \u0275\u0275element(3, "path", 19);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_ng_container_75_For_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 101);
    \u0275\u0275element(2, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", project_r16.partner, " ");
  }
}
function HomeComponent_ng_container_75_For_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 101);
    \u0275\u0275element(2, "path", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatBudget(project_r16.budget), " ");
  }
}
function HomeComponent_ng_container_75_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 103)(1, "div", 104)(2, "div", 81)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 105);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 106)(8, "span", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 108);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 109);
    \u0275\u0275element(13, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 110);
    \u0275\u0275conditionalCreate(15, HomeComponent_ng_container_75_For_3_Conditional_15_Template, 4, 1, "span", 111);
    \u0275\u0275conditionalCreate(16, HomeComponent_ng_container_75_For_3_Conditional_16_Template, 4, 1, "span", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r16 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c2, project_r16.id));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r4.getStatusBadgeClass(project_r16.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getStatusLabel(project_r16.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r16.name, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r4.getProgressBarColor(project_r16));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r4.getContrastTextColor(ctx_r4.getProgressBarColor(project_r16)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r16.progressPercentage, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r16.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r4.getProgressBarClass(project_r16));
    \u0275\u0275styleProp("width", project_r16.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(project_r16.partner ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r16.budget ? 16 : -1);
  }
}
function HomeComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 102);
    \u0275\u0275repeaterCreate(2, HomeComponent_ng_container_75_For_3_Template, 17, 19, "a", 103, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.projects());
  }
}
function HomeComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_76_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.prevProjectPage());
    });
    \u0275\u0275text(2, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.nextProjectPage());
    });
    \u0275\u0275text(6, " Suivant ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentProjectPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r4.currentProjectPage(), " / ", ctx_r4.totalProjectPages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentProjectPage() >= ctx_r4.totalProjectPages());
  }
}
function HomeComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 113);
    \u0275\u0275element(2, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 69);
    \u0275\u0275text(4, "Aucun projet disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 70);
    \u0275\u0275text(6, "Les projets seront affich\xE9s ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "a", 115);
    \u0275\u0275listener("click", function HomeComponent_div_87_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.voirTousServices());
    });
    \u0275\u0275text(2, " Voir les autres ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 101);
    \u0275\u0275element(4, "path", 19);
    \u0275\u0275elementEnd()()();
  }
}
function HomeComponent_ng_container_88_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 125);
  }
  if (rf & 2) {
    const service_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r4.getImageUrl(service_r20.logo), \u0275\u0275sanitizeUrl)("alt", service_r20.name);
  }
}
function HomeComponent_ng_container_88_div_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 126);
    \u0275\u0275element(1, "path", 127);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_ng_container_88_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function HomeComponent_ng_container_88_div_2_Template_div_click_0_listener() {
      const service_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.openService(service_r20.url));
    });
    \u0275\u0275elementStart(1, "div", 119);
    \u0275\u0275template(2, HomeComponent_ng_container_88_div_2_img_2_Template, 1, 2, "img", 120)(3, HomeComponent_ng_container_88_div_2__svg_svg_3_Template, 2, 0, "svg", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 122);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 123);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 124);
    \u0275\u0275text(9, " En savoir plus \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r20.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !service_r20.logo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", service_r20.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", service_r20.description, " ");
  }
}
function HomeComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 116);
    \u0275\u0275template(2, HomeComponent_ng_container_88_div_2_Template, 10, 4, "div", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.services());
  }
}
function HomeComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_89_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.prevServicePage());
    });
    \u0275\u0275text(2, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_div_89_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.nextServicePage());
    });
    \u0275\u0275text(6, " Suivant ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentServicePage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Page ", ctx_r4.currentServicePage(), " / ", ctx_r4.totalServicePages(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.currentServicePage() >= ctx_r4.totalServicePages());
  }
}
function HomeComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 113);
    \u0275\u0275element(2, "path", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 69);
    \u0275\u0275text(4, "Aucun service disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 70);
    \u0275\u0275text(6, "Les services seront affich\xE9s ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
registerLocaleData(fr_default, "fr");
var HomeComponent = class _HomeComponent {
  apiService = inject(ApiService);
  etatService = inject(MinistereService);
  refreshSubscription;
  previousArticleIds = /* @__PURE__ */ new Set();
  API_URL = environment.FileUrl;
  ministeres = signal([], ...ngDevMode ? [{ debugName: "ministeres" }] : []);
  ministere1;
  ministere = signal(null, ...ngDevMode ? [{ debugName: "ministere" }] : []);
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  allActualites = signal([], ...ngDevMode ? [{ debugName: "allActualites" }] : []);
  communiques = signal([], ...ngDevMode ? [{ debugName: "communiques" }] : []);
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  lastUpdate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "lastUpdate" }] : []);
  etats = [];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  newArticleIds = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "newArticleIds" }] : []);
  // pour garder la date de nouveauté
  REFRESH_INTERVAL = 3e4;
  // 30 sec
  // Signals pour gérer l'état
  showAll = signal(false, ...ngDevMode ? [{ debugName: "showAll" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSizeReduced = 6;
  pageSizeFull = 9;
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  pageSize = 9;
  // Signaux pour Communiqués
  commCurrentPage = signal(1, ...ngDevMode ? [{ debugName: "commCurrentPage" }] : []);
  commPageSize = 6;
  // 6 communiqués par page
  commTotalPages = signal(1, ...ngDevMode ? [{ debugName: "commTotalPages" }] : []);
  commShowAll = signal(false, ...ngDevMode ? [{ debugName: "commShowAll" }] : []);
  // true = mode voir tous
  // =======================
  latestAgendas = [];
  // Derniers 3 agendas
  agendas = signal([], ...ngDevMode ? [{ debugName: "agendas" }] : []);
  // Tous les agendas pour pagination
  showAllAgendas = signal(false, ...ngDevMode ? [{ debugName: "showAllAgendas" }] : []);
  // Affichage complet ou réduit
  currentAgendaPage = signal(1, ...ngDevMode ? [{ debugName: "currentAgendaPage" }] : []);
  // Page actuelle
  pageSizeAgenda = 6;
  // Nombre par page
  totalAgendaPages = signal(1, ...ngDevMode ? [{ debugName: "totalAgendaPages" }] : []);
  // Total de pages
  isLoadingAgendas = signal(false, ...ngDevMode ? [{ debugName: "isLoadingAgendas" }] : []);
  showAllProjects = signal(false, ...ngDevMode ? [{ debugName: "showAllProjects" }] : []);
  currentProjectPage = signal(1, ...ngDevMode ? [{ debugName: "currentProjectPage" }] : []);
  pageSizeProject = 6;
  totalProjectPages = signal(1, ...ngDevMode ? [{ debugName: "totalProjectPages" }] : []);
  ngOnInit() {
    this.loadMinistere();
    this.loadData();
    this.startAutoRefresh();
  }
  ngOnDestroy() {
    this.stopAutoRefresh();
  }
  loadData() {
    this.loadMinistere();
    this.loadArticles();
    this.loadProjects();
    this.loadLatestAgendas();
    this.loadServices();
    this.loadStats();
    this.loadCommuniquesInitial();
    this.loadAgendas();
  }
  loadMinistere() {
    this.loading.set(true);
    this.apiService.getAllMins(0, 10).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministeres.set(response.data.content);
          const articlesArray = this.ministeres();
          if (articlesArray.length > 0) {
            const ministereId = articlesArray[0].id;
            this.loadMinistereById(ministereId);
          }
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadMinistereById(id) {
    this.apiService.getminById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministere.set(response.data);
          console.log("Minist\xE8re charg\xE9 :", this.ministere);
        } else {
          console.error("Erreur :", response.message);
        }
      },
      error: (err) => {
        console.error("Erreur chargement minist\xE8re", err);
      }
    });
  }
  loadArticles1() {
    this.isLoading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        console.log("daa", response.data);
        const allData = Array.isArray(response?.data.content) ? response.data.content : Array.isArray(response) ? response : [];
        console.log("daa", allData);
        if (!allData.length) {
          this.articles.set([]);
          this.isLoading.set(false);
          return;
        }
        const now = /* @__PURE__ */ new Date();
        const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1e3);
        const recentArticles = allData.filter((a) => a.category === "ACTUALITE" && new Date(a.createdAt) >= threeDaysAgo);
        const currentIds = new Set(recentArticles.map((a) => a.id));
        const newIdsMap = new Map(this.newArticleIds());
        currentIds.forEach((id) => {
          if (!this.previousArticleIds.has(id)) {
            newIdsMap.set(id, /* @__PURE__ */ new Date());
          }
        });
        this.previousArticleIds = currentIds;
        this.articles.set(recentArticles);
        this.newArticleIds.set(newIdsMap);
        this.lastUpdate.set(/* @__PURE__ */ new Date());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement articles:", err);
        this.isLoading.set(false);
      }
    });
  }
  loadArticles(page = 0) {
    this.isLoading.set(true);
    const size = this.showAll() ? this.pageSizeFull : this.pageSizeReduced;
    this.apiService.getArticlesByCategory("ACTUALITE", page, size).subscribe({
      next: (response) => {
        const data = Array.isArray(response?.data?.content) ? response.data.content : [];
        this.articles.set(data);
        this.totalPages.set(response.data.totalPages || 1);
        this.currentPage.set(page + 1);
        this.lastUpdate.set(/* @__PURE__ */ new Date());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement actualit\xE9s:", err);
        this.isLoading.set(false);
      }
    });
  }
  voirToutesActualites() {
    this.showAll.set(true);
    this.loadArticles(0);
  }
  reduireArticles() {
    this.showAll.set(false);
    this.loadArticles(0);
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadArticles(this.currentPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadArticles(this.currentPage() - 2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  // Chargement initial (mode réduit, 3 communiqués)
  // Chargement initial : 3 communiqués
  loadCommuniquesInitial() {
    this.isLoading.set(true);
    this.apiService.getArticlesByCategory("COMMUNIQUE", 0, 3).subscribe({
      next: (res) => {
        this.communiques.set(res.data.content);
        this.commTotalPages.set(res.data.totalPages || 1);
        this.commCurrentPage.set(1);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement communiqu\xE9s", err);
        this.isLoading.set(false);
      }
    });
  }
  // Voir tous les communiqués (6 par page)
  voirTousCommuniques(page = 0) {
    this.isLoading.set(true);
    this.commShowAll.set(true);
    this.apiService.getArticlesByCategory("COMMUNIQUE", page, this.commPageSize).subscribe({
      next: (res) => {
        this.communiques.set(res.data.content);
        this.commTotalPages.set(res.data.totalPages || 1);
        this.commCurrentPage.set(page + 1);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement communiqu\xE9s", err);
        this.isLoading.set(false);
      }
    });
  }
  // Pagination
  nextCommPage() {
    if (this.commCurrentPage() < this.commTotalPages()) {
      this.voirTousCommuniques(this.commCurrentPage());
    }
  }
  prevCommPage() {
    if (this.commCurrentPage() > 1) {
      this.voirTousCommuniques(this.commCurrentPage() - 2);
    }
  }
  loadArticles2() {
    this.isLoading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        const allData = Array.isArray(response?.data?.content) ? response.data.content : Array.isArray(response) ? response : [];
        if (!allData.length) {
          this.articles.set([]);
          this.isLoading.set(false);
          return;
        }
        const recentArticles = allData.filter((a) => a.category === "ACTUALITE").sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6);
        const recentCommuniques = allData.filter((a) => a.category === "COMMUNIQUE").sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 2);
        this.articles.set(recentArticles);
        this.communiques.set(recentCommuniques);
        this.lastUpdate.set(/* @__PURE__ */ new Date());
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement articles:", err);
        this.isLoading.set(false);
      }
    });
  }
  trackById(index, item) {
    return item.id;
  }
  loadProjects1() {
    this.apiService.getPublicProjects().subscribe({
      next: (response) => {
        const data = Array.isArray(response?.data.content) ? response.data.content : Array.isArray(response) ? response : [];
        this.projects.set(data);
      },
      error: (err) => console.error("Erreur chargement projets:", err)
    });
  }
  // Charger les 3 projets récents
  loadProjects() {
    this.apiService.getPublicProjects().subscribe({
      next: (response) => {
        const allData = Array.isArray(response?.data?.content) ? response.data.content : Array.isArray(response) ? response : [];
        const sortedProjects = allData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        if (this.showAllProjects()) {
          this.totalProjectPages.set(Math.ceil(sortedProjects.length / this.pageSizeProject));
          const start = (this.currentProjectPage() - 1) * this.pageSizeProject;
          const end = start + this.pageSizeProject;
          this.projects.set(sortedProjects.slice(start, end));
        } else {
          this.projects.set(sortedProjects.slice(0, 4));
        }
      },
      error: (err) => console.error("Erreur chargement projets:", err)
    });
  }
  // Voir tous les projets avec pagination
  voirTousProjets() {
    this.showAllProjects.set(true);
    this.currentProjectPage.set(1);
    this.loadProjects();
  }
  // Pagination : page suivante
  nextProjectPage() {
    if (this.currentProjectPage() < this.totalProjectPages()) {
      this.currentProjectPage.set(this.currentProjectPage() + 1);
      this.loadProjects();
    }
  }
  // Pagination : page précédente
  prevProjectPage() {
    if (this.currentProjectPage() > 1) {
      this.currentProjectPage.set(this.currentProjectPage() - 1);
      this.loadProjects();
    }
  }
  loadProjects2() {
    this.apiService.getPublicProjects().subscribe({
      next: (response) => {
        const allData = Array.isArray(response?.data.content) ? response.data.content : Array.isArray(response) ? response : [];
        const sortedProjects = allData.sort((a, b) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA;
        });
        const recentProjects = sortedProjects.slice(0, 3);
        this.projects.set(recentProjects);
      },
      error: (err) => console.error("Erreur chargement projets:", err)
    });
  }
  //latestAgendas: Agenda[] = [];
  service = [];
  loadLatestAgendas() {
    this.apiService.getPublishedAgendasLatest().subscribe({
      next: (res) => {
        if (res.success) {
          this.latestAgendas = res.data.slice(0, 3);
        }
      },
      error: (err) => console.error(err)
    });
  }
  // =======================
  // Charger tous les agendas avec pagination
  // =======================
  // Charger tous les agendas avec pagination
  loadAgendas(page = 0) {
    this.isLoadingAgendas.set(true);
    this.apiService.getPublishedAgendas(page, this.pageSizeAgenda).subscribe({
      next: (res) => {
        if (res.success) {
          this.agendas.set(res.data.content || []);
          this.totalAgendaPages.set(res.data.totalPages || 1);
          this.currentAgendaPage.set(page + 1);
        }
        this.isLoadingAgendas.set(false);
      },
      error: (err) => {
        console.error("Erreur chargement agendas:", err);
        this.isLoadingAgendas.set(false);
      }
    });
  }
  // =======================
  // Afficher tous les agendas
  // =======================
  voirTousAgendas() {
    this.showAllAgendas.set(true);
    this.loadAgendas(0);
  }
  // =======================
  // Pagination
  // =======================
  nextAgendaPage() {
    if (this.currentAgendaPage() < this.totalAgendaPages()) {
      this.loadAgendas(this.currentAgendaPage());
    }
  }
  prevAgendaPage() {
    if (this.currentAgendaPage() > 1) {
      this.loadAgendas(this.currentAgendaPage() - 2);
    }
  }
  loadStats() {
    this.etatService.getAllEtatPub().subscribe({
      next: (res) => {
        console.log(res);
        if (res.success) {
          this.etats = res.data.content;
          console.log(this.etats);
        }
      },
      error: (err) => console.error(err)
    });
  }
  // Services
  services = signal([], ...ngDevMode ? [{ debugName: "services" }] : []);
  allServices = signal([], ...ngDevMode ? [{ debugName: "allServices" }] : []);
  showAllServices = signal(false, ...ngDevMode ? [{ debugName: "showAllServices" }] : []);
  currentServicePage = signal(1, ...ngDevMode ? [{ debugName: "currentServicePage" }] : []);
  totalServicePages = signal(1, ...ngDevMode ? [{ debugName: "totalServicePages" }] : []);
  pageSizeInitial = 4;
  // affichage accueil
  pageSizeFulls = 8;
  // pagination
  // Charger tous les services
  loadServices() {
    this.apiService.getAllServicepublic().subscribe({
      next: (res) => {
        if (res.success) {
          const data = res.data.content || [];
          this.allServices.set(data);
          this.totalServicePages.set(Math.ceil(data.length / this.pageSizeFulls));
          this.updateDisplayedServices();
        }
      },
      error: (err) => console.error(err)
    });
  }
  // Mise à jour affichage
  updateDisplayedServices() {
    if (this.showAllServices()) {
      const start = (this.currentServicePage() - 1) * this.pageSizeFulls;
      const end = start + this.pageSizeFulls;
      this.services.set(this.allServices().slice(start, end));
    } else {
      this.services.set(this.allServices().slice(0, this.pageSizeInitial));
    }
  }
  // Voir tous
  voirTousServices() {
    this.showAllServices.set(true);
    this.currentServicePage.set(1);
    this.updateDisplayedServices();
  }
  // Pagination
  nextServicePage() {
    if (this.currentServicePage() < this.totalServicePages()) {
      this.currentServicePage.set(this.currentServicePage() + 1);
      this.updateDisplayedServices();
    }
  }
  prevServicePage() {
    if (this.currentServicePage() > 1) {
      this.currentServicePage.set(this.currentServicePage() - 1);
      this.updateDisplayedServices();
    }
  }
  loadServices1() {
    this.apiService.getAllServicepublic().subscribe({
      next: (res) => {
        if (res.success) {
          this.service = res.data.content;
          console.log(this.services);
        }
      },
      error: (err) => console.error(err)
    });
  }
  getStatusBadgeClass1(status) {
    const classes = {
      "PLANIFIE": "bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold",
      "EN_COURS": "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold",
      "SUSPENDU": "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold",
      "TERMINE": "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold",
      "ANNULE": "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold"
    };
    return classes[status] || "bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold";
  }
  // Labels pour les statuts
  getStatusLabel(status) {
    const labels = {
      "PLANIFIE": "Planifi\xE9",
      "EN_COURS": "En cours",
      "SUSPENDU": "Suspendu",
      "TERMINE": "Termin\xE9",
      "ANNULE": "Annul\xE9"
    };
    return labels[status] || status;
  }
  // Couleurs des badges
  getStatusBadgeClass(status) {
    const classes = {
      "PLANIFIE": "bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold",
      "EN_COURS": "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold",
      "SUSPENDU": "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold",
      "TERMINE": "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold",
      "ANNULE": "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold"
    };
    return classes[status] || "bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold";
  }
  // Couleur barre de progression
  // Retourne la couleur hex de la barre de progression
  getProgressBarColor(project) {
    if (project.progressPercentage >= 80)
      return "#00843B";
    if (project.progressPercentage >= 50)
      return "#6FCF97";
    if (project.progressPercentage >= 20)
      return "#F2C94C";
    return "#EB5757";
  }
  // Retourne une couleur de texte contrastée (blanc ou noir)
  getContrastTextColor(hexColor) {
    const c = hexColor.substring(1);
    const rgb = parseInt(c, 16);
    const r = rgb >> 16 & 255;
    const g = rgb >> 8 & 255;
    const b = rgb & 255;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#000000" : "#FFFFFF";
  }
  getProgressBarClass(project) {
    if (project.progressPercentage >= 80)
      return "bg-[#00843B] h-2 rounded-full";
    if (project.progressPercentage >= 50)
      return "bg-[#6FCF97] h-2 rounded-full";
    if (project.progressPercentage >= 20)
      return "bg-[#F2C94C] h-2 rounded-full";
    return "bg-[#EB5757] h-2 rounded-full";
  }
  // Formatage budget
  formatBudget(budget) {
    if (budget >= 1e9) {
      return (budget / 1e9).toFixed(1) + " Mds FCFA";
    } else if (budget >= 1e6) {
      return (budget / 1e6).toFixed(0) + " M FCFA";
    }
    return budget.toLocaleString("fr-FR") + " FCFA";
  }
  refreshArticles() {
    this.loadArticles();
  }
  startAutoRefresh() {
    this.refreshSubscription = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.loadArticles();
    });
  }
  stopAutoRefresh() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  isNewArticle(id) {
    const map = this.newArticleIds();
    const createdAt = map.get(id);
    if (!createdAt)
      return false;
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - createdAt.getTime();
    if (diff > 24 * 60 * 60 * 1e3) {
      map.delete(id);
      this.newArticleIds.set(map);
      return false;
    }
    return true;
  }
  getCategoryClass(category) {
    const classes = {
      "ACTUALITE": "bg-primary-50 text-primary-600",
      "COMMUNIQUE": "bg-blue-50 text-blue-600",
      "EVENEMENT": "bg-purple-50 text-purple-600",
      "PROJET": "bg-accent-50 text-accent-600",
      "RAPPORT": "bg-slate-100 text-slate-600",
      "DISCOURS": "bg-rose-50 text-rose-600"
    };
    return classes[category] || "bg-slate-100 text-slate-600";
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
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  openService(url) {
    window.open(url, "_blank");
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 92, vars: 22, consts: [["noArticles", ""], ["noCommuniquess", ""], ["allAgendasBlock", ""], ["noProjects", ""], ["noServices", ""], ["noAgendas", ""], [1, "relative", "py-16", "md:py-24", "overflow-hidden", 2, "background-color", "#00843B"], [1, "absolute", "top-0", "right-0", "w-1/3", "h-full", "bg-gradient-to-l", "from-primary-50", "to-transparent"], [1, "absolute", "bottom-0", "left-0", "w-64", "h-64", "bg-accent-50", "rounded-full", "blur-3xl", "-translate-x-1/2", "translate-y-1/2", "opacity-50"], [1, "relative", "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "lg:grid-cols-2", "gap-12", "items-center"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "bg-white", "text-green-700", "text-xs", "md:text-sm", "font-medium", "rounded-full", "mb-6", "whitespace-nowrap"], [1, "w-2", "h-2", "bg-green-600", "rounded-full", "animate-pulse"], [1, "text-4xl", "md:text-5xl", "font-bold", "text-white", "leading-tight", "mb-6"], [1, "text-white-500"], [1, "text-lg", "text-white/80", "mb-8", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-4"], ["routerLink", "/actualites", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-3", "bg-white", "text-green-700", "font-medium", "rounded-lg", "hover:bg-green-50", "transition-colors", "shadow-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 8l4 4m0 0l-4 4m4-4H3"], ["routerLink", "/contact", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-3", "border", "border-white", "text-white", "font-medium", "rounded-lg", "hover:bg-white/20", "transition-colors"], [1, "hidden", "lg:block"], [1, "relative"], [1, "w-full", "h-80", "rounded-2xl", "overflow-hidden", "flex", "items-center", "justify-center"], ["alt", "Illustration droite", 1, "w-full", "h-full", "object-cover", "rounded-2xl", 3, "src"], [1, "absolute", "-bottom-4", "-right-4", "w-24", "h-24", "overflow-hidden", "rounded-xl", "flex", "items-center", "justify-center"], ["alt", "Logo MTDPCE", 1, "max-w-full", "max-h-full", "object-contain", 3, "src"], [1, ""], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "mt-8"], ["class", "text-center p-4 bg-slate-50 rounded-xl shadow", 4, "ngFor", "ngForOf"], ["id", "actualites", 1, "py-16", "bg-white"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "text-slate-600", "mt-1"], [1, "hidden", "sm:flex", "items-center", "gap-4"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "font-medium", "rounded-lg", "hover:bg-slate-50", "transition-colors", 3, "click", "disabled"], [1, "inline-flex", "items-center", "gap-2", "text-primary-600", "font-medium", "hover:text-primary-700", "cursor-pointer", 3, "click"], [4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center gap-4 mt-8", 4, "ngIf"], [1, "py-16", "bg-slate-50"], [1, "grid", "lg:grid-cols-2", "gap-12", "mb-12"], [1, "text-3xl", "font-bold", "text-slate-800", "border-l-4", "pl-4", 2, "border-color", "rgb(231, 76, 60)"], [1, "grid", "lg:grid-cols-2", "gap-12"], [1, "flex", "flex-col", "space-y-6"], [1, "space-y-6"], ["class", "flex justify-center items-center gap-4 mt-6", 4, "ngIf"], ["id", "projets", 1, "py-16", "bg-white-50"], ["class", "hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#00843B] bg-white text-[#00843B] font-medium rounded-lg hover:bg-[#f0fdf4] transition-colors", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "mb-8", "gap-4"], [1, "text-center", "sm:text-left"], [1, "text-2xl", "font-bold", "text-slate-800", "mb-2"], [1, "text-slate-600"], [4, "ngIf"], [1, "text-center", "p-4", "bg-slate-50", "rounded-xl", "shadow"], [1, "text-2xl", "font-bold", 3, "ngClass"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "card", "group", "cursor-pointer", "flex", "flex-col", "h-full", "bg-white", "rounded-lg", "shadow", "hover:shadow-lg", "transition", "overflow-hidden", 3, "routerLink"], [1, "h-48", "bg-[#E6F5EB]", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-[#00843B]"], [1, "text-xl", "font-bold", "text-black", "mb-2", "px-4", "pt-2", "line-clamp-1"], [1, "flex", "justify-between", "items-center", "text-sm", "text-neutral-500", "px-4", "mb-2"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-[#E6F5EB]", "text-[#00843B]"], [1, "text-neutral-700", "text-sm", "leading-relaxed", "text-justify", "px-4", "mb-4", "line-clamp-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-center", "py-12", "bg-white", "rounded-xl", "border", "border-slate-100"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-2"], [1, "text-slate-500"], [1, "flex", "justify-center", "items-center", "gap-4", "mt-8"], [1, "px-4", "py-2", "border", "rounded-lg", "disabled:opacity-50", 3, "click", "disabled"], [1, "text-sm", "font-medium"], ["target", "_blank", 3, "href"], ["class", "mt-auto text-center", 4, "ngIf"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "relative", "overflow-hidden", "cursor-pointer", "mb-4"], [1, "flex", "items-start", "gap-6"], [1, "flex-shrink-0", "flex", "items-center", "justify-center", "w-16", "h-16", "rounded-full", "border-2", 2, "border-color", "rgb(231, 76, 60)", "background-color", "white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8", "text-[rgb(231,76,60)]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5v14l7-7-7-7z"], [1, "flex-1"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-sm", "font-medium", 2, "color", "rgb(231, 76, 60)"], [1, "text-xs", "text-slate-400", "uppercase"], [1, "text-xl", "font-bold", "text-slate-800", "mb-2", "line-clamp-2"], [1, "text-slate-600", "text-sm", "leading-relaxed", "line-clamp-2", "mb-4"], [1, "mt-auto", "text-center"], [1, "inline-block", "px-6", "py-3", "bg-[rgb(231,76,60)]", "text-white", "font-medium", "rounded-lg", "hover:bg-[rgb(200,50,40)]", "transition-colors", "shadow-sm", "cursor-pointer", 3, "click"], [1, "flex", "justify-center", "items-center", "gap-4", "mt-6"], ["class", "bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "mt-6", "text-center"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "cursor-pointer", "group", 3, "routerLink"], [1, "flex", "items-center", "gap-4"], [1, "flex-shrink-0", "w-16", "h-16", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "bg-[rgb(231,76,60)]", "text-white", "font-bold", "text-sm"], [1, "text-lg"], [1, "text-xs", "uppercase"], [1, "text-sm", "font-medium", "text-[rgb(231,76,60)]"], [1, "text-xs", "font-medium", "text-slate-400", "uppercase"], [1, "text-slate-700", "font-medium", "line-clamp-2"], [1, "hidden", "sm:inline-flex", "items-center", "gap-2", "px-4", "py-2", "border", "border-[#00843B]", "bg-white", "text-[#00843B]", "font-medium", "rounded-lg", "hover:bg-[#f0fdf4]", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "card", "group", "cursor-pointer", "p-6", "bg-white", "rounded-xl", "shadow", "hover:shadow-lg", "transition-shadow", 3, "routerLink"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "text-xl", "font-bold", "text-black", "mb-2", "px-4", "pt-2", "line-clamp-1", 2, "font-family", "'Poppins', sans-serif"], [1, "w-16", "h-16", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", "ml-4"], [1, "text-2xl", "font-bold"], [1, "text-neutral-500", "mb-4", "line-clamp-2"], [1, "w-full", "bg-neutral-200", "rounded-full", "h-2", "mb-4"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-sm", "text-neutral-400"], [1, "flex", "items-center", "gap-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "..."], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-slate-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 8v8m4-4H8"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "border", "border-[#00843B]", "bg-white", "text-[#00843B]", "font-medium", "rounded-lg", "hover:bg-[#f0fdf4]", "transition-colors", "cursor-pointer", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6"], ["class", "bg-white p-6 rounded-xl border border-slate-100 shadow-md\n                    hover:border-primary-500 hover:shadow-lg transition-all\n                    flex flex-col items-center text-center cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-100", "shadow-md", "hover:border-primary-500", "hover:shadow-lg", "transition-all", "flex", "flex-col", "items-center", "text-center", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "bg-accent-50", "rounded-lg", "flex", "items-center", "justify-center", "mb-4", "overflow-hidden"], ["class", "w-12 h-12 object-contain", 3, "src", "alt", 4, "ngIf"], ["class", "w-8 h-8 text-accent-500", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "font-semibold", "text-slate-800", "mb-2"], [1, "text-sm", "text-slate-600", "mb-4"], [1, "text-primary-600", "text-sm", "font-medium", "hover:text-primary-700", "transition-colors"], [1, "w-12", "h-12", "object-contain", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-accent-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 6);
      \u0275\u0275element(1, "div", 7)(2, "div", 8);
      \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "div")(6, "div", 11);
      \u0275\u0275element(7, "span", 12);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 13)(10, "span", 14);
      \u0275\u0275text(11, "Minist\xE8re de la justice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 15);
      \u0275\u0275text(13, "\nLe Minist\xE8re de la Justice et des Droits Humains, charg\xE9 des Relations avec les Institutions, \u0153uvre pour la promotion de l'\xC9tat de droit, la protection des droits humains et l'am\xE9lioration de l'acc\xE8s \xE0 une justice \xE9quitable et efficace pour tous les citoyens. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 16)(15, "a", 17);
      \u0275\u0275text(16, " D\xE9couvrir les actualit\xE9s ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 18);
      \u0275\u0275element(18, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "a", 20);
      \u0275\u0275text(20, " Nous contacter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 21)(22, "div", 22)(23, "div", 23);
      \u0275\u0275element(24, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 25);
      \u0275\u0275element(26, "img", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(27, "section", 27)(28, "div", 28)(29, "div", 29);
      \u0275\u0275template(30, HomeComponent_div_30_Template, 5, 3, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "section", 31)(32, "div", 28)(33, "div", 32)(34, "div")(35, "h2", 33);
      \u0275\u0275text(36, "Les derni\xE8res Actualit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 34);
      \u0275\u0275text(38, "Restez inform\xE9 des derni\xE8res nouvelles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 35)(40, "button", 36);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadArticles());
      });
      \u0275\u0275text(41, " Actualiser ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 37);
      \u0275\u0275listener("click", function HomeComponent_Template_a_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showAll() ? ctx.reduireArticles() : ctx.voirToutesActualites());
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(44, HomeComponent_ng_container_44_Template, 4, 0, "ng-container", 38)(45, HomeComponent_ng_template_45_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(47, HomeComponent_div_47_Template, 7, 4, "div", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "section", 40)(49, "div", 28)(50, "div", 41)(51, "h2", 42);
      \u0275\u0275text(52, " Communiqu\xE9s du Ministre ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h2", 42);
      \u0275\u0275text(54, " Agenda du Ministre ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 43)(56, "div", 44)(57, "div", 45);
      \u0275\u0275template(58, HomeComponent_ng_container_58_Template, 4, 1, "ng-container", 38)(59, HomeComponent_ng_template_59_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, HomeComponent_div_61_Template, 7, 4, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 44);
      \u0275\u0275template(63, HomeComponent_ng_container_63_Template, 5, 1, "ng-container", 38)(64, HomeComponent_ng_template_64_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "section", 47)(67, "div", 28)(68, "div", 32)(69, "div")(70, "h2", 33);
      \u0275\u0275text(71, "Les grands chantiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 34);
      \u0275\u0275text(73, "Nos initiatives pour la transformation digitale");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(74, HomeComponent_button_74_Template, 4, 0, "button", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, HomeComponent_ng_container_75_Template, 4, 0, "ng-container", 38)(76, HomeComponent_div_76_Template, 7, 4, "div", 39)(77, HomeComponent_ng_template_77_Template, 7, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "section", 40)(80, "div", 28)(81, "div", 49)(82, "div", 50)(83, "h2", 51);
      \u0275\u0275text(84, "Nos Services publics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 52);
      \u0275\u0275text(86, "Acc\xE9dez rapidement aux services du minist\xE8re");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(87, HomeComponent_div_87_Template, 5, 0, "div", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, HomeComponent_ng_container_88_Template, 3, 1, "ng-container", 38)(89, HomeComponent_div_89_Template, 7, 4, "div", 39)(90, HomeComponent_ng_template_90_Template, 7, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      const noArticles_r22 = \u0275\u0275reference(46);
      const noCommuniquess_r23 = \u0275\u0275reference(60);
      const allAgendasBlock_r24 = \u0275\u0275reference(65);
      const noProjects_r25 = \u0275\u0275reference(78);
      const noServices_r26 = \u0275\u0275reference(91);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx.ministere()) == null ? null : tmp_5_0.nomGeneral) || "Burkina Faso", " ");
      \u0275\u0275advance(16);
      \u0275\u0275property("src", ((tmp_6_0 = ctx.ministere()) == null ? null : tmp_6_0.image) ? ctx.getImageUrl(ctx.ministere().image) : "assets/images/home.jpg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ((tmp_7_0 = ctx.ministere()) == null ? null : tmp_7_0.logo) ? ctx.getImageUrl(ctx.ministere().logo) : "assets/images/armoirie.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.etats);
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.showAll() ? "R\xE9duire" : "Voir toutes les actualit\xE9s", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.articles().length > 0)("ngIfElse", noArticles_r22);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showAll());
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.communiques().length > 0)("ngIfElse", noCommuniquess_r23);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.commShowAll() && ctx.commTotalPages() > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showAllAgendas() && ctx.latestAgendas.length > 0)("ngIfElse", allAgendasBlock_r24);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.showAllProjects());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.projects().length > 0)("ngIfElse", noProjects_r25);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllProjects() && ctx.totalProjectPages() > 1);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.showAllServices());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.services().length > 0)("ngIfElse", noServices_r26);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllServices() && ctx.totalServicePages() > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out forwards;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink], template: `  <!-- Hero Section - Design soft et \xE9pur\xE9 -->\r
<section class="relative py-16 md:py-24 overflow-hidden" style="background-color:#00843B;">\r
  <!-- D\xE9coration subtile -->\r
  <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>\r
  <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50"></div>\r
  \r
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="grid lg:grid-cols-2 gap-12 items-center">\r
      <div>\r
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white text-green-700 text-xs md:text-sm font-medium rounded-full mb-6 whitespace-nowrap">\r
          <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>\r
          {{ ministere()?.nomGeneral || 'Burkina Faso' }}\r
        </div>\r
        \r
          <!--<div class="inline-flex items-center gap-2 px-3 py-1 bg-white text-green-700 text-sm font-medium rounded-full mb-6">\r
          <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>\r
         {{ ministere()?.nomGeneral || 'Burkina Faso' }}\r
        </div>-->\r
        <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">\r
          <span class="text-white-500">Minist\xE8re de la justice</span> \r
        </h1>\r
        <p class="text-lg text-white/80 mb-8 leading-relaxed">\r
Le Minist\xE8re de la Justice et des Droits Humains, charg\xE9 des Relations avec les Institutions, \u0153uvre pour la promotion de l'\xC9tat de droit, la protection des droits humains et l'am\xE9lioration de l'acc\xE8s \xE0 une justice \xE9quitable et efficace pour tous les citoyens.\r
        </p>\r
        <div class="flex flex-wrap gap-4">\r
          <a routerLink="/actualites" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors shadow-sm">\r
            D\xE9couvrir les actualit\xE9s\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>\r
            </svg>\r
          </a>\r
          <a routerLink="/contact" class="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/20 transition-colors">\r
            Nous contacter\r
          </a>\r
        </div>\r
      </div>\r
      \r
      <!-- Illustration \xE0 droite -->\r
        <div class="hidden lg:block">\r
        <div class="relative">\r
            <!-- Image principale qui remplace le SVG -->\r
            <div class="w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center">\r
            <img \r
              [src]="ministere()?.image ? getImageUrl(ministere()!.image) : 'assets/images/home.jpg'"\r
              alt="Illustration droite"\r
              class="w-full h-full object-cover rounded-2xl"\r
            />\r
            </div>\r
\r
            <!-- Petit logo en bas \xE0 droite -->\r
                <!-- Petit logo en bas \xE0 droite, logo plein -->\r
        <div class="absolute -bottom-4 -right-4 w-24 h-24 overflow-hidden rounded-xl flex items-center justify-center">\r
        <img [src]="ministere()?.logo ? getImageUrl(ministere()!.logo) : 'assets/images/armoirie.png'" alt="Logo MTDPCE" class="max-w-full max-h-full object-contain"/>\r
        </div>\r
\r
\r
        </div>\r
        </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<section class="">\r
\r
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
\r
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">\r
\r
        <div *ngFor="let etat of etats; let i = index"\r
            class="text-center p-4 bg-slate-50 rounded-xl shadow">\r
          \r
          <p class="text-2xl font-bold"\r
            [ngClass]="i % 2 === 0 ? 'text-primary-600' : 'text-accent-600'">\r
            {{ etat.valeur }}\r
          </p>\r
\r
          <p class="text-xs text-slate-500 mt-1">\r
            {{ etat.nom }}\r
          </p>\r
\r
        </div>\r
\r
      </div>\r
        \r
\r
    </div>\r
\r
\r
\r
</section>\r
\r
    <!-- Section La Ministre\r
<section class="py-16 bg-white">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="grid lg:grid-cols-5 gap-12 items-start">\r
\r
      \r
      <div class="lg:col-span-2 relative">\r
        \r
        <div class="absolute top-0 left-0 w-1 bg-primary-500 h-full rounded-xl"></div>\r
\r
        <div class="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden ml-6 flex flex-col items-center">\r
          \r
          <div class="w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-100 mb-6">\r
            <img src="assets/images/minsitre.jpeg" alt="Ministre Aminata ZERBO/SABANE" class="w-full h-full object-cover"/>\r
          </div>\r
\r
          <div class="text-center mb-6">\r
            <span class="inline-block px-4 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-3">\r
              La Ministre\r
            </span>\r
            <h3 class="text-2xl font-bold text-slate-800">Dr Aminata ZERBO/SABANE</h3>\r
            <p class="text-primary-600 text-sm font-medium">Ministre de la Transition Digitale</p>\r
          </div>\r
\r
          <div class="space-y-3 text-sm w-full">\r
            <div class="flex justify-between py-2 border-b border-slate-200">\r
              <span class="text-slate-500">Nom</span>\r
              <span class="font-medium text-slate-700">ZERBO/SABANE</span>\r
            </div>\r
            <div class="flex justify-between py-2 border-b border-slate-200">\r
              <span class="text-slate-500">Pr\xE9nom</span>\r
              <span class="font-medium text-slate-700">Aminata</span>\r
            </div>\r
            <div class="flex justify-between py-2">\r
              <span class="text-slate-500">Profession</span>\r
              <span class="font-medium text-slate-700">Enseignante en Informatique</span>\r
            </div>\r
          </div>\r
\r
          <a routerLink="/ministere/ministre" style="background-color: #00843B;" class="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">\r
            Voir la biographie\r
          </a>\r
        </div>\r
      </div>\r
\r
     \r
      <div class="lg:col-span-3 relative">\r
        <div class="ml-6">\r
          <h2 class="text-3xl font-bold text-slate-800 mb-6">Le Minist\xE8re</h2>\r
          <div class="prose prose-slate max-w-none">\r
            <p class="text-slate-600 leading-relaxed mb-4">\r
              Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques \r
              assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de \r
              d\xE9veloppement de l'\xE9conomie num\xE9rique, des postes et de la transformation digitale.\r
            </p>\r
            <p class="text-slate-600 leading-relaxed mb-4">\r
              \xC0 ce titre et en relation avec les d\xE9partements minist\xE9riels comp\xE9tents, il est charg\xE9 \r
              entre autres du d\xE9veloppement des infrastructures des communications \xE9lectroniques, \r
              de l'accompagnement, de la promotion des usages des TIC, du d\xE9veloppement des services \r
              en ligne et des contenus locaux.\r
            </p>\r
            <p class="text-slate-600 leading-relaxed">\r
              Le Minist\xE8re \u0153uvre \xE9galement pour le d\xE9veloppement d'une industrie locale bas\xE9e sur les TIC, \r
              ainsi que pour la modernisation et le d\xE9veloppement du secteur postal au Burkina Faso.\r
            </p>\r
          </div>\r
\r
         \r
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">\r
            <div class="text-center p-4 bg-slate-50 rounded-xl shadow">\r
              <p class="text-2xl font-bold text-primary-600">500+</p>\r
              <p class="text-xs text-slate-500 mt-1">Km Fibre Optique</p>\r
            </div>\r
            <div class="text-center p-4 bg-slate-50 rounded-xl shadow">\r
              <p class="text-2xl font-bold text-accent-600">20</p>\r
              <p class="text-xs text-slate-500 mt-1">Centres Num\xE9riques</p>\r
            </div>\r
            <div class="text-center p-4 bg-slate-50 rounded-xl shadow">\r
              <p class="text-2xl font-bold text-primary-600">5000+</p>\r
              <p class="text-xs text-slate-500 mt-1">Agents Form\xE9s</p>\r
            </div>\r
            <div class="text-center p-4 bg-slate-50 rounded-xl shadow">\r
              <p class="text-2xl font-bold text-accent-600">90%</p>\r
              <p class="text-xs text-slate-500 mt-1">Couverture 4G</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section> -->\r
\r
\r
    <!-- Actualit\xE9s -->\r
<section class="py-16 bg-white" id="actualites">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
\r
    <div class="flex items-center justify-between mb-8">\r
      <div>\r
        <h2 class="text-2xl font-bold text-slate-800">Les derni\xE8res Actualit\xE9s</h2>\r
        <p class="text-slate-600 mt-1">Restez inform\xE9 des derni\xE8res nouvelles</p>\r
      </div>\r
\r
      <div class="hidden sm:flex items-center gap-4">\r
        <button (click)="loadArticles()" \r
                class="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"\r
                [disabled]="isLoading()">\r
          Actualiser\r
        </button>\r
\r
        <a (click)="showAll() ? reduireArticles() : voirToutesActualites()"\r
           class="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 cursor-pointer">\r
          {{ showAll() ? 'R\xE9duire' : 'Voir toutes les actualit\xE9s' }}\r
        </a>\r
      </div>\r
    </div>\r
\r
    <ng-container *ngIf="articles().length > 0; else noArticles">\r
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
        @for (article of articles(); track article.id) {\r
          <a [routerLink]="['/articles', article.id]" class="card group cursor-pointer flex flex-col h-full bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">\r
            <div class="h-48 bg-[#E6F5EB] flex items-center justify-center overflow-hidden">\r
              @if (article.images && article.images.length > 0) {\r
                <img \r
                  [src]="getImageUrl(article.images[0].imageUrl)" \r
                  [alt]="article.title" \r
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">\r
              } @else {\r
                <!-- fallback -->\r
                <svg class="w-16 h-16 text-[#00843B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>\r
                </svg>\r
              }\r
            </div>\r
\r
            <h3 class="text-xl font-bold text-black mb-2 px-4 pt-2 line-clamp-1">{{ article.title }}</h3>\r
            <div class="flex justify-between items-center text-sm text-neutral-500 px-4 mb-2">\r
              <span>{{ formatDate(article.publishedAt || article.createdAt) }}</span>\r
              <span class="flex items-center gap-2">\r
                <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E6F5EB] text-[#00843B]">{{ getCategoryLabel(article.category) }}</span>\r
                <span>{{ article.viewCount }} vues</span>\r
              </span>\r
            </div>\r
            <p class="text-neutral-700 text-sm leading-relaxed text-justify px-4 mb-4 line-clamp-4">{{ article.summary }}</p>\r
          </a>\r
        }\r
      </div>\r
    </ng-container>\r
\r
    <ng-template #noArticles>\r
      <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
        <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucune actualit\xE9 disponible</h3>\r
        <p class="text-slate-500">Les actualit\xE9s seront affich\xE9es ici d\xE8s leur publication.</p>\r
      </div>\r
    </ng-template>\r
\r
    <!-- Pagination backend -->\r
    <div *ngIf="showAll()" class="flex justify-center items-center gap-4 mt-8">\r
      <button (click)="prevPage()" [disabled]="currentPage() <= 1" class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Pr\xE9c\xE9dent\r
      </button>\r
\r
      <span class="text-sm font-medium">Page {{ currentPage() }} / {{ totalPages() }}</span>\r
\r
      <button (click)="nextPage()" [disabled]="currentPage() >= totalPages()" class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Suivant\r
      </button>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="py-16 bg-slate-50">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    \r
    <!-- Titres principaux -->\r
    <div class="grid lg:grid-cols-2 gap-12 mb-12">\r
      <h2 class="text-3xl font-bold text-slate-800 border-l-4 pl-4" style="border-color: rgb(231, 76, 60);">\r
        Communiqu\xE9s du Ministre\r
      </h2>\r
      <h2 class="text-3xl font-bold text-slate-800 border-l-4 pl-4" style="border-color: rgb(231, 76, 60);">\r
        Agenda du Ministre\r
      </h2>\r
    </div>\r
\r
    <!-- Grille Communiqu\xE9s & Agenda -->\r
    <div class="grid lg:grid-cols-2 gap-12">\r
\r
      <!-- Communiqu\xE9s -->\r
      <div class="flex flex-col space-y-6">\r
        <div class="space-y-6">\r
          <ng-container *ngIf="communiques().length > 0; else noCommuniquess">\r
            @for (com of communiques(); track com.id) {\r
              <a [href]="getImageUrl(com?.featuredImage)" target="_blank">\r
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden cursor-pointer mb-4">\r
                  <div class="flex items-start gap-6">\r
                    <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full border-2"\r
                        style="border-color: rgb(231, 76, 60); background-color: white;">\r
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[rgb(231,76,60)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5v14l7-7-7-7z" />\r
                      </svg>\r
                    </div>\r
                    <div class="flex-1">\r
                      <div class="flex justify-between items-center mb-2">\r
                        <span class="text-sm font-medium" style="color: rgb(231, 76, 60);">\r
                          {{ formatDate(com.publishedAt || com.createdAt) }}\r
                        </span>\r
                        <span class="text-xs text-slate-400 uppercase">{{ getCategoryLabel(com.category) }}</span>\r
                      </div>\r
                      <h3 class="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{{ com.title }}</h3>\r
                      <p class="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">{{ com.summary }}</p>\r
                    </div>\r
                  </div>\r
                </div>\r
              </a>\r
            }\r
\r
             <!-- Bouton Voir tous les communiqu\xE9s -->\r
        <div class="mt-auto text-center" *ngIf="!commShowAll()">\r
          <a (click)="voirTousCommuniques()"\r
             class="inline-block px-6 py-3 bg-[rgb(231,76,60)] text-white font-medium rounded-lg hover:bg-[rgb(200,50,40)] transition-colors shadow-sm cursor-pointer">\r
            Voir tous les communiqu\xE9s \u2192\r
          </a>\r
        </div>\r
          </ng-container>\r
\r
          <ng-template #noCommuniquess>\r
            \r
             <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
              <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun communiqu\xE9 disponible</h3>\r
              <p class="text-slate-500">Les communiqu\xE9s seront affich\xE9s ici d\xE8s leur publication.</p>\r
            </div>\r
          </ng-template>\r
        </div>\r
\r
       \r
\r
        <!-- Pagination Communiqu\xE9s -->\r
        <div *ngIf="commShowAll() && commTotalPages() > 1" class="flex justify-center items-center gap-4 mt-6">\r
          <button (click)="prevCommPage()"\r
                  [disabled]="commCurrentPage() === 1"\r
                  class="px-4 py-2 border rounded-lg disabled:opacity-50">Pr\xE9c\xE9dent</button>\r
\r
          <span class="text-sm font-medium">Page {{ commCurrentPage() }} / {{ commTotalPages() }}</span>\r
\r
          <button (click)="nextCommPage()"\r
                  [disabled]="commCurrentPage() >= commTotalPages()"\r
                  class="px-4 py-2 border rounded-lg disabled:opacity-50">Suivant</button>\r
        </div>\r
      </div>\r
\r
      <div class="flex flex-col space-y-6">\r
\r
        <!-- Affichage des 3 derniers agendas -->\r
        <ng-container *ngIf="!showAllAgendas() && latestAgendas.length > 0; else allAgendasBlock">\r
          <div *ngFor="let agenda of latestAgendas"\r
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"\r
              [routerLink]="['/agendas', agenda.id]">\r
            <div class="flex items-center gap-4">\r
              <div class="flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center bg-[rgb(231,76,60)] text-white font-bold text-sm">\r
                <span class="text-lg">{{ agenda.publishedAt | date:'dd' }}</span>\r
                <span class="text-xs uppercase">{{ agenda.publishedAt | date:'MMM' }}</span>\r
              </div>\r
              <div class="flex-1">\r
                <div class="flex justify-between items-center mb-2">\r
                  <span class="text-sm font-medium text-[rgb(231,76,60)]">{{ agenda.title }}</span>\r
                  <span class="text-xs font-medium text-slate-400 uppercase">{{ agenda.lieux }}</span>\r
                </div>\r
                <p class="text-slate-700 font-medium line-clamp-2">{{ agenda.summary }}</p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Bouton Voir tout l'agenda -->\r
          <div class="mt-6 text-center">\r
            <a (click)="voirTousAgendas()"\r
              class="inline-block px-6 py-3 bg-[rgb(231,76,60)] text-white font-medium rounded-lg hover:bg-[rgb(200,50,40)] transition-colors shadow-sm cursor-pointer">\r
              Voir tout l'agenda \u2192\r
            </a>\r
          </div>\r
        </ng-container>\r
\r
        <!-- Bloc pour tous les agendas avec pagination -->\r
        <ng-template #allAgendasBlock>\r
          <ng-container *ngIf="agendas().length > 0; else noAgendas">\r
            <div *ngFor="let agenda of agendas()"\r
                class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"\r
                [routerLink]="['/agendas', agenda.id]">\r
              <div class="flex items-center gap-4">\r
                <div class="flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center bg-[rgb(231,76,60)] text-white font-bold text-sm">\r
                  <span class="text-lg">{{ agenda.publishedAt | date:'dd' }}</span>\r
                  <span class="text-xs uppercase">{{ agenda.publishedAt | date:'MMM' }}</span>\r
                </div>\r
                <div class="flex-1">\r
                  <div class="flex justify-between items-center mb-2">\r
                    <span class="text-sm font-medium text-[rgb(231,76,60)]">{{ agenda.title }}</span>\r
                    <span class="text-xs font-medium text-slate-400 uppercase">{{ agenda.lieux }}</span>\r
                  </div>\r
                  <p class="text-slate-700 font-medium line-clamp-2">{{ agenda.summary }}</p>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Pagination -->\r
            <div *ngIf="totalAgendaPages() > 1" class="flex justify-center items-center gap-4 mt-8">\r
              <button (click)="prevAgendaPage()"\r
                      [disabled]="currentAgendaPage() === 1"\r
                      class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
                Pr\xE9c\xE9dent\r
              </button>\r
\r
              <span class="text-sm font-medium">\r
                Page {{ currentAgendaPage() }} / {{ totalAgendaPages() }}\r
              </span>\r
\r
              <button (click)="nextAgendaPage()"\r
                      [disabled]="currentAgendaPage() >= totalAgendaPages()"\r
                      class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
                Suivant\r
              </button>\r
            </div>\r
          </ng-container>\r
\r
          <!-- Cas aucun agenda -->\r
          <ng-template #noAgendas>\r
            <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
              <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun agenda disponible</h3>\r
              <p class="text-slate-500">Les agendas seront affich\xE9s ici d\xE8s leur publication.</p>\r
            </div>\r
          </ng-template>\r
        </ng-template>\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
\r
\r
<section class="py-16 bg-white-50" id="projets">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="flex items-center justify-between mb-8">\r
      <div>\r
        <h2 class="text-2xl font-bold text-slate-800">Les grands chantiers</h2>\r
        <p class="text-slate-600 mt-1">Nos initiatives pour la transformation digitale</p>\r
      </div>\r
      <!-- Bouton Voir tous (optionnel) -->\r
      <button *ngIf="!showAllProjects()" (click)="voirTousProjets()" \r
         class="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#00843B] bg-white text-[#00843B] font-medium rounded-lg hover:bg-[#f0fdf4] transition-colors">\r
        Voir les autres\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Liste des projets -->\r
    <ng-container *ngIf="projects().length > 0; else noProjects">\r
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        @for (project of projects(); track project.id) {\r
          <a [routerLink]="['/projects', project.id]" class="card group cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">\r
            <div class="flex items-start justify-between mb-4">\r
              <div class="flex-1">\r
                <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>\r
                <h3 class="text-xl font-bold text-black mb-2 px-4 pt-2 line-clamp-1" style="font-family: 'Poppins', sans-serif;">\r
                  {{ project.name }}\r
                </h3>\r
              </div>\r
              <div class="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ml-4"\r
                   [style.backgroundColor]="getProgressBarColor(project)">\r
                <span [style.color]="getContrastTextColor(getProgressBarColor(project))" class="text-2xl font-bold">\r
                  {{ project.progressPercentage }}%\r
                </span>\r
              </div>\r
            </div>\r
            <p class="text-neutral-500 mb-4 line-clamp-2">{{ project.description }}</p>\r
            <div class="w-full bg-neutral-200 rounded-full h-2 mb-4">\r
              <div [class]="getProgressBarClass(project)" [style.width.%]="project.progressPercentage"></div>\r
            </div>\r
            <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">\r
              @if (project.partner) {\r
                <span class="flex items-center gap-1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>\r
                  </svg>\r
                  {{ project.partner }}\r
                </span>\r
              }\r
              @if (project.budget) {\r
                <span class="flex items-center gap-1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>\r
                  </svg>\r
                  {{ formatBudget(project.budget) }}\r
                </span>\r
              }\r
            </div>\r
          </a>\r
        }\r
      </div>\r
    </ng-container>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="showAllProjects() && totalProjectPages() > 1" class="flex justify-center items-center gap-4 mt-8">\r
      <button (click)="prevProjectPage()" [disabled]="currentProjectPage() === 1"\r
              class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Pr\xE9c\xE9dent\r
      </button>\r
\r
      <span class="text-sm font-medium">Page {{ currentProjectPage() }} / {{ totalProjectPages() }}</span>\r
\r
      <button (click)="nextProjectPage()" [disabled]="currentProjectPage() >= totalProjectPages()"\r
              class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Suivant\r
      </button>\r
    </div>\r
\r
    <!-- Aucun projet -->\r
    <ng-template #noProjects>\r
      <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
        <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m4-4H8"/>\r
        </svg>\r
        <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun projet disponible</h3>\r
        <p class="text-slate-500">Les projets seront affich\xE9s ici d\xE8s leur publication.</p>\r
      </div>\r
    </ng-template>\r
  </div>\r
</section>\r
\r
   <!-- Projets\r
<section class="py-16 bg-white-50" id="projets">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="flex items-center justify-between mb-8">\r
      <div>\r
        <h2 class="text-2xl font-bold text-slate-800">Les grands  chantiers</h2>\r
        <p class="text-slate-600 mt-1">Nos initiatives pour la transformation digitale</p>\r
      </div>\r
      <a routerLink="/projets" \r
         class="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#00843B] bg-white text-[#00843B] font-medium rounded-lg hover:bg-[#f0fdf4] transition-colors">\r
        Voir les autres\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>\r
        </svg>\r
      </a>\r
    </div>\r
\r
       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        @for (project of projects(); track project.id) {\r
          <a [routerLink]="['/projects', project.id]" class="card group cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">\r
            <div class="flex items-start justify-between mb-4">\r
              <div class="flex-1">\r
                <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>\r
                <h3 \r
                  class="text-xl font-bold text-black mb-2 px-4 pt-2 line-clamp-1"\r
                  style="font-family: 'Poppins', sans-serif;"\r
                >\r
                  {{ project.name }}\r
                </h3>\r
\r
              </div>\r
\r
\r
                <div class="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ml-4"\r
                    [style.backgroundColor]="getProgressBarColor(project)">\r
                <span [style.color]="getContrastTextColor(getProgressBarColor(project))" \r
                        class="text-2xl font-bold">\r
                    {{ project.progressPercentage }}%\r
                </span>\r
                </div>\r
\r
\r
\r
            </div>\r
            <p class="text-neutral-500 mb-4 line-clamp-2">{{ project.description }}</p>\r
            <div class="w-full bg-neutral-200 rounded-full h-2 mb-4">\r
              <div [class]="getProgressBarClass(project)" [style.width.%]="project.progressPercentage"></div>\r
            </div>\r
            <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">\r
              @if (project.partner) {\r
                <span class="flex items-center gap-1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>\r
                  </svg>\r
                  {{ project.partner }}\r
                </span>\r
              }\r
              @if (project.budget) {\r
                <span class="flex items-center gap-1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  </svg>\r
                  {{ formatBudget(project.budget) }}\r
                </span>\r
              }\r
              @if (project.endDate) {\r
                <span class="flex items-center gap-1">\r
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                  </svg>\r
                  {{ formatDate(project.endDate) }}\r
                </span>\r
              }\r
            </div>\r
          </a>\r
        }\r
      </div>\r
\r
    \r
\r
    <ng-template #noProjects>\r
      <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
        <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m4-4H8"/>\r
        </svg>\r
        <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun projet disponible</h3>\r
        <p class="text-slate-500">Les projets seront affich\xE9s ici d\xE8s leur publication.</p>\r
      </div>\r
    </ng-template>\r
  </div>\r
</section> -->\r
\r
\r
<section class="py-16 bg-slate-50">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
\r
    <!-- Header -->\r
    <div class="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">\r
      \r
      <div class="text-center sm:text-left">\r
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Nos Services publics</h2>\r
        <p class="text-slate-600">Acc\xE9dez rapidement aux services du minist\xE8re</p>\r
      </div>\r
\r
      <!-- Bouton dynamique -->\r
      <div *ngIf="!showAllServices()">\r
        <a (click)="voirTousServices()"\r
          class="inline-flex items-center gap-2 px-4 py-2 border border-[#00843B] bg-white text-[#00843B] font-medium rounded-lg hover:bg-[#f0fdf4] transition-colors cursor-pointer">\r
          Voir les autres\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M17 8l4 4m0 0l-4 4m4-4H3"/>\r
          </svg>\r
        </a>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Grid des services -->\r
     <ng-container *ngIf="services().length > 0; else noServices">\r
\r
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">\r
\r
          <div *ngFor="let service of services()"\r
              (click)="openService(service.url)"\r
              class="bg-white p-6 rounded-xl border border-slate-100 shadow-md\r
                    hover:border-primary-500 hover:shadow-lg transition-all\r
                    flex flex-col items-center text-center cursor-pointer">\r
\r
            <!-- Logo -->\r
            <div class="w-16 h-16 bg-accent-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">\r
              <img *ngIf="service.logo"\r
                  [src]="getImageUrl(service.logo)"\r
                  [alt]="service.name"\r
                  class="w-12 h-12 object-contain"/>\r
\r
              <svg *ngIf="!service.logo"\r
                  class="w-8 h-8 text-accent-500"\r
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
              </svg>\r
            </div>\r
\r
            <!-- Nom -->\r
            <h3 class="font-semibold text-slate-800 mb-2">\r
              {{ service.name }}\r
            </h3>\r
\r
            <!-- Description -->\r
            <p class="text-sm text-slate-600 mb-4">\r
              {{ service.description }}\r
            </p>\r
\r
            <!-- Lien -->\r
            <span class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">\r
              En savoir plus \u2192\r
            </span>\r
\r
          </div>\r
\r
        </div>\r
\r
\r
     </ng-container>\r
   \r
    <!-- Pagination -->\r
    <div *ngIf="showAllServices() && totalServicePages() > 1"\r
        class="flex justify-center items-center gap-4 mt-8">\r
\r
      <button \r
        (click)="prevServicePage()"\r
        [disabled]="currentServicePage() === 1"\r
        class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Pr\xE9c\xE9dent\r
      </button>\r
\r
      <span class="text-sm font-medium">\r
        Page {{ currentServicePage() }} / {{ totalServicePages() }}\r
      </span>\r
\r
      <button \r
        (click)="nextServicePage()"\r
        [disabled]="currentServicePage() >= totalServicePages()"\r
        class="px-4 py-2 border rounded-lg disabled:opacity-50">\r
        Suivant\r
      </button>\r
\r
    </div>\r
\r
    <!-- Aucun projet -->\r
    <ng-template #noServices>\r
      <div class="text-center py-12 bg-white rounded-xl border border-slate-100">\r
        <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m4-4H8"/>\r
        </svg>\r
        <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun service disponible</h3>\r
        <p class="text-slate-500">Les services seront affich\xE9s ici d\xE8s leur publication.</p>\r
      </div>\r
    </ng-template>\r
\r
  </div>\r
</section>\r
\r
    <!-- Services Cards - Style soft \r
    <section class="py-16 bg-slate-50">\r
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
       \r
        <div class="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">\r
          \r
          <div class="text-center sm:text-left">\r
            <h2 class="text-2xl font-bold text-slate-800 mb-2">Nos Services publics</h2>\r
            <p class="text-slate-600">Acc\xE9dez rapidement aux services du minist\xE8re</p>\r
          </div>\r
\r
         \r
          <a routerLink="/services" \r
            class="inline-flex items-center gap-2 px-4 py-2 border border-[#00843B] bg-white text-[#00843B] font-medium rounded-lg hover:bg-[#f0fdf4] transition-colors">\r
            Voir les autres\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>\r
            </svg>\r
          </a>\r
        </div>\r
\r
       \r
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">\r
          <div *ngFor="let service of services | slice:0:4"\r
              (click)="openService(service.url)"\r
              class="bg-white p-6 rounded-xl border border-slate-100 shadow-md\r
                      hover:border-primary-500 hover:shadow-lg transition-all\r
                      flex flex-col items-center text-center cursor-pointer">\r
\r
           \r
            <div class="w-16 h-16 bg-accent-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">\r
              <img *ngIf="service.logo" [src]="getImageUrl(service.logo)" alt="{{service.name}}" class="w-12 h-12 object-contain"/>\r
              <svg *ngIf="!service.logo" class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
              </svg>\r
            </div>\r
\r
            \r
            <h3 class="font-semibold text-slate-800 mb-2">{{ service.name }}</h3>\r
\r
           \r
            <p class="text-sm text-slate-600 mb-4">{{ service.description }}</p>\r
\r
           \r
            <span class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">\r
              En savoir plus \u2192\r
            </span>\r
\r
          </div>\r
        </div>\r
      </div>\r
    \r
    </section>-->\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
    <!-- CTA Newsletter\r
<section class="py-16 bg-primary-500" style="background-color:#00843B;">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">\r
      \r
     \r
      <p class="text-white text-lg sm:text-xl font-semibold">\r
        La liste des entreprises d\xE9tentrices de l'agr\xE9ment technique en mati\xE8res informatiques\r
      </p>\r
\r
      \r
      <a href="/chemin/vers/le/fichier.pdf" \r
         class="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">\r
        T\xE9l\xE9charger\r
      </a>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<div class="flex items-center gap-4">\r
              <div class="flex -space-x-3">\r
                <div class="w-10 h-10 rounded-full bg-burkina-green flex items-center justify-center text-white text-sm font-medium border-2 border-white shadow-soft">SA</div>\r
                <div class="w-10 h-10 rounded-full bg-burkina-yellow flex items-center justify-center text-slate-900 text-sm font-medium border-2 border-white shadow-soft">AD</div>\r
                <div class="w-10 h-10 rounded-full bg-burkina-red flex items-center justify-center text-white text-sm font-medium border-2 border-white shadow-soft">MO</div>\r
              </div>\r
              <div class="text-sm text-slate-600">\r
                <span class="text-slate-900 font-medium">3 r\xF4les</span> disponibles\r
              </div>\r
            </div>\r
\r
\r
\r
  <div class="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">\r
            <div class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Comptes de d\xE9monstration</div>\r
            <div class="space-y-2 text-sm">\r
              <div class="flex items-center justify-between"><span class="text-slate-600">Super Admin:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">superadmin / SuperAdmin2024</code></div>\r
              <div class="flex items-center justify-between"><span class="text-slate-600">Admin:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">admin / Admin2024</code></div>\r
              <div class="flex items-center justify-between"><span class="text-slate-600">Mod\xE9rateur:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">moderateur / Moderateur2024</code></div>\r
            </div>\r
          </div>\r
 -->\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
 \r
\r
`, styles: ["/* angular:styles/component:scss;f372ff439daa3e7704aac10b8bb2f110774c7b0754fc93b159880b15e88086f5;C:/Users/adrab/OneDrive/Desktop/MINISTERE/frontTemplateDesMinistere-1/src/app/features/home/home/home.component.ts */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn {\n  animation: fadeIn 0.5s ease-out forwards;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home/home.component.ts", lineNumber: 43 });
})();
export {
  HomeComponent
};
/*! Bundled license information:

@angular/common/locales/fr.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-J5W5KYIV.js.map
