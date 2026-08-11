import {
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
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/services/service/service.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function ServiceComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function ServiceComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ServiceComponent_Conditional_8_For_2_Template, 4, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function ServiceComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 13);
    \u0275\u0275text(4, "Aucun service public trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
function ServiceComponent_Conditional_10_For_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 25);
  }
  if (rf & 2) {
    const service_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate(service_r2.name))("src", ctx_r2.getImageUrl(service_r2.logo), \u0275\u0275sanitizeUrl);
  }
}
function ServiceComponent_Conditional_10_For_2__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 26);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function ServiceComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function ServiceComponent_Conditional_10_For_2_Template_div_click_0_listener() {
      const service_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openService(service_r2.url));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275template(2, ServiceComponent_Conditional_10_For_2_img_2_Template, 1, 3, "img", 20)(3, ServiceComponent_Conditional_10_For_2__svg_svg_3_Template, 2, 0, "svg", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9, " En savoir plus \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", service_r2.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !service_r2.logo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2.description);
  }
}
function ServiceComponent_Conditional_10_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ServiceComponent_Conditional_10_Conditional_3_For_5_Template_button_click_0_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(page_r6 === ctx_r2.currentPage() ? "bg-[#00843B] text-white" : "border border-[#00843B] text-[#00843B] hover:bg-[#E6F5EB]");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r6 + 1, " ");
  }
}
function ServiceComponent_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "nav", 28)(2, "button", 29);
    \u0275\u0275listener("click", function ServiceComponent_Conditional_10_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() - 1));
    });
    \u0275\u0275text(3, " \u2039 ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ServiceComponent_Conditional_10_Conditional_3_For_5_Template, 2, 3, "button", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function ServiceComponent_Conditional_10_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(ctx_r2.currentPage() + 1));
    });
    \u0275\u0275text(7, " \u203A ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getPageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages() - 1);
  }
}
function ServiceComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, ServiceComponent_Conditional_10_For_2_Template, 10, 4, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ServiceComponent_Conditional_10_Conditional_3_Template, 8, 2, "div", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.servicesAll());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.totalPages() ? 3 : -1);
  }
}
var ServiceComponent = class _ServiceComponent {
  apiService;
  API_URL = environment.FileUrl;
  services = signal([], ...ngDevMode ? [{ debugName: "services" }] : []);
  filteredServices = signal([], ...ngDevMode ? [{ debugName: "filteredServices" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedCategory = "all";
  selectedService = null;
  categories = ["Agr\xE9ment technique", "Licences T\xE9l\xE9com", "Cybers\xE9curit\xE9", "Services Postaux"];
  //servicesAll: Service[] = [];
  servicesAll = signal([], ...ngDevMode ? [{ debugName: "servicesAll" }] : []);
  //loading = signal(true);
  currentPage = signal(0, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  searchQuery = "";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadServices();
  }
  loadService1s() {
    this.apiService.getAllServicepublic().subscribe({
      next: (res) => {
        if (res.success) {
          console.log(this.services);
        }
      },
      error: (err) => console.error(err)
    });
  }
  loadServices() {
    this.loading.set(true);
    this.apiService.getAllService(this.currentPage(), 8).subscribe({
      next: (response) => {
        if (response.success) {
          this.servicesAll.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages()) {
      this.currentPage.set(page);
      this.loadServices();
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
  openService(url) {
    window.open(url, "_blank");
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  showServiceDetails(service) {
    this.selectedService = service;
  }
  closeModal() {
    this.selectedService = null;
  }
  static \u0275fac = function ServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceComponent, selectors: [["app-service"]], decls: 11, vars: 1, consts: [[1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", 2, "color", "white"], [1, "text-xl", "text-emerald-100"], [1, "py-12"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "text-center", "py-16"], [1, "card", "animate-pulse"], [1, "h-6", "bg-neutral-200", "rounded", "w-3/4", "mb-4"], [1, "h-4", "bg-neutral-200", "rounded", "w-full", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-2/3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "text-neutral-500"], [1, "grid", "grid-cols-1", "lg:grid-cols-4", "gap-6"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-100", "shadow-md", "hover:border-primary-500", "hover:shadow-lg", "transition-all", "flex", "flex-col", "items-center", "text-center", "cursor-pointer"], [1, "flex", "justify-center", "mt-10"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-100", "shadow-md", "hover:border-primary-500", "hover:shadow-lg", "transition-all", "flex", "flex-col", "items-center", "text-center", "cursor-pointer", 3, "click"], [1, "w-16", "h-16", "bg-accent-50", "rounded-lg", "flex", "items-center", "justify-center", "mb-4", "overflow-hidden"], ["class", "w-12 h-12 object-contain", 3, "src", "alt", 4, "ngIf"], ["class", "w-8 h-8 text-accent-500", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "font-semibold", "text-slate-800", "mb-2"], [1, "text-sm", "text-slate-600", "mb-4"], [1, "text-primary-600", "text-sm", "font-medium", "hover:text-primary-700", "transition-colors"], [1, "w-12", "h-12", "object-contain", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-accent-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "flex", "items-center", "gap-2"], [1, "btn-ghost", "disabled:opacity-50", "px-3", "py-1", "rounded-lg", "border", "border-[#00843B]", "hover:bg-[#E6F5EB]", 3, "click", "disabled"], [1, "w-10", "h-10", "rounded-lg", "font-semibold", "transition", 3, "class"], [1, "btn-ghost", "disabled:opacity-50", "px-3", "py-1", "rounded-lg", "border", "border-[#00843B]", "hover:bg-[#E6F5EB']", 3, "click", "disabled"], [1, "w-10", "h-10", "rounded-lg", "font-semibold", "transition", 3, "click"]], template: function ServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Nos Services Publics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "D\xE9couvrez l'ensemble des services propos\xE9s par le minist\xE8re");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 1);
      \u0275\u0275conditionalCreate(8, ServiceComponent_Conditional_8_Template, 3, 1, "div", 5)(9, ServiceComponent_Conditional_9_Template, 7, 0, "div", 6)(10, ServiceComponent_Conditional_10_Template, 4, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 8 : ctx.servicesAll().length === 0 ? 9 : 10);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceComponent, [{
    type: Component,
    args: [{ selector: "app-service", standalone: true, imports: [CommonModule, RouterModule], template: `\r
      <!-- Hero Section -->\r
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r
        <div class="container mx-auto px-4">\r
          <h1 class="text-4xl font-bold mb-4" style="color: white;">Nos Services Publics</h1>\r
          <p class="text-xl text-emerald-100">D\xE9couvrez l'ensemble des services propos\xE9s par le minist\xE8re</p>\r
        </div>\r
      </section>\r
\r
\r
\r
        <!-- Services Grid -->\r
<!-- Services Grid -->\r
<section class="py-12">\r
  <div class="container mx-auto px-4"> <!-- <-- container ajout\xE9 -->\r
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
    } @else if (servicesAll().length === 0) {\r
      <div class="text-center py-16">\r
        <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
        </svg>\r
        <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun service public trouv\xE9</h3>\r
        <p class="text-neutral-500">Essayez de modifier vos crit\xE8res de recherche</p>\r
      </div>\r
    } @else {\r
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6"> <!-- <-- grid maintenant \xE0 l'int\xE9rieur du container -->\r
        @for (service of servicesAll(); track service.id) {\r
          <div\r
            (click)="openService(service.url)"\r
            class="bg-white p-6 rounded-xl border border-slate-100 shadow-md\r
                   hover:border-primary-500 hover:shadow-lg transition-all\r
                   flex flex-col items-center text-center cursor-pointer">\r
\r
            <!-- Logo / Image -->\r
            <div class="w-16 h-16 bg-accent-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">\r
              <img *ngIf="service.logo" [src]="getImageUrl(service.logo)" alt="{{service.name}}" class="w-12 h-12 object-contain"/>\r
              <svg *ngIf="!service.logo" class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
              </svg>\r
            </div>\r
\r
            <!-- Nom du service -->\r
            <h3 class="font-semibold text-slate-800 mb-2">{{ service.name }}</h3>\r
\r
            <!-- Description -->\r
            <p class="text-sm text-slate-600 mb-4">{{ service.description }}</p>\r
\r
            <!-- Lien -->\r
            <span class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">\r
              En savoir plus \u2192\r
            </span>\r
\r
          </div>\r
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
\r
      \r
    }\r
\r
\r
  </div>\r
</section>\r
     \r
 ` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceComponent, { className: "ServiceComponent", filePath: "src/app/features/services/service/service.component.ts", lineNumber: 16 });
})();
export {
  ServiceComponent
};
//# sourceMappingURL=chunk-YGD3XT3X.js.map
