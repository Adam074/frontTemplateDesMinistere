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
  environment,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/articles/articles/articles.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/articles", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ArticlesComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ArticlesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ArticlesComponent_Conditional_16_For_2_Template, 5, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ArticlesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 21);
    \u0275\u0275text(4, "Aucun article trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function ArticlesComponent_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 26);
  }
  if (rf & 2) {
    const article_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(article_r1.featuredImage), \u0275\u0275sanitizeUrl)("alt", article_r1.title);
  }
}
function ArticlesComponent_Conditional_18_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "path", 20);
    \u0275\u0275elementEnd();
  }
}
function ArticlesComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "div", 25);
    \u0275\u0275conditionalCreate(2, ArticlesComponent_Conditional_18_For_2_Conditional_2_Template, 1, 2, "img", 26)(3, ArticlesComponent_Conditional_18_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 30)(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 33)(17, "span", 34);
    \u0275\u0275text(18, " En savoir plus ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, article_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(article_r1.featuredImage ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", article_r1.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(article_r1.publishedAt || article_r1.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCategoryLabel(article_r1.category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", article_r1.viewCount, " vues");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", article_r1.summary, " ");
  }
}
function ArticlesComponent_Conditional_18_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ArticlesComponent_Conditional_18_Conditional_3_For_5_Template_button_click_0_listener() {
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
    \u0275\u0275classMap(page_r5 === ctx_r1.currentPage() ? "bg-[#00843B] text-white" : "border border-[#00843B] text-[#00843B] hover:bg-[#E6F5EB]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r5 + 1, " ");
  }
}
function ArticlesComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "nav", 30)(2, "button", 35);
    \u0275\u0275listener("click", function ArticlesComponent_Conditional_18_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275text(3, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ArticlesComponent_Conditional_18_Conditional_3_For_5_Template, 2, 3, "button", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275listener("click", function ArticlesComponent_Conditional_18_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(7, " \u203A ");
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
function ArticlesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, ArticlesComponent_Conditional_18_For_2_Template, 19, 9, "a", 23, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ArticlesComponent_Conditional_18_Conditional_3_Template, 8, 2, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.articles());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() ? 3 : -1);
  }
}
var ArticlesComponent = class _ArticlesComponent {
  apiService;
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  searchQuery = "";
  API_URL = environment.FileUrl;
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles() {
    this.loading.set(true);
    this.apiService.getPublishedArticles(this.currentPage(), 9).subscribe({
      next: (response) => {
        if (response.success) {
          const actualiteArticles = response.data.content.filter((article) => article.category === "ACTUALITE");
          this.articles.set(actualiteArticles);
          console.log(this.articles());
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadArticles();
      return;
    }
    this.loading.set(true);
    this.apiService.searchArticles(this.searchQuery, 0, 9).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
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
      this.loadArticles();
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
  static \u0275fac = function ArticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArticlesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticlesComponent, selectors: [["app-articles"]], decls: 19, vars: 2, consts: [[1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-white/90", "text-lg", "max-w-2xl"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8", "p-4"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un article...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "bg-[#00843B]", "hover:bg-[#006B30]", "text-white", "font-semibold", "px-6", "py-2", "rounded-lg", "transition-colors", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-[#6FCF97]", "focus:ring-offset-2", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-48", "bg-neutral-200", "rounded-lg", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/4", "mb-3"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "card", "group", "cursor-pointer", "flex", "flex-col", "h-full", "bg-white", "rounded-lg", "shadow", "hover:shadow-lg", "transition", "overflow-hidden", 3, "routerLink"], [1, "flex", "justify-center", "mt-10"], [1, "h-48", "bg-[#E6F5EB]", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-[#00843B]"], [1, "text-xl", "font-bold", "text-black", "mb-2", "px-4", "pt-2", "line-clamp-1"], [1, "flex", "justify-between", "items-center", "text-sm", "text-neutral-500", "px-4", "mb-2"], [1, "flex", "items-center", "gap-2"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-[#E6F5EB]", "text-[#00843B]"], [1, "text-neutral-700", "text-sm", "leading-relaxed", "text-justify", "px-4", "mb-4", "line-clamp-4"], [1, "mt-auto", "px-4", "pb-4", "flex", "justify-end"], [1, "bg-[#00843B]", "text-white", "px-4", "py-2", "rounded-lg", "text-sm", "font-semibold", "hover:bg-[#006B30]", "transition"], [1, "btn-ghost", "disabled:opacity-50", "px-3", "py-1", "rounded-lg", "border", "border-[#00843B]", "hover:bg-[#E6F5EB]", 3, "click", "disabled"], [1, "w-10", "h-10", "rounded-lg", "font-semibold", "transition", 3, "class"], [1, "btn-ghost", "disabled:opacity-50", "px-3", "py-1", "rounded-lg", "border", "border-[#00843B]", "hover:bg-[#E6F5EB']", 3, "click", "disabled"], [1, "w-10", "h-10", "rounded-lg", "font-semibold", "transition", 3, "click"]], template: function ArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Actualit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Retrouvez toutes les actualit\xE9s, communiqu\xE9s et \xE9v\xE9nements du Minist\xE8re de la Transition Digitale. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1)(8, "div", 5)(9, "div", 6)(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ArticlesComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ArticlesComponent_Template_input_keyup_enter_13_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ArticlesComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15, " Rechercher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, ArticlesComponent_Conditional_16_Template, 3, 1, "div", 12)(17, ArticlesComponent_Conditional_17_Template, 7, 0, "div", 13)(18, ArticlesComponent_Conditional_18_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 16 : ctx.articles().length === 0 ? 17 : 18);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticlesComponent, [{
    type: Component,
    args: [{ selector: "app-articles", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<!-- Hero -->\r
<section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r
  <div class="container mx-auto px-4">\r
    <h1 class="text-4xl font-bold mb-4" style="color: white;">Actualit\xE9s</h1>\r
    <p class="text-white/90 text-lg max-w-2xl">\r
      Retrouvez toutes les actualit\xE9s, communiqu\xE9s et \xE9v\xE9nements du Minist\xE8re de la Transition Digitale.\r
    </p>\r
  </div>\r
</section>\r
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
            [(ngModel)]="searchQuery"\r
            (keyup.enter)="search()"\r
            placeholder="Rechercher un article..."\r
            class="input pl-10"\r
          >\r
        </div>\r
        <button\r
          (click)="search()"\r
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
    } @else if (articles().length === 0) {\r
      <div class="text-center py-16">\r
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
        </svg>\r
        <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun article trouv\xE9</h3>\r
        <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>\r
      </div>\r
    } @else {\r
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
        @for (article of articles(); track article.id) {\r
          <a [routerLink]="['/articles', article.id]" class="card group cursor-pointer flex flex-col h-full bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">\r
            \r
            <!-- Image -->\r
          <div class="h-48 bg-[#E6F5EB] flex items-center justify-center overflow-hidden">\r
            @if (article.featuredImage) {\r
              <img\r
                [src]="getImageUrl(article.featuredImage)"\r
                [alt]="article.title"\r
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"\r
              > \r
\r
              \r
            } @else {\r
              <svg class="w-16 h-16 text-[#00843B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z">\r
                </path>\r
              </svg>\r
            }\r
          </div>\r
\r
\r
\r
            <!-- Titre -->\r
             <h3 class="text-xl font-bold text-black mb-2 px-4 pt-2 line-clamp-1">\r
                {{ article.title }}\r
            </h3>\r
\r
\r
\r
            <!-- Date, statut et vues -->\r
            <div class="flex justify-between items-center text-sm text-neutral-500 px-4 mb-2">\r
              <span>{{ formatDate(article.publishedAt || article.createdAt) }}</span>\r
              <span class="flex items-center gap-2">\r
                <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#E6F5EB] text-[#00843B]">\r
                  {{ getCategoryLabel(article.category) }}\r
                </span>\r
                <span>{{ article.viewCount }} vues</span>\r
              </span>\r
            </div>\r
\r
            <p class="text-neutral-700 text-sm leading-relaxed text-justify px-4 mb-4 line-clamp-4">\r
            {{ article.summary }}\r
            </p>\r
\r
            <!-- R\xE9sum\xE9 \r
            <p class="text-neutral-700 text-sm px-4 mb-4 line-clamp-4">\r
              {{ article.summary }}\r
            </p>-->\r
\r
            <!-- Bouton "En savoir plus" -->\r
            <div class="mt-auto px-4 pb-4 flex justify-end">\r
              <span class="bg-[#00843B] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#006B30] transition">\r
                En savoir plus\r
              </span>\r
            </div>\r
\r
          </a>\r
        }\r
      </div>\r
\r
      <!-- Pagination -->\r
      @if (totalPages()) {\r
        <div class="flex justify-center mt-10">\r
          <nav class="flex items-center gap-2">\r
            <button\r
              (click)="goToPage(currentPage() - 1)"\r
              [disabled]="currentPage() === 0"\r
              class="btn-ghost disabled:opacity-50 px-3 py-1 rounded-lg border border-[#00843B] hover:bg-[#E6F5EB]">\r
              \u2039\r
            </button>\r
\r
            @for (page of getPageNumbers(); track page) {\r
              <button\r
                (click)="goToPage(page)"\r
                class="w-10 h-10 rounded-lg font-semibold transition"\r
                [class]="page === currentPage()\r
                  ? 'bg-[#00843B] text-white'\r
                  : 'border border-[#00843B] text-[#00843B] hover:bg-[#E6F5EB]'">\r
                {{ page + 1 }}\r
              </button>\r
            }\r
\r
            <button\r
              (click)="goToPage(currentPage() + 1)"\r
              [disabled]="currentPage() === totalPages() - 1"\r
              class="btn-ghost disabled:opacity-50 px-3 py-1 rounded-lg border border-[#00843B] hover:bg-[#E6F5EB']">\r
              \u203A\r
            </button>\r
          </nav>\r
        </div>\r
      }\r
    }\r
  </div>\r
  \r
</section>\r
` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticlesComponent, { className: "ArticlesComponent", filePath: "src/app/features/articles/articles/articles.component.ts", lineNumber: 16 });
})();
export {
  ArticlesComponent
};
//# sourceMappingURL=chunk-F4DEKJHX.js.map
