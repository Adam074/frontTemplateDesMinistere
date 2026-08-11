import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
import {
  RouterLink
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/ministere/organigramme/organigramme.component.ts
var _c0 = () => [];
function OrganigrammeComponent_ng_container_19_ng_container_2_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const direction_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(direction_r1.name))("src", ctx_r1.getImageUrl(direction_r1.photo), \u0275\u0275sanitizeUrl);
  }
}
function OrganigrammeComponent_ng_container_19_ng_container_2_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 27);
    \u0275\u0275elementEnd()();
  }
}
function OrganigrammeComponent_ng_container_19_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, OrganigrammeComponent_ng_container_19_ng_container_2_div_6_ng_container_1_Template, 2, 3, "ng-container", 13)(2, OrganigrammeComponent_ng_container_19_ng_container_2_div_6_ng_template_2_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "h4", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const direction_r1 = ctx.$implicit;
    const iconPerson_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", direction_r1.photo)("ngIfElse", iconPerson_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(direction_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(direction_r1.acronym);
  }
}
function OrganigrammeComponent_ng_container_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, OrganigrammeComponent_ng_container_19_ng_container_2_div_6_Template, 8, 4, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const niveau_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", i_r5 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupedDirections()[niveau_r4] || \u0275\u0275pureFunction0(2, _c0));
  }
}
function OrganigrammeComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275template(2, OrganigrammeComponent_ng_container_19_ng_container_2_Template, 7, 3, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.niveaux());
  }
}
function OrganigrammeComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 31);
    \u0275\u0275text(4, "Aucune donn\xE9e disponible");
    \u0275\u0275elementEnd()();
  }
}
var OrganigrammeComponent = class _OrganigrammeComponent {
  apiService;
  minService;
  API_URL = environment.FileUrl;
  directions = [
    { id: 1, name: "Direction G\xE9n\xE9rale de la Transition Digitale", acronym: "DGTD", niveau: "niveau 1" },
    { id: 2, name: "Direction G\xE9n\xE9rale des Communications \xC9lectroniques", acronym: "DGCE", niveau: "niveau 2" },
    { id: 3, name: "Direction G\xE9n\xE9rale de la Poste", acronym: "DGP", niveau: "niveau 2" },
    { id: 4, name: "Direction des Affaires Juridiques", acronym: "DAJ", niveau: "niveau 2" },
    { id: 5, name: "Direction des Ressources Humaines", acronym: "DRH", niveau: "niveau 2" },
    { id: 6, name: "Direction de l'Administration et des Finances", acronym: "DAF", niveau: "niveau 3" },
    { id: 7, name: "Direction des \xC9tudes et de la Planification", acronym: "DEP", niveau: "niveau 3" },
    { id: 8, name: "Direction de la Communication", acronym: "DCOM", niveau: "niveau 3" },
    { id: 9, name: "Direction des March\xE9s Publics", acronym: "DMP", niveau: "niveau 3" },
    { id: 10, name: "Direction des Archives et de la Documentation", acronym: "DAD", niveau: "niveau 3" }
  ];
  niveaux4 = [
    { name: "Direction G\xE9n\xE9rale de la Transition Digitale", acronym: "DGTD" },
    { name: "Direction G\xE9n\xE9rale des Communications \xC9lectroniques", acronym: "DGCE" },
    { name: "Direction G\xE9n\xE9rale de la Poste", acronym: "DGP" },
    { name: "Direction des Affaires Juridiques", acronym: "DAJ" },
    { name: "Direction des Ressources Humaines", acronym: "DRH" },
    { name: "Direction de l'Administration et des Finances", acronym: "DAF" },
    { name: "Direction des \xC9tudes et de la Planification", acronym: "DEP" },
    { name: "Direction de la Communication", acronym: "DCOM" },
    { name: "Direction des March\xE9s Publics", acronym: "DMP" },
    { name: "Direction des Archives et de la Documentation", acronym: "DAD" }
  ];
  structures = [
    { name: "Agence Nationale de Promotion des TIC", acronym: "ANPTIC" },
    { name: "Agence Nationale de S\xE9curit\xE9 des Syst\xE8mes d'Information", acronym: "ANSSI" },
    { name: "Autorit\xE9 de R\xE9gulation des Communications \xC9lectroniques", acronym: "ARCEP" },
    { name: "Soci\xE9t\xE9 Nationale des Postes", acronym: "SONAPOST" }
  ];
  groupedDirections1 = {};
  niveaux1 = [];
  loading1 = signal(true, ...ngDevMode ? [{ debugName: "loading1" }] : []);
  organigrammes1 = [];
  groupedDirections = signal({}, ...ngDevMode ? [{ debugName: "groupedDirections" }] : []);
  niveaux = signal([], ...ngDevMode ? [{ debugName: "niveaux" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  organigrammes = signal([], ...ngDevMode ? [{ debugName: "organigrammes" }] : []);
  constructor(apiService, minService) {
    this.apiService = apiService;
    this.minService = minService;
  }
  ngOnInit() {
    this.loadOrgas();
  }
  loadOrgas() {
    this.loading.set(true);
    this.apiService.getAllOrgPub().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const data = response.data.content ?? response.data;
          this.organigrammes.set(data);
          const grouped = {};
          data.forEach((org) => {
            if (!org.niveau)
              return;
            const niveau = org.niveau.trim();
            if (!grouped[niveau])
              grouped[niveau] = [];
            grouped[niveau].push(org);
          });
          this.groupedDirections.set(grouped);
          const niveauxSorted = Object.keys(grouped).sort((a, b) => {
            const nA = parseInt(a.replace(/\D/g, "")) || 0;
            const nB = parseInt(b.replace(/\D/g, "")) || 0;
            return nA - nB;
          });
          this.niveaux.set(niveauxSorted);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  static \u0275fac = function OrganigrammeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganigrammeComponent)(\u0275\u0275directiveInject(MinistereService), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganigrammeComponent, selectors: [["app-organigramme"]], decls: 22, vars: 2, consts: [["noData", ""], ["iconPerson", ""], [1, "bg-gradient-to-r", "from-[#00843B]", "to-[#006B30]", "py-12"], [1, "container", "mx-auto", "px-4"], [1, "text-3xl", "font-bold", "text-white", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-16", "bg-gray-50"], [1, "max-w-6xl", "mx-auto"], [1, "relative"], [4, "ngIf", "ngIfElse"], [1, "absolute", "left-6", "top-0", "bottom-0", "w-1", "bg-green-200", "rounded"], [4, "ngFor", "ngForOf"], [1, "relative", "pl-20", "mb-16", "flex", "flex-col", "items-center"], [1, "absolute", "left-0", "top-4", "flex", "items-center", "justify-center"], [1, "w-12", "h-12", "rounded-full", "bg-green-600", "text-white", "font-bold", "flex", "items-center", "justify-center", "shadow-md"], [1, "flex", "flex-wrap", "justify-center", "gap-6"], ["class", "bg-white rounded-2xl p-6 shadow-md border border-gray-100\n                     w-72 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-2xl", "p-6", "shadow-md", "border", "border-gray-100", "w-72", "text-center", "hover:shadow-xl", "hover:-translate-y-2", "transition-all", "duration-300"], [1, "font-semibold", "text-gray-800", "text-sm", "leading-tight", "mb-2"], [1, "text-gray-500", "text-xs", "mb-3"], [1, "w-32", "h-32", "mx-auto", "mb-4", "rounded-full", "object-cover", "border-2", "border-green-200", "shadow-lg", 3, "src", "alt"], [1, "w-20", "h-20", "mx-auto", "mb-4", "rounded-full", "bg-green-100", "flex", "items-center", "justify-center", "shadow-md"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-green-600"], ["d", "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"], [1, "text-center", "py-16"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"]], template: function OrganigrammeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
      \u0275\u0275text(3, "Organigramme");
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
      \u0275\u0275text(14, "Organigramme");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 10)(16, "div", 3)(17, "div", 11)(18, "div", 12);
      \u0275\u0275template(19, OrganigrammeComponent_ng_container_19_Template, 3, 1, "ng-container", 13)(20, OrganigrammeComponent_ng_template_20_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const noData_r6 = \u0275\u0275reference(21);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ctx.niveaux() && ctx.niveaux().length > 0)("ngIfElse", noData_r6);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganigrammeComponent, [{
    type: Component,
    args: [{ selector: "app-organigramme", standalone: true, imports: [CommonModule, RouterLink], template: ` <!-- Banni\xE8re -->\r
    <div class="bg-gradient-to-r from-[#00843B] to-[#006B30] py-12">\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-3xl font-bold text-white mb-2">Organigramme</h1>\r
        <nav class="text-green-100 text-sm">\r
          <a routerLink="/" class="hover:text-white">Accueil</a>\r
          <span class="mx-2">\u203A</span>\r
          <a routerLink="/ministere/ministre" class="hover:text-white">Minist\xE8re</a>\r
          <span class="mx-2">\u203A</span>\r
          <span class="text-white">Organigramme</span>\r
        </nav>\r
      </div>\r
    </div>\r
\r
\r
    \r
  \r
  <!-- Directions par niveau -->\r
<section class="py-16 bg-gray-50">\r
  <div class="container mx-auto px-4">\r
    <div class="max-w-6xl mx-auto">\r
\r
      <!-- Organigramme Timeline -->\r
      <div class="relative">\r
        <!-- Ligne verticale gauche -->\r
        \r
\r
         \r
        <!-- V\xE9rifie s'il y a des niveaux / directions -->\r
        <ng-container *ngIf="niveaux() && niveaux().length > 0; else noData">\r
           <div class="absolute left-6 top-0 bottom-0 w-1 bg-green-200 rounded"></div>\r
\r
          <!-- Boucle sur les niveaux -->\r
          <ng-container *ngFor="let niveau of niveaux(); let i = index">\r
            <div class="relative pl-20 mb-16 flex flex-col items-center">\r
              \r
              <!-- Badge niveau -->\r
              <div class="absolute left-0 top-4 flex items-center justify-center">\r
                <div class="w-12 h-12 rounded-full bg-green-600 text-white font-bold flex items-center justify-center shadow-md">\r
                  {{ i + 1 }}\r
                </div>\r
              </div>\r
\r
              <!-- Cartes des directions -->\r
              <div class="flex flex-wrap justify-center gap-6">\r
                <div *ngFor="let direction of (groupedDirections()[niveau] || [])"\r
                     class="bg-white rounded-2xl p-6 shadow-md border border-gray-100\r
                     w-72 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">\r
                  \r
                  <!-- Image ou ic\xF4ne -->\r
                  <ng-container *ngIf="direction.photo; else iconPerson">\r
                    <img [src]="getImageUrl(direction.photo)" alt="{{ direction.name }}"\r
                         class="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-green-200 shadow-lg">\r
                  </ng-container>\r
                  <ng-template #iconPerson>\r
                    <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center shadow-md">\r
                      <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">\r
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>\r
                      </svg>\r
                    </div>\r
                  </ng-template>\r
\r
                  <!-- Nom et acronym -->\r
                  <h4 class="font-semibold text-gray-800 text-sm leading-tight mb-2">{{ direction.name }}</h4>\r
                  <p class="text-gray-500 text-xs mb-3">{{ direction.acronym }}</p>\r
                </div>\r
              </div>\r
\r
            </div>\r
          </ng-container>\r
\r
        </ng-container>\r
\r
        <!-- Fallback si aucune donn\xE9e -->\r
        <ng-template #noData>\r
          <div class="text-center py-16">\r
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z">\r
              </path>\r
            </svg>\r
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucune donn\xE9e disponible</h3>\r
          </div>\r
        </ng-template>\r
\r
      </div>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
\r
    <!-- Contenu principal -->\r
 \r
\r
\r
    ` }]
  }], () => [{ type: MinistereService }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganigrammeComponent, { className: "OrganigrammeComponent", filePath: "src/app/features/ministere/organigramme/organigramme.component.ts", lineNumber: 24 });
})();
export {
  OrganigrammeComponent
};
//# sourceMappingURL=chunk-B5JNSGSF.js.map
