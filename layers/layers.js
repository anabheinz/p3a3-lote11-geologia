var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'BaseMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HIDROGEOLOGIA_1 = new ol.format.GeoJSON();
var features_HIDROGEOLOGIA_1 = format_HIDROGEOLOGIA_1.readFeatures(json_HIDROGEOLOGIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGEOLOGIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGEOLOGIA_1.addFeatures(features_HIDROGEOLOGIA_1);
var lyr_HIDROGEOLOGIA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGEOLOGIA_1, 
                style: style_HIDROGEOLOGIA_1,
                interactive: true,
    title: 'HIDROGEOLOGIA<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_0.png" /> (1) Gr - Unidade Granular (Gr) de Produtividade Muito Alta<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_1.png" /> (4) Gr - Unidade Granular (Gr) de Produtividade Geralmente baixa porém localmente moderada<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_2.png" /> (5) Fr - Unidade Fraturada (Fr) de Produtividade Geralmente muito baixa porém localmente baixa<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_3.png" /> (5) Gr - Unidade Granular (Gr) de Produtividade Geralmente muito baixa porém localmente baixa<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_4.png" /> (6) Gr - Unidade Granular (Gr) de Produtividade Pouco Produtiva ou Não Aquífera<br />\
    <img src="styles/legend/HIDROGEOLOGIA_1_5.png" /> (6) K - Unidade Cárstica (K) de Produtividade Pouco Produtiva ou Não Aquífera<br />'
        });
var format_GEOMORFOLOGIA_2 = new ol.format.GeoJSON();
var features_GEOMORFOLOGIA_2 = format_GEOMORFOLOGIA_2.readFeatures(json_GEOMORFOLOGIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORFOLOGIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORFOLOGIA_2.addFeatures(features_GEOMORFOLOGIA_2);
var lyr_GEOMORFOLOGIA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOMORFOLOGIA_2, 
                style: style_GEOMORFOLOGIA_2,
                interactive: true,
    title: 'GEOMORFOLOGIA<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_0.png" /> R1a - Planícies Fluviais ou flúvio-lacustres<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_1.png" /> R2b - Planaltos e Baixos Platôs<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_2.png" /> R2c - Chapadas e Platôs<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_3.png" /> R3a1 - Superfícies Aplainadas Conservadas<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_4.png" /> R3a2 - Superfícies Aplainadas Degradadas<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_5.png" /> R3b - Inselbergs<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_6.png" /> R4a1 - Domínio de Colinas Amplas e Suaves<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_7.png" /> R4a2 - Domínio de Colinas Dissecadas e Morros Baixos<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_8.png" /> R4b - Domínio de Morros e Serras Baixas<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_9.png" /> R4c - Domínio Montanhoso<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_10.png" /> R4d - Escarpas Serranas<br />\
    <img src="styles/legend/GEOMORFOLOGIA_2_11.png" /> R4f - Vales Encaixados<br />'
        });
var format_PEDOLOGIA_3 = new ol.format.GeoJSON();
var features_PEDOLOGIA_3 = format_PEDOLOGIA_3.readFeatures(json_PEDOLOGIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEDOLOGIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEDOLOGIA_3.addFeatures(features_PEDOLOGIA_3);
var lyr_PEDOLOGIA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEDOLOGIA_3, 
                style: style_PEDOLOGIA_3,
                interactive: true,
    title: 'PEDOLOGIA<br />\
    <img src="styles/legend/PEDOLOGIA_3_0.png" /> Área Urbana<br />\
    <img src="styles/legend/PEDOLOGIA_3_1.png" /> CXbe - Cambissolo Háplico Tb Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_2.png" /> LAd - Latossolo Amarelo Distrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_3.png" /> LAe - Latossolo Amarelo Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_4.png" /> PVe - Argissolo Vermelho Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_5.png" /> PVAe - Argissolo Vermelho-Amarelo Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_6.png" /> RLd - Neossolo Litólico Distrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_7.png" /> RLe - Neossolo Litólico Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_8.png" /> RQo - Neossolo Quartzarênico Órtico<br />\
    <img src="styles/legend/PEDOLOGIA_3_9.png" /> RRd - Neossolo Regolítico Distrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_10.png" /> RRe - Neossolo Regolítico Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_11.png" /> RYve - Neossolo Flúvico Ta Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_12.png" /> SNo - Planossolo Nátrico Órtico<br />\
    <img src="styles/legend/PEDOLOGIA_3_13.png" /> SXe - Planossolo Háplico Eutrófico<br />\
    <img src="styles/legend/PEDOLOGIA_3_14.png" /> TCo - Luvissolo Crômico Órtico<br />\
    <img src="styles/legend/PEDOLOGIA_3_15.png" /> VXo - Vertissolo Háplico Órtico<br />'
        });
