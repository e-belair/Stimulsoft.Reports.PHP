/*
Stimulsoft.Reports.JS
Version: 2023.1.2
Build date: 2022.12.15
License: https://www.stimulsoft.com/en/licensing/reports
*/
!function(v){var f;"object"==typeof exports&&"undefined"!=typeof module?module.exports=(f=require("./stimulsoft.viewer.pack"),Object.assign(f,v(f.Stimulsoft))):"function"==typeof define&&define.amd?define(["./stimulsoft.viewer.pack"],f=>Object.assign(f,v(f.Stimulsoft))):Object.assign(window,v(window.Stimulsoft))}(function(f){var v={Stimulsoft:f||{}};if(f&&(f.__engineVersion&&"2023.1.2"!==f.__engineVersion?console.warn("Scripts versions mismatch: engine ver. = %s; designer ver. = 2023.1.2",f.__engineVersion):"2023.1.2"!==f.__reportsVersion&&console.warn("Scripts versions mismatch: reports ver. = %s; designer ver. = 2023.1.2",f.__reportsVersion)),
,v.Stimulsoft.decodePackedData&&v.Stimulsoft.Viewer)for(const t of["designerScript","blocklyScript"])v.Stimulsoft[t]&&Object.assign(v,v.Stimulsoft.decodePackedData(v.Stimulsoft[t])(v.Stimulsoft)),delete v.Stimulsoft[t];return v});