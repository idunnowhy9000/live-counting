define(['backbone', 'marionette', 'jquery', 'underscore'],
function (Backbone, Marionette, $, _) {
    
    var App = new Backbone.Marionette.Application();
    
    //Organize Application into regions corresponding to DOM elements
    //Regions can contain views, Layouts, or subregions nested as necessary
    App.addRegion({
        headerRegion: '#header',
        contentRegion: '#content',
        footerRegion: '#footer'
    });
    
    // Mobile check
    App.isMobile = isMobile();
    
    // Utility functions
    function isMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
    }
    
});