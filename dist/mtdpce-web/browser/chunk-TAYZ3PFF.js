import {
  RouterLink,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-IZU5KOS7.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/projects/projets/projets.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = (a0) => ["/projects", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ProjetsComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function ProjetsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProjetsComponent_Conditional_16_For_2_Template, 4, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ProjetsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 20);
    \u0275\u0275text(4, "Aucun projet trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function ProjetsComponent_Conditional_18_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", project_r1.partner, " ");
  }
}
function ProjetsComponent_Conditional_18_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatBudget(project_r1.budget), " ");
  }
}
function ProjetsComponent_Conditional_18_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "path", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(project_r1.endDate), " ");
  }
}
function ProjetsComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 24)(2, "div", 25)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30);
    \u0275\u0275element(13, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 31);
    \u0275\u0275conditionalCreate(15, ProjetsComponent_Conditional_18_For_2_Conditional_15_Template, 4, 1, "span", 32);
    \u0275\u0275conditionalCreate(16, ProjetsComponent_Conditional_18_For_2_Conditional_16_Template, 4, 1, "span", 32);
    \u0275\u0275conditionalCreate(17, ProjetsComponent_Conditional_18_For_2_Conditional_17_Template, 4, 1, "span", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c1, project_r1.id));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(project_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(project_r1.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r1.name, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getProgressBarColor(project_r1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getContrastTextColor(ctx_r1.getProgressBarColor(project_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r1.progressPercentage, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getProgressBarClass(project_r1));
    \u0275\u0275styleProp("width", project_r1.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(project_r1.partner ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r1.budget ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r1.endDate ? 17 : -1);
  }
}
function ProjetsComponent_Conditional_18_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ProjetsComponent_Conditional_18_Conditional_3_For_5_Template_button_click_0_listener() {
      const page_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(page_r5 === ctx_r1.currentPage() ? "px-3 py-2 rounded-lg bg-[#00843B] text-white font-medium" : "px-3 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 transition-colors");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r5 + 1, " ");
  }
}
function ProjetsComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "nav", 37)(2, "button", 38);
    \u0275\u0275listener("click", function ProjetsComponent_Conditional_18_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(3, " \xAB ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ProjetsComponent_Conditional_18_Conditional_3_For_5_Template, 2, 3, "button", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function ProjetsComponent_Conditional_18_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(7, " \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages() - 1);
  }
}
function ProjetsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ProjetsComponent_Conditional_18_For_2_Template, 18, 20, "a", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ProjetsComponent_Conditional_18_Conditional_3_Template, 8, 2, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.projects());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() > 1 ? 3 : -1);
  }
}
var ProjetsComponent = class _ProjetsComponent {
  apiService;
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
    this.loading.set(true);
    this.apiService.getPublicProjects(this.currentPage(), 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadProjects();
      return;
    }
    this.loading.set(true);
    this.apiService.searchProjects(this.searchQuery, 0, 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(0);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
      this.loadProjects();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  getPageNumbers() {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = [];
    let start = Math.max(0, current - 2);
    let end = Math.min(total - 1, current + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
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
  // Classe pour la barre de progression
  getProgressBarClass(project) {
    if (project.progressPercentage >= 80)
      return "bg-[#00843B] h-2 rounded-full";
    if (project.progressPercentage >= 50)
      return "bg-[#6FCF97] h-2 rounded-full";
    if (project.progressPercentage >= 20)
      return "bg-[#F2C94C] h-2 rounded-full";
    return "bg-[#EB5757] h-2 rounded-full";
  }
  // Formatage des dates
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
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
  static \u0275fac = function ProjetsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjetsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjetsComponent, selectors: [["app-projets"]], decls: 19, vars: 2, consts: [[1, "text-white", "py-16", 2, "background-color", "#00843B"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-primary-100", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un projet...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "px-4", "py-2", "bg-[#00843B]", "hover:bg-[#006830]", "text-white", "font-medium", "rounded-lg", "transition-colors", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "card", "group", "cursor-pointer", "p-6", "bg-white", "rounded-xl", "shadow", "hover:shadow-lg", "transition-shadow", 3, "routerLink"], [1, "flex", "justify-center", "mt-10"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex-1"], [1, "text-xl", "font-semibold", "text-neutral-900", "mt-2", "group-hover:text-[#00843B]", "transition-colors"], [1, "w-16", "h-16", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", "ml-4"], [1, "text-2xl", "font-bold"], [1, "text-neutral-500", "mb-4", "line-clamp-2"], [1, "w-full", "bg-neutral-200", "rounded-full", "h-2", "mb-4"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-sm", "text-neutral-400"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-2", "border", "rounded-lg", "bg-white", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [3, "class"], [3, "click"]], template: function ProjetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Les Grands Chantiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " D\xE9couvrez les projets et programmes du minist\xE8re pour la transformation digitale du Burkina Faso. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ProjetsComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ProjetsComponent_Template_input_keyup_enter_13_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ProjetsComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, ProjetsComponent_Conditional_16_Template, 3, 1, "div", 12)(17, ProjetsComponent_Conditional_17_Template, 7, 0, "div", 13)(18, ProjetsComponent_Conditional_18_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.projects().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjetsComponent, [{
    type: Component,
    args: [{ selector: "app-projets", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: ` <!-- Hero -->\r
   <section class="text-white py-16" style="background-color: #00843B;">\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-4xl font-bold mb-4" style="color: white;">Les Grands Chantiers</h1>\r
        <p class="text-primary-100 text-lg max-w-2xl">\r
          D\xE9couvrez les projets et programmes du minist\xE8re pour la transformation digitale du Burkina Faso.\r
        </p>\r
      </div>\r
    </section>\r
    \r
    <!-- Content -->\r
<section class="py-12 bg-neutral-50">\r
  <div class="container mx-auto px-4">\r
    <!-- Search -->\r
    <div class="card mb-8">\r
      <div class="flex flex-col md:flex-row gap-4">\r
        <div class="flex-1 relative">\r
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
          <input \r
            type="text" \r
            [(ngModel)]="searchQuery"\r
            (keyup.enter)="search()"\r
            placeholder="Rechercher un projet..."\r
            class="input pl-10">\r
        </div>\r
        <button (click)="search()" class="px-4 py-2 bg-[#00843B] hover:bg-[#006830] text-white font-medium rounded-lg transition-colors">\r
          Rechercher\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Projects Grid -->\r
    @if (loading()) {\r
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        @for (i of [1,2,3,4]; track i) {\r
          <div class="card animate-pulse">\r
            <div class="h-6 bg-neutral-200 rounded w-3/4 mb-4"></div>\r
            <div class="h-4 bg-neutral-200 rounded w-full mb-2"></div>\r
            <div class="h-4 bg-neutral-200 rounded w-2/3"></div>\r
          </div>\r
        }\r
      </div>\r
    } @else if (projects().length === 0) {\r
      <div class="text-center py-16">\r
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
        </svg>\r
        <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun projet trouv\xE9</h3>\r
        <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>\r
      </div>\r
    } @else {\r
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
        @for (project of projects(); track project.id) {\r
          <a [routerLink]="['/projects', project.id]" class="card group cursor-pointer p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">\r
            <div class="flex items-start justify-between mb-4">\r
              <div class="flex-1">\r
                <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>\r
                <h3 class="text-xl font-semibold text-neutral-900 mt-2 group-hover:text-[#00843B] transition-colors">\r
                  {{ project.name }}\r
                </h3>\r
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
      <!-- Pagination -->\r
      @if (totalPages() > 1) {\r
        <div class="flex justify-center mt-10">\r
          <nav class="flex items-center gap-2">\r
            <button \r
              (click)="goToPage(currentPage() - 1)"\r
              [disabled]="currentPage() === 0"\r
              class="px-3 py-2 border rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              &laquo;\r
            </button>\r
            @for (page of getPageNumbers(); track page) {\r
              <button \r
                (click)="goToPage(page)"\r
                [class]="page === currentPage() ? 'px-3 py-2 rounded-lg bg-[#00843B] text-white font-medium' \r
                                             : 'px-3 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 transition-colors'">\r
                {{ page + 1 }}\r
              </button>\r
            }\r
            <button \r
              (click)="goToPage(currentPage() + 1)"\r
              [disabled]="currentPage() === totalPages() - 1"\r
              class="px-3 py-2 border rounded-lg bg-white hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              &raquo;\r
            </button>\r
          </nav>\r
        </div>\r
      }\r
    }\r
  </div>\r
</section>\r
` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjetsComponent, { className: "ProjetsComponent", filePath: "src/app/features/projects/projets/projets.component.ts", lineNumber: 15 });
})();
export {
  ProjetsComponent
};
//# sourceMappingURL=chunk-TAYZ3PFF.js.map
