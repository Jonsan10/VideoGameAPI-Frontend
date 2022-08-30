import { Chart } from "react-google-charts"

const ActionTable = ({videogames}) => {

    function generateActionGraph(){
        let filteredYears = videogames.filter(game => game.year < 2015)

        let filteredActionGames = filteredYears.filter(game => game.genre.includes('Action'))

        console.log('Filtered games by genre action', filteredActionGames)

        let bestSellingFilteredGame = filteredActionGames.filter(game => game.northamericasales > 10)

        console.log (bestSellingFilteredGame)

        let actiongames = bestSellingFilteredGame.map(game =>{
            return [game.name, game.northamericasales]
        })

    
    const data = [
        ["Year", "NA Sales", { role: "style" }],
        ...actiongames

  
      ];
      return data;

    }

    return(
        <Chart
        chartType="ColumnChart"
        width={"100%"}
        height={"400px"}
        data={generateActionGraph()}
        />
    );
        
}

export default ActionTable;
