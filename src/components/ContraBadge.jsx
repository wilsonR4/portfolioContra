
import "../sass/ContraBadge.scss"

//asset.
import LogoContra from "../assets/logoContra.png"
function ContraBadge(){
    return(<>
        <a 
            id="ContraBadge"
            href="https://contra.com/wilson_rivero_sumg487d/services"
            target="_blank"
        >
            <img
                src={LogoContra}
                alt="Contra Badge"
                width="120"
                height="120"
            />
            <span>Hire me on Contra</span>
        </a>
    </>)
}

export default ContraBadge;