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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/admin/article/detail-article/detail-article.component.ts
function DetailArticleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "div", 9)(8, "div", 9)(9, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
}
function DetailArticleComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().summary, " ");
  }
}
function DetailArticleComponent_Conditional_1_div_21_ng_container_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const art_r3 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.getImageUrl(img_r2.imageUrl), \u0275\u0275sanitizeUrl)("alt", art_r3.title);
  }
}
function DetailArticleComponent_Conditional_1_div_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275template(2, DetailArticleComponent_Conditional_1_div_21_ng_container_1_img_2_Template, 1, 2, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const art_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", art_r3.images);
  }
}
function DetailArticleComponent_Conditional_1_div_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 33);
    \u0275\u0275element(3, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 36);
    \u0275\u0275text(7, " Ouvrir le PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const art_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", art_r3.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getImageUrl(art_r3.featuredImage), \u0275\u0275sanitizeUrl);
  }
}
function DetailArticleComponent_Conditional_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, DetailArticleComponent_Conditional_1_div_21_ng_container_1_Template, 3, 1, "ng-container", 28)(2, DetailArticleComponent_Conditional_1_div_21_ng_container_2_Template, 8, 2, "ng-container", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const art_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", art_r3.category === "ACTUALITE" && art_r3.images.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", art_r3.category !== "ACTUALITE");
  }
}
function DetailArticleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 3)(2, "div", 11)(3, "div", 12)(4, "h1", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr", 14);
    \u0275\u0275elementStart(7, "div", 15)(8, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 17);
    \u0275\u0275element(10, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 20);
    \u0275\u0275element(16, "path", 21)(17, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(19, "hr", 14);
    \u0275\u0275conditionalCreate(20, DetailArticleComponent_Conditional_1_Conditional_20_Template, 2, 1, "p", 23);
    \u0275\u0275template(21, DetailArticleComponent_Conditional_1_div_21_Template, 3, 2, "div", 24);
    \u0275\u0275elementStart(22, "article", 25);
    \u0275\u0275element(23, "div", 26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().title, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDate(ctx_r0.article().publishedAt || ctx_r0.article().createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getCategoryLabel(ctx_r0.article().category), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.article().viewCount, " vues ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.article().summary ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.article());
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r0.formatContent(ctx_r0.article().content), \u0275\u0275sanitizeHtml);
  }
}
function DetailArticleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h2", 39);
    \u0275\u0275text(4, "Article non trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "L'article que vous recherchez n'existe pas ou a \xE9t\xE9 supprim\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 41);
    \u0275\u0275text(8, "Voir toutes les actualit\xE9s");
    \u0275\u0275elementEnd()();
  }
}
var DetailArticleComponent = class _DetailArticleComponent {
  route;
  apiService;
  article = signal(null, ...ngDevMode ? [{ debugName: "article" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  API_URL = environment.FileUrl;
  constructor(route, apiService) {
    this.route = route;
    this.apiService = apiService;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.loadArticle(+id);
    }
  }
  loadArticle(id) {
    this.apiService.getArticleById(id).subscribe({
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
  static \u0275fac = function DetailArticleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailArticleComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailArticleComponent, selectors: [["app-detail-article"]], decls: 3, vars: 1, consts: [[1, "py-20"], [1, "py-12", "bg-neutral-50"], [1, "py-20", "text-center"], [1, "container", "mx-auto", "px-4"], [1, "max-w-3xl", "mx-auto", "animate-pulse"], [1, "h-8", "bg-neutral-200", "rounded", "w-1/4", "mb-4"], [1, "h-12", "bg-neutral-200", "rounded", "w-3/4", "mb-6"], [1, "h-64", "bg-neutral-200", "rounded-xl", "mb-8"], [1, "space-y-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-2", "space-y-6"], [1, "text-3xl", "lg:text-4xl", "font-bold", "text-black", "leading-tight"], [1, "border-t-2", "border-gray-300", "my-2"], [1, "flex", "items-center", "gap-4", "text-sm", "text-neutral-500", "mb-2"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "inline-block"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "px-2", "py-0.5", "bg-[#00843B]/10", "text-[#00843B]", "font-semibold", "rounded-full"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "text-black", "text-lg", "leading-relaxed", "text-justify", "mb-6"], ["class", "flex items-center justify-center overflow-hidden", 4, "ngIf"], [1, "max-w-none", "text-black", "content-article", "text-base", "leading-relaxed", "text-justify"], [3, "innerHTML"], [1, "flex", "items-center", "justify-center", "overflow-hidden"], [4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "gap-4", "p-2"], ["class", "w-full max-h-[450px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]", 3, "src", "alt", 4, "ngFor", "ngForOf"], [1, "w-full", "max-h-[450px]", "object-cover", "rounded-xl", "shadow-md", "transition-transform", "duration-300", "hover:scale-[1.02]", 3, "src", "alt"], [1, "flex", "flex-col", "items-center", "justify-center", "bg-[#E6F5EB]", "border", "border-gray-200", "rounded-xl", "w-full", "h-full", "p-6", "text-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-red-600", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V8l-6-6H12z"], [1, "font-medium", "text-gray-800", "mb-2", "truncate"], ["target", "_blank", 1, "px-4", "py-2", "bg-[#00843B]", "text-white", "rounded", "hover:bg-[#006830]", "transition-colors", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-semibold", "text-neutral-700", "mb-2"], [1, "text-neutral-500", "mb-6"], ["routerLink", "/articles", 1, "btn-primary"]], template: function DetailArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DetailArticleComponent_Conditional_0_Template, 10, 0, "div", 0)(1, DetailArticleComponent_Conditional_1_Template, 24, 7, "section", 1)(2, DetailArticleComponent_Conditional_2_Template, 9, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.article() ? 1 : 2);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n  .content-article p {\n  margin-bottom: 1.5em;\n  text-align: justify;\n  line-height: 1.6;\n}\n  .content-article {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n  .content-article img {\n  max-width: 100%;\n  height: auto;\n}\n  .content-article p {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-article.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailArticleComponent, [{
    type: Component,
    args: [{ selector: "app-detail-article", standalone: true, imports: [CommonModule, RouterModule], template: `@if (loading()) {\r
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
            <!-- Image en grand -->\r
\r
            \r
<div *ngIf="article() as art"\r
     class="flex items-center justify-center overflow-hidden">\r
\r
  <!-- ========================= -->\r
  <!-- ACTUALIT\xC9 \u2192 IMAGES -->\r
  <!-- ========================= -->\r
  <ng-container *ngIf="art.category === 'ACTUALITE' && art.images.length > 0">\r
\r
    <div class="w-full h-full flex flex-col gap-4 p-2">\r
\r
      <img *ngFor="let img of art.images"\r
           [src]="getImageUrl(img.imageUrl)"\r
           [alt]="art.title"\r
           class="w-full max-h-[450px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">\r
\r
    </div>\r
\r
  </ng-container>\r
\r
  <!-- ========================= -->\r
  <!-- PDF / AUTRE -->\r
  <!-- ========================= -->\r
  <ng-container *ngIf="art.category !== 'ACTUALITE'">\r
\r
    <div class="flex flex-col items-center justify-center bg-[#E6F5EB] border border-gray-200 rounded-xl w-full h-full p-6 text-center">\r
\r
      <svg class="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
              d="M12 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V8l-6-6H12z"/>\r
      </svg>\r
\r
      <p class="font-medium text-gray-800 mb-2 truncate">\r
        {{ art.title }}\r
      </p>\r
\r
      <a [href]="getImageUrl(art.featuredImage)" target="_blank"\r
         class="px-4 py-2 bg-[#00843B] text-white rounded hover:bg-[#006830] transition-colors">\r
        Ouvrir le PDF\r
      </a>\r
\r
    </div>\r
\r
  </ng-container>\r
\r
</div>\r
\r
            <!-- ========================= -->\r
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
            <!-- Contenu d\xE9taill\xE9 -->\r
          <!-- Contenu d\xE9taill\xE9 -->\r
            <article class="max-w-none text-black content-article text-base leading-relaxed text-justify">\r
            <div [innerHTML]="formatContent(article()!.content)"></div>\r
            </article>\r
\r
\r
           \r
\r
\r
\r
\r
            </div>\r
\r
\r
\r
           \r
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
    }`, styles: ["/* src/app/features/admin/article/detail-article/detail-article.component.scss */\n::ng-deep .content-article p {\n  margin-bottom: 1.5em;\n  text-align: justify;\n  line-height: 1.6;\n}\n::ng-deep .content-article {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n}\n::ng-deep .content-article img {\n  max-width: 100%;\n  height: auto;\n}\n::ng-deep .content-article p {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=detail-article.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailArticleComponent, { className: "DetailArticleComponent", filePath: "src/app/features/admin/article/detail-article/detail-article.component.ts", lineNumber: 18 });
})();
export {
  DetailArticleComponent
};
//# sourceMappingURL=chunk-P4UJJVH4.js.map
