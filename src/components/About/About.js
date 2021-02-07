import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import Contacts from '../Contacts/Contacts';
import { Octokit } from '@octokit/rest';

import styles from './About.module.css';

const octokit = new Octokit();


class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    error: '',
    repoList: [],
    nameUser: [],
		infoUser: [],
    avatarUser: [],
    pageLimit: 4,
    countPages: 0,
    currentPage: 0,
    repoPageList: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'vigolajnen'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });

      this.setState({
        repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
        countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
      });
      
    })
    .catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoading: false
      });
    });

    octokit.users.getByUsername({
      username: 'vigolajnen'
    }).then((res) => {
      this.setState({
        nameUser: res.data.login,
				avatarUser: res.data.avatar_url,
        isLoading: false,
      })
    })
    .catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoading: false
      });
    });
  }

  onChangePagination(event, value) {
    this.setState({
      currentPage: value,
      repoPageList: this.state.repoList.slice((value - 1) * this.state.pageLimit, ((value - 1) * this.state.pageLimit + this.state.pageLimit))
    });
  }

  render() {
    const { isLoading, isError, error, nameUser, avatarUser, repoPageList, countPages } = this.state;


    return (
      <CardContent className={styles.wrapper}>

        <div className={styles.header}>
          <img className={styles.avatar} src={avatarUser} alt={nameUser} />
          <div className={styles.info}>
            <h1 className={styles.title}>{isError ? error : 'Анна'} </h1>
            <Contacts />
          </div>
        </div>
      
        <h2>{isLoading ? <CircularProgress /> : "Репозитории на github.com"}</h2>
        {!isLoading && <ul className={styles.list}>
          {isError ? error : repoPageList.map(repo => (
            <li key={repo.id} className={styles.itemList}>
              <a href={repo.html_url} className={styles.linkList}>
                <h3>{repo.name}</h3>
                <div className={styles.infoRepo}>
                  <span>{repo.description}</span>
                  <span>{repo.language}</span>
                </div>
              </a>
            </li>)
          )}
        </ul>}
        <Pagination
            className={styles.pagination}
            count={countPages}
            variant="outlined"
            color="secondary"
            onChange={this.onChangePagination.bind(this)}
        />
        
      </CardContent>
    )
  }
}

export default About;