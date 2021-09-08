import React from 'react'

function Home() {
    return ( <
        div >
        <
        h1 > The problems < /h1> <
        form >
        <
        label > name < /label> <
        input type = "text"
        name = "name" / >
        <
        label > Email < /label> <
        input type = "email"
        name = "email" / >
        <
        label > massage < /label> <
        textarea name = "massage"
        rows = "5" / >
        <
        input type = "submit" / >
        <
        /form> <
        /div>
    )
}

export default Home