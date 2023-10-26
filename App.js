import React from 'react';
import './App.css';
import CardItem from './CardItem'
import Wallpaper from './Wallpaper'
import Navbar from './Navbar';
import authors from './authors';
import './card.css';
import { Card } from 'semantic-ui-react';
import Newsletter from './Newsletter';
import Socials from './Socials';



function App() {
  return ( 
  <div>

    <Navbar />

    <Wallpaper />



<a className = "row">
    <CardItem 
    Image = {authors[0].Image}
    Name = {authors[0].Name}
    Date =  {authors[0].Date}
    Description = {authors[0].Description}
    Friends = {authors[0].Friends} />

    <CardItem 
    Image = {authors[1].Image}
    Name = {authors[1].Name}
    Date =  {authors[1].Date}
    Description = {authors[1].Description}
    Friends = {authors[1].Friends} />

    <CardItem 
    Image = {authors[2].Image}
    Name = {authors[2].Name}
    Date =  {authors[2].Date}
    Description = {authors[2].Description}
    Friends = {authors[2].Friends} />
/</a>
<b className="row">
  <CardItem
  Image = {authors[3].Image}
  Name = {authors[3].Name}
  Date =  {authors[3].Date}
  Description = {authors[3].Description}
  Friends = {authors[3].Friends} />

  <CardItem
  Image = {authors[4].Image}
  Name = {authors[4].Name}
  Date =  {authors[4].Date}
  Description = {authors[4].Description}
  Friends = {authors[4].Friends} />

  <CardItem
    Image = {authors[5].Image}
    Name = {authors[5].Name}
    Date =  {authors[5].Date}
    Description = {authors[5].Description}
    Friends = {authors[5].Friends} />
</b>

<c className="centre">
<Newsletter />
</c>

<Socials />

  </div>

  );
}

export default App

