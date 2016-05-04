/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
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

(function($dvt$$8$$) {
  function $DvtTrainEvent$$($dvt$$8$$) {
    this.Init($DvtTrainEvent$$.$TYPE$);
    this.type = this.$getType$();
    this.$_index$ = $dvt$$8$$
  }
  function $DvtAccordionDefaults$$() {
    this.Init({skyros:$DvtAccordionDefaults$$.$VERSION_1$, alta:$DvtAccordionDefaults$$.$SKIN_ALTA$})
  }
  function $DvtPanelDrawerKeyboardHandler$$($dvt$$8$$, $DvtTrainEvent$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$)
  }
  function $DvtPanelDrawerEventManager$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)
  }
  function $DvtPanelDrawerTab$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  }
  function $DvtBreadcrumbsPeer$$($dvt$$8$$, $DvtTrainEvent$$) {
    this.Init();
    this.$_id$ = $dvt$$8$$;
    this.$_bDrillable$ = $JSCompiler_alias_FALSE$$;
    this.$_displayable$ = $DvtTrainEvent$$
  }
  function $DvtBreadcrumbsEventManager$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_breadcrumbs$ = $dvt$$8$$
  }
  $dvt$$8$$.$AttrGroups$ = $JSCompiler_emptyFn$$();
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$AttrGroups$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$AttrGroups$.prototype.get = $JSCompiler_emptyFn$$();
  $dvt$$8$$.$DiscreteAttrGroups$ = function $$dvt$$8$$$$DiscreteAttrGroups$$() {
    this.$_results$ = []
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$DiscreteAttrGroups$, $dvt$$8$$.$AttrGroups$);
  $dvt$$8$$.$DiscreteAttrGroups$.prototype.add = function $$dvt$$8$$$$DiscreteAttrGroups$$$add$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_results$.push({group:$dvt$$8$$, $groupLabel$:$DvtTrainEvent$$, $params$:$DvtAccordionDefaults$$})
  };
  $dvt$$8$$.$DiscreteAttrGroups$.prototype.get = function $$dvt$$8$$$$DiscreteAttrGroups$$$get$($dvt$$8$$) {
    if($dvt$$8$$ === $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_results$.length;$DvtTrainEvent$$++) {
      if(this.$_results$[$DvtTrainEvent$$].group == $dvt$$8$$) {
        return this.$_results$[$DvtTrainEvent$$].$params$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$DiscreteAttrGroups$.prototype.$getMappingsArray$ = function $$dvt$$8$$$$DiscreteAttrGroups$$$$getMappingsArray$$() {
    return this.$_results$.slice(0)
  };
  $dvt$$8$$.$ContinuousAttrGroups$ = function $$dvt$$8$$$$ContinuousAttrGroups$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.$_minValue$ = $dvt$$8$$;
    this.$_maxValue$ = $DvtTrainEvent$$;
    this.$_minLabel$ = $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$ : this.$_minValue$;
    this.$_maxLabel$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$ : this.$_maxValue$;
    this.$_ramp$ = $DvtPanelDrawerEventManager$$;
    this.$_range$ = this.$_maxValue$ - this.$_minValue$
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$ContinuousAttrGroups$, $dvt$$8$$.$AttrGroups$);
  $dvt$$8$$.$ContinuousAttrGroups$.prototype.get = function $$dvt$$8$$$$ContinuousAttrGroups$$$get$($dvt$$8$$) {
    if(isNaN($dvt$$8$$) || $dvt$$8$$ === $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $dvt$$8$$ = 0 < this.$_range$ ? ($dvt$$8$$ - this.$_minValue$) / this.$_range$ : 0.5;
    $dvt$$8$$ = Math.max(Math.min($dvt$$8$$, 1), 0);
    $dvt$$8$$ *= this.$_ramp$.length - 1;
    return $dvt$$8$$ === Math.round($dvt$$8$$) ? this.$_ramp$[$dvt$$8$$] : this.$_calcValue$(this.$_ramp$[Math.floor($dvt$$8$$)], this.$_ramp$[Math.ceil($dvt$$8$$)], $dvt$$8$$ - Math.floor($dvt$$8$$))
  };
  $dvt$$8$$.$ContinuousAttrGroups$.prototype.$getRamp$ = function $$dvt$$8$$$$ContinuousAttrGroups$$$$getRamp$$() {
    return this.$_ramp$.slice(0)
  };
  $dvt$$8$$.$ContinuousAttrGroups$.prototype.$getMinLabel$ = $JSCompiler_get$$("$_minLabel$");
  $dvt$$8$$.$ContinuousAttrGroups$.prototype.$_calcValue$ = function $$dvt$$8$$$$ContinuousAttrGroups$$$$_calcValue$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    return $dvt$$8$$.$ColorUtils$.$interpolateColor$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  $dvt$$8$$.$LegendAttrGroupsRenderer$ = $JSCompiler_emptyFn$$();
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$LegendAttrGroupsRenderer$, $dvt$$8$$.$Obj$);
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$ = 0.4;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$ = 1;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$ = 5;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_LABEL_SIZE$ = 11;
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_LABEL_COLOR$ = "#636363";
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_LABEL_VALUE_COLOR$ = "#333333";
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$renderAttrGroups$ = function $$dvt$$8$$$$LegendAttrGroupsRenderer$$$renderAttrGroups$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) {
    var $DvtBreadcrumbsDefaults$$ = $JSCompiler_alias_NULL$$;
    $DvtBreadcrumbsPeer$$ && ($DvtBreadcrumbsPeer$$ instanceof $dvt$$8$$.$ContinuousAttrGroups$ ? $DvtBreadcrumbsDefaults$$ = $dvt$$8$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : $DvtBreadcrumbsPeer$$ instanceof $dvt$$8$$.$DiscreteAttrGroups$ && ($DvtBreadcrumbsDefaults$$ = $dvt$$8$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$($DvtTrainEvent$$, 
    $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$)));
    return $DvtBreadcrumbsDefaults$$
  };
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$ = function $$dvt$$8$$$$LegendAttrGroupsRenderer$$$_renderAttrGroupsContinuous$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = $dvt$$8$$.$Agent$.$isRightToLeft$($DvtTrainEvent$$), $DvtBreadcrumbsDefaults$$ = $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, $DvtBreadcrumbsRenderer$$ = new $dvt$$8$$.$Container$($DvtTrainEvent$$);
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsRenderer$$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerTab$$.$getMinLabel$();
    var $minLabel$$2$$ = new $dvt$$8$$.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, 0, $DvtBreadcrumbsDefaults$$);
    $minLabel$$2$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $minLabel$$2$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($minLabel$$2$$);
    var $gradientRect$$ = new $dvt$$8$$.$Rect$($DvtTrainEvent$$, 0, $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$, $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $DvtBreadcrumbsEventManager$$ ? $DvtPanelDrawerTab$$.$getRamp$().slice().reverse() : $DvtPanelDrawerTab$$.$getRamp$();
    $gradientRect$$.$setFill$(new $dvt$$8$$.$LinearGradientFill$(0, $gradientWidth_ramp$$1$$));
    $DvtBreadcrumbsPeer$$.borderColor && $gradientRect$$.$setSolidStroke$($DvtBreadcrumbsPeer$$.borderColor);
    $DvtBreadcrumbsRenderer$$.$addChild$($gradientRect$$);
    $gradientWidth_ramp$$1$$ = $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ + $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$;
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$_maxLabel$;
    $DvtTrainEvent$$ = new $dvt$$8$$.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, 0, $DvtBreadcrumbsDefaults$$);
    $DvtTrainEvent$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $DvtTrainEvent$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    $DvtBreadcrumbsEventManager$$ ? ($DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$measureDimensions$().$w$ + $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $minLabel$$2$$.$setX$($DvtBreadcrumbsPeer$$ + $gradientWidth_ramp$$1$$)) : ($DvtBreadcrumbsPeer$$ = $minLabel$$2$$.$measureDimensions$().$w$ + $dvt$$8$$.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $DvtTrainEvent$$.$setX$($DvtBreadcrumbsPeer$$ + 
    $gradientWidth_ramp$$1$$));
    $DvtAccordionDefaults$$.$associate$($gradientRect$$, new $dvt$$8$$.$SimpleObjPeer$($DvtPanelDrawerKeyboardHandler$$ + " - " + $DvtPanelDrawerTab$$));
    $DvtBreadcrumbsRenderer$$.$getDimensions$().$w$ > $DvtPanelDrawerEventManager$$ && ($DvtBreadcrumbsRenderer$$.removeChild($minLabel$$2$$), $DvtBreadcrumbsRenderer$$.removeChild($DvtTrainEvent$$), $gradientRect$$.$setTranslateX$(0));
    return $DvtBreadcrumbsRenderer$$
  };
  $dvt$$8$$.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$ = function $$dvt$$8$$$$LegendAttrGroupsRenderer$$$_renderAttrGroupsDiscrete$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = new $dvt$$8$$.$Container$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.$addChild$($DvtBreadcrumbsEventManager$$);
    $DvtAccordionDefaults$$ = [];
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMappingsArray$();
    for(var $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsDefaults$$++) {
      var $DvtBreadcrumbsRenderer$$ = $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$];
      $DvtAccordionDefaults$$.push({text:$DvtBreadcrumbsRenderer$$.$groupLabel$, color:$DvtBreadcrumbsRenderer$$.$params$.color, pattern:$DvtBreadcrumbsRenderer$$.$params$.pattern, borderColor:$DvtBreadcrumbsPeer$$.borderColor})
    }
    $DvtBreadcrumbsPeer$$ = {sections:[{items:$DvtAccordionDefaults$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$DvtBreadcrumbsPeer$$.$labelStyle$.toString()};
    $DvtAccordionDefaults$$ = $dvt$$8$$.$Legend$.newInstance($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.setId($JSCompiler_alias_NULL$$);
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.$getPreferredSize$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ * $dvt$$8$$.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$);
    $DvtAccordionDefaults$$.$render$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtAccordionDefaults$$.$getContentDimensions$();
    $DvtTrainEvent$$ = new $dvt$$8$$.$Rect$($DvtTrainEvent$$, 0, 0, $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtBreadcrumbsEventManager$$.$addChildAt$($DvtTrainEvent$$, 0);
    return $DvtBreadcrumbsEventManager$$
  };
  $dvt$$8$$.$BreadcrumbsDrillEvent$ = function $$dvt$$8$$$$BreadcrumbsDrillEvent$$($DvtTrainEvent$$) {
    this.Init($dvt$$8$$.$BreadcrumbsDrillEvent$.$TYPE$);
    this.$_id$ = $DvtTrainEvent$$
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$BreadcrumbsDrillEvent$, $dvt$$8$$.$BaseComponentEvent$);
  $dvt$$8$$.$BreadcrumbsDrillEvent$.$TYPE$ = "breadcrumbsDrill";
  $dvt$$8$$.$BreadcrumbsDrillEvent$.prototype.getId = $JSCompiler_get$$("$_id$");
  $dvt$$8$$.$Breadcrumbs$ = function $$dvt$$8$$$$Breadcrumbs$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$Breadcrumbs$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$Breadcrumbs$.prototype.Init = function $$dvt$$8$$$$Breadcrumbs$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $dvt$$8$$.$Breadcrumbs$.$superclass$.Init.call(this, $DvtTrainEvent$$);
    this.$setOptions$($DvtPanelDrawerEventManager$$);
    this.$_eventHandler$ = new $DvtBreadcrumbsEventManager$$(this, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_eventHandler$.$addListeners$(this);
    this.setId("breadcrumbs1000" + Math.floor(1E9 * Math.random()));
    this.$_curCrumbIdx$ = -1;
    this.$_crumbs$ = this.$_keyboardFocusRect$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$setOptions$ = function $$dvt$$8$$$$Breadcrumbs$$$$setOptions$$($dvt$$8$$) {
    this.$_options$ = $DvtBreadcrumbsDefaults$$.$calcOptions$($dvt$$8$$)
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$render$ = function $$dvt$$8$$$$Breadcrumbs$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_data$ = $DvtTrainEvent$$ ? $dvt$$8$$.$JsonUtils$.$clone$($DvtTrainEvent$$) : this.$_data$;
    this.$removeChildren$();
    this.$SetCrumbs$($JSCompiler_alias_NULL$$);
    $DvtBreadcrumbsRenderer$$.$render$(this, this, $DvtAccordionDefaults$$)
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$__getData$ = function $$dvt$$8$$$$Breadcrumbs$$$$__getData$$() {
    return this.$_data$ ? this.$_data$ : {}
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventHandler$");
  $dvt$$8$$.$Breadcrumbs$.prototype.$hideKeyboardFocusEffect$ = function $$dvt$$8$$$$Breadcrumbs$$$$hideKeyboardFocusEffect$$() {
    var $dvt$$8$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = -1;
    this.$_updateKeyboardFocusEffect$($dvt$$8$$, this.$_curCrumbIdx$)
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$updateCrumbFocus$ = function $$dvt$$8$$$$Breadcrumbs$$$$updateCrumbFocus$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = this.$_getUpdatedCrumbIndex$($DvtTrainEvent$$, !$dvt$$8$$);
    this.$_updateKeyboardFocusEffect$($DvtTrainEvent$$, this.$_curCrumbIdx$);
    return this.$_curCrumbIdx$
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$_getUpdatedCrumbIndex$ = function $$dvt$$8$$$$Breadcrumbs$$$$_getUpdatedCrumbIndex$$($dvt$$8$$, $DvtTrainEvent$$) {
    return-1 == $dvt$$8$$ ? $DvtTrainEvent$$ ? 0 : this.$_data$.$items$.length - 2 : $DvtTrainEvent$$ ? $dvt$$8$$ == this.$_data$.$items$.length - 2 ? -1 : ++$dvt$$8$$ : 0 == $dvt$$8$$ ? -1 : --$dvt$$8$$
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$_updateKeyboardFocusEffect$ = function $$dvt$$8$$$$Breadcrumbs$$$$_updateKeyboardFocusEffect$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$_keyboardFocusRect$, $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$, $DvtPanelDrawerTab$$ = this.$getCrumb$($DvtAccordionDefaults$$);
    if($DvtPanelDrawerTab$$) {
      var $DvtBreadcrumbsPeer$$ = this.$_eventHandler$.$GetLogicalObject$($DvtPanelDrawerTab$$);
      $DvtBreadcrumbsPeer$$ && $DvtBreadcrumbsPeer$$.$isDrillable$ && $DvtBreadcrumbsPeer$$.$isDrillable$() ? ($DvtPanelDrawerEventManager$$ = this.$getCtx$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerTab$$.$getDimensions$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMatrix$(), this.$_keyboardFocusRect$ = $DvtPanelDrawerEventManager$$ = new $dvt$$8$$.$KeyboardFocusEffect$($DvtPanelDrawerEventManager$$, this, $DvtBreadcrumbsPeer$$, $DvtPanelDrawerTab$$)) : this.$_keyboardFocusRect$ = $JSCompiler_alias_NULL$$
    }
    $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$.$hide$();
    $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.show()
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$getCrumb$ = function $$dvt$$8$$$$Breadcrumbs$$$$getCrumb$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$_crumbs$;
    return 0 > $dvt$$8$$ || !$DvtTrainEvent$$ || $dvt$$8$$ >= $DvtTrainEvent$$.length ? $JSCompiler_alias_NULL$$ : $DvtTrainEvent$$[$dvt$$8$$]
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$getCrumbIndex$ = function $$dvt$$8$$$$Breadcrumbs$$$$getCrumbIndex$$($dvt$$8$$) {
    for(var $DvtTrainEvent$$ = this.$_crumbs$, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < $DvtTrainEvent$$.length;$DvtAccordionDefaults$$++) {
      if($DvtTrainEvent$$[$DvtAccordionDefaults$$] == $dvt$$8$$) {
        return $DvtAccordionDefaults$$
      }
    }
  };
  $dvt$$8$$.$Breadcrumbs$.prototype.$SetCrumbs$ = $JSCompiler_set$$("$_crumbs$");
  var $DvtBreadcrumbsDefaults$$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($DvtBreadcrumbsDefaults$$, $dvt$$8$$.$Obj$);
  $DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:$dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$ + "color: #003286;", disabledLabelStyle:$dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$, $__labelGap$:2, $__labelSeparator$:"\x3e"};
  $DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtBreadcrumbsDefaults$$.$_getDefaults$($DvtTrainEvent$$);
    return $DvtTrainEvent$$ ? $dvt$$8$$.$JsonUtils$.$merge$($DvtTrainEvent$$, $DvtAccordionDefaults$$) : $DvtAccordionDefaults$$
  };
  $DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
    return $dvt$$8$$.$JsonUtils$.$clone$($DvtBreadcrumbsDefaults$$.$VERSION_1$)
  };
  $DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($dvt$$8$$, $DvtTrainEvent$$) {
    return Math.ceil($DvtTrainEvent$$ * $dvt$$8$$.layout.gapRatio)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtBreadcrumbsEventManager$$, $dvt$$8$$.$EventManager$);
  $DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($dvt$$8$$) {
    $DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$8$$);
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($dvt$$8$$.target))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($dvt$$8$$) {
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($dvt$$8$$.target))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$_processBreadcrumbs$ = function $$DvtBreadcrumbsEventManager$$$$$_processBreadcrumbs$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ && ($DvtTrainEvent$$ instanceof $DvtBreadcrumbsPeer$$ && $DvtTrainEvent$$.$isDrillable$()) && ($DvtTrainEvent$$ = new $dvt$$8$$.$BreadcrumbsDrillEvent$($DvtTrainEvent$$.getId()), this.$FireEvent$($DvtTrainEvent$$, this.$_breadcrumbs$))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $JSCompiler_alias_TRUE$$, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.keyCode;
    $DvtPanelDrawerKeyboardHandler$$ == $dvt$$8$$.$KeyboardEvent$.$TAB$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_breadcrumbs$.$updateCrumbFocus$($DvtTrainEvent$$.shiftKey), -1 == $DvtPanelDrawerKeyboardHandler$$ ? $DvtAccordionDefaults$$ = $JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$(this.$_breadcrumbs$.$getCrumb$($DvtPanelDrawerKeyboardHandler$$))) : $DvtPanelDrawerKeyboardHandler$$ == $dvt$$8$$.$KeyboardEvent$.$ENTER$ && this.$_processBreadcrumbs$(this.$GetLogicalObject$(this.$_breadcrumbs$.$getCrumb$(this.$_breadcrumbs$.$_curCrumbIdx$)));
    $DvtAccordionDefaults$$ && $dvt$$8$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    return $DvtAccordionDefaults$$
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtBreadcrumbsPeer$$, $dvt$$8$$.$SimpleObjPeer$);
  $DvtBreadcrumbsPeer$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_bDrillable$");
  $DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = $JSCompiler_set$$("$_bDrillable$");
  $DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = $JSCompiler_get$$("$_displayable$");
  var $DvtBreadcrumbsRenderer$$ = {};
  $dvt$$8$$.$Obj$.$createSubclass$($DvtBreadcrumbsRenderer$$, $dvt$$8$$.$Obj$);
  $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
  $DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    for(var $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$getCtx$(), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$__getData$().$items$ ? $DvtTrainEvent$$.$__getData$().$items$ : [], $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsDefaults$$ = $DvtTrainEvent$$.$getEventManager$(), $labels$$23$$ = [], $peers$$9$$ = [], $i$$548$$ = 0;$i$$548$$ < $DvtPanelDrawerTab$$.length;$i$$548$$++) {
      var $dataItem$$40_peer$$27$$ = $DvtPanelDrawerTab$$[$i$$548$$];
      if($dataItem$$40_peer$$27$$) {
        var $label$$68$$ = $DvtBreadcrumbsRenderer$$.$_createLabel$($DvtPanelDrawerEventManager$$, $dataItem$$40_peer$$27$$.label ? $dataItem$$40_peer$$27$$.label : "", $DvtBreadcrumbsEventManager$$, $i$$548$$ < $DvtPanelDrawerTab$$.length - 1);
        $labels$$23$$.push($label$$68$$);
        $dataItem$$40_peer$$27$$ = new $DvtBreadcrumbsPeer$$($dataItem$$40_peer$$27$$.id, $label$$68$$);
        $DvtBreadcrumbsDefaults$$.$associate$($label$$68$$, $dataItem$$40_peer$$27$$);
        $peers$$9$$.push($dataItem$$40_peer$$27$$);
        $i$$548$$ < $DvtPanelDrawerTab$$.length - 1 && $dataItem$$40_peer$$27$$.$setDrillable$($JSCompiler_alias_TRUE$$)
      }
    }
    $DvtTrainEvent$$.$SetCrumbs$($labels$$23$$);
    $dvt$$8$$.$Agent$.$isRightToLeft$($DvtPanelDrawerEventManager$$) ? $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$) : $DvtBreadcrumbsRenderer$$.$_positionLabels$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$)
  };
  $DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtAccordionDefaults$$ = new $dvt$$8$$.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0);
    $DvtAccordionDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtAccordionDefaults$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    var $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_TOP$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_RIGHT$), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_BOTTOM$), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_LEFT$), $DvtBreadcrumbsDefaults$$ = $dvt$$8$$.$DisplayableUtils$.$getDimensionsForced$($DvtTrainEvent$$, 
    $DvtAccordionDefaults$$);
    $DvtTrainEvent$$ = new $dvt$$8$$.$Rect$($DvtTrainEvent$$, 0, 0, $DvtBreadcrumbsDefaults$$.$w$ + $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$, $DvtBreadcrumbsDefaults$$.$h$ + $DvtPanelDrawerEventManager$$ + $DvtBreadcrumbsPeer$$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    $DvtAccordionDefaults$$.$setTranslate$($DvtBreadcrumbsEventManager$$, $DvtPanelDrawerEventManager$$);
    $DvtTrainEvent$$.$addChild$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$
  };
  $DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    if($DvtPanelDrawerEventManager$$ && ($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$ || $DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$)) {
      var $DvtPanelDrawerTab$$ = new $dvt$$8$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyle$);
      $DvtPanelDrawerEventManager$$ = new $dvt$$8$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$);
      $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$8$$.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$);
      $DvtPanelDrawerTab$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerEventManager$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$);
      $DvtPanelDrawerKeyboardHandler$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$ = new $dvt$$8$$.$Button$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$.$setAriaRole$("link");
      $DvtTrainEvent$$.$setAriaProperty$("label", $DvtAccordionDefaults$$)
    }else {
      $DvtPanelDrawerEventManager$$ = new $dvt$$8$$.$CSSStyle$($DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerKeyboardHandler$$.$labelStyle$ : $DvtPanelDrawerKeyboardHandler$$.$disabledLabelStyle$), $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_LEFT$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_RIGHT$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_TOP$) || $DvtPanelDrawerEventManager$$.$getPadding$($dvt$$8$$.$CSSStyle$.$PADDING_BOTTOM$) ? 
      $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$) : ($DvtTrainEvent$$ = new $dvt$$8$$.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0), $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerEventManager$$))
    }
    return $DvtTrainEvent$$
  };
  $DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($DvtTrainEvent$$) {
    if($DvtTrainEvent$$ instanceof $dvt$$8$$.$Button$) {
      return $DvtTrainEvent$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0), $DvtTrainEvent$$.$getTextString$()
    }
    $DvtTrainEvent$$ instanceof $dvt$$8$$.$Rect$ && ($DvtTrainEvent$$ = $DvtTrainEvent$$.$getChildAt$(0));
    return $DvtTrainEvent$$.$getTextString$()
  };
  $DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if($DvtTrainEvent$$ instanceof $dvt$$8$$.$Button$) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0);
      $dvt$$8$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$overState$.$getChildAt$(0);
      $dvt$$8$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$downState$.$getChildAt$(0);
      $dvt$$8$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent())
    }else {
      $DvtTrainEvent$$ instanceof $dvt$$8$$.$Rect$ ? ($DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getChildAt$(0), $dvt$$8$$.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent())) : $dvt$$8$$.$TextUtils$.$fitText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, Infinity, $DvtTrainEvent$$.getParent())
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for(var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = [], $maxHeight$$11$$ = 0, $i$$549$$ = 0;$i$$549$$ < $DvtPanelDrawerEventManager$$.length;$i$$549$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$549$$]);
      var $dims$$47_separator$$1$$ = $DvtPanelDrawerEventManager$$[$i$$549$$].$getDimensions$();
      $DvtBreadcrumbsDefaults$$[$i$$549$$] = $dims$$47_separator$$1$$;
      $maxHeight$$11$$ = Math.max($dims$$47_separator$$1$$.$h$, $maxHeight$$11$$);
      $DvtAccordionDefaults$$.removeChild($DvtPanelDrawerEventManager$$[$i$$549$$])
    }
    for(var $x$$175$$ = 0, $i$$549$$ = 0;$i$$549$$ < $DvtPanelDrawerEventManager$$.length;$i$$549$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$549$$]);
      $dims$$47_separator$$1$$ = $DvtBreadcrumbsDefaults$$[$i$$549$$];
      $DvtPanelDrawerEventManager$$[$i$$549$$].$setTranslate$($x$$175$$, 0.5 * ($maxHeight$$11$$ - $dims$$47_separator$$1$$.$h$));
      if($dvt$$8$$.$Agent$.$isTouchDevice$()) {
        var $rect$$32_sepDims_separatorWidth$$ = new $dvt$$8$$.$Rect$($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$32_sepDims_separatorWidth$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$i$$549$$].$addChild$($rect$$32_sepDims_separatorWidth$$);
        $i$$549$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$32_sepDims_separatorWidth$$, $DvtPanelDrawerTab$$[$i$$549$$])
      }
      if($x$$175$$ + $dims$$47_separator$$1$$.$w$ > $DvtPanelDrawerKeyboardHandler$$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$i$$549$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$i$$549$$], $DvtPanelDrawerKeyboardHandler$$ - $x$$175$$);
        $i$$549$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$i$$549$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$i$$549$$], new $dvt$$8$$.$SimpleObjPeer$($DvtTrainEvent$$));
        break
      }else {
        $x$$175$$ += $dims$$47_separator$$1$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
      if($i$$549$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        $dims$$47_separator$$1$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$);
        $DvtAccordionDefaults$$.$addChild$($dims$$47_separator$$1$$);
        $rect$$32_sepDims_separatorWidth$$ = $dims$$47_separator$$1$$.$getDimensions$();
        $dims$$47_separator$$1$$.$setTranslate$($x$$175$$, 0.5 * ($maxHeight$$11$$ - $rect$$32_sepDims_separatorWidth$$.$h$));
        $rect$$32_sepDims_separatorWidth$$ = $rect$$32_sepDims_separatorWidth$$.$w$;
        if($x$$175$$ + $rect$$32_sepDims_separatorWidth$$ > $DvtPanelDrawerKeyboardHandler$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$47_separator$$1$$);
          break
        }
        $x$$175$$ += $rect$$32_sepDims_separatorWidth$$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for(var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length;$DvtBreadcrumbsDefaults$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
      var $dims$$48_separator$$2$$ = $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$getDimensions$();
      if($dvt$$8$$.$Agent$.$isTouchDevice$()) {
        var $rect$$33_separatorWidth$$1$$ = new $dvt$$8$$.$Rect$($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$33_separatorWidth$$1$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$addChild$($rect$$33_separatorWidth$$1$$);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$33_separatorWidth$$1$$, $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$])
      }
      if(0 > $DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], $DvtPanelDrawerKeyboardHandler$$);
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$(0);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], new $dvt$$8$$.$SimpleObjPeer$($DvtTrainEvent$$));
        break
      }else {
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$), $DvtPanelDrawerKeyboardHandler$$ -= $dims$$48_separator$$2$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
      if($DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        if($dims$$48_separator$$2$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$), $DvtAccordionDefaults$$.$addChild$($dims$$48_separator$$2$$), $rect$$33_separatorWidth$$1$$ = $dims$$48_separator$$2$$.$getDimensions$().$w$, 0 > $DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$48_separator$$2$$);
          break
        }else {
          $dims$$48_separator$$2$$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$), $DvtPanelDrawerKeyboardHandler$$ -= $rect$$33_separatorWidth$$1$$ + $DvtBreadcrumbsPeer$$.$__labelGap$
        }
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_options$;
    $DvtTrainEvent$$ = new $dvt$$8$$.$OutputText$($DvtTrainEvent$$.$getCtx$(), $DvtAccordionDefaults$$.$__labelSeparator$, 0, 0);
    $DvtTrainEvent$$.$setCSSStyle$(new $dvt$$8$$.$CSSStyle$($DvtAccordionDefaults$$.$labelStyle$));
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$PanelDrawerEvent$ = function $$dvt$$8$$$$PanelDrawerEvent$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init($dvt$$8$$.$PanelDrawerEvent$.$TYPE$);
    this.$_subtype$ = $DvtTrainEvent$$;
    this.$_activePanel$ = $DvtAccordionDefaults$$
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanelDrawerEvent$, $dvt$$8$$.$BaseComponentEvent$);
  $dvt$$8$$.$PanelDrawerEvent$.$TYPE$ = "dvtPanelDrawerEvent";
  $dvt$$8$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$ = "hide";
  $dvt$$8$$.$PanelDrawerEvent$.$SUBTYPE_SHOW$ = "show";
  $dvt$$8$$.$PanelDrawerEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  $dvt$$8$$.$PanelDrawer$ = function $$dvt$$8$$$$PanelDrawer$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$PanelDrawer$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$PanelDrawer$.$DIR_LEFT$ = "left";
  $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ = "right";
  $dvt$$8$$.$PanelDrawer$.$DOCK_TOP$ = "top";
  $dvt$$8$$.$PanelDrawer$.$DOCK_BOTTOM$ = "bottom";
  $dvt$$8$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ = 15;
  $dvt$$8$$.$PanelDrawer$.$_INTER_TAB_SPACING$ = 0;
  $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ = 42;
  $dvt$$8$$.$PanelDrawer$.$_TAB_CORNER_RADIUS$ = 2;
  $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_COLOR$ = "#ffffff";
  $dvt$$8$$.$PanelDrawer$.$_BORDER_COLOR$ = "#bbc7d0";
  $dvt$$8$$.$PanelDrawer$.$_ANIM_DURATION$ = 0.25;
  $dvt$$8$$.$PanelDrawer$.$_CONTENT_PADDING$ = 10;
  $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA$ = 1;
  $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$ = 1;
  $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$ = 1;
  $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$ = 1;
  $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$ = 1;
  $dvt$$8$$.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$ = "#dee4e7";
  $dvt$$8$$.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$ = "#c1cede";
  $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ = 1.25;
  $dvt$$8$$.$PanelDrawer$.$_DEFAULT_SKIN$ = "alta";
  $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$ = 24;
  $dvt$$8$$.$PanelDrawer$.$PANEL_LEGEND$ = "legend";
  $dvt$$8$$.$PanelDrawer$.$PANEL_PALETTE$ = "palette";
  $dvt$$8$$.$PanelDrawer$.$PANEL_SEARCH$ = "search";
  $dvt$$8$$.$PanelDrawer$.$PANEL_OVERVIEW$ = "overview";
  $dvt$$8$$.$PanelDrawer$.$PANEL_SEARCH_ICON_ENA$ = "searchEna";
  $dvt$$8$$.$PanelDrawer$.$PANEL_SEARCH_ICON_OVR$ = "searchOvr";
  $dvt$$8$$.$PanelDrawer$.$PANEL_SEARCH_ICON_DWN$ = "searchDwn";
  $dvt$$8$$.$PanelDrawer$.$PANEL_SEARCH_TIP$ = "searchTip";
  $dvt$$8$$.$PanelDrawer$.$PANEL_PALETTE_ICON_ENA$ = "paletteEna";
  $dvt$$8$$.$PanelDrawer$.$PANEL_PALETTE_ICON_OVR$ = "paletteOvr";
  $dvt$$8$$.$PanelDrawer$.$PANEL_PALETTE_ICON_DWN$ = "paletteDwn";
  $dvt$$8$$.$PanelDrawer$.$PANEL_PALETTE_TIP$ = "paletteTip";
  $dvt$$8$$.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$ = "legendEna";
  $dvt$$8$$.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$ = "legendOvr";
  $dvt$$8$$.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$ = "legendDwn";
  $dvt$$8$$.$PanelDrawer$.$PANEL_LEGEND_TIP$ = "legendTip";
  $dvt$$8$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_ENA$ = "overviewEna";
  $dvt$$8$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_OVR$ = "overviewOvr";
  $dvt$$8$$.$PanelDrawer$.$PANEL_OVERVIEW_ICON_DWN$ = "overviewDwn";
  $dvt$$8$$.$PanelDrawer$.$PANEL_OVERVIEW_TIP$ = "overviewTip";
  $dvt$$8$$.$PanelDrawer$.$BG_ALPHA$ = "backgroundAlpha";
  $dvt$$8$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$ = "tab-color-inactive";
  $dvt$$8$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$ = "tab-border-color-inactive";
  $dvt$$8$$.$PanelDrawer$.prototype.Init = function $$dvt$$8$$$$PanelDrawer$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$8$$.$PanelDrawer$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, "panelDrawer" + $DvtBreadcrumbsPeer$$);
    this.$_sid$ = $DvtBreadcrumbsPeer$$;
    this.$_eventManager$ = new $DvtPanelDrawerEventManager$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$addRolloverType$($dvt$$8$$.$PanelDrawer$);
    this.$_eventManager$.$associate$(this, this);
    $dvt$$8$$.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $DvtPanelDrawerKeyboardHandler$$(this.$_eventManager$, this));
    this.$_callback$ = $DvtAccordionDefaults$$;
    this.$_callbackObj$ = $DvtPanelDrawerTab$$;
    this.$_panels$ = {};
    this.$_panelOrder$ = [];
    this.$_maxHeight$ = this.$_maxWidth$ = Number.MAX_VALUE;
    this.$_minWidth$ = 5;
    this.$_minHeight$ = 0;
    this.$_displayedPanelId$;
    this.$_oldDisplayedPanelId$;
    this.$_bTransition$ = this.$_bDisclosed$ = $JSCompiler_alias_FALSE$$;
    this.$_contentPane$;
    this.$_activeContent$;
    this.$_expandedContent$;
    this.$_contentClipPath$;
    this.$_expandedBorder$;
    this.$_expandedBorderResizable$;
    this.$_tabs$ = {};
    this.$_discloseDirection$ = $dvt$$8$$.$PanelDrawer$.$DIR_LEFT$;
    this.$_dockSide$ = $dvt$$8$$.$PanelDrawer$.$DOCK_TOP$;
    this.$_isFixed$ = $JSCompiler_alias_FALSE$$;
    this.$_styleMap$ = $JSCompiler_alias_NULL$$;
    $DvtPanelDrawerTab$$ && (this.$_styleMap$ = $DvtPanelDrawerTab$$.$getSubcomponentStyles$());
    this.$_bgAlpha$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$PanelDrawer$.$BG_ALPHA$, $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA$);
    this.$_borderColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_COLOR$, $dvt$$8$$.$PanelDrawer$.$_BORDER_COLOR$);
    this.$_borderRadius$ = parseInt($dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BORDER_RADIUS$, $dvt$$8$$.$PanelDrawer$.$_TAB_CORNER_RADIUS$));
    this.$_bgColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$, $dvt$$8$$.$PanelDrawer$.$_BACKGROUND_COLOR$);
    this.$_bgInactiveColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $dvt$$8$$.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$);
    this.$_borderInactiveColor$ = $dvt$$8$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$8$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $dvt$$8$$.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$);
    this.$setPixelHinting$();
    this.$_contentPadding$ = $dvt$$8$$.$PanelDrawer$.$_CONTENT_PADDING$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$addPanel$ = function $$dvt$$8$$$$PanelDrawer$$$$addPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.$_panels$[$DvtBreadcrumbsPeer$$] = {panel:$DvtTrainEvent$$, iconUp:$DvtAccordionDefaults$$, iconOver:$DvtPanelDrawerKeyboardHandler$$, iconDown:$DvtPanelDrawerEventManager$$, tooltip:$DvtPanelDrawerTab$$};
    this.$_panelOrder$.push($DvtBreadcrumbsPeer$$);
    this.$_minHeight$ = $dvt$$8$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ + this.$_panelOrder$.length * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$8$$.$PanelDrawer$.$_INTER_TAB_SPACING$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setFixed$ = $JSCompiler_set$$("$_isFixed$");
  $dvt$$8$$.$PanelDrawer$.prototype.$setMaxWidth$ = $JSCompiler_set$$("$_maxWidth$");
  $dvt$$8$$.$PanelDrawer$.prototype.$setContentPadding$ = function $$dvt$$8$$$$PanelDrawer$$$$setContentPadding$$() {
    this.$_contentPadding$ = 0
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$getMaxContentWidth$ = function $$dvt$$8$$$$PanelDrawer$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * this.$_contentPadding$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setMaxHeight$ = $JSCompiler_set$$("$_maxHeight$");
  $dvt$$8$$.$PanelDrawer$.prototype.$getMaxContentHeight$ = function $$dvt$$8$$$$PanelDrawer$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * this.$_contentPadding$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setDiscloseDirection$ = function $$dvt$$8$$$$PanelDrawer$$$$setDiscloseDirection$$() {
    this.$_discloseDirection$ = dvt.$PanelDrawer$.$DIR_RIGHT$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setDockSide$ = $JSCompiler_set$$("$_dockSide$");
  $dvt$$8$$.$PanelDrawer$.prototype.$GetPanel$ = function $$dvt$$8$$$$PanelDrawer$$$$GetPanel$$($dvt$$8$$) {
    return this.$_panels$[$dvt$$8$$].panel
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$GetIcon$ = function $$dvt$$8$$$$PanelDrawer$$$$GetIcon$$($dvt$$8$$) {
    return this.$_panels$[$dvt$$8$$].icon
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$GetTooltip$ = function $$dvt$$8$$$$PanelDrawer$$$$GetTooltip$$($dvt$$8$$) {
    return this.$_panels$[$dvt$$8$$].tooltip
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$GetTab$ = function $$dvt$$8$$$$PanelDrawer$$$$GetTab$$($dvt$$8$$) {
    return this.$_tabs$[$dvt$$8$$]
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setDisplayedPanelId$ = function $$dvt$$8$$$$PanelDrawer$$$$setDisplayedPanelId$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_oldDisplayedPanelId$ = this.$_displayedPanelId$;
    this.$_displayedPanelId$ = $dvt$$8$$;
    this.$isDisclosed$() && (this.$ChangeTabsState$(), this.$ChangePanels$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
    this.$_oldDisplayedPanelId$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$getDisplayedPanelId$ = function $$dvt$$8$$$$PanelDrawer$$$$getDisplayedPanelId$$() {
    var $dvt$$8$$ = this.$_displayedPanelId$;
    return!$dvt$$8$$ && 0 < this.$_panelOrder$.length ? this.$_panelOrder$[0] : $dvt$$8$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setDisclosed$ = function $$dvt$$8$$$$PanelDrawer$$$$setDisclosed$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if(!this.$_bTransition$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_bDisclosed$;
      this.$_bDisclosed$ = $dvt$$8$$;
      $DvtPanelDrawerKeyboardHandler$$ != $dvt$$8$$ && (this.$_bTransition$ = $JSCompiler_alias_TRUE$$, $dvt$$8$$ ? this.$DoExpand$($DvtTrainEvent$$, $DvtAccordionDefaults$$) : this.$DoCollapse$($DvtTrainEvent$$, $DvtAccordionDefaults$$))
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_bDisclosed$");
  $dvt$$8$$.$PanelDrawer$.prototype.$renderComponent$ = function $$dvt$$8$$$$PanelDrawer$$$$renderComponent$$() {
    this.$_contentPane$ || (this.$_contentPane$ = new $dvt$$8$$.$Container$(this.$getCtx$(), "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new $dvt$$8$$.$Container$(this.$getCtx$(), "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
    this.$RenderTabs$()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$RenderTabs$ = function $$dvt$$8$$$$PanelDrawer$$$$RenderTabs$$() {
    if(!this.$_isFixed$) {
      var $DvtTrainEvent$$ = -$dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$;
      this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = 0);
      var $DvtAccordionDefaults$$ = $dvt$$8$$.$PanelDrawer$.$_FIRST_TAB_SPACING$;
      if(this.$_dockSide$ == $dvt$$8$$.$PanelDrawer$.$DOCK_TOP$) {
        for(var $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_panelOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
          var $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$);
          $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
          $DvtAccordionDefaults$$ += $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$8$$.$PanelDrawer$.$_INTER_TAB_SPACING$
        }
      }else {
        if(this.$_dockSide$ == $dvt$$8$$.$PanelDrawer$.$DOCK_BOTTOM$) {
          $DvtAccordionDefaults$$ = -$dvt$$8$$.$PanelDrawer$.$_FIRST_TAB_SPACING$ - $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$;
          for($DvtPanelDrawerKeyboardHandler$$ = this.$_panelOrder$.length - 1;0 <= $DvtPanelDrawerKeyboardHandler$$;$DvtPanelDrawerKeyboardHandler$$--) {
            $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtAccordionDefaults$$ -= $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ + $dvt$$8$$.$PanelDrawer$.$_INTER_TAB_SPACING$
          }
        }
      }
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$GetTabPathCommands$ = function $$dvt$$8$$$$PanelDrawer$$$$GetTabPathCommands$$() {
    var $DvtTrainEvent$$;
    switch(this.$_discloseDirection$) {
      case $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$:
        $DvtTrainEvent$$ = ["M", 0, 0, "L", $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, this.$_borderRadius$, "L", $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, "L", 0, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$];
        break;
      default:
        $DvtTrainEvent$$ = ["M", $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, 0, "L", this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, 0, this.$_borderRadius$, "L", 0, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, this.$_borderRadius$, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, "L", $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$]
    }
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$RenderTab$ = function $$dvt$$8$$$$PanelDrawer$$$$RenderTab$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetTabPathCommands$(), $DvtPanelDrawerKeyboardHandler$$ = new $DvtPanelDrawerTab$$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, this);
    $DvtPanelDrawerKeyboardHandler$$.$setPixelHinting$();
    $DvtPanelDrawerKeyboardHandler$$.setCursor("pointer");
    this.$_contentPane$.$addChildAt$($DvtPanelDrawerKeyboardHandler$$, 0);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$(this.$_borderInactiveColor$, $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$, 1);
    var $DvtPanelDrawerEventManager$$ = this.$_panels$[$DvtTrainEvent$$], $DvtBreadcrumbsPeer$$ = new $dvt$$8$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconUp.$setTranslate$(0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsPeer$$.$addChild$($DvtPanelDrawerEventManager$$.iconUp);
    var $DvtBreadcrumbsEventManager$$ = new $dvt$$8$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsEventManager$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconOver.$setTranslate$(0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtPanelDrawerEventManager$$.iconOver);
    $DvtAccordionDefaults$$ = new $dvt$$8$$.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtAccordionDefaults$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconDown.$setTranslate$(0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * ($dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$ - $dvt$$8$$.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$.iconDown);
    $DvtBreadcrumbsPeer$$ = new $dvt$$8$$.$Button$(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setToggleEnabled$();
    $DvtPanelDrawerEventManager$$.icon = $DvtBreadcrumbsPeer$$;
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsPeer$$);
    this.$_tabs$[$DvtTrainEvent$$] = $DvtPanelDrawerKeyboardHandler$$;
    var $DvtBreadcrumbsDefaults$$ = this;
    this.$_eventManager$.$associate$($DvtPanelDrawerKeyboardHandler$$, {$HandleClick$:function() {
      $DvtBreadcrumbsDefaults$$.$HandleTabClick$($DvtTrainEvent$$)
    }, $getTooltip$:function() {
      return $DvtBreadcrumbsDefaults$$.$GetTooltip$($DvtTrainEvent$$)
    }});
    $DvtPanelDrawerKeyboardHandler$$.$addAccessibilityAttributes$();
    return $DvtPanelDrawerKeyboardHandler$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$HandleTabClick$ = function $$dvt$$8$$$$PanelDrawer$$$$HandleTabClick$$($DvtTrainEvent$$) {
    function $DvtAccordionDefaults$$() {
      var $dvt$$8$$ = $DvtPanelDrawerEventManager$$.$getCtx$().$getTooltipManager$();
      $dvt$$8$$ && $dvt$$8$$.$hideTooltip$()
    }
    this.$_oldDisplayedPanelId$ = this.$getDisplayedPanelId$();
    this.$_displayedPanelId$ = $DvtTrainEvent$$;
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$($DvtTrainEvent$$).$isShowingKeyboardFocusEffect$(), $DvtPanelDrawerEventManager$$ = this;
    this.$isDisclosed$() ? this.$_oldDisplayedPanelId$ == $DvtTrainEvent$$ ? this.$setDisclosed$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$) : (this.$ChangeTabsState$(), this.$ChangePanels$($DvtTrainEvent$$, $JSCompiler_alias_FALSE$$)) : (this.$setDisclosed$($JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$), this.$ApplyAlphasRollover$());
    this.$_oldDisplayedPanelId$ = $JSCompiler_alias_NULL$$;
    this.$FireListener$(new $dvt$$8$$.$PanelDrawerEvent$(this.$isDisclosed$() ? $dvt$$8$$.$PanelDrawerEvent$.$SUBTYPE_SHOW$ : $dvt$$8$$.$PanelDrawerEvent$.$SUBTYPE_HIDE$, this.$_displayedPanelId$));
    $DvtPanelDrawerKeyboardHandler$$ && this.$getCtx$().$setCurrentKeyboardFocus$(this)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ChangePanels$ = function $$dvt$$8$$$$PanelDrawer$$$$ChangePanels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$;
    $DvtAccordionDefaults$$ || ($DvtPanelDrawerEventManager$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), $dvt$$8$$.$PanelDrawer$.$_ANIM_DURATION$));
    this.$_oldDisplayedPanelId$ && ($DvtAccordionDefaults$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$)) && this.$_expandedContentPanel$.removeChild($DvtAccordionDefaults$$);
    this.$DisplayPanel$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$);
    $DvtPanelDrawerEventManager$$ ? (this.$ApplyAlphasRollover$(), $DvtPanelDrawerKeyboardHandler$$ && $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$.play()) : $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$DoExpand$ = function $$dvt$$8$$$$PanelDrawer$$$$DoExpand$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$DisplayPanel$(this.$getDisplayedPanelId$());
    var $DvtPanelDrawerKeyboardHandler$$ = -(1 / $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * this.$_expandedContent$.getWidth());
    this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtPanelDrawerKeyboardHandler$$ = -$DvtPanelDrawerKeyboardHandler$$, this.$_expandedContent$.$setX$((1 / $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ - 1) * this.$_expandedContent$.getWidth()));
    if($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$_bTransition$ = $JSCompiler_alias_FALSE$$
    }else {
      var $DvtPanelDrawerEventManager$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), $dvt$$8$$.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerEventManager$$.$setEasing$($dvt$$8$$.$Easing$.$backOut$);
      $DvtPanelDrawerEventManager$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtAccordionDefaults$$ && $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
      if($DvtPanelDrawerEventManager$$) {
        var $DvtPanelDrawerTab$$ = this;
        $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, function() {
          $DvtPanelDrawerTab$$.$_bTransition$ = $JSCompiler_alias_FALSE$$
        });
        $DvtPanelDrawerEventManager$$.play()
      }
    }
    this.$ChangeTabsState$()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$DoCollapse$ = function $$dvt$$8$$$$PanelDrawer$$$$DoCollapse$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$ChangeTabsState$(), this.$_bTransition$ = $JSCompiler_alias_FALSE$$
    }else {
      var $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), $dvt$$8$$.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerKeyboardHandler$$.$setEasing$($dvt$$8$$.$Easing$.$backIn$);
      $DvtPanelDrawerKeyboardHandler$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
      $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$RemoveExpandedContent$, this);
      $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$ChangeTabsState$, this);
      $DvtAccordionDefaults$$ && $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, $DvtAccordionDefaults$$);
      var $DvtPanelDrawerEventManager$$ = this;
      $dvt$$8$$.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, function() {
        $DvtPanelDrawerEventManager$$.$_bTransition$ = $JSCompiler_alias_FALSE$$
      });
      $DvtPanelDrawerKeyboardHandler$$.play()
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$RemoveExpandedContent$ = function $$dvt$$8$$$$PanelDrawer$$$$RemoveExpandedContent$$() {
    this.$_expandedContent$ && (this.$_contentClipPath$ = $JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), this.$_activeContent$.$removeAllDrawEffects$(), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = $JSCompiler_alias_NULL$$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$DisplayPanel$ = function $$dvt$$8$$$$PanelDrawer$$$$DisplayPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_expandedContent$ || (this.$_expandedContent$ = new $dvt$$8$$.$Rect$(this.$getCtx$(), 0, 0, 1, 1, "pdcp_expandedContent"), this.$_activeContent$.$addChild$(this.$_expandedContent$), this.$_expandedContent$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), this.$_expandedContentPanel$ = new $dvt$$8$$.$Container$(this.$_context$), this.$_expandedContent$.$addChild$(this.$_expandedContentPanel$), this.$_expandedContentPanel$.$setTranslate$(this.$_contentPadding$, this.$_contentPadding$));
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetPanel$($DvtTrainEvent$$);
    if($DvtPanelDrawerKeyboardHandler$$) {
      this.$_expandedContentPanel$.$addChild$($DvtPanelDrawerKeyboardHandler$$);
      if(this.$_oldDisplayedPanelId$) {
        var $DvtPanelDrawerEventManager$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$);
        $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$removeEvtListener$($dvt$$8$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, $JSCompiler_alias_FALSE$$, this)
      }
      $DvtPanelDrawerKeyboardHandler$$.$addEvtListener$($dvt$$8$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, $JSCompiler_alias_FALSE$$, this)
    }
    this.$_expandedBorder$ || (this.$_expandedBorder$ = new $dvt$$8$$.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), this.$_expandedBorderResizable$ = new $dvt$$8$$.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), this.$_expandedContent$.$addChild$(this.$_expandedBorder$), this.$_expandedContent$.$addChild$(this.$_expandedBorderResizable$), this.$_expandedBorder$.$setSolidStroke$(this.$_borderColor$, $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$), 
    this.$_expandedBorder$.$setFill$($JSCompiler_alias_NULL$$), this.$_expandedBorderResizable$.$setSolidStroke$(this.$_borderColor$, $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$), this.$_expandedBorderResizable$.$setFill$($JSCompiler_alias_NULL$$), this.$_expandedBorder$.$setPixelHinting$(), this.$_expandedBorderResizable$.$setPixelHinting$());
    this.$RefreshExpandedSize$($DvtTrainEvent$$, $DvtAccordionDefaults$$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$HandlePanelResize$ = function $$dvt$$8$$$$PanelDrawer$$$$HandlePanelResize$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new $dvt$$8$$.$Animator$(this.$getCtx$(), $dvt$$8$$.$PanelDrawer$.$_ANIM_DURATION$), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.getWidth(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.getHeight(), $DvtPanelDrawerKeyboardHandler$$ = this.$GetExpandedContentWidth$($DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentHeight$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$getX$() ? $DvtTrainEvent$$.$getX$() : 
    0;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getY$() ? $DvtTrainEvent$$.$getY$() : 0;
    this.$_refreshPanelSize$(this.$getDisplayedPanelId$(), $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtTrainEvent$$);
    $DvtAccordionDefaults$$.play()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$RefreshExpandedSize$ = function $$dvt$$8$$$$PanelDrawer$$$$RefreshExpandedSize$$($dvt$$8$$, $DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetPanel$($dvt$$8$$), $DvtPanelDrawerKeyboardHandler$$ = 2 * this.$_contentPadding$, $DvtPanelDrawerEventManager$$ = 2 * this.$_contentPadding$, $DvtPanelDrawerTab$$ = 0, $DvtBreadcrumbsPeer$$ = 0;
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$ = $DvtAccordionDefaults$$.$getContentDimensions$ ? $DvtAccordionDefaults$$.$getContentDimensions$() : $DvtAccordionDefaults$$.$getDimensionsWithStroke$(), $DvtPanelDrawerKeyboardHandler$$ = this.$GetExpandedContentWidth$($DvtAccordionDefaults$$.$w$), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentHeight$($DvtAccordionDefaults$$.$h$), $DvtPanelDrawerTab$$ = $DvtAccordionDefaults$$.x, $DvtBreadcrumbsPeer$$ = $DvtAccordionDefaults$$.y);
    this.$_refreshPanelSize$($dvt$$8$$, $DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$_refreshPanelSize$ = function $$dvt$$8$$$$PanelDrawer$$$$_refreshPanelSize$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = this.$GetPanel$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateX$, $DvtBreadcrumbsEventManager$$.$setTranslateX$, -$DvtPanelDrawerTab$$) : $DvtBreadcrumbsEventManager$$.$setTranslateX$(-$DvtPanelDrawerTab$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateY$, $DvtBreadcrumbsEventManager$$.$setTranslateY$, -$DvtBreadcrumbsPeer$$) : $DvtBreadcrumbsEventManager$$.$setTranslateY$(-$DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerTab$$ = new $dvt$$8$$.$Rectangle$(this.$_contentPadding$, this.$_contentPadding$, $DvtPanelDrawerKeyboardHandler$$ - 2 * this.$_contentPadding$, $DvtPanelDrawerEventManager$$ - 2 * this.$_contentPadding$);
    $DvtBreadcrumbsPeer$$ = $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * $DvtPanelDrawerKeyboardHandler$$;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getWidth, this.$_expandedContent$.$setWidth$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getHeight, this.$_expandedContent$.$setHeight$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_RECTANGLE$, this, this.$_getContentClipPath$, 
    this.$_setContentClipPath$, $DvtPanelDrawerTab$$), this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_LEFT$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$) : this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, 
    this.$_contentPane$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateX$, this.$_expandedBorder$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getTranslateX$, this.$_expandedBorderResizable$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), 
    $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.$getTranslateX$, this.$_expandedContent$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == $dvt$$8$$.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateY$, this.$_expandedBorder$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, 
    this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getTranslateY$, this.$_expandedBorderResizable$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.$getTranslateY$, this.$_expandedContent$.$setTranslateY$, -$DvtPanelDrawerEventManager$$))) : (this.$_expandedContent$.$setWidth$($DvtBreadcrumbsPeer$$), this.$_expandedContent$.$setHeight$($DvtPanelDrawerEventManager$$), 
    this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ && (this.$_expandedContent$.$setTranslateX$(-$DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorder$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorderResizable$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == $dvt$$8$$.$PanelDrawer$.$DOCK_BOTTOM$ && (this.$_expandedContent$.$setTranslateY$(-$DvtPanelDrawerEventManager$$), this.$_expandedBorder$.$setTranslateY$($DvtPanelDrawerEventManager$$), 
    this.$_expandedBorderResizable$.$setTranslateY$($DvtPanelDrawerEventManager$$)), this.$_setContentClipPath$($DvtPanelDrawerTab$$));
    $DvtPanelDrawerTab$$ = this.$GetTab$($DvtTrainEvent$$);
    var $DvtBreadcrumbsDefaults$$;
    $DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_discloseDirection$ == $dvt$$8$$.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = -$DvtPanelDrawerKeyboardHandler$$);
    this.$_dockSide$ == $dvt$$8$$.$PanelDrawer$.$DOCK_TOP$ ? $DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$(), "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[this.$_panelOrder$.length - 1]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), 
    $DvtTrainEvent$$ *= $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)) : this.$_dockSide$ == 
    $dvt$$8$$.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + $dvt$$8$$.$PanelDrawer$.$_TAB_SIZE$, "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$()], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[0]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$()), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), $DvtTrainEvent$$ *= $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, 
    $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$(), "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)));
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_PATH$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getCommands$, this.$_expandedBorderResizable$.$setCommands$, $DvtBreadcrumbsDefaults$$) : this.$_expandedBorderResizable$.$setCommands$($DvtBreadcrumbsDefaults$$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$_setContentClipPath$ = function $$dvt$$8$$$$PanelDrawer$$$$_setContentClipPath$$($DvtTrainEvent$$) {
    if(this.$_expandedContentPanel$ && $DvtTrainEvent$$) {
      var $DvtAccordionDefaults$$ = new $dvt$$8$$.$ClipPath$("pdcp" + this.$_sid$);
      $DvtAccordionDefaults$$.$addRect$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$);
      this.$_expandedContentPanel$.$setClipPath$($DvtAccordionDefaults$$)
    }
    this.$_contentClipPath$ = $DvtTrainEvent$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$_getContentClipPath$ = $JSCompiler_get$$("$_contentClipPath$");
  $dvt$$8$$.$PanelDrawer$.prototype.$GetExpandedContentWidth$ = function $$dvt$$8$$$$PanelDrawer$$$$GetExpandedContentWidth$$($dvt$$8$$) {
    $dvt$$8$$ += 2 * this.$_contentPadding$;
    if((this.$_minWidth$ || 0 == this.$_minWidth$) && $dvt$$8$$ < this.$_minWidth$) {
      $dvt$$8$$ = this.$_minWidth$
    }
    this.$_maxWidth$ && $dvt$$8$$ > this.$_maxWidth$ && ($dvt$$8$$ = this.$_maxWidth$);
    return $dvt$$8$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$GetExpandedContentHeight$ = function $$dvt$$8$$$$PanelDrawer$$$$GetExpandedContentHeight$$($dvt$$8$$) {
    $dvt$$8$$ += 2 * this.$_contentPadding$;
    if((this.$_minHeight$ || 0 == this.$_minHeight$) && $dvt$$8$$ < this.$_minHeight$) {
      $dvt$$8$$ = this.$_minHeight$
    }
    this.$_maxHeight$ && $dvt$$8$$ > this.$_maxHeight$ && ($dvt$$8$$ = this.$_maxHeight$);
    return $dvt$$8$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ApplyFillAlpha$ = function $$dvt$$8$$$$PanelDrawer$$$$ApplyFillAlpha$$($dvt$$8$$) {
    if(this.$_expandedContent$) {
      var $DvtTrainEvent$$ = this.$_expandedContent$.$getFill$().$clone$();
      $DvtTrainEvent$$.$setAlpha$($dvt$$8$$);
      this.$_expandedContent$.$setFill$($DvtTrainEvent$$)
    }
    for(var $DvtAccordionDefaults$$ in this.$_tabs$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_tabs$[$DvtAccordionDefaults$$];
      $DvtPanelDrawerKeyboardHandler$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$.$getFill$().$clone$(), $DvtTrainEvent$$.$setAlpha$($dvt$$8$$), $DvtPanelDrawerKeyboardHandler$$.$setFill$($DvtTrainEvent$$))
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ApplyStrokeAlpha$ = function $$dvt$$8$$$$PanelDrawer$$$$ApplyStrokeAlpha$$($dvt$$8$$) {
    if(this.$_expandedBorder$) {
      var $DvtTrainEvent$$ = this.$_expandedBorder$.$getStroke$().$clone$();
      $DvtTrainEvent$$.$setAlpha$($dvt$$8$$);
      this.$_expandedBorder$.$setStroke$($DvtTrainEvent$$)
    }
    this.$_expandedBorderResizable$ && ($DvtTrainEvent$$ = this.$_expandedBorderResizable$.$getStroke$().$clone$(), $DvtTrainEvent$$.$setAlpha$($dvt$$8$$), this.$_expandedBorderResizable$.$setStroke$($DvtTrainEvent$$));
    for(var $DvtAccordionDefaults$$ in this.$_tabs$) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$_tabs$[$DvtAccordionDefaults$$];
      $DvtPanelDrawerKeyboardHandler$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$.$getStroke$().$clone$(), $DvtTrainEvent$$.$setAlpha$($dvt$$8$$), $DvtPanelDrawerKeyboardHandler$$.$setStroke$($DvtTrainEvent$$))
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$deEmphasizeStart$ = function $$dvt$$8$$$$PanelDrawer$$$$deEmphasizeStart$$() {
    this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$ApplyFillAlpha$($dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    this.$ApplyStrokeAlpha$($dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$($dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$($dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$)
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$deEmphasizeEnd$ = function $$dvt$$8$$$$PanelDrawer$$$$deEmphasizeEnd$$() {
    this.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$ApplyFillAlpha$(this.$_bgAlpha$);
    this.$ApplyStrokeAlpha$($dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$(1)
    }
    this.$HandleRollOut$($JSCompiler_alias_NULL$$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$HandleRollOver$ = function $$dvt$$8$$$$PanelDrawer$$$$HandleRollOver$$() {
    this.$ApplyAlphasRollover$()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$HandleRollOut$ = function $$dvt$$8$$$$PanelDrawer$$$$HandleRollOut$$() {
    this.$_bFocus$ || this.$ApplyAlphasRollout$()
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ApplyAlphasRollover$ = function $$dvt$$8$$$$PanelDrawer$$$$ApplyAlphasRollover$$() {
    this.$ApplyFillAlpha$($dvt$$8$$.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ApplyAlphasRollout$ = function $$dvt$$8$$$$PanelDrawer$$$$ApplyAlphasRollout$$() {
    this.$ApplyFillAlpha$(this.$_bgAlpha$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$ChangeTabsState$ = function $$dvt$$8$$$$PanelDrawer$$$$ChangeTabsState$$() {
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$_tabs$[$DvtTrainEvent$$];
      $DvtAccordionDefaults$$ && ($DvtTrainEvent$$ == this.$getDisplayedPanelId$() && this.$isDisclosed$() ? ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderColor$, $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$), $DvtAccordionDefaults$$.$setDisclosed$($JSCompiler_alias_TRUE$$)) : ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderInactiveColor$, 
      $dvt$$8$$.$PanelDrawer$.$_BORDER_ALPHA$), $DvtAccordionDefaults$$.$setDisclosed$($JSCompiler_alias_FALSE$$)));
      var $DvtPanelDrawerKeyboardHandler$$ = this.$isDisclosed$() && $DvtTrainEvent$$ == this.$getDisplayedPanelId$(), $DvtPanelDrawerEventManager$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$setToggled$($DvtPanelDrawerKeyboardHandler$$);
      $DvtPanelDrawerKeyboardHandler$$ ? this.$_activeContent$.$addChild$($DvtAccordionDefaults$$) : this.$_contentPane$.$addChildAt$($DvtAccordionDefaults$$, 0)
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$setMaxContainerHeight$ = function $$dvt$$8$$$$PanelDrawer$$$$setMaxContainerHeight$$($dvt$$8$$) {
    if(!this.$_maxContainerHeight$ || this.$_maxContainerHeight$ < $dvt$$8$$) {
      this.$_maxContainerHeight$ = $dvt$$8$$
    }
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$getMaxContainerHeight$ = function $$dvt$$8$$$$PanelDrawer$$$$getMaxContainerHeight$$() {
    return this.$GetExpandedContentHeight$(this.$_maxContainerHeight$)
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$getDimensions$ = function $$dvt$$8$$$$PanelDrawer$$$$getDimensions$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = $dvt$$8$$.$PanelDrawer$.$superclass$.$getDimensions$.call(this, $DvtTrainEvent$$);
    $DvtTrainEvent$$.$w$ /= $dvt$$8$$.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$;
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$PanelDrawer$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPanelDrawerTab$$, $dvt$$8$$.$Path$);
  $DvtPanelDrawerTab$$.prototype.Init = function $$DvtPanelDrawerTab$$$$Init$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtPanelDrawerTab$$.$superclass$.Init.call(this, $dvt$$8$$, $DvtTrainEvent$$, "pdcp_tab_" + $DvtAccordionDefaults$$);
    this.$_panelDrawer$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_isDisclosed$ = $JSCompiler_alias_FALSE$$;
    this.$_panelId$ = $DvtAccordionDefaults$$
  };
  $DvtPanelDrawerTab$$.prototype.$HandleKeyboardEvent$ = function $$DvtPanelDrawerTab$$$$$HandleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode;
    if($DvtAccordionDefaults$$ == $dvt$$8$$.$KeyboardEvent$.$ENTER$ || $DvtAccordionDefaults$$ == $dvt$$8$$.$KeyboardEvent$.$SPACE$) {
      var $DvtAccordionDefaults$$ = this.$_panelDrawer$.$getEventManager$(), $DvtPanelDrawerKeyboardHandler$$ = this.$localToStage$(new $dvt$$8$$.$Point$(0, 0));
      $DvtTrainEvent$$ = $dvt$$8$$.$DomEventFactory$.$generateMouseEventFromKeyboardEvent$($DvtTrainEvent$$, this.$_context$, $dvt$$8$$.$MouseEvent$.$CLICK$, $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y);
      $DvtTrainEvent$$.target = this;
      $DvtAccordionDefaults$$.$PreOnClick$($DvtTrainEvent$$)
    }
  };
  $DvtPanelDrawerTab$$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_isDisclosed$");
  $DvtPanelDrawerTab$$.prototype.$setDisclosed$ = function $$DvtPanelDrawerTab$$$$$setDisclosed$$($dvt$$8$$) {
    this.$_isDisclosed$ != $dvt$$8$$ ? (this.$_isDisclosed$ = $dvt$$8$$, this.$updateAccessibilityAttributes$()) : this.$_isDisclosed$ = $dvt$$8$$
  };
  $DvtPanelDrawerTab$$.prototype.$getAriaLabel$ = function $$DvtPanelDrawerTab$$$$$getAriaLabel$$() {
    var $DvtTrainEvent$$ = [];
    $DvtTrainEvent$$.push(this.$isDisclosed$() ? $dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED") : $dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED"));
    return $dvt$$8$$.$Displayable$.$generateAriaLabel$(this.$_panelDrawer$.$GetTooltip$(this.$_panelId$), $DvtTrainEvent$$)
  };
  $DvtPanelDrawerTab$$.prototype.$addAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$addAccessibilityAttributes$$() {
    this.$setAriaRole$("button");
    $dvt$$8$$.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtPanelDrawerTab$$.prototype.$updateAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$updateAccessibilityAttributes$$() {
    $dvt$$8$$.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtPanelDrawerTab$$.prototype.$getKeyboardBoundingBox$ = function $$DvtPanelDrawerTab$$$$$getKeyboardBoundingBox$$($dvt$$8$$) {
    return this.$getDimensions$($dvt$$8$$)
  };
  $DvtPanelDrawerTab$$.prototype.$getTargetElem$ = function $$DvtPanelDrawerTab$$$$$getTargetElem$$() {
    return this.$getElem$()
  };
  $DvtPanelDrawerTab$$.prototype.$showKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this)
  };
  $DvtPanelDrawerTab$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.$hide$()
  };
  $DvtPanelDrawerTab$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtPanelDrawerTab$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerTab$$$$$getNextNavigable$$($dvt$$8$$) {
    return this.$_panelDrawer$.$getEventManager$().$KeyboardHandler$.$getNextNavigable$(this, $dvt$$8$$)
  };
  $DvtPanelDrawerTab$$.prototype.$_createKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$_createKeyboardFocusEffect$$() {
    var $DvtTrainEvent$$ = this.$getDimensions$();
    this.$_keyboardFocusEffect$ = new $dvt$$8$$.$KeyboardFocusEffect$(this.$getCtx$(), this, new $dvt$$8$$.$Rectangle$($DvtTrainEvent$$.x + 1, $DvtTrainEvent$$.y + 1, $DvtTrainEvent$$.$w$ - 2, $DvtTrainEvent$$.$h$ - 2), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPanelDrawerEventManager$$, $dvt$$8$$.$EventManager$);
  $DvtPanelDrawerEventManager$$.prototype.$OnClick$ = function $$DvtPanelDrawerEventManager$$$$$OnClick$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$8$$);
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$HandleClick$ && $DvtTrainEvent$$.$HandleClick$($dvt$$8$$), $dvt$$8$$.stopPropagation())
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtPanelDrawerEventManager$$$$$OnDblClickInternal$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$isDoubleClickable$ && ($DvtTrainEvent$$.$isDoubleClickable$() && $DvtTrainEvent$$.$HandleDblClick$) && $DvtTrainEvent$$.$HandleDblClick$($dvt$$8$$), $dvt$$8$$.stopPropagation())
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOver$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOver$$($dvt$$8$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $dvt$$8$$);
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtTrainEvent$$ && $DvtTrainEvent$$.$HandleRollOver$ && $DvtTrainEvent$$.$HandleRollOver$($dvt$$8$$)
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOut$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOut$$($dvt$$8$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $dvt$$8$$);
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtTrainEvent$$ && $DvtTrainEvent$$.$HandleRollOut$ && $DvtTrainEvent$$.$HandleRollOut$($dvt$$8$$)
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtPanelDrawerEventManager$$$$$OnComponentTouchClick$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$8$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $dvt$$8$$);
    $DvtTrainEvent$$ && ($DvtTrainEvent$$.$HandleClick$ && $DvtTrainEvent$$.$HandleClick$($dvt$$8$$), $dvt$$8$$.stopPropagation())
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtPanelDrawerKeyboardHandler$$, $dvt$$8$$.$KeyboardHandler$);
  $DvtPanelDrawerKeyboardHandler$$.prototype.Init = function $$DvtPanelDrawerKeyboardHandler$$$$Init$($dvt$$8$$, $DvtTrainEvent$$) {
    $DvtPanelDrawerKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$8$$);
    this.$_panelDrawer$ = $DvtTrainEvent$$
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanelDrawerKeyboardHandler$$$$$processKeyDown$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode, $DvtPanelDrawerEventManager$$ = this.$_eventManager$.$getFocus$();
    return $DvtAccordionDefaults$$ == $dvt$$8$$.$KeyboardEvent$.$TAB$ ? ($DvtAccordionDefaults$$ = $JSCompiler_alias_NULL$$, $dvt$$8$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$), $DvtAccordionDefaults$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$ : this.$_panelDrawer$.$GetTab$(this.$_panelDrawer$.$_panelOrder$[0])) : $DvtAccordionDefaults$$ == $dvt$$8$$.$KeyboardEvent$.$ENTER$ || $DvtAccordionDefaults$$ == $dvt$$8$$.$KeyboardEvent$.$SPACE$ ? ($DvtPanelDrawerEventManager$$.$HandleKeyboardEvent$($DvtTrainEvent$$), 
    $JSCompiler_alias_NULL$$) : $DvtPanelDrawerKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtTrainEvent$$)
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerKeyboardHandler$$$$$getNextNavigable$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if(!($DvtAccordionDefaults$$.keyCode == $dvt$$8$$.$KeyboardEvent$.$DOWN_ARROW$ || $DvtAccordionDefaults$$.keyCode == $dvt$$8$$.$KeyboardEvent$.$UP_ARROW$)) {
      return $DvtTrainEvent$$
    }
    for(var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.keyCode == $dvt$$8$$.$KeyboardEvent$.$DOWN_ARROW$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $DvtPanelDrawerTab$$ = this.$_panelDrawer$.$_panelOrder$, $DvtBreadcrumbsPeer$$ = -1, $DvtBreadcrumbsEventManager$$ = 0;$DvtBreadcrumbsEventManager$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsEventManager$$++) {
      if($DvtTrainEvent$$ == this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsEventManager$$])) {
        $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$ ? $DvtBreadcrumbsEventManager$$ == $DvtPanelDrawerTab$$.length - 1 ? -1 : $DvtBreadcrumbsEventManager$$ + 1 : 0 == $DvtBreadcrumbsEventManager$$ ? -1 : $DvtBreadcrumbsEventManager$$ - 1;
        break
      }
    }
    0 <= $DvtBreadcrumbsPeer$$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsPeer$$]));
    return $DvtPanelDrawerKeyboardHandler$$
  };
  $dvt$$8$$.$Accordion$ = function $$dvt$$8$$$$Accordion$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$Accordion$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$Accordion$.$COLLAPSE_ENA$ = "sectionColEna";
  $dvt$$8$$.$Accordion$.$COLLAPSE_OVR$ = "sectionColOvr";
  $dvt$$8$$.$Accordion$.$COLLAPSE_DWN$ = "sectionColDwn";
  $dvt$$8$$.$Accordion$.$EXPAND_ENA$ = "sectionExpEna";
  $dvt$$8$$.$Accordion$.$EXPAND_OVR$ = "sectionExpOvr";
  $dvt$$8$$.$Accordion$.$EXPAND_DWN$ = "sectionExpDwn";
  $dvt$$8$$.$Accordion$.prototype.Init = function $$dvt$$8$$$$Accordion$$$Init$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$) {
    $dvt$$8$$.$Accordion$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_images$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = (new $DvtAccordionDefaults$$).$calcOptions$($DvtBreadcrumbsDefaults$$);
    this.$_sections$ = {};
    this.$_sectionOrder$ = [];
    this.$_maxWidth$ = $DvtPanelDrawerEventManager$$;
    this.$_minWidth$ = 0;
    this.$_maxHeight$ = $DvtPanelDrawerTab$$;
    this.$_bExpandMany$ = this.$_bCollapseAll$ = $JSCompiler_alias_FALSE$$;
    this.$_eventManager$ = $DvtBreadcrumbsPeer$$
  };
  $dvt$$8$$.$Accordion$.prototype.$addSection$ = function $$dvt$$8$$$$Accordion$$$$addSection$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $DvtPanelDrawerEventManager$$ || ($DvtPanelDrawerEventManager$$ = "accordion_" + $DvtTrainEvent$$.replace(/ /g, "_") + Math.floor(1E9 * Math.random()));
    $DvtTrainEvent$$ = new $dvt$$8$$.$AccordionSection$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $JSCompiler_alias_TRUE$$, this, this.$_eventManager$, $DvtPanelDrawerEventManager$$, this.$_images$, this.$_styleMap$);
    this.$_sections$[$DvtPanelDrawerEventManager$$] = $DvtTrainEvent$$;
    this.$_sectionOrder$.push($DvtPanelDrawerEventManager$$);
    this.$addChild$($DvtTrainEvent$$)
  };
  $dvt$$8$$.$Accordion$.prototype.$render$ = function $$dvt$$8$$$$Accordion$$$$render$$() {
    for(var $dvt$$8$$ = this.$getMaxSectionWidth$(), $DvtTrainEvent$$ = $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$);
      $DvtPanelDrawerKeyboardHandler$$.$render$($dvt$$8$$);
      $DvtTrainEvent$$ && !this.$_bExpandMany$ && $DvtPanelDrawerKeyboardHandler$$.setActive($JSCompiler_alias_FALSE$$);
      $DvtPanelDrawerKeyboardHandler$$.$_isActive$ && $DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() && ($DvtTrainEvent$$ = $JSCompiler_alias_TRUE$$)
    }
    !$DvtTrainEvent$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && this.$getSectionByIndex$(0).setActive($JSCompiler_alias_TRUE$$);
    this.$_drawSections$()
  };
  $dvt$$8$$.$Accordion$.prototype.$setMaxHeight$ = $JSCompiler_set$$("$_maxHeight$");
  $dvt$$8$$.$Accordion$.prototype.$setMaxWidth$ = $JSCompiler_set$$("$_maxWidth$");
  $dvt$$8$$.$Accordion$.prototype.$setMinWidth$ = $JSCompiler_set$$("$_minWidth$");
  $dvt$$8$$.$Accordion$.prototype.update = function $$dvt$$8$$$$Accordion$$$update$($dvt$$8$$) {
    $dvt$$8$$ = this.$getSectionById$($dvt$$8$$);
    var $DvtTrainEvent$$ = $dvt$$8$$.$_isActive$;
    if($DvtTrainEvent$$) {
      $DvtTrainEvent$$ && this.$_canCollapseSection$($dvt$$8$$) && $dvt$$8$$.setActive($JSCompiler_alias_FALSE$$)
    }else {
      if(!this.$_bExpandMany$) {
        for($DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_sectionOrder$.length;$DvtTrainEvent$$++) {
          this.$getSectionByIndex$($DvtTrainEvent$$).setActive($JSCompiler_alias_FALSE$$)
        }
      }
      $dvt$$8$$.setActive($JSCompiler_alias_TRUE$$)
    }
    this.$_drawSections$()
  };
  $dvt$$8$$.$Accordion$.prototype.$getMaxSectionWidth$ = function $$dvt$$8$$$$Accordion$$$$getMaxSectionWidth$$() {
    if(!this.$_maxSectionWidth$) {
      for(var $dvt$$8$$ = 0, $DvtTrainEvent$$ = this.$_styleMap$.paddingX, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$GetTitleDimensions$();
        $DvtPanelDrawerEventManager$$.$w$ > $dvt$$8$$ && ($dvt$$8$$ = $DvtPanelDrawerEventManager$$.$w$);
        $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerKeyboardHandler$$.$getContentDimensions$().$w$ + 2 * $DvtTrainEvent$$;
        $DvtPanelDrawerKeyboardHandler$$ > $dvt$$8$$ && ($dvt$$8$$ = $DvtPanelDrawerKeyboardHandler$$)
      }
      $dvt$$8$$ = Math.min($dvt$$8$$, this.$_maxWidth$);
      this.$_maxSectionWidth$ = $dvt$$8$$ = Math.max($dvt$$8$$, this.$_minWidth$)
    }
    return this.$_maxSectionWidth$
  };
  $dvt$$8$$.$Accordion$.prototype.$getExpandedHeight$ = function $$dvt$$8$$$$Accordion$$$$getExpandedHeight$$() {
    if(!this.$_maxHeight$) {
      for(var $dvt$$8$$ = 0, $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getExpandedDimensions$().$h$;
        if($DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() && $DvtPanelDrawerEventManager$$ > $dvt$$8$$) {
          $dvt$$8$$ = $DvtPanelDrawerEventManager$$
        }else {
          if(!$DvtPanelDrawerKeyboardHandler$$.$isCollapsible$() || this.$_bExpandMany$) {
            $DvtTrainEvent$$ += $DvtPanelDrawerEventManager$$
          }
        }
      }
      this.$_maxHeight$ = $dvt$$8$$ + $DvtTrainEvent$$
    }
    return this.$_maxHeight$
  };
  $dvt$$8$$.$Accordion$.prototype.$getSectionByIndex$ = function $$dvt$$8$$$$Accordion$$$$getSectionByIndex$$($dvt$$8$$) {
    return 0 <= $dvt$$8$$ && $dvt$$8$$ < this.$_sectionOrder$.length ? this.$getSectionById$(this.$_sectionOrder$[$dvt$$8$$]) : $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$Accordion$.prototype.$getSectionById$ = function $$dvt$$8$$$$Accordion$$$$getSectionById$$($dvt$$8$$) {
    return this.$_sections$[$dvt$$8$$]
  };
  $dvt$$8$$.$Accordion$.prototype.$setExpandMany$ = function $$dvt$$8$$$$Accordion$$$$setExpandMany$$() {
    this.$_bExpandMany$ = $JSCompiler_alias_TRUE$$
  };
  $dvt$$8$$.$Accordion$.prototype.$setCollapseAll$ = function $$dvt$$8$$$$Accordion$$$$setCollapseAll$$() {
    this.$_bCollapseAll$ = $JSCompiler_alias_TRUE$$
  };
  $dvt$$8$$.$Accordion$.prototype.$_canCollapseSection$ = function $$dvt$$8$$$$Accordion$$$$_canCollapseSection$$($dvt$$8$$) {
    if($dvt$$8$$.$isCollapsible$()) {
      if(this.$_bCollapseAll$) {
        return $JSCompiler_alias_TRUE$$
      }
      for(var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
        $dvt$$8$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$), $dvt$$8$$.$_isActive$ && $DvtTrainEvent$$++
      }
      return 1 < $DvtTrainEvent$$
    }
    return $JSCompiler_alias_FALSE$$
  };
  $dvt$$8$$.$Accordion$.prototype.$_drawSections$ = function $$dvt$$8$$$$Accordion$$$$_drawSections$$() {
    for(var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$);
      $DvtPanelDrawerKeyboardHandler$$.$setTranslateY$($DvtTrainEvent$$);
      $DvtPanelDrawerKeyboardHandler$$.$_isActive$ ? ($DvtPanelDrawerKeyboardHandler$$.expand(), $DvtTrainEvent$$ += $DvtPanelDrawerKeyboardHandler$$.$getDimensionsWithStroke$().$h$, $DvtTrainEvent$$ += this.$_styleMap$.paddingY) : ($DvtPanelDrawerKeyboardHandler$$.collapse(), $DvtTrainEvent$$ += this.$_styleMap$.sectionHeader.headerHeight)
    }
    $DvtTrainEvent$$ = this.$getDimensionsWithStroke$();
    this.$FireListener$(new $dvt$$8$$.$ResizeEvent$($DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$, 0, 0))
  };
  $dvt$$8$$.$Accordion$.prototype.$getSections$ = function $$dvt$$8$$$$Accordion$$$$getSections$$() {
    for(var $dvt$$8$$ = [], $DvtTrainEvent$$ = 0;$DvtTrainEvent$$ < this.$_sectionOrder$.length;$DvtTrainEvent$$++) {
      $dvt$$8$$.push(this.$getSectionByIndex$($DvtTrainEvent$$))
    }
    return $dvt$$8$$
  };
  $dvt$$8$$.$AccordionSection$ = function $$dvt$$8$$$$AccordionSection$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$AccordionSection$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$AccordionSection$.prototype.Init = function $$dvt$$8$$$$AccordionSection$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$, $styleMap$$90$$) {
    $dvt$$8$$.$AccordionSection$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtBreadcrumbsDefaults$$);
    this.$_parent$ = $DvtBreadcrumbsPeer$$;
    this.$_images$ = $DvtBreadcrumbsRenderer$$;
    this.$_title$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_id$ = $DvtBreadcrumbsDefaults$$;
    this.$_sectionContent$ = $DvtAccordionDefaults$$;
    this.$_collapsedBtn$ = this.$_expandedBtn$ = $JSCompiler_alias_NULL$$;
    this.$_isActive$ = (this.$_isCollapsible$ = $DvtPanelDrawerTab$$) ? $DvtPanelDrawerEventManager$$ : $JSCompiler_alias_TRUE$$;
    this.$_eventManager$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = $styleMap$$90$$;
    this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
    this.$_paddingX$ = this.$_styleMap$.paddingX;
    this.$_paddingY$ = this.$_styleMap$.paddingY;
    this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
    this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
    this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
    this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
  };
  $dvt$$8$$.$AccordionSection$.prototype.getId = $JSCompiler_get$$("$_id$");
  $dvt$$8$$.$AccordionSection$.prototype.$getTitle$ = $JSCompiler_get$$("$_title$");
  $dvt$$8$$.$AccordionSection$.prototype.setActive = $JSCompiler_set$$("$_isActive$");
  $dvt$$8$$.$AccordionSection$.prototype.$isCollapsible$ = $JSCompiler_get$$("$_isCollapsible$");
  $dvt$$8$$.$AccordionSection$.prototype.$getContentDimensions$ = function $$dvt$$8$$$$AccordionSection$$$$getContentDimensions$$() {
    var $dvt$$8$$ = $JSCompiler_alias_NULL$$;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dvt$$8$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dvt$$8$$ = this.$_sectionContent$.$getDimensions$();
    return $dvt$$8$$
  };
  $dvt$$8$$.$AccordionSection$.prototype.$getExpandedDimensions$ = function $$dvt$$8$$$$AccordionSection$$$$getExpandedDimensions$$() {
    var $dvt$$8$$ = $JSCompiler_alias_NULL$$;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$), $dvt$$8$$ = this.$getDimensionsWithStroke$(), this.removeChild(this.$_sectionContent$)) : $dvt$$8$$ = this.$getDimensionsWithStroke$();
    return $dvt$$8$$
  };
  $dvt$$8$$.$AccordionSection$.prototype.$render$ = function $$dvt$$8$$$$AccordionSection$$$$render$$($dvt$$8$$) {
    this.$_createHeader$($dvt$$8$$, this.$_headerHeight$);
    this.$isCollapsible$() ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
    this.$_paddingY$))
  };
  $dvt$$8$$.$AccordionSection$.prototype.collapse = function $$dvt$$8$$$$AccordionSection$$$collapse$() {
    this.$isCollapsible$() && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive($JSCompiler_alias_FALSE$$), this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$())
  };
  $dvt$$8$$.$AccordionSection$.prototype.expand = function $$dvt$$8$$$$AccordionSection$$$expand$() {
    0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
    this.$addChild$(this.$_expandedBtn$);
    this.$addChild$(this.$_sectionContent$);
    this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
    this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
    this.setActive($JSCompiler_alias_TRUE$$);
    this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$()
  };
  $dvt$$8$$.$AccordionSection$.prototype.$HandleHeaderClick$ = function $$dvt$$8$$$$AccordionSection$$$$HandleHeaderClick$$() {
    this.$_parent$.update(this.getId())
  };
  $dvt$$8$$.$AccordionSection$.prototype.$GetTitleDimensions$ = function $$dvt$$8$$$$AccordionSection$$$$GetTitleDimensions$$() {
    if(!this.$_titleDim$) {
      var $DvtTrainEvent$$ = new $dvt$$8$$.$OutputText$(this.$_context$, this.$_title$);
      $DvtTrainEvent$$.$setCSSStyle$(this.$_titleStyle$);
      if($DvtTrainEvent$$ = $DvtTrainEvent$$.$measureDimensions$()) {
        $DvtTrainEvent$$.$w$ = $DvtTrainEvent$$.$w$ + this.$_imageWidth$ + this.$_textPadding$
      }
      this.$_titleDim$ = $DvtTrainEvent$$
    }
    return this.$_titleDim$
  };
  $dvt$$8$$.$AccordionSection$.prototype.$SetTitleDimensions$ = function $$dvt$$8$$$$AccordionSection$$$$SetTitleDimensions$$($dvt$$8$$) {
    if(!this.$_titleDim$ || this.$_titleDim$.$w$ < $dvt$$8$$.$w$ || this.$_titleDim$.$h$ < $dvt$$8$$.$h$) {
      this.$_titleDim$ = $dvt$$8$$
    }
  };
  $dvt$$8$$.$AccordionSection$.prototype.$_createHeader$ = function $$dvt$$8$$$$AccordionSection$$$$_createHeader$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if(this.$isCollapsible$()) {
      var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$;
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$EXPAND_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_OVER$, this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$EXPAND_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$EXPAND_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_ENABLED$, this.$_images$[$dvt$$8$$.$Accordion$.$EXPAND_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_OVER$, this.$_images$[$dvt$$8$$.$Accordion$.$EXPAND_OVR$], this.$_title$, $DvtTrainEvent$$, 
      $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_DOWN$, this.$_images$[$dvt$$8$$.$Accordion$.$EXPAND_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_expandedBtn$ = new $dvt$$8$$.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_expandedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = $dvt$$8$$.$Displayable$.$generateAriaLabel$(this.$_title$, [$dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")]);
      this.$_expandedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$COLLAPSE_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_OVER$, this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$COLLAPSE_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$($dvt$$8$$.$Accordion$.$COLLAPSE_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_ENABLED$, this.$_images$[$dvt$$8$$.$Accordion$.$COLLAPSE_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_OVER$, this.$_images$[$dvt$$8$$.$Accordion$.$COLLAPSE_OVR$], this.$_title$, 
      $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$($dvt$$8$$.$Button$.$STATE_DOWN$, this.$_images$[$dvt$$8$$.$Accordion$.$COLLAPSE_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_collapsedBtn$ = new $dvt$$8$$.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_collapsedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = $dvt$$8$$.$Displayable$.$generateAriaLabel$(this.$_title$, [$dvt$$8$$.$Bundle$.$getTranslatedString$($dvt$$8$$.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")]);
      this.$_collapsedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_eventManager$.$associate$(this.$_expandedBtn$, this);
      this.$_eventManager$.$associate$(this.$_collapsedBtn$, this)
    }else {
      $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonBase$($dvt$$8$$.$Button$.$STATE_DISABLED$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createButtonText$(this.$_title$), this.$_header$ = new $dvt$$8$$.$Container$(this.$_context$), this.$_header$.$addChild$($DvtPanelDrawerKeyboardHandler$$), this.$_header$.$addChild$($DvtPanelDrawerEventManager$$)
    }
  };
  $dvt$$8$$.$AccordionSection$.prototype.$_createHeaderState$ = function $$dvt$$8$$$$AccordionSection$$$$_createHeaderState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    var $DvtBreadcrumbsPeer$$ = this.$_imageWidth$, $DvtBreadcrumbsEventManager$$ = this.$_imageHeight$, $DvtBreadcrumbsDefaults$$ = (this.$_headerHeight$ - $DvtBreadcrumbsEventManager$$) / 2, $DvtBreadcrumbsRenderer$$ = new $dvt$$8$$.$Container$(this.$_context$);
    $DvtTrainEvent$$ = this.$_createButtonBase$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    ($DvtAccordionDefaults$$ = $DvtAccordionDefaults$$ ? new $dvt$$8$$.$Image$(this.$_context$, $DvtAccordionDefaults$$, 0, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : $JSCompiler_alias_NULL$$) && $DvtBreadcrumbsRenderer$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonText$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$ - 0, $DvtPanelDrawerTab$$, $DvtBreadcrumbsRenderer$$);
    $dvt$$8$$.$Agent$.$isRightToLeft$(this.$_context$) ? ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$measureDimensions$(), $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtPanelDrawerTab$$.$w$ - $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$)) : $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtBreadcrumbsPeer$$);
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$($DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$ : $DvtPanelDrawerKeyboardHandler$$);
    return $DvtBreadcrumbsRenderer$$
  };
  $dvt$$8$$.$AccordionSection$.prototype.$_createButtonText$ = function $$dvt$$8$$$$AccordionSection$$$$_createButtonText$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    var $DvtPanelDrawerTab$$ = $JSCompiler_alias_NULL$$;
    $DvtTrainEvent$$ && ($DvtPanelDrawerTab$$ = new $dvt$$8$$.$OutputText$(this.$_context$, $DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setCSSStyle$(this.$_titleStyle$), $dvt$$8$$.$TextUtils$.$fitText$($DvtPanelDrawerTab$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$), $DvtTrainEvent$$ = $DvtPanelDrawerTab$$.$measureDimensions$(), this.$SetTitleDimensions$($DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setTranslateY$((this.$_headerHeight$ - $DvtTrainEvent$$.$h$) / 
    2));
    return $DvtPanelDrawerTab$$
  };
  $dvt$$8$$.$AccordionSection$.prototype.$_createButtonBase$ = function $$dvt$$8$$$$AccordionSection$$$$_createButtonBase$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$;
    switch($DvtTrainEvent$$) {
      case $dvt$$8$$.$Button$.$STATE_OVER$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleOvr;
        break;
      case $dvt$$8$$.$Button$.$STATE_DOWN$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDwn;
        break;
      case $dvt$$8$$.$Button$.$STATE_DISABLED$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDis;
        break;
      default:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleEna
    }
    $DvtTrainEvent$$ = new $dvt$$8$$.$Rect$(this.$_context$, 0, 0, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setStroke$($dvt$$8$$.$AccordionSection$.$_getStroke$($DvtPanelDrawerEventManager$$));
    $DvtTrainEvent$$.$setFill$($dvt$$8$$.$AccordionSection$.$_getFill$($DvtPanelDrawerEventManager$$));
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$AccordionSection$.$_getFill$ = function $$dvt$$8$$$$AccordionSection$$$_getFill$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getBackgroundImage$();
    var $DvtPanelDrawerKeyboardHandler$$ = $JSCompiler_alias_NULL$$;
    if($DvtTrainEvent$$ && $DvtTrainEvent$$ instanceof $dvt$$8$$.$CSSGradient$) {
      var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_arColors$, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$_arAlphas$, $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$_arRatios$;
      $DvtTrainEvent$$ = $DvtTrainEvent$$.$getAngle$();
      $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$8$$.$LinearGradientFill$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$)
    }else {
      $DvtAccordionDefaults$$ && ($DvtPanelDrawerKeyboardHandler$$ = new $dvt$$8$$.$SolidFill$($DvtAccordionDefaults$$, 1))
    }
    return $DvtPanelDrawerKeyboardHandler$$
  };
  $dvt$$8$$.$AccordionSection$.$_getStroke$ = function $$dvt$$8$$$$AccordionSection$$$_getStroke$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BORDER_COLOR$);
    return new $dvt$$8$$.$SolidStroke$($DvtTrainEvent$$, 1, 1)
  };
  $dvt$$8$$.$AccordionSection$.prototype.$getKeyboardBoundingBox$ = function $$dvt$$8$$$$AccordionSection$$$$getKeyboardBoundingBox$$() {
    var $DvtTrainEvent$$ = this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$localToStage$(new $dvt$$8$$.$Point$($DvtAccordionDefaults$$.x, $DvtAccordionDefaults$$.y)), $DvtTrainEvent$$ = $DvtTrainEvent$$.$localToStage$(new $dvt$$8$$.$Point$($DvtAccordionDefaults$$.x + $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.y + $DvtAccordionDefaults$$.$h$));
    return new $dvt$$8$$.$Rectangle$($DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y, $DvtTrainEvent$$.x - $DvtPanelDrawerKeyboardHandler$$.x, $DvtTrainEvent$$.y - $DvtPanelDrawerKeyboardHandler$$.y)
  };
  $dvt$$8$$.$AccordionSection$.prototype.$getTargetElem$ = function $$dvt$$8$$$$AccordionSection$$$$getTargetElem$$() {
    return(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$).$getElem$()
  };
  $dvt$$8$$.$AccordionSection$.prototype.$showKeyboardFocusEffect$ = function $$dvt$$8$$$$AccordionSection$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$)
  };
  $dvt$$8$$.$AccordionSection$.prototype.$hideKeyboardFocusEffect$ = function $$dvt$$8$$$$AccordionSection$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_keyboardFocusEffect$.$hide$()
  };
  $dvt$$8$$.$AccordionSection$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $dvt$$8$$.$AccordionSection$.prototype.$getNextNavigable$ = function $$dvt$$8$$$$AccordionSection$$$$getNextNavigable$$($dvt$$8$$) {
    return this.$_eventManager$.$KeyboardHandler$.$getNextNavigable$(this, $dvt$$8$$)
  };
  $dvt$$8$$.$AccordionSection$.prototype.$_createKeyboardFocusEffect$ = function $$dvt$$8$$$$AccordionSection$$$$_createKeyboardFocusEffect$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getTranslateX$() || $DvtAccordionDefaults$$.x;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getTranslateY$() || $DvtAccordionDefaults$$.y;
    this.$_keyboardFocusEffect$ = new $dvt$$8$$.$KeyboardFocusEffect$(this.$getCtx$(), this, new $dvt$$8$$.$Rectangle$($DvtPanelDrawerKeyboardHandler$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.$h$), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtAccordionDefaults$$, $dvt$$8$$.$BaseComponentDefaults$);
  $DvtAccordionDefaults$$.$VERSION_1$ = {skin:$dvt$$8$$.$CSSStyle$.$SKIN_ALTA$, sectionHeader:{styleEna:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + 
  "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDis:new $dvt$$8$$.$CSSStyle$($dvt$$8$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
  $DvtAccordionDefaults$$.$SKIN_ALTA$ = {};
  $dvt$$8$$.$Train$ = function $$dvt$$8$$$$Train$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$Train$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$Train$.$TRAIN_EVENT$ = "dvtTrain";
  $dvt$$8$$.$Train$.$FILL_COLOR$ = "#c0cbd5";
  $dvt$$8$$.$Train$.$BORDER_COLOR$ = "#5d7891";
  $dvt$$8$$.$Train$.$SELECTED_FILL_COLOR$ = "#61bde3";
  $dvt$$8$$.$Train$.$SELECTED_BORDER_COLOR$ = "#0066ff";
  $dvt$$8$$.$Train$.$BUTTON_SIZE$ = 8;
  $dvt$$8$$.$Train$.$VPADDING$ = 1;
  $dvt$$8$$.$Train$.$HPADDING$ = 3;
  $dvt$$8$$.$Train$.$STATE_ENABLED$ = 0;
  $dvt$$8$$.$Train$.$STATE_HOVER$ = 1;
  $dvt$$8$$.$Train$.$STATE_SELECTED$ = 2;
  $dvt$$8$$.$Train$.prototype.Init = function $$dvt$$8$$$$Train$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$8$$.$Train$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtPanelDrawerTab$$);
    this.$_tooltipManager$ = $DvtTrainEvent$$.$getTooltipManager$();
    this.$_labels$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_buttonStyles$ = $DvtPanelDrawerEventManager$$;
    this.$_count$ = $DvtPanelDrawerKeyboardHandler$$.length;
    this.$_buttons$ = Array(this.$_count$);
    this.$_selectedIndex$ = 0;
    this.$_isAltaSkin$ = $DvtBreadcrumbsPeer$$;
    this.$RenderSelf$($DvtAccordionDefaults$$)
  };
  $dvt$$8$$.$Train$.prototype.$setSelectedIndex$ = function $$dvt$$8$$$$Train$$$$setSelectedIndex$$($dvt$$8$$) {
    0 <= $dvt$$8$$ && $dvt$$8$$ < this.$_count$ && this.$SelectedIndexChanged$(this.$_selectedIndex$, $dvt$$8$$)
  };
  $dvt$$8$$.$Train$.prototype.$HandleClick$ = function $$dvt$$8$$$$Train$$$$HandleClick$$($DvtTrainEvent$$) {
    $dvt$$8$$.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    for(var $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_buttons$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.target;
      if(this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$ || this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$.getParent()) {
        $DvtTrainEvent$$ = this.$_selectedIndex$;
        this.$SelectedIndexChanged$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
        $DvtTrainEvent$$ != $DvtAccordionDefaults$$ && this.$fireTrainEvent$();
        break
      }
    }
  };
  $dvt$$8$$.$Train$.prototype.$SelectedIndexChanged$ = function $$dvt$$8$$$$Train$$$$SelectedIndexChanged$$($dvt$$8$$, $DvtTrainEvent$$) {
    this.$_selectedIndex$ = $DvtTrainEvent$$;
    var $DvtAccordionDefaults$$ = this.$_buttons$[$dvt$$8$$];
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$.$overState$ && $DvtAccordionDefaults$$.$overState$.setCursor("pointer"), $DvtAccordionDefaults$$.$downState$ && $DvtAccordionDefaults$$.$downState$.setCursor("pointer"), $DvtAccordionDefaults$$.$setToggled$($JSCompiler_alias_FALSE$$));
    if($DvtAccordionDefaults$$ = this.$_buttons$[$DvtTrainEvent$$]) {
      $DvtAccordionDefaults$$.$overState$ && $DvtAccordionDefaults$$.$overState$.setCursor("default"), $DvtAccordionDefaults$$.$downState$ && $DvtAccordionDefaults$$.$downState$.setCursor("default"), $DvtAccordionDefaults$$.$setToggled$($JSCompiler_alias_TRUE$$)
    }
  };
  $dvt$$8$$.$Train$.prototype.$addTrainEventListener$ = function $$dvt$$8$$$$Train$$$$addTrainEventListener$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$addEvtListener$($dvt$$8$$.$Train$.$TRAIN_EVENT$, $DvtTrainEvent$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$)
  };
  $dvt$$8$$.$Train$.prototype.$fireTrainEvent$ = function $$dvt$$8$$$$Train$$$$fireTrainEvent$$() {
    var $dvt$$8$$ = new $DvtTrainEvent$$(this.$_selectedIndex$);
    this.$FireListener$($dvt$$8$$, $JSCompiler_alias_FALSE$$)
  };
  $dvt$$8$$.$Train$.prototype.$RenderSelf$ = function $$dvt$$8$$$$Train$$$$RenderSelf$$($DvtTrainEvent$$) {
    for(var $DvtAccordionDefaults$$ = $dvt$$8$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtPanelDrawerKeyboardHandler$$ = this.$_getButtonSize$(), $DvtPanelDrawerEventManager$$ = 0;$DvtPanelDrawerEventManager$$ < this.$_count$;$DvtPanelDrawerEventManager$$++) {
      var $DvtPanelDrawerTab$$;
      $DvtPanelDrawerTab$$ = this.$CreateButton$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ == this.$_selectedIndex$, this.$_labels$[$DvtPanelDrawerEventManager$$]);
      this.$addButtonListeners$($DvtPanelDrawerTab$$);
      var $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$;
      $DvtAccordionDefaults$$ && ($DvtBreadcrumbsPeer$$ = this.$_count$ - 1 - $DvtPanelDrawerEventManager$$);
      $DvtTrainEvent$$ && $DvtTrainEvent$$.$associate$($DvtPanelDrawerTab$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerTab$$.$setTranslate$($DvtBreadcrumbsPeer$$ * ($DvtPanelDrawerKeyboardHandler$$ + $dvt$$8$$.$Train$.$HPADDING$), this.$_isAltaSkin$ ? 0 : $dvt$$8$$.$Train$.$VPADDING$);
      this.$addChild$($DvtPanelDrawerTab$$);
      this.$_buttons$[$DvtPanelDrawerEventManager$$] = $DvtPanelDrawerTab$$
    }
  };
  $dvt$$8$$.$Train$.prototype.$DrawButtonState$ = function $$dvt$$8$$$$Train$$$$DrawButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$;
    $DvtAccordionDefaults$$ ? ($DvtBreadcrumbsPeer$$ = 0, $DvtPanelDrawerTab$$ = $dvt$$8$$.$Train$.$SELECTED_FILL_COLOR$, $DvtPanelDrawerEventManager$$ = $dvt$$8$$.$Train$.$SELECTED_BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_buttonStyles$[$dvt$$8$$.$Train$.$STATE_SELECTED$])) : ($DvtBreadcrumbsPeer$$ = 1, $DvtPanelDrawerTab$$ = $dvt$$8$$.$Train$.$FILL_COLOR$, $DvtPanelDrawerEventManager$$ = $dvt$$8$$.$Train$.$BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = 
    this.$_buttonStyles$[$dvt$$8$$.$Train$.$STATE_ENABLED$]));
    $DvtPanelDrawerKeyboardHandler$$ && ($DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BORDER_COLOR$) && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BORDER_COLOR$)), $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$($dvt$$8$$.$CSSStyle$.$BACKGROUND_COLOR$)));
    $DvtPanelDrawerKeyboardHandler$$ = new $dvt$$8$$.$Rect$(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$($DvtPanelDrawerTab$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$($DvtPanelDrawerEventManager$$);
    return $DvtPanelDrawerKeyboardHandler$$
  };
  $dvt$$8$$.$Train$.prototype.$addButtonListeners$ = function $$dvt$$8$$$$Train$$$$addButtonListeners$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$.$addEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHSTART$, this.$HandleClick$, $JSCompiler_alias_FALSE$$, this);
    $dvt$$8$$.$Agent$.$isTouchDevice$() || $DvtTrainEvent$$.$addEvtListener$($dvt$$8$$.$MouseEvent$.$CLICK$, this.$HandleClick$, $JSCompiler_alias_FALSE$$, this)
  };
  $dvt$$8$$.$Train$.prototype.$_getButtonSize$ = function $$dvt$$8$$$$Train$$$$_getButtonSize$$() {
    if(!this.$_buttonSize$) {
      if(this.$_buttonStyles$) {
        var $DvtTrainEvent$$ = this.$_buttonStyles$[0];
        $DvtTrainEvent$$ && (this.$_buttonSize$ = $dvt$$8$$.$CSSStyle$.$toNumber$($DvtTrainEvent$$.getWidth()))
      }
      this.$_buttonSize$ || (this.$_buttonSize$ = $dvt$$8$$.$Train$.$BUTTON_SIZE$)
    }
    return this.$_buttonSize$
  };
  $dvt$$8$$.$Train$.prototype.$CreateButtonState$ = function $$dvt$$8$$$$Train$$$$CreateButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    return new $dvt$$8$$.$Image$(this.$getCtx$(), $DvtTrainEvent$$, 0, 0, $DvtAccordionDefaults$$, $DvtAccordionDefaults$$)
  };
  $dvt$$8$$.$Train$.prototype.$MakeButtonState$ = function $$dvt$$8$$$$Train$$$$MakeButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = this.$_buttonStyles$ ? this.$_buttonStyles$[$DvtAccordionDefaults$$] : $JSCompiler_alias_NULL$$;
    $DvtTrainEvent$$ = ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$.$getIconUrl$() : $JSCompiler_alias_NULL$$) ? this.$CreateButtonState$($DvtPanelDrawerEventManager$$, $DvtTrainEvent$$) : this.$DrawButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$ == $dvt$$8$$.$Train$.$STATE_SELECTED$);
    $DvtTrainEvent$$.setCursor($DvtAccordionDefaults$$ == $dvt$$8$$.$Train$.$STATE_ENABLED$ || $DvtPanelDrawerKeyboardHandler$$ ? "default" : "pointer");
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$Train$.prototype.$CreateButton$ = function $$dvt$$8$$$$Train$$$$CreateButton$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtTrainEvent$$ = new $dvt$$8$$.$Button$(this.$getCtx$(), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$8$$.$Train$.$STATE_ENABLED$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$8$$.$Train$.$STATE_HOVER$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, $dvt$$8$$.$Train$.$STATE_SELECTED$, $DvtAccordionDefaults$$), $JSCompiler_alias_NULL$$);
    $DvtTrainEvent$$.$setTooltip$($DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setToggleEnabled$();
    $DvtAccordionDefaults$$ && $DvtTrainEvent$$.$setToggled$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$
  };
  $dvt$$8$$.$Obj$.$createSubclass$($DvtTrainEvent$$, $dvt$$8$$.$BaseComponentEvent$);
  $DvtTrainEvent$$.$TYPE$ = "dvtTrain";
  $DvtTrainEvent$$.prototype.$getIndex$ = $JSCompiler_get$$("$_index$");
  $dvt$$8$$.$OverviewWindow$ = function $$dvt$$8$$$$OverviewWindow$$($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    this.Init($dvt$$8$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$)
  };
  $dvt$$8$$.$Obj$.$createSubclass$($dvt$$8$$.$OverviewWindow$, $dvt$$8$$.$Container$);
  $dvt$$8$$.$OverviewWindow$.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
  $dvt$$8$$.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
  $dvt$$8$$.$OverviewWindow$.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
  $dvt$$8$$.$OverviewWindow$.prototype.Init = function $$dvt$$8$$$$OverviewWindow$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    $dvt$$8$$.$OverviewWindow$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtAccordionDefaults$$);
    this.$_x$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_y$ = $DvtPanelDrawerEventManager$$;
    this.$_ww$ = $DvtPanelDrawerTab$$;
    this.$_hh$ = $DvtBreadcrumbsPeer$$;
    this.$_skinStyle$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$render$ = function $$dvt$$8$$$$OverviewWindow$$$$render$$() {
    this.$_md$ = $JSCompiler_alias_FALSE$$;
    this.$_panEnable$ = $JSCompiler_alias_TRUE$$;
    this.$_overview$ && ($dvt$$8$$.$Agent$.$isTouchDevice$() ? (this.$_overview$.$removeEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHSTART$, this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHEND$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEDOWN$, 
    this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEUP$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEOUT$, this.$_mouseOut$, $JSCompiler_alias_FALSE$$, this)), this.$_overview$.$setClipPath$($JSCompiler_alias_NULL$$));
    this.$removeChildren$();
    this.$_overview$ = this.$_viewport$ = $JSCompiler_alias_NULL$$;
    var $DvtTrainEvent$$ = new $dvt$$8$$.$ClipPath$(this.getId());
    $DvtTrainEvent$$.$addRect$(0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$ = new $dvt$$8$$.$Rect$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$.$setClipPath$($DvtTrainEvent$$);
    this.$_overview$.$setInvisibleFill$();
    this.$addChild$(this.$_overview$);
    this.$_viewport$ = new $dvt$$8$$.$Rect$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
    $DvtTrainEvent$$ = this.$getSkinStyleAttr$($dvt$$8$$.$OverviewWindow$.$VIEWPORT_BG_COLOR$);
    this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$($dvt$$8$$.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$), $JSCompiler_alias_NULL$$, 2);
    this.$_viewport$.$setSolidFill$($DvtTrainEvent$$);
    this.$_viewport$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_overview$.$addChild$(this.$_viewport$);
    $dvt$$8$$.$Agent$.$isTouchDevice$() ? (this.$_overview$.$addEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHSTART$, this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$($dvt$$8$$.$TouchEvent$.$TOUCHEND$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEDOWN$, this.$_mouseDown$, 
    $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEUP$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$($dvt$$8$$.$MouseEvent$.$MOUSEOUT$, this.$_mouseOut$, $JSCompiler_alias_FALSE$$, this))
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$loadXmlNode$ = function $$dvt$$8$$$$OverviewWindow$$$$loadXmlNode$$($dvt$$8$$) {
    this.$_isDisclosed$ = "true" == $dvt$$8$$.$getAttr$("disclosed")
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_isDisclosed$");
  $dvt$$8$$.$OverviewWindow$.prototype.$setDisclosed$ = $JSCompiler_set$$("$_isDisclosed$");
  $dvt$$8$$.$OverviewWindow$.prototype.$getContentAreaWidth$ = function $$dvt$$8$$$$OverviewWindow$$$$getContentAreaWidth$$() {
    return this.$getContentDimensions$().$w$
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getContentAreaHeight$ = function $$dvt$$8$$$$OverviewWindow$$$$getContentAreaHeight$$() {
    return this.$getContentDimensions$().$h$
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getContentDimensions$ = function $$dvt$$8$$$$OverviewWindow$$$$getContentDimensions$$() {
    return new $dvt$$8$$.$Rectangle$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$setViewportDimensions$ = function $$dvt$$8$$$$OverviewWindow$$$$setViewportDimensions$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x + $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.y + $DvtTrainEvent$$.$h$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.x, $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.y, $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerEventManager$$.x - 
    $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerEventManager$$.y - $DvtPanelDrawerKeyboardHandler$$.y;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getX$, this.$_viewport$.$setX$, $DvtPanelDrawerTab$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getY$, this.$_viewport$.$setY$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getWidth, this.$_viewport$.$setWidth$, $DvtBreadcrumbsEventManager$$), 
    $DvtAccordionDefaults$$.$addProp$($dvt$$8$$.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getHeight, this.$_viewport$.$setHeight$, $DvtPanelDrawerKeyboardHandler$$)) : (this.$_viewport$.$setX$($DvtPanelDrawerTab$$), this.$_viewport$.$setY$($DvtBreadcrumbsPeer$$), this.$_viewport$.$setWidth$($DvtBreadcrumbsEventManager$$), this.$_viewport$.$setHeight$($DvtPanelDrawerKeyboardHandler$$))
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getViewportDimensions$ = function $$dvt$$8$$$$OverviewWindow$$$$getViewportDimensions$$() {
    var $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$()), $DvtAccordionDefaults$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$() + this.$_viewport$.getWidth(), this.$_viewport$.$getY$() + this.$_viewport$.getHeight());
    return new $dvt$$8$$.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$.x - $DvtTrainEvent$$.x, $DvtAccordionDefaults$$.y - $DvtTrainEvent$$.y)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$setContent$ = function $$dvt$$8$$$$OverviewWindow$$$$setContent$$($dvt$$8$$) {
    var $DvtTrainEvent$$ = this.$getViewportDimensions$();
    this.$_content$ && this.$_overview$.removeChild(this.$_content$);
    this.$_content$ = $dvt$$8$$;
    this.$_overview$.$addChildAt$($dvt$$8$$, 0);
    this.$setViewportDimensions$($DvtTrainEvent$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_mouseDown$ = function $$dvt$$8$$$$OverviewWindow$$$$_mouseDown$$($DvtTrainEvent$$) {
    if(!this.$_md$ && this.$_panEnable$) {
      this.$_md$ = $JSCompiler_alias_TRUE$$;
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new $dvt$$8$$.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$)
    }
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_mouseMove$ = function $$dvt$$8$$$$OverviewWindow$$$$_mouseMove$$($DvtTrainEvent$$) {
    if(this.$_md$ && this.$_panEnable$) {
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new $dvt$$8$$.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$)
    }
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_mouseUp$ = function $$dvt$$8$$$$OverviewWindow$$$$_mouseUp$$() {
    this.$_md$ && this.$_panEnable$ && (this.$_md$ = $JSCompiler_alias_FALSE$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_mouseOut$ = function $$dvt$$8$$$$OverviewWindow$$$$_mouseOut$$() {
    this.$_mouseUp$()
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_getRelativePosition$ = function $$dvt$$8$$$$OverviewWindow$$$$_getRelativePosition$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$;
    $dvt$$8$$.$Agent$.$isTouchDevice$() ? ($DvtTrainEvent$$ = $DvtTrainEvent$$.touches, 0 < $DvtTrainEvent$$.length && ($DvtAccordionDefaults$$ = $DvtTrainEvent$$[0].pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$[0].pageY)) : ($DvtAccordionDefaults$$ = $DvtTrainEvent$$.pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.pageY);
    return this.$_context$.$pageToStageCoords$($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$TransformFromViewportToContentCoords$ = function $$dvt$$8$$$$OverviewWindow$$$$TransformFromViewportToContentCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = 0, $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 1, $DvtBreadcrumbsPeer$$ = 1;
    this.$_content$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_content$.$getTranslateX$(), $DvtPanelDrawerEventManager$$ = this.$_content$.$getTranslateY$(), $DvtPanelDrawerTab$$ = this.$_content$.$getScaleX$(), $DvtBreadcrumbsPeer$$ = this.$_content$.$getScaleY$());
    return new $dvt$$8$$.$Point$(($DvtTrainEvent$$ - $DvtPanelDrawerKeyboardHandler$$) / $DvtPanelDrawerTab$$, ($DvtAccordionDefaults$$ - $DvtPanelDrawerEventManager$$) / $DvtBreadcrumbsPeer$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$TransformFromContentToViewportCoords$ = function $$dvt$$8$$$$OverviewWindow$$$$TransformFromContentToViewportCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 0, $DvtBreadcrumbsPeer$$ = 1, $DvtBreadcrumbsEventManager$$ = 1;
    this.$_content$ && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateX$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getTranslateX$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateY$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getTranslateY$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$ ? 
    $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getScaleX$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getScaleX$(), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getScaleY$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getScaleY$());
    return new $dvt$$8$$.$Point$($DvtTrainEvent$$ * $DvtBreadcrumbsPeer$$ + $DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$ * $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getSkinStyle$ = $JSCompiler_get$$("$_skinStyle$");
  $dvt$$8$$.$OverviewWindow$.prototype.$setSkinStyle$ = $JSCompiler_set$$("$_skinStyle$");
  $dvt$$8$$.$OverviewWindow$.prototype.$getSkinStyleAttr$ = function $$dvt$$8$$$$OverviewWindow$$$$getSkinStyleAttr$$($dvt$$8$$) {
    return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$dvt$$8$$] ? this.$_skinStyle$[$dvt$$8$$] : $JSCompiler_alias_NULL$$
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$_getCenteredViewportDimensions$ = function $$dvt$$8$$$$OverviewWindow$$$$_getCenteredViewportDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$_overview$.$localToStage$(new $dvt$$8$$.$Point$(0, 0)), $DvtPanelDrawerKeyboardHandler$$ = this.$_viewport$.$getDimensions$(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.x - $DvtAccordionDefaults$$.x - $DvtPanelDrawerKeyboardHandler$$.$w$ / 2, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.y - $DvtAccordionDefaults$$.y - $DvtPanelDrawerKeyboardHandler$$.$h$ / 2;
    $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$ + $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtAccordionDefaults$$ + $DvtPanelDrawerKeyboardHandler$$.$h$);
    return new $dvt$$8$$.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtPanelDrawerKeyboardHandler$$.x - $DvtTrainEvent$$.x, $DvtPanelDrawerKeyboardHandler$$.y - $DvtTrainEvent$$.y)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$SetViewportRectangle$ = function $$dvt$$8$$$$OverviewWindow$$$$SetViewportRectangle$$($dvt$$8$$) {
    this.$_viewport$.$setX$($dvt$$8$$.x);
    this.$_viewport$.$setY$($dvt$$8$$.y);
    this.$_viewport$.$setWidth$($dvt$$8$$.$w$);
    this.$_viewport$.$setHeight$($dvt$$8$$.$h$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$GetViewportRectangle$ = function $$dvt$$8$$$$OverviewWindow$$$$GetViewportRectangle$$() {
    return new $dvt$$8$$.$Rectangle$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getDimensions$ = function $$dvt$$8$$$$OverviewWindow$$$$getDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new $dvt$$8$$.$Rectangle$(0, 0, this.$_ww$, this.$_hh$);
    return!$DvtTrainEvent$$ || $DvtTrainEvent$$ === this ? $DvtAccordionDefaults$$ : this.$ConvertCoordSpaceRect$($DvtAccordionDefaults$$, $DvtTrainEvent$$)
  };
  $dvt$$8$$.$OverviewWindow$.prototype.$getDimensionsWithStroke$ = function $$dvt$$8$$$$OverviewWindow$$$$getDimensionsWithStroke$$($dvt$$8$$) {
    return this.$getDimensions$($dvt$$8$$)
  };
  $dvt$$8$$.$Bundle$.$addDefaultStrings$($dvt$$8$$.$Bundle$.$SUBCOMPONENT_PREFIX$, {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", 
  CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", 
  SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"})
})(dvt);

  return dvt;
});
