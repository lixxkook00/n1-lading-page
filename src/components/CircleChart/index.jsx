import React from 'react'

import {CanvasJSChart} from 'canvasjs-react-charts'


export default function CircleChart() {

    const options = {
        animationEnabled: true,
        backgroundColor: "transparent",
        data: [{
            type: "doughnut",
            showInLegend: false,
            colorSet: "greenShades",
            indexLabelFontColor:"#fff",
            indexLabelFontWeight: "bold",
            indexLabelFontSize: 16,
            yValueFormatString: "#'%'",
            dataPoints: [
                { name:"Team Dev", y: 15 ,color: "#07BAF3"},
                { name:"Advisor", y: 5 ,color: "#6FD6C2"},
                { name:"Marketing, bounty, community, airdrop",y: 5 ,color: "#FFC002"},
                { name:"Liquidity",y: 10,color: "#F29609" },
                { name:"Hybridization",y: 10 ,color: "#FFEF85"},
                { name:"Reward, staking, LP",y: 35 ,color: "#A891F9"},
                { name:"Network",y: 10 ,color: "#C55ACA"},
                { name:"Reserved (burn)",y: 10 ,color: "#FF536C"}
            ]
        }]
    }
  return (
    <div className="circhart">
        <CanvasJSChart options = {options}
        />
    </div>
  )
}
