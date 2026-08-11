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
  HttpClient,
  NgClass,
  NgForOf,
  NgStyle,
  computed,
  environment,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/documents/documents/documents.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c2 = () => ({});
var _forTrack0 = ($index, $item) => $item.id;
function DocumentsComponent_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, DocumentsComponent_Conditional_27_For_2_Template, 4, 0, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DocumentsComponent_Conditional_28_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 29);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_28_For_6_Template_li_click_0_listener() {
      const type_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectType(type_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-gray-200", ctx_r2.selectedType() === type_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
function DocumentsComponent_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 30);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 32);
    \u0275\u0275text(4, "Aucun document trouv\xE9");
    \u0275\u0275elementEnd()();
  }
}
function DocumentsComponent_Conditional_28_Conditional_9_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatFileSize(doc_r5.fileSize));
  }
}
function DocumentsComponent_Conditional_28_Conditional_9_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_28_Conditional_9_For_1_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const doc_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.downloadFile(doc_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\xE9l\xE9charger ");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_28_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 38);
    \u0275\u0275element(3, "path", 39)(4, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 41)(6, "h3", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "span", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, DocumentsComponent_Conditional_28_Conditional_9_For_1_Conditional_11_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, DocumentsComponent_Conditional_28_Conditional_9_For_1_Conditional_12_Template, 4, 0, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(doc_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(doc_r5.category));
    \u0275\u0275advance();
    \u0275\u0275conditional(doc_r5.fileSize ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(doc_r5.filePath ? 12 : -1);
  }
}
function DocumentsComponent_Conditional_28_Conditional_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 49);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_28_Conditional_9_ng_container_5_Template_button_click_1_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(page_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.currentPage() === page_r8 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r2.currentPage() === page_r8 ? \u0275\u0275pureFunction0(3, _c1) : \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function DocumentsComponent_Conditional_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, DocumentsComponent_Conditional_28_Conditional_9_For_1_Template, 13, 4, "div", 33, _forTrack0);
    \u0275\u0275elementStart(2, "div", 34)(3, "button", 35);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_28_Conditional_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(4, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DocumentsComponent_Conditional_28_Conditional_9_ng_container_5_Template, 3, 5, "ng-container", 36);
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_28_Conditional_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(7, " Suivant \xBB ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.documents());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage() === ctx_r2.totalPages());
  }
}
function DocumentsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 23)(2, "h4", 24);
    \u0275\u0275text(3, "Cat\xE9gories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 25);
    \u0275\u0275repeaterCreate(5, DocumentsComponent_Conditional_28_For_6_Template, 2, 3, "li", 26, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275conditionalCreate(8, DocumentsComponent_Conditional_28_Conditional_8_Template, 5, 0, "div", 28)(9, DocumentsComponent_Conditional_28_Conditional_9_Template, 8, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.projects());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.documents().length === 0 ? 8 : 9);
  }
}
var DocumentsComponent = class _DocumentsComponent {
  apiService;
  http;
  API_URL = environment.FileUrl;
  selectedType = signal(null, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  // null = tous les documents
  allDocuments = signal([], ...ngDevMode ? [{ debugName: "allDocuments" }] : []);
  // tous les documents récupérés
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  searchQuery = "";
  pageSize = 5;
  // nombre de documents par page
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  constructor(apiService, http) {
    this.apiService = apiService;
    this.http = http;
  }
  ngOnInit() {
    this.loadDocuments();
    this.loadProjects();
  }
  selectType(typeName) {
    if (this.selectedType() === typeName) {
      this.selectedType.set(null);
    } else {
      this.selectedType.set(typeName);
    }
    this.currentPage.set(1);
    this.filterDocuments();
  }
  filterDocuments() {
    const filtered = this.allDocuments().filter((doc) => !this.selectedType() || doc.typeName === this.selectedType());
    this.totalPages.set(Math.ceil(filtered.length / this.pageSize));
    const start = (this.currentPage() - 1) * this.pageSize;
    const paginated = filtered.slice(start, start + this.pageSize);
    this.documents.set(paginated);
  }
  pages = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }, ...ngDevMode ? [{ debugName: "pages" }] : []);
  goToPage(page) {
    if (page < 1 || page > this.totalPages())
      return;
    this.currentPage.set(page);
    this.filterDocuments();
  }
  nextPage() {
    this.goToPage(this.currentPage() + 1);
  }
  prevPage() {
    this.goToPage(this.currentPage() - 1);
  }
  loadDocuments() {
    this.loading.set(true);
    this.apiService.getPublicDocuments(0, 20).subscribe({
      next: (response) => {
        if (response.success) {
          const filteredDocs = response.data.content.filter((doc) => doc.typeDocument === "DOCUMENT SIMPLE");
          this.allDocuments.set(filteredDocs);
          this.filterDocuments();
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  search() {
    if (!this.searchQuery.trim()) {
      this.loadDocuments();
      return;
    }
    this.loading.set(true);
    this.apiService.searchDocuments(this.searchQuery, 0, 20).subscribe({
      next: (response) => {
        if (response.success)
          this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  getCategoryLabel(category) {
    const labels = { "RAPPORT": "Rapport", "LOI": "Loi", "DECRET": "D\xE9cret", "ARRETE": "Arr\xEAt\xE9", "CIRCULAIRE": "Circulaire", "FORMULAIRE": "Formulaire", "GUIDE": "Guide", "AUTRE": "Autre" };
    return labels[category] || category;
  }
  formatFileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1048576)
      return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  }
  loadProjects() {
    this.apiService.getAllTypes().subscribe({
      next: (response) => {
        console.log("RESPONSE =", response);
        this.projects.set(response);
        console.log("PROJECTS =", this.projects());
      },
      error: (err) => {
        console.error("Erreur API", err);
      }
    });
  }
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  downloadFile(doc) {
    this.http.get(this.getImageUrl(doc.filePath), {
      responseType: "blob"
    }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.title + ".pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  downloadDoc(doc) {
    this.apiService.downloadDocument(doc.id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = doc.title + ".pdf";
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error("Erreur t\xE9l\xE9chargement", err)
    });
  }
  static \u0275fac = function DocumentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsComponent, selectors: [["app-documents"]], decls: 29, vars: 2, consts: [[1, "bg-gradient-to-br", "from-[#00843B]", "to-[#006B30]", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4", "text-white"], [1, "text-primary-100", "text-lg", "max-w-2xl", "mb-2"], [1, "text-green-100", "text-sm"], ["routerLink", "/", 1, "hover:text-white"], [1, "mx-2"], ["routerLink", "/ministere/ministre", 1, "hover:text-white"], [1, "text-white"], [1, "py-12", "bg-neutral-50"], [1, "card", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-neutral-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Rechercher un document...", 1, "input", "pl-10", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 2, "background-color", "#006B30", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "flex", "gap-6", "items-start"], [1, "card", "animate-pulse"], [1, "h-12", "w-12", "bg-neutral-200", "rounded-xl", "mb-4"], [1, "h-5", "bg-neutral-200", "rounded", "w-3/4", "mb-2"], [1, "h-4", "bg-neutral-200", "rounded", "w-1/2"], [1, "w-96", "p-4", "rounded-xl", "border", "border-gray-200", "bg-gray-50"], [1, "font-semibold", "text-gray-700", "mb-4"], [1, "space-y-2"], [1, "px-3", "py-2", "text-gray-800", "rounded-lg", "cursor-pointer", "border", "border-gray-300", "hover:bg-gray-100", "transition-colors", 3, "bg-gray-200"], [1, "flex-1", "bg-white", "rounded-xl", "shadow", "p-4"], [1, "text-center", "py-16"], [1, "px-3", "py-2", "text-gray-800", "rounded-lg", "cursor-pointer", "border", "border-gray-300", "hover:bg-gray-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "text-lg", "font-medium", "text-neutral-700", "mb-2"], [1, "flex", "items-center", "justify-between", "py-3", "border-b", "last:border-b-0"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "flex-shrink-0", "w-12", "h-12", "flex", "items-center", "justify-center", "bg-red-100", "rounded-xl"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "w-6", "h-6"], ["d", "M6 2H14L18 6V20C18 21.1046 17.1046 22 16 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z", "fill", "#E53E3E"], ["d", "M14 2V6H18", "fill", "white"], [1, "flex-1", "px-4", "min-w-0"], [1, "text-sm", "font-semibold", "text-neutral-900", "truncate"], [1, "flex", "items-center", "gap-2", "mt-1", "text-xs", "text-neutral-400"], [1, "badge-primary"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-red-600", "text-white", "text-sm", "rounded-xl", "hover:bg-red-700", "transition-colors"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "bg-red-600", "text-white", "text-sm", "rounded-xl", "hover:bg-red-700", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [3, "click", "ngClass", "ngStyle"]], template: function DocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Consultez et t\xE9l\xE9chargez les documents officiels du minist\xE8re. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nav", 4)(7, "a", 5);
      \u0275\u0275text(8, "Accueil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275text(12, "Ressources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 6);
      \u0275\u0275text(14, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "Documents");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 9)(18, "div", 1)(19, "div", 10)(20, "div", 11)(21, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 13);
      \u0275\u0275element(23, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function DocumentsComponent_Template_input_keyup_enter_24_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275listener("click", function DocumentsComponent_Template_button_click_25_listener() {
        return ctx.search();
      });
      \u0275\u0275text(26, "Rechercher");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(27, DocumentsComponent_Conditional_27_Template, 3, 1, "div", 17)(28, DocumentsComponent_Conditional_28_Template, 10, 1, "div", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 27 : 28);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgStyle, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsComponent, [{
    type: Component,
    args: [{ selector: "app-documents", standalone: true, imports: [CommonModule, FormsModule], template: `  <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">\r
      <div class="container mx-auto px-4">\r
        <h1 class="text-4xl font-bold mb-4 text-white">Documents</h1>\r
        <p class="text-primary-100 text-lg max-w-2xl mb-2">\r
          Consultez et t\xE9l\xE9chargez les documents officiels du minist\xE8re.\r
        </p>\r
        <nav class="text-green-100 text-sm">\r
          <a routerLink="/" class="hover:text-white">Accueil</a>\r
          <span class="mx-2">\u203A</span>\r
          <a routerLink="/ministere/ministre" class="hover:text-white">Ressources</a>\r
          <span class="mx-2">\u203A</span>\r
          <span class="text-white">Documents</span>\r
        </nav>\r
      </div>\r
    </section>\r
    \r
    <section class="py-12 bg-neutral-50">\r
      <div class="container mx-auto px-4">\r
        <div class="card mb-8">\r
          <div class="flex flex-col md:flex-row gap-4">\r
            <div class="flex-1 relative">\r
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
              </svg>\r
              <input type="text" [(ngModel)]="searchQuery" (keyup.enter)="search()" placeholder="Rechercher un document..." class="input pl-10" >\r
            </div>\r
            <button (click)="search()" class="btn-primary" style="background-color: #006B30;">Rechercher</button>\r
          </div>\r
        </div>\r
        \r
        @if (loading()) {\r
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
            @for (i of [1,2,3,4,5,6]; track i) {\r
              <div class="card animate-pulse">\r
                <div class="h-12 w-12 bg-neutral-200 rounded-xl mb-4"></div>\r
                <div class="h-5 bg-neutral-200 rounded w-3/4 mb-2"></div>\r
                <div class="h-4 bg-neutral-200 rounded w-1/2"></div>\r
              </div>\r
            }\r
          </div>\r
        } @else {\r
\r
            <div class="flex gap-6 items-start">\r
\r
            <!-- Colonne gauche : types de documents -->\r
            <div class="w-96 p-4 rounded-xl border border-gray-200 bg-gray-50">\r
                <h4 class="font-semibold text-gray-700 mb-4">Cat\xE9gories</h4>\r
                <ul class="space-y-2">\r
                @for (type of projects(); track type.id) {\r
                    <li \r
                    class="px-3 py-2 text-gray-800 rounded-lg cursor-pointer border border-gray-300 hover:bg-gray-100 transition-colors"\r
                    [class.bg-gray-200]="selectedType() === type.name"\r
                    (click)="selectType(type.name)">\r
                    {{ type.name }}\r
                    </li>\r
                }\r
                </ul>\r
            </div>\r
\r
            <!-- Colonne droite : documents -->\r
            <div class="flex-1 bg-white rounded-xl shadow p-4">\r
                @if (documents().length === 0) {\r
                <!-- Message si aucun document trouv\xE9 -->\r
                <div class="text-center py-16">\r
                    <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>\r
                    </svg>\r
                    <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun document trouv\xE9</h3>\r
                </div>\r
                } @else {\r
                <!-- Affichage des documents -->\r
                @for (doc of documents(); track doc.id) {\r
                    <div class="flex items-center justify-between py-3 border-b last:border-b-0">\r
                    <!-- Ic\xF4ne PDF -->\r
                    <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl">\r
                        <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
                        <path d="M6 2H14L18 6V20C18 21.1046 17.1046 22 16 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z" fill="#E53E3E"/>\r
                        <path d="M14 2V6H18" fill="white"/>\r
                        </svg>\r
                    </div>\r
\r
                    <!-- Titre + cat\xE9gorie + taille -->\r
                    <div class="flex-1 px-4 min-w-0">\r
                        <h3 class="text-sm font-semibold text-neutral-900 truncate">{{ doc.title }}</h3>\r
                        <div class="flex items-center gap-2 mt-1 text-xs text-neutral-400">\r
                        <span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span>\r
                        @if (doc.fileSize) {\r
                            <span>{{ formatFileSize(doc.fileSize) }}</span>\r
                        }\r
                        </div>\r
                    </div>\r
\r
\r
                    <!-- Bouton T\xE9l\xE9charger -->\r
                    @if (doc.filePath) {\r
                      <button (click)="downloadFile(doc)"\r
                              class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-xl hover:bg-red-700 transition-colors">\r
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>\r
                        </svg>\r
                        T\xE9l\xE9charger\r
                      </button>\r
                    }\r
\r
                    </div>\r
                }\r
\r
\r
                <div class="flex justify-end items-center mt-2 px-6 py-2 gap-2 border-t border-gray-200 bg-gray-50 rounded-b-lg">\r
\r
  <button (click)="prevPage()" \r
          [disabled]="currentPage() === 1"\r
          class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
    \xAB Pr\xE9c\xE9dent\r
  </button>\r
\r
  <ng-container *ngFor="let page of pages()">\r
    <button (click)="goToPage(page)"\r
            [ngClass]="currentPage() === page\r
                    ? 'px-3 py-1 border rounded text-white' \r
                    : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors'"\r
            [ngStyle]="currentPage() === page ? {'background-color':'#00843B', 'border-color':'#00843B'} : {}">\r
      {{ page }}\r
    </button>\r
  </ng-container>\r
\r
  <button (click)="nextPage()" \r
          [disabled]="currentPage() === totalPages()"\r
          class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
    Suivant \xBB\r
  </button>\r
\r
</div>\r
\r
\r
                \r
                }\r
            </div>\r
\r
            </div>\r
\r
\r
\r
        }\r
\r
\r
\r
\r
\r
\r
\r
      </div>\r
    </section>\r
\r
\r
\r
    ` }]
  }], () => [{ type: ApiService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsComponent, { className: "DocumentsComponent", filePath: "src/app/features/documents/documents/documents.component.ts", lineNumber: 16 });
})();
export {
  DocumentsComponent
};
//# sourceMappingURL=chunk-HXK7B6EL.js.map
