define(['backbone', 'marionette'],
function (Backbone, Marionette) {
    
    var AppRouter = Backbone.Marionette.AppRouter.extend({
        
        routes: {
            'login': 'renderLogin'
        },
        
        renderLogin: function () {
            
        }
        
    });
    
    return AppRouter;
    
});