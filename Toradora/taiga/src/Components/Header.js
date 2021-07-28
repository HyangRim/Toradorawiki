import React, {Component} from 'react'
import '../CSS/Header.scss'
import WordMark from './images/Wordmark.png'

class WikiHeader extends Component{
    handClick(){
       window.location.href = "http://localhost:3000"
    }
    render()
    {
        //var header_image="background-image: url(./images/header-background.jpg);";
        return(
            //eslint-disable-next-line
            <header class="Wiki-header">
                <div class="Wiki-header-mark">
                    <img src={WordMark} alt="Toradora Wiki" width="250" height="65"/>
                </div>
                <div class="Wiki-header-top">
                    <div class="Wiki-header-sitename">
                        <a href="http://localhost:3000">Toradora! Wiki</a>
                    </div>
                </div>
                <nav class="Wiki-header-bottom">
                    <ul>
                        <li class="topmenu">
                            <a href="#!" class="menulink">Character</a>
                            <ul class="submenu">
                                <li><a class="submenulink" href="#!">Aisaka Taiga</a></li>
                                <li><a class="submenulink" href="#!">Takasu Ryuji</a></li>
                                <li><a class="submenulink" href="#!">Kushieda Minori</a></li>
                                <li><a class="submenulink" href="#!">Kitamura Yusaku</a></li>
                                <li><a class="submenulink" href="#!">Kawashima Ami</a></li>
                                <li><a class="submenulink" href="#!">Other</a></li>
                            </ul>
                        </li>
                        <li class="topmenu">
                            <a class="menulink" href="#!">Anime</a>
                            <ul class="submenu">
                                <li><a class="submenulink" href="#!">Review</a></li>
                                <li><a class="submenulink" href="#!">Gallery</a></li>
                                <li><a class="submenulink" href="#!">---</a></li>
                            </ul>
                        </li>
                        <li class="topmenu">
                            <a class="menulink" href="#!">Manga</a>
                        </li>
                        <li class="topmenu">
                            <a class="menulink" href="#!">Music</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default WikiHeader;