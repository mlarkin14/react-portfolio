import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro"className="logo">larkin.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>(732) 710 8082</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>mlarkin14@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
