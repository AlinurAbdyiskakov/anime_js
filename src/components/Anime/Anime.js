import React from 'react'
import './Anime.scss'
import anime_1 from '../../vidio/anime_2.mp4';
import anime_2 from '../../vidio/anime_1.mp4';
import anime_3 from '../../vidio/anime_3.mp4';
import anime_4 from '../../vidio/anime_4.mp4';
import anime_5 from '../../vidio/anime_5.mp4';
import anime_6 from '../../vidio/anime_6.mp4';
import anime_7 from '../../vidio/anime7.mp4';

function Anime() {
    return ( < div class = "Anime" >
        <
        div class = "anime_1" >
        <
        video src = { anime_1 }
        controls loop / >
        <
        h1 > аниме гаргантия на зелёной планете < /h1>

        <
        /div>  <
        div class = "anime_1" >
        <
        video src = { anime_2 }
        controls loop > < /video>  <
        h1 > аниме невиданный цветок < /h1> </div >
        <
        div class = "anime_1" >
        <
        video src = { anime_3 }
        controls loop >
        <
        /video> <
        h1 > повседневная жизнь бессмертного короля < /h1>  <
        /div> <
        div class = "anime_1" >
        <
        video src = { anime_4 }
        controls loop > < /video> <
        h1 > Аниме Насколько тяжёлые гантели ты сможешь поднять < /h1>  <
        /div> <
        div class = "anime_1" >
        <
        video src = { anime_5 }
        controls loop > < /video> <
        h1 > Аниме Сага о Винланде < /h1>  <
        a href = "https://jut.su/vinland-saga/" > Смотреть < /a> <
        /div> <
        div class = "anime_1" >
        <
        video src = { anime_6 }
        controls loop > < /video> <
        h1 > Аниме Маг на полную ставку < /h1>  <
        a href = "https://animang.ru/1282-mag-na-polnuyu-stavku-1-sezon.html" > Смотреть < /a> <
        /div> <
        div class = "anime_1" >
        <
        video src = { anime_7 }
        controls loop > < /video> <
        h1 > Аниме Восхождения героя щита < /h1>  <
        /div> <
        /div>
    )
}

export default Anime;