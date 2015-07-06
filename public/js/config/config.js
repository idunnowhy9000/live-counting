require.config({
    baseUrl: '/js/',
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'marionette': 'lib/marionette',
        'text': 'lib/text',
        'parsley': 'lib/parsley'
    },
    shim: {
        'underscore': { 'exports': '_' },
        'backbone': { 'deps': ['underscore', 'jquery'], 'exports': 'Backbone' },
        'marionette': { 'deps': ['backbone'], 'exports': 'Marionette' },
    }
});