var format_GEOLOGIA_4 = new ol.format.GeoJSON();
var features_GEOLOGIA_4 = format_GEOLOGIA_4.readFeatures(json_GEOLOGIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIA_4.addFeatures(features_GEOLOGIA_4);
var lyr_GEOLOGIA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGIA_4, 
                style: style_GEOLOGIA_4,
                interactive: true,
    title: 'GEOLOGIA<br />\
    <img src="styles/legend/GEOLOGIA_4_0.png" /> A4 γ g - Unidade Granjeiro, suíte TTG<br />\
    <img src="styles/legend/GEOLOGIA_4_1.png" /> A4g - Complexo Granjeiro<br />\
    <img src="styles/legend/GEOLOGIA_4_2.png" /> Di - Formação Inajá<br />\
    <img src="styles/legend/GEOLOGIA_4_3.png" /> J3a - Formação Aliança<br />\
    <img src="styles/legend/GEOLOGIA_4_4.png" /> J3s - Formação Sergi<br />\
    <img src="styles/legend/GEOLOGIA_4_5.png" /> K1ci - Formação Candeias / Grupos Ilhas Indiscriminados<br />\
    <img src="styles/legend/GEOLOGIA_4_6.png" /> K1m - Formação Marizal<br />\
    <img src="styles/legend/GEOLOGIA_4_7.png" /> K1s - Formação Santana<br />\
    <img src="styles/legend/GEOLOGIA_4_8.png" /> K1ss - Formação São Sebastião<br />\
    <img src="styles/legend/GEOLOGIA_4_9.png" /> K2e - Formação Exu<br />\
    <img src="styles/legend/GEOLOGIA_4_10.png" /> MNrb1 - Complexo Riacho da Barreira - Unidade 1<br />\
    <img src="styles/legend/GEOLOGIA_4_11.png" /> MNrb2 - Complexo Riacho da Barreira - Unidade 2<br />\
    <img src="styles/legend/GEOLOGIA_4_12.png" /> MP mu pp - Suíte Serrote das Pedras Pretas<br />\
    <img src="styles/legend/GEOLOGIA_4_13.png" /> MP γ i - Corpo Granitóides indiscriminados<br />\
    <img src="styles/legend/GEOLOGIA_4_14.png" /> MP3 γ ch - Suíte Intrusiva Chorrochó<br />\
    <img src="styles/legend/GEOLOGIA_4_15.png" /> MP3 γ rl - Suíte Intrusiva São Pedro - Riacho das Lajes<br />\
    <img src="styles/legend/GEOLOGIA_4_16.png" /> MP3ca1 - Unidade Cabrobó 1<br />\
    <img src="styles/legend/GEOLOGIA_4_17.png" /> MP3ca2 - Unidade Cabrobó 2<br />\
    <img src="styles/legend/GEOLOGIA_4_18.png" /> MP3lc - Complexo Lagoa das Contendas<br />\
    <img src="styles/legend/GEOLOGIA_4_19.png" /> MP3lcc - Litofícies Lagoa das Contendas, calcário<br />\
    <img src="styles/legend/GEOLOGIA_4_20.png" /> MP3lcq - Litofácies Lagoa das Contendas, quartzito<br />\
    <img src="styles/legend/GEOLOGIA_4_21.png" /> MP3sg - Complexo Salgueiro - Riacho Gravatá<br />\
    <img src="styles/legend/GEOLOGIA_4_22.png" /> NP1 γ rf - Suíte intrusiva Recanto - Riacho do Forno<br />\
    <img src="styles/legend/GEOLOGIA_4_23.png" /> NP1sca - Complexo São Caetano<br />\
    <img src="styles/legend/GEOLOGIA_4_24.png" /> NP23sc - Complexo Surubim - Caroalina<br />\
    <img src="styles/legend/GEOLOGIA_4_25.png" /> NP3 γ 2it19 - Corpo Plúton Campos Sales-Açaré<br />\
    <img src="styles/legend/GEOLOGIA_4_26.png" /> NP3 γ 2it21 - Corpo Plúton Araripina<br />\
    <img src="styles/legend/GEOLOGIA_4_27.png" /> NP3 γ 2it45 - Corpo Plúton Sem Denominação<br />\
    <img src="styles/legend/GEOLOGIA_4_28.png" /> NP3 γ 2s2 - Corpo Plúton Serrita Sul<br />\
    <img src="styles/legend/GEOLOGIA_4_29.png" /> NP3 γ 2s3 - Corpo Plúton Salgueiro Oeste<br />\
    <img src="styles/legend/GEOLOGIA_4_30.png" /> NP3 γ 3i - Corpo Granitóides de quimismo indiscrimados<br />\
    <img src="styles/legend/GEOLOGIA_4_31.png" /> NP3 γ 3tf1 - Corpo Plúton Serra do Livramento<br />\
    <img src="styles/legend/GEOLOGIA_4_32.png" /> NP3 γ 3tf2 - Corpo Plúton Serrote Duas Irmãs<br />\
    <img src="styles/legend/GEOLOGIA_4_33.png" /> NP3 γ 3tf5 - Corpo Plúton Sem Denominação<br />\
    <img src="styles/legend/GEOLOGIA_4_34.png" /> NP3 γ 3tn1 - Corpo Plúton Terra Nova<br />\
    <img src="styles/legend/GEOLOGIA_4_35.png" /> NP3 γ 3tn2 - Corpo Plúton Salgueiro Leste<br />\
    <img src="styles/legend/GEOLOGIA_4_36.png" /> NP3 γ i - Corpo Granitóides indiscriminados<br />\
    <img src="styles/legend/GEOLOGIA_4_37.png" /> NP3st - Formação Santana dos Garrotes<br />\
    <img src="styles/legend/GEOLOGIA_4_38.png" /> NQc - Depósitos colúvio-eluviais<br />\
    <img src="styles/legend/GEOLOGIA_4_39.png" /> PP2b - Complexo Barro<br />\
    <img src="styles/legend/GEOLOGIA_4_40.png" /> PP2bf - Complexo Belém do São Francisco<br />\
    <img src="styles/legend/GEOLOGIA_4_41.png" /> PP2fl - Complexo Floresta<br />\
    <img src="styles/legend/GEOLOGIA_4_42.png" /> PP2i - Complexo Itaizinho<br />\
    <img src="styles/legend/GEOLOGIA_4_43.png" /> PP2p - Complexo Parnamirim<br />\
    <img src="styles/legend/GEOLOGIA_4_44.png" /> PP2se - Complexo Sertânia<br />\
    <img src="styles/legend/GEOLOGIA_4_45.png" /> PP3 γ ig - Suíte granítica do Fragmento Icaiçara<br />\
    <img src="styles/legend/GEOLOGIA_4_46.png" /> PP3 γ igd - Suíte granodiorítica do Fragmento Icaiçara<br />\
    <img src="styles/legend/GEOLOGIA_4_47.png" /> PP34 Δ mv - Suíte Malhada Vermelha<br />\
    <img src="styles/legend/GEOLOGIA_4_48.png" /> Q2a - Depósitos aluvionares<br />\
    <img src="styles/legend/GEOLOGIA_4_49.png" /> SDt - Formação Tacaratu<br />'
        });
