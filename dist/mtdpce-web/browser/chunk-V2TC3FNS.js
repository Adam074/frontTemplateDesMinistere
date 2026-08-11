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
  NgForOf,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/articles/detail-articles/detail-articles.component.ts
var _c0 = (a0) => ["/articles", a0];
function DetailArticlesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275element(7, "div", 8)(8, "div", 8)(9, "div", 9);
    \u0275\u0275elementEnd()()()();
  }
}
function DetailArticlesComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().authorName, " ");
  }
}
function DetailArticlesComponent_Conditional_1_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().summary, " ");
  }
}
function DetailArticlesComponent_Conditional_1_Conditional_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "img", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.article().images[0].imageUrl), \u0275\u0275sanitizeUrl)("alt", ctx_r0.article().title);
  }
}
function DetailArticlesComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DetailArticlesComponent_Conditional_1_Conditional_36_Conditional_0_Template, 2, 2, "div", 48);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.article()) == null ? null : tmp_2_0.images) && ctx_r0.article().images.length > 0 ? 0 : -1);
  }
}
function DetailArticlesComponent_Conditional_1_div_56_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "img", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agenda_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getImageUrl(agenda_r2.images[0].imageUrl), \u0275\u0275sanitizeUrl);
  }
}
function DetailArticlesComponent_Conditional_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "a", 51);
    \u0275\u0275conditionalCreate(2, DetailArticlesComponent_Conditional_1_div_56_Conditional_2_Template, 2, 1, "div", 52);
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54)(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const agenda_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, agenda_r2.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(agenda_r2.images && agenda_r2.images.length > 0 ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", agenda_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", agenda_r2.summary, " ");
  }
}
function DetailArticlesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 2)(2, "div", 11)(3, "a", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 13);
    \u0275\u0275element(5, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Retour aux actualit\xE9s ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h1", 15);
    \u0275\u0275text(8, " D\xE9tail Actualit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275conditionalCreate(10, DetailArticlesComponent_Conditional_1_Conditional_10_Template, 4, 1, "span", 17);
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 18);
    \u0275\u0275element(13, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 18);
    \u0275\u0275element(17, "path", 20)(18, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "section", 22)(21, "div", 2)(22, "div", 23)(23, "div", 24)(24, "h1", 25);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "hr", 26);
    \u0275\u0275elementStart(27, "div", 27)(28, "span", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 28);
    \u0275\u0275element(30, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "hr", 26);
    \u0275\u0275conditionalCreate(35, DetailArticlesComponent_Conditional_1_Conditional_35_Template, 2, 1, "p", 30);
    \u0275\u0275conditionalCreate(36, DetailArticlesComponent_Conditional_1_Conditional_36_Template, 1, 1);
    \u0275\u0275elementStart(37, "article", 31);
    \u0275\u0275element(38, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 33)(40, "h3", 34);
    \u0275\u0275text(41, "Partager cet article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 35)(43, "button", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 37);
    \u0275\u0275element(45, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "button", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 37);
    \u0275\u0275element(48, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "button", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 37);
    \u0275\u0275element(51, "path", 42);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "aside", 43)(53, "h3", 44);
    \u0275\u0275text(54, "Actualit\xE9s r\xE9centes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 45);
    \u0275\u0275template(56, DetailArticlesComponent_Conditional_1_div_56_Template, 9, 6, "div", 46);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.article().authorName ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.article().publishedAt || ctx_r0.article().createdAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().viewCount, " vues ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.article().publishedAt || ctx_r0.article().createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCategoryLabel(ctx_r0.article().category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.article().summary ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r0.article()) == null ? null : tmp_8_0.category) === "ACTUALITE" ? 36 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.formatContent(ctx_r0.article().content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.agendas());
  }
}
function DetailArticlesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 60);
    \u0275\u0275text(4, "Article non trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6, "L'article que vous recherchez n'existe pas ou a \xE9t\xE9 supprim\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 62);
    \u0275\u0275text(8, "Voir toutes les actualit\xE9s");
    \u0275\u0275elementEnd()();
  }
}
var DetailArticlesComponent = class _DetailArticlesComponent {
  route;
  apiService;
  API_URL = environment.FileUrl;
  article = signal(null, ...ngDevMode ? [{ debugName: "article" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  agendas = signal([], ...ngDevMode ? [{ debugName: "agendas" }] : []);
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadArticle(+id);
    }
    this.loadArticles();
  }
  loadArticle(id) {
    this.apiService.getPublishedArticleById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.article.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
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
  formatContent1(content) {
    if (!content)
      return "";
    return content.split("\n\n").map((p) => `<p>${p}</p>`).join("");
  }
  formatContent(content) {
    if (!content)
      return "";
    content = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const paragraphs = content.split(/\n+/);
    return paragraphs.map((p) => `<p>${p.trim()}</p>`).join("");
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  loadArticles() {
    this.loading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        if (response.success) {
          const actualiteArticles = response.data.content.filter((article) => article.category === "ACTUALITE").sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 5);
          this.agendas.set(actualiteArticles);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  loadArticles1() {
    this.loading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        if (response.success) {
          const actualiteArticles = response.data.content.filter((article) => article.category === "ACTUALITE");
          this.agendas.set(actualiteArticles);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function DetailArticlesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailArticlesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailArticlesComponent, selectors: [["app-detail-articles"]], decls: 3, vars: 1, consts: [[1, "py-20"], [1, "py-20", "text-center"], [1, "container", "mx-auto", "px-4"], [1, "max-w-3xl", "mx-auto", "animate-pulse"], [1, "h-8", "bg-neutral-200", "rounded", "w-1/4", "mb-4"], [1, "h-12", "bg-neutral-200", "rounded", "w-3/4", "mb-6"], [1, "h-64", "bg-neutral-200", "rounded-xl", "mb-8"], [1, "space-y-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], [1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-12"], [1, "max-w-3xl"], ["routerLink", "/articles", 1, "inline-flex", "items-center", "text-white/70", "hover:text-white", "mb-4", "transition-colors", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 19l-7-7m0 0l7-7m-7 7h18"], [1, "text-3xl", "lg:text-4xl", "font-bold", "mb-4", "text-white"], [1, "flex", "flex-wrap", "items-center", "gap-4", "text-white/80", "text-sm"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "py-12", "bg-neutral-50"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-6"], [1, "text-3xl", "lg:text-4xl", "font-bold", "text-black", "leading-tight"], [1, "border-t-2", "border-gray-300", "my-2"], [1, "flex", "items-center", "gap-4", "text-sm", "text-neutral-500", "mb-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "inline-block"], [1, "px-2", "py-0.5", "bg-[#00843B]/10", "text-[#00843B]", "font-semibold", "rounded-full"], [1, "text-black", "text-lg", "leading-relaxed", "text-justify", "mb-6"], [1, "max-w-none", "text-black", "content-article", "text-base", "leading-relaxed", "text-justify"], [3, "innerHTML"], [1, "mt-12", "pt-8", "border-t", "border-neutral-200"], [1, "text-lg", "font-semibold", "text-neutral-900", "mb-4"], [1, "flex", "gap-3"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-full", "bg-[#1DA1F2]", "hover:opacity-80", "transition"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["d", "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-full", "bg-[#1877F2]", "hover:opacity-80", "transition"], ["d", "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-full", "bg-[#0077B5]", "hover:opacity-80", "transition"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], [1, "space-y-6"], [1, "text-xl", "font-bold", "text-neutral-900", "mb-4"], [1, "flex", "flex-col", "justify-between", "space-y-6"], ["class", "bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group", 4, "ngFor", "ngForOf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "rounded-xl", "overflow-hidden", "shadow-lg", "mb-6"], [1, "w-full", "h-auto", "object-cover", 3, "src", "alt"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-lg", "hover:shadow-2xl", "transition-shadow", "cursor-pointer", "group"], [1, "flex", "items-center", "gap-4", "cursor-pointer", 3, "routerLink"], [1, "flex-shrink-0", "w-16", "h-16", "flex", "items-center", "justify-center"], [1, "flex-1"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-sm", "font-medium", "text-[rgb(231,76,60)]"], [1, "text-slate-700", "font-medium", "line-clamp-2"], ["alt", "image agenda", 1, "w-16", "h-16", "object-cover", "rounded-md", 3, "src"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-semibold", "text-neutral-700", "mb-2"], [1, "text-neutral-500", "mb-6"], ["routerLink", "/articles", 1, "btn-primary"]], template: function DetailArticlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DetailArticlesComponent_Conditional_0_Template, 10, 0, "div", 0)(1, DetailArticlesComponent_Conditional_1_Template, 57, 10)(2, DetailArticlesComponent_Conditional_2_Template, 9, 0, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.article() ? 1 : 2);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ["\n\n  .content-article p {\n  margin-bottom: 1.5em;\n  text-align: justify;\n  line-height: 1.6;\n}\n  .content-article {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n  .content-article img {\n  max-width: 100%;\n  height: auto;\n}\n  .content-article p {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-articles.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailArticlesComponent, [{
    type: Component,
    args: [{ selector: "app-detail-articles", standalone: true, imports: [CommonModule, RouterModule], template: `@if (loading()) {\r
      <div class="py-20">\r
        <div class="container mx-auto px-4">\r
          <div class="max-w-3xl mx-auto animate-pulse">\r
            <div class="h-8 bg-neutral-200 rounded w-1/4 mb-4"></div>\r
            <div class="h-12 bg-neutral-200 rounded w-3/4 mb-6"></div>\r
            <div class="h-64 bg-neutral-200 rounded-xl mb-8"></div>\r
            <div class="space-y-4">\r
              <div class="h-4 bg-neutral-200 rounded w-full"></div>\r
              <div class="h-4 bg-neutral-200 rounded w-full"></div>\r
              <div class="h-4 bg-neutral-200 rounded w-2/3"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    } @else if (article()) {\r
      <!-- Hero -->\r
    <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-12">\r
        <div class="container mx-auto px-4">\r
            <div class="max-w-3xl">\r
\r
            <!-- Lien retour -->\r
            <a routerLink="/articles"\r
                class="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors font-medium">\r
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>\r
                </svg>\r
                Retour aux actualit\xE9s\r
            </a>\r
\r
            <!-- Badge cat\xE9gorie \r
            <span class="inline-block bg-white/20 text-white px-3 py-1 rounded-full mb-4 text-sm font-semibold">\r
                {{ getCategoryLabel(article()!.category) }}\r
            </span>-->\r
\r
            <!-- Titre -->\r
            <h1 class="text-3xl lg:text-4xl font-bold mb-4 text-white">\r
                 <!--{{ article()!.title }}-->  D\xE9tail Actualit\xE9\r
            </h1>\r
\r
            <!-- Meta info: auteur, date, vues -->\r
            <div class="flex flex-wrap items-center gap-4 text-white/80 text-sm">\r
\r
                @if (article()!.authorName) {\r
                <span class="flex items-center gap-1">\r
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                    </svg>\r
                    {{ article()!.authorName }}\r
                </span>\r
                }\r
\r
                <span class="flex items-center gap-1">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>\r
                </svg>\r
                {{ formatDate(article()!.publishedAt || article()!.createdAt) }}\r
                </span>\r
\r
                <span class="flex items-center gap-1">\r
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                </svg>\r
                {{ article()!.viewCount }} vues\r
                </span>\r
\r
            </div>\r
            </div>\r
        </div>\r
    </section>\r
\r
      \r
      <!-- Content -->\r
    <section class="py-12 bg-neutral-50">\r
        <div class="container mx-auto px-4">\r
\r
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">\r
            <!-- Contenu principal \xE0 gauche -->\r
            <div class="lg:col-span-2 space-y-6">\r
\r
            <!-- Titre -->\r
            <h1 class="text-3xl lg:text-4xl font-bold text-black leading-tight">\r
                {{ article()!.title }}\r
            </h1>\r
\r
            <!-- Ligne sous le titre -->\r
            <hr class="border-t-2 border-gray-300 my-2">\r
\r
            <!-- Date et statut (m\xEAme ligne) -->\r
            <div class="flex items-center gap-4 text-sm text-neutral-500 mb-2">\r
                <!-- Date -->\r
                <span class="flex items-center gap-1">\r
                <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />\r
                </svg>\r
                {{ formatDate(article()!.publishedAt || article()!.createdAt) }}\r
                </span>\r
\r
                <!-- Statut -->\r
                <span class="px-2 py-0.5 bg-[#00843B]/10 text-[#00843B] font-semibold rounded-full">\r
                {{ getCategoryLabel(article()!.category) }}\r
                </span>\r
            </div>\r
\r
            <!-- Ligne apr\xE8s date/statut -->\r
            <hr class="border-t-2 border-gray-300 my-2">\r
\r
            <!-- R\xE9sum\xE9 -->\r
            @if (article()!.summary) {\r
                <p class="text-black text-lg leading-relaxed text-justify mb-6">\r
                {{ article()!.summary }}\r
                </p>\r
            }\r
\r
            \r
\r
\r
            <!-- Image en grand -->\r
             @if (article()?.category === 'ACTUALITE') {\r
  \r
            @if (article()?.images && article()!.images.length > 0) {\r
                <div class="rounded-xl overflow-hidden shadow-lg mb-6">\r
                <img \r
                    [src]="getImageUrl(article()!.images[0].imageUrl)" \r
                    [alt]="article()!.title" \r
                    class="w-full h-auto object-cover">\r
                </div>\r
            } \r
\r
            }\r
            \r
\r
            <!-- Contenu d\xE9taill\xE9 -->\r
          <!-- Contenu d\xE9taill\xE9 -->\r
            <article class="max-w-none text-black content-article text-base leading-relaxed text-justify">\r
            <div [innerHTML]="formatContent(article()!.content)"></div>\r
            </article>\r
\r
\r
            <!-- Share -->\r
            <!-- Partager cet article -->\r
            <div class="mt-12 pt-8 border-t border-neutral-200">\r
            <h3 class="text-lg font-semibold text-neutral-900 mb-4">Partager cet article</h3>\r
            \r
\r
\r
            <div class="flex gap-3">\r
                <!-- Twitter -->\r
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] hover:opacity-80 transition">\r
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">\r
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>\r
                </svg>\r
                </button>\r
\r
                <!-- Facebook -->\r
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition">\r
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">\r
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>\r
                </svg>\r
                </button>\r
\r
                <!-- LinkedIn -->\r
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] hover:opacity-80 transition">\r
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">\r
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>\r
                </svg>\r
                </button>\r
            </div>\r
            </div>\r
\r
\r
\r
\r
            </div>\r
\r
\r
\r
            <!-- Sidebar droite: 5 actualit\xE9s r\xE9centes -->\r
            <aside class="space-y-6">\r
                <h3 class="text-xl font-bold text-neutral-900 mb-4">Actualit\xE9s r\xE9centes</h3>\r
                 <div class="flex flex-col justify-between space-y-6">\r
                    \r
\r
                    <div *ngFor="let agenda of agendas()" \r
                        class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group">\r
\r
                        <a class="flex items-center gap-4 cursor-pointer" [routerLink]="['/articles', agenda.id]">\r
\r
                        <!-- Date -->\r
                          @if (agenda.images && agenda.images.length > 0) {\r
                        <div class="flex-shrink-0 w-16 h-16 flex items-center justify-center">\r
                          \r
                            <img \r
                                [src]="getImageUrl(agenda.images[0].imageUrl)" \r
                                alt="image agenda"\r
                                class="w-16 h-16 object-cover rounded-md"\r
                            />\r
                            \r
                        </div>\r
                        } \r
\r
                        <div class="flex-1">\r
\r
                            <!-- Title + Status -->\r
                            <div class="flex justify-between items-center mb-2">\r
                            <span class="text-sm font-medium text-[rgb(231,76,60)]">\r
                                {{ agenda.title }}\r
                            </span>\r
\r
                            \r
                            </div>\r
\r
                            <!-- Summary -->\r
                            <p class="text-slate-700 font-medium line-clamp-2">\r
                            {{ agenda.summary }}\r
                            </p>\r
\r
                        </div>\r
                       </a>\r
\r
                    </div>\r
\r
                \r
\r
                    \r
                    \r
                    \r
\r
                   \r
                </div>\r
            \r
            </aside>\r
\r
            </div>\r
\r
        </div>\r
    </section>\r
\r
    } @else {\r
      <div class="py-20 text-center">\r
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
        </svg>\r
        <h2 class="text-xl font-semibold text-neutral-700 mb-2">Article non trouv\xE9</h2>\r
        <p class="text-neutral-500 mb-6">L'article que vous recherchez n'existe pas ou a \xE9t\xE9 supprim\xE9.</p>\r
        <a routerLink="/articles" class="btn-primary">Voir toutes les actualit\xE9s</a>\r
      </div>\r
    }`, styles: ["/* src/app/features/articles/detail-articles/detail-articles.component.scss */\n::ng-deep .content-article p {\n  margin-bottom: 1.5em;\n  text-align: justify;\n  line-height: 1.6;\n}\n::ng-deep .content-article {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n::ng-deep .content-article img {\n  max-width: 100%;\n  height: auto;\n}\n::ng-deep .content-article p {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-articles.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailArticlesComponent, { className: "DetailArticlesComponent", filePath: "src/app/features/articles/detail-articles/detail-articles.component.ts", lineNumber: 15 });
})();
export {
  DetailArticlesComponent
};
//# sourceMappingURL=chunk-V2TC3FNS.js.map
