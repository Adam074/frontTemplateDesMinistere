import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
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
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/ministere/structurerattaches/structurerattaches.component.ts
function StructurerattachesComponent_div_18_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const structure_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getImageUrl(structure_r1.logourl), \u0275\u0275sanitizeUrl)("alt", structure_r1.name);
  }
}
function StructurerattachesComponent_div_18_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30);
    \u0275\u0275elementEnd();
  }
}
function StructurerattachesComponent_div_18_div_2_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Site web ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const structure_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", structure_r1.website, \u0275\u0275sanitizeUrl);
  }
}
function StructurerattachesComponent_div_18_div_2_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const structure_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + structure_r1.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", structure_r1.phone, " ");
  }
}
function StructurerattachesComponent_div_18_div_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mission_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDomaineName(mission_r3), " ");
  }
}
function StructurerattachesComponent_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275template(4, StructurerattachesComponent_div_18_div_2_ng_container_4_Template, 2, 2, "ng-container", 12)(5, StructurerattachesComponent_div_18_div_2_ng_template_5_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19)(8, "h3", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22);
    \u0275\u0275template(13, StructurerattachesComponent_div_18_div_2_a_13_Template, 4, 1, "a", 23)(14, StructurerattachesComponent_div_18_div_2_a_14_Template, 4, 2, "a", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 26);
    \u0275\u0275template(17, StructurerattachesComponent_div_18_div_2_span_17_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const structure_r1 = ctx.$implicit;
    const svgFallback_r4 = \u0275\u0275reference(6);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", structure_r1.logourl)("ngIfElse", svgFallback_r4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", structure_r1.name, " (", structure_r1.acronym, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(structure_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", structure_r1.website);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", structure_r1.phone);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", structure_r1.domaineIds);
  }
}
function StructurerattachesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13);
    \u0275\u0275template(2, StructurerattachesComponent_div_18_div_2_Template, 18, 8, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.structures())("ngForTrackBy", ctx_r1.trackByAcronym);
  }
}
function StructurerattachesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 40);
    \u0275\u0275text(4, "Aucune structure disponible");
    \u0275\u0275elementEnd()();
  }
}
var StructurerattachesComponent = class _StructurerattachesComponent {
  structureService;
  API_URL = environment.FileUrl;
  structures1 = [];
  // 🔹 Variable pour stocker la liste
  domaines1 = [];
  loading1 = false;
  structures = signal([], ...ngDevMode ? [{ debugName: "structures" }] : []);
  // 🔹 Signal pour les structures
  domaines = signal([], ...ngDevMode ? [{ debugName: "domaines" }] : []);
  // 🔹 Signal pour les domaines
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(structureService) {
    this.structureService = structureService;
  }
  ngOnInit() {
    this.loadStructures();
    this.loadDomaines();
  }
  loadDomaines() {
    this.loading.set(true);
    this.structureService.getAllDomaines().subscribe({
      next: (response) => {
        this.domaines.set(response.data.content || []);
        console.log("Domaines:", this.domaines());
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Erreur lors du chargement", err);
        this.loading.set(false);
      }
    });
  }
  getDomaineName(id) {
    const domaine = this.domaines().find((d) => d.id === id);
    return domaine ? domaine.nom : "\u2014";
  }
  loadStructures() {
    this.loading.set(true);
    this.structureService.getAllTruc().subscribe({
      next: (response) => {
        this.structures.set(response.data.content || []);
        console.log("Structures:", this.structures());
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Erreur lors du chargement", err);
        this.loading.set(false);
      }
    });
  }
  trackByAcronym(index, item) {
    return item.acronym;
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  static \u0275fac = function StructurerattachesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StructurerattachesComponent)(\u0275\u0275directiveInject(MinistereService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StructurerattachesComponent, selectors: [["app-structurerattaches"]], decls: 21, vars: 2, consts: [["noData", ""], ["svgFallback", ""], [1, "bg-gradient-to-r", "from-green-700", "to-green-600", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-12", "bg-white"], [1, "max-w-5xl", "mx-auto"], [4, "ngIf", "ngIfElse"], [1, "grid", "gap-8"], ["class", "bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bg-white", "rounded-2xl", "shadow-lg", "border", "border-gray-100", "overflow-hidden", "hover:shadow-xl", "transition-shadow"], [1, "p-6"], [1, "flex", "items-start", "gap-6"], [1, "w-20", "h-20", "rounded-xl", "bg-gray-100", "flex", "items-center", "justify-center", "flex-shrink-0", "overflow-hidden"], [1, "flex-1"], [1, "text-xl", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-600", "leading-relaxed", "mb-4"], [1, "flex", "flex-wrap", "gap-4"], ["target", "_blank", "class", "inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors", 3, "href", 4, "ngIf"], ["class", "inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors", 3, "href", 4, "ngIf"], [1, "bg-gray-50", "px-6", "py-4", "border-t", "border-gray-100"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-gray-200", 4, "ngFor", "ngForOf"], [1, "w-full", "h-full", "object-contain", "p-2", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.8", "d", "M3 21h18M4 21V7l8-4 8 4v14M9 21V9h6v12M9 13h6"], ["target", "_blank", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-green-50", "text-green-700", "rounded-lg", "hover:bg-green-100", "transition-colors", 3, "href"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-gray-50", "text-gray-700", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "href"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "px-3", "py-1", "bg-white", "text-gray-600", "text-sm", "rounded-full", "border", "border-gray-200"], [1, "text-center", "py-16"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"]], template: function StructurerattachesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
      \u0275\u0275text(3, "Structures Rattach\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 5)(5, "a", 6);
      \u0275\u0275text(6, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275text(10, "Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "Structures Rattach\xE9es");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 10)(16, "div", 3)(17, "div", 11);
      \u0275\u0275template(18, StructurerattachesComponent_div_18_Template, 3, 2, "div", 12)(19, StructurerattachesComponent_ng_template_19_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const noData_r5 = \u0275\u0275reference(20);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.structures() && ctx.structures().length > 0)("ngIfElse", noData_r5);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StructurerattachesComponent, [{
    type: Component,
    args: [{ selector: "app-structurerattaches", standalone: true, imports: [CommonModule], template: `    <!-- Banni\xE8re -->\r
    <div class="bg-gradient-to-r from-green-700 to-green-600 py-12">\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-3xl font-bold text-white mb-2">Structures Rattach\xE9es</h1>\r
        <nav class="text-green-100 text-sm">\r
          <a routerLink="/" class="hover:text-white">Accueil</a>\r
          <span class="mx-2">\u203A</span>\r
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>\r
          <span class="mx-2">\u203A</span>\r
          <span class="text-white">Structures Rattach\xE9es</span>\r
        </nav>\r
      </div>\r
    </div>\r
    \r
    <!-- Contenu principal -->\r
    <section class="py-12 bg-white">\r
      <div class="container mx-auto px-4">\r
        <div class="max-w-5xl mx-auto">\r
          <div *ngIf="structures() && structures().length > 0; else noData"> \r
              <div class="grid gap-8">\r
               \r
\r
                  <div *ngFor="let structure of structures(); trackBy: trackByAcronym" class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">\r
                    <div class="p-6">\r
                      <div class="flex items-start gap-6">\r
                        \r
\r
                        <!-- Logo ou fallback -->\r
                        <div class="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">\r
                          <ng-container *ngIf="structure.logourl; else svgFallback">\r
                            <img [src]="getImageUrl(structure.logourl)"\r
                                [alt]="structure.name"\r
                                class="w-full h-full object-contain p-2"/>\r
                          </ng-container>\r
                          <ng-template #svgFallback>\r
                            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"\r
                                    d="M3 21h18M4 21V7l8-4 8 4v14M9 21V9h6v12M9 13h6"/>\r
                            </svg>\r
                          </ng-template>\r
                        </div>\r
                        <div class="flex-1">\r
                          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ structure.name }}  ({{ structure.acronym }})</h3>\r
                          <p class="text-gray-600 leading-relaxed mb-4">{{ structure.description }}</p>\r
                          <div class="flex flex-wrap gap-4">\r
                           \r
                              <a *ngIf="structure.website" [href]="structure.website" target="_blank" \r
                                class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">\r
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>\r
                                </svg>\r
                                Site web\r
                              </a>\r
                            \r
                           \r
                              <a *ngIf="structure.phone" [href]="'tel:' + structure.phone" \r
                                class="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">\r
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>\r
                                </svg>\r
                                {{ structure.phone }}\r
                              </a>\r
                            \r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
\r
\r
                    <div class="bg-gray-50 px-6 py-4 border-t border-gray-100">\r
                      <div class="flex flex-wrap gap-2">\r
                     \r
                        <span *ngFor="let mission of structure.domaineIds" class="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-gray-200">\r
                            {{ getDomaineName(mission) }}\r
                        </span>\r
                        \r
                      </div>\r
                    </div>\r
                  </div>\r
                \r
              </div>\r
\r
\r
          </div>\r
\r
           <!-- Aucune donn\xE9e -->\r
          <ng-template #noData>\r
            <div class="text-center py-16">\r
              <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" \r
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>\r
              </svg>\r
              <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucune structure disponible</h3>\r
            </div>\r
          </ng-template>\r
\r
          \r
        </div>\r
      </div>\r
    </section>` }]
  }], () => [{ type: MinistereService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StructurerattachesComponent, { className: "StructurerattachesComponent", filePath: "src/app/features/ministere/structurerattaches/structurerattaches.component.ts", lineNumber: 15 });
})();
export {
  StructurerattachesComponent
};
//# sourceMappingURL=chunk-WSYQNWSA.js.map
