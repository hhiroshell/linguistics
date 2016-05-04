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

(function($dvt$$6$$) {
  function $DvtControlPanelEventManager$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  }
  function $DvtControlPanelEvent$$($dvt$$6$$) {
    this.Init($DvtControlPanelEvent$$.$TYPE$);
    this.$_subtype$ = $dvt$$6$$
  }
  function $DvtPanControl$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  }
  function $DropdownItemSprite$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  }
  $dvt$$6$$.$ComboBox$ = function $$dvt$$6$$$$ComboBox$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ComboBox$, $dvt$$6$$.$Container$);
  $dvt$$6$$.$ComboBox$.$_HIDE_DROPDOWN_DELAY$ = 100;
  $dvt$$6$$.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$ = 100;
  $dvt$$6$$.$ComboBox$.prototype.Init = function $$dvt$$6$$$$ComboBox$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$6$$.$ComboBox$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$);
    this.$_styleMap$ = $DvtPanControl$$;
    this.$_itemButtonStates$ = [];
    this.$_items$ = [];
    this.$_tooltips$ = [];
    this.$_selectedIndex$ = 0;
    this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = $JSCompiler_alias_FALSE$$;
    this.$_maxItemDim$ = new $dvt$$6$$.$Rectangle$(0, 0, 0, 0);
    this.$_itemDim$ = new $dvt$$6$$.$Rectangle$(0, 0, 0, 0);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_isTouchDevice$ = $dvt$$6$$.$Agent$.$isTouchDevice$();
    this.$_button$ = this.$createButton$($DvtControlPanelEvent$$ + "_cl");
    this.$addChild$(this.$_button$);
    this.$_contentArea$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    this.$_contentArea$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$addChild$(this.$_contentArea$);
    this.$_hideDropdownTimer$ = new $dvt$$6$$.$Timer$($DvtControlPanelEventManager$$, $dvt$$6$$.$ComboBox$.$_HIDE_DROPDOWN_DELAY$, this.$HandleHideDropdownTimer$, this, 1);
    this.$_outOfFocusCheckTimer$ = new $dvt$$6$$.$Timer$($DvtControlPanelEventManager$$, $dvt$$6$$.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$, this.$HandleOutOfFocusCheckTimer$, this, 1);
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_FALSE$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$setSelectedIndex$ = function $$dvt$$6$$$$ComboBox$$$$setSelectedIndex$$($dvt$$6$$) {
    this.$_selectedIndex$ = $dvt$$6$$;
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$();
    this.$FireChangeEvent$($dvt$$6$$)
  };
  $dvt$$6$$.$ComboBox$.prototype.$createButton$ = function $$dvt$$6$$$$ComboBox$$$$createButton$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Button$(this.$getCtx$(), this.$createUpState$($DvtControlPanelEventManager$$), this.$createDownState$($DvtControlPanelEventManager$$), this.$createOverState$($DvtControlPanelEventManager$$), $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_isTouchDevice$ || $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEDOWN$, this.$HandleButtonDown$, $JSCompiler_alias_FALSE$$, this);
    $DvtControlPanelEventManager$$.$setToggleEnabled$();
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$createUpState$ = function $$dvt$$6$$$$ComboBox$$$$createUpState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$6$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setInvisibleFill$();
    $DvtControlPanelEventManager$$.$addChild$($dvt$$6$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$createOverState$ = function $$dvt$$6$$$$ComboBox$$$$createOverState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$6$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$6$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$(0, [$dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_DARK$, $dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$]));
    $DvtControlPanelEventManager$$.$addChild$($dvt$$6$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$createDownState$ = function $$dvt$$6$$$$ComboBox$$$$createDownState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$6$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$(0, [$dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$, $dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_DARK$]));
    $DvtControlPanelEventManager$$.$setCornerRadius$($dvt$$6$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$addChild$($dvt$$6$$.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$setStaticButtonStates$ = function $$dvt$$6$$$$ComboBox$$$$setStaticButtonStates$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_button$.$setUpState$($dvt$$6$$);
    this.$_button$.$setDownState$($DvtControlPanelEvent$$);
    this.$_button$.$setOverState$($DvtControlPanelEventManager$$);
    this.$_bStaticButtonStates$ = $JSCompiler_alias_TRUE$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$addItem$ = function $$dvt$$6$$$$ComboBox$$$$addItem$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_items$.push($DvtControlPanelEventManager$$);
    this.$_tooltips$.push($DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), $DvtPanControl$$ ? $DvtPanControl$$ : $DvtControlPanelEventManager$$);
    var $maxItemDim$$ = this.$_maxItemDim$;
    $DvtControlPanelEvent$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $DvtControlPanelEvent$$.$w$, this.$_itemDim$.$w$ = $DvtControlPanelEvent$$.$w$ + 16);
    $DvtControlPanelEvent$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $DvtControlPanelEvent$$.$h$, this.$_itemDim$.$h$ = $DvtControlPanelEvent$$.$h$);
    this.$_maxItemDim$ = $maxItemDim$$;
    $DvtControlPanelEvent$$ = $JSCompiler_alias_NULL$$;
    $DvtPanControl$$ && ($DropdownItemSprite$$ && $DvtControlPanelDefaults$$) && ($DvtControlPanelEvent$$ = [], $DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_ENABLED$] = $DvtPanControl$$, $DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_OVER$] = $DropdownItemSprite$$, $DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_DOWN$] = $DvtControlPanelDefaults$$);
    this.$_itemButtonStates$.push($DvtControlPanelEvent$$);
    this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = this.$createButton$($DvtControlPanelEventManager$$.getId()), this.$addChildAt$(this.$_button$, 0), this.$UpdateContentArea$())
  };
  $dvt$$6$$.$ComboBox$.prototype.getItem = function $$dvt$$6$$$$ComboBox$$$getItem$($dvt$$6$$) {
    return this.$_items$[$dvt$$6$$]
  };
  $dvt$$6$$.$ComboBox$.prototype.$getItemCount$ = function $$dvt$$6$$$$ComboBox$$$$getItemCount$$() {
    return this.$_items$.length
  };
  $dvt$$6$$.$ComboBox$.prototype.$getSelectedItem$ = function $$dvt$$6$$$$ComboBox$$$$getSelectedItem$$() {
    var $dvt$$6$$ = this.$_selectedIndex$;
    return 0 > $dvt$$6$$ || $dvt$$6$$ > this.$_items$.length - 1 ? $JSCompiler_alias_NULL$$ : this.$_items$[$dvt$$6$$]
  };
  $dvt$$6$$.$ComboBox$.prototype.$FireChangeEvent$ = function $$dvt$$6$$$$ComboBox$$$$FireChangeEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$ComboBoxEvent$($dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$, $DvtControlPanelEventManager$$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleExpandClick$ = function $$dvt$$6$$$$ComboBox$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bRemoveDropdown$ && this.$RemoveDropdown$();
    $DvtControlPanelEventManager$$ = this.$getCtx$();
    this.$_dropdown$ = this.$createDropdown$();
    var $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_dropdown$);
    this.$addChild$(this.$_dropdown$);
    var $DvtPanControl$$ = this.$_button$.$getDimensions$(), $DvtControlPanelEvent$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) ? -$DvtControlPanelEvent$$.$w$ + 1 * $DvtPanControl$$.$w$ / 4 : 3 * $DvtPanControl$$.$w$ / 4;
    this.$_dropdown$.$setTranslate$($DvtControlPanelEvent$$, 3 * $DvtPanControl$$.$h$ / 4);
    this.$_button$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_button$.$setToggled$($JSCompiler_alias_TRUE$$);
    this.$FireListener$(new $dvt$$6$$.$ComboBoxEvent$($dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$));
    ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$_stage$) && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this) : $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEUP$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this))
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleHideDropdownTimer$ = function $$dvt$$6$$$$ComboBox$$$$HandleHideDropdownTimer$$() {
    this.$HideDropdown$();
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$()
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleStageMouseFocusChange$ = function $$dvt$$6$$$$ComboBox$$$$HandleStageMouseFocusChange$$() {
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_FALSE$$;
    this.$_outOfFocusCheckTimer$.reset();
    this.$_outOfFocusCheckTimer$.start()
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleOutOfFocusCheckTimer$ = function $$dvt$$6$$$$ComboBox$$$$HandleOutOfFocusCheckTimer$$() {
    this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
  };
  $dvt$$6$$.$ComboBox$.prototype.$createDropdown$ = function $$dvt$$6$$$$ComboBox$$$$createDropdown$$() {
    function $DvtControlPanelEventManager$$($dvt$$6$$) {
      return{$HandleClick$:function($dvt$$6$$) {
        $thisRef$$33$$.$HandleDropdownItemClick$($dvt$$6$$)
      }, $HandleMouseDown$:function() {
        $thisRef$$33$$.$HandleButtonDown$()
      }, $getTooltip$:function() {
        return $dvt$$6$$
      }}
    }
    for(var $DvtControlPanelEvent$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : $JSCompiler_alias_NULL$$, $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_TOP$, 0), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_LEFT$, 0), $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_BOTTOM$, 
    0), $bgColor$$10_rightPadding$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_RIGHT$, 0), $bgAlpha_interItemPadding$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $currY$$11$$ = $DvtPanControl$$, $context$$266$$ = this.$getCtx$(), $dim$$55$$, $itemSprite$$2$$, $item$$39$$, $DvtPanControl$$ = new $dvt$$6$$.$Container$($context$$266$$, "__dd"), $thisRef$$33$$ = this, $i$$537$$ = 
    0;$i$$537$$ < this.$_items$.length;$i$$537$$++) {
      $item$$39$$ = this.$_items$[$i$$537$$], $dim$$55$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($context$$266$$, $item$$39$$), $itemSprite$$2$$ = new $dvt$$6$$.$Container$($context$$266$$, "__it" + $i$$537$$), $itemSprite$$2$$.$setTranslate$($DropdownItemSprite$$, $currY$$11$$), $itemSprite$$2$$.$addChild$($item$$39$$), $item$$39$$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), $item$$39$$.setCursor("pointer"), $currY$$11$$ += $dim$$55$$.$h$ + $bgAlpha_interItemPadding$$, this.$_eventManager$ && 
      this.$_eventManager$.$associate$($item$$39$$, $DvtControlPanelEventManager$$(this.$_tooltips$[$i$$537$$])), $DvtPanControl$$.$addChild$($itemSprite$$2$$)
    }
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$drawDropdownShape$($context$$266$$, this.$_maxItemDim$.$w$ + $DropdownItemSprite$$ + $bgColor$$10_rightPadding$$, $currY$$11$$ + $DvtControlPanelDefaults$$ - $bgAlpha_interItemPadding$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.$addChild$($DvtPanControl$$);
    $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
    $bgColor$$10_rightPadding$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $bgAlpha_interItemPadding$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$BG_ALPHA$, 1);
    $DvtControlPanelEvent$$.$setSolidStroke$($DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    $bgColor$$10_rightPadding$$ && $DvtControlPanelEvent$$.$setSolidFill$($bgColor$$10_rightPadding$$, $bgAlpha_interItemPadding$$);
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleButtonDown$ = function $$dvt$$6$$$$ComboBox$$$$HandleButtonDown$$() {
    $dvt$$6$$.$EventManager$.$consumeEvent$()
  };
  $dvt$$6$$.$ComboBox$.prototype.$HandleDropdownItemClick$ = function $$dvt$$6$$$$ComboBox$$$$HandleDropdownItemClick$$($DvtControlPanelEventManager$$) {
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_TRUE$$;
    this.$_hideDropdownTimer$.stop();
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = $dvt$$6$$.$ComboBox$.$getRootDropdownItemSprite$($DvtControlPanelEventManager$$.target);
    var $DvtControlPanelEvent$$;
    if(this.$_dropdown$ && $DvtControlPanelEventManager$$) {
      var $DvtPanControl$$ = this.$_dropdown$.$getChildAt$(0);
      $DvtPanControl$$ && ($DvtControlPanelEvent$$ = $DvtPanControl$$.$getChildIndex$($DvtControlPanelEventManager$$))
    }
    this.$HideDropdown$();
    this.$setSelectedIndex$($DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ComboBox$.$getRootDropdownItemSprite$ = function $$dvt$$6$$$$ComboBox$$$getRootDropdownItemSprite$$($DvtControlPanelEventManager$$) {
    for(var $DvtControlPanelEvent$$, $DvtPanControl$$;$DvtControlPanelEventManager$$;) {
      if(($DvtPanControl$$ = $DvtControlPanelEventManager$$.getId()) && $DvtControlPanelEventManager$$ instanceof $dvt$$6$$.$Container$ && "__it" == $DvtPanControl$$.substr(0, 4)) {
        $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$;
        break
      }
      $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getParent()
    }
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$HideDropdown$ = function $$dvt$$6$$$$ComboBox$$$$HideDropdown$$() {
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_button$.$setToggled$($JSCompiler_alias_FALSE$$), this.$FireListener$(new $dvt$$6$$.$ComboBoxEvent$($dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$)), this.$_bRemoveDropdown$ = $JSCompiler_alias_TRUE$$);
    var $DvtControlPanelEventManager$$ = this.$getCtx$().$_stage$;
    $DvtControlPanelEventManager$$ && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this) : $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEUP$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this));
    this.$_button$.$setMouseEnabled$($JSCompiler_alias_TRUE$$)
  };
  $dvt$$6$$.$ComboBox$.prototype.$RemoveDropdown$ = function $$dvt$$6$$$$ComboBox$$$$RemoveDropdown$$() {
    this.$_bRemoveDropdown$ = $JSCompiler_alias_FALSE$$;
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = $JSCompiler_alias_NULL$$)
  };
  $dvt$$6$$.$ComboBox$.prototype.$getDimensions$ = function $$dvt$$6$$$$ComboBox$$$$getDimensions$$() {
    return this.$_button$ != $JSCompiler_alias_NULL$$ ? this.$_button$.$getDimensions$() : new $dvt$$6$$.$Rectangle$(0, 0, 0, 0)
  };
  $dvt$$6$$.$ComboBox$.prototype.$getItems$ = $JSCompiler_get$$("$_items$");
  $dvt$$6$$.$ComboBox$.prototype.$UpdateContentArea$ = function $$dvt$$6$$$$ComboBox$$$$UpdateContentArea$$() {
    var $DvtControlPanelEventManager$$ = $JSCompiler_alias_TRUE$$, $DvtControlPanelEvent$$ = this.$_selectedIndex$;
    if(this.$_itemButtonStates$ && this.$_itemButtonStates$.length > $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = this.$_itemButtonStates$[$DvtControlPanelEvent$$]) && 2 < $DvtControlPanelEvent$$.length) {
      this.$_button$.$setUpState$($DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_ENABLED$]), this.$_button$.$setOverState$($DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_OVER$]), this.$_button$.$setDownState$($DvtControlPanelEvent$$[$dvt$$6$$.$Button$.$STATE_DOWN$]), $DvtControlPanelEventManager$$ = $JSCompiler_alias_FALSE$$
    }
    $DvtControlPanelEventManager$$ && (0 < this.$_contentArea$.$getNumChildren$() && this.$_contentArea$.$removeChildAt$(0), this.$_contentArea$.$addChild$(this.$getSelectedItem$()))
  };
  $dvt$$6$$.$ComboBox$.$DrawArrow$ = function $$dvt$$6$$$$ComboBox$$$DrawArrow$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = [];
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 4, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 8, $DvtPanControl$$ / 2 + 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Polygon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$6$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setSolidFill$($dvt$$6$$.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ComboBox$.prototype.$closeDropdown$ = function $$dvt$$6$$$$ComboBox$$$$closeDropdown$$() {
    this.$HideDropdown$()
  };
  $dvt$$6$$.$ComboBox$.prototype.$setEventManager$ = $JSCompiler_set$$("$_eventManager$");
  $dvt$$6$$.$Obj$.$createSubclass$($DropdownItemSprite$$, $dvt$$6$$.$Rect$);
  $DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$Rect$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ComboBoxEvent$ = function $$dvt$$6$$$$ComboBoxEvent$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ComboBoxEvent$.$TYPE$ = "comboBoxEvent";
  $dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$ = "cbItemChange";
  $dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$ = "cbShowDropdown";
  $dvt$$6$$.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$ = "cbHideDropdown";
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ComboBoxEvent$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$ComboBoxEvent$.prototype.Init = function $$dvt$$6$$$$ComboBoxEvent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.type = $dvt$$6$$.$ComboBoxEvent$.$TYPE$;
    $DvtControlPanelEvent$$ === $JSCompiler_alias_VOID$$ && ($DvtControlPanelEvent$$ = -1);
    this.$subtype$ = $DvtControlPanelEventManager$$;
    this.$_index$ = $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ComboBoxEvent$.prototype.$getIndex$ = $JSCompiler_get$$("$_index$");
  $DvtPanControl$$.$PAN_TIMER_INTERVAL$ = 50;
  $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ = 2 * (1E3 / $DvtPanControl$$.$PAN_TIMER_INTERVAL$);
  $dvt$$6$$.$Obj$.$createSubclass$($DvtPanControl$$, $dvt$$6$$.$Container$);
  $DvtPanControl$$.prototype.Init = function $$DvtPanControl$$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $control$$1$$, $styleMap$$52$$) {
    $DvtPanControl$$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_panTimer$ = new $dvt$$6$$.$Timer$($DvtControlPanelEventManager$$, $DvtPanControl$$.$PAN_TIMER_INTERVAL$, this.$HandlePanTimer$, this);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_bPanMouseDown$ = $JSCompiler_alias_FALSE$$;
    this.$_panZoomCanvas$ = $DvtControlPanelDefaults$$;
    this.$_panCenter$ = new $dvt$$6$$.$Point$(20, 20);
    this.$_controls$ = $control$$1$$ ? $control$$1$$ : $dvt$$6$$.$ControlPanel$.$CONTROLS_ALL$;
    $DvtControlPanelEvent$$.$addChild$($DropdownItemSprite$$);
    $DropdownItemSprite$$ && (this.$_panCenterSprite$ = $DropdownItemSprite$$, this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$HandlePanCenterClick$, $JSCompiler_alias_FALSE$$, this), $dvt$$6$$.$Agent$.$isTouchDevice$() || (this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$CLICK$, this.$HandlePanCenterClick$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEDOWN$, 
    this.$HandlePanCenterDown$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEUP$, this.$HandlePanCenterUp$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$HandlePanCenterRollOver$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$HandlePanCenterRollOut$, $JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEMOVE$, 
    this.$HandlePanCenterMouseMove$, $JSCompiler_alias_FALSE$$, this));
    this.$_panButton$ = $DvtControlPanelEvent$$;
    this.$_panButton$.$addEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$HandlePanClick$, $JSCompiler_alias_FALSE$$, this);
    $dvt$$6$$.$Agent$.$isTouchDevice$() || (this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$CLICK$, this.$HandlePanClick$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEDOWN$, this.$HandlePanMouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEUP$, this.$HandlePanMouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$HandlePanRollOver$, 
    $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$HandlePanRollOut$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEMOVE$, this.$HandlePanMouseMove$, $JSCompiler_alias_FALSE$$, this));
    this.$_panControl$ = $dvt$$6$$.$ButtonLAFUtils$.$createPanButtonBackground$($DvtControlPanelEventManager$$, $styleMap$$52$$);
    this.$_panControl$.$addChild$(this.$_panButton$);
    this.$addChild$(this.$_panControl$)
  };
  $DvtPanControl$$.prototype.$HandlePanClick$ = function $$DvtPanControl$$$$$HandlePanClick$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanMouseDown$ = function $$DvtPanControl$$$$$HandlePanMouseDown$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ = $JSCompiler_alias_TRUE$$;
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$);
    this.$_panMousePoint$ = new $dvt$$6$$.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y);
    this.$_panTimer$.start();
    this.$_panTimerCount$ = 0
  };
  $DvtPanControl$$.prototype.$HandlePanMouseUp$ = function $$DvtPanControl$$$$$HandlePanMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bPanMouseDown$ && ($dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$), this.$_bPanMouseDown$ = $JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
    this.$_panButton$.$_mouseOutHandler$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$()
  };
  $DvtPanControl$$.prototype.$HandlePanRollOver$ = function $$DvtPanControl$$$$$HandlePanRollOver$$($DvtControlPanelEventManager$$) {
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$);
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_PAN"), $DvtControlPanelEventManager$$.target)
  };
  $DvtPanControl$$.prototype.$HandlePanRollOut$ = function $$DvtPanControl$$$$$HandlePanRollOut$$($dvt$$6$$) {
    this.$HandlePanMouseUp$($dvt$$6$$);
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$)
  };
  $DvtPanControl$$.prototype.$HandlePanMouseMove$ = function $$DvtPanControl$$$$$HandlePanMouseMove$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ ? (this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new $dvt$$6$$.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y)) : this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$overState$)
  };
  $DvtPanControl$$.prototype.$HandlePanTimer$ = function $$DvtPanControl$$$$$HandlePanTimer$$() {
    if(this.$_bPanMouseDown$) {
      var $dvt$$6$$ = Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $DvtControlPanelEventManager$$ = Math.cos($dvt$$6$$), $dvt$$6$$ = Math.sin($dvt$$6$$), $DvtControlPanelEvent$$ = 15;
      this.$_panTimerCount$++;
      this.$_panTimerCount$ > $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ && ($DvtControlPanelEvent$$ *= 3);
      this.$_panZoomCanvas$.$panBy$($DvtControlPanelEvent$$ * $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ * $dvt$$6$$)
    }
  };
  $DvtPanControl$$.prototype.$HandlePanCenterClick$ = function $$DvtPanControl$$$$$HandlePanCenterClick$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_panZoomCanvas$.$zoomAndCenter$()
  };
  $DvtPanControl$$.prototype.$HandlePanCenterDown$ = function $$DvtPanControl$$$$$HandlePanCenterDown$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterUp$ = function $$DvtPanControl$$$$$HandlePanCenterUp$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$()
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOver$ = function $$DvtPanControl$$$$$HandlePanCenterRollOver$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, $dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMANDCENTER"), $DvtControlPanelEventManager$$.target);
    this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$);
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOut$ = function $$DvtPanControl$$$$$HandlePanCenterRollOut$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$hideTooltip$();
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterMouseMove$ = function $$DvtPanControl$$$$$HandlePanCenterMouseMove$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$_rotatePanControlDirectionalArrow$ = function $$DvtPanControl$$$$$_rotatePanControlDirectionalArrow$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $DvtControlPanelEvent$$.$setRotation$(Math.atan2($DvtControlPanelEventManager$$ - this.$_panCenter$.y, $dvt$$6$$ - this.$_panCenter$.x) - Math.PI / 4)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtControlPanelEvent$$, $dvt$$6$$.$BaseComponentEvent$);
  $DvtControlPanelEvent$$.$TYPE$ = "dvtPZCPExpand";
  $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ = "show";
  $DvtControlPanelEvent$$.$SUBTYPE_HIDE$ = "hide";
  $DvtControlPanelEvent$$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  $dvt$$6$$.$ControlPanel$ = function $$dvt$$6$$$$ControlPanel$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ControlPanel$, $dvt$$6$$.$Container$);
  $dvt$$6$$.$ControlPanel$.$STATE_COLLAPSED$ = 1;
  $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$ = 2;
  $dvt$$6$$.$ControlPanel$.$CONTROLS_ALL$ = 16777215;
  $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM_SLIDER$ = 1;
  $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ = 16;
  $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$ = 256;
  $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM$ = 4097;
  $dvt$$6$$.$ControlPanel$.$DEFAULT_ZOOM_LEVELS$ = [0, 0.25, 0.5, 0.75, 1];
  $dvt$$6$$.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$ = "controlPanelBehavior";
  $dvt$$6$$.$ControlPanel$.$BG_ALPHA$ = "backgroundAlpha";
  $dvt$$6$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$ = "backgroundHoverAlpha";
  $dvt$$6$$.$ControlPanel$.$BG_DRAG_ALPHA$ = "backgroundDragAlpha";
  $dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$ = "borderAlpha";
  $dvt$$6$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$ = "borderHoverAlpha";
  $dvt$$6$$.$ControlPanel$.$FRAME_DRAG_ALPHA$ = "borderDragAlpha";
  $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$ = "buttonWidth";
  $dvt$$6$$.$ControlPanel$.$CP_BUTTON_HEIGHT$ = "buttonHeight";
  $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$ = "openCloseButtonWidth";
  $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$ = "tabSize";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_TOP$ = "paddingTop";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_SIDE$ = "paddingSide";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_BOTTOM$ = "paddingBottom";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_LEFT$ = "paddingLeft";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_RIGHT$ = "paddingRight";
  $dvt$$6$$.$ControlPanel$.$CP_PADDING_INNER$ = "paddingInner";
  $dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$ = "panelDrawerStyles";
  $dvt$$6$$.$ControlPanel$.$CP_IMAGE_WIDTH$ = "imageWidth";
  $dvt$$6$$.$ControlPanel$.$CP_IMAGE_HEIGHT$ = "imageHeight";
  $dvt$$6$$.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$ = "centerButtonDisplayed";
  $dvt$$6$$.$ControlPanel$.prototype.Init = function $$dvt$$6$$$$ControlPanel$$$Init$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $dvt$$6$$.$ControlPanel$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_bMouseOver$ = this.$_bMouseDragPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_panZoomCanvas$ = $DvtPanControl$$.$_panZoomCanvas$;
    this.$_controls$ = $DvtPanControl$$.$_displayedControls$;
    this.$_buttonImages$ = $DvtPanControl$$.$getResourcesMap$();
    this.$_tooltipManager$ = $DvtControlPanelEvent$$.$getTooltipManager$();
    this.$_styleMap$ = $JSCompiler_alias_NULL$$;
    if(this.$_view$ = $DvtPanControl$$) {
      this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$] || (this.$_controls$ &= ~$dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$_view$.$setDisplayedControls$(this.$_controls$))
    }
    this.$_zoomLevels$ = $dvt$$6$$.$ControlPanel$.$DEFAULT_ZOOM_LEVELS$;
    this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
    this.$_bgAlpha$ = this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_ALPHA$];
    this.$_eventManager$ = new $DvtControlPanelEventManager$$($DvtControlPanelEvent$$, $JSCompiler_alias_NULL$$, $DvtPanControl$$);
    this.$_eventManager$.$addRolloverType$($dvt$$6$$.$ControlPanel$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$associate$(this, this);
    this.$_state$ = $DropdownItemSprite$$;
    this.$tabChildren$ = $JSCompiler_alias_FALSE$$;
    this.$setPixelHinting$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$mouseDragPanningStarted$ = function $$dvt$$6$$$$ControlPanel$$$$mouseDragPanningStarted$$() {
    this.$_bMouseDragPanning$ = $JSCompiler_alias_TRUE$$;
    this.$_background$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_frame$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_background$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_DRAG_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_DRAG_ALPHA$])
  };
  $dvt$$6$$.$ControlPanel$.prototype.$mouseDragPanningEnded$ = function $$dvt$$6$$$$ControlPanel$$$$mouseDragPanningEnded$$() {
    this.$_bMouseDragPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_background$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$_frame$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$_bMouseOver$ ? this.$HandleRollOver$($JSCompiler_alias_NULL$$) : this.$HandleRollOut$($JSCompiler_alias_NULL$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$isSingleHorzRow$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
  $dvt$$6$$.$ControlPanel$.prototype.$getViewPanelHeight$ = function $$dvt$$6$$$$ControlPanel$$$$getViewPanelHeight$$() {
    var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEventManager$$ = this.$isSingleHorzRow$() ? $dvt$$6$$.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$() : $dvt$$6$$.$ControlPanelLAFUtils$.$getViewPanelHeight$(), $DvtControlPanelEvent$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$, 0);
    return Math.max($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$getViewPanelWidth$ = function $$dvt$$6$$$$ControlPanel$$$$getViewPanelWidth$$() {
    return $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$, 0)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$RenderCollapsed$ = function $$dvt$$6$$$$ControlPanel$$$$RenderCollapsed$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$), $DvtPanControl$$ = this.$getViewPanelHeight$(), $DropdownItemSprite$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    this.$_background$ = $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_frame$ = $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_collapsedDim$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_frame$);
    this.$_expandButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, $DropdownItemSprite$$ ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_expandButton$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_expandButton$.$setTooltip$($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_expandButton$, this.$_expandButton$);
    this.$_frame$.$addChild$(this.$_expandButton$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_addZoomToFitButton$ = function $$dvt$$6$$$$ControlPanel$$$$_addZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$)) {
      var $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_LEFT$, 0);
      this.$_zoomToFitButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createZoomToFitButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomToFitButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomToFitButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomToFitButton$.$setCallback$(this.$HandleZoomToFitClick$, this);
      this.$_zoomToFitButton$.$setTooltip$($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMTOFIT"));
      this.$_eventManager$.$associate$(this.$_zoomToFitButton$, this.$_zoomToFitButton$);
      $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomToFitButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomToFitButton$);
      $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$h$;
      $DvtControlPanelEvent$$ += $DvtPanControl$$
    }
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_addZoomControls$ = function $$dvt$$6$$$$ControlPanel$$$$_addZoomControls$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_LEFT$, 0);
    if(0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM$)) {
      this.$_zoomInButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createZoomInButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomInButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomInButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomInButton$.$setCallback$(this.$HandleZoomInClick$, this);
      this.$_zoomInButton$.$setTooltip$($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMIN"));
      this.$_eventManager$.$associate$(this.$_zoomInButton$, this.$_zoomInButton$);
      var $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomInButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomInButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$ + $DvtPanControl$$;
      this.$_zoomOutButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createZoomOutButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomOutButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomOutButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomOutButton$.$setCallback$(this.$HandleZoomOutClick$, this);
      this.$_zoomOutButton$.$setTooltip$($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMOUT"));
      this.$_eventManager$.$associate$(this.$_zoomOutButton$, this.$_zoomOutButton$);
      $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomOutButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomOutButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$;
      this.$enableZoomControls$()
    }
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_createVBarBackground$ = function $$dvt$$6$$$$ControlPanel$$$$_createVBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = this.$getCtx$();
    if($DvtControlPanelEvent$$) {
      var $nVertContentBarChildren_roundedCorner$$ = $DvtControlPanelEvent$$.$getNumChildren$(), $nVertContentBarChildren_roundedCorner$$ = 1 < $nVertContentBarChildren_roundedCorner$$ || this.$_zoomToFitButton$ == $JSCompiler_alias_NULL$$ || 1 < $DvtPanControl$$ || 0 < $DvtPanControl$$ && 1 == $nVertContentBarChildren_roundedCorner$$, $openside$$ = $JSCompiler_alias_NULL$$;
      this.$_styleMap$ && this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && ($openside$$ = 0 < $DvtPanControl$$ ? $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_TOP$ : $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$);
      $DvtControlPanelEventManager$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelDefaults$$, $DvtControlPanelEventManager$$);
      $DropdownItemSprite$$ += 4;
      $DropdownItemSprite$$ = $nVertContentBarChildren_roundedCorner$$ ? $DropdownItemSprite$$ : Math.max($DvtControlPanelEventManager$$.$h$, $DropdownItemSprite$$);
      $DvtControlPanelEventManager$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_BOTTOM$, 0);
      $DropdownItemSprite$$ += $DvtControlPanelEventManager$$;
      $DvtControlPanelEventManager$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$renderEmptyZoomShape$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelDefaults$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, $nVertContentBarChildren_roundedCorner$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$.$getTranslateX$(), $DvtControlPanelEvent$$.$getTranslateY$());
      this.$_background$.$addChild$($DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$.$addChildAt$($DvtControlPanelDefaults$$, 0)
    }
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_positionVBarElements$ = function $$dvt$$6$$$$ControlPanel$$$$_positionVBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    !this.$_additionalContent$ && 0 == (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) ? $DropdownItemSprite$$ ? ($DvtControlPanelEventManager$$.$setTranslateX$(0 - $DvtControlPanelEventManager$$.$getTranslateX$()), $DvtControlPanelEventManager$$.$setTranslateY$(0), $DvtControlPanelEvent$$ && ($DvtControlPanelEventManager$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$() - $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$.$setTranslateY$(0))) : $DvtControlPanelEvent$$ ? 
    ($DvtPanControl$$ = this.$getViewPanelWidth$(), $DvtControlPanelEvent$$.$setTranslate$(0, 0), $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $DvtPanControl$$, 0)) : $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$(), 0) : $DropdownItemSprite$$ && $DvtControlPanelEvent$$ && ($DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, $DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 
    this.$getViewPanelWidth$(), $DvtControlPanelEventManager$$.$setTranslateX$(0), $DvtControlPanelEvent$$.$setTranslateX$($DvtPanControl$$.$w$ + $DvtPanControl$$.x - $DropdownItemSprite$$))
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_createHBarPanControl$ = function $$dvt$$6$$$$ControlPanel$$$$_createHBarPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = this.$isSingleHorzRow$();
    0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && (this.$_panControl$ = $dvt$$6$$.$ButtonLAFUtils$.$createPanControl$($DvtPanControl$$, this.$_panZoomCanvas$, this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $DropdownItemSprite$$ && (this.$_panControlUnderlay$ = $dvt$$6$$.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), this.$_panControlUnderlay2$ = $dvt$$6$$.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), 
    $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay2$), $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay$)), $DvtControlPanelEventManager$$.$addChild$(this.$_panControl$), $DvtControlPanelEvent$$++);
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_createHBarAdditionalContent$ = function $$dvt$$6$$$$ControlPanel$$$$_createHBarAdditionalContent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_additionalContent$ = new $dvt$$6$$.$Container$(this.$getCtx$());
    this.$PopulateHorzContentBar$(this.$_additionalContent$);
    0 < this.$_additionalContent$.$getNumChildren$() ? ($DvtControlPanelEventManager$$.$addChild$(this.$_additionalContent$), $DvtControlPanelEvent$$++) : this.$_additionalContent$ = $JSCompiler_alias_NULL$$;
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_createHBarCollapseButton$ = function $$dvt$$6$$$$ControlPanel$$$$_createHBarCollapseButton$$($DvtControlPanelEventManager$$) {
    this.$_collapseButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, $dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_collapseButton$.$setCallback$(this.$HandleCollapseClick$, this);
    this.$_collapseButton$.$setTooltip$($dvt$$6$$.$Bundle$.$getTranslatedString$($dvt$$6$$.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_collapseButton$, this.$_collapseButton$);
    $DvtControlPanelEventManager$$.$addChild$(this.$_collapseButton$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_positionHBarElements$ = function $$dvt$$6$$$$ControlPanel$$$$_positionHBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_context$, $DropdownItemSprite$$ = $JSCompiler_alias_NULL$$, $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $buttonWidth$$4$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $panelWidth$$ = this.$getViewPanelWidth$(), $panelHeight$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, 
    $dvt$$6$$.$ControlPanel$.$CP_PADDING_LEFT$, 0), $buttonPaddingInner$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_INNER$, 0);
    $DvtControlPanelEventManager$$ ? (this.$_collapseButton$.$setTranslateX$(0), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$, this.$_additionalContent$ && ($DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$, this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += Math.max($DropdownItemSprite$$.$w$, 
    $buttonWidth$$4$$)), this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingInner$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, 
    this.$_panControl$), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$), $DvtControlPanelEvent$$ += $buttonPaddingSide$$) : (this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($buttonPaddingSide$$, 
    $DropdownItemSprite$$), $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_panControl$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$ + $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ += 1), this.$_additionalContent$ && ($DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), 0 == $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$), this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, 
    ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$ + $buttonPaddingInner$$, $panelWidth$$)), this.$_collapseButton$.$setTranslateX$($DvtControlPanelEvent$$), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$);
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_createHBarBackground$ = function $$dvt$$6$$$$ControlPanel$$$$_createHBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $context$$280$$ = this.$_context$, $buttonWidth$$5_viewFrame$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $panelWidth$$1$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $panelDrawerStyle$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$ = $panelDrawerStyle$$ ? $DvtControlPanelDefaults$$ : $DvtControlPanelDefaults$$ - $buttonWidth$$5_viewFrame$$;
    var $backgroundHeight$$1$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$ = 0, $backgroundShapeOffsetX$$ = 0;
    $panelDrawerStyle$$ ? $panelDrawerStyle$$ && 0 == $DvtPanControl$$ && ($backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? -$panelWidth$$1$$ : $panelWidth$$1$$) : ($backgroundFrameOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0, $backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0);
    if(0 < $DvtPanControl$$ || $panelDrawerStyle$$) {
      var $r$$37_viewShape$$ = $buttonWidth$$5_viewFrame$$ = $JSCompiler_alias_NULL$$, $r$$37_viewShape$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0));
      $panelDrawerStyle$$ ? ($DvtControlPanelEvent$$ = 0 < $DvtPanControl$$ && $DvtControlPanelEvent$$ != $JSCompiler_alias_NULL$$ ? $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ : $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_LEFT$, $buttonWidth$$5_viewFrame$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$280$$, $r$$37_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$), $r$$37_viewShape$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$280$$, 
      $r$$37_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$)) : ($buttonWidth$$5_viewFrame$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$280$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, this.$_styleMap$), $r$$37_viewShape$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$280$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, 
      this.$_styleMap$));
      $buttonWidth$$5_viewFrame$$.$setSolidStroke$($dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
      $buttonWidth$$5_viewFrame$$.$setFill$($JSCompiler_alias_NULL$$);
      $buttonWidth$$5_viewFrame$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundFrameOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      $DvtControlPanelEventManager$$.$addChildAt$($buttonWidth$$5_viewFrame$$, 0);
      $r$$37_viewShape$$.$setSolidFill$($dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
      $r$$37_viewShape$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundShapeOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      this.$_background$.$addChild$($r$$37_viewShape$$)
    }
  };
  $dvt$$6$$.$ControlPanel$.prototype.$RenderExpanded$ = function $$dvt$$6$$$$ControlPanel$$$$RenderExpanded$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    this.$_background$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    this.$_frame$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    var $DvtPanControl$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 0, $DvtControlPanelDefaults$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$), $nHorzContentBarChildren$$4$$;
    $nHorzContentBarChildren$$4$$ = this.$_createHBarPanControl$($DvtControlPanelDefaults$$, 0);
    this.$_createHBarCollapseButton$($DvtControlPanelDefaults$$);
    $nHorzContentBarChildren$$4$$ = this.$_createHBarAdditionalContent$($DvtControlPanelDefaults$$, $nHorzContentBarChildren$$4$$);
    var $DropdownItemSprite$$ = this.$_positionHBarElements$($DvtPanControl$$, $DropdownItemSprite$$), $vertContentBar$$5$$ = $JSCompiler_alias_NULL$$, $currY$$16$$ = this.$_getVBarButtonsOffsetY$($nHorzContentBarChildren$$4$$);
    this.$isSingleHorzRow$() && 0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && ($currY$$16$$ += $dvt$$6$$.$ControlPanelLAFUtils$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
    if(0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$) || 0 != (this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_ZOOM$)) {
      $vertContentBar$$5$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$), $vertContentBar$$5$$.$setTranslateY$($DvtControlPanelDefaults$$.$getTranslateY$() + this.$getViewPanelHeight$()), $currY$$16$$ = this.$_addZoomToFitButton$($vertContentBar$$5$$, $currY$$16$$), $currY$$16$$ = this.$_addZoomControls$($vertContentBar$$5$$, $currY$$16$$), this.$_frame$.$addChild$($vertContentBar$$5$$)
    }
    this.$_createHBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $DvtPanControl$$, $DropdownItemSprite$$);
    this.$_frame$.$addChild$($DvtControlPanelDefaults$$);
    this.$_positionVBarElements$($DvtControlPanelDefaults$$, $vertContentBar$$5$$);
    this.$_createVBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $currY$$16$$);
    this.$_expandedDim$ = $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$PopulateHorzContentBar$ = $JSCompiler_emptyFn$$();
  $dvt$$6$$.$ControlPanel$.prototype.$toggleExpandCollapse$ = function $$dvt$$6$$$$ControlPanel$$$$toggleExpandCollapse$$() {
    this.$_bTransition$ || (this.$_state$ === $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$ ? this.$_doCollapse$() : this.$_state$ === $dvt$$6$$.$ControlPanel$.$STATE_COLLAPSED$ && this.$_doExpand$())
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleExpandClick$ = function $$dvt$$6$$$$ControlPanel$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || (this.$_doExpand$(), this.$_tooltipManager$.$hideTooltip$())
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_doExpand$ = function $$dvt$$6$$$$ControlPanel$$$$_doExpand$$() {
    this.$_bTransition$ = $JSCompiler_alias_TRUE$$;
    this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    var $dvt$$6$$ = this.$RenderExpanded$();
    this.$addChild$($dvt$$6$$);
    this.$_applyAlphasForMouse$();
    this.$transitionExpand$(this.$getChildAt$(0), $dvt$$6$$);
    this.$fireExpandEvent$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_applyAlphasForMouse$ = function $$dvt$$6$$$$ControlPanel$$$$_applyAlphasForMouse$$() {
    var $dvt$$6$$ = $JSCompiler_alias_FALSE$$;
    this.$getCtx$().$_stage$ && ($dvt$$6$$ = $JSCompiler_alias_TRUE$$);
    $dvt$$6$$ ? this.$_applyAlphasRollover$() : this.$_applyAlphasRollout$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleCollapseClick$ = function $$dvt$$6$$$$ControlPanel$$$$HandleCollapseClick$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || this.$_doCollapse$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_doCollapse$ = function $$dvt$$6$$$$ControlPanel$$$$_doCollapse$$() {
    this.$_bTransition$ = $JSCompiler_alias_TRUE$$;
    var $dvt$$6$$ = this.$RenderCollapsed$();
    this.$addChild$($dvt$$6$$);
    this.$_applyAlphasForMouse$();
    this.$transitionCollapse$(this.$getChildAt$(0), $dvt$$6$$);
    this.$fireCollapseEvent$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$transitionExpand$ = function $$dvt$$6$$$$ControlPanel$$$$transitionExpand$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getDimensions$(), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    if($DvtPanControl$$ && 0 != $DvtPanControl$$.$w$) {
      var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getDimensions$(), $animator$$108$$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), 0.25);
      $DvtControlPanelEventManager$$.$setAlpha$(1);
      $DvtControlPanelEvent$$.$setAlpha$(0);
      $animator$$108$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
      $animator$$108$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
      $DvtControlPanelEvent$$.$setScaleX$($DvtPanControl$$.$w$ / $DvtControlPanelDefaults$$.$w$);
      $animator$$108$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleX$, $DvtControlPanelEvent$$.$setScaleX$, 1);
      if($dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$())) {
        $DvtControlPanelEvent$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$());
        var $dimWidth$$ = $DvtControlPanelDefaults$$.$w$ + $DvtControlPanelDefaults$$.x;
        $animator$$108$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getTranslateX$, $DvtControlPanelEvent$$.$setTranslateX$, $DvtControlPanelEventManager$$.$getTranslateX$() + $DropdownItemSprite$$ - $dimWidth$$)
      }
      $DvtControlPanelEvent$$.$setScaleY$($DvtPanControl$$.$h$ / $DvtControlPanelDefaults$$.$h$);
      $animator$$108$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleY$, $DvtControlPanelEvent$$.$setScaleY$, 1);
      $animator$$108$$.$setOnEnd$(function() {
        $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
        this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
        this.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
        this.$_state$ = $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$
      }, this);
      $animator$$108$$.play()
    }else {
      this.$_state$ = $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$, $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$), this.$PositionExpanded$($DvtControlPanelEvent$$)
    }
  };
  $dvt$$6$$.$ControlPanel$.prototype.$PositionExpanded$ = function $$dvt$$6$$$$ControlPanel$$$$PositionExpanded$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$;
    if($dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$())) {
      $DvtControlPanelEvent$$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
      var $DvtPanControl$$ = $dvt$$6$$.$DisplayableUtils$.$getDimensionsForced$(this.$getCtx$(), $DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$ -= Math.floor($DvtPanControl$$.$w$ + $DvtPanControl$$.x)
    }else {
      $DvtControlPanelEvent$$ = 0
    }
    $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$, 0)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$transitionCollapse$ = function $$dvt$$6$$$$ControlPanel$$$$transitionCollapse$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), 0.25);
    $DvtControlPanelEventManager$$.$setAlpha$(1);
    $DvtControlPanelEvent$$.$setAlpha$(0);
    $DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
    $DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
    var $DropdownItemSprite$$ = this.$_collapsedDim$, $DvtControlPanelDefaults$$ = this.$_expandedDim$;
    $DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleX$, $DvtControlPanelEventManager$$.$setScaleX$, $DropdownItemSprite$$.$w$ / $DvtControlPanelDefaults$$.$w$);
    $dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getTranslateX$, $DvtControlPanelEventManager$$.$setTranslateX$, $DvtControlPanelEvent$$.$getTranslateX$());
    $DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleY$, $DvtControlPanelEventManager$$.$setScaleY$, $DropdownItemSprite$$.$h$ / $DvtControlPanelDefaults$$.$h$);
    $DvtPanControl$$.$setOnEnd$(function() {
      $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
      this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
      this.$_state$ = $dvt$$6$$.$ControlPanel$.$STATE_COLLAPSED$
    }, this);
    $DvtPanControl$$.play()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$fireExpandEvent$ = function $$dvt$$6$$$$ControlPanel$$$$fireExpandEvent$$() {
    var $dvt$$6$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_SHOW$);
    this.$FireListener$($dvt$$6$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$fireCollapseEvent$ = function $$dvt$$6$$$$ControlPanel$$$$fireCollapseEvent$$() {
    var $dvt$$6$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_HIDE$);
    this.$FireListener$($dvt$$6$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleRollOver$ = function $$dvt$$6$$$$ControlPanel$$$$HandleRollOver$$() {
    this.$_bMouseOver$ = $JSCompiler_alias_TRUE$$;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollover$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleRollOut$ = function $$dvt$$6$$$$ControlPanel$$$$HandleRollOut$$() {
    this.$_bMouseOver$ = $JSCompiler_alias_FALSE$$;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollout$()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_applyAlphasRollover$ = function $$dvt$$6$$$$ControlPanel$$$$_applyAlphasRollover$$() {
    this.$_background$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$])
  };
  $dvt$$6$$.$ControlPanel$.prototype.$_applyAlphasRollout$ = function $$dvt$$6$$$$ControlPanel$$$$_applyAlphasRollout$$() {
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_bgAlpha$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$getDimensions$ = function $$dvt$$6$$$$ControlPanel$$$$getDimensions$$() {
    this.$_dim$ || (this.$_dim$ = $dvt$$6$$.$ControlPanel$.$superclass$.$getDimensions$.call(this));
    return this.$_dim$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$renderComponent$ = function $$dvt$$6$$$$ControlPanel$$$$renderComponent$$() {
    var $DvtControlPanelEventManager$$;
    this.$_state$ == $dvt$$6$$.$ControlPanel$.$STATE_COLLAPSED$ ? $DvtControlPanelEventManager$$ = this.$RenderCollapsed$() : ($DvtControlPanelEventManager$$ = this.$RenderExpanded$(), this.$PositionExpanded$($DvtControlPanelEventManager$$));
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$addChild$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$getButtonImages$ = $JSCompiler_get$$("$_buttonImages$");
  $dvt$$6$$.$ControlPanel$.prototype.$_getVBarButtonsOffsetY$ = function $$dvt$$6$$$$ControlPanel$$$$_getVBarButtonsOffsetY$$($DvtControlPanelEventManager$$) {
    return this.$_controls$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ || this.$_styleMap$ && this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && 0 == $DvtControlPanelEventManager$$ ? $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, $dvt$$6$$.$ControlPanel$.$CP_PADDING_TOP$, 0) : 0
  };
  $dvt$$6$$.$ControlPanel$.prototype.$enableZoomControls$ = function $$dvt$$6$$$$ControlPanel$$$$enableZoomControls$$() {
    var $dvt$$6$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($dvt$$6$$), $DvtControlPanelEvent$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($dvt$$6$$);
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($dvt$$6$$ != $DvtControlPanelEventManager$$);
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($dvt$$6$$ != $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$enableZoomInControl$ = function $$dvt$$6$$$$ControlPanel$$$$enableZoomInControl$$($dvt$$6$$) {
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($dvt$$6$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$enableZoomOutControl$ = function $$dvt$$6$$$$ControlPanel$$$$enableZoomOutControl$$($dvt$$6$$) {
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($dvt$$6$$)
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleZoomInClick$ = function $$dvt$$6$$$$ControlPanel$$$$HandleZoomInClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleZoomOutClick$ = function $$dvt$$6$$$$ControlPanel$$$$HandleZoomOutClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$HandleZoomToFitClick$ = function $$dvt$$6$$$$ControlPanel$$$$HandleZoomToFitClick$$() {
    var $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomToFit$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.play()
  };
  $dvt$$6$$.$ControlPanel$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  $dvt$$6$$.$ControlPanel$.prototype.$isDisclosed$ = function $$dvt$$6$$$$ControlPanel$$$$isDisclosed$$() {
    return this.$_state$ == $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$
  };
  $dvt$$6$$.$ControlPanel$.prototype.$getActionDisplayable$ = function $$dvt$$6$$$$ControlPanel$$$$getActionDisplayable$$($dvt$$6$$) {
    if("disclosure" == $dvt$$6$$) {
      return this.$isDisclosed$() ? this.$_collapseButton$ : this.$_expandButton$
    }
    if(this.$isDisclosed$()) {
      if("zoomToFit" == $dvt$$6$$ && this.$_zoomToFitButton$ && this.$_zoomToFitButton$.isEnabled()) {
        return this.$_zoomToFitButton$
      }
      if("zoomIn" == $dvt$$6$$ && this.$_zoomInButton$ && this.$_zoomInButton$.isEnabled()) {
        return this.$_zoomInButton$
      }
      if("zoomOut" == $dvt$$6$$ && this.$_zoomOutButton$ && this.$_zoomOutButton$.isEnabled()) {
        return this.$_zoomOutButton$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  var $DvtControlPanelDefaults$$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($DvtControlPanelDefaults$$, $dvt$$6$$.$Obj$);
  $DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
  scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
  $DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
  $DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
  paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
  $DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelDefaults$$.$_getDefaults$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$ ? $dvt$$6$$.$JsonUtils$.$merge$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : $DvtControlPanelEvent$$
  };
  $DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $JSCompiler_alias_NULL$$;
    return $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$ && "skyros" === $DvtControlPanelEventManager$$.skin ? $dvt$$6$$.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_SKYROS$, $DvtControlPanelDefaults$$.$DEFAULT$) : $DvtControlPanelEventManager$$ && "alta" === $DvtControlPanelEventManager$$.skin ? $dvt$$6$$.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_ALTA$, $DvtControlPanelDefaults$$.$DEFAULT$) : $dvt$$6$$.$JsonUtils$.$clone$($DvtControlPanelDefaults$$.$DEFAULT$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($DvtControlPanelEventManager$$, $dvt$$6$$.$EventManager$);
  $DvtControlPanelEventManager$$.prototype.$OnMouseDown$ = function $$DvtControlPanelEventManager$$$$$OnMouseDown$$($dvt$$6$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$6$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseDown$ && $DvtControlPanelEvent$$.$HandleMouseDown$($dvt$$6$$), $dvt$$6$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseUp$ = function $$DvtControlPanelEventManager$$$$$OnMouseUp$$($dvt$$6$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$6$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseUp$ && $DvtControlPanelEvent$$.$HandleMouseUp$(), $dvt$$6$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseOut$ = function $$DvtControlPanelEventManager$$$$$OnMouseOut$$($dvt$$6$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$6$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleMouseOut$ && $DvtControlPanelEvent$$.$HandleMouseOut$(), $dvt$$6$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnClick$ = function $$DvtControlPanelEventManager$$$$$OnClick$$($dvt$$6$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$6$$);
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleClick$ && $DvtControlPanelEvent$$.$HandleClick$($dvt$$6$$), $dvt$$6$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOver$ = function $$DvtControlPanelEventManager$$$$$OnRollOver$$($dvt$$6$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $dvt$$6$$);
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEvent$$ && $DvtControlPanelEvent$$.$HandleRollOver$ && $DvtControlPanelEvent$$.$HandleRollOver$($dvt$$6$$)
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOut$ = function $$DvtControlPanelEventManager$$$$$OnRollOut$$($dvt$$6$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $dvt$$6$$);
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEvent$$ && $DvtControlPanelEvent$$.$HandleRollOut$ && $DvtControlPanelEvent$$.$HandleRollOut$($dvt$$6$$)
  };
  $DvtControlPanelEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtControlPanelEventManager$$$$$OnComponentTouchClick$$($dvt$$6$$) {
    var $DvtControlPanelEventManager$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$6$$));
    $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$.$HandleClick$ && $DvtControlPanelEventManager$$.$HandleClick$($dvt$$6$$), $dvt$$6$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$HandleImmediateTouchStartInternal$ = function $$DvtControlPanelEventManager$$$$$HandleImmediateTouchStartInternal$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$.$blockTouchHold$();
    $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ControlPanelLAFUtils$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_TOP$ = "top";
  $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ = "right";
  $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ = "left";
  $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ = "bottom";
  $dvt$$6$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  $dvt$$6$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  $dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  $dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  $dvt$$6$$.$ControlPanelLAFUtils$.$getViewPanelHeight$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$getViewPanelHeight$$() {
    return $dvt$$6$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$getViewPanelHalfHeight$$() {
    return $dvt$$6$$.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$createEmptyViewOpenShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 86);
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    $DropdownItemSprite$$ === $JSCompiler_alias_VOID$$ && ($DropdownItemSprite$$ = $JSCompiler_alias_TRUE$$);
    $DvtControlPanelDefaults$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0));
    return $dvt$$6$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ - 2 * $DvtControlPanelDefaults$$, $DvtPanControl$$ - 2 * $DvtControlPanelDefaults$$, $DropdownItemSprite$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$makeViewOpenShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $x$$169$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$148$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$15$$ = $dvt$$6$$.$PathUtils$.moveTo($x$$169$$ + $DvtControlPanelEvent$$, $y$$148$$ + $DvtControlPanelEvent$$), $cmds$$15$$ = $cmds$$15$$ + $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ - $DvtPanControl$$, $y$$148$$ + $DvtControlPanelEvent$$), $x$$169$$ = $x$$169$$ - $DvtPanControl$$, $cmds$$15$$ = $cmds$$15$$ + $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ - $DvtControlPanelEvent$$, 
    $y$$148$$ + $DvtControlPanelEvent$$), $cmds$$15$$ = $cmds$$15$$ + $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ - $DvtControlPanelEvent$$, $y$$148$$ - $DropdownItemSprite$$), $y$$148$$ = $y$$148$$ - $DropdownItemSprite$$;
    $DvtControlPanelDefaults$$ ? ($cmds$$15$$ += $dvt$$6$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $x$$169$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$148$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$169$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$148$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-$dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$169$$, -$DvtControlPanelEvent$$ + 
    $y$$148$$, $x$$169$$, -$DvtControlPanelEvent$$ + $y$$148$$) + $dvt$$6$$.$PathUtils$.lineTo($x$$169$$, -$DvtControlPanelEvent$$ + $y$$148$$), $cmds$$15$$ += $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, -$DvtControlPanelEvent$$ + $y$$148$$), $cmds$$15$$ += $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$148$$ + $DropdownItemSprite$$)) : ($cmds$$15$$ += $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ - $DvtControlPanelEvent$$, 
    -$DvtControlPanelEvent$$ + $y$$148$$), $cmds$$15$$ += $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ + $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$148$$), $x$$169$$ += $DvtPanControl$$, $cmds$$15$$ += $dvt$$6$$.$PathUtils$.$quadTo$($dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$169$$, -$DvtControlPanelEvent$$ + $y$$148$$, $dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$169$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + 
    $y$$148$$) + $dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$169$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$148$$, $DvtControlPanelEvent$$ + $x$$169$$, $y$$148$$) + $dvt$$6$$.$PathUtils$.lineTo($x$$169$$ + $DvtControlPanelEvent$$, $y$$148$$ + $DropdownItemSprite$$));
    $cmds$$15$$ += $dvt$$6$$.$PathUtils$.closePath();
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $cmds$$15$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$createEmptyViewClosedShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$6$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$6$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    ($DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $JSCompiler_alias_NULL$$)) || ($DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
    $DvtControlPanelEventManager$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$createEmptyViewClosedFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$7$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$7$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    $DvtControlPanelEventManager$$.$setSolidStroke$($dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
    $DvtControlPanelEventManager$$.$setFill$($JSCompiler_alias_NULL$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$renderEmptyZoomShape$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$renderEmptyZoomShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    var $r$$42$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$1$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$91$$ = $cpWidth$$1$$ - 2 * $r$$42$$, $hh$$76$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$42$$;
    $DvtControlPanelEventManager$$ = $DropdownItemSprite$$ && $DvtControlPanelDefaults$$ ? $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, $r$$42$$, $cpWidth$$1$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) : $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$42$$, $ww$$91$$, $hh$$76$$);
    $DvtControlPanelEventManager$$.$setSolidFill$($dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$renderEmptyZoomFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    $DvtPanControl$$ || ($DvtPanControl$$ = $JSCompiler_alias_TRUE$$);
    var $r$$43$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$2$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$92$$ = $cpWidth$$2$$ - 2 * $r$$43$$, $hh$$77$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$43$$, $mc$$4$$ = $JSCompiler_alias_NULL$$, $mc$$4$$ = $DvtControlPanelDefaults$$ && $openSideSize$$1$$ ? $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, 
    $r$$43$$, $cpWidth$$2$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) : $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$43$$, $ww$$92$$, $hh$$77$$, $DvtPanControl$$);
    $mc$$4$$.$setSolidStroke$($dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
    $mc$$4$$.$setFill$($JSCompiler_alias_NULL$$);
    return $mc$$4$$
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelper$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$makeZoomShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelDefaults$$ || ($DvtControlPanelDefaults$$ = $JSCompiler_alias_TRUE$$);
    var $x$$170$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$149$$ = $DropdownItemSprite$$, $cmds$$16$$ = $dvt$$6$$.$PathUtils$.moveTo($x$$170$$ + $DvtControlPanelEvent$$, $y$$149$$), $cmds$$16$$ = $DvtControlPanelDefaults$$ ? $cmds$$16$$ + ($dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$170$$, $dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$149$$, $dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$170$$, $dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * 
    $DvtControlPanelEvent$$ + $y$$149$$) + $dvt$$6$$.$PathUtils$.$quadTo$($dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$170$$, $DvtControlPanelEvent$$ + $y$$149$$, $x$$170$$, $DvtControlPanelEvent$$ + $y$$149$$) + $dvt$$6$$.$PathUtils$.lineTo($x$$170$$, $DvtControlPanelEvent$$ + $y$$149$$)) : $cmds$$16$$ + $dvt$$6$$.$PathUtils$.lineTo($x$$170$$ + $DvtControlPanelEvent$$, $y$$149$$ + $DvtControlPanelEvent$$), $cmds$$16$$ = $cmds$$16$$ + $dvt$$6$$.$PathUtils$.lineTo($x$$170$$ - 
    $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$149$$), $x$$170$$ = $x$$170$$ - $DvtPanControl$$, $cmds$$16$$ = $cmds$$16$$ + ($dvt$$6$$.$PathUtils$.$quadTo$(-$dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$170$$, $DvtControlPanelEvent$$ + $y$$149$$, -$dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$170$$, $dvt$$6$$.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$149$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + 
    $x$$170$$, $dvt$$6$$.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$149$$, -$DvtControlPanelEvent$$ + $x$$170$$, $y$$149$$) + $dvt$$6$$.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$170$$, $y$$149$$) + $dvt$$6$$.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$170$$, $y$$149$$ - $DropdownItemSprite$$)), $y$$149$$ = $y$$149$$ - $DropdownItemSprite$$, $cmds$$16$$ = $cmds$$16$$ + ($dvt$$6$$.$PathUtils$.lineTo($x$$170$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$149$$) + 
    $dvt$$6$$.$PathUtils$.lineTo($x$$170$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$149$$ + $DropdownItemSprite$$) + $dvt$$6$$.$PathUtils$.closePath());
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $cmds$$16$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$makeZoomShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$) {
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$);
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$makeViewOpenShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$) {
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$);
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ControlPanelLAFUtils$.$GetShapePathCommands$ = function $$dvt$$6$$$$ControlPanelLAFUtils$$$GetShapePathCommands$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$4$$) {
    var $arPoints$$12$$;
    $DvtControlPanelEventManager$$ = $dvt$$6$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_TOP$ && !$DvtControlPanelEventManager$$ && ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0]);
    $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_TOP$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, 0] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = 
    ["M", $DvtControlPanelEvent$$, $openSideSize$$4$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$, 0] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_RIGHT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$, 0, 
    "L", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $openSideSize$$4$$] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$, 
    $DropdownItemSprite$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_LEFT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, 
    $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DropdownItemSprite$$, 0, "L", $DvtControlPanelEvent$$, 0] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 
    0, 0, 1, $DvtControlPanelEvent$$, $DropdownItemSprite$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", $openSideSize$$4$$, $DvtPanControl$$] : $DvtControlPanelDefaults$$ == $dvt$$6$$.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ && $DvtControlPanelEventManager$$ && ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DvtControlPanelEvent$$, 
    0, "L", $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, 0, $DropdownItemSprite$$, "L", 0, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, $DropdownItemSprite$$, $DvtPanControl$$, "L", $DvtControlPanelEvent$$ - $openSideSize$$4$$, $DvtPanControl$$]);
    return $arPoints$$12$$
  };
  $dvt$$6$$.$PanZoomComponent$ = function $$dvt$$6$$$$PanZoomComponent$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$PanZoomComponent$, $dvt$$6$$.$BaseComponent$);
  $dvt$$6$$.$PanZoomComponent$.$BOX_SHADOW$ = "box-shadow";
  $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ = "initCollapsed";
  $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ = "initExpanded";
  $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ = "hidden";
  $dvt$$6$$.$PanZoomComponent$.$PAN_ZOOM_KEY$ = "panZoomInfo";
  $dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$ = "skin";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$ = "inlineStyle";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$ = "cpBackgroundColor";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$ = "cpBorderColor";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$ = "cpBoxShadow";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$ = "cpBorderRadius";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$ = "tabBgColorInactive";
  $dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$ = "tabBorderColorInactive";
  $dvt$$6$$.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$ = "isLegendDisclosed";
  $dvt$$6$$.$PanZoomComponent$.prototype.Init = function $$dvt$$6$$$$PanZoomComponent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$6$$.$PanZoomComponent$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_controlPanelBehavior$ = $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$;
    this.$_displayedControls$ = $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$;
    this.$_bSupportsVectorEffects$ = !$dvt$$6$$.$Agent$.$isEnvironmentBatik$() && !$dvt$$6$$.$Agent$.$isPlatformIE$() && !($dvt$$6$$.$Agent$.$isPlatformGecko$() && 17 >= $dvt$$6$$.$Agent$.$getVersion$());
    this.$_subcomponentStyles$ = this.$_resourcesMap$ = $JSCompiler_alias_NULL$$;
    this.$_skinName$ = ""
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$getResourcesMap$ = function $$dvt$$6$$$$PanZoomComponent$$$$getResourcesMap$$() {
    this.$_resourcesMap$ || (this.$_resourcesMap$ = this.$Options$ ? this.$Options$._resources : {});
    return this.$_resourcesMap$
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$getSubcomponentStyles$ = $JSCompiler_get$$("$_subcomponentStyles$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$parseComponentJson$ = function $$dvt$$6$$$$PanZoomComponent$$$$parseComponentJson$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new $dvt$$6$$.$CSSStyle$($DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$])).$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$];
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[$dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$, "undefined" != typeof $dvt$$6$$.$PanelDrawer$ && ($dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$]), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$]), 
    $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$]), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$]), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$]), 
    $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[$dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$])), this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$)))
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$parseComponentAttrs$ = function $$dvt$$6$$$$PanZoomComponent$$$$parseComponentAttrs$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new $dvt$$6$$.$CSSStyle$($DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_INLINE_STYLE$))).$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$);
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[$dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$);
    "undefined" != typeof $dvt$$6$$.$PanelDrawer$ && ($dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$)), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$)), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, 
    $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$)), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$)), $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$)), 
    $dvt$$6$$.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$($dvt$$6$$.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$)));
    this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$))
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$render$ = function $$dvt$$6$$$$PanZoomComponent$$$$render$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$Width$ = $DvtControlPanelEventManager$$;
    this.$Height$ = $DvtControlPanelEvent$$;
    this.$_isResize$ = !$dvt$$6$$;
    if(!this.$_isResize$ || this.$_panZoomCanvas$) {
      this.$PreRender$(), this.$_isResize$ || ("object" == typeof $dvt$$6$$ ? this.$SetOptions$($dvt$$6$$) : this.$_loadXml$($dvt$$6$$)), this.$Render$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$), this.$UpdateAriaAttributes$()
    }
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$setControlPanelBehavior$ = $JSCompiler_set$$("$_controlPanelBehavior$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$setDisplayedControls$ = $JSCompiler_set$$("$_displayedControls$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$GetControlPanel$ = function $$dvt$$6$$$$PanZoomComponent$$$$GetControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$GetControlPanelBehavior$();
    return $DvtControlPanelEventManager$$ != $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new $dvt$$6$$.$ControlPanel$(this.$getCtx$(), this, $DvtControlPanelEventManager$$ == $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? $dvt$$6$$.$ControlPanel$.$STATE_COLLAPSED$ : $dvt$$6$$.$ControlPanel$.$STATE_EXPANDED$) : $JSCompiler_alias_NULL$$
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$GetControlPanelBehavior$ = $JSCompiler_get$$("$_controlPanelBehavior$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$GetXmlDomParser$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $dvt$$6$$.$PanZoomComponent$.prototype.$GetXmlStringParser$ = function $$dvt$$6$$$$PanZoomComponent$$$$GetXmlStringParser$$() {
    return new $dvt$$6$$.$XmlParser$(this.$getCtx$())
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$HandlePanEvent$ = $JSCompiler_emptyFn$$();
  $dvt$$6$$.$PanZoomComponent$.prototype.$HandleZoomEvent$ = $JSCompiler_emptyFn$$();
  $dvt$$6$$.$PanZoomComponent$.prototype.$PreRender$ = $JSCompiler_emptyFn$$();
  $dvt$$6$$.$PanZoomComponent$.prototype.$Render$ = function $$dvt$$6$$$$PanZoomComponent$$$$Render$$() {
    if(this.$_endGradientColor$ || !this.$_skinName$) {
      this.$_backgroundPane$ || (this.$_backgroundPane$ = new $dvt$$6$$.$Rect$(this.$getCtx$(), 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.getWidth()), this.$_backgroundPane$.$setHeight$(this.getHeight()), this.$_backgroundPane$.$setFill$(this.$_getBackgroundGradient$(this.$_endGradientColor$))
    }
    if(this.$_isResize$) {
      this.$_panZoomCanvas$.$setSize$(this.getWidth(), this.getHeight())
    }else {
      this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = $JSCompiler_alias_NULL$$);
      this.$_panZoomCanvas$ = new $dvt$$6$$.$PanZoomCanvas$(this.$getCtx$(), this.getWidth(), this.getHeight(), this);
      this.$_panZoomCanvas$.$addEvtListener$($dvt$$6$$.$PanEvent$.$TYPE$, this.$HandlePanEvent$, $JSCompiler_alias_FALSE$$, this);
      this.$_panZoomCanvas$.$addEvtListener$($dvt$$6$$.$ZoomEvent$.$TYPE$, this.$HandleZoomEvent$, $JSCompiler_alias_FALSE$$, this);
      this.$addChild$(this.$_panZoomCanvas$);
      var $DvtControlPanelEventManager$$ = this.$GetControlPanel$();
      $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$.$addEvtListener$($DvtControlPanelEvent$$.$TYPE$, this.$_handleControlPanelEvent$, $JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$setControlPanel$($DvtControlPanelEventManager$$));
      this.$_panZoomCanvas$.$renderComponent$()
    }
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$ClipPath$("comp");
    $DvtControlPanelEventManager$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), this.getWidth(), this.getHeight());
    this.$setClipPath$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$SetEndGradientColor$ = $JSCompiler_set$$("$_endGradientColor$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$SetOptions$ = function $$dvt$$6$$$$PanZoomComponent$$$$SetOptions$$($dvt$$6$$) {
    this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($dvt$$6$$) : $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$_getBackgroundGradient$ = function $$dvt$$6$$$$PanZoomComponent$$$$_getBackgroundGradient$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = 1;
    if($DvtControlPanelEventManager$$ && "#7396C8" != $DvtControlPanelEventManager$$) {
      var $DvtControlPanelEvent$$ = $dvt$$6$$.$ColorUtils$.$getAlpha$($DvtControlPanelEventManager$$), $DvtPanControl$$ = ($dvt$$6$$.$ColorUtils$.$getRed$("#AECDEA") - $dvt$$6$$.$ColorUtils$.$getRed$("#7396C8")) / (255 - $dvt$$6$$.$ColorUtils$.$getRed$("#7396C8")), $DropdownItemSprite$$ = ($dvt$$6$$.$ColorUtils$.$getGreen$("#AECDEA") - $dvt$$6$$.$ColorUtils$.$getGreen$("#7396C8")) / (255 - $dvt$$6$$.$ColorUtils$.$getGreen$("#7396C8")), $DvtControlPanelDefaults$$ = ($dvt$$6$$.$ColorUtils$.$getBlue$("#AECDEA") - 
      $dvt$$6$$.$ColorUtils$.$getBlue$("#7396C8")) / (255 - $dvt$$6$$.$ColorUtils$.$getBlue$("#7396C8")), $gx_rr$$3_ww$$94$$ = $dvt$$6$$.$ColorUtils$.$getRed$($DvtControlPanelEventManager$$), $cx$$29_gg$$3$$ = $dvt$$6$$.$ColorUtils$.$getGreen$($DvtControlPanelEventManager$$), $bb$$5_cy$$30$$ = $dvt$$6$$.$ColorUtils$.$getBlue$($DvtControlPanelEventManager$$), $DvtPanControl$$ = $dvt$$6$$.$ColorUtils$.$makeRGB$(Math.round($gx_rr$$3_ww$$94$$ + $DvtPanControl$$ * (255 - $gx_rr$$3_ww$$94$$)), Math.round($cx$$29_gg$$3$$ + 
      $DropdownItemSprite$$ * (255 - $cx$$29_gg$$3$$)), Math.round($bb$$5_cy$$30$$ + $DvtControlPanelDefaults$$ * (255 - $bb$$5_cy$$30$$)));
      $DvtControlPanelEventManager$$ = $dvt$$6$$.$ColorUtils$.$getRGB$($DvtControlPanelEventManager$$);
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", $DvtPanControl$$, $DvtControlPanelEventManager$$]
    }else {
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
    }
    var $DvtControlPanelEvent$$ = [$DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$], $DvtPanControl$$ = [0, 45 / 255, 190 / 255, 1], $gx_rr$$3_ww$$94$$ = this.$Width$, $DropdownItemSprite$$ = 1.7 * 1.7 * $gx_rr$$3_ww$$94$$, $DvtControlPanelDefaults$$ = 1.7 * this.$Height$, $gx_rr$$3_ww$$94$$ = 0 + ($gx_rr$$3_ww$$94$$ - $DropdownItemSprite$$) / 2, $cx$$29_gg$$3$$ = $gx_rr$$3_ww$$94$$ + $DropdownItemSprite$$ / 2, $bb$$5_cy$$30$$ = -35 + $DvtControlPanelDefaults$$ / 
    2, $r$$48$$ = 1.5 * Math.min($DropdownItemSprite$$ / 2, $DvtControlPanelDefaults$$ / 2);
    return new $dvt$$6$$.$RadialGradientFill$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $cx$$29_gg$$3$$, $bb$$5_cy$$30$$, $r$$48$$, [$gx_rr$$3_ww$$94$$, -35, $DropdownItemSprite$$, $DvtControlPanelDefaults$$])
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$_handleControlPanelEvent$ = function $$dvt$$6$$$$PanZoomComponent$$$$_handleControlPanelEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = $dvt$$6$$.$EventFactory$.$newAdfPropertyChangeEvent$($dvt$$6$$.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$, $DvtControlPanelEventManager$$.$getSubType$() == $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ ? $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ : $dvt$$6$$.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$);
    this.dispatchEvent($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$_loadXml$ = function $$dvt$$6$$$$PanZoomComponent$$$$_loadXml$$($dvt$$6$$) {
    if(!($dvt$$6$$ == $JSCompiler_alias_NULL$$ || 0 == $dvt$$6$$.length)) {
      var $DvtControlPanelEventManager$$ = this.$GetXmlStringParser$();
      if($DvtControlPanelEventManager$$ && ($dvt$$6$$ = $DvtControlPanelEventManager$$.parse($dvt$$6$$))) {
        "r" === $dvt$$6$$.getName() && ($dvt$$6$$ = $dvt$$6$$.getFirstChild()), $dvt$$6$$ && this.$GetXmlDomParser$().$loadXmlInitial$($dvt$$6$$)
      }
    }
  };
  $dvt$$6$$.$PanZoomComponent$.prototype.$_setSkinName$ = $JSCompiler_set$$("$_skinName$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$setSubcomponentStyles$ = $JSCompiler_set$$("$_subcomponentStyles$");
  $dvt$$6$$.$PanZoomComponent$.prototype.$_getLegendMaxWidthValue$ = function $$dvt$$6$$$$PanZoomComponent$$$$_getLegendMaxWidthValue$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEvent$$;
    if(!$DvtControlPanelEventManager$$) {
      return $DvtPanControl$$
    }
    $DvtPanControl$$ = $dvt$$6$$.$StringUtils$.trim($DvtControlPanelEventManager$$);
    $dvt$$6$$.$StringUtils$.endsWith($DvtPanControl$$, "%") ? ($DvtPanControl$$ = $dvt$$6$$.$StringUtils$.trim($DvtPanControl$$.replace(/\%$/, "")), isNaN(parseFloat($DvtPanControl$$)) || ($DvtPanControl$$ = parseFloat($DvtPanControl$$) / 100 * $DvtControlPanelEvent$$)) : $dvt$$6$$.$StringUtils$.endsWith($DvtPanControl$$, "px") && ($DvtPanControl$$ = $DvtPanControl$$.replace(/px$/, ""));
    $DvtPanControl$$ = isNaN(parseFloat($DvtPanControl$$)) ? $DvtControlPanelEvent$$ : parseFloat($DvtPanControl$$);
    return Math.min($DvtPanControl$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$PanZoomCanvas$ = function $$dvt$$6$$$$PanZoomCanvas$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$PanZoomCanvas$, $dvt$$6$$.$Container$);
  $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$ = 15;
  $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$ = 0.05;
  $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$ = 0.5;
  $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$ = $dvt$$6$$.$ControlPanel$.$CONTROLS_ALL$;
  $dvt$$6$$.$PanZoomCanvas$.prototype.Init = function $$dvt$$6$$$$PanZoomCanvas$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $dvt$$6$$.$PanZoomCanvas$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_view$ = $DropdownItemSprite$$;
    this.$_ww$ = $DvtControlPanelEvent$$;
    this.$_hh$ = $DvtPanControl$$;
    this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
    this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = $JSCompiler_alias_NULL$$;
    this.$_minZoom$ = 0.1;
    this.$_maxZoom$ = 1;
    this.$_panIncrement$ = $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$;
    this.$_zoomIncrement$ = $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$;
    this.$_bTiltPanningEnabled$ = $JSCompiler_alias_FALSE$$;
    this.$_zoomToFitPadding$ = 20;
    this.$_controlPanel$ = $JSCompiler_alias_NULL$$;
    this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = $JSCompiler_alias_TRUE$$;
    this.$_backgroundPane$ = new $dvt$$6$$.$Rect$(this.$getCtx$(), 0, 0, this.$_ww$, this.$_hh$);
    this.$addChild$(this.$_backgroundPane$);
    this.$_backgroundPane$.$setInvisibleFill$();
    this.$_contentPane$ = new $dvt$$6$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_contentPane$);
    this.$_contentPane$.$setMatrix$(new $dvt$$6$$.$Matrix$);
    this.$_animationDuration$ = $dvt$$6$$.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$;
    this.$_eventManager$ = new $dvt$$6$$.$PanZoomCanvasEventManager$($DvtControlPanelEventManager$$, this.$FireListener$, this);
    this.$_eventManager$.$addListeners$(this);
    this.$_clipIdSuffix$ = 1;
    this.$SetClipRect$($DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_bElasticConstraints$ = $JSCompiler_alias_FALSE$$;
    this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setSize$ = function $$dvt$$6$$$$PanZoomCanvas$$$$setSize$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_ww$ = $dvt$$6$$;
    this.$_hh$ = $DvtControlPanelEventManager$$;
    $DvtControlPanelEvent$$ || (this.$_backgroundPane$.$setWidth$($dvt$$6$$), this.$_backgroundPane$.$setHeight$($DvtControlPanelEventManager$$), this.$_controlPanel$ && this.$PositionControlPanel$(), this.$SetClipRect$($dvt$$6$$, $DvtControlPanelEventManager$$))
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getSize$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getSize$$() {
    return new $dvt$$6$$.$Dimension$(this.$_ww$, this.$_hh$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$SetClipRect$ = function $$dvt$$6$$$$PanZoomCanvas$$$$SetClipRect$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$6$$.$ClipPath$("pzc");
    $DvtPanControl$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    this.$setClipPath$($DvtPanControl$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setContentPane$ = $JSCompiler_set$$("$_contentPane$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getContentPaneMatrix$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getContentPaneMatrix$$($dvt$$6$$) {
    return $dvt$$6$$ && ($dvt$$6$$ = $dvt$$6$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) ? $dvt$$6$$ : this.$_contentPane$.$getMatrix$()
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getZoom$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getZoom$$($dvt$$6$$) {
    return this.$getContentPaneMatrix$($dvt$$6$$).$_a$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getPanX$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getPanX$$($dvt$$6$$) {
    return this.$getContentPaneMatrix$($dvt$$6$$).$_tx$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getPanY$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getPanY$$($dvt$$6$$) {
    return this.$getContentPaneMatrix$($dvt$$6$$).$_ty$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setZoomToFitPadding$ = function $$dvt$$6$$$$PanZoomCanvas$$$$setZoomToFitPadding$$() {
    this.$_zoomToFitPadding$ = 0
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$panBy$ = function $$dvt$$6$$$$PanZoomCanvas$$$$panBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    if(this.$_bPanningEnabled$) {
      var $DropdownItemSprite$$ = this.$getPanX$($DvtPanControl$$), $DvtControlPanelDefaults$$ = this.$getPanY$($DvtPanControl$$), $newX$$5$$ = this.$ConstrainPanX$($DropdownItemSprite$$ + $DvtControlPanelEventManager$$), $newY$$6$$ = this.$ConstrainPanY$($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$);
      $DvtControlPanelEvent$$ = $newX$$5$$ - $DropdownItemSprite$$;
      var $deltaY$$15_fireEndEventFunc$$ = $newY$$6$$ - $DvtControlPanelDefaults$$;
      $DvtControlPanelEventManager$$ = $JSCompiler_alias_NULL$$;
      $DvtPanControl$$ && ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$clone$());
      $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().$clone$());
      $DvtControlPanelEventManager$$.translate($DvtControlPanelEvent$$, $deltaY$$15_fireEndEventFunc$$);
      var $thisRef$$34$$ = this;
      $DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$() {
        $thisRef$$34$$.$FirePanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_PANNING$, $newX$$5$$, $newY$$6$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$)
      };
      $deltaY$$15_fireEndEventFunc$$ = function $$deltaY$$15_fireEndEventFunc$$$() {
        $thisRef$$34$$.$FirePanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_PANNED$, $newX$$5$$, $newY$$6$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$)
      };
      $DvtPanControl$$ ? ($DvtPanControl$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), $dvt$$6$$.$Playable$.$prependOnInit$($DvtPanControl$$, $DvtControlPanelEvent$$), $dvt$$6$$.$Playable$.$appendOnEnd$($DvtPanControl$$, $deltaY$$15_fireEndEventFunc$$)) : ($DvtControlPanelEvent$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), $deltaY$$15_fireEndEventFunc$$())
    }
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$panTo$ = function $$dvt$$6$$$$PanZoomCanvas$$$$panTo$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_bPanningEnabled$ && ($dvt$$6$$ -= this.$getPanX$($DvtControlPanelEvent$$), $DvtControlPanelEventManager$$ -= this.$getPanY$($DvtControlPanelEvent$$), this.$panBy$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$))
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$zoomBy$ = function $$dvt$$6$$$$PanZoomCanvas$$$$zoomBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    if(this.$_bZoomingEnabled$) {
      !$DvtControlPanelEvent$$ && 0 !== $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = this.$_ww$ / 2);
      !$DvtPanControl$$ && 0 !== $DvtPanControl$$ && ($DvtPanControl$$ = this.$_hh$ / 2);
      var $DvtControlPanelDefaults$$ = this.$getZoom$($DropdownItemSprite$$), $newZoom$$4$$ = this.$ConstrainZoom$($DvtControlPanelDefaults$$ * $DvtControlPanelEventManager$$);
      this.$adjustZoomControls$($newZoom$$4$$);
      if($dvt$$6$$.$PanZoomCanvas$.$RoundFloatForCompare$($DvtControlPanelDefaults$$) != $dvt$$6$$.$PanZoomCanvas$.$RoundFloatForCompare$($newZoom$$4$$)) {
        var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$4$$ / $DvtControlPanelDefaults$$;
        $DvtControlPanelEventManager$$ = $JSCompiler_alias_NULL$$;
        $DropdownItemSprite$$ && ($DvtControlPanelEventManager$$ = $DropdownItemSprite$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$clone$());
        $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().$clone$());
        $DvtControlPanelEventManager$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
        var $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$, $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$);
        $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$;
        $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        $DvtControlPanelEventManager$$.translate($xDiff$$, $yDiff$$);
        var $thisRef$$35$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
          $thisRef$$35$$.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOMING$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$)
        }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
          $thisRef$$35$$.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOMED$, $thisRef$$35$$.$getZoom$(), $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$)
        };
        $DropdownItemSprite$$ ? ($DropdownItemSprite$$.$addProp$($dvt$$6$$.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), $dvt$$6$$.$Playable$.$prependOnInit$($DropdownItemSprite$$, $deltaZoom_fireStartEventFunc$$1$$), $dvt$$6$$.$Playable$.$appendOnEnd$($DropdownItemSprite$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), 
        $fireEndEventFunc$$1$$())
      }
    }
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$zoomTo$ = function $$dvt$$6$$$$PanZoomCanvas$$$$zoomTo$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$_bZoomingEnabled$ && ($dvt$$6$$ /= this.$getZoom$($DvtPanControl$$), this.$zoomBy$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$))
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$center$ = function $$dvt$$6$$$$PanZoomCanvas$$$$center$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$_bPanningEnabled$;
    this.$setPanningEnabled$($JSCompiler_alias_TRUE$$);
    var $DvtPanControl$$ = $DvtControlPanelEventManager$$;
    $DvtPanControl$$ || ($DvtPanControl$$ = this.$_contentPane$.$getDimensions$());
    var $DropdownItemSprite$$ = ($DvtPanControl$$.x + $DvtPanControl$$.$w$ / 2) * this.$getZoom$(), $DvtPanControl$$ = ($DvtPanControl$$.y + $DvtPanControl$$.$h$ / 2) * this.$getZoom$();
    this.$panTo$(this.$_ww$ / 2 - $DropdownItemSprite$$, this.$_hh$ / 2 - $DvtPanControl$$, $dvt$$6$$);
    this.$setPanningEnabled$($DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$zoomToFit$ = function $$dvt$$6$$$$PanZoomCanvas$$$$zoomToFit$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(this.$_bZoomToFitEnabled$) {
      var $DvtPanControl$$ = this.$_bPanningEnabled$, $DropdownItemSprite$$ = this.$_bZoomingEnabled$;
      this.$setPanningEnabled$($JSCompiler_alias_TRUE$$);
      this.$setZoomingEnabled$($JSCompiler_alias_TRUE$$);
      try {
        var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ ? $DvtControlPanelEvent$$ : this.$_contentPane$.$getDimensions$();
        if($DvtControlPanelDefaults$$ = this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$).$_zoomToFitBounds$) {
          var $dz$$6$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelDefaults$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelDefaults$$.$h$), $dz$$6$$ = this.$ConstrainZoom$($dz$$6$$), $dx$$18$$ = this.$_ww$ / 2 - ($DvtControlPanelDefaults$$.x + $DvtControlPanelDefaults$$.$w$ / 2) * $dz$$6$$, $dy$$20$$ = this.$_hh$ / 2 - ($DvtControlPanelDefaults$$.y + $DvtControlPanelDefaults$$.$h$ / 2) * $dz$$6$$, $thisRef$$36$$ = this, $fireStartEventFunc$$2$$ = 
          function $$fireStartEventFunc$$2$$$() {
            $thisRef$$36$$.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_BEGIN$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$)
          }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
            $thisRef$$36$$.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$)
          };
          $DvtControlPanelEventManager$$ ? $dvt$$6$$.$Playable$.$prependOnInit$($DvtControlPanelEventManager$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
          this.$zoomTo$($dz$$6$$, 0, 0, $DvtControlPanelEventManager$$);
          this.$panTo$($dx$$18$$, $dy$$20$$, $DvtControlPanelEventManager$$);
          $DvtControlPanelEventManager$$ ? $dvt$$6$$.$Playable$.$appendOnEnd$($DvtControlPanelEventManager$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
        }
      }finally {
        this.$setPanningEnabled$($DvtPanControl$$), this.$setZoomingEnabled$($DropdownItemSprite$$)
      }
    }
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$calcZoomToFitScale$ = function $$dvt$$6$$$$PanZoomCanvas$$$$calcZoomToFitScale$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getDimensions$());
    $DvtControlPanelEventManager$$ = this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$).$_zoomToFitBounds$;
    $DvtControlPanelEventManager$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$h$);
    return $DvtControlPanelEventManager$$ = this.$ConstrainZoom$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getViewport$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getViewport$$() {
    var $DvtControlPanelEventManager$$ = this.$localToStage$(new $dvt$$6$$.$Point$(0, 0)), $DvtControlPanelEvent$$ = this.$localToStage$(new $dvt$$6$$.$Point$(this.$_ww$, this.$_hh$)), $DvtControlPanelEventManager$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEvent$$);
    return new $dvt$$6$$.$Rectangle$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, $DvtControlPanelEvent$$.x - $DvtControlPanelEventManager$$.x, $DvtControlPanelEvent$$.y - $DvtControlPanelEventManager$$.y)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$SetElasticConstraints$ = function $$dvt$$6$$$$PanZoomCanvas$$$$SetElasticConstraints$$($DvtControlPanelEventManager$$) {
    if(this.$_bElasticConstraints$ = $DvtControlPanelEventManager$$) {
      this.$_elasticConstraintsAnim$ && (this.$_elasticConstraintsAnim$.$isRunning$() && this.$_elasticConstraintsAnim$.stop(), this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$)
    }else {
      $DvtControlPanelEventManager$$ = this.$getPanX$();
      var $DvtControlPanelEvent$$ = this.$getPanY$(), $DvtPanControl$$ = this.$getZoom$();
      this.$_bElasticPan$ = $DvtControlPanelEventManager$$ != this.$ConstrainPanX$($DvtControlPanelEventManager$$) || $DvtControlPanelEvent$$ != this.$ConstrainPanY$($DvtControlPanelEvent$$);
      this.$_bElasticZoom$ = $DvtPanControl$$ != this.$ConstrainZoom$($DvtPanControl$$);
      if(this.$_bElasticPan$ || this.$_bElasticZoom$) {
        this.$_elasticConstraintsAnim$ = new $dvt$$6$$.$Animator$(this.$getCtx$(), 0.4), this.$_elasticConstraintsAnim$.$setEasing$($dvt$$6$$.$Easing$.$cubicOut$), this.$_bElasticZoom$ && this.$zoomBy$(1, 0.5 * this.$_ww$, 0.5 * this.$_hh$, this.$_elasticConstraintsAnim$), this.$_bElasticPan$ && this.$panBy$(0, 0, this.$_elasticConstraintsAnim$), $dvt$$6$$.$Playable$.$appendOnEnd$(this.$_elasticConstraintsAnim$, this.$_elasticConstraintsAnimOnEnd$, this), this.$_bElasticPan$ && this.$FirePanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, 
        $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_elasticConstraintsAnim$), this.$_bElasticZoom$ && this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_elasticConstraintsAnim$), this.$_elasticConstraintsAnim$.play()
      }
    }
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$dvt$$6$$$$PanZoomCanvas$$$$_elasticConstraintsAnimOnEnd$$() {
    this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$;
    this.$_bElasticPan$ && this.$FirePanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_END$);
    this.$_bElasticZoom$ && this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_END$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$_panDampingFunc$ = function $$dvt$$6$$$$PanZoomCanvas$$$$_panDampingFunc$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    return Math.sqrt(4 * (0.01 * $DvtControlPanelEventManager$$) * $dvt$$6$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$_zoomDampingFunc$ = function $$dvt$$6$$$$PanZoomCanvas$$$$_zoomDampingFunc$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    return Math.sqrt(4 * (0.002 * $DvtControlPanelEventManager$$) * $dvt$$6$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$ConstrainPanX$ = function $$dvt$$6$$$$PanZoomCanvas$$$$ConstrainPanX$$($dvt$$6$$) {
    this.$_minPanX$ != $JSCompiler_alias_NULL$$ && $dvt$$6$$ < this.$_minPanX$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ = this.$_minPanX$ - $dvt$$6$$, $dvt$$6$$ = this.$_minPanX$ - this.$_panDampingFunc$($dvt$$6$$, this.$_ww$)) : $dvt$$6$$ = this.$_minPanX$);
    this.$_maxPanX$ != $JSCompiler_alias_NULL$$ && $dvt$$6$$ > this.$_maxPanX$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ -= this.$_maxPanX$, $dvt$$6$$ = this.$_maxPanX$ + this.$_panDampingFunc$($dvt$$6$$, this.$_ww$)) : $dvt$$6$$ = this.$_maxPanX$);
    return $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$ConstrainPanY$ = function $$dvt$$6$$$$PanZoomCanvas$$$$ConstrainPanY$$($dvt$$6$$) {
    this.$_minPanY$ != $JSCompiler_alias_NULL$$ && $dvt$$6$$ < this.$_minPanY$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ = this.$_minPanY$ - $dvt$$6$$, $dvt$$6$$ = this.$_minPanY$ - this.$_panDampingFunc$($dvt$$6$$, this.$_hh$)) : $dvt$$6$$ = this.$_minPanY$);
    this.$_maxPanY$ != $JSCompiler_alias_NULL$$ && $dvt$$6$$ > this.$_maxPanY$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ -= this.$_maxPanY$, $dvt$$6$$ = this.$_maxPanY$ + this.$_panDampingFunc$($dvt$$6$$, this.$_hh$)) : $dvt$$6$$ = this.$_maxPanY$);
    return $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$ConstrainZoom$ = function $$dvt$$6$$$$PanZoomCanvas$$$$ConstrainZoom$$($dvt$$6$$) {
    $dvt$$6$$ = Math.max(0, $dvt$$6$$);
    this.$_minZoom$ && $dvt$$6$$ < this.$_minZoom$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ = this.$_minZoom$ - $dvt$$6$$, $dvt$$6$$ = this.$_minZoom$ - this.$_zoomDampingFunc$($dvt$$6$$, this.$_maxZoom$ - this.$_minZoom$)) : $dvt$$6$$ = this.$_minZoom$);
    this.$_maxZoom$ && $dvt$$6$$ > this.$_maxZoom$ && (this.$_bElasticConstraints$ ? ($dvt$$6$$ -= this.$_maxZoom$, $dvt$$6$$ = this.$_maxZoom$ + this.$_zoomDampingFunc$($dvt$$6$$, this.$_maxZoom$ - this.$_minZoom$)) : $dvt$$6$$ = this.$_maxZoom$);
    return $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.$RoundFloatForCompare$ = function $$dvt$$6$$$$PanZoomCanvas$$$RoundFloatForCompare$$($dvt$$6$$) {
    return Math.round(1E5 * $dvt$$6$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$renderComponent$ = function $$dvt$$6$$$$PanZoomCanvas$$$$renderComponent$$() {
    var $dvt$$6$$ = this.$_controlPanel$;
    $dvt$$6$$ && (this.$addChild$($dvt$$6$$), this.$PositionControlPanel$(), $dvt$$6$$.$renderComponent$())
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setControlPanel$ = $JSCompiler_set$$("$_controlPanel$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$PositionControlPanel$ = function $$dvt$$6$$$$PanZoomCanvas$$$$PositionControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$_view$.$getSubcomponentStyles$(), $DvtControlPanelEvent$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_SIDE$, 0), $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$6$$.$ControlPanel$.$CP_PADDING_TOP$, 0), $DvtControlPanelEventManager$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 
    0), $DvtControlPanelEvent$$ = $dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$_ww$ - $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$ : $DvtControlPanelEvent$$;
    this.$_controlPanel$.$setTranslate$($DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$GetRelativeMousePosition$ = function $$dvt$$6$$$$PanZoomCanvas$$$$GetRelativeMousePosition$$($dvt$$6$$) {
    return this.$getCtx$().$pageToStageCoords$($dvt$$6$$.pageX, $dvt$$6$$.pageY)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$FirePanEvent$ = function $$dvt$$6$$$$PanZoomCanvas$$$$FirePanEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$123$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$PanEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$123$$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$FireZoomEvent$ = function $$dvt$$6$$$$PanZoomCanvas$$$$FireZoomEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $xx$$46$$, $yy$$46$$, $tx$$19$$, $ty$$20$$) {
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$ZoomEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, new $dvt$$6$$.$Point$($xx$$46$$, $yy$$46$$), $tx$$19$$, $ty$$20$$);
    this.$FireListener$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$zoomAndCenter$ = function $$dvt$$6$$$$PanZoomCanvas$$$$zoomAndCenter$$() {
    this.$FireZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$)
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getNextZoomLevel$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getNextZoomLevel$$($dvt$$6$$) {
    $dvt$$6$$ += this.$_zoomIncrement$;
    $dvt$$6$$ > this.$getMaxZoom$() && ($dvt$$6$$ = this.$getMaxZoom$());
    return $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getPrevZoomLevel$ = function $$dvt$$6$$$$PanZoomCanvas$$$$getPrevZoomLevel$$($dvt$$6$$) {
    $dvt$$6$$ -= this.$_zoomIncrement$;
    $dvt$$6$$ < this.$getMinZoom$() && ($dvt$$6$$ = this.$getMinZoom$());
    return $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMinZoom$ = $JSCompiler_set$$("$_minZoom$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getMinZoom$ = $JSCompiler_get$$("$_minZoom$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMaxZoom$ = function $$dvt$$6$$$$PanZoomCanvas$$$$setMaxZoom$$($dvt$$6$$) {
    0 > $dvt$$6$$ && ($dvt$$6$$ = 1);
    this.$_maxZoom$ = $dvt$$6$$
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getMaxZoom$ = $JSCompiler_get$$("$_maxZoom$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMinPanX$ = $JSCompiler_set$$("$_minPanX$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMaxPanX$ = $JSCompiler_set$$("$_maxPanX$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMinPanY$ = $JSCompiler_set$$("$_minPanY$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setMaxPanY$ = $JSCompiler_set$$("$_maxPanY$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setAnimationDuration$ = $JSCompiler_set$$("$_animationDuration$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$getAnimationDuration$ = $JSCompiler_get$$("$_animationDuration$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setPanningEnabled$ = $JSCompiler_set$$("$_bPanningEnabled$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setZoomingEnabled$ = $JSCompiler_set$$("$_bZoomingEnabled$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setZoomToFitEnabled$ = $JSCompiler_set$$("$_bZoomToFitEnabled$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$adjustZoomControls$ = function $$dvt$$6$$$$PanZoomCanvas$$$$adjustZoomControls$$($dvt$$6$$) {
    if(this.$_controlPanel$) {
      var $DvtControlPanelEventManager$$ = this.$getZoom$();
      $dvt$$6$$ == this.$getMinZoom$() && $dvt$$6$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_FALSE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_FALSE$$)) : $DvtControlPanelEventManager$$ <= $dvt$$6$$ && $dvt$$6$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_FALSE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_TRUE$$)) : $DvtControlPanelEventManager$$ >= $dvt$$6$$ && $dvt$$6$$ == 
      this.$getMinZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_TRUE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_FALSE$$)) : (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_TRUE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_TRUE$$))
    }
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setCurrentTouchTargets$ = $JSCompiler_set$$("$_currTargets$");
  $dvt$$6$$.$PanZoomCanvas$.prototype.$resetTouchTargets$ = function $$dvt$$6$$$$PanZoomCanvas$$$$resetTouchTargets$$() {
    $dvt$$6$$.$Agent$.$isTouchDevice$() && (this.$_currTargets$ = $JSCompiler_alias_NULL$$, this.$_eventManager$.$TouchManager$.reset())
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$panZoomEnd$ = function $$dvt$$6$$$$PanZoomCanvas$$$$panZoomEnd$$() {
    this.$_eventManager$.$PanZoomEnd$()
  };
  $dvt$$6$$.$PanZoomCanvas$.prototype.$setInteractionEnabled$ = function $$dvt$$6$$$$PanZoomCanvas$$$$setInteractionEnabled$$($dvt$$6$$) {
    $dvt$$6$$ ? this.$_eventManager$.$addListeners$(this) : this.$_eventManager$.$removeListeners$(this)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$PanZoomCanvasEventManager$, $dvt$$6$$.$EventManager$);
  $dvt$$6$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ = "panned";
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.Init = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_pzc$ = $DvtPanControl$$;
    this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$;
    this.$_bDragging$ = this.$_bZooming$ = this.$_bPanned$ = this.$_bPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_bMomentumPanning$ = $JSCompiler_alias_TRUE$$
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$ = "panTouch";
  $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$ = "zoomTouch";
  $dvt$$6$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$ = 50;
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$addListeners$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$addListeners$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.$addListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$removeListeners$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$removeListeners$$($DvtControlPanelEventManager$$) {
    $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.$removeListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnMouseDown$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnMouseDown$$($DvtControlPanelEventManager$$) {
    this.$_bPanned$ = this.$_bDragging$ = $JSCompiler_alias_FALSE$$;
    $DvtControlPanelEventManager$$.button != $dvt$$6$$.$MouseEvent$.$RIGHT_CLICK_BUTTON$ && ($DvtControlPanelEventManager$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), this.$_mx$ = $DvtControlPanelEventManager$$.x, this.$_my$ = $DvtControlPanelEventManager$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = $JSCompiler_alias_TRUE$$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = 
    this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnMouseMove$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnMouseMove$$($DvtControlPanelEventManager$$) {
    if(this.$_bDown$) {
      this.$_bDragging$ = $JSCompiler_alias_TRUE$$;
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), $DvtPanControl$$ = $DvtControlPanelEvent$$.x, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.y;
      $DvtControlPanelEventManager$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$ZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_bZooming$ = $JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$)), $DvtControlPanelEventManager$$ = this.$_origZoom$ * Math.pow(1 + 0.01 * (this.$_py$ >= $DvtControlPanelEvent$$ ? 
      1 : -1), Math.abs(this.$_py$ - $DvtControlPanelEvent$$)), this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$)) : this.$_handlePanMove$($DvtPanControl$$, $DvtControlPanelEvent$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DvtControlPanelEvent$$
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnMouseUp$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bDragging$ = this.$_bDown$ = $JSCompiler_alias_FALSE$$;
    this.$_bPanning$ && this.$_handlePanEnd$();
    this.$_bZooming$ && this.$_handleZoomEnd$();
    $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.$OnMouseUp$.call(this, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnClick$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnClick$$($DvtControlPanelEventManager$$) {
    if(this.$_bDragging$ || this.$_bPanned$) {
      this.$_bPanned$ = this.$_bDragging$ = $JSCompiler_alias_FALSE$$, $dvt$$6$$.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnMouseOut$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnMouseOut$$($DvtControlPanelEventManager$$) {
    if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
      (!$DvtControlPanelEventManager$$.relatedTarget || $DvtControlPanelEventManager$$.relatedTarget == $JSCompiler_alias_NULL$$) && this.$OnMouseUp$($DvtControlPanelEventManager$$)
    }
    $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.$OnMouseOut$.call(this, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$OnMouseWheel$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$OnMouseWheel$$($DvtControlPanelEventManager$$) {
    if($DvtControlPanelEventManager$$.wheelDelta && 0 !== $DvtControlPanelEventManager$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$();
      this.$_zoomAnimator$ && ($DvtControlPanelEvent$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$($DvtControlPanelEvent$$), this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$);
      this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$;
      var $DvtPanControl$$ = $DvtControlPanelEventManager$$.wheelDelta;
      $dvt$$6$$.$Agent$.$isPlatformGecko$() && ($DvtPanControl$$ = -$DvtPanControl$$);
      $DvtControlPanelEvent$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $DvtPanControl$$ / Math.abs($DvtPanControl$$);
      $DvtPanControl$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
      this.$getCtx$().$getDocumentUtils$().$cancelDomEvent$($DvtControlPanelEventManager$$);
      this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, $DvtPanControl$$.x, $DvtPanControl$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
      this.$_zoomAnimator$ && ($dvt$$6$$.$Playable$.$appendOnEnd$(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_clearZoomAnimator$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$_clearZoomAnimator$$() {
    this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_handleMomentumStartTimer$ = $JSCompiler_emptyFn$$();
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_handleMomentumTimer$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$_handleMomentumTimer$$() {
    var $dvt$$6$$ = 1 - 0.04 * this.$_momentumIterCount$, $dvt$$6$$ = $dvt$$6$$ * $dvt$$6$$, $DvtControlPanelEventManager$$ = this.$_momentumTimer$.$_interval$, $DvtControlPanelEvent$$ = $dvt$$6$$ * this.$_momentumXperMS$ * $DvtControlPanelEventManager$$, $dvt$$6$$ = $dvt$$6$$ * this.$_momentumYperMS$ * $DvtControlPanelEventManager$$;
    this.$_momentumDx$ += $DvtControlPanelEvent$$;
    this.$_momentumDy$ += $dvt$$6$$;
    var $DvtControlPanelEventManager$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $DvtPanControl$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
    this.$_callbackObj$.$panTo$($DvtControlPanelEventManager$$, $DvtPanControl$$);
    var $DropdownItemSprite$$ = $JSCompiler_alias_FALSE$$;
    if(24 <= this.$_momentumIterCount$) {
      $DropdownItemSprite$$ = $JSCompiler_alias_TRUE$$
    }else {
      var $DvtControlPanelDefaults$$ = this.$_callbackObj$.$getPanX$(), $currY$$18$$ = this.$_callbackObj$.$getPanY$();
      if(Math.abs($DvtControlPanelDefaults$$ - $DvtControlPanelEventManager$$) > Math.abs($DvtControlPanelEvent$$) || Math.abs($currY$$18$$ - $DvtPanControl$$) > Math.abs($dvt$$6$$)) {
        $DropdownItemSprite$$ = $JSCompiler_alias_TRUE$$
      }
    }
    $DropdownItemSprite$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchStartInternal$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchStartInternal$$($dvt$$6$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($dvt$$6$$, this.$ZoomStartTouch$, this);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($dvt$$6$$, this.$PanStartTouch$, this)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchMoveInternal$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchMoveInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$);
    (this.$_callbackObj$.$_bZoomingEnabled$ || this.$_callbackObj$.$_bPanningEnabled$) && $DvtControlPanelEventManager$$.preventDefault()
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchEndInternal$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$HandleImmediateTouchEndInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$ZoomStartTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$ZoomStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    1 >= $DvtPanControl$$.length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), 
    this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = $JSCompiler_alias_NULL$$, $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$), this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtPanControl$$)));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$ZoomMoveTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$ZoomMoveTouch$$() {
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    if(2 == $DvtControlPanelEventManager$$.length) {
      var $DvtControlPanelEvent$$ = this.$TouchManager$.$getMultiTouchData$($DvtControlPanelEventManager$$);
      if($DvtControlPanelEvent$$) {
        this.$_bZooming$ || (this.$_bZooming$ = $JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$ZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$());
        this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$);
        this.$_origDist$ == $JSCompiler_alias_NULL$$ && (this.$_origDist$ = $DvtControlPanelEvent$$.$dist$ - $DvtControlPanelEvent$$.$dz$);
        var $DvtPanControl$$ = this.$_origZoom$ * ($DvtControlPanelEvent$$.$dist$ / this.$_origDist$), $DropdownItemSprite$$ = this.$_pzc$.$getCtx$().$pageToStageCoords$($DvtControlPanelEvent$$.$cx$, $DvtControlPanelEvent$$.$cy$);
        this.$hideTooltip$();
        this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
        this.$_callbackObj$.$zoomTo$($DvtPanControl$$, $DropdownItemSprite$$.x, $DropdownItemSprite$$.y);
        this.$_callbackObj$.$panBy$($DvtControlPanelEvent$$.$dcx$, $DvtControlPanelEvent$$.$dcy$)
      }
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$ZoomEndTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$ZoomEndTouch$$() {
    this.$_bZooming$ && (this.$_origDist$ = $JSCompiler_alias_NULL$$, this.$TouchManager$.$unblockTouchHold$(), this.$_handleZoomEnd$());
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
    0 == $DvtControlPanelEventManager$$.length && this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$ZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_ZOOM_END$))
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$PanStartTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$PanStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    !this.$_bZooming$ && 1 >= this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, 
    this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$PanMoveTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$PanMoveTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(!this.$_bZooming$ && 1 == this.$TouchManager$.$getTouchIdsForObj$($dvt$$6$$.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length) {
      var $DvtPanControl$$ = $DvtControlPanelEvent$$.pageX, $DropdownItemSprite$$ = $DvtControlPanelEvent$$.pageY;
      this.$_handlePanMove$($DvtPanControl$$, $DropdownItemSprite$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DropdownItemSprite$$
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$PanEndTouch$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$PanEndTouch$$($dvt$$6$$) {
    !this.$_bZooming$ && this.$_bPanning$ && (this.$_handlePanEnd$(), this.$SetEventInfo$($dvt$$6$$, "panned", $JSCompiler_alias_TRUE$$))
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_handleZoomEnd$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$_handleZoomEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$ZoomEvent$($dvt$$6$$.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_END$));
    this.$_bZooming$ = $JSCompiler_alias_FALSE$$;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_handlePanMove$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$_handlePanMove$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_bPanning$ || (this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$PanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$)), this.$_bPanning$ = $JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$), this.$_bMomentumPanning$ && (this.$_arLastNMouseMoves$ = []));
    this.$_callbackObj$.$panTo$(this.$_origPanX$ + $DvtControlPanelEventManager$$ - this.$_px$, this.$_origPanY$ + $DvtControlPanelEvent$$ - this.$_py$);
    this.$_bMomentumPanning$ && (this.$_lastTime$ = this.$_currTime$, this.$_currTime$ = (new Date).getTime(), this.$_momentumStartTimer$ ? (this.$_momentumStartTimer$.$isRunning$() && this.$_momentumStartTimer$.stop(), this.$_momentumStartTimer$.reset()) : this.$_momentumStartTimer$ = new $dvt$$6$$.$Timer$(this.$_context$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumStartTimer$, this, 1), this.$_arLastNMouseMoves$.push({$dt$:this.$_currTime$ - this.$_lastTime$, 
    $dx$:$DvtControlPanelEventManager$$ - this.$_mx$, $dy$:$DvtControlPanelEvent$$ - this.$_my$}), 5 < this.$_arLastNMouseMoves$.length && this.$_arLastNMouseMoves$.splice(0, 1), this.$_momentumStartTimer$.start())
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$_handlePanEnd$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$_handlePanEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new $dvt$$6$$.$PanEvent$($dvt$$6$$.$PanEvent$.$SUBTYPE_DRAG_PAN_END$));
    this.$_bPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_bPanned$ = $JSCompiler_alias_TRUE$$;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    if(this.$_momentumStartTimer$ && this.$_momentumStartTimer$.$isRunning$()) {
      this.$_momentumStartTimer$.stop();
      this.$_momentumStartTimer$.reset();
      this.$_momentumTimer$ ? this.$_momentumTimer$.reset() : this.$_momentumTimer$ = new $dvt$$6$$.$Timer$(this.$_context$, $dvt$$6$$.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumTimer$, this);
      for(var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEvent$$ = 0, $DvtPanControl$$ = 0, $DropdownItemSprite$$ = this.$_arLastNMouseMoves$.length;0 < this.$_arLastNMouseMoves$.length;) {
        var $DvtControlPanelDefaults$$ = this.$_arLastNMouseMoves$.pop(), $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$ + $DvtControlPanelDefaults$$.$dt$, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$.$dx$, $DvtPanControl$$ = $DvtPanControl$$ + $DvtControlPanelDefaults$$.$dy$
      }
      this.$_arLastNMouseMoves$ = $JSCompiler_alias_NULL$$;
      this.$_momentumXperMS$ = $DvtControlPanelEvent$$ / $DvtControlPanelEventManager$$;
      this.$_momentumYperMS$ = $DvtPanControl$$ / $DvtControlPanelEventManager$$;
      this.$_momentumTimer$.setInterval(Math.ceil($DvtControlPanelEventManager$$ / $DropdownItemSprite$$));
      this.$_momentumIterCount$ = 1;
      this.$_momentumDy$ = this.$_momentumDx$ = 0;
      this.$_pzc$.$_bPanningEnabled$ && this.$_momentumTimer$.start()
    }else {
      this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)
    }
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$PanZoomEnd$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$PanZoomEnd$$() {
    this.$OnMouseUp$($JSCompiler_alias_NULL$$)
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$GetTouchResponse$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$GetTouchResponse$$() {
    return this.$_pzc$.$_bPanningEnabled$ || this.$_pzc$.$_bZoomingEnabled$ ? $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $dvt$$6$$.$EventManager$.$TOUCH_RESPONSE_AUTO$
  };
  $dvt$$6$$.$PanZoomCanvasEventManager$.prototype.$StoreInfoByEventType$ = function $$dvt$$6$$$$PanZoomCanvasEventManager$$$$StoreInfoByEventType$$($DvtControlPanelEventManager$$) {
    return $DvtControlPanelEventManager$$ == $dvt$$6$$.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? $JSCompiler_alias_FALSE$$ : $dvt$$6$$.$PanZoomCanvasEventManager$.$superclass$.$StoreInfoByEventType$.call(this, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$PanZoomCanvasKeyboardHandler$ = function $$dvt$$6$$$$PanZoomCanvasKeyboardHandler$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$)
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$PanZoomCanvasKeyboardHandler$, $dvt$$6$$.$KeyboardHandler$);
  $dvt$$6$$.$PanZoomCanvasKeyboardHandler$.prototype.Init = function $$dvt$$6$$$$PanZoomCanvasKeyboardHandler$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $dvt$$6$$.$PanZoomCanvasKeyboardHandler$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_component$ = $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$PanZoomCanvasKeyboardHandler$.prototype.$processKeyDown$ = function $$dvt$$6$$$$PanZoomCanvasKeyboardHandler$$$$processKeyDown$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.keyCode, $DvtPanControl$$ = this.$_component$.$_panZoomCanvas$;
    if($DvtControlPanelEvent$$ == $dvt$$6$$.$KeyboardEvent$.$PAGE_UP$) {
      $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$($DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, $DvtPanControl$$.$_panIncrement$)
    }else {
      if($DvtControlPanelEvent$$ == $dvt$$6$$.$KeyboardEvent$.$PAGE_DOWN$) {
        $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$(-$DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, -$DvtPanControl$$.$_panIncrement$)
      }else {
        if($DvtControlPanelEvent$$ == $dvt$$6$$.$KeyboardEvent$.$FORWARD_SLASH$) {
          ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$_controlPanel$) && $DvtControlPanelEventManager$$.$toggleExpandCollapse$()
        }else {
          if($dvt$$6$$.$KeyboardEvent$.$isEquals$($DvtControlPanelEventManager$$) || $dvt$$6$$.$KeyboardEvent$.$isPlus$($DvtControlPanelEventManager$$)) {
            $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() + $DvtPanControl$$.$_zoomIncrement$)
          }else {
            if($dvt$$6$$.$KeyboardEvent$.$isMinus$($DvtControlPanelEventManager$$) || $dvt$$6$$.$KeyboardEvent$.$isUnderscore$($DvtControlPanelEventManager$$)) {
              $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() - $DvtPanControl$$.$_zoomIncrement$)
            }else {
              if(($DvtControlPanelEvent$$ == $dvt$$6$$.$KeyboardEvent$.ZERO || $DvtControlPanelEvent$$ == $dvt$$6$$.$KeyboardEvent$.$NUMPAD_ZERO$) && !$DvtControlPanelEventManager$$.ctrlKey && !$DvtControlPanelEventManager$$.shiftKey) {
                $DvtPanControl$$.$zoomToFit$()
              }else {
                return $dvt$$6$$.$PanZoomCanvasKeyboardHandler$.$superclass$.$processKeyDown$.call(this, $DvtControlPanelEventManager$$)
              }
            }
          }
        }
      }
    }
  };
  $dvt$$6$$.$CollapsiblePanel$ = function $$dvt$$6$$$$CollapsiblePanel$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $disclosed$$1$$, $isFixed$$) {
    this.Init($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $disclosed$$1$$, $isFixed$$)
  };
  $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ = "col_northeast";
  $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ = "col_southeast";
  $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ = "col_northwest";
  $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ = "col_southwest";
  $dvt$$6$$.$CollapsiblePanel$.$ANIMATIONDURATION$ = 0.25;
  $dvt$$6$$.$CollapsiblePanel$.$BODYCOLOR$ = "#EBEFF5";
  $dvt$$6$$.$CollapsiblePanel$.$TITLEBARCLOSEICON_WIDTH$ = 10;
  $dvt$$6$$.$CollapsiblePanel$.$TITLEBARCLOSEICON_HEIGHT$ = 10;
  $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$ = 25;
  $dvt$$6$$.$CollapsiblePanel$.$BUTTONWIDTH$ = 10;
  $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$ = 5;
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$CollapsiblePanel$, $dvt$$6$$.$Container$);
  $dvt$$6$$.$CollapsiblePanel$.prototype.Init = function $$dvt$$6$$$$CollapsiblePanel$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$61$$, $disclosed$$2$$, $isFixed$$1$$) {
    $dvt$$6$$.$CollapsiblePanel$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_maxWidth$ = $DvtControlPanelEvent$$;
    this.$_maxHeight$ = $DvtPanControl$$;
    this.$setCollapseDirection$($DropdownItemSprite$$);
    this.$_buttonImages$ = $DvtControlPanelDefaults$$;
    this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : $dvt$$6$$.$Agent$.$isEnvironmentBatik$();
    this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = $JSCompiler_alias_NULL$$;
    this.$_styleMap$ = $styleMap$$61$$;
    this.$_borderColor$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    this.$_borderRadius$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, $JSCompiler_alias_NULL$$));
    this.$_bgColor$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    this.$_bgAlpha$ = $dvt$$6$$.$StyleUtils$.$getStyle$(this.$_styleMap$, $dvt$$6$$.$ControlPanel$.$BG_ALPHA$, 1);
    this.$_collapse$ = $disclosed$$2$$ !== $JSCompiler_alias_VOID$$ ? !$disclosed$$2$$ : $JSCompiler_alias_FALSE$$;
    this.$_contentContainer$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    this.$addChild$(this.$_contentContainer$);
    this.$_contentContainer$.$setTranslate$($dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$, $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$HandleMouseOver$, $JSCompiler_alias_FALSE$$, this);
    this.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$HandleMouseOut$, $JSCompiler_alias_FALSE$$, this)
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$_drawButton$ = function $$dvt$$6$$$$CollapsiblePanel$$$$_drawButton$$() {
    if(!this.$_isFixed$) {
      this.$_buttonFrame$ = $dvt$$6$$.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$(this.$getCtx$(), $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $JSCompiler_alias_FALSE$$);
      this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
      this.$addChild$(this.$_buttonFrame$);
      var $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
      this.isCollapsed() ? this.$_collapseExpandButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, 
      $DvtControlPanelEventManager$$ ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$);
      this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$);
      this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEventManager$$ ? this.$_width$ : -$dvt$$6$$.$CollapsiblePanel$.$BUTTONWIDTH$);
      $dvt$$6$$.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$CLICK$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, 
      this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this))
    }
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$setButtonTooltips$ = function $$dvt$$6$$$$CollapsiblePanel$$$$setButtonTooltips$$($dvt$$6$$, $DvtControlPanelEventManager$$) {
    this.$_expandTooltip$ = $dvt$$6$$;
    this.$_collapseTooltip$ = $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$addContent$ = function $$dvt$$6$$$$CollapsiblePanel$$$$addContent$$($DvtControlPanelEventManager$$) {
    this.$_contentContainer$.$addChild$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$($dvt$$6$$.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleResize$, $JSCompiler_alias_FALSE$$, this);
    $DvtControlPanelEventManager$$ = this.$_contentContainer$.$getDimensions$();
    this.$_width$ = Math.min(this.$_maxWidth$, $DvtControlPanelEventManager$$.$w$ + 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_height$ = Math.min(this.$_maxHeight$, $DvtControlPanelEventManager$$.$h$ + 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_background$ ? (this.$_background$.$setCmds$(this.$_getOutlinePath$(this.$_width$, this.$_height$)), $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, this.$_buttonFrame$ && $DvtControlPanelEventManager$$ && this.$_buttonFrame$.$setTranslateX$(this.$_width$)) : (this.$_background$ = this.$_createRoundRectangle$(this.$_width$, this.$_height$), this.$addChildAt$(this.$_background$, 
    0), this.$_drawButton$());
    this.$_collapse$ && this.$_collapseExpand$($JSCompiler_alias_FALSE$$)
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$HandleResize$ = function $$dvt$$6$$$$CollapsiblePanel$$$$HandleResize$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.getWidth() + 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
    $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getHeight() + 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$;
    this.$_background$.$setCmds$(this.$_getOutlinePath$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$));
    var $DvtPanControl$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_buttonFrame$ && $DvtPanControl$$ && this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEvent$$);
    this.$FireListener$(new $dvt$$6$$.$ResizeEvent$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, 0, 0))
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.isCollapsed = $JSCompiler_get$$("$_collapse$");
  $dvt$$6$$.$CollapsiblePanel$.prototype.$setCollapsed$ = function $$dvt$$6$$$$CollapsiblePanel$$$$setCollapsed$$($DvtControlPanelEventManager$$) {
    this.$_collapse$ != $DvtControlPanelEventManager$$ && (this.$_collapse$ = $DvtControlPanelEventManager$$, this.$_collapseExpand$($JSCompiler_alias_TRUE$$), this.$FireListener$(new $dvt$$6$$.$CollapsiblePanelEvent$($DvtControlPanelEventManager$$ ? $dvt$$6$$.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ : $dvt$$6$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$)))
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$setCollapseDirection$ = function $$dvt$$6$$$$CollapsiblePanel$$$$setCollapseDirection$$($DvtControlPanelEventManager$$) {
    this.$_collapseDir$ = $DvtControlPanelEventManager$$ ? $DvtControlPanelEventManager$$ : $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$;
    $dvt$$6$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && (this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ ? this.$_collapseDir$ = $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ : this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ ? this.$_collapseDir$ = $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ : this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ ? this.$_collapseDir$ = $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ : 
    this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ && (this.$_collapseDir$ = $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$))
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$getMaxContentWidth$ = function $$dvt$$6$$$$CollapsiblePanel$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$getMaxContentHeight$ = function $$dvt$$6$$$$CollapsiblePanel$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * $dvt$$6$$.$CollapsiblePanel$.$_CONTENT_PADDING$
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$_getRefPoint$ = function $$dvt$$6$$$$CollapsiblePanel$$$$_getRefPoint$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    return!this.isCollapsed() ? $DvtControlPanelEvent$$ ? new $dvt$$6$$.$Point$(1 / $DvtControlPanelEventManager$$.x, 1 / $DvtControlPanelEventManager$$.y) : new $dvt$$6$$.$Point$(-$DvtControlPanelEventManager$$.x, -$DvtControlPanelEventManager$$.y) : $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$_collapseExpand$ = function $$dvt$$6$$$$CollapsiblePanel$$$$_collapseExpand$$($DvtControlPanelEventManager$$) {
    this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop($JSCompiler_alias_TRUE$$));
    var $DvtControlPanelEvent$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, $DvtPanControl$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, $DropdownItemSprite$$ = $DvtPanControl$$ ? 0 : this.$_width$, $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ ? 0 : this.$_height$, $scaleAnim$$1_scalePoint$$ = 
    new $dvt$$6$$.$Point$(1 / this.$_width$, 1 / this.$_height$), $DropdownItemSprite$$ = new $dvt$$6$$.$Point$($DropdownItemSprite$$, $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$ = new $dvt$$6$$.$Point$($DvtPanControl$$ ? -this.$_width$ : this.$_width$, $DvtControlPanelDefaults$$ - ($DvtControlPanelEvent$$ ? 0 : $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$));
    $DvtControlPanelEventManager$$ || (this.$_background$.$setAlpha$(0), this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(0));
    $scaleAnim$$1_scalePoint$$ = new $dvt$$6$$.$AnimScaleBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($scaleAnim$$1_scalePoint$$, $JSCompiler_alias_TRUE$$), $DvtControlPanelEventManager$$ ? $dvt$$6$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEvent$$ = new $dvt$$6$$.$AnimMoveBy$(this.$getCtx$(), this.$_buttonFrame$, this.$_getRefPoint$($DvtControlPanelEvent$$), $DvtControlPanelEventManager$$ ? $dvt$$6$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$AnimMoveBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($DropdownItemSprite$$), $DvtControlPanelEventManager$$ ? $dvt$$6$$.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    if(this.$_animation$ = new $dvt$$6$$.$ParallelPlayable$(this.$getCtx$(), $scaleAnim$$1_scalePoint$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$)) {
      this.$getCtx$().$getTooltipManager$().$hideTooltip$(), this.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$HandleMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$HandleMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$ && (this.$_collapseExpandButton$.$removeEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$CLICK$, 
      this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this)), this.isCollapsed() && this.$_contentContainer$.$setAlpha$(0), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()
    }
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$_createRoundRectangle$ = function $$dvt$$6$$$$CollapsiblePanel$$$$_createRoundRectangle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$6$$.$Path$(this.$getCtx$(), this.$_getOutlinePath$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)), $DropdownItemSprite$$ = this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$];
    $DvtPanControl$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$);
    $DvtPanControl$$.$setSolidStroke$(this.$_borderColor$, $DropdownItemSprite$$);
    return $DvtPanControl$$
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$_getOutlinePath$ = function $$dvt$$6$$$$CollapsiblePanel$$$$_getOutlinePath$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_borderRadius$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    $DvtControlPanelEvent$$ <= $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$ && ($DvtControlPanelEvent$$ = $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$);
    $DropdownItemSprite$$ = this.$_isFixed$ || $DvtControlPanelDefaults$$ ? $dvt$$6$$.$PathUtils$.moveTo($DvtPanControl$$, 0) : $dvt$$6$$.$PathUtils$.moveTo(0, 0);
    $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$ - $DvtPanControl$$, 0);
    !this.$_isFixed$ && $DvtControlPanelDefaults$$ ? ($DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, 0), $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtPanControl$$)) : $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, 0, $DvtControlPanelEventManager$$, $DvtPanControl$$);
    !this.$_isFixed$ && $DvtControlPanelEvent$$ == $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$ && $DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : ($DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ - $DvtPanControl$$), $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$ - 
    $DvtPanControl$$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo($DvtPanControl$$, $DvtControlPanelEvent$$);
    $DropdownItemSprite$$ = !this.$_isFixed$ && $DvtControlPanelEvent$$ == $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$ && !$DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ + $dvt$$6$$.$PathUtils$.lineTo(0, $DvtControlPanelEvent$$) : $DropdownItemSprite$$ + $dvt$$6$$.$PathUtils$.$quadTo$(0, $DvtControlPanelEvent$$, 0, $DvtControlPanelEvent$$ - $DvtPanControl$$);
    if(this.$_isFixed$ || $DvtControlPanelDefaults$$) {
      $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.lineTo(0, $DvtPanControl$$), $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.$quadTo$(0, 0, $DvtPanControl$$, 0)
    }
    return $DropdownItemSprite$$ += $dvt$$6$$.$PathUtils$.closePath()
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$OnAnimationEnd$ = function $$dvt$$6$$$$CollapsiblePanel$$$$OnAnimationEnd$$() {
    this.$_animationStopped$ = $JSCompiler_alias_FALSE$$;
    this.$_animation$ = $JSCompiler_alias_NULL$$;
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_ROLLOUT_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.isCollapsed() || this.$_contentContainer$.$setAlpha$(1);
    $DvtControlPanelEventManager$$ = this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == $dvt$$6$$.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_collapseExpandButton$ && (this.isCollapsed() ? this.$_collapseExpandButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = $dvt$$6$$.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, $dvt$$6$$.$CollapsiblePanel$.$BUTTONHEIGHT$, 
    this.$_styleMap$, $DvtControlPanelEventManager$$ ? $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$ : $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), $dvt$$6$$.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$CLICK$, this.$OnButtonClick$, 
    $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$($dvt$$6$$.$MouseEvent$.$MOUSEOUT$, this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this)))
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$OnButtonClick$ = function $$dvt$$6$$$$CollapsiblePanel$$$$OnButtonClick$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    this.$setCollapsed$(!this.isCollapsed())
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$OnButtonHoverOver$ = function $$dvt$$6$$$$CollapsiblePanel$$$$OnButtonHoverOver$$($dvt$$6$$) {
    var $DvtControlPanelEventManager$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
    $DvtControlPanelEventManager$$ != $JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showTooltip$($dvt$$6$$.pageX, $dvt$$6$$.pageY, $DvtControlPanelEventManager$$, this.$_collapseExpandButton$, $JSCompiler_alias_TRUE$$)
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$OnButtonHoverOut$ = function $$dvt$$6$$$$CollapsiblePanel$$$$OnButtonHoverOut$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$HandleMouseOver$ = function $$dvt$$6$$$$CollapsiblePanel$$$$HandleMouseOver$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$])
  };
  $dvt$$6$$.$CollapsiblePanel$.prototype.$HandleMouseOut$ = function $$dvt$$6$$$$CollapsiblePanel$$$$HandleMouseOut$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_bgAlpha$);
    this.$_background$.$setFill$($DvtControlPanelEventManager$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[$dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$])
  };
  $dvt$$6$$.$CollapsiblePanelEvent$ = function $$dvt$$6$$$$CollapsiblePanelEvent$$($DvtControlPanelEventManager$$) {
    this.Init($dvt$$6$$.$CollapsiblePanelEvent$.$TYPE$);
    this.$_subtype$ = $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$CollapsiblePanelEvent$, $dvt$$6$$.$BaseComponentEvent$);
  $dvt$$6$$.$CollapsiblePanelEvent$.$TYPE$ = "dvtCollapsiblePanelEvent";
  $dvt$$6$$.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ = "hide";
  $dvt$$6$$.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$ = "show";
  $dvt$$6$$.$CollapsiblePanelEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  $dvt$$6$$.$ImageLAFUtils$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ImageLAFUtils$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$ImageLAFUtils$.$loadIcon$ = function $$dvt$$6$$$$ImageLAFUtils$$$loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new $dvt$$6$$.$Image$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $dvt$$6$$.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($dvt$$6$$) {
      $dvt$$6$$ != $JSCompiler_alias_NULL$$ && ($dvt$$6$$.width && $dvt$$6$$.height) && ($DvtPanControl$$.$setWidth$($dvt$$6$$.width), $DvtPanControl$$.$setHeight$($dvt$$6$$.height))
    });
    return $DvtPanControl$$
  };
  $dvt$$6$$.$ButtonLAFUtils$ = {};
  $dvt$$6$$.$Obj$.$createSubclass$($dvt$$6$$.$ButtonLAFUtils$, $dvt$$6$$.$Obj$);
  $dvt$$6$$.$ButtonLAFUtils$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
  $dvt$$6$$.$ButtonLAFUtils$.$CONTROL_BUTTON_WIDTH$ = 23;
  $dvt$$6$$.$ButtonLAFUtils$.$CONTROL_BUTTON_HEIGHT$ = 21;
  $dvt$$6$$.$ButtonLAFUtils$.$ZOOM_BUTTON_HEIGHT$ = 20;
  $dvt$$6$$.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
  $dvt$$6$$.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
  $dvt$$6$$.$ButtonLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  $dvt$$6$$.$ButtonLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  $dvt$$6$$.$ButtonLAFUtils$.$BORDER_COLOR$ = "#7C8191";
  $dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_DARK$ = "#E0E1E1";
  $dvt$$6$$.$ButtonLAFUtils$.$GRADIENT_LIGHT$ = "#F0F1F2";
  $dvt$$6$$.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$ = 8;
  $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$ = "solid";
  $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
  $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ = "#3474D3";
  $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$ = "#BFD8FB";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_ENA$ = "zoominUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_OVR$ = "zoominOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_DWN$ = "zoominDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_ENA$ = "zoomoutUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_OVR$ = "zoomoutOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_DWN$ = "zoomoutDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
  $dvt$$6$$.$ButtonLAFUtils$.$_PAN_ENA$ = "pandialUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_PAN_OVR$ = "pandialOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_PAN_DWN$ = "pandialDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_ENA$ = "recenterUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_OVR$ = "recenterOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_DWN$ = "recenterDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESET_ENA$ = "resetUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESET_OVR$ = "resetOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESET_DWN$ = "resetDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_ENA$ = "drillupUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_OVR$ = "drillupOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_DWN$ = "drillupDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$ = "drilldownUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_OVR$ = "drilldownOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_DWN$ = "drilldownDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_MAX_ENA$ = "maxUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_MAX_OVR$ = "maxOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_MAX_DWN$ = "maxDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESTORE_ENA$ = "restoreUp";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESTORE_OVR$ = "restoreOver";
  $dvt$$6$$.$ButtonLAFUtils$.$_RESTORE_DWN$ = "restoreDown";
  $dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$ = "collapseEna";
  $dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$ = "collapseOvr";
  $dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$ = "collapseDwn";
  $dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_ENA$ = "expandEna";
  $dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_OVR$ = "expandOvr";
  $dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_DWN$ = "expandDwn";
  $dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_ENA$ = "quickQueryEna";
  $dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
  $dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
  $dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
  $dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
  $dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
  $dvt$$6$$.$ButtonLAFUtils$.$_UP$ = "Up";
  $dvt$$6$$.$ButtonLAFUtils$.$_OVER$ = "Over";
  $dvt$$6$$.$ButtonLAFUtils$.$_DOWN$ = "Down";
  $dvt$$6$$.$ButtonLAFUtils$.$_SEL$ = "Sel";
  $dvt$$6$$.$ButtonLAFUtils$.$_R2L$ = "_r";
  $dvt$$6$$.$ButtonLAFUtils$.$_SYNC$ = "synchronize";
  $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$ = "right";
  $dvt$$6$$.$ButtonLAFUtils$.$DIR_LEFT$ = "left";
  $dvt$$6$$.$ButtonLAFUtils$.$createPanControl$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$62$$) {
    var $panButton$$2_panUpState$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_PAN_ENA$], $styleMap$$62$$), $panDownState$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    $panDownState$$.$setTranslate$(20, 20);
    var $downImage_panOverState$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_PAN_DWN$], $styleMap$$62$$);
    $downImage_panOverState$$.$setTranslate$(-20, -20);
    $panDownState$$.$addChild$($downImage_panOverState$$);
    $downImage_panOverState$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$);
    $downImage_panOverState$$.$setTranslate$(20, 20);
    var $overImage$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_PAN_OVR$], $styleMap$$62$$);
    $overImage$$.$setTranslate$(-20, -20);
    $downImage_panOverState$$.$addChild$($overImage$$);
    $panButton$$2_panUpState$$ = new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
    if(0 < ($DropdownItemSprite$$ & $dvt$$6$$.$ControlPanel$.$CONTROLS_CENTER_BUTTON$)) {
      var $recenterButton$$2$$ = new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $dvt$$6$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_ENA$], $styleMap$$62$$), $dvt$$6$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_OVR$], $styleMap$$62$$), $dvt$$6$$.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, 
      $DvtControlPanelDefaults$$[$dvt$$6$$.$ButtonLAFUtils$.$_RECENTER_DWN$], $styleMap$$62$$));
      $recenterButton$$2$$.$setTranslate$(9, 9)
    }
    return new $DvtPanControl$$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $styleMap$$62$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createDrillUpButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createDrillUpButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_OVR$], $DvtPanControl$$), $dwn$$5$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 0.4);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$5$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createDrillDownButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createDrillDownButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_OVR$], $DvtPanControl$$), $dwn$$6$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 0.4);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$6$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createResetButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createResetButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_RESET_OVR$], $DvtPanControl$$), $dwn$$7$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_RESET_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$7$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createZoomToFitButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$], $DvtPanControl$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createZoomInButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createZoomInButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_OVR$], $DvtPanControl$$), $dwn$$9$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$], $DvtPanControl$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$9$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createZoomOutButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createZoomOutButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_OVR$], $DvtPanControl$$), $dwn$$10$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$], $DvtPanControl$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$10$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createLayoutItemButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createLayoutItemButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$50$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0), $w$$33$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $h$$27$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $shape$$65$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$50$$, $w$$33$$, $h$$27$$, $DvtControlPanelDefaults$$);
    $dvt$$6$$.$ButtonLAFUtils$.$_setButtonColors$($DvtPanControl$$, $shape$$65$$, $w$$33$$, $h$$27$$ + 2 * $r$$50$$, $DvtControlPanelDefaults$$, $JSCompiler_alias_TRUE$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    ($DvtControlPanelEventManager$$ = $dvt$$6$$.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $w$$33$$, $h$$27$$)) && $shape$$65$$.$addChild$($DvtControlPanelEventManager$$);
    return $shape$$65$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_getLayoutURI$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_getLayoutURI$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = "";
    $DvtControlPanelEvent$$ == $dvt$$6$$.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_UP$ : $DvtControlPanelEvent$$ == $dvt$$6$$.$Button$.$STATE_OVER$ ? $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_OVER$ : $DvtControlPanelEvent$$ == $dvt$$6$$.$Button$.$STATE_DOWN$ && ($DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_DOWN$);
    $DropdownItemSprite$$ && ($DvtPanControl$$ += $dvt$$6$$.$ButtonLAFUtils$.$_SEL$, $dvt$$6$$.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) && ($DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_R2L$));
    return $DvtPanControl$$ + ($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createPanelCardButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createPanelCardButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $dvt$$6$$.$ButtonLAFUtils$.$_SYNC$, $JSCompiler_alias_TRUE$$);
    return $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$[$DvtControlPanelDefaults$$], $DvtPanControl$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createPanelCardSyncItemState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createPanelCardSyncItemState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$51$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0);
    $DvtControlPanelEventManager$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$51$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    $dvt$$6$$.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$ + 2 * $r$$51$$, $DvtControlPanelDefaults$$, $JSCompiler_alias_TRUE$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createControlButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createControlButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    return $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $DvtControlPanelDefaults$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createExpandButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createExpandButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$14$$ = $DvtControlPanelDefaults$$ == $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_ENA$], $DropdownItemSprite$$, $right$$14$$);
    var $ovr$$11$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_OVR$], $DropdownItemSprite$$, $right$$14$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_DWN$], $DropdownItemSprite$$, $right$$14$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$11$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createCollapseButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createCollapseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$15$$ = $DvtControlPanelDefaults$$ == $dvt$$6$$.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_ENA$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_ENA$], $DropdownItemSprite$$, $right$$15$$);
    var $ovr$$12$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_OVR$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_OVR$], $DropdownItemSprite$$, $right$$15$$);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, $dvt$$6$$.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_EXPAND_DWN$] : $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_COLLAPSE_DWN$], $DropdownItemSprite$$, $right$$15$$);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$12$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createQuickQueryButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createQuickQueryButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_ENA$]), $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_OVR$]), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_QUICKQUERY_DWN$]);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createClearResultsButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createClearResultsButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$]), $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$]), $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[$dvt$$6$$.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$]);
    return new $dvt$$6$$.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createButtonBaseImage$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createButtonBaseImage$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $h$$30$$, $alpha$$27$$) {
    var $r$$52$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "buttonRadius", 0);
    if("undefined" === $DvtControlPanelDefaults$$ || $DvtControlPanelDefaults$$ == $JSCompiler_alias_NULL$$) {
      $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0)
    }
    if("undefined" === $h$$30$$ || $h$$30$$ == $JSCompiler_alias_NULL$$) {
      $h$$30$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_WIDTH$, 0)
    }
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_drawBaseButton$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $r$$52$$, $DvtControlPanelDefaults$$, $h$$30$$, $DropdownItemSprite$$);
    if($DvtControlPanelEventManager$$ = $dvt$$6$$.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $h$$30$$)) {
      $alpha$$27$$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$.$setAlpha$($alpha$$27$$), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$)
    }
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_loadIcon$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = new $dvt$$6$$.$Image$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtControlPanelDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $dvt$$6$$.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($dvt$$6$$) {
      $dvt$$6$$ != $JSCompiler_alias_NULL$$ && ($dvt$$6$$.width && $dvt$$6$$.height) && ($DvtControlPanelDefaults$$.$setWidth$($dvt$$6$$.width), $DvtControlPanelDefaults$$.$setHeight$($dvt$$6$$.height), $DvtControlPanelDefaults$$.$setTranslate$($DvtPanControl$$ / 2 - $dvt$$6$$.width / 2, $DropdownItemSprite$$ / 2 - $dvt$$6$$.height / 2))
    });
    return $DvtControlPanelDefaults$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createPanButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createPanButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new $dvt$$6$$.$Circle$($DvtControlPanelEventManager$$, 20, 20, 20);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = $dvt$$6$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createRecenterButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createRecenterButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new $dvt$$6$$.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new $dvt$$6$$.$Circle$($DvtControlPanelEventManager$$, 11, 11, 8);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtPanControl$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = $dvt$$6$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createCollapseExpandButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createCollapseExpandButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    $DvtControlPanelEvent$$ = $dvt$$6$$.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$);
    if($DvtControlPanelEventManager$$ = $dvt$$6$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$)) {
      $imageW_right$$16$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_IMAGE_WIDTH$, 0), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_IMAGE_HEIGHT$, 0), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = ($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0) - $imageW_right$$16$$) / 
      2, $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelDefaults$$, ($DvtPanControl$$ - $DropdownItemSprite$$) / 2)
    }
    return $DvtControlPanelEvent$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createQuickQueryButtonState$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createQuickQueryButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    return $DvtPanControl$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createPanButtonBackground$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createPanButtonBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$), $DvtControlPanelDefaults$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    "solid" == $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$FILL_TYPE$, $JSCompiler_alias_NULL$$) ? ($DvtPanControl$$.$setSolidStroke$($DvtControlPanelDefaults$$), $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$)) : ($DvtPanControl$$.$setStroke$(new $dvt$$6$$.$LinearGradientStroke$(36, ["#8D93A5", "#E0EAEB", $DvtControlPanelDefaults$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $DvtPanControl$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$(90, [$DropdownItemSprite$$, 
    $DropdownItemSprite$$, "#5A83BE", $DropdownItemSprite$$], [0.9, 0.1, 0, 0.7], [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
    return $DvtPanControl$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$createPanButtonUnderlay$ = function $$dvt$$6$$$$ButtonLAFUtils$$$createPanButtonUnderlay$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtPanControl$$.$setSolidStroke$($DropdownItemSprite$$);
    $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtPanControl$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_drawPanButtonBase$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_drawPanButtonBase$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $dvt$$6$$.$PathUtils$.moveTo(40, 20) + $dvt$$6$$.$PathUtils$.$quadTo$(40, 20 * $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$6$$.$PathUtils$.$quadTo$(20 * $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20, 40) + $dvt$$6$$.$PathUtils$.$quadTo$(20 * -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 
    20) + $dvt$$6$$.$PathUtils$.$quadTo$(0, 20 * $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20) + $dvt$$6$$.$PathUtils$.$quadTo$(0, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$6$$.$PathUtils$.$quadTo$(20 * -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20, 0) + $dvt$$6$$.$PathUtils$.$quadTo$(20 * $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20 * $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 
    20, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + $dvt$$6$$.$PathUtils$.$quadTo$(40, 20 * -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20) + $dvt$$6$$.$PathUtils$.closePath();
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, "draw_pan_button")
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_setGradientBorder$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_setGradientBorder$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setSolidStroke$("#FFFFFF");
    $DvtControlPanelEventManager$$.$setStroke$(new $dvt$$6$$.$LinearGradientStroke$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$, $DvtPanControl$$], 1))
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_setButtonColors$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_setButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $isDropdownItem$$) {
    if($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$)) {
      !$isDropdownItem$$ || $isDropdownItem$$ && $DvtControlPanelEventManager$$ == $dvt$$6$$.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$.$setInvisibleFill$() : ($DvtControlPanelEventManager$$ == $dvt$$6$$.$Button$.$STATE_OVER$ || $DvtControlPanelEventManager$$ == $dvt$$6$$.$Button$.$STATE_DOWN$) && $DvtControlPanelEvent$$.$setFill$(new $dvt$$6$$.$SolidFill$("#EBECED"))
    }else {
      if($DvtControlPanelDefaults$$[$dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$] == $dvt$$6$$.$CSSStyle$.$SKIN_SKYROS$) {
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$6$$.$Button$.$STATE_OVER$:
            $DvtControlPanelEvent$$.$setFill$(new $dvt$$6$$.$SolidFill$("#FFFFFF", 0.7));
            $DvtControlPanelEvent$$.$setStroke$(new $dvt$$6$$.$SolidStroke$($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$)));
            break;
          case $dvt$$6$$.$Button$.$STATE_DOWN$:
            $DvtControlPanelEvent$$.$setFill$(new $dvt$$6$$.$SolidFill$("#B3C6DB"));
            $DvtControlPanelEvent$$.$setStroke$(new $dvt$$6$$.$SolidStroke$($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$)));
            break;
          default:
            $DvtControlPanelEvent$$.$setInvisibleFill$()
        }
      }else {
        var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$6$$.$Button$.$STATE_DISABLED$:
          ;
          case $dvt$$6$$.$Button$.$STATE_ENABLED$:
            $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
            $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$6$$.$Button$.$STATE_OVER$:
            $dvt$$6$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0);
            $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
            $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$6$$.$Button$.$STATE_DOWN$:
            $dvt$$6$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
        }
        $DvtControlPanelEvent$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]))
      }
    }
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_setCloseButtonColors$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_setCloseButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if($dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$)) {
      $DvtControlPanelEvent$$.$setInvisibleFill$()
    }else {
      var $borderColor$$42_stroke$$86$$, $fillType$$11$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$FILL_TYPE$, $JSCompiler_alias_NULL$$);
      $borderColor$$42_stroke$$86$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
      if("solid" == $fillType$$11$$) {
        $DvtPanControl$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
        var $bgAlpha$$2$$, $strokeAlpha$$2$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$6$$.$Button$.$STATE_ENABLED$:
            $bgAlpha$$2$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$BG_ALPHA$, 1);
            $strokeAlpha$$2$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
            break;
          case $dvt$$6$$.$Button$.$STATE_DOWN$:
          ;
          case $dvt$$6$$.$Button$.$STATE_OVER$:
            $bgAlpha$$2$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$BG_ROLLOVER_ALPHA$, 1), $strokeAlpha$$2$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, $dvt$$6$$.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$, 1)
        }
        $DvtControlPanelEventManager$$ = new $dvt$$6$$.$SolidFill$($DvtPanControl$$, $bgAlpha$$2$$);
        $borderColor$$42_stroke$$86$$ = new $dvt$$6$$.$SolidStroke$($borderColor$$42_stroke$$86$$, $strokeAlpha$$2$$)
      }else {
        var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
        switch($DvtControlPanelEventManager$$) {
          case $dvt$$6$$.$Button$.$STATE_ENABLED$:
            $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
            $fill_alphas$$11$$ = [0, 0.2, 0.3];
            $fill_ratios$$11$$ = [0, 130 / 255, 1];
            break;
          case $dvt$$6$$.$Button$.$STATE_OVER$:
            $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
            $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
            $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case $dvt$$6$$.$Button$.$STATE_DOWN$:
            $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
        }
        $DvtControlPanelEventManager$$ = new $dvt$$6$$.$LinearGradientFill$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]);
        $borderColor$$42_stroke$$86$$ = new $dvt$$6$$.$SolidStroke$($borderColor$$42_stroke$$86$$, 1, 0.8)
      }
      $DvtControlPanelEvent$$.$setStroke$($borderColor$$42_stroke$$86$$);
      $DvtControlPanelEvent$$.$setFill$($DvtControlPanelEventManager$$)
    }
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_setSliderButtonColors$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_setSliderButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$) {
    var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
    switch($DvtControlPanelEventManager$$) {
      case $dvt$$6$$.$Button$.$STATE_ENABLED$:
        $DvtControlPanelEvent$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
        $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
        $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
        $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
        break;
      case $dvt$$6$$.$Button$.$STATE_OVER$:
        $dvt$$6$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$);
        $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
        $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
        $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
        break;
      case $dvt$$6$$.$Button$.$STATE_DOWN$:
        $dvt$$6$$.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
    }
    $DvtControlPanelEvent$$.$setFill$(new $dvt$$6$$.$LinearGradientFill$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$DvtControlPanelDefaults$$, $yy$$54$$, $DvtPanControl$$, $DropdownItemSprite$$]))
  };
  $dvt$$6$$.$ButtonLAFUtils$.$GetButtonPathCommands$ = function $$dvt$$6$$$$ButtonLAFUtils$$$GetButtonPathCommands$$($dvt$$6$$, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    return $DvtPanControl$$ ? ["M", $dvt$$6$$, 0, "L", $DvtControlPanelEvent$$, 0, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 0, 0, $DvtControlPanelEvent$$, "L", 0, $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 0, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, "L", $dvt$$6$$, $DvtControlPanelEventManager$$] : ["M", 0, 0, "L", $dvt$$6$$ - $DvtControlPanelEvent$$, 0, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 
    0, 0, 1, $dvt$$6$$, $DvtControlPanelEvent$$, "L", $dvt$$6$$, $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$, "A", $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, 0, 0, 1, $dvt$$6$$ - $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, "L", 0, $DvtControlPanelEventManager$$]
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_drawOpenCloseButtonHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    var $r$$56$$ = parseInt($dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$11$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtPanControl$$ = Math.max($DvtPanControl$$, $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, $dvt$$6$$.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtPanControl$$));
    $DvtControlPanelEventManager$$ = new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $dvt$$6$$.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$11$$, $DvtPanControl$$, $r$$56$$, $DvtControlPanelDefaults$$));
    $dvt$$6$$.$ButtonLAFUtils$.$_setCloseButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $buttonWidth$$11$$, $DvtPanControl$$, $DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_drawBaseButton$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_drawBaseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$) {
    $DvtControlPanelEventManager$$ = $dvt$$6$$.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$);
    $dvt$$6$$.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ + 2 * $DvtPanControl$$, $styleMap$$84$$);
    return $DvtControlPanelEventManager$$
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_createBaseButtonShape$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_createBaseButtonShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if($DvtControlPanelDefaults$$[$dvt$$6$$.$PanZoomComponent$.$SKIN_NAME$] == $dvt$$6$$.$CSSStyle$.$SKIN_SKYROS$) {
      return new $dvt$$6$$.$Rect$($DvtControlPanelEventManager$$, 0, 0, $DvtPanControl$$, $DropdownItemSprite$$)
    }
    $DvtPanControl$$ -= 2 * $DvtControlPanelEvent$$;
    $DropdownItemSprite$$ -= 2 * $DvtControlPanelEvent$$;
    $DvtControlPanelDefaults$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$;
    var $y$$151$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$19$$ = $dvt$$6$$.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$151$$) + $dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$151$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + 
    $y$$151$$) + $dvt$$6$$.$PathUtils$.$quadTo$($dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$151$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $y$$151$$ + $DvtControlPanelEvent$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$151$$);
    $DvtControlPanelDefaults$$ -= $DvtPanControl$$;
    $cmds$$19$$ += $dvt$$6$$.$PathUtils$.$quadTo$(-$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$151$$, -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + 
    $y$$151$$, -$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$151$$ - $DropdownItemSprite$$);
    $y$$151$$ -= $DropdownItemSprite$$;
    $cmds$$19$$ += $dvt$$6$$.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$151$$, -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + 
    $y$$151$$, $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$151$$);
    $DvtControlPanelDefaults$$ += $DvtPanControl$$;
    $cmds$$19$$ += $dvt$$6$$.$PathUtils$.$quadTo$($dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$151$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$151$$) + $dvt$$6$$.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + 
    $y$$151$$, $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $y$$151$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$151$$ + $DropdownItemSprite$$) + $dvt$$6$$.$PathUtils$.closePath();
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $cmds$$19$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$drawDropdownShape$ = function $$dvt$$6$$$$ButtonLAFUtils$$$drawDropdownShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DropdownItemSprite$$ = $dvt$$6$$.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "radius", 0);
    $DvtControlPanelEvent$$ -= 2 * $DropdownItemSprite$$;
    $DvtPanControl$$ -= $DropdownItemSprite$$;
    var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$152$$ = $DvtPanControl$$, $cmds$$20$$ = $dvt$$6$$.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DropdownItemSprite$$, $y$$152$$) + $dvt$$6$$.$PathUtils$.$quadTo$($DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $y$$152$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * 
    $DropdownItemSprite$$ + $y$$152$$) + $dvt$$6$$.$PathUtils$.$quadTo$($dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$152$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$152$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$152$$) + $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $DropdownItemSprite$$ + $y$$152$$), $DvtControlPanelDefaults$$ = 
    $DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $cmds$$20$$ = $cmds$$20$$ + ($dvt$$6$$.$PathUtils$.$quadTo$(-$dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$152$$, -$dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $y$$152$$) + $dvt$$6$$.$PathUtils$.$quadTo$(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $dvt$$6$$.$ButtonLAFUtils$.$TAN_PI_8$ * 
    $DropdownItemSprite$$ + $y$$152$$, -$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$152$$) + $dvt$$6$$.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$152$$) + $dvt$$6$$.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$152$$ - $DvtPanControl$$)), $y$$152$$ = $y$$152$$ - $DvtPanControl$$, $cmds$$20$$ = $cmds$$20$$ + ($dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$152$$) + 
    $dvt$$6$$.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$152$$ + $DvtPanControl$$) + $dvt$$6$$.$PathUtils$.closePath());
    return new $dvt$$6$$.$Path$($DvtControlPanelEventManager$$, $cmds$$20$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$_getDimForced$ = function $$dvt$$6$$$$ButtonLAFUtils$$$_getDimForced$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $DvtControlPanelEvent$$ instanceof $dvt$$6$$.$Button$ && ($DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.$getChildAt$(0));
    return $dvt$$6$$.$DisplayableUtils$.$getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  $dvt$$6$$.$ButtonLAFUtils$.$parseStyle$ = function $$dvt$$6$$$$ButtonLAFUtils$$$parseStyle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$, $DropdownItemSprite$$ = $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$, $DvtControlPanelDefaults$$ = $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, $background$$12$$;
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$FILL_TYPE$) && ($DvtPanControl$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$FILL_TYPE$)), $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BORDER_COLOR$) && ($DropdownItemSprite$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BORDER_COLOR$)), $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND_COLOR$)), 
    $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND$) && ($background$$12$$ = $DvtControlPanelEvent$$.$getStyle$($dvt$$6$$.$CSSStyle$.$BACKGROUND$)));
    var $DropdownItemSprite$$ = new $dvt$$6$$.$SolidStroke$($DropdownItemSprite$$), $fill$$56_fill_colors$$13_midColor$$11$$;
    if("solid" == $DvtPanControl$$) {
      $fill$$56_fill_colors$$13_midColor$$11$$ = new $dvt$$6$$.$SolidFill$($DvtControlPanelDefaults$$)
    }else {
      var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
      if($background$$12$$ && 0 <= $background$$12$$.indexOf("linear-gradient")) {
        if($DvtPanControl$$ = $dvt$$6$$.$GradientParser$.$parseCSSGradient$($background$$12$$)) {
          $degree$$3$$ = $DvtPanControl$$.$getAngle$(), $fill$$56_fill_colors$$13_midColor$$11$$ = $DvtPanControl$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $DvtPanControl$$.$_arAlphas$, $fill_ratios$$13$$ = $DvtPanControl$$.$_arRatios$
        }
      }else {
        $fill$$56_fill_colors$$13_midColor$$11$$ = $DvtControlPanelDefaults$$, $endColor$$16_fill_alphas$$13$$ = $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$56_fill_colors$$13_midColor$$11$$ != $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = $dvt$$6$$.$ColorUtils$.$inferColor$($dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, $dvt$$6$$.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$56_fill_colors$$13_midColor$$11$$)), $fill$$56_fill_colors$$13_midColor$$11$$ = 
        [$fill$$56_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
      }
      $fill$$56_fill_colors$$13_midColor$$11$$ = new $dvt$$6$$.$LinearGradientFill$($degree$$3$$, $fill$$56_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
    }
    $DvtControlPanelEventManager$$.$setFill$($fill$$56_fill_colors$$13_midColor$$11$$);
    $DvtControlPanelEventManager$$.$setStroke$($DropdownItemSprite$$)
  };
  $dvt$$6$$.$exportProperty$($dvt$$6$$.$PanZoomComponent$.prototype, "render", $dvt$$6$$.$PanZoomComponent$.prototype.$render$)
})(dvt);

  return dvt;
});
