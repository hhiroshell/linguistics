/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$54$$, $ko$$9$$) {
  $oj$$54$$.$ModuleAnimations$ = {};
  $oj$$54$$.$ModuleAnimations$.$_DESCRIPTORS$ = {coverStart:{$oldViewClass$:"oj-animation-coverstart", $newViewClass$:"oj-animation-coverstart", $newViewOnTop$:!0}, coverUp:{$newViewClass$:"oj-animation-coverup", $newViewOnTop$:!0}, fade:{$oldViewClass$:"oj-animation-fade", $newViewClass$:"oj-animation-fade", $newViewOnTop$:!1}, revealDown:{$oldViewClass$:"oj-animation-revealdown", $newViewOnTop$:!1}, revealEnd:{$oldViewClass$:"oj-animation-revealend", $newViewClass$:"oj-animation-revealend", $newViewOnTop$:!1}, 
  zoomIn:{$newViewClass$:"oj-animation-zoomin", $newViewOnTop$:!0}, zoomOut:{$oldViewClass$:"oj-animation-zoomout", $newViewOnTop$:!1}};
  $oj$$54$$.$ModuleAnimations$.$_animateElement$ = function $$oj$$54$$$$ModuleAnimations$$$_animateElement$$($element$$153$$, $baseClass$$1$$, $action$$) {
    var $jelem$$8$$ = $($element$$153$$);
    return new Promise(function($resolve$$63$$) {
      function $endListener$$() {
        $resolve$$63$$(!0);
      }
      var $duration$$13_fromClass$$ = "oj-" + $action$$, $toClass$$ = $duration$$13_fromClass$$ + "-active";
      $jelem$$8$$.addClass($baseClass$$1$$);
      $jelem$$8$$.addClass($duration$$13_fromClass$$);
      window.requestAnimationFrame(function() {
        $jelem$$8$$.addClass($toClass$$);
      });
      if (($duration$$13_fromClass$$ = $jelem$$8$$.css("animationDuration") || $jelem$$8$$.css("webkitAnimationDuration")) && "0s" != $duration$$13_fromClass$$) {
        $jelem$$8$$.on("animationend webkitAnimationEnd", $endListener$$);
      } else {
        if (($duration$$13_fromClass$$ = $jelem$$8$$.css("transitionDuration") || $jelem$$8$$.css("webkitTransitionDuration")) && "0s" != $duration$$13_fromClass$$) {
          $jelem$$8$$.on("transitionend webkitTransitionEnd", $endListener$$);
        } else {
          $resolve$$63$$(!0);
        }
      }
    });
  };
  $oj$$54$$.$ModuleAnimations$.$_animateView$ = function $$oj$$54$$$$ModuleAnimations$$$_animateView$$($oldElement$$, $newElement$$, $animateName_descriptor$$5$$) {
    var $promises$$1$$ = [];
    $animateName_descriptor$$5$$ = $oj$$54$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName_descriptor$$5$$];
    $oldElement$$ && $animateName_descriptor$$5$$ && $animateName_descriptor$$5$$.$oldViewClass$ && $promises$$1$$.push($oj$$54$$.$ModuleAnimations$.$_animateElement$($oldElement$$, $animateName_descriptor$$5$$.$oldViewClass$, "leave"));
    $newElement$$ && $animateName_descriptor$$5$$ && $animateName_descriptor$$5$$.$newViewClass$ && $promises$$1$$.push($oj$$54$$.$ModuleAnimations$.$_animateElement$($newElement$$, $animateName_descriptor$$5$$.$newViewClass$, "enter"));
    return Promise.all($promises$$1$$);
  };
  $oj$$54$$.$ModuleAnimations$.$_addContainedElements$ = function $$oj$$54$$$$ModuleAnimations$$$_addContainedElements$$($node$$115$$, $roots$$) {
    for (var $child$$24$$ = $ko$$9$$.virtualElements.firstChild($node$$115$$);$child$$24$$;) {
      1 == $child$$24$$.nodeType ? $roots$$.push($child$$24$$) : 8 == $child$$24$$.nodeType && this.$_addContainedElements$($child$$24$$, $roots$$), $child$$24$$ = $ko$$9$$.virtualElements.nextSibling($child$$24$$);
    }
  };
  $oj$$54$$.$ModuleAnimations$.$_cacheVirtualViewRoot$ = function $$oj$$54$$$$ModuleAnimations$$$_cacheVirtualViewRoot$$($context$$122$$, $root$$14$$) {
    $context$$122$$._ojOldRoot = $root$$14$$;
  };
  $oj$$54$$.$ModuleAnimations$.$_getVirtualViewRoot$ = function $$oj$$54$$$$ModuleAnimations$$$_getVirtualViewRoot$$($context$$123$$) {
    return $context$$123$$._ojOldRoot;
  };
  $oj$$54$$.$ModuleAnimations$.$_defaultCanAnimate$ = function $$oj$$54$$$$ModuleAnimations$$$_defaultCanAnimate$$($context$$124$$) {
    if ($context$$124$$.isInitial) {
      return!1;
    }
    if (1 == $context$$124$$.node.nodeType) {
      return!0;
    }
    if (8 == $context$$124$$.node.nodeType) {
      var $children$$29$$ = [];
      $oj$$54$$.$ModuleAnimations$.$_addContainedElements$($context$$124$$.node, $children$$29$$);
      if ($children$$29$$ && 1 == $children$$29$$.length) {
        return $oj$$54$$.$ModuleAnimations$.$_cacheVirtualViewRoot$($context$$124$$, $children$$29$$[0]), !0;
      }
    }
    return!1;
  };
  $oj$$54$$.$ModuleAnimations$.$_getOldView$ = function $$oj$$54$$$$ModuleAnimations$$$_getOldView$$($context$$125$$) {
    var $oldView$$;
    1 == $context$$125$$.node.nodeType ? $oldView$$ = $context$$125$$.node : 8 == $context$$125$$.node.nodeType && ($oldView$$ = $oj$$54$$.$ModuleAnimations$.$_getVirtualViewRoot$($context$$125$$));
    return $oldView$$;
  };
  $oj$$54$$.$ModuleAnimations$.$_createViewParent$ = function $$oj$$54$$$$ModuleAnimations$$$_createViewParent$$($host_oldView$$1$$) {
    var $viewport$$ = $(document.createElement("div")), $cssStyle$$ = {position:"absolute", height:$host_oldView$$1$$.offsetHeight + "px", width:$host_oldView$$1$$.offsetWidth + "px", left:$host_oldView$$1$$.offsetLeft + "px", top:$host_oldView$$1$$.offsetTop + "px"};
    $viewport$$.appendTo($host_oldView$$1$$.offsetParent);
    $viewport$$.css($cssStyle$$);
    $viewport$$.addClass("oj-animation-host-viewport");
    $host_oldView$$1$$ = document.createElement("div");
    $host_oldView$$1$$.className = "oj-animation-host";
    $viewport$$.append($host_oldView$$1$$);
    return $host_oldView$$1$$;
  };
  $oj$$54$$.$ModuleAnimations$.$_defaultPrepareAnimation$ = function $$oj$$54$$$$ModuleAnimations$$$_defaultPrepareAnimation$$($context$$126$$, $animateName$$1$$) {
    var $viewParents$$ = {}, $descriptor$$6$$ = $oj$$54$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName$$1$$], $oldView$$2$$ = $oj$$54$$.$ModuleAnimations$.$_getOldView$($context$$126$$);
    $descriptor$$6$$ && ($descriptor$$6$$.$newViewClass$ && !$descriptor$$6$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$54$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$6$$.$oldViewClass$ && ($viewParents$$.oldViewParent = $oj$$54$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$6$$.$newViewClass$ && $descriptor$$6$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$54$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)));
    return $viewParents$$;
  };
  $oj$$54$$.$ModuleAnimations$.$_defaultAnimate$ = function $$oj$$54$$$$ModuleAnimations$$$_defaultAnimate$$($context$$127$$, $animateName$$2$$) {
    return $oj$$54$$.$ModuleAnimations$.$_animateView$($context$$127$$.oldViewParent, $context$$127$$.newViewParent, $animateName$$2$$).then(function() {
      $oj$$54$$.$ModuleAnimations$.$_postAnimationProcess$($context$$127$$);
    });
  };
  $oj$$54$$.$ModuleAnimations$.$_removeViewParent$ = function $$oj$$54$$$$ModuleAnimations$$$_removeViewParent$$($context$$128$$, $hostProp$$) {
    var $host$$1_viewport$$1$$ = $context$$128$$[$hostProp$$];
    $host$$1_viewport$$1$$ && ($host$$1_viewport$$1$$ = $host$$1_viewport$$1$$.parentNode) && $host$$1_viewport$$1$$.parentNode && $host$$1_viewport$$1$$.parentNode.removeChild($host$$1_viewport$$1$$);
  };
  $oj$$54$$.$ModuleAnimations$.$_postAnimationProcess$ = function $$oj$$54$$$$ModuleAnimations$$$_postAnimationProcess$$($context$$129$$) {
    $context$$129$$.removeOldView();
    $context$$129$$.insertNewView();
    $oj$$54$$.$ModuleAnimations$.$_removeViewParent$($context$$129$$, "newViewParent");
    $oj$$54$$.$ModuleAnimations$.$_removeViewParent$($context$$129$$, "oldViewParent");
  };
  $oj$$54$$.$ModuleAnimations$.$_getImplementation$ = function $$oj$$54$$$$ModuleAnimations$$$_getImplementation$$($animateName$$3$$) {
    return{canAnimate:$oj$$54$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$130$$) {
      return $oj$$54$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$130$$, $animateName$$3$$);
    }, animate:function($context$$131$$) {
      return $oj$$54$$.$ModuleAnimations$.$_defaultAnimate$($context$$131$$, $animateName$$3$$);
    }};
  };
  $oj$$54$$.$ModuleAnimations$.$_getNavigateMethod$ = function $$oj$$54$$$$ModuleAnimations$$$_getNavigateMethod$$($navigationType$$) {
    null == $oj$$54$$.$ModuleAnimations$.$_navigateMethods$ && ($oj$$54$$.$ModuleAnimations$.$_navigateMethods$ = $oj$$54$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-animation-navigate-methods"));
    return $oj$$54$$.$ModuleAnimations$.$_navigateMethods$ ? $oj$$54$$.$ModuleAnimations$.$_navigateMethods$[$navigationType$$] : null;
  };
  $oj$$54$$.$ModuleAnimations$.$_navigateCanAnimate$ = function $$oj$$54$$$$ModuleAnimations$$$_navigateCanAnimate$$($context$$133$$, $navigationType$$1$$) {
    return $oj$$54$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$1$$) && $oj$$54$$.$ModuleAnimations$.$_defaultCanAnimate$($context$$133$$);
  };
  $oj$$54$$.$ModuleAnimations$.$_navigatePrepareAnimation$ = function $$oj$$54$$$$ModuleAnimations$$$_navigatePrepareAnimation$$($context$$134$$, $navigationType$$2$$) {
    var $animateName$$4$$ = $oj$$54$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$2$$);
    return $oj$$54$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$134$$, $animateName$$4$$);
  };
  $oj$$54$$.$ModuleAnimations$.$_navigateAnimate$ = function $$oj$$54$$$$ModuleAnimations$$$_navigateAnimate$$($context$$135$$, $navigationType$$3$$) {
    var $animateName$$5$$ = $oj$$54$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$3$$);
    return $oj$$54$$.$ModuleAnimations$.$_defaultAnimate$($context$$135$$, $animateName$$5$$);
  };
  $oj$$54$$.$ModuleAnimations$.$_getNavigateImplementation$ = function $$oj$$54$$$$ModuleAnimations$$$_getNavigateImplementation$$($navigationType$$4$$) {
    return{canAnimate:function($context$$136$$) {
      return $oj$$54$$.$ModuleAnimations$.$_navigateCanAnimate$($context$$136$$, $navigationType$$4$$);
    }, prepareAnimation:function($context$$137$$) {
      return $oj$$54$$.$ModuleAnimations$.$_navigatePrepareAnimation$($context$$137$$, $navigationType$$4$$);
    }, animate:function($context$$138$$) {
      return $oj$$54$$.$ModuleAnimations$.$_navigateAnimate$($context$$138$$, $navigationType$$4$$);
    }};
  };
  $oj$$54$$.$ModuleAnimations$.$coverStart$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("coverStart");
  $goog$exportPath_$$("ModuleAnimations.coverStart", $oj$$54$$.$ModuleAnimations$.$coverStart$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$revealEnd$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("revealEnd");
  $goog$exportPath_$$("ModuleAnimations.revealEnd", $oj$$54$$.$ModuleAnimations$.$revealEnd$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$coverUp$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("coverUp");
  $goog$exportPath_$$("ModuleAnimations.coverUp", $oj$$54$$.$ModuleAnimations$.$coverUp$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$revealDown$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("revealDown");
  $goog$exportPath_$$("ModuleAnimations.revealDown", $oj$$54$$.$ModuleAnimations$.$revealDown$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$zoomIn$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("zoomIn");
  $goog$exportPath_$$("ModuleAnimations.zoomIn", $oj$$54$$.$ModuleAnimations$.$zoomIn$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$zoomOut$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("zoomOut");
  $goog$exportPath_$$("ModuleAnimations.zoomOut", $oj$$54$$.$ModuleAnimations$.$zoomOut$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$fade$ = $oj$$54$$.$ModuleAnimations$.$_getImplementation$("fade");
  $goog$exportPath_$$("ModuleAnimations.fade", $oj$$54$$.$ModuleAnimations$.$fade$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$drillIn$ = $oj$$54$$.$ModuleAnimations$.$_getNavigateImplementation$("drillIn");
  $goog$exportPath_$$("ModuleAnimations.drillIn", $oj$$54$$.$ModuleAnimations$.$drillIn$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$drillOut$ = $oj$$54$$.$ModuleAnimations$.$_getNavigateImplementation$("drillOut");
  $goog$exportPath_$$("ModuleAnimations.drillOut", $oj$$54$$.$ModuleAnimations$.$drillOut$, $oj$$54$$);
  $oj$$54$$.$ModuleAnimations$.$switcher$ = function $$oj$$54$$$$ModuleAnimations$$$switcher$$($callback$$112$$) {
    return new function() {
      function $_getDelegateInvoker$$($name$$142$$) {
        return function($context$$139$$) {
          return $_delegate$$[$name$$142$$].call($_delegate$$, $context$$139$$);
        };
      }
      var $_delegate$$, $_self$$ = this;
      this.canAnimate = function $this$canAnimate$($context$$140$$) {
        var $methods$$4_type$$99$$ = $callback$$112$$($context$$140$$);
        $_delegate$$ = null == $methods$$4_type$$99$$ ? null : $oj$$54$$.ModuleAnimations[$methods$$4_type$$99$$];
        if (!$_delegate$$) {
          return!1;
        }
        for (var $methods$$4_type$$99$$ = ["prepareAnimation", "animate"], $i$$421$$ = 0;$i$$421$$ < $methods$$4_type$$99$$.length;$i$$421$$++) {
          var $method$$9$$ = $methods$$4_type$$99$$[$i$$421$$];
          $_self$$[$method$$9$$] = $_getDelegateInvoker$$($method$$9$$);
        }
        return $_getDelegateInvoker$$("canAnimate")($context$$140$$);
      };
    };
  };
  $goog$exportPath_$$("ModuleAnimations.switcher", $oj$$54$$.$ModuleAnimations$.$switcher$, $oj$$54$$);
});
