
import { Chart } from "react-google-charts"



const GameTable = ({videogames}) => {

    function generateDataFormChart(){

        console.log(videogames);

        let filteredGame = videogames.filter(game => game.year > 2013)

        console.log('Filtered Games' ,filteredGame)

        let platforms = filteredGame.map(game => game.platform)

        console.log('Platforms' ,platforms)

        let distinctPlatform = [...new Set(platforms)]

        console.log('distinct Platforms' ,distinctPlatform)

        let platformArrays = distinctPlatform.map(platform => {
            
            let allGamesForPlatform = filteredGame.filter(game => game.platform == platform);

            let sum = 0;
            allGamesForPlatform.forEach((game)=>{
                sum = sum + game.globalsales;
            })

            return [platform, sum, 'silver']
        });
        console.log('Platform Arrays', platformArrays)

        const data = [
            ["Platform", "Global Sales", { role: "style" }],
            ...platformArrays

      
          ];
          return data;
        
    }

    return ( 
        <div>
            <h1>
                Platform By Global Sales in Millions
            </h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />   
        </div>
     );
}
 
export default GameTable;


