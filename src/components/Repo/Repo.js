import './Repo.scss';
import getDiffDays from '../../utils/getDiffDays';

const Repo = ({ name, description, repoUrl, stars, issues, username, avatar, created }) => {
  // get difference in days between today date and created date
  const days = getDiffDays(created);

  return (
    <div className="repo">
      <div className="repo__avatar">
        <img
          className="repo__avatar"
          src={avatar}
          alt={`${username} avatar`}
        />
      </div>
      <div className="repo__info">
        <a href={repoUrl}>
          <h3 className="repo__name">{name}</h3>
        </a>
        <p className="repo__description">
          {description}
        </p>
        <div className="repo__footer">
          <span className="repo__footer__box-info">
            Stars: {stars}
          </span>
          <span className="repo__footer__box-info">
            Issues: {issues}
          </span>
          <span>
            Submitted {days} days ago by {username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
