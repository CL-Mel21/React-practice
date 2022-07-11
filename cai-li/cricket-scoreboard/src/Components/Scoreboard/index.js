import React, { Component } from "react";
import TeamScore from "../TeamScore";

class Scoreboard extends Component {
  state = { teams: [] };
  newGame = () => {
    let team1 = prompt();
    let team2 = prompt();
    this.setState({
      teams: [...this.state.teams, { team1: team1, team2: team2 }],
    });
  };

  render() {
    return (
      <>
        <button onClick={this.newGame} className='newgame'>New Game</button>
        {this.state.teams.map((team) => {
          return (
            <div className="scoreboard">
              {
                <TeamScore teamname={team.team1} />
              }
              {<TeamScore teamname={team.team2} />}
            </div>
          );
        })}
      </>
    );
  }
}

export default Scoreboard;
