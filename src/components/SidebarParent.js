import React from "react";
import Sidebar from "./Sidebar";

const sidebarContent = (
    <React.Fragment>
        <div className="wiget">
            <div>Поиск</div>
            <form method="GET" action="/search/" class="search">
                <input type="text" name="query" placeholder="Поиск..." value=""></input>
            </form>
        </div>    
        <div class="widget">
            <div>Теги</div>
            <div class="tag-block">
                <a href="/articles/tag/js/" class="tag-link clear">JavaScript</a>
                <a href="/articles/tag/nodejs/" class="tag-link clear">Node.JS</a>
            </div>
        </div>
        <div class="widget">
            <div>Социальные сети</div>
            <div class="social-block">
                <ul>
                    <li><a href="https://vk.com/username" class="clear social-link">VK</a></li>
                    <li><a href="mailto:username@gmail.com" class="clear social-link">Email</a></li>
                    <li><a href="https://github.com/username" class="clear social-link">Github</a></li>
                </ul>
            </div>
        </div>
    </React.Fragment>  
)

function SidebarParent(props) {
   

    return (
        <Sidebar id='sidebar' children={<b>Я боковая панель!</b>}>
            <b>А я дочерний компонент!</b>
        </Sidebar>
    )
}

export { sidebarContent }
export default SidebarParent