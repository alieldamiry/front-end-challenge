import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Repo from './components/Repo/Repo';
import getDecrementedDate from './utils/getDecrementedDate';

// decrement days from today to get the date before 30 days from today
const dcrementedDate = getDecrementedDate(30);
function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories?q=created:>${dcrementedDate}&sort=stars&order=desc&page=1`)
      .then((res) => {
        setRepos([...res.data.items]);
      });
  }, []);

  return (
    <div className="container">
      {repos.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.full_name}
          description={repo.description}
          repoUrl={repo.html_url}
          created={repo.created_at}
          stars={repo.stargazers_count}
          issues={repo.open_issues_count}
          username={repo.owner.login}
          avatar={repo.owner.avatar_url}
        />
      ))}
    </div>
  );
}

export default App;