var format_readeEstudo10km_5 = new ol.format.GeoJSON();
var features_readeEstudo10km_5 = format_readeEstudo10km_5.readFeatures(json_readeEstudo10km_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeEstudo10km_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeEstudo10km_5.addFeatures(features_readeEstudo10km_5);
var lyr_readeEstudo10km_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeEstudo10km_5, 
                style: style_readeEstudo10km_5,
                interactive: false,
                title: '<img src="styles/legend/readeEstudo10km_5.png" /> Área de Estudo (10 km)'
            });
var format_Municpios_6 = new ol.format.GeoJSON();
var features_Municpios_6 = format_Municpios_6.readFeatures(json_Municpios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municpios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municpios_6.addFeatures(features_Municpios_6);
var lyr_Municpios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municpios_6, 
                style: style_Municpios_6,
                interactive: true,
                title: '<img src="styles/legend/Municpios_6.png" /> Municípios'
            });
var format_RodoviasEstaduais_7 = new ol.format.GeoJSON();
var features_RodoviasEstaduais_7 = format_RodoviasEstaduais_7.readFeatures(json_RodoviasEstaduais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasEstaduais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasEstaduais_7.addFeatures(features_RodoviasEstaduais_7);
var lyr_RodoviasEstaduais_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviasEstaduais_7, 
                style: style_RodoviasEstaduais_7,
                interactive: true,
                title: '<img src="styles/legend/RodoviasEstaduais_7.png" /> Rodovias Estaduais'
            });
var format_RodoviasFederais_8 = new ol.format.GeoJSON();
var features_RodoviasFederais_8 = format_RodoviasFederais_8.readFeatures(json_RodoviasFederais_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviasFederais_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviasFederais_8.addFeatures(features_RodoviasFederais_8);
var lyr_RodoviasFederais_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RodoviasFederais_8, 
                style: style_RodoviasFederais_8,
                interactive: true,
                title: '<img src="styles/legend/RodoviasFederais_8.png" /> Rodovias Federais '
            });
var format_EixodoLote11_9 = new ol.format.GeoJSON();
var features_EixodoLote11_9 = format_EixodoLote11_9.readFeatures(json_EixodoLote11_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EixodoLote11_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EixodoLote11_9.addFeatures(features_EixodoLote11_9);
var lyr_EixodoLote11_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EixodoLote11_9, 
                style: style_EixodoLote11_9,
                interactive: false,
                title: '<img src="styles/legend/EixodoLote11_9.png" /> Eixo do Lote 11'
            });
var format_Implantaes_10 = new ol.format.GeoJSON();
var features_Implantaes_10 = format_Implantaes_10.readFeatures(json_Implantaes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Implantaes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Implantaes_10.addFeatures(features_Implantaes_10);
var lyr_Implantaes_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Implantaes_10, 
                style: style_Implantaes_10,
                interactive: true,
    title: 'Implantações<br />\
    <img src="styles/legend/Implantaes_10_0.png" /> Contorno Araripina - Alternativa 01<br />\
    <img src="styles/legend/Implantaes_10_1.png" /> Contorno Araripina - Alternativa 02<br />\
    <img src="styles/legend/Implantaes_10_2.png" /> Contorno Belém de São Francisco<br />\
    <img src="styles/legend/Implantaes_10_3.png" /> Contorno de Cabrobó - Trecho 01<br />\
    <img src="styles/legend/Implantaes_10_4.png" /> Contorno de Cabrobó - Trecho 02<br />\
    <img src="styles/legend/Implantaes_10_5.png" /> Contorno de Petrolândia - Alternativa 01<br />\
    <img src="styles/legend/Implantaes_10_6.png" /> Contorno de Petrolândia - Alternativa 02<br />\
    <img src="styles/legend/Implantaes_10_7.png" /> SM-01 - Terra Nova<br />'
        });
var format_FONTEDEMATERIAIS_11 = new ol.format.GeoJSON();
var features_FONTEDEMATERIAIS_11 = format_FONTEDEMATERIAIS_11.readFeatures(json_FONTEDEMATERIAIS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FONTEDEMATERIAIS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FONTEDEMATERIAIS_11.addFeatures(features_FONTEDEMATERIAIS_11);
var lyr_FONTEDEMATERIAIS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FONTEDEMATERIAIS_11, 
                style: style_FONTEDEMATERIAIS_11,
                interactive: true,
    title: 'FONTE DE MATERIAIS<br />\
    <img src="styles/legend/FONTEDEMATERIAIS_11_0.png" /> Brita<br />\
    <img src="styles/legend/FONTEDEMATERIAIS_11_1.png" /> Cascalho<br />'
        });
