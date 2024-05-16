import React from 'react';
import 'normalize.css';
import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import githubLogo from './images/socialmedia-github.svg';
import instagramLogo from './images/socialmedia-instagram.svg';
import youtubeLogo from './images/socialmedia-youtube.svg';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={
            <main id="main-content" lang="en">
              <div className="main-width-wrapper">
                <section className="text-hello nav-aligned-width-wrapper">
                  <p className="text-fancy text-hello">Welcome</p>
                  <p className="text-hello">to my portfolio.</p>
                </section>
                <section className="social-media-section nav-aligned-width-wrapper noselect">
                  <h2 className="compatibility-hidden">Social Media</h2>
                  <p>
                    <a className="social-media-link" href="https://github.com/Vince14Genius">
                      <img alt="GitHub" src={githubLogo} />
                    </a>
                    
                    <a className="social-media-link" href="https://www.instagram.com/vince14genius_0/">
                      <img alt="Instagram" src={instagramLogo} />
                    </a>
                    
                    <a className="social-media-link" href="https://youtube.com/@vince14genius">
                      <img alt="YouTube" src={youtubeLogo} />
                    </a>
                  </p>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <hr className="standard-hr"/>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <h2 className="text-fancy text-hello">Languages</h2>
                  <table className="language-chart">
                    <tr>
                      <th scope="row" className="language-chart-header-column language-proficiency-native">Native</th>
                      <td>
                        <span className="language-tag">English</span>
                        <span className="language-tag">中文</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="language-chart-header-column language-proficiency-near-native">Near-Native</th>
                      <td>
                        <span className="language-tag">日本語</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="language-chart-header-column language-proficiency-fluent">Fluent</th>
                      <td>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="language-chart-header-column language-proficiency-conversational">Conversational</th>
                      <td>
                        <span className="language-tag">Esperanto</span>
                        <span className="language-tag">Español</span>
                        <span className="language-tag">Français</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="language-chart-header-column language-proficiency-beginner">Beginner</th>
                      <td className="language-proficiency-secondary-tier">
                        <span className="language-tag">Lingua Latīna</span>
                        <span className="language-tag">한국어</span>
                        <span className="language-tag">Ελληνικά</span>
                        <span className="language-tag">Türkçe</span>
                        <span className="language-tag">Bahasa Indonesia</span>
                      </td>
                    </tr>
                  </table>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <hr className="standard-hr"/>
                </section>
                <section className="text-hello nav-aligned-width-wrapper">
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                  <p className="text-fancy text-hello">Text padding</p>
                  <p className="text-hello">Text padding</p>
                </section>
              </div>
            </main>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
