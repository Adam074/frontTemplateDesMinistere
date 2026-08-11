import {
  RouterLink,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/admin/dashboard/dashbord/dashbord.component.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ({ action: "new" });
function DashbordComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function DashbordComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DashbordComponent_Conditional_6_For_2_Template, 4, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DashbordComponent_Conditional_7_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.stats().pendingContacts, " en attente");
  }
}
function DashbordComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 12)(6, "p", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9, "Articles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 16);
    \u0275\u0275element(15, "path", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 12)(17, "p", 1);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 13);
    \u0275\u0275text(20, "Projets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 8)(24, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 20);
    \u0275\u0275element(26, "path", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "div", 12)(28, "p", 1);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 13);
    \u0275\u0275text(31, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 22);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 10);
    \u0275\u0275element(37, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 12)(39, "p", 1);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 13);
    \u0275\u0275text(42, "Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, DashbordComponent_Conditional_7_Conditional_43_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 24)(45, "div", 25)(46, "h3", 26);
    \u0275\u0275text(47, "Progression des projets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 27)(49, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 29);
    \u0275\u0275element(51, "circle", 30)(52, "circle", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "div", 32)(54, "span", 33);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 12)(58, "p", 34);
    \u0275\u0275text(59, "Progression moyenne des projets en cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 35)(61, "span", 36);
    \u0275\u0275element(62, "span", 37);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 36);
    \u0275\u0275element(65, "span", 38);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "div", 25)(68, "h3", 26);
    \u0275\u0275text(69, "Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 27)(71, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 40);
    \u0275\u0275element(73, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 12)(75, "p", 42);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p", 2);
    \u0275\u0275text(78, "Utilisateurs enregistr\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 43);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 44)(82, "h3", 26);
    \u0275\u0275text(83, "Actions rapides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 45)(85, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(86, "svg", 47);
    \u0275\u0275element(87, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(88, "p", 49);
    \u0275\u0275text(89, "Nouvel article");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(91, "svg", 51);
    \u0275\u0275element(92, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(93, "p", 52);
    \u0275\u0275text(94, "Nouveau projet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(96, "svg", 54);
    \u0275\u0275element(97, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(98, "p", 56);
    \u0275\u0275text(99, "Ajouter document");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "a", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(101, "svg", 58);
    \u0275\u0275element(102, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(103, "p", 59);
    \u0275\u0275text(104, "Voir messages");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalArticles);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().publishedArticles, " publi\xE9s");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalProjects);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().activeProjects, " en cours");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalDocuments);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().publicDocuments, " publics");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalContacts);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.stats().pendingContacts > 0 ? 43 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275attribute("stroke-dasharray", 251.2)("stroke-dashoffset", 251.2 - 251.2 * (ctx_r0.stats().averageProjectProgress || 0) / 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(56, 18, ctx_r0.stats().averageProjectProgress || 0, "1.0-0"), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().activeProjects, " en cours ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.stats().completedProjects, " termin\xE9s ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats().totalUsers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.stats().activeUsers, " actifs");
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(21, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(23, _c1));
  }
}
var DashbordComponent = class _DashbordComponent {
  apiService;
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.apiService.getDashboardStats().subscribe({
      next: (response) => {
        if (response.success) {
          this.stats.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function DashbordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashbordComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashbordComponent, selectors: [["app-dashbord"]], decls: 8, vars: 1, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "card", "animate-pulse", "p-6", "rounded-xl", "shadow"], [1, "h-12", "w-12", "bg-neutral-200", "rounded-full", "mb-4"], [1, "h-6", "bg-neutral-200", "rounded", "w-1/2", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-3/4"], [1, "card", "p-6", "rounded-xl", "shadow", "flex", "items-center", "gap-4"], [1, "bg-primary-100", "p-3", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-primary-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "flex-1"], [1, "text-sm", "text-neutral-500"], [1, "text-xs", "text-primary-600"], [1, "bg-accent-100", "p-3", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-accent-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"], [1, "text-xs", "text-accent-600"], [1, "bg-secondary-100", "p-3", "rounded-full", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-secondary-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "text-xs", "text-secondary-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "mt-6"], [1, "card", "p-6", "rounded-xl", "shadow"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-4"], [1, "flex", "items-center", "gap-4"], [1, "relative", "w-24", "h-24"], [1, "w-24", "h-24", "transform", "-rotate-90"], ["cx", "48", "cy", "48", "r", "40", "stroke", "#e5e5e5", "stroke-width", "8", "fill", "none"], ["cx", "48", "cy", "48", "r", "40", "stroke", "#009E49", "stroke-width", "8", "fill", "none", "stroke-linecap", "round"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "text-xl", "font-bold", "text-neutral-900"], [1, "text-neutral-600", "mb-2"], [1, "flex", "gap-4", "text-sm"], [1, "flex", "items-center", "gap-1"], [1, "w-3", "h-3", "rounded-full", "bg-accent-500"], [1, "w-3", "h-3", "rounded-full", "bg-green-700"], [1, "stat-icon-primary", "w-16", "h-16", "flex", "items-center", "justify-center", "rounded-full", "bg-primary-100"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-primary-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], [1, "text-3xl", "font-bold", "text-neutral-900"], [1, "text-sm", "text-primary-600"], [1, "card", "p-6", "rounded-xl", "shadow", "mt-6"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["routerLink", "/admin/articles", 1, "p-4", "bg-primary-50", "rounded-xl", "text-center", "hover:bg-primary-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-primary-600", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "text-sm", "font-medium", "text-primary-700"], ["routerLink", "/admin/projects", 1, "p-4", "bg-accent-50", "rounded-xl", "text-center", "hover:bg-accent-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-accent-600", "mx-auto", "mb-2"], [1, "text-sm", "font-medium", "text-accent-700"], ["routerLink", "/admin/documents", 1, "p-4", "bg-secondary-50", "rounded-xl", "text-center", "hover:bg-secondary-100", "transition-colors", 3, "queryParams"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-secondary-600", "mx-auto", "mb-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "text-sm", "font-medium", "text-secondary-700"], ["routerLink", "/admin/contacts", 1, "p-4", "bg-neutral-100", "rounded-xl", "text-center", "hover:bg-neutral-200", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-neutral-600", "mx-auto", "mb-2"], [1, "text-sm", "font-medium", "text-neutral-700"]], template: function DashbordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Vue d'ensemble de l'activit\xE9 du portail");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, DashbordComponent_Conditional_6_Template, 3, 1, "div", 3)(7, DashbordComponent_Conditional_7_Template, 105, 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.stats() ? 7 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashbordComponent, [{
    type: Component,
    args: [{ selector: "app-dashbord", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="space-y-6">\r
  <!-- Header -->\r
  <div>\r
    <h1 class="text-2xl font-bold text-neutral-900">Tableau de bord</h1>\r
    <p class="text-neutral-500">Vue d'ensemble de l'activit\xE9 du portail</p>\r
  </div>\r
\r
  @if (loading()) {\r
    <!-- Skeleton Loading -->\r
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
      @for (i of [1,2,3,4]; track i) {\r
        <div class="card animate-pulse p-6 rounded-xl shadow">\r
          <div class="h-12 w-12 bg-neutral-200 rounded-full mb-4"></div>\r
          <div class="h-6 bg-neutral-200 rounded w-1/2 mb-2"></div>\r
          <div class="h-4 bg-neutral-200 rounded w-3/4"></div>\r
        </div>\r
      }\r
    </div>\r
  } @else if (stats()) {\r
\r
    <!-- Stats Grid -->\r
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
\r
      <!-- Articles -->\r
      <div class="card p-6 rounded-xl shadow flex items-center gap-4">\r
        <div class="bg-primary-100 p-3 rounded-full flex items-center justify-center">\r
          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>\r
          </svg>\r
        </div>\r
        <div class="flex-1">\r
          <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalArticles }}</p>\r
          <p class="text-sm text-neutral-500">Articles</p>\r
          <p class="text-xs text-primary-600">{{ stats()!.publishedArticles }} publi\xE9s</p>\r
        </div>\r
      </div>\r
\r
      <!-- Projets -->\r
      <div class="card p-6 rounded-xl shadow flex items-center gap-4">\r
        <div class="bg-accent-100 p-3 rounded-full flex items-center justify-center">\r
          <svg class="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>\r
          </svg>\r
        </div>\r
        <div class="flex-1">\r
          <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalProjects }}</p>\r
          <p class="text-sm text-neutral-500">Projets</p>\r
          <p class="text-xs text-accent-600">{{ stats()!.activeProjects }} en cours</p>\r
        </div>\r
      </div>\r
\r
      <!-- Documents -->\r
      <div class="card p-6 rounded-xl shadow flex items-center gap-4">\r
        <div class="bg-secondary-100 p-3 rounded-full flex items-center justify-center">\r
          <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>\r
          </svg>\r
        </div>\r
        <div class="flex-1">\r
          <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalDocuments }}</p>\r
          <p class="text-sm text-neutral-500">Documents</p>\r
          <p class="text-xs text-secondary-600">{{ stats()!.publicDocuments }} publics</p>\r
        </div>\r
      </div>\r
\r
      <!-- Contacts -->\r
      <div class="card p-6 rounded-xl shadow flex items-center gap-4">\r
        <div class="bg-primary-100 p-3 rounded-full flex items-center justify-center">\r
          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
          </svg>\r
        </div>\r
        <div class="flex-1">\r
          <p class="text-2xl font-bold text-neutral-900">{{ stats()!.totalContacts }}</p>\r
          <p class="text-sm text-neutral-500">Messages</p>\r
          @if (stats()!.pendingContacts > 0) {\r
            <p class="text-xs text-secondary-600">{{ stats()!.pendingContacts }} en attente</p>\r
          }\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Second row: Progression + Utilisateurs -->\r
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">\r
\r
      <!-- Progression des projets -->\r
      <div class="card p-6 rounded-xl shadow">\r
        <h3 class="text-lg font-semibold text-neutral-900 mb-4">Progression des projets</h3>\r
        <div class="flex items-center gap-4">\r
          <div class="relative w-24 h-24">\r
            <svg class="w-24 h-24 transform -rotate-90">\r
              <circle cx="48" cy="48" r="40" stroke="#e5e5e5" stroke-width="8" fill="none"/>\r
              <circle cx="48" cy="48" r="40" stroke="#009E49" stroke-width="8" fill="none"\r
                [attr.stroke-dasharray]="251.2"\r
                [attr.stroke-dashoffset]="251.2 - (251.2 * (stats()!.averageProjectProgress || 0) / 100)"\r
                stroke-linecap="round"/>\r
            </svg>\r
            <div class="absolute inset-0 flex items-center justify-center">\r
              <span class="text-xl font-bold text-neutral-900">{{ (stats()!.averageProjectProgress || 0) | number:'1.0-0' }}%</span>\r
            </div>\r
          </div>\r
          <div class="flex-1">\r
            <p class="text-neutral-600 mb-2">Progression moyenne des projets en cours</p>\r
            <div class="flex gap-4 text-sm">\r
              <span class="flex items-center gap-1">\r
                <span class="w-3 h-3 rounded-full bg-accent-500"></span>\r
                {{ stats()!.activeProjects }} en cours\r
              </span>\r
              <span class="flex items-center gap-1">\r
                <span class="w-3 h-3 rounded-full bg-green-700"></span>\r
                {{ stats()!.completedProjects }} termin\xE9s\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Utilisateurs -->\r
      <div class="card p-6 rounded-xl shadow">\r
        <h3 class="text-lg font-semibold text-neutral-900 mb-4">Utilisateurs</h3>\r
        <div class="flex items-center gap-4">\r
          <div class="stat-icon-primary w-16 h-16 flex items-center justify-center rounded-full bg-primary-100">\r
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>\r
            </svg>\r
          </div>\r
          <div class="flex-1">\r
            <p class="text-3xl font-bold text-neutral-900">{{ stats()!.totalUsers }}</p>\r
            <p class="text-neutral-500">Utilisateurs enregistr\xE9s</p>\r
            <p class="text-sm text-primary-600">{{ stats()!.activeUsers }} actifs</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- Quick Actions -->\r
    <div class="card p-6 rounded-xl shadow mt-6">\r
      <h3 class="text-lg font-semibold text-neutral-900 mb-4">Actions rapides</h3>\r
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">\r
        <a routerLink="/admin/articles" [queryParams]="{action: 'new'}"\r
           class="p-4 bg-primary-50 rounded-xl text-center hover:bg-primary-100 transition-colors">\r
          <svg class="w-8 h-8 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          <p class="text-sm font-medium text-primary-700">Nouvel article</p>\r
        </a>\r
        <a routerLink="/admin/projects" [queryParams]="{action: 'new'}"\r
           class="p-4 bg-accent-50 rounded-xl text-center hover:bg-accent-100 transition-colors">\r
          <svg class="w-8 h-8 text-accent-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          <p class="text-sm font-medium text-accent-700">Nouveau projet</p>\r
        </a>\r
        <a routerLink="/admin/documents" [queryParams]="{action: 'new'}"\r
           class="p-4 bg-secondary-50 rounded-xl text-center hover:bg-secondary-100 transition-colors">\r
          <svg class="w-8 h-8 text-secondary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\r
          </svg>\r
          <p class="text-sm font-medium text-secondary-700">Ajouter document</p>\r
        </a>\r
        <a routerLink="/admin/contacts"\r
           class="p-4 bg-neutral-100 rounded-xl text-center hover:bg-neutral-200 transition-colors">\r
          <svg class="w-8 h-8 text-neutral-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
          </svg>\r
          <p class="text-sm font-medium text-neutral-700">Voir messages</p>\r
        </a>\r
      </div>\r
    </div>\r
\r
  }\r
</div>\r
` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashbordComponent, { className: "DashbordComponent", filePath: "src/app/features/admin/dashboard/dashbord/dashbord.component.ts", lineNumber: 14 });
})();
export {
  DashbordComponent
};
//# sourceMappingURL=chunk-HC27LYLU.js.map
