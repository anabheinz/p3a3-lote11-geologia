var size = 0;
var placement = 'point';
function categories_Implantaes_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Contorno Araripina - Alternativa 01':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,149,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno Araripina - Alternativa 02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,0,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno Belém de São Francisco':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,1,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno de Cabrobó - Trecho 01':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,0,156,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno de Cabrobó - Trecho 02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(213,75,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno de Petrolândia - Alternativa 01':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,90,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contorno de Petrolândia - Alternativa 02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,254,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SM-01 - Terra Nova':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Implantaes_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NOME");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Implantaes_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
