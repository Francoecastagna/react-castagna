import Buttoncomponent from "./buttoncomponent"

export default function Navbar (){
    return(
        <>
        <nav>
            <div className="nav-container">
                <a href="" className="logo">Mi logo</a>
                <Buttoncomponent texto="HOME"/>
                <Buttoncomponent texto="PRODUCTOS"/>
                <Buttoncomponent texto="CONTACTO"/>

                <div className="cart-icon">
                 🛒
                 </div>


            </div>

        </nav>
        </>


    )
}