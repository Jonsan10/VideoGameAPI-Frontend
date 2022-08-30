import React from 'react';


const DisplaySearch = (props) => {

    function findGames(name){
        let oneGame = props.game.filter((game) => {
            if (game.name === name)
                return true
        })
        props.setGame(oneGame)
    }

    return ( 
        <div>
            <table className='Table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Platform</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                </tr>
                </thead>
                <tbody>
                    {props.games.filter((game) =>{if(game.year >=2013)return true}).map((element)=>{
                        return(
                           <tr>
                            <td>{game.name}</td>
                            <td>{game.game_rank}</td>
                            <td>{game.platform}</td>
                            <td>{game.year}</td>
                            <td>{game.genre}</td>
                            <td>{game.publisher}</td>
                            <td><button onClick={(e)=> {findGames(element.name)}}></button></td>
                           </tr> 
                        );
                    })
                    }
                </tbody>

            </table>
        </div>
     );
}
 
export default DisplaySearch;