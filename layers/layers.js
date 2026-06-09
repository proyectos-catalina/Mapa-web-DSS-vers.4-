var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tesela20kmChile_1 = new ol.format.GeoJSON();
var features_Tesela20kmChile_1 = format_Tesela20kmChile_1.readFeatures(json_Tesela20kmChile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tesela20kmChile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tesela20kmChile_1.addFeatures(features_Tesela20kmChile_1);
var lyr_Tesela20kmChile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tesela20kmChile_1, 
                style: style_Tesela20kmChile_1,
                popuplayertitle: 'Tesela 20 km Chile',
                interactive: false,
                title: '<img src="styles/legend/Tesela20kmChile_1.png" /> Tesela 20 km Chile'
            });
var format_Huso18SurChile_2 = new ol.format.GeoJSON();
var features_Huso18SurChile_2 = format_Huso18SurChile_2.readFeatures(json_Huso18SurChile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huso18SurChile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huso18SurChile_2.addFeatures(features_Huso18SurChile_2);
var lyr_Huso18SurChile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huso18SurChile_2, 
                style: style_Huso18SurChile_2,
                popuplayertitle: 'Huso 18 Sur Chile ',
                interactive: true,
                title: '<img src="styles/legend/Huso18SurChile_2.png" /> Huso 18 Sur Chile '
            });
var format_Huso19SurChile_3 = new ol.format.GeoJSON();
var features_Huso19SurChile_3 = format_Huso19SurChile_3.readFeatures(json_Huso19SurChile_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huso19SurChile_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huso19SurChile_3.addFeatures(features_Huso19SurChile_3);
var lyr_Huso19SurChile_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huso19SurChile_3, 
                style: style_Huso19SurChile_3,
                popuplayertitle: ' Huso 19 Sur Chile',
                interactive: true,
                title: '<img src="styles/legend/Huso19SurChile_3.png" />  Huso 19 Sur Chile'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Tesela20kmChile_1.setVisible(true);lyr_Huso18SurChile_2.setVisible(true);lyr_Huso19SurChile_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tesela20kmChile_1,lyr_Huso18SurChile_2,lyr_Huso19SurChile_3];
