/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function(dvt) {
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

(function($dvt$$2$$) {
  function $DvtSparkChartEventManager$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.dispatchEvent, $dvt$$2$$);
    this.$_sparkChart$ = $dvt$$2$$
  }
  function $DvtSparkChartDefaults$$() {
    this.Init({skyros:$DvtSparkChartDefaults$$.$VERSION_1$, alta:$DvtSparkChartDefaults$$.$SKIN_ALTA$})
  }
  function $DvtSparkChartAutomation$$($dvt$$2$$) {
    this.$_sparkChart$ = $dvt$$2$$
  }
  function $DvtChartPieLabelUtils$$() {
  }
  function $DvtChartPieLabelInfo$$() {
    this.$_init$()
  }
  function $DvtChartPieRenderUtils$$() {
  }
  function $DvtChartDataChangeFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChangeRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChangeLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChangeBar$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChangeAbstract$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDataChange$$($dvt$$2$$) {
    this.$Options$ = $dvt$$2$$.$Options$;
    this.$Peers$ = $dvt$$2$$.$Peers$;
    this.$SeriesStyleArray$ = $dvt$$2$$.$SeriesStyleArray$;
    this.$Cache$ = $dvt$$2$$.$Cache$;
    this.$pieChart$ = $dvt$$2$$.$pieChart$;
    this.$_optionsCache$ = $dvt$$2$$.$_optionsCache$;
    this.$_renderCache$ = $dvt$$2$$.$_renderCache$
  }
  function $DvtChartAnimOnDC$$() {
  }
  function $DvtChartAnimOnDisplay$$() {
  }
  function $DvtChartPieSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartPie$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
  }
  function $DvtChartFunnelSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$)
  }
  function $DvtChartDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  }
  function $DvtChartRangeMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    this.$_markerSize$ = $DvtChartTypeUtils$$;
    this.$_isInvisible$ = $DvtChartPieLabelUtils$$;
    this.$_drawPath$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  }
  function $DvtChartPolarBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtChartPieLabelInfo$$.$clone$();
    this.$_bbox$ = $JSCompiler_alias_NULL$$;
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$) * $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$)
  }
  function $DvtChartOverview$$($dvt$$2$$) {
    this.Init($dvt$$2$$.$getCtx$(), $dvt$$2$$.$processEvent$, $dvt$$2$$);
    this.$_parentChart$ = $dvt$$2$$;
    this.$_chart$ = $dvt$$2$$.$overview$ ? $dvt$$2$$.$overview$.$_chart$ : $JSCompiler_alias_NULL$$;
    this.$_id$ = $dvt$$2$$.getId() + "_overview"
  }
  function $DvtChartLineMarker$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartStyleUtils$$);
    $DvtChartTypeUtils$$ && this.$setStroke$($DvtChartLineMarker$$.$DEFAULT_STROKE$)
  }
  function $DvtChartLineArea$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_chart$ = $dvt$$2$$;
    this.$_bArea$ = $DvtSparkChartEventManager$$;
    this.$_availSpace$ = $DvtSparkChartDefaults$$;
    this.$_baseline$ = $DvtSparkChartAutomation$$;
    this.$_fill$ = $DvtChartStyleUtils$$;
    this.$_stroke$ = $DvtChartTypeUtils$$;
    this.$_type$ = $DvtChartPieLabelUtils$$;
    this.$_baseType$ = $DvtChartPieRenderUtils$$ ? $DvtChartPieRenderUtils$$ : $DvtChartPieLabelUtils$$;
    this.$_indicatorMap$ = {};
    this.$setCoords$($DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$)
  }
  function $DvtChartCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.x = $dvt$$2$$;
    this.$y1$ = $DvtSparkChartEventManager$$;
    this.$y2$ = $DvtSparkChartDefaults$$;
    this.$groupIndex$ = $DvtSparkChartAutomation$$;
    this.group = $DvtChartStyleUtils$$;
    this.$filtered$ = $DvtChartTypeUtils$$
  }
  function $DvtChartCandlestick$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$) {
    this.Init($dvt$$2$$);
    $DvtSparkChartDefaults$$ = Math.max(2 * Math.round($DvtSparkChartDefaults$$ / 2), 1);
    var $DvtChartPieLabelInfo$$ = Math.min(2 * Math.ceil($DvtChartCandlestick$$.$_BAR_WIDTH$ * $DvtSparkChartDefaults$$ / 2), $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = Math.round($DvtSparkChartEventManager$$) - $DvtSparkChartDefaults$$ / 2;
    $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$ + $DvtSparkChartDefaults$$;
    $DvtChartTypeUtils$$ != $JSCompiler_alias_NULL$$ && $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtSparkChartEventManager$$ = Math.round($DvtSparkChartEventManager$$) - $DvtChartPieLabelInfo$$ / 2, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$ + $DvtChartPieLabelInfo$$, this.$_rangeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtSparkChartEventManager$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$, 
    $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$]), this.$addChild$(this.$_rangeShape$));
    this.$_changeShape$ = new $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, [$DvtChartPieRenderUtils$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$]);
    this.$addChild$(this.$_changeShape$);
    this.$setPixelHinting$()
  }
  function $DvtChartBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.Init($dvt$$2$$.$getCtx$());
    this.$_bHoriz$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$);
    this.$_bStacked$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$);
    this.$_barGapRatio$ = $DvtChartStyleUtils$$.$getBarGapRatio$($dvt$$2$$);
    this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$);
    this.$_axisCoord$ = $DvtSparkChartEventManager$$;
    this.$_setBarCoords$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $JSCompiler_alias_TRUE$$)
  }
  function $DvtChartAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  }
  function $DvtChartSelectableRectangularPolygon$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_x1$ = Math.min($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_x2$ = Math.max($DvtSparkChartEventManager$$[0], $DvtSparkChartEventManager$$[4]);
    this.$_y1$ = Math.min($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.$_y2$ = Math.max($DvtSparkChartEventManager$$[1], $DvtSparkChartEventManager$$[5]);
    this.Init($dvt$$2$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $DvtSparkChartDefaults$$)
  }
  function $DvtChartSelectableWedge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$) {
    this.Init($dvt$$2$$, $JSCompiler_alias_NULL$$, $DvtChartDataChangeFunnelSlice$$);
    this.$setWedgeParams$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$)
  }
  function $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartDefaults$$() {
    this.Init({skyros:$DvtChartDefaults$$.$VERSION_1$, alta:$DvtChartDefaults$$.$SKIN_ALTA$, next:$DvtChartDefaults$$.$SKIN_NEXT$})
  }
  function $DvtChartDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.id = $dvt$$2$$;
    this.series = $DvtSparkChartEventManager$$;
    this.group = $DvtSparkChartDefaults$$
  }
  function $DvtChartRefObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  }
  function $DvtChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  }
  function $DvtChartKeyboardHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$)
  }
  function $DvtChartEventManager$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    this.$_chart$ = $DvtSparkChartEventManager$$;
    this.$_dragMode$ = $JSCompiler_alias_NULL$$;
    this.$_dragButtonsVisible$ = $dvt$$2$$.$Agent$.$isTouchDevice$();
    this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = $JSCompiler_alias_NULL$$
  }
  function $DvtChartAutomation$$($dvt$$2$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_options$ = this.$_chart$.$getOptions$();
    this.$_legend$ = this.$_chart$.$legend$;
    this.$_xAxis$ = this.$_chart$.$xAxis$;
    this.$_yAxis$ = this.$_chart$.$yAxis$;
    this.$_y2Axis$ = this.$_chart$.$y2Axis$;
    this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : $JSCompiler_alias_NULL$$;
    this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : $JSCompiler_alias_NULL$$;
    this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : $JSCompiler_alias_NULL$$;
    this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : $JSCompiler_alias_NULL$$
  }
  $dvt$$2$$.$Chart$ = function $$dvt$$2$$$$Chart$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.Init($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$Chart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$Chart$.newInstance = function $$dvt$$2$$$$Chart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Chart$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
  };
  $dvt$$2$$.$Chart$.$getDefaults$ = function $$dvt$$2$$$$Chart$$$getDefaults$$($dvt$$2$$) {
    return(new $DvtChartDefaults$$).$getDefaults$($dvt$$2$$)
  };
  $dvt$$2$$.$Chart$.prototype.Init = function $$dvt$$2$$$$Chart$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Chart$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    this.$Defaults$ = new $DvtChartDefaults$$;
    this.$EventManager$ = new $DvtChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
    this.setId("chart1000" + Math.floor(1E9 * Math.random()));
    this.$pieCenterDiv$ = this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = this.$_animation$ = $JSCompiler_alias_NULL$$;
    this.$Peers$ = [];
    this.$SeriesStyleArray$ = [];
    this.$Cache$ = {};
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
    this.$_rawOptions$ = this.$_dataLabels$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Chart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$Chart$$$$GetComponentDescription$$() {
    var $DvtSparkChartEventManager$$ = this.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART"), $DvtSparkChartAutomation$$ = "", $DvtChartStyleUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER");
    $DvtSparkChartEventManager$$.title.text && ($DvtSparkChartAutomation$$ += this.$Options$.title.text, $DvtSparkChartEventManager$$.subtitle.text && ($DvtSparkChartAutomation$$ += $DvtChartStyleUtils$$ + this.$Options$.subtitle.text));
    $DvtSparkChartEventManager$$.footnote.text && ($DvtSparkChartAutomation$$ = 0 == $DvtSparkChartAutomation$$.length ? this.$Options$.footnote.text : $DvtSparkChartAutomation$$.concat($DvtChartStyleUtils$$, this.$Options$.footnote.text));
    return 0 < $DvtSparkChartAutomation$$.length ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$, "labelAndValue", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]) : $DvtSparkChartDefaults$$
  };
  $dvt$$2$$.$Chart$.prototype.$SetOptions$ = function $$dvt$$2$$$$Chart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    this.$clearOptionsCache$();
    $DvtSparkChartEventManager$$ ? (this.$_rawOptions$ = $DvtSparkChartEventManager$$, this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), $DvtChartDataUtils$$.$processDataObject$(this), $dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = 
    this.$GetDefaults$());
    $DvtSparkChartEventManager$$ = this.$Options$.selectionMode;
    this.$_selectionHandler$ = "single" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtSparkChartEventManager$$ ? new $dvt$$2$$.$SelectionHandler$($dvt$$2$$.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
    if($DvtSparkChartEventManager$$ = this.$Options$._spb) {
      this.$_popupBehaviors$ = {};
      for(var $DvtSparkChartDefaults$$ in $DvtSparkChartEventManager$$) {
        for(var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartStyleUtils$$++) {
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$] || (this.$_popupBehaviors$[$DvtSparkChartDefaults$$] = []);
          var $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$];
          this.$_popupBehaviors$[$DvtSparkChartDefaults$$].push(new $dvt$$2$$.$ShowPopupBehavior$($DvtChartTypeUtils$$.popupId, $DvtChartTypeUtils$$.triggerType, $DvtChartTypeUtils$$.alignId, $DvtChartTypeUtils$$.align))
        }
      }
    }
  };
  $dvt$$2$$.$Chart$.prototype.$render$ = function $$dvt$$2$$$$Chart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$clearRenderCache$();
    var $DvtChartPieLabelUtils$$ = this.$getCtx$(), $DvtChartPieLabelInfo$$ = this.$Options$ ? this.$Options$.animationOnDataChange : "none", $DvtChartPieRenderUtils$$ = "none" != $DvtChartPieLabelInfo$$ ? new $DvtChartDataChange$$(this) : $JSCompiler_alias_NULL$$, $DvtChartDataChangeFunnelSlice$$ = this.$__cacheChartFocus$();
    this.$__cleanUp$();
    this.$SetOptions$($DvtSparkChartEventManager$$);
    !isNaN($DvtSparkChartDefaults$$) && !isNaN($DvtSparkChartAutomation$$) && (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Container$($DvtChartPieLabelUtils$$);
    this.$addChild$($DvtSparkChartDefaults$$);
    $DvtChartRenderer$$.$render$(this, $DvtSparkChartDefaults$$, new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    $DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
    this.$_stopAnimation$();
    var $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getAnimationDuration$(this);
    var $DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$Rectangle$(0, 0, this.$Width$, this.$Height$), $DvtChartPieUtils$$ = $JSCompiler_alias_FALSE$$;
    this.$_container$ ? "none" != $DvtChartPieLabelInfo$$ && $DvtSparkChartEventManager$$ && ((this.$_animation$ = $dvt$$2$$.$BlackBoxAnimationHandler$.$getCombinedAnimation$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, this.$_container$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$)) ? $DvtChartPieUtils$$ = $JSCompiler_alias_TRUE$$ : "auto" == $DvtChartPieLabelInfo$$ && this.$getPlotArea$() && ($DvtSparkChartEventManager$$ = this.$_plotAreaSpace$, 
    this.$_delContainer$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.$w$, $DvtSparkChartEventManager$$.$h$)), this.$_animation$ = $DvtChartAnimOnDC$$.$createAnimation$($DvtChartPieRenderUtils$$, this, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $DvtChartMarkerUtils$$ && 
    (this.$_animation$ = $dvt$$2$$.$BlackBoxAnimationHandler$.$getInAnimation$($DvtChartPieLabelUtils$$, $DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$), !this.$_animation$ && "auto" == $DvtChartMarkerUtils$$ && (this.$_animation$ = $DvtChartAnimOnDisplay$$.$createAnimation$(this, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$)));
    this.$_animation$ && (this.$EventManager$.$removeListeners$(this), $dvt$$2$$.$Playable$.$appendOnEnd$(this.$_animation$, this.$_onAnimationEnd$, this), this.$_animation$.play());
    $DvtChartPieUtils$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = $JSCompiler_alias_NULL$$);
    this.$_container$ = $DvtSparkChartDefaults$$;
    this.$_dataCursor$ = $DvtChartRenderer$$.$renderDataCursor$(this);
    this.$UpdateAriaAttributes$();
    this.$__restoreChartFocus$($DvtChartDataChangeFunnelSlice$$);
    this.$_animation$ || this.$RenderComplete$()
  };
  $dvt$$2$$.$Chart$.prototype.$destroy$ = function $$dvt$$2$$$$Chart$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = $JSCompiler_alias_NULL$$);
    this.$_stopAnimation$();
    $dvt$$2$$.$Chart$.$superclass$.$destroy$.call(this)
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUp$ = function $$dvt$$2$$$$Chart$$$$__cleanUp$$() {
    this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = $JSCompiler_alias_NULL$$);
    this.$EventManager$ && this.$EventManager$.$hideHoverFeedback$();
    this.$pieCenterDiv$ && (this.$getCtx$().$_parentDiv$.removeChild(this.$pieCenterDiv$), this.$pieCenterDiv$ = $JSCompiler_alias_NULL$$);
    this.$Peers$ = [];
    this.$yScrollbar$ = this.$xScrollbar$ = $JSCompiler_alias_NULL$$;
    this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$panButton$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$zoomButton$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$selectButton$ = $JSCompiler_alias_NULL$$);
    this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = $JSCompiler_alias_NULL$$;
    this.$clearCache$()
  };
  $dvt$$2$$.$Chart$.prototype.$__cleanUpAxisAndPlotArea$ = function $$dvt$$2$$$$Chart$$$$__cleanUpAxisAndPlotArea$$() {
    this.$EventManager$.$hideHoverFeedback$();
    this.$Peers$ = [];
    this.$_container$.removeChild(this.$xAxis$);
    this.$_container$.removeChild(this.$yAxis$);
    this.$_container$.removeChild(this.$y2Axis$);
    this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$($JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$);
    this.$_plotArea$ = $JSCompiler_alias_NULL$$;
    this.$clearCache$()
  };
  $dvt$$2$$.$Chart$.prototype.$_onAnimationEnd$ = function $$dvt$$2$$$$Chart$$$$_onAnimationEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
    this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
    this.$_delContainer$ = $JSCompiler_alias_NULL$$;
    this.$_animationStopped$ || this.$RenderComplete$();
    this.$_animationStopped$ = this.$_animation$ = $JSCompiler_alias_NULL$$;
    this.$EventManager$.$addListeners$(this)
  };
  $dvt$$2$$.$Chart$.prototype.$_stopAnimation$ = function $$dvt$$2$$$$Chart$$$$_stopAnimation$$() {
    this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop())
  };
  $dvt$$2$$.$Chart$.prototype.$CreateKeyboardHandler$ = function $$dvt$$2$$$$Chart$$$$CreateKeyboardHandler$$($dvt$$2$$) {
    return new $DvtChartKeyboardHandler$$($dvt$$2$$, this)
  };
  $dvt$$2$$.$Chart$.prototype.$getAutomation$ = function $$dvt$$2$$$$Chart$$$$getAutomation$$() {
    return new $DvtChartAutomation$$(this)
  };
  $dvt$$2$$.$Chart$.prototype.$getValuesAt$ = function $$dvt$$2$$$$Chart$$$$getValuesAt$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_plotAreaSpace$, $DvtSparkChartAutomation$$ = $dvt$$2$$ - $DvtSparkChartDefaults$$.x, $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$.y, $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isPolar$(this), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isHorizontal$(this);
    return $DvtChartPieLabelUtils$$ ? ($DvtSparkChartAutomation$$ -= $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartStyleUtils$$ -= $DvtSparkChartDefaults$$.$h$ / 2, $DvtSparkChartDefaults$$ = Math.sqrt($DvtSparkChartAutomation$$ * $DvtSparkChartAutomation$$ + $DvtChartStyleUtils$$ * $DvtChartStyleUtils$$), $DvtSparkChartAutomation$$ = Math.atan2($DvtSparkChartAutomation$$, -$DvtChartStyleUtils$$), 0 > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ += 2 * Math.PI), {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($DvtSparkChartAutomation$$) : 
    $JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtSparkChartDefaults$$) : $JSCompiler_alias_NULL$$}) : {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($DvtChartPieLabelInfo$$ ? $DvtChartStyleUtils$$ : $DvtSparkChartAutomation$$) : $JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$) : $JSCompiler_alias_NULL$$, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($DvtChartPieLabelInfo$$ ? 
    $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$) : $JSCompiler_alias_NULL$$}
  };
  $dvt$$2$$.$Chart$.prototype.filter = function $$dvt$$2$$$$Chart$$$filter$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartEventUtils$$.$setVisibility$(this, $dvt$$2$$, "out" == $DvtSparkChartEventManager$$ ? "hidden" : "visible");
    this.$render$(this.$Options$)
  };
  $dvt$$2$$.$Chart$.prototype.$highlight$ = function $$dvt$$2$$$$Chart$$$$highlight$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().highlightedCategories = $dvt$$2$$.$JsonUtils$.$clone$($DvtSparkChartEventManager$$);
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
    this.$legend$ && this.$legend$.$highlight$($DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$highlight$($DvtSparkChartEventManager$$);
    this.$overview$ && this.$overview$.$_chart$.$highlight$($DvtSparkChartEventManager$$)
  };
  $dvt$$2$$.$Chart$.prototype.select = function $$dvt$$2$$$$Chart$$$select$($DvtSparkChartEventManager$$) {
    this.$getOptions$().selection = $dvt$$2$$.$JsonUtils$.$clone$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this);
    $DvtChartEventUtils$$.$setInitialSelection$(this, $DvtSparkChartEventManager$$);
    this.$pieChart$ && this.$pieChart$.$setInitialSelection$()
  };
  $dvt$$2$$.$Chart$.prototype.$positionDataCursor$ = function $$dvt$$2$$$$Chart$$$$positionDataCursor$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getEventManager$().$_dataCursorHandler$;
    if($DvtSparkChartDefaults$$) {
      if($DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$xAxis$ && $DvtSparkChartEventManager$$.x != $JSCompiler_alias_NULL$$ ? this.$xAxis$.$getCoordAt$($DvtSparkChartEventManager$$.x) : $JSCompiler_alias_NULL$$, $DvtChartStyleUtils$$ = $JSCompiler_alias_NULL$$;
        $DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && $DvtSparkChartEventManager$$.y != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y) : this.$y2Axis$ && $DvtSparkChartEventManager$$.y2 != $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$ = this.$yAxis$.$getBoundedCoordAt$($DvtSparkChartEventManager$$.y2)) : $DvtChartStyleUtils$$ = this.$yAxis$ && $DvtSparkChartEventManager$$.y != $JSCompiler_alias_NULL$$ ? this.$yAxis$.$getCoordAt$($DvtSparkChartEventManager$$.y) : 
        $JSCompiler_alias_NULL$$;
        if($DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && $DvtChartStyleUtils$$ != $JSCompiler_alias_NULL$$) {
          $DvtSparkChartEventManager$$ = this.$_plotAreaSpace$;
          $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$), $DvtSparkChartEventManager$$);
          $DvtSparkChartDefaults$$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x + $DvtSparkChartAutomation$$.x, $DvtSparkChartEventManager$$.y + $DvtSparkChartAutomation$$.y), $JSCompiler_alias_TRUE$$);
          return
        }
      }
      $DvtSparkChartDefaults$$.$processEnd$($JSCompiler_alias_TRUE$$)
    }
  };
  $dvt$$2$$.$Chart$.prototype.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
  $dvt$$2$$.$Chart$.prototype.$clearCache$ = function $$dvt$$2$$$$Chart$$$$clearCache$$() {
    this.$Cache$ = {}
  };
  $dvt$$2$$.$Chart$.prototype.$getFromCache$ = function $$dvt$$2$$$$Chart$$$$getFromCache$$($dvt$$2$$) {
    return this.$Cache$[$dvt$$2$$]
  };
  $dvt$$2$$.$Chart$.prototype.$putToCache$ = function $$dvt$$2$$$$Chart$$$$putToCache$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$Cache$[$dvt$$2$$] = $DvtSparkChartEventManager$$
  };
  $dvt$$2$$.$Chart$.prototype.$getFromCachedMap$ = function $$dvt$$2$$$$Chart$$$$getFromCachedMap$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$getFromCache$("isRange");
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = {}, this.$putToCache$("isRange", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$[$dvt$$2$$]
  };
  $dvt$$2$$.$Chart$.prototype.$putToCachedMap$ = function $$dvt$$2$$$$Chart$$$$putToCachedMap$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getFromCache$("isRange");
    $DvtSparkChartDefaults$$ || ($DvtSparkChartDefaults$$ = {}, this.$putToCache$("isRange", $DvtSparkChartDefaults$$));
    $DvtSparkChartDefaults$$[$dvt$$2$$] = $DvtSparkChartEventManager$$
  };
  $dvt$$2$$.$Chart$.prototype.$getFromCachedMap2D$ = function $$dvt$$2$$$$Chart$$$$getFromCachedMap2D$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = this.$getFromCache$($DvtSparkChartEventManager$$);
    $DvtChartStyleUtils$$ || ($DvtChartStyleUtils$$ = new $dvt$$2$$.$Map2D$, this.$putToCache$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$));
    return $DvtChartStyleUtils$$.get($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
  };
  $dvt$$2$$.$Chart$.prototype.$putToCachedMap2D$ = function $$dvt$$2$$$$Chart$$$$putToCachedMap2D$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartTypeUtils$$ = this.$getFromCache$($DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$ || ($DvtChartTypeUtils$$ = new $dvt$$2$$.$Map2D$, this.$putToCache$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$));
    $DvtChartTypeUtils$$.put($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  };
  $dvt$$2$$.$Chart$.prototype.$processEvent$ = function $$dvt$$2$$$$Chart$$$$processEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.type;
    if("categoryHide" == $DvtSparkChartAutomation$$ || "categoryShow" == $DvtSparkChartAutomation$$) {
      this.filter($DvtSparkChartEventManager$$.category, "categoryHide" == $DvtSparkChartAutomation$$ ? "out" : "in")
    }else {
      if("categoryHighlight" == $DvtSparkChartAutomation$$) {
        this != $DvtSparkChartDefaults$$ && this.$highlight$($DvtSparkChartEventManager$$.categories), this.$legend$ && this.$legend$ != $DvtSparkChartDefaults$$ && this.$legend$.$processEvent$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
      }else {
        if("selection" == $DvtSparkChartAutomation$$) {
          $DvtSparkChartEventManager$$ = this.$_processSelectionEvent$($DvtSparkChartEventManager$$)
        }else {
          if($DvtSparkChartAutomation$$ == $dvt$$2$$.$PanZoomEvent$.$TYPE$) {
            $DvtSparkChartEventManager$$ = this.$_processPanZoomEvent$($DvtSparkChartEventManager$$)
          }else {
            if($DvtSparkChartAutomation$$ == $dvt$$2$$.$MarqueeEvent$.$TYPE$) {
              $DvtSparkChartEventManager$$ = this.$_processMarqueeEvent$($DvtSparkChartEventManager$$)
            }else {
              if($DvtSparkChartAutomation$$ == $dvt$$2$$.$OverviewEvent$.$TYPE$) {
                var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getSubType$();
                if($DvtChartStyleUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$) {
                  return
                }
                $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$getNewStartTime$(), $DvtSparkChartEventManager$$.$getNewEndTime$(), $DvtChartStyleUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ || $DvtChartStyleUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_SCROLL_END$ || $DvtChartStyleUtils$$ == $dvt$$2$$.$OverviewEvent$.$SUBTYPE_RANGECHANGE$, $DvtSparkChartDefaults$$)
              }else {
                $DvtSparkChartAutomation$$ == $dvt$$2$$.$SimpleScrollbarEvent$.$TYPE$ ? $DvtSparkChartEventManager$$ = this.$_processScrollbarEvent$($DvtSparkChartEventManager$$.$_newMin$, $DvtSparkChartEventManager$$.$_newMax$, $DvtSparkChartEventManager$$.$getSubtype$() == $dvt$$2$$.$SimpleScrollbarEvent$.$SUBTYPE_END$, $DvtSparkChartDefaults$$) : "adfShowPopup" == $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = this.$_processShowPopupEvent$($DvtSparkChartEventManager$$))
              }
            }
          }
        }
      }
    }
    if("selection" == $DvtSparkChartAutomation$$) {
      var $DvtChartStyleUtils$$ = this.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.selection, $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getCurrentSelection$(this);
      $DvtSparkChartEventManager$$.complete && ($DvtChartStyleUtils$$.selection = $DvtChartTypeUtils$$);
      var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$ : [], $DvtChartTypeUtils$$ = $DvtChartTypeUtils$$ ? $DvtChartTypeUtils$$ : [], $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = {};
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartPieLabelInfo$$[$DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id] = $JSCompiler_alias_TRUE$$
      }
      $DvtChartStyleUtils$$ = {};
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTypeUtils$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartStyleUtils$$[$DvtChartTypeUtils$$[$DvtChartPieLabelUtils$$].id] = $JSCompiler_alias_TRUE$$
      }
      var $DvtChartPieRenderUtils$$ = {};
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTypeUtils$$.length;$DvtChartPieLabelUtils$$++) {
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$[$DvtChartPieLabelUtils$$].id;
        $DvtChartPieLabelInfo$$[$DvtChartDataChangeFunnelSlice$$] || ($DvtChartPieRenderUtils$$[$DvtChartDataChangeFunnelSlice$$] = $JSCompiler_alias_TRUE$$)
      }
      $DvtChartTypeUtils$$ = {};
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].id, $DvtChartStyleUtils$$[$DvtChartPieLabelInfo$$] || ($DvtChartTypeUtils$$[$DvtChartPieLabelInfo$$] = $JSCompiler_alias_TRUE$$)
      }
      $DvtSparkChartEventManager$$.addedSet = $DvtChartPieRenderUtils$$;
      $DvtSparkChartEventManager$$.removedSet = $DvtChartTypeUtils$$
    }
    $DvtSparkChartEventManager$$ && this.dispatchEvent($DvtSparkChartEventManager$$)
  };
  $dvt$$2$$.$Chart$.prototype.$_processSelectionEvent$ = function $$dvt$$2$$$$Chart$$$$_processSelectionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$processIds$(this, $DvtSparkChartEventManager$$.selection);
    this.$_updateOverviewSelection$();
    return $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$)
  };
  $dvt$$2$$.$Chart$.prototype.$_processPanZoomEvent$ = function $$dvt$$2$$$$Chart$$$$_processPanZoomEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_END$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_ZOOM$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_END$, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PAN_START$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$PanZoomEvent$.$SUBTYPE_PINCH_START$;
    $dvt$$2$$.$Agent$.$isTouchDevice$() && ($DvtSparkChartDefaults$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
    $DvtChartEventUtils$$.$isLiveScroll$(this) ? ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $DvtSparkChartEventManager$$.$dxMin$, $DvtSparkChartEventManager$$.$dxMax$, $DvtSparkChartEventManager$$.$dyMin$, $DvtSparkChartEventManager$$.$dyMax$), $DvtSparkChartDefaults$$ || (this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$))) : ($DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, 
    $DvtSparkChartEventManager$$.$dxMinTotal$, $DvtSparkChartEventManager$$.$dxMaxTotal$, $DvtSparkChartEventManager$$.$dyMinTotal$, $DvtSparkChartEventManager$$.$dyMaxTotal$), this.$_setScrollbarViewport$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ && this.$_setViewport$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
    $DvtSparkChartAutomation$$ && ($DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = $JSCompiler_alias_NULL$$));
    return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, 
    $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$)
  };
  $dvt$$2$$.$Chart$.prototype.$_processMarqueeEvent$ = function $$dvt$$2$$$$Chart$$$$_processMarqueeEvent$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getSubtype$(), $DvtSparkChartAutomation$$ = this.$EventManager$;
    $DvtChartEventUtils$$.$adjustBounds$($DvtSparkChartEventManager$$);
    if($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getSelectionHandler$();
      if($DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_START$) {
        this.$_initSelection$ = $DvtSparkChartEventManager$$.ctrlKey ? $DvtSparkChartAutomation$$.$getSelectedIds$() : []
      }else {
        var $DvtChartStyleUtils$$ = $DvtChartEventUtils$$.$getBoundedObjects$(this, $DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$processInitialSelections$(this.$_initSelection$, this.$getChartObjPeers$());
        $DvtSparkChartAutomation$$.$processGroupSelection$($DvtChartStyleUtils$$)
      }
      $DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$getSelectedObjects$(this, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, $JSCompiler_alias_FALSE$$);
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newChartSelectionEvent$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$, $DvtSparkChartEventManager$$.$y2Min$, 
      $DvtSparkChartEventManager$$.$y2Max$);
      $DvtSparkChartDefaults$$ == $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$ && this.$_updateOverviewSelection$();
      return $DvtSparkChartEventManager$$
    }
    if($DvtSparkChartAutomation$$.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$) {
      if($DvtSparkChartDefaults$$ != $dvt$$2$$.$MarqueeEvent$.$SUBTYPE_END$) {
        return $JSCompiler_alias_NULL$$
      }
      $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getAxisBounds$(this, $DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$);
      this.$_setViewport$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$);
      this.$_setScrollbarViewport$($DvtSparkChartEventManager$$);
      $DvtChartRenderer$$.$_setEventHandlers$(this);
      return $DvtChartTypeUtils$$.$isBLAC$(this) ? $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($JSCompiler_alias_TRUE$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $DvtSparkChartEventManager$$.$startGroup$, $DvtSparkChartEventManager$$.$endGroup$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$) : $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($JSCompiler_alias_TRUE$$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$, $JSCompiler_alias_NULL$$, 
      $JSCompiler_alias_NULL$$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$)
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Chart$.prototype.$_processScrollbarEvent$ = function $$dvt$$2$$$$Chart$$$$_processScrollbarEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$ == this.$yScrollbar$ ? this.$yAxis$ : this.$xAxis$;
    $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$linearToActual$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$linearToActual$($DvtSparkChartDefaults$$);
    if($DvtChartEventUtils$$.$isLiveScroll$(this) || $DvtSparkChartAutomation$$) {
      $DvtChartStyleUtils$$ == this.$yScrollbar$ ? this.$_setViewport$({$yMin$:$DvtSparkChartEventManager$$, $yMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$) : this.$_setViewport$({$xMin$:$DvtSparkChartEventManager$$, $xMax$:$DvtSparkChartDefaults$$}, $DvtSparkChartAutomation$$)
    }
    if($DvtChartStyleUtils$$ == this.$yScrollbar$) {
      return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }
    $DvtChartStyleUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $dvt$$2$$.$EventFactory$.$newChartViewportChangeEvent$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$.$startGroup$, $DvtChartStyleUtils$$.$endGroup$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$)
  };
  $dvt$$2$$.$Chart$.prototype.$_processShowPopupEvent$ = function $$dvt$$2$$$$Chart$$$$_processShowPopupEvent$$($DvtSparkChartEventManager$$) {
    if("mouseHover" != $DvtSparkChartEventManager$$.triggerType && this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) {
      var $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$processIds$(this, this.$getSelectionHandler$().$getSelectedIds$());
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$EventFactory$.$newAdfShowPopupEvent$($DvtSparkChartEventManager$$.showPopupBehavior, $DvtSparkChartEventManager$$.launcherBounds, $DvtSparkChartEventManager$$.launcherId);
      $DvtSparkChartEventManager$$[$dvt$$2$$.$BaseComponentEvent$.$CLIENT_ROW_KEY$] = $DvtSparkChartDefaults$$
    }
    return $DvtSparkChartEventManager$$
  };
  $dvt$$2$$.$Chart$.prototype.$_updateOverviewSelection$ = function $$dvt$$2$$$$Chart$$$$_updateOverviewSelection$$() {
    if(this.$overview$) {
      var $dvt$$2$$ = this.$overview$.$_chart$;
      $dvt$$2$$.$getOptions$().selection = $DvtChartDataUtils$$.$getCurrentSelection$(this);
      $dvt$$2$$.$render$()
    }
  };
  $dvt$$2$$.$Chart$.prototype.$changeOption$ = function $$dvt$$2$$$$Chart$$$$changeOption$$($DvtSparkChartEventManager$$) {
    this.$getOptions$().dataCursorPosition = $DvtSparkChartEventManager$$;
    this.dispatchEvent($dvt$$2$$.$EventFactory$.$newOptionChangeEvent$($DvtSparkChartEventManager$$))
  };
  $dvt$$2$$.$Chart$.prototype.$registerObject$ = function $$dvt$$2$$$$Chart$$$$registerObject$$($dvt$$2$$) {
    this.$Peers$.push($dvt$$2$$)
  };
  $dvt$$2$$.$Chart$.prototype.$getObjects$ = $JSCompiler_get$$("$Peers$");
  $dvt$$2$$.$Chart$.prototype.$getChartObjPeers$ = function $$dvt$$2$$$$Chart$$$$getChartObjPeers$$() {
    for(var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$])
    }
    return $dvt$$2$$
  };
  $dvt$$2$$.$Chart$.prototype.$getRefObjPeers$ = function $$dvt$$2$$$$Chart$$$$getRefObjPeers$$() {
    for(var $dvt$$2$$ = [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$Peers$.length;$DvtSparkChartEventManager$$++) {
      this.$Peers$[$DvtSparkChartEventManager$$] instanceof $DvtChartRefObjPeer$$ && $dvt$$2$$.push(this.$Peers$[$DvtSparkChartEventManager$$])
    }
    return $dvt$$2$$
  };
  $dvt$$2$$.$Chart$.prototype.$getObject$ = function $$dvt$$2$$$$Chart$$$$getObject$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$Peers$.length;$DvtSparkChartDefaults$$++) {
      if(this.$Peers$[$DvtSparkChartDefaults$$] instanceof $DvtChartObjPeer$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getSeriesIndex$() == $dvt$$2$$ && this.$Peers$[$DvtSparkChartDefaults$$].$getGroupIndex$() == $DvtSparkChartEventManager$$) {
        return this.$Peers$[$DvtSparkChartDefaults$$]
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Chart$.prototype.getWidth = $JSCompiler_get$$("$Width$");
  $dvt$$2$$.$Chart$.prototype.getHeight = $JSCompiler_get$$("$Height$");
  $dvt$$2$$.$Chart$.prototype.$getPlotArea$ = $JSCompiler_get$$("$_plotArea$");
  $dvt$$2$$.$Chart$.prototype.$setPlotArea$ = $JSCompiler_set$$("$_plotArea$");
  $dvt$$2$$.$Chart$.prototype.$getType$ = function $$dvt$$2$$$$Chart$$$$getType$$() {
    return this.$getOptions$().type
  };
  $dvt$$2$$.$Chart$.prototype.$getSkin$ = function $$dvt$$2$$$$Chart$$$$getSkin$$() {
    return this.$getOptions$().skin
  };
  $dvt$$2$$.$Chart$.prototype.$getGapWidthRatio$ = function $$dvt$$2$$$$Chart$$$$getGapWidthRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return $dvt$$2$$.layout.gapWidthRatio !== $JSCompiler_alias_NULL$$ ? $dvt$$2$$.layout.gapWidthRatio : Math.min(this.$Width$ / 400, 1)
  };
  $dvt$$2$$.$Chart$.prototype.$getGapHeightRatio$ = function $$dvt$$2$$$$Chart$$$$getGapHeightRatio$$() {
    var $dvt$$2$$ = this.$getOptions$();
    return $dvt$$2$$.layout.gapHeightRatio !== $JSCompiler_alias_NULL$$ ? $dvt$$2$$.layout.gapHeightRatio : Math.min(this.$Height$ / 300, 1)
  };
  $dvt$$2$$.$Chart$.prototype.$getSelectionHandler$ = $JSCompiler_get$$("$_selectionHandler$");
  $dvt$$2$$.$Chart$.prototype.$isSelectionSupported$ = function $$dvt$$2$$$$Chart$$$$isSelectionSupported$$() {
    return this.$_selectionHandler$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $dvt$$2$$.$Chart$.prototype.$getShowPopupBehaviors$ = function $$dvt$$2$$$$Chart$$$$getShowPopupBehaviors$$($dvt$$2$$) {
    return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$dvt$$2$$] : $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Chart$.prototype.$bringToFrontOfSelection$ = function $$dvt$$2$$$$Chart$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1))
    }
    (!$dvt$$2$$.$isSelected$() || !$dvt$$2$$.$IsShowingHoverEffect$) && this.$_numSelectedObjsInFront$++
  };
  $dvt$$2$$.$Chart$.prototype.$pushToBackOfSelection$ = function $$dvt$$2$$$$Chart$$$$pushToBackOfSelection$$($dvt$$2$$) {
    0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.getParent();
    if($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
      0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$, $DvtSparkChartDefaults$$))
    }
  };
  $dvt$$2$$.$Chart$.prototype.$_setViewport$ = function $$dvt$$2$$$$Chart$$$$_setViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $dvt$$2$$.$xMax$ != $JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $dvt$$2$$.$xMax$);
    $dvt$$2$$.$xMin$ != $JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $dvt$$2$$.$xMin$);
    $DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = $JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = $JSCompiler_alias_NULL$$, this.$Options$._initialZoomed = $JSCompiler_alias_FALSE$$) : ($dvt$$2$$.$yMax$ != $JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMax = $dvt$$2$$.$yMax$), $dvt$$2$$.$yMin$ != $JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $dvt$$2$$.$yMin$));
    this.$Options$._duringAnimation = !$DvtSparkChartEventManager$$;
    $DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$)
  };
  $dvt$$2$$.$Chart$.prototype.$_setScrollbarViewport$ = function $$dvt$$2$$$$Chart$$$$_setScrollbarViewport$$($dvt$$2$$) {
    if(this.$xAxis$ && $dvt$$2$$.$xMin$ != $JSCompiler_alias_NULL$$ && $dvt$$2$$.$xMax$ != $JSCompiler_alias_NULL$$) {
      var $DvtSparkChartEventManager$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMin$), $DvtSparkChartDefaults$$ = this.$xAxis$.$actualToLinear$($dvt$$2$$.$xMax$);
      this.$overview$ && this.$overview$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      this.$xScrollbar$ && this.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }
    this.$yAxis$ && ($dvt$$2$$.$yMin$ != $JSCompiler_alias_NULL$$ && $dvt$$2$$.$yMax$ != $JSCompiler_alias_NULL$$) && ($DvtSparkChartEventManager$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMin$), $dvt$$2$$ = this.$yAxis$.$actualToLinear$($dvt$$2$$.$yMax$), this.$yScrollbar$ && this.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$, $dvt$$2$$))
  };
  $dvt$$2$$.$Chart$.prototype.$__setAxisSpace$ = function $$dvt$$2$$$$Chart$$$$__setAxisSpace$$($dvt$$2$$) {
    this.$_axisSpace$ = $dvt$$2$$;
    var $DvtSparkChartEventManager$$;
    $DvtChartAxisUtils$$.$isAxisRendered$(this, "x") ? ($DvtSparkChartEventManager$$ = 0.8 * $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - 4 * $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "x")) : $DvtChartAxisUtils$$.$isAxisRendered$(this, "y") ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$ - $DvtChartAxisUtils$$.$getTickLabelHeight$(this, "y")) : ($DvtSparkChartEventManager$$ = $dvt$$2$$.$w$, $dvt$$2$$ = $dvt$$2$$.$h$);
    this.$_radius$ = Math.min($DvtSparkChartEventManager$$, $dvt$$2$$) / 2
  };
  $dvt$$2$$.$Chart$.prototype.$__setPlotAreaSpace$ = $JSCompiler_set$$("$_plotAreaSpace$");
  $dvt$$2$$.$Chart$.prototype.$__setAreaContainer$ = $JSCompiler_set$$("$_areaContainer$");
  $dvt$$2$$.$Chart$.prototype.$getRadius$ = $JSCompiler_get$$("$_radius$");
  $dvt$$2$$.$Chart$.prototype.$showDragButtons$ = function $$dvt$$2$$$$Chart$$$$showDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$($JSCompiler_alias_TRUE$$)
  };
  $dvt$$2$$.$Chart$.prototype.$hideDragButtons$ = function $$dvt$$2$$$$Chart$$$$hideDragButtons$$() {
    this.$dragButtons$ && this.$dragButtons$.$setVisible$($JSCompiler_alias_FALSE$$)
  };
  $dvt$$2$$.$Chart$.prototype.$addDataLabel$ = function $$dvt$$2$$$$Chart$$$$addDataLabel$$($dvt$$2$$) {
    this.$getDataLabels$().push($dvt$$2$$)
  };
  $dvt$$2$$.$Chart$.prototype.$getDataLabels$ = function $$dvt$$2$$$$Chart$$$$getDataLabels$$() {
    this.$_dataLabels$ || (this.$_dataLabels$ = []);
    return this.$_dataLabels$
  };
  $dvt$$2$$.$Chart$.prototype.$__cacheChartFocus$ = function $$dvt$$2$$$$Chart$$$$__cacheChartFocus$$() {
    var $dvt$$2$$ = this.$EventManager$.$getFocus$();
    if($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$isShowingKeyboardFocusEffect$()
    }
    if(this.$xAxis$) {
      var $DvtSparkChartDefaults$$ = this.$xAxis$.$getKeyboardFocus$();
      if($DvtSparkChartDefaults$$) {
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$isShowingKeyboardFocusEffect$()
      }
    }
    if(this.$legend$) {
      var $DvtChartStyleUtils$$ = this.$legend$.$getKeyboardFocus$();
      if($DvtChartStyleUtils$$) {
        var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$isShowingKeyboardFocusEffect$()
      }
    }
    return{$chartFocus$:$dvt$$2$$, $chartShowingFocusEffect$:$DvtSparkChartEventManager$$, $axisFocus$:$DvtSparkChartDefaults$$, $axisShowingFocusEffect$:$DvtSparkChartAutomation$$, $legendFocus$:$DvtChartStyleUtils$$, $legendShowingFocusEffect$:$DvtChartTypeUtils$$}
  };
  $dvt$$2$$.$Chart$.prototype.$__restoreChartFocus$ = function $$dvt$$2$$$$Chart$$$$__restoreChartFocus$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isOverview$(this) && !$DvtChartTypeUtils$$.$isSpark$(this)) {
      var $DvtSparkChartEventManager$$ = [this];
      this.$xAxis$ && this.$xAxis$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$xAxis$);
      this.$legend$ && this.$legend$.$isNavigable$() && $DvtSparkChartEventManager$$.push(this.$legend$);
      this.$getCtx$().$setKeyboardFocusArray$($DvtSparkChartEventManager$$);
      if($dvt$$2$$.$chartFocus$) {
        for(var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this), $DvtSparkChartDefaults$$ = $JSCompiler_alias_FALSE$$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
          var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].getId();
          if($DvtChartStyleUtils$$ instanceof $DvtChartDataItem$$ && $DvtChartStyleUtils$$.$equals$($dvt$$2$$.$chartFocus$.getId())) {
            this.$EventManager$.$setFocusObj$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]);
            $dvt$$2$$.$chartShowingFocusEffect$ && $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$showKeyboardFocusEffect$();
            $DvtSparkChartDefaults$$ = $JSCompiler_alias_TRUE$$;
            break
          }
        }
        $DvtSparkChartDefaults$$ || this.$EventManager$.$setFocusObj$(this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($DvtSparkChartEventManager$$))
      }
      $dvt$$2$$.$axisFocus$ && (this.$xAxis$.$setKeyboardFocus$($dvt$$2$$.$axisFocus$, $dvt$$2$$.$axisShowingFocusEffect$), $dvt$$2$$.$axisShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$xAxis$));
      $dvt$$2$$.$legendFocus$ && (this.$legend$.$setKeyboardFocus$($dvt$$2$$.$legendFocus$, $dvt$$2$$.$legendShowingFocusEffect$), $dvt$$2$$.$legendShowingFocusEffect$ && this.$getCtx$().$setCurrentKeyboardFocus$(this.$legend$))
    }
  };
  $dvt$$2$$.$Chart$.$_copyActiveDataProperties$ = function $$dvt$$2$$$$Chart$$$_copyActiveDataProperties$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ in $dvt$$2$$) {
      $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] = $dvt$$2$$[$DvtSparkChartDefaults$$]
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $JSCompiler_alias_NULL$$;
    if($dvt$$2$$.$isDescendantOf$(this.$_xAxis$)) {
      return $DvtSparkChartEventManager$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$), this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "xAxis")
    }
    if($dvt$$2$$.$isDescendantOf$(this.$_yAxis$)) {
      return $DvtSparkChartEventManager$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$), this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "yAxis")
    }
    if($dvt$$2$$.$isDescendantOf$(this.$_y2Axis$)) {
      return $DvtSparkChartEventManager$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($dvt$$2$$), this.$_convertAxisSubIdToChartSubId$($DvtSparkChartEventManager$$, "y2Axis")
    }
    if($dvt$$2$$.$isDescendantOf$(this.$_legend$)) {
      return $dvt$$2$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($dvt$$2$$), this.$_convertLegendSubIdToChartSubId$($dvt$$2$$)
    }
    if(($dvt$$2$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($dvt$$2$$)) && "pie" == this.$_options$.type) {
      return"dataItem[" + $dvt$$2$$.$getSeriesIndex$() + "]"
    }
    if($dvt$$2$$ instanceof $DvtChartObjPeer$$) {
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$getSeriesIndex$();
      $dvt$$2$$ = $dvt$$2$$.$getGroupIndex$();
      if($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && 0 <= $dvt$$2$$ && "funnel" != this.$_options$.type) {
        return"dataItem[" + $DvtSparkChartEventManager$$ + "][" + $dvt$$2$$ + "]"
      }
      if($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && $dvt$$2$$ == $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return"dataItem[" + $DvtSparkChartEventManager$$ + "]"
      }
      if($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && ($dvt$$2$$ == $JSCompiler_alias_NULL$$ || 0 > $dvt$$2$$)) {
        return"series[" + $DvtSparkChartEventManager$$ + "]"
      }
    }else {
      if($dvt$$2$$ instanceof $DvtChartRefObjPeer$$) {
        return $DvtSparkChartEventManager$$ = $dvt$$2$$.$_axisType$, $dvt$$2$$ = $dvt$$2$$.$getIndex$(), $DvtSparkChartEventManager$$ && 0 <= $dvt$$2$$ ? $DvtSparkChartEventManager$$ + ":referenceObject[" + $dvt$$2$$ + "]" : $JSCompiler_alias_NULL$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$_convertLegendSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertLegendSubIdToChartSubId$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    if($DvtSparkChartEventManager$$ = this.$_legendAutomation$.$getLegendItem$($DvtSparkChartEventManager$$, $dvt$$2$$)) {
      for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_options$.series.length;$DvtSparkChartDefaults$$++) {
        if(this.$_options$.series[$DvtSparkChartDefaults$$].name == $DvtSparkChartEventManager$$.text) {
          return"series[" + $DvtSparkChartDefaults$$ + "]"
        }
      }
      return"legend:" + $dvt$$2$$
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$_convertAxisSubIdToChartSubId$ = function $$DvtChartAutomation$$$$$_convertAxisSubIdToChartSubId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if("title" == $dvt$$2$$ && $DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$ + ":" + $dvt$$2$$
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("["));
    return $DvtSparkChartDefaults$$ ? "group" + $DvtSparkChartDefaults$$ : $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($DvtSparkChartEventManager$$) {
    if($DvtSparkChartEventManager$$ == $dvt$$2$$.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_chart$, $DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : $JSCompiler_alias_NULL$$)
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.indexOf("]"), $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.indexOf(":");
    if(0 < $DvtSparkChartDefaults$$ && 0 < $DvtSparkChartAutomation$$ || 0 < $DvtChartPieLabelUtils$$) {
      $DvtChartStyleUtils$$ = 0 > $DvtChartPieLabelUtils$$ ? $DvtSparkChartEventManager$$.substring(0, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$.substring(0, $DvtChartPieLabelUtils$$);
      if("group" == $DvtChartStyleUtils$$) {
        return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$)
      }
      if("series" == $DvtChartStyleUtils$$) {
        return $DvtSparkChartEventManager$$ = this.$_convertToLegendSubId$($DvtSparkChartEventManager$$), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$)
      }
      if("legend" == $DvtSparkChartEventManager$$.substring(0, $DvtChartPieLabelUtils$$)) {
        return $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieLabelUtils$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($DvtSparkChartEventManager$$)
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartDefaults$$ + 1, $DvtSparkChartAutomation$$);
      if("xAxis" == $DvtChartStyleUtils$$ || "yAxis" == $DvtChartStyleUtils$$ || "y2Axis" == $DvtChartStyleUtils$$) {
        if($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.substring($DvtChartPieLabelUtils$$ + 1), "title" == $DvtChartPieLabelUtils$$) {
          if("xAxis" == $DvtChartStyleUtils$$) {
            return this.$_xAxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$)
          }
          if("yAxis" == $DvtChartStyleUtils$$) {
            return this.$_yAxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$)
          }
          if("y2Axis" == $DvtChartStyleUtils$$) {
            return this.$_y2AxisAutomation$.$getDomElementForSubId$($DvtChartPieLabelUtils$$)
          }
        }else {
          if($DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.indexOf("["), $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.indexOf("]"), "referenceObject" == $DvtChartPieLabelUtils$$.substring(0, $DvtChartStyleUtils$$) && ($DvtChartStyleUtils$$ = this.$_getRefObjPeer$($DvtChartPieLabelUtils$$.substring($DvtChartStyleUtils$$ + 1, $DvtChartTypeUtils$$)))) {
            return $DvtChartStyleUtils$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
      if("pie" == this.$_options$.type && ($DvtChartStyleUtils$$ = this.$_chart$.$pieChart$.$getSliceDisplayable$($DvtSparkChartDefaults$$))) {
        return $DvtChartStyleUtils$$.$getElem$()
      }
      if("funnel" == this.$_options$.type) {
        var $DvtChartPieLabelInfo$$ = $DvtChartFunnelRenderer$$.$_GROUP_INDEX$
      }else {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.substring($DvtSparkChartAutomation$$ + 1), $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.indexOf("["), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.indexOf("]"), 0 <= $DvtChartStyleUtils$$ && 0 <= $DvtChartTypeUtils$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.substring($DvtChartStyleUtils$$ + 1, $DvtChartTypeUtils$$))
      }
      if($DvtChartStyleUtils$$ = this.$_getChartObjPeer$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$)) {
        return $DvtChartStyleUtils$$.$getDisplayables$()[0].$getElem$()
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = this.$_chart$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$(), $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getGroupIndex$();
      if($DvtChartStyleUtils$$ == $dvt$$2$$ && $DvtChartTypeUtils$$ == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$_getRefObjPeer$ = function $$DvtChartAutomation$$$$$_getRefObjPeer$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = this.$_chart$.$getRefObjPeers$(), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
      if($dvt$$2$$ == $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].$getIndex$()) {
        return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$]
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$_convertToLegendSubId$ = function $$DvtChartAutomation$$$$$_convertToLegendSubId$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.substring($dvt$$2$$.indexOf("[") + 1, $dvt$$2$$.indexOf("]"));
    var $DvtSparkChartEventManager$$ = this.$_legend$.$getOptions$();
    return"section" + this.$_legendAutomation$.$getIndicesFromSeries$(this.$_options$.series[$dvt$$2$$], $DvtSparkChartEventManager$$)
  };
  $DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
      $DvtSparkChartEventManager$$ = 0
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? {borderColor:$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), color:$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), label:$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $dvt$$2$$), tooltip:$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    $JSCompiler_alias_FALSE$$), value:$DvtChartDataUtils$$.getValue(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), open:$DvtSparkChartDefaults$$.open, close:$DvtSparkChartDefaults$$.close, high:$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), low:$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), volume:$DvtSparkChartDefaults$$.volume, x:$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$), 
    y:$DvtSparkChartDefaults$$.y, z:$DvtSparkChartDefaults$$.z, min:$DvtSparkChartDefaults$$.min, max:$DvtSparkChartDefaults$$.max, group:$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $DvtSparkChartEventManager$$), series:$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $dvt$$2$$), selected:$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, $dvt$$2$$, $DvtSparkChartEventManager$$)} : $JSCompiler_alias_NULL$$
  };
  $DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$getGroup$(this.$_chart$, $dvt$$2$$)
  };
  $DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($dvt$$2$$) {
    return this.$_options$.series[$dvt$$2$$].name
  };
  $DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
    return $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)
  };
  $DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
    return this.$_options$.series.length
  };
  $DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
    return this.$_options$.title.text
  };
  $DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
    var $DvtSparkChartEventManager$$ = this.$_legend$.$_bounds$, $DvtSparkChartDefaults$$ = this.$_chart$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    return{bounds:{x:$DvtSparkChartDefaults$$.x, y:$DvtSparkChartDefaults$$.y, width:$DvtSparkChartEventManager$$.$w$, height:$DvtSparkChartEventManager$$.$h$}, title:this.$_legend$.$getOptions$().title}
  };
  $DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
    var $dvt$$2$$ = this.$_chart$.$_plotAreaSpace$;
    return{bounds:{x:$dvt$$2$$.x, y:$dvt$$2$$.y, width:$dvt$$2$$.$w$, height:$dvt$$2$$.$h$}}
  };
  $DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
    return this.$_getAxis$("x")
  };
  $DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
    return this.$_getAxis$("y")
  };
  $DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
    return this.$_getAxis$("y2")
  };
  $DvtChartAutomation$$.prototype.$_getAxis$ = function $$DvtChartAutomation$$$$$_getAxis$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = "x" == $DvtSparkChartEventManager$$ ? this.$_xAxis$ : "y" == $DvtSparkChartEventManager$$ ? this.$_yAxis$ : this.$_y2Axis$;
    if($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_bounds$, $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y)), $DvtChartPieLabelUtils$$ = this.$_chart$;
      return{bounds:{x:$DvtChartStyleUtils$$.x, y:$DvtChartStyleUtils$$.y, width:$DvtSparkChartAutomation$$.$w$, height:$DvtSparkChartAutomation$$.$h$}, title:this.$_options$[$DvtSparkChartEventManager$$ + "Axis"].title, getPreferredSize:function($dvt$$2$$, $DvtSparkChartAutomation$$) {
        var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.position, $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtChartPieLabelUtils$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtChartPieLabelUtils$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtChartPieLabelUtils$$) ? 
        2 : 0;
        "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$ ? ($DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartStyleUtils$$, $dvt$$2$$, $DvtSparkChartAutomation$$ - $DvtChartPieRenderUtils$$ - $DvtChartDataChangeFunnelSlice$$), $DvtChartStyleUtils$$.$h$ = Math.ceil($DvtChartStyleUtils$$.$h$ + $DvtChartPieRenderUtils$$ + $DvtChartDataChangeFunnelSlice$$)) : ($DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartStyleUtils$$, $dvt$$2$$ - 
        $DvtChartPieRenderUtils$$ - $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$), $DvtChartStyleUtils$$.$w$ = Math.ceil($DvtChartStyleUtils$$.$w$ + $DvtChartPieRenderUtils$$ + $DvtChartDataChangeFunnelSlice$$));
        return{width:$DvtChartStyleUtils$$.$w$, height:$DvtChartStyleUtils$$.$h$}
      }}
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Automation$.prototype.$IsTooltipElement$ = function $$dvt$$2$$$$Automation$$$$IsTooltipElement$$($DvtSparkChartEventManager$$) {
    return($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.getAttribute("id")) && (0 == $DvtSparkChartEventManager$$.indexOf($DvtChartDataCursor$$.$TOOLTIP_ID$) || 0 == $DvtSparkChartEventManager$$.indexOf($dvt$$2$$.$HtmlTooltipManager$.$_TOOLTIP_DIV_ID$)) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $dvt$$2$$.$Bundle$.$addDefaultStrings$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtChartEventManager$$.$DRAG_MODE_PAN$ = "pan";
  $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ = "zoom";
  $DvtChartEventManager$$.$DRAG_MODE_SELECT$ = "select";
  $DvtChartEventManager$$.$DRAG_MODE_OFF$ = "off";
  $DvtChartEventManager$$.prototype.$addListeners$ = function $$DvtChartEventManager$$$$$addListeners$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SvgDocumentUtils$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
    $DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$addEvtListener$($dvt$$2$$.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  $DvtChartEventManager$$.prototype.$removeListeners$ = function $$DvtChartEventManager$$$$$removeListeners$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || $DvtSparkChartEventManager$$.$removeEvtListener$($dvt$$2$$.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  $DvtChartEventManager$$.prototype.$getLogicalObject$ = function $$DvtChartEventManager$$$$$getLogicalObject$$($dvt$$2$$) {
    return this.$GetLogicalObject$($dvt$$2$$, $JSCompiler_alias_TRUE$$)
  };
  $DvtChartEventManager$$.prototype.$_getRelativePosition$ = function $$DvtChartEventManager$$$$$_getRelativePosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtSparkChartDefaults$$ - this.$_stageAbsolutePosition$.y)
  };
  $DvtChartEventManager$$.prototype.$_getDragHandler$ = function $$DvtChartEventManager$$$$$_getDragHandler$$($dvt$$2$$) {
    if($dvt$$2$$ && "user" == this.$_chart$.$getOptions$().dragMode && $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) && (this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ || this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$)) {
      this.$_panZoomHandler$.$isWithinBounds$($dvt$$2$$) ? this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_PAN$ : this.$_dragMode$ = $DvtChartEventManager$$.$DRAG_MODE_ZOOM$
    }
    return this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ ? this.$_panZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$ : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ ? this.$_marqueeSelectHandler$ : $JSCompiler_alias_NULL$$
  };
  $DvtChartEventManager$$.prototype.$_onDragStart$ = function $$DvtChartEventManager$$$$$_onDragStart$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtSparkChartEventManager$$) : this.$_onMouseDragStart$($DvtSparkChartEventManager$$)
  };
  $DvtChartEventManager$$.prototype.$_onDragMove$ = function $$DvtChartEventManager$$$$$_onDragMove$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtSparkChartEventManager$$) : this.$_onMouseDragMove$($DvtSparkChartEventManager$$)
  };
  $DvtChartEventManager$$.prototype.$_onDragEnd$ = function $$DvtChartEventManager$$$$$_onDragEnd$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtSparkChartEventManager$$) : this.$_onMouseDragEnd$($DvtSparkChartEventManager$$)
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtChartEventManager$$$$$_onMouseDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($dvt$$2$$));
    if((!$DvtChartStyleUtils$$ || !$DvtChartStyleUtils$$.$isSelectable$ || !$DvtChartStyleUtils$$.$isSelectable$()) && 0 == $dvt$$2$$.button && $DvtSparkChartDefaults$$) {
      ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragStart$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$)), this.$setDragButtonsVisible$($JSCompiler_alias_FALSE$$), this.$_chart$ != this.$getCtx$().$getCurrentKeyboardFocus$() && this.$getCtx$().$setCurrentKeyboardFocus$(this.$_chart$)
    }
    return $DvtSparkChartAutomation$$ ? (this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$(), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtChartEventManager$$$$$_onMouseDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$(), $DvtSparkChartAutomation$$;
    if($DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$processDragMove$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey))) {
      this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartAutomation$$), this.$setDragButtonsVisible$($JSCompiler_alias_FALSE$$)
    }
    $DvtSparkChartAutomation$$ && $dvt$$2$$.stopPropagation()
  };
  $DvtChartEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtChartEventManager$$$$$_onMouseDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_getDragHandler$();
    if($DvtSparkChartDefaults$$) {
      if($dvt$$2$$ = $DvtSparkChartDefaults$$.$processDragEnd$($DvtSparkChartEventManager$$, $dvt$$2$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$), this.$autoToggleZoomButton$()
      }
      this.$_chart$.setCursor($DvtSparkChartDefaults$$.getCursor($DvtSparkChartEventManager$$));
      ($DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$) && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y))
    }
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
  };
  $DvtChartEventManager$$.prototype.$OnMouseMove$ = function $$DvtChartEventManager$$$$$OnMouseMove$$($DvtSparkChartEventManager$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$.pageX, $DvtSparkChartEventManager$$.pageY);
    this.$_dataCursorHandler$ && (this.$GetCurrentTargetForEvent$($DvtSparkChartEventManager$$) instanceof $dvt$$2$$.$Button$ ? this.$_dataCursorHandler$.$processEnd$() : this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$));
    ($DvtSparkChartEventManager$$ = this.$_getDragHandler$($DvtSparkChartDefaults$$)) ? this.$_chart$.setCursor($DvtSparkChartEventManager$$.getCursor($DvtSparkChartDefaults$$)) : this.$_chart$.setCursor("default")
  };
  $DvtChartEventManager$$.prototype.$OnMouseOut$ = function $$DvtChartEventManager$$$$$OnMouseOut$$($dvt$$2$$) {
    $DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $dvt$$2$$);
    var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY), $DvtSparkChartDefaults$$ = this.$_chart$.$_axisSpace$;
    $DvtSparkChartDefaults$$ && this.$setDragButtonsVisible$($DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y));
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processOut$($DvtSparkChartEventManager$$);
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$;
    this.$GetLogicalObject$($dvt$$2$$.target)
  };
  $DvtChartEventManager$$.prototype.$OnMouseWheel$ = function $$DvtChartEventManager$$$$$OnMouseWheel$$($dvt$$2$$) {
    if($DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.wheelDelta != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.wheelDelta : 0, $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
      if(this.$_panZoomHandler$ && ($DvtSparkChartEventManager$$ = this.$_panZoomHandler$.$processMouseWheel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$))) {
        $dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$), this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processMove$($DvtSparkChartDefaults$$)
      }
    }
  };
  $DvtChartEventManager$$.prototype.$ShowFocusEffect$ = function $$DvtChartEventManager$$$$$ShowFocusEffect$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(this.$_dataCursorHandler$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_dataPos$;
      if($DvtSparkChartAutomation$$) {
        var $DvtChartStyleUtils$$ = this.$_chart$.$_plotAreaSpace$;
        this.$_dataCursorHandler$.$processMove$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtChartStyleUtils$$.x, $DvtSparkChartAutomation$$.y + $DvtChartStyleUtils$$.y))
      }
    }
    $DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartEventManager$$.prototype.$OnBlur$ = function $$DvtChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$)
  };
  $DvtChartEventManager$$.prototype.$OnClickInternal$ = function $$DvtChartEventManager$$$$$OnClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $dvt$$2$$ = this.$_getRelativePosition$($dvt$$2$$.pageX, $dvt$$2$$.pageY);
    this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ && (this.$processActionEvent$($DvtSparkChartEventManager$$), (!$DvtSparkChartEventManager$$.$isSelectable$ || !$DvtSparkChartEventManager$$.$isSelectable$()) && this.$processDrillEvent$($DvtSparkChartEventManager$$))
  };
  $DvtChartEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtChartEventManager$$$$$OnDblClickInternal$$($dvt$$2$$) {
    ($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) && $dvt$$2$$.$isSelectable$ && $dvt$$2$$.$isSelectable$() && this.$processDrillEvent$($dvt$$2$$)
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverStartInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverStartInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverMoveInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverMoveInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    this.$TouchManager$.$setTooltipEnabled$($dvt$$2$$.$touch$.identifier, this.$getTooltipsEnabled$($DvtSparkChartEventManager$$));
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtChartEventManager$$$$$HandleTouchHoverEndInternal$$($dvt$$2$$) {
    if($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), (!$dvt$$2$$.$isSelectable$ || !$dvt$$2$$.$isSelectable$()) && this.$processDrillEvent$($dvt$$2$$)
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchClickInternal$$($dvt$$2$$) {
    if($dvt$$2$$ = this.$GetLogicalObject$($dvt$$2$$.target)) {
      this.$processActionEvent$($dvt$$2$$), (!$dvt$$2$$.$isSelectable$ || !$dvt$$2$$.$isSelectable$()) && this.$processDrillEvent$($dvt$$2$$)
    }
  };
  $DvtChartEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtChartEventManager$$$$$HandleTouchDblClickInternal$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$GetLogicalObject$($dvt$$2$$.target);
    $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$.$isSelectable$ && $DvtSparkChartEventManager$$.$isSelectable$()) && ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$processDrillEvent$($DvtSparkChartEventManager$$))
  };
  $DvtChartEventManager$$.prototype.$processActionEvent$ = function $$DvtChartEventManager$$$$$processActionEvent$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$.$getAction$ && $DvtSparkChartEventManager$$.$getAction$()) && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newActionEvent$("action", $DvtSparkChartEventManager$$.$getAction$(), $DvtSparkChartEventManager$$.getId()))
  };
  $DvtChartEventManager$$.prototype.$processDrillEvent$ = function $$DvtChartEventManager$$$$$processDrillEvent$$($DvtSparkChartEventManager$$) {
    if($DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.$isDrillable$ && $DvtSparkChartEventManager$$.$isDrillable$()) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.getId();
      $DvtSparkChartEventManager$$ instanceof $DvtChartObjPeer$$ ? this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId ? $DvtSparkChartDefaults$$.getId() : $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.$getSeries$(), $DvtSparkChartEventManager$$.$getGroup$())) : $DvtSparkChartEventManager$$ instanceof $DvtChartPieSlice$$ && this.$FireEvent$($dvt$$2$$.$EventFactory$.$newChartDrillEvent$($DvtSparkChartDefaults$$.getId(), $DvtSparkChartDefaults$$.$getSeries$(), 
      $DvtSparkChartDefaults$$.$getGroup$()))
    }
  };
  $DvtChartEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtChartEventManager$$$$$ProcessRolloverEvent$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = this.$_chart$.$getOptions$();
    if("dim" == $DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCategories$ ? $DvtSparkChartDefaults$$.$getCategories$() : [];
      $DvtSparkChartEventManager$$.highlightedCategories = $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$.slice() : $JSCompiler_alias_NULL$$;
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$EventFactory$.$newCategoryHighlightEvent$($DvtSparkChartEventManager$$.highlightedCategories, $DvtSparkChartAutomation$$);
      $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
      var $DvtChartTypeUtils$$ = this.$_chart$.$getObjects$();
      this.$_chart$.$pieChart$ && ($DvtChartTypeUtils$$ = $DvtChartTypeUtils$$.concat(this.$_chart$.$pieChart$.$_slices$));
      this.$RolloverHandler$.$processEvent$($DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$, "any" == $DvtSparkChartEventManager$$.highlightMatch)
    }
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtChartEventManager$$$$$_onTouchDragStart$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if(1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartStyleUtils$$ = this.$_getDragHandler$();
      $DvtChartStyleUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$processDragStart$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $JSCompiler_alias_TRUE$$)
    }else {
      2 == $DvtSparkChartEventManager$$.length && (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), $DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchStart$($DvtSparkChartDefaults$$, 
      $DvtSparkChartEventManager$$))
    }
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
    return $DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$ ? ($dvt$$2$$.preventDefault(), $dvt$$2$$.stopPropagation(), this.$setDragButtonsVisible$($JSCompiler_alias_FALSE$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtChartEventManager$$$$$_onTouchDragMove$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.touches, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$;
    if(1 == $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtChartStyleUtils$$ = this.$_getDragHandler$();
      $DvtChartStyleUtils$$ ? $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$processDragMove$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && (this.$_dataCursorHandler$.$processMove$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $JSCompiler_alias_TRUE$$)
    }else {
      2 == $DvtSparkChartEventManager$$.length && (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && ($DvtSparkChartDefaults$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[0].pageX, $DvtSparkChartEventManager$$[0].pageY), $DvtSparkChartEventManager$$ = this.$_getRelativePosition$($DvtSparkChartEventManager$$[1].pageX, $DvtSparkChartEventManager$$[1].pageY), $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchMove$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$))
    }
    ($DvtSparkChartDefaults$$ || $DvtSparkChartAutomation$$) && $dvt$$2$$.preventDefault();
    $DvtSparkChartDefaults$$ && (this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$())
  };
  $DvtChartEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtChartEventManager$$$$$_onTouchDragEnd$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$endDrag$(), $DvtSparkChartDefaults$$;
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$processPinchEnd$()) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) {
      $dvt$$2$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$;
    this.$setDragButtonsVisible$($JSCompiler_alias_TRUE$$)
  };
  $DvtChartEventManager$$.prototype.$endDrag$ = function $$DvtChartEventManager$$$$$endDrag$$() {
    var $dvt$$2$$ = this.$_getDragHandler$(), $DvtSparkChartEventManager$$;
    $dvt$$2$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$processDragEnd$($JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$();
    $DvtSparkChartEventManager$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartEventManager$$.prototype.$zoomBy$ = function $$DvtChartEventManager$$$$$zoomBy$$($dvt$$2$$) {
    this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($dvt$$2$$ = this.$_panZoomHandler$.$zoomBy$($dvt$$2$$)) && this.$_callback$.call(this.$_callbackObj$, $dvt$$2$$)
  };
  $DvtChartEventManager$$.prototype.$panBy$ = function $$DvtChartEventManager$$$$$panBy$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
      var $DvtSparkChartDefaults$$ = this.$_panZoomHandler$.$panBy$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$ && this.$_callback$.call(this.$_callbackObj$, $DvtSparkChartDefaults$$)
    }
  };
  $DvtChartEventManager$$.prototype.$hideHoverFeedback$ = function $$DvtChartEventManager$$$$$hideHoverFeedback$$() {
    this.$hideTooltip$();
    this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$processEnd$()
  };
  $DvtChartEventManager$$.prototype.$hideTooltip$ = function $$DvtChartEventManager$$$$$hideTooltip$$() {
    (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && $DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
  };
  $DvtChartEventManager$$.prototype.$getTooltipsEnabled$ = function $$DvtChartEventManager$$$$$getTooltipsEnabled$$($dvt$$2$$) {
    return this.$_dataCursorHandler$ && ($dvt$$2$$ instanceof $DvtChartObjPeer$$ || $dvt$$2$$ instanceof $DvtChartRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? $JSCompiler_alias_FALSE$$ : $DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
  };
  $DvtChartEventManager$$.prototype.$setDataCursorHandler$ = $JSCompiler_set$$("$_dataCursorHandler$");
  $DvtChartEventManager$$.prototype.$setPanZoomHandler$ = $JSCompiler_set$$("$_panZoomHandler$");
  $DvtChartEventManager$$.prototype.$setMarqueeZoomHandler$ = $JSCompiler_set$$("$_marqueeZoomHandler$");
  $DvtChartEventManager$$.prototype.$setMarqueeSelectHandler$ = $JSCompiler_set$$("$_marqueeSelectHandler$");
  $DvtChartEventManager$$.prototype.$cancelMarquee$ = function $$DvtChartEventManager$$$$$cancelMarquee$$($dvt$$2$$) {
    this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $dvt$$2$$.preventDefault() : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_SELECT$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
  };
  $DvtChartEventManager$$.prototype.$setDragMode$ = function $$DvtChartEventManager$$$$$setDragMode$$($dvt$$2$$) {
    this.$_dragMode$ = $dvt$$2$$ == $JSCompiler_alias_NULL$$ ? this.$_getDefaultDragMode$() : $dvt$$2$$;
    this.$_chart$.$xAxis$.$isFullViewport$() && (!this.$_chart$.$yAxis$ || this.$_chart$.$yAxis$.$isFullViewport$()) && this.$autoToggleZoomButton$()
  };
  $DvtChartEventManager$$.prototype.$_getDefaultDragMode$ = function $$DvtChartEventManager$$$$$_getDefaultDragMode$$() {
    return $dvt$$2$$.$Agent$.$isTouchDevice$() ? $DvtChartEventManager$$.$DRAG_MODE_OFF$ : $DvtChartEventUtils$$.$isScrollable$(this.$_chart$) ? $DvtChartEventManager$$.$DRAG_MODE_PAN$ : "multiple" == this.$_chart$.$getOptions$().selectionMode ? $DvtChartEventManager$$.$DRAG_MODE_SELECT$ : $JSCompiler_alias_NULL$$
  };
  $DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
    this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$)) : this.$setDragMode$($JSCompiler_alias_NULL$$)
  };
  $DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
    this.$panButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$)) : this.$setDragMode$($JSCompiler_alias_NULL$$)
  };
  $DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
    this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && this.$zoomButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$panButton$ && this.$panButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$)) : this.$setDragMode$($JSCompiler_alias_NULL$$)
  };
  $DvtChartEventManager$$.prototype.$setDragButtonsVisible$ = function $$DvtChartEventManager$$$$$setDragButtonsVisible$$($dvt$$2$$) {
    $dvt$$2$$ && !this.$_dragButtonsVisible$ ? (this.$_chart$.$showDragButtons$(), this.$_dragButtonsVisible$ = $JSCompiler_alias_TRUE$$) : !$dvt$$2$$ && this.$_dragButtonsVisible$ && (this.$_chart$.$hideDragButtons$(), this.$_dragButtonsVisible$ = $JSCompiler_alias_FALSE$$)
  };
  $DvtChartEventManager$$.prototype.$autoToggleZoomButton$ = function $$DvtChartEventManager$$$$$autoToggleZoomButton$$() {
    !$dvt$$2$$.$Agent$.$isTouchDevice$() && this.$zoomButton$ && (this.$_chart$.$xAxis$.$isFullViewport$() && this.$_chart$.$yAxis$.$isFullViewport$() ? this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_PAN$ && (this.$zoomButton$.$setToggled$($JSCompiler_alias_TRUE$$), this.$onZoomButtonClick$()) : this.$_dragMode$ == $DvtChartEventManager$$.$DRAG_MODE_ZOOM$ && (this.$zoomButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$onZoomButtonClick$()))
  };
  $DvtChartEventManager$$.prototype.$GetTouchResponse$ = function $$DvtChartEventManager$$$$$GetTouchResponse$$() {
    return this.$_dragMode$ && this.$_dragMode$ != $DvtChartEventManager$$.$DRAG_MODE_OFF$ ? $dvt$$2$$.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : this.$_chart$.$getOptions$().touchResponse
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartKeyboardHandler$$, $dvt$$2$$.$KeyboardHandler$);
  $DvtChartKeyboardHandler$$.prototype.Init = function $$DvtChartKeyboardHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $dvt$$2$$);
    this.$_chart$ = $DvtSparkChartEventManager$$
  };
  $DvtChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtChartKeyboardHandler$$$$$isSelectionEvent$$($dvt$$2$$) {
    return this.$isNavigationEvent$($dvt$$2$$) && !$dvt$$2$$.ctrlKey
  };
  $DvtChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtChartKeyboardHandler$$$$$isMultiSelectEvent$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.$KeyboardEvent$.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey
  };
  $DvtChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtChartKeyboardHandler$$$$$processKeyDown$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if($DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$TAB$) {
      if($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$
      }
      $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
      if(0 < $DvtSparkChartDefaults$$.length) {
        return $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), this.$getDefaultNavigable$($DvtSparkChartDefaults$$)
      }
    }else {
      if($DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$ENTER$) {
        if($DvtSparkChartDefaults$$ = this.$_eventManager$.$getFocus$()) {
          return this.$_eventManager$.$processActionEvent$($DvtSparkChartDefaults$$), this.$_eventManager$.$processDrillEvent$($DvtSparkChartDefaults$$), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$
        }
      }else {
        $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$ESCAPE$ ? this.$_eventManager$.$cancelMarquee$($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$PAGE_UP$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : 
        $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$PAGE_DOWN$ ? (($DvtSparkChartEventManager$$.ctrlKey || $DvtSparkChartEventManager$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), $dvt$$2$$.$EventManager$.$consumeEvent$($DvtSparkChartEventManager$$)) : $dvt$$2$$.$KeyboardEvent$.$isEquals$($DvtSparkChartEventManager$$) || $dvt$$2$$.$KeyboardEvent$.$isPlus$($DvtSparkChartEventManager$$) ? 
        this.$_eventManager$.$zoomBy$(1.5) : ($dvt$$2$$.$KeyboardEvent$.$isMinus$($DvtSparkChartEventManager$$) || $dvt$$2$$.$KeyboardEvent$.$isUnderscore$($DvtSparkChartEventManager$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
      }
    }
    return $DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtSparkChartEventManager$$)
  };
  $DvtChartKeyboardHandler$$.prototype.$getDefaultNavigable$ = function $$DvtChartKeyboardHandler$$$$$getDefaultNavigable$$($dvt$$2$$) {
    if(!$dvt$$2$$ || 0 >= $dvt$$2$$.length) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPie$(this.$_chart$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $dvt$$2$$.length;$DvtChartPieLabelInfo$$++) {
      $DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtChartPieLabelInfo$$], !$DvtSparkChartDefaults$$ || $DvtChartPieLabelUtils$$.$getSeriesIndex$() < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getSeriesIndex$(), $DvtSparkChartEventManager$$ || ($DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$getGroupIndex$())) : !$DvtSparkChartEventManager$$ && $DvtChartPieLabelUtils$$.$getGroupIndex$() < $DvtChartStyleUtils$$ && 
      ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getSeriesIndex$(), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$getGroupIndex$())
    }
    return $DvtSparkChartDefaults$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_seriesIndex$ = $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$ : -1;
    this.$_groupIndex$ = $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartAutomation$$ : -1;
    this.$_dataPos$ = $DvtChartStyleUtils$$;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = $JSCompiler_alias_FALSE$$;
    0 <= $DvtSparkChartDefaults$$ && (this.$_series$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartDefaults$$));
    0 <= $DvtSparkChartAutomation$$ && (this.$_group$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$));
    if($DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
      this.$_action$ = $DvtChartStyleUtils$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isSeriesDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$), this.$_stampId$ = $DvtChartStyleUtils$$._id
    }
    $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$ && (this.$_dataItemId$ = $DvtChartStyleUtils$$.id, this.$_action$ = $DvtChartStyleUtils$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_stampId$ = $DvtChartStyleUtils$$._id);
    if(this.$_action$ || this.$_drillable$) {
      for($dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
        this.$_displayables$[$dvt$$2$$].setCursor("pointer")
      }
    }
    for($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartDefaults$$ instanceof $DvtChartLineArea$$ || $DvtSparkChartDefaults$$.$setAriaRole$("img"), this.$_updateAriaLabel$($DvtSparkChartDefaults$$)
    }
  };
  $DvtChartObjPeer$$.$associate$ = function $$DvtChartObjPeer$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    $dvt$$2$$ && ($DvtSparkChartDefaults$$ = new $DvtChartObjPeer$$($DvtSparkChartEventManager$$, [$dvt$$2$$], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$), $DvtSparkChartEventManager$$.$registerObject$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$.$getEventManager$().$associate$($dvt$$2$$, $DvtSparkChartDefaults$$))
  };
  $DvtChartObjPeer$$.prototype.getId = function $$DvtChartObjPeer$$$$getId$() {
    return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new $DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : $JSCompiler_alias_NULL$$
  };
  $DvtChartObjPeer$$.prototype.$getSeries$ = $JSCompiler_get$$("$_series$");
  $DvtChartObjPeer$$.prototype.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
  $DvtChartObjPeer$$.prototype.$getGroup$ = $JSCompiler_get$$("$_group$");
  $DvtChartObjPeer$$.prototype.$getGroupIndex$ = $JSCompiler_get$$("$_groupIndex$");
  $DvtChartObjPeer$$.prototype.$getAction$ = $JSCompiler_get$$("$_action$");
  $DvtChartObjPeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
  $DvtChartObjPeer$$.prototype.$isDoubleClickable$ = function $$DvtChartObjPeer$$$$$isDoubleClickable$$() {
    return this.$isSelectable$() && this.$isDrillable$()
  };
  $DvtChartObjPeer$$.prototype.$getSeriesType$ = function $$DvtChartObjPeer$$$$$getSeriesType$$() {
    return $DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
  };
  $DvtChartObjPeer$$.prototype.$getSeriesItem$ = function $$DvtChartObjPeer$$$$$getSeriesItem$$() {
    return $DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
  };
  $DvtChartObjPeer$$.prototype.$getDatatip$ = function $$DvtChartObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, $JSCompiler_alias_TRUE$$)
  };
  $DvtChartObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
  };
  $DvtChartObjPeer$$.prototype.$isSelectable$ = function $$DvtChartObjPeer$$$$$isSelectable$$() {
    return $DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$())
  };
  $DvtChartObjPeer$$.prototype.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
  $DvtChartObjPeer$$.prototype.$setSelected$ = function $$DvtChartObjPeer$$$$$setSelected$$($dvt$$2$$) {
    this.$_isSelected$ = $dvt$$2$$;
    for(var $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_displayables$.length;$DvtSparkChartEventManager$$++) {
      this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$ && (this.$_displayables$[$DvtSparkChartEventManager$$].$setSelected$($dvt$$2$$), this.$_updateAriaLabel$(this.$_displayables$[$DvtSparkChartEventManager$$]))
    }
  };
  $DvtChartObjPeer$$.prototype.$showHoverEffect$ = function $$DvtChartObjPeer$$$$$showHoverEffect$$() {
    for(var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$showHoverEffect$ && this.$_displayables$[$dvt$$2$$].$showHoverEffect$()
    }
  };
  $DvtChartObjPeer$$.prototype.$hideHoverEffect$ = function $$DvtChartObjPeer$$$$$hideHoverEffect$$() {
    for(var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_displayables$.length;$dvt$$2$$++) {
      this.$_displayables$[$dvt$$2$$].$hideHoverEffect$ && this.$_displayables$[$dvt$$2$$].$hideHoverEffect$()
    }
  };
  $DvtChartObjPeer$$.prototype.$getShowPopupBehaviors$ = function $$DvtChartObjPeer$$$$$getShowPopupBehaviors$$() {
    return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
  };
  $DvtChartObjPeer$$.prototype.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
  $DvtChartObjPeer$$.prototype.$getAriaLabel$ = function $$DvtChartObjPeer$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = this.$_chart$.$getOptions$();
    this.$isSelectable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isDrillable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, $JSCompiler_alias_FALSE$$);
    $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ && (0 > this.$_groupIndex$ && 0 < $DvtSparkChartEventManager$$.length) && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartObjPeer$$.prototype.$_updateAriaLabel$ = function $$DvtChartObjPeer$$$$$_updateAriaLabel$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$Agent$.$deferAriaCreation$() || $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtChartObjPeer$$.prototype.$getCategories$ = $JSCompiler_get$$("$_categories$");
  $DvtChartObjPeer$$.prototype.$getNextNavigable$ = function $$DvtChartObjPeer$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if($DvtSparkChartEventManager$$.type == $dvt$$2$$.$MouseEvent$.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this
    }
    $DvtSparkChartDefaults$$ = this.$_chart$;
    for(var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartStyleUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].$isNavigable$() && $DvtChartStyleUtils$$.push($DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$])
    }
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$) : $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$ = this.$_findNextNavigable$($DvtSparkChartEventManager$$) : $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$) && 
    ($DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.$KeyboardEvent$.$UP_ARROW$ || $DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.$KeyboardEvent$.$DOWN_ARROW$) ? ($DvtSparkChartEventManager$$.keyCode -= 1, $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$)) : $DvtSparkChartEventManager$$ = $dvt$$2$$.$KeyboardHandler$.$getNextNavigable$(this, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, $JSCompiler_alias_TRUE$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartObjPeer$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0)
  };
  $DvtChartObjPeer$$.prototype.$getTargetElem$ = function $$DvtChartObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtChartObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
  };
  $DvtChartObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
  };
  $DvtChartObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtChartObjPeer$$.prototype.$isNavigable$ = function $$DvtChartObjPeer$$$$$isNavigable$$() {
    return-1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$()
  };
  $DvtChartObjPeer$$.prototype.$_findNextNavigable$ = function $$DvtChartObjPeer$$$$$_findNextNavigable$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.keyCode;
    var $DvtSparkChartDefaults$$ = this.$_chart$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartStyleUtils$$ = this.$getSeriesIndex$(), $DvtChartPieLabelUtils$$ = this.$getGroupIndex$(), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartDefaults$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$), 
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartAutomation$$), $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$DOWN_ARROW$, $DvtChartDataChangeMarker$$ = $DvtChartMarkerUtils$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$UP_ARROW$ : 
    $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$LEFT_ARROW$, $DvtChartDataChangeLineArea$$ = $DvtChartMarkerUtils$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$DOWN_ARROW$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$RIGHT_ARROW$;
    if($DvtChartMarkerUtils$$ ? $DvtSparkChartAutomation$$ ? $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$LEFT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$RIGHT_ARROW$ : $DvtSparkChartEventManager$$ == $dvt$$2$$.$KeyboardEvent$.$UP_ARROW$) {
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = this.$_findNextUpSeries$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$)
    }else {
      if($DvtChartPieUtils$$) {
        $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = this.$_findNextDownSeries$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$)
      }else {
        if($DvtChartDataChangeLineArea$$) {
          $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$;
          $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$;
          do {
            $DvtChartDataChangeFunnelSlice$$++, $DvtChartDataChangeRangeMarker$$ && $DvtChartDataChangeFunnelSlice$$ >= $DvtChartPieLabelInfo$$ && ($DvtChartDataChangeFunnelSlice$$ = 0)
          }while($DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$) == $JSCompiler_alias_NULL$$ && $DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelInfo$$)
        }else {
          if($DvtChartDataChangeMarker$$) {
            $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$;
            $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$;
            do {
              $DvtChartDataChangeFunnelSlice$$--, $DvtChartDataChangeRangeMarker$$ && 0 > $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$ - 1)
            }while($DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$) == $JSCompiler_alias_NULL$$ && -1 < $DvtChartDataChangeFunnelSlice$$)
          }
        }
      }
    }
    return($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getObject$($DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$)) && $DvtChartPieRenderUtils$$.$isNavigable$() ? $DvtChartPieRenderUtils$$ : this
  };
  $DvtChartObjPeer$$.prototype.$_findNextUpSeries$ = function $$DvtChartObjPeer$$$$$_findNextUpSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$ = $JSCompiler_alias_NULL$$, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieRenderUtils$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieRenderUtils$$)) {
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$);
        if($DvtChartDataChangeFunnelSlice$$ > $DvtChartTypeUtils$$ || $DvtChartDataChangeFunnelSlice$$ == $DvtChartTypeUtils$$ && $DvtChartPieRenderUtils$$ > $DvtSparkChartEventManager$$) {
          if($DvtChartPieLabelUtils$$ !== $JSCompiler_alias_NULL$$ && $DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$ || $DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$) {
            $DvtChartPieLabelUtils$$ = $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$
          }
        }
      }
    }
    return $DvtChartPieLabelInfo$$
  };
  $DvtChartObjPeer$$.prototype.$_findNextDownSeries$ = function $$DvtChartObjPeer$$$$$_findNextDownSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$ = $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$)) {
        var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
        if($DvtChartPieRenderUtils$$ < $DvtChartTypeUtils$$ || $DvtChartPieRenderUtils$$ == $DvtChartTypeUtils$$ && $DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$) {
          if($DvtChartPieLabelUtils$$ !== $JSCompiler_alias_NULL$$ && $DvtChartPieRenderUtils$$ > $DvtChartPieLabelUtils$$ || $DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$) {
            $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$
          }
        }
      }
    }
    return $DvtChartPieLabelInfo$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjPeer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjPeer$$.prototype.Init = function $$DvtChartRefObjPeer$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    this.$_chart$ = $dvt$$2$$;
    this.$_displayables$ = $DvtSparkChartEventManager$$;
    this.$_refObj$ = $DvtSparkChartDefaults$$;
    this.$_categories$ = $DvtChartRefObjUtils$$.$getRefObjCategories$(this.$_refObj$);
    this.$_index$ = $DvtSparkChartAutomation$$;
    this.$_axisType$ = $DvtChartStyleUtils$$;
    for($dvt$$2$$ = 0;$dvt$$2$$ < $DvtSparkChartEventManager$$.length;$dvt$$2$$++) {
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$dvt$$2$$], $DvtSparkChartAutomation$$.$setAriaRole$("img"), $DvtSparkChartAutomation$$.$setAriaProperty$("label", $DvtSparkChartDefaults$$.shortDesc)
    }
  };
  $DvtChartRefObjPeer$$.prototype.$getCategories$ = $JSCompiler_get$$("$_categories$");
  $DvtChartRefObjPeer$$.prototype.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
  $DvtChartRefObjPeer$$.prototype.$getIndex$ = $JSCompiler_get$$("$_index$");
  $DvtChartRefObjPeer$$.prototype.$getDatatip$ = function $$DvtChartRefObjPeer$$$$$getDatatip$$() {
    return $DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$, this.$_axisType$, this.$_index$)
  };
  $DvtChartRefObjPeer$$.prototype.$getDatatipColor$ = function $$DvtChartRefObjPeer$$$$$getDatatipColor$$() {
    return $DvtChartRefObjUtils$$.$getColor$(this.$_refObj$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataItem$$, $dvt$$2$$.$Obj$);
  $DvtChartDataItem$$.prototype.getId = $JSCompiler_get$$("id");
  $DvtChartDataItem$$.prototype.$getSeries$ = $JSCompiler_get$$("series");
  $DvtChartDataItem$$.prototype.$getGroup$ = $JSCompiler_get$$("group");
  $DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$ instanceof $DvtChartDataItem$$ && this.series === $DvtSparkChartEventManager$$.series ? this.group instanceof Array && $DvtSparkChartEventManager$$.group instanceof Array ? $dvt$$2$$.$ArrayUtils$.$equals$(this.group, $DvtSparkChartEventManager$$.group) : this.group === $DvtSparkChartEventManager$$.group : $JSCompiler_alias_FALSE$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtChartDefaults$$.$SKIN_NEXT$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_NEXT$, styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce"}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}};
  $DvtChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + "color: #252525;")}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$ + "color: #252525;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_11$)}, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_13$ + 
  "color: #252525;"), pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$)}, styleDefaults:{seriesEffect:"color", colors:$dvt$$2$$.$CSSStyle$.$COLORS_ALTA$, dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA$), stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_ALTA_BOLD$), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}};
  $DvtChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, emptyText:$JSCompiler_alias_NULL$$, type:"bar", stack:"off", stackLabel:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", hoverBehavior:"none", zoomAndScroll:"off", zoomDirection:"auto", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:$JSCompiler_alias_FALSE$$, 
  dataCursor:"auto", dataCursorBehavior:"auto", drilling:"off", highlightMatch:"all", series:[], groups:[], title:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, subtitle:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b;")}, footnote:{style:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + 
  "font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, touchResponse:"auto", _statusMessageStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + "font-size: 12px; color: #003d5b; font-weight: bold"), xAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
  minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33, alignTickMarks:"on"}, pieCenter:{labelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$)}, pieCenterLabel:{}, plotArea:{backgroundColor:$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"auto", maxSize:0.3, layout:{gapRatio:1}, 
  seriesSection:{}, referenceObjectSection:{}, sections:[]}, overview:{rendered:"off"}, styleDefaults:{colors:$dvt$$2$$.$CSSStyle$.$COLORS_SKYROS$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", 
  selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelType:"percent", otherColor:"#4b4b4b", stockRisingColor:"#006666", 
  stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$), dataLabelPosition:"auto", funnelBackgroundColor:"#EDEDED", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", hoverBehaviorDelay:200, dataCursor:{markerSize:8, 
  markerDisplayed:"on", lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto", _tooltipStyle:new $dvt$$2$$.$CSSStyle$("border-collapse: separate; border-spacing: 2px"), tooltipLabelStyle:new $dvt$$2$$.$CSSStyle$("color: #737373; padding: 0px 2px; white-space: nowrap;"), tooltipValueStyle:new $dvt$$2$$.$CSSStyle$("color: #333333; padding: 0px 2px;"), stackLabelStyle:new $dvt$$2$$.$CSSStyle$($dvt$$2$$.$BaseComponentDefaults$.$FONT_FAMILY_SKYROS$ + 
  $dvt$$2$$.$BaseComponentDefaults$.$FONT_SIZE_11$)}, layout:{gapWidthRatio:$JSCompiler_alias_NULL$$, gapHeightRatio:$JSCompiler_alias_NULL$$, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
  $DvtChartDefaults$$.$getGapWidth$ = function $$DvtChartDefaults$$$$getGapWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapWidthRatio$())
  };
  $DvtChartDefaults$$.$getGapHeight$ = function $$DvtChartDefaults$$$$getGapHeight$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return Math.ceil($DvtSparkChartEventManager$$ * $dvt$$2$$.$getGapHeightRatio$())
  };
  $DvtChartDefaults$$.$isSkyrosSkin$ = function $$DvtChartDefaults$$$$isSkyrosSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$
  };
  $DvtChartDefaults$$.$isPostAltaSkin$ = function $$DvtChartDefaults$$$$isPostAltaSkin$$($DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartEventManager$$.$getSkin$() != $dvt$$2$$.$CSSStyle$.$SKIN_ALTA$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursorHandler$$, $dvt$$2$$.$Obj$);
  $DvtChartDataCursorHandler$$.prototype.Init = function $$DvtChartDataCursorHandler$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_context$ = $dvt$$2$$.$getCtx$();
    this.$_dataCursorShown$ = $JSCompiler_alias_FALSE$$;
    this.$_dataCursor$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $dvt$$2$$
  };
  $DvtChartDataCursorHandler$$.prototype.$processMove$ = function $$DvtChartDataCursorHandler$$$$$processMove$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_chart$.$_plotAreaSpace$;
    $DvtSparkChartDefaults$$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) ? this.$_showDataCursor$($DvtSparkChartDefaults$$, $dvt$$2$$.x, $dvt$$2$$.y, $DvtSparkChartEventManager$$) : this.$_removeDataCursor$($DvtSparkChartEventManager$$)
  };
  $DvtChartDataCursorHandler$$.prototype.$processEnd$ = function $$DvtChartDataCursorHandler$$$$$processEnd$$($dvt$$2$$) {
    this.$_removeDataCursor$($dvt$$2$$)
  };
  $DvtChartDataCursorHandler$$.prototype.$processOut$ = function $$DvtChartDataCursorHandler$$$$$processOut$$($dvt$$2$$) {
    this.$_chart$.$_plotAreaSpace$.$containsPoint$($dvt$$2$$.x, $dvt$$2$$.y) || this.$_removeDataCursor$($JSCompiler_alias_VOID$$)
  };
  $DvtChartDataCursorHandler$$.prototype.$_showDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_showDataCursor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if(this.$_context$.$isOffscreen$()) {
      this.$_removeDataCursor$($DvtSparkChartAutomation$$)
    }else {
      var $DvtChartStyleUtils$$ = this.$_dataCursor$, $DvtChartTypeUtils$$ = this.$_getClosestMatch$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if($DvtChartTypeUtils$$ == $JSCompiler_alias_NULL$$) {
        this.$_removeDataCursor$($DvtSparkChartAutomation$$)
      }else {
        var $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$matchRegion$.$getCenter$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartStyleUtils$$.$getBehavior$() == $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ && ($DvtChartStyleUtils$$.$isHorizontal$() ? $DvtChartPieRenderUtils$$ = Math.min(Math.max($DvtChartPieLabelUtils$$.y, $dvt$$2$$.y), $dvt$$2$$.y + $dvt$$2$$.$h$) : $DvtChartPieLabelInfo$$ = Math.min(Math.max($DvtChartPieLabelUtils$$.x, $dvt$$2$$.x), $dvt$$2$$.x + $dvt$$2$$.$w$));
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $DvtChartTypeUtils$$.$sidx$, $DvtChartTypeUtils$$.$gidx$, $JSCompiler_alias_TRUE$$);
        $DvtChartDataChangeFunnelSlice$$ == $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$.$setVisible$($JSCompiler_alias_FALSE$$) : ($DvtChartStyleUtils$$.$setVisible$($JSCompiler_alias_TRUE$$), $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, $DvtChartTypeUtils$$.$sidx$, $DvtChartTypeUtils$$.$gidx$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$isHorizontal$() ? $DvtChartPieRenderUtils$$ : $DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$.$render$($dvt$$2$$, $DvtChartPieLabelUtils$$.x, 
        $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartTypeUtils$$), this.$_dataCursorShown$ = $JSCompiler_alias_TRUE$$, $DvtSparkChartAutomation$$ || ($dvt$$2$$ = this.$_chart$.$getValuesAt$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), this.$_chart$.$changeOption$($dvt$$2$$)))
      }
    }
  };
  $DvtChartDataCursorHandler$$.prototype.$_removeDataCursor$ = function $$DvtChartDataCursorHandler$$$$$_removeDataCursor$$($dvt$$2$$) {
    this.$_dataCursor$.$_bVisible$ && this.$_dataCursor$.$setVisible$($JSCompiler_alias_FALSE$$);
    this.$_context$.$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$).$hideTooltip$();
    this.$_dataCursorShown$ = $JSCompiler_alias_FALSE$$;
    $dvt$$2$$ || this.$_chart$.$changeOption$($JSCompiler_alias_NULL$$)
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchSecondDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartStyleUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartTypeUtils$$ = Infinity, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.x : $DvtChartPieLabelInfo$$.$matchRegion$.y) + ($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.x + $DvtChartPieLabelInfo$$.$matchRegion$.$w$ : $DvtChartPieLabelInfo$$.$matchRegion$.y + $DvtChartPieLabelInfo$$.$matchRegion$.$h$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : 
      $DvtSparkChartAutomation$$)));
      $DvtChartPieRenderUtils$$ < $DvtChartTypeUtils$$ && ($DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$ = $DvtChartPieLabelInfo$$)
    }
    return $DvtChartStyleUtils$$
  };
  $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$ = function $$DvtChartDataCursorHandler$$$$_getClosestMatchesFirstDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartStyleUtils$$ = Infinity, $DvtChartTypeUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $dvt$$2$$.length;$DvtChartPieLabelUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = Math.round(Math.abs((($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y : $DvtChartPieLabelInfo$$.$matchRegion$.x) + ($DvtSparkChartEventManager$$ ? $DvtChartPieLabelInfo$$.$matchRegion$.y + $DvtChartPieLabelInfo$$.$matchRegion$.$h$ : $DvtChartPieLabelInfo$$.$matchRegion$.x + $DvtChartPieLabelInfo$$.$matchRegion$.$w$)) / 2 - ($DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : 
      $DvtSparkChartDefaults$$)));
      $DvtChartPieRenderUtils$$ <= $DvtChartStyleUtils$$ && ($DvtChartPieRenderUtils$$ < $DvtChartStyleUtils$$ && ($DvtChartTypeUtils$$ = []), $DvtChartTypeUtils$$.push($DvtChartPieLabelInfo$$), $DvtChartStyleUtils$$ = $DvtChartPieRenderUtils$$)
    }
    return $DvtChartTypeUtils$$
  };
  $DvtChartDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtChartDataCursorHandler$$$$$_findMatches$$() {
    var $dvt$$2$$ = this.$_context$.$_stage$, $DvtSparkChartEventManager$$ = this.$_chart$.$getEventManager$(), $DvtSparkChartDefaults$$ = [];
    if(!this.$_chart$.$_currentMarkers$) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_chart$.$_currentMarkers$.length;$DvtSparkChartAutomation$$++) {
      for(var $DvtChartStyleUtils$$ = this.$_chart$.$_currentMarkers$[$DvtSparkChartAutomation$$], $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTypeUtils$$;$DvtChartPieLabelUtils$$++) {
        var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$], $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$GetLogicalObject$($DvtChartPieLabelInfo$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$.$getDimensionsSelf$ ? $DvtChartPieLabelInfo$$.$getDimensionsSelf$($dvt$$2$$) : $DvtChartPieLabelInfo$$.$getDimensions$($dvt$$2$$), $DvtChartPieLabelInfo$$ = {$obj$:$DvtChartPieLabelInfo$$, $matchRegion$:$DvtChartDataChangeFunnelSlice$$, $gidx$:$DvtChartPieRenderUtils$$.$getGroupIndex$(), 
        $sidx$:$DvtChartPieRenderUtils$$.$getSeriesIndex$(), $marker$:$JSCompiler_alias_NULL$$};
        $DvtSparkChartDefaults$$.push($DvtChartPieLabelInfo$$)
      }
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartDataCursorHandler$$.prototype.$_getClosestMatch$ = function $$DvtChartDataCursorHandler$$$$$_getClosestMatch$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isLineArea$(this.$_chart$) && !$DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$), $DvtChartStyleUtils$$ = this.$_findMatches$(), $DvtChartPieLabelUtils$$ = $DvtChartDataCursorHandler$$.$_getClosestMatchesFirstDirection$($DvtChartStyleUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$);
    if(!$DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$)) {
      for(var $DvtChartPieLabelInfo$$ = Infinity, $DvtChartPieRenderUtils$$ = -Infinity, $DvtChartDataChangeFunnelSlice$$ = $JSCompiler_alias_NULL$$, $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartMarkerUtils$$++) {
        $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$[$DvtChartMarkerUtils$$], $DvtChartPieLabelInfo$$ = Math.min($DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$ ? $DvtChartDataChangeFunnelSlice$$.$matchRegion$.y : $DvtChartDataChangeFunnelSlice$$.$matchRegion$.x), $DvtChartPieRenderUtils$$ = Math.max($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$ ? $DvtChartDataChangeFunnelSlice$$.$matchRegion$.y + $DvtChartDataChangeFunnelSlice$$.$matchRegion$.$h$ : $DvtChartDataChangeFunnelSlice$$.$matchRegion$.x + 
        $DvtChartDataChangeFunnelSlice$$.$matchRegion$.$w$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeFunnelSlice$$.$gidx$
      }
      for($DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartStyleUtils$$.length;$DvtChartMarkerUtils$$++) {
        var $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$[$DvtChartMarkerUtils$$], $DvtChartPieUtils$$ = $DvtChartDataChangeRangeMarker$$.$gidx$;
        $DvtSparkChartAutomation$$ ? $DvtChartDataChangeFunnelSlice$$ == $DvtChartPieUtils$$ && $DvtChartPieLabelUtils$$.push($DvtChartDataChangeRangeMarker$$) : ($DvtChartPieUtils$$ = (($DvtSparkChartDefaults$$ ? $DvtChartDataChangeRangeMarker$$.$matchRegion$.y : $DvtChartDataChangeRangeMarker$$.$matchRegion$.x) + ($DvtSparkChartDefaults$$ ? $DvtChartDataChangeRangeMarker$$.$matchRegion$.y + $DvtChartDataChangeRangeMarker$$.$matchRegion$.$h$ : $DvtChartDataChangeRangeMarker$$.$matchRegion$.x + $DvtChartDataChangeRangeMarker$$.$matchRegion$.$w$)) / 
        2, $DvtChartPieRenderUtils$$ >= $DvtChartPieUtils$$ && $DvtChartPieLabelInfo$$ <= $DvtChartPieUtils$$ && $DvtChartPieLabelUtils$$.push($DvtChartDataChangeRangeMarker$$))
      }
    }
    return $DvtChartDataCursorHandler$$.$_getClosestMatchSecondDirection$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableWedge$$, $dvt$$2$$.$Path$);
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableWedge$$.prototype.Init = function $$DvtChartSelectableWedge$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartSelectableWedge$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartSelectableWedge$$.prototype.$setWedgeParams$ = function $$DvtChartSelectableWedge$$$$$setWedgeParams$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    this.$_cx$ = $dvt$$2$$;
    this.$_cy$ = $DvtSparkChartEventManager$$;
    this.$_rx$ = $DvtSparkChartDefaults$$;
    this.$_ry$ = $DvtSparkChartAutomation$$;
    this.$_sa$ = $DvtChartStyleUtils$$;
    this.$_ae$ = $DvtChartTypeUtils$$;
    this.$_gap$ = $DvtChartPieLabelUtils$$;
    this.$_ir$ = $DvtChartPieLabelInfo$$;
    $dvt$$2$$ = this.$_makeWedgePath$(0);
    this.$setCmds$($dvt$$2$$)
  };
  $DvtChartSelectableWedge$$.prototype.$_makeWedgePath$ = function $$DvtChartSelectableWedge$$$$$_makeWedgePath$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = Math.max(this.$_rx$ - $DvtSparkChartEventManager$$, 0), $DvtSparkChartAutomation$$ = Math.max(this.$_ry$ - $DvtSparkChartEventManager$$, 0), $DvtChartStyleUtils$$ = this.$_ir$ ? this.$_ir$ + $DvtSparkChartEventManager$$ : 0, $DvtChartTypeUtils$$ = 360 == this.$_ae$ ? $dvt$$2$$.$Math$.$degreesToRads$(359.99) : $dvt$$2$$.$Math$.$degreesToRads$(this.$_ae$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Math$.$degreesToRads$(this.$_sa$), $DvtChartPieLabelInfo$$ = (360 == this.$_ae$ || 
    $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? 0 : this.$_gap$ + 2 * $DvtSparkChartEventManager$$) / 2, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$ < $DvtSparkChartDefaults$$ ? Math.asin($DvtChartPieLabelInfo$$ / $DvtSparkChartDefaults$$) : 0;
    $DvtSparkChartEventManager$$ = -$DvtChartTypeUtils$$ / 2 - $DvtChartPieLabelUtils$$;
    var $DvtChartDataChangeFunnelSlice$$ = Math.min(5 * $DvtChartPieLabelInfo$$, 0 < $DvtChartTypeUtils$$ ? Math.abs($DvtChartPieLabelInfo$$ / Math.sin($DvtChartTypeUtils$$ / 2)) : 0), $DvtChartMarkerUtils$$ = this.$_cx$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeRangeMarker$$ = this.$_cy$ + Math.sin($DvtSparkChartEventManager$$) * (0 == $DvtSparkChartDefaults$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartDataChangeFunnelSlice$$ * $DvtSparkChartAutomation$$ / 
    $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = this.$_cx$ + Math.cos(-$DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartDefaults$$;
    var $DvtChartDataChangeFunnelSlice$$ = this.$_cy$ + Math.sin(-$DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$) * $DvtSparkChartAutomation$$, $DvtChartPieUtils$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$ + $DvtChartPieRenderUtils$$) * $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$ + $DvtChartPieRenderUtils$$) * $DvtSparkChartAutomation$$;
    if(0 < $DvtChartStyleUtils$$) {
      var $DvtChartDataChangeMarker$$ = $DvtChartPieLabelInfo$$ < $DvtChartStyleUtils$$ ? Math.asin($DvtChartPieLabelInfo$$ / $DvtChartStyleUtils$$) : 0, $DvtChartMarkerUtils$$ = this.$_cx$ + Math.cos(-$DvtChartDataChangeMarker$$ - $DvtChartPieLabelUtils$$) * $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$ = this.$_cy$ + Math.sin(-$DvtChartDataChangeMarker$$ - $DvtChartPieLabelUtils$$) * $DvtChartStyleUtils$$, $DvtChartDataChangeRangeMarker$$ = this.$_cx$ + Math.cos(-$DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$ + 
      $DvtChartDataChangeMarker$$) * $DvtChartStyleUtils$$, $DvtChartDataChangeMarker$$ = this.$_cy$ + Math.sin(-$DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$ + $DvtChartDataChangeMarker$$) * $DvtChartStyleUtils$$;
      360 == this.$_ae$ ? ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.moveTo($DvtChartMarkerUtils$$, 
      $DvtChartPieLabelInfo$$)) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartMarkerUtils$$, 
      $DvtChartPieLabelInfo$$));
      $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartStyleUtils$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, 0, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$)
    }else {
      360 == this.$_ae$ ? ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieUtils$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$)) : ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartPieUtils$$, 
      $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, 1, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$))
    }
    return $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.closePath()
  };
  $DvtChartSelectableWedge$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableWedge$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH$ : $DvtChartSelectableWedge$$.$_OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_makeWedgePath$($DvtSparkChartEventManager$$ + $DvtChartSelectableWedge$$.$_INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($DvtSparkChartDefaults$$), this.$InnerChild$.$setCmds$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), 
    this.$addChild$(this.$InnerChild$))
  };
  $DvtChartSelectableWedge$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableWedge$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$())
  };
  $DvtChartSelectableWedge$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableWedge$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_shapeStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartStyleUtils$$;
    this.$_outerColor$ = $DvtChartTypeUtils$$;
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$)
  };
  $DvtChartSelectableWedge$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableWedge$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
  };
  $DvtChartSelectableWedge$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableWedge$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
    this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
  };
  $DvtChartSelectableWedge$$.prototype.$setSelected$ = function $$DvtChartSelectableWedge$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
  };
  $DvtChartSelectableWedge$$.prototype.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSelectableRectangularPolygon$$, $dvt$$2$$.$Polygon$);
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ = 2;
  $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$ = 1.25;
  $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$ = 1;
  $DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ = 1;
  $DvtChartSelectableRectangularPolygon$$.prototype.$setStyleProperties$ = function $$DvtChartSelectableRectangularPolygon$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.$_fill$ = $DvtSparkChartEventManager$$;
    this.$_borderStroke$ = $DvtSparkChartDefaults$$;
    this.$_hoverColor$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_innerColor$ = $DvtChartStyleUtils$$;
    this.$_outerColor$ = $DvtChartTypeUtils$$;
    this.$setFill$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ && this.$setStroke$($DvtSparkChartDefaults$$)
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setAnimationParams$ = function $$DvtChartSelectableRectangularPolygon$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_x1$ = Math.min($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_x2$ = Math.max($dvt$$2$$[0], $dvt$$2$$[4]);
    this.$_y1$ = Math.min($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$_y2$ = Math.max($dvt$$2$$[1], $dvt$$2$$[5]);
    this.$setPoints$($dvt$$2$$);
    this.$_initializeSelectionEffects$()
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$showHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$hideHoverEffect$ = function $$DvtChartSelectableRectangularPolygon$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
    this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$setSelected$ = function $$DvtChartSelectableRectangularPolygon$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
  $DvtChartSelectableRectangularPolygon$$.prototype.$getPrimaryFill$ = $JSCompiler_get$$("$_fill$");
  $DvtChartSelectableRectangularPolygon$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartSelectableRectangularPolygon$$$$$_initializeSelectionEffects$$() {
    this.$setPoints$(this.$_createPointsArray$(this.$isSelected$() ? -$DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ : 0));
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ - $DvtChartSelectableRectangularPolygon$$.$SHAPE_EXPAND_SELECTION$ : $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($DvtSparkChartDefaults$$), this.$InnerChild$.$setPoints$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), 
    this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_showNestedBorders$ = function $$DvtChartSelectableRectangularPolygon$$$$$_showNestedBorders$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_initializeSelectionEffects$();
    $DvtSparkChartEventManager$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($DvtSparkChartEventManager$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($dvt$$2$$ ? (this.$setSolidFill$($dvt$$2$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$())
  };
  $DvtChartSelectableRectangularPolygon$$.prototype.$_createPointsArray$ = function $$DvtChartSelectableRectangularPolygon$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_x1$ + $dvt$$2$$, $DvtSparkChartDefaults$$ = this.$_x2$ - $dvt$$2$$, $DvtSparkChartAutomation$$ = this.$_y1$ + $dvt$$2$$;
    $dvt$$2$$ = this.$_y2$ - $dvt$$2$$;
    return[$DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$]
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxis$$, $dvt$$2$$.$Axis$);
  $DvtChartAxis$$.prototype.$axisToPlotArea$ = function $$DvtChartAxis$$$$$axisToPlotArea$$($dvt$$2$$) {
    if("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$
    }
    if($dvt$$2$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $dvt$$2$$ -= this.$getLeftOverflow$();
    return Math.round(10 * $dvt$$2$$) / 10
  };
  $DvtChartAxis$$.prototype.$plotAreaToAxis$ = function $$DvtChartAxis$$$$$plotAreaToAxis$$($dvt$$2$$) {
    if("tangential" == this.$getOptions$().position) {
      return $dvt$$2$$
    }
    if($dvt$$2$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $dvt$$2$$ += this.$getLeftOverflow$();
    return Math.round($dvt$$2$$)
  };
  $DvtChartAxis$$.prototype.$linearToActual$ = function $$DvtChartAxis$$$$$linearToActual$$($dvt$$2$$) {
    return this.$Info$.$linearToActual$($dvt$$2$$)
  };
  $DvtChartAxis$$.prototype.$actualToLinear$ = function $$DvtChartAxis$$$$$actualToLinear$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$($dvt$$2$$)
  };
  $DvtChartAxis$$.prototype.$getValueAt$ = function $$DvtChartAxis$$$$$getValueAt$$($dvt$$2$$) {
    return this.$Info$.$getValueAt$(this.$plotAreaToAxis$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getCoordAt$ = function $$DvtChartAxis$$$$$getCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getCoordAt$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getBoundedValueAt$ = function $$DvtChartAxis$$$$$getBoundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getBoundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getBoundedCoordAt$ = function $$DvtChartAxis$$$$$getBoundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getBoundedCoordAt$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getUnboundedValueAt$ = function $$DvtChartAxis$$$$$getUnboundedValueAt$$($dvt$$2$$) {
    return this.$Info$.$getUnboundedValueAt$(this.$plotAreaToAxis$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getUnboundedCoordAt$ = function $$DvtChartAxis$$$$$getUnboundedCoordAt$$($dvt$$2$$) {
    return this.$axisToPlotArea$(this.$Info$.$getUnboundedCoordAt$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$())
  };
  $DvtChartAxis$$.prototype.$getPosition$ = function $$DvtChartAxis$$$$$getPosition$$() {
    return this.$getOptions$().position
  };
  $DvtChartAxis$$.prototype.$isGroupAxis$ = function $$DvtChartAxis$$$$$isGroupAxis$$() {
    return this.$Info$ instanceof $dvt$$2$$.$GroupAxisInfo$
  };
  $DvtChartAxis$$.prototype.$getMajorTickCoords$ = function $$DvtChartAxis$$$$$getMajorTickCoords$$() {
    for(var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$])
    }
    return $dvt$$2$$
  };
  $DvtChartAxis$$.prototype.$getMinorTickCoords$ = function $$DvtChartAxis$$$$$getMinorTickCoords$$() {
    for(var $dvt$$2$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $dvt$$2$$[$DvtSparkChartEventManager$$] = this.$axisToPlotArea$($dvt$$2$$[$DvtSparkChartEventManager$$])
    }
    return $dvt$$2$$
  };
  $DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
    return this.$axisToPlotArea$(this.$Info$.$getBaselineCoord$())
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMin$ = function $$DvtChartAxis$$$$$getLinearGlobalMin$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMin$)
  };
  $DvtChartAxis$$.prototype.$getLinearGlobalMax$ = function $$DvtChartAxis$$$$$getLinearGlobalMax$$() {
    return this.$actualToLinear$(this.$Info$.$GlobalMax$)
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMin$ = function $$DvtChartAxis$$$$$getLinearViewportMin$$() {
    return this.$actualToLinear$(this.$Info$.$MinValue$)
  };
  $DvtChartAxis$$.prototype.$getLinearViewportMax$ = function $$DvtChartAxis$$$$$getLinearViewportMax$$() {
    return this.$actualToLinear$(this.$Info$.$MaxValue$)
  };
  $DvtChartAxis$$.prototype.$getUnboundedLinearValueAt$ = function $$DvtChartAxis$$$$$getUnboundedLinearValueAt$$($dvt$$2$$) {
    return this.$Info$.$actualToLinear$(this.$getUnboundedValueAt$($dvt$$2$$))
  };
  $DvtChartAxis$$.prototype.$isFullViewport$ = function $$DvtChartAxis$$$$$isFullViewport$$() {
    return this.$Info$.$MinValue$ == this.$Info$.$GlobalMin$ && this.$Info$.$MaxValue$ == this.$Info$.$GlobalMax$
  };
  $DvtChartAxis$$.prototype.$getLeftOverflow$ = function $$DvtChartAxis$$$$$getLeftOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getEndOverflow$() : this.$Info$.$getStartOverflow$()
  };
  $DvtChartAxis$$.prototype.$getRightOverflow$ = function $$DvtChartAxis$$$$$getRightOverflow$$() {
    return $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$Info$.$getStartOverflow$() : this.$Info$.$getEndOverflow$()
  };
  $DvtChartAxis$$.prototype.$getMinCoord$ = function $$DvtChartAxis$$$$$getMinCoord$$() {
    return this.$axisToPlotArea$(Math.min(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()))
  };
  $DvtChartAxis$$.prototype.$getMaxCoord$ = function $$DvtChartAxis$$$$$getMaxCoord$$() {
    return this.$axisToPlotArea$(Math.max(this.$Info$.$getStartCoord$(), this.$Info$.$getEndCoord$()))
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartBar$$, $DvtChartSelectableRectangularPolygon$$);
  $DvtChartBar$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ = 15;
  $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 5;
  $DvtChartBar$$.$_MAX_GAP_SIZE$ = 2;
  $DvtChartBar$$.prototype.$setSelected$ = function $$DvtChartBar$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = this.$_tempX1$, 
    this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : $JSCompiler_alias_NULL$$)))
  };
  $DvtChartBar$$.prototype.$getAnimationParams$ = function $$DvtChartBar$$$$$getAnimationParams$$($dvt$$2$$) {
    return $dvt$$2$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
  };
  $DvtChartBar$$.prototype.$setAnimationParams$ = function $$DvtChartBar$$$$$setAnimationParams$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3], $JSCompiler_alias_FALSE$$);
    if($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = this.$getIndicatorPosition$();
      $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y);
      $DvtSparkChartEventManager$$.$setAlpha$(1);
      $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$)
    }
  };
  $DvtChartBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartBar$$.prototype.$getInsertAnimation$ = function $$DvtChartBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartBar$$.prototype.$getIndicatorPosition$ = function $$DvtChartBar$$$$$getIndicatorPosition$$() {
    var $DvtSparkChartEventManager$$ = (this.$_x1$ + this.$_x2$) / 2, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + $DvtChartBar$$.$_INDICATOR_OFFSET$ : this.$_endCoord$ - $DvtChartBar$$.$_INDICATOR_OFFSET$;
    $DvtSparkChartDefaults$$ = this.$_bHoriz$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = this.$_bHoriz$ ? $DvtSparkChartEventManager$$ : $DvtSparkChartAutomation$$;
    return new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartBar$$.prototype.$_setBarCoords$ = function $$DvtChartBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartStyleUtils$$;
    this.$_origX1$ = this.$_x1$;
    this.$_origX2$ = this.$_x2$;
    this.$_origBaselineCoord$ = this.$_baselineCoord$;
    0 < this.$_dataItemGaps$ && ($DvtChartTypeUtils$$ && !this.$isSelected$()) && ($DvtSparkChartEventManager$$ = Math.ceil($DvtChartBar$$.$_MAX_GAP_SIZE$ * this.$_dataItemGaps$), $DvtSparkChartDefaults$$ = this.$_x2$ - this.$_x1$, $DvtSparkChartAutomation$$ = this.$_axisCoord$ == this.$_baselineCoord$, Math.abs(this.$_baselineCoord$ - this.$_endCoord$) >= $DvtChartBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && (this.$_bStacked$ && !$DvtSparkChartAutomation$$) && (this.$_baselineCoord$ += this.$_endCoord$ > 
    this.$_baselineCoord$ ? $DvtSparkChartEventManager$$ : -$DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ >= $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS$ && (1 == $dvt$$2$$.$Agent$.$getDevicePixelRatio$() && 0 < this.$_barGapRatio$ && $DvtSparkChartDefaults$$ > $DvtChartBar$$.$_MIN_BAR_WIDTH_FOR_GAPS_PIXEL_HINTING$ ? ($dvt$$2$$.$Agent$.$isPlatformGecko$() || this.$setPixelHinting$(), this.$_x1$ = Math.round(this.$_x1$), this.$_x2$ = Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = 
    this.$_x2$, this.$_x2$ -= $DvtSparkChartEventManager$$) : (this.$_x1$ += $DvtSparkChartEventManager$$ / 2, this.$_x2$ -= $DvtSparkChartEventManager$$ / 2)));
    this.$setPoints$(this.$_createPointsArray$());
    this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$));
    this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$($DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$))
  };
  $DvtChartBar$$.prototype.$_createPointsArray$ = function $$DvtChartBar$$$$$_createPointsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_baselineCoord$, $DvtSparkChartDefaults$$ = this.$_endCoord$, $DvtSparkChartAutomation$$ = this.$_x1$, $DvtChartStyleUtils$$ = this.$_x2$;
    if(0 < $dvt$$2$$) {
      if(Math.abs($DvtSparkChartAutomation$$ - $DvtChartStyleUtils$$) < 2 * $dvt$$2$$ || Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartDefaults$$) < 2 * $dvt$$2$$) {
        return[]
      }
      $DvtSparkChartAutomation$$ += $dvt$$2$$;
      $DvtChartStyleUtils$$ -= $dvt$$2$$;
      $DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$ ? ($DvtSparkChartEventManager$$ -= $dvt$$2$$, $DvtSparkChartDefaults$$ += $dvt$$2$$) : ($DvtSparkChartEventManager$$ += $dvt$$2$$, $DvtSparkChartDefaults$$ -= $dvt$$2$$)
    }
    return this.$_bHoriz$ ? [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$] : [$DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$]
  };
  $DvtChartBar$$.prototype.$_initializeSelectionEffects$ = function $$DvtChartBar$$$$$_initializeSelectionEffects$$() {
    var $DvtSparkChartEventManager$$ = this.$isSelected$() ? $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH$ : $DvtChartSelectableRectangularPolygon$$.$OUTER_BORDER_WIDTH_HOVER$, $DvtSparkChartDefaults$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = this.$_createPointsArray$($DvtSparkChartEventManager$$ + $DvtChartSelectableRectangularPolygon$$.$INNER_BORDER_WIDTH$);
    this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($DvtSparkChartDefaults$$), this.$InnerChild$.$setPoints$($DvtSparkChartEventManager$$)) : (this.$OuterChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartEventManager$$), this.$InnerChild$.$setInvisibleFill$(), 
    this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
  };
  $DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
    var $DvtSparkChartEventManager$$ = Math.min(this.$_x2$, this.$_x1$), $DvtSparkChartDefaults$$ = Math.min(this.$_endCoord$, this.$_baselineCoord$), $DvtSparkChartAutomation$$ = Math.abs(this.$_x2$ - this.$_x1$), $DvtChartStyleUtils$$ = Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
    return this.$_bHoriz$ ? new $dvt$$2$$.$Rectangle$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$) : new $dvt$$2$$.$Rectangle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  };
  $DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($dvt$$2$$) {
    return this.$ConvertCoordSpaceRect$(this.$getBoundingBox$(), $dvt$$2$$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCandlestick$$, $dvt$$2$$.$Container$);
  $DvtChartCandlestick$$.$_BAR_WIDTH$ = 0.3;
  $DvtChartCandlestick$$.prototype.$setChangeStyle$ = function $$DvtChartCandlestick$$$$$setChangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    this.$_changeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  };
  $DvtChartCandlestick$$.prototype.$setRangeStyle$ = function $$DvtChartCandlestick$$$$$setRangeStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_rangeShape$ && this.$_rangeShape$.$setStyleProperties$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartCandlestick$$.prototype.$setSelected$ = function $$DvtChartCandlestick$$$$$setSelected$$($dvt$$2$$) {
    this.$_changeShape$.$setSelected$($dvt$$2$$);
    this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($dvt$$2$$)
  };
  $DvtChartCandlestick$$.prototype.$showHoverEffect$ = function $$DvtChartCandlestick$$$$$showHoverEffect$$() {
    this.$_changeShape$.$showHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$()
  };
  $DvtChartCandlestick$$.prototype.$hideHoverEffect$ = function $$DvtChartCandlestick$$$$$hideHoverEffect$$() {
    this.$_changeShape$.$hideHoverEffect$();
    this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$()
  };
  $DvtChartCandlestick$$.prototype.$getDisplayAnimation$ = function $$DvtChartCandlestick$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    var $DvtSparkChartDefaults$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$);
    this.$_rangeShape$ && ($DvtSparkChartDefaults$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtChartCandlestick$$.$_getInitialPoints$($DvtSparkChartDefaults$$)), $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$
  };
  $DvtChartCandlestick$$.prototype.$getDeleteAnimation$ = function $$DvtChartCandlestick$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_changeShape$.$getPoints$()));
    this.$_rangeShape$ && $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartCandlestick$$.$_getInitialPoints$(this.$_rangeShape$.$getPoints$()));
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartCandlestick$$.prototype.$getInsertAnimation$ = function $$DvtChartCandlestick$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    $DvtSparkChartEventManager$$ = this.$getDisplayAnimation$($DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartCandlestick$$.prototype.$getUpdateAnimation$ = function $$DvtChartCandlestick$$$$$getUpdateAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$), $DvtChartStyleUtils$$ = this.$_changeShape$.$getPoints$();
    this.$_changeShape$.$setPoints$($DvtSparkChartDefaults$$.$_changeShape$.$getPoints$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartStyleUtils$$);
    var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$_changeShape$.$getPrimaryFill$().$clone$(), $DvtChartPieLabelUtils$$ = this.$_changeShape$.$getPrimaryFill$();
    $DvtChartStyleUtils$$ || (this.$_changeShape$.$setFill$($DvtChartTypeUtils$$), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $DvtChartPieLabelUtils$$));
    this.$_rangeShape$ && $DvtSparkChartDefaults$$.$_rangeShape$ && ($DvtChartStyleUtils$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtSparkChartDefaults$$.$_rangeShape$.$getPoints$()), $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartStyleUtils$$));
    return $DvtSparkChartAutomation$$
  };
  $DvtChartCandlestick$$.prototype.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
  $DvtChartCandlestick$$.$_getInitialPoints$ = function $$DvtChartCandlestick$$$$_getInitialPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$[0], $DvtSparkChartDefaults$$ = $dvt$$2$$[2];
    $dvt$$2$$ = ($dvt$$2$$[1] + $dvt$$2$$[5]) / 2;
    return[$DvtSparkChartEventManager$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$]
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartCoord$$, $dvt$$2$$.$Obj$);
  $DvtChartCoord$$.prototype.$isUpstep$ = function $$DvtChartCoord$$$$$isUpstep$$($dvt$$2$$) {
    return Math.abs(this.$y2$ - $dvt$$2$$) > Math.abs(this.$y1$ - $dvt$$2$$)
  };
  $DvtChartCoord$$.prototype.$clone$ = function $$DvtChartCoord$$$$$clone$$() {
    return new $DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineArea$$, $dvt$$2$$.$Container$);
  $DvtChartLineArea$$.$_INDICATOR_OFFSET$ = 8;
  $DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_arCoord$ = $dvt$$2$$;
    $DvtSparkChartEventManager$$ && (this.$_arBaseCoord$ = $DvtSparkChartEventManager$$);
    this.$removeChildren$();
    this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
    this.$_positionIndicators$()
  };
  $DvtChartLineArea$$.prototype.$isArea$ = $JSCompiler_get$$("$_bArea$");
  $DvtChartLineArea$$.prototype.$_getPointArrays$ = function $$DvtChartLineArea$$$$$_getPointArrays$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartPieLabelUtils$$ = [];
    $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartLineArea$$.$_convertToPointCoords$($DvtSparkChartEventManager$$);
    var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isPolar$(this.$_chart$), $DvtChartPieRenderUtils$$ = "centeredStepped" == $DvtSparkChartDefaults$$ || "centeredSegmented" == $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$ || "stepped" == $DvtSparkChartDefaults$$ || "segmented" == $DvtSparkChartDefaults$$, $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getGroupWidth$(this.$_chart$), $DvtChartDataChangeRangeMarker$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && 
    $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? -1 : 1, $DvtChartPieUtils$$;
    $DvtChartPieLabelInfo$$ && ($DvtChartPieUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1]);
    for(var $DvtChartDataChangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartRenderer$$, $DvtChartDataChangeBar$$ = $JSCompiler_alias_FALSE$$, $DvtChartDataChangeAbstract$$ = 0;$DvtChartDataChangeAbstract$$ < $DvtSparkChartEventManager$$.length;$DvtChartDataChangeAbstract$$++) {
      if($DvtSparkChartEventManager$$[$DvtChartDataChangeAbstract$$] == $JSCompiler_alias_NULL$$) {
        if(!$DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$) && ($DvtChartDataChangeFunnelSlice$$ && !$DvtChartPieLabelInfo$$ && $DvtChartPieUtils$$ && !$DvtChartRenderer$$) && ($DvtChartDataChangeMarker$$ = $DvtChartPieRenderUtils$$ ? $DvtChartPieUtils$$.x + 0.5 * $DvtChartMarkerUtils$$ * $DvtChartDataChangeRangeMarker$$ : $DvtChartPieUtils$$.x + $DvtChartMarkerUtils$$ * $DvtChartDataChangeRangeMarker$$, this.$_pushCoord$($DvtChartPieLabelUtils$$, $DvtChartDataChangeMarker$$, $DvtChartPieUtils$$.y)), 
        "jet" == this.$_chart$.$getOptions$()._environment || !$DvtChartAxisUtils$$.$isMixedFrequency$(this.$_chart$)) {
          $DvtChartPieLabelUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$), $DvtChartPieUtils$$ = $JSCompiler_alias_NULL$$
        }
      }else {
        $DvtChartDataChangeMarker$$ = $DvtSparkChartEventManager$$[$DvtChartDataChangeAbstract$$];
        $DvtChartRenderer$$ = $DvtSparkChartEventManager$$[$DvtChartDataChangeAbstract$$].$_isY2$;
        $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$ ? $DvtChartDataChangeMarker$$.x - $DvtChartMarkerUtils$$ / 2 * $DvtChartDataChangeRangeMarker$$ : $DvtChartDataChangeMarker$$.x;
        $DvtChartRenderer$$ && ($DvtChartDataChangeBar$$ && $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeLineArea$$ += $DvtChartMarkerUtils$$ * $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeBar$$ = !$DvtChartDataChangeBar$$);
        "curved" == $DvtSparkChartDefaults$$ && $DvtChartRenderer$$ && $DvtChartPieLabelUtils$$.push($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$);
        $DvtChartPieUtils$$ && $DvtChartDataChangeFunnelSlice$$ && this.$_pushCoord$($DvtChartPieLabelUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartPieUtils$$.y);
        if(!this.$_bArea$ && ("segmented" == $DvtSparkChartDefaults$$ || "centeredSegmented" == $DvtSparkChartDefaults$$)) {
          $DvtChartPieLabelUtils$$ = [], $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$)
        }
        this.$_pushCoord$($DvtChartPieLabelUtils$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$.y);
        $DvtChartPieUtils$$ = $DvtChartDataChangeMarker$$
      }
    }
    $DvtChartDataChangeFunnelSlice$$ && (!$DvtChartPieLabelInfo$$ && $DvtChartPieUtils$$ && !$DvtChartRenderer$$) && ($DvtChartDataChangeMarker$$ = $DvtChartPieRenderUtils$$ ? $DvtChartPieUtils$$.x + 0.5 * $DvtChartMarkerUtils$$ * $DvtChartDataChangeRangeMarker$$ : $DvtChartPieUtils$$.x + $DvtChartMarkerUtils$$ * $DvtChartDataChangeRangeMarker$$, this.$_pushCoord$($DvtChartPieLabelUtils$$, $DvtChartDataChangeMarker$$, $DvtChartPieUtils$$.y));
    $DvtChartPieLabelInfo$$ && 1 < $DvtSparkChartAutomation$$.length && ($DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.pop(), $DvtSparkChartAutomation$$[0] = $DvtChartPieLabelUtils$$.concat($DvtSparkChartAutomation$$[0]));
    return $DvtSparkChartAutomation$$
  };
  $DvtChartLineArea$$.prototype.$_pushCoord$ = function $$DvtChartLineArea$$$$$_pushCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), this.$_availSpace$);
    $DvtSparkChartEventManager$$.push(Math.round(10 * $DvtSparkChartDefaults$$.x) / 10, Math.round(10 * $DvtSparkChartDefaults$$.y) / 10)
  };
  $DvtChartLineArea$$.prototype.$_isRing$ = function $$DvtChartLineArea$$$$$_isRing$$() {
    if(!$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) || !$DvtChartAxisUtils$$.$hasGroupAxis$(this.$_chart$) || this.$_arCoord$.length < $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $dvt$$2$$ = 0;$dvt$$2$$ < this.$_arCoord$.length;$dvt$$2$$++) {
      if(this.$_arCoord$[$dvt$$2$$].x == $JSCompiler_alias_NULL$$) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtChartLineArea$$.prototype.$_getSplineType$ = function $$DvtChartLineArea$$$$$_getSplineType$$() {
    return $DvtChartTypeUtils$$.$isScatterBubble$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isPolar$(this.$_chart$) ? this.$_isRing$() ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isHorizontal$(this.$_chart$) ? $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_MONOTONE_VERTICAL$
  };
  $DvtChartLineArea$$.prototype.$_renderLines$ = function $$DvtChartLineArea$$$$$_renderLines$$() {
    for(var $DvtSparkChartEventManager$$ = this.$_getPointArrays$(this.$_arCoord$, this.$_type$), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      if(($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]) && 1 < $DvtSparkChartDefaults$$.length) {
        "curved" == this.$_type$ ? ($DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtSparkChartDefaults$$, $JSCompiler_alias_FALSE$$, this.$_getSplineType$()), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$($JSCompiler_alias_NULL$$)) : this.$_isRing$() ? ($DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setFill$($JSCompiler_alias_NULL$$)) : 
        $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polyline$(this.$getCtx$(), $DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$.$setStroke$(this.$_stroke$), this.$addChild$($DvtSparkChartDefaults$$)
      }
    }
  };
  $DvtChartLineArea$$.prototype.$_renderAreas$ = function $$DvtChartLineArea$$$$$_renderAreas$$() {
    var $DvtSparkChartEventManager$$ = this.$_arCoord$, $DvtSparkChartDefaults$$ = this.$_arBaseCoord$;
    !$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && (0 < $DvtSparkChartEventManager$$.length && 0 < $DvtSparkChartDefaults$$.length) && ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.slice(0), $DvtSparkChartEventManager$$[0].x != $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$[0].x != $JSCompiler_alias_NULL$$ && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, 0, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, 
    0, this.$_baseline$), $DvtSparkChartDefaults$$[0].x = $DvtSparkChartEventManager$$[0].x), $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x != $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x != $JSCompiler_alias_NULL$$ && ($DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.length - 1, this.$_baseline$), $DvtChartLineArea$$.$_removeAreaEdge$($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.length - 
    1, this.$_baseline$), $DvtSparkChartDefaults$$[$DvtSparkChartDefaults$$.length - 1].x = $DvtSparkChartEventManager$$[$DvtSparkChartEventManager$$.length - 1].x));
    $DvtSparkChartEventManager$$ = this.$_getPointArrays$($DvtSparkChartEventManager$$, this.$_type$);
    $DvtSparkChartDefaults$$ = this.$_getPointArrays$($DvtSparkChartDefaults$$, this.$_baseType$);
    if($DvtSparkChartEventManager$$.length == $DvtSparkChartDefaults$$.length) {
      for(var $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartStyleUtils$$++) {
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$], $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$[$DvtChartStyleUtils$$];
        if(!(2 > $DvtChartPieLabelUtils$$.length)) {
          var $DvtChartPieRenderUtils$$ = "curved" == this.$_type$;
          $DvtSparkChartAutomation$$ = "curved" == this.$_baseType$;
          this.$_isRing$() && ($DvtChartPieRenderUtils$$ || $DvtChartPieLabelUtils$$.push($DvtChartPieLabelUtils$$[0], $DvtChartPieLabelUtils$$[1]), 2 <= $DvtChartPieLabelInfo$$.length && !$DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$.push($DvtChartPieLabelInfo$$[0], $DvtChartPieLabelInfo$$[1]));
          for(var $DvtChartDataChangeFunnelSlice$$ = [], $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartPieLabelInfo$$.length;$DvtChartMarkerUtils$$ += 2) {
            $DvtChartDataChangeFunnelSlice$$.unshift($DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$], $DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$ + 1])
          }
          $DvtChartPieRenderUtils$$ || $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelInfo$$ = this.$_getSplineType$(), $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartPieLabelUtils$$, $JSCompiler_alias_FALSE$$, $DvtChartPieLabelInfo$$) : $dvt$$2$$.$PathUtils$.$polyline$($DvtChartPieLabelUtils$$, $JSCompiler_alias_FALSE$$), $DvtChartPieLabelUtils$$ += $DvtSparkChartAutomation$$ ? $DvtChartLineArea$$.$_getCurvedPathCommands$($DvtChartDataChangeFunnelSlice$$, 
          $JSCompiler_alias_TRUE$$, $DvtChartPieLabelInfo$$) : $dvt$$2$$.$PathUtils$.$polyline$($DvtChartDataChangeFunnelSlice$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$ += $dvt$$2$$.$PathUtils$.closePath(), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtChartPieLabelUtils$$)) : ($DvtSparkChartAutomation$$ = $DvtChartDataChangeFunnelSlice$$.concat($DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$(this.$getCtx$(), $DvtSparkChartAutomation$$));
          $DvtSparkChartAutomation$$.$setFill$(this.$_fill$);
          this.$_stroke$ && $DvtSparkChartAutomation$$.$setStroke$(this.$_stroke$);
          this.$addChild$($DvtSparkChartAutomation$$)
        }
      }
    }
  };
  $DvtChartLineArea$$.prototype.$_positionIndicators$ = function $$DvtChartLineArea$$$$$_positionIndicators$$() {
    for(var $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < this.$_arCoord$.length;$DvtChartStyleUtils$$++) {
      if($DvtSparkChartAutomation$$ = this.$_arCoord$[$DvtChartStyleUtils$$], ($DvtSparkChartEventManager$$ = this.$_indicatorMap$[$DvtSparkChartAutomation$$.$groupIndex$]) && $DvtSparkChartEventManager$$.$indicator$) {
        $DvtSparkChartDefaults$$ = ($DvtSparkChartAutomation$$.$isUpstep$(this.$_baseline$) ? $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y1$) + $DvtChartLineArea$$.$_INDICATOR_OFFSET$ * ($DvtSparkChartEventManager$$.direction == $DvtChartDataChangeUtils$$.$DIR_UP$ ? -1 : 1), $DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartDefaults$$), this.$_availSpace$), $DvtSparkChartEventManager$$ = 
        $DvtSparkChartEventManager$$.$indicator$, $DvtSparkChartEventManager$$.$setTranslate$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtSparkChartEventManager$$.$setAlpha$(1), $DvtSparkChartEventManager$$.getParent().$addChild$($DvtSparkChartEventManager$$)
      }
    }
  };
  $DvtChartLineArea$$.prototype.$getAnimationParams$ = function $$DvtChartLineArea$$$$$getAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arCoord$ : $JSCompiler_alias_NULL$$, this.$_baseline$)
  };
  $DvtChartLineArea$$.prototype.$setAnimationParams$ = function $$DvtChartLineArea$$$$$setAnimationParams$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$);
    this.$setCoords$($dvt$$2$$)
  };
  $DvtChartLineArea$$.prototype.$getBaseAnimationParams$ = function $$DvtChartLineArea$$$$$getBaseAnimationParams$$($dvt$$2$$) {
    return $DvtChartLineArea$$.$_coordsToAnimationParams$(this.$_arBaseCoord$, $dvt$$2$$ ? $dvt$$2$$.$_arBaseCoord$ : $JSCompiler_alias_NULL$$, this.$_baseline$)
  };
  $DvtChartLineArea$$.prototype.$setBaseAnimationParams$ = function $$DvtChartLineArea$$$$$setBaseAnimationParams$$($dvt$$2$$) {
    this.$_arBaseCoord$ = $DvtChartLineArea$$.$_animationParamsToCoords$($dvt$$2$$)
  };
  $DvtChartLineArea$$.prototype.$getCommonGroupIndices$ = function $$DvtChartLineArea$$$$$getCommonGroupIndices$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_arCoord$.length;$DvtSparkChartDefaults$$++) {
      if(!(this.$_arCoord$[$DvtSparkChartDefaults$$].$filtered$ || this.$_arCoord$[$DvtSparkChartDefaults$$].x == $JSCompiler_alias_NULL$$)) {
        for(var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.$_arCoord$.length;$DvtSparkChartAutomation$$++) {
          if(!($dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].$filtered$ || $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].x == $JSCompiler_alias_NULL$$) && this.$_arCoord$[$DvtSparkChartDefaults$$].group == $dvt$$2$$.$_arCoord$[$DvtSparkChartAutomation$$].group) {
            $DvtSparkChartEventManager$$.push(this.$_arCoord$[$DvtSparkChartDefaults$$].$groupIndex$);
            break
          }
        }
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartLineArea$$.prototype.$addIndicator$ = function $$DvtChartLineArea$$$$$addIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$setAlpha$(0);
    this.$_indicatorMap$[$dvt$$2$$] = {direction:$DvtSparkChartEventManager$$, $indicator$:$DvtSparkChartDefaults$$}
  };
  $DvtChartLineArea$$.prototype.$removeIndicators$ = function $$DvtChartLineArea$$$$$removeIndicators$$() {
    for(var $dvt$$2$$ in this.$_indicatorMap$) {
      var $DvtSparkChartEventManager$$ = this.$_indicatorMap$[$dvt$$2$$].$indicator$;
      $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$.getParent().removeChild($DvtSparkChartEventManager$$)
    }
    this.$_indicatorMap$ = {}
  };
  $DvtChartLineArea$$.$_convertToPointCoords$ = function $$DvtChartLineArea$$$$_convertToPointCoords$$($DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      if(!$DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$filtered$) {
        if($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x == $JSCompiler_alias_NULL$$) {
          $DvtSparkChartDefaults$$.push($JSCompiler_alias_NULL$$)
        }else {
          if($DvtSparkChartDefaults$$.push(new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$)), $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y1$ != $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$) {
            var $DvtChartStyleUtils$$ = new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].x, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].$y2$);
            $DvtChartStyleUtils$$.$_isY2$ = $JSCompiler_alias_TRUE$$;
            $DvtSparkChartDefaults$$.push($DvtChartStyleUtils$$)
          }
        }
      }
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartLineArea$$.$_coordsToAnimationParams$ = function $$DvtChartLineArea$$$$_coordsToAnimationParams$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtSparkChartDefaults$$ && 0 < $DvtSparkChartDefaults$$.length) {
      if($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.slice(0);
        $DvtSparkChartDefaults$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartDefaults$$);
        for(var $DvtChartStyleUtils$$ = $DvtChartLineArea$$.$_coordsToGroups$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.length, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtChartPieLabelInfo$$;$DvtChartPieLabelInfo$$--) {
          $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartPieLabelInfo$$], $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$), -1 == $DvtChartPieLabelUtils$$ ? (0 == $DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[0].$clone$(), $DvtSparkChartEventManager$$[0] = $DvtSparkChartEventManager$$[0].$clone$(), $DvtChartLineArea$$.$_removeCoordJump$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$[0], 
          $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$ - 1].$clone$(), $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$ - 1] = $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$ - 1].$clone$(), $DvtChartLineArea$$.$_removeCoordJump$($DvtSparkChartEventManager$$[$DvtChartTypeUtils$$ - 1], $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)), $DvtChartPieLabelUtils$$.$groupIndex$ = -1, $DvtSparkChartEventManager$$.splice($DvtChartTypeUtils$$, 
          0, $DvtChartPieLabelUtils$$)) : $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$
        }
      }else {
        $DvtSparkChartEventManager$$ = [];
        for($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartDefaults$$.length;$DvtChartPieLabelInfo$$++) {
          $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($DvtSparkChartDefaults$$[$DvtChartPieLabelInfo$$].x, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$))
        }
      }
    }
    $DvtSparkChartAutomation$$ = [];
    for($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelInfo$$++) {
      $DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$filtered$ || ($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x == $JSCompiler_alias_NULL$$ ? ($DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity), $DvtSparkChartAutomation$$.push(Infinity)) : ($DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$y1$), $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$y2$)), 
      $DvtSparkChartAutomation$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].$groupIndex$))
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartLineArea$$.$_animationParamsToCoords$ = function $$DvtChartLineArea$$$$_animationParamsToCoords$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      Infinity == $dvt$$2$$[$DvtSparkChartDefaults$$] || isNaN($dvt$$2$$[$DvtSparkChartDefaults$$]) ? $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $dvt$$2$$[$DvtSparkChartDefaults$$ + 3])) : $DvtSparkChartEventManager$$.push(new $DvtChartCoord$$($dvt$$2$$[$DvtSparkChartDefaults$$], $dvt$$2$$[$DvtSparkChartDefaults$$ + 1], $dvt$$2$$[$DvtSparkChartDefaults$$ + 2], $dvt$$2$$[$DvtSparkChartDefaults$$ + 3]))
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartLineArea$$.$_coordsToGroups$ = function $$DvtChartLineArea$$$$_coordsToGroups$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      $dvt$$2$$[$DvtSparkChartDefaults$$].$filtered$ || $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartDefaults$$].group)
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartLineArea$$.$_removeCoordJump$ = function $$DvtChartLineArea$$$$_removeCoordJump$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y1$ = $DvtSparkChartEventManager$$.$y2$ : $dvt$$2$$.$y2$ = $dvt$$2$$.$y1$
  };
  $DvtChartLineArea$$.$_getCurvedPathCommands$ = function $$DvtChartLineArea$$$$_getCurvedPathCommands$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = [], $DvtChartTypeUtils$$ = [];
    $DvtChartStyleUtils$$.push($DvtChartTypeUtils$$);
    for(var $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$ += 2) {
      $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$] == $JSCompiler_alias_NULL$$ ? ($DvtChartTypeUtils$$ = [], $DvtChartStyleUtils$$.push($DvtChartTypeUtils$$)) : $DvtChartTypeUtils$$.push($DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$ + 1])
    }
    $DvtSparkChartAutomation$$ == $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $DvtChartStyleUtils$$.length && ($DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.pop(), $DvtChartStyleUtils$$[0] = $DvtSparkChartAutomation$$.concat($DvtChartStyleUtils$$[0]), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$SPLINE_TYPE_CARDINAL$);
    $DvtSparkChartEventManager$$ = "";
    for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartStyleUtils$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$], $DvtSparkChartEventManager$$ += $dvt$$2$$.$PathUtils$.$curveThroughPoints$($DvtChartTypeUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = $JSCompiler_alias_TRUE$$
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartLineArea$$.$_removeAreaEdge$ = function $$DvtChartLineArea$$$$_removeAreaEdge$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartEventManager$$].$clone$();
    $DvtSparkChartAutomation$$.$isUpstep$($DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.$y1$ = $DvtSparkChartAutomation$$.$y2$ : $DvtSparkChartAutomation$$.$y2$ = $DvtSparkChartAutomation$$.$y1$;
    $dvt$$2$$[$DvtSparkChartEventManager$$] = $DvtSparkChartAutomation$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLineMarker$$, $dvt$$2$$.$SimpleMarker$);
  $DvtChartLineMarker$$.$DEFAULT_STROKE$ = new $dvt$$2$$.$SolidStroke$("none");
  $DvtChartLineMarker$$.$SELECTED_FILL$ = new $dvt$$2$$.$SolidFill$("#FFFFFF");
  $DvtChartLineMarker$$.$SELECTED_STROKE$ = new $dvt$$2$$.$SolidStroke$("#5A5A5A", 1, 1.5);
  $DvtChartLineMarker$$.prototype.$setDataColor$ = function $$DvtChartLineMarker$$$$$setDataColor$$($DvtSparkChartEventManager$$) {
    this.$_dataColor$ = $DvtSparkChartEventManager$$;
    this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$, 1, 1.5)
  };
  $DvtChartLineMarker$$.prototype.$showHoverEffect$ = function $$DvtChartLineMarker$$$$$showHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
    this.$setStroke$(this.$_hoverStroke$)
  };
  $DvtChartLineMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartLineMarker$$$$$hideHoverEffect$$() {
    this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
    this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)
  };
  $DvtChartLineMarker$$.prototype.$setSelected$ = function $$DvtChartLineMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)))
  };
  $DvtChartLineMarker$$.prototype.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartOverview$$, $dvt$$2$$.$Overview$);
  $DvtChartOverview$$.prototype.$_renderChart$ = function $$DvtChartOverview$$$$$_renderChart$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$_chartContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$addChild$(this.$_chartContainer$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$({legend:{rendered:"off", size:$JSCompiler_alias_NULL$$}, xAxis:{viewportMin:$JSCompiler_alias_NULL$$, viewportMax:$JSCompiler_alias_NULL$$, viewportStartGroup:$JSCompiler_alias_NULL$$, viewportEndGroup:$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, size:$JSCompiler_alias_NULL$$, maxSize:0.5, title:$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off", size:$JSCompiler_alias_NULL$$}, y2Axis:{rendered:"off", size:$JSCompiler_alias_NULL$$}, 
    splitDualY:"off", title:{text:$JSCompiler_alias_NULL$$}, subtitle:{text:$JSCompiler_alias_NULL$$}, footnote:{text:$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:$JSCompiler_alias_TRUE$$}, $DvtSparkChartEventManager$$);
    $DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($DvtSparkChartEventManager$$.xAxis.tickLabel.rendered = "off");
    $DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && ($DvtSparkChartEventManager$$.series && $DvtSparkChartEventManager$$.series[0]) && ($DvtSparkChartEventManager$$.series = [$DvtSparkChartEventManager$$.series[0]], $DvtSparkChartEventManager$$.series[0].type = "lineWithArea");
    var $DvtChartStyleUtils$$ = this.$_parentChart$.$getOptions$().overview.content;
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$JsonUtils$.$merge$($DvtChartStyleUtils$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.zoomAndScroll = "off";
    this.$_chart$ || (this.$_chart$ = $dvt$$2$$.$Chart$.newInstance(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
    this.$_chartContainer$.$addChild$(this.$_chart$);
    this.$_chart$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$Rect$(this.$getCtx$(), 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    this.$_chartContainer$.$addChild$($DvtSparkChartEventManager$$);
    this.$_chart$.$getEventManager$().$setKeyboardHandler$($JSCompiler_alias_NULL$$);
    return this.$_chart$.$_plotAreaSpace$.$h$
  };
  $DvtChartOverview$$.prototype.$createBackground$ = $JSCompiler_emptyFn$$();
  $DvtChartOverview$$.prototype.$render$ = function $$DvtChartOverview$$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$dvt$$2$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
    $dvt$$2$$.animationOnClick = "off";
    $DvtSparkChartDefaults$$ = this.$_renderChart$($dvt$$2$$.chart, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartOverview$$.$superclass$.$render$.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartOverview$$.prototype.$destroy$ = function $$DvtChartOverview$$$$$destroy$$() {
    $DvtChartOverview$$.$superclass$.$destroy$.call(this);
    this.$_chart$ = this.$_parentChart$ = $JSCompiler_alias_NULL$$
  };
  $DvtChartOverview$$.prototype.$isLeftAndRightFilterRendered$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
  $DvtChartOverview$$.prototype.$HandleKeyDown$ = $JSCompiler_emptyFn$$();
  $DvtChartOverview$$.prototype.$HandleKeyUp$ = $JSCompiler_emptyFn$$();
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPolarBar$$, $DvtChartSelectableWedge$$);
  $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ = 4;
  $DvtChartPolarBar$$.$_MAX_DATA_ITEM_GAP$ = 3;
  $DvtChartPolarBar$$.prototype.$getAnimationParams$ = function $$DvtChartPolarBar$$$$$getAnimationParams$$() {
    return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
  };
  $DvtChartPolarBar$$.prototype.$setAnimationParams$ = function $$DvtChartPolarBar$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_setBarCoords$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3])
  };
  $DvtChartPolarBar$$.prototype.$getPrimaryFill$ = function $$DvtChartPolarBar$$$$$getPrimaryFill$$() {
    return this.$getFill$()
  };
  $DvtChartPolarBar$$.prototype.$getDisplayAnimation$ = function $$DvtChartPolarBar$$$$$getDisplayAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPolarBar$$.prototype.$getDeleteAnimation$ = function $$DvtChartPolarBar$$$$$getDeleteAnimation$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPolarBar$$.prototype.$getInsertAnimation$ = function $$DvtChartPolarBar$$$$$getInsertAnimation$$($DvtSparkChartEventManager$$) {
    this.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = this.$getAnimationParams$();
    this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPolarBar$$.prototype.$_setBarCoords$ = function $$DvtChartPolarBar$$$$$_setBarCoords$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartTypeUtils$$ = this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, $DvtChartPieLabelUtils$$ = this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $DvtChartPieLabelInfo$$ = Math.max($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = Math.abs($DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$) >= $DvtChartPolarBar$$.$_MIN_BAR_LENGTH_FOR_GAPS$ && this.$_axisCoord$ != $DvtSparkChartEventManager$$ ? Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) + 
    this.$_dataItemGaps$ : Math.min($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = 360 - $dvt$$2$$.$Math$.$radsToDegrees$(Math.max($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)) + 90;
    this.$setWedgeParams$($DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $dvt$$2$$.$Math$.$radsToDegrees$(Math.abs($DvtChartStyleUtils$$ - $DvtSparkChartAutomation$$)), this.$_dataItemGaps$, $DvtChartPieRenderUtils$$);
    var $DvtChartPieRenderUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, this.$_availSpace$), $DvtChartMarkerUtils$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, this.$_availSpace$), $DvtChartDataChangeRangeMarker$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, 
    $DvtChartStyleUtils$$, this.$_availSpace$), $DvtChartTypeUtils$$ = Math.min($DvtChartPieRenderUtils$$.x, $DvtChartDataChangeFunnelSlice$$.x, $DvtChartMarkerUtils$$.x, $DvtChartDataChangeRangeMarker$$.x), $DvtChartPieLabelUtils$$ = Math.max($DvtChartPieRenderUtils$$.x, $DvtChartDataChangeFunnelSlice$$.x, $DvtChartMarkerUtils$$.x, $DvtChartDataChangeRangeMarker$$.x), $DvtChartPieLabelInfo$$ = Math.min($DvtChartPieRenderUtils$$.y, $DvtChartDataChangeFunnelSlice$$.y, $DvtChartMarkerUtils$$.y, $DvtChartDataChangeRangeMarker$$.y), 
    $DvtChartPieRenderUtils$$ = Math.max($DvtChartPieRenderUtils$$.y, $DvtChartDataChangeFunnelSlice$$.y, $DvtChartMarkerUtils$$.y, $DvtChartDataChangeRangeMarker$$.y);
    this.$_bbox$ = new $dvt$$2$$.$Rectangle$($DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$ - $DvtChartPieLabelInfo$$);
    this.$_baselineCoord$ = $DvtSparkChartEventManager$$;
    this.$_endCoord$ = $DvtSparkChartDefaults$$;
    this.$_x1$ = $DvtSparkChartAutomation$$;
    this.$_x2$ = $DvtChartStyleUtils$$
  };
  $DvtChartPolarBar$$.prototype.$getBoundingBox$ = $JSCompiler_get$$("$_bbox$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRangeMarker$$, $dvt$$2$$.$Path$);
  $DvtChartRangeMarker$$.prototype.$_drawPath$ = function $$DvtChartRangeMarker$$$$$_drawPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartTypeUtils$$ = Math.atan2($DvtChartStyleUtils$$ - $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = this.$_markerSize$ / 2, $DvtChartPieLabelInfo$$ = Math.PI / 8, $DvtChartTypeUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartTypeUtils$$ + $DvtChartPieLabelInfo$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartTypeUtils$$ + $DvtChartPieLabelInfo$$)) + 
    $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieLabelInfo$$), 1, $DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartTypeUtils$$ - $DvtChartPieLabelInfo$$), $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$ * Math.sin($DvtChartTypeUtils$$ - $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartTypeUtils$$ + $DvtChartPieLabelInfo$$), 
    $DvtChartStyleUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartTypeUtils$$ + $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, 2 * (Math.PI - $DvtChartPieLabelInfo$$), 1, $DvtSparkChartAutomation$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartTypeUtils$$ - $DvtChartPieLabelInfo$$), $DvtChartStyleUtils$$ - $DvtChartPieLabelUtils$$ * Math.sin($DvtChartTypeUtils$$ - $DvtChartPieLabelInfo$$)) + $dvt$$2$$.$PathUtils$.closePath();
    this.$setCmds$($DvtChartTypeUtils$$);
    this.$_x1$ = $DvtSparkChartEventManager$$;
    this.$_y1$ = $DvtSparkChartDefaults$$;
    this.$_x2$ = $DvtSparkChartAutomation$$;
    this.$_y2$ = $DvtChartStyleUtils$$
  };
  $DvtChartRangeMarker$$.prototype.$setStyleProperties$ = function $$DvtChartRangeMarker$$$$$setStyleProperties$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    this.$_dataColor$ = $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtSparkChartAutomation$$);
    this.$_isInvisible$ ? (this.$setInvisibleFill$(), this.$_hoverStroke$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5)) : (this.$setFill$($DvtSparkChartEventManager$$), this.$setStroke$($DvtSparkChartDefaults$$), this.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$, 1, 1), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 3.5)), this.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 
    1, 4.5)), this.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 4.5)))
  };
  $DvtChartRangeMarker$$.prototype.$showHoverEffect$ = function $$DvtChartRangeMarker$$$$$showHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$, this.$setStroke$(this.$_hoverStroke$)) : $DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this)
  };
  $DvtChartRangeMarker$$.prototype.$hideHoverEffect$ = function $$DvtChartRangeMarker$$$$$hideHoverEffect$$() {
    this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$, this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$$.$SELECTED_STROKE$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$)) : $DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this)
  };
  $DvtChartRangeMarker$$.prototype.$setSelected$ = function $$DvtChartRangeMarker$$$$$setSelected$$($dvt$$2$$) {
    this.$_isInvisible$ ? this.$IsSelected$ != $dvt$$2$$ && (this.$IsSelected$ = $dvt$$2$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$$.$SELECTED_FILL$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$SELECTED_STROKE$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$$.$DEFAULT_STROKE$))) : $DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, $dvt$$2$$)
  };
  $DvtChartRangeMarker$$.prototype.$UpdateSelectionEffect$ = function $$DvtChartRangeMarker$$$$$UpdateSelectionEffect$$() {
    this.$_isInvisible$ || $DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this)
  };
  $DvtChartRangeMarker$$.prototype.$getAnimationParams$ = function $$DvtChartRangeMarker$$$$$getAnimationParams$$() {
    return[this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$]
  };
  $DvtChartRangeMarker$$.prototype.$setAnimationParams$ = function $$DvtChartRangeMarker$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_drawPath$($dvt$$2$$[0], $dvt$$2$$[1], $dvt$$2$$[2], $dvt$$2$$[3])
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox$ = function $$DvtChartRangeMarker$$$$$getBoundingBox$$() {
    return this.$getBoundingBox1$().$getUnion$(this.$getBoundingBox2$())
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox1$ = function $$DvtChartRangeMarker$$$$$getBoundingBox1$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x1$ - this.$_markerSize$ / 2, this.$_y1$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$)
  };
  $DvtChartRangeMarker$$.prototype.$getBoundingBox2$ = function $$DvtChartRangeMarker$$$$$getBoundingBox2$$() {
    return new $dvt$$2$$.$Rectangle$(this.$_x2$ - this.$_markerSize$ / 2, this.$_y2$ - this.$_markerSize$ / 2, this.$_markerSize$, this.$_markerSize$)
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataCursor$$, $dvt$$2$$.$Container$);
  $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ = "SNAP";
  $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ = "SMOOTH";
  $DvtChartDataCursor$$.$BEHAVIOR_AUTO$ = "AUTO";
  $DvtChartDataCursor$$.$TOOLTIP_ID$ = "_dvtDataCursor";
  $DvtChartDataCursor$$.prototype.Init = function $$DvtChartDataCursor$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartDataCursor$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$);
    this.$_bHoriz$ = $DvtSparkChartAutomation$$;
    this.$_options$ = $DvtSparkChartDefaults$$;
    this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$setVisible$($JSCompiler_alias_FALSE$$);
    $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.lineColor;
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartDefaults$$.lineStyle), $DvtChartTypeUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, $DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$.$setStyle$($DvtChartStyleUtils$$);
    this.$_cursorLine$ = new $dvt$$2$$.$Line$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
    this.$_cursorLine$.$setStroke$($DvtChartTypeUtils$$);
    this.$addChild$(this.$_cursorLine$);
    "off" != $DvtSparkChartDefaults$$.markerDisplayed && (this.$_marker$ = new $dvt$$2$$.$Container$(this.$_context$), this.$_marker$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$addChild$(this.$_marker$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.markerSize, $DvtChartStyleUtils$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $DvtSparkChartDefaults$$ + 4 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 
    4 * $DvtSparkChartEventManager$$), $DvtChartStyleUtils$$.$setSolidFill$($DvtSparkChartAutomation$$), this.$_marker$.$addChild$($DvtChartStyleUtils$$), $DvtSparkChartEventManager$$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 2 * $DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$setSolidFill$("white"), this.$_marker$.$addChild$($DvtSparkChartEventManager$$), 
    this.$_markerInnerCircle$ = new $dvt$$2$$.$SimpleMarker$(this.$_context$, $dvt$$2$$.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$))
  };
  $DvtChartDataCursor$$.prototype.$render$ = function $$DvtChartDataCursor$$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = this.$isHorizontal$(), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtChartDataChangeFunnelSlice$$;
    if($DvtChartTypeUtils$$ != $JSCompiler_alias_NULL$$ && "" != $DvtChartTypeUtils$$) {
      var $DvtChartMarkerUtils$$ = this.$getCtx$().$getStageAbsolutePosition$(), $DvtChartDataChangeRangeMarker$$ = this.$getCtx$().$getTooltipManager$($DvtChartDataCursor$$.$TOOLTIP_ID$);
      $DvtChartDataChangeRangeMarker$$.$showDatatip$($DvtSparkChartDefaults$$ + $DvtChartMarkerUtils$$.x, $DvtSparkChartAutomation$$ + $DvtChartMarkerUtils$$.y, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $JSCompiler_alias_FALSE$$);
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeRangeMarker$$.$getTooltipBounds$();
      $DvtChartTypeUtils$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
      var $DvtChartPieUtils$$, $DvtChartDataChangeMarker$$;
      $DvtChartPieLabelInfo$$ ? ($DvtChartPieUtils$$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartEventManager$$.x - 0.75 * $DvtChartDataChangeFunnelSlice$$.$w$ : $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ - $DvtChartDataChangeFunnelSlice$$.$w$ / 4, $DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$ - $DvtChartDataChangeFunnelSlice$$.$h$ / 2, !$DvtChartPieRenderUtils$$ && $DvtChartPieUtils$$ - $DvtSparkChartDefaults$$ < $DvtChartTypeUtils$$ ? $DvtChartPieUtils$$ = $DvtSparkChartDefaults$$ + 
      $DvtChartTypeUtils$$ : $DvtChartPieRenderUtils$$ && $DvtSparkChartDefaults$$ - ($DvtChartPieUtils$$ + $DvtChartDataChangeFunnelSlice$$.$w$) < $DvtChartTypeUtils$$ && ($DvtChartPieUtils$$ = $DvtSparkChartDefaults$$ - $DvtChartTypeUtils$$ - $DvtChartDataChangeFunnelSlice$$.$w$)) : ($DvtChartPieUtils$$ = $DvtChartStyleUtils$$ - $DvtChartDataChangeFunnelSlice$$.$w$ / 2, $DvtChartDataChangeMarker$$ = $DvtSparkChartEventManager$$.y - 0.75 * $DvtChartDataChangeFunnelSlice$$.$h$, $DvtSparkChartAutomation$$ - 
      ($DvtChartDataChangeMarker$$ + $DvtChartDataChangeFunnelSlice$$.$h$) < $DvtChartTypeUtils$$ && ($DvtChartDataChangeMarker$$ = $DvtSparkChartAutomation$$ - $DvtChartTypeUtils$$ - $DvtChartDataChangeFunnelSlice$$.$h$));
      $DvtChartDataChangeRangeMarker$$.$positionTip$($DvtChartPieUtils$$ + $DvtChartMarkerUtils$$.x, $DvtChartDataChangeMarker$$ + $DvtChartMarkerUtils$$.y);
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeRangeMarker$$.$getTooltipBounds$();
      $DvtChartDataChangeFunnelSlice$$.x -= $DvtChartMarkerUtils$$.x;
      $DvtChartDataChangeFunnelSlice$$.y -= $DvtChartMarkerUtils$$.y
    }
    $DvtChartPieLabelInfo$$ ? (this.$_cursorLine$.$setTranslateY$($DvtChartStyleUtils$$), $DvtChartPieRenderUtils$$ ? (this.$_cursorLine$.$setX1$($DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$.x + $DvtChartDataChangeFunnelSlice$$.$w$ - 1 : $DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$)) : (this.$_cursorLine$.$setX1$($DvtSparkChartEventManager$$.x), this.$_cursorLine$.$setX2$($DvtChartDataChangeFunnelSlice$$ ? 
    $DvtChartDataChangeFunnelSlice$$.x + 1 : $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$))) : (this.$_cursorLine$.$setTranslateX$($DvtChartStyleUtils$$), this.$_cursorLine$.$setY1$($DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeFunnelSlice$$.y + $DvtChartDataChangeFunnelSlice$$.$h$ - 1 : $DvtSparkChartEventManager$$.y), this.$_cursorLine$.$setY2$($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$));
    this.$_marker$ && (this.$_marker$.$setTranslate$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($DvtSparkChartEventManager$$ ? $DvtSparkChartEventManager$$ : $DvtChartPieLabelUtils$$), $dvt$$2$$.$Agent$.$workaroundFirefoxRepaint$(this.$_marker$))
  };
  $DvtChartDataCursor$$.prototype.$isHorizontal$ = $JSCompiler_get$$("$_bHoriz$");
  $DvtChartDataCursor$$.prototype.$getBehavior$ = function $$DvtChartDataCursor$$$$$getBehavior$$() {
    return this.$_behavior$ ? this.$_behavior$ : $DvtChartDataCursor$$.$BEHAVIOR_AUTO$
  };
  $DvtChartDataCursor$$.prototype.$setBehavior$ = $JSCompiler_set$$("$_behavior$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelSlice$$, $dvt$$2$$.$Path$);
  $DvtChartFunnelSlice$$.prototype.Init = function $$DvtChartFunnelSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$) {
    $DvtChartFunnelSlice$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$_chart$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults;
    this.$_seriesIndex$ = $DvtSparkChartDefaults$$;
    this.$_numDrawnSeries$ = $DvtSparkChartAutomation$$;
    this.$_funnelWidth$ = $DvtChartTypeUtils$$;
    this.$_funnelHeight$ = $DvtChartPieLabelUtils$$;
    this.$_startPercent$ = $DvtChartPieLabelInfo$$;
    this.$_valuePercent$ = $DvtChartPieRenderUtils$$;
    this.$_fillPercent$ = $DvtChartDataChangeFunnelSlice$$;
    this.$_3dRatio$ = "on" == $DvtSparkChartEventManager$$.threeDEffect ? 1 : 0;
    this.$_gap$ = $DvtChartMarkerUtils$$;
    $DvtSparkChartDefaults$$ = this.$_getPath$();
    this.$_dataColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
    this.$_backgroundColor$ = $DvtSparkChartEventManager$$.backgroundColor ? $DvtSparkChartEventManager$$.backgroundColor : $DvtSparkChartEventManager$$.funnelBackgroundColor;
    this.$setCmds$($DvtSparkChartDefaults$$.slice);
    $DvtSparkChartDefaults$$.bar && (this.$_bar$ = new $dvt$$2$$.$Path$(this.$getCtx$(), $DvtSparkChartDefaults$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$($JSCompiler_alias_FALSE$$));
    this.$_setColorProperties$($DvtSparkChartDefaults$$.sliceBounds);
    this.$_label$ = this.$_getSliceLabel$($DvtSparkChartDefaults$$.sliceBounds, $DvtSparkChartDefaults$$.barBounds);
    this.$_label$ != $JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
  };
  $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ = 0.08;
  $DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ = 36;
  $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$ = 1 / 3;
  $DvtChartFunnelSlice$$.$_BORDER_COLOR$ = "#FFFFFF";
  $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION$ = 2 / 3;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION$ = 0.41;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$ = 0.28;
  $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$ = 0.4;
  $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ = 0.8;
  $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ = 0.7;
  $DvtChartFunnelSlice$$.prototype.$_getPath$ = function $$DvtChartFunnelSlice$$$$$_getPath$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$(this.$_chart$), $DvtSparkChartAutomation$$ = (this.$_numDrawnSeries$ + 1) * this.$_gap$, $DvtChartStyleUtils$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$ - 2 * this.$_3dRatio$), $DvtChartTypeUtils$$ = this.$_funnelWidth$ - $DvtSparkChartDefaults$$ * this.$_gap$, $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$ / 
    Math.sin($dvt$$2$$.$Math$.$degreesToRads$($DvtChartFunnelSlice$$.$_FUNNEL_ANGLE_2D$)), $DvtChartPieLabelUtils$$ = this.$_funnelHeight$ / Math.sin($DvtChartStyleUtils$$), $DvtChartPieLabelInfo$$ = this.$_3dRatio$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$;
    1E-5 > $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = 0);
    var $DvtChartPieRenderUtils$$ = this.$_funnelHeight$, $DvtChartDataChangeFunnelSlice$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$, $DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPieUtils$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartLineArea$$, $DvtChartRenderer$$, $DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$;
    this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartMarkerUtils$$ = this.$_startPercent$, $DvtChartDataChangeRangeMarker$$ = $DvtChartPieRenderUtils$$, $DvtChartPieUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataChangeLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartRenderer$$ = $DvtChartTypeUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartDataChangeAbstract$$ = $DvtChartTypeUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$)) : 
    this.$_startPercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartMarkerUtils$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeRangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartPieUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataChangeLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartRenderer$$ = $DvtChartTypeUtils$$ * 
    ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartDataChangeAbstract$$ = $DvtChartTypeUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$)) : ($DvtChartMarkerUtils$$ = this.$_startPercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartDataChangeRangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeLineArea$$ = 1 - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, 
    $DvtChartRenderer$$ = $DvtChartTypeUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartDataChangeAbstract$$ = 0);
    this.$_startPercent$ + this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION$ ? ($DvtChartDataChangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$ + this.$_valuePercent$, $DvtChartLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeBar$$ = $DvtChartTypeUtils$$ * $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$, $DvtChartTypeUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$) : this.$_startPercent$ + 
    this.$_valuePercent$ < $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ ? ($DvtChartPieRenderUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION$, $DvtChartDataChangeMarker$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartLineArea$$ = $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION$, $DvtChartDataChangeBar$$ = 
    $DvtChartTypeUtils$$ * ($DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$ - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION$), $DvtChartTypeUtils$$ *= 1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$) : ($DvtChartPieRenderUtils$$ = this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_LINE_FRACTION_2$, $DvtChartDataChangeMarker$$ = $DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeFunnelSlice$$ = this.$_startPercent$ + this.$_valuePercent$ - $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartLineArea$$ = 1 - 
    $DvtChartFunnelSlice$$.$_AREA_FRACTION_2$, $DvtChartDataChangeBar$$ = $DvtChartTypeUtils$$ * (1 - $DvtChartFunnelSlice$$.$_HEIGHT_FRACTION_2$), $DvtChartTypeUtils$$ = 0);
    $DvtChartMarkerUtils$$ = 0.98 * Math.asin(((Math.sqrt(($DvtChartDataChangeLineArea$$ - $DvtChartMarkerUtils$$) / $DvtChartDataChangeLineArea$$ * $DvtChartDataChangeRangeMarker$$ * $DvtChartDataChangeRangeMarker$$ + $DvtChartMarkerUtils$$ / $DvtChartDataChangeLineArea$$ * $DvtChartPieUtils$$ * $DvtChartPieUtils$$) - $DvtChartPieUtils$$) * $DvtChartRenderer$$ / ($DvtChartDataChangeRangeMarker$$ - $DvtChartPieUtils$$) + $DvtChartDataChangeAbstract$$) / $DvtSparkChartDefaults$$);
    $DvtChartDataChangeRangeMarker$$ = 0.98 * Math.asin(((Math.sqrt(($DvtChartLineArea$$ - $DvtChartDataChangeFunnelSlice$$) / $DvtChartLineArea$$ * $DvtChartPieRenderUtils$$ * $DvtChartPieRenderUtils$$ + $DvtChartDataChangeFunnelSlice$$ / $DvtChartLineArea$$ * $DvtChartDataChangeMarker$$ * $DvtChartDataChangeMarker$$) - $DvtChartDataChangeMarker$$) * $DvtChartDataChangeBar$$ / ($DvtChartPieRenderUtils$$ - $DvtChartDataChangeMarker$$) + $DvtChartTypeUtils$$) / $DvtSparkChartDefaults$$);
    $DvtChartPieRenderUtils$$ = (1 + $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ + $DvtChartPieLabelUtils$$;
    $DvtChartPieUtils$$ = (1 - $DvtChartFunnelSlice$$.$_FUNNEL_RATIO$) / 2 * this.$_funnelHeight$ - $DvtChartPieLabelUtils$$;
    $DvtSparkChartEventManager$$ ? ($DvtSparkChartAutomation$$ = [$DvtSparkChartDefaults$$ * Math.sin($DvtChartMarkerUtils$$) + $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartMarkerUtils$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeRangeMarker$$) + $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeRangeMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeRangeMarker$$) + 
    $DvtSparkChartAutomation$$, $DvtChartPieUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeRangeMarker$$), $DvtSparkChartDefaults$$ * Math.sin($DvtChartMarkerUtils$$) + $DvtSparkChartAutomation$$, $DvtChartPieUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartMarkerUtils$$)], $DvtChartMarkerUtils$$ = 0, $DvtChartDataChangeRangeMarker$$ = 1) : ($DvtSparkChartAutomation$$ = [this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartMarkerUtils$$), 
    $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartMarkerUtils$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeRangeMarker$$), $DvtChartPieRenderUtils$$ - $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeRangeMarker$$), this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartDataChangeRangeMarker$$), $DvtChartPieUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartDataChangeRangeMarker$$), 
    this.$_funnelWidth$ - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$ * Math.sin($DvtChartMarkerUtils$$), $DvtChartPieUtils$$ + $DvtChartPieLabelUtils$$ * Math.cos($DvtChartMarkerUtils$$)], $DvtChartMarkerUtils$$ = 1, $DvtChartDataChangeRangeMarker$$ = 0);
    $DvtChartPieRenderUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartPieUtils$$ = $JSCompiler_alias_NULL$$;
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, Math.PI, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, Math.PI, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$[4], $DvtSparkChartAutomation$$[5]);
    $DvtChartPieRenderUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[7]);
    $DvtChartDataChangeLineArea$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5], Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]));
    if(this.$_fillPercent$ != $JSCompiler_alias_NULL$$) {
      var $DvtChartCoord$$ = Math.max(Math.min(this.$_fillPercent$, 1), 0), $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? -$DvtChartCoord$$ * Math.PI : $DvtChartCoord$$ * Math.PI;
      $DvtChartPieUtils$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartPieUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$[2], $DvtSparkChartAutomation$$[3]);
      $DvtChartPieUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2, $DvtSparkChartEventManager$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$[2] + $DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[5] + $DvtSparkChartAutomation$$[3]) / 
      2 + ($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartPieUtils$$ = 0.95 < this.$_fillPercent$ ? $DvtChartPieUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartCoord$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : 0.05 > this.$_fillPercent$ ? $DvtChartPieUtils$$ + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, 
      $DvtChartDataChangeRangeMarker$$, $DvtSparkChartAutomation$$[6], $DvtSparkChartAutomation$$[1] + $DvtChartCoord$$ * ($DvtSparkChartAutomation$$[7] - $DvtSparkChartAutomation$$[1])) : $DvtChartPieUtils$$ + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$[6] + $DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2 * Math.sin($DvtSparkChartEventManager$$), ($DvtSparkChartAutomation$$[7] + $DvtSparkChartAutomation$$[1]) / 2 + ($DvtSparkChartAutomation$$[1] - 
      $DvtSparkChartAutomation$$[7]) / 2 * Math.cos($DvtSparkChartEventManager$$));
      $DvtChartPieUtils$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtChartPieLabelInfo$$ * ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, ($DvtSparkChartAutomation$$[1] - $DvtSparkChartAutomation$$[7]) / 2, $DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[1]);
      $DvtChartPieUtils$$ += $dvt$$2$$.$PathUtils$.closePath();
      $DvtChartCoord$$ = new $dvt$$2$$.$Rectangle$(Math.min($DvtSparkChartAutomation$$[0], $DvtSparkChartAutomation$$[2]), $DvtSparkChartAutomation$$[5] + Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * (1 - $DvtChartCoord$$), Math.abs($DvtSparkChartAutomation$$[0] - $DvtSparkChartAutomation$$[2]), Math.abs($DvtSparkChartAutomation$$[3] - $DvtSparkChartAutomation$$[5]) * $DvtChartCoord$$)
    }
    return{slice:$DvtChartPieRenderUtils$$, bar:$DvtChartPieUtils$$, sliceBounds:$DvtChartDataChangeLineArea$$, barBounds:$DvtChartPieUtils$$ ? $DvtChartCoord$$ : $DvtChartDataChangeLineArea$$}
  };
  $DvtChartFunnelSlice$$.prototype.$_getSliceLabel$ = function $$DvtChartFunnelSlice$$$$$_getSliceLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartAutomation$$ || ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if($DvtSparkChartAutomation$$ && "none" != $DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0)) {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$OutputText$(this.$getCtx$(), $DvtSparkChartAutomation$$, 0, 0), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new $dvt$$2$$.$CSSStyle$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new $dvt$$2$$.$CSSStyle$($DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 
      0).labelStyle)], $DvtChartPieLabelUtils$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieLabelUtils$$);
      $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartPieLabelUtils$$);
      if($dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$h$ - 50 * this.$_3dRatio$ * (0.8 - this.$_valuePercent$), $DvtSparkChartEventManager$$.$w$, this, $DvtChartFunnelSlice$$.$_MIN_CHARS_DATA_LABEL$)) {
        var $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$measureDimensions$(), $DvtChartPieRenderUtils$$ = this.$_getLabelPosition$($DvtSparkChartEventManager$$);
        if($DvtChartTypeUtils$$) {
          var $DvtChartDataChangeFunnelSlice$$ = 0.15 * $DvtChartPieLabelInfo$$.$h$, $DvtChartMarkerUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 0.5 : -0.5, $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelInfo$$.x - $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$.y, $DvtChartPieLabelInfo$$.$w$ + 2 * $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$.$h$, 2, 2, 2, 2), $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$Path$(this.$getCtx$(), 
          $DvtChartDataChangeFunnelSlice$$);
          $DvtChartDataChangeFunnelSlice$$.$setSolidFill$("#FFFFFF", 0.9);
          $DvtChartPieRenderUtils$$.translate($DvtChartMarkerUtils$$ * $DvtChartPieLabelInfo$$.$h$, -$DvtChartMarkerUtils$$ * $DvtChartPieLabelInfo$$.$w$);
          $DvtChartDataChangeFunnelSlice$$.$setMatrix$($DvtChartPieRenderUtils$$);
          this.$addChild$($DvtChartDataChangeFunnelSlice$$)
        }
        $DvtChartTypeUtils$$ = $DvtChartTypeUtils$$ ? "#000000" : $DvtSparkChartDefaults$$.$containsPoint$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y + ($DvtSparkChartEventManager$$.$h$ - $DvtChartPieLabelInfo$$.$w$) / 2) ? $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_dataColor$) : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$(this.$_backgroundColor$);
        (!$DvtChartPieLabelUtils$$.$getStyle$("color") || $dvt$$2$$.$Agent$.$isHighContrast$()) && $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartPieLabelUtils$$.$setStyle$("color", $DvtChartTypeUtils$$));
        $DvtSparkChartAutomation$$.$setMatrix$(this.$_getLabelPosition$($DvtSparkChartEventManager$$));
        $DvtSparkChartAutomation$$.$alignCenter$();
        $DvtSparkChartAutomation$$.$alignMiddle$();
        return $DvtSparkChartAutomation$$
      }
    }
  };
  $DvtChartFunnelSlice$$.prototype.$_getLabelPosition$ = function $$DvtChartFunnelSlice$$$$$_getLabelPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_3dRatio$ * ($DvtSparkChartEventManager$$.$h$ * this.$_funnelWidth$ / this.$_funnelHeight$ * $DvtChartFunnelSlice$$.$_FUNNEL_3D_WIDTH_RATIO$ / 2), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Matrix$;
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) ? ($DvtSparkChartAutomation$$.rotate(Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2)) : ($DvtSparkChartAutomation$$.rotate(3 * Math.PI / 2), $DvtSparkChartAutomation$$.translate($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 + $DvtSparkChartDefaults$$, 
    $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2));
    return $DvtSparkChartAutomation$$
  };
  $DvtChartFunnelSlice$$.prototype.$_setColorProperties$ = function $$DvtChartFunnelSlice$$$$$_setColorProperties$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ && 0 < this.$_3dRatio$ && ($DvtSparkChartAutomation$$ = $DvtChartFunnelSlice$$.$_BORDER_COLOR$);
    var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
    $DvtSparkChartEventManager$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$);
    this.$_bar$ ? (this.$setFill$($DvtSparkChartEventManager$$), this.$_bar$.$setFill$($DvtSparkChartDefaults$$)) : this.$setFill$($DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ && this.$setSolidStroke$($DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, $DvtChartTypeUtils$$);
    this.$OriginalStroke$ = this.$getStroke$();
    this.$_chart$.$isSelectionSupported$() && ($DvtSparkChartDefaults$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_dataColor$), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $DvtSparkChartEventManager$$ = this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$ : this, 
    $DvtSparkChartEventManager$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 2)), $DvtSparkChartEventManager$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 1, 4.5)), $DvtSparkChartEventManager$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtSparkChartAutomation$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$, 1, 4.5)), this.setCursor("pointer"))
  };
  $DvtChartFunnelSlice$$.prototype.$getAnimationParams$ = function $$DvtChartFunnelSlice$$$$$getAnimationParams$$() {
    return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$]
  };
  $DvtChartFunnelSlice$$.prototype.$setAnimationParams$ = function $$DvtChartFunnelSlice$$$$$setAnimationParams$$($dvt$$2$$) {
    this.$_startPercent$ = $dvt$$2$$[0];
    this.$_valuePercent$ = $dvt$$2$$[1];
    this.$_fillPercent$ = this.$_fillPercent$ != $JSCompiler_alias_NULL$$ ? $dvt$$2$$[2] : $JSCompiler_alias_NULL$$;
    this.$setAlpha$($dvt$$2$$[3]);
    this.$_3dRatio$ = $dvt$$2$$[4];
    $dvt$$2$$ = this.$_getPath$();
    this.$setCmds$($dvt$$2$$.slice);
    $dvt$$2$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($dvt$$2$$.bar);
    this.$_label$ && this.$_label$.$setMatrix$(this.$_getLabelPosition$($dvt$$2$$.sliceBounds))
  };
  $DvtChartFunnelSlice$$.prototype.$setSelected$ = function $$DvtChartFunnelSlice$$$$$setSelected$$($dvt$$2$$) {
    if(this.$_bar$ != $JSCompiler_alias_NULL$$) {
      if(this.$IsSelected$ == $dvt$$2$$) {
        return
      }
      this.$IsSelected$ = $dvt$$2$$;
      this.$_bar$.$setSelected$($dvt$$2$$)
    }else {
      $DvtChartFunnelSlice$$.$superclass$.$setSelected$.call(this, $dvt$$2$$)
    }
    var $DvtSparkChartEventManager$$ = this.$getDimensions$(), $DvtSparkChartDefaults$$ = this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$w$;
    $dvt$$2$$ ? ($DvtSparkChartDefaults$$.$setScaleX$(($DvtSparkChartAutomation$$ - 3) / $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$.$setTranslateX$(Math.ceil(1.5) + 3 / $DvtSparkChartAutomation$$ * $DvtSparkChartEventManager$$.x)) : ($DvtSparkChartDefaults$$.$setScaleX$(1), $DvtSparkChartDefaults$$.$setTranslateX$(0))
  };
  $DvtChartFunnelSlice$$.prototype.$showHoverEffect$ = function $$DvtChartFunnelSlice$$$$$showHoverEffect$$() {
    this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
  };
  $DvtChartFunnelSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartFunnelSlice$$$$$hideHoverEffect$$() {
    this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
  };
  $DvtChartFunnelSlice$$.prototype.$copyShape$ = function $$DvtChartFunnelSlice$$$$$copyShape$$() {
    return new $DvtChartFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
  };
  $DvtChartPie$$.$_THREED_TILT$ = 0.59;
  $DvtChartPie$$.$_THREED_DEPTH$ = 0.1;
  $DvtChartPie$$.$_RADIUS$ = 0.45;
  $DvtChartPie$$.$_RADIUS_LABELS$ = 0.38;
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPie$$, $dvt$$2$$.$Container$);
  $DvtChartPie$$.prototype.Init = function $$DvtChartPie$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartPie$$.$superclass$.Init.call(this, $DvtSparkChartEventManager$$.$getCtx$());
    this.$chart$ = $DvtSparkChartEventManager$$;
    this.$_options$ = $DvtSparkChartEventManager$$.$getOptions$();
    this.$_frame$ = $DvtSparkChartDefaults$$.$clone$();
    $DvtSparkChartEventManager$$.$pieChart$ = this;
    for(var $DvtSparkChartAutomation$$ = this.$getLabelPosition$(), $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartStyleUtils$$;$DvtChartTypeUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$, 0);
      if($DvtChartPieLabelUtils$$ && ("center" == $DvtSparkChartAutomation$$ || "none" == $DvtSparkChartAutomation$$) && "outsideSlice" == $DvtChartPieLabelUtils$$.labelPosition) {
        $DvtSparkChartAutomation$$ = "outsideSlice"
      }
    }
    this.$_center$ = new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + Math.floor($DvtSparkChartDefaults$$.$w$ / 2), $DvtSparkChartDefaults$$.y + Math.floor($DvtSparkChartDefaults$$.$h$ / 2));
    $DvtSparkChartAutomation$$ = "center" == $DvtSparkChartAutomation$$ || "none" == $DvtSparkChartAutomation$$ ? $DvtChartPie$$.$_RADIUS$ : $DvtChartPie$$.$_RADIUS_LABELS$;
    this.$_radiusY$ = this.$_radiusX$ = Math.floor(Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$) * $DvtSparkChartAutomation$$);
    this.$_depth$ = 0;
    this.$_anchorOffset$ = 90;
    this.$is3D$() && (this.$_depth$ = $DvtSparkChartDefaults$$.$h$ * $DvtChartPie$$.$_THREED_DEPTH$, this.$_center$.y -= Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= $DvtChartPie$$.$_THREED_TILT$);
    this.$_slices$ = this.$_createSlices$();
    this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$());
    this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
  };
  $DvtChartPie$$.prototype.$getOptions$ = $JSCompiler_get$$("$_options$");
  $DvtChartPie$$.prototype.$highlight$ = function $$DvtChartPie$$$$$highlight$$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$CategoryRolloverHandler$.$highlight$($DvtSparkChartEventManager$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch)
  };
  $DvtChartPie$$.prototype.$_createSlices$ = function $$DvtChartPie$$$$$_createSlices$$() {
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$(this.$chart$), $DvtChartTypeUtils$$ = $DvtChartPieUtils$$.$getOtherValue$(this.$chart$), $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$], $DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$(this, $DvtSparkChartDefaults$$), 0 >= $DvtSparkChartDefaults$$.getValue() || $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$))
    }
    0 < $DvtChartTypeUtils$$ && ($DvtSparkChartAutomation$$ = new $DvtChartPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $DvtSparkChartEventManager$$.unshift($DvtSparkChartAutomation$$) : $DvtSparkChartEventManager$$.push($DvtSparkChartAutomation$$));
    $dvt$$2$$.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtSparkChartEventManager$$.reverse();
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPie$$.prototype.$setInitialSelection$ = function $$DvtChartPie$$$$$setInitialSelection$$() {
    var $dvt$$2$$ = this.$chart$.$getSelectionHandler$();
    if($dvt$$2$$) {
      for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
        for(var $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < this.$_slices$.length;$DvtChartStyleUtils$$++) {
          var $DvtChartTypeUtils$$ = this.$_slices$[$DvtChartStyleUtils$$].getId();
          $DvtChartTypeUtils$$ && ($DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id && $DvtChartTypeUtils$$.getId() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].id || $DvtChartTypeUtils$$.$getSeries$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].series && $DvtChartTypeUtils$$.$getGroup$() == $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$].group) && $DvtSparkChartDefaults$$.push($DvtChartTypeUtils$$)
        }
      }
      $DvtChartPieUtils$$.$isOtherSliceSelected$(this.$chart$, $DvtSparkChartEventManager$$) && ($DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$chart$), $DvtSparkChartDefaults$$.push($DvtSparkChartEventManager$$));
      $dvt$$2$$.$processInitialSelections$($DvtSparkChartDefaults$$, this.$_slices$)
    }
  };
  $DvtChartPie$$.prototype.$render$ = function $$DvtChartPie$$$$$render$$() {
    var $DvtSparkChartEventManager$$;
    this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new $dvt$$2$$.$Container$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), !this.$is3D$() && this.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && ($DvtSparkChartEventManager$$ = new $dvt$$2$$.$Shadow$($dvt$$2$$.$ColorUtils$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)));
    $DvtChartPie$$.$_layoutSlices$(this.$_slices$, this.$_anchorOffset$);
    for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < this.$_slices$.length;$DvtSparkChartDefaults$$++) {
      this.$_slices$[$DvtSparkChartDefaults$$].$preRender$()
    }
    var $DvtSparkChartAutomation$$ = $DvtChartPie$$.$_orderSlicesForRendering$(this.$_slices$);
    this.$_duringDisplayAnim$ || ($DvtChartPieLabelUtils$$.$createPieCenter$(this), $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$(this));
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$].$render$(this.$_duringDisplayAnim$)
    }
    $dvt$$2$$.$Agent$.$isPlatformWebkit$() || $DvtSparkChartEventManager$$ && this.$_shapesContainer$.$addDrawEffect$($DvtSparkChartEventManager$$);
    this.$setInitialSelection$();
    this.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$))
  };
  $DvtChartPie$$.prototype.$getTotalValue$ = function $$DvtChartPie$$$$$getTotalValue$$() {
    for(var $dvt$$2$$ = 0, $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < this.$_slices$.length;$DvtSparkChartEventManager$$++) {
      var $DvtSparkChartDefaults$$ = this.$_slices$[$DvtSparkChartEventManager$$].getValue();
      0 <= $DvtSparkChartDefaults$$ && ($dvt$$2$$ += $DvtSparkChartDefaults$$)
    }
    return $dvt$$2$$
  };
  $DvtChartPie$$.$_layoutSlices$ = function $$DvtChartPie$$$$_layoutSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$ = 0, $DvtChartPieLabelUtils$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0;
    360 < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ -= 360);
    0 > $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ += 360);
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$ = 0;
    0 < $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelInfo$$ = $dvt$$2$$[0].$_pieChart$.$getTotalValue$());
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartPieLabelUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.getValue(), $DvtChartStyleUtils$$ = 0 == $DvtChartPieLabelInfo$$ ? 0 : 100 * (Math.abs($DvtChartStyleUtils$$) / $DvtChartPieLabelInfo$$), $DvtChartTypeUtils$$ = 3.6 * $DvtChartStyleUtils$$, $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$ - $DvtChartTypeUtils$$, 0 > $DvtChartStyleUtils$$ && ($DvtChartStyleUtils$$ += 360), $DvtSparkChartAutomation$$.$setAngleStart$($DvtChartStyleUtils$$), 
      $DvtSparkChartAutomation$$.$setAngleExtent$($DvtChartTypeUtils$$), $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$getAngleStart$()
    }
  };
  $DvtChartPie$$.$_orderSlicesForRendering$ = function $$DvtChartPie$$$$_orderSlicesForRendering$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $dvt$$2$$ ? $dvt$$2$$.length : 0, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$ = -1, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$;
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if($DvtChartStyleUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getAngleStart$(), $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.$getAngleExtent$(), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$ + $DvtChartStyleUtils$$, 360 < $DvtChartStyleUtils$$ && ($DvtChartStyleUtils$$ -= 360), 0 > $DvtChartStyleUtils$$ && ($DvtChartStyleUtils$$ += 360), 90 == $DvtChartStyleUtils$$ || 90 > $DvtChartPieLabelUtils$$ && 90 < $DvtChartStyleUtils$$) {
        $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$;
        $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$ - 90;
        break
      }
    }
    $DvtChartPieLabelUtils$$ = [];
    for($DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$])
    }
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtChartTypeUtils$$;$DvtSparkChartDefaults$$++) {
      $DvtChartPieLabelUtils$$.push($dvt$$2$$[$DvtSparkChartDefaults$$])
    }
    $DvtChartTypeUtils$$ = $dvt$$2$$ = 0;
    $DvtChartPieLabelInfo$$ = 180 + $DvtChartPieLabelInfo$$;
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$;$DvtSparkChartDefaults$$++) {
      if($DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) {
        if($dvt$$2$$ + $DvtChartStyleUtils$$.$getAngleExtent$() > $DvtChartPieLabelInfo$$) {
          $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$;
          break
        }
        $DvtSparkChartEventManager$$.push($DvtChartStyleUtils$$);
        $dvt$$2$$ += $DvtChartStyleUtils$$.$getAngleExtent$()
      }
    }
    for($DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ - 1;$DvtSparkChartDefaults$$ >= $DvtChartTypeUtils$$;$DvtSparkChartDefaults$$--) {
      ($DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartDefaults$$]) && $DvtSparkChartEventManager$$.push($DvtChartStyleUtils$$)
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPie$$.prototype.$is3D$ = function $$DvtChartPie$$$$$is3D$$() {
    return"on" == this.$_options$.styleDefaults.threeDEffect
  };
  $DvtChartPie$$.prototype.$__calcMaxExplodeDistance$ = function $$DvtChartPie$$$$$__calcMaxExplodeDistance$$() {
    return this.$_radiusX$ * (0.5 / $DvtChartPie$$.$_RADIUS$ - 1)
  };
  $DvtChartPie$$.prototype.$getAnimationDuration$ = function $$DvtChartPie$$$$$getAnimationDuration$$() {
    return $DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
  };
  $DvtChartPie$$.prototype.$getDisplayAnimation$ = function $$DvtChartPie$$$$$getDisplayAnimation$$() {
    this.$_duringDisplayAnim$ = $JSCompiler_alias_TRUE$$;
    var $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this), $DvtSparkChartDefaults$$ = this.$getAnimationDuration$(), $DvtSparkChartAutomation$$ = $DvtChartPieSlice$$.$createFillerSlice$(this, this.$getTotalValue$());
    this.$_slices$.push($DvtSparkChartAutomation$$);
    var $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
    $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$GetAnimationParams$, $DvtSparkChartAutomation$$.$SetAnimationParams$, $DvtSparkChartAutomation$$.$getDeletedAnimationParams$());
    $DvtChartStyleUtils$$.$setOnEnd$($DvtSparkChartAutomation$$.$_removeDeletedSlice$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartStyleUtils$$, 0);
    for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length - 1;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$animateInsert$($DvtSparkChartEventManager$$)
    }
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    $DvtChartStyleUtils$$ = [];
    for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < this.$_slices$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.concat(this.$_slices$[$DvtSparkChartAutomation$$].$getLabelAndFeeler$())
    }
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, $DvtChartStyleUtils$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$_setAnimationParams$();
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getAnimation$($JSCompiler_alias_TRUE$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(this.$_onEnd$, this);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPie$$.prototype.$_onEnd$ = function $$DvtChartPie$$$$$_onEnd$$() {
    this.$_duringDisplayAnim$ = $JSCompiler_alias_FALSE$$;
    this.$_setAnimationParams$()
  };
  $DvtChartPie$$.prototype.$getCenter$ = $JSCompiler_get$$("$_center$");
  $DvtChartPie$$.prototype.$getInnerRadius$ = function $$DvtChartPie$$$$$getInnerRadius$$() {
    return this.$is3D$() ? 0 : 0.95 * this.$_options$.styleDefaults.pieInnerRadius * Math.min(this.$_radiusX$, this.$_radiusY$)
  };
  $DvtChartPie$$.prototype.getDepth = $JSCompiler_get$$("$_depth$");
  $DvtChartPie$$.prototype.$getSliceDisplayable$ = function $$DvtChartPie$$$$$getSliceDisplayable$$($dvt$$2$$) {
    return($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$(this.$chart$, $dvt$$2$$)) ? $dvt$$2$$.$getTopDisplayable$() : $JSCompiler_alias_NULL$$
  };
  $DvtChartPie$$.prototype.$animateUpdate$ = function $$DvtChartPie$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$DataAnimationHandler$(this.$getCtx$(), this);
    $DvtSparkChartAutomation$$.$constructAnimation$($DvtSparkChartDefaults$$.$_slices$, this.$_slices$);
    var $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.$getAnimation$($JSCompiler_alias_TRUE$$), $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$getCtx$(), this, this.$getAnimationDuration$());
    $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$ParallelPlayable$(this.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_setAnimationParams$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0);
    this.$_setAnimationParams$([$DvtSparkChartDefaults$$.getDepth(), $DvtSparkChartDefaults$$.$_radiusY$, $DvtSparkChartDefaults$$.$getCenter$().y])
  };
  $DvtChartPie$$.prototype.$animateInsert$ = $JSCompiler_emptyFn$$();
  $DvtChartPie$$.prototype.$animateDelete$ = $JSCompiler_emptyFn$$();
  $DvtChartPie$$.prototype.$_getAnimationParams$ = function $$DvtChartPie$$$$$_getAnimationParams$$() {
    return[this.$_depth$, this.$_radiusY$, this.$_center$.y]
  };
  $DvtChartPie$$.prototype.$_setAnimationParams$ = function $$DvtChartPie$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$removeChildren$();
    this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
    this.$_shapesContainer$ = $JSCompiler_alias_NULL$$;
    $dvt$$2$$ && (this.$_depth$ = $dvt$$2$$[0], this.$_radiusY$ = $dvt$$2$$[1], this.$_center$.y = $dvt$$2$$[2]);
    this.$render$()
  };
  $DvtChartPie$$.prototype.$bringToFrontOfSelection$ = function $$DvtChartPie$$$$$bringToFrontOfSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$;
    if($DvtSparkChartEventManager$$) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$();
      1 < $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$ - this.$_numFrontObjs$ - 1))
    }
  };
  $DvtChartPie$$.prototype.$pushToBackOfSelection$ = function $$DvtChartPie$$$$$pushToBackOfSelection$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = this.$_slices$.length, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      this.$_slices$[$DvtSparkChartAutomation$$].$isSelected$() && $DvtSparkChartDefaults$$++
    }
    this.$_numSelectedObjsInFront$ = $DvtSparkChartDefaults$$;
    if($DvtSparkChartEventManager$$ = $dvt$$2$$.$_pieChart$.$_shapesContainer$) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $DvtSparkChartDefaults$$ && ($DvtSparkChartEventManager$$.removeChild($dvt$$2$$.$_topSurface$[0]), $DvtSparkChartEventManager$$.$addChildAt$($dvt$$2$$.$_topSurface$[0], $DvtSparkChartDefaults$$))
    }
  };
  $DvtChartPie$$.prototype.$getLabelPosition$ = function $$DvtChartPie$$$$$getLabelPosition$$() {
    var $dvt$$2$$ = this.$_options$.styleDefaults.sliceLabelPosition;
    $dvt$$2$$ || ($dvt$$2$$ = this.$_options$.styleDefaults.dataLabelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($dvt$$2$$)
  };
  $DvtChartPie$$.prototype.$getSeriesLabelPosition$ = function $$DvtChartPie$$$$$getSeriesLabelPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$getLabelPosition$();
    ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$(this.$chart$, $dvt$$2$$, 0)) && $dvt$$2$$.labelPosition && ($DvtSparkChartEventManager$$ = $dvt$$2$$.labelPosition);
    return $DvtChartPie$$.$parseLabelPosition$($DvtSparkChartEventManager$$)
  };
  $DvtChartPie$$.$parseLabelPosition$ = function $$DvtChartPie$$$$parseLabelPosition$$($dvt$$2$$) {
    return"center" == $dvt$$2$$ || "inside" == $dvt$$2$$ ? "center" : "outsideSlice" == $dvt$$2$$ || "outside" == $dvt$$2$$ ? "outsideSlice" : "none" == $dvt$$2$$ ? "none" : "auto"
  };
  $DvtChartPie$$.prototype.$getSkin$ = function $$DvtChartPie$$$$$getSkin$$() {
    return this.$_options$.skin
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieSlice$$, $dvt$$2$$.$Obj$);
  $DvtChartPieSlice$$.prototype.Init = function $$DvtChartPieSlice$$$$Init$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_pieChart$ = $DvtSparkChartEventManager$$;
    this.$_chart$ = $DvtSparkChartEventManager$$.$chart$;
    this.$_angleExtent$ = this.$_angleStart$ = 0;
    this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = $JSCompiler_alias_NULL$$;
    this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
    this.$_sliceLabelString$ = this.$_sliceLabel$ = $JSCompiler_alias_NULL$$;
    this.$_hasFeeler$ = $JSCompiler_alias_FALSE$$;
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = $JSCompiler_alias_NULL$$;
    this.$_selecting$ = this.$_selected$ = $JSCompiler_alias_FALSE$$;
    this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
    this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
    this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
    this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
    this.$_depth$ = this.$_pieChart$.getDepth();
    var $DvtSparkChartAutomation$$ = this.$_chart$.$getOptions$();
    $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_value$ = $DvtChartDataUtils$$.getValue(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_explode$ = $DvtChartPieUtils$$.$getSliceExplode$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_fillColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, $DvtSparkChartDefaults$$, 0), this.$_fillPattern$ = $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_strokeColor$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_borderWidth$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_customLabel$ = $DvtSparkChartAutomation$$.label, this.$_seriesLabel$ = $DvtChartDataUtils$$.$getSeries$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_action$ = $DvtSparkChartAutomation$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, 
    $DvtSparkChartDefaults$$, 0), this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id), this.$_id$ = $DvtChartPieUtils$$.$getSliceId$(this.$_chart$, $DvtSparkChartDefaults$$), this.$_seriesIndex$ = $DvtSparkChartDefaults$$, this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$(this.$_chart$, $DvtSparkChartDefaults$$, 0)) : (this.$_value$ = $DvtChartPieUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $DvtSparkChartAutomation$$.styleDefaults.otherColor, 
    this.$_fillPattern$ = $JSCompiler_alias_NULL$$, this.$_strokeColor$ = $DvtSparkChartAutomation$$.styleDefaults.borderColor, this.$_borderWidth$ = $DvtSparkChartAutomation$$.styleDefaults.borderWidth, this.$_customLabel$ = $JSCompiler_alias_NULL$$, this.$_seriesLabel$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), this.$_action$ = $JSCompiler_alias_NULL$$, this.$_drillable$ = $JSCompiler_alias_FALSE$$, this.$_showPopupBehaviors$ = 
    $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$_chart$))
  };
  $DvtChartPieSlice$$.prototype.$render$ = function $$DvtChartPieSlice$$$$$render$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = $DvtChartPieSlice$$.$_sortPieSurfaces$(this.$_topSurface$, this.$_leftSurface$, this.$_rightSurface$, this.$_crustSurface$, this.$_angleStart$, this.$_angleExtent$), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      for(var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$], $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.length, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartTypeUtils$$;$DvtChartPieLabelUtils$$++) {
        this.$_pieChart$.$_shapesContainer$.$addChild$($DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$]), $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].$render$ && $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].$render$()
      }
    }
    this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), $DvtChartPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $dvt$$2$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_renderOutsideFeeler$());
    this.$_explodeSlice$();
    if(this.$_action$ || this.$_drillable$ || this.$_pieChart$.$chart$.$isSelectionSupported$()) {
      $dvt$$2$$ = this.$getDisplayables$();
      for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].setCursor("pointer")
      }
    }
    if($DvtSparkChartAutomation$$ = this.$getTopDisplayable$()) {
      $DvtSparkChartAutomation$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
    }
  };
  $DvtChartPieSlice$$.prototype.$_feelerFromPts$ = function $$DvtChartPieSlice$$$$$_feelerFromPts$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Line$(this.$_pieChart$.$getCtx$(), $DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y), $DvtChartStyleUtils$$ = this.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor, $DvtChartStyleUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$);
    $DvtSparkChartAutomation$$.$setStroke$($DvtChartStyleUtils$$);
    this.$_pieChart$.$addChild$($DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$
  };
  $DvtChartPieSlice$$.prototype.$_renderOutsideFeeler$ = function $$DvtChartPieSlice$$$$$_renderOutsideFeeler$$() {
    if(this.$_hasFeeler$) {
      var $dvt$$2$$ = this.$_feelerFromPts$(this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $DvtSparkChartEventManager$$ = this.$_feelerFromPts$(this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$);
      this.$_feelerRad$ = $dvt$$2$$;
      this.$_feelerHoriz$ = $DvtSparkChartEventManager$$
    }
  };
  $DvtChartPieSlice$$.prototype.$preRender$ = function $$DvtChartPieSlice$$$$$preRender$$() {
    var $DvtSparkChartEventManager$$ = this.$_bFillerSlice$ ? "color" : $DvtChartStyleUtils$$.$getSeriesEffect$(this.$_chart$), $DvtSparkChartDefaults$$ = this.$getFillColor$(), $DvtSparkChartAutomation$$ = this.$getFillPattern$();
    if("pattern" == $DvtSparkChartEventManager$$ || $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$) {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = "pattern"
    }else {
      if("gradient" == $DvtSparkChartEventManager$$) {
        var $DvtSparkChartAutomation$$ = this.$_pieChart$.$getSkin$(), $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 297 : 270, $DvtChartPieLabelUtils$$ = !this.$_pieChart$.$is3D$() ? "2D" : "3D", $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartDefaults$$), 
        $DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$LinearGradientFill$($DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$), [Math.floor(this.$_centerX$ - this.$_radiusX$), Math.floor(this.$_centerY$ - this.$_radiusY$), Math.ceil(2 * this.$_radiusX$), Math.ceil(2 * this.$_radiusY$)])
      }else {
        $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$)
      }
    }
    this.$_topSurface$ = $DvtChartPieRenderUtils$$.$createTopSurface$(this, $DvtSparkChartAutomation$$);
    if(0 < this.$_depth$ || this.$_radiusX$ != this.$_radiusY$) {
      $DvtSparkChartEventManager$$ = "gradient" == $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$ = new $dvt$$2$$.$SolidFill$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartDefaults$$, 0.6)), $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, $DvtChartPieRenderUtils$$.$SIDE$) : $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$(this, 
      $DvtChartPieRenderUtils$$.$CRUST$) : $DvtSparkChartAutomation$$, this.$_leftSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_LEFT$, $DvtSparkChartDefaults$$), this.$_rightSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$, $DvtSparkChartDefaults$$), this.$_crustSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$(this, $DvtChartPieRenderUtils$$.$SURFACE_CRUST$, $DvtSparkChartEventManager$$)
    }
  };
  $DvtChartPieSlice$$.$_sortPieSurfaces$ = function $$DvtChartPieSlice$$$$_sortPieSurfaces$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelUtils$$ = [];
    $DvtSparkChartEventManager$$ && ($DvtSparkChartDefaults$$ && $DvtSparkChartAutomation$$) && (270 >= $DvtChartStyleUtils$$ && 270 < $DvtChartStyleUtils$$ + $DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$)) : 270 < $DvtChartStyleUtils$$ || 90 >= $DvtChartStyleUtils$$ + $DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$), 
    $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$)) : ($DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.push($DvtSparkChartEventManager$$)));
    $DvtChartPieLabelUtils$$.push($dvt$$2$$);
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartPieSlice$$.$oppositeDirection$ = function $$DvtChartPieSlice$$$$oppositeDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return 0 < $dvt$$2$$ - $DvtSparkChartEventManager$$ != 0 < $dvt$$2$$ - $DvtSparkChartDefaults$$
  };
  $DvtChartPieSlice$$.prototype.$_explodeSlice$ = function $$DvtChartPieSlice$$$$$_explodeSlice$$() {
    if(0 != this.$_explode$) {
      var $DvtSparkChartEventManager$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * $dvt$$2$$.$Math$.$RADS_PER_DEGREE$, $DvtSparkChartDefaults$$ = this.$_pieChart$.$is3D$() ? $DvtChartPie$$.$_THREED_TILT$ : 1, $DvtSparkChartAutomation$$ = this.$_explode$ * this.$_pieChart$.$__calcMaxExplodeDistance$();
      this.$_explodeOffsetX$ = Math.cos($DvtSparkChartEventManager$$) * $DvtSparkChartAutomation$$;
      this.$_explodeOffsetY$ = Math.sin($DvtSparkChartEventManager$$) * $DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$;
      $dvt$$2$$.$Agent$.$isPlatformWebkit$() && (this.$_explodeOffsetX$ = Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = Math.round(this.$_explodeOffsetY$))
    }else {
      this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0
    }
    this.$_topSurface$ && ($DvtSparkChartEventManager$$ = this.$_pieChart$.$is3D$() && this.$_topSurface$[0].$getSelectionOffset$ ? this.$_topSurface$[0].$getSelectionOffset$() : [], $DvtChartPieSlice$$.$_translateShapes$(this.$_topSurface$, $DvtSparkChartEventManager$$[0] ? $DvtSparkChartEventManager$$[0] + this.$_explodeOffsetX$ : this.$_explodeOffsetX$, $DvtSparkChartEventManager$$[1] ? $DvtSparkChartEventManager$$[1] + this.$_explodeOffsetY$ : this.$_explodeOffsetY$));
    this.$_rightSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_leftSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    this.$_crustSurface$ && $DvtChartPieSlice$$.$_translateShapes$(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
    if(this.$_hasFeeler$) {
      var $DvtSparkChartEventManager$$ = this.$_outsideFeelerStart$.x, $DvtSparkChartDefaults$$ = this.$_outsideFeelerStart$.y, $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + this.$_explodeOffsetX$, $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$ + this.$_explodeOffsetY$;
      this.$_feelerRad$.$setX1$($DvtSparkChartAutomation$$);
      this.$_feelerRad$.$setY1$($DvtChartStyleUtils$$);
      var $DvtChartTypeUtils$$ = this.$_outsideFeelerMid$.x, $DvtChartPieLabelUtils$$ = this.$_outsideFeelerMid$.y;
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartTypeUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? (this.$_feelerRad$.$setX2$($DvtSparkChartAutomation$$), this.$_feelerHoriz$.$setX1$($DvtSparkChartAutomation$$)) : (this.$_feelerRad$.$setX2$($DvtChartTypeUtils$$), this.$_feelerHoriz$.$setX1$($DvtChartTypeUtils$$));
      $DvtChartPieSlice$$.$oppositeDirection$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$) ? (this.$_feelerRad$.$setY2$($DvtChartStyleUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartStyleUtils$$)) : (this.$_feelerRad$.$setY2$($DvtChartPieLabelUtils$$), this.$_feelerHoriz$.$setY1$($DvtChartPieLabelUtils$$))
    }
    this.$_sliceLabel$ && !this.$_hasFeeler$ && this.$_sliceLabel$.$setTranslate$(this.$_explodeOffsetX$, this.$_explodeOffsetY$)
  };
  $DvtChartPieSlice$$.$_translateShapes$ = function $$DvtChartPieSlice$$$$_translateShapes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if($dvt$$2$$) {
      for(var $DvtSparkChartAutomation$$ = $dvt$$2$$.length, $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$;$DvtChartStyleUtils$$++) {
        $dvt$$2$$[$DvtChartStyleUtils$$].$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
      }
    }
  };
  $DvtChartPieSlice$$.prototype.$getCenter$ = function $$DvtChartPieSlice$$$$$getCenter$$() {
    return new $dvt$$2$$.$Point$(this.$_centerX$, this.$_centerY$)
  };
  $DvtChartPieSlice$$.prototype.getDepth = $JSCompiler_get$$("$_depth$");
  $DvtChartPieSlice$$.prototype.$getAngleExtent$ = $JSCompiler_get$$("$_angleExtent$");
  $DvtChartPieSlice$$.prototype.$setAngleExtent$ = $JSCompiler_set$$("$_angleExtent$");
  $DvtChartPieSlice$$.prototype.$getAngleStart$ = $JSCompiler_get$$("$_angleStart$");
  $DvtChartPieSlice$$.prototype.$setAngleStart$ = $JSCompiler_set$$("$_angleStart$");
  $DvtChartPieSlice$$.prototype.$setOutsideFeelerPoints$ = function $$DvtChartPieSlice$$$$$setOutsideFeelerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_outsideFeelerStart$ = $dvt$$2$$;
    this.$_outsideFeelerMid$ = $DvtSparkChartEventManager$$;
    this.$_outsideFeelerEnd$ = $DvtSparkChartDefaults$$;
    this.$_hasFeeler$ = $JSCompiler_alias_TRUE$$
  };
  $DvtChartPieSlice$$.prototype.$setNoOutsideFeeler$ = function $$DvtChartPieSlice$$$$$setNoOutsideFeeler$$() {
    this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = $JSCompiler_alias_NULL$$;
    this.$_hasFeeler$ = $JSCompiler_alias_FALSE$$
  };
  $DvtChartPieSlice$$.prototype.$getLabelAndFeeler$ = function $$DvtChartPieSlice$$$$$getLabelAndFeeler$$() {
    var $dvt$$2$$ = [];
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$
  };
  $DvtChartPieSlice$$.prototype.$setSliceLabel$ = $JSCompiler_set$$("$_sliceLabel$");
  $DvtChartPieSlice$$.prototype.$setSliceLabelString$ = $JSCompiler_set$$("$_sliceLabelString$");
  $DvtChartPieSlice$$.prototype.getValue = $JSCompiler_get$$("$_value$");
  $DvtChartPieSlice$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
  $DvtChartPieSlice$$.$containsRect$ = function $$DvtChartPieSlice$$$$containsRect$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x + $dvt$$2$$.$w$, $dvt$$2$$.y + $dvt$$2$$.$h$) && $DvtSparkChartEventManager$$.contains($dvt$$2$$.x, $dvt$$2$$.y + $dvt$$2$$.$h$)
  };
  $DvtChartPieSlice$$.$_shapeIsSelectable$ = function $$DvtChartPieSlice$$$$_shapeIsSelectable$$($dvt$$2$$) {
    return $dvt$$2$$ instanceof $DvtChartSelectableWedge$$
  };
  $DvtChartPieSlice$$.prototype.contains = function $$DvtChartPieSlice$$$$contains$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = this.$_pieChart$.$getInnerRadius$(), $DvtSparkChartAutomation$$ = this.$_pieChart$.$getCenter$(), $DvtChartStyleUtils$$ = ($dvt$$2$$ - $DvtSparkChartAutomation$$.x) / this.$_radiusX$, $DvtChartTypeUtils$$ = ($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.y) / this.$_radiusY$, $DvtSparkChartAutomation$$ = -Math.atan2($DvtChartTypeUtils$$, $DvtChartStyleUtils$$) * (180 / Math.PI);$DvtSparkChartAutomation$$ < this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ += 360
    }
    for(;360 <= $DvtSparkChartAutomation$$ - this.$_angleStart$;) {
      $DvtSparkChartAutomation$$ -= 360
    }
    $DvtChartStyleUtils$$ = Math.pow($DvtChartStyleUtils$$, 2) + Math.pow($DvtChartTypeUtils$$, 2);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$ <= this.$_angleStart$ + this.$_angleExtent$;
    return Math.sqrt($DvtChartStyleUtils$$) > $DvtSparkChartDefaults$$ / this.$_radiusX$ && 1 >= $DvtChartStyleUtils$$ && $DvtSparkChartAutomation$$
  };
  $DvtChartPieSlice$$.prototype.$GetAnimationParams$ = function $$DvtChartPieSlice$$$$$GetAnimationParams$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRed$(this.$_fillColor$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$ColorUtils$.$getGreen$(this.$_fillColor$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getBlue$(this.$_fillColor$), $DvtChartStyleUtils$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$(this.$_fillColor$);
    return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$]
  };
  $DvtChartPieSlice$$.prototype.$SetAnimationParams$ = function $$DvtChartPieSlice$$$$$SetAnimationParams$$($DvtSparkChartEventManager$$) {
    this.$_value$ = $DvtSparkChartEventManager$$[0];
    this.$_radiusX$ = $DvtSparkChartEventManager$$[1];
    this.$_radiusY$ = $DvtSparkChartEventManager$$[2];
    this.$_explode$ = $DvtSparkChartEventManager$$[3];
    this.$_centerX$ = $DvtSparkChartEventManager$$[4];
    this.$_centerY$ = $DvtSparkChartEventManager$$[5];
    this.$_depth$ = $DvtSparkChartEventManager$$[6];
    this.$_fillColor$ = $dvt$$2$$.$ColorUtils$.$makeRGBA$(Math.round($DvtSparkChartEventManager$$[7]), Math.round($DvtSparkChartEventManager$$[8]), Math.round($DvtSparkChartEventManager$$[9]), Math.round($DvtSparkChartEventManager$$[10]))
  };
  $DvtChartPieSlice$$.prototype.$getDeletedAnimationParams$ = function $$DvtChartPieSlice$$$$$getDeletedAnimationParams$$() {
    var $dvt$$2$$ = this.$GetAnimationParams$();
    $dvt$$2$$[0] = 0;
    $dvt$$2$$[1] = this.$getInnerRadius$();
    $dvt$$2$$[2] = this.$getInnerRadius$();
    $dvt$$2$$[3] = 0;
    return $dvt$$2$$
  };
  $DvtChartPieSlice$$.prototype.$animateUpdate$ = function $$DvtChartPieSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$GetAnimationParams$(), $DvtChartStyleUtils$$ = this.$GetAnimationParams$();
    if(!$dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)) {
      var $DvtChartTypeUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
      $DvtChartTypeUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $DvtChartStyleUtils$$);
      $DvtSparkChartEventManager$$.add($DvtChartTypeUtils$$, 0);
      this.$SetAnimationParams$($DvtSparkChartAutomation$$)
    }
  };
  $DvtChartPieSlice$$.prototype.$animateInsert$ = function $$DvtChartPieSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartDefaults$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0);
    this.$SetAnimationParams$(this.$getDeletedAnimationParams$())
  };
  $DvtChartPieSlice$$.prototype.$animateDelete$ = function $$DvtChartPieSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_slices$, $DvtChartStyleUtils$$ = this.$_pieChart$.$_slices$, $DvtChartTypeUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$, this) - 1;
    if(0 <= $DvtChartTypeUtils$$) {
      $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$[$DvtChartTypeUtils$$].getId();
      for($DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTypeUtils$$++) {
        if($DvtSparkChartAutomation$$[$DvtChartTypeUtils$$].getId().$equals$($DvtChartStyleUtils$$)) {
          $DvtSparkChartAutomation$$.splice($DvtChartTypeUtils$$ + 1, 0, this);
          break
        }
      }
    }else {
      $DvtSparkChartAutomation$$.splice(0, 0, this)
    }
    this.$_pieChart$ = $DvtSparkChartDefaults$$;
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$getDeletedAnimationParams$());
    $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0)
  };
  $DvtChartPieSlice$$.prototype.$_removeDeletedSlice$ = function $$DvtChartPieSlice$$$$$_removeDeletedSlice$$() {
    var $DvtSparkChartEventManager$$ = this.$_pieChart$.$_slices$, $DvtSparkChartDefaults$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$, this);
    0 <= $DvtSparkChartDefaults$$ && $DvtSparkChartEventManager$$.splice($DvtSparkChartDefaults$$, 1)
  };
  $DvtChartPieSlice$$.prototype.$getDisplayables$ = function $$DvtChartPieSlice$$$$$getDisplayables$$() {
    var $dvt$$2$$ = [];
    this.$_topSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_topSurface$));
    this.$_leftSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_leftSurface$));
    this.$_rightSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_rightSurface$));
    this.$_crustSurface$ && ($dvt$$2$$ = $dvt$$2$$.concat(this.$_crustSurface$));
    this.$_sliceLabel$ && $dvt$$2$$.push(this.$_sliceLabel$);
    this.$_feelerRad$ && $dvt$$2$$.push(this.$_feelerRad$);
    this.$_feelerHoriz$ && $dvt$$2$$.push(this.$_feelerHoriz$);
    return $dvt$$2$$
  };
  $DvtChartPieSlice$$.prototype.$getAriaLabel$ = function $$DvtChartPieSlice$$$$$getAriaLabel$$() {
    var $DvtSparkChartEventManager$$;
    $DvtSparkChartEventManager$$ = this.$_seriesIndex$ == $JSCompiler_alias_NULL$$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, $JSCompiler_alias_FALSE$$) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, $JSCompiler_alias_FALSE$$);
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_PERCENTAGE", $JSCompiler_alias_NULL$$), $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
    $DvtSparkChartEventManager$$ += "; " + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$]);
    $DvtSparkChartDefaults$$ = [];
    this.$isSelectable$() && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $DvtSparkChartDefaults$$.push($dvt$$2$$.$Bundle$.$getTranslation$(this.$_pieChart$.$getOptions$(), "stateDrillable", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $dvt$$2$$.$Displayable$.$generateAriaLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartPieSlice$$.prototype.$_updateAriaLabel$ = function $$DvtChartPieSlice$$$$$_updateAriaLabel$$() {
    var $DvtSparkChartEventManager$$ = this.$getTopDisplayable$();
    $DvtSparkChartEventManager$$ && !$dvt$$2$$.$Agent$.$deferAriaCreation$() && $DvtSparkChartEventManager$$.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtChartPieSlice$$.prototype.$getTopDisplayable$ = function $$DvtChartPieSlice$$$$$getTopDisplayable$$() {
    return this.$_topSurface$ && 0 < this.$_topSurface$.length ? this.$_topSurface$[0] : $JSCompiler_alias_NULL$$
  };
  $DvtChartPieSlice$$.prototype.$isSelectable$ = function $$DvtChartPieSlice$$$$$isSelectable$$() {
    return this.$_chart$.$isSelectionSupported$()
  };
  $DvtChartPieSlice$$.prototype.$isSelected$ = $JSCompiler_get$$("$_selected$");
  $DvtChartPieSlice$$.prototype.$setSelected$ = function $$DvtChartPieSlice$$$$$setSelected$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    (this.$_selected$ = $DvtSparkChartEventManager$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    if($DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
      for(var $DvtSparkChartAutomation$$ = this.$getDisplayables$(), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTypeUtils$$++) {
        $DvtChartPieSlice$$.$_shapeIsSelectable$($DvtSparkChartAutomation$$[$DvtChartTypeUtils$$]) && $DvtSparkChartAutomation$$[$DvtChartTypeUtils$$].$setSelected$($DvtSparkChartEventManager$$)
      }
    }
    $DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ ? 1 : 0, !$DvtSparkChartDefaults$$ && "none" != $DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($DvtChartTypeUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), $DvtChartTypeUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, this, this.$getExplode$, this.$setExplode$, 
    $DvtSparkChartAutomation$$), $DvtChartTypeUtils$$.play()) : this.$setExplode$($DvtSparkChartAutomation$$));
    this.$_updateAriaLabel$()
  };
  $DvtChartPieSlice$$.prototype.$showHoverEffect$ = function $$DvtChartPieSlice$$$$$showHoverEffect$$() {
    this.$_selecting$ = $JSCompiler_alias_TRUE$$;
    this.$_pieChart$.$bringToFrontOfSelection$(this);
    for(var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$showHoverEffect$()
    }
  };
  $DvtChartPieSlice$$.prototype.$hideHoverEffect$ = function $$DvtChartPieSlice$$$$$hideHoverEffect$$() {
    this.$_selecting$ = $JSCompiler_alias_FALSE$$;
    this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
    for(var $dvt$$2$$ = this.$getDisplayables$(), $DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $dvt$$2$$.length;$DvtSparkChartEventManager$$++) {
      $DvtChartPieSlice$$.$_shapeIsSelectable$($dvt$$2$$[$DvtSparkChartEventManager$$]) && $dvt$$2$$[$DvtSparkChartEventManager$$].$hideHoverEffect$()
    }
  };
  $DvtChartPieSlice$$.prototype.$getDatatip$ = function $$DvtChartPieSlice$$$$$getDatatip$$($dvt$$2$$) {
    return $dvt$$2$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
  };
  $DvtChartPieSlice$$.prototype.$getDatatipColor$ = function $$DvtChartPieSlice$$$$$getDatatipColor$$() {
    return this.$getFillColor$()
  };
  $DvtChartPieSlice$$.prototype.$getCategories$ = function $$DvtChartPieSlice$$$$$getCategories$$() {
    return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()]
  };
  $DvtChartPieSlice$$.prototype.$getNextNavigable$ = function $$DvtChartPieSlice$$$$$getNextNavigable$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.keyCode;
    if($DvtSparkChartEventManager$$.type == $dvt$$2$$.$MouseEvent$.$CLICK$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$SPACE$ && $DvtSparkChartEventManager$$.ctrlKey) {
      return this
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$(this.$_chart$.$getCtx$());
    var $DvtSparkChartAutomation$$ = this.$_pieChart$.$_slices$, $DvtChartStyleUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartAutomation$$, this), $DvtChartTypeUtils$$ = $JSCompiler_alias_NULL$$;
    if($DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$RIGHT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$DOWN_ARROW$ && !$DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$UP_ARROW$ && $DvtSparkChartEventManager$$) {
      $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length - 1 ? $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$ + 1] : $DvtSparkChartAutomation$$[0]
    }else {
      if($DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$LEFT_ARROW$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$DOWN_ARROW$ && $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$ == $dvt$$2$$.$KeyboardEvent$.$UP_ARROW$ && !$DvtSparkChartEventManager$$) {
        $DvtChartTypeUtils$$ = 0 == $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$[$DvtSparkChartAutomation$$.length - 1] : $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$ - 1]
      }
    }
    return $DvtChartTypeUtils$$
  };
  $DvtChartPieSlice$$.prototype.$getKeyboardBoundingBox$ = function $$DvtChartPieSlice$$$$$getKeyboardBoundingBox$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$getDisplayables$();
    return $DvtSparkChartDefaults$$[0] ? $DvtSparkChartDefaults$$[0].$getDimensions$($DvtSparkChartEventManager$$) : new $dvt$$2$$.$Rectangle$(0, 0, 0, 0)
  };
  $DvtChartPieSlice$$.prototype.$getTargetElem$ = function $$DvtChartPieSlice$$$$$getTargetElem$$() {
    var $dvt$$2$$ = this.$getDisplayables$();
    return $dvt$$2$$[0] ? $dvt$$2$$[0].$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtChartPieSlice$$.prototype.$showKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$showHoverEffect$()
  };
  $DvtChartPieSlice$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtChartPieSlice$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$hideHoverEffect$()
  };
  $DvtChartPieSlice$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtChartPieSlice$$.prototype.$getExplode$ = $JSCompiler_get$$("$_explode$");
  $DvtChartPieSlice$$.prototype.$setExplode$ = function $$DvtChartPieSlice$$$$$setExplode$$($dvt$$2$$) {
    this.$_explode$ = $dvt$$2$$;
    this.$_explodeSlice$()
  };
  $DvtChartPieSlice$$.prototype.$getSeriesLabel$ = $JSCompiler_get$$("$_seriesLabel$");
  $DvtChartPieSlice$$.prototype.$getFillColor$ = $JSCompiler_get$$("$_fillColor$");
  $DvtChartPieSlice$$.prototype.$getFillPattern$ = $JSCompiler_get$$("$_fillPattern$");
  $DvtChartPieSlice$$.prototype.$getStrokeColor$ = $JSCompiler_get$$("$_strokeColor$");
  $DvtChartPieSlice$$.prototype.$getBorderWidth$ = $JSCompiler_get$$("$_borderWidth$");
  $DvtChartPieSlice$$.prototype.$getSliceGaps$ = function $$DvtChartPieSlice$$$$$getSliceGaps$$() {
    return 0 == this.$_depth$ ? 3 * $DvtChartStyleUtils$$.$getDataItemGaps$(this.$_chart$) : 0
  };
  $DvtChartPieSlice$$.prototype.$getInnerRadius$ = function $$DvtChartPieSlice$$$$$getInnerRadius$$() {
    return this.$_pieChart$.$getInnerRadius$()
  };
  $DvtChartPieSlice$$.prototype.$getTooltip$ = function $$DvtChartPieSlice$$$$$getTooltip$$() {
    return this.$_seriesIndex$ == $JSCompiler_alias_NULL$$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, $JSCompiler_alias_TRUE$$) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, $JSCompiler_alias_TRUE$$)
  };
  $DvtChartPieSlice$$.prototype.$getAction$ = $JSCompiler_get$$("$_action$");
  $DvtChartPieSlice$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
  $DvtChartPieSlice$$.prototype.$getShowPopupBehaviors$ = $JSCompiler_get$$("$_showPopupBehaviors$");
  $DvtChartPieSlice$$.$createFillerSlice$ = function $$DvtChartPieSlice$$$$createFillerSlice$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = new $DvtChartPieSlice$$($dvt$$2$$);
    $DvtSparkChartDefaults$$.$_value$ = $DvtSparkChartEventManager$$;
    $DvtSparkChartDefaults$$.$_bFillerSlice$ = $JSCompiler_alias_TRUE$$;
    $DvtSparkChartDefaults$$.$_centerX$ = $dvt$$2$$.$getCenter$().x;
    $DvtSparkChartDefaults$$.$_centerY$ = $dvt$$2$$.$getCenter$().y;
    $DvtSparkChartDefaults$$.$_fillColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_strokeColor$ = "rgba(255,255,255,0)";
    $DvtSparkChartDefaults$$.$_id$ = new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$);
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieSlice$$.prototype.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDisplay$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDisplay$$.$createAnimation$ = function $$DvtChartAnimOnDisplay$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = [];
    if($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$)) {
      $DvtChartAnimOnDisplay$$.$_animBarLineArea$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$)
    }else {
      if($DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
        $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$)
      }else {
        if($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartEventManager$$.$pieChart$) {
          return $DvtSparkChartEventManager$$.$pieChart$.$getDisplayAnimation$()
        }
      }
    }
    return 0 < $DvtSparkChartDefaults$$.length ? new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$) : $JSCompiler_alias_NULL$$
  };
  $DvtChartAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtChartAnimOnDisplay$$$$_animBarLineArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getChartObjPeers$(), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$ ? $DvtChartStyleUtils$$.length : 0;
    if($DvtChartTypeUtils$$) {
      for(var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartTypeUtils$$;$DvtChartPieRenderUtils$$++) {
        $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$[$DvtChartPieRenderUtils$$];
        $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$getDisplayables$()[0];
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$.$getSeriesType$();
        $DvtChartPieLabelInfo$$ = $JSCompiler_alias_NULL$$;
        if($DvtChartPieLabelUtils$$ instanceof $DvtChartBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartPolarBar$$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartCandlestick$$) {
          $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getDisplayAnimation$($DvtSparkChartDefaults$$)
        }else {
          if($DvtChartPieLabelUtils$$ instanceof $DvtChartLineArea$$) {
            $DvtChartPieLabelInfo$$ = "line" == $DvtChartDataChangeFunnelSlice$$ ? $DvtChartAnimOnDisplay$$.$_getLinePlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$) : $DvtChartAnimOnDisplay$$.$_getAreaPlayable$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$)
          }else {
            if($DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$ || $DvtChartPieLabelUtils$$ instanceof $DvtChartRangeMarker$$) {
              if($DvtChartPieLabelUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartPieLabelUtils$$.$isSelected$()) {
                continue
              }
              $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$ - 0.8, 0.8)
            }
          }
        }
        $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartPieLabelInfo$$)
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtChartAnimOnDisplay$$$$_animBubbleScatterFunnel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getObjects$(), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$ ? $DvtChartStyleUtils$$.length : 0;
    if($DvtChartTypeUtils$$) {
      for(var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartTypeUtils$$;$DvtChartPieRenderUtils$$++) {
        $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$[$DvtChartPieRenderUtils$$], $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.$getDisplayables$()[0], $DvtChartPieLabelUtils$$ instanceof $dvt$$2$$.$SimpleMarker$ ? $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$AnimPopIn$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $JSCompiler_alias_TRUE$$, $DvtSparkChartDefaults$$) : $DvtChartPieLabelUtils$$ instanceof $DvtChartFunnelSlice$$ && ($DvtChartPieLabelInfo$$ = $DvtChartAnimOnDisplay$$.$_getFunnelPlayable$($DvtSparkChartEventManager$$, 
        $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$)), $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartPieLabelInfo$$)
      }
    }
  };
  $DvtChartAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getAreaPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$_baseline$, $DvtChartPieLabelUtils$$;
    if($DvtSparkChartDefaults$$.$isArea$()) {
      var $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$_arBaseCoord$;
      $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getBaseAnimationParams$();
      for(var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.slice(0), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$.length;$DvtChartDataChangeFunnelSlice$$++) {
        if(1 == $DvtChartDataChangeFunnelSlice$$ % 4 || 2 == $DvtChartDataChangeFunnelSlice$$ % 4) {
          $DvtChartPieLabelUtils$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartTypeUtils$$
        }
      }
      $DvtSparkChartDefaults$$.$setBaseAnimationParams$($DvtChartPieLabelUtils$$);
      $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartStyleUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartPieLabelUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getBaseAnimationParams$, $DvtSparkChartDefaults$$.$setBaseAnimationParams$, $DvtChartPieRenderUtils$$)
    }
    for(var $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieRenderUtils$$ = $DvtChartDataChangeRangeMarker$$.slice(0), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartDataChangeRangeMarker$$.length;$DvtChartDataChangeFunnelSlice$$++) {
      if(1 == $DvtChartDataChangeFunnelSlice$$ % 4 || 2 == $DvtChartDataChangeFunnelSlice$$ % 4) {
        $DvtChartDataChangeRangeMarker$$[$DvtChartDataChangeFunnelSlice$$] = $DvtChartTypeUtils$$
      }
    }
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartDataChangeRangeMarker$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtChartStyleUtils$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieRenderUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$ParallelPlayable$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$)
    });
    return $DvtSparkChartEventManager$$
  };
  $DvtChartAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getFunnelPlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCtx$();
    var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.slice(0), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.slice(0);
    $DvtChartStyleUtils$$[0] = 0;
    $DvtChartStyleUtils$$[2] = 0;
    $DvtChartTypeUtils$$[2] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartStyleUtils$$);
    $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartTypeUtils$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ / 2);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    return new $dvt$$2$$.$SequentialPlayable$($DvtSparkChartEventManager$$, [$DvtChartStyleUtils$$, $DvtSparkChartAutomation$$])
  };
  $DvtChartAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtChartAnimOnDisplay$$$$_getLinePlayable$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$_arCoord$, $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.slice(0);
    $DvtChartAnimOnDisplay$$.$_getMeanPoints$($DvtChartTypeUtils$$);
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartTypeUtils$$);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.$setOnEnd$(function() {
      $DvtSparkChartDefaults$$.$setCoords$($DvtChartStyleUtils$$)
    });
    return $DvtSparkChartEventManager$$
  };
  $DvtChartAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtChartAnimOnDisplay$$$$_getMeanPoints$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = Number.MAX_VALUE, $DvtSparkChartAutomation$$ = Number.MIN_VALUE, $DvtChartStyleUtils$$ = $dvt$$2$$.length, $DvtChartTypeUtils$$;
    for($DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartStyleUtils$$;$DvtChartTypeUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtChartTypeUtils$$];
      0 == $DvtChartTypeUtils$$ % 4 || (3 == $DvtChartTypeUtils$$ % 4 || Infinity == $DvtChartPieLabelUtils$$) || ($DvtChartPieLabelUtils$$ < $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$), $DvtChartPieLabelUtils$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$), $DvtSparkChartEventManager$$ += $DvtChartPieLabelUtils$$)
    }
    8 < $DvtChartStyleUtils$$ ? ($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ - 2 * $DvtSparkChartDefaults$$ - 2 * $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$ /= $DvtChartStyleUtils$$ / 2 - 4) : $DvtSparkChartEventManager$$ /= $DvtChartStyleUtils$$ / 2;
    for($DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartStyleUtils$$;$DvtChartTypeUtils$$++) {
      if(1 == $DvtChartTypeUtils$$ % 4 || 2 == $DvtChartTypeUtils$$ % 4) {
        $dvt$$2$$[$DvtChartTypeUtils$$] = $DvtSparkChartEventManager$$
      }
    }
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAnimOnDC$$, $dvt$$2$$.$Obj$);
  $DvtChartAnimOnDC$$.$createAnimation$ = function $$DvtChartAnimOnDC$$$$createAnimation$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    if(!$DvtChartAnimOnDC$$.$_canAnimate$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieLabelInfo$$ = [], $DvtChartPieRenderUtils$$ = [];
    $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) ? ($DvtChartPieLabelInfo$$.push($DvtSparkChartEventManager$$.$pieChart$), $DvtChartPieRenderUtils$$.push($DvtSparkChartDefaults$$.$pieChart$)) : $DvtChartAnimOnDC$$.$_buildAnimLists$($DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$);
    var $DvtChartDataChangeFunnelSlice$$;
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$DataAnimationHandler$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.$constructAnimation$($DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
    0 < $DvtSparkChartEventManager$$.$_playables$.length && ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getAnimation$($JSCompiler_alias_TRUE$$));
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getDataLabels$();
    if($DvtChartDataChangeFunnelSlice$$ && 0 < $DvtSparkChartDefaults$$.length) {
      for($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].$setAlpha$(0)
      }
      $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$SequentialPlayable$($DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, new $dvt$$2$$.$AnimFadeIn$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$ / 4))
    }
    return $DvtChartDataChangeFunnelSlice$$
  };
  $DvtChartAnimOnDC$$.$_buildAnimLists$ = function $$DvtChartAnimOnDC$$$$_buildAnimLists$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getChartObjPeers$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartRenderer$$;
    for($DvtSparkChartEventManager$$ = 0;2 > $DvtSparkChartEventManager$$;$DvtSparkChartEventManager$$++) {
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartPieLabelInfo$$.length;$DvtChartPieLabelUtils$$++) {
        $DvtChartMarkerUtils$$ = $DvtChartPieLabelInfo$$[$DvtChartPieLabelUtils$$];
        $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$.$getDisplayables$()[0];
        $DvtChartRenderer$$ = $JSCompiler_alias_NULL$$;
        if($DvtChartPieUtils$$ instanceof $DvtChartFunnelSlice$$) {
          $DvtChartRenderer$$ = new $DvtChartDataChangeFunnelSlice$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$)
        }else {
          if($DvtChartPieUtils$$ instanceof $DvtChartBar$$ || $DvtChartPieUtils$$ instanceof $DvtChartPolarBar$$) {
            $DvtChartRenderer$$ = new $DvtChartDataChangeBar$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$)
          }else {
            if($DvtChartPieUtils$$ instanceof $DvtChartLineArea$$) {
              $DvtChartRenderer$$ = new $DvtChartDataChangeLineArea$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$)
            }else {
              if($DvtChartPieUtils$$ instanceof $dvt$$2$$.$SimpleMarker$) {
                if($DvtChartPieUtils$$ instanceof $DvtChartLineMarker$$ && !$DvtChartPieUtils$$.$isSelected$()) {
                  continue
                }
                $DvtChartRenderer$$ = new $DvtChartDataChangeMarker$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$)
              }else {
                if($DvtChartPieUtils$$ instanceof $DvtChartRangeMarker$$) {
                  if($DvtChartPieUtils$$.$_isInvisible$ && !$DvtChartPieUtils$$.$isSelected$()) {
                    continue
                  }
                  $DvtChartRenderer$$ = new $DvtChartDataChangeRangeMarker$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$)
                }else {
                  $DvtChartPieUtils$$ instanceof $DvtChartCandlestick$$ && ($DvtChartRenderer$$ = new $DvtChartDataChangeAbstract$$($DvtChartMarkerUtils$$, $DvtChartTypeUtils$$))
                }
              }
            }
          }
        }
        $DvtChartRenderer$$ && ($DvtChartPieRenderUtils$$.push($DvtChartRenderer$$), $DvtChartRenderer$$.$setOldChart$($DvtSparkChartDefaults$$))
      }
      $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$;
      $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getChartObjPeers$()
    }
  };
  $DvtChartAnimOnDC$$.$_canAnimate$ = function $$DvtChartAnimOnDC$$$$_canAnimate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $dvt$$2$$ && $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) != $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) ? $JSCompiler_alias_TRUE$$ : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? 
    $JSCompiler_alias_TRUE$$ : $dvt$$2$$.$getType$() == $DvtSparkChartEventManager$$.$getType$() ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChange$$, $dvt$$2$$.$Chart$);
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeAbstract$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeAbstract$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeAbstract$$$$$animateUpdate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_shape$;
    this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $dvt$$2$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $DvtSparkChartDefaults$$), 1)
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateInsert$ = function $$DvtChartDataChangeAbstract$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    if(this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2)
    }else {
      var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 0)
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.$animateDelete$ = function $$DvtChartDataChangeAbstract$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    if(this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
      $DvtSparkChartEventManager$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0)
    }else {
      var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0)
    }
  };
  $DvtChartDataChangeAbstract$$.prototype.getId = $JSCompiler_get$$("$_animId$");
  $DvtChartDataChangeAbstract$$.prototype.Init = function $$DvtChartDataChangeAbstract$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    this.$_peer$ = $dvt$$2$$;
    this.$_updateDuration$ = 0.75 * $DvtSparkChartEventManager$$;
    this.$_insertDuration$ = 0.5 * $DvtSparkChartEventManager$$;
    this.$_deleteDuration$ = 0.5 * $DvtSparkChartEventManager$$;
    this.$_shape$ = $dvt$$2$$.$getDisplayables$()[0];
    this.$_animId$ = $dvt$$2$$.$getSeries$() + "/" + $dvt$$2$$.$getGroup$()
  };
  $DvtChartDataChangeAbstract$$.prototype.$setOldChart$ = $JSCompiler_set$$("$_oldChart$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeBar$$.prototype.Init = function $$DvtChartDataChangeBar$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeBar$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_indicator$ = $JSCompiler_alias_NULL$$;
    this.$_animId$ += "/bar"
  };
  $DvtChartDataChangeBar$$.prototype.$animateInsert$ = function $$DvtChartDataChangeBar$$$$$animateInsert$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
    $dvt$$2$$.add($DvtSparkChartEventManager$$, 2)
  };
  $DvtChartDataChangeBar$$.prototype.$animateDelete$ = function $$DvtChartDataChangeBar$$$$$animateDelete$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$.$addChild$(this.$_shape$);
    var $DvtSparkChartDefaults$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
    $dvt$$2$$.add($DvtSparkChartDefaults$$, 0)
  };
  $DvtChartDataChangeBar$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeBar$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_oldChart$, $DvtChartPieLabelUtils$$ = this.$_peer$.$_chart$, $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) != $DvtChartTypeUtils$$.$isHorizontal$($DvtChartPieLabelUtils$$), $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$($DvtChartPieLabelInfo$$), $DvtChartPieLabelInfo$$ = this.$_getAnimationParams$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$_shape$.$isSelected$() || 
    this.$_shape$.$isSelected$(), $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getPrimaryFill$().$clone$(), $DvtChartPieUtils$$ = this.$_shape$.$getPrimaryFill$();
    if(!$dvt$$2$$.$ArrayUtils$.$equals$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$) || !$DvtChartMarkerUtils$$.$equals$($DvtChartPieUtils$$)) {
      var $DvtChartDataChangeRangeMarker$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartDataChangeMarker$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartDataChangeLineArea$$ = this.$_peer$.$getGroupIndex$(), $DvtChartLineArea$$ = $DvtSparkChartDefaults$$.$_peer$.$getGroupIndex$();
      "none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartPieLabelUtils$$) && (this.$_indicator$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtSparkChartAutomation$$, $DvtChartDataChangeMarker$$, $DvtChartLineArea$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$));
      this.$_setAnimationParams$($DvtChartPieRenderUtils$$);
      $DvtChartDataChangeFunnelSlice$$ || this.$_shape$.$setFill$($DvtChartMarkerUtils$$);
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartPieLabelInfo$$);
      $DvtChartDataChangeFunnelSlice$$ || $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartPieUtils$$);
      this.$_indicator$ && ($DvtSparkChartAutomation$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
      $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1)
    }
  };
  $DvtChartDataChangeBar$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$)
  };
  $DvtChartDataChangeBar$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeBar$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$, this.$_indicator$)
  };
  $DvtChartDataChangeBar$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeBar$$$$$_onEndAnimation$$() {
    this.$_indicator$.getParent().removeChild(this.$_indicator$);
    this.$_indicator$ = $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeLineArea$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeLineArea$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
    this.$_coords$ = this.$_shape$.$_arCoord$;
    var $DvtSparkChartAutomation$$ = this.$_shape$.$isArea$(), $DvtChartTypeUtils$$ = this.$_oldChart$, $DvtChartPieLabelUtils$$ = this.$_chart$, $DvtChartPieLabelInfo$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_peer$.$getSeriesIndex$(), $DvtChartDataChangeFunnelSlice$$ = this.$_shape$.$getCommonGroupIndices$($DvtSparkChartDefaults$$.$_shape$), $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getCommonGroupIndices$(this.$_shape$), $DvtChartPieUtils$$;
    if($DvtSparkChartAutomation$$) {
      var $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartDefaults$$.$_getBaseAnimationParams$(this.$_shape$), $DvtChartDataChangeMarker$$ = this.$_getBaseAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
      $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$);
      $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$) || (this.$_setBaseAnimationParams$($DvtChartDataChangeRangeMarker$$), $DvtChartPieUtils$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartPieUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getBaseAnimationParams$, this.$_setBaseAnimationParams$, $DvtChartDataChangeMarker$$))
    }
    var $DvtChartLineArea$$, $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartDefaults$$.$_getAnimationParams$(this.$_shape$), $DvtChartDataChangeMarker$$ = this.$_getAnimationParams$($DvtSparkChartDefaults$$.$_shape$);
    $DvtChartDataChangeLineArea$$.$_matchGroupIndices$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$);
    $dvt$$2$$.$ArrayUtils$.$equals$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$) || (this.$_setAnimationParams$($DvtChartDataChangeRangeMarker$$), $DvtChartLineArea$$ = new $dvt$$2$$.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $DvtChartLineArea$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtChartDataChangeMarker$$));
    if("none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartPieLabelUtils$$) && !($DvtSparkChartAutomation$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartDataChangeFunnelSlice$$.length;$DvtChartDataChangeMarker$$++) {
        $DvtSparkChartAutomation$$ = $DvtChartDataChangeUtils$$.$getDirection$($DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$, $DvtChartMarkerUtils$$[$DvtChartDataChangeMarker$$], $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeMarker$$]), ($DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeUtils$$.$makeIndicator$($DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$, $DvtChartMarkerUtils$$[$DvtChartDataChangeMarker$$], $DvtChartPieLabelUtils$$, 
        $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeMarker$$])) && this.$_shape$.$addIndicator$($DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeMarker$$], $DvtSparkChartAutomation$$, $DvtChartDataChangeRangeMarker$$)
      }
    }
    if($DvtChartPieUtils$$ || $DvtChartLineArea$$) {
      $DvtChartTypeUtils$$ = new $dvt$$2$$.$ParallelPlayable$(this.$_context$, $DvtChartPieUtils$$, $DvtChartLineArea$$), $DvtChartTypeUtils$$.$setOnEnd$(this.$_onAnimationEnd$, this), $DvtSparkChartEventManager$$.add($DvtChartTypeUtils$$, 1)
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateInsert$ = function $$DvtChartDataChangeLineArea$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_context$, this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2)
  };
  $DvtChartDataChangeLineArea$$.prototype.$animateDelete$ = function $$DvtChartDataChangeLineArea$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    "area" == $DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($DvtSparkChartAutomation$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$.$addChild$(this.$_deletedAreas$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $DvtSparkChartAutomation$$.$setOnEnd$(this.$_removeDeletedAreas$, 
    this), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0))) : ($DvtSparkChartDefaults$$.$addChild$(this.$_shape$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0))
  };
  $DvtChartDataChangeLineArea$$.prototype.$_removeDeletedAreas$ = function $$DvtChartDataChangeLineArea$$$$$_removeDeletedAreas$$() {
    var $dvt$$2$$ = this.$_chart$.$_areaContainer$;
    $dvt$$2$$ && $dvt$$2$$.removeChild(this.$_deletedAreas$)
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getAnimationParams$($dvt$$2$$)
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setAnimationParams$($dvt$$2$$)
  };
  $DvtChartDataChangeLineArea$$.prototype.$_getBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_getBaseAnimationParams$$($dvt$$2$$) {
    return this.$_shape$.$getBaseAnimationParams$($dvt$$2$$)
  };
  $DvtChartDataChangeLineArea$$.prototype.$_setBaseAnimationParams$ = function $$DvtChartDataChangeLineArea$$$$$_setBaseAnimationParams$$($dvt$$2$$) {
    this.$_shape$.$setBaseAnimationParams$($dvt$$2$$)
  };
  $DvtChartDataChangeLineArea$$.prototype.$_onAnimationEnd$ = function $$DvtChartDataChangeLineArea$$$$$_onAnimationEnd$$() {
    this.$_shape$.$removeIndicators$();
    this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
  };
  $DvtChartDataChangeLineArea$$.$_matchGroupIndices$ = function $$DvtChartDataChangeLineArea$$$$_matchGroupIndices$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = 3;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$ += 4) {
      $dvt$$2$$[$DvtSparkChartDefaults$$] = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$]
    }
  };
  $DvtChartDataChangeLineArea$$.prototype.Init = function $$DvtChartDataChangeLineArea$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeLineArea$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_context$ = this.$_shape$.$getCtx$();
    this.$_chart$ = this.$_peer$.$_chart$;
    this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getCenterDimensions$(), $DvtChartPieLabelUtils$$ = this.$_shape$.$getCenterDimensions$();
    if(!$DvtChartPieLabelUtils$$.$equals$($DvtSparkChartAutomation$$)) {
      this.$_shape$.$setCenterDimensions$($DvtSparkChartAutomation$$);
      var $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
      $DvtChartPieLabelInfo$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $DvtChartPieLabelUtils$$);
      var $DvtChartPieRenderUtils$$ = this.$_peer$.$_chart$;
      this.$isValueChange$($DvtSparkChartDefaults$$) && ("none" != $DvtChartStyleUtils$$.$getAnimationIndicators$($DvtChartPieRenderUtils$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtChartPieRenderUtils$$)) && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$_shape$, $DvtChartPieRenderUtils$$.$setSolidFill$("#FFFF2B", 0.9), $DvtChartPieRenderUtils$$.$setCenterDimensions$($DvtSparkChartAutomation$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($DvtChartPieRenderUtils$$), $DvtChartPieLabelInfo$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_RECTANGLE$, 
      $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$.$getCenterDimensions$, $DvtChartPieRenderUtils$$.$setCenterDimensions$, $DvtChartPieLabelUtils$$), $DvtChartPieLabelInfo$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER$, $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$.$getAlpha$, $DvtChartPieRenderUtils$$.$setAlpha$, 0), this.$_overlay$ = $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$.$setOnEnd$(this.$_onEndAnimation$, this));
      $DvtSparkChartEventManager$$.add($DvtChartPieLabelInfo$$, 1)
    }
  };
  $DvtChartDataChangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2)
  };
  $DvtChartDataChangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0)
  };
  $DvtChartDataChangeMarker$$.prototype.$isValueChange$ = function $$DvtChartDataChangeMarker$$$$$isValueChange$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $JSCompiler_alias_FALSE$$;
    if($dvt$$2$$) {
      var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_peer$.$getSeriesIndex$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$_peer$.$getGroupIndex$(), $DvtSparkChartAutomation$$ = this.$_peer$.$getSeriesIndex$(), $DvtChartStyleUtils$$ = this.$_peer$.$getGroupIndex$();
      $dvt$$2$$ = $dvt$$2$$.$_oldChart$.$getOptions$();
      var $DvtChartTypeUtils$$ = this.$_peer$.$_chart$.$getOptions$(), $DvtChartPieLabelUtils$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].y, $DvtChartPieLabelInfo$$ = $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].z, $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartStyleUtils$$].y, $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartStyleUtils$$].z, 
      $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.series[$DvtSparkChartAutomation$$].items[$DvtChartStyleUtils$$].x !== $dvt$$2$$.series[$DvtSparkChartEventManager$$].items[$DvtSparkChartDefaults$$].x || $DvtChartPieRenderUtils$$ !== $DvtChartPieLabelUtils$$ || $DvtChartDataChangeFunnelSlice$$ !== $DvtChartPieLabelInfo$$
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataChangeMarker$$.prototype.$_onEndAnimation$ = function $$DvtChartDataChangeMarker$$$$$_onEndAnimation$$() {
    this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = $JSCompiler_alias_NULL$$)
  };
  $DvtChartDataChangeMarker$$.prototype.Init = function $$DvtChartDataChangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/marker"
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeRangeMarker$$.prototype.Init = function $$DvtChartDataChangeRangeMarker$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeRangeMarker$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/rangeMarker"
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeRangeMarker$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    this.$_shape$.$setAlpha$(0);
    var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartDefaults$$, 2)
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeRangeMarker$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$.$addChild$(this.$_shape$);
    var $DvtSparkChartAutomation$$ = new $dvt$$2$$.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 0)
  };
  $DvtChartDataChangeRangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeRangeMarker$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartStyleUtils$$ = this.$_shape$.$getAnimationParams$();
    this.$_shape$.$setAnimationParams$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    $DvtSparkChartAutomation$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $DvtChartStyleUtils$$);
    $DvtSparkChartEventManager$$.add($DvtSparkChartAutomation$$, 1)
  };
  var $DvtChartDataChangeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataChangeUtils$$.$DIR_UP$ = 0;
  $DvtChartDataChangeUtils$$.$DIR_DOWN$ = 1;
  $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ = 2;
  $DvtChartDataChangeUtils$$.$makeIndicator$ = function $$DvtChartDataChangeUtils$$$$makeIndicator$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    if($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartAutomation$$)) {
      return $JSCompiler_alias_NULL$$
    }
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$getDirection$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$);
    if($dvt$$2$$ == $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtSparkChartEventManager$$ = ($dvt$$2$$ = $dvt$$2$$ === $DvtChartDataChangeUtils$$.$DIR_DOWN$) ? $DvtChartStyleUtils$$.$getAnimationDownColor$($DvtSparkChartAutomation$$) : $DvtChartStyleUtils$$.$getAnimationUpColor$($DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartDataChangeUtils$$.$_drawIndicator$($DvtSparkChartAutomation$$.$getCtx$(), $dvt$$2$$, $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$);
    $DvtSparkChartAutomation$$.$getPlotArea$().$addChild$($dvt$$2$$);
    return $dvt$$2$$
  };
  $DvtChartDataChangeUtils$$.$getDirection$ = function $$DvtChartDataChangeUtils$$$$getDirection$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$);
    return $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ || $dvt$$2$$ == $JSCompiler_alias_NULL$$ || $DvtSparkChartAutomation$$ == $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ : $DvtSparkChartAutomation$$ > $dvt$$2$$ ? $DvtChartDataChangeUtils$$.$DIR_UP$ : $DvtChartDataChangeUtils$$.$DIR_DOWN$
  };
  $DvtChartDataChangeUtils$$.$_drawIndicator$ = function $$DvtChartDataChangeUtils$$$$_drawIndicator$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ ? ($dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$) ? !$DvtSparkChartDefaults$$ : $DvtSparkChartDefaults$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $DvtSparkChartDefaults$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$setSolidFill$($DvtChartStyleUtils$$);
    return $DvtSparkChartEventManager$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeAbstract$$);
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateUpdate$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$, $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getAnimationParams$(), $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$_shape$.$getFill$().$clone$(), $DvtChartPieLabelInfo$$ = this.$_shape$.$getFill$();
    if(!$dvt$$2$$.$ArrayUtils$.$equals$($DvtChartStyleUtils$$, $DvtChartTypeUtils$$) || !$DvtChartPieLabelUtils$$.$equals$($DvtChartPieLabelInfo$$)) {
      $DvtSparkChartAutomation$$.$setAnimationParams$($DvtChartStyleUtils$$), this.$_shape$.$setFill$($DvtChartPieLabelUtils$$), $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_updateDuration$), $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartTypeUtils$$), $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_FILL$, 
      this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $DvtChartPieLabelInfo$$), this.$_indicator$ && $DvtChartStyleUtils$$.$setOnEnd$(this.$_onEndAnimation$, this), $DvtSparkChartEventManager$$.add($DvtChartStyleUtils$$, 1)
    }
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateInsert$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateInsert$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = this.$_shape$, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getAnimationParams$(), $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.slice(0);
    $DvtChartStyleUtils$$[0] += $DvtChartStyleUtils$$[1] / 2;
    $DvtChartStyleUtils$$[1] = 0;
    $DvtChartStyleUtils$$[3] = 0;
    $DvtSparkChartDefaults$$.$setAnimationParams$($DvtChartStyleUtils$$);
    $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartDefaults$$.$getCtx$(), this, this.$_insertDuration$);
    $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$.$getAnimationParams$, $DvtSparkChartDefaults$$.$setAnimationParams$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$.add($DvtChartStyleUtils$$, 2)
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.$animateDelete$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateDelete$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = this.$_shape$;
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$);
    var $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.$getAnimationParams$(), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.slice(0);
    $DvtChartTypeUtils$$[0] += $DvtChartStyleUtils$$[1] / 2;
    $DvtChartTypeUtils$$[1] = 0;
    $DvtChartTypeUtils$$[3] = 0;
    $DvtChartStyleUtils$$ = new $dvt$$2$$.$CustomAnimation$($DvtSparkChartAutomation$$.$getCtx$(), this, this.$_deleteDuration$);
    $DvtChartStyleUtils$$.$_animator$.$addProp$($dvt$$2$$.$Animator$.$TYPE_NUMBER_ARRAY$, $DvtSparkChartAutomation$$, $DvtSparkChartAutomation$$.$getAnimationParams$, $DvtSparkChartAutomation$$.$setAnimationParams$, $DvtChartTypeUtils$$);
    $DvtSparkChartEventManager$$.add($DvtChartStyleUtils$$, 0)
  };
  $DvtChartDataChangeFunnelSlice$$.prototype.Init = function $$DvtChartDataChangeFunnelSlice$$$$Init$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    $DvtChartDataChangeFunnelSlice$$.$superclass$.Init.call(this, $dvt$$2$$, $DvtSparkChartEventManager$$);
    this.$_animId$ += "/funnel"
  };
  var $DvtChartAxisUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? "tangential" : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left" : "bottom"
  };
  $DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].baselineScaling;
    return $DvtSparkChartDefaults$$ && ("zero" == $DvtSparkChartDefaults$$ || "min" == $DvtSparkChartDefaults$$) ? $DvtSparkChartDefaults$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "min" : "zero"
  };
  $DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().yAxis.position;
    if($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      return"radial"
    }
    if($DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$)) {
      return $DvtSparkChartDefaults$$ && ("top" == $DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartDefaults$$) ? $DvtSparkChartDefaults$$ : "bottom"
    }
    $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : "end");
    return $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "left" : "right" : $DvtSparkChartDefaults$$ && "end" == $DvtSparkChartDefaults$$ ? "right" : "left"
  };
  $DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().y2Axis.position;
    return $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$ && ("top" == $DvtSparkChartDefaults$$ || "bottom" == $DvtSparkChartDefaults$$) ? $DvtSparkChartDefaults$$ : "top" : $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "right" : "left" : $DvtSparkChartDefaults$$ && "start" == $DvtSparkChartDefaults$$ ? "left" : "right"
  };
  $DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" != $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$)
  };
  $DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "disabled" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$)
  };
  $DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().timeAxisType;
    return $DvtSparkChartEventManager$$ && "auto" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? "skipGaps" : "disabled"
  };
  $DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($dvt$$2$$) {
    return"mixedFrequency" == $DvtChartAxisUtils$$.$getTimeAxisType$($dvt$$2$$)
  };
  $DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getFromCache$("axisOffset");
    if($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$) {
      return $DvtSparkChartEventManager$$
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.groupSeparators;
    $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) && 1 < $DvtChartDataUtils$$.$getNumLevels$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.rendered ? $DvtSparkChartEventManager$$ = 0.5 : $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCenteredSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && 1 == $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) ? $DvtSparkChartEventManager$$ = 0.5 : $DvtChartDefaults$$.$isPostAltaSkin$($dvt$$2$$) && 
    !$DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) && !$DvtChartEventUtils$$.$isScrollable$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? ($DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? 0.2 : 0.5, $DvtSparkChartEventManager$$ -= $DvtSparkChartEventManager$$ / Math.sqrt($DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$))) : $DvtSparkChartEventManager$$ = 0;
    $dvt$$2$$.$putToCache$("axisOffset", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if("bar" != $DvtSparkChartAutomation$$ && "centeredSegmented" != $DvtChartPieLabelUtils$$ && "centeredStepped" != $DvtChartPieLabelUtils$$) {
          return $JSCompiler_alias_FALSE$$
        }
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : "polygon" == $dvt$$2$$.$getOptions$().polarGridShape
  };
  $DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if("y" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$) || "y2" == $DvtSparkChartEventManager$$ && !$DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return"off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.tickLabel.rendered && !$DvtSparkChartDefaults$$.title ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return"off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.axisLine.rendered ? $JSCompiler_alias_FALSE$$ : "auto" == $DvtSparkChartDefaults$$.axisLine.rendered && "x" != $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return"off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.majorTick.rendered ? $JSCompiler_alias_FALSE$$ : "auto" == $DvtSparkChartDefaults$$.majorTick.rendered && "x" == $DvtSparkChartEventManager$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"];
    return"off" == $DvtSparkChartDefaults$$.rendered || "off" == $DvtSparkChartDefaults$$.minorTick.rendered ? $JSCompiler_alias_FALSE$$ : "on" == $DvtSparkChartDefaults$$.minorTick.rendered ? $JSCompiler_alias_TRUE$$ : $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"], $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$);
    return"log" == $DvtSparkChartDefaults$$.scale && 0 < $DvtSparkChartAutomation$$.min && 0 < $DvtSparkChartAutomation$$.max
  };
  $DvtChartAxisUtils$$.$getTickLabelHeight$ = function $$DvtChartAxisUtils$$$$getTickLabelHeight$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$ + "Axis"].tickLabel.style;
    $DvtChartStyleUtils$$ instanceof $dvt$$2$$.$CSSStyle$ || ($DvtChartStyleUtils$$ = new $dvt$$2$$.$CSSStyle$($DvtChartStyleUtils$$));
    $DvtChartStyleUtils$$.$mergeUnder$($dvt$$2$$.$Axis$.$getDefaults$($DvtSparkChartAutomation$$.skin).tickLabel.style);
    return $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartStyleUtils$$)
  };
  $DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if($DvtChartAxisUtils$$.$isTickLabelInside$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return 0
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtChartStyleUtils$$ = $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapWidth * $DvtChartStyleUtils$$), $DvtSparkChartDefaults$$ = Math.ceil($DvtSparkChartDefaults$$.layout.tickLabelGapHeight * $DvtChartStyleUtils$$);
    return"x" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ ? $DvtChartPieLabelUtils$$ : $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$ : $DvtChartPieLabelUtils$$
  };
  $DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, $DvtSparkChartEventManager$$) / 14 : 0
  };
  $DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && "x" == $DvtSparkChartEventManager$$ ? $JSCompiler_alias_FALSE$$ : "inside" == $dvt$$2$$.$getOptions$()[$DvtSparkChartEventManager$$ + "Axis"].tickLabel.position
  };
  $DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtChartStyleUtils$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if($DvtSparkChartEventManager$$) {
      var $DvtChartTypeUtils$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$)
    }
    var $DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$;
    $DvtSparkChartDefaults$$.viewportMin != $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.viewportMin : $DvtSparkChartDefaults$$.viewportStartGroup != $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportStartGroup) - $DvtChartStyleUtils$$ : $DvtSparkChartDefaults$$.viewportStartGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.min);
    var $DvtChartPieLabelInfo$$ = $JSCompiler_alias_NULL$$;
    $DvtSparkChartDefaults$$.viewportMax != $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.viewportMax : $DvtSparkChartDefaults$$.viewportEndGroup != $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$ ? $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$.viewportEndGroup) + $DvtChartStyleUtils$$ : $DvtSparkChartDefaults$$.viewportEndGroup : $DvtSparkChartEventManager$$ && ($DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.max);
    return{min:$DvtChartPieLabelUtils$$, max:$DvtChartPieLabelInfo$$}
  };
  $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().xAxis, $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$);
    if(!$DvtSparkChartDefaults$$) {
      var $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x")
    }
    var $DvtChartTypeUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.min != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$.min : $DvtSparkChartDefaults$$ ? 0 - $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$.min, $DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.max != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$.max : $DvtSparkChartDefaults$$ ? $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 
    1 + $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$.max;
    return{min:$DvtChartTypeUtils$$, max:$DvtChartPieLabelUtils$$}
  };
  $DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.xAxis, $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.initialZooming;
    if($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && !("off" == $DvtSparkChartDefaults$$.zoomAndScroll || "none" == $DvtChartStyleUtils$$)) {
      $DvtSparkChartDefaults$$._initialZoomed && ("last" == $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$.viewportMin = $JSCompiler_alias_NULL$$ : $DvtSparkChartAutomation$$.viewportMax = $JSCompiler_alias_NULL$$);
      var $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, $JSCompiler_alias_FALSE$$), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.min, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.max;
      if(!("last" == $DvtChartStyleUtils$$ && $DvtChartPieLabelInfo$$ != $JSCompiler_alias_NULL$$ || "first" == $DvtChartStyleUtils$$ && $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$)) {
        var $DvtChartStyleUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) ? $DvtSparkChartEventManager$$.$h$ : $DvtSparkChartEventManager$$.$w$, $DvtChartPieRenderUtils$$ = Math.floor($DvtChartStyleUtils$$ / (2 * $DvtChartAxisUtils$$.$getTickLabelHeight$($dvt$$2$$, "x"))) + $DvtChartAxisUtils$$.$getAxisOffset$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$) - 1;
        if(!($DvtChartDataChangeFunnelSlice$$ <= $DvtChartPieRenderUtils$$)) {
          var $DvtChartMarkerUtils$$;
          $DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$) ? ($DvtChartStyleUtils$$ = 0, $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$) : ($DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($dvt$$2$$, "x"), $DvtChartStyleUtils$$ = $DvtChartMarkerUtils$$.min, $DvtChartMarkerUtils$$ = $DvtChartMarkerUtils$$.max);
          $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$ / $DvtChartDataChangeFunnelSlice$$ * ($DvtChartMarkerUtils$$ - $DvtChartStyleUtils$$);
          "last" == $DvtSparkChartDefaults$$.initialZooming ? ($DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$ = $DvtChartMarkerUtils$$), $DvtSparkChartAutomation$$.viewportMin = Math.max($DvtChartPieLabelUtils$$ - $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$)) : ($DvtChartPieLabelInfo$$ == $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$), $DvtSparkChartAutomation$$.viewportMax = Math.min($DvtChartPieLabelInfo$$ + $DvtChartPieRenderUtils$$, 
          $DvtChartMarkerUtils$$));
          $DvtSparkChartDefaults$$._initialZoomed = $JSCompiler_alias_TRUE$$
        }
      }
    }
  };
  $DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($DvtSparkChartEventManager$$) {
    if(!$DvtChartTypeUtils$$.$hasBarSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$hasCandlestickSeries$($DvtSparkChartEventManager$$)) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$);
    if(1 <= $DvtSparkChartAutomation$$) {
      return $DvtSparkChartDefaults$$._averageGroupZ = Infinity, $JSCompiler_alias_NULL$$
    }
    $DvtSparkChartDefaults$$._averageGroupZ = 0;
    for(var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, "bar"), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$_optionsCache$._hasVaryingBarWidth, $DvtChartMarkerUtils$$ = [], $DvtChartPieUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$, 
    $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartPieLabelUtils$$;$DvtChartDataChangeLineArea$$++) {
      $DvtChartDataChangeRangeMarker$$ = $DvtChartPieUtils$$ = 0;
      if($DvtChartDataChangeFunnelSlice$$) {
        for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieRenderUtils$$.y.length;$DvtChartDataChangeMarker$$++) {
          $DvtChartPieUtils$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$.y[$DvtChartDataChangeMarker$$], $DvtChartDataChangeLineArea$$, $JSCompiler_alias_FALSE$$)
        }
        for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieRenderUtils$$.y2.length;$DvtChartDataChangeMarker$$++) {
          $DvtChartDataChangeRangeMarker$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$.y2[$DvtChartDataChangeMarker$$], $DvtChartDataChangeLineArea$$, $JSCompiler_alias_TRUE$$)
        }
      }else {
        $DvtChartPieUtils$$ = $DvtChartPieRenderUtils$$.y.length, $DvtChartDataChangeRangeMarker$$ = $DvtChartPieRenderUtils$$.y2.length
      }
      $DvtChartMarkerUtils$$.push($DvtChartPieLabelInfo$$ ? Math.max($DvtChartPieUtils$$, $DvtChartDataChangeRangeMarker$$) : $DvtChartPieUtils$$ + $DvtChartDataChangeRangeMarker$$)
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$ArrayUtils$.reduce($DvtChartMarkerUtils$$, function($dvt$$2$$, $DvtSparkChartEventManager$$) {
      return $dvt$$2$$ + $DvtSparkChartEventManager$$
    });
    var $DvtChartLineArea$$ = $DvtSparkChartEventManager$$ * $DvtSparkChartAutomation$$ / (1 - $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$ArrayUtils$.map($DvtChartMarkerUtils$$, function($dvt$$2$$) {
      return $dvt$$2$$ + $DvtChartLineArea$$ / $DvtChartPieLabelUtils$$
    });
    $DvtSparkChartDefaults$$._averageGroupZ = ($DvtSparkChartEventManager$$ + $DvtChartLineArea$$) / $DvtChartPieLabelUtils$$;
    return $DvtSparkChartAutomation$$
  };
  $DvtChartAxisUtils$$.$isYAdjustmentNeeded$ = function $$DvtChartAxisUtils$$$$isYAdjustmentNeeded$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.dataLabelPosition, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$) && ("outsideBarEdge" == $DvtSparkChartEventManager$$ || $DvtSparkChartDefaults$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  var $DvtChartDataUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartDataUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if(!$DvtSparkChartEventManager$$ || !$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartDefaults$$);
      if($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.items && 1 <= $DvtSparkChartAutomation$$.items.length) {
        return $JSCompiler_alias_TRUE$$
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($dvt$$2$$) {
    return!$DvtChartDataUtils$$.$hasData$($dvt$$2$$) || $DvtChartDataUtils$$.$hasInvalidTimeData$($dvt$$2$$)
  };
  $DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($dvt$$2$$) {
    if($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPie$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if(!$DvtSparkChartEventManager$$ || (!$DvtSparkChartEventManager$$.series || 1 > $DvtSparkChartEventManager$$.series.length) || 1 > $DvtSparkChartDefaults$$) {
      return $JSCompiler_alias_TRUE$$
    }
    var $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    if($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartStyleUtils$$;$DvtSparkChartAutomation$$++) {
        for($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$);
          if($DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$.x == $JSCompiler_alias_NULL$$ || isNaN($DvtChartPieLabelUtils$$.x))) {
            return $JSCompiler_alias_TRUE$$
          }
        }
      }
    }else {
      if($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$;$DvtSparkChartEventManager$$++) {
          if($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtSparkChartAutomation$$)) {
            return $JSCompiler_alias_TRUE$$
          }
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if($DvtSparkChartDefaults$$) {
      for(var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        if($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] != $JSCompiler_alias_NULL$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($DvtSparkChartEventManager$$) {
    if($DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_optionsCache$, $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isValidType$($DvtSparkChartEventManager$$) || ($DvtSparkChartDefaults$$.type = "bar");
      var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelInfo$$ && ($DvtSparkChartAutomation$$._hasVolume = $JSCompiler_alias_FALSE$$, 1 < $DvtChartPieLabelUtils$$ && ($DvtSparkChartDefaults$$.series = $DvtSparkChartDefaults$$.series.slice(0, 1), $DvtChartPieLabelUtils$$ = 1));
      var $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$._hasVaryingBarWidth = $JSCompiler_alias_FALSE$$;
      $DvtSparkChartAutomation$$.dataMarkerSizeSet = $JSCompiler_alias_FALSE$$;
      $DvtSparkChartAutomation$$.dataMarkerDisplayedSet = $JSCompiler_alias_FALSE$$;
      var $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = 100 < $DvtChartPieLabelUtils$$;
      $DvtSparkChartAutomation$$.hasLargeSeriesCount = $DvtChartMarkerUtils$$;
      for(var $DvtChartPieUtils$$ = 0, $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieLabelUtils$$;$DvtChartDataChangeMarker$$++) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$);
        !$DvtChartMarkerUtils$$ && ($DvtChartDataChangeLineArea$$ != $JSCompiler_alias_NULL$$ && 0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$)) && $DvtChartDataChangeRangeMarker$$.push($DvtChartDataChangeLineArea$$);
        var $DvtChartLineArea$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$);
        $DvtChartLineArea$$ && ($DvtChartLineArea$$.items && $DvtChartLineArea$$.items.length > $DvtChartPieUtils$$) && ($DvtChartPieUtils$$ = $DvtChartLineArea$$.items.length);
        if("hidden" == $DvtChartLineArea$$.visibility) {
          var $DvtChartRenderer$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
          0 > $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartRenderer$$, $DvtChartDataChangeLineArea$$) && $DvtChartRenderer$$.push($DvtChartDataChangeLineArea$$)
        }
        $DvtChartLineArea$$.visibility = $JSCompiler_alias_NULL$$;
        if($DvtChartLineArea$$ && $DvtChartLineArea$$.items) {
          for(var $DvtChartRenderer$$ = $DvtChartLineArea$$.items, $DvtChartDataChangeBar$$, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartRenderer$$.length;$DvtChartDataChangeLineArea$$++) {
            $DvtChartRenderer$$[$DvtChartDataChangeLineArea$$] && ($DvtChartDataChangeBar$$ = $DvtChartRenderer$$[$DvtChartDataChangeLineArea$$], "object" != typeof $DvtChartDataChangeBar$$ ? $DvtChartDataChangeBar$$ = Number($DvtChartDataChangeBar$$) : (!$DvtChartDataChangeFunnelSlice$$ && $DvtChartDataChangeBar$$.x && ($DvtChartDataChangeBar$$.x = Number($DvtChartDataChangeBar$$.x)), $DvtChartDataChangeBar$$.y && ($DvtChartDataChangeBar$$.y = Number($DvtChartDataChangeBar$$.y)), $DvtChartDataChangeBar$$.z && 
            ($DvtChartDataChangeBar$$.z = Number($DvtChartDataChangeBar$$.z), $DvtChartPieRenderUtils$$ && 1 != $DvtChartDataChangeBar$$.z && ($DvtSparkChartAutomation$$._hasVaryingBarWidth = $JSCompiler_alias_TRUE$$)), $DvtChartDataChangeBar$$.value && ($DvtChartDataChangeBar$$.value = Number($DvtChartDataChangeBar$$.value)), $DvtChartDataChangeBar$$.targetValue && ($DvtChartDataChangeBar$$.targetValue = Number($DvtChartDataChangeBar$$.targetValue)), $DvtChartDataChangeBar$$.open && ($DvtChartDataChangeBar$$.open = 
            Number($DvtChartDataChangeBar$$.open)), $DvtChartDataChangeBar$$.close && ($DvtChartDataChangeBar$$.close = Number($DvtChartDataChangeBar$$.close)), $DvtChartDataChangeBar$$.low && ($DvtChartDataChangeBar$$.low = Number($DvtChartDataChangeBar$$.low)), $DvtChartDataChangeBar$$.high && ($DvtChartDataChangeBar$$.high = Number($DvtChartDataChangeBar$$.high)), $DvtChartDataChangeBar$$.volume && ($DvtChartDataChangeBar$$.volume = Number($DvtChartDataChangeBar$$.volume), $DvtSparkChartAutomation$$._hasVolume = 
            $JSCompiler_alias_TRUE$$), $DvtChartDataChangeBar$$.markerSize && ($DvtSparkChartAutomation$$.dataMarkerSizeSet = $JSCompiler_alias_TRUE$$), $DvtChartDataChangeBar$$.markerDisplayed && ($DvtSparkChartAutomation$$.dataMarkerDisplayedSet = $JSCompiler_alias_TRUE$$)), $DvtChartRenderer$$[$DvtChartDataChangeLineArea$$] = $DvtChartDataChangeBar$$)
          }
        }
      }
      if($DvtChartPieLabelInfo$$ && $DvtChartDataUtils$$.$hasVolumeSeries$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
        $DvtChartDataChangeMarker$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, 0));
        $DvtChartDataChangeMarker$$.assignedToY2 = "on";
        $DvtChartDataChangeMarker$$.type = "bar";
        $DvtChartDataChangeMarker$$.categories = $DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, 0);
        $DvtChartDataChangeMarker$$.id = "_volume";
        $DvtChartDataChangeMarker$$._selectable = "off";
        $DvtChartDataChangeMarker$$.items = [];
        for($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartLineArea$$.items.length;$DvtChartDataChangeLineArea$$++) {
          $DvtSparkChartAutomation$$ = {}, $DvtSparkChartAutomation$$.color = $DvtChartStyleUtils$$.$getStockVolumeColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$), $DvtSparkChartAutomation$$.x = $DvtChartLineArea$$.items[$DvtChartDataChangeLineArea$$].x, $DvtSparkChartAutomation$$.value = $DvtChartLineArea$$.items[$DvtChartDataChangeLineArea$$].volume, $DvtChartDataChangeMarker$$.items.push($DvtSparkChartAutomation$$)
        }
        $DvtSparkChartDefaults$$.series.push($DvtChartDataChangeMarker$$)
      }
      $DvtChartLineArea$$ = $DvtChartRefObjUtils$$.$getRefObjs$($DvtSparkChartEventManager$$);
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartLineArea$$.length;$DvtChartDataChangeMarker$$++) {
        if($DvtChartRenderer$$ = $DvtChartLineArea$$[$DvtChartDataChangeMarker$$].items) {
          for($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartRenderer$$.length;$DvtChartDataChangeLineArea$$++) {
            if($DvtChartDataChangeBar$$ = $DvtChartRenderer$$[$DvtChartDataChangeLineArea$$]) {
              "object" != typeof $DvtChartDataChangeBar$$ ? $DvtChartRenderer$$[$DvtChartDataChangeLineArea$$] = Number($DvtChartDataChangeBar$$) : (!$DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$) && $DvtChartDataChangeBar$$.x && ($DvtChartDataChangeBar$$.x = Number($DvtChartDataChangeBar$$.x)), $DvtChartDataChangeBar$$.max && ($DvtChartDataChangeBar$$.max = Number($DvtChartDataChangeBar$$.max)), $DvtChartDataChangeBar$$.min && ($DvtChartDataChangeBar$$.min = Number($DvtChartDataChangeBar$$.min)), 
              $DvtChartDataChangeBar$$.value && ($DvtChartDataChangeBar$$.value = Number($DvtChartDataChangeBar$$.value)))
            }
          }
        }
      }
      $DvtSparkChartDefaults$$.groups || ($DvtSparkChartDefaults$$.groups = []);
      $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieUtils$$ - $DvtChartDataChangeLineArea$$;$DvtChartDataChangeMarker$$++) {
        $DvtChartLineArea$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "labelDefaultGroupName", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "DEFAULT_GROUP_NAME", $DvtSparkChartDefaults$$.groups.length + 1), $DvtSparkChartDefaults$$.groups.push($DvtChartLineArea$$)
      }
      $DvtSparkChartEventManager$$.$putToCache$("groupsArray", $JSCompiler_alias_NULL$$);
      $DvtChartDataUtils$$.$_processTimeAxis$($DvtSparkChartEventManager$$);
      $DvtChartLineArea$$ = $DvtSparkChartDefaults$$.sorting;
      $DvtChartLineArea$$ = "on" == $DvtChartLineArea$$ ? "descending" : "ascending" != $DvtChartLineArea$$ && "descending" != $DvtChartLineArea$$ ? "off" : $DvtChartLineArea$$;
      if($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) && "off" != $DvtChartLineArea$$ && 1 == $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartEventManager$$)) {
        for(var $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartDataChangeAbstract$$ = {}, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartPieUtils$$.length;$DvtChartDataChangeLineArea$$++) {
          for($DvtChartDataChangeMarker$$ = $DvtSparkChartAutomation$$ = 0;$DvtChartDataChangeMarker$$ <= $DvtChartPieLabelUtils$$;$DvtChartDataChangeMarker$$++) {
            $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$) && !$DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$) && ($DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeLineArea$$), $DvtSparkChartAutomation$$ += $DvtChartPieLabelInfo$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartPieLabelInfo$$) ? 0 : $DvtChartPieLabelInfo$$)
          }
          $DvtChartDataChangeAbstract$$[$DvtChartPieUtils$$[$DvtChartDataChangeLineArea$$]] = {index:$DvtChartDataChangeLineArea$$, total:$DvtSparkChartAutomation$$, group:$DvtSparkChartDefaults$$.groups[$DvtChartDataChangeLineArea$$]}
        }
        "ascending" == $DvtChartLineArea$$ ? $DvtChartPieUtils$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartDataChangeAbstract$$[$dvt$$2$$].total - $DvtChartDataChangeAbstract$$[$DvtSparkChartEventManager$$].total
        }) : $DvtChartPieUtils$$.sort(function($dvt$$2$$, $DvtSparkChartEventManager$$) {
          return $DvtChartDataChangeAbstract$$[$DvtSparkChartEventManager$$].total - $DvtChartDataChangeAbstract$$[$dvt$$2$$].total
        });
        for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieLabelUtils$$;$DvtChartDataChangeMarker$$++) {
          $DvtChartLineArea$$ = [];
          for($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartPieUtils$$.length;$DvtChartDataChangeLineArea$$++) {
            $DvtChartLineArea$$.push($DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$[$DvtChartPieUtils$$[$DvtChartDataChangeLineArea$$]].index))
          }
          $DvtSparkChartDefaults$$.series[$DvtChartDataChangeMarker$$].items = $DvtChartLineArea$$
        }
        $DvtChartPieLabelUtils$$ = [];
        for($DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartPieUtils$$.length;$DvtChartDataChangeLineArea$$++) {
          $DvtChartPieLabelUtils$$.push($DvtChartDataChangeAbstract$$[$DvtChartPieUtils$$[$DvtChartDataChangeLineArea$$]].group)
        }
        $DvtSparkChartDefaults$$.groups = $DvtChartPieLabelUtils$$;
        $DvtSparkChartEventManager$$.$clearCache$()
      }
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.xAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.yAxis);
      $DvtChartDataUtils$$.$_sanitizeAxis$($DvtSparkChartDefaults$$.y2Axis)
    }
  };
  $DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($dvt$$2$$) {
    $dvt$$2$$.min == $dvt$$2$$.max && ($dvt$$2$$.min = $JSCompiler_alias_NULL$$, $dvt$$2$$.max = $JSCompiler_alias_NULL$$)
  };
  $DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLocaleHelpers$.isoToDateConverter;
    if($DvtSparkChartAutomation$$) {
      try {
        $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$($DvtSparkChartEventManager$$)
      }catch($DvtChartStyleUtils$$) {
        $DvtSparkChartDefaults$$ = $JSCompiler_alias_NULL$$
      }
      $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.getTime())
    }
    $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$ = Date.parse($DvtSparkChartEventManager$$));
    isNaN($DvtSparkChartDefaults$$) && ($DvtSparkChartDefaults$$ = Number($DvtSparkChartEventManager$$));
    return $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);
    if($DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$)) {
      for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartTypeUtils$$;$DvtSparkChartAutomation$$++) {
        for($DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartStyleUtils$$++) {
          var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
          $DvtChartPieLabelInfo$$ != $JSCompiler_alias_NULL$$ && "string" == typeof $DvtChartPieLabelInfo$$.x && $DvtChartPieLabelInfo$$.x != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelInfo$$.x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$.x))
        }
      }
    }else {
      if($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
        for($DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtChartPieLabelUtils$$;$DvtChartStyleUtils$$++) {
          $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartStyleUtils$$), $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.groups[$DvtChartStyleUtils$$] = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$))
        }
        $dvt$$2$$.$putToCache$("groupsArray", $JSCompiler_alias_NULL$$)
      }
    }
    if($DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$)) {
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.xAxis;
      $DvtSparkChartDefaults$$.dataMin != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.dataMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMin));
      $DvtSparkChartDefaults$$.dataMax != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.dataMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.dataMax));
      $DvtSparkChartDefaults$$.min != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.min = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.min));
      $DvtSparkChartDefaults$$.max != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.max = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.max));
      $DvtSparkChartDefaults$$.viewportMin != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.viewportMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMin));
      $DvtSparkChartDefaults$$.viewportMax != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.viewportMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportMax));
      $DvtSparkChartDefaults$$.viewportStartGroup != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.viewportStartGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportStartGroup));
      $DvtSparkChartDefaults$$.viewportEndGroup != $JSCompiler_alias_NULL$$ && ($DvtSparkChartDefaults$$.viewportEndGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.viewportEndGroup));
      $dvt$$2$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$);
      for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        if($DvtChartStyleUtils$$ = $dvt$$2$$[$DvtSparkChartDefaults$$].items) {
          for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartStyleUtils$$.length;$DvtChartPieLabelUtils$$++) {
            $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].x != $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].x = $DvtChartDataUtils$$.$_sanitizeDateTime$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].x))
          }
        }
      }
    }
  };
  $DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().series.length
  };
  $DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = 0, $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtSparkChartEventManager$$++
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : String($DvtSparkChartEventManager$$) : $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name) ? $DvtSparkChartDefaults$$.name : $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      if($DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartAutomation$$
      }
    }
    return-1
  };
  $DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if($DvtSparkChartEventManager$$.$_optionsCache$.hasLargeSeriesCount) {
      return $DvtSparkChartDefaults$$
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtSparkChartEventManager$$.$SeriesStyleArray$, $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(isNaN($DvtSparkChartEventManager$$) || $DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    if($DvtSparkChartDefaults$$.series && $DvtSparkChartDefaults$$.series.length > $DvtSparkChartEventManager$$) {
      return $DvtSparkChartDefaults$$.series[$DvtSparkChartEventManager$$]
    }
  };
  $DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return isNaN($DvtSparkChartDefaults$$) || $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ || 0 > $DvtSparkChartDefaults$$ ? $JSCompiler_alias_NULL$$ : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$.items && $dvt$$2$$.items.length > $DvtSparkChartDefaults$$ ? $dvt$$2$$.items[$DvtSparkChartDefaults$$] : $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($dvt$$2$$) {
    return $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$).length
  };
  $DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.id ? $DvtSparkChartDefaults$$.id : $DvtSparkChartDefaults$$.name || "" == $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : $DvtSparkChartDefaults$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroups$($DvtSparkChartEventManager$$), $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartStyleUtils$$++) {
      if($DvtSparkChartDefaults$$ instanceof Array && $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$] instanceof Array ? $dvt$$2$$.$ArrayUtils$.$equals$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$]) : $DvtSparkChartDefaults$$ == $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$]) {
        return $DvtChartStyleUtils$$
      }
    }
    return-1
  };
  $DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(0 <= $DvtSparkChartEventManager$$ && $DvtSparkChartEventManager$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getGroupsArray$($dvt$$2$$)[$DvtSparkChartEventManager$$];
      if($DvtSparkChartDefaults$$) {
        return $DvtSparkChartDefaults$$.name ? $DvtSparkChartDefaults$$.name : $DvtSparkChartDefaults$$.id != $JSCompiler_alias_NULL$$ ? "" : $DvtSparkChartDefaults$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$))
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getFromCache$("groupsArray");
    if(!$DvtSparkChartDefaults$$) {
      $DvtSparkChartDefaults$$ = [];
      $DvtSparkChartEventManager$$.groups && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartEventManager$$.groups, $DvtSparkChartDefaults$$));
      for($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartEventManager$$++) {
        1 == $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id.length && ($DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].id[0], $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name = $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$].name[0])
      }
      $dvt$$2$$.$putToCache$("groupsArray", $DvtSparkChartDefaults$$)
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if($dvt$$2$$) {
      for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$], $DvtChartStyleUtils$$ = $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$;
        $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.id ? $DvtSparkChartAutomation$$.id : $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.name ? $DvtSparkChartAutomation$$.name : $DvtSparkChartAutomation$$);
        "object" == typeof $DvtChartStyleUtils$$ && ($DvtChartStyleUtils$$ = $JSCompiler_alias_NULL$$);
        "object" == typeof $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ = $JSCompiler_alias_NULL$$);
        if($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.groups) {
          ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$_getNestedGroups$($DvtSparkChartAutomation$$.groups, [])) || ($DvtSparkChartAutomation$$ = [{id:[], name:[]}]);
          for(var $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTypeUtils$$++) {
            $DvtSparkChartAutomation$$[$DvtChartTypeUtils$$].id.unshift($DvtChartStyleUtils$$), $DvtSparkChartAutomation$$[$DvtChartTypeUtils$$].name.unshift($DvtChartPieLabelUtils$$)
          }
          $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtSparkChartAutomation$$)
        }else {
          $DvtSparkChartEventManager$$.push({id:[$DvtChartStyleUtils$$], name:[$DvtChartPieLabelUtils$$]})
        }
      }
      return $DvtSparkChartEventManager$$
    }
  };
  $DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getGroupsArray$($DvtSparkChartEventManager$$);
    for(var $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartStyleUtils$$ && $DvtChartStyleUtils$$.id && ($DvtChartStyleUtils$$ = $dvt$$2$$.$ArrayUtils$.isArray($DvtChartStyleUtils$$.id) ? $DvtChartStyleUtils$$.id.length : 1, $DvtSparkChartDefaults$$ = Math.max($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$))
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getFromCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartAutomation$$ !== $JSCompiler_alias_VOID$$) {
      return $DvtSparkChartAutomation$$
    }
    var $DvtSparkChartAutomation$$ = $JSCompiler_alias_NULL$$, $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartStyleUtils$$ != $JSCompiler_alias_NULL$$ && ("object" != typeof $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && $DvtChartStyleUtils$$.close != $JSCompiler_alias_NULL$$ ? $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.close : $DvtChartStyleUtils$$.value != $JSCompiler_alias_NULL$$ ? $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.value : $DvtChartStyleUtils$$.y != $JSCompiler_alias_NULL$$ && ($DvtSparkChartAutomation$$ = 
    $DvtChartStyleUtils$$.y));
    $dvt$$2$$.$putToCachedMap2D$("value", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$
  };
  $DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$ ? "cumValueH" : "cumValue", $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getFromCachedMap2D$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtChartPieLabelInfo$$ !== $JSCompiler_alias_VOID$$) {
      return $DvtChartPieLabelInfo$$
    }
    if($DvtChartTypeUtils$$.$isStacked$($dvt$$2$$)) {
      for(var $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartMarkerUtils$$ = "bar" == $DvtChartPieRenderUtils$$ ? 0 > $DvtChartPieLabelInfo$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, 
      $DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = 0, $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = 0;$DvtChartDataChangeRangeMarker$$ <= $DvtSparkChartEventManager$$;$DvtChartDataChangeRangeMarker$$++) {
        if(($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartDefaults$$)) && $DvtChartPieRenderUtils$$ == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$) && $DvtChartDataChangeFunnelSlice$$ == $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$) && $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$) == $DvtChartPieUtils$$) {
          var $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeLineArea$$ = "bar" == $DvtChartPieRenderUtils$$ ? 0 > $DvtChartDataChangeMarker$$ : $DvtChartDataUtils$$.$isSeriesNegative$($dvt$$2$$, $DvtChartDataChangeRangeMarker$$);
          if($DvtChartMarkerUtils$$ && $DvtChartDataChangeLineArea$$ || !$DvtChartMarkerUtils$$ && !$DvtChartDataChangeLineArea$$) {
            $DvtChartPieLabelInfo$$ += $DvtChartDataChangeMarker$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartDataChangeMarker$$) ? 0 : $DvtChartDataChangeMarker$$
          }
        }
      }
    }else {
      $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }
    $dvt$$2$$.$putToCachedMap2D$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$);
    return $DvtChartPieLabelInfo$$
  };
  $DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$.low == $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$.close != $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.open != $JSCompiler_alias_NULL$$ ? Math.min($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.low : 
    $DvtSparkChartDefaults$$.low != $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$.close == $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.low : $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$.high == $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.open != $JSCompiler_alias_NULL$$ ? Math.max($DvtSparkChartDefaults$$.close, $DvtSparkChartDefaults$$.open) : $DvtSparkChartDefaults$$.close : $DvtSparkChartDefaults$$.high : $DvtSparkChartDefaults$$.high != $JSCompiler_alias_NULL$$ && 
    $DvtSparkChartDefaults$$.close == $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.high : $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if($DvtChartAxisUtils$$.$hasGroupAxis$($dvt$$2$$)) {
      return $DvtSparkChartDefaults$$
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.x;
    return $DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$ : $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0);
    return $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ || "object" != typeof $DvtSparkChartDefaults$$ ? $JSCompiler_alias_NULL$$ : $DvtSparkChartDefaults$$.targetValue
  };
  $DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $dvt$$2$$ == $JSCompiler_alias_NULL$$ || "object" != typeof $dvt$$2$$ ? $DvtSparkChartAutomation$$ : $dvt$$2$$.z != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.z : $DvtSparkChartAutomation$$
  };
  $DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? $dvt$$2$$.open <= $dvt$$2$$.close : $JSCompiler_alias_TRUE$$
  };
  $DvtChartDataUtils$$.$getSeriesCategories$ = function $$DvtChartDataUtils$$$$getSeriesCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.categories ? $DvtSparkChartDefaults$$.categories : $DvtSparkChartAutomation$$ ? [$DvtSparkChartAutomation$$] : []
  };
  $DvtChartDataUtils$$.$getDataItemCategories$ = function $$DvtChartDataUtils$$$$getDataItemCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.categories ? $DvtSparkChartDefaults$$.categories : $DvtChartDataUtils$$.$getSeriesCategories$($dvt$$2$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(isNaN($DvtSparkChartEventManager$$) || $DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, $JSCompiler_alias_TRUE$$);
    return!($DvtSparkChartDefaults$$.min != $JSCompiler_alias_NULL$$ && $DvtSparkChartEventManager$$ < $DvtSparkChartDefaults$$.min) && !($DvtSparkChartDefaults$$.max != $JSCompiler_alias_NULL$$ && $DvtSparkChartEventManager$$ > $DvtSparkChartDefaults$$.max)
  };
  $DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getFromCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ && ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$), $dvt$$2$$.$putToCachedMap2D$("isXInViewport", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$));
    return $DvtSparkChartAutomation$$
  };
  $DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartStyleUtils$$ = $dvt$$2$$.$getFromCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$ == $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1), $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1), $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartAutomation$$) || $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtChartStyleUtils$$) || 
    $DvtChartDataUtils$$.$isXValInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$), $dvt$$2$$.$putToCachedMap2D$("isRefObjInViewport", $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$));
    return $DvtChartStyleUtils$$
  };
  $DvtChartDataUtils$$.$isBLACItemInViewport$ = function $$DvtChartDataUtils$$$$isBLACItemInViewport$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return!$DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ - 1) || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + 1)
  };
  $DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, $JSCompiler_alias_TRUE$$), $DvtSparkChartDefaults$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($dvt$$2$$), $DvtSparkChartEventManager$$ = ($DvtSparkChartEventManager$$.max - $DvtSparkChartEventManager$$.min) / ($DvtSparkChartDefaults$$.max - $DvtSparkChartDefaults$$.min);
    return isNaN($DvtSparkChartEventManager$$) ? 1 : $DvtSparkChartEventManager$$ * $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$)
  };
  $DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    $DvtSparkChartEventManager$$ && ($DvtSparkChartAutomation$$ = $dvt$$2$$.$Math$.$log10$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Math$.$log10$($DvtChartPieLabelUtils$$));
    $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$ + ($DvtChartPieLabelUtils$$ - $DvtSparkChartAutomation$$) * ($DvtChartTypeUtils$$ - $DvtSparkChartDefaults$$) / ($DvtChartStyleUtils$$ - $DvtSparkChartDefaults$$);
    return $DvtSparkChartEventManager$$ ? Math.pow(10, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items;
    if(!$DvtSparkChartDefaults$$) {
      return{min:$JSCompiler_alias_NULL$$, max:$JSCompiler_alias_NULL$$}
    }
    for(var $DvtSparkChartAutomation$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($dvt$$2$$, $JSCompiler_alias_TRUE$$), $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.min, $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.max, $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) ? "y2" : "y"), 
    $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtSparkChartDefaults$$.length;$DvtChartDataChangeLineArea$$++) {
      if($DvtSparkChartAutomation$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$)) {
        $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartTypeUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartTypeUtils$$ > $DvtChartMarkerUtils$$ && $DvtChartTypeUtils$$ < $DvtChartPieRenderUtils$$) && 
        ($DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelInfo$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartTypeUtils$$)), $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$ > $DvtChartMarkerUtils$$ && $DvtChartPieLabelUtils$$ < $DvtChartPieRenderUtils$$) && ($DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($DvtChartPieLabelInfo$$, 
        $DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelUtils$$))), $DvtChartMarkerUtils$$ = $DvtChartPieRenderUtils$$, $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$
      }
    }
    return{min:$DvtChartDataChangeRangeMarker$$, max:$DvtChartDataChangeMarker$$}
  };
  $DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + ($DvtSparkChartDefaults$$ ? "MinMaxDO" : "MinMax"), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getFromCache$($DvtSparkChartAutomation$$);
    if($DvtChartPieLabelUtils$$) {
      return $DvtChartPieLabelUtils$$
    }
    var $DvtChartPieLabelUtils$$ = !$DvtSparkChartDefaults$$ && "z" != $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$isLog$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = "y2" == $DvtSparkChartEventManager$$;
    $DvtChartPieLabelInfo$$ && ($DvtSparkChartEventManager$$ = "y");
    for(var $DvtChartPieRenderUtils$$ = "y" == $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$ = !$DvtSparkChartDefaults$$ && $DvtChartPieRenderUtils$$ && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$), $DvtChartPieUtils$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) || "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$), $DvtChartDataChangeRangeMarker$$ = -Infinity, $DvtChartDataChangeMarker$$ = Infinity, $DvtChartDataChangeLineArea$$ = 
    $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartLineArea$$ = 0;$DvtChartLineArea$$ < $DvtChartDataChangeLineArea$$;$DvtChartLineArea$$++) {
      var $DvtChartRenderer$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtChartLineArea$$), $DvtChartDataChangeBar$$ = $DvtChartPieRenderUtils$$ && ($DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtChartLineArea$$) || "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartLineArea$$));
      if($DvtChartPieUtils$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartLineArea$$)) {
        var $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartLineArea$$);
        if(!($DvtChartPieRenderUtils$$ && $DvtChartPieLabelInfo$$ != $DvtChartDataChangeAbstract$$)) {
          var $DvtChartCoord$$ = $DvtChartRenderer$$.items;
          if($DvtChartCoord$$) {
            for(var $DvtChartAxisRenderer$$ = 0;$DvtChartAxisRenderer$$ < $DvtChartCoord$$.length;$DvtChartAxisRenderer$$++) {
              if($DvtChartPieUtils$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartLineArea$$, $DvtChartAxisRenderer$$)) {
                if("object" != typeof $DvtChartCoord$$[$DvtChartAxisRenderer$$] && ($DvtChartCoord$$[$DvtChartAxisRenderer$$] = {y:$DvtChartCoord$$[$DvtChartAxisRenderer$$]}), $DvtChartRenderer$$ = $DvtChartCoord$$[$DvtChartAxisRenderer$$], $DvtChartDataChangeAbstract$$ = $JSCompiler_alias_NULL$$, $DvtChartPieRenderUtils$$ ? $DvtChartDataChangeBar$$ || ($DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtChartLineArea$$, $DvtChartAxisRenderer$$, $DvtChartPieUtils$$)) : 
                "x" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? ($DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtChartAxisRenderer$$), $DvtChartRenderer$$ != $JSCompiler_alias_NULL$$ && ($DvtChartRenderer$$.x = $DvtChartDataChangeAbstract$$)) : $DvtChartRenderer$$ != $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeAbstract$$ = $DvtChartRenderer$$[$DvtSparkChartEventManager$$]), 
                !("z" == $DvtSparkChartEventManager$$ && 0 >= $DvtChartDataChangeAbstract$$) && (!$DvtChartDataChangeFunnelSlice$$ || $DvtChartDataUtils$$.$isXInViewport$($dvt$$2$$, $DvtChartLineArea$$, $DvtChartAxisRenderer$$))) {
                  if(!$DvtChartDataChangeBar$$ && $DvtChartDataChangeAbstract$$ != $JSCompiler_alias_NULL$$ && "number" == typeof $DvtChartDataChangeAbstract$$) {
                    var $DvtChartDataChange$$ = 0;
                    $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && (!$DvtSparkChartDefaults$$ && "z" != $DvtSparkChartEventManager$$) && ($DvtChartDataChange$$ = $DvtChartMarkerUtils$$.$getBubbleAxisRadius$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartRenderer$$.markerSize));
                    $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartPieLabelUtils$$ ? $DvtChartDataChangeAbstract$$ * Math.pow(10, $DvtChartDataChange$$) : $DvtChartDataChangeAbstract$$ + $DvtChartDataChange$$);
                    $DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartPieLabelUtils$$ ? $DvtChartDataChangeAbstract$$ / Math.pow(10, $DvtChartDataChange$$) : $DvtChartDataChangeAbstract$$ - $DvtChartDataChange$$)
                  }
                  $DvtChartDataChangeBar$$ && ($DvtChartRenderer$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtChartLineArea$$, $DvtChartAxisRenderer$$), $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtChartLineArea$$, $DvtChartAxisRenderer$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartRenderer$$, $DvtChartDataChangeAbstract$$), $DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartRenderer$$, 
                  $DvtChartDataChangeAbstract$$))
                }
              }
            }
            $DvtChartDataChangeBar$$ = $JSCompiler_alias_NULL$$;
            "x" == $DvtSparkChartEventManager$$ ? $DvtChartDataChangeBar$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x") : $DvtChartPieLabelInfo$$ ? $DvtChartDataChangeBar$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2") : $DvtChartPieRenderUtils$$ && ($DvtChartDataChangeBar$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
            if($DvtChartDataChangeBar$$ != $JSCompiler_alias_NULL$$) {
              for($DvtChartCoord$$ = 0;$DvtChartCoord$$ < $DvtChartDataChangeBar$$.length;$DvtChartCoord$$++) {
                if($DvtChartDataChange$$ = $DvtChartDataChangeBar$$[$DvtChartCoord$$], $DvtChartAxisRenderer$$ = $DvtChartDataChange$$.items, $DvtChartRenderer$$ = "withRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($dvt$$2$$) && "hidden" == $DvtChartDataChange$$.visibility, !$DvtChartRenderer$$) {
                  if($DvtChartAxisRenderer$$ && !$DvtChartRenderer$$) {
                    for($DvtChartDataChange$$ = 0;$DvtChartDataChange$$ < $DvtChartAxisRenderer$$.length;$DvtChartDataChange$$++) {
                      if(!($DvtChartAxisRenderer$$[$DvtChartDataChange$$] == $JSCompiler_alias_NULL$$ || $DvtChartDataChangeFunnelSlice$$ && !$DvtChartDataUtils$$.$isRefObjInViewport$($dvt$$2$$, $DvtChartAxisRenderer$$, $DvtChartDataChange$$))) {
                        var $DvtChartDataChangeAbstract$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartAxisRenderer$$[$DvtChartDataChange$$]), $DvtChartRenderer$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartAxisRenderer$$[$DvtChartDataChange$$]), $DvtChartCandlestick$$ = isNaN($DvtChartAxisRenderer$$[$DvtChartDataChange$$]) ? $DvtChartAxisRenderer$$[$DvtChartDataChange$$].value : $DvtChartAxisRenderer$$[$DvtChartDataChange$$];
                        $DvtChartDataChangeAbstract$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartDataChangeAbstract$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeAbstract$$));
                        $DvtChartRenderer$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartRenderer$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartRenderer$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartRenderer$$));
                        $DvtChartCandlestick$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartCandlestick$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartCandlestick$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartCandlestick$$))
                      }
                    }
                  }else {
                    $DvtChartDataChangeAbstract$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartDataChange$$), $DvtChartRenderer$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartDataChange$$), $DvtChartCandlestick$$ = $DvtChartDataChange$$.value, $DvtChartDataChangeAbstract$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartDataChangeAbstract$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, 
                    $DvtChartDataChangeAbstract$$)), $DvtChartRenderer$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartRenderer$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartRenderer$$), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartRenderer$$)), $DvtChartCandlestick$$ != $JSCompiler_alias_NULL$$ && isFinite($DvtChartCandlestick$$) && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartCandlestick$$), 
                    $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartCandlestick$$))
                  }
                }
              }
            }
            $DvtChartDataChangeFunnelSlice$$ && ($DvtChartRenderer$$ = $DvtChartDataUtils$$.$_getViewportEdgeYValues$($dvt$$2$$, $DvtChartLineArea$$), $DvtChartRenderer$$.min != $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, $DvtChartRenderer$$.min), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartRenderer$$.min)), $DvtChartRenderer$$.max != $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeMarker$$ = Math.min($DvtChartDataChangeMarker$$, 
            $DvtChartRenderer$$.max), $DvtChartDataChangeRangeMarker$$ = Math.max($DvtChartDataChangeRangeMarker$$, $DvtChartRenderer$$.max)))
          }
        }
      }
    }
    $DvtChartPieLabelUtils$$ = {min:$DvtChartDataChangeMarker$$, max:$DvtChartDataChangeRangeMarker$$};
    $dvt$$2$$.$putToCache$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && "on" == $DvtSparkChartDefaults$$.assignedToY2 && $DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().selection;
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = []);
    $dvt$$2$$ = $dvt$$2$$.$getChartObjPeers$();
    for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$;
      "string" == typeof $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] ? ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] = {id:$DvtSparkChartAutomation$$}) : $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].id;
      if($DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && (!$DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].series || !$DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].group)) {
        for(var $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $dvt$$2$$.length;$DvtChartStyleUtils$$++) {
          var $DvtChartPieLabelUtils$$ = $dvt$$2$$[$DvtChartStyleUtils$$];
          if($DvtSparkChartAutomation$$ == $DvtChartPieLabelUtils$$.$_dataItemId$) {
            $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].series = $DvtChartPieLabelUtils$$.$getSeries$();
            $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].group = $DvtChartPieLabelUtils$$.$getGroup$();
            break
          }
        }
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if($dvt$$2$$ = $dvt$$2$$.$getSelectionHandler$()) {
      $dvt$$2$$ = $dvt$$2$$.$getSelectedIds$();
      for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
        $DvtSparkChartEventManager$$.push({series:$DvtSparkChartAutomation$$.$getSeries$(), group:$DvtSparkChartAutomation$$.$getGroup$(), id:$DvtSparkChartAutomation$$.getId()})
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($dvt$$2$$) {
    return($dvt$$2$$ = $dvt$$2$$.$_optionsCache$._hasVolume) ? $dvt$$2$$ : $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$).id;
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartDefaults$$);
    ($dvt$$2$$ = $dvt$$2$$.$getOptions$().selection) || ($dvt$$2$$ = []);
    for(var $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $dvt$$2$$.length;$DvtChartStyleUtils$$++) {
      if($DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && ($DvtSparkChartAutomation$$ == $dvt$$2$$[$DvtChartStyleUtils$$] || $DvtSparkChartAutomation$$ == $dvt$$2$$[$DvtChartStyleUtils$$].id) || $DvtSparkChartEventManager$$ == $dvt$$2$$[$DvtChartStyleUtils$$].series && $DvtSparkChartDefaults$$ == $dvt$$2$$[$DvtChartStyleUtils$$].group) {
        return $JSCompiler_alias_TRUE$$
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDefaultDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    var $DvtChartTypeUtils$$ = $dvt$$2$$.$getOptions$().dataLabel;
    $DvtChartTypeUtils$$ && !$DvtChartStyleUtils$$ && ($dvt$$2$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $dvt$$2$$.label = $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$($dvt$$2$$));
    return $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : $DvtSparkChartAutomation$$
  };
  $DvtChartDataUtils$$.$getDefaultDataLabel$ = function $$DvtChartDataUtils$$$$getDefaultDataLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    if($DvtChartStyleUtils$$) {
      $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }else {
      $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      if(!$DvtSparkChartDefaults$$) {
        return $JSCompiler_alias_NULL$$
      }
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.label;
      "low" == $DvtSparkChartAutomation$$ ? $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[0] : $DvtSparkChartDefaults$$ : "high" == $DvtSparkChartAutomation$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ instanceof Array ? $DvtSparkChartDefaults$$[1] : $JSCompiler_alias_NULL$$)
    }
    if($DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$) {
      if("number" == typeof $DvtSparkChartDefaults$$) {
        var $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$;
        if($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && $dvt$$2$$.$y2Axis$ ? $dvt$$2$$.$y2Axis$ : $dvt$$2$$.$yAxis$) {
          $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartPieLabelUtils$$ = $DvtChartPieLabelInfo$$.$GlobalMin$, $DvtChartTypeUtils$$ = $DvtChartPieLabelInfo$$.$GlobalMax$, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelInfo$$.$getMajorIncrement$()
        }
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "label");
        return $DvtChartTooltipUtils$$.$formatValue$($dvt$$2$$.$getCtx$(), $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$)
      }
      return $DvtSparkChartDefaults$$
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.stackCategory;
    if($DvtSparkChartDefaults$$) {
      if($DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$] != $JSCompiler_alias_VOID$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$]
      }
    }else {
      $dvt$$2$$.$_optionsCache$.stackCategory = {}
    }
    $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) ? $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).stackCategory || $JSCompiler_alias_NULL$$ : $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $dvt$$2$$.$_optionsCache$.stackCategory[$DvtSparkChartEventManager$$] = $DvtSparkChartDefaults$$
  };
  $DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartPieLabelUtils$$ = [], $DvtChartTypeUtils$$ = {}, $DvtChartPieLabelInfo$$ = {}, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$getFromCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtChartPieRenderUtils$$) {
      return $DvtChartPieRenderUtils$$
    }
    for(var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieRenderUtils$$;$DvtChartDataChangeFunnelSlice$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) || $DvtSparkChartDefaults$$) {
        if($DvtSparkChartEventManager$$) {
          var $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$);
          "candlestick" == $DvtChartMarkerUtils$$ && ($DvtChartMarkerUtils$$ = "bar");
          if($DvtSparkChartEventManager$$ != $DvtChartMarkerUtils$$) {
            continue
          }
        }
        $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$);
        $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) ? $DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$] || ($DvtChartPieLabelUtils$$.push($DvtChartMarkerUtils$$), $DvtChartPieLabelInfo$$[$DvtChartMarkerUtils$$] = $JSCompiler_alias_TRUE$$) : $DvtChartTypeUtils$$[$DvtChartMarkerUtils$$] || ($DvtSparkChartAutomation$$.push($DvtChartMarkerUtils$$), $DvtChartTypeUtils$$[$DvtChartMarkerUtils$$] = $JSCompiler_alias_TRUE$$)
      }
    }
    $DvtChartPieRenderUtils$$ = {y:$DvtSparkChartAutomation$$, y2:$DvtChartPieLabelUtils$$};
    $dvt$$2$$.$putToCachedMap2D$("stackCategories", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieRenderUtils$$);
    return $DvtChartPieRenderUtils$$
  };
  $DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartPieLabelUtils$$ = 0, $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartTypeUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartTypeUtils$$);
      if(!("bar" != $DvtChartPieLabelInfo$$ && "candlestick" != $DvtChartPieLabelInfo$$ || $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartTypeUtils$$) != $DvtSparkChartEventManager$$ || !$DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartTypeUtils$$))) {
        if($DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartTypeUtils$$), $DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$ || !$DvtSparkChartAutomation$$ && !$DvtChartPieLabelInfo$$) {
          $DvtChartPieLabelUtils$$ = Math.max($DvtChartPieLabelUtils$$, $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$, 1))
        }
      }
    }
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieUtils$$ = 
    $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeLineArea$$ = $DvtChartMarkerUtils$$.$getUnboundedCoordAt$($DvtChartDataChangeMarker$$), $DvtChartLineArea$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), 
    $DvtChartRenderer$$ = $DvtChartLineArea$$ ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartMarkerUtils$$ = $DvtChartRenderer$$.$getBaselineCoord$(), $DvtChartDataChangeBar$$;
    if($DvtChartDataChangeRangeMarker$$) {
      var $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartDataChangeBar$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if($DvtChartDataChangeAbstract$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartDataChangeAbstract$$) || $DvtChartDataChangeBar$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartDataChangeBar$$)) {
        return $JSCompiler_alias_NULL$$
      }
      $DvtChartDataChangeMarker$$ = $DvtChartRenderer$$.$getBoundedCoordAt$($DvtChartDataChangeAbstract$$);
      $DvtChartDataChangeBar$$ = $DvtChartRenderer$$.$getBoundedCoordAt$($DvtChartDataChangeBar$$)
    }else {
      $DvtChartDataChangeBar$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      if($DvtChartDataChangeBar$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartDataChangeBar$$)) {
        return $JSCompiler_alias_NULL$$
      }
      $DvtChartDataChangeMarker$$ = $DvtChartRenderer$$.$getBoundedCoordAt$($DvtChartDataChangeAbstract$$);
      $DvtChartDataChangeBar$$ = $DvtChartPieRenderUtils$$ ? $DvtChartRenderer$$.$getBoundedCoordAt$($DvtChartDataChangeAbstract$$ - $DvtChartDataChangeBar$$) : $DvtChartMarkerUtils$$
    }
    if($DvtChartDataChangeMarker$$ == $DvtChartDataChangeBar$$ && $DvtChartRenderer$$.$getCoordAt$($DvtChartDataChangeAbstract$$) == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtChartRenderer$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$ ? $DvtChartStyleUtils$$.$getBarStackWidth$($DvtSparkChartEventManager$$, $DvtChartRenderer$$, $DvtSparkChartAutomation$$, $DvtChartLineArea$$) : $DvtSparkChartDefaults$$;
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $dvt$$2$$.$Agent$.$isPlatformGecko$() && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$ / (1 - $DvtChartStyleUtils$$.$getBarGapRatio$($DvtSparkChartEventManager$$)), 1 < $DvtSparkChartDefaults$$ && 2 > $DvtChartPieRenderUtils$$ - $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$--, $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$));
    $DvtChartPieUtils$$ = $DvtChartPieUtils$$[$DvtChartLineArea$$ ? "y2" : "y"][$DvtChartRenderer$$] + 0.5 * ($DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$);
    $DvtChartPieLabelInfo$$ = $DvtChartDataChangeFunnelSlice$$ && !$DvtChartPieLabelInfo$$ ? $DvtChartDataChangeLineArea$$ - $DvtChartPieUtils$$ - $DvtSparkChartDefaults$$ : $DvtChartDataChangeLineArea$$ + $DvtChartPieUtils$$;
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$ + $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$(($DvtChartPieLabelInfo$$ + $DvtChartDataChangeFunnelSlice$$) / 2, $DvtChartDataChangeRangeMarker$$ ? ($DvtChartDataChangeMarker$$ + $DvtChartDataChangeBar$$) / 2 : $DvtChartDataChangeMarker$$), $DvtChartPieLabelUtils$$);
    return{$x1$:$DvtChartPieLabelInfo$$, $x2$:$DvtChartDataChangeFunnelSlice$$, $axisCoord$:$DvtChartMarkerUtils$$, $baseCoord$:$DvtChartDataChangeBar$$, $yCoord$:$DvtChartDataChangeMarker$$, $dataPos$:$DvtSparkChartEventManager$$, $barWidth$:$DvtSparkChartDefaults$$}
  };
  $DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeRangeMarker$$ = 
    $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
      if($DvtChartDataChangeFunnelSlice$$ && $DvtChartPieUtils$$ < $DvtChartPieRenderUtils$$.$getInfo$().$MinValue$) {
        return $JSCompiler_alias_NULL$$
      }
      $DvtSparkChartDefaults$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartDataChangeRangeMarker$$) : $DvtChartPieLabelInfo$$.$getUnboundedCoordAt$($DvtChartDataChangeRangeMarker$$);
      $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$getUnboundedCoordAt$($DvtChartPieUtils$$)
    }else {
      $DvtChartMarkerUtils$$ ? ($DvtChartPieUtils$$ = $DvtChartPieRenderUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtChartPieRenderUtils$$ = $DvtChartPieRenderUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartDefaults$$ = $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 
      $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)), $DvtSparkChartAutomation$$ = ($DvtChartPieUtils$$ + $DvtChartPieRenderUtils$$) / 2) : ($DvtSparkChartDefaults$$ = $DvtChartPieLabelInfo$$.$getCoordAt$($DvtChartDataChangeRangeMarker$$), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$getCoordAt$($DvtChartPieUtils$$))
    }
    return $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$ || $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$)
  };
  $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$ = function $$DvtChartDataUtils$$$$getScatterBubbleMarkerPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$yAxis$, $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.$getCoordAt$($DvtChartTypeUtils$$);
    $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.$getCoordAt$($DvtSparkChartEventManager$$);
    return $DvtChartStyleUtils$$ == $JSCompiler_alias_NULL$$ || $DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : new $dvt$$2$$.$Point$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$)
  };
  $DvtChartDataUtils$$.$isSeriesNegative$ = function $$DvtChartDataUtils$$$$isSeriesNegative$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
      if(0 < $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$)) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtChartDataUtils$$.$getDataContext$ = function $$DvtChartDataUtils$$$$getDataContext$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_rawOptions$, $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$, $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), 
    $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    return{id:$DvtChartPieRenderUtils$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartPieLabelUtils$$.id, series:$DvtChartPieRenderUtils$$ ? $DvtChartDataChangeFunnelSlice$$ : $DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), group:$DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), data:$DvtChartPieRenderUtils$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPieLabelInfo$$.series[$DvtSparkChartDefaults$$].items[$DvtSparkChartAutomation$$], 
    seriesData:$DvtChartPieRenderUtils$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPieLabelInfo$$.series[$DvtSparkChartDefaults$$], groupData:$DvtChartDataUtils$$.$_getGroupsDataArray$($DvtSparkChartEventManager$$)[$DvtSparkChartAutomation$$], component:$DvtChartMarkerUtils$$._widgetConstructor, value:$DvtChartPieRenderUtils$$ ? $DvtChartPieUtils$$.$getOtherValue$($DvtSparkChartEventManager$$) : $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), 
    targetValue:$DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), x:$DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), y:$DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), z:$DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), low:$DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), high:$DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), color:$DvtChartPieRenderUtils$$ ? $DvtChartMarkerUtils$$.styleDefaults.otherColor : $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), open:$DvtChartPieRenderUtils$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPieLabelUtils$$.open, close:$DvtChartPieRenderUtils$$ ? 
    $JSCompiler_alias_NULL$$ : $DvtChartPieLabelUtils$$.close, volume:$DvtChartPieRenderUtils$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPieLabelUtils$$.volume, totalValue:$DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $DvtSparkChartEventManager$$.$pieChart$.$getTotalValue$() : $JSCompiler_alias_NULL$$}
  };
  $DvtChartDataUtils$$.$_getGroupsDataArray$ = function $$DvtChartDataUtils$$$$_getGroupsDataArray$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getFromCache$("groupsDataArray");
    $DvtSparkChartEventManager$$ || ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($dvt$$2$$.$_rawOptions$.groups), $dvt$$2$$.$putToCache$("groupsDataArray", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataUtils$$.$_getNestedGroupsData$ = function $$DvtChartDataUtils$$$$_getNestedGroupsData$$($dvt$$2$$) {
    if(!$dvt$$2$$) {
      return[]
    }
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $dvt$$2$$.length;$DvtSparkChartDefaults$$++) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$[$DvtSparkChartDefaults$$];
      if($DvtSparkChartAutomation$$.groups) {
        for(var $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($DvtSparkChartAutomation$$.groups), $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartStyleUtils$$.length;$DvtChartPieLabelUtils$$++) {
          $DvtChartStyleUtils$$[$DvtChartPieLabelUtils$$].unshift($DvtSparkChartAutomation$$)
        }
        $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.concat($DvtChartStyleUtils$$)
      }else {
        $DvtSparkChartEventManager$$.push([$DvtSparkChartAutomation$$])
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartDataUtils$$.$isOutermostBar$ = function $$DvtChartDataUtils$$$$isOutermostBar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for($DvtSparkChartEventManager$$ += 1;$DvtSparkChartEventManager$$ < $DvtChartTypeUtils$$;$DvtSparkChartEventManager$$++) {
      if($DvtSparkChartAutomation$$ == $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartPieLabelUtils$$ == 0 > $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  var $DvtChartEventUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartEventUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hideAndShowBehavior
  };
  $DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().hoverBehavior
  };
  $DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getRefObj$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$.visibility = $DvtSparkChartAutomation$$);
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$ = $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$);
    "hidden" == $DvtSparkChartAutomation$$ && 0 > $DvtChartTypeUtils$$ ? $DvtChartPieLabelUtils$$.push($DvtSparkChartDefaults$$) : "visible" == $DvtSparkChartAutomation$$ && 0 <= $DvtChartTypeUtils$$ && $DvtChartPieLabelUtils$$.splice($DvtChartTypeUtils$$, 1);
    if(($DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getOptions$()) && $DvtSparkChartEventManager$$.legend && $DvtSparkChartEventManager$$.legend.sections) {
      for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.legend.sections.length;$DvtChartPieLabelUtils$$++) {
        if(($DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.legend.sections[$DvtChartPieLabelUtils$$]) && $DvtChartTypeUtils$$.items) {
          for(var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartTypeUtils$$.items.length;$DvtChartPieLabelInfo$$++) {
            $DvtChartTypeUtils$$.items[$DvtChartPieLabelInfo$$].id == $DvtSparkChartDefaults$$ && ($DvtChartTypeUtils$$.items[$DvtChartPieLabelInfo$$].categoryVisibility = $DvtSparkChartAutomation$$)
          }
        }
      }
      return $JSCompiler_alias_TRUE$$
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : "off" != $dvt$$2$$.$getOptions$().zoomAndScroll
  };
  $DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return"live" == $dvt$$2$$ || "delayed" == $dvt$$2$$
  };
  $DvtChartEventUtils$$.$getZoomDirection$ = function $$DvtChartEventUtils$$$$getZoomDirection$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? $dvt$$2$$.$getOptions$().zoomDirection : "auto"
  };
  $DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return"live" == $dvt$$2$$ || "liveScrollOnly" == $dvt$$2$$
  };
  $DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isScrollSupported$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().zoomAndScroll;
    return"delayed" == $dvt$$2$$ || "delayedScrollOnly" == $dvt$$2$$
  };
  $DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartStyleUtils$$.$getSeries$() == $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($DvtChartStyleUtils$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.concat($DvtChartStyleUtils$$)) : $DvtSparkChartDefaults$$.push($DvtChartStyleUtils$$)
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($dvt$$2$$) {
    $dvt$$2$$.x != $JSCompiler_alias_NULL$$ && ($dvt$$2$$.x -= 1);
    $dvt$$2$$.$w$ != $JSCompiler_alias_NULL$$ && ($dvt$$2$$.$w$ += 2);
    $dvt$$2$$.y != $JSCompiler_alias_NULL$$ && ($dvt$$2$$.y -= 1);
    $dvt$$2$$.$h$ != $JSCompiler_alias_NULL$$ && ($dvt$$2$$.$h$ += 2)
  };
  $DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(!$dvt$$2$$.$getFromCache$("dataFiltered")) {
      return $DvtSparkChartDefaults$$.$getSelectedIds$()
    }
    $DvtSparkChartDefaults$$ = [];
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getFromCache$("dataPositions");
    if(!$DvtSparkChartAutomation$$) {
      for(var $DvtSparkChartAutomation$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartPieLabelUtils$$++) {
        for(var $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartTypeUtils$$++) {
          var $DvtChartPieLabelInfo$$;
          if($DvtChartPieLabelInfo$$ = "bar" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPieLabelUtils$$) ? $DvtChartDataUtils$$.$getBarInfo$($dvt$$2$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$).$dataPos$ : $DvtChartDataUtils$$.$getMarkerPosition$($dvt$$2$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$)) {
            $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.push({$seriesIndex$:$DvtChartPieLabelUtils$$, $groupIndex$:$DvtChartTypeUtils$$, $pos$:$DvtChartPieLabelInfo$$})
          }
        }
      }
      $dvt$$2$$.$putToCache$("dataPositions", $DvtSparkChartAutomation$$)
    }
    for($DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartPieLabelUtils$$++) {
      if($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].$pos$) {
        $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.y == $JSCompiler_alias_NULL$$ || $DvtChartPieLabelInfo$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartPieLabelInfo$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$, ($DvtSparkChartEventManager$$.x == $JSCompiler_alias_NULL$$ || $DvtChartPieLabelInfo$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartPieLabelInfo$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartTypeUtils$$ && 
        $DvtSparkChartDefaults$$.push(new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].$seriesIndex$), $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtSparkChartAutomation$$[$DvtChartPieLabelUtils$$].$groupIndex$)))
      }
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtSparkChartAutomation$$ = [], $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartStyleUtils$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$[$DvtChartStyleUtils$$], $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.$_dataPos$;
      if($DvtChartTypeUtils$$) {
        var $DvtChartTypeUtils$$ = $dvt$$2$$.$getPlotArea$().$localToStage$($DvtChartTypeUtils$$), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.y == $JSCompiler_alias_NULL$$ || $DvtChartTypeUtils$$.y >= $DvtSparkChartEventManager$$.y && $DvtChartTypeUtils$$.y <= $DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$;
        ($DvtSparkChartEventManager$$.x == $JSCompiler_alias_NULL$$ || $DvtChartTypeUtils$$.x >= $DvtSparkChartEventManager$$.x && $DvtChartTypeUtils$$.x <= $DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$) && $DvtChartPieLabelInfo$$ && $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$)
      }
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getPlotArea$(), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y)), $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.$stageToLocal$(new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$));
    $DvtSparkChartDefaults$$.x == $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$.x = $JSCompiler_alias_NULL$$, $DvtChartStyleUtils$$.x = $JSCompiler_alias_NULL$$);
    $DvtSparkChartDefaults$$.y == $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$.y = $JSCompiler_alias_NULL$$, $DvtChartStyleUtils$$.y = $JSCompiler_alias_NULL$$);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.x, $DvtChartStyleUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartStyleUtils$$.y);
    var $DvtChartPieLabelUtils$$ = {}, $DvtChartStyleUtils$$ = {}, $DvtChartTypeUtils$$ = {}, $DvtChartPieLabelInfo$$ = {};
    $DvtSparkChartEventManager$$.$xAxis$ && ($DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$xAxis$, $DvtSparkChartDefaults$$.$xMin$, $DvtSparkChartDefaults$$.$xMax$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieLabelUtils$$.min, $DvtChartPieLabelUtils$$.max));
    $DvtSparkChartEventManager$$.$yAxis$ && ($DvtChartStyleUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$yAxis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    $DvtSparkChartEventManager$$.$y2Axis$ && ($DvtChartTypeUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($DvtSparkChartEventManager$$.$y2Axis$, $DvtSparkChartDefaults$$.$yMin$, $DvtSparkChartDefaults$$.$yMax$, $DvtSparkChartAutomation$$));
    return{$xMin$:$DvtChartPieLabelUtils$$.min, $xMax$:$DvtChartPieLabelUtils$$.max, $yMin$:$DvtChartStyleUtils$$.min, $yMax$:$DvtChartStyleUtils$$.max, $y2Min$:$DvtChartTypeUtils$$.min, $y2Max$:$DvtChartTypeUtils$$.max, $startGroup$:$DvtChartPieLabelInfo$$.$startGroup$, $endGroup$:$DvtChartPieLabelInfo$$.$endGroup$}
  };
  $DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ || $DvtSparkChartDefaults$$ == $JSCompiler_alias_NULL$$) {
      return{min:$JSCompiler_alias_NULL$$, max:$JSCompiler_alias_NULL$$}
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$(), $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = ($DvtSparkChartDefaults$$ + $DvtSparkChartEventManager$$) / 2, $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartAutomation$$ / 2, $DvtSparkChartEventManager$$ -= $DvtSparkChartAutomation$$ / 2), $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    $DvtSparkChartAutomation$$ = {};
    $DvtChartStyleUtils$$ = {};
    var $DvtChartPieLabelUtils$$ = {}, $DvtChartTypeUtils$$ = {};
    $dvt$$2$$.$xAxis$ && "y" != $DvtSparkChartDefaults$$ && ($DvtSparkChartAutomation$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$xAxis$, $DvtSparkChartEventManager$$.$xMin$, $DvtSparkChartEventManager$$.$xMax$), $DvtChartTypeUtils$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($dvt$$2$$.$xAxis$, $DvtSparkChartAutomation$$.min, $DvtSparkChartAutomation$$.max));
    $dvt$$2$$.$yAxis$ && "x" != $DvtSparkChartDefaults$$ && ($DvtChartStyleUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$yAxis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    $dvt$$2$$.$y2Axis$ && ($DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($dvt$$2$$.$y2Axis$, $DvtSparkChartEventManager$$.$yMin$, $DvtSparkChartEventManager$$.$yMax$));
    return{$xMin$:$DvtSparkChartAutomation$$.min, $xMax$:$DvtSparkChartAutomation$$.max, $yMin$:$DvtChartStyleUtils$$.min, $yMax$:$DvtChartStyleUtils$$.max, $y2Min$:$DvtChartPieLabelUtils$$.min, $y2Max$:$DvtChartPieLabelUtils$$.max, $startGroup$:$DvtChartTypeUtils$$.$startGroup$, $endGroup$:$DvtChartTypeUtils$$.$endGroup$}
  };
  $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearViewportMin$(), $DvtChartStyleUtils$$ = $dvt$$2$$.$getLinearViewportMax$();
    if($DvtSparkChartDefaults$$ == $DvtSparkChartEventManager$$ && $dvt$$2$$.$isFullViewport$()) {
      return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
    }
    var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartEventManager$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartTypeUtils$$ = $dvt$$2$$.$getUnboundedLinearValueAt$($DvtSparkChartDefaults$$) - $dvt$$2$$.$getUnboundedLinearValueAt$(0), $DvtChartPieLabelInfo$$ = 1, $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$ + $DvtChartTypeUtils$$ - ($DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$), $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$getInfo$().$getMinimumExtent$();
    $DvtSparkChartEventManager$$ != $DvtSparkChartDefaults$$ && $DvtChartPieRenderUtils$$ < $DvtChartDataChangeFunnelSlice$$ && ($DvtChartPieLabelInfo$$ = ($DvtChartStyleUtils$$ - $DvtSparkChartAutomation$$ - $DvtChartDataChangeFunnelSlice$$) / ($DvtChartPieLabelUtils$$ - $DvtChartTypeUtils$$));
    return $DvtChartEventUtils$$.$_limitToGlobal$($dvt$$2$$, $DvtSparkChartAutomation$$ + $DvtChartPieLabelUtils$$ * $DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$ + $DvtChartTypeUtils$$ * $DvtChartPieLabelInfo$$)
  };
  $DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = {}, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelInfo$$.$xMin$ = $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$.$xMax$ = $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$.$yMin$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ : $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$.$yMax$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$) : ($DvtChartPieLabelInfo$$.$xMin$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartAutomation$$ : 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$.$xMax$ = $DvtChartPieRenderUtils$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$.$yMin$ = $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$.$yMax$ = $DvtChartStyleUtils$$);
    return $DvtChartPieLabelInfo$$
  };
  $DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getLinearGlobalMin$(), $DvtChartStyleUtils$$ = $dvt$$2$$.$getLinearGlobalMax$();
    $DvtSparkChartDefaults$$ - $DvtSparkChartEventManager$$ >= $DvtChartStyleUtils$$ - $DvtSparkChartAutomation$$ ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$) : $DvtSparkChartEventManager$$ < $DvtSparkChartAutomation$$ ? ($DvtSparkChartDefaults$$ += $DvtSparkChartAutomation$$ - $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$) : $DvtSparkChartDefaults$$ > $DvtChartStyleUtils$$ && ($DvtSparkChartEventManager$$ -= 
    $DvtSparkChartDefaults$$ - $DvtChartStyleUtils$$, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$);
    return $DvtChartEventUtils$$.$_getActualMinMax$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return{min:$dvt$$2$$.$linearToActual$($DvtSparkChartEventManager$$), max:$dvt$$2$$.$linearToActual$($DvtSparkChartDefaults$$)}
  };
  $DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $dvt$$2$$.$isGroupAxis$() && ($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$) && ($DvtSparkChartEventManager$$ = Math.ceil($DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = Math.floor($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ >= $DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartEventManager$$), $dvt$$2$$ = $dvt$$2$$.$getInfo$().$getGroup$($DvtSparkChartDefaults$$), 
    {$startGroup$:$DvtSparkChartEventManager$$, $endGroup$:$dvt$$2$$}) : {$startGroup$:$JSCompiler_alias_NULL$$, $endGroup$:$JSCompiler_alias_NULL$$}
  };
  $DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getSelectionHandler$();
    if($DvtSparkChartDefaults$$) {
      for(var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getChartObjPeers$(), $DvtChartStyleUtils$$ = [], $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$++) {
        for(var $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartTypeUtils$$++) {
          var $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$[$DvtChartTypeUtils$$];
          $DvtChartPieLabelInfo$$.$getSeries$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].series && $DvtChartPieLabelInfo$$.$getGroup$() === $DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$].group && $DvtChartStyleUtils$$.push($DvtChartPieLabelInfo$$.getId())
        }
      }
      $DvtSparkChartDefaults$$.$processInitialSelections$($DvtChartStyleUtils$$, $DvtSparkChartAutomation$$)
    }
  };
  $DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [];
    if($DvtChartTypeUtils$$.$isPie$($dvt$$2$$)) {
      for(var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$()) && $DvtSparkChartEventManager$$.push($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$])
      }
    }else {
      $dvt$$2$$ = $dvt$$2$$.$getChartObjPeers$();
      for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
        $dvt$$2$$[$DvtSparkChartAutomation$$].$isNavigable$() && $DvtSparkChartEventManager$$.push($dvt$$2$$[$DvtSparkChartAutomation$$])
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.drilling : "inherit";
    if("on" == $DvtSparkChartDefaults$$) {
      return $JSCompiler_alias_TRUE$$
    }
    if("off" == $DvtSparkChartDefaults$$) {
      return $JSCompiler_alias_FALSE$$
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().drilling;
    return"on" == $DvtSparkChartDefaults$$ || "seriesOnly" == $DvtSparkChartDefaults$$
  };
  $DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$.drilling : "inherit";
    if("on" == $DvtSparkChartEventManager$$) {
      return $JSCompiler_alias_TRUE$$
    }
    if("off" == $DvtSparkChartEventManager$$) {
      return $JSCompiler_alias_FALSE$$
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().drilling;
    return"on" == $DvtSparkChartEventManager$$
  };
  var $DvtChartRefObjUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"), $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y");
    $dvt$$2$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2");
    return $DvtSparkChartEventManager$$.concat($DvtSparkChartDefaults$$, $dvt$$2$$)
  };
  $DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"] && $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects ? $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$ + "Axis"].referenceObjects : []
  };
  $DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($dvt$$2$$) {
    return"area" == $dvt$$2$$.type ? "area" : "line"
  };
  $DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($dvt$$2$$) {
    return"front" == $dvt$$2$$.location ? "front" : "back"
  };
  $DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($dvt$$2$$) {
    return $dvt$$2$$.color ? $dvt$$2$$.color : "#333333"
  };
  $DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($dvt$$2$$) {
    return $dvt$$2$$.lineWidth ? $dvt$$2$$.lineWidth : 1
  };
  $DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($dvt$$2$$) {
    return $dvt$$2$$.lineType ? $dvt$$2$$.lineType : "straight"
  };
  $DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    if(0 < $DvtSparkChartAutomation$$.length) {
      var $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getRefObjCategories$($DvtSparkChartDefaults$$);
      if($DvtChartPieLabelUtils$$ && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$)) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return"hidden" != $DvtSparkChartDefaults$$.visibility
  };
  $DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($dvt$$2$$) {
    return $dvt$$2$$.id != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.id : $dvt$$2$$.text
  };
  $DvtChartRefObjUtils$$.$getRefObjCategories$ = function $$DvtChartRefObjUtils$$$$getRefObjCategories$$($dvt$$2$$) {
    return $dvt$$2$$.categories ? $dvt$$2$$.categories : [$DvtChartRefObjUtils$$.getId($dvt$$2$$)]
  };
  $DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if($DvtChartRefObjUtils$$.getId($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]) == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]
      }
    }
  };
  $DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($dvt$$2$$) {
    return $dvt$$2$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $dvt$$2$$.min != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.min : $dvt$$2$$.low
  };
  $DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($dvt$$2$$) {
    return $dvt$$2$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $dvt$$2$$.max != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.max : $dvt$$2$$.high
  };
  $DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$] && $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$].x : $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? $DvtChartDataUtils$$.$getGroupLabel$($dvt$$2$$, $DvtSparkChartDefaults$$) : $DvtSparkChartDefaults$$
  };
  var $DvtChartSeriesEffectUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartSeriesEffectUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$PatternFill$($DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$) : "gradient" == $DvtSparkChartAutomation$$ && 3 < $DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$ ? 270 : 0, $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelInfo$$, -0.09, 0.04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelInfo$$, 
    -0.04, -0.05)], $DvtChartPieLabelInfo$$ = [0, 1]) : ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelInfo$$, 0.15), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelInfo$$, 0.45), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelInfo$$, 0.25), $DvtChartPieLabelInfo$$, $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelInfo$$, 0.15), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelInfo$$, 0.9)], $DvtChartPieLabelInfo$$ = [0, 0.15, 0.3, 0.65, 0.85, 
    1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$)) : new $dvt$$2$$.$SolidFill$($DvtChartPieLabelInfo$$)
  };
  $DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$;
    ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartPieLabelUtils$$.areaColor ? $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.areaColor : ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$ && ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartPieLabelUtils$$, 0.2)));
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtChartPieLabelInfo$$ ? new $dvt$$2$$.$PatternFill$($DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$) : "gradient" == $DvtChartPieRenderUtils$$ ? ($DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? 180 : 270, $DvtSparkChartAutomation$$ ? ($DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartPieLabelUtils$$), $DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartPieLabelUtils$$, Math.min($DvtSparkChartAutomation$$ + 
    0.2, 1)), $dvt$$2$$.$ColorUtils$.$setAlpha$($DvtChartPieLabelUtils$$, Math.max($DvtSparkChartAutomation$$ - 0.15, 0))], $DvtChartPieLabelUtils$$ = [0, 1]) : $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$) ? ($DvtSparkChartAutomation$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelUtils$$, -0.09, 0.04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelUtils$$, -0.04, -0.05)], $DvtChartPieLabelUtils$$ = [0, 1]) : ($DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) ? 
    [$dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelUtils$$, 0.5), $DvtChartPieLabelUtils$$, $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelUtils$$, 0.5)] : [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelUtils$$, 0.5), $DvtChartPieLabelUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelUtils$$, 0.7)], $DvtChartPieLabelUtils$$ = [0, 0.5, 1]), new $dvt$$2$$.$LinearGradientFill$($DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$)) : 
    new $dvt$$2$$.$SolidFill$($DvtChartPieLabelUtils$$)
  };
  $DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if($DvtChartPieLabelInfo$$) {
      return new $dvt$$2$$.$PatternFill$($DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$)
    }
    if($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if($DvtChartSeriesEffectUtils$$.$_useAltaGradients$($DvtSparkChartEventManager$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelUtils$$, -0.09, 0.04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtChartPieLabelUtils$$, -0.04, -0.05)], new $dvt$$2$$.$LinearGradientFill$(270, $DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, [0, 1])
      }
      if("human" == $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
        return $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelUtils$$, 0.2), $dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelUtils$$, 0.1), $DvtChartPieLabelUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelUtils$$, 0.8)], new $dvt$$2$$.$LinearGradientFill$(315, $DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$getPastel$($DvtChartPieLabelUtils$$, 0.15), $DvtChartPieLabelUtils$$, $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelUtils$$, 0.9), $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieLabelUtils$$, 0.8)];
      return new $dvt$$2$$.$RadialGradientFill$($DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
    return new $dvt$$2$$.$SolidFill$($DvtChartPieLabelUtils$$)
  };
  $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 0);
    var $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && !$DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$PatternFill$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), "vertical" == $DvtSparkChartEventManager$$.$getOptions$().orientation && ($dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? $DvtChartPieLabelUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, -1, 1, 0)) : $DvtChartPieLabelUtils$$.$setMatrix$(new $dvt$$2$$.$Matrix$(0, 1, -1, 0))), $DvtChartPieLabelUtils$$) : 
    "gradient" == $DvtChartPieLabelInfo$$ ? ("on" == $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.threeDEffect ? ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, -0.1), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 0, 0.12), $DvtSparkChartAutomation$$], $DvtSparkChartAutomation$$ = [0, 0.65, 1]) : ($DvtSparkChartEventManager$$ = [$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, -0.09, 0.04), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartAutomation$$, 
    -0.04, -0.05)], $DvtSparkChartAutomation$$ = [0, 1]), new $dvt$$2$$.$LinearGradientFill$(90, $DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$, [$DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.$w$, $DvtChartPieLabelUtils$$.$h$])) : new $dvt$$2$$.$SolidFill$($DvtSparkChartAutomation$$)
  };
  $DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($dvt$$2$$) {
    return!$DvtChartDefaults$$.$isSkyrosSkin$($dvt$$2$$)
  };
  var $DvtChartStyleUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartStyleUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
  $DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_optionsCache$.seriesTypes;
    if($DvtSparkChartDefaults$$) {
      if($DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$]) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartEventManager$$]
      }
    }else {
      $dvt$$2$$.$_optionsCache$.seriesTypes = {}
    }
    if(!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $dvt$$2$$.$_optionsCache$.seriesTypes[$DvtSparkChartEventManager$$] = "auto"
    }
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) ? $DvtSparkChartDefaults$$.type : $JSCompiler_alias_NULL$$;
    !$DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && "candlestick" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "auto");
    if(!$DvtSparkChartDefaults$$ || "auto" == $DvtSparkChartDefaults$$) {
      $DvtChartTypeUtils$$.$isBar$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "bar" : $DvtChartTypeUtils$$.$isLine$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "line" : $DvtChartTypeUtils$$.$isArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "area" : $DvtChartTypeUtils$$.$isLineWithArea$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "lineWithArea" : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtSparkChartDefaults$$ = "candlestick" : $DvtChartTypeUtils$$.$isCombo$($dvt$$2$$) && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, 
      $DvtSparkChartEventManager$$) % $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$DvtSparkChartDefaults$$])
    }
    return $dvt$$2$$.$_optionsCache$.seriesTypes[$DvtSparkChartEventManager$$] = $DvtSparkChartDefaults$$
  };
  $DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getFromCachedMap$($DvtSparkChartEventManager$$);
    if($DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$) {
      return $DvtSparkChartDefaults$$
    }
    var $DvtSparkChartDefaults$$ = $JSCompiler_alias_FALSE$$, $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$);
    if("bar" == $DvtSparkChartAutomation$$ || "area" == $DvtSparkChartAutomation$$) {
      for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtSparkChartAutomation$$++) {
        if($DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) != $JSCompiler_alias_NULL$$ || $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) != $JSCompiler_alias_NULL$$) {
          $DvtSparkChartDefaults$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $dvt$$2$$.$putToCachedMap$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartDefaults$$
  };
  $DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.seriesEffect
  };
  $DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.color) {
      return $DvtSparkChartAutomation$$.color
    }
    if("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }
    if(($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.color) {
      return $DvtSparkChartDefaults$$.color
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.styleDefaults.colors;
    $dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$) % $DvtSparkChartAutomation$$.length;
    return $DvtSparkChartDefaults$$.styleDefaults.colors[$dvt$$2$$]
  };
  $DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartDataUtils$$.$isStockValueRising$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.styleDefaults.stockRisingColor : $DvtSparkChartAutomation$$.styleDefaults.stockFallingColor
  };
  $DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    if($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.color) {
      return $DvtSparkChartDefaults$$.color
    }
    $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor ? $DvtSparkChartDefaults$$.styleDefaults.stockVolumeColor : $DvtChartStyleUtils$$.$getStockItemColor$($dvt$$2$$, 0, $DvtSparkChartEventManager$$)
  };
  $DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().splitterPosition;
    return $DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtSparkChartEventManager$$ : $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? 0.8 : 0.5
  };
  $DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if($DvtChartPieLabelUtils$$ && $DvtChartPieLabelUtils$$.pattern && "auto" != $DvtChartPieLabelUtils$$.pattern) {
      return $DvtChartPieLabelUtils$$.pattern
    }
    $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if(("line" == $DvtChartPieLabelUtils$$ || "area" == $DvtChartPieLabelUtils$$) && $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    if(($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtChartPieLabelUtils$$.pattern && "auto" != $DvtChartPieLabelUtils$$.pattern) {
      return $DvtChartPieLabelUtils$$.pattern
    }
    if("pattern" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) {
      if($DvtChartTypeUtils$$.$isStock$ && "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
        return $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$isStockValueRising$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtSparkChartEventManager$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $DvtSparkChartEventManager$$ ? "smallDiagonalRight" : "smallDiagonalLeft"
      }
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$();
      $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.styleDefaults.patterns;
      $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) % $DvtChartPieLabelUtils$$.length;
      return $DvtSparkChartAutomation$$.styleDefaults.patterns[$DvtSparkChartEventManager$$]
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartPieLabelUtils$$ ? $DvtChartPieLabelUtils$$ : 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && "lineWithArea" != $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$) : $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && (!$DvtChartDefaults$$.$isSkyrosSkin$($DvtSparkChartEventManager$$) && "gradient" != 
    $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartEventManager$$)) && ($DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) ? $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, 0.15, -0.25) : $JSCompiler_alias_NULL$$
  };
  $DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.borderColor) {
      return $DvtSparkChartDefaults$$.borderColor
    }
    if(($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.borderColor) {
      return $DvtSparkChartEventManager$$.borderColor
    }
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return"auto" != $dvt$$2$$.borderColor ? $dvt$$2$$.borderColor : $JSCompiler_alias_NULL$$
  };
  $DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.borderWidth) {
      return $DvtSparkChartDefaults$$.borderWidth
    }
    if(($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.borderWidth) {
      return $DvtSparkChartEventManager$$.borderWidth
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults;
    return"auto" != $DvtSparkChartEventManager$$.borderWidth ? $DvtSparkChartEventManager$$.borderWidth : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? 1.25 : 1
  };
  $DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(!$DvtChartStyleUtils$$.$isMarkerDisplayed$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.color ? $DvtSparkChartAutomation$$.color : ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartAutomation$$.markerColor ? $DvtSparkChartAutomation$$.markerColor : ($DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().styleDefaults.markerColor) ? $DvtSparkChartAutomation$$ : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.styleDefaults.markerShape, $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$ && $DvtChartTypeUtils$$.markerShape && ($DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.markerShape);
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.markerShape && ($DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.markerShape);
    "auto" == $DvtChartPieLabelUtils$$ && ("bubble" == $dvt$$2$$.$getType$() || $DvtChartStyleUtils$$.$isRangeSeries$($dvt$$2$$, $DvtSparkChartEventManager$$) ? $DvtChartPieLabelUtils$$ = "circle" : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.styleDefaults.shapes, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$[$dvt$$2$$ % $DvtSparkChartAutomation$$.length]));
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.markerSize != $JSCompiler_alias_NULL$$ ? Number($DvtSparkChartDefaults$$.markerSize) : ($DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartEventManager$$.markerSize != $JSCompiler_alias_NULL$$ ? Number($DvtSparkChartEventManager$$.markerSize) : 
    Number($dvt$$2$$.$getOptions$().styleDefaults.markerSize);
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartEventManager$$ = Math.ceil(0.6 * $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$
  };
  $DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$.markerDisplayed != $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.markerDisplayed : ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.markerDisplayed != $JSCompiler_alias_NULL$$ ? $DvtSparkChartDefaults$$.markerDisplayed : 
    $dvt$$2$$.$getOptions$().styleDefaults.markerDisplayed;
    return"on" == $DvtSparkChartDefaults$$ ? $JSCompiler_alias_TRUE$$ : "off" == $DvtSparkChartDefaults$$ ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || "none" == $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartStyleUtils$$.$getImageSource$ = function $$DvtChartStyleUtils$$$$getImageSource$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$;
    ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] ? $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$] : ($dvt$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $dvt$$2$$[$DvtSparkChartAutomation$$] && ($DvtChartStyleUtils$$ = $dvt$$2$$[$DvtSparkChartAutomation$$]);
    return $DvtChartStyleUtils$$
  };
  $DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineWidth ? $DvtSparkChartDefaults$$.lineWidth : $DvtSparkChartAutomation$$.styleDefaults.lineWidth ? $DvtSparkChartAutomation$$.styleDefaults.lineWidth : "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartEventManager$$) ? 
    2 : 3;
    $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) && ($DvtSparkChartDefaults$$ = Math.ceil(0.6 * $DvtSparkChartDefaults$$));
    return $DvtSparkChartDefaults$$
  };
  $DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.lineStyle ? $DvtSparkChartDefaults$$.lineStyle : $dvt$$2$$.$getOptions$().styleDefaults.lineStyle
  };
  $DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$;
    $DvtSparkChartDefaults$$ = ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$)) && $DvtSparkChartDefaults$$.lineType ? $DvtSparkChartDefaults$$.lineType : $dvt$$2$$.$getOptions$().styleDefaults.lineType;
    "auto" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) ? "none" : "straight");
    if($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$)) {
      "centeredSegmented" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "segmented"), "centeredStepped" == $DvtSparkChartDefaults$$ && ($DvtSparkChartDefaults$$ = "stepped")
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__sparkBarSpacing
  };
  $DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getFromCache$("barGapRatio");
    if($DvtSparkChartEventManager$$) {
      return $DvtSparkChartEventManager$$
    }
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.barGapRatio;
    "string" == typeof $DvtSparkChartEventManager$$ && "%" == $DvtSparkChartEventManager$$.slice(-1) && ($DvtSparkChartEventManager$$ = Number($DvtSparkChartEventManager$$.slice(0, -1)) / 100);
    if($DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && !isNaN($DvtSparkChartEventManager$$)) {
      return $DvtSparkChartEventManager$$
    }
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.y.length, $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.y2.length, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$) ? Math.max($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? 
    1 == $DvtSparkChartEventManager$$ ? 0 : 0.25 : 1 == $DvtSparkChartEventManager$$ ? 0.37 + 0.26 / $DvtChartDataUtils$$.$getViewportGroupCount$($dvt$$2$$) : 0.25;
    $dvt$$2$$.$putToCache$("barGapRatio", $DvtSparkChartEventManager$$);
    return $DvtSparkChartEventManager$$
  };
  $DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().styleDefaults.maxBarWidth;
    return $DvtSparkChartEventManager$$ != $JSCompiler_alias_NULL$$ && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtSparkChartEventManager$$ : Infinity
  };
  $DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getZValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 1) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    return Math.min($DvtSparkChartEventManager$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$))
  };
  $DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$ ? "y2BarStackWidth" : "yBarStackWidth", $DvtChartTypeUtils$$ = $dvt$$2$$.$getFromCachedMap2D$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtChartTypeUtils$$) {
      return $DvtChartTypeUtils$$
    }
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getBarCategoryZ$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) / $dvt$$2$$.$getOptions$()._averageGroupZ;
    $DvtChartTypeUtils$$ = Math.min($DvtSparkChartAutomation$$ * $DvtChartStyleUtils$$.$getGroupWidth$($dvt$$2$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($dvt$$2$$));
    $dvt$$2$$.$putToCachedMap2D$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartTypeUtils$$);
    return $DvtChartTypeUtils$$
  };
  $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getFromCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartAutomation$$) {
      return $DvtSparkChartAutomation$$
    }
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($dvt$$2$$, "bar"), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$), $DvtChartPieRenderUtils$$ = {}, $DvtChartDataChangeFunnelSlice$$ = {}, $DvtChartMarkerUtils$$ = 0, $DvtChartDataChangeRangeMarker$$ = 0, $DvtChartPieUtils$$, $DvtChartDataChangeMarker$$;
    if($DvtSparkChartDefaults$$) {
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieLabelUtils$$.y.length;$DvtChartDataChangeMarker$$++) {
        $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartPieLabelUtils$$.y[$DvtChartDataChangeMarker$$], $DvtSparkChartEventManager$$, $JSCompiler_alias_FALSE$$), $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartPieLabelUtils$$.y[$DvtChartDataChangeMarker$$]] = -0.5 * $DvtChartPieUtils$$ : ($DvtChartPieRenderUtils$$[$DvtChartPieLabelUtils$$.y[$DvtChartDataChangeMarker$$]] = $DvtChartMarkerUtils$$, $DvtChartMarkerUtils$$ += $DvtChartPieUtils$$)
      }
      $DvtChartPieLabelInfo$$ || ($DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$);
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieLabelUtils$$.y2.length;$DvtChartDataChangeMarker$$++) {
        $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($dvt$$2$$, $DvtChartPieLabelUtils$$.y2[$DvtChartDataChangeMarker$$], $DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$), $DvtSparkChartAutomation$$ ? $DvtChartDataChangeFunnelSlice$$[$DvtChartPieLabelUtils$$.y2[$DvtChartDataChangeMarker$$]] = -0.5 * $DvtChartPieUtils$$ : ($DvtChartDataChangeFunnelSlice$$[$DvtChartPieLabelUtils$$.y2[$DvtChartDataChangeMarker$$]] = $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeRangeMarker$$ += 
        $DvtChartPieUtils$$)
      }
      $DvtChartPieLabelInfo$$ || ($DvtChartMarkerUtils$$ = $DvtChartDataChangeRangeMarker$$)
    }else {
      for($DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);$DvtChartDataChangeMarker$$++) {
        if($DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataChangeMarker$$), !("bar" != $DvtChartPieUtils$$ && "candlestick" != $DvtChartPieUtils$$) && $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartDataChangeMarker$$)) {
          var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataChangeMarker$$), $DvtChartDataChangeLineArea$$ = $DvtChartDataUtils$$.$getStackCategory$($dvt$$2$$, $DvtChartDataChangeMarker$$);
          $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getBarWidth$($dvt$$2$$, $DvtChartDataChangeMarker$$, $DvtSparkChartEventManager$$);
          $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ ? $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$] = -0.5 * $DvtChartPieUtils$$ : ($DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$] = $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeRangeMarker$$ += $DvtChartPieUtils$$) : $DvtSparkChartAutomation$$ ? $DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] = -0.5 * $DvtChartPieUtils$$ : ($DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] = $DvtChartMarkerUtils$$, 
          $DvtChartMarkerUtils$$ += $DvtChartPieUtils$$)
        }
      }
    }
    for($DvtChartDataChangeLineArea$$ in $DvtChartPieRenderUtils$$) {
      $DvtChartPieRenderUtils$$[$DvtChartDataChangeLineArea$$] -= !$DvtChartPieLabelInfo$$ && !$DvtSparkChartDefaults$$ ? ($DvtChartMarkerUtils$$ + $DvtChartDataChangeRangeMarker$$) / 2 : $DvtChartMarkerUtils$$ / 2
    }
    for($DvtChartDataChangeLineArea$$ in $DvtChartDataChangeFunnelSlice$$) {
      $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeLineArea$$] -= !$DvtChartPieLabelInfo$$ && !$DvtSparkChartDefaults$$ ? ($DvtChartMarkerUtils$$ + $DvtChartDataChangeRangeMarker$$) / 2 - $DvtChartMarkerUtils$$ : $DvtChartDataChangeRangeMarker$$ / 2
    }
    $DvtSparkChartAutomation$$ = {y:$DvtChartPieRenderUtils$$, y2:$DvtChartDataChangeFunnelSlice$$};
    $dvt$$2$$.$putToCachedMap2D$("barCategoryOffsetMap", $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtSparkChartAutomation$$
  };
  $DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    if($DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.styleDefaults.funnelSliceGaps) {
      return 1
    }
    if($DvtSparkChartEventManager$$.styleDefaults.sliceGaps != $JSCompiler_alias_NULL$$) {
      return $DvtSparkChartEventManager$$.styleDefaults.sliceGaps
    }
    $dvt$$2$$ = $DvtSparkChartEventManager$$.styleDefaults.dataItemGaps;
    "auto" == $dvt$$2$$ && ($dvt$$2$$ = "on" == $DvtSparkChartEventManager$$.styleDefaults.threeDEffect ? "0%" : "50%");
    $DvtSparkChartEventManager$$ = $dvt$$2$$ && $dvt$$2$$.indexOf ? $dvt$$2$$.indexOf("%") : -1;
    return 0 <= $DvtSparkChartEventManager$$ ? ($dvt$$2$$ = $dvt$$2$$.substring(0, $DvtSparkChartEventManager$$), $dvt$$2$$ / 100) : 0
  };
  $DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartAutomation$$ && "off" == $DvtSparkChartAutomation$$._selectable ? $JSCompiler_alias_FALSE$$ : $dvt$$2$$.$isSelectionSupported$() && 0 <= $DvtSparkChartEventManager$$ && 0 <= $DvtSparkChartDefaults$$
  };
  $DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
    return 0 < $DvtSparkChartAutomation$$.length && $dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      if(0 < $DvtChartPieLabelUtils$$.length) {
        if($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
          $DvtSparkChartAutomation$$ = 0
        }
        if($dvt$$2$$.$ArrayUtils$.$hasAnyItem$($DvtChartPieLabelUtils$$, $DvtChartDataUtils$$.$getDataItemCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$))) {
          return $JSCompiler_alias_FALSE$$
        }
      }
    }else {
      return $JSCompiler_alias_FALSE$$
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDisplay
  };
  $DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().animationOnDataChange
  };
  $DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($DvtSparkChartEventManager$$) {
    return $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.animationDuration) / 1E3
  };
  $DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationIndicators
  };
  $DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationUpColor
  };
  $DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.animationDownColor
  };
  $DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.hiddenCategories || ($dvt$$2$$.hiddenCategories = []);
    return $dvt$$2$$.hiddenCategories
  };
  $DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    $dvt$$2$$.highlightedCategories || ($dvt$$2$$.highlightedCategories = []);
    return $dvt$$2$$.highlightedCategories
  };
  $DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedInnerColor
  };
  $DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().styleDefaults.selectedOuterColor
  };
  $DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return"highlight" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$
  };
  $DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$().styleDefaults.selectionEffect;
    return"explode" == $dvt$$2$$ || "highlightAndExplode" == $dvt$$2$$
  };
  $DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    var $DvtChartDataChangeFunnelSlice$$ = [], $DvtChartMarkerUtils$$;
    $DvtChartPieLabelUtils$$ && ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) && ("center" == $DvtChartPieLabelInfo$$ || "inBottom" == $DvtChartPieLabelInfo$$ || "inTop" == $DvtChartPieLabelInfo$$ || "inRight" == $DvtChartPieLabelInfo$$ || "inLeft" == $DvtChartPieLabelInfo$$) ? ($DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtSparkChartAutomation$$) != $JSCompiler_alias_NULL$$ ? "#000000" : $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtChartPieLabelUtils$$), $DvtChartDataChangeFunnelSlice$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartMarkerUtils$$ + ";"))) : $DvtChartDataChangeFunnelSlice$$.push(new $dvt$$2$$.$CSSStyle$("color: #333333;"));
    $DvtChartDataChangeFunnelSlice$$.push($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartPieRenderUtils$$));
    $DvtChartDataChangeFunnelSlice$$.push(new $dvt$$2$$.$CSSStyle$($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$).labelStyle, $DvtChartPieRenderUtils$$)));
    $DvtChartMarkerUtils$$ && $dvt$$2$$.$Agent$.$isHighContrast$() && $DvtChartDataChangeFunnelSlice$$.push(new $dvt$$2$$.$CSSStyle$("color: " + $DvtChartMarkerUtils$$ + ";"));
    return $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartDataChangeFunnelSlice$$)
  };
  $DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) {
    var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeFunnelSlice$$;
    if($DvtChartPieLabelInfo$$) {
      $DvtChartDataChangeFunnelSlice$$ = "outsideBarEdge"
    }else {
      if(($DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.labelPosition) || ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelPosition), $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelUtils$$), "none" == $DvtChartDataChangeFunnelSlice$$) {
        return"none"
      }
    }
    var $DvtChartMarkerUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartDataChangeRangeMarker$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$);
    if($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$)) {
      return"center"
    }
    if("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      if("center" == $DvtChartDataChangeFunnelSlice$$ || $DvtChartPieUtils$$) {
        return"center"
      }
      $DvtChartPieUtils$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$);
      if("insideBarEdge" != $DvtChartDataChangeFunnelSlice$$) {
        if($DvtChartPieUtils$$ && !$DvtChartPieLabelInfo$$) {
          return"center"
        }
        "outsideBarEdge" != $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeFunnelSlice$$ = "insideBarEdge")
      }
      "insideBarEdge" == $DvtChartDataChangeFunnelSlice$$ && !$DvtChartPieUtils$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.dataLabelStyle, $DvtChartDataChangeRangeMarker$$ ? ($DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$), $DvtChartPieLabelInfo$$ = $dvt$$2$$.$TextUtils$.$getTextStringWidth$($DvtSparkChartEventManager$$.$getCtx$(), 
      $DvtChartPieUtils$$, $DvtChartPieLabelInfo$$)) : $DvtChartPieLabelInfo$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieLabelInfo$$), $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), Math.abs($DvtChartPieUtils$$.$baseCoord$ - $DvtChartPieUtils$$.$yCoord$) <= $DvtChartPieLabelInfo$$ && ($DvtChartDataChangeFunnelSlice$$ = "outsideBarEdge"));
      $DvtSparkChartEventManager$$ = "low" == $DvtChartPieLabelUtils$$ ? $DvtChartPieRenderUtils$$.low <= $DvtChartPieRenderUtils$$.high : "high" == $DvtChartPieLabelUtils$$ ? $DvtChartPieRenderUtils$$.high < $DvtChartPieRenderUtils$$.low : 0 > $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
      return"outsideBarEdge" == $DvtChartDataChangeFunnelSlice$$ ? $DvtChartDataChangeRangeMarker$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartMarkerUtils$$ || $DvtSparkChartEventManager$$ && $DvtChartMarkerUtils$$ ? "right" : "left" : $DvtSparkChartEventManager$$ ? "bottom" : "top" : $DvtChartDataChangeRangeMarker$$ ? !$DvtSparkChartEventManager$$ && !$DvtChartMarkerUtils$$ || $DvtSparkChartEventManager$$ && $DvtChartMarkerUtils$$ ? "inRight" : "inLeft" : $DvtSparkChartEventManager$$ ? "inBottom" : 
      "inTop"
    }
    if("center" == $DvtChartDataChangeFunnelSlice$$) {
      return"center"
    }
    if("belowMarker" == $DvtChartDataChangeFunnelSlice$$) {
      return"bottom"
    }
    if("aboveMarker" == $DvtChartDataChangeFunnelSlice$$) {
      return"top"
    }
    if("afterMarker" != $DvtChartDataChangeFunnelSlice$$ && "beforeMarker" != $DvtChartDataChangeFunnelSlice$$) {
      if($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$)) {
        return"center"
      }
      if("low" == $DvtChartPieLabelUtils$$ && !$DvtChartPieUtils$$) {
        if($DvtChartDataChangeRangeMarker$$) {
          $DvtChartDataChangeFunnelSlice$$ = "beforeMarker"
        }else {
          return"bottom"
        }
      }else {
        if("high" == $DvtChartPieLabelUtils$$ && !$DvtChartPieUtils$$) {
          if($DvtChartDataChangeRangeMarker$$) {
            $DvtChartDataChangeFunnelSlice$$ = "afterMarker"
          }else {
            return"top"
          }
        }else {
          $DvtChartDataChangeFunnelSlice$$ = "afterMarker"
        }
      }
    }
    return!$DvtChartMarkerUtils$$ && "afterMarker" == $DvtChartDataChangeFunnelSlice$$ || $DvtChartMarkerUtils$$ && "beforeMarker" == $DvtChartDataChangeFunnelSlice$$ ? "right" : "left"
  };
  $DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $dvt$$2$$ instanceof Array ? "high" == $DvtSparkChartEventManager$$ ? $dvt$$2$$[1] : $dvt$$2$$[0] : $dvt$$2$$
  };
  $DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isOverviewSupported$($dvt$$2$$) && "off" != $DvtSparkChartEventManager$$.overview.rendered
  };
  $DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().overview.height;
    $DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ && ($DvtSparkChartEventManager$$ = $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? 0.25 : 0.2);
    return $DvtChartStyleUtils$$.$getSizeInPixels$($DvtSparkChartEventManager$$, $dvt$$2$$.getHeight())
  };
  $DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if("string" == typeof $dvt$$2$$) {
      if("%" == $dvt$$2$$.slice(-1)) {
        return $DvtSparkChartEventManager$$ * Number($dvt$$2$$.slice(0, -1)) / 100
      }
      if("px" == $dvt$$2$$.slice(-2)) {
        return Number($dvt$$2$$.slice(0, -2))
      }
      $dvt$$2$$ = Number($dvt$$2$$)
    }
    return"number" == typeof $dvt$$2$$ ? 1 >= $dvt$$2$$ ? $DvtSparkChartEventManager$$ * $dvt$$2$$ : $dvt$$2$$ : 0
  };
  $DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$();
    return $DvtSparkChartDefaults$$.plotArea.backgroundColor ? $DvtSparkChartDefaults$$.plotArea.backgroundColor : $DvtSparkChartEventManager$$ ? "#FFFFFF" : $JSCompiler_alias_NULL$$
  };
  $DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
    return $DvtSparkChartDefaults$$ ? ($DvtSparkChartDefaults$$ = $dvt$$2$$.$StyleUtils$.$getTimeMilliseconds$($DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isLine$($DvtSparkChartEventManager$$) ? 0.75 * $DvtSparkChartDefaults$$ : 1.25 * $DvtSparkChartDefaults$$) : 0
  };
  $DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$)
  };
  $DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getFromCache$("groupWidth");
    $DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ && ($DvtSparkChartEventManager$$ = $dvt$$2$$.$xAxis$.$getInfo$().$getGroupWidth$(), $dvt$$2$$.$putToCache$("groupWidth", $DvtSparkChartEventManager$$));
    return $DvtSparkChartEventManager$$
  };
  $DvtChartStyleUtils$$.$isStackLabelRendered$ = function $$DvtChartStyleUtils$$$$isStackLabelRendered$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTypeUtils$$.$isStacked$($dvt$$2$$) && "on" == $DvtSparkChartEventManager$$.stackLabel ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  var $DvtChartTextUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTextUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    $DvtSparkChartAutomation$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartDefaults$$.$getCtx$(), $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$);
    $DvtSparkChartAutomation$$.$setCSSStyle$($DvtChartStyleUtils$$);
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$associate$($DvtSparkChartAutomation$$, new $dvt$$2$$.$SimpleObjPeer$($DvtSparkChartAutomation$$.$getUntruncatedTextString$())), $DvtSparkChartAutomation$$) : $JSCompiler_alias_NULL$$
  };
  $DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getOptions$();
    return $dvt$$2$$.title.text || $dvt$$2$$.subtitle.text || $dvt$$2$$.footnote.text
  };
  var $DvtChartTooltipUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTooltipUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, 0, $DvtSparkChartDefaults$$) : $DvtChartStyleUtils$$.$getColor$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtChartTypeUtils$$.$isSpark$($dvt$$2$$) || $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || 0 > $DvtSparkChartEventManager$$ || 0 > $DvtSparkChartDefaults$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getOptions$().tooltip;
    if($DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartAutomation$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : $JSCompiler_alias_NULL$$), $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isPie$($dvt$$2$$) ? ($dvt$$2$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartStyleUtils$$.label = 
      $dvt$$2$$.$_sliceLabelString$) : $DvtChartStyleUtils$$.label = $DvtChartDataUtils$$.$getDataLabel$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.$getCustomTooltip$($DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$)
    }
    if($DvtChartStyleUtils$$ && $DvtChartStyleUtils$$.shortDesc != $JSCompiler_alias_NULL$$) {
      return $DvtChartStyleUtils$$.shortDesc
    }
    $DvtChartPieLabelUtils$$ = "";
    $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) ? $DvtChartPieLabelUtils$$ += $DvtChartTooltipUtils$$.$getStockDatatip$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) : ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addSeriesDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addValueDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$));
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartPieLabelUtils$$, $dvt$$2$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().tooltip;
    if($DvtSparkChartAutomation$$ && $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataContext$($DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, 0), $DvtSparkChartAutomation$$.label = $DvtSparkChartDefaults$$.$_sliceLabelString$, $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)
    }
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$("", $DvtSparkChartEventManager$$, "series", "SERIES", $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, 0, 0, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartTooltipUtils$$.$_processDatatip$($DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return"" == $DvtSparkChartEventManager$$ ? $JSCompiler_alias_NULL$$ : $DvtSparkChartAutomation$$ ? $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("table", $DvtSparkChartDefaults$$.$getOptions$().styleDefaults._tooltipStyle) + $DvtSparkChartEventManager$$ + "\x3c/table\x3e" : $DvtSparkChartEventManager$$
  };
  $DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$getOptions$().tooltip;
    if($DvtChartStyleUtils$$ && $DvtSparkChartEventManager$$.id != $JSCompiler_alias_NULL$$) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$) ? $DvtChartDataCursor$$.$TOOLTIP_ID$ : $JSCompiler_alias_NULL$$);
      $dvt$$2$$ = {id:$DvtChartRefObjUtils$$.getId($DvtSparkChartEventManager$$), label:$DvtSparkChartEventManager$$.text, data:$dvt$$2$$.$_rawOptions$[$DvtSparkChartDefaults$$].referenceObjects[$DvtSparkChartAutomation$$], value:$DvtSparkChartEventManager$$.value, low:$DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$), high:$DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$), color:$DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$)};
      return $DvtChartPieLabelUtils$$.$getCustomTooltip$($DvtChartStyleUtils$$, $dvt$$2$$)
    }
    return $DvtSparkChartEventManager$$.shortDesc
  };
  $DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, 0, $DvtSparkChartEventManager$$);
    $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$("", $dvt$$2$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ && ($DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "open", "OPEN", $DvtSparkChartAutomation$$.open, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "close", "CLOSE", $DvtSparkChartAutomation$$.close, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, 
    $dvt$$2$$, "high", "HIGH", $DvtSparkChartAutomation$$.high, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "low", "LOW", $DvtSparkChartAutomation$$.low, $DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $dvt$$2$$, "volume", "VOLUME", $DvtSparkChartAutomation$$.volume, $DvtSparkChartDefaults$$));
    return $DvtSparkChartEventManager$$
  };
  $DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "series", "SERIES", $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartTypeUtils$$;
    $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? ($DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, "group"), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$), $DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$.$formatDateValue$($DvtChartTypeUtils$$, new Date($DvtSparkChartAutomation$$)), $DvtChartTypeUtils$$ == $JSCompiler_alias_NULL$$ && ($DvtChartTypeUtils$$ = 
    $DvtSparkChartDefaults$$.$xAxis$.$getInfo$().$formatLabel$($DvtSparkChartAutomation$$))) : $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getGroupLabel$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$);
    $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getNumLevels$($DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = "GROUP";
    if(1 == $DvtChartStyleUtils$$ || !$dvt$$2$$.$ArrayUtils$.isArray($DvtChartTypeUtils$$)) {
      $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$)
    }else {
      for($DvtChartStyleUtils$$ -= 1;0 <= $DvtChartStyleUtils$$;$DvtChartStyleUtils$$--) {
        $DvtSparkChartEventManager$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "group", $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$[$DvtChartStyleUtils$$], $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$), $DvtChartTypeUtils$$[$DvtChartStyleUtils$$] && ($DvtSparkChartAutomation$$ = $JSCompiler_alias_NULL$$)
      }
    }
    return $DvtSparkChartEventManager$$
  };
  $DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getZValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "x", "X", $DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "y", "Y", $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$), $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$))) : $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$) : $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "value", "VALUE", $DvtChartPieLabelUtils$$, 
    $DvtChartStyleUtils$$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "targetValue", "TARGET_VALUE", $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$))) : $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$) ? "y2" : "y", $DvtChartDataChangeFunnelSlice$$ != $JSCompiler_alias_NULL$$ || $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "high", "HIGH", $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "low", "LOW", $DvtChartDataChangeFunnelSlice$$, $DvtChartStyleUtils$$), $DvtChartPieRenderUtils$$ != 
    $JSCompiler_alias_NULL$$ && ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$))) : $DvtChartPieRenderUtils$$ != $JSCompiler_alias_NULL$$ ? ($dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "Y", $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$), $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    "z", "Z", $DvtChartPieRenderUtils$$, $DvtChartStyleUtils$$)) : $dvt$$2$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "VALUE", $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$));
    return $dvt$$2$$
  };
  $DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    if($DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$ || "" === $DvtChartPieLabelUtils$$) {
      return $DvtSparkChartEventManager$$
    }
    var $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$getOptions$().styleDefaults, $DvtChartMarkerUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$.tooltipDisplay;
    if(!$DvtChartPieUtils$$ || "auto" == $DvtChartPieUtils$$) {
      if("series" == $DvtSparkChartAutomation$$ && "none" == $DvtChartDataChangeFunnelSlice$$.seriesTooltipType || "group" == $DvtSparkChartAutomation$$ && ("none" == $DvtChartDataChangeFunnelSlice$$.groupTooltipType || $DvtChartTypeUtils$$.$isPie$($DvtSparkChartDefaults$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartDefaults$$)) || "series" != $DvtSparkChartAutomation$$ && ("group" != $DvtSparkChartAutomation$$ && "label" != $DvtSparkChartAutomation$$) && "none" == $DvtChartDataChangeFunnelSlice$$.valueTooltipType) {
        $DvtChartPieUtils$$ = "off"
      }
    }
    if("off" == $DvtChartPieUtils$$) {
      return $DvtSparkChartEventManager$$
    }
    var $DvtChartDataChangeRangeMarker$$;
    "string" === typeof $DvtChartMarkerUtils$$.tooltipLabel ? $DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$.tooltipLabel : $dvt$$2$$.$ArrayUtils$.isArray($DvtChartMarkerUtils$$.tooltipLabel) && ($DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$.tooltipLabel[$DvtChartPieRenderUtils$$ ? $DvtChartPieRenderUtils$$ : 0]);
    $DvtChartDataChangeRangeMarker$$ == $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$ == $JSCompiler_alias_NULL$$ ? "" : "GROUP" == $DvtChartStyleUtils$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartDefaults$$) ? $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$.$getOptions$(), "labelDate", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_GROUP") : $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_" + $DvtChartStyleUtils$$, 
    ""));
    "series" != $DvtSparkChartAutomation$$ && "group" != $DvtSparkChartAutomation$$ && ($DvtChartPieLabelUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartMarkerUtils$$, $DvtChartPieLabelUtils$$));
    if($DvtChartPieLabelInfo$$) {
      return $DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$()), $DvtChartDataChangeFunnelSlice$$.tooltipLabelStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "left" : "right"), $DvtChartDataChangeFunnelSlice$$.tooltipValueStyle.$setStyle$($dvt$$2$$.$CSSStyle$.$TEXT_ALIGN$, $DvtSparkChartDefaults$$ ? "right" : "left"), $DvtSparkChartEventManager$$ + "\x3ctr\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangeFunnelSlice$$.tooltipLabelStyle) + 
      $DvtChartDataChangeRangeMarker$$ + "\x3c/td\x3e" + $dvt$$2$$.$HtmlTooltipManager$.$createStartTag$("td", $DvtChartDataChangeFunnelSlice$$.tooltipValueStyle) + $DvtChartPieLabelUtils$$ + "\x3c/td\x3e\x3c/tr\x3e"
    }
    0 < $DvtSparkChartEventManager$$.length && ($DvtSparkChartEventManager$$ += "\x3cbr\x3e");
    return $DvtSparkChartEventManager$$ + $dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtChartDataChangeRangeMarker$$, $DvtChartPieLabelUtils$$])
  };
  $DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$().valueFormats;
    if(!$DvtSparkChartDefaults$$) {
      return{}
    }
    for(var $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].type == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]
      }
    }
    return"group" == $DvtSparkChartEventManager$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($dvt$$2$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "x") : ("y" == $DvtSparkChartEventManager$$ || "y2" == $DvtSparkChartEventManager$$ || "min" == $DvtSparkChartEventManager$$ || "max" == $DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($dvt$$2$$, "value") : {}
  };
  $DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelInfo$$ = "auto", $DvtChartPieRenderUtils$$ = "on", $DvtChartDataChangeFunnelSlice$$;
    $DvtSparkChartDefaults$$.scaling && ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.scaling);
    $DvtSparkChartDefaults$$.autoPrecision && ($DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.autoPrecision);
    $DvtSparkChartDefaults$$.converter && ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.converter);
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$LinearScaleAxisValueFormatter$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$ != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$ : $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelUtils$$ : $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$ != $JSCompiler_alias_NULL$$ ? $DvtChartTypeUtils$$ : 0, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
    return $DvtChartDataChangeFunnelSlice$$ && ($DvtChartDataChangeFunnelSlice$$.getAsString || $DvtChartDataChangeFunnelSlice$$.format) ? $DvtSparkChartEventManager$$.$format$($DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$) : $DvtSparkChartEventManager$$.$format$($DvtSparkChartAutomation$$)
  };
  $DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.converter;
    return!$DvtSparkChartDefaults$$ ? $JSCompiler_alias_NULL$$ : $DvtSparkChartDefaults$$.getAsString ? $DvtSparkChartDefaults$$.getAsString($DvtSparkChartEventManager$$) : $DvtSparkChartDefaults$$.format ? $DvtSparkChartDefaults$$.format($DvtSparkChartEventManager$$) : $JSCompiler_alias_NULL$$
  };
  $DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($DvtSparkChartEventManager$$) {
    if($DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$();
    return"on" == $DvtSparkChartDefaults$$.dataCursor ? $JSCompiler_alias_TRUE$$ : "off" == $DvtSparkChartDefaults$$.dataCursor ? $JSCompiler_alias_FALSE$$ : $dvt$$2$$.$Agent$.$isTouchDevice$() && $DvtChartTypeUtils$$.$isLineArea$($DvtSparkChartEventManager$$)
  };
  $DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$().dataCursorBehavior;
    return"snap" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SNAP$ : "smooth" == $DvtSparkChartEventManager$$ ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartTypeUtils$$.$isLineArea$($dvt$$2$$) ? $DvtChartDataCursor$$.$BEHAVIOR_SMOOTH$ : $DvtChartDataCursor$$.$BEHAVIOR_SNAP$
  };
  var $DvtChartTypeUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartTypeUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel stock".split(" ");
  $DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($DvtSparkChartEventManager$$) {
    return 0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartTypeUtils$$.$_SUPPORTED_TYPES$, $DvtSparkChartEventManager$$.$getType$())
  };
  $DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$().__spark
  };
  $DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($dvt$$2$$) {
    return $dvt$$2$$.$getOptions$()._isOverview
  };
  $DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($dvt$$2$$) {
    return"combo" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($dvt$$2$$) {
    return"horizontal" == $dvt$$2$$.$getOptions$().orientation && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && ($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) || $DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$))
  };
  $DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($dvt$$2$$) {
    return"polar" == $dvt$$2$$.$getOptions$().coordinateSystem
  };
  $DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($dvt$$2$$) {
    return"on" != $dvt$$2$$.$getOptions$().stack || $DvtChartAxisUtils$$.$isMixedFrequency$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($dvt$$2$$) {
    return"bar" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($dvt$$2$$) {
    return"stock" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($dvt$$2$$) {
    return"line" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($dvt$$2$$) {
    return"lineWithArea" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($dvt$$2$$) {
    return"area" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($dvt$$2$$) {
    return"scatter" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($dvt$$2$$) {
    return"bubble" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($dvt$$2$$) {
    return"pie" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($dvt$$2$$) {
    return"funnel" == $dvt$$2$$.$getType$()
  };
  $DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) || $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isStock$($dvt$$2$$) && $DvtChartDataUtils$$.$hasVolumeSeries$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) ? $JSCompiler_alias_TRUE$$ : "on" == $dvt$$2$$.$getOptions$().splitDualY && $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$) && !$DvtChartTypeUtils$$.$hasY2DataOnly$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return"bar" == $dvt$$2$$ || "line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$ || "combo" == $dvt$$2$$ || "stock" == $dvt$$2$$
  };
  $DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return"scatter" == $dvt$$2$$ || "bubble" == $dvt$$2$$
  };
  $DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($dvt$$2$$) {
    $dvt$$2$$ = $dvt$$2$$.$getType$();
    return"line" == $dvt$$2$$ || "area" == $dvt$$2$$ || "lineWithArea" == $dvt$$2$$
  };
  $DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isPie$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isFunnel$($dvt$$2$$) && !$DvtChartTypeUtils$$.$isPolar$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isVertical$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "y" != $DvtSparkChartEventManager$$
  };
  $DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartEventUtils$$.$getZoomDirection$($dvt$$2$$);
    return $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$) && $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$) || $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && "x" != $DvtSparkChartEventManager$$
  };
  $DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($dvt$$2$$) {
    return!("pie" == $dvt$$2$$.$getType$() || "funnel" == $dvt$$2$$.$getType$())
  };
  $DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$) == $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($dvt$$2$$) {
    return!$DvtChartTypeUtils$$.$isDualY$($dvt$$2$$) ? $JSCompiler_alias_FALSE$$ : 0 < $DvtChartDataUtils$$.$getY2SeriesCount$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$hasY2Data$($dvt$$2$$)
  };
  $DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "bar")
  };
  $DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "candlestick")
  };
  $DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "line")
  };
  $DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "area")
  };
  $DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($dvt$$2$$) {
    return $DvtChartTypeUtils$$.$_hasSeriesType$($dvt$$2$$, "lineWithArea")
  };
  $DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if($DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      for(var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$;$DvtSparkChartAutomation$$++) {
        if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartAutomation$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartAutomation$$) == $DvtSparkChartEventManager$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if("centeredSegmented" == $DvtSparkChartAutomation$$ || "centeredStepped" == $DvtSparkChartAutomation$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($dvt$$2$$) {
    if(!$DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$;$DvtSparkChartDefaults$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartDefaults$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtSparkChartDefaults$$)) {
        var $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtSparkChartDefaults$$);
        if("segmented" == $DvtSparkChartAutomation$$ || "stepped" == $DvtSparkChartAutomation$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  $DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getOptions$();
    return $DvtChartTextUtils$$.$areTitlesRendered$($dvt$$2$$) || "off" != $DvtSparkChartEventManager$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y") || "off" != $DvtSparkChartEventManager$$.plotArea.rendered ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
  };
  var $DvtChartMarkerUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartMarkerUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$ = 6;
  $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ = 0.5;
  $DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, "z"), $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.min, $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.max, $DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$.$_MIN_BUBBLE_SIZE$, $DvtSparkChartAutomation$$ = $DvtChartMarkerUtils$$.$_MAX_BUBBLE_SIZE_RATIO$ * Math.min($DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), 
    $DvtChartDataChangeRangeMarker$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = 0;$DvtChartPieUtils$$ < $DvtChartDataChangeFunnelSlice$$;$DvtChartPieUtils$$++) {
      if($DvtChartDataChangeRangeMarker$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartPieUtils$$)) {
        for(var $DvtChartDataChangeMarker$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtChartPieUtils$$), $DvtChartDataChangeLineArea$$ = $DvtChartDataChangeMarker$$.items ? $DvtChartDataChangeMarker$$.items.length : 0, $DvtChartLineArea$$ = 0;$DvtChartLineArea$$ < $DvtChartDataChangeLineArea$$;$DvtChartLineArea$$++) {
          var $DvtChartRenderer$$ = $DvtChartDataChangeMarker$$.items[$DvtChartLineArea$$];
          $DvtChartRenderer$$ && ($DvtChartRenderer$$.markerSize = $dvt$$2$$.$LayoutUtils$.$getBubbleSize$($DvtChartRenderer$$.z, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtSparkChartAutomation$$))
        }
      }
    }
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelInfo$$ = Infinity, $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getRadius$()) : ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$w$ - 2.4 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "y"), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$h$ - 1.6 * $DvtChartAxisUtils$$.$getTickLabelHeight$($DvtSparkChartEventManager$$, "x"));
    $DvtChartPieLabelInfo$$ -= 0.5 * $DvtSparkChartAutomation$$;
    $DvtChartPieLabelUtils$$ -= 0.5 * $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_optionsCache$;
    $DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "x");
    $DvtSparkChartAutomation$$._xAxisBubbleRatio = $DvtChartPieRenderUtils$$ / $DvtChartPieLabelInfo$$;
    $DvtChartPieLabelInfo$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($DvtSparkChartEventManager$$, "y");
    $DvtSparkChartAutomation$$._yAxisBubbleRatio = $DvtChartPieLabelInfo$$ / $DvtChartPieLabelUtils$$
  };
  $DvtChartMarkerUtils$$.$getBubbleAxisRadius$ = function $$DvtChartMarkerUtils$$$$getBubbleAxisRadius$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return!$DvtSparkChartDefaults$$ ? 0 : $DvtSparkChartDefaults$$ / 2 * $dvt$$2$$.$_optionsCache$["_" + $DvtSparkChartEventManager$$ + "AxisBubbleRatio"]
  };
  $DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$()[$DvtSparkChartDefaults$$ + "Axis"], $DvtChartStyleUtils$$ = $DvtChartAxisUtils$$.$isLog$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = !$DvtChartStyleUtils$$ && "zero" == $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, 
    $JSCompiler_alias_TRUE$$), $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.min;
    $DvtChartPieLabelInfo$$ == $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$ ? Math.min(0, $DvtChartTypeUtils$$.min) : $DvtChartTypeUtils$$.min);
    $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.max;
    $DvtSparkChartAutomation$$ == $JSCompiler_alias_NULL$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$ ? Math.max(0, $DvtChartTypeUtils$$.max) : $DvtChartTypeUtils$$.max);
    return $DvtChartStyleUtils$$ && 0 < $DvtSparkChartAutomation$$ && 0 < $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$ == $DvtChartPieLabelInfo$$ ? 6 : $dvt$$2$$.$Math$.$log10$($DvtSparkChartAutomation$$ / $DvtChartPieLabelInfo$$) : $DvtSparkChartAutomation$$ == $DvtChartPieLabelInfo$$ ? 60 : $DvtSparkChartAutomation$$ - $DvtChartPieLabelInfo$$
  };
  $DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareSize$)
  };
  $DvtChartMarkerUtils$$.$sortMarkerInfos$ = function $$DvtChartMarkerUtils$$$$sortMarkerInfos$$($dvt$$2$$) {
    $dvt$$2$$.sort($DvtChartMarkerUtils$$.$_compareInfoSize$)
  };
  $DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.$getSize$() - $dvt$$2$$.$getSize$()
  };
  $DvtChartMarkerUtils$$.$_compareInfoSize$ = function $$DvtChartMarkerUtils$$$$_compareInfoSize$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    return $DvtSparkChartEventManager$$.size - $dvt$$2$$.size
  };
  $DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$ / 2;
    $DvtSparkChartAutomation$$ = Math.max(Math.floor($DvtSparkChartEventManager$$ - $DvtChartStyleUtils$$), 0);
    var $DvtChartPieLabelUtils$$ = Math.max(Math.floor($DvtSparkChartDefaults$$ - $DvtChartStyleUtils$$), 0);
    $DvtSparkChartEventManager$$ = Math.max(Math.ceil($DvtSparkChartEventManager$$ + $DvtChartStyleUtils$$), 0);
    $DvtSparkChartDefaults$$ = Math.max(Math.ceil($DvtSparkChartDefaults$$ + $DvtChartStyleUtils$$), 0);
    return $dvt$$2$$.$isObscured$($DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = 0.4 * $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = Math.max(Math.round($DvtSparkChartEventManager$$ - $DvtChartPieLabelUtils$$), 0);
    $DvtSparkChartEventManager$$ = Math.max(Math.round($DvtSparkChartEventManager$$ + $DvtChartPieLabelUtils$$), 0);
    var $DvtChartTypeUtils$$ = Math.max(Math.round($DvtSparkChartDefaults$$ - $DvtChartPieLabelUtils$$), 0);
    $DvtSparkChartDefaults$$ = Math.max(Math.round($DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$), 0);
    $dvt$$2$$.$obscure$($DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$)
  };
  var $DvtChartPieUtils$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
  $DvtChartPieUtils$$.$getSliceId$ = function $$DvtChartPieUtils$$$$getSliceId$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.id : $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeries$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$($DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)
  };
  $DvtChartPieUtils$$.$getOtherSliceId$ = function $$DvtChartPieUtils$$$$getOtherSliceId$$($dvt$$2$$) {
    $dvt$$2$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, 0);
    return new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, $dvt$$2$$)
  };
  $DvtChartPieUtils$$.$getRenderedSeriesIndices$ = function $$DvtChartPieUtils$$$$getRenderedSeriesIndices$$($dvt$$2$$) {
    return $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$rendered$
  };
  $DvtChartPieUtils$$.$hasOtherSeries$ = function $$DvtChartPieUtils$$$$hasOtherSeries$$($dvt$$2$$) {
    return 0 < $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$.length
  };
  $DvtChartPieUtils$$.$getOtherValue$ = function $$DvtChartPieUtils$$$$getOtherValue$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieLabelUtils$$) && ($DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartPieLabelUtils$$, 0), 0 < $DvtChartPieLabelUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartPieLabelUtils$$))
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieUtils$$.$getOtherSliceIds$ = function $$DvtChartPieUtils$$$$getOtherSliceIds$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($dvt$$2$$).$other$, $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      $DvtSparkChartDefaults$$.push($DvtChartPieUtils$$.$getSliceId$($dvt$$2$$, $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$]))
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieUtils$$.$isOtherSliceSelected$ = function $$DvtChartPieUtils$$$$isOtherSliceSelected$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$), $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      for(var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartPieLabelUtils$$ = $JSCompiler_alias_FALSE$$, $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartTypeUtils$$++) {
        if($DvtSparkChartEventManager$$[$DvtChartTypeUtils$$].id && $DvtChartStyleUtils$$.getId() === $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$].id || $DvtChartStyleUtils$$.$getSeries$() === $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$].series && $DvtChartStyleUtils$$.$getGroup$() === $DvtSparkChartEventManager$$[$DvtChartTypeUtils$$].group) {
          $DvtChartPieLabelUtils$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
      if(!$DvtChartPieLabelUtils$$) {
        return $JSCompiler_alias_FALSE$$
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtChartPieUtils$$.$_getSeriesIndicesArrays$ = function $$DvtChartPieUtils$$$$_getSeriesIndicesArrays$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartStyleUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.otherThreshold * $DvtChartPieUtils$$.$getTotalValue$($dvt$$2$$), $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtSparkChartAutomation$$;$DvtChartTypeUtils$$++) {
      var $DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartTypeUtils$$, 0);
      0 < $DvtChartPieLabelUtils$$ && $DvtChartPieLabelInfo$$ < $DvtChartPieLabelUtils$$ ? $DvtSparkChartDefaults$$.push($DvtChartTypeUtils$$) : $DvtSparkChartEventManager$$.push($DvtChartTypeUtils$$)
    }
    "ascending" == $DvtChartStyleUtils$$.sorting ? $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0)
    }) : ("on" == $DvtChartStyleUtils$$.sorting || "descending" == $DvtChartStyleUtils$$.sorting) && $DvtSparkChartEventManager$$.sort(function($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
      return $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartDefaults$$, 0) - $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, 0)
    });
    return{$rendered$:$DvtSparkChartEventManager$$, $other$:$DvtSparkChartDefaults$$}
  };
  $DvtChartPieUtils$$.$getTotalValue$ = function $$DvtChartPieUtils$$$$getTotalValue$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtSparkChartDefaults$$ = 0, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartAutomation$$, 0);
      0 < $DvtChartStyleUtils$$ && ($DvtSparkChartDefaults$$ += $DvtChartStyleUtils$$)
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieUtils$$.$getSliceExplode$ = function $$DvtChartPieUtils$$$$getSliceExplode$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.pieSliceExplode ? $DvtSparkChartDefaults$$.pieSliceExplode : 0
  };
  $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtChartPieUtils$$$$getOtherSliceShowPopupBehaviors$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($dvt$$2$$);
    if($DvtSparkChartEventManager$$ && 1 <= $DvtSparkChartEventManager$$.length) {
      return $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getSeriesIndex$($dvt$$2$$, $DvtSparkChartEventManager$$[0].$getSeries$()), $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, 0)._id, $dvt$$2$$.$getShowPopupBehaviors$($DvtSparkChartEventManager$$)
    }
  };
  $DvtChartPieUtils$$.$getSliceBySeriesIndex$ = function $$DvtChartPieUtils$$$$getSliceBySeriesIndex$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    for(var $DvtSparkChartDefaults$$ = $dvt$$2$$.$pieChart$.$_slices$, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      if($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$getSeriesIndex$() == $DvtSparkChartEventManager$$) {
        return $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$]
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieRenderUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieRenderUtils$$.$TWOD$ = "2D";
  $DvtChartPieRenderUtils$$.$THREED$ = "3D";
  $DvtChartPieRenderUtils$$.$CRUST$ = "CRUST";
  $DvtChartPieRenderUtils$$.$SIDE$ = "SIDE";
  $DvtChartPieRenderUtils$$.$BORDER$ = "BORDER";
  $DvtChartPieRenderUtils$$.$SURFACE_CRUST$ = 0;
  $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ = 1;
  $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
  $DvtChartPieRenderUtils$$.$SURFACE_TOP$ = 3;
  $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtChartPieRenderUtils$$$$reflectAngleOverYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$Math$.$degreesToRads$(360 - $DvtSparkChartEventManager$$);
    return{x:$DvtSparkChartDefaults$$ + Math.cos($DvtSparkChartEventManager$$) * $DvtChartStyleUtils$$, y:$DvtSparkChartAutomation$$ + Math.sin($DvtSparkChartEventManager$$) * $DvtChartPieLabelUtils$$}
  };
  $DvtChartPieRenderUtils$$.$getGradientColors$ = function $$DvtChartPieRenderUtils$$$$getGradientColors$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$THREED$) {
        return[$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -0.04, -0.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -0.09, 0.04)]
      }
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return[$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -0.04, -0.05), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, 0, -0.14)]
      }
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
        return[$dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -0.1, 0.06), $dvt$$2$$.$ColorUtils$.$adjustHSL$($DvtSparkChartEventManager$$, -0.04, -0.05)]
      }
    }else {
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
        return $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$[0] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, 0.1)), $DvtSparkChartDefaults$$[1] = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$[2] = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, 0.9)), $DvtSparkChartDefaults$$
      }
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
        return["#FFFFFF", "#000000", "#000000"]
      }
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getDarker$($DvtSparkChartEventManager$$, 0.88));
      var $DvtChartStyleUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, 0.05)), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, 0.15));
      $DvtSparkChartEventManager$$ = $dvt$$2$$.$ColorUtils$.$getRGB$($dvt$$2$$.$ColorUtils$.$getPastel$($DvtSparkChartEventManager$$, 0.35));
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
        return[$DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$]
      }
      if("SIDE" == $DvtSparkChartDefaults$$) {
        return[$DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$]
      }
      if("3D" == $DvtSparkChartDefaults$$) {
        return[$DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$]
      }
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientAlphas$ = function $$DvtChartPieRenderUtils$$$$getGradientAlphas$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$ == $JSCompiler_alias_NULL$$ || isNaN($dvt$$2$$) || 0 == $dvt$$2$$ ? 1 : $dvt$$2$$;
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return[$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return[$DvtSparkChartDefaults$$ / 1.59375, $DvtSparkChartDefaults$$ / 5.3125, $DvtSparkChartDefaults$$ / 2.65625]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return[$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return[$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return[$DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$]
    }
  };
  $DvtChartPieRenderUtils$$.$getGradientRatios$ = function $$DvtChartPieRenderUtils$$$$getGradientRatios$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if($DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$ != $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$) {
      return[0, 1]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return[0.2, 0.5, 1]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return[0, 0.5, 1]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return[0, 0.29, 0.55, 0.84, 1]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return[0, 0.43, 0.91, 1]
    }
    if($DvtSparkChartEventManager$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return[0, 1]
    }
  };
  $DvtChartPieRenderUtils$$.$createTopSurface$ = function $$DvtChartPieRenderUtils$$$$createTopSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getInnerRadius$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.$is3D$() || $DvtSparkChartEventManager$$.$getSliceGaps$() > Math.sin($dvt$$2$$.$Math$.$degreesToRads$($DvtSparkChartEventManager$$.$getAngleExtent$())) * 
    $DvtSparkChartEventManager$$.$_radiusX$ + 1 ? $JSCompiler_alias_NULL$$ : $DvtSparkChartEventManager$$.$getSliceGaps$(), $DvtChartPieLabelUtils$$ = new $DvtChartSelectableWedge$$($DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$.x, $DvtChartTypeUtils$$.y, $DvtSparkChartEventManager$$.$_radiusX$, $DvtSparkChartEventManager$$.$_radiusY$, $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtSparkChartEventManager$$.$getAngleExtent$(), $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$), $DvtChartTypeUtils$$ = 
    $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartAutomation$$.$chart$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartAutomation$$.$chart$), $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$(), $JSCompiler_alias_NULL$$, $DvtSparkChartEventManager$$.$getBorderWidth$());
    $DvtChartPieLabelUtils$$.$setStyleProperties$($DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartEventManager$$.$getFillColor$(), $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$);
    $DvtChartPieLabelUtils$$ = [$DvtChartPieLabelUtils$$];
    if(!$DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtSparkChartAutomation$$.$getSkin$() == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && $DvtSparkChartAutomation$$.$is3D$() && 0 < $DvtSparkChartEventManager$$.getDepth() && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($DvtSparkChartAutomation$$.$chart$) && (180 <= $DvtSparkChartEventManager$$.$getAngleStart$() || 180 <= $DvtSparkChartEventManager$$.$getAngleStart$() + $DvtSparkChartEventManager$$.$getAngleExtent$() || 360 == $DvtSparkChartEventManager$$.$getAngleExtent$())) {
      $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$_createGradientPieBorder$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartPieLabelUtils$$.push($DvtSparkChartAutomation$$)
    }
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$);
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartPieRenderUtils$$.$associate$ = function $$DvtChartPieRenderUtils$$$$associate$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if($DvtSparkChartEventManager$$) {
      for(var $DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $dvt$$2$$.$_pieChart$.$chart$.$getEventManager$().$associate$($DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $dvt$$2$$)
      }
    }
  };
  $DvtChartPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtChartPieRenderUtils$$$$_createGradientPieBorder$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$BORDER$, $DvtChartStyleUtils$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartAutomation$$), $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$.$getBounds$(), $DvtChartStyleUtils$$ = 
    new $dvt$$2$$.$LinearGradientStroke$(120, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$);
    $DvtChartStyleUtils$$.$setWidth$(1);
    $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$();
    $DvtSparkChartAutomation$$ = 180 > $DvtChartPieLabelUtils$$ ? 180 - $DvtChartPieLabelUtils$$ : 0;
    $DvtChartPieLabelUtils$$ = 0 < $DvtSparkChartAutomation$$ ? 180 : $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getAngleExtent$() - $DvtSparkChartAutomation$$;
    360 < $DvtChartPieLabelUtils$$ + $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = 360 - $DvtChartPieLabelUtils$$);
    var $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Arc$($DvtChartTypeUtils$$.$getCtx$(), $DvtChartPieLabelInfo$$.x, $DvtChartPieLabelInfo$$.y, $DvtChartTypeUtils$$.$_radiusX$, $DvtChartTypeUtils$$.$_radiusY$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$Arc$.OPEN);
    $DvtChartPieLabelUtils$$.$setStroke$($DvtChartStyleUtils$$);
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartPieRenderUtils$$.$createLateralSurface$ = function $$DvtChartPieRenderUtils$$$$createLateralSurface$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if(0 == $DvtSparkChartEventManager$$.$getAngleExtent$()) {
      return[]
    }
    var $DvtChartStyleUtils$$ = [];
    if(0 < $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$())) {
      if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
        $DvtChartStyleUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$))
      }else {
        if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_CRUST$) {
          for(var $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$.$_createCrustPathCommands$($DvtSparkChartEventManager$$), $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.length, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartTypeUtils$$;$DvtChartPieLabelInfo$$++) {
            $DvtChartStyleUtils$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$], $DvtSparkChartAutomation$$))
          }
        }
      }
    }
    $DvtChartPieRenderUtils$$.$associate$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$);
    return $DvtChartStyleUtils$$
  };
  $DvtChartPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtChartPieRenderUtils$$$$generateLateralGradientFill$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.$getSkin$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$CRUST$ ? $DvtSparkChartEventManager$$.getDepth() : 0, $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ ? 0 : 270, $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($dvt$$2$$.$ColorUtils$.$getRGB$($DvtSparkChartEventManager$$.$getFillColor$()), 
    $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($dvt$$2$$.$ColorUtils$.$getAlpha$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartDefaults$$), $DvtChartMarkerUtils$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$), $DvtChartPieUtils$$ = $JSCompiler_alias_NULL$$;
    $DvtChartStyleUtils$$ == $dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$ && ($DvtChartPieUtils$$ = [Math.floor($DvtSparkChartEventManager$$.$getCenter$().x - $DvtSparkChartAutomation$$.$_radiusX$), Math.floor($DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$.$_radiusY$) + $DvtChartPieLabelUtils$$, Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusX$), Math.ceil(2 * $DvtSparkChartAutomation$$.$_radiusY$)]);
    return new $dvt$$2$$.$LinearGradientFill$($DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$)
  };
  $DvtChartPieRenderUtils$$.$_generateLateralShape$ = function $$DvtChartPieRenderUtils$$$$_generateLateralShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_pieChart$.$getCtx$();
    if($DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
      var $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getAngleStart$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getAngleExtent$();
      $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCenter$().x;
      var $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getCenter$().y, $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartPieUtils$$ = $DvtSparkChartEventManager$$.$_radiusY$, $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartEventManager$$.getDepth();
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ ? $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartTypeUtils$$ + $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$) : $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartTypeUtils$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$);
      $DvtSparkChartDefaults$$ = $DvtChartPieRenderUtils$$.$_generateInnerPoints$($DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtChartDataChangeRangeMarker$$);
      $DvtSparkChartAutomation$$ = [];
      for($DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtSparkChartDefaults$$.length;$DvtChartDataChangeFunnelSlice$$++) {
        $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartDataChangeFunnelSlice$$].x, $DvtSparkChartDefaults$$[$DvtChartDataChangeFunnelSlice$$].y)
      }
      $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Polygon$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$);
      $DvtChartPieLabelUtils$$.$setFill$($DvtChartStyleUtils$$);
      $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$());
      return $DvtChartPieLabelUtils$$
    }
    return $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Path$($DvtChartPieLabelUtils$$, $JSCompiler_alias_NULL$$), $DvtChartPieLabelUtils$$.$setCmds$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$.$setTranslate$($DvtSparkChartEventManager$$.$_explodeOffsetX$, $DvtSparkChartEventManager$$.$_explodeOffsetY$), $DvtChartPieLabelUtils$$.$setFill$($DvtChartStyleUtils$$), $DvtSparkChartEventManager$$.$getStrokeColor$() && $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtSparkChartEventManager$$.$getStrokeColor$()), 
    $DvtChartPieLabelUtils$$) : $JSCompiler_alias_NULL$$
  };
  $DvtChartPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtChartPieRenderUtils$$$$_createCrustPathCommands$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$getAngleStart$(), $DvtSparkChartDefaults$$ = $dvt$$2$$.$getAngleExtent$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$ + $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$ = $dvt$$2$$.$getCenter$().x, $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getCenter$().y, $DvtChartTypeUtils$$ = $dvt$$2$$.$_radiusX$, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$_radiusY$;
    $dvt$$2$$ = $dvt$$2$$.getDepth();
    var $DvtChartDataChangeFunnelSlice$$ = [];
    180 > $DvtSparkChartEventManager$$ && 360 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360)), $DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, 180))) : 360 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartEventManager$$, 
    360 - $DvtSparkChartEventManager$$)), $DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 360, $DvtSparkChartAutomation$$ - 360))) : 180 > $DvtSparkChartEventManager$$ && 180 < $DvtSparkChartAutomation$$ ? ($DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, 
    $dvt$$2$$, $DvtSparkChartEventManager$$, 180 - $DvtSparkChartEventManager$$)), $DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 180, $DvtSparkChartAutomation$$ - 180))) : $DvtChartDataChangeFunnelSlice$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$));
    return $DvtChartDataChangeFunnelSlice$$
  };
  $DvtChartPieRenderUtils$$.$_makeOuterPath$ = function $$DvtChartPieRenderUtils$$$$_makeOuterPath$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtChartPieLabelInfo$$);
    var $DvtChartDataChangeFunnelSlice$$ = -($dvt$$2$$.$Math$.$degreesToRads$($DvtChartTypeUtils$$) + $DvtChartPieLabelInfo$$);
    $DvtChartTypeUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartTypeUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    $DvtSparkChartEventManager$$ += Math.cos($DvtChartDataChangeFunnelSlice$$) * $DvtSparkChartAutomation$$;
    $DvtSparkChartDefaults$$ += Math.sin($DvtChartDataChangeFunnelSlice$$) * $DvtChartStyleUtils$$;
    $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartTypeUtils$$.x, $DvtChartTypeUtils$$.y);
    $DvtChartDataChangeFunnelSlice$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartDataChangeFunnelSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$ + $DvtChartPieLabelUtils$$);
    $DvtChartDataChangeFunnelSlice$$ += $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$, 1, $DvtChartTypeUtils$$.x, $DvtChartTypeUtils$$.y + $DvtChartPieLabelUtils$$);
    return $DvtChartDataChangeFunnelSlice$$ += $dvt$$2$$.$PathUtils$.lineTo($DvtChartTypeUtils$$.x, $DvtChartTypeUtils$$.y)
  };
  $DvtChartPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtChartPieRenderUtils$$$$_generateInnerPoints$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = [];
    $DvtChartPieLabelUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$});
    $DvtChartPieLabelUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$});
    $DvtChartPieLabelUtils$$.push({x:$DvtSparkChartDefaults$$, y:$DvtSparkChartAutomation$$ + $DvtChartStyleUtils$$});
    $DvtChartPieLabelUtils$$.push({x:$dvt$$2$$, y:$DvtSparkChartEventManager$$ + $DvtChartStyleUtils$$});
    return $DvtChartPieLabelUtils$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelInfo$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelInfo$$.prototype.$_init$ = function $$DvtChartPieLabelInfo$$$$$_init$$() {
    this.$_slice$ = this.$_sliceLabel$ = $JSCompiler_alias_NULL$$;
    this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
    this.$_hasFeeler$ = $JSCompiler_alias_FALSE$$;
    this.$_minY$ = this.$_maxY$ = -1
  };
  $DvtChartPieLabelInfo$$.prototype.$getAngle$ = $JSCompiler_get$$("$_angle$");
  $DvtChartPieLabelInfo$$.prototype.$setAngle$ = $JSCompiler_set$$("$_angle$");
  $DvtChartPieLabelInfo$$.prototype.getHeight = $JSCompiler_get$$("$_height$");
  $DvtChartPieLabelInfo$$.prototype.$setHeight$ = $JSCompiler_set$$("$_height$");
  $DvtChartPieLabelInfo$$.prototype.$setMaxY$ = $JSCompiler_set$$("$_maxY$");
  $DvtChartPieLabelInfo$$.prototype.$setMinY$ = $JSCompiler_set$$("$_minY$");
  $DvtChartPieLabelInfo$$.prototype.$boundY$ = function $$DvtChartPieLabelInfo$$$$$boundY$$($dvt$$2$$) {
    this.$_minY$ <= this.$_maxY$ && ($dvt$$2$$ = Math.max($dvt$$2$$, this.$_minY$), $dvt$$2$$ = Math.min($dvt$$2$$, this.$_maxY$));
    return $dvt$$2$$
  };
  $DvtChartPieLabelInfo$$.prototype.$setHasFeeler$ = $JSCompiler_set$$("$_hasFeeler$");
  $DvtChartPieLabelInfo$$.prototype.$getPosition$ = $JSCompiler_get$$("$_position$");
  $DvtChartPieLabelInfo$$.prototype.$setPosition$ = $JSCompiler_set$$("$_position$");
  $DvtChartPieLabelInfo$$.prototype.$setSlice$ = $JSCompiler_set$$("$_slice$");
  $DvtChartPieLabelInfo$$.prototype.$setSliceLabel$ = $JSCompiler_set$$("$_sliceLabel$");
  $DvtChartPieLabelInfo$$.prototype.getWidth = $JSCompiler_get$$("$_width$");
  $DvtChartPieLabelInfo$$.prototype.$setWidth$ = $JSCompiler_set$$("$_width$");
  $DvtChartPieLabelInfo$$.prototype.$getX$ = $JSCompiler_get$$("$_x$");
  $DvtChartPieLabelInfo$$.prototype.$setX$ = $JSCompiler_set$$("$_x$");
  $DvtChartPieLabelInfo$$.prototype.$getY$ = $JSCompiler_get$$("$_y$");
  $DvtChartPieLabelInfo$$.prototype.$setY$ = $JSCompiler_set$$("$_y$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPieLabelUtils$$, $dvt$$2$$.$Obj$);
  $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
  $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
  $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
  $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
  $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
  $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
  $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
  $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
  $DvtChartPieLabelUtils$$.$_NO_COLLISION$ = 0;
  $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ = 1;
  $DvtChartPieLabelUtils$$.$_ALL_COLLISION$ = 2;
  $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$layoutLabelsAndFeelers$$($dvt$$2$$) {
    $DvtChartPieLabelUtils$$.$_layoutInsideLabels$($dvt$$2$$, "auto" == $dvt$$2$$.$getLabelPosition$());
    $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($dvt$$2$$)
  };
  $DvtChartPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtChartPieLabelUtils$$$$_layoutInsideLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_slices$, $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartStyleUtils$$++) {
      var $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$], $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getSeriesLabelPosition$($DvtChartTypeUtils$$.$getSeriesIndex$());
      if(!("none" == $DvtChartPieLabelInfo$$ || "outsideSlice" == $DvtChartPieLabelInfo$$)) {
        var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$getAngleStart$() + $DvtChartTypeUtils$$.$getAngleExtent$() / 2, $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$getInnerRadius$(), $DvtChartPieUtils$$ = $DvtChartTypeUtils$$.$getCenter$(), $DvtChartDataChangeRangeMarker$$ = 0, $DvtChartDataChangeMarker$$ = 0, $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartTypeUtils$$, $JSCompiler_alias_TRUE$$);
        1 == $DvtSparkChartAutomation$$.length ? ($DvtChartDataChangeRangeMarker$$ = $DvtChartPieUtils$$.x, $DvtChartDataChangeMarker$$ = $DvtChartPieUtils$$.y) : ($DvtChartDataChangeRangeMarker$$ = Math.max(0.45, 0.65 - 0.45 * $DvtChartMarkerUtils$$ / Math.max($DvtChartTypeUtils$$.$_radiusY$, 0.001)), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartDataChangeFunnelSlice$$, $DvtChartPieUtils$$.x, $DvtChartPieUtils$$.y, $DvtChartMarkerUtils$$ + ($DvtChartTypeUtils$$.$_radiusX$ - 
        $DvtChartMarkerUtils$$) * $DvtChartDataChangeRangeMarker$$, $DvtChartMarkerUtils$$ + ($DvtChartTypeUtils$$.$_radiusY$ - $DvtChartMarkerUtils$$) * $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeFunnelSlice$$.x, $DvtChartDataChangeMarker$$ = $DvtChartDataChangeFunnelSlice$$.y);
        $DvtChartDataChangeLineArea$$.$setX$($DvtChartDataChangeRangeMarker$$);
        $DvtChartDataChangeLineArea$$.$setY$($DvtChartDataChangeMarker$$);
        $DvtChartDataChangeLineArea$$.$alignMiddle$();
        $DvtChartDataChangeLineArea$$.$alignCenter$();
        for(var $DvtChartDataChangeFunnelSlice$$ = $dvt$$2$$.$TextUtils$.$guessTextDimensions$($DvtChartDataChangeLineArea$$), $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$ = $DvtChartDataChangeRangeMarker$$, $DvtChartLineArea$$ = $DvtChartDataChangeMarker$$ - $DvtChartDataChangeFunnelSlice$$.$h$ / 2, $DvtChartDataChangeMarker$$ = $DvtChartDataChangeMarker$$ + $DvtChartDataChangeFunnelSlice$$.$h$ / 2;$DvtChartTypeUtils$$.contains($DvtChartMarkerUtils$$, $DvtChartLineArea$$) && $DvtChartTypeUtils$$.contains($DvtChartMarkerUtils$$, 
        $DvtChartDataChangeMarker$$);) {
          $DvtChartMarkerUtils$$--
        }
        for(;$DvtChartTypeUtils$$.contains($DvtChartPieUtils$$, $DvtChartLineArea$$) && $DvtChartTypeUtils$$.contains($DvtChartPieUtils$$, $DvtChartDataChangeMarker$$);) {
          $DvtChartPieUtils$$++
        }
        $DvtChartMarkerUtils$$ = Math.ceil($DvtChartMarkerUtils$$ + 3);
        $DvtChartPieUtils$$ = Math.floor($DvtChartPieUtils$$ - 3);
        $DvtChartDataChangeRangeMarker$$ = 2 * Math.min($DvtChartDataChangeRangeMarker$$ - $DvtChartMarkerUtils$$, $DvtChartPieUtils$$ - $DvtChartDataChangeRangeMarker$$);
        $DvtChartDataChangeRangeMarker$$ < $DvtChartDataChangeFunnelSlice$$.$w$ && ($DvtChartDataChangeLineArea$$.$setX$(($DvtChartMarkerUtils$$ + $DvtChartPieUtils$$) / 2), $DvtChartDataChangeRangeMarker$$ = $DvtChartPieUtils$$ - $DvtChartMarkerUtils$$);
        $DvtSparkChartDefaults$$ && "center" != $DvtChartPieLabelInfo$$ ? $DvtChartDataChangeLineArea$$.$getDimensions$().$w$ < $DvtChartDataChangeRangeMarker$$ ? $DvtChartTypeUtils$$.$setSliceLabel$($DvtChartDataChangeLineArea$$) : $DvtChartTypeUtils$$.$setSliceLabel$($JSCompiler_alias_NULL$$) : ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCtx$().$_stage$, $DvtChartDataChangeMarker$$ = !$DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$) ? $DvtChartDataChangeLineArea$$.$getTextString$().length : 
        $JSCompiler_alias_NULL$$, $dvt$$2$$.$TextUtils$.$fitText$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeFunnelSlice$$.$h$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeMarker$$) && ($DvtChartPieLabelInfo$$.removeChild($DvtChartDataChangeLineArea$$), $DvtChartTypeUtils$$.$setSliceLabel$($DvtChartDataChangeLineArea$$)));
        $DvtChartTypeUtils$$.$_sliceLabel$ != $JSCompiler_alias_NULL$$ && $DvtChartTypeUtils$$.$setNoOutsideFeeler$()
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = [], $DvtSparkChartDefaults$$ = [], $DvtSparkChartDefaults$$ = $DvtChartPieLabelUtils$$.$_generateInitialLayout$($dvt$$2$$), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$[0], $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$[1], $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($dvt$$2$$, 
    $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $DvtSparkChartAutomation$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartStyleUtils$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
    $DvtSparkChartAutomation$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartStyleUtils$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  };
  $DvtChartPieLabelUtils$$.$_createLabel$ = function $$DvtChartPieLabelUtils$$$$_createLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_pieChart$, $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.$getCtx$(), $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$OutputText$($DvtChartStyleUtils$$) : new $dvt$$2$$.$MultilineText$($DvtChartStyleUtils$$), $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$.$getOptions$().styleDefaults, $DvtChartPieLabelInfo$$ = [$DvtChartTypeUtils$$.dataLabelStyle, new $dvt$$2$$.$CSSStyle$($DvtChartTypeUtils$$.sliceLabelStyle)];
    ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartAutomation$$.$chart$, $DvtSparkChartEventManager$$.$getSeriesIndex$(), 0)) && $DvtChartPieLabelInfo$$.push(new $dvt$$2$$.$CSSStyle$($DvtSparkChartAutomation$$.labelStyle));
    $DvtSparkChartAutomation$$ = $dvt$$2$$.$CSSStyle$.$mergeStyles$($DvtChartPieLabelInfo$$);
    $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$getStyle$("color") != $JSCompiler_alias_NULL$$;
    $DvtSparkChartDefaults$$ && (!$DvtChartPieLabelInfo$$ || $dvt$$2$$.$Agent$.$isHighContrast$()) ? ($DvtChartPieLabelInfo$$ = $dvt$$2$$.$ColorUtils$.$getContrastingTextColor$($DvtSparkChartEventManager$$.$getFillColor$()), $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartPieLabelInfo$$)) : $DvtChartPieLabelInfo$$ || $DvtSparkChartAutomation$$.$setStyle$("color", $DvtChartTypeUtils$$._defaultSliceLabelColor);
    $DvtChartStyleUtils$$.$setCSSStyle$($DvtSparkChartAutomation$$);
    $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$.sliceLabelType);
    $DvtChartStyleUtils$$.$setTextString$($DvtChartTypeUtils$$);
    $DvtSparkChartEventManager$$.$setSliceLabelString$($DvtChartTypeUtils$$);
    return $DvtChartStyleUtils$$
  };
  $DvtChartPieLabelUtils$$.$createPieCenter$ = function $$DvtChartPieLabelUtils$$$$createPieCenter$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$getPieCenterOptions$($DvtSparkChartDefaults$$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.label, $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.renderer, $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getLabelPosition$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.tooltip, 
    $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$getCenter$(), $DvtChartPieUtils$$ = $DvtSparkChartEventManager$$.$getInnerRadius$();
    if($DvtChartTypeUtils$$ || $DvtChartPieLabelInfo$$) {
      var $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartEventManager$$.$_radiusX$, $DvtChartPieUtils$$ = 0 < $DvtChartPieUtils$$ ? $DvtChartPieUtils$$ : "outsideSlice" == $DvtChartPieRenderUtils$$ ? 0.9 * $DvtChartDataChangeRangeMarker$$ : 0.5 * $DvtChartDataChangeRangeMarker$$, $DvtChartPieRenderUtils$$ = $DvtChartPieUtils$$ * Math.sqrt(2);
      $DvtChartTypeUtils$$ && ($DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$MultilineText$($DvtSparkChartAutomation$$), $DvtChartDataChangeRangeMarker$$.$setCSSStyle$($DvtChartStyleUtils$$.labelStyle), "number" === typeof $DvtChartTypeUtils$$ && ($DvtChartTypeUtils$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartTypeUtils$$, $DvtChartTypeUtils$$, 0)), $DvtChartDataChangeRangeMarker$$.$setTextString$($DvtChartTypeUtils$$), 
      $dvt$$2$$.$TextUtils$.$fitText$($DvtChartDataChangeRangeMarker$$, $DvtChartPieRenderUtils$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$) && ($DvtChartStyleUtils$$ = $DvtChartDataChangeRangeMarker$$.$getDimensions$(), $DvtChartDataChangeRangeMarker$$.$setY$($DvtChartMarkerUtils$$.y - $DvtChartStyleUtils$$.$h$ / 2), $DvtChartDataChangeRangeMarker$$.$setX$($DvtChartMarkerUtils$$.x), $DvtChartDataChangeRangeMarker$$.$alignCenter$(), $DvtChartDataChangeRangeMarker$$.$isTruncated$() && 
      !$DvtChartDataChangeFunnelSlice$$ && $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartDataChangeRangeMarker$$, new $dvt$$2$$.$SimpleObjPeer$($DvtChartDataChangeRangeMarker$$.$getTextString$())), $DvtSparkChartEventManager$$.$addChild$($DvtChartDataChangeRangeMarker$$)));
      $DvtChartDataChangeFunnelSlice$$ && ($DvtChartStyleUtils$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$.x, $DvtChartMarkerUtils$$.y, $DvtChartPieUtils$$), $DvtChartStyleUtils$$.$setInvisibleFill$(), $DvtSparkChartEventManager$$.$addChild$($DvtChartStyleUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartEventManager$$.$getCtx$().$getTooltipManager$(), $DvtSparkChartEventManager$$.$chart$.$getEventManager$().$associate$($DvtChartStyleUtils$$, new $dvt$$2$$.$CustomDatatipPeer$($DvtChartDataChangeRangeMarker$$, 
      $DvtChartDataChangeFunnelSlice$$, "#4b4b4b", {component:$DvtSparkChartDefaults$$._widgetConstructor, label:$DvtChartTypeUtils$$})));
      if($DvtChartPieLabelInfo$$ && ($DvtChartTypeUtils$$ = {outerBounds:{x:$DvtChartMarkerUtils$$.x - $DvtChartPieUtils$$, y:$DvtChartMarkerUtils$$.y - $DvtChartPieUtils$$, width:2 * $DvtChartPieUtils$$, height:2 * $DvtChartPieUtils$$}, innerBounds:{x:$DvtChartMarkerUtils$$.x - $DvtChartPieRenderUtils$$ / 2, y:$DvtChartMarkerUtils$$.y - $DvtChartPieRenderUtils$$ / 2, width:$DvtChartPieRenderUtils$$, height:$DvtChartPieRenderUtils$$}, label:$DvtChartTypeUtils$$, component:$DvtSparkChartDefaults$$._widgetConstructor}, 
      $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$.$_parentDiv$, ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$) && $DvtSparkChartDefaults$$.removeChild($DvtChartDataChangeFunnelSlice$$), $DvtChartTypeUtils$$ = $DvtChartPieLabelInfo$$($DvtChartTypeUtils$$))) {
        $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$createOverlayDiv$(), $DvtChartPieLabelInfo$$.appendChild($DvtChartTypeUtils$$), $DvtSparkChartEventManager$$.$chart$.$pieCenterDiv$ = $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.appendChild($DvtChartPieLabelInfo$$), ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.$_overlayAttachedCallback$) && $DvtSparkChartEventManager$$($DvtChartPieLabelInfo$$)
      }
    }
  };
  $DvtChartPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$generateSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$($dvt$$2$$, $DvtSparkChartEventManager$$), $DvtChartStyleUtils$$ = $dvt$$2$$.$_pieChart$.$getOptions$().dataLabel;
    $DvtChartStyleUtils$$ && ($DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getDataContext$($dvt$$2$$.$_chart$, $dvt$$2$$.$getSeriesIndex$(), 0), $DvtSparkChartDefaults$$.label = $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$ = $DvtChartStyleUtils$$($DvtSparkChartDefaults$$));
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$ : $DvtSparkChartAutomation$$
  };
  $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$getDefaultSliceLabelString$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_pieChart$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$_customLabel$, $DvtChartStyleUtils$$ = $DvtChartTooltipUtils$$.$getValueFormat$($DvtSparkChartDefaults$$.$chart$, "label");
    if($DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$) {
      return"number" == typeof $DvtSparkChartAutomation$$ ? $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$) : $DvtSparkChartAutomation$$
    }
    var $DvtChartPieLabelUtils$$ = $dvt$$2$$.getValue(), $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getTotalValue$(), $DvtChartTypeUtils$$ = 0 == $DvtSparkChartAutomation$$ ? 0 : $DvtChartPieLabelUtils$$ / $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ = 0.01 > $DvtChartTypeUtils$$ ? 3 : 0.1 > $DvtChartTypeUtils$$ ? 2 : 1 > $DvtChartTypeUtils$$ ? 1 : 0;
    150 > 2 * $DvtSparkChartDefaults$$.$_radiusX$ && ($DvtChartPieLabelInfo$$ = Math.max($DvtChartPieLabelInfo$$ - 1, 0));
    var $DvtChartPieRenderUtils$$ = $DvtSparkChartDefaults$$.$getCtx$().$getNumberConverter$({style:"percent", maximumFractionDigits:$DvtChartPieLabelInfo$$, minimumFractionDigits:$DvtChartPieLabelInfo$$}), $DvtSparkChartAutomation$$ = "";
    $DvtChartPieRenderUtils$$ && $DvtChartPieRenderUtils$$.getAsString ? $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.getAsString($DvtChartTypeUtils$$) : $DvtChartPieRenderUtils$$ && $DvtChartPieRenderUtils$$.format ? $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.format($DvtChartTypeUtils$$) : ($DvtChartTypeUtils$$ *= 100, $DvtSparkChartAutomation$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), {}, $DvtChartTypeUtils$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 
    100 == $DvtChartTypeUtils$$ ? 1 : Math.pow(10, -1 * $DvtChartPieLabelInfo$$)) + "%");
    $DvtSparkChartDefaults$$ = $DvtChartTooltipUtils$$.$formatValue$($DvtSparkChartDefaults$$.$getCtx$(), $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$);
    $DvtChartStyleUtils$$ = $dvt$$2$$.$getSeriesLabel$();
    return"percent" == $DvtSparkChartEventManager$$ ? $DvtSparkChartAutomation$$ : "number" == $DvtSparkChartEventManager$$ ? $DvtSparkChartDefaults$$ : "text" == $DvtSparkChartEventManager$$ ? $DvtChartStyleUtils$$ : "textAndPercent" == $DvtSparkChartEventManager$$ ? $DvtChartStyleUtils$$ + ", " + $DvtSparkChartAutomation$$ : $JSCompiler_alias_NULL$$
  };
  $DvtChartPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_refineInitialLayout$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if($DvtSparkChartEventManager$$ && 0 < $DvtSparkChartEventManager$$.length) {
      var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_frame$.y, $DvtChartStyleUtils$$ = $JSCompiler_alias_FALSE$$, $DvtChartTypeUtils$$ = $JSCompiler_alias_FALSE$$, $DvtChartPieLabelInfo$$ = $JSCompiler_alias_FALSE$$, $DvtChartPieRenderUtils$$ = 0, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$ = $JSCompiler_alias_FALSE$$, $DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$;
      $DvtChartDataChangeFunnelSlice$$ = $JSCompiler_alias_FALSE$$;
      $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
      for(var $DvtChartPieUtils$$ = 0;$DvtChartPieUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieUtils$$++) {
        $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$[$DvtChartPieUtils$$], $DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$, 90 < $DvtChartDataChangeFunnelSlice$$.$getPosition$() && ($DvtChartMarkerUtils$$ = $JSCompiler_alias_TRUE$$), $DvtChartPieRenderUtils$$ = $DvtChartDataChangeFunnelSlice$$.$getY$() + $DvtChartDataChangeFunnelSlice$$.getHeight(), ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$ - $DvtChartDataChangeFunnelSlice$$.$getY$() > $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$) && 
        ($DvtChartMarkerUtils$$ ? $DvtChartMarkerUtils$$ && !$DvtChartDataChangeRangeMarker$$ ? $DvtChartTypeUtils$$ = $JSCompiler_alias_TRUE$$ : $DvtChartPieLabelInfo$$ = $JSCompiler_alias_TRUE$$ : $DvtChartStyleUtils$$ = $JSCompiler_alias_TRUE$$), $DvtChartPieRenderUtils$$ > $DvtSparkChartAutomation$$ && ($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$)
      }
      return $DvtChartStyleUtils$$ && $DvtChartPieLabelInfo$$ || $DvtChartTypeUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$.$_ALL_COLLISION$) : $DvtChartStyleUtils$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : 
      $DvtChartPieLabelInfo$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieLabelUtils$$.$_NO_COLLISION$
    }
  };
  $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_setLabelsAndFeelers$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(!($DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ || 0 >= $DvtSparkChartEventManager$$.length)) {
      var $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $DvtChartPieRenderUtils$$ = $dvt$$2$$.$_frame$, $DvtChartDataChangeFunnelSlice$$ = Infinity;
      for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$_slice$, $DvtChartTypeUtils$$.$_hasFeeler$ ? ($DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartTypeUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtChartTypeUtils$$.$getX$(), $DvtChartPieLabelInfo$$), $DvtChartTypeUtils$$.getWidth() - 
        $DvtSparkChartAutomation$$ >= $DvtChartStyleUtils$$ || 0 == $DvtChartTypeUtils$$.getWidth() ? $DvtChartTypeUtils$$.$setHasFeeler$($JSCompiler_alias_FALSE$$) : $DvtChartDataChangeFunnelSlice$$ = Math.min($DvtChartDataChangeFunnelSlice$$, $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()
      }
      for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartDefaults$$++) {
        $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartDefaults$$], $DvtSparkChartAutomation$$ = $DvtChartTypeUtils$$.$_slice$, $DvtChartStyleUtils$$ = $DvtChartTypeUtils$$.$_sliceLabel$, $DvtChartTypeUtils$$.$_hasFeeler$ && ($DvtChartPieLabelInfo$$ ? $DvtChartTypeUtils$$.$setX$($DvtChartTypeUtils$$.$getX$() + $DvtChartDataChangeFunnelSlice$$) : $DvtChartTypeUtils$$.$setX$($DvtChartTypeUtils$$.$getX$() - $DvtChartDataChangeFunnelSlice$$), $DvtChartPieLabelUtils$$.$_calculateFeeler$($DvtChartTypeUtils$$, 
        $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtChartStyleUtils$$.$setMaxLines$(1)), $DvtChartStyleUtils$$.$setY$($DvtChartTypeUtils$$.$getY$()), $DvtChartStyleUtils$$.$setX$($DvtChartTypeUtils$$.$getX$()), $DvtChartTypeUtils$$.$getY$() < $DvtChartPieRenderUtils$$.y || $DvtChartTypeUtils$$.$getY$() + $DvtChartTypeUtils$$.getHeight() > $DvtChartPieRenderUtils$$.y + $DvtChartPieRenderUtils$$.$h$ ? ($DvtSparkChartAutomation$$.$setSliceLabel$($JSCompiler_alias_NULL$$), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : 
        ($DvtChartPieLabelUtils$$.$_truncateSliceLabel$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$), 0 == $DvtChartTypeUtils$$.getWidth() || 0 == $DvtChartTypeUtils$$.getHeight() ? ($DvtSparkChartAutomation$$.$setSliceLabel$($JSCompiler_alias_NULL$$), $DvtSparkChartAutomation$$.$setNoOutsideFeeler$()) : $DvtSparkChartAutomation$$.$setSliceLabel$($DvtChartStyleUtils$$))
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_calculateFeeler$ = function $$DvtChartPieLabelUtils$$$$_calculateFeeler$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getX$(), $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$getY$() + $DvtSparkChartEventManager$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $DvtSparkChartDefaults$$.$_radiusX$, $DvtChartDataChangeFunnelSlice$$;
    $DvtSparkChartAutomation$$ ? ($DvtChartStyleUtils$$ += $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$ + $DvtChartPieLabelInfo$$) : ($DvtChartStyleUtils$$ -= $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$ - $DvtChartPieLabelInfo$$);
    var $DvtChartMarkerUtils$$ = {x:0, y:0};
    $DvtChartDataChangeFunnelSlice$$ = {x:$DvtChartDataChangeFunnelSlice$$, y:$DvtChartTypeUtils$$};
    $DvtChartStyleUtils$$ = {x:$DvtChartStyleUtils$$, y:$DvtChartTypeUtils$$};
    $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$getAngle$();
    $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$.getDepth());
    $DvtChartMarkerUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$.$getCenter$().x, $DvtSparkChartDefaults$$.$getCenter$().y + $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$.$_radiusX$, $DvtSparkChartDefaults$$.$_radiusY$);
    $DvtSparkChartEventManager$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtSparkChartEventManager$$.$getPosition$());
    var $DvtChartTypeUtils$$ = Math.abs(Math.atan2($DvtChartDataChangeFunnelSlice$$.x - $DvtChartMarkerUtils$$.x, $DvtChartMarkerUtils$$.y - $DvtChartDataChangeFunnelSlice$$.y)), $DvtChartDataChangeRangeMarker$$ = ($DvtChartMarkerUtils$$.y - $DvtChartDataChangeFunnelSlice$$.y) * Math.tan($DvtSparkChartEventManager$$);
    if($DvtSparkChartEventManager$$ > Math.PI / 2 && $DvtChartTypeUtils$$ > Math.PI / 2 && $DvtChartTypeUtils$$ < $DvtSparkChartEventManager$$ || $DvtSparkChartEventManager$$ < Math.PI / 2 && $DvtChartTypeUtils$$ < Math.PI / 2 && $DvtChartTypeUtils$$ > $DvtSparkChartEventManager$$) {
      $DvtChartDataChangeFunnelSlice$$.x = $DvtSparkChartAutomation$$ ? $DvtChartMarkerUtils$$.x - $DvtChartDataChangeRangeMarker$$ : $DvtChartMarkerUtils$$.x + $DvtChartDataChangeRangeMarker$$
    }
    $DvtSparkChartDefaults$$.$setOutsideFeelerPoints$($DvtChartMarkerUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartStyleUtils$$);
    return Math.abs($DvtChartStyleUtils$$.x - $DvtChartDataChangeFunnelSlice$$.x) - $DvtChartPieLabelInfo$$
  };
  $DvtChartPieLabelUtils$$.$_adjustForDepth$ = function $$DvtChartPieLabelUtils$$$$_adjustForDepth$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = 0;
    189 < $dvt$$2$$ && 351 > $dvt$$2$$ && ($DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$);
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtChartPieLabelUtils$$$$_getMiddleLabel$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = 91, $DvtSparkChartDefaults$$ = -1, $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $dvt$$2$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $dvt$$2$$[$DvtSparkChartAutomation$$].$getPosition$();
      Math.abs($DvtChartStyleUtils$$ - 90) < $DvtSparkChartEventManager$$ && ($DvtSparkChartEventManager$$ = Math.abs($DvtChartStyleUtils$$ - 90), $DvtSparkChartDefaults$$ = $DvtSparkChartAutomation$$)
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtChartPieLabelUtils$$$$_setOptimalLabelPosition$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$.$setX$($DvtSparkChartAutomation$$);
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$_radiusY$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtSparkChartDefaults$$.$getPosition$());
    $DvtSparkChartAutomation$$ *= Math.cos($DvtChartStyleUtils$$);
    $DvtChartStyleUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtSparkChartDefaults$$.$getAngle$(), $DvtSparkChartEventManager$$.getDepth());
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCenter$().y - $DvtSparkChartAutomation$$ - $DvtSparkChartDefaults$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $DvtChartStyleUtils$$;
    $DvtSparkChartDefaults$$.$setY$($DvtSparkChartDefaults$$.$boundY$($DvtSparkChartEventManager$$))
  };
  $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$ = function $$DvtChartPieLabelUtils$$$$_getRadFeelerAngle$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_slice$, $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.$getCenter$();
    $dvt$$2$$ = $dvt$$2$$.$getAngle$();
    var $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($dvt$$2$$, $DvtSparkChartAutomation$$.getDepth()), $DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($dvt$$2$$, $DvtChartStyleUtils$$.x, $DvtChartStyleUtils$$.y + $DvtChartTypeUtils$$, $DvtSparkChartAutomation$$.$_radiusX$, $DvtSparkChartAutomation$$.$_radiusY$);
    return Math.atan2(Math.abs($DvtSparkChartEventManager$$ - $DvtSparkChartAutomation$$.x), $DvtSparkChartAutomation$$.y - $DvtSparkChartDefaults$$)
  };
  $DvtChartPieLabelUtils$$.$_columnLabels$ = function $$DvtChartPieLabelUtils$$$$_columnLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_frame$, $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.y, $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$.y + $DvtChartPieLabelInfo$$.$h$, $DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$ = 0, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCenter$().x, $DvtChartPieUtils$$;
    $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$_radiusX$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelInfo$$ -= $DvtChartMarkerUtils$$, $DvtChartPieUtils$$ = $DvtChartPieLabelInfo$$ + $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$) : ($DvtChartPieLabelInfo$$ += $DvtChartMarkerUtils$$, $DvtChartPieUtils$$ = $DvtChartPieLabelInfo$$ - $DvtSparkChartEventManager$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
    for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartDataChangeRangeMarker$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtChartMarkerUtils$$.$getPosition$()), $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartPieRenderUtils$$), $DvtChartMarkerUtils$$ - $DvtChartDataChangeRangeMarker$$ > 0.45 * Math.PI ? ($DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1), $DvtSparkChartAutomation$$--) : 
      ($DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMinY$($DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ += $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight())
    }
    for($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.length - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
      $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartDataChangeRangeMarker$$ = $dvt$$2$$.$Math$.$degreesToRads$($DvtChartMarkerUtils$$.$getPosition$()), $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeRangeMarker$$ - $DvtChartMarkerUtils$$ > 0.45 * Math.PI ? $DvtSparkChartDefaults$$.splice($DvtSparkChartAutomation$$, 1) : ($DvtChartDataChangeFunnelSlice$$ -= 
      $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].getHeight(), $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$].$setMaxY$($DvtChartDataChangeFunnelSlice$$))
    }
    $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$_getMiddleLabel$($DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$[$DvtChartPieRenderUtils$$];
    $DvtChartStyleUtils$$ && !$DvtChartTypeUtils$$ && $DvtSparkChartAutomation$$.$_minY$ + $DvtSparkChartAutomation$$.getHeight() > $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartTypeUtils$$ = $JSCompiler_alias_TRUE$$);
    $DvtChartTypeUtils$$ && !$DvtChartStyleUtils$$ && $DvtSparkChartAutomation$$.$_maxY$ < $DvtSparkChartEventManager$$.$getCenter$().y && ($DvtChartStyleUtils$$ = $JSCompiler_alias_TRUE$$);
    $DvtChartMarkerUtils$$ = $DvtSparkChartAutomation$$.$getPosition$();
    if($DvtChartTypeUtils$$ && $DvtChartStyleUtils$$ || 90 < $DvtChartMarkerUtils$$ && $DvtChartTypeUtils$$ || 90 >= $DvtChartMarkerUtils$$ && $DvtChartStyleUtils$$) {
      $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$setHasFeeler$($JSCompiler_alias_TRUE$$)
    }
    $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.$getY$();
    $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartAutomation$$.$getY$() + $DvtSparkChartAutomation$$.getHeight();
    if($DvtChartStyleUtils$$) {
      for($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$ - 1;0 <= $DvtSparkChartAutomation$$;$DvtSparkChartAutomation$$--) {
        $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$), $DvtChartMarkerUtils$$.$setHasFeeler$($JSCompiler_alias_TRUE$$), $DvtChartStyleUtils$$ = $DvtChartMarkerUtils$$.$getY$(), $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$ + $DvtChartPieUtils$$ < $DvtChartDataChangeFunnelSlice$$ ? 
        $DvtChartStyleUtils$$ : $DvtChartDataChangeFunnelSlice$$ - $DvtChartPieUtils$$, $DvtChartMarkerUtils$$.$setY$($DvtChartDataChangeFunnelSlice$$)
      }
    }
    if($DvtChartTypeUtils$$) {
      for($DvtSparkChartAutomation$$ = $DvtChartPieRenderUtils$$ + 1;$DvtSparkChartAutomation$$ < $DvtSparkChartDefaults$$.length;$DvtSparkChartAutomation$$++) {
        $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$[$DvtSparkChartAutomation$$], $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$), $DvtChartMarkerUtils$$.$setHasFeeler$($JSCompiler_alias_TRUE$$), $DvtChartStyleUtils$$ = $DvtChartMarkerUtils$$.$getY$(), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$ > $DvtChartDataChangeRangeMarker$$ ? $DvtChartStyleUtils$$ + 
        $DvtChartPieUtils$$ : $DvtChartDataChangeRangeMarker$$ + $DvtChartPieUtils$$, $DvtChartMarkerUtils$$.$setY$($DvtChartDataChangeRangeMarker$$ - $DvtChartPieUtils$$)
      }
    }
  };
  $DvtChartPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_truncateSliceLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$_sliceLabel$, $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getCSSStyle$(), $DvtChartPieLabelInfo$$ = 0, $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getNumChildren$(), $DvtChartPieRenderUtils$$ = $JSCompiler_alias_FALSE$$;
    $dvt$$2$$.contains($DvtChartStyleUtils$$) || ($dvt$$2$$.$addChild$($DvtChartStyleUtils$$), $DvtChartPieRenderUtils$$ = $JSCompiler_alias_TRUE$$);
    $DvtChartStyleUtils$$.$setCSSStyle$($DvtChartTypeUtils$$);
    $DvtChartStyleUtils$$.$setTextString$($DvtSparkChartEventManager$$.$_sliceLabelString$);
    $DvtChartPieRenderUtils$$ && $dvt$$2$$.$removeChildAt$($DvtChartPieLabelInfo$$);
    $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.$getX$(), $DvtSparkChartAutomation$$);
    $dvt$$2$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.$_initialNumLines$);
    $DvtSparkChartDefaults$$.$setWidth$($dvt$$2$$.x);
    $DvtSparkChartDefaults$$.getHeight() != $dvt$$2$$.y && $DvtSparkChartDefaults$$.$setHeight$($dvt$$2$$.y)
  };
  $DvtChartPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_generateInitialLayout$$($dvt$$2$$) {
    for(var $DvtSparkChartEventManager$$ = Array(2), $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = [], $DvtChartStyleUtils$$ = $dvt$$2$$.$_slices$, $DvtChartTypeUtils$$ = $dvt$$2$$.$_frame$, $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartStyleUtils$$.length;$DvtChartPieLabelInfo$$++) {
      var $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$[$DvtChartPieLabelInfo$$], $DvtChartMarkerUtils$$ = $dvt$$2$$.$getSeriesLabelPosition$($DvtChartDataChangeFunnelSlice$$.$getSeriesIndex$());
      if(!($DvtChartDataChangeFunnelSlice$$.$_sliceLabel$ != $JSCompiler_alias_NULL$$ || "none" == $DvtChartMarkerUtils$$ || "center" == $DvtChartMarkerUtils$$)) {
        var $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.$_createLabel$($DvtChartDataChangeFunnelSlice$$, $JSCompiler_alias_FALSE$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeFunnelSlice$$.$getAngleStart$() + $DvtChartDataChangeFunnelSlice$$.$getAngleExtent$() / 2;
        360 < $DvtChartDataChangeRangeMarker$$ && ($DvtChartDataChangeRangeMarker$$ -= 360);
        0 > $DvtChartDataChangeRangeMarker$$ && ($DvtChartDataChangeRangeMarker$$ += 360);
        var $DvtChartPieUtils$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($DvtChartDataChangeRangeMarker$$, $dvt$$2$$.$getCenter$().x, $dvt$$2$$.$getCenter$().y, $dvt$$2$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dvt$$2$$.$_radiusY$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $DvtChartDataChangeMarker$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($dvt$$2$$, 
        $DvtChartPieUtils$$.x, 90 <= $DvtChartDataChangeRangeMarker$$ && 270 > $DvtChartDataChangeRangeMarker$$), $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
        165 > $DvtChartDataChangeRangeMarker$$ && 15 < $DvtChartDataChangeRangeMarker$$ ? $DvtChartPieUtils$$.y -= 1 * $DvtChartDataChangeMarker$$.y : 15 > $DvtChartDataChangeRangeMarker$$ || 345 < $DvtChartDataChangeRangeMarker$$ ? ($DvtChartPieUtils$$.y -= 0.5 * $DvtChartDataChangeMarker$$.y, $DvtChartPieUtils$$.x += 0.2 * $DvtChartDataChangeMarker$$.y) : 165 < $DvtChartDataChangeRangeMarker$$ && 195 > $DvtChartDataChangeRangeMarker$$ && ($DvtChartPieUtils$$.y -= 0.5 * $DvtChartDataChangeMarker$$.y, 
        $DvtChartPieUtils$$.x -= 0.2 * $DvtChartDataChangeMarker$$.y);
        var $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($DvtChartDataChangeRangeMarker$$, $dvt$$2$$.getDepth());
        $DvtChartPieUtils$$.y += $DvtChartDataChangeLineArea$$;
        1 == $DvtChartStyleUtils$$.length && ($DvtChartPieUtils$$.x -= $DvtChartDataChangeMarker$$.x / 2);
        $DvtChartPieUtils$$.y < $DvtChartTypeUtils$$.y || $DvtChartPieUtils$$.y + $DvtChartDataChangeMarker$$.y > $DvtChartTypeUtils$$.y + $DvtChartTypeUtils$$.$h$ || (90 <= $DvtChartDataChangeRangeMarker$$ && 270 > $DvtChartDataChangeRangeMarker$$ ? ($DvtChartMarkerUtils$$.$alignRight$(), $DvtChartDataChangeLineArea$$ = $DvtChartDataChangeRangeMarker$$ - 90, $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$, 
        $DvtChartDataChangeMarker$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$)) : ($DvtChartDataChangeLineArea$$ = 90 >= $DvtChartDataChangeRangeMarker$$ ? Math.abs(90 - $DvtChartDataChangeRangeMarker$$) : 180 - ($DvtChartDataChangeRangeMarker$$ - 270), $DvtChartPieLabelUtils$$.$_createLabelInfo$($DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartPieUtils$$, $DvtSparkChartAutomation$$)))
      }
    }
    $DvtSparkChartEventManager$$[0] = $DvtSparkChartDefaults$$;
    $DvtSparkChartEventManager$$[1] = $DvtSparkChartAutomation$$;
    return $DvtSparkChartEventManager$$
  };
  $DvtChartPieLabelUtils$$.$_createLabelInfo$ = function $$DvtChartPieLabelUtils$$$$_createLabelInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    for(var $DvtChartPieRenderUtils$$ = -1, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtChartTypeUtils$$.length;$DvtChartMarkerUtils$$++) {
      if($DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$[$DvtChartMarkerUtils$$], $DvtChartDataChangeFunnelSlice$$.$getPosition$() > $DvtSparkChartAutomation$$) {
        $DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$;
        break
      }
    }
    -1 == $DvtChartPieRenderUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.length);
    $DvtChartDataChangeFunnelSlice$$ = new $DvtChartPieLabelInfo$$;
    $DvtChartDataChangeFunnelSlice$$.$setPosition$($DvtSparkChartAutomation$$);
    $DvtChartDataChangeFunnelSlice$$.$setAngle$($DvtSparkChartDefaults$$);
    $DvtChartDataChangeFunnelSlice$$.$setSliceLabel$($DvtSparkChartEventManager$$);
    $DvtChartDataChangeFunnelSlice$$.$setSlice$($dvt$$2$$);
    $DvtChartDataChangeFunnelSlice$$.$setWidth$($DvtChartStyleUtils$$.x);
    $DvtChartDataChangeFunnelSlice$$.$setHeight$($DvtChartStyleUtils$$.y);
    $DvtChartDataChangeFunnelSlice$$.$setX$($DvtChartPieLabelUtils$$.x);
    $DvtChartDataChangeFunnelSlice$$.$setY$($DvtChartPieLabelUtils$$.y);
    $DvtChartTypeUtils$$.splice($DvtChartPieRenderUtils$$, 0, $DvtChartDataChangeFunnelSlice$$)
  };
  $DvtChartPieLabelUtils$$.$_getTextDimension$ = function $$DvtChartPieLabelUtils$$$$_getTextDimension$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$) {
    $DvtSparkChartAutomation$$.$setMaxLines$($DvtChartTypeUtils$$);
    $DvtSparkChartDefaults$$ = !$DvtChartPieLabelUtils$$.$_isTextLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartAutomation$$.$getTextString$().length : $JSCompiler_alias_NULL$$;
    return $dvt$$2$$.$TextUtils$.$fitText$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, Infinity, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartAutomation$$), $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtSparkChartEventManager$$.removeChild($DvtSparkChartAutomation$$), {x:$DvtChartStyleUtils$$.$w$, y:$DvtChartStyleUtils$$.$h$}) : {x:0, y:0}
  };
  $DvtChartPieLabelUtils$$.$_isTextLabel$ = function $$DvtChartPieLabelUtils$$$$_isTextLabel$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$_customLabel$;
    return-1 != $dvt$$2$$.$getOptions$().styleDefaults.sliceLabelType.indexOf("text") || $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ && "number" != typeof $DvtSparkChartDefaults$$
  };
  $DvtChartPieLabelUtils$$.$getMaxLabelWidth$ = function $$DvtChartPieLabelUtils$$$$getMaxLabelWidth$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$ = $dvt$$2$$.$_frame$;
    return $DvtSparkChartDefaults$$ ? $DvtSparkChartEventManager$$ - $dvt$$2$$.x : $dvt$$2$$.x + $dvt$$2$$.$w$ - $DvtSparkChartEventManager$$
  };
  $DvtChartPieLabelUtils$$.$getPieCenterOptions$ = function $$DvtChartPieLabelUtils$$$$getPieCenterOptions$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtSparkChartEventManager$$.pieCenter);
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.pieCenterLabel;
    $DvtSparkChartEventManager$$.text && ($DvtSparkChartDefaults$$.label = $DvtSparkChartEventManager$$.text, $DvtSparkChartDefaults$$.labelStyle = new $dvt$$2$$.$CSSStyle$($DvtSparkChartEventManager$$.style));
    return $DvtSparkChartDefaults$$
  };
  var $DvtChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
  $DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
  $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
  $DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
  $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
  $DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRenderer$$.$_renderBackground$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if($DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      $DvtChartRenderer$$.$renderEmptyText$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
    }else {
      $DvtChartTypeUtils$$.$isOverview$($dvt$$2$$) || ($dvt$$2$$.$getOptions$()._maxOverflowCoord = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$, $dvt$$2$$.$getOptions$()._minOverflowCoord = $DvtSparkChartDefaults$$.x);
      $DvtChartRenderer$$.$_addOuterGaps$($dvt$$2$$, $DvtSparkChartDefaults$$);
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$clone$();
      $DvtChartRenderer$$.$_renderTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartLegendRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      var $DvtChartStyleUtils$$ = $DvtChartRenderer$$.$_prerenderHorizScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtChartRenderer$$.$_prerenderVertScrollbar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setAxisSpace$($DvtSparkChartDefaults$$.$clone$());
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_positionLegend$($dvt$$2$$.$legend$, $DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.$clone$());
      $DvtChartRenderer$$.$_setEventHandlers$($dvt$$2$$);
      $DvtChartRenderer$$.$_renderScrollbars$($dvt$$2$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$);
      $DvtChartRenderer$$.$_updateTitles$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && $DvtSparkChartEventManager$$.$addChild$($dvt$$2$$.$yAxis$);
      $DvtChartRenderer$$.$_renderDragButtons$($dvt$$2$$)
    }
  };
  $DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$();
    if($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartStyleUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartEventManager$$.getWidth(), $DvtSparkChartEventManager$$.getHeight()), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_axisSpace$, $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Rectangle$($DvtChartPieLabelUtils$$.x, $DvtChartPieLabelInfo$$.y, $DvtChartPieLabelUtils$$.$w$, $DvtChartPieLabelInfo$$.$h$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Rectangle$($DvtChartPieLabelInfo$$.x, 
      $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$.$w$, $DvtChartPieLabelUtils$$.$h$), $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$SolidFill$($DvtSparkChartDefaults$$.styleDefaults.marqueeColor), $DvtChartMarkerUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtSparkChartDefaults$$.styleDefaults.marqueeBorderColor), $DvtChartDataChangeRangeMarker$$;
      $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && ($DvtChartDataChangeRangeMarker$$ = $DvtChartEventUtils$$.$isDelayedScroll$($DvtSparkChartEventManager$$) ? $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$, $DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$PanZoomHandler$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeRangeMarker$$.$setPanCursor$($DvtSparkChartDefaults$$._resources.panCursorUp, 
      $DvtSparkChartDefaults$$._resources.panCursorDown), $DvtSparkChartAutomation$$.$setPanZoomHandler$($DvtChartDataChangeRangeMarker$$), $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && ($DvtChartDataChangeRangeMarker$$ = $DvtChartEventUtils$$.$getZoomDirection$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) || "y" == $DvtChartDataChangeRangeMarker$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, 
      $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$) : $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) || "x" == $DvtChartDataChangeRangeMarker$$ ? new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $JSCompiler_alias_TRUE$$, 
      $JSCompiler_alias_FALSE$$, $DvtChartPieRenderUtils$$, $JSCompiler_alias_NULL$$) : new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$setMarqueeZoomHandler$($DvtChartDataChangeRangeMarker$$)));
      "multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartDataChangeRangeMarker$$ = new $dvt$$2$$.$MarqueeHandler$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$), $DvtSparkChartAutomation$$.$setMarqueeSelectHandler$($DvtChartDataChangeRangeMarker$$))
    }
  };
  $DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if(!$DvtChartDataUtils$$.$hasInvalidData$($dvt$$2$$)) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_axisSpace$.$clone$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getSelectionHandler$();
      if($DvtSparkChartAutomation$$) {
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$getSelectedIds$()
      }
      var $DvtChartTypeUtils$$ = $dvt$$2$$.$__cacheChartFocus$();
      $dvt$$2$$.$__cleanUpAxisAndPlotArea$();
      $DvtChartAxisRenderer$$.$render$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtChartRenderer$$.$_adjustAvailSpace$($DvtSparkChartDefaults$$);
      $dvt$$2$$.$__setPlotAreaSpace$($DvtSparkChartDefaults$$.$clone$());
      $DvtChartRenderer$$.$_renderPlotArea$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.$processInitialSelections$($DvtChartPieLabelUtils$$, $dvt$$2$$.$getChartObjPeers$());
      $dvt$$2$$.$getEventManager$().$autoToggleZoomButton$();
      $DvtChartRenderer$$.$positionDragButtons$($dvt$$2$$);
      $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$));
      $dvt$$2$$.$__restoreChartFocus$($DvtChartTypeUtils$$)
    }
  };
  $DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartEventManager$$ = new $dvt$$2$$.$Rect$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$);
    $DvtSparkChartEventManager$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$)
  };
  $DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtChartDefaults$$.$getGapWidth$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapWidth), $DvtChartStyleUtils$$ = $DvtChartDefaults$$.$getGapHeight$($dvt$$2$$, $DvtSparkChartDefaults$$.layout.outerGapHeight);
    if("none" == $DvtSparkChartDefaults$$.styleDefaults.padding || $DvtChartTypeUtils$$.$isStandalonePlotArea$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneXAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($dvt$$2$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($dvt$$2$$)) {
      $DvtSparkChartAutomation$$ = Math.min($DvtSparkChartAutomation$$, 1), $DvtChartStyleUtils$$ = Math.min($DvtChartStyleUtils$$, 1)
    }
    $DvtSparkChartEventManager$$.x += $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtSparkChartAutomation$$;
    $DvtSparkChartEventManager$$.y += $DvtChartStyleUtils$$;
    $DvtSparkChartEventManager$$.$h$ -= 2 * $DvtChartStyleUtils$$
  };
  $DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if($DvtChartStyleUtils$$.title.text) {
      var $DvtChartPieLabelUtils$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$.title.text, $DvtChartStyleUtils$$.title.style, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.title.hAlign != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$.title.hAlign : 
      $DvtChartStyleUtils$$.title.halign, $DvtChartDataChangeFunnelSlice$$ = "plotArea" == $DvtChartPieRenderUtils$$.substring(0, 8);
      $DvtChartPieLabelUtils$$ ? ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$getDimensions$(), $DvtChartTypeUtils$$ = $DvtChartPieLabelInfo$$.$h$, $DvtChartPieLabelUtils$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$)) : ($DvtChartTypeUtils$$ = 0, $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Rectangle$(0, 0, 0, 0));
      if($DvtChartStyleUtils$$.subtitle.text) {
        var $DvtChartMarkerUtils$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartStyleUtils$$.subtitle.text, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
        if($DvtChartMarkerUtils$$) {
          $DvtChartMarkerUtils$$.$setCSSStyle$($DvtChartStyleUtils$$.subtitle.style);
          $DvtSparkChartDefaults$$.$addChild$($DvtChartMarkerUtils$$);
          var $DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$.$measureDimensions$(), $DvtChartPieUtils$$ = $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.layout.titleSubtitleGapWidth), $DvtChartDataChangeMarker$$ = $DvtChartPieLabelInfo$$.$w$ + $DvtChartPieUtils$$ + $DvtChartDataChangeRangeMarker$$.$w$;
          $DvtChartDataChangeMarker$$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartDataChangeFunnelSlice$$ ? ($DvtChartPieUtils$$ = $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.layout.titleSubtitleGapHeight), $DvtChartMarkerUtils$$.$setY$($DvtSparkChartAutomation$$.y + $DvtChartTypeUtils$$ + $DvtChartPieUtils$$), $dvt$$2$$.$TextUtils$.$fitText$($DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$) && 
          ($DvtChartDataChangeRangeMarker$$ = $DvtChartMarkerUtils$$.$measureDimensions$(), $DvtChartTypeUtils$$ += $DvtChartDataChangeRangeMarker$$.$h$ + $DvtChartPieUtils$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) && ($DvtChartMarkerUtils$$ && $DvtChartMarkerUtils$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartDataChangeRangeMarker$$.$w$), $DvtChartPieLabelUtils$$ && $DvtChartPieLabelUtils$$.$setX$($DvtSparkChartAutomation$$.$w$ - $DvtChartPieLabelInfo$$.$w$)))) : 
          ($DvtChartMarkerUtils$$.$setY$($DvtChartPieLabelInfo$$.$h$ - $DvtChartDataChangeRangeMarker$$.$h$ + $DvtSparkChartAutomation$$.y), $DvtChartPieLabelUtils$$ && ($dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangeMarker$$), $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtChartMarkerUtils$$.$setX$($DvtChartPieLabelUtils$$.$getX$()), $DvtChartPieLabelUtils$$ && $DvtChartPieLabelUtils$$.$setX$($DvtChartPieLabelUtils$$.$getX$() + 
          $DvtChartDataChangeRangeMarker$$.$w$ + $DvtChartPieUtils$$)) : $DvtChartMarkerUtils$$.$setX$($DvtChartPieLabelUtils$$.$getX$() + $DvtChartDataChangeMarker$$ - $DvtChartDataChangeRangeMarker$$.$w$)));
          $DvtChartMarkerUtils$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$);
          $DvtSparkChartEventManager$$.$getEventManager$().$associate$($DvtChartMarkerUtils$$, new $dvt$$2$$.$SimpleObjPeer$($DvtChartMarkerUtils$$.$getUntruncatedTextString$()))
        }
      }else {
        $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$.$w$)
      }
      $DvtChartDataChangeFunnelSlice$$ && ($DvtSparkChartEventManager$$.$putToCache$("title", $DvtChartPieLabelUtils$$), $DvtSparkChartEventManager$$.$putToCache$("subtitle", $DvtChartMarkerUtils$$));
      $DvtChartPieLabelUtils$$ = "on" == $DvtChartStyleUtils$$.titleSeparator.rendered ? $DvtChartStyleUtils$$.layout.titleSeparatorGap : $DvtChartStyleUtils$$.layout.titlePlotAreaGap;
      $DvtSparkChartAutomation$$.y += $DvtChartTypeUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$);
      $DvtSparkChartAutomation$$.$h$ -= $DvtChartTypeUtils$$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$);
      "on" == $DvtChartStyleUtils$$.titleSeparator.rendered && ($DvtChartTypeUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.y), $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Line$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y + 1, $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$, 
      $DvtSparkChartAutomation$$.y + 1), $DvtChartTypeUtils$$.$setSolidStroke$($DvtChartStyleUtils$$.titleSeparator.upperColor), $DvtChartPieLabelUtils$$.$setSolidStroke$($DvtChartStyleUtils$$.titleSeparator.lowerColor), $DvtSparkChartDefaults$$.$addChild$($DvtChartTypeUtils$$), $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$), $DvtChartTypeUtils$$ = 2 + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.layout.titlePlotAreaGap), $DvtSparkChartAutomation$$.y += 
      $DvtChartTypeUtils$$, $DvtSparkChartAutomation$$.$h$ -= $DvtChartTypeUtils$$)
    }
    $DvtChartStyleUtils$$.footnote.text && ($DvtSparkChartDefaults$$ = $DvtChartTextUtils$$.$createText$($DvtSparkChartEventManager$$.$getEventManager$(), $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$.footnote.text, $DvtChartStyleUtils$$.footnote.style, $DvtSparkChartAutomation$$.x, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.footnote.hAlign != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$.footnote.hAlign : $DvtChartStyleUtils$$.footnote.halign, 
    $DvtChartPieLabelUtils$$ = "plotArea" == $DvtChartTypeUtils$$.substring(0, 8), $DvtSparkChartDefaults$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getDimensions$(), $DvtSparkChartDefaults$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieLabelInfo$$.$h$), $DvtSparkChartAutomation$$.$h$ -= $DvtChartPieLabelInfo$$.$h$ + $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.layout.footnoteGap), $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartAutomation$$, 
    $DvtChartTypeUtils$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$.$w$), $DvtSparkChartDefaults$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$)), $DvtChartPieLabelUtils$$ && $DvtSparkChartEventManager$$.$putToCache$("footnote", $DvtSparkChartDefaults$$))
  };
  $DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.title.hAlign != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$.title.hAlign : $DvtChartStyleUtils$$.title.halign, $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.footnote.hAlign != $JSCompiler_alias_NULL$$ ? $DvtChartStyleUtils$$.footnote.hAlign : $DvtChartStyleUtils$$.footnote.halign, $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.title.text && "plotArea" == $DvtChartPieLabelUtils$$.substring(0, 
    8), $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.footnote.text && "plotArea" == $DvtChartTypeUtils$$.substring(0, 8);
    $DvtSparkChartDefaults$$.x = $DvtSparkChartAutomation$$.x;
    $DvtSparkChartDefaults$$.$w$ = $DvtSparkChartAutomation$$.$w$;
    if($DvtChartPieLabelInfo$$) {
      $DvtChartPieLabelInfo$$ = $dvt$$2$$.$getFromCache$("title");
      $DvtSparkChartAutomation$$ = $dvt$$2$$.$getFromCache$("subtitle");
      var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.$getDimensions$();
      $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$.$w$);
      $DvtSparkChartAutomation$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$.$w$))
    }
    $DvtChartStyleUtils$$ && ($dvt$$2$$ = $dvt$$2$$.$getFromCache$("footnote"), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartTypeUtils$$, $dvt$$2$$, $DvtChartPieLabelUtils$$.$w$))
  };
  $DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    $dvt$$2$$.$TextUtils$.$fitText$($DvtChartStyleUtils$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, $DvtSparkChartEventManager$$) && ("plotAreaStart" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "start", $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) : "plotAreaCenter" == $DvtSparkChartAutomation$$ ? $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "center", $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) : "plotAreaEnd" == $DvtSparkChartAutomation$$ && 
    $dvt$$2$$.$LayoutUtils$.align($DvtSparkChartDefaults$$, "end", $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$))
  };
  $DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$)) {
      var $DvtChartStyleUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
      $DvtChartStyleUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartStyleUtils$$);
      $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartStyleUtils$$);
      $DvtChartPlotAreaRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$))
    }else {
      $DvtChartTypeUtils$$.$isPie$($DvtSparkChartEventManager$$) ? ($DvtChartStyleUtils$$ = new $DvtChartPie$$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), 0 < $DvtChartStyleUtils$$.$_slices$.length ? ($DvtSparkChartDefaults$$.$addChild$($DvtChartStyleUtils$$), $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartStyleUtils$$), $DvtChartStyleUtils$$.$render$()) : $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) : 
      $DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) && $DvtChartFunnelRenderer$$.$render$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
    }
    $DvtSparkChartAutomation$$.$w$ = 0;
    $DvtSparkChartAutomation$$.$h$ = 0
  };
  $DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if($DvtChartDataUtils$$.$hasInvalidTimeData$($DvtSparkChartEventManager$$) && $DvtChartDataUtils$$.$hasData$($DvtSparkChartEventManager$$)) {
      var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartStyleUtils$$, "labelInvalidData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA")
    }else {
      ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.emptyText) || ($DvtChartPieLabelUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtChartStyleUtils$$, "labelNoData", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "NO_DATA"))
    }
    $dvt$$2$$.$TextUtils$.$renderEmptyText$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$), $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartStyleUtils$$._statusMessageStyle)
  };
  $DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelInfo$$ = 0;
    $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isHorizScrollbarSupported$($DvtSparkChartEventManager$$) ? $DvtChartStyleUtils$$.$isOverviewRendered$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelInfo$$ = Math.min($DvtChartStyleUtils$$.$getOverviewHeight$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$.$h$), 0 < $DvtChartPieLabelInfo$$ && ($DvtSparkChartEventManager$$.$overview$ = new $DvtChartOverview$$($DvtSparkChartEventManager$$), 
    $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$overview$), $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$overview$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 10))) : ($DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtSparkChartEventManager$$.$xScrollbar$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, 
    $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartEventManager$$.$xScrollbar$), $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, "bottom", $DvtSparkChartEventManager$$.$xScrollbar$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, 8), $DvtSparkChartEventManager$$.$overview$ = $JSCompiler_alias_NULL$$) : $DvtSparkChartEventManager$$.$overview$ = $JSCompiler_alias_NULL$$;
    return new $dvt$$2$$.$Dimension$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$)
  };
  $DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = 0, $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.$h$;
    if($DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertScrollbarSupported$($DvtSparkChartEventManager$$)) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getOptions$().styleDefaults._scrollbarHeight, $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$SimpleScrollbar$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelInfo$$);
      $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? "right" : "left", $DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, 8);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartEventManager$$.$xScrollbar$ = $DvtChartPieLabelInfo$$ : $DvtSparkChartEventManager$$.$yScrollbar$ = $DvtChartPieLabelInfo$$
    }
    return new $dvt$$2$$.$Dimension$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$)
  };
  $DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelUtils$$ = {color:$DvtChartStyleUtils$$.styleDefaults._scrollbarHandleColor, backgroundColor:$DvtChartStyleUtils$$.styleDefaults._scrollbarTrackColor}, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$_plotAreaSpace$;
    $DvtSparkChartEventManager$$.$xScrollbar$ && ($DvtChartPieLabelUtils$$.min = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), $DvtChartPieLabelUtils$$.max = $DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$.isHorizontal = $JSCompiler_alias_FALSE$$, $DvtChartPieLabelUtils$$.isReversed = $JSCompiler_alias_FALSE$$, $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateY$($DvtChartPieLabelInfo$$.y), 
    $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelInfo$$.$h$)) : ($DvtChartPieLabelUtils$$.isHorizontal = $JSCompiler_alias_TRUE$$, $DvtChartPieLabelUtils$$.isReversed = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartEventManager$$.$xScrollbar$.$setTranslateX$($DvtChartPieLabelInfo$$.x), $DvtSparkChartEventManager$$.$xScrollbar$.$render$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$.$w$, 
    $DvtSparkChartDefaults$$.$h$)), $DvtSparkChartEventManager$$.$xScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$yScrollbar$ && ($DvtChartPieLabelUtils$$.min = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMin$(), $DvtChartPieLabelUtils$$.max = $DvtSparkChartEventManager$$.$yAxis$.$getLinearGlobalMax$(), $DvtChartPieLabelUtils$$.isHorizontal = $JSCompiler_alias_FALSE$$, $DvtChartPieLabelUtils$$.isReversed = $JSCompiler_alias_TRUE$$, $DvtSparkChartEventManager$$.$yScrollbar$.$setTranslateY$($DvtChartPieLabelInfo$$.y), $DvtSparkChartEventManager$$.$yScrollbar$.$render$($DvtChartPieLabelUtils$$, 
    $DvtSparkChartAutomation$$.$w$, $DvtChartPieLabelInfo$$.$h$), $DvtSparkChartEventManager$$.$yScrollbar$.$setViewportRange$($DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$yAxis$.$getLinearViewportMax$()));
    $DvtSparkChartEventManager$$.$overview$ && ($DvtSparkChartAutomation$$ = {startTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMin$(), endTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearGlobalMax$(), viewportStartTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), viewportEndTime:$DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$(), minimumWindowSize:$DvtSparkChartEventManager$$.$xAxis$.$getInfo$().$getMinimumExtent$(), chart:$dvt$$2$$.$JsonUtils$.$clone$($DvtChartStyleUtils$$)}, 
    $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) || ($DvtSparkChartAutomation$$.featuresOff = "zoom"), $DvtSparkChartAutomation$$.chart._minOverflowCoord = $DvtChartStyleUtils$$._minOverflowCoord - $DvtChartPieLabelInfo$$.x, $DvtSparkChartAutomation$$.chart._maxOverflowCoord = $DvtChartStyleUtils$$._maxOverflowCoord - $DvtChartPieLabelInfo$$.x, $DvtSparkChartEventManager$$.$overview$.$setTranslateX$($DvtChartPieLabelInfo$$.x), $DvtSparkChartEventManager$$.$overview$.$render$($DvtSparkChartAutomation$$, 
    $DvtChartPieLabelInfo$$.$w$, $DvtSparkChartDefaults$$.$h$), $DvtSparkChartEventManager$$.$overview$.$setViewportRange$($DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMin$(), $DvtSparkChartEventManager$$.$xAxis$.$getLinearViewportMax$()))
  };
  $DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    if($dvt$$2$$) {
      var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getDimensions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$().orientation;
      "vertical" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$h$ <= $DvtSparkChartEventManager$$.$h$ ? $dvt$$2$$.$setTranslateY$(Math.round($DvtSparkChartEventManager$$.y + $DvtSparkChartEventManager$$.$h$ / 2 - $DvtSparkChartDefaults$$.$h$ / 2)) : "horizontal" == $DvtSparkChartAutomation$$ && $DvtSparkChartDefaults$$.$w$ <= $DvtSparkChartEventManager$$.$w$ && $dvt$$2$$.$setTranslateX$(Math.round($DvtSparkChartEventManager$$.x + $DvtSparkChartEventManager$$.$w$ / 2 - $DvtSparkChartDefaults$$.$w$ / 
      2))
    }
  };
  $DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getEventManager$(), $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.dragMode;
    if("user" != $DvtChartStyleUtils$$) {
      "pan" == $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_PAN$) : "zoom" == $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_ZOOM$) : "select" == $DvtChartStyleUtils$$ ? $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_SELECT$) : $DvtSparkChartAutomation$$.$setDragMode$($DvtChartEventManager$$.$DRAG_MODE_OFF$)
    }else {
      if($DvtChartTypeUtils$$.$hasAxes$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
        var $DvtChartStyleUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartPieLabelUtils$$ = $DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$);
        $DvtSparkChartEventManager$$.$dragButtons$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
        var $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$._resources, $DvtChartPieRenderUtils$$;
        if("multiple" == $DvtSparkChartDefaults$$.selectionMode && ($DvtChartStyleUtils$$ || $DvtChartPieLabelUtils$$)) {
          $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$ && ($DvtChartStyleUtils$$ || $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$)) ? "end" : "solo", $DvtSparkChartAutomation$$.$selectButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelInfo$$.selectUp, $DvtChartPieLabelInfo$$.selectDown, $DvtSparkChartAutomation$$.$onSelectButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), 
          $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipSelect", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_SELECT"), $DvtSparkChartAutomation$$.$selectButton$.$setTooltip$($DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$selectButton$, $DvtSparkChartAutomation$$.$selectButton$)
        }
        $DvtChartPieLabelUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.$selectButton$ == $JSCompiler_alias_NULL$$ ? "solo" : "start", $DvtChartStyleUtils$$ ? ($DvtSparkChartAutomation$$.$panButton$ = $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelInfo$$.panUp, $DvtChartPieLabelInfo$$.panDown, $DvtSparkChartAutomation$$.$onPanButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), 
        $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipPan", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "PAN"), $DvtSparkChartAutomation$$.$panButton$.$setTooltip$($DvtChartPieRenderUtils$$), $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$panButton$, $DvtSparkChartAutomation$$.$panButton$)) : $DvtChartEventUtils$$.$isZoomable$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isScatterBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.$zoomButton$ = 
        $DvtChartRenderer$$.$_createDragButton$($DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$.$dragButtons$, $DvtChartPieLabelInfo$$.zoomUp, $DvtChartPieLabelInfo$$.zoomDown, $DvtSparkChartAutomation$$.$onZoomButtonClick$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartDefaults$$, "tooltipZoom", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "MARQUEE_ZOOM"), $DvtSparkChartAutomation$$.$zoomButton$.$setTooltip$($DvtChartPieRenderUtils$$), 
        $DvtSparkChartAutomation$$.$associate$($DvtSparkChartAutomation$$.$zoomButton$, $DvtSparkChartAutomation$$.$zoomButton$)));
        $DvtChartRenderer$$.$positionDragButtons$($DvtSparkChartEventManager$$);
        $DvtSparkChartAutomation$$.$setDragMode$($JSCompiler_alias_NULL$$);
        0 < $DvtSparkChartEventManager$$.$dragButtons$.$getNumChildren$() && ($DvtSparkChartEventManager$$.$addChild$($DvtSparkChartEventManager$$.$dragButtons$), $DvtChartStyleUtils$$ ? $DvtChartPieLabelUtils$$ && ($DvtSparkChartAutomation$$.$panButton$.$setToggled$($JSCompiler_alias_TRUE$$), $DvtSparkChartAutomation$$.$onPanButtonClick$()) : $DvtSparkChartEventManager$$.$hideDragButtons$(), $DvtSparkChartEventManager$$.$dragButtons$.setCursor("default"))
      }
    }
  };
  $DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? ($DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$.x += $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$) : $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartRenderer$$.$_BUTTON_SIZE$ - $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartAutomation$$.$w$ -= $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$;
    $DvtSparkChartDefaults$$.$setTranslate$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.y + $DvtChartRenderer$$.$_BUTTON_PADDING$)
  };
  $DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$_plotAreaSpace$.$clone$();
    $DvtSparkChartEventManager$$.x += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.$w$ -= 2 * $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    $DvtSparkChartEventManager$$.y += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getEventManager$();
    $DvtSparkChartDefaults$$.$selectButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$selectButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$panButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$panButton$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$zoomButton$ && $DvtChartRenderer$$.$_positionDragButton$($dvt$$2$$, $DvtSparkChartDefaults$$.$zoomButton$, $DvtSparkChartEventManager$$)
  };
  $DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = 2, $DvtChartStyleUtils$$ = 2, $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$);
    "start" == $DvtSparkChartDefaults$$ ? $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$ = 0 : $DvtChartStyleUtils$$ = 0 : "end" == $DvtSparkChartDefaults$$ && ($DvtChartPieLabelUtils$$ ? $DvtChartStyleUtils$$ = 0 : $DvtSparkChartAutomation$$ = 0);
    var $DvtChartPieLabelUtils$$ = -$DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartTypeUtils$$ = $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartTypeUtils$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$, 
    $DvtSparkChartAutomation$$);
    1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? ($DvtSparkChartAutomation$$.$setSolidStroke$("#D8DEE3", 1, 1), $DvtSparkChartAutomation$$.$setPixelHinting$()) : $DvtSparkChartAutomation$$.$setSolidStroke$("#B8BDC1", 1, 1);
    return $DvtSparkChartAutomation$$
  };
  $DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$) {
    $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.$getCtx$();
    var $DvtChartPieRenderUtils$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartPieRenderUtils$$.$setSolidFill$("#FFFFFF", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartPieRenderUtils$$.$addChild$(new $dvt$$2$$.$Image$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartDataChangeFunnelSlice$$.$setSolidFill$("#E2E3E4", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtChartDataChangeFunnelSlice$$.$addChild$(new $dvt$$2$$.$Image$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    var $DvtChartMarkerUtils$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtChartMarkerUtils$$.$setFill$(new $dvt$$2$$.$LinearGradientFill$(90, ["#0527CE", "#0586F0"], [$DvtChartRenderer$$.$_BUTTON_OPACITY$, $DvtChartRenderer$$.$_BUTTON_OPACITY$]));
    $DvtChartMarkerUtils$$.$addChild$(new $dvt$$2$$.$Image$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtSparkChartAutomation$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
    $DvtSparkChartAutomation$$.$setSolidFill$("#0586F0", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
    $DvtSparkChartAutomation$$.$addChild$(new $dvt$$2$$.$Image$($DvtSparkChartEventManager$$, $DvtChartStyleUtils$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
    $DvtChartStyleUtils$$ = new $dvt$$2$$.$Button$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$);
    $DvtChartStyleUtils$$.$setOverDownState$($DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$.$setToggleEnabled$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartStyleUtils$$);
    $DvtChartStyleUtils$$.$addEvtListener$($dvt$$2$$.$MouseEvent$.$MOUSEDOWN$, function($dvt$$2$$) {
      $dvt$$2$$.stopPropagation()
    });
    $dvt$$2$$.$Agent$.$isTouchDevice$() && ($DvtSparkChartDefaults$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $DvtChartPieLabelInfo$$ = "solo" == $DvtChartPieLabelInfo$$ ? new $dvt$$2$$.$Rect$($DvtSparkChartEventManager$$, -$DvtChartPieLabelUtils$$, -$DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartPieLabelUtils$$) : 
    "start" == $DvtChartPieLabelInfo$$ && !$DvtSparkChartDefaults$$ || "end" == $DvtChartPieLabelInfo$$ && $DvtSparkChartDefaults$$ ? new $dvt$$2$$.$Rect$($DvtSparkChartEventManager$$, -$DvtChartPieLabelUtils$$, -$DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartPieLabelUtils$$) : new $dvt$$2$$.$Rect$($DvtSparkChartEventManager$$, -0.5 * $DvtChartPieLabelUtils$$, -$DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 
    1.5 * $DvtChartPieLabelUtils$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartPieLabelUtils$$), $DvtChartPieLabelInfo$$.$setInvisibleFill$(), $DvtChartStyleUtils$$.$addChild$($DvtChartPieLabelInfo$$));
    return $DvtChartStyleUtils$$
  };
  $DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($dvt$$2$$) {
    $dvt$$2$$.x = Math.round($dvt$$2$$.x);
    $dvt$$2$$.y = Math.round($dvt$$2$$.y);
    $dvt$$2$$.$w$ = Math.round($dvt$$2$$.$w$);
    $dvt$$2$$.$h$ = Math.round($dvt$$2$$.$h$)
  };
  $DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $JSCompiler_alias_NULL$$, $DvtSparkChartDefaults$$ = $dvt$$2$$.$getOptions$(), $DvtSparkChartAutomation$$ = $dvt$$2$$.$getEventManager$();
    if($DvtChartTooltipUtils$$.$isDataCursorEnabled$($dvt$$2$$)) {
      $DvtSparkChartEventManager$$ = new $DvtChartDataCursor$$($dvt$$2$$.$getCtx$(), $DvtSparkChartDefaults$$.styleDefaults.dataCursor, $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$));
      $DvtSparkChartEventManager$$.$setBehavior$($DvtChartTooltipUtils$$.$getDataCursorBehavior$($dvt$$2$$));
      $dvt$$2$$.$addChild$($DvtSparkChartEventManager$$);
      var $DvtChartStyleUtils$$ = new $DvtChartDataCursorHandler$$($dvt$$2$$, $DvtSparkChartEventManager$$);
      $DvtSparkChartAutomation$$.$setDataCursorHandler$($DvtChartStyleUtils$$);
      $dvt$$2$$.$positionDataCursor$($DvtSparkChartDefaults$$.dataCursorPosition)
    }else {
      $DvtSparkChartAutomation$$.$setDataCursorHandler$($JSCompiler_alias_NULL$$)
    }
    return $DvtSparkChartEventManager$$
  };
  var $DvtChartAxisRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartAxisRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartTypeUtils$$.$hasAxes$($dvt$$2$$) && ($DvtChartAxisUtils$$.$applyInitialZooming$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isBubble$($dvt$$2$$) && $DvtChartMarkerUtils$$.$calcBubbleSizes$($dvt$$2$$, $DvtSparkChartDefaults$$), $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) ? $DvtChartAxisRenderer$$.$_renderPolar$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : $DvtChartAxisRenderer$$.$_renderCartesian$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$))
  };
  $DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.$clone$(), $DvtChartMarkerUtils$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addAxisGaps$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartPieRenderUtils$$ && $DvtChartMarkerUtils$$ == $DvtChartDataChangeRangeMarker$$ && ($DvtChartPieLabelUtils$$.yAxis._skipHighestTick = $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$.y2Axis._skipHighestTick = !$DvtChartPieLabelInfo$$);
    var $DvtChartPieUtils$$ = $DvtChartAxisRenderer$$.$_createYAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$), $DvtChartDataChangeMarker$$ = $DvtChartAxisRenderer$$.$_createY2Axis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$);
    if(($DvtChartPieLabelUtils$$ = !$DvtChartPieRenderUtils$$ && "on" == $DvtChartPieLabelUtils$$.y2Axis.alignTickMarks && $DvtChartPieLabelUtils$$.y2Axis.step == $JSCompiler_alias_NULL$$) && $DvtChartPieUtils$$ && $DvtChartDataChangeMarker$$) {
      $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartPieUtils$$, $DvtChartDataChangeMarker$$), $DvtChartPieLabelInfo$$ || ($DvtChartDataChangeMarker$$.$dim$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartDataChangeMarker$$.axis, $DvtSparkChartEventManager$$.$y2Axis$, $DvtChartDataChangeMarker$$.options, "y2", $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$))
    }
    var $DvtChartDataChangeLineArea$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y"), $DvtChartLineArea$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "y2");
    $DvtChartPieRenderUtils$$ && $DvtChartMarkerUtils$$ == $DvtChartDataChangeRangeMarker$$ ? ($DvtChartPieLabelInfo$$ ? ($DvtChartMarkerUtils$$ = Math.max($DvtChartPieUtils$$.$dim$.$h$ + $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$.$dim$.$h$ + $DvtChartLineArea$$), $DvtChartPieUtils$$.$dim$.$h$ = $DvtChartMarkerUtils$$ - $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$.$dim$.$h$ = $DvtChartMarkerUtils$$ - $DvtChartLineArea$$) : ($DvtChartMarkerUtils$$ = Math.max($DvtChartPieUtils$$.$dim$.$w$ + 
    $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$.$dim$.$w$ + $DvtChartLineArea$$), $DvtChartPieUtils$$.$dim$.$w$ = $DvtChartMarkerUtils$$ - $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$.$dim$.$w$ = $DvtChartMarkerUtils$$ - $DvtChartLineArea$$), $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$.$clone$(), $DvtChartPieUtils$$, $DvtChartDataChangeLineArea$$)) : $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtChartPieUtils$$, $DvtChartDataChangeLineArea$$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtChartDataChangeMarker$$, $DvtChartLineArea$$);
    $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isBar$($DvtSparkChartEventManager$$) && $DvtSparkChartAutomation$$.$w$ > $DvtChartMarkerUtils$$ && ($DvtChartMarkerUtils$$ *= Math.floor($DvtSparkChartAutomation$$.$w$ / $DvtChartMarkerUtils$$), $DvtSparkChartAutomation$$.x += ($DvtSparkChartAutomation$$.$w$ - $DvtChartMarkerUtils$$) / 2, $DvtSparkChartAutomation$$.$w$ = $DvtChartMarkerUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_createXAxis$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeFunnelSlice$$);
    $DvtSparkChartDefaults$$.axis.$render$($DvtSparkChartDefaults$$.options, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$);
    $DvtChartAxisRenderer$$.$_positionAxis$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, "x"));
    $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartEventManager$$);
    $DvtChartDataChangeRangeMarker$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelInfo$$ && $DvtChartDataChangeRangeMarker$$);
    $DvtChartMarkerUtils$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($DvtSparkChartAutomation$$, 1 - $DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$, !$DvtChartPieLabelInfo$$ || !$DvtChartDataChangeRangeMarker$$);
    $DvtChartPieLabelInfo$$ ? ($DvtChartPieUtils$$ && ($DvtChartPieUtils$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieRenderUtils$$ ? $DvtChartPieUtils$$.axis.$render$($DvtChartPieUtils$$.options, $DvtChartDataChangeFunnelSlice$$.$w$, $DvtChartPieUtils$$.$dim$.$h$, $DvtChartDataChangeFunnelSlice$$.x, 0) : $DvtChartPieUtils$$.axis.$render$($DvtChartPieUtils$$.options, $DvtSparkChartAutomation$$.$w$, $DvtChartPieUtils$$.$dim$.$h$)), $DvtChartPieLabelUtils$$ && ($DvtChartPieUtils$$ && 
    $DvtChartDataChangeMarker$$) && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartPieUtils$$, $DvtChartDataChangeMarker$$), $DvtChartDataChangeMarker$$ && ($DvtChartDataChangeMarker$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.x), $DvtChartPieRenderUtils$$ ? $DvtChartDataChangeMarker$$.axis.$render$($DvtChartDataChangeMarker$$.options, $DvtChartMarkerUtils$$.$w$, $DvtChartDataChangeMarker$$.$dim$.$h$, $DvtChartMarkerUtils$$.x, 0) : $DvtChartDataChangeMarker$$.axis.$render$($DvtChartDataChangeMarker$$.options, 
    $DvtSparkChartAutomation$$.$w$, $DvtChartDataChangeMarker$$.$dim$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$)) : ($DvtChartPieUtils$$ && ($DvtChartPieRenderUtils$$ ? $DvtChartPieUtils$$.axis.$render$($DvtChartPieUtils$$.options, $DvtChartPieUtils$$.$dim$.$w$, $DvtChartDataChangeFunnelSlice$$.$h$, 0, $DvtChartDataChangeFunnelSlice$$.y) : $DvtChartPieUtils$$.axis.$render$($DvtChartPieUtils$$.options, $DvtChartPieUtils$$.$dim$.$w$, 
    $DvtSparkChartAutomation$$.$h$)), $DvtChartPieLabelUtils$$ && ($DvtChartPieUtils$$ && $DvtChartDataChangeMarker$$) && $DvtChartAxisRenderer$$.$_alignYAxes$($DvtChartPieUtils$$, $DvtChartDataChangeMarker$$), $DvtChartDataChangeMarker$$ && ($DvtChartPieRenderUtils$$ ? $DvtChartDataChangeMarker$$.axis.$render$($DvtChartDataChangeMarker$$.options, $DvtChartDataChangeMarker$$.$dim$.$w$, $DvtChartMarkerUtils$$.$h$, 0, $DvtChartMarkerUtils$$.y) : $DvtChartDataChangeMarker$$.axis.$render$($DvtChartDataChangeMarker$$.options, 
    $DvtChartDataChangeMarker$$.$dim$.$w$, $DvtSparkChartAutomation$$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$, $DvtChartPieUtils$$, $DvtChartDataChangeMarker$$));
    $DvtChartAxisRenderer$$.$_storeAxes$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieUtils$$, $DvtChartDataChangeMarker$$)
  };
  $DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartAxisRenderer$$.$_createXAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartAutomation$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartAutomation$$.axis.$render$($DvtSparkChartAutomation$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_createYAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.x);
    $DvtSparkChartEventManager$$.axis.$setTranslateY$($DvtSparkChartDefaults$$.y);
    $DvtSparkChartEventManager$$.axis.$render$($DvtSparkChartEventManager$$.options, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$);
    $DvtChartAxisRenderer$$.$_storeAxes$($dvt$$2$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$)
  };
  $DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getXAxisPosition$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtChartPieLabelUtils$$.xAxis);
    $DvtChartPieRenderUtils$$.position = $DvtChartPieLabelInfo$$;
    $DvtChartPieRenderUtils$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneXAxis$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.groupSeparators = $DvtChartPieLabelUtils$$.styleDefaults.groupSeparators;
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieRenderUtils$$, "x", $DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.groups = $DvtChartPieLabelUtils$$.groups;
    $DvtChartPieRenderUtils$$._groupWidthRatios = $DvtChartAxisUtils$$.$getGroupWidthRatios$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$.timeAxisType = $DvtChartAxisUtils$$.$getTimeAxisType$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$._environment = $DvtChartPieLabelUtils$$._environment;
    $DvtChartPieRenderUtils$$._locale = $DvtChartPieLabelUtils$$._locale;
    $DvtChartPieRenderUtils$$.drilling = $DvtChartPieLabelUtils$$.drilling;
    var $DvtChartDataChangeFunnelSlice$$ = "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$, $DvtChartMarkerUtils$$ = $DvtChartAxisUtils$$.$isGridShifted$($DvtSparkChartEventManager$$);
    "tangential" == $DvtChartPieLabelInfo$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartEventManager$$) ? $DvtChartMarkerUtils$$ ? ($DvtChartPieRenderUtils$$.startGroupOffset = 0.5, $DvtChartPieRenderUtils$$.endGroupOffset = 0.5) : $DvtChartPieRenderUtils$$.endGroupOffset = 1 : ($DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$getAxisOffset$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$.startGroupOffset = $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$.endGroupOffset = $DvtChartPieLabelInfo$$, 
    $DvtChartTypeUtils$$.$hasUncenteredSeries$($DvtSparkChartEventManager$$) && ($DvtChartPieRenderUtils$$.endGroupOffset += 1), !$DvtChartEventUtils$$.$isScrollable$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) && ($DvtChartPieLabelInfo$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, 
    "y") && ($DvtChartPieRenderUtils$$[($DvtChartDataChangeFunnelSlice$$ ? "start" : "end") + "GroupOffset"] += 0.04 * $DvtChartPieLabelInfo$$), $DvtChartAxisUtils$$.$isAxisRendered$($DvtSparkChartEventManager$$, "y2") && $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartEventManager$$, "y2") && ($DvtChartPieRenderUtils$$[($DvtChartDataChangeFunnelSlice$$ ? "end" : "start") + "GroupOffset"] += 0.04 * $DvtChartPieLabelInfo$$)));
    $DvtChartPieRenderUtils$$.leftBuffer = $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartAutomation$$.x - $DvtChartStyleUtils$$.x : 0;
    $DvtChartPieRenderUtils$$.rightBuffer = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartStyleUtils$$.$w$ + $DvtChartStyleUtils$$.x - ($DvtSparkChartAutomation$$.$w$ + $DvtSparkChartAutomation$$.x) : 0;
    $DvtChartPieRenderUtils$$._renderGridAtLabels = !$DvtChartMarkerUtils$$ || $DvtChartAxisUtils$$.$hasTimeAxis$($DvtSparkChartEventManager$$);
    $DvtChartDataChangeFunnelSlice$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeFunnelSlice$$);
    $DvtSparkChartEventManager$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartEventManager$$.$xAxis$, $DvtChartPieRenderUtils$$, "x", $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    $DvtChartPieRenderUtils$$._minOverflowCoord = $DvtChartPieLabelUtils$$._minOverflowCoord - $DvtSparkChartAutomation$$.x;
    $DvtChartPieRenderUtils$$._maxOverflowCoord = $DvtChartPieLabelUtils$$._maxOverflowCoord - $DvtSparkChartAutomation$$.x;
    return{axis:$DvtChartDataChangeFunnelSlice$$, options:$DvtChartPieRenderUtils$$, $dim$:$DvtSparkChartEventManager$$}
  };
  $DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if($DvtChartTypeUtils$$.$hasY2DataOnly$($DvtSparkChartEventManager$$)) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtChartPieLabelUtils$$.yAxis);
    $DvtChartPieLabelInfo$$.position = $DvtChartAxisUtils$$.$getYAxisPosition$($DvtSparkChartEventManager$$);
    $DvtChartPieLabelInfo$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneYAxis$($DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelInfo$$, "y", $DvtSparkChartEventManager$$);
    $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$);
    var $DvtChartPieRenderUtils$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
    $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$yAxis$, $DvtChartPieLabelInfo$$, "y", $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
    $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$, "y");
    $DvtChartPieLabelUtils$$.yAxis.min = $DvtChartPieLabelInfo$$.min;
    $DvtChartPieLabelUtils$$.yAxis.max = $DvtChartPieLabelInfo$$.max;
    return{axis:$DvtChartPieRenderUtils$$, options:$DvtChartPieLabelInfo$$, $dim$:$DvtSparkChartDefaults$$}
  };
  $DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$();
    if($DvtChartTypeUtils$$.$hasY2Data$($DvtSparkChartEventManager$$)) {
      var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtChartPieLabelUtils$$.y2Axis);
      $DvtChartPieLabelInfo$$.position = $DvtChartAxisUtils$$.$getY2AxisPosition$($DvtSparkChartEventManager$$);
      $DvtChartPieLabelInfo$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneY2Axis$($DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($DvtChartPieLabelInfo$$, "y2", $DvtSparkChartEventManager$$);
      $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$);
      var $DvtChartPieRenderUtils$$ = new $DvtChartAxis$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
      $DvtSparkChartDefaults$$.$addChild$($DvtChartPieRenderUtils$$);
      $DvtSparkChartDefaults$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$.$y2Axis$, $DvtChartPieLabelInfo$$, "y2", $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$);
      $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$, $DvtSparkChartEventManager$$, "y2");
      $DvtChartPieLabelUtils$$.y2Axis.min = $DvtChartPieLabelInfo$$.min;
      $DvtChartPieLabelUtils$$.y2Axis.max = $DvtChartPieLabelInfo$$.max;
      return{axis:$DvtChartPieRenderUtils$$, options:$DvtChartPieLabelInfo$$, $dim$:$DvtSparkChartDefaults$$}
    }
  };
  $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getOptions$();
    $dvt$$2$$.skin = $DvtSparkChartAutomation$$.skin;
    $dvt$$2$$.tickLabel.position = $DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) ? "inside" : "outside";
    $dvt$$2$$.baselineScaling = $DvtChartAxisUtils$$.$getBaselineScaling$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$);
    if($DvtChartAxisUtils$$.$isTickLabelInside$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$) || "tangential" == $dvt$$2$$.position) {
      $dvt$$2$$._skipHighestTick = $JSCompiler_alias_TRUE$$
    }
    $dvt$$2$$.zoomAndScroll = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? "off" : $DvtSparkChartAutomation$$.zoomAndScroll;
    $dvt$$2$$._isOverview = $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartDefaults$$);
    if("x" != $DvtSparkChartEventManager$$ || !$DvtChartAxisUtils$$.$hasGroupAxis$($DvtSparkChartDefaults$$)) {
      $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getMinMaxValue$($DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$), $dvt$$2$$.dataMin = $dvt$$2$$.dataMin != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.dataMin : $DvtSparkChartEventManager$$.min, $dvt$$2$$.dataMax = $dvt$$2$$.dataMax != $JSCompiler_alias_NULL$$ ? $dvt$$2$$.dataMax : $DvtSparkChartEventManager$$.max
    }
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) && ($dvt$$2$$.polarGridShape = $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? "polygon" : "circle", $dvt$$2$$._radius = $DvtSparkChartDefaults$$.$getRadius$())
  };
  $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$.timeAxisType = "disabled";
    $DvtChartEventUtils$$.$isLiveScroll$($DvtSparkChartDefaults$$) && ($DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartDefaults$$) && !$DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$)) && ($DvtSparkChartEventManager$$._continuousExtent = "on");
    if($DvtSparkChartEventManager$$.isStandalone) {
      $DvtSparkChartEventManager$$.leftBuffer = 0, $DvtSparkChartEventManager$$.rightBuffer = 0
    }else {
      if($DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartDefaults$$)) {
        $DvtSparkChartEventManager$$.leftBuffer = Infinity, $DvtSparkChartEventManager$$.rightBuffer = Infinity
      }else {
        var $DvtSparkChartAutomation$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartDefaults$$.$getCtx$());
        $DvtSparkChartEventManager$$.leftBuffer = $DvtSparkChartAutomation$$ ? 0 : $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$;
        $DvtSparkChartEventManager$$.rightBuffer = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$Axis$.$MINIMUM_AXIS_BUFFER$ : 0
      }
    }
  };
  $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$ = function $$DvtChartAxisRenderer$$$$_adjustYAxisForLabels$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$getOptions$();
    if($DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartAutomation$$)) {
      var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelInfo$$.styleDefaults.dataLabelStyle, $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelInfo$$.styleDefaults.stackLabelStyle, $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getInfo$(), $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $dvt$$2$$.$TextUtils$.$getTextStringHeight$($DvtSparkChartAutomation$$.$getCtx$(), $DvtChartMarkerUtils$$ ? $DvtChartDataChangeFunnelSlice$$ : 
      $DvtChartPieRenderUtils$$), $DvtChartDataChangeFunnelSlice$$ = 0;
      "log" == $DvtSparkChartDefaults$$.scale ? $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartEventManager$$.$getUnboundedValueAt$($DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtChartPieLabelInfo$$.$DataMax$) - $DvtChartPieRenderUtils$$) - $DvtChartPieLabelInfo$$.$DataMax$ : ($DvtSparkChartEventManager$$ = 1, $DvtChartTypeUtils$$.$isSplitDualY$($DvtSparkChartAutomation$$) && ($DvtSparkChartEventManager$$ = "y" == $DvtChartPieLabelUtils$$ ? $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$) : 
      1 - $DvtChartStyleUtils$$.$getSplitterPosition$($DvtSparkChartAutomation$$)), $DvtChartDataChangeFunnelSlice$$ = Math.abs($DvtChartPieLabelInfo$$.$MaxValue$ - $DvtChartPieLabelInfo$$.$MinValue$) / (Math.abs($DvtChartPieLabelInfo$$.$getEndCoord$() - $DvtChartPieLabelInfo$$.$getStartCoord$()) * $DvtSparkChartEventManager$$) * $DvtChartPieRenderUtils$$);
      $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartAutomation$$) && ($DvtChartDataChangeFunnelSlice$$ *= 4);
      $DvtChartPieLabelInfo$$.$DataMin$ - $DvtChartPieLabelInfo$$.$GlobalMin$ < $DvtChartDataChangeFunnelSlice$$ && 0 > $DvtChartPieLabelInfo$$.$DataMin$ && ($DvtSparkChartDefaults$$.dataMin -= $DvtChartDataChangeFunnelSlice$$);
      $DvtChartPieLabelInfo$$.$GlobalMax$ - $DvtChartPieLabelInfo$$.$DataMax$ < $DvtChartDataChangeFunnelSlice$$ && 0 < $DvtChartPieLabelInfo$$.$DataMax$ && ($DvtSparkChartDefaults$$.dataMax += $DvtChartDataChangeFunnelSlice$$)
    }
  };
  $DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$.isStandalone, $DvtChartMarkerUtils$$ = $DvtChartPieLabelUtils$$.position, $DvtChartPieUtils$$ = "top" == $DvtChartMarkerUtils$$ || "bottom" == $DvtChartMarkerUtils$$, $DvtChartDataChangeRangeMarker$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$), $DvtChartDataChangeMarker$$ = $DvtChartPieLabelUtils$$.maxSize, $DvtChartDataChangeLineArea$$ = $DvtChartPieLabelUtils$$.size;
    $DvtChartTypeUtils$$ = $DvtChartPieLabelInfo$$.$w$;
    var $DvtChartLineArea$$ = $DvtChartPieLabelInfo$$.$h$;
    if("radial" == $DvtChartMarkerUtils$$ || "tangential" == $DvtChartMarkerUtils$$) {
      $DvtChartLineArea$$ = $DvtChartTypeUtils$$ = 0
    }else {
      if("off" == $DvtChartPieLabelUtils$$.rendered) {
        $DvtChartPieUtils$$ ? $DvtChartLineArea$$ = 0 : $DvtChartTypeUtils$$ = 0
      }else {
        if($DvtChartDataChangeFunnelSlice$$) {
          $DvtChartPieUtils$$ ? $DvtChartLineArea$$ = $DvtChartPieLabelInfo$$.$h$ - $DvtChartDataChangeRangeMarker$$ : $DvtChartTypeUtils$$ = $DvtChartPieLabelInfo$$.$w$ - $DvtChartDataChangeRangeMarker$$
        }else {
          if($DvtChartDataChangeLineArea$$ != $JSCompiler_alias_NULL$$) {
            $DvtChartPieUtils$$ ? $DvtChartLineArea$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeLineArea$$, $DvtChartPieRenderUtils$$.$h$) - $DvtChartDataChangeRangeMarker$$ : $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeLineArea$$, $DvtChartPieRenderUtils$$.$w$) - $DvtChartDataChangeRangeMarker$$
          }else {
            if($DvtSparkChartEventManager$$.$getOptions$()._duringAnimation) {
              $DvtChartPieUtils$$ ? ($DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieLabelUtils$$._startOverflow = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.$getRightOverflow$() : $DvtSparkChartAutomation$$.$getLeftOverflow$(), $DvtChartPieLabelUtils$$._endOverflow = $DvtChartPieLabelInfo$$ ? $DvtSparkChartAutomation$$.$getLeftOverflow$() : $DvtSparkChartAutomation$$.$getRightOverflow$(), $DvtChartLineArea$$ = $DvtSparkChartAutomation$$.getHeight()) : 
              $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$.getWidth()
            }else {
              return $DvtChartPieUtils$$ ? $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeMarker$$, $DvtChartPieRenderUtils$$.$h$) - $DvtChartDataChangeRangeMarker$$) : $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartDataChangeMarker$$, $DvtChartPieRenderUtils$$.$w$) - $DvtChartDataChangeRangeMarker$$, $DvtChartPieLabelInfo$$.$h$)
            }
          }
        }
      }
    }
    $DvtChartAxisUtils$$.$isYAdjustmentNeeded$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$.$getPreferredSize$($DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartLineArea$$);
    return new $dvt$$2$$.$Dimension$($DvtChartTypeUtils$$, $DvtChartLineArea$$)
  };
  $DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$.$isHorizontal$($dvt$$2$$), $DvtSparkChartAutomation$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($dvt$$2$$), $DvtChartStyleUtils$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "x"), $DvtChartPieLabelInfo$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y"), $DvtChartPieRenderUtils$$ = $DvtChartAxisUtils$$.$isAxisRendered$($dvt$$2$$, "y2"), $DvtChartDataChangeFunnelSlice$$ = 
    $dvt$$2$$.$getOptions$().layout.verticalAxisGap, $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$ ? $DvtChartDataChangeFunnelSlice$$ * $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "x") : $DvtChartDataChangeFunnelSlice$$ * Math.max($DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y"), $DvtChartAxisUtils$$.$getGapScalingFactor$($dvt$$2$$, "y2")), $DvtChartDataChangeFunnelSlice$$ = Math.ceil($DvtChartDataChangeFunnelSlice$$);
    if($DvtSparkChartDefaults$$ && !("top" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$) && !("top" == $DvtChartStyleUtils$$ && $DvtChartPieRenderUtils$$) || !$DvtSparkChartDefaults$$) {
      $DvtSparkChartEventManager$$.y += $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartEventManager$$.$h$ -= $DvtChartDataChangeFunnelSlice$$
    }
    if($DvtSparkChartDefaults$$ && !("bottom" == $DvtSparkChartAutomation$$ && $DvtChartPieLabelInfo$$) && !("bottom" == $DvtChartStyleUtils$$ && $DvtChartPieRenderUtils$$) || !$DvtSparkChartDefaults$$ && !$DvtChartPieLabelUtils$$) {
      $DvtSparkChartEventManager$$.$h$ -= $DvtChartDataChangeFunnelSlice$$
    }
  };
  $DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtSparkChartDefaults$$ && $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.options.position, $DvtSparkChartDefaults$$.axis, $DvtSparkChartDefaults$$.$dim$.$w$, $DvtSparkChartDefaults$$.$dim$.$h$, $DvtSparkChartAutomation$$)
  };
  $DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.axis.$getInfo$();
    if($DvtSparkChartDefaults$$) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getMinorTickCount$(), $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.options;
      $DvtChartStyleUtils$$._majorTickCount = $DvtSparkChartDefaults$$.$getMajorTickCount$();
      $DvtChartStyleUtils$$._minorTickCount = $DvtSparkChartAutomation$$
    }
  };
  $DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $dvt$$2$$.$clone$();
    $DvtSparkChartDefaults$$ ? ($DvtChartStyleUtils$$.$w$ = $dvt$$2$$.$w$ * $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.x = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$w$ * (1 - $DvtSparkChartEventManager$$) : 0) : ($DvtChartStyleUtils$$.$h$ = $dvt$$2$$.$h$ * $DvtSparkChartEventManager$$, $DvtChartStyleUtils$$.y = $DvtSparkChartAutomation$$ ? $dvt$$2$$.$h$ * (1 - $DvtSparkChartEventManager$$) : 0);
    return $DvtChartStyleUtils$$
  };
  $DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if($DvtSparkChartEventManager$$) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.axis.$getLeftOverflow$();
      $DvtSparkChartEventManager$$ = $DvtSparkChartEventManager$$.axis.$getRightOverflow$();
      $dvt$$2$$.x += $DvtChartStyleUtils$$;
      $dvt$$2$$.$w$ -= $DvtChartStyleUtils$$ + $DvtSparkChartEventManager$$;
      $DvtSparkChartDefaults$$ && $DvtSparkChartDefaults$$.axis.$setTranslateX$($DvtSparkChartDefaults$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartDefaults$$.options.position ? $DvtChartStyleUtils$$ : -$DvtSparkChartEventManager$$));
      $DvtSparkChartAutomation$$ && $DvtSparkChartAutomation$$.axis.$setTranslateX$($DvtSparkChartAutomation$$.axis.$getTranslateX$() + ("left" == $DvtSparkChartAutomation$$.options.position ? $DvtChartStyleUtils$$ : -$DvtSparkChartEventManager$$))
    }
  };
  $DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $dvt$$2$$.$xAxis$ && ($dvt$$2$$.$xAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$xAxis$));
    $dvt$$2$$.$yAxis$ && ($dvt$$2$$.$yAxis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$yAxis$));
    $dvt$$2$$.$y2Axis$ && ($dvt$$2$$.$y2Axis$.$destroy$(), $dvt$$2$$.removeChild($dvt$$2$$.$y2Axis$));
    $dvt$$2$$.$xAxis$ = $DvtSparkChartEventManager$$.axis;
    $dvt$$2$$.$yAxis$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartDefaults$$.axis : $JSCompiler_alias_NULL$$;
    $dvt$$2$$.$y2Axis$ = $DvtSparkChartAutomation$$ ? $DvtSparkChartAutomation$$.axis : $JSCompiler_alias_NULL$$
  };
  var $DvtChartLegendRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartLegendRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.legend.position;
    if(!("off" == $DvtChartPieLabelUtils$$.legend.rendered || "auto" == $DvtChartPieLabelUtils$$.legend.rendered && $DvtSparkChartEventManager$$.$_optionsCache$.hasLargeSeriesCount)) {
      var $DvtChartPieRenderUtils$$ = $dvt$$2$$.$JsonUtils$.$clone$($DvtChartPieLabelUtils$$.legend);
      delete $DvtChartPieRenderUtils$$.position;
      $DvtChartPieRenderUtils$$.skin = $DvtChartPieLabelUtils$$.skin;
      $DvtChartPieRenderUtils$$.hideAndShowBehavior = $DvtChartEventUtils$$.$getHideAndShowBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieRenderUtils$$.hoverBehavior = $DvtChartEventUtils$$.$getHoverBehavior$($DvtSparkChartEventManager$$);
      $DvtChartPieRenderUtils$$.hoverBehaviorDelay = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$($DvtSparkChartEventManager$$);
      $DvtChartPieRenderUtils$$.hiddenCategories = $DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$);
      $DvtChartPieRenderUtils$$.highlightedCategories = $DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$);
      "auto" == $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$.$w$ >= $DvtSparkChartAutomation$$.$h$ ? "end" : "bottom");
      var $DvtChartDataChangeFunnelSlice$$ = "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$;
      $DvtChartPieRenderUtils$$.orientation = $DvtChartDataChangeFunnelSlice$$ ? "horizontal" : "vertical";
      "start" == $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$.halign = "end");
      if("start" == $DvtChartPieLabelInfo$$ || "end" == $DvtChartPieLabelInfo$$) {
        $DvtChartPieRenderUtils$$.valign = "middle"
      }
      "top" == $DvtChartPieLabelInfo$$ && ($DvtChartPieRenderUtils$$.valign = "bottom");
      if("top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$) {
        $DvtChartPieRenderUtils$$.halign = "center"
      }
      $DvtChartLegendRenderer$$.$_addLegendData$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$);
      if(0 != $DvtChartPieRenderUtils$$.sections.length) {
        var $DvtChartMarkerUtils$$ = $dvt$$2$$.$Legend$.newInstance($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartEventManager$$.$processEvent$, $DvtSparkChartEventManager$$);
        $DvtSparkChartEventManager$$.getId() != $JSCompiler_alias_NULL$$ && $DvtChartMarkerUtils$$.setId($DvtSparkChartEventManager$$.getId() + "legend");
        $DvtSparkChartDefaults$$.$addChild$($DvtChartMarkerUtils$$);
        var $DvtChartPieUtils$$;
        if($DvtChartPieRenderUtils$$.size != $JSCompiler_alias_NULL$$) {
          $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$ ? new $dvt$$2$$.$Dimension$($DvtSparkChartAutomation$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieRenderUtils$$.size, $DvtSparkChartAutomation$$.$h$)) : new $dvt$$2$$.$Dimension$($DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieRenderUtils$$.size, $DvtSparkChartAutomation$$.$w$), $DvtSparkChartAutomation$$.$h$)
        }else {
          $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtSparkChartAutomation$$.$w$ : $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieRenderUtils$$.maxSize, $DvtSparkChartAutomation$$.$w$);
          var $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartStyleUtils$$.$getSizeInPixels$($DvtChartPieRenderUtils$$.maxSize, $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartAutomation$$.$h$;
          $DvtChartPieUtils$$ = $DvtChartMarkerUtils$$.$getPreferredSize$($DvtChartPieRenderUtils$$, $DvtChartPieUtils$$, $DvtChartDataChangeRangeMarker$$)
        }
        $DvtChartMarkerUtils$$.$render$($DvtChartPieRenderUtils$$, $DvtChartPieUtils$$.$w$, $DvtChartPieUtils$$.$h$);
        $DvtChartPieRenderUtils$$ = $DvtChartDataChangeFunnelSlice$$ ? $DvtChartDefaults$$.$getGapHeight$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.layout.legendGapHeight) : $DvtChartDefaults$$.$getGapWidth$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.layout.legendGapWidth);
        $dvt$$2$$.$LayoutUtils$.position($DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$.$w$, $DvtChartPieUtils$$.$h$, $DvtChartPieRenderUtils$$);
        $DvtSparkChartAutomation$$ = $DvtChartMarkerUtils$$.$_bounds$;
        $DvtChartDataChangeFunnelSlice$$ = $DvtChartMarkerUtils$$.$localToStage$(new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y));
        $DvtSparkChartAutomation$$.x = $DvtChartDataChangeFunnelSlice$$.x;
        $DvtSparkChartAutomation$$.y = $DvtChartDataChangeFunnelSlice$$.y;
        $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) || ($DvtChartPieUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), "end" == $DvtChartPieLabelInfo$$ ? $DvtChartPieUtils$$ ? $DvtChartPieLabelUtils$$._minOverflowCoord = $DvtChartDataChangeFunnelSlice$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieRenderUtils$$ / 2 : $DvtChartPieLabelUtils$$._maxOverflowCoord = $DvtChartDataChangeFunnelSlice$$.x - $DvtChartPieRenderUtils$$ / 2 : "start" == 
        $DvtChartPieLabelInfo$$ && ($DvtChartPieUtils$$ ? $DvtChartPieLabelUtils$$._maxOverflowCoord = $DvtChartDataChangeFunnelSlice$$.x - $DvtChartPieRenderUtils$$ / 2 : $DvtChartPieLabelUtils$$._minOverflowCoord = $DvtChartDataChangeFunnelSlice$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieRenderUtils$$ / 2));
        $DvtSparkChartEventManager$$.$legend$ && ($DvtSparkChartEventManager$$.$legend$.$destroy$(), $DvtSparkChartDefaults$$.removeChild($DvtSparkChartEventManager$$.$legend$));
        $DvtSparkChartEventManager$$.$legend$ = $DvtChartMarkerUtils$$
      }
    }
  };
  $DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getSeriesItems$($dvt$$2$$, "vertical" == $DvtSparkChartEventManager$$.orientation);
    if(0 < $DvtSparkChartDefaults$$.length) {
      var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.seriesSection;
      $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$;
      $DvtSparkChartEventManager$$.sections.unshift($DvtSparkChartAutomation$$)
    }
    $DvtSparkChartDefaults$$ = $DvtChartLegendRenderer$$.$_getRefObjItems$($dvt$$2$$);
    0 < $DvtSparkChartDefaults$$.length && ($DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.referenceObjectSection, $DvtSparkChartAutomation$$.items = $DvtSparkChartDefaults$$, $DvtSparkChartEventManager$$.referenceObjectTitle && ($DvtSparkChartAutomation$$.title = $DvtSparkChartEventManager$$.referenceObjectTitle), $DvtSparkChartEventManager$$.sections.push($DvtSparkChartAutomation$$))
  };
  $DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = [], $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$;
    if("pie" == $DvtSparkChartEventManager$$.$getType$()) {
      for(var $DvtChartPieRenderUtils$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieRenderUtils$$.length;$DvtChartDataChangeFunnelSlice$$++) {
        $DvtChartPieLabelInfo$$ = $DvtChartPieRenderUtils$$[$DvtChartDataChangeFunnelSlice$$], ($DvtChartPieLabelUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$)) && $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$)
      }
      $DvtChartPieUtils$$.$hasOtherSeries$($DvtSparkChartEventManager$$) && ($DvtChartPieLabelUtils$$ = {id:$DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, text:$dvt$$2$$.$Bundle$.$getTranslation$($DvtSparkChartEventManager$$.$getOptions$(), "labelOther", $dvt$$2$$.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER"), categoryVisibility:0 <= $dvt$$2$$.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$.$getHiddenCategories$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", 
      symbolType:"marker", color:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.otherColor, borderColor:$DvtSparkChartEventManager$$.$getOptions$().styleDefaults.borderColor}, $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$))
    }else {
      var $DvtChartPieRenderUtils$$ = {}, $DvtChartDataChangeFunnelSlice$$ = {}, $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
      for($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartMarkerUtils$$;$DvtChartPieLabelInfo$$++) {
        if($DvtChartPieLabelUtils$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$)) {
          var $DvtChartDataChangeRangeMarker$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$);
          $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$) ? $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$] ? $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$].push($DvtChartPieLabelUtils$$) : $DvtChartDataChangeFunnelSlice$$[$DvtChartDataChangeRangeMarker$$] = [$DvtChartPieLabelUtils$$] : $DvtChartPieRenderUtils$$[$DvtChartDataChangeRangeMarker$$] ? $DvtChartPieRenderUtils$$[$DvtChartDataChangeRangeMarker$$].push($DvtChartPieLabelUtils$$) : 
          $DvtChartPieRenderUtils$$[$DvtChartDataChangeRangeMarker$$] = [$DvtChartPieLabelUtils$$]
        }
      }
      $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getStackCategories$($DvtSparkChartEventManager$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$);
      $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$) && $DvtChartTypeUtils$$.$isVertical$($DvtSparkChartEventManager$$) && $DvtSparkChartDefaults$$;
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$);
      $DvtSparkChartAutomation$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelUtils$$.y2, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$)
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$ = 0;$DvtChartPieLabelUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartPieLabelUtils$$++) {
      ($DvtChartStyleUtils$$ = $dvt$$2$$[$DvtSparkChartEventManager$$[$DvtChartPieLabelUtils$$]]) && ($DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$ ? $DvtSparkChartAutomation$$.concat($DvtChartStyleUtils$$.reverse()) : $DvtSparkChartAutomation$$.concat($DvtChartStyleUtils$$))
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getType$(), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.displayInLegend;
    if(!$DvtSparkChartAutomation$$ || "off" == $DvtChartDataChangeFunnelSlice$$ || "on" != $DvtChartDataChangeFunnelSlice$$ && ($DvtChartTypeUtils$$.$isFunnel$($DvtSparkChartEventManager$$) || $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$)) || "on" != $DvtChartDataChangeFunnelSlice$$ && !$DvtChartDataUtils$$.$hasSeriesData$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getSeriesLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if("on" != $DvtChartDataChangeFunnelSlice$$ && (!$DvtChartMarkerUtils$$ || 0 >= $dvt$$2$$.$StringUtils$.trim($DvtChartMarkerUtils$$).length)) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtChartDataChangeFunnelSlice$$ = {id:$DvtChartDataUtils$$.$getSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), text:$DvtChartMarkerUtils$$, categories:$DvtChartDataUtils$$.$getSeriesCategories$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), categoryVisibility:$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "visible" : "hidden"};
    "line" == $DvtChartPieLabelInfo$$ || "lineWithArea" == $DvtChartPieLabelInfo$$ || "scatter" == $DvtChartPieLabelUtils$$ || "bubble" == $DvtChartPieLabelUtils$$ ? ($DvtChartDataChangeFunnelSlice$$.lineStyle = $DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$.lineWidth = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$) ? ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_NULL$$, "source")) ? ($DvtChartDataChangeFunnelSlice$$.symbolType = "image", $DvtChartDataChangeFunnelSlice$$.source = $DvtChartPieLabelUtils$$) : ($DvtChartDataChangeFunnelSlice$$.symbolType = "none" == $DvtChartPieRenderUtils$$ ? "marker" : "lineWithMarker", "lineWithMarker" == $DvtChartDataChangeFunnelSlice$$.symbolType && 
    ($DvtChartDataChangeFunnelSlice$$.lineWidth = Math.min($DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$, $DvtChartDataChangeFunnelSlice$$.lineWidth)), $DvtChartDataChangeFunnelSlice$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$.markerColor = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) : $DvtChartDataChangeFunnelSlice$$.symbolType = "line") : 
    ($DvtChartDataChangeFunnelSlice$$.symbolType = "marker", "none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) && ($DvtChartDataChangeFunnelSlice$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)));
    $DvtChartDataChangeFunnelSlice$$.color = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartDataChangeFunnelSlice$$.borderColor = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartDataChangeFunnelSlice$$.pattern = $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartDataChangeFunnelSlice$$.action = $DvtSparkChartAutomation$$.action;
    $DvtChartDataChangeFunnelSlice$$._spb = $DvtSparkChartEventManager$$.$getShowPopupBehaviors$($DvtSparkChartAutomation$$._id);
    $DvtChartDataChangeFunnelSlice$$.drilling = $DvtChartEventUtils$$.$isSeriesDrillable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? "on" : "off";
    $DvtChartDataChangeFunnelSlice$$.shortDesc = $DvtSparkChartAutomation$$.shortDesc;
    return $DvtChartDataChangeFunnelSlice$$
  };
  $DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($dvt$$2$$) {
    var $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getRefObjs$($dvt$$2$$);
    if(0 >= $DvtSparkChartEventManager$$.length) {
      return[]
    }
    for(var $DvtSparkChartDefaults$$ = [], $DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtSparkChartEventManager$$.length;$DvtSparkChartAutomation$$++) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$[$DvtSparkChartAutomation$$];
      if($DvtChartStyleUtils$$ && "on" == $DvtChartStyleUtils$$.displayInLegend && $DvtChartStyleUtils$$.text) {
        var $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartStyleUtils$$);
        $DvtSparkChartDefaults$$.push({symbolType:"area" == $DvtChartPieLabelUtils$$ ? "square" : "line", text:$DvtChartStyleUtils$$.text, color:$DvtChartRefObjUtils$$.$getColor$($DvtChartStyleUtils$$), lineStyle:$DvtChartStyleUtils$$.lineStyle, lineWidth:$DvtChartRefObjUtils$$.$getLineWidth$($DvtChartStyleUtils$$), categories:$DvtChartRefObjUtils$$.$getRefObjCategories$($DvtChartStyleUtils$$), categoryVisibility:$DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartStyleUtils$$) ? "visible" : 
        "hidden", shortDesc:$DvtChartStyleUtils$$.shortDesc})
      }
    }
    return $DvtSparkChartDefaults$$
  };
  var $DvtChartPlotAreaRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartPlotAreaRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
  $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
  $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
  $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
  $DvtChartPlotAreaRenderer$$.$render$ = function $$DvtChartPlotAreaRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    "off" == $dvt$$2$$.$getOptions$().plotArea.rendered ? $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) : 0 < $DvtSparkChartDefaults$$.$w$ && 0 < $DvtSparkChartDefaults$$.$h$ && ($dvt$$2$$.$_currentMarkers$ = [], $dvt$$2$$.$_currentAreas$ = [], $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, 
    $DvtSparkChartDefaults$$), $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$))
  };
  $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderBackgroundObjects$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$);
    $DvtChartPieRenderUtils$$ ? $DvtChartPieLabelInfo$$.$setSolidFill$($DvtChartPieRenderUtils$$) : $DvtChartPieLabelInfo$$.$setInvisibleFill$();
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelInfo$$);
    if($DvtChartPieLabelUtils$$.xAxis.referenceObjects || $DvtChartPieLabelUtils$$.yAxis.referenceObjects || $DvtChartPieLabelUtils$$.y2Axis.referenceObjects) {
      $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$), $DvtChartRefObjRenderer$$.$renderBackgroundObjects$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$)
    }
    $DvtChartTypeUtils$$.$isBLAC$($DvtSparkChartEventManager$$) && ($DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$), $DvtSparkChartEventManager$$.$__setAreaContainer$($DvtChartPieLabelUtils$$), $DvtChartTypeUtils$$.$hasAreaSeries$($DvtSparkChartEventManager$$) && $DvtChartPlotAreaRenderer$$.$_renderAreas$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $JSCompiler_alias_FALSE$$))
  };
  $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$ = function $$DvtChartPlotAreaRenderer$$$$_getBackgroundShape$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$;
    $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getCtx$();
    if($DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$)) {
      var $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.x + $DvtSparkChartDefaults$$.$w$ / 2, $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.y + $DvtSparkChartDefaults$$.$h$ / 2;
      $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartStyleUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$)) : $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Circle$($DvtSparkChartAutomation$$, 
      $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$.$getRadius$())
    }else {
      $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Rect$($DvtSparkChartAutomation$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$)
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartPlotAreaRenderer$$.$_renderTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($dvt$$2$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $dvt$$2$$.$xAxis$ && ($dvt$$2$$.$yAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$yAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$xAxis$ && $dvt$$2$$.$y2Axis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "x") && (!$dvt$$2$$.$yAxis$ || $DvtChartTypeUtils$$.$isSplitDualY$($dvt$$2$$)) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$xAxis$, $dvt$$2$$.$y2Axis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$yAxis$ && ($dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$yAxis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$);
    $dvt$$2$$.$y2Axis$ && ($dvt$$2$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($dvt$$2$$, "y2")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($dvt$$2$$, $DvtSparkChartEventManager$$, $dvt$$2$$.$y2Axis$, $dvt$$2$$.$xAxis$, $DvtSparkChartDefaults$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMajorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().majorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMajorTickCoords$(), $DvtSparkChartDefaults$$.$getBaselineCoord$(), $DvtSparkChartAutomation$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMinorTicks$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.$getOptions$().minorTick, $DvtSparkChartDefaults$$.$getPosition$(), $DvtSparkChartDefaults$$.$getMinorTickCoords$(), $JSCompiler_alias_NULL$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLine$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getOptions$();
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.position, $DvtChartPieLabelUtils$$ = "bottom" == $DvtChartPieLabelUtils$$ || "right" == $DvtChartPieLabelUtils$$ || "tangential" == $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$.$getMaxCoord$() : $DvtSparkChartAutomation$$.$getMinCoord$();
    $DvtChartPlotAreaRenderer$$.$_renderGridlines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.axisLine, $DvtSparkChartAutomation$$.$getPosition$(), [$DvtChartPieLabelUtils$$], $JSCompiler_alias_NULL$$, $DvtChartStyleUtils$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridlines$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$) {
    var $DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.lineColor, $DvtChartDataChangeFunnelSlice$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPieRenderUtils$$, 1, $DvtSparkChartAutomation$$.lineWidth);
    $DvtSparkChartAutomation$$.lineStyle && $DvtChartDataChangeFunnelSlice$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.lineStyle));
    var $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$.$clone$();
    "inherit" != $DvtSparkChartAutomation$$.baselineColor && ($DvtChartPieRenderUtils$$ = "auto" == $DvtSparkChartAutomation$$.baselineColor ? $dvt$$2$$.$ColorUtils$.$getDarker$($DvtChartPieRenderUtils$$, 0.4) : $DvtSparkChartAutomation$$.baselineColor, $DvtChartMarkerUtils$$.$setColor$($DvtChartPieRenderUtils$$));
    $DvtChartMarkerUtils$$.$setWidth$($DvtSparkChartAutomation$$.baselineWidth != $JSCompiler_alias_NULL$$ ? $DvtSparkChartAutomation$$.baselineWidth : $DvtSparkChartAutomation$$.lineWidth);
    $DvtChartMarkerUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartAutomation$$.baselineStyle ? $DvtSparkChartAutomation$$.baselineStyle : $DvtSparkChartAutomation$$.lineStyle));
    for($DvtSparkChartAutomation$$ = 0;$DvtSparkChartAutomation$$ < $DvtChartPieLabelUtils$$.length;$DvtSparkChartAutomation$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderGridline$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$[$DvtSparkChartAutomation$$], $DvtChartTypeUtils$$ != $JSCompiler_alias_NULL$$ && $DvtChartPieLabelUtils$$[$DvtSparkChartAutomation$$] == $DvtChartTypeUtils$$ ? $DvtChartMarkerUtils$$ : $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$)
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderGridline$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridline$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelInfo$$;
    $DvtChartPieLabelInfo$$ = $DvtSparkChartDefaults$$.$getCtx$();
    var $DvtChartPieRenderUtils$$ = !$dvt$$2$$.$Agent$.$isTouchDevice$() || 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$();
    "radial" == $DvtSparkChartAutomation$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtChartStyleUtils$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$(0, 0, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartStyleUtils$$), $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Polygon$($DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$)) : $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Circle$($DvtChartPieLabelInfo$$, 0, 0, $DvtChartStyleUtils$$), $DvtChartPieLabelInfo$$.$setInvisibleFill$(), 
    $DvtChartPieLabelInfo$$.$setTranslate$($DvtChartTypeUtils$$.x + $DvtChartTypeUtils$$.$w$ / 2, $DvtChartTypeUtils$$.y + $DvtChartTypeUtils$$.$h$ / 2)) : "tangential" == $DvtSparkChartAutomation$$ ? ($DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Line$($DvtChartPieLabelInfo$$, 0, 0, $DvtSparkChartEventManager$$.$getRadius$() * Math.sin($DvtChartStyleUtils$$), -$DvtSparkChartEventManager$$.$getRadius$() * Math.cos($DvtChartStyleUtils$$)), 0.01 > $DvtChartStyleUtils$$ % Math.PI / 2 && $DvtChartPieRenderUtils$$ && 
    $DvtChartPieLabelInfo$$.$setPixelHinting$(), $DvtChartPieLabelInfo$$.$setTranslate$($DvtChartTypeUtils$$.x + $DvtChartTypeUtils$$.$w$ / 2, $DvtChartTypeUtils$$.y + $DvtChartTypeUtils$$.$h$ / 2)) : ($DvtChartPieLabelInfo$$ = "top" == $DvtSparkChartAutomation$$ || "bottom" == $DvtSparkChartAutomation$$ ? new $dvt$$2$$.$Line$($DvtChartPieLabelInfo$$, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$.y, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$.y + $DvtChartTypeUtils$$.$h$) : new $dvt$$2$$.$Line$($DvtChartPieLabelInfo$$, 
    $DvtChartTypeUtils$$.x, $DvtChartStyleUtils$$, $DvtChartTypeUtils$$.x + $DvtChartTypeUtils$$.$w$, $DvtChartStyleUtils$$), $DvtChartPieRenderUtils$$ && $DvtChartPieLabelInfo$$.$setPixelHinting$());
    $DvtChartPieLabelInfo$$.$setStroke$($DvtChartPieLabelUtils$$);
    $DvtChartPieLabelInfo$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelInfo$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isBLAC$($dvt$$2$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$hasBarSeries$($dvt$$2$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$hasCandlestickSeries$($dvt$$2$$), $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$), $DvtChartPieUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, 
    $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    var $DvtChartDataChangeRangeMarker$$ = $DvtSparkChartAutomation$$.plotArea.borderColor, $DvtChartDataChangeMarker$$ = $DvtSparkChartAutomation$$.plotArea.borderWidth;
    if($DvtChartDataChangeRangeMarker$$ && 0 != $DvtChartDataChangeMarker$$) {
      var $DvtChartDataChangeLineArea$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($dvt$$2$$, $DvtSparkChartDefaults$$);
      $DvtChartDataChangeLineArea$$.$setInvisibleFill$();
      $DvtChartDataChangeLineArea$$.$setSolidStroke$($DvtChartDataChangeRangeMarker$$, $JSCompiler_alias_NULL$$, $DvtChartDataChangeMarker$$);
      $DvtChartDataChangeLineArea$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $DvtSparkChartEventManager$$.$addChild$($DvtChartDataChangeLineArea$$)
    }
    $DvtChartPieLabelUtils$$ ? ($DvtChartMarkerUtils$$ && $DvtChartPlotAreaRenderer$$.$_renderAreas$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelInfo$$ && $DvtChartPlotAreaRenderer$$.$_renderBars$($dvt$$2$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$), $DvtChartPieRenderUtils$$ && $DvtChartPlotAreaRenderer$$.$_renderLines$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$), $DvtChartDataChangeFunnelSlice$$ && 
    $DvtChartPlotAreaRenderer$$.$_renderStock$($dvt$$2$$, $DvtChartPieUtils$$)) : $DvtChartTypeUtils$$.$isScatterBubble$($dvt$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$);
    if($DvtSparkChartAutomation$$.xAxis.referenceObjects || $DvtSparkChartAutomation$$.yAxis.referenceObjects || $DvtSparkChartAutomation$$.y2Axis.referenceObjects) {
      $DvtChartPieUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$), $DvtChartRefObjRenderer$$.$renderForegroundObjects$($dvt$$2$$, $DvtChartPieUtils$$, $DvtSparkChartDefaults$$)
    }
    $DvtSparkChartEventManager$$ = $DvtChartDataUtils$$.$getInitialSelection$($dvt$$2$$);
    $DvtChartEventUtils$$.$setInitialSelection$($dvt$$2$$, $DvtSparkChartEventManager$$);
    $dvt$$2$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($dvt$$2$$))
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabel$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$) {
    if(!$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) {
      var $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getDataLabel$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$);
      if($DvtChartPieUtils$$ != $JSCompiler_alias_NULL$$) {
        var $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getDataLabelPosition$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$);
        if("none" != $DvtChartDataChangeRangeMarker$$) {
          $DvtChartPieUtils$$ = new $dvt$$2$$.$OutputText$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieUtils$$, 0, 0);
          $DvtChartPieUtils$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
          $DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$ ? $DvtSparkChartEventManager$$.$getOptions$().styleDefaults.stackLabelStyle : $DvtChartStyleUtils$$.$getDataLabelStyle$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeFunnelSlice$$);
          $DvtChartPieUtils$$.$setCSSStyle$($DvtChartPieRenderUtils$$);
          $DvtChartPieUtils$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
          $DvtChartPieUtils$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2);
          $DvtChartPieUtils$$.$alignCenter$();
          $DvtChartPieUtils$$.$alignMiddle$();
          $DvtChartPieRenderUtils$$ = $DvtChartPieUtils$$.$measureDimensions$();
          if("left" == $DvtChartDataChangeRangeMarker$$) {
            $DvtChartPieUtils$$.$setX$($DvtSparkChartAutomation$$.x - $DvtChartPieRenderUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
          }else {
            if("right" == $DvtChartDataChangeRangeMarker$$) {
              $DvtChartPieUtils$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ + $DvtChartPieRenderUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
            }else {
              if("top" == $DvtChartDataChangeRangeMarker$$) {
                $DvtChartPieUtils$$.$setY$($DvtSparkChartAutomation$$.y - $DvtChartPieRenderUtils$$.$h$ / 2)
              }else {
                if("bottom" == $DvtChartDataChangeRangeMarker$$) {
                  $DvtChartPieUtils$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ + $DvtChartPieRenderUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
                }else {
                  if("bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$)) {
                    if($DvtChartPieRenderUtils$$.$w$ > $DvtSparkChartAutomation$$.$w$ || $DvtChartPieRenderUtils$$.$h$ > $DvtSparkChartAutomation$$.$h$) {
                      return
                    }
                    "inLeft" == $DvtChartDataChangeRangeMarker$$ ? $DvtChartPieUtils$$.$setX$($DvtSparkChartAutomation$$.x + $DvtChartPieRenderUtils$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $DvtChartDataChangeRangeMarker$$ ? $DvtChartPieUtils$$.$setX$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ - $DvtChartPieRenderUtils$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $DvtChartDataChangeRangeMarker$$ ? $DvtChartPieUtils$$.$setY$($DvtSparkChartAutomation$$.y + 
                    $DvtChartPieRenderUtils$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $DvtChartDataChangeRangeMarker$$ && $DvtChartPieUtils$$.$setY$($DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ - $DvtChartPieRenderUtils$$.$h$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
                  }else {
                    if($DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) && ($DvtSparkChartAutomation$$.x += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.y += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$h$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtSparkChartAutomation$$.$w$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $DvtChartDataChangeRangeMarker$$ = $DvtChartPieUtils$$.$getOptimalFontSize$($DvtSparkChartAutomation$$), 
                    $DvtChartPieUtils$$.$setFontSize$($DvtChartDataChangeRangeMarker$$), !$dvt$$2$$.$TextUtils$.$fitText$($DvtChartPieUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartDefaults$$, $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                      return
                    }
                  }
                  $DvtChartStyleUtils$$.$getPattern$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$) != $JSCompiler_alias_NULL$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieUtils$$.$getDimensions$(), $DvtSparkChartAutomation$$ = 0.15 * $DvtChartPieRenderUtils$$.$h$, $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$roundedRectangle$($DvtChartPieRenderUtils$$.x - $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$.y, $DvtChartPieRenderUtils$$.$w$ + 2 * $DvtSparkChartAutomation$$, 
                  $DvtChartPieRenderUtils$$.$h$, 2, 2, 2, 2), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$.$setSolidFill$("#FFFFFF", 0.9), $DvtSparkChartDefaults$$.$addChild$($DvtSparkChartAutomation$$))
                }
              }
            }
          }
          $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$) && $DvtChartPieUtils$$.$setSolidStroke$("none");
          $DvtSparkChartDefaults$$.$addChild$($DvtChartPieUtils$$);
          $DvtSparkChartEventManager$$.$addDataLabel$($DvtChartPieUtils$$)
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabelForMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = $DvtSparkChartEventManager$$.$getEventManager$().$getLogicalObject$($DvtSparkChartAutomation$$), $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getSeriesIndex$(), $DvtChartStyleUtils$$ = $DvtChartStyleUtils$$.$getGroupIndex$();
    if($DvtSparkChartAutomation$$ instanceof $dvt$$2$$.$SimpleMarker$) {
      var $DvtChartTypeUtils$$ = new $dvt$$2$$.$Rectangle$($DvtSparkChartAutomation$$.$getCx$() - $DvtSparkChartAutomation$$.getWidth() / 2, $DvtSparkChartAutomation$$.$getCy$() - $DvtSparkChartAutomation$$.getHeight() / 2, $DvtSparkChartAutomation$$.getWidth(), $DvtSparkChartAutomation$$.getHeight());
      $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartTypeUtils$$, $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$.$_dataColor$)
    }else {
      $DvtSparkChartAutomation$$ instanceof $DvtChartRangeMarker$$ && ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox1$(), $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$.$_dataColor$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.$getBoundingBox2$(), $DvtChartPieLabelUtils$$, $DvtChartStyleUtils$$, 
      $DvtSparkChartAutomation$$.$_dataColor$, "high"))
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_renderScatterBubble$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);
    for($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartDataChangeFunnelSlice$$;$DvtChartPieRenderUtils$$++) {
      "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$)
    }
    var $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartPieUtils$$, $JSCompiler_alias_NULL$$, $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeRangeMarker$$ = [];
    if($DvtChartPieLabelInfo$$) {
      $DvtChartDataChangeFunnelSlice$$ = ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$)) ? $DvtChartPieUtils$$.$getColor$() : $JSCompiler_alias_NULL$$;
      $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtChartPieUtils$$.getWidth() : $JSCompiler_alias_NULL$$;
      for(var $DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieLabelInfo$$.length;$DvtChartDataChangeMarker$$++) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$[$DvtChartDataChangeMarker$$], $DvtChartPieLabelUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieRenderUtils$$);
        $DvtChartDataChangeRangeMarker$$.push($DvtChartDataChangeLineArea$$)
      }
    }else {
      for($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartDataChangeFunnelSlice$$;$DvtChartPieRenderUtils$$++) {
        $DvtChartPieLabelInfo$$ = $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$, $DvtChartPieUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeRangeMarker$$.concat($DvtChartPieLabelInfo$$)
      }
      $DvtChartMarkerUtils$$.$sortMarkers$($DvtChartDataChangeRangeMarker$$)
    }
    $DvtChartTypeUtils$$.$isBubble$($DvtSparkChartEventManager$$) ? $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPieUtils$$) : $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeRangeMarker$$, $DvtChartPieUtils$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartTypeUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$);
    $DvtSparkChartAutomation$$ = $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) : $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$);
    $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartTypeUtils$$)
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkersToContainer$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartTypeUtils$$ = $DvtSparkChartDefaults$$;
    $DvtChartStyleUtils$$.$optimizeMarkerStroke$($DvtSparkChartEventManager$$) && ($DvtChartTypeUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartTypeUtils$$.$setStroke$($DvtChartPieLabelUtils$$), $DvtSparkChartDefaults$$.$addChild$($DvtChartTypeUtils$$));
    for($DvtSparkChartDefaults$$ = 0;$DvtSparkChartDefaults$$ < $DvtSparkChartAutomation$$.length;$DvtSparkChartDefaults$$++) {
      $DvtChartTypeUtils$$.$addChild$($DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$]), $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$($DvtSparkChartEventManager$$, $DvtChartTypeUtils$$, $DvtSparkChartAutomation$$[$DvtSparkChartDefaults$$])
    }
    $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtSparkChartAutomation$$)
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkerInfo$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$) {
    var $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if($DvtChartPieRenderUtils$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartPieRenderUtils$$) || $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    if(!$DvtChartPieRenderUtils$$) {
      if("jet" != $DvtChartPieLabelInfo$$._environment && $DvtChartAxisUtils$$.$isMixedFrequency$($DvtSparkChartEventManager$$)) {
        2 > $DvtChartDataChangeFunnelSlice$$ && ($DvtChartPieRenderUtils$$ = $JSCompiler_alias_TRUE$$)
      }else {
        var $DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$ - 1, $DvtChartPieUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartPieUtils$$ && 0 < $DvtChartMarkerUtils$$ && $DvtSparkChartAutomation$$ == $DvtChartMarkerUtils$$ ? 0 : $DvtSparkChartAutomation$$ + 1, $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieUtils$$ && 0 < $DvtChartMarkerUtils$$ && 
        0 == $DvtSparkChartAutomation$$ ? $DvtChartMarkerUtils$$ : $DvtSparkChartAutomation$$ - 1), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.getValue($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeFunnelSlice$$);
        if(($DvtChartMarkerUtils$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartMarkerUtils$$)) && ($DvtChartDataChangeFunnelSlice$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartDataChangeFunnelSlice$$))) {
          $DvtChartPieRenderUtils$$ = $JSCompiler_alias_TRUE$$
        }
      }
    }
    if(!$DvtChartPieRenderUtils$$ && ($DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) || ($DvtChartPieLabelInfo$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$)) && !$DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$))) {
      return $JSCompiler_alias_NULL$$
    }
    if(!$DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    $DvtChartPieLabelInfo$$ = $JSCompiler_alias_TRUE$$;
    $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getMarkerPosition$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtChartPieLabelUtils$$ && ($DvtChartDataChangeFunnelSlice$$ && $DvtSparkChartEventManager$$) && ($DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$.$intersects$(new $dvt$$2$$.$Rectangle$($DvtChartDataChangeFunnelSlice$$.x - $DvtSparkChartEventManager$$ / 2, $DvtChartDataChangeFunnelSlice$$.y - $DvtSparkChartEventManager$$ / 2, $DvtSparkChartEventManager$$, $DvtSparkChartEventManager$$)));
    return!$DvtChartDataChangeFunnelSlice$$ || !$DvtChartPieLabelInfo$$ ? $JSCompiler_alias_NULL$$ : {$seriesIndex$:$DvtSparkChartDefaults$$, $groupIndex$:$DvtSparkChartAutomation$$, x:$DvtChartDataChangeFunnelSlice$$.x, y:$DvtChartDataChangeFunnelSlice$$.y, size:$DvtSparkChartEventManager$$, $markerDisplayed$:$DvtChartPieRenderUtils$$}
  };
  $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getScatterBubbleMarkerInfo$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    if(!$DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getScatterBubbleMarkerPosition$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    if(!$DvtSparkChartAutomation$$) {
      return $JSCompiler_alias_NULL$$
    }
    $dvt$$2$$ = $DvtChartStyleUtils$$.$getMarkerSize$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    return!$dvt$$2$$ ? $JSCompiler_alias_NULL$$ : {$seriesIndex$:$DvtSparkChartEventManager$$, $groupIndex$:$DvtSparkChartDefaults$$, x:$DvtSparkChartAutomation$$.x, y:$DvtSparkChartAutomation$$.y, size:$dvt$$2$$}
  };
  $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkersForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if(!$DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtSparkChartEventManager$$)) {
      return[]
    }
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($dvt$$2$$), $DvtChartTypeUtils$$ = $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$.$getColor$() : $JSCompiler_alias_NULL$$;
    $DvtSparkChartAutomation$$ = $DvtChartPieLabelUtils$$ ? $DvtSparkChartAutomation$$.getWidth() : $JSCompiler_alias_NULL$$;
    for(var $DvtChartPieLabelInfo$$ = [], $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$), $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieRenderUtils$$;$DvtChartDataChangeFunnelSlice$$++) {
      var $DvtChartMarkerUtils$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$);
      $DvtChartMarkerUtils$$ && ($DvtChartMarkerUtils$$ = $DvtChartPlotAreaRenderer$$.$_createMarker$($dvt$$2$$, $DvtChartMarkerUtils$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ != $JSCompiler_alias_NULL$$ && $DvtChartPieLabelInfo$$.push($DvtChartMarkerUtils$$))
    }
    return $DvtChartPieLabelInfo$$
  };
  $DvtChartPlotAreaRenderer$$.$_createMarker$ = function $$DvtChartPlotAreaRenderer$$$$_createMarker$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    var $DvtChartPieLabelInfo$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartDefaults$$.$seriesIndex$, $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$groupIndex$, $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getMarkerShape$($DvtSparkChartEventManager$$, 
    $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartDataChangeMarker$$ = $DvtSparkChartDefaults$$.$markerDisplayed$;
    $DvtChartDataChangeMarker$$ == $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$));
    $DvtChartDataChangeMarker$$ ? (($DvtChartDataChangeMarker$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "source")) ? ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "sourceSelected"), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, 
    $DvtChartMarkerUtils$$, "sourceHover"), $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getImageSource$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, "sourceHoverSelected"), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$ImageMarker$($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size, $JSCompiler_alias_NULL$$, $DvtChartDataChangeMarker$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, 
    $DvtChartPieUtils$$)) : ($DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SimpleMarker$($DvtChartPieRenderUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartEventManager$$.$getSkin$(), $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartDefaults$$.size), $DvtChartPieRenderUtils$$.$setFill$($DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$)), $DvtChartDataChangeMarker$$ = 
    $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$), ($DvtChartDataChangeMarker$$ != $DvtChartPieLabelUtils$$ || $DvtChartDataChangeRangeMarker$$ != $DvtChartTypeUtils$$) && $DvtChartPieRenderUtils$$.$setSolidStroke$($DvtChartDataChangeMarker$$, $JSCompiler_alias_NULL$$, 
    $DvtChartDataChangeRangeMarker$$), $DvtChartPieRenderUtils$$.$setDataColor$($DvtChartPieUtils$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$SelectionEffectUtils$.$getHoverBorderColor$($DvtChartPieUtils$$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$.$setHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 
    1, 1), new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelUtils$$, 1, 3.5)), $DvtChartPieRenderUtils$$.$setSelectedStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartPieUtils$$, 1, 4.5)), $DvtChartPieRenderUtils$$.$setSelectedHoverStroke$(new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 1, 1.5), new $dvt$$2$$.$SolidStroke$($DvtChartPieLabelUtils$$, 1, 4.5))), $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, 
    $DvtChartMarkerUtils$$) && $DvtChartPieRenderUtils$$.setCursor("pointer"), $DvtChartPieLabelInfo$$ && $DvtSparkChartDefaults$$.size < $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartAutomation$$)) : ($DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$) ? ($DvtChartPieRenderUtils$$ = 
    new $DvtChartLineMarker$$($DvtChartPieRenderUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartAutomation$$), $DvtChartPieRenderUtils$$.setCursor("pointer"), $DvtChartPieLabelInfo$$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($DvtChartPieRenderUtils$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartAutomation$$)) : ($DvtChartPieLabelInfo$$ && ($DvtSparkChartDefaults$$.size = 
    $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), $DvtChartPieRenderUtils$$ = new $DvtChartLineMarker$$($DvtChartPieRenderUtils$$, $dvt$$2$$.$SimpleMarker$.$SQUARE$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.size, $DvtSparkChartAutomation$$)), $DvtChartPieRenderUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartPieRenderUtils$$.$setInvisibleFill$(), $DvtChartPieRenderUtils$$.$setDataColor$($DvtChartPieUtils$$)));
    $DvtChartPieRenderUtils$$ != $JSCompiler_alias_NULL$$ && $DvtChartObjPeer$$.$associate$($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtSparkChartDefaults$$);
    return $DvtChartPieRenderUtils$$
  };
  $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkerHitArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Rect$($DvtSparkChartEventManager$$.$getCtx$(), $DvtSparkChartDefaults$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtSparkChartAutomation$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
    $DvtChartStyleUtils$$ && $DvtSparkChartDefaults$$.$setSolidStroke$("none");
    $DvtSparkChartDefaults$$.$setInvisibleFill$();
    $DvtSparkChartEventManager$$.$addChild$($DvtSparkChartDefaults$$)
  };
  $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    if(!$DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) {
      return[]
    }
    for(var $DvtChartPieLabelUtils$$ = $dvt$$2$$.$Agent$.$isTouchDevice$(), $DvtChartPieLabelInfo$$ = $DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieRenderUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$y2Axis$ : $DvtSparkChartEventManager$$.$yAxis$, $DvtChartMarkerUtils$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieUtils$$ = 
    $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = [], $DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartPieUtils$$;$DvtChartDataChangeMarker$$++) {
      if(!$DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$) && $DvtChartStyleUtils$$.$isDataItemRendered$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$)) {
        var $DvtChartDataChangeLineArea$$ = $DvtChartPieRenderUtils$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$)), $DvtChartLineArea$$ = $DvtChartDataChangeFunnelSlice$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$)), $DvtChartRenderer$$ = $DvtChartDataChangeFunnelSlice$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, 
        $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$));
        if(!($DvtChartDataChangeLineArea$$ == $JSCompiler_alias_NULL$$ || $DvtChartLineArea$$ == $JSCompiler_alias_NULL$$ || $DvtChartRenderer$$ == $JSCompiler_alias_NULL$$)) {
          var $DvtChartDataChangeBar$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$);
          if(!$DvtChartDataChangeBar$$) {
            var $DvtChartDataChangeAbstract$$ = $DvtChartPieUtils$$ - 1, $DvtChartCoord$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartAxisRenderer$$ = $DvtChartCoord$$ && 0 < $DvtChartDataChangeAbstract$$ && 0 == $DvtChartDataChangeMarker$$ ? $DvtChartDataChangeAbstract$$ : $DvtChartDataChangeMarker$$ - 1, $DvtChartDataChange$$ = $DvtChartCoord$$ && 0 < $DvtChartDataChangeAbstract$$ && $DvtChartDataChangeMarker$$ == $DvtChartDataChangeAbstract$$ ? 0 : $DvtChartDataChangeMarker$$ + 
            1, $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$), $DvtChartCoord$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$), $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getLowValue$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChange$$), $DvtChartAxisRenderer$$ = $DvtChartDataUtils$$.$getHighValue$($DvtSparkChartEventManager$$, 
            $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$);
            $DvtChartDataChangeAbstract$$ == $JSCompiler_alias_NULL$$ && ($DvtChartCoord$$ == $JSCompiler_alias_NULL$$ && $DvtChartDataChange$$ == $JSCompiler_alias_NULL$$ && $DvtChartAxisRenderer$$ == $JSCompiler_alias_NULL$$) && ($DvtChartDataChangeBar$$ = $JSCompiler_alias_TRUE$$)
          }
          if(!$DvtChartMarkerUtils$$._duringAnimation && !$DvtChartTypeUtils$$.$isOverview$($DvtSparkChartEventManager$$) && !$DvtChartTypeUtils$$.$isSpark$($DvtSparkChartEventManager$$) || $DvtChartDataChangeBar$$ || $DvtChartDataUtils$$.$isDataSelected$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$)) {
            var $DvtChartLineArea$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartDataChangeLineArea$$, $DvtChartLineArea$$), $DvtSparkChartAutomation$$), $DvtChartAxisRenderer$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($DvtSparkChartEventManager$$, new $dvt$$2$$.$Point$($DvtChartDataChangeLineArea$$, $DvtChartRenderer$$), $DvtSparkChartAutomation$$), $DvtChartDataChangeLineArea$$ = new $dvt$$2$$.$Point$(($DvtChartLineArea$$.x + 
            $DvtChartAxisRenderer$$.x) / 2, ($DvtChartLineArea$$.y + $DvtChartAxisRenderer$$.y) / 2), $DvtChartRenderer$$ = $DvtChartStyleUtils$$.$getMarkerSize$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$), $DvtChartDataChangeBar$$ = new $DvtChartRangeMarker$$($DvtChartPieLabelInfo$$, $DvtChartLineArea$$.x, $DvtChartLineArea$$.y, $DvtChartAxisRenderer$$.x, $DvtChartAxisRenderer$$.y, $DvtChartRenderer$$, !$DvtChartDataChangeBar$$), $DvtChartDataChangeAbstract$$ = 
            $DvtChartSeriesEffectUtils$$.$getMarkerFill$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$), $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$), $DvtChartDataChange$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$), $DvtChartCoord$$ = new $dvt$$2$$.$SolidStroke$($DvtChartCoord$$, 
            $JSCompiler_alias_NULL$$, $DvtChartDataChange$$), $DvtChartDataChange$$ = $DvtChartStyleUtils$$.$getMarkerColor$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$), $DvtChartCandlestick$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartOverview$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$);
            $DvtChartDataChangeBar$$.$setStyleProperties$($DvtChartDataChangeAbstract$$, $DvtChartCoord$$, $DvtChartDataChange$$, $DvtChartCandlestick$$, $DvtChartOverview$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$) && $DvtChartDataChangeBar$$.setCursor("pointer");
            $DvtChartLineArea$$ = new $dvt$$2$$.$Line$($DvtChartPieLabelInfo$$, $DvtChartLineArea$$.x, $DvtChartLineArea$$.y, $DvtChartAxisRenderer$$.x, $DvtChartAxisRenderer$$.y);
            $DvtChartLineArea$$.$setSolidStroke$("rgba(0,0,0,0)", $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$ ? Math.max($DvtChartRenderer$$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $DvtChartRenderer$$);
            $DvtChartDataChangeBar$$.$addChild$($DvtChartLineArea$$);
            $DvtChartDataChangeRangeMarker$$.push($DvtChartDataChangeBar$$);
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeBar$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartDataChangeMarker$$, $DvtChartDataChangeLineArea$$)
          }
        }
      }
    }
    return $DvtChartDataChangeRangeMarker$$
  };
  $DvtChartPlotAreaRenderer$$.$_renderBars$ = function $$DvtChartPlotAreaRenderer$$$$_renderBars$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$), $DvtChartPieLabelInfo$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = $DvtChartTypeUtils$$.$isStock$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()), $DvtChartPieUtils$$ = 
    $DvtChartStyleUtils$$.$isStackLabelRendered$($DvtSparkChartEventManager$$), $DvtChartDataChangeRangeMarker$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartDataChangeMarker$$ = 0;$DvtChartDataChangeMarker$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartDataChangeMarker$$++) {
      for(var $DvtChartDataChangeLineArea$$ = 0;$DvtChartDataChangeLineArea$$ < $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$);$DvtChartDataChangeLineArea$$++) {
        if($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$)) {
          var $DvtChartLineArea$$ = $DvtChartDataUtils$$.$getBarInfo$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtSparkChartAutomation$$);
          if($DvtChartLineArea$$ != $JSCompiler_alias_NULL$$) {
            var $DvtChartRenderer$$ = $DvtChartLineArea$$.$yCoord$, $DvtChartDataChangeBar$$ = $DvtChartLineArea$$.$baseCoord$, $DvtChartDataChangeAbstract$$ = $DvtChartLineArea$$.$axisCoord$, $DvtChartCoord$$ = $DvtChartLineArea$$.$x1$, $DvtChartAxisRenderer$$ = $DvtChartLineArea$$.$x2$, $DvtChartDataChange$$ = $DvtChartLineArea$$.$barWidth$, $DvtChartCandlestick$$ = $JSCompiler_alias_FALSE$$;
            if(1 > Math.abs($DvtChartRenderer$$ - $DvtChartDataChangeBar$$)) {
              if($DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$)) {
                $DvtChartRenderer$$--
              }else {
                if(!$DvtChartDataChangeRangeMarker$$ || $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$)) {
                  $DvtChartCandlestick$$ = $JSCompiler_alias_TRUE$$, $DvtChartRenderer$$ = $DvtChartRenderer$$ > $DvtChartDataChangeBar$$ || $DvtChartPieLabelUtils$$ && !$DvtChartMarkerUtils$$ && $DvtChartRenderer$$ == $DvtChartDataChangeBar$$ ? $DvtChartDataChangeBar$$ + 3 : $DvtChartDataChangeBar$$ - 3
                }
              }
            }
            $DvtChartRenderer$$ = $DvtChartPieLabelInfo$$ ? new $DvtChartPolarBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeAbstract$$, $DvtChartDataChangeBar$$, $DvtChartRenderer$$, $DvtChartCoord$$, $DvtChartAxisRenderer$$, $DvtSparkChartAutomation$$) : new $DvtChartBar$$($DvtSparkChartEventManager$$, $DvtChartDataChangeAbstract$$, $DvtChartDataChangeBar$$, $DvtChartRenderer$$, $DvtChartCoord$$, $DvtChartAxisRenderer$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartRenderer$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$) && $DvtChartRenderer$$.setCursor("pointer");
            $DvtChartDataChangeBar$$ = $JSCompiler_alias_NULL$$;
            $DvtChartCandlestick$$ ? $DvtChartDataChange$$ = $dvt$$2$$.$SolidFill$.$invisibleFill$() : ($DvtChartDataChange$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartPieLabelUtils$$, $DvtChartDataChange$$), $DvtChartCandlestick$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$), $DvtChartDataChangeAbstract$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 
            $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$), $DvtChartCandlestick$$ && ($DvtChartDataChangeBar$$ = new $dvt$$2$$.$SolidStroke$($DvtChartCandlestick$$, $JSCompiler_alias_NULL$$, $DvtChartDataChangeAbstract$$)));
            $DvtChartCandlestick$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$);
            $DvtChartDataChangeAbstract$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$);
            $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$);
            $DvtChartRenderer$$.$setStyleProperties$($DvtChartDataChange$$, $DvtChartDataChangeBar$$, $DvtChartCandlestick$$, $DvtChartDataChangeAbstract$$, $DvtChartCoord$$);
            $DvtChartDataChangeFunnelSlice$$ && $DvtChartRenderer$$.$setPixelHinting$();
            $DvtChartObjPeer$$.$associate$($DvtChartRenderer$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartLineArea$$.$dataPos$);
            $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$) ? ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRenderer$$.$getBoundingBox$(), $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartCandlestick$$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRenderer$$.$getBoundingBox$(), $DvtChartDataChangeLineArea$$, 
            $DvtChartDataChangeMarker$$, $DvtChartCandlestick$$, "high")) : $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRenderer$$.$getBoundingBox$(), $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $DvtChartCandlestick$$);
            $DvtChartLineArea$$ = [];
            $DvtChartLineArea$$.push($DvtChartRenderer$$);
            $DvtChartPieRenderUtils$$ && 0 != $DvtChartDataChangeLineArea$$ || $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartLineArea$$);
            $DvtChartPieUtils$$ && $DvtChartDataUtils$$.$isOutermostBar$($DvtSparkChartEventManager$$, $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$) && $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartRenderer$$.$getBoundingBox$(), $DvtChartDataChangeLineArea$$, $DvtChartDataChangeMarker$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderStock$ = function $$DvtChartPlotAreaRenderer$$$$_renderStock$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.$xAxis$, $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.$yAxis$;
    if("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($DvtSparkChartEventManager$$, 0)) {
      for(var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);$DvtChartPieLabelInfo$$++) {
        if($DvtChartDataUtils$$.$isBLACItemInViewport$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$)) {
          var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getXValue$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.$getDataItem$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$), $DvtChartMarkerUtils$$, $DvtChartPieUtils$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeMarker$$ = $JSCompiler_alias_NULL$$;
          $DvtChartDataChangeFunnelSlice$$ && ($DvtChartMarkerUtils$$ = $DvtChartDataChangeFunnelSlice$$.open, $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$.close, $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeFunnelSlice$$.low, $DvtChartDataChangeMarker$$ = $DvtChartDataChangeFunnelSlice$$.high);
          var $DvtChartDataChangeLineArea$$ = $DvtChartDataChangeRangeMarker$$ != $JSCompiler_alias_NULL$$ && $DvtChartDataChangeMarker$$ != $JSCompiler_alias_NULL$$;
          if(!($DvtChartMarkerUtils$$ == $JSCompiler_alias_NULL$$ || $DvtChartPieUtils$$ == $JSCompiler_alias_NULL$$)) {
            var $DvtChartPieRenderUtils$$ = $DvtChartPieLabelUtils$$.$getUnboundedCoordAt$($DvtChartPieRenderUtils$$), $DvtChartLineArea$$ = $DvtChartStyleUtils$$.$getBarWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$getBoundedCoordAt$($DvtChartMarkerUtils$$), $DvtChartRenderer$$ = $DvtChartTypeUtils$$.$getBoundedCoordAt$($DvtChartPieUtils$$), $DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$ = $JSCompiler_alias_NULL$$;
            $DvtChartDataChangeLineArea$$ && ($DvtChartDataChangeBar$$ = $DvtChartTypeUtils$$.$getBoundedCoordAt$($DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeAbstract$$ = $DvtChartTypeUtils$$.$getBoundedCoordAt$($DvtChartDataChangeMarker$$));
            $DvtChartDataChangeMarker$$ = new $DvtChartCandlestick$$($DvtSparkChartEventManager$$.$getCtx$(), $DvtChartPieRenderUtils$$, $DvtChartLineArea$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartRenderer$$, $DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$);
            $DvtSparkChartDefaults$$.$addChild$($DvtChartDataChangeMarker$$);
            $DvtChartStyleUtils$$.$isSelectable$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$) && $DvtChartDataChangeMarker$$.setCursor("pointer");
            var $DvtChartDataChangeLineArea$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$, $JSCompiler_alias_FALSE$$, $DvtChartLineArea$$), $DvtChartLineArea$$ = $JSCompiler_alias_NULL$$, $DvtChartDataChangeAbstract$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$), $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$);
            $DvtChartDataChangeAbstract$$ ? $DvtChartLineArea$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeAbstract$$, $JSCompiler_alias_NULL$$, $DvtChartCoord$$) : $DvtChartDataChangeLineArea$$ instanceof $dvt$$2$$.$PatternFill$ && ($DvtChartLineArea$$ = new $dvt$$2$$.$SolidStroke$($DvtChartDataChangeLineArea$$.$getColor$(), $JSCompiler_alias_NULL$$, $DvtChartCoord$$));
            var $DvtChartDataChangeAbstract$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$), $DvtChartCoord$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($DvtSparkChartEventManager$$), $DvtChartAxisRenderer$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($DvtSparkChartEventManager$$), $DvtChartDataChange$$ = $DvtSparkChartAutomation$$.styleDefaults.stockRangeColor;
            $DvtChartDataChangeMarker$$.$setChangeStyle$($DvtChartDataChangeLineArea$$, $DvtChartLineArea$$, $DvtChartDataChangeAbstract$$, $DvtChartCoord$$, $DvtChartAxisRenderer$$);
            $DvtChartDataChangeMarker$$.$setRangeStyle$(new $dvt$$2$$.$SolidFill$($DvtChartDataChange$$), $DvtChartLineArea$$, $DvtChartDataChange$$, $DvtChartAxisRenderer$$);
            $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$Point$($DvtChartPieRenderUtils$$, ($DvtChartDataChangeFunnelSlice$$ + $DvtChartRenderer$$) / 2);
            $DvtChartObjPeer$$.$associate$($DvtChartDataChangeMarker$$, $DvtSparkChartEventManager$$, 0, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$);
            $DvtChartPieRenderUtils$$ = [];
            $DvtChartPieRenderUtils$$.push($DvtChartDataChangeMarker$$.$_changeShape$);
            $DvtSparkChartEventManager$$.$_currentMarkers$.push($DvtChartPieRenderUtils$$)
          }
        }
      }
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderLines$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = [], $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$);
    for($DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartPieRenderUtils$$;$DvtChartPieLabelInfo$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$) && "line" == $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartPieLabelInfo$$) && $DvtChartPieLabelUtils$$.push($DvtChartPieLabelInfo$$)
    }
    for($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieRenderUtils$$++) {
      $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$], "none" != $DvtChartStyleUtils$$.$getLineType$($dvt$$2$$, $DvtChartPieLabelInfo$$) && ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($dvt$$2$$, $DvtChartPieLabelInfo$$), $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$, $DvtSparkChartAutomation$$))
    }
    for($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartPieRenderUtils$$++) {
      $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$[$DvtChartPieRenderUtils$$], $DvtSparkChartAutomation$$)
    }
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreas$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreas$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    for(var $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTypeUtils$$ = $DvtSparkChartAutomation$$ ? "lineWithArea" : "area", $DvtChartPieLabelInfo$$ = [], $DvtChartPieRenderUtils$$ = [], $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$;$DvtChartDataChangeFunnelSlice$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) && $DvtChartStyleUtils$$.$getSeriesType$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) == $DvtChartTypeUtils$$ && ($DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) ? $DvtChartPieRenderUtils$$.push($DvtChartDataChangeFunnelSlice$$) : $DvtChartPieLabelInfo$$.push($DvtChartDataChangeFunnelSlice$$))
    }
    0 < $DvtChartPieLabelInfo$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $dvt$$2$$.$yAxis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    0 < $DvtChartPieRenderUtils$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieRenderUtils$$, $dvt$$2$$.$y2Axis$.$getBaselineCoord$(), $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$)
  };
  $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreasForAxis$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) {
    for(var $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.$isStacked$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$), $DvtChartPieUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$), $DvtChartDataChangeRangeMarker$$ = {}, $DvtChartDataChangeMarker$$ = {}, $DvtChartDataChangeLineArea$$ = {}, $DvtChartRenderer$$ = {}, $DvtChartDataChangeBar$$ = 
    [], $DvtChartDataChangeAbstract$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), $DvtChartAxisRenderer$$ = 0;$DvtChartAxisRenderer$$ < $DvtChartDataChangeAbstract$$;$DvtChartAxisRenderer$$++) {
      $DvtChartDataChangeBar$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$, $DvtChartAxisRenderer$$, $DvtChartDataUtils$$.$getGroup$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $JSCompiler_alias_TRUE$$))
    }
    for($DvtChartDataChangeAbstract$$ = 0;$DvtChartDataChangeAbstract$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeAbstract$$++) {
      var $DvtChartAxisRenderer$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeAbstract$$], $DvtChartDataChange$$ = $DvtChartDataUtils$$.$getStackCategory$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $DvtChartCandlestick$$ = $DvtChartDataUtils$$.$isSeriesNegative$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $DvtChartOverview$$ = $DvtChartDataChangeRangeMarker$$[$DvtChartDataChange$$], $DvtChartAnimOnDC$$ = $DvtChartDataChangeMarker$$[$DvtChartDataChange$$], $DvtChartBar$$ = 
      $DvtChartDataChangeLineArea$$[$DvtChartDataChange$$], $DvtChartLegendRenderer$$ = $DvtChartRenderer$$[$DvtChartDataChange$$];
      if("none" == $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$)) {
        $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$, $DvtChartPieLabelInfo$$)
      }else {
        var $DvtChartAnimOnDisplay$$ = $DvtChartSeriesEffectUtils$$.$getAreaFill$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $DvtChartLineMarker$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $DvtChartPieSlice$$ = $DvtChartStyleUtils$$.$getBorderWidth$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$), $DvtChartPie$$ = $DvtChartLineMarker$$ ? new $dvt$$2$$.$SolidStroke$($DvtChartLineMarker$$, $JSCompiler_alias_NULL$$, $DvtChartPieSlice$$) : 
        $JSCompiler_alias_NULL$$, $DvtChartPieSlice$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$);
        $DvtChartMarkerUtils$$ || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$);
        var $DvtChartAxis$$;
        $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$) ? ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$, "high"), $DvtChartOverview$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$, "low"), $DvtChartAnimOnDC$$ = $DvtChartPieSlice$$) : $DvtChartCandlestick$$ ? ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, 
        $DvtChartAxisRenderer$$, $DvtChartBar$$ ? $DvtChartBar$$ : $DvtChartDataChangeBar$$), $DvtChartOverview$$ = $DvtChartBar$$ ? $DvtChartBar$$ : [], $DvtChartAnimOnDC$$ = $DvtChartLegendRenderer$$) : ($DvtChartAxis$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$, $DvtChartOverview$$ ? $DvtChartOverview$$ : $DvtChartDataChangeBar$$), $DvtChartOverview$$ = $DvtChartOverview$$ ? $DvtChartOverview$$ : []);
        $DvtChartAnimOnDisplay$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$, $DvtChartPieLabelInfo$$, $DvtChartPieLabelUtils$$, $DvtChartAnimOnDisplay$$, $DvtChartPie$$, $DvtChartPieSlice$$, $DvtChartAxis$$, $DvtChartAnimOnDC$$, $DvtChartOverview$$);
        $DvtChartPieUtils$$.$addChild$($DvtChartAnimOnDisplay$$);
        $DvtSparkChartEventManager$$.$_currentAreas$.push($DvtChartAnimOnDisplay$$);
        $DvtChartObjPeer$$.$associate$($DvtChartAnimOnDisplay$$, $DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$);
        $DvtChartCandlestick$$ ? ($DvtChartDataChangeLineArea$$[$DvtChartDataChange$$] = $DvtChartAxis$$, $DvtChartRenderer$$[$DvtChartDataChange$$] = $DvtChartPieSlice$$) : ($DvtChartDataChangeRangeMarker$$[$DvtChartDataChange$$] = $DvtChartAxis$$, $DvtChartDataChangeMarker$$[$DvtChartDataChange$$] = $DvtChartPieSlice$$);
        $DvtChartDataChangeFunnelSlice$$ || (($DvtChartPieRenderUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && !$DvtChartLineMarker$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartPieUtils$$, $DvtChartAxisRenderer$$, $DvtChartPieLabelInfo$$, !$DvtChartPieRenderUtils$$), $DvtChartPieRenderUtils$$ || $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$, 
        $DvtChartPieLabelInfo$$), $DvtChartDataChangeAbstract$$ + 1 < $DvtSparkChartAutomation$$.length && ($DvtChartPieUtils$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartPieLabelInfo$$)))
      }
    }
    for($DvtChartDataChangeAbstract$$ = 0;$DvtChartDataChangeAbstract$$ < $DvtSparkChartAutomation$$.length;$DvtChartDataChangeAbstract$$++) {
      $DvtChartAxisRenderer$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeAbstract$$], "none" != $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$) && ($DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$) || $DvtChartStyleUtils$$.$getBorderColor$($DvtSparkChartEventManager$$, $DvtChartAxisRenderer$$ + 1), $DvtChartDataChangeFunnelSlice$$ && ($DvtChartPieRenderUtils$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$) && 
      !$DvtChartPieLabelUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($DvtSparkChartEventManager$$, $DvtChartPieUtils$$, $DvtChartAxisRenderer$$, $DvtChartPieLabelInfo$$, !$DvtChartPieRenderUtils$$), ($DvtChartDataChangeFunnelSlice$$ || $DvtChartPieRenderUtils$$) && $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtChartAxisRenderer$$, $DvtChartPieLabelInfo$$))
    }
  };
  $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($dvt$$2$$, $DvtSparkChartEventManager$$);
    for(var $DvtSparkChartAutomation$$ = [], $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartDefaults$$.length;$DvtChartStyleUtils$$++) {
      $DvtSparkChartAutomation$$.push($DvtSparkChartDefaults$$[$DvtChartStyleUtils$$].$clone$())
    }
    $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.length - 1;
    $dvt$$2$$ = $DvtChartTypeUtils$$.$isPolar$($dvt$$2$$);
    for($DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartStyleUtils$$++) {
      if($DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].x != $JSCompiler_alias_NULL$$) {
        var $DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$[$DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].$groupIndex$], $DvtChartPieLabelInfo$$ = $dvt$$2$$ && 0 == $DvtChartStyleUtils$$ ? $DvtSparkChartDefaults$$ : $DvtChartStyleUtils$$ - 1, $DvtChartPieRenderUtils$$ = $dvt$$2$$ && $DvtChartStyleUtils$$ == $DvtSparkChartDefaults$$ ? 0 : $DvtChartStyleUtils$$ + 1;
        0 <= $DvtChartPieLabelInfo$$ && $DvtSparkChartEventManager$$[$DvtChartPieLabelInfo$$].x != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$.$y1$ = $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].$y1$);
        $DvtChartPieRenderUtils$$ <= $DvtSparkChartDefaults$$ && $DvtSparkChartEventManager$$[$DvtChartPieRenderUtils$$].x != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelUtils$$.$y2$ = $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].$y2$);
        $DvtChartPieLabelUtils$$.x = $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].x;
        $DvtChartPieLabelUtils$$.$filtered$ = $DvtChartPieLabelUtils$$.$y1$ == $DvtChartPieLabelUtils$$.$y2$ ? $DvtSparkChartEventManager$$[$DvtChartStyleUtils$$].$filtered$ : $JSCompiler_alias_FALSE$$
      }
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderLinesForSeries$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) {
    function $DvtChartPieLabelInfo$$($dvt$$2$$) {
      $dvt$$2$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $dvt$$2$$);
      $dvt$$2$$ = new $DvtChartLineArea$$($DvtSparkChartEventManager$$, $JSCompiler_alias_FALSE$$, $DvtChartPieLabelUtils$$, $DvtChartPieUtils$$, $JSCompiler_alias_NULL$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeRangeMarker$$, $dvt$$2$$);
      $DvtSparkChartDefaults$$.$addChild$($dvt$$2$$);
      $DvtChartObjPeer$$.$associate$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$)
    }
    var $DvtChartPieRenderUtils$$;
    if($DvtChartTypeUtils$$) {
      $DvtChartTypeUtils$$ = 2.5 * $DvtChartStyleUtils$$.$getDataItemGaps$($DvtSparkChartEventManager$$), $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartStyleUtils$$.$getBackgroundColor$($DvtSparkChartEventManager$$, $JSCompiler_alias_TRUE$$), 1, $DvtChartTypeUtils$$)
    }else {
      $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
      var $DvtChartDataChangeFunnelSlice$$ = $DvtChartStyleUtils$$.$getLineWidth$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtChartMarkerUtils$$ = $dvt$$2$$.$Stroke$.$convertTypeString$($DvtChartStyleUtils$$.$getLineStyle$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$));
      $DvtChartPieRenderUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartTypeUtils$$, 1, $DvtChartDataChangeFunnelSlice$$);
      $DvtChartPieRenderUtils$$.$setStyle$($DvtChartMarkerUtils$$)
    }
    var $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$isAssignedToY2$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? $DvtSparkChartEventManager$$.$y2Axis$.$getBaselineCoord$() : $DvtSparkChartEventManager$$.$yAxis$.$getBaselineCoord$(), $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getLineType$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$);
    $DvtChartStyleUtils$$.$isRangeSeries$($DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$) ? ($DvtChartPieLabelInfo$$("high"), $DvtChartPieLabelInfo$$("low")) : $DvtChartPieLabelInfo$$("value")
  };
  $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_filterScatterBubble$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getSeriesCount$($DvtSparkChartEventManager$$), $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$);
    if($DvtSparkChartDefaults$$ * $DvtSparkChartAutomation$$ < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$ = [], $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtSparkChartDefaults$$;$DvtChartPieLabelInfo$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$)) {
        for(var $DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtSparkChartAutomation$$;$DvtChartPieRenderUtils$$++) {
          $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$_getScatterBubbleMarkerInfo$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$), $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && $DvtChartTypeUtils$$.push($DvtChartPieLabelUtils$$)
        }
      }
    }
    if($DvtChartTypeUtils$$.length < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtChartMarkerUtils$$.$sortMarkerInfos$($DvtChartTypeUtils$$);
    for(var $DvtSparkChartDefaults$$ = new $dvt$$2$$.$PixelMap$(25, new $dvt$$2$$.$PixelMap$(5, new $dvt$$2$$.$PixelMap$)), $DvtSparkChartAutomation$$ = [], $DvtChartDataChangeFunnelSlice$$ = $DvtChartTypeUtils$$.length - 1;0 <= $DvtChartDataChangeFunnelSlice$$;$DvtChartDataChangeFunnelSlice$$--) {
      if($DvtChartPieLabelUtils$$ = $DvtChartTypeUtils$$[$DvtChartDataChangeFunnelSlice$$], !$DvtChartMarkerUtils$$.$checkPixelMap$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.size)) {
        var $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getColor$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$.$seriesIndex$, $DvtChartPieLabelUtils$$.$groupIndex$), $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$) ? $dvt$$2$$.$ColorUtils$.$getAlpha$($DvtChartPieUtils$$) : 0;
        0 < $DvtChartPieUtils$$ && ($DvtChartMarkerUtils$$.$updatePixelMap$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$.x, $DvtChartPieLabelUtils$$.y, $DvtChartPieLabelUtils$$.size, $DvtChartPieUtils$$), $DvtSparkChartAutomation$$.push($DvtChartPieLabelUtils$$))
      }
    }
    $DvtSparkChartEventManager$$.$putToCache$("dataFiltered", $JSCompiler_alias_TRUE$$);
    $DvtSparkChartAutomation$$.reverse();
    return $DvtSparkChartAutomation$$
  };
  $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_filterPointsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $dvt$$2$$.$_plotAreaSpace$.$w$, $DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getSeriesItem$($dvt$$2$$, $DvtSparkChartEventManager$$).items, $DvtChartStyleUtils$$ = $dvt$$2$$.$xAxis$.$getInfo$(), $DvtSparkChartDefaults$$ = Math.round(2 * ($DvtSparkChartAutomation$$.length / (($DvtChartStyleUtils$$.$DataMax$ - $DvtChartStyleUtils$$.$DataMin$) / ($DvtChartStyleUtils$$.$MaxValue$ - $DvtChartStyleUtils$$.$MinValue$))) / $DvtSparkChartDefaults$$);
    if(2 >= $DvtSparkChartDefaults$$) {
      for($DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartStyleUtils$$++) {
        ($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$[$DvtChartStyleUtils$$]) && ($DvtChartDataChangeFunnelSlice$$._filtered = $JSCompiler_alias_FALSE$$)
      }
    }else {
      for(var $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieUtils$$ = $JSCompiler_alias_FALSE$$, $DvtChartStyleUtils$$ = 0;$DvtChartStyleUtils$$ < $DvtSparkChartAutomation$$.length;$DvtChartStyleUtils$$ += $DvtSparkChartDefaults$$) {
        $DvtChartPieLabelUtils$$ = -1;
        $DvtChartTypeUtils$$ = -Infinity;
        $DvtChartPieLabelInfo$$ = -1;
        $DvtChartPieRenderUtils$$ = Infinity;
        for(var $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$;$DvtChartDataChangeRangeMarker$$ < Math.min($DvtChartStyleUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartDataChangeRangeMarker$$++) {
          $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartDataChangeRangeMarker$$), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeRangeMarker$$], $DvtChartMarkerUtils$$ == $JSCompiler_alias_NULL$$ || $DvtChartDataChangeFunnelSlice$$ == $JSCompiler_alias_NULL$$ || ($DvtChartMarkerUtils$$ > $DvtChartTypeUtils$$ && ($DvtChartPieLabelUtils$$ = $DvtChartDataChangeRangeMarker$$, $DvtChartTypeUtils$$ = $DvtChartMarkerUtils$$), 
          $DvtChartMarkerUtils$$ < $DvtChartPieRenderUtils$$ && ($DvtChartPieLabelInfo$$ = $DvtChartDataChangeRangeMarker$$, $DvtChartPieRenderUtils$$ = $DvtChartMarkerUtils$$), $DvtChartPieUtils$$ = $DvtChartDataChangeFunnelSlice$$._filtered = $JSCompiler_alias_TRUE$$)
        }
        for($DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$;$DvtChartDataChangeRangeMarker$$ < Math.min($DvtChartStyleUtils$$ + $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$.length);$DvtChartDataChangeRangeMarker$$++) {
          if($DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$[$DvtChartDataChangeRangeMarker$$], $DvtChartDataChangeFunnelSlice$$ != $JSCompiler_alias_NULL$$ && ($DvtChartDataChangeRangeMarker$$ == $DvtChartPieLabelUtils$$ || $DvtChartDataChangeRangeMarker$$ == $DvtChartPieLabelInfo$$)) {
            $DvtChartDataChangeFunnelSlice$$._filtered = $JSCompiler_alias_FALSE$$
          }
        }
      }
      $dvt$$2$$.$putToCache$("dataFiltered", $DvtChartPieUtils$$)
    }
  };
  $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtChartPlotAreaRenderer$$$$_isDataItemFiltered$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return($dvt$$2$$ = $DvtChartDataUtils$$.$getDataItem$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)) && $dvt$$2$$._filtered ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getCoordsForSeries$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$xAxis$, $DvtChartStyleUtils$$ = $dvt$$2$$.$yAxis$;
    $DvtChartDataUtils$$.$isAssignedToY2$($dvt$$2$$, $DvtSparkChartEventManager$$) && ($DvtChartStyleUtils$$ = $dvt$$2$$.$y2Axis$);
    for(var $DvtChartPieLabelUtils$$ = [], $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $DvtChartDataUtils$$.$getGroupCount$($dvt$$2$$);$DvtChartPieLabelInfo$$++) {
      var $DvtChartPieRenderUtils$$ = $DvtChartDataUtils$$.$getGroup$($dvt$$2$$, $DvtChartPieLabelInfo$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$), $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getXValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$), $DvtChartPieUtils$$ = $JSCompiler_alias_NULL$$;
      "low" == $DvtSparkChartDefaults$$ ? $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getLowValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$) : "high" == $DvtSparkChartDefaults$$ ? $DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getHighValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$) : $DvtChartDataChangeFunnelSlice$$ != $JSCompiler_alias_NULL$$ && ($DvtChartPieUtils$$ = $DvtChartDataUtils$$.$getCumulativeValue$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$));
      $DvtChartPieUtils$$ == $JSCompiler_alias_NULL$$ || isNaN($DvtChartPieUtils$$) || !$DvtChartDataUtils$$.$isBLACItemInViewport$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtChartPieLabelInfo$$) ? $DvtChartPieLabelUtils$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $JSCompiler_alias_FALSE$$)) : ($DvtChartTypeUtils$$.$isPolar$($dvt$$2$$) && ($DvtChartPieUtils$$ = Math.max($DvtChartPieUtils$$, 
      $DvtChartStyleUtils$$.$getInfo$().$MinValue$)), $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.$getUnboundedCoordAt$($DvtChartMarkerUtils$$), $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getUnboundedCoordAt$($DvtChartPieUtils$$), $DvtChartPieRenderUtils$$ = new $DvtChartCoord$$($DvtChartDataChangeFunnelSlice$$, $DvtChartPieUtils$$, $DvtChartPieUtils$$, $DvtChartPieLabelInfo$$, $DvtChartPieRenderUtils$$, $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($dvt$$2$$, $DvtSparkChartEventManager$$, 
      $DvtChartPieLabelInfo$$)), $DvtChartPieLabelUtils$$.push($DvtChartPieRenderUtils$$))
    }
    return $DvtChartPieLabelUtils$$
  };
  $DvtChartPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtChartPlotAreaRenderer$$$$createClippedGroup$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartDefaults$$.$getCtx$());
    $DvtSparkChartDefaults$$.$addChild$($DvtChartStyleUtils$$);
    $DvtSparkChartDefaults$$ = new $dvt$$2$$.$ClipPath$($DvtSparkChartEventManager$$.getId());
    var $DvtChartPieLabelUtils$$ = $DvtChartPlotAreaRenderer$$.$_extendClipGroup$($DvtSparkChartEventManager$$);
    $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtChartPieLabelUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartEventManager$$), 
    $DvtSparkChartEventManager$$.$getRadius$()), $DvtSparkChartDefaults$$.$addPolygon$($DvtSparkChartEventManager$$)) : $DvtSparkChartDefaults$$.$addCircle$($DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$, $DvtSparkChartEventManager$$.$getRadius$())) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x - $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.y, $DvtSparkChartAutomation$$.$w$ + 2 * $DvtChartPieLabelUtils$$, 
    $DvtSparkChartAutomation$$.$h$) : $DvtSparkChartDefaults$$.$addRect$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y - $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$ + 2 * $DvtChartPieLabelUtils$$);
    $DvtChartStyleUtils$$.$setClipPath$($DvtSparkChartDefaults$$);
    return $DvtChartStyleUtils$$
  };
  $DvtChartPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtChartPlotAreaRenderer$$$$polarToCartesian$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return new $dvt$$2$$.$Point$($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2 + $DvtSparkChartEventManager$$ * Math.sin($DvtSparkChartDefaults$$), $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2 - $DvtSparkChartEventManager$$ * Math.cos($DvtSparkChartDefaults$$))
  };
  $DvtChartPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtChartPlotAreaRenderer$$$$convertAxisCoord$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    return $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartEventManager$$) ? ($DvtSparkChartEventManager$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x, $DvtSparkChartAutomation$$), new $dvt$$2$$.$Point$($DvtSparkChartEventManager$$.x, $DvtSparkChartEventManager$$.y)) : $DvtChartTypeUtils$$.$isHorizontal$($DvtSparkChartEventManager$$) ? new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.y, $DvtSparkChartDefaults$$.x) : new $dvt$$2$$.$Point$($DvtSparkChartDefaults$$.x, 
    $DvtSparkChartDefaults$$.y)
  };
  $DvtChartPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtChartPlotAreaRenderer$$$$_extendClipGroup$$($dvt$$2$$) {
    if($DvtChartTypeUtils$$.$hasLineSeries$($dvt$$2$$) || $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($dvt$$2$$)) {
      var $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getLineWidth$($dvt$$2$$), $DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$($dvt$$2$$) {
        var $DvtSparkChartDefaults$$ = $dvt$$2$$.$getInfo$();
        $dvt$$2$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMax$);
        var $DvtSparkChartAutomation$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMax$), $DvtChartStyleUtils$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$GlobalMin$), $DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getCoordAt$($DvtSparkChartDefaults$$.$DataMin$);
        return $dvt$$2$$ != $JSCompiler_alias_NULL$$ && $DvtSparkChartAutomation$$ != $JSCompiler_alias_NULL$$ && $DvtSparkChartAutomation$$ - $dvt$$2$$ <= $DvtSparkChartEventManager$$ / 2 || $DvtChartStyleUtils$$ != $JSCompiler_alias_NULL$$ && $DvtSparkChartDefaults$$ != $JSCompiler_alias_NULL$$ && $DvtChartStyleUtils$$ - $DvtSparkChartDefaults$$ <= $DvtSparkChartEventManager$$ / 2 ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
      };
      if($dvt$$2$$.$yAxis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$yAxis$) || $dvt$$2$$.$y2Axis$ && $DvtSparkChartDefaults$$($dvt$$2$$.$y2Axis$)) {
        return Math.ceil($DvtSparkChartEventManager$$ / 2)
      }
    }
    return 0
  };
  var $DvtChartFunnelRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartFunnelRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
  $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
  $DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
  $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ = 0;
  $DvtChartFunnelRenderer$$.$render$ = function $$DvtChartFunnelRenderer$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$Container$($DvtSparkChartEventManager$$.$getCtx$());
    $DvtChartPieLabelUtils$$.$setTranslate$($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y);
    $DvtSparkChartDefaults$$.$addChild$($DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.$setPlotArea$($DvtChartPieLabelUtils$$);
    var $DvtChartTypeUtils$$;
    if("horizontal" == $DvtSparkChartEventManager$$.$getOptions$().orientation) {
      $DvtChartTypeUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartAutomation$$.$h$)
    }else {
      var $DvtChartPieLabelInfo$$ = new $dvt$$2$$.$Matrix$;
      $DvtChartTypeUtils$$ = $dvt$$2$$.$Agent$.$isRightToLeft$($DvtSparkChartEventManager$$.$getCtx$()) ? -1 : 1;
      $DvtChartPieLabelInfo$$.translate(-$DvtSparkChartAutomation$$.$h$ / 2, -$DvtSparkChartAutomation$$.$w$ / 2);
      $DvtChartPieLabelInfo$$.rotate($DvtChartTypeUtils$$ * Math.PI / 2);
      $DvtChartPieLabelInfo$$.translate($DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2);
      $DvtChartTypeUtils$$ = new $dvt$$2$$.$Rectangle$(0, 0, $DvtSparkChartAutomation$$.$h$, $DvtSparkChartAutomation$$.$w$);
      $DvtChartPieLabelUtils$$.$setMatrix$($DvtChartPieLabelInfo$$)
    }
    $DvtChartFunnelRenderer$$.$_renderFunnelSlices$($DvtSparkChartEventManager$$, $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$) || $DvtChartRenderer$$.$renderEmptyText$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    $DvtSparkChartDefaults$$ = $DvtChartDataUtils$$.$getInitialSelection$($DvtSparkChartEventManager$$);
    $DvtChartEventUtils$$.$setInitialSelection$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$);
    $DvtSparkChartEventManager$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($DvtSparkChartEventManager$$))
  };
  $DvtChartFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtChartFunnelRenderer$$$$_renderFunnelSlices$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    for(var $DvtSparkChartAutomation$$ = $dvt$$2$$.$getOptions$(), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getSeriesCount$($dvt$$2$$), $DvtChartTypeUtils$$ = $DvtChartStyleUtils$$.$getDataItemGaps$($dvt$$2$$), $DvtSparkChartAutomation$$ = Math.min($DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $DvtSparkChartDefaults$$.$w$ / ($DvtChartPieLabelUtils$$ - 1), ("on" == $DvtSparkChartAutomation$$.styleDefaults.threeDEffect ? $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * 
    $DvtSparkChartDefaults$$.$w$), $DvtChartTypeUtils$$ = $DvtChartTypeUtils$$ * $DvtSparkChartAutomation$$, $DvtChartPieLabelInfo$$ = $DvtSparkChartAutomation$$ = 0, $DvtChartPieRenderUtils$$ = 0, $DvtChartDataChangeFunnelSlice$$ = 0;$DvtChartDataChangeFunnelSlice$$ < $DvtChartPieLabelUtils$$;$DvtChartDataChangeFunnelSlice$$++) {
      if($DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$)) {
        var $DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$);
        $DvtChartMarkerUtils$$ == $JSCompiler_alias_NULL$$ && ($DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$));
        0 >= $DvtChartMarkerUtils$$ || ($DvtSparkChartAutomation$$ += $DvtChartMarkerUtils$$)
      }
    }
    if(0 == $DvtSparkChartAutomation$$) {
      return $JSCompiler_alias_FALSE$$
    }
    for($DvtChartDataChangeFunnelSlice$$ = $DvtChartPieLabelUtils$$ - 1;0 <= $DvtChartDataChangeFunnelSlice$$;$DvtChartDataChangeFunnelSlice$$--) {
      $DvtChartStyleUtils$$.$isDataItemRendered$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$) && ($DvtChartMarkerUtils$$ = $DvtChartDataUtils$$.getValue($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$), $DvtChartPieLabelUtils$$ = $DvtChartDataUtils$$.$getTargetValue$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$), 0 >= $DvtChartMarkerUtils$$ && $DvtChartPieLabelUtils$$ == $JSCompiler_alias_NULL$$ || $DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ && 0 >= $DvtChartPieLabelUtils$$ || 
      ($DvtChartPieLabelUtils$$ != $JSCompiler_alias_NULL$$ ? ($DvtChartPieRenderUtils$$ += $DvtChartPieLabelUtils$$ / $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ = new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieRenderUtils$$, $DvtChartPieLabelUtils$$ / $DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$ / $DvtChartPieLabelUtils$$, $DvtChartTypeUtils$$)) : ($DvtChartPieRenderUtils$$ += 
      $DvtChartMarkerUtils$$ / $DvtSparkChartAutomation$$, $DvtChartPieLabelUtils$$ = new $DvtChartFunnelSlice$$($dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$, $DvtSparkChartDefaults$$.$w$, $DvtSparkChartDefaults$$.$h$, 1 - $DvtChartPieRenderUtils$$, $DvtChartMarkerUtils$$ / $DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, $DvtChartTypeUtils$$)), $DvtChartPieLabelInfo$$++, $DvtSparkChartEventManager$$.$addChild$($DvtChartPieLabelUtils$$), $DvtChartObjPeer$$.$associate$($DvtChartPieLabelUtils$$, 
      $dvt$$2$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$)))
    }
    return $JSCompiler_alias_TRUE$$
  };
  var $DvtChartRefObjRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtChartRefObjRenderer$$, $dvt$$2$$.$Obj$);
  $DvtChartRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderBackgroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "back")
  };
  $DvtChartRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderForegroundObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    $DvtChartRefObjRenderer$$.$_renderObjects$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, "front")
  };
  $DvtChartRefObjRenderer$$.$_renderObjects$ = function $$DvtChartRefObjRenderer$$$$_renderObjects$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$xAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "x"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$yAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y"));
    $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $dvt$$2$$.$y2Axis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($dvt$$2$$, "y2"))
  };
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtChartRefObjRenderer$$$$_renderObjectsForAxis$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    if($DvtChartPieLabelUtils$$ && $DvtChartStyleUtils$$) {
      for(var $DvtChartTypeUtils$$ = 0;$DvtChartTypeUtils$$ < $DvtChartPieLabelUtils$$.length;$DvtChartTypeUtils$$++) {
        var $DvtChartPieLabelInfo$$ = $DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$];
        if($DvtChartRefObjUtils$$.$isObjectRendered$($dvt$$2$$, $DvtChartPieLabelInfo$$) && $DvtChartPieLabelInfo$$ && $DvtChartRefObjUtils$$.$getLocation$($DvtChartPieLabelInfo$$) == $DvtSparkChartAutomation$$) {
          var $DvtChartPieRenderUtils$$, $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjUtils$$.$getType$($DvtChartPieLabelInfo$$);
          "area" == $DvtChartDataChangeFunnelSlice$$ ? $DvtChartPieRenderUtils$$ = $DvtChartRefObjRenderer$$.$_createReferenceArea$($DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$) : "line" == $DvtChartDataChangeFunnelSlice$$ && ($DvtChartPieRenderUtils$$ = $DvtChartRefObjRenderer$$.$_createReferenceLine$($DvtChartPieLabelInfo$$, $dvt$$2$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$));
          $DvtChartPieRenderUtils$$ != $JSCompiler_alias_NULL$$ && ($DvtChartPieLabelInfo$$ = new $DvtChartRefObjPeer$$($dvt$$2$$, [$DvtChartPieRenderUtils$$], $DvtChartPieLabelInfo$$, $DvtChartTypeUtils$$, $DvtChartStyleUtils$$ == $dvt$$2$$.$xAxis$ ? "xAxis" : $DvtChartStyleUtils$$ == $dvt$$2$$.$yAxis$ ? "yAxis" : "y2Axis"), $dvt$$2$$.$registerObject$($DvtChartPieLabelInfo$$), $dvt$$2$$.$getEventManager$().$associate$($DvtChartPieRenderUtils$$, $DvtChartPieLabelInfo$$), $DvtSparkChartEventManager$$.$addChild$($DvtChartPieRenderUtils$$))
        }
      }
    }
  };
  $DvtChartRefObjRenderer$$.$_createReferenceArea$ = function $$DvtChartRefObjRenderer$$$$_createReferenceArea$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.$getCtx$(), $DvtChartPieLabelInfo$$ = $DvtChartStyleUtils$$.$getPosition$(), $DvtChartPieRenderUtils$$ = "top" == $DvtChartPieLabelInfo$$ || "bottom" == $DvtChartPieLabelInfo$$, $DvtChartDataChangeFunnelSlice$$ = "radial" == $DvtChartPieLabelInfo$$, $DvtChartPieLabelInfo$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartMarkerUtils$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$);
    if($DvtSparkChartEventManager$$.items != $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$ == $DvtSparkChartDefaults$$.$yAxis$ || $DvtChartStyleUtils$$ == $DvtSparkChartDefaults$$.$y2Axis$)) {
      $DvtChartPieLabelUtils$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartDataChangeFunnelSlice$$ = [];
      $DvtChartPieRenderUtils$$ = [];
      if($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for(;$DvtChartPieLabelUtils$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartPieLabelUtils$$.push($JSCompiler_alias_NULL$$)
        }
      }
      for($DvtSparkChartEventManager$$ = 0;$DvtSparkChartEventManager$$ < $DvtChartPieLabelUtils$$.length;$DvtSparkChartEventManager$$++) {
        var $DvtChartPieUtils$$ = $DvtChartPieLabelUtils$$[$DvtSparkChartEventManager$$], $DvtChartDataChangeRangeMarker$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtChartPieUtils$$), $DvtChartPieUtils$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtChartPieUtils$$);
        if($DvtChartDataChangeRangeMarker$$ == $JSCompiler_alias_NULL$$ || $DvtChartPieUtils$$ == $JSCompiler_alias_NULL$$) {
          $DvtChartDataChangeFunnelSlice$$.push(new $DvtChartCoord$$), $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$)
        }else {
          var $DvtChartDataChangeRangeMarker$$ = $DvtChartStyleUtils$$.$getUnboundedCoordAt$($DvtChartDataChangeRangeMarker$$), $DvtChartPieUtils$$ = $DvtChartStyleUtils$$.$getUnboundedCoordAt$($DvtChartPieUtils$$), $DvtChartDataChangeMarker$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartPieLabelUtils$$, $DvtSparkChartEventManager$$));
          $DvtChartDataChangeFunnelSlice$$.push(new $DvtChartCoord$$($DvtChartDataChangeMarker$$, $DvtChartPieUtils$$, $DvtChartPieUtils$$));
          $DvtChartPieRenderUtils$$.push(new $DvtChartCoord$$($DvtChartDataChangeMarker$$, $DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeRangeMarker$$))
        }
      }
      $DvtSparkChartAutomation$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, $JSCompiler_alias_TRUE$$, $DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, new $dvt$$2$$.$SolidFill$($DvtChartPieLabelInfo$$), $JSCompiler_alias_NULL$$, $DvtChartMarkerUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartMarkerUtils$$, $DvtChartPieRenderUtils$$)
    }else {
      $DvtChartMarkerUtils$$ = $DvtChartRefObjUtils$$.$getLowValue$($DvtSparkChartEventManager$$);
      $DvtSparkChartEventManager$$ = $DvtChartRefObjUtils$$.$getHighValue$($DvtSparkChartEventManager$$);
      if($DvtChartMarkerUtils$$ == $JSCompiler_alias_NULL$$ || -Infinity == $DvtChartMarkerUtils$$) {
        $DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getInfo$().$GlobalMin$
      }
      if($DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ || Infinity == $DvtSparkChartEventManager$$) {
        $DvtSparkChartEventManager$$ = $DvtChartStyleUtils$$.$getInfo$().$GlobalMax$
      }
      $DvtChartMarkerUtils$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtChartMarkerUtils$$);
      $DvtChartStyleUtils$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$);
      $DvtChartTypeUtils$$.$isPolar$($DvtSparkChartDefaults$$) ? ($DvtChartPieRenderUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2, $DvtSparkChartEventManager$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2, $DvtChartDataChangeFunnelSlice$$ ? $DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtSparkChartAutomation$$ = $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartDefaults$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, 1), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$, $DvtChartMarkerUtils$$, 0), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartDefaults$$) + $dvt$$2$$.$PathUtils$.$polyline$($DvtSparkChartAutomation$$) + $dvt$$2$$.$PathUtils$.closePath()) : $DvtSparkChartAutomation$$ = 
      $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartStyleUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartStyleUtils$$, $DvtChartStyleUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartStyleUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartStyleUtils$$, $DvtChartStyleUtils$$, Math.PI, 1, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartStyleUtils$$) + $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, 
      $DvtSparkChartEventManager$$ - $DvtChartMarkerUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartMarkerUtils$$, $DvtChartMarkerUtils$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ + $DvtChartMarkerUtils$$) + $dvt$$2$$.$PathUtils$.arcTo($DvtChartMarkerUtils$$, $DvtChartMarkerUtils$$, Math.PI, 0, $DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$ - $DvtChartMarkerUtils$$) + $dvt$$2$$.$PathUtils$.closePath() : ($DvtSparkChartDefaults$$ = $DvtSparkChartDefaults$$.$getRadius$(), 
      $DvtChartDataChangeFunnelSlice$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$), $DvtSparkChartAutomation$$ = $dvt$$2$$.$PathUtils$.moveTo($DvtChartPieRenderUtils$$, $DvtSparkChartEventManager$$) + $dvt$$2$$.$PathUtils$.lineTo($DvtChartDataChangeFunnelSlice$$.x, 
      $DvtChartDataChangeFunnelSlice$$.y) + $dvt$$2$$.$PathUtils$.arcTo($DvtSparkChartDefaults$$, $DvtSparkChartDefaults$$, $DvtChartStyleUtils$$ - $DvtChartMarkerUtils$$, $dvt$$2$$.$Agent$.$isRightToLeft$($DvtChartPieLabelUtils$$) ? 0 : 1, $DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.lineTo($DvtSparkChartAutomation$$.x, $DvtSparkChartAutomation$$.y) + $dvt$$2$$.$PathUtils$.closePath()), $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Path$($DvtChartPieLabelUtils$$, 
      $DvtSparkChartAutomation$$)) : $DvtSparkChartAutomation$$ = new $dvt$$2$$.$Polygon$($DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ ? [$DvtChartMarkerUtils$$, 0, $DvtChartStyleUtils$$, 0, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$.$h$, $DvtChartMarkerUtils$$, $DvtSparkChartAutomation$$.$h$] : [0, $DvtChartMarkerUtils$$, 0, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartStyleUtils$$, $DvtSparkChartAutomation$$.$w$, $DvtChartMarkerUtils$$]);
      $DvtSparkChartAutomation$$.$setSolidFill$($DvtChartPieLabelInfo$$)
    }
    return $DvtSparkChartAutomation$$
  };
  $DvtChartRefObjRenderer$$.$_createReferenceLine$ = function $$DvtChartRefObjRenderer$$$$_createReferenceLine$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$) {
    var $DvtChartPieLabelUtils$$ = $DvtChartStyleUtils$$.$getPosition$(), $DvtChartTypeUtils$$ = "top" == $DvtChartPieLabelUtils$$ || "bottom" == $DvtChartPieLabelUtils$$, $DvtChartPieLabelInfo$$ = "radial" == $DvtChartPieLabelUtils$$, $DvtChartPieRenderUtils$$ = "tangential" == $DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$ = $DvtChartRefObjUtils$$.$getLineWidth$($DvtSparkChartEventManager$$), $DvtChartDataChangeFunnelSlice$$ = $DvtChartRefObjUtils$$.$getLineType$($DvtSparkChartEventManager$$), 
    $DvtChartMarkerUtils$$ = $DvtChartRefObjUtils$$.$getColor$($DvtSparkChartEventManager$$), $DvtChartPieLabelUtils$$ = new $dvt$$2$$.$SolidStroke$($DvtChartMarkerUtils$$, 1, $DvtChartPieLabelUtils$$);
    $DvtSparkChartEventManager$$.lineStyle && $DvtChartPieLabelUtils$$.$setStyle$($dvt$$2$$.$Stroke$.$convertTypeString$($DvtSparkChartEventManager$$.lineStyle));
    $DvtChartMarkerUtils$$ = $DvtSparkChartDefaults$$.$getCtx$();
    if($DvtSparkChartEventManager$$.items != $JSCompiler_alias_NULL$$ && ($DvtChartStyleUtils$$ == $DvtSparkChartDefaults$$.$yAxis$ || $DvtChartStyleUtils$$ == $DvtSparkChartDefaults$$.$y2Axis$)) {
      $DvtChartTypeUtils$$ = $DvtSparkChartEventManager$$.items;
      $DvtChartPieLabelInfo$$ = [];
      if($DvtSparkChartDefaults$$.$xAxis$.$isGroupAxis$()) {
        for(;$DvtChartTypeUtils$$.length < $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$);) {
          $DvtChartTypeUtils$$.push($JSCompiler_alias_NULL$$)
        }
      }
      $DvtChartPieLabelInfo$$ = [];
      for($DvtChartPieRenderUtils$$ = 0;$DvtChartPieRenderUtils$$ < $DvtChartTypeUtils$$.length;$DvtChartPieRenderUtils$$++) {
        $DvtChartMarkerUtils$$ = $DvtChartTypeUtils$$[$DvtChartPieRenderUtils$$], $DvtSparkChartEventManager$$ = $JSCompiler_alias_NULL$$, $DvtChartMarkerUtils$$ != $JSCompiler_alias_NULL$$ && ("object" != typeof $DvtChartMarkerUtils$$ ? $DvtSparkChartEventManager$$ = $DvtChartMarkerUtils$$ : $DvtChartMarkerUtils$$.value != $JSCompiler_alias_NULL$$ && ($DvtSparkChartEventManager$$ = $DvtChartMarkerUtils$$.value)), $DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ ? $DvtChartPieLabelInfo$$.push(new $DvtChartCoord$$) : 
        ($DvtChartMarkerUtils$$ = $DvtChartStyleUtils$$.$getUnboundedCoordAt$($DvtSparkChartEventManager$$), $DvtSparkChartEventManager$$ = $DvtSparkChartDefaults$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($DvtSparkChartDefaults$$, $DvtChartTypeUtils$$, $DvtChartPieRenderUtils$$)), $DvtChartPieLabelInfo$$.push(new $DvtChartCoord$$($DvtSparkChartEventManager$$, $DvtChartMarkerUtils$$, $DvtChartMarkerUtils$$)))
      }
      $DvtSparkChartDefaults$$ = new $DvtChartLineArea$$($DvtSparkChartDefaults$$, $JSCompiler_alias_FALSE$$, $DvtSparkChartAutomation$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtChartPieLabelUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartPieLabelInfo$$)
    }else {
      if($DvtSparkChartEventManager$$.value) {
        $DvtSparkChartEventManager$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($DvtSparkChartDefaults$$, $DvtChartStyleUtils$$, $DvtSparkChartEventManager$$.value);
        if($DvtSparkChartEventManager$$ == $JSCompiler_alias_NULL$$ || Infinity == $DvtSparkChartEventManager$$ || -Infinity == $DvtSparkChartEventManager$$) {
          return $JSCompiler_alias_NULL$$
        }
        $DvtChartStyleUtils$$ = $DvtSparkChartAutomation$$.x + $DvtSparkChartAutomation$$.$w$ / 2;
        $DvtChartDataChangeFunnelSlice$$ = $DvtSparkChartAutomation$$.y + $DvtSparkChartAutomation$$.$h$ / 2;
        $DvtChartPieLabelInfo$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($DvtSparkChartDefaults$$) ? ($DvtChartPieLabelInfo$$ = $dvt$$2$$.$PolygonUtils$.$getRegularPolygonPoints$($DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtChartDataUtils$$.$getGroupCount$($DvtSparkChartDefaults$$), $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Polygon$($DvtChartMarkerUtils$$, $DvtChartPieLabelInfo$$)) : $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Circle$($DvtChartMarkerUtils$$, 
        $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setFill$($JSCompiler_alias_NULL$$)) : $DvtChartPieRenderUtils$$ ? ($DvtSparkChartDefaults$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($DvtSparkChartDefaults$$.$getRadius$(), $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$), $DvtSparkChartDefaults$$ = new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, $DvtChartStyleUtils$$, $DvtChartDataChangeFunnelSlice$$, $DvtSparkChartDefaults$$.x, 
        $DvtSparkChartDefaults$$.y)) : ($DvtSparkChartDefaults$$ = $DvtChartTypeUtils$$ ? new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, $DvtSparkChartEventManager$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$h$) : new $dvt$$2$$.$Line$($DvtChartMarkerUtils$$, 0, $DvtSparkChartEventManager$$, $DvtSparkChartAutomation$$.$w$, $DvtSparkChartEventManager$$), $DvtSparkChartDefaults$$.$setPixelHinting$());
        $DvtSparkChartDefaults$$.$setStroke$($DvtChartPieLabelUtils$$)
      }else {
        return $JSCompiler_alias_NULL$$
      }
    }
    return $DvtSparkChartDefaults$$
  };
  $DvtChartRefObjRenderer$$.$_getAxisCoord$ = function $$DvtChartRefObjRenderer$$$$_getAxisCoord$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    return $DvtSparkChartEventManager$$.$isGroupAxis$() && ($dvt$$2$$ = $DvtChartDataUtils$$.$getGroupIndex$($dvt$$2$$, $DvtSparkChartDefaults$$), 0 <= $dvt$$2$$) ? $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($dvt$$2$$) : !isNaN($DvtSparkChartDefaults$$) ? $DvtSparkChartEventManager$$.$getUnboundedCoordAt$($DvtSparkChartDefaults$$) : $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$SparkChart$ = $JSCompiler_emptyFn$$();
  $dvt$$2$$.$Obj$.$createSubclass$($dvt$$2$$.$SparkChart$, $dvt$$2$$.$BaseComponent$);
  $dvt$$2$$.$SparkChart$.newInstance = function $$dvt$$2$$$$SparkChart$$newInstance$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    var $DvtChartStyleUtils$$ = new $dvt$$2$$.$SparkChart$;
    $DvtChartStyleUtils$$.Init($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$);
    return $DvtChartStyleUtils$$
  };
  $dvt$$2$$.$SparkChart$.$getDefaults$ = function $$dvt$$2$$$$SparkChart$$$getDefaults$$($dvt$$2$$) {
    return(new $DvtSparkChartDefaults$$).$getDefaults$($dvt$$2$$)
  };
  $dvt$$2$$.$SparkChart$.prototype.Init = function $$dvt$$2$$$$SparkChart$$$Init$($DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.Init.call(this, $DvtSparkChartAutomation$$, $DvtChartStyleUtils$$, $DvtChartPieLabelUtils$$);
    this.$Defaults$ = new $DvtSparkChartDefaults$$;
    this.$_eventManager$ = new $DvtSparkChartEventManager$$(this);
    this.$_eventManager$.$addListeners$(this);
    this.$_chart$ = $dvt$$2$$.$Chart$.newInstance($DvtSparkChartAutomation$$, this.$_onRenderEnd$, this);
    this.$addChild$(this.$_chart$);
    $dvt$$2$$.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $dvt$$2$$.$KeyboardHandler$(this.$_eventManager$, this));
    this.$_tooltipMask$ = new $dvt$$2$$.$Rect$($DvtSparkChartAutomation$$);
    this.$addChild$(this.$_tooltipMask$);
    this.setId("sparkChart1000" + Math.floor(1E9 * Math.random()))
  };
  $dvt$$2$$.$SparkChart$.prototype.$SetOptions$ = function $$dvt$$2$$$$SparkChart$$$$SetOptions$$($DvtSparkChartEventManager$$) {
    $DvtSparkChartEventManager$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtSparkChartEventManager$$), $dvt$$2$$.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
  };
  $dvt$$2$$.$SparkChart$.prototype.setId = function $$dvt$$2$$$$SparkChart$$$setId$($DvtSparkChartEventManager$$) {
    $dvt$$2$$.$SparkChart$.$superclass$.setId.call(this, $DvtSparkChartEventManager$$);
    this.$_chart$ && this.$_chart$.setId($DvtSparkChartEventManager$$ + "chart")
  };
  $dvt$$2$$.$SparkChart$.prototype.$render$ = function $$dvt$$2$$$$SparkChart$$$$render$$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$, $DvtSparkChartAutomation$$) {
    this.$SetOptions$($DvtSparkChartEventManager$$);
    !isNaN($DvtSparkChartDefaults$$) && !isNaN($DvtSparkChartAutomation$$) && (this.$Width$ = $DvtSparkChartDefaults$$, this.$Height$ = $DvtSparkChartAutomation$$);
    this.$_isDoneRendering$ = this.$_eventReceived$ = $JSCompiler_alias_FALSE$$;
    $DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
    $DvtSparkChartEventManager$$ = this.$Options$.shortDesc;
    this.$_tooltipMask$.$setWidth$(this.$Width$);
    this.$_tooltipMask$.$setHeight$(this.$Height$);
    this.$_tooltipMask$.$setInvisibleFill$();
    $DvtSparkChartEventManager$$ ? (this.$_peer$ = new $dvt$$2$$.$SimpleObjPeer$($JSCompiler_alias_NULL$$, $DvtSparkChartEventManager$$, this.$Options$.color), this.$_eventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = $JSCompiler_alias_NULL$$;
    this.$Options$._selectingCursor && this.setCursor("pointer");
    this.$UpdateAriaAttributes$();
    this.$_eventReceived$ && this.$RenderComplete$();
    this.$_isDoneRendering$ = $JSCompiler_alias_TRUE$$
  };
  $dvt$$2$$.$SparkChart$.prototype.$_onRenderEnd$ = function $$dvt$$2$$$$SparkChart$$$$_onRenderEnd$$($dvt$$2$$) {
    this.$_eventReceived$ = $JSCompiler_alias_TRUE$$;
    "ready" == $dvt$$2$$.type && this.$_isDoneRendering$ && this.$RenderComplete$()
  };
  $dvt$$2$$.$SparkChart$.prototype.$getAutomation$ = function $$dvt$$2$$$$SparkChart$$$$getAutomation$$() {
    return new $DvtSparkChartAutomation$$(this)
  };
  $dvt$$2$$.$SparkChart$.prototype.$GetComponentDescription$ = function $$dvt$$2$$$$SparkChart$$$$GetComponentDescription$$() {
    return $dvt$$2$$.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", $dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "CHART")
  };
  $dvt$$2$$.$SparkChart$.prototype.$UpdateAriaAttributes$ = function $$dvt$$2$$$$SparkChart$$$$UpdateAriaAttributes$$() {
    var $DvtSparkChartEventManager$$ = $dvt$$2$$.$Displayable$.$generateAriaLabel$($dvt$$2$$.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : $JSCompiler_alias_NULL$$);
    this.$IsParentRoot$() ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$($dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$dvt$$2$$.$Bundle$.$getTranslatedString$($dvt$$2$$.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $DvtSparkChartEventManager$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $DvtSparkChartEventManager$$))
  };
  $dvt$$2$$.$SparkChart$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  $dvt$$2$$.$SparkChart$.prototype.$__getLogicalObject$ = $JSCompiler_get$$("$_peer$");
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartAutomation$$, $dvt$$2$$.$Automation$);
  $DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dvt$$2$$) {
    return($dvt$$2$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dvt$$2$$)) ? {borderColor:$dvt$$2$$.borderColor, color:$dvt$$2$$.color, date:$dvt$$2$$.x, low:$dvt$$2$$.low, high:$dvt$$2$$.high, value:$dvt$$2$$.low == $JSCompiler_alias_NULL$$ || $dvt$$2$$.high == $JSCompiler_alias_NULL$$ ? $dvt$$2$$.value : $dvt$$2$$.high - $dvt$$2$$.low} : $JSCompiler_alias_NULL$$
  };
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartDefaults$$, $dvt$$2$$.$BaseComponentDefaults$);
  $DvtSparkChartDefaults$$.$SKIN_ALTA$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_ALTA$, color:"#267db3"};
  $DvtSparkChartDefaults$$.$VERSION_1$ = {skin:$dvt$$2$$.$CSSStyle$.$SKIN_SKYROS$, type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:$JSCompiler_alias_NULL$$, color:"#666699", firstColor:$JSCompiler_alias_NULL$$, lastColor:$JSCompiler_alias_NULL$$, highColor:$JSCompiler_alias_NULL$$, lowColor:$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", 
  barGapRatio:0.25, _statusMessageStyle:new $dvt$$2$$.$CSSStyle$("font-size: 12px; color: #404259;")};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartEventManager$$, $dvt$$2$$.$EventManager$);
  $DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($DvtSparkChartEventManager$$) {
    if(!this.$KeyboardHandler$) {
      return $JSCompiler_alias_FALSE$$
    }
    if($DvtSparkChartEventManager$$.keyCode == $dvt$$2$$.$KeyboardEvent$.$TAB$) {
      var $DvtSparkChartDefaults$$ = this.$_sparkChart$.$getCtx$().$getStageAbsolutePosition$();
      this.$ProcessObjectTooltip$($DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$.x, $DvtSparkChartDefaults$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$)
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($dvt$$2$$) {
    $DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $dvt$$2$$);
    this.$hideTooltip$()
  };
  var $DvtSparkChartRenderer$$ = {};
  $dvt$$2$$.$Obj$.$createSubclass$($DvtSparkChartRenderer$$, $dvt$$2$$.$Obj$);
  $DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($dvt$$2$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$) {
    var $DvtSparkChartAutomation$$ = $dvt$$2$$.$_chart$, $DvtChartStyleUtils$$ = $DvtSparkChartRenderer$$.$_convertOptionsObj$($dvt$$2$$), $DvtChartPieLabelUtils$$ = $dvt$$2$$.$getOptions$();
    if("area" == $DvtChartPieLabelUtils$$.type || "line" == $DvtChartPieLabelUtils$$.type || "lineWithArea" == $DvtChartPieLabelUtils$$.type) {
      $dvt$$2$$ = $DvtSparkChartRenderer$$.$_getDataItems$($dvt$$2$$);
      var $DvtChartTypeUtils$$ = $JSCompiler_alias_FALSE$$;
      if($DvtChartPieLabelUtils$$.firstColor || $DvtChartPieLabelUtils$$.lastColor || $DvtChartPieLabelUtils$$.highColor || $DvtChartPieLabelUtils$$.lowColor) {
        $DvtChartTypeUtils$$ = $JSCompiler_alias_TRUE$$
      }else {
        for(var $DvtChartPieLabelInfo$$ = 0;$DvtChartPieLabelInfo$$ < $dvt$$2$$.length;$DvtChartPieLabelInfo$$++) {
          if($dvt$$2$$[$DvtChartPieLabelInfo$$] && "on" == $dvt$$2$$[$DvtChartPieLabelInfo$$].markerDisplayed) {
            $DvtChartTypeUtils$$ = $JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      if($DvtChartTypeUtils$$ && 0 < $dvt$$2$$.length || "none" == $DvtChartPieLabelUtils$$.lineType) {
        $DvtChartPieLabelUtils$$ = $DvtChartPieLabelUtils$$.markerSize / 2, $DvtSparkChartEventManager$$ -= 2 * $DvtChartPieLabelUtils$$, $DvtSparkChartDefaults$$ -= 2 * $DvtChartPieLabelUtils$$, $DvtSparkChartAutomation$$.$setTranslate$($DvtChartPieLabelUtils$$, $DvtChartPieLabelUtils$$)
      }
    }
    $DvtSparkChartAutomation$$.$render$($DvtChartStyleUtils$$, $DvtSparkChartEventManager$$, $DvtSparkChartDefaults$$)
  };
  $DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($dvt$$2$$) {
    return($dvt$$2$$ = $dvt$$2$$.$getOptions$()) && $dvt$$2$$.items ? $dvt$$2$$.items : []
  };
  $DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($DvtSparkChartEventManager$$) {
    var $DvtSparkChartDefaults$$ = $DvtSparkChartEventManager$$.$getOptions$(), $DvtSparkChartAutomation$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
    $DvtSparkChartAutomation$$.translations = $DvtSparkChartDefaults$$.translations;
    var $DvtChartStyleUtils$$ = "floatingBar" == $DvtSparkChartDefaults$$.type, $DvtChartPieLabelUtils$$ = [], $DvtChartTypeUtils$$ = -1, $DvtChartPieLabelInfo$$ = -1, $DvtChartPieRenderUtils$$ = -Infinity, $DvtChartDataChangeFunnelSlice$$ = Infinity;
    $DvtSparkChartEventManager$$ = $DvtSparkChartRenderer$$.$_getDataItems$($DvtSparkChartEventManager$$);
    for(var $DvtChartMarkerUtils$$ = 0;$DvtChartMarkerUtils$$ < $DvtSparkChartEventManager$$.length;$DvtChartMarkerUtils$$++) {
      var $DvtChartPieUtils$$ = $DvtSparkChartEventManager$$[$DvtChartMarkerUtils$$], $DvtChartDataChangeRangeMarker$$ = {};
      $DvtChartPieUtils$$ instanceof Object ? ($DvtChartStyleUtils$$ ? ($DvtChartDataChangeRangeMarker$$.low = $DvtChartPieUtils$$.floatValue, $DvtChartDataChangeRangeMarker$$.high = $DvtChartPieUtils$$.floatValue + $DvtChartPieUtils$$.value) : ($DvtChartDataChangeRangeMarker$$.value = $DvtChartPieUtils$$.value, $DvtChartDataChangeRangeMarker$$.low = $DvtChartPieUtils$$.low, $DvtChartDataChangeRangeMarker$$.high = $DvtChartPieUtils$$.high), $DvtChartPieUtils$$.date && ($DvtSparkChartAutomation$$.timeAxisType = 
      "enabled", $DvtSparkChartAutomation$$.groups.push($DvtChartPieUtils$$.date)), "on" == $DvtChartPieUtils$$.markerDisplayed && ($DvtChartDataChangeRangeMarker$$.markerDisplayed = "on"), $DvtChartPieUtils$$.color && ($DvtChartDataChangeRangeMarker$$.color = $DvtChartPieUtils$$.color), $DvtChartPieUtils$$.borderColor && ($DvtChartDataChangeRangeMarker$$.borderColor = $DvtChartPieUtils$$.borderColor), $DvtChartPieUtils$$.markerShape && ($DvtChartDataChangeRangeMarker$$.markerShape = $DvtChartPieUtils$$.markerShape), 
      $DvtChartPieUtils$$.markerSize && ($DvtChartDataChangeRangeMarker$$.markerSize = $DvtChartPieUtils$$.markerSize)) : $DvtChartDataChangeRangeMarker$$.value = $DvtChartPieUtils$$;
      $DvtChartPieLabelUtils$$.push($DvtChartDataChangeRangeMarker$$);
      $DvtChartPieUtils$$ = $DvtChartDataChangeRangeMarker$$.value != $JSCompiler_alias_NULL$$ ? $DvtChartDataChangeRangeMarker$$.value : Math.max($DvtChartDataChangeRangeMarker$$.low, $DvtChartDataChangeRangeMarker$$.high);
      $DvtChartPieRenderUtils$$ < $DvtChartPieUtils$$ && ($DvtChartPieRenderUtils$$ = $DvtChartPieUtils$$, $DvtChartTypeUtils$$ = $DvtChartMarkerUtils$$);
      $DvtChartDataChangeRangeMarker$$ = $DvtChartDataChangeRangeMarker$$.value != $JSCompiler_alias_NULL$$ ? $DvtChartDataChangeRangeMarker$$.value : Math.min($DvtChartDataChangeRangeMarker$$.low, $DvtChartDataChangeRangeMarker$$.high);
      $DvtChartDataChangeFunnelSlice$$ > $DvtChartDataChangeRangeMarker$$ && ($DvtChartDataChangeFunnelSlice$$ = $DvtChartDataChangeRangeMarker$$, $DvtChartPieLabelInfo$$ = $DvtChartMarkerUtils$$)
    }
    $DvtSparkChartDefaults$$.highColor && 0 <= $DvtChartTypeUtils$$ && ($DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$].markerDisplayed = "on", $DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$].color || ($DvtChartPieLabelUtils$$[$DvtChartTypeUtils$$].color = $DvtSparkChartDefaults$$.highColor));
    $DvtSparkChartDefaults$$.lowColor && 0 <= $DvtChartPieLabelInfo$$ && ($DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$].markerDisplayed = "on", $DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$].color || ($DvtChartPieLabelUtils$$[$DvtChartPieLabelInfo$$].color = $DvtSparkChartDefaults$$.lowColor));
    $DvtSparkChartDefaults$$.firstColor && 0 < $DvtChartPieLabelUtils$$.length && ($DvtChartPieLabelUtils$$[0].markerDisplayed = "on", $DvtChartPieLabelUtils$$[0].color || ($DvtChartPieLabelUtils$$[0].color = $DvtSparkChartDefaults$$.firstColor));
    $DvtSparkChartDefaults$$.lastColor && 0 < $DvtChartPieLabelUtils$$.length && ($DvtChartPieLabelUtils$$[$DvtChartPieLabelUtils$$.length - 1].markerDisplayed = "on", $DvtChartPieLabelUtils$$[$DvtChartPieLabelUtils$$.length - 1].color || ($DvtChartPieLabelUtils$$[$DvtChartPieLabelUtils$$.length - 1].color = $DvtSparkChartDefaults$$.lastColor));
    $DvtSparkChartAutomation$$.series = [{items:$DvtChartPieLabelUtils$$, areaColor:$DvtSparkChartDefaults$$.areaColor}];
    $DvtSparkChartDefaults$$.referenceObjects && ($DvtSparkChartAutomation$$.yAxis.referenceObjects = $DvtSparkChartDefaults$$.referenceObjects);
    $DvtSparkChartAutomation$$.__spark = $JSCompiler_alias_TRUE$$;
    $DvtChartPieLabelUtils$$ = $DvtSparkChartDefaults$$.barSpacing;
    "auto" == $DvtChartPieLabelUtils$$ && ($DvtChartPieLabelUtils$$ = 1 < $dvt$$2$$.$Agent$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
    $DvtSparkChartAutomation$$.__sparkBarSpacing = $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$.type = $DvtChartStyleUtils$$ ? "bar" : $DvtSparkChartDefaults$$.type;
    $DvtSparkChartAutomation$$.animationOnDataChange = $DvtSparkChartDefaults$$.animationOnDataChange;
    $DvtSparkChartAutomation$$.animationOnDisplay = $DvtSparkChartDefaults$$.animationOnDisplay;
    $DvtSparkChartAutomation$$.emptyText = $DvtSparkChartDefaults$$.emptyText;
    $DvtSparkChartAutomation$$.styleDefaults.colors = [$DvtSparkChartDefaults$$.color];
    $DvtSparkChartAutomation$$.styleDefaults.animationDuration = $DvtSparkChartDefaults$$.animationDuration;
    $DvtSparkChartAutomation$$.styleDefaults.animationIndicators = "none";
    $DvtSparkChartAutomation$$.styleDefaults.lineWidth = $DvtSparkChartDefaults$$.lineWidth;
    $DvtSparkChartAutomation$$.styleDefaults.lineStyle = $DvtSparkChartDefaults$$.lineStyle;
    $DvtSparkChartAutomation$$.styleDefaults.lineType = $DvtSparkChartDefaults$$.lineType;
    $DvtSparkChartAutomation$$.styleDefaults.markerSize = $DvtSparkChartDefaults$$.markerSize;
    $DvtSparkChartAutomation$$.styleDefaults.markerShape = $DvtSparkChartDefaults$$.markerShape;
    $DvtSparkChartAutomation$$.styleDefaults.barGapRatio = $DvtSparkChartDefaults$$.barGapRatio;
    $DvtSparkChartAutomation$$.styleDefaults.dataItemGaps = "0%";
    $DvtSparkChartAutomation$$.xAxis.rendered = "off";
    $DvtSparkChartAutomation$$.yAxis.rendered = "off";
    $DvtChartStyleUtils$$ = "zero" == $DvtSparkChartDefaults$$.baselineScaling;
    $DvtChartPieLabelUtils$$ = $DvtChartPieRenderUtils$$ != $DvtChartDataChangeFunnelSlice$$ ? 0.1 * ($DvtChartPieRenderUtils$$ - $DvtChartDataChangeFunnelSlice$$) : 0.1 * Math.abs($DvtChartPieRenderUtils$$);
    $DvtSparkChartAutomation$$.yAxis.min = $DvtChartStyleUtils$$ && 0 <= $DvtChartDataChangeFunnelSlice$$ ? 0 : $DvtChartDataChangeFunnelSlice$$ - $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$.yAxis.max = $DvtChartStyleUtils$$ && 0 >= $DvtChartPieRenderUtils$$ ? 0 : $DvtChartPieRenderUtils$$ + $DvtChartPieLabelUtils$$;
    $DvtSparkChartAutomation$$.styleDefaults.seriesEffect = "none" == $DvtSparkChartDefaults$$.visualEffects || !("area" == $DvtSparkChartDefaults$$.type || "lineWithArea" == $DvtSparkChartDefaults$$.type) ? "color" : "gradient";
    $DvtSparkChartAutomation$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
    $DvtSparkChartAutomation$$.legend = {rendered:"off"};
    $DvtSparkChartAutomation$$._statusMessageStyle = $DvtSparkChartDefaults$$._statusMessageStyle;
    return $DvtSparkChartAutomation$$
  };
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "Chart", $dvt$$2$$.$Chart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$, "newInstance", $dvt$$2$$.$Chart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "destroy", $dvt$$2$$.$Chart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getAutomation", $dvt$$2$$.$Chart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getDefaults", $dvt$$2$$.$Chart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "getValuesAt", $dvt$$2$$.$Chart$.prototype.$getValuesAt$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "highlight", $dvt$$2$$.$Chart$.prototype.$highlight$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "positionDataCursor", $dvt$$2$$.$Chart$.prototype.$positionDataCursor$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "render", $dvt$$2$$.$Chart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$Chart$.prototype, "select", $dvt$$2$$.$Chart$.prototype.select);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDomElementForSubId", $DvtChartAutomation$$.prototype.$getDomElementForSubId$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getDataItem", $DvtChartAutomation$$.prototype.$getDataItem$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroup", $DvtChartAutomation$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeries", $DvtChartAutomation$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getGroupCount", $DvtChartAutomation$$.prototype.$getGroupCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getSeriesCount", $DvtChartAutomation$$.prototype.$getSeriesCount$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getTitle", $DvtChartAutomation$$.prototype.$getTitle$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getLegend", $DvtChartAutomation$$.prototype.$getLegend$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getPlotArea", $DvtChartAutomation$$.prototype.$getPlotArea$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getXAxis", $DvtChartAutomation$$.prototype.$getXAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getYAxis", $DvtChartAutomation$$.prototype.$getYAxis$);
  $dvt$$2$$.$exportProperty$($DvtChartAutomation$$.prototype, "getY2Axis", $DvtChartAutomation$$.prototype.$getY2Axis$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getId", $DvtChartDataItem$$.prototype.getId);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getSeries", $DvtChartDataItem$$.prototype.$getSeries$);
  $dvt$$2$$.$exportProperty$($DvtChartDataItem$$.prototype, "getGroup", $DvtChartDataItem$$.prototype.$getGroup$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$, "SparkChart", $dvt$$2$$.$SparkChart$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$, "newInstance", $dvt$$2$$.$SparkChart$.newInstance);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "destroy", $dvt$$2$$.$SparkChart$.prototype.$destroy$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getAutomation", $dvt$$2$$.$SparkChart$.prototype.$getAutomation$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "getDefaults", $dvt$$2$$.$SparkChart$.prototype.$getDefaults$);
  $dvt$$2$$.$exportProperty$($dvt$$2$$.$SparkChart$.prototype, "render", $dvt$$2$$.$SparkChart$.prototype.$render$);
  $dvt$$2$$.$exportProperty$($DvtSparkChartAutomation$$.prototype, "getDataItem", $DvtSparkChartAutomation$$.prototype.$getDataItem$)
})(dvt);

  return dvt;
});
