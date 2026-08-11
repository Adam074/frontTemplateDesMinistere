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

// src/app/features/admin/types/types.component.ts
var _c0 = () => [];
var _c1 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c2 = () => ({});
var _c3 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function TypesComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 24)(2, "p", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 27)(7, "div", 28)(8, "button", 29);
    \u0275\u0275listener("click", function TypesComponent_For_24_Template_button_click_8_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 30);
    \u0275\u0275element(10, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function TypesComponent_For_24_Template_button_click_11_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 33);
    \u0275\u0275element(13, "path", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", project_r2.description || "-", " ");
  }
}
function TypesComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 35);
    \u0275\u0275listener("click", function TypesComponent_ng_container_28_Template_button_click_1_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.currentPage.set(i_r5 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.currentPage() === i_r5 + 1 ? "px-3 py-1 border rounded text-white" : "px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors")("ngStyle", ctx_r2.currentPage() === i_r5 + 1 ? \u0275\u0275pureFunction0(3, _c1) : \u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r5 + 1, " ");
  }
}
function TypesComponent_Conditional_31_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, " Le nom est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function TypesComponent_Conditional_31_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, " La description est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function TypesComponent_Conditional_31_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 48);
  }
}
function TypesComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 36)(2, "div", 37)(3, "h2", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 39, 0);
    \u0275\u0275listener("ngSubmit", function TypesComponent_Conditional_31_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProject());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 40);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 42, 1);
    \u0275\u0275twoWayListener("ngModelChange", function TypesComponent_Conditional_31_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TypesComponent_Conditional_31_p_14_Template, 2, 0, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 40);
    \u0275\u0275text(17, "Description ");
    \u0275\u0275elementStart(18, "span", 41);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 44, 2);
    \u0275\u0275twoWayListener("ngModelChange", function TypesComponent_Conditional_31_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, TypesComponent_Conditional_31_p_22_Template, 2, 0, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 45)(24, "button", 46);
    \u0275\u0275listener("click", function TypesComponent_Conditional_31_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(25, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 47);
    \u0275\u0275conditionalCreate(27, TypesComponent_Conditional_31_Conditional_27_Template, 1, 0, "div", 48);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const projectForm_r7 = \u0275\u0275reference(6);
    const nameField_r8 = \u0275\u0275reference(13);
    const descField_r9 = \u0275\u0275reference(21);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject() ? "Modifier le projet" : "Nouveau projet", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nameField_r8.invalid && projectForm_r7.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", descField_r9.invalid && projectForm_r7.submitted);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject() ? "Mettre \xE0 jour" : "Enr\xE9gistrer", " ");
  }
}
function TypesComponent_Conditional_32__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "path", 54);
    \u0275\u0275elementEnd();
  }
}
function TypesComponent_Conditional_32__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function TypesComponent_Conditional_32__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "path", 56);
    \u0275\u0275elementEnd();
  }
}
function TypesComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 50);
    \u0275\u0275template(2, TypesComponent_Conditional_32__svg_svg_2_Template, 2, 0, "svg", 51)(3, TypesComponent_Conditional_32__svg_svg_3_Template, 2, 0, "svg", 51)(4, TypesComponent_Conditional_32__svg_svg_4_Template, 2, 0, "svg", 51);
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c3, ctx_r2.notification().type === "success", ctx_r2.notification().type === "error", ctx_r2.notification().type === "info"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.notification().type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.notification().type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.notification().type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.notification().message);
  }
}
function TypesComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 57)(2, "h3", 58);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60)(7, "button", 61);
    \u0275\u0275listener("click", function TypesComponent_Conditional_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function TypesComponent_Conditional_33_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmModal().onConfirm());
    });
    \u0275\u0275text(10, " Supprimer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.confirmModal().message);
  }
}
var TypesComponent = class _TypesComponent {
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
    name: "",
    description: ""
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
    this.apiService.getAllTypes().subscribe({
      next: (response) => {
        console.log("RESPONSE =", response);
        this.projects.set(response);
        console.log("PROJECTS =", this.projects());
        this.totalPages.set(Math.ceil(response.length / this.pageSize));
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
    this.form = { name: "", description: "" };
    this.editingProject.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingProject.set(null);
  }
  editProject(project) {
    this.form = {
      name: project.name,
      description: project.description
    };
    this.editingProject.set(project);
    this.showModal.set(true);
  }
  saveProject() {
    if (!this.form.name || !this.form.description)
      return;
    this.saving.set(true);
    const editing = this.editingProject();
    const request = editing ? this.apiService.updateTypes(editing.id, this.form) : this.apiService.createTypes(this.form);
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
    this.openConfirmModal(`Voulez-vous vraiment supprimer ce type de document "${article.name}" ?`, () => {
      this.apiService.deleteTypes(article.id).subscribe({
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
  static \u0275fac = function TypesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TypesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypesComponent, selectors: [["app-types"]], decls: 34, vars: 7, consts: [["projectForm", "ngForm"], ["nameField", "ngModel"], ["descField", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0", "shadow-lg", "rounded-lg", "overflow-hidden"], [1, "table-container"], [1, "w-full", "table-auto"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left"], [1, "px-6", "py-3", "text-right", "whitespace-nowrap"], [1, "bg-white", "divide-y", "divide-gray-200"], [1, "hover:bg-gray-50", "transition"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "px-6", "py-4"], [1, "font-semibold", "text-gray-900", "truncate"], [1, "px-6", "py-4", "text-sm", "text-gray-500"], [1, "px-6", "py-4", "text-right", "whitespace-nowrap"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-danger-500"], ["type", "text", "name", "name", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["name", "description", "rows", "3", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "border-2", "border-t-white", "border-gray-200", "rounded-full", "animate-spin"], [1, "text-sm", "text-red-500", "mt-1"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function TypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
      \u0275\u0275text(4, "Types Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6, "G\xE9rez les types de documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function TypesComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau Type ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "table", 12)(14, "thead")(15, "tr", 13)(16, "th", 14);
      \u0275\u0275text(17, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 14);
      \u0275\u0275text(19, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 15);
      \u0275\u0275text(21, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "tbody", 16);
      \u0275\u0275repeaterCreate(23, TypesComponent_For_24_Template, 14, 2, "tr", 17, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 18)(26, "button", 19);
      \u0275\u0275listener("click", function TypesComponent_Template_button_click_26_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275text(27, " \xAB Pr\xE9c\xE9dent ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, TypesComponent_ng_container_28_Template, 3, 5, "ng-container", 20);
      \u0275\u0275elementStart(29, "button", 19);
      \u0275\u0275listener("click", function TypesComponent_Template_button_click_29_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275text(30, " Suivant \xBB ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(31, TypesComponent_Conditional_31_Template, 29, 8, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, TypesComponent_Conditional_32_Template, 7, 9, "div", 22);
      \u0275\u0275conditionalCreate(33, TypesComponent_Conditional_33_Template, 11, 1, "div", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.paginatedProjects());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0).constructor(ctx.totalPages()));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showModal() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 33 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypesComponent, [{
    type: Component,
    args: [{ selector: "app-types", standalone: true, imports: [CommonModule, FormsModule], template: `  <div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Types Documents</h1>\r
          <p class="text-neutral-500">G\xE9rez les types de documents</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouveau Type\r
        </button>\r
      </div>\r
   <div class="card p-0 shadow-lg rounded-lg overflow-hidden">\r
\r
    <div class="table-container">\r
\r
<table class="w-full table-auto">\r
  <thead>\r
    <tr class="bg-gray-50">\r
      <th class="px-6 py-3 text-left">Nom</th>\r
      <th class="px-6 py-3 text-left">Description</th>\r
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
          <p class="font-semibold text-gray-900 truncate">{{ project.name }}</p>\r
        </td>\r
\r
        <!-- Description -->\r
        <td class="px-6 py-4 text-sm text-gray-500">\r
          {{ project.description || '-' }}\r
        </td>\r
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
    </div>\r
\r
\r
            \r
        @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
            <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
                <h2 class="text-xl font-semibold text-neutral-900">\r
                {{ editingProject() ? 'Modifier le projet' : 'Nouveau projet' }}\r
                </h2>\r
            </div>\r
            <form #projectForm="ngForm" (ngSubmit)="saveProject()" class="p-6 space-y-5">\r
\r
                <!-- Nom -->\r
                <div>\r
                <label class="label">Nom <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.name" name="name" #nameField="ngModel"\r
                        class="input" required>\r
                <!-- Erreur -->\r
                <p *ngIf="nameField.invalid && projectForm.submitted" class="text-sm text-red-500 mt-1">\r
                    Le nom est obligatoire.\r
                </p>\r
                </div>\r
\r
                <!-- Description -->\r
                <div>\r
                <label class="label">Description <span class="text-danger-500">*</span></label>\r
                <textarea [(ngModel)]="form.description" name="description" #descField="ngModel"\r
                            rows="3" class="input resize-none" required></textarea>\r
                <!-- Erreur -->\r
                <p *ngIf="descField.invalid && projectForm.submitted" class="text-sm text-red-500 mt-1">\r
                    La description est obligatoire.\r
                </p>\r
                </div>\r
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
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypesComponent, { className: "TypesComponent", filePath: "src/app/features/admin/types/types.component.ts", lineNumber: 14 });
})();
export {
  TypesComponent
};
//# sourceMappingURL=chunk-CMWVMWWZ.js.map
