(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,i)=>{const a=i(377),s=i(613),{lightningChart:r,AxisTickStrategies:n,emptyLine:o,emptyFill:l,AreaSeriesTypes:c,ColorRGBA:m,regularColorSteps:d,PalettedFill:p,LUT:y,emptyTick:S,UIElementBuilders:g,UIOrigins:u,Themes:h}=a,{createProgressiveTraceGenerator:F}=s,D={opticalFibreDistanceStep:10,opticalFibreDistanceStart:0,opticalFibreDistanceEnd:3200,timeStep:1e3,timeStart:new Date("2021-06-17T08:54:04").getTime(),timeEnd:new Date("2021-06-17T08:54:38").getTime()},T=D.timeStart,b=new Promise((async e=>{const t=Math.ceil((D.timeEnd-D.timeStart)/D.timeStep),i=Math.ceil((D.opticalFibreDistanceEnd-D.opticalFibreDistanceStart)/D.opticalFibreDistanceStep),a=await Promise.all(new Array(t).fill(0).map(((e,t)=>F().setNumberOfPoints(i).generate().toPromise().then((e=>e.map((e=>Math.abs(100*e.y)))))))),s=new Array(i).fill(0).map(((e,t)=>({x:D.opticalFibreDistanceStart+t*D.opticalFibreDistanceStep,y:a.reduce(((e,i)=>e+i[t]),0)})));e({traceDataArray:a,areaData:s})})),w=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Distance Intensity Chart");w.yAxis.dispose();const x=w.addAxisY({iStack:1}).setTitle("Intensity Sum").setLength({pixels:200}).setMargins(10,0),k=(w.axisX.setTitle("Optical Fiber Distance (m)"),{hour:"numeric",minute:"numeric",second:"numeric"}),U=w.addAxisY({iStack:0}).setTitle("Time").setTickStrategy(n.DateTime,(e=>e.setDateOrigin(new Date(T)).setGreatTickStyle(S).setMinorTickStyle(S).setFormattingDay({},k,{}).setFormattingDecade(k,{}).setFormattingHour({},k,{}).setFormattingMilliSecond({},k).setFormattingMinute({},k,{}).setFormattingMonth({},k,{}).setFormattingSecond({},k).setFormattingWeek({},k,{}).setFormattingYear(k,{}))),A=w.getTheme(),f=new y({interpolate:!1,steps:[{value:0,color:m(0,0,0,0)},...d(200,600,A.examples.intensityColorPalette)]});b.then((e=>{const{traceDataArray:t,areaData:i}=e;w.setCursorFormatting(((e,t,i)=>{const s=i.find((e=>e.series===a)),n=i.find((e=>e.series===r));if(s&&n)return[["Optical fiber distance","",`${Math.round(s.x)} m`],[s.series,"",s.axisY.formatValue(s.y)],[n.series,""],["",n.axisY.formatValue(n.y)],["Intensity","",n.intensity.toFixed(1)]]}));const a=w.addAreaSeries({type:c.Positive,yAxis:x}).add(i),s={columns:t[0].length,rows:t.length,dataOrder:"rows",yAxis:U},r=w.addHeatmapGridSeries(s).setStart({x:D.opticalFibreDistanceStart,y:D.timeStart-T}).setStep({x:D.opticalFibreDistanceStep,y:D.timeStep}).setIntensityInterpolation("disabled").invalidateIntensityValues(t).setFillStyle(new p({lookUpProperty:"value",lut:f})).setWireframeStyle(o);w.setPadding({bottom:64}),w.addUIElement(g.LUTRange).setLUT(f).setLUTLength(500).setLookUpUnit("Intensity").setPosition({x:50,y:0}).setOrigin(u.CenterBottom).setAutoDispose({type:"max-width",maxWidth:.8}).setBackground((e=>e.setFillStyle(l).setStrokeStyle(o)))}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);