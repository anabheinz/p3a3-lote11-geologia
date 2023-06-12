var size = 0;
var placement = 'point';

var style_GEOLOGIA_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("fid");
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 32167.000000 && value <= 32167.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,194,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32221.000000 && value <= 32221.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,152,186,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24376.000000 && value <= 24376.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,187,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24173.000000 && value <= 24173.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(159,235,157,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24349.000000 && value <= 24349.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(106,254,102,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24141.000000 && value <= 24141.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,176,78,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24314.000000 && value <= 24314.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(194,219,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32080.000000 && value <= 32080.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(108,122,107,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24179.000000 && value <= 24179.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,254,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 31987.000000 && value <= 31987.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,218,155,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23645.000000 && value <= 23645.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(109,170,85,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23700.000000 && value <= 23700.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,202,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24007.000000 && value <= 24007.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,82,45,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23803.000000 && value <= 23803.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,95,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24213.000000 && value <= 24213.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,173,223,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23891.000000 && value <= 23891.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,54,136,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23893.000000 && value <= 23893.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,188,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23758.000000 && value <= 23758.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(47,172,160,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23704.000000 && value <= 23704.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,153,203,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23797.000000 && value <= 23797.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(86,58,148,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23775.000000 && value <= 23775.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,8,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23542.000000 && value <= 23542.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,153,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23890.000000 && value <= 23890.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,70,171,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23737.000000 && value <= 23737.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,160,164,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24104.000000 && value <= 24104.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,187,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 31709.000000 && value <= 31709.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,57,90,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32168.000000 && value <= 32168.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,69,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23757.000000 && value <= 23757.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(95,56,63,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23547.000000 && value <= 23547.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,125,135,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23615.000000 && value <= 23615.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(162,93,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32179.000000 && value <= 32179.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,74,91,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23750.000000 && value <= 23750.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(183,75,96,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23664.000000 && value <= 23664.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(109,62,71,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24193.000000 && value <= 24193.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,1,52,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23710.000000 && value <= 23710.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,165,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23610.000000 && value <= 23610.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,74,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23584.000000 && value <= 23584.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,74,91,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23543.000000 && value <= 23543.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,198,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23633.000000 && value <= 23633.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,219,104,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23554.000000 && value <= 23554.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(165,140,173,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23774.000000 && value <= 23774.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(186,223,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24032.000000 && value <= 24032.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,146,146,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32228.000000 && value <= 32228.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,130,22,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23551.000000 && value <= 23551.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(143,159,188,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23570.000000 && value <= 23570.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(179,181,88,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23553.000000 && value <= 23553.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,63,98,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23552.000000 && value <= 23552.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,135,165,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24076.000000 && value <= 24104.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(197,104,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23754.000000 && value <= 23754.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,250,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23954.000000 && value <= 23954.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,172,164,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
