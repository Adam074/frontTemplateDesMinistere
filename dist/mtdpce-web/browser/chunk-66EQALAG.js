import {
  ProjectStatus,
  ProjetType
} from "./chunk-MDVDJK3Z.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵclassMap,
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
  ɵɵstyleProp,
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

// src/app/features/admin/projet/projet.component.ts
var _c0 = () => [];
var _c1 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c2 = () => ({});
var _c3 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function ProjetComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td", 22)(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 25)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 25)(10, "div", 26)(11, "div", 27);
    \u0275\u0275element(12, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 31)(18, "div", 32)(19, "button", 33);
    \u0275\u0275listener("click", function ProjetComponent_For_28_Template_button_click_19_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 34);
    \u0275\u0275element(21, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 36);
    \u0275\u0275listener("click", function ProjetComponent_For_28_Template_button_click_22_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProject(project_r2));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 37);
    \u0275\u0275element(24, "path", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(project_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(project_r2.status));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getProgressBarClass(project_r2));
    \u0275\u0275styleProp("width", project_r2.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r2.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.partner || "-");
  }
}
function ProjetComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function ProjetComponent_ng_container_32_Template_button_click_1_listener() {
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
function ProjetComponent_Conditional_35_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, " Le nom est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_35_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, " La description est obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_35_p_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, " Les objectifs sont obligatoires. ");
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_35_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r7 = ctx.$implicit;
    \u0275\u0275property("value", type_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r7.name, " ");
  }
}
function ProjetComponent_Conditional_35_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 72);
  }
}
function ProjetComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 40)(2, "div", 41)(3, "h2", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 43, 0);
    \u0275\u0275listener("ngSubmit", function ProjetComponent_Conditional_35_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProject());
    });
    \u0275\u0275elementStart(7, "div")(8, "label", 44);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 46, 1);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProjetComponent_Conditional_35_p_14_Template, 2, 0, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "label", 44);
    \u0275\u0275text(17, "Description ");
    \u0275\u0275elementStart(18, "span", 45);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 48, 2);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ProjetComponent_Conditional_35_p_22_Template, 2, 0, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "label", 44);
    \u0275\u0275text(25, "Objectifs du projet ");
    \u0275\u0275elementStart(26, "span", 45);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "textarea", 49, 2);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.objectives, $event) || (ctx_r2.form.objectives = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ProjetComponent_Conditional_35_p_30_Template, 2, 0, "p", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 50)(32, "div")(33, "label", 44);
    \u0275\u0275text(34, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.type, $event) || (ctx_r2.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 52);
    \u0275\u0275text(37, "PROJET");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 53);
    \u0275\u0275text(39, "PROGRAMME");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div")(41, "label", 44);
    \u0275\u0275text(42, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.categorieProjetId, $event) || (ctx_r2.form.categorieProjetId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 55);
    \u0275\u0275text(45, "-- S\xE9lectionner une cat\xE9gorie --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ProjetComponent_Conditional_35_option_46_Template, 2, 2, "option", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 57)(48, "div")(49, "label", 44);
    \u0275\u0275text(50, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.status, $event) || (ctx_r2.form.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(52, "option", 59);
    \u0275\u0275text(53, "Planifi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 60);
    \u0275\u0275text(55, "En cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 61);
    \u0275\u0275text(57, "Suspendu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 62);
    \u0275\u0275text(59, "Termin\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 63);
    \u0275\u0275text(61, "Annul\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div")(63, "label", 44);
    \u0275\u0275text(64, "Progression (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.progressPercentage, $event) || (ctx_r2.form.progressPercentage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 57)(67, "div")(68, "label", 44);
    \u0275\u0275text(69, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.startDate, $event) || (ctx_r2.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ProjetComponent_Conditional_35_Template_input_change_70_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStartDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div")(72, "label", 44);
    \u0275\u0275text(73, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.endDate, $event) || (ctx_r2.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div")(76, "label", 44);
    \u0275\u0275text(77, "Partenaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.partner, $event) || (ctx_r2.form.partner = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div")(80, "label", 44);
    \u0275\u0275text(81, "Budget (FCFA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ProjetComponent_Conditional_35_Template_input_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.budget, $event) || (ctx_r2.form.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 69)(84, "button", 70);
    \u0275\u0275listener("click", function ProjetComponent_Conditional_35_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(85, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 71);
    \u0275\u0275conditionalCreate(87, ProjetComponent_Conditional_35_Conditional_87_Template, 1, 0, "div", 72);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const projectForm_r8 = \u0275\u0275reference(6);
    const nameField_r9 = \u0275\u0275reference(13);
    const descField_r10 = \u0275\u0275reference(21);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject() ? "Modifier le projet" : "Nouveau projet", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nameField_r9.invalid && projectForm_r8.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", descField_r10.invalid && projectForm_r8.submitted);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.objectives);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", descField_r10.invalid && projectForm_r8.submitted);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.type);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.categorieProjetId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.types());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.status);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.progressPercentage);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.endDate);
    \u0275\u0275property("min", ctx_r2.form.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.partner);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.budget);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.saving() ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject() ? "Mettre \xE0 jour" : "Enr\xE9gistrer", " ");
  }
}
function ProjetComponent_Conditional_36__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 79);
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_36__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 80);
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_36__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 78);
    \u0275\u0275element(1, "path", 81);
    \u0275\u0275elementEnd();
  }
}
function ProjetComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 75);
    \u0275\u0275template(2, ProjetComponent_Conditional_36__svg_svg_2_Template, 2, 0, "svg", 76)(3, ProjetComponent_Conditional_36__svg_svg_3_Template, 2, 0, "svg", 76)(4, ProjetComponent_Conditional_36__svg_svg_4_Template, 2, 0, "svg", 76);
    \u0275\u0275elementStart(5, "span", 77);
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
function ProjetComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 82)(2, "h3", 83);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "button", 86);
    \u0275\u0275listener("click", function ProjetComponent_Conditional_37_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 87);
    \u0275\u0275listener("click", function ProjetComponent_Conditional_37_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
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
var ProjetComponent = class _ProjetComponent {
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
  types = signal([], ...ngDevMode ? [{ debugName: "types" }] : []);
  form = {
    name: "",
    description: "",
    status: ProjectStatus.PLANIFIE,
    progressPercentage: 0,
    startDate: "",
    endDate: "",
    partner: "",
    budget: 0,
    type: ProjetType.PROJET,
    categorieProjetId: 0,
    categorieProjetName: "",
    objectives: ""
  };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadProjects();
    this.loadTypes();
  }
  // Charger tous les projets
  loadProjects() {
    this.loading.set(true);
    this.apiService.getAllProjects(0, 50).subscribe({
      next: (response) => {
        if (response.success) {
          this.projects.set(response.data.content);
          this.totalPages.set(Math.ceil(response.data.content.length / this.pageSize));
          this.currentPage.set(1);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
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
    this.form = { name: "", description: "", objectives: "", type: ProjetType.PROJET, categorieProjetId: 0, categorieProjetName: "", status: ProjectStatus.PLANIFIE, progressPercentage: 0, startDate: "", endDate: "", partner: "", budget: 0 };
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
      description: project.description,
      status: project.status,
      progressPercentage: project.progressPercentage,
      startDate: project.startDate || "",
      endDate: project.endDate || "",
      partner: project.partner || "",
      budget: project.budget || 0,
      objectives: project?.objectives,
      type: project.type,
      categorieProjetName: project.categorieProjetName,
      categorieProjetId: project.categorieProjetId
    };
    this.editingProject.set(project);
    this.showModal.set(true);
  }
  saveProject() {
    if (!this.form.name || !this.form.description)
      return;
    this.saving.set(true);
    const editing = this.editingProject();
    const request = editing ? this.apiService.updateProject(editing.id, this.form) : this.apiService.createProject(this.form);
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadProjects();
          this.closeModal();
        }
        this.saving.set(false);
        this.showNotification(editing ? "Projet mis \xE0 jour avec succ\xE8s" : "Projet cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
  deleteProject1(project) {
    if (confirm(`Supprimer le projet "${project.name}" ?`)) {
      this.apiService.deleteProject(project.id).subscribe({ next: () => this.loadProjects() });
    }
  }
  // Badges et labels
  getStatusLabel(status) {
    const labels = { PLANIFIE: "Planifi\xE9", EN_COURS: "En cours", SUSPENDU: "Suspendu", TERMINE: "Termin\xE9", ANNULE: "Annul\xE9" };
    return labels[status] || status;
  }
  getStatusBadgeClass(status) {
    const classes = {
      PLANIFIE: "bg-accent-100 text-accent-800 px-2 py-1 rounded-full text-xs font-semibold",
      EN_COURS: "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold",
      SUSPENDU: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold",
      TERMINE: "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold",
      ANNULE: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold"
    };
    return classes[status] || "bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold";
  }
  // Détermine la couleur de la barre de progression
  getProgressBarClass(project) {
    if (project.status === "TERMINE" || project.progressPercentage >= 80)
      return "bg-green-500";
    if (project.status === "EN_COURS" && project.progressPercentage >= 50)
      return "bg-green-300";
    if (project.status === "EN_COURS" && project.progressPercentage > 0 && project.progressPercentage < 50)
      return "bg-yellow-500";
    return "bg-red-500";
  }
  onStartDateChange() {
    if (this.form.endDate && this.form.endDate < this.form.startDate) {
      this.form.endDate = "";
    }
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
  loadTypes() {
    this.loading.set(true);
    this.apiService.getTypes().subscribe({
      next: (response) => {
        console.log("RESPONSE =", response);
        console.log(response);
        this.types.set(response);
        console.log("PROJECTS =", this.types());
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Erreur API", err);
        this.loading.set(false);
      }
    });
  }
  deleteProject(article) {
    console.log("fvfv");
    this.openConfirmModal(`Voulez-vous vraiment supprimer ce projet "${article.name}" ?`, () => {
      this.apiService.deleteProject(article.id).subscribe({
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
  static \u0275fac = function ProjetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjetComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjetComponent, selectors: [["app-projet"]], decls: 38, vars: 7, consts: [["projectForm", "ngForm"], ["nameField", "ngModel"], ["descField", "ngModel"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0", "shadow-lg", "rounded-lg", "overflow-hidden"], [1, "table-container"], [1, "table", "w-full"], [1, "text-right"], [1, "bg-white", "divide-y", "divide-gray-200"], [1, "hover:bg-gray-50", "transition-colors", "duration-150"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "px-6", "py-4", "max-w-xs"], [1, "font-semibold", "text-gray-900", "truncate"], [1, "text-sm", "text-gray-400", "truncate"], [1, "px-6", "py-4"], [1, "flex", "items-center", "gap-2"], [1, "w-24", "bg-gray-200", "rounded-full", "h-2", "overflow-hidden"], [1, "h-2", "rounded-full", "transition-all"], [1, "text-sm", "text-gray-600"], [1, "px-6", "py-4", "text-sm", "text-gray-500"], [1, "px-6", "py-4", "text-right"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-danger-500"], ["type", "text", "name", "name", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["name", "description", "rows", "3", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], ["name", "objectives", "rows", "3", "required", "", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["name", "type", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "PROJET"], ["value", "PROGRAMME"], ["name", "categorieProjetId", 1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "status", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "PLANIFIE"], ["value", "EN_COURS"], ["value", "SUSPENDU"], ["value", "TERMINE"], ["value", "ANNULE"], ["type", "number", "name", "progressPercentage", "min", "0", "max", "100", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "startDate", 1, "input", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "name", "endDate", 1, "input", 3, "ngModelChange", "ngModel", "min"], ["type", "text", "name", "partner", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "budget", 1, "input", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-gray-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "px-4", "py-2", "rounded-lg", "bg-[#00843B]", "text-white", "hover:bg-[#006830]", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "gap-2", 3, "disabled"], [1, "spinner", "w-4", "h-4", "border-2", "border-t-white", "border-gray-200", "rounded-full", "animate-spin"], [1, "text-sm", "text-red-500", "mt-1"], [3, "value"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function ProjetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div")(3, "h1", 5);
      \u0275\u0275text(4, "Projets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 6);
      \u0275\u0275text(6, "G\xE9rez les projets et programmes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function ProjetComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau projet ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "table", 12)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Progression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Partenaire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 13);
      \u0275\u0275text(25, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "tbody", 14);
      \u0275\u0275repeaterCreate(27, ProjetComponent_For_28_Template, 25, 11, "tr", 15, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "button", 17);
      \u0275\u0275listener("click", function ProjetComponent_Template_button_click_30_listener() {
        return ctx.prevPage();
      });
      \u0275\u0275text(31, " \xAB Pr\xE9c\xE9dent ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, ProjetComponent_ng_container_32_Template, 3, 5, "ng-container", 18);
      \u0275\u0275elementStart(33, "button", 17);
      \u0275\u0275listener("click", function ProjetComponent_Template_button_click_33_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275text(34, " Suivant \xBB ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(35, ProjetComponent_Conditional_35_Template, 89, 20, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, ProjetComponent_Conditional_36_Template, 7, 9, "div", 20);
      \u0275\u0275conditionalCreate(37, ProjetComponent_Conditional_37_Template, 11, 1, "div", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275repeater(ctx.paginatedProjects());
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0).constructor(ctx.totalPages()));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showModal() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 37 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjetComponent, [{
    type: Component,
    args: [{ selector: "app-projet", standalone: true, imports: [CommonModule, FormsModule], template: `  <div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Projets</h1>\r
          <p class="text-neutral-500">G\xE9rez les projets et programmes</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouveau projet\r
        </button>\r
      </div>\r
   <div class="card p-0 shadow-lg rounded-lg overflow-hidden">\r
\r
    <div class="table-container">\r
\r
    <table class="table w-full">\r
        <thead>\r
        <tr>\r
            <th>Nom</th>\r
            <th>Statut</th>\r
            <th>Progression</th>\r
            <th>Partenaire</th>\r
            <th class="text-right">Actions</th>\r
        </tr>\r
        </thead>\r
        <tbody class="bg-white divide-y divide-gray-200">\r
        @for (project of paginatedProjects(); track project.id) {\r
            <tr class="hover:bg-gray-50 transition-colors duration-150">\r
            <!-- Nom et description -->\r
            <td class="px-6 py-4 max-w-xs">\r
                <p class="font-semibold text-gray-900 truncate">{{ project.name }}</p>\r
                <p class="text-sm text-gray-400 truncate">{{ project.description }}</p>\r
            </td>\r
\r
            <!-- Statut -->\r
            <td class="px-6 py-4">\r
                <span [class]="getStatusBadgeClass(project.status)">{{ getStatusLabel(project.status) }}</span>\r
            </td>\r
\r
            <!-- Progression -->\r
            <td class="px-6 py-4">\r
                <div class="flex items-center gap-2">\r
                <div class="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">\r
                    <div class="h-2 rounded-full transition-all" [class]="getProgressBarClass(project)" [style.width.%]="project.progressPercentage"></div>\r
                </div>\r
                <span class="text-sm text-gray-600">{{ project.progressPercentage }}%</span>\r
                </div>\r
            </td>\r
\r
            <!-- Partenaire -->\r
            <td class="px-6 py-4 text-sm text-gray-500">{{ project.partner || '-' }}</td>\r
\r
            <!-- Actions -->\r
            <td class="px-6 py-4 text-right">\r
                <div class="flex justify-end gap-2">\r
                <!-- Modifier -->\r
                <button (click)="editProject(project)"\r
                        class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                        title="Modifier">\r
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                    </svg>\r
                </button>\r
                <!-- Supprimer -->\r
                <button (click)="deleteProject(project)"\r
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
                <!-- Description -->\r
                <div>\r
                <label class="label">Objectifs du projet <span class="text-danger-500">*</span></label>\r
                <textarea [(ngModel)]="form.objectives" name="objectives" #descField="ngModel"\r
                            rows="3" class="input resize-none" required></textarea>\r
                <!-- Erreur -->\r
                <p *ngIf="descField.invalid && projectForm.submitted" class="text-sm text-red-500 mt-1">\r
                    Les objectifs sont obligatoires.\r
                </p>\r
                </div>\r
\r
\r
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                <div>\r
                  <label class="label">Type</label>\r
                  <select [(ngModel)]="form.type" name="type" class="input">\r
                    \r
                    <option value="PROJET">PROJET</option>\r
                    <option value="PROGRAMME">PROGRAMME</option>\r
                    \r
                  </select>\r
                </div>\r
                <div>\r
                  <label class="label">Cat\xE9gorie</label>\r
                  <select [(ngModel)]="form.categorieProjetId" name="categorieProjetId" class="input">\r
                    <option value="">-- S\xE9lectionner une cat\xE9gorie --</option>\r
\r
                  <option *ngFor="let type of types()" [value]="type.id">\r
                    {{ type.name }}\r
                  </option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
\r
                <!-- Statut et Progression -->\r
                <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                    <label class="label">Statut</label>\r
                    <select [(ngModel)]="form.status" name="status" class="input">\r
                    <option value="PLANIFIE">Planifi\xE9</option>\r
                    <option value="EN_COURS">En cours</option>\r
                    <option value="SUSPENDU">Suspendu</option>\r
                    <option value="TERMINE">Termin\xE9</option>\r
                    <option value="ANNULE">Annul\xE9</option>\r
                    </select>\r
                </div>\r
                <div>\r
                    <label class="label">Progression (%)</label>\r
                    <input type="number" [(ngModel)]="form.progressPercentage" name="progressPercentage"\r
                        min="0" max="100" class="input">\r
                </div>\r
                </div>\r
\r
                <!-- Dates -->\r
                <div class="grid grid-cols-2 gap-4">\r
                <div>\r
                    <label class="label">Date d\xE9but</label>\r
                    <input type="date" [(ngModel)]="form.startDate" name="startDate"\r
                        class="input" (change)="onStartDateChange()">\r
                </div>\r
                <div>\r
                    <label class="label">Date fin</label>\r
                    <input type="date" [(ngModel)]="form.endDate" name="endDate"\r
                        class="input" [min]="form.startDate">\r
                </div>\r
                </div>\r
\r
                <!-- Partenaire et Budget -->\r
                <div>\r
                <label class="label">Partenaire</label>\r
                <input type="text" [(ngModel)]="form.partner" name="partner" class="input">\r
                </div>\r
                <div>\r
                <label class="label">Budget (FCFA)</label>\r
                <input type="number" [(ngModel)]="form.budget" name="budget" class="input">\r
                </div>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjetComponent, { className: "ProjetComponent", filePath: "src/app/features/admin/projet/projet.component.ts", lineNumber: 14 });
})();
export {
  ProjetComponent
};
//# sourceMappingURL=chunk-66EQALAG.js.map