var format_Estacas_12 = new ol.format.GeoJSON();
var features_Estacas_12 = format_Estacas_12.readFeatures(json_Estacas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacas_12.addFeatures(features_Estacas_12);cluster_Estacas_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Estacas_12
});
var lyr_Estacas_12 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Estacas_12, 
                style: style_Estacas_12,
                interactive: true,
                title: '<img src="styles/legend/Estacas_12.png" /> Estacas'
            });

lyr_BaseMap_0.setVisible(true);lyr_HIDROGEOLOGIA_1.setVisible(false);lyr_GEOMORFOLOGIA_2.setVisible(false);lyr_PEDOLOGIA_3.setVisible(false);lyr_GEOLOGIA_4.setVisible(true);lyr_readeEstudo10km_5.setVisible(true);lyr_Municpios_6.setVisible(true);lyr_RodoviasEstaduais_7.setVisible(true);lyr_RodoviasFederais_8.setVisible(true);lyr_EixodoLote11_9.setVisible(true);lyr_Implantaes_10.setVisible(true);lyr_FONTEDEMATERIAIS_11.setVisible(false);lyr_Estacas_12.setVisible(false);
var layersList = [lyr_BaseMap_0,lyr_HIDROGEOLOGIA_1,lyr_GEOMORFOLOGIA_2,lyr_PEDOLOGIA_3,lyr_GEOLOGIA_4,lyr_readeEstudo10km_5,lyr_Municpios_6,lyr_RodoviasEstaduais_7,lyr_RodoviasFederais_8,lyr_EixodoLote11_9,lyr_Implantaes_10,lyr_FONTEDEMATERIAIS_11,lyr_Estacas_12];
lyr_HIDROGEOLOGIA_1.set('fieldAliases', {'fid': 'fid', 'L_UE_AFL': 'L_UE_AFL', 'E_UE_AFL': 'E_UE_AFL', 'E_UE_SUB': 'E_UE_SUB', 'U_HL_AFL': 'U_HL_AFL', 'U_HL_SUB': 'U_HL_SUB', 'E_INT': 'E_INT', 'GRAU_FRAT': 'GRAU_FRAT', 'Q_HE_AFL': 'Q_HE_AFL', 'Q_HE_SUB': 'Q_HE_SUB', 'Qs_HE_AFL': 'Qs_HE_AFL', 'Qs_HE_SUB': 'Qs_HE_SUB', 'T_HE_AFL': 'T_HE_AFL', 'T_HE_SUB': 'T_HE_SUB', 'K_HE_AFL': 'K_HE_AFL', 'PROD_HE_AF': 'PROD_HE_AF', 'PROD_HE_SU': 'PROD_HE_SU', 'CLS_STYLE': 'CLS_STYLE', 'LEGENDA': 'LEGENDA', });
lyr_GEOMORFOLOGIA_2.set('fieldAliases', {'fid': 'fid', 'UNIGEO ': 'UNIGEO ', 'DEF_TEC ': 'DEF_TEC ', 'CIS_FRAT ': 'CIS_FRAT ', 'ASPECTO ': 'ASPECTO ', 'INTEMP': 'INTEMP', 'GR_COER ': 'GR_COER ', 'PORO_PRI ': 'PORO_PRI ', 'LITO_HIDRO': 'LITO_HIDRO', 'CÓD. REL': 'CÓD. REL', 'RELEVO': 'RELEVO', 'DECLIVIDAD': 'DECLIVIDAD', 'AMPL': 'AMPL', 'INTEMP_Q': 'INTEMP_Q', });
lyr_PEDOLOGIA_3.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'CÓDIGO': 'CÓDIGO', 'LEGENDA': 'LEGENDA', 'ORDEM': 'ORDEM', 'SUBORDEM': 'SUBORDEM', 'GRANDE_GRU': 'GRANDE_GRU', 'TEXTURA': 'TEXTURA', 'HORIZONTE': 'HORIZONTE', 'EROSÃO': 'EROSÃO', 'PEDREGOSID': 'PEDREGOSID', 'ROCHOSIDAD': 'ROCHOSIDAD', 'RELEVO': 'RELEVO', });
lyr_GEOLOGIA_4.set('fieldAliases', {'fid': 'fid', 'SIGLA_UNID': 'SIGLA_UNID', 'NOME_UNIDA': 'NOME_UNIDA', 'HIERARQUIA': 'HIERARQUIA', 'TEXTURA_IG': 'TEXTURA_IG', 'CLASSE_ROC': 'CLASSE_ROC', 'RÓTULO': 'RÓTULO', });
lyr_readeEstudo10km_5.set('fieldAliases', {'fid': 'fid', 'GM_TYPE': 'GM_TYPE', 'DGN_LEVEL': 'DGN_LEVEL', 'ELEVATION': 'ELEVATION', 'LENGTH': 'LENGTH', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', 'Segmento': 'Segmento', 'BR': 'BR', });
lyr_Municpios_6.set('fieldAliases', {'fid': 'fid', 'CÓDIGO': 'CÓDIGO', 'MUNICÍPIO': 'MUNICÍPIO', 'SIGLA': 'SIGLA', 'ÁREA km²': 'ÁREA km²', });
lyr_RodoviasEstaduais_7.set('fieldAliases', {'fid': 'fid', 'ID CIDE': 'ID CIDE', 'CÓDIGO': 'CÓDIGO', 'UF': 'UF', 'RODOVIA': 'RODOVIA', 'INÍCIO': 'INÍCIO', 'FIM': 'FIM', 'KM INÍCIO': 'KM INÍCIO', 'KM FINAL': 'KM FINAL', 'EXTENSÃO': 'EXTENSÃO', 'SITUAÇÃO': 'SITUAÇÃO', 'DESCRI': 'DESCRI', 'IDENT': 'IDENT', });
lyr_RodoviasFederais_8.set('fieldAliases', {'fid': 'fid', 'ID TRECHO': 'ID TRECHO', 'BR': 'BR', 'UF': 'UF', 'TIPO': 'TIPO', 'CÓDIGO': 'CÓDIGO', 'INÍCIO': 'INÍCIO', 'FIM': 'FIM', 'KM INÍCIO': 'KM INÍCIO', 'KM FINAL': 'KM FINAL', 'EXTENSÃO': 'EXTENSÃO', 'UL': 'UL', 'JURISD': 'JURISD', 'SUPERF': 'SUPERF', 'VERSÃO SN': 'VERSÃO SN', });
lyr_EixodoLote11_9.set('fieldAliases', {'fid': 'fid', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'DGN_LEVEL': 'DGN_LEVEL', 'ELEVATION': 'ELEVATION', 'SEG': 'SEG', 'LENGTH': 'LENGTH', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', 'Segmento': 'Segmento', 'Trecho': 'Trecho', 'BR': 'BR', 'path': 'path', });
lyr_Implantaes_10.set('fieldAliases', {'NOME': 'NOME', });
lyr_FONTEDEMATERIAIS_11.set('fieldAliases', {'TITULAR': 'TITULAR', 'MATERIAL': 'MATERIAL', });
lyr_Estacas_12.set('fieldAliases', {'ESTACA': 'ESTACA', 'TRECHO': 'TRECHO', });
lyr_HIDROGEOLOGIA_1.set('fieldImages', {'fid': '', 'L_UE_AFL': '', 'E_UE_AFL': '', 'E_UE_SUB': '', 'U_HL_AFL': '', 'U_HL_SUB': '', 'E_INT': '', 'GRAU_FRAT': '', 'Q_HE_AFL': '', 'Q_HE_SUB': '', 'Qs_HE_AFL': '', 'Qs_HE_SUB': '', 'T_HE_AFL': '', 'T_HE_SUB': '', 'K_HE_AFL': '', 'PROD_HE_AF': '', 'PROD_HE_SU': '', 'CLS_STYLE': '', 'LEGENDA': '', });
lyr_GEOMORFOLOGIA_2.set('fieldImages', {'fid': '', 'UNIGEO ': '', 'DEF_TEC ': '', 'CIS_FRAT ': '', 'ASPECTO ': '', 'INTEMP': '', 'GR_COER ': '', 'PORO_PRI ': '', 'LITO_HIDRO': '', 'CÓD. REL': '', 'RELEVO': '', 'DECLIVIDAD': '', 'AMPL': '', 'INTEMP_Q': '', });
lyr_PEDOLOGIA_3.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'CÓDIGO': 'TextEdit', 'LEGENDA': 'TextEdit', 'ORDEM': 'TextEdit', 'SUBORDEM': 'TextEdit', 'GRANDE_GRU': 'TextEdit', 'TEXTURA': 'TextEdit', 'HORIZONTE': 'TextEdit', 'EROSÃO': 'TextEdit', 'PEDREGOSID': 'TextEdit', 'ROCHOSIDAD': 'TextEdit', 'RELEVO': 'TextEdit', });
lyr_GEOLOGIA_4.set('fieldImages', {'fid': 'TextEdit', 'SIGLA_UNID': 'TextEdit', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'TextEdit', 'TEXTURA_IG': 'TextEdit', 'CLASSE_ROC': 'TextEdit', 'RÓTULO': 'TextEdit', });
lyr_readeEstudo10km_5.set('fieldImages', {'fid': '', 'GM_TYPE': '', 'DGN_LEVEL': '', 'ELEVATION': '', 'LENGTH': '', 'BEARING': '', 'SINUOSITY': '', 'Segmento': '', 'BR': '', });
lyr_Municpios_6.set('fieldImages', {'fid': '', 'CÓDIGO': '', 'MUNICÍPIO': '', 'SIGLA': '', 'ÁREA km²': '', });
lyr_RodoviasEstaduais_7.set('fieldImages', {'fid': '', 'ID CIDE': '', 'CÓDIGO': '', 'UF': '', 'RODOVIA': '', 'INÍCIO': '', 'FIM': '', 'KM INÍCIO': '', 'KM FINAL': '', 'EXTENSÃO': '', 'SITUAÇÃO': '', 'DESCRI': '', 'IDENT': '', });
lyr_RodoviasFederais_8.set('fieldImages', {'fid': '', 'ID TRECHO': '', 'BR': '', 'UF': '', 'TIPO': '', 'CÓDIGO': '', 'INÍCIO': '', 'FIM': '', 'KM INÍCIO': '', 'KM FINAL': '', 'EXTENSÃO': '', 'UL': '', 'JURISD': '', 'SUPERF': '', 'VERSÃO SN': '', });
lyr_EixodoLote11_9.set('fieldImages', {'fid': '', 'LAYER': '', 'GM_TYPE': '', 'DGN_LEVEL': '', 'ELEVATION': '', 'SEG': '', 'LENGTH': '', 'BEARING': '', 'SINUOSITY': '', 'Segmento': '', 'Trecho': '', 'BR': '', 'path': '', });
lyr_Implantaes_10.set('fieldImages', {'NOME': 'TextEdit', });
lyr_FONTEDEMATERIAIS_11.set('fieldImages', {'TITULAR': 'TextEdit', 'MATERIAL': 'TextEdit', });
lyr_Estacas_12.set('fieldImages', {'ESTACA': 'TextEdit', 'TRECHO': 'TextEdit', });
lyr_HIDROGEOLOGIA_1.set('fieldLabels', {'fid': 'inline label', 'L_UE_AFL': 'inline label', 'E_UE_AFL': 'inline label', 'E_UE_SUB': 'inline label', 'U_HL_AFL': 'inline label', 'U_HL_SUB': 'inline label', 'E_INT': 'inline label', 'GRAU_FRAT': 'inline label', 'Q_HE_AFL': 'inline label', 'Q_HE_SUB': 'inline label', 'Qs_HE_AFL': 'inline label', 'Qs_HE_SUB': 'inline label', 'T_HE_AFL': 'inline label', 'T_HE_SUB': 'inline label', 'K_HE_AFL': 'inline label', 'PROD_HE_AF': 'inline label', 'PROD_HE_SU': 'inline label', 'CLS_STYLE': 'inline label', 'LEGENDA': 'inline label', });
lyr_GEOMORFOLOGIA_2.set('fieldLabels', {'fid': 'inline label', 'UNIGEO ': 'inline label', 'DEF_TEC ': 'inline label', 'CIS_FRAT ': 'inline label', 'ASPECTO ': 'inline label', 'INTEMP': 'inline label', 'GR_COER ': 'inline label', 'PORO_PRI ': 'inline label', 'LITO_HIDRO': 'inline label', 'CÓD. REL': 'inline label', 'RELEVO': 'inline label', 'DECLIVIDAD': 'inline label', 'AMPL': 'inline label', 'INTEMP_Q': 'inline label', });
lyr_PEDOLOGIA_3.set('fieldLabels', {'fid': 'inline label', 'NOME': 'inline label', 'CÓDIGO': 'inline label', 'LEGENDA': 'inline label', 'ORDEM': 'inline label', 'SUBORDEM': 'inline label', 'GRANDE_GRU': 'inline label', 'TEXTURA': 'inline label', 'HORIZONTE': 'inline label', 'EROSÃO': 'inline label', 'PEDREGOSID': 'inline label', 'ROCHOSIDAD': 'inline label', 'RELEVO': 'inline label', });
lyr_GEOLOGIA_4.set('fieldLabels', {'fid': 'inline label', 'SIGLA_UNID': 'inline label', 'NOME_UNIDA': 'inline label', 'HIERARQUIA': 'inline label', 'TEXTURA_IG': 'inline label', 'CLASSE_ROC': 'inline label', 'RÓTULO': 'inline label', });
lyr_readeEstudo10km_5.set('fieldLabels', {'fid': 'no label', 'GM_TYPE': 'no label', 'DGN_LEVEL': 'no label', 'ELEVATION': 'no label', 'LENGTH': 'no label', 'BEARING': 'no label', 'SINUOSITY': 'no label', 'Segmento': 'no label', 'BR': 'no label', });
lyr_Municpios_6.set('fieldLabels', {'fid': 'inline label', 'CÓDIGO': 'inline label', 'MUNICÍPIO': 'inline label', 'SIGLA': 'inline label', 'ÁREA km²': 'inline label', });
lyr_RodoviasEstaduais_7.set('fieldLabels', {'fid': 'inline label', 'ID CIDE': 'inline label', 'CÓDIGO': 'inline label', 'UF': 'inline label', 'RODOVIA': 'inline label', 'INÍCIO': 'inline label', 'FIM': 'inline label', 'KM INÍCIO': 'inline label', 'KM FINAL': 'inline label', 'EXTENSÃO': 'inline label', 'SITUAÇÃO': 'inline label', 'DESCRI': 'inline label', 'IDENT': 'inline label', });
lyr_RodoviasFederais_8.set('fieldLabels', {'fid': 'inline label', 'ID TRECHO': 'inline label', 'BR': 'inline label', 'UF': 'inline label', 'TIPO': 'inline label', 'CÓDIGO': 'inline label', 'INÍCIO': 'inline label', 'FIM': 'inline label', 'KM INÍCIO': 'inline label', 'KM FINAL': 'inline label', 'EXTENSÃO': 'inline label', 'UL': 'inline label', 'JURISD': 'inline label', 'SUPERF': 'inline label', 'VERSÃO SN': 'inline label', });
lyr_EixodoLote11_9.set('fieldLabels', {'fid': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'DGN_LEVEL': 'no label', 'ELEVATION': 'no label', 'SEG': 'no label', 'LENGTH': 'no label', 'BEARING': 'no label', 'SINUOSITY': 'no label', 'Segmento': 'no label', 'Trecho': 'no label', 'BR': 'no label', 'path': 'no label', });
lyr_Implantaes_10.set('fieldLabels', {'NOME': 'inline label', });
lyr_FONTEDEMATERIAIS_11.set('fieldLabels', {'TITULAR': 'inline label', 'MATERIAL': 'inline label', });
lyr_Estacas_12.set('fieldLabels', {'ESTACA': 'inline label', 'TRECHO': 'inline label', });
lyr_Estacas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});