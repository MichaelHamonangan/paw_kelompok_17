import image from './Dashboard/bingung.jpg'
import SidebarItem from "../components/Sidebar/SidebarBodyItem";
import {faHome} from "@fortawesome/free-solid-svg-icons";


function Error404() {
    return (
    <>
    <section className='heading'>
        <img src={image} className='image-med'/>
            <h1>
            ERROR 404 : Page Not Found
            </h1>
            <p>Cahyo Sumber Migas</p>
            <div className="dashboard-item-list">
                <SidebarItem 
                faIcon={faHome}
                linkTo="/"
                title="Home"
                className='dashboard-item'
            />
            </div>
        </section>
    </>
    )
}

export default Error404