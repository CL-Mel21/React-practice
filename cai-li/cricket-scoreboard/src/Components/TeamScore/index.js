import React, { Component } from "react";

class TeamScore extends Component {
  state = { runs: 0, wickets: 0 };

  increaseRun = (nums) => {
    this.setState({ runs: this.state.runs + nums });
  };
  increaseWicket = () => {
    this.setState({ wickets: this.state.wickets + 1 });
  };

  render() {
    return (
      <div className="teamscore">
        <h1>{this.props.teamname}</h1>
        <h2>Runs: {this.state.runs}</h2>
        <h2>Wickets: {this.state.wickets}</h2>
        {this.state.wickets < 10 && (
          <button onClick={() => this.increaseRun(1)}>1 Run</button>
        )}
        {this.state.wickets < 10 && (
          <button onClick={() => this.increaseRun(4)}>4 Run</button>
        )}
        {this.state.wickets < 10 && (
          <button onClick={() => this.increaseRun(6)}>6 Run</button>
        )}
        {this.state.wickets < 10 && (
          <button onClick={this.increaseWicket}>Wicket</button>
        )}
        {this.state.wickets === 10 && <h1>All out</h1>}
      </div>
    );
  }
}

export default TeamScore;
