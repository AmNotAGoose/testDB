import { useState } from 'react'
import styles from './App.module.css'

import Button from '../../components/Button/Button'
import ContentContainer from '../../components/ContentContainer/ContentContainer'

function App() {
  return (
    <body>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img className="logo react" alt="testDB" />
            </a>
          </li>
          <li><a href="/search">Search</a></li>
          <li><a href="/register">Sign up / log in</a></li>
        </ul>
      </nav>
 
      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <ContentContainer title={"Welcome to testDB"}>
            testDB is an online collaborative platform where students can upload past test questions and access wiki-style articles for individual school courses. It serves as both an archive of test materials and a knowledge base for your school specifically.
          </ContentContainer>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.blogContainer}>
            <ContentContainer title={"News"}>
              News!!!!!!!!!!!
            </ContentContainer>
          </div>
          <div className={styles.toolsContainer}>
            <ContentContainer title={"Navigation"}>
              Navigation!!!!!!!!!!!!!!!
              <Button>Button!!!!!!!!!!!!</Button>
            </ContentContainer>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
