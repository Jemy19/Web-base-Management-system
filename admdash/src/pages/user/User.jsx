import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom";
import "./user.css"

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
          <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
              <div className="userShowTop">
                  <img src="https://www.dotafire.com/images/hero/icon/meepo.png" alt="" className="userShowImg" />
                  <div className="userShowTopTitle">
                  <span className="userShowUsername">Meepo Estrada</span>
                  <span className="userShowUserTitle">Home Owner</span>
                  </div>
              </div>
              <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                  <PermIdentity className="userShowIcon"/>
                  <span className="userShowInfoTitle">Meppoz32</span>
                  </div>
                  <div className="userShowInfo">
                  <CalendarToday className="userShowIcon"/>
                  <span className="userShowInfoTitle">10/03/1999</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon"/>
                  <span className="userShowInfoTitle">09167825789</span>
                  </div>
                  <div className="userShowInfo">
                  <MailOutline className="userShowIcon"/>
                  <span className="userShowInfoTitle">tres3se@gmail.com</span>
                  </div>
                  <div className="userShowInfo">
                  <LocationSearching className="userShowIcon"/>
                  <span className="userShowInfoTitle">32 st. Harmony Subd. Bulacan</span>
                  </div>
              </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" placeholder="Meppoz32" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder="Meepo Estrada" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                          <label>Mobile Number</label>
                          <input type="text" placeholder="09167825789" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" placeholder="tres3se@gmail.com" className="userUpdateInput"/>
                      </div>
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder="32 st. Harmony Subd. Bulacan" className="userUpdateInput"/>
                      </div>
                  </div>
                  <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"src="https://i.guim.co.uk/img/media/2bfc61f76154bd557b13b1b7041fcf4f4ebcd904/227_0_3006_
                  1804/master/3006.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=936b1b58fa40f90bdbc1271b4e085e4c"
                  alt=""/>
                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
              </form>
          </div>
      </div>
    </div>
  );
}
