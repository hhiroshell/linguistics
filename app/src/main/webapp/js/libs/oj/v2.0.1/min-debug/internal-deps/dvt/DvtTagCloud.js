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

dvt.$TagCloud$ = function $dvt$$TagCloud$$($context$$363$$, $callback$$109$$, $callbackObj$$75$$) {
  this.Init($context$$363$$, $callback$$109$$, $callbackObj$$75$$)
};
$goog$exportPath_$$("dvt.TagCloud", dvt.$TagCloud$);
dvt.$Obj$.$createSubclass$(dvt.$TagCloud$, dvt.$BaseComponent$);
dvt.$TagCloud$.newInstance = function $dvt$$TagCloud$$newInstance$($context$$364$$, $callback$$110$$, $callbackObj$$76$$) {
  return new dvt.$TagCloud$($context$$364$$, $callback$$110$$, $callbackObj$$76$$)
};
dvt.$TagCloud$.newInstance = dvt.$TagCloud$.newInstance;
dvt.$TagCloud$.prototype.Init = function $dvt$$TagCloud$$$Init$($context$$365$$, $callback$$111$$, $callbackObj$$77$$) {
  dvt.$TagCloud$.$superclass$.Init.call(this, $context$$365$$, $callback$$111$$, $callbackObj$$77$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS($JSCompiler_alias_NULL$$, "text-rendering", "geometricPrecision");
  this.$EventManager$ = new $DvtTagCloudEventManager$$(this, $context$$365$$, this.$processEvent$, this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtTagCloudKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new $DvtTagCloudDefaults$$;
  this.$_items$ = [];
  this.$_peers$ = [];
  this.$legend$ = $JSCompiler_alias_NULL$$;
  this.$_dragSource$ = new dvt.$DragSource$(this.$getCtx$());
  this.$EventManager$.$setDragSource$(this.$_dragSource$)
};
dvt.$TagCloud$.prototype.$render$ = function $dvt$$TagCloud$$$$render$$($ah$$3_options$$247$$, $animationDuration$$9_width$$118$$, $bounds$$116_height$$103$$) {
  !isNaN($animationDuration$$9_width$$118$$) && !isNaN($bounds$$116_height$$103$$) && (this.$Width$ = $animationDuration$$9_width$$118$$, this.$Height$ = $bounds$$116_height$$103$$);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$3_options$$247$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$_oldContainer$ = this.$_container$;
  this.$_oldItems$ = this.$_items$;
  this.$_items$ = [];
  this.$_itemCollection$ = [];
  this.$_container$ = new dvt.$Container$(this.$getCtx$());
  this.$addChild$(this.$_container$);
  $DvtTagCloudRenderer$$.$render$(this, this.$_container$, new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$));
  this.$SelectionHandler$ && this.$SelectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$getObjects$());
  $animationDuration$$9_width$$118$$ = this.$Options$.animationDuration;
  $bounds$$116_height$$103$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
  this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $ah$$3_options$$247$$ && (this.$_deleteContainer$ = new dvt.$Container$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $ah$$3_options$$247$$ = new dvt.$DataAnimationHandler$(this.$getCtx$(), this.$_deleteContainer$), $ah$$3_options$$247$$.$constructAnimation$(this.$_oldItems$, this.$_items$), this.$_animation$ = $ah$$3_options$$247$$.$getAnimation$()) : "none" !== this.$Options$.animationOnDisplay && (this.$_animation$ = 
  dvt.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), dvt.$BlackBoxAnimationHandler$.$ALPHA_FADE$, this.$_container$, $bounds$$116_height$$103$$, $animationDuration$$9_width$$118$$));
  this.$_animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$_animation$.play()) : this.$OnRenderEnd$();
  this.$UpdateAriaAttributes$()
};
dvt.$TagCloud$.prototype.render = dvt.$TagCloud$.prototype.$render$;
dvt.$TagCloud$.prototype.$registerItems$ = $JSCompiler_set$$("$_items$");
dvt.$TagCloud$.prototype.$getAutomation$ = function $dvt$$TagCloud$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtTagCloudAutomation$$(this));
  return this.$Automation$
};
dvt.$TagCloud$.prototype.getAutomation = dvt.$TagCloud$.prototype.$getAutomation$;
dvt.$TagCloud$.prototype.$registerObject$ = function $dvt$$TagCloud$$$$registerObject$$($peer$$28$$, $index$$182$$) {
  this.$_peers$.push($peer$$28$$);
  this.$_itemCollection$[$index$$182$$] = $peer$$28$$
};
dvt.$TagCloud$.prototype.$getObjects$ = $JSCompiler_get$$("$_peers$");
dvt.$TagCloud$.prototype.$getItems$ = $JSCompiler_get$$("$_itemCollection$");
dvt.$TagCloud$.prototype.$highlight$ = function $dvt$$TagCloud$$$$highlight$$($categories$$23$$) {
  this.$Options$.highlightedCategories = dvt.$JsonUtils$.$clone$($categories$$23$$);
  dvt.$CategoryRolloverHandler$.$highlight$($categories$$23$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$23$$)
};
dvt.$TagCloud$.prototype.highlight = dvt.$TagCloud$.prototype.$highlight$;
dvt.$TagCloud$.prototype.select = function $dvt$$TagCloud$$$select$($selection$$18$$) {
  this.$Options$.selection = dvt.$JsonUtils$.$clone$($selection$$18$$);
  this.$SelectionHandler$ && this.$SelectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$getObjects$())
};
dvt.$TagCloud$.prototype.select = dvt.$TagCloud$.prototype.select;
$JSCompiler_prototypeAlias$$ = dvt.$TagCloud$.prototype;
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$248_selectionMode$$7$$) {
  $options$$248_selectionMode$$7$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$248_selectionMode$$7$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  $options$$248_selectionMode$$7$$ = this.$Options$.selectionMode;
  this.$SelectionHandler$ = "single" === $options$$248_selectionMode$$7$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" === $options$$248_selectionMode$$7$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "TAG_CLOUD")
};
$JSCompiler_prototypeAlias$$.$OnRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$OnRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = $JSCompiler_alias_NULL$$);
  this.$_animation$ && (this.$_animation$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this));
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories)
};
$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$469$$, $source$$32$$) {
  var $type$$155$$ = $event$$469$$.type;
  if("categoryHide" == $type$$155$$ || "categoryShow" == $type$$155$$) {
    var $category$$19$$ = $event$$469$$.category, $index$$183$$ = dvt.$ArrayUtils$.$getIndex$(this.$Options$.hiddenCategories, $category$$19$$);
    "categoryHide" == $type$$155$$ && 0 > $index$$183$$ && this.$Options$.hiddenCategories.push($category$$19$$);
    "categoryShow" == $type$$155$$ && 0 <= $index$$183$$ && this.$Options$.hiddenCategories.splice($index$$183$$, 1);
    this.$render$(this.$Options$, this.$Width$, this.$Height$)
  }else {
    "categoryHighlight" == $type$$155$$ && (this != $source$$32$$ ? this.$highlight$($event$$469$$.categories) : this.$legend$ && this.$legend$ != $source$$32$$ && this.$legend$.$processEvent$($event$$469$$, $source$$32$$))
  }
  $event$$469$$ && this.dispatchEvent($event$$469$$)
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  for(var $displayables$$20$$ = [], $selection$$20$$ = this.$SelectionHandler$.getSelection(), $i$$563$$ = 0;$i$$563$$ < $selection$$20$$.length;$i$$563$$++) {
    $displayables$$20$$ = $displayables$$20$$.concat($selection$$20$$[$i$$563$$].$getDisplayables$())
  }
  return $displayables$$20$$
};
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$30$$, $mouseY$$30$$, $clientIds$$14$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$14$$)
};
dvt.$TagCloud$.prototype.isDragAvailable = dvt.$TagCloud$.prototype.$isDragAvailable$;
dvt.$TagCloud$.prototype.$getDragTransferable$ = function $dvt$$TagCloud$$$$getDragTransferable$$($mouseX$$31$$, $mouseY$$31$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$31$$, $mouseY$$31$$)
};
dvt.$TagCloud$.prototype.getDragTransferable = dvt.$TagCloud$.prototype.$getDragTransferable$;
dvt.$TagCloud$.prototype.$getDragOverFeedback$ = function $dvt$$TagCloud$$$$getDragOverFeedback$$($mouseX$$32$$, $mouseY$$32$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$32$$, $mouseY$$32$$)
};
dvt.$TagCloud$.prototype.getDragOverFeedback = dvt.$TagCloud$.prototype.$getDragOverFeedback$;
dvt.$TagCloud$.prototype.$getDragContext$ = function $dvt$$TagCloud$$$$getDragContext$$($mouseX$$33$$, $mouseY$$33$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$33$$, $mouseY$$33$$)
};
dvt.$TagCloud$.prototype.getDragContext = dvt.$TagCloud$.prototype.$getDragContext$;
dvt.$TagCloud$.prototype.$getDragOffset$ = function $dvt$$TagCloud$$$$getDragOffset$$($mouseX$$34$$, $mouseY$$34$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$34$$, $mouseY$$34$$)
};
dvt.$TagCloud$.prototype.getDragOffset = dvt.$TagCloud$.prototype.$getDragOffset$;
dvt.$TagCloud$.prototype.$getPointerOffset$ = function $dvt$$TagCloud$$$$getPointerOffset$$($xOffset$$4$$, $yOffset$$7$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$4$$, $yOffset$$7$$)
};
dvt.$TagCloud$.prototype.getPointerOffset = dvt.$TagCloud$.prototype.$getPointerOffset$;
dvt.$TagCloud$.prototype.$initiateDrag$ = function $dvt$$TagCloud$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
dvt.$TagCloud$.prototype.initiateDrag = dvt.$TagCloud$.prototype.$initiateDrag$;
dvt.$TagCloud$.prototype.$dragDropEnd$ = function $dvt$$TagCloud$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
dvt.$TagCloud$.prototype.dragDropEnd = dvt.$TagCloud$.prototype.$dragDropEnd$;
dvt.$TagCloud$.prototype.$acceptDrag$ = function $dvt$$TagCloud$$$$acceptDrag$$($mouseX$$35$$, $mouseY$$35$$, $clientIds$$15$$) {
  this.$_dropTarget$ || (this.$_dropTarget$ = new $DvtTagCloudDropTarget$$);
  return this.$_dropTarget$.$acceptDrag$($mouseX$$35$$, $mouseY$$35$$, $clientIds$$15$$)
};
dvt.$TagCloud$.prototype.acceptDrag = dvt.$TagCloud$.prototype.$acceptDrag$;
function $DvtTagCloudAutomation$$($dvtComponent$$13$$) {
  this.$_tagCloud$ = $dvtComponent$$13$$
}
$goog$exportPath_$$("DvtTagCloudAutomation", $DvtTagCloudAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTagCloudAutomation$$, dvt.$Automation$);
$DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($displayable$$61_logicalObj$$9$$) {
  return($displayable$$61_logicalObj$$9$$ = this.$_tagCloud$.$EventManager$.$GetLogicalObject$($displayable$$61_logicalObj$$9$$)) && $displayable$$61_logicalObj$$9$$ instanceof $DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($displayable$$61_logicalObj$$9$$) + "]" : $JSCompiler_alias_NULL$$
};
$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($index$$185_peer$$30_subId$$28$$) {
  if($index$$185_peer$$30_subId$$28$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$(this.$_tagCloud$)
  }
  var $parenIdx$$1$$ = $index$$185_peer$$30_subId$$28$$.indexOf("[");
  return 0 < $parenIdx$$1$$ && "item" === $index$$185_peer$$30_subId$$28$$.substring(0, $parenIdx$$1$$) && ($index$$185_peer$$30_subId$$28$$ = parseInt($index$$185_peer$$30_subId$$28$$.substring($parenIdx$$1$$ + 1, $index$$185_peer$$30_subId$$28$$.length - 1)), $index$$185_peer$$30_subId$$28$$ = this.$_tagCloud$.$getItems$()[$index$$185_peer$$30_subId$$28$$]) ? $index$$185_peer$$30_subId$$28$$.$getDisplayables$()[0].$getElem$() : $JSCompiler_alias_NULL$$
};
$DvtTagCloudAutomation$$.prototype.getDomElementForSubId = $DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$;
$DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($index$$186_peer$$31$$) {
  if($index$$186_peer$$31$$ = this.$_tagCloud$.$getItems$()[$index$$186_peer$$31$$]) {
    var $data$$91$$ = {};
    $data$$91$$.color = $index$$186_peer$$31$$.$getDatatipColor$();
    $data$$91$$.tooltip = $index$$186_peer$$31$$.$getShortDesc$();
    $data$$91$$.label = $index$$186_peer$$31$$.$getLabel$();
    $data$$91$$.value = $index$$186_peer$$31$$.getValue();
    $data$$91$$.selected = $index$$186_peer$$31$$.$isSelected$();
    return $data$$91$$
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTagCloudAutomation$$.prototype.getItem = $DvtTagCloudAutomation$$.prototype.getItem;
$DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
  return this.$_tagCloud$.$getObjects$().length
};
$DvtTagCloudAutomation$$.prototype.getItemCount = $DvtTagCloudAutomation$$.prototype.$getItemCount$;
function $DvtTagCloudItem$$($tagCloud$$, $context$$366$$, $textStr$$5$$, $x$$180$$, $y$$157$$, $style$$88$$, $id$$177$$) {
  this.Init($tagCloud$$, $context$$366$$, $textStr$$5$$, $x$$180$$, $y$$157$$, $style$$88$$, $id$$177$$)
}
dvt.$Obj$.$createSubclass$($DvtTagCloudItem$$, dvt.$BackgroundOutputText$);
$JSCompiler_prototypeAlias$$ = $DvtTagCloudItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$1$$, $context$$367$$, $textStr$$6$$, $x$$181$$, $y$$158$$, $style$$89$$, $id$$178$$) {
  $DvtTagCloudItem$$.$superclass$.Init.call(this, $context$$367$$, $textStr$$6$$, $x$$181$$, $y$$158$$, $style$$89$$, $id$$178$$);
  this.$_tagCloud$ = $tagCloud$$1$$;
  this.$alignAuto$();
  $style$$89$$ && $JSCompiler_StaticMethods__createFeedbackStyles$$(this, $style$$89$$)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$8$$) {
  this.$_isSelected$ != $bSelected$$8$$ && ((this.$_isSelected$ = $bSelected$$8$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = $JSCompiler_alias_TRUE$$, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$))
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
  this.$_isShowingHoverEffect$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$43$$, $oldObj$$1$$) {
  var $anim$$37$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $endSize_endY$$1_startX$$5_style$$90$$ = this.$getCSSStyle$(), $endX$$1_oldStyle_startSize$$ = $oldObj$$1$$.$getCSSStyle$(), $bSizeChange_startY$$5$$ = $JSCompiler_alias_FALSE$$, $startAlign_startColor$$14$$ = $endX$$1_oldStyle_startSize$$.$getStyle$(dvt.$CSSStyle$.$COLOR$), $endAlign_endColor$$17$$ = $endSize_endY$$1_startX$$5_style$$90$$.$getStyle$(dvt.$CSSStyle$.$COLOR$);
  if($startAlign_startColor$$14$$ != $endAlign_endColor$$17$$) {
    var $tag$$ = this;
    this.$setCSSStyle$($endSize_endY$$1_startX$$5_style$$90$$.$setStyle$(dvt.$CSSStyle$.$COLOR$, $startAlign_startColor$$14$$));
    $anim$$37$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_COLOR$, this, function() {
      return $tag$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$COLOR$)
    }, function($handler$$43$$) {
      $tag$$.$setCSSStyle$($tag$$.$getCSSStyle$().$setStyle$(dvt.$CSSStyle$.$COLOR$, $handler$$43$$))
    }, $endAlign_endColor$$17$$)
  }
  $endX$$1_oldStyle_startSize$$ = parseFloat($endX$$1_oldStyle_startSize$$.$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$));
  $endSize_endY$$1_startX$$5_style$$90$$ = parseFloat($endSize_endY$$1_startX$$5_style$$90$$.$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$));
  $endX$$1_oldStyle_startSize$$ != $endSize_endY$$1_startX$$5_style$$90$$ && ($bSizeChange_startY$$5$$ = $JSCompiler_alias_TRUE$$, $tag$$ = this, this.$setFontSize$($endX$$1_oldStyle_startSize$$), $anim$$37$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, function() {
    return parseFloat($tag$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$))
  }, this.$setFontSize$, $endSize_endY$$1_startX$$5_style$$90$$));
  $endSize_endY$$1_startX$$5_style$$90$$ = $oldObj$$1$$.$getX$();
  $endX$$1_oldStyle_startSize$$ = this.$getX$();
  $startAlign_startColor$$14$$ = $oldObj$$1$$.$getHorizAlignment$();
  $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
  if($endX$$1_oldStyle_startSize$$ != $endSize_endY$$1_startX$$5_style$$90$$ || $bSizeChange_startY$$5$$ && $endAlign_endColor$$17$$ != $startAlign_startColor$$14$$) {
    $endAlign_endColor$$17$$ != $startAlign_startColor$$14$$ && ($endSize_endY$$1_startX$$5_style$$90$$ = $DvtTagCloudItem$_adjustX$$($oldObj$$1$$, $endSize_endY$$1_startX$$5_style$$90$$, $startAlign_startColor$$14$$)), this.$setX$($endSize_endY$$1_startX$$5_style$$90$$), $anim$$37$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getX$, this.$setX$, $endX$$1_oldStyle_startSize$$)
  }
  $bSizeChange_startY$$5$$ = $oldObj$$1$$.$getY$();
  $endSize_endY$$1_startX$$5_style$$90$$ = this.$getY$();
  $endSize_endY$$1_startX$$5_style$$90$$ != $bSizeChange_startY$$5$$ && (this.$setY$($bSizeChange_startY$$5$$), $anim$$37$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getY$, this.$setY$, $endSize_endY$$1_startX$$5_style$$90$$));
  $oldObj$$1$$.$setAlpha$(0);
  $handler$$43$$.add($anim$$37$$, 1)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$44$$) {
  $handler$$44$$.add(new dvt.$AnimFadeOut$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 0)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$45$$) {
  this.$setAlpha$(0);
  $handler$$45$$.add(new dvt.$AnimFadeIn$(this.$getCtx$(), this, $DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 2)
};
$JSCompiler_prototypeAlias$$.$setFontSize$ = function $$JSCompiler_prototypeAlias$$$$setFontSize$$($size$$37$$) {
  $DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $size$$37$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$$(this, this.$getCSSStyle$())
};
function $JSCompiler_StaticMethods__createFeedbackStyles$$($JSCompiler_StaticMethods__createFeedbackStyles$self$$, $style$$91$$) {
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$ = $style$$91$$.$clone$();
  var $color$$64_hoverSelectedColor$$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$getStyle$(dvt.$CSSStyle$.$COLOR$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$setStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  var $hoverColor$$5$$ = $DvtTagCloudItem$_lightenColor$$($color$$64_hoverSelectedColor$$, 0.3);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$, $hoverColor$$5$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$(dvt.$CSSStyle$.$COLOR$, dvt.$ColorUtils$.$getContrastingTextColor$($hoverColor$$5$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$, $color$$64_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$(dvt.$CSSStyle$.$COLOR$, dvt.$ColorUtils$.$getContrastingTextColor$($color$$64_hoverSelectedColor$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $color$$64_hoverSelectedColor$$ = $DvtTagCloudItem$_lightenColor$$($color$$64_hoverSelectedColor$$, 0.6);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$, $color$$64_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$(dvt.$CSSStyle$.$COLOR$, dvt.$ColorUtils$.$getContrastingTextColor$($color$$64_hoverSelectedColor$$))
}
function $DvtTagCloudItem$_adjustX$$($dims$$52_tag$$1$$, $x$$182$$, $hAlign$$3$$) {
  $dims$$52_tag$$1$$ = $dims$$52_tag$$1$$.$getTextDimensions$();
  return $hAlign$$3$$ == dvt.$OutputText$.$H_ALIGN_LEFT$ ? $x$$182$$ + $dims$$52_tag$$1$$.$w$ : $hAlign$$3$$ == dvt.$OutputText$.$H_ALIGN_RIGHT$ ? $x$$182$$ - $dims$$52_tag$$1$$.$w$ : $x$$182$$
}
function $DvtTagCloudItem$_lightenColor$$($color$$65$$, $opacity$$2$$) {
  var $r$$63$$ = dvt.$ColorUtils$.$getRed$($color$$65$$), $g$$9$$ = dvt.$ColorUtils$.$getGreen$($color$$65$$), $b$$34$$ = dvt.$ColorUtils$.$getBlue$($color$$65$$);
  return dvt.$ColorUtils$.$makeRGB$(Math.floor(255 * (1 - $opacity$$2$$) + $opacity$$2$$ * $r$$63$$), Math.floor(255 * (1 - $opacity$$2$$) + $opacity$$2$$ * $g$$9$$), Math.floor(255 * (1 - $opacity$$2$$) + $opacity$$2$$ * $b$$34$$))
}
function $DvtTagCloudObjPeer$$($tagCloud$$2$$, $displayable$$62$$, $data$$92$$) {
  this.Init($tagCloud$$2$$, $displayable$$62$$, $data$$92$$)
}
dvt.$Obj$.$createSubclass$($DvtTagCloudObjPeer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTagCloudObjPeer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$3$$, $displayable$$63$$, $data$$93$$) {
  this.$_view$ = $tagCloud$$3$$;
  this.$_displayable$ = $displayable$$63$$;
  this.$_data$ = $data$$93$$;
  this.$_bSelectable$ = this.$_isSelected$ = $JSCompiler_alias_FALSE$$;
  $data$$93$$.url ? ($displayable$$63$$.$setAriaRole$("link"), this.$_linkCallback$ = dvt.$ToolkitUtils$.$getLinkCallback$("_blank", $data$$93$$.url)) : $displayable$$63$$.$setAriaRole$("img");
  this.$_updateAriaLabel$()
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_data$.label
};
$JSCompiler_prototypeAlias$$.getValue = function $$JSCompiler_prototypeAlias$$$getValue$() {
  return this.$_data$.value
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$8$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$8$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($tooltipFunc$$8$$, this.$getDataContext$()) : this.$getShortDesc$()
};
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()}
};
$JSCompiler_prototypeAlias$$.$getLinkCallback$ = $JSCompiler_get$$("$_linkCallback$");
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  this.$_dataColor$ || (this.$_dataColor$ = (new dvt.$CSSStyle$(this.$_data$.style)).$getStyle$(dvt.$CSSStyle$.$COLOR$));
  return this.$_dataColor$
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = $JSCompiler_set$$("$_bSelectable$");
$JSCompiler_prototypeAlias$$.$isSelectable$ = $JSCompiler_get$$("$_bSelectable$");
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$9$$) {
  this.$_isSelected$ = $bSelected$$9$$;
  this.$_displayable$.$setSelected$($bSelected$$9$$);
  this.$_updateAriaLabel$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_displayable$.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_displayable$.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$) {
  var $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
  $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$.type == dvt.$MouseEvent$.$CLICK$ || $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$.$isMultiSelectEvent$($bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$) ? $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$ = this : $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$.$isNavigationEvent$($bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$) ? 
  ($JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$ = this.$_view$.$getObjects$(), $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$ = $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$.keyCode == dvt.$KeyboardEvent$.$RIGHT_ARROW$ || $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$ = dvt.$ArrayUtils$.$getIndex$($JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$, 
  this) + ($bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$ ? 1 : -1), $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$ = $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$ < $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$.length && 0 <= $bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$ ? $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$[$bNext$$inline_3892_event$$470_nextIdx$$inline_3893$$] : 
  $JSCompiler_alias_NULL$$) : $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$ = $JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$286_JSCompiler_temp$$287_keyboardHandler$$8_navigableItems$$inline_3891$$
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$33$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$33$$)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$15$$ = [];
  this.$isSelectable$() && $states$$15$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$15$$)
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  dvt.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_data$.showPopupBehaviors)) {
    for(var $spbs$$4$$ = this.$_data$.showPopupBehaviors, $si$$ = 0;$si$$ < $spbs$$4$$.length;$si$$++) {
      this.$_showPopupBehaviors$.push(new dvt.$ShowPopupBehavior$($spbs$$4$$[$si$$].popupId, $spbs$$4$$[$si$$].triggerType, $spbs$$4$$[$si$$].alignId, $spbs$$4$$[$si$$].align))
    }
  }
  return this.$_showPopupBehaviors$
};
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$16$$) {
  return this.$_view$.$SelectionHandler$ ? $clientIds$$16$$[0] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  var $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$ = this.$_view$;
  this.$isSelected$() || ($JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$.$SelectionHandler$.$processClick$(this, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$.$EventManager$.$fireSelectionEvent$());
  for(var $rowKeys$$inline_3897$$ = [], $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$.$SelectionHandler$.getSelection(), $i$$inline_3899$$ = 0;$i$$inline_3899$$ < $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$.length;$i$$inline_3899$$++) {
    var $item$$inline_3900$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_3895_selection$$inline_3898$$[$i$$inline_3899$$];
    $item$$inline_3900$$ instanceof $DvtTagCloudObjPeer$$ && $rowKeys$$inline_3897$$.push($item$$inline_3900$$.getId())
  }
  return $rowKeys$$inline_3897$$
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$getDragFeedback$()
};
function $DvtTagCloudDefaults$$() {
  this.Init({alta:$DvtTagCloudDefaults$VERSION_1$$})
}
dvt.$Obj$.$createSubclass$($DvtTagCloudDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtTagCloudDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:$JSCompiler_alias_NULL$$, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", _statusMessageStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #333333;"), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + 
"color: #333333;")}, touchResponse:"auto"}, $DvtTagCloudRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTagCloudRenderer$$, dvt.$Obj$);
$DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($tagCloud$$4$$, $container$$167$$, $availSpace$$115$$) {
  $DvtTagCloudRenderer$$.$_renderBackground$($tagCloud$$4$$, $container$$167$$, $availSpace$$115$$);
  $DvtTagCloudRenderer$$.$_renderLegend$($tagCloud$$4$$, $container$$167$$, $availSpace$$115$$);
  $DvtTagCloudRenderer$$.$_adjustAvailSpace$($availSpace$$115$$);
  var $items$$32_options$$249$$ = $tagCloud$$4$$.$getOptions$();
  $items$$32_options$$249$$.items && 0 < $items$$32_options$$249$$.items.length ? ($items$$32_options$$249$$ = $DvtTagCloudRenderer$$.$_renderItems$($tagCloud$$4$$, $container$$167$$, $availSpace$$115$$), 0 < $items$$32_options$$249$$.length ? ($tagCloud$$4$$.$registerItems$($items$$32_options$$249$$), $tagCloud$$4$$.$EventManager$.$setFocusObj$($tagCloud$$4$$.$getObjects$()[0])) : $DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$167$$, $availSpace$$115$$)) : $DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, 
  $container$$167$$, $availSpace$$115$$)
};
$DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($tagCloud$$5$$, $container$$168$$, $availSpace$$116$$) {
  var $options$$250$$ = $tagCloud$$5$$.$getOptions$(), $emptyTextStr$$3$$ = $options$$250$$.emptyText;
  $emptyTextStr$$3$$ || ($emptyTextStr$$3$$ = dvt.$Bundle$.$getTranslation$($options$$250$$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$));
  dvt.$TextUtils$.$renderEmptyText$($container$$168$$, $emptyTextStr$$3$$, new dvt.$Rectangle$($availSpace$$116$$.x, $availSpace$$116$$.y, $availSpace$$116$$.$w$, $availSpace$$116$$.$h$), $tagCloud$$5$$.$EventManager$, $options$$250$$._statusMessageStyle)
};
$DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($rect$$36_tagCloud$$6$$, $container$$169$$, $availSpace$$117$$) {
  $rect$$36_tagCloud$$6$$ = new dvt.$Rect$($rect$$36_tagCloud$$6$$.$getCtx$(), $availSpace$$117$$.x, $availSpace$$117$$.y, $availSpace$$117$$.$w$, $availSpace$$117$$.$h$);
  $rect$$36_tagCloud$$6$$.$setInvisibleFill$();
  $container$$169$$.$addChild$($rect$$36_tagCloud$$6$$)
};
$DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($tagCloud$$7$$, $container$$170$$, $availSpace$$118$$) {
  for(var $options$$251$$ = $tagCloud$$7$$.$getOptions$(), $items$$33$$ = [], $dataItems$$2$$ = $options$$251$$.items, $fontSizeFunction_minValue$$12$$ = Number.MAX_VALUE, $categoryMap$$2_maxValue$$13$$ = -Number.MAX_VALUE, $i$$564$$ = 0;$i$$564$$ < $dataItems$$2$$.length;$i$$564$$++) {
    $fontSizeFunction_minValue$$12$$ = Math.min($fontSizeFunction_minValue$$12$$, $dataItems$$2$$[$i$$564$$].value), $categoryMap$$2_maxValue$$13$$ = Math.max($categoryMap$$2_maxValue$$13$$, $dataItems$$2$$[$i$$564$$].value)
  }
  $fontSizeFunction_minValue$$12$$ = $DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$12$$, $categoryMap$$2_maxValue$$13$$);
  $categoryMap$$2_maxValue$$13$$ = dvt.$ArrayUtils$.$createBooleanMap$($options$$251$$.hiddenCategories);
  for($i$$564$$ = 0;$i$$564$$ < $dataItems$$2$$.length;$i$$564$$++) {
    var $data$$94$$ = $dataItems$$2$$[$i$$564$$];
    $data$$94$$.categories || ($data$$94$$.categories = [$data$$94$$.label]);
    if(!$categoryMap$$2_maxValue$$13$$ || !dvt.$ArrayUtils$.$hasAnyMapItem$($categoryMap$$2_maxValue$$13$$, $data$$94$$.categories)) {
      var $item$$47_style$$92$$ = $options$$251$$.styleDefaults.style.$clone$(), $color$$66_peer$$32$$ = $data$$94$$.color;
      $color$$66_peer$$32$$ && $item$$47_style$$92$$.$setStyle$(dvt.$CSSStyle$.$COLOR$, $color$$66_peer$$32$$);
      $item$$47_style$$92$$.$parseInlineStyle$($data$$94$$.style);
      $item$$47_style$$92$$.$setStyle$(dvt.$CSSStyle$.$FONT_SIZE$, $fontSizeFunction_minValue$$12$$.call($JSCompiler_alias_NULL$$, $data$$94$$.value).toString());
      $item$$47_style$$92$$ = new $DvtTagCloudItem$$($tagCloud$$7$$, $tagCloud$$7$$.$getCtx$(), $data$$94$$.label, 0, 0, $item$$47_style$$92$$, $data$$94$$.id);
      $color$$66_peer$$32$$ = new $DvtTagCloudObjPeer$$($tagCloud$$7$$, $item$$47_style$$92$$, $data$$94$$);
      $tagCloud$$7$$.$EventManager$.$associate$($item$$47_style$$92$$, $color$$66_peer$$32$$);
      $tagCloud$$7$$.$registerObject$($color$$66_peer$$32$$, $i$$564$$);
      "none" !== $options$$251$$.selectionMode && $color$$66_peer$$32$$.$setSelectable$($JSCompiler_alias_TRUE$$);
      ($color$$66_peer$$32$$.$isSelectable$() || $data$$94$$.url || $color$$66_peer$$32$$.$getAction$()) && $item$$47_style$$92$$.setCursor("pointer");
      $items$$33$$.push($item$$47_style$$92$$);
      $container$$170$$.$addChild$($item$$47_style$$92$$)
    }
  }
  0 < $items$$33$$.length && ("cloud" === $options$$251$$.layout ? $DvtTagCloudLayoutUtils$$.$cloudLayout$($availSpace$$118$$, $items$$33$$) : $DvtTagCloudLayoutUtils$$.$rectangleLayout$($availSpace$$118$$, $items$$33$$, dvt.$Agent$.$isRightToLeft$($tagCloud$$7$$.$getCtx$())));
  return $items$$33$$
};
$DvtTagCloudRenderer$$.$_renderLegend$ = function $$DvtTagCloudRenderer$$$$_renderLegend$$($tagCloud$$8$$, $container$$171$$, $availSpace$$119$$) {
  var $legend$$30_options$$252$$ = $tagCloud$$8$$.$getOptions$(), $legendData$$6_legendOptions$$9$$ = $legend$$30_options$$252$$.legend;
  if($legendData$$6_legendOptions$$9$$ && $legendData$$6_legendOptions$$9$$.sections) {
    $legendData$$6_legendOptions$$9$$ = dvt.$JsonUtils$.$clone$($legendData$$6_legendOptions$$9$$);
    $legendData$$6_legendOptions$$9$$.orientation = "horizontal";
    $legendData$$6_legendOptions$$9$$.halign = "center";
    $legendData$$6_legendOptions$$9$$.hoverBehavior = $legend$$30_options$$252$$.hoverBehavior;
    $legendData$$6_legendOptions$$9$$.hideAndShowBehavior = $legend$$30_options$$252$$.hideAndShowBehavior;
    $legendData$$6_legendOptions$$9$$.hiddenCategories = $legend$$30_options$$252$$.hiddenCategories;
    $legend$$30_options$$252$$ = dvt.$Legend$.newInstance($tagCloud$$8$$.$getCtx$(), $tagCloud$$8$$.$processEvent$, $tagCloud$$8$$);
    $container$$171$$.$addChild$($legend$$30_options$$252$$);
    var $preferredSize$$7$$ = $legend$$30_options$$252$$.$getPreferredSize$($legendData$$6_legendOptions$$9$$, $availSpace$$119$$.$w$, $availSpace$$119$$.$h$ / 3);
    $legend$$30_options$$252$$.$render$($legendData$$6_legendOptions$$9$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$);
    dvt.$LayoutUtils$.position($availSpace$$119$$, "bottom", $legend$$30_options$$252$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$, 0);
    $tagCloud$$8$$.$legend$ && ($tagCloud$$8$$.$legend$.$destroy$(), $container$$171$$.removeChild($tagCloud$$8$$.$legend$));
    $tagCloud$$8$$.$legend$ = $legend$$30_options$$252$$
  }
};
$DvtTagCloudRenderer$$.$_adjustAvailSpace$ = function $$DvtTagCloudRenderer$$$$_adjustAvailSpace$$($availSpace$$120$$) {
  $availSpace$$120$$.x = Math.round($availSpace$$120$$.x);
  $availSpace$$120$$.y = Math.round($availSpace$$120$$.y);
  $availSpace$$120$$.$w$ = Math.round($availSpace$$120$$.$w$);
  $availSpace$$120$$.$h$ = Math.round($availSpace$$120$$.$h$)
};
function $DvtTagCloudLayoutUtils$$() {
}
dvt.$Obj$.$createSubclass$($DvtTagCloudLayoutUtils$$, dvt.$Obj$);
$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($minValue$$13$$, $maxValue$$14$$) {
  return function($value$$157$$) {
    return 12 + Math.ceil(12 * (2 * ($value$$157$$ - $minValue$$13$$) / ($maxValue$$14$$ - $minValue$$13$$)))
  }
};
$DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($availSpace$$121$$, $items$$34$$) {
  var $positions$$2_scale$$51$$ = [], $cx$$34_xrStep$$ = 10 / 180, $fontSize$$8_yrStep$$ = 10 / 180;
  $availSpace$$121$$.$w$ > $availSpace$$121$$.$h$ ? $cx$$34_xrStep$$ *= $availSpace$$121$$.$w$ / $availSpace$$121$$.$h$ : $fontSize$$8_yrStep$$ *= $availSpace$$121$$.$h$ / $availSpace$$121$$.$w$;
  for(var $thetaStep$$1$$ = 2 * Math.PI / 180, $bounds$$117_cy$$35$$ = $JSCompiler_alias_NULL$$, $maxFontSize$$ = 0, $cosCache$$ = [], $sinCache$$ = [], $i$$565$$ = 0;$i$$565$$ < $items$$34$$.length;$i$$565$$++) {
    for(var $placed$$ = $JSCompiler_alias_FALSE$$, $step$$4$$ = 0, $stepIncrement$$ = 4, $tag$$2$$ = $items$$34$$[$i$$565$$], $dims$$53$$ = $tag$$2$$.$getDimensions$(), $maxFontSize$$ = Math.max($maxFontSize$$, parseFloat($tag$$2$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$))), $lastCollisionIndex$$ = -1;!$placed$$;) {
      var $j$$80_lookup$$ = $step$$4$$ % 180;
      $cosCache$$[$j$$80_lookup$$] === $JSCompiler_alias_VOID$$ && ($cosCache$$[$j$$80_lookup$$] = Math.cos($step$$4$$ * $thetaStep$$1$$));
      $sinCache$$[$j$$80_lookup$$] === $JSCompiler_alias_VOID$$ && ($sinCache$$[$j$$80_lookup$$] = Math.sin($step$$4$$ * $thetaStep$$1$$));
      var $x$$183$$ = $cx$$34_xrStep$$ * $step$$4$$ * $cosCache$$[$j$$80_lookup$$], $y$$159$$ = $fontSize$$8_yrStep$$ * $step$$4$$ * $sinCache$$[$j$$80_lookup$$], $rect$$37$$ = new dvt.$Rectangle$($x$$183$$, $y$$159$$, $dims$$53$$.$w$, $dims$$53$$.$h$), $placed$$ = $JSCompiler_alias_TRUE$$;
      -1 != $lastCollisionIndex$$ && $positions$$2_scale$$51$$[$lastCollisionIndex$$].$intersects$($rect$$37$$) && ($placed$$ = $JSCompiler_alias_FALSE$$);
      if($placed$$) {
        for($j$$80_lookup$$ = 0;$j$$80_lookup$$ < $i$$565$$;$j$$80_lookup$$++) {
          if($positions$$2_scale$$51$$[$j$$80_lookup$$].$intersects$($rect$$37$$)) {
            $lastCollisionIndex$$ = $j$$80_lookup$$;
            $placed$$ = $JSCompiler_alias_FALSE$$;
            break
          }
        }
      }
      $placed$$ && ($bounds$$117_cy$$35$$ = $bounds$$117_cy$$35$$ ? $bounds$$117_cy$$35$$.$getUnion$($rect$$37$$) : $rect$$37$$, $lastCollisionIndex$$ = -1, $positions$$2_scale$$51$$[$i$$565$$] = $rect$$37$$, $tag$$2$$.$setX$($x$$183$$), $tag$$2$$.$setY$(-$dims$$53$$.y + $y$$159$$));
      3600 === $step$$4$$ ? $stepIncrement$$ = 3 : 5400 === $step$$4$$ ? $stepIncrement$$ = 2 : 10800 === $step$$4$$ && ($stepIncrement$$ = 1);
      $step$$4$$ += $stepIncrement$$
    }
  }
  $positions$$2_scale$$51$$ = Math.max($bounds$$117_cy$$35$$.$w$ / $availSpace$$121$$.$w$, $bounds$$117_cy$$35$$.$h$ / $availSpace$$121$$.$h$);
  $cx$$34_xrStep$$ = $bounds$$117_cy$$35$$.x + $bounds$$117_cy$$35$$.$w$ / 2;
  $bounds$$117_cy$$35$$ = $bounds$$117_cy$$35$$.y + $bounds$$117_cy$$35$$.$h$ / 2;
  for($j$$80_lookup$$ = 0;$j$$80_lookup$$ < $items$$34$$.length;$j$$80_lookup$$++) {
    $tag$$2$$ = $items$$34$$[$j$$80_lookup$$], $tag$$2$$.$setX$($availSpace$$121$$.x + $tag$$2$$.$getX$() / $positions$$2_scale$$51$$ + ($availSpace$$121$$.$w$ / 2 - $cx$$34_xrStep$$ / $positions$$2_scale$$51$$)), $tag$$2$$.$setY$($availSpace$$121$$.y + $tag$$2$$.$getY$() / $positions$$2_scale$$51$$ + ($availSpace$$121$$.$h$ / 2 - $bounds$$117_cy$$35$$ / $positions$$2_scale$$51$$)), $fontSize$$8_yrStep$$ = parseFloat($tag$$2$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$)), $tag$$2$$.$setFontSize$($fontSize$$8_yrStep$$ / 
    $positions$$2_scale$$51$$)
  }
};
$DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($availSpace$$122$$, $items$$35$$, $isBidi$$) {
  for(var $arDims$$1$$ = [], $maxWidth$$21_scale$$52$$ = 0, $maxHeight$$12$$ = 0, $arLines_maxFontSize$$1$$ = 0, $i$$566_minScale$$3$$ = 0;$i$$566_minScale$$3$$ < $items$$35$$.length;$i$$566_minScale$$3$$++) {
    var $lineWidth$$7_maxScale_tag$$3$$ = $items$$35$$[$i$$566_minScale$$3$$], $dims$$54_lineStart$$ = $lineWidth$$7_maxScale_tag$$3$$.$getDimensions$(), $maxWidth$$21_scale$$52$$ = Math.max($maxWidth$$21_scale$$52$$, $dims$$54_lineStart$$.$w$), $maxHeight$$12$$ = Math.max($maxHeight$$12$$, $dims$$54_lineStart$$.$h$), $arLines_maxFontSize$$1$$ = Math.max($arLines_maxFontSize$$1$$, parseFloat($lineWidth$$7_maxScale_tag$$3$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$)));
    $arDims$$1$$.push(new dvt.$Dimension$($dims$$54_lineStart$$.$w$, $dims$$54_lineStart$$.$h$))
  }
  $i$$566_minScale$$3$$ = 0;
  for($lineWidth$$7_maxScale_tag$$3$$ = ($availSpace$$122$$.$w$ - 10) / $maxWidth$$21_scale$$52$$;0.001 < $lineWidth$$7_maxScale_tag$$3$$ - $i$$566_minScale$$3$$;) {
    $maxWidth$$21_scale$$52$$ = ($i$$566_minScale$$3$$ + $lineWidth$$7_maxScale_tag$$3$$) / 2, $arLines_maxFontSize$$1$$ = $DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$122$$.$w$ - 10) / $maxWidth$$21_scale$$52$$), $arLines_maxFontSize$$1$$.length * ($maxWidth$$21_scale$$52$$ * $maxHeight$$12$$ + 2) - 2 > $availSpace$$122$$.$h$ - 10 ? $lineWidth$$7_maxScale_tag$$3$$ = $maxWidth$$21_scale$$52$$ : $i$$566_minScale$$3$$ = $maxWidth$$21_scale$$52$$
  }
  $maxWidth$$21_scale$$52$$ = $i$$566_minScale$$3$$;
  $arLines_maxFontSize$$1$$ = $DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$122$$.$w$ - 10) / $maxWidth$$21_scale$$52$$);
  $arLines_maxFontSize$$1$$.push($items$$35$$.length);
  for($i$$566_minScale$$3$$ = 0;$i$$566_minScale$$3$$ < $arLines_maxFontSize$$1$$.length - 1;$i$$566_minScale$$3$$++) {
    var $dims$$54_lineStart$$ = $arLines_maxFontSize$$1$$[$i$$566_minScale$$3$$], $lineEnd$$ = $arLines_maxFontSize$$1$$[$i$$566_minScale$$3$$ + 1], $hPadding$$1$$ = 0, $bottomY$$1_maxLineHeight$$ = 0, $justified$$ = $JSCompiler_alias_TRUE$$;
    if(1 < $lineEnd$$ - $dims$$54_lineStart$$) {
      for(var $lineWidth$$7_maxScale_tag$$3$$ = 0, $flowPadding_j$$81$$ = $dims$$54_lineStart$$;$flowPadding_j$$81$$ < $lineEnd$$;$flowPadding_j$$81$$++) {
        $lineWidth$$7_maxScale_tag$$3$$ += $arDims$$1$$[$flowPadding_j$$81$$].$w$ * $maxWidth$$21_scale$$52$$, $bottomY$$1_maxLineHeight$$ = Math.max($bottomY$$1_maxLineHeight$$, $arDims$$1$$[$flowPadding_j$$81$$].$h$ * $maxWidth$$21_scale$$52$$)
      }
      $hPadding$$1$$ = ($availSpace$$122$$.$w$ - 10 - $lineWidth$$7_maxScale_tag$$3$$) / ($lineEnd$$ - $dims$$54_lineStart$$ - 1);
      $i$$566_minScale$$3$$ == $arLines_maxFontSize$$1$$.length - 2 && ($flowPadding_j$$81$$ = 0.5 * $bottomY$$1_maxLineHeight$$, $flowPadding_j$$81$$ < $hPadding$$1$$ && $lineWidth$$7_maxScale_tag$$3$$ + ($lineEnd$$ - $dims$$54_lineStart$$) * $flowPadding_j$$81$$ < 0.9 * ($availSpace$$122$$.$w$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$81$$, $justified$$ = $JSCompiler_alias_FALSE$$))
    }
    for(var $bottomY$$1_maxLineHeight$$ = 5 + ($i$$566_minScale$$3$$ + 1) * ($maxHeight$$12$$ * $maxWidth$$21_scale$$52$$ + 2) - 2, $curX$$2$$ = $isBidi$$ ? $availSpace$$122$$.$w$ - 5 : 5, $flowPadding_j$$81$$ = $dims$$54_lineStart$$;$flowPadding_j$$81$$ < $lineEnd$$;$flowPadding_j$$81$$++) {
      var $lineWidth$$7_maxScale_tag$$3$$ = $items$$35$$[$flowPadding_j$$81$$], $fontSize$$9$$ = parseFloat($lineWidth$$7_maxScale_tag$$3$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$FONT_SIZE$));
      $lineWidth$$7_maxScale_tag$$3$$.$setFontSize$($fontSize$$9$$ * $maxWidth$$21_scale$$52$$);
      $lineWidth$$7_maxScale_tag$$3$$.$setY$($availSpace$$122$$.y + $bottomY$$1_maxLineHeight$$);
      $justified$$ && $flowPadding_j$$81$$ == $lineEnd$$ - 1 && $flowPadding_j$$81$$ != $dims$$54_lineStart$$ ? $isBidi$$ ? ($lineWidth$$7_maxScale_tag$$3$$.$alignLeft$(), $lineWidth$$7_maxScale_tag$$3$$.$setX$($availSpace$$122$$.x + 5)) : ($lineWidth$$7_maxScale_tag$$3$$.$alignRight$(), $lineWidth$$7_maxScale_tag$$3$$.$setX$($availSpace$$122$$.x + $availSpace$$122$$.$w$ - 5)) : ($lineWidth$$7_maxScale_tag$$3$$.$setX$($availSpace$$122$$.x + $curX$$2$$), $isBidi$$ ? ($lineWidth$$7_maxScale_tag$$3$$.$alignRight$(), 
      $curX$$2$$ -= $arDims$$1$$[$flowPadding_j$$81$$].$w$ * $maxWidth$$21_scale$$52$$ + $hPadding$$1$$) : ($lineWidth$$7_maxScale_tag$$3$$.$alignLeft$(), $curX$$2$$ += $arDims$$1$$[$flowPadding_j$$81$$].$w$ * $maxWidth$$21_scale$$52$$ + $hPadding$$1$$))
    }
  }
};
$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($arDims$$2$$, $width$$119$$) {
  var $lines$$ = [0], $curWidth$$ = $arDims$$2$$[0].$w$ + 2;
  if(1 < $arDims$$2$$.length) {
    for(var $i$$567$$ = 1;$i$$567$$ < $arDims$$2$$.length;$i$$567$$++) {
      $curWidth$$ + $arDims$$2$$[$i$$567$$].$w$ > $width$$119$$ && ($lines$$.push($i$$567$$), $curWidth$$ = 0), $curWidth$$ += $arDims$$2$$[$i$$567$$].$w$ + 2
    }
  }
  return $lines$$
};
var $DvtTagCloudStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTagCloudStyleUtils$$, dvt.$Obj$);
$DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($tagCloud$$9$$) {
  return $tagCloud$$9$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
function $DvtTagCloudEventManager$$($view$$55$$, $context$$368$$, $callback$$112$$, $callbackObj$$78$$) {
  this.Init($context$$368$$, $callback$$112$$, $callbackObj$$78$$);
  this.$_view$ = $view$$55$$
}
dvt.$Obj$.$createSubclass$($DvtTagCloudEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtTagCloudEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$471_obj$$190$$) {
  $event$$471_obj$$190$$ = this.$GetLogicalObject$($event$$471_obj$$190$$.target);
  $JSCompiler_StaticMethods__handleLinkCallback$$($event$$471_obj$$190$$);
  this.$_processActionEvent$($event$$471_obj$$190$$)
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$472_obj$$191$$) {
  $event$$472_obj$$191$$ = this.$GetLogicalObject$($event$$472_obj$$191$$.target);
  this.$_processActionEvent$($event$$472_obj$$191$$)
};
$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$473_obj$$192$$) {
  $event$$473_obj$$192$$ = this.$GetLogicalObject$($event$$473_obj$$192$$.target);
  $JSCompiler_StaticMethods__handleLinkCallback$$($event$$473_obj$$192$$);
  this.$_processActionEvent$($event$$473_obj$$192$$)
};
function $JSCompiler_StaticMethods__handleLinkCallback$$($callback$$113_obj$$193$$) {
  $callback$$113_obj$$193$$ instanceof $DvtTagCloudObjPeer$$ && ($callback$$113_obj$$193$$ = $callback$$113_obj$$193$$.$getLinkCallback$()) && $callback$$113_obj$$193$$.call()
}
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$474$$) {
  var $eventConsumed$$4$$ = $JSCompiler_alias_TRUE$$, $focusObj$$1$$ = this.$getFocus$();
  $event$$474$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ ? $JSCompiler_StaticMethods__handleLinkCallback$$($focusObj$$1$$) : $eventConsumed$$4$$ = $DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$474$$);
  return $eventConsumed$$4$$
};
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$475_options$$253$$, $categories$$24_hoverBehaviorDelay$$5_obj$$194$$, $bOver$$11_rolloverEvent$$6$$) {
  $event$$475_options$$253$$ = this.$_view$.$getOptions$();
  "dim" == $event$$475_options$$253$$.hoverBehavior && ($categories$$24_hoverBehaviorDelay$$5_obj$$194$$ = $categories$$24_hoverBehaviorDelay$$5_obj$$194$$.$getCategories$ ? $categories$$24_hoverBehaviorDelay$$5_obj$$194$$.$getCategories$() : [], $event$$475_options$$253$$.highlightedCategories = $bOver$$11_rolloverEvent$$6$$ ? $categories$$24_hoverBehaviorDelay$$5_obj$$194$$.slice() : $JSCompiler_alias_NULL$$, $bOver$$11_rolloverEvent$$6$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$475_options$$253$$.highlightedCategories, 
  $bOver$$11_rolloverEvent$$6$$), $categories$$24_hoverBehaviorDelay$$5_obj$$194$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($event$$475_options$$253$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$11_rolloverEvent$$6$$, this.$_view$.$getObjects$(), $categories$$24_hoverBehaviorDelay$$5_obj$$194$$, "any" == $event$$475_options$$253$$.highlightMatch))
};
$JSCompiler_prototypeAlias$$.$_processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processActionEvent$$($obj$$195$$) {
  $obj$$195$$ && ($obj$$195$$.$getAction$ && $obj$$195$$.$getAction$()) && this.$FireEvent$(dvt.$EventFactory$.$newActionEvent$("action", $obj$$195$$.$getAction$(), $obj$$195$$.getId()))
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
function $DvtTagCloudKeyboardHandler$$($manager$$24$$) {
  this.Init($manager$$24$$)
}
dvt.$Obj$.$createSubclass$($DvtTagCloudKeyboardHandler$$, dvt.$KeyboardHandler$);
$DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($manager$$25$$) {
  $DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $manager$$25$$)
};
$DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($event$$476$$) {
  return this.$isNavigationEvent$($event$$476$$) && !$event$$476$$.ctrlKey
};
$DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($event$$477$$) {
  return $event$$477$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$477$$.ctrlKey
};
function $DvtTagCloudDropTarget$$() {
}
dvt.$Obj$.$createSubclass$($DvtTagCloudDropTarget$$, dvt.$DropTarget$);
$DvtTagCloudDropTarget$$.prototype.$acceptDrag$ = function $$DvtTagCloudDropTarget$$$$$acceptDrag$$($mouseX$$38$$, $mouseY$$38$$, $clientIds$$17$$) {
  return $clientIds$$17$$[0]
};

  return dvt;
});
