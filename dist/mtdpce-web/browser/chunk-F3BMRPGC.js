import {
  Router,
  RouterModule
} from "./chunk-MJTGFJCP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-IZU5KOS7.js";
import {
  ApiService
} from "./chunk-JNH6X4BV.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/admin/ministere/ministere.component.ts
var _c0 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c1 = () => ({});
var _c2 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function MinistereComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function MinistereComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275element(2, "path", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Aucun minist\xE8re pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function MinistereComponent_Conditional_14_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 23)(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25)(10, "div", 26)(11, "button", 27);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_For_14_Template_button_click_11_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 28);
    \u0275\u0275element(13, "path", 29)(14, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 31);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_For_14_Template_button_click_15_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 32);
    \u0275\u0275element(17, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 34);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_For_14_Template_button_click_18_listener() {
      const article_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteArticle(article_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 35);
    \u0275\u0275element(20, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const article_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r3.nomGeneral);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.nomReel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r3.acronyme);
  }
}
function MinistereComponent_Conditional_14_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_ng_container_18_Template_button_click_1_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToPage(page_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.currentPage() === page_r6 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r3.currentPage() === page_r6 ? \u0275\u0275pureFunction0(3, _c0) : \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r6, " ");
  }
}
function MinistereComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom G\xE8neral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom d'accroche");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Accronyme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 19);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, MinistereComponent_Conditional_14_For_14_Template, 21, 3, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 20)(16, "button", 21);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(17, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MinistereComponent_Conditional_14_ng_container_18_Template, 3, 5, "ng-container", 22);
    \u0275\u0275elementStart(19, "button", 21);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_14_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(20, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r3.articles());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function MinistereComponent_Conditional_15_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 53);
  }
}
function MinistereComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 38)(2, "div", 39)(3, "h2", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 41, 0);
    \u0275\u0275listener("ngSubmit", function MinistereComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveArticle());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Nom G\xE9n\xE9ral ");
    \u0275\u0275elementStart(10, "span", 43);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 44, 1);
    \u0275\u0275twoWayListener("ngModelChange", function MinistereComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.nomGeneral, $event) || (ctx_r3.form.nomGeneral = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 45)(15, "div")(16, "label", 42);
    \u0275\u0275text(17, "Nom d'accroche ");
    \u0275\u0275elementStart(18, "span", 43);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 46, 1);
    \u0275\u0275twoWayListener("ngModelChange", function MinistereComponent_Conditional_15_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.nomReel, $event) || (ctx_r3.form.nomReel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 42);
    \u0275\u0275text(24, "Acronyme");
    \u0275\u0275elementStart(25, "span", 43);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 47, 1);
    \u0275\u0275twoWayListener("ngModelChange", function MinistereComponent_Conditional_15_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.acronyme, $event) || (ctx_r3.form.acronyme = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div")(30, "label", 42);
    \u0275\u0275text(31, "Mission G\xE9n\xE9rale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function MinistereComponent_Conditional_15_Template_textarea_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.missionGeneral, $event) || (ctx_r3.form.missionGeneral = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "label", 42);
    \u0275\u0275text(35, "Logo ");
    \u0275\u0275elementStart(36, "span", 43);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 49);
    \u0275\u0275listener("change", function MinistereComponent_Conditional_15_Template_input_change_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "label", 42);
    \u0275\u0275text(41, "Image pour Premi\xE8re Page ");
    \u0275\u0275elementStart(42, "span", 43);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "input", 49);
    \u0275\u0275listener("change", function MinistereComponent_Conditional_15_Template_input_change_44_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected1($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 50)(46, "button", 51);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_15_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(47, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 52);
    \u0275\u0275conditionalCreate(49, MinistereComponent_Conditional_15_Conditional_49_Template, 1, 0, "div", 53);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Modifier l'article" : "Nouvel article", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.nomGeneral);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.nomReel);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.acronyme);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.missionGeneral);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingArticle() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function MinistereComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 57);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function MinistereComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 57);
    \u0275\u0275element(1, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function MinistereComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 57);
    \u0275\u0275element(1, "path", 60);
    \u0275\u0275elementEnd();
  }
}
function MinistereComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 54);
    \u0275\u0275template(2, MinistereComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 55)(3, MinistereComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 55)(4, MinistereComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 55);
    \u0275\u0275elementStart(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c2, ctx_r3.notification().type === "success", ctx_r3.notification().type === "error", ctx_r3.notification().type === "info"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.notification().type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.notification().message);
  }
}
function MinistereComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 61)(2, "h3", 62);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64)(7, "button", 65);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 66);
    \u0275\u0275listener("click", function MinistereComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmModal().onConfirm());
    });
    \u0275\u0275text(10, " Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.confirmModal().message);
  }
}
var MinistereComponent = class _MinistereComponent {
  apiService;
  router;
  // ---------------- NOTIFICATION MODAL ----------------
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingArticle = signal(null, ...ngDevMode ? [{ debugName: "editingArticle" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  selectedImage = null;
  selectedImage1 = null;
  fileError = false;
  fileError1 = false;
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    nomGeneral: "",
    nomReel: "",
    acronyme: "",
    missionGeneral: "",
    presentationSynthetique: "",
    presentationGlobale: ""
  };
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
  }
  ngOnInit() {
    this.loadArticles();
  }
  loadArticles(page = 0) {
    this.loading.set(true);
    this.apiService.getAllMins(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.articles.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(page + 1);
        }
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadArticles(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadArticles(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadArticles(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openModal() {
    this.form = { nomGeneral: "", nomReel: "", acronyme: "", missionGeneral: "", presentationGlobale: "", presentationSynthetique: "" };
    this.selectedImage = null;
    this.selectedImage1 = null;
    this.fileError = false;
    this.fileError1 = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }
  closeModal(form) {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedImage = null;
    this.selectedImage1 = null;
    this.fileError = false;
    this.fileError1 = false;
    form?.resetForm();
  }
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedImage = null;
      return;
    }
    const file = input.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Pour une actualit\xE9, veuillez s\xE9lectionner une image");
      input.value = "";
      this.selectedImage = null;
      return;
    }
    this.selectedImage = file;
    this.fileError = false;
  }
  onFileSelected1(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedImage1 = null;
      return;
    }
    const file = input.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Pour une actualit\xE9, veuillez s\xE9lectionner une image");
      input.value = "";
      this.selectedImage1 = null;
      return;
    }
    this.selectedImage1 = file;
    this.fileError1 = false;
  }
  // Fonction viewArticle
  viewArticle(article) {
    this.router.navigate([`/admin/ministere`, article.id]);
  }
  editArticle(article) {
    this.form = {
      nomGeneral: article.nomGeneral,
      nomReel: article.nomReel,
      acronyme: article.acronyme,
      missionGeneral: article.missionGeneral,
      presentationGlobale: article.presentationGlobale,
      presentationSynthetique: article.presentationSynthetique
    };
    this.editingArticle.set(article);
    this.showModal.set(true);
  }
  saveArticle(form) {
    if (!this.form.nomGeneral || !this.form.nomReel)
      return;
    this.saving.set(true);
    const editing = this.editingArticle();
    const articleDTO = {
      nomGeneral: this.form.nomGeneral,
      nomReel: this.form.nomReel,
      acronyme: this.form.acronyme,
      missionGeneral: this.form.missionGeneral,
      presentationGlobale: this.form.presentationGlobale,
      presentationSynthetique: this.form.presentationSynthetique
    };
    const formData = new FormData();
    formData.append("ministere", new Blob([JSON.stringify(articleDTO)], { type: "application/json" }));
    formData.append("authorId", "1");
    if (this.selectedImage)
      formData.append("logo", this.selectedImage);
    if (this.selectedImage1)
      formData.append("image", this.selectedImage1);
    const request = editing ? this.apiService.updatemin(editing.id, formData) : this.apiService.createmin(formData);
    request.subscribe({
      next: (response) => {
        this.loadArticles();
        this.closeModal(form);
        this.saving.set(false);
        this.showNotification(editing ? "Minist\xE8re mis \xE0 jour avec succ\xE8s" : "Minist\xE8re cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
  deleteArticle1(article) {
    if (confirm(`Supprimer l'article "${article.nomGeneral}" ?`)) {
      this.apiService.deleteArticle(article.id).subscribe({
        next: () => this.loadArticles()
      });
    }
  }
  // ----------------- HELPERS -----------------
  trackByArticleId(index, article) {
    return article.id;
  }
  // ----------------- NOTIFICATIONS -----------------
  showNotification(message, type = "success", duration = 2e3) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update((n) => __spreadProps(__spreadValues({}, n), { show: false })), duration);
  }
  // ----------------- CONFIRMATION MODAL -----------------
  confirmModal = signal({
    show: false,
    message: "",
    onConfirm: () => {
    }
  }, ...ngDevMode ? [{ debugName: "confirmModal" }] : []);
  openConfirmModal(message, onConfirm) {
    this.confirmModal.set({ show: true, message, onConfirm });
  }
  closeConfirmModal() {
    this.confirmModal.update((c) => __spreadProps(__spreadValues({}, c), { show: false }));
  }
  deleteArticle(article) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.nomGeneral}" ?`, () => {
      this.apiService.deleteMin(article.id).subscribe({
        next: () => {
          this.loadArticles();
          this.closeConfirmModal();
          this.showNotification("Article supprim\xE9 avec succ\xE8s", "success");
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
  static \u0275fac = function MinistereComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinistereComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MinistereComponent, selectors: [["app-ministere"]], decls: 18, vars: 4, consts: [["articleForm", "ngForm"], ["title", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "max-w-xs"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "px-6", "py-4", "text-right"], [1, "flex", "justify-end", "gap-2"], ["title", "Voir l'article", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-blue-500", "rounded-full", "bg-white", "hover:bg-blue-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], ["novalidate", "", 1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-red-500"], ["type", "text", "name", "nomGeneral", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["type", "text", "name", "nomReel", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "acronyme", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "missionGeneral", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/*", 1, "input", 3, "change"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function MinistereComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "G\xE9rez les minist\xE8res");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function MinistereComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouvel minist\xE8re ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275conditionalCreate(12, MinistereComponent_Conditional_12_Template, 2, 0, "div", 10)(13, MinistereComponent_Conditional_13_Template, 5, 0, "div", 10)(14, MinistereComponent_Conditional_14_Template, 21, 3, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, MinistereComponent_Conditional_15_Template, 51, 8, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, MinistereComponent_Conditional_16_Template, 7, 9, "div", 13);
      \u0275\u0275conditionalCreate(17, MinistereComponent_Conditional_17_Template, 11, 1, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.articles().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinistereComponent, [{
    type: Component,
    args: [{ selector: "app-ministere", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `  <div class="space-y-6">\r
      <!-- Header -->\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Minist\xE8re</h1>\r
          <p class="text-neutral-500">G\xE9rez les minist\xE8res</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouvel minist\xE8re\r
        </button>\r
      </div>\r
      \r
      <!-- Table -->\r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center">\r
            <div class="spinner w-8 h-8 mx-auto"></div>\r
          </div>\r
        } @else if (articles().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun minist\xE8re pour le moment</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Nom G\xE8neral</th>\r
                  <th>Nom d'accroche</th>\r
                  <th>Accronyme</th>\r
                  \r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (article of articles(); track article.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="max-w-xs">\r
                        <p class="font-medium text-neutral-900 truncate">{{ article.nomGeneral }}</p>\r
                        \r
                      </div>\r
                    </td>\r
                    <td>{{ article.nomReel  }}</td>\r
                     <td>{{ article.acronyme  }}</td>\r
                   \r
                    \r
                    <td class="px-6 py-4 text-right">\r
                      <div class="flex justify-end gap-2">\r
\r
                        <button (click)="viewArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-blue-500 rounded-full bg-white hover:bg-blue-50 transition-colors"\r
                                title="Voir l'article">\r
                          <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Modifier -->\r
                        <button (click)="editArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                                title="Modifier">\r
                          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <!-- Supprimer -->\r
                        <button (click)="deleteArticle(article)"\r
                                class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"\r
                                title="Supprimer">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                          </svg>\r
                        </button>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
\r
          <!-- Pagination int\xE9gr\xE9e au tableau avec couleur #00843B -->\r
          <div class="flex justify-end items-center mt-2 px-6 py-2 gap-2 border-t border-gray-200 bg-gray-50 rounded-b-lg">\r
          <!-- Bouton pr\xE9c\xE9dent -->\r
          <button (click)="prevPage()" \r
                  [disabled]="currentPage() === 1"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              &laquo; Pr\xE9c\xE9dent\r
          </button>\r
\r
          <!-- Pages num\xE9rot\xE9es -->\r
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
          <!-- Bouton suivant -->\r
          <button (click)="nextPage()" \r
                  [disabled]="currentPage() === totalPages()"\r
                  class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 transition-colors">\r
              Suivant &raquo;\r
          </button>\r
          </div>\r
\r
            \r
          </div>\r
        }\r
      </div>\r
      \r
      \r
      <!-- Modal -->\r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">\r
              {{ editingArticle() ? "Modifier l'article" : 'Nouvel article' }}\r
            </h2>\r
\r
            </div>\r
            \r
            <form #articleForm="ngForm" (ngSubmit)="saveArticle()"  class="p-6 space-y-5" novalidate>\r
              <div>\r
                <label class="label">Nom G\xE9n\xE9ral <span class="text-red-500">*</span></label>\r
\r
                <input type="text"\r
                      [(ngModel)]="form.nomGeneral"\r
                      name="nomGeneral"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
\r
               \r
              </div>\r
\r
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
\r
                <div>\r
                <label class="label">Nom d'accroche <span class="text-red-500">*</span></label>\r
\r
                <input type="text"\r
                      [(ngModel)]="form.nomReel"\r
                      name="nomReel"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
\r
                \r
              </div>\r
\r
              \r
             <div>\r
                <label class="label">Acronyme<span class="text-red-500">*</span></label>\r
\r
                <input type="text"\r
                      [(ngModel)]="form.acronyme"\r
                      name="acronyme"\r
                      #title="ngModel"\r
                      class="input"\r
                      required>\r
\r
                \r
              </div>\r
\r
\r
               </div>\r
\r
              \r
\r
              <div>\r
                    <label class="label">Mission G\xE9n\xE9rale</label>\r
                    <textarea [(ngModel)]="form.missionGeneral" name="missionGeneral" rows="2" class="input resize-none"></textarea>\r
                </div>\r
\r
              \r
             <div>\r
                <label class="label">Logo <span class="text-red-500">*</span></label>\r
                <input type="file" (change)="onFileSelected($event)" accept="image/*" class="input">\r
              </div>\r
\r
               <div>\r
                <label class="label">Image pour Premi\xE8re Page <span class="text-red-500">*</span></label>\r
                <input type="file" (change)="onFileSelected1($event)" accept="image/*" class="input">\r
              </div>\r
\r
              \r
             \r
              \r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="px-4 py-2 rounded-lg bg-[#00843B] text-white hover:bg-[#006830] transition-colors font-medium flex items-center justify-center gap-2">\r
                  @if (saving()) {\r
                    <div class="spinner w-4 h-4 mr-2"></div>\r
                  }\r
                  {{ editingArticle() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
\r
\r
    <!-- Notification Modal -->\r
@if(notification().show) {\r
  <div class="fixed top-4 right-4 z-50 pointer-events-none">\r
    <div\r
      [ngClass]="{\r
        'bg-green-50 border-green-500 text-green-700': notification().type === 'success',\r
        'bg-red-50 border-red-500 text-red-700': notification().type === 'error',\r
        'bg-blue-50 border-blue-500 text-blue-700': notification().type === 'info'\r
      }"\r
      class="pointer-events-auto border-l-4 rounded-lg shadow-lg p-6 max-w-sm w-full flex items-center gap-4 animate-fade-in"\r
    >\r
      <svg *ngIf="notification().type === 'success'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'error'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r
      </svg>\r
      <svg *ngIf="notification().type === 'info'" class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"></path>\r
      </svg>\r
      <span class="text-sm font-medium">{{ notification().message }}</span>\r
    </div>\r
  </div>\r
}\r
\r
\r
\r
<!-- Modal de confirmation -->\r
@if(confirmModal().show) {\r
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">\r
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">\r
      <h3 class="text-lg font-semibold text-neutral-900">Confirmation</h3>\r
      <p class="text-neutral-700">{{ confirmModal().message }}</p>\r
      \r
      <div class="flex justify-end gap-3 mt-4">\r
        <button (click)="closeConfirmModal()" \r
                class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium">\r
          Annuler\r
        </button>\r
        <button (click)="confirmModal().onConfirm()" \r
                class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium">\r
          Supprimer\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
` }]
  }], () => [{ type: ApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MinistereComponent, { className: "MinistereComponent", filePath: "src/app/features/admin/ministere/ministere.component.ts", lineNumber: 15 });
})();
export {
  MinistereComponent
};
//# sourceMappingURL=chunk-F3BMRPGC.js.map
