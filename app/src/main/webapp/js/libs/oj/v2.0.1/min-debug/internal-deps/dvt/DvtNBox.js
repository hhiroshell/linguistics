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

dvt.$NBox$ = function $dvt$$NBox$$($context$$252$$, $callback$$86$$, $callbackObj$$54$$) {
  this.Init($context$$252$$, $callback$$86$$, $callbackObj$$54$$)
};
$goog$exportPath_$$("dvt.NBox", dvt.$NBox$);
dvt.$Obj$.$createSubclass$(dvt.$NBox$, dvt.$BaseComponent$);
dvt.$NBox$.newInstance = function $dvt$$NBox$$newInstance$($context$$253$$, $callback$$87$$, $callbackObj$$55$$) {
  return new dvt.$NBox$($context$$253$$, $callback$$87$$, $callbackObj$$55$$)
};
dvt.$NBox$.newInstance = dvt.$NBox$.newInstance;
dvt.$NBox$.$getDefaults$ = function $dvt$$NBox$$$getDefaults$$($skin$$9$$) {
  return(new $DvtNBoxDefaults$$).$getDefaults$($skin$$9$$)
};
dvt.$NBox$.getDefaults = dvt.$NBox$.$getDefaults$;
dvt.$NBox$.prototype.Init = function $dvt$$NBox$$$Init$($context$$254$$, $callback$$88$$, $callbackObj$$56$$) {
  dvt.$NBox$.$superclass$.Init.call(this, $context$$254$$, $callback$$88$$, $callbackObj$$56$$);
  this.$Defaults$ = new $DvtNBoxDefaults$$;
  this.$EventManager$ = new $DvtNBoxEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  this.$_dragSource$ = new dvt.$DragSource$($context$$254$$);
  this.$_dropTarget$ = new $DvtNBoxDropTarget$$(this);
  this.$EventManager$.$setDragSource$(this.$_dragSource$);
  dvt.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("nbox1000" + Math.floor(1E9 * Math.random()));
  this.$legend$ = this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_animationAllowed$ = $JSCompiler_alias_TRUE$$
};
dvt.$NBox$.prototype.$SetOptions$ = function $dvt$$NBox$$$$SetOptions$$($options$$189_selectionMode$$3$$) {
  $options$$189_selectionMode$$3$$ || ($options$$189_selectionMode$$3$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$(this));
  $options$$189_selectionMode$$3$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$189_selectionMode$$3$$), $DvtNBoxDataUtils$$.$processDataObject$(this), dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$[dvt.$NBoxConstants$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[dvt.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  this.$_displayables$ = [];
  $options$$189_selectionMode$$3$$ = this.$Options$[dvt.$NBoxConstants$.$SELECTION_MODE$];
  this.$_selectionHandler$ = "single" == $options$$189_selectionMode$$3$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $options$$189_selectionMode$$3$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
dvt.$NBox$.prototype.$render$ = function $dvt$$NBox$$$$render$$($options$$190$$, $container$$127_width$$79$$, $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$) {
  var $ah$$2_animationOnDataChange$$2$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $oldNBox$$ = $JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $ah$$2_animationOnDataChange$$2$$ && ($oldNBox$$ = {options:this.$Options$, getOptions:$JSCompiler_get$$("options"), displayables:this.$_displayables$, getDisplayables:$JSCompiler_get$$("displayables"), id:this.getId(), getId:$JSCompiler_get$$("id")}, $oldNBox$$.$getOptions$ = $oldNBox$$.getOptions, $oldNBox$$.$getDisplayables$ = $oldNBox$$.getDisplayables, $oldNBox$$.getId = $oldNBox$$.getId);
  this.$__cleanUp$();
  this.$SetOptions$($options$$190$$);
  !isNaN($container$$127_width$$79$$) && !isNaN($bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$) && (this.$Width$ = $container$$127_width$$79$$, this.$Height$ = $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$);
  $container$$127_width$$79$$ = new dvt.$Container$(this.$getCtx$());
  this.$addChild$($container$$127_width$$79$$);
  $DvtNBoxRenderer$$.$render$(this, $container$$127_width$$79$$, new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$));
  $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$ = [this];
  var $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ = $DvtNBoxDataUtils$$.$getLegend$(this);
  if($animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ && $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$.sections) {
    var $animationDuration$$7_panelDrawer$$2$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$, "panelDrawer");
    $animationDuration$$7_panelDrawer$$2$$ && ($bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$.push($animationDuration$$7_panelDrawer$$2$$), $animationDuration$$7_panelDrawer$$2$$.$isDisclosed$() && ($animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$, "legend"), $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$.push($animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$)))
  }
  this.$getCtx$().$setKeyboardFocusArray$($bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$);
  $options$$190$$ && ($DvtNBoxDataUtils$$.$getDrawer$(this) && $DvtNBoxDataUtils$$.$getGrouping$(this)) && ($bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$), this.$EventManager$.$setFocused$($JSCompiler_alias_FALSE$$));
  this.$_updateKeyboardFocusEffect$();
  this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  var $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ = $DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $animationDuration$$7_panelDrawer$$2$$ = $DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $bounds$$106$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
  $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$ = $JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $ah$$2_animationOnDataChange$$2$$ && $options$$190$$ && ((this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $ah$$2_animationOnDataChange$$2$$, this.$_container$, $container$$127_width$$79$$, $bounds$$106$$, $animationDuration$$7_panelDrawer$$2$$)) ? $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$ = $JSCompiler_alias_TRUE$$ : (this.$_deleteContainer$ = new dvt.$Container$(this.$getCtx$(), "DeleteContainer"), this.$addChild$(this.$_deleteContainer$), 
  $ah$$2_animationOnDataChange$$2$$ = new $DvtNBoxDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$, $oldNBox$$, this), $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ = $DvtNBoxRenderer$$.$getNodeOrderFunction$(this), $ah$$2_animationOnDataChange$$2$$.$constructAnimation$([$oldNBox$$], [this]), this.$_animation$ = $ah$$2_animationOnDataChange$$2$$.$getAnimation$(), dvt.$Playable$.$appendOnEnd$(this.$_animation$, $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$, 
  this))) : "none" !== $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$ && (this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$2_legend$$27_legendData$$3_nodeOrderFunction$$, $container$$127_width$$79$$, $bounds$$106$$, $animationDuration$$7_panelDrawer$$2$$));
  this.$_animation$ && (this.$setMouseEnabled$($JSCompiler_alias_FALSE$$), dvt.$Playable$.$appendOnEnd$(this.$_animation$, this.$_onAnimationEnd$, this), dvt.$Agent$.$isPlatformIE$() && 12 <= dvt.$Agent$.$getVersion$() && dvt.$Playable$.$appendOnEnd$(this.$_animation$, function() {
    this.$_animationAllowed$ = $JSCompiler_alias_FALSE$$;
    this.$render$($options$$190$$);
    this.$_animationAllowed$ = $JSCompiler_alias_TRUE$$
  }, this), this.$_animation$.play());
  $bBlackBoxUpdate$$2_drawer_height$$71_keyboardHandlers$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
  this.$_container$ = $container$$127_width$$79$$;
  this.$UpdateAriaAttributes$()
};
dvt.$NBox$.prototype.render = dvt.$NBox$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = dvt.$NBox$.prototype;
$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = $JSCompiler_alias_NULL$$;
  this.$_animationStopped$ = $JSCompiler_alias_FALSE$$;
  this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$setMouseEnabled$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$17$$) {
  return new $DvtNBoxKeyboardHandler$$($manager$$17$$, this)
};
$JSCompiler_prototypeAlias$$.$getChildContainer$ = $JSCompiler_get$$("$_container$");
$JSCompiler_prototypeAlias$$.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$() {
  var $navigable$$9$$ = this.$EventManager$.$getFocus$(), $isShowingKeyboardFocusEffect$$ = $JSCompiler_alias_FALSE$$;
  if($navigable$$9$$) {
    var $newNavigable$$, $isShowingKeyboardFocusEffect$$ = $navigable$$9$$.$isShowingKeyboardFocusEffect$();
    $navigable$$9$$.$getKeyboardFocusDisplayable$ && ($newNavigable$$ = $navigable$$9$$.$getKeyboardFocusDisplayable$());
    $newNavigable$$ && $isShowingKeyboardFocusEffect$$ && $newNavigable$$.$showKeyboardFocusEffect$();
    this.$EventManager$.$setFocus$($newNavigable$$)
  }
};
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$309$$) {
  var $disclosure_type$$150$$ = $event$$309$$.type, $options$$191$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$(this);
  "categoryHide" == $disclosure_type$$150$$ || "categoryShow" == $disclosure_type$$150$$ ? $event$$309$$ = this.$_processHideShowEvent$($event$$309$$) : "categoryHighlight" == $disclosure_type$$150$$ ? $event$$309$$ = this.$_processRolloverEvent$($event$$309$$) : "selection" == $disclosure_type$$150$$ ? $event$$309$$ = this.$_processSelectionEvent$($event$$309$$) : $options$$191$$._legend && $disclosure_type$$150$$ == dvt.$PanelDrawerEvent$.$TYPE$ && ($disclosure_type$$150$$ = $event$$309$$.$getSubType$() == 
  dvt.$PanelDrawerEvent$.$SUBTYPE_HIDE$ ? "undisclosed" : "disclosed", $event$$309$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$LEGEND_DISCLOSURE$, $disclosure_type$$150$$), $options$$191$$[dvt.$NBoxConstants$.$LEGEND_DISCLOSURE$] = $disclosure_type$$150$$, this.$render$($options$$191$$));
  $event$$309$$ && this.dispatchEvent($event$$309$$)
};
$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($event$$310$$) {
  var $options$$192$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$(this), $hiddenCategories$$10$$ = $options$$192$$[dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$];
  $hiddenCategories$$10$$ || ($hiddenCategories$$10$$ = []);
  var $categoryIndex$$2$$ = dvt.$ArrayUtils$.$getIndex$($hiddenCategories$$10$$, $event$$310$$.category);
  "categoryHide" == $event$$310$$.type && -1 == $categoryIndex$$2$$ && $hiddenCategories$$10$$.push($event$$310$$.category);
  "categoryShow" == $event$$310$$.type && -1 != $categoryIndex$$2$$ && $hiddenCategories$$10$$.splice($categoryIndex$$2$$, 1);
  0 == $hiddenCategories$$10$$.length && ($hiddenCategories$$10$$ = $JSCompiler_alias_NULL$$);
  $event$$310$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$, $hiddenCategories$$10$$);
  $options$$192$$[dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$] = $hiddenCategories$$10$$;
  this.$render$($options$$192$$);
  return $event$$310$$
};
$JSCompiler_prototypeAlias$$.$_processRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$_processRolloverEvent$$($event$$311$$) {
  this.$_processHighlighting$($event$$311$$.categories);
  return $event$$311$$
};
$JSCompiler_prototypeAlias$$.$_processSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processSelectionEvent$$($event$$312_selectedMap$$) {
  var $eventSelection_objects$$3_selection$$15$$ = $event$$312_selectedMap$$.selection, $i$$492_selectedItems$$ = $JSCompiler_alias_NULL$$;
  if($eventSelection_objects$$3_selection$$15$$) {
    $event$$312_selectedMap$$ = {};
    for($i$$492_selectedItems$$ = 0;$i$$492_selectedItems$$ < $eventSelection_objects$$3_selection$$15$$.length;$i$$492_selectedItems$$++) {
      $event$$312_selectedMap$$[$eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$]] = $JSCompiler_alias_TRUE$$
    }
    var $eventSelection_objects$$3_selection$$15$$ = this.$getObjects$(), $drawer$$1$$ = $JSCompiler_alias_NULL$$;
    if($DvtNBoxDataUtils$$.$getGrouping$(this)) {
      for($i$$492_selectedItems$$ = 0;$i$$492_selectedItems$$ < $eventSelection_objects$$3_selection$$15$$.length;$i$$492_selectedItems$$++) {
        if($eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$] instanceof $DvtNBoxCategoryNode$$) {
          if($event$$312_selectedMap$$[$eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$].getId()]) {
            $event$$312_selectedMap$$[$eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$].getId()] = $JSCompiler_alias_FALSE$$;
            for(var $nodeIndices$$1$$ = $eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$].getData().nodeIndices, $j$$68$$ = 0;$j$$68$$ < $nodeIndices$$1$$.length;$j$$68$$++) {
              var $node$$246$$ = $DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$1$$[$j$$68$$]);
              $event$$312_selectedMap$$[$node$$246$$[dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
            }
          }
        }else {
          $eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$] instanceof $DvtNBoxDrawer$$ && ($drawer$$1$$ = $eventSelection_objects$$3_selection$$15$$[$i$$492_selectedItems$$])
        }
      }
    }
    var $eventSelection_objects$$3_selection$$15$$ = [], $i$$492_selectedItems$$ = [], $id$$125$$;
    for($id$$125$$ in $event$$312_selectedMap$$) {
      $event$$312_selectedMap$$[$id$$125$$] && ($eventSelection_objects$$3_selection$$15$$.push($id$$125$$), $i$$492_selectedItems$$.push($id$$125$$))
    }
    $event$$312_selectedMap$$ = dvt.$EventFactory$.$newSelectionEvent$($eventSelection_objects$$3_selection$$15$$)
  }
  $DvtNBoxDataUtils$$.$setSelectedItems$(this, $i$$492_selectedItems$$);
  $drawer$$1$$ && $drawer$$1$$.$UpdateAccessibilityAttributes$();
  return $event$$312_selectedMap$$
};
$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$25$$) {
  this.$_peers$.push($peer$$25$$)
};
$JSCompiler_prototypeAlias$$.$getObjects$ = $JSCompiler_get$$("$_peers$");
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$Width$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$Height$");
$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = $JSCompiler_get$$("$_selectionHandler$");
$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$19$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$19$$] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$7$$, $oldNBox$$1$$) {
  $DvtNBoxRenderer$$.$animateUpdate$($animationHandler$$7$$, $oldNBox$$1$$, this)
};
function $JSCompiler_StaticMethods_getSanitizedOptions$$($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
  return dvt.$JsonUtils$.$clone$($JSCompiler_StaticMethods_getSanitizedOptions$self$$.$getOptions$(), function($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
    return 0 != $JSCompiler_StaticMethods_getSanitizedOptions$self$$.indexOf("__")
  })
}
$JSCompiler_prototypeAlias$$.$getSubcomponentStyles$ = function $$JSCompiler_prototypeAlias$$$$getSubcomponentStyles$$() {
  return{}
};
$JSCompiler_prototypeAlias$$.$__isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$__isDragAvailable$$($clientIds$$7$$) {
  return this.$_selectionHandler$ ? $clientIds$$7$$[0] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($node$$247_rowKeys$$1$$) {
  $node$$247_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$247_rowKeys$$1$$, $JSCompiler_alias_FALSE$$), this.$EventManager$.$fireSelectionEvent$());
  $node$$247_rowKeys$$1$$ = [];
  for(var $selectionMap$$ = {}, $selectedIds$$5_selection$$16$$ = this.$_selectionHandler$.getSelection(), $i$$493$$ = 0;$i$$493$$ < $selectedIds$$5_selection$$16$$.length;$i$$493$$++) {
    var $id$$126_item$$37$$ = $selectedIds$$5_selection$$16$$[$i$$493$$];
    if($id$$126_item$$37$$ instanceof $DvtNBoxNode$$) {
      $id$$126_item$$37$$ = $id$$126_item$$37$$.getData()[dvt.$NBoxConstants$.ID], $node$$247_rowKeys$$1$$.push($id$$126_item$$37$$), $selectionMap$$[$id$$126_item$$37$$] = $JSCompiler_alias_TRUE$$
    }else {
      if($id$$126_item$$37$$ instanceof $DvtNBoxCategoryNode$$) {
        for(var $nodeIndices$$2$$ = $id$$126_item$$37$$.getData().nodeIndices, $j$$69$$ = 0;$j$$69$$ < $nodeIndices$$2$$.length;$j$$69$$++) {
          var $nodeId$$143$$ = $DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$69$$])[dvt.$NBoxConstants$.ID];
          $node$$247_rowKeys$$1$$.push($nodeId$$143$$);
          $selectionMap$$[$nodeId$$143$$] = $JSCompiler_alias_TRUE$$
        }
        $selectionMap$$[$id$$126_item$$37$$.getData()[dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
      }
    }
  }
  $selectedIds$$5_selection$$16$$ = this.$_selectionHandler$.$getSelectedIds$();
  for($i$$493$$ = 0;$i$$493$$ < $selectedIds$$5_selection$$16$$.length;$i$$493$$++) {
    if($id$$126_item$$37$$ = $selectedIds$$5_selection$$16$$[$i$$493$$], !$selectionMap$$[$id$$126_item$$37$$]) {
      if(isNaN($DvtNBoxDataUtils$$.$getNodeIndex$(this, $id$$126_item$$37$$))) {
        if($DvtNBoxDataUtils$$.$getGrouping$(this) && $DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$126_item$$37$$)) {
          $nodeIndices$$2$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$126_item$$37$$).nodeIndices;
          for($j$$69$$ = 0;$j$$69$$ < $nodeIndices$$2$$.length;$j$$69$$++) {
            $nodeId$$143$$ = $DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$69$$])[dvt.$NBoxConstants$.ID], $selectionMap$$[$nodeId$$143$$] || ($node$$247_rowKeys$$1$$.push($nodeId$$143$$), $selectionMap$$[$nodeId$$143$$] = $JSCompiler_alias_TRUE$$)
          }
          $selectionMap$$[$id$$126_item$$37$$] = $JSCompiler_alias_TRUE$$
        }
      }else {
        $node$$247_rowKeys$$1$$.push($id$$126_item$$37$$), $selectionMap$$[$id$$126_item$$37$$] = $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $node$$247_rowKeys$$1$$
};
$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  return this.$_selectionHandler$.getSelection().slice(0)
};
function $JSCompiler_StaticMethods___getCellUnderPoint$$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $x$$158$$, $y$$136$$) {
  for(var $cellCount$$ = $DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$) * $DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$), $i$$494$$ = 0;$i$$494$$ < $cellCount$$;$i$$494$$++) {
    var $cell$$ = $DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $i$$494$$));
    if($cell$$.contains($x$$158$$, $y$$136$$)) {
      return $cell$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($cell$$1$$) {
  this.$_dropSiteFeedback$ && (this.$_dropSiteFeedback$.getParent().removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = $JSCompiler_alias_NULL$$);
  $cell$$1$$ && (this.$_dropSiteFeedback$ = $cell$$1$$.$renderDropSiteFeedback$());
  return this.$_dropSiteFeedback$
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtNBoxAutomation$$(this));
  return this.$Automation$
};
dvt.$NBox$.prototype.getAutomation = dvt.$NBox$.prototype.$getAutomation$;
dvt.$NBox$.prototype.$GetComponentDescription$ = function $dvt$$NBox$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NBOX", $DvtNBoxDataUtils$$.$getColumnCount$(this) * $DvtNBoxDataUtils$$.$getRowCount$(this))
};
dvt.$NBox$.prototype.$highlight$ = function $dvt$$NBox$$$$highlight$$($categories$$14$$) {
  this.$Options$.highlightedCategories = dvt.$JsonUtils$.$clone$($categories$$14$$);
  this.$_processHighlighting$($categories$$14$$)
};
dvt.$NBox$.prototype.highlight = dvt.$NBox$.prototype.$highlight$;
$JSCompiler_prototypeAlias$$ = dvt.$NBox$.prototype;
$JSCompiler_prototypeAlias$$.$_processHighlighting$ = function $$JSCompiler_prototypeAlias$$$$_processHighlighting$$($categories$$15$$) {
  var $displayables$$16$$ = $JSCompiler_StaticMethods_getNodeDisplayables$$(this), $cellCount$$1_highlightedMap$$ = $DvtNBoxDataUtils$$.$getRowCount$(this) * $DvtNBoxDataUtils$$.$getColumnCount$(this);
  this.$getOptions$().__highlightedMap = $JSCompiler_alias_NULL$$;
  for($i$$495$$ = 0;$i$$495$$ < $cellCount$$1_highlightedMap$$;$i$$495$$++) {
    var $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $DvtNBoxDataUtils$$.$getCell$(this, $i$$495$$), $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$);
    $DvtNBoxCellRenderer$$.$renderHeader$(this, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$, $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$, $JSCompiler_alias_FALSE$$)
  }
  $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$(this);
  $cellCount$$1_highlightedMap$$ = {};
  if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$) {
    for(var $i$$495$$ = 0;$i$$495$$ < $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.length;$i$$495$$++) {
      $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$[$i$$495$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  for($i$$495$$ = 0;$i$$495$$ < $displayables$$16$$.length;$i$$495$$++) {
    if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $categories$$15$$) {
      if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = 0 < $categories$$15$$.length) {
        a: {
          $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $displayables$$16$$[$i$$495$$];
          if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ instanceof $DvtNBoxNode$$) {
            if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.$getCategories$()) {
              $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = "all" == this.$getOptions$()[dvt.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? dvt.$ArrayUtils$.$hasAllItems$($categories$$15$$, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.$getCategories$()) : dvt.$ArrayUtils$.$hasAnyItem$($categories$$15$$, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.$getCategories$());
              break a
            }
          }else {
            if($JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ instanceof $DvtNBoxCategoryNode$$) {
              for(var $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.getData(), $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$ = $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.nodeIndices.length, 
              $i$$inline_3742_j$$70$$ = 0;$i$$inline_3742_j$$70$$ < $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$;$i$$inline_3742_j$$70$$++) {
                var $nodeData$$inline_3743$$ = $DvtNBoxDataUtils$$.$getNode$(this, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.nodeIndices[$i$$inline_3742_j$$70$$]);
                if($nodeData$$inline_3743$$[dvt.$NBoxConstants$.$CATEGORIES$] && ("all" == this.$getOptions$()[dvt.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? dvt.$ArrayUtils$.$hasAllItems$($categories$$15$$, $nodeData$$inline_3743$$[dvt.$NBoxConstants$.$CATEGORIES$]) : dvt.$ArrayUtils$.$hasAnyItem$($categories$$15$$, $nodeData$$inline_3743$$[dvt.$NBoxConstants$.$CATEGORIES$]))) {
                  $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $JSCompiler_alias_TRUE$$;
                  break a
                }
              }
            }
          }
          $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $JSCompiler_alias_FALSE$$
        }
        $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = !$JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$
      }
    }
    $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ ? $displayables$$16$$[$i$$495$$].$setAlpha$($DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $displayables$$16$$[$i$$495$$].$setAlpha$(1);
    if($displayables$$16$$[$i$$495$$] instanceof $DvtNBoxCategoryNode$$) {
      $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$ = 0;
      $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$ = $displayables$$16$$[$i$$495$$].getData();
      for($i$$inline_3742_j$$70$$ = 0;$i$$inline_3742_j$$70$$ < $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.nodeIndices.length;$i$$inline_3742_j$$70$$++) {
        $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.nodeIndices[$i$$inline_3742_j$$70$$]] && ($bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$ += 1)
      }
      $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.highlightedCount = $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$;
      $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$) != $JSCompiler_alias_NULL$$ || $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$) != 
      $JSCompiler_alias_NULL$$;
      $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $displayables$$16$$[$i$$495$$].getData(), $displayables$$16$$[$i$$495$$], $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.__scale, $bIndicator_categoryNodeCount$$inline_3741_cell$$2_count$$14$$, $JSCompiler_inline_result$$176_JSCompiler_temp$$174_JSCompiler_temp$$175_cellData_data$$59_data$$inline_3740_disp$$inline_3739_highlightedItems$$.__gap)
    }
  }
};
function $JSCompiler_StaticMethods_getNodeDisplayables$$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) {
  for(var $dataObjects$$ = [], $displayable$$42_groupInfo_nodeCount$$3$$ = $DvtNBoxDataUtils$$.$getNodeCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$497$$ = 0;$groupBehavior_i$$497$$ < $displayable$$42_groupInfo_nodeCount$$3$$;$groupBehavior_i$$497$$++) {
    $dataObjects$$.push($DvtNBoxDataUtils$$.$getNode$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $groupBehavior_i$$497$$))
  }
  $groupBehavior_i$$497$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($JSCompiler_StaticMethods_getNodeDisplayables$self$$);
  if($displayable$$42_groupInfo_nodeCount$$3$$ = $JSCompiler_StaticMethods_getNodeDisplayables$self$$.$getOptions$().__groups) {
    if($groupBehavior_i$$497$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$2$$ = $DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) * $DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$497$$ = 0;$groupBehavior_i$$497$$ < $cellCount$$2$$;$groupBehavior_i$$497$$++) {
        var $cellGroups$$ = $displayable$$42_groupInfo_nodeCount$$3$$[$groupBehavior_i$$497$$ + ""], $displayables$$17_id$$127$$;
        for($displayables$$17_id$$127$$ in $cellGroups$$) {
          $dataObjects$$.push($cellGroups$$[$displayables$$17_id$$127$$])
        }
      }
    }else {
      for($displayables$$17_id$$127$$ in $displayable$$42_groupInfo_nodeCount$$3$$) {
        $dataObjects$$.push($displayable$$42_groupInfo_nodeCount$$3$$[$displayables$$17_id$$127$$])
      }
    }
  }
  $displayables$$17_id$$127$$ = [];
  for($groupBehavior_i$$497$$ = 0;$groupBehavior_i$$497$$ < $dataObjects$$.length;$groupBehavior_i$$497$$++) {
    ($displayable$$42_groupInfo_nodeCount$$3$$ = $DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $dataObjects$$[$groupBehavior_i$$497$$])) && $displayables$$17_id$$127$$.push($displayable$$42_groupInfo_nodeCount$$3$$)
  }
  return $displayables$$17_id$$127$$
}
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$17$$, $mouseY$$17$$, $clientIds$$8$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$8$$)
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$18$$, $mouseY$$18$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$18$$, $mouseY$$18$$)
};
$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$19$$, $mouseY$$19$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$19$$, $mouseY$$19$$)
};
$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$20$$, $mouseY$$20$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$20$$, $mouseY$$20$$)
};
$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$21$$, $mouseY$$21$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$21$$, $mouseY$$21$$)
};
$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$1$$, $yOffset$$3$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$1$$, $yOffset$$3$$)
};
$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
$JSCompiler_prototypeAlias$$.$acceptDrag$ = function $$JSCompiler_prototypeAlias$$$$acceptDrag$$($mouseX$$22$$, $mouseY$$22$$, $clientIds$$9$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$22$$, $mouseY$$22$$, $clientIds$$9$$)
};
$JSCompiler_prototypeAlias$$.$getDropSite$ = function $$JSCompiler_prototypeAlias$$$$getDropSite$$($mouseX$$23$$, $mouseY$$23$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$23$$, $mouseY$$23$$)
};
dvt.$NBoxConstants$ = {};
dvt.$Obj$.$createSubclass$(dvt.$NBoxConstants$, dvt.$Obj$);
dvt.$NBoxConstants$.$COLUMN$ = "column";
dvt.$NBoxConstants$.$COLUMNS$ = "columns";
dvt.$NBoxConstants$.$COLUMNS_TITLE$ = "columnsTitle";
dvt.$NBoxConstants$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
dvt.$NBoxConstants$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
$goog$exportPath_$$("dvt.NBoxConstants.MAXIMIZED_COLUMN", dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$);
dvt.$NBoxConstants$.$ROW$ = "row";
dvt.$NBoxConstants$.$ROWS$ = "rows";
dvt.$NBoxConstants$.$ROWS_TITLE$ = "rowsTitle";
dvt.$NBoxConstants$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
dvt.$NBoxConstants$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
dvt.$NBoxConstants$.$MAXIMIZED_ROW$ = "maximizedRow";
$goog$exportPath_$$("dvt.NBoxConstants.MAXIMIZED_ROW", dvt.$NBoxConstants$.$MAXIMIZED_ROW$);
dvt.$NBoxConstants$.$CELL$ = "cell";
dvt.$NBoxConstants$.$CELLS$ = "cells";
dvt.$NBoxConstants$.$CELL_DEFAULTS$ = "cellDefaults";
dvt.$NBoxConstants$.$NODES$ = "nodes";
dvt.$NBoxConstants$.$NODE_DEFAULTS$ = "nodeDefaults";
dvt.$NBoxConstants$.$CATEGORIES$ = "categories";
dvt.$NBoxConstants$.$ICON$ = "icon";
dvt.$NBoxConstants$.$ICON_DEFAULTS$ = "iconDefaults";
dvt.$NBoxConstants$.$INDICATOR$ = "indicator";
dvt.$NBoxConstants$.$INDICATOR_ICON$ = "indicatorIcon";
dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
dvt.$NBoxConstants$.$INDICATOR_COLOR$ = "indicatorColor";
dvt.$NBoxConstants$.$X_PERCENTAGE$ = "xPercentage";
dvt.$NBoxConstants$.$Y_PERCENTAGE$ = "yPercentage";
dvt.$NBoxConstants$.$SELECTION$ = "selection";
dvt.$NBoxConstants$.$SELECTION_MODE$ = "selectionMode";
dvt.$NBoxConstants$.$SELECTION_INFO$ = "selectionInfo";
$goog$exportPath_$$("dvt.NBoxConstants.SELECTION_INFO", dvt.$NBoxConstants$.$SELECTION_INFO$);
dvt.$NBoxConstants$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
dvt.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
dvt.$NBoxConstants$.$HIGHLIGHT_MATCH$ = "highlightMatch";
dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
$goog$exportPath_$$("dvt.NBoxConstants.HIDDEN_CATEGORIES", dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$);
dvt.$NBoxConstants$.$HOVER_BEHAVIOR$ = "hoverBehavior";
dvt.$NBoxConstants$.$GROUP_CATEGORY$ = "groupCategory";
dvt.$NBoxConstants$.$GROUP_ATTRIBUTES$ = "groupAttributes";
dvt.$NBoxConstants$.$GROUP_BEHAVIOR$ = "groupBehavior";
dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
dvt.$NBoxConstants$.$OTHER_COLOR$ = "otherColor";
dvt.$NBoxConstants$.$OTHER_THRESHOLD$ = "otherThreshold";
dvt.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
dvt.$NBoxConstants$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
dvt.$NBoxConstants$.$ANIMATION_DURATION$ = "animationDuration";
dvt.$NBoxConstants$.$DRAWER$ = "_drawer";
$goog$exportPath_$$("dvt.NBoxConstants.DRAWER", dvt.$NBoxConstants$.$DRAWER$);
dvt.$NBoxConstants$.$LEGEND$ = "_legend";
dvt.$NBoxConstants$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
$goog$exportPath_$$("dvt.NBoxConstants.LEGEND_DISCLOSURE", dvt.$NBoxConstants$.$LEGEND_DISCLOSURE$);
dvt.$NBoxConstants$.ID = "id";
dvt.$NBoxConstants$.$LABEL$ = "label";
dvt.$NBoxConstants$.$LABEL_STYLE$ = "labelStyle";
dvt.$NBoxConstants$.$LABEL_HALIGN$ = "labelHalign";
dvt.$NBoxConstants$.$SECONDARY_LABEL$ = "secondaryLabel";
dvt.$NBoxConstants$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
dvt.$NBoxConstants$.$SHORT_DESC$ = "shortDesc";
dvt.$NBoxConstants$.$SHOW_COUNT$ = "showCount";
dvt.$NBoxConstants$.$STYLE$ = "style";
dvt.$NBoxConstants$.$STYLE_DEFAULTS$ = "styleDefaults";
dvt.$NBoxConstants$.$BORDER_COLOR$ = "borderColor";
dvt.$NBoxConstants$.$BORDER_RADIUS$ = "borderRadius";
dvt.$NBoxConstants$.$BORDER_WIDTH$ = "borderWidth";
dvt.$NBoxConstants$.$COLOR$ = "color";
dvt.$NBoxConstants$.$PATTERN$ = "pattern";
dvt.$NBoxConstants$.$OPACITY$ = "opacity";
dvt.$NBoxConstants$.$SHAPE$ = "shape";
dvt.$NBoxConstants$.$SOURCE$ = "source";
dvt.$NBoxConstants$.$HEIGHT$ = "height";
dvt.$NBoxConstants$.$WIDTH$ = "width";
dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$NBOX_PREFIX$, {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
function $DvtNBoxDefaults$$() {
  this.Init({skyros:$DvtNBoxDefaults$VERSION_1$$, alta:$DvtNBoxDefaults$SKIN_ALTA$$})
}
dvt.$Obj$.$createSubclass$($DvtNBoxDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtNBoxDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], touchResponse:"auto", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + 
"color: #252525;"), rowLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$ + "color: #252525;"), columnsTitleStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), rowsTitleStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), cellDefaults:{style:new dvt.$CSSStyle$("background-color:#e9e9e9"), maximizedStyle:new dvt.$CSSStyle$("background-color:#dddddd"), minimizedStyle:new dvt.$CSSStyle$("background-color:#e9e9e9"), 
labelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$ + "color: #252525;"), countLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_14$ + "color: #252525;"), bodyCountLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;"), dropTargetStyle:new dvt.$CSSStyle$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), showCount:"auto", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", 
scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e9e9e9", borderColor:"#bcc7d2", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new dvt.$CSSStyle$("color: #252525;" + dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), countLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_14$), countBorderRadius:1}, 
nodeDefaults:{color:"#FFFFFF", labelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$), secondaryLabelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$), alphaFade:0.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, preferredSizeTouch:34, shapePaddingRatio:0.15, sourcePaddingRatio:0, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:dvt.$SimpleMarker$.$CIRCLE$}, 
indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderColor:"#000000", borderWidth:0, borderRadius:0, shape:dvt.$SimpleMarker$.$CIRCLE$}}, __legendDefaults:{sectionStyle:"color: #252525;" + dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD_12$, itemStyle:"color: #252525;" + dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_12$, markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new dvt.$CSSStyle$(dvt.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}}, __layout:{componentGap:8, 
titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, cellLabelGap:6, cellCloseGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:6, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, 
drawerStartGap:6, drawerLabelGap:6, drawerHeaderHeight:31, legendBottomGap:10}}, $DvtNBoxDefaults$SKIN_ALTA$$ = {};
function $DvtNBoxCell$$() {
}
dvt.$Obj$.$createSubclass$($DvtNBoxCell$$, dvt.$Container$);
$DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($nbox$$1$$, $data$$61$$) {
  var $component$$14$$ = new $DvtNBoxCell$$;
  $component$$14$$.Init($nbox$$1$$, $data$$61$$);
  return $component$$14$$
};
$JSCompiler_prototypeAlias$$ = $DvtNBoxCell$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$2$$, $data$$62$$) {
  var $r$$27$$ = $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$2$$, $data$$62$$[dvt.$NBoxConstants$.$ROW$]), $c$$17$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$2$$, $data$$62$$[dvt.$NBoxConstants$.$COLUMN$]);
  $DvtNBoxCell$$.$superclass$.Init.call(this, $nbox$$2$$.$getCtx$(), $JSCompiler_alias_NULL$$, "c:" + $r$$27$$ + "," + $c$$17$$);
  this.$_nbox$ = $nbox$$2$$;
  this.$_data$ = $data$$62$$;
  this.$_scrollContainer$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$128$$, $availSpace$$95$$) {
  $container$$128$$.$addChild$(this);
  $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  $DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $availSpace$$95$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
$JSCompiler_prototypeAlias$$.$getChildContainer$ = $JSCompiler_get$$("$_childContainer$");
$JSCompiler_prototypeAlias$$.$setChildContainer$ = $JSCompiler_set$$("$_childContainer$");
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$8$$, $oldCell$$) {
  $DvtNBoxCellRenderer$$.$animateUpdate$($animationHandler$$8$$, $oldCell$$, this)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$9$$) {
  $DvtNBoxCellRenderer$$.$animateDelete$($animationHandler$$9$$, this)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$10$$) {
  $DvtNBoxCellRenderer$$.$animateInsert$($animationHandler$$10$$, this)
};
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$)
};
$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  if(this.$isDoubleClickable$()) {
    var $maximizedRow_oldFocus$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $options$$193$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$(this.$_nbox$), $event$$314$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$DRAWER$, $JSCompiler_alias_NULL$$);
    $options$$193$$[dvt.$NBoxConstants$.$DRAWER$] = $JSCompiler_alias_NULL$$;
    $maximizedRow_oldFocus$$ == this.$_data$[dvt.$NBoxConstants$.$ROW$] && $maximizedColumn$$ == this.$_data$[dvt.$NBoxConstants$.$COLUMN$] ? ($options$$193$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = $JSCompiler_alias_NULL$$, $event$$314$$.properties[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = $JSCompiler_alias_NULL$$, $options$$193$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = $JSCompiler_alias_NULL$$, $event$$314$$.properties[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = $JSCompiler_alias_NULL$$) : ($options$$193$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = 
    this.$_data$[dvt.$NBoxConstants$.$ROW$], $event$$314$$.properties[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = this.$_data$[dvt.$NBoxConstants$.$ROW$], $options$$193$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[dvt.$NBoxConstants$.$COLUMN$], $event$$314$$.properties[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = this.$_data$[dvt.$NBoxConstants$.$COLUMN$]);
    var $otherCell$$;
    ($maximizedRow_oldFocus$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $maximizedRow_oldFocus$$ instanceof $DvtNBoxNode$$ ? $otherCell$$ = this.$getCellIndex$() != $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $maximizedRow_oldFocus$$.getData()) : $maximizedRow_oldFocus$$ instanceof $DvtNBoxNodeOverflow$$ ? $otherCell$$ = this != $maximizedRow_oldFocus$$.$_cell$ : $maximizedRow_oldFocus$$ instanceof $DvtNBoxCell$$ ? $otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.$getCellIndex$() : 
    $maximizedRow_oldFocus$$ instanceof $DvtNBoxCategoryNode$$ && ($otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.getData().cell) : this.$_nbox$.$EventManager$.$setFocusObj$(this);
    $otherCell$$ && (this.$_nbox$.$EventManager$.$setFocusObj$(this), this.$_nbox$.$EventManager$.$setFocused$($JSCompiler_alias_FALSE$$));
    this.$_nbox$.$processEvent$($event$$314$$);
    this.$_nbox$.$render$($options$$193$$)
  }
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$159$$, $y$$137$$) {
  var $background$$8_maxY$$11$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $minX$$12$$ = this.$getTranslateX$() + $background$$8_maxY$$11$$.$getX$(), $minY$$14$$ = this.$getTranslateY$() + $background$$8_maxY$$11$$.$getY$(), $maxX$$9$$ = $minX$$12$$ + $background$$8_maxY$$11$$.getWidth(), $background$$8_maxY$$11$$ = $minY$$14$$ + $background$$8_maxY$$11$$.getHeight();
  return $minX$$12$$ <= $x$$159$$ && $x$$159$$ <= $maxX$$9$$ && $minY$$14$$ <= $y$$137$$ && $y$$137$$ <= $background$$8_maxY$$11$$
};
$JSCompiler_prototypeAlias$$.$renderDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$renderDropSiteFeedback$$() {
  return $DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this)
};
$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$315$$) {
  var $isCellMaximized_maximizedRow$$1$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$1$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized_maximizedRow$$1$$ = $isCellMaximized_maximizedRow$$1$$ == this.$_data$[dvt.$NBoxConstants$.$ROW$] && $maximizedColumn$$1$$ == this.$_data$[dvt.$NBoxConstants$.$COLUMN$] ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  (!$isCellMaximized_maximizedRow$$1$$ && $event$$315$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ || $isCellMaximized_maximizedRow$$1$$ && $event$$315$$.keyCode == dvt.$KeyboardEvent$.$ESCAPE$) && this.$handleDoubleClick$()
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $cellIndex$$ = this.$getCellIndex$(), $states$$11$$ = [];
  $DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $cellIndex$$) ? $states$$11$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_MAXIMIZED")) : $DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $cellIndex$$) && $states$$11$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_MINIMIZED"));
  $states$$11$$.push([dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$getNodeCount$()]);
  return dvt.$Displayable$.$generateAriaLabel$(this.getData().shortDesc, $states$$11$$)
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$(this)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$150_event$$316$$) {
  var $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $JSCompiler_alias_NULL$$;
  if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($JSCompiler_temp$$150_event$$316$$)) {
    if($JSCompiler_temp$$150_event$$316$$.keyCode == dvt.$KeyboardEvent$.$OPEN_BRACKET$) {
      var $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $JSCompiler_alias_NULL$$, $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
      if($drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ && $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ == this.getData()[dvt.$NBoxConstants$.$ROW$] && $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$ == this.getData()[dvt.$NBoxConstants$.$COLUMN$]) {
        $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$)
      }else {
        if($cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = this.$getChildContainer$(), $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getScrollingPane$ && ($cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$_container$), 0 < $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getNumChildren$() && 
        ($cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getChildAt$(0) instanceof $DvtNBoxNode$$ || $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getChildAt$(0) instanceof $DvtNBoxNodeOverflow$$)) {
          $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$)
        }else {
          $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$ = [];
          for($drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ = 0;$drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ < $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getNumChildren$();$drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$++) {
            var $child$$inline_3754$$ = $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.$getChildAt$($drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$);
            $child$$inline_3754$$ instanceof $DvtNBoxCategoryNode$$ && $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$.push($child$$inline_3754$$)
          }
          $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$($JSCompiler_alias_NULL$$, $JSCompiler_temp$$150_event$$316$$, $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$)
        }
      }
      $JSCompiler_temp$$150_event$$316$$ = $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$
    }else {
      $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = [];
      $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$ = $DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$);
      for($drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ = 0;$drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$ < $cellCount$$inline_3759_maximizedColumn$$inline_3749_nodes$$inline_3752$$;$drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$++) {
        $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$.push($DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $drawerData$$inline_3750_i$$inline_3753_i$$inline_3760$$)))
      }
      $JSCompiler_temp$$150_event$$316$$ = dvt.$KeyboardHandler$.$getNextNavigable$(this, $JSCompiler_temp$$150_event$$316$$, $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$)
    }
    $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$ = $JSCompiler_temp$$150_event$$316$$
  }
  return $cells$$inline_3758_childObj$$inline_3747_container$$inline_3751_maximizedRow$$inline_3748_next$$6$$
};
$JSCompiler_prototypeAlias$$.$getCellIndex$ = function $$JSCompiler_prototypeAlias$$$$getCellIndex$$() {
  return $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[dvt.$NBoxConstants$.$ROW$], this.getData()[dvt.$NBoxConstants$.$COLUMN$])
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  var $label$$57$$ = this.getData()[dvt.$NBoxConstants$.$LABEL$];
  return $label$$57$$ ? $label$$57$$ : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_getBackground$$($JSCompiler_StaticMethods_getBackground$self_bgFill$$) {
  var $colorFill_style$$79$$ = $DvtNBoxStyleUtils$$.$getCellStyle$($JSCompiler_StaticMethods_getBackground$self_bgFill$$.$_nbox$, $JSCompiler_StaticMethods_getBackground$self_bgFill$$.$getCellIndex$());
  $JSCompiler_StaticMethods_getBackground$self_bgFill$$ = $colorFill_style$$79$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND$);
  $colorFill_style$$79$$ = $colorFill_style$$79$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
  return $JSCompiler_StaticMethods_getBackground$self_bgFill$$ ? $JSCompiler_StaticMethods_getBackground$self_bgFill$$ : $colorFill_style$$79$$
}
$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  return $DvtNBoxRenderer$$.$getCellCounts$(this.$_nbox$).total[this.$getCellIndex$()]
};
$JSCompiler_prototypeAlias$$.$getNode$ = function $$JSCompiler_prototypeAlias$$$$getNode$$($index$$164$$) {
  var $nodes$$11$$ = this.$_nbox$.$getOptions$()[dvt.$NBoxConstants$.$NODES$];
  if($nodes$$11$$) {
    for(var $nodeIndex$$7$$ = 0, $idx$$15$$ = 0;$idx$$15$$ < $nodes$$11$$.length;$idx$$15$$++) {
      if(this.getData()[dvt.$NBoxConstants$.$ROW$] == $nodes$$11$$[$idx$$15$$][dvt.$NBoxConstants$.$ROW$] && this.getData()[dvt.$NBoxConstants$.$COLUMN$] == $nodes$$11$$[$idx$$15$$][dvt.$NBoxConstants$.$COLUMN$] && !$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $nodes$$11$$[$idx$$15$$])) {
        if($index$$164$$ == $nodeIndex$$7$$) {
          return $nodes$$11$$[$idx$$15$$]
        }
        $nodeIndex$$7$$++
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) != dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ || !this.$_nbox$.$getOptions$().__groups ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData()))) : $JSCompiler_alias_NULL$$
};
function $DvtNBoxNode$$($nbox$$3$$, $data$$64$$) {
  this.Init($nbox$$3$$, $data$$64$$)
}
dvt.$Obj$.$createSubclass$($DvtNBoxNode$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtNBoxNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$4$$, $data$$65$$) {
  $DvtNBoxNode$$.$superclass$.Init.call(this, $nbox$$4$$.$getCtx$(), $JSCompiler_alias_NULL$$, $data$$65$$[dvt.$NBoxConstants$.ID]);
  this.$_nbox$ = $nbox$$4$$;
  this.$_data$ = $data$$65$$;
  this.$_nbox$.$registerObject$(this);
  var $selectionMode$$4$$ = this.$_nbox$.$getOptions$()[dvt.$NBoxConstants$.$SELECTION_MODE$];
  ("single" == $selectionMode$$4$$ || "multiple" == $selectionMode$$4$$ || this.$getAction$()) && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$131$$, $nodeLayout$$) {
  $DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $nodeLayout$$);
  $container$$131$$.$addChild$(this);
  $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$30$$) {
  this.$getSelectionShape$().$setSelected$($selected$$30$$);
  this.$UpdateAccessibilityAttributes$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$setSelectionShape$ = $JSCompiler_set$$("$_selectionShape$");
$JSCompiler_prototypeAlias$$.$getSelectionShape$ = $JSCompiler_get$$("$_selectionShape$");
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$5$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$5$$) {
    var $dataContext$$9$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
    return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($tooltipFunc$$5$$, $dataContext$$9$$)
  }
  return this.$getShortDesc$()
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$[dvt.$NBoxConstants$.$SHORT_DESC$]
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$)
};
$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$3$$) {
  this.$_maxAlpha$ = $maxAlpha$$3$$;
  this.$setAlpha$(this.$getAlpha$())
};
$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$21$$) {
  $DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, Math.min($alpha$$21$$, this.$_maxAlpha$))
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$11$$, $oldNode$$10$$) {
  $DvtNBoxNodeRenderer$$.$animateUpdate$($animationHandler$$11$$, $oldNode$$10$$, this)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$12$$) {
  $DvtNBoxNodeRenderer$$.$animateDelete$($animationHandler$$12$$, this)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$13$$) {
  $DvtNBoxNodeRenderer$$.$animateInsert$($animationHandler$$13$$, this)
};
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  $JSCompiler_StaticMethods__getParentContainer$$(this).$handleDoubleClick$()
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$) {
    this.$_showPopupBehaviors$ = [];
    var $spbs$$3$$ = this.$_data$.showPopupBehaviors;
    if($spbs$$3$$) {
      for(var $i$$500$$ = 0;$i$$500$$ < $spbs$$3$$.length;$i$$500$$++) {
        this.$_showPopupBehaviors$.push(new dvt.$ShowPopupBehavior$($spbs$$3$$[$i$$500$$].popupId, $spbs$$3$$[$i$$500$$].triggerType, $spbs$$3$$[$i$$500$$].alignId, $spbs$$3$$[$i$$500$$].align))
      }
    }
  }
  return this.$_showPopupBehaviors$
};
$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$6_matrix$$9$$) {
  if($behavior$$6_matrix$$9$$ && $behavior$$6_matrix$$9$$.$getAlign$()) {
    $behavior$$6_matrix$$9$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$(this);
    var $background$$9$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
    return new dvt.$Rectangle$($behavior$$6_matrix$$9$$.$_tx$ + $background$$9$$.$getX$(), $behavior$$6_matrix$$9$$.$_ty$ + $background$$9$$.$getY$(), $background$$9$$.getWidth(), $background$$9$$.getHeight())
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$10$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$10$$)
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
function $JSCompiler_StaticMethods__getParentContainer$$($JSCompiler_StaticMethods__getParentContainer$self_container$$132$$) {
  var $cellData$$1_cellIndex$$1_drawerData$$1$$ = $DvtNBoxDataUtils$$.$getDrawer$($JSCompiler_StaticMethods__getParentContainer$self_container$$132$$.$_nbox$);
  $cellData$$1_cellIndex$$1_drawerData$$1$$ || ($cellData$$1_cellIndex$$1_drawerData$$1$$ = $DvtNBoxDataUtils$$.$getCellIndex$($JSCompiler_StaticMethods__getParentContainer$self_container$$132$$.$_nbox$, $JSCompiler_StaticMethods__getParentContainer$self_container$$132$$.$_data$), $cellData$$1_cellIndex$$1_drawerData$$1$$ = $DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods__getParentContainer$self_container$$132$$.$_nbox$, $cellData$$1_cellIndex$$1_drawerData$$1$$));
  return $JSCompiler_StaticMethods__getParentContainer$self_container$$132$$ = $DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getParentContainer$self_container$$132$$.$_nbox$, $cellData$$1_cellIndex$$1_drawerData$$1$$)
}
$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$19$$ = this.$getAriaLabel$();
    $desc$$19$$ && this.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$19$$)
  }
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData()[dvt.$NBoxConstants$.$CATEGORIES$] ? this.getData()[dvt.$NBoxConstants$.$CATEGORIES$] : []
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$(this)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  var $scrollContainer$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
  $scrollContainer$$ && $scrollContainer$$.scrollIntoView(this)
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$319$$) {
  var $next$$7$$ = $JSCompiler_alias_NULL$$;
  if($event$$319$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$319$$.ctrlKey) {
    return this
  }
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$319$$) ? $next$$7$$ = $event$$319$$.keyCode == dvt.$KeyboardEvent$.$CLOSE_BRACKET$ ? $JSCompiler_StaticMethods__getParentContainer$$(this) : $event$$319$$.keyCode == dvt.$KeyboardEvent$.$OPEN_BRACKET$ ? this : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$319$$) : $event$$319$$.type == dvt.$MouseEvent$.$CLICK$ && ($next$$7$$ = this);
  return $next$$7$$
};
$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$320$$) {
  if($DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && $event$$320$$.keyCode == dvt.$KeyboardEvent$.$ESCAPE$) {
    this.$handleDoubleClick$()
  }else {
    var $isCellMaximized$$1_maximizedRow$$3$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$3$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized$$1_maximizedRow$$3$$ = $isCellMaximized$$1_maximizedRow$$3$$ == this.$_data$[dvt.$NBoxConstants$.$ROW$] && $maximizedColumn$$3$$ == this.$_data$[dvt.$NBoxConstants$.$COLUMN$] ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
    (!$isCellMaximized$$1_maximizedRow$$3$$ && $event$$320$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ || $isCellMaximized$$1_maximizedRow$$3$$ && $event$$320$$.keyCode == dvt.$KeyboardEvent$.$ESCAPE$) && this.$handleDoubleClick$()
  }
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $cell$$3_cellData$$2_node$$248$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[dvt.$NBoxConstants$.ID]));
  if($cell$$3_cellData$$2_node$$248$$) {
    var $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$3_cellData$$2_node$$248$$);
    if($ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$) {
      return $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$
    }
    $cell$$3_cellData$$2_node$$248$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $cell$$3_cellData$$2_node$$248$$));
    $cell$$3_cellData$$2_node$$248$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$3_cellData$$2_node$$248$$);
    $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ = $DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $cell$$3_cellData$$2_node$$248$$.$getChildContainer$());
    if($ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ instanceof $DvtNBoxNodeOverflow$$) {
      return $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$
    }
    a: {
      for($ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ = this;$ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ && $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$.getParent;) {
        if($ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ = $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$.getParent(), $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ instanceof $DvtNBoxDrawer$$) {
          break a
        }
      }
      $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ = $JSCompiler_alias_NULL$$
    }
    return $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$ ? $ancestor$$inline_3763_displayable$$43_drawer$$2_lastNode$$.$getKeyboardFocusDisplayable$() : $cell$$3_cellData$$2_node$$248$$.$getKeyboardFocusDisplayable$()
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getChildContainer$ = function $$JSCompiler_prototypeAlias$$$$getChildContainer$$($create$$1$$) {
  if(!$create$$1$$ || this.$_childContainer$) {
    return this.$_childContainer$
  }
  this.$_childContainer$ = new dvt.$Container$(this.$getCtx$());
  this.$addChild$(this.$_childContainer$);
  return this.$_childContainer$
};
$JSCompiler_prototypeAlias$$.$setChildContainer$ = $JSCompiler_set$$("$_childContainer$");
function $DvtNBoxNodeOverflow$$() {
}
dvt.$Obj$.$createSubclass$($DvtNBoxNodeOverflow$$, dvt.$Container$);
$DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($nbox$$5$$, $cell$$4$$) {
  var $component$$15$$ = new $DvtNBoxNodeOverflow$$;
  $component$$15$$.Init($nbox$$5$$, $cell$$4$$);
  return $component$$15$$
};
$JSCompiler_prototypeAlias$$ = $DvtNBoxNodeOverflow$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$6$$, $cell$$5$$) {
  $DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $nbox$$6$$.$getCtx$());
  this.$_nbox$ = $nbox$$6$$;
  this.$_cell$ = $cell$$5$$;
  this.$_button$
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$134$$, $keyboardFocusEffect_width$$80$$, $height$$72$$) {
  var $options$$195$$ = this.$_nbox$.$getOptions$(), $w$$29$$ = $options$$195$$._resources.overflow_ena.width, $h$$22$$ = $options$$195$$._resources.overflow_ena.height, $scale$$42_x$$161$$ = 1;
  if($keyboardFocusEffect_width$$80$$ < $w$$29$$ || $height$$72$$ < $h$$22$$) {
    $scale$$42_x$$161$$ = Math.min($keyboardFocusEffect_width$$80$$ / $w$$29$$, $height$$72$$ / $h$$22$$)
  }
  var $w$$29$$ = $scale$$42_x$$161$$ * $w$$29$$, $h$$22$$ = $scale$$42_x$$161$$ * $h$$22$$, $scale$$42_x$$161$$ = ($keyboardFocusEffect_width$$80$$ - $w$$29$$) / 2, $y$$139$$ = ($height$$72$$ - $h$$22$$) / 2, $ctx$$4$$ = this.$_nbox$.$getCtx$(), $upRect$$ = new dvt.$Rect$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$80$$, $height$$72$$), $overRect$$ = new dvt.$Rect$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$80$$, $height$$72$$), $downRect$$ = new dvt.$Rect$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$80$$, 
  $height$$72$$), $disRect$$ = new dvt.$Rect$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$80$$, $height$$72$$);
  $upRect$$.$setInvisibleFill$();
  $overRect$$.$setInvisibleFill$();
  $downRect$$.$setInvisibleFill$();
  $disRect$$.$setInvisibleFill$();
  var $upState$$13$$ = new dvt.$Container$($ctx$$4$$), $overState$$10$$ = new dvt.$Container$($ctx$$4$$), $downState$$10$$ = new dvt.$Container$($ctx$$4$$), $disState$$ = new dvt.$Container$($ctx$$4$$);
  $upState$$13$$.$addChild$($upRect$$);
  $overState$$10$$.$addChild$($overRect$$);
  $downState$$10$$.$addChild$($downRect$$);
  $disState$$.$addChild$($disRect$$);
  $upState$$13$$.$addChild$(new dvt.$Image$($ctx$$4$$, $options$$195$$._resources.overflow_ena.src, $scale$$42_x$$161$$, $y$$139$$, $w$$29$$, $h$$22$$));
  $overState$$10$$.$addChild$(new dvt.$Image$($ctx$$4$$, $options$$195$$._resources.overflow_ovr.src, $scale$$42_x$$161$$, $y$$139$$, $w$$29$$, $h$$22$$));
  $downState$$10$$.$addChild$(new dvt.$Image$($ctx$$4$$, $options$$195$$._resources.overflow_dwn.src, $scale$$42_x$$161$$, $y$$139$$, $w$$29$$, $h$$22$$));
  $disState$$.$addChild$(new dvt.$Image$($ctx$$4$$, $options$$195$$._resources.overflow_dis.src, $scale$$42_x$$161$$, $y$$139$$, $w$$29$$, $h$$22$$));
  this.$_button$ = new dvt.$Button$($ctx$$4$$, $upState$$13$$, $overState$$10$$, $downState$$10$$, $disState$$, $JSCompiler_alias_NULL$$, this.$HandleClick$, this);
  $DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || (this.$_button$.$setEnabled$($JSCompiler_alias_FALSE$$), this.$_button$.$drawDisabledState$());
  this.$addChild$(this.$_button$);
  $keyboardFocusEffect_width$$80$$ = new dvt.$KeyboardFocusEffect$(this.$_nbox$.$getCtx$(), this, new dvt.$Rectangle$(-1, -1, $keyboardFocusEffect_width$$80$$ + 2, $height$$72$$ + 2));
  $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $keyboardFocusEffect_width$$80$$, "focusEffect");
  $container$$134$$.$addChild$(this);
  this.$_addAccessibilityAttributes$();
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$321$$) {
  dvt.$EventManager$.$consumeEvent$($event$$321$$);
  this.$_cell$.$handleDoubleClick$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$322$$) {
  $event$$322$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ && this.$_cell$.$handleDoubleClick$()
};
$JSCompiler_prototypeAlias$$.$_addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$_addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$20$$ = this.$getAriaLabel$();
    $desc$$20$$ && this.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$20$$)
  }
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "ADDITIONAL_DATA")
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return this.$getDatatip$()
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$(this)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$323$$) {
  var $next$$8$$ = $JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$323$$) && ($next$$8$$ = $event$$323$$.keyCode == dvt.$KeyboardEvent$.$CLOSE_BRACKET$ ? this.$_cell$ : $DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$323$$));
  return $next$$8$$
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $newNode$$8$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[dvt.$NBoxConstants$.ID])).__next;
  return $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $newNode$$8$$)
};
function $DvtNBoxCategoryNode$$() {
}
dvt.$Obj$.$createSubclass$($DvtNBoxCategoryNode$$, dvt.$Container$);
$DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($nbox$$7$$, $data$$66$$) {
  var $component$$16$$ = new $DvtNBoxCategoryNode$$;
  $component$$16$$.Init($nbox$$7$$, $data$$66$$);
  return $component$$16$$
};
$JSCompiler_prototypeAlias$$ = $DvtNBoxCategoryNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$8$$, $data$$67$$) {
  $DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $nbox$$8$$.$getCtx$(), $JSCompiler_alias_NULL$$, isNaN($data$$67$$[dvt.$NBoxConstants$.$CELL$]) ? $data$$67$$[dvt.$NBoxConstants$.ID] : $data$$67$$[dvt.$NBoxConstants$.$CELL$] + ":" + $data$$67$$[dvt.$NBoxConstants$.ID]);
  this.$_nbox$ = $nbox$$8$$;
  this.$_data$ = $data$$67$$;
  this.$_nbox$.$registerObject$(this);
  this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$135$$, $scale$$43$$, $gap$$22$$) {
  $DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $scale$$43$$, $gap$$22$$);
  $container$$135$$.$addChild$(this);
  $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"multiple" == this.$_nbox$.$getOptions$()[dvt.$NBoxConstants$.$SELECTION_MODE$]
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$31$$) {
  this.$getSelectionShape$().$setSelected$($selected$$31$$);
  this.$UpdateAccessibilityAttributes$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$setSelectionShape$ = $JSCompiler_set$$("$_selectionShape$");
$JSCompiler_prototypeAlias$$.$getSelectionShape$ = $JSCompiler_get$$("$_selectionShape$");
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  for(var $labels$$21$$ = $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $labels$$21$$.length;) {
    var $joined$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "COMMA_SEP_LIST", [$labels$$21$$[0], $labels$$21$$[1]]);
    $labels$$21$$.splice(0, 2, $joined$$)
  }
  return $labels$$21$$[0]
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$6$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$6$$) {
    var $dataContext$$10$$ = {id:this.$_data$.id, color:$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
    "withinCell" == $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($dataContext$$10$$.row = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $dataContext$$10$$.column = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
    return this.$_nbox$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($tooltipFunc$$6$$, $dataContext$$10$$)
  }
  return this.$getShortDesc$() + "\n" + dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "SIZE"), this.$_data$.nodeIndices.length])
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return $DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n")
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return $DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$)
};
$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$4$$) {
  this.$_maxAlpha$ = $maxAlpha$$4$$;
  this.$setAlpha$(this.$getAlpha$())
};
$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$22$$) {
  $DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, Math.min($alpha$$22$$, this.$_maxAlpha$))
};
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isSelectable$()
};
$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  this.$isSelectable$() && $JSCompiler_StaticMethods_openDrawer$$(this)
};
function $JSCompiler_StaticMethods_openDrawer$$($JSCompiler_StaticMethods_openDrawer$self$$) {
  var $options$$196$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$($JSCompiler_StaticMethods_openDrawer$self$$.$_nbox$);
  $options$$196$$[dvt.$NBoxConstants$.$DRAWER$] = {id:$JSCompiler_StaticMethods_openDrawer$self$$.getId()};
  var $event$$324$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$DRAWER$, $JSCompiler_StaticMethods_openDrawer$self$$.getId());
  $JSCompiler_StaticMethods_openDrawer$self$$.$_nbox$.$processEvent$($event$$324$$);
  $JSCompiler_StaticMethods_openDrawer$self$$.$_nbox$.$render$($options$$196$$)
}
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$14$$, $oldNode$$11$$) {
  $DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($animationHandler$$14$$, $oldNode$$11$$, this)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$15$$) {
  $DvtNBoxCategoryNodeRenderer$$.$animateDelete$($animationHandler$$15$$, this)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$16$$) {
  $DvtNBoxCategoryNodeRenderer$$.$animateInsert$($animationHandler$$16$$, this)
};
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$11$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$11$$)
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$325$$) {
  if($event$$325$$.keyCode == dvt.$KeyboardEvent$.$ENTER$) {
    $JSCompiler_StaticMethods_openDrawer$$(this)
  }else {
    if($event$$325$$.keyCode == dvt.$KeyboardEvent$.$ESCAPE$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $cellData$$3$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
      $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$3$$).$HandleKeyboardEvent$($event$$325$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$21$$ = this.$getAriaLabel$();
    $desc$$21$$ && this.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$21$$)
  }
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  var $categories$$16$$ = this.getData()[dvt.$NBoxConstants$.$CATEGORIES$];
  if(!$categories$$16$$) {
    for(var $intersect$$ = function $$intersect$$$($categories$$16$$, $intersect$$) {
      return $categories$$16$$.filter(function($categories$$16$$) {
        return-1 < $intersect$$.indexOf($categories$$16$$)
      })
    }, $indices$$6$$ = this.getData().nodeIndices, $categories$$16$$ = $JSCompiler_alias_NULL$$, $i$$501$$ = 0;$i$$501$$ < $indices$$6$$.length;$i$$501$$++) {
      var $nodeCategories$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $indices$$6$$[$i$$501$$])[dvt.$NBoxConstants$.$CATEGORIES$];
      if(!$nodeCategories$$) {
        $categories$$16$$ = [];
        break
      }
      $categories$$16$$ = $categories$$16$$ == $JSCompiler_alias_NULL$$ ? $nodeCategories$$ : $intersect$$($categories$$16$$, $nodeCategories$$)
    }
    this.getData()[dvt.$NBoxConstants$.$CATEGORIES$] = $categories$$16$$
  }
  return $categories$$16$$
};
$DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($a$$50$$, $b$$23$$) {
  var $alength$$ = $a$$50$$.nodeIndices.length, $blength$$ = $b$$23$$.nodeIndices.length;
  return $alength$$ == $blength$$ ? 0 : $alength$$ < $blength$$ ? 1 : -1
};
$JSCompiler_prototypeAlias$$ = $DvtNBoxCategoryNode$$.prototype;
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$(this)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($cellData$$4_event$$326$$) {
  var $groups$$7_next$$9_nodes$$12$$ = $JSCompiler_alias_NULL$$;
  if($cellData$$4_event$$326$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $cellData$$4_event$$326$$.ctrlKey) {
    return this
  }
  if($cellData$$4_event$$326$$.keyCode == dvt.$KeyboardEvent$.$CLOSE_BRACKET$ && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    $cellData$$4_event$$326$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[dvt.$NBoxConstants$.$CELL$]), $groups$$7_next$$9_nodes$$12$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$4_event$$326$$)
  }else {
    if($cellData$$4_event$$326$$.keyCode == dvt.$KeyboardEvent$.$CLOSE_BRACKET$ || $cellData$$4_event$$326$$.keyCode == dvt.$KeyboardEvent$.$OPEN_BRACKET$) {
      $groups$$7_next$$9_nodes$$12$$ = this
    }else {
      if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($cellData$$4_event$$326$$)) {
        if($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
          var $groups$$7_next$$9_nodes$$12$$ = this.$_nbox$.$getOptions$().__groups, $groupNodes_i$$502$$ = [], $container$$136_id$$128$$;
          for($container$$136_id$$128$$ in $groups$$7_next$$9_nodes$$12$$) {
            var $displayable$$44$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groups$$7_next$$9_nodes$$12$$[$container$$136_id$$128$$]);
            $displayable$$44$$ && $groupNodes_i$$502$$.push($displayable$$44$$)
          }
          $groups$$7_next$$9_nodes$$12$$ = $DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$(this, $cellData$$4_event$$326$$, $groupNodes_i$$502$$)
        }else {
          $container$$136_id$$128$$ = this.getParent();
          $groups$$7_next$$9_nodes$$12$$ = [];
          for($groupNodes_i$$502$$ = 0;$groupNodes_i$$502$$ < $container$$136_id$$128$$.$getNumChildren$();$groupNodes_i$$502$$++) {
            $container$$136_id$$128$$.$getChildAt$($groupNodes_i$$502$$) instanceof $DvtNBoxCategoryNode$$ && $groups$$7_next$$9_nodes$$12$$.push($container$$136_id$$128$$.$getChildAt$($groupNodes_i$$502$$))
          }
          $groups$$7_next$$9_nodes$$12$$ = $DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$(this, $cellData$$4_event$$326$$, $groups$$7_next$$9_nodes$$12$$)
        }
      }else {
        $cellData$$4_event$$326$$.type == dvt.$MouseEvent$.$CLICK$ && ($groups$$7_next$$9_nodes$$12$$ = this)
      }
    }
  }
  return $groups$$7_next$$9_nodes$$12$$
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $drawerData$$3_groupNodeData$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
  return $drawerData$$3_groupNodeData$$ || $DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($drawerData$$3_groupNodeData$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$3_groupNodeData$$) : $JSCompiler_alias_NULL$$
};
function $DvtNBoxCategoryRolloverHandler$$($callback$$89$$, $callbackObj$$57$$) {
  $DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$89$$, $callbackObj$$57$$);
  this.$_nbox$ = $callbackObj$$57$$
}
dvt.$Obj$.$createSubclass$($DvtNBoxCategoryRolloverHandler$$, dvt.$CategoryRolloverHandler$);
$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$327$$) {
  return dvt.$Obj$.$createCallback$(this, function() {
    this.$SetHighlightMode$($JSCompiler_alias_TRUE$$);
    this.$_nbox$.$processEvent$($event$$327$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$327$$, this.$_source$)
  })
};
$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$328$$) {
  return dvt.$Obj$.$createCallback$(this, function() {
    this.$SetHighlightModeTimeout$();
    this.$_nbox$.$processEvent$($event$$328$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$328$$, this.$_source$)
  })
};
function $DvtNBoxDrawer$$() {
}
dvt.$Obj$.$createSubclass$($DvtNBoxDrawer$$, dvt.$Container$);
$DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($nbox$$9$$, $data$$68$$) {
  var $component$$17$$ = new $DvtNBoxDrawer$$;
  $component$$17$$.Init($nbox$$9$$, $data$$68$$);
  return $component$$17$$
};
$JSCompiler_prototypeAlias$$ = $DvtNBoxDrawer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$10$$, $data$$69$$) {
  $DvtNBoxDrawer$$.$superclass$.Init.call(this, $nbox$$10$$.$getCtx$(), $JSCompiler_alias_NULL$$, $data$$69$$.id + "_d");
  this.$_nbox$ = $nbox$$10$$;
  this.$_data$ = $data$$69$$;
  this.$_nbox$.$registerObject$(this)
};
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$137$$, $availSpace$$96$$) {
  $container$$137$$.$addChild$(this);
  $DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  $DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $availSpace$$96$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
$JSCompiler_prototypeAlias$$.$getChildContainer$ = $JSCompiler_get$$("$_childContainer$");
$JSCompiler_prototypeAlias$$.$setChildContainer$ = $JSCompiler_set$$("$_childContainer$");
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  this.$closeDrawer$()
};
$JSCompiler_prototypeAlias$$.$closeDrawer$ = function $$JSCompiler_prototypeAlias$$$$closeDrawer$$() {
  var $options$$197$$ = $JSCompiler_StaticMethods_getSanitizedOptions$$(this.$_nbox$);
  $options$$197$$[dvt.$NBoxConstants$.$DRAWER$] = $JSCompiler_alias_NULL$$;
  var $event$$329$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$DRAWER$, $JSCompiler_alias_NULL$$);
  this.$_nbox$.$processEvent$($event$$329$$);
  this.$_nbox$.$render$($options$$197$$)
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$17$$, $oldDrawer$$) {
  $DvtNBoxDrawerRenderer$$.$animateUpdate$($animationHandler$$17$$, $oldDrawer$$, this)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$18$$) {
  $DvtNBoxDrawerRenderer$$.$animateDelete$($animationHandler$$18$$, this)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$19$$) {
  $DvtNBoxDrawerRenderer$$.$animateInsert$($animationHandler$$19$$, this)
};
$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$330$$) {
  $event$$330$$.keyCode == dvt.$KeyboardEvent$.$ESCAPE$ && this.$closeDrawer$()
};
$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$22$$ = this.$getAriaLabel$();
    $desc$$22$$ && (dvt.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $desc$$22$$)
  }
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $categoryNode$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $selected$$32$$ = $DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $categoryNode$$);
  return $DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $categoryNode$$.$getShortDesc$(), $selected$$32$$)
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$(this)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($container$$139_event$$331_maximizedCellIndex$$) {
  var $next$$10$$ = $JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($container$$139_event$$331_maximizedCellIndex$$) && ($container$$139_event$$331_maximizedCellIndex$$.keyCode == dvt.$KeyboardEvent$.$OPEN_BRACKET$ ? ($container$$139_event$$331_maximizedCellIndex$$ = this.$getChildContainer$(), $container$$139_event$$331_maximizedCellIndex$$.$getScrollingPane$ && ($container$$139_event$$331_maximizedCellIndex$$ = $container$$139_event$$331_maximizedCellIndex$$.$_container$), $next$$10$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, 
  $container$$139_event$$331_maximizedCellIndex$$)) : $container$$139_event$$331_maximizedCellIndex$$.keyCode == dvt.$KeyboardEvent$.$CLOSE_BRACKET$ && ($container$$139_event$$331_maximizedCellIndex$$ = $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $next$$10$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $container$$139_event$$331_maximizedCellIndex$$))));
  return $next$$10$$
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  if(this.$_nbox$.$getOptions$()._drawer) {
    return this
  }
  var $groupNodeData$$1$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[dvt.$NBoxConstants$.ID]);
  return $groupNodeData$$1$$ ? $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groupNodeData$$1$$) : $JSCompiler_alias_NULL$$
};
function $DvtNBoxDataAnimationHandler$$($context$$255$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$) {
  this.Init($context$$255$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$)
}
dvt.$Obj$.$createSubclass$($DvtNBoxDataAnimationHandler$$, dvt.$DataAnimationHandler$);
$DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($context$$256$$, $deleteContainer$$10$$, $oldNBox$$3$$, $newNBox$$1$$) {
  $DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $context$$256$$, $deleteContainer$$10$$);
  this.$_oldNBox$ = $oldNBox$$3$$;
  this.$_newNBox$ = $newNBox$$1$$
};
$DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
  return $DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$)
};
function $DvtNBoxDropTarget$$($view$$48$$) {
  this.$_view$ = $view$$48$$
}
dvt.$Obj$.$createSubclass$($DvtNBoxDropTarget$$, dvt.$DropTarget$);
$DvtNBoxDropTarget$$.prototype.$acceptDrag$ = function $$DvtNBoxDropTarget$$$$$acceptDrag$$($cell$$7_mouseX$$28$$, $mouseY$$28$$, $clientIds$$12$$) {
  if($cell$$7_mouseX$$28$$ = $JSCompiler_StaticMethods___getCellUnderPoint$$(this.$_view$, $cell$$7_mouseX$$28$$, $mouseY$$28$$)) {
    $cell$$7_mouseX$$28$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($cell$$7_mouseX$$28$$), this.$_dropSite$ = $cell$$7_mouseX$$28$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$($JSCompiler_alias_NULL$$), $JSCompiler_alias_NULL$$
  }
  return $clientIds$$12$$[0]
};
$DvtNBoxDropTarget$$.prototype.$getDropSite$ = function $$DvtNBoxDropTarget$$$$$getDropSite$$($mouseX$$29$$, $mouseY$$29$$) {
  var $cell$$8_data$$70$$ = $JSCompiler_StaticMethods___getCellUnderPoint$$(this.$_view$, $mouseX$$29$$, $mouseY$$29$$);
  return $cell$$8_data$$70$$ ? ($cell$$8_data$$70$$ = $cell$$8_data$$70$$.getData(), {$row$:$cell$$8_data$$70$$[dvt.$NBoxConstants$.$ROW$], $column$:$cell$$8_data$$70$$[dvt.$NBoxConstants$.$COLUMN$]}) : $JSCompiler_alias_NULL$$
};
function $DvtNBoxEventManager$$($nbox$$11$$) {
  this.Init($nbox$$11$$.$getCtx$(), $nbox$$11$$.$processEvent$, $nbox$$11$$);
  this.$_nbox$ = $nbox$$11$$
}
dvt.$Obj$.$createSubclass$($DvtNBoxEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtNBoxEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$332_obj$$153$$) {
  $event$$332_obj$$153$$ = this.$GetLogicalObject$($event$$332_obj$$153$$.target);
  this.$_processActionEvent$($event$$332_obj$$153$$);
  $event$$332_obj$$153$$ instanceof $DvtNBoxCategoryNode$$ && !$event$$332_obj$$153$$.$isSelectable$() && $JSCompiler_StaticMethods_openDrawer$$($event$$332_obj$$153$$)
};
$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$333$$) {
  $JSCompiler_StaticMethods__handleDblClick$$(this, this.$GetCurrentTargetForEvent$($event$$333$$))
};
$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$334$$) {
  $JSCompiler_StaticMethods__handleDblClick$$(this, this.$GetCurrentTargetForEvent$($event$$334$$))
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$335_obj$$154$$) {
  $event$$335_obj$$154$$ = this.$GetLogicalObject$($event$$335_obj$$154$$.target);
  this.$_processActionEvent$($event$$335_obj$$154$$)
};
$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$336_obj$$155$$) {
  $event$$336_obj$$155$$ = this.$GetLogicalObject$($event$$336_obj$$155$$.target);
  this.$_processActionEvent$($event$$336_obj$$155$$);
  $event$$336_obj$$155$$ instanceof $DvtNBoxCategoryNode$$ && !$event$$336_obj$$155$$.$isSelectable$() && $JSCompiler_StaticMethods_openDrawer$$($event$$336_obj$$155$$)
};
function $JSCompiler_StaticMethods__handleDblClick$$($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$45$$) {
  var $logicalObject$$5$$ = $JSCompiler_StaticMethods__handleDblClick$self$$.$GetLogicalObject$($displayable$$45$$);
  $logicalObject$$5$$ && ($logicalObject$$5$$.$isDoubleClickable$ && $logicalObject$$5$$.$isDoubleClickable$() && $logicalObject$$5$$.$handleDoubleClick$) && $logicalObject$$5$$.$handleDoubleClick$()
}
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$337$$) {
  var $eventConsumed$$2$$ = $JSCompiler_alias_FALSE$$, $keyCode$$22$$ = $event$$337$$.keyCode, $navigable$$10$$ = this.$getFocus$();
  if($keyCode$$22$$ == dvt.$KeyboardEvent$.$ENTER$ || $keyCode$$22$$ == dvt.$KeyboardEvent$.$ESCAPE$) {
    $navigable$$10$$ && $navigable$$10$$.$HandleKeyboardEvent$ && $navigable$$10$$.$HandleKeyboardEvent$($event$$337$$)
  }else {
    if($event$$337$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$337$$.ctrlKey) {
      if($navigable$$10$$ instanceof $DvtNBoxCategoryNode$$ || $navigable$$10$$ instanceof $DvtNBoxNode$$) {
        $eventConsumed$$2$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$337$$)
      }
    }else {
      $eventConsumed$$2$$ = $DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$337$$)
    }
  }
  return $eventConsumed$$2$$
};
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$338_options$$198$$, $categories$$17_hoverBehaviorDelay$$3_obj$$156$$, $bOver$$9_rolloverEvent$$4$$) {
  $event$$338_options$$198$$ = this.$_nbox$.$getOptions$();
  "dim" == $event$$338_options$$198$$.hoverBehavior && ($categories$$17_hoverBehaviorDelay$$3_obj$$156$$ = $categories$$17_hoverBehaviorDelay$$3_obj$$156$$.$getCategories$ ? $categories$$17_hoverBehaviorDelay$$3_obj$$156$$.$getCategories$() : [], $event$$338_options$$198$$.highlightedCategories = $bOver$$9_rolloverEvent$$4$$ ? $categories$$17_hoverBehaviorDelay$$3_obj$$156$$.slice() : $JSCompiler_alias_NULL$$, $bOver$$9_rolloverEvent$$4$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$338_options$$198$$.highlightedCategories, 
  $bOver$$9_rolloverEvent$$4$$), $categories$$17_hoverBehaviorDelay$$3_obj$$156$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($event$$338_options$$198$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$9_rolloverEvent$$4$$, $JSCompiler_StaticMethods_getNodeDisplayables$$(this.$_nbox$), $categories$$17_hoverBehaviorDelay$$3_obj$$156$$, "any" == $event$$338_options$$198$$.highlightMatch))
};
$JSCompiler_prototypeAlias$$.$CreateCategoryRolloverHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateCategoryRolloverHandler$$($callback$$92$$, $callbackObj$$58$$) {
  return new $DvtNBoxCategoryRolloverHandler$$($callback$$92$$, $callbackObj$$58$$)
};
$JSCompiler_prototypeAlias$$.$_processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processActionEvent$$($obj$$157$$) {
  $obj$$157$$ && ($obj$$157$$.$getAction$ && $obj$$157$$.$getAction$()) && this.$FireEvent$(dvt.$EventFactory$.$newActionEvent$("action", $obj$$157$$.$getAction$(), $obj$$157$$.getId()))
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$199$$ = this.$_nbox$.$getOptions$(), $drawerData$$4$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$), $cellData$$5$$ = $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$));
  return $drawerData$$4$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$4$$).$getChildContainer$().$hasScrollingContent$() || $cellData$$5$$ && $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$5$$).$getChildContainer$().$hasScrollingContent$() ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $options$$199$$.touchResponse === dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : dvt.$EventManager$.$TOUCH_RESPONSE_AUTO$
};
function $DvtNBoxKeyboardHandler$$($manager$$18$$, $nbox$$12$$) {
  this.Init($manager$$18$$, $nbox$$12$$)
}
dvt.$Obj$.$createSubclass$($DvtNBoxKeyboardHandler$$, dvt.$KeyboardHandler$);
$JSCompiler_prototypeAlias$$ = $DvtNBoxKeyboardHandler$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$19$$, $nbox$$13$$) {
  $DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $manager$$19$$);
  this.$_nbox$ = $nbox$$13$$
};
$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$339_index$$165$$) {
  if($event$$339_index$$165$$.keyCode == dvt.$KeyboardEvent$.$TAB$) {
    var $currentNavigable$$7_drawerData$$5_groups$$8$$ = this.$_eventManager$.$getFocus$(), $groupNodes$$1_next$$11$$ = $JSCompiler_alias_NULL$$;
    dvt.$EventManager$.$consumeEvent$($event$$339_index$$165$$);
    if($currentNavigable$$7_drawerData$$5_groups$$8$$) {
      $groupNodes$$1_next$$11$$ = $currentNavigable$$7_drawerData$$5_groups$$8$$
    }else {
      if($currentNavigable$$7_drawerData$$5_groups$$8$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
        $groupNodes$$1_next$$11$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$7_drawerData$$5_groups$$8$$)
      }else {
        if($DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($currentNavigable$$7_drawerData$$5_groups$$8$$ = this.$_nbox$.$getOptions$().__groups)) {
          var $groupNodes$$1_next$$11$$ = [], $id$$129$$;
          for($id$$129$$ in $currentNavigable$$7_drawerData$$5_groups$$8$$) {
            var $displayable$$46$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$7_drawerData$$5_groups$$8$$[$id$$129$$]);
            $displayable$$46$$ && $groupNodes$$1_next$$11$$.push($displayable$$46$$)
          }
          $groupNodes$$1_next$$11$$ = $DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$($JSCompiler_alias_NULL$$, $event$$339_index$$165$$, $groupNodes$$1_next$$11$$)
        }
      }
      $groupNodes$$1_next$$11$$ || ($event$$339_index$$165$$ = $DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * ($DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $groupNodes$$1_next$$11$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $event$$339_index$$165$$)))
    }
    return $groupNodes$$1_next$$11$$
  }
  return $DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$339_index$$165$$)
};
$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$340$$) {
  return $event$$340$$.keyCode == dvt.$KeyboardEvent$.$TAB$ ? $JSCompiler_alias_FALSE$$ : this.$isNavigationEvent$($event$$340$$) && !$event$$340$$.ctrlKey
};
$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$341$$) {
  return $event$$341$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$341$$.ctrlKey
};
function $DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$($obj$$158_stageP2$$3$$) {
  var $bounds$$107$$ = $obj$$158_stageP2$$3$$.$getDimensions$(), $stageP1$$3$$ = $obj$$158_stageP2$$3$$.$localToStage$(new dvt.$Point$($bounds$$107$$.x, $bounds$$107$$.y));
  $obj$$158_stageP2$$3$$ = $obj$$158_stageP2$$3$$.$localToStage$(new dvt.$Point$($bounds$$107$$.x + $bounds$$107$$.$w$, $bounds$$107$$.y + $bounds$$107$$.$h$));
  return new dvt.$Rectangle$($stageP1$$3$$.x, $stageP1$$3$$.y, $obj$$158_stageP2$$3$$.x - $stageP1$$3$$.x, $obj$$158_stageP2$$3$$.y - $stageP1$$3$$.y)
}
$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$342$$) {
  var $retVal$$2$$ = $JSCompiler_alias_FALSE$$;
  switch($event$$342$$.keyCode) {
    case dvt.$KeyboardEvent$.$OPEN_BRACKET$:
    ;
    case dvt.$KeyboardEvent$.$CLOSE_BRACKET$:
      $retVal$$2$$ = $JSCompiler_alias_TRUE$$;
      break;
    default:
      $retVal$$2$$ = $DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$342$$)
  }
  return $retVal$$2$$
};
function $DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$($curr$$, $bNext$$6_event$$343$$, $navigableItems$$1$$) {
  if(!$navigableItems$$1$$ || 0 >= $navigableItems$$1$$.length) {
    return $JSCompiler_alias_NULL$$
  }
  $navigableItems$$1$$[0] instanceof $DvtNBoxCategoryNode$$ && $navigableItems$$1$$.sort(function($curr$$, $bNext$$6_event$$343$$) {
    return $DvtNBoxCategoryNode$$.$compareSize$($curr$$.getData(), $bNext$$6_event$$343$$.getData())
  });
  if($curr$$ == $JSCompiler_alias_NULL$$) {
    return $navigableItems$$1$$[0]
  }
  var $next$$12$$ = $curr$$;
  $bNext$$6_event$$343$$ = $bNext$$6_event$$343$$.keyCode == dvt.$KeyboardEvent$.$RIGHT_ARROW$ || $bNext$$6_event$$343$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  for(var $itemCount$$1$$ = $navigableItems$$1$$.length, $i$$503$$ = 0;$i$$503$$ < $itemCount$$1$$;$i$$503$$++) {
    if($navigableItems$$1$$[$i$$503$$] === $curr$$) {
      $next$$12$$ = $navigableItems$$1$$[$bNext$$6_event$$343$$ ? $i$$503$$ + 1 < $itemCount$$1$$ ? $i$$503$$ + 1 : $i$$503$$ : 0 <= $i$$503$$ - 1 ? $i$$503$$ - 1 : $i$$503$$];
      break
    }
  }
  return $next$$12$$
}
function $DvtNBoxAutomation$$($dvtComponent$$11$$) {
  this.Init($dvtComponent$$11$$)
}
$goog$exportPath_$$("DvtNBoxAutomation", $DvtNBoxAutomation$$);
dvt.$Obj$.$createSubclass$($DvtNBoxAutomation$$, dvt.$Automation$);
$DvtNBoxAutomation$$.prototype.Init = $JSCompiler_set$$("$_nBox$");
$DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($displayable$$47_index$$166$$) {
  for(var $cell$$9_id$$130$$ = $JSCompiler_StaticMethods__getParentObject$$($displayable$$47_index$$166$$, $DvtNBoxCell$$), $drawer$$3$$ = $JSCompiler_StaticMethods__getParentObject$$($displayable$$47_index$$166$$, $DvtNBoxDrawer$$);$displayable$$47_index$$166$$ && !($displayable$$47_index$$166$$ instanceof dvt.$NBox$);) {
    var $nBox$$ = this.$getComponent$(), $component$$18_r$$28_values$$10$$, $action$$22$$;
    if($displayable$$47_index$$166$$ instanceof $DvtNBoxNode$$) {
      return $displayable$$47_index$$166$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($nBox$$, $displayable$$47_index$$166$$.getData().id), $component$$18_r$$28_values$$10$$ = $JSCompiler_StaticMethods__createBrackets$$([$displayable$$47_index$$166$$]), $component$$18_r$$28_values$$10$$ = "node" + $component$$18_r$$28_values$$10$$, this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
    }
    if($cell$$9_id$$130$$) {
      $component$$18_r$$28_values$$10$$ = $cell$$9_id$$130$$.getData().row;
      var $c$$18$$ = $cell$$9_id$$130$$.getData().column;
      $cell$$9_id$$130$$.$getChildContainer$();
      $component$$18_r$$28_values$$10$$ = $JSCompiler_StaticMethods__createBrackets$$([$component$$18_r$$28_values$$10$$, $c$$18$$]);
      $component$$18_r$$28_values$$10$$ = "cell" + $component$$18_r$$28_values$$10$$;
      if($displayable$$47_index$$166$$ instanceof $DvtNBoxCell$$) {
        return this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
      }
      if($displayable$$47_index$$166$$ instanceof dvt.$Button$) {
        if($JSCompiler_StaticMethods__getParentObject$$($displayable$$47_index$$166$$, $DvtNBoxNodeOverflow$$)) {
          return $action$$22$$ = "overflow", this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
        }
        if($displayable$$47_index$$166$$ == $DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $cell$$9_id$$130$$.getData(), "closeButton")) {
          return $action$$22$$ = "closeButton", this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
        }
      }
      if($displayable$$47_index$$166$$ instanceof $DvtNBoxCategoryNode$$) {
        return $cell$$9_id$$130$$ = $displayable$$47_index$$166$$.getData().id, $action$$22$$ = "groupNode", $action$$22$$ = $DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$47_index$$166$$.getData().nodeIndices[0]).groupCategory ? $action$$22$$ + $JSCompiler_StaticMethods__createBrackets$$([$cell$$9_id$$130$$]) : $action$$22$$ + $JSCompiler_StaticMethods__createBraces$$($cell$$9_id$$130$$.split(";")), this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
      }
    }
    if($drawer$$3$$) {
      $component$$18_r$$28_values$$10$$ = "dialog";
      if($displayable$$47_index$$166$$ instanceof $DvtNBoxDrawer$$) {
        return this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
      }
      if($displayable$$47_index$$166$$ instanceof dvt.$Button$) {
        return $action$$22$$ = "closeButton", this.$_createSubId$($component$$18_r$$28_values$$10$$, $action$$22$$)
      }
    }
    if($displayable$$47_index$$166$$ instanceof $DvtNBoxCategoryNode$$) {
      return $cell$$9_id$$130$$ = $displayable$$47_index$$166$$.getData().id, $component$$18_r$$28_values$$10$$ = "groupNode", $component$$18_r$$28_values$$10$$ = $DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$47_index$$166$$.getData().nodeIndices[0]).groupCategory ? $component$$18_r$$28_values$$10$$ + $JSCompiler_StaticMethods__createBrackets$$([$cell$$9_id$$130$$]) : $component$$18_r$$28_values$$10$$ + $JSCompiler_StaticMethods__createBraces$$($cell$$9_id$$130$$.split(";")), this.$_createSubId$($component$$18_r$$28_values$$10$$, 
      $action$$22$$)
    }
    $displayable$$47_index$$166$$ = $displayable$$47_index$$166$$.getParent()
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($component$$19$$, $action$$23$$) {
  var $subId$$24$$ = $component$$19$$;
  $action$$23$$ && ($subId$$24$$ += "#" + $action$$23$$);
  return $subId$$24$$
};
$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($displayable$$48_parsedId_subId$$25$$) {
  var $id$$131_nBox$$1$$ = this.$getComponent$();
  if($displayable$$48_parsedId_subId$$25$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$($id$$131_nBox$$1$$)
  }
  $displayable$$48_parsedId_subId$$25$$ = this.$_parseSubId$($displayable$$48_parsedId_subId$$25$$);
  var $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $displayable$$48_parsedId_subId$$25$$.component, $action$$24$$ = $displayable$$48_parsedId_subId$$25$$.action, $j$$71_values$$11$$ = $JSCompiler_alias_NULL$$, $colCount$$inline_3768_container$$141_data$$71$$ = $JSCompiler_alias_NULL$$;
  $displayable$$48_parsedId_subId$$25$$ = $JSCompiler_alias_NULL$$;
  0 === $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.lastIndexOf("node", 0) && ($j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBrackets$$($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$, $JSCompiler_alias_TRUE$$), $colCount$$inline_3768_container$$141_data$$71$$ = $DvtNBoxDataUtils$$.$getNode$($id$$131_nBox$$1$$, $j$$71_values$$11$$[0]), $displayable$$48_parsedId_subId$$25$$ = $DvtNBoxDataUtils$$.$getDisplayable$($id$$131_nBox$$1$$, $colCount$$inline_3768_container$$141_data$$71$$));
  if(0 === $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.lastIndexOf("cell", 0)) {
    var $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = $j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBrackets$$($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$), $count$$15_nBox$$inline_3767$$ = this.$getComponent$(), $colCount$$inline_3768_container$$141_data$$71$$ = $DvtNBoxDataUtils$$.$getColumnCount$($count$$15_nBox$$inline_3767$$), $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getRowIndex$($count$$15_nBox$$inline_3767$$, 
    $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$[0]), $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($count$$15_nBox$$inline_3767$$, $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$[1]), $colCount$$inline_3768_container$$141_data$$71$$ = $DvtNBoxDataUtils$$.$getCell$($id$$131_nBox$$1$$, $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ != $JSCompiler_alias_NULL$$ && $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ != 
    $JSCompiler_alias_NULL$$ ? $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ + $colCount$$inline_3768_container$$141_data$$71$$ * $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ : $JSCompiler_alias_NULL$$);
    if(!$colCount$$inline_3768_container$$141_data$$71$$) {
      return $JSCompiler_alias_NULL$$
    }
    $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getDisplayable$($id$$131_nBox$$1$$, $colCount$$inline_3768_container$$141_data$$71$$);
    if($action$$24$$) {
      $colCount$$inline_3768_container$$141_data$$71$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.$getChildContainer$();
      $colCount$$inline_3768_container$$141_data$$71$$.$getScrollingPane$ && ($colCount$$inline_3768_container$$141_data$$71$$ = $colCount$$inline_3768_container$$141_data$$71$$.$_container$);
      if("overflow" == $action$$24$$) {
        for($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = $colCount$$inline_3768_container$$141_data$$71$$.$getNumChildren$();0 < $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$;$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$--) {
          if($colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ - 1) instanceof $DvtNBoxNodeOverflow$$) {
            $displayable$$48_parsedId_subId$$25$$ = $colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ - 1).$_button$;
            break
          }
        }
      }
      "closeButton" == $action$$24$$ && ($displayable$$48_parsedId_subId$$25$$ = $DvtNBoxDataUtils$$.$getDisplayable$($id$$131_nBox$$1$$, $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.getData(), "closeButton"));
      if(0 === $action$$24$$.lastIndexOf("node", 0)) {
        $j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBrackets$$($action$$24$$, $JSCompiler_alias_TRUE$$);
        $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = $j$$71_values$$11$$[0];
        if(0 > $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$) {
          return $JSCompiler_alias_NULL$$
        }
        $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$131_nBox$$1$$, $colCount$$inline_3768_container$$141_data$$71$$);
        for($count$$15_nBox$$inline_3767$$ = 0;$cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ instanceof $DvtNBoxNode$$;) {
          if($count$$15_nBox$$inline_3767$$ == $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$) {
            $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
            break
          }
          $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getDisplayable$($id$$131_nBox$$1$$, $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.getData().__next);
          $count$$15_nBox$$inline_3767$$++
        }
      }
      if(0 === $action$$24$$.lastIndexOf("groupNode", 0)) {
        var $dialog_dialogContainer_value$$151$$;
        -1 < $action$$24$$.indexOf("{") ? $j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBraces$$($action$$24$$) : $dialog_dialogContainer_value$$151$$ = $action$$24$$.substring($action$$24$$.indexOf("[") + 1, $action$$24$$.indexOf("]"));
        for($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = 0;$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ < $colCount$$inline_3768_container$$141_data$$71$$.$getNumChildren$();$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$++) {
          if($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$), $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ instanceof $DvtNBoxCategoryNode$$) {
            if($id$$131_nBox$$1$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.getData().id, $j$$71_values$$11$$ && $JSCompiler_StaticMethods__compareCategories$$($j$$71_values$$11$$, $id$$131_nBox$$1$$.split(";"))) {
              $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
              break
            }else {
              if($dialog_dialogContainer_value$$151$$ && $dialog_dialogContainer_value$$151$$ == $id$$131_nBox$$1$$) {
                $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
                break
              }
            }
          }
        }
      }
    }else {
      $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$
    }
  }else {
    if(0 === $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.lastIndexOf("groupNode", 0)) {
      $colCount$$inline_3768_container$$141_data$$71$$ = $id$$131_nBox$$1$$.$getChildContainer$();
      -1 < $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.indexOf("{") ? $j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBraces$$($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$) : $dialog_dialogContainer_value$$151$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.substring($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.indexOf("[") + 1, $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.indexOf("]"));
      for($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = 0;$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ < $colCount$$inline_3768_container$$141_data$$71$$.$getNumChildren$();$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$++) {
        if($cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$), $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ instanceof $DvtNBoxCategoryNode$$) {
          if($id$$131_nBox$$1$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.getData().id, $j$$71_values$$11$$ && $JSCompiler_StaticMethods__compareCategories$$($j$$71_values$$11$$, $id$$131_nBox$$1$$.split(";"))) {
            $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
            break
          }else {
            if($dialog_dialogContainer_value$$151$$ && $dialog_dialogContainer_value$$151$$ == $id$$131_nBox$$1$$) {
              $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
              break
            }
          }
        }
      }
    }else {
      if("dialog" === $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ && ($colCount$$inline_3768_container$$141_data$$71$$ = $id$$131_nBox$$1$$.$getChildContainer$())) {
        for($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = 0;$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ < $colCount$$inline_3768_container$$141_data$$71$$.$getNumChildren$();$colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$++) {
          if($colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$) instanceof $DvtNBoxDrawer$$) {
            $dialog_dialogContainer_value$$151$$ = $colCount$$inline_3768_container$$141_data$$71$$.$getChildAt$($colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$);
            if($action$$24$$) {
              if("closeButton" == $action$$24$$) {
                for($j$$71_values$$11$$ = 0;$j$$71_values$$11$$ < $dialog_dialogContainer_value$$151$$.$getNumChildren$();$j$$71_values$$11$$++) {
                  $dialog_dialogContainer_value$$151$$.$getChildAt$($j$$71_values$$11$$) instanceof dvt.$Button$ && ($displayable$$48_parsedId_subId$$25$$ = $dialog_dialogContainer_value$$151$$.$getChildAt$($j$$71_values$$11$$))
                }
              }
              if(0 === $action$$24$$.lastIndexOf("node", 0)) {
                $dialog_dialogContainer_value$$151$$ = $dialog_dialogContainer_value$$151$$.$getChildContainer$().$_container$;
                $j$$71_values$$11$$ = $JSCompiler_StaticMethods__parseBrackets$$($action$$24$$, $JSCompiler_alias_TRUE$$);
                $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$ = $j$$71_values$$11$$[0];
                if(0 > $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$) {
                  return $JSCompiler_alias_NULL$$
                }
                $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$131_nBox$$1$$, $dialog_dialogContainer_value$$151$$);
                for($count$$15_nBox$$inline_3767$$ = 0;$cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ instanceof $DvtNBoxNode$$;) {
                  if($count$$15_nBox$$inline_3767$$ == $colIndex$$inline_3770_i$$504_nodeIndex$$8_values$$inline_3766$$) {
                    $displayable$$48_parsedId_subId$$25$$ = $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$;
                    break
                  }
                  $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$ = $DvtNBoxDataUtils$$.$getDisplayable$($id$$131_nBox$$1$$, $cell$$10_component$$20_node$$249_rowIndex$$inline_3769$$.getData().__next);
                  $count$$15_nBox$$inline_3767$$++
                }
              }
            }else {
              $displayable$$48_parsedId_subId$$25$$ = $dialog_dialogContainer_value$$151$$
            }
            break
          }
        }
      }
    }
  }
  return $displayable$$48_parsedId_subId$$25$$ ? $displayable$$48_parsedId_subId$$25$$.$getElem$() : $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getDomElementForSubId = $DvtNBoxAutomation$$.prototype.$getDomElementForSubId$;
$DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($subId$$26$$) {
  var $component$$21$$ = $JSCompiler_alias_NULL$$, $action$$25$$ = $JSCompiler_alias_NULL$$, $hashIndex$$ = $subId$$26$$.indexOf("#");
  -1 !== $hashIndex$$ ? ($component$$21$$ = $subId$$26$$.substring(0, $hashIndex$$), $action$$25$$ = $subId$$26$$.substring($hashIndex$$ + 1)) : $component$$21$$ = $subId$$26$$;
  return{component:$component$$21$$, action:$action$$25$$}
};
$DvtNBoxAutomation$$.prototype.$getComponent$ = $JSCompiler_get$$("$_nBox$");
function $JSCompiler_StaticMethods__parseBrackets$$($str$$14$$, $bParseInt$$) {
  var $values$$12$$ = $str$$14$$.substring($str$$14$$.indexOf("[") + 1, $str$$14$$.indexOf("]")).split(",");
  if($bParseInt$$) {
    for(var $i$$505$$ = 0;$i$$505$$ < $values$$12$$.length;$i$$505$$++) {
      $values$$12$$[$i$$505$$] = parseInt($values$$12$$[$i$$505$$])
    }
  }
  return 0 < $values$$12$$.length ? $values$$12$$ : $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods__createBrackets$$($values$$13$$) {
  return 0 < $values$$13$$.length ? "[" + $values$$13$$.join(",") + "]" : ""
}
function $JSCompiler_StaticMethods__parseBraces$$($str$$15$$) {
  return $str$$15$$.substring($str$$15$$.indexOf("{") + 1, $str$$15$$.lastIndexOf("}")).split(",")
}
function $JSCompiler_StaticMethods__createBraces$$($values$$14$$) {
  for(var $str$$16$$ = "{", $i$$506$$ = 0;$i$$506$$ < $values$$14$$.length;$i$$506$$++) {
    $str$$16$$ += $values$$14$$[$i$$506$$].trim() + ","
  }
  return $str$$16$$.substring(0, $str$$16$$.length - 1) + "}"
}
function $JSCompiler_StaticMethods__compareCategories$$($arr1$$, $arr2$$) {
  if($arr1$$.length != $arr2$$.length) {
    return $JSCompiler_alias_FALSE$$
  }
  $arr1$$.sort();
  $arr2$$.sort();
  for(var $i$$507$$ = 0;$i$$507$$ < $arr1$$.length;$i$$507$$++) {
    if($arr1$$[$i$$507$$].trim() != $arr2$$[$i$$507$$].trim()) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
function $JSCompiler_StaticMethods__getParentObject$$($displayable$$49$$, $type$$151$$) {
  for(var $parent$$64$$ = $displayable$$49$$;$parent$$64$$;) {
    if($parent$$64$$ instanceof $type$$151$$) {
      return $parent$$64$$
    }
    $parent$$64$$ = $parent$$64$$.getParent()
  }
  return $JSCompiler_alias_NULL$$
}
$DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($key$$61$$, $attribute$$1$$) {
  if(this.$_nBox$) {
    if("rowsTitle" == $key$$61$$) {
      if(this.$_nBox$.$getOptions$().rowsTitle) {
        return this.$_nBox$.$getOptions$().rowsTitle
      }
    }else {
      if("rowCount" == $key$$61$$) {
        var $cols$$3_data$$72_rows$$3$$ = this.$_nBox$.$getOptions$().rows;
        if($cols$$3_data$$72_rows$$3$$) {
          return $cols$$3_data$$72_rows$$3$$.length
        }
      }else {
        if("row" == $key$$61$$) {
          if(0 <= $DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $attribute$$1$$)) {
            return $cols$$3_data$$72_rows$$3$$ = {}, $cols$$3_data$$72_rows$$3$$.label = $DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $attribute$$1$$), $cols$$3_data$$72_rows$$3$$
          }
        }else {
          if("columnsTitle" == $key$$61$$) {
            if(this.$_nBox$.$getOptions$().columnsTitle) {
              return this.$_nBox$.$getOptions$().columnsTitle
            }
          }else {
            if("columnCount" == $key$$61$$) {
              if($cols$$3_data$$72_rows$$3$$ = this.$_nBox$.$getOptions$().columns) {
                return $cols$$3_data$$72_rows$$3$$.length
              }
            }else {
              if("column" == $key$$61$$) {
                if(0 <= $DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $attribute$$1$$)) {
                  return $cols$$3_data$$72_rows$$3$$ = {}, $cols$$3_data$$72_rows$$3$$.label = $DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $attribute$$1$$), $cols$$3_data$$72_rows$$3$$
                }
              }else {
                if("groupBehavior" == $key$$61$$) {
                  return $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$)
                }
              }
            }
          }
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getData = $DvtNBoxAutomation$$.prototype.getData;
$DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($groupInfo$$1$$) {
  if($groupInfo$$1$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    if("string" === typeof $groupInfo$$1$$) {
      return $JSCompiler_StaticMethods__getGroupNodeData$$(this, $groupInfo$$1$$)
    }
    var $groupData$$ = "", $key$$62$$;
    for($key$$62$$ in $groupInfo$$1$$) {
      $groupData$$ = $groupInfo$$1$$[$key$$62$$] ? $groupData$$ + ($key$$62$$ + ":" + $groupInfo$$1$$[$key$$62$$] + ";") : $groupData$$ + ($key$$62$$ + ";")
    }
    return $JSCompiler_StaticMethods__getGroupNodeData$$(this, $groupData$$.substring(0, $groupData$$.length - 1))
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getGroupNode = $DvtNBoxAutomation$$.prototype.$getGroupNode$;
function $JSCompiler_StaticMethods__getGroupNodeData$$($JSCompiler_StaticMethods__getGroupNodeData$self$$, $groupData$$1$$) {
  var $categoryData_indicatorIcon$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $groupData$$1$$);
  if($categoryData_indicatorIcon$$) {
    var $categoryNode$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
    if($categoryNode$$1$$) {
      var $data$$73$$ = {};
      $data$$73$$.selected = $categoryNode$$1$$.$isSelected$();
      $data$$73$$.color = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$73$$.indicatorColor = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$73$$.tooltip = $categoryNode$$1$$.$getShortDesc$();
      $data$$73$$.size = $categoryData_indicatorIcon$$.nodeIndices ? $categoryData_indicatorIcon$$.nodeIndices.length : -1;
      $categoryData_indicatorIcon$$ = $DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$, "indicatorIcon");
      $data$$73$$.indicatorIcon = $JSCompiler_StaticMethods__getGroupNodeData$self$$.$_getMarkerData$($categoryData_indicatorIcon$$);
      return $data$$73$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
$DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($rowValue$$, $columnValue$$) {
  var $cellObj$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $rowValue$$, $columnValue$$);
  if($cellObj$$) {
    var $cellIndex$$2$$ = $cellObj$$.$getCellIndex$(), $data$$74$$ = {};
    $data$$74$$.label = $cellObj$$.$getLabel$();
    $data$$74$$.background = $JSCompiler_StaticMethods_getBackground$$($cellObj$$);
    $data$$74$$.getNodeCount = function $$data$$74$$$getNodeCount$() {
      return $cellObj$$.$getNodeCount$()
    };
    $data$$74$$.rowValue = $rowValue$$;
    $data$$74$$.columnValue = $columnValue$$;
    $data$$74$$.cellIndex = $cellIndex$$2$$;
    return $data$$74$$
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getCell = $DvtNBoxAutomation$$.prototype.$getCell$;
$DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($cellData$$6$$, $nodeIndex$$9$$) {
  if(this.$_nBox$ && !$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
    var $nodeData$$38$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $cellData$$6$$.rowValue, $cellData$$6$$.columnValue).$getNode$($nodeIndex$$9$$);
    return this.$_getNode$($nodeData$$38$$)
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getCellNode = $DvtNBoxAutomation$$.prototype.$getCellNode$;
$DvtNBoxAutomation$$.prototype.$getNode$ = function $$DvtNBoxAutomation$$$$$getNode$$($nodeData$$39_nodeIndex$$10$$) {
  $nodeData$$39_nodeIndex$$10$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $nodeData$$39_nodeIndex$$10$$);
  return this.$_getNode$($nodeData$$39_nodeIndex$$10$$)
};
$DvtNBoxAutomation$$.prototype.getNode = $DvtNBoxAutomation$$.prototype.$getNode$;
$DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($indicatorIcon$$1_nodeData$$40$$) {
  if($indicatorIcon$$1_nodeData$$40$$) {
    var $icon$$39_node$$250$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
    if($icon$$39_node$$250$$) {
      var $data$$75$$ = {};
      $data$$75$$.selected = $icon$$39_node$$250$$.$isSelected$();
      $data$$75$$.tooltip = $icon$$39_node$$250$$.$getShortDesc$();
      $data$$75$$.color = $DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $data$$75$$.indicatorColor = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $indicatorIcon$$1_nodeData$$40$$.label && ($data$$75$$.label = $indicatorIcon$$1_nodeData$$40$$.label);
      $indicatorIcon$$1_nodeData$$40$$.secondaryLabel && ($data$$75$$.secondaryLabel = $indicatorIcon$$1_nodeData$$40$$.secondaryLabel);
      $icon$$39_node$$250$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "icon");
      $data$$75$$.icon = this.$_getMarkerData$($icon$$39_node$$250$$);
      $indicatorIcon$$1_nodeData$$40$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "indicatorIcon");
      $data$$75$$.indicatorIcon = this.$_getMarkerData$($indicatorIcon$$1_nodeData$$40$$);
      return $data$$75$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($cellData$$7$$, $groupInfo$$2$$) {
  if($groupInfo$$2$$ && $DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && $DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    if("string" === typeof $groupInfo$$2$$) {
      return $JSCompiler_StaticMethods__getGroupNodeData$$(this, $cellData$$7$$.cellIndex + ":" + $groupInfo$$2$$)
    }
    var $groupData$$2$$ = $cellData$$7$$.cellIndex + ":", $key$$63$$;
    for($key$$63$$ in $groupInfo$$2$$) {
      $groupData$$2$$ = $groupInfo$$2$$[$key$$63$$] ? $groupData$$2$$ + ($key$$63$$ + ":" + $groupInfo$$2$$[$key$$63$$] + ";") : $groupData$$2$$ + ($key$$63$$ + ";")
    }
    return $JSCompiler_StaticMethods__getGroupNodeData$$(this, $groupData$$2$$.substring(0, $groupData$$2$$.length - 1))
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getCellGroupNode = $DvtNBoxAutomation$$.prototype.$getCellGroupNode$;
$DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($marker$$11$$) {
  if($marker$$11$$) {
    var $data$$76$$ = {};
    $data$$76$$.shape = $marker$$11$$ instanceof dvt.$SimpleMarker$ ? $marker$$11$$.$getType$() : "none";
    $marker$$11$$.$getFill$() && ($data$$76$$.color = $marker$$11$$.$getFill$().$getColor$());
    return $data$$76$$
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
  var $data$$77_drawer$$4$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  if($data$$77_drawer$$4$$) {
    var $categoryData$$1$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $data$$77_drawer$$4$$.id);
    if($categoryData$$1$$) {
      var $categoryNode$$2_groupInfo$$3$$ = $DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $categoryData$$1$$), $data$$77_drawer$$4$$ = {};
      $data$$77_drawer$$4$$.label = $categoryNode$$2_groupInfo$$3$$.$getLabel$();
      $data$$77_drawer$$4$$.getNodeCount = function $$data$$77_drawer$$4$$$getNodeCount$() {
        return $categoryData$$1$$.nodeIndices ? $categoryData$$1$$.nodeIndices.length : -1
      };
      for(var $categoryNode$$2_groupInfo$$3$$ = {}, $categories$$18$$ = $categoryData$$1$$.id.split(";"), $idx$$16$$ = 0;$idx$$16$$ < $categories$$18$$.length;$idx$$16$$++) {
        var $row$$3$$ = $categories$$18$$[$idx$$16$$].split(":");
        $row$$3$$ && 2 == $row$$3$$.length && ($categoryNode$$2_groupInfo$$3$$[$row$$3$$[0]] = $row$$3$$[1])
      }
      $data$$77_drawer$$4$$.groupInfo = $categoryNode$$2_groupInfo$$3$$;
      return $data$$77_drawer$$4$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getDialog = $DvtNBoxAutomation$$.prototype.$getDialog$;
$DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($nodeData$$41_nodeIndex$$11$$) {
  var $categoryData$$2_drawer$$5$$ = $DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  return $categoryData$$2_drawer$$5$$ && ($categoryData$$2_drawer$$5$$ = $DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $categoryData$$2_drawer$$5$$.id)) && $categoryData$$2_drawer$$5$$.nodeIndices && $categoryData$$2_drawer$$5$$.nodeIndices[$nodeData$$41_nodeIndex$$11$$] != $JSCompiler_alias_NULL$$ ? ($nodeData$$41_nodeIndex$$11$$ = $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $categoryData$$2_drawer$$5$$.nodeIndices[$nodeData$$41_nodeIndex$$11$$]), this.$_getNode$($nodeData$$41_nodeIndex$$11$$)) : 
  $JSCompiler_alias_NULL$$
};
$DvtNBoxAutomation$$.prototype.getDialogNode = $DvtNBoxAutomation$$.prototype.$getDialogNode$;
$DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$ = function $$DvtNBoxAutomation$$$$$getNodeIdFromIndex$$($index$$168$$) {
  return $DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $index$$168$$).id
};
$DvtNBoxAutomation$$.prototype.getNodeIdFromIndex = $DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$;
$DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$ = function $$DvtNBoxAutomation$$$$$getNodeIndexFromId$$($id$$132$$) {
  return $DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nBox$, $id$$132$$)
};
$DvtNBoxAutomation$$.prototype.getNodeIndexFromId = $DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$;
var $DvtNBoxRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxRenderer$$, dvt.$Obj$);
$DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($nbox$$14$$, $container$$142$$, $availSpace$$97$$) {
  $DvtNBoxRenderer$$.$_renderBackground$($nbox$$14$$, $container$$142$$, $availSpace$$97$$);
  $DvtNBoxRenderer$$.$_renderLegend$($nbox$$14$$, $container$$142$$, $availSpace$$97$$);
  $DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$97$$);
  $DvtNBoxRenderer$$.$_renderTitles$($nbox$$14$$, $container$$142$$, $availSpace$$97$$);
  $DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$97$$);
  $DvtNBoxRenderer$$.$_renderCells$($nbox$$14$$, $container$$142$$, $availSpace$$97$$);
  $DvtNBoxRenderer$$.$_renderNodes$($nbox$$14$$, $container$$142$$, $availSpace$$97$$);
  $DvtNBoxRenderer$$.$_renderInitialSelection$($nbox$$14$$);
  $DvtNBoxRenderer$$.$_fixZOrder$($nbox$$14$$)
};
$DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($clipPath$$8_nbox$$15_rect$$22$$, $container$$143$$, $availSpace$$98$$) {
  $clipPath$$8_nbox$$15_rect$$22$$ = new dvt.$Rect$($clipPath$$8_nbox$$15_rect$$22$$.$getCtx$(), $availSpace$$98$$.x, $availSpace$$98$$.y, $availSpace$$98$$.$w$, $availSpace$$98$$.$h$);
  $clipPath$$8_nbox$$15_rect$$22$$.$setInvisibleFill$();
  $container$$143$$.$addChild$($clipPath$$8_nbox$$15_rect$$22$$);
  $clipPath$$8_nbox$$15_rect$$22$$ = new dvt.$ClipPath$;
  $clipPath$$8_nbox$$15_rect$$22$$.$addRect$($availSpace$$98$$.x, $availSpace$$98$$.y, $availSpace$$98$$.$w$, $availSpace$$98$$.$h$);
  $container$$143$$.$setClipPath$($clipPath$$8_nbox$$15_rect$$22$$)
};
$DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($nbox$$16$$, $container$$144_legendDwn_legendDwnImg$$, $availSpace$$99$$) {
  var $legendData$$4$$ = $DvtNBoxDataUtils$$.$getLegend$($nbox$$16$$);
  if($legendData$$4$$ && $legendData$$4$$.sections) {
    var $dims$$45_options$$200$$ = $nbox$$16$$.$getOptions$(), $rtl$$16$$ = dvt.$Agent$.$isRightToLeft$($nbox$$16$$.$getCtx$()), $panelDrawer$$3$$ = new dvt.$PanelDrawer$($nbox$$16$$.$getCtx$(), $nbox$$16$$.$processEvent$, $nbox$$16$$, "pd1");
    $panelDrawer$$3$$.$addEvtListener$(dvt.$PanelDrawerEvent$.$TYPE$, $nbox$$16$$.$processEvent$, $JSCompiler_alias_FALSE$$, $nbox$$16$$);
    $panelDrawer$$3$$.$setDockSide$(dvt.$PanelDrawer$.$DOCK_TOP$);
    $panelDrawer$$3$$.$setMaxHeight$($availSpace$$99$$.$h$ - $dims$$45_options$$200$$.__layout.legendBottomGap);
    $panelDrawer$$3$$.$setMaxWidth$($availSpace$$99$$.$w$ / 3);
    $container$$144_legendDwn_legendDwnImg$$.$addChild$($panelDrawer$$3$$);
    var $legend$$28$$ = dvt.$Legend$.newInstance($nbox$$16$$.$getCtx$(), $nbox$$16$$.$processEvent$, $nbox$$16$$);
    $container$$144_legendDwn_legendDwnImg$$.$addChild$($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$4$$ = $legend$$28$$.$getPreferredSize$($legendData$$4$$, $panelDrawer$$3$$.$getMaxContentWidth$(), $panelDrawer$$3$$.$getMaxContentHeight$());
    $legend$$28$$.$render$($legendData$$4$$, $legendEna_legendEnaImg_preferredSize$$4$$.$w$, $legendEna_legendEnaImg_preferredSize$$4$$.$h$);
    $container$$144_legendDwn_legendDwnImg$$.removeChild($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$4$$ = $dims$$45_options$$200$$._resources.legend_ena, $legendOvr_legendOvrImg$$ = $dims$$45_options$$200$$._resources.legend_ovr;
    $container$$144_legendDwn_legendDwnImg$$ = $dims$$45_options$$200$$._resources.legend_dwn;
    $legendEna_legendEnaImg_preferredSize$$4$$ = new dvt.$Image$($nbox$$16$$.$getCtx$(), $legendEna_legendEnaImg_preferredSize$$4$$.src, 0, 0, $legendEna_legendEnaImg_preferredSize$$4$$.width, $legendEna_legendEnaImg_preferredSize$$4$$.height);
    $legendOvr_legendOvrImg$$ = new dvt.$Image$($nbox$$16$$.$getCtx$(), $legendOvr_legendOvrImg$$.src, 0, 0, $legendOvr_legendOvrImg$$.width, $legendOvr_legendOvrImg$$.height);
    $container$$144_legendDwn_legendDwnImg$$ = new dvt.$Image$($nbox$$16$$.$getCtx$(), $container$$144_legendDwn_legendDwnImg$$.src, 0, 0, $container$$144_legendDwn_legendDwnImg$$.width, $container$$144_legendDwn_legendDwnImg$$.height);
    $panelDrawer$$3$$.$addPanel$($legend$$28$$, $legendEna_legendEnaImg_preferredSize$$4$$, $legendOvr_legendOvrImg$$, $container$$144_legendDwn_legendDwnImg$$, dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "LEGEND"), "legend");
    $rtl$$16$$ && $panelDrawer$$3$$.$setDiscloseDirection$();
    $panelDrawer$$3$$.$renderComponent$();
    "disclosed" == $dims$$45_options$$200$$[dvt.$NBoxConstants$.$LEGEND_DISCLOSURE$] && ($panelDrawer$$3$$.$setDisplayedPanelId$("legend"), $panelDrawer$$3$$.$setDisclosed$($JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$));
    $dims$$45_options$$200$$ = $panelDrawer$$3$$.$getDimensions$();
    $panelDrawer$$3$$.$setTranslate$($rtl$$16$$ ? 0 : $availSpace$$99$$.$w$, 0);
    $rtl$$16$$ && ($availSpace$$99$$.x += $dims$$45_options$$200$$.$w$);
    $availSpace$$99$$.$w$ -= $dims$$45_options$$200$$.$w$;
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$16$$, $legendData$$4$$, $legend$$28$$, "legend");
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$16$$, $legendData$$4$$, $panelDrawer$$3$$, "panelDrawer")
  }
};
$DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($nbox$$17$$, $container$$145$$, $availSpace$$100$$) {
  var $i$$508_options$$201$$ = $nbox$$17$$.$getOptions$(), $columnCount$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$17$$), $rowCount$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$17$$), $componentGap_maximizedColumnIndex$$ = $i$$508_options$$201$$.__layout.componentGap, $rowHeaderWidth_titleGap$$3$$ = $i$$508_options$$201$$.__layout.titleGap, $columnHeaderHeight_titleComponentGap$$ = $i$$508_options$$201$$.__layout.titleComponentGap, $rtl$$17$$ = dvt.$Agent$.$isRightToLeft$($nbox$$17$$.$getCtx$());
  $availSpace$$100$$.x += $componentGap_maximizedColumnIndex$$;
  $availSpace$$100$$.y += $componentGap_maximizedColumnIndex$$;
  $availSpace$$100$$.$w$ -= 2 * $componentGap_maximizedColumnIndex$$;
  $availSpace$$100$$.$h$ -= 2 * $componentGap_maximizedColumnIndex$$;
  var $maximizedColumn$$4_row$$4$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$17$$), $componentGap_maximizedColumnIndex$$ = $maximizedColumn$$4_row$$4$$ ? $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$17$$, $maximizedColumn$$4_row$$4$$) : -1, $maximizedRow$$4$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$17$$), $maximizedRowIndex$$ = $maximizedRow$$4$$ ? $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$17$$, $maximizedRow$$4$$) : -1, $cellDims_columnsTitle$$ = $JSCompiler_alias_NULL$$, $rowsTitle$$ = 
  $JSCompiler_alias_NULL$$, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
  $i$$508_options$$201$$[dvt.$NBoxConstants$.$COLUMNS_TITLE$] && ($cellDims_columnsTitle$$ = $DvtNBoxRenderer$$.$createText$($nbox$$17$$.$getCtx$(), $i$$508_options$$201$$[dvt.$NBoxConstants$.$COLUMNS_TITLE$], $i$$508_options$$201$$[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$COLUMNS_TITLE_STYLE$], dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $container$$145$$.$addChild$($cellDims_columnsTitle$$), $columnsTitleHeight$$ = dvt.$TextUtils$.$guessTextDimensions$($cellDims_columnsTitle$$).$h$);
  $i$$508_options$$201$$[dvt.$NBoxConstants$.$ROWS_TITLE$] && ($rowsTitle$$ = $DvtNBoxRenderer$$.$createText$($nbox$$17$$.$getCtx$(), $i$$508_options$$201$$[dvt.$NBoxConstants$.$ROWS_TITLE$], $i$$508_options$$201$$[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$ROWS_TITLE_STYLE$], dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $container$$145$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = dvt.$TextUtils$.$guessTextDimensions$($rowsTitle$$).$h$);
  for($i$$508_options$$201$$ = 0;$i$$508_options$$201$$ < $columnCount$$;$i$$508_options$$201$$++) {
    var $column_rowLabel$$ = $DvtNBoxDataUtils$$.$getColumn$($nbox$$17$$, $i$$508_options$$201$$);
    if($column_rowLabel$$[dvt.$NBoxConstants$.$LABEL$]) {
      var $columnLabel$$ = $DvtNBoxRenderer$$.$createText$($nbox$$17$$.$getCtx$(), $column_rowLabel$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getColumnLabelStyle$($nbox$$17$$, $i$$508_options$$201$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $columnLabelsHeight$$ = Math.max($columnLabelsHeight$$, dvt.$TextUtils$.$guessTextDimensions$($columnLabel$$).$h$);
      if(!$maximizedColumn$$4_row$$4$$ || $maximizedColumn$$4_row$$4$$ == $column_rowLabel$$[dvt.$NBoxConstants$.ID]) {
        $columnLabels$$[$i$$508_options$$201$$] = $columnLabel$$, $container$$145$$.$addChild$($columnLabels$$[$i$$508_options$$201$$])
      }
    }
  }
  for($i$$508_options$$201$$ = 0;$i$$508_options$$201$$ < $rowCount$$;$i$$508_options$$201$$++) {
    if($maximizedColumn$$4_row$$4$$ = $DvtNBoxDataUtils$$.$getRow$($nbox$$17$$, $i$$508_options$$201$$), $maximizedColumn$$4_row$$4$$[dvt.$NBoxConstants$.$LABEL$] && ($column_rowLabel$$ = $DvtNBoxRenderer$$.$createText$($nbox$$17$$.$getCtx$(), $maximizedColumn$$4_row$$4$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getRowLabelStyle$($nbox$$17$$, $i$$508_options$$201$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $rowLabelsWidth$$ = Math.max($rowLabelsWidth$$, dvt.$TextUtils$.$guessTextDimensions$($column_rowLabel$$).$h$), 
    !$maximizedRow$$4$$ || $maximizedRow$$4$$ == $maximizedColumn$$4_row$$4$$[dvt.$NBoxConstants$.ID])) {
      $rowLabels$$[$i$$508_options$$201$$] = $column_rowLabel$$, $container$$145$$.$addChild$($rowLabels$$[$i$$508_options$$201$$])
    }
  }
  if($rowsTitleWidth$$ || $rowLabelsWidth$$) {
    $rowTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $rowHeaderWidth_titleGap$$3$$)
  }
  if($columnsTitleHeight$$ || $columnLabelsHeight$$) {
    $columnTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $rowHeaderWidth_titleGap$$3$$)
  }
  $rowHeaderWidth_titleGap$$3$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
  $columnHeaderHeight_titleComponentGap$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
  $availSpace$$100$$.x += $rtl$$17$$ ? 0 : $rowHeaderWidth_titleGap$$3$$;
  $availSpace$$100$$.$w$ -= $rowHeaderWidth_titleGap$$3$$;
  $availSpace$$100$$.$h$ -= $columnHeaderHeight_titleComponentGap$$;
  $cellDims_columnsTitle$$ && dvt.$TextUtils$.$fitText$($cellDims_columnsTitle$$, $availSpace$$100$$.$w$, $columnsTitleHeight$$, $container$$145$$) && ($DvtNBoxRenderer$$.$positionText$($cellDims_columnsTitle$$, $availSpace$$100$$.x + $availSpace$$100$$.$w$ / 2, $availSpace$$100$$.y + $availSpace$$100$$.$h$ + $columnHeaderHeight_titleComponentGap$$ - $columnsTitleHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$17$$, $nbox$$17$$.$getOptions$(), $cellDims_columnsTitle$$, dvt.$NBoxConstants$.$COLUMNS_TITLE$));
  $rowsTitle$$ && dvt.$TextUtils$.$fitText$($rowsTitle$$, $availSpace$$100$$.$h$, $rowsTitleWidth$$, $container$$145$$) && ($DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $availSpace$$100$$.x + ($rtl$$17$$ ? $availSpace$$100$$.$w$ : 0) + ($rtl$$17$$ ? 1 : -1) * ($rowHeaderWidth_titleGap$$3$$ - $rowsTitleWidth$$ / 2), $availSpace$$100$$.y + $availSpace$$100$$.$h$ / 2, $rtl$$17$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$17$$, $nbox$$17$$.$getOptions$(), $rowsTitle$$, 
  dvt.$NBoxConstants$.$ROWS_TITLE$));
  for($i$$508_options$$201$$ = 0;$i$$508_options$$201$$ < $columnCount$$;$i$$508_options$$201$$++) {
    $columnLabels$$[$i$$508_options$$201$$] && ($cellDims_columnsTitle$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$17$$, -1 == $maximizedRowIndex$$ ? 0 : $maximizedRowIndex$$, $i$$508_options$$201$$, $availSpace$$100$$), dvt.$TextUtils$.$fitText$($columnLabels$$[$i$$508_options$$201$$], $cellDims_columnsTitle$$.$w$, $columnLabelsHeight$$, $container$$145$$) && ($DvtNBoxRenderer$$.$positionText$($columnLabels$$[$i$$508_options$$201$$], $cellDims_columnsTitle$$.x + $cellDims_columnsTitle$$.$w$ / 
    2, $availSpace$$100$$.y + $availSpace$$100$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$17$$, $DvtNBoxDataUtils$$.$getColumn$($nbox$$17$$, $i$$508_options$$201$$), $columnLabels$$[$i$$508_options$$201$$], dvt.$NBoxConstants$.$LABEL$)))
  }
  for($i$$508_options$$201$$ = 0;$i$$508_options$$201$$ < $rowCount$$;$i$$508_options$$201$$++) {
    $rowLabels$$[$i$$508_options$$201$$] && ($cellDims_columnsTitle$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$17$$, $i$$508_options$$201$$, -1 == $componentGap_maximizedColumnIndex$$ ? 0 : $componentGap_maximizedColumnIndex$$, $availSpace$$100$$), dvt.$TextUtils$.$fitText$($rowLabels$$[$i$$508_options$$201$$], $cellDims_columnsTitle$$.$h$, $rowLabelsWidth$$, $container$$145$$) && ($DvtNBoxRenderer$$.$positionText$($rowLabels$$[$i$$508_options$$201$$], $availSpace$$100$$.x + ($rtl$$17$$ ? 
    $availSpace$$100$$.$w$ : 0) + ($rtl$$17$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $cellDims_columnsTitle$$.y + $cellDims_columnsTitle$$.$h$ / 2, $rtl$$17$$ ? Math.PI / 2 : -Math.PI / 2), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$17$$, $DvtNBoxDataUtils$$.$getRow$($nbox$$17$$, $i$$508_options$$201$$), $rowLabels$$[$i$$508_options$$201$$], dvt.$NBoxConstants$.$LABEL$)))
  }
};
$DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($ctx$$5_text$$65$$, $strText$$3$$, $style$$80$$, $halign$$7$$, $valign$$6$$) {
  $ctx$$5_text$$65$$ = new dvt.$OutputText$($ctx$$5_text$$65$$, $strText$$3$$, 0, 0);
  $ctx$$5_text$$65$$.$setCSSStyle$($style$$80$$);
  $ctx$$5_text$$65$$.$setHorizAlignment$($halign$$7$$);
  $ctx$$5_text$$65$$.$setVertAlignment$($valign$$6$$);
  return $ctx$$5_text$$65$$
};
$DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($nbox$$18$$, $container$$146$$, $availSpace$$101$$) {
  for(var $rowCount$$1$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$18$$), $columnCount$$1$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$18$$), $r$$29$$ = 0;$r$$29$$ < $rowCount$$1$$;$r$$29$$++) {
    for(var $c$$19$$ = 0;$c$$19$$ < $columnCount$$1$$;$c$$19$$++) {
      var $cell$$11$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$18$$, $r$$29$$ * $columnCount$$1$$ + $c$$19$$);
      $DvtNBoxCell$$.newInstance($nbox$$18$$, $cell$$11$$).$render$($container$$146$$, $availSpace$$101$$)
    }
  }
};
$DvtNBoxRenderer$$.$getCellCounts$ = function $$DvtNBoxRenderer$$$$getCellCounts$$($nbox$$19$$) {
  return $nbox$$19$$.$getOptions$().__cellCounts || $DvtNBoxRenderer$$.$_calculateCellCounts$($nbox$$19$$)
};
$DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($nbox$$20$$) {
  var $rowCount$$2_total$$5$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$20$$), $columnCount$$2_highlighted$$1$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$20$$), $cellCount$$4_nodeCount$$4$$ = $rowCount$$2_total$$5$$ * $columnCount$$2_highlighted$$1$$, $rowCount$$2_total$$5$$ = [], $columnCount$$2_highlighted$$1$$ = $JSCompiler_alias_NULL$$, $highlightedItems$$1_node$$251$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$20$$), $highlightedMap$$1_retVal$$3$$ = {};
  if($highlightedItems$$1_node$$251$$) {
    for(var $columnCount$$2_highlighted$$1$$ = [], $i$$509$$ = 0;$i$$509$$ < $highlightedItems$$1_node$$251$$.length;$i$$509$$++) {
      $highlightedMap$$1_retVal$$3$$[$highlightedItems$$1_node$$251$$[$i$$509$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  for($i$$509$$ = 0;$i$$509$$ < $cellCount$$4_nodeCount$$4$$;$i$$509$$++) {
    $rowCount$$2_total$$5$$[$i$$509$$] = 0, $columnCount$$2_highlighted$$1$$ && ($columnCount$$2_highlighted$$1$$[$i$$509$$] = 0)
  }
  $cellCount$$4_nodeCount$$4$$ = $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$20$$);
  for($i$$509$$ = 0;$i$$509$$ < $cellCount$$4_nodeCount$$4$$;$i$$509$$++) {
    if($highlightedItems$$1_node$$251$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$20$$, $i$$509$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$20$$, $highlightedItems$$1_node$$251$$)) {
      var $cellIndex$$3$$ = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$20$$, $highlightedItems$$1_node$$251$$);
      $rowCount$$2_total$$5$$[$cellIndex$$3$$]++;
      $columnCount$$2_highlighted$$1$$ && $highlightedMap$$1_retVal$$3$$[$highlightedItems$$1_node$$251$$[dvt.$NBoxConstants$.ID]] && $columnCount$$2_highlighted$$1$$[$cellIndex$$3$$]++
    }
  }
  $highlightedMap$$1_retVal$$3$$ = {};
  $highlightedMap$$1_retVal$$3$$.total = $rowCount$$2_total$$5$$;
  $columnCount$$2_highlighted$$1$$ && ($highlightedMap$$1_retVal$$3$$.highlighted = $columnCount$$2_highlighted$$1$$);
  return $nbox$$20$$.$getOptions$().__cellCounts = $highlightedMap$$1_retVal$$3$$
};
$DvtNBoxRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxRenderer$$$$calculateNodeOrders$$($nbox$$21$$) {
  var $orderPasses$$ = ["normal"], $cellNodes_highlightedItems$$2$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$21$$), $highlightedMap$$2$$ = {};
  if($cellNodes_highlightedItems$$2$$) {
    for(var $i$$510_nodeCount$$5$$ = 0;$i$$510_nodeCount$$5$$ < $cellNodes_highlightedItems$$2$$.length;$i$$510_nodeCount$$5$$++) {
      $highlightedMap$$2$$[$cellNodes_highlightedItems$$2$$[$i$$510_nodeCount$$5$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  var $p$$19_selectedItems$$1$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$21$$), $selectedMap$$1$$ = {};
  if($p$$19_selectedItems$$1$$) {
    for($i$$510_nodeCount$$5$$ = 0;$i$$510_nodeCount$$5$$ < $p$$19_selectedItems$$1$$.length;$i$$510_nodeCount$$5$$++) {
      $selectedMap$$1$$[$p$$19_selectedItems$$1$$[$i$$510_nodeCount$$5$$]] = $JSCompiler_alias_TRUE$$
    }
  }
  $cellNodes_highlightedItems$$2$$ ? $orderPasses$$ = $p$$19_selectedItems$$1$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $p$$19_selectedItems$$1$$ && ($orderPasses$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
  $cellNodes_highlightedItems$$2$$ = {};
  $i$$510_nodeCount$$5$$ = $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$21$$);
  for($p$$19_selectedItems$$1$$ = 0;$p$$19_selectedItems$$1$$ < $orderPasses$$.length;$p$$19_selectedItems$$1$$++) {
    for(var $n$$15$$ = 0;$n$$15$$ < $i$$510_nodeCount$$5$$;$n$$15$$++) {
      var $node$$252$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$21$$, $n$$15$$);
      if(!$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$21$$, $node$$252$$) && ("normal" == $orderPasses$$[$p$$19_selectedItems$$1$$] || "highlighted-selected" == $orderPasses$$[$p$$19_selectedItems$$1$$] && $highlightedMap$$2$$[$node$$252$$[dvt.$NBoxConstants$.ID]] && $selectedMap$$1$$[$node$$252$$[dvt.$NBoxConstants$.ID]] || "highlighted-unselected" == $orderPasses$$[$p$$19_selectedItems$$1$$] && $highlightedMap$$2$$[$node$$252$$[dvt.$NBoxConstants$.ID]] && !$selectedMap$$1$$[$node$$252$$[dvt.$NBoxConstants$.ID]] || 
      "unhighlighted-selected" == $orderPasses$$[$p$$19_selectedItems$$1$$] && !$highlightedMap$$2$$[$node$$252$$[dvt.$NBoxConstants$.ID]] && $selectedMap$$1$$[$node$$252$$[dvt.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $orderPasses$$[$p$$19_selectedItems$$1$$] && !$highlightedMap$$2$$[$node$$252$$[dvt.$NBoxConstants$.ID]] && !$selectedMap$$1$$[$node$$252$$[dvt.$NBoxConstants$.ID]])) {
        var $cellIndex$$4$$ = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$21$$, $node$$252$$);
        $DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$21$$, $cellIndex$$4$$) || ($cellNodes_highlightedItems$$2$$[$cellIndex$$4$$] || ($cellNodes_highlightedItems$$2$$[$cellIndex$$4$$] = []), $cellNodes_highlightedItems$$2$$[$cellIndex$$4$$].push($node$$252$$))
      }
    }
  }
  return $cellNodes_highlightedItems$$2$$
};
$DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($nbox$$22$$, $container$$147_rowCount$$3$$, $availSpace$$102_columnCount$$3$$) {
  if(0 < $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$22$$)) {
    if("counts" == $DvtNBoxDataUtils$$.$getCellContent$($nbox$$22$$)) {
      $container$$147_rowCount$$3$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$22$$);
      $availSpace$$102_columnCount$$3$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$22$$);
      for(var $bodyCountLabels$$ = [], $r$$30$$ = 0;$r$$30$$ < $container$$147_rowCount$$3$$;$r$$30$$++) {
        for(var $c$$20$$ = 0;$c$$20$$ < $availSpace$$102_columnCount$$3$$;$c$$20$$++) {
          $bodyCountLabels$$.push($r$$30$$ * $availSpace$$102_columnCount$$3$$ + $c$$20$$)
        }
      }
      $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$22$$, $bodyCountLabels$$)
    }else {
      $DvtNBoxDataUtils$$.$getGrouping$($nbox$$22$$) ? ($DvtNBoxRenderer$$.$_renderCategoryNodes$($nbox$$22$$, $container$$147_rowCount$$3$$, $availSpace$$102_columnCount$$3$$), $DvtNBoxRenderer$$.$_renderDrawer$($nbox$$22$$, $container$$147_rowCount$$3$$, $availSpace$$102_columnCount$$3$$)) : $DvtNBoxRenderer$$.$_renderIndividualNodes$($nbox$$22$$)
    }
  }
};
$DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($nbox$$23$$) {
  var $gridGap$$ = $nbox$$23$$.$getOptions$().__layout.gridGap, $rtl$$18$$ = dvt.$Agent$.$isRightToLeft$($nbox$$23$$.$getCtx$()), $alphaFade_bodyCountLabels$$1$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$23$$), $ci$$2_highlightedItems$$3$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$23$$), $cellData$$8_highlightedMap$$3$$ = {};
  if($ci$$2_highlightedItems$$3$$) {
    for(var $i$$511_nodeLayout$$1$$ = 0;$i$$511_nodeLayout$$1$$ < $ci$$2_highlightedItems$$3$$.length;$i$$511_nodeLayout$$1$$++) {
      $cellData$$8_highlightedMap$$3$$[$ci$$2_highlightedItems$$3$$[$i$$511_nodeLayout$$1$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  for(var $cellNodes$$1$$ = $DvtNBoxRenderer$$.$calculateNodeOrders$($nbox$$23$$), $i$$511_nodeLayout$$1$$ = $DvtNBoxNodeRenderer$$.$calculateNodeLayout$($nbox$$23$$, $cellNodes$$1$$), $hGridSize$$ = $i$$511_nodeLayout$$1$$.indicatorSectionWidth + $i$$511_nodeLayout$$1$$.iconSectionWidth + $i$$511_nodeLayout$$1$$.labelSectionWidth + $gridGap$$, $vGridSize$$ = $i$$511_nodeLayout$$1$$.nodeHeight + $gridGap$$, $rowCount$$4$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$23$$), $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$23$$), 
  $r$$31$$ = 0;$r$$31$$ < $rowCount$$4$$;$r$$31$$++) {
    for(var $c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
      var $cellIndex$$5_cellLayout$$1$$ = $r$$31$$ * $columnCount$$4$$ + $c$$21$$, $nodes$$13$$ = $cellNodes$$1$$[$cellIndex$$5_cellLayout$$1$$];
      if($nodes$$13$$ && $nodes$$13$$.length) {
        var $cell$$12$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$23$$, $cellIndex$$5_cellLayout$$1$$), $cellIndex$$5_cellLayout$$1$$ = $i$$511_nodeLayout$$1$$.cellLayouts[$cellIndex$$5_cellLayout$$1$$], $cellRows_gridXOrigin_prevNode$$ = $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns;
        if(!(0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow)) {
          for(var $maxNodes$$ = $cellRows_gridXOrigin_prevNode$$ * $cellColumns_overflowContainer$$ - ($cellIndex$$5_cellLayout$$1$$.overflow ? 1 : 0), $n$$16$$ = 0;$n$$16$$ < $nodes$$13$$.length;$n$$16$$++) {
            var $node$$253$$ = $nodes$$13$$[$n$$16$$];
            if(0 > $maxNodes$$ || $n$$16$$ < $maxNodes$$) {
              var $cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$23$$, $cell$$12$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$1$$ instanceof dvt.$SimpleScrollableContainer$, $nodeContainer$$ = new $DvtNBoxNode$$($nbox$$23$$, $node$$253$$), $cellRows_gridXOrigin_prevNode$$ = $cell$$12$$.__childArea.x + ($cell$$12$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $hGridSize$$ + $gridGap$$) / 2, $gridYOrigin$$ = $scrolling$$ ? $gridGap$$ : $cell$$12$$.__childArea.y, 
              $gridColumn$$ = $n$$16$$ % $cellColumns_overflowContainer$$;
              $rtl$$18$$ && ($gridColumn$$ = $cellColumns_overflowContainer$$ - $gridColumn$$ - 1);
              var $gridRow$$ = Math.floor($n$$16$$ / $cellColumns_overflowContainer$$);
              $nodeContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $hGridSize$$ * $gridColumn$$, $gridYOrigin$$ + $vGridSize$$ * $gridRow$$);
              $nodeContainer$$.$render$($scrolling$$ ? $cellContainer$$1$$.$_container$ : $cellContainer$$1$$, $i$$511_nodeLayout$$1$$);
              $ci$$2_highlightedItems$$3$$ && !$cellData$$8_highlightedMap$$3$$[$node$$253$$[dvt.$NBoxConstants$.ID]] && $nodeContainer$$.$setAlpha$($alphaFade_bodyCountLabels$$1$$);
              if($cellRows_gridXOrigin_prevNode$$ = 0 < $n$$16$$ ? $nodes$$13$$[$n$$16$$ - 1] : $JSCompiler_alias_NULL$$) {
                $node$$253$$.__prev = $cellRows_gridXOrigin_prevNode$$, $cellRows_gridXOrigin_prevNode$$.__next = $node$$253$$
              }
            }
          }
        }
      }
    }
  }
  $rowCount$$4$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$23$$);
  $columnCount$$4$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$23$$);
  $alphaFade_bodyCountLabels$$1$$ = [];
  for($r$$31$$ = 0;$r$$31$$ < $rowCount$$4$$;$r$$31$$++) {
    for($c$$21$$ = 0;$c$$21$$ < $columnCount$$4$$;$c$$21$$++) {
      $ci$$2_highlightedItems$$3$$ = $r$$31$$ * $columnCount$$4$$ + $c$$21$$;
      if(!$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$23$$, $ci$$2_highlightedItems$$3$$) && ($cellData$$8_highlightedMap$$3$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$23$$, $ci$$2_highlightedItems$$3$$), $cell$$12$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$23$$, $cellData$$8_highlightedMap$$3$$), $cellIndex$$5_cellLayout$$1$$ = $i$$511_nodeLayout$$1$$.cellLayouts[$ci$$2_highlightedItems$$3$$], $cellIndex$$5_cellLayout$$1$$.overflow)) {
        if($cellRows_gridXOrigin_prevNode$$ = $cellIndex$$5_cellLayout$$1$$.cellRows, $cellColumns_overflowContainer$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns, 0 == $cellRows_gridXOrigin_prevNode$$ || 0 == $cellColumns_overflowContainer$$ || 1 == $cellRows_gridXOrigin_prevNode$$ && 1 == $cellColumns_overflowContainer$$ && $cellIndex$$5_cellLayout$$1$$.overflow) {
          $alphaFade_bodyCountLabels$$1$$.push($ci$$2_highlightedItems$$3$$)
        }else {
          $cellColumns_overflowContainer$$ = $DvtNBoxNodeOverflow$$.newInstance($nbox$$23$$, $cell$$12$$);
          if(($cellRows_gridXOrigin_prevNode$$ = $DvtNBoxDataUtils$$.$getLastNavigableNode$($nbox$$23$$, $cell$$12$$.$getChildContainer$())) && $cellRows_gridXOrigin_prevNode$$ instanceof $DvtNBoxNode$$) {
            $cellColumns_overflowContainer$$.__prev = $cellRows_gridXOrigin_prevNode$$.getData(), $cellRows_gridXOrigin_prevNode$$.getData().__next = $cellColumns_overflowContainer$$
          }
          $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$23$$, $cellColumns_overflowContainer$$, $cellColumns_overflowContainer$$);
          $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$23$$, $cellData$$8_highlightedMap$$3$$, $cellColumns_overflowContainer$$, "overflow");
          $cellRows_gridXOrigin_prevNode$$ = $cellData$$8_highlightedMap$$3$$.__childArea.x + ($cellData$$8_highlightedMap$$3$$.__childArea.$w$ - $cellIndex$$5_cellLayout$$1$$.cellColumns * $hGridSize$$ + $gridGap$$) / 2;
          $gridYOrigin$$ = $cellData$$8_highlightedMap$$3$$.__childArea.y;
          $gridColumn$$ = $cellIndex$$5_cellLayout$$1$$.cellColumns - 1;
          $rtl$$18$$ && ($gridColumn$$ = 0);
          $gridRow$$ = $cellIndex$$5_cellLayout$$1$$.cellRows - 1;
          $cellColumns_overflowContainer$$.$setTranslate$($cellRows_gridXOrigin_prevNode$$ + $hGridSize$$ * $gridColumn$$, $gridYOrigin$$ + $vGridSize$$ * $gridRow$$);
          $cellColumns_overflowContainer$$.$render$($cell$$12$$.$getChildContainer$(), $hGridSize$$ - $gridGap$$, $vGridSize$$ - $gridGap$$)
        }
      }
      $DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$23$$, $ci$$2_highlightedItems$$3$$) && ($cellContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$23$$, $DvtNBoxDataUtils$$.$getCell$($nbox$$23$$, $ci$$2_highlightedItems$$3$$)).$getChildContainer$(), $cellContainer$$1$$.$prepareContentPane$())
    }
  }
  0 < $alphaFade_bodyCountLabels$$1$$.length && $DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$23$$, $alphaFade_bodyCountLabels$$1$$)
};
$DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($nbox$$24$$, $cellCount$$5_columnCount$$5_container$$149$$, $availSpace$$104_layouts$$) {
  var $groups$$9$$ = {}, $nodeContainer$$1_nodeCount$$6$$ = $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$24$$), $groupBehavior$$1_scale$$44$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$24$$), $cell$$13_rtl$$19$$ = dvt.$Agent$.$isRightToLeft$($nbox$$24$$.$getCtx$()), $highlightedItems$$4_node$$254_positions$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$24$$), $childContainer_highlightedMap$$4_xPos$$ = {};
  if($highlightedItems$$4_node$$254_positions$$) {
    for(var $i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $highlightedItems$$4_node$$254_positions$$.length;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
      $childContainer_highlightedMap$$4_xPos$$[$highlightedItems$$4_node$$254_positions$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  for($i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $nodeContainer$$1_nodeCount$$6$$;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
    if($highlightedItems$$4_node$$254_positions$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$24$$, $highlightedItems$$4_node$$254_positions$$)) {
      var $groupContainer_scrolling$$1_yPos$$ = $groups$$9$$;
      if($groupBehavior$$1_scale$$44$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $groupId$$23_j$$72$$ = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$24$$, $highlightedItems$$4_node$$254_positions$$) + "", $groupContainer_scrolling$$1_yPos$$ = $groups$$9$$[$groupId$$23_j$$72$$];
        $groupContainer_scrolling$$1_yPos$$ || ($groupContainer_scrolling$$1_yPos$$ = {}, $groups$$9$$[$groupId$$23_j$$72$$] = $groupContainer_scrolling$$1_yPos$$)
      }
      var $groupId$$23_j$$72$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($highlightedItems$$4_node$$254_positions$$), $group$$27$$ = $groupContainer_scrolling$$1_yPos$$[$groupId$$23_j$$72$$];
      $group$$27$$ || ($group$$27$$ = {}, $group$$27$$[dvt.$NBoxConstants$.ID] = $groupId$$23_j$$72$$, $groupBehavior$$1_scale$$44$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($group$$27$$[dvt.$NBoxConstants$.$CELL$] = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$24$$, $highlightedItems$$4_node$$254_positions$$)), $group$$27$$.nodeIndices = [], $group$$27$$.highlightedCount = 0, $groupContainer_scrolling$$1_yPos$$[$groupId$$23_j$$72$$] = $group$$27$$);
      $group$$27$$.nodeIndices.push($i$$512_n$$17_otherGroups$$1_rowCount$$5$$);
      $childContainer_highlightedMap$$4_xPos$$[$DvtNBoxDataUtils$$.$getNode$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$)[dvt.$NBoxConstants$.ID]] && $group$$27$$.highlightedCount++
    }
  }
  if($groupBehavior$$1_scale$$44$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    var $i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = {}, $cellId_center$$5_sortedGroups$$;
    for($cellId_center$$5_sortedGroups$$ in $groups$$9$$) {
      $i$$512_n$$17_otherGroups$$1_rowCount$$5$$[$cellId_center$$5_sortedGroups$$] = $DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$24$$, $groups$$9$$[$cellId_center$$5_sortedGroups$$])
    }
  }else {
    $i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = $DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$24$$, $groups$$9$$)
  }
  $groups$$9$$ = $i$$512_n$$17_otherGroups$$1_rowCount$$5$$;
  $nbox$$24$$.$getOptions$().__groups = $groups$$9$$;
  if($groupBehavior$$1_scale$$44$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    $cellId_center$$5_sortedGroups$$ = [];
    for($group$$27$$ in $groups$$9$$) {
      $cellId_center$$5_sortedGroups$$.push($group$$27$$)
    }
    $cellId_center$$5_sortedGroups$$.sort(function($nbox$$24$$, $cellCount$$5_columnCount$$5_container$$149$$) {
      return $DvtNBoxCategoryNode$$.$compareSize$($groups$$9$$[$nbox$$24$$], $groups$$9$$[$cellCount$$5_columnCount$$5_container$$149$$])
    });
    $groupBehavior$$1_scale$$44$$ = Math.sqrt(0.15 * $availSpace$$104_layouts$$.$w$ * $availSpace$$104_layouts$$.$h$ / $nodeContainer$$1_nodeCount$$6$$);
    for($i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $cellId_center$$5_sortedGroups$$.length;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
      $group$$27$$ = $cellId_center$$5_sortedGroups$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$];
      $groupContainer_scrolling$$1_yPos$$ = $childContainer_highlightedMap$$4_xPos$$ = 0;
      $nodeContainer$$1_nodeCount$$6$$ = $groups$$9$$[$group$$27$$].nodeIndices.length;
      for($groupId$$23_j$$72$$ = 0;$groupId$$23_j$$72$$ < $nodeContainer$$1_nodeCount$$6$$;$groupId$$23_j$$72$$++) {
        $highlightedItems$$4_node$$254_positions$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$24$$, $groups$$9$$[$group$$27$$].nodeIndices[$groupId$$23_j$$72$$]), $childContainer_highlightedMap$$4_xPos$$ += $DvtNBoxDataUtils$$.$getXPercentage$($nbox$$24$$, $highlightedItems$$4_node$$254_positions$$), $groupContainer_scrolling$$1_yPos$$ += $DvtNBoxDataUtils$$.$getYPercentage$($nbox$$24$$, $highlightedItems$$4_node$$254_positions$$)
      }
      $childContainer_highlightedMap$$4_xPos$$ /= $nodeContainer$$1_nodeCount$$6$$;
      $groupContainer_scrolling$$1_yPos$$ /= $nodeContainer$$1_nodeCount$$6$$;
      $nodeContainer$$1_nodeCount$$6$$ = $DvtNBoxCategoryNode$$.newInstance($nbox$$24$$, $groups$$9$$[$group$$27$$]);
      $nodeContainer$$1_nodeCount$$6$$.$setTranslate$($availSpace$$104_layouts$$.x + ($cell$$13_rtl$$19$$ ? 1 - $childContainer_highlightedMap$$4_xPos$$ : $childContainer_highlightedMap$$4_xPos$$) * $availSpace$$104_layouts$$.$w$, $availSpace$$104_layouts$$.y + (1 - $groupContainer_scrolling$$1_yPos$$) * $availSpace$$104_layouts$$.$h$);
      $nodeContainer$$1_nodeCount$$6$$.$render$($cellCount$$5_columnCount$$5_container$$149$$, $groupBehavior$$1_scale$$44$$, 0);
      $nodeContainer$$1_nodeCount$$6$$.$setMaxAlpha$(0.8)
    }
  }else {
    if($groupBehavior$$1_scale$$44$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$24$$);
      $cellCount$$5_columnCount$$5_container$$149$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$24$$);
      $cellCount$$5_columnCount$$5_container$$149$$ *= $i$$512_n$$17_otherGroups$$1_rowCount$$5$$;
      $availSpace$$104_layouts$$ = [];
      for($i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $cellCount$$5_columnCount$$5_container$$149$$;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
        $groups$$9$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$) && ($cell$$13_rtl$$19$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$), $availSpace$$104_layouts$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$] = $DvtNBoxRenderer$$.$_forceLayoutGroups$($groups$$9$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$], $cell$$13_rtl$$19$$.__childArea.$w$, $cell$$13_rtl$$19$$.__childArea.$h$))
      }
      $groupBehavior$$1_scale$$44$$ = 40;
      for($i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $cellCount$$5_columnCount$$5_container$$149$$;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
        $groups$$9$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$) && ($groupBehavior$$1_scale$$44$$ = Math.min($groupBehavior$$1_scale$$44$$, $availSpace$$104_layouts$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$].scale))
      }
      for($i$$512_n$$17_otherGroups$$1_rowCount$$5$$ = 0;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$ < $cellCount$$5_columnCount$$5_container$$149$$;$i$$512_n$$17_otherGroups$$1_rowCount$$5$$++) {
        if($groups$$9$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$] && !$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$)) {
          for($group$$27$$ in $highlightedItems$$4_node$$254_positions$$ = $availSpace$$104_layouts$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$].positions, $cellId_center$$5_sortedGroups$$ = $availSpace$$104_layouts$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$].center, $cell$$13_rtl$$19$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$24$$, $i$$512_n$$17_otherGroups$$1_rowCount$$5$$), $childContainer_highlightedMap$$4_xPos$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$24$$, $cell$$13_rtl$$19$$).$getChildContainer$(), 
          $groupContainer_scrolling$$1_yPos$$ = $childContainer_highlightedMap$$4_xPos$$ instanceof dvt.$SimpleScrollableContainer$, $highlightedItems$$4_node$$254_positions$$) {
            $nodeContainer$$1_nodeCount$$6$$ = $DvtNBoxCategoryNode$$.newInstance($nbox$$24$$, $groups$$9$$[$i$$512_n$$17_otherGroups$$1_rowCount$$5$$][$group$$27$$]), $nodeContainer$$1_nodeCount$$6$$.$setTranslate$($cell$$13_rtl$$19$$.__childArea.x + $cell$$13_rtl$$19$$.__childArea.$w$ / 2 + $groupBehavior$$1_scale$$44$$ * ($highlightedItems$$4_node$$254_positions$$[$group$$27$$].x - $cellId_center$$5_sortedGroups$$.x), ($groupContainer_scrolling$$1_yPos$$ ? 0 : $cell$$13_rtl$$19$$.__childArea.y) + 
            $cell$$13_rtl$$19$$.__childArea.$h$ / 2 + $groupBehavior$$1_scale$$44$$ * ($highlightedItems$$4_node$$254_positions$$[$group$$27$$].y - $cellId_center$$5_sortedGroups$$.y)), $nodeContainer$$1_nodeCount$$6$$.$render$($groupContainer_scrolling$$1_yPos$$ ? $childContainer_highlightedMap$$4_xPos$$.$_container$ : $childContainer_highlightedMap$$4_xPos$$, $groupBehavior$$1_scale$$44$$, 3)
          }
        }
      }
    }
  }
};
$DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($nbox$$25_rowCount$$6$$, $rowIndex$$4$$, $availSpace$$105$$) {
  $nbox$$25_rowCount$$6$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$25_rowCount$$6$$);
  var $rowHeight$$8$$ = $availSpace$$105$$.$h$ / $nbox$$25_rowCount$$6$$;
  return new dvt.$Rectangle$($availSpace$$105$$.x, $availSpace$$105$$.y + ($nbox$$25_rowCount$$6$$ - $rowIndex$$4$$ - 1) * $rowHeight$$8$$, $availSpace$$105$$.$w$, $rowHeight$$8$$)
};
$DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($nbox$$26_rtl$$20$$, $columnIndex$$, $availSpace$$106$$) {
  var $columnCount$$6_columnWidth$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$26_rtl$$20$$), $columnCount$$6_columnWidth$$ = $availSpace$$106$$.$w$ / $columnCount$$6_columnWidth$$;
  $nbox$$26_rtl$$20$$ = dvt.$Agent$.$isRightToLeft$($nbox$$26_rtl$$20$$.$getCtx$());
  return new dvt.$Rectangle$($availSpace$$106$$.x + ($nbox$$26_rtl$$20$$ ? $availSpace$$106$$.$w$ - $columnCount$$6_columnWidth$$ : 0) + ($nbox$$26_rtl$$20$$ ? -1 : 1) * $columnIndex$$ * $columnCount$$6_columnWidth$$, $availSpace$$106$$.y, $columnCount$$6_columnWidth$$, $availSpace$$106$$.$h$)
};
$DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($availSpace$$107$$) {
  $availSpace$$107$$.x = Math.round($availSpace$$107$$.x);
  $availSpace$$107$$.y = Math.round($availSpace$$107$$.y);
  $availSpace$$107$$.$w$ = Math.round($availSpace$$107$$.$w$);
  $availSpace$$107$$.$h$ = Math.round($availSpace$$107$$.$h$)
};
$DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($text$$66$$, $x$$165$$, $y$$143$$, $angle$$35$$) {
  $text$$66$$.$setX$($x$$165$$);
  $text$$66$$.$setY$($y$$143$$);
  if($angle$$35$$) {
    var $matrix$$10$$ = $text$$66$$.$getMatrix$();
    $matrix$$10$$.translate(-$x$$165$$, -$y$$143$$);
    $matrix$$10$$.rotate($angle$$35$$);
    $matrix$$10$$.translate($x$$165$$, $y$$143$$);
    $text$$66$$.$setMatrix$($matrix$$10$$)
  }
};
$DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($nbox$$27$$) {
  if($nbox$$27$$.$isSelectionSupported$()) {
    var $selectedMap$$2$$ = {}, $selectedIds$$6$$ = [], $nodeIndices$$3_selectedItems$$2$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$27$$);
    if($nodeIndices$$3_selectedItems$$2$$) {
      for(var $i$$513$$ = 0;$i$$513$$ < $nodeIndices$$3_selectedItems$$2$$.length;$i$$513$$++) {
        $selectedIds$$6$$.push($nodeIndices$$3_selectedItems$$2$$[$i$$513$$]), $selectedMap$$2$$[$nodeIndices$$3_selectedItems$$2$$[$i$$513$$]] = $JSCompiler_alias_TRUE$$
      }
      var $objects$$4$$ = $nbox$$27$$.$getObjects$();
      if($DvtNBoxDataUtils$$.$getGrouping$($nbox$$27$$)) {
        for($i$$513$$ = 0;$i$$513$$ < $objects$$4$$.length;$i$$513$$++) {
          if($objects$$4$$[$i$$513$$] instanceof $DvtNBoxCategoryNode$$) {
            for(var $nodeIndices$$3_selectedItems$$2$$ = $objects$$4$$[$i$$513$$].getData().nodeIndices, $selected$$33$$ = $JSCompiler_alias_TRUE$$, $j$$73$$ = 0;$j$$73$$ < $nodeIndices$$3_selectedItems$$2$$.length;$j$$73$$++) {
              var $node$$255$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$27$$, $nodeIndices$$3_selectedItems$$2$$[$j$$73$$]);
              if(!$selectedMap$$2$$[$node$$255$$[dvt.$NBoxConstants$.ID]]) {
                $selected$$33$$ = $JSCompiler_alias_FALSE$$;
                break
              }
            }
            $selected$$33$$ && $selectedIds$$6$$.push($objects$$4$$[$i$$513$$].getId())
          }
        }
      }
    }
    $nbox$$27$$.$getSelectionHandler$().$processInitialSelections$($selectedIds$$6$$, $objects$$4$$)
  }
};
$DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($groups$$10$$, $width$$81$$, $height$$73$$) {
  var $sortedGroups$$1$$ = [], $group$$28_iPos_position$$34$$;
  for($group$$28_iPos_position$$34$$ in $groups$$10$$) {
    $sortedGroups$$1$$.push($group$$28_iPos_position$$34$$)
  }
  $sortedGroups$$1$$.sort(function($width$$81$$, $height$$73$$) {
    return $DvtNBoxCategoryNode$$.$compareSize$($groups$$10$$[$width$$81$$], $groups$$10$$[$height$$73$$])
  });
  for(var $positions$$1$$ = {}, $alpha$$23_left$$11_thetaStep$$ = 2 * Math.PI / $sortedGroups$$1$$.length, $i$$514$$ = 0;$i$$514$$ < $sortedGroups$$1$$.length;$i$$514$$++) {
    $positions$$1$$[$sortedGroups$$1$$[$i$$514$$]] = dvt.$VectorUtils$.$createVector$($i$$514$$ * Math.cos($alpha$$23_left$$11_thetaStep$$ * $i$$514$$), $i$$514$$ * Math.sin($alpha$$23_left$$11_thetaStep$$ * $i$$514$$))
  }
  for(var $alpha$$23_left$$11_thetaStep$$ = 1, $right$$11_xGravity$$ = -0.25 * $height$$73$$ / Math.max($width$$81$$, $height$$73$$), $top$$8_yGravity$$ = -0.25 * $width$$81$$ / Math.max($width$$81$$, $height$$73$$);0.005 < $alpha$$23_left$$11_thetaStep$$;) {
    for(var $bottom$$8_displacement$$3$$ = {}, $i$$514$$ = 0;$i$$514$$ < $sortedGroups$$1$$.length;$i$$514$$++) {
      var $iGroup_side$$21$$ = $sortedGroups$$1$$[$i$$514$$];
      $group$$28_iPos_position$$34$$ = $positions$$1$$[$iGroup_side$$21$$];
      var $iSize$$ = $groups$$10$$[$iGroup_side$$21$$].nodeIndices.length;
      $bottom$$8_displacement$$3$$[$iGroup_side$$21$$] = dvt.$VectorUtils$.$createVector$($alpha$$23_left$$11_thetaStep$$ * $right$$11_xGravity$$ * $group$$28_iPos_position$$34$$.x, $alpha$$23_left$$11_thetaStep$$ * $top$$8_yGravity$$ * $group$$28_iPos_position$$34$$.y);
      for(var $j$$74$$ = 0;$j$$74$$ < $sortedGroups$$1$$.length;$j$$74$$++) {
        if($i$$514$$ != $j$$74$$) {
          for(var $difference$$2_jGroup$$ = $sortedGroups$$1$$[$j$$74$$], $jSize$$ = $groups$$10$$[$difference$$2_jGroup$$].nodeIndices.length, $difference$$2_jGroup$$ = dvt.$VectorUtils$.$subtractVectors$($group$$28_iPos_position$$34$$, $positions$$1$$[$difference$$2_jGroup$$]), $distance$$1$$ = dvt.$VectorUtils$.$getMagnitude$($difference$$2_jGroup$$), $angle$$36_minimumDistance$$ = Math.atan2($difference$$2_jGroup$$.y, $difference$$2_jGroup$$.x);0 > $angle$$36_minimumDistance$$;) {
            $angle$$36_minimumDistance$$ += Math.PI / 2
          }
          for(;$angle$$36_minimumDistance$$ >= Math.PI / 2;) {
            $angle$$36_minimumDistance$$ -= Math.PI / 2
          }
          $angle$$36_minimumDistance$$ = $angle$$36_minimumDistance$$ < Math.PI / 4 ? 0.5 * (Math.sqrt($iSize$$) + Math.sqrt($jSize$$)) / Math.cos($angle$$36_minimumDistance$$) : 0.5 * (Math.sqrt($iSize$$) + Math.sqrt($jSize$$)) / Math.sin($angle$$36_minimumDistance$$);
          $distance$$1$$ < $angle$$36_minimumDistance$$ && ($bottom$$8_displacement$$3$$[$iGroup_side$$21$$] = dvt.$VectorUtils$.$addVectors$($bottom$$8_displacement$$3$$[$iGroup_side$$21$$], dvt.$VectorUtils$.$scaleVector$($difference$$2_jGroup$$, (1 - $alpha$$23_left$$11_thetaStep$$) * $jSize$$ / ($iSize$$ + $jSize$$) * (($angle$$36_minimumDistance$$ - $distance$$1$$) / $distance$$1$$))))
        }
      }
    }
    for($i$$514$$ = 0;$i$$514$$ < $sortedGroups$$1$$.length;$i$$514$$++) {
      $iGroup_side$$21$$ = $sortedGroups$$1$$[$i$$514$$], $positions$$1$$[$iGroup_side$$21$$] = dvt.$VectorUtils$.$addVectors$($positions$$1$$[$iGroup_side$$21$$], $bottom$$8_displacement$$3$$[$iGroup_side$$21$$])
    }
    $alpha$$23_left$$11_thetaStep$$ *= 0.98
  }
  $alpha$$23_left$$11_thetaStep$$ = Number.MAX_VALUE;
  $right$$11_xGravity$$ = -Number.MAX_VALUE;
  $top$$8_yGravity$$ = Number.MAX_VALUE;
  $bottom$$8_displacement$$3$$ = -Number.MAX_VALUE;
  for($i$$514$$ = 0;$i$$514$$ < $sortedGroups$$1$$.length;$i$$514$$++) {
    $group$$28_iPos_position$$34$$ = $sortedGroups$$1$$[$i$$514$$], $iGroup_side$$21$$ = Math.sqrt($groups$$10$$[$group$$28_iPos_position$$34$$].nodeIndices.length), $group$$28_iPos_position$$34$$ = $positions$$1$$[$group$$28_iPos_position$$34$$], $alpha$$23_left$$11_thetaStep$$ = Math.min($alpha$$23_left$$11_thetaStep$$, $group$$28_iPos_position$$34$$.x - $iGroup_side$$21$$ / 2), $right$$11_xGravity$$ = Math.max($right$$11_xGravity$$, $group$$28_iPos_position$$34$$.x + $iGroup_side$$21$$ / 2), $top$$8_yGravity$$ = 
    Math.min($top$$8_yGravity$$, $group$$28_iPos_position$$34$$.y - $iGroup_side$$21$$ / 2), $bottom$$8_displacement$$3$$ = Math.max($bottom$$8_displacement$$3$$, $group$$28_iPos_position$$34$$.y + $iGroup_side$$21$$ / 2)
  }
  return{scale:Math.min($width$$81$$ / ($right$$11_xGravity$$ - $alpha$$23_left$$11_thetaStep$$), $height$$73$$ / ($bottom$$8_displacement$$3$$ - $top$$8_yGravity$$)), center:new dvt.$Point$(($alpha$$23_left$$11_thetaStep$$ + $right$$11_xGravity$$) / 2, ($top$$8_yGravity$$ + $bottom$$8_displacement$$3$$) / 2), positions:$positions$$1$$}
};
$DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($nbox$$28$$, $groups$$11$$) {
  var $nodeCount$$7_otherCount$$ = $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$28$$), $nodeCount$$7_otherCount$$ = $DvtNBoxDataUtils$$.$getOtherThreshold$($nbox$$28$$) * $nodeCount$$7_otherCount$$;
  if(1 >= $nodeCount$$7_otherCount$$) {
    return $groups$$11$$
  }
  var $processedGroups$$ = {}, $otherGroup$$ = {};
  if($DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$28$$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    for(var $groupId$$24$$ in $groups$$11$$) {
      var $group$$29$$ = $groups$$11$$[$groupId$$24$$];
      $otherGroup$$.cell = $group$$29$$.cell;
      break
    }
  }
  $otherGroup$$.id = "other";
  $otherGroup$$.nodeIndices = [];
  $otherGroup$$.otherNode = $JSCompiler_alias_TRUE$$;
  for($groupId$$24$$ in $groups$$11$$) {
    if($group$$29$$ = $groups$$11$$[$groupId$$24$$], $group$$29$$.nodeIndices.length < $nodeCount$$7_otherCount$$) {
      for(var $i$$515$$ = 0;$i$$515$$ < $group$$29$$.nodeIndices.length;$i$$515$$++) {
        $otherGroup$$.nodeIndices.push($group$$29$$.nodeIndices[$i$$515$$])
      }
    }else {
      $processedGroups$$[$groupId$$24$$] = $group$$29$$
    }
  }
  0 < $otherGroup$$.nodeIndices.length && ($processedGroups$$.other = $otherGroup$$);
  return $processedGroups$$
};
$DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($nbox$$29$$, $container$$150_event$$344$$, $availSpace$$108$$) {
  var $drawerData$$6$$ = $DvtNBoxDataUtils$$.$getDrawer$($nbox$$29$$);
  $drawerData$$6$$ && ($DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$29$$, $drawerData$$6$$.id) ? $DvtNBoxDrawer$$.newInstance($nbox$$29$$, $drawerData$$6$$).$render$($container$$150_event$$344$$, $availSpace$$108$$) : ($nbox$$29$$.$getOptions$()[dvt.$NBoxConstants$.$DRAWER$] = $JSCompiler_alias_NULL$$, $container$$150_event$$344$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$NBoxConstants$.$DRAWER$, $JSCompiler_alias_NULL$$), $nbox$$29$$.$processEvent$($container$$150_event$$344$$)))
};
$DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($current$$1_displayable$$50$$) {
  var $matrix$$11$$ = $current$$1_displayable$$50$$.$getMatrix$().$clone$();
  for($current$$1_displayable$$50$$ = $current$$1_displayable$$50$$.getParent();$current$$1_displayable$$50$$;) {
    var $currentMatrix$$ = $current$$1_displayable$$50$$.$getMatrix$();
    $matrix$$11$$.translate($currentMatrix$$.$_tx$, $currentMatrix$$.$_ty$);
    $current$$1_displayable$$50$$ = $current$$1_displayable$$50$$.getParent()
  }
  return $matrix$$11$$
};
$DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($animationHandler$$20$$, $oldNBox$$4$$, $newNBox$$2$$) {
  $DvtNBoxRenderer$$.$_animateCells$($animationHandler$$20$$, $oldNBox$$4$$, $newNBox$$2$$);
  $DvtNBoxRenderer$$.$_animateNodes$($animationHandler$$20$$, $oldNBox$$4$$, $newNBox$$2$$);
  var $oldDrawer$$1$$ = $DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$4$$), $oldDrawer$$1$$ = $oldDrawer$$1$$ ? $oldDrawer$$1$$.id : $JSCompiler_alias_NULL$$, $newDrawer$$ = $DvtNBoxDataUtils$$.$getDrawer$($newNBox$$2$$), $newDrawer$$ = $newDrawer$$ ? $newDrawer$$.id : $JSCompiler_alias_NULL$$;
  $oldDrawer$$1$$ != $newDrawer$$ && $DvtNBoxRenderer$$.$_animateDrawer$($animationHandler$$20$$, $oldNBox$$4$$, $newNBox$$2$$)
};
$DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($animationHandler$$21$$, $oldNBox$$5$$, $newNBox$$3$$) {
  for(var $identical_oldRowCount$$ = $DvtNBoxDataUtils$$.$getRowCount$($oldNBox$$5$$), $newRowCount_oldColumnValue$$ = $DvtNBoxDataUtils$$.$getRowCount$($newNBox$$3$$), $newColumnValue_oldColumnCount_oldRowValue$$ = $DvtNBoxDataUtils$$.$getColumnCount$($oldNBox$$5$$), $newColumnCount$$ = $DvtNBoxDataUtils$$.$getColumnCount$($newNBox$$3$$), $newRowValue_oldCellCount$$ = $identical_oldRowCount$$ * $newColumnValue_oldColumnCount_oldRowValue$$, $newCellCount$$ = $newRowCount_oldColumnValue$$ * $newColumnCount$$, 
  $oldCells$$ = [], $newCells$$ = [], $i$$516$$ = 0;$i$$516$$ < $newRowValue_oldCellCount$$;$i$$516$$++) {
    $oldCells$$.push($DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$5$$, $DvtNBoxDataUtils$$.$getCell$($oldNBox$$5$$, $i$$516$$)))
  }
  for($i$$516$$ = 0;$i$$516$$ < $newCellCount$$;$i$$516$$++) {
    $newCells$$.push($DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$3$$, $DvtNBoxDataUtils$$.$getCell$($newNBox$$3$$, $i$$516$$)))
  }
  if($identical_oldRowCount$$ == $newRowCount_oldColumnValue$$ && $newColumnValue_oldColumnCount_oldRowValue$$ == $newColumnCount$$) {
    $identical_oldRowCount$$ = $JSCompiler_alias_TRUE$$;
    for($i$$516$$ = 0;$i$$516$$ < $newRowCount_oldColumnValue$$;$i$$516$$++) {
      if($newColumnValue_oldColumnCount_oldRowValue$$ = $DvtNBoxDataUtils$$.$getRow$($oldNBox$$5$$, $i$$516$$)[dvt.$NBoxConstants$.ID], $newRowValue_oldCellCount$$ = $DvtNBoxDataUtils$$.$getRow$($newNBox$$3$$, $i$$516$$)[dvt.$NBoxConstants$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ != $newRowValue_oldCellCount$$) {
        $identical_oldRowCount$$ = $JSCompiler_alias_FALSE$$;
        break
      }
    }
    if($identical_oldRowCount$$) {
      for($i$$516$$ = 0;$i$$516$$ < $newColumnCount$$;$i$$516$$++) {
        if($newRowCount_oldColumnValue$$ = $DvtNBoxDataUtils$$.$getColumn$($oldNBox$$5$$, $i$$516$$)[dvt.$NBoxConstants$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ = $DvtNBoxDataUtils$$.$getColumn$($newNBox$$3$$, $i$$516$$)[dvt.$NBoxConstants$.ID], $newRowCount_oldColumnValue$$ != $newColumnValue_oldColumnCount_oldRowValue$$) {
          $identical_oldRowCount$$ = $JSCompiler_alias_FALSE$$;
          break
        }
      }
    }
    if($identical_oldRowCount$$) {
      $animationHandler$$21$$.$constructAnimation$($oldCells$$, $newCells$$);
      return
    }
  }
  $animationHandler$$21$$.$constructAnimation$($oldCells$$, []);
  $animationHandler$$21$$.$constructAnimation$([], $newCells$$)
};
$DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($animationHandler$$22$$, $oldNBox$$6$$, $newNBox$$4$$) {
  for(var $oldDrawer$$2_oldNodeCount$$ = $DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$6$$), $newNodeCount_oldGroupNodes$$ = $DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$4$$), $newGroupNodes_oldNodes$$4$$ = [], $newNodes$$4$$ = [], $i$$517$$ = 0;$i$$517$$ < $oldDrawer$$2_oldNodeCount$$;$i$$517$$++) {
    $newGroupNodes_oldNodes$$4$$.push($DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$6$$, $DvtNBoxDataUtils$$.$getNode$($oldNBox$$6$$, $i$$517$$)))
  }
  for($i$$517$$ = 0;$i$$517$$ < $newNodeCount_oldGroupNodes$$;$i$$517$$++) {
    $newNodes$$4$$.push($DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$4$$, $DvtNBoxDataUtils$$.$getNode$($newNBox$$4$$, $i$$517$$)))
  }
  $animationHandler$$22$$.$constructAnimation$($newGroupNodes_oldNodes$$4$$, $newNodes$$4$$);
  $oldDrawer$$2_oldNodeCount$$ = $DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$6$$);
  $DvtNBoxDataUtils$$.$getDrawer$($newNBox$$4$$) || ($newNodeCount_oldGroupNodes$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($oldNBox$$6$$), $newGroupNodes_oldNodes$$4$$ = $DvtNBoxRenderer$$.$_getSortedGroups$($newNBox$$4$$), $oldDrawer$$2_oldNodeCount$$ && ($DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$6$$) != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($newNBox$$4$$) ? ($newNodeCount_oldGroupNodes$$ = $newNodeCount_oldGroupNodes$$.filter(function($animationHandler$$22$$) {
    return $animationHandler$$22$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$6$$)
  }), $newGroupNodes_oldNodes$$4$$ = $newGroupNodes_oldNodes$$4$$.filter(function($animationHandler$$22$$) {
    return $animationHandler$$22$$.getData().cell != $DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$6$$)
  })) : $newGroupNodes_oldNodes$$4$$ = $newNodeCount_oldGroupNodes$$ = $JSCompiler_alias_NULL$$), $animationHandler$$22$$.$constructAnimation$($newNodeCount_oldGroupNodes$$, $newGroupNodes_oldNodes$$4$$))
};
$DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($nbox$$30$$) {
  var $cellCount$$6_groupBehavior$$3_rowCount$$7$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$30$$), $groupInfo$$4$$ = $nbox$$30$$.$getOptions$().__groups, $groupNodes$$2$$ = [];
  if($groupInfo$$4$$) {
    if($cellCount$$6_groupBehavior$$3_rowCount$$7$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$6_groupBehavior$$3_rowCount$$7$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$30$$), $columnCount$$7_i$$518$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$30$$), $cellCount$$6_groupBehavior$$3_rowCount$$7$$ = $cellCount$$6_groupBehavior$$3_rowCount$$7$$ * $columnCount$$7_i$$518$$, $columnCount$$7_i$$518$$ = 0;$columnCount$$7_i$$518$$ < $cellCount$$6_groupBehavior$$3_rowCount$$7$$;$columnCount$$7_i$$518$$++) {
        for(var $cellGroupNodes$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$30$$, $groupInfo$$4$$[$columnCount$$7_i$$518$$ + ""]), $j$$75$$ = 0;$j$$75$$ < $cellGroupNodes$$.length;$j$$75$$++) {
          $groupNodes$$2$$.push($cellGroupNodes$$[$j$$75$$])
        }
      }
    }else {
      $groupNodes$$2$$ = $DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$30$$, $groupInfo$$4$$)
    }
  }
  return $groupNodes$$2$$
};
$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($nbox$$31$$, $container$$151$$) {
  var $groupNodes$$3$$ = [], $id$$133$$;
  for($id$$133$$ in $container$$151$$) {
    var $displayable$$51$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$31$$, $container$$151$$[$id$$133$$]);
    $displayable$$51$$ && $groupNodes$$3$$.push($displayable$$51$$)
  }
  $groupNodes$$3$$.sort(function($nbox$$31$$, $container$$151$$) {
    var $groupNodes$$3$$ = $nbox$$31$$.getId(), $id$$133$$ = $container$$151$$.getId();
    return $groupNodes$$3$$ == $id$$133$$ ? 0 : $groupNodes$$3$$ < $id$$133$$ ? -1 : 1
  });
  return $groupNodes$$3$$
};
$DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($animationHandler$$23$$, $newDrawer$$2_oldNBox$$7$$, $newNBox$$5$$) {
  var $oldDrawer$$3$$ = $DvtNBoxDataUtils$$.$getDrawer$($newDrawer$$2_oldNBox$$7$$), $oldDrawer$$3$$ = $oldDrawer$$3$$ ? [$DvtNBoxDataUtils$$.$getDisplayable$($newDrawer$$2_oldNBox$$7$$, $oldDrawer$$3$$)] : $JSCompiler_alias_NULL$$;
  $newDrawer$$2_oldNBox$$7$$ = ($newDrawer$$2_oldNBox$$7$$ = $DvtNBoxDataUtils$$.$getDrawer$($newNBox$$5$$)) ? [$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$5$$, $newDrawer$$2_oldNBox$$7$$)] : [];
  $animationHandler$$23$$.$constructAnimation$($oldDrawer$$3$$, $newDrawer$$2_oldNBox$$7$$)
};
$DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($displayable$$52$$, $fillString$$) {
  if(0 == $fillString$$.indexOf("linear-gradient")) {
    var $linearGradient$$3$$ = dvt.$GradientParser$.$parseCSSGradient$($fillString$$);
    $linearGradient$$3$$ && $displayable$$52$$.$setFill$(new dvt.$LinearGradientFill$($linearGradient$$3$$.$getAngle$(), $linearGradient$$3$$.$_arColors$, $linearGradient$$3$$.$_arAlphas$, $linearGradient$$3$$.$_arRatios$))
  }else {
    $displayable$$52$$.$setSolidFill$($fillString$$)
  }
};
$DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($nbox$$32_panelDrawer$$4$$) {
  var $legendData$$5$$ = $DvtNBoxDataUtils$$.$getLegend$($nbox$$32_panelDrawer$$4$$);
  $legendData$$5$$ && $legendData$$5$$.sections && ($nbox$$32_panelDrawer$$4$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$32_panelDrawer$$4$$, $legendData$$5$$, "panelDrawer")) && $nbox$$32_panelDrawer$$4$$.getParent().$addChild$($nbox$$32_panelDrawer$$4$$)
};
$DvtNBoxRenderer$$.$getNodeOrderFunction$ = function $$DvtNBoxRenderer$$$$getNodeOrderFunction$$($nbox$$33$$) {
  var $orders$$ = [], $cellCount$$7_drawerContainer_newDrawer$$3$$ = $DvtNBoxDataUtils$$.$getDrawer$($nbox$$33$$);
  if($cellCount$$7_drawerContainer_newDrawer$$3$$) {
    for(var $cellCount$$7_drawerContainer_newDrawer$$3$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$33$$, $cellCount$$7_drawerContainer_newDrawer$$3$$).$getChildContainer$().$_container$, $c$$22_i$$519$$ = 0;$c$$22_i$$519$$ < $cellCount$$7_drawerContainer_newDrawer$$3$$.$getNumChildren$();$c$$22_i$$519$$++) {
      $orders$$.push($cellCount$$7_drawerContainer_newDrawer$$3$$.$getChildAt$($c$$22_i$$519$$))
    }
  }else {
    $cellCount$$7_drawerContainer_newDrawer$$3$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$33$$) * $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$33$$);
    for($c$$22_i$$519$$ = 0;$c$$22_i$$519$$ < $cellCount$$7_drawerContainer_newDrawer$$3$$;$c$$22_i$$519$$++) {
      var $cellOrder$$ = [], $cell$$14_cellContainer$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$33$$, $c$$22_i$$519$$), $cell$$14_cellContainer$$2$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$33$$, $cell$$14_cellContainer$$2$$).$getChildContainer$();
      $cell$$14_cellContainer$$2$$ instanceof dvt.$SimpleScrollableContainer$ && ($cell$$14_cellContainer$$2$$ = $cell$$14_cellContainer$$2$$.$_container$);
      for(var $n$$18$$ = 0;$n$$18$$ < $cell$$14_cellContainer$$2$$.$getNumChildren$();$n$$18$$++) {
        $cellOrder$$.push($cell$$14_cellContainer$$2$$.$getChildAt$($n$$18$$))
      }
      $orders$$.push($cellOrder$$)
    }
  }
  return function() {
    if($orders$$.length) {
      if($orders$$[0] && isNaN($orders$$[0].length)) {
        var $cellCount$$7_drawerContainer_newDrawer$$3$$ = $DvtNBoxDataUtils$$.$getDrawer$($nbox$$33$$);
        if($cellCount$$7_drawerContainer_newDrawer$$3$$) {
          for(var $c$$22_i$$519$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$33$$, $cellCount$$7_drawerContainer_newDrawer$$3$$).$getChildContainer$().$_container$, $cellCount$$7_drawerContainer_newDrawer$$3$$ = 0;$cellCount$$7_drawerContainer_newDrawer$$3$$ < $orders$$.length;$cellCount$$7_drawerContainer_newDrawer$$3$$++) {
            $c$$22_i$$519$$.$addChild$($orders$$[$cellCount$$7_drawerContainer_newDrawer$$3$$])
          }
        }
      }else {
        for($c$$22_i$$519$$ = 0;$c$$22_i$$519$$ < $orders$$.length;$c$$22_i$$519$$++) {
          var $cellOrder$$ = $orders$$[$c$$22_i$$519$$], $cellCount$$7_drawerContainer_newDrawer$$3$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$33$$, $c$$22_i$$519$$);
          if($cellOrder$$.length && $cellCount$$7_drawerContainer_newDrawer$$3$$) {
            var $cell$$14_cellContainer$$2$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$33$$, $cellCount$$7_drawerContainer_newDrawer$$3$$).$getChildContainer$();
            $cell$$14_cellContainer$$2$$ instanceof dvt.$SimpleScrollableContainer$ && ($cell$$14_cellContainer$$2$$ = $cell$$14_cellContainer$$2$$.$_container$);
            for($cellCount$$7_drawerContainer_newDrawer$$3$$ = 0;$cellCount$$7_drawerContainer_newDrawer$$3$$ < $cellOrder$$.length;$cellCount$$7_drawerContainer_newDrawer$$3$$++) {
              $cell$$14_cellContainer$$2$$.$addChild$($cellOrder$$[$cellCount$$7_drawerContainer_newDrawer$$3$$])
            }
          }
        }
      }
    }
  }
};
var $DvtNBoxCellRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxCellRenderer$$, dvt.$Obj$);
$DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($nbox$$34$$, $cellData$$10$$, $cellContainer$$4_childArea$$, $availSpace$$109_cellIndex$$6_childContainer$$1$$) {
  var $cellBottomGap_options$$204$$ = $nbox$$34$$.$getOptions$(), $cellGap_cellRect$$ = $cellBottomGap_options$$204$$.__layout.cellGap, $cellStartGap$$ = $cellBottomGap_options$$204$$.__layout.cellStartGap, $cellEndGap$$ = $cellBottomGap_options$$204$$.__layout.cellEndGap, $cellTopGap$$ = $cellBottomGap_options$$204$$.__layout.cellTopGap, $cellBottomGap_options$$204$$ = $cellBottomGap_options$$204$$.__layout.cellBottomGap, $cellLayout$$2$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($nbox$$34$$), $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ = 
  $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$34$$, $cellData$$10$$[dvt.$NBoxConstants$.$ROW$]), $c$$24$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$34$$, $cellData$$10$$[dvt.$NBoxConstants$.$COLUMN$]), $cellDims$$1$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$34$$, $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$, $c$$24$$, $availSpace$$109_cellIndex$$6_childContainer$$1$$);
  $cellContainer$$4_childArea$$.$setTranslate$($cellDims$$1$$.x + $cellGap_cellRect$$ / 2, $cellDims$$1$$.y + $cellGap_cellRect$$ / 2);
  $availSpace$$109_cellIndex$$6_childContainer$$1$$ = $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ * $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$34$$) + $c$$24$$;
  $cellGap_cellRect$$ = new dvt.$Rect$($nbox$$34$$.$getCtx$(), 0, 0, Math.max($cellDims$$1$$.$w$ - $cellGap_cellRect$$, 0), Math.max($cellDims$$1$$.$h$ - $cellGap_cellRect$$, 0));
  $cellGap_cellRect$$.$setPixelHinting$();
  $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ = $DvtNBoxStyleUtils$$.$getCellStyle$($nbox$$34$$, $availSpace$$109_cellIndex$$6_childContainer$$1$$);
  $DvtNBoxCellRenderer$$.$_applyStyleToRect$($cellGap_cellRect$$, $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$);
  $cellContainer$$4_childArea$$.$addChild$($cellGap_cellRect$$);
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$34$$, $cellData$$10$$, $cellGap_cellRect$$, "background");
  $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ = new dvt.$KeyboardFocusEffect$($nbox$$34$$.$getCtx$(), $cellContainer$$4_childArea$$, new dvt.$Rectangle$(-1, -1, $cellGap_cellRect$$.getWidth() + 2, $cellGap_cellRect$$.getHeight() + 2));
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$34$$, $cellData$$10$$, $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$, "focusEffect");
  $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ = $DvtNBoxCellRenderer$$.$renderHeader$($nbox$$34$$, $cellData$$10$$, $cellContainer$$4_childArea$$, $JSCompiler_alias_FALSE$$);
  $availSpace$$109_cellIndex$$6_childContainer$$1$$ = $DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$34$$, $availSpace$$109_cellIndex$$6_childContainer$$1$$) ? new dvt.$SimpleScrollableContainer$($nbox$$34$$.$getCtx$(), $cellGap_cellRect$$.getWidth(), $cellGap_cellRect$$.getHeight() - ($addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ ? $cellLayout$$2$$.headerSize : 0)) : new dvt.$Container$($nbox$$34$$.$getCtx$());
  $cellContainer$$4_childArea$$.$addChild$($availSpace$$109_cellIndex$$6_childContainer$$1$$);
  $cellContainer$$4_childArea$$.$setChildContainer$($availSpace$$109_cellIndex$$6_childContainer$$1$$);
  $cellContainer$$4_childArea$$ = $JSCompiler_alias_NULL$$;
  $addedHeader_keyboardFocusEffect$$1_r$$32_style$$81$$ ? ($cellContainer$$4_childArea$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$34$$, $cellData$$10$$) ? new dvt.$Rectangle$($cellLayout$$2$$.headerSize, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellLayout$$2$$.headerSize - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$204$$) : new dvt.$Rectangle$($cellStartGap$$, $cellLayout$$2$$.headerSize, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - 
  $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellLayout$$2$$.headerSize - $cellBottomGap_options$$204$$), $availSpace$$109_cellIndex$$6_childContainer$$1$$ instanceof dvt.$SimpleScrollableContainer$ && $availSpace$$109_cellIndex$$6_childContainer$$1$$.$setTranslate$(0, $cellLayout$$2$$.headerSize)) : $cellContainer$$4_childArea$$ = new dvt.$Rectangle$($cellStartGap$$, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - 
  $cellBottomGap_options$$204$$);
  $cellContainer$$4_childArea$$.$w$ = Math.max($cellContainer$$4_childArea$$.$w$, 0);
  $cellContainer$$4_childArea$$.$h$ = Math.max($cellContainer$$4_childArea$$.$h$, 0);
  $cellData$$10$$.__childArea = $cellContainer$$4_childArea$$
};
$DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($nbox$$35$$, $cellData$$11$$, $cellContainer$$5$$, $cellCountLabel_countLabelFunc$$inline_3818_noCount$$) {
  var $countLabelGap_oldClose_oldCountLabel_oldLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$35$$, $cellData$$11$$, dvt.$NBoxConstants$.$LABEL$);
  $countLabelGap_oldClose_oldCountLabel_oldLabel$$ && ($countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $JSCompiler_alias_NULL$$, dvt.$NBoxConstants$.$LABEL$));
  if($countLabelGap_oldClose_oldCountLabel_oldLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$35$$, $cellData$$11$$, "countLabel")) {
    $countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $JSCompiler_alias_NULL$$, "countLabel")
  }
  if($countLabelGap_oldClose_oldCountLabel_oldLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$35$$, $cellData$$11$$, "closeButton")) {
    $countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $JSCompiler_alias_NULL$$, "closeButton")
  }
  var $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $JSCompiler_alias_FALSE$$;
  if($cellData$$11$$) {
    var $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = $nbox$$35$$.$getOptions$(), $countLabelGap_oldClose_oldCountLabel_oldLabel$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$.__layout.countLabelGap, $cellCloseGap_labelHeight$$6$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$.__layout.cellCloseGap, $cellStartGap$$1_labelX$$3$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$.__layout.cellStartGap, $cellEndGap$$1$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$.__layout.cellEndGap, 
    $cellTopGap$$1$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$.__layout.cellTopGap, $cellLayout$$3_countLabel$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($nbox$$35$$), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = $DvtNBoxRenderer$$.$getCellCounts$($nbox$$35$$), $cellRect$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$35$$, $cellData$$11$$, "background"), $r$$33_rtl$$21$$ = $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$35$$, $cellData$$11$$[dvt.$NBoxConstants$.$ROW$]), $c$$25_cellIndex$$7_label$$58$$ = 
    $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$35$$, $cellData$$11$$[dvt.$NBoxConstants$.$COLUMN$]), $c$$25_cellIndex$$7_label$$58$$ = $r$$33_rtl$$21$$ * $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$35$$) + $c$$25_cellIndex$$7_label$$58$$, $r$$33_rtl$$21$$ = dvt.$Agent$.$isRightToLeft$($nbox$$35$$.$getCtx$()), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = 0;
    if($DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$35$$, $c$$25_cellIndex$$7_label$$58$$)) {
      var $closeEna_countLabelY$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$._resources.close_ena, $closeWidth_halign$$8$$ = $closeEna_countLabelY$$.width;
      $cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$3$$ - $cellEndGap$$1$$ > $closeWidth_halign$$8$$ && ($addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$._resources.close_ovr, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$._resources.close_dwn, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = new dvt.$Image$($nbox$$35$$.$getCtx$(), $closeEna_countLabelY$$.src, 
      0, 0, $closeEna_countLabelY$$.width, $closeEna_countLabelY$$.height), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = new dvt.$Image$($nbox$$35$$.$getCtx$(), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.src, 0, 0, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.width, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.height), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = new dvt.$Image$($nbox$$35$$.$getCtx$(), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.src, 
      0, 0, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.width, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.height), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = new dvt.$Button$($nbox$$35$$.$getCtx$(), $closeEnaImg_countLabelWidth_countLabelX_options$$205$$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $cellContainer$$5$$.$handleDoubleClick$, 
      $cellContainer$$5$$), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = $r$$33_rtl$$21$$ ? Math.min(($cellRect$$1$$.getWidth() - $closeWidth_halign$$8$$) / 2, $cellEndGap$$1$$) : Math.max(($cellRect$$1$$.getWidth() - $closeWidth_halign$$8$$) / 2, $cellRect$$1$$.getWidth() - $cellEndGap$$1$$ - $closeWidth_halign$$8$$), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.$setTranslate$($cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, $cellTopGap$$1$$), $cellContainer$$5$$.$addChild$($addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$), 
      $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = $closeWidth_halign$$8$$ + $cellCloseGap_labelHeight$$6$$, $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$, "closeButton"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $JSCompiler_alias_TRUE$$)
    }
    if($cellData$$11$$[dvt.$NBoxConstants$.$LABEL$]) {
      var $cellCloseGap_labelHeight$$6$$ = $cellLayout$$3_countLabel$$.labelHeight, $skipLabel$$ = $JSCompiler_alias_FALSE$$, $closeWidth_halign$$8$$ = $DvtNBoxStyleUtils$$.$getLabelHalign$($nbox$$35$$, $cellData$$11$$), $countLabelWidthWithGap$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = 0, $cellLayout$$3_countLabel$$ = $JSCompiler_alias_NULL$$, $closeEna_countLabelY$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = 0, $countText$$ = $JSCompiler_alias_NULL$$, $showCount$$ = 
      $DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$35$$, $cellData$$11$$);
      if(!$cellCountLabel_countLabelFunc$$inline_3818_noCount$$ && "off" != $showCount$$) {
        var $JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$35$$, $cellData$$11$$), $JSCompiler_temp_const$$4707_data$$inline_3817$$ = $JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.getData();
        if($cellCountLabel_countLabelFunc$$inline_3818_noCount$$ = $JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.$_nbox$.$getOptions$().countLabel) {
          var $JSCompiler_temp_const$$4708$$ = $JSCompiler_temp_const$$4707_data$$inline_3817$$.row, $JSCompiler_temp_const$$4707_data$$inline_3817$$ = $JSCompiler_temp_const$$4707_data$$inline_3817$$.column, $JSCompiler_temp_const$$4706$$ = $JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.$getNodeCount$(), $JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$;
          $JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$ = $DvtNBoxRenderer$$.$getCellCounts$($JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.$_nbox$);
          $JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$ = $JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$.highlighted ? $JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$.highlighted[$JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.$getCellIndex$()] : $JSCompiler_alias_NULL$$;
          $JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$ = {row:$JSCompiler_temp_const$$4708$$, column:$JSCompiler_temp_const$$4707_data$$inline_3817$$, nodeCount:$JSCompiler_temp_const$$4706$$, highlightedNodeCount:$JSCompiler_inline_result$$4709_cellCounts$$inline_5580$$, totalNodeCount:$DvtNBoxDataUtils$$.$getNodeCount$($JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$.$_nbox$)};
          $cellCountLabel_countLabelFunc$$inline_3818_noCount$$ = $cellCountLabel_countLabelFunc$$inline_3818_noCount$$($JSCompiler_StaticMethods_getCountLabel$self$$inline_3816_dataContext$$inline_3819$$)
        }else {
          $cellCountLabel_countLabelFunc$$inline_3818_noCount$$ = $JSCompiler_temp_const$$4707_data$$inline_3817$$.countLabel
        }
        $cellCountLabel_countLabelFunc$$inline_3818_noCount$$ ? $countText$$ = $cellCountLabel_countLabelFunc$$inline_3818_noCount$$ : "on" == $showCount$$ && ($countText$$ = "" + $cellCounts$$2_countLabelOffset_labelWidth$$6$$.total[$c$$25_cellIndex$$7_label$$58$$], $cellCounts$$2_countLabelOffset_labelWidth$$6$$.highlighted && ($countText$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "HIGHLIGHTED_COUNT", [$cellCounts$$2_countLabelOffset_labelWidth$$6$$.highlighted[$c$$25_cellIndex$$7_label$$58$$], 
        $countText$$])))
      }
      $DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$35$$, $cellData$$11$$) ? ($countText$$ && ($cellLayout$$3_countLabel$$ = $DvtNBoxRenderer$$.$createText$($nbox$$35$$.$getCtx$(), $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$35$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), dvt.$TextUtils$.$fitText$($cellLayout$$3_countLabel$$, $cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$3$$ - $cellEndGap$$1$$, $cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, 
      $cellContainer$$5$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $cellLayout$$3_countLabel$$, "countLabel"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $JSCompiler_alias_TRUE$$, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = $cellLayout$$3_countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$, $closeEna_countLabelY$$ = $cellRect$$1$$.getHeight() / 
      2, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2) : $skipLabel$$ = $JSCompiler_alias_TRUE$$), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = 0, $skipLabel$$ || ($c$$25_cellIndex$$7_label$$58$$ = $DvtNBoxRenderer$$.$createText$($nbox$$35$$.$getCtx$(), $cellData$$11$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$35$$, $c$$25_cellIndex$$7_label$$58$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), 
      dvt.$TextUtils$.$fitText$($c$$25_cellIndex$$7_label$$58$$, $cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$3$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, $cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$5$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $c$$25_cellIndex$$7_label$$58$$, dvt.$NBoxConstants$.$LABEL$), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = $c$$25_cellIndex$$7_label$$58$$.$getDimensions$().$w$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = 
      $JSCompiler_alias_TRUE$$, $DvtNBoxRenderer$$.$positionText$($c$$25_cellIndex$$7_label$$58$$, $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2, ($cellRect$$1$$.getHeight() + $countLabelWidthWithGap$$) / 2, $r$$33_rtl$$21$$ ? Math.PI / 2 : -Math.PI / 2), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = ($cellCounts$$2_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$) / 2)), $cellLayout$$3_countLabel$$ && $DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, 
      $closeEnaImg_countLabelWidth_countLabelX_options$$205$$, $closeEna_countLabelY$$ - $cellCounts$$2_countLabelOffset_labelWidth$$6$$, $r$$33_rtl$$21$$ ? Math.PI / 2 : -Math.PI / 2)) : ($countText$$ && ($cellLayout$$3_countLabel$$ = $DvtNBoxRenderer$$.$createText$($nbox$$35$$.$getCtx$(), $countText$$, $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$35$$), $closeWidth_halign$$8$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), dvt.$TextUtils$.$fitText$($cellLayout$$3_countLabel$$, $cellRect$$1$$.getWidth() - 
      $cellStartGap$$1_labelX$$3$$ - $cellEndGap$$1$$ - $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, $cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$5$$) ? ($DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $cellLayout$$3_countLabel$$, "countLabel"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $JSCompiler_alias_TRUE$$, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = $cellLayout$$3_countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = 
      $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ = $closeWidth_halign$$8$$ == dvt.$OutputText$.$H_ALIGN_CENTER$ ? $cellRect$$1$$.getWidth() / 2 : $closeWidth_halign$$8$$ == dvt.$OutputText$.$H_ALIGN_RIGHT$ ? $cellRect$$1$$.getWidth() - $cellEndGap$$1$$ : $cellStartGap$$1_labelX$$3$$, $closeEna_countLabelY$$ = $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2, $DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, 
      $closeEnaImg_countLabelWidth_countLabelX_options$$205$$, $closeEna_countLabelY$$)) : $skipLabel$$ = $JSCompiler_alias_TRUE$$), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = 0, $skipLabel$$ || ($c$$25_cellIndex$$7_label$$58$$ = $DvtNBoxRenderer$$.$createText$($nbox$$35$$.$getCtx$(), $cellData$$11$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$35$$, $c$$25_cellIndex$$7_label$$58$$), $closeWidth_halign$$8$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), dvt.$TextUtils$.$fitText$($c$$25_cellIndex$$7_label$$58$$, 
      $cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$3$$ - $cellEndGap$$1$$ - $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ - $countLabelWidthWithGap$$, $cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$5$$) && ($DvtNBoxDataUtils$$.$setDisplayable$($nbox$$35$$, $cellData$$11$$, $c$$25_cellIndex$$7_label$$58$$, dvt.$NBoxConstants$.$LABEL$), $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = $c$$25_cellIndex$$7_label$$58$$.$getDimensions$().$w$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = 
      $JSCompiler_alias_TRUE$$, $closeWidth_halign$$8$$ == dvt.$OutputText$.$H_ALIGN_CENTER$ ? ($cellStartGap$$1_labelX$$3$$ = ($cellRect$$1$$.getWidth() - ($r$$33_rtl$$21$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = ($r$$33_rtl$$21$$ ? -1 : 1) * ($cellCounts$$2_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$) / 2) : $closeWidth_halign$$8$$ == dvt.$OutputText$.$H_ALIGN_RIGHT$ ? ($cellStartGap$$1_labelX$$3$$ = $cellRect$$1$$.getWidth() - 
      $cellEndGap$$1$$ - ($r$$33_rtl$$21$$ ? 0 : 1) * $countLabelWidthWithGap$$, $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = ($r$$33_rtl$$21$$ ? -1 : 0) * ($cellCounts$$2_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$)) : ($cellStartGap$$1_labelX$$3$$ += ($r$$33_rtl$$21$$ ? 1 : 0) * $countLabelWidthWithGap$$, $cellCounts$$2_countLabelOffset_labelWidth$$6$$ = ($r$$33_rtl$$21$$ ? 0 : 1) * ($cellCounts$$2_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$)), 
      $DvtNBoxRenderer$$.$positionText$($c$$25_cellIndex$$7_label$$58$$, $cellStartGap$$1_labelX$$3$$, $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2))), $cellLayout$$3_countLabel$$ && $cellCounts$$2_countLabelOffset_labelWidth$$6$$ && $DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, $closeEnaImg_countLabelWidth_countLabelX_options$$205$$ + $cellCounts$$2_countLabelOffset_labelWidth$$6$$, $closeEna_countLabelY$$))
    }
  }
  $DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($nbox$$35$$, $cellData$$11$$, $cellContainer$$5$$);
  return $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$
};
$DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($nbox$$36$$, $cellIndices$$) {
  var $cellContainer$$6_cellTopGap$$2$$ = $nbox$$36$$.$getOptions$().__layout.cellTopGap, $cellStartGap$$2$$ = $nbox$$36$$.$getOptions$().__layout.cellStartGap, $cellLayout$$4$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($nbox$$36$$), $cellCounts$$3_headerRemoved_maximizedFontSize$$ = $DvtNBoxRenderer$$.$getCellCounts$($nbox$$36$$), $childArea$$1_headerFontSize$$ = Number.MAX_VALUE, $removeHeaders$$ = $JSCompiler_alias_FALSE$$, $cellData$$12_cellIndex$$8_count$$16$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, 
  $cellIndices$$[0]), $headerLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, dvt.$NBoxConstants$.$LABEL$), $headerCount$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, "countLabel"), $headerLabelSize_maximizedCellIndices$$ = $headerLabel$$ && $headerLabel$$.$getCSSStyle$() ? $headerLabel$$.$getCSSStyle$().$getFontSize$() : $JSCompiler_alias_NULL$$, $headerCountSize_minimizedCellIndices$$ = $headerCount$$ && 
  $headerCount$$.$getCSSStyle$() ? $headerCount$$.$getCSSStyle$().$getFontSize$() : $JSCompiler_alias_NULL$$, $headerLabelSize_maximizedCellIndices$$ = isNaN($headerLabelSize_maximizedCellIndices$$) ? parseFloat($headerLabelSize_maximizedCellIndices$$) : $headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$ = isNaN($headerCountSize_minimizedCellIndices$$) ? parseFloat($headerCountSize_minimizedCellIndices$$) : $headerCountSize_minimizedCellIndices$$;
  if(!isNaN($headerLabelSize_maximizedCellIndices$$) || !isNaN($headerCountSize_minimizedCellIndices$$)) {
    $childArea$$1_headerFontSize$$ = isNaN($headerLabelSize_maximizedCellIndices$$) ? $headerCountSize_minimizedCellIndices$$ : isNaN($headerCountSize_minimizedCellIndices$$) ? $headerLabelSize_maximizedCellIndices$$ : Math.max($headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$)
  }
  for(var $headerLabelSize_maximizedCellIndices$$ = [], $headerCountSize_minimizedCellIndices$$ = [], $i$$520$$ = 0;$i$$520$$ < $cellIndices$$.length;$i$$520$$++) {
    $cellData$$12_cellIndex$$8_count$$16$$ = $cellIndices$$[$i$$520$$], $DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$) ? $headerCountSize_minimizedCellIndices$$.push($cellData$$12_cellIndex$$8_count$$16$$) : $headerLabelSize_maximizedCellIndices$$.push($cellData$$12_cellIndex$$8_count$$16$$)
  }
  for(var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $i$$520$$ = 0;$i$$520$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$520$$++) {
    $cellData$$12_cellIndex$$8_count$$16$$ = $headerLabelSize_maximizedCellIndices$$[$i$$520$$], $cellData$$12_cellIndex$$8_count$$16$$ = $cellCounts$$3_headerRemoved_maximizedFontSize$$.total[$cellData$$12_cellIndex$$8_count$$16$$], $maximizedLabels$$[$i$$520$$] = $DvtNBoxRenderer$$.$createText$($nbox$$36$$.$getCtx$(), "" + $cellData$$12_cellIndex$$8_count$$16$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$36$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$)
  }
  for($i$$520$$ = 0;$i$$520$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$520$$++) {
    $cellData$$12_cellIndex$$8_count$$16$$ = $headerCountSize_minimizedCellIndices$$[$i$$520$$], $cellData$$12_cellIndex$$8_count$$16$$ = $cellCounts$$3_headerRemoved_maximizedFontSize$$.total[$cellData$$12_cellIndex$$8_count$$16$$], $minimizedLabels$$[$i$$520$$] = $DvtNBoxRenderer$$.$createText$($nbox$$36$$.$getCtx$(), "" + $cellData$$12_cellIndex$$8_count$$16$$, $DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$36$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$)
  }
  $cellCounts$$3_headerRemoved_maximizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$36$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
  if($cellCounts$$3_headerRemoved_maximizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$ && !$headerLabel$$) {
    $removeHeaders$$ = $JSCompiler_alias_TRUE$$
  }
  var $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$36$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$);
  if($minimizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$ && !$headerLabel$$) {
    $removeHeaders$$ = $JSCompiler_alias_TRUE$$
  }
  if($removeHeaders$$) {
    for($i$$520$$ = 0;$i$$520$$ < $cellIndices$$.length;$i$$520$$++) {
      $cellData$$12_cellIndex$$8_count$$16$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $cellIndices$$[$i$$520$$]), $headerLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, dvt.$NBoxConstants$.$LABEL$), $headerCount$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, "countLabel"), $childArea$$1_headerFontSize$$ = $cellData$$12_cellIndex$$8_count$$16$$.__childArea, $cellCounts$$3_headerRemoved_maximizedFontSize$$ = 
      $JSCompiler_alias_FALSE$$, $headerLabel$$ && ($headerLabel$$.getParent().removeChild($headerLabel$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, $JSCompiler_alias_NULL$$, dvt.$NBoxConstants$.$LABEL$), $cellCounts$$3_headerRemoved_maximizedFontSize$$ = $JSCompiler_alias_TRUE$$), $headerCount$$ && ($headerCount$$.getParent().removeChild($headerCount$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, $JSCompiler_alias_NULL$$, 
      "countLabel"), $cellCounts$$3_headerRemoved_maximizedFontSize$$ = $JSCompiler_alias_TRUE$$), $cellCounts$$3_headerRemoved_maximizedFontSize$$ && ($DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$) ? ($childArea$$1_headerFontSize$$.x -= $cellLayout$$4$$.headerSize - $cellStartGap$$2$$, $childArea$$1_headerFontSize$$.$w$ += $cellLayout$$4$$.headerSize - $cellStartGap$$2$$) : ($childArea$$1_headerFontSize$$.y -= $cellLayout$$4$$.headerSize - $cellContainer$$6_cellTopGap$$2$$, 
      $childArea$$1_headerFontSize$$.$h$ += $cellLayout$$4$$.headerSize - $cellContainer$$6_cellTopGap$$2$$), $cellData$$12_cellIndex$$8_count$$16$$.__childArea = $childArea$$1_headerFontSize$$)
    }
    $cellCounts$$3_headerRemoved_maximizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$36$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
    $minimizedFontSize$$ = $DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$36$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$)
  }
  for($i$$520$$ = 0;$i$$520$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$520$$++) {
    $cellData$$12_cellIndex$$8_count$$16$$ = $headerLabelSize_maximizedCellIndices$$[$i$$520$$], $cellData$$12_cellIndex$$8_count$$16$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$), $cellContainer$$6_cellTopGap$$2$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$), $childArea$$1_headerFontSize$$ = $cellData$$12_cellIndex$$8_count$$16$$.__childArea, $maximizedLabels$$[$i$$520$$].$setFontSize$($cellCounts$$3_headerRemoved_maximizedFontSize$$), 
    dvt.$TextUtils$.$fitText$($maximizedLabels$$[$i$$520$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$6_cellTopGap$$2$$) && ($removeHeaders$$ || $DvtNBoxCellRenderer$$.$renderHeader$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, $cellContainer$$6_cellTopGap$$2$$, $JSCompiler_alias_TRUE$$), $DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$i$$520$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 2, $childArea$$1_headerFontSize$$.y + 
    $childArea$$1_headerFontSize$$.$h$ / 2))
  }
  for($i$$520$$ = 0;$i$$520$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$520$$++) {
    $cellData$$12_cellIndex$$8_count$$16$$ = $headerCountSize_minimizedCellIndices$$[$i$$520$$], $cellData$$12_cellIndex$$8_count$$16$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$), $cellContainer$$6_cellTopGap$$2$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$), $childArea$$1_headerFontSize$$ = $cellData$$12_cellIndex$$8_count$$16$$.__childArea, $minimizedLabels$$[$i$$520$$].$setFontSize$($minimizedFontSize$$), 
    dvt.$TextUtils$.$fitText$($minimizedLabels$$[$i$$520$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$6_cellTopGap$$2$$) && ($removeHeaders$$ || $DvtNBoxCellRenderer$$.$renderHeader$($nbox$$36$$, $cellData$$12_cellIndex$$8_count$$16$$, $cellContainer$$6_cellTopGap$$2$$, $JSCompiler_alias_TRUE$$), $DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$i$$520$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 2, $childArea$$1_headerFontSize$$.y + 
    $childArea$$1_headerFontSize$$.$h$ / 2))
  }
};
$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($nbox$$37$$, $cellIndices$$1$$, $labels$$22$$) {
  for(var $fontSize$$6$$ = Number.MAX_VALUE, $i$$521$$ = 0;$i$$521$$ < $cellIndices$$1$$.length;$i$$521$$++) {
    var $childArea$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$37$$, $cellIndices$$1$$[$i$$521$$]).__childArea, $fontSize$$6$$ = Math.min($fontSize$$6$$, $labels$$22$$[$i$$521$$].$getOptimalFontSize$($childArea$$2$$))
  }
  return $fontSize$$6$$
};
$DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($nbox$$38$$, $cellData$$13$$) {
  var $maximizedColumn$$5$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$38$$), $maximizedRow$$5$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$38$$);
  return $maximizedColumn$$5$$ && $maximizedColumn$$5$$ != $cellData$$13$$[dvt.$NBoxConstants$.$COLUMN$] && (!$maximizedRow$$5$$ || $maximizedRow$$5$$ == $cellData$$13$$[dvt.$NBoxConstants$.$ROW$]) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
$DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($maximizedColumnIndex$$1_nbox$$39$$, $minimizedColumnSize_rowIndex$$5$$, $columnIndex$$1$$, $availSpace$$110$$) {
  var $cellGap$$1_columnCount$$8$$ = $maximizedColumnIndex$$1_nbox$$39$$.$getOptions$().__layout.cellGap, $cellLayout$$5_minimizedSize$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($maximizedColumnIndex$$1_nbox$$39$$), $rtl$$22$$ = dvt.$Agent$.$isRightToLeft$($maximizedColumnIndex$$1_nbox$$39$$.$getCtx$()), $cellLayout$$5_minimizedSize$$ = $cellGap$$1_columnCount$$8$$ + $cellLayout$$5_minimizedSize$$.minimumCellSize, $rowCount$$8$$ = $DvtNBoxDataUtils$$.$getRowCount$($maximizedColumnIndex$$1_nbox$$39$$), 
  $cellGap$$1_columnCount$$8$$ = $DvtNBoxDataUtils$$.$getColumnCount$($maximizedColumnIndex$$1_nbox$$39$$), $defaultRowDimensions_rowH$$ = $DvtNBoxRenderer$$.$getRowDimensions$($maximizedColumnIndex$$1_nbox$$39$$, $minimizedColumnSize_rowIndex$$5$$, $availSpace$$110$$), $columnW_defaultColumnDimensions$$ = $DvtNBoxRenderer$$.$getColumnDimensions$($maximizedColumnIndex$$1_nbox$$39$$, $columnIndex$$1$$, $availSpace$$110$$), $maximizedRow$$6_minimizedRowSize$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($maximizedColumnIndex$$1_nbox$$39$$), 
  $maximizedColumn$$6$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($maximizedColumnIndex$$1_nbox$$39$$), $columnX$$ = $columnW_defaultColumnDimensions$$.x, $maximizedRowIndex$$1_rowY$$ = $defaultRowDimensions_rowH$$.y, $columnW_defaultColumnDimensions$$ = $columnW_defaultColumnDimensions$$.$w$, $defaultRowDimensions_rowH$$ = $defaultRowDimensions_rowH$$.$h$, $processColumn$$ = $JSCompiler_alias_TRUE$$;
  $maximizedRow$$6_minimizedRowSize$$ && ($maximizedRowIndex$$1_rowY$$ = $DvtNBoxDataUtils$$.$getRowIndex$($maximizedColumnIndex$$1_nbox$$39$$, $maximizedRow$$6_minimizedRowSize$$), $maximizedRow$$6_minimizedRowSize$$ = Math.min($availSpace$$110$$.$h$ / (3 * ($rowCount$$8$$ - 1)), $cellLayout$$5_minimizedSize$$), $minimizedColumnSize_rowIndex$$5$$ < $maximizedRowIndex$$1_rowY$$ ? ($maximizedRowIndex$$1_rowY$$ = $availSpace$$110$$.y + $availSpace$$110$$.$h$ - ($minimizedColumnSize_rowIndex$$5$$ + 
  1) * $maximizedRow$$6_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$6_minimizedRowSize$$, $processColumn$$ = $JSCompiler_alias_FALSE$$) : $minimizedColumnSize_rowIndex$$5$$ == $maximizedRowIndex$$1_rowY$$ ? ($maximizedRowIndex$$1_rowY$$ = $availSpace$$110$$.y + ($rowCount$$8$$ - $minimizedColumnSize_rowIndex$$5$$ - 1) * $maximizedRow$$6_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $availSpace$$110$$.$h$ - ($rowCount$$8$$ - 1) * $maximizedRow$$6_minimizedRowSize$$) : ($maximizedRowIndex$$1_rowY$$ = 
  $availSpace$$110$$.y + ($rowCount$$8$$ - $minimizedColumnSize_rowIndex$$5$$ - 1) * $maximizedRow$$6_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$6_minimizedRowSize$$, $processColumn$$ = $JSCompiler_alias_FALSE$$));
  $maximizedColumn$$6$$ && $processColumn$$ && ($maximizedColumnIndex$$1_nbox$$39$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($maximizedColumnIndex$$1_nbox$$39$$, $maximizedColumn$$6$$), $minimizedColumnSize_rowIndex$$5$$ = Math.min($availSpace$$110$$.$w$ / (3 * ($cellGap$$1_columnCount$$8$$ - 1)), $cellLayout$$5_minimizedSize$$), $columnIndex$$1$$ < $maximizedColumnIndex$$1_nbox$$39$$ ? ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$5$$, $columnX$$ = $availSpace$$110$$.x + ($rtl$$22$$ ? 
  $availSpace$$110$$.$w$ - $minimizedColumnSize_rowIndex$$5$$ : 0) + ($rtl$$22$$ ? -1 : 1) * $columnIndex$$1$$ * $minimizedColumnSize_rowIndex$$5$$) : $columnIndex$$1$$ == $maximizedColumnIndex$$1_nbox$$39$$ ? ($columnW_defaultColumnDimensions$$ = $availSpace$$110$$.$w$ - ($cellGap$$1_columnCount$$8$$ - 1) * $minimizedColumnSize_rowIndex$$5$$, $columnX$$ = $availSpace$$110$$.x + ($rtl$$22$$ ? $availSpace$$110$$.$w$ - $columnW_defaultColumnDimensions$$ : 0) + ($rtl$$22$$ ? -1 : 1) * $columnIndex$$1$$ * 
  $minimizedColumnSize_rowIndex$$5$$) : ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$5$$, $columnX$$ = $availSpace$$110$$.x + ($rtl$$22$$ ? -$minimizedColumnSize_rowIndex$$5$$ : $availSpace$$110$$.$w$) + ($rtl$$22$$ ? 1 : -1) * ($cellGap$$1_columnCount$$8$$ - $columnIndex$$1$$) * $minimizedColumnSize_rowIndex$$5$$));
  return new dvt.$Rectangle$($columnX$$, $maximizedRowIndex$$1_rowY$$, $columnW_defaultColumnDimensions$$, $defaultRowDimensions_rowH$$)
};
$DvtNBoxCellRenderer$$.$getCellLayout$ = function $$DvtNBoxCellRenderer$$$$getCellLayout$$($nbox$$40$$) {
  return $nbox$$40$$.$getOptions$().__layout.__cellLayout || $DvtNBoxCellRenderer$$.$_calculateCellLayout$($nbox$$40$$)
};
$DvtNBoxCellRenderer$$.$_calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$_calculateCellLayout$$($minimizedHeaderSize_nbox$$41$$) {
  var $options$$207$$ = $minimizedHeaderSize_nbox$$41$$.$getOptions$(), $cellCounts$$4_count$$17_countLabelHeight$$ = $DvtNBoxRenderer$$.$getCellCounts$($minimizedHeaderSize_nbox$$41$$), $cellTopGap$$3_headerSize$$ = $options$$207$$.__layout.cellTopGap, $cellBottomGap$$1$$ = $options$$207$$.__layout.cellBottomGap, $cellLabelGap$$ = $options$$207$$.__layout.cellLabelGap, $cellLayout$$6_minimumCellSize$$ = $options$$207$$.__layout.minimumCellSize, $label$$59_labelHeight$$7$$ = 0, $cellData$$14$$ = 
  $DvtNBoxDataUtils$$.$getCell$($minimizedHeaderSize_nbox$$41$$, 0);
  if($cellData$$14$$ && $cellData$$14$$[dvt.$NBoxConstants$.$LABEL$]) {
    var $halign$$9$$ = $cellData$$14$$[dvt.$NBoxConstants$.$LABEL_HALIGN$], $label$$59_labelHeight$$7$$ = $DvtNBoxRenderer$$.$createText$($minimizedHeaderSize_nbox$$41$$.$getCtx$(), $cellData$$14$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getCellLabelStyle$($minimizedHeaderSize_nbox$$41$$, 0), $halign$$9$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $label$$59_labelHeight$$7$$ = dvt.$TextUtils$.$guessTextDimensions$($label$$59_labelHeight$$7$$).$h$;
    "on" == $DvtNBoxStyleUtils$$.$getCellShowCount$($minimizedHeaderSize_nbox$$41$$, $cellData$$14$$) && ($cellCounts$$4_count$$17_countLabelHeight$$ = $DvtNBoxRenderer$$.$createText$($minimizedHeaderSize_nbox$$41$$.$getCtx$(), $cellCounts$$4_count$$17_countLabelHeight$$.total[0], $DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($minimizedHeaderSize_nbox$$41$$), $halign$$9$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $cellCounts$$4_count$$17_countLabelHeight$$ = dvt.$TextUtils$.$guessTextDimensions$($cellCounts$$4_count$$17_countLabelHeight$$).$h$, 
    $label$$59_labelHeight$$7$$ = Math.max($label$$59_labelHeight$$7$$, $cellCounts$$4_count$$17_countLabelHeight$$))
  }
  $DvtNBoxDataUtils$$.$getMaximizedRow$($minimizedHeaderSize_nbox$$41$$) && $DvtNBoxDataUtils$$.$getMaximizedColumn$($minimizedHeaderSize_nbox$$41$$) && ($label$$59_labelHeight$$7$$ = Math.max($label$$59_labelHeight$$7$$, $options$$207$$._resources.close_ena.height));
  $minimizedHeaderSize_nbox$$41$$ = $label$$59_labelHeight$$7$$ + $cellTopGap$$3_headerSize$$ + $cellBottomGap$$1$$;
  $cellTopGap$$3_headerSize$$ = $label$$59_labelHeight$$7$$ + $cellTopGap$$3_headerSize$$ + $cellLabelGap$$;
  $cellLayout$$6_minimumCellSize$$ = Math.max($minimizedHeaderSize_nbox$$41$$, $cellLayout$$6_minimumCellSize$$);
  $cellLayout$$6_minimumCellSize$$ = {labelHeight:$label$$59_labelHeight$$7$$, headerSize:$cellTopGap$$3_headerSize$$, minimizedHeaderSize:$minimizedHeaderSize_nbox$$41$$, minimumCellSize:$cellLayout$$6_minimumCellSize$$};
  return $options$$207$$.__layout.__cellLayout = $cellLayout$$6_minimumCellSize$$
};
$DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($animationHandler$$24$$, $oldCell$$1_oldClose$$1$$, $newCell$$) {
  var $newClose_oldCloseStart_oldNBox$$8$$ = $animationHandler$$24$$.$_oldNBox$, $newNBox$$6$$ = $animationHandler$$24$$.$_newNBox$, $playable$$22$$ = new dvt.$CustomAnimation$($newNBox$$6$$.$getCtx$(), $newCell$$, $animationHandler$$24$$.$getAnimationDuration$()), $childContainer$$2$$ = $newCell$$.$getChildContainer$(), $childMatrix$$ = $childContainer$$2$$.$getMatrix$();
  $childContainer$$2$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$2$$));
  var $cellParent_cellTx$$ = $newCell$$.getParent();
  $cellParent_cellTx$$.$addChildAt$($childContainer$$2$$, $cellParent_cellTx$$.$getChildIndex$($newCell$$) + 1);
  var $cellParent_cellTx$$ = $newCell$$.$getTranslateX$(), $cellTy$$ = $newCell$$.$getTranslateY$();
  $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $newCell$$, $newCell$$.$getMatrix$, $newCell$$.$setMatrix$, $newCell$$.$getMatrix$());
  $newCell$$.$setMatrix$($oldCell$$1_oldClose$$1$$.$getMatrix$());
  var $oldBackground$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newClose_oldCloseStart_oldNBox$$8$$, $oldCell$$1_oldClose$$1$$.getData(), "background"), $effect$$7_newBackground$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "background"), $widthDiff$$ = dvt.$Agent$.$isRightToLeft$($newNBox$$6$$.$getCtx$()) ? 0 : $effect$$7_newBackground$$.getWidth() - $oldBackground$$.getWidth();
  $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $effect$$7_newBackground$$, $effect$$7_newBackground$$.$getFill$, $effect$$7_newBackground$$.$setFill$, $effect$$7_newBackground$$.$getFill$());
  $effect$$7_newBackground$$.$setFill$($oldBackground$$.$getFill$());
  $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $effect$$7_newBackground$$, $effect$$7_newBackground$$.getWidth, $effect$$7_newBackground$$.$setWidth$, $effect$$7_newBackground$$.getWidth());
  $effect$$7_newBackground$$.$setWidth$($oldBackground$$.getWidth());
  $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $effect$$7_newBackground$$, $effect$$7_newBackground$$.getHeight, $effect$$7_newBackground$$.$setHeight$, $effect$$7_newBackground$$.getHeight());
  $effect$$7_newBackground$$.$setHeight$($oldBackground$$.getHeight());
  if($newCell$$.$isShowingKeyboardFocusEffect$() && ($effect$$7_newBackground$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "focusEffect").$getEffect$())) {
    $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $effect$$7_newBackground$$, $effect$$7_newBackground$$.getWidth, $effect$$7_newBackground$$.$setWidth$, $effect$$7_newBackground$$.getWidth()), $effect$$7_newBackground$$.$setWidth$($oldBackground$$.getWidth() + 2), $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $effect$$7_newBackground$$, $effect$$7_newBackground$$.getHeight, $effect$$7_newBackground$$.$setHeight$, $effect$$7_newBackground$$.getHeight()), 
    $effect$$7_newBackground$$.$setHeight$($oldBackground$$.getHeight() + 2)
  }
  $DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$24$$, $oldCell$$1_oldClose$$1$$, $newCell$$, "countLabel");
  $DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$24$$, $oldCell$$1_oldClose$$1$$, $newCell$$, dvt.$NBoxConstants$.$LABEL$);
  $oldCell$$1_oldClose$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newClose_oldCloseStart_oldNBox$$8$$, $oldCell$$1_oldClose$$1$$.getData(), "closeButton");
  $newClose_oldCloseStart_oldNBox$$8$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "closeButton");
  $oldCell$$1_oldClose$$1$$ ? $newClose_oldCloseStart_oldNBox$$8$$ ? ($playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $newClose_oldCloseStart_oldNBox$$8$$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$()), $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$($oldCell$$1_oldClose$$1$$.$getMatrix$())) : ($newClose_oldCloseStart_oldNBox$$8$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($oldCell$$1_oldClose$$1$$), 
  $oldCell$$1_oldClose$$1$$.$setTranslate$($oldCell$$1_oldClose$$1$$.$getTranslateX$() + $widthDiff$$ + $cellParent_cellTx$$, $oldCell$$1_oldClose$$1$$.$getTranslateY$() + $cellTy$$), $animationHandler$$24$$.add(new dvt.$AnimFadeOut$($newNBox$$6$$.$getCtx$(), $oldCell$$1_oldClose$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), 1), $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $oldCell$$1_oldClose$$1$$, $oldCell$$1_oldClose$$1$$.$getMatrix$, $oldCell$$1_oldClose$$1$$.$setMatrix$, 
  $oldCell$$1_oldClose$$1$$.$getMatrix$()), $oldCell$$1_oldClose$$1$$.$setMatrix$($newClose_oldCloseStart_oldNBox$$8$$), $newNBox$$6$$.$_deleteContainer$.$addChild$($oldCell$$1_oldClose$$1$$)) : $newClose_oldCloseStart_oldNBox$$8$$ && ($animationHandler$$24$$.add(new dvt.$AnimFadeIn$($newNBox$$6$$.$getCtx$(), $newClose_oldCloseStart_oldNBox$$8$$, $animationHandler$$24$$.$getAnimationDuration$()), 1), $playable$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $newClose_oldCloseStart_oldNBox$$8$$, 
  $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$()), $newClose_oldCloseStart_oldNBox$$8$$.$setTranslate$($newClose_oldCloseStart_oldNBox$$8$$.$getTranslateX$() - $widthDiff$$, $newClose_oldCloseStart_oldNBox$$8$$.$getTranslateY$()), $newClose_oldCloseStart_oldNBox$$8$$.$setAlpha$(0));
  dvt.$Playable$.$appendOnEnd$($playable$$22$$, function() {
    $newCell$$.$addChild$($childContainer$$2$$);
    $childContainer$$2$$.$setMatrix$($childMatrix$$)
  });
  $animationHandler$$24$$.add($playable$$22$$, 1)
};
$DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($animationHandler$$25$$, $oldCell$$2_oldVerticalLabel_playable$$23$$, $fadeOutAnim_newCell$$1$$, $labelKey$$) {
  var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $animationHandler$$25$$.$_oldNBox$, $newNBox$$7$$ = $animationHandler$$25$$.$_newNBox$, $oldLabel$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$23$$.getData(), $labelKey$$), $fadeInAnim_newLabel$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData(), $labelKey$$);
  $oldCell$$2_oldVerticalLabel_playable$$23$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$23$$.getData());
  $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $DvtNBoxCellRenderer$$.$_isLabelVertical$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData());
  if($oldLabel$$1$$ || $fadeInAnim_newLabel$$) {
    if($oldLabel$$1$$ && $fadeInAnim_newLabel$$ && $oldCell$$2_oldVerticalLabel_playable$$23$$ == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$) {
      $oldCell$$2_oldVerticalLabel_playable$$23$$ = new dvt.$CustomAnimation$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$25$$.$getAnimationDuration$());
      var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $oldLabel$$1$$.$getHorizAlignment$(), $newAlign$$ = $fadeInAnim_newLabel$$.$getHorizAlignment$(), $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = (("left" == $newAlign$$ ? -1 : "center" == $newAlign$$ ? 0 : 1) - ("left" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? -1 : "center" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? 0 : 1)) * $fadeInAnim_newLabel$$.$measureDimensions$().$w$ / 2;
      $oldCell$$2_oldVerticalLabel_playable$$23$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getX$, $fadeInAnim_newLabel$$.$setX$, $fadeInAnim_newLabel$$.$getX$());
      $fadeInAnim_newLabel$$.$setX$($oldLabel$$1$$.$getX$() + $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$);
      $oldCell$$2_oldVerticalLabel_playable$$23$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getY$, $fadeInAnim_newLabel$$.$setY$, $fadeInAnim_newLabel$$.$getY$());
      $fadeInAnim_newLabel$$.$setY$($oldLabel$$1$$.$getY$());
      $oldCell$$2_oldVerticalLabel_playable$$23$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getMatrix$, $fadeInAnim_newLabel$$.$setMatrix$, $fadeInAnim_newLabel$$.$getMatrix$());
      $fadeInAnim_newLabel$$.$setMatrix$($oldLabel$$1$$.$getMatrix$());
      $animationHandler$$25$$.add($oldCell$$2_oldVerticalLabel_playable$$23$$, 1);
      "countLabel" == $labelKey$$ && $oldLabel$$1$$.$getTextString$() != $fadeInAnim_newLabel$$.$getTextString$() && ($fadeInAnim_newLabel$$.$setAlpha$(0), $fadeOutAnim_newCell$$1$$.$addChild$($oldLabel$$1$$), $fadeOutAnim_newCell$$1$$ = new dvt.$AnimFadeOut$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$25$$.$getAnimationDuration$()), $fadeInAnim_newLabel$$ = new dvt.$AnimFadeIn$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$25$$.$getAnimationDuration$()), $animationHandler$$25$$.add($fadeOutAnim_newCell$$1$$, 
      1), $animationHandler$$25$$.add($fadeInAnim_newLabel$$, 2), dvt.$Playable$.$appendOnEnd$($fadeOutAnim_newCell$$1$$, function() {
        $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$)
      }))
    }else {
      $oldLabel$$1$$ && ($oldLabel$$1$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($oldLabel$$1$$)), $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$), $animationHandler$$25$$.add(new dvt.$AnimFadeOut$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$25$$.$getAnimationDuration$()), 1)), $fadeInAnim_newLabel$$ && ($fadeInAnim_newLabel$$.$setAlpha$(0), $animationHandler$$25$$.add(new dvt.$AnimFadeIn$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$25$$.$getAnimationDuration$()), 
      1))
    }
  }
};
$DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($animationHandler$$26$$, $oldCell$$3$$) {
  var $nbox$$42$$ = $animationHandler$$26$$.$_newNBox$, $childContainer$$3$$ = $oldCell$$3$$.$getChildContainer$();
  if($childContainer$$3$$) {
    var $globalMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$3$$), $cellParent$$1$$ = $oldCell$$3$$.getParent();
    $cellParent$$1$$.$addChildAt$($childContainer$$3$$, $cellParent$$1$$.$getChildIndex$($oldCell$$3$$) + 1);
    $childContainer$$3$$.$setMatrix$($globalMatrix$$)
  }
  $nbox$$42$$.$_deleteContainer$.$addChild$($oldCell$$3$$);
  $animationHandler$$26$$.add(new dvt.$AnimFadeOut$($nbox$$42$$.$getCtx$(), $oldCell$$3$$, $animationHandler$$26$$.$getAnimationDuration$()), 1)
};
$DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($animationHandler$$27$$, $newCell$$2$$) {
  var $nbox$$43_playable$$24$$ = $animationHandler$$27$$.$_newNBox$, $childContainer$$4$$ = $newCell$$2$$.$getChildContainer$(), $childMatrix$$1$$ = $JSCompiler_alias_NULL$$;
  if($childContainer$$4$$) {
    var $childMatrix$$1$$ = $childContainer$$4$$.$getMatrix$(), $globalMatrix$$1$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$2$$), $cellParent$$2$$ = $newCell$$2$$.getParent();
    $cellParent$$2$$.$addChildAt$($childContainer$$4$$, $cellParent$$2$$.$getChildIndex$($newCell$$2$$) + 1);
    $childContainer$$4$$.$setMatrix$($globalMatrix$$1$$)
  }
  $newCell$$2$$.$setAlpha$(0);
  $nbox$$43_playable$$24$$ = new dvt.$AnimFadeIn$($nbox$$43_playable$$24$$.$getCtx$(), $newCell$$2$$, $animationHandler$$27$$.$getAnimationDuration$());
  $childContainer$$4$$ && dvt.$Playable$.$appendOnEnd$($nbox$$43_playable$$24$$, function() {
    $newCell$$2$$.$addChild$($childContainer$$4$$);
    $childContainer$$4$$.$setMatrix$($childMatrix$$1$$)
  });
  $animationHandler$$27$$.add($nbox$$43_playable$$24$$, 1)
};
$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($nbox$$44$$, $cell$$15$$) {
  var $background$$10$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$44$$, $cell$$15$$.getData(), "background"), $dropSiteFeedback$$ = new dvt.$Rect$($nbox$$44$$.$getCtx$(), $background$$10$$.$getX$(), $background$$10$$.$getY$(), $background$$10$$.getWidth(), $background$$10$$.getHeight());
  $dropSiteFeedback$$.$setPixelHinting$();
  var $style$$82$$ = $DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($nbox$$44$$);
  $DvtNBoxCellRenderer$$.$_applyStyleToRect$($dropSiteFeedback$$, $style$$82$$);
  $cell$$15$$.$addChildAt$($dropSiteFeedback$$, $cell$$15$$.$getChildIndex$($background$$10$$) + 1);
  return $dropSiteFeedback$$
};
$DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($rect$$23$$, $style$$83$$) {
  var $bgFill$$1_borderColor$$38_fill$$50$$ = $style$$83$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND$), $borderWidth$$13_colorFill$$1$$ = $style$$83$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
  ($bgFill$$1_borderColor$$38_fill$$50$$ = $bgFill$$1_borderColor$$38_fill$$50$$ ? $bgFill$$1_borderColor$$38_fill$$50$$ : $borderWidth$$13_colorFill$$1$$) && $DvtNBoxRenderer$$.$setFill$($rect$$23$$, $bgFill$$1_borderColor$$38_fill$$50$$);
  "solid" == $style$$83$$.$getStyle$(dvt.$CSSStyle$.$BORDER_STYLE$) && ($bgFill$$1_borderColor$$38_fill$$50$$ = ($bgFill$$1_borderColor$$38_fill$$50$$ = $style$$83$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) ? $bgFill$$1_borderColor$$38_fill$$50$$ : "#000000", $borderWidth$$13_colorFill$$1$$ = $style$$83$$.$getStyle$(dvt.$CSSStyle$.$BORDER_WIDTH$), $borderWidth$$13_colorFill$$1$$ = $borderWidth$$13_colorFill$$1$$ == $JSCompiler_alias_NULL$$ ? 1 : parseFloat($borderWidth$$13_colorFill$$1$$), $rect$$23$$.$setSolidStroke$($bgFill$$1_borderColor$$38_fill$$50$$, 
  $JSCompiler_alias_NULL$$, $borderWidth$$13_colorFill$$1$$))
};
$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($nbox$$45_object$$9$$, $cellData$$15$$, $cellContainer$$7_desc$$23$$) {
  $nbox$$45_object$$9$$ = dvt.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$45_object$$9$$, $cellData$$15$$, "background") : $cellContainer$$7_desc$$23$$;
  $nbox$$45_object$$9$$.$setAriaRole$("img");
  dvt.$Agent$.$deferAriaCreation$() || ($cellContainer$$7_desc$$23$$ = $cellContainer$$7_desc$$23$$.$getAriaLabel$()) && $nbox$$45_object$$9$$.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $cellContainer$$7_desc$$23$$)
};
var $DvtNBoxNodeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxNodeRenderer$$, dvt.$Obj$);
$DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
$DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$ = "xMidYMid slice";
$DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeContainer$$2$$, $nodeLayout$$2$$) {
  $DvtNBoxNodeRenderer$$.$_renderNodeBackground$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeContainer$$2$$, $nodeLayout$$2$$);
  $DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeContainer$$2$$, $nodeLayout$$2$$);
  $DvtNBoxNodeRenderer$$.$_renderNodeIcon$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeContainer$$2$$, $nodeLayout$$2$$);
  $DvtNBoxNodeRenderer$$.$_renderNodeLabels$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeContainer$$2$$, $nodeLayout$$2$$);
  $DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$46$$, $nodeContainer$$2$$);
  ($childContainer$$5_nodeData$$42$$ = $nodeContainer$$2$$.$getChildContainer$()) && $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$46$$, $childContainer$$5_nodeData$$42$$, $nodeLayout$$2$$)
};
$DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($nbox$$47$$, $cellNodes$$2$$) {
  for(var $options$$208$$ = $nbox$$47$$.$getOptions$(), $container$$152_gridGap$$1$$ = $options$$208$$.__layout.gridGap, $cellLayouts_nodeStartLabelGap$$ = $options$$208$$.__layout.nodeStartLabelGap, $nodeLabelOnlyStartLabelGap_startLabelGap$$ = $options$$208$$.__layout.nodeLabelOnlyStartLabelGap, $nodeEndLabelGap_overflow$$4$$ = $options$$208$$.__layout.nodeEndLabelGap, $cellIndices$$2_nodeSwatchSize$$ = $options$$208$$.__layout.nodeSwatchSize, $columnsPerRow_labelVisible_maximumLabelWidth$$ = $options$$208$$.__layout.maximumLabelWidth, 
  $nodes$$14_simpleLayout$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$47$$), $nodeHeight$$3_nodeLayout$$3$$ = $nodes$$14_simpleLayout$$.nodeHeight, $indicatorSectionWidth$$ = $nodes$$14_simpleLayout$$.indicatorSectionWidth, $iconSectionWidth$$ = $nodes$$14_simpleLayout$$.iconSectionWidth, $nodeLabelOnlyStartLabelGap_startLabelGap$$ = $indicatorSectionWidth$$ || $iconSectionWidth$$ ? $cellLayouts_nodeStartLabelGap$$ : $nodeLabelOnlyStartLabelGap_startLabelGap$$, $maxCellIndex_node$$258$$ = 
  $DvtNBoxDataUtils$$.$getNode$($nbox$$47$$, 0), $indicatorIcon$$2_maxColumns$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$47$$, $maxCellIndex_node$$258$$), $icon$$40_widestLabel$$ = $DvtNBoxDataUtils$$.$getIcon$($nbox$$47$$, $maxCellIndex_node$$258$$), $labelSectionWidth_rowCount$$9$$ = 0, $cellLayouts_nodeStartLabelGap$$ = [], $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 
  $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$47$$), $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$47$$), $labelSectionWidth_rowCount$$9$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$47$$), $columnCount$$9_label$$60_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$47$$), $nodeCount$$8_r$$34$$ = 0;$nodeCount$$8_r$$34$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$34$$++) {
    for(var $c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$60_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
      $cellLayouts_nodeStartLabelGap$$.push({cellRows:0, cellColumns:0, overflow:$JSCompiler_alias_FALSE$$})
    }
  }
  for(var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$34$$ = $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$47$$), $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ < $nodeCount$$8_r$$34$$;$cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$++) {
    var $cellIndex$$9_n$$20$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$47$$, $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$);
    $DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$47$$, $cellIndex$$9_n$$20$$) || ($c$$26_nodeCellIndex$$ = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$47$$, $cellIndex$$9_n$$20$$), isNaN($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$] = 0), $maximizedCellIndex$$1_nodeCounts$$[$c$$26_nodeCellIndex$$]++)
  }
  if($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && $cellArea_ci$$3_maximizedColumn$$7$$) {
    $maximizedCellIndex$$1_nodeCounts$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$47$$, $cellArea_ci$$3_maximizedColumn$$7$$) + $columnCount$$9_label$$60_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$47$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$);
    $cellArea_ci$$3_maximizedColumn$$7$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$47$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
    $labelSectionWidth_rowCount$$9$$ = $nodes$$14_simpleLayout$$.labelSectionWidth;
    $labelSectionWidth_rowCount$$9$$ == $JSCompiler_alias_NULL$$ && ("ifRequired" != $options$$208$$.labelTruncation ? $labelSectionWidth_rowCount$$9$$ = $columnsPerRow_labelVisible_maximumLabelWidth$$ + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ : ($nodes$$14_simpleLayout$$ = $cellNodes$$2$$[$maximizedCellIndex$$1_nodeCounts$$], $labelSectionWidth_rowCount$$9$$ = Math.max($columnsPerRow_labelVisible_maximumLabelWidth$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$47$$, 
    $nodes$$14_simpleLayout$$)) + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$), $labelSectionWidth_rowCount$$9$$ = Math.min($labelSectionWidth_rowCount$$9$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$));
    $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $labelSectionWidth_rowCount$$9$$ + $container$$152_gridGap$$1$$));
    if($maxCellIndex_node$$258$$[dvt.$NBoxConstants$.$LABEL$] && ($container$$152_gridGap$$1$$ = new dvt.$Container$, $columnsPerRow_labelVisible_maximumLabelWidth$$ = $JSCompiler_alias_FALSE$$, $columnCount$$9_label$$60_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$47$$, $maxCellIndex_node$$258$$), $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = dvt.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$60_secondaryLabel$$).$h$, dvt.$TextUtils$.$fitText$($columnCount$$9_label$$60_secondaryLabel$$, 
    $labelSectionWidth_rowCount$$9$$ - $nodeLabelOnlyStartLabelGap_startLabelGap$$ - $nodeEndLabelGap_overflow$$4$$, $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$, $container$$152_gridGap$$1$$) && ($columnsPerRow_labelVisible_maximumLabelWidth$$ = $JSCompiler_alias_TRUE$$), $maxCellIndex_node$$258$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$] && ($columnCount$$9_label$$60_secondaryLabel$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$47$$, $maxCellIndex_node$$258$$), $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = 
    dvt.$TextUtils$.$guessTextDimensions$($columnCount$$9_label$$60_secondaryLabel$$).$h$, dvt.$TextUtils$.$fitText$($columnCount$$9_label$$60_secondaryLabel$$, $labelSectionWidth_rowCount$$9$$ - $nodeLabelOnlyStartLabelGap_startLabelGap$$ - $nodeEndLabelGap_overflow$$4$$, $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$, $container$$152_gridGap$$1$$) && ($columnsPerRow_labelVisible_maximumLabelWidth$$ = $JSCompiler_alias_TRUE$$)), !$columnsPerRow_labelVisible_maximumLabelWidth$$ && ($labelSectionWidth_rowCount$$9$$ = 
    0, $maxCellIndex_node$$258$$[dvt.$NBoxConstants$.$COLOR$] && (!$indicatorIcon$$2_maxColumns$$ || $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$47$$, $maxCellIndex_node$$258$$)) && (!$icon$$40_widestLabel$$ || $icon$$40_widestLabel$$[dvt.$NBoxConstants$.$SOURCE$])))) {
      $labelSectionWidth_rowCount$$9$$ = Math.max(0, Math.min($cellIndices$$2_nodeSwatchSize$$, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$))
    }
    if(0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$) {
      var $iconWidth$$9$$ = $iconSectionWidth$$, $iconSectionWidth$$ = Math.max(0, $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $indicatorSectionWidth$$)
    }
    0 > $cellArea_ci$$3_maximizedColumn$$7$$.$w$ - $indicatorSectionWidth$$ && ($indicatorSectionWidth$$ = $cellArea_ci$$3_maximizedColumn$$7$$.$w$);
    $cellLayouts_nodeStartLabelGap$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, overflow:$JSCompiler_alias_FALSE$$}
  }else {
    $cellIndices$$2_nodeSwatchSize$$ = [];
    if($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$) {
      $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$47$$, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$);
      for($c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$60_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
        $cellIndices$$2_nodeSwatchSize$$.push($c$$26_nodeCellIndex$$ + $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $columnCount$$9_label$$60_secondaryLabel$$)
      }
    }else {
      if($cellArea_ci$$3_maximizedColumn$$7$$) {
        $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$47$$, $cellArea_ci$$3_maximizedColumn$$7$$);
        for($nodeCount$$8_r$$34$$ = 0;$nodeCount$$8_r$$34$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$34$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ + $nodeCount$$8_r$$34$$ * $columnCount$$9_label$$60_secondaryLabel$$)
        }
      }else {
        for($cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = 0;$cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ < $cellLayouts_nodeStartLabelGap$$.length;$cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$)
        }
      }
    }
    if($nodes$$14_simpleLayout$$.labelSectionWidth != $JSCompiler_alias_NULL$$) {
      $labelSectionWidth_rowCount$$9$$ = $nodes$$14_simpleLayout$$.labelSectionWidth, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$47$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + 
      $container$$152_gridGap$$1$$) / ($nodeHeight$$3_nodeLayout$$3$$ + $container$$152_gridGap$$1$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $labelSectionWidth_rowCount$$9$$ + $container$$152_gridGap$$1$$))
    }else {
      for($cellArea_ci$$3_maximizedColumn$$7$$ = $maxCellIndex_node$$258$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $cellIndices$$2_nodeSwatchSize$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
        !isNaN($maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$3_maximizedColumn$$7$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$3_maximizedColumn$$7$$]] > $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$258$$] && ($maxCellIndex_node$$258$$ = $cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$3_maximizedColumn$$7$$])
      }
      if("ifRequired" != $options$$208$$.labelTruncation) {
        if($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$47$$, $maxCellIndex_node$$258$$), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $container$$152_gridGap$$1$$) / 
        ($nodeHeight$$3_nodeLayout$$3$$ + $container$$152_gridGap$$1$$)), $indicatorIcon$$2_maxColumns$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$208$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ + $container$$152_gridGap$$1$$)), $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $indicatorIcon$$2_maxColumns$$ < 
        $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$258$$]) {
          $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($options$$208$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / $indicatorIcon$$2_maxColumns$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$152_gridGap$$1$$))), $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
          $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $indicatorIcon$$2_maxColumns$$
        }else {
          $columnsPerRow_labelVisible_maximumLabelWidth$$ = $indicatorIcon$$2_maxColumns$$;
          for($labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($options$$208$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / $columnsPerRow_labelVisible_maximumLabelWidth$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$152_gridGap$$1$$)));$labelSectionWidth_rowCount$$9$$ < $options$$208$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + 
          $nodeEndLabelGap_overflow$$4$$;) {
            if(($columnsPerRow_labelVisible_maximumLabelWidth$$ - 1) * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ >= $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$258$$]) {
              $columnsPerRow_labelVisible_maximumLabelWidth$$--, $labelSectionWidth_rowCount$$9$$ = Math.floor(Math.min($options$$208$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / $columnsPerRow_labelVisible_maximumLabelWidth$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$152_gridGap$$1$$)))
            }else {
              break
            }
          }
          $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$;
          $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $columnsPerRow_labelVisible_maximumLabelWidth$$
        }
      }else {
        for(var $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$47$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_ci$$3_maximizedColumn$$7$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$.__childArea, $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$h$ + $container$$152_gridGap$$1$$) / 
        ($nodeHeight$$3_nodeLayout$$3$$ + $container$$152_gridGap$$1$$)), $indicatorIcon$$2_maxColumns$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$208$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ + $container$$152_gridGap$$1$$)), $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, 
        $startIndex$$8$$ = $icon$$40_widestLabel$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0;$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ <= $indicatorIcon$$2_maxColumns$$;) {
          $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$++;
          var $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$152_gridGap$$1$$));
          if($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
            break
          }
          for(var $maxNodes$$1$$ = $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ * $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$, $nodeArray$$ = [], $nodeCount$$8_r$$34$$ = 0;$nodeCount$$8_r$$34$$ < $labelSectionWidth_rowCount$$9$$;$nodeCount$$8_r$$34$$++) {
            for($c$$26_nodeCellIndex$$ = 0;$c$$26_nodeCellIndex$$ < $columnCount$$9_label$$60_secondaryLabel$$;$c$$26_nodeCellIndex$$++) {
              if($cellIndex$$9_n$$20$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$47$$, $c$$26_nodeCellIndex$$) + $columnCount$$9_label$$60_secondaryLabel$$ * $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$47$$, $nodeCount$$8_r$$34$$), ($nodes$$14_simpleLayout$$ = $cellNodes$$2$$[$cellIndex$$9_n$$20$$]) && $nodes$$14_simpleLayout$$.length) {
                var $numNodes$$3$$ = Math.min($nodes$$14_simpleLayout$$.length, $maxNodes$$1$$);
                $nodes$$14_simpleLayout$$.length > $maxNodes$$1$$ && $numNodes$$3$$--;
                for($cellIndex$$9_n$$20$$ = $startIndex$$8$$;$cellIndex$$9_n$$20$$ < $numNodes$$3$$;$cellIndex$$9_n$$20$$++) {
                  $nodeArray$$.push($nodes$$14_simpleLayout$$[$cellIndex$$9_n$$20$$])
                }
              }
            }
          }
          $icon$$40_widestLabel$$ = Math.max($icon$$40_widestLabel$$, Math.ceil($DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$47$$, $nodeArray$$) + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$));
          if($icon$$40_widestLabel$$ > $maxLabelWidth$$6$$) {
            $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = Math.max($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - 1, 1);
            break
          }
          if($maxNodes$$1$$ >= $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$258$$]) {
            break
          }
          $startIndex$$8$$ = $maxNodes$$1$$
        }
        $maxLabelWidth$$6$$ = Math.floor(($cellArea_ci$$3_maximizedColumn$$7$$.$w$ + $container$$152_gridGap$$1$$) / $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$152_gridGap$$1$$));
        $labelSectionWidth_rowCount$$9$$ = $icon$$40_widestLabel$$ > $maxLabelWidth$$6$$ ? $maxLabelWidth$$6$$ : Math.max($icon$$40_widestLabel$$, Math.min($maxLabelWidth$$6$$, $columnsPerRow_labelVisible_maximumLabelWidth$$ + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$));
        $labelSectionWidth_rowCount$$9$$ < $options$$208$$.__layout.minimumLabelWidth && ($cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ = 0)
      }
    }
    for($cellArea_ci$$3_maximizedColumn$$7$$ = 0;$cellArea_ci$$3_maximizedColumn$$7$$ < $cellIndices$$2_nodeSwatchSize$$.length;$cellArea_ci$$3_maximizedColumn$$7$$++) {
      $cellIndex$$9_n$$20$$ = $cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$3_maximizedColumn$$7$$], $nodeEndLabelGap_overflow$$4$$ = $JSCompiler_alias_FALSE$$, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$9_n$$20$$] > $cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$ * $cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$ && ($nodeEndLabelGap_overflow$$4$$ = $JSCompiler_alias_TRUE$$), $cellLayouts_nodeStartLabelGap$$[$cellIndex$$9_n$$20$$] = 
      {cellRows:$cellRows$$1_i$$522_labelHeight$$8_secondaryLabelHeight$$, cellColumns:$cell$$16_cellColumns$$1_maxRows_maximizedColumnIndex$$2_maximizedRow$$7_maximizedRowIndex$$2$$, overflow:$nodeEndLabelGap_overflow$$4$$}
    }
  }
  $nodeHeight$$3_nodeLayout$$3$$ = {nodeHeight:$nodeHeight$$3_nodeLayout$$3$$, indicatorSectionWidth:$indicatorSectionWidth$$, iconSectionWidth:$iconSectionWidth$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$labelSectionWidth_rowCount$$9$$, cellLayouts:$cellLayouts_nodeStartLabelGap$$};
  return $options$$208$$.__layout.__nodeLayout = $nodeHeight$$3_nodeLayout$$3$$
};
$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($nbox$$48_nodeDrawerLayout$$, $childArea$$3_data$$79$$, $columns_nodes$$15$$) {
  var $options$$209$$ = $nbox$$48_nodeDrawerLayout$$.$getOptions$(), $container$$153_gridGap$$2$$ = $options$$209$$.__layout.gridGap, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $options$$209$$.__layout.nodeStartLabelGap, $label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = $options$$209$$.__layout.nodeLabelOnlyStartLabelGap, $nodeEndLabelGap$$1$$ = $options$$209$$.__layout.nodeEndLabelGap, $nodeSwatchSize$$1$$ = $options$$209$$.__layout.nodeSwatchSize, $labelVisible$$1_maximumLabelWidth$$1$$ = 
  $options$$209$$.__layout.maximumLabelWidth, $node$$259$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$48_nodeDrawerLayout$$, 0), $indicatorIcon$$3$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$48_nodeDrawerLayout$$, $node$$259$$), $icon$$41$$ = $DvtNBoxDataUtils$$.$getIcon$($nbox$$48_nodeDrawerLayout$$, $node$$259$$), $labelSectionWidth$$1_simpleLayout$$1$$ = $DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$48_nodeDrawerLayout$$), $nodeHeight$$4$$ = $labelSectionWidth$$1_simpleLayout$$1$$.nodeHeight, 
  $indicatorSectionWidth$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.iconSectionWidth, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $nodeStartLabelGap$$1_startLabelGap$$1$$ : $label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$;
  $childArea$$3_data$$79$$ = $childArea$$3_data$$79$$.__childArea;
  $labelSectionWidth$$1_simpleLayout$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.labelSectionWidth;
  $labelSectionWidth$$1_simpleLayout$$1$$ == $JSCompiler_alias_NULL$$ && ($labelSectionWidth$$1_simpleLayout$$1$$ = "ifRequired" != $options$$209$$.labelTruncation ? $labelVisible$$1_maximumLabelWidth$$1$$ + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeEndLabelGap$$1$$ : Math.max($labelVisible$$1_maximumLabelWidth$$1$$, $DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$48_nodeDrawerLayout$$, $columns_nodes$$15$$)) + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeEndLabelGap$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ = 
  Math.min($labelSectionWidth$$1_simpleLayout$$1$$, $childArea$$3_data$$79$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$));
  $columns_nodes$$15$$ = Math.floor(($childArea$$3_data$$79$$.$w$ + $container$$153_gridGap$$2$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_simpleLayout$$1$$ + $container$$153_gridGap$$2$$));
  if($node$$259$$[dvt.$NBoxConstants$.$LABEL$]) {
    var $container$$153_gridGap$$2$$ = new dvt.$Container$, $labelVisible$$1_maximumLabelWidth$$1$$ = $JSCompiler_alias_FALSE$$, $label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$48_nodeDrawerLayout$$, $node$$259$$), $labelHeight$$9_secondaryLabelHeight$$1$$ = dvt.$TextUtils$.$guessTextDimensions$($label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$).$h$;
    dvt.$TextUtils$.$fitText$($label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeEndLabelGap$$1$$, $labelHeight$$9_secondaryLabelHeight$$1$$, $container$$153_gridGap$$2$$) && ($labelVisible$$1_maximumLabelWidth$$1$$ = $JSCompiler_alias_TRUE$$);
    $node$$259$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$] && ($label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$48_nodeDrawerLayout$$, $node$$259$$), $labelHeight$$9_secondaryLabelHeight$$1$$ = dvt.$TextUtils$.$guessTextDimensions$($label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$).$h$, dvt.$TextUtils$.$fitText$($label$$61_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - 
    $nodeEndLabelGap$$1$$, $labelHeight$$9_secondaryLabelHeight$$1$$, $container$$153_gridGap$$2$$) && ($labelVisible$$1_maximumLabelWidth$$1$$ = $JSCompiler_alias_TRUE$$));
    if(!$labelVisible$$1_maximumLabelWidth$$1$$ && ($labelSectionWidth$$1_simpleLayout$$1$$ = 0, $node$$259$$[dvt.$NBoxConstants$.$COLOR$] && (!$indicatorIcon$$3$$ || $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$48_nodeDrawerLayout$$, $node$$259$$)) && (!$icon$$41$$ || $icon$$41$$[dvt.$NBoxConstants$.$SOURCE$]))) {
      $labelSectionWidth$$1_simpleLayout$$1$$ = Math.max(0, Math.min($nodeSwatchSize$$1$$, $childArea$$3_data$$79$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$))
    }
  }
  if(0 > $childArea$$3_data$$79$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
    var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = Math.max(0, $childArea$$3_data$$79$$.$w$ - $indicatorSectionWidth$$1$$)
  }
  0 > $childArea$$3_data$$79$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $childArea$$3_data$$79$$.$w$);
  $nbox$$48_nodeDrawerLayout$$ = {nodeHeight:$nodeHeight$$4$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$labelSectionWidth$$1_simpleLayout$$1$$, drawerLayout:{rows:-1, columns:$columns_nodes$$15$$}};
  return $options$$209$$.__layout.__nodeDrawerLayout = $nbox$$48_nodeDrawerLayout$$
};
$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$) {
  var $nodeHeight$$5_options$$210$$ = $nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getOptions$(), $label$$62_labelHeight$$10_nodeIndicatorGap$$ = $nodeHeight$$5_options$$210$$.__layout.nodeIndicatorGap, $nodeSingleLabelGap$$ = $nodeHeight$$5_options$$210$$.__layout.nodeSingleLabelGap, $nodeDualLabelGap_padding$$21$$ = $nodeHeight$$5_options$$210$$.__layout.nodeDualLabelGap, $iconHeight$$9_nodeInterLabelGap$$ = $nodeHeight$$5_options$$210$$.__layout.nodeInterLabelGap, $nodeSwatchSize$$2$$ = 
  $nodeHeight$$5_options$$210$$.__layout.nodeSwatchSize, $node$$260$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, 0), $indicatorSectionWidth$$2$$ = $nodeHeight$$5_options$$210$$ = 0, $iconSectionWidth$$2_preferredSize$$5$$ = 0, $labelSectionWidth$$2$$ = $JSCompiler_alias_NULL$$, $indicatorIcon$$4$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$260$$), $indicatorColor_indicatorIconHeight$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, 
  $node$$260$$), $icon$$42$$ = $DvtNBoxDataUtils$$.$getIcon$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$260$$);
  $indicatorIcon$$4$$ ? ($indicatorColor_indicatorIconHeight$$ = $indicatorIcon$$4$$[dvt.$NBoxConstants$.$HEIGHT$], $indicatorSectionWidth$$2$$ = $indicatorIcon$$4$$[dvt.$NBoxConstants$.$WIDTH$] + 2 * $label$$62_labelHeight$$10_nodeIndicatorGap$$, $nodeHeight$$5_options$$210$$ = Math.max($nodeHeight$$5_options$$210$$, $indicatorColor_indicatorIconHeight$$ + 2 * $label$$62_labelHeight$$10_nodeIndicatorGap$$)) : $indicatorColor_indicatorIconHeight$$ && ($indicatorSectionWidth$$2$$ = $nodeSwatchSize$$2$$);
  if($node$$260$$[dvt.$NBoxConstants$.$LABEL$]) {
    $label$$62_labelHeight$$10_nodeIndicatorGap$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$260$$), $label$$62_labelHeight$$10_nodeIndicatorGap$$ = dvt.$TextUtils$.$guessTextDimensions$($label$$62_labelHeight$$10_nodeIndicatorGap$$).$h$, $nodeHeight$$5_options$$210$$ = Math.max($nodeHeight$$5_options$$210$$, $label$$62_labelHeight$$10_nodeIndicatorGap$$ + 2 * $nodeSingleLabelGap$$), $node$$260$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$] && ($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$ = 
    $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$260$$), $nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$ = dvt.$TextUtils$.$guessTextDimensions$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$).$h$, $nodeHeight$$5_options$$210$$ = Math.max($nodeHeight$$5_options$$210$$, $label$$62_labelHeight$$10_nodeIndicatorGap$$ + $nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$ + 2 * $nodeDualLabelGap_padding$$21$$ + $iconHeight$$9_nodeInterLabelGap$$))
  }else {
    if($labelSectionWidth$$2$$ = 0, $node$$260$$[dvt.$NBoxConstants$.$COLOR$] && (!$indicatorIcon$$4$$ || $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$49_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$260$$)) && (!$icon$$42$$ || $icon$$42$$[dvt.$NBoxConstants$.$SOURCE$])) {
      $labelSectionWidth$$2$$ = $indicatorSectionWidth$$2$$ ? $indicatorSectionWidth$$2$$ : $nodeSwatchSize$$2$$
    }
  }
  $icon$$42$$ && ($iconSectionWidth$$2_preferredSize$$5$$ = Math.max($nodeHeight$$5_options$$210$$, dvt.$Agent$.$isTouchDevice$() ? $icon$$42$$.preferredSizeTouch : $icon$$42$$.preferredSize), $nodeDualLabelGap_padding$$21$$ = ($icon$$42$$[dvt.$NBoxConstants$.$SOURCE$] ? $icon$$42$$.sourcePaddingRatio : $icon$$42$$.shapePaddingRatio) * $iconSectionWidth$$2_preferredSize$$5$$, $iconHeight$$9_nodeInterLabelGap$$ = $icon$$42$$[dvt.$NBoxConstants$.$HEIGHT$] ? $icon$$42$$[dvt.$NBoxConstants$.$HEIGHT$] : 
  $iconSectionWidth$$2_preferredSize$$5$$ - 2 * $nodeDualLabelGap_padding$$21$$, $iconSectionWidth$$2_preferredSize$$5$$ = ($icon$$42$$[dvt.$NBoxConstants$.$WIDTH$] ? $icon$$42$$[dvt.$NBoxConstants$.$WIDTH$] : $iconSectionWidth$$2_preferredSize$$5$$ - 2 * $nodeDualLabelGap_padding$$21$$) + 2 * $nodeDualLabelGap_padding$$21$$, $nodeHeight$$5_options$$210$$ = Math.max($nodeHeight$$5_options$$210$$, $iconHeight$$9_nodeInterLabelGap$$ + 2 * $nodeDualLabelGap_padding$$21$$));
  return{nodeHeight:$nodeHeight$$5_options$$210$$, indicatorSectionWidth:$indicatorSectionWidth$$2$$, iconSectionWidth:$iconSectionWidth$$2_preferredSize$$5$$, labelSectionWidth:$labelSectionWidth$$2$$}
};
$DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($nbox$$50$$, $node$$261$$, $nodeContainer$$3$$, $borderRadius$$6_color$$44_nodeLayout$$4$$) {
  var $nodeRect_width$$82$$ = $borderRadius$$6_color$$44_nodeLayout$$4$$.indicatorSectionWidth + $borderRadius$$6_color$$44_nodeLayout$$4$$.iconSectionWidth + $borderRadius$$6_color$$44_nodeLayout$$4$$.labelSectionWidth, $height$$74$$ = $borderRadius$$6_color$$44_nodeLayout$$4$$.nodeHeight;
  $borderRadius$$6_color$$44_nodeLayout$$4$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($nbox$$50$$);
  var $hoverColor$$3$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($nbox$$50$$), $selectionColor$$1$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($nbox$$50$$), $selectionRect$$ = new dvt.$Rect$($nbox$$50$$.$getCtx$(), 0, 0, $nodeRect_width$$82$$, $height$$74$$);
  $selectionRect$$.$setFill$($JSCompiler_alias_NULL$$);
  $borderRadius$$6_color$$44_nodeLayout$$4$$ && ($selectionRect$$.$setRx$($borderRadius$$6_color$$44_nodeLayout$$4$$), $selectionRect$$.$setRy$($borderRadius$$6_color$$44_nodeLayout$$4$$));
  $selectionRect$$.$setHoverStroke$(new dvt.$SolidStroke$($hoverColor$$3$$, $JSCompiler_alias_NULL$$, 2), new dvt.$SolidStroke$($selectionColor$$1$$, $JSCompiler_alias_NULL$$, 4));
  $selectionRect$$.$setSelectedStroke$(new dvt.$SolidStroke$($selectionColor$$1$$, $JSCompiler_alias_NULL$$, 4), $JSCompiler_alias_NULL$$);
  $selectionRect$$.$setSelectedHoverStroke$(new dvt.$SolidStroke$($hoverColor$$3$$, $JSCompiler_alias_NULL$$, 2), new dvt.$SolidStroke$($selectionColor$$1$$, $JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$3$$.$addChild$($selectionRect$$);
  $nodeContainer$$3$$.$setSelectionShape$($selectionRect$$);
  $nodeRect_width$$82$$ = new dvt.$Rect$($nbox$$50$$.$getCtx$(), 0, 0, $nodeRect_width$$82$$, $height$$74$$);
  $borderRadius$$6_color$$44_nodeLayout$$4$$ && ($nodeRect_width$$82$$.$setRx$($borderRadius$$6_color$$44_nodeLayout$$4$$), $nodeRect_width$$82$$.$setRy$($borderRadius$$6_color$$44_nodeLayout$$4$$));
  $borderRadius$$6_color$$44_nodeLayout$$4$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$50$$, $node$$261$$);
  $nodeRect_width$$82$$.$setSolidFill$($borderRadius$$6_color$$44_nodeLayout$$4$$);
  $DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$50$$, $node$$261$$) && $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$50$$, $node$$261$$) && $nodeRect_width$$82$$.$setSolidStroke$($DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$50$$, $node$$261$$), $JSCompiler_alias_NULL$$, $DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$50$$, $node$$261$$));
  $nodeContainer$$3$$.$addChild$($nodeRect_width$$82$$);
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$50$$, $node$$261$$, $nodeRect_width$$82$$, "background")
};
$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($nbox$$51$$, $node$$262$$, $nodeContainer$$4$$, $nodeLayout$$5$$) {
  var $color$$45$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$51$$, $node$$262$$), $contrastColor_indicatorIconColor$$ = dvt.$ColorUtils$.$getContrastingTextColor$($color$$45$$), $indicatorIconWidthWithStroke_indicatorX$$ = dvt.$Agent$.$isRightToLeft$($nbox$$51$$.$getCtx$()) ? $nodeLayout$$5$$.labelSectionWidth + $nodeLayout$$5$$.iconSectionWidth : 0, $indicatorColor$$1_indicatorIcon$$5$$ = $DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$51$$, $node$$262$$);
  if($indicatorColor$$1_indicatorIcon$$5$$) {
    var $contrastColor_indicatorIconColor$$ = dvt.$ColorUtils$.$getContrastingTextColor$($indicatorColor$$1_indicatorIcon$$5$$), $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$ = new dvt.$Rect$($nbox$$51$$.$getCtx$(), $indicatorIconWidthWithStroke_indicatorX$$, 0, $nodeLayout$$5$$.indicatorSectionWidth, $nodeLayout$$5$$.nodeHeight);
    $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$.$setSolidFill$($indicatorColor$$1_indicatorIcon$$5$$);
    $DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$51$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, $nodeLayout$$5$$);
    $nodeContainer$$4$$.$addChild$($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$51$$, $node$$262$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, dvt.$NBoxConstants$.$INDICATOR$)
  }
  if($indicatorColor$$1_indicatorIcon$$5$$ = $DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$51$$, $node$$262$$)) {
    var $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$ = $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$WIDTH$], $indicatorIconHeight$$1$$ = $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$HEIGHT$], $indicatorIconX$$ = $indicatorIconWidthWithStroke_indicatorX$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $indicatorIconY$$ = $nodeLayout$$5$$.nodeHeight / 2, $indicatorIconWidthWithStroke_indicatorX$$ = $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, $contrastColor_indicatorIconColor$$ = 
    $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$COLOR$] ? $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$COLOR$] : $contrastColor_indicatorIconColor$$, $indicatorIconBorderColor$$ = $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$BORDER_COLOR$], $indicatorIconBorderWidth$$ = $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$BORDER_WIDTH$], $indicatorIconBorderRadius$$ = $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$BORDER_RADIUS$], $indicatorIconPattern$$ = 
    $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$PATTERN$];
    $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$SOURCE$] ? ($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$ = new dvt.$ImageMarker$($nbox$$51$$.$getCtx$(), $indicatorIconX$$, $indicatorIconY$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, $indicatorIconHeight$$1$$, $indicatorIconBorderRadius$$, $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$SOURCE$]), $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : 
    ($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$ = new dvt.$SimpleMarker$($nbox$$51$$.$getCtx$(), $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$SHAPE$], dvt.$CSSStyle$.$SKIN_ALTA$, $indicatorIconX$$, $indicatorIconY$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, $indicatorIconHeight$$1$$, $indicatorIconBorderRadius$$), 0 < $indicatorIconBorderWidth$$ && ($indicatorIconWidthWithStroke_indicatorX$$ += $indicatorIconBorderWidth$$));
    $indicatorIconBorderWidth$$ && $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$.$setSolidStroke$($indicatorIconBorderColor$$, $JSCompiler_alias_NULL$$, $indicatorIconBorderWidth$$);
    "none" != $indicatorIconPattern$$ ? $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$.$setFill$(new dvt.$PatternFill$($indicatorIconPattern$$, $contrastColor_indicatorIconColor$$, $color$$45$$)) : $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$.$setSolidFill$($contrastColor_indicatorIconColor$$);
    $indicatorIconWidthWithStroke_indicatorX$$ > $nodeLayout$$5$$.indicatorSectionWidth ? $indicatorIconBorderRadius$$ && $indicatorColor$$1_indicatorIcon$$5$$[dvt.$NBoxConstants$.$SOURCE$] ? $nodeContainer$$4$$.$getChildContainer$($JSCompiler_alias_TRUE$$).$addChild$($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$51$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, $nodeLayout$$5$$), $nodeContainer$$4$$.$addChild$($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$)) : 
    $nodeContainer$$4$$.$addChild$($bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$51$$, $node$$262$$, $bgRect$$3_indicatorIconWidth$$1_indicatorMarker$$, dvt.$NBoxConstants$.$INDICATOR_ICON$)
  }
};
$DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($nbox$$52$$, $node$$263$$, $nodeContainer$$5$$, $nodeLayout$$6$$) {
  var $color$$46$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$52$$, $node$$263$$), $contrastColor$$1_iconColor$$1$$ = dvt.$ColorUtils$.$getContrastingTextColor$($color$$46$$), $iconX$$2_rtl$$25$$ = dvt.$Agent$.$isRightToLeft$($nbox$$52$$.$getCtx$()), $icon$$43$$ = $DvtNBoxDataUtils$$.$getIcon$($nbox$$52$$, $node$$263$$);
  if($icon$$43$$) {
    var $iconHeight$$10_padding$$22$$ = ($icon$$43$$[dvt.$NBoxConstants$.$SOURCE$] ? $icon$$43$$.sourcePaddingRatio : $icon$$43$$.shapePaddingRatio) * $nodeLayout$$6$$.nodeHeight, $iconMarker$$1_iconWidth$$12$$ = $icon$$43$$[dvt.$NBoxConstants$.$WIDTH$] ? $icon$$43$$[dvt.$NBoxConstants$.$WIDTH$] : $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth : $nodeLayout$$6$$.iconSectionWidth - 2 * $iconHeight$$10_padding$$22$$, $iconHeight$$10_padding$$22$$ = $icon$$43$$[dvt.$NBoxConstants$.$HEIGHT$] ? 
    $icon$$43$$[dvt.$NBoxConstants$.$HEIGHT$] : $nodeLayout$$6$$.nodeHeight - 2 * $iconHeight$$10_padding$$22$$, $iconX$$2_rtl$$25$$ = $nodeLayout$$6$$[$iconX$$2_rtl$$25$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + Math.max($nodeLayout$$6$$.iconSectionWidth / 2, $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth / 2 : 0), $iconY$$2$$ = $nodeLayout$$6$$.nodeHeight / 2, $contrastColor$$1_iconColor$$1$$ = $icon$$43$$[dvt.$NBoxConstants$.$COLOR$] ? $icon$$43$$[dvt.$NBoxConstants$.$COLOR$] : 
    $contrastColor$$1_iconColor$$1$$, $iconBorderColor$$ = $icon$$43$$[dvt.$NBoxConstants$.$BORDER_COLOR$], $iconBorderWidth$$ = $icon$$43$$[dvt.$NBoxConstants$.$BORDER_WIDTH$], $iconBorderRadius$$1$$ = $icon$$43$$[dvt.$NBoxConstants$.$BORDER_RADIUS$], $iconPattern$$ = $icon$$43$$[dvt.$NBoxConstants$.$PATTERN$];
    $icon$$43$$[dvt.$NBoxConstants$.$SOURCE$] ? ($iconMarker$$1_iconWidth$$12$$ = new dvt.$ImageMarker$($nbox$$52$$.$getCtx$(), $iconX$$2_rtl$$25$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$22$$, $iconBorderRadius$$1$$, $icon$$43$$[dvt.$NBoxConstants$.$SOURCE$]), $iconMarker$$1_iconWidth$$12$$.$setPreserveAspectRatio$($DvtNBoxNodeRenderer$$.$_ASPECT_RATIO_SCALING$)) : $iconMarker$$1_iconWidth$$12$$ = new dvt.$SimpleMarker$($nbox$$52$$.$getCtx$(), $icon$$43$$[dvt.$NBoxConstants$.$SHAPE$], 
    dvt.$CSSStyle$.$SKIN_ALTA$, $iconX$$2_rtl$$25$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$ - $iconBorderWidth$$, $iconHeight$$10_padding$$22$$ - $iconBorderWidth$$, $iconBorderRadius$$1$$);
    $iconBorderWidth$$ && $iconMarker$$1_iconWidth$$12$$.$setSolidStroke$($iconBorderColor$$, $JSCompiler_alias_NULL$$, $iconBorderWidth$$);
    "none" != $iconPattern$$ ? $iconMarker$$1_iconWidth$$12$$.$setFill$(new dvt.$PatternFill$($iconPattern$$, $contrastColor$$1_iconColor$$1$$, $color$$46$$)) : $iconMarker$$1_iconWidth$$12$$.$setSolidFill$($contrastColor$$1_iconColor$$1$$);
    0 == $nodeLayout$$6$$.indicatorSectionWidth || 0 == $nodeLayout$$6$$.labelSectionWidth ? $iconBorderRadius$$1$$ && $icon$$43$$[dvt.$NBoxConstants$.$SOURCE$] ? $nodeContainer$$5$$.$getChildContainer$($JSCompiler_alias_TRUE$$).$addChild$($iconMarker$$1_iconWidth$$12$$) : ($DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$52$$, $iconMarker$$1_iconWidth$$12$$, $nodeLayout$$6$$), $nodeContainer$$5$$.$addChild$($iconMarker$$1_iconWidth$$12$$)) : $nodeContainer$$5$$.$addChild$($iconMarker$$1_iconWidth$$12$$);
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$52$$, $node$$263$$, $iconMarker$$1_iconWidth$$12$$, dvt.$NBoxConstants$.$ICON$)
  }
};
$DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($nbox$$53$$, $node$$264$$, $nodeContainer$$6_yOffset$$4$$, $nodeLayout$$7$$) {
  var $nodeEndLabelGap$$2_options$$211$$ = $nbox$$53$$.$getOptions$(), $nodeInterLabelGap$$1$$ = $nodeEndLabelGap$$2_options$$211$$.__layout.nodeInterLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$211$$.__layout.nodeLabelOnlyStartLabelGap, $color$$47_contrastColor$$2_nodeStartLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$211$$.__layout.nodeStartLabelGap, $nodeEndLabelGap$$2_options$$211$$ = $nodeEndLabelGap$$2_options$$211$$.__layout.nodeEndLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = 
  $nodeLayout$$7$$.indicatorSectionWidth || $nodeLayout$$7$$.iconSectionWidth ? $color$$47_contrastColor$$2_nodeStartLabelGap$$2$$ : $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$, $color$$47_contrastColor$$2_nodeStartLabelGap$$2$$ = $DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$53$$, $node$$264$$), $color$$47_contrastColor$$2_nodeStartLabelGap$$2$$ = dvt.$ColorUtils$.$getContrastingTextColor$($color$$47_contrastColor$$2_nodeStartLabelGap$$2$$), $labelX$$4$$ = dvt.$Agent$.$isRightToLeft$($nbox$$53$$.$getCtx$()) ? 
  $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ : $nodeLayout$$7$$.indicatorSectionWidth + $nodeLayout$$7$$.iconSectionWidth + $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$;
  if($node$$264$$[dvt.$NBoxConstants$.$LABEL$]) {
    var $label$$63$$ = $DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$53$$, $node$$264$$), $labelHeight$$11$$ = dvt.$TextUtils$.$guessTextDimensions$($label$$63$$).$h$;
    dvt.$TextUtils$.$fitText$($label$$63$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$211$$, $labelHeight$$11$$, $nodeContainer$$6_yOffset$$4$$) && ($DvtNBoxRenderer$$.$positionText$($label$$63$$, $labelX$$4$$, $nodeLayout$$7$$.nodeHeight / 2), $label$$63$$.$getCSSStyle$() && $label$$63$$.$getCSSStyle$().$getStyle$("color") ? $label$$63$$.$setSolidFill$($label$$63$$.$getCSSStyle$().$getStyle$("color")) : $label$$63$$.$setSolidFill$($color$$47_contrastColor$$2_nodeStartLabelGap$$2$$), 
    $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$53$$, $node$$264$$, $label$$63$$, dvt.$NBoxConstants$.$LABEL$));
    if($node$$264$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$]) {
      var $secondaryLabel$$3$$ = $DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$53$$, $node$$264$$), $secondaryLabelHeight$$3$$ = dvt.$TextUtils$.$guessTextDimensions$($secondaryLabel$$3$$).$h$;
      dvt.$TextUtils$.$fitText$($secondaryLabel$$3$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$211$$, $secondaryLabelHeight$$3$$, $nodeContainer$$6_yOffset$$4$$) && ($nodeContainer$$6_yOffset$$4$$ = ($nodeLayout$$7$$.nodeHeight - $labelHeight$$11$$ - $secondaryLabelHeight$$3$$ - $nodeInterLabelGap$$1$$) / 2, $DvtNBoxRenderer$$.$positionText$($label$$63$$, $labelX$$4$$, $nodeContainer$$6_yOffset$$4$$ + $labelHeight$$11$$ / 
      2), $DvtNBoxRenderer$$.$positionText$($secondaryLabel$$3$$, $labelX$$4$$, $nodeContainer$$6_yOffset$$4$$ + $labelHeight$$11$$ + $nodeInterLabelGap$$1$$ + $secondaryLabelHeight$$3$$ / 2), $secondaryLabel$$3$$.$getCSSStyle$() && $secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color") ? $secondaryLabel$$3$$.$setSolidFill$($secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color")) : $secondaryLabel$$3$$.$setSolidFill$($color$$47_contrastColor$$2_nodeStartLabelGap$$2$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$53$$, 
      $node$$264$$, $secondaryLabel$$3$$, dvt.$NBoxConstants$.$SECONDARY_LABEL$))
    }
  }
};
$DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$ = function $$DvtNBoxNodeRenderer$$$$_getMaxLabelWidth$$($nbox$$54$$, $nodes$$16$$) {
  for(var $container$$154$$ = new dvt.$Container$, $n$$21_width$$83$$ = 0;$n$$21_width$$83$$ < $nodes$$16$$.length;$n$$21_width$$83$$++) {
    var $node$$265$$ = $nodes$$16$$[$n$$21_width$$83$$];
    $container$$154$$.$addChild$($DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$54$$, $node$$265$$));
    $container$$154$$.$addChild$($DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$54$$, $node$$265$$))
  }
  $nbox$$54$$.$addChild$($container$$154$$);
  for($n$$21_width$$83$$ = $container$$154$$.$getDimensions$().$w$;0 < $container$$154$$.$getNumChildren$();) {
    $container$$154$$.removeChild($container$$154$$.$getChildAt$(0))
  }
  $nbox$$54$$.removeChild($container$$154$$);
  return $n$$21_width$$83$$
};
$DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($borderRadius$$7_nbox$$55$$, $displayable$$53$$, $nodeHeight$$6_nodeLayout$$8$$) {
  $borderRadius$$7_nbox$$55$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($borderRadius$$7_nbox$$55$$);
  if($borderRadius$$7_nbox$$55$$ = $borderRadius$$7_nbox$$55$$ < $DvtNBoxNodeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $borderRadius$$7_nbox$$55$$) {
    var $nodeWidth$$3$$ = $nodeHeight$$6_nodeLayout$$8$$.indicatorSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.iconSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.labelSectionWidth;
    $nodeHeight$$6_nodeLayout$$8$$ = $nodeHeight$$6_nodeLayout$$8$$.nodeHeight;
    var $clipPath$$9$$ = new dvt.$ClipPath$;
    $clipPath$$9$$.$addRect$(0, 0, $nodeWidth$$3$$, $nodeHeight$$6_nodeLayout$$8$$, $borderRadius$$7_nbox$$55$$, $borderRadius$$7_nbox$$55$$);
    $displayable$$53$$.$setClipPath$($clipPath$$9$$)
  }
};
$DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($animationHandler$$28$$, $oldNode$$12$$, $newNode$$9$$) {
  var $oldNBox$$10$$ = $animationHandler$$28$$.$_oldNBox$, $newNBox$$8$$ = $animationHandler$$28$$.$_newNBox$, $clipPath$$10_oldGlobalMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$12$$), $movePlayable_newGlobalMatrix_playable$$25$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$9$$), $newMatrix$$2$$ = $newNode$$9$$.$getMatrix$(), $parent$$65$$ = $newNode$$9$$.getParent();
  $oldNode$$12$$.$setAlpha$(0);
  $animationHandler$$28$$.$_newNBox$.$addChild$($newNode$$9$$);
  $newNode$$9$$.$setMatrix$($clipPath$$10_oldGlobalMatrix$$);
  var $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($oldNBox$$10$$, $oldNode$$12$$), $newRect_newScrollContainer_newScrollRect$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($newNBox$$8$$, $newNode$$9$$);
  if($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ || $newRect_newScrollContainer_newScrollRect$$) {
    var $clipPath$$10_oldGlobalMatrix$$ = new dvt.$ClipPath$, $oldScrollMatrix_oldScrollRect_rect$$24$$;
    if($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$) {
      $oldScrollMatrix_oldScrollRect_rect$$24$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$);
      $oldScrollMatrix_oldScrollRect_rect$$24$$ = new dvt.$Rectangle$($oldScrollMatrix_oldScrollRect_rect$$24$$.$_tx$, $oldScrollMatrix_oldScrollRect_rect$$24$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight());
      var $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($oldNBox$$10$$, $oldNode$$12$$.getData()), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getCell$($oldNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), 
      $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$, "background"), $newCellMatrix_oldCellMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), 
      $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = new dvt.$Rectangle$($newCellMatrix_oldCellMatrix$$.$_tx$, $newCellMatrix_oldCellMatrix$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight());
      $oldScrollMatrix_oldScrollRect_rect$$24$$ = $oldScrollMatrix_oldScrollRect_rect$$24$$.$getUnion$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$)
    }
    $newRect_newScrollContainer_newScrollRect$$ && ($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newRect_newScrollContainer_newScrollRect$$), $newRect_newScrollContainer_newScrollRect$$ = new dvt.$Rectangle$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.$_tx$, 
    $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.$_ty$, $newRect_newScrollContainer_newScrollRect$$.getWidth(), $newRect_newScrollContainer_newScrollRect$$.getHeight()), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$8$$, $newNode$$9$$.getData()), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = 
    $DvtNBoxDataUtils$$.$getCell$($newNBox$$8$$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$8$$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$, 
    "background"), $newCellMatrix_oldCellMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = new dvt.$Rectangle$($newCellMatrix_oldCellMatrix$$.$_tx$, $newCellMatrix_oldCellMatrix$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), 
    $newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight()), $newRect_newScrollContainer_newScrollRect$$ = $newRect_newScrollContainer_newScrollRect$$.$getUnion$($newCell$$3_newCellBackground_newCellIndex_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $oldScrollMatrix_oldScrollRect_rect$$24$$ = $oldScrollMatrix_oldScrollRect_rect$$24$$ ? 
    $oldScrollMatrix_oldScrollRect_rect$$24$$.$getUnion$($newRect_newScrollContainer_newScrollRect$$) : $newRect_newScrollContainer_newScrollRect$$);
    $oldScrollMatrix_oldScrollRect_rect$$24$$ && ($clipPath$$10_oldGlobalMatrix$$.$addRect$($oldScrollMatrix_oldScrollRect_rect$$24$$.x, $oldScrollMatrix_oldScrollRect_rect$$24$$.y, $oldScrollMatrix_oldScrollRect_rect$$24$$.$w$, $oldScrollMatrix_oldScrollRect_rect$$24$$.$h$), $newNode$$9$$.$setClipPath$($clipPath$$10_oldGlobalMatrix$$))
  }
  $movePlayable_newGlobalMatrix_playable$$25$$ = new dvt.$AnimMoveTo$($newNode$$9$$.$getCtx$(), $newNode$$9$$, new dvt.$Point$($movePlayable_newGlobalMatrix_playable$$25$$.$_tx$, $movePlayable_newGlobalMatrix_playable$$25$$.$_ty$), $animationHandler$$28$$.$getAnimationDuration$());
  dvt.$Playable$.$appendOnEnd$($movePlayable_newGlobalMatrix_playable$$25$$, function() {
    $parent$$65$$.$addChild$($newNode$$9$$);
    $newNode$$9$$.$setMatrix$($newMatrix$$2$$);
    $newNode$$9$$.$setClipPath$($JSCompiler_alias_NULL$$)
  });
  $animationHandler$$28$$.add($movePlayable_newGlobalMatrix_playable$$25$$, 1);
  $movePlayable_newGlobalMatrix_playable$$25$$ = new dvt.$CustomAnimation$($newNBox$$8$$.$getCtx$(), $newNode$$9$$, $animationHandler$$28$$.$getAnimationDuration$());
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, "background");
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, dvt.$NBoxConstants$.$LABEL$);
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, dvt.$NBoxConstants$.$SECONDARY_LABEL$);
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, dvt.$NBoxConstants$.$INDICATOR$);
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, dvt.$NBoxConstants$.$INDICATOR_ICON$);
  $DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix_playable$$25$$, $oldNBox$$10$$, $newNBox$$8$$, $oldNode$$12$$, $newNode$$9$$, dvt.$NBoxConstants$.$ICON$);
  $animationHandler$$28$$.add($movePlayable_newGlobalMatrix_playable$$25$$, 1)
};
$DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($playable$$26$$, $oldDisplayable$$1_oldNBox$$11$$, $newDisplayable$$1_newNBox$$9$$, $oldNode$$13$$, $newNode$$10$$, $displayableKey$$) {
  $oldDisplayable$$1_oldNBox$$11$$ = $DvtNBoxDataUtils$$.$getDisplayable$($oldDisplayable$$1_oldNBox$$11$$, $oldNode$$13$$.getData(), $displayableKey$$);
  $newDisplayable$$1_newNBox$$9$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newDisplayable$$1_newNBox$$9$$, $newNode$$10$$.getData(), $displayableKey$$);
  $oldDisplayable$$1_oldNBox$$11$$ && $newDisplayable$$1_newNBox$$9$$ && ($playable$$26$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, $newDisplayable$$1_newNBox$$9$$, $newDisplayable$$1_newNBox$$9$$.$getFill$, $newDisplayable$$1_newNBox$$9$$.$setFill$, $newDisplayable$$1_newNBox$$9$$.$getFill$()), $newDisplayable$$1_newNBox$$9$$.$setFill$($oldDisplayable$$1_oldNBox$$11$$.$getFill$()))
};
$DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($animationHandler$$29$$, $oldNode$$14$$) {
  var $animationPhase_oldDims$$2$$ = 0, $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$ = $animationHandler$$29$$.$_oldNBox$, $newNBox$$10$$ = $animationHandler$$29$$.$_newNBox$, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$.$getOptions$().__layout.__nodeLayout;
  if($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$) {
    var $cellDimensions_groups$$12_newCell$$4_oldData$$1$$ = $oldNode$$14$$.getData(), $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($newNBox$$10$$, $cellDimensions_groups$$12_newCell$$4_oldData$$1$$[dvt.$NBoxConstants$.ID]);
    if(!isNaN($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$) && ($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = $DvtNBoxDataUtils$$.$getNode$($newNBox$$10$$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($newNBox$$10$$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$))) {
      if($animationPhase_oldDims$$2$$ = 1, $DvtNBoxDataUtils$$.$getGrouping$($newNBox$$10$$)) {
        if($cellDimensions_groups$$12_newCell$$4_oldData$$1$$ = $newNBox$$10$$.$getOptions$().__groups, $DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$10$$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cellDimensions_groups$$12_newCell$$4_oldData$$1$$ = $cellDimensions_groups$$12_newCell$$4_oldData$$1$$[$DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$10$$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$)]), $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = 
        $cellDimensions_groups$$12_newCell$$4_oldData$$1$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$)]) {
          if($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$10$$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$)) {
            $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$), $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new dvt.$Point$(($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.indicatorSectionWidth + $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.iconSectionWidth + 
            $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.labelSectionWidth) / 2, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.nodeHeight / 2), $animationHandler$$29$$.add(new dvt.$AnimMoveTo$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, new dvt.$Point$($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$_tx$ - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.x, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$_ty$ - 
            $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.y), $animationHandler$$29$$.$getAnimationDuration$()), $animationPhase_oldDims$$2$$)
          }
        }
      }else {
        if($cellDimensions_groups$$12_newCell$$4_oldData$$1$$[dvt.$NBoxConstants$.$ROW$] != $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$[dvt.$NBoxConstants$.$ROW$] || $cellDimensions_groups$$12_newCell$$4_oldData$$1$$[dvt.$NBoxConstants$.$COLUMN$] != $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$[dvt.$NBoxConstants$.$COLUMN$]) {
          $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$14$$);
          $animationPhase_oldDims$$2$$ = $oldNode$$14$$.$getDimensions$();
          $animationHandler$$29$$.$_newNBox$.$addChild$($oldNode$$14$$);
          $oldNode$$14$$.$setMatrix$($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$);
          $cellDimensions_groups$$12_newCell$$4_oldData$$1$$ = $DvtNBoxDataUtils$$.$getCellByRowColumn$($newNBox$$10$$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$[dvt.$NBoxConstants$.$ROW$], $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$[dvt.$NBoxConstants$.$COLUMN$]);
          ($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$ = $DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$10$$, $cellDimensions_groups$$12_newCell$$4_oldData$$1$$.getData(), "overflow")) ? ($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$), $animationHandler$$29$$.add(new dvt.$AnimMoveTo$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, new dvt.$Point$($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_tx$, 
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_ty$), $animationHandler$$29$$.$getAnimationDuration$()), 1)) : ($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($cellDimensions_groups$$12_newCell$$4_oldData$$1$$), $cellDimensions_groups$$12_newCell$$4_oldData$$1$$ = $cellDimensions_groups$$12_newCell$$4_oldData$$1$$.$getDimensions$(), $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new dvt.$Point$(($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.indicatorSectionWidth + 
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.iconSectionWidth + $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.labelSectionWidth) / 2, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.nodeHeight / 2), $animationHandler$$29$$.add(new dvt.$AnimMoveTo$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, new dvt.$Point$($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$.$_tx$ + $cellDimensions_groups$$12_newCell$$4_oldData$$1$$.$w$ / 
          2 - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.x, $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$.$_ty$ + $cellDimensions_groups$$12_newCell$$4_oldData$$1$$.$h$ / 2 - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.y), $animationHandler$$29$$.$getAnimationDuration$()), 1));
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new dvt.$CustomAnimation$($newNBox$$10$$.$getCtx$(), $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $oldNode$$14$$, $oldNode$$14$$.$getScaleX$, $oldNode$$14$$.$setScaleX$, 0.01);
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $oldNode$$14$$, $oldNode$$14$$.$getScaleY$, $oldNode$$14$$.$setScaleY$, 0.01);
          dvt.$Playable$.$appendOnEnd$($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$, function() {
            $newNBox$$10$$.$_deleteContainer$.$addChild$($oldNode$$14$$)
          });
          $animationHandler$$29$$.add($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$, 2);
          $animationHandler$$29$$.add(new dvt.$AnimMoveBy$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, new dvt.$Point$($animationPhase_oldDims$$2$$.$w$ / 2, $animationPhase_oldDims$$2$$.$h$ / 2), $animationHandler$$29$$.$getAnimationDuration$()), 2);
          $animationHandler$$29$$.add(new dvt.$AnimFadeOut$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, $animationHandler$$29$$.$getAnimationDuration$()), 2);
          return
        }
      }
    }
    $oldNode$$14$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$14$$));
    if($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = $DvtNBoxDataUtils$$.$getNodeScrollableContainer$($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$, $oldNode$$14$$)) {
      $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new dvt.$ClipPath$, $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$), $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$ = new dvt.$Rectangle$($cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$.$_tx$, $cellMatrix_oldGlobalMatrix$$1_oldNBox$$12_overflow$$5_scrollMatrix$$.$_ty$, 
      $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$_width$, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$_height$), $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$addRect$($centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.x, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.y, $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$w$, 
      $centerMatrix_group$$30_groupNode$$12_newNode$$11_newNodeIndex_rect$$25_scrollContainer$$1$$.$h$), $oldNode$$14$$.$setClipPath$($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$)
    }
    $animationHandler$$29$$.add(new dvt.$AnimFadeOut$($newNBox$$10$$.$getCtx$(), $oldNode$$14$$, $animationHandler$$29$$.$getAnimationDuration$()), $animationPhase_oldDims$$2$$);
    $newNBox$$10$$.$_deleteContainer$.$addChild$($oldNode$$14$$)
  }
};
$DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($animationHandler$$30$$, $newNode$$12$$) {
  var $animationPhase$$1$$ = 2, $finalMatrix_oldNBox$$13$$ = $animationHandler$$30$$.$_oldNBox$, $fadeAnim$$1_newNBox$$11$$ = $animationHandler$$30$$.$_newNBox$, $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = $fadeAnim$$1_newNBox$$11$$.$getOptions$().__layout.__nodeLayout;
  if($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$) {
    var $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $newNode$$12$$.getData()[dvt.$NBoxConstants$.ID], $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $DvtNBoxDataUtils$$.$getNodeIndex$($finalMatrix_oldNBox$$13$$, $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$);
    if(!isNaN($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$) && ($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $DvtNBoxDataUtils$$.$getNode$($finalMatrix_oldNBox$$13$$, $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$), !$DvtNBoxDataUtils$$.$isNodeHidden$($finalMatrix_oldNBox$$13$$, $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$) && ($animationPhase$$1$$ = 1, $DvtNBoxDataUtils$$.$getGrouping$($finalMatrix_oldNBox$$13$$)))) {
      var $groups$$13$$ = $finalMatrix_oldNBox$$13$$.$getOptions$().__groups;
      $DvtNBoxDataUtils$$.$getGroupBehavior$($finalMatrix_oldNBox$$13$$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($groups$$13$$ = $groups$$13$$[$DvtNBoxDataUtils$$.$getCellIndex$($finalMatrix_oldNBox$$13$$, $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$)]);
      if($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $groups$$13$$[$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$)]) {
        if($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $DvtNBoxDataUtils$$.$getDisplayable$($finalMatrix_oldNBox$$13$$, $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$)) {
          var $childMatrix$$2$$ = $newNode$$12$$.$getMatrix$(), $parent$$66$$ = $newNode$$12$$.getParent(), $finalMatrix_oldNBox$$13$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$12$$), $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$), $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = new dvt.$Point$(($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.indicatorSectionWidth + 
          $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.iconSectionWidth + $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.labelSectionWidth) / 2, $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.nodeHeight / 2);
          $centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$.translate(-$centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.x, -$centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.y);
          $fadeAnim$$1_newNBox$$11$$.$addChild$($newNode$$12$$);
          $newNode$$12$$.$setMatrix$($centerMatrix$$1_group$$31_groupNode$$13_id$$135_oldNode$$15_oldNodeIndex$$);
          $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = new dvt.$AnimMoveTo$($fadeAnim$$1_newNBox$$11$$.$getCtx$(), $newNode$$12$$, new dvt.$Point$($finalMatrix_oldNBox$$13$$.$_tx$, $finalMatrix_oldNBox$$13$$.$_ty$), $animationHandler$$30$$.$getAnimationDuration$());
          dvt.$Playable$.$appendOnEnd$($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$, function() {
            $newNode$$12$$.$setMatrix$($childMatrix$$2$$);
            $parent$$66$$.$addChild$($newNode$$12$$)
          });
          $animationHandler$$30$$.add($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$, $animationPhase$$1$$)
        }
      }
    }
    $fadeAnim$$1_newNBox$$11$$ = new dvt.$CustomAnimation$($fadeAnim$$1_newNBox$$11$$.$getCtx$(), $newNode$$12$$, $animationHandler$$30$$.$getAnimationDuration$());
    $fadeAnim$$1_newNBox$$11$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $newNode$$12$$, $newNode$$12$$.$getAlpha$, $newNode$$12$$.$setAlpha$, $newNode$$12$$.$getAlpha$());
    $animationHandler$$30$$.add($fadeAnim$$1_newNBox$$11$$, $animationPhase$$1$$);
    $newNode$$12$$.$setAlpha$(0)
  }
};
$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$56$$, $object$$10$$) {
  $object$$10$$.$setAriaRole$("img");
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$24$$ = $object$$10$$.$getAriaLabel$();
    $desc$$24$$ && $object$$10$$.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$24$$)
  }
};
var $DvtNBoxCategoryNodeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxCategoryNodeRenderer$$, dvt.$Obj$);
$DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($nbox$$57$$, $nodeData$$43$$, $nodeContainer$$7$$, $scale$$46$$, $gap$$23$$) {
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($nbox$$57$$, $nodeData$$43$$, $nodeContainer$$7$$, $scale$$46$$, $gap$$23$$);
  var $rendered$$5$$ = $DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($nbox$$57$$, $nodeData$$43$$, $nodeContainer$$7$$, $scale$$46$$, $gap$$23$$);
  $DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($nbox$$57$$, $nodeData$$43$$, $nodeContainer$$7$$, $scale$$46$$, $rendered$$5$$, $gap$$23$$);
  $DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$57$$, $nodeContainer$$7$$)
};
$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($color$$48_nbox$$58$$, $node$$266$$, $nodeContainer$$8$$, $borderRadius$$8_scale$$47$$, $gap$$24_nodeRect$$1_side$$22$$) {
  $node$$266$$.__scale = $borderRadius$$8_scale$$47$$;
  $node$$266$$.__gap = $gap$$24_nodeRect$$1_side$$22$$;
  $gap$$24_nodeRect$$1_side$$22$$ = Math.max(0, $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($node$$266$$));
  $borderRadius$$8_scale$$47$$ = $DvtNBoxStyleUtils$$.$getNodeBorderRadius$($color$$48_nbox$$58$$);
  var $hoverColor$$4$$ = $DvtNBoxStyleUtils$$.$getNodeHoverColor$($color$$48_nbox$$58$$), $selectionColor$$2$$ = $DvtNBoxStyleUtils$$.$getNodeSelectionColor$($color$$48_nbox$$58$$), $selectionRect$$1$$ = new dvt.$Rect$($color$$48_nbox$$58$$.$getCtx$(), -$gap$$24_nodeRect$$1_side$$22$$ / 2, -$gap$$24_nodeRect$$1_side$$22$$ / 2, $gap$$24_nodeRect$$1_side$$22$$, $gap$$24_nodeRect$$1_side$$22$$);
  $selectionRect$$1$$.$setFill$($JSCompiler_alias_NULL$$);
  $borderRadius$$8_scale$$47$$ && ($selectionRect$$1$$.$setRx$($borderRadius$$8_scale$$47$$), $selectionRect$$1$$.$setRy$($borderRadius$$8_scale$$47$$));
  $selectionRect$$1$$.$setHoverStroke$(new dvt.$SolidStroke$($hoverColor$$4$$, $JSCompiler_alias_NULL$$, 2), new dvt.$SolidStroke$($selectionColor$$2$$, $JSCompiler_alias_NULL$$, 4));
  $selectionRect$$1$$.$setSelectedStroke$(new dvt.$SolidStroke$($selectionColor$$2$$, $JSCompiler_alias_NULL$$, 4), $JSCompiler_alias_NULL$$);
  $selectionRect$$1$$.$setSelectedHoverStroke$(new dvt.$SolidStroke$($hoverColor$$4$$, $JSCompiler_alias_NULL$$, 2), new dvt.$SolidStroke$($selectionColor$$2$$, $JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$8$$.$addChild$($selectionRect$$1$$);
  $nodeContainer$$8$$.$setSelectionShape$($selectionRect$$1$$);
  $gap$$24_nodeRect$$1_side$$22$$ = new dvt.$Rect$($color$$48_nbox$$58$$.$getCtx$(), -$gap$$24_nodeRect$$1_side$$22$$ / 2, -$gap$$24_nodeRect$$1_side$$22$$ / 2, $gap$$24_nodeRect$$1_side$$22$$, $gap$$24_nodeRect$$1_side$$22$$);
  $borderRadius$$8_scale$$47$$ && ($gap$$24_nodeRect$$1_side$$22$$.$setRx$($borderRadius$$8_scale$$47$$), $gap$$24_nodeRect$$1_side$$22$$.$setRy$($borderRadius$$8_scale$$47$$));
  $color$$48_nbox$$58$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($color$$48_nbox$$58$$, $node$$266$$);
  $gap$$24_nodeRect$$1_side$$22$$.$setSolidFill$($color$$48_nbox$$58$$);
  $nodeContainer$$8$$.$addChild$($gap$$24_nodeRect$$1_side$$22$$)
};
$DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($node$$267$$) {
  return $node$$267$$.__scale * Math.sqrt($node$$267$$.nodeIndices.length) - $node$$267$$.__gap
};
$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($nbox$$59$$, $node$$268$$, $nodeContainer$$9$$, $color$$49_scale$$48$$, $gap$$25_indicatorIcon$$6$$) {
  var $bgRect$$4_indicatorIconColor$$1_retVal$$4$$ = $JSCompiler_alias_FALSE$$, $indicatorColor$$2_markerGap$$1$$ = $nbox$$59$$.$getOptions$().__layout.markerGap, $indicatorMarker$$1_rtl$$27$$ = dvt.$Agent$.$isRightToLeft$($nbox$$59$$.$getCtx$()), $side$$23$$ = $color$$49_scale$$48$$ * Math.sqrt($node$$268$$.nodeIndices.length) - $gap$$25_indicatorIcon$$6$$;
  $color$$49_scale$$48$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($nbox$$59$$, $node$$268$$);
  var $contrastColor$$3$$ = dvt.$ColorUtils$.$getContrastingTextColor$($color$$49_scale$$48$$), $indicatorWidth$$ = $side$$23$$ / 4, $indicatorIconScale$$ = 1, $indicatorX$$1$$ = $indicatorMarker$$1_rtl$$27$$ ? $side$$23$$ / 2 - $indicatorWidth$$ : -$side$$23$$ / 2;
  ($gap$$25_indicatorIcon$$6$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($nbox$$59$$, $node$$268$$)) && ($indicatorIconScale$$ = Math.min($indicatorWidth$$ / ($gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$WIDTH$] + 2 * $indicatorColor$$2_markerGap$$1$$), $side$$23$$ / ($gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$HEIGHT$] + 2 * $indicatorColor$$2_markerGap$$1$$)));
  if($indicatorColor$$2_markerGap$$1$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($nbox$$59$$, $node$$268$$)) {
    $contrastColor$$3$$ = dvt.$ColorUtils$.$getContrastingTextColor$($indicatorColor$$2_markerGap$$1$$), $bgRect$$4_indicatorIconColor$$1_retVal$$4$$ = new dvt.$Rect$($nbox$$59$$.$getCtx$(), $indicatorX$$1$$, -$side$$23$$ / 2, $indicatorWidth$$, $side$$23$$), $bgRect$$4_indicatorIconColor$$1_retVal$$4$$.$setSolidFill$($indicatorColor$$2_markerGap$$1$$), $nodeContainer$$9$$.$addChild$($bgRect$$4_indicatorIconColor$$1_retVal$$4$$), $bgRect$$4_indicatorIconColor$$1_retVal$$4$$ = $JSCompiler_alias_TRUE$$
  }
  $gap$$25_indicatorIcon$$6$$ && ($bgRect$$4_indicatorIconColor$$1_retVal$$4$$ = $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$COLOR$] ? $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$COLOR$] : $contrastColor$$3$$, $indicatorMarker$$1_rtl$$27$$ = new dvt.$SimpleMarker$($nbox$$59$$.$getCtx$(), $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$SHAPE$], dvt.$CSSStyle$.$SKIN_ALTA$, ($indicatorMarker$$1_rtl$$27$$ ? 1 : -1) * ($side$$23$$ - $indicatorWidth$$) / 2, 0, $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$WIDTH$] * 
  $indicatorIconScale$$, $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$HEIGHT$] * $indicatorIconScale$$, $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$BORDER_RADIUS$]), $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$BORDER_WIDTH$] && $indicatorMarker$$1_rtl$$27$$.$setSolidStroke$($gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$BORDER_COLOR$], $JSCompiler_alias_NULL$$, $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$BORDER_WIDTH$]), $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$PATTERN$] && 
  "none" != $gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$PATTERN$] ? $indicatorMarker$$1_rtl$$27$$.$setFill$(new dvt.$PatternFill$($gap$$25_indicatorIcon$$6$$[dvt.$NBoxConstants$.$PATTERN$], $bgRect$$4_indicatorIconColor$$1_retVal$$4$$, $color$$49_scale$$48$$)) : $indicatorMarker$$1_rtl$$27$$.$setSolidFill$($bgRect$$4_indicatorIconColor$$1_retVal$$4$$), $nodeContainer$$9$$.$addChild$($indicatorMarker$$1_rtl$$27$$), $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$59$$, $node$$268$$, $indicatorMarker$$1_rtl$$27$$, 
  dvt.$NBoxConstants$.$INDICATOR_ICON$), $bgRect$$4_indicatorIconColor$$1_retVal$$4$$ = $JSCompiler_alias_TRUE$$);
  return $bgRect$$4_indicatorIconColor$$1_retVal$$4$$
};
$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($fontSize$$7_nbox$$60$$, $node$$269$$, $nodeContainer$$10$$, $scale$$49_side$$24$$, $bIndicator$$1_width$$84$$, $color$$50_contrastColor$$4_gap$$26$$) {
  var $labelGap$$1$$ = $fontSize$$7_nbox$$60$$.$getOptions$().__layout.categoryNodeLabelGap, $countX_rtl$$28$$ = dvt.$Agent$.$isRightToLeft$($fontSize$$7_nbox$$60$$.$getCtx$()), $alphaFade$$1_labelBounds$$12$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($fontSize$$7_nbox$$60$$), $count$$18_highlightedItems$$5$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($fontSize$$7_nbox$$60$$), $label$$64$$ = $DvtNBoxDataUtils$$.$getDisplayable$($fontSize$$7_nbox$$60$$, $node$$269$$, "label");
  if($count$$18_highlightedItems$$5$$) {
    if($count$$18_highlightedItems$$5$$ = $node$$269$$.highlightedCount, 0 == $count$$18_highlightedItems$$5$$) {
      $label$$64$$ && $label$$64$$.$setTextString$("");
      $nodeContainer$$10$$.$setAlpha$($alphaFade$$1_labelBounds$$12$$);
      return
    }
  }else {
    $count$$18_highlightedItems$$5$$ = $node$$269$$.nodeIndices.length
  }
  $scale$$49_side$$24$$ = $scale$$49_side$$24$$ * Math.sqrt($node$$269$$.nodeIndices.length) - $color$$50_contrastColor$$4_gap$$26$$;
  $bIndicator$$1_width$$84$$ = $bIndicator$$1_width$$84$$ ? 0.75 * $scale$$49_side$$24$$ : $scale$$49_side$$24$$;
  $countX_rtl$$28$$ = ($countX_rtl$$28$$ ? -1 : 1) * ($scale$$49_side$$24$$ - $bIndicator$$1_width$$84$$) / 2;
  $color$$50_contrastColor$$4_gap$$26$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($fontSize$$7_nbox$$60$$, $node$$269$$);
  $color$$50_contrastColor$$4_gap$$26$$ = dvt.$ColorUtils$.$getContrastingTextColor$($color$$50_contrastColor$$4_gap$$26$$);
  $alphaFade$$1_labelBounds$$12$$ = new dvt.$Rectangle$(0, 0, $bIndicator$$1_width$$84$$ - 2 * $labelGap$$1$$, $scale$$49_side$$24$$ - 2 * $labelGap$$1$$);
  $label$$64$$ ? $label$$64$$.$setTextString$("" + $count$$18_highlightedItems$$5$$) : ($label$$64$$ = $DvtNBoxRenderer$$.$createText$($fontSize$$7_nbox$$60$$.$getCtx$(), "" + $count$$18_highlightedItems$$5$$, $DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($fontSize$$7_nbox$$60$$), dvt.$OutputText$.$H_ALIGN_CENTER$, dvt.$OutputText$.$V_ALIGN_MIDDLE$), $DvtNBoxDataUtils$$.$setDisplayable$($fontSize$$7_nbox$$60$$, $node$$269$$, $label$$64$$, "label"));
  $fontSize$$7_nbox$$60$$ = $label$$64$$.$getOptimalFontSize$($alphaFade$$1_labelBounds$$12$$);
  $label$$64$$.$setFontSize$($fontSize$$7_nbox$$60$$);
  dvt.$TextUtils$.$fitText$($label$$64$$, $bIndicator$$1_width$$84$$ - 2 * $labelGap$$1$$, $scale$$49_side$$24$$ - 2 * $labelGap$$1$$, $nodeContainer$$10$$) && ($DvtNBoxRenderer$$.$positionText$($label$$64$$, $countX_rtl$$28$$, 0), $label$$64$$.$setSolidFill$($color$$50_contrastColor$$4_gap$$26$$))
};
$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($animationHandler$$31$$, $oldNode$$16_playable$$27$$, $newNode$$13$$) {
  var $oldGlobalMatrix$$2$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16_playable$$27$$), $newGlobalMatrix$$1$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$13$$), $newMatrix$$3$$ = $newNode$$13$$.$getMatrix$(), $parent$$67$$ = $newNode$$13$$.getParent();
  $oldNode$$16_playable$$27$$.$setAlpha$(0);
  $animationHandler$$31$$.$_newNBox$.$addChild$($newNode$$13$$);
  $newNode$$13$$.$setMatrix$($oldGlobalMatrix$$2$$);
  $oldNode$$16_playable$$27$$ = new dvt.$AnimMoveTo$($newNode$$13$$.$getCtx$(), $newNode$$13$$, new dvt.$Point$($newGlobalMatrix$$1$$.$_tx$, $newGlobalMatrix$$1$$.$_ty$), $animationHandler$$31$$.$getAnimationDuration$());
  dvt.$Playable$.$appendOnEnd$($oldNode$$16_playable$$27$$, function() {
    $parent$$67$$.$addChild$($newNode$$13$$);
    $newNode$$13$$.$setMatrix$($newMatrix$$3$$)
  });
  $animationHandler$$31$$.add($oldNode$$16_playable$$27$$, 1)
};
$DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($animationHandler$$32$$, $oldNode$$17$$) {
  var $animationPhase$$2$$ = 1, $fadePlayable_oldNBox$$14_scalePlayable$$ = $animationHandler$$32$$.$_oldNBox$, $newNBox$$12$$ = $animationHandler$$32$$.$_newNBox$;
  $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($fadePlayable_oldNBox$$14_scalePlayable$$, $newNBox$$12$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($fadePlayable_oldNBox$$14_scalePlayable$$, $newNBox$$12$$) && ($animationPhase$$2$$ = 0);
  $fadePlayable_oldNBox$$14_scalePlayable$$ = new dvt.$AnimScaleTo$($newNBox$$12$$.$getCtx$(), $oldNode$$17$$, new dvt.$Point$(0.01, 0.01), $animationHandler$$32$$.$getAnimationDuration$());
  $animationHandler$$32$$.add($fadePlayable_oldNBox$$14_scalePlayable$$, $animationPhase$$2$$);
  $fadePlayable_oldNBox$$14_scalePlayable$$ = new dvt.$AnimFadeOut$($newNBox$$12$$.$getCtx$(), $oldNode$$17$$, $animationHandler$$32$$.$getAnimationDuration$());
  $animationHandler$$32$$.add($fadePlayable_oldNBox$$14_scalePlayable$$, $animationPhase$$2$$);
  $oldNode$$17$$.$setMatrix$($DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$17$$));
  $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$17$$)
};
$DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($animationHandler$$33$$, $newNode$$14$$) {
  var $animationPhase$$3$$ = 1, $oldNBox$$15_scalePlayable$$1$$ = $animationHandler$$33$$.$_oldNBox$, $fadeAnim$$2_newNBox$$13$$ = $animationHandler$$33$$.$_newNBox$;
  $DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($oldNBox$$15_scalePlayable$$1$$, $fadeAnim$$2_newNBox$$13$$) && $DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($oldNBox$$15_scalePlayable$$1$$, $fadeAnim$$2_newNBox$$13$$) && ($animationPhase$$3$$ = 2);
  $newNode$$14$$.$setScaleX$(0.01);
  $newNode$$14$$.$setScaleY$(0.01);
  $oldNBox$$15_scalePlayable$$1$$ = new dvt.$AnimScaleTo$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, new dvt.$Point$(1, 1), $animationHandler$$33$$.$getAnimationDuration$());
  $animationHandler$$33$$.add($oldNBox$$15_scalePlayable$$1$$, $animationPhase$$3$$);
  $fadeAnim$$2_newNBox$$13$$ = new dvt.$CustomAnimation$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, $animationHandler$$33$$.$getAnimationDuration$());
  $fadeAnim$$2_newNBox$$13$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $newNode$$14$$, $newNode$$14$$.$getAlpha$, $newNode$$14$$.$setAlpha$, $newNode$$14$$.$getAlpha$());
  $animationHandler$$33$$.add($fadeAnim$$2_newNBox$$13$$, $animationPhase$$3$$);
  $newNode$$14$$.$setAlpha$(0)
};
$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($oldNBox$$16$$, $newNBox$$14$$) {
  var $i$$523_oldGroupBehavior$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($oldNBox$$16$$), $newGroupBehavior_oldCategory$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$14$$), $oldNodeCount$$1$$ = $DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$16$$), $newCategory_newNodeCount$$1$$ = $DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$14$$), $identical$$1$$ = $JSCompiler_alias_FALSE$$;
  if($i$$523_oldGroupBehavior$$ == $newGroupBehavior_oldCategory$$ && $oldNodeCount$$1$$ == $newCategory_newNodeCount$$1$$) {
    $identical$$1$$ = $JSCompiler_alias_TRUE$$;
    for($i$$523_oldGroupBehavior$$ = 0;$i$$523_oldGroupBehavior$$ < $oldNodeCount$$1$$;$i$$523_oldGroupBehavior$$++) {
      if($newGroupBehavior_oldCategory$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($oldNBox$$16$$, $i$$523_oldGroupBehavior$$)), $newCategory_newNodeCount$$1$$ = $DvtNBoxDataUtils$$.$getNodeGroupId$($DvtNBoxDataUtils$$.$getNode$($newNBox$$14$$, $i$$523_oldGroupBehavior$$)), $newGroupBehavior_oldCategory$$ != $newCategory_newNodeCount$$1$$) {
        $identical$$1$$ = $JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $identical$$1$$
};
$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($oldNBox$$17$$, $newNBox$$15$$) {
  var $oldMaximizedRow$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($oldNBox$$17$$), $oldMaximizedColumn$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($oldNBox$$17$$), $newMaximizedRow$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($newNBox$$15$$), $newMaximizedColumn$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($newNBox$$15$$);
  return $oldMaximizedRow$$ == $newMaximizedRow$$ && $oldMaximizedColumn$$ == $newMaximizedColumn$$
};
$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$61$$, $object$$11$$) {
  $object$$11$$.$setAriaRole$("img");
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$25$$ = $object$$11$$.$getAriaLabel$();
    $desc$$25$$ && $object$$11$$.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$25$$)
  }
};
var $DvtNBoxDrawerRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxDrawerRenderer$$, dvt.$Obj$);
$DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($nbox$$62$$, $data$$80$$, $drawerContainer$$2$$, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$) {
  $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$ = $DvtNBoxDrawerRenderer$$.$getDrawerBounds$($nbox$$62$$, $data$$80$$, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$);
  $data$$80$$.__drawerBounds = $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$;
  $drawerContainer$$2$$.$setTranslate$($availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$.x, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$.y);
  $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$ = new dvt.$KeyboardFocusEffect$($nbox$$62$$.$getCtx$(), $drawerContainer$$2$$, new dvt.$Rectangle$(-1, -1, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$.$w$ + 2, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$.$h$ + 2));
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$62$$, $data$$80$$, $availSpace$$111_drawerBounds_keyboardFocusEffect$$2$$, "focusEffect");
  $DvtNBoxDrawerRenderer$$.$_renderBody$($nbox$$62$$, $data$$80$$, $drawerContainer$$2$$);
  $DvtNBoxDrawerRenderer$$.$_renderHeader$($nbox$$62$$, $data$$80$$, $drawerContainer$$2$$);
  $DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($nbox$$62$$, $data$$80$$, $drawerContainer$$2$$)
};
$DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($categoryLabel_nbox$$63$$, $data$$81_drawerBounds$$1$$, $drawerContainer$$3$$) {
  var $closeHeight_countColor_options$$214$$ = $categoryLabel_nbox$$63$$.$getOptions$(), $drawerButtonGap$$ = $closeHeight_countColor_options$$214$$.__layout.drawerButtonGap, $drawerStartGap$$ = $closeHeight_countColor_options$$214$$.__layout.drawerStartGap, $drawerLabelGap$$ = $closeHeight_countColor_options$$214$$.__layout.drawerLabelGap, $categoryText_drawerCountHGap_labelOffset$$ = $closeHeight_countColor_options$$214$$.__layout.drawerCountHorizontalGap, $countIndicatorHeight_drawerCountVGap$$ = 
  $closeHeight_countColor_options$$214$$.__layout.drawerCountVerticalGap, $drawerHeaderHeight$$ = $closeHeight_countColor_options$$214$$.__layout.drawerHeaderHeight, $countIndicatorWidth_indicatorGap$$ = $closeHeight_countColor_options$$214$$.__layout.nodeIndicatorGap, $countIndicatorSectionWidth_swatchSize$$ = $closeHeight_countColor_options$$214$$.__layout.nodeSwatchSize, $rtl$$29$$ = dvt.$Agent$.$isRightToLeft$($categoryLabel_nbox$$63$$.$getCtx$()), $categoryNode$$4$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($categoryLabel_nbox$$63$$, 
  $data$$81_drawerBounds$$1$$[dvt.$NBoxConstants$.ID]), $countLabel$$1_nodeCount$$9$$ = $categoryNode$$4$$.nodeIndices.length;
  $data$$81_drawerBounds$$1$$ = $data$$81_drawerBounds$$1$$.__drawerBounds;
  var $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $closeHeight_countColor_options$$214$$._resources.close_ena, $closeWidth$$1$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width;
  if($data$$81_drawerBounds$$1$$.$w$ > $closeWidth$$1$$) {
    var $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = $closeHeight_countColor_options$$214$$._resources.close_ovr, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $closeHeight_countColor_options$$214$$._resources.close_dwn, $closeHeight_countColor_options$$214$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = new dvt.$Image$($categoryLabel_nbox$$63$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.src, 
    0, 0, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.width, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new dvt.$Image$($categoryLabel_nbox$$63$$.$getCtx$(), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.src, 0, 0, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.width, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.height), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = 
    new dvt.$Image$($categoryLabel_nbox$$63$$.$getCtx$(), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.src, 0, 0, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.width, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = new dvt.$Button$($categoryLabel_nbox$$63$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, 
    $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $drawerContainer$$3$$.$closeDrawer$, $drawerContainer$$3$$), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $rtl$$29$$ ? Math.min(($data$$81_drawerBounds$$1$$.$w$ - $closeWidth$$1$$) / 2, $drawerButtonGap$$) : Math.max(($data$$81_drawerBounds$$1$$.$w$ - $closeWidth$$1$$) / 2, $data$$81_drawerBounds$$1$$.$w$ - $drawerButtonGap$$ - $closeWidth$$1$$);
    $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$.$setTranslate$($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$, $drawerHeaderHeight$$ / 2 - $closeHeight_countColor_options$$214$$ / 2);
    $drawerContainer$$3$$.$addChild$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$)
  }
  var $closeHeight_countColor_options$$214$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeColor$($categoryLabel_nbox$$63$$, $categoryNode$$4$$), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$ = dvt.$ColorUtils$.$getContrastingTextColor$($closeHeight_countColor_options$$214$$), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = ($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ = $DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($categoryLabel_nbox$$63$$, $categoryNode$$4$$)) ? 
  dvt.$ColorUtils$.$getContrastingTextColor$($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$) : $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$, $indicatorIcon$$7$$ = $DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($categoryLabel_nbox$$63$$, $categoryNode$$4$$), $countLabelSectionWidth_indicatorIconWidth$$3$$ = $countIndicatorSectionWidth_swatchSize$$, $indicatorMarker$$2_scale$$50$$ = 1;
  if($indicatorIcon$$7$$) {
    var $halign$$10_indicatorIconW$$ = $indicatorIcon$$7$$[dvt.$NBoxConstants$.$WIDTH$], $indicatorMarker$$2_scale$$50$$ = $countIndicatorSectionWidth_swatchSize$$ / $indicatorIcon$$7$$[dvt.$NBoxConstants$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$3$$ = $indicatorMarker$$2_scale$$50$$ * $halign$$10_indicatorIconW$$, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$ = $indicatorIcon$$7$$[dvt.$NBoxConstants$.$COLOR$] ? $indicatorIcon$$7$$[dvt.$NBoxConstants$.$COLOR$] : $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$
  }
  var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = $DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($categoryLabel_nbox$$63$$), $halign$$10_indicatorIconW$$ = $rtl$$29$$ ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$, $countLabel$$1_nodeCount$$9$$ = $DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$63$$.$getCtx$(), "" + $countLabel$$1_nodeCount$$9$$, $DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($categoryLabel_nbox$$63$$), $halign$$10_indicatorIconW$$, 
  dvt.$OutputText$.$V_ALIGN_MIDDLE$), $countLabelDims_indicatorX$$2$$ = $countLabel$$1_nodeCount$$9$$.$measureDimensions$(), $countIndicatorHeight_drawerCountVGap$$ = $countLabelDims_indicatorX$$2$$.$h$ + 2 * $countIndicatorHeight_drawerCountVGap$$, $countIndicatorSectionWidth_swatchSize$$ = $indicatorIcon$$7$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ + 2 * $countIndicatorWidth_indicatorGap$$ : $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $countIndicatorSectionWidth_swatchSize$$ : 
  0, $countLabelSectionWidth_indicatorIconWidth$$3$$ = $countLabelDims_indicatorX$$2$$.$w$ + 2 * $categoryText_drawerCountHGap_labelOffset$$, $countIndicatorWidth_indicatorGap$$ = $countIndicatorSectionWidth_swatchSize$$ + $countLabelSectionWidth_indicatorIconWidth$$3$$, $countIndicatorPath_countIndicatorShape$$;
  $data$$81_drawerBounds$$1$$.$w$ - $closeWidth$$1$$ - 2 * $drawerButtonGap$$ - $drawerStartGap$$ > $countIndicatorWidth_indicatorGap$$ && ($countIndicatorPath_countIndicatorShape$$ = dvt.$PathUtils$.$roundedRectangle$(0, 0, $countIndicatorWidth_indicatorGap$$, $countIndicatorHeight_drawerCountVGap$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countIndicatorPath_countIndicatorShape$$ = new dvt.$Path$($categoryLabel_nbox$$63$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($closeHeight_countColor_options$$214$$), $drawerContainer$$3$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$2$$ = $rtl$$29$$ ? $countLabelSectionWidth_indicatorIconWidth$$3$$ : 0, 0 < $countIndicatorSectionWidth_swatchSize$$ && ($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ && 
  ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = dvt.$PathUtils$.$roundedRectangle$($countLabelDims_indicatorX$$2$$, 0, $countIndicatorSectionWidth_swatchSize$$, $countIndicatorHeight_drawerCountVGap$$, $rtl$$29$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $rtl$$29$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$29$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$29$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new dvt.$Path$($categoryLabel_nbox$$63$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$7$$ && ($indicatorMarker$$2_scale$$50$$ = new dvt.$SimpleMarker$($categoryLabel_nbox$$63$$.$getCtx$(), 
  $indicatorIcon$$7$$[dvt.$NBoxConstants$.$SHAPE$], dvt.$CSSStyle$.$SKIN_ALTA$, $countLabelDims_indicatorX$$2$$ + $countIndicatorSectionWidth_swatchSize$$ / 2, $countIndicatorHeight_drawerCountVGap$$ / 2, $indicatorIcon$$7$$[dvt.$NBoxConstants$.$WIDTH$] * $indicatorMarker$$2_scale$$50$$, $indicatorIcon$$7$$[dvt.$NBoxConstants$.$HEIGHT$] * $indicatorMarker$$2_scale$$50$$, $indicatorIcon$$7$$[dvt.$NBoxConstants$.$BORDER_RADIUS$]), $indicatorIcon$$7$$[dvt.$NBoxConstants$.$BORDER_WIDTH$] && $indicatorMarker$$2_scale$$50$$.$setSolidStroke$($indicatorIcon$$7$$[dvt.$NBoxConstants$.$BORDER_COLOR$], 
  $JSCompiler_alias_NULL$$, $indicatorIcon$$7$$[dvt.$NBoxConstants$.$BORDER_WIDTH$]), $indicatorIcon$$7$$[dvt.$NBoxConstants$.$PATTERN$] && "none" != $indicatorIcon$$7$$[dvt.$NBoxConstants$.$PATTERN$] ? $indicatorMarker$$2_scale$$50$$.$setFill$(new dvt.$PatternFill$($indicatorIcon$$7$$[dvt.$NBoxConstants$.$PATTERN$], $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ ? $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$3$$ : 
  $closeHeight_countColor_options$$214$$)) : $indicatorMarker$$2_scale$$50$$.$setSolidFill$($closeEna$$1_closeEnaImg$$1_indicatorIconColor$$2$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$2_scale$$50$$))), $countIndicatorPath_countIndicatorShape$$.$addChild$($countLabel$$1_nodeCount$$9$$), $countLabel$$1_nodeCount$$9$$.$setSolidFill$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$5$$), $DvtNBoxRenderer$$.$positionText$($countLabel$$1_nodeCount$$9$$, $rtl$$29$$ ? 
  $countLabelSectionWidth_indicatorIconWidth$$3$$ - $categoryText_drawerCountHGap_labelOffset$$ : $countIndicatorSectionWidth_swatchSize$$ + $categoryText_drawerCountHGap_labelOffset$$, $countIndicatorHeight_drawerCountVGap$$ / 2));
  $categoryText_drawerCountHGap_labelOffset$$ = $DvtNBoxDataUtils$$.$getDisplayable$($categoryLabel_nbox$$63$$, $categoryNode$$4$$).$getLabel$();
  $categoryLabel_nbox$$63$$ = $DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$63$$.$getCtx$(), $categoryText_drawerCountHGap_labelOffset$$, $DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($categoryLabel_nbox$$63$$), $halign$$10_indicatorIconW$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$);
  $categoryText_drawerCountHGap_labelOffset$$ = 0;
  dvt.$TextUtils$.$fitText$($categoryLabel_nbox$$63$$, $data$$81_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $drawerLabelGap$$ - $countIndicatorWidth_indicatorGap$$ - 2 * $drawerButtonGap$$ - $closeWidth$$1$$, $drawerHeaderHeight$$, $drawerContainer$$3$$) && ($DvtNBoxRenderer$$.$positionText$($categoryLabel_nbox$$63$$, $rtl$$29$$ ? $data$$81_drawerBounds$$1$$.$w$ - $drawerStartGap$$ : $drawerStartGap$$, $drawerHeaderHeight$$ / 2), $categoryText_drawerCountHGap_labelOffset$$ = $categoryLabel_nbox$$63$$.$measureDimensions$().$w$ + 
  $drawerLabelGap$$);
  $countIndicatorPath_countIndicatorShape$$ && $countIndicatorPath_countIndicatorShape$$.$setTranslate$($rtl$$29$$ ? $data$$81_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $countIndicatorWidth_indicatorGap$$ - $categoryText_drawerCountHGap_labelOffset$$ : $drawerStartGap$$ + $categoryText_drawerCountHGap_labelOffset$$, ($drawerHeaderHeight$$ - $countIndicatorHeight_drawerCountVGap$$) / 2)
};
$DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($nbox$$64$$, $data$$82$$, $alphaFade$$2_drawerContainer$$4$$) {
  var $options$$215_rtl$$30$$ = $nbox$$64$$.$getOptions$(), $gridGap$$3$$ = $options$$215_rtl$$30$$.__layout.gridGap, $drawerHeaderHeight$$1_highlightedItems$$6$$ = $options$$215_rtl$$30$$.__layout.drawerHeaderHeight, $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$ = $data$$82$$.__drawerBounds, $options$$215_rtl$$30$$ = dvt.$Agent$.$isRightToLeft$($nbox$$64$$.$getCtx$()), $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$ = $DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($nbox$$64$$), $borderColor$$39_i$$524_nodes$$17$$ = 
  $DvtNBoxStyleUtils$$.$getDrawerBorderColor$($nbox$$64$$), $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$ = dvt.$PathUtils$.$roundedRectangle$(0, 0, $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$w$, $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$h$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$), $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$ = 
  new dvt.$Path$($nbox$$64$$.$getCtx$(), $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$);
  $DvtNBoxRenderer$$.$setFill$($body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$, $DvtNBoxStyleUtils$$.$getDrawerBackground$($nbox$$64$$));
  $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.$setSolidStroke$($borderColor$$39_i$$524_nodes$$17$$);
  $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.$setPixelHinting$();
  $alphaFade$$2_drawerContainer$$4$$.$addChild$($body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$);
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$64$$, $data$$82$$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$, "background");
  $data$$82$$.__childArea = new dvt.$Rectangle$($gridGap$$3$$, $drawerHeaderHeight$$1_highlightedItems$$6$$ + $gridGap$$3$$, Math.max($drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$w$ - 2 * $gridGap$$3$$, 0), Math.max($drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$h$ - $drawerHeaderHeight$$1_highlightedItems$$6$$ - 2 * $gridGap$$3$$, 0));
  $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$ = new dvt.$SimpleScrollableContainer$($nbox$$64$$.$getCtx$(), $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$w$, $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$h$ - $drawerHeaderHeight$$1_highlightedItems$$6$$);
  $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$.$setTranslate$(0, $drawerHeaderHeight$$1_highlightedItems$$6$$);
  $alphaFade$$2_drawerContainer$$4$$.$addChild$($drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$);
  $alphaFade$$2_drawerContainer$$4$$.$setChildContainer$($drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$);
  $alphaFade$$2_drawerContainer$$4$$ = $DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$64$$);
  $drawerHeaderHeight$$1_highlightedItems$$6$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$64$$);
  $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$ = {};
  if($drawerHeaderHeight$$1_highlightedItems$$6$$) {
    for($borderColor$$39_i$$524_nodes$$17$$ = 0;$borderColor$$39_i$$524_nodes$$17$$ < $drawerHeaderHeight$$1_highlightedItems$$6$$.length;$borderColor$$39_i$$524_nodes$$17$$++) {
      $drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$[$drawerHeaderHeight$$1_highlightedItems$$6$$[$borderColor$$39_i$$524_nodes$$17$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  for(var $borderColor$$39_i$$524_nodes$$17$$ = $DvtNBoxDrawerRenderer$$.$calculateNodeOrders$($nbox$$64$$, $data$$82$$), $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$ = $DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($nbox$$64$$, $data$$82$$, $borderColor$$39_i$$524_nodes$$17$$), $hGridSize$$1$$ = $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.indicatorSectionWidth + $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.iconSectionWidth + $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.labelSectionWidth + 
  $gridGap$$3$$, $vGridSize$$1$$ = $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.nodeHeight + $gridGap$$3$$, $container$$155$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$64$$, $data$$82$$).$getChildContainer$(), $n$$22$$ = 0;$n$$22$$ < $borderColor$$39_i$$524_nodes$$17$$.length;$n$$22$$++) {
    var $node$$270$$ = $borderColor$$39_i$$524_nodes$$17$$[$n$$22$$];
    if(0 != $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$COLUMNS$] && 0 != $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$ROWS$]) {
      var $nodeContainer$$11_prevNode$$1$$ = new $DvtNBoxNode$$($nbox$$64$$, $node$$270$$), $gridXOrigin$$1$$ = $data$$82$$.__childArea.x + ($data$$82$$.__childArea.$w$ - $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$COLUMNS$] * $hGridSize$$1$$ + $gridGap$$3$$) / 2, $gridYOrigin$$1$$ = $gridGap$$3$$, $gridColumn$$1$$ = $n$$22$$ % $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$COLUMNS$];
      $options$$215_rtl$$30$$ && ($gridColumn$$1$$ = $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$COLUMNS$] - $gridColumn$$1$$ - 1);
      $nodeContainer$$11_prevNode$$1$$.$setTranslate$($gridXOrigin$$1$$ + $hGridSize$$1$$ * $gridColumn$$1$$, $gridYOrigin$$1$$ + $vGridSize$$1$$ * Math.floor($n$$22$$ / $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$.drawerLayout[dvt.$NBoxConstants$.$COLUMNS$]));
      $nodeContainer$$11_prevNode$$1$$.$render$($container$$155$$.$_container$, $body$$1_bodyPath_borderRadius$$9_nodeLayout$$11$$);
      $drawerHeaderHeight$$1_highlightedItems$$6$$ && !$drawerBounds$$2_highlightedMap$$5_scrollContainer$$2$$[$node$$270$$[dvt.$NBoxConstants$.ID]] && $nodeContainer$$11_prevNode$$1$$.$setAlpha$($alphaFade$$2_drawerContainer$$4$$);
      if($nodeContainer$$11_prevNode$$1$$ = 0 < $n$$22$$ ? $borderColor$$39_i$$524_nodes$$17$$[$n$$22$$ - 1] : $JSCompiler_alias_NULL$$) {
        $node$$270$$.__prev = $nodeContainer$$11_prevNode$$1$$, $nodeContainer$$11_prevNode$$1$$.__next = $node$$270$$
      }
    }
  }
  $container$$155$$.$prepareContentPane$()
};
$DvtNBoxDrawerRenderer$$.$calculateNodeOrders$ = function $$DvtNBoxDrawerRenderer$$$$calculateNodeOrders$$($nbox$$65$$, $data$$83$$) {
  var $orderPasses$$1$$ = ["normal"], $highlightedItems$$7_nodes$$18$$ = $DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$65$$), $highlightedMap$$6$$ = {};
  if($highlightedItems$$7_nodes$$18$$) {
    for(var $categoryNode$$5_i$$525$$ = 0;$categoryNode$$5_i$$525$$ < $highlightedItems$$7_nodes$$18$$.length;$categoryNode$$5_i$$525$$++) {
      $highlightedMap$$6$$[$highlightedItems$$7_nodes$$18$$[$categoryNode$$5_i$$525$$][dvt.$NBoxConstants$.ID]] = $JSCompiler_alias_TRUE$$
    }
  }
  var $nodeCount$$10_selectedItems$$3$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$65$$), $selectedMap$$3$$ = {};
  if($nodeCount$$10_selectedItems$$3$$) {
    for($categoryNode$$5_i$$525$$ = 0;$categoryNode$$5_i$$525$$ < $nodeCount$$10_selectedItems$$3$$.length;$categoryNode$$5_i$$525$$++) {
      $selectedMap$$3$$[$nodeCount$$10_selectedItems$$3$$[$categoryNode$$5_i$$525$$]] = $JSCompiler_alias_TRUE$$
    }
  }
  $highlightedItems$$7_nodes$$18$$ ? $orderPasses$$1$$ = $nodeCount$$10_selectedItems$$3$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $nodeCount$$10_selectedItems$$3$$ && ($orderPasses$$1$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
  for(var $highlightedItems$$7_nodes$$18$$ = [], $categoryNode$$5_i$$525$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$65$$, $data$$83$$[dvt.$NBoxConstants$.ID]), $nodeCount$$10_selectedItems$$3$$ = $categoryNode$$5_i$$525$$.nodeIndices.length, $p$$20$$ = 0;$p$$20$$ < $orderPasses$$1$$.length;$p$$20$$++) {
    for(var $n$$23$$ = 0;$n$$23$$ < $nodeCount$$10_selectedItems$$3$$;$n$$23$$++) {
      var $node$$271$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$65$$, $categoryNode$$5_i$$525$$.nodeIndices[$n$$23$$]);
      ("normal" == $orderPasses$$1$$[$p$$20$$] || "highlighted-selected" == $orderPasses$$1$$[$p$$20$$] && $highlightedMap$$6$$[$node$$271$$[dvt.$NBoxConstants$.ID]] && $selectedMap$$3$$[$node$$271$$[dvt.$NBoxConstants$.ID]] || "highlighted-unselected" == $orderPasses$$1$$[$p$$20$$] && $highlightedMap$$6$$[$node$$271$$[dvt.$NBoxConstants$.ID]] && !$selectedMap$$3$$[$node$$271$$[dvt.$NBoxConstants$.ID]] || "unhighlighted-selected" == $orderPasses$$1$$[$p$$20$$] && !$highlightedMap$$6$$[$node$$271$$[dvt.$NBoxConstants$.ID]] && 
      $selectedMap$$3$$[$node$$271$$[dvt.$NBoxConstants$.ID]] || "unhighlighted-unselected" == $orderPasses$$1$$[$p$$20$$] && !$highlightedMap$$6$$[$node$$271$$[dvt.$NBoxConstants$.ID]] && !$selectedMap$$3$$[$node$$271$$[dvt.$NBoxConstants$.ID]]) && $highlightedItems$$7_nodes$$18$$.push($node$$271$$)
    }
  }
  return $highlightedItems$$7_nodes$$18$$
};
$DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($cellDims$$2_nbox$$66$$, $c$$27_cell$$17_cellIndex$$10_data$$84$$, $availSpace$$112$$) {
  var $gridGap$$4$$ = $cellDims$$2_nbox$$66$$.$getOptions$().__layout.gridGap, $cellLayout$$7$$ = $DvtNBoxCellRenderer$$.$getCellLayout$($cellDims$$2_nbox$$66$$), $drawerBounds$$3_r$$35$$ = new dvt.$Rectangle$($availSpace$$112$$.x + $gridGap$$4$$, $availSpace$$112$$.y + $gridGap$$4$$, Math.max($availSpace$$112$$.$w$ - 2 * $gridGap$$4$$, 0), Math.max($availSpace$$112$$.$h$ - 2 * $gridGap$$4$$, 0));
  $DvtNBoxDataUtils$$.$getGroupBehavior$($cellDims$$2_nbox$$66$$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($c$$27_cell$$17_cellIndex$$10_data$$84$$ = parseInt($c$$27_cell$$17_cellIndex$$10_data$$84$$.id.substring(0, $c$$27_cell$$17_cellIndex$$10_data$$84$$[dvt.$NBoxConstants$.ID].indexOf(":"))), $DvtNBoxDataUtils$$.$isCellMaximized$($cellDims$$2_nbox$$66$$, $c$$27_cell$$17_cellIndex$$10_data$$84$$) && ($c$$27_cell$$17_cellIndex$$10_data$$84$$ = $DvtNBoxDataUtils$$.$getCell$($cellDims$$2_nbox$$66$$, 
  $c$$27_cell$$17_cellIndex$$10_data$$84$$), $drawerBounds$$3_r$$35$$ = $DvtNBoxDataUtils$$.$getRowIndex$($cellDims$$2_nbox$$66$$, $c$$27_cell$$17_cellIndex$$10_data$$84$$[dvt.$NBoxConstants$.$ROW$]), $c$$27_cell$$17_cellIndex$$10_data$$84$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($cellDims$$2_nbox$$66$$, $c$$27_cell$$17_cellIndex$$10_data$$84$$[dvt.$NBoxConstants$.$COLUMN$]), $cellDims$$2_nbox$$66$$ = $DvtNBoxCellRenderer$$.$getCellDimensions$($cellDims$$2_nbox$$66$$, $drawerBounds$$3_r$$35$$, $c$$27_cell$$17_cellIndex$$10_data$$84$$, 
  $availSpace$$112$$), $drawerBounds$$3_r$$35$$ = new dvt.$Rectangle$($cellDims$$2_nbox$$66$$.x + $gridGap$$4$$, $cellDims$$2_nbox$$66$$.y + $gridGap$$4$$ + $cellLayout$$7$$.headerSize, Math.max($cellDims$$2_nbox$$66$$.$w$ - 2 * $gridGap$$4$$, 0), Math.max($cellDims$$2_nbox$$66$$.$h$ - $cellLayout$$7$$.headerSize - 2 * $gridGap$$4$$, 0))));
  return $drawerBounds$$3_r$$35$$
};
$DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
  console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************")
};
$DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($animationHandler$$35$$, $oldDrawer$$5$$) {
  var $fadePlayable$$1_newNBox$$16$$ = $animationHandler$$35$$.$_newNBox$, $drawerBounds$$4_scaleY$$3$$ = $oldDrawer$$5$$.getData().__drawerBounds, $finalMatrix$$1_id$$136_sideLength$$ = $oldDrawer$$5$$.getData()[dvt.$NBoxConstants$.ID], $centerMatrix$$2_group$$32_groupNode$$14$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$1_newNBox$$16$$, $finalMatrix$$1_id$$136_sideLength$$);
  if($centerMatrix$$2_group$$32_groupNode$$14$$) {
    var $finalMatrix$$1_id$$136_sideLength$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix$$2_group$$32_groupNode$$14$$), $playable$$28_scaleX$$3$$ = $finalMatrix$$1_id$$136_sideLength$$ / $drawerBounds$$4_scaleY$$3$$.$w$, $drawerBounds$$4_scaleY$$3$$ = $finalMatrix$$1_id$$136_sideLength$$ / $drawerBounds$$4_scaleY$$3$$.$h$;
    if($centerMatrix$$2_group$$32_groupNode$$14$$ = $DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$1_newNBox$$16$$, $centerMatrix$$2_group$$32_groupNode$$14$$)) {
      $centerMatrix$$2_group$$32_groupNode$$14$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$32_groupNode$$14$$), $finalMatrix$$1_id$$136_sideLength$$ = new dvt.$Matrix$($playable$$28_scaleX$$3$$, 0, 0, $drawerBounds$$4_scaleY$$3$$, $centerMatrix$$2_group$$32_groupNode$$14$$.$_tx$ - $finalMatrix$$1_id$$136_sideLength$$ / 2, $centerMatrix$$2_group$$32_groupNode$$14$$.$_ty$ - $finalMatrix$$1_id$$136_sideLength$$ / 2), $playable$$28_scaleX$$3$$ = new dvt.$CustomAnimation$($fadePlayable$$1_newNBox$$16$$.$getCtx$(), 
      $oldDrawer$$5$$, $animationHandler$$35$$.$getAnimationDuration$()), $playable$$28_scaleX$$3$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $oldDrawer$$5$$, $oldDrawer$$5$$.$getMatrix$, $oldDrawer$$5$$.$setMatrix$, $finalMatrix$$1_id$$136_sideLength$$), $animationHandler$$35$$.add($playable$$28_scaleX$$3$$, 1)
    }
  }
  $fadePlayable$$1_newNBox$$16$$.$_deleteContainer$.$addChild$($oldDrawer$$5$$);
  $fadePlayable$$1_newNBox$$16$$ = new dvt.$AnimFadeOut$($fadePlayable$$1_newNBox$$16$$.$getCtx$(), $oldDrawer$$5$$, $animationHandler$$35$$.$getAnimationDuration$());
  $animationHandler$$35$$.add($fadePlayable$$1_newNBox$$16$$, 1)
};
$DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($animationHandler$$36$$, $newDrawer$$5$$) {
  var $fadePlayable$$2_newNBox$$17$$ = $animationHandler$$36$$.$_newNBox$, $drawerBounds$$5_scaleY$$4$$ = $newDrawer$$5$$.getData().__drawerBounds, $id$$137_initMatrix_sideLength$$1$$ = $newDrawer$$5$$.getData()[dvt.$NBoxConstants$.ID], $centerMatrix$$3_group$$33_groupNode$$15$$ = $DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$2_newNBox$$17$$, $id$$137_initMatrix_sideLength$$1$$);
  if($centerMatrix$$3_group$$33_groupNode$$15$$) {
    var $id$$137_initMatrix_sideLength$$1$$ = $DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix$$3_group$$33_groupNode$$15$$), $playable$$29_scaleX$$4$$ = $id$$137_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$4$$.$w$, $drawerBounds$$5_scaleY$$4$$ = $id$$137_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$4$$.$h$;
    if($centerMatrix$$3_group$$33_groupNode$$15$$ = $DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$2_newNBox$$17$$, $centerMatrix$$3_group$$33_groupNode$$15$$)) {
      $centerMatrix$$3_group$$33_groupNode$$15$$ = $DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$3_group$$33_groupNode$$15$$);
      $id$$137_initMatrix_sideLength$$1$$ = new dvt.$Matrix$($playable$$29_scaleX$$4$$, 0, 0, $drawerBounds$$5_scaleY$$4$$, $centerMatrix$$3_group$$33_groupNode$$15$$.$_tx$ - $id$$137_initMatrix_sideLength$$1$$ / 2, $centerMatrix$$3_group$$33_groupNode$$15$$.$_ty$ - $id$$137_initMatrix_sideLength$$1$$ / 2);
      $playable$$29_scaleX$$4$$ = new dvt.$CustomAnimation$($fadePlayable$$2_newNBox$$17$$.$getCtx$(), $newDrawer$$5$$, $animationHandler$$36$$.$getAnimationDuration$());
      $playable$$29_scaleX$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $newDrawer$$5$$, $newDrawer$$5$$.$getMatrix$, $newDrawer$$5$$.$setMatrix$, $newDrawer$$5$$.$getMatrix$());
      var $parent$$68$$ = $newDrawer$$5$$.getParent();
      $fadePlayable$$2_newNBox$$17$$.$addChild$($newDrawer$$5$$);
      dvt.$Playable$.$appendOnEnd$($playable$$29_scaleX$$4$$, function() {
        $parent$$68$$.$addChild$($newDrawer$$5$$)
      });
      $newDrawer$$5$$.$setMatrix$($id$$137_initMatrix_sideLength$$1$$);
      $animationHandler$$36$$.add($playable$$29_scaleX$$4$$, 1)
    }
  }
  $newDrawer$$5$$.$setAlpha$(0);
  $fadePlayable$$2_newNBox$$17$$ = new dvt.$AnimFadeIn$($fadePlayable$$2_newNBox$$17$$.$getCtx$(), $newDrawer$$5$$, $animationHandler$$36$$.$getAnimationDuration$());
  $animationHandler$$36$$.add($fadePlayable$$2_newNBox$$17$$, 1)
};
$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($nbox$$67_object$$12$$, $data$$85$$, $desc$$26_drawerContainer$$5$$) {
  $nbox$$67_object$$12$$ = dvt.$Agent$.$isTouchDevice$() ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$67_object$$12$$, $data$$85$$, "background") : $desc$$26_drawerContainer$$5$$;
  $nbox$$67_object$$12$$.$setAriaRole$("img");
  dvt.$Agent$.$deferAriaCreation$() || ($desc$$26_drawerContainer$$5$$ = $desc$$26_drawerContainer$$5$$.$getAriaLabel$()) && $nbox$$67_object$$12$$.$setAriaProperty$(dvt.$NBoxConstants$.$LABEL$, $desc$$26_drawerContainer$$5$$)
};
var $DvtNBoxDataUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxDataUtils$$, dvt.$Obj$);
$DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($legend$$29_nbox$$68$$) {
  var $options$$217$$ = $legend$$29_nbox$$68$$.$getOptions$(), $cells$$1_columnMap_hiddenCategories$$11$$ = $options$$217$$[dvt.$NBoxConstants$.$CELLS$], $cellMap_nodeMap$$6_section$$10$$ = {};
  if($cells$$1_columnMap_hiddenCategories$$11$$) {
    for(var $i$$526_rowMap$$ = 0;$i$$526_rowMap$$ < $cells$$1_columnMap_hiddenCategories$$11$$.length;$i$$526_rowMap$$++) {
      var $cell$$18_newCells$$1_nodeObj$$ = $cells$$1_columnMap_hiddenCategories$$11$$[$i$$526_rowMap$$], $grouping_j$$76_row$$5_rowObj$$ = $cell$$18_newCells$$1_nodeObj$$[dvt.$NBoxConstants$.$ROW$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$] || ($cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$] = {});
      var $column$$1_columnObj_item$$38_n$$24$$ = $cell$$18_newCells$$1_nodeObj$$[dvt.$NBoxConstants$.$COLUMN$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$][$column$$1_columnObj_item$$38_n$$24$$] = $cell$$18_newCells$$1_nodeObj$$
    }
  }
  for(var $cell$$18_newCells$$1_nodeObj$$ = [], $i$$526_rowMap$$ = {}, $cells$$1_columnMap_hiddenCategories$$11$$ = {}, $r$$36$$ = 0;$r$$36$$ < $DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$68$$);$r$$36$$++) {
    $grouping_j$$76_row$$5_rowObj$$ = $DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$68$$, $r$$36$$), $i$$526_rowMap$$[$grouping_j$$76_row$$5_rowObj$$[dvt.$NBoxConstants$.ID]] = $r$$36$$
  }
  $options$$217$$.__rowMap = $i$$526_rowMap$$;
  for(var $c$$28$$ = 0;$c$$28$$ < $DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$68$$);$c$$28$$++) {
    $column$$1_columnObj_item$$38_n$$24$$ = $DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$68$$, $c$$28$$), $cells$$1_columnMap_hiddenCategories$$11$$[$column$$1_columnObj_item$$38_n$$24$$[dvt.$NBoxConstants$.ID]] = $c$$28$$
  }
  $options$$217$$.__columnMap = $cells$$1_columnMap_hiddenCategories$$11$$;
  for($r$$36$$ = 0;$r$$36$$ < $DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$68$$);$r$$36$$++) {
    $grouping_j$$76_row$$5_rowObj$$ = $DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$68$$, $r$$36$$);
    $grouping_j$$76_row$$5_rowObj$$ = $grouping_j$$76_row$$5_rowObj$$[dvt.$NBoxConstants$.ID];
    for($c$$28$$ = 0;$c$$28$$ < $DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$68$$);$c$$28$$++) {
      $column$$1_columnObj_item$$38_n$$24$$ = $DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$68$$, $c$$28$$), $column$$1_columnObj_item$$38_n$$24$$ = $column$$1_columnObj_item$$38_n$$24$$[dvt.$NBoxConstants$.ID], $cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$] && $cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$][$column$$1_columnObj_item$$38_n$$24$$] ? $cell$$18_newCells$$1_nodeObj$$.push($cellMap_nodeMap$$6_section$$10$$[$grouping_j$$76_row$$5_rowObj$$][$column$$1_columnObj_item$$38_n$$24$$]) : 
      $cell$$18_newCells$$1_nodeObj$$.push({row:$grouping_j$$76_row$$5_rowObj$$, column:$column$$1_columnObj_item$$38_n$$24$$})
    }
  }
  $options$$217$$[dvt.$NBoxConstants$.$CELLS$] = $cell$$18_newCells$$1_nodeObj$$;
  $cellMap_nodeMap$$6_section$$10$$ = {};
  $grouping_j$$76_row$$5_rowObj$$ = $JSCompiler_alias_FALSE$$;
  for($column$$1_columnObj_item$$38_n$$24$$ = 0;$column$$1_columnObj_item$$38_n$$24$$ < $DvtNBoxDataUtils$$.$getNodeCount$($legend$$29_nbox$$68$$);$column$$1_columnObj_item$$38_n$$24$$++) {
    if($cell$$18_newCells$$1_nodeObj$$ = $DvtNBoxDataUtils$$.$getNode$($legend$$29_nbox$$68$$, $column$$1_columnObj_item$$38_n$$24$$), $cellMap_nodeMap$$6_section$$10$$[$cell$$18_newCells$$1_nodeObj$$[dvt.$NBoxConstants$.ID]] = $column$$1_columnObj_item$$38_n$$24$$, !$grouping_j$$76_row$$5_rowObj$$ && ($cell$$18_newCells$$1_nodeObj$$[dvt.$NBoxConstants$.$GROUP_CATEGORY$] || $cell$$18_newCells$$1_nodeObj$$._groupCategories || $cell$$18_newCells$$1_nodeObj$$._groupLabels)) {
      $grouping_j$$76_row$$5_rowObj$$ = $JSCompiler_alias_TRUE$$
    }
  }
  $options$$217$$.__nodeMap = $cellMap_nodeMap$$6_section$$10$$;
  $options$$217$$.__grouping = "none" != $options$$217$$[dvt.$NBoxConstants$.$GROUP_BEHAVIOR$] ? $grouping_j$$76_row$$5_rowObj$$ : $JSCompiler_alias_FALSE$$;
  $DvtNBoxDataUtils$$.$getGrouping$($legend$$29_nbox$$68$$) && $DvtNBoxDataUtils$$.$getGroupBehavior$($legend$$29_nbox$$68$$) == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = $JSCompiler_alias_NULL$$, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$68$$, dvt.$NBoxConstants$.$MAXIMIZED_ROW$), $options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = $JSCompiler_alias_NULL$$, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$68$$, 
  dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$));
  if($options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] && isNaN($i$$526_rowMap$$[$options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$]]) || $options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] && isNaN($cells$$1_columnMap_hiddenCategories$$11$$[$options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$]])) {
    $options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_ROW$] = $JSCompiler_alias_NULL$$, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$68$$, dvt.$NBoxConstants$.$MAXIMIZED_ROW$), $options$$217$$[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$] = $JSCompiler_alias_NULL$$, $DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$68$$, dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$)
  }
  if(($legend$$29_nbox$$68$$ = $options$$217$$[dvt.$NBoxConstants$.$LEGEND$]) && $legend$$29_nbox$$68$$.sections) {
    var $legendPrecedence$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
    $legend$$29_nbox$$68$$.sections = $legend$$29_nbox$$68$$.sections.slice(0);
    $legend$$29_nbox$$68$$.sections.sort(function($legend$$29_nbox$$68$$, $options$$217$$) {
      return dvt.$ArrayUtils$.$getIndex$($legendPrecedence$$, $legend$$29_nbox$$68$$.type) - dvt.$ArrayUtils$.$getIndex$($legendPrecedence$$, $options$$217$$.type)
    });
    $cells$$1_columnMap_hiddenCategories$$11$$ = $options$$217$$[dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$];
    $legend$$29_nbox$$68$$.hideAndShowBehavior = "on";
    $legend$$29_nbox$$68$$.textStyle = $options$$217$$.styleDefaults.__legendDefaults.itemStyle;
    $legend$$29_nbox$$68$$.layout = {rowGap:2};
    $legend$$29_nbox$$68$$.symbolWidth = 16;
    $legend$$29_nbox$$68$$.symbolHeight = 16;
    for($i$$526_rowMap$$ = 0;$i$$526_rowMap$$ < $legend$$29_nbox$$68$$.sections.length;$i$$526_rowMap$$++) {
      $cellMap_nodeMap$$6_section$$10$$ = $legend$$29_nbox$$68$$.sections[$i$$526_rowMap$$];
      $cellMap_nodeMap$$6_section$$10$$.titleStyle = $options$$217$$.styleDefaults.__legendDefaults.sectionStyle;
      for($grouping_j$$76_row$$5_rowObj$$ = 0;$grouping_j$$76_row$$5_rowObj$$ < $cellMap_nodeMap$$6_section$$10$$.items.length;$grouping_j$$76_row$$5_rowObj$$++) {
        $column$$1_columnObj_item$$38_n$$24$$ = $cellMap_nodeMap$$6_section$$10$$.items[$grouping_j$$76_row$$5_rowObj$$], $column$$1_columnObj_item$$38_n$$24$$.categoryVisibility = -1 != dvt.$ArrayUtils$.$getIndex$($cells$$1_columnMap_hiddenCategories$$11$$, $column$$1_columnObj_item$$38_n$$24$$.categories && 0 < $column$$1_columnObj_item$$38_n$$24$$.categories.length ? $column$$1_columnObj_item$$38_n$$24$$.categories[0] : $column$$1_columnObj_item$$38_n$$24$$.id) ? "hidden" : $JSCompiler_alias_NULL$$, 
        $column$$1_columnObj_item$$38_n$$24$$.indicatorColor && ($column$$1_columnObj_item$$38_n$$24$$.color = $column$$1_columnObj_item$$38_n$$24$$.indicatorColor), $column$$1_columnObj_item$$38_n$$24$$.color || ($column$$1_columnObj_item$$38_n$$24$$.color = $options$$217$$.styleDefaults.__legendDefaults.markerColor), $column$$1_columnObj_item$$38_n$$24$$.shape && ($column$$1_columnObj_item$$38_n$$24$$.markerShape = $column$$1_columnObj_item$$38_n$$24$$.shape)
      }
    }
  }
};
$DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($nbox$$69$$) {
  return $nbox$$69$$.$getOptions$()[dvt.$NBoxConstants$.$COLUMNS$].length
};
$DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($nbox$$70$$) {
  return $nbox$$70$$.$getOptions$()[dvt.$NBoxConstants$.$ROWS$].length
};
$DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($nbox$$71$$, $colValue$$) {
  var $col$$3$$ = $DvtNBoxDataUtils$$.$getColumn$($nbox$$71$$, $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$71$$, $colValue$$));
  return $col$$3$$ && $col$$3$$[dvt.$NBoxConstants$.$LABEL$] ? $col$$3$$[dvt.$NBoxConstants$.$LABEL$] : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($nbox$$72$$, $rowValue$$1$$) {
  var $row$$6$$ = $DvtNBoxDataUtils$$.$getRow$($nbox$$72$$, $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$72$$, $rowValue$$1$$));
  return $row$$6$$ && $row$$6$$[dvt.$NBoxConstants$.$LABEL$] ? $row$$6$$[dvt.$NBoxConstants$.$LABEL$] : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($nbox$$73$$, $cell$$19_rowValue$$2$$, $columnValue$$1$$) {
  return($cell$$19_rowValue$$2$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$73$$, $DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($nbox$$73$$, $cell$$19_rowValue$$2$$, $columnValue$$1$$))) ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$73$$, $cell$$19_rowValue$$2$$) : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($nbox$$74$$, $rowValue$$3$$, $columnValue$$2$$) {
  return $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$74$$, $columnValue$$2$$) + $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$74$$, $rowValue$$3$$) * $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$74$$)
};
$DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($nbox$$75$$, $columnIndex$$2$$) {
  return $nbox$$75$$.$getOptions$()[dvt.$NBoxConstants$.$COLUMNS$][$columnIndex$$2$$]
};
$DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($nbox$$76$$, $rowIndex$$6$$) {
  return $nbox$$76$$.$getOptions$()[dvt.$NBoxConstants$.$ROWS$][$rowIndex$$6$$]
};
$DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($nbox$$77$$) {
  return $nbox$$77$$.$getOptions$()[dvt.$NBoxConstants$.$MAXIMIZED_ROW$]
};
$DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($nbox$$78$$) {
  return $nbox$$78$$.$getOptions$()[dvt.$NBoxConstants$.$MAXIMIZED_COLUMN$]
};
$DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($nbox$$79$$, $row$$7$$) {
  return $nbox$$79$$.$getOptions$().__rowMap[$row$$7$$]
};
$DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($nbox$$80$$, $column$$2$$) {
  return $nbox$$80$$.$getOptions$().__columnMap[$column$$2$$]
};
$DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($nbox$$81$$, $cellIndex$$11$$) {
  return $nbox$$81$$.$getOptions$()[dvt.$NBoxConstants$.$CELLS$][$cellIndex$$11$$]
};
$DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($nbox$$82$$) {
  return $nbox$$82$$.$getOptions$()[dvt.$NBoxConstants$.$NODES$] ? $nbox$$82$$.$getOptions$()[dvt.$NBoxConstants$.$NODES$].length : 0
};
$DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($nbox$$83$$, $nodeIndex$$12$$) {
  return $nbox$$83$$.$getOptions$()[dvt.$NBoxConstants$.$NODES$][$nodeIndex$$12$$]
};
$DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($nbox$$84$$, $id$$138$$) {
  return $nbox$$84$$.$getOptions$().__nodeMap[$id$$138$$]
};
$DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($nbox$$85$$, $node$$272$$) {
  var $nodeRowIndex$$ = $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$85$$, $node$$272$$[dvt.$NBoxConstants$.$ROW$]), $nodeColumnIndex$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$85$$, $node$$272$$[dvt.$NBoxConstants$.$COLUMN$]), $columnCount$$10$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$85$$);
  return $nodeColumnIndex$$ + $nodeRowIndex$$ * $columnCount$$10$$
};
$DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($nbox$$86$$, $node$$273$$) {
  return $node$$273$$[dvt.$NBoxConstants$.$ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIcon$($nbox$$86$$, $node$$273$$[dvt.$NBoxConstants$.$ICON$]) : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($nbox$$87$$, $node$$274$$) {
  return $node$$274$$[dvt.$NBoxConstants$.$INDICATOR_ICON$] ? $DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($nbox$$87$$, $node$$274$$[dvt.$NBoxConstants$.$INDICATOR_ICON$]) : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($nbox$$88$$) {
  return $nbox$$88$$.$getOptions$()[dvt.$NBoxConstants$.$SELECTION$]
};
$DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($nbox$$89$$, $selectedItems$$4$$) {
  $nbox$$89$$.$getOptions$()[dvt.$NBoxConstants$.$SELECTION$] = $selectedItems$$4$$
};
$DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($nbox$$90$$) {
  var $items$$27$$, $categories$$19_n$$25$$ = $nbox$$90$$.$getOptions$()[dvt.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$];
  if($categories$$19_n$$25$$ && 0 < $categories$$19_n$$25$$.length) {
    $items$$27$$ = [];
    for($categories$$19_n$$25$$ = 0;$categories$$19_n$$25$$ < $DvtNBoxDataUtils$$.$getNodeCount$($nbox$$90$$);$categories$$19_n$$25$$++) {
      var $node$$275$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$90$$, $categories$$19_n$$25$$);
      $DvtNBoxDataUtils$$.$isNodeHighlighted$($nbox$$90$$, $node$$275$$) && $items$$27$$.push($node$$275$$)
    }
  }
  return $items$$27$$
};
$DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($nbox$$91$$) {
  return $nbox$$91$$.$getOptions$().__grouping
};
$DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($nbox$$92$$) {
  return $nbox$$92$$.$getOptions$()[dvt.$NBoxConstants$.$GROUP_ATTRIBUTES$]
};
$DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($nbox$$93$$) {
  return $nbox$$93$$.$getOptions$()[dvt.$NBoxConstants$.$GROUP_BEHAVIOR$]
};
$DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($categories$$20_node$$276$$) {
  return $categories$$20_node$$276$$[dvt.$NBoxConstants$.$GROUP_CATEGORY$] ? $categories$$20_node$$276$$[dvt.$NBoxConstants$.$GROUP_CATEGORY$] : ($categories$$20_node$$276$$ = $categories$$20_node$$276$$._groupCategories) && 0 < $categories$$20_node$$276$$.length ? $categories$$20_node$$276$$.join(";") : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($nbox$$94$$, $node$$277$$) {
  if(!isNaN($node$$277$$[dvt.$NBoxConstants$.$X_PERCENTAGE$])) {
    return $node$$277$$[dvt.$NBoxConstants$.$X_PERCENTAGE$]
  }
  var $columnCount$$11$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$94$$);
  return($DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$94$$, $node$$277$$[dvt.$NBoxConstants$.$COLUMN$]) + 0.5) / $columnCount$$11$$
};
$DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($nbox$$95$$, $node$$278$$) {
  if(!isNaN($node$$278$$[dvt.$NBoxConstants$.$Y_PERCENTAGE$])) {
    return $node$$278$$[dvt.$NBoxConstants$.$Y_PERCENTAGE$]
  }
  var $rowCount$$10$$ = $DvtNBoxDataUtils$$.$getRowCount$($nbox$$95$$);
  return($DvtNBoxDataUtils$$.$getRowIndex$($nbox$$95$$, $node$$278$$[dvt.$NBoxConstants$.$ROW$]) + 0.5) / $rowCount$$10$$
};
$DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($nbox$$96$$) {
  return $nbox$$96$$.$getOptions$()[dvt.$NBoxConstants$.$OTHER_THRESHOLD$]
};
$DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($nbox$$97$$) {
  return $nbox$$97$$.$getOptions$()[dvt.$NBoxConstants$.$OTHER_COLOR$]
};
$DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($nbox$$98$$) {
  return $nbox$$98$$.$getOptions$()[dvt.$NBoxConstants$.$DRAWER$]
};
$DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($nbox$$99$$, $id$$139$$) {
  var $cell$$20_groupBehavior$$7$$ = $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$99$$), $groups$$14$$ = $nbox$$99$$.$getOptions$().__groups, $groupId$$25$$ = $id$$139$$;
  $cell$$20_groupBehavior$$7$$ == dvt.$NBoxConstants$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cell$$20_groupBehavior$$7$$ = $id$$139$$.substring(0, $id$$139$$.indexOf(":")), $groupId$$25$$ = $id$$139$$.substring($id$$139$$.indexOf(":") + 1), $groups$$14$$ = $groups$$14$$[$cell$$20_groupBehavior$$7$$]);
  return $groups$$14$$ ? $groups$$14$$[$groupId$$25$$] : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($nbox$$100$$, $categoryNode$$6$$) {
  if($categoryNode$$6$$.__labels) {
    return $categoryNode$$6$$.__labels
  }
  var $node$$279$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$100$$, $categoryNode$$6$$.nodeIndices[0]);
  if($node$$279$$[dvt.$NBoxConstants$.$GROUP_CATEGORY$]) {
    return $categoryNode$$6$$.__labels = [$node$$279$$[dvt.$NBoxConstants$.$GROUP_CATEGORY$]]
  }
  $categoryNode$$6$$.__labels = [];
  if($node$$279$$._groupCategories) {
    for(var $labelMap$$ = $nbox$$100$$.$getOptions$()._groupLabels, $i$$527$$ = 0;$i$$527$$ < $node$$279$$._groupCategories.length;$i$$527$$++) {
      $categoryNode$$6$$.__labels[$i$$527$$] = $labelMap$$ && $labelMap$$[$node$$279$$._groupCategories[$i$$527$$]] ? $labelMap$$[$node$$279$$._groupCategories[$i$$527$$]] : $node$$279$$._groupCategories[$i$$527$$]
    }
  }
  return $categoryNode$$6$$.__labels
};
$DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($displayables$$18_nbox$$101$$, $dataObject$$, $displayable$$54$$, $fullKey_key$$64$$) {
  $displayables$$18_nbox$$101$$ = $displayables$$18_nbox$$101$$.$getDisplayables$();
  $fullKey_key$$64$$ = $fullKey_key$$64$$ ? "__displayable:" + $fullKey_key$$64$$ : "__displayable";
  $dataObject$$[$fullKey_key$$64$$] ? $displayables$$18_nbox$$101$$[$dataObject$$[$fullKey_key$$64$$]] = $displayable$$54$$ : ($dataObject$$[$fullKey_key$$64$$] = $displayables$$18_nbox$$101$$.length, $displayables$$18_nbox$$101$$.push($displayable$$54$$))
};
$DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($displayables$$19_nbox$$102$$, $dataObject$$1_index$$169$$, $key$$65$$) {
  if(!$dataObject$$1_index$$169$$) {
    return $JSCompiler_alias_NULL$$
  }
  $dataObject$$1_index$$169$$ = $dataObject$$1_index$$169$$[$key$$65$$ ? "__displayable:" + $key$$65$$ : "__displayable"];
  $displayables$$19_nbox$$102$$ = $displayables$$19_nbox$$102$$.$getDisplayables$();
  return $dataObject$$1_index$$169$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $displayables$$19_nbox$$102$$[$dataObject$$1_index$$169$$]
};
$DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($nbox$$103$$) {
  return"off" != $nbox$$103$$.$getOptions$().cellMaximize
};
$DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($nbox$$104$$) {
  return"counts" == $nbox$$104$$.$getOptions$().cellContent ? "counts" : "auto"
};
$DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($nbox$$105$$, $cellIndex$$12$$) {
  var $maximizedRow$$8$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$105$$), $maximizedColumn$$8$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$105$$);
  if(!$maximizedRow$$8$$ && !$maximizedColumn$$8$$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $cell$$21_cellColumn$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$105$$, $cellIndex$$12$$), $cellRow$$ = $cell$$21_cellColumn$$[dvt.$NBoxConstants$.$ROW$], $cell$$21_cellColumn$$ = $cell$$21_cellColumn$$[dvt.$NBoxConstants$.$COLUMN$];
  return $maximizedRow$$8$$ && $maximizedColumn$$8$$ ? $maximizedRow$$8$$ != $cellRow$$ || $maximizedColumn$$8$$ != $cell$$21_cellColumn$$ : $maximizedRow$$8$$ != $cellRow$$ && $maximizedColumn$$8$$ != $cell$$21_cellColumn$$
};
$DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($nbox$$106$$, $cellIndex$$13$$) {
  var $maximizedRow$$9$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$106$$), $maximizedColumn$$9$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$106$$), $cell$$22$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$106$$, $cellIndex$$13$$), $cellColumn$$1$$ = $cell$$22$$[dvt.$NBoxConstants$.$COLUMN$];
  return $maximizedRow$$9$$ == $cell$$22$$[dvt.$NBoxConstants$.$ROW$] && $maximizedColumn$$9$$ == $cellColumn$$1$$
};
$DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($nbox$$107$$) {
  return $nbox$$107$$.$getOptions$()._legend
};
$DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($nbox$$108$$, $node$$280$$) {
  var $options$$218$$ = $nbox$$108$$.$getOptions$();
  $options$$218$$[dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$] && !$options$$218$$.__hiddenMap && ($options$$218$$.__hiddenMap = dvt.$ArrayUtils$.$createBooleanMap$($options$$218$$[dvt.$NBoxConstants$.$HIDDEN_CATEGORIES$]));
  return dvt.$ArrayUtils$.$hasAnyMapItem$($options$$218$$.__hiddenMap, $node$$280$$[dvt.$NBoxConstants$.$CATEGORIES$])
};
$DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($nbox$$109$$, $node$$281$$) {
  var $options$$219$$ = $nbox$$109$$.$getOptions$();
  $options$$219$$[dvt.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$] && !$options$$219$$.__highlightedMap && ($options$$219$$.__highlightedMap = dvt.$ArrayUtils$.$createBooleanMap$($options$$219$$[dvt.$NBoxConstants$.$HIGHLIGHTED_CATEGORIES$]));
  return"all" == $options$$219$$[dvt.$NBoxConstants$.$HIGHLIGHT_MATCH$] ? dvt.$ArrayUtils$.$hasAllMapItems$($options$$219$$.__highlightedMap, $node$$281$$[dvt.$NBoxConstants$.$CATEGORIES$]) : dvt.$ArrayUtils$.$hasAnyMapItem$($options$$219$$.__highlightedMap, $node$$281$$[dvt.$NBoxConstants$.$CATEGORIES$])
};
$DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($nbox$$110$$, $node$$282$$) {
  if(!$node$$282$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$ = $DvtNBoxDataUtils$$.$getDrawer$($nbox$$110$$);
  if($cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$ && ($cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$110$$, $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$))) {
    return $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$.$getChildContainer$()
  }
  $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$ = $DvtNBoxDataUtils$$.$getCellIndex$($nbox$$110$$, $node$$282$$.getData());
  return $DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$110$$, $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$) ? ($cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$110$$, $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$), $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$110$$, $cell$$23_cellIndex$$14_drawer$$7_drawerData$$8$$).$getChildContainer$()) : $JSCompiler_alias_NULL$$
};
$DvtNBoxDataUtils$$.$getNodeLabel$ = function $$DvtNBoxDataUtils$$$$getNodeLabel$$($nbox$$111$$, $node$$283$$) {
  if(!$node$$283$$[dvt.$NBoxConstants$.$LABEL$]) {
    return $JSCompiler_alias_NULL$$
  }
  var $halign$$11_label$$65$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$111$$, $node$$283$$, dvt.$NBoxConstants$.$LABEL$);
  if($halign$$11_label$$65$$) {
    return $halign$$11_label$$65$$
  }
  $halign$$11_label$$65$$ = dvt.$Agent$.$isRightToLeft$($nbox$$111$$.$getCtx$()) ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$;
  $halign$$11_label$$65$$ = $DvtNBoxRenderer$$.$createText$($nbox$$111$$.$getCtx$(), $node$$283$$[dvt.$NBoxConstants$.$LABEL$], $DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$111$$), $halign$$11_label$$65$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$);
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$111$$, $node$$283$$, $halign$$11_label$$65$$, dvt.$NBoxConstants$.$LABEL$);
  return $halign$$11_label$$65$$
};
$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$ = function $$DvtNBoxDataUtils$$$$getNodeSecondaryLabel$$($nbox$$112$$, $node$$284$$) {
  if(!$node$$284$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$]) {
    return $JSCompiler_alias_NULL$$
  }
  var $halign$$12_secondaryLabel$$4$$ = $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$112$$, $node$$284$$, dvt.$NBoxConstants$.$SECONDARY_LABEL$);
  if($halign$$12_secondaryLabel$$4$$) {
    return $halign$$12_secondaryLabel$$4$$
  }
  $halign$$12_secondaryLabel$$4$$ = dvt.$Agent$.$isRightToLeft$($nbox$$112$$.$getCtx$()) ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$;
  $halign$$12_secondaryLabel$$4$$ = $DvtNBoxRenderer$$.$createText$($nbox$$112$$.$getCtx$(), $node$$284$$[dvt.$NBoxConstants$.$SECONDARY_LABEL$], $DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$112$$), $halign$$12_secondaryLabel$$4$$, dvt.$OutputText$.$V_ALIGN_MIDDLE$);
  $DvtNBoxDataUtils$$.$setDisplayable$($nbox$$112$$, $node$$284$$, $halign$$12_secondaryLabel$$4$$, dvt.$NBoxConstants$.$SECONDARY_LABEL$);
  return $halign$$12_secondaryLabel$$4$$
};
$DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($nbox$$113$$, $key$$66$$) {
  var $event$$345$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$($key$$66$$, $JSCompiler_alias_NULL$$);
  $nbox$$113$$.$processEvent$($event$$345$$)
};
$DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($nbox$$114$$) {
  var $columnCount$$12_maximizedCellIndex$$2$$ = $JSCompiler_alias_NULL$$, $maximizedRow$$10$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$114$$), $maximizedColumn$$10$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$114$$);
  $maximizedRow$$10$$ && $maximizedColumn$$10$$ && ($columnCount$$12_maximizedCellIndex$$2$$ = $DvtNBoxDataUtils$$.$getColumnCount$($nbox$$114$$), $columnCount$$12_maximizedCellIndex$$2$$ = $DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$114$$, $maximizedColumn$$10$$) + $columnCount$$12_maximizedCellIndex$$2$$ * $DvtNBoxDataUtils$$.$getRowIndex$($nbox$$114$$, $maximizedRow$$10$$));
  return $columnCount$$12_maximizedCellIndex$$2$$
};
$DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($nbox$$115$$, $categoryNode$$7$$) {
  var $i$$528_selected$$34$$ = $JSCompiler_alias_FALSE$$, $nodeIndices$$4_selectedItems$$5$$ = $DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$115$$);
  if($nodeIndices$$4_selectedItems$$5$$) {
    for(var $selectedMap$$4$$ = {}, $i$$528_selected$$34$$ = 0;$i$$528_selected$$34$$ < $nodeIndices$$4_selectedItems$$5$$.length;$i$$528_selected$$34$$++) {
      $selectedMap$$4$$[$nodeIndices$$4_selectedItems$$5$$[$i$$528_selected$$34$$]] = $JSCompiler_alias_TRUE$$
    }
    for(var $nodeIndices$$4_selectedItems$$5$$ = $categoryNode$$7$$.getData().nodeIndices, $i$$528_selected$$34$$ = $JSCompiler_alias_TRUE$$, $j$$77$$ = 0;$j$$77$$ < $nodeIndices$$4_selectedItems$$5$$.length;$j$$77$$++) {
      var $node$$285$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$115$$, $nodeIndices$$4_selectedItems$$5$$[$j$$77$$]);
      if(!$selectedMap$$4$$[$node$$285$$[dvt.$NBoxConstants$.ID]]) {
        $i$$528_selected$$34$$ = $JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $i$$528_selected$$34$$
};
$DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($nbox$$116_nodeCount$$11$$, $object$$13$$, $baseDesc_datatip$$16$$, $selected$$35$$) {
  $baseDesc_datatip$$16$$ = $object$$13$$ instanceof $DvtNBoxCategoryNode$$ || $object$$13$$ instanceof $DvtNBoxDrawer$$ ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "GROUP_NODE"), $baseDesc_datatip$$16$$]) : $baseDesc_datatip$$16$$;
  var $states$$12$$ = [];
  $selected$$35$$ ? $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_SELECTED")) : $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_UNSELECTED"));
  $object$$13$$ instanceof $DvtNBoxCategoryNode$$ ? ($nbox$$116_nodeCount$$11$$ = $object$$13$$.getData().nodeIndices.length, $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")), $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "SIZE"), $nbox$$116_nodeCount$$11$$]))) : $object$$13$$ instanceof $DvtNBoxDrawer$$ && ($nbox$$116_nodeCount$$11$$ = 
  $DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$116_nodeCount$$11$$, $object$$13$$.getData()[dvt.$NBoxConstants$.ID]).nodeIndices.length, $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")), $states$$12$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$NBOX_PREFIX$, "SIZE"), $nbox$$116_nodeCount$$11$$])));
  return dvt.$Displayable$.$generateAriaLabel$($baseDesc_datatip$$16$$, $states$$12$$)
};
$DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($nbox$$117$$, $container$$156$$) {
  var $navigable$$11$$ = $JSCompiler_alias_NULL$$;
  if(0 < $container$$156$$.$getNumChildren$()) {
    var $navigable$$11$$ = $container$$156$$.$getChildAt$(0), $prevData$$;
    do {
      $navigable$$11$$ instanceof $DvtNBoxNode$$ ? $prevData$$ = $navigable$$11$$.getData().__prev : $navigable$$11$$ instanceof $DvtNBoxNodeOverflow$$ && ($prevData$$ = $navigable$$11$$.__prev), $navigable$$11$$ = $prevData$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$117$$, $prevData$$) : $navigable$$11$$
    }while($prevData$$)
  }
  return $navigable$$11$$
};
$DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($nbox$$118$$, $container$$157$$) {
  var $navigable$$12$$ = $JSCompiler_alias_NULL$$, $childCnt$$1_nextData$$ = $container$$157$$.$getNumChildren$();
  if(0 < $childCnt$$1_nextData$$) {
    $navigable$$12$$ = $container$$157$$.$getChildAt$($childCnt$$1_nextData$$ - 1);
    do {
      $navigable$$12$$ = ($childCnt$$1_nextData$$ = $navigable$$12$$ instanceof $DvtNBoxNode$$ ? $navigable$$12$$.getData().__next : $JSCompiler_alias_NULL$$) ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$118$$, $childCnt$$1_nextData$$) : $navigable$$12$$
    }while($childCnt$$1_nextData$$)
  }
  return $navigable$$12$$
};
$DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($nbox$$119$$, $object$$14$$, $bNext$$7_event$$346$$) {
  $bNext$$7_event$$346$$ = $bNext$$7_event$$346$$.keyCode == dvt.$KeyboardEvent$.$RIGHT_ARROW$ || $bNext$$7_event$$346$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  var $nextData$$1$$;
  $object$$14$$ instanceof $DvtNBoxNode$$ ? $nextData$$1$$ = $bNext$$7_event$$346$$ ? $object$$14$$.getData().__next : $object$$14$$.getData().__prev : $object$$14$$ instanceof $DvtNBoxNodeOverflow$$ && ($nextData$$1$$ = $bNext$$7_event$$346$$ ? $JSCompiler_alias_NULL$$ : $object$$14$$.__prev);
  return $nextData$$1$$ ? $DvtNBoxDataUtils$$.$getDisplayable$($nbox$$119$$, $nextData$$1$$) : $object$$14$$
};
var $DvtNBoxStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtNBoxStyleUtils$$, dvt.$Obj$);
$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($animationOnDisplay$$3_nbox$$120$$) {
  if(!$animationOnDisplay$$3_nbox$$120$$.$_animationAllowed$) {
    return"none"
  }
  $animationOnDisplay$$3_nbox$$120$$ = $animationOnDisplay$$3_nbox$$120$$.$getOptions$()[dvt.$NBoxConstants$.$ANIMATION_ON_DISPLAY$];
  "auto" == $animationOnDisplay$$3_nbox$$120$$ && ($animationOnDisplay$$3_nbox$$120$$ = dvt.$BlackBoxAnimationHandler$.$ALPHA_FADE$);
  return $animationOnDisplay$$3_nbox$$120$$
};
$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($nbox$$121$$) {
  return!$nbox$$121$$.$_animationAllowed$ ? "none" : $nbox$$121$$.$getOptions$()[dvt.$NBoxConstants$.$ANIMATION_ON_DATA_CHANGE$]
};
$DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($nbox$$122$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($nbox$$122$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$ANIMATION_DURATION$]) / 1E3
};
$DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($nbox$$123$$, $columnIndex$$4$$) {
  var $defaults$$ = $nbox$$123$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$COLUMN_LABEL_STYLE$], $column$$3$$ = $DvtNBoxDataUtils$$.$getColumn$($nbox$$123$$, $columnIndex$$4$$);
  return $column$$3$$[dvt.$NBoxConstants$.$LABEL_STYLE$] ? dvt.$JsonUtils$.$merge$(new dvt.$CSSStyle$($column$$3$$[dvt.$NBoxConstants$.$LABEL_STYLE$]), $defaults$$) : $defaults$$
};
$DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($nbox$$124$$, $rowIndex$$8$$) {
  var $defaults$$1$$ = $nbox$$124$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$ROW_LABEL_STYLE$], $row$$8$$ = $DvtNBoxDataUtils$$.$getRow$($nbox$$124$$, $rowIndex$$8$$);
  return $row$$8$$[dvt.$NBoxConstants$.$LABEL_STYLE$] ? dvt.$JsonUtils$.$merge$(new dvt.$CSSStyle$($row$$8$$[dvt.$NBoxConstants$.$LABEL_STYLE$]), $defaults$$1$$) : $defaults$$1$$
};
$DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($nbox$$125$$, $cellIndex$$15$$) {
  var $defaults$$2_options$$222$$ = $nbox$$125$$.$getOptions$(), $styleKey$$ = dvt.$NBoxConstants$.$STYLE$, $cell$$24_maximizedRow$$11$$ = $DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$125$$), $maximizedColumn$$11$$ = $DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$125$$);
  if($DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$125$$, $cellIndex$$15$$)) {
    $styleKey$$ = "minimizedStyle"
  }else {
    if(($cell$$24_maximizedRow$$11$$ || $maximizedColumn$$11$$) && !$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$125$$, $cellIndex$$15$$)) {
      $styleKey$$ = "maximizedStyle"
    }
  }
  $defaults$$2_options$$222$$ = $defaults$$2_options$$222$$[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$][$styleKey$$];
  $cell$$24_maximizedRow$$11$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$125$$, $cellIndex$$15$$);
  return $cell$$24_maximizedRow$$11$$[$styleKey$$] ? dvt.$JsonUtils$.$merge$(new dvt.$CSSStyle$($cell$$24_maximizedRow$$11$$[$styleKey$$]), $defaults$$2_options$$222$$) : $defaults$$2_options$$222$$
};
$DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($nbox$$126$$, $cellIndex$$16$$) {
  var $defaults$$3$$ = $nbox$$126$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$][dvt.$NBoxConstants$.$LABEL_STYLE$], $cell$$25$$ = $DvtNBoxDataUtils$$.$getCell$($nbox$$126$$, $cellIndex$$16$$);
  return $cell$$25$$[dvt.$NBoxConstants$.$LABEL_STYLE$] ? dvt.$JsonUtils$.$merge$(new dvt.$CSSStyle$($cell$$25$$[dvt.$NBoxConstants$.$LABEL_STYLE$]), $defaults$$3$$) : $defaults$$3$$
};
$DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($nbox$$127$$, $cell$$26$$) {
  return $cell$$26$$[dvt.$NBoxConstants$.$SHOW_COUNT$] ? $cell$$26$$[dvt.$NBoxConstants$.$SHOW_COUNT$] : $nbox$$127$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$][dvt.$NBoxConstants$.$SHOW_COUNT$]
};
$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($nbox$$128$$) {
  return $nbox$$128$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$].countLabelStyle
};
$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($nbox$$129$$) {
  return $nbox$$129$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$].bodyCountLabelStyle
};
$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($nbox$$130$$) {
  return $nbox$$130$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$].dropTargetStyle
};
$DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($nbox$$131$$) {
  return $nbox$$131$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$LABEL_STYLE$]
};
$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($nbox$$132$$) {
  return $nbox$$132$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$SECONDARY_LABEL_STYLE$]
};
$DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($nbox$$133$$, $node$$288$$) {
  return $node$$288$$[dvt.$NBoxConstants$.$COLOR$] ? $node$$288$$[dvt.$NBoxConstants$.$COLOR$] : $nbox$$133$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$COLOR$]
};
$DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($nbox$$134$$, $node$$289$$) {
  var $color$$51$$ = $node$$289$$[dvt.$NBoxConstants$.$BORDER_COLOR$] ? $node$$289$$[dvt.$NBoxConstants$.$BORDER_COLOR$] : $nbox$$134$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$BORDER_COLOR$];
  return $color$$51$$ ? $color$$51$$ : $JSCompiler_alias_NULL$$
};
$DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($nbox$$135$$, $node$$290$$) {
  var $width$$85$$ = $node$$290$$[dvt.$NBoxConstants$.$BORDER_WIDTH$] ? $node$$290$$[dvt.$NBoxConstants$.$BORDER_WIDTH$] : $nbox$$135$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$BORDER_WIDTH$];
  return $width$$85$$ ? $width$$85$$ : $JSCompiler_alias_NULL$$
};
$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($nbox$$136$$, $node$$291$$) {
  return $node$$291$$[dvt.$NBoxConstants$.$INDICATOR_COLOR$] ? $node$$291$$[dvt.$NBoxConstants$.$INDICATOR_COLOR$] : $nbox$$136$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_COLOR$]
};
$DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($nbox$$137$$, $icon$$44$$) {
  return dvt.$JsonUtils$.$merge$($icon$$44$$, $nbox$$137$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$ICON_DEFAULTS$])
};
$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($nbox$$138$$, $indicatorIcon$$8$$) {
  return dvt.$JsonUtils$.$merge$($indicatorIcon$$8$$, $nbox$$138$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$])
};
$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($nbox$$139$$) {
  return $nbox$$139$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$].alphaFade
};
$DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($nbox$$140$$) {
  return $nbox$$140$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__scrollbar
};
$DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($nbox$$141$$, $categoryNode$$8$$) {
  if("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$141$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$141$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$141$$).indexOf("color")) {
    return $nbox$$141$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$COLOR$]
  }
  if($categoryNode$$8$$.otherNode) {
    return $DvtNBoxDataUtils$$.$getOtherColor$($nbox$$141$$)
  }
  var $nodeIndices$$5$$ = $categoryNode$$8$$.nodeIndices, $color$$52$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$141$$, $nodeIndices$$5$$[0])[dvt.$NBoxConstants$.$COLOR$];
  if(!$color$$52$$) {
    return $nbox$$141$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$COLOR$]
  }
  for(var $i$$529$$ = 1;$i$$529$$ < $nodeIndices$$5$$.length;$i$$529$$++) {
    var $node$$292$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$141$$, $nodeIndices$$5$$[$i$$529$$]);
    if($color$$52$$ != $node$$292$$[dvt.$NBoxConstants$.$COLOR$]) {
      return $nbox$$141$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$COLOR$]
    }
  }
  return $color$$52$$
};
$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($nbox$$142$$, $categoryNode$$9$$) {
  if("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$142$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$142$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$142$$).indexOf("indicatorColor")) {
    return $JSCompiler_alias_NULL$$
  }
  var $nodeIndices$$6$$ = $categoryNode$$9$$.nodeIndices, $color$$53$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$142$$, $nodeIndices$$6$$[0])[dvt.$NBoxConstants$.$INDICATOR_COLOR$];
  if(!$color$$53$$) {
    return $nbox$$142$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_COLOR$]
  }
  for(var $i$$530$$ = 1;$i$$530$$ < $nodeIndices$$6$$.length;$i$$530$$++) {
    var $node$$293$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$142$$, $nodeIndices$$6$$[$i$$530$$]);
    if($color$$53$$ != $node$$293$$[dvt.$NBoxConstants$.$INDICATOR_COLOR$]) {
      return $nbox$$142$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_COLOR$]
    }
  }
  return $color$$53$$
};
$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($nbox$$143$$, $categoryNode$$10$$) {
  if("none" == $DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$143$$) || $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$) && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconShape") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconColor") && -1 == $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconPattern")) {
    return $JSCompiler_alias_NULL$$
  }
  var $indicatorIcon$$9$$ = {}, $nodeIndices$$7$$ = $categoryNode$$10$$.nodeIndices, $baseIcon_pattern$$7$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$143$$, $nodeIndices$$7$$[0])[dvt.$NBoxConstants$.$INDICATOR_ICON$];
  if(!$baseIcon_pattern$$7$$) {
    return $JSCompiler_alias_NULL$$
  }
  $baseIcon_pattern$$7$$.width && ($indicatorIcon$$9$$.width = $baseIcon_pattern$$7$$.width);
  $baseIcon_pattern$$7$$.height && ($indicatorIcon$$9$$.height = $baseIcon_pattern$$7$$.height);
  $baseIcon_pattern$$7$$.borderWidth && ($indicatorIcon$$9$$.borderWidth = $baseIcon_pattern$$7$$.borderWidth);
  $baseIcon_pattern$$7$$.borderStyle && ($indicatorIcon$$9$$.borderStyle = $baseIcon_pattern$$7$$.borderStyle);
  $baseIcon_pattern$$7$$.borderColor && ($indicatorIcon$$9$$.borderColor = $baseIcon_pattern$$7$$.borderColor);
  $baseIcon_pattern$$7$$.borderRadius && ($indicatorIcon$$9$$.borderRadius = $baseIcon_pattern$$7$$.borderRadius);
  var $match$$4$$ = $JSCompiler_alias_TRUE$$;
  if(!$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconShape")) {
    for(var $color$$54_k$$4_shape$$63$$ = $baseIcon_pattern$$7$$[dvt.$NBoxConstants$.$SHAPE$], $i$$531_j$$78$$ = 1;$i$$531_j$$78$$ < $nodeIndices$$7$$.length;$i$$531_j$$78$$++) {
      var $nodeIcon$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$143$$, $nodeIndices$$7$$[$i$$531_j$$78$$])[dvt.$NBoxConstants$.$INDICATOR_ICON$];
      $nodeIcon$$ && $color$$54_k$$4_shape$$63$$ != $nodeIcon$$[dvt.$NBoxConstants$.$SHAPE$] && ($match$$4$$ = $JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[dvt.$NBoxConstants$.$SHAPE$] = $match$$4$$ ? $color$$54_k$$4_shape$$63$$ : $nbox$$143$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][dvt.$NBoxConstants$.$SHAPE$]
  }
  $match$$4$$ = $JSCompiler_alias_TRUE$$;
  if(!$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconColor")) {
    $color$$54_k$$4_shape$$63$$ = $baseIcon_pattern$$7$$[dvt.$NBoxConstants$.$COLOR$];
    for($i$$531_j$$78$$ = 1;$i$$531_j$$78$$ < $nodeIndices$$7$$.length;$i$$531_j$$78$$++) {
      ($nodeIcon$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$143$$, $nodeIndices$$7$$[$i$$531_j$$78$$])[dvt.$NBoxConstants$.$INDICATOR_ICON$]) && $color$$54_k$$4_shape$$63$$ != $nodeIcon$$[dvt.$NBoxConstants$.$COLOR$] && ($match$$4$$ = $JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[dvt.$NBoxConstants$.$COLOR$] = $match$$4$$ ? $color$$54_k$$4_shape$$63$$ : $nbox$$143$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][dvt.$NBoxConstants$.$COLOR$]
  }
  $match$$4$$ = $JSCompiler_alias_TRUE$$;
  if(!$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$) || -1 != $DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$143$$).indexOf("indicatorIconPattern")) {
    $baseIcon_pattern$$7$$ = $baseIcon_pattern$$7$$[dvt.$NBoxConstants$.$PATTERN$];
    for($color$$54_k$$4_shape$$63$$ = 1;$color$$54_k$$4_shape$$63$$ < $nodeIndices$$7$$.length;$color$$54_k$$4_shape$$63$$++) {
      ($nodeIcon$$ = $DvtNBoxDataUtils$$.$getNode$($nbox$$143$$, $nodeIndices$$7$$[$color$$54_k$$4_shape$$63$$])[dvt.$NBoxConstants$.$INDICATOR_ICON$]) && $baseIcon_pattern$$7$$ != $nodeIcon$$[dvt.$NBoxConstants$.$PATTERN$] && ($match$$4$$ = $JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[dvt.$NBoxConstants$.$PATTERN$] = $match$$4$$ ? $baseIcon_pattern$$7$$ : $nbox$$143$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$][dvt.$NBoxConstants$.$PATTERN$]
  }
  return dvt.$JsonUtils$.$merge$($indicatorIcon$$9$$, $nbox$$143$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$INDICATOR_ICON_DEFAULTS$])
};
$DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($nbox$$144$$) {
  return $nbox$$144$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.background
};
$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($nbox$$145$$) {
  return $nbox$$145$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground
};
$DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($nbox$$146$$) {
  return $nbox$$146$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[dvt.$NBoxConstants$.$BORDER_COLOR$]
};
$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($nbox$$147$$) {
  return $nbox$$147$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[dvt.$NBoxConstants$.$BORDER_RADIUS$]
};
$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($nbox$$148$$) {
  return $nbox$$148$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults[dvt.$NBoxConstants$.$LABEL_STYLE$]
};
$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($nbox$$149$$) {
  return $nbox$$149$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle
};
$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($nbox$$150$$) {
  return $nbox$$150$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius
};
$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($nbox$$151$$) {
  return $nbox$$151$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle
};
$DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($nbox$$152$$) {
  return $nbox$$152$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$][dvt.$NBoxConstants$.$BORDER_RADIUS$]
};
$DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($nbox$$153$$) {
  return $nbox$$153$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$].hoverColor
};
$DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($nbox$$154$$) {
  return $nbox$$154$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$NODE_DEFAULTS$].selectionColor
};
$DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($nbox$$155$$, $data$$86$$) {
  var $halign$$13$$ = $data$$86$$[dvt.$NBoxConstants$.$LABEL_HALIGN$];
  $halign$$13$$ || ($halign$$13$$ = $nbox$$155$$.$getOptions$()[dvt.$NBoxConstants$.$STYLE_DEFAULTS$][dvt.$NBoxConstants$.$CELL_DEFAULTS$][dvt.$NBoxConstants$.$LABEL_HALIGN$]);
  var $rtl$$33$$ = dvt.$Agent$.$isRightToLeft$($nbox$$155$$.$getCtx$());
  return"end" == $halign$$13$$ ? $rtl$$33$$ ? dvt.$OutputText$.$H_ALIGN_LEFT$ : dvt.$OutputText$.$H_ALIGN_RIGHT$ : "center" == $halign$$13$$ ? dvt.$OutputText$.$H_ALIGN_CENTER$ : $rtl$$33$$ ? dvt.$OutputText$.$H_ALIGN_RIGHT$ : dvt.$OutputText$.$H_ALIGN_LEFT$
};

  return dvt;
});
