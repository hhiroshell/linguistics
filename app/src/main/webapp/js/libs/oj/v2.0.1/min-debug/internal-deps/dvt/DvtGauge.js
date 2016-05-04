/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_identityFn$$() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
}
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$56$$, $opt_object$$) {
  0 == $name$$56$$.indexOf("dvt.") && ($name$$56$$ = $name$$56$$.substring(4));
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("dvt");
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function($dvt$$3$$) {
  function $DvtRatingGaugeEventManager$$($dvt$$3$$) {
    this.Init($dvt$$3$$.$getCtx$(), $dvt$$3$$.dispatchEvent, $dvt$$3$$);
    this.$_gauge$ = $dvt$$3$$
  }
  function $DvtRatingGaugePeer$$($dvt$$3$$) {
    this.Init();
    this.$_gauge$ = $dvt$$3$$
  }
  function $DvtRatingGaugeDefaults$$() {
    this.Init({skyros:$DvtRatingGaugeDefaults$$.$VERSION_1$, alta:$DvtRatingGaugeDefaults$$.$SKIN_ALTA$})
  }
  function $DvtDialGaugeIndicator$$($dvt$$3$$) {
    this.Init($dvt$$3$$)
  }
  function $DvtDialGaugeDefaults$$() {
    this.Init({skyros:$DvtDialGaugeDefaults$$.$VERSION_1$, alta:{}})
  }
  function $DvtStatusMeterGaugeCircularIndicator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$)
  }
  function $DvtStatusMeterGaugeIndicator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$)
  }
  function $DvtStatusMeterGaugeDefaults$$() {
    this.Init({skyros:$DvtStatusMeterGaugeDefaults$$.$VERSION_1$, alta:$DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$})
  }
  function $DvtLedGaugeDefaults$$() {
    this.Init({skyros:$DvtLedGaugeDefaults$$.$VERSION_1$, alta:{}})
  }
  function $DvtGaugeKeyboardHandler$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.Init($dvt$$3$$, $DvtRatingGaugeEventManager$$)
  }
  function $DvtGaugeEventManager$$($dvt$$3$$) {
    this.Init($dvt$$3$$.$getCtx$(), $dvt$$3$$.dispatchEvent, $dvt$$3$$);
    this.$_gauge$ = $dvt$$3$$;
    this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$
  }
  function $DvtGaugeDefaults$$() {
  }
  function $DvtGaugeAutomation$$($dvt$$3$$) {
    this.$_gauge$ = $dvt$$3$$
  }
  function $DvtGauge$$() {
  }
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGauge$$, $dvt$$3$$.$BaseComponent$);
  $DvtGauge$$.$_DEFAULT_MIN_VALUE$ = 0;
  $DvtGauge$$.$_DEFAULT_MAX_VALUE$ = 100;
  $DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGauge$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$_bStaticRendering$ = $DvtDialGaugeIndicator$$;
    this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), $dvt$$3$$.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + Math.floor(1E9 * Math.random())), this.$_editingOverlay$ = new $dvt$$3$$.$Rect$($DvtRatingGaugeEventManager$$, 0, 0), this.$_editingOverlay$.$setInvisibleFill$(), this.$addChild$(this.$_editingOverlay$));
    this.$_bResizeRender$ = this.$_bEditing$ = $JSCompiler_alias_FALSE$$;
    this.$_oldValue$ = $JSCompiler_alias_NULL$$
  };
  $DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    this.$Options$ = $DvtRatingGaugeEventManager$$;
    $dvt$$3$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
  };
  $DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugeEventManager$$ ? this.$SetOptions$($DvtRatingGaugeEventManager$$) : this.$Options$ || this.$SetOptions$($JSCompiler_alias_NULL$$);
    this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort($DvtGauge$$.$_thresholdComparator$));
    !isNaN($DvtRatingGaugePeer$$) && !isNaN($DvtRatingGaugeDefaults$$) && (this.$_bResizeRender$ = 0 != this.$Width$ && this.$Width$ != $DvtRatingGaugePeer$$ || 0 != this.$Height$ && this.$Height$ != $DvtRatingGaugeDefaults$$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, this.$Width$ = $DvtRatingGaugePeer$$, this.$Height$ = $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = this.$__shapes$;
    this.$__shapes$ = [];
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Container$(this.$getCtx$());
    this.$addChildAt$($DvtRatingGaugePeer$$, 0);
    this.$Render$($DvtRatingGaugePeer$$, this.$Width$, this.$Height$);
    this.$_setAnimation$($DvtRatingGaugePeer$$, $DvtRatingGaugeEventManager$$ != $JSCompiler_alias_NULL$$, $DvtRatingGaugeDefaults$$, this.$Width$, this.$Height$);
    this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), $JSCompiler_alias_TRUE$$));
    !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($DvtRatingGaugePeer$$.$setAriaRole$("slider"), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemin", this.$Options$.min), $DvtRatingGaugePeer$$.$setAriaProperty$("valuemax", this.$Options$.max), $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtRatingGaugePeer$$.$setAriaProperty$("valuenow", $DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getTooltipString$(this), 
    $dvt$$3$$.$Agent$.$isTouchDevice$() && (this.$_container$.$setAriaProperty$("live", "assertive"), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtRatingGaugeDefaults$$)), $DvtRatingGaugeEventManager$$ != $DvtRatingGaugeDefaults$$ && $DvtRatingGaugePeer$$.$setAriaProperty$("label", $DvtRatingGaugeDefaults$$), this.$_renderCount$ = 
    this.$_renderCount$ != $JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $DvtRatingGaugeEventManager$$ = this.getId() + "_" + this.$_renderCount$, $DvtRatingGaugePeer$$.setId($DvtRatingGaugeEventManager$$), this.$getCtx$().$setActiveElement$($DvtRatingGaugePeer$$));
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$UpdateAriaAttributes$();
    this.$_animation$ || this.$RenderComplete$()
  };
  $DvtGauge$$.prototype.$__getLogicalObject$ = function $$DvtGauge$$$$$__getLogicalObject$$() {
    var $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getTooltipString$(this), $DvtRatingGaugePeer$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
    return new $dvt$$3$$.$SimpleObjPeer$($JSCompiler_alias_NULL$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)
  };
  $DvtGauge$$.prototype.$Render$ = $JSCompiler_emptyFn$$();
  $DvtGauge$$.prototype.$_setAnimation$ = function $$DvtGauge$$$$$_setAnimation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop());
    var $DvtStatusMeterGaugeCircularIndicator$$ = $JSCompiler_alias_FALSE$$, $DvtStatusMeterGaugeIndicator$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDataChange, $DvtStatusMeterGaugeDefaults$$ = this.$_bEditing$ || this.$_bResizeRender$ ? "none" : this.$getOptions$().animationOnDisplay, $DvtLedGaugeDefaults$$ = $dvt$$3$$.$StyleUtils$.$getTimeMilliseconds$(this.$getOptions$().animationDuration) / 1E3;
    if($DvtStatusMeterGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$) {
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$(0, 0, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ = this.$getCtx$(), !this.$_container$ && "none" !== $DvtStatusMeterGaugeDefaults$$ && this.$__shapes$[0] != $JSCompiler_alias_NULL$$ ? (this.$_animation$ = $dvt$$3$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$), this.$_animation$ || 
      (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$))) : this.$_container$ && ("none" != $DvtStatusMeterGaugeIndicator$$ && $DvtRatingGaugePeer$$ && this.$__shapes$[0] != $JSCompiler_alias_NULL$$) && ((this.$_animation$ = $dvt$$3$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, this.$_container$, $DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$)) ? 
      $DvtStatusMeterGaugeCircularIndicator$$ = $JSCompiler_alias_TRUE$$ : this.$_animation$ = this.$CreateAnimationOnDataChange$($DvtRatingGaugeDefaults$$, this.$__shapes$, $DvtLedGaugeDefaults$$)), $DvtStatusMeterGaugeCircularIndicator$$ || this.removeChild(this.$_container$), this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this)), $DvtStatusMeterGaugeCircularIndicator$$ && (this.$_oldContainer$ = this.$_container$), this.$_container$ = $DvtRatingGaugeEventManager$$
    }
  };
  $DvtGauge$$.prototype.$CreateAnimationOnDisplay$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtGauge$$.prototype.$CreateAnimationOnDataChange$ = function $$DvtGauge$$$$$CreateAnimationOnDataChange$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    for(var $DvtDialGaugeIndicator$$ = [], $DvtDialGaugeDefaults$$ = 0;$DvtDialGaugeDefaults$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeDefaults$$++) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugePeer$$[$DvtDialGaugeDefaults$$], $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeDefaults$$].$getAnimationParams$(), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$();
      $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$($DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.$getAnimationParams$, $DvtStatusMeterGaugeCircularIndicator$$.$setAnimationParams$, $DvtStatusMeterGaugeDefaults$$);
      $DvtDialGaugeIndicator$$.push($DvtStatusMeterGaugeIndicator$$)
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtDialGaugeIndicator$$)
  };
  $DvtGauge$$.prototype.$GetValueAt$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtGauge$$.prototype.$renderUpdate$ = function $$DvtGauge$$$$$renderUpdate$$() {
    this.$render$();
    this.$UpdateAriaLiveValue$(this.$_container$)
  };
  $DvtGauge$$.prototype.$UpdateAriaLiveValue$ = function $$DvtGauge$$$$$UpdateAriaLiveValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtRatingGaugePeer$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$ ? $DvtRatingGaugePeer$$ : this.$Options$.value, this);
    $DvtRatingGaugeEventManager$$.$setAriaProperty$("valuenow", $DvtRatingGaugePeer$$);
    $dvt$$3$$.$Agent$.$isTouchDevice$() && $DvtRatingGaugeEventManager$$.$setAriaProperty$("label", $DvtRatingGaugePeer$$)
  };
  $DvtGauge$$.prototype.$_onAnimationEnd$ = function $$DvtGauge$$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
    this.$_animationStopped$ || this.$RenderComplete$();
    this.$_animationStopped$ = this.$_animation$ = $JSCompiler_alias_NULL$$
  };
  $DvtGauge$$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  $DvtGauge$$.prototype.$__processValueChangeStart$ = function $$DvtGauge$$$$$__processValueChangeStart$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.$_bEditing$ = $JSCompiler_alias_TRUE$$;
    this.$_oldValue$ = this.$Options$.value;
    this.$__processValueChangeMove$($dvt$$3$$, $DvtRatingGaugeEventManager$$)
  };
  $DvtGauge$$.prototype.$__processValueChangeMove$ = function $$DvtGauge$$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    this.$_oldValue$ != $JSCompiler_alias_NULL$$ && (this.$Options$.value = $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)), this.$renderUpdate$(), this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, $JSCompiler_alias_FALSE$$)))
  };
  $DvtGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtGauge$$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    this.$__processValueChangeMove$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    if($dvt$$3$$.$Agent$.$isTouchDevice$()) {
      var $DvtRatingGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      $DvtRatingGaugeDefaults$$ != $DvtDialGaugeIndicator$$ && ($DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$ + $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $DvtDialGaugeIndicator$$, this.$_container$.$setAriaProperty$("label", $DvtDialGaugeIndicator$$))
    }
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, $JSCompiler_alias_TRUE$$));
    this.$_bEditing$ = $JSCompiler_alias_FALSE$$;
    this.$_oldValue$ = $JSCompiler_alias_NULL$$
  };
  $DvtGauge$$.prototype.$__increaseValue$ = function $$DvtGauge$$$$$__increaseValue$$() {
    if(!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = this.$Options$.step != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value + this.$Options$.step) : Math.min(Math.max(this.$Options$.value + (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, $JSCompiler_alias_TRUE$$))
    }
  };
  $DvtGauge$$.prototype.$__decreaseValue$ = function $$DvtGauge$$$$$__decreaseValue$$() {
    if(!this.$Options$.readOnly) {
      var $DvtRatingGaugeEventManager$$ = this.$Options$.value;
      this.$Options$.value = this.$Options$.step != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$Options$.value - this.$Options$.step) : Math.min(Math.max(this.$Options$.value - (this.$Options$.max - this.$Options$.min) / 100, this.$Options$.min), this.$Options$.max);
      this.$render$();
      this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeEventManager$$, this.$Options$.value, $JSCompiler_alias_TRUE$$))
    }
  };
  $DvtGauge$$.prototype.$CreateEventManager$ = function $$DvtGauge$$$$$CreateEventManager$$() {
    return new $DvtGaugeEventManager$$(this)
  };
  $DvtGauge$$.$_thresholdComparator$ = function $$DvtGauge$$$$_thresholdComparator$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    return $dvt$$3$$.max != $JSCompiler_alias_NULL$$ && $DvtRatingGaugeEventManager$$.max != $JSCompiler_alias_NULL$$ ? $dvt$$3$$.max - $DvtRatingGaugeEventManager$$.max : $dvt$$3$$.max ? -Infinity : Infinity
  };
  $DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
    return new $DvtGaugeAutomation$$(this)
  };
  $DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($dvt$$3$$) {
    return new $DvtGaugeKeyboardHandler$$($dvt$$3$$, this)
  };
  $DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
    return $dvt$$3$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "GAUGE")
  };
  $DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
    if(!this.$_bStaticRendering$) {
      var $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
      this.$IsParentRoot$() ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$3$$.$Displayable$.$generateAriaLabel$($dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : 
      $JSCompiler_alias_NULL$$)]))) : (this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$($dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $dvt$$3$$.$Displayable$.$generateAriaLabel$($dvt$$3$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), 
      $DvtRatingGaugeEventManager$$ ? [$DvtRatingGaugeEventManager$$] : $JSCompiler_alias_NULL$$)))
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeAutomation$$, $dvt$$3$$.$Automation$);
  $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($DvtRatingGaugeEventManager$$) {
    if($DvtRatingGaugeEventManager$$ == $dvt$$3$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_gauge$)
    }
    if(0 == $DvtRatingGaugeEventManager$$.indexOf("item")) {
      var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.indexOf("["), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indexOf("]");
      if(0 < $DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$ = this.$_gauge$.$__getRatingGaugeItem$($DvtRatingGaugeEventManager$$.substring($DvtRatingGaugePeer$$ + 1, $DvtRatingGaugeDefaults$$)))) {
        return $DvtRatingGaugeEventManager$$.$getElem$()
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
    return this.$_gauge$.$getOptions$().value
  };
  $DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
    return $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
  };
  $dvt$$3$$.$Bundle$.$addDefaultStrings$($dvt$$3$$.$Bundle$.$GAUGE_PREFIX$, {});
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeDefaults$$, $dvt$$3$$.$BaseComponentDefaults$);
  $DvtGaugeDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$3$$.$CSSStyle$.$SKIN_ALTA$, color:"#393737", metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _statusMessageStyle:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), title:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
  $DvtGaugeDefaults$$.$VERSION_1$ = {skin:$dvt$$3$$.$CSSStyle$.$SKIN_SKYROS$, min:0, max:100, center:{}, color:"#313842", borderColor:$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), textType:"number"}, _statusMessageStyle:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), 
  title:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
  $DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($DvtRatingGaugeEventManager$$) {
    $DvtRatingGaugeEventManager$$ = {skyros:$dvt$$3$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.skyros, $DvtGaugeDefaults$$.$VERSION_1$), alta:$dvt$$3$$.$JsonUtils$.$merge$($DvtRatingGaugeEventManager$$.alta, $DvtGaugeDefaults$$.$SKIN_ALTA$)};
    $DvtGaugeDefaults$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$)
  };
  $DvtGaugeDefaults$$.$isSkyrosSkin$ = function $$DvtGaugeDefaults$$$$isSkyrosSkin$$($DvtRatingGaugeEventManager$$) {
    return $DvtRatingGaugeEventManager$$.$getOptions$().skin == $dvt$$3$$.$CSSStyle$.$SKIN_SKYROS$
  };
  var $DvtGaugeDataUtils$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeDataUtils$$, $dvt$$3$$.$Obj$);
  $DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($dvt$$3$$) {
    $dvt$$3$$ = $dvt$$3$$.$getOptions$();
    return!$dvt$$3$$ || isNaN($dvt$$3$$.value) || $dvt$$3$$.value === $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugePeer$$.value, $DvtRatingGaugePeer$$ = $DvtRatingGaugePeer$$.thresholds;
    if(!$DvtRatingGaugePeer$$) {
      return-1
    }
    for(var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugePeer$$.length;$DvtDialGaugeIndicator$$++) {
      if($DvtRatingGaugeDefaults$$ <= $DvtRatingGaugePeer$$[$DvtDialGaugeIndicator$$].max) {
        return $DvtDialGaugeIndicator$$
      }
    }
    return $DvtRatingGaugePeer$$.length - 1
  };
  $DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$().thresholds;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : $JSCompiler_alias_NULL$$
  };
  $DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $dvt$$3$$.$getOptions$().referenceLines;
    return $DvtRatingGaugePeer$$ && 0 <= $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ < $DvtRatingGaugePeer$$.length ? $DvtRatingGaugePeer$$[$DvtRatingGaugeEventManager$$] : $JSCompiler_alias_NULL$$
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeEventManager$$, $dvt$$3$$.$EventManager$);
  $DvtGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtGaugeEventManager$$$$$OnMouseDown$$($dvt$$3$$) {
    this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$ ? (this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $dvt$$3$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processValueChangeStart$($dvt$$3$$.x, $dvt$$3$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$3$$)
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseUp$ = function $$DvtGaugeEventManager$$$$$OnMouseUp$$($dvt$$3$$) {
    this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$, $dvt$$3$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processValueChangeEnd$($dvt$$3$$.x, $dvt$$3$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$3$$)
  };
  $DvtGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtGaugeEventManager$$$$$OnMouseMove$$($dvt$$3$$) {
    if(this.$IsMouseEditing$) {
      var $DvtRatingGaugeEventManager$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
      this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y)
    }
    (this.$IsShowingTooltipWhileEditing$() || !this.$IsMouseEditing$) && $DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$3$$)
  };
  $DvtGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  $DvtGaugeEventManager$$.prototype.$PreEventBubble$ = function $$DvtGaugeEventManager$$$$$PreEventBubble$$($DvtRatingGaugeEventManager$$) {
    if($dvt$$3$$.$TouchEvent$.$TOUCHSTART$ === $DvtRatingGaugeEventManager$$.type && this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$) {
      this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$;
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      $DvtRatingGaugeEventManager$$.preventDefault()
    }else {
      $dvt$$3$$.$TouchEvent$.$TOUCHMOVE$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ ? ($DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.touches[0].pageX, $DvtRatingGaugeEventManager$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault()) : $dvt$$3$$.$TouchEvent$.$TOUCHEND$ === $DvtRatingGaugeEventManager$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = 
      $JSCompiler_alias_FALSE$$, $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($DvtRatingGaugeEventManager$$.changedTouches[0].pageX, $DvtRatingGaugeEventManager$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y), $DvtRatingGaugeEventManager$$.preventDefault())
    }
    (!this.$IsMouseEditing$ || this.$IsShowingTooltipWhileEditing$()) && $DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $DvtRatingGaugeEventManager$$)
  };
  $DvtGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtGaugeEventManager$$$$$ProcessKeyboardEvent$$($DvtRatingGaugeEventManager$$) {
    if(!this.$KeyboardHandler$) {
      return $JSCompiler_alias_FALSE$$
    }
    this.$KeyboardHandler$.$processKeyDown$($DvtRatingGaugeEventManager$$);
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode;
    if($DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$UP_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$LEFT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$RIGHT_ARROW$ || $DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$TAB$) {
      $DvtRatingGaugePeer$$ = this.$_gauge$.$getCtx$().$getStageAbsolutePosition$(), this.$ProcessObjectTooltip$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$)
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtGaugeEventManager$$.prototype.$OnBlur$ = function $$DvtGaugeEventManager$$$$$OnBlur$$($dvt$$3$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$3$$);
    this.$hideTooltip$()
  };
  $DvtGaugeEventManager$$.prototype.$GetRelativePosition$ = function $$DvtGaugeEventManager$$$$$GetRelativePosition$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = this.$getCtx$().$pageToStageCoords$($dvt$$3$$, $DvtRatingGaugeEventManager$$);
    return this.$_gauge$.$stageToLocal$($DvtRatingGaugePeer$$)
  };
  $DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = $JSCompiler_emptyFn$$();
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeKeyboardHandler$$, $dvt$$3$$.$KeyboardHandler$);
  $DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    $DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$3$$);
    this.$_gauge$ = $DvtRatingGaugeEventManager$$
  };
  $DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.keyCode, $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$_gauge$.$getCtx$());
    if($DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$UP_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$3$$.$KeyboardEvent$.$LEFT_ARROW$ : $dvt$$3$$.$KeyboardEvent$.$RIGHT_ARROW$)) {
      this.$_gauge$.$__increaseValue$(), $dvt$$3$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$)
    }else {
      if($DvtRatingGaugePeer$$ == $dvt$$3$$.$KeyboardEvent$.$DOWN_ARROW$ || $DvtRatingGaugePeer$$ == ($DvtRatingGaugeDefaults$$ ? $dvt$$3$$.$KeyboardEvent$.$RIGHT_ARROW$ : $dvt$$3$$.$KeyboardEvent$.$LEFT_ARROW$)) {
        this.$_gauge$.$__decreaseValue$(), $dvt$$3$$.$EventManager$.$consumeEvent$($DvtRatingGaugeEventManager$$)
      }
    }
  };
  var $DvtGaugeStyleUtils$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeStyleUtils$$, $dvt$$3$$.$Obj$);
  $DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
  $DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
  $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
  $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
  $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
  $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
  $DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$ && (!($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$) : $DvtRatingGaugePeer$$.color
  };
  $DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
    return($DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$)) && $DvtRatingGaugeDefaults$$.borderColor && (!($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" == $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtRatingGaugeDefaults$$.borderColor : $DvtRatingGaugePeer$$.borderColor
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$ && (!($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) || $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "onIndicator" != $DvtRatingGaugePeer$$.thresholdDisplay) ? $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$) : $DvtRatingGaugePeer$$.plotArea.color
  };
  $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaBorderColor$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.plotArea.borderColor;
    return $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$ && "circular" != $DvtRatingGaugePeer$$.orientation && $DvtRatingGaugeDefaults$$ == $JSCompiler_alias_NULL$$ ? "skyros" == $DvtRatingGaugePeer$$.skin ? "#C6C6C6" : "#D6DFE6" : $DvtRatingGaugeDefaults$$
  };
  $DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    if($DvtRatingGaugeEventManager$$.color) {
      return $DvtRatingGaugeEventManager$$.color
    }
    $dvt$$3$$ = $dvt$$3$$.$getOptions$();
    return $dvt$$3$$._thresholdColors[$DvtRatingGaugePeer$$ % $dvt$$3$$._thresholdColors.length]
  };
  $DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($dvt$$3$$) {
    return"rectangleAlta" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : 
    "domeLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_DOME$ : $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
  };
  $DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($dvt$$3$$) {
    return"needleAntique" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $dvt$$3$$ ? $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
  };
  $DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($dvt$$3$$) {
    return!!$dvt$$3$$.title.text
  };
  var $DvtGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.emptyText;
    $DvtDialGaugeDefaults$$ || ($DvtDialGaugeDefaults$$ = $dvt$$3$$.$Bundle$.$getTranslation$($DvtDialGaugeIndicator$$, "labelNoData", $dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$));
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$._statusMessageStyle;
    $DvtDialGaugeIndicator$$.$getStyle$("font-size") || $DvtDialGaugeIndicator$$.$setStyle$("font-size", "13px");
    if($DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$StatusMeterGauge$) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.$getStyle$("color");
      $DvtDialGaugeIndicator$$.$setStyle$("color", $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeCircularIndicator$$ : "#333333")
    }
    $dvt$$3$$.$TextUtils$.$renderEmptyText$($DvtRatingGaugePeer$$, $DvtDialGaugeDefaults$$, new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtRatingGaugeEventManager$$.$getEventManager$(), $DvtDialGaugeIndicator$$)
  };
  $DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    return $DvtRatingGaugePeer$$.metricLabel.text ? $DvtRatingGaugePeer$$.metricLabel.text : $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$.metricLabel.converter, $DvtRatingGaugePeer$$.metricLabel.scaling, $DvtRatingGaugePeer$$.metricLabel.autoPrecision ? $DvtRatingGaugePeer$$.metricLabel.autoPrecision : "on", "percent" == $DvtRatingGaugePeer$$.metricLabel.textType)
  };
  $DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $JSCompiler_alias_NULL$$, $DvtDialGaugeIndicator$$ = "percent" == $DvtRatingGaugePeer$$.tickLabel.textType;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.converter && ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugePeer$$.tickLabel.converter);
    var $DvtDialGaugeDefaults$$ = $JSCompiler_alias_NULL$$;
    "on" == $DvtRatingGaugePeer$$.tickLabel.rendered && $DvtRatingGaugePeer$$.tickLabel.scaling && ($DvtDialGaugeDefaults$$ = $DvtRatingGaugePeer$$.tickLabel.scaling);
    return $DvtGaugeRenderer$$.$_formatLabelValue$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$.tickLabel.autoPrecision ? $DvtRatingGaugePeer$$.tickLabel.autoPrecision : "on", $DvtDialGaugeIndicator$$)
  };
  $DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugePeer$$.$getOptions$(), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.min, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$.max, $DvtGaugeKeyboardHandler$$ = $DvtLedGaugeDefaults$$ - $DvtStatusMeterGaugeDefaults$$, $DvtGaugeEventManager$$ = $JSCompiler_alias_NULL$$;
    isNaN($DvtGaugeKeyboardHandler$$) || ($DvtGaugeEventManager$$ = $DvtGaugeKeyboardHandler$$ / (1E3 > $DvtGaugeKeyboardHandler$$ ? 100 : 1E3));
    $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$, $JSCompiler_alias_TRUE$$));
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearScaleAxisValueFormatter$($DvtRatingGaugePeer$$.$getCtx$(), $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.getAsString ? $DvtRatingGaugePeer$$.$format$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.format ? $DvtRatingGaugePeer$$.$format$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$) : $DvtStatusMeterGaugeCircularIndicator$$ ? Math.round(100 * $DvtRatingGaugeEventManager$$) : $DvtRatingGaugePeer$$.$format$($DvtRatingGaugeEventManager$$);
    return $DvtStatusMeterGaugeCircularIndicator$$ ? String($DvtRatingGaugeEventManager$$) + "%" : $DvtRatingGaugeEventManager$$
  };
  $DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$ = ($DvtRatingGaugePeer$$ - $DvtRatingGaugeEventManager$$) / ($dvt$$3$$.max - $dvt$$3$$.min);
    return $dvt$$3$$ = $DvtRatingGaugeDefaults$$ ? $dvt$$3$$ : Math.min(Math.max(0, $dvt$$3$$), 1)
  };
  $DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$), $DvtRatingGaugeDefaults$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$);
    return $DvtRatingGaugeDefaults$$ && $DvtRatingGaugeDefaults$$.shortDesc != $JSCompiler_alias_NULL$$ ? $DvtRatingGaugeDefaults$$.shortDesc : $DvtRatingGaugePeer$$.shortDesc != $JSCompiler_alias_NULL$$ ? $DvtRatingGaugePeer$$.shortDesc : $DvtRatingGaugePeer$$.title.text ? $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtRatingGaugePeer$$.title.text, $DvtRatingGaugeEventManager$$]) : $DvtRatingGaugeEventManager$$
  };
  $DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtLedGaugeDefaults$$ = $JSCompiler_alias_FALSE$$;
    if("on" == $DvtStatusMeterGaugeDefaults$$.metricLabel.rendered || $DvtStatusMeterGaugeIndicator$$ && "off" != $DvtStatusMeterGaugeDefaults$$.metricLabel.rendered) {
      $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtStatusMeterGaugeDefaults$$.value, $DvtRatingGaugeEventManager$$);
      var $DvtLedGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtStatusMeterGaugeDefaults$$.min, $DvtRatingGaugeEventManager$$), $DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtStatusMeterGaugeDefaults$$.max, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
      $DvtRatingGaugeEventManager$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$.metricLabel.style);
      $DvtStatusMeterGaugeDefaults$$ = ($DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.metricLabel.style.$getStyle$("font-size")) ? parseInt($DvtStatusMeterGaugeDefaults$$) : $JSCompiler_alias_NULL$$;
      $DvtStatusMeterGaugeDefaults$$ || ($DvtStatusMeterGaugeDefaults$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtStatusMeterGaugeIndicator$$, $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$], $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$setTextString$($DvtStatusMeterGaugeIndicator$$), $DvtRatingGaugeEventManager$$.$setFontSize$($DvtStatusMeterGaugeDefaults$$));
      "top" == $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y), $DvtRatingGaugeEventManager$$.$alignTop$()) : "middle" == $DvtStatusMeterGaugeCircularIndicator$$ ? $dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2) : "bottom" == $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtRatingGaugeEventManager$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$), 
      $DvtRatingGaugeEventManager$$.$alignBottom$());
      "center" == $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeEventManager$$.$alignCenter$() : "left" == $DvtDialGaugeDefaults$$ ? ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x), $DvtRatingGaugeEventManager$$.$alignLeft$()) : "right" == $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$), $DvtRatingGaugeEventManager$$.$alignRight$());
      $DvtDialGaugeIndicator$$ != $JSCompiler_alias_NULL$$ && $DvtRatingGaugeEventManager$$.$setSolidFill$($DvtDialGaugeIndicator$$);
      $DvtLedGaugeDefaults$$ = $dvt$$3$$.$TextUtils$.$fitText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$)
    }
    return $DvtLedGaugeDefaults$$
  };
  $DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeIndicator$$ = $JSCompiler_alias_FALSE$$;
    if($DvtGaugeStyleUtils$$.$hasTitle$($DvtStatusMeterGaugeCircularIndicator$$)) {
      var $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$.title.text, $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.title.style, $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$), $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeDefaults$$.$clone$();
      $DvtStatusMeterGaugeCircularIndicator$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$);
      var $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$.$getStyle$("font-size"), $DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$ ? parseInt($DvtGaugeKeyboardHandler$$) : $JSCompiler_alias_NULL$$;
      $DvtGaugeKeyboardHandler$$ || ($DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeIndicator$$, 0, 0), $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtStatusMeterGaugeDefaults$$), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeIndicator$$.$getOptimalFontSize$($DvtRatingGaugeDefaults$$), $DvtLedGaugeDefaults$$.$setFontSize$("font-size", $DvtGaugeKeyboardHandler$$.toString()));
      $DvtDialGaugeIndicator$$ != $JSCompiler_alias_NULL$$ && $DvtLedGaugeDefaults$$.$setStyle$("color", $DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$.$setCSSStyle$($DvtLedGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$ = $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeEventManager$$);
      $DvtRatingGaugeEventManager$$ = $dvt$$3$$.$TextUtils$.$getTextHeight$($DvtStatusMeterGaugeCircularIndicator$$);
      "top" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeCircularIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y) : "bottom" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeCircularIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeEventManager$$) : $DvtStatusMeterGaugeCircularIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      $DvtStatusMeterGaugeCircularIndicator$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtStatusMeterGaugeCircularIndicator$$.$alignCenter$();
      $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$)
    }
    return $DvtStatusMeterGaugeIndicator$$
  };
  $DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    for(var $DvtRatingGaugeDefaults$$ = 0, $DvtDialGaugeIndicator$$ = $JSCompiler_alias_NULL$$, $DvtDialGaugeDefaults$$ = 0, $DvtStatusMeterGaugeCircularIndicator$$ = 0;$DvtStatusMeterGaugeCircularIndicator$$ < $dvt$$3$$.length;$DvtStatusMeterGaugeCircularIndicator$$++) {
      $DvtRatingGaugeEventManager$$.$setTextString$($dvt$$3$$[$DvtStatusMeterGaugeCircularIndicator$$]), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$measureDimensions$().$w$, $DvtDialGaugeDefaults$$ > $DvtRatingGaugeDefaults$$ && ($DvtDialGaugeIndicator$$ = $dvt$$3$$[$DvtStatusMeterGaugeCircularIndicator$$], $DvtRatingGaugeDefaults$$ = $DvtDialGaugeDefaults$$)
    }
    $DvtRatingGaugeEventManager$$.$setTextString$($DvtDialGaugeIndicator$$);
    return $DvtRatingGaugeEventManager$$.$getOptimalFontSize$($DvtRatingGaugePeer$$)
  };
  $DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Number($dvt$$3$$.step);
    if($DvtRatingGaugePeer$$ && 0 < $DvtRatingGaugePeer$$) {
      var $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeEventManager$$ - $dvt$$3$$.min) / $DvtRatingGaugePeer$$;
      return 0.5 < $DvtRatingGaugeDefaults$$ ? Math.max(Math.min($dvt$$3$$.max, Math.round($DvtRatingGaugeDefaults$$) * $DvtRatingGaugePeer$$ + $dvt$$3$$.min), $dvt$$3$$.min) : $dvt$$3$$.min
    }
    return $DvtRatingGaugeEventManager$$
  };
  $dvt$$3$$.$LedGauge$ = $JSCompiler_emptyFn$$();
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$LedGauge$, $DvtGauge$$);
  $dvt$$3$$.$LedGauge$.newInstance = function $$dvt$$3$$$$LedGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LedGauge$;
    $DvtDialGaugeDefaults$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    return $DvtDialGaugeDefaults$$
  };
  $dvt$$3$$.$LedGauge$.prototype.Init = function $$dvt$$3$$$$LedGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $dvt$$3$$.$LedGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtLedGaugeDefaults$$
  };
  $dvt$$3$$.$LedGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$LedGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$LedGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$));
    "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
    "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
    this.$Options$.readOnly = $JSCompiler_alias_TRUE$$
  };
  $dvt$$3$$.$LedGauge$.prototype.$Render$ = function $$dvt$$3$$$$LedGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtLedGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtLedGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtLedGaugeDefaults$$.$VERSION_1$ = {type:"circle"};
  var $DvtLedGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtLedGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
  $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
  $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
  $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
  $DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$.__layout.outerGap, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ && (0 <= $DvtDialGaugeDefaults$$.size || 1 > $DvtDialGaugeDefaults$$.size) ? Math.sqrt($DvtDialGaugeDefaults$$.size) : 1;
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$ + ($DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$) * (1 - $DvtStatusMeterGaugeIndicator$$) / 2, $DvtStatusMeterGaugeCircularIndicator$$ + ($DvtDialGaugeIndicator$$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$) * (1 - $DvtStatusMeterGaugeIndicator$$) / 2, ($DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$) * $DvtStatusMeterGaugeIndicator$$, ($DvtDialGaugeIndicator$$ - 
      2 * $DvtStatusMeterGaugeCircularIndicator$$) * $DvtStatusMeterGaugeIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtLedGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtStatusMeterGaugeCircularIndicator$$ = $JSCompiler_alias_FALSE$$;
      $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$));
      $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeDefaults$$) && ($DvtStatusMeterGaugeCircularIndicator$$ = "middle", $DvtStatusMeterGaugeIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered && ($DvtStatusMeterGaugeIndicator$$.y += 0.6 * $DvtStatusMeterGaugeIndicator$$.$h$, $DvtStatusMeterGaugeIndicator$$.$h$ *= 0.4, $DvtStatusMeterGaugeCircularIndicator$$ = "top"), $DvtStatusMeterGaugeCircularIndicator$$ = 
      !$dvt$$3$$.$Agent$.$isHighContrast$() && $DvtDialGaugeDefaults$$.title.style.$getStyle$("color") != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$, $JSCompiler_alias_NULL$$, $DvtStatusMeterGaugeCircularIndicator$$) : $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$));
      "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered && ($DvtDialGaugeIndicator$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = "middle", $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtDialGaugeIndicator$$.$h$ *= 0.55, $DvtStatusMeterGaugeIndicator$$ = "bottom"), !$dvt$$3$$.$Agent$.$isHighContrast$() && $DvtDialGaugeDefaults$$.metricLabel.style.$getStyle$("color") != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, 
      $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, $JSCompiler_alias_NULL$$, "center", $DvtStatusMeterGaugeIndicator$$) : $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, "center", $DvtStatusMeterGaugeIndicator$$))
    }else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$))
    }
  };
  $DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$.type, $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $DvtLedGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtGaugeEventManager$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtGaugeAutomation$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$);
    $DvtLedGaugeRenderer$$.$_cache$ || ($DvtLedGaugeRenderer$$.$_cache$ = new $dvt$$3$$.$Cache$(50));
    var $DvtGauge$$ = Math.min($DvtRatingGaugeDefaults$$.$w$ / 100, $DvtRatingGaugeDefaults$$.$h$ / 100);
    "rectangle" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Rect$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) : "diamond" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Polygon$($DvtDialGaugeIndicator$$, [$DvtLedGaugeDefaults$$ - $DvtGaugeEventManager$$, $DvtGaugeKeyboardHandler$$, $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ - 
    $DvtGaugeEventManager$$, $DvtLedGaugeDefaults$$ + $DvtGaugeEventManager$$, $DvtGaugeKeyboardHandler$$, $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$ + $DvtGaugeEventManager$$]) : "circle" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Circle$($DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeEventManager$$) : ("star" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = $DvtGaugeAutomation$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : 
    $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = $DvtGaugeAutomation$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtLedGaugeDefaults$$ = $DvtGaugeAutomation$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $DvtStatusMeterGaugeCircularIndicator$$ ? 
    $DvtLedGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($DvtLedGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_cache$.get($DvtStatusMeterGaugeCircularIndicator$$), $DvtLedGaugeDefaults$$ || ($DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Path$($DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtLedGaugeDefaults$$ = $dvt$$3$$.$DisplayableUtils$.$getDimForced$($DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$), $DvtGaugeKeyboardHandler$$ = 100 / Math.max($DvtLedGaugeDefaults$$.$w$, 
    $DvtLedGaugeDefaults$$.$h$), $DvtLedGaugeDefaults$$ = $dvt$$3$$.$PathUtils$.$transformPath$($DvtStatusMeterGaugeCircularIndicator$$, -$DvtGaugeKeyboardHandler$$ * ($DvtLedGaugeDefaults$$.x + $DvtLedGaugeDefaults$$.$w$ / 2), -$DvtGaugeKeyboardHandler$$ * ($DvtLedGaugeDefaults$$.y + $DvtLedGaugeDefaults$$.$h$ / 2), $DvtGaugeKeyboardHandler$$, $DvtGaugeKeyboardHandler$$), $DvtLedGaugeRenderer$$.$_cache$.put($DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeDefaults$$))), !$DvtGaugeAutomation$$ && 
    ("triangle" == $DvtStatusMeterGaugeCircularIndicator$$ || "arrow" == $DvtStatusMeterGaugeCircularIndicator$$) || "star" == $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtLedGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtLedGaugeDefaults$$, $DvtGauge$$, $DvtGauge$$), $DvtLedGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtLedGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtLedGaugeDefaults$$ = 
    new $dvt$$3$$.$Polygon$($DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$)) : ($DvtLedGaugeDefaults$$ = $dvt$$3$$.$PathUtils$.$transformPath$($DvtLedGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtGauge$$, $DvtGauge$$), $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Path$($DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$)));
    $DvtGaugeAutomation$$ || "none" == $DvtDialGaugeDefaults$$.visualEffects ? $DvtLedGaugeDefaults$$.$setSolidFill$($DvtStatusMeterGaugeIndicator$$) : ($DvtDialGaugeIndicator$$ = [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeIndicator$$, -0.09, 0.04), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtStatusMeterGaugeIndicator$$, -0.04, -0.05)], $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0, $DvtLedGaugeDefaults$$.$setFill$(new $dvt$$3$$.$LinearGradientFill$("arrow" == 
    $DvtStatusMeterGaugeCircularIndicator$$ || "star" == $DvtStatusMeterGaugeCircularIndicator$$ || "triangle" == $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeIndicator$$ - 90 : 270, $DvtDialGaugeIndicator$$, [1, 1], [0, 1])));
    $DvtStatusMeterGaugeDefaults$$ && $DvtLedGaugeDefaults$$.$setSolidStroke$($DvtStatusMeterGaugeDefaults$$);
    if(($DvtStatusMeterGaugeIndicator$$ = $DvtGaugeAutomation$$ ? $DvtDialGaugeDefaults$$.rotation + 90 : $DvtDialGaugeDefaults$$.rotation) && ("arrow" == $DvtStatusMeterGaugeCircularIndicator$$ || "triangle" == $DvtStatusMeterGaugeCircularIndicator$$ || $DvtLedGaugeDefaults$$ instanceof $dvt$$3$$.$Path$ && "human" != $DvtStatusMeterGaugeCircularIndicator$$)) {
      $DvtLedGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtLedGaugeDefaults$$, $DvtRatingGaugeDefaults$$)
    }
    $DvtRatingGaugePeer$$.$addChild$($DvtLedGaugeDefaults$$)
  };
  $DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugeEventManager$$.$addChild$($DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtDialGaugeDefaults$$ && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$Matrix$;
    $DvtDialGaugeDefaults$$.rotate(Math.PI * $DvtRatingGaugePeer$$ / 180);
    $DvtRatingGaugeDefaults$$.$setMatrix$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getDimensions$();
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$.x + $DvtDialGaugeIndicator$$.$w$ / 2 - ($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2);
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$.y + $DvtDialGaugeIndicator$$.$h$ / 2 - ($DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Matrix$;
    $DvtRatingGaugePeer$$.translate($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$.$setMatrix$($DvtRatingGaugePeer$$);
    return $DvtRatingGaugeEventManager$$
  };
  $DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type;
    "none" != $DvtRatingGaugeDefaults$$.visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($dvt$$3$$) && ("circle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayCircle$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "diamond" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "triangle" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($dvt$$3$$, 
    $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : "arrow" == $DvtDialGaugeIndicator$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayArrow$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) : $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$))
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = 0.04 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = 0.04 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Rect$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$)
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = 0.05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = 0.05 * $DvtRatingGaugeDefaults$$.$h$, $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeDefaults$$.x + $DvtDialGaugeDefaults$$.$w$ / 2;
    $DvtDialGaugeIndicator$$ = $DvtDialGaugeDefaults$$.y + $DvtDialGaugeDefaults$$.$h$ / 2;
    $DvtDialGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$.$h$) / 2;
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), [$DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ + $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$ + $DvtDialGaugeDefaults$$]);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$)
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = 0.05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = 0.05 * $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 
    2 * $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + 
    $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LinearGradientFill$($DvtStatusMeterGaugeCircularIndicator$$ ? $DvtDialGaugeDefaults$$ - 90 : 360 - $DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$)
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = 0.05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = 0.05 * $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 
    2 * $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtDialGaugeIndicator$$.$w$ / 100, $DvtDialGaugeIndicator$$.$h$ / 100), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.scale($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PolygonUtils$.translate($DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 
    2, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Polygon$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$()) && 0 == $DvtDialGaugeDefaults$$.rotation % 90 ? $DvtDialGaugeDefaults$$.rotation : 0;
    $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$LinearGradientFill$($DvtStatusMeterGaugeCircularIndicator$$ ? $DvtDialGaugeDefaults$$ - 90 : 360 - $DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
    $DvtRatingGaugeDefaults$$.$setFill$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtLedGaugeRenderer$$.$_rotate$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$)
  };
  $DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = 0.05 * $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ = 0.05 * $DvtRatingGaugeDefaults$$.$h$;
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$.$w$ - 2 * $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$h$ - 2 * $DvtDialGaugeDefaults$$);
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) / 2, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Circle$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeIndicator$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    var $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$ - 0.6 * $DvtStatusMeterGaugeCircularIndicator$$, 1.5 * $DvtStatusMeterGaugeCircularIndicator$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtStatusMeterGaugeIndicator$$.$setFill$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeIndicator$$ = 0.6 * $DvtStatusMeterGaugeCircularIndicator$$;
    $DvtStatusMeterGaugeCircularIndicator$$ *= 0.4;
    $DvtDialGaugeDefaults$$ -= 0.3 * $DvtStatusMeterGaugeCircularIndicator$$;
    $DvtRatingGaugeEventManager$$ = new $dvt$$3$$.$Oval$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeEventManager$$);
    $DvtRatingGaugePeer$$ = new $dvt$$3$$.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, [$DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$]);
    $DvtRatingGaugeEventManager$$.$setFill$($DvtRatingGaugePeer$$)
  };
  $DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.type, $DvtRatingGaugeDefaults$$ = 0 == $DvtRatingGaugeDefaults$$.rotation % 90 ? $DvtRatingGaugeDefaults$$.rotation : 0, $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugePeer$$.$w$, $DvtRatingGaugePeer$$.$h$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2 - $DvtDialGaugeDefaults$$ / 2, $DvtStatusMeterGaugeIndicator$$ = 
    $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2 - $DvtDialGaugeDefaults$$ / 2, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$;
    "triangle" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.25 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.05 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, 
    $DvtStatusMeterGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : 180 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.05 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$) : 270 == $DvtRatingGaugeDefaults$$ && ($DvtStatusMeterGaugeCircularIndicator$$ += 
    0.25 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : "arrow" == $DvtDialGaugeIndicator$$ ? 0 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$, 
    $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : 90 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.05 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.28 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : 180 == $DvtRatingGaugeDefaults$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 
    0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : 270 == $DvtRatingGaugeDefaults$$ && ($DvtStatusMeterGaugeCircularIndicator$$ += 0.23 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.2 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.28 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : "star" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 
    0.25 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.25 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.5 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.4 * $DvtDialGaugeDefaults$$) : "diamond" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 
    0.3 * $DvtDialGaugeDefaults$$) : "rectangle" == $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeCircularIndicator$$ += 0.1 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.1 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 0.2 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.2 * $DvtDialGaugeDefaults$$) : ($DvtStatusMeterGaugeCircularIndicator$$ += 0.15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$ += 0.15 * $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$ -= 
    0.3 * $DvtDialGaugeDefaults$$, $DvtLedGaugeDefaults$$ -= 0.3 * $DvtDialGaugeDefaults$$);
    return new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$)
  };
  $dvt$$3$$.$StatusMeterGauge$ = $JSCompiler_emptyFn$$();
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$StatusMeterGauge$, $DvtGauge$$);
  $dvt$$3$$.$StatusMeterGauge$.newInstance = function $$dvt$$3$$$$StatusMeterGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$StatusMeterGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.Init = function $$dvt$$3$$$$StatusMeterGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$.$StatusMeterGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtStatusMeterGaugeDefaults$$;
    this.$__axisInfo$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$StatusMeterGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$StatusMeterGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$))
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$Render$ = function $$dvt$$3$$$$StatusMeterGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtStatusMeterGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$3$$$$StatusMeterGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for(var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$.$getAnimationParams$();
      "horizontal" == this.$Options$.orientation ? $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeCircularIndicator$$[0], $DvtStatusMeterGaugeCircularIndicator$$[0], $DvtStatusMeterGaugeCircularIndicator$$[2], $DvtStatusMeterGaugeCircularIndicator$$[3]]) : "vertical" == this.$Options$.orientation ? $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeCircularIndicator$$[0], $DvtStatusMeterGaugeCircularIndicator$$[1], $DvtStatusMeterGaugeCircularIndicator$$[3], $DvtStatusMeterGaugeCircularIndicator$$[3]]) : 
      "circular" == this.$Options$.orientation && $DvtDialGaugeDefaults$$.$setAnimationParams$([$DvtStatusMeterGaugeCircularIndicator$$[0], $DvtStatusMeterGaugeCircularIndicator$$[1], 0, $DvtStatusMeterGaugeCircularIndicator$$[3], $DvtStatusMeterGaugeCircularIndicator$$[4]]);
      var $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$getAnimationParams$, $DvtDialGaugeDefaults$$.$setAnimationParams$, $DvtStatusMeterGaugeCircularIndicator$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$3$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, 0.7)
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeIndicator$$)
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$)
  };
  $dvt$$3$$.$StatusMeterGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$StatusMeterGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$());
    if("horizontal" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugeEventManager$$)
    }
    if("vertical" == $DvtRatingGaugeDefaults$$.orientation) {
      return this.$__axisInfo$.$getBoundedValueAt$($DvtRatingGaugePeer$$)
    }
    if("circular" == $DvtRatingGaugeDefaults$$.orientation) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.angleExtent, $DvtStatusMeterGaugeCircularIndicator$$ = Math.atan2($DvtRatingGaugePeer$$ - this.$cy$, $DvtRatingGaugeEventManager$$ - this.$cx$), $DvtDialGaugeIndicator$$ = $DvtDialGaugeIndicator$$ ? 180 - ($dvt$$3$$.$Math$.$radsToDegrees$($DvtStatusMeterGaugeCircularIndicator$$) - $DvtRatingGaugeDefaults$$.startAngle) : $dvt$$3$$.$Math$.$radsToDegrees$($DvtStatusMeterGaugeCircularIndicator$$) - (360 - $DvtRatingGaugeDefaults$$.startAngle), 
      $DvtDialGaugeIndicator$$ = ($DvtDialGaugeIndicator$$ + 720) % 360, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$ / $DvtDialGaugeDefaults$$ * ($DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$) + $DvtStatusMeterGaugeCircularIndicator$$;
      $DvtDialGaugeIndicator$$ > $DvtDialGaugeDefaults$$ && ($DvtStatusMeterGaugeCircularIndicator$$ = 0.5 < ($DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$) / (360 - $DvtDialGaugeDefaults$$) ? 0 : $DvtRatingGaugeDefaults$$);
      return $DvtStatusMeterGaugeCircularIndicator$$
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtStatusMeterGaugeDefaults$$.$SKIN_ALTA$ = {color:"#393737", metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, plotArea:{color:"#E4E8EA"}};
  $DvtStatusMeterGaugeDefaults$$.$VERSION_1$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
  var $DvtStatusMeterGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$.__layout.outerGap;
      $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$, $DvtDialGaugeIndicator$$ - 2 * $DvtStatusMeterGaugeCircularIndicator$$);
      "horizontal" == $DvtDialGaugeDefaults$$.orientation || "vertical" == $DvtDialGaugeDefaults$$.orientation ? ($DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeDefaults$$) && $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : "circular" == $DvtDialGaugeDefaults$$.orientation && 
      $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)
    }else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$))
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$clone$(), $DvtStatusMeterGaugeCircularIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeIndicator$$ = 0, $DvtStatusMeterGaugeDefaults$$ = $JSCompiler_alias_NULL$$, $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.value, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.innerRadius, $DvtGaugeEventManager$$ = 
    $DvtDialGaugeIndicator$$.thresholds, $DvtGaugeDefaults$$, $DvtGaugeAutomation$$ = $JSCompiler_alias_NULL$$, $DvtGauge$$ = $dvt$$3$$.$Math$.$TWO_PI$ - $dvt$$3$$.$Math$.$degreesToRads$($DvtDialGaugeIndicator$$.startAngle), $DvtGaugeDataUtils$$ = $dvt$$3$$.$Math$.$degreesToRads$($DvtDialGaugeIndicator$$.angleExtent), $DvtLedGaugeRenderer$$ = ($DvtGauge$$ + $DvtGaugeDataUtils$$) % (2 * Math.PI);
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtRatingGaugeDefaults$$.$w$ / 2;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtRatingGaugeDefaults$$.$h$ / 2;
    $DvtGaugeDataUtils$$ != 2 * Math.PI && ($DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($DvtRatingGaugeEventManager$$, $DvtGaugeKeyboardHandler$$, $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtLedGaugeRenderer$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$), $DvtGaugeAutomation$$ = $DvtRatingGaugeEventManager$$.$maxInnerDiameter$);
    $DvtGaugeDefaults$$ = $DvtGaugeDefaults$$ ? $DvtGaugeDefaults$$ : Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$);
    var $DvtStatusMeterGaugeCircularIndicator$$ = 0.5 * $DvtGaugeDefaults$$ * $DvtGaugeKeyboardHandler$$, $DvtLedGaugeRenderer$$ = 0.5 * $DvtGaugeDefaults$$, $DvtRatingGaugeRenderer$$ = $DvtDialGaugeIndicator$$.indicatorSize;
    if($DvtRatingGaugeRenderer$$ && 1 < $DvtRatingGaugeRenderer$$) {
      var $DvtDialGaugeRenderer$$ = (1 - 1 / $DvtRatingGaugeRenderer$$) / 2 * ($DvtLedGaugeRenderer$$ - $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ + $DvtDialGaugeRenderer$$, $DvtLedGaugeRenderer$$ = $DvtLedGaugeRenderer$$ - $DvtDialGaugeRenderer$$
    }
    $DvtDialGaugeRenderer$$ = "middle";
    $DvtStatusMeterGaugeDefaults$$ || ($DvtGaugeAutomation$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$) * $DvtGaugeKeyboardHandler$$, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2 - $DvtGaugeAutomation$$ * (3 / 7), $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2 - $DvtGaugeAutomation$$ * (2.5 / 7), $DvtGaugeAutomation$$ * (6 / 7), $DvtGaugeAutomation$$ * (5 / 7)));
    var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $JSCompiler_alias_FALSE$$;
    if($DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$)) {
      var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "middle", $thresholdColor_titleSpace$$3$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeDefaults$$.x, $DvtStatusMeterGaugeDefaults$$.y, $DvtStatusMeterGaugeDefaults$$.$w$, $DvtStatusMeterGaugeDefaults$$.$h$);
      "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered && ($thresholdColor_titleSpace$$3$$.y += 0.6 * $thresholdColor_titleSpace$$3$$.$h$, $thresholdColor_titleSpace$$3$$.$h$ *= 0.4, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "top");
      if(($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $DvtGaugeRenderer$$.$renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $thresholdColor_titleSpace$$3$$, $JSCompiler_alias_NULL$$, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$)) && "off" != $DvtDialGaugeIndicator$$.metricLabel.rendered) {
        $DvtStatusMeterGaugeDefaults$$.$h$ *= 0.55, $DvtDialGaugeRenderer$$ = "bottom"
      }
    }
    $DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeDefaults$$, $JSCompiler_alias_NULL$$, "center", $DvtDialGaugeRenderer$$, $JSCompiler_alias_TRUE$$);
    $DvtDialGaugeRenderer$$ = $DvtGauge$$;
    $DvtStatusMeterGaugeIndicator$$ *= $DvtGaugeDataUtils$$;
    $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$);
    if($DvtGaugeEventManager$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = 0;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ < $DvtGaugeEventManager$$.length;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$++) {
        var $thresholdColor_titleSpace$$3$$ = $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $DvtGaugeEventManager$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$], $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeEventManager$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max < $DvtDialGaugeIndicator$$.max ? $DvtGaugeEventManager$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max : 
        $DvtDialGaugeIndicator$$.max, $min$$14_thresholdborderColor$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ ? $DvtDialGaugeIndicator$$.min : $DvtGaugeEventManager$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ - 1].max, $DvtDialGaugeRenderer$$ = $DvtGauge$$ + $DvtGaugeDataUtils$$ * $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $min$$14_thresholdborderColor$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, 
        $min$$14_thresholdborderColor$$, $DvtStatusMeterGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeDataUtils$$, $min$$14_thresholdborderColor$$ = $DvtGaugeEventManager$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].borderColor;
        $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeRenderer$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeRenderer$$, $thresholdColor_titleSpace$$3$$, $JSCompiler_alias_TRUE$$, $min$$14_thresholdborderColor$$ ? $min$$14_thresholdborderColor$$ : $DvtStatusMeterGaugeDefaults$$)
      }
    }else {
      "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" != $DvtDialGaugeIndicator$$.thresholdDisplay && ($DvtGaugeEventManager$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeRenderer$$, $DvtGaugeEventManager$$, $JSCompiler_alias_TRUE$$, $DvtStatusMeterGaugeDefaults$$))
    }
    $DvtStatusMeterGaugeCircularIndicator$$ = 0.5 * $DvtGaugeDefaults$$ * $DvtGaugeKeyboardHandler$$;
    $DvtLedGaugeRenderer$$ = 0.5 * $DvtGaugeDefaults$$;
    $DvtRatingGaugeRenderer$$ && 1 > $DvtRatingGaugeRenderer$$ && ($DvtGaugeKeyboardHandler$$ = (1 - $DvtRatingGaugeRenderer$$) / 2 * ($DvtLedGaugeRenderer$$ - $DvtStatusMeterGaugeCircularIndicator$$), $DvtStatusMeterGaugeCircularIndicator$$ += $DvtGaugeKeyboardHandler$$, $DvtLedGaugeRenderer$$ -= $DvtGaugeKeyboardHandler$$);
    $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtLedGaugeDefaults$$);
    $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtGauge$$, $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeDataUtils$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeRenderer$$, $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$), $JSCompiler_alias_FALSE$$);
    if($DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for($DvtGaugeDefaults$$ = 0;$DvtGaugeDefaults$$ < $DvtGaugeKeyboardHandler$$.length;$DvtGaugeDefaults$$++) {
        $DvtGaugeEventManager$$ = $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].color ? $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].color : "black", $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].lineWidth ? $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].lineWidth : 2, $DvtLedGaugeRenderer$$ = $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].lineStyle, $DvtLedGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$[$DvtGaugeDefaults$$].value, $DvtLedGaugeDefaults$$ = 
        $DvtGauge$$ + $DvtGaugeRenderer$$.$getFillPercentage$($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$.min, $DvtLedGaugeDefaults$$) * $DvtGaugeDataUtils$$, $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeRenderer$$)
      }
    }
    $DvtDialGaugeIndicator$$.center.renderer && $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtGaugeAutomation$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtStatusMeterGaugeDefaults$$ = {layout:{}};
    $DvtStatusMeterGaugeDefaults$$.layout.gapRatio = 0;
    $DvtStatusMeterGaugeDefaults$$.timeAxisType = "disabled";
    $DvtStatusMeterGaugeDefaults$$.position = $DvtStatusMeterGaugeCircularIndicator$$ ? "left" : "bottom";
    $DvtStatusMeterGaugeDefaults$$.min = $DvtDialGaugeIndicator$$.min;
    $DvtStatusMeterGaugeDefaults$$.max = $DvtDialGaugeIndicator$$.max;
    $DvtStatusMeterGaugeDefaults$$.dataMin = $DvtDialGaugeIndicator$$.min;
    $DvtStatusMeterGaugeDefaults$$.dataMax = $DvtDialGaugeIndicator$$.max;
    $DvtStatusMeterGaugeDefaults$$.tickLabel = {rendered:"off"};
    $DvtStatusMeterGaugeDefaults$$ = $dvt$$3$$.$AxisInfo$.newInstance($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__axisInfo$ = $DvtStatusMeterGaugeDefaults$$;
    var $DvtLedGaugeDefaults$$ = 0;
    0 >= $DvtDialGaugeIndicator$$.max ? $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.max : 0 <= $DvtDialGaugeIndicator$$.min && ($DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.min);
    var $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$.$getCoordAt$($DvtLedGaugeDefaults$$);
    "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && !("auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay) && ($DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min));
    var $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.value), $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? Math.max($DvtRatingGaugeDefaults$$.y, Math.min($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$, $DvtGaugeEventManager$$)) : Math.max($DvtRatingGaugeDefaults$$.x, Math.min($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeEventManager$$)), $DvtGaugeAutomation$$ = $DvtDialGaugeIndicator$$.indicatorSize, 
    $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtGaugeRenderer$$, $DvtLedGaugeRenderer$$, $DvtRatingGaugeRenderer$$, $DvtDialGaugeRenderer$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $DvtGaugeAutomation$$ ? 1 : $DvtGaugeAutomation$$;
    $DvtGaugeRenderer$$ = 1 < $DvtGaugeAutomation$$ ? 1 : $DvtGaugeAutomation$$;
    $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtLedGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtGaugeRenderer$$) / 2 * $DvtRatingGaugeDefaults$$.$w$ + 0.5, $DvtGauge$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + $DvtGaugeRenderer$$) / 2 - 0.5, $DvtGaugeRenderer$$ = $DvtGaugeKeyboardHandler$$ - 0.5, $DvtGaugeDataUtils$$ = $DvtGaugeEventManager$$ + 0.5, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $DvtRatingGaugeDefaults$$.$w$, 
    $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y, $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$) : ($DvtLedGaugeDefaults$$ = $DvtDialGaugeDefaults$$ ? $DvtGaugeKeyboardHandler$$ - 0.5 : $DvtGaugeKeyboardHandler$$ + 0.5, $DvtGauge$$ = $DvtDialGaugeDefaults$$ ? $DvtGaugeEventManager$$ + 0.5 : $DvtGaugeEventManager$$ - 0.5, 
    $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtGaugeRenderer$$) / 2 * $DvtRatingGaugeDefaults$$.$h$ + 0.5, $DvtGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + $DvtGaugeRenderer$$) / 2 - 0.5, $DvtLedGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtDialGaugeRenderer$$ = $DvtRatingGaugeDefaults$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $DvtRatingGaugeDefaults$$.$h$, 
    $drawnPlotSize_plotY2$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
    $DvtGaugeAutomation$$ = $JSCompiler_alias_TRUE$$;
    $DvtGaugeEventManager$$ == $DvtGaugeKeyboardHandler$$ && ($DvtStatusMeterGaugeCircularIndicator$$ ? $DvtGaugeDataUtils$$ = $DvtGaugeRenderer$$ : $DvtLedGaugeDefaults$$ = $DvtGauge$$, $DvtGaugeAutomation$$ = $JSCompiler_alias_FALSE$$);
    var $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($DvtRatingGaugeEventManager$$), $thresholds$$4_value$$138$$ = $DvtDialGaugeIndicator$$.thresholds, $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? 0 : 270;
    if($thresholds$$4_value$$138$$ && "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && "all" == $DvtDialGaugeIndicator$$.thresholdDisplay) {
      for($DvtGaugeKeyboardHandler$$ = $thresholds$$4_value$$138$$.length - 1;0 <= $DvtGaugeKeyboardHandler$$;$DvtGaugeKeyboardHandler$$--) {
        var $currentThresholdIndex$$1$$ = $DvtGaugeKeyboardHandler$$, $plotArea$$3_referenceLineSize$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtLedGaugeRenderer$$, $DvtRatingGaugeRenderer$$, $DvtDialGaugeRenderer$$, $drawnPlotSize_plotY2$$), $cp$$2_thresholdBorderColor$$ = new $dvt$$3$$.$ClipPath$("pacp" + $DvtRatingGaugeEventManager$$.getId());
        if($DvtGaugeKeyboardHandler$$ == $thresholds$$4_value$$138$$.length - 1) {
          !$DvtStatusMeterGaugeCircularIndicator$$ && $DvtDialGaugeDefaults$$ ? $cp$$2_thresholdBorderColor$$.$addRect$($DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max) + 1, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0) : $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, $DvtRatingGaugeDefaults$$.$w$ + 2, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0)
        }else {
          if($DvtStatusMeterGaugeCircularIndicator$$) {
            $cp$$2_thresholdBorderColor$$.$addRect$(0, $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtRatingGaugeDefaults$$.$w$ + 2, 1 * ($DvtDialGaugeIndicator$$.max - $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$h$, 0, 0)
          }else {
            if($DvtDialGaugeDefaults$$) {
              var $thresholdMax$$ = $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max == $JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max;
              $cp$$2_thresholdBorderColor$$.$addRect$($DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 0, 1 * ($DvtDialGaugeIndicator$$.max - $thresholdMax$$) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0)
            }else {
              $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, 1 * ($thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$].max - $DvtDialGaugeIndicator$$.min) / Math.abs($DvtDialGaugeIndicator$$.min - $DvtDialGaugeIndicator$$.max) * $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$ + 2, 0, 0)
            }
          }
        }
        $plotArea$$3_referenceLineSize$$.$setClipPath$($cp$$2_thresholdBorderColor$$);
        if($DvtDialGaugeDefaults$$ || $DvtStatusMeterGaugeCircularIndicator$$) {
          $currentThresholdIndex$$1$$ = $thresholds$$4_value$$138$$.length - 1 - $DvtGaugeKeyboardHandler$$
        }
        $plotArea$$3_referenceLineSize$$.$setSolidFill$($DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
        $cp$$2_thresholdBorderColor$$ = $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$].borderColor;
        $plotArea$$3_referenceLineSize$$.$setSolidStroke$($cp$$2_thresholdBorderColor$$ ? $cp$$2_thresholdBorderColor$$ : $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$);
        $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$3_referenceLineSize$$, $DvtGaugeStyleUtils$$.$getThresholdColor$($DvtRatingGaugeEventManager$$, $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $DvtGaugeEventManager$$)
      }
    }else {
      "off" != $DvtDialGaugeIndicator$$.plotArea.rendered && (!("auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay) && "all" != $DvtDialGaugeIndicator$$.thresholdDisplay) && ($plotArea$$3_referenceLineSize$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtLedGaugeRenderer$$, $DvtRatingGaugeRenderer$$, $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), 
      $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min)) : $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.min), $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($DvtDialGaugeIndicator$$.max), $DvtDialGaugeRenderer$$, $drawnPlotSize_plotY2$$), $DvtGaugeKeyboardHandler$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($DvtRatingGaugeEventManager$$), 
      $plotArea$$3_referenceLineSize$$.$setSolidFill$($DvtGaugeKeyboardHandler$$), $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$), $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $plotArea$$3_referenceLineSize$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeEventManager$$))
    }
    $DvtGaugeKeyboardHandler$$ = new $DvtStatusMeterGaugeIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtLedGaugeDefaults$$, $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtGaugeRenderer$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtGaugeKeyboardHandler$$);
    $DvtDialGaugeDefaults$$ = $DvtGaugeStyleUtils$$.$getColor$($DvtRatingGaugeEventManager$$);
    !$DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) && "none" != $DvtDialGaugeIndicator$$.visualEffects ? ($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeDefaults$$, -0.09, 0.04), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeDefaults$$, -0.04, -0.05)], $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = new $dvt$$3$$.$LinearGradientFill$($DvtGaugeEventManager$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, 
    [1, 1], [0, 1]), $DvtGaugeKeyboardHandler$$.$setFill$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$)) : $DvtGaugeKeyboardHandler$$.$setSolidFill$($DvtDialGaugeDefaults$$);
    $borderColor$$23_refColor_shadow$$2_stroke$$57$$ && $DvtGaugeKeyboardHandler$$.$setSolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$);
    $DvtGaugeAutomation$$ && $DvtRatingGaugePeer$$.$addChild$($DvtGaugeKeyboardHandler$$);
    $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtLedGaugeDefaults$$, $DvtGauge$$, $DvtGaugeDataUtils$$, $DvtGaugeRenderer$$);
    $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeAutomation$$, $DvtGaugeEventManager$$);
    if($DvtGaugeEventManager$$ = $DvtDialGaugeIndicator$$.referenceLines) {
      for($DvtGaugeKeyboardHandler$$ = 0;$DvtGaugeKeyboardHandler$$ < $DvtGaugeEventManager$$.length;$DvtGaugeKeyboardHandler$$++) {
        $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].color ? $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].color : "white", $thresholds$$4_value$$138$$ = $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].value, $DvtGaugeAutomation$$ = $DvtDialGaugeIndicator$$.indicatorSize, $DvtStatusMeterGaugeCircularIndicator$$ ? ($plotArea$$3_referenceLineSize$$ = ((1 - $DvtGaugeAutomation$$) / 2 + $DvtGaugeAutomation$$) * $DvtRatingGaugeDefaults$$.$w$, 
        $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtRatingGaugeDefaults$$.x + (1 - $DvtGaugeAutomation$$) / 4 * $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeAutomation$$ = $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($thresholds$$4_value$$138$$), $DvtGaugeAutomation$$ = new $dvt$$3$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtGaugeAutomation$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ + 
        $plotArea$$3_referenceLineSize$$, $DvtGaugeAutomation$$)) : ($plotArea$$3_referenceLineSize$$ = ((1 - $DvtGaugeAutomation$$) / 2 + $DvtGaugeAutomation$$) * $DvtRatingGaugeDefaults$$.$h$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$ = $DvtStatusMeterGaugeDefaults$$.$getUnboundedCoordAt$($thresholds$$4_value$$138$$), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$.y + (1 - $DvtGaugeAutomation$$) / 4 * $DvtRatingGaugeDefaults$$.$h$, $DvtGaugeAutomation$$ = new $dvt$$3$$.$Line$($DvtRatingGaugeEventManager$$.$getCtx$(), 
        $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtGaugeAutomation$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$11$$, $DvtGaugeAutomation$$ + $plotArea$$3_referenceLineSize$$)), $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = new $dvt$$3$$.$SolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$, 1, $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].lineWidth ? $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].lineWidth : 2), $DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].lineStyle && 
        $borderColor$$23_refColor_shadow$$2_stroke$$57$$.$setStyle$($dvt$$3$$.$Stroke$.$convertTypeString$($DvtGaugeEventManager$$[$DvtGaugeKeyboardHandler$$].lineStyle)), $DvtGaugeAutomation$$.$setStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$), $DvtRatingGaugePeer$$.$addChild$($DvtGaugeAutomation$$), !$dvt$$3$$.$Agent$.$isPlatformIE$() && "none" != $DvtDialGaugeIndicator$$.visualEffects && ($borderColor$$23_refColor_shadow$$2_stroke$$57$$ = new $dvt$$3$$.$Shadow$($dvt$$3$$.$ColorUtils$.$makeRGBA$(0, 
        0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$), $DvtGaugeAutomation$$.$addDrawEffect$($borderColor$$23_refColor_shadow$$2_stroke$$57$$))
      }
    }
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.metricLabel.position;
    "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered && !$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeIndicator$$) && !$DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, {$x1$:$DvtLedGaugeDefaults$$, $x2$:$DvtGauge$$, $y1$:$DvtGaugeDataUtils$$, $y2$:$DvtGaugeRenderer$$}, 
    {$x1$:$DvtLedGaugeRenderer$$, $x2$:$DvtRatingGaugeRenderer$$, $y1$:$DvtDialGaugeRenderer$$, $y2$:$drawnPlotSize_plotY2$$}) : $DvtGaugeStyleUtils$$.$hasTitle$($DvtDialGaugeIndicator$$) && $DvtStatusMeterGaugeRenderer$$.$_renderTitle$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$) {
    var $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeDefaults$$ = Math.min($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtRatingGaugeDefaults$$ - $DvtDialGaugeIndicator$$);
    $DvtDialGaugeDefaults$$ = Math.abs($DvtStatusMeterGaugeCircularIndicator$$ - $DvtDialGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtDialGaugeIndicator$$ = "vertical" == $DvtStatusMeterGaugeCircularIndicator$$.orientation ? $DvtRatingGaugeDefaults$$ : $DvtDialGaugeDefaults$$;
    $DvtRatingGaugeEventManager$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? "25%" : "15%";
    $DvtStatusMeterGaugeIndicator$$ = $dvt$$3$$.$PathUtils$.$rectangleWithBorderRadius$($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeDefaults$$, "auto" != $DvtStatusMeterGaugeCircularIndicator$$.plotArea.borderRadius ? $DvtStatusMeterGaugeCircularIndicator$$.plotArea.borderRadius : $DvtStatusMeterGaugeCircularIndicator$$.borderRadius, $DvtDialGaugeIndicator$$, $DvtRatingGaugeEventManager$$);
    return new $dvt$$3$$.$Path$($DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    "none" != $DvtRatingGaugeEventManager$$.$getOptions$().visualEffects && $DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) && ($DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$), $DvtRatingGaugeDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), 
    $DvtDialGaugeIndicator$$ && $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$))
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    $DvtRatingGaugeDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$);
    "none" != $DvtStatusMeterGaugeCircularIndicator$$.visualEffects && ($DvtGaugeDefaults$$.$isSkyrosSkin$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeEventManager$$ = [$dvt$$3$$.$ColorUtils$.$getDarker$($DvtDialGaugeIndicator$$, 0.9), $DvtDialGaugeIndicator$$, $dvt$$3$$.$ColorUtils$.$getBrighter$($DvtDialGaugeIndicator$$)], $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, $DvtRatingGaugeEventManager$$, [1, 1, 1], [0, 0.04, 0.73])) : ($DvtRatingGaugeEventManager$$ = 
    [$dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -0.04, -0.05), $dvt$$3$$.$ColorUtils$.$adjustHSL$($DvtDialGaugeIndicator$$, -0.09, 0.04)], $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$LinearGradientFill$($DvtDialGaugeDefaults$$, $DvtRatingGaugeEventManager$$, [1, 1], [0, 1])), $DvtRatingGaugeDefaults$$.$setFill$($DvtDialGaugeDefaults$$))
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), ""), $DvtStatusMeterGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), 
    $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.__layout.labelGap, $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeIndicator$$.metricLabel.style, $DvtGaugeEventManager$$ = $DvtGaugeKeyboardHandler$$.$getStyle$("color"), $DvtGaugeEventManager$$ = $DvtGaugeEventManager$$ ? $DvtGaugeEventManager$$ : "#333333", $DvtGaugeDefaults$$ = $JSCompiler_alias_NULL$$;
    $DvtStatusMeterGaugeIndicator$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
    $DvtStatusMeterGaugeIndicator$$.$setSolidFill$($DvtGaugeEventManager$$);
    if($DvtStatusMeterGaugeCircularIndicator$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtGaugeAutomation$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtGaugeAutomation$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeAutomation$$, $DvtRatingGaugeEventManager$$), $DvtGaugeDefaults$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeAutomation$$);
      $DvtGaugeDefaults$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y + 0.8 * $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugeDefaults$$.$w$, 0.2 * $DvtRatingGaugeDefaults$$.$h$);
      $DvtStatusMeterGaugeCircularIndicator$$ = ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeKeyboardHandler$$.$getStyle$("font-size")) ? parseInt($DvtStatusMeterGaugeCircularIndicator$$) : $DvtGaugeDefaults$$.$getOptimalFontSize$($DvtDialGaugeIndicator$$);
      $DvtGaugeDefaults$$ = $DvtGaugeDefaults$$.$measureDimensions$();
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtGaugeDefaults$$.$h$;
      $DvtGaugeAutomation$$ = $DvtGaugeDefaults$$.$w$;
      $DvtStatusMeterGaugeIndicator$$.$setFontSize$($DvtStatusMeterGaugeCircularIndicator$$);
      $DvtStatusMeterGaugeIndicator$$.$setTextString$($DvtStatusMeterGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2);
      $DvtStatusMeterGaugeIndicator$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$);
      $DvtRatingGaugeDefaults$$.$h$ -= $DvtLedGaugeDefaults$$;
      $DvtStatusMeterGaugeIndicator$$.$alignCenter$();
      $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$)
    }else {
      if(!$DvtStatusMeterGaugeCircularIndicator$$ && "on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
        $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeKeyboardHandler$$.$getStyle$("font-size");
        $DvtGaugeEventManager$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
        $DvtGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$);
        $DvtStatusMeterGaugeCircularIndicator$$ === $JSCompiler_alias_VOID$$ && 18 > $DvtRatingGaugeDefaults$$.$h$ && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtStatusMeterGaugeDefaults$$, $DvtGaugeEventManager$$, $DvtGaugeDefaults$$], $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$));
        $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? parseInt($DvtStatusMeterGaugeCircularIndicator$$) : 13;
        $DvtStatusMeterGaugeIndicator$$.$setFontSize$($DvtStatusMeterGaugeCircularIndicator$$);
        var $DvtGauge$$;
        if(0 < $DvtDialGaugeIndicator$$.max || "off" != $DvtDialGaugeIndicator$$.plotArea.rendered || !("auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay)) {
          $DvtGaugeAutomation$$ = 0 < $DvtDialGaugeIndicator$$.max ? $DvtDialGaugeIndicator$$.max : $DvtDialGaugeIndicator$$.min, $DvtGaugeAutomation$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtGaugeAutomation$$, $DvtRatingGaugeEventManager$$), $DvtGaugeDefaults$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeAutomation$$), $DvtGaugeDefaults$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$), $DvtGaugeDefaults$$.$setFontSize$($DvtStatusMeterGaugeCircularIndicator$$), 
          $DvtGaugeDefaults$$ = $DvtGaugeDefaults$$.$measureDimensions$(), $DvtGaugeDefaults$$.$w$ = Math.min($DvtGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$w$), $DvtGauge$$ = $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.x + $DvtGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeAutomation$$ = $DvtGaugeDefaults$$.$w$, $DvtDialGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$.x += $DvtGaugeDefaults$$.$w$ + $DvtLedGaugeDefaults$$), $DvtRatingGaugeDefaults$$.$w$ -= 
          $DvtGaugeDefaults$$.$w$ + $DvtLedGaugeDefaults$$
        }
        if(0 > $DvtDialGaugeIndicator$$.min && "on" != $DvtDialGaugeIndicator$$.plotArea.rendered && !("auto" == $DvtDialGaugeIndicator$$.plotArea.rendered && "onIndicator" == $DvtDialGaugeIndicator$$.thresholdDisplay)) {
          $DvtGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$);
          $DvtGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDefaults$$);
          $DvtGaugeEventManager$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$);
          $DvtGaugeEventManager$$.$setFontSize$($DvtStatusMeterGaugeCircularIndicator$$);
          $DvtGaugeKeyboardHandler$$ = $DvtGaugeEventManager$$.$measureDimensions$();
          if(0 > $DvtDialGaugeIndicator$$.value || 0 >= $DvtDialGaugeIndicator$$.max) {
            $DvtGauge$$ = $DvtDialGaugeDefaults$$ ? $DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.x + $DvtGaugeKeyboardHandler$$.$w$, $DvtGaugeAutomation$$ = $DvtGaugeKeyboardHandler$$.$w$
          }
          $DvtDialGaugeDefaults$$ || ($DvtRatingGaugeDefaults$$.x += $DvtGaugeKeyboardHandler$$.$w$ + $DvtLedGaugeDefaults$$);
          $DvtRatingGaugeDefaults$$.$w$ -= $DvtGaugeKeyboardHandler$$.$w$ + $DvtLedGaugeDefaults$$
        }
        $DvtStatusMeterGaugeIndicator$$.$setTextString$($DvtStatusMeterGaugeDefaults$$);
        $DvtStatusMeterGaugeIndicator$$.$setX$($DvtGauge$$);
        $dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2);
        $DvtStatusMeterGaugeIndicator$$.$alignRight$();
        $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeIndicator$$, $DvtGaugeAutomation$$, $DvtRatingGaugeDefaults$$.$h$, $DvtRatingGaugePeer$$)
      }
    }
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$) {
    var $DvtLedGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtGaugeKeyboardHandler$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtGaugeEventManager$$ = "vertical" == $DvtLedGaugeDefaults$$.orientation, $DvtGaugeDefaults$$ = "on" == $DvtLedGaugeDefaults$$.plotArea.rendered, $DvtGaugeAutomation$$ = "center", $DvtGauge$$ = "middle", $DvtGaugeDataUtils$$ = new $dvt$$3$$.$Rectangle$(Math.min($DvtStatusMeterGaugeCircularIndicator$$.$x1$, $DvtStatusMeterGaugeCircularIndicator$$.$x2$), 
    Math.min($DvtStatusMeterGaugeCircularIndicator$$.$y1$, $DvtStatusMeterGaugeCircularIndicator$$.$y2$), Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$x2$ - $DvtStatusMeterGaugeCircularIndicator$$.$x1$), Math.abs($DvtStatusMeterGaugeCircularIndicator$$.$y2$ - $DvtStatusMeterGaugeCircularIndicator$$.$y1$)), $DvtLedGaugeDefaults$$ = $DvtLedGaugeDefaults$$.metricLabel.style.$getStyle$("color");
    "center" == $DvtDialGaugeDefaults$$ ? ($DvtLedGaugeDefaults$$ = $DvtLedGaugeDefaults$$ ? $DvtLedGaugeDefaults$$ : $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtGaugeEventManager$$ ? ($DvtGaugeDataUtils$$.$h$ -= $DvtGaugeDataUtils$$.$w$, $DvtGaugeDataUtils$$.y += $DvtGaugeDataUtils$$.$w$ / 2) : ($DvtGaugeDataUtils$$.$w$ -= $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x += $DvtGaugeDataUtils$$.$h$ / 2)) : "insideIndicatorEdge" == $DvtDialGaugeDefaults$$ ? ($DvtLedGaugeDefaults$$ = 
    $DvtLedGaugeDefaults$$ ? $DvtLedGaugeDefaults$$ : $dvt$$3$$.$ColorUtils$.$getContrastingTextColor$($DvtDialGaugeIndicator$$), $DvtGaugeEventManager$$ ? ($DvtGaugeDataUtils$$.$h$ -= $DvtGaugeDataUtils$$.$w$, $DvtGaugeDataUtils$$.y += $DvtGaugeDataUtils$$.$w$ / 2, $DvtGauge$$ = !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$y1$ > $DvtStatusMeterGaugeCircularIndicator$$.$y2$ ? "bottom" : "top") : ($DvtGaugeDataUtils$$.$w$ -= $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x += $DvtGaugeDataUtils$$.$h$ / 
    2, $DvtGaugeAutomation$$ = $DvtGaugeKeyboardHandler$$ ? !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$x1$ < $DvtStatusMeterGaugeCircularIndicator$$.$x2$ ? "right" : "left" : !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$x1$ > $DvtStatusMeterGaugeCircularIndicator$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $DvtDialGaugeDefaults$$ && ($DvtGaugeEventManager$$ ? ($DvtGaugeDataUtils$$.$h$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$y1$ - $DvtStatusMeterGaugeCircularIndicator$$.$y1$) - 
    $DvtGaugeDataUtils$$.$w$, $DvtGaugeDataUtils$$.y = $DvtStatusMeterGaugeIndicator$$.$y1$ + $DvtGaugeDataUtils$$.$w$ / 2, $DvtGauge$$ = "bottom", !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$y1$ > $DvtStatusMeterGaugeCircularIndicator$$.$y2$ && ($DvtGaugeDataUtils$$.$h$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$y1$ - $DvtStatusMeterGaugeCircularIndicator$$.$y1$) - $DvtGaugeDataUtils$$.$w$, $DvtGaugeDataUtils$$.y = $DvtStatusMeterGaugeCircularIndicator$$.$y1$ + $DvtGaugeDataUtils$$.$w$ / 
    2, $DvtGauge$$ = "top")) : $DvtGaugeKeyboardHandler$$ ? !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$x1$ < $DvtStatusMeterGaugeCircularIndicator$$.$x2$ ? ($DvtGaugeDataUtils$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x2$ - $DvtStatusMeterGaugeCircularIndicator$$.$x2$) - $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x = $DvtStatusMeterGaugeCircularIndicator$$.$x2$ + $DvtGaugeDataUtils$$.$h$ / 2, $DvtGaugeAutomation$$ = "left") : ($DvtGaugeDataUtils$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x1$ - 
    $DvtStatusMeterGaugeCircularIndicator$$.$x2$) - $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x = $DvtStatusMeterGaugeIndicator$$.$x1$ + $DvtGaugeDataUtils$$.$h$ / 2, $DvtGaugeAutomation$$ = "right") : !$DvtGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$x1$ > $DvtStatusMeterGaugeCircularIndicator$$.$x2$ ? ($DvtGaugeDataUtils$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x1$ - $DvtStatusMeterGaugeCircularIndicator$$.$x2$) - $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x = $DvtStatusMeterGaugeIndicator$$.$x1$ + 
    $DvtGaugeDataUtils$$.$h$ / 2, $DvtGaugeAutomation$$ = "right") : ($DvtGaugeDataUtils$$.$w$ = Math.abs($DvtStatusMeterGaugeIndicator$$.$x2$ - $DvtStatusMeterGaugeCircularIndicator$$.$x2$) - $DvtGaugeDataUtils$$.$h$, $DvtGaugeDataUtils$$.x = $DvtStatusMeterGaugeCircularIndicator$$.$x2$ + $DvtGaugeDataUtils$$.$h$ / 2, $DvtGaugeAutomation$$ = "left"));
    !$DvtGaugeRenderer$$.$renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtGaugeDataUtils$$, $DvtLedGaugeDefaults$$, $DvtGaugeAutomation$$, $DvtGauge$$) && !$DvtStatusMeterGaugeDefaults$$ && ("outsideIndicatorEdge" == $DvtDialGaugeDefaults$$ ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "insideIndicatorEdge", $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, 
    $JSCompiler_alias_TRUE$$) : ("insideIndicatorEdge" == $DvtDialGaugeDefaults$$ || "center" == $DvtDialGaugeDefaults$$) && $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, "outsideIndicatorEdge", $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $JSCompiler_alias_TRUE$$))
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == $DvtDialGaugeDefaults$$.orientation, $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y, $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$w$ - 
    $DvtRatingGaugeDefaults$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugeDefaults$$.$h$ - $DvtRatingGaugeDefaults$$.$w$ : $DvtRatingGaugeDefaults$$.$h$), $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeDefaults$$.title.text;
    if(!$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($DvtDialGaugeDefaults$$) && "on" == $DvtDialGaugeDefaults$$.metricLabel.rendered) {
      var $DvtLedGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeDefaults$$.value, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $dvt$$3$$.$Bundle$.$getTranslatedString$($dvt$$3$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$])
    }
    var $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$.title.style, $DvtLedGaugeDefaults$$ = $DvtGaugeKeyboardHandler$$.$clone$(), $DvtGaugeEventManager$$ = $DvtGaugeKeyboardHandler$$.$getStyle$("font-size");
    $DvtGaugeEventManager$$ || ($DvtGaugeEventManager$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeDefaults$$, 0, 0), $DvtGaugeEventManager$$.$setCSSStyle$($DvtGaugeKeyboardHandler$$), $DvtGaugeEventManager$$.$setTextString$($DvtStatusMeterGaugeDefaults$$), $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtGaugeEventManager$$.$getOptimalFontSize$(new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y, 
    $DvtStatusMeterGaugeIndicator$$.$w$, Number.MAX_VALUE)) : $DvtGaugeEventManager$$.$getOptimalFontSize$(new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y, Number.MAX_VALUE, $DvtStatusMeterGaugeIndicator$$.$h$)));
    $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$MultilineText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeDefaults$$);
    $DvtLedGaugeDefaults$$.$setFontSize$("font-size", $DvtGaugeEventManager$$.toString());
    $DvtStatusMeterGaugeDefaults$$.$setCSSStyle$($DvtLedGaugeDefaults$$);
    $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$.$w$, $DvtStatusMeterGaugeIndicator$$.$h$, $DvtRatingGaugeEventManager$$);
    "center" == $DvtDialGaugeDefaults$$.title.position || "auto" == $DvtDialGaugeDefaults$$.title.position && $DvtStatusMeterGaugeCircularIndicator$$ ? ($dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), $DvtStatusMeterGaugeDefaults$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtStatusMeterGaugeDefaults$$.$alignCenter$()) : ($dvt$$3$$.$TextUtils$.$centerTextVertically$($DvtStatusMeterGaugeDefaults$$, 
    $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2), !$DvtStatusMeterGaugeCircularIndicator$$ && $DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeDefaults$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ - $DvtStatusMeterGaugeIndicator$$.$h$ / 2), $DvtStatusMeterGaugeDefaults$$.$alignRight$()) : !$DvtStatusMeterGaugeCircularIndicator$$ && !$DvtDialGaugeIndicator$$ ? ($DvtStatusMeterGaugeDefaults$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtStatusMeterGaugeIndicator$$.$h$ / 
    2), $DvtStatusMeterGaugeDefaults$$.$alignLeft$()) : $DvtStatusMeterGaugeCircularIndicator$$ && ($DvtStatusMeterGaugeDefaults$$.$setY$($DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ - $DvtStatusMeterGaugeDefaults$$.$getDimensions$().$h$ - $DvtStatusMeterGaugeIndicator$$.$w$ / 2), $DvtStatusMeterGaugeDefaults$$.$setX$($DvtRatingGaugeDefaults$$.x + $DvtRatingGaugeDefaults$$.$w$ / 2), $DvtStatusMeterGaugeDefaults$$.$alignCenter$()));
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return{x:Math.cos($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$w$ / 2 + $dvt$$3$$.x, y:Math.sin($DvtRatingGaugePeer$$) * $DvtRatingGaugeEventManager$$ + $dvt$$3$$.$h$ / 2 + $dvt$$3$$.y}
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeEventManager$$) {
    var $DvtGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getCtx$();
    $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$ - $DvtDialGaugeDefaults$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtGaugeKeyboardHandler$$ ? $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Path$($DvtGaugeDefaults$$, $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$)) : ($DvtRatingGaugeDefaults$$ = new $DvtStatusMeterGaugeCircularIndicator$$($DvtGaugeDefaults$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, 
    $DvtStatusMeterGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtRatingGaugeDefaults$$));
    $DvtRatingGaugeDefaults$$.$setSolidFill$($DvtLedGaugeDefaults$$);
    ($DvtRatingGaugeEventManager$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($DvtRatingGaugeEventManager$$)) && !$DvtGaugeKeyboardHandler$$ ? $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtRatingGaugeEventManager$$) : $DvtGaugeKeyboardHandler$$ && $DvtGaugeEventManager$$ && $DvtRatingGaugeDefaults$$.$setSolidStroke$($DvtGaugeEventManager$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtRatingGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtLedGaugeDefaults$$ = Math.min($DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtGaugeKeyboardHandler$$ = 0.275 * $DvtLedGaugeDefaults$$, $DvtLedGaugeDefaults$$ = 0.5 * $DvtLedGaugeDefaults$$;
    $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) && ($DvtDialGaugeIndicator$$ = Math.PI - $DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$ = 0 < $DvtDialGaugeIndicator$$ ? $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$ + 2 * Math.PI);
    $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeDefaults$$, $DvtLedGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Line$($DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y, $DvtRatingGaugeDefaults$$.x, $DvtRatingGaugeDefaults$$.y);
    $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$SolidStroke$($DvtDialGaugeDefaults$$, 1, $DvtStatusMeterGaugeCircularIndicator$$);
    $DvtStatusMeterGaugeIndicator$$ && $DvtDialGaugeDefaults$$.$setStyle$($dvt$$3$$.$Stroke$.$convertTypeString$($DvtStatusMeterGaugeIndicator$$));
    $DvtStatusMeterGaugeDefaults$$.$setStroke$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$;
    $DvtRatingGaugeDefaults$$ < $dvt$$3$$.$Math$.$TWO_PI$ ? ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, 
    $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PathUtils$.moveTo($DvtStatusMeterGaugeCircularIndicator$$.x, $DvtStatusMeterGaugeCircularIndicator$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$, 1, $DvtStatusMeterGaugeIndicator$$.x, 
    $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$3$$.$PathUtils$.lineTo($DvtStatusMeterGaugeDefaults$$.x, $DvtStatusMeterGaugeDefaults$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$, 0, $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$3$$.$PathUtils$.closePath()) : ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, 
    $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$, 
    $DvtRatingGaugePeer$$ + $DvtRatingGaugeDefaults$$ / 2), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PathUtils$.moveTo($DvtStatusMeterGaugeCircularIndicator$$.x, $DvtStatusMeterGaugeCircularIndicator$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ / 2, 1, $DvtStatusMeterGaugeIndicator$$.x, $DvtStatusMeterGaugeIndicator$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ / 2, 1, $DvtStatusMeterGaugeCircularIndicator$$.x, 
    $DvtStatusMeterGaugeCircularIndicator$$.y), 0 < $DvtDialGaugeIndicator$$ && ($DvtDialGaugeDefaults$$ += $dvt$$3$$.$PathUtils$.moveTo($DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 0, $DvtStatusMeterGaugeDefaults$$.x, $DvtStatusMeterGaugeDefaults$$.y) + $dvt$$3$$.$PathUtils$.arcTo($DvtDialGaugeIndicator$$, $DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$ / 2, 0, 
    $DvtRatingGaugeEventManager$$.x, $DvtRatingGaugeEventManager$$.y)), $DvtDialGaugeDefaults$$ += $dvt$$3$$.$PathUtils$.closePath());
    return $DvtDialGaugeDefaults$$
  };
  $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = 1;
    if($DvtRatingGaugePeer$$) {
      $DvtRatingGaugeEventManager$$ >= $dvt$$3$$.$Math$.$HALF_PI$ && $DvtRatingGaugeEventManager$$ < Math.PI ? $DvtRatingGaugeDefaults$$ = 2 : $DvtRatingGaugeEventManager$$ >= Math.PI && $DvtRatingGaugeEventManager$$ < 1.5 * Math.PI ? $DvtRatingGaugeDefaults$$ = 3 : $DvtRatingGaugeEventManager$$ >= 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$3$$.$Math$.$TWO_PI$ && ($DvtRatingGaugeDefaults$$ = 4)
    }else {
      if($DvtRatingGaugeEventManager$$ > $dvt$$3$$.$Math$.$HALF_PI$ && $DvtRatingGaugeEventManager$$ <= Math.PI) {
        $DvtRatingGaugeDefaults$$ = 2
      }else {
        if($DvtRatingGaugeEventManager$$ > Math.PI && $DvtRatingGaugeEventManager$$ <= 1.5 * Math.PI) {
          $DvtRatingGaugeDefaults$$ = 3
        }else {
          if($DvtRatingGaugeEventManager$$ > 1.5 * Math.PI && $DvtRatingGaugeEventManager$$ < $dvt$$3$$.$Math$.$TWO_PI$ || 0 == $DvtRatingGaugeEventManager$$) {
            $DvtRatingGaugeDefaults$$ = 4
          }
        }
      }
    }
    return $DvtRatingGaugeDefaults$$
  };
  $DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($dvt$$3$$) {
    var $DvtRatingGaugeEventManager$$ = $dvt$$3$$.metricLabel.position;
    return"auto" == $DvtRatingGaugeEventManager$$ || "outsidePlotArea" == $DvtRatingGaugeEventManager$$ || "withTitle" == $DvtRatingGaugeEventManager$$ && !$DvtGaugeStyleUtils$$.$hasTitle$($dvt$$3$$)
  };
  $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$) {
    var $DvtStatusMeterGaugeDefaults$$ = $JSCompiler_alias_NULL$$, $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtRatingGaugeDefaults$$, $JSCompiler_alias_TRUE$$), $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($DvtDialGaugeDefaults$$, $JSCompiler_alias_FALSE$$), $DvtGaugeEventManager$$ = $DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$h$, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 
    2, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2, $DvtGaugeDataUtils$$;
    if($DvtLedGaugeDefaults$$ == $DvtGaugeKeyboardHandler$$ && $DvtDialGaugeIndicator$$ <= $dvt$$3$$.$Math$.$HALF_PI$) {
      if($DvtRatingGaugeDefaults$$ = 2 * Math.min($DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$.$h$), $DvtStatusMeterGaugeCircularIndicator$$.$w$ += $DvtRatingGaugeDefaults$$ / 2, $DvtStatusMeterGaugeCircularIndicator$$.$h$ += $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, !$DvtStatusMeterGaugeIndicator$$ && 1 == $DvtLedGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$ && 2 == $DvtLedGaugeDefaults$$) {
        $DvtStatusMeterGaugeCircularIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtStatusMeterGaugeCircularIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - 1, $DvtStatusMeterGaugeCircularIndicator$$.y + 
        $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - 1, $DvtGaugeDataUtils$$ * (3 / 7) - 2, $DvtGaugeDataUtils$$ * (2.5 / 7) - 2)
      }else {
        if(!$DvtStatusMeterGaugeIndicator$$ && 2 == $DvtLedGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$ && 1 == $DvtLedGaugeDefaults$$) {
          $DvtStatusMeterGaugeCircularIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7) + 1, $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 
          2 - 1, $DvtGaugeDataUtils$$ * (3 / 7) - 2, $DvtGaugeDataUtils$$ * (2.5 / 7) - 2)
        }else {
          if(!$DvtStatusMeterGaugeIndicator$$ && 3 == $DvtLedGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$ && 4 == $DvtLedGaugeDefaults$$) {
            $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7) + 1, $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7) + 1, $DvtGaugeDataUtils$$ * 
            (3 / 7) - 2, $DvtGaugeDataUtils$$ * (2.5 / 7) - 2)
          }else {
            if(!$DvtStatusMeterGaugeIndicator$$ && 4 == $DvtLedGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$ && 3 == $DvtLedGaugeDefaults$$) {
              $DvtStatusMeterGaugeCircularIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - 1, $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - 
              $DvtGaugeDataUtils$$ * (2.5 / 7) + 1, $DvtGaugeDataUtils$$ * (3 / 7) - 2, $DvtGaugeDataUtils$$ * (2.5 / 7) - 2)
            }
          }
        }
      }
    }else {
      $DvtLedGaugeDefaults$$ % 4 + 1 == $DvtGaugeKeyboardHandler$$ && $DvtDialGaugeIndicator$$ <= Math.PI ? 1 == $DvtLedGaugeDefaults$$ || 3 == $DvtLedGaugeDefaults$$ ? ($DvtRatingGaugeDefaults$$ = Math.min($DvtStatusMeterGaugeCircularIndicator$$.$w$, 2 * $DvtStatusMeterGaugeCircularIndicator$$.$h$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$.$w$ > $DvtStatusMeterGaugeCircularIndicator$$.$h$ && ($DvtStatusMeterGaugeDefaults$$ = 
      new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ - ($DvtStatusMeterGaugeCircularIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 - $DvtGaugeDataUtils$$ * (2.75 / 7), $DvtGaugeDataUtils$$ * (6 / 7), $DvtGaugeDataUtils$$ * (2.5 / 7)), 1 == $DvtLedGaugeDefaults$$ ? ($DvtStatusMeterGaugeDefaults$$.y = $DvtStatusMeterGaugeCircularIndicator$$.y + 
      ($DvtStatusMeterGaugeCircularIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2 + $DvtGaugeDataUtils$$ * (0.5 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y -= $DvtRatingGaugeDefaults$$ / 2 - ($DvtStatusMeterGaugeCircularIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGauge$$ = $DvtGaugeDefaults$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1) : ($DvtStatusMeterGaugeCircularIndicator$$.y += ($DvtStatusMeterGaugeCircularIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGauge$$ = 
      $DvtGaugeDefaults$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtStatusMeterGaugeCircularIndicator$$.$h$ = $DvtRatingGaugeDefaults$$)) : ($DvtRatingGaugeDefaults$$ = Math.min(2 * $DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtStatusMeterGaugeCircularIndicator$$.$h$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$.$w$ < $DvtStatusMeterGaugeCircularIndicator$$.$h$ && ($DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + 
      $DvtStatusMeterGaugeCircularIndicator$$.$w$ - ($DvtStatusMeterGaugeCircularIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2 - $DvtGaugeDataUtils$$ * (3.25 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (3 / 7), $DvtGaugeDataUtils$$ * (5 / 7)), !$DvtStatusMeterGaugeIndicator$$ && 4 == $DvtLedGaugeDefaults$$ || $DvtStatusMeterGaugeIndicator$$ && 2 == $DvtLedGaugeDefaults$$ ? ($DvtStatusMeterGaugeDefaults$$.x = 
      $DvtStatusMeterGaugeCircularIndicator$$.x + ($DvtStatusMeterGaugeCircularIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2 + $DvtGaugeDataUtils$$ * (0.25 / 7), $DvtStatusMeterGaugeCircularIndicator$$.x -= $DvtRatingGaugeDefaults$$ / 2 - ($DvtStatusMeterGaugeCircularIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 - $DvtRatingGaugeDefaults$$ / 4 + 1) : ($DvtStatusMeterGaugeCircularIndicator$$.x += ($DvtStatusMeterGaugeCircularIndicator$$.$w$ - 
      $DvtRatingGaugeDefaults$$ / 2) / 2, $DvtGaugeAutomation$$ = $DvtGaugeEventManager$$ / 2 + $DvtRatingGaugeDefaults$$ / 4 - 1), $DvtStatusMeterGaugeCircularIndicator$$.$w$ = $DvtRatingGaugeDefaults$$)) : $DvtGaugeKeyboardHandler$$ % 4 + 1 == $DvtLedGaugeDefaults$$ && $DvtDialGaugeIndicator$$ > Math.PI && (1 == $DvtLedGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$h$ > $DvtStatusMeterGaugeCircularIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min(2 * ($DvtStatusMeterGaugeCircularIndicator$$.$w$ / 
      (Math.cos($DvtRatingGaugeDefaults$$) + 1)), 2 * ($DvtStatusMeterGaugeCircularIndicator$$.$w$ / (Math.sin($DvtDialGaugeDefaults$$ - 1.5 * Math.PI) + 1)), $DvtStatusMeterGaugeCircularIndicator$$.$h$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = $DvtGaugeDataUtils$$ * (3 / 7) * (2 * $DvtStatusMeterGaugeCircularIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeIndicator$$ ? ($DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + 
      $DvtStatusMeterGaugeCircularIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (3 / 7) + $DvtRatingGaugePeer$$, $DvtGaugeDataUtils$$ * (5 / 7)), $DvtStatusMeterGaugeCircularIndicator$$.x -= $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtGaugeAutomation$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtGaugeEventManager$$) : 
      ($DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtRatingGaugeDefaults$$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (3 / 7) * (1 + (2 * $DvtStatusMeterGaugeCircularIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), $DvtGaugeDataUtils$$ * (5 / 7)), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ / 
      2), $DvtStatusMeterGaugeCircularIndicator$$.$w$ = $DvtRatingGaugeDefaults$$) : 2 == $DvtLedGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$h$ < $DvtStatusMeterGaugeCircularIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min(2 * ($DvtStatusMeterGaugeCircularIndicator$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - $dvt$$3$$.$Math$.$HALF_PI$) + 1)), 2 * ($DvtStatusMeterGaugeCircularIndicator$$.$h$ / (Math.sin($DvtDialGaugeDefaults$$) + 1)), $DvtStatusMeterGaugeCircularIndicator$$.$w$), 
      $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtRatingGaugeDefaults$$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (6 / 7), $DvtGaugeDataUtils$$ * (2.5 / 7) * (1 + (2 * $DvtStatusMeterGaugeCircularIndicator$$.$h$ / $DvtRatingGaugeDefaults$$ - 
      1))), $DvtStatusMeterGaugeCircularIndicator$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGauge$$ = $DvtRatingGaugeDefaults$$ / 2) : 3 == $DvtLedGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$h$ > $DvtStatusMeterGaugeCircularIndicator$$.$w$ ? ($DvtRatingGaugeDefaults$$ = Math.min(2 * ($DvtStatusMeterGaugeCircularIndicator$$.$w$ / (Math.cos($DvtRatingGaugeDefaults$$ - Math.PI) + 1)), 2 * ($DvtStatusMeterGaugeCircularIndicator$$.$w$ / (Math.sin($DvtDialGaugeDefaults$$ - $dvt$$3$$.$Math$.$HALF_PI$) + 
      1)), $DvtStatusMeterGaugeCircularIndicator$$.$h$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, $DvtRatingGaugePeer$$ = $DvtGaugeDataUtils$$ * (3 / 7) * (2 * $DvtStatusMeterGaugeCircularIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeIndicator$$ ? ($DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtRatingGaugeDefaults$$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + 
      $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (3 / 7) * (1 + (2 * $DvtStatusMeterGaugeCircularIndicator$$.$w$ / $DvtRatingGaugeDefaults$$ - 1)), $DvtGaugeDataUtils$$ * (5 / 7)), $DvtGaugeAutomation$$ = $DvtRatingGaugeDefaults$$ / 2) : ($DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, 
      $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtGaugeDataUtils$$ * (2.5 / 7), $DvtGaugeDataUtils$$ * (3 / 7) + $DvtRatingGaugePeer$$, $DvtGaugeDataUtils$$ * (5 / 7)), $DvtStatusMeterGaugeCircularIndicator$$.x -= $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$.$w$, $DvtGaugeAutomation$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtGaugeEventManager$$), $DvtStatusMeterGaugeCircularIndicator$$.$w$ = $DvtRatingGaugeDefaults$$) : 4 == 
      $DvtLedGaugeDefaults$$ && $DvtStatusMeterGaugeCircularIndicator$$.$h$ < $DvtStatusMeterGaugeCircularIndicator$$.$w$ && ($DvtRatingGaugeDefaults$$ = Math.min(2 * ($DvtStatusMeterGaugeCircularIndicator$$.$h$ / (Math.cos($DvtRatingGaugeDefaults$$ - 1.5 * Math.PI) + 1)), 2 * ($DvtStatusMeterGaugeCircularIndicator$$.$h$ / (Math.sin($dvt$$3$$.$Math$.$TWO_PI$ - $DvtDialGaugeDefaults$$) + 1)), $DvtStatusMeterGaugeCircularIndicator$$.$w$), $DvtGaugeDataUtils$$ = $DvtRatingGaugeDefaults$$ * $DvtRatingGaugePeer$$, 
      $DvtRatingGaugePeer$$ = $DvtGaugeDataUtils$$ * (2.5 / 7) * (2 * $DvtStatusMeterGaugeCircularIndicator$$.$h$ / $DvtRatingGaugeDefaults$$ - 1), $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtGaugeDataUtils$$ * (3 / 7), $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ - $DvtRatingGaugeDefaults$$ / 2 - $DvtRatingGaugePeer$$, $DvtGaugeDataUtils$$ * 
      (6 / 7), $DvtGaugeDataUtils$$ * (2.5 / 7) + $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeCircularIndicator$$.y -= $DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$.$h$, $DvtStatusMeterGaugeCircularIndicator$$.$h$ = $DvtRatingGaugeDefaults$$, $DvtGauge$$ = -$DvtRatingGaugeDefaults$$ / 2 + $DvtGaugeDefaults$$))
    }
    $DvtRatingGaugeEventManager$$.$cx$ = $DvtGaugeAutomation$$;
    $DvtRatingGaugeEventManager$$.$cy$ = $DvtGauge$$;
    $DvtRatingGaugeEventManager$$.$maxInnerDiameter$ = $DvtGaugeDataUtils$$;
    return $DvtStatusMeterGaugeDefaults$$
  };
  $DvtStatusMeterGaugeRenderer$$.$_renderCenterContent$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCenterContent$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    var $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + 0.5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtDialGaugeDefaults$$), $DvtRatingGaugeDefaults$$.y + 0.5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtDialGaugeDefaults$$), $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getIntersection$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$($DvtRatingGaugeDefaults$$.x + 0.5 * ($DvtRatingGaugeDefaults$$.$w$ - $DvtDialGaugeDefaults$$ / Math.sqrt(2)), $DvtRatingGaugeDefaults$$.y + 0.5 * ($DvtRatingGaugeDefaults$$.$h$ - $DvtDialGaugeDefaults$$ / Math.sqrt(2)), $DvtDialGaugeDefaults$$ / Math.sqrt(2), $DvtDialGaugeDefaults$$ / Math.sqrt(2));
    $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.$getIntersection$($DvtDialGaugeIndicator$$);
    if($DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.center.renderer) {
      if($DvtRatingGaugeDefaults$$ = {outerBounds:{x:$DvtStatusMeterGaugeCircularIndicator$$.x, y:$DvtStatusMeterGaugeCircularIndicator$$.y, width:$DvtStatusMeterGaugeCircularIndicator$$.$w$, height:$DvtStatusMeterGaugeCircularIndicator$$.$h$}, innerBounds:{x:$DvtRatingGaugeDefaults$$.x, y:$DvtRatingGaugeDefaults$$.y, width:$DvtRatingGaugeDefaults$$.$w$, height:$DvtRatingGaugeDefaults$$.$h$}, metricLabel:$DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtRatingGaugePeer$$.value, $DvtRatingGaugeEventManager$$), 
      component:$DvtRatingGaugePeer$$._widgetConstructor}, $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugePeer$$.$_parentDiv$, ($DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$centerDiv$) && $DvtStatusMeterGaugeCircularIndicator$$.removeChild($DvtDialGaugeDefaults$$), $DvtRatingGaugeDefaults$$ = $DvtDialGaugeIndicator$$($DvtRatingGaugeDefaults$$)) {
        $DvtDialGaugeIndicator$$ = $DvtRatingGaugePeer$$.$createOverlayDiv$(), $DvtDialGaugeIndicator$$.appendChild($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.$centerDiv$ = $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.appendChild($DvtDialGaugeIndicator$$), ($DvtRatingGaugeEventManager$$ = $DvtRatingGaugePeer$$.$_overlayAttachedCallback$) && $DvtRatingGaugeEventManager$$($DvtDialGaugeIndicator$$)
      }
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeIndicator$$, $dvt$$3$$.$Path$);
  $DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$);
    this.$_gauge$ = $dvt$$3$$;
    this.$setCoords$($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    this.$_x1$ = $DvtRatingGaugeEventManager$$;
    this.$_x2$ = $DvtRatingGaugePeer$$;
    this.$_y1$ = $DvtRatingGaugeDefaults$$;
    this.$_y2$ = $DvtDialGaugeIndicator$$;
    var $DvtDialGaugeDefaults$$ = Math.min($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtStatusMeterGaugeCircularIndicator$$ = Math.min($DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$);
    $DvtRatingGaugeEventManager$$ = Math.abs($DvtRatingGaugeEventManager$$ - $DvtRatingGaugePeer$$);
    $DvtRatingGaugeDefaults$$ = Math.abs($DvtDialGaugeIndicator$$ - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugePeer$$ = "vertical" == $DvtDialGaugeIndicator$$.orientation ? $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeDefaults$$;
    var $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeDefaults$$.$isSkyrosSkin$(this.$_gauge$) ? "25%" : "15%", $DvtDialGaugeDefaults$$ = $dvt$$3$$.$PathUtils$.$rectangleWithBorderRadius$($DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$.borderRadius, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeIndicator$$);
    this.$setCmds$($DvtDialGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
    return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
  };
  $DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 4 == $dvt$$3$$.length && this.$setCoords$($dvt$$3$$[0], $dvt$$3$$[1], $dvt$$3$$[2], $dvt$$3$$[3])
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtStatusMeterGaugeCircularIndicator$$, $dvt$$3$$.$Path$);
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $dvt$$3$$);
    this.$setPath$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$)
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setPath$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setPath$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$) {
    $DvtRatingGaugeEventManager$$ && $DvtRatingGaugeEventManager$$ instanceof $dvt$$3$$.$Rectangle$ ? this.$_bounds$ = $DvtRatingGaugeEventManager$$ : $DvtRatingGaugeEventManager$$ = this.$_bounds$;
    this.$_startAngle$ = $DvtRatingGaugePeer$$;
    this.$_angleExtent$ = $DvtRatingGaugeDefaults$$;
    this.$_innerRadius$ = $DvtDialGaugeIndicator$$;
    this.$_outerRadius$ = $DvtDialGaugeDefaults$$;
    this.$setCmds$($DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$, $DvtDialGaugeDefaults$$))
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
    return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
  };
  $DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 5 == $dvt$$3$$.length && this.$setPath$($dvt$$3$$[0], $dvt$$3$$[1], $dvt$$3$$[2], $dvt$$3$$[3], $dvt$$3$$[4])
  };
  $dvt$$3$$.$DialGauge$ = $JSCompiler_emptyFn$$();
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$DialGauge$, $DvtGauge$$);
  $dvt$$3$$.$DialGauge$.newInstance = function $$dvt$$3$$$$DialGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$DialGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$
  };
  $dvt$$3$$.$DialGauge$.prototype.Init = function $$dvt$$3$$$$DialGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $dvt$$3$$.$DialGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    this.$Defaults$ = new $DvtDialGaugeDefaults$$;
    this.$__anchorPt$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$3$$.$DialGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$DialGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.background, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.indicator;
    "string" === typeof $DvtRatingGaugePeer$$ && ($DvtRatingGaugeEventManager$$.background = $DvtGaugeStyleUtils$$.$getDialBackground$($DvtRatingGaugePeer$$), $DvtRatingGaugeEventManager$$.background.images = $DvtRatingGaugeEventManager$$._backgroundImages);
    "string" === typeof $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeEventManager$$.indicator = $DvtGaugeStyleUtils$$.$getDialIndicator$($DvtRatingGaugeDefaults$$), $DvtRatingGaugeEventManager$$.indicator.images = $DvtRatingGaugeEventManager$$._indicatorImages);
    $dvt$$3$$.$DialGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$))
  };
  $dvt$$3$$.$DialGauge$.prototype.$Render$ = function $$dvt$$3$$$$DialGauge$$$$Render$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $DvtDialGaugeRenderer$$.$render$(this, $dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)
  };
  $dvt$$3$$.$DialGauge$.prototype.$renderUpdate$ = function $$dvt$$3$$$$DialGauge$$$$renderUpdate$$() {
    $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
    var $dvt$$3$$ = this.$getEventManager$();
    $dvt$$3$$ && $dvt$$3$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), $JSCompiler_alias_TRUE$$);
    this.$UpdateAriaLiveValue$(this.$_container$)
  };
  $dvt$$3$$.$DialGauge$.prototype.$CreateAnimationOnDisplay$ = function $$dvt$$3$$$$DialGauge$$$$CreateAnimationOnDisplay$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    $DvtRatingGaugePeer$$ = [];
    for(var $DvtDialGaugeIndicator$$ = 0;$DvtDialGaugeIndicator$$ < $DvtRatingGaugeEventManager$$.length;$DvtDialGaugeIndicator$$++) {
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$[$DvtDialGaugeIndicator$$], $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$.$getAnimationParams$(), $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$__getStartAngle$(this);
      $DvtDialGaugeDefaults$$.$setAngle$($DvtStatusMeterGaugeIndicator$$);
      $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$CustomAnimation$(this.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$addProp$($dvt$$3$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$getAnimationParams$, $DvtDialGaugeDefaults$$.$setAnimationParams$, $DvtStatusMeterGaugeCircularIndicator$$);
      $DvtStatusMeterGaugeIndicator$$.$_animator$.$setEasing$(function($DvtRatingGaugeEventManager$$) {
        return $dvt$$3$$.$Easing$.$backOut$($DvtRatingGaugeEventManager$$, 0.7)
      });
      $DvtRatingGaugePeer$$.push($DvtStatusMeterGaugeIndicator$$)
    }
    return new $dvt$$3$$.$ParallelPlayable$(this.$getCtx$(), $DvtRatingGaugePeer$$)
  };
  $dvt$$3$$.$DialGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$DialGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$Math$.$radsToDegrees$(Math.atan2($DvtRatingGaugePeer$$ - this.$__anchorPt$.y, $DvtRatingGaugeEventManager$$ - this.$__anchorPt$.x));
    0 >= $DvtRatingGaugeDefaults$$ && ($DvtRatingGaugeDefaults$$ += 360);
    var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtDialGaugeDefaults$$ = this.$getOptions$().background, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$ ? 180 + $DvtDialGaugeDefaults$$.startAngle : 360 - $DvtDialGaugeDefaults$$.startAngle, $DvtDialGaugeDefaults$$ = $DvtDialGaugeDefaults$$.angleExtent, $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$ + $DvtDialGaugeDefaults$$;
    if($DvtDialGaugeIndicator$$) {
      $DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeCircularIndicator$$;
      for($DvtStatusMeterGaugeCircularIndicator$$ -= $DvtDialGaugeDefaults$$;0 > $DvtStatusMeterGaugeCircularIndicator$$;) {
        $DvtStatusMeterGaugeCircularIndicator$$ += 360, $DvtStatusMeterGaugeIndicator$$ += 360
      }
    }
    $DvtRatingGaugeDefaults$$ + 360 >= $DvtStatusMeterGaugeCircularIndicator$$ && $DvtRatingGaugeDefaults$$ + 360 <= $DvtStatusMeterGaugeIndicator$$ ? $DvtRatingGaugeDefaults$$ += 360 : $DvtRatingGaugeDefaults$$ >= $DvtStatusMeterGaugeCircularIndicator$$ && $DvtRatingGaugeDefaults$$ <= $DvtStatusMeterGaugeIndicator$$ || ($DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$ > $DvtStatusMeterGaugeIndicator$$ ? $DvtStatusMeterGaugeCircularIndicator$$ + 360 - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ - 
    $DvtStatusMeterGaugeIndicator$$ ? $DvtStatusMeterGaugeCircularIndicator$$ : $DvtStatusMeterGaugeIndicator$$ : $DvtStatusMeterGaugeCircularIndicator$$ - $DvtRatingGaugeDefaults$$ < $DvtRatingGaugeDefaults$$ + 360 - $DvtStatusMeterGaugeIndicator$$ ? $DvtStatusMeterGaugeCircularIndicator$$ : $DvtStatusMeterGaugeIndicator$$);
    $DvtRatingGaugeDefaults$$ = ($DvtRatingGaugeDefaults$$ - $DvtStatusMeterGaugeCircularIndicator$$) / $DvtDialGaugeDefaults$$;
    $DvtDialGaugeIndicator$$ && ($DvtRatingGaugeDefaults$$ = 1 - $DvtRatingGaugeDefaults$$);
    $DvtDialGaugeIndicator$$ = this.$Options$.min;
    return $DvtRatingGaugeDefaults$$ * (this.$Options$.max - $DvtDialGaugeIndicator$$) + $DvtDialGaugeIndicator$$
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtDialGaugeDefaults$$.$VERSION_1$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, tickLabel:{scaling:"auto", style:new $dvt$$3$$.$CSSStyle$($dvt$$3$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}};
  var $DvtDialGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$) ? ($DvtRatingGaugeDefaults$$ = new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$), $DvtDialGaugeRenderer$$.$_renderShape$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$)) : $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, 
    new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$))
  };
  $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$.$setAngle$($DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeEventManager$$.$getOptions$().value));
    $DvtRatingGaugePeer$$.removeChild($DvtRatingGaugeEventManager$$.$__label$);
    $DvtDialGaugeRenderer$$.$_renderLabel$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$))
  };
  $DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeRenderer$$.$_createBackground$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$);
    $DvtDialGaugeDefaults$$.background.majorTickCount && $DvtDialGaugeDefaults$$.background.radius && $DvtDialGaugeRenderer$$.$_renderTickLabels$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeRenderer$$.$_createIndicator$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeIndicator$$ = new $dvt$$3$$.$Container$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtStatusMeterGaugeDefaults$$ = new $DvtDialGaugeIndicator$$($DvtRatingGaugeEventManager$$.$getCtx$());
    $DvtRatingGaugePeer$$.$addChild$($DvtStatusMeterGaugeIndicator$$);
    $DvtStatusMeterGaugeIndicator$$.$addChild$($DvtStatusMeterGaugeDefaults$$);
    $DvtStatusMeterGaugeDefaults$$.$addChild$($DvtStatusMeterGaugeCircularIndicator$$);
    var $DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.$getDimensions$(), $DvtDialGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtDialGaugeDefaults$$.value);
    $DvtRatingGaugePeer$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$);
    var $DvtGaugeKeyboardHandler$$ = $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtLedGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$, $DvtLedGaugeDefaults$$);
    $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Matrix$;
    $DvtLedGaugeDefaults$$.translate(-$DvtGaugeKeyboardHandler$$.x, -$DvtGaugeKeyboardHandler$$.y);
    $DvtLedGaugeDefaults$$.scale($DvtRatingGaugeDefaults$$, $DvtRatingGaugeDefaults$$);
    $DvtStatusMeterGaugeCircularIndicator$$.$setMatrix$($DvtLedGaugeDefaults$$);
    $DvtStatusMeterGaugeDefaults$$.$setAngle$($DvtDialGaugeDefaults$$);
    $DvtLedGaugeDefaults$$ = new $dvt$$3$$.$Matrix$;
    $DvtLedGaugeDefaults$$.translate($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
    $DvtStatusMeterGaugeIndicator$$.$setMatrix$($DvtLedGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__shapes$.push($DvtStatusMeterGaugeDefaults$$);
    $DvtRatingGaugeEventManager$$.$__indicatorContainer$ = $DvtStatusMeterGaugeDefaults$$;
    $DvtRatingGaugeEventManager$$.$__anchorPt$ = $DvtRatingGaugePeer$$
  };
  $DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isTouchDevice$(), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ ? 2 * $DvtRatingGaugePeer$$.$w$ : $DvtRatingGaugePeer$$.$w$, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeDefaults$$ ? 2 * $DvtRatingGaugePeer$$.$h$ : $DvtRatingGaugePeer$$.$h$, 
    $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.images;
    if($DvtStatusMeterGaugeDefaults$$ && 0 < $DvtStatusMeterGaugeDefaults$$.length) {
      var $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeEventManager$$, $DvtDialGaugeDefaults$$ = [];
      for($DvtLedGaugeDefaults$$ = 0;$DvtLedGaugeDefaults$$ < $DvtStatusMeterGaugeDefaults$$.length;$DvtLedGaugeDefaults$$++) {
        var $DvtGaugeDefaults$$ = "rtl" == $DvtStatusMeterGaugeDefaults$$[$DvtLedGaugeDefaults$$].dir;
        $DvtDialGaugeIndicator$$ && $DvtGaugeDefaults$$ ? $DvtDialGaugeDefaults$$.push($DvtStatusMeterGaugeDefaults$$[$DvtLedGaugeDefaults$$]) : !$DvtDialGaugeIndicator$$ && !$DvtGaugeDefaults$$ && $DvtDialGaugeDefaults$$.push($DvtStatusMeterGaugeDefaults$$[$DvtLedGaugeDefaults$$])
      }
      $DvtStatusMeterGaugeDefaults$$ = 0 < $DvtDialGaugeDefaults$$.length ? $DvtDialGaugeDefaults$$ : $DvtStatusMeterGaugeDefaults$$;
      for($DvtLedGaugeDefaults$$ = 0;$DvtLedGaugeDefaults$$ < $DvtStatusMeterGaugeDefaults$$.length;$DvtLedGaugeDefaults$$++) {
        var $DvtGaugeAutomation$$ = $DvtStatusMeterGaugeDefaults$$[$DvtLedGaugeDefaults$$], $DvtGaugeDefaults$$ = $DvtGaugeAutomation$$.src, $DvtDialGaugeDefaults$$ = $DvtGaugeAutomation$$.width, $DvtGaugeAutomation$$ = $DvtGaugeAutomation$$.height, $DvtGauge$$ = $DvtGaugeDefaults$$ && -1 < $DvtGaugeDefaults$$.search(".svg");
        0 == $DvtLedGaugeDefaults$$ && ($DvtGaugeKeyboardHandler$$ = $DvtDialGaugeDefaults$$, $DvtGaugeEventManager$$ = $DvtGaugeAutomation$$);
        if($DvtGauge$$ || $DvtDialGaugeDefaults$$ >= $DvtStatusMeterGaugeCircularIndicator$$ && $DvtGaugeAutomation$$ >= $DvtStatusMeterGaugeIndicator$$ || $DvtLedGaugeDefaults$$ == $DvtStatusMeterGaugeDefaults$$.length - 1) {
          var $DvtStatusMeterGaugeCircularIndicator$$ = new $dvt$$3$$.$Image$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDefaults$$, 0, 0, $DvtDialGaugeDefaults$$, $DvtGaugeAutomation$$), $DvtGaugeDataUtils$$ = new $dvt$$3$$.$Matrix$, $DvtStatusMeterGaugeIndicator$$ = Math.min($DvtRatingGaugePeer$$.$w$ / $DvtDialGaugeDefaults$$, $DvtRatingGaugePeer$$.$h$ / $DvtGaugeAutomation$$), $DvtStatusMeterGaugeDefaults$$ = ($DvtRatingGaugePeer$$.$w$ - $DvtStatusMeterGaugeIndicator$$ * $DvtDialGaugeDefaults$$) / 
          2;
          $DvtLedGaugeDefaults$$ = ($DvtRatingGaugePeer$$.$h$ - $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeAutomation$$) / 2;
          $DvtGaugeDataUtils$$.scale($DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeIndicator$$);
          $DvtGaugeDataUtils$$.translate($DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$);
          $DvtStatusMeterGaugeCircularIndicator$$.$setMatrix$($DvtGaugeDataUtils$$);
          $DvtGauge$$ && $dvt$$3$$.$Agent$.$isPlatformWebkit$() && ($DvtGaugeDefaults$$ = $dvt$$3$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeDefaults$$, $dvt$$3$$.$Obj$.$createCallback$($DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$.$__setDimensions$))) && $DvtStatusMeterGaugeCircularIndicator$$.$__setDimensions$($DvtGaugeDefaults$$);
          $DvtRatingGaugePeer$$.x += $DvtStatusMeterGaugeDefaults$$;
          $DvtRatingGaugePeer$$.y += $DvtLedGaugeDefaults$$;
          $DvtRatingGaugePeer$$.$w$ = $DvtStatusMeterGaugeIndicator$$ * $DvtDialGaugeDefaults$$;
          $DvtRatingGaugePeer$$.$h$ = $DvtStatusMeterGaugeIndicator$$ * $DvtGaugeAutomation$$;
          !isNaN($DvtRatingGaugeDefaults$$.anchorX) && !isNaN($DvtRatingGaugeDefaults$$.anchorY) && ($DvtRatingGaugeDefaults$$._anchorX = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtGaugeKeyboardHandler$$ : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.anchorX / $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * 
          $DvtRatingGaugeDefaults$$.anchorY / $DvtGaugeEventManager$$);
          $DvtRatingGaugeDefaults$$.metricLabelBounds && ($DvtDialGaugeDefaults$$ = {}, $DvtDialGaugeDefaults$$.width = $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.width / $DvtGaugeKeyboardHandler$$, $DvtDialGaugeDefaults$$.height = $DvtRatingGaugePeer$$.$h$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.height / $DvtGaugeEventManager$$, $DvtDialGaugeDefaults$$.y = $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.y / $DvtGaugeEventManager$$, 
          $DvtDialGaugeDefaults$$.x = $DvtDialGaugeIndicator$$ ? $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ - $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtGaugeKeyboardHandler$$ - $DvtDialGaugeDefaults$$.width : $DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ * $DvtRatingGaugeDefaults$$.metricLabelBounds.x / $DvtGaugeKeyboardHandler$$, $DvtRatingGaugeDefaults$$._metricLabelBounds = $DvtDialGaugeDefaults$$);
          $DvtDialGaugeIndicator$$ = Math.min($DvtRatingGaugePeer$$.$w$ / $DvtGaugeKeyboardHandler$$, $DvtRatingGaugePeer$$.$h$ / $DvtGaugeEventManager$$);
          $DvtRatingGaugeDefaults$$._radius = $DvtRatingGaugeDefaults$$.radius * $DvtDialGaugeIndicator$$;
          $DvtRatingGaugeDefaults$$._tickLabelHeight = $DvtRatingGaugeDefaults$$.tickLabelHeight * $DvtRatingGaugePeer$$.$h$ / $DvtGaugeEventManager$$;
          $DvtRatingGaugeDefaults$$._tickLabelWidth = $DvtRatingGaugeDefaults$$.tickLabelWidth * $DvtRatingGaugePeer$$.$w$ / $DvtGaugeKeyboardHandler$$;
          return $DvtStatusMeterGaugeCircularIndicator$$
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtDialGaugeRenderer$$.$_getIndicatorLength$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isTouchDevice$() ? 2 * $DvtDialGaugeIndicator$$ : $DvtDialGaugeIndicator$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.images;
    if($DvtStatusMeterGaugeDefaults$$ && 0 < $DvtStatusMeterGaugeDefaults$$.length) {
      for(var $DvtLedGaugeDefaults$$ = 0;$DvtLedGaugeDefaults$$ < $DvtStatusMeterGaugeDefaults$$.length;$DvtLedGaugeDefaults$$++) {
        var $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeDefaults$$[$DvtLedGaugeDefaults$$], $DvtDialGaugeIndicator$$ = $DvtGaugeKeyboardHandler$$.src, $DvtGaugeEventManager$$ = $DvtGaugeKeyboardHandler$$.width, $DvtGaugeKeyboardHandler$$ = $DvtGaugeKeyboardHandler$$.height, $DvtGaugeDefaults$$ = $DvtDialGaugeIndicator$$ && -1 < $DvtDialGaugeIndicator$$.search(".svg");
        0 == $DvtLedGaugeDefaults$$ && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeEventManager$$, $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeKeyboardHandler$$);
        if($DvtGaugeDefaults$$ || $DvtGaugeKeyboardHandler$$ >= $DvtDialGaugeDefaults$$ || $DvtLedGaugeDefaults$$ == $DvtStatusMeterGaugeDefaults$$.length - 1) {
          return $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$Image$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, 0, 0, $DvtGaugeEventManager$$, $DvtGaugeKeyboardHandler$$), $DvtGaugeDefaults$$ && $dvt$$3$$.$Agent$.$isPlatformWebkit$() && $dvt$$3$$.$ImageLoader$.$loadImage$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeIndicator$$, $dvt$$3$$.$Obj$.$createCallback$($DvtDialGaugeDefaults$$, $DvtDialGaugeDefaults$$.$__setDimensions$)) && ($DvtDialGaugeDefaults$$.$setWidth$($DvtGaugeEventManager$$), 
          $DvtDialGaugeDefaults$$.$setHeight$($DvtGaugeKeyboardHandler$$)), !isNaN($DvtRatingGaugeDefaults$$.anchorX) && !isNaN($DvtRatingGaugeDefaults$$.anchorY) && ($DvtRatingGaugeDefaults$$._anchorX = $DvtRatingGaugeDefaults$$.anchorX * $DvtGaugeEventManager$$ / $DvtStatusMeterGaugeCircularIndicator$$, $DvtRatingGaugeDefaults$$._anchorY = $DvtRatingGaugeDefaults$$.anchorY * $DvtGaugeKeyboardHandler$$ / $DvtStatusMeterGaugeIndicator$$), $DvtDialGaugeDefaults$$
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background;
    $DvtRatingGaugeEventManager$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$()) ? 180 - $DvtRatingGaugePeer$$.startAngle : $DvtRatingGaugePeer$$.startAngle;
    return Math.PI * (90 - $DvtRatingGaugeEventManager$$) / 180
  };
  $DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.background, $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.min, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.max;
    $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$), $DvtDialGaugeDefaults$$);
    $DvtDialGaugeDefaults$$ = ($DvtRatingGaugePeer$$ - $DvtDialGaugeDefaults$$) / ($DvtRatingGaugeDefaults$$ - $DvtDialGaugeDefaults$$);
    $DvtRatingGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    return Math.PI * (90 - (($DvtRatingGaugeDefaults$$ ? 180 - $DvtDialGaugeIndicator$$.startAngle : $DvtDialGaugeIndicator$$.startAngle) - $DvtDialGaugeDefaults$$ * ($DvtRatingGaugeDefaults$$ ? -$DvtDialGaugeIndicator$$.angleExtent : $DvtDialGaugeIndicator$$.angleExtent))) / 180
  };
  $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().background, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return!isNaN($DvtDialGaugeIndicator$$) && !isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$3$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$) : new $dvt$$3$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$ / 2)
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = Math.min($DvtRatingGaugeEventManager$$.$w$, $DvtRatingGaugeEventManager$$.$h$) / 2;
    return $dvt$$3$$.$getOptions$().background.indicatorLength * $DvtRatingGaugePeer$$
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$().indicator, $DvtDialGaugeIndicator$$ = $DvtRatingGaugeDefaults$$._anchorX, $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeDefaults$$._anchorY;
    return!isNaN($DvtDialGaugeIndicator$$) && !isNaN($DvtRatingGaugeDefaults$$) ? new $dvt$$3$$.$Point$($DvtDialGaugeIndicator$$, $DvtRatingGaugeDefaults$$) : new $dvt$$3$$.$Point$($DvtRatingGaugePeer$$.x + $DvtRatingGaugePeer$$.$w$ / 2, $DvtRatingGaugePeer$$.y + $DvtRatingGaugePeer$$.$h$)
  };
  $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    return $DvtDialGaugeRenderer$$.$_getIndicatorLength$($dvt$$3$$, $DvtRatingGaugeEventManager$$) / $DvtRatingGaugePeer$$.$h$
  };
  $DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    if("on" == $DvtDialGaugeIndicator$$.metricLabel.rendered) {
      var $DvtDialGaugeDefaults$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.value, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeCircularIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeIndicator$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.x + 
      $DvtRatingGaugeDefaults$$.$w$ / 2, $DvtLedGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.y + $DvtRatingGaugeDefaults$$.$h$ / 2, $DvtGaugeKeyboardHandler$$ = $DvtRatingGaugeDefaults$$.$w$, $DvtGaugeEventManager$$ = $DvtRatingGaugeDefaults$$.$h$, $DvtGaugeDefaults$$ = $DvtDialGaugeIndicator$$.background._metricLabelBounds;
      $DvtGaugeDefaults$$ && ($DvtStatusMeterGaugeDefaults$$ = $DvtGaugeDefaults$$.x + $DvtGaugeDefaults$$.width / 2, $DvtLedGaugeDefaults$$ = $DvtGaugeDefaults$$.y + $DvtGaugeDefaults$$.height / 2, $DvtRatingGaugeDefaults$$.$w$ = $DvtGaugeDefaults$$.width, $DvtRatingGaugeDefaults$$.$h$ = $DvtGaugeDefaults$$.height);
      $DvtStatusMeterGaugeDefaults$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeDefaults$$, $DvtLedGaugeDefaults$$);
      !$DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
      $DvtStatusMeterGaugeDefaults$$.$setCSSStyle$($DvtDialGaugeIndicator$$.metricLabel.style);
      $DvtDialGaugeIndicator$$ = ($DvtDialGaugeIndicator$$ = parseInt($DvtDialGaugeIndicator$$.metricLabel.style.$getFontSize$())) ? parseInt($DvtDialGaugeIndicator$$) : $JSCompiler_alias_NULL$$;
      $DvtDialGaugeIndicator$$ || ($DvtDialGaugeIndicator$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtDialGaugeDefaults$$, $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeIndicator$$], $DvtStatusMeterGaugeDefaults$$, $DvtRatingGaugeDefaults$$), $DvtStatusMeterGaugeDefaults$$.$setTextString$($DvtDialGaugeDefaults$$), $DvtStatusMeterGaugeDefaults$$.$setFontSize$($DvtDialGaugeIndicator$$));
      $DvtStatusMeterGaugeDefaults$$.$alignCenter$();
      $DvtStatusMeterGaugeDefaults$$.$alignMiddle$();
      $dvt$$3$$.$TextUtils$.$fitText$($DvtStatusMeterGaugeDefaults$$, $DvtGaugeKeyboardHandler$$, $DvtGaugeEventManager$$, $DvtRatingGaugePeer$$) && ($DvtRatingGaugeEventManager$$.$__label$ = $DvtStatusMeterGaugeDefaults$$)
    }
  };
  $DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getOptions$(), $DvtDialGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtRatingGaugeEventManager$$.$getCtx$());
    if($DvtDialGaugeIndicator$$.background.radius && $DvtDialGaugeIndicator$$.background.majorTickCount) {
      var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeIndicator$$.background._radius, $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.min, $DvtStatusMeterGaugeDefaults$$ = $DvtDialGaugeIndicator$$.max, $DvtLedGaugeDefaults$$ = $DvtDialGaugeIndicator$$.background.majorTickCount, $DvtGaugeKeyboardHandler$$ = 12, $DvtGaugeEventManager$$ = new $dvt$$3$$.$Rectangle$($DvtGauge$$, $DvtGaugeDataUtils$$, $DvtRatingGaugeDefaults$$.$w$, $DvtRatingGaugeDefaults$$.$h$), $DvtGaugeDefaults$$ = 
      $DvtDialGaugeIndicator$$.metricLabel.style.$getStyle$("font-size");
      $DvtDialGaugeIndicator$$.background._tickLabelHeight && !$DvtGaugeDefaults$$ && ($DvtGaugeEventManager$$.$h$ = $DvtDialGaugeIndicator$$.background._tickLabelHeight);
      $DvtDialGaugeIndicator$$.background._tickLabelWidth && !$DvtGaugeDefaults$$ && ($DvtGaugeEventManager$$.$w$ = $DvtDialGaugeIndicator$$.background._tickLabelWidth);
      if(!$DvtGaugeDefaults$$) {
        var $DvtGaugeAutomation$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), "", $DvtGauge$$, $DvtGaugeDataUtils$$), $DvtGaugeKeyboardHandler$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.max, $DvtRatingGaugeEventManager$$), $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtDialGaugeIndicator$$.min, $DvtRatingGaugeEventManager$$)], $DvtGaugeAutomation$$, $DvtGaugeEventManager$$)
      }
      for($DvtGaugeDefaults$$ = 0;$DvtGaugeDefaults$$ < $DvtLedGaugeDefaults$$;$DvtGaugeDefaults$$++) {
        var $DvtGauge$$ = $DvtStatusMeterGaugeIndicator$$ + Math.abs($DvtStatusMeterGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$) * $DvtGaugeDefaults$$ / ($DvtLedGaugeDefaults$$ - 1);
        $DvtDialGaugeDefaults$$ && ($DvtGauge$$ = $DvtStatusMeterGaugeIndicator$$ + Math.abs($DvtStatusMeterGaugeDefaults$$ - $DvtStatusMeterGaugeIndicator$$) * ($DvtLedGaugeDefaults$$ - 1 - $DvtGaugeDefaults$$) / ($DvtLedGaugeDefaults$$ - 1));
        var $DvtGaugeAutomation$$ = $DvtGaugeRenderer$$.$formatTickLabelValue$($DvtGauge$$, $DvtRatingGaugeEventManager$$), $DvtGaugeDataUtils$$ = $DvtDialGaugeRenderer$$.$_getRotation$($DvtRatingGaugeEventManager$$, $DvtGauge$$), $DvtGaugeStyleUtils$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($DvtRatingGaugeEventManager$$, $DvtRatingGaugeDefaults$$), $DvtGauge$$ = $DvtGaugeStyleUtils$$.x + $DvtStatusMeterGaugeCircularIndicator$$ * Math.cos($DvtGaugeDataUtils$$ - Math.PI / 2), $DvtGaugeDataUtils$$ = 
        $DvtGaugeStyleUtils$$.y + $DvtStatusMeterGaugeCircularIndicator$$ * Math.sin($DvtGaugeDataUtils$$ - Math.PI / 2), $DvtGaugeAutomation$$ = new $dvt$$3$$.$OutputText$($DvtRatingGaugeEventManager$$.$getCtx$(), $DvtGaugeAutomation$$, $DvtGauge$$, $DvtGaugeDataUtils$$);
        !$DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("color") && $DvtDialGaugeIndicator$$.background._isDark && $DvtDialGaugeIndicator$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
        $DvtGaugeAutomation$$.$setCSSStyle$($DvtDialGaugeIndicator$$.tickLabel.style);
        $DvtDialGaugeIndicator$$.tickLabel.style.$getStyle$("font-size") || $DvtGaugeAutomation$$.$setFontSize$($DvtGaugeKeyboardHandler$$);
        $DvtGaugeAutomation$$.$alignCenter$();
        $DvtGaugeAutomation$$.$alignMiddle$();
        $dvt$$3$$.$TextUtils$.$fitText$($DvtGaugeAutomation$$, $DvtGaugeEventManager$$.$w$ + 0.5, $DvtGaugeEventManager$$.$h$ + 0.5, $DvtRatingGaugePeer$$)
      }
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtDialGaugeIndicator$$, $dvt$$3$$.$Container$);
  $DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($DvtRatingGaugeEventManager$$) {
    var $DvtRatingGaugePeer$$ = new $dvt$$3$$.$Matrix$;
    $DvtRatingGaugePeer$$.rotate($DvtRatingGaugeEventManager$$);
    this.$setMatrix$($DvtRatingGaugePeer$$);
    this.$_angleRads$ = $DvtRatingGaugeEventManager$$
  };
  $DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
    return[this.$_angleRads$]
  };
  $DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($dvt$$3$$) {
    $dvt$$3$$ && 1 == $dvt$$3$$.length && this.$setAngle$($dvt$$3$$[0])
  };
  $dvt$$3$$.$RatingGauge$ = $JSCompiler_emptyFn$$();
  $dvt$$3$$.$Obj$.$createSubclass$($dvt$$3$$.$RatingGauge$, $DvtGauge$$);
  $dvt$$3$$.$RatingGauge$.newInstance = function $$dvt$$3$$$$RatingGauge$$newInstance$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$RatingGauge$;
    $DvtDialGaugeIndicator$$.Init($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$);
    return $DvtDialGaugeIndicator$$
  };
  $dvt$$3$$.$RatingGauge$.prototype.Init = function $$dvt$$3$$$$RatingGauge$$$Init$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$) {
    $dvt$$3$$.$RatingGauge$.$superclass$.Init.call(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
    this.$Defaults$ = new $DvtRatingGaugeDefaults$$
  };
  $dvt$$3$$.$RatingGauge$.prototype.$SetOptions$ = function $$dvt$$3$$$$RatingGauge$$$$SetOptions$$($DvtRatingGaugeEventManager$$) {
    $dvt$$3$$.$RatingGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($DvtRatingGaugeEventManager$$))
  };
  $dvt$$3$$.$RatingGauge$.prototype.$Render$ = function $$dvt$$3$$$$RatingGauge$$$$Render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = this.$Options$.__layout.outerGap, $DvtDialGaugeDefaults$$ = this.$Options$.max, $DvtStatusMeterGaugeCircularIndicator$$ = "vertical" == this.$Options$.orientation, $DvtStatusMeterGaugeIndicator$$ = "none" != this.$Options$.preserveAspectRatio;
    this.$Options$.selectedState.source && $DvtStatusMeterGaugeIndicator$$ ? $dvt$$3$$.$ImageLoader$.$loadImage$(this.$getCtx$(), this.$Options$.selectedState.source, $dvt$$3$$.$Obj$.$createCallback$(this, function($DvtStatusMeterGaugeIndicator$$) {
      $DvtStatusMeterGaugeIndicator$$ && ($DvtStatusMeterGaugeIndicator$$.width && $DvtStatusMeterGaugeIndicator$$.height) && ($DvtStatusMeterGaugeIndicator$$ = $DvtStatusMeterGaugeIndicator$$.width / $DvtStatusMeterGaugeIndicator$$.height, this.$__shapeWidth$ = $DvtStatusMeterGaugeCircularIndicator$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeIndicator$$ / $DvtDialGaugeDefaults$$) : Math.min(($DvtRatingGaugeDefaults$$ - 
      2 * $DvtDialGaugeIndicator$$) * $DvtStatusMeterGaugeIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$), this.$__shapeHeight$ = this.$__shapeWidth$ / $DvtStatusMeterGaugeIndicator$$, this.$__bounds$ = $DvtStatusMeterGaugeCircularIndicator$$ ? new $dvt$$3$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) / 2, $DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * 
      $DvtDialGaugeDefaults$$) : new $dvt$$3$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtDialGaugeDefaults$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$))
    })) : ($DvtStatusMeterGaugeIndicator$$ ? this.$__shapeHeight$ = this.$__shapeWidth$ = $DvtStatusMeterGaugeCircularIndicator$$ ? Math.min($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$) : Math.min($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$, ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$) : (this.$__shapeWidth$ = $DvtStatusMeterGaugeCircularIndicator$$ ? $DvtRatingGaugePeer$$ - 
    2 * $DvtDialGaugeIndicator$$ : ($DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$, this.$__shapeHeight$ = $DvtStatusMeterGaugeCircularIndicator$$ ? ($DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$) / $DvtDialGaugeDefaults$$ : $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), this.$__bounds$ = $DvtStatusMeterGaugeCircularIndicator$$ ? new $dvt$$3$$.$Rectangle$($DvtDialGaugeIndicator$$, ($DvtRatingGaugeDefaults$$ - this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) / 
    2, $DvtRatingGaugePeer$$ - 2 * $DvtDialGaugeIndicator$$, this.$__shapeHeight$ * $DvtDialGaugeDefaults$$) : new $dvt$$3$$.$Rectangle$(($DvtRatingGaugePeer$$ - this.$__shapeWidth$ * $DvtDialGaugeDefaults$$) / 2, $DvtDialGaugeIndicator$$, this.$__shapeWidth$ * $DvtDialGaugeDefaults$$, $DvtRatingGaugeDefaults$$ - 2 * $DvtDialGaugeIndicator$$), $DvtRatingGaugeRenderer$$.$render$(this, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$))
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__getLogicalObject$ = function $$dvt$$3$$$$RatingGauge$$$$__getLogicalObject$$() {
    return new $DvtRatingGaugePeer$$(this)
  };
  $dvt$$3$$.$RatingGauge$.prototype.$GetValueAt$ = function $$dvt$$3$$$$RatingGauge$$$$GetValueAt$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = "vertical" == this.$Options$.orientation ? this.$__shapeHeight$ : this.$__shapeWidth$;
    if($DvtGaugeDataUtils$$.$hasData$(this)) {
      if("vertical" == this.$Options$.orientation) {
        $DvtRatingGaugePeer$$ = Math.max(Math.min($DvtRatingGaugePeer$$, this.$__bounds$.y + this.$__bounds$.$h$), this.$__bounds$.y), $DvtDialGaugeIndicator$$ = Math.max((this.$__bounds$.y + this.$__bounds$.$h$ - $DvtRatingGaugePeer$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min)
      }else {
        $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$__bounds$.x + this.$__bounds$.$w$), this.$__bounds$.x);
        var $DvtDialGaugeIndicator$$ = 0, $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? Math.max((this.$__bounds$.x + this.$__bounds$.$w$ - $DvtRatingGaugeEventManager$$) / $DvtRatingGaugeDefaults$$, this.$Options$.min) : Math.max(($DvtRatingGaugeEventManager$$ - this.$__bounds$.x) / $DvtRatingGaugeDefaults$$, this.$Options$.min)
      }
      return $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $DvtDialGaugeIndicator$$)
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processHoverEnd$ = function $$dvt$$3$$$$RatingGauge$$$$__processHoverEnd$$() {
    this.$__updateClipRects$(this.$Options$.value, "render");
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, this.$Options$.value, $JSCompiler_alias_FALSE$$))
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeStart$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeStart$$($dvt$$3$$, $DvtRatingGaugeEventManager$$) {
    this.$__processValueChangeMove$($dvt$$3$$, $DvtRatingGaugeEventManager$$)
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeMove$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeMove$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$__updateClipRects$($DvtRatingGaugeDefaults$$, "hover");
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, $DvtRatingGaugeDefaults$$, $JSCompiler_alias_FALSE$$))
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__processValueChangeEnd$ = function $$dvt$$3$$$$RatingGauge$$$$__processValueChangeEnd$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    var $DvtRatingGaugeDefaults$$ = this.$Options$.value;
    this.$Options$.value = this.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$);
    this.$Options$.changed = $JSCompiler_alias_TRUE$$;
    this.$render$();
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, $JSCompiler_alias_FALSE$$));
    this.dispatchEvent($dvt$$3$$.$EventFactory$.$newValueChangeEvent$($DvtRatingGaugeDefaults$$, this.$Options$.value, $JSCompiler_alias_TRUE$$))
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__updateClipRects$ = function $$dvt$$3$$$$RatingGauge$$$$__updateClipRects$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    if($DvtGaugeDataUtils$$.$hasData$(this)) {
      $DvtRatingGaugeDefaults$$ || ($DvtRatingGaugeDefaults$$ = this.$_container$);
      var $DvtDialGaugeIndicator$$ = $dvt$$3$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtDialGaugeDefaults$$ = "vertical" == this.$Options$.orientation, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ ? this.$__shapeHeight$ : this.$__shapeWidth$;
      $DvtRatingGaugeEventManager$$ = Math.max(Math.min($DvtRatingGaugeEventManager$$, this.$Options$.max), 0);
      var $DvtStatusMeterGaugeIndicator$$ = 0, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeCircularIndicator$$, $DvtLedGaugeDefaults$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeCircularIndicator$$;
      "render" == $DvtRatingGaugePeer$$ && ($DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$ * $DvtStatusMeterGaugeCircularIndicator$$, $DvtStatusMeterGaugeDefaults$$ = 0);
      $DvtDialGaugeDefaults$$ ? ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("unsel" + this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$, this.$__bounds$.$h$ - $DvtLedGaugeDefaults$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("sel" + 
      this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y + this.$__bounds$.$h$ - $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$w$, $DvtStatusMeterGaugeIndicator$$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2), $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$("hover" + this.getId()), $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y + this.$__bounds$.$h$ - 
      $DvtStatusMeterGaugeDefaults$$, this.$__bounds$.$w$, $DvtStatusMeterGaugeDefaults$$)) : $DvtDialGaugeIndicator$$ ? ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("unsel" + this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtLedGaugeDefaults$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), 
      $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("sel" + this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + this.$__bounds$.$w$ - $DvtLedGaugeDefaults$$, this.$__bounds$.y, $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2), $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$("hover" + this.getId()), $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x + 
      this.$__bounds$.$w$ - $DvtLedGaugeDefaults$$, this.$__bounds$.y, $DvtStatusMeterGaugeDefaults$$, this.$__bounds$.$h$)) : ($DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(0), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("unsel" + this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x + $DvtLedGaugeDefaults$$, this.$__bounds$.y, this.$__bounds$.$w$ - $DvtLedGaugeDefaults$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), 
      $DvtRatingGaugePeer$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(1), $DvtDialGaugeIndicator$$ = new $dvt$$3$$.$ClipPath$("sel" + this.getId()), $DvtDialGaugeIndicator$$.$addRect$(this.$__bounds$.x, this.$__bounds$.y, $DvtStatusMeterGaugeIndicator$$, this.$__bounds$.$h$), $DvtRatingGaugePeer$$.$setClipPath$($DvtDialGaugeIndicator$$), $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.$getChildAt$(2), $DvtRatingGaugePeer$$ = new $dvt$$3$$.$ClipPath$("hover" + this.getId()), $DvtRatingGaugePeer$$.$addRect$(this.$__bounds$.x, 
      this.$__bounds$.y, $DvtStatusMeterGaugeDefaults$$, this.$__bounds$.$h$));
      $DvtStatusMeterGaugeIndicator$$.$setClipPath$($DvtRatingGaugePeer$$);
      this.$UpdateAriaLiveValue$($DvtRatingGaugeDefaults$$, $DvtRatingGaugeEventManager$$)
    }
  };
  $dvt$$3$$.$RatingGauge$.prototype.$__getRatingGaugeItem$ = function $$dvt$$3$$$$RatingGauge$$$$__getRatingGaugeItem$$($dvt$$3$$) {
    return this.$_container$.$getChildAt$(0).$getChildAt$($dvt$$3$$)
  };
  $dvt$$3$$.$RatingGauge$.prototype.$CreateEventManager$ = function $$dvt$$3$$$$RatingGauge$$$$CreateEventManager$$() {
    return new $DvtRatingGaugeEventManager$$(this)
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$);
  $DvtRatingGaugeDefaults$$.$SKIN_ALTA$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:$JSCompiler_alias_NULL$$}};
  $DvtRatingGaugeDefaults$$.$VERSION_1$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, preserveAspectRatio:"meet", step:1};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugePeer$$, $dvt$$3$$.$SimpleObjPeer$);
  $DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($dvt$$3$$, $DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$) {
    $dvt$$3$$ = this.$_gauge$.$getOptions$();
    $DvtRatingGaugeEventManager$$ = this.$_gauge$.$getEventManager$().$IsMouseEditing$ ? $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$)) : $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
    return($DvtRatingGaugeEventManager$$ = $DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $DvtRatingGaugeEventManager$$)) && $DvtRatingGaugeEventManager$$.shortDesc ? $DvtRatingGaugeEventManager$$.shortDesc : $dvt$$3$$.shortDesc
  };
  var $DvtRatingGaugeRenderer$$ = {};
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeRenderer$$, $dvt$$3$$.$Obj$);
  $DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$) {
    if($DvtGaugeDataUtils$$.$hasData$($DvtRatingGaugeEventManager$$)) {
      $DvtRatingGaugeDefaults$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($DvtRatingGaugeEventManager$$);
      $DvtDialGaugeIndicator$$ = $DvtGaugeDataUtils$$.$getThreshold$($DvtRatingGaugeEventManager$$, $DvtDialGaugeIndicator$$);
      var $DvtDialGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.selectedState.color, $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeDefaults$$.changedState.color, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeDefaults$$.selectedState.borderColor, $DvtStatusMeterGaugeDefaults$$ = $DvtRatingGaugeDefaults$$.changedState.borderColor;
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.color && ($DvtStatusMeterGaugeCircularIndicator$$ = $DvtDialGaugeDefaults$$ = $DvtDialGaugeIndicator$$.color);
      $DvtDialGaugeIndicator$$ && $DvtDialGaugeIndicator$$.borderColor && ($DvtStatusMeterGaugeDefaults$$ = $DvtStatusMeterGaugeIndicator$$ = $DvtDialGaugeIndicator$$.borderColor);
      $DvtDialGaugeIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.unselectedState.shape, color:$DvtRatingGaugeDefaults$$.unselectedState.color, borderColor:$DvtRatingGaugeDefaults$$.unselectedState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.unselectedState.source};
      $DvtDialGaugeDefaults$$ = {value:0, type:$DvtRatingGaugeDefaults$$.selectedState.shape, color:$DvtDialGaugeDefaults$$, borderColor:$DvtStatusMeterGaugeIndicator$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.selectedState.source};
      $DvtStatusMeterGaugeCircularIndicator$$ = {value:0, type:$DvtRatingGaugeDefaults$$.changedState.shape, color:$DvtStatusMeterGaugeCircularIndicator$$, borderColor:$DvtStatusMeterGaugeDefaults$$, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.changedState.source};
      $DvtStatusMeterGaugeDefaults$$ = {value:0, type:$DvtRatingGaugeDefaults$$.hoverState.shape, color:$DvtRatingGaugeDefaults$$.hoverState.color, borderColor:$DvtRatingGaugeDefaults$$.hoverState.borderColor, visualEffects:$DvtRatingGaugeDefaults$$.visualEffects, source:$DvtRatingGaugeDefaults$$.hoverState.source};
      "dot" == $DvtRatingGaugeDefaults$$.unselectedState.shape && ($DvtDialGaugeIndicator$$.type = "circle", $DvtDialGaugeIndicator$$.visualEffects = "none", $DvtDialGaugeIndicator$$.size = 0.05);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtDialGaugeIndicator$$);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$.changed ? $DvtStatusMeterGaugeCircularIndicator$$ : $DvtDialGaugeDefaults$$);
      $DvtRatingGaugeRenderer$$.$_createShapes$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtStatusMeterGaugeDefaults$$);
      $DvtRatingGaugeEventManager$$.$__updateClipRects$($DvtRatingGaugeDefaults$$.value, "render", $DvtRatingGaugePeer$$)
    }else {
      $DvtGaugeRenderer$$.$renderEmptyText$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, new $dvt$$3$$.$Rectangle$(0, 0, $DvtRatingGaugeDefaults$$, $DvtDialGaugeIndicator$$))
    }
  };
  $DvtRatingGaugeRenderer$$.$_createShapes$ = function $$DvtRatingGaugeRenderer$$$$_createShapes$$($DvtRatingGaugeEventManager$$, $DvtRatingGaugePeer$$, $DvtRatingGaugeDefaults$$) {
    var $DvtDialGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$getCtx$(), $DvtDialGaugeDefaults$$ = new $dvt$$3$$.$Container$($DvtDialGaugeIndicator$$);
    $DvtRatingGaugePeer$$.$addChild$($DvtDialGaugeDefaults$$);
    $DvtRatingGaugePeer$$ = $DvtRatingGaugeEventManager$$.$getOptions$();
    var $DvtStatusMeterGaugeCircularIndicator$$ = $DvtRatingGaugeEventManager$$.$__bounds$, $DvtStatusMeterGaugeIndicator$$ = $DvtRatingGaugeEventManager$$.$__shapeWidth$;
    $DvtRatingGaugeEventManager$$ = $DvtRatingGaugeEventManager$$.$__shapeHeight$;
    for(var $DvtStatusMeterGaugeDefaults$$ = 0;$DvtStatusMeterGaugeDefaults$$ < $DvtRatingGaugePeer$$.max;$DvtStatusMeterGaugeDefaults$$++) {
      var $DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$;
      "vertical" == $DvtRatingGaugePeer$$.orientation ? ($DvtLedGaugeDefaults$$ = $DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeCircularIndicator$$.$w$ / 2 - $DvtStatusMeterGaugeIndicator$$ / 2, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ - ($DvtStatusMeterGaugeDefaults$$ + 1) * $DvtRatingGaugeEventManager$$) : ($DvtLedGaugeDefaults$$ = $dvt$$3$$.$Agent$.$isRightToLeft$($DvtDialGaugeIndicator$$) ? $DvtStatusMeterGaugeCircularIndicator$$.x + 
      $DvtStatusMeterGaugeCircularIndicator$$.$w$ - ($DvtStatusMeterGaugeDefaults$$ + 1) * $DvtStatusMeterGaugeIndicator$$ : $DvtStatusMeterGaugeCircularIndicator$$.x + $DvtStatusMeterGaugeDefaults$$ * $DvtStatusMeterGaugeIndicator$$, $DvtGaugeKeyboardHandler$$ = $DvtStatusMeterGaugeCircularIndicator$$.y + $DvtStatusMeterGaugeCircularIndicator$$.$h$ / 2 - $DvtRatingGaugeEventManager$$ / 2);
      var $DvtGaugeEventManager$$;
      $DvtRatingGaugeDefaults$$.source ? ($DvtGaugeEventManager$$ = new $dvt$$3$$.$ImageMarker$($DvtDialGaugeIndicator$$, $DvtLedGaugeDefaults$$ + $DvtStatusMeterGaugeIndicator$$ / 2, $DvtGaugeKeyboardHandler$$ + $DvtRatingGaugeEventManager$$ / 2, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeEventManager$$, $JSCompiler_alias_NULL$$, $DvtRatingGaugeDefaults$$.source), $DvtGaugeEventManager$$.$setPreserveAspectRatio$("none")) : "none" != $DvtRatingGaugeDefaults$$.type && ($DvtGaugeEventManager$$ = 
      $dvt$$3$$.$LedGauge$.newInstance($DvtDialGaugeIndicator$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$), $DvtGaugeEventManager$$.$setTranslate$($DvtLedGaugeDefaults$$, $DvtGaugeKeyboardHandler$$), $DvtGaugeEventManager$$.$render$($DvtRatingGaugeDefaults$$, $DvtStatusMeterGaugeIndicator$$, $DvtRatingGaugeEventManager$$));
      $DvtGaugeEventManager$$ && $DvtDialGaugeDefaults$$.$addChild$($DvtGaugeEventManager$$)
    }
  };
  $dvt$$3$$.$Obj$.$createSubclass$($DvtRatingGaugeEventManager$$, $DvtGaugeEventManager$$);
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOver$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOver$$($dvt$$3$$) {
    if(this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$) {
      var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
      this.$_gauge$.$__processValueChangeStart$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y);
      this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$
    }
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$3$$)
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseOut$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseOut$$($dvt$$3$$) {
    this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$ && (this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY), this.$_gauge$.$__processHoverEnd$(), this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$3$$)
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseMove$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseMove$$($dvt$$3$$) {
    var $DvtRatingGaugePeer$$ = this.$GetRelativePosition$($dvt$$3$$.pageX, $dvt$$3$$.pageY);
    this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$ && (!this.$IsMouseEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($DvtRatingGaugePeer$$.x, $DvtRatingGaugePeer$$.y)) && (this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$);
    $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$3$$)
  };
  $DvtRatingGaugeEventManager$$.prototype.$OnMouseDown$ = function $$DvtRatingGaugeEventManager$$$$$OnMouseDown$$($dvt$$3$$) {
    $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$3$$)
  };
  $DvtRatingGaugeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtRatingGaugeEventManager$$$$$ProcessKeyboardEvent$$($dvt$$3$$) {
    this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$;
    return $DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $dvt$$3$$)
  };
  $DvtRatingGaugeEventManager$$.prototype.$IsShowingTooltipWhileEditing$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "DialGauge", $dvt$$3$$.$DialGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "LedGauge", $dvt$$3$$.$LedGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "RatingGauge", $dvt$$3$$.$RatingGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$, "StatusMeterGauge", $dvt$$3$$.$StatusMeterGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "DialGauge", $dvt$$3$$.$DialGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "LedGauge", $dvt$$3$$.$LedGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "RatingGauge", $dvt$$3$$.$RatingGauge$);
  $dvt$$3$$.$exportProperty$($dvt$$3$$.$DialGauge$, "StatusMeterGauge", $dvt$$3$$.$StatusMeterGauge$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "getAutomation", $DvtGauge$$.prototype.$getAutomation$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "destroy", $DvtGauge$$.prototype.$destroy$);
  $dvt$$3$$.$exportProperty$($DvtGauge$$.prototype, "render", $DvtGauge$$.prototype.$render$);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getDomElementForSubId", $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getValue", $DvtGaugeAutomation$$.prototype.getValue);
  $dvt$$3$$.$exportProperty$($DvtGaugeAutomation$$.prototype, "getMetricLabel", $DvtGaugeAutomation$$.prototype.$getMetricLabel$);
  $dvt$$3$$.$LedGaugeRenderer$ = $DvtLedGaugeRenderer$$
})(dvt);

  return dvt;
});
