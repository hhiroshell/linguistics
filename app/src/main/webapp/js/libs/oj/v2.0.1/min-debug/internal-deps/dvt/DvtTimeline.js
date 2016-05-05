/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
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

dvt.$TimelineOverview$ = function $dvt$$TimelineOverview$$($context$$426$$, $callback$$133$$, $callbackObj$$95$$) {
  this.Init($context$$426$$, $callback$$133$$, $callbackObj$$95$$)
};
$goog$exportPath_$$("dvt.TimelineOverview", dvt.$TimelineOverview$);
dvt.$Obj$.$createSubclass$(dvt.$TimelineOverview$, dvt.$Overview$);
dvt.$TimelineOverview$.$ENABLED_STATE$ = "_";
dvt.$TimelineOverview$.$HOVER_STATE$ = "_h";
dvt.$TimelineOverview$.$SELECTED_STATE$ = "_s";
dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$ = "_as";
dvt.$TimelineOverview$.$BORDER_STYLE$ = "bs";
dvt.$TimelineOverview$.$BORDER_COLOR$ = "bc";
dvt.$TimelineOverview$.$BORDER_WIDTH$ = "bw";
dvt.$TimelineOverview$.$DURATION_BORDER_STYLE$ = "dbs";
dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$ = "dbc";
dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$ = "dbw";
dvt.$TimelineOverview$.$BORDER_OFFSET$ = "bof";
dvt.$TimelineOverview$.$BORDER_OPACITY$ = "bo";
dvt.$TimelineOverview$.$GLOW_COLOR$ = "gc";
dvt.$TimelineOverview$.$GLOW_OPACITY$ = "go";
dvt.$TimelineOverview$.$FILL_COLOR$ = "fc";
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($colors$$4_context$$427$$, $callback$$134$$, $callbackObj$$96$$) {
  dvt.$TimelineOverview$.$superclass$.Init.call(this, $colors$$4_context$$427$$, $callback$$134$$, $callbackObj$$96$$);
  $colors$$4_context$$427$$ = [dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getPastel$("#aadd77", 0.35)), "#aadd77", dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getDarker$("#aadd77", 0.5))];
  dvt.$OverviewUtils$.$supportsTouch$() && ($colors$$4_context$$427$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$4_context$$427$$;
  this.$_markerBorderFill$ = dvt.$SolidFill$.$invisibleFill$();
  this.$_markerSize$ = 12
};
$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new $DvtTimelineOverviewParser$$(this)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$13$$) {
  dvt.$TimelineOverview$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$13$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$13$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$13$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$13$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$13$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$13$$.$labelStyle$ && (this.$_labelStyle$ = new dvt.$CSSStyle$($_eOffset_borderOpacity_props$$13$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$13$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$13$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new dvt.$LinearGradientFill$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new dvt.$LinearGradientFill$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$13$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new dvt.$SolidStroke$("#aadd77", $_eOffset_borderOpacity_props$$13$$)
};
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($pos$$75$$, $text$$77$$, $width$$143$$, $height$$119$$, $maxWidth$$24$$, $id$$208$$) {
  dvt.$TimelineOverview$.$superclass$.$addLabel$.call(this, $pos$$75$$, $text$$77$$, $width$$143$$, $height$$119$$, $maxWidth$$24$$, $id$$208$$, this.$_labelStyle$)
};
function $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$209$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$209$$, $durationId$$1$$ = "_drn_" + $id$$209$$, $numChildren$$15$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$8$$ = 0;$childIndex$$8$$ < $numChildren$$15$$;$childIndex$$8$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$8$$);
    if($drawable$$7$$ != $JSCompiler_alias_NULL$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$1$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$98$$, $style$$104$$) {
  return this.$_borderStyles$[$state$$98$$ + $style$$104$$]
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return $drawable$$9$$.$_node$ != $JSCompiler_alias_NULL$$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return $drawable$$10$$.$_node$ != $JSCompiler_alias_NULL$$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$300_scaleX$$5$$) {
  $node$$300_scaleX$$5$$ = $node$$300_scaleX$$5$$.$getScaleX$();
  $node$$300_scaleX$$5$$ == $JSCompiler_alias_NULL$$ && ($node$$300_scaleX$$5$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$300_scaleX$$5$$
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$301_scaleY$$5$$) {
  $node$$301_scaleY$$5$$ = $node$$301_scaleY$$5$$.$getScaleY$();
  $node$$301_scaleY$$5$$ == $JSCompiler_alias_NULL$$ && ($node$$301_scaleY$$5$$ = 1);
  return $node$$301_scaleY$$5$$
};
$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$144$$, $height$$120$$) {
  dvt.$TimelineOverview$.$superclass$.$parseDataXML$.call(this, $width$$144$$, $height$$120$$);
  if(this.$_markers$ != $JSCompiler_alias_NULL$$) {
    for(var $opt$$ = $JSCompiler_StaticMethods_calculateOptimalSize$$(this, this.$_start$, this.$_end$, $width$$144$$, $height$$120$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_4598_j$$104$$ = 0;$context$$inline_4598_j$$104$$ < this.$_markers$.length;$context$$inline_4598_j$$104$$++) {
      var $i$$inline_4599_marker$$16_node$$inline_4573$$ = this.$_markers$[$context$$inline_4598_j$$104$$];
      if($i$$inline_4599_marker$$16_node$$inline_4573$$.$_endTime$ == $JSCompiler_alias_NULL$$) {
        var $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ = $opt$$, $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$ = "_mrk_" + $i$$inline_4599_marker$$16_node$$inline_4573$$.getId(), $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getColor$(), $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$_gradient$, 
        $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getOpacity$();
        $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ == $JSCompiler_alias_NULL$$ && ($durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ = this.$_defOpacity$, 0 == $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ && $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ != $JSCompiler_alias_NULL$$ && ($durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ = 1));
        var $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = this.$getScaleX$($i$$inline_4599_marker$$16_node$$inline_4573$$), $cx$$inline_4584_scaleY$$inline_4580$$ = this.$getScaleY$($i$$inline_4599_marker$$16_node$$inline_4573$$), $j$$inline_4600_marker$$inline_4581$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getShape$();
        if(this.$isVertical$()) {
          var $j$$inline_4600_marker$$inline_4581$$ = dvt.$SimpleMarker$.$RECTANGLE$, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = 2 * $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ = 2 * $cx$$inline_4584_scaleY$$inline_4580$$, $cx$$inline_4584_scaleY$$inline_4580$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getY$() + 
          $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ / 2, $cy$$inline_4585$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getX$() + $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ / 2
        }else {
          $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ *= $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ *= $cx$$inline_4584_scaleY$$inline_4580$$, $cx$$inline_4584_scaleY$$inline_4580$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getX$() + $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ / 
          2, $cy$$inline_4585$$ = $i$$inline_4599_marker$$16_node$$inline_4573$$.$getY$() + $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ / 2
        }
        $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $j$$inline_4600_marker$$inline_4581$$, $JSCompiler_alias_NULL$$, $cx$$inline_4584_scaleY$$inline_4580$$, $cy$$inline_4585$$, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 
        $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$);
        $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$.$_node$ = $i$$inline_4599_marker$$16_node$$inline_4573$$;
        $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ == $JSCompiler_alias_NULL$$ && $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ == this.$_defOpacity$ && $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ == $JSCompiler_alias_NULL$$ ? ($duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ = $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$CIRCLE$ ? this.$_radialFill$ : 
        this.$_linearFill$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ = this.$_border$) : ($colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = this.$_defColors$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ != $JSCompiler_alias_NULL$$ && (dvt.$OverviewUtils$.$supportsTouch$() ? $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = [$color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$] : 
        ($colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = dvt.$ColorUtils$.$getPastel$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, 0.5), $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ = dvt.$ColorUtils$.$getDarker$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, 0.5), $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = 
        [$colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$])), $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$ = [$durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$], 
        $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ = $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ == $JSCompiler_alias_NULL$$ ? $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$CIRCLE$ ? new dvt.$LinearGradientFill$(250, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$) : new dvt.$LinearGradientFill$(180, 
        $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$) : new dvt.$SolidFill$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, $alphas$$inline_4590_darker$$inline_4589_height$$inline_4583_sz$$inline_4574$$[0]), $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ = new dvt.$SolidStroke$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, 
        $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$));
        $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$.$setFill$($duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$);
        $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$.$setStroke$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$.$setSelectable$($JSCompiler_alias_TRUE$$);
        $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ = this.$getNumChildren$();
        $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ = this.$getChildAt$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ - 1);
        $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$.getId() || "arr" == $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$.getId()) ? this.$addChildAt$($displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$);
        $i$$inline_4599_marker$$16_node$$inline_4573$$.$setDisplayable$($displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$);
        this.$applyState$($displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
        (this.$isVertical$() || $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$DIAMOND$ || $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $j$$inline_4600_marker$$inline_4581$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$.$setPixelHinting$()
      }else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_4599_marker$$16_node$$inline_4573$$
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_4598_j$$104$$ = this.$getCtx$();
    for($i$$inline_4599_marker$$16_node$$inline_4573$$ = this.$_maxDurationY$;0 < $i$$inline_4599_marker$$16_node$$inline_4573$$;$i$$inline_4599_marker$$16_node$$inline_4573$$--) {
      for($j$$inline_4600_marker$$inline_4581$$ = 0;$j$$inline_4600_marker$$inline_4581$$ < $durationMarkers$$.length;$j$$inline_4600_marker$$inline_4581$$++) {
        $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$ = $durationMarkers$$[$j$$inline_4600_marker$$inline_4581$$], $i$$inline_4599_marker$$16_node$$inline_4573$$ == $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_durationLevel$ && ($duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ = dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$ = "_drn_" + $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.getId(), $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ = 9 + 5 * $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_durationLevel$, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ = 
        dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$ = this.$isVertical$() ? this.$isRTL$() ? new dvt.$Rect$($context$$inline_4598_j$$104$$, 0, $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, 
        $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ - $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$) : new dvt.$Rect$($context$$inline_4598_j$$104$$, this.$Width$ - $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, 
        $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ - $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$) : this.$isRTL$() ? new dvt.$Rect$($context$$inline_4598_j$$104$$, this.$Width$ - $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$, 
        this.$Height$ - $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ - 20, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ - $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$) : new dvt.$Rect$($context$$inline_4598_j$$104$$, 
        $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, this.$Height$ - $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ - 20, $colors$$inline_4587_lighter$$inline_4588_scaleX$$inline_4579_width$$inline_4582_x2$$inline_4605$$ - $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$, $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$), 
        $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$.$setFill$(new dvt.$SolidFill$($color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_durationFillColor$)), $displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$ = new dvt.$SolidStroke$(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), 1, 1), $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$.$setStroke$($displayable$$inline_4586_durationId$$inline_4603_feelerStroke$$inline_4607_itemId$$inline_4575$$), 
        $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$.$setPixelHinting$(), $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$.$_node$ = $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$, this.$addChild$($duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$), $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_durationBar$ = $duration$$inline_4606_fill$$inline_4591_isGradient$$inline_4577_x$$inline_4602$$, 
        $color$$inline_4576_count$$inline_4593_node$$inline_4601_stroke$$inline_4592$$.$_durationY$ = $durationY$$inline_4604_lastChild$$inline_4594_opacity$$inline_4578$$ - 2)
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$
  }
};
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = $JSCompiler_alias_NULL$$;
  this.$_durationColorMap$ == $JSCompiler_alias_NULL$$ && (this.$_durationColorMap$ = {});
  for(var $i$$658$$ = 0;$i$$658$$ < $durationMarkers$$1$$.length;$i$$658$$++) {
    var $marker$$17$$ = $durationMarkers$$1$$[$i$$658$$], $id$$210$$ = $marker$$17$$.getId(), $sId$$2$$ = $id$$210$$.substring($id$$210$$.indexOf(":") + 1, $id$$210$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$17$$.$_durationLevel$ = $JSCompiler_StaticMethods_calculateDurationY$$(this, $marker$$17$$, $durationMarkers$$1$$);
    $marker$$17$$.$_durationFillColor$ == $JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$210$$] == $JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$210$$] = this.$_colorCount$, $marker$$17$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$17$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$210$$]])
  }
};
$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : $JSCompiler_alias_NULL$$
};
dvt.$TimelineOverview$.prototype.getDurationColorMap = dvt.$TimelineOverview$.prototype.$getDurationColorMap$;
function $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$39$$, $end$$30$$, $width$$145$$, $height$$121$$, $size$$39$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$, $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$, $result$$2$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$121$$ : $width$$145$$, $i$$659$$ = 0;$i$$659$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$659$$++) {
    var $marker$$18_node$$inline_4614$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$659$$];
    if($marker$$18_node$$inline_4614$$.$_endTime$ != $JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$ = dvt.$OverviewUtils$.$getDatePosition$($start$$39$$, $end$$30$$, $marker$$18_node$$inline_4614$$.getTime(), $canvasSize$$);
      $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isHorizontalRTL$() && ($JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$);
      $marker$$18_node$$inline_4614$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_4623_start$$inline_4615$$ = $start$$39$$, $end$$inline_4616_overlappingMarkers$$inline_4627$$ = $end$$30$$, $cy$$inline_4625_size$$inline_4617$$ = $canvasSize$$, $borderOffset$$inline_4624_hsz$$inline_4618$$ = $size$$39$$ / 2, $result$$inline_4619$$ = $result$$2$$, $maxHeight$$inline_4620$$ = $height$$121$$, $hszx$$inline_4621$$ = $borderOffset$$inline_4624_hsz$$inline_4618$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getScaleX$($marker$$18_node$$inline_4614$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$_markerSpacingOffset$, $hszy$$inline_4622$$ = $borderOffset$$inline_4624_hsz$$inline_4618$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getScaleY$($marker$$18_node$$inline_4614$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$_markerSpacingOffset$, $cx$$inline_4623_start$$inline_4615$$ = 
      dvt.$OverviewUtils$.$getDatePosition$($cx$$inline_4623_start$$inline_4615$$, $end$$inline_4616_overlappingMarkers$$inline_4627$$, $marker$$18_node$$inline_4614$$.getTime(), $cy$$inline_4625_size$$inline_4617$$);
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$isHorizontalRTL$() && ($cx$$inline_4623_start$$inline_4615$$ = $cy$$inline_4625_size$$inline_4617$$ - $cx$$inline_4623_start$$inline_4615$$ - 2 * $hszx$$inline_4621$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$isVertical$()) {
        $borderOffset$$inline_4624_hsz$$inline_4618$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) && ($borderOffset$$inline_4624_hsz$$inline_4618$$ = parseInt($JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10)), $cy$$inline_4625_size$$inline_4617$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$isRTL$() ? 
        $borderOffset$$inline_4624_hsz$$inline_4618$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$Width$ - 2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getScaleX$($marker$$18_node$$inline_4614$$) - $borderOffset$$inline_4624_hsz$$inline_4618$$ - 4
      }else {
        $cy$$inline_4625_size$$inline_4617$$ = 3;
        $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$isOverviewAbove$() && ($cy$$inline_4625_size$$inline_4617$$ += $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getTimeAxisHeight$());
        for(var $maxy$$inline_4626_maxy$$inline_5816$$ = 0, $end$$inline_4616_overlappingMarkers$$inline_4627$$ = [], $i$$inline_4628$$ = 0;$i$$inline_4628$$ < $result$$inline_4619$$.$arr$.length;$i$$inline_4628$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$ = $result$$inline_4619$$.$arr$[$i$$inline_4628$$];
          $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$.$getX$();
          var $prevScaleX$$inline_4631_shape$$inline_5811$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$getScaleX$($JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$);
          Math.abs($cx$$inline_4623_start$$inline_4615$$ - $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$) < $borderOffset$$inline_4624_hsz$$inline_4618$$ * $prevScaleX$$inline_4631_shape$$inline_5811$$ + $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$.$_markerSpacingOffset$ + $hszx$$inline_4621$$ && $end$$inline_4616_overlappingMarkers$$inline_4627$$.push($JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$)
        }
        for($i$$inline_4628$$ = 0;$i$$inline_4628$$ < $end$$inline_4616_overlappingMarkers$$inline_4627$$.length;$i$$inline_4628$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4613_x$$210$$;
          $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$ = $end$$inline_4616_overlappingMarkers$$inline_4627$$;
          for(var $prevScaleX$$inline_4631_shape$$inline_5811$$ = $marker$$18_node$$inline_4614$$.$getShape$(), $cx$$inline_5812$$ = $cx$$inline_4623_start$$inline_4615$$, $cy$$inline_5813$$ = $cy$$inline_4625_size$$inline_4617$$, $hszx$$inline_5814$$ = $hszx$$inline_4621$$, $hszy$$inline_5815$$ = $hszy$$inline_4622$$, $hsz$$inline_5817$$ = $borderOffset$$inline_4624_hsz$$inline_4618$$, $maxHeight$$inline_5818$$ = $maxHeight$$inline_4620$$, $i$$inline_5819$$ = 0;$i$$inline_5819$$ < $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$.length;$i$$inline_5819$$++) {
            var $prevMarker$$inline_5820_prevScaleY$$inline_5825$$ = $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$[$i$$inline_5819$$], $prevX$$inline_5821_xDist$$inline_5826$$ = $prevMarker$$inline_5820_prevScaleY$$inline_5825$$.$getX$(), $prevY$$inline_5822$$ = $prevMarker$$inline_5820_prevScaleY$$inline_5825$$.$getY$(), $prevShape$$inline_5823$$ = $prevMarker$$inline_5820_prevScaleY$$inline_5825$$.$getShape$(), $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$.$getScaleX$($prevMarker$$inline_5820_prevScaleY$$inline_5825$$), $prevMarker$$inline_5820_prevScaleY$$inline_5825$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$.$getScaleY$($prevMarker$$inline_5820_prevScaleY$$inline_5825$$);
            $prevScaleX$$inline_4631_shape$$inline_5811$$ == dvt.$SimpleMarker$.$CIRCLE$ && $prevShape$$inline_5823$$ == dvt.$SimpleMarker$.$CIRCLE$ && $hszx$$inline_5814$$ == $hszy$$inline_5815$$ && $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ == $prevMarker$$inline_5820_prevScaleY$$inline_5825$$ ? ($prevX$$inline_5821_xDist$$inline_5826$$ = Math.abs($cx$$inline_5812$$ - $prevX$$inline_5821_xDist$$inline_5826$$), $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ = 
            $hsz$$inline_5817$$ * $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$.$_markerSpacingOffset$ + $hszx$$inline_5814$$, $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ = Math.sqrt($height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ * $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ - $prevX$$inline_5821_xDist$$inline_5826$$ * 
            $prevX$$inline_5821_xDist$$inline_5826$$)) : $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ = $hsz$$inline_5817$$ * $prevMarker$$inline_5820_prevScaleY$$inline_5825$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$.$_markerSpacingOffset$ + $hszy$$inline_5815$$;
            if($height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$ > Math.abs($cy$$inline_5813$$ - $prevY$$inline_5822$$) && ($cy$$inline_5813$$ = $prevY$$inline_5822$$ + $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$, $maxy$$inline_4626_maxy$$inline_5816$$ = Math.max($maxy$$inline_4626_maxy$$inline_5816$$, $cy$$inline_5813$$ + $height$$inline_5828_minDist$$inline_5827_prevScaleX$$inline_5824$$), 1 <= $hsz$$inline_5817$$ && $maxHeight$$inline_5818$$ != $JSCompiler_alias_VOID$$ && 
            $maxy$$inline_4626_maxy$$inline_5816$$ > $maxHeight$$inline_5818$$)) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$ = $cy$$inline_5813$$;
          $maxy$$inline_4626_maxy$$inline_5816$$ = $JSCompiler_object_inline_maxy_5851_overlappingMarkers$$inline_5810_prevX$$inline_4630$$ = $maxy$$inline_4626_maxy$$inline_5816$$;
          if($JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$ == $cy$$inline_4625_size$$inline_4617$$) {
            $cy$$inline_4625_size$$inline_4617$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$;
            break
          }else {
            $cy$$inline_4625_size$$inline_4617$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_5809_JSCompiler_object_inline_cy_5850_prevMarker$$inline_4629$$
          }
        }
      }
      $marker$$18_node$$inline_4614$$.$setX$($cx$$inline_4623_start$$inline_4615$$);
      $marker$$18_node$$inline_4614$$.$setY$($cy$$inline_4625_size$$inline_4617$$);
      $result$$inline_4619$$.$arr$.push($marker$$18_node$$inline_4614$$);
      $maxy$$inline_4626_maxy$$inline_5816$$ > $result$$inline_4619$$.max && ($result$$inline_4619$$.max = $maxy$$inline_4626_maxy$$inline_5816$$);
      if($result$$2$$.max > $height$$121$$) {
        break
      }
    }
  }
  return $result$$2$$.max > $height$$121$$ && 1 < $size$$39$$ ? $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$39$$, $end$$30$$, $width$$145$$, $height$$121$$, $size$$39$$ - 1) : $size$$39$$
}
function $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$89$$, $durationMarkers$$3$$) {
  var $index$$201$$ = $durationMarkers$$3$$.length, $startTime$$17$$ = $item$$89$$.getTime(), $y$$183$$ = $item$$89$$.$_durationLevel$;
  $y$$183$$ == $JSCompiler_alias_NULL$$ && ($y$$183$$ = 1);
  for(var $i$$663$$ = 0;$i$$663$$ < $index$$201$$;$i$$663$$++) {
    var $currItem$$2_curry$$ = $durationMarkers$$3$$[$i$$663$$];
    if($currItem$$2_curry$$ != $item$$89$$) {
      var $currEndTime$$1$$ = $currItem$$2_curry$$.$_endTime$;
      if($currEndTime$$1$$ != $JSCompiler_alias_NULL$$) {
        var $currStartTime$$1$$ = $currItem$$2_curry$$.getTime(), $currItem$$2_curry$$ = $currItem$$2_curry$$.$_durationLevel$;
        $currItem$$2_curry$$ == $JSCompiler_alias_NULL$$ && ($currItem$$2_curry$$ = 1);
        $startTime$$17$$ >= $currStartTime$$1$$ && ($startTime$$17$$ <= $currEndTime$$1$$ && $y$$183$$ == $currItem$$2_curry$$) && ($y$$183$$ = $currItem$$2_curry$$ + 1, $item$$89$$.$_durationLevel$ = $y$$183$$, $y$$183$$ = $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$89$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$183$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$183$$);
  return $y$$183$$
}
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$545_isSelected$$3_itemId$$4$$) {
  var $drawable$$11$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$545_isSelected$$3_itemId$$4$$);
  if($drawable$$11$$ != $JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != $JSCompiler_alias_NULL$$) {
      var $evt$$55_i$$664_tooltip$$29$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$55_i$$664_tooltip$$29$$ != $JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$545_isSelected$$3_itemId$$4$$.pageX, $event$$545_isSelected$$3_itemId$$4$$.pageY, $evt$$55_i$$664_tooltip$$29$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$545_isSelected$$3_itemId$$4$$ = $JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
        for($evt$$55_i$$664_tooltip$$29$$ = 0;$evt$$55_i$$664_tooltip$$29$$ < this.$_selectedMarkers$.length;$evt$$55_i$$664_tooltip$$29$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$55_i$$664_tooltip$$29$$]) {
            $event$$545_isSelected$$3_itemId$$4$$ = $JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$545_isSelected$$3_itemId$$4$$ || ($event$$545_isSelected$$3_itemId$$4$$ = this.$getItemId$($drawable$$11$$), $evt$$55_i$$664_tooltip$$29$$ = new $DvtTimelineOverviewEvent$$("highlight"), $evt$$55_i$$664_tooltip$$29$$.$addParam$("itemId", $event$$545_isSelected$$3_itemId$$4$$), this.dispatchEvent($evt$$55_i$$664_tooltip$$29$$), $JSCompiler_StaticMethods_highlightMarker$$(this, $drawable$$11$$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$12_event$$546$$) {
  $drawable$$12_event$$546$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$546$$);
  if($drawable$$12_event$$546$$ != $JSCompiler_alias_NULL$$ && !this.$isMovable$($drawable$$12_event$$546$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$4_itemId$$5$$ = $JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
      for(var $evt$$56_i$$665$$ = 0;$evt$$56_i$$665$$ < this.$_selectedMarkers$.length;$evt$$56_i$$665$$++) {
        if($drawable$$12_event$$546$$ == this.$_selectedMarkers$[$evt$$56_i$$665$$]) {
          $isSelected$$4_itemId$$5$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$4_itemId$$5$$ || ($isSelected$$4_itemId$$5$$ = this.$getItemId$($drawable$$12_event$$546$$), $evt$$56_i$$665$$ = new $DvtTimelineOverviewEvent$$("unhighlight"), $evt$$56_i$$665$$.$addParam$("itemId", $isSelected$$4_itemId$$5$$), this.dispatchEvent($evt$$56_i$$665$$), $JSCompiler_StaticMethods_unhighlightMarker$$(this, $drawable$$12_event$$546$$))
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$, $drawable$$13_newPos$$inline_4640_pageX$$9$$, $evt$$inline_4638_itemId$$inline_5833_pageY$$9$$) {
  $drawable$$13_newPos$$inline_4640_pageX$$9$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeClick$.call(this, $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$, $drawable$$13_newPos$$inline_4640_pageX$$9$$, $evt$$inline_4638_itemId$$inline_5833_pageY$$9$$);
  if($drawable$$13_newPos$$inline_4640_pageX$$9$$ != $JSCompiler_alias_NULL$$ && ($event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$ = $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$.ctrlKey || $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$.shiftKey || dvt.$Agent$.$isTouchDevice$(), "none" != this.$_selectionMode$)) {
    $evt$$inline_4638_itemId$$inline_5833_pageY$$9$$ = this.$getItemId$($drawable$$13_newPos$$inline_4640_pageX$$9$$);
    var $evt$$inline_5834$$ = new $DvtTimelineOverviewEvent$$("selection");
    $evt$$inline_5834$$.$addParam$("itemId", $evt$$inline_4638_itemId$$inline_5833_pageY$$9$$);
    $evt$$inline_5834$$.$addParam$("multiSelect", $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$);
    this.dispatchEvent($evt$$inline_5834$$);
    $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$ = $drawable$$13_newPos$$inline_4640_pageX$$9$$.$_node$.getTime();
    $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$ != $JSCompiler_alias_NULL$$ && ($evt$$inline_4638_itemId$$inline_5833_pageY$$9$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$), $evt$$inline_4638_itemId$$inline_5833_pageY$$9$$.setTime($event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$), this.dispatchEvent($evt$$inline_4638_itemId$$inline_5833_pageY$$9$$), $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$ = 
    this.$getSlidingWindow$(), $drawable$$13_newPos$$inline_4640_pageX$$9$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_4640_pageX$$9$$) - $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_4640_pageX$$9$$) - $event$$547_isMultiSelect$$inline_4636_slidingWindow$$inline_4639_time$$inline_4637$$.getWidth() / 2, this.$animateSlidingWindow$($drawable$$13_newPos$$inline_4640_pageX$$9$$))
  }
};
function $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if($JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$666$$ = 0;$i$$666$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$666$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$666$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, dvt.$TimelineOverview$.$HOVER_STATE$)
}
function $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if($JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$667$$ = 0;$i$$667$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$667$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$667$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, dvt.$TimelineOverview$.$ENABLED_STATE$)
}
function $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = $JSCompiler_alias_NULL$$;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  $lastSelectedMarker$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, dvt.$TimelineOverview$.$SELECTED_STATE$);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$)
}
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($drawable$$25$$, $state$$99$$) {
  if($drawable$$25$$ instanceof dvt.$SimpleMarker$) {
    var $borderWidth$$18_requiresBorderMarker$$ = $JSCompiler_alias_FALSE$$, $requiresGlowMarker$$ = $JSCompiler_alias_FALSE$$;
    if("solid" == this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_STYLE$)) {
      var $borderWidth$$18_requiresBorderMarker$$ = $JSCompiler_alias_TRUE$$, $borderColor$$47_stroke$$102$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_COLOR$);
      $borderColor$$47_stroke$$102$$ == $JSCompiler_alias_NULL$$ && ($borderColor$$47_stroke$$102$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_4646$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_COLOR$);
      $glowColor_glowStroke_width$$inline_4646$$ != $JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_4646$$ && ($requiresGlowMarker$$ = $JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$borderWidth$$18_requiresBorderMarker$$ && $borderMarker$$ != $JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = $JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != $JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = $JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != $JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    $JSCompiler_alias_NULL$$);
    var $borderColor$$inline_4645_id$$211_markerType$$1$$ = $drawable$$25$$.$getType$();
    if($borderWidth$$18_requiresBorderMarker$$) {
      var $borderWidth$$18_requiresBorderMarker$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10), $borderOffset$$1$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10);
      if($borderMarker$$ == $JSCompiler_alias_NULL$$) {
        if($borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$148$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$124$$ / 2
        }else {
          this.$isVertical$() ? ($width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 1) / 2 + $width$$148$$ / 2, $cy$$39$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 
          1) / 2 + $height$$124$$ / 2) : ($width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$148$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$124$$ / 2)
        }
        $borderMarker$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4645_id$$211_markerType$$1$$, $JSCompiler_alias_NULL$$, $cx$$38$$, $cy$$39$$, $width$$148$$, $height$$124$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$)
      }
      $borderColor$$47_stroke$$102$$ = new dvt.$SolidStroke$($borderColor$$47_stroke$$102$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OPACITY$), $borderWidth$$18_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$47_stroke$$102$$);
      (this.$isVertical$() || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$DIAMOND$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && 
      $borderMarker$$.$setPixelHinting$();
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == $JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$18_requiresBorderMarker$$, $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 
      2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$148$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$124$$ / 2) : this.$isVertical$() ? ($width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getY$($drawable$$25$$) + 
      $width$$148$$ / 2, $cy$$39$$ = this.$getX$($drawable$$25$$) - 1 + $height$$124$$ / 2) : ($width$$148$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$148$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$124$$ / 
      2), $glowMarker_glowOffset$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4645_id$$211_markerType$$1$$, $JSCompiler_alias_NULL$$, $cx$$38$$, $cy$$39$$, $width$$148$$, $height$$124$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_4646$$ = 
      new dvt.$SolidStroke$($glowColor_glowStroke_width$$inline_4646$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_OPACITY$), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_4646$$), (this.$isVertical$() || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$DIAMOND$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || 
      $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $borderColor$$inline_4645_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && $glowMarker_glowOffset$$.$setPixelHinting$())
    }
  }else {
    if(($borderColor$$inline_4645_id$$211_markerType$$1$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_4645_id$$211_markerType$$1$$.substring(0, 5)) {
      $borderColor$$inline_4645_id$$211_markerType$$1$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), $borderColor$$inline_4645_id$$211_markerType$$1$$ == $JSCompiler_alias_NULL$$ && ($borderColor$$inline_4645_id$$211_markerType$$1$$ = "#000000"), $glowColor_glowStroke_width$$inline_4646$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$), 10), $drawable$$25$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_4645_id$$211_markerType$$1$$, 
      1, $glowColor_glowStroke_width$$inline_4646$$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new $DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
