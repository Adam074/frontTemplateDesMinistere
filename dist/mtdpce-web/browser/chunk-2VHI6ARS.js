import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
  Router,
  RouterLink,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/ministere/ministre/ministre.component.ts
function MinistreComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getImageUrl(m_r1.photo), \u0275\u0275sanitizeUrl)("alt", m_r1.nom + " " + m_r1.prenom);
  }
}
function MinistreComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23);
    \u0275\u0275element(1, "path", 24);
    \u0275\u0275elementEnd();
  }
}
function MinistreComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3, "Nom :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "span", 27);
    \u0275\u0275text(8, "Pr\xE9nom :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "span", 27);
    \u0275\u0275text(13, "Profession :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r3 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.prenom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r3.profession);
  }
}
function MinistreComponent_article_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mission_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.formatContent(mission_r4), \u0275\u0275sanitizeHtml);
  }
}
function MinistreComponent_article_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 31);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const biographie_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.formatContentTailwind(biographie_r5), \u0275\u0275sanitizeHtml);
  }
}
var MinistreComponent = class _MinistreComponent {
  apiService;
  router;
  min;
  API_URL = environment.FileUrl;
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  ministere1;
  ministere = signal(null, ...ngDevMode ? [{ debugName: "ministere" }] : []);
  // peut être null au départ
  ministres = signal([], ...ngDevMode ? [{ debugName: "ministres" }] : []);
  ministre = signal(null, ...ngDevMode ? [{ debugName: "ministre" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(apiService, router, min) {
    this.apiService = apiService;
    this.router = router;
    this.min = min;
  }
  ngOnInit() {
    this.loadArticles();
    this.loadMinistres();
  }
  loadArticles() {
    this.loading.set(true);
    this.apiService.getAllMins(0, 10).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          const articlesArray = this.articles();
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
        } else {
          console.error("Erreur :", response.message);
        }
      },
      error: (err) => {
        console.error("Erreur chargement minist\xE8re", err);
      }
    });
  }
  loadMinistres() {
    this.loading.set(true);
    this.min.getAllMinistre(0, 10).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministres.set(response.data.content);
          const ministreIdsArray = this.ministres();
          if (ministreIdsArray.length > 0) {
            const ministreId = ministreIdsArray[0].id;
            this.loadMinistreById(ministreId);
          }
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  loadMinistreById(id) {
    this.min.getMinistreById(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.ministre.set(response.data);
          console.log("Minist\xE8re charg\xE9 :", this.ministre);
        } else {
          console.error("Erreur :", response.message);
        }
      },
      error: (err) => {
        console.error("Erreur chargement minist\xE8re", err);
      }
    });
  }
  formatContent(content) {
    if (!content)
      return "";
    content = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const paragraphs = content.split(/\n+/);
    return paragraphs.map((p) => `<p>${p.trim()}</p>`).join("");
  }
  formatContentTailwind(content) {
    if (!content)
      return "";
    content = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const paragraphs = content.split(/\n{2,}/);
    return paragraphs.map((block) => {
      const withLineBreaks = block.replace(/\n/g, "<br>");
      return `<p class="mb-4 leading-relaxed">${withLineBreaks.trim()}</p>`;
    }).join("");
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  static \u0275fac = function MinistreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinistreComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MinistereService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MinistreComponent, selectors: [["app-ministre"]], decls: 35, vars: 5, consts: [["svgFallback", ""], [1, "bg-gradient-to-r", "from-[#00843B]", "to-[#006B30]", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-16", "bg-gray-100"], [1, "bg-white", "shadow-xl", "rounded-3xl", "overflow-hidden", "flex", "flex-col", "md:flex-row", "border", "border-gray-200"], [1, "md:w-1/3", "bg-gray-50", "p-8", "flex", "flex-col", "items-center", "border-r", "border-gray-200"], [1, "px-4", "py-1", "mb-4", "text-xs", "font-bold", "text-white", "rounded-full", 2, "background", "#00843B"], [1, "w-56", "h-56", "rounded-full", "overflow-hidden", "shadow-2xl", "ring-4", "ring-primary-100", "mb-6"], [4, "ngIf", "ngIfElse"], ["class", "space-y-4 w-full", 4, "ngIf"], [1, "md:w-2/3", "p-10", "flex", "flex-col", "space-y-8"], [1, "mb-10"], [1, "text-xl", "font-bold", "text-gray-900", "border-l-4", "pl-3", "mb-4", 2, "border-color", "#00843B"], ["class", "max-w-none text-black content-article text-base leading-relaxed text-justify", 4, "ngIf"], [1, "text-xl", "font-bold", "text-gray-900", "border-l-4", "pl-3", "mb-4", 2, "border-color", "#E30613"], ["class", "max-w-4xl mx-auto text-black text-base text-justify", 4, "ngIf"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-full", "h-full", "bg-gray-200", "text-gray-500"], ["d", "M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"], [1, "space-y-4", "w-full"], [1, "flex", "justify-between", "bg-white", "rounded-lg", "p-3", "shadow-sm", "border"], [1, "font-semibold", "text-gray-600"], [1, "text-gray-900", "font-medium"], [1, "max-w-none", "text-black", "content-article", "text-base", "leading-relaxed", "text-justify"], [3, "innerHTML"], [1, "max-w-4xl", "mx-auto", "text-black", "text-base", "text-justify"]], template: function MinistreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3, "Ministre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 4)(5, "a", 5);
      \u0275\u0275text(6, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 7);
      \u0275\u0275text(10, "Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 6);
      \u0275\u0275text(12, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "Ministre");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 9)(16, "div", 2)(17, "div", 10)(18, "div", 11)(19, "span", 12);
      \u0275\u0275text(20, " LA MINISTRE ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275template(22, MinistreComponent_ng_container_22_Template, 2, 2, "ng-container", 14)(23, MinistreComponent_ng_template_23_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, MinistreComponent_div_25_Template, 16, 3, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "h3", 18);
      \u0275\u0275text(29, " LE MINIST\xC8RE ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, MinistreComponent_article_30_Template, 2, 1, "article", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div")(32, "h3", 20);
      \u0275\u0275text(33, " BIOGRAPHIE ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, MinistreComponent_article_34_Template, 2, 1, "article", 21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      const svgFallback_r6 = \u0275\u0275reference(24);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.ministre())("ngIfElse", svgFallback_r6);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.ministre());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.ministere()) == null ? null : tmp_4_0.missionGeneral);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.ministre()) == null ? null : tmp_5_0.biographie);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinistreComponent, [{
    type: Component,
    args: [{ selector: "app-ministre", standalone: true, imports: [CommonModule, RouterLink, RouterModule], template: `    <!-- Banni\xE8re -->\r
<div class="bg-gradient-to-r from-[#00843B] to-[#006B30] py-12">\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-3xl font-bold text-white mb-2">Ministre</h1>\r
        <nav class="text-green-100 text-sm">\r
          <a routerLink="/" class="hover:text-white">Accueil</a>\r
          <span class="mx-2">\u203A</span>\r
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>\r
          <span class="mx-2">\u203A</span>\r
          <span class="text-white">Ministre</span>\r
        </nav>\r
      </div>\r
</div>\r
\r
\r
    \r
\r
<section class="py-16 bg-gray-100">\r
  <div class="container mx-auto px-4">\r
    \r
    <!-- Carte globale -->\r
    <div class="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-gray-200">\r
        \r
\r
      <!-- ================== GAUCHE : PHOTO + INFOS ================== -->\r
      <div class="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center border-r border-gray-200">\r
        \r
        <!-- Badge -->\r
        <span class="px-4 py-1 mb-4 text-xs font-bold text-white rounded-full" style="background:#00843B;">\r
          LA MINISTRE\r
        </span>\r
\r
        <!-- Nom \r
        <h2 class="text-xl font-bold text-gray-900 text-center mb-6" *ngIf="ministre() as mission">\r
                {{ mission.nom }} {{ mission.prenom }}\r
        </h2>-->\r
\r
        <!-- Photo -->\r
\r
        <div class="w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-100 mb-6">\r
          <ng-container  *ngIf="ministre() as m; else svgFallback">\r
            <img [src]="getImageUrl(m.photo)"\r
                [alt]="m.nom + ' ' + m.prenom"\r
                class="w-full h-full object-cover">\r
          </ng-container>\r
\r
          <ng-template #svgFallback>\r
            <svg class="w-full h-full bg-gray-200 text-gray-500" fill="currentColor" viewBox="0 0 24 24">\r
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>\r
            </svg>\r
          </ng-template>\r
        </div>\r
       \r
\r
        <!-- Infos -->\r
        <div class="space-y-4 w-full" *ngIf="ministre() as m">\r
          <div class="flex justify-between bg-white rounded-lg p-3 shadow-sm border">\r
            <span class="font-semibold text-gray-600">Nom :</span>\r
            <span class="text-gray-900 font-medium">{{ m.nom }}</span>\r
          </div>\r
          <div class="flex justify-between bg-white rounded-lg p-3 shadow-sm border">\r
            <span class="font-semibold text-gray-600">Pr\xE9nom :</span>\r
            <span class="text-gray-900 font-medium">{{ m.prenom }}</span>\r
          </div>\r
          \r
          <div class="flex justify-between bg-white rounded-lg p-3 shadow-sm border">\r
            <span class="font-semibold text-gray-600">Profession :</span>\r
            <span class="text-gray-900 font-medium">{{ m.profession }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ================== DROITE : MINISTERE + BIO ================== -->\r
      <div class="md:w-2/3 p-10 flex flex-col space-y-8">\r
       <!-- Section Minist\xE8re -->\r
        <div class="mb-10">\r
          <h3 class="text-xl font-bold text-gray-900 border-l-4 pl-3 mb-4" style="border-color:#00843B;">\r
            LE MINIST\xC8RE\r
          </h3>\r
\r
         <article class="max-w-none text-black content-article text-base leading-relaxed text-justify"\r
              *ngIf="ministere()?.missionGeneral as mission">\r
          <div [innerHTML]="formatContent(mission)"></div>\r
        </article>\r
\r
          \r
\r
           <!-- <p class="text-gray-700 leading-relaxed text-justify mb-4">\r
            Le <strong>Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques</strong> assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de d\xE9veloppement de l\u2019\xE9conomie num\xE9rique, des postes et de la transformation digitale. \xC0 ce titre et en relation avec les d\xE9partements minist\xE9riels comp\xE9tents, il est charg\xE9 entre autres :\r
          </p>\r
\r
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">\r
            <li>D\xE9veloppement des infrastructures des communications \xE9lectroniques</li>\r
            <li>Accompagnement et promotion des usages des TIC</li>\r
            <li>D\xE9veloppement des services en ligne et des contenus locaux</li>\r
            <li>D\xE9veloppement d\u2019une industrie locale bas\xE9e sur les TIC</li>\r
            <li>D\xE9veloppement du secteur postal</li>\r
          </ul>\r
\r
          <p class="text-gray-800 font-semibold">\r
            Le Minist\xE8re est dirig\xE9 par Madame Aminata ZERBO/SABANE.\r
          </p>-->\r
        </div>\r
\r
          <!-- Section Biographie -->\r
        <div>\r
          <h3 class="text-xl font-bold text-gray-900 border-l-4 pl-3 mb-4" style="border-color:#E30613;">\r
            BIOGRAPHIE\r
          </h3>\r
\r
          <article  *ngIf="ministre()?.biographie as biographie"\r
                  class="max-w-4xl mx-auto text-black text-base text-justify">\r
            <div [innerHTML]="formatContentTailwind(biographie)"></div>\r
          </article>\r
\r
         <!-- <p class="text-gray-700 leading-relaxed text-justify mb-4">\r
              </p>-->\r
\r
          \r
\r
         \r
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
\r
\r
\r
\r
` }]
  }], () => [{ type: ApiService }, { type: Router }, { type: MinistereService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinistreComponent, { className: "MinistreComponent", filePath: "src/app/features/ministere/ministre/ministre.component.ts", lineNumber: 16 });
})();
export {
  MinistreComponent
};
//# sourceMappingURL=chunk-2VHI6ARS.js.map
