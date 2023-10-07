import {Card} from '@mantine/core'
import './Comp.css'
import image from './static/hompage.jpg'
import logo from './static/bvrit-logo.jpg'
import { useSelector} from 'react-redux'


function Main(){
    const a=useSelector(state=>state.Page)
    return(
        <div id='login_back'>
            <div id='login_fore_row'>
                <div id='login_fore_col1'> 
                    <img id='homepage_image' src={image}/>
                </div>
                <div id='login_fore_col2' > 
                    <div className='login_fore_top'>
                        <img id='logo_image' src={logo}/>
                    </div>
                    <div className='login_fore_top'>
                        <div id='text'>Research Publications Search Engine</div>
                    </div>
                    <div id='login_fore_bottom'>
                        {a}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;