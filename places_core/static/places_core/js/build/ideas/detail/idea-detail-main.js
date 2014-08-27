//
//
//

require.config({
    
    baseUrl: window.STATIC_URL,
    
    urlArgs: "bust=" + (new Date()).getTime(),
    
    waitSeconds: 200,
    
    paths: {
        async: 'includes/require/async',
        jquery: 'includes/jquery/jquery',
        underscore: 'includes/underscore/underscore',
        backbone: 'includes/backbone/backbone',
        paginator: 'includes/backbone/backbone.paginator',
        tagsinput: 'includes/jquery/jquery.tagsinput',
        bootstrap: 'includes/bootstrap/bootstrap',
        bootbox: 'includes/bootstrap/bootbox',
        moment: 'includes/momentjs/moment',
        mapinput: 'js/ui/jquery.mapinput',
        ui: 'js/ui/ui',
        utils: 'js/utils/utils',
        common: 'js/common'
    },
    
    shim: {
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        
        bootstrap: {
            deps: ['jquery']
        },
        
        bootbox: {
            deps: ['bootstrap'],
            exports: 'bootbox'
        },
        
        tagsinput: {
            deps: ['jquery']
        },
        
        mapinput: {
            deps: ['jquery']
        }
    }
});

require(['jquery',
         'js/ideas/votes/counterWindow',
         'common',
         'js/ideas/votes/votes',
         'js/comments/comments',
         'js/maps/minimap',
         'js/maps/pointer',
         'js/inviter/userinviter',
         'js/locations/follow',
         'js/ideas/category-creator'],

function ($, CounterWindow) {
    
    "use strict";
    
    // Modal z podsumowanie głosów za i przeciw
    $('.idea-vote-count').on('click', function (e) {
        e.preventDefault();
        var ideaId = $(this).attr('data-target');
        var CW = CounterWindow.extend({
            'ideaId': ideaId
        });
        var cc = new CW();
    });
    
    // Minimapa z markerami (jeżeli są jakieś)
    setTimeout(function () {
        if (window.MARKERS.length > 0) {
            $('#minimap').minimap(window.MARKERS);
        }
    }, 2000);
    
    $(document).trigger('load');
    
});