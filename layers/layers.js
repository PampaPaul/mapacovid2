var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_global_covid19_live_update_1 = new ol.format.GeoJSON();
var features_global_covid19_live_update_1 = format_global_covid19_live_update_1.readFeatures(json_global_covid19_live_update_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_global_covid19_live_update_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_global_covid19_live_update_1.addFeatures(features_global_covid19_live_update_1);
var lyr_global_covid19_live_update_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_global_covid19_live_update_1, 
                style: style_global_covid19_live_update_1,
                interactive: true,
                title: '<img src="styles/legend/global_covid19_live_update_1.png" /> global_covid19_live_update'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_global_covid19_live_update_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_global_covid19_live_update_1];
lyr_global_covid19_live_update_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Country_Region': 'Country_Region', 'Last_Update': 'Last_Update', 'Lat': 'Lat', 'Long_': 'Long_', 'Confirmed': 'Confirmed', 'Deaths': 'Deaths', 'Recovered': 'Recovered', 'Active': 'Active', });
lyr_global_covid19_live_update_1.set('fieldImages', {'OBJECTID': '', 'Country_Region': '', 'Last_Update': '', 'Lat': '', 'Long_': '', 'Confirmed': '', 'Deaths': '', 'Recovered': '', 'Active': '', });
lyr_global_covid19_live_update_1.set('fieldLabels', {'OBJECTID': 'inline label', 'Country_Region': 'inline label', 'Last_Update': 'inline label', 'Lat': 'inline label', 'Long_': 'inline label', 'Confirmed': 'inline label', 'Deaths': 'inline label', 'Recovered': 'inline label', 'Active': 'inline label', });
lyr_global_covid19_live_update_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});