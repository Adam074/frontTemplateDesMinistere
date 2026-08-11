import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/agendas/agendas.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/agendas", a0];
function AgendasComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function AgendasComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, AgendasComponent_Conditional_16_For_2_Template, 5, 0, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AgendasComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 22);
    \u0275\u0275text(4, "Aucun agenda trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function AgendasComponent_Conditional_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 34)(10, "div", 35)(11, "span", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agenda_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, agenda_r2.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, agenda_r2.publishedAt, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, agenda_r2.publishedAt, "MMM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", agenda_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", agenda_r2.lieux, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", agenda_r2.summary, " ");
  }
}
function AgendasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 24);
    \u0275\u0275template(2, AgendasComponent_Conditional_18_div_2_Template, 17, 14, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "button", 27);
    \u0275\u0275listener("click", function AgendasComponent_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function AgendasComponent_Conditional_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(9, " Suivant ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.agendas());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.currentPage + 1, " / ", ctx_r2.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage >= ctx_r2.totalPages - 1);
  }
}
var AgendasComponent = class _AgendasComponent {
  route;
  apiService;
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
    this.loadAgendas();
  }
  // Fonction pour charger les agendas avec pagination
  loadAgendas(page = 0) {
    this.loading.set(true);
    this.apiService.getPublishedAgendas(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.agendas.set(response.data.content);
          this.currentPage = page;
          this.totalPages = response.data.totalPages;
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des agendas", err);
        this.loading.set(false);
      }
    });
  }
  // Passer à la page suivante
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.loadAgendas(this.currentPage + 1);
    }
  }
  // Revenir à la page précédente
  prevPage() {
    if (this.currentPage > 0) {
      this.loadAgendas(this.currentPage - 1);
    }
  }
  static \u0275fac = function AgendasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AgendasComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgendasComponent, selectors: [["app-agendas"]], decls: 19, vars: 1, consts: [[1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-white/90", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8", "p-4"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher u...", 1, "input", "pl-10"], [1, "bg-[#00843B]", "hover:bg-[#006B30]", "text-white", "font-semibold", "px-6", "py-2", "rounded-lg", "transition-colors", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-[#6FCF97]", "focus:ring-offset-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "text-center", "py-16"], [1, "space-y-6", "px-4", "container", "mx-auto"], [1, "card", "animate-pulse"], [1, "h-48", "bg-neutral-200", "rounded-lg", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/4", "mb-3"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["class", "bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex", "justify-center", "items-center", "gap-4", "mt-6"], [1, "px-4", "py-2", "bg-gray-200", "text-gray-700", "rounded", "disabled:opacity-50", 3, "click", "disabled"], [1, "font-medium"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "cursor-pointer", "group", 3, "routerLink"], [1, "flex", "items-center", "gap-4"], [1, "flex-shrink-0", "w-16", "h-16", "rounded-full", "flex", "flex-col", "items-center", "justify-center", "bg-[rgb(231,76,60)]", "text-white", "font-bold", "text-sm"], [1, "text-lg"], [1, "text-xs", "uppercase"], [1, "flex-1"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-sm", "font-medium", "text-[rgb(231,76,60)]"], [1, "text-xs", "font-medium", "text-slate-400", "uppercase"], [1, "text-slate-700", "font-medium", "line-clamp-2"]], template: function AgendasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Agendas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Ne manquez rien ! Consultez les agendas du Minist\xE8re de la Transition Digitale. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, AgendasComponent_Conditional_16_Template, 3, 1, "div", 12)(17, AgendasComponent_Conditional_17_Template, 7, 0, "div", 13)(18, AgendasComponent_Conditional_18_Template, 10, 5, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.agendas().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgendasComponent, [{
    type: Component,
    args: [{ selector: "app-agendas", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- Hero -->\r
<section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r
  <div class="container mx-auto px-4">\r
    <h1 class="text-4xl font-bold mb-4" style="color: white;">Agendas</h1>\r
    <p class="text-white/90 text-lg max-w-2xl">\r
      Ne manquez rien ! Consultez les agendas du Minist\xE8re de la Transition Digitale.\r
    </p>\r
  </div>\r
</section>\r
\r
\r
\r
<!-- Content -->\r
<section class="py-12 bg-neutral-50">\r
  <div class="container mx-auto px-4">\r
\r
    <!-- Search -->\r
    <div class="card mb-8 p-4">\r
      <div class="flex flex-col md:flex-row gap-4">\r
        <div class="flex-1 relative">\r
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input \r
            type="text" \r
            \r
            \r
            placeholder="Rechercher u..."\r
            class="input pl-10"\r
          >\r
        </div>\r
        <button\r
          \r
          class="bg-[#00843B] hover:bg-[#006B30] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6FCF97] focus:ring-offset-2"\r
        >\r
          Rechercher\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Articles Grid -->\r
    @if (loading()) {\r
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
        @for (i of [1,2,3,4,5,6]; track i) {\r
          <div class="card animate-pulse">\r
            <div class="h-48 bg-neutral-200 rounded-lg mb-4"></div>\r
            <div class="h-4 bg-neutral-200 rounded w-1/4 mb-3"></div>\r
            <div class="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>\r
            <div class="h-4 bg-neutral-200 rounded w-full"></div>\r
          </div>\r
        }\r
      </div>\r
    } @else if (agendas().length === 0) {\r
      <div class="text-center py-16">\r
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
        </svg>\r
        <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun agenda trouv\xE9</h3>\r
        <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>\r
      </div>\r
    } @else {\r
\r
\r
        <!-- Agenda -->\r
<div class="space-y-6 px-4 container mx-auto">\r
\r
  <!-- Grille de 2 cartes par ligne -->\r
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
    <div *ngFor="let agenda of agendas()" \r
         class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"\r
         [routerLink]="['/agendas', agenda.id]">\r
\r
      <div class="flex items-center gap-4">\r
\r
        <!-- Date -->\r
        <div class="flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center bg-[rgb(231,76,60)] text-white font-bold text-sm">\r
          <span class="text-lg">{{ agenda.publishedAt | date:'dd' }}</span>\r
          <span class="text-xs uppercase">{{ agenda.publishedAt | date:'MMM' }}</span>\r
        </div>\r
\r
        <div class="flex-1">\r
\r
          <!-- Title + Lieux -->\r
          <div class="flex justify-between items-center mb-2">\r
            <span class="text-sm font-medium text-[rgb(231,76,60)]">\r
              {{ agenda.title }}\r
            </span>\r
            <span class="text-xs font-medium text-slate-400 uppercase">\r
              {{ agenda.lieux }}\r
            </span>\r
          </div>\r
\r
          <!-- Summary -->\r
          <p class="text-slate-700 font-medium line-clamp-2">\r
            {{ agenda.summary }}\r
          </p>\r
\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="flex justify-center items-center gap-4 mt-6">\r
    <button (click)="prevPage()"\r
            [disabled]="currentPage === 0"\r
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">\r
      Pr\xE9c\xE9dent\r
    </button>\r
\r
    <span class="font-medium">Page {{ currentPage + 1 }} / {{ totalPages }}</span>\r
\r
    <button (click)="nextPage()"\r
            [disabled]="currentPage >= totalPages - 1"\r
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50">\r
      Suivant\r
    </button>\r
  </div>\r
\r
  <!-- Bouton Voir tout l\u2019agenda -->\r
  \r
\r
</div>\r
      \r
    }\r
  </div>\r
  \r
</section>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgendasComponent, { className: "AgendasComponent", filePath: "src/app/features/agendas/agendas.component.ts", lineNumber: 14 });
})();
export {
  AgendasComponent
};
//# sourceMappingURL=chunk-6VDAUSNN.js.map
