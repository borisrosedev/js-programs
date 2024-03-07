function HeaderLayout() {
  return `

        <header class="app__header">
            <figure>
                <img src='../public/images/art-urbain.png' alt="logo du artshop"/>
            </figure>
            <nav>
                <ul>
                    <li>
                        <a href="#home">
                            <i class="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#products">
                            <i class="fa-solid fa-palette"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#login">
                            <i class="fa-solid fa-right-to-bracket"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    
    `;
}

export default HeaderLayout