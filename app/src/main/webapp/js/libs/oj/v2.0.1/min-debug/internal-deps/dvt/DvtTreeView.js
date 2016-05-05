/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
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

(function($dvt$$10$$) {
  function $DvtSunburstDefaults$$() {
    this.Init({skyros:$DvtSunburstDefaults$$.$VERSION_1$, alta:{}})
  }
  function $DvtSunburstEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    $DvtTreeEventManager$$.call(this, $dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  }
  function $DvtSunburstNode$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.Init($dvt$$10$$, $DvtSunburstDefaults$$);
    var $DvtSunburstEventManager$$ = this.$_view$.$getOptions$().nodeDefaults;
    this.$_labelDisplay$ = $DvtSunburstDefaults$$.labelDisplay ? $DvtSunburstDefaults$$.labelDisplay : $DvtSunburstEventManager$$.labelDisplay;
    this.$_labelHalign$ = $DvtSunburstDefaults$$.labelHalign ? $DvtSunburstDefaults$$.labelHalign : $DvtSunburstEventManager$$.labelHalign;
    this.$_radius$ = $DvtSunburstDefaults$$.radius
  }
  function $DvtTreemapDefaults$$() {
    this.Init({skyros:$DvtTreemapDefaults$$.$VERSION_1$, alta:{}})
  }
  function $DvtTreemapEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    $DvtTreeEventManager$$.call(this, $dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  }
  function $DvtTreemapKeyboardHandler$$($dvt$$10$$) {
    this.Init($dvt$$10$$)
  }
  function $DvtTreemapLayoutSliceAndDice$$($dvt$$10$$) {
    this.Init();
    this.$_isHoriz$ = $dvt$$10$$
  }
  function $DvtTreemapLayoutSquarifying$$() {
    this.Init()
  }
  function $DvtTreemapLayoutBase$$() {
    this.Init()
  }
  function $DvtTreemapNode$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    this.Init($DvtSunburstDefaults$$, $DvtSunburstEventManager$$);
    var $DvtSunburstNode$$ = this.$_view$.$getOptions$(), $DvtTreemapDefaults$$ = $DvtSunburstNode$$.nodeDefaults, $DvtTreemapEventManager$$ = $DvtTreemapDefaults$$.header, $DvtTreemapKeyboardHandler$$ = $DvtSunburstEventManager$$.header ? $DvtSunburstEventManager$$.header : {};
    this.$_groupLabelDisplay$ = $DvtSunburstEventManager$$.groupLabelDisplay ? $DvtSunburstEventManager$$.groupLabelDisplay : $DvtTreemapDefaults$$.groupLabelDisplay;
    this.$_labelDisplay$ = $DvtSunburstEventManager$$.labelDisplay ? $DvtSunburstEventManager$$.labelDisplay : $DvtTreemapDefaults$$.labelDisplay;
    this.$_labelHalign$ = $DvtSunburstEventManager$$.labelHalign ? $DvtSunburstEventManager$$.labelHalign : $DvtTreemapDefaults$$.labelHalign;
    this.$_labelValign$ = $DvtSunburstEventManager$$.labelValign ? $DvtSunburstEventManager$$.labelValign : $DvtTreemapDefaults$$.labelValign;
    this.$_headerHalign$ = $DvtTreemapKeyboardHandler$$.labelHalign ? $DvtTreemapKeyboardHandler$$.labelHalign : $DvtTreemapEventManager$$.labelHalign;
    this.$_headerLabelStyle$ = $DvtTreemapKeyboardHandler$$.labelStyle ? new $dvt$$10$$.$CSSStyle$($DvtTreemapKeyboardHandler$$.labelStyle) : $JSCompiler_alias_NULL$$;
    this.$_bHeaderUseNodeColor$ = "on" == ($DvtTreemapKeyboardHandler$$.useNodeColor ? $DvtTreemapKeyboardHandler$$.useNodeColor : $DvtTreemapEventManager$$.useNodeColor);
    this.$_isolate$ = $DvtTreemapKeyboardHandler$$.isolate ? $DvtTreemapKeyboardHandler$$.isolate : $DvtTreemapEventManager$$.isolate;
    "auto" == this.$_isolate$ && (this.$_isolate$ = $dvt$$10$$.$Agent$.$isTouchDevice$() ? "off" : "on");
    this.$_bIsolated$ = $DvtSunburstNode$$.isolatedNode != $JSCompiler_alias_NULL$$ && $DvtSunburstNode$$.isolatedNode == this.getId()
  }
  function $DvtTreeAutomation$$($dvt$$10$$) {
    this.$_treeView$ = $dvt$$10$$;
    this.$_root$ = $dvt$$10$$.$_root$
  }
  function $DvtTreeDefaults$$() {
  }
  function $DvtTreeKeyboardHandler$$($dvt$$10$$) {
    this.Init($dvt$$10$$)
  }
  function $DvtTreeLegendRenderer$$() {
  }
  function $DvtTreeBreadcrumbsRenderer$$() {
  }
  function $DvtTreePeer$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    this.Init($DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$);
    this.$_node$ = $dvt$$10$$;
    this.$_id$ = $DvtSunburstDefaults$$;
    this.$_bDrillable$ = $JSCompiler_alias_FALSE$$
  }
  function $DvtTreeNode$$() {
  }
  function $DvtTreeEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    this.Init($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$);
    this.$_view$ = $dvt$$10$$
  }
  function $DvtTreeDropTarget$$($dvt$$10$$) {
    this.$_view$ = $dvt$$10$$
  }
  function $DvtTreeAnimationHandler$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.Init($dvt$$10$$, $DvtSunburstDefaults$$)
  }
  function $DvtTreeView$$() {
  }
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeView$$, $dvt$$10$$.$BaseComponent$);
  $DvtTreeView$$.prototype.Init = function $$DvtTreeView$$$$Init$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    $DvtTreeView$$.$superclass$.Init.call(this, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$);
    this.$_eventHandler$ = this.$CreateEventManager$(this, $DvtSunburstDefaults$$, this.dispatchEvent, this);
    this.$_eventHandler$.$addListeners$(this);
    this.$_dragSource$ = new $dvt$$10$$.$DragSource$($DvtSunburstDefaults$$);
    this.$_dropTarget$ = new $DvtTreeDropTarget$$(this);
    this.$_eventHandler$.$setDragSource$(this.$_dragSource$);
    this.$_legend$ = $JSCompiler_alias_NULL$$;
    this.$_hasFocus$ = $JSCompiler_alias_FALSE$$;
    this.$_navigableIdToFocus$ = $JSCompiler_alias_NULL$$
  };
  $DvtTreeView$$.prototype.$SetOptions$ = function $$DvtTreeView$$$$$SetOptions$$($DvtSunburstDefaults$$) {
    $DvtSunburstDefaults$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtSunburstDefaults$$), $dvt$$10$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
  };
  $DvtTreeView$$.prototype.$render$ = function $$DvtTreeView$$$$$render$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    var $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$ || !this.$Options$;
    this.$SetOptions$($DvtSunburstDefaults$$);
    $DvtSunburstDefaults$$ = this.$_processNodes$();
    this.$ApplyParsedProperties$({root:$DvtSunburstDefaults$$});
    !isNaN($DvtSunburstEventManager$$) && !isNaN($DvtSunburstNode$$) && (this.$Width$ = $DvtSunburstEventManager$$, this.$Height$ = $DvtSunburstNode$$);
    this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
    $DvtSunburstNode$$ = new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($DvtSunburstNode$$);
    $DvtSunburstEventManager$$ = new $dvt$$10$$.$Container$(this.$getCtx$());
    this.$addChild$($DvtSunburstEventManager$$);
    this.$_templates$ && (this.$_afContext$ = new $DvtAfContext$$(this.$getCtx$(), this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = $JSCompiler_alias_TRUE$$);
    this.$Render$($DvtSunburstEventManager$$, $DvtSunburstNode$$);
    this.$Animation$ && (this.$AnimationStopped$ = $JSCompiler_alias_TRUE$$, this.$Animation$.stop());
    $DvtSunburstDefaults$$ = this.$getOptions$().animationOnDataChange;
    var $DvtTreemapEventManager$$ = new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    $DvtSunburstNode$$ = $JSCompiler_alias_FALSE$$;
    this.$_container$ ? $DvtSunburstDefaults$$ && $DvtTreemapDefaults$$ && ($dvt$$10$$.$BlackBoxAnimationHandler$.isSupported($DvtSunburstDefaults$$) ? (this.$Animation$ = $dvt$$10$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $DvtSunburstDefaults$$, this.$_container$, $DvtSunburstEventManager$$, $DvtTreemapEventManager$$, this.$AnimationDuration$), $DvtSunburstNode$$ = $JSCompiler_alias_TRUE$$) : this.$_oldRoot$ && "auto" == $DvtSunburstDefaults$$ && (this.$_deleteContainer$ = 
    this.$GetDeleteContainer$(), this.$addChild$(this.$_deleteContainer$), $DvtSunburstDefaults$$ = new $DvtTreeAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), $DvtSunburstDefaults$$.$animate$(this.$_oldRoot$, this.$_root$, this.$_oldAncestors$, this.$_ancestors$), this.$Animation$ = $DvtSunburstDefaults$$.$getAnimation$($JSCompiler_alias_TRUE$$))) : this.$Animation$ = this.$GetDisplayAnimation$($DvtSunburstEventManager$$, $DvtTreemapEventManager$$);
    this.$_oldAncestors$ = this.$_oldRoot$ = $JSCompiler_alias_NULL$$;
    this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
    $DvtSunburstNode$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
    this.$_container$ = $DvtSunburstEventManager$$;
    $DvtTreemapDefaults$$ ? this.$_processInitialSelections$() : this.$ReselectNodes$();
    this.$_processInitialFocus$(!this.$Animation$);
    this.$Animation$ || this.$_processInitialHighlighting$();
    this.$UpdateAriaAttributes$();
    this.$Animation$ || this.$RenderComplete$()
  };
  $DvtTreeView$$.prototype.$Parse$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeView$$.prototype.$Layout$ = $JSCompiler_emptyFn$$();
  $DvtTreeView$$.prototype.$Render$ = $JSCompiler_emptyFn$$();
  $DvtTreeView$$.prototype.$RenderBackground$ = function $$DvtTreeView$$$$$RenderBackground$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = new $dvt$$10$$.$Rect$(this.$getCtx$(), 0, 0, this.$Width$, this.$Height$);
    $DvtSunburstEventManager$$.$setInvisibleFill$();
    $DvtSunburstDefaults$$.$addChild$($DvtSunburstEventManager$$)
  };
  $DvtTreeView$$.prototype.$LayoutBreadcrumbs$ = function $$DvtTreeView$$$$$LayoutBreadcrumbs$$($dvt$$10$$) {
    if(0 < this.$_ancestors$.length) {
      var $DvtSunburstDefaults$$ = this.$_root$ ? this.$_root$.$getLabel$() : $JSCompiler_alias_NULL$$;
      this.$_breadcrumbs$ && this.$_eventHandler$.$removeComponentKeyboardHandler$(this.$_breadcrumbs$.$getEventManager$());
      this.$_breadcrumbs$ = $DvtTreeBreadcrumbsRenderer$$.$render$(this, $dvt$$10$$, this.$_ancestors$, $DvtSunburstDefaults$$);
      this.$_eventHandler$.$addComponentKeyboardHandlerAt$(this.$_breadcrumbs$.$getEventManager$())
    }else {
      this.$_breadcrumbs$ && this.$_eventHandler$.$removeComponentKeyboardHandler$(this.$_breadcrumbs$.$getEventManager$()), this.$_breadcrumbs$ = $JSCompiler_alias_NULL$$
    }
  };
  $DvtTreeView$$.prototype.$RenderBreadcrumbs$ = function $$DvtTreeView$$$$$RenderBreadcrumbs$$($dvt$$10$$) {
    this.$_breadcrumbs$ && $dvt$$10$$.$addChild$(this.$_breadcrumbs$)
  };
  $DvtTreeView$$.prototype.$LayoutLegend$ = function $$DvtTreeView$$$$$LayoutLegend$$($dvt$$10$$) {
    this.$_legend$ = $DvtTreeLegendRenderer$$.$render$(this, $dvt$$10$$, this.$_legendSource$)
  };
  $DvtTreeView$$.prototype.$RenderLegend$ = function $$DvtTreeView$$$$$RenderLegend$$($dvt$$10$$) {
    this.$_legend$ && ($dvt$$10$$.$addChild$(this.$_legend$), this.$_legend$ = $JSCompiler_alias_NULL$$)
  };
  $DvtTreeView$$.prototype.$RenderEmptyText$ = function $$DvtTreeView$$$$$RenderEmptyText$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$getOptions$(), $DvtSunburstNode$$ = $DvtSunburstEventManager$$.emptyText;
    $DvtSunburstNode$$ || ($DvtSunburstNode$$ = $dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstEventManager$$, "labelNoData", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA"));
    $dvt$$10$$.$TextUtils$.$renderEmptyText$($DvtSunburstDefaults$$, $DvtSunburstNode$$, new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$), this.$getEventManager$(), $DvtSunburstEventManager$$._statusMessageStyle)
  };
  $DvtTreeView$$.prototype.$HasValidData$ = function $$DvtTreeView$$$$$HasValidData$$() {
    return this.$_root$ && 0 < this.$_root$.$getSize$()
  };
  $DvtTreeView$$.prototype.$GetDisplayAnimation$ = function $$DvtTreeView$$$$$GetDisplayAnimation$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    var $DvtSunburstNode$$ = this.$getOptions$().animationOnDisplay;
    return $dvt$$10$$.$BlackBoxAnimationHandler$.isSupported($DvtSunburstNode$$) ? $dvt$$10$$.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), $DvtSunburstNode$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, this.$AnimationDuration$) : $JSCompiler_alias_NULL$$
  };
  $DvtTreeView$$.prototype.$OnAnimationEnd$ = function $$DvtTreeView$$$$$OnAnimationEnd$$() {
    this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = $JSCompiler_alias_NULL$$);
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
    this.$_eventHandler$.$addListeners$(this);
    this.$_processInitialFocus$($JSCompiler_alias_TRUE$$);
    this.$_processInitialHighlighting$();
    this.$AnimationStopped$ || this.$RenderComplete$();
    this.$AnimationStopped$ = $JSCompiler_alias_FALSE$$;
    this.$Animation$ = $JSCompiler_alias_NULL$$
  };
  $DvtTreeView$$.prototype.$GetDeleteContainer$ = function $$DvtTreeView$$$$$GetDeleteContainer$$() {
    return new $dvt$$10$$.$Container$(this.$getCtx$())
  };
  $DvtTreeView$$.prototype.$CreateKeyboardHandler$ = function $$DvtTreeView$$$$$CreateKeyboardHandler$$($dvt$$10$$) {
    return new $DvtTreeKeyboardHandler$$($dvt$$10$$)
  };
  $DvtTreeView$$.prototype.$CreateEventManager$ = function $$DvtTreeView$$$$$CreateEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    return new $DvtTreeEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  };
  $DvtTreeView$$.prototype.$GetInitialFocusedItem$ = function $$DvtTreeView$$$$$GetInitialFocusedItem$$($dvt$$10$$) {
    if($dvt$$10$$ && $dvt$$10$$.$_bArtificialRoot$) {
      var $DvtSunburstDefaults$$ = $dvt$$10$$.$getChildNodes$();
      if($DvtSunburstDefaults$$ && 0 < $DvtSunburstDefaults$$.length) {
        return $DvtSunburstDefaults$$[0]
      }
    }
    return $dvt$$10$$
  };
  $DvtTreeView$$.prototype.$highlight$ = function $$DvtTreeView$$$$$highlight$$($DvtSunburstDefaults$$) {
    this.$getOptions$().highlightedCategories = $dvt$$10$$.$JsonUtils$.$clone$($DvtSunburstDefaults$$);
    $dvt$$10$$.$CategoryRolloverHandler$.$highlight$($DvtSunburstDefaults$$, $DvtTreeUtils$$.$getAllNodes$(this.$_root$), "any" == this.$getOptions$().highlightMatch)
  };
  $DvtTreeView$$.prototype.select = function $$DvtTreeView$$$$select$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$getOptions$();
    $DvtSunburstEventManager$$.selection = $dvt$$10$$.$JsonUtils$.$clone$($DvtSunburstDefaults$$);
    this.$_selectionHandler$ && ($DvtSunburstDefaults$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$), this.$_selectionHandler$.$processInitialSelections$($DvtSunburstEventManager$$.selection, $DvtSunburstDefaults$$))
  };
  $DvtTreeView$$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventHandler$");
  $DvtTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtTreeView$$$$$ApplyParsedProperties$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$getOptions$();
    this.$_oldRoot$ = this.$_root$;
    this.$_oldAncestors$ = this.$_ancestors$;
    this.$_root$ = $DvtSunburstDefaults$$.root;
    this.$_ancestors$ = $DvtSunburstEventManager$$._ancestors ? $DvtSunburstEventManager$$._ancestors : [];
    this.$_nodeCount$ = this.$_root$ ? $DvtTreeUtils$$.$calcNodeCount$(this.$_root$) : 0;
    this.$_maxDepth$ = this.$_root$ ? $DvtTreeUtils$$.$calcMaxDepth$(this.$_root$, 0) : 0;
    this.$AnimationDuration$ = $dvt$$10$$.$StyleUtils$.$getTimeMilliseconds$($DvtSunburstEventManager$$.animationDuration) / 1E3;
    this.$_styles$ = $DvtSunburstDefaults$$.$styles$ ? $DvtSunburstDefaults$$.$styles$ : {};
    (this.$_nodeSelection$ = "none" == $DvtSunburstEventManager$$.selectionMode ? $JSCompiler_alias_NULL$$ : "single" == $DvtSunburstEventManager$$.selectionMode ? $dvt$$10$$.$SelectionHandler$.$TYPE_SINGLE$ : $dvt$$10$$.$SelectionHandler$.$TYPE_MULTIPLE$) ? (this.$_selectionHandler$ = new $dvt$$10$$.$SelectionHandler$(this.$_nodeSelection$), this.$_initialSelection$ = $DvtSunburstEventManager$$.selection) : this.$_selectionHandler$ = $JSCompiler_alias_NULL$$;
    this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
    this.$_eventHandler$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$_eventHandler$));
    this.$_legendSource$ = $JSCompiler_alias_NULL$$;
    this.$_attrGroups$ = [];
    if($DvtSunburstEventManager$$.attributeGroups) {
      $DvtSunburstDefaults$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$);
      for(var $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$.attributeGroups.length;$DvtSunburstNode$$++) {
        var $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$.attributeGroups[$DvtSunburstNode$$], $DvtTreemapEventManager$$ = $JSCompiler_alias_NULL$$;
        if("continuous" == $DvtTreemapDefaults$$.attributeType) {
          $DvtTreeUtils$$.$calcContinuousAttrGroupsExtents$($DvtTreemapDefaults$$, $DvtSunburstDefaults$$), $DvtTreemapEventManager$$ = new $dvt$$10$$.$ContinuousAttrGroups$($DvtTreemapDefaults$$.min, $DvtTreemapDefaults$$.max, $DvtTreemapDefaults$$.minLabel, $DvtTreemapDefaults$$.maxLabel, $DvtTreemapDefaults$$.colors)
        }else {
          for(var $DvtTreemapEventManager$$ = new $dvt$$10$$.$DiscreteAttrGroups$, $DvtTreemapKeyboardHandler$$ = 0;$DvtTreemapKeyboardHandler$$ < $DvtTreemapDefaults$$.groups.length;$DvtTreemapKeyboardHandler$$++) {
            var $DvtTreemapLayoutSliceAndDice$$ = $DvtTreemapDefaults$$.groups[$DvtTreemapKeyboardHandler$$];
            $DvtTreemapEventManager$$.add($DvtTreemapLayoutSliceAndDice$$.id, $DvtTreemapLayoutSliceAndDice$$.label, {color:$DvtTreemapLayoutSliceAndDice$$.color, pattern:$DvtTreemapLayoutSliceAndDice$$.pattern})
          }
        }
        this.$_attrGroups$.push({$attrGroups$:$DvtTreemapEventManager$$, $stampId$:$DvtTreemapDefaults$$.S, id:$DvtTreemapDefaults$$.id});
        !$DvtSunburstEventManager$$._adf && !$DvtSunburstEventManager$$._legendSource && 0 == $DvtSunburstNode$$ ? this.$_legendSource$ = $DvtTreemapEventManager$$ : $DvtSunburstEventManager$$._legendSource && $DvtSunburstEventManager$$._legendSource == $DvtTreemapDefaults$$.id && (this.$_legendSource$ = $DvtTreemapEventManager$$)
      }
      $DvtTreeUtils$$.$processContinuousAttrGroups$(this.$_attrGroups$, $DvtSunburstDefaults$$)
    }
    if(($DvtSunburstDefaults$$ = $DvtSunburstEventManager$$._contextMenus) && 0 < $DvtSunburstDefaults$$.length) {
      $DvtSunburstDefaults$$ = new $dvt$$10$$.$ContextMenuHandler$(this.$getCtx$(), $DvtSunburstDefaults$$), this.$_eventHandler$.$setContextMenuHandler$($DvtSunburstDefaults$$)
    }
    if($DvtSunburstEventManager$$ = $DvtSunburstEventManager$$._templates) {
      this.$_templates$ = {};
      for(var $DvtTreemapLayoutSquarifying$$ in $DvtSunburstEventManager$$) {
        $DvtSunburstDefaults$$ = $DvtAfComponentFactory$$.$parseJsonElement$($DvtSunburstEventManager$$[$DvtTreemapLayoutSquarifying$$]), this.$_templates$[$DvtTreemapLayoutSquarifying$$] = $DvtSunburstDefaults$$
      }
    }
  };
  $DvtTreeView$$.prototype.$ReselectNodes$ = function $$DvtTreeView$$$$$ReselectNodes$$() {
    for(var $dvt$$10$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $DvtSunburstDefaults$$ = 0;$DvtSunburstDefaults$$ < $dvt$$10$$.length;$DvtSunburstDefaults$$++) {
      $dvt$$10$$[$DvtSunburstDefaults$$].$setSelected$($JSCompiler_alias_TRUE$$)
    }
  };
  $DvtTreeView$$.prototype.$_processInitialSelections$ = function $$DvtTreeView$$$$$_processInitialSelections$$() {
    if(this.$_selectionHandler$ && this.$_initialSelection$) {
      var $dvt$$10$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$);
      this.$_selectionHandler$.$processInitialSelections$(this.$_initialSelection$, $dvt$$10$$);
      this.$_initialSelection$ = $JSCompiler_alias_NULL$$
    }
  };
  $DvtTreeView$$.prototype.$_processInitialHighlighting$ = function $$DvtTreeView$$$$$_processInitialHighlighting$$() {
    var $dvt$$10$$ = this.$getOptions$().highlightedCategories;
    $dvt$$10$$ && 0 < $dvt$$10$$.length && this.$highlight$($dvt$$10$$)
  };
  $DvtTreeView$$.prototype.$_processInitialFocus$ = function $$DvtTreeView$$$$$_processInitialFocus$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = $JSCompiler_alias_NULL$$, $DvtSunburstEventManager$$ = this.$_navigableIdToFocus$;
    $DvtSunburstEventManager$$ && ($DvtSunburstDefaults$$ = $DvtTreeNode$$.$getNodeById$(this.$_root$, $DvtSunburstEventManager$$), this.$_eventHandler$.$setFocus$($DvtSunburstDefaults$$));
    $dvt$$10$$ && this.$__setNavigableIdToFocus$($JSCompiler_alias_NULL$$);
    $DvtSunburstDefaults$$ || ($DvtSunburstDefaults$$ = this.$GetInitialFocusedItem$(this.$_root$), this.$_eventHandler$.$setFocus$($DvtSunburstDefaults$$));
    $dvt$$10$$ && this.$setFocused$(this.$isFocused$())
  };
  $DvtTreeView$$.prototype.$setFocused$ = function $$DvtTreeView$$$$$setFocused$$($dvt$$10$$) {
    this.$_hasFocus$ = $dvt$$10$$;
    this.$_eventHandler$.$setFocused$($dvt$$10$$)
  };
  $DvtTreeView$$.prototype.$isFocused$ = $JSCompiler_get$$("$_hasFocus$");
  $DvtTreeView$$.prototype.$__getTemplate$ = function $$DvtTreeView$$$$$__getTemplate$$($dvt$$10$$) {
    return this.$_templates$ ? this.$_templates$[$dvt$$10$$] : $JSCompiler_alias_NULL$$
  };
  $DvtTreeView$$.prototype.$__getNodeUnderPoint$ = function $$DvtTreeView$$$$$__getNodeUnderPoint$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_root$.$getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$__isDragAvailable$ = function $$DvtTreeView$$$$$__isDragAvailable$$($dvt$$10$$) {
    return this.$_selectionHandler$ ? $dvt$$10$$[0] : $JSCompiler_alias_NULL$$
  };
  $DvtTreeView$$.prototype.$__getDragTransferable$ = function $$DvtTreeView$$$$$__getDragTransferable$$($dvt$$10$$) {
    $dvt$$10$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($dvt$$10$$, $JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
    $dvt$$10$$ = [];
    for(var $DvtSunburstDefaults$$ = this.$_selectionHandler$.getSelection(), $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
      $dvt$$10$$.push($DvtSunburstDefaults$$[$DvtSunburstEventManager$$].getId())
    }
    return $dvt$$10$$
  };
  $DvtTreeView$$.prototype.$__getDragFeedback$ = function $$DvtTreeView$$$$$__getDragFeedback$$() {
    for(var $dvt$$10$$ = [], $DvtSunburstDefaults$$ = this.$_selectionHandler$.getSelection(), $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
      $dvt$$10$$.push($DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$getDisplayable$())
    }
    return $dvt$$10$$
  };
  $DvtTreeView$$.prototype.$__showDropSiteFeedback$ = function $$DvtTreeView$$$$$__showDropSiteFeedback$$($dvt$$10$$) {
    this.$_dropSiteFeedback$ && (this.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = $JSCompiler_alias_NULL$$);
    if($dvt$$10$$ && (this.$_dropSiteFeedback$ = $dvt$$10$$.$getDropSiteFeedback$())) {
      $dvt$$10$$ = this.$getOptions$().styleDefaults, this.$_dropSiteFeedback$.$setSolidFill$($dvt$$10$$._dropSiteFillColor, $dvt$$10$$._dropSiteOpacity), this.$_dropSiteFeedback$.$setSolidStroke$($dvt$$10$$._dropSiteBorderColor), this.$addChild$(this.$_dropSiteFeedback$)
    }
    return this.$_dropSiteFeedback$
  };
  $DvtTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtTreeView$$$$$__processBreadcrumbsEvent$$($DvtSunburstDefaults$$) {
    $DvtSunburstDefaults$$ instanceof $dvt$$10$$.$BreadcrumbsDrillEvent$ && this.$__drill$($DvtSunburstDefaults$$.getId(), $JSCompiler_alias_FALSE$$)
  };
  $DvtTreeView$$.prototype.$__drill$ = function $$DvtTreeView$$$$$__drill$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    $DvtSunburstEventManager$$ && this.$_root$ && $DvtSunburstDefaults$$ == this.$_root$.getId() && 0 < this.$_ancestors$.length ? (this.$__setNavigableIdToFocus$($DvtSunburstDefaults$$), this.dispatchEvent($dvt$$10$$.$EventFactory$.$newDrillEvent$(this.$_ancestors$[0].id))) : $DvtSunburstEventManager$$ || this.dispatchEvent($dvt$$10$$.$EventFactory$.$newDrillEvent$($DvtSunburstDefaults$$));
    this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  };
  $DvtTreeView$$.prototype.$getLogicalObject$ = function $$DvtTreeView$$$$$getLogicalObject$$($dvt$$10$$) {
    return this.$_eventHandler$.$GetLogicalObject$($dvt$$10$$)
  };
  $DvtTreeView$$.prototype.$__setNavigableIdToFocus$ = $JSCompiler_set$$("$_navigableIdToFocus$");
  $DvtTreeView$$.prototype.$CreateNode$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeView$$.prototype.$getBundlePrefix$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeView$$.prototype.$getAutomation$ = function $$DvtTreeView$$$$$getAutomation$$() {
    return new $DvtTreeAutomation$$(this)
  };
  $DvtTreeView$$.prototype.$getBreadcrumbs$ = $JSCompiler_get$$("$_breadcrumbs$");
  $DvtTreeView$$.prototype.$_processNodes$ = function $$DvtTreeView$$$$$_processNodes$$() {
    var $DvtSunburstDefaults$$ = this.$getOptions$();
    if($DvtSunburstDefaults$$.nodes == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtSunburstEventManager$$ = [], $DvtSunburstNode$$ = $dvt$$10$$.$ArrayUtils$.$createBooleanMap$($DvtSunburstDefaults$$.hiddenCategories), $DvtTreemapDefaults$$ = 0;$DvtTreemapDefaults$$ < $DvtSunburstDefaults$$.nodes.length;$DvtTreemapDefaults$$++) {
      var $DvtTreemapEventManager$$ = $DvtSunburstDefaults$$.nodes[$DvtTreemapDefaults$$];
      $DvtTreemapEventManager$$._index = $DvtTreemapDefaults$$;
      ($DvtTreemapEventManager$$ = this.$_processNode$($DvtSunburstNode$$, $DvtTreemapEventManager$$)) && $DvtSunburstEventManager$$.push($DvtTreemapEventManager$$)
    }
    if(1 == $DvtSunburstEventManager$$.length) {
      return $DvtSunburstEventManager$$[0]
    }
    for(var $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$ = 0;$DvtTreemapDefaults$$ < $DvtSunburstEventManager$$.length;$DvtTreemapDefaults$$++) {
      $DvtSunburstDefaults$$ += $DvtSunburstEventManager$$[$DvtTreemapDefaults$$].$getSize$()
    }
    $DvtTreemapDefaults$$ = this.$CreateNode$({value:$DvtSunburstDefaults$$, $bArtificialRoot$:$JSCompiler_alias_TRUE$$});
    $DvtTreemapDefaults$$.$setChildNodes$($DvtSunburstEventManager$$);
    return $DvtTreemapDefaults$$
  };
  $DvtTreeView$$.prototype.$_processNode$ = function $$DvtTreeView$$$$$_processNode$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if($DvtTreeUtils$$.$isHiddenNode$($dvt$$10$$, $DvtSunburstDefaults$$)) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstEventManager$$ = this.$CreateNode$($DvtSunburstDefaults$$);
    if($DvtSunburstEventManager$$.$isDisclosed$()) {
      for(var $DvtSunburstNode$$ = [], $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$.nodes ? $DvtSunburstDefaults$$.nodes : [], $DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtTreemapDefaults$$.length;$DvtTreemapEventManager$$++) {
        var $DvtTreemapKeyboardHandler$$ = $DvtTreemapDefaults$$[$DvtTreemapEventManager$$];
        $DvtTreemapKeyboardHandler$$._index = $DvtTreemapEventManager$$;
        ($DvtTreemapKeyboardHandler$$ = this.$_processNode$($dvt$$10$$, $DvtTreemapKeyboardHandler$$)) && $DvtSunburstNode$$.push($DvtTreemapKeyboardHandler$$)
      }
      $DvtSunburstEventManager$$.$setChildNodes$($DvtSunburstNode$$)
    }
    return $DvtSunburstEventManager$$
  };
  $DvtTreeView$$.prototype.$UpdateAriaNavigation$ = function $$DvtTreeView$$$$$UpdateAriaNavigation$$($DvtSunburstDefaults$$) {
    if($dvt$$10$$.$Agent$.$isTouchDevice$() || $dvt$$10$$.$Agent$.$isEnvironmentTest$()) {
      $DvtSunburstDefaults$$ = $DvtTreeUtils$$.$getAllVisibleNodes$($DvtSunburstDefaults$$);
      for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length - 1;$DvtSunburstEventManager$$++) {
        var $DvtSunburstNode$$ = this.getId() + ($DvtSunburstDefaults$$[$DvtSunburstEventManager$$ + 1].getId() ? $DvtSunburstDefaults$$[$DvtSunburstEventManager$$ + 1].getId() : $DvtSunburstDefaults$$[$DvtSunburstEventManager$$ + 1].$getLabel$()), $DvtSunburstNode$$ = $DvtSunburstNode$$.replace(/\s+/g, "");
        $DvtSunburstDefaults$$[$DvtSunburstEventManager$$ + 1].$getDisplayable$().setId($DvtSunburstNode$$, $JSCompiler_alias_TRUE$$);
        $DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$getDisplayable$().$setAriaProperty$("flowto", $DvtSunburstNode$$)
      }
    }
  };
  $DvtTreeView$$.prototype.$isDragAvailable$ = function $$DvtTreeView$$$$$isDragAvailable$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    return this.$_dragSource$.$isDragAvailable$($DvtSunburstEventManager$$)
  };
  $DvtTreeView$$.prototype.$getDragTransferable$ = function $$DvtTreeView$$$$$getDragTransferable$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dragSource$.$getDragTransferable$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$getDragOverFeedback$ = function $$DvtTreeView$$$$$getDragOverFeedback$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dragSource$.$getDragOverFeedback$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$getDragContext$ = function $$DvtTreeView$$$$$getDragContext$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dragSource$.$getDragContext$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$getDragOffset$ = function $$DvtTreeView$$$$$getDragOffset$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dragSource$.$getDragOffset$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$getPointerOffset$ = function $$DvtTreeView$$$$$getPointerOffset$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dragSource$.$getPointerOffset$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreeView$$.prototype.$initiateDrag$ = function $$DvtTreeView$$$$$initiateDrag$$() {
    this.$_dragSource$.$initiateDrag$()
  };
  $DvtTreeView$$.prototype.$dragDropEnd$ = function $$DvtTreeView$$$$$dragDropEnd$$() {
    this.$_dragSource$.$dragDropEnd$()
  };
  $DvtTreeView$$.prototype.$acceptDrag$ = function $$DvtTreeView$$$$$acceptDrag$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    return this.$_dropTarget$.$acceptDrag$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
  };
  $DvtTreeView$$.prototype.$getDropSite$ = function $$DvtTreeView$$$$$getDropSite$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_dropTarget$.$getDropSite$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeAnimationHandler$$, $dvt$$10$$.$DataAnimationHandler$);
  $DvtTreeAnimationHandler$$.prototype.$animate$ = function $$DvtTreeAnimationHandler$$$$$animate$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    this.$_bDrill$ = $JSCompiler_alias_FALSE$$;
    this.$_oldRoot$ = $dvt$$10$$;
    this.$_oldAncestors$ = $DvtSunburstEventManager$$;
    $DvtTreeAnimationHandler$$.$_isAncestor$($DvtSunburstNode$$, $dvt$$10$$) || $DvtTreeAnimationHandler$$.$_isAncestor$($DvtSunburstEventManager$$, $DvtSunburstDefaults$$) ? (this.$_bDrill$ = $JSCompiler_alias_TRUE$$, $DvtSunburstEventManager$$ = $dvt$$10$$.$getDescendantNodes$(), $DvtSunburstNode$$ = $DvtSunburstDefaults$$.$getDescendantNodes$(), $DvtSunburstEventManager$$.push($dvt$$10$$), $DvtSunburstNode$$.push($DvtSunburstDefaults$$), this.$constructAnimation$($DvtSunburstEventManager$$, $DvtSunburstNode$$)) : 
    this.$constructAnimation$([$dvt$$10$$], [$DvtSunburstDefaults$$])
  };
  $DvtTreeAnimationHandler$$.prototype.$isAncestorInsert$ = function $$DvtTreeAnimationHandler$$$$$isAncestorInsert$$($dvt$$10$$) {
    return this.$_bDrill$ ? this.$_oldRoot$.getId() == $dvt$$10$$.getId() || $DvtTreeAnimationHandler$$.$_isAncestor$(this.$_oldAncestors$, $dvt$$10$$) : $JSCompiler_alias_FALSE$$
  };
  $DvtTreeAnimationHandler$$.$_isAncestor$ = function $$DvtTreeAnimationHandler$$$$_isAncestor$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if(!$DvtSunburstDefaults$$ || !$dvt$$10$$) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $dvt$$10$$.length;$DvtSunburstEventManager$$++) {
      if($dvt$$10$$[$DvtSunburstEventManager$$].id == $DvtSunburstDefaults$$.getId()) {
        return $JSCompiler_alias_TRUE$$
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeDropTarget$$, $dvt$$10$$.$DropTarget$);
  $DvtTreeDropTarget$$.prototype.$acceptDrag$ = function $$DvtTreeDropTarget$$$$$acceptDrag$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    if($dvt$$10$$ = this.$_view$.$__getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$)) {
      $dvt$$10$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($dvt$$10$$), this.$_dropSite$ = $dvt$$10$$)
    }else {
      return this.$_view$.$__showDropSiteFeedback$($JSCompiler_alias_NULL$$), $JSCompiler_alias_NULL$$
    }
    return $DvtSunburstEventManager$$[0]
  };
  $DvtTreeDropTarget$$.prototype.$getDropSite$ = function $$DvtTreeDropTarget$$$$$getDropSite$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$_view$.$__getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$);
    return $DvtSunburstEventManager$$ ? {$clientRowKey$:$DvtSunburstEventManager$$.getId()} : $JSCompiler_alias_NULL$$
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeEventManager$$, $dvt$$10$$.$EventManager$);
  $DvtTreeEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtTreeEventManager$$$$$OnDblClickInternal$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$.$isSelectable$ && $DvtSunburstDefaults$$.$isSelectable$() && this.$_processDrill$($DvtSunburstDefaults$$, $dvt$$10$$.shiftKey)
  };
  $DvtTreeEventManager$$.prototype.$OnClick$ = function $$DvtTreeEventManager$$$$$OnClick$$($dvt$$10$$) {
    $DvtTreeEventManager$$.$superclass$.$OnClick$.call(this, $dvt$$10$$);
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    this.$_processNodeLabel$($DvtSunburstDefaults$$);
    $DvtSunburstDefaults$$ && (!$DvtSunburstDefaults$$.$isSelectable$ || !$DvtSunburstDefaults$$.$isSelectable$()) && this.$_processDrill$($DvtSunburstDefaults$$, $dvt$$10$$.shiftKey)
  };
  $DvtTreeEventManager$$.prototype.$OnMouseOver$ = function $$DvtTreeEventManager$$$$$OnMouseOver$$($dvt$$10$$) {
    $DvtTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $dvt$$10$$);
    ($dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.target)) && $dvt$$10$$.$handleMouseOver$ && $dvt$$10$$.$handleMouseOver$()
  };
  $DvtTreeEventManager$$.prototype.$OnMouseOut$ = function $$DvtTreeEventManager$$$$$OnMouseOut$$($dvt$$10$$) {
    $DvtTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$10$$);
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$.$handleMouseOut$ && ($dvt$$10$$ = ($dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.relatedTarget)) && $dvt$$10$$.getId ? $dvt$$10$$.getId() : $JSCompiler_alias_NULL$$, ($DvtSunburstDefaults$$.getId() == $JSCompiler_alias_NULL$$ || $dvt$$10$$ != $DvtSunburstDefaults$$.getId()) && $DvtSunburstDefaults$$.$handleMouseOut$())
  };
  $DvtTreeEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreeEventManager$$$$$ProcessKeyboardEvent$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $JSCompiler_alias_FALSE$$, $DvtSunburstEventManager$$ = this.$getFocus$();
    $DvtSunburstDefaults$$.keyCode == $dvt$$10$$.$KeyboardEvent$.$ENTER$ && !$DvtSunburstDefaults$$.ctrlKey ? ($DvtSunburstEventManager$$ = this.$getFocus$(), $DvtSunburstEventManager$$.$isDrillReplaceEnabled$ && $DvtSunburstEventManager$$.$isDrillReplaceEnabled$() && ($DvtSunburstDefaults$$.shiftKey && ($DvtSunburstEventManager$$ = this.$_view$.$_root$), this.$_view$.$__drill$($DvtSunburstEventManager$$.getId(), $DvtSunburstDefaults$$.shiftKey)), $dvt$$10$$.$EventManager$.$consumeEvent$($DvtSunburstDefaults$$), 
    $DvtSunburstEventManager$$ = $JSCompiler_alias_TRUE$$) : $DvtSunburstEventManager$$ = $DvtTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtSunburstDefaults$$);
    return $DvtSunburstEventManager$$
  };
  $DvtTreeEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTreeEventManager$$$$$HandleTouchClickInternal$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    this.$_processNodeLabel$($DvtSunburstDefaults$$);
    this.$_currentHoverItem$ && this.$_currentHoverItem$ != $DvtSunburstDefaults$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = $JSCompiler_alias_NULL$$);
    $DvtSunburstDefaults$$ && ($DvtSunburstDefaults$$ instanceof $DvtTreeNode$$ && this.$_currentHoverItem$ != $DvtSunburstDefaults$$ && (this.$_currentHoverItem$ = $DvtSunburstDefaults$$, $DvtSunburstDefaults$$.$handleMouseOver$()), (!$DvtSunburstDefaults$$.$isSelectable$ || !$DvtSunburstDefaults$$.$isSelectable$()) && this.$_processDrill$($DvtSunburstDefaults$$, $dvt$$10$$.shiftKey))
  };
  $DvtTreeEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtTreeEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$10$$) {
    ($dvt$$10$$ = this.$GetLogicalObject$($dvt$$10$$.target)) && $dvt$$10$$.$isSelectable$ && $dvt$$10$$.$isSelectable$() && this.$_processDrill$($dvt$$10$$, $JSCompiler_alias_FALSE$$)
  };
  $DvtTreeEventManager$$.prototype.$_processNodeLabel$ = function $$DvtTreeEventManager$$$$$_processNodeLabel$$($dvt$$10$$) {
    $dvt$$10$$ && ($dvt$$10$$ instanceof $DvtTreePeer$$ && $dvt$$10$$.$isDrillable$()) && this.$_view$.$__drill$($dvt$$10$$.getId(), $JSCompiler_alias_FALSE$$)
  };
  $DvtTreeEventManager$$.prototype.$_processDrill$ = function $$DvtTreeEventManager$$$$$_processDrill$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    $dvt$$10$$.$isDrillReplaceEnabled$ && $dvt$$10$$.$isDrillReplaceEnabled$() && this.$_view$.$__drill$($dvt$$10$$.getId(), $DvtSunburstDefaults$$)
  };
  $DvtTreeEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTreeEventManager$$$$$ProcessRolloverEvent$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    $DvtSunburstDefaults$$ = this.$_view$.$getOptions$();
    if("dim" == $DvtSunburstDefaults$$.hoverBehavior) {
      $DvtSunburstEventManager$$ = $DvtSunburstEventManager$$.$getCategories$ ? $DvtSunburstEventManager$$.$getCategories$() : [];
      $DvtSunburstDefaults$$.highlightedCategories = $DvtSunburstNode$$ ? $DvtSunburstEventManager$$.slice() : $JSCompiler_alias_NULL$$;
      $DvtSunburstNode$$ = $dvt$$10$$.$EventFactory$.$newCategoryHighlightEvent$($DvtSunburstDefaults$$.highlightedCategories, $DvtSunburstNode$$);
      $DvtSunburstEventManager$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_view$.$_root$);
      var $DvtTreemapDefaults$$ = $dvt$$10$$.$StyleUtils$.$getTimeMilliseconds$($DvtSunburstDefaults$$.hoverBehaviorDelay);
      this.$RolloverHandler$.$processEvent$($DvtSunburstNode$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, "any" == $DvtSunburstDefaults$$.highlightMatch)
    }
  };
  $DvtTreeEventManager$$.prototype.$GetTouchResponse$ = function $$DvtTreeEventManager$$$$$GetTouchResponse$$() {
    return this.$_view$.$getOptions$().touchResponse
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeNode$$, $dvt$$10$$.$Obj$);
  $DvtTreeNode$$.$_ANIMATION_DELETE_PRIORITY$ = 0;
  $DvtTreeNode$$.$_ANIMATION_UPDATE_PRIORITY$ = 1;
  $DvtTreeNode$$.$_ANIMATION_INSERT_PRIORITY$ = 2;
  $DvtTreeNode$$.$_DEFAULT_FILL_COLOR$ = "#000000";
  $DvtTreeNode$$.$_DEFAULT_TEXT_SIZE$ = 11;
  $DvtTreeNode$$.$__NODE_SELECTED_SHADOW$ = new $dvt$$10$$.$Shadow$("#000000", 2, 5, 5, 45, 0.5);
  $DvtTreeNode$$.prototype.Init = function $$DvtTreeNode$$$$Init$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    this.$_view$ = $DvtSunburstDefaults$$;
    this.$_options$ = $DvtSunburstEventManager$$;
    var $DvtSunburstNode$$ = this.$_view$.$getOptions$().nodeDefaults;
    this.$_id$ = $DvtSunburstEventManager$$.id || $DvtSunburstEventManager$$.label;
    this.$_color$ = $DvtSunburstEventManager$$.color ? $DvtSunburstEventManager$$.color : $DvtTreeNode$$.$_DEFAULT_FILL_COLOR$;
    this.$_textStr$ = $DvtSunburstEventManager$$.label;
    this.$_labelStyle$ = "string" == typeof $DvtSunburstEventManager$$.labelStyle ? new $dvt$$10$$.$CSSStyle$($DvtSunburstEventManager$$.labelStyle) : $DvtSunburstEventManager$$.labelStyle;
    this.$_pattern$ = $DvtSunburstEventManager$$.pattern;
    this.$_selectable$ = $DvtSunburstEventManager$$.selectable;
    this.$_shortDesc$ = $DvtSunburstEventManager$$.shortDesc ? $DvtSunburstEventManager$$.shortDesc : $DvtSunburstEventManager$$.tooltip;
    this.$_size$ = $DvtSunburstEventManager$$.value;
    this.$_drilling$ = $DvtSunburstEventManager$$.drilling ? $DvtSunburstEventManager$$.drilling : $DvtSunburstNode$$.drilling;
    this.$_stampId$ = $DvtSunburstEventManager$$.S;
    this.$_bArtificialRoot$ = $DvtSunburstEventManager$$.$bArtificialRoot$;
    this.$_alpha$ = 1;
    this.$_lastVisitedChild$ = $JSCompiler_alias_NULL$$;
    this.$IsHover$ = this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$
  };
  $DvtTreeNode$$.prototype.$setChildNodes$ = function $$DvtTreeNode$$$$$setChildNodes$$($dvt$$10$$) {
    if($dvt$$10$$ != $JSCompiler_alias_NULL$$) {
      for(var $DvtSunburstDefaults$$ = 0;$DvtSunburstDefaults$$ < $dvt$$10$$.length;$DvtSunburstDefaults$$++) {
        $dvt$$10$$[$DvtSunburstDefaults$$].$_parent$ = this
      }
    }
    this.$_children$ = $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.$getChildNodes$ = function $$DvtTreeNode$$$$$getChildNodes$$() {
    return this.$_children$ ? this.$_children$ : []
  };
  $DvtTreeNode$$.prototype.$getDescendantNodes$ = function $$DvtTreeNode$$$$$getDescendantNodes$$() {
    var $dvt$$10$$ = [], $DvtSunburstDefaults$$, $DvtSunburstEventManager$$;
    if(!this.$hasChildren$()) {
      return $dvt$$10$$
    }
    for(var $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < this.$_children$.length;$DvtSunburstNode$$++) {
      $DvtSunburstEventManager$$ = this.$_children$[$DvtSunburstNode$$], $DvtSunburstDefaults$$ = $DvtSunburstEventManager$$.$getDescendantNodes$(), $dvt$$10$$.push($DvtSunburstEventManager$$), $dvt$$10$$ = $dvt$$10$$.concat($DvtSunburstDefaults$$)
    }
    return $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.$SetLastVisitedChild$ = $JSCompiler_set$$("$_lastVisitedChild$");
  $DvtTreeNode$$.prototype.$MarkAsLastVisitedChild$ = function $$DvtTreeNode$$$$$MarkAsLastVisitedChild$$() {
    var $dvt$$10$$ = this.$_parent$;
    $dvt$$10$$ && $dvt$$10$$.$SetLastVisitedChild$(this)
  };
  $DvtTreeNode$$.prototype.$isDescendantOf$ = function $$DvtTreeNode$$$$$isDescendantOf$$($dvt$$10$$) {
    return!$dvt$$10$$ || !this.$_parent$ ? $JSCompiler_alias_FALSE$$ : this.$_parent$ == $dvt$$10$$ ? $JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($dvt$$10$$)
  };
  $DvtTreeNode$$.prototype.$GetNodesAtDepth$ = function $$DvtTreeNode$$$$$GetNodesAtDepth$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = [];
    if(0 > $DvtSunburstDefaults$$) {
      return $DvtSunburstEventManager$$
    }
    if(0 == $DvtSunburstDefaults$$) {
      return[this]
    }
    if($dvt$$10$$.$hasChildren$()) {
      for(var $DvtSunburstNode$$ = $dvt$$10$$.$getChildNodes$(), $DvtTreemapDefaults$$, $DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtSunburstNode$$.length;$DvtTreemapEventManager$$++) {
        $DvtTreemapDefaults$$ = $DvtSunburstNode$$[$DvtTreemapEventManager$$], $DvtSunburstEventManager$$ = $DvtSunburstEventManager$$.concat($DvtTreemapDefaults$$.$GetNodesAtDepth$($DvtTreemapDefaults$$, $DvtSunburstDefaults$$ - 1))
      }
    }
    return $DvtSunburstEventManager$$
  };
  $DvtTreeNode$$.$getNodeById$ = function $$DvtTreeNode$$$$getNodeById$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if($dvt$$10$$.getId() == $DvtSunburstDefaults$$) {
      return $dvt$$10$$
    }
    for(var $DvtSunburstEventManager$$ = $JSCompiler_alias_NULL$$, $DvtSunburstNode$$ = $dvt$$10$$.$getChildNodes$(), $DvtTreemapDefaults$$ = $DvtSunburstNode$$.length, $DvtSunburstEventManager$$ = $JSCompiler_alias_NULL$$, $DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtTreemapDefaults$$;$DvtTreemapEventManager$$++) {
      if($DvtSunburstEventManager$$ = $DvtSunburstNode$$[$DvtTreemapEventManager$$], $DvtSunburstEventManager$$ = $DvtTreeNode$$.$getNodeById$($DvtSunburstEventManager$$, $DvtSunburstDefaults$$)) {
        return $DvtSunburstEventManager$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtTreeNode$$.prototype.$getOptions$ = $JSCompiler_get$$("$_options$");
  $DvtTreeNode$$.prototype.$getCategories$ = function $$DvtTreeNode$$$$$getCategories$$() {
    if(this.$_bArtificialRoot$) {
      return[]
    }
    var $dvt$$10$$ = this.$getOptions$().categories;
    $dvt$$10$$ || ($dvt$$10$$ = ($dvt$$10$$ = ($dvt$$10$$ = this.$_parent$) ? $dvt$$10$$.$getCategories$() : $JSCompiler_alias_NULL$$) ? $dvt$$10$$.slice() : [], $dvt$$10$$.push(this.getId()));
    return $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtTreeNode$$.prototype.$getSize$ = $JSCompiler_get$$("$_size$");
  $DvtTreeNode$$.prototype.$getColor$ = $JSCompiler_get$$("$_color$");
  $DvtTreeNode$$.prototype.$getDatatip$ = function $$DvtTreeNode$$$$$getDatatip$$() {
    var $dvt$$10$$ = this.$_view$.$getOptions$().tooltip;
    return $dvt$$10$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($dvt$$10$$, this.$getDataContext$()) : this.$_shortDesc$
  };
  $DvtTreeNode$$.prototype.$getDatatipColor$ = $JSCompiler_get$$("$_color$");
  $DvtTreeNode$$.prototype.$getShortDesc$ = $JSCompiler_get$$("$_shortDesc$");
  $DvtTreeNode$$.prototype.$getDataContext$ = function $$DvtTreeNode$$$$$getDataContext$$() {
    return{id:this.getId(), label:this.$getLabel$(), value:this.$getSize$(), color:this.$getColor$()}
  };
  $DvtTreeNode$$.prototype.$getIndex$ = function $$DvtTreeNode$$$$$getIndex$$() {
    return this.$getOptions$()._index
  };
  $DvtTreeNode$$.prototype.$getAlpha$ = $JSCompiler_get$$("$_alpha$");
  $DvtTreeNode$$.prototype.$setAlpha$ = function $$DvtTreeNode$$$$$setAlpha$$($dvt$$10$$) {
    this.$_alpha$ = $dvt$$10$$;
    this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
  };
  $DvtTreeNode$$.prototype.$setDisclosed$ = function $$DvtTreeNode$$$$$setDisclosed$$($dvt$$10$$) {
    this.$getOptions$()._expanded = $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.$isDisclosed$ = function $$DvtTreeNode$$$$$isDisclosed$$() {
    return this.$getOptions$()._expanded !== $JSCompiler_alias_FALSE$$
  };
  $DvtTreeNode$$.prototype.$isDrillReplaceEnabled$ = function $$DvtTreeNode$$$$$isDrillReplaceEnabled$$() {
    return"replace" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
  };
  $DvtTreeNode$$.prototype.$getShowPopupBehaviors$ = function $$DvtTreeNode$$$$$getShowPopupBehaviors$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getOptions$()._spb;
    return!$DvtSunburstDefaults$$ || !$DvtSunburstDefaults$$[this.$_stampId$] ? $JSCompiler_alias_NULL$$ : $dvt$$10$$.$ShowPopupBehavior$.$createBehaviors$($DvtSunburstDefaults$$[this.$_stampId$])
  };
  $DvtTreeNode$$.prototype.$render$ = $JSCompiler_emptyFn$$();
  $DvtTreeNode$$.prototype.$renderChildren$ = function $$DvtTreeNode$$$$$renderChildren$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$getChildNodes$();
    if($DvtSunburstDefaults$$ != $JSCompiler_alias_NULL$$) {
      for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
        $DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$render$($dvt$$10$$)
      }
    }
  };
  $DvtTreeNode$$.prototype.$processAttrGroups$ = function $$DvtTreeNode$$$$$processAttrGroups$$($dvt$$10$$) {
    if($dvt$$10$$ = $dvt$$10$$.get(this.$getOptions$()._cv)) {
      this.$_color$ = $dvt$$10$$
    }
  };
  $DvtTreeNode$$.prototype.$getNextNavigable$ = function $$DvtTreeNode$$$$$getNextNavigable$$() {
    this.$MarkAsLastVisitedChild$();
    return this
  };
  $DvtTreeNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtTreeNode$$$$$getKeyboardBoundingBox$$() {
    return new $dvt$$10$$.$Rectangle$(0, 0, 0, 0)
  };
  $DvtTreeNode$$.prototype.$getTargetElem$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeNode$$.prototype.$showKeyboardFocusEffect$ = function $$DvtTreeNode$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$showHoverEffect$();
    this.$handleMouseOver$ && this.$handleMouseOver$()
  };
  $DvtTreeNode$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtTreeNode$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
    this.$handleMouseOut$ && this.$handleMouseOut$()
  };
  $DvtTreeNode$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtTreeNode$$.prototype.$handleMouseOver$ = function $$DvtTreeNode$$$$$handleMouseOver$$() {
    this.$IsHover$ = $JSCompiler_alias_TRUE$$
  };
  $DvtTreeNode$$.prototype.$handleMouseOut$ = function $$DvtTreeNode$$$$$handleMouseOut$$() {
    this.$IsHover$ = $JSCompiler_alias_FALSE$$
  };
  $DvtTreeNode$$.prototype.$isSelectable$ = function $$DvtTreeNode$$$$$isSelectable$$() {
    return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != $JSCompiler_alias_NULL$$
  };
  $DvtTreeNode$$.prototype.$isSelected$ = $JSCompiler_get$$("$_selected$");
  $DvtTreeNode$$.prototype.$setSelected$ = function $$DvtTreeNode$$$$$setSelected$$($dvt$$10$$) {
    this.$_selected$ = $dvt$$10$$;
    this.$UpdateAriaLabel$()
  };
  $DvtTreeNode$$.prototype.$showHoverEffect$ = $JSCompiler_emptyFn$$();
  $DvtTreeNode$$.prototype.$hideHoverEffect$ = $JSCompiler_emptyFn$$();
  $DvtTreeNode$$.prototype.$highlight$ = function $$DvtTreeNode$$$$$highlight$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.$setAlpha$($DvtSunburstDefaults$$)
  };
  $DvtTreeNode$$.prototype.$isDragAvailable$ = function $$DvtTreeNode$$$$$isDragAvailable$$($dvt$$10$$) {
    return this.$_view$.$__isDragAvailable$($dvt$$10$$)
  };
  $DvtTreeNode$$.prototype.$getDragTransferable$ = function $$DvtTreeNode$$$$$getDragTransferable$$() {
    return this.$_view$.$__getDragTransferable$(this)
  };
  $DvtTreeNode$$.prototype.$getDragFeedback$ = function $$DvtTreeNode$$$$$getDragFeedback$$() {
    return this.$_view$.$__getDragFeedback$()
  };
  $DvtTreeNode$$.prototype.$getDropSiteFeedback$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeNode$$.prototype.$getPopupBounds$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeNode$$.prototype.contains = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  $DvtTreeNode$$.prototype.$getNodeUnderPoint$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  $DvtTreeNode$$.prototype.$GetAnimationParams$ = function $$DvtTreeNode$$$$$GetAnimationParams$$() {
    return[]
  };
  $DvtTreeNode$$.prototype.$SetAnimationParams$ = $JSCompiler_emptyFn$$();
  $DvtTreeNode$$.prototype.$animateUpdate$ = function $$DvtTreeNode$$$$$animateUpdate$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    $DvtSunburstDefaults$$.$_bDrill$ || $DvtSunburstDefaults$$.$constructAnimation$($DvtSunburstEventManager$$.$getChildNodes$(), this.$getChildNodes$());
    var $DvtSunburstNode$$ = this.$GetAnimationParams$(), $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$.$GetAnimationParams$($DvtSunburstNode$$), $DvtTreemapEventManager$$;
    if(!$dvt$$10$$.$ArrayUtils$.$equals$($DvtTreemapDefaults$$, $DvtSunburstNode$$) && ($DvtTreemapEventManager$$ = new $dvt$$10$$.$CustomAnimation$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$), $DvtTreemapEventManager$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $DvtSunburstNode$$), $DvtSunburstDefaults$$.add($DvtTreemapEventManager$$, $DvtTreeNode$$.$_ANIMATION_UPDATE_PRIORITY$), $DvtSunburstNode$$ = 
    this.$_size$ != $DvtSunburstEventManager$$.$_size$, $DvtTreemapEventManager$$ = $dvt$$10$$.$ColorUtils$.$getRGBA$(this.$_color$) != $dvt$$10$$.$ColorUtils$.$getRGBA$($DvtSunburstEventManager$$.$_color$), this.$SetAnimationParams$($DvtTreemapDefaults$$), ($DvtTreemapDefaults$$ = this.$_view$.$getOptions$().animationUpdateColor) && ($DvtSunburstNode$$ || $DvtTreemapEventManager$$))) {
      this.$_color$ = $DvtTreemapDefaults$$
    }
  };
  $DvtTreeNode$$.prototype.$animateInsert$ = function $$DvtTreeNode$$$$$animateInsert$$($DvtSunburstDefaults$$) {
    if(!$DvtSunburstDefaults$$.$_bDrill$ || !$DvtSunburstDefaults$$.$isAncestorInsert$(this)) {
      this.$setAlpha$(0);
      var $DvtSunburstEventManager$$ = new $dvt$$10$$.$AnimFadeIn$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
      $DvtSunburstDefaults$$.add($DvtSunburstEventManager$$, $DvtTreeNode$$.$_ANIMATION_INSERT_PRIORITY$);
      if(this.$hasChildren$()) {
        for($DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < this.$_children$.length;$DvtSunburstEventManager$$++) {
          this.$_children$[$DvtSunburstEventManager$$].$animateInsert$($DvtSunburstDefaults$$)
        }
      }
    }
  };
  $DvtTreeNode$$.prototype.$animateDelete$ = function $$DvtTreeNode$$$$$animateDelete$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    $DvtSunburstEventManager$$.$addChild$(this.$_shape$);
    var $DvtSunburstNode$$ = new $dvt$$10$$.$AnimFadeOut$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
    $DvtSunburstDefaults$$.add($DvtSunburstNode$$, $DvtTreeNode$$.$_ANIMATION_DELETE_PRIORITY$);
    if(!$DvtSunburstDefaults$$.$_bDrill$ && this.$hasChildren$()) {
      for($DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < this.$_children$.length;$DvtSunburstNode$$++) {
        this.$_children$[$DvtSunburstNode$$].$animateDelete$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
      }
    }
  };
  $DvtTreeNode$$.prototype.$hasChildren$ = function $$DvtTreeNode$$$$$hasChildren$$() {
    return this.$_children$ != $JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
  };
  $DvtTreeNode$$.prototype.$GetDepth$ = function $$DvtTreeNode$$$$$GetDepth$$() {
    for(var $dvt$$10$$ = 0, $DvtSunburstDefaults$$ = this.$_parent$;$DvtSunburstDefaults$$;) {
      $dvt$$10$$++, $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.$_parent$
    }
    return $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.$GetFill$ = function $$DvtTreeNode$$$$$GetFill$$() {
    return this.$_pattern$ ? new $dvt$$10$$.$PatternFill$(this.$_pattern$, this.$_color$) : new $dvt$$10$$.$SolidFill$(this.$_color$)
  };
  $DvtTreeNode$$.$GetNodeTextColor$ = function $$DvtTreeNode$$$$GetNodeTextColor$$($DvtSunburstDefaults$$) {
    return $DvtSunburstDefaults$$.$_pattern$ ? "#000000" : $dvt$$10$$.$ColorUtils$.$getContrastingTextColor$($DvtSunburstDefaults$$.$_color$)
  };
  $DvtTreeNode$$.prototype.$ApplyLabelTextStyle$ = function $$DvtTreeNode$$$$$ApplyLabelTextStyle$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtTreeNode$$.$GetNodeTextColor$(this);
    $DvtSunburstDefaults$$.$setSolidFill$($DvtSunburstEventManager$$);
    var $DvtSunburstNode$$ = [];
    $DvtSunburstNode$$.push(this.$_view$.$getOptions$().nodeDefaults.labelStyle);
    this.$_labelStyle$ && $DvtSunburstNode$$.push(this.$_labelStyle$);
    $DvtSunburstDefaults$$.$setCSSStyle$($dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtSunburstNode$$));
    $dvt$$10$$.$Agent$.$isHighContrast$() && $DvtSunburstDefaults$$.$setSolidFill$($DvtSunburstEventManager$$)
  };
  $DvtTreeNode$$.prototype.$GetTextSize$ = function $$DvtTreeNode$$$$$GetTextSize$$() {
    var $dvt$$10$$ = $DvtTreeNode$$.$_DEFAULT_TEXT_SIZE$, $DvtSunburstDefaults$$ = this.$_view$.$getOptions$().nodeDefaults.labelStyle.$getFontSize$();
    $DvtSunburstDefaults$$ && ($dvt$$10$$ = parseFloat($DvtSunburstDefaults$$));
    return $dvt$$10$$
  };
  $DvtTreeNode$$.prototype.$getDisplayable$ = $JSCompiler_get$$("$_shape$");
  $DvtTreeNode$$.prototype.$getLabel$ = $JSCompiler_get$$("$_textStr$");
  $DvtTreeNode$$.prototype.$GetElAttributes$ = function $$DvtTreeNode$$$$$GetElAttributes$$() {
    return this.$getOptions$()._cf
  };
  $DvtTreeNode$$.prototype.$GetTemplate$ = function $$DvtTreeNode$$$$$GetTemplate$$() {
    return this.$_view$.$__getTemplate$(this.$_stampId$)
  };
  $DvtTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtTreeNode$$$$$isDoubleClickable$$() {
    return this.$isDrillReplaceEnabled$()
  };
  $DvtTreeNode$$.prototype.$UpdateAriaLabel$ = $JSCompiler_emptyFn$$();
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreePeer$$, $dvt$$10$$.$SimpleObjPeer$);
  $DvtTreePeer$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtTreePeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_bDrillable$");
  $DvtTreePeer$$.prototype.$setDrillable$ = $JSCompiler_set$$("$_bDrillable$");
  $DvtTreePeer$$.prototype.$handleMouseOver$ = function $$DvtTreePeer$$$$$handleMouseOver$$() {
    this.$_node$ && this.$_node$.$handleMouseOver$ && this.$_node$.$handleMouseOver$()
  };
  $DvtTreePeer$$.prototype.$handleMouseOut$ = function $$DvtTreePeer$$$$$handleMouseOut$$() {
    this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeBreadcrumbsRenderer$$, $dvt$$10$$.$Obj$);
  $DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
  $DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
  $DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    var $DvtTreemapEventManager$$ = $DvtSunburstDefaults$$.$getCtx$(), $DvtTreemapKeyboardHandler$$ = $DvtSunburstDefaults$$.$getOptions$().styleDefaults, $DvtTreemapLayoutSliceAndDice$$ = [];
    $DvtTreemapLayoutSliceAndDice$$.push(new $dvt$$10$$.$CSSStyle$($DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
    $DvtTreemapLayoutSliceAndDice$$.push($DvtTreemapKeyboardHandler$$._drillTextStyle);
    var $DvtTreemapLayoutSliceAndDice$$ = $dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtTreemapLayoutSliceAndDice$$).toString(), $DvtTreemapLayoutSquarifying$$ = $DvtTreemapLayoutSliceAndDice$$ + "text-decoration: underline;", $DvtTreemapLayoutBase$$ = [];
    $DvtTreemapLayoutBase$$.push($DvtTreemapKeyboardHandler$$._currentTextStyle);
    $DvtTreemapKeyboardHandler$$ = $dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtTreemapLayoutBase$$).toString();
    $DvtTreemapEventManager$$ = new $dvt$$10$$.$Breadcrumbs$($DvtTreemapEventManager$$, $DvtSunburstDefaults$$.$__processBreadcrumbsEvent$, $DvtSunburstDefaults$$, {$labelStyle$:$DvtTreemapLayoutSliceAndDice$$, $labelStyleOver$:$DvtTreemapLayoutSquarifying$$, $labelStyleDown$:$DvtTreemapLayoutSquarifying$$, $disabledLabelStyle$:$DvtTreemapKeyboardHandler$$});
    $DvtSunburstDefaults$$.$addChild$($DvtTreemapEventManager$$);
    $DvtSunburstNode$$ = $DvtSunburstNode$$.slice(0).reverse();
    $DvtSunburstNode$$.push({label:$DvtTreemapDefaults$$});
    $DvtTreemapEventManager$$.$render$({items:$DvtSunburstNode$$}, $DvtSunburstEventManager$$.$w$);
    $DvtTreemapDefaults$$ = $DvtTreemapEventManager$$.$getDimensions$();
    $DvtTreemapEventManager$$.$setTranslate$($DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y);
    $DvtTreemapDefaults$$ = $DvtTreemapDefaults$$.$h$ + $DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
    $DvtSunburstEventManager$$.y += $DvtTreemapDefaults$$;
    $DvtSunburstEventManager$$.$h$ -= $DvtTreemapDefaults$$;
    $DvtSunburstDefaults$$.removeChild($DvtTreemapEventManager$$);
    return $DvtTreemapEventManager$$
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeLegendRenderer$$, $dvt$$10$$.$Obj$);
  $DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
  $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
  $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
  $DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
  $DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
  $DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + $DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
  $DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    var $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$.$getOptions$(), $DvtTreemapEventManager$$ = $DvtTreemapDefaults$$.sizeLabel, $DvtTreemapKeyboardHandler$$ = $DvtTreemapDefaults$$.colorLabel;
    if(!($DvtTreemapEventManager$$ == $JSCompiler_alias_NULL$$ && $DvtTreemapKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && $DvtSunburstNode$$ == $JSCompiler_alias_NULL$$)) {
      var $DvtTreemapLayoutSliceAndDice$$ = $DvtSunburstDefaults$$.$getCtx$(), $DvtTreemapLayoutSquarifying$$ = $DvtSunburstDefaults$$.$getEventManager$(), $DvtTreemapLayoutBase$$ = new $dvt$$10$$.$Container$($DvtTreemapLayoutSliceAndDice$$);
      $DvtSunburstDefaults$$.$addChild$($DvtTreemapLayoutBase$$);
      var $DvtTreemapNode$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($DvtTreemapLayoutSliceAndDice$$, $DvtSunburstDefaults$$, $DvtTreemapLayoutBase$$, $DvtSunburstEventManager$$.$w$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtSunburstNode$$), $DvtTreeAutomation$$ = $dvt$$10$$.$CSSStyle$.$afterSkinAlta$($DvtSunburstDefaults$$.$getOptions$().skin) ? $JSCompiler_alias_NULL$$ : "#000000", $DvtTreeDefaults$$ = [];
      $DvtTreeDefaults$$.push($DvtTreemapDefaults$$.styleDefaults._labelStyle);
      var $DvtTreeAutomation$$ = {borderColor:$DvtTreeAutomation$$, $labelStyle$:$dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtTreeDefaults$$)}, $DvtTreemapDefaults$$ = $dvt$$10$$.$LegendAttrGroupsRenderer$.$renderAttrGroups$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$, $DvtTreemapLayoutBase$$, $DvtSunburstEventManager$$.$w$, $DvtSunburstEventManager$$.$h$, $DvtSunburstNode$$, $DvtTreeAutomation$$), $DvtTreeDefaults$$ = $DvtTreemapNode$$ ? $DvtTreemapNode$$.$getDimensions$() : $JSCompiler_alias_NULL$$, 
      $DvtTreeKeyboardHandler$$ = $DvtTreemapDefaults$$ ? $DvtTreemapDefaults$$.$getDimensions$() : $JSCompiler_alias_NULL$$;
      if($DvtTreemapNode$$ && !$DvtTreemapDefaults$$) {
        $DvtTreemapNode$$.$setTranslateX$($DvtSunburstEventManager$$.y + ($DvtSunburstEventManager$$.$w$ - $DvtTreeDefaults$$.$w$) / 2)
      }else {
        if($DvtTreemapDefaults$$ && !$DvtTreemapNode$$) {
          $DvtTreemapDefaults$$.$setTranslateX$($DvtSunburstEventManager$$.y + ($DvtSunburstEventManager$$.$w$ - $DvtTreeKeyboardHandler$$.$w$) / 2)
        }else {
          if($DvtTreemapDefaults$$ && $DvtTreemapNode$$) {
            var $DvtTreeBreadcrumbsRenderer$$ = $DvtSunburstEventManager$$.$w$ - $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
            $DvtTreeDefaults$$.$w$ + $DvtTreeKeyboardHandler$$.$w$ > $DvtTreeBreadcrumbsRenderer$$ && ($DvtTreeDefaults$$.$w$ > $DvtTreeBreadcrumbsRenderer$$ / 2 && $DvtTreeKeyboardHandler$$.$w$ > $DvtTreeBreadcrumbsRenderer$$ / 2 ? ($DvtTreemapLayoutBase$$.removeChild($DvtTreemapNode$$), $DvtTreemapLayoutBase$$.removeChild($DvtTreemapDefaults$$), $DvtTreemapNode$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($DvtTreemapLayoutSliceAndDice$$, $DvtSunburstDefaults$$, $DvtTreemapLayoutBase$$, $DvtTreeBreadcrumbsRenderer$$ / 
            2, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtSunburstNode$$), $DvtTreemapDefaults$$ = $dvt$$10$$.$LegendAttrGroupsRenderer$.$renderAttrGroups$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$, $DvtTreemapLayoutBase$$, $DvtTreeBreadcrumbsRenderer$$ / 2, $DvtSunburstEventManager$$.$h$, $DvtSunburstNode$$, $DvtTreeAutomation$$)) : $DvtTreeDefaults$$.$w$ > $DvtTreeKeyboardHandler$$.$w$ ? ($DvtTreemapLayoutSquarifying$$ = $DvtTreeBreadcrumbsRenderer$$ - $DvtTreeKeyboardHandler$$.$w$, 
            $DvtTreemapLayoutBase$$.removeChild($DvtTreemapNode$$), $DvtTreemapNode$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($DvtTreemapLayoutSliceAndDice$$, $DvtSunburstDefaults$$, $DvtTreemapLayoutBase$$, $DvtTreemapLayoutSquarifying$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtSunburstNode$$)) : ($DvtTreemapEventManager$$ = $DvtTreeBreadcrumbsRenderer$$ - $DvtTreeDefaults$$.$w$, $DvtTreemapLayoutBase$$.removeChild($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ = $dvt$$10$$.$LegendAttrGroupsRenderer$.$renderAttrGroups$($DvtTreemapLayoutSliceAndDice$$, 
            $DvtTreemapLayoutSquarifying$$, $DvtTreemapLayoutBase$$, $DvtTreemapEventManager$$, $DvtSunburstEventManager$$.$h$, $DvtSunburstNode$$, $DvtTreeAutomation$$)), $DvtTreeDefaults$$ = $DvtTreemapNode$$.$getDimensions$(), $DvtTreeKeyboardHandler$$ = $DvtTreemapDefaults$$.$getDimensions$());
            $dvt$$10$$.$Agent$.$isRightToLeft$($DvtTreemapLayoutSliceAndDice$$) ? ($DvtTreemapDefaults$$.$setTranslateX$($DvtSunburstEventManager$$.x), $DvtTreemapNode$$.$setTranslateX$($DvtSunburstEventManager$$.x + $DvtSunburstEventManager$$.$w$ - $DvtTreeDefaults$$.$w$)) : ($DvtTreemapNode$$.$setTranslateX$($DvtSunburstEventManager$$.x), $DvtTreemapDefaults$$.$setTranslateX$($DvtSunburstEventManager$$.x + $DvtSunburstEventManager$$.$w$ - $DvtTreeKeyboardHandler$$.$w$))
          }
        }
      }
      $DvtSunburstNode$$ = $DvtTreemapLayoutBase$$.$getDimensions$();
      $DvtTreemapLayoutBase$$.$setTranslateY$($DvtSunburstEventManager$$.y + $DvtSunburstEventManager$$.$h$ - $DvtSunburstNode$$.$h$);
      $DvtSunburstEventManager$$.$h$ -= $DvtSunburstNode$$.$h$ + $DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
      $DvtSunburstDefaults$$.removeChild($DvtTreemapLayoutBase$$);
      return $DvtTreemapLayoutBase$$
    }
  };
  $DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    var $DvtTreemapLayoutSliceAndDice$$ = $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstDefaults$$), $DvtTreemapLayoutSquarifying$$ = $DvtSunburstEventManager$$.$getEventManager$(), $DvtTreemapLayoutBase$$ = $DvtSunburstEventManager$$.$getOptions$().styleDefaults, $DvtTreemapNode$$ = $JSCompiler_alias_NULL$$;
    if($DvtTreemapEventManager$$ || $DvtTreemapKeyboardHandler$$) {
      $DvtTreemapNode$$ = new $dvt$$10$$.$Container$($DvtSunburstDefaults$$);
      $DvtSunburstNode$$.$addChild$($DvtTreemapNode$$);
      var $DvtTreeAutomation$$ = [];
      $DvtTreeAutomation$$.push($DvtTreemapLayoutBase$$._attributeTypeTextStyle);
      $DvtSunburstNode$$ = $dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtTreeAutomation$$);
      $DvtTreeAutomation$$ = [];
      $DvtTreeAutomation$$.push($DvtTreemapLayoutBase$$._attributeValueTextStyle);
      var $DvtTreemapLayoutBase$$ = $dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtTreeAutomation$$), $DvtTreeDefaults$$, $DvtTreeKeyboardHandler$$, $DvtTreeBreadcrumbsRenderer$$, $DvtTreePeer$$, $DvtTreeAutomation$$ = 0;
      $DvtTreemapEventManager$$ && ($DvtTreeDefaults$$ = $dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstEventManager$$.$getOptions$(), "labelSize", $DvtSunburstEventManager$$.$getBundlePrefix$(), "SIZE"), $DvtTreeDefaults$$ = new $dvt$$10$$.$OutputText$($DvtSunburstDefaults$$, $DvtTreeDefaults$$, 0, 0), $DvtTreeDefaults$$.$setCSSStyle$($DvtSunburstNode$$), $DvtTreemapNode$$.$addChild$($DvtTreeDefaults$$), $DvtTreeBreadcrumbsRenderer$$ = $DvtTreeDefaults$$.$measureDimensions$().$w$, $DvtTreeKeyboardHandler$$ = 
      new $dvt$$10$$.$OutputText$($DvtSunburstDefaults$$, $DvtTreemapEventManager$$, 0, 0), $DvtTreeKeyboardHandler$$.$setCSSStyle$($DvtTreemapLayoutBase$$), $DvtTreemapNode$$.$addChild$($DvtTreeKeyboardHandler$$), $DvtTreePeer$$ = $DvtTreeKeyboardHandler$$.$measureDimensions$().$w$, $DvtTreeAutomation$$ = $DvtTreeBreadcrumbsRenderer$$ + $DvtTreePeer$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
      var $DvtTreeNode$$, $DvtTreeEventManager$$, $colorLabelWidth$$, $DvtTreeDropTarget$$, $DvtTreeView$$ = 0;
      $DvtTreemapKeyboardHandler$$ && ($DvtTreeNode$$ = $dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstEventManager$$.$getOptions$(), "labelColor", $DvtSunburstEventManager$$.$getBundlePrefix$(), "COLOR"), $DvtTreeNode$$ = new $dvt$$10$$.$OutputText$($DvtSunburstDefaults$$, $DvtTreeNode$$, 0, 0), $DvtTreeNode$$.$setCSSStyle$($DvtSunburstNode$$), $DvtTreemapNode$$.$addChild$($DvtTreeNode$$), $colorLabelWidth$$ = $DvtTreeNode$$.$measureDimensions$().$w$, $DvtTreeEventManager$$ = new $dvt$$10$$.$OutputText$($DvtSunburstDefaults$$, 
      $DvtTreemapKeyboardHandler$$, 0, 0), $DvtTreeEventManager$$.$setCSSStyle$($DvtTreemapLayoutBase$$), $DvtTreemapNode$$.$addChild$($DvtTreeEventManager$$), $DvtTreeDropTarget$$ = $DvtTreeEventManager$$.$measureDimensions$().$w$, $DvtTreeView$$ = $colorLabelWidth$$ + $DvtTreeDropTarget$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
      $DvtTreemapDefaults$$ -= $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
      $DvtTreeAutomation$$ + $DvtTreeView$$ > $DvtTreemapDefaults$$ && ($DvtSunburstDefaults$$ = $DvtTreemapDefaults$$ / 2, $DvtTreeAutomation$$ > $DvtSunburstDefaults$$ && $DvtTreeView$$ > $DvtSunburstDefaults$$ ? ($dvt$$10$$.$TextUtils$.$fitText$($DvtTreeKeyboardHandler$$, $DvtSunburstDefaults$$ - $DvtTreeBreadcrumbsRenderer$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $DvtTreemapNode$$) ? ($DvtTreePeer$$ = $DvtTreeKeyboardHandler$$.$measureDimensions$().$w$, $DvtTreemapLayoutSquarifying$$.$associate$($DvtTreeKeyboardHandler$$, 
      new $dvt$$10$$.$SimpleObjPeer$($DvtTreemapEventManager$$))) : ($DvtTreemapNode$$.removeChild($DvtTreeDefaults$$), $DvtTreemapNode$$.removeChild($DvtTreeKeyboardHandler$$), $DvtTreeKeyboardHandler$$ = $JSCompiler_alias_NULL$$, $DvtTreePeer$$ = 0), $dvt$$10$$.$TextUtils$.$fitText$($DvtTreeEventManager$$, $DvtSunburstDefaults$$ - $colorLabelWidth$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $DvtTreemapNode$$) ? ($DvtTreeDropTarget$$ = $DvtTreeEventManager$$.$measureDimensions$().$w$, 
      $DvtTreemapLayoutSquarifying$$.$associate$($DvtTreeEventManager$$, new $dvt$$10$$.$SimpleObjPeer$($DvtTreemapKeyboardHandler$$))) : ($DvtTreemapNode$$.removeChild($DvtTreeNode$$), $DvtTreemapNode$$.removeChild($DvtTreeEventManager$$), $DvtTreeEventManager$$ = $JSCompiler_alias_NULL$$, $DvtTreeDropTarget$$ = 0)) : $DvtTreeAutomation$$ > $DvtTreeView$$ ? $dvt$$10$$.$TextUtils$.$fitText$($DvtTreeKeyboardHandler$$, $DvtTreemapDefaults$$ - $DvtTreeView$$ - $DvtTreeBreadcrumbsRenderer$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
      Infinity, $DvtTreemapNode$$) ? ($DvtTreePeer$$ = $DvtTreeKeyboardHandler$$.$measureDimensions$().$w$, $DvtTreemapLayoutSquarifying$$.$associate$($DvtTreeKeyboardHandler$$, new $dvt$$10$$.$SimpleObjPeer$($DvtTreemapEventManager$$))) : ($DvtTreemapNode$$.removeChild($DvtTreeDefaults$$), $DvtTreemapNode$$.removeChild($DvtTreeKeyboardHandler$$), $DvtTreeKeyboardHandler$$ = $JSCompiler_alias_NULL$$, $DvtTreePeer$$ = 0) : $dvt$$10$$.$TextUtils$.$fitText$($DvtTreeEventManager$$, $DvtTreemapDefaults$$ - 
      $DvtTreeAutomation$$ - $colorLabelWidth$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $DvtTreemapNode$$) ? ($DvtTreeDropTarget$$ = $DvtTreeEventManager$$.$measureDimensions$().$w$, $DvtTreemapLayoutSquarifying$$.$associate$($DvtTreeEventManager$$, new $dvt$$10$$.$SimpleObjPeer$($DvtTreemapKeyboardHandler$$))) : ($DvtTreemapNode$$.removeChild($DvtTreeNode$$), $DvtTreemapNode$$.removeChild($DvtTreeEventManager$$), $DvtTreeEventManager$$ = $JSCompiler_alias_NULL$$, $DvtTreeDropTarget$$ = 
      0));
      $DvtTreemapDefaults$$ = 0;
      $DvtTreemapLayoutSliceAndDice$$ ? ($DvtTreeEventManager$$ && ($DvtTreeEventManager$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $DvtTreeDropTarget$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $DvtTreeNode$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $colorLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $DvtTreeKeyboardHandler$$ && ($DvtTreeKeyboardHandler$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $DvtTreePeer$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
      $DvtTreeDefaults$$.$setX$($DvtTreemapDefaults$$))) : ($DvtTreeKeyboardHandler$$ && ($DvtTreeDefaults$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $DvtTreeBreadcrumbsRenderer$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $DvtTreeKeyboardHandler$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $DvtTreePeer$$ + $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $DvtTreeEventManager$$ && ($DvtTreeNode$$.$setX$($DvtTreemapDefaults$$), $DvtTreemapDefaults$$ += $colorLabelWidth$$ + 
      $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $DvtTreeEventManager$$.$setX$($DvtTreemapDefaults$$)))
    }
    return $DvtTreemapNode$$
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeKeyboardHandler$$, $dvt$$10$$.$KeyboardHandler$);
  $DvtTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTreeKeyboardHandler$$$$$isSelectionEvent$$($dvt$$10$$) {
    return this.$isNavigationEvent$($dvt$$10$$) && !$dvt$$10$$.ctrlKey
  };
  $DvtTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTreeKeyboardHandler$$$$$isMultiSelectEvent$$($DvtSunburstDefaults$$) {
    return $DvtSunburstDefaults$$.keyCode == $dvt$$10$$.$KeyboardEvent$.$SPACE$ && $DvtSunburstDefaults$$.ctrlKey
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeDefaults$$, $dvt$$10$$.$BaseComponentDefaults$);
  $DvtTreeDefaults$$.$VERSION_1$ = {skin:$dvt$$10$$.$CSSStyle$.$SKIN_ALTA$, animationDuration:500, animationOnDataChange:"none", animationOnDisplay:"none", highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, nodeDefaults:{labelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$)}, selectionMode:"multiple", sorting:"off", _statusMessageStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), styleDefaults:{_attributeTypeTextStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$ + 
  "color:#4F4F4F"), _attributeValueTextStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), _currentTextStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), _drillTextStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), _labelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, touchResponse:"auto", _resources:{}};
  $DvtTreeDefaults$$.prototype.Init = function $$DvtTreeDefaults$$$$Init$($DvtSunburstDefaults$$) {
    $DvtSunburstDefaults$$ = {skyros:$dvt$$10$$.$JsonUtils$.$merge$($DvtSunburstDefaults$$.skyros, $DvtTreeDefaults$$.$VERSION_1$), alta:$dvt$$10$$.$JsonUtils$.$merge$($DvtSunburstDefaults$$.alta, {})};
    $DvtTreeDefaults$$.$superclass$.Init.call(this, $DvtSunburstDefaults$$)
  };
  var $DvtTreeUtils$$ = {};
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeUtils$$, $dvt$$10$$.$Obj$);
  $DvtTreeUtils$$.$calcMaxDepth$ = function $$DvtTreeUtils$$$$calcMaxDepth$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$, $DvtSunburstNode$$ = $dvt$$10$$.$getChildNodes$();
    if($DvtSunburstNode$$) {
      for(var $DvtTreemapDefaults$$ = 0;$DvtTreemapDefaults$$ < $DvtSunburstNode$$.length;$DvtTreemapDefaults$$++) {
        var $DvtTreemapEventManager$$ = $DvtTreeUtils$$.$calcMaxDepth$($DvtSunburstNode$$[$DvtTreemapDefaults$$], $DvtSunburstDefaults$$ + 1), $DvtSunburstEventManager$$ = Math.max($DvtSunburstEventManager$$, $DvtTreemapEventManager$$)
      }
    }
    return $DvtSunburstEventManager$$
  };
  $DvtTreeUtils$$.$calcNodeCount$ = function $$DvtTreeUtils$$$$calcNodeCount$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = 1;
    if($dvt$$10$$ = $dvt$$10$$.$getChildNodes$()) {
      for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $dvt$$10$$.length;$DvtSunburstEventManager$$++) {
        $DvtSunburstDefaults$$ += $DvtTreeUtils$$.$calcNodeCount$($dvt$$10$$[$DvtSunburstEventManager$$])
      }
    }
    return $DvtSunburstDefaults$$
  };
  $DvtTreeUtils$$.$getAllNodes$ = function $$DvtTreeUtils$$$$getAllNodes$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = [];
    $DvtTreeUtils$$.$_addNodesToArray$($dvt$$10$$, $DvtSunburstDefaults$$);
    return $DvtSunburstDefaults$$
  };
  $DvtTreeUtils$$.$getAllVisibleNodes$ = function $$DvtTreeUtils$$$$getAllVisibleNodes$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = [];
    $DvtTreeUtils$$.$_addNodesToArray$($dvt$$10$$, $DvtSunburstDefaults$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
    return $DvtSunburstDefaults$$
  };
  $DvtTreeUtils$$.$getLeafNodes$ = function $$DvtTreeUtils$$$$getLeafNodes$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = [];
    $DvtTreeUtils$$.$_addNodesToArray$($dvt$$10$$, $DvtSunburstDefaults$$, $JSCompiler_alias_TRUE$$);
    return $DvtSunburstDefaults$$
  };
  $DvtTreeUtils$$.$isHiddenNode$ = function $$DvtTreeUtils$$$$isHiddenNode$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    return $dvt$$10$$.$ArrayUtils$.$hasAnyMapItem$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.categories)
  };
  $DvtTreeUtils$$.$calcContinuousAttrGroupsExtents$ = function $$DvtTreeUtils$$$$calcContinuousAttrGroupsExtents$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $dvt$$10$$.S;
    if(!($DvtSunburstEventManager$$ == $JSCompiler_alias_NULL$$ || $dvt$$10$$.min != $JSCompiler_alias_NULL$$ && $dvt$$10$$.max != $JSCompiler_alias_NULL$$)) {
      for(var $DvtSunburstNode$$ = Infinity, $DvtTreemapDefaults$$ = -Infinity, $DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtSunburstDefaults$$.length;$DvtTreemapEventManager$$++) {
        var $DvtTreemapKeyboardHandler$$ = $DvtSunburstDefaults$$[$DvtTreemapEventManager$$];
        $DvtSunburstEventManager$$ == $DvtTreemapKeyboardHandler$$.$_stampId$ && ($DvtTreemapKeyboardHandler$$ = $DvtTreemapKeyboardHandler$$.$getOptions$()._cv, $DvtTreemapKeyboardHandler$$ != $JSCompiler_alias_NULL$$ && ($DvtTreemapDefaults$$ = Math.max($DvtTreemapDefaults$$, $DvtTreemapKeyboardHandler$$), $DvtSunburstNode$$ = Math.min($DvtSunburstNode$$, $DvtTreemapKeyboardHandler$$)))
      }
      $dvt$$10$$.min == $JSCompiler_alias_NULL$$ && ($dvt$$10$$.min = $DvtSunburstNode$$);
      $dvt$$10$$.max == $JSCompiler_alias_NULL$$ && ($dvt$$10$$.max = $DvtTreemapDefaults$$)
    }
  };
  $DvtTreeUtils$$.$processContinuousAttrGroups$ = function $$DvtTreeUtils$$$$processContinuousAttrGroups$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    for(var $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstDefaults$$.length;$DvtSunburstNode$$++) {
      var $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$[$DvtSunburstNode$$], $DvtTreemapEventManager$$ = $DvtTreemapDefaults$$.$attrGroups$, $DvtTreemapDefaults$$ = $DvtTreemapDefaults$$.$stampId$;
      if($DvtTreemapEventManager$$ instanceof $dvt$$10$$.$ContinuousAttrGroups$ && $DvtTreemapDefaults$$ != $JSCompiler_alias_NULL$$) {
        for(var $DvtTreemapKeyboardHandler$$ = 0;$DvtTreemapKeyboardHandler$$ < $DvtSunburstEventManager$$.length;$DvtTreemapKeyboardHandler$$++) {
          var $DvtTreemapLayoutSliceAndDice$$ = $DvtSunburstEventManager$$[$DvtTreemapKeyboardHandler$$];
          $DvtTreemapDefaults$$ == $DvtTreemapLayoutSliceAndDice$$.$_stampId$ && $DvtTreemapLayoutSliceAndDice$$.$processAttrGroups$($DvtTreemapEventManager$$)
        }
      }
    }
  };
  $DvtTreeUtils$$.$_addNodesToArray$ = function $$DvtTreeUtils$$$$_addNodesToArray$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    if($dvt$$10$$) {
      var $DvtTreemapDefaults$$ = $dvt$$10$$.$getChildNodes$(), $DvtTreemapEventManager$$ = $DvtTreemapDefaults$$ ? $DvtTreemapDefaults$$.length : 0;
      (!$DvtSunburstEventManager$$ || 0 == $DvtTreemapEventManager$$) && (!$DvtSunburstNode$$ || $dvt$$10$$.$getDisplayable$()) && $DvtSunburstDefaults$$.push($dvt$$10$$);
      for($dvt$$10$$ = 0;$dvt$$10$$ < $DvtTreemapEventManager$$;$dvt$$10$$++) {
        $DvtTreeUtils$$.$_addNodesToArray$($DvtTreemapDefaults$$[$dvt$$10$$], $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
      }
    }
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreeAutomation$$, $dvt$$10$$.$Automation$);
  $DvtTreeAutomation$$.$NODE_ID_PREFIX$ = "node";
  $DvtTreeAutomation$$.$BREADCRUMBS_PREFIX$ = "breadcrumbs";
  $DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$_treeView$.$getLogicalObject$($DvtSunburstDefaults$$);
    if(!$DvtSunburstEventManager$$) {
      return $DvtSunburstDefaults$$.getParent() instanceof $dvt$$10$$.$Button$ && ($DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.getParent()), $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.getParent(), $DvtSunburstEventManager$$ instanceof $dvt$$10$$.$Breadcrumbs$ ? $DvtTreeAutomation$$.$BREADCRUMBS_PREFIX$ + "[" + $DvtSunburstEventManager$$.$getCrumbIndex$($DvtSunburstDefaults$$) + "]" : $JSCompiler_alias_NULL$$
    }
    if($DvtSunburstEventManager$$ instanceof $DvtTreeNode$$) {
      $DvtSunburstDefaults$$ = "";
      if(!this.$_root$.$_bArtificialRoot$) {
        if($DvtSunburstEventManager$$ == this.$_root$) {
          return $DvtTreeAutomation$$.$NODE_ID_PREFIX$ + "[0]"
        }
        $DvtSunburstDefaults$$ += "[0]"
      }
      $DvtSunburstDefaults$$ = ($DvtSunburstEventManager$$ = this.$_getIndicesFromNode$($DvtSunburstEventManager$$, this.$_root$.$getChildNodes$())) ? $DvtSunburstDefaults$$ + $DvtSunburstEventManager$$ : $DvtSunburstDefaults$$;
      if(0 < $DvtSunburstDefaults$$.length) {
        return $DvtTreeAutomation$$.$NODE_ID_PREFIX$ + $DvtSunburstDefaults$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if($DvtSunburstDefaults$$ && 0 < $DvtSunburstDefaults$$.length) {
      for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
        if($DvtSunburstDefaults$$[$DvtSunburstEventManager$$] == $dvt$$10$$) {
          return"[" + $DvtSunburstEventManager$$ + "]"
        }
        var $DvtSunburstNode$$ = this.$_getIndicesFromNode$($dvt$$10$$, $DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$getChildNodes$());
        if($DvtSunburstNode$$) {
          return"[" + $DvtSunburstEventManager$$ + "]" + $DvtSunburstNode$$
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($DvtSunburstDefaults$$) {
    return!$DvtSunburstDefaults$$ ? $JSCompiler_alias_NULL$$ : $DvtSunburstDefaults$$ == $dvt$$10$$.$Automation$.$TOOLTIP_SUBID$ ? this.$GetTooltipElement$(this.$_treeView$) : 0 == $DvtSunburstDefaults$$.indexOf($DvtTreeAutomation$$.$BREADCRUMBS_PREFIX$) ? ($DvtSunburstDefaults$$ = this.$_root$.$_view$.$getBreadcrumbs$().$getCrumb$($DvtSunburstDefaults$$.substring($DvtSunburstDefaults$$.indexOf("[") + 1, $DvtSunburstDefaults$$.indexOf("]")))) ? $DvtSunburstDefaults$$.$getElem$() : $JSCompiler_alias_NULL$$ : 
    !this.$_root$.$_bArtificialRoot$ && ($DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.substring(0, $DvtSunburstDefaults$$.indexOf("[")) + $DvtSunburstDefaults$$.substring($DvtSunburstDefaults$$.indexOf("]") + 1), $DvtSunburstDefaults$$ == $DvtTreeAutomation$$.$NODE_ID_PREFIX$) ? this.$_root$.$getDisplayable$().$getElem$() : ($DvtSunburstDefaults$$ = this.$_getNodeFromSubId$(this.$_root$, $DvtSunburstDefaults$$)) ? $DvtSunburstDefaults$$.$getDisplayable$().$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtTreeAutomation$$.prototype.$_getNodeFromSubId$ = function $$DvtTreeAutomation$$$$$_getNodeFromSubId$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.indexOf("["), $DvtSunburstNode$$ = $DvtSunburstDefaults$$.indexOf("]");
    if(0 <= $DvtSunburstEventManager$$ && 0 <= $DvtSunburstNode$$) {
      $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.substring($DvtSunburstEventManager$$ + 1, $DvtSunburstNode$$);
      $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.substring($DvtSunburstNode$$ + 1);
      var $DvtSunburstNode$$ = $DvtSunburstDefaults$$.indexOf("["), $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$.indexOf("]");
      return($DvtSunburstEventManager$$ = $DvtTreeAutomation$$.$_getNodeByIndex$($dvt$$10$$.$getChildNodes$(), $DvtSunburstEventManager$$)) && 0 <= $DvtSunburstNode$$ && 0 <= $DvtTreemapDefaults$$ ? this.$_getNodeFromSubId$($DvtSunburstEventManager$$, $DvtSunburstDefaults$$) : $DvtSunburstEventManager$$
    }
  };
  $DvtTreeAutomation$$.prototype.$_getNodeFromPath$ = function $$DvtTreeAutomation$$$$$_getNodeFromPath$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.shift(), $DvtSunburstEventManager$$ = $DvtTreeAutomation$$.$_getNodeByIndex$($dvt$$10$$.$getChildNodes$(), $DvtSunburstEventManager$$);
    return 0 == $DvtSunburstDefaults$$.length ? $DvtSunburstEventManager$$ : 0 < $DvtSunburstDefaults$$.length ? this.$_getNodeFromPath$($DvtSunburstEventManager$$, $DvtSunburstDefaults$$) : $JSCompiler_alias_NULL$$
  };
  $DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($dvt$$10$$) {
    !this.$_root$.$_bArtificialRoot$ && 0 == $dvt$$10$$[0] && $dvt$$10$$.shift();
    $dvt$$10$$ = 0 == $dvt$$10$$.length ? this.$_root$ : this.$_getNodeFromPath$(this.$_root$, $dvt$$10$$);
    return{color:$dvt$$10$$.$getColor$(), label:$dvt$$10$$.$getLabel$(), selected:$dvt$$10$$.$isSelected$() == $JSCompiler_alias_VOID$$ ? $JSCompiler_alias_FALSE$$ : $dvt$$10$$.$isSelected$(), size:$dvt$$10$$.$getSize$(), tooltip:$dvt$$10$$.$getShortDesc$()}
  };
  $DvtTreeAutomation$$.$_getNodeByIndex$ = function $$DvtTreeAutomation$$$$_getNodeByIndex$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $dvt$$10$$.length;$DvtSunburstEventManager$$++) {
      if($DvtSunburstDefaults$$ == $dvt$$10$$[$DvtSunburstEventManager$$].$getIndex$()) {
        return $dvt$$10$$[$DvtSunburstEventManager$$]
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$10$$.$Treemap$ = function $$dvt$$10$$$$Treemap$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    this.Init($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($dvt$$10$$.$Treemap$, $DvtTreeView$$);
  $dvt$$10$$.$Treemap$.$_BUFFER_SPACE$ = 7;
  $dvt$$10$$.$Treemap$.$_MIN_BUFFER_SPACE$ = 1;
  $dvt$$10$$.$Treemap$.$_BACKGROUND_FILL_COLOR$ = "#EBEFF5";
  $dvt$$10$$.$Treemap$.$_BACKGROUND_BORDER_COLOR$ = "#DBE0EA";
  $dvt$$10$$.$Treemap$.$_BACKGROUND_INLINE_DEFAULT$ = "background-color:" + $dvt$$10$$.$Treemap$.$_BACKGROUND_FILL_COLOR$ + ";border-color:" + $dvt$$10$$.$Treemap$.$_BACKGROUND_BORDER_COLOR$ + ";border-width:2px";
  $dvt$$10$$.$Treemap$.newInstance = function $$dvt$$10$$$$Treemap$$newInstance$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    return new $dvt$$10$$.$Treemap$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  };
  $dvt$$10$$.$Treemap$.prototype.Init = function $$dvt$$10$$$$Treemap$$$Init$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    $dvt$$10$$.$Treemap$.$superclass$.Init.call(this, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$);
    this.$Defaults$ = new $DvtTreemapDefaults$$;
    this.setId("treemap1000" + Math.floor(1E9 * Math.random()))
  };
  $dvt$$10$$.$Treemap$.prototype.$ApplyParsedProperties$ = function $$dvt$$10$$$$Treemap$$$$ApplyParsedProperties$$($DvtSunburstDefaults$$) {
    $dvt$$10$$.$Treemap$.$superclass$.$ApplyParsedProperties$.call(this, $DvtSunburstDefaults$$);
    $DvtSunburstDefaults$$ = this.$getOptions$();
    this.$_layout$ = "sliceAndDiceHorizontal" == $DvtSunburstDefaults$$.layout ? new $DvtTreemapLayoutSliceAndDice$$($JSCompiler_alias_TRUE$$) : "sliceAndDiceVertical" == $DvtSunburstDefaults$$.layout ? new $DvtTreemapLayoutSliceAndDice$$($JSCompiler_alias_FALSE$$) : new $DvtTreemapLayoutSquarifying$$;
    this.$_isolatedNodes$ = [];
    this.$_processInitialIsolate$($DvtSunburstDefaults$$.isolatedNode);
    "auto" == $DvtSunburstDefaults$$.animationOnDisplay && ($DvtSunburstDefaults$$.animationOnDisplay = "alphaFade")
  };
  $dvt$$10$$.$Treemap$.prototype.$Layout$ = function $$dvt$$10$$$$Treemap$$$$Layout$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = "jet" != this.$getOptions$()._environment ? $dvt$$10$$.$Treemap$.$_BUFFER_SPACE$ : $dvt$$10$$.$Treemap$.$_MIN_BUFFER_SPACE$, $DvtSunburstEventManager$$ = Math.max(Math.ceil($DvtSunburstEventManager$$ * Math.min($DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$) / 400), $dvt$$10$$.$Treemap$.$_MIN_BUFFER_SPACE$);
    $DvtSunburstDefaults$$.x += $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.y += $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$w$ -= 2 * $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$h$ -= 2 * $DvtSunburstEventManager$$;
    $DvtSunburstEventManager$$ = this.$_layout$.$getGapSize$(this, 1);
    $DvtSunburstDefaults$$.x += $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$w$ -= 2 * $DvtSunburstEventManager$$;
    this.$LayoutBreadcrumbs$($DvtSunburstDefaults$$);
    this.$LayoutLegend$($DvtSunburstDefaults$$);
    $DvtSunburstDefaults$$.x -= $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$w$ += 2 * $DvtSunburstEventManager$$;
    $DvtSunburstEventManager$$ = this.$_isolatedNodes$.length;
    if(0 < $DvtSunburstEventManager$$ && this.$_isolateRestoreLayout$) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$DvtSunburstEventManager$$ - 1], $DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y, $DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$, $JSCompiler_alias_TRUE$$)
    }else {
      this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y, $DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$, $JSCompiler_alias_FALSE$$);
      for(var $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$;$DvtSunburstNode$$++) {
        this.$_layout$.$layout$(this, this.$_isolatedNodes$[$DvtSunburstNode$$], $DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y, $DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$, $JSCompiler_alias_TRUE$$)
      }
    }
  };
  $dvt$$10$$.$Treemap$.prototype.$Render$ = function $$dvt$$10$$$$Treemap$$$$Render$$($DvtSunburstDefaults$$) {
    this.$RenderBackground$($DvtSunburstDefaults$$);
    this.$RenderBreadcrumbs$($DvtSunburstDefaults$$);
    this.$RenderLegend$($DvtSunburstDefaults$$);
    if(this.$HasValidData$()) {
      this.$_groupTextLayer$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtSunburstDefaults$$.$addChild$(this.$_groupTextLayer$);
      this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($DvtSunburstDefaults$$) : this.$_root$.$hasChildren$() ? (this.$_root$.$renderChildren$($DvtSunburstDefaults$$), this.$UpdateAriaNavigation$(this.$_root$)) : this.$_root$.$render$($DvtSunburstDefaults$$);
      this.$_isolatedLayer$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtSunburstDefaults$$.$addChild$(this.$_isolatedLayer$);
      this.$_selectedLayer$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtSunburstDefaults$$.$addChild$(this.$_selectedLayer$);
      $DvtSunburstDefaults$$.$addChild$(this.$_groupTextLayer$);
      this.$_hoverEffect$ = new $dvt$$10$$.$Polyline$(this.$getCtx$(), []);
      this.$_hoverEffect$.$setVisible$($JSCompiler_alias_FALSE$$);
      this.$_hoverEffect$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      this.$_hoverEffect$.$setPixelHinting$();
      $DvtSunburstDefaults$$.$addChild$(this.$_hoverEffect$);
      for($DvtSunburstDefaults$$ = 0;$DvtSunburstDefaults$$ < this.$_isolatedNodes$.length;$DvtSunburstDefaults$$++) {
        var $DvtSunburstEventManager$$ = this.$_isolatedNodes$[$DvtSunburstDefaults$$].$getDisplayable$();
        this.$_isolatedLayer$.$addChild$($DvtSunburstEventManager$$)
      }
    }else {
      this.$RenderEmptyText$($DvtSunburstDefaults$$)
    }
  };
  $dvt$$10$$.$Treemap$.prototype.$OnAnimationEnd$ = function $$dvt$$10$$$$Treemap$$$$OnAnimationEnd$$() {
    this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
    $dvt$$10$$.$Treemap$.$superclass$.$OnAnimationEnd$.call(this)
  };
  $dvt$$10$$.$Treemap$.prototype.$ReselectNodes$ = function $$dvt$$10$$$$Treemap$$$$ReselectNodes$$() {
    for(var $dvt$$10$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $DvtSunburstDefaults$$ = 0;$DvtSunburstDefaults$$ < $dvt$$10$$.length;$DvtSunburstDefaults$$++) {
      if(0 < this.$_isolatedNodes$.length) {
        var $DvtSunburstEventManager$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
        ($dvt$$10$$[$DvtSunburstDefaults$$] == $DvtSunburstEventManager$$ || $dvt$$10$$[$DvtSunburstDefaults$$].$isDescendantOf$($DvtSunburstEventManager$$)) && $dvt$$10$$[$DvtSunburstDefaults$$].$setSelected$($JSCompiler_alias_TRUE$$)
      }else {
        $dvt$$10$$[$DvtSunburstDefaults$$].$setSelected$($JSCompiler_alias_TRUE$$)
      }
    }
  };
  $dvt$$10$$.$Treemap$.prototype.$CreateKeyboardHandler$ = function $$dvt$$10$$$$Treemap$$$$CreateKeyboardHandler$$($dvt$$10$$) {
    return new $DvtTreemapKeyboardHandler$$($dvt$$10$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$CreateEventManager$ = function $$dvt$$10$$$$Treemap$$$$CreateEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    return new $DvtTreemapEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$GetInitialFocusedItem$ = function $$dvt$$10$$$$Treemap$$$$GetInitialFocusedItem$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$__getLastIsolatedNode$();
    return $DvtSunburstDefaults$$ ? this.$__getDefaultNavigable$($DvtTreeUtils$$.$getLeafNodes$($DvtSunburstDefaults$$)) : $dvt$$10$$ ? this.$__getDefaultNavigable$($DvtTreeUtils$$.$getLeafNodes$($dvt$$10$$)) : $JSCompiler_alias_NULL$$
  };
  $dvt$$10$$.$Treemap$.prototype.$__showHoverEffect$ = function $$dvt$$10$$$$Treemap$$$$__showHoverEffect$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.$_hoverEffect$.$setPoints$($dvt$$10$$);
    this.$_hoverEffect$.$setStroke$($DvtSunburstDefaults$$);
    this.$_hoverEffect$.$setVisible$($JSCompiler_alias_TRUE$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__hideHoverEffect$ = function $$dvt$$10$$$$Treemap$$$$__hideHoverEffect$$() {
    this.$_hoverEffect$.$setVisible$($JSCompiler_alias_FALSE$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__moveToSelectedLayer$ = function $$dvt$$10$$$$Treemap$$$$__moveToSelectedLayer$$($dvt$$10$$) {
    for(var $DvtSunburstDefaults$$ = 0, $DvtSunburstEventManager$$ = this.$_selectedLayer$.$getNumChildren$(), $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$;$DvtSunburstNode$$++) {
      var $DvtTreemapDefaults$$ = this.$_selectedLayer$.$getChildAt$($DvtSunburstNode$$);
      $dvt$$10$$.zIndex > $DvtTreemapDefaults$$.zIndex && ($DvtSunburstDefaults$$ = $DvtSunburstNode$$ + 1)
    }
    $DvtSunburstDefaults$$ < $DvtSunburstEventManager$$ ? this.$_selectedLayer$.$addChildAt$($dvt$$10$$, $DvtSunburstDefaults$$) : this.$_selectedLayer$.$addChild$($dvt$$10$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__getNodeUnderPoint$ = function $$dvt$$10$$$$Treemap$$$$__getNodeUnderPoint$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1].$getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$) : this.$_root$.$getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__isolate$ = function $$dvt$$10$$$$Treemap$$$$__isolate$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$getEventManager$().$getFocus$();
    $DvtSunburstEventManager$$ && $DvtSunburstEventManager$$.$hideKeyboardFocusEffect$();
    this.$_isolatedNodes$.push($DvtSunburstDefaults$$);
    this.$getOptions$().isolatedNode = $DvtSunburstDefaults$$.getId();
    this.dispatchEvent($dvt$$10$$.$EventFactory$.$newTreemapIsolateEvent$($DvtSunburstDefaults$$.getId()));
    this.$_isolateRestoreLayout$ = $JSCompiler_alias_TRUE$$;
    this.$Layout$(new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    this.$_isolateRestoreLayout$ = $JSCompiler_alias_FALSE$$;
    $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.$getDisplayable$();
    this.$_isolatedLayer$.$addChild$($DvtSunburstEventManager$$);
    this.$_renderIsolateRestore$($DvtSunburstDefaults$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__restore$ = function $$dvt$$10$$$$Treemap$$$$__restore$$() {
    var $DvtSunburstDefaults$$ = this.$_isolatedNodes$.pop();
    this.$getOptions$().isolatedNode = 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1].getId() : $JSCompiler_alias_NULL$$;
    var $DvtSunburstEventManager$$ = this.$getEventManager$().$getFocus$();
    $DvtSunburstEventManager$$ && $DvtSunburstEventManager$$.$hideKeyboardFocusEffect$();
    this.$__setNavigableIdToFocus$($DvtSunburstDefaults$$.getId());
    this.dispatchEvent($dvt$$10$$.$EventFactory$.$newTreemapIsolateEvent$());
    this.$_isolateRestoreLayout$ = $JSCompiler_alias_TRUE$$;
    this.$Layout$(new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    this.$_isolateRestoreLayout$ = $JSCompiler_alias_FALSE$$;
    this.$_renderIsolateRestore$($DvtSunburstDefaults$$)
  };
  $dvt$$10$$.$Treemap$.prototype.$__getLastIsolatedNode$ = function $$dvt$$10$$$$Treemap$$$$__getLastIsolatedNode$$() {
    return this.$_isolatedNodes$ && 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1] : $JSCompiler_alias_NULL$$
  };
  $dvt$$10$$.$Treemap$.prototype.$_renderIsolateRestore$ = function $$dvt$$10$$$$Treemap$$$$_renderIsolateRestore$$($DvtSunburstDefaults$$) {
    if("none" != this.$getOptions$().animationOnDataChange) {
      for(var $DvtSunburstEventManager$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$.length;$DvtSunburstNode$$++) {
        $DvtSunburstEventManager$$[$DvtSunburstNode$$].$setSelected$($JSCompiler_alias_FALSE$$)
      }
      $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.$getIsolateAnimation$();
      this.$Animation$ = new $dvt$$10$$.$ParallelPlayable$(this.$getCtx$(), $DvtSunburstDefaults$$);
      this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this);
      this.$_eventHandler$.$removeListeners$(this);
      this.$Animation$.play()
    }else {
      this.$render$($JSCompiler_alias_NULL$$, this.$Width$, this.$Height$, $JSCompiler_alias_TRUE$$)
    }
  };
  $dvt$$10$$.$Treemap$.prototype.$_processInitialIsolate$ = function $$dvt$$10$$$$Treemap$$$$_processInitialIsolate$$($dvt$$10$$) {
    if($dvt$$10$$ && this.$_root$) {
      var $DvtSunburstDefaults$$ = this.$_root$.$getDescendantNodes$();
      $DvtSunburstDefaults$$.push(this.$_root$);
      for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
        if($DvtSunburstDefaults$$[$DvtSunburstEventManager$$].getId() == $dvt$$10$$) {
          this.$_isolatedNodes$.push($DvtSunburstDefaults$$[$DvtSunburstEventManager$$]);
          break
        }
      }
    }
  };
  $dvt$$10$$.$Treemap$.prototype.$__getDefaultNavigable$ = function $$dvt$$10$$$$Treemap$$$$__getDefaultNavigable$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$_eventHandler$.$KeyboardHandler$;
    return $DvtSunburstDefaults$$ ? $DvtSunburstDefaults$$.$getDefaultNavigable$($dvt$$10$$) : $dvt$$10$$ && 0 < $dvt$$10$$.length ? $dvt$$10$$[0] : $JSCompiler_alias_NULL$$
  };
  $dvt$$10$$.$Treemap$.prototype.$GetComponentDescription$ = function $$dvt$$10$$$$Treemap$$$$GetComponentDescription$$() {
    return $dvt$$10$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "TREEMAP")
  };
  $dvt$$10$$.$Treemap$.prototype.$getBundlePrefix$ = function $$dvt$$10$$$$Treemap$$$$getBundlePrefix$$() {
    return $dvt$$10$$.$Bundle$.$TREEMAP_PREFIX$
  };
  $dvt$$10$$.$Treemap$.prototype.$CreateNode$ = function $$dvt$$10$$$$Treemap$$$$CreateNode$$($dvt$$10$$) {
    return new $DvtTreemapNode$$(this, $dvt$$10$$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapNode$$, $DvtTreeNode$$);
  $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ = "header";
  $DvtTreemapNode$$.$TEXT_STYLE_NODE$ = "node";
  $DvtTreemapNode$$.$TEXT_STYLE_OFF$ = "off";
  $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$ = 4;
  $DvtTreemapNode$$.$TEXT_BUFFER_VERT$ = 2;
  $DvtTreemapNode$$.$MIN_TEXT_BUFFER$ = 2;
  $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$ = 1;
  $DvtTreemapNode$$.$_ANIMATION_ISOLATE_DURATION$ = 0.3;
  $DvtTreemapNode$$.$_MIN_TITLE_BAR_HEIGHT$ = 15;
  $DvtTreemapNode$$.$_MIN_TITLE_BAR_HEIGHT_ISOLATE$ = 15;
  $DvtTreemapNode$$.$DEFAULT_HEADER_BORDER_WIDTH$ = 1;
  $DvtTreemapNode$$.$DEFAULT_HEADER_WITH_NODE_COLOR_ALPHA$ = 0.5;
  $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ = 12;
  $DvtTreemapNode$$.$_ISOLATE_GAP_SIZE$ = 1;
  $DvtTreemapNode$$.$_ISOLATE_TOUCH_BUFFER$ = 2;
  $DvtTreemapNode$$.$DEFAULT_NODE_TOP_BORDER_COLOR$ = "#FFFFFF";
  $DvtTreemapNode$$.$DEFAULT_NODE_BOTTOM_BORDER_COLOR$ = "#000000";
  $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_WIDTH$ = 1;
  $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_OPACITY$ = 0.3;
  $DvtTreemapNode$$.$DEFAULT_NODE_PATTERN_BORDER_OPACITY$ = 0.15;
  $DvtTreemapNode$$.$MIN_SIZE_FOR_BORDER$ = 2 * $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_WIDTH$;
  $DvtTreemapNode$$.$GROUP_HOVER_INNER_OPACITY$ = 0.8;
  $DvtTreemapNode$$.$GROUP_HOVER_INNER_WIDTH$ = 3;
  $DvtTreemapNode$$.$NODE_HOVER_OPACITY$ = 1;
  $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$ = 2;
  $DvtTreemapNode$$.prototype.$render$ = function $$DvtTreemapNode$$$$$render$$($DvtSunburstDefaults$$) {
    if(this.$_hasLayout$) {
      this.$_shape$ = this.$_createShapeNode$();
      $DvtSunburstDefaults$$.$addChild$(this.$_shape$);
      var $DvtSunburstEventManager$$;
      this.$hasChildren$() ? (this.$_childNodeGroup$ = new $dvt$$10$$.$Container$(this.$_view$.$getCtx$()), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $DvtSunburstEventManager$$ = this.$GetTemplate$();
      if($DvtSunburstEventManager$$) {
        var $DvtSunburstNode$$ = this.$GetElAttributes$(), $DvtTreemapDefaults$$ = this.$_view$.$_afContext$;
        $DvtTreemapDefaults$$.$_elContext$ = $DvtSunburstNode$$;
        var $DvtSunburstNode$$ = $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_WIDTH$ + $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapEventManager$$ = $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$, $DvtTreemapKeyboardHandler$$ = $DvtTreemapNode$$.$TEXT_BUFFER_VERT$, $DvtTreemapLayoutSliceAndDice$$ = this.$_width$ - 2 * $DvtTreemapEventManager$$ - $DvtSunburstNode$$, $DvtTreemapLayoutSquarifying$$ = this.$_height$ - 2 * $DvtTreemapKeyboardHandler$$ - $DvtSunburstNode$$;
        0 < $DvtTreemapLayoutSliceAndDice$$ && 0 < $DvtTreemapLayoutSquarifying$$ && ($JSCompiler_StaticMethods_setAvailableWidth$$($DvtTreemapDefaults$$, $DvtTreemapLayoutSliceAndDice$$), $JSCompiler_StaticMethods_setAvailableHeight$$($DvtTreemapDefaults$$, $DvtTreemapLayoutSquarifying$$), $DvtTreemapDefaults$$.$setFontSize$(this.$GetTextSize$()), this.$_contentRoot$ = $DvtSunburstEventManager$$ = $DvtAfComponentFactory$$.$parseAndLayout$($DvtTreemapDefaults$$, $DvtSunburstEventManager$$, this.$_shape$), 
        $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstDefaults$$.$getCtx$()) ? ($DvtSunburstDefaults$$ = $DvtSunburstEventManager$$.$getDimensions$(), $DvtSunburstDefaults$$ = this.$_x$ + this.$_width$ - $DvtTreemapEventManager$$ - 0.5 * $DvtSunburstNode$$ - $DvtSunburstDefaults$$.$w$) : $DvtSunburstDefaults$$ = this.$_x$ + $DvtTreemapEventManager$$ + 0.5 * $DvtSunburstNode$$, $DvtSunburstEventManager$$.$setTranslate$($DvtSunburstDefaults$$, this.$_y$ + $DvtTreemapKeyboardHandler$$ + 0.5 * $DvtSunburstNode$$))
      }else {
        this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != $JSCompiler_alias_NULL$$ && (this.$_pattern$ && this.$_textStyle$ != $DvtTreemapNode$$.$TEXT_STYLE_HEADER$) && ($DvtSunburstNode$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), $DvtSunburstNode$$.x, $DvtSunburstNode$$.y, $DvtSunburstNode$$.$w$, $DvtSunburstNode$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), 
        this.$_shape$.$addChild$(this.$_textBackground$), this.$_addChildText$(this.$_text$))
      }
      this.$hasChildren$() ? this.$_shape$.$setAriaRole$("group") : this.$_shape$.$setAriaRole$("img");
      this.$UpdateAriaLabel$()
    }
  };
  $DvtTreemapNode$$.prototype.$setSelected$ = function $$DvtTreemapNode$$$$$setSelected$$($DvtSunburstDefaults$$) {
    $DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $DvtSunburstDefaults$$);
    if(this.$_shape$) {
      $DvtSunburstDefaults$$ = this.$_view$.$getOptions$().nodeDefaults;
      var $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.header;
      if(this.$isSelected$()) {
        var $DvtSunburstNode$$ = this.$_x$, $DvtTreemapDefaults$$ = this.$_y$ + $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapEventManager$$ = this.$_width$ - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapKeyboardHandler$$ = this.$_height$ - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$;
        $dvt$$10$$.$Agent$.$isPlatformWebkit$() && ($DvtTreemapDefaults$$ -= $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$);
        this.$_removeChildShape$(this.$_selectionOuter$);
        this.$_removeChildShape$(this.$_selectionInner$);
        this.$_selectionInner$ = this.$_selectionOuter$ = $JSCompiler_alias_NULL$$;
        this.$_selectionOuter$ = new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$);
        this.$_selectionOuter$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
        this.$_selectionOuter$.$setFill$($JSCompiler_alias_NULL$$);
        this.$_selectionOuter$.$setPixelHinting$();
        this.$_shape$.$addChild$(this.$_selectionOuter$);
        this.$_selectionInner$ = new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), $DvtSunburstNode$$ + 1, $DvtTreemapDefaults$$ + 1, $DvtTreemapEventManager$$ - 2, $DvtTreemapKeyboardHandler$$ - 2);
        this.$_selectionInner$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
        this.$_selectionInner$.$setFill$($JSCompiler_alias_NULL$$);
        this.$_selectionInner$.$setPixelHinting$();
        this.$_shape$.$addChild$(this.$_selectionInner$);
        this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($DvtSunburstEventManager$$.hoverBackgroundColor) : (this.$_innerShape$.$setSolidFill$($DvtSunburstEventManager$$.selectedBackgroundColor), this.$_text$ && this.$ApplyHeaderTextStyle$(this.$_text$, "_selectedLabelStyle")), this.$_selectionOuter$.$setSolidStroke$($DvtSunburstEventManager$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($DvtSunburstEventManager$$.selectedInnerColor), 
        $dvt$$10$$.$Agent$.$isTouchDevice$() && (this.$_isolateButton$ = this.$_createIsolateRestoreButton$(this.$_shape$))) : (this.$_selectionOuter$.$setSolidStroke$($DvtSunburstDefaults$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($DvtSunburstDefaults$$.selectedInnerColor), !$dvt$$10$$.$Agent$.$isBrowserSafari$() && !$dvt$$10$$.$Agent$.$isPlatformGecko$() && this.$_shape$.$addDrawEffect$($DvtTreeNode$$.$__NODE_SELECTED_SHADOW$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
      }else {
        this.$_removeChildShape$(this.$_selectionInner$), this.$_selectionInner$ = $JSCompiler_alias_NULL$$, $dvt$$10$$.$Agent$.$isTouchDevice$() && this.$_removeIsolateRestoreButton$(), this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($DvtSunburstEventManager$$.hoverBackgroundColor) : (this.$ApplyHeaderStyle$(this.$_shape$, this.$_innerShape$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? 
        this.$ApplyHeaderTextStyle$(this.$_text$, "_drillableLabelStyle") : this.$ApplyHeaderTextStyle$(this.$_text$, "labelStyle"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$($DvtSunburstEventManager$$.hoverOuterColor) : (this.$_removeChildShape$(this.$_selectionOuter$), this.$_selectionOuter$ = $JSCompiler_alias_NULL$$))) : (this.$_shape$.$removeAllDrawEffects$(), this.$_selectionOuter$ && (this.$_removeChildShape$(this.$_selectionOuter$), 
        this.$_selectionOuter$ = $JSCompiler_alias_NULL$$), ($DvtSunburstDefaults$$ = this.$_parent$) && $DvtSunburstDefaults$$.$_childNodeGroup$ && $DvtSunburstDefaults$$.$_childNodeGroup$.$addChild$(this.$_shape$))
      }
    }
  };
  $DvtTreemapNode$$.prototype.$showHoverEffect$ = function $$DvtTreemapNode$$$$$showHoverEffect$$() {
    if(this.$_shape$ && this.$_hasLayout$) {
      var $DvtSunburstDefaults$$ = this.$_view$.$getOptions$().nodeDefaults, $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.header, $DvtSunburstNode$$ = this.$_view$.$__getLastIsolatedNode$();
      if(!($DvtSunburstNode$$ != $JSCompiler_alias_NULL$$ && $DvtSunburstNode$$ != this && !this.$isDescendantOf$($DvtSunburstNode$$))) {
        var $DvtSunburstNode$$ = [], $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$;
        this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ ? (this.$_innerShape$.$setSolidFill$($DvtSunburstEventManager$$.hoverBackgroundColor), this.$_selectionOuter$ || ($DvtSunburstDefaults$$ = this.$_x$, $DvtTreemapDefaults$$ = this.$_y$ + $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapEventManager$$ = this.$_width$ - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapKeyboardHandler$$ = this.$_height$ - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $dvt$$10$$.$Agent$.$isPlatformWebkit$() && 
        ($DvtTreemapDefaults$$ -= $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$), this.$_selectionOuter$ = new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), $DvtSunburstDefaults$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$), this.$_selectionOuter$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$($JSCompiler_alias_NULL$$), this.$_selectionOuter$.$setPixelHinting$(), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$_selectionOuter$.$setSolidStroke$(this.$isSelected$() ? 
        $DvtSunburstEventManager$$.selectedOuterColor : $DvtSunburstEventManager$$.hoverOuterColor), $DvtTreemapDefaults$$ = this.$_x$ + $DvtTreemapNode$$.$GROUP_HOVER_INNER_WIDTH$ / 2 + $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapKeyboardHandler$$ = this.$_x$ + this.$_width$ - $DvtTreemapNode$$.$GROUP_HOVER_INNER_WIDTH$ / 2 - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapEventManager$$ = this.$_y$ + this.$_titleBarHeight$, $DvtTreemapLayoutSliceAndDice$$ = this.$_y$ + this.$_height$ - 
        $DvtTreemapNode$$.$GROUP_HOVER_INNER_WIDTH$ / 2 - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtSunburstNode$$.push($DvtTreemapKeyboardHandler$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapDefaults$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$), $DvtSunburstEventManager$$ = new $dvt$$10$$.$SolidStroke$($DvtSunburstEventManager$$.hoverInnerColor, $DvtTreemapNode$$.$GROUP_HOVER_INNER_OPACITY$, $DvtTreemapNode$$.$GROUP_HOVER_INNER_WIDTH$), 
        this.$_text$ && (this.$isDrillReplaceEnabled$() ? this.$ApplyHeaderTextStyle$(this.$_text$, "_drillableHoverLabelStyle") : this.$ApplyHeaderTextStyle$(this.$_text$, "_hoverLabelStyle"))) : ($DvtTreemapDefaults$$ = this.$_x$ + $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$ / 2, $DvtTreemapKeyboardHandler$$ = this.$_x$ + this.$_width$ - $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$ / 2, $DvtTreemapEventManager$$ = this.$_y$ + $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$ / 2, $DvtTreemapLayoutSliceAndDice$$ = 
        this.$_y$ + this.$_height$ - $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$ / 2, $DvtSunburstNode$$.push(this.$_x$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapDefaults$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$), $DvtSunburstEventManager$$ = new $dvt$$10$$.$SolidStroke$($DvtSunburstDefaults$$.hoverColor, $DvtTreemapNode$$.$NODE_HOVER_OPACITY$, 
        $DvtTreemapNode$$.$NODE_SELECTION_WIDTH$));
        this.$_view$.$__showHoverEffect$($DvtSunburstNode$$, $DvtSunburstEventManager$$)
      }
    }
  };
  $DvtTreemapNode$$.prototype.$hideHoverEffect$ = function $$DvtTreemapNode$$$$$hideHoverEffect$$() {
    if(this.$_shape$ && this.$_hasLayout$) {
      var $dvt$$10$$ = this.$_view$.$getOptions$().nodeDefaults.header;
      this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ && (this.$isSelected$() ? (this.$_innerShape$.$setSolidFill$($dvt$$10$$.selectedBackgroundColor), this.$_selectionOuter$.$setSolidStroke$($dvt$$10$$.selectedOuterColor), this.$_text$ && (this.$isDrillReplaceEnabled$() ? this.$ApplyHeaderTextStyle$(this.$_text$, "_drillableSelectedLabelStyle") : this.$ApplyHeaderTextStyle$(this.$_text$, "_selectedLabelStyle"))) : (this.$ApplyHeaderStyle$(this.$_shape$, this.$_innerShape$), this.$_selectionOuter$ && 
      (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = $JSCompiler_alias_NULL$$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? this.$ApplyHeaderTextStyle$(this.$_text$, "_drillableLabelStyle") : this.$ApplyHeaderTextStyle$(this.$_text$, "labelStyle"))));
      this.$_view$.$__hideHoverEffect$()
    }
  };
  $DvtTreemapNode$$.prototype.$highlight$ = function $$DvtTreemapNode$$$$$highlight$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.$hasChildren$() ? (this.$_text$ && this.$_text$.$setAlpha$($DvtSunburstDefaults$$), this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ && (this.$_bHeaderUseNodeColor$ && this.$_innerShape$) && this.$_innerShape$.$setAlpha$($DvtSunburstDefaults$$)) : $DvtTreemapNode$$.$superclass$.$highlight$.call(this, $dvt$$10$$, $DvtSunburstDefaults$$)
  };
  $DvtTreemapNode$$.prototype.$isIsolateEnabled$ = function $$DvtTreemapNode$$$$$isIsolateEnabled$$() {
    return"off" != this.$_isolate$ && this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$
  };
  $DvtTreemapNode$$.prototype.$getPopupBounds$ = function $$DvtTreemapNode$$$$$getPopupBounds$$($DvtSunburstDefaults$$) {
    return!$DvtSunburstDefaults$$ || !$DvtSunburstDefaults$$.$getAlign$() ? $DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $DvtSunburstDefaults$$) : new $dvt$$10$$.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  };
  $DvtTreemapNode$$.prototype.$getNextNavigable$ = function $$DvtTreemapNode$$$$$getNextNavigable$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$;
    if($DvtSunburstDefaults$$.type == $dvt$$10$$.$MouseEvent$.$CLICK$) {
      return $DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $DvtSunburstDefaults$$)
    }
    $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.keyCode;
    if($DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$SPACE$ && $DvtSunburstDefaults$$.ctrlKey) {
      return this
    }
    if($DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$UP_ARROW$ && $DvtSunburstDefaults$$.altKey || $DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$CLOSE_BRACKET$) {
      ($DvtSunburstEventManager$$ = this.$_parent$) && $DvtSunburstEventManager$$.getId() != this.$_view$.$_root$.getId() ? ($DvtSunburstDefaults$$ = $DvtSunburstEventManager$$, $DvtSunburstEventManager$$.$MarkAsLastVisitedChild$()) : $DvtSunburstDefaults$$ = this
    }else {
      if($DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$DOWN_ARROW$ && $DvtSunburstDefaults$$.altKey || $DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$OPEN_BRACKET$) {
        $DvtSunburstDefaults$$ = ($DvtSunburstDefaults$$ = this.$_lastVisitedChild$) ? $DvtSunburstDefaults$$ : this.$hasChildren$() ? this.$_view$.$__getDefaultNavigable$(this.$getChildNodes$()) : this
      }else {
        var $DvtSunburstNode$$ = this.$_view$.$__getLastIsolatedNode$(), $DvtTreemapDefaults$$ = 0;
        if($DvtSunburstNode$$) {
          if(this == $DvtSunburstNode$$) {
            $DvtTreemapDefaults$$ = 0
          }else {
            $DvtSunburstEventManager$$ = this.$_parent$;
            for($DvtTreemapDefaults$$ = 1;$DvtSunburstNode$$ != $DvtSunburstEventManager$$;) {
              $DvtTreemapDefaults$$++, $DvtSunburstEventManager$$ = $DvtSunburstEventManager$$.$_parent$
            }
          }
        }else {
          for($DvtSunburstNode$$ = this;$DvtSunburstNode$$.$_parent$;) {
            $DvtSunburstNode$$ = $DvtSunburstNode$$.$_parent$
          }
          $DvtTreemapDefaults$$ = this.$GetDepth$()
        }
        $DvtSunburstEventManager$$ = this.$GetNodesAtDepth$($DvtSunburstNode$$, $DvtTreemapDefaults$$);
        $DvtSunburstDefaults$$ = $dvt$$10$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
      }
    }
    $DvtSunburstDefaults$$.$MarkAsLastVisitedChild$();
    return $DvtSunburstDefaults$$
  };
  $DvtTreemapNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtTreemapNode$$$$$getKeyboardBoundingBox$$() {
    return new $dvt$$10$$.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  };
  $DvtTreemapNode$$.prototype.$getTargetElem$ = function $$DvtTreemapNode$$$$$getTargetElem$$() {
    return this.$_shape$ ? this.$_shape$.$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtTreemapNode$$.prototype.$setZIndex$ = $JSCompiler_set$$("$_zIndex$");
  $DvtTreemapNode$$.prototype.$setLayoutParams$ = function $$DvtTreemapNode$$$$$setLayoutParams$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    if(!(0 >= $DvtSunburstNode$$ || 0 >= $DvtTreemapDefaults$$)) {
      this.$_hasLayout$ = $JSCompiler_alias_TRUE$$;
      this.$_oldState$ = this.$GetAnimationParams$();
      this.$_x$ = $DvtSunburstDefaults$$;
      this.$_y$ = $DvtSunburstEventManager$$;
      this.$_width$ = $DvtSunburstNode$$ ? $DvtSunburstNode$$ : 0;
      this.$_height$ = $DvtTreemapDefaults$$ ? $DvtTreemapDefaults$$ : 0;
      this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
      this.$_textStr$ || (this.$_textStyle$ = $DvtTreemapNode$$.$TEXT_STYLE_OFF$);
      if(this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$) {
        this.$_titleBarHeight$ = $DvtTreemapNode$$.$_MIN_TITLE_BAR_HEIGHT$;
        $DvtSunburstDefaults$$ = new $dvt$$10$$.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$);
        $DvtSunburstDefaults$$.$setFontSize$(this.$GetTextSize$());
        this.$ApplyHeaderTextStyle$($DvtSunburstDefaults$$, "labelStyle");
        $DvtSunburstDefaults$$ = $dvt$$10$$.$TextUtils$.$guessTextDimensions$($DvtSunburstDefaults$$).$h$;
        this.$_titleBarHeight$ = Math.max(this.$_titleBarHeight$, $DvtSunburstDefaults$$);
        this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = Math.max(this.$_titleBarHeight$, $DvtTreemapNode$$.$_MIN_TITLE_BAR_HEIGHT_ISOLATE$));
        $DvtSunburstDefaults$$ = this.$_x$;
        $DvtSunburstEventManager$$ = this.$_y$ + this.$_titleBarHeight$;
        $DvtSunburstNode$$ = this.$_width$;
        $DvtTreemapDefaults$$ = this.$_height$ - this.$_titleBarHeight$;
        if(0 <= $DvtSunburstNode$$ && 0 <= $DvtTreemapDefaults$$) {
          return new $dvt$$10$$.$Rectangle$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$)
        }
        this.$_textStyle$ = $JSCompiler_alias_NULL$$
      }
      return new $dvt$$10$$.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
    }
  };
  $DvtTreemapNode$$.prototype.$getNodeUnderPoint$ = function $$DvtTreemapNode$$$$$getNodeUnderPoint$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if(this.contains($dvt$$10$$, $DvtSunburstDefaults$$) || !this.$_hasLayout$) {
      for(var $DvtSunburstEventManager$$ = this.$getChildNodes$(), $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$.length;$DvtSunburstNode$$++) {
        if($DvtSunburstEventManager$$[$DvtSunburstNode$$].contains($dvt$$10$$, $DvtSunburstDefaults$$)) {
          return $DvtSunburstEventManager$$[$DvtSunburstNode$$].$getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$)
        }
      }
      if(this.$_hasLayout$) {
        return this
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtTreemapNode$$.prototype.contains = function $$DvtTreemapNode$$$$contains$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return $dvt$$10$$ >= this.$_x$ && $dvt$$10$$ <= this.$_x$ + this.$_width$ && $DvtSunburstDefaults$$ >= this.$_y$ && $DvtSunburstDefaults$$ <= this.$_y$ + this.$_height$
  };
  $DvtTreemapNode$$.prototype.$GetAnimationParams$ = function $$DvtTreemapNode$$$$$GetAnimationParams$$() {
    var $DvtSunburstDefaults$$ = $dvt$$10$$.$ColorUtils$.$getRed$(this.$_color$), $DvtSunburstEventManager$$ = $dvt$$10$$.$ColorUtils$.$getGreen$(this.$_color$), $DvtSunburstNode$$ = $dvt$$10$$.$ColorUtils$.$getBlue$(this.$_color$);
    return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, this.$hasChildren$() ? 0 : Math.random()]
  };
  $DvtTreemapNode$$.prototype.$SetAnimationParams$ = function $$DvtTreemapNode$$$$$SetAnimationParams$$($DvtSunburstDefaults$$) {
    this.$setLayoutParams$($DvtSunburstDefaults$$[0], $DvtSunburstDefaults$$[1], $DvtSunburstDefaults$$[2], $DvtSunburstDefaults$$[3]);
    this.$_color$ = $dvt$$10$$.$ColorUtils$.$makeRGB$(Math.round($DvtSunburstDefaults$$[4]), Math.round($DvtSunburstDefaults$$[5]), Math.round($DvtSunburstDefaults$$[6]));
    this.$_updateShapes$()
  };
  $DvtTreemapNode$$.prototype.$getIsolateAnimation$ = function $$DvtTreemapNode$$$$$getIsolateAnimation$$() {
    for(var $dvt$$10$$ = [this.$_getIsolateAnimation$()], $DvtSunburstDefaults$$ = this.$getDescendantNodes$(), $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
      $dvt$$10$$.push($DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$_getIsolateAnimation$())
    }
    return $dvt$$10$$
  };
  $DvtTreemapNode$$.prototype.$_getIsolateAnimation$ = function $$DvtTreemapNode$$$$$_getIsolateAnimation$$() {
    if(this.$_oldState$) {
      var $DvtSunburstDefaults$$ = new $dvt$$10$$.$CustomAnimation$(this.$_view$.$getCtx$(), this, $DvtTreemapNode$$.$_ANIMATION_ISOLATE_DURATION$);
      $DvtSunburstDefaults$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
      this.$SetAnimationParams$(this.$_oldState$);
      return $DvtSunburstDefaults$$
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return 0 == this.$GetDepth$() || $DvtSunburstDefaults$$.$_hasLayout$ && 0 < $DvtSunburstDefaults$$.$_width$ && 0 < $DvtSunburstDefaults$$.$_height$ ? $DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $dvt$$10$$, $DvtSunburstDefaults$$) : this.$animateInsert$($dvt$$10$$)
  };
  $DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getCtx$(), $DvtSunburstEventManager$$;
    if(this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$) {
      $DvtSunburstEventManager$$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$ApplyHeaderStyle$($DvtSunburstEventManager$$, this.$_innerShape$), this.$_innerShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $DvtSunburstEventManager$$.$addChild$(this.$_innerShape$), this.$_bIsolated$ && (this.$_isolateButton$ = 
      this.$_createIsolateRestoreButton$($DvtSunburstEventManager$$))
    }else {
      var $DvtSunburstNode$$ = this.$GetFill$();
      $DvtSunburstEventManager$$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
      if((1E3 > this.$_view$.$_nodeCount$ || !$dvt$$10$$.$Agent$.$isTouchDevice$()) && this.$_width$ >= $DvtTreemapNode$$.$MIN_SIZE_FOR_BORDER$ && this.$_height$ >= $DvtTreemapNode$$.$MIN_SIZE_FOR_BORDER$) {
        new $dvt$$10$$.$SolidStroke$($DvtTreemapNode$$.$DEFAULT_NODE_TOP_BORDER_COLOR$);
        new $dvt$$10$$.$SolidStroke$($DvtTreemapNode$$.$DEFAULT_NODE_BOTTOM_BORDER_COLOR$, $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_OPACITY$);
        this.$_pattern$ && new $dvt$$10$$.$SolidStroke$(this.$_color$, $DvtTreemapNode$$.$DEFAULT_NODE_PATTERN_BORDER_OPACITY$);
        var $DvtTreemapDefaults$$ = this.$getColor$(), $DvtTreemapEventManager$$ = $dvt$$10$$.$ColorUtils$.$interpolateColor$($DvtTreemapNode$$.$DEFAULT_NODE_TOP_BORDER_COLOR$, $DvtTreemapDefaults$$, 1 - $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_OPACITY$), $DvtTreemapDefaults$$ = $dvt$$10$$.$ColorUtils$.$interpolateColor$($DvtTreemapNode$$.$DEFAULT_NODE_BOTTOM_BORDER_COLOR$, $DvtTreemapDefaults$$, 1 - $DvtTreemapNode$$.$DEFAULT_NODE_BORDER_OPACITY$), $DvtTreemapKeyboardHandler$$ = Math.min(this.$_width$, 
        this.$_height$);
        4 <= $DvtTreemapKeyboardHandler$$ ? ($DvtSunburstEventManager$$.$setSolidFill$($DvtTreemapDefaults$$), this.$_topLeftShape$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($DvtTreemapEventManager$$), this.$_topLeftShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $DvtSunburstEventManager$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$ + 
        1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($DvtSunburstNode$$), this.$_fillShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $DvtSunburstEventManager$$.$addChild$(this.$_fillShape$)) : 2 <= $DvtTreemapKeyboardHandler$$ ? ($DvtSunburstEventManager$$.$setSolidFill$($DvtTreemapDefaults$$), this.$_fillShape$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($DvtSunburstNode$$), 
        this.$_fillShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $DvtSunburstEventManager$$.$addChild$(this.$_fillShape$)) : $DvtSunburstEventManager$$.$setFill$($DvtSunburstNode$$)
      }else {
        $DvtSunburstEventManager$$.$setFill$($DvtSunburstNode$$)
      }
    }
    this.$_view$.$getEventManager$().$associate$($DvtSunburstEventManager$$, this);
    this.$isSelectable$() ? $DvtSunburstEventManager$$.$setSelectable$($JSCompiler_alias_TRUE$$) : $DvtSunburstEventManager$$.setCursor("default");
    $DvtSunburstEventManager$$.zIndex = this.$_zIndex$;
    return $DvtSunburstEventManager$$
  };
  $DvtTreemapNode$$.prototype.$_createIsolateRestoreButton$ = function $$DvtTreemapNode$$$$$_createIsolateRestoreButton$$($DvtSunburstDefaults$$) {
    if(this.$_textStyle$ != $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ || !this.$isIsolateEnabled$()) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstEventManager$$ = $JSCompiler_alias_NULL$$, $DvtSunburstNode$$ = this.$_x$, $DvtTreemapDefaults$$ = this.$_x$ + this.$_width$ - $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapEventManager$$ = this.$_y$ + $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$, $DvtTreemapKeyboardHandler$$ = this.$_y$ + this.$_titleBarHeight$;
    $DvtTreemapDefaults$$ - $DvtSunburstNode$$ - 2 * $DvtTreemapNode$$.$_ISOLATE_GAP_SIZE$ > $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ && ($DvtSunburstEventManager$$ = this.$_bIsolated$ ? this.$_getRestoreButton$() : this.$_getIsolateButton$(), $DvtSunburstNode$$ = $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstDefaults$$.$getCtx$()) ? $DvtSunburstNode$$ + $DvtTreemapNode$$.$_ISOLATE_GAP_SIZE$ : $DvtTreemapDefaults$$ - $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ - $DvtTreemapNode$$.$_ISOLATE_GAP_SIZE$, $DvtSunburstEventManager$$.$setTranslate$($DvtSunburstNode$$, 
    ($DvtTreemapKeyboardHandler$$ + $DvtTreemapEventManager$$ - $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$) / 2), $DvtSunburstDefaults$$.$addChild$($DvtSunburstEventManager$$), $dvt$$10$$.$Agent$.$isTouchDevice$() && ($DvtSunburstDefaults$$ = new $dvt$$10$$.$Rect$($DvtSunburstDefaults$$.$getCtx$(), -$DvtTreemapNode$$.$_ISOLATE_TOUCH_BUFFER$, -$DvtTreemapNode$$.$_ISOLATE_TOUCH_BUFFER$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ + 2 * $DvtTreemapNode$$.$_ISOLATE_TOUCH_BUFFER$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ + 
    2 * $DvtTreemapNode$$.$_ISOLATE_TOUCH_BUFFER$), $DvtSunburstDefaults$$.$setInvisibleFill$(), $DvtSunburstEventManager$$.$addChild$($DvtSunburstDefaults$$)), $dvt$$10$$.$CSSStyle$.$afterSkinAlta$(this.$_view$.$getOptions$().skin) ? this.$_view$.$getEventManager$().$associate$($DvtSunburstEventManager$$, this) : ($DvtSunburstDefaults$$ = $dvt$$10$$.$Bundle$.$getTranslation$(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", $dvt$$10$$.$Bundle$.$TREEMAP_PREFIX$, 
    this.$_bIsolated$ ? "RESTORE" : "ISOLATE"), this.$_view$.$getEventManager$().$associate$($DvtSunburstEventManager$$, new $DvtTreePeer$$(this, this.getId(), $DvtSunburstDefaults$$))));
    return $DvtSunburstEventManager$$
  };
  $DvtTreemapNode$$.prototype.$_removeIsolateRestoreButton$ = function $$DvtTreemapNode$$$$$_removeIsolateRestoreButton$$() {
    this.$_isolateButton$ && (this.$_removeChildShape$(this.$_isolateButton$), this.$_isolateButton$ = $JSCompiler_alias_NULL$$)
  };
  $DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstDefaults$$.$getCtx$());
    if(!this.$_textStr$ || !$DvtSunburstDefaults$$ || !this.$_textStyle$ || this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_OFF$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstNode$$ = this.$_height$;
    if(this.$GetTextSize$() > $DvtSunburstNode$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtTreemapDefaults$$ = this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_NODE$ ? this.$_labelHalign$ : this.$_headerHalign$;
    $DvtSunburstEventManager$$ && ("start" == $DvtTreemapDefaults$$ ? $DvtTreemapDefaults$$ = "end" : "end" == $DvtTreemapDefaults$$ && ($DvtTreemapDefaults$$ = "start"));
    var $DvtTreemapEventManager$$ = this.$_width$ - ($DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$ + $DvtTreemapNode$$.$MIN_TEXT_BUFFER$), $DvtTreemapKeyboardHandler$$ = 0;
    this.$isIsolateEnabled$() && ($DvtTreemapKeyboardHandler$$ = $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$ + $DvtTreemapNode$$.$_ISOLATE_GAP_SIZE$, $DvtTreemapEventManager$$ = "center" == $DvtTreemapDefaults$$ ? $DvtTreemapEventManager$$ - 2 * $DvtTreemapKeyboardHandler$$ : $DvtTreemapEventManager$$ - $DvtTreemapKeyboardHandler$$);
    if(0 >= $DvtTreemapEventManager$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtTreemapLayoutSliceAndDice$$ = new $dvt$$10$$.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$);
    $DvtTreemapLayoutSliceAndDice$$.$setFontSize$(this.$GetTextSize$());
    "start" == $DvtTreemapDefaults$$ ? ($DvtSunburstEventManager$$ ? $DvtTreemapLayoutSliceAndDice$$.$setX$(this.$_x$ + $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$ + $DvtTreemapKeyboardHandler$$) : $DvtTreemapLayoutSliceAndDice$$.$setX$(this.$_x$ + $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$), $DvtTreemapLayoutSliceAndDice$$.$alignLeft$()) : "center" == $DvtTreemapDefaults$$ ? ($DvtTreemapLayoutSliceAndDice$$.$setX$(this.$_x$ + this.$_width$ / 2), $DvtTreemapLayoutSliceAndDice$$.$alignCenter$()) : "end" == $DvtTreemapDefaults$$ && 
    ($DvtSunburstEventManager$$ ? $DvtTreemapLayoutSliceAndDice$$.$setX$(this.$_x$ + this.$_width$ - $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$) : $DvtTreemapLayoutSliceAndDice$$.$setX$(this.$_x$ + this.$_width$ - $DvtTreemapNode$$.$TEXT_BUFFER_HORIZ$ - $DvtTreemapKeyboardHandler$$), $DvtTreemapLayoutSliceAndDice$$.$alignRight$());
    this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_NODE$ ? (this.$ApplyLabelTextStyle$($DvtTreemapLayoutSliceAndDice$$), $DvtSunburstNode$$ = this.$_height$ - 2 * $DvtTreemapNode$$.$TEXT_BUFFER_VERT$, $DvtSunburstEventManager$$ = $dvt$$10$$.$TextUtils$.$getTextHeight$($DvtTreemapLayoutSliceAndDice$$), "top" == this.$_labelValign$ ? $DvtTreemapLayoutSliceAndDice$$.$setY$(this.$_y$ + $DvtTreemapNode$$.$TEXT_BUFFER_VERT$) : "center" == this.$_labelValign$ ? $DvtTreemapLayoutSliceAndDice$$.$setY$(this.$_y$ + 
    this.$_height$ / 2 - $DvtSunburstEventManager$$ / 2) : "bottom" == this.$_labelValign$ && $DvtTreemapLayoutSliceAndDice$$.$setY$(this.$_y$ + this.$_height$ - $DvtTreemapNode$$.$TEXT_BUFFER_VERT$ - $DvtSunburstEventManager$$)) : this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ && ($DvtSunburstEventManager$$ = $dvt$$10$$.$Agent$.$isPlatformWebkit$() ? $DvtTreemapNode$$.$_LINE_FUDGE_FACTOR$ : 0, $DvtTreemapLayoutSliceAndDice$$.$setY$(this.$_y$ + $DvtTreemapNode$$.$DEFAULT_HEADER_BORDER_WIDTH$ + 
    this.$_titleBarHeight$ / 2 + $DvtSunburstEventManager$$), $DvtTreemapLayoutSliceAndDice$$.$alignMiddle$(), this.$ApplyHeaderTextStyle$($DvtTreemapLayoutSliceAndDice$$, "labelStyle"));
    if($DvtTreemapLayoutSliceAndDice$$ != $JSCompiler_alias_NULL$$) {
      return this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ && this.$isDrillReplaceEnabled$() ? (this.$ApplyHeaderTextStyle$($DvtTreemapLayoutSliceAndDice$$, "_drillableLabelStyle"), $DvtTreemapLayoutSliceAndDice$$.setCursor("pointer"), $DvtSunburstEventManager$$ = new $DvtTreePeer$$(this, this.getId(), $JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $DvtSunburstEventManager$$.$setDrillable$($JSCompiler_alias_TRUE$$), this.$_view$.$getEventManager$().$associate$($DvtTreemapLayoutSliceAndDice$$, 
      $DvtSunburstEventManager$$)) : $DvtTreemapLayoutSliceAndDice$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $dvt$$10$$.$TextUtils$.$fitText$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapEventManager$$, $DvtSunburstNode$$, $DvtSunburstDefaults$$) ? $DvtTreemapLayoutSliceAndDice$$ : $JSCompiler_alias_NULL$$
    }
  };
  $DvtTreemapNode$$.prototype.$ApplyHeaderStyle$ = function $$DvtTreemapNode$$$$$ApplyHeaderStyle$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    var $DvtSunburstNode$$ = this.$_view$.$getOptions$().nodeDefaults.header;
    if(this.$_bHeaderUseNodeColor$) {
      var $DvtTreemapDefaults$$ = this.$getColor$();
      $DvtSunburstEventManager$$.$setSolidFill$($DvtTreemapDefaults$$);
      $DvtSunburstNode$$ = $dvt$$10$$.$ColorUtils$.$interpolateColor$($DvtSunburstNode$$.borderColor, $DvtTreemapDefaults$$, 1 - $DvtTreemapNode$$.$DEFAULT_HEADER_WITH_NODE_COLOR_ALPHA$);
      $DvtSunburstDefaults$$.$setSolidFill$($DvtSunburstNode$$)
    }else {
      $DvtSunburstDefaults$$.$setSolidFill$($DvtSunburstNode$$.borderColor), $DvtSunburstEventManager$$.$setSolidFill$($DvtSunburstNode$$.backgroundColor)
    }
  };
  $DvtTreemapNode$$.prototype.$ApplyHeaderTextStyle$ = function $$DvtTreemapNode$$$$$ApplyHeaderTextStyle$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    var $DvtSunburstNode$$ = [];
    1 >= this.$GetDepth$() && $DvtSunburstNode$$.push(new $dvt$$10$$.$CSSStyle$("font-weight:bold;"));
    $DvtSunburstNode$$.push(this.$_view$.$getOptions$().nodeDefaults.header[$DvtSunburstEventManager$$]);
    this.$_bHeaderUseNodeColor$ && ("labelStyle" == $DvtSunburstEventManager$$ || "_drillableLabelStyle" == $DvtSunburstEventManager$$) && $DvtSunburstNode$$.push(new $dvt$$10$$.$CSSStyle$("color: " + $DvtTreeNode$$.$GetNodeTextColor$(this)));
    this.$_headerLabelStyle$ && $DvtSunburstNode$$.push(this.$_headerLabelStyle$);
    $DvtSunburstDefaults$$.$setCSSStyle$($dvt$$10$$.$CSSStyle$.$mergeStyles$($DvtSunburstNode$$))
  };
  $DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
    !this.$_isolateButton$ && !$dvt$$10$$.$Agent$.$isTouchDevice$() && (this.$_isolateButton$ = this.$_createIsolateRestoreButton$(this.$_shape$));
    $DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
  };
  $DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
    this.$_bIsolated$ !== $JSCompiler_alias_TRUE$$ && !$dvt$$10$$.$Agent$.$isTouchDevice$() && this.$_removeIsolateRestoreButton$();
    $DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
  };
  $DvtTreemapNode$$.prototype.$_updateShapes$ = function $$DvtTreemapNode$$$$$_updateShapes$$() {
    this.$_shape$ && (this.$_shape$.$setRect$(this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && this.$_innerShape$.$setRect$(this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (this.$_textStyle$ != $DvtTreemapNode$$.$TEXT_STYLE_HEADER$ || this.$_bHeaderUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$($JSCompiler_alias_FALSE$$), this.$_removeChildShape$(this.$_fillShape$), this.$_removeChildShape$(this.$_topLeftShape$), 
    this.$_topLeftShape$ = this.$_fillShape$ = $JSCompiler_alias_NULL$$, this.$_removeIsolateRestoreButton$(), this.$GetTemplate$() ? (this.$_removeChildShape$(this.$_contentRoot$), this.$_contentRoot$ = $JSCompiler_alias_NULL$$) : (this.$_removeChildShape$(this.$_textBackground$), this.$_textBackground$ = $JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
  };
  $DvtTreemapNode$$.prototype.$getDropSiteFeedback$ = function $$DvtTreemapNode$$$$$getDropSiteFeedback$$() {
    return this.$_shape$ ? new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), this.$_shape$.$getX$(), this.$_shape$.$getY$(), this.$_shape$.getWidth(), this.$_shape$.getHeight()) : $JSCompiler_alias_NULL$$
  };
  $DvtTreemapNode$$.prototype.$_addChildText$ = function $$DvtTreemapNode$$$$$_addChildText$$($dvt$$10$$) {
    this.$_textStyle$ == $DvtTreemapNode$$.$TEXT_STYLE_NODE$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($dvt$$10$$) : this.$_shape$.$addChild$($dvt$$10$$)
  };
  $DvtTreemapNode$$.prototype.$_removeChildShape$ = function $$DvtTreemapNode$$$$$_removeChildShape$$($dvt$$10$$) {
    $dvt$$10$$ && this.$_shape$.removeChild($dvt$$10$$)
  };
  $DvtTreemapNode$$.prototype.$_getIsolateButton$ = function $$DvtTreemapNode$$$$$_getIsolateButton$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getCtx$(), $DvtSunburstEventManager$$ = $dvt$$10$$.$Agent$.$isRightToLeft$(this.$_context$), $DvtSunburstNode$$ = this.$_view$.$getOptions$()._resources, $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$ && $DvtSunburstNode$$.isolateDownRtl ? $DvtSunburstNode$$.isolateDownRtl : $DvtSunburstNode$$.isolateDown, $DvtTreemapEventManager$$ = $DvtSunburstEventManager$$ && $DvtSunburstNode$$.isolateOverRtl ? $DvtSunburstNode$$.isolateOverRtl : $DvtSunburstNode$$.isolateOver, 
    $DvtSunburstEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$ && $DvtSunburstNode$$.isolateRtl ? $DvtSunburstNode$$.isolateRtl : $DvtSunburstNode$$.isolate, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$), $DvtTreemapDefaults$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtTreemapDefaults$$, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$), $DvtTreemapEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, 
    $DvtTreemapEventManager$$, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$);
    $DvtSunburstEventManager$$.$setInvisibleFill$();
    $DvtTreemapDefaults$$.$setInvisibleFill$();
    $DvtTreemapEventManager$$.$setInvisibleFill$();
    $DvtSunburstDefaults$$ = new $dvt$$10$$.$Button$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$);
    $DvtSunburstDefaults$$.$addEvtListener$($dvt$$10$$.$MouseEvent$.$CLICK$, this.$__isolateNode$, $JSCompiler_alias_FALSE$$, this);
    return $DvtSunburstDefaults$$
  };
  $DvtTreemapNode$$.prototype.$_getRestoreButton$ = function $$DvtTreemapNode$$$$$_getRestoreButton$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getCtx$(), $DvtSunburstEventManager$$ = $dvt$$10$$.$Agent$.$isRightToLeft$(this.$_context$), $DvtSunburstNode$$ = this.$_view$.$getOptions$()._resources, $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$ && $DvtSunburstNode$$.restoreDownRtl ? $DvtSunburstNode$$.restoreDownRtl : $DvtSunburstNode$$.restoreDown, $DvtTreemapEventManager$$ = $DvtSunburstEventManager$$ && $DvtSunburstNode$$.restoreOverRtl ? $DvtSunburstNode$$.restoreOverRtl : $DvtSunburstNode$$.restoreOver, 
    $DvtSunburstEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$ && $DvtSunburstNode$$.restoreRtl ? $DvtSunburstNode$$.restoreRtl : $DvtSunburstNode$$.restore, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$), $DvtTreemapDefaults$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtTreemapDefaults$$, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$), $DvtTreemapEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, 
    $DvtTreemapEventManager$$, 0, 0, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$, $DvtTreemapNode$$.$_ISOLATE_ICON_SIZE$);
    $DvtSunburstEventManager$$.$setInvisibleFill$();
    $DvtTreemapDefaults$$.$setInvisibleFill$();
    $DvtTreemapEventManager$$.$setInvisibleFill$();
    $DvtSunburstDefaults$$ = new $dvt$$10$$.$Button$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$);
    $DvtSunburstDefaults$$.$addEvtListener$($dvt$$10$$.$MouseEvent$.$CLICK$, this.$__restoreNode$, $JSCompiler_alias_FALSE$$, this);
    return $DvtSunburstDefaults$$
  };
  $DvtTreemapNode$$.prototype.$__isolateNode$ = function $$DvtTreemapNode$$$$$__isolateNode$$($dvt$$10$$) {
    this.$_bIsolated$ = $JSCompiler_alias_TRUE$$;
    this.$hideHoverEffect$();
    this.$_view$.$__isolate$(this);
    this.$_removeIsolateRestoreButton$();
    this.$UpdateAriaLabel$();
    $dvt$$10$$ && $dvt$$10$$.stopPropagation()
  };
  $DvtTreemapNode$$.prototype.$__restoreNode$ = function $$DvtTreemapNode$$$$$__restoreNode$$($dvt$$10$$) {
    this.$_bIsolated$ = $JSCompiler_alias_FALSE$$;
    this.$hideHoverEffect$();
    this.$_view$.$__restore$();
    this.$_removeIsolateRestoreButton$();
    this.$UpdateAriaLabel$();
    $dvt$$10$$ && $dvt$$10$$.stopPropagation()
  };
  $DvtTreemapNode$$.prototype.$getDatatip$ = function $$DvtTreemapNode$$$$$getDatatip$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    return $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$ instanceof $dvt$$10$$.$Button$ ? $JSCompiler_alias_NULL$$ : $DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  };
  $DvtTreemapNode$$.prototype.$getDatatipColor$ = function $$DvtTreemapNode$$$$$getDatatipColor$$($DvtSunburstDefaults$$) {
    return $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$ instanceof $dvt$$10$$.$Button$ ? $JSCompiler_alias_NULL$$ : $DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $DvtSunburstDefaults$$)
  };
  $DvtTreemapNode$$.prototype.$getTooltip$ = function $$DvtTreemapNode$$$$$getTooltip$$($DvtSunburstDefaults$$) {
    return $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$ instanceof $dvt$$10$$.$Button$ ? $dvt$$10$$.$Bundle$.$getTranslation$(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", $dvt$$10$$.$Bundle$.$TREEMAP_PREFIX$, this.$_bIsolated$ ? "RESTORE" : "ISOLATE") : $JSCompiler_alias_NULL$$
  };
  $DvtTreemapNode$$.prototype.$getAriaLabel$ = function $$DvtTreemapNode$$$$$getAriaLabel$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getOptions$(), $DvtSunburstEventManager$$ = [];
    this.$isSelectable$() && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstDefaults$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$_bIsolated$ && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstDefaults$$, "stateIsolated", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "STATE_ISOLATED"));
    this.$isDrillReplaceEnabled$() && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstDefaults$$, "stateDrillable", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $dvt$$10$$.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $DvtSunburstEventManager$$)
  };
  $DvtTreemapNode$$.prototype.$UpdateAriaLabel$ = function $$DvtTreemapNode$$$$$UpdateAriaLabel$$() {
    !$dvt$$10$$.$Agent$.$deferAriaCreation$() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapLayoutBase$$, $dvt$$10$$.$Obj$);
  $DvtTreemapLayoutBase$$.$_GROUP_GAP$ = 3;
  $DvtTreemapLayoutBase$$.prototype.Init = function $$DvtTreemapLayoutBase$$$$Init$() {
    this.$_zIndex$ = 0
  };
  $DvtTreemapLayoutBase$$.prototype.$layout$ = $JSCompiler_emptyFn$$();
  $DvtTreemapLayoutBase$$.prototype.$setNodeBounds$ = function $$DvtTreemapLayoutBase$$$$$setNodeBounds$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    $DvtSunburstDefaults$$.$setZIndex$(this.$_zIndex$);
    this.$_zIndex$++;
    if(!$DvtTreemapKeyboardHandler$$ || !$DvtSunburstDefaults$$.$hasChildren$()) {
      $DvtTreemapKeyboardHandler$$ = this.$getGapSize$($DvtSunburstDefaults$$.$_view$, $DvtSunburstDefaults$$.$GetDepth$());
      var $DvtTreemapLayoutSliceAndDice$$ = Math.round($DvtSunburstEventManager$$ + $DvtTreemapKeyboardHandler$$), $DvtTreemapLayoutSquarifying$$ = Math.round($DvtSunburstNode$$ + $DvtTreemapKeyboardHandler$$);
      if($DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.$setLayoutParams$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$, Math.round($DvtSunburstEventManager$$ + $DvtTreemapDefaults$$ - $DvtTreemapKeyboardHandler$$) - $DvtTreemapLayoutSliceAndDice$$, Math.round($DvtSunburstNode$$ + $DvtTreemapEventManager$$ - $DvtTreemapKeyboardHandler$$) - $DvtTreemapLayoutSquarifying$$)) {
        return $DvtSunburstDefaults$$
      }
    }
    return new $dvt$$10$$.$Rectangle$($DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$)
  };
  $DvtTreemapLayoutBase$$.prototype.$getGapSize$ = function $$DvtTreemapLayoutBase$$$$$getGapSize$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $dvt$$10$$.$getOptions$().groupGaps;
    return"outer" == $DvtSunburstEventManager$$ ? 1 == $DvtSunburstDefaults$$ && 2 <= $dvt$$10$$.$_maxDepth$ ? $DvtTreemapLayoutBase$$.$_GROUP_GAP$ : 0 : "all" == $DvtSunburstEventManager$$ ? $DvtSunburstDefaults$$ < $dvt$$10$$.$_maxDepth$ ? $DvtTreemapLayoutBase$$.$_GROUP_GAP$ : 0 : 0
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapLayoutSquarifying$$, $DvtTreemapLayoutBase$$);
  $DvtTreemapLayoutSquarifying$$.prototype.$layout$ = function $$DvtTreemapLayoutSquarifying$$$$$layout$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    this.$_layout$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$)
  };
  $DvtTreemapLayoutSquarifying$$.prototype.$_layout$ = function $$DvtTreemapLayoutSquarifying$$$$$_layout$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    $DvtSunburstEventManager$$ = this.$setNodeBounds$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$);
    $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.$getChildNodes$();
    $DvtSunburstDefaults$$ != $JSCompiler_alias_NULL$$ && 0 < $DvtSunburstDefaults$$.length && (this.$_calcPixelSize$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.$w$ * $DvtSunburstEventManager$$.$h$), $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.slice(0).sort(function($dvt$$10$$, $DvtSunburstDefaults$$) {
      return $dvt$$10$$.$getSize$() - $DvtSunburstDefaults$$.$getSize$()
    }), $DvtSunburstNode$$ = Math.min($DvtSunburstEventManager$$.$w$, $DvtSunburstEventManager$$.$h$), this.$_squarify$($DvtSunburstDefaults$$, $DvtSunburstNode$$, new $dvt$$10$$.$Rectangle$($DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y, $DvtSunburstEventManager$$.$w$, $DvtSunburstEventManager$$.$h$)))
  };
  $DvtTreemapLayoutSquarifying$$.prototype.$_calcPixelSize$ = function $$DvtTreemapLayoutSquarifying$$$$$_calcPixelSize$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    for(var $DvtSunburstEventManager$$ = 0, $DvtSunburstNode$$ = 0, $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $dvt$$10$$.length;$DvtSunburstNode$$++) {
      $DvtSunburstEventManager$$ += 0 < $dvt$$10$$[$DvtSunburstNode$$].$getSize$() ? $dvt$$10$$[$DvtSunburstNode$$].$getSize$() : 0
    }
    $DvtSunburstEventManager$$ = 0 == $DvtSunburstDefaults$$ ? 0 : $DvtSunburstDefaults$$ / $DvtSunburstEventManager$$;
    for($DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $dvt$$10$$.length;$DvtSunburstNode$$++) {
      var $DvtTreemapDefaults$$ = $dvt$$10$$[$DvtSunburstNode$$];
      $DvtTreemapDefaults$$.$__pxSize$ = $DvtTreemapDefaults$$.$getSize$() * $DvtSunburstEventManager$$
    }
  };
  $DvtTreemapLayoutSquarifying$$.prototype.$_squarify$ = function $$DvtTreemapLayoutSquarifying$$$$$_squarify$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    var $DvtSunburstNode$$ = [], $DvtTreemapDefaults$$ = Infinity;
    if($dvt$$10$$ == $JSCompiler_alias_NULL$$ || 0 == $dvt$$10$$.length) {
      this.$_layoutRow$($DvtSunburstNode$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
    }else {
      for(;0 < $dvt$$10$$.length;) {
        var $DvtTreemapEventManager$$ = $dvt$$10$$.pop();
        if(0 > $DvtTreemapEventManager$$.$__pxSize$) {
          this.$_layoutRow$($DvtSunburstNode$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$);
          break
        }
        $DvtSunburstNode$$.push($DvtTreemapEventManager$$);
        var $DvtTreemapKeyboardHandler$$ = this.$_getWorst$($DvtSunburstNode$$, $DvtSunburstDefaults$$);
        if($DvtTreemapKeyboardHandler$$ > $DvtTreemapDefaults$$) {
          $dvt$$10$$.push($DvtTreemapEventManager$$);
          $DvtSunburstNode$$.pop();
          $DvtSunburstEventManager$$ = this.$_layoutRow$($DvtSunburstNode$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$);
          this.$_squarify$($dvt$$10$$, Math.min($DvtSunburstEventManager$$.$w$, $DvtSunburstEventManager$$.$h$), $DvtSunburstEventManager$$);
          break
        }else {
          if(0 == $dvt$$10$$.length) {
            this.$_layoutRow$($DvtSunburstNode$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$);
            break
          }else {
            $DvtTreemapDefaults$$ = $DvtTreemapKeyboardHandler$$
          }
        }
      }
    }
  };
  $DvtTreemapLayoutSquarifying$$.prototype.$_getWorst$ = function $$DvtTreemapLayoutSquarifying$$$$$_getWorst$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    for(var $DvtSunburstEventManager$$ = 0, $DvtSunburstNode$$ = Infinity, $DvtTreemapDefaults$$ = -Infinity, $DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $dvt$$10$$.length;$DvtTreemapEventManager$$++) {
      $DvtSunburstEventManager$$ += $dvt$$10$$[$DvtTreemapEventManager$$].$__pxSize$, $DvtSunburstNode$$ = Math.min($DvtSunburstNode$$, $dvt$$10$$[$DvtTreemapEventManager$$].$__pxSize$), $DvtTreemapDefaults$$ = Math.max($DvtTreemapDefaults$$, $dvt$$10$$[$DvtTreemapEventManager$$].$__pxSize$)
    }
    $DvtSunburstEventManager$$ *= $DvtSunburstEventManager$$;
    $DvtTreemapEventManager$$ = $DvtSunburstDefaults$$ * $DvtSunburstDefaults$$;
    return Math.max($DvtTreemapEventManager$$ * $DvtTreemapDefaults$$ / $DvtSunburstEventManager$$, $DvtSunburstEventManager$$ / ($DvtTreemapEventManager$$ * $DvtSunburstNode$$))
  };
  $DvtTreemapLayoutSquarifying$$.prototype.$_layoutRow$ = function $$DvtTreemapLayoutSquarifying$$$$$_layoutRow$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    var $DvtTreemapDefaults$$ = 0, $DvtTreemapEventManager$$;
    for($DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtSunburstDefaults$$.length;$DvtTreemapEventManager$$++) {
      $DvtTreemapDefaults$$ += $DvtSunburstDefaults$$[$DvtTreemapEventManager$$].$__pxSize$
    }
    var $DvtTreemapKeyboardHandler$$ = $DvtSunburstNode$$.x, $DvtTreemapLayoutSliceAndDice$$ = $DvtSunburstNode$$.y;
    if($DvtSunburstEventManager$$ == $DvtSunburstNode$$.$w$) {
      $DvtTreemapDefaults$$ = 0 == $DvtSunburstEventManager$$ ? 0 : $DvtTreemapDefaults$$ / $DvtSunburstEventManager$$;
      for($DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtSunburstDefaults$$.length;$DvtTreemapEventManager$$++) {
        $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$[$DvtTreemapEventManager$$].$__pxSize$ / $DvtTreemapDefaults$$, this.$_layout$($DvtSunburstDefaults$$[$DvtTreemapEventManager$$], $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $JSCompiler_alias_FALSE$$), $DvtTreemapKeyboardHandler$$ += $DvtSunburstEventManager$$
      }
      return new $dvt$$10$$.$Rectangle$($DvtSunburstNode$$.x, $DvtSunburstNode$$.y + $DvtTreemapDefaults$$, $DvtSunburstNode$$.$w$, $DvtSunburstNode$$.$h$ - $DvtTreemapDefaults$$)
    }
    $DvtSunburstEventManager$$ = 0 == $DvtSunburstEventManager$$ ? 0 : $DvtTreemapDefaults$$ / $DvtSunburstEventManager$$;
    for($DvtTreemapEventManager$$ = 0;$DvtTreemapEventManager$$ < $DvtSunburstDefaults$$.length;$DvtTreemapEventManager$$++) {
      $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$[$DvtTreemapEventManager$$].$__pxSize$ / $DvtSunburstEventManager$$, this.$_layout$($DvtSunburstDefaults$$[$DvtTreemapEventManager$$], $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $JSCompiler_alias_FALSE$$), $DvtTreemapLayoutSliceAndDice$$ += $DvtTreemapDefaults$$
    }
    return new $dvt$$10$$.$Rectangle$($DvtSunburstNode$$.x + $DvtSunburstEventManager$$, $DvtSunburstNode$$.y, $DvtSunburstNode$$.$w$ - $DvtSunburstEventManager$$, $DvtSunburstNode$$.$h$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutBase$$);
  $DvtTreemapLayoutSliceAndDice$$.prototype.$layout$ = function $$DvtTreemapLayoutSliceAndDice$$$$$layout$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    this.$_layout$(this.$_isHoriz$, $dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$)
  };
  $DvtTreemapLayoutSliceAndDice$$.prototype.$_layout$ = function $$DvtTreemapLayoutSliceAndDice$$$$$_layout$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$) {
    var $DvtTreemapLayoutBase$$ = $DvtSunburstEventManager$$.$getOptions$();
    $DvtTreemapDefaults$$ = this.$setNodeBounds$($DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$);
    $DvtSunburstNode$$ = $DvtSunburstNode$$.$getChildNodes$();
    if($DvtSunburstNode$$ != $JSCompiler_alias_NULL$$) {
      $DvtTreemapEventManager$$ = $DvtTreemapDefaults$$.x;
      $DvtTreemapKeyboardHandler$$ = $DvtTreemapDefaults$$.y;
      $DvtTreemapLayoutSliceAndDice$$ = $DvtTreemapDefaults$$.$w$;
      $DvtTreemapLayoutSquarifying$$ = $DvtTreemapDefaults$$.$h$;
      var $DvtTreemapNode$$ = 0, $DvtTreeAutomation$$;
      for($DvtTreeAutomation$$ = 0;$DvtTreeAutomation$$ < $DvtSunburstNode$$.length;$DvtTreeAutomation$$++) {
        $DvtTreemapNode$$ += 0 < $DvtSunburstNode$$[$DvtTreeAutomation$$].$getSize$() ? $DvtSunburstNode$$[$DvtTreeAutomation$$].$getSize$() : 0
      }
      "on" == $DvtTreemapLayoutBase$$.sorting && ($DvtSunburstNode$$ = $DvtSunburstNode$$.slice(0), $DvtSunburstNode$$.sort(function($dvt$$10$$, $DvtSunburstDefaults$$) {
        return $DvtSunburstDefaults$$.$getSize$() - $dvt$$10$$.$getSize$()
      }));
      $DvtSunburstDefaults$$ && $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstEventManager$$.$getCtx$()) && ($DvtSunburstNode$$ = $DvtSunburstNode$$.slice(0).reverse());
      for($DvtTreeAutomation$$ = 0;$DvtTreeAutomation$$ < $DvtSunburstNode$$.length;$DvtTreeAutomation$$++) {
        if($DvtTreemapLayoutBase$$ = $DvtSunburstNode$$[$DvtTreeAutomation$$], !(0 >= $DvtTreemapLayoutBase$$.$getSize$())) {
          var $DvtTreeDefaults$$ = $DvtTreemapLayoutBase$$.$getSize$() / $DvtTreemapNode$$;
          $DvtSunburstDefaults$$ ? $DvtTreemapLayoutSliceAndDice$$ = $DvtTreemapDefaults$$.$w$ * $DvtTreeDefaults$$ : $DvtTreemapLayoutSquarifying$$ = $DvtTreemapDefaults$$.$h$ * $DvtTreeDefaults$$;
          this.$_layout$(!$DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtTreemapLayoutBase$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$, $JSCompiler_alias_FALSE$$);
          $DvtSunburstDefaults$$ ? $DvtTreemapEventManager$$ += $DvtTreemapLayoutSliceAndDice$$ : $DvtTreemapKeyboardHandler$$ += $DvtTreemapLayoutSquarifying$$
        }
      }
    }
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapKeyboardHandler$$, $DvtTreeKeyboardHandler$$);
  $DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $DvtSunburstDefaults$$);
    if(!$DvtSunburstEventManager$$ && ($DvtSunburstDefaults$$ = $DvtSunburstDefaults$$.keyCode, $DvtSunburstDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$OPEN_BRACKET$ || $DvtSunburstDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$CLOSE_BRACKET$)) {
      $DvtSunburstEventManager$$ = $JSCompiler_alias_TRUE$$
    }
    return $DvtSunburstEventManager$$
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapEventManager$$, $DvtTreeEventManager$$);
  $DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $JSCompiler_alias_TRUE$$;
    if($DvtSunburstDefaults$$.keyCode == $dvt$$10$$.$KeyboardEvent$.$ENTER$ && $DvtSunburstDefaults$$.ctrlKey) {
      var $DvtSunburstNode$$ = this.$getFocus$();
      $DvtSunburstNode$$.$isIsolateEnabled$() && ($DvtSunburstNode$$.$_bIsolated$ ? $DvtSunburstNode$$.$__restoreNode$() : $DvtSunburstNode$$.$__isolateNode$());
      $dvt$$10$$.$EventManager$.$consumeEvent$($DvtSunburstDefaults$$)
    }else {
      $DvtSunburstEventManager$$ = $DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtSunburstDefaults$$)
    }
    return $DvtSunburstEventManager$$
  };
  $DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  $dvt$$10$$.$Bundle$.$addDefaultStrings$($dvt$$10$$.$Bundle$.$TREEMAP_PREFIX$, {COLOR:"Color", ISOLATE:"Isolate", OTHER:"Other", RESTORE:"Restore", SIZE:"Size"});
  $dvt$$10$$.$Obj$.$createSubclass$($DvtTreemapDefaults$$, $DvtTreeDefaults$$);
  $DvtTreemapDefaults$$.$VERSION_1$ = {groupGaps:"outer", nodeDefaults:{header:{backgroundColor:"#FFFFFF", borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", isolate:"auto", labelHalign:"start", labelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#252525;"), selectedBackgroundColor:"#dae9f5", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000", useNodeColor:"off", _hoverLabelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + 
  "color:#252525;"), _selectedLabelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#252525;"), _drillableLabelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#145c9e;"), _drillableHoverLabelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color:#145c9e;"), _drillableSelectedLabelStyle:new $dvt$$10$$.$CSSStyle$($dvt$$10$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + 
  "color:#145c9e;")}, hoverColor:"#ebeced", groupLabelDisplay:"header", labelDisplay:"node", labelHalign:"center", labelValign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}};
  $dvt$$10$$.$Sunburst$ = function $$dvt$$10$$$$Sunburst$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    this.Init($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($dvt$$10$$.$Sunburst$, $DvtTreeView$$);
  $dvt$$10$$.$Sunburst$.$_ROTATION_SHAPE_RADIUS$ = 15;
  $dvt$$10$$.$Sunburst$.$_ROTATION_SHAPE_RADIUS_TOUCH$ = 60;
  $dvt$$10$$.$Sunburst$.$_ANIMATION_TYPE_FAN$ = "fan";
  $dvt$$10$$.$Sunburst$.$_BACKGROUND_INLINE_DEFAULT$ = "";
  $dvt$$10$$.$Sunburst$.$_BUFFER_SPACE$ = 3;
  $dvt$$10$$.$Sunburst$.$_MIN_BUFFER_SPACE$ = 2;
  $dvt$$10$$.$Sunburst$.newInstance = function $$dvt$$10$$$$Sunburst$$newInstance$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    return new $dvt$$10$$.$Sunburst$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.Init = function $$dvt$$10$$$$Sunburst$$$Init$($DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    $dvt$$10$$.$Sunburst$.$superclass$.Init.call(this, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$);
    this.$Defaults$ = new $DvtSunburstDefaults$$;
    this.$_angleExtent$ = 2 * Math.PI
  };
  $dvt$$10$$.$Sunburst$.prototype.$ApplyParsedProperties$ = function $$dvt$$10$$$$Sunburst$$$$ApplyParsedProperties$$($DvtSunburstDefaults$$) {
    $dvt$$10$$.$Sunburst$.$superclass$.$ApplyParsedProperties$.call(this, $DvtSunburstDefaults$$);
    $DvtSunburstDefaults$$ = this.$getOptions$();
    $dvt$$10$$.$Agent$.$isPlatformIE$() ? this.$_rotateCursor$ = "url(" + $DvtSunburstDefaults$$._resources.rotateCursor + "), auto" : this.$_rotateCursor$ = "url(" + $DvtSunburstDefaults$$._resources.rotateCursor + ") 8 8, auto";
    this.$_startAngle$ = (360 - $DvtSunburstDefaults$$.startAngle) * $DvtSunburstNode$$.$TWO_PI$ / 360;
    this.$_startAngle$ > Math.PI && (this.$_startAngle$ -= $DvtSunburstNode$$.$TWO_PI$);
    "auto" == $DvtSunburstDefaults$$.animationOnDisplay && ($DvtSunburstDefaults$$.animationOnDisplay = "fan")
  };
  $dvt$$10$$.$Sunburst$.prototype.$Layout$ = function $$dvt$$10$$$$Sunburst$$$$Layout$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = Math.max(Math.ceil($dvt$$10$$.$Sunburst$.$_BUFFER_SPACE$ * Math.min($DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$) / 400), $dvt$$10$$.$Sunburst$.$_MIN_BUFFER_SPACE$);
    $DvtSunburstDefaults$$.x += $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.y += $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$w$ -= 2 * $DvtSunburstEventManager$$;
    $DvtSunburstDefaults$$.$h$ -= 2 * $DvtSunburstEventManager$$;
    this.$LayoutBreadcrumbs$($DvtSunburstDefaults$$);
    this.$LayoutLegend$($DvtSunburstDefaults$$);
    this.$_totalRadius$ = Math.floor(Math.min($DvtSunburstDefaults$$.$w$, $DvtSunburstDefaults$$.$h$) / 2);
    this.$_root$ && $DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$getOptions$().sorting)
  };
  $dvt$$10$$.$Sunburst$.prototype.$Render$ = function $$dvt$$10$$$$Sunburst$$$$Render$$($DvtSunburstDefaults$$, $DvtSunburstNode$$) {
    this.$RenderBackground$($DvtSunburstDefaults$$);
    this.$RenderBreadcrumbs$($DvtSunburstDefaults$$);
    this.$RenderLegend$($DvtSunburstDefaults$$);
    this.$_translatePt$ = new $dvt$$10$$.$Point$($DvtSunburstNode$$.x + $DvtSunburstNode$$.$w$ / 2, $DvtSunburstNode$$.y + $DvtSunburstNode$$.$h$ / 2);
    if(this.$__isRotationEnabled$() && this.$HasValidData$()) {
      var $DvtTreemapDefaults$$ = $dvt$$10$$.$Agent$.$isTouchDevice$() ? $dvt$$10$$.$Sunburst$.$_ROTATION_SHAPE_RADIUS_TOUCH$ : $dvt$$10$$.$Sunburst$.$_ROTATION_SHAPE_RADIUS$, $DvtTreemapDefaults$$ = new $dvt$$10$$.$Circle$(this.$getCtx$(), $DvtSunburstNode$$.x + $DvtSunburstNode$$.$w$ / 2, $DvtSunburstNode$$.y + $DvtSunburstNode$$.$h$ / 2, this.$_totalRadius$ + $DvtTreemapDefaults$$);
      $DvtTreemapDefaults$$.$setInvisibleFill$();
      $DvtTreemapDefaults$$.setCursor(this.$_rotateCursor$);
      $DvtSunburstDefaults$$.$addChild$($DvtTreemapDefaults$$);
      this.$getEventManager$().$associate$($DvtTreemapDefaults$$, new $DvtTreePeer$$($JSCompiler_alias_NULL$$, $DvtSunburstEventManager$$.$ROTATION_ID$))
    }
    $DvtTreemapDefaults$$ = new $dvt$$10$$.$Container$(this.$getCtx$());
    $DvtTreemapDefaults$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
    $DvtSunburstDefaults$$.$addChild$($DvtTreemapDefaults$$);
    if(this.$HasValidData$()) {
      var $DvtTreemapEventManager$$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtTreemapDefaults$$.$addChild$($DvtTreemapEventManager$$);
      this.$_root$.$render$($DvtTreemapEventManager$$);
      this.$UpdateAriaNavigation$(this.$_root$);
      this.$_selectedLayer$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtTreemapDefaults$$.$addChild$(this.$_selectedLayer$);
      this.$_hoverLayer$ = new $dvt$$10$$.$Container$(this.$getCtx$());
      $DvtTreemapDefaults$$.$addChild$(this.$_hoverLayer$)
    }else {
      this.$RenderEmptyText$($DvtSunburstDefaults$$)
    }
  };
  $dvt$$10$$.$Sunburst$.prototype.$CreateEventManager$ = function $$dvt$$10$$$$Sunburst$$$$CreateEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    return new $DvtSunburstEventManager$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.$GetDisplayAnimation$ = function $$dvt$$10$$$$Sunburst$$$$GetDisplayAnimation$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    if(this.$getOptions$().animationOnDisplay === $dvt$$10$$.$Sunburst$.$_ANIMATION_TYPE_FAN$ && this.$HasValidData$()) {
      this.$_animateAngleExtent$(0);
      var $DvtSunburstNode$$ = new $dvt$$10$$.$CustomAnimation$(this.$getCtx$(), this, this.$AnimationDuration$);
      $DvtSunburstNode$$.$_animator$.$addProp$($dvt$$10$$.$Animator$.$TYPE_NUMBER$, this, this.$__getAngleExtent$, this.$_animateAngleExtent$, 2 * Math.PI);
      return $DvtSunburstNode$$
    }
    return $dvt$$10$$.$Sunburst$.$superclass$.$GetDisplayAnimation$.call(this, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.$GetDeleteContainer$ = function $$dvt$$10$$$$Sunburst$$$$GetDeleteContainer$$() {
    var $DvtSunburstDefaults$$ = $dvt$$10$$.$Sunburst$.$superclass$.$GetDeleteContainer$.call(this);
    $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
    return $DvtSunburstDefaults$$
  };
  $dvt$$10$$.$Sunburst$.prototype.$OnAnimationEnd$ = function $$dvt$$10$$$$Sunburst$$$$OnAnimationEnd$$() {
    if(!this.$AnimationStopped$) {
      this.$_container$.$removeChildren$();
      var $DvtSunburstDefaults$$ = new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$);
      this.$Layout$($DvtSunburstDefaults$$);
      this.$Render$(this.$_container$, $DvtSunburstDefaults$$);
      for(var $DvtSunburstDefaults$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
        $DvtSunburstDefaults$$[$DvtSunburstEventManager$$].$setSelected$($JSCompiler_alias_TRUE$$)
      }
    }
    this.$_angleExtent$ < 2 * Math.PI && this.$_animateAngleExtent$(2 * Math.PI);
    $dvt$$10$$.$Sunburst$.$superclass$.$OnAnimationEnd$.call(this)
  };
  $dvt$$10$$.$Sunburst$.prototype.$__moveToHoverLayer$ = function $$dvt$$10$$$$Sunburst$$$$__moveToHoverLayer$$($dvt$$10$$) {
    this.$_hoverLayer$.$addChild$($dvt$$10$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.$__moveToSelectedLayer$ = function $$dvt$$10$$$$Sunburst$$$$__moveToSelectedLayer$$($DvtSunburstDefaults$$) {
    this.$_selectedLayer$.$addChild$($DvtSunburstDefaults$$);
    !$dvt$$10$$.$Agent$.$isBrowserSafari$() && !$dvt$$10$$.$Agent$.$isPlatformGecko$() && (this.$_selectedLayer$.$removeAllDrawEffects$(), this.$_selectedLayer$.$addDrawEffect$($DvtTreeNode$$.$__NODE_SELECTED_SHADOW$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__getAngleExtent$ = $JSCompiler_get$$("$_angleExtent$");
  $dvt$$10$$.$Sunburst$.prototype.$_animateAngleExtent$ = function $$dvt$$10$$$$Sunburst$$$$_animateAngleExtent$$($DvtSunburstDefaults$$) {
    this.$_angleExtent$ = $DvtSunburstDefaults$$;
    this.$Layout$(new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    this.$_root$ && this.$_root$.$updateShapes$($JSCompiler_alias_TRUE$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.$__startRotation$ = function $$dvt$$10$$$$Sunburst$$$$__startRotation$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.$__setRotationAnchor$(this.$_calcAngle$($dvt$$10$$, $DvtSunburstDefaults$$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__setRotationAnchor$ = function $$dvt$$10$$$$Sunburst$$$$__setRotationAnchor$$($DvtSunburstDefaults$$) {
    this.$_currentAngle$ = $DvtSunburstDefaults$$;
    this.$_rotationMask$ = new $dvt$$10$$.$Rect$(this.$getCtx$(), 0, 0, this.$Width$, this.$Height$);
    this.$_rotationMask$.$setInvisibleFill$();
    this.$_rotationMask$.setCursor(this.$_rotateCursor$);
    this.$addChild$(this.$_rotationMask$);
    this.$getEventManager$().$associate$(this.$_rotationMask$, new $DvtTreePeer$$($JSCompiler_alias_NULL$$, $DvtSunburstEventManager$$.$ROTATION_ID$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__continueRotation$ = function $$dvt$$10$$$$Sunburst$$$$__continueRotation$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    this.$__rotate$(this.$_calcAngle$($dvt$$10$$, $DvtSunburstDefaults$$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__rotate$ = function $$dvt$$10$$$$Sunburst$$$$__rotate$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$ - this.$_currentAngle$;
    this.$_currentAngle$ = $DvtSunburstDefaults$$;
    this.$_updateStartAngle$($DvtSunburstEventManager$$);
    this.dispatchEvent($dvt$$10$$.$EventFactory$.$newSunburstRotationEvent$(360 - Math.round(180 * this.$_startAngle$ / Math.PI), $JSCompiler_alias_FALSE$$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__endRotation$ = function $$dvt$$10$$$$Sunburst$$$$__endRotation$$() {
    this.$_currentAngle$ = $JSCompiler_alias_NULL$$;
    this.removeChild(this.$_rotationMask$);
    this.$_rotationMask$ = $JSCompiler_alias_NULL$$;
    var $DvtSunburstDefaults$$ = 360 - Math.round(180 * this.$_startAngle$ / Math.PI);
    this.dispatchEvent($dvt$$10$$.$EventFactory$.$newSunburstRotationEvent$($DvtSunburstDefaults$$, $JSCompiler_alias_FALSE$$));
    this.dispatchEvent($dvt$$10$$.$EventFactory$.$newSunburstRotationEvent$($DvtSunburstDefaults$$, $JSCompiler_alias_TRUE$$))
  };
  $dvt$$10$$.$Sunburst$.prototype.$__expandCollapseNode$ = function $$dvt$$10$$$$Sunburst$$$$__expandCollapseNode$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$) {
    this.$__setNavigableIdToFocus$($DvtSunburstDefaults$$.getId());
    if($DvtSunburstEventManager$$) {
      var $DvtSunburstNode$$ = $DvtSunburstDefaults$$.$getOptions$();
      $DvtSunburstNode$$.nodes && 0 < $DvtSunburstNode$$.nodes.length && this.$render$(this.$getOptions$());
      this.dispatchEvent($dvt$$10$$.$EventFactory$.$newSunburstExpandEvent$($DvtSunburstDefaults$$.getId()))
    }else {
      this.$render$(this.$getOptions$()), this.dispatchEvent($dvt$$10$$.$EventFactory$.$newSunburstCollapseEvent$($DvtSunburstDefaults$$.getId()))
    }
  };
  $dvt$$10$$.$Sunburst$.prototype.$_calcAngle$ = function $$dvt$$10$$$$Sunburst$$$$_calcAngle$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return Math.atan2($DvtSunburstDefaults$$ - this.$_translatePt$.y, $dvt$$10$$ - this.$_translatePt$.x)
  };
  $dvt$$10$$.$Sunburst$.prototype.$_updateStartAngle$ = function $$dvt$$10$$$$Sunburst$$$$_updateStartAngle$$($DvtSunburstDefaults$$) {
    this.$_startAngle$ += $DvtSunburstDefaults$$;
    this.$_startAngle$ < -Math.PI ? this.$_startAngle$ += 2 * Math.PI : this.$_startAngle$ > Math.PI && (this.$_startAngle$ -= 2 * Math.PI);
    this.$Layout$(new $dvt$$10$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    this.$_root$ && this.$_root$.$updateShapes$($JSCompiler_alias_TRUE$$)
  };
  $dvt$$10$$.$Sunburst$.prototype.$__getNodeUnderPoint$ = function $$dvt$$10$$$$Sunburst$$$$__getNodeUnderPoint$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return this.$_root$.$getNodeUnderPoint$($dvt$$10$$ - this.$_translatePt$.x, $DvtSunburstDefaults$$ - this.$_translatePt$.y)
  };
  $dvt$$10$$.$Sunburst$.prototype.$__showDropSiteFeedback$ = function $$dvt$$10$$$$Sunburst$$$$__showDropSiteFeedback$$($DvtSunburstDefaults$$) {
    ($DvtSunburstDefaults$$ = $dvt$$10$$.$Sunburst$.$superclass$.$__showDropSiteFeedback$.call(this, $DvtSunburstDefaults$$)) && $DvtSunburstDefaults$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
    return $DvtSunburstDefaults$$
  };
  $dvt$$10$$.$Sunburst$.prototype.$__isRotationEnabled$ = function $$dvt$$10$$$$Sunburst$$$$__isRotationEnabled$$() {
    return"off" != this.$getOptions$().rotation
  };
  $dvt$$10$$.$Sunburst$.prototype.$GetComponentDescription$ = function $$dvt$$10$$$$Sunburst$$$$GetComponentDescription$$() {
    return $dvt$$10$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "SUNBURST")
  };
  $dvt$$10$$.$Sunburst$.prototype.$getBundlePrefix$ = function $$dvt$$10$$$$Sunburst$$$$getBundlePrefix$$() {
    return $dvt$$10$$.$Bundle$.$SUNBURST_PREFIX$
  };
  $dvt$$10$$.$Sunburst$.prototype.$CreateNode$ = function $$dvt$$10$$$$Sunburst$$$$CreateNode$$($dvt$$10$$) {
    return new $DvtSunburstNode$$(this, $dvt$$10$$)
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtSunburstNode$$, $DvtTreeNode$$);
  $DvtSunburstNode$$.$TEXT_BUFFER_HORIZ$ = 6;
  $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$ = 16;
  $DvtSunburstNode$$.$_ROOT_NODE_MARGIN$ = 2;
  $DvtSunburstNode$$.$TWO_PI$ = 2 * Math.PI;
  $DvtSunburstNode$$.$_CENTER_ARTIFICIAL_ROOT_RADIUS$ = 0.25;
  $DvtSunburstNode$$.$_CENTER_NODE_RADIUS$ = 0.5;
  $DvtSunburstNode$$.$_CENTER_WITH_CONTENT_RADIUS$ = 1;
  $DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($DvtSunburstDefaults$$) {
    if(this.$_hasLayout$) {
      this.$_nodeContainer$ = $DvtSunburstDefaults$$;
      this.$_shape$ = this.$_createShapeNode$();
      $DvtSunburstDefaults$$.$addChild$(this.$_shape$);
      var $DvtSunburstEventManager$$ = this.$GetTemplate$();
      if(this.$_showRootContent$() && $DvtSunburstEventManager$$) {
        var $DvtTreemapDefaults$$ = Math.sqrt(2), $DvtTreemapEventManager$$ = this.$_outerRadius$ * $DvtTreemapDefaults$$ - 2 * $DvtSunburstNode$$.$_ROOT_NODE_MARGIN$;
        this.$_x$ = -this.$_outerRadius$ / $DvtTreemapDefaults$$ + $DvtSunburstNode$$.$_ROOT_NODE_MARGIN$;
        this.$_y$ = -this.$_outerRadius$ / $DvtTreemapDefaults$$ + $DvtSunburstNode$$.$_ROOT_NODE_MARGIN$;
        var $DvtTreemapDefaults$$ = this.$GetElAttributes$(), $DvtTreemapKeyboardHandler$$ = this.$_view$.$_afContext$;
        $DvtTreemapKeyboardHandler$$.$_elContext$ = $DvtTreemapDefaults$$;
        0 < $DvtTreemapEventManager$$ && 0 < $DvtTreemapEventManager$$ && ($JSCompiler_StaticMethods_setAvailableWidth$$($DvtTreemapKeyboardHandler$$, $DvtTreemapEventManager$$), $JSCompiler_StaticMethods_setAvailableHeight$$($DvtTreemapKeyboardHandler$$, $DvtTreemapEventManager$$), $DvtTreemapKeyboardHandler$$.$setFontSize$(this.$GetTextSize$()), this.$_contentRoot$ = $DvtSunburstEventManager$$ = $DvtAfComponentFactory$$.$parseAndLayout$($DvtTreemapKeyboardHandler$$, $DvtSunburstEventManager$$, 
        this.$_shape$), $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$.$getDimensions$(), $DvtSunburstEventManager$$.$setTranslate$(this.$_x$ + ($DvtTreemapEventManager$$ - $DvtTreemapDefaults$$.$w$) / 2, this.$_y$ + ($DvtTreemapEventManager$$ - $DvtTreemapDefaults$$.$h$) / 2))
      }else {
        this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != $JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($DvtTreemapDefaults$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new $dvt$$10$$.$Rect$(this.$_view$.$getCtx$(), $DvtTreemapDefaults$$.x, $DvtTreemapDefaults$$.y, $DvtTreemapDefaults$$.$w$, $DvtTreemapDefaults$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), 
        this.$_shape$.$addChild$(this.$_textBackground$), $DvtTreemapEventManager$$ = this.$_text$.$getMatrix$(), $DvtTreemapEventManager$$.$isIdentity$() || this.$_textBackground$.$setMatrix$($DvtTreemapEventManager$$), this.$_shape$.$addChild$(this.$_text$)))
      }
      this.$_shape$.$setAriaRole$("img");
      this.$UpdateAriaLabel$();
      this.$renderChildren$($DvtSunburstDefaults$$)
    }
  };
  $DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($dvt$$10$$) {
    $DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $dvt$$10$$);
    this.$isSelected$() ? (this.$_shape$.$setSelected$($JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$($JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
  };
  $DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
    this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$__moveToHoverLayer$(this.$_shape$))
  };
  $DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
    this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
  };
  $DvtSunburstNode$$.prototype.$isExpandCollapseEnabled$ = function $$DvtSunburstNode$$$$$isExpandCollapseEnabled$$() {
    return"insert" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
  };
  $DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$;
    if($DvtSunburstDefaults$$.type == $dvt$$10$$.$MouseEvent$.$CLICK$) {
      return $DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $DvtSunburstDefaults$$)
    }
    $DvtSunburstEventManager$$ = $DvtSunburstDefaults$$.keyCode;
    if($DvtSunburstEventManager$$ == $dvt$$10$$.$KeyboardEvent$.$SPACE$ && $DvtSunburstDefaults$$.ctrlKey) {
      return this
    }
    for($DvtTreemapKeyboardHandler$$ = this;$DvtTreemapKeyboardHandler$$.$_parent$;) {
      $DvtTreemapKeyboardHandler$$ = $DvtTreemapKeyboardHandler$$.$_parent$
    }
    $DvtTreemapDefaults$$ = this.$GetNodesAtDepth$($DvtTreemapKeyboardHandler$$, this.$GetDepth$());
    $DvtTreemapEventManager$$ = $DvtSunburstNode$$.$_findNodeIndex$(this, $DvtTreemapDefaults$$);
    var $DvtTreemapLayoutSliceAndDice$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $DvtTreemapLayoutSliceAndDice$$ = $DvtSunburstNode$$.$_normalizedRadToDeg$($DvtTreemapLayoutSliceAndDice$$);
    switch($DvtSunburstEventManager$$) {
      case $dvt$$10$$.$KeyboardEvent$.$UP_ARROW$:
        if(this === $DvtTreemapKeyboardHandler$$ || 180 < $DvtTreemapLayoutSliceAndDice$$) {
          if($DvtSunburstEventManager$$ = this.$_lastVisitedChild$) {
            if($DvtTreemapDefaults$$ = $DvtSunburstEventManager$$.$_startAngle$ + $DvtSunburstEventManager$$.$_angleExtent$ / 2, $DvtTreemapDefaults$$ = $DvtSunburstNode$$.$_normalizedRadToDeg$($DvtTreemapDefaults$$), 180 < $DvtTreemapDefaults$$) {
              return $DvtSunburstEventManager$$
            }
          }
          $DvtSunburstDefaults$$ = $dvt$$10$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtSunburstDefaults$$, this.$getDescendantNodes$())
        }else {
          $DvtSunburstDefaults$$ = this.$_navigateToParent$()
        }
        break;
      case $dvt$$10$$.$KeyboardEvent$.$DOWN_ARROW$:
        if(this === $DvtTreemapKeyboardHandler$$ || 0 <= $DvtTreemapLayoutSliceAndDice$$ && 180 >= $DvtTreemapLayoutSliceAndDice$$) {
          if($DvtSunburstEventManager$$ = this.$_lastVisitedChild$) {
            if($DvtTreemapDefaults$$ = $DvtSunburstEventManager$$.$_startAngle$ + $DvtSunburstEventManager$$.$_angleExtent$ / 2, $DvtTreemapDefaults$$ = $DvtSunburstNode$$.$_normalizedRadToDeg$($DvtTreemapDefaults$$), 0 <= $DvtTreemapDefaults$$ && 180 >= $DvtTreemapDefaults$$) {
              return $DvtSunburstEventManager$$
            }
          }
          $DvtSunburstDefaults$$ = $dvt$$10$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtSunburstDefaults$$, this.$getDescendantNodes$())
        }else {
          $DvtSunburstDefaults$$ = this.$_navigateToParent$()
        }
        break;
      case $dvt$$10$$.$KeyboardEvent$.$LEFT_ARROW$:
        $DvtSunburstDefaults$$ = 1 == $DvtTreemapDefaults$$.length ? this : 0 == $DvtTreemapEventManager$$ ? $DvtTreemapDefaults$$[$DvtTreemapDefaults$$.length - 1] : $DvtTreemapDefaults$$[$DvtTreemapEventManager$$ - 1];
        break;
      case $dvt$$10$$.$KeyboardEvent$.$RIGHT_ARROW$:
        $DvtSunburstDefaults$$ = 1 == $DvtTreemapDefaults$$.length ? this : $DvtTreemapEventManager$$ == $DvtTreemapDefaults$$.length - 1 ? $DvtTreemapDefaults$$[0] : $DvtTreemapDefaults$$[$DvtTreemapEventManager$$ + 1];
        break;
      default:
        $DvtSunburstDefaults$$ = this
    }
    $DvtSunburstDefaults$$.$MarkAsLastVisitedChild$();
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$_navigateToParent$ = function $$DvtSunburstNode$$$$$_navigateToParent$$() {
    var $dvt$$10$$ = this.$_parent$, $DvtSunburstDefaults$$;
    $dvt$$10$$ ? ($DvtSunburstDefaults$$ = $dvt$$10$$, $dvt$$10$$.$MarkAsLastVisitedChild$()) : $DvtSunburstDefaults$$ = this;
    $DvtSunburstDefaults$$.$MarkAsLastVisitedChild$();
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.$_normalizedRadToDeg$ = function $$DvtSunburstNode$$$$_normalizedRadToDeg$$($DvtSunburstDefaults$$) {
    $DvtSunburstDefaults$$ = $dvt$$10$$.$Math$.$radsToDegrees$($DvtSunburstDefaults$$);
    0 > $DvtSunburstDefaults$$ ? $DvtSunburstDefaults$$ += 360 : 360 < $DvtSunburstDefaults$$ && ($DvtSunburstDefaults$$ -= 360);
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$getKeyboardBoundingBox$ = function $$DvtSunburstNode$$$$$getKeyboardBoundingBox$$() {
    if(this.$_shape$) {
      var $DvtSunburstDefaults$$ = this.$_shape$.$getDimensions$(), $DvtSunburstEventManager$$ = new $dvt$$10$$.$Point$($DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y), $DvtSunburstEventManager$$ = this.$_shape$.$localToStage$($DvtSunburstEventManager$$);
      $DvtSunburstDefaults$$.x = $DvtSunburstEventManager$$.x;
      $DvtSunburstDefaults$$.y = $DvtSunburstEventManager$$.y;
      return $DvtSunburstDefaults$$
    }
    return new $dvt$$10$$.$Rectangle$(0, 0, 0, 0)
  };
  $DvtSunburstNode$$.prototype.$getTargetElem$ = function $$DvtSunburstNode$$$$$getTargetElem$$() {
    return this.$_shape$ ? this.$_shape$.$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtSunburstNode$$.prototype.$getContextMenuLocation$ = function $$DvtSunburstNode$$$$$getContextMenuLocation$$() {
    return this.$_shape$.$localToStage$($DvtSunburstNode$$.$_calcPointOnArc$(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
  };
  $DvtSunburstNode$$.prototype.$setLayoutParams$ = function $$DvtSunburstNode$$$$$setLayoutParams$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$) {
    this.$_innerRadius$ = $dvt$$10$$;
    this.$_outerRadius$ = $DvtSunburstDefaults$$;
    this.$_startAngle$ = $DvtSunburstEventManager$$;
    this.$_angleExtent$ = $DvtSunburstNode$$;
    this.$_hasLayout$ = $JSCompiler_alias_TRUE$$
  };
  $DvtSunburstNode$$.prototype.$GetFill$ = function $$DvtSunburstNode$$$$$GetFill$$() {
    return this.$_bArtificialRoot$ ? $dvt$$10$$.$SolidFill$.$invisibleFill$() : $DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
  };
  $DvtSunburstNode$$.prototype.$GetAnimationParams$ = function $$DvtSunburstNode$$$$$GetAnimationParams$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $dvt$$10$$.$ColorUtils$.$getRed$(this.$_color$), $DvtTreemapDefaults$$ = $dvt$$10$$.$ColorUtils$.$getGreen$(this.$_color$), $DvtTreemapEventManager$$ = $dvt$$10$$.$ColorUtils$.$getBlue$(this.$_color$), $DvtTreemapKeyboardHandler$$ = this.$_startAngle$;
    $DvtSunburstDefaults$$ && !isNaN($DvtSunburstDefaults$$[2]) && ($DvtSunburstDefaults$$ = $DvtSunburstDefaults$$[2], $DvtSunburstDefaults$$ - this.$_startAngle$ > Math.PI ? $DvtTreemapKeyboardHandler$$ += $DvtSunburstNode$$.$TWO_PI$ : this.$_startAngle$ - $DvtSunburstDefaults$$ > Math.PI && ($DvtTreemapKeyboardHandler$$ -= $DvtSunburstNode$$.$TWO_PI$));
    return[this.$_innerRadius$, this.$_outerRadius$, $DvtTreemapKeyboardHandler$$, this.$_angleExtent$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$]
  };
  $DvtSunburstNode$$.prototype.$SetAnimationParams$ = function $$DvtSunburstNode$$$$$SetAnimationParams$$($DvtSunburstDefaults$$) {
    this.$setLayoutParams$($DvtSunburstDefaults$$[0], $DvtSunburstDefaults$$[1], $DvtSunburstDefaults$$[2], $DvtSunburstDefaults$$[3]);
    this.$_color$ = $dvt$$10$$.$ColorUtils$.$makeRGB$(Math.round($DvtSunburstDefaults$$[4]), Math.round($DvtSunburstDefaults$$[5]), Math.round($DvtSunburstDefaults$$[6]));
    this.$updateShapes$($JSCompiler_alias_FALSE$$)
  };
  $DvtSunburstNode$$.prototype.$animateUpdate$ = function $$DvtSunburstNode$$$$$animateUpdate$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    $DvtSunburstDefaults$$.$_hasLayout$ && 0 < $DvtSunburstDefaults$$.$_angleExtent$ ? $DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $dvt$$10$$, $DvtSunburstDefaults$$) : this.$animateInsert$($dvt$$10$$)
  };
  $DvtSunburstNode$$.prototype.$getNodeUnderPoint$ = function $$DvtSunburstNode$$$$$getNodeUnderPoint$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if(this.contains($dvt$$10$$, $DvtSunburstDefaults$$)) {
      return this
    }
    for(var $DvtSunburstEventManager$$ = this.$getChildNodes$(), $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$.length;$DvtSunburstNode$$++) {
      var $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$[$DvtSunburstNode$$].$getNodeUnderPoint$($dvt$$10$$, $DvtSunburstDefaults$$);
      if($DvtTreemapDefaults$$) {
        return $DvtTreemapDefaults$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtSunburstNode$$.prototype.contains = function $$DvtSunburstNode$$$$contains$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = $DvtSunburstNode$$.$_calcAngle$($dvt$$10$$, $DvtSunburstDefaults$$);
    return this.$ContainsRadius$($DvtSunburstNode$$.$_calcRadius$($dvt$$10$$, $DvtSunburstDefaults$$)) && this.$ContainsAngle$($DvtSunburstEventManager$$)
  };
  $DvtSunburstNode$$.prototype.$ContainsAngle$ = function $$DvtSunburstNode$$$$$ContainsAngle$$($dvt$$10$$) {
    for(;$dvt$$10$$ < this.$_startAngle$;) {
      $dvt$$10$$ += $DvtSunburstNode$$.$TWO_PI$
    }
    for(;$dvt$$10$$ - this.$_startAngle$ > $DvtSunburstNode$$.$TWO_PI$;) {
      $dvt$$10$$ -= $DvtSunburstNode$$.$TWO_PI$
    }
    return $dvt$$10$$ >= this.$_startAngle$ && $dvt$$10$$ <= this.$_startAngle$ + this.$_angleExtent$
  };
  $DvtSunburstNode$$.prototype.$ContainsRadius$ = function $$DvtSunburstNode$$$$$ContainsRadius$$($dvt$$10$$) {
    return $dvt$$10$$ >= this.$_innerRadius$ && $dvt$$10$$ <= this.$_outerRadius$
  };
  $DvtSunburstNode$$.$_calcPointOnArc$ = function $$DvtSunburstNode$$$$_calcPointOnArc$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return{x:Math.cos($DvtSunburstDefaults$$) * $dvt$$10$$, y:Math.sin($DvtSunburstDefaults$$) * $dvt$$10$$}
  };
  $DvtSunburstNode$$.$_containsRect$ = function $$DvtSunburstNode$$$$_containsRect$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return $DvtSunburstDefaults$$.contains($dvt$$10$$.x, $dvt$$10$$.y) && $DvtSunburstDefaults$$.contains($dvt$$10$$.x + $dvt$$10$$.$w$, $dvt$$10$$.y) && $DvtSunburstDefaults$$.contains($dvt$$10$$.x + $dvt$$10$$.$w$, $dvt$$10$$.y + $dvt$$10$$.$h$) && $DvtSunburstDefaults$$.contains($dvt$$10$$.x, $dvt$$10$$.y + $dvt$$10$$.$h$)
  };
  $DvtSunburstNode$$.$_calcAngle$ = function $$DvtSunburstNode$$$$_calcAngle$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = Math.atan2($DvtSunburstDefaults$$, $dvt$$10$$);
    0 > $DvtSunburstEventManager$$ ? $DvtSunburstEventManager$$ += $DvtSunburstNode$$.$TWO_PI$ : $DvtSunburstEventManager$$ > $DvtSunburstNode$$.$TWO_PI$ && ($DvtSunburstEventManager$$ -= $DvtSunburstNode$$.$TWO_PI$);
    return $DvtSunburstEventManager$$
  };
  $DvtSunburstNode$$.$_calcRadius$ = function $$DvtSunburstNode$$$$_calcRadius$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    return Math.sqrt($dvt$$10$$ * $dvt$$10$$ + $DvtSunburstDefaults$$ * $DvtSunburstDefaults$$)
  };
  $DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
    if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstDefaults$$ = this.$_createPathCmd$(), $DvtSunburstDefaults$$ = new $dvt$$10$$.$Path$(this.$_view$.$getCtx$(), $DvtSunburstDefaults$$);
    this.$_view$.$getEventManager$().$associate$($DvtSunburstDefaults$$, this);
    $DvtSunburstDefaults$$.$setAlpha$(this.$getAlpha$());
    $DvtSunburstDefaults$$.$setFill$(this.$GetFill$());
    var $DvtSunburstEventManager$$ = this.$_view$.$getOptions$().nodeDefaults, $DvtSunburstNode$$ = this.$getOptions$();
    $DvtSunburstDefaults$$.$setStroke$(new $dvt$$10$$.$SolidStroke$($DvtSunburstNode$$.borderColor || $DvtSunburstEventManager$$.borderColor, 1, $DvtSunburstNode$$.borderWidth || $DvtSunburstEventManager$$.borderWidth));
    $DvtSunburstDefaults$$.$setHoverStroke$(new $dvt$$10$$.$SolidStroke$($DvtSunburstEventManager$$.hoverColor, 1, 3));
    $DvtSunburstDefaults$$.$setSelectedStroke$(new $dvt$$10$$.$SolidStroke$($DvtSunburstEventManager$$.selectedInnerColor, 1, 1.5), new $dvt$$10$$.$SolidStroke$($DvtSunburstEventManager$$.selectedOuterColor, 1, 3.5));
    $DvtSunburstDefaults$$.$setSelectedHoverStroke$(new $dvt$$10$$.$SolidStroke$($DvtSunburstEventManager$$.hoverColor, 1, 3));
    $DvtSunburstDefaults$$.$setSelectable$(this.$isSelectable$());
    this.$_bArtificialRoot$ && ($DvtSunburstDefaults$$.$setAlpha$(0.001), $DvtSunburstDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$));
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$_createPathCmd$ = function $$DvtSunburstNode$$$$$_createPathCmd$$() {
    var $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$;
    this.$_angleExtent$ < $DvtSunburstNode$$.$TWO_PI$ ? ($DvtSunburstDefaults$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_outerRadius$, this.$_startAngle$), $DvtSunburstEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$), $DvtTreemapDefaults$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_innerRadius$, this.$_startAngle$ + this.$_angleExtent$), $DvtTreemapEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_innerRadius$, 
    this.$_startAngle$), $DvtSunburstDefaults$$ = $dvt$$10$$.$PathUtils$.moveTo($DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_outerRadius$, this.$_outerRadius$, this.$_angleExtent$, 1, $DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y) + $dvt$$10$$.$PathUtils$.lineTo($DvtTreemapDefaults$$.x, $DvtTreemapDefaults$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_innerRadius$, this.$_innerRadius$, this.$_angleExtent$, 0, $DvtTreemapEventManager$$.x, $DvtTreemapEventManager$$.y) + 
    $dvt$$10$$.$PathUtils$.closePath()) : ($DvtSunburstDefaults$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_outerRadius$, this.$_startAngle$), $DvtSunburstEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2), $DvtTreemapDefaults$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_innerRadius$, this.$_startAngle$), $DvtTreemapEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_innerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 
    2), $DvtSunburstDefaults$$ = $dvt$$10$$.$PathUtils$.moveTo($DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_outerRadius$, this.$_outerRadius$, this.$_angleExtent$ / 2, 1, $DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_outerRadius$, this.$_outerRadius$, this.$_angleExtent$ / 2, 1, $DvtSunburstDefaults$$.x, $DvtSunburstDefaults$$.y), 0 < this.$_innerRadius$ && ($DvtSunburstDefaults$$ += $dvt$$10$$.$PathUtils$.moveTo($DvtTreemapEventManager$$.x, 
    $DvtTreemapEventManager$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_innerRadius$, this.$_innerRadius$, this.$_angleExtent$ / 2, 0, $DvtTreemapDefaults$$.x, $DvtTreemapDefaults$$.y) + $dvt$$10$$.$PathUtils$.arcTo(this.$_innerRadius$, this.$_innerRadius$, this.$_angleExtent$ / 2, 0, $DvtTreemapEventManager$$.x, $DvtTreemapEventManager$$.y)), $DvtSunburstDefaults$$ += $dvt$$10$$.$PathUtils$.closePath());
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$_createExpandCollapseButton$ = function $$DvtSunburstNode$$$$$_createExpandCollapseButton$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$isDisclosed$();
    if(!$DvtSunburstDefaults$$ || !this.$isExpandCollapseEnabled$() || !this.$hasChildren$() && $DvtSunburstEventManager$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstEventManager$$ = $DvtSunburstEventManager$$ ? this.$_getCollapseButton$() : this.$_getExpandButton$(), $DvtTreemapDefaults$$ = $DvtSunburstNode$$.$_calcPointOnArc$(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
    $DvtSunburstEventManager$$.$setTranslate$($DvtTreemapDefaults$$.x - $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$ / 2, $DvtTreemapDefaults$$.y - $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$ / 2);
    $DvtSunburstDefaults$$.$addChild$($DvtSunburstEventManager$$);
    $DvtSunburstDefaults$$ = $dvt$$10$$.$Bundle$.$getTranslatedString$($dvt$$10$$.$Bundle$.$UTIL_PREFIX$, this.$isDisclosed$() ? "COLLAPSE" : "EXPAND");
    this.$_view$.$getEventManager$().$associate$($DvtSunburstEventManager$$, new $DvtTreePeer$$(this, this.getId(), $DvtSunburstDefaults$$));
    return $DvtSunburstEventManager$$
  };
  $DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($DvtSunburstDefaults$$) {
    if(!this.$_textStr$ || (!$DvtSunburstDefaults$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) || this == this.$_view$.$_root$ && this.$_angleExtent$ < $DvtSunburstNode$$.$TWO_PI$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSunburstEventManager$$ = $JSCompiler_alias_FALSE$$;
    "auto" == this.$_labelDisplay$ ? $DvtSunburstEventManager$$ = !$dvt$$10$$.$Agent$.$isPlatformIE$() && $dvt$$10$$.$Agent$.$getOS$() == $dvt$$10$$.$Agent$.$WINDOWS_OS$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$ : "rotated" == this.$_labelDisplay$ && ($DvtSunburstEventManager$$ = $JSCompiler_alias_TRUE$$);
    return $DvtSunburstEventManager$$ && this.$_angleExtent$ < this.$_view$.$_angleExtent$ ? this.$_createTextRotated$($DvtSunburstDefaults$$) : this.$_createTextHoriz$($DvtSunburstDefaults$$)
  };
  $DvtSunburstNode$$.prototype.$_createTextHoriz$ = function $$DvtSunburstNode$$$$$_createTextHoriz$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$;
    if(0 == this.$_innerRadius$) {
      $DvtSunburstEventManager$$ = {x:0, y:0}
    }else {
      $DvtSunburstEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2);
      var $DvtTreemapDefaults$$ = 3 * this.$GetTextSize$() / 2, $DvtTreemapEventManager$$ = $DvtSunburstNode$$.$_calcAngle$($DvtSunburstEventManager$$.x + $DvtTreemapDefaults$$ / 2, $DvtSunburstEventManager$$.y);
      if(!this.$ContainsAngle$($DvtSunburstNode$$.$_calcAngle$($DvtSunburstEventManager$$.x - $DvtTreemapDefaults$$ / 2, $DvtSunburstEventManager$$.y)) || !this.$ContainsAngle$($DvtTreemapEventManager$$)) {
        $DvtSunburstEventManager$$ = $JSCompiler_alias_NULL$$
      }
    }
    if($DvtSunburstEventManager$$) {
      $DvtTreemapDefaults$$ = new $dvt$$10$$.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$, $DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y, $JSCompiler_alias_NULL$$);
      $DvtTreemapDefaults$$.$setFontSize$(this.$GetTextSize$());
      this.$ApplyLabelTextStyle$($DvtTreemapDefaults$$);
      $DvtTreemapDefaults$$.$alignCenter$();
      $DvtTreemapDefaults$$.$alignMiddle$();
      $DvtTreemapDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      for(var $DvtTreemapEventManager$$ = $dvt$$10$$.$TextUtils$.$guessTextDimensions$($DvtTreemapDefaults$$), $DvtTreemapKeyboardHandler$$ = $DvtSunburstEventManager$$.x, $DvtTreemapLayoutSliceAndDice$$ = $DvtSunburstEventManager$$.x, $DvtTreemapLayoutSquarifying$$ = $DvtSunburstEventManager$$.y - $DvtTreemapEventManager$$.$h$ / 2, $DvtTreemapLayoutBase$$ = $DvtSunburstEventManager$$.y + $DvtTreemapEventManager$$.$h$ / 2, $DvtTreemapNode$$ = $JSCompiler_alias_TRUE$$;this.contains($DvtTreemapKeyboardHandler$$, 
      $DvtTreemapLayoutSquarifying$$) && this.contains($DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutBase$$) && $DvtTreemapNode$$;) {
        $DvtTreemapKeyboardHandler$$--, this.$_angleExtent$ > Math.PI && $DvtSunburstEventManager$$.x - $DvtTreemapKeyboardHandler$$ >= $DvtTreemapEventManager$$.$w$ / 2 && ($DvtTreemapNode$$ = $JSCompiler_alias_FALSE$$)
      }
      for($DvtTreemapNode$$ = $JSCompiler_alias_TRUE$$;this.contains($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutSquarifying$$) && this.contains($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutBase$$) && $DvtTreemapNode$$;) {
        $DvtTreemapLayoutSliceAndDice$$++, this.$_angleExtent$ > Math.PI && $DvtTreemapLayoutSliceAndDice$$ - $DvtSunburstEventManager$$.x >= $DvtTreemapEventManager$$.$w$ / 2 && ($DvtTreemapNode$$ = $JSCompiler_alias_FALSE$$)
      }
      $DvtTreemapKeyboardHandler$$ += 3;
      $DvtTreemapLayoutSliceAndDice$$ -= 3;
      $DvtSunburstEventManager$$ = 2 * Math.min($DvtSunburstEventManager$$.x - $DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$ - $DvtSunburstEventManager$$.x);
      $DvtSunburstEventManager$$ < $DvtTreemapEventManager$$.$w$ && ($DvtTreemapDefaults$$.$setX$(($DvtTreemapKeyboardHandler$$ + $DvtTreemapLayoutSliceAndDice$$) / 2), $DvtSunburstEventManager$$ = $DvtTreemapLayoutSliceAndDice$$ - $DvtTreemapKeyboardHandler$$);
      return $dvt$$10$$.$TextUtils$.$fitText$($DvtTreemapDefaults$$, $DvtSunburstEventManager$$, $DvtTreemapEventManager$$.$h$, $DvtSunburstDefaults$$) ? $DvtTreemapDefaults$$ : $JSCompiler_alias_NULL$$
    }
  };
  $DvtSunburstNode$$.prototype.$_createTextRotated$ = function $$DvtSunburstNode$$$$$_createTextRotated$$($DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = Math.max(this.$_innerRadius$, 10), $DvtTreemapDefaults$$ = this.$_outerRadius$ - $DvtSunburstEventManager$$ - $DvtSunburstNode$$.$TEXT_BUFFER_HORIZ$, $DvtTreemapEventManager$$ = 1.1 * this.$_angleExtent$ * ($DvtSunburstEventManager$$ + $DvtSunburstNode$$.$TEXT_BUFFER_HORIZ$);
    if(6 >= $DvtTreemapEventManager$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtTreemapKeyboardHandler$$ = new $dvt$$10$$.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$, 0, 0);
    $DvtTreemapKeyboardHandler$$.$setFontSize$(this.$GetTextSize$());
    this.$ApplyLabelTextStyle$($DvtTreemapKeyboardHandler$$);
    if(!$dvt$$10$$.$TextUtils$.$fitText$($DvtTreemapKeyboardHandler$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtSunburstDefaults$$)) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtTreemapDefaults$$ = ($DvtSunburstEventManager$$ + this.$_outerRadius$) / 2;
    if("inner" == this.$_labelHalign$ || "outer" == this.$_labelHalign$) {
      $DvtSunburstDefaults$$.$addChild$($DvtTreemapKeyboardHandler$$), $DvtSunburstDefaults$$ = $DvtTreemapKeyboardHandler$$.$getDimensions$().$w$, $DvtTreemapEventManager$$ = 0.75 * $DvtSunburstNode$$.$TEXT_BUFFER_HORIZ$, "inner" == this.$_labelHalign$ ? $DvtTreemapDefaults$$ = $DvtSunburstEventManager$$ + $DvtTreemapEventManager$$ + $DvtSunburstDefaults$$ / 2 : "outer" == this.$_labelHalign$ && ($DvtTreemapDefaults$$ = this.$_outerRadius$ - $DvtTreemapEventManager$$ - $DvtSunburstDefaults$$ / 2)
    }
    $DvtSunburstEventManager$$ = $DvtSunburstNode$$.$_calcPointOnArc$($DvtTreemapDefaults$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
    $DvtTreemapKeyboardHandler$$.$alignCenter$();
    $DvtTreemapKeyboardHandler$$.$alignMiddle$();
    $DvtSunburstDefaults$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
    $DvtSunburstDefaults$$ = $DvtSunburstDefaults$$ >= $DvtSunburstNode$$.$TWO_PI$ ? $DvtSunburstDefaults$$ - $DvtSunburstNode$$.$TWO_PI$ : $DvtSunburstDefaults$$;
    $DvtSunburstDefaults$$ = 0 > $DvtSunburstDefaults$$ ? $DvtSunburstDefaults$$ + $DvtSunburstNode$$.$TWO_PI$ : $DvtSunburstDefaults$$;
    $DvtSunburstDefaults$$ > 0.5 * Math.PI && $DvtSunburstDefaults$$ < 1.5 * Math.PI && ($DvtSunburstDefaults$$ += Math.PI);
    $DvtTreemapKeyboardHandler$$.$setRotation$($DvtSunburstDefaults$$);
    $DvtTreemapKeyboardHandler$$.$setTranslate$($DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y);
    $DvtTreemapKeyboardHandler$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    return $DvtTreemapKeyboardHandler$$
  };
  $DvtSunburstNode$$.$_findNodeIndex$ = function $$DvtSunburstNode$$$$_findNodeIndex$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    for(var $DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtSunburstDefaults$$.length;$DvtSunburstEventManager$$++) {
      if($dvt$$10$$ === $DvtSunburstDefaults$$[$DvtSunburstEventManager$$]) {
        return $DvtSunburstEventManager$$
      }
    }
    return-1
  };
  $DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
    this.$_expandButton$ || (this.$_expandButton$ = this.$_createExpandCollapseButton$(this.$_shape$));
    $DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
  };
  $DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
    this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = $JSCompiler_alias_NULL$$);
    $DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
  };
  $DvtSunburstNode$$.prototype.$updateShapes$ = function $$DvtSunburstNode$$$$$updateShapes$$($dvt$$10$$) {
    if(this.$_shape$) {
      var $DvtSunburstDefaults$$ = this.$_createPathCmd$();
      this.$_shape$.$setCmds$($DvtSunburstDefaults$$);
      this.$_showRootContent$() || (this.$_text$ && this.$_shape$.removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_textBackground$ && (this.$_shape$.removeChild(this.$_textBackground$), this.$_textBackground$ = $JSCompiler_alias_NULL$$));
      this.$_shape$.$setFill$(this.$GetFill$());
      if($dvt$$10$$) {
        $dvt$$10$$ = this.$getChildNodes$();
        for($DvtSunburstDefaults$$ = 0;$DvtSunburstDefaults$$ < $dvt$$10$$.length;$DvtSunburstDefaults$$++) {
          $dvt$$10$$[$DvtSunburstDefaults$$].$updateShapes$($JSCompiler_alias_TRUE$$)
        }
      }
    }
  };
  $DvtSunburstNode$$.prototype.$getDropSiteFeedback$ = function $$DvtSunburstNode$$$$$getDropSiteFeedback$$() {
    return this.$_shape$ instanceof $dvt$$10$$.$Circle$ ? new $dvt$$10$$.$Circle$(this.$_view$.$getCtx$(), this.$_shape$.$getCx$(), this.$_shape$.$getCy$(), this.$_shape$.$getRadius$()) : this.$_shape$ instanceof $dvt$$10$$.$Path$ ? new $dvt$$10$$.$Path$(this.$_view$.$getCtx$(), this.$_shape$.$getCmds$()) : $JSCompiler_alias_NULL$$
  };
  $DvtSunburstNode$$.prototype.$_getExpandButton$ = function $$DvtSunburstNode$$$$$_getExpandButton$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getCtx$(), $DvtSunburstEventManager$$ = this.$_view$.$getOptions$()._resources, $DvtTreemapDefaults$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.expand, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$), $DvtTreemapEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.expandOver, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$), 
    $DvtSunburstEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.expandDown, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$);
    $DvtTreemapDefaults$$.$setInvisibleFill$();
    $DvtTreemapEventManager$$.$setInvisibleFill$();
    $DvtSunburstEventManager$$.$setInvisibleFill$();
    $DvtSunburstDefaults$$ = new $dvt$$10$$.$Button$($DvtSunburstDefaults$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtSunburstEventManager$$);
    $DvtSunburstDefaults$$.$addEvtListener$($dvt$$10$$.$MouseEvent$.$CLICK$, this.$expandCollapseNode$, $JSCompiler_alias_FALSE$$, this);
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$_getCollapseButton$ = function $$DvtSunburstNode$$$$$_getCollapseButton$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getCtx$(), $DvtSunburstEventManager$$ = this.$_view$.$getOptions$()._resources, $DvtTreemapDefaults$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.collapse, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$), $DvtTreemapEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.collapseOver, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$), 
    $DvtSunburstEventManager$$ = new $dvt$$10$$.$Image$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$.collapseDown, 0, 0, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$, $DvtSunburstNode$$.$_EXPAND_ICON_SIZE$);
    $DvtTreemapDefaults$$.$setInvisibleFill$();
    $DvtTreemapEventManager$$.$setInvisibleFill$();
    $DvtSunburstEventManager$$.$setInvisibleFill$();
    $DvtSunburstDefaults$$ = new $dvt$$10$$.$Button$($DvtSunburstDefaults$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtSunburstEventManager$$);
    $DvtSunburstDefaults$$.$addEvtListener$($dvt$$10$$.$MouseEvent$.$CLICK$, this.$expandCollapseNode$, $JSCompiler_alias_FALSE$$, this);
    return $DvtSunburstDefaults$$
  };
  $DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$($dvt$$10$$) {
    this.$setDisclosed$(!this.$isDisclosed$());
    this.$_view$.$__expandCollapseNode$(this, this.$isDisclosed$());
    this.$UpdateAriaLabel$();
    $dvt$$10$$.stopPropagation()
  };
  $DvtSunburstNode$$.prototype.$_showRootContent$ = function $$DvtSunburstNode$$$$$_showRootContent$$() {
    return!this.$_parent$ && 0 == this.$_innerRadius$ && this.$_angleExtent$ == $DvtSunburstNode$$.$TWO_PI$
  };
  $DvtSunburstNode$$.prototype.$hasRootContent$ = function $$DvtSunburstNode$$$$$hasRootContent$$() {
    return this.$GetTemplate$() ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $DvtSunburstNode$$.prototype.$__getRadius$ = function $$DvtSunburstNode$$$$$__getRadius$$() {
    return this.$_radius$ != $JSCompiler_alias_NULL$$ ? Number(this.$_radius$) : this.$_parent$ ? 1 : this.$_bArtificialRoot$ ? $DvtSunburstNode$$.$_CENTER_ARTIFICIAL_ROOT_RADIUS$ : this.$hasRootContent$() ? $DvtSunburstNode$$.$_CENTER_WITH_CONTENT_RADIUS$ : $DvtSunburstNode$$.$_CENTER_NODE_RADIUS$
  };
  $DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
    var $DvtSunburstDefaults$$ = this.$_view$.$getOptions$(), $DvtSunburstEventManager$$ = [];
    this.$isSelectable$() && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslatedString$($dvt$$10$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isExpandCollapseEnabled$() && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslatedString$($dvt$$10$$.$Bundle$.$UTIL_PREFIX$, this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
    this.$isDrillReplaceEnabled$() && $DvtSunburstEventManager$$.push($dvt$$10$$.$Bundle$.$getTranslation$($DvtSunburstDefaults$$, "stateDrillable", $dvt$$10$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $dvt$$10$$.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $DvtSunburstEventManager$$)
  };
  $DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
    !$dvt$$10$$.$Agent$.$deferAriaCreation$() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtSunburstNode$$.prototype.$getDataContext$ = function $$DvtSunburstNode$$$$$getDataContext$$() {
    var $dvt$$10$$ = $DvtSunburstNode$$.$superclass$.$getDataContext$.call(this);
    $dvt$$10$$.radius = this.$__getRadius$();
    return $dvt$$10$$
  };
  var $DvtSunburstLayout$$ = {};
  $dvt$$10$$.$Obj$.$createSubclass$($DvtSunburstLayout$$, $dvt$$10$$.$Obj$);
  $DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($dvt$$10$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$) {
    var $DvtTreemapEventManager$$ = $DvtSunburstLayout$$.$_calcLargestRadius$($DvtSunburstDefaults$$);
    $DvtSunburstLayout$$.$_layout$($dvt$$10$$ / $DvtTreemapEventManager$$, $DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, 0)
  };
  $DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($DvtSunburstDefaults$$, $DvtSunburstEventManager$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$, $DvtTreemapEventManager$$, $DvtTreemapKeyboardHandler$$) {
    var $DvtTreemapLayoutSliceAndDice$$ = $DvtTreemapKeyboardHandler$$ + $DvtSunburstEventManager$$.$__getRadius$() * $DvtSunburstDefaults$$;
    $DvtSunburstEventManager$$.$setLayoutParams$($DvtTreemapKeyboardHandler$$, $DvtTreemapLayoutSliceAndDice$$, $DvtSunburstNode$$, $DvtTreemapDefaults$$);
    $DvtTreemapKeyboardHandler$$ = $DvtSunburstEventManager$$.$getChildNodes$();
    if($DvtTreemapKeyboardHandler$$ != $JSCompiler_alias_NULL$$ && $DvtSunburstEventManager$$.$isDisclosed$()) {
      "on" == $DvtTreemapEventManager$$ && ($DvtTreemapKeyboardHandler$$ = $DvtTreemapKeyboardHandler$$.slice(0), $DvtTreemapKeyboardHandler$$.sort(function($dvt$$10$$, $DvtSunburstDefaults$$) {
        return $DvtSunburstDefaults$$.$getSize$() - $dvt$$10$$.$getSize$()
      }));
      $dvt$$10$$.$Agent$.$isRightToLeft$($DvtSunburstEventManager$$.$_view$.$getCtx$()) && ($DvtTreemapKeyboardHandler$$ = $DvtTreemapKeyboardHandler$$.slice(0).reverse());
      var $DvtTreemapLayoutSquarifying$$ = 0;
      for($DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtTreemapKeyboardHandler$$.length;$DvtSunburstEventManager$$++) {
        $DvtTreemapLayoutSquarifying$$ += 0 < $DvtTreemapKeyboardHandler$$[$DvtSunburstEventManager$$].$getSize$() ? $DvtTreemapKeyboardHandler$$[$DvtSunburstEventManager$$].$getSize$() : 0
      }
      for($DvtSunburstEventManager$$ = 0;$DvtSunburstEventManager$$ < $DvtTreemapKeyboardHandler$$.length;$DvtSunburstEventManager$$++) {
        var $DvtTreemapLayoutBase$$ = $DvtTreemapKeyboardHandler$$[$DvtSunburstEventManager$$];
        if(!(0 >= $DvtTreemapLayoutBase$$.$getSize$())) {
          var $DvtTreemapNode$$ = $DvtTreemapLayoutBase$$.$getSize$() / $DvtTreemapLayoutSquarifying$$ * $DvtTreemapDefaults$$;
          $DvtSunburstLayout$$.$_layout$($DvtSunburstDefaults$$, $DvtTreemapLayoutBase$$, $DvtSunburstNode$$, $DvtTreemapNode$$, $DvtTreemapEventManager$$, $DvtTreemapLayoutSliceAndDice$$);
          $DvtSunburstNode$$ += $DvtTreemapNode$$
        }
      }
    }
  };
  $DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = 0, $DvtSunburstEventManager$$ = $dvt$$10$$.$getChildNodes$();
    if($DvtSunburstEventManager$$ && 0 < $DvtSunburstEventManager$$.length) {
      for(var $DvtSunburstNode$$ = 0;$DvtSunburstNode$$ < $DvtSunburstEventManager$$.length;$DvtSunburstNode$$++) {
        var $DvtTreemapDefaults$$ = $DvtSunburstLayout$$.$_calcLargestRadius$($DvtSunburstEventManager$$[$DvtSunburstNode$$]), $DvtSunburstDefaults$$ = Math.max($DvtSunburstDefaults$$, $DvtTreemapDefaults$$)
      }
      return $DvtSunburstDefaults$$ + $dvt$$10$$.$__getRadius$()
    }
    return $dvt$$10$$.$__getRadius$()
  };
  $dvt$$10$$.$Obj$.$createSubclass$($DvtSunburstEventManager$$, $DvtTreeEventManager$$);
  $DvtSunburstEventManager$$.$ROTATION_ID$ = "_rotationShape";
  $DvtSunburstEventManager$$.prototype.$OnMouseDown$ = function $$DvtSunburstEventManager$$$$$OnMouseDown$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    $DvtSunburstDefaults$$ && $DvtSunburstDefaults$$.getId && $DvtSunburstDefaults$$.getId() == $DvtSunburstEventManager$$.$ROTATION_ID$ && !this.$_bRotating$ ? (this.$_bRotating$ = $JSCompiler_alias_TRUE$$, $dvt$$10$$ = this.$_context$.$pageToStageCoords$($dvt$$10$$.pageX, $dvt$$10$$.pageY), this.$_view$.$__startRotation$($dvt$$10$$.x, $dvt$$10$$.y)) : $DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $dvt$$10$$)
  };
  $DvtSunburstEventManager$$.prototype.$OnMouseMove$ = function $$DvtSunburstEventManager$$$$$OnMouseMove$$($dvt$$10$$) {
    this.$_bRotating$ ? ($dvt$$10$$ = this.$_context$.$pageToStageCoords$($dvt$$10$$.pageX, $dvt$$10$$.pageY), this.$_view$.$__continueRotation$($dvt$$10$$.x, $dvt$$10$$.y)) : $DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $dvt$$10$$)
  };
  $DvtSunburstEventManager$$.prototype.$OnMouseUp$ = function $$DvtSunburstEventManager$$$$$OnMouseUp$$($dvt$$10$$) {
    this.$_bRotating$ ? (this.$_bRotating$ = $JSCompiler_alias_FALSE$$, this.$_view$.$__endRotation$()) : $DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $dvt$$10$$)
  };
  $DvtSunburstEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSunburstEventManager$$$$$ProcessKeyboardEvent$$($DvtSunburstDefaults$$) {
    var $DvtSunburstNode$$ = $JSCompiler_alias_TRUE$$, $DvtTreemapDefaults$$ = $DvtSunburstDefaults$$.keyCode, $DvtTreemapEventManager$$ = this.$getFocus$(), $DvtTreemapKeyboardHandler$$ = this.$_view$;
    $DvtTreemapEventManager$$.$isExpandCollapseEnabled$() && ($dvt$$10$$.$KeyboardEvent$.$isPlus$($DvtSunburstDefaults$$) && !$DvtTreemapEventManager$$.$isDisclosed$() || $dvt$$10$$.$KeyboardEvent$.$isMinus$($DvtSunburstDefaults$$) && $DvtTreemapEventManager$$.$isDisclosed$() || $DvtSunburstDefaults$$.ctrlKey && $DvtTreemapDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$ENTER$) ? ($DvtTreemapEventManager$$.$expandCollapseNode$(), $dvt$$10$$.$EventManager$.$consumeEvent$($DvtSunburstDefaults$$)) : $DvtTreemapKeyboardHandler$$ && 
    $DvtTreemapKeyboardHandler$$.$__isRotationEnabled$() && ($DvtTreemapDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$LEFT_ARROW$ || $DvtTreemapDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$RIGHT_ARROW$) && !$DvtSunburstDefaults$$.ctrlKey && $DvtSunburstDefaults$$.altKey && $DvtSunburstDefaults$$.shiftKey ? ($DvtTreemapDefaults$$ = $DvtTreemapDefaults$$ == $dvt$$10$$.$KeyboardEvent$.$LEFT_ARROW$ ? -5 * (Math.PI / 180) : 5 * (Math.PI / 180), $DvtTreemapKeyboardHandler$$.$__setRotationAnchor$(0), $DvtTreemapKeyboardHandler$$.$__rotate$($DvtTreemapDefaults$$), 
    $DvtTreemapKeyboardHandler$$.$__endRotation$(), $dvt$$10$$.$EventManager$.$consumeEvent$($DvtSunburstDefaults$$)) : $DvtSunburstNode$$ = $DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $DvtSunburstDefaults$$);
    return $DvtSunburstNode$$
  };
  $DvtSunburstEventManager$$.$ROTATE_KEY$ = "rotateKey";
  $DvtSunburstEventManager$$.prototype.$HandleImmediateTouchStartInternal$ = function $$DvtSunburstEventManager$$$$$HandleImmediateTouchStartInternal$$($dvt$$10$$) {
    var $DvtSunburstDefaults$$ = this.$GetLogicalObject$($dvt$$10$$.target);
    $DvtSunburstDefaults$$ && ($DvtSunburstDefaults$$.getId && $DvtSunburstDefaults$$.getId() == $DvtSunburstEventManager$$.$ROTATION_ID$) && this.$TouchManager$.$processAssociatedTouchAttempt$($dvt$$10$$, this.$RotateStartTouch$, this)
  };
  $DvtSunburstEventManager$$.prototype.$HandleImmediateTouchMoveInternal$ = function $$DvtSunburstEventManager$$$$$HandleImmediateTouchMoveInternal$$($dvt$$10$$) {
    this.$TouchManager$.$processAssociatedTouchMove$($dvt$$10$$, $DvtSunburstEventManager$$.$ROTATE_KEY$)
  };
  $DvtSunburstEventManager$$.prototype.$HandleImmediateTouchEndInternal$ = function $$DvtSunburstEventManager$$$$$HandleImmediateTouchEndInternal$$($dvt$$10$$) {
    this.$TouchManager$.$processAssociatedTouchEnd$($dvt$$10$$, $DvtSunburstEventManager$$.$ROTATE_KEY$)
  };
  $DvtSunburstEventManager$$.prototype.$RotateStartTouch$ = function $$DvtSunburstEventManager$$$$$RotateStartTouch$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    if(1 >= this.$TouchManager$.$getTouchIdsForObj$($DvtSunburstEventManager$$.$ROTATE_KEY$).length) {
      this.$TouchManager$.$saveProcessedTouch$($DvtSunburstDefaults$$.identifier, $DvtSunburstEventManager$$.$ROTATE_KEY$, $DvtSunburstEventManager$$.$ROTATE_KEY$, $DvtSunburstEventManager$$.$ROTATE_KEY$, this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
      this.$TouchManager$.$setTooltipEnabled$($DvtSunburstDefaults$$.identifier, $JSCompiler_alias_FALSE$$);
      var $DvtSunburstNode$$ = this.$_context$.$pageToStageCoords$($DvtSunburstDefaults$$.pageX, $DvtSunburstDefaults$$.pageY);
      this.$_view$.$__startRotation$($DvtSunburstNode$$.x, $DvtSunburstNode$$.y);
      $dvt$$10$$.$blockTouchHold$()
    }
  };
  $DvtSunburstEventManager$$.prototype.$RotateMoveTouch$ = function $$DvtSunburstEventManager$$$$$RotateMoveTouch$$($dvt$$10$$, $DvtSunburstDefaults$$) {
    var $DvtSunburstEventManager$$ = this.$_context$.$pageToStageCoords$($DvtSunburstDefaults$$.pageX, $DvtSunburstDefaults$$.pageY);
    this.$_view$.$__continueRotation$($DvtSunburstEventManager$$.x, $DvtSunburstEventManager$$.y);
    $dvt$$10$$.preventDefault()
  };
  $DvtSunburstEventManager$$.prototype.$RotateEndTouch$ = function $$DvtSunburstEventManager$$$$$RotateEndTouch$$() {
    this.$_view$.$__endRotation$()
  };
  $dvt$$10$$.$Bundle$.$addDefaultStrings$($dvt$$10$$.$Bundle$.$SUNBURST_PREFIX$, {COLOR:"Color", OTHER:"Other", SIZE:"Size"});
  $dvt$$10$$.$Obj$.$createSubclass$($DvtSunburstDefaults$$, $DvtTreeDefaults$$);
  $DvtSunburstDefaults$$.$VERSION_1$ = {nodeDefaults:{borderColor:"rgba(255,255,255,0.3)", borderWidth:1, hoverColor:"#FFFFFF", labelDisplay:"auto", labelHalign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, rotation:"on", startAngle:90};
  $dvt$$10$$.$exportProperty$($dvt$$10$$, "Sunburst", $dvt$$10$$.$Sunburst$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$, "Treemap", $dvt$$10$$.$Treemap$);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$Treemap$, "newInstance", $dvt$$10$$.$Treemap$.newInstance);
  $dvt$$10$$.$exportProperty$($dvt$$10$$.$Sunburst$, "newInstance", $dvt$$10$$.$Sunburst$.newInstance);
  $dvt$$10$$.$exportProperty$($DvtTreeView$$.prototype, "getAutomation", $DvtTreeView$$.prototype.$getAutomation$);
  $dvt$$10$$.$exportProperty$($DvtTreeView$$.prototype, "destroy", $DvtTreeView$$.prototype.$destroy$);
  $dvt$$10$$.$exportProperty$($DvtTreeView$$.prototype, "highlight", $DvtTreeView$$.prototype.$highlight$);
  $dvt$$10$$.$exportProperty$($DvtTreeView$$.prototype, "render", $DvtTreeView$$.prototype.$render$);
  $dvt$$10$$.$exportProperty$($DvtTreeView$$.prototype, "select", $DvtTreeView$$.prototype.select);
  $dvt$$10$$.$exportProperty$($DvtTreeAutomation$$.prototype, "getDomElementForSubId", $DvtTreeAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$10$$.$exportProperty$($DvtTreeAutomation$$.prototype, "getNode", $DvtTreeAutomation$$.prototype.$getNode$)
})(dvt);

  return dvt;
});
