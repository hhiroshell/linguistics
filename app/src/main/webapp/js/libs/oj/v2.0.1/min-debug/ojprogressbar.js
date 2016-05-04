/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$63$$, $$$$57$$) {
  (function() {
    $oj$$63$$.$__registerWidget$("oj.ojProgressbar", $$$$57$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$57$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
      var $dom_element$$158$$ = this.element;
      this._super($originalDefaults$$14$$, $constructorOptions$$16$$);
      void 0 === $constructorOptions$$16$$.max && ($dom_element$$158$$ = $dom_element$$158$$.attr("max") || void 0, null != $dom_element$$158$$ && (this.options.max = $dom_element$$158$$));
    }, $_constrainedValue$:function($newValue$$22$$) {
      void 0 === $newValue$$22$$ && ($newValue$$22$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$22$$;
      "number" !== typeof $newValue$$22$$ && ($newValue$$22$$ = isNaN($newValue$$22$$) ? 0 : Number($newValue$$22$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$22$$));
    }, _setOptions:function($options$$395$$, $flags$$44$$) {
      var $value$$303$$ = $options$$395$$.value;
      delete $options$$395$$.value;
      this._super($options$$395$$, $flags$$44$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$303$$), this.$_refreshValue$());
    }, _setOption:function($key$$177$$, $value$$304$$, $flags$$45$$) {
      "max" === $key$$177$$ && ($value$$304$$ = Math.max(this.min, $value$$304$$));
      this._super($key$$177$$, $value$$304$$, $flags$$45$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$305$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$305$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$57$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$305$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
      this._super();
    }});
  })();
});
