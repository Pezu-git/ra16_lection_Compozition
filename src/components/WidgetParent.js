import React from "react";
import Widget from "./Wiget";
import Sidebar from "./Sidebar";

function WidgetParent(props) {

    return (
        <React.Fragment>
            <Sidebar id='sidebar'>
                <Widget title='Поиск'>
                    <form method="GET" action="/search/" class="search">
                        <input type="text" name="query" placeholder="Поиск..." value=""></input>
                    </form>
                </ Widget>
                <Widget title='Теги'>
                    <div class="tag-block">
                        <a href="/articles/tag/js/" class="tag-link clear">JavaScript</a>
                        <a href="/articles/tag/nodejs/" class="tag-link clear">Node.JS</a>
                    </div>
                </ Widget>
                <Widget title='Социальные сети'>
                    <div class="social-block">
                        <ul>
                            <li><a href="https://vk.com/username" class="clear social-link">VK</a></li>
                            <li><a href="mailto:username@gmail.com" class="clear social-link">Email</a></li>
                            <li><a href="https://github.com/username" class="clear social-link">Github</a></li>
                        </ul>
                    </div>
                </ Widget>
            </Sidebar>
        </React.Fragment>
    )
}

export default WidgetParent