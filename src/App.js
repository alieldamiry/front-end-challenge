import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Repo from './components/Repo/Repo';

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=1')
      .then((res) => {
        setRepos([...res.data.items]);
      });
  }, []);

  console.log(repos);
  return (
    <div className="container">
      <Repo />
    </div>
  );
}

export default App;
