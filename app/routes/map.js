import Ember from 'ember';

export default Ember.Route.extend({
});
//
//
//App = Em.Application.create();
//
//App.Event = Em.Object.extend({
//    lat: -33.8665433,
//    lng: 151.1956316
//});
//
//App.EventController = Ember.ObjectController.extend();
//
//App.ApplicationController = Ember.ObjectController.extend();
//
//App.EventView = Ember.View.extend({
//    templateName: 'event',
//    map: null,
//    latitudeBinding: 'controller.content.lat',
//    longitudeBinding: 'controller.content.lng',
//    didInsertElement: function () {
//        var mapOptions = {
//            center: new google.maps.LatLng(this.get('latitude'), this.get('longitude')),
//            zoom: 8,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//        var map = new google.maps.Map(this.$().get(0), mapOptions);
//        this.set('map', map); //save for future updations
//        this.$().css({ width: "400px", height: "400px" });
//    },
//    reRenderMap: function () {
//        if (this.get('map')) {
//            var newLoc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
//            this.get('map').setCenter(newLoc);
//        }
//    }.observes('latitude', 'longitude') //these are bound to lat/lng of Event
//});
//
//App.ApplicationView = Ember.View.extend({
//    templateName: 'application'
//});
//
//App.Router = Ember.Router.extend({
//    enableLogging: true,
//    root: Ember.Route.extend({
//        event: Ember.Route.extend({
//            route: '/',
//            connectOutlets: function (router) {
//                router.get('eventController').set('content', App.Event.create());
//                router.get('applicationController').connectOutlet('event');
//            }
//        })
//    })
//});
//
//App.initialize();