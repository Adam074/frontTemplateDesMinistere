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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/projects/detail-projets/detail-projets.component.ts
function DetailProjetsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "div", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4, "Chargement du projet\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Partenaire : ", ctx_r0.project().partner);
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", ctx_r0.project().responsibleDepartment);
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h2", 17);
    \u0275\u0275text(2, "Objectifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().objectives, " ");
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 27);
    \u0275\u0275text(2, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getStatusBadgeClass(ctx_r0.project().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.project().status), " ");
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 27);
    \u0275\u0275text(2, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatBudget(ctx_r0.project().budget), " ");
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 27);
    \u0275\u0275text(2, "D\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.project().startDate), " ");
  }
}
function DetailProjetsComponent_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 27);
    \u0275\u0275text(2, "Fin pr\xE9vue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.project().endDate), " ");
  }
}
function DetailProjetsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 6)(2, "div", 7)(3, "a", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 9);
    \u0275\u0275element(5, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Retour aux projets ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h1", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12);
    \u0275\u0275conditionalCreate(10, DetailProjetsComponent_Conditional_1_Conditional_10_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(11, DetailProjetsComponent_Conditional_1_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "section", 13)(13, "div", 6)(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "h2", 17);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, DetailProjetsComponent_Conditional_1_Conditional_21_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "div", 16)(24, "h3", 20);
    \u0275\u0275text(25, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 21)(27, "span", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23);
    \u0275\u0275element(30, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 16)(32, "h3", 20);
    \u0275\u0275text(33, "Informations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul", 25);
    \u0275\u0275conditionalCreate(35, DetailProjetsComponent_Conditional_1_Conditional_35_Template, 5, 3, "li", 26);
    \u0275\u0275conditionalCreate(36, DetailProjetsComponent_Conditional_1_Conditional_36_Template, 5, 1, "li", 26);
    \u0275\u0275conditionalCreate(37, DetailProjetsComponent_Conditional_1_Conditional_37_Template, 5, 1, "li", 26);
    \u0275\u0275conditionalCreate(38, DetailProjetsComponent_Conditional_1_Conditional_38_Template, 5, 1, "li", 26);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.project().partner ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().responsibleDepartment ? 11 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().objectives ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ctx_r0.getProgressColor(ctx_r0.project()));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.getContrastTextColor(ctx_r0.getProgressColor(ctx_r0.project())));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().progressPercentage, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.project().progressPercentage, "%")("background", ctx_r0.getProgressColor(ctx_r0.project()));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.project().status ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().budget ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().startDate ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project().endDate ? 38 : -1);
  }
}
function DetailProjetsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h2", 29);
    \u0275\u0275text(2, "Projet non trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
var DetailProjetsComponent = class _DetailProjetsComponent {
  route;
  apiService;
  project = signal(null, ...ngDevMode ? [{ debugName: "project" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.apiService.getPublicProjectById(+id).subscribe({
        next: (res) => {
          if (res.success)
            this.project.set(res.data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
  /* ================= STATUS ================= */
  getStatusLabel(status) {
    const labels = {
      PLANIFIE: "Planifi\xE9",
      EN_COURS: "En cours",
      SUSPENDU: "Suspendu",
      TERMINE: "Termin\xE9",
      ANNULE: "Annul\xE9"
    };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const base = "px-3 py-1 rounded-full text-xs font-semibold";
    const map = {
      PLANIFIE: `${base} bg-white/20 text-white`,
      EN_COURS: `${base} bg-yellow-100 text-yellow-800`,
      SUSPENDU: `${base} bg-red-100 text-red-800`,
      TERMINE: `${base} bg-green-100 text-green-800`,
      ANNULE: `${base} bg-red-200 text-red-900`
    };
    return map[status] || base;
  }
  /* ================= PROGRESSION ================= */
  getProgressColor(project) {
    const p = project.progressPercentage;
    if (p >= 80)
      return "#00843B";
    if (p >= 50)
      return "#6FCF97";
    if (p >= 20)
      return "#F2C94C";
    return "#EB5757";
  }
  getContrastTextColor(hex) {
    const c = hex.substring(1);
    const rgb = parseInt(c, 16);
    const r = rgb >> 16 & 255;
    const g = rgb >> 8 & 255;
    const b = rgb & 255;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#000000" : "#FFFFFF";
  }
  /* ================= FORMAT ================= */
  formatDate(date) {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  formatBudget(budget) {
    if (budget >= 1e9)
      return (budget / 1e9).toFixed(1) + " Mds FCFA";
    if (budget >= 1e6)
      return (budget / 1e6).toFixed(0) + " M FCFA";
    return budget.toLocaleString("fr-FR") + " FCFA";
  }
  static \u0275fac = function DetailProjetsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailProjetsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailProjetsComponent, selectors: [["app-detail-projets"]], decls: 3, vars: 1, consts: [[1, "min-h-[60vh]", "flex", "items-center", "justify-center", "bg-neutral-50"], [1, "py-20", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "w-12", "h-12", "border-4", "border-[#E6F5EB]", "border-t-[#00843B]", "rounded-full", "animate-spin"], [1, "text-sm", "text-neutral-500"], [1, "bg-[#00843B]", "text-white", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "max-w-4xl"], ["routerLink", "/projects", 1, "inline-flex", "items-center", "text-white/80", "hover:text-white", "mb-4", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-3xl", "lg:text-4xl", "font-bold", "mt-4", 2, "color", "white"], [1, "flex", "flex-wrap", "items-center", "gap-4", "mt-4", "text-white/80"], [1, "py-12", "bg-neutral-50"], [1, "max-w-4xl", "mx-auto", "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-white", "rounded-xl", "shadow", "p-6"], [1, "text-lg", "font-semibold", "mb-3"], [1, "text-neutral-600", "leading-relaxed"], [1, "space-y-6"], [1, "text-lg", "font-semibold", "mb-4"], [1, "w-20", "h-20", "mx-auto", "rounded-xl", "flex", "items-center", "justify-center", "mb-4"], [1, "text-2xl", "font-bold"], [1, "w-full", "bg-neutral-200", "rounded-full", "h-3"], [1, "h-3", "rounded-full", "transition-all", "duration-500"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between"], [1, "text-neutral-500"], [1, "font-medium", "text-neutral-900"], [1, "text-lg", "font-semibold", "text-neutral-600"]], template: function DetailProjetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DetailProjetsComponent_Conditional_0_Template, 5, 0, "div", 0)(1, DetailProjetsComponent_Conditional_1_Template, 39, 18)(2, DetailProjetsComponent_Conditional_2_Template, 3, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.project() ? 1 : 2);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailProjetsComponent, [{
    type: Component,
    args: [{ selector: "app-detail-projets", standalone: true, imports: [CommonModule, RouterModule], template: '@if (loading()) {\r\n  <!-- Loader -->\r\n  <div class="min-h-[60vh] flex items-center justify-center bg-neutral-50">\r\n    <div class="flex flex-col items-center gap-3">\r\n      <div class="w-12 h-12 border-4 border-[#E6F5EB] border-t-[#00843B] rounded-full animate-spin"></div>\r\n      <span class="text-sm text-neutral-500">Chargement du projet\u2026</span>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n@else if (project()) {\r\n\r\n  <!-- HEADER VERT (position inchang\xE9e) -->\r\n  <section class="bg-[#00843B] text-white py-12">\r\n    <div class="container mx-auto px-4">\r\n      <div class="max-w-4xl">\r\n\r\n        <a\r\n          routerLink="/projects"\r\n          class="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"\r\n        >\r\n          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n              d="M10 19l-7-7m0 0l7-7m-7 7h18" />\r\n          </svg>\r\n          Retour aux projets\r\n        </a>\r\n\r\n       \r\n\r\n        <h1 class="text-3xl lg:text-4xl font-bold mt-4" style="color: white;">\r\n          {{ project()!.name }}\r\n        </h1>\r\n\r\n        <div class="flex flex-wrap items-center gap-4 mt-4 text-white/80">\r\n          @if (project()!.partner) {\r\n            <span>Partenaire : {{ project()!.partner }}</span>\r\n          }\r\n          @if (project()!.responsibleDepartment) {\r\n            <span>\u2022 {{ project()!.responsibleDepartment }}</span>\r\n          }\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- CONTENU -->\r\n  <section class="py-12 bg-neutral-50">\r\n    <div class="container mx-auto px-4">\r\n      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">\r\n\r\n        <!-- COLONNE GAUCHE -->\r\n        <div class="lg:col-span-2 space-y-6">\r\n\r\n          <div class="bg-white rounded-xl shadow p-6">\r\n            <h2 class="text-lg font-semibold mb-3">Description</h2>\r\n            <p class="text-neutral-600 leading-relaxed">\r\n              {{ project()!.description }}\r\n            </p>\r\n          </div>\r\n\r\n          @if (project()!.objectives) {\r\n            <div class="bg-white rounded-xl shadow p-6">\r\n              <h2 class="text-lg font-semibold mb-3">Objectifs</h2>\r\n              <p class="text-neutral-600 leading-relaxed">\r\n                {{ project()!.objectives }}\r\n              </p>\r\n            </div>\r\n          }\r\n\r\n        </div>\r\n\r\n        <!-- COLONNE DROITE -->\r\n        <div class="space-y-6">\r\n\r\n          <!-- PROGRESSION -->\r\n          <div class="bg-white rounded-xl shadow p-6">\r\n            <h3 class="text-lg font-semibold mb-4">Progression</h3>\r\n\r\n            <!-- Cercle -->\r\n            <div\r\n              class="w-20 h-20 mx-auto rounded-xl flex items-center justify-center mb-4"\r\n              [style.background]="getProgressColor(project()!)"\r\n            >\r\n              <span\r\n                class="text-2xl font-bold"\r\n                [style.color]="getContrastTextColor(getProgressColor(project()!))"\r\n              >\r\n                {{ project()!.progressPercentage }}%\r\n              </span>\r\n            </div>\r\n\r\n            <!-- Barre -->\r\n            <div class="w-full bg-neutral-200 rounded-full h-3">\r\n              <div\r\n                class="h-3 rounded-full transition-all duration-500"\r\n                [style.width.%]="project()!.progressPercentage"\r\n                [style.background]="getProgressColor(project()!)"\r\n              ></div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- INFORMATIONS -->\r\n          <div class="bg-white rounded-xl shadow p-6">\r\n            <h3 class="text-lg font-semibold mb-4">Informations</h3>\r\n\r\n            <ul class="space-y-3 text-sm">\r\n\r\n\r\n              @if (project()!.status) {\r\n                <li class="flex justify-between">\r\n                  <span class="text-neutral-500">Statut</span>\r\n                  <span [class]="getStatusBadgeClass(project()!.status)">\r\n                    {{ getStatusLabel(project()!.status) }}\r\n                </span>\r\n                </li>\r\n              }\r\n\r\n              @if (project()!.budget) {\r\n                <li class="flex justify-between">\r\n                  <span class="text-neutral-500">Budget</span>\r\n                  <span class="font-medium text-neutral-900">\r\n                    {{ formatBudget(project()!.budget!) }}\r\n                  </span>\r\n                </li>\r\n              }\r\n\r\n              @if (project()!.startDate) {\r\n                <li class="flex justify-between">\r\n                  <span class="text-neutral-500">D\xE9but</span>\r\n                  <span class="font-medium text-neutral-900">\r\n                    {{ formatDate(project()!.startDate!) }}\r\n                  </span>\r\n                </li>\r\n              }\r\n\r\n              @if (project()!.endDate) {\r\n                <li class="flex justify-between">\r\n                  <span class="text-neutral-500">Fin pr\xE9vue</span>\r\n                  <span class="font-medium text-neutral-900">\r\n                    {{ formatDate(project()!.endDate!) }}\r\n                  </span>\r\n                </li>\r\n              }\r\n\r\n            </ul>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n}\r\n\r\n@else {\r\n  <div class="py-20 text-center">\r\n    <h2 class="text-lg font-semibold text-neutral-600">Projet non trouv\xE9</h2>\r\n  </div>\r\n}\r\n' }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailProjetsComponent, { className: "DetailProjetsComponent", filePath: "src/app/features/projects/detail-projets/detail-projets.component.ts", lineNumber: 14 });
})();
export {
  DetailProjetsComponent
};
//# sourceMappingURL=chunk-XB6O2MTE.js.map
