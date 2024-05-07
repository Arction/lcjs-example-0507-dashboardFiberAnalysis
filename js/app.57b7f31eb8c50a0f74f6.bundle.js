(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(89),s=a(863),{lightningChart:r,AxisTickStrategies:n,emptyLine:o,emptyFill:l,AreaSeriesTypes:c,ColorRGBA:m,regularColorSteps:d,PalettedFill:p,LUT:y,emptyTick:u,UIElementBuilders:S,UIOrigins:g,Themes:h}=i,{createProgressiveTraceGenerator:F}=s,T={opticalFibreDistanceStep:10,opticalFibreDistanceStart:0,opticalFibreDistanceEnd:3200,timeStep:1e3,timeStart:new Date("2021-06-17T08:54:04").getTime(),timeEnd:new Date("2021-06-17T08:54:38").getTime()},w=T.timeStart,D=new Promise((async e=>{const t=Math.ceil((T.timeEnd-T.timeStart)/T.timeStep),a=Math.ceil((T.opticalFibreDistanceEnd-T.opticalFibreDistanceStart)/T.opticalFibreDistanceStep),i=await Promise.all(new Array(t).fill(0).map(((e,t)=>F().setNumberOfPoints(a).generate().toPromise().then((e=>e.map((e=>Math.abs(100*e.y)))))))),s=new Array(a).fill(0).map(((e,t)=>({x:T.opticalFibreDistanceStart+t*T.opticalFibreDistanceStep,y:i.reduce(((e,a)=>e+a[t]),0)})));e({traceDataArray:i,areaData:s})})),b=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Distance Intensity Chart");b.yAxis.dispose();const x=b.addAxisY({iStack:1}).setTitle("Intensity Sum").setLength({pixels:200}).setMargins(10,0),k=b.axisX.setTitle("Optical Fiber Distance (m)"),U={hour:"numeric",minute:"numeric",second:"numeric"},A=b.addAxisY({iStack:0}).setTitle("Time").setTickStrategy(n.DateTime,(e=>e.setDateOrigin(new Date(w)).setGreatTickStyle(u).setMinorTickStyle(u).setFormattingDay({},U,{}).setFormattingDecade(U,{}).setFormattingHour({},U,{}).setFormattingMilliSecond({},U).setFormattingMinute({},U,{}).setFormattingMonth({},U,{}).setFormattingSecond({},U).setFormattingWeek({},U,{}).setFormattingYear(U,{}))),R=b.getTheme(),I=new y({interpolate:!1,steps:[{value:0,color:m(0,0,0,0)},...d(200,600,R.examples.intensityColorPalette)]});D.then((e=>{const{traceDataArray:t,areaData:a}=e,i=(b.addAreaSeries({type:c.Positive,yAxis:x}).add(a).setCursorResultTableFormatter(((e,t,a,i)=>e.addRow("Intensity sum:","",i.toFixed(1)).addRow("Optical fiber distance:","",k.formatValue(a)+" m"))),{columns:t[0].length,rows:t.length,start:{x:T.opticalFibreDistanceStart,y:T.timeStart-w},step:{x:T.opticalFibreDistanceStep,y:T.timeStep},dataOrder:"rows",yAxis:A});b.addHeatmapGridSeries(i).setIntensityInterpolation("disabled").invalidateIntensityValues(t).setFillStyle(new p({lookUpProperty:"value",lut:I})).setWireframeStyle(o).setCursorResultTableFormatter(((e,t,a)=>e.addRow("Intensity:","",a.intensity.toFixed(1)).addRow("Optical fiber distance:","",k.formatValue(a.x)+" m").addRow("Time:","",A.formatValue(a.y)))),b.setPadding({bottom:64}),b.addUIElement(S.LUTRange).setLUT(I).setLUTLength(500).setLookUpUnit("Intensity").setPosition({x:50,y:0}).setOrigin(g.CenterBottom).setAutoDispose({type:"max-width",maxWidth:.8}).setBackground((e=>e.setFillStyle(l).setStrokeStyle(o)))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);