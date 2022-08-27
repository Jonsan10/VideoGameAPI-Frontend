import React, { useState } from 'react';
import { Chart } from "react-google-charts"


export const data = [
    ["Platform", "Sales", { role: "style" }],
    ["PS3", 8.94, "silver"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "silver"],
    ["Platinum", 21.45, "silver"], // CSS-style declaration
  ];

const GameTable = ({videogames}) => {

    function generateDataFormChart

    return ( 
        <div>
            <h1>
                Platform By Global Sales in Millions
                <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            </h1>
        </div>
     );
}
 
export default GameTable;