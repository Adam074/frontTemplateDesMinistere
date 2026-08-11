import {
  ActivatedRoute,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  NgIf,
  environment,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/communiques/communiques.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _forTrack0 = ($index, $item) => $item.id;
function CommuniquesComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20);
    \u0275\u0275elementEnd();
  }
}
function CommuniquesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, CommuniquesComponent_Conditional_16_For_2_Template, 5, 0, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CommuniquesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 23);
    \u0275\u0275text(4, "Aucun communiqu\xE9 trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function CommuniquesComponent_Conditional_18_ng_container_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "a", 32)(3, "div", 33)(4, "div", 34)(5, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 36);
    \u0275\u0275element(7, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 38)(9, "div", 39)(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h3", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const com_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.getImageUrl(com_r2 == null ? null : com_r2.featuredImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(com_r2.publishedAt || com_r2.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(com_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", com_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", com_r2.summary, " ");
  }
}
function CommuniquesComponent_Conditional_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275repeaterCreate(1, CommuniquesComponent_Conditional_18_ng_container_2_For_2_Template, 18, 5, "div", 30, _forTrack0);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.agendas());
  }
}
function CommuniquesComponent_Conditional_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 44);
    \u0275\u0275text(1, "Aucun communiqu\xE9 disponible");
    \u0275\u0275elementEnd();
  }
}
function CommuniquesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 25);
    \u0275\u0275template(2, CommuniquesComponent_Conditional_18_ng_container_2_Template, 3, 0, "ng-container", 26)(3, CommuniquesComponent_Conditional_18_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "button", 28);
    \u0275\u0275listener("click", function CommuniquesComponent_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(7, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 28);
    \u0275\u0275listener("click", function CommuniquesComponent_Conditional_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(11, " Suivant ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noCommuniquess_r4 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.agendas().length > 0)("ngIfElse", noCommuniquess_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.currentPage + 1, " / ", ctx_r2.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage >= ctx_r2.totalPages - 1);
  }
}
var CommuniquesComponent = class _CommuniquesComponent {
  route;
  apiService;
  API_URL = environment.FileUrl;
  agendas = signal([], ...ngDevMode ? [{ debugName: "agendas" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentPage = 0;
  // page actuelle (0-indexed)
  pageSize = 10;
  // nombre d'agendas par page
  totalPages = 0;
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles(page = 0) {
    this.loading.set(true);
    this.apiService.getPublishedArticles(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          const actualiteArticles = response.data.content.filter((article) => article.category === "COMMUNIQUE");
          this.agendas.set(actualiteArticles);
          this.currentPage = page;
          this.totalPages = response.data.totalPages;
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  // Passer à la page suivante
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.loadArticles(this.currentPage + 1);
    }
  }
  // Revenir à la page précédente
  prevPage() {
    if (this.currentPage > 0) {
      this.loadArticles(this.currentPage - 1);
    }
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
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
  static \u0275fac = function CommuniquesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommuniquesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommuniquesComponent, selectors: [["app-communiques"]], decls: 19, vars: 1, consts: [["noCommuniquess", ""], [1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-white/90", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8", "p-4"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher u...", 1, "input", "pl-10"], [1, "bg-[#00843B]", "hover:bg-[#006B30]", "text-white", "font-semibold", "px-6", "py-2", "rounded-lg", "transition-colors", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-[#6FCF97]", "focus:ring-offset-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "text-center", "py-16"], [1, "space-y-6", "px-4", "container", "mx-auto"], [1, "card", "animate-pulse"], [1, "h-48", "bg-neutral-200", "rounded-lg", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/4", "mb-3"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [4, "ngIf", "ngIfElse"], [1, "flex", "justify-center", "items-center", "gap-4", "mt-6"], [1, "px-4", "py-2", "bg-gray-200", "text-gray-700", "rounded", "disabled:opacity-50", 3, "click", "disabled"], [1, "font-medium"], [1, "flex", "flex-col", "justify-between", "space-y-6"], [1, "space-y-6"], ["target", "_blank", 3, "href"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "relative", "overflow-hidden", "cursor-pointer"], [1, "flex", "items-start", "gap-6"], [1, "flex-shrink-0", "flex", "items-center", "justify-center", "w-16", "h-16", "rounded-full", "border-2", 2, "border-color", "rgb(231, 76, 60)", "background-color", "white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8", "text-[rgb(231,76,60)]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5v14l7-7-7-7z"], [1, "flex-1"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-sm", "font-medium", 2, "color", "rgb(231, 76, 60)"], [1, "text-xs", "text-slate-400", "uppercase"], [1, "text-xl", "font-bold", "text-slate-800", "mb-2", "line-clamp-2"], [1, "text-slate-600", "text-sm", "leading-relaxed", "line-clamp-2", "mb-4"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-2"]], template: function CommuniquesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3, "Communiqu\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5, " Retrouvez toutes les communiqu\xE9s du Minist\xE8re de la Transition Digitale. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 5)(7, "div", 2)(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 9);
      \u0275\u0275element(12, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(13, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, CommuniquesComponent_Conditional_16_Template, 3, 1, "div", 13)(17, CommuniquesComponent_Conditional_17_Template, 7, 0, "div", 14)(18, CommuniquesComponent_Conditional_18_Template, 12, 6, "div", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.agendas().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommuniquesComponent, [{
    type: Component,
    args: [{ selector: "app-communiques", standalone: true, imports: [CommonModule, RouterModule], template: '<section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r\n  <div class="container mx-auto px-4">\r\n    <h1 class="text-4xl font-bold mb-4" style="color: white;">Communiqu\xE9s</h1>\r\n    <p class="text-white/90 text-lg max-w-2xl">\r\n      Retrouvez toutes les  communiqu\xE9s  du Minist\xE8re de la Transition Digitale.\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<!-- Content -->\r\n<section class="py-12 bg-neutral-50">\r\n  <div class="container mx-auto px-4">\r\n\r\n    <!-- Search -->\r\n    <div class="card mb-8 p-4">\r\n      <div class="flex flex-col md:flex-row gap-4">\r\n        <div class="flex-1 relative">\r\n          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r\n          </svg>\r\n          <input \r\n            type="text" \r\n            \r\n            \r\n            placeholder="Rechercher u..."\r\n            class="input pl-10"\r\n          >\r\n        </div>\r\n        <button\r\n          \r\n          class="bg-[#00843B] hover:bg-[#006B30] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6FCF97] focus:ring-offset-2"\r\n        >\r\n          Rechercher\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Articles Grid -->\r\n    @if (loading()) {\r\n      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r\n        @for (i of [1,2,3,4,5,6]; track i) {\r\n          <div class="card animate-pulse">\r\n            <div class="h-48 bg-neutral-200 rounded-lg mb-4"></div>\r\n            <div class="h-4 bg-neutral-200 rounded w-1/4 mb-3"></div>\r\n            <div class="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>\r\n            <div class="h-4 bg-neutral-200 rounded w-full"></div>\r\n          </div>\r\n        }\r\n      </div>\r\n    } @else if (agendas().length === 0) {\r\n      <div class="text-center py-16">\r\n        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r\n        </svg>\r\n        <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun communiqu\xE9 trouv\xE9</h3>\r\n        <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>\r\n      </div>\r\n    } @else {\r\n\r\n\r\n        <!-- Agenda -->\r\n<div class="space-y-6 px-4 container mx-auto">\r\n\r\n  <!-- Grille de 2 cartes par ligne -->\r\n  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r\n\r\n    <ng-container *ngIf="agendas().length > 0; else noCommuniquess">\r\n          @for (com of agendas(); track com.id) {\r\n\r\n             <div class="flex flex-col justify-between space-y-6">\r\n              <div class="space-y-6">\r\n                <!-- Communiqu\xE9 1 -->\r\n                 <a [href]="getImageUrl(com?.featuredImage)" target="_blank">\r\n                  <div  class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden cursor-pointer">\r\n                    <div class="flex items-start gap-6">\r\n                      <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full border-2"\r\n                          style="border-color: rgb(231, 76, 60); background-color: white;">\r\n                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[rgb(231,76,60)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5v14l7-7-7-7z" />\r\n                        </svg>\r\n                      </div>\r\n                      <div class="flex-1">\r\n                        <div class="flex justify-between items-center mb-2">\r\n                          <span class="text-sm font-medium" style="color: rgb(231, 76, 60);">{{ formatDate(com.publishedAt || com.createdAt) }}</span>\r\n                          <span class="text-xs text-slate-400 uppercase">{{ getCategoryLabel(com.category) }}</span>\r\n                        </div>\r\n                        <h3 class="text-xl font-bold text-slate-800 mb-2 line-clamp-2">\r\n                          {{ com.title }}\r\n                        </h3>\r\n                        <p class="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">\r\n                        {{ com.summary }}  </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </a>\r\n\r\n              \r\n              </div>\r\n\r\n              <!-- Bouton Voir tous les communiqu\xE9s align\xE9 bas -->\r\n             \r\n            </div>\r\n\r\n\r\n\r\n          }\r\n\r\n        </ng-container>\r\n\r\n        <ng-template #noCommuniquess>\r\n          \r\n            <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucun communiqu\xE9 disponible</h3>\r\n           \r\n        </ng-template>\r\n     \r\n   \r\n  </div>\r\n\r\n  <!-- Pagination -->\r\n  <div class="flex justify-center items-center gap-4 mt-6">\r\n    <button (click)="prevPage()"\r\n            [disabled]="currentPage === 0"\r\n            class="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">\r\n      Pr\xE9c\xE9dent\r\n    </button>\r\n\r\n    <span class="font-medium">Page {{ currentPage + 1 }} / {{ totalPages }}</span>\r\n\r\n    <button (click)="nextPage()"\r\n            [disabled]="currentPage >= totalPages - 1"\r\n            class="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">\r\n      Suivant\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Bouton Voir tout l\u2019agenda -->\r\n  \r\n\r\n</div>\r\n      \r\n    }\r\n  </div>\r\n  \r\n</section>' }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommuniquesComponent, { className: "CommuniquesComponent", filePath: "src/app/features/communiques/communiques.component.ts", lineNumber: 15 });
})();
export {
  CommuniquesComponent
};
//# sourceMappingURL=chunk-LTXPCKKA.js.map
