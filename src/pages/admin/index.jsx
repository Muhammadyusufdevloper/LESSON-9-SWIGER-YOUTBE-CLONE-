import SiteBar from './site-bar'
import { Outlet } from 'react-router-dom'

const Admin = ({menu}) => {
    return (
        <>
            <div className={`grid ${menu ?" grid-cols-[240px,1fr]" : "grid-cols-[60px,1fr]" }  gap-10`}>
                <SiteBar menu={menu}/>
                <Outlet />
            </div>
        </>
    )
}

export default Admin