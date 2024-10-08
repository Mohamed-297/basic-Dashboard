import "./User.css"
import avatar from "../../images/image-avatar.png"
import pfp from '../..//images/pfp.jpg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
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
                        <img src={avatar} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Alison Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">

                                <PermIdentityIcon className="userShowIcon" />
                                <span className="userInfoShowTitle">alisonbeck99</span>
                            </div>
                            <div className="userShowInfo">

                                <CalendarTodayIcon className="userShowIcon" />
                                <span className="userInfoShowTitle">20.10.2000</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">

                                <PhoneAndroidIcon className="userShowIcon" />
                                <span className="userInfoShowTitle">+1 123 456 56</span>
                            </div>
                            <div className="userShowInfo">

                                <MailOutlineIcon className="userShowIcon" />
                                <span className="userInfoShowTitle">alisonbeck99@gmail.com</span>
                            </div>
                            <div className="userShowInfo">

                                <LocationSearchingIcon className="userShowIcon" />
                                <span className="userInfoShowTitle">New York | USA </span>
                            </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder="alisonbeck99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder="Alison Becker" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder="alisonbeck99@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder="+1 123 456 56" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <div className="userUpdateUpload"></div>
                                <img src={pfp} alt="" className="userUpdateImg" />
                                <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                                <input type="file" name="" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
