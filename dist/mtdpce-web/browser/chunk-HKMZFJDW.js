import {
  AuthService
} from "./chunk-A5LVPKIT.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L2DNARFP.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/auth/login.component.ts
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LoginComponent__svg_svg_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 36);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 37);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 38);
    \u0275\u0275element(1, "circle", 39)(2, "path", 40);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Se connecter");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Connexion en cours...");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  route;
  username = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  onSubmit() {
    if (!this.username || !this.password) {
      this.error.set("Veuillez remplir tous les champs");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        if (response.success) {
          const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
          this.router.navigateByUrl(returnUrl);
        } else {
          this.error.set(response.message || "Erreur de connexion");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Identifiants incorrects");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 47, vars: 10, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-100"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-8"], [1, "w-full", "max-w-md"], [1, "flex", "justify-center", "mb-8"], ["routerLink", "/", 1, "flex", "items-center", "gap-3"], [1, "w-16", "h-16", "flex-shrink-0"], ["src", "assets/images/armoirie.png", "alt", "Logo MTDPCE", 1, "w-full", "h-full", "object-contain"], [1, "flex", "flex-col", "leading-tight", "justify-center"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "font-medium", "text-danger-500"], [1, "bg-white", "shadow-lg", "rounded-2xl", "p-8", "border", "border-slate-200"], [1, "text-center", "mb-6"], [1, "text-2xl", "font-bold", "text-slate-900", "mb-2"], [1, "text-slate-500"], ["class", "mb-4 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl flex items-start gap-3", 4, "ngIf"], [1, "space-y-5", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-slate-700"], [1, "relative", "mt-1"], ["type", "text", "name", "username", "placeholder", "Entrez votre nom d'utilisateur", "required", "", "autocomplete", "username", 1, "w-full", "border", "border-gray-300", "rounded-lg", "px-4", "py-3", "pl-11", "focus:outline-none", "focus:ring-2", "focus:ring-[#006B30]", "focus:border-[#006B30]", 3, "ngModelChange", "ngModel"], [1, "absolute", "inset-y-0", "left-0", "flex", "items-center", "pl-3", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["name", "password", "placeholder", "Entrez votre mot de passe", "required", "", "autocomplete", "current-password", 1, "w-full", "border", "border-gray-300", "rounded-lg", "px-4", "py-3", "pl-11", "pr-11", "focus:outline-none", "focus:ring-2", "focus:ring-[#006B30]", "focus:border-[#006B30]", 3, "ngModelChange", "type", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "text-gray-400", "hover:text-gray-600", 3, "click"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-[#006B30]", "text-white", "font-medium", "rounded-lg", "py-3", "flex", "items-center", "justify-center", "gap-2", "hover:bg-[#005026]", "transition-colors", 3, "disabled"], ["class", "animate-spin w-5 h-5", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [4, "ngIf"], [1, "mt-6", "text-center", "text-sm", "text-slate-500", "border-t", "border-slate-200", "pt-6"], ["routerLink", "/", 1, "text-[#006B30]", "font-medium", "hover:text-[#005026]"], [1, "mb-4", "p-4", "bg-burkina-red-50", "border", "border-burkina-red-200", "rounded-xl", "flex", "items-start", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-burkina-red", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-burkina-red-700"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "MTDPCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Burkina Faso");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "h2", 12);
      \u0275\u0275text(15, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 13);
      \u0275\u0275text(17, "Entrez vos identifiants pour acc\xE9der \xE0 votre compte");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, LoginComponent_div_18_Template, 5, 1, "div", 14);
      \u0275\u0275elementStart(19, "form", 15);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(20, "div")(21, "label", 16);
      \u0275\u0275text(22, "Nom d'utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17)(24, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 20);
      \u0275\u0275element(27, "path", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div")(29, "label", 16);
      \u0275\u0275text(30, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 17)(32, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 20);
      \u0275\u0275element(35, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "button", 24);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_36_listener() {
        return ctx.showPassword.set(!ctx.showPassword());
      });
      \u0275\u0275template(37, LoginComponent__svg_svg_37_Template, 2, 0, "svg", 25)(38, LoginComponent__svg_svg_38_Template, 2, 0, "svg", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "button", 26);
      \u0275\u0275template(40, LoginComponent__svg_svg_40_Template, 3, 0, "svg", 27)(41, LoginComponent_span_41_Template, 2, 0, "span", 28)(42, LoginComponent_span_42_Template, 2, 0, "span", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 29);
      \u0275\u0275text(44, " Retour \xE0 ");
      \u0275\u0275elementStart(45, "a", 30);
      \u0275\u0275text(46, "la page d'accueil");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [CommonModule, RouterModule, FormsModule],
      template: `




<div class="min-h-screen flex items-center justify-center bg-gray-100">

  <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
    <div class="w-full max-w-md">

      <!-- Logo centr\xE9 avec texte du Minist\xE8re -->
      <div class="flex justify-center mb-8">
        <a routerLink="/" class="flex items-center gap-3">
          <!-- Logo -->
          <div class="w-16 h-16 flex-shrink-0">
            <img
              src="assets/images/armoirie.png"
              alt="Logo MTDPCE"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Sigle du Minist\xE8re + Burkina Faso -->
          <div class="flex flex-col leading-tight justify-center">
            <span class="text-xl font-bold text-slate-900">MTDPCE</span>
            <span class="text-sm font-medium text-danger-500">Burkina Faso</span>
          </div>
        </a>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-8 border border-slate-200">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Connexion</h2>
          <p class="text-slate-500">Entrez vos identifiants pour acc\xE9der \xE0 votre compte</p>
        </div>

        <!-- Error Message -->
        <div *ngIf="error()" class="mb-4 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl flex items-start gap-3">
          <svg class="w-5 h-5 text-burkina-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div class="text-sm text-burkina-red-700">{{ error() }}</div>
        </div>

        <!-- Formulaire -->
        <form (ngSubmit)="onSubmit()" class="space-y-5">

          <!-- Nom d'utilisateur -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Nom d'utilisateur</label>
            <div class="relative mt-1">
              <input type="text" [(ngModel)]="username" name="username"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-[#006B30] focus:border-[#006B30]"
                    placeholder="Entrez votre nom d'utilisateur"
                    required autocomplete="username"/>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Mot de passe -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Mot de passe</label>
            <div class="relative mt-1">
              <input [type]="showPassword() ? 'text' : 'password'" [(ngModel)]="password" name="password"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 pr-11 focus:outline-none focus:ring-2 focus:ring-[#006B30] focus:border-[#006B30]"
                    placeholder="Entrez votre mot de passe"
                    required autocomplete="current-password"/>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <button type="button" (click)="showPassword.set(!showPassword())"
                      class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600">
                <svg *ngIf="showPassword()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242"/>
                </svg>
                <svg *ngIf="!showPassword()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Bouton de connexion -->
          <button type="submit"
                  [disabled]="loading()"
                  class="w-full bg-[#006B30] text-white font-medium rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-[#005026] transition-colors">
            <svg *ngIf="loading()" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span *ngIf="!loading()">Se connecter</span>
            <span *ngIf="loading()">Connexion en cours...</span>
          </button>

        </form>

        <div class="mt-6 text-center text-sm text-slate-500 border-t border-slate-200 pt-6">
          Retour \xE0 <a routerLink="/" class="text-[#006B30] font-medium hover:text-[#005026]">la page d'accueil</a>
        </div>
      </div>

    </div>
  </div>

</div>

  `
    }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login.component.ts", lineNumber: 130 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-HKMZFJDW.js.map
