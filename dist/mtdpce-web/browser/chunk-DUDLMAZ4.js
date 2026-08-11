import {
  MinistereService
} from "./chunk-CZUQZYGK.js";
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
  ɵɵreference,
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

// src/app/features/admin/ministere/etats/etats.component.ts
var _c0 = () => [];
var _c1 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c2 = () => ({});
var _c3 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function EtatsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_13_Template(rf, ctx) {
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
function EtatsComponent_Conditional_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 23)(1, "td", 27)(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 29)(7, "div", 30)(8, "button", 31);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_14_For_12_Template_button_click_8_listener() {
      const project_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editProject(project_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 32);
    \u0275\u0275element(10, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_14_For_12_Template_button_click_11_listener() {
      const project_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteProject(project_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 35);
    \u0275\u0275element(13, "path", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r3.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r3.valeur);
  }
}
function EtatsComponent_Conditional_14_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_14_ng_container_16_Template_button_click_1_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.currentPage.set(i_r6 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.currentPage() === i_r6 + 1 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r3.currentPage() === i_r6 + 1 ? \u0275\u0275pureFunction0(3, _c1) : \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r6 + 1, " ");
  }
}
function EtatsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "table", 18)(2, "thead")(3, "tr", 19)(4, "th", 20);
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 20);
    \u0275\u0275text(7, "Valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 21);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody", 22);
    \u0275\u0275repeaterCreate(11, EtatsComponent_Conditional_14_For_12_Template, 14, 2, "tr", 23, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24)(14, "button", 25);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_14_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(15, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, EtatsComponent_Conditional_14_ng_container_16_Template, 3, 5, "ng-container", 26);
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(18, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r3.paginatedProjects());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0).constructor(ctx_r3.totalPages()));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function EtatsComponent_Conditional_15_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, " Le nom est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_15_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, " Le nom est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_15_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
}
function EtatsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 38)(2, "div", 39)(3, "h2", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 41, 0);
    \u0275\u0275listener("ngSubmit", function EtatsComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveProject());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275elementStart(10, "span", 43);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 44, 1);
    \u0275\u0275twoWayListener("ngModelChange", function EtatsComponent_Conditional_15_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.nom, $event) || (ctx_r3.form.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EtatsComponent_Conditional_15_p_14_Template, 2, 0, "p", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 42);
    \u0275\u0275text(17, "Valeur ");
    \u0275\u0275elementStart(18, "span", 43);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 46, 1);
    \u0275\u0275twoWayListener("ngModelChange", function EtatsComponent_Conditional_15_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.valeur, $event) || (ctx_r3.form.valeur = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EtatsComponent_Conditional_15_p_22_Template, 2, 0, "p", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 47)(24, "button", 48);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_15_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(25, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 49);
    \u0275\u0275conditionalCreate(27, EtatsComponent_Conditional_15_Conditional_27_Template, 1, 0, "div", 50);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const projectForm_r8 = \u0275\u0275reference(6);
    const nameField_r9 = \u0275\u0275reference(13);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingProject() ? "Modifier l \xE9tat" : "Nouveau \xE9tat", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.nom);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nameField_r9.invalid && projectForm_r8.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.valeur);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nameField_r9.invalid && projectForm_r8.submitted);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingProject() ? "Mettre \xE0 jour" : "Enr\xE9gistrer", " ");
  }
}
function EtatsComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 58);
    \u0275\u0275elementEnd();
  }
}
function EtatsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 52);
    \u0275\u0275template(2, EtatsComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 53)(3, EtatsComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 53)(4, EtatsComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 53);
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c3, ctx_r3.notification().type === "success", ctx_r3.notification().type === "error", ctx_r3.notification().type === "info"));
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
function EtatsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 59)(2, "h3", 60);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62)(7, "button", 63);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 64);
    \u0275\u0275listener("click", function EtatsComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
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
var EtatsComponent = class _EtatsComponent {
  apiService;
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingProject = signal(null, ...ngDevMode ? [{ debugName: "editingProject" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    nom: "",
    valeur: ""
  };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadProjects();
  }
  // Charger tous les projets
  loadProjects() {
    this.loading.set(true);
    this.apiService.getAllEtats().subscribe({
      next: (response) => {
        console.log("RESPONSE =", response);
        this.projects.set(response.data.content);
        console.log("PROJECTS =", this.projects());
        this.totalPages.set(Math.ceil(response.data.content.length / this.pageSize));
        this.currentPage.set(1);
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Erreur API", err);
        this.loading.set(false);
      }
    });
  }
  // Retourne uniquement les projets de la page actuelle
  paginatedProjects() {
    const all = this.projects();
    const start = (this.currentPage() - 1) * this.pageSize;
    return all.slice(start, start + this.pageSize);
  }
  // Pagination
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  }
  // Modal et CRUD
  openModal() {
    this.form = { nom: "", valeur: "" };
    this.editingProject.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingProject.set(null);
  }
  editProject(project) {
    this.form = {
      nom: project.nom,
      valeur: project.valeur
    };
    this.editingProject.set(project);
    this.showModal.set(true);
  }
  saveProject() {
    if (!this.form.nom)
      return;
    this.saving.set(true);
    const editing = this.editingProject();
    const request = editing ? this.apiService.updateEtats(editing.id, this.form) : this.apiService.createEtat(this.form);
    request.subscribe({
      next: (response) => {
        console.log("API response =", response);
        this.loadProjects();
        this.closeModal();
        this.saving.set(false);
        this.showNotification(editing ? "Type Document mis \xE0 jour avec succ\xE8s" : "Type Document cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
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
  deleteProject(article) {
    console.log("fvfv");
    this.openConfirmModal(`Voulez-vous vraiment supprimer ce type de document "${article.nom}" ?`, () => {
      this.apiService.deleteEtats(article.id).subscribe({
        next: () => {
          this.loadProjects();
          this.closeConfirmModal();
          this.showNotification("Projet supprim\xE9 avec succ\xE8s", "success");
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
  static \u0275fac = function EtatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EtatsComponent)(\u0275\u0275directiveInject(MinistereService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EtatsComponent, selectors: [["app-etats"]], decls: 18, vars: 4, consts: [["projectForm", "ngForm"], ["nameField", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0", "shadow-lg", "rounded-lg", "overflow-hidden"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "w-full", "table-auto"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left"], [1, "px-6", "py-3", "text-right", "whitespace-nowrap"], [1, "bg-white", "divide-y", "divide-gray-200"], [1, "hover:bg-gray-50", "transition"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "px-6", "py-4"], [1, "font-semibold", "text-gray-900", "truncate"], [1, "px-6", "py-4", "text-right", "whitespace-nowrap"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-danger-500"], ["type", "text", "name", "nom", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["type", "text", "name", "valeur", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "border-2", "border-t-white", "border-gray-200", "rounded-full", "animate-spin"], [1, "text-sm", "text-red-500", "mt-1"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function EtatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4, "Etats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "G\xE9rez les \xE9tats et les statistiques des r\xE9alisations du minist\xE8re");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function EtatsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275conditionalCreate(12, EtatsComponent_Conditional_12_Template, 2, 0, "div", 10)(13, EtatsComponent_Conditional_13_Template, 5, 0, "div", 10)(14, EtatsComponent_Conditional_14_Template, 19, 4, "div", 11);
      \u0275\u0275conditionalCreate(15, EtatsComponent_Conditional_15_Template, 29, 8, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, EtatsComponent_Conditional_16_Template, 7, 9, "div", 13);
      \u0275\u0275conditionalCreate(17, EtatsComponent_Conditional_17_Template, 11, 1, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.projects().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EtatsComponent, [{
    type: Component,
    args: [{ selector: "app-etats", standalone: true, imports: [CommonModule, FormsModule], template: `  <div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Etats</h1>\r
          <p class="text-neutral-500">G\xE9rez les \xE9tats et les statistiques des r\xE9alisations du minist\xE8re</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouveau \r
        </button>\r
      </div>\r
   <div class="card p-0 shadow-lg rounded-lg overflow-hidden">\r
    @if (loading()) {\r
          <div class="p-8 text-center">\r
            <div class="spinner w-8 h-8 mx-auto"></div>\r
          </div>\r
        } @else if (projects().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun minist\xE8re pour le moment</p>\r
          </div>\r
        } @else {\r
\r
    <div class="table-container">\r
\r
        <table class="w-full table-auto">\r
        <thead>\r
            <tr class="bg-gray-50">\r
            <th class="px-6 py-3 text-left">Nom</th>\r
            <th class="px-6 py-3 text-left">Valeur</th>\r
            <th class="px-6 py-3 text-right whitespace-nowrap">Actions</th>\r
            </tr>\r
        </thead>\r
\r
        <tbody class="bg-white divide-y divide-gray-200">\r
            @for (project of paginatedProjects(); track project.id) {\r
            <tr class="hover:bg-gray-50 transition">\r
                \r
                <!-- Nom -->\r
                <td class="px-6 py-4">\r
                <p class="font-semibold text-gray-900 truncate">{{ project.nom }}</p>\r
                </td>\r
                <td>{{ project.valeur }}</td>\r
\r
                \r
\r
                <!-- Actions -->\r
                <td class="px-6 py-4 text-right whitespace-nowrap">\r
                <div class="flex justify-end gap-2">\r
                    \r
                    <!-- Modifier -->\r
                    <button (click)="editProject(project)"\r
                    class="p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition"\r
                    title="Modifier">\r
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />\r
                    </svg>\r
                    </button>\r
\r
                    <!-- Supprimer -->\r
                    <button (click)="deleteProject(project)"\r
                    class="p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition"\r
                    title="Supprimer">\r
                    <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\r
                    </svg>\r
                    </button>\r
\r
                </div>\r
                </td>\r
            </tr>\r
            }\r
        </tbody>\r
        </table>\r
\r
\r
        <!-- Pagination int\xE9gr\xE9e au tableau -->\r
        <!-- Pagination int\xE9gr\xE9e au tableau avec couleur respectant le code couleur -->\r
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
        <ng-container *ngFor="let page of [].constructor(totalPages()) ; let i = index">\r
            <button (click)="currentPage.set(i+1)" \r
                    [ngClass]="currentPage() === i+1 \r
                            ? 'px-3 py-1 border rounded text-white' \r
                            : 'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors'"\r
                    [ngStyle]="currentPage() === i+1 ? {'background-color':'#00843B', 'border-color':'#00843B'} : {}">\r
            {{ i+1 }}\r
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
    </div> }\r
\r
\r
            \r
        @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
            <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
                <h2 class="text-xl font-semibold text-neutral-900">\r
                {{ editingProject() ? 'Modifier l \xE9tat' : 'Nouveau \xE9tat' }}\r
                </h2>\r
            </div>\r
            <form #projectForm="ngForm" (ngSubmit)="saveProject()" class="p-6 space-y-5">\r
\r
                <!-- Nom -->\r
                <div>\r
                <label class="label">Nom <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.nom" name="nom" #nameField="ngModel"\r
                        class="input" required>\r
                <!-- Erreur -->\r
                <p *ngIf="nameField.invalid && projectForm.submitted" class="text-sm text-red-500 mt-1">\r
                    Le nom est obligatoire.\r
                </p>\r
                </div>\r
\r
                <div>\r
                <label class="label">Valeur <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.valeur" name="valeur" #nameField="ngModel"\r
                        class="input" required>\r
                <!-- Erreur -->\r
                <p *ngIf="nameField.invalid && projectForm.submitted" class="text-sm text-red-500 mt-1">\r
                    Le nom est obligatoire.\r
                </p>\r
                </div>\r
\r
              \r
\r
                <!-- Statut et Progression -->\r
                \r
               \r
\r
                <!-- Dates -->\r
                \r
\r
                <!-- Partenaire et Budget -->\r
               \r
\r
                <!-- Actions -->\r
                <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">\r
\r
                <!-- Annuler -->\r
                <button type="button" (click)="closeModal()"\r
                        class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">\r
                    Annuler\r
                </button>\r
\r
                <!-- Sauvegarder -->\r
                <button type="submit" [disabled]="saving()"\r
                        class="px-4 py-2 rounded-lg bg-[#00843B] text-white hover:bg-[#006830] transition-colors font-medium flex items-center justify-center gap-2">\r
                    @if (saving()) { \r
                    <div class="spinner w-4 h-4 border-2 border-t-white border-gray-200 rounded-full animate-spin"></div> \r
                    }\r
                    {{ editingProject() ? 'Mettre \xE0 jour' : 'Enr\xE9gistrer' }}\r
                </button>\r
\r
                </div>\r
            </form>\r
            </div>\r
        </div>\r
        }\r
\r
    </div>\r
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
}` }]
  }], () => [{ type: MinistereService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EtatsComponent, { className: "EtatsComponent", filePath: "src/app/features/admin/ministere/etats/etats.component.ts", lineNumber: 14 });
})();
export {
  EtatsComponent
};
//# sourceMappingURL=chunk-DUDLMAZ4.js.map
