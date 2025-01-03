/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from '../../data/themoviedb-source';
import {createMovieItemTemplate} from '../templates/template-creator';

const Author = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Author</h2>
          <div id="movies" class="movies">
          </div>
        </div>
        <section class="home" id="home">
                <div class="home__container container grid">
                    <div class="home__content grid">
                        <div class="home__social">
                            <a href="https://www.linkedin.com/in/hagiazzam" target="_blank" class="home__social-icon">
                                <i class="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://www.instagram.com/hagiaz" target="_blank" class="home__social-icon">
                                <i class="uil uil-instagram-alt"></i>
                            </a>
                            <a href="https://www.github.com/hagiaz" target="_blank" class="home__social-icon">
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>

                        <div class="home__img">
                            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                            </svg>
                        </div>

                        <div class="home__data">
                            <h1 class="home__title">Hello, I am Hagi Azzam</h1>
                            <h3 class="home__subtitle">Computer Science Freshgraduate focused on Front-End Web Development and UI/UX Design</h3>
                        </div>
                    </div>
                </div>
            </section>

            <!--==================== ABOUT ====================-->
            <section class="about section" id="about">
                <h2 class="section__title">About Me</h2>
                <span class="section__subtitle">My Introduction</span>

                <div class="about__container container">
                    <div class="about__data">
                        <p class="about__description">
                            I am Hagi Azzam Azzikri, an informatics engineering student at Singaperbangsa Karawang University. My study focuses on learning Web Development,
                            mainly Front-End Web Development. Beside that, i also currently learning UI/UX Design, Cloud Computing, and Machine Learning.
                        </p>
                    </div>
                </div>
            </section>
      `;
  },

  async afterRender() {
  },
};

export default Author;
