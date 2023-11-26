import React from "react";
import { Helmet } from "react-helmet";
import { teams } from "./Team";
import "./TeamContainer.scss";
import ownerIcon from "../../assets/owner.svg";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.png";

function TeamContainer() {
  return (
    <div className="team-container fadeInFromBottom">
      <Helmet>
        <title>About us</title>
      </Helmet>
      <div className="team-container__title">
        <span className="fern-text">Our</span> team
      </div>
      <div className="team-container__content">
        {teams.map((team, index) => (
          <div className="team-container__team hoverScale" key={index}>
            <div className="team-container__team__title">
              {team.owner !== undefined ? (
                <div className="team-container__team__owner-avatar">
                  <img src={ownerIcon} alt="owner" width={24} id="crown" />
                  <img src={team.avatar} alt={team.name} id="avatar" />
                </div>
              ) : (
                <div className="team-container__team__avatar">
                  <img src={team.avatar} alt={team.name} />
                </div>
              )}
              <div>
                <div className="team-container__team__username">
                  {team.username}
                </div>
                <div className="team-container__team__name">{team.name}</div>
              </div>
            </div>
            <div className="team-container__team_tags">
              {team.tags.map((tag, index) => (
                <span className={`${tag} tag`} key={index}>
                  #{tag.replaceAll("-plus", "+")}
                </span>
              ))}
            </div>
            <div className="team-container__team__social">
              {team.github ? (
                <a href={team.github} target="_blank" rel="noreferrer">
                  <img src={githubLogo} alt="github" width={28} />
                </a>
              ) : null}
              {team.linkedin ? (
                <a href={team.linkedin} target="_blank" rel="noreferrer">
                  <img src={linkedinLogo} alt="linkedin" width={32} />
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamContainer;
