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

(function($dvt$$5$$) {
  function $DvtOverviewEventManager$$($dvt$$5$$) {
    this.Init($dvt$$5$$.$getCtx$(), $dvt$$5$$.$processEvent$, $dvt$$5$$);
    this.$_overview$ = $dvt$$5$$
  }
  function $DvtOverviewParser$$($dvt$$5$$) {
    this.Init($dvt$$5$$)
  }
  $dvt$$5$$.$OverviewUtils$ = {};
  $dvt$$5$$.$OverviewUtils$.$supportsTouch$ = function $$dvt$$5$$$$OverviewUtils$$$supportsTouch$$() {
    return $dvt$$5$$.$Agent$.$isTouchDevice$()
  };
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$OverviewUtils$, $dvt$$5$$.$Obj$);
  $dvt$$5$$.$OverviewUtils$.$getDatePosition$ = function $$dvt$$5$$$$OverviewUtils$$$getDatePosition$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$86$$) {
    $DvtOverviewParser$$ = ($DvtOverviewParser$$ - $dvt$$5$$) * $width$$86$$;
    $dvt$$5$$ = $DvtOverviewEventManager$$ - $dvt$$5$$;
    return 0 == $DvtOverviewParser$$ || 0 == $dvt$$5$$ ? 0 : $DvtOverviewParser$$ / $dvt$$5$$
  };
  $dvt$$5$$.$OverviewUtils$.$getPositionDate$ = function $$dvt$$5$$$$OverviewUtils$$$getPositionDate$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $width$$87$$) {
    $DvtOverviewEventManager$$ = $DvtOverviewParser$$ * ($DvtOverviewEventManager$$ - $dvt$$5$$);
    return 0 == $DvtOverviewEventManager$$ || 0 == $width$$87$$ ? $dvt$$5$$ : $DvtOverviewEventManager$$ / $width$$87$$ + $dvt$$5$$
  };
  $dvt$$5$$.$Overview$ = function $$dvt$$5$$$$Overview$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.Init($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$)
  };
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$Overview$, $dvt$$5$$.$Container$);
  $dvt$$5$$.$Overview$.$MIN_WINDOW_SIZE$ = 10;
  $dvt$$5$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$ = 40;
  $dvt$$5$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$ = 20;
  $dvt$$5$$.$Overview$.$HANDLE_PADDING_SIZE$ = 20;
  $dvt$$5$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$ = 5;
  $dvt$$5$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ = 1;
  $dvt$$5$$.$Overview$.prototype.Init = function $$dvt$$5$$$$Overview$$$Init$($DvtOverviewParser$$, $callback$$94$$, $callbackObj$$60$$) {
    $dvt$$5$$.$Overview$.$superclass$.Init.call(this, $DvtOverviewParser$$);
    this.$_callback$ = $callback$$94$$;
    this.$_callbackObj$ = $callbackObj$$60$$;
    this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
    if(this.$_callback$ != $JSCompiler_alias_NULL$$ || this.$_callbackObj$ != $JSCompiler_alias_NULL$$) {
      this.$EventManager$ = new $DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), $dvt$$5$$.$OverviewUtils$.$supportsTouch$() ? (this.$addEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHSTART$, this.$HandleTouchStart$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHMOVE$, this.$HandleTouchMove$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHEND$, this.$HandleTouchEnd$, $JSCompiler_alias_FALSE$$, this), 
      this.$addEvtListener$($dvt$$5$$.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$($dvt$$5$$.$MouseEvent$.$MOUSEOVER$, this.$HandleShapeMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$MouseEvent$.$MOUSEOUT$, this.$HandleShapeMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$KeyboardEvent$.$KEYDOWN$, 
      this.$HandleKeyDown$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$($dvt$$5$$.$KeyboardEvent$.$KEYUP$, this.$HandleKeyUp$, $JSCompiler_alias_FALSE$$, this))
    }
    this.$_initPos$ = 0
  };
  $dvt$$5$$.$Overview$.prototype.$setViewportRange$ = function $$dvt$$5$$$$Overview$$$$setViewportRange$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ == $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$ = this.$Width$);
    $dvt$$5$$ = this.$getDatePosition$($dvt$$5$$);
    var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($DvtOverviewEventManager$$);
    $dvt$$5$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > this.$getMaximumPosition$() || ($DvtOverviewEventManager$$ = Math.max($slidingWindow_viewportEnd$$ - $dvt$$5$$, this.$getMinimumWindowSize$()), 0 < $DvtOverviewEventManager$$ && (0 <= $dvt$$5$$ && $slidingWindow_viewportEnd$$ <= $DvtOverviewParser$$) && ($slidingWindow_viewportEnd$$ = this.$getSlidingWindow$(), this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $DvtOverviewParser$$ - ($dvt$$5$$ + 
    $DvtOverviewEventManager$$)) : this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $dvt$$5$$), this.$setSlidingWindowSize$($slidingWindow_viewportEnd$$, $DvtOverviewEventManager$$), this.$ScrollTimeAxis$()))
  };
  $dvt$$5$$.$Overview$.prototype.$isFeatureOff$ = function $$dvt$$5$$$$Overview$$$$isFeatureOff$$() {
    return this.$_featuresOff$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_FALSE$$ : -1 != $dvt$$5$$.$ArrayUtils$.$getIndex$(this.$_featuresOff$, "zoom")
  };
  $dvt$$5$$.$Overview$.prototype.$isAnimationOnClick$ = function $$dvt$$5$$$$Overview$$$$isAnimationOnClick$$() {
    return"off" !== this.$_animationOnClick$
  };
  $dvt$$5$$.$Overview$.prototype.$render$ = function $$dvt$$5$$$$Overview$$$$render$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$75$$) {
    if($DvtOverviewEventManager$$ == $JSCompiler_alias_NULL$$) {
      var $start$$27$$ = this.$_start$, $end$$18$$ = this.$_end$, $slidingWindow$$1$$ = this.$getSlidingWindow$(), $slidingWindowPos$$ = this.$getSlidingWindowPos$($slidingWindow$$1$$);
      $slidingWindow$$1$$ != $JSCompiler_alias_NULL$$ && 0 != $slidingWindowPos$$ && (this.$_renderStart$ = $dvt$$5$$.$OverviewUtils$.$getPositionDate$($start$$27$$, $end$$18$$, $slidingWindowPos$$, this.$Width$));
      this.$removeChildren$()
    }
    $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && $height$$75$$ != $JSCompiler_alias_NULL$$ && (this.$Width$ = $DvtOverviewParser$$, this.$Height$ = $height$$75$$);
    $DvtOverviewEventManager$$ && ($DvtOverviewEventManager$$ = this.$Parse$($DvtOverviewEventManager$$), this.$_applyParsedProperties$($DvtOverviewEventManager$$));
    $DvtOverviewEventManager$$ = this.$_callback$ != $JSCompiler_alias_NULL$$ || this.$_callbackObj$ != $JSCompiler_alias_NULL$$;
    this.$createBackground$($DvtOverviewParser$$, $height$$75$$);
    $DvtOverviewEventManager$$ && this.$createSlidingWindow$($DvtOverviewParser$$, $height$$75$$);
    this.$updateTimeAxis$($DvtOverviewParser$$, $height$$75$$);
    this.$parseFilledTimeRangesXML$($DvtOverviewParser$$, $height$$75$$);
    this.$updateCurrentTime$($DvtOverviewParser$$, $height$$75$$);
    this.$parseDataXML$($DvtOverviewParser$$, $height$$75$$);
    $DvtOverviewEventManager$$ && (this.$createBorderAroundSlidingWindow$($DvtOverviewParser$$, $height$$75$$), this.$isFlashEnvironment$() && (this.$_resizeArrow$ = this.$createResizeArrow$()), this.$updateSlidingWindow$());
    this.$_initialFocusTime$ != $JSCompiler_alias_NULL$$ && (this.$_initPos$ = Math.max(0, $dvt$$5$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
    0 < this.$_initPos$ && this.$longScrollToPos$(this.$_initPos$)
  };
  $dvt$$5$$.$Overview$.prototype.$getParser$ = function $$dvt$$5$$$$Overview$$$$getParser$$() {
    return new $DvtOverviewParser$$(this)
  };
  $dvt$$5$$.$Overview$.prototype.$Parse$ = function $$dvt$$5$$$$Overview$$$$Parse$$($dvt$$5$$) {
    return this.$getParser$($dvt$$5$$).parse($dvt$$5$$)
  };
  $dvt$$5$$.$Overview$.prototype.$_applyParsedProperties$ = function $$dvt$$5$$$$Overview$$$$_applyParsedProperties$$($dvt$$5$$) {
    this.$_start$ = $dvt$$5$$.start;
    this.$_end$ = $dvt$$5$$.end;
    this.$_width$ = $dvt$$5$$.width;
    this.$_renderStart$ = $dvt$$5$$.$renderStart$;
    this.$_currentTime$ = $dvt$$5$$.currentTime;
    this.$_initialFocusTime$ = $dvt$$5$$.$initialFocusTime$;
    this.$_animationOnClick$ = $dvt$$5$$.$animationOnClick$;
    this.$_leftMargin$ = Math.max(0, $dvt$$5$$.$leftMargin$);
    this.$_rightMargin$ = Math.max(0, $dvt$$5$$.$rightMargin$);
    isNaN(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
    isNaN(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
    this.$_orientation$ = $dvt$$5$$.orientation;
    this.$_overviewPosition$ = $dvt$$5$$.$overviewPosition$;
    this.$_isRtl$ = $dvt$$5$$.$isRtl$;
    $dvt$$5$$.$featuresOff$ != $JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $dvt$$5$$.$featuresOff$.split(" "));
    $dvt$$5$$.$minimumWindowSize$ != $JSCompiler_alias_NULL$$ && 0 < $dvt$$5$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $dvt$$5$$.$minimumWindowSize$);
    this.$_borderStyles$ = $dvt$$5$$.$borderStyles$;
    this.$_timeAxisInfo$ = $dvt$$5$$.$timeAxisInfo$;
    $dvt$$5$$.$timeAxisInfo$ != $JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
    this.$_formattedTimeRanges$ = $dvt$$5$$.$formattedTimeRanges$;
    this.$_borderTopStyle$ = $dvt$$5$$.borderTopStyle;
    this.$_borderTopColor$ = $dvt$$5$$.borderTopColor;
    this.$_windowBackgroundColor$ = $dvt$$5$$.$windowBackgroundColor$;
    this.$_windowBackgroundAlpha$ = $dvt$$5$$.$windowBackgroundAlpha$;
    this.$_windowBorderTopStyle$ = $dvt$$5$$.$windowBorderTopStyle$;
    this.$_windowBorderRightStyle$ = $dvt$$5$$.$windowBorderRightStyle$;
    this.$_windowBorderBottomStyle$ = $dvt$$5$$.$windowBorderBottomStyle$;
    this.$_windowBorderLeftStyle$ = $dvt$$5$$.$windowBorderLeftStyle$;
    this.$_windowBorderTopColor$ = $dvt$$5$$.$windowBorderTopColor$;
    this.$_windowBorderRightColor$ = $dvt$$5$$.$windowBorderRightColor$;
    this.$_windowBorderBottomColor$ = $dvt$$5$$.$windowBorderBottomColor$;
    this.$_windowBorderLeftColor$ = $dvt$$5$$.$windowBorderLeftColor$;
    this.$_handleTextureColor$ = $dvt$$5$$.$handleTextureColor$;
    this.$_handleFillColor$ = $dvt$$5$$.$handleFillColor$;
    this.$_handleBackgroundImage$ = $dvt$$5$$.$handleBackgroundImage$;
    this.$_handleWidth$ = $dvt$$5$$.$handleWidth$;
    this.$_handleHeight$ = $dvt$$5$$.$handleHeight$;
    this.$_overviewBackgroundColor$ = $dvt$$5$$.$overviewBackgroundColor$;
    this.$_currentTimeIndicatorColor$ = $dvt$$5$$.$currentTimeIndicatorColor$;
    this.$_timeIndicatorColor$ = $dvt$$5$$.$timeIndicatorColor$;
    this.$_timeAxisBarColor$ = $dvt$$5$$.$timeAxisBarColor$;
    this.$_timeAxisBarOpacity$ = $dvt$$5$$.$timeAxisBarOpacity$;
    this.$_leftFilterPanelColor$ = $dvt$$5$$.$leftFilterPanelColor$;
    this.$_leftFilterPanelAlpha$ = $dvt$$5$$.$leftFilterPanelAlpha$;
    this.$_rightFilterPanelColor$ = $dvt$$5$$.$rightFilterPanelColor$;
    this.$_rightFilterPanelAlpha$ = $dvt$$5$$.$rightFilterPanelAlpha$
  };
  $dvt$$5$$.$Overview$.prototype.$getDatePosition$ = function $$dvt$$5$$$$Overview$$$$getDatePosition$$($DvtOverviewEventManager$$) {
    return Math.max(0, $dvt$$5$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $DvtOverviewEventManager$$, this.$getOverviewSize$())) + this.$_leftMargin$
  };
  $dvt$$5$$.$Overview$.prototype.$getPositionDate$ = function $$dvt$$5$$$$Overview$$$$getPositionDate$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$OverviewUtils$.$getPositionDate$(this.$_start$, this.$_end$, Math.max(0, $DvtOverviewEventManager$$ - this.$_leftMargin$), this.$getOverviewSize$())
  };
  $dvt$$5$$.$Overview$.prototype.$isRTL$ = function $$dvt$$5$$$$Overview$$$$isRTL$$() {
    return"true" == this.$_isRtl$
  };
  $dvt$$5$$.$Overview$.prototype.$isHorizontalRTL$ = function $$dvt$$5$$$$Overview$$$$isHorizontalRTL$$() {
    return this.$isRTL$() && !this.$isVertical$()
  };
  $dvt$$5$$.$Overview$.prototype.$isVertical$ = function $$dvt$$5$$$$Overview$$$$isVertical$$() {
    return"vertical" == this.$_orientation$
  };
  $dvt$$5$$.$Overview$.prototype.$isOverviewAbove$ = function $$dvt$$5$$$$Overview$$$$isOverviewAbove$$() {
    return"above" == this.$_overviewPosition$
  };
  $dvt$$5$$.$Overview$.prototype.$getOverviewSize$ = function $$dvt$$5$$$$Overview$$$$getOverviewSize$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_leftMargin$ - this.$_rightMargin$ : this.$Width$ - this.$_leftMargin$ - this.$_rightMargin$
  };
  $dvt$$5$$.$Overview$.prototype.$getMaximumPosition$ = function $$dvt$$5$$$$Overview$$$$getMaximumPosition$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_rightMargin$ : this.$Width$ - this.$_rightMargin$
  };
  $dvt$$5$$.$Overview$.prototype.$getMinimumWindowSize$ = function $$dvt$$5$$$$Overview$$$$getMinimumWindowSize$$() {
    return this.$_minWinSize$ != $JSCompiler_alias_NULL$$ ? this.$_minWinSize$ : this.$_minimumWindowSize$ != $JSCompiler_alias_NULL$$ ? this.$_minWinSize$ = $dvt$$5$$.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_start$ + this.$_minimumWindowSize$, this.$getOverviewSize$()) : $dvt$$5$$.$Overview$.$MIN_WINDOW_SIZE$
  };
  $dvt$$5$$.$Overview$.prototype.$getHandleStart$ = function $$dvt$$5$$$$Overview$$$$getHandleStart$$() {
    return $dvt$$5$$.$OverviewUtils$.$supportsTouch$() ? this.$getHandleSize$() / 2 : 0
  };
  $dvt$$5$$.$Overview$.prototype.$getHandleSize$ = function $$dvt$$5$$$$Overview$$$$getHandleSize$$() {
    return $dvt$$5$$.$OverviewUtils$.$supportsTouch$() ? 30 : 10
  };
  $dvt$$5$$.$Overview$.prototype.$isHandle$ = function $$dvt$$5$$$$Overview$$$$isHandle$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = $dvt$$5$$.getId();
    return"lh" == $DvtOverviewEventManager$$ || "rh" == $DvtOverviewEventManager$$ || "lhb" == $DvtOverviewEventManager$$ || "rhb" == $DvtOverviewEventManager$$ || "grpy" == $DvtOverviewEventManager$$ || "lbgrh" == $DvtOverviewEventManager$$ || "rbgrh" == $DvtOverviewEventManager$$ || $dvt$$5$$.getParent() != $JSCompiler_alias_NULL$$ && "grpy" == $dvt$$5$$.getParent().getId()
  };
  $dvt$$5$$.$Overview$.prototype.$getTimeAxisWidth$ = function $$dvt$$5$$$$Overview$$$$getTimeAxisWidth$$() {
    if(this.$_timeAxisInfo$ == $JSCompiler_alias_NULL$$) {
      return 0
    }
    if(this.$_timeAxisWidth$ == $JSCompiler_alias_NULL$$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.width, 10);
      this.$_timeAxisWidth$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Width$ ? $DvtOverviewEventManager$$ : $dvt$$5$$.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$
    }
    return this.$_timeAxisWidth$
  };
  $dvt$$5$$.$Overview$.prototype.$getTimeAxisHeight$ = function $$dvt$$5$$$$Overview$$$$getTimeAxisHeight$$() {
    if(this.$_timeAxisInfo$ == $JSCompiler_alias_NULL$$) {
      return 0
    }
    if(this.$_timeAxisHeight$ == $JSCompiler_alias_NULL$$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.height, 10);
      this.$_timeAxisHeight$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Height$ ? $DvtOverviewEventManager$$ : $dvt$$5$$.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$
    }
    return this.$_timeAxisHeight$
  };
  $dvt$$5$$.$Overview$.prototype.$getPageX$ = function $$dvt$$5$$$$Overview$$$$getPageX$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && $DvtOverviewEventManager$$.targetTouches != $JSCompiler_alias_NULL$$ ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageX : $JSCompiler_alias_NULL$$ : $DvtOverviewEventManager$$.pageX
  };
  $dvt$$5$$.$Overview$.prototype.$getPageY$ = function $$dvt$$5$$$$Overview$$$$getPageY$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && $DvtOverviewEventManager$$.targetTouches != $JSCompiler_alias_NULL$$ ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageY : $JSCompiler_alias_NULL$$ : $DvtOverviewEventManager$$.pageY
  };
  $dvt$$5$$.$Overview$.prototype.$isLeftAndRightFilterRendered$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  $dvt$$5$$.$Overview$.prototype.$getSlidingWindow$ = function $$dvt$$5$$$$Overview$$$$getSlidingWindow$$() {
    return this.$getChildAt$(1)
  };
  $dvt$$5$$.$Overview$.prototype.$getLeftBackground$ = function $$dvt$$5$$$$Overview$$$$getLeftBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(3) : $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$getRightBackground$ = function $$dvt$$5$$$$Overview$$$$getRightBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(4) : $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$getLeftBackgroundHandle$ = function $$dvt$$5$$$$Overview$$$$getLeftBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(5) : $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$getRightBackgroundHandle$ = function $$dvt$$5$$$$Overview$$$$getRightBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(6) : $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$getLeftHandle$ = function $$dvt$$5$$$$Overview$$$$getLeftHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - this.$_lastChildIndex$)
  };
  $dvt$$5$$.$Overview$.prototype.$getRightHandle$ = function $$dvt$$5$$$$Overview$$$$getRightHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 1))
  };
  $dvt$$5$$.$Overview$.prototype.$getLeftTopBar$ = function $$dvt$$5$$$$Overview$$$$getLeftTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 2))
  };
  $dvt$$5$$.$Overview$.prototype.$getRightTopBar$ = function $$dvt$$5$$$$Overview$$$$getRightTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 3))
  };
  $dvt$$5$$.$Overview$.prototype.$getBottomBar$ = function $$dvt$$5$$$$Overview$$$$getBottomBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 4))
  };
  $dvt$$5$$.$Overview$.prototype.$getTopBar$ = function $$dvt$$5$$$$Overview$$$$getTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 5))
  };
  $dvt$$5$$.$Overview$.prototype.$setLinePos$ = function $$dvt$$5$$$$Overview$$$$setLinePos$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$isVertical$() ? (-1 != $DvtOverviewEventManager$$ && $dvt$$5$$.$setY1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$5$$.$setY2$($DvtOverviewParser$$)) : (-1 != $DvtOverviewEventManager$$ && $dvt$$5$$.$setX1$($DvtOverviewEventManager$$), -1 != $DvtOverviewParser$$ && $dvt$$5$$.$setX2$($DvtOverviewParser$$))
  };
  $dvt$$5$$.$Overview$.prototype.$getLinePos1$ = function $$dvt$$5$$$$Overview$$$$getLinePos1$$($dvt$$5$$) {
    return this.$isVertical$() ? $dvt$$5$$.$getY1$() : $dvt$$5$$.$getX1$()
  };
  $dvt$$5$$.$Overview$.prototype.$_findDrawable$ = function $$dvt$$5$$$$Overview$$$$_findDrawable$$($dvt$$5$$) {
    $dvt$$5$$ = $dvt$$5$$.target;
    if($dvt$$5$$ != $JSCompiler_alias_NULL$$) {
      var $DvtOverviewEventManager$$ = $dvt$$5$$.getId();
      if($DvtOverviewEventManager$$ == $JSCompiler_alias_NULL$$) {
        return $JSCompiler_alias_NULL$$
      }
      if("_border" == $DvtOverviewEventManager$$.substr($DvtOverviewEventManager$$.length - 7)) {
        return this.$getChildAfter$($dvt$$5$$)
      }
      if("tick" != $DvtOverviewEventManager$$.substr(0, 4) && "ltb" != $DvtOverviewEventManager$$ && "rtb" != $DvtOverviewEventManager$$ && "bb" != $DvtOverviewEventManager$$ && "tab" != $DvtOverviewEventManager$$) {
        return $dvt$$5$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$isMovable$ = function $$dvt$$5$$$$Overview$$$$isMovable$$($dvt$$5$$) {
    return"window" == $dvt$$5$$.getId() || "ftr" == $dvt$$5$$.getId() || "sta" == $dvt$$5$$.getId() || this.$isHandle$($dvt$$5$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $dvt$$5$$.$Overview$.prototype.$isFlashEnvironment$ = function $$dvt$$5$$$$Overview$$$$isFlashEnvironment$$() {
    return window && window.$isFlashEnvironment$
  };
  $dvt$$5$$.$Overview$.prototype.$createBackground$ = function $$dvt$$5$$$$Overview$$$$createBackground$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $background$$11$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "bg");
    $background$$11$$.$setSolidFill$(this.$_overviewBackgroundColor$);
    $background$$11$$.$setPixelHinting$();
    this.$addChild$($background$$11$$);
    return $background$$11$$
  };
  $dvt$$5$$.$Overview$.prototype.$createSlidingWindow$ = function $$dvt$$5$$$$Overview$$$$createSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $leftBackgroundResizeHandle_vertical$$ = this.$isVertical$(), $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "window") : new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "window");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    if(!this.$isFeatureOff$()) {
      var $handleSize_rightHandleBackground$$ = this.$getHandleSize$(), $handleStart_rightBackgroundResizeHandle$$ = this.$getHandleStart$();
      if($leftBackgroundResizeHandle_vertical$$) {
        var $handleX_handleY_rightGrippy$$ = ($DvtOverviewEventManager$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$5$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$5$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, 6, $handleX_handleY_rightGrippy$$ + 8, 8) + $dvt$$5$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, 8) + $dvt$$5$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, 6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$5$$.$PathUtils$.closePath();
        var $rightHandle_rightHandleCmds$$ = $dvt$$5$$.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + $dvt$$5$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, -6, $handleX_handleY_rightGrippy$$ + 8, -8) + $dvt$$5$$.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, -8) + $dvt$$5$$.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, -6, $handleX_handleY_rightGrippy$$ + 36, 0);
        $dvt$$5$$.$PathUtils$.closePath();
        var $leftHandleBackground_rightBackground$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "rhb"), $cursor$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10)
        }else {
          $leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$)
        }
      }else {
        $handleX_handleY_rightGrippy$$ = ($DvtOverviewParser$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = $dvt$$5$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$5$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 3, 8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$5$$.$PathUtils$.lineTo(8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$5$$.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$5$$.$PathUtils$.closePath(), $rightHandle_rightHandleCmds$$ = 
        $dvt$$5$$.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + $dvt$$5$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 3, -8, $handleX_handleY_rightGrippy$$ + 8) + $dvt$$5$$.$PathUtils$.lineTo(-8, $handleX_handleY_rightGrippy$$ + 28) + $dvt$$5$$.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), $dvt$$5$$.$PathUtils$.closePath(), $leftHandleBackground_rightBackground$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0 - $handleStart_rightBackgroundResizeHandle$$, 
        0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "lhb"), $handleSize_rightHandleBackground$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), $handleStart_rightBackgroundResizeHandle$$, 0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "rhb"), $cursor$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$)) : ($leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), 
        $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$))
      }
      $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize_rightHandleBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $leftHandleBackground_rightBackground$$.$setPixelHinting$();
      $handleSize_rightHandleBackground$$.$setPixelHinting$();
      $leftHandle_leftHandleCmds$$ = new $dvt$$5$$.$Path$(this.$getCtx$(), $leftHandle_leftHandleCmds$$, "lh");
      $rightHandle_rightHandleCmds$$ = new $dvt$$5$$.$Path$(this.$getCtx$(), $rightHandle_rightHandleCmds$$, "rh");
      $leftHandle_leftHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle_leftHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ($leftHandle_leftHandleCmds$$.$setPixelHinting$(), $rightHandle_rightHandleCmds$$.$setPixelHinting$());
      $leftHandleBackground_rightBackground$$.setCursor($cursor$$);
      $handleSize_rightHandleBackground$$.setCursor($cursor$$);
      $leftHandle_leftHandleCmds$$.setCursor($cursor$$);
      $rightHandle_rightHandleCmds$$.setCursor($cursor$$);
      $leftGrippy$$.setCursor($cursor$$);
      $handleX_handleY_rightGrippy$$.setCursor($cursor$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandleBackground_rightBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandle_leftHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftGrippy$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleSize_rightHandleBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($rightHandle_rightHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleX_handleY_rightGrippy$$)
    }
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.setCursor("move");
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? this.$isRTL$() ? new $dvt$$5$$.$Line$(this.$getCtx$(), this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : new $dvt$$5$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), 0, $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : this.$isOverviewAbove$() ? new $dvt$$5$$.$Line$(this.$getCtx$(), 0, this.$getTimeAxisHeight$(), 
    $DvtOverviewEventManager$$, this.$getTimeAxisHeight$(), "tab") : new $dvt$$5$$.$Line$(this.$getCtx$(), 0, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), $DvtOverviewEventManager$$, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), "tab");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    this.$_timeAxisTopBar$ = $leftBackground_slidingWindow$$2_timeAxisTopBar$$;
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    this.$isLeftAndRightFilterRendered$() && ($leftBackgroundResizeHandle_vertical$$ ? ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "lbg"), $leftHandleBackground_rightBackground$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "rbg")) : ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "lbg"), $leftHandleBackground_rightBackground$$ = 
    new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "rbg")), $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$), $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($leftHandleBackground_rightBackground$$), $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && $handleStart_rightBackgroundResizeHandle$$ != 
    $JSCompiler_alias_VOID$$ && (this.$getHandleStart$(), $leftBackgroundResizeHandle_vertical$$ ? ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "rbgrh")) : ($leftBackgroundResizeHandle_vertical$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 
    0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "rbgrh")), $leftBackgroundResizeHandle_vertical$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($leftBackgroundResizeHandle_vertical$$), $handleStart_rightBackgroundResizeHandle$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($handleStart_rightBackgroundResizeHandle$$)))
  };
  $dvt$$5$$.$Overview$.prototype.$createGrippyImage$ = function $$dvt$$5$$$$Overview$$$$createGrippyImage$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $grippy$$ = new $dvt$$5$$.$Image$(this.$getCtx$(), this.$_handleBackgroundImage$, ($DvtOverviewEventManager$$ - this.$_handleWidth$) / 2, ($DvtOverviewParser$$ - this.$_handleHeight$) / 2, this.$_handleWidth$, this.$_handleHeight$, "grpy");
    $grippy$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    return $grippy$$
  };
  $dvt$$5$$.$Overview$.prototype.$createGrippy$ = function $$dvt$$5$$$$Overview$$$$createGrippy$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = new $dvt$$5$$.$Container$(this.$getCtx$(), "grpy"), $color$$55$$ = this.$_handleTextureColor$;
    if(this.$isVertical$()) {
      var $startx$$1$$ = 8 + $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = 3;
      for(var $i$$532$$ = 0;9 > $i$$532$$;$i$$532$$++) {
        var $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot1" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$ + 1 + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 1 + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot2" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot3" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ = 3
      }
      $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot4");
      $dot$$.$setSolidStroke$($color$$55$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $DvtOverviewEventManager$$ += 4;
      $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot5")
    }else {
      $startx$$1$$ = 3;
      $DvtOverviewEventManager$$ = 8 + $DvtOverviewEventManager$$;
      for($i$$532$$ = 0;9 > $i$$532$$;$i$$532$$++) {
        $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$ + 1, "dot1" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$532$$ + 1, "dot2" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), 
        $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$ + 1, "dot3" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ = 3
      }
      $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot4");
      $dot$$.$setSolidStroke$($color$$55$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $startx$$1$$ += 4;
      $dot$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot5")
    }
    $dot$$.$setSolidStroke$($color$$55$$);
    $DvtOverviewParser$$.$addChild$($dot$$);
    $DvtOverviewParser$$.$setPixelHinting$();
    return $DvtOverviewParser$$
  };
  $dvt$$5$$.$Overview$.prototype.$updateSlidingWindow$ = function $$dvt$$5$$$$Overview$$$$updateSlidingWindow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$(), $DvtOverviewParser$$ = this.$getSlidingWindow$(), $size$$28$$ = this.$getOverviewSize$(), $actualSize$$1_newWidth$$3_rangeEndPos$$ = $DvtOverviewEventManager$$ ? this.$Height$ : this.$Width$, $rangeEndTime_timelineWidth$$ = this.$_width$, $start$$28$$ = this.$_start$, $end$$19$$ = this.$_end$, $DvtOverviewEventManager$$ = this.$_renderStart$, $rangeStartPos_rangeStartTime$$ = $dvt$$5$$.$OverviewUtils$.$getPositionDate$($start$$28$$, $end$$19$$, 
    0, $rangeEndTime_timelineWidth$$), $rangeEndTime_timelineWidth$$ = $dvt$$5$$.$OverviewUtils$.$getPositionDate$($start$$28$$, $end$$19$$, $actualSize$$1_newWidth$$3_rangeEndPos$$, $rangeEndTime_timelineWidth$$), $rangeStartPos_rangeStartTime$$ = this.$getDatePosition$($rangeStartPos_rangeStartTime$$), $actualSize$$1_newWidth$$3_rangeEndPos$$ = Math.min($actualSize$$1_newWidth$$3_rangeEndPos$$, this.$getDatePosition$($rangeEndTime_timelineWidth$$)), $DvtOverviewEventManager$$ = this.$getDatePosition$($DvtOverviewEventManager$$), 
    $actualSize$$1_newWidth$$3_rangeEndPos$$ = $actualSize$$1_newWidth$$3_rangeEndPos$$ - $rangeStartPos_rangeStartTime$$;
    this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($DvtOverviewParser$$, $size$$28$$ - $DvtOverviewEventManager$$ - $actualSize$$1_newWidth$$3_rangeEndPos$$) : this.$setSlidingWindowPos$($DvtOverviewParser$$, $DvtOverviewEventManager$$);
    this.$setSlidingWindowSize$($DvtOverviewParser$$, $actualSize$$1_newWidth$$3_rangeEndPos$$);
    this.$ScrollTimeAxis$();
    this.$_increment$ = this.$calculateIncrement$($size$$28$$)
  };
  $dvt$$5$$.$Overview$.prototype.$createBorderAroundSlidingWindow$ = function $$dvt$$5$$$$Overview$$$$createBorderAroundSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $right$$12_slidingWindow$$3$$ = this.$getSlidingWindow$(), $halfBorderWidth_leftHandle$$1$$ = $dvt$$5$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2;
    if(this.$isVertical$()) {
      var $top$$9_topBar$$ = $right$$12_slidingWindow$$3$$.$getY$(), $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $top$$9_topBar$$ + $right$$12_slidingWindow$$3$$.getHeight(), $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = 0, $leftCenter$$ = $halfBorderWidth_leftHandle$$1$$, $rightCenter$$ = $DvtOverviewEventManager$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), 
      $left$$12$$, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "lh"), $rightHandle$$1$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $DvtOverviewEventManager$$, $bottomBar_bottomCenter$$, "rh"), $leftTopBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $leftCenter$$, 0, $leftCenter$$, $top$$9_topBar$$, "ltb"), $rightTopBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $leftCenter$$, $bottom$$9$$, $leftCenter$$, $DvtOverviewParser$$, "rtb"), $bottomBar_bottomCenter$$ = 
      new $dvt$$5$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "bb"), $top$$9_topBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "tb")
    }else {
      $top$$9_topBar$$ = 0, $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $DvtOverviewParser$$, $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = $right$$12_slidingWindow$$3$$.$getX$(), $leftCenter$$ = $left$$12$$ + $halfBorderWidth_leftHandle$$1$$, $right$$12_slidingWindow$$3$$ = $left$$12$$ + $right$$12_slidingWindow$$3$$.getWidth(), $rightCenter$$ = $right$$12_slidingWindow$$3$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = 
      new $dvt$$5$$.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "lh"), $rightHandle$$1$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "rh"), $leftTopBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), 0, $topCenter$$, $left$$12$$ + 1, $topCenter$$, "ltb"), $rightTopBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $right$$12_slidingWindow$$3$$ - 1, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "rtb"), 
      $bottomBar_bottomCenter$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $right$$12_slidingWindow$$3$$, $bottomBar_bottomCenter$$, "bb"), $top$$9_topBar$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $left$$12$$, $topCenter$$, $right$$12_slidingWindow$$3$$, $topCenter$$, "tb")
    }
    $halfBorderWidth_leftHandle$$1$$.$setPixelHinting$();
    $rightHandle$$1$$.$setPixelHinting$();
    $leftTopBar$$.$setPixelHinting$();
    $rightTopBar$$.$setPixelHinting$();
    $bottomBar_bottomCenter$$.$setPixelHinting$();
    $top$$9_topBar$$.$setPixelHinting$();
    "none" != this.$_windowBorderLeftStyle$ && $halfBorderWidth_leftHandle$$1$$.$setSolidStroke$(this.$_windowBorderLeftColor$);
    this.$addChild$($halfBorderWidth_leftHandle$$1$$);
    "none" != this.$_windowBorderRightStyle$ && $rightHandle$$1$$.$setSolidStroke$(this.$_windowBorderRightColor$);
    this.$addChild$($rightHandle$$1$$);
    "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($leftTopBar$$.$setSolidStroke$(this.$_borderTopColor$), $rightTopBar$$.$setSolidStroke$(this.$_borderTopColor$));
    this.$addChild$($leftTopBar$$);
    this.$addChild$($rightTopBar$$);
    "none" != this.$_windowBorderBottomStyle$ && $bottomBar_bottomCenter$$.$setSolidStroke$(this.$_windowBorderBottomColor$);
    this.$addChild$($bottomBar_bottomCenter$$);
    "none" != this.$_windowBorderTopStyle$ && $top$$9_topBar$$.$setSolidStroke$(this.$_windowBorderTopColor$);
    this.$addChild$($top$$9_topBar$$)
  };
  $dvt$$5$$.$Overview$.prototype.$createResizeArrow$ = function $$dvt$$5$$$$Overview$$$$createResizeArrow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$() ? $dvt$$5$$.$PathUtils$.moveTo(6, 0) + $dvt$$5$$.$PathUtils$.lineTo(0, 5) + $dvt$$5$$.$PathUtils$.lineTo(5, 5) + $dvt$$5$$.$PathUtils$.lineTo(5, 17) + $dvt$$5$$.$PathUtils$.lineTo(0, 17) + $dvt$$5$$.$PathUtils$.lineTo(6, 22) + $dvt$$5$$.$PathUtils$.lineTo(12, 17) + $dvt$$5$$.$PathUtils$.lineTo(7, 17) + $dvt$$5$$.$PathUtils$.lineTo(7, 5) + $dvt$$5$$.$PathUtils$.lineTo(12, 5) + $dvt$$5$$.$PathUtils$.closePath() : $dvt$$5$$.$PathUtils$.moveTo(5, 
    0) + $dvt$$5$$.$PathUtils$.lineTo(0, 6) + $dvt$$5$$.$PathUtils$.lineTo(5, 12) + $dvt$$5$$.$PathUtils$.lineTo(5, 7) + $dvt$$5$$.$PathUtils$.lineTo(17, 7) + $dvt$$5$$.$PathUtils$.lineTo(17, 12) + $dvt$$5$$.$PathUtils$.lineTo(22, 6) + $dvt$$5$$.$PathUtils$.lineTo(17, 0) + $dvt$$5$$.$PathUtils$.lineTo(17, 4) + $dvt$$5$$.$PathUtils$.lineTo(5, 4) + $dvt$$5$$.$PathUtils$.lineTo(5, 0) + $dvt$$5$$.$PathUtils$.closePath(), $DvtOverviewEventManager$$ = new $dvt$$5$$.$Path$(this.$getCtx$(), $DvtOverviewEventManager$$, 
    "arr");
    $DvtOverviewEventManager$$.$setSolidFill$("#ffffff");
    $DvtOverviewEventManager$$.$setSolidStroke$("#000000");
    $DvtOverviewEventManager$$.$setVisible$($JSCompiler_alias_FALSE$$);
    this.$addChild$($DvtOverviewEventManager$$);
    return $DvtOverviewEventManager$$
  };
  $dvt$$5$$.$Overview$.prototype.$getRectSize$ = function $$dvt$$5$$$$Overview$$$$getRectSize$$($dvt$$5$$) {
    return this.$isVertical$() ? $dvt$$5$$.getHeight() : $dvt$$5$$.getWidth()
  };
  $dvt$$5$$.$Overview$.prototype.$setRectSize$ = function $$dvt$$5$$$$Overview$$$$setRectSize$$($dvt$$5$$, $DvtOverviewEventManager$$) {
    this.$isVertical$() ? $dvt$$5$$.$setHeight$($DvtOverviewEventManager$$) : $dvt$$5$$.$setWidth$($DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$Overview$.prototype.$getSlidingWindowPos$ = function $$dvt$$5$$$$Overview$$$$getSlidingWindowPos$$($dvt$$5$$) {
    return this.$isVertical$() ? $dvt$$5$$.$getTranslateY$() : $dvt$$5$$.$getTranslateX$()
  };
  $dvt$$5$$.$Overview$.prototype.$setSlidingWindowPos$ = function $$dvt$$5$$$$Overview$$$$setSlidingWindowPos$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(0, $DvtOverviewParser$$);
    this.$isVertical$() ? $DvtOverviewEventManager$$.$setTranslateY$($DvtOverviewParser$$) : $DvtOverviewEventManager$$.$setTranslateX$($DvtOverviewParser$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      this.$getLeftBackground$().$setWidth$($DvtOverviewParser$$);
      var $rightStart$$ = $DvtOverviewParser$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$), $handleStart$$1_rightBackground$$1$$ = this.$getRightBackground$();
      $handleStart$$1_rightBackground$$1$$.$setX$($rightStart$$);
      $handleStart$$1_rightBackground$$1$$.$setWidth$(Math.max(0, this.$Width$ - $rightStart$$));
      $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($handleStart$$1_rightBackground$$1$$ = this.$getHandleStart$(), this.$getLeftBackgroundHandle$().$setX$($DvtOverviewParser$$ - $handleStart$$1_rightBackground$$1$$), this.$getRightBackgroundHandle$().$setX$($rightStart$$))
    }
  };
  $dvt$$5$$.$Overview$.prototype.$getSlidingWindowSize$ = function $$dvt$$5$$$$Overview$$$$getSlidingWindowSize$$($dvt$$5$$) {
    return this.$getRectSize$($dvt$$5$$)
  };
  $dvt$$5$$.$Overview$.prototype.$setSlidingWindowSize$ = function $$dvt$$5$$$$Overview$$$$setSlidingWindowSize$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(this.$getMinimumWindowSize$(), $DvtOverviewParser$$);
    $DvtOverviewParser$$ = Math.min(this.$isVertical$() ? this.$Height$ : this.$Width$, $DvtOverviewParser$$);
    this.$setRectSize$($DvtOverviewEventManager$$, $DvtOverviewParser$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$) + $DvtOverviewParser$$, $rightBackground$$2_rightHandle$$2$$ = this.$getRightBackground$();
      $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1$$);
      $rightBackground$$2_rightHandle$$2$$.$setWidth$(Math.max(0, this.$Width$ - $rightHandleBackground$$1_rightStart$$1$$));
      $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && this.$getRightBackgroundHandle$().$setX$($rightHandleBackground$$1_rightStart$$1$$)
    }
    if(!this.$isFeatureOff$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $DvtOverviewEventManager$$.$getChildAt$(4), $rightGrippy$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(5);
      this.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateY$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateY$($DvtOverviewParser$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateX$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateX$($DvtOverviewParser$$ - 
      10))
    }
  };
  $dvt$$5$$.$Overview$.prototype.$calculateIncrement$ = function $$dvt$$5$$$$Overview$$$$calculateIncrement$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_width$, $start$$29$$ = this.$_start$, $end$$20$$ = this.$_end$, $day1_pos1$$1$$ = $dvt$$5$$.$OverviewUtils$.$getPositionDate$($start$$29$$, $end$$20$$, 1, $DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$ = $dvt$$5$$.$OverviewUtils$.$getPositionDate$($start$$29$$, $end$$20$$, 2, $DvtOverviewEventManager$$);
    $day1_pos1$$1$$ = $dvt$$5$$.$OverviewUtils$.$getDatePosition$($start$$29$$, $end$$20$$, $day1_pos1$$1$$, $DvtOverviewParser$$);
    return $dvt$$5$$.$OverviewUtils$.$getDatePosition$($start$$29$$, $end$$20$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) - $day1_pos1$$1$$
  };
  $dvt$$5$$.$Overview$.prototype.$updateTimeAxis$ = function $$dvt$$5$$$$Overview$$$$updateTimeAxis$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(this.$_ticks$ != $JSCompiler_alias_NULL$$) {
      for(var $vertical$$2$$ = this.$isVertical$(), $size$$31$$ = this.$getOverviewSize$(), $i$$533$$ = 0;$i$$533$$ < this.$_ticks$.length;$i$$533$$++) {
        var $child$$60_label$$66$$ = this.$_ticks$[$i$$533$$], $time$$6_time_pos$$ = parseInt($child$$60_label$$66$$.$getAttr$("time"), 10), $time$$6_time_pos$$ = this.$getDatePosition$($time$$6_time_pos$$), $child$$60_label$$66$$ = $child$$60_label$$66$$.$getAttr$("label"), $maxWidth$$15_next_time$$ = 0;
        $i$$533$$ + 1 < this.$_ticks$.length ? ($maxWidth$$15_next_time$$ = parseInt(this.$_ticks$[$i$$533$$ + 1].$getAttr$("time"), 10), $maxWidth$$15_next_time$$ = this.$getDatePosition$($maxWidth$$15_next_time$$) - $time$$6_time_pos$$) : $maxWidth$$15_next_time$$ = $size$$31$$ - $time$$6_time_pos$$;
        this.$isHorizontalRTL$() && ($time$$6_time_pos$$ = $size$$31$$ - $time$$6_time_pos$$);
        $vertical$$2$$ && ($maxWidth$$15_next_time$$ = this.$Width$);
        $maxWidth$$15_next_time$$ -= 2 * $dvt$$5$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$;
        this.$addTick$($time$$6_time_pos$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "tick" + $i$$533$$);
        this.$addLabel$($time$$6_time_pos$$, $child$$60_label$$66$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $maxWidth$$15_next_time$$, "label" + $i$$533$$)
      }
    }
  };
  $dvt$$5$$.$Overview$.prototype.$addTick$ = function $$dvt$$5$$$$Overview$$$$addTick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$83$$, $id$$142$$) {
    $DvtOverviewEventManager$$ = this.$isVertical$() ? new $dvt$$5$$.$Line$(this.$getCtx$(), 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewEventManager$$, $id$$142$$) : new $dvt$$5$$.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$, 0, $DvtOverviewEventManager$$, $height$$83$$, $id$$142$$);
    $DvtOverviewParser$$ = new $dvt$$5$$.$SolidStroke$(this.$_timeIndicatorColor$);
    $DvtOverviewParser$$.$setStyle$($dvt$$5$$.$Stroke$.$DASHED$, 3);
    $DvtOverviewEventManager$$.$setStroke$($DvtOverviewParser$$);
    $DvtOverviewEventManager$$.$setPixelHinting$();
    this.$addChild$($DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$Overview$.prototype.$addLabel$ = function $$dvt$$5$$$$Overview$$$$addLabel$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $padding$$23_width$$97$$, $height$$84_y$$145$$, $maxWidth$$16$$, $id$$143$$, $dim$$53_labelStyle$$19$$) {
    $dim$$53_labelStyle$$19$$ = $dim$$53_labelStyle$$19$$ || new $dvt$$5$$.$CSSStyle$("font-weight:bold");
    this.$isVertical$() ? ($DvtOverviewParser$$ = new $dvt$$5$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, 4, $DvtOverviewEventManager$$, $id$$143$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$(Math.max(4, this.$Width$ - $dim$$53_labelStyle$$19$$.$w$ - 4)))) : ($height$$84_y$$145$$ = 
    this.$isOverviewAbove$() ? 2 : $height$$84_y$$145$$ - this.$getTimeAxisHeight$() + 2, $padding$$23_width$$97$$ = $dvt$$5$$.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$, $DvtOverviewParser$$ = new $dvt$$5$$.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, $DvtOverviewEventManager$$ + $padding$$23_width$$97$$, $height$$84_y$$145$$, $id$$143$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isHorizontalRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = 
    $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$($DvtOverviewEventManager$$ - Math.min($dim$$53_labelStyle$$19$$.$w$, $maxWidth$$16$$) - $padding$$23_width$$97$$)));
    $dvt$$5$$.$TextUtils$.$fitText$($DvtOverviewParser$$, $maxWidth$$16$$, Infinity, this);
    $DvtOverviewParser$$.$_rawText$ = $DvtOverviewParser$$.$getUntruncatedTextString$()
  };
  $dvt$$5$$.$Overview$.prototype.$updateCurrentTime$ = function $$dvt$$5$$$$Overview$$$$updateCurrentTime$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(!(this.$_currentTime$ == $JSCompiler_alias_NULL$$ || isNaN(this.$_currentTime$))) {
      var $line$$15_time_pos$$1$$ = this.$getDatePosition$(this.$_currentTime$);
      this.$isVertical$() ? $line$$15_time_pos$$1$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), 0, $line$$15_time_pos$$1$$, $DvtOverviewEventManager$$, $line$$15_time_pos$$1$$, "ocd") : (this.$isRTL$() && ($line$$15_time_pos$$1$$ = $DvtOverviewEventManager$$ - $line$$15_time_pos$$1$$), $line$$15_time_pos$$1$$ = new $dvt$$5$$.$Line$(this.$getCtx$(), $line$$15_time_pos$$1$$, 0, $line$$15_time_pos$$1$$, $DvtOverviewParser$$, "ocd"));
      $line$$15_time_pos$$1$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$);
      $line$$15_time_pos$$1$$.$setPixelHinting$();
      this.$addChild$($line$$15_time_pos$$1$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$parseFilledTimeRangesXML$ = function $$dvt$$5$$$$Overview$$$$parseFilledTimeRangesXML$$($dvt$$5$$, $DvtOverviewEventManager$$) {
    if(this.$_formattedTimeRanges$ != $JSCompiler_alias_NULL$$) {
      for(var $DvtOverviewParser$$ = 0;$DvtOverviewParser$$ < this.$_formattedTimeRanges$.length;$DvtOverviewParser$$++) {
        this.$addFilledTimeRange$(this.$_formattedTimeRanges$[$DvtOverviewParser$$], $dvt$$5$$, $DvtOverviewEventManager$$)
      }
    }
  };
  $dvt$$5$$.$Overview$.prototype.$addFilledTimeRange$ = function $$dvt$$5$$$$Overview$$$$addFilledTimeRange$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$87$$) {
    var $rangeStart_rangeStart_pos$$ = parseInt($DvtOverviewEventManager$$.$getAttr$("rs"), 10), $rangeEnd_rangeWidth$$1$$ = parseInt($DvtOverviewEventManager$$.$getAttr$("re"), 10);
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.$getAttr$("c");
    if($rangeStart_rangeStart_pos$$ != $JSCompiler_alias_NULL$$ && $rangeEnd_rangeWidth$$1$$ != $JSCompiler_alias_NULL$$) {
      var $size$$32$$ = this.$getOverviewSize$(), $rangeStart_rangeStart_pos$$ = this.$getDatePosition$($rangeStart_rangeStart_pos$$), $rangeEnd_rangeWidth$$1$$ = this.$getDatePosition$($rangeEnd_rangeWidth$$1$$) - $rangeStart_rangeStart_pos$$;
      this.$isHorizontalRTL$() && ($rangeStart_rangeStart_pos$$ = $size$$32$$ - $rangeStart_rangeStart_pos$$ - $rangeEnd_rangeWidth$$1$$);
      $DvtOverviewParser$$ = this.$isVertical$() ? new $dvt$$5$$.$Rect$(this.$getCtx$(), 0, $rangeStart_rangeStart_pos$$, $DvtOverviewParser$$ - this.$getTimeAxisWidth$(), $rangeEnd_rangeWidth$$1$$, "ftr") : new $dvt$$5$$.$Rect$(this.$getCtx$(), $rangeStart_rangeStart_pos$$, this.$isOverviewAbove$() ? this.$getTimeAxisHeight$() : 0, $rangeEnd_rangeWidth$$1$$, $height$$87$$ - this.$getTimeAxisHeight$(), "ftr");
      $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewParser$$.$setSolidFill$($DvtOverviewEventManager$$, 0.4);
      $DvtOverviewParser$$.setCursor("move");
      $DvtOverviewParser$$.$setPixelHinting$();
      this.$addChild$($DvtOverviewParser$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$parseDataXML$ = $JSCompiler_emptyFn$$();
  $dvt$$5$$.$Overview$.prototype.$animateSlidingWindow$ = function $$dvt$$5$$$$Overview$$$$animateSlidingWindow$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$getSlidingWindow$();
    $DvtOverviewParser$$.$getChildAt$(3);
    $DvtOverviewParser$$.$getChildAt$(4);
    $DvtOverviewParser$$.$getChildAt$(5);
    if($DvtOverviewEventManager$$ != this.$getSlidingWindowPos$($DvtOverviewParser$$)) {
      var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = this.$getRightHandle$(), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = this.$getLeftTopBar$(), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightTopBar$(), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$getBottomBar$(), $rightBackgroundHandleSetter_topBar$$1$$ = 
      this.$getTopBar$();
      if(this.$isVertical$()) {
        var $posGetter$$ = $DvtOverviewParser$$.$getTranslateY$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
      }else {
        $posGetter$$ = $DvtOverviewParser$$.$getTranslateX$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
      }
      var $animator$$106_minPos$$ = this.$_leftMargin$, $maxPos$$ = this.$getMaximumPosition$(), $rightStart$$2_slidingWindowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      $DvtOverviewEventManager$$ = Math.max($animator$$106_minPos$$, Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $DvtOverviewEventManager$$));
      $animator$$106_minPos$$ = this.$isAnimationOnClick$() ? new $dvt$$5$$.$Animator$(this.$getCtx$(), 0.5, 0, $dvt$$5$$.$Easing$.$linear$) : $JSCompiler_alias_NULL$$;
      this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $posGetter$$, $posSetter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $DvtOverviewEventManager$$ + 1);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$ - 1);
      this.$animateProperty$($animator$$106_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$isLeftAndRightFilterRendered$() && ($DvtOverviewParser$$ = this.$getLeftBackground$(), this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $DvtOverviewParser$$.getWidth, $DvtOverviewParser$$.$setWidth$, $DvtOverviewEventManager$$), $rightStart$$2_slidingWindowSize$$ = $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$, $DvtOverviewParser$$ = this.$getRightBackground$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $DvtOverviewParser$$.getWidth, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $DvtOverviewParser$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $DvtOverviewParser$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $DvtOverviewParser$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$isVertical$() ? this.$Height$ : this.$Width$, this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - $rightStart$$2_slidingWindowSize$$), this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), $dvt$$5$$.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($DvtOverviewParser$$ = 
      this.$getHandleStart$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftBackgroundHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightBackgroundHandle$(), 
      $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, 
      $DvtOverviewEventManager$$ - $DvtOverviewParser$$), this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
      $animator$$106_minPos$$ != $JSCompiler_alias_NULL$$ && $animator$$106_minPos$$.play()
    }
  };
  $dvt$$5$$.$Overview$.prototype.$animateProperty$ = function $$dvt$$5$$$$Overview$$$$animateProperty$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$153$$) {
    $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtOverviewEventManager$$.$addProp$($dvt$$5$$.$Animator$.$TYPE_NUMBER$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$153$$) : $setter$$.call($DvtOverviewParser$$, $value$$153$$)
  };
  $dvt$$5$$.$Overview$.prototype.$HandleShapeMouseOver$ = function $$dvt$$5$$$$Overview$$$$HandleShapeMouseOver$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($DvtOverviewParser$$ && !("bg" == $DvtOverviewParser$$.getId() || "ocd" == $DvtOverviewParser$$.getId())) {
      if("label" == $DvtOverviewParser$$.getId().substr(0, 5) && ($DvtOverviewParser$$ instanceof $dvt$$5$$.$OutputText$ || $DvtOverviewParser$$ instanceof $dvt$$5$$.$BackgroundOutputText$)) {
        $DvtOverviewParser$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY, $DvtOverviewParser$$.$_rawText$, "#000000")
      }else {
        if(this.$_resizeArrow$ != $JSCompiler_alias_NULL$$ && this.$isHandle$($DvtOverviewParser$$) && ($DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY), $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$), this.$isVertical$() ? this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x + 6, $DvtOverviewEventManager$$.y - 10) : this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x - 
        6, $DvtOverviewEventManager$$.y - 20), this.$_resizeArrow$.$setVisible$($JSCompiler_alias_TRUE$$)), "window" == $DvtOverviewParser$$.getId() || "ftr" == $DvtOverviewParser$$.getId() || "arr" == $DvtOverviewParser$$.getId() || this.$isHandle$($DvtOverviewParser$$)) {
          this.$isFlashEnvironment$() && this.setCursor("move")
        }else {
          return $DvtOverviewParser$$
        }
      }
    }
  };
  $dvt$$5$$.$Overview$.prototype.$HandleShapeMouseOut$ = function $$dvt$$5$$$$Overview$$$$HandleShapeMouseOut$$($dvt$$5$$) {
    this.$_moveDrawable$ == $JSCompiler_alias_NULL$$ && this.setCursor("default");
    $dvt$$5$$ = this.$_findDrawable$($dvt$$5$$);
    if($dvt$$5$$ != $JSCompiler_alias_NULL$$) {
      return this.$isHandle$($dvt$$5$$) && this.$_resizeArrow$ != $JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$($JSCompiler_alias_FALSE$$), $dvt$$5$$
    }
  };
  $dvt$$5$$.$Overview$.prototype.$HandleShapeClick$ = function $$dvt$$5$$$$Overview$$$$HandleShapeClick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $evt$$42_pageY$$3_pos$$57$$) {
    $DvtOverviewEventManager$$.stopPropagation();
    var $drawable$$4_newStartTime_size$$33$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($drawable$$4_newStartTime_size$$33$$ && !("window" == $drawable$$4_newStartTime_size$$33$$.getId() || this.$isHandle$($drawable$$4_newStartTime_size$$33$$))) {
      if("bg" == $drawable$$4_newStartTime_size$$33$$.getId() || "label" == $drawable$$4_newStartTime_size$$33$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$33$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$33$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$33$$.getId()) {
        $DvtOverviewParser$$ == $JSCompiler_alias_VOID$$ && ($DvtOverviewParser$$ = $DvtOverviewEventManager$$.pageX);
        $evt$$42_pageY$$3_pos$$57$$ == $JSCompiler_alias_VOID$$ && ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.pageY);
        $DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewParser$$, $evt$$42_pageY$$3_pos$$57$$);
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        this.$isVertical$() ? ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.y, $drawable$$4_newStartTime_size$$33$$ = this.$Height$) : ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.x, $drawable$$4_newStartTime_size$$33$$ = this.$Width$);
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
        $DvtOverviewParser$$ = $evt$$42_pageY$$3_pos$$57$$ - this.$getRectSize$($DvtOverviewEventManager$$) / 2;
        this.$animateSlidingWindow$($DvtOverviewParser$$);
        this.$isHorizontalRTL$() && ($evt$$42_pageY$$3_pos$$57$$ = this.$Width$ - $evt$$42_pageY$$3_pos$$57$$);
        var $time$$7$$ = this.$getPositionDate$($evt$$42_pageY$$3_pos$$57$$);
        $evt$$42_pageY$$3_pos$$57$$ = new $dvt$$5$$.$OverviewEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$);
        $evt$$42_pageY$$3_pos$$57$$.setTime($time$$7$$);
        $DvtOverviewParser$$ = Math.max(0, Math.min($DvtOverviewParser$$, $drawable$$4_newStartTime_size$$33$$ - this.$getRectSize$($DvtOverviewEventManager$$)));
        this.$isHorizontalRTL$() ? ($drawable$$4_newStartTime_size$$33$$ = this.$getPositionDate$(this.$Width$ - ($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$))), $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$Width$ - $DvtOverviewParser$$)) : ($drawable$$4_newStartTime_size$$33$$ = this.$getPositionDate$($DvtOverviewParser$$), $DvtOverviewEventManager$$ = this.$getPositionDate$($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$)));
        $evt$$42_pageY$$3_pos$$57$$.$setNewStartTime$($drawable$$4_newStartTime_size$$33$$);
        $evt$$42_pageY$$3_pos$$57$$.$setNewEndTime$($DvtOverviewEventManager$$);
        this.dispatchEvent($evt$$42_pageY$$3_pos$$57$$)
      }else {
        return $drawable$$4_newStartTime_size$$33$$
      }
    }
  };
  $dvt$$5$$.$Overview$.prototype.$beginDragPan$ = function $$dvt$$5$$$$Overview$$$$beginDragPan$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $compY_drawableId$$) {
    $DvtOverviewEventManager$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && this.$isMovable$($DvtOverviewEventManager$$)) {
      if("ftr" == $DvtOverviewEventManager$$.getId() || "sta" == $DvtOverviewEventManager$$.getId()) {
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$()
      }
      this.$_initX$ = $DvtOverviewParser$$;
      this.$_initY$ = $compY_drawableId$$;
      if(this.$isHandle$($DvtOverviewEventManager$$)) {
        $DvtOverviewParser$$ = this.$getSlidingWindow$();
        this.$isHorizontalRTL$() ? (this.$_oldEndPos$ = this.$Width$ - $DvtOverviewParser$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $DvtOverviewParser$$.getWidth()) : (this.$_oldStartPos$ = $DvtOverviewParser$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $DvtOverviewParser$$.getWidth());
        "grpy" == $DvtOverviewEventManager$$.getParent().getId() && ($DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.getParent());
        $compY_drawableId$$ = $DvtOverviewEventManager$$.getId();
        "grpy" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId());
        if("lh" == $compY_drawableId$$ || "rh" == $compY_drawableId$$) {
          $DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId()
        }
        "lbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$(0));
        "rbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$($DvtOverviewParser$$.$getNumChildren$() - 3));
        $dvt$$5$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? ($DvtOverviewEventManager$$.$setY$(0 - $dvt$$5$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setHeight$(2 * ($DvtOverviewEventManager$$.getHeight() + $dvt$$5$$.$Overview$.$HANDLE_PADDING_SIZE$))) : ($DvtOverviewEventManager$$.$setX$(0 - $dvt$$5$$.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setWidth$(2 * ($DvtOverviewEventManager$$.getWidth() + $dvt$$5$$.$Overview$.$HANDLE_PADDING_SIZE$))));
        this.$overrideCursors$($DvtOverviewEventManager$$.getCursor())
      }
      this.$_moveDrawable$ = $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = new $dvt$$5$$.$OverviewEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$);
      this.dispatchEvent($DvtOverviewEventManager$$);
      return $JSCompiler_alias_TRUE$$
    }
    return $JSCompiler_alias_FALSE$$
  };
  $dvt$$5$$.$Overview$.prototype.$overrideCursors$ = function $$dvt$$5$$$$Overview$$$$overrideCursors$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
    $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewEventManager$$.setCursor($dvt$$5$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      var $DvtOverviewEventManager$$ = this.$getLeftBackground$(), $DvtOverviewParser$$ = this.$getRightBackground$();
      $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && ($DvtOverviewEventManager$$.setCursor($dvt$$5$$), $DvtOverviewParser$$.setCursor($dvt$$5$$))
    }
  };
  $dvt$$5$$.$Overview$.prototype.$resetCursors$ = function $$dvt$$5$$$$Overview$$$$resetCursors$$() {
    var $dvt$$5$$ = this.$getSlidingWindow$();
    $dvt$$5$$ != $JSCompiler_alias_NULL$$ && $dvt$$5$$.setCursor("move");
    if(this.$isLeftAndRightFilterRendered$()) {
      var $dvt$$5$$ = this.$getLeftBackground$(), $DvtOverviewEventManager$$ = this.$getRightBackground$();
      $dvt$$5$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && ($dvt$$5$$.setCursor("default"), $DvtOverviewEventManager$$.setCursor("default"))
    }
  };
  $dvt$$5$$.$Overview$.prototype.$endDragPan$ = function $$dvt$$5$$$$Overview$$$$endDragPan$$() {
    this.$_moveDrawable$ != $JSCompiler_alias_NULL$$ && ("window" == this.$_moveDrawable$.getId() ? this.$finishWindowDrag$(0, 0) : this.$isHandle$(this.$_moveDrawable$) && (this.$finishHandleDrag$(), $dvt$$5$$.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$(this.$getHandleSize$())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$(this.$getHandleSize$()))), this.$resetCursors$()), this.$_moveDrawable$ = 
    $JSCompiler_alias_NULL$$, this.$_initX$ = -1)
  };
  $dvt$$5$$.$Overview$.prototype.$contDragPan$ = function $$dvt$$5$$$$Overview$$$$contDragPan$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(this.$_moveDrawable$ != $JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
      var $diffX$$4$$ = $DvtOverviewEventManager$$ - this.$_initX$, $diffY$$5$$ = $DvtOverviewParser$$ - this.$_initY$;
      this.$_initX$ = $DvtOverviewEventManager$$;
      this.$_initY$ = $DvtOverviewParser$$;
      "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$4$$, $diffY$$5$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? this.$handleLeftHandleDragPositioning$($dvt$$5$$, $diffX$$4$$, $diffY$$5$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($dvt$$5$$, $diffX$$4$$, $diffY$$5$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$HandleTouchStart$ = function $$dvt$$5$$$$Overview$$$$HandleTouchStart$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = $dvt$$5$$.touches;
    this.$_touchStartX$ = $DvtOverviewEventManager$$[0].pageX;
    this.$_touchStartY$ = $DvtOverviewEventManager$$[0].pageY;
    2 == $DvtOverviewEventManager$$.length && ($dvt$$5$$.preventDefault(), this.$_touchStartX2$ = $DvtOverviewEventManager$$[1].pageX, this.$_touchStartY2$ = $DvtOverviewEventManager$$[1].pageY, 20 > Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$)
  };
  $dvt$$5$$.$Overview$.prototype.$HandleTouchMove$ = function $$dvt$$5$$$$Overview$$$$HandleTouchMove$$($dvt$$5$$) {
    $dvt$$5$$.preventDefault();
    $dvt$$5$$ = $dvt$$5$$.touches;
    if(this.$_touchStartX2$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != $JSCompiler_alias_NULL$$) {
      50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$($JSCompiler_alias_NULL$$, $dvt$$5$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $dvt$$5$$[1].pageX, this.$_counter$ = 0)
    }else {
      var $DvtOverviewEventManager$$ = Math.abs(this.$_touchStartY$ - $dvt$$5$$[0].pageY);
      if(3 < Math.abs(this.$_touchStartX$ - $dvt$$5$$[0].pageX) || 3 < $DvtOverviewEventManager$$) {
        this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$
      }
    }
  };
  $dvt$$5$$.$Overview$.prototype.$HandleTouchEnd$ = function $$dvt$$5$$$$Overview$$$$HandleTouchEnd$$($dvt$$5$$) {
    this.$_touchStartX2$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != $JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY$ != $JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($dvt$$5$$, this.$_touchStartX$, this.$_touchStartY$);
    this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$Overview$.prototype.$HandleKeyDown$ = function $$dvt$$5$$$$Overview$$$$HandleKeyDown$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if($DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewParser$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$HandleKeyUp$ = function $$dvt$$5$$$$Overview$$$$HandleKeyUp$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if($DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$LEFT_ARROW$ || $DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === $dvt$$5$$.$KeyboardEvent$.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $DvtOverviewParser$$, $DvtOverviewParser$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$longScrollToPos$ = function $$dvt$$5$$$$Overview$$$$longScrollToPos$$($dvt$$5$$) {
    $dvt$$5$$ /= this.$_increment$;
    this.$isHorizontalRTL$() && ($dvt$$5$$ = 0 - $dvt$$5$$);
    this.$animateSlidingWindow$($dvt$$5$$)
  };
  $dvt$$5$$.$Overview$.prototype.$handleWindowDragPositioning$ = function $$dvt$$5$$$$Overview$$$$handleWindowDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$7$$) {
    this.$fireScrollEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$, $DvtOverviewParser$$, $deltaY$$7$$)
  };
  $dvt$$5$$.$Overview$.prototype.$finishWindowDrag$ = function $$dvt$$5$$$$Overview$$$$finishWindowDrag$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$fireScrollEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$, $DvtOverviewEventManager$$, $DvtOverviewParser$$)
  };
  $dvt$$5$$.$Overview$.prototype.$fireScrollEvent$ = function $$dvt$$5$$$$Overview$$$$fireScrollEvent$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$9$$) {
    var $newEndTime$$1_slidingWindow$$17$$ = this.$getSlidingWindow$(), $pos$$61$$ = this.$getSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = this.$_leftMargin$, $maxPos$$1$$ = this.$getMaximumPosition$();
    $DvtOverviewParser$$ = this.$isVertical$() ? $deltaY$$9$$ : $DvtOverviewParser$$;
    $pos$$61$$ + $DvtOverviewParser$$ <= $minPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$isHorizontalRTL$() ? $dvt$$5$$.$OverviewEvent$.$END_POS$ : $dvt$$5$$.$OverviewEvent$.$START_POS$) : $pos$$61$$ + $newStartTime$$1_scrollTo_size$$34$$ + $DvtOverviewParser$$ >= $maxPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$34$$), $newStartTime$$1_scrollTo_size$$34$$ = 
    this.$isHorizontalRTL$() ? $dvt$$5$$.$OverviewEvent$.$START_POS$ : $dvt$$5$$.$OverviewEvent$.$END_POS$) : (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $pos$$61$$ + $DvtOverviewParser$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$isHorizontalRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$34$$ - $pos$$61$$ - this.$_leftMargin$) * this.$_increment$ : ($pos$$61$$ - this.$_leftMargin$) * this.$_increment$);
    this.$ScrollTimeAxis$();
    $DvtOverviewEventManager$$ = new $dvt$$5$$.$OverviewEvent$($DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$.$setPosition$($newStartTime$$1_scrollTo_size$$34$$);
    this.$isHorizontalRTL$() ? ($newStartTime$$1_scrollTo_size$$34$$ = this.$getPositionDate$(this.$Width$ - ($pos$$61$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$(this.$Width$ - $pos$$61$$)) : ($newStartTime$$1_scrollTo_size$$34$$ = this.$getPositionDate$($pos$$61$$), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$($pos$$61$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$)));
    $DvtOverviewEventManager$$.$setNewStartTime$($newStartTime$$1_scrollTo_size$$34$$);
    $DvtOverviewEventManager$$.$setNewEndTime$($newEndTime$$1_slidingWindow$$17$$);
    this.dispatchEvent($DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$Overview$.prototype.$handleLeftHandleDragPositioning$ = function $$dvt$$5$$$$Overview$$$$handleLeftHandleDragPositioning$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $JSCompiler_alias_TRUE$$)
  };
  $dvt$$5$$.$Overview$.prototype.$handleRightHandleDragPositioning$ = function $$dvt$$5$$$$Overview$$$$handleRightHandleDragPositioning$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$handleLeftOrRightHandleDragPositioning$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $JSCompiler_alias_FALSE$$)
  };
  $dvt$$5$$.$Overview$.prototype.$handleLeftOrRightHandleDragPositioning$ = function $$dvt$$5$$$$Overview$$$$handleLeftOrRightHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $delta$$11_deltaY$$12$$, $isLeft$$5_newStartTime$$2$$) {
    var $evt$$45_size$$35$$ = this.$getOverviewSize$();
    $delta$$11_deltaY$$12$$ = this.$isVertical$() ? $delta$$11_deltaY$$12$$ : $DvtOverviewParser$$;
    if(0 != $delta$$11_deltaY$$12$$) {
      $DvtOverviewParser$$ = this.$getSlidingWindow$();
      var $windowPos$$ = this.$getSlidingWindowPos$($DvtOverviewParser$$), $windowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      if($isLeft$$5_newStartTime$$2$$) {
        if($windowSize$$ - $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $delta$$11_deltaY$$12$$ <= this.$_leftMargin$) {
          return
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if(0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$) {
          return
        }
        this.$setSlidingWindowPos$($DvtOverviewParser$$, $windowPos$$ + $delta$$11_deltaY$$12$$);
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ - $delta$$11_deltaY$$12$$)
      }else {
        if($windowSize$$ + $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $windowSize$$ + $delta$$11_deltaY$$12$$ >= this.$getMaximumPosition$()) {
          return
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if(0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$ + $windowSize$$) {
          return
        }
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ + $delta$$11_deltaY$$12$$)
      }
      this.$ScrollTimeAxis$();
      $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$getSlidingWindowSize$($DvtOverviewParser$$));
      $DvtOverviewEventManager$$ = $evt$$45_size$$35$$ * (this.$_end$ - this.$_start$) / ($DvtOverviewEventManager$$ - this.$_start$);
      $evt$$45_size$$35$$ = new $dvt$$5$$.$OverviewEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$);
      $evt$$45_size$$35$$.$setNewSize$($DvtOverviewEventManager$$);
      $evt$$45_size$$35$$.$setEndHandle$(this.$isHorizontalRTL$() ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$);
      $isLeft$$5_newStartTime$$2$$ ? $evt$$45_size$$35$$.$setExpand$(0 > $delta$$11_deltaY$$12$$) : $evt$$45_size$$35$$.$setExpand$(0 < $delta$$11_deltaY$$12$$);
      this.$isHorizontalRTL$() ? ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($DvtOverviewParser$$) + this.$getRectSize$($DvtOverviewParser$$))), $DvtOverviewParser$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($DvtOverviewParser$$))) : ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$)), $DvtOverviewParser$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$) + 
      this.$getRectSize$($DvtOverviewParser$$)));
      $evt$$45_size$$35$$.$setNewStartTime$($isLeft$$5_newStartTime$$2$$);
      $evt$$45_size$$35$$.$setNewEndTime$($DvtOverviewParser$$);
      this.dispatchEvent($evt$$45_size$$35$$)
    }
  };
  $dvt$$5$$.$Overview$.prototype.$finishHandleDrag$ = function $$dvt$$5$$$$Overview$$$$finishHandleDrag$$() {
    var $DvtOverviewEventManager$$ = this.$_start$, $DvtOverviewParser$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$36$$ = this.$getOverviewSize$(), $newEndTime$$3_slidingWindow$$19$$ = this.$getSlidingWindow$(), $newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)), $DvtOverviewEventManager$$ = $oldEndTime_size$$36$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$) / ($newStartTime$$3_time$$10$$ - $DvtOverviewEventManager$$), 
    $DvtOverviewParser$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$36$$ = this.$getPositionDate$(this.$_oldEndPos$);
    this.$isHorizontalRTL$() ? ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = 
    this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)));
    var $evt$$46$$ = new $dvt$$5$$.$OverviewEvent$($dvt$$5$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$);
    $evt$$46$$.$setOldSize$($oldSize$$);
    $evt$$46$$.$setNewSize$($DvtOverviewEventManager$$);
    $evt$$46$$.$setOldStartTime$($DvtOverviewParser$$);
    $evt$$46$$.$setOldEndTime$($oldEndTime_size$$36$$);
    $evt$$46$$.$setNewStartTime$($newStartTime$$3_time$$10$$);
    $evt$$46$$.$setNewEndTime$($newEndTime$$3_slidingWindow$$19$$);
    this.dispatchEvent($evt$$46$$)
  };
  $dvt$$5$$.$Overview$.prototype.$ScrollTimeAxis$ = function $$dvt$$5$$$$Overview$$$$ScrollTimeAxis$$() {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$(), $DvtOverviewParser$$ = $dvt$$5$$.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2, $left$$13$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$), $leftCenter$$1$$ = $left$$13$$ + $DvtOverviewParser$$, $DvtOverviewEventManager$$ = $left$$13$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$) - $DvtOverviewParser$$, $DvtOverviewParser$$ = this.$getLeftHandle$(), $rightHandle$$4$$ = this.$getRightHandle$(), $leftTopBar$$2$$ = 
    this.$getLeftTopBar$(), $rightTopBar$$2$$ = this.$getRightTopBar$(), $bottomBar$$2$$ = this.$getBottomBar$(), $topBar$$2$$ = this.$getTopBar$();
    this.$setLinePos$($DvtOverviewParser$$, $leftCenter$$1$$, $leftCenter$$1$$);
    this.$setLinePos$($rightHandle$$4$$, $DvtOverviewEventManager$$, $DvtOverviewEventManager$$);
    this.$setLinePos$($leftTopBar$$2$$, -1, $left$$13$$);
    this.$setLinePos$($rightTopBar$$2$$, this.$getLinePos1$($rightHandle$$4$$), -1);
    this.$setLinePos$($bottomBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
    this.$setLinePos$($topBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$))
  };
  $dvt$$5$$.$Overview$.prototype.dispatchEvent = function $$dvt$$5$$$$Overview$$$dispatchEvent$($DvtOverviewEventManager$$) {
    $dvt$$5$$.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$Overview$.prototype.$destroy$ = function $$dvt$$5$$$$Overview$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = $JSCompiler_alias_NULL$$);
    $dvt$$5$$.$OverviewUtils$.$supportsTouch$() ? (this.$removeEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHSTART$, this.$HandleTouchStart$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHMOVE$, this.$HandleTouchMove$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$TouchEvent$.$TOUCHEND$, this.$HandleTouchEnd$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, 
    this)) : (this.$removeEvtListener$($dvt$$5$$.$MouseEvent$.$MOUSEOVER$, this.$HandleShapeMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$MouseEvent$.$MOUSEOUT$, this.$HandleShapeMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$KeyboardEvent$.$KEYDOWN$, this.$HandleKeyDown$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$($dvt$$5$$.$KeyboardEvent$.$KEYUP$, 
    this.$HandleKeyUp$, $JSCompiler_alias_FALSE$$, this));
    $dvt$$5$$.$Overview$.$superclass$.$destroy$.call(this)
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtOverviewParser$$, $dvt$$5$$.$Obj$);
  $DvtOverviewParser$$.prototype.Init = $JSCompiler_set$$("$_view$");
  $DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($dvt$$5$$) {
    return this.$ParseRootAttributes$($dvt$$5$$)
  };
  $DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = {};
    $DvtOverviewParser$$.$animationOnClick$ = $DvtOverviewEventManager$$.animationOnClick;
    $DvtOverviewEventManager$$.startTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.start = $DvtOverviewEventManager$$.startTime);
    $DvtOverviewEventManager$$.endTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.end = $DvtOverviewEventManager$$.endTime);
    $DvtOverviewParser$$.start == $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.start = (new Date).getTime());
    if($DvtOverviewParser$$.end == $JSCompiler_alias_NULL$$ || $DvtOverviewParser$$.end <= $DvtOverviewParser$$.start) {
      $DvtOverviewParser$$.end = $DvtOverviewParser$$.start + 864E5
    }
    $DvtOverviewEventManager$$.currentTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.currentTime = $DvtOverviewEventManager$$.currentTime);
    $DvtOverviewEventManager$$.initialFocusTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$initialFocusTime$ = $DvtOverviewEventManager$$.initialFocusTime);
    $DvtOverviewParser$$.orientation = "horizontal";
    $DvtOverviewEventManager$$.orientation != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.orientation = $DvtOverviewEventManager$$.orientation);
    $DvtOverviewParser$$.$featuresOff$ = $DvtOverviewEventManager$$.featuresOff;
    $DvtOverviewParser$$.$minimumWindowSize$ = $DvtOverviewEventManager$$.minimumWindowSize;
    $DvtOverviewParser$$.$leftMargin$ = $DvtOverviewEventManager$$.leftMargin;
    $DvtOverviewParser$$.$rightMargin$ = $DvtOverviewEventManager$$.rightMargin;
    if($DvtOverviewEventManager$$.viewportEndTime != $JSCompiler_alias_NULL$$) {
      var $viewportEndTime$$ = $DvtOverviewEventManager$$.viewportEndTime, $viewportStartTime$$ = $DvtOverviewParser$$.start;
      $DvtOverviewEventManager$$.viewportStartTime != $JSCompiler_alias_NULL$$ && $DvtOverviewEventManager$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $DvtOverviewEventManager$$.viewportStartTime);
      $DvtOverviewParser$$.width = $DvtOverviewEventManager$$.viewportEndPos != $JSCompiler_alias_NULL$$ ? this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, $DvtOverviewEventManager$$.viewportEndPos) : this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
      $DvtOverviewParser$$.$renderStart$ = $viewportStartTime$$
    }else {
      $DvtOverviewParser$$.$renderStart$ = $DvtOverviewParser$$.start
    }
    0 == $DvtOverviewParser$$.width && ($DvtOverviewParser$$.width = 1E3);
    $DvtOverviewParser$$.$overviewPosition$ = "below";
    $DvtOverviewParser$$.$selectionMode$ = "none";
    $DvtOverviewParser$$.$isRtl$ = $dvt$$5$$.$Agent$.$isRightToLeft$(this.$_view$.$getCtx$()).toString();
    $DvtOverviewEventManager$$.rtl != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$isRtl$ = $DvtOverviewEventManager$$.rtl.toString());
    $DvtOverviewParser$$.$handleFillColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$handleTextureColor$ = "#B3C6DB";
    $DvtOverviewParser$$.$windowBackgroundColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$windowBackgroundAlpha$ = 1;
    $DvtOverviewParser$$.$windowBorderTopStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderRightStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderBottomStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderLeftStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderTopColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderRightColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderBottomColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderLeftColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$overviewBackgroundColor$ = "#E6ECF3";
    $DvtOverviewParser$$.$currentTimeIndicatorColor$ = "#C000D1";
    $DvtOverviewParser$$.$timeIndicatorColor$ = "#BCC7D2";
    $DvtOverviewParser$$.$timeAxisBarColor$ = "#e5e5e5";
    $DvtOverviewParser$$.$timeAxisBarOpacity$ = 1;
    $DvtOverviewParser$$.$leftFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$leftFilterPanelAlpha$ = 0.7;
    $DvtOverviewParser$$.$rightFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$rightFilterPanelAlpha$ = 0.7;
    $DvtOverviewEventManager$$.style != $JSCompiler_alias_NULL$$ && ($DvtOverviewEventManager$$.style.handleFillColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleFillColor$ = $DvtOverviewEventManager$$.style.handleFillColor), $DvtOverviewEventManager$$.style.handleTextureColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleTextureColor$ = $DvtOverviewEventManager$$.style.handleTextureColor), $DvtOverviewEventManager$$.style.handleBackgroundImage != $JSCompiler_alias_NULL$$ && 
    ($DvtOverviewParser$$.$handleBackgroundImage$ = $DvtOverviewEventManager$$.style.handleBackgroundImage), $DvtOverviewEventManager$$.style.handleWidth != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleWidth$ = $DvtOverviewEventManager$$.style.handleWidth), $DvtOverviewEventManager$$.style.handleHeight != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleHeight$ = $DvtOverviewEventManager$$.style.handleHeight), $DvtOverviewEventManager$$.style.windowBackgroundColor != $JSCompiler_alias_NULL$$ && 
    ($DvtOverviewParser$$.$windowBackgroundColor$ = $DvtOverviewEventManager$$.style.windowBackgroundColor), $DvtOverviewEventManager$$.style.windowBackgroundAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBackgroundAlpha$ = $DvtOverviewEventManager$$.style.windowBackgroundAlpha), $DvtOverviewEventManager$$.style.windowBorderTopStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderTopStyle$ = $DvtOverviewEventManager$$.style.windowBorderTopStyle), $DvtOverviewEventManager$$.style.windowBorderRightStyle != 
    $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderRightStyle$ = $DvtOverviewEventManager$$.style.windowBorderRightStyle), $DvtOverviewEventManager$$.style.windowBorderBottomStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderBottomStyle$ = $DvtOverviewEventManager$$.style.windowBorderBottomStyle), $DvtOverviewEventManager$$.style.windowBorderLeftStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderLeftStyle$ = $DvtOverviewEventManager$$.style.windowBorderLeftStyle), 
    $DvtOverviewEventManager$$.style.windowBorderTopColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderTopColor$ = $DvtOverviewEventManager$$.style.windowBorderTopColor), $DvtOverviewEventManager$$.style.windowBorderRightColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderRightColor$ = $DvtOverviewEventManager$$.style.windowBorderRightColor), $DvtOverviewEventManager$$.style.windowBorderBottomColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderBottomColor$ = 
    $DvtOverviewEventManager$$.style.windowBorderBottomColor), $DvtOverviewEventManager$$.style.windowBorderLeftColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderLeftColor$ = $DvtOverviewEventManager$$.style.windowBorderLeftColor), $DvtOverviewEventManager$$.style.overviewBackgroundColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$overviewBackgroundColor$ = $DvtOverviewEventManager$$.style.overviewBackgroundColor), $DvtOverviewEventManager$$.style.currentTimeIndicatorColor != 
    $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$currentTimeIndicatorColor$ = $DvtOverviewEventManager$$.style.currentTimeIndicatorColor), $DvtOverviewEventManager$$.style.timeIndicatorColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$timeIndicatorColor$ = $DvtOverviewEventManager$$.style.timeIndicatorColor), $DvtOverviewEventManager$$.style.leftFilterPanelColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$leftFilterPanelColor$ = $DvtOverviewEventManager$$.style.leftFilterPanelColor), 
    $DvtOverviewEventManager$$.style.leftFilterPanelAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$leftFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.leftFilterPanelAlpha), $DvtOverviewEventManager$$.style.rightFilterPanelColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$rightFilterPanelColor$ = $DvtOverviewEventManager$$.style.rightFilterPanelColor), $DvtOverviewEventManager$$.style.rightFilterPanelAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$rightFilterPanelAlpha$ = 
    $DvtOverviewEventManager$$.style.rightFilterPanelAlpha));
    return $DvtOverviewParser$$
  };
  $DvtOverviewParser$$.prototype.$calculateWidth$ = function $$DvtOverviewParser$$$$$calculateWidth$$($dvt$$5$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
    $dvt$$5$$ = $viewportEndPos$$ * ($DvtOverviewEventManager$$ - $dvt$$5$$);
    $DvtOverviewParser$$ = $viewportEndTime$$1$$ - $DvtOverviewParser$$;
    return 0 == $dvt$$5$$ || 0 == $DvtOverviewParser$$ ? 0 : $dvt$$5$$ / $DvtOverviewParser$$
  };
  $dvt$$5$$.$OverviewEvent$ = function $$dvt$$5$$$$OverviewEvent$$($DvtOverviewEventManager$$) {
    this.Init($dvt$$5$$.$OverviewEvent$.$TYPE$);
    this.$_subtype$ = $DvtOverviewEventManager$$
  };
  $dvt$$5$$.$Obj$.$createSubclass$($dvt$$5$$.$OverviewEvent$, $dvt$$5$$.$BaseComponentEvent$);
  $dvt$$5$$.$OverviewEvent$.$TYPE$ = "overview";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$ = "dropCallback";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ = "scrollTime";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_POS$ = "scrollPos";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ = "scrollEnd";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$ = "rangeChange";
  $dvt$$5$$.$OverviewEvent$.$SUBTYPE_RANGECHANGING$ = "rangeChanging";
  $dvt$$5$$.$OverviewEvent$.$TIME_KEY$ = "time";
  $dvt$$5$$.$OverviewEvent$.$POS_KEY$ = "pos";
  $dvt$$5$$.$OverviewEvent$.$OLD_SIZE_KEY$ = "oldSize";
  $dvt$$5$$.$OverviewEvent$.$NEW_SIZE_KEY$ = "newSize";
  $dvt$$5$$.$OverviewEvent$.$OLD_START_TIME_KEY$ = "oldStartTime";
  $dvt$$5$$.$OverviewEvent$.$NEW_START_TIME_KEY$ = "newStartTime";
  $dvt$$5$$.$OverviewEvent$.$OLD_END_TIME_KEY$ = "oldEndTime";
  $dvt$$5$$.$OverviewEvent$.$NEW_END_TIME_KEY$ = "newEndTime";
  $dvt$$5$$.$OverviewEvent$.$EXPAND_KEY$ = "expand";
  $dvt$$5$$.$OverviewEvent$.$END_HANDLE_KEY$ = "endHandle";
  $dvt$$5$$.$OverviewEvent$.$START_POS$ = -1;
  $dvt$$5$$.$OverviewEvent$.$END_POS$ = -2;
  $dvt$$5$$.$OverviewEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  $dvt$$5$$.$OverviewEvent$.prototype.setTime = function $$dvt$$5$$$$OverviewEvent$$$setTime$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$TIME_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.getTime = function $$dvt$$5$$$$OverviewEvent$$$getTime$() {
    return this.$getParamValue$($dvt$$5$$.$OverviewEvent$.$TIME_KEY$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setOldSize$ = function $$dvt$$5$$$$OverviewEvent$$$$setOldSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$OLD_SIZE_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setNewSize$ = function $$dvt$$5$$$$OverviewEvent$$$$setNewSize$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$NEW_SIZE_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setOldStartTime$ = function $$dvt$$5$$$$OverviewEvent$$$$setOldStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$OLD_START_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setNewStartTime$ = function $$dvt$$5$$$$OverviewEvent$$$$setNewStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$NEW_START_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$getNewStartTime$ = function $$dvt$$5$$$$OverviewEvent$$$$getNewStartTime$$() {
    return this.$getParamValue$($dvt$$5$$.$OverviewEvent$.$NEW_START_TIME_KEY$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setOldEndTime$ = function $$dvt$$5$$$$OverviewEvent$$$$setOldEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$OLD_END_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setNewEndTime$ = function $$dvt$$5$$$$OverviewEvent$$$$setNewEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$NEW_END_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$getNewEndTime$ = function $$dvt$$5$$$$OverviewEvent$$$$getNewEndTime$$() {
    return this.$getParamValue$($dvt$$5$$.$OverviewEvent$.$NEW_END_TIME_KEY$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setExpand$ = function $$dvt$$5$$$$OverviewEvent$$$$setExpand$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$EXPAND_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setEndHandle$ = function $$dvt$$5$$$$OverviewEvent$$$$setEndHandle$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$END_HANDLE_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$setPosition$ = function $$dvt$$5$$$$OverviewEvent$$$$setPosition$$($DvtOverviewEventManager$$) {
    this.$addParam$($dvt$$5$$.$OverviewEvent$.$POS_KEY$, $DvtOverviewEventManager$$)
  };
  $dvt$$5$$.$OverviewEvent$.prototype.$getPosition$ = function $$dvt$$5$$$$OverviewEvent$$$$getPosition$$() {
    return this.$getParamValue$($dvt$$5$$.$OverviewEvent$.$POS_KEY$)
  };
  $dvt$$5$$.$Obj$.$createSubclass$($DvtOverviewEventManager$$, $dvt$$5$$.$EventManager$);
  $DvtOverviewEventManager$$.prototype.$addListeners$ = function $$DvtOverviewEventManager$$$$$addListeners$$($DvtOverviewParser$$) {
    $DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $DvtOverviewParser$$);
    $dvt$$5$$.$SvgDocumentUtils$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragStart$ = function $$DvtOverviewEventManager$$$$$_onDragStart$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtOverviewEventManager$$) : this.$_onMouseDragStart$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragMove$ = function $$DvtOverviewEventManager$$$$$_onDragMove$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtOverviewEventManager$$) : this.$_onMouseDragMove$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragEnd$ = function $$DvtOverviewEventManager$$$$$_onDragEnd$$($DvtOverviewEventManager$$) {
    return $dvt$$5$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtOverviewEventManager$$) : this.$_onMouseDragEnd$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_getRelativePosition$ = function $$DvtOverviewEventManager$$$$$_getRelativePosition$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$5$$.$Point$($DvtOverviewEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtOverviewParser$$ - this.$_stageAbsolutePosition$.y)
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtOverviewEventManager$$$$$_onMouseDragStart$$($DvtOverviewEventManager$$) {
    if($DvtOverviewEventManager$$.button != $dvt$$5$$.$MouseEvent$.$RIGHT_CLICK_BUTTON$) {
      var $DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY);
      $dvt$$5$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
      this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
      return this.$_overview$.$beginDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y)
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtOverviewEventManager$$$$$_onMouseDragMove$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = this.$_getRelativePosition$($dvt$$5$$.pageX, $dvt$$5$$.pageY);
    $dvt$$5$$.stopPropagation();
    this.$_overview$.$contDragPan$($dvt$$5$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y);
    return $JSCompiler_alias_TRUE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtOverviewEventManager$$$$$_onMouseDragEnd$$($dvt$$5$$) {
    $dvt$$5$$.stopPropagation();
    this.$_overview$.$endDragPan$();
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtOverviewEventManager$$$$$_onTouchDragStart$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = $dvt$$5$$.touches;
    $dvt$$5$$.stopPropagation();
    return 1 == $DvtOverviewEventManager$$.length ? ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), $dvt$$5$$.preventDefault(), this.$_overview$.$beginDragPan$($dvt$$5$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y)) : $JSCompiler_alias_FALSE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtOverviewEventManager$$$$$_onTouchDragMove$$($dvt$$5$$) {
    var $DvtOverviewEventManager$$ = $dvt$$5$$.touches;
    1 == $DvtOverviewEventManager$$.length && ($DvtOverviewEventManager$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$[0].pageX, $DvtOverviewEventManager$$[0].pageY), this.$_overview$.$contDragPan$($dvt$$5$$, $DvtOverviewEventManager$$.x, $DvtOverviewEventManager$$.y), $dvt$$5$$.preventDefault());
    $dvt$$5$$.stopPropagation()
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtOverviewEventManager$$$$$_onTouchDragEnd$$($DvtOverviewEventManager$$) {
    this.$_overview$.$endDragPan$();
    $dvt$$5$$.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$5$$.$exportProperty$($dvt$$5$$, "Overview", $dvt$$5$$.$Overview$);
  $dvt$$5$$.$exportProperty$($dvt$$5$$.$Overview$.prototype, "render", $dvt$$5$$.$Overview$.prototype.$render$)
})(dvt);

  return dvt;
});
