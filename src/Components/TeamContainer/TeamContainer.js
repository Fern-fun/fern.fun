import React from "react";

import { teams } from "./Team";

function TeamContainer() {
  return (
    <div className="team-container">
      {teams.map((team, index) => {
        return (
          <div className="team-container__team" key={index}>
            <div className="team-container__team__avatar">
              <img src={team.avatar} alt={team.name} />
            </div>
            <div className="team-container__team__name">{team.name}</div>
            <div className="team-container__team__username">
              {team.username}
            </div>

            <div className="team-container__team__email">{team.email}</div>

            <div className="team-container__team__social"></div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamContainer;
