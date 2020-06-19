var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucinIndicedeHumedadSalustiana_1 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedadSalustiana_1 = format_EvolucinIndicedeHumedadSalustiana_1.readFeatures(json_EvolucinIndicedeHumedadSalustiana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedadSalustiana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedadSalustiana_1.addFeatures(features_EvolucinIndicedeHumedadSalustiana_1);
var lyr_EvolucinIndicedeHumedadSalustiana_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedadSalustiana_1, 
                style: style_EvolucinIndicedeHumedadSalustiana_1,
                interactive: false,
    title: 'Evolución Indice de Humedad - Salustiana<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadSalustiana_1_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadSalustiana_1_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadSalustiana_1_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadSalustiana_1_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadSalustiana_1_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedadSalustiana_2 = new ol.format.GeoJSON();
var features_IndicedeHumedadSalustiana_2 = format_IndicedeHumedadSalustiana_2.readFeatures(json_IndicedeHumedadSalustiana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedadSalustiana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedadSalustiana_2.addFeatures(features_IndicedeHumedadSalustiana_2);
var lyr_IndicedeHumedadSalustiana_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedadSalustiana_2, 
                style: style_IndicedeHumedadSalustiana_2,
                interactive: false,
    title: 'Indice de Humedad - Salustiana<br />\
    <img src="styles/legend/IndicedeHumedadSalustiana_2_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedadSalustiana_2_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedadSalustiana_2_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedadSalustiana_2_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedadSalustiana_2_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacinSalustiana_3 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacinSalustiana_3 = format_EvolucinIndicedeVegetacinSalustiana_3.readFeatures(json_EvolucinIndicedeVegetacinSalustiana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacinSalustiana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacinSalustiana_3.addFeatures(features_EvolucinIndicedeVegetacinSalustiana_3);
var lyr_EvolucinIndicedeVegetacinSalustiana_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacinSalustiana_3, 
                style: style_EvolucinIndicedeVegetacinSalustiana_3,
                interactive: false,
    title: 'Evolución Indice de Vegetación - Salustiana<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinSalustiana_3_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinSalustiana_3_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinSalustiana_3_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinSalustiana_3_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinSalustiana_3_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacinSalustiana_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacinSalustiana_4 = format_IndicedeVegetacinSalustiana_4.readFeatures(json_IndicedeVegetacinSalustiana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacinSalustiana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacinSalustiana_4.addFeatures(features_IndicedeVegetacinSalustiana_4);
var lyr_IndicedeVegetacinSalustiana_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacinSalustiana_4, 
                style: style_IndicedeVegetacinSalustiana_4,
                interactive: false,
    title: 'Indice de Vegetación - Salustiana<br />\
    <img src="styles/legend/IndicedeVegetacinSalustiana_4_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacinSalustiana_4_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacinSalustiana_4_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacinSalustiana_4_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacinSalustiana_4_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeHumedadLanelate_5 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedadLanelate_5 = format_EvolucinIndicedeHumedadLanelate_5.readFeatures(json_EvolucinIndicedeHumedadLanelate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedadLanelate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedadLanelate_5.addFeatures(features_EvolucinIndicedeHumedadLanelate_5);
var lyr_EvolucinIndicedeHumedadLanelate_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedadLanelate_5, 
                style: style_EvolucinIndicedeHumedadLanelate_5,
                interactive: false,
    title: 'Evolución Indice de Humedad - Lanelate<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_5_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_5_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_5_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_5_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_5_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedadLanelate_6 = new ol.format.GeoJSON();
var features_IndicedeHumedadLanelate_6 = format_IndicedeHumedadLanelate_6.readFeatures(json_IndicedeHumedadLanelate_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedadLanelate_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedadLanelate_6.addFeatures(features_IndicedeHumedadLanelate_6);
var lyr_IndicedeHumedadLanelate_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedadLanelate_6, 
                style: style_IndicedeHumedadLanelate_6,
                interactive: false,
    title: 'Indice de Humedad - Lanelate<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_6_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_6_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_6_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_6_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_6_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacinLanelate_7 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacinLanelate_7 = format_EvolucinIndicedeVegetacinLanelate_7.readFeatures(json_EvolucinIndicedeVegetacinLanelate_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacinLanelate_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacinLanelate_7.addFeatures(features_EvolucinIndicedeVegetacinLanelate_7);
var lyr_EvolucinIndicedeVegetacinLanelate_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacinLanelate_7, 
                style: style_EvolucinIndicedeVegetacinLanelate_7,
                interactive: false,
    title: 'Evolución Indice de Vegetación - Lanelate<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_7_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_7_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_7_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_7_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_7_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacinLanelate_8 = new ol.format.GeoJSON();
var features_IndicedeVegetacinLanelate_8 = format_IndicedeVegetacinLanelate_8.readFeatures(json_IndicedeVegetacinLanelate_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacinLanelate_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacinLanelate_8.addFeatures(features_IndicedeVegetacinLanelate_8);
var lyr_IndicedeVegetacinLanelate_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacinLanelate_8, 
                style: style_IndicedeVegetacinLanelate_8,
                interactive: false,
    title: 'Indice de Vegetación - Lanelate<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_8_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_8_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_8_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_8_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_8_4.png" /> Muy alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucinIndicedeHumedadSalustiana_1.setVisible(true);lyr_IndicedeHumedadSalustiana_2.setVisible(true);lyr_EvolucinIndicedeVegetacinSalustiana_3.setVisible(true);lyr_IndicedeVegetacinSalustiana_4.setVisible(true);lyr_EvolucinIndicedeHumedadLanelate_5.setVisible(true);lyr_IndicedeHumedadLanelate_6.setVisible(true);lyr_EvolucinIndicedeVegetacinLanelate_7.setVisible(true);lyr_IndicedeVegetacinLanelate_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucinIndicedeHumedadSalustiana_1,lyr_IndicedeHumedadSalustiana_2,lyr_EvolucinIndicedeVegetacinSalustiana_3,lyr_IndicedeVegetacinSalustiana_4,lyr_EvolucinIndicedeHumedadLanelate_5,lyr_IndicedeHumedadLanelate_6,lyr_EvolucinIndicedeVegetacinLanelate_7,lyr_IndicedeVegetacinLanelate_8];
lyr_EvolucinIndicedeHumedadSalustiana_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedadSalustiana_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacinSalustiana_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacinSalustiana_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedadLanelate_5.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedadLanelate_6.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacinLanelate_7.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacinLanelate_8.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedadSalustiana_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedadSalustiana_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacinSalustiana_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacinSalustiana_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedadLanelate_5.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedadLanelate_6.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacinLanelate_7.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacinLanelate_8.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedadSalustiana_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedadSalustiana_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacinSalustiana_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinSalustiana_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeHumedadLanelate_5.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedadLanelate_6.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacinLanelate_7.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinLanelate_8.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinLanelate_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});