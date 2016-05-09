requirejs.config({
    // Path mappings for the logical module names
    paths:
    //injector:mainReleasePaths
    {
        'knockout': 'libs/knockout/knockout-3.4.0',
        'jquery': 'libs/jquery/jquery-2.1.3.min',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',
        'promise': 'libs/es6-promise/promise-1.0.0.min',
        'hammerjs': 'libs/hammer/hammer-2.0.4.min',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
        'ojs': 'libs/oj/v2.0.1/debug',
        'ojL10n': 'libs/oj/v2.0.1/ojL10n',
        'ojtranslations': 'libs/oj/v2.0.1/resources',
        'signals': 'libs/js-signals/signals.min',
        'text': 'libs/require/text'
    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
        exports: ['jQuery', '$']
        }
    },
    // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
    // resources with a custom translation file.
    // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
    // a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
            //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
            }
        }
    }
});

require(['jquery', 'knockout', 'ojs/ojknockout', 'ojs/ojmodule'],
function($, ko)
{
    $(document).ready(
        function()
        {
            connectSocket();
            ko.applyBindings(null, document.getElementById('content'));
        }
    );
});
