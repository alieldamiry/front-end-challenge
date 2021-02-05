import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Repo from './components/Repo/Repo';
import getDecrementedDate from './utils/getDecrementedDate';
import Spinner from './components/Repo/Spinner/Spinner';

// decrement days from today to get the date before 30 days from today
const dcrementedDate = getDecrementedDate(30);
function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories?q=created:>${dcrementedDate}&sort=stars&order=desc&page=${page}`)
      .then((res) => {
        setRepos([...repos, ...res.data.items]);
        setHasMore(!res.data.incomplete_results);
      });
  }, [page]);

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={repos.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<Spinner />}
      >
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
      </InfiniteScroll>
    </div>
  );
}

export default App;
