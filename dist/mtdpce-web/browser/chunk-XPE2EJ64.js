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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/contact/contact/contact.component.ts
function ContactComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4, " Votre message a \xE9t\xE9 envoy\xE9 avec succ\xE8s. Nous vous r\xE9pondrons dans les plus brefs d\xE9lais. ");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function ContactComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "circle", 54)(2, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Envoi en cours... ");
  }
}
function ContactComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envoyer le message ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 57);
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  apiService;
  form = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor(apiService) {
    this.apiService = apiService;
  }
  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error.set("Veuillez remplir tous les champs obligatoires");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.success.set(false);
    this.apiService.submitContact(this.form).subscribe({
      next: (response) => {
        if (response.success) {
          this.success.set(true);
          this.form = { name: "", email: "", phone: "", subject: "", message: "" };
        } else {
          this.error.set(response.message || "Une erreur est survenue");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Une erreur est survenue lors de l'envoi");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 103, vars: 9, consts: [[1, "bg-gradient-to-r", "from-[#00843B]", "to-[#006B30]", "py-12"], [1, "absolute", "top-0", "right-0", "w-96", "h-96", "bg-burkina-green-100/30", "rounded-full", "-translate-y-1/2", "translate-x-1/2", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "w-72", "h-72", "bg-burkina-yellow-100/30", "rounded-full", "translate-y-1/2", "-translate-x-1/2", "blur-3xl"], [1, "container", "mx-auto", "px-4", "relative", "z-10"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "border", "border-white", "text-white", "bg-burkina-green-100", "rounded-full", "text-burkina-green", "text-sm", "font-medium", "mb-4", "border", "border-burkina-green-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "text-4xl", "lg:text-5xl", "font-heading", "font-bold", "text-white", "text-slate-900", "mb-4"], [1, "text-slate-600", "text-lg", "max-w-2xl", "text-white"], [1, "py-16", "bg-white"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-1"], [1, "bg-white", "rounded-xl", "shadow-md", "p-6", "mb-6", "border", "border-gray-100"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-6", "border-l-4", "pl-3", 2, "border-color", "#00843B"], [1, "space-y-6"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0", 2, "background", "#E6F4EC"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", 2, "color", "#00843B"], ["stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "font-semibold", "text-gray-900"], [1, "text-gray-500", "text-sm"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["href", "https://www.google.com/maps/search/?api=1&query=Minist\xE8re+de+la+Transition+Digitale+des+Postes+et+des+Communications+Electroniques+Burkina+Faso", "target", "_blank", 1, "block"], [1, "card", "p-0", "overflow-hidden", "bg-white", "shadow-xl", "rounded-2xl", "border", "border-neutral-200", "relative"], [1, "absolute", "top-3", "left-3", "bg-white/90", "backdrop-blur", "px-4", "py-2", "rounded-lg", "shadow", "text-sm", "font-semibold", "text-neutral-800", "z-10"], ["loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", "src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps?q=Minist%C3%A8re%20de%20la%20Transition%20Digitale%20des%20Postes%20et%20des%20Communications%20Electroniques%20Burkina%20Faso&output=embed`, 1, "w-full", "h-72", "border-0", "pointer-events-none"], [1, "lg:col-span-2"], [1, "bg-white", "rounded-xl", "shadow-md", "p-8", "border", "border-gray-100"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-6", "border-l-4", "pl-3", 2, "border-color", "#E30613"], [1, "flex", "items-start", "gap-3", "p-4", "bg-[#E6F4EC]", "border", "border-[#B7E1C7]", "rounded-xl", "text-[#006B30]", "mb-6", "shadow-sm"], [1, "flex", "items-start", "gap-3", "p-4", "bg-[#FDECEC]", "border", "border-[#F5B5B5]", "rounded-xl", "text-[#C40000]", "mb-6", "shadow-sm"], [1, "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"], ["for", "name", 1, "input-label"], [1, "text-red-500"], ["type", "text", "id", "name", "name", "name", "placeholder", "Votre nom", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "input-label"], ["type", "email", "id", "email", "name", "email", "placeholder", "votre@email.com", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "input-label"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "+226 XX XX XX XX", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "subject", 1, "input-label"], ["type", "text", "id", "subject", "name", "subject", "placeholder", "Objet de votre message", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "message", 1, "input-label"], ["id", "message", "name", "message", "rows", "5", "placeholder", "D\xE9crivez votre demande...", "required", "", 1, "textarea", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "py-3", "px-6", 2, "background-color", "#00843B", 3, "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mt-0.5", "flex-shrink-0", "text-[#006B30]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "font-medium"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mt-0.5", "flex-shrink-0", "text-[#C40000]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Contact ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Contactez-nous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, " Vous avez une question ou une demande ? Notre \xE9quipe est \xE0 votre disposition pour vous r\xE9pondre. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "section", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h3", 14);
      \u0275\u0275text(18, " Informations de contact ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul", 15)(20, "li", 16)(21, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 18);
      \u0275\u0275element(23, "path", 19)(24, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div")(26, "p", 21);
      \u0275\u0275text(27, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 22);
      \u0275\u0275text(29, "Avenue de l'Ind\xE9pendance");
      \u0275\u0275element(30, "br");
      \u0275\u0275text(31, "Ouagadougou, Burkina Faso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "li", 16)(33, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 18);
      \u0275\u0275element(35, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "div")(37, "p", 21);
      \u0275\u0275text(38, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 22);
      \u0275\u0275text(40, "+226 25 30 60 00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "li", 16)(42, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 18);
      \u0275\u0275element(44, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div")(46, "p", 21);
      \u0275\u0275text(47, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 22);
      \u0275\u0275text(49, "contact@mtdpce.gov.bf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "li", 16)(51, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 18);
      \u0275\u0275element(53, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div")(55, "p", 21);
      \u0275\u0275text(56, "Horaires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 22);
      \u0275\u0275text(58, "Lun - Ven: 7h30 - 12h30, 13h - 16h00");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "a", 25)(60, "div", 26)(61, "div", 27);
      \u0275\u0275text(62, " \u{1F4CD} Minist\xE8re de la Transition Digitale ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "iframe", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 29)(65, "div", 30)(66, "h3", 31);
      \u0275\u0275text(67, " Envoyez-nous un message ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(68, ContactComponent_Conditional_68_Template, 5, 0, "div", 32);
      \u0275\u0275conditionalCreate(69, ContactComponent_Conditional_69_Template, 5, 1, "div", 33);
      \u0275\u0275elementStart(70, "form", 34);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_70_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(71, "div", 35)(72, "div")(73, "label", 36);
      \u0275\u0275text(74, "Nom complet ");
      \u0275\u0275elementStart(75, "span", 37);
      \u0275\u0275text(76, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "label", 39);
      \u0275\u0275text(80, "Email ");
      \u0275\u0275elementStart(81, "span", 37);
      \u0275\u0275text(82, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_83_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div")(85, "label", 41);
      \u0275\u0275text(86, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_87_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div")(89, "label", 43);
      \u0275\u0275text(90, "Sujet ");
      \u0275\u0275elementStart(91, "span", 37);
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_93_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.subject, $event) || (ctx.form.subject = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div")(95, "label", 45);
      \u0275\u0275text(96, "Message ");
      \u0275\u0275elementStart(97, "span", 37);
      \u0275\u0275text(98, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "textarea", 46);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_99_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "button", 47);
      \u0275\u0275conditionalCreate(101, ContactComponent_Conditional_101_Template, 4, 0)(102, ContactComponent_Conditional_102_Template, 3, 0);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(68);
      \u0275\u0275conditional(ctx.success() ? 68 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 69 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.subject);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 101 : 102);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [CommonModule, FormsModule], template: `    <!-- Hero Section - Light Design -->\r
    <section class="bg-gradient-to-r from-[#00843B] to-[#006B30] py-12">\r
      <!-- Decorative Elements -->\r
      <div class="absolute top-0 right-0 w-96 h-96 bg-burkina-green-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>\r
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-burkina-yellow-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>\r
      \r
      <div class="container mx-auto px-4 relative z-10"> \r
        <div class="inline-flex items-center gap-2 px-3 py-1 border border-white text-white bg-burkina-green-100 rounded-full text-burkina-green text-sm font-medium mb-4 border border-burkina-green-200">\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>\r
          </svg>\r
          Contact\r
        </div>\r
        <h1 class="text-4xl lg:text-5xl font-heading font-bold text-white text-slate-900 mb-4">Contactez-nous</h1>\r
        <p class="text-slate-600 text-lg max-w-2xl text-white">\r
          Vous avez une question ou une demande ? Notre \xE9quipe est \xE0 votre disposition pour vous r\xE9pondre.\r
        </p>\r
      </div>\r
    </section>\r
    \r
    <!-- Content Section -->\r
    <section class="py-16 bg-white">\r
      <div class="container mx-auto px-4">\r
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">\r
          <!-- Contact Info -->\r
          <div class="lg:col-span-1">\r
\r
             <div class="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">\r
          <h3 class="text-lg font-semibold text-gray-900 mb-6 border-l-4 pl-3" style="border-color:#00843B;">\r
            Informations de contact\r
          </h3>\r
\r
          <ul class="space-y-6">\r
\r
            <!-- Adresse -->\r
            <li class="flex items-start gap-4">\r
              <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#E6F4EC;">\r
                <svg class="w-6 h-6" style="color:#00843B;" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
                   \r
                </svg>\r
              </div>\r
              <div>\r
                <p class="font-semibold text-gray-900">Adresse</p>\r
                <p class="text-gray-500 text-sm">Avenue de l'Ind\xE9pendance<br>Ouagadougou, Burkina Faso</p>\r
              </div>\r
            </li>\r
\r
            <!-- T\xE9l\xE9phone -->\r
            <li class="flex items-start gap-4">\r
              <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#E6F4EC;">\r
                <svg class="w-6 h-6" style="color:#00843B;" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>\r
                   \r
                </svg>\r
              </div>\r
              <div>\r
                <p class="font-semibold text-gray-900">T\xE9l\xE9phone</p>\r
                <p class="text-gray-500 text-sm">+226 25 30 60 00</p>\r
              </div>\r
            </li>\r
\r
            <!-- Email -->\r
            <li class="flex items-start gap-4">\r
              <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#E6F4EC;">\r
                <svg class="w-6 h-6" style="color:#00843B;" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
                   \r
                </svg>\r
              </div>\r
              <div>\r
                <p class="font-semibold text-gray-900">Email</p>\r
                <p class="text-gray-500 text-sm">contact@mtdpce.gov.bf</p>\r
              </div>\r
            </li>\r
\r
            <!-- Horaires -->\r
            <li class="flex items-start gap-4">\r
              <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#E6F4EC;">\r
                <svg class="w-6 h-6" style="color:#00843B;" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
                  \r
                </svg>\r
              </div>\r
              <div>\r
                <p class="font-semibold text-gray-900">Horaires</p>\r
                <p class="text-gray-500 text-sm">Lun - Ven: 7h30 - 12h30, 13h - 16h00</p>\r
              </div>\r
            </li>\r
\r
          </ul>\r
        </div>\r
           \r
            \r
            <!-- Map placeholder -->\r
           <a \r
            href="https://www.google.com/maps/search/?api=1&query=Minist\xE8re+de+la+Transition+Digitale+des+Postes+et+des+Communications+Electroniques+Burkina+Faso"\r
            target="_blank"\r
            class="block"\r
            >\r
            <div class="card p-0 overflow-hidden bg-white shadow-xl rounded-2xl border border-neutral-200 relative">\r
\r
                <!-- Titre -->\r
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm font-semibold text-neutral-800 z-10">\r
                \u{1F4CD} Minist\xE8re de la Transition Digitale\r
                </div>\r
\r
                <!-- Map -->\r
                <iframe\r
                class="w-full h-72 border-0 pointer-events-none"\r
                loading="lazy"\r
                referrerpolicy="no-referrer-when-downgrade"\r
                src="https://www.google.com/maps?q=Minist%C3%A8re%20de%20la%20Transition%20Digitale%20des%20Postes%20et%20des%20Communications%20Electroniques%20Burkina%20Faso&output=embed">\r
                </iframe>\r
\r
            </div>\r
            </a>\r
\r
\r
        </div>\r
          \r
          <!-- Contact Form -->\r
          <div class="lg:col-span-2">\r
            <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100">\r
                <h3 class="text-xl font-semibold text-gray-900 mb-6 border-l-4 pl-3" style="border-color:#E30613;">\r
                    Envoyez-nous un message\r
                </h3>\r
              \r
              @if (success()) {\r
                <div class="flex items-start gap-3 p-4 bg-[#E6F4EC] border border-[#B7E1C7] rounded-xl text-[#006B30] mb-6 shadow-sm">\r
                    \r
                    <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-[#006B30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\r
                    </svg>\r
\r
                    <span class="text-sm font-medium">\r
                    Votre message a \xE9t\xE9 envoy\xE9 avec succ\xE8s. Nous vous r\xE9pondrons dans les plus brefs d\xE9lais.\r
                    </span>\r
                </div>\r
                }\r
\r
              \r
@if (error()) {\r
  <div class="flex items-start gap-3 p-4 bg-[#FDECEC] border border-[#F5B5B5] rounded-xl text-[#C40000] mb-6 shadow-sm">\r
    \r
    <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C40000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\r
    </svg>\r
\r
    <span class="text-sm font-medium">\r
      {{ error() }}\r
    </span>\r
  </div>\r
}\r
\r
              \r
              <form (ngSubmit)="onSubmit()" class="space-y-5">\r
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">\r
                  <div>\r
                    <label for="name" class="input-label">Nom complet <span class="text-red-500">*</span></label>\r
                    <input \r
                      type="text" \r
                      id="name" \r
                      name="name"\r
                      [(ngModel)]="form.name"\r
                      class="input"\r
                      placeholder="Votre nom"\r
                      required>\r
                  </div>\r
                  <div>\r
                    <label for="email" class="input-label">Email <span  class="text-red-500">*</span></label>\r
                    <input \r
                      type="email" \r
                      id="email" \r
                      name="email"\r
                      [(ngModel)]="form.email"\r
                      class="input"\r
                      placeholder="votre@email.com"\r
                      required>\r
                  </div>\r
                </div>\r
                \r
                <div>\r
                  <label for="phone" class="input-label">T\xE9l\xE9phone</label>\r
                  <input \r
                    type="tel" \r
                    id="phone" \r
                    name="phone"\r
                    [(ngModel)]="form.phone"\r
                    class="input"\r
                    placeholder="+226 XX XX XX XX">\r
                </div>\r
                \r
                <div>\r
                  <label for="subject" class="input-label">Sujet <span  class="text-red-500">*</span></label>\r
                  <input \r
                    type="text" \r
                    id="subject" \r
                    name="subject"\r
                    [(ngModel)]="form.subject"\r
                    class="input"\r
                    placeholder="Objet de votre message"\r
                    required>\r
                </div>\r
                \r
                <div>\r
                  <label for="message" class="input-label">Message <span  class="text-red-500">*</span></label>\r
                  <textarea \r
                    id="message" \r
                    name="message"\r
                    [(ngModel)]="form.message"\r
                    rows="5"\r
                    class="textarea"\r
                    placeholder="D\xE9crivez votre demande..."\r
                    required></textarea>\r
                </div>\r
                \r
                <button \r
                  type="submit" \r
                  [disabled]="loading()"\r
                  class="btn-primary py-3 px-6" style="background-color: #00843B;">\r
                  @if (loading()) {\r
                    <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">\r
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
                    </svg>\r
                    Envoi en cours...\r
                  } @else {\r
                    Envoyer le message\r
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>\r
                    </svg>\r
                  }\r
                </button>\r
              </form>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
\r
\r
\r
\r
` }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/features/contact/contact/contact.component.ts", lineNumber: 13 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-XPE2EJ64.js.map