dvt.$TimelineOverview$.prototype.getAutomation = dvt.$TimelineOverview$.prototype.$getAutomation$;
function $DvtTimelineOverviewParser$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewParser$$, dvt.$Obj$, "DvtTimelineOverviewParser");
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewParser$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$3$$) {
  this.$_view$ = $overview$$3$$;
  this.$_parser$ = new dvt.$XmlParser$($overview$$3$$.$getCtx$())
};
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$69_xmlString$$7$$) {
  var $childNodes$$21_rootNode$$4$$ = this.$_parser$.parse($ret$$69_xmlString$$7$$);
  $ret$$69_xmlString$$7$$ = this.$ParseRootAttributes$($childNodes$$21_rootNode$$4$$);
  var $childNodes$$21_rootNode$$4$$ = $childNodes$$21_rootNode$$4$$.$getChildNodes$(), $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$;
  if($JSCompiler_inline_result$$97_xmlNode$$inline_4652$$ = $childNodes$$21_rootNode$$4$$[0]) {
    var $ret$$inline_4653$$ = {};
    $ret$$inline_4653$$.width = $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$.$getAttr$("width");
    $ret$$inline_4653$$.height = $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$.$getAttr$("height");
    $ret$$inline_4653$$.$ticks$ = $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$.$getChildNodes$();
    $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$ = $ret$$inline_4653$$
  }else {
    $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$ = $JSCompiler_alias_NULL$$
  }
  $ret$$69_xmlString$$7$$.$timeAxisInfo$ = $JSCompiler_inline_result$$97_xmlNode$$inline_4652$$;
  $ret$$69_xmlString$$7$$.$markers$ = this.$_parseDataNode$($childNodes$$21_rootNode$$4$$[1], $ret$$69_xmlString$$7$$.$defaultMarkerStyles$);
  2 < $childNodes$$21_rootNode$$4$$.length && ($ret$$69_xmlString$$7$$.$formattedTimeRanges$ = !$childNodes$$21_rootNode$$4$$[2] ? $JSCompiler_alias_NULL$$ : $childNodes$$21_rootNode$$4$$[2].$getChildNodes$());
  return $ret$$69_xmlString$$7$$
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$70$$) {
  var $ret$$70$$ = {};
  $ret$$70$$.start = parseInt($xmlNode$$70$$.$getAttr$("start"));
  $ret$$70$$.end = parseInt($xmlNode$$70$$.$getAttr$("end"));
  $ret$$70$$.width = parseInt($xmlNode$$70$$.$getAttr$("width"));
  $ret$$70$$.$renderStart$ = parseInt($xmlNode$$70$$.$getAttr$("renstart"));
  $ret$$70$$.currentTime = parseInt($xmlNode$$70$$.$getAttr$("ocd"));
  $ret$$70$$.orientation = $xmlNode$$70$$.$getAttr$("orn");
  $ret$$70$$.$overviewPosition$ = $xmlNode$$70$$.$getAttr$("ovp");
  $ret$$70$$.$selectionMode$ = $xmlNode$$70$$.$getAttr$("selmode");
  $ret$$70$$.$isRtl$ = $xmlNode$$70$$.$getAttr$("rtl");
  $ret$$70$$.borderTopStyle = $xmlNode$$70$$.$getAttr$("_bts");
  $ret$$70$$.borderTopColor = $xmlNode$$70$$.$getAttr$("_btc");
  $ret$$70$$.$seriesIds$ = $xmlNode$$70$$.$getAttr$("sid");
  $ret$$70$$.$animationOnClick$ = $xmlNode$$70$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$70$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$70$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$70$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$70$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$70$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$70$$.$getAttr$("_ph");
  $ret$$70$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$70$$.$handleFillColor$ = $xmlNode$$70$$.$getAttr$("_hfc");
  $ret$$70$$.$handleTextureColor$ = $xmlNode$$70$$.$getAttr$("_htc");
  $ret$$70$$.$handleBackgroundImage$ = $xmlNode$$70$$.$getAttr$("_hbi");
  $ret$$70$$.$handleWidth$ = $xmlNode$$70$$.$getAttr$("_hw");
  $ret$$70$$.$handleHeight$ = $xmlNode$$70$$.$getAttr$("_hh");
  $ret$$70$$.$windowBackgroundColor$ = $xmlNode$$70$$.$getAttr$("_wbc");
  $ret$$70$$.$windowBorderTopStyle$ = $xmlNode$$70$$.$getAttr$("_wbts");
  $ret$$70$$.$windowBorderRightStyle$ = $xmlNode$$70$$.$getAttr$("_wbrs");
  $ret$$70$$.$windowBorderBottomStyle$ = $xmlNode$$70$$.$getAttr$("_wbbs");
  $ret$$70$$.$windowBorderLeftStyle$ = $xmlNode$$70$$.$getAttr$("_wbls");
  $ret$$70$$.$windowBorderTopColor$ = $xmlNode$$70$$.$getAttr$("_wbtc");
  $ret$$70$$.$windowBorderRightColor$ = $xmlNode$$70$$.$getAttr$("_wbrc");
  $ret$$70$$.$windowBorderBottomColor$ = $xmlNode$$70$$.$getAttr$("_wbbc");
  $ret$$70$$.$windowBorderLeftColor$ = $xmlNode$$70$$.$getAttr$("_wblc");
  $ret$$70$$.$overviewBackgroundColor$ = $xmlNode$$70$$.$getAttr$("_obc");
  $ret$$70$$.$currentTimeIndicatorColor$ = $xmlNode$$70$$.$getAttr$("_ctic");
  $ret$$70$$.$timeIndicatorColor$ = $xmlNode$$70$$.$getAttr$("_tic");
  $ret$$70$$.$timeAxisBarColor$ = $xmlNode$$70$$.$getAttr$("_tabc");
  $ret$$70$$.$timeAxisBarOpacity$ = $xmlNode$$70$$.$getAttr$("_tabo");
  $ret$$70$$.$labelStyle$ = $xmlNode$$70$$.$getAttr$("_ls");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$70$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$70$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$70$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$70$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$70$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$70$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$70$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$70$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$70$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$70$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$70$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$70$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$70$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$70$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$70$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$70$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$70$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$70$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$70$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$70$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$70$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$70$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$70$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$70$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$70$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$70$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$70$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$70$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$70$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$70$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$70$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$70$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$70$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$70$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$70$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$70$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$70$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$70$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$70$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$70$$.$getAttr$("_asdbw");
  $ret$$70$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$70$$
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$71$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$71$$) {
    return $JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$1$$ = [], $markers$$13$$ = $xmlNode$$71$$.$getChildNodes$(), $i$$673$$ = 0;$i$$673$$ < $markers$$13$$.length;$i$$673$$++) {
    var $props$$15_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$13$$[$i$$673$$], $defaultMarkerStyles$$1$$), $props$$15_treeNode$$1$$ = new $DvtTimelineOverviewNode$$(this.$_view$, $props$$15_treeNode$$1$$);
    $treeNodes$$1$$.push($props$$15_treeNode$$1$$)
  }
  return $treeNodes$$1$$
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$72$$, $defaultMarkerStyles$$2$$) {
  var $ret$$71$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$72$$.$getAttr$("_sd");
  $ret$$71$$.id = $xmlNode$$72$$.$getAttr$("tid");
  $ret$$71$$.$rowKey$ = $xmlNode$$72$$.$getAttr$("rk");
  $ret$$71$$.time = $xmlNode$$72$$.$getAttr$("t");
  $ret$$71$$.$endTime$ = $xmlNode$$72$$.$getAttr$("et");
  $ret$$71$$.shape = $xmlNode$$72$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$71$$.shape == $JSCompiler_alias_NULL$$ && ($ret$$71$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$71$$.$desc$ = $xmlNode$$72$$.$getAttr$("d");
  $ret$$71$$.color = $xmlNode$$72$$.$getAttr$("c");
  $ret$$71$$.$durationFillColor$ = $xmlNode$$72$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$71$$.color == $JSCompiler_alias_NULL$$ && ($ret$$71$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$71$$.$scaleX$ = $xmlNode$$72$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$71$$.$scaleX$ == $JSCompiler_alias_NULL$$ && ($ret$$71$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$71$$.$scaleY$ = $xmlNode$$72$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$71$$.$scaleY$ == $JSCompiler_alias_NULL$$ && ($ret$$71$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$71$$.$gradient$ = $xmlNode$$72$$.$getAttr$("g");
  $ret$$71$$.opacity = $xmlNode$$72$$.$getAttr$("o");
  $useSkinningDefaults$$ && $ret$$71$$.opacity == $JSCompiler_alias_NULL$$ && ($ret$$71$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$71$$
};
function $DvtTimelineOverviewNode$$($overview$$4$$, $props$$16$$) {
  this.Init($overview$$4$$, $props$$16$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewNode$$, dvt.$Obj$, "DvtTimelineOverviewNode");
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$17$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$17$$.$rowKey$;
  this.$_id$ = $props$$17$$.id;
  this.$_time$ = parseInt($props$$17$$.time);
  this.$_endTime$ = $props$$17$$.$endTime$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : parseInt($props$$17$$.$endTime$);
  this.$_shape$ = dvt.$SimpleMarker$.$CIRCLE$;
  "square" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$RECTANGLE$ : "plus" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$PLUS$ : "diamond" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$DIAMOND$ : "triangleUp" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_UP$ : "triangleDown" == $props$$17$$.shape && (this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_DOWN$);
  this.$_desc$ = $props$$17$$.$desc$;
  this.$_color$ = $props$$17$$.color;
  this.$_gradient$ = $props$$17$$.$gradient$;
  $props$$17$$.opacity != $JSCompiler_alias_NULL$$ && (this.$_opacity$ = parseFloat($props$$17$$.opacity));
  $props$$17$$.$scaleX$ != $JSCompiler_alias_NULL$$ && (this.$_scaleX$ = parseFloat($props$$17$$.$scaleX$));
  $props$$17$$.$scaleY$ != $JSCompiler_alias_NULL$$ && (this.$_scaleY$ = parseFloat($props$$17$$.$scaleY$));
  $props$$17$$.$durationFillColor$ != $JSCompiler_alias_NULL$$ && (this.$_durationFillColor$ = $props$$17$$.$durationFillColor$)
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getRowKey$ = $JSCompiler_get$$("$_rowKey$");
$JSCompiler_prototypeAlias$$.getTime = $JSCompiler_get$$("$_time$");
$JSCompiler_prototypeAlias$$.$getScaleX$ = $JSCompiler_get$$("$_scaleX$");
$JSCompiler_prototypeAlias$$.$getScaleY$ = $JSCompiler_get$$("$_scaleY$");
$JSCompiler_prototypeAlias$$.$getColor$ = $JSCompiler_get$$("$_color$");
$JSCompiler_prototypeAlias$$.$getShape$ = $JSCompiler_get$$("$_shape$");
$JSCompiler_prototypeAlias$$.$getOpacity$ = $JSCompiler_get$$("$_opacity$");
$JSCompiler_prototypeAlias$$.$getDisplayable$ = $JSCompiler_get$$("$_displayable$");
$JSCompiler_prototypeAlias$$.$setDisplayable$ = $JSCompiler_set$$("$_displayable$");
$JSCompiler_prototypeAlias$$.$getX$ = $JSCompiler_get$$("$_x$");
$JSCompiler_prototypeAlias$$.$setX$ = $JSCompiler_set$$("$_x$");
$JSCompiler_prototypeAlias$$.$getY$ = $JSCompiler_get$$("$_y$");
$JSCompiler_prototypeAlias$$.$setY$ = $JSCompiler_set$$("$_y$");
function $DvtTimelineOverviewEvent$$($type$$164$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$164$$
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewEvent$$, dvt.$OverviewEvent$, "DvtTimelineOverviewEvent");
var $DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$ = dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$;
$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
function $DvtTimelineOverviewAutomation$$($overview$$6$$) {
  this.$_Init$($overview$$6$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewAutomation$$, dvt.$Automation$, "DvtTimelineOverviewAutomation");
$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = $JSCompiler_set$$("$_overview$");
$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$15_displayable$$89_prev$$1$$) {
  var $id$$212_seriesIds$$1_seriesIndex$$130$$ = $arr$$15_displayable$$89_prev$$1$$.getId();
  if($arr$$15_displayable$$89_prev$$1$$ instanceof dvt.$SimpleMarker$) {
    $arr$$15_displayable$$89_prev$$1$$ = $id$$212_seriesIds$$1_seriesIndex$$130$$.split(":");
    if(4 != $arr$$15_displayable$$89_prev$$1$$.length) {
      return $JSCompiler_alias_NULL$$
    }
    $id$$212_seriesIds$$1_seriesIndex$$130$$ = this.$_overview$.$_seriesIds$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$212_seriesIds$$1_seriesIndex$$130$$ != $JSCompiler_alias_NULL$$ && ($id$$212_seriesIds$$1_seriesIndex$$130$$ = dvt.$ArrayUtils$.$getIndex$($id$$212_seriesIds$$1_seriesIndex$$130$$, $arr$$15_displayable$$89_prev$$1$$[1]), -1 < $id$$212_seriesIds$$1_seriesIndex$$130$$)) {
      return"marker[" + $id$$212_seriesIds$$1_seriesIndex$$130$$ + "][" + $arr$$15_displayable$$89_prev$$1$$[2] + "]"
    }
  }else {
    if("window" == $id$$212_seriesIds$$1_seriesIndex$$130$$) {
      return"range_window"
    }
    if("lh" == $id$$212_seriesIds$$1_seriesIndex$$130$$ || "lhb" == $id$$212_seriesIds$$1_seriesIndex$$130$$ || "lbgrh" == $id$$212_seriesIds$$1_seriesIndex$$130$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$212_seriesIds$$1_seriesIndex$$130$$ || "rhb" == $id$$212_seriesIds$$1_seriesIndex$$130$$ || "rbgrh" == $id$$212_seriesIds$$1_seriesIndex$$130$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$212_seriesIds$$1_seriesIndex$$130$$) {
      return $arr$$15_displayable$$89_prev$$1$$ = $arr$$15_displayable$$89_prev$$1$$.getParent().$getChildBefore$($arr$$15_displayable$$89_prev$$1$$), this.$GetSubIdForDomElement$($arr$$15_displayable$$89_prev$$1$$)
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_4663_subId$$31$$) {
  for(var $array$$inline_4656_marker$$29_markerId$$inline_4666$$ = $markers$$inline_4663_subId$$31$$.split("["), $i$$inline_4667_len$$inline_4657_seriesIds$$2$$ = $array$$inline_4656_marker$$29_markerId$$inline_4666$$.length, $i$$inline_4658_index$$203_marker$$inline_4668$$ = 1;$i$$inline_4658_index$$203_marker$$inline_4668$$ < $i$$inline_4667_len$$inline_4657_seriesIds$$2$$;$i$$inline_4658_index$$203_marker$$inline_4668$$++) {
    var $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ = $array$$inline_4656_marker$$29_markerId$$inline_4666$$[$i$$inline_4658_index$$203_marker$$inline_4668$$], $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ = $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$.substr(0, $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$.length - 1), $tempIdAsNumber$$inline_4661$$ = parseFloat($elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$), $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ = 
    isNaN($tempIdAsNumber$$inline_4661$$) ? $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ : $tempIdAsNumber$$inline_4661$$;
    $array$$inline_4656_marker$$29_markerId$$inline_4666$$[$i$$inline_4658_index$$203_marker$$inline_4668$$] = $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$
  }
  if($array$$inline_4656_marker$$29_markerId$$inline_4666$$ && 3 == $array$$inline_4656_marker$$29_markerId$$inline_4666$$.length && "marker" == $array$$inline_4656_marker$$29_markerId$$inline_4666$$[0]) {
    if($i$$inline_4667_len$$inline_4657_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_4667_len$$inline_4657_seriesIds$$2$$ != $JSCompiler_alias_NULL$$ && ($i$$inline_4658_index$$203_marker$$inline_4668$$ = parseInt($array$$inline_4656_marker$$29_markerId$$inline_4666$$[1], 10), -1 < $i$$inline_4658_index$$203_marker$$inline_4668$$ && $i$$inline_4658_index$$203_marker$$inline_4668$$ < $i$$inline_4667_len$$inline_4657_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_4663_subId$$31$$ = this.$_overview$.$_markers$;
        $array$$inline_4656_marker$$29_markerId$$inline_4666$$ = "tl1:" + $i$$inline_4667_len$$inline_4657_seriesIds$$2$$[$i$$inline_4658_index$$203_marker$$inline_4668$$] + ":" + $array$$inline_4656_marker$$29_markerId$$inline_4666$$[2] + ":";
        for($i$$inline_4667_len$$inline_4657_seriesIds$$2$$ = 0;$i$$inline_4667_len$$inline_4657_seriesIds$$2$$ < $markers$$inline_4663_subId$$31$$.length;$i$$inline_4667_len$$inline_4657_seriesIds$$2$$++) {
          if($i$$inline_4658_index$$203_marker$$inline_4668$$ = $markers$$inline_4663_subId$$31$$[$i$$inline_4667_len$$inline_4657_seriesIds$$2$$], $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ = $i$$inline_4658_index$$203_marker$$inline_4668$$.getId(), $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$ != $JSCompiler_alias_NULL$$ && 0 == $elem$$inline_4659_id$$inline_4669_tempId$$inline_4660$$.indexOf($array$$inline_4656_marker$$29_markerId$$inline_4666$$)) {
            $array$$inline_4656_marker$$29_markerId$$inline_4666$$ = $i$$inline_4658_index$$203_marker$$inline_4668$$;
            break a
          }
        }
        $array$$inline_4656_marker$$29_markerId$$inline_4666$$ = $JSCompiler_alias_NULL$$
      }
      return $array$$inline_4656_marker$$29_markerId$$inline_4666$$ ? $array$$inline_4656_marker$$29_markerId$$inline_4666$$.$getDisplayable$().$getElem$() : $JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_4663_subId$$31$$) {
      return this.$_overview$.$getSlidingWindow$().$getElem$()
    }
    if("range_start_handle" == $markers$$inline_4663_subId$$31$$) {
      return this.$_overview$.$getLeftHandle$().$getElem$()
    }
    if("range_end_handle" == $markers$$inline_4663_subId$$31$$) {
      return this.$_overview$.$getRightHandle$().$getElem$()
    }
  }
  return $JSCompiler_alias_NULL$$
};
$goog$exportPath_$$("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);

var $DvtTimeUtils$$ = {$supportsTouch$:function() {
  return dvt.$Agent$.$isTouchDevice$()
}};
dvt.$Obj$.$createSubclass$($DvtTimeUtils$$, dvt.$Obj$, "DvtTimeUtils");
$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$2_startTime$$5$$, $endTime$$5$$, $number$$3_time$$13$$, $width$$125$$) {
  $number$$3_time$$13$$ = ($number$$3_time$$13$$ - $denominator$$2_startTime$$5$$) * $width$$125$$;
  $denominator$$2_startTime$$5$$ = $endTime$$5$$ - $denominator$$2_startTime$$5$$;
  return 0 == $number$$3_time$$13$$ || 0 == $denominator$$2_startTime$$5$$ ? 0 : $number$$3_time$$13$$ / $denominator$$2_startTime$$5$$
};
$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$6$$, $endTime$$6_number$$4$$, $pos$$67$$, $width$$126$$) {
  $endTime$$6_number$$4$$ = $pos$$67$$ * ($endTime$$6_number$$4$$ - $startTime$$6$$);
  return 0 == $endTime$$6_number$$4$$ || 0 == $width$$126$$ ? $startTime$$6$$ : $endTime$$6_number$$4$$ / $width$$126$$ + $startTime$$6$$
};
function $DvtTimeComponent$$($context$$393$$, $callback$$125$$, $callbackObj$$87$$) {
  this.Init($context$$393$$, $callback$$125$$, $callbackObj$$87$$)
}
$goog$exportPath_$$("DvtTimeComponent", $DvtTimeComponent$$);
dvt.$Obj$.$createSubclass$($DvtTimeComponent$$, dvt.$BaseComponent$, "DvtTimeComponent");
$DvtTimeComponent$$.prototype.Init = function $$DvtTimeComponent$$$$Init$($context$$394$$, $callback$$126$$, $callbackObj$$88$$) {
  $DvtTimeComponent$$.$superclass$.Init.call(this, $context$$394$$);
  this.$_callback$ = $callback$$126$$;
  this.$_callbackObj$ = $callbackObj$$88$$;
  this.$_virtualize$ = $JSCompiler_alias_FALSE$$
};
$DvtTimeComponent$$.prototype.$render$ = function $$DvtTimeComponent$$$$$render$$($props$$3_width$$127$$, $height$$109$$, $options$$263$$) {
  $options$$263$$ && this.$SetOptions$($options$$263$$);
  this.$Width$ = $props$$3_width$$127$$;
  this.$Height$ = $height$$109$$;
  this.$Options$ && ($props$$3_width$$127$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$3_width$$127$$))
};
$DvtTimeComponent$$.prototype.render = $DvtTimeComponent$$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = $DvtTimeComponent$$.prototype;
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$264$$) {
  this.$Options$ = dvt.$JsonUtils$.$clone$($options$$264$$)
};
$JSCompiler_prototypeAlias$$.$addTick$ = function $$JSCompiler_prototypeAlias$$$$addTick$$($container$$175$$, $line$$17_x1$$34$$, $x2$$32$$, $y1$$27$$, $y2$$26$$, $stroke$$99$$, $id$$199$$) {
  $line$$17_x1$$34$$ = new dvt.$Line$(this.$getCtx$(), $line$$17_x1$$34$$, $y1$$27$$, $x2$$32$$, $y2$$26$$, $id$$199$$);
  $line$$17_x1$$34$$.$setStroke$($stroke$$99$$);
  $line$$17_x1$$34$$.$setPixelHinting$();
  $container$$175$$.$addChild$($line$$17_x1$$34$$);
  return $line$$17_x1$$34$$
};
function $JSCompiler_StaticMethods_addAxisLabel$$($container$$176$$, $label$$101$$, $x$$207$$, $y$$179$$, $maxLength$$) {
  $label$$101$$.$setX$($x$$207$$);
  $label$$101$$.$setY$($y$$179$$);
  $label$$101$$.$isTruncated$() && $label$$101$$.$setTextString$($label$$101$$.$getUntruncatedTextString$());
  dvt.$TextUtils$.$fitText$($label$$101$$, $maxLength$$, Infinity, $container$$176$$);
  $label$$101$$.$alignCenter$()
}
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($container$$177$$, $backgroundRect$$1_pos$$68$$, $label$$102_text$$76$$, $maxLength$$1$$, $y$$180$$, $labelStyle$$22$$, $id$$200$$, $renderBackground_width$$128$$, $labelPadding$$, $labelList$$, $isRTL$$41$$) {
  $label$$102_text$$76$$ = new dvt.$OutputText$(this.$getCtx$(), $label$$102_text$$76$$, $backgroundRect$$1_pos$$68$$, 0, $id$$200$$);
  $labelStyle$$22$$ != $JSCompiler_alias_NULL$$ && $label$$102_text$$76$$.$setCSSStyle$($labelStyle$$22$$);
  $container$$177$$.$addChild$($label$$102_text$$76$$);
  var $dim$$75$$ = $label$$102_text$$76$$.$getDimensions$();
  $container$$177$$.removeChild($label$$102_text$$76$$);
  $y$$180$$ -= $dim$$75$$.$h$;
  $label$$102_text$$76$$.$setY$($y$$180$$);
  $isRTL$$41$$ && $label$$102_text$$76$$.$setX$($backgroundRect$$1_pos$$68$$ - $dim$$75$$.$w$);
  $renderBackground_width$$128$$ && ($renderBackground_width$$128$$ = Math.min($dim$$75$$.$w$ + 2 * $labelPadding$$, $maxLength$$1$$), $backgroundRect$$1_pos$$68$$ = new dvt.$Rect$(this.$getCtx$(), ($isRTL$$41$$ ? $backgroundRect$$1_pos$$68$$ - $renderBackground_width$$128$$ + 2 * $labelPadding$$ : $backgroundRect$$1_pos$$68$$) - $labelPadding$$, $y$$180$$ - $labelPadding$$, $renderBackground_width$$128$$, $dim$$75$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$200$$), $backgroundRect$$1_pos$$68$$.$setCSSStyle$($labelStyle$$22$$), 
  $backgroundRect$$1_pos$$68$$.$setCornerRadius$(3), $container$$177$$.$addChild$($backgroundRect$$1_pos$$68$$), $labelList$$ && $labelList$$.push($backgroundRect$$1_pos$$68$$));
  dvt.$TextUtils$.$fitText$($label$$102_text$$76$$, $maxLength$$1$$, Infinity, $container$$177$$);
  $labelList$$ && $labelList$$.push($label$$102_text$$76$$);
  return $label$$102_text$$76$$
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$4$$) {
  this.$_origStart$ = $props$$4$$.$origStart$;
  this.$_origEnd$ = $props$$4$$.$origEnd$;
  this.$_start$ = $props$$4$$.start;
  this.$_end$ = $props$$4$$.end;
  this.$_inlineStyle$ = $props$$4$$.$inlineStyle$;
  this.$_scale$ = $props$$4$$.scale;
  this.$_converter$ = $props$$4$$.$converter$;
  this.$applyStyleValues$()
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$.$parseInlineStyle$(this.$_inlineStyle$)
};
function $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$19$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$19$$ ? $length$$19$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$)
}
$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return dvt.$Agent$.$isRightToLeft$(this.$getCtx$())
};
$JSCompiler_prototypeAlias$$.$isVertical$ = $JSCompiler_get$$("$_isVertical$");
function $DvtTimeComponentAxis$$($context$$395$$, $callback$$127$$, $callbackObj$$89$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$) {
  this.Init($context$$395$$, $callback$$127$$, $callbackObj$$89$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentAxis$$, dvt.$Container$, "DvtTimeComponentAxis");
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$ = 2;
$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$ = 1;
$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
$DvtTimeComponentAxis$$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
$JSCompiler_prototypeAlias$$ = $DvtTimeComponentAxis$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$396$$, $callback$$128$$, $callbackObj$$90$$, $isVertical$$2$$, $zoomOrder$$1$$, $dateFormatStrings$$) {
  $DvtTimeComponentAxis$$.$superclass$.Init.call(this, $context$$396$$);
  this.$_calendar$ = new $DvtTimeComponentCalendar$$;
  this.$_formatter$ = new $DvtTimeComponentAxisFormatter$$($DvtTimeComponentAxisFormatter$$.SHORT, $dateFormatStrings$$);
  this.$_contentSize$ = $isVertical$$2$$ ? $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ : $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
  this.$_borderWidth$ = $DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$;
  this.$_zoomOrder$ = $zoomOrder$$1$$;
  this.$_dateToIsoConverter$ = $context$$396$$.$getLocaleHelpers$().dateToIsoConverter
};
$JSCompiler_prototypeAlias$$.$setScale$ = $JSCompiler_set$$("$_scale$");
$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  this.$_timeAxisWidth$ == $JSCompiler_alias_NULL$$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$
};
$JSCompiler_prototypeAlias$$.$setBorderWidth$ = $JSCompiler_set$$("$_borderWidth$");
$JSCompiler_prototypeAlias$$.$getBorderWidth$ = $JSCompiler_get$$("$_borderWidth$");
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$
};
$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$160$$, $dateFormatStrings$$1$$) {
  this.$_formatter$ = new $DvtTimeComponentAxisFormatter$$($type$$160$$, $dateFormatStrings$$1$$)
};
$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$11$$) {
  return this.$_calendar$.$adjustDate$(new Date($date$$11$$), this.$_scale$)
};
$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($time$$14$$) {
  return this.$_calendar$.$getNextDate$($time$$14$$, this.$_scale$)
};
function $JSCompiler_StaticMethods_formatDate$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$12$$) {
  if($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  if($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.$format$($date$$12$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$, $JSCompiler_StaticMethods_formatDate$self$$.$_timeZoneOffsets$)
}
function $DvtTimeComponentAxisFormatter$$($type$$161$$, $locale$$6$$) {
  this.Init($type$$161$$, $locale$$6$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentAxisFormatter$$, dvt.$Obj$, "DvtTimeComponentAxisFormatter");
$DvtTimeComponentAxisFormatter$$.$LONG$ = 0;
$DvtTimeComponentAxisFormatter$$.SHORT = 1;
$DvtTimeComponentAxisFormatter$$.prototype.Init = function $$DvtTimeComponentAxisFormatter$$$$Init$($type$$162$$, $dateFormatStrings$$2$$) {
  this.$_type$ = $type$$162$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$2$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy"
};
$DvtTimeComponentAxisFormatter$$.prototype.$format$ = function $$DvtTimeComponentAxisFormatter$$$$$format$$($date$$13_timeInMS$$, $mask$$5_scale$$56$$, $newString_timeZoneOffsets$$1$$) {
  $mask$$5_scale$$56$$ = this.$_formats$[this.$_type$][$mask$$5_scale$$56$$];
  if($mask$$5_scale$$56$$ != $JSCompiler_alias_NULL$$) {
    var $dates_isUTC$$ = $JSCompiler_alias_FALSE$$;
    if($newString_timeZoneOffsets$$1$$) {
      $date$$13_timeInMS$$ = $date$$13_timeInMS$$.getTime();
      for(var $dates_isUTC$$ = Object.keys($newString_timeZoneOffsets$$1$$), $offset$$33$$ = 0, $i$$619$$ = 0;$i$$619$$ < $dates_isUTC$$.length;$i$$619$$++) {
        $date$$13_timeInMS$$ >= parseInt($dates_isUTC$$[$i$$619$$], 10) && ($offset$$33$$ = $newString_timeZoneOffsets$$1$$[$dates_isUTC$$[$i$$619$$]])
      }
      $date$$13_timeInMS$$ = new Date($date$$13_timeInMS$$ + $offset$$33$$);
      $dates_isUTC$$ = $JSCompiler_alias_TRUE$$
    }
    if(-1 != $mask$$5_scale$$56$$.indexOf(":")) {
      var $separator$$3$$ = ":"
    }else {
      -1 != $mask$$5_scale$$56$$.indexOf("/") && ($separator$$3$$ = "/")
    }
    if($separator$$3$$) {
      $mask$$5_scale$$56$$ = $mask$$5_scale$$56$$.split($separator$$3$$);
      $newString_timeZoneOffsets$$1$$ = $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$[0], $dates_isUTC$$);
      for($i$$619$$ = 1;$i$$619$$ < $mask$$5_scale$$56$$.length;$i$$619$$++) {
        $newString_timeZoneOffsets$$1$$ += $separator$$3$$ + $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$[$i$$619$$], $dates_isUTC$$)
      }
      return $newString_timeZoneOffsets$$1$$
    }
    return $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$, $dates_isUTC$$)
  }
  return $date$$13_timeInMS$$.toLocaleString()
};
function $JSCompiler_StaticMethods_getDateFormatValue$$($JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$, $date$$14$$, $mask$$6$$, $isUTC$$1$$) {
  if($isUTC$$1$$) {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getUTCSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getUTCHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getUTCMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getUTCDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$dayNames$[$date$$14$$.getUTCDay() + 7];
      case "m":
        return $date$$14$$.getUTCMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getUTCMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getUTCMonth() + 12];
      case "yy":
        return $date$$14$$.getUTCFullYear().toString().substring(2, 4);
      default:
        return $date$$14$$.getUTCFullYear()
    }
  }else {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ = $date$$14$$.getDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$dayNames$[$date$$14$$.getDay() + 7];
      case "m":
        return $date$$14$$.getMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$160$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth() + 12];
      case "yy":
        return $date$$14$$.getFullYear().toString().substring(2, 4);
      default:
        return $date$$14$$.getFullYear()
    }
  }
}
function $DvtTimeComponentCalendar$$($options$$265$$) {
  this.Init($options$$265$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentCalendar$$, dvt.$Obj$, "DvtTimeComponentCalendar");
$DvtTimeComponentCalendar$$.prototype.Init = function $$DvtTimeComponentCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5
};
$DvtTimeComponentCalendar$$.prototype.$adjustDate$ = function $$DvtTimeComponentCalendar$$$$$adjustDate$$($date$$15$$, $scale$$57$$) {
  var $_adjustedDate$$ = new Date($date$$15$$.getTime());
  if("weeks" == $scale$$57$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$15$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$)
  }else {
    "months" == $scale$$57$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$57$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$57$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$57$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$57$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$57$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$15$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$57$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$15$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$57$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$57$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1))
  }
  return $_adjustedDate$$
};
$DvtTimeComponentCalendar$$.prototype.$getNextDate$ = function $$DvtTimeComponentCalendar$$$$$getNextDate$$($time$$15$$, $scale$$58$$) {
  if("seconds" == $scale$$58$$) {
    return new Date($time$$15$$ + 1E3)
  }
  if("minutes" == $scale$$58$$) {
    return new Date($time$$15$$ + 6E4)
  }
  if("hours" == $scale$$58$$) {
    return new Date($time$$15$$ + 36E5)
  }
  var $_nextDate$$ = new Date($time$$15$$);
  "days" == $scale$$58$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 1) : "weeks" == $scale$$58$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 7) : "months" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 1) : "quarters" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 3) : "halfyears" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 6) : "years" == $scale$$58$$ ? $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 1) : "twoyears" == $scale$$58$$ ? 
  $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 2) : $_nextDate$$.setYear($_nextDate$$.getYear() + 1);
  return $_nextDate$$
};
function $DvtTimelineKeyboardHandler$$($manager$$28$$) {
  this.Init($manager$$28$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineKeyboardHandler$$, dvt.$KeyboardHandler$, "DvtTimelineKeyboardHandler");
$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$29$$) {
  $DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$)
};
$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$509$$) {
  return this.$isNavigationEvent$($event$$509$$) && !$event$$509$$.ctrlKey
};
$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$510$$) {
  return $event$$510$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$510$$.ctrlKey
};
$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$511$$) {
  var $keyCode$$34$$ = $event$$511$$.keyCode;
  dvt.$KeyboardEvent$.$isEquals$($event$$511$$) || dvt.$KeyboardEvent$.$isPlus$($event$$511$$) ? this.$_eventManager$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$) : dvt.$KeyboardEvent$.$isMinus$($event$$511$$) || dvt.$KeyboardEvent$.$isUnderscore$($event$$511$$) ? this.$_eventManager$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$) : $keyCode$$34$$ == dvt.$KeyboardEvent$.$PAGE_UP$ ? ($event$$511$$.shiftKey ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), dvt.$EventManager$.$consumeEvent$($event$$511$$)) : 
  $keyCode$$34$$ == dvt.$KeyboardEvent$.$PAGE_DOWN$ && ($event$$511$$.shiftKey ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), dvt.$EventManager$.$consumeEvent$($event$$511$$));
  return $DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$511$$)
};
function $DvtTimelineKeyboardHandler$getNextNavigable$$($currentNavigable$$13$$, $event$$512$$, $navigableItems$$4$$) {
  var $isVertical$$3_series$$12$$ = $currentNavigable$$13$$.$getSeries$(), $seriesIndex$$126$$ = $currentNavigable$$13$$.$getSeriesIndex$(), $isRTL$$42$$ = dvt.$Agent$.$isRightToLeft$($isVertical$$3_series$$12$$.$getCtx$()), $isVertical$$3_series$$12$$ = $isVertical$$3_series$$12$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$4$$.length;
  if(!$isRTL$$42$$ && dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$512$$.keyCode || $isRTL$$42$$ && dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$512$$.keyCode) {
    if($isVertical$$3_series$$12$$) {
      if($isDualSeries$$ && 1 != $seriesIndex$$126$$) {
        return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1])
      }
    }else {
      return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$126$$], $JSCompiler_alias_TRUE$$)
    }
  }else {
    if(!$isRTL$$42$$ && dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$512$$.keyCode || $isRTL$$42$$ && dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$512$$.keyCode) {
      if($isVertical$$3_series$$12$$) {
        if($isDualSeries$$ && 0 != $seriesIndex$$126$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0])
        }
      }else {
        return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$126$$], $JSCompiler_alias_FALSE$$)
      }
    }else {
      if(dvt.$KeyboardEvent$.$DOWN_ARROW$ == $event$$512$$.keyCode) {
        if($isVertical$$3_series$$12$$) {
          return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$126$$], $JSCompiler_alias_TRUE$$)
        }
        if($isDualSeries$$ && 1 != $seriesIndex$$126$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1])
        }
      }else {
        if(dvt.$KeyboardEvent$.$UP_ARROW$ == $event$$512$$.keyCode) {
          if($isVertical$$3_series$$12$$) {
            return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$126$$], $JSCompiler_alias_FALSE$$)
          }
          if($isDualSeries$$ && 0 != $seriesIndex$$126$$) {
            return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0])
          }
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtTimelineKeyboardHandler$getNextItem$$($item$$48_nextIndex$$5$$, $navigableItems$$5$$, $isNext$$) {
  $item$$48_nextIndex$$5$$ = dvt.$ArrayUtils$.$getIndex$($navigableItems$$5$$, $item$$48_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$48_nextIndex$$5$$ && $item$$48_nextIndex$$5$$ < $navigableItems$$5$$.length ? $navigableItems$$5$$[$item$$48_nextIndex$$5$$] : $JSCompiler_alias_NULL$$
}
function $DvtTimelineKeyboardHandler$getClosestItem$$($item$$49$$, $navigableItems$$6$$) {
  if(0 < $navigableItems$$6$$.length) {
    for(var $closest$$ = $navigableItems$$6$$[0], $itemLoc$$ = $item$$49$$.$_loc$, $dist$$1$$ = Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$620$$ = 1;$i$$620$$ < $navigableItems$$6$$.length;$i$$620$$++) {
      var $testDist$$ = Math.abs($itemLoc$$ - $navigableItems$$6$$[$i$$620$$].$_loc$);
      $testDist$$ < $dist$$1$$ && ($dist$$1$$ = $testDist$$, $closest$$ = $navigableItems$$6$$[$i$$620$$])
    }
    return $closest$$
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtTimelineEventManager$$($timeline$$) {
  this.Init($timeline$$.$getCtx$(), $timeline$$.$processEvent$, $timeline$$);
  this.$_timeline$ = $timeline$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = $JSCompiler_alias_FALSE$$
}
dvt.$Obj$.$createSubclass$($DvtTimelineEventManager$$, dvt.$EventManager$, "DvtTimelineEventManager");
$JSCompiler_prototypeAlias$$ = $DvtTimelineEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$83_stage$$11$$) {
  $DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$83_stage$$11$$);
  dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$83_stage$$11$$.$addEvtListener$("wheel", this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this) : $displayable$$83_stage$$11$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$83_stage$$11$$ = this.$getCtx$().$_stage$, $displayable$$83_stage$$11$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, $JSCompiler_alias_FALSE$$, 
  this), $displayable$$83_stage$$11$$.$addEvtListener$("mouseleave", this.$OnMouseLeave$, $JSCompiler_alias_FALSE$$, this)))
};
$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$84_stage$$12$$) {
  $DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$84_stage$$12$$);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$84_stage$$12$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this) : $displayable$$84_stage$$12$$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$84_stage$$12$$ = this.$getCtx$().$_stage$, $displayable$$84_stage$$12$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, $JSCompiler_alias_FALSE$$, 
  this), $displayable$$84_stage$$12$$.$removeEvtListener$("mouseleave", this.$OnMouseLeave$, $JSCompiler_alias_FALSE$$, this)))
};
$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$513$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$513$$);
  this.$_timeline$.$HandleKeyDown$($event$$513$$)
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$514$$) {
  this.$_isDragPanning$ || ($DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$514$$), $JSCompiler_StaticMethods_handleShapeClick$$(this.$_timeline$, $event$$514$$))
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$515$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$515$$);
  !dvt.$Agent$.$isPlatformIE$() && !this.$isMouseOver$ && (this.$isMouseOver$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$))
};
$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$))
};
$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start()
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$518$$) {
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$518$$);
  dvt.$Agent$.$isPlatformIE$() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start())
};
$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$519$$) {
  this.$_isDragPanning$ = $JSCompiler_alias_FALSE$$;
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$519$$);
  this.$_timeline$.$HandleMouseDown$($event$$519$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_4304_event$$520$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$ = this.$_timeline$;
  dvt.$EventManager$.$consumeEvent$($compLoc$$inline_4304_event$$520$$);
  var $wheelDelta$$inline_4302$$ = $compLoc$$inline_4304_event$$520$$.wheelDelta;
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$) && $wheelDelta$$inline_4302$$) {
    var $compPagePos$$inline_4303_time$$inline_4305$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$getCtx$().$getStageAbsolutePosition$();
    $compLoc$$inline_4304_event$$520$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_isVertical$ ? $compLoc$$inline_4304_event$$520$$.pageY - $compPagePos$$inline_4303_time$$inline_4305$$.y : $compLoc$$inline_4304_event$$520$$.pageX - $compPagePos$$inline_4303_time$$inline_4305$$.x;
    $compPagePos$$inline_4303_time$$inline_4305$$ = ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_contentLength$ * $compLoc$$inline_4304_event$$520$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$, $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4300$$.$_contentLength$ * (0.02 * $wheelDelta$$inline_4302$$ + 1), $compPagePos$$inline_4303_time$$inline_4305$$, $compLoc$$inline_4304_event$$520$$, $JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$521$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$521$$);
  this.$_timeline$.$HandleTouchStart$($event$$521$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus()
};
$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$522$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$522$$);
  this.$_timeline$.$HandleTouchEnd$($event$$522$$)
};
$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$523$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$(this.$_timeline$)) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$523$$) : this.$_onMouseDragStart$($event$$523$$)
  }
};
$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$524$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$524$$) : this.$_onMouseDragMove$($event$$524$$)
};
$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$525$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$525$$) : this.$_onMouseDragEnd$($event$$525$$)
};
$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$8$$, $pageY$$8$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
  return new dvt.$Point$($pageX$$8$$ - this.$_stageAbsolutePosition$.x, $pageY$$8$$ - this.$_stageAbsolutePosition$.y)
};
$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$526_relPos$$46$$) {
  return $event$$526_relPos$$46$$.button != dvt.$MouseEvent$.$RIGHT_CLICK_BUTTON$ ? ($event$$526_relPos$$46$$ = this.$_getRelativePosition$($event$$526_relPos$$46$$.pageX, $event$$526_relPos$$46$$.pageY), this.$_timeline$.$beginDragPan$($event$$526_relPos$$46$$.x, $event$$526_relPos$$46$$.y), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$527_relPos$$47$$) {
  $event$$527_relPos$$47$$ = this.$_getRelativePosition$($event$$527_relPos$$47$$.pageX, $event$$527_relPos$$47$$.pageY);
  this.$_timeline$.$contDragPan$($event$$527_relPos$$47$$.x, $event$$527_relPos$$47$$.y) && (this.$_isDragPanning$ = $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$529_relPos$$48$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$ = $event$$529_relPos$$48$$.touches;
  if(1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.length) {
    return $event$$529_relPos$$48$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$529_relPos$$48$$.x, $event$$529_relPos$$48$$.y), $JSCompiler_alias_TRUE$$
  }
  if(2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = $JSCompiler_alias_TRUE$$;
    var $relPos1$$2_y1$$inline_4309$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[0].pageY), $relPos2$$2_y2$$inline_4311$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$ = 
    this.$_timeline$, $x1$$inline_4308$$ = $relPos1$$2_y1$$inline_4309$$.x, $relPos1$$2_y1$$inline_4309$$ = $relPos1$$2_y1$$inline_4309$$.y, $x2$$inline_4310$$ = $relPos2$$2_y2$$inline_4311$$.x, $relPos2$$2_y2$$inline_4311$$ = $relPos2$$2_y2$$inline_4311$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_isVertical$ ? Math.sqrt(($relPos1$$2_y1$$inline_4309$$ - $relPos2$$2_y2$$inline_4311$$) * ($relPos1$$2_y1$$inline_4309$$ - $relPos2$$2_y2$$inline_4311$$)) + ($relPos1$$2_y1$$inline_4309$$ < $relPos2$$2_y2$$inline_4311$$ ? $relPos1$$2_y1$$inline_4309$$ : $relPos2$$2_y2$$inline_4311$$) : Math.sqrt(($x1$$inline_4308$$ - $x2$$inline_4310$$) * 
    ($x1$$inline_4308$$ - $x2$$inline_4310$$)) + ($x1$$inline_4308$$ < $x2$$inline_4310$$ ? $x1$$inline_4308$$ : $x2$$inline_4310$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_initialPinchZoomDist$ = Math.sqrt(($x1$$inline_4308$$ - $x2$$inline_4310$$) * ($x1$$inline_4308$$ - $x2$$inline_4310$$) + ($relPos1$$2_y1$$inline_4309$$ - $relPos2$$2_y2$$inline_4311$$) * ($relPos1$$2_y1$$inline_4309$$ - $relPos2$$2_y2$$inline_4311$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4307_touches$$9$$.$_contentLength$;
    dvt.$EventManager$.$consumeEvent$($event$$529_relPos$$48$$);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$530$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$ = $event$$530$$.touches;
  if(1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.y), 
    $event$$530$$.preventDefault()
  }else {
    if(2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.length) {
      var $relPos1$$3_y1$$inline_4315$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[0].pageY), $relPos2$$3_y2$$inline_4317$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$ = this.$_timeline$, $currPinchZoomDist$$inline_4318_x1$$inline_4314$$ = $relPos1$$3_y1$$inline_4315$$.x, $relPos1$$3_y1$$inline_4315$$ = $relPos1$$3_y1$$inline_4315$$.y, $x2$$inline_4316$$ = $relPos2$$3_y2$$inline_4317$$.x, $relPos2$$3_y2$$inline_4317$$ = $relPos2$$3_y2$$inline_4317$$.y, $currPinchZoomDist$$inline_4318_x1$$inline_4314$$ = Math.sqrt(($currPinchZoomDist$$inline_4318_x1$$inline_4314$$ - $x2$$inline_4316$$) * 
      ($currPinchZoomDist$$inline_4318_x1$$inline_4314$$ - $x2$$inline_4316$$) + ($relPos1$$3_y1$$inline_4315$$ - $relPos2$$3_y2$$inline_4317$$) * ($relPos1$$3_y1$$inline_4315$$ - $relPos2$$3_y2$$inline_4317$$));
      $currPinchZoomDist$$inline_4318_x1$$inline_4314$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$, $currPinchZoomDist$$inline_4318_x1$$inline_4314$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_initialPinchZoomTime$, 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4313_relPos$$49_touches$$10$$.$_initialPinchZoomLoc$, $JSCompiler_alias_FALSE$$);
      $event$$530$$.preventDefault()
    }
  }
};
$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$531$$) {
  if(this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = $JSCompiler_alias_FALSE$$;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_initialPinchZoomDist$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_initialPinchZoomLoc$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_initialPinchZoomLength$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_initialPinchZoomTime$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_triggerViewportChange$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4320$$.$_scale$)))
  }else {
    this.$_timeline$.$endDragPan$()
  }
  $event$$531$$.preventDefault();
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$11$$) {
  this.$_timeline$.$zoomBy$($dz$$11$$)
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$22$$, $dy$$24$$) {
  var $deltaX$$16$$ = $dx$$22$$ * this.$_timeline$.$_canvasLength$ * (dvt.$Agent$.$isRightToLeft$(this.$_context$) ? -1 : 1), $deltaY$$16$$ = $dy$$24$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$16$$ && (this.$_timeline$.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$16$$, $deltaY$$16$$);
  $JSCompiler_StaticMethods_endPan$$(this.$_timeline$)
};
$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$)
};
$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$)
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$
};
dvt.$Timeline$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.Timeline", dvt.$Timeline$);
dvt.$Obj$.$createSubclass$(dvt.$Timeline$, $DvtTimeComponent$$);
dvt.$Timeline$.$ZOOM_BY_VALUE$ = 1.5;
dvt.$Timeline$.$ORIENTATION_VERTICAL$ = "vertical";
dvt.$Timeline$.newInstance = function $dvt$$Timeline$$newInstance$($context$$397$$, $callback$$129$$, $callbackObj$$91$$) {
  var $timeline$$1$$ = new dvt.$Timeline$;
  $timeline$$1$$.Init($context$$397$$, $callback$$129$$, $callbackObj$$91$$);
  return $timeline$$1$$
};
dvt.$Timeline$.newInstance = dvt.$Timeline$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$398$$, $callback$$130$$, $callbackObj$$92$$) {
  dvt.$Timeline$.$superclass$.Init.call(this, $context$$398$$, $callback$$130$$, $callbackObj$$92$$);
  this.$Defaults$ = new $DvtTimelineDefaults$$;
  this.$EventManager$ = new $DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = $JSCompiler_alias_NULL$$ : (this.$_keyboardHandler$ = new $DvtTimelineKeyboardHandler$$(this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$))
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$266$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$266$$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$267$$) {
  this.$_parser$ = new $DvtTimelineParser$$;
  return this.$_parser$.parse($options$$267$$)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$5$$) {
  var $orientation$$3$$ = $props$$5$$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && $orientation$$3$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  this.$_hasOverview$ = $props$$5$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$5$$.$viewStart$;
  this.$_viewEndTime$ = $props$$5$$.$viewEnd$;
  this.$_selectionMode$ = $props$$5$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$5$$.$axisStyle$;
  this.$_shortDesc$ = $props$$5$$.$shortDesc$;
  this.$_id$ = $props$$5$$.id;
  this.$_referenceObjects$ = $props$$5$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$5$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$5$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SUNDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_MONDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_TUESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_WEDNESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_SHORT_THURSDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_FRIDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SATURDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SUNDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_MONDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_TUESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_WEDNESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_THURSDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_FRIDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SATURDAY", $JSCompiler_alias_NULL$$)], $monthNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_JANUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_JUNE", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_NOVEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JANUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_FEBRUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MARCH", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_APRIL", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JUNE", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JULY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_AUGUST", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SEPTEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_OCTOBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_NOVEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_DECEMBER", $JSCompiler_alias_NULL$$)]};
  this.$_seriesScale$ ? (this.$_seriesConverter$ = $props$$5$$.$seriesConverter$, this.$_seriesTimeAxis$ = new $DvtTimeComponentAxis$$(this.$getCtx$(), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = 
  this.$_resources$.converterVert) : (this.$_seriesTimeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.$LONG$, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter)) : this.$_seriesTimeAxis$ = $JSCompiler_alias_NULL$$;
  this.$_defaultInversions$ = [$JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$];
  this.$_timeZoneOffsets$ = $props$$5$$.$timeZoneOffsets$;
  this.$_itemPosition$ = $props$$5$$.$itemPosition$;
  dvt.$Timeline$.$superclass$.$_applyParsedProperties$.call(this, $props$$5$$)
};
function $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return!$JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ && 1 == $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$()
}
$JSCompiler_prototypeAlias$$.select = function $$JSCompiler_prototypeAlias$$$select$($selection$$24$$) {
  this.$Options$.selection = dvt.$JsonUtils$.$clone$($selection$$24$$);
  this.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$(this)
};
dvt.$Timeline$.prototype.select = dvt.$Timeline$.prototype.select;
dvt.$Timeline$.prototype.$render$ = function $dvt$$Timeline$$$$render$$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$, $series$$inline_4372_startTime$$inline_4346_width$$129$$, $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$) {
  if($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$) {
    this.$SetOptions$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$);
    this.$Options$ && (this.$_resources$ = this.$Options$._resources, this.$_resources$ == $JSCompiler_alias_NULL$$ && (this.$_resources$ = []));
    this.$Width$ = $series$$inline_4372_startTime$$inline_4346_width$$129$$;
    this.$Height$ = $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$;
    $context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$);
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ : $series$$inline_4372_startTime$$inline_4346_width$$129$$;
    this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series);
    $JSCompiler_StaticMethods_prepareViewportLength$$(this);
    if(this.$_scale$) {
      $series$$inline_4372_startTime$$inline_4346_width$$129$$ = this.$_start$;
      $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ = this.$_end$;
      $context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ = this.$getCtx$();
      var $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$ = $DvtTimelineStyleUtils$$.$getAxisLabelStyle$(this.$Options$);
      this.$_timeAxis$ = new $DvtTimeComponentAxis$$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_isVertical$, this.$_zoomOrder$);
      this.$_timeAxis$.$_converter$ = this.$_converter$;
      this.$_timeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$);
      this.$_dates$ = [];
      this.$_labels$ = [];
      this.$_zoomLevelLengths$ = [];
      if(this.$_isVertical$) {
        var $defaultLength$$inline_4350$$ = $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
        this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert
      }else {
        $defaultLength$$inline_4350$$ = $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter
      }
      this.$_timeZoneOffsets$ && (this.$_timeAxis$.$_timeZoneOffsets$ = this.$_timeZoneOffsets$);
      for(var $i$$inline_4351$$ = 0;$i$$inline_4351$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_4351$$++) {
        var $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_4351$$];
        this.$_timeAxis$.$setScale$($scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$);
        var $JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$ = new dvt.$Rect$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ = Infinity, $contentSize$$inline_5765_maxSize$$inline_4355$$ = 0, $dates$$inline_4356$$ = [], $labels$$inline_4357$$ = [], $currentTime$$inline_4358_lengthFactor$$inline_4366$$ = this.$_timeAxis$.$adjustDate$($series$$inline_4372_startTime$$inline_4346_width$$129$$).getTime();
        for($dates$$inline_4356$$.push($currentTime$$inline_4358_lengthFactor$$inline_4366$$);$currentTime$$inline_4358_lengthFactor$$inline_4366$$ < $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$;) {
          var $labelText$$inline_4359_nextTime$$inline_4361$$ = $JSCompiler_StaticMethods_formatDate$$(this.$_timeAxis$, new Date($currentTime$$inline_4358_lengthFactor$$inline_4366$$)), $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$ = new dvt.$OutputText$($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$, $labelText$$inline_4359_nextTime$$inline_4361$$, 0, 0, "s_label" + $currentTime$$inline_4358_lengthFactor$$inline_4366$$);
          $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$.$setCSSStyle$($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$);
          $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$.time = $currentTime$$inline_4358_lengthFactor$$inline_4366$$;
          $labels$$inline_4357$$.push($label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$);
          $labelText$$inline_4359_nextTime$$inline_4361$$ = this.$_timeAxis$.$getNextDate$($currentTime$$inline_4358_lengthFactor$$inline_4366$$).getTime();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$.$addChild$($label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$);
          var $dim$$inline_4362_sizeDim$$inline_4364$$ = $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$.$getDimensions$();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$.removeChild($label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$);
          this.$_isVertical$ ? ($label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$ = $dim$$inline_4362_sizeDim$$inline_4364$$.$h$, $dim$$inline_4362_sizeDim$$inline_4364$$ = $dim$$inline_4362_sizeDim$$inline_4364$$.$w$) : ($label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$ = $dim$$inline_4362_sizeDim$$inline_4364$$.$w$, $dim$$inline_4362_sizeDim$$inline_4364$$ = $dim$$inline_4362_sizeDim$$inline_4364$$.$h$);
          $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$ = Math.max($defaultLength$$inline_4350$$, $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$ + 2 * $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$);
          $currentTime$$inline_4358_lengthFactor$$inline_4366$$ = ($labelText$$inline_4359_nextTime$$inline_4361$$ - $currentTime$$inline_4358_lengthFactor$$inline_4366$$) / $label$$inline_4360_labelLength$$inline_4365_lengthDim$$inline_4363$$;
          $currentTime$$inline_4358_lengthFactor$$inline_4366$$ < $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ && ($minLength$$inline_4354_zoomLevelLength$$inline_4367$$ = $currentTime$$inline_4358_lengthFactor$$inline_4366$$);
          $dim$$inline_4362_sizeDim$$inline_4364$$ > $contentSize$$inline_5765_maxSize$$inline_4355$$ && ($contentSize$$inline_5765_maxSize$$inline_4355$$ = $dim$$inline_4362_sizeDim$$inline_4364$$);
          $currentTime$$inline_4358_lengthFactor$$inline_4366$$ = $labelText$$inline_4359_nextTime$$inline_4361$$;
          $dates$$inline_4356$$.push($currentTime$$inline_4358_lengthFactor$$inline_4366$$)
        }
        $JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$ = this.$_timeAxis$;
        $contentSize$$inline_5765_maxSize$$inline_4355$$ += 2 * $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$;
        $contentSize$$inline_5765_maxSize$$inline_4355$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_5764_axis$$inline_4353$$.$_contentSize$ = $contentSize$$inline_5765_maxSize$$inline_4355$$);
        this.$_dates$.push($dates$$inline_4356$$);
        this.$_labels$.push($labels$$inline_4357$$);
        $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ = ($endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ - $series$$inline_4372_startTime$$inline_4346_width$$129$$) / $minLength$$inline_4354_zoomLevelLength$$inline_4367$$;
        this.$_zoomLevelLengths$.push($minLength$$inline_4354_zoomLevelLength$$inline_4367$$);
        $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_4351$$, this.$_setLength$ && ($JSCompiler_StaticMethods_setContentLength$$(this, $minLength$$inline_4354_zoomLevelLength$$inline_4367$$), this.$_setLength$ = $JSCompiler_alias_FALSE$$, this.$_viewStartTime$ == $JSCompiler_alias_NULL$$ ? this.$_viewEndTime$ != $JSCompiler_alias_NULL$$ ? (this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ * 
        ($endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ - $series$$inline_4372_startTime$$inline_4346_width$$129$$), this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ = this.$_canvasLength$ / $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$, $JSCompiler_StaticMethods_setContentLength$$(this, 
        $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ * (this.$_end$ - this.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ * (this.$_start$ - this.$_viewStartTime$))) : (this.$_viewStartTime$ = this.$_start$, $JSCompiler_StaticMethods_setRelativeStartPos$$(this, 0), this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ * ($endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ - 
        $series$$inline_4372_startTime$$inline_4346_width$$129$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)) : (this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_4354_zoomLevelLength$$inline_4367$$ * ($endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ - $series$$inline_4372_startTime$$inline_4346_width$$129$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ = 
        this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ = this.$_canvasLength$ / $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$, $JSCompiler_StaticMethods_setContentLength$$(this, $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ * (this.$_end$ - this.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $scale$$inline_4352_viewTime$$inline_4368_widthFactor$$inline_4369$$ * (this.$_start$ - 
        this.$_viewStartTime$)))));
        0 == $i$$inline_4351$$ && (this.$_maxContentLength$ = $labels$$inline_4357$$.length * this.$_canvasLength$)
      }
      this.$_timeAxis$.$setScale$(this.$_scale$);
      $JSCompiler_StaticMethods_applyAxisStyleValues$$(this)
    }
    if($series$$inline_4372_startTime$$inline_4346_width$$129$$ = this.$Options$.series) {
      $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ = Math.min($series$$inline_4372_startTime$$inline_4346_width$$129$$.length, 2);
      this.$_seriesOptions$ = [];
      if(this.$_series$) {
        if($endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$ != this.$_series$.length) {
          for($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ = 0;$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ < this.$_series$.length;$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$++) {
            this.$_innerCanvas$.removeChild(this.$_series$[$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$])
          }
          this.$_series$ = []
        }
      }else {
        this.$_series$ = []
      }
      for($context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ = 0;$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$ < $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$;$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$++) {
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$ = $series$$inline_4372_startTime$$inline_4346_width$$129$$[$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$];
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.start = this.$_start$;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.end = this.$_end$;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.inverted = this.$_defaultInversions$[$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$];
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.orientation = this.$Options$.orientation;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.referenceObjects = this.$_referenceObjects$;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.timeline = this;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.index = $context$$inline_4348_i$$inline_4374_options$$268_props$$6$$;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.scale = this.$Options$.majorAxis.scale, $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.timeAxis = this.$_seriesTimeAxis$);
        if($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.styleDefaults = this.$Options$.styleDefaults) {
          $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$
        }
        $axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$._isRandomItemLayout = "random" == this.$_itemPosition$;
        this.$_seriesOptions$.push($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$);
        this.$_series$[$context$$inline_4348_i$$inline_4374_options$$268_props$$6$$] == $JSCompiler_alias_NULL$$ && ($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$ = new $DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($axisLabelStyle$$inline_4349_s$$inline_4376_seriesOptions$$inline_4375$$))
      }
    }else {
      this.$_series$ = []
    }
    $DvtTimelineRenderer$$.$renderTimeline$(this);
    this.$UpdateAriaAttributes$();
    this.$getCtx$().$setKeyboardFocusArray$([this])
  }else {
    this.$_handleResize$($series$$inline_4372_startTime$$inline_4346_width$$129$$, $endTime$$inline_4347_height$$110_seriesCount$$inline_4373$$)
  }
};
dvt.$Timeline$.prototype.render = dvt.$Timeline$.prototype.$render$;
function $JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$) {
  var $hasValidScale$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$ && -1 != dvt.$ArrayUtils$.$getIndex$($DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$), $hasValidStartAndEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ > 
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$, $hasValidSeries$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$ && 0 < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$.length, $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$;
  if($hasValidSeries$$) {
    a: {
      for($JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ = 0;$JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$.length;$JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$++) {
        var $hasValidSeriesScale_seriesOptions$$inline_4384$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$[$JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$];
        if($hasValidSeriesScale_seriesOptions$$inline_4384$$.$items$) {
          for(var $hasValidViewport_j$$inline_4385$$ = 0;$hasValidViewport_j$$inline_4385$$ < $hasValidSeriesScale_seriesOptions$$inline_4384$$.$items$.length;$hasValidViewport_j$$inline_4385$$++) {
            var $end$$inline_4388_item$$inline_4386$$ = $hasValidSeriesScale_seriesOptions$$inline_4384$$.$items$[$hasValidViewport_j$$inline_4385$$], $hasValidViewStart_start$$inline_4387$$ = (new Date($end$$inline_4388_item$$inline_4386$$.start)).getTime();
            if(!$hasValidViewStart_start$$inline_4387$$) {
              $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
            if($end$$inline_4388_item$$inline_4386$$.hasOwnProperty("end") && ($end$$inline_4388_item$$inline_4386$$ = (new Date($end$$inline_4388_item$$inline_4386$$.end)).getTime(), !($end$$inline_4388_item$$inline_4386$$ && $end$$inline_4388_item$$inline_4386$$ > $hasValidViewStart_start$$inline_4387$$))) {
              $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
          }
        }
      }
      $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ = $JSCompiler_alias_TRUE$$
    }
  }else {
    $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ = $JSCompiler_alias_FALSE$$
  }
  $hasValidSeriesScale_seriesOptions$$inline_4384$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$ ? -1 != dvt.$ArrayUtils$.$getIndex$($DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$) : $JSCompiler_alias_TRUE$$;
  $hasValidViewport_j$$inline_4385$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ : $JSCompiler_alias_TRUE$$;
  $hasValidViewStart_start$$inline_4387$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ >= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ <= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : $JSCompiler_alias_TRUE$$;
  return $hasValidScale$$ && $hasValidStartAndEnd$$ && $hasValidSeries$$ && $JSCompiler_temp$$25_hasValidSeriesItems_i$$inline_4383$$ && $hasValidSeriesScale_seriesOptions$$inline_4384$$ && $hasValidViewport_j$$inline_4385$$ && $hasValidViewStart_start$$inline_4387$$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$
}
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE")
};
function $JSCompiler_StaticMethods_isAnimating$$($JSCompiler_StaticMethods_isAnimating$self$$) {
  for(var $i$$622$$ = 0;$i$$622$$ < $JSCompiler_StaticMethods_isAnimating$self$$.$_series$.length;$i$$622$$++) {
    if($JSCompiler_StaticMethods_isAnimating$self$$.$_series$[$i$$622$$].$_isAnimating$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_showThenHideHotspots$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$13$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$)) {
    for(var $animator$$134$$ = new dvt.$Animator$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$623$$ = 0;$i$$623$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$623$$++) {
      var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$623$$], $id$$201$$ = $hotspot$$.getId(), $show$$2$$ = $JSCompiler_alias_TRUE$$;
      if($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$201$$ || "rhs" == $id$$201$$)) {
        $show$$2$$ = $JSCompiler_alias_FALSE$$
      }
      var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
      if($pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), $series$$13$$ != $JSCompiler_alias_NULL$$ && $series$$13$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$201$$ || "bhs" == $id$$201$$))) {
        $show$$2$$ = $JSCompiler_alias_FALSE$$
      }
      $show$$2$$ && $animator$$134$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, $DvtTimelineStyleUtils$$.$getHotspotOpacity$())
    }
    dvt.$Playable$.$appendOnEnd$($animator$$134$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
    $animator$$134$$.play()
  }
}
$JSCompiler_prototypeAlias$$.$hideHotspots$ = function $$JSCompiler_prototypeAlias$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if(0 != $hotSpotsLength$$) {
    for(var $animator$$135$$ = new dvt.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$624$$ = 0;$i$$624$$ < $hotSpotsLength$$;$i$$624$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$624$$];
      $animator$$135$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0)
    }
    $animator$$135$$.play()
  }
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getTimelineStyle$());
  if(this.$Options$.styleDefaults) {
    var $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ && this.$_style$.$parseInlineStyle$("border-color:" + $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ + ";")
  }
  if(this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? $DvtTimelineStyleUtils$$.$getOverviewWidth$() : $DvtTimelineStyleUtils$$.$getOverviewHeight$(), $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$Options$.overview.style)) {
    for(var $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$.split(";"), $doubleBorderWidth_i$$625$$ = 0;$doubleBorderWidth_i$$625$$ < $borderWidth$$16_overviewStyle$$6_splits_style$$97$$.length;$doubleBorderWidth_i$$625$$++) {
      var $s$$134$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$[$doubleBorderWidth_i$$625$$];
      if($s$$134$$ && 0 < $s$$134$$.length) {
        var $colonIndex$$2$$ = $s$$134$$.indexOf(":");
        if(-1 < $colonIndex$$2$$) {
          var $attrName$$1$$ = dvt.$StringUtils$.trim($s$$134$$.substring(0, $colonIndex$$2$$));
          if(this.$_isVertical$ && "width" == $attrName$$1$$ || !this.$_isVertical$ && "height" == $attrName$$1$$) {
            this.$_overviewSize$ = parseInt(dvt.$StringUtils$.trim($s$$134$$.substring($colonIndex$$2$$ + 1)), 10);
            break
          }
        }
      }
    }
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$625$$ = 2 * $borderWidth$$16_overviewStyle$$6_splits_style$$97$$;
  this.$_style$.$parseInlineStyle$("border:" + $doubleBorderWidth_i$$625$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$625$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$625$$, this.$isRTL$() && (this.$_startX$ += this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$625$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$625$$, this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - 
  this.$_overviewSize$ - $doubleBorderWidth_i$$625$$ : this.$Height$ - $doubleBorderWidth_i$$625$$)
};
function $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisStyle$());
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$) {
    var $axisStyles_r$$64$$ = "", $g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.backgroundColor;
    $g$$10_style$$98$$ && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "background-color:" + $g$$10_style$$98$$ + ";");
    ($g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderColor) && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "border-color:" + $g$$10_style$$98$$ + ";");
    ($g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "border-width:" + $g$$10_style$$98$$ + ";");
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$($axisStyles_r$$64$$)
  }
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$getBorderWidth$();
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$("border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ - $DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$;
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor) {
    var $b$$37_bgColor$$15$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor, $axisStyles_r$$64$$ = dvt.$ColorUtils$.$getRed$($b$$37_bgColor$$15$$), $g$$10_style$$98$$ = dvt.$ColorUtils$.$getGreen$($b$$37_bgColor$$15$$), $b$$37_bgColor$$15$$ = dvt.$ColorUtils$.$getBlue$($b$$37_bgColor$$15$$);
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesBackgroundOverlayStyle$ = "background-color:rgba(" + $axisStyles_r$$64$$ + "," + $g$$10_style$$98$$ + "," + $b$$37_bgColor$$15$$ + ",0.8);"
  }
}
function $JSCompiler_StaticMethods_prepareViewportLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$) {
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, 0);
  if($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ && $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$) {
    var $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$;
    0 < $viewTime_widthFactor$$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = $JSCompiler_alias_FALSE$$, $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime_widthFactor$$, $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), 
    $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$)))
  }
}
$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$534$$) {
  if(1 == $event$$534$$.touches.length) {
    if(this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$534$$.target)) {
      var $series$$15$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    $JSCompiler_StaticMethods_showThenHideHotspots$$(this, $series$$15$$)
  }
};
function $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$, $compLoc$$1_s$$inline_4403_s$$inline_4406$$, $triggerViewportChangeEvent$$) {
  $newLength_viewTime$$2$$ > $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$, $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_TRUE$$)) : $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$ > $newLength_viewTime$$2$$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$, $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_FALSE$$)) : $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_FALSE$$);
  var $zoomIn$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ <= $newLength_viewTime$$2$$, $viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$) / ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) * $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$;
  $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$);
  $newLength_viewTime$$2$$ = $viewLength_widthFactor$$4$$ / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ ? ($viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ - 
  $compLoc$$1_s$$inline_4403_s$$inline_4406$$ * $viewLength_widthFactor$$4$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ > 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$)), $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, 1 / $viewLength_widthFactor$$4$$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$))) : ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, 0));
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Height$ : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Width$);
  if($zoomIn$$) {
    for(;0 < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ - 1], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$--;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_4403_s$$inline_4406$$ = 1;$compLoc$$1_s$$inline_4403_s$$inline_4406$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_4403_s$$inline_4406$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_4403_s$$inline_4406$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_4403_s$$inline_4406$$ - 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }else {
    for(;$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$.length - 1;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$++;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_4403_s$$inline_4406$$ = 0;$compLoc$$1_s$$inline_4403_s$$inline_4406$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_4403_s$$inline_4406$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_4403_s$$inline_4406$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_4402_JSCompiler_StaticMethods_increaseScale$self$$inline_4405_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_4403_s$$inline_4406$$ + 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }
  $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $DvtTimelineRenderer$$.$_renderAxis$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$);
  $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startY$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$) : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startX$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $triggerViewportChangeEvent$$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$))
}
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$12$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  $JSCompiler_StaticMethods_handleZoomWheel$$(this, this.$_contentLength$ * ((1 / $dz$$12$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$28$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$1$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$28$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$1$$) / $seriesCount$$28$$;
    for(var $i$$629$$ = 0;$i$$629$$ < $seriesCount$$28$$;$i$$629$$++) {
      var $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$629$$];
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$setClipPath$($JSCompiler_alias_NULL$$);
      var $cp$$7_width$$inline_4409$$ = new dvt.$ClipPath$;
      if($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $height$$111_height$$inline_4410_key$$69$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? Math.abs($i$$629$$ - 1) : $i$$629$$;
        if($JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length) {
          $cp$$7_width$$inline_4409$$.$addRect$($axisSize$$1$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$);
          var $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisSize$$1$$, 0)
        }else {
          $cp$$7_width$$inline_4409$$.$addRect$($height$$111_height$$inline_4410_key$$69$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $height$$111_height$$inline_4410_key$$69$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0)
        }
        var $width$$130$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $height$$111_height$$inline_4410_key$$69$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$
      }else {
        $cp$$7_width$$inline_4409$$.$addRect$(0, $i$$629$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $i$$629$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$)), $width$$130$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $height$$111_height$$inline_4410_key$$69$$ = 
        $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
      }
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$setClipPath$($cp$$7_width$$inline_4409$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$setMatrix$($posMatrix$$);
      $cp$$7_width$$inline_4409$$ = $width$$130$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_canvas$.$setTranslateY$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_canvas$.$setTranslateX$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$Width$ = $cp$$7_width$$inline_4409$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$Height$ = $height$$111_height$$inline_4410_key$$69$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_fetchStartPos$ = 0;
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_isVertical$ ? ($JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_fetchEndPos$ = $height$$111_height$$inline_4410_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_maxOverflowValue$ = $cp$$7_width$$inline_4409$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_length$ = $height$$111_height$$inline_4410_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_size$ = 
      $cp$$7_width$$inline_4409$$) : ($JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_fetchEndPos$ = $cp$$7_width$$inline_4409$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_maxOverflowValue$ = $height$$111_height$$inline_4410_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_length$ = $cp$$7_width$$inline_4409$$, $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_size$ = $height$$111_height$$inline_4410_key$$69$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_background$.$setWidth$($cp$$7_width$$inline_4409$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$.$_background$.$setHeight$($height$$111_height$$inline_4410_key$$69$$);
      $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$($JSCompiler_StaticMethods_reRender$self$$inline_4408_series$$16$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$131$$, $height$$112$$) {
  this.$Width$ = $width$$131$$;
  this.$Height$ = $height$$112$$;
  this.$applyStyleValues$();
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$112$$ : $width$$131$$;
  $JSCompiler_StaticMethods_prepareViewportLength$$(this);
  $DvtTimelineRenderer$$.$_renderBackground$(this);
  if($JSCompiler_StaticMethods_hasValidOptions$$(this)) {
    if($DvtTimelineRenderer$$.$_renderInnerCanvas$(this, this.$_canvas$), $JSCompiler_StaticMethods_applyAxisStyleValues$$(this), $JSCompiler_StaticMethods_updateSeries$$(this), $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$), $DvtTimelineRenderer$$.$_renderSeriesLabels$(this), $DvtTimelineRenderer$$.$_renderScrollHotspots$(this), $DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && ($DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
      var $selection$$25$$ = this.$SelectionHandler$.$getSelectedIds$();
      if($selection$$25$$ && 0 != $selection$$25$$.length) {
        for(var $i$$630$$ = 0;$i$$630$$ < $selection$$25$$.length;$i$$630$$++) {
          var $JSCompiler_StaticMethods_selSelectItem$self$$inline_4412$$ = this.$_overview$, $drawable$$inline_4414$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4412$$, $selection$$25$$[$i$$630$$]);
          $drawable$$inline_4414$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4412$$, $drawable$$inline_4414$$)
        }
      }
    }
  }else {
    $DvtTimelineRenderer$$.$_renderEmptyText$(this)
  }
};
$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$536$$) {
  (dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$DOWN_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$UP_ARROW$ == $event$$536$$.keyCode) && $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this, this.$EventManager$.$getFocus$())
};
$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$537$$) {
  this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$537$$.target)
};
$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$538$$) {
  "none" != this.$_selectionMode$ && $JSCompiler_StaticMethods_handleShapeClick$$(this, $event$$538$$)
};
$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_endPan$$(this)
};
function $JSCompiler_StaticMethods_endPan$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPan$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)))
}
$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if(this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$17$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$17$$ = this.$_currentY$ - $compY$$3$$;
    if(0 == $deltaX$$17$$ && 0 == $deltaY$$17$$) {
      return $JSCompiler_alias_FALSE$$
    }
    this.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$17$$, $deltaY$$17$$);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($deltaX$$18$$, $deltaY$$18$$) {
  var $axisSize$$2_maxTranslateY$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$(this, this.$_series$.length);
  if(this.$_isVertical$) {
    var $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$, $maxTranslateX_minTranslateY_widthFactor$$6$$;
    if(this.$_dragPanSeries$) {
      var $newTranslateX_viewTime$$3$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$18$$;
      1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$) ? ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $axisSize$$2_maxTranslateY$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $maxTranslateX_minTranslateY_widthFactor$$6$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$2_maxTranslateY$$) : this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = 
      this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$2_maxTranslateY$$, $maxTranslateX_minTranslateY_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$) : ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = 0, $maxTranslateX_minTranslateY_widthFactor$$6$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      $newTranslateX_viewTime$$3$$ < $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ ? $newTranslateX_viewTime$$3$$ = $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ : $newTranslateX_viewTime$$3$$ > $maxTranslateX_minTranslateY_widthFactor$$6$$ && ($newTranslateX_viewTime$$3$$ = $maxTranslateX_minTranslateY_widthFactor$$6$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX_viewTime$$3$$)
    }
    $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = this.$_innerCanvas$.$getTranslateY$() - $deltaY$$18$$;
    $maxTranslateX_minTranslateY_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$);
    $axisSize$$2_maxTranslateY$$ = this.$_startY$;
    $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ < $maxTranslateX_minTranslateY_widthFactor$$6$$ ? $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $maxTranslateX_minTranslateY_widthFactor$$6$$ : $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ > $axisSize$$2_maxTranslateY$$ && ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $axisSize$$2_maxTranslateY$$);
    this.$_innerCanvas$.$setTranslateY$($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$);
    this.$_startPos$ = $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ -= this.$_startY$;
    $maxTranslateX_minTranslateY_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $newTranslateX_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ / $maxTranslateX_minTranslateY_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $newTranslateX_viewTime$$3$$;
    this.$_hasOverview$ && ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$))
  }else {
    $newTranslateX_viewTime$$3$$ = this.$_innerCanvas$.$getTranslateX$() - $deltaX$$18$$, $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX_minTranslateY_widthFactor$$6$$ = this.$_startX$, $newTranslateX_viewTime$$3$$ < $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ ? $newTranslateX_viewTime$$3$$ = $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ : $newTranslateX_viewTime$$3$$ > 
    $maxTranslateX_minTranslateY_widthFactor$$6$$ && ($newTranslateX_viewTime$$3$$ = $maxTranslateX_minTranslateY_widthFactor$$6$$), this.$_innerCanvas$.$setTranslateX$($newTranslateX_viewTime$$3$$), this.$_startPos$ = $newTranslateX_viewTime$$3$$ - this.$_startX$, $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $JSCompiler_StaticMethods_getRelativeStartPos$$(this), $maxTranslateX_minTranslateY_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $newTranslateX_viewTime$$3$$ = 
    this.$_viewEndTime$ - this.$_viewStartTime$, this.$_viewStartTime$ = this.$_start$ - $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ / $maxTranslateX_minTranslateY_widthFactor$$6$$, this.$_viewEndTime$ = this.$_viewStartTime$ + $newTranslateX_viewTime$$3$$, this.$_hasOverview$ && ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$)), 
    this.$_dragPanSeries$ && ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$18$$, this.$_dragPanSeries$.$_isInverted$ ? ($maxTranslateX_minTranslateY_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$2_maxTranslateY$$ = this.$_dragPanSeries$.$Height$ + $axisSize$$2_maxTranslateY$$) : ($maxTranslateX_minTranslateY_widthFactor$$6$$ = 0, $axisSize$$2_maxTranslateY$$ = 
    this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ < $maxTranslateX_minTranslateY_widthFactor$$6$$ ? $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $maxTranslateX_minTranslateY_widthFactor$$6$$ : $minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ > $axisSize$$2_maxTranslateY$$ && ($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$ = $axisSize$$2_maxTranslateY$$), this.$_dragPanSeries$.$setTranslateY$($minTranslateX_newTranslateY_overviewLength$$2_startPos$$2$$))
  }
};
$JSCompiler_prototypeAlias$$.$HandleEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleEvent$$($event$$540_i$$631_isMultiSelect$$inline_4423$$) {
  var $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.type;
  if("selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "action" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
    dvt.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$540_i$$631_isMultiSelect$$inline_4423$$)
  }else {
    if("overview" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
      $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getSubType$();
      if("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        var $item$$52_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getNewStartTime$();
        this.$_viewEndTime$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getNewEndTime$();
        var $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if(0 < $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
          var $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$1_minLength$$2_viewTime$$4$$;
          $JSCompiler_StaticMethods_setContentLength$$(this, $s$$136_viewSize$$inline_4427_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $s$$136_viewSize$$inline_4427_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$));
          if($item$$52_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
            $item$$52_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for($isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$52_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && 0 < $item$$52_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$52_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$52_oldViewTime$$1_zoomLevelOrder$$ - 1]
            }
            $item$$52_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$52_oldViewTime$$1_zoomLevelOrder$$--
          }else {
            $item$$52_oldViewTime$$1_zoomLevelOrder$$ = 0;
            for($isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$52_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && $item$$52_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$52_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$52_oldViewTime$$1_zoomLevelOrder$$]
            }
          }
          this.$_zoomLevelOrder$ = $item$$52_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$52_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
          $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$);
          $JSCompiler_StaticMethods_updateSeries$$(this);
          this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$)
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
      if("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        this.$_viewStartTime$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getNewStartTime$(), this.$_viewEndTime$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getNewEndTime$(), $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $JSCompiler_StaticMethods_setRelativeStartPos$$(this, $s$$136_viewSize$$inline_4427_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$)), this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + 
        this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
    }else {
      if($itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getItemId$();
        $event$$540_i$$631_isMultiSelect$$inline_4423$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getParamValue$("multiSelect");
        $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = ($event$$540_i$$631_isMultiSelect$$inline_4423$$ != $JSCompiler_alias_NULL$$ ? $event$$540_i$$631_isMultiSelect$$inline_4423$$ : $JSCompiler_alias_FALSE$$) && "multiple" == this.$_selectionMode$;
        for($event$$540_i$$631_isMultiSelect$$inline_4423$$ = 0;$event$$540_i$$631_isMultiSelect$$inline_4423$$ < this.$_series$.length;$event$$540_i$$631_isMultiSelect$$inline_4423$$++) {
          for(var $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_series$[$event$$540_i$$631_isMultiSelect$$inline_4423$$], $j$$97$$ = 0;$j$$97$$ < $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$.length;$j$$97$$++) {
            if($item$$52_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$[$j$$97$$], $item$$52_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
              this.$SelectionHandler$.$_addToSelection$($item$$52_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$1_minLength$$2_viewTime$$4$$);
              this.$EventManager$.$setFocusObj$($item$$52_oldViewTime$$1_zoomLevelOrder$$);
              $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$52_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$136_viewSize$$inline_4427_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$136_viewSize$$inline_4427_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$136_viewSize$$inline_4427_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$136_viewSize$$inline_4427_widthFactor$$7$$;
              $JSCompiler_StaticMethods_setRelativeStartPos$$(this, this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$));
              this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
              this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break
            }
          }
        }
      }else {
        if("highlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
          $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getItemId$();
          for($event$$540_i$$631_isMultiSelect$$inline_4423$$ = 0;$event$$540_i$$631_isMultiSelect$$inline_4423$$ < this.$_series$.length;$event$$540_i$$631_isMultiSelect$$inline_4423$$++) {
            $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_series$[$event$$540_i$$631_isMultiSelect$$inline_4423$$];
            for($j$$97$$ = 0;$j$$97$$ < $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$.length;$j$$97$$++) {
              if($item$$52_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$[$j$$97$$], $item$$52_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
                $item$$52_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$($JSCompiler_alias_TRUE$$);
                break
              }
            }
          }
        }else {
          if("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
            $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$631_isMultiSelect$$inline_4423$$.$getItemId$();
            for($event$$540_i$$631_isMultiSelect$$inline_4423$$ = 0;$event$$540_i$$631_isMultiSelect$$inline_4423$$ < this.$_series$.length;$event$$540_i$$631_isMultiSelect$$inline_4423$$++) {
              $s$$136_viewSize$$inline_4427_widthFactor$$7$$ = this.$_series$[$event$$540_i$$631_isMultiSelect$$inline_4423$$];
              for($j$$97$$ = 0;$j$$97$$ < $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$.length;$j$$97$$++) {
                if($item$$52_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_4427_widthFactor$$7$$.$_items$[$j$$97$$], $item$$52_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
                  $item$$52_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$($JSCompiler_alias_TRUE$$);
                  break
                }
              }
            }
          }
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$setEnabled$($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$drawUpState$()) : ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$setEnabled$($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$drawUpState$())
}
function $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$setEnabled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor($JSCompiler_alias_NULL$$)) : ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$setEnabled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor($JSCompiler_alias_NULL$$))
}
function $JSCompiler_StaticMethods_updateScrollForItemNavigation$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$54$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$54$$.getHeight() : $item$$54$$.getWidth(), $endPos$$4_itemHoverStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $itemStart_widthFactor$$9$$ = $item$$54$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + $endPos$$4_itemHoverStrokeWidth$$ : $DvtTimelineStyleUtils$$.$getBubbleOffset$() + 
  $endPos$$4_itemHoverStrokeWidth$$), $startPos$$3$$ = $JSCompiler_StaticMethods_getRelativeStartPos$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= $endPos$$4_itemHoverStrokeWidth$$);
  $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 2 * $endPos$$4_itemHoverStrokeWidth$$;
  $endPos$$4_itemHoverStrokeWidth$$ = $startPos$$3$$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $startPos$$3$$ ? $startPos$$3$$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$4_itemHoverStrokeWidth$$ && ($startPos$$3$$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $startPos$$3$$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $startPos$$3$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $startPos$$3$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $startPos$$3$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startY$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$) : $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startX$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$))
}
function $JSCompiler_StaticMethods_handleShapeClick$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$541$$) {
  if($event$$541$$) {
    var $drawable$$6_event$$inline_4432_item$$inline_4430$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$541$$.target);
    if($drawable$$6_event$$inline_4432_item$$inline_4430$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_4429_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_4432_item$$inline_4430$$);
      if($drawable$$6_event$$inline_4432_item$$inline_4430$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_4429_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_4432_item$$inline_4430$$), $drawable$$6_event$$inline_4432_item$$inline_4430$$ = $drawable$$6_event$$inline_4432_item$$inline_4430$$.$_node$, $action$$inline_4431$$ = $drawable$$6_event$$inline_4432_item$$inline_4430$$.$getAction$();
        $action$$inline_4431$$ && ($drawable$$6_event$$inline_4432_item$$inline_4430$$ = dvt.$EventFactory$.$newActionEvent$("action", $action$$inline_4431$$, $drawable$$6_event$$inline_4432_item$$inline_4430$$.getId()), dvt.$EventDispatcher$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_4429_series$$17$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_4429_series$$17$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_4429_series$$17$$, 
        $drawable$$6_event$$inline_4432_item$$inline_4430$$))
      }
    }
  }
}
function $JSCompiler_StaticMethods_applyInitialSelections$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for(var $items$$37$$ = [], $i$$632$$ = 0;$i$$632$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$632$$++) {
      for(var $s$$137$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$632$$], $j$$98$$ = 0;$j$$98$$ < $s$$137$$.$_items$.length;$j$$98$$++) {
        $items$$37$$.push($s$$137$$.$_items$[$j$$98$$])
      }
    }
  }
  $JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$.$processInitialSelections$($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$37$$)
}
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$542$$) {
  $event$$542$$ && this.dispatchEvent($event$$542$$)
};
function $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$71$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods__findSeries$self$$) && $target$$71$$ && $target$$71$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$202$$ = $target$$71$$.getId();
    return $target$$71$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$71$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$71$$ : $id$$202$$ && "_s0" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$202$$ && "_s1" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$71$$.getParent())
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$_findDrawable$ = function $$JSCompiler_prototypeAlias$$$$_findDrawable$$($grandParent_target$$72$$) {
  if($grandParent_target$$72$$) {
    var $id$$203$$ = $grandParent_target$$72$$.getId();
    if($id$$203$$ && "_duration_" == $id$$203$$.substring(0, 10) && $grandParent_target$$72$$.$_node$) {
      return $grandParent_target$$72$$
    }
    var $parent$$76$$ = $grandParent_target$$72$$.getParent();
    if($parent$$76$$) {
      if($id$$203$$ && "zoom" == $id$$203$$.substring(0, 4)) {
        return $grandParent_target$$72$$
      }
      if($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $parent$$76$$.$_node$) {
        return $parent$$76$$
      }
      if($grandParent_target$$72$$ = $parent$$76$$.getParent()) {
        if($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$72$$.$_node$) {
          return $grandParent_target$$72$$
        }
        if(($id$$203$$ = $grandParent_target$$72$$.getId()) && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$72$$.getParent()) {
          return $grandParent_target$$72$$.getParent()
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtTimelineAutomation$$(this));
  return this.$Automation$
};
dvt.$Timeline$.prototype.getAutomation = dvt.$Timeline$.prototype.$getAutomation$;
dvt.$Timeline$.prototype.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
function $JSCompiler_StaticMethods_clearOverview$$($JSCompiler_StaticMethods_clearOverview$self$$) {
  $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ && ($JSCompiler_StaticMethods_clearOverview$self$$.removeChild($JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$), $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ = $JSCompiler_alias_NULL$$)
}
function $JSCompiler_StaticMethods_getRelativeStartPos$$($JSCompiler_StaticMethods_getRelativeStartPos$self$$) {
  return $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$isRTL$() && !$JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_contentLength$ - $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_startPos$ : $JSCompiler_StaticMethods_getRelativeStartPos$self$$.$_startPos$
}
function $JSCompiler_StaticMethods_setRelativeStartPos$$($JSCompiler_StaticMethods_setRelativeStartPos$self$$, $startPos$$5$$) {
  $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$isRTL$() && !$JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_startPos$ = $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_canvasLength$ - $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_contentLength$ - $startPos$$5$$ : $JSCompiler_StaticMethods_setRelativeStartPos$self$$.$_startPos$ = $startPos$$5$$
}
function $DvtTimelineAutomation$$($timeline$$2$$) {
  this.$_timeline$ = $timeline$$2$$
}
$goog$exportPath_$$("DvtTimelineAutomation", $DvtTimelineAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTimelineAutomation$$, dvt.$Automation$, "DvtTimelineAutomation");
$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$85_logicalObj$$12$$) {
  if(($displayable$$85_logicalObj$$12$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($displayable$$85_logicalObj$$12$$)) && $displayable$$85_logicalObj$$12$$ instanceof $DvtTimelineSeriesNode$$) {
    for(var $i$$633$$ = 0;$i$$633$$ < this.$_timeline$.$_series$.length;$i$$633$$++) {
      var $itemIndex$$11$$ = dvt.$ArrayUtils$.$getIndex$(this.$_timeline$.$_series$[$i$$633$$].$_items$, $displayable$$85_logicalObj$$12$$);
      if(-1 != $itemIndex$$11$$) {
        return"timelineItem[" + $i$$633$$ + "][" + $itemIndex$$11$$ + "]"
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$19_subId$$30$$) {
  if($series$$19_subId$$30$$) {
    var $parenIndex$$ = $series$$19_subId$$30$$.indexOf("[");
    if(0 < $parenIndex$$ && "timelineItem" === $series$$19_subId$$30$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$19_subId$$30$$.indexOf("]");
      if(0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$298$$ = parseInt($series$$19_subId$$30$$.substring($endParenIndex$$ + 2, $series$$19_subId$$30$$.length - 1));
        if($series$$19_subId$$30$$ = this.$_timeline$.$_series$[parseInt($series$$19_subId$$30$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if($itemIndex$$12_node$$298$$ = $series$$19_subId$$30$$.$_items$[$itemIndex$$12_node$$298$$]) {
            return $itemIndex$$12_node$$298$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineAutomation$$.prototype.getDomElementForSubId = $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
function $DvtTimelineDefaults$$() {
  this.Init({alta:$DvtTimelineDefaults$VERSION_1$$})
}
dvt.$Obj$.$createSubclass$($DvtTimelineDefaults$$, dvt.$BaseComponentDefaults$, "DvtTimelineDefaults");
var $DvtTimelineDefaults$VERSION_1$$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
titleStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:dvt.$CSSStyle$.$COLORS_ALTA$, emptyTextStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
function $DvtTimelineParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineParser$$, dvt.$Obj$, "DvtTimelineParser");
$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$269$$) {
  this.$_itemSelection$ = $options$$269$$.selectionMode;
  $options$$269$$.viewportStart && (this.$_viewStartTime$ = new Date($options$$269$$.viewportStart));
  $options$$269$$.viewportEnd && (this.$_viewEndTime$ = new Date($options$$269$$.viewportEnd));
  this.$_startTime$ = new Date($options$$269$$.start);
  this.$_endTime$ = new Date($options$$269$$.end);
  var $ret$$64$$ = this.$ParseRootAttributes$();
  $ret$$64$$.$inlineStyle$ = $options$$269$$.style;
  var $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$269$$.minorAxis;
  if($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$60$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale;
    $ret$$64$$.scale = $referenceObjectsValueArray_scale$$60$$;
    var $i$$634_zoomOrder$$3$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.zoomOrder;
    $i$$634_zoomOrder$$3$$ == $JSCompiler_alias_NULL$$ ? $i$$634_zoomOrder$$3$$ = [$referenceObjectsValueArray_scale$$60$$] : $i$$634_zoomOrder$$3$$.reverse();
    $ret$$64$$.$zoomOrder$ = $i$$634_zoomOrder$$3$$;
    $ret$$64$$.$converter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter;
    $ret$$64$$.$axisStyle$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.style
  }
  if($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$269$$.majorAxis) {
    $ret$$64$$.$seriesScale$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale, $ret$$64$$.$seriesConverter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter
  }
  $ret$$64$$.$shortDesc$ = $options$$269$$.shortDesc;
  $ret$$64$$.id = $options$$269$$.id;
  $ret$$64$$.orientation = $options$$269$$.orientation;
  if(($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$269$$.referenceObjects) && 0 < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$60$$ = [];
    for($i$$634_zoomOrder$$3$$ = 0;$i$$634_zoomOrder$$3$$ < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length;$i$$634_zoomOrder$$3$$++) {
      $referenceObjectsValueArray_scale$$60$$.push(new Date($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$[$i$$634_zoomOrder$$3$$].value))
    }
    $ret$$64$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$60$$
  }
  $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$269$$.overview;
  $ret$$64$$.$hasOverview$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ != $JSCompiler_alias_NULL$$ && "on" == $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.rendered ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  $ret$$64$$.$timeZoneOffsets$ = $options$$269$$._tzo;
  $ret$$64$$.$itemPosition$ = $options$$269$$._ip;
  return $ret$$64$$
};
$DvtTimelineParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineParser$$$$$ParseRootAttributes$$() {
  var $ret$$65$$ = {};
  $ret$$65$$.$origStart$ = this.$_startTime$;
  $ret$$65$$.$origEnd$ = this.$_endTime$;
  $ret$$65$$.orientation = "horizontal";
  $ret$$65$$.start = this.$_startTime$.getTime();
  $ret$$65$$.end = this.$_endTime$.getTime();
  this.$_viewStartTime$ && ($ret$$65$$.$viewStart$ = this.$_viewStartTime$.getTime());
  this.$_viewEndTime$ && ($ret$$65$$.$viewEnd$ = this.$_viewEndTime$.getTime());
  $ret$$65$$.$selectionMode$ = "none";
  this.$_itemSelection$ != $JSCompiler_alias_NULL$$ && ($ret$$65$$.$selectionMode$ = this.$_itemSelection$);
  return $ret$$65$$
};
var $DvtTimelineRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineRenderer$$, dvt.$Obj$, "DvtTimelineRenderer");
$DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($timeline$$3$$) {
  $DvtTimelineRenderer$$.$_renderBackground$($timeline$$3$$);
  $DvtTimelineRenderer$$.$_renderScrollableCanvas$($timeline$$3$$);
  if($JSCompiler_StaticMethods_hasValidOptions$$($timeline$$3$$)) {
    $DvtTimelineRenderer$$.$_renderInnerCanvas$($timeline$$3$$, $timeline$$3$$.$_canvas$);
    $DvtTimelineRenderer$$.$_renderSeries$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    $DvtTimelineRenderer$$.$_renderSeriesLabels$($timeline$$3$$);
    $DvtTimelineRenderer$$.$_renderAxis$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    $timeline$$3$$.$_hasOverview$ ? $DvtTimelineRenderer$$.$_renderOverview$($timeline$$3$$) : $JSCompiler_StaticMethods_clearOverview$$($timeline$$3$$);
    if($timeline$$3$$.$_keyboardHandler$) {
      for(var $i$$635$$ = 0;$i$$635$$ < $timeline$$3$$.$_series$.length;$i$$635$$++) {
        var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$ = $timeline$$3$$.$_series$[$i$$635$$];
        if($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_items$ && 0 < $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_items$.length) {
          $timeline$$3$$.$EventManager$.$setFocusObj$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_items$[0]);
          break
        }
      }
    }
    $DvtTimelineRenderer$$.$_renderScrollHotspots$($timeline$$3$$);
    $DvtTimelineRenderer$$.$_renderZoomControls$($timeline$$3$$);
    $timeline$$3$$.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$($timeline$$3$$);
    $DvtTimeUtils$$.$supportsTouch$() && $timeline$$3$$.$_setAriaProperty$("flowto", $timeline$$3$$.$_series$[0].getId());
    for($i$$635$$ = 0;$i$$635$$ < $timeline$$3$$.$_series$.length;$i$$635$$++) {
      var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$ = $timeline$$3$$.$_series$[$i$$635$$], $context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$ = $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$getCtx$();
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_rmAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_rmAnimationElems$.length ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, $context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$ = new dvt.$ParallelPlayable$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, 
      new dvt.$AnimFadeOut$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_rmAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$Options$))), $context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_onRmAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_mvAnimator$ ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_mvAnimator$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_onMvAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_frAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_frAnimationElems$.length && ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, 
      $context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$ = new dvt.$ParallelPlayable$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, new dvt.$AnimFadeIn$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$Options$), 
      0)), $context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_4443_fadeInAnimator$$inline_4445_fadeOutAnimator$$inline_4444$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$.$_onAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_4442_series$$20$$))
    }
    dvt.$Agent$.$isEnvironmentBrowser$() && !$JSCompiler_StaticMethods_isAnimating$$($timeline$$3$$) && $JSCompiler_StaticMethods_showThenHideHotspots$$($timeline$$3$$)
  }else {
    $DvtTimelineRenderer$$.$_renderEmptyText$($timeline$$3$$)
  }
};
$DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($timeline$$4$$) {
  $timeline$$4$$.$_background$ ? ($timeline$$4$$.$_background$.$setClipPath$($JSCompiler_alias_NULL$$), $timeline$$4$$.$_background$.$setWidth$($timeline$$4$$.$_backgroundWidth$), $timeline$$4$$.$_background$.$setHeight$($timeline$$4$$.$_backgroundHeight$)) : $timeline$$4$$.$_background$ = new dvt.$Rect$($timeline$$4$$.$getCtx$(), 0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$, "bg");
  $timeline$$4$$.$_background$.$setCSSStyle$($timeline$$4$$.$_style$);
  $timeline$$4$$.$_background$.$setPixelHinting$();
  var $cp$$8$$ = new dvt.$ClipPath$;
  $cp$$8$$.$addRect$(0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$);
  $timeline$$4$$.$_background$.$setClipPath$($cp$$8$$);
  $timeline$$4$$.$_background$.getParent() != $timeline$$4$$ && $timeline$$4$$.$addChild$($timeline$$4$$.$_background$)
};
$DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($timeline$$5$$) {
  $timeline$$5$$.$_canvas$ || ($timeline$$5$$.$_canvas$ = new dvt.$Container$($timeline$$5$$.$getCtx$(), "canvas"), $timeline$$5$$.$addChild$($timeline$$5$$.$_canvas$))
};
$DvtTimelineRenderer$$.$_renderInnerCanvas$ = function $$DvtTimelineRenderer$$$$_renderInnerCanvas$$($timeline$$6$$, $container$$178$$) {
  $timeline$$6$$.$_innerCanvas$ ? $timeline$$6$$.$_innerCanvas$.$setClipPath$($JSCompiler_alias_NULL$$) : $timeline$$6$$.$_innerCanvas$ = new dvt.$Container$($timeline$$6$$.$getCtx$(), "iCanvas");
  var $cp$$9$$ = new dvt.$ClipPath$;
  $timeline$$6$$.$isVertical$() ? ($cp$$9$$.$addRect$($timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasSize$, $timeline$$6$$.$_canvasLength$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$ + $timeline$$6$$.$_startPos$)) : ($cp$$9$$.$addRect$($timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasLength$, $timeline$$6$$.$_canvasSize$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$ + 
  $timeline$$6$$.$_startPos$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$));
  $container$$178$$.$setClipPath$($cp$$9$$);
  $timeline$$6$$.$_innerCanvas$.getParent() != $container$$178$$ && $container$$178$$.$addChild$($timeline$$6$$.$_innerCanvas$)
};
$DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($timeline$$7$$, $container$$179$$) {
  if($timeline$$7$$.$_series$) {
    var $isRTL$$43$$ = dvt.$Agent$.$isRightToLeft$($timeline$$7$$.$getCtx$()), $seriesCount$$30$$ = $timeline$$7$$.$_series$.length, $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $seriesCount$$30$$);
    if(!$timeline$$7$$.$isVertical$() && 1 < $seriesCount$$30$$ && $timeline$$7$$.$_canvasSize$ % 2 != $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$ % 2) {
      var $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$ = $timeline$$7$$.$_timeAxis$, $contentSize$$inline_5771_i$$636$$ = $timeline$$7$$.$_timeAxis$.$_contentSize$ + 1;
      $contentSize$$inline_5771_i$$636$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$.$_contentSize$ = $contentSize$$inline_5771_i$$636$$);
      $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $seriesCount$$30$$)
    }
    $timeline$$7$$.$_seriesSize$ = ($timeline$$7$$.$_canvasSize$ - $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$) / $seriesCount$$30$$;
    for($contentSize$$inline_5771_i$$636$$ = 0;$contentSize$$inline_5771_i$$636$$ < $seriesCount$$30$$;$contentSize$$inline_5771_i$$636$$++) {
      var $series$$21$$ = $timeline$$7$$.$_series$[$contentSize$$inline_5771_i$$636$$];
      $series$$21$$.$setClipPath$($JSCompiler_alias_NULL$$);
      var $cp$$10$$ = new dvt.$ClipPath$;
      if($timeline$$7$$.$isVertical$()) {
        var $key$$70_posMatrix$$1$$ = $isRTL$$43$$ ? Math.abs($contentSize$$inline_5771_i$$636$$ - 1) : $contentSize$$inline_5771_i$$636$$;
        $isRTL$$43$$ && 1 == $timeline$$7$$.$_series$.length ? ($cp$$10$$.$addRect$($JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$, 0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$, 0)) : ($cp$$10$$.$addRect$($key$$70_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$), 
        0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$70_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$), 0));
        var $width$$132$$ = $timeline$$7$$.$_seriesSize$, $height$$113$$ = $timeline$$7$$.$_contentLength$
      }else {
        $cp$$10$$.$addRect$(0, $contentSize$$inline_5771_i$$636$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$), $timeline$$7$$.$_contentLength$, $timeline$$7$$.$_seriesSize$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $contentSize$$inline_5771_i$$636$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_5770_axisSize$$3$$)), $width$$132$$ = $timeline$$7$$.$_contentLength$, $height$$113$$ = 
        $timeline$$7$$.$_seriesSize$
      }
      $series$$21$$.$setClipPath$($cp$$10$$);
      $series$$21$$.$setMatrix$($key$$70_posMatrix$$1$$);
      $series$$21$$.getParent() != $container$$179$$ && $container$$179$$.$addChild$($series$$21$$);
      $series$$21$$.$render$($timeline$$7$$.$_seriesOptions$[$contentSize$$inline_5771_i$$636$$], $width$$132$$, $height$$113$$)
    }
  }
};
$DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($timeline$$8$$) {
  if($timeline$$8$$.$_series$) {
    var $context$$401$$ = $timeline$$8$$.$getCtx$(), $isRTL$$44$$ = dvt.$Agent$.$isRightToLeft$($context$$401$$);
    if($timeline$$8$$.$_seriesLabels$) {
      for(var $i$$637$$ = 0;$i$$637$$ < $timeline$$8$$.$_seriesLabels$.length;$i$$637$$++) {
        $timeline$$8$$.removeChild($timeline$$8$$.$_seriesLabels$[$i$$637$$])
      }
    }
    $timeline$$8$$.$_seriesLabels$ = [];
    for(var $seriesCount$$31$$ = $timeline$$8$$.$_series$.length, $labelSpacing$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $zoomControlSpacing$$ = 2 * dvt.$TransientButton$.$_DEFAULT_RADIUS$ + 6, $doubleLabelSpacing$$ = 2 * $labelSpacing$$, $i$$637$$ = 0;$i$$637$$ < $seriesCount$$31$$;$i$$637$$++) {
      var $series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $timeline$$8$$.$_series$[$i$$637$$], $seriesLabel$$2_seriesLabelElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getLabel$();
      if($seriesLabel$$2_seriesLabelElem$$ != $JSCompiler_alias_NULL$$) {
        var $posX$$4_seriesLabelStyle$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($timeline$$8$$.$Options$), $seriesLabel$$2_seriesLabelElem$$ = new dvt.$OutputText$($context$$401$$, $seriesLabel$$2_seriesLabelElem$$, 0, 0, "sl_s" + $i$$637$$);
        $seriesLabel$$2_seriesLabelElem$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $timeline$$8$$.$addChild$($seriesLabel$$2_seriesLabelElem$$);
        var $dim$$77_posMatrix$$2$$ = $seriesLabel$$2_seriesLabelElem$$.$getDimensions$();
        $timeline$$8$$.removeChild($seriesLabel$$2_seriesLabelElem$$);
        var $totalSpace$$2_width$$133$$ = $timeline$$8$$.$isVertical$() ? $timeline$$8$$.$_seriesSize$ : $timeline$$8$$.$_canvasLength$, $totalSpace$$2_width$$133$$ = Math.min($dim$$77_posMatrix$$2$$.$w$, $totalSpace$$2_width$$133$$ - ($i$$637$$ - 1) * -$zoomControlSpacing$$ - $doubleLabelSpacing$$), $seriesLabelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$2$$ = new dvt.$Rect$($context$$401$$, 0, 0, $totalSpace$$2_width$$133$$ + 2 * $seriesLabelPadding$$, $dim$$77_posMatrix$$2$$.$h$ + 
        2 * $seriesLabelPadding$$, "slb_s" + $i$$637$$);
        $backgroundRect$$2$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $backgroundRect$$2$$.$setCornerRadius$(3);
        if($timeline$$8$$.$isVertical$()) {
          $posX$$4_seriesLabelStyle$$ = $isRTL$$44$$ ? Math.abs($i$$637$$ - 1) * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$133$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + ($i$$637$$ - 1) * $zoomControlSpacing$$ : $i$$637$$ * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$133$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + ($i$$637$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $timeline$$8$$.$_startY$ + $labelSpacing$$
        }else {
          var $posX$$4_seriesLabelStyle$$ = $isRTL$$44$$ ? $timeline$$8$$.$_canvasLength$ - $totalSpace$$2_width$$133$$ - $labelSpacing$$ - ($i$$637$$ - 1) * -$zoomControlSpacing$$ : $timeline$$8$$.$_startX$ + $labelSpacing$$ + ($i$$637$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $i$$637$$ * ($timeline$$8$$.$_canvasSize$ - $dim$$77_posMatrix$$2$$.$h$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startY$
        }
        $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$, $posY$$3$$);
        $seriesLabel$$2_seriesLabelElem$$.$setMatrix$($dim$$77_posMatrix$$2$$);
        $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$ - $seriesLabelPadding$$, $posY$$3$$ - $seriesLabelPadding$$);
        $backgroundRect$$2$$.$setMatrix$($dim$$77_posMatrix$$2$$);
        $timeline$$8$$.$addChild$($backgroundRect$$2$$);
        dvt.$TextUtils$.$fitText$($seriesLabel$$2_seriesLabelElem$$, $totalSpace$$2_width$$133$$, Infinity, $timeline$$8$$);
        $timeline$$8$$.$_seriesLabels$.push($backgroundRect$$2$$);
        $timeline$$8$$.$_seriesLabels$.push($seriesLabel$$2_seriesLabelElem$$)
      }
      $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_isEmpty$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_emptyText$, $series$$22_seriesEmptyText_seriesEmptyTextElem$$ != $JSCompiler_alias_NULL$$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = new dvt.$OutputText$($context$$401$$, $series$$22_seriesEmptyText_seriesEmptyTextElem$$, 0, 0, "et_s" + $i$$637$$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$8$$.$Options$)), 
      $timeline$$8$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$77_posMatrix$$2$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getDimensions$(), $timeline$$8$$.removeChild($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, ($timeline$$8$$.$_canvasLength$ - $dim$$77_posMatrix$$2$$.$w$) / 2 + $timeline$$8$$.$_startX$, $i$$637$$ * ($timeline$$8$$.$_seriesSize$ + $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$8$$, 
      $seriesCount$$31$$)) + ($timeline$$8$$.$_seriesSize$ - $dim$$77_posMatrix$$2$$.$h$) / 2 + $timeline$$8$$.$_startY$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setMatrix$($dim$$77_posMatrix$$2$$), $timeline$$8$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $timeline$$8$$.$_seriesLabels$.push($series$$22_seriesEmptyText_seriesEmptyTextElem$$)))
    }
  }
};
$DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($timeline$$9$$, $container$$180$$) {
  var $context$$402$$ = $timeline$$9$$.$getCtx$(), $cp$$11_isRTL$$45$$ = dvt.$Agent$.$isRightToLeft$($context$$402$$), $axisStart_seriesCount$$32$$ = $timeline$$9$$.$_series$.length, $axisSize$$4$$ = $timeline$$9$$.$_timeAxis$.$getSize$(), $axisVisibleSize$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$9$$, $axisStart_seriesCount$$32$$), $axisStart_seriesCount$$32$$ = 1 == $axisStart_seriesCount$$32$$ ? $timeline$$9$$.$_canvasSize$ - $axisVisibleSize$$ : $timeline$$9$$.$_canvasSize$ / 
  $axisStart_seriesCount$$32$$ - $axisVisibleSize$$ / 2;
  $cp$$11_isRTL$$45$$ && ($timeline$$9$$.$isVertical$() && 1 == $timeline$$9$$.$_series$.length) && ($axisStart_seriesCount$$32$$ = 0);
  $timeline$$9$$.$_axis$ == $JSCompiler_alias_NULL$$ ? ($cp$$11_isRTL$$45$$ = new dvt.$ClipPath$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$ = new dvt.$Rect$($context$$402$$, $axisStart_seriesCount$$32$$, -$timeline$$9$$.$_axisBorderWidth$, $axisSize$$4$$, $timeline$$9$$.$_axisLength$, "axis"), $cp$$11_isRTL$$45$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$ = new dvt.$Rect$($context$$402$$, -$timeline$$9$$.$_axisBorderWidth$, 
  $axisStart_seriesCount$$32$$, $timeline$$9$$.$_axisLength$, $axisSize$$4$$, "axis"), $cp$$11_isRTL$$45$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), $timeline$$9$$.$_axis$.$setCSSStyle$($timeline$$9$$.$_axisStyle$), $timeline$$9$$.$_axis$.$setPixelHinting$(), $timeline$$9$$.$_axis$.$setClipPath$($cp$$11_isRTL$$45$$), $container$$180$$.$addChild$($timeline$$9$$.$_axis$)) : ($timeline$$9$$.$_axis$.$setClipPath$($JSCompiler_alias_NULL$$), $cp$$11_isRTL$$45$$ = 
  new dvt.$ClipPath$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$.$setX$($axisStart_seriesCount$$32$$), $timeline$$9$$.$_axis$.$setY$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setWidth$($axisSize$$4$$), $timeline$$9$$.$_axis$.$setHeight$($timeline$$9$$.$_axisLength$), $cp$$11_isRTL$$45$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$.$setX$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setY$($axisStart_seriesCount$$32$$), 
  $timeline$$9$$.$_axis$.$setWidth$($timeline$$9$$.$_axisLength$), $timeline$$9$$.$_axis$.$setHeight$($axisSize$$4$$), $cp$$11_isRTL$$45$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), $timeline$$9$$.$_axis$.$setClipPath$($cp$$11_isRTL$$45$$));
  $DvtTimelineRenderer$$.$_renderSeriesTicks$($timeline$$9$$, $axisStart_seriesCount$$32$$)
};
$DvtTimelineRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineRenderer$$$$_renderSeriesTicks$$($timeline$$10$$, $axisStartPos$$) {
  $timeline$$10$$.$_axis$.$removeChildren$();
  var $axisStart$$1_separatorStyle$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$());
  if($timeline$$10$$.$_axisStyleDefaults$) {
    var $separatorColor$$ = $timeline$$10$$.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$ && $axisStart$$1_separatorStyle$$.$parseInlineStyle$("color:" + $separatorColor$$ + ";")
  }
  $timeline$$10$$.$_separatorStroke$ = new dvt.$SolidStroke$($axisStart$$1_separatorStyle$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
  $axisStart$$1_separatorStyle$$ = $axisStartPos$$ + $timeline$$10$$.$_timeAxis$.$_borderWidth$;
  $DvtTimelineRenderer$$.$_renderTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_axis$, $timeline$$10$$.$_contentLength$, $axisStart$$1_separatorStyle$$ + $timeline$$10$$.$_timeAxis$.$_contentSize$, $axisStart$$1_separatorStyle$$, $axisStart$$1_separatorStyle$$);
  $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_innerCanvas$, $timeline$$10$$.$_contentLength$)
};
$DvtTimelineRenderer$$.$_renderTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderTimeAxis$$($timeline$$11$$, $dates$$2_startPos$$6$$, $endPos$$5_labels$$31$$, $container$$181_i$$638$$, $length$$21$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
  var $block_context$$403$$ = $timeline$$11$$.$getCtx$(), $isRTL$$46$$ = dvt.$Agent$.$isRightToLeft$($block_context$$403$$), $block_context$$403$$ = new dvt.$Container$($block_context$$403$$, "block_" + $dates$$2_startPos$$6$$ + "_" + $endPos$$5_labels$$31$$);
  $block_context$$403$$.$startPos$ = $dates$$2_startPos$$6$$;
  $block_context$$403$$.$endPos$ = $endPos$$5_labels$$31$$;
  $container$$181_i$$638$$.$addChild$($block_context$$403$$);
  $dates$$2_startPos$$6$$ = $timeline$$11$$.$_dates$[$timeline$$11$$.$_zoomLevelOrder$];
  $endPos$$5_labels$$31$$ = $timeline$$11$$.$_labels$[$timeline$$11$$.$_zoomLevelOrder$];
  for($container$$181_i$$638$$ = 0;$container$$181_i$$638$$ < $dates$$2_startPos$$6$$.length - 1;$container$$181_i$$638$$++) {
    var $date$$16$$ = $dates$$2_startPos$$6$$[$container$$181_i$$638$$], $next$$16_nextPos$$ = $dates$$2_startPos$$6$$[$container$$181_i$$638$$ + 1], $currentPos$$1$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $date$$16$$, $length$$21$$), $next$$16_nextPos$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $next$$16_nextPos$$, $length$$21$$), $maxLength$$2$$ = $next$$16_nextPos$$ - $currentPos$$1$$;
    0 != $currentPos$$1$$ && (($timeline$$11$$.$isVertical$() ? $timeline$$11$$.$addTick$($block_context$$403$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$1$$, $currentPos$$1$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $isRTL$$46$$ ? $timeline$$11$$.$addTick$($block_context$$403$$, $length$$21$$ - $currentPos$$1$$, $length$$21$$ - $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $timeline$$11$$.$addTick$($block_context$$403$$, 
    $currentPos$$1$$, $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$)).time = $date$$16$$);
    $timeline$$11$$.$isVertical$() ? $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$403$$, $endPos$$5_labels$$31$$[$container$$181_i$$638$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2 - 7, $axisEnd$$1$$ - $labelStart$$) : $isRTL$$46$$ ? $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$403$$, $endPos$$5_labels$$31$$[$container$$181_i$$638$$], $length$$21$$ - ($currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 
    2), $labelStart$$ + 2, $maxLength$$2$$) : $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$403$$, $endPos$$5_labels$$31$$[$container$$181_i$$638$$], $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2, $labelStart$$ + 2, $maxLength$$2$$)
  }
};
$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($timeline$$12$$, $currentDate$$1_startDate$$1_startPos$$7$$, $endPos$$6$$, $container$$182$$, $length$$22$$) {
  var $isRTL$$47$$ = dvt.$Agent$.$isRightToLeft$($timeline$$12$$.$getCtx$());
  if($timeline$$12$$.$_majorAxisLabels$) {
    for(var $i$$639_start$$36$$ = 0;$i$$639_start$$36$$ < $timeline$$12$$.$_majorAxisLabels$.length;$i$$639_start$$36$$++) {
      $container$$182$$.removeChild($timeline$$12$$.$_majorAxisLabels$[$i$$639_start$$36$$])
    }
  }
  $timeline$$12$$.$_majorAxisLabels$ = [];
  if($timeline$$12$$.$_seriesScale$) {
    var $i$$639_start$$36$$ = $timeline$$12$$.$_start$, $end$$27$$ = $timeline$$12$$.$_end$;
    $currentDate$$1_startDate$$1_startPos$$7$$ = $DvtTimeUtils$$.$getPositionDate$($i$$639_start$$36$$, $end$$27$$, $currentDate$$1_startDate$$1_startPos$$7$$, $length$$22$$);
    $currentDate$$1_startDate$$1_startPos$$7$$ = $timeline$$12$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$1_startDate$$1_startPos$$7$$);
    for(var $currentPos$$2$$ = $DvtTimeUtils$$.$getDatePosition$($i$$639_start$$36$$, $end$$27$$, $currentDate$$1_startDate$$1_startPos$$7$$, $length$$22$$);$currentPos$$2$$ < $endPos$$6$$;) {
      var $label$$105$$ = $JSCompiler_StaticMethods_formatDate$$($timeline$$12$$.$_seriesTimeAxis$, $currentDate$$1_startDate$$1_startPos$$7$$), $nextDate$$1$$ = $timeline$$12$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$1_startDate$$1_startPos$$7$$.getTime()), $next_time_pos$$2$$ = $DvtTimeUtils$$.$getDatePosition$($i$$639_start$$36$$, $end$$27$$, $nextDate$$1$$, $length$$22$$), $maxLength$$3$$ = $next_time_pos$$2$$ - $currentPos$$2$$, $time_pos$$2$$ = $currentPos$$2$$;
      ($isRTL$$47$$ ? $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$182$$, $timeline$$12$$.$_canvasSize$ - 5, $label$$105$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$addLabel$($container$$182$$, $length$$22$$ - 
      ($time_pos$$2$$ + 5), $label$$105$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$182$$, 5, $label$$105$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), 
      "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$addLabel$($container$$182$$, $time_pos$$2$$ + 5, $label$$105$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), 
      $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$)).time = $currentDate$$1_startDate$$1_startPos$$7$$.getTime();
      $currentDate$$1_startDate$$1_startPos$$7$$ = $nextDate$$1$$;
      $currentPos$$2$$ = $next_time_pos$$2$$
    }
  }
};
$DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($timeline$$13$$) {
  var $JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ = $timeline$$13$$.$getCtx$(), $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$);
  if($timeline$$13$$.$_overviewCanvas$ == $JSCompiler_alias_NULL$$) {
    var $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ = $JSCompiler_alias_TRUE$$;
    $timeline$$13$$.$_overviewCanvas$ = new dvt.$Container$($JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$, "oCanvas")
  }else {
    $timeline$$13$$.$_overviewCanvas$.$removeChildren$()
  }
  var $borderWidth$$17_height$$114$$ = $timeline$$13$$.$_style$.$getBorderWidth$(), $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ = $borderWidth$$17_height$$114$$ / 2;
  if($timeline$$13$$.$isVertical$()) {
    var $width$$134$$ = $timeline$$13$$.$_overviewSize$, $borderWidth$$17_height$$114$$ = $timeline$$13$$.$Height$ - $borderWidth$$17_height$$114$$;
    $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ ? $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$) : $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($timeline$$13$$.$Width$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$);
    $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$)
  }else {
    $width$$134$$ = $timeline$$13$$.$Width$ - $borderWidth$$17_height$$114$$, $borderWidth$$17_height$$114$$ = $timeline$$13$$.$_overviewSize$, $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($timeline$$13$$.$Height$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$), $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$)
  }
  $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ && $timeline$$13$$.$addChild$($timeline$$13$$.$_overviewCanvas$);
  $timeline$$13$$.$_overview$ = new dvt.$TimelineOverview$($JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$, $timeline$$13$$.$HandleEvent$, $timeline$$13$$);
  $timeline$$13$$.$_overviewCanvas$.$addChild$($timeline$$13$$.$_overview$);
  var $JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ = $timeline$$13$$.$_isVertical$ ? "" : '_ds\x3d"square" _dsx\x3d"1.3d" _dsy\x3d"0.9d" ', $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$($timeline$$13$$.$Options$), $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ = $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$($timeline$$13$$.$Options$), 
  $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$($timeline$$13$$.$Options$), $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$($timeline$$13$$.$Options$), $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ = $DvtTimelineStyleUtils$$.$getReferenceObjectColor$($timeline$$13$$.$Options$), 
  $JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ = '\x3ctimelineOverview renstart\x3d"' + $timeline$$13$$.$_viewStartTime$ + '" start\x3d"' + $timeline$$13$$.$_start$ + '" end\x3d"' + $timeline$$13$$.$_end$ + '" width\x3d"' + $timeline$$13$$.$_contentLength$ + '" orn\x3d"' + ($timeline$$13$$.$_isVertical$ ? "vertical" : "horizontal") + ($timeline$$13$$.$_referenceObjects$ && 0 < $timeline$$13$$.$_referenceObjects$.length && $timeline$$13$$.$_referenceObjects$[0] ? 
  '" ocd\x3d"' + $timeline$$13$$.$_referenceObjects$[0].getTime() : "") + '" _hbi\x3d"' + ($timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$_resources$.overviewHandleVert + '" _hw\x3d"15" _hh\x3d"3"' : $timeline$$13$$.$_resources$.overviewHandleHor + '" _hw\x3d"3" _hh\x3d"15"') + ' ovp\x3d"below" selmode\x3d"' + $timeline$$13$$.$_selectionMode$ + '" rtl\x3d"' + $timeline$$13$$.$isRTL$() + '" sid\x3d"ts1" _bts\x3d"none" _btc\x3d"#4f4f4f" _fc\x3d"#aadd77" ' + $JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ + 
  '_do\x3d"0" _wbc\x3d"' + $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ + '" _wbts\x3d"solid" _wbrs\x3d"solid" _wbbs\x3d"solid" _wbls\x3d"solid" _wbtc\x3d"' + $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ + '" _wbrc\x3d"' + $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ + '" _wbbc\x3d"' + $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ + '" _wblc\x3d"' + $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ + 
  '" _hfc\x3d"' + $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ + '" _obc\x3d"' + $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ + '" _ctic\x3d"' + $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ + '" _ls\x3d"' + $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ + '" _tic\x3d"#BCC7D2" _tabc\x3d"#D9DFE3" _tabo\x3d"0" _bs\x3d"solid" _bc\x3d"#648BAF" _bw\x3d"1px" _bof\x3d"0px" _dbs\x3d"solid" _dbc\x3d"#648BAF" _dbw\x3d"1px" _hbs\x3d"solid" _hbc\x3d"#85bbe7" _hbw\x3d"2px" _hbof\x3d"0px" _hgc\x3d"#ebeced" _hgo\x3d"1" _hdbs\x3d"solid" _hdbc\x3d"#85bbe7" _hdbw\x3d"2px" _sbs\x3d"solid" _sbc\x3d"#000000" _sbw\x3d"2px" _sbof\x3d"0px" _sbo\x3d"1" _sdbs\x3d"solid" _sdbc\x3d"#000000" _sdbw\x3d"2px" _asbs\x3d"solid" _asbc\x3d"#000000" _asbw\x3d"2px" _asbof\x3d"0px" _asbo\x3d"1" _asgc\x3d"#e4f0fa" _asgo\x3d"1" _asdbs\x3d"solid" _asdbc\x3d"#000000" _asdbw\x3d"2px" _aoc\x3d"off"\x3e', 
  $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = "\x3cticks\x3e";
  if($timeline$$13$$.$_seriesTimeAxis$) {
    for(var $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ = $timeline$$13$$.$_start$, $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ = $timeline$$13$$.$_end$, $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ = $timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$Height$ : $timeline$$13$$.$Width$, $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ = 
    $DvtTimeUtils$$.$getPositionDate$($addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$, $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$, $timeline$$13$$.$_fetchStartPos$, $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$), $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ = $timeline$$13$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$), 
    $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ = $DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$, $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$, $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$, $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$);$currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ < 
    $timeline$$13$$.$_fetchEndPos$;) {
      var $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ = $JSCompiler_StaticMethods_formatDate$$($timeline$$13$$.$_seriesTimeAxis$, $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$), $endTime$$inline_5792_nextDate$$inline_5782$$ = $timeline$$13$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$.getTime()), $next_time_pos$$inline_5783$$ = 
      $DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$, $end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$, $endTime$$inline_5792_nextDate$$inline_5782$$, $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$), $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ + 
      ('\x3ctick time\x3d"' + $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$.getTime() + '" label\x3d"' + $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ + '"/\x3e'), $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ = $endTime$$inline_5792_nextDate$$inline_5782$$, $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ = 
      $next_time_pos$$inline_5783$$
    }
  }
  $JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ += $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ + "\x3c/ticks\x3e";
  if($timeline$$13$$.$_series$) {
    $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = "\x3cmarkers\x3e";
    $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$ = $timeline$$13$$.$_series$.length;
    for($end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ = 0;$end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$ < $addOverviewCanvas_labelStyle$$inline_4450_seriesCount$$inline_5787_start$$inline_5775$$;$end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$++) {
      $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$ = $timeline$$13$$.$_series$[$end$$inline_5776_halfBorderWidth$$2_i$$inline_5788_windowBackgroundColor$$inline_4451$$].$_items$;
      for($currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ = 0;$currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$ < $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$.length;$currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$++) {
        $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ = $items$$inline_5789_length$$inline_5777_windowBorderColor$$inline_4452$$[$currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$];
        $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += '\x3cti rk\x3d"' + $currentDate$$inline_5779_j$$inline_5790_referenceObjectColor$$inline_4453_startDate$$inline_5778$$;
        $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += '" tid\x3d"' + $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$.getId();
        $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += '" t\x3d"' + $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$.$_startTime$;
        if($endTime$$inline_5792_nextDate$$inline_5782$$ = $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$.$_endTime$) {
          $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += '" et\x3d"' + $endTime$$inline_5792_nextDate$$inline_5782$$, ($currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$ = $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$.$_durationFillColor$) && ($JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += 
          '" dfc\x3d"' + $currentPos$$inline_5780_durationFillColor$$inline_5793_item$$inline_5791_label$$inline_5781$$)
        }
        $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += '" _sd\x3d"true"/\x3e'
      }
    }
    $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ += "\x3c/markers\x3e"
  }else {
    $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ = $JSCompiler_alias_VOID$$
  }
  $timeline$$13$$.$_overview$.$render$($JSCompiler_temp_const$$4710_JSCompiler_temp_const$$4721_context$$405_sizing$$inline_4448$$ + $JSCompiler_inline_result$$4722_backgroundColor$$inline_4449_isRTL$$48_overviewMarkers$$inline_5786_xml$$inline_5774$$ + "\x3c/timelineOverview\x3e", $width$$134$$, $borderWidth$$17_height$$114$$)
};
$DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($timeline$$14$$) {
  if($timeline$$14$$.$_series$) {
    var $context$$406$$ = $timeline$$14$$.$getCtx$(), $isRTL$$49$$ = dvt.$Agent$.$isRightToLeft$($context$$406$$), $seriesCount$$33$$ = $timeline$$14$$.$_series$.length, $axisSize$$6$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$14$$, $seriesCount$$33$$);
    if($timeline$$14$$.$_scrollHotspotsContainers$) {
      for(var $i$$640$$ = 0;$i$$640$$ < $timeline$$14$$.$_scrollHotspotsContainers$.length;$i$$640$$++) {
        $timeline$$14$$.$_scrollHotspotsContainers$[$i$$640$$].$removeChildren$()
      }
    }else {
      var $addHotspotsContainers$$ = $JSCompiler_alias_TRUE$$;
      $timeline$$14$$.$_scrollHotspotsContainers$ = []
    }
    $timeline$$14$$.$_scrollHotspots$ = [];
    for(var $hotspotPadding$$ = $DvtTimelineStyleUtils$$.$getHotspotPadding$(), $hotspotWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotWidth$(), $hotspotHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotHeight$(), $hotspotArrowWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $hotspotArrowHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $hotspotBackgroundColor$$ = $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), 
    $i$$640$$ = 0;$i$$640$$ < $seriesCount$$33$$;$i$$640$$++) {
      if($addHotspotsContainers$$) {
        var $scrollHotspots$$ = new dvt.$Container$($context$$406$$, "hotspots_s" + $i$$640$$);
        $timeline$$14$$.$addChild$($scrollHotspots$$);
        $timeline$$14$$.$_scrollHotspotsContainers$.push($scrollHotspots$$)
      }else {
        $scrollHotspots$$ = $timeline$$14$$.$_scrollHotspotsContainers$[$i$$640$$]
      }
      if($timeline$$14$$.$isVertical$()) {
        var $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$640$$ - 1) : $i$$640$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$14$$.$_startY$ + 
        $timeline$$14$$.$_canvasLength$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = 
        $timeline$$14$$.$_resources$.scrollDown
      }else {
        var $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + $timeline$$14$$.$_canvasLength$ - $hotspotWidth$$ - $hotspotPadding$$, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $i$$640$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotHeight$$) / 2, $bottomY$$2_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + 
        $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight
      }
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.$Rect$($context$$406$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "lhs");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.$Image$($context$$406$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "lhs_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.$Rect$($context$$406$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "rhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = new dvt.$Image$($context$$406$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "rhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$isVertical$() ? ($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$640$$ - 1) : $i$$640$$, $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ + 1) * $timeline$$14$$.$_seriesSize$ + 
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * $axisSize$$6$$ - $hotspotWidth$$ - $hotspotPadding$$, $bottomY$$2_forwardY$$ = $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + ($timeline$$14$$.$_canvasLength$ - $hotspotHeight$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBottomY_arrowForwardY$$ = 
      $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + ($timeline$$14$$.$_canvasLength$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $i$$640$$ * ($timeline$$14$$.$_seriesSize$ + 
      $axisSize$$6$$) + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$14$$.$_startY$ + ($i$$640$$ + 1) * $timeline$$14$$.$_seriesSize$ + $i$$640$$ * $axisSize$$6$$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + 
      $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollDown);
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.$Rect$($context$$406$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "ths");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.$Image$($context$$406$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "ths_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.$Rect$($context$$406$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "bhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = new dvt.$Image$($context$$406$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "bhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$)
    }
  }
};
$DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($timeline$$15$$) {
  var $contentLength_context$$407$$ = $timeline$$15$$.$getCtx$(), $isRTL$$50$$ = dvt.$Agent$.$isRightToLeft$($contentLength_context$$407$$), $upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomIn), $overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomIn_h), $downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomIn_a), 
  $disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomIn_d);
  $timeline$$15$$.$zoomin$ == $JSCompiler_alias_NULL$$ ? ($timeline$$15$$.$zoomin$ = new dvt.$TransientButton$($contentLength_context$$407$$, $upState$$17$$, $overState$$14$$, $downState$$14$$, $disabledState$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomInClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomin$, $timeline$$15$$.$zoomin$)) : ($timeline$$15$$.$zoomin$.$setUpState$($upState$$17$$), $timeline$$15$$.$zoomin$.$setOverState$($overState$$14$$), 
  $timeline$$15$$.$zoomin$.$setDownState$($downState$$14$$), $timeline$$15$$.$zoomin$.$setDisabledState$($disabledState$$));
  $upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomOut);
  $overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomOut_h);
  $downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomOut_a);
  $disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$407$$, $timeline$$15$$.$_resources$.zoomOut_d);
  $timeline$$15$$.$zoomout$ == $JSCompiler_alias_NULL$$ ? ($timeline$$15$$.$zoomout$ = new dvt.$TransientButton$($contentLength_context$$407$$, $upState$$17$$, $overState$$14$$, $downState$$14$$, $disabledState$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomOutClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomout$, $timeline$$15$$.$zoomout$)) : ($timeline$$15$$.$zoomout$.$setUpState$($upState$$17$$), $timeline$$15$$.$zoomout$.$setOverState$($overState$$14$$), 
  $timeline$$15$$.$zoomout$.$setDownState$($downState$$14$$), $timeline$$15$$.$zoomout$.$setDisabledState$($disabledState$$));
  $timeline$$15$$.$zoomin$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", $JSCompiler_alias_NULL$$));
  $timeline$$15$$.$zoomout$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", $JSCompiler_alias_NULL$$));
  $timeline$$15$$.$zoomin$.$hide$();
  $timeline$$15$$.$zoomout$.$hide$();
  $DvtTimeUtils$$.$supportsTouch$() && (dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", $JSCompiler_alias_NULL$$)), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "aria-label", 
  dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", $JSCompiler_alias_NULL$$)));
  $isRTL$$50$$ ? ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44)) : ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_startX$ + 11), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_startX$ + 11));
  $timeline$$15$$.$zoomin$.$setTranslateY$($timeline$$15$$.$_startY$ + 11);
  $timeline$$15$$.$zoomout$.$setTranslateY$($timeline$$15$$.$_startY$ + 48);
  $timeline$$15$$.$zoomin$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomin$);
  $timeline$$15$$.$zoomout$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomout$);
  $contentLength_context$$407$$ = $timeline$$15$$.$_contentLength$;
  $contentLength_context$$407$$ >= $timeline$$15$$.$_maxContentLength$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$15$$, $JSCompiler_alias_TRUE$$);
  $timeline$$15$$.$_canvasLength$ >= $contentLength_context$$407$$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$15$$, $JSCompiler_alias_FALSE$$)
};
$DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($timeline$$16$$) {
  var $emptyTextStr$$4$$ = $timeline$$16$$.$Options$.series ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", $JSCompiler_alias_NULL$$) : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$);
  $timeline$$16$$.$_canvas$ && $timeline$$16$$.$_canvas$.$removeChildren$();
  $JSCompiler_StaticMethods_clearOverview$$($timeline$$16$$);
  dvt.$TextUtils$.$renderEmptyText$($timeline$$16$$.$_canvas$, $emptyTextStr$$4$$, new dvt.$Rectangle$(0, 0, $timeline$$16$$.$_backgroundWidth$, $timeline$$16$$.$_backgroundHeight$), $timeline$$16$$.$EventManager$, $DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$16$$.$Options$))
};
var $DvtTimelineStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineStyleUtils$$, dvt.$Obj$, "DvtTimelineStyleUtils");
$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = 0.6;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = 0.3;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($cssStyle$$33_item$$55_style$$99$$) {
  var $descriptionStyle$$ = $cssStyle$$33_item$$55_style$$99$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
  if($cssStyle$$33_item$$55_style$$99$$ = $cssStyle$$33_item$$55_style$$99$$.$getStyle$()) {
    $cssStyle$$33_item$$55_style$$99$$ = new dvt.$CSSStyle$($cssStyle$$33_item$$55_style$$99$$), $descriptionStyle$$.$parseInlineStyle$($cssStyle$$33_item$$55_style$$99$$)
  }
  return $descriptionStyle$$
};
$DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($cssStyle$$34_item$$56_style$$100$$) {
  var $titleStyle$$3$$ = $cssStyle$$34_item$$56_style$$100$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
  if($cssStyle$$34_item$$56_style$$100$$ = $cssStyle$$34_item$$56_style$$100$$.$getStyle$()) {
    $cssStyle$$34_item$$56_style$$100$$ = new dvt.$CSSStyle$($cssStyle$$34_item$$56_style$$100$$), $titleStyle$$3$$.$parseInlineStyle$($cssStyle$$34_item$$56_style$$100$$)
  }
  return $titleStyle$$3$$
};
$DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($options$$272$$) {
  return $options$$272$$.styleDefaults.referenceObject.color
};
$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($options$$273$$) {
  return $options$$273$$.styleDefaults.series.labelStyle
};
$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$
};
$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$
};
$DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($options$$274$$) {
  return $options$$274$$.styleDefaults.series.emptyTextStyle
};
$DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$
};
$DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$
};
$DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($item$$57$$) {
  var $fillColor$$7_style$$101$$ = $item$$57$$.$getStyle$();
  return $fillColor$$7_style$$101$$ && ($fillColor$$7_style$$101$$ = (new dvt.$CSSStyle$($fillColor$$7_style$$101$$)).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)) ? $fillColor$$7_style$$101$$ : $item$$57$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor
};
$DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($item$$58$$) {
  var $strokeColor$$6_style$$102$$ = $item$$58$$.$getStyle$();
  return $strokeColor$$6_style$$102$$ && ($strokeColor$$6_style$$102$$ = (new dvt.$CSSStyle$($strokeColor$$6_style$$102$$)).$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) ? $strokeColor$$6_style$$102$$ : $item$$58$$.$_series$.$getOptions$().styleDefaults.item.borderColor
};
$DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($item$$59$$) {
  var $hoverDefault$$ = $item$$59$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
  return $hoverDefault$$ ? $hoverDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$59$$)
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($item$$60$$) {
  var $hoverDefault$$1$$ = $item$$60$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
  return $hoverDefault$$1$$ ? $hoverDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$60$$)
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($item$$61$$) {
  var $selectedDefault$$ = $item$$61$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
  return $selectedDefault$$ ? $selectedDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$61$$)
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($item$$62$$) {
  var $selectedDefault$$1$$ = $item$$62$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
  return $selectedDefault$$1$$ ? $selectedDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$62$$)
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$
};
$DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($options$$281$$) {
  return $options$$281$$.styleDefaults.series.colors
};
$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$
};
$DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$
};
$DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$
};
$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$
};
$DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$
};
$DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$
};
$DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$
};
$DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getAxisStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$
};
$DvtTimelineStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisLabelStyle$$($options$$282$$) {
  return $options$$282$$.styleDefaults.minorAxis.labelStyle
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($options$$283$$) {
  return $options$$283$$.styleDefaults.overview.window.backgroundColor
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($options$$284$$) {
  return $options$$284$$.styleDefaults.overview.window.borderColor
};
$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($options$$285$$) {
  return $options$$285$$.styleDefaults.overview.backgroundColor
};
$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($options$$286$$) {
  return $options$$286$$.styleDefaults.overview.labelStyle
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($options$$287$$) {
  return $options$$287$$.styleDefaults.majorAxis.labelStyle
};
$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$
};
$DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$
};
$DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$
};
$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$
};
$DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($options$$288$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($options$$288$$.styleDefaults.animationDuration) / 1E3
};
function $DvtTimelineSeries$$($context$$408$$, $callback$$131$$, $callbackObj$$93$$) {
  this.Init($context$$408$$, $callback$$131$$, $callbackObj$$93$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeries$$, $DvtTimeComponent$$, "DvtTimelineSeries");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeries$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$409$$, $callback$$132$$, $callbackObj$$94$$) {
  $DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$409$$, $callback$$132$$, $callbackObj$$94$$);
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
  this.$_itemListeners$ = []
};
$JSCompiler_prototypeAlias$$.$_onRmAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRmAnimationEnd$$() {
  for(var $i$$641$$ = 0;$i$$641$$ < this.$_rmAnimationElems$.length;$i$$641$$++) {
    var $elem$$8$$ = this.$_rmAnimationElems$[$i$$641$$];
    $elem$$8$$.getParent().removeChild($elem$$8$$)
  }
  this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this)) : this.$_onMvAnimationEnd$()
};
$JSCompiler_prototypeAlias$$.$_onMvAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMvAnimationEnd$$() {
  if(this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
    var $fadeInAnimator$$1$$ = new dvt.$ParallelPlayable$(this.$getCtx$(), new dvt.$AnimFadeIn$(this.$getCtx$(), this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
    $fadeInAnimator$$1$$.play();
    dvt.$Playable$.$appendOnEnd$($fadeInAnimator$$1$$, this.$_onAnimationEnd$, this)
  }else {
    this.$_onAnimationEnd$()
  }
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_isAnimating$ = $JSCompiler_alias_FALSE$$;
  dvt.$Agent$.$isEnvironmentBrowser$() && $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_callbackObj$)
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$289_orientation$$5_props$$7$$, $desc$$28_width$$135$$, $height$$115$$) {
  $options$$289_orientation$$5_props$$7$$ && this.$SetOptions$($options$$289_orientation$$5_props$$7$$);
  this.$_isInitialRender$ = this.$Width$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$;
  this.$Width$ = $desc$$28_width$$135$$;
  this.$Height$ = $height$$115$$;
  ($options$$289_orientation$$5_props$$7$$ = this.$Options$.orientation) && $options$$289_orientation$$5_props$$7$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? (this.$_allowUpdates$ = this.$_isVertical$ == $JSCompiler_alias_FALSE$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$, this.$_isVertical$ = $JSCompiler_alias_TRUE$$) : (this.$_allowUpdates$ = this.$_isVertical$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$, this.$_isVertical$ = $JSCompiler_alias_FALSE$$);
  this.$Options$ && ($options$$289_orientation$$5_props$$7$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($options$$289_orientation$$5_props$$7$$));
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$115$$, this.$_maxOverflowValue$ = $desc$$28_width$$135$$, this.$_length$ = $height$$115$$, this.$_size$ = $desc$$28_width$$135$$) : (this.$_fetchEndPos$ = $desc$$28_width$$135$$, this.$_maxOverflowValue$ = $height$$115$$, this.$_length$ = $desc$$28_width$$135$$, this.$_size$ = $height$$115$$);
  this.$_isInverted$ = this.$Options$.inverted;
  this.$_maxDurationSize$ = this.$_colorCount$ = 0;
  $DvtTimelineSeriesRenderer$$.$renderSeries$(this, $desc$$28_width$$135$$, $height$$115$$);
  $DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && this.$_setAriaProperty$("flowto", "_bt_" + this.$_items$[0].getId());
  if($desc$$28_width$$135$$ = this.$GetComponentDescription$()) {
    dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "role", "group"), dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "aria-label", dvt.$StringUtils$.$processAriaLabel$($desc$$28_width$$135$$))
  }
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", $seriesDescArray$$)
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesStyle$());
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = $DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if(this.$_seriesStyleDefaults$) {
    var $style$$103$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$103$$ && this.$_style$.$parseInlineStyle$("background-color:" + $style$$103$$ + ";")
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this)
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = $JSCompiler_set$$("$Options$");
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$291$$) {
  this.$_parser$ = new $DvtTimelineSeriesParser$$;
  return this.$_parser$.parse($options$$291$$, this.$_items$)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$8$$) {
  this.$_items$ && (this.$_oldItems$ = this.$_items$);
  this.$_isEmpty$ = (this.$_items$ = $props$$8$$.$items$) && 0 < this.$_items$.length ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$;
  this.$_isIRAnimationEnabled$ = $props$$8$$.$isIRAnimationEnabled$;
  this.$_isDCAnimationEnabled$ = $props$$8$$.$isDCAnimationEnabled$;
  this.$_label$ = $props$$8$$.label;
  this.$_timeAxis$ = $props$$8$$.$timeAxis$;
  this.$_emptyText$ = $props$$8$$.$emptyText$;
  this.$_emptyText$ == $JSCompiler_alias_NULL$$ && (this.$_emptyText$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$));
  this.$_isTopToBottom$ = $props$$8$$.$isTopToBottom$;
  this.$_isRandomItemLayout$ = $props$$8$$.$isRandomItemLayout$;
  $DvtTimelineSeries$$.$superclass$.$_applyParsedProperties$.call(this, $props$$8$$)
};
function $JSCompiler_StaticMethods_calculateSpacing$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$63_itemHeight$$3$$, $index$$195_yChanged$$) {
  if(!($JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$ == $JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$.length)) {
    var $maxOverflowValue_top$$10$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$, $bottom$$10_y$$181$$ = $item$$63_itemHeight$$3$$.$_spacing$;
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isRandomItemLayout$) {
      return $bottom$$10_y$$181$$ == $JSCompiler_alias_NULL$$ && ($item$$63_itemHeight$$3$$ = $item$$63_itemHeight$$3$$.getHeight(), $bottom$$10_y$$181$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$, $maxOverflowValue_top$$10$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ - $item$$63_itemHeight$$3$$ - $bottom$$10_y$$181$$, 0 > $maxOverflowValue_top$$10$$ && ($maxOverflowValue_top$$10$$ = 0), $bottom$$10_y$$181$$ = Math.round(Math.random() * $maxOverflowValue_top$$10$$) + 
      $bottom$$10_y$$181$$, $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ < $bottom$$10_y$$181$$ + $item$$63_itemHeight$$3$$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $bottom$$10_y$$181$$ + $item$$63_itemHeight$$3$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$())), $bottom$$10_y$$181$$
    }
    $bottom$$10_y$$181$$ == $JSCompiler_alias_NULL$$ && ($bottom$$10_y$$181$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for($i$$642$$ = 0;$i$$642$$ < $index$$195_yChanged$$;$i$$642$$++) {
        $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$642$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $maxOverflowValue_top$$10$$ < $bottom$$10_y$$181$$ + $currWidth$$ && ($maxOverflowValue_top$$10$$ = $bottom$$10_y$$181$$ + $currWidth$$)
      }
    }else {
      for(var $j$$99_x$$209$$ = $item$$63_itemHeight$$3$$.$_loc$, $width$$137$$ = $item$$63_itemHeight$$3$$.getWidth() + 10, $hOffset$$2$$ = $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overlappingItems$$ = [], $i$$642$$ = 0;$i$$642$$ < $index$$195_yChanged$$;$i$$642$$++) {
        var $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$642$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $currX$$17$$ = $currItem_currY$$21$$.$_loc$;
        ($j$$99_x$$209$$ >= $currX$$17$$ && $j$$99_x$$209$$ <= $currX$$17$$ + $currWidth$$ || $currX$$17$$ >= $j$$99_x$$209$$ && $currX$$17$$ <= $j$$99_x$$209$$ + $width$$137$$) && $overlappingItems$$.push($currItem_currY$$21$$)
      }
      for($i$$642$$ = 0;$i$$642$$ < $overlappingItems$$.length;$i$$642$$++) {
        $index$$195_yChanged$$ = $JSCompiler_alias_FALSE$$;
        for($j$$99_x$$209$$ = 0;$j$$99_x$$209$$ < $overlappingItems$$.length;$j$$99_x$$209$$++) {
          var $currItem_currY$$21$$ = $overlappingItems$$[$j$$99_x$$209$$], $currHeight$$ = $currItem_currY$$21$$.getHeight(), $currItem_currY$$21$$ = $currItem_currY$$21$$.$_spacing$;
          if($bottom$$10_y$$181$$ >= $currItem_currY$$21$$ && $bottom$$10_y$$181$$ <= $currItem_currY$$21$$ + $currHeight$$) {
            $bottom$$10_y$$181$$ = $currItem_currY$$21$$ + $currHeight$$ + $hOffset$$2$$;
            $item$$63_itemHeight$$3$$.$_spacing$ = $bottom$$10_y$$181$$;
            $index$$195_yChanged$$ = $JSCompiler_alias_TRUE$$;
            break
          }
        }
        if(!$index$$195_yChanged$$) {
          break
        }
      }
      $maxOverflowValue_top$$10$$ < $bottom$$10_y$$181$$ + $currHeight$$ && ($maxOverflowValue_top$$10$$ = $bottom$$10_y$$181$$ + $currHeight$$)
    }
    $maxOverflowValue_top$$10$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue_top$$10$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
    return $bottom$$10_y$$181$$
  }
}
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$() {
  for(var $i$$644$$ = 0;$i$$644$$ < this.$_items$.length;$i$$644$$++) {
    var $node$$299$$ = this.$_items$[$i$$644$$], $JSCompiler_temp_const$$301_startTime$$9$$ = $node$$299$$.$_startTime$, $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ = $node$$299$$.$_endTime$;
    if($JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ && $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ != $JSCompiler_temp_const$$301_startTime$$9$$) {
      $JSCompiler_temp_const$$301_startTime$$9$$ = $node$$299$$;
      a: {
        var $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ = $node$$299$$, $index$$inline_4467_yChanged$$inline_4476$$ = $i$$644$$;
        if(!(this.$_items$ == $JSCompiler_alias_NULL$$ || 0 == this.$_items$.length)) {
          var $j$$inline_4477_startTime$$inline_4468$$ = $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$.$_startTime$, $endTime$$inline_4469_y$$inline_4470$$ = $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$.$_endTime$;
          if($endTime$$inline_4469_y$$inline_4470$$ && $endTime$$inline_4469_y$$inline_4470$$ != $j$$inline_4477_startTime$$inline_4468$$) {
            $endTime$$inline_4469_y$$inline_4470$$ = $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$.$_durationLevel$;
            $endTime$$inline_4469_y$$inline_4470$$ == $JSCompiler_alias_NULL$$ && ($endTime$$inline_4469_y$$inline_4470$$ = 1);
            for(var $overlappingItems$$inline_4471$$ = [], $i$$inline_4472$$ = 0;$i$$inline_4472$$ < $index$$inline_4467_yChanged$$inline_4476$$;$i$$inline_4472$$++) {
              var $currItem$$inline_4473_currY$$inline_4478$$ = this.$_items$[$i$$inline_4472$$], $currStartTime$$inline_4474$$ = $currItem$$inline_4473_currY$$inline_4478$$.$_startTime$, $currEndTime$$inline_4475$$ = $currItem$$inline_4473_currY$$inline_4478$$.$_endTime$;
              $currEndTime$$inline_4475$$ && $currEndTime$$inline_4475$$ != $currStartTime$$inline_4474$$ && $j$$inline_4477_startTime$$inline_4468$$ >= $currStartTime$$inline_4474$$ && $j$$inline_4477_startTime$$inline_4468$$ <= $currEndTime$$inline_4475$$ && $overlappingItems$$inline_4471$$.push($currItem$$inline_4473_currY$$inline_4478$$)
            }
            for($i$$inline_4472$$ = 0;$i$$inline_4472$$ < $overlappingItems$$inline_4471$$.length;$i$$inline_4472$$++) {
              $index$$inline_4467_yChanged$$inline_4476$$ = $JSCompiler_alias_FALSE$$;
              for($j$$inline_4477_startTime$$inline_4468$$ = 0;$j$$inline_4477_startTime$$inline_4468$$ < $overlappingItems$$inline_4471$$.length;$j$$inline_4477_startTime$$inline_4468$$++) {
                if($currItem$$inline_4473_currY$$inline_4478$$ = $overlappingItems$$inline_4471$$[$j$$inline_4477_startTime$$inline_4468$$], $currItem$$inline_4473_currY$$inline_4478$$ = $currItem$$inline_4473_currY$$inline_4478$$.$_durationLevel$, $endTime$$inline_4469_y$$inline_4470$$ == $currItem$$inline_4473_currY$$inline_4478$$) {
                  $endTime$$inline_4469_y$$inline_4470$$ = $currItem$$inline_4473_currY$$inline_4478$$ + 1;
                  $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$.$_durationLevel$ = $endTime$$inline_4469_y$$inline_4470$$;
                  $index$$inline_4467_yChanged$$inline_4476$$ = $JSCompiler_alias_TRUE$$;
                  break
                }
              }
              if(!$index$$inline_4467_yChanged$$inline_4476$$) {
                break
              }
            }
            $endTime$$inline_4469_y$$inline_4470$$ > this.$_maxDurationSize$ && (this.$_maxDurationSize$ = $endTime$$inline_4469_y$$inline_4470$$);
            $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ = $endTime$$inline_4469_y$$inline_4470$$;
            break a
          }
        }
        $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$ = $JSCompiler_alias_VOID$$
      }
      $JSCompiler_temp_const$$301_startTime$$9$$.$_durationLevel$ = $JSCompiler_inline_result$$302_endTime$$10_item$$inline_4466$$;
      $node$$299$$.$_durationSize$ = 22 + 10 * $node$$299$$.$_durationLevel$ - 5;
      $node$$299$$.$_durationFillColor$ == $JSCompiler_alias_NULL$$ && ($node$$299$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && (this.$_colorCount$ = 0))
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLabel$ = $JSCompiler_get$$("$_label$");
$JSCompiler_prototypeAlias$$.$isTopToBottom$ = $JSCompiler_get$$("$_isTopToBottom$");
function $DvtTimelineSeriesItem$$($context$$411$$, $id$$204$$) {
  this.Init($context$$411$$, $id$$204$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItem$$, dvt.$Container$, "DvtTimelineSeriesItem");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$412$$, $id$$205$$) {
  $DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$412$$, "g", $id$$205$$)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$1$$) {
  this.$_isSelected$ != $isSelected$$1$$ && ((this.$_isSelected$ = $isSelected$$1$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$1$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = $JSCompiler_alias_TRUE$$, this.$_isSelected$ && $isFocused$$1$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"))
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$2$$) {
  this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($bubbleFillColor_state$$97$$) {
  var $feeler$$1_item$$68$$ = this.$_node$, $duration$$34_itemElem$$ = $feeler$$1_item$$68$$.$_displayable$;
  if($duration$$34_itemElem$$ != $JSCompiler_alias_NULL$$) {
    var $bubble$$ = $duration$$34_itemElem$$.$getChildAt$(0), $bubbleInner$$ = $bubble$$.$getChildAt$(0), $duration$$34_itemElem$$ = $feeler$$1_item$$68$$.$_durationBar$;
    if("asel" == $bubbleFillColor_state$$97$$) {
      $bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$68$$);
      var $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$68$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()
    }else {
      "sel" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$68$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$68$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : "hl" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = 
      $DvtTimelineStyleUtils$$.$getItemHoverFillColor$($feeler$$1_item$$68$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($feeler$$1_item$$68$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemFillColor$($feeler$$1_item$$68$$), $bubbleStroke_bubbleStrokeColor$$ = 
      $DvtTimelineStyleUtils$$.$getItemStrokeColor$($feeler$$1_item$$68$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$())
    }
    var $bubbleInnerStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $bubbleStroke_bubbleStrokeColor$$ = new dvt.$SolidStroke$($bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = new dvt.$SolidStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth$$);
    $bubble$$.$setSolidFill$($bubbleFillColor_state$$97$$);
    $bubble$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner$$.$setStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$);
    ($feeler$$1_item$$68$$ = $feeler$$1_item$$68$$.$_feeler$) && $feeler$$1_item$$68$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $duration$$34_itemElem$$ && $duration$$34_itemElem$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$)
  }
};
var $DvtTimelineSeriesItemRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItemRenderer$$, dvt.$Obj$, "DvtTimelineSeriesItemRenderer");
$DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($item$$69$$, $series$$23$$, $container$$183$$, $overflowOffset$$, $frAnimationElems$$, $mvAnimator$$) {
  $item$$69$$.$_content$ ? ($DvtTimelineSeriesItemRenderer$$.$_renderBubble$($item$$69$$, $series$$23$$, $container$$183$$, $frAnimationElems$$), $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$69$$, $series$$23$$, $overflowOffset$$, $JSCompiler_alias_NULL$$)) : ($series$$23$$.$_hasMvAnimations$ = $JSCompiler_alias_TRUE$$, $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$69$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$));
  $series$$23$$.$isVertical$() || ($item$$69$$.$_feeler$ && $series$$23$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($item$$69$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$) : $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($item$$69$$, $series$$23$$, $container$$183$$.$feelers$, $overflowOffset$$, $frAnimationElems$$))
};
$DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($item$$70$$, $series$$24$$, $index$$197$$) {
  $item$$70$$.$_displayable$ && $series$$24$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($item$$70$$, $series$$24$$, $index$$197$$) : $DvtTimelineSeriesItemRenderer$$.$_createBubble$($item$$70$$, $series$$24$$, $index$$197$$)
};
$DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($item$$71$$, $series$$25_spacing$$2$$, $index$$198$$) {
  var $content$$8$$ = $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($item$$71$$, $series$$25_spacing$$2$$);
  $series$$25_spacing$$2$$.$addChild$($content$$8$$);
  var $dim$$78$$ = $content$$8$$.$getDimensions$();
  $series$$25_spacing$$2$$.removeChild($content$$8$$);
  $item$$71$$.$setWidth$($dim$$78$$.$w$ + 10);
  $item$$71$$.$setHeight$($dim$$78$$.$h$ + 10);
  $item$$71$$.$_content$ = $content$$8$$;
  $series$$25_spacing$$2$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$25_spacing$$2$$, $item$$71$$, $index$$198$$);
  $item$$71$$.$_spacing$ = $series$$25_spacing$$2$$
};
$DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($item$$72$$, $series$$26$$, $container$$184$$, $animationElems$$) {
  var $bubbleContainer_context$$413$$ = $series$$26$$.$getCtx$(), $bubbleArray_isRTL$$51$$ = dvt.$Agent$.$isRightToLeft$($bubbleContainer_context$$413$$), $id$$206$$ = $item$$72$$.getId(), $content$$9$$ = $item$$72$$.$_content$;
  $item$$72$$.$_content$ = $JSCompiler_alias_NULL$$;
  var $bubble$$1_nodeWidth$$4$$ = $item$$72$$.getWidth(), $innerBubbleArray_nodeHeight$$7$$ = $item$$72$$.getHeight(), $bubbleId_innerBubble$$ = "_bubble_" + $id$$206$$;
  if($series$$26$$.$isVertical$()) {
    var $offset$$34$$ = $innerBubbleArray_nodeHeight$$7$$ / 2, $startOffset$$3$$ = $offset$$34$$ - 6, $endOffset$$3$$ = $offset$$34$$ + 6;
    !$bubbleArray_isRTL$$51$$ && $series$$26$$.$_isInverted$ || $bubbleArray_isRTL$$51$$ && !$series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $startOffset$$3$$, -6, $offset$$34$$, 0, $endOffset$$3$$, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $startOffset$$3$$, -4, $offset$$34$$, 2, $endOffset$$3$$, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 
    $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 6, $offset$$34$$, $bubble$$1_nodeWidth$$4$$, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 
    2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 4, $offset$$34$$, $bubble$$1_nodeWidth$$4$$ - 2, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }else {
    $offset$$34$$ = $bubbleArray_isRTL$$51$$ ? $bubble$$1_nodeWidth$$4$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $offset$$34$$ - 6, $endOffset$$3$$ = $offset$$34$$ + 6, $series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, $startOffset$$3$$, 0, $offset$$34$$, -6, $endOffset$$3$$, 0, $bubble$$1_nodeWidth$$4$$, 0, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, 0, $innerBubbleArray_nodeHeight$$7$$, 0, 
    0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, $startOffset$$3$$, 2, $offset$$34$$, -4, $endOffset$$3$$, 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $offset$$34$$, $innerBubbleArray_nodeHeight$$7$$ + 6, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 
    $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $offset$$34$$, $innerBubbleArray_nodeHeight$$7$$ + 4, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }
  $bubble$$1_nodeWidth$$4$$ = new dvt.$Polygon$($bubbleContainer_context$$413$$, $bubbleArray_isRTL$$51$$, $bubbleId_innerBubble$$);
  $bubbleId_innerBubble$$ = new dvt.$Polygon$($bubbleContainer_context$$413$$, $innerBubbleArray_nodeHeight$$7$$, $bubbleId_innerBubble$$ + "_i");
  $bubbleId_innerBubble$$.$setSolidFill$($DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
  $content$$9$$.$setTranslate$(5, 5);
  $bubble$$1_nodeWidth$$4$$.$addChild$($bubbleId_innerBubble$$);
  $bubble$$1_nodeWidth$$4$$.$addChild$($content$$9$$);
  $bubbleContainer_context$$413$$ = new $DvtTimelineSeriesItem$$($bubbleContainer_context$$413$$, "_bt_" + $id$$206$$);
  $animationElems$$ && ($bubbleContainer_context$$413$$.$setAlpha$(0), $animationElems$$.push($bubbleContainer_context$$413$$));
  $bubbleContainer_context$$413$$.$addChild$($bubble$$1_nodeWidth$$4$$);
  $DvtTimeUtils$$.$supportsTouch$() && dvt.$ToolkitUtils$.$setAttrNullNS$($bubbleContainer_context$$413$$.$_elem$, "id", $bubbleContainer_context$$413$$.$_id$);
  $bubbleContainer_context$$413$$.$_node$ = $item$$72$$;
  $item$$72$$.$_displayable$ = $bubbleContainer_context$$413$$;
  $bubbleContainer_context$$413$$.$applyState$("en");
  0 <= $item$$72$$.$_loc$ && $container$$184$$.$addChild$($bubbleContainer_context$$413$$);
  $bubbleContainer_context$$413$$.$setAriaRole$("group");
  $item$$72$$.$_updateAriaLabel$();
  $series$$26$$.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_context$$413$$, $item$$72$$)
};
$DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($bubbleContainer$$1_item$$73$$, $series$$27$$, $overflowOffset$$1$$, $animator$$136$$) {
  var $isRTL$$52_transX$$6$$ = dvt.$Agent$.$isRightToLeft$($series$$27$$.$getCtx$()), $loc$$1$$ = $bubbleContainer$$1_item$$73$$.$_loc$, $nodeWidth$$5$$ = $bubbleContainer$$1_item$$73$$.getWidth(), $nodeHeight$$8_transY$$ = $bubbleContainer$$1_item$$73$$.getHeight(), $spacing$$3$$ = $bubbleContainer$$1_item$$73$$.$_spacing$;
  $bubbleContainer$$1_item$$73$$ = $bubbleContainer$$1_item$$73$$.$_displayable$;
  $series$$27$$.$isVertical$() ? ($nodeHeight$$8_transY$$ = $loc$$1$$ - $nodeHeight$$8_transY$$ / 2, $isRTL$$52_transX$$6$$ && $series$$27$$.$_isInverted$ || !$isRTL$$52_transX$$6$$ && !$series$$27$$.$_isInverted$ ? $isRTL$$52_transX$$6$$ = $series$$27$$.$_size$ - ($nodeWidth$$5$$ + $series$$27$$.$_initialSpacing$) + $overflowOffset$$1$$ : ($isRTL$$52_transX$$6$$ = $series$$27$$.$_initialSpacing$, $overflowOffset$$1$$ = 0)) : ($isRTL$$52_transX$$6$$ = $isRTL$$52_transX$$6$$ ? $series$$27$$.$_length$ - 
  $loc$$1$$ - $nodeWidth$$5$$ + $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $loc$$1$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $series$$27$$.$_isInverted$ ? ($nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? $spacing$$3$$ : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$ + $series$$27$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$1$$ = 0) : $nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? 
  $spacing$$3$$ - $series$$27$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$);
  $animator$$136$$ ? ($series$$27$$.$isVertical$() ? $bubbleContainer$$1_item$$73$$.$setTranslateX$($bubbleContainer$$1_item$$73$$.$getTranslateX$() + $series$$27$$.$_canvasOffsetX$ + $overflowOffset$$1$$) : $bubbleContainer$$1_item$$73$$.$setTranslateY$($bubbleContainer$$1_item$$73$$.$getTranslateY$() + $series$$27$$.$_canvasOffsetY$ + $overflowOffset$$1$$), $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$73$$, $bubbleContainer$$1_item$$73$$.$getTranslateX$, $bubbleContainer$$1_item$$73$$.$setTranslateX$, 
  $isRTL$$52_transX$$6$$), $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$73$$, $bubbleContainer$$1_item$$73$$.$getTranslateY$, $bubbleContainer$$1_item$$73$$.$setTranslateY$, $nodeHeight$$8_transY$$)) : $bubbleContainer$$1_item$$73$$.$setTranslate$($isRTL$$52_transX$$6$$, $nodeHeight$$8_transY$$)
};
$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($item$$74$$, $series$$28$$) {
  var $context$$415$$ = $series$$28$$.$getCtx$(), $isRTL$$53$$ = dvt.$Agent$.$isRightToLeft$($context$$415$$), $title$$21_width$$138$$ = $item$$74$$.$getTitle$(), $desc$$29_descText$$ = $item$$74$$.$_desc$, $thumbImage_thumbnail$$ = $item$$74$$.$_thumbnail$, $container$$185$$ = new dvt.$Container$($context$$415$$), $offsetX$$9$$ = 0, $offsetY$$6$$ = 0;
  if($isRTL$$53$$) {
    $title$$21_width$$138$$ && ($titleText$$ = new dvt.$OutputText$($context$$415$$, $title$$21_width$$138$$, 0, $offsetY$$6$$), $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$74$$)), $offsetX$$9$$ = $titleText$$.$measureDimensions$().$w$ + 2, $offsetY$$6$$ = 15, $container$$185$$.$addChild$($titleText$$)), $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$415$$, $desc$$29_descText$$, 0, $offsetY$$6$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$74$$)), 
    $title$$21_width$$138$$ = $desc$$29_descText$$.$measureDimensions$().$w$ + 2, 0 != $offsetX$$9$$ && $title$$21_width$$138$$ != $offsetX$$9$$ ? $title$$21_width$$138$$ > $offsetX$$9$$ ? ($titleText$$.$setX$($title$$21_width$$138$$ - $offsetX$$9$$), $offsetX$$9$$ = $title$$21_width$$138$$) : $desc$$29_descText$$.$setX$($offsetX$$9$$ - $title$$21_width$$138$$) : $offsetX$$9$$ = $title$$21_width$$138$$, $container$$185$$.$addChild$($desc$$29_descText$$)), $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = 
    new dvt.$Image$($context$$415$$, $thumbImage_thumbnail$$, $offsetX$$9$$, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $container$$185$$.$addChild$($thumbImage_thumbnail$$))
  }else {
    $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = new dvt.$Image$($context$$415$$, $thumbImage_thumbnail$$, 0, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $container$$185$$.$addChild$($thumbImage_thumbnail$$), $offsetX$$9$$ = $DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
    if($title$$21_width$$138$$) {
      var $titleText$$ = new dvt.$OutputText$($context$$415$$, $title$$21_width$$138$$, $offsetX$$9$$, $offsetY$$6$$);
      $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$74$$));
      $offsetY$$6$$ = 15;
      $container$$185$$.$addChild$($titleText$$)
    }
    $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$415$$, $desc$$29_descText$$, $offsetX$$9$$, $offsetY$$6$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$74$$)), $container$$185$$.$addChild$($desc$$29_descText$$))
  }
  return $container$$185$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($item$$75$$, $series$$29_spacing$$4$$, $index$$199$$) {
  $series$$29_spacing$$4$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$29_spacing$$4$$, $item$$75$$, $index$$199$$);
  $item$$75$$.$_spacing$ = $series$$29_spacing$$4$$
};
$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($item$$76$$, $feelerX$$1_series$$30$$, $container$$186_feelerWidth_stroke$$100$$, $feelerHeight_overflowOffset$$2$$, $animationElems$$1_feelerColor$$) {
  var $context$$416_feeler$$2$$ = $feelerX$$1_series$$30$$.$getCtx$(), $isRTL$$54$$ = dvt.$Agent$.$isRightToLeft$($context$$416_feeler$$2$$), $feelerId_id$$207$$ = $item$$76$$.getId(), $loc$$2$$ = $item$$76$$.$_loc$, $spacing$$5$$ = $item$$76$$.$_spacing$, $feelerId_id$$207$$ = "_feeler_" + $feelerId_id$$207$$;
  if($feelerX$$1_series$$30$$.$_isInverted$) {
    $feelerY$$ = $item$$76$$.$_durationSize$, $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ - $item$$76$$.getHeight() + $feelerHeight_overflowOffset$$2$$ + $feelerX$$1_series$$30$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$()
  }else {
    var $feelerY$$ = $feelerX$$1_series$$30$$.$Height$ + $feelerHeight_overflowOffset$$2$$ - $item$$76$$.$_durationSize$;
    $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ - $feelerX$$1_series$$30$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $item$$76$$.getHeight() : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ + $feelerHeight_overflowOffset$$2$$
  }
  $feelerX$$1_series$$30$$ = $isRTL$$54$$ ? $feelerX$$1_series$$30$$.$_length$ - $loc$$2$$ : $loc$$2$$;
  $context$$416_feeler$$2$$ = new dvt.$Line$($context$$416_feeler$$2$$, $feelerX$$1_series$$30$$, $feelerY$$, $feelerX$$1_series$$30$$, $feelerHeight_overflowOffset$$2$$, $feelerId_id$$207$$);
  $animationElems$$1_feelerColor$$ && ($context$$416_feeler$$2$$.$setAlpha$(0), $animationElems$$1_feelerColor$$.push($context$$416_feeler$$2$$));
  $container$$186_feelerWidth_stroke$$100$$.$addChild$($context$$416_feeler$$2$$);
  $container$$186_feelerWidth_stroke$$100$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$1_feelerColor$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$76$$);
  $container$$186_feelerWidth_stroke$$100$$ = new dvt.$SolidStroke$($animationElems$$1_feelerColor$$, 1, $container$$186_feelerWidth_stroke$$100$$);
  $context$$416_feeler$$2$$.$setStroke$($container$$186_feelerWidth_stroke$$100$$);
  $context$$416_feeler$$2$$.$_node$ = $item$$76$$;
  $item$$76$$.$_feeler$ = $context$$416_feeler$$2$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($feelerX$$2_item$$77$$, $series$$31$$, $overflowOffset$$3$$, $animator$$137$$) {
  if($series$$31$$.$isVertical$()) {
    $feelerX$$2_item$$77$$.$_feeler$ = $JSCompiler_alias_NULL$$
  }else {
    var $isRTL$$55$$ = dvt.$Agent$.$isRightToLeft$($series$$31$$.$getCtx$()), $feeler$$3$$ = $feelerX$$2_item$$77$$.$_feeler$;
    if($series$$31$$.$_isInverted$) {
      $feelerY$$1$$ = $feelerX$$2_item$$77$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$77$$.$_spacing$ : $series$$31$$.$Height$ - $feelerX$$2_item$$77$$.$_spacing$ - $feelerX$$2_item$$77$$.getHeight() + $overflowOffset$$3$$ + $series$$31$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$3$$ = 0
    }else {
      var $feelerY$$1$$ = $series$$31$$.$Height$ + $overflowOffset$$3$$ - $feelerX$$2_item$$77$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$77$$.$_spacing$ - $series$$31$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $feelerX$$2_item$$77$$.getHeight() : $series$$31$$.$Height$ - $feelerX$$2_item$$77$$.$_spacing$ + $overflowOffset$$3$$
    }
    $feelerX$$2_item$$77$$ = $isRTL$$55$$ ? $series$$31$$.$_length$ - $feelerX$$2_item$$77$$.$_loc$ : $feelerX$$2_item$$77$$.$_loc$;
    $animator$$137$$ ? ($feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $feeler$$3$$.$setY2$($feeler$$3$$.$getY2$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getX1$, $feeler$$3$$.$setX1$, $feelerX$$2_item$$77$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY1$, $feeler$$3$$.$setY1$, $feelerY$$1$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $feeler$$3$$, $feeler$$3$$.$getX2$, $feeler$$3$$.$setX2$, $feelerX$$2_item$$77$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY2$, $feeler$$3$$.$setY2$, $feelerHeight$$1$$)) : ($feeler$$3$$.$setX1$($feelerX$$2_item$$77$$), $feeler$$3$$.$setY1$($feelerY$$1$$), $feeler$$3$$.$setX2$($feelerX$$2_item$$77$$), $feeler$$3$$.$setY2$($feelerHeight$$1$$))
  }
};
$DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($item$$78$$, $series$$32$$, $container$$187$$, $overflowOffset$$4$$, $frAnimationElems$$1$$, $mvAnimator$$1$$) {
  $item$$78$$.$_durationBar$ ? $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($item$$78$$, $series$$32$$, $overflowOffset$$4$$, $mvAnimator$$1$$) : $DvtTimelineSeriesItemRenderer$$.$_renderDuration$($item$$78$$, $series$$32$$, $container$$187$$, $overflowOffset$$4$$, $frAnimationElems$$1$$)
};
$DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($item$$79$$, $series$$33$$, $container$$188$$, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$, $animationElems$$2_feelerColor$$1$$) {
  var $context$$418_duration$$35$$ = $series$$33$$.$getCtx$(), $isRTL$$56$$ = dvt.$Agent$.$isRightToLeft$($context$$418_duration$$35$$), $endLoc_endTime$$12_width$$139$$ = $item$$79$$.$_endTime$, $loc$$3_transX$$7$$ = $DvtTimeUtils$$.$getDatePosition$($series$$33$$.$_start$, $series$$33$$.$_end$, $item$$79$$.$_startTime$, $series$$33$$.$_length$), $durationId$$ = "_duration_" + $item$$79$$.getId(), $durationSize$$ = 22 + 10 * $item$$79$$.$_durationLevel$, $endLoc_endTime$$12_width$$139$$ = $DvtTimeUtils$$.$getDatePosition$($series$$33$$.$_start$, 
  $series$$33$$.$_end$, $endLoc_endTime$$12_width$$139$$, $series$$33$$.$_length$);
  $series$$33$$.$isVertical$() ? (!$isRTL$$56$$ && !$series$$33$$.$_isInverted$ || $isRTL$$56$$ && $series$$33$$.$_isInverted$ ? $context$$418_duration$$35$$ = new dvt.$Rect$($context$$418_duration$$35$$, $series$$33$$.$_size$ - $durationSize$$ + 5, $loc$$3_transX$$7$$, $durationSize$$, $endLoc_endTime$$12_width$$139$$ - $loc$$3_transX$$7$$, $durationId$$) : ($context$$418_duration$$35$$ = new dvt.$Rect$($context$$418_duration$$35$$, -5, $loc$$3_transX$$7$$, $durationSize$$, $endLoc_endTime$$12_width$$139$$ - 
  $loc$$3_transX$$7$$, $durationId$$), $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = 0), $context$$418_duration$$35$$.$setTranslateX$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$), $context$$418_duration$$35$$.$setY$($loc$$3_transX$$7$$), $context$$418_duration$$35$$.$setWidth$($durationSize$$), $context$$418_duration$$35$$.$setHeight$($endLoc_endTime$$12_width$$139$$ - $loc$$3_transX$$7$$)) : ($endLoc_endTime$$12_width$$139$$ -= $loc$$3_transX$$7$$, $loc$$3_transX$$7$$ = $isRTL$$56$$ ? 
  $series$$33$$.$_length$ - $loc$$3_transX$$7$$ - $endLoc_endTime$$12_width$$139$$ : $loc$$3_transX$$7$$, $series$$33$$.$_isInverted$ ? ($context$$418_duration$$35$$ = new dvt.$Rect$($context$$418_duration$$35$$, $loc$$3_transX$$7$$, -5, $endLoc_endTime$$12_width$$139$$, $durationSize$$, $durationId$$), $context$$418_duration$$35$$.$setTranslateY$(0)) : ($context$$418_duration$$35$$ = new dvt.$Rect$($context$$418_duration$$35$$, $loc$$3_transX$$7$$, $series$$33$$.$_size$ - $durationSize$$ + 5, $endLoc_endTime$$12_width$$139$$, 
  $durationSize$$, $durationId$$), $context$$418_duration$$35$$.$setTranslateY$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$)));
  $animationElems$$2_feelerColor$$1$$ && ($context$$418_duration$$35$$.$setAlpha$(0), $animationElems$$2_feelerColor$$1$$.push($context$$418_duration$$35$$));
  $context$$418_duration$$35$$.$setCornerRadius$(5);
  $context$$418_duration$$35$$.$setSolidFill$($item$$79$$.$_durationFillColor$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$2_feelerColor$$1$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$79$$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = new dvt.$SolidStroke$($animationElems$$2_feelerColor$$1$$, 1, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$418_duration$$35$$.$setStroke$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$418_duration$$35$$.$_node$ = $item$$79$$;
  $series$$33$$.$_callbackObj$.$EventManager$.$associate$($context$$418_duration$$35$$, $item$$79$$);
  $container$$188$$.$addChild$($context$$418_duration$$35$$);
  $item$$79$$.$_durationBar$ = $context$$418_duration$$35$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($durationTransY_item$$80$$, $series$$34$$, $overflowOffset$$6$$, $animator$$138$$) {
  var $durationX_isRTL$$57$$ = dvt.$Agent$.$isRightToLeft$($series$$34$$.$getCtx$()), $duration$$36$$ = $durationTransY_item$$80$$.$_durationBar$;
  if($duration$$36$$ != $JSCompiler_alias_NULL$$) {
    var $durationHeight_loc$$4$$ = $DvtTimeUtils$$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$80$$.$_startTime$, $series$$34$$.$_length$), $durationSize$$1$$ = 22 + 10 * $durationTransY_item$$80$$.$_durationLevel$, $endLoc$$1_width$$140$$ = $DvtTimeUtils$$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$80$$.$_endTime$, $series$$34$$.$_length$);
    if($series$$34$$.$isVertical$()) {
      $durationTransY_item$$80$$ = 0;
      !$durationX_isRTL$$57$$ && !$series$$34$$.$_isInverted$ || $durationX_isRTL$$57$$ && $series$$34$$.$_isInverted$ ? $durationX_isRTL$$57$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5 : ($durationX_isRTL$$57$$ = -5, $overflowOffset$$6$$ = 0);
      var $durationTransX$$ = $overflowOffset$$6$$, $durationY$$ = $durationHeight_loc$$4$$, $durationWidth$$ = $durationSize$$1$$, $durationHeight_loc$$4$$ = $endLoc$$1_width$$140$$ - $durationHeight_loc$$4$$
    }else {
      $durationTransX$$ = 0, $endLoc$$1_width$$140$$ -= $durationHeight_loc$$4$$, $durationX_isRTL$$57$$ = $durationX_isRTL$$57$$ ? $series$$34$$.$_length$ - $durationHeight_loc$$4$$ - $endLoc$$1_width$$140$$ : $durationHeight_loc$$4$$, $series$$34$$.$_isInverted$ ? ($durationTransY_item$$80$$ = $overflowOffset$$6$$ = 0, $durationY$$ = -5) : ($durationTransY_item$$80$$ = $overflowOffset$$6$$, $durationY$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5), $durationWidth$$ = $endLoc$$1_width$$140$$, 
      $durationHeight_loc$$4$$ = $durationSize$$1$$
    }
    $animator$$138$$ ? ($series$$34$$.$isVertical$() ? $duration$$36$$.$setTranslateX$($duration$$36$$.$getTranslateX$() + $series$$34$$.$_canvasOffsetX$ + $overflowOffset$$6$$) : $duration$$36$$.$setTranslateY$($duration$$36$$.$getTranslateY$() + $series$$34$$.$_canvasOffsetY$ + $overflowOffset$$6$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getTranslateX$, $duration$$36$$.$setTranslateX$, $durationTransX$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $duration$$36$$, $duration$$36$$.$getTranslateY$, $duration$$36$$.$setTranslateY$, $durationTransY_item$$80$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getX$, $duration$$36$$.$setX$, $durationX_isRTL$$57$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getY$, $duration$$36$$.$setY$, $durationY$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.getWidth, $duration$$36$$.$setWidth$, 
    $durationWidth$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.getHeight, $duration$$36$$.$setHeight$, $durationHeight_loc$$4$$)) : ($duration$$36$$.$setTranslateX$($durationTransX$$), $duration$$36$$.$setTranslateY$($durationTransY_item$$80$$), $duration$$36$$.$setX$($durationX_isRTL$$57$$), $duration$$36$$.$setY$($durationY$$), $duration$$36$$.$setWidth$($durationWidth$$), $duration$$36$$.$setHeight$($durationHeight_loc$$4$$))
  }
};
function $DvtTimelineSeriesNode$$($timeline$$17$$, $series$$35$$, $props$$9$$) {
  this.Init($timeline$$17$$, $series$$35$$, $props$$9$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesNode$$, dvt.$Obj$, "DvtTimelineSeriesNode");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$18$$, $seriesIndex$$128$$, $props$$10$$) {
  this.$_timeline$ = $timeline$$18$$;
  this.$_seriesIndex$ = $seriesIndex$$128$$;
  this.$_series$ = $timeline$$18$$.$_series$[$seriesIndex$$128$$];
  this.$_id$ = $props$$10$$.id;
  this.$_rowKey$ = $props$$10$$.$rowKey$;
  this.$_startTime$ = parseInt($props$$10$$.startTime);
  $props$$10$$.$endTime$ && (this.$_endTime$ = parseInt($props$$10$$.$endTime$));
  this.$_title$ = $props$$10$$.title;
  this.$_desc$ = $props$$10$$.$desc$;
  this.$_thumbnail$ = $props$$10$$.$thumbnail$;
  this.$_style$ = $props$$10$$.style;
  this.$_data$ = $props$$10$$.data;
  this.$_action$ = $props$$10$$.action;
  this.$_durationFillColor$ = $props$$10$$.$durationFillColor$;
  this.$_durationSize$ = 0;
  this.$_spbs$ = $props$$10$$.$spbs$
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getSeries$ = $JSCompiler_get$$("$_series$");
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
$JSCompiler_prototypeAlias$$.$getRowKey$ = $JSCompiler_get$$("$_rowKey$");
$JSCompiler_prototypeAlias$$.$getTitle$ = $JSCompiler_get$$("$_title$");
$JSCompiler_prototypeAlias$$.$getStyle$ = $JSCompiler_get$$("$_style$");
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_endTime$ != $JSCompiler_alias_NULL$$ ? "Start Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$
};
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$_w$");
$JSCompiler_prototypeAlias$$.$setWidth$ = $JSCompiler_set$$("$_w$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$_h$");
$JSCompiler_prototypeAlias$$.$setHeight$ = $JSCompiler_set$$("$_h$");
$JSCompiler_prototypeAlias$$.$getAction$ = $JSCompiler_get$$("$_action$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$544$$) {
  var $keyboardHandler$$9_navigableItems$$7$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if($event$$544$$.type == dvt.$MouseEvent$.$CLICK$ || $keyboardHandler$$9_navigableItems$$7$$.$isMultiSelectEvent$($event$$544$$)) {
    return this
  }
  if($keyboardHandler$$9_navigableItems$$7$$.$isNavigationEvent$($event$$544$$)) {
    for(var $keyboardHandler$$9_navigableItems$$7$$ = [], $i$$647$$ = 0;$i$$647$$ < this.$_timeline$.$_series$.length;$i$$647$$++) {
      $keyboardHandler$$9_navigableItems$$7$$.push(this.$_timeline$.$_series$[$i$$647$$].$_items$)
    }
    return $DvtTimelineKeyboardHandler$getNextNavigable$$(this, $event$$544$$, $keyboardHandler$$9_navigableItems$$7$$)
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$35$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$35$$)
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this.$_timeline$, this)
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getLabel$(), $states$$17$$)
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = $JSCompiler_set$$("$_isSelectable$");
$JSCompiler_prototypeAlias$$.$isSelectable$ = $JSCompiler_get$$("$_isSelectable$");
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$);
  this.$_updateAriaLabel$();
  if(this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$) {
    if($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ = this.getId(), $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$, $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$);
      $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$, $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$)
    }else {
      if($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$ = this.$_timeline$.$_overview$, $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ = this.getId(), $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$, 
      $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$), $drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
        for(var $index$$inline_5800$$ = -1, $i$$inline_5801$$ = 0;$i$$inline_5801$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$.$_selectedMarkers$.length;$i$$inline_5801$$++) {
          if($drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$.$_selectedMarkers$[$i$$inline_5801$$]) {
            $index$$inline_5800$$ = $i$$inline_5801$$;
            break
          }
        }
        -1 != $index$$inline_5800$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$.$applyState$($drawable$$inline_4512_drawable$$inline_4516_itemId$$inline_4511_itemId$$inline_4515$$, dvt.$TimelineOverview$.$ENABLED_STATE$), $JSCompiler_StaticMethods_selSelectItem$self$$inline_4510_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4514_isSelected$$2$$.$_selectedMarkers$.splice($index$$inline_5800$$, 1))
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4518_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_highlightItem$self$$inline_4518_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_4518_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4520_itemId$$inline_4519$$ = this.getId(), $drawable$$inline_4520_itemId$$inline_4519$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4518_ignoreOverview$$, $drawable$$inline_4520_itemId$$inline_4519$$);
    $drawable$$inline_4520_itemId$$inline_4519$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4518_ignoreOverview$$, $drawable$$inline_4520_itemId$$inline_4519$$)
  }
  if(this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) {
    this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$)
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4522_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_4522_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_4522_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4524_itemId$$inline_4523$$ = this.getId(), $drawable$$inline_4524_itemId$$inline_4523$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4522_ignoreOverview$$1$$, $drawable$$inline_4524_itemId$$inline_4523$$);
    $drawable$$inline_4524_itemId$$inline_4523$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4522_ignoreOverview$$1$$, $drawable$$inline_4524_itemId$$inline_4523$$)
  }
  (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) && (this.$_index$ && !this.$_isSelected$) && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$)
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_spbs$)) {
    for(var $spbs$$7$$ = this.$_spbs$, $si$$1$$ = 0;$si$$1$$ < $spbs$$7$$.length;$si$$1$$++) {
      this.$_showPopupBehaviors$.push(new dvt.$ShowPopupBehavior$($spbs$$7$$[$si$$1$$].popupId, $spbs$$7$$[$si$$1$$].triggerType, $spbs$$7$$[$si$$1$$].alignId, $spbs$$7$$[$si$$1$$].align))
    }
  }
  return this.$_showPopupBehaviors$
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  dvt.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
function $DvtTimelineSeriesParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesParser$$, dvt.$Obj$, "DvtTimelineSeriesParser");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesParser$$.prototype;
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$292$$, $oldItems$$1$$) {
  var $itemArray$$inline_4528$$ = [], $ret$$66_seriesItems$$inline_4529$$ = $options$$292$$.items;
  if($ret$$66_seriesItems$$inline_4529$$) {
    for(var $j$$inline_4530$$ = 0;$j$$inline_4530$$ < $ret$$66_seriesItems$$inline_4529$$.length;$j$$inline_4530$$++) {
      $itemArray$$inline_4528$$.push($ret$$66_seriesItems$$inline_4529$$[$j$$inline_4530$$])
    }
  }
  this.$_startTime$ = new Date($options$$292$$.start);
  this.$_endTime$ = new Date($options$$292$$.end);
  $ret$$66_seriesItems$$inline_4529$$ = this.$ParseRootAttributes$();
  $ret$$66_seriesItems$$inline_4529$$.$inlineStyle$ = $options$$292$$.style;
  $ret$$66_seriesItems$$inline_4529$$.scale = $options$$292$$.scale;
  $ret$$66_seriesItems$$inline_4529$$.$timeAxis$ = $options$$292$$.timeAxis;
  $ret$$66_seriesItems$$inline_4529$$.label = $options$$292$$.label;
  $ret$$66_seriesItems$$inline_4529$$.$emptyText$ = $options$$292$$.emptyText;
  $ret$$66_seriesItems$$inline_4529$$.$isIRAnimationEnabled$ = "auto" == $options$$292$$.animationOnDisplay;
  $ret$$66_seriesItems$$inline_4529$$.$isDCAnimationEnabled$ = "auto" == $options$$292$$.animationOnDataChange;
  $ret$$66_seriesItems$$inline_4529$$.$items$ = this.$_parseDataNode$($options$$292$$.timeline, $options$$292$$.index, $itemArray$$inline_4528$$, $oldItems$$1$$);
  $ret$$66_seriesItems$$inline_4529$$.$rtl$ = "false";
  $ret$$66_seriesItems$$inline_4529$$.$isRandomItemLayout$ = $options$$292$$._isRandomItemLayout;
  $ret$$66_seriesItems$$inline_4529$$.$isTopToBottom$ = $options$$292$$.itemLayout == $JSCompiler_alias_NULL$$ || "auto" == $options$$292$$.itemLayout ? $options$$292$$.inverted : "topToBottom" == $options$$292$$.itemLayout;
  return $ret$$66_seriesItems$$inline_4529$$
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$() {
  var $ret$$67$$ = {};
  $ret$$67$$.$origStart$ = this.$_startTime$;
  $ret$$67$$.$origEnd$ = this.$_endTime$;
  $ret$$67$$.orientation = "horizontal";
  $ret$$67$$.start = this.$_startTime$.getTime();
  $ret$$67$$.end = this.$_endTime$.getTime();
  return $ret$$67$$
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($timeline$$19$$, $seriesIndex$$129$$, $data$$109$$, $oldItems$$2$$) {
  var $treeNodes$$ = [], $series$$36$$ = $timeline$$19$$.$_series$[$seriesIndex$$129$$];
  if($data$$109$$) {
    for(var $i$$648$$ = 0;$i$$648$$ < $data$$109$$.length;$i$$648$$++) {
      var $props$$11_startTime$$12$$ = this.$ParseNodeAttributes$($data$$109$$[$i$$648$$]);
      if($props$$11_startTime$$12$$) {
        if($series$$36$$.$_allowUpdates$) {
          var $item$$82_props$$inline_4532$$;
          a: {
            $item$$82_props$$inline_4532$$ = $props$$11_startTime$$12$$;
            var $add_index$$200_items$$inline_4533$$ = $oldItems$$2$$;
            if($add_index$$200_items$$inline_4533$$) {
              for(var $i$$inline_4534_j$$102$$ = 0;$i$$inline_4534_j$$102$$ < $add_index$$200_items$$inline_4533$$.length;$i$$inline_4534_j$$102$$++) {
                var $item$$inline_4535$$ = $add_index$$200_items$$inline_4533$$[$i$$inline_4534_j$$102$$];
                if($item$$82_props$$inline_4532$$.id == $item$$inline_4535$$.getId() && $item$$82_props$$inline_4532$$.title == $item$$inline_4535$$.$getTitle$() && $item$$82_props$$inline_4532$$.$desc$ == $item$$inline_4535$$.$_desc$ && $item$$82_props$$inline_4532$$.$thumbnail$ == $item$$inline_4535$$.$_thumbnail$) {
                  $item$$82_props$$inline_4532$$ = $item$$inline_4535$$;
                  break a
                }
              }
            }
            $item$$82_props$$inline_4532$$ = $JSCompiler_alias_VOID$$
          }
          $item$$82_props$$inline_4532$$ ? ($add_index$$200_items$$inline_4533$$ = dvt.$ArrayUtils$.$getIndex$($oldItems$$2$$, $item$$82_props$$inline_4532$$), $oldItems$$2$$.splice($add_index$$200_items$$inline_4533$$, 1), $item$$82_props$$inline_4532$$.$_spacing$ = $JSCompiler_alias_NULL$$, $item$$82_props$$inline_4532$$.$_durationLevel$ = $JSCompiler_alias_NULL$$, $item$$82_props$$inline_4532$$.$_loc$ = $JSCompiler_alias_NULL$$, $item$$82_props$$inline_4532$$.$setSelected$($JSCompiler_alias_FALSE$$), 
          $item$$82_props$$inline_4532$$.$_startTime$ = $props$$11_startTime$$12$$.startTime, $item$$82_props$$inline_4532$$.$_endTime$ = $props$$11_startTime$$12$$.$endTime$) : ($item$$82_props$$inline_4532$$ = new $DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$129$$, $props$$11_startTime$$12$$), $item$$82_props$$inline_4532$$.$setSelectable$($JSCompiler_alias_TRUE$$))
        }else {
          $item$$82_props$$inline_4532$$ = new $DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$129$$, $props$$11_startTime$$12$$), $item$$82_props$$inline_4532$$.$setSelectable$($JSCompiler_alias_TRUE$$)
        }
        $props$$11_startTime$$12$$ = $item$$82_props$$inline_4532$$.$_startTime$;
        $add_index$$200_items$$inline_4533$$ = $JSCompiler_alias_TRUE$$;
        for($i$$inline_4534_j$$102$$ = 0;$i$$inline_4534_j$$102$$ < $treeNodes$$.length;$i$$inline_4534_j$$102$$++) {
          if($props$$11_startTime$$12$$ < $treeNodes$$[$i$$inline_4534_j$$102$$].$_startTime$) {
            $treeNodes$$.splice($i$$inline_4534_j$$102$$, 0, $item$$82_props$$inline_4532$$);
            $add_index$$200_items$$inline_4533$$ = $JSCompiler_alias_FALSE$$;
            break
          }
        }
        $add_index$$200_items$$inline_4533$$ && $treeNodes$$.push($item$$82_props$$inline_4532$$)
      }
    }
  }
  return $treeNodes$$
};
$JSCompiler_prototypeAlias$$.getDate = function $$JSCompiler_prototypeAlias$$$getDate$($date$$17$$) {
  return $date$$17$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $date$$17$$.getTime ? $date$$17$$.getTime() : isNaN($date$$17$$) ? (new Date($date$$17$$)).getTime() + 0 : $date$$17$$
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($data$$110$$) {
  var $ret$$68$$ = {};
  $ret$$68$$.id = $data$$110$$.id;
  $ret$$68$$.$rowKey$ = $ret$$68$$.id;
  $ret$$68$$.startTime = this.getDate($data$$110$$.start);
  $ret$$68$$.$endTime$ = this.getDate($data$$110$$.end);
  if(($ret$$68$$.$endTime$ ? $ret$$68$$.$endTime$ : $ret$$68$$.startTime) < this.$_startTime$.getTime() || $ret$$68$$.startTime > this.$_endTime$.getTime()) {
    return $JSCompiler_alias_NULL$$
  }
  $ret$$68$$.title = $data$$110$$.title;
  $ret$$68$$.$desc$ = $data$$110$$.description;
  $ret$$68$$.$thumbnail$ = $data$$110$$.thumbnail;
  $ret$$68$$.data = $data$$110$$;
  $ret$$68$$.style = $data$$110$$.style;
  $ret$$68$$.action = $data$$110$$.action;
  $ret$$68$$.$durationFillColor$ = $data$$110$$.durationFillColor;
  $ret$$68$$.$spbs$ = $data$$110$$.showPopupBehaviors;
  return $ret$$68$$
};
var $DvtTimelineSeriesRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesRenderer$$, dvt.$Obj$, "DvtTimelineSeriesRenderer");
$DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($series$$37$$, $block$$1_width$$141$$, $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$) {
  $DvtTimelineSeriesRenderer$$.$_renderBackground$($series$$37$$, $block$$1_width$$141$$, $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$);
  $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($series$$37$$);
  $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($series$$37$$, $series$$37$$.$_canvas$);
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($series$$37$$);
  if(!($series$$37$$.$_items$ == $JSCompiler_alias_NULL$$ || 0 == $series$$37$$.$_items$.length)) {
    if(0 == $series$$37$$.$_blocks$.length) {
      $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$ = $series$$37$$.$getCtx$();
      $block$$1_width$$141$$ = new dvt.$Container$($context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$, "itemBlock_" + $series$$37$$.$_fetchStartPos$ + "_" + $series$$37$$.$_fetchEndPos$);
      $block$$1_width$$141$$.$startPos$ = $series$$37$$.$_fetchStartPos$;
      $block$$1_width$$141$$.$endPos$ = $series$$37$$.$_fetchEndPos$;
      var $feelerBlock_i$$inline_4554$$ = new dvt.$Container$($context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$, "feelers");
      $block$$1_width$$141$$.$addChild$($feelerBlock_i$$inline_4554$$);
      $block$$1_width$$141$$.$feelers$ = $feelerBlock_i$$inline_4554$$;
      $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$ = new dvt.$Container$($context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$, "durations");
      $block$$1_width$$141$$.$addChild$($context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$);
      $block$$1_width$$141$$.$durations$ = $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$;
      $series$$37$$.$_canvas$.$addChild$($block$$1_width$$141$$);
      $series$$37$$.$_blocks$.push($block$$1_width$$141$$)
    }else {
      $block$$1_width$$141$$ = $series$$37$$.$_blocks$[0]
    }
    $series$$37$$.$prepareDurations$($series$$37$$.$_items$);
    $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$ = $series$$37$$.$_items$;
    $series$$37$$.$isVertical$() ? $series$$37$$.$_initialSpacing$ = 20 * (0 < $series$$37$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$ : $series$$37$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$;
    for($feelerBlock_i$$inline_4554$$ = 0;$feelerBlock_i$$inline_4554$$ < $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$.length;$feelerBlock_i$$inline_4554$$++) {
      var $item$$inline_4555$$ = $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$[$feelerBlock_i$$inline_4554$$], $loc$$inline_4556$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4555$$.$_startTime$, $series$$37$$.$_length$), $endTime$$inline_4557_span$$inline_4558$$ = $item$$inline_4555$$.$_endTime$;
      $endTime$$inline_4557_span$$inline_4558$$ && $endTime$$inline_4557_span$$inline_4558$$ != $item$$inline_4555$$.$_startTime$ && ($endTime$$inline_4557_span$$inline_4558$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $endTime$$inline_4557_span$$inline_4558$$, $series$$37$$.$_length$) - $loc$$inline_4556$$, $loc$$inline_4556$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $endTime$$inline_4557_span$$inline_4558$$ / 2));
      $item$$inline_4555$$.$_loc$ = $loc$$inline_4556$$
    }
    for($feelerBlock_i$$inline_4554$$ = 0;$feelerBlock_i$$inline_4554$$ < $series$$37$$.$_items$.length;$feelerBlock_i$$inline_4554$$++) {
      $item$$inline_4555$$ = $series$$37$$.$_items$[$feelerBlock_i$$inline_4554$$], $loc$$inline_4556$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4555$$.$_startTime$, $series$$37$$.$_length$), $loc$$inline_4556$$ < $series$$37$$.$_fetchStartPos$ || $loc$$inline_4556$$ > $series$$37$$.$_fetchEndPos$ || $DvtTimelineSeriesItemRenderer$$.$initializeItem$($item$$inline_4555$$, $series$$37$$, $feelerBlock_i$$inline_4554$$)
    }
    $series$$37$$.$_isInitialRender$ ? ($series$$37$$.$_frAnimationElems$ = $series$$37$$.$_isIRAnimationEnabled$ ? [] : $JSCompiler_alias_NULL$$, $series$$37$$.$_mvAnimator$ = $JSCompiler_alias_NULL$$, $series$$37$$.$_rmAnimationElems$ = $JSCompiler_alias_NULL$$) : $series$$37$$.$_allowUpdates$ && $series$$37$$.$_isDCAnimationEnabled$ ? ($series$$37$$.$_frAnimationElems$ = [], $series$$37$$.$_mvAnimator$ = new dvt.$Animator$($series$$37$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getAnimationDuration$($series$$37$$.$Options$), 
    0, dvt.$Easing$.$cubicInOut$), $series$$37$$.$_rmAnimationElems$ = []) : ($series$$37$$.$_frAnimationElems$ = $JSCompiler_alias_NULL$$, $series$$37$$.$_mvAnimator$ = $JSCompiler_alias_NULL$$, $series$$37$$.$_rmAnimationElems$ = $JSCompiler_alias_NULL$$);
    $series$$37$$.$_hasMvAnimations$ = $JSCompiler_alias_FALSE$$;
    $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$ = Math.max(0, $series$$37$$.$_maxOverflowValue$ - $series$$37$$.$_size$);
    $series$$37$$.$_overflowOffset$ = $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$;
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$37$$, $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$);
    $series$$37$$.$_oldItems$ && $DvtTimelineSeriesRenderer$$.$_removeItems$($series$$37$$.$_oldItems$, $series$$37$$, $block$$1_width$$141$$, $series$$37$$.$_rmAnimationElems$);
    $series$$37$$.$_oldItems$ = $JSCompiler_alias_NULL$$;
    $series$$37$$.$isVertical$() && $block$$1_width$$141$$.$feelers$.$removeChildren$();
    $DvtTimelineSeriesRenderer$$.$_renderItems$($series$$37$$.$_items$, $series$$37$$, $block$$1_width$$141$$, $series$$37$$.$_fetchStartPos$, $series$$37$$.$_fetchEndPos$, $context$$420_durationBlock_height$$117_items$$inline_4553_overflowOffset$$7$$, $series$$37$$.$_frAnimationElems$, $series$$37$$.$_mvAnimator$);
    $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$37$$);
    $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$37$$)
  }
};
$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($series$$38$$) {
  $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($series$$38$$.$_items$, $series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$38$$)
};
$DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($series$$39$$, $width$$142$$, $height$$118$$) {
  if($series$$39$$.$_background$) {
    var $addBackground$$ = $JSCompiler_alias_FALSE$$;
    $series$$39$$.$_background$.$setWidth$($width$$142$$);
    $series$$39$$.$_background$.$setHeight$($height$$118$$)
  }else {
    $addBackground$$ = $JSCompiler_alias_TRUE$$, $series$$39$$.$_background$ = new dvt.$Rect$($series$$39$$.$getCtx$(), 0, 0, $width$$142$$, $height$$118$$, "bg")
  }
  $series$$39$$.$_background$.$setCSSStyle$($series$$39$$.$_style$);
  $series$$39$$.$_background$.$setPixelHinting$();
  $series$$39$$.$_background$.setCursor("move");
  $addBackground$$ && $series$$39$$.$addChild$($series$$39$$.$_background$)
};
$DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($series$$40$$, $overflowOffset$$8$$) {
  var $isRTL$$58$$ = dvt.$Agent$.$isRightToLeft$($series$$40$$.$getCtx$());
  0 < $overflowOffset$$8$$ && ($series$$40$$.$isVertical$() ? $series$$40$$.$_background$.$setWidth$($series$$40$$.$_maxOverflowValue$) : $series$$40$$.$_background$.$setHeight$($series$$40$$.$_maxOverflowValue$));
  if($series$$40$$.$isVertical$()) {
    if(!$series$$40$$.$_isInverted$ && !$isRTL$$58$$ || $series$$40$$.$_isInverted$ && $isRTL$$58$$) {
      $series$$40$$.$_background$.$setTranslateX$(-$overflowOffset$$8$$), $series$$40$$.$_canvas$ != $JSCompiler_alias_NULL$$ && $series$$40$$.$_canvas$.$setTranslateX$(0 - $overflowOffset$$8$$)
    }
  }else {
    $series$$40$$.$_isInverted$ || ($series$$40$$.$_background$.$setTranslateY$(-$overflowOffset$$8$$), $series$$40$$.$_canvas$ != $JSCompiler_alias_NULL$$ && $series$$40$$.$_canvas$.$setTranslateY$(0 - $overflowOffset$$8$$))
  }
};
$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($series$$41$$) {
  $series$$41$$.$_canvas$ ? ($series$$41$$.$_canvasOffsetX$ = $series$$41$$.$_canvas$.$getTranslateX$(), $series$$41$$.$_canvasOffsetY$ = $series$$41$$.$_canvas$.$getTranslateY$(), $series$$41$$.$_canvas$.$setTranslateX$(0), $series$$41$$.$_canvas$.$setTranslateY$(0)) : ($series$$41$$.$_canvas$ = new dvt.$Container$($series$$41$$.$getCtx$(), "canvas"), $series$$41$$.$addChild$($series$$41$$.$_canvas$))
};
$DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($items$$40$$, $series$$42$$, $container$$189$$, $startPos$$8$$, $endPos$$7$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$) {
  for(var $i$$650$$ = 0;$i$$650$$ < $items$$40$$.length;$i$$650$$++) {
    var $item$$84$$ = $items$$40$$[$i$$650$$], $loc$$6$$ = $DvtTimeUtils$$.$getDatePosition$($series$$42$$.$_start$, $series$$42$$.$_end$, $item$$84$$.$_startTime$, $series$$42$$.$_length$);
    $loc$$6$$ < $startPos$$8$$ || $loc$$6$$ > $endPos$$7$$ || $DvtTimelineSeriesItemRenderer$$.$renderItem$($item$$84$$, $series$$42$$, $container$$189$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
  }
  if($DvtTimeUtils$$.$supportsTouch$()) {
    for($i$$650$$ = 0;$i$$650$$ < $items$$40$$.length - 1;$i$$650$$++) {
      $item$$84$$ = $items$$40$$[$i$$650$$], $item$$84$$.$_displayable$.$_setAriaProperty$("flowto", "_bt_" + $items$$40$$[$i$$650$$ + 1].getId())
    }
  }
  $DvtTimelineSeriesRenderer$$.$_renderDurations$($items$$40$$, $series$$42$$, $container$$189$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
};
$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($items$$41$$, $series$$43$$) {
  if(!($items$$41$$ == $JSCompiler_alias_NULL$$ || 0 == $items$$41$$.length)) {
    var $endPos$$8_i$$651$$ = $series$$43$$.$_fetchEndPos$, $block$$2_item$$85$$ = $series$$43$$.$_blocks$[0];
    $block$$2_item$$85$$.$startPos$ = $series$$43$$.$_fetchStartPos$;
    $block$$2_item$$85$$.$endPos$ = $endPos$$8_i$$651$$;
    $series$$43$$.$isVertical$() ? $series$$43$$.$_initialSpacing$ = 20 * (0 < $series$$43$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$ : $series$$43$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$;
    for($endPos$$8_i$$651$$ = 0;$endPos$$8_i$$651$$ < $items$$41$$.length;$endPos$$8_i$$651$$++) {
      var $block$$2_item$$85$$ = $items$$41$$[$endPos$$8_i$$651$$], $span$$1_startTime$$13$$ = $block$$2_item$$85$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ = $DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $span$$1_startTime$$13$$, $series$$43$$.$_length$), $endTime$$14$$ = $block$$2_item$$85$$.$_endTime$;
      $endTime$$14$$ && $endTime$$14$$ != $span$$1_startTime$$13$$ && ($span$$1_startTime$$13$$ = $DvtTimeUtils$$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $endTime$$14$$, $series$$43$$.$_length$) - $itemTime_loc$$7_overflowOffset$$10$$, $itemTime_loc$$7_overflowOffset$$10$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $span$$1_startTime$$13$$ / 2));
      $block$$2_item$$85$$.$_loc$ = $itemTime_loc$$7_overflowOffset$$10$$;
      $series$$43$$.$_isRandomItemLayout$ || ($block$$2_item$$85$$.$_spacing$ = $JSCompiler_alias_NULL$$)
    }
    for($endPos$$8_i$$651$$ = 0;$endPos$$8_i$$651$$ < $items$$41$$.length;$endPos$$8_i$$651$$++) {
      $block$$2_item$$85$$ = $items$$41$$[$endPos$$8_i$$651$$], $itemTime_loc$$7_overflowOffset$$10$$ = $block$$2_item$$85$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ < $series$$43$$.$_start$ || $itemTime_loc$$7_overflowOffset$$10$$ > $series$$43$$.$_end$ || $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($block$$2_item$$85$$, $series$$43$$, $endPos$$8_i$$651$$)
    }
    $itemTime_loc$$7_overflowOffset$$10$$ = Math.max(0, $series$$43$$.$_maxOverflowValue$ - $series$$43$$.$_size$);
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$);
    for($endPos$$8_i$$651$$ = 0;$endPos$$8_i$$651$$ < $items$$41$$.length;$endPos$$8_i$$651$$++) {
      $block$$2_item$$85$$ = $items$$41$$[$endPos$$8_i$$651$$], $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($block$$2_item$$85$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$), $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($block$$2_item$$85$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$), $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($block$$2_item$$85$$, $series$$43$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($items$$42$$, $series$$44$$, $container$$190_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$) {
  $container$$190_durationBlock$$1$$ = $container$$190_durationBlock$$1$$.$durations$;
  for(var $i$$652$$ = $series$$44$$.$_maxDurationSize$;0 < $i$$652$$;$i$$652$$--) {
    for(var $j$$103$$ = 0;$j$$103$$ < $items$$42$$.length;$j$$103$$++) {
      var $item$$86$$ = $items$$42$$[$j$$103$$], $startTime$$14$$ = $item$$86$$.$_startTime$, $endTime$$15$$ = $item$$86$$.$_endTime$;
      $endTime$$15$$ && ($endTime$$15$$ != $startTime$$14$$ && $i$$652$$ == $item$$86$$.$_durationLevel$) && $DvtTimelineSeriesItemRenderer$$.$renderDuration$($item$$86$$, $series$$44$$, $container$$190_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($series$$45$$) {
  $series$$45$$.$_seriesTicks$ == $JSCompiler_alias_NULL$$ ? ($series$$45$$.$_seriesTicks$ = new dvt.$Container$($series$$45$$.$getCtx$()), $series$$45$$.$_canvas$.$addChild$($series$$45$$.$_seriesTicks$)) : ($series$$45$$.$_seriesTicks$.$removeChildren$(), $series$$45$$.$_seriesTicksArray$ = []);
  if($series$$45$$.$_scale$ && $series$$45$$.$_timeAxis$) {
    var $separatorStyle$$1$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
    if($series$$45$$.$_axisStyleDefaults$) {
      var $separatorColor$$1$$ = $series$$45$$.$_axisStyleDefaults$.separatorColor;
      $separatorColor$$1$$ && $separatorStyle$$1$$.$parseInlineStyle$("color:" + $separatorColor$$1$$ + ";")
    }
    $series$$45$$.$_separatorStroke$ = new dvt.$SolidStroke$($separatorStyle$$1$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
    $series$$45$$.$_separatorStroke$.$setStyle$(dvt.$Stroke$.$DASHED$, 3);
    $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($series$$45$$, $series$$45$$.$_fetchStartPos$, $series$$45$$.$_fetchEndPos$, $series$$45$$.$_seriesTicks$)
  }
};
$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($series$$46$$) {
  for(var $isRTL$$59$$ = dvt.$Agent$.$isRightToLeft$($series$$46$$.$getCtx$()), $i$$653$$ = 0;$i$$653$$ < $series$$46$$.$_seriesTicksArray$.length;$i$$653$$++) {
    var $tick$$ = $series$$46$$.$_seriesTicksArray$[$i$$653$$], $pos$$71$$ = !$series$$46$$.$isVertical$() && $isRTL$$59$$ ? $series$$46$$.$_length$ - $DvtTimeUtils$$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$) : $DvtTimeUtils$$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$);
    $series$$46$$.$isVertical$() ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$71$$), $tick$$.$setX2$($series$$46$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$71$$)) : ($tick$$.$setX1$($pos$$71$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$71$$), $tick$$.$setY2$($series$$46$$.$_maxOverflowValue$))
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($series$$47$$, $currentDate$$2_startDate$$2_startPos$$10$$, $endPos$$9$$, $container$$191$$) {
  var $isRTL$$60$$ = dvt.$Agent$.$isRightToLeft$($series$$47$$.$getCtx$()), $start$$37$$ = $series$$47$$.$_start$, $end$$28$$ = $series$$47$$.$_end$;
  $currentDate$$2_startDate$$2_startPos$$10$$ = $DvtTimeUtils$$.$getPositionDate$($start$$37$$, $end$$28$$, $currentDate$$2_startDate$$2_startPos$$10$$, $series$$47$$.$_length$);
  $currentDate$$2_startDate$$2_startPos$$10$$ = $series$$47$$.$_timeAxis$.$adjustDate$($currentDate$$2_startDate$$2_startPos$$10$$);
  for(var $currentPos$$3_tickElem$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$37$$, $end$$28$$, $currentDate$$2_startDate$$2_startPos$$10$$, $series$$47$$.$_length$);$currentPos$$3_tickElem$$1$$ < $endPos$$9$$;) {
    var $nextDate$$2$$ = $series$$47$$.$_timeAxis$.$getNextDate$($currentDate$$2_startDate$$2_startPos$$10$$.getTime()), $next_time_pos$$3$$ = $DvtTimeUtils$$.$getDatePosition$($start$$37$$, $end$$28$$, $nextDate$$2$$, $series$$47$$.$_length$), $pos$$72_y2$$29$$ = !$series$$47$$.$isVertical$() && $isRTL$$60$$ ? $series$$47$$.$_length$ - $currentPos$$3_tickElem$$1$$ : $currentPos$$3_tickElem$$1$$;
    if($series$$47$$.$isVertical$()) {
      var $x1$$37$$ = 0, $y1$$30$$ = $pos$$72_y2$$29$$, $x2$$35$$ = $series$$47$$.$_maxOverflowValue$
    }else {
      $x1$$37$$ = $pos$$72_y2$$29$$, $y1$$30$$ = 0, $x2$$35$$ = $pos$$72_y2$$29$$, $pos$$72_y2$$29$$ = $series$$47$$.$_maxOverflowValue$
    }
    $currentPos$$3_tickElem$$1$$ = $series$$47$$.$addTick$($container$$191$$, $x1$$37$$, $x2$$35$$, $y1$$30$$, $pos$$72_y2$$29$$, $series$$47$$.$_separatorStroke$, "o_tick" + $currentPos$$3_tickElem$$1$$);
    $currentPos$$3_tickElem$$1$$.time = $currentDate$$2_startDate$$2_startPos$$10$$.getTime();
    $series$$47$$.$_seriesTicksArray$.push($currentPos$$3_tickElem$$1$$);
    $currentDate$$2_startDate$$2_startPos$$10$$ = $nextDate$$2$$;
    $currentPos$$3_tickElem$$1$$ = $next_time_pos$$3$$
  }
};
$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($series$$48$$, $container$$192$$) {
  var $context$$424$$ = $series$$48$$.$getCtx$(), $isRTL$$61$$ = dvt.$Agent$.$isRightToLeft$($context$$424$$);
  $series$$48$$.$_refObjectsContainer$ == $JSCompiler_alias_NULL$$ && ($series$$48$$.$_refObjectsContainer$ = new dvt.$Container$($context$$424$$), $container$$192$$.$addChild$($series$$48$$.$_refObjectsContainer$));
  var $referenceObjects$$4$$ = $series$$48$$.$_referenceObjects$;
  if($referenceObjects$$4$$) {
    for(var $maxRefObjects$$ = Math.min(1, $referenceObjects$$4$$.length), $i$$654$$ = 0;$i$$654$$ < $maxRefObjects$$;$i$$654$$++) {
      var $refObject$$ = $referenceObjects$$4$$[$i$$654$$];
      if($refObject$$) {
        var $pos$$73_ref$$2$$ = $DvtTimeUtils$$.$getDatePosition$($series$$48$$.$_start$, $series$$48$$.$_end$, $refObject$$, $series$$48$$.$_length$);
        if(0 == $series$$48$$.$_renderedReferenceObjects$.length) {
          $series$$48$$.$isVertical$() ? $pos$$73_ref$$2$$ = new dvt.$Line$($context$$424$$, 0, $pos$$73_ref$$2$$, $series$$48$$.$_maxOverflowValue$, $pos$$73_ref$$2$$, "zoomOrder[i]") : ($isRTL$$61$$ && ($pos$$73_ref$$2$$ = $series$$48$$.$_length$ - $pos$$73_ref$$2$$), $pos$$73_ref$$2$$ = new dvt.$Line$($context$$424$$, $pos$$73_ref$$2$$, 0, $pos$$73_ref$$2$$, $series$$48$$.$_maxOverflowValue$, "zoomOrder[i]"));
          var $referenceObjectStroke$$ = new dvt.$SolidStroke$($DvtTimelineStyleUtils$$.$getReferenceObjectColor$($series$$48$$.$Options$));
          $pos$$73_ref$$2$$.$setStroke$($referenceObjectStroke$$);
          $pos$$73_ref$$2$$.$setPixelHinting$();
          $pos$$73_ref$$2$$.$date$ = $refObject$$;
          $series$$48$$.$_refObjectsContainer$.$addChild$($pos$$73_ref$$2$$);
          $series$$48$$.$_renderedReferenceObjects$[$i$$654$$] = $pos$$73_ref$$2$$
        }
      }
    }
  }else {
    $series$$48$$.$_refObjectsContainer$.$removeChildren$(), $series$$48$$.$_renderedReferenceObjects$ = []
  }
};
$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($series$$49$$) {
  for(var $isRTL$$62$$ = dvt.$Agent$.$isRightToLeft$($series$$49$$.$getCtx$()), $i$$655$$ = 0;$i$$655$$ < $series$$49$$.$_renderedReferenceObjects$.length;$i$$655$$++) {
    var $ref$$3$$ = $series$$49$$.$_renderedReferenceObjects$[$i$$655$$], $pos$$74$$ = $DvtTimeUtils$$.$getDatePosition$($series$$49$$.$_start$, $series$$49$$.$_end$, $ref$$3$$.$date$, $series$$49$$.$_length$);
    $series$$49$$.$isVertical$() ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$74$$), $ref$$3$$.$setX2$($series$$49$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$74$$)) : ($isRTL$$62$$ && ($pos$$74$$ = $series$$49$$.$_length$ - $pos$$74$$), $ref$$3$$.$setX1$($pos$$74$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$74$$), $ref$$3$$.$setY2$($series$$49$$.$_maxOverflowValue$))
  }
};
$DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($items$$43$$, $series$$50$$, $container$$193$$, $animationElems$$3_i$$656$$) {
  if($animationElems$$3_i$$656$$) {
    $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($items$$43$$, $series$$50$$, $animationElems$$3_i$$656$$)
  }else {
    for($animationElems$$3_i$$656$$ = 0;$animationElems$$3_i$$656$$ < $items$$43$$.length;$animationElems$$3_i$$656$$++) {
      var $item$$87$$ = $items$$43$$[$animationElems$$3_i$$656$$];
      $container$$193$$.removeChild($item$$87$$.$_displayable$);
      $series$$50$$.$isVertical$() || $container$$193$$.$feelers$.removeChild($item$$87$$.$_feeler$);
      var $startTime$$15$$ = $item$$87$$.$_startTime$, $endTime$$16$$ = $item$$87$$.$_endTime$;
      $endTime$$16$$ && $endTime$$16$$ != $startTime$$15$$ && $container$$193$$.$durations$.removeChild($item$$87$$.$_durationBar$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($items$$44$$, $series$$51$$, $animationElems$$4$$) {
  for(var $i$$657$$ = 0;$i$$657$$ < $items$$44$$.length;$i$$657$$++) {
    var $durationBar$$2_item$$88$$ = $items$$44$$[$i$$657$$], $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$88$$.$_displayable$;
    $series$$51$$.$isVertical$() ? $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateX$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$);
    $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$);
    $series$$51$$.$isVertical$() || ($bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$88$$.$_feeler$, $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$));
    var $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$88$$.$_startTime$, $endTime$$17$$ = $durationBar$$2_item$$88$$.$_endTime$;
    $endTime$$17$$ && $endTime$$17$$ != $bubble$$3_feeler$$6_startTime$$16$$ && ($durationBar$$2_item$$88$$ = $durationBar$$2_item$$88$$.$_durationBar$, $series$$51$$.$isVertical$() ? $durationBar$$2_item$$88$$.$setTranslateX$($durationBar$$2_item$$88$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $durationBar$$2_item$$88$$.$setTranslateY$($durationBar$$2_item$$88$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($durationBar$$2_item$$88$$))
  }
};

  return dvt;
});
