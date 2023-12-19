import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import "leaflet-side-by-side";
import "./L.TileLayer.BetterWMS";
import {Modal, Button} from 'react-bootstrap';


var url = "http://localhost:8080/ncWMS2/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

export function mayFlyer(map, site) {
//fly
map.eachLayer(function (lyr) {
    console.log(lyr);
    if (site == "Nanumaga"){
    map.flyTo([-6.287321, 176.320346], 15);
    }
    if (site == "Nanumea"){
    map.flyTo([-5.669055, 176.110211], 14);
    }
});
}

export function addLayerThredds(mapContainer,year){
   var newurl = "http://149.28.173.12/thredds/wms/Oceans/PREP/Majuro/DUD_north/W84_DUD_north_RP_010_SLR_0.nc";
    var layer = L.tileLayer.wms(newurl, {
        layers: "Depth",
        format: 'image/png',
        transparent: true,
        opacity: "1",
        styles: 'default-scalar/div-Spectral-inv',
        colorscalerange: '0, 2',
        abovemaxcolor: "extend",
        belowmincolor: "transparent",
        numcolorbands: 250,
        time: '2022-06-14T00:00:00.000Z',
    }).addTo(mapContainer);
    return layer;
}
export function addLayerThreddslaura(mapContainer,year){
  var newurl = "http://149.28.173.12/thredds/wms/Oceans/PREP/Majuro/Laura/W84_Laura_RP_010_SLR_0.25.nc";
   var layer = L.tileLayer.wms(newurl, {
       layers: "Depth",
       format: 'image/png',
       transparent: true,
       opacity: "1",
       styles: 'default-scalar/div-Spectral-inv',
       colorscalerange: '0, 2',
       abovemaxcolor: "extend",
       belowmincolor: "transparent",
       numcolorbands: 250,
       time: '2022-06-14T00:00:00.000Z',
   }).addTo(mapContainer);
   return layer;
}

export function addLayerThreddsairport(mapContainer,year){
  var newurl = "http://149.28.173.12/thredds/wms/Oceans/PREP/Majuro/Airport/W84_Airport_RP_010_SLR_0.25.nc";
   var layer = L.tileLayer.wms(newurl, {
       layers: "Depth",
       format: 'image/png',
       transparent: true,
       opacity: "1",
       styles: 'default-scalar/div-Spectral-inv',
       colorscalerange: '0, 2',
       abovemaxcolor: "extend",
       belowmincolor: "transparent",
       numcolorbands: 250,
       time: '2022-06-14T00:00:00.000Z',
   }).addTo(mapContainer);
   return layer;
}


export function addLayerThreddssouth(mapContainer,year){
  var newurl = "http://149.28.173.12/thredds/wms/Oceans/PREP/Majuro/DUD_south/W84_DUD_south_RP_010_SLR_0.25.nc";
   var layer = L.tileLayer.wms(newurl, {
       layers: "Depth",
       format: 'image/png',
       transparent: true,
       opacity: "1",
       styles: 'default-scalar/div-Spectral-inv',
       colorscalerange: '0, 2',
       abovemaxcolor: "extend",
       belowmincolor: "transparent",
       numcolorbands: 250,
       time: '2022-06-14T00:00:00.000Z',
   }).addTo(mapContainer);
   return layer;
}




export function addLayer(mapContainer,name,style){
    var wmsLayer_Hs = L.tileLayer.wms("http://202.62.118.201:8080/ncWMS2/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0&DATASET=1", {
        layers: '1/'+name,
        id:'Anuj',
        format: 'image/png',
        transparent: true,
        opacity: 1,
        colorscalerange: '0, 3',
        abovemaxcolor: "extend",
        belowmincolor: "transparent",
        numcolorbands: 50,
        scaleMin: 0,
        styles: style,
        attribution: 'SPC CIFDP',
        id:1000
    
    });
var layer = new L.timeDimension.layer.wms(wmsLayer_Hs, {
      updateTimeDimension: true,
      name: "Wave Height",
      units: "m",
    }).addTo(mapContainer);
    return layer;
}

export function directions(){
    const Nanumangaarr = [
      {"FIJI":
      [
        {id:"Dm", name:"Mean Wave Direction", checked:false},
        {id:"Dp", name:"Peak Wave Direction", checked:false}
      ]}
    ];
    return Nanumangaarr;
  }