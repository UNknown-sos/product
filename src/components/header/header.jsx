import './header.css'
import FruitSection from '../fruitsSection/fruitsSection'

function Header({currentPage,setCurrentPage}){
    return(
        <div className='header'>
            <div className='header_topBar'>
                <div className='first_Half'>
                    <div className='contact'>
                        <div className='tel_vector'></div>
                        <p> +374 98 488 555</p>
                    </div>
                </div>
                <div className='second_Half'>
                    <div className='lang_box'>
                        <div className='choosen_Language'>
                            <p>Հայերեն</p>
                        </div>
                        <div className='lang_arrow'>
                            <div className='arrow'></div>
                        </div>
                    </div>
                    <div className='options'>
                        <div className='options_vector'></div>
                        <div className='options_box_title'></div>
                        <div className='options_arrow'></div>
                    </div>
                </div>
            </div>
            <div className='header_navigation'>
                <div className='navigation_container'>
                    <div className='logo_block__group'></div>
                    <div className='shop_block__group'>
                        <div className='group_list'>
                            <div className='main-search-field'>
                                <input type="text" placeholder='Որոնել․․․' className='mainSearch'/>
                            </div>
                            <div className='main-controls'>
                                <div className='likes_box'></div>
                                <div className='user_box'></div>
                                <div className='balance_box'>
                                    <div className='basket_vector'></div>
                                    <div className='user_balance'>
                                        <p>0,00 ֏ *</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_navigation'>
                <ul type='none'>
                    <li onClick={()=>{
                        setCurrentPage('FruitSection')
                    }}>
                        Մրգեր & Հատապտուղներ
                    </li>
                    <li>
                        <a href="s" className='navigation-link'>
                            <span>Բանջարեղեն</span>
                        </a>
                    </li>
                    <li>
                        <a href="s" className='navigation-link'>
                            <span>Կանաչի</span>
                        </a>
                    </li>
                    <li>
                        <a href="s" className='navigation-link'>
                            <span>Ընկուզեղեն & Չրեր</span>
                        </a>
                    </li>
                    <li>
                        <a href="App" className='navigation-link'>
                            <span>Փնջեր & Զամբյուղներ</span>
                        </a>
                    </li>
                    <li>
                        <a href="s" className='navigation-link'>
                            <span>Թարմ Ձուկ & Ծովամթերք</span>
                        </a>
                    </li>
                    <li>
                        <a href="s" className='navigation-link'>
                            <span>Սուշի</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header