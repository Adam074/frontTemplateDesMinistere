import {
  DocumentCategory,
  DocumentType
} from "./chunk-MDVDJK3Z.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
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
  ɵɵsanitizeUrl,
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

// src/app/features/admin/documents/documents/documents.component.ts
var _c0 = () => ({ "background-color": "#00843B", "border-color": "#00843B" });
var _c1 = () => ({});
var _c2 = (a0, a1, a2) => ({ "bg-green-50 border-green-500 text-green-700": a0, "bg-red-50 border-red-500 text-red-700": a1, "bg-blue-50 border-blue-500 text-blue-700": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function DocumentsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Aucun document pour le moment");
    \u0275\u0275elementEnd()();
  }
}
function DocumentsComponent_Conditional_14_For_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "Oui");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_14_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Non");
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 21)(3, "a", 22)(4, "p", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td")(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275conditionalCreate(12, DocumentsComponent_Conditional_14_For_16_Conditional_12_Template, 2, 0, "span", 26)(13, DocumentsComponent_Conditional_14_For_16_Conditional_13_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 17)(17, "div", 29)(18, "button", 30);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_14_For_16_Template_button_click_18_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editDocument(doc_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 31);
    \u0275\u0275element(20, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 33);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_14_For_16_Template_button_click_21_listener() {
      const doc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteDocument(doc_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 34);
    \u0275\u0275element(23, "path", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r3.getImageUrl(doc_r3.filePath), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r3.typeName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(doc_r3.isPublic ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(doc_r3.createdAt));
  }
}
function DocumentsComponent_Conditional_14_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 36);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_14_ng_container_20_Template_button_click_1_listener() {
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
function DocumentsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 16)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 17);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, DocumentsComponent_Conditional_14_For_16_Template, 24, 6, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 18)(18, "button", 19);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_14_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275text(19, " \xAB Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, DocumentsComponent_Conditional_14_ng_container_20_Template, 3, 5, "ng-container", 20);
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275text(22, " Suivant \xBB ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r3.documents());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.pages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
function DocumentsComponent_Conditional_15_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.name, " ");
  }
}
function DocumentsComponent_Conditional_15_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function DocumentsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 37)(2, "div", 38)(3, "h2", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 40);
    \u0275\u0275listener("ngSubmit", function DocumentsComponent_Conditional_15_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveDocument());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 41);
    \u0275\u0275text(8, "Titre ");
    \u0275\u0275elementStart(9, "span", 42);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.title, $event) || (ctx_r3.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 41);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.description, $event) || (ctx_r3.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 45)(17, "div")(18, "label", 41);
    \u0275\u0275text(19, "Type de Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.typeDocument, $event) || (ctx_r3.form.typeDocument = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 47);
    \u0275\u0275text(22, "Document Simple");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 48);
    \u0275\u0275text(24, "Ducument Politique");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "label", 41);
    \u0275\u0275text(27, "Type de Fichier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.category, $event) || (ctx_r3.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 50);
    \u0275\u0275text(30, "Rapport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 51);
    \u0275\u0275text(32, "Loi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 52);
    \u0275\u0275text(34, "D\xE9cret");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 53);
    \u0275\u0275text(36, "Arr\xEAt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 54);
    \u0275\u0275text(38, "Circulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 55);
    \u0275\u0275text(40, "Formulaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 56);
    \u0275\u0275text(42, "Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 57);
    \u0275\u0275text(44, "Autre");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div")(46, "label", 41);
    \u0275\u0275text(47, "Type de document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.typeId, $event) || (ctx_r3.form.typeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(49, "option", 59);
    \u0275\u0275text(50, "-- S\xE9lectionner un type --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, DocumentsComponent_Conditional_15_option_51_Template, 2, 2, "option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "label", 41);
    \u0275\u0275text(54, "Fichier joint (PDF)");
    \u0275\u0275elementStart(55, "span", 61);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "input", 62);
    \u0275\u0275listener("change", function DocumentsComponent_Conditional_15_Template_input_change_57_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 63)(59, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsComponent_Conditional_15_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.isPublic, $event) || (ctx_r3.form.isPublic = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "label", 65);
    \u0275\u0275text(61, "Document public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 66)(63, "button", 67);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_15_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeModal());
    });
    \u0275\u0275text(64, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 68);
    \u0275\u0275conditionalCreate(66, DocumentsComponent_Conditional_15_Conditional_66_Template, 1, 0, "div", 69);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editingDocument() ? "Modifier le document" : "Nouveau document");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.typeDocument);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.category);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.typeId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.projects());
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.isPublic);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.saving() ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingDocument() ? "Mettre \xE0 jour" : "Cr\xE9er", " ");
  }
}
function DocumentsComponent_Conditional_16__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_16__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 76);
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_16__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 74);
    \u0275\u0275element(1, "path", 77);
    \u0275\u0275elementEnd();
  }
}
function DocumentsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 71);
    \u0275\u0275template(2, DocumentsComponent_Conditional_16__svg_svg_2_Template, 2, 0, "svg", 72)(3, DocumentsComponent_Conditional_16__svg_svg_3_Template, 2, 0, "svg", 72)(4, DocumentsComponent_Conditional_16__svg_svg_4_Template, 2, 0, "svg", 72);
    \u0275\u0275elementStart(5, "span", 73);
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
function DocumentsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 78)(2, "h3", 79);
    \u0275\u0275text(3, "Confirmation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 81)(7, "button", 82);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeConfirmModal());
    });
    \u0275\u0275text(8, " Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 83);
    \u0275\u0275listener("click", function DocumentsComponent_Conditional_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
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
var DocumentsComponent = class _DocumentsComponent {
  apiService;
  API_URL = environment.FileUrl;
  notification = signal({
    show: false,
    message: "",
    type: "success"
  }, ...ngDevMode ? [{ debugName: "notification" }] : []);
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  editingDocument = signal(null, ...ngDevMode ? [{ debugName: "editingDocument" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  selectedImage = null;
  selectedFile = null;
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = 7;
  // nombre de projets par page
  totalPages = signal(1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  form = {
    title: "",
    description: "",
    category: DocumentCategory.RAPPORT,
    isPublic: true,
    typeDocument: DocumentType.DOCUMENT,
    typeId: 0,
    typeName: ""
  };
  //form: { title: string; description: string; category: DocumentCategory; fileUrl: string; isPublic: boolean } = { title: '', description: '', category: DocumentCategory.RAPPORT, fileUrl: '', isPublic: true };
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadDocuments();
    this.loadProjects();
  }
  loadDocuments(page = 0) {
    this.loading.set(true);
    this.apiService.getAllDocuments(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.documents.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(page + 1);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadDocuments(this.currentPage());
    }
  }
  prevPage() {
    if (this.currentPage() > 1) {
      this.loadDocuments(this.currentPage() - 2);
    }
  }
  goToPage(page) {
    this.loadDocuments(page - 1);
  }
  pages() {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }
  openModal() {
    this.form = {
      title: "",
      description: "",
      category: DocumentCategory.RAPPORT,
      typeDocument: DocumentType.DOCUMENT,
      isPublic: true,
      typeId: 0,
      typeName: ""
    };
    this.selectedFile = null;
    this.editingDocument.set(null);
    this.showModal.set(true);
  }
  openModal1() {
    this.form = { title: "", typeId: 0, typeName: "", description: "", typeDocument: DocumentType.DOCUMENT, category: DocumentCategory.RAPPORT, isPublic: true };
    this.editingDocument.set(null);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
    this.editingDocument.set(null);
  }
  editDocument1(doc) {
    this.form = { title: doc.title, description: doc.description || "", typeId: doc.typeId, typeName: doc.typeName, category: doc.category, typeDocument: doc.typeDocument, isPublic: doc.isPublic };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }
  editDocument(doc) {
    this.form = {
      title: doc.title,
      description: doc.description || "",
      typeId: doc.typeId,
      typeName: doc.typeName,
      category: doc.category,
      typeDocument: doc.typeDocument,
      isPublic: doc.isPublic
    };
    this.editingDocument.set(doc);
    this.showModal.set(true);
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
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }
    const file = input.files[0];
    if (file.type !== "application/pdf") {
      alert("Veuillez s\xE9lectionner un fichier PDF");
      input.value = "";
      this.selectedFile = null;
      return;
    }
    this.selectedFile = file;
  }
  saveDocument() {
    if (!this.form.title)
      return;
    const selectedType = this.projects().find((t) => t.id == this.form.typeId);
    const typeName = selectedType?.name;
    this.saving.set(true);
    const editing = this.editingDocument();
    const articleDTO = {
      title: this.form.title,
      description: this.form.description,
      category: this.form.category,
      typeDocument: this.form.typeDocument,
      typeId: this.form.typeId,
      typeName,
      isPublic: this.form.isPublic
    };
    console.log(articleDTO);
    const formData = new FormData();
    formData.append("document", new Blob([JSON.stringify(articleDTO)], { type: "application/json" }));
    if (this.selectedFile)
      formData.append("file", this.selectedFile);
    const request = editing ? this.apiService.updateDocument(editing.id, formData) : this.apiService.createDocument(formData);
    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadDocuments();
          this.closeModal();
        }
        this.saving.set(false);
        this.showNotification(editing ? "Document mis \xE0 jour avec succ\xE8s" : "Document cr\xE9\xE9 avec succ\xE8s", "success");
      },
      error: (err) => {
        console.error("Erreur lors de la sauvegarde", err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde", "error");
      }
    });
  }
  deleteDocument1(doc) {
    if (confirm(`Supprimer le document "${doc.title}" ?`)) {
      this.apiService.deleteDocument(doc.id).subscribe({ next: () => this.loadDocuments() });
    }
  }
  getCategoryLabel(category) {
    const labels = { "RAPPORT": "Rapport", "LOI": "Loi", "DECRET": "D\xE9cret", "ARRETE": "Arr\xEAt\xE9", "CIRCULAIRE": "Circulaire", "FORMULAIRE": "Formulaire", "GUIDE": "Guide", "AUTRE": "Autre" };
    return labels[category] || category;
  }
  formatDate(dateStr) {
    return dateStr ? new Date(dateStr).toLocaleDateString("fr-FR") : "";
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
  deleteDocument(article) {
    this.openConfirmModal(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`, () => {
      this.apiService.deleteDocument(article.id).subscribe({
        next: () => {
          this.loadDocuments();
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
  getImageUrl(path) {
    console.log(path);
    return path ? this.API_URL + path : null;
  }
  static \u0275fac = function DocumentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsComponent, selectors: [["app-documents"]], decls: 18, vars: 4, consts: [[1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-neutral-900"], [1, "text-neutral-500"], [1, "btn-primary", 2, "background-color", "#00843B", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "card", "p-0"], [1, "p-8", "text-center"], [1, "table-container"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "fixed", "top-4", "right-4", "z-50", "pointer-events-none"], [1, "fixed", "inset-0", "bg-black/30", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "spinner", "w-8", "h-8", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-neutral-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "table"], [1, "text-right"], [1, "flex", "justify-end", "items-center", "mt-2", "px-6", "py-2", "gap-2", "border-t", "border-gray-200", "bg-gray-50", "rounded-b-lg"], [1, "px-3", "py-1", "border", "border-gray-300", "rounded", "hover:bg-gray-100", "disabled:opacity-50", "transition-colors", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], [1, "max-w-xs"], ["target", "_blank", 3, "href"], [1, "font-medium", "text-neutral-900", "truncate"], [1, "text-xs", "text-neutral-400", "truncate"], [1, "badge-primary"], [1, "badge-success"], [1, "badge", "bg-neutral-100", "text-neutral-600"], [1, "text-sm", "text-neutral-500"], [1, "flex", "justify-end", "gap-2"], ["title", "Modifier", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-green-500", "rounded-full", "bg-white", "hover:bg-green-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "Supprimer", 1, "flex", "items-center", "justify-center", "p-2", "border-2", "border-red-500", "rounded-full", "bg-white", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [3, "click", "ngClass", "ngStyle"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-lg", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6", "border-b", "border-neutral-200"], [1, "text-xl", "font-semibold", "text-neutral-900"], [1, "p-6", "space-y-5", 3, "ngSubmit"], [1, "label"], [1, "text-danger-500"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "2", 1, "input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["name", "typeDocument", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "DOCUMENT SIMPLE"], ["value", "DOCUMENT POLITIQUE"], ["name", "category", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "RAPPORT"], ["value", "LOI"], ["value", "DECRET"], ["value", "ARRETE"], ["value", "CIRCULAIRE"], ["value", "FORMULAIRE"], ["value", "GUIDE"], ["value", "AUTRE"], ["name", "typeId", 1, "input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-red-500"], ["type", "file", "accept", "application/pdf", 1, "input", 3, "change"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "name", "isPublic", "id", "isPublic", 1, "rounded", "border-neutral-300", "text-primary-500", "focus:ring-primary-500", 3, "ngModelChange", "ngModel"], ["for", "isPublic", 1, "text-sm", "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "pt-4", "border-t", "border-neutral-200"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "border", "border-red-500", "text-red-500", "hover:bg-red-50", "transition-colors", "font-medium", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner", "w-4", "h-4", "mr-2"], [3, "value"], [1, "pointer-events-auto", "border-l-4", "rounded-lg", "shadow-lg", "p-6", "max-w-sm", "w-full", "flex", "items-center", "gap-4", "animate-fade-in", 3, "ngClass"], ["class", "w-6 h-6 flex-shrink-0", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"], [1, "bg-white", "rounded-2xl", "shadow-xl", "w-full", "max-w-md", "p-6", "space-y-4"], [1, "text-lg", "font-semibold", "text-neutral-900"], [1, "text-neutral-700"], [1, "flex", "justify-end", "gap-3", "mt-4"], [1, "px-4", "py-2", "rounded-lg", "border", "border-gray-300", "text-gray-700", "hover:bg-gray-100", "transition-colors", "font-medium", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-red-600", "text-white", "hover:bg-red-700", "transition-colors", "font-medium", 3, "click"]], template: function DocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "G\xE9rez les ressources documentaires");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function DocumentsComponent_Template_button_click_7_listener() {
        return ctx.openModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Nouveau document ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, DocumentsComponent_Conditional_12_Template, 2, 0, "div", 8)(13, DocumentsComponent_Conditional_13_Template, 5, 0, "div", 8)(14, DocumentsComponent_Conditional_14_Template, 23, 3, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, DocumentsComponent_Conditional_15_Template, 68, 11, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, DocumentsComponent_Conditional_16_Template, 7, 9, "div", 11);
      \u0275\u0275conditionalCreate(17, DocumentsComponent_Conditional_17_Template, 11, 1, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 12 : ctx.documents().length === 0 ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showModal() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notification().show ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.confirmModal().show ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsComponent, [{
    type: Component,
    args: [{ selector: "app-documents", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="space-y-6">\r
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
        <div>\r
          <h1 class="text-2xl font-bold text-neutral-900">Documents</h1>\r
          <p class="text-neutral-500">G\xE9rez les ressources documentaires</p>\r
        </div>\r
        <button (click)="openModal()" class="btn-primary" style="background-color: #00843B;">\r
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
          </svg>\r
          Nouveau document\r
        </button>\r
      </div>\r
      \r
      <div class="card p-0">\r
        @if (loading()) {\r
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>\r
        } @else if (documents().length === 0) {\r
          <div class="p-8 text-center">\r
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>\r
            </svg>\r
            <p class="text-neutral-500">Aucun document pour le moment</p>\r
          </div>\r
        } @else {\r
          <div class="table-container">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>Titre</th>\r
                  <th>Cat\xE9gorie</th>\r
                  <th>Public</th>\r
                  <th>Date</th>\r
                  <th class="text-right">Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (doc of documents(); track doc.id) {\r
                  <tr>\r
                    <td>\r
                      <div class="max-w-xs"><a [href]="getImageUrl(doc.filePath)" target="_blank">\r
                        <p class="font-medium text-neutral-900 truncate">{{ doc.title }}</p>\r
                        <p class="text-xs text-neutral-400 truncate">{{ doc.description }}</p></a>\r
                      </div>\r
                    </td>\r
                    \r
                    <td><span class="badge-primary">{{ doc.typeName }}</span></td>\r
                    \r
                    <td>\r
                      @if (doc.isPublic) {\r
                        <span class="badge-success">Oui</span>\r
                      } @else {\r
                        <span class="badge bg-neutral-100 text-neutral-600">Non</span>\r
                      }\r
                    </td>\r
                    <td class="text-sm text-neutral-500">{{ formatDate(doc.createdAt) }}</td>\r
                    <td class="text-right">\r
                      <div class="flex justify-end gap-2">\r
                        <button (click)="editDocument(doc)"\r
                                class="flex items-center justify-center p-2 border-2 border-green-500 rounded-full bg-white hover:bg-green-50 transition-colors"\r
                                title="Modifier">\r
                          <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                          </svg>\r
                        </button>\r
\r
                        <button (click)="deleteDocument(doc)"\r
                                class="flex items-center justify-center p-2 border-2 border-red-500 rounded-full bg-white hover:bg-red-50 transition-colors"\r
                                title="Supprimer">\r
                          <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                          </svg>\r
                        </button>\r
                        \r
                       \r
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
          </div>\r
        }\r
      </div>\r
      \r
      @if (showModal()) {\r
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">\r
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">\r
            <div class="p-6 border-b border-neutral-200">\r
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingDocument() ? 'Modifier le document' : 'Nouveau document' }}</h2>\r
            </div>\r
            <form (ngSubmit)="saveDocument()" class="p-6 space-y-5">\r
              <div>\r
                <label class="label">Titre <span class="text-danger-500">*</span></label>\r
                <input type="text" [(ngModel)]="form.title" name="title" class="input" required>\r
              </div>\r
              <div>\r
                <label class="label">Description</label>\r
                <textarea [(ngModel)]="form.description" name="description" rows="2" class="input resize-none"></textarea>\r
              </div>\r
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r
                <div>\r
                  <label class="label">Type de Document</label>\r
                  <select [(ngModel)]="form.typeDocument" name="typeDocument" class="input">\r
                    \r
                    <option value="DOCUMENT SIMPLE">Document Simple</option>\r
                    <option value="DOCUMENT POLITIQUE">Ducument Politique</option>\r
                    \r
                  </select>\r
                </div>\r
                <div>\r
                  <label class="label">Type de Fichier</label>\r
                  <select [(ngModel)]="form.category" name="category" class="input">\r
                    <option value="RAPPORT">Rapport</option>\r
                    <option value="LOI">Loi</option>\r
                    <option value="DECRET">D\xE9cret</option>\r
                    <option value="ARRETE">Arr\xEAt\xE9</option>\r
                    <option value="CIRCULAIRE">Circulaire</option>\r
                    <option value="FORMULAIRE">Formulaire</option>\r
                    <option value="GUIDE">Guide</option>\r
                    <option value="AUTRE">Autre</option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
               <div>\r
                <label class="label">Type de document</label>\r
\r
                <select [(ngModel)]="form.typeId" name="typeId" class="input">\r
                  <option value="">-- S\xE9lectionner un type --</option>\r
\r
                  <option *ngFor="let type of projects()" [value]="type.id">\r
                    {{ type.name }}\r
                  </option>\r
\r
                </select>\r
              </div>\r
\r
               <div >\r
                <label class="label">Fichier joint (PDF)<span class="text-red-500">*</span></label>\r
                <input type="file" (change)="onFileSelected($event)" accept="application/pdf" class="input">\r
              </div>\r
\r
              <div class="flex items-center gap-2">\r
                <input type="checkbox" [(ngModel)]="form.isPublic" name="isPublic" id="isPublic" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">\r
                <label for="isPublic" class="text-sm text-neutral-700">Document public</label>\r
              </div>\r
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">\r
                <button type="button" (click)="closeModal()" class="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium">Annuler</button>\r
                <button type="submit" [disabled]="saving()" class="btn-primary">\r
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }\r
                  {{ editingDocument() ? 'Mettre \xE0 jour' : 'Cr\xE9er' }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      }\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsComponent, { className: "DocumentsComponent", filePath: "src/app/features/admin/documents/documents/documents.component.ts", lineNumber: 16 });
})();
export {
  DocumentsComponent
};
//# sourceMappingURL=chunk-ZZRKPRYC.js.map