lyr_Tesela20kmChile_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_Huso18SurChile_2.set('fieldAliases', {'fid': 'fid', 'Nombre id': 'Nombre id', 'Id': 'Id', 'Nombre carta': 'Nombre carta', 'Link': 'Link', 'Seccion': 'Seccion', 'X_ESTE_MIN': 'X_ESTE_MIN', 'X_ESTE_MAX': 'X_ESTE_MAX', 'Y_NORTE_1_MIN': 'Y_NORTE_1_MIN', 'Y_NORTE_1_MAX': 'Y_NORTE_1_MAX', 'Proyeccion': 'Proyeccion', 'Huso': 'Huso', 'Datum ': 'Datum ', 'Elipsoide': 'Elipsoide', 'Escala ': 'Escala ', 'Codigo Producto IGM': 'Codigo Producto IGM', 'Hipervinculo ': 'Hipervinculo ', 'Existencia Compra': 'Existencia Compra', 'Cantidad Shp': 'Cantidad Shp', 'Cantidad JPG': 'Cantidad JPG', 'Cantidad Geotiff': 'Cantidad Geotiff', 'Cantidad Papel ': 'Cantidad Papel ', });
lyr_Huso19SurChile_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nombre carta': 'Nombre carta', 'Seccion': 'Seccion', 'X_ESTE_MIN': 'X_ESTE_MIN', 'X_ESTE_MAX': 'X_ESTE_MAX', 'Y_NORTE_1_MIN': 'Y_NORTE_1_MIN', 'Y_NORTE_1_MAX': 'Y_NORTE_1_MAX', 'Proyeccion': 'Proyeccion', 'Huso': 'Huso', 'Datum ': 'Datum ', 'Elipsoide': 'Elipsoide', 'Escala ': 'Escala ', 'Codigo Producto IGM': 'Codigo Producto IGM', 'Hipervinculo ': 'Hipervinculo ', 'Existencia Compra': 'Existencia Compra', 'Cantidad Shp': 'Cantidad Shp', 'Cantidad JPG': 'Cantidad JPG', 'Cantidad Geotiff': 'Cantidad Geotiff', 'Cantidad Papel ': 'Cantidad Papel ', 'nombre_limpio': 'nombre_limpio', 'Archivo JPG ': 'Archivo JPG ', });
lyr_Tesela20kmChile_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', });
lyr_Huso18SurChile_2.set('fieldImages', {'fid': '', 'Nombre id': '', 'Id': '', 'Nombre carta': '', 'Link': '', 'Seccion': '', 'X_ESTE_MIN': '', 'X_ESTE_MAX': '', 'Y_NORTE_1_MIN': '', 'Y_NORTE_1_MAX': '', 'Proyeccion': '', 'Huso': '', 'Datum ': '', 'Elipsoide': '', 'Escala ': '', 'Codigo Producto IGM': '', 'Hipervinculo ': '', 'Existencia Compra': '', 'Cantidad Shp': '', 'Cantidad JPG': '', 'Cantidad Geotiff': '', 'Cantidad Papel ': '', });
lyr_Huso19SurChile_3.set('fieldImages', {'fid': '', 'Id': '', 'Nombre carta': '', 'Seccion': '', 'X_ESTE_MIN': '', 'X_ESTE_MAX': '', 'Y_NORTE_1_MIN': '', 'Y_NORTE_1_MAX': '', 'Proyeccion': '', 'Huso': '', 'Datum ': '', 'Elipsoide': '', 'Escala ': '', 'Codigo Producto IGM': '', 'Hipervinculo ': '', 'Existencia Compra': '', 'Cantidad Shp': '', 'Cantidad JPG': '', 'Cantidad Geotiff': '', 'Cantidad Papel ': '', 'nombre_limpio': '', 'Archivo JPG ': '', });
lyr_Tesela20kmChile_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', });
lyr_Huso18SurChile_2.set('fieldLabels', {'fid': 'no label', 'Nombre id': 'header label - visible with data', 'Id': 'no label', 'Nombre carta': 'header label - visible with data', 'Link': 'no label', 'Seccion': 'no label', 'X_ESTE_MIN': 'no label', 'X_ESTE_MAX': 'no label', 'Y_NORTE_1_MIN': 'no label', 'Y_NORTE_1_MAX': 'no label', 'Proyeccion': 'no label', 'Huso': 'no label', 'Datum ': 'no label', 'Elipsoide': 'no label', 'Escala ': 'no label', 'Codigo Producto IGM': 'no label', 'Hipervinculo ': 'header label - visible with data', 'Existencia Compra': 'header label - visible with data', 'Cantidad Shp': 'header label - visible with data', 'Cantidad JPG': 'header label - always visible', 'Cantidad Geotiff': 'header label - always visible', 'Cantidad Papel ': 'no label', });
lyr_Huso19SurChile_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Nombre carta': 'header label - visible with data', 'Seccion': 'no label', 'X_ESTE_MIN': 'no label', 'X_ESTE_MAX': 'no label', 'Y_NORTE_1_MIN': 'no label', 'Y_NORTE_1_MAX': 'no label', 'Proyeccion': 'no label', 'Huso': 'no label', 'Datum ': 'no label', 'Elipsoide': 'no label', 'Escala ': 'no label', 'Codigo Producto IGM': 'no label', 'Hipervinculo ': 'header label - visible with data', 'Existencia Compra': 'header label - visible with data', 'Cantidad Shp': 'header label - visible with data', 'Cantidad JPG': 'header label - visible with data', 'Cantidad Geotiff': 'header label - visible with data', 'Cantidad Papel ': 'header label - visible with data', 'nombre_limpio': 'header label - visible with data', 'Archivo JPG ': 'no label', });
lyr_Huso19SurChile_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});