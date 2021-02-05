import './Repo.scss';

const Repo = () => {
  return (
    <div className="repo">
      <div className="repo__avatar">
        <img
          className="repo__avatar"
          src="https://avatars.githubusercontent.com/u/1241807?v=4"
          alt="avatar"
        />
      </div>
      <div className="repo__info">
        <h3 className="repo__name">Repo Name</h3>
        <p className="repo__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis ut eum quia,
          officiis
        </p>
        <div className="repo__footer">
          <span className="repo__footer__box-info">
            Stars: 11
          </span>
          <span className="repo__footer__box-info">
            Issues: 11
          </span>
          <span>
            Submitted 10 days ago by someone
          </span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
