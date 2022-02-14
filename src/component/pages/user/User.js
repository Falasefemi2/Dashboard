import { CalendarToday, LocationSearching, MailOutlineOutlined, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import './user.css';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="userimg" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowName">Falase Femi</span>
              <span className="userShowNameTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon' />
              <span className="userShowInfoTitle">FFalase</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className='userShowIcon' />
              <span className="userShowInfoTitle">15/03/2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon' />
              <span className="userShowInfoTitle">+2347013329953</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineOutlined className='userShowIcon' />
              <span className="userShowInfoTitle">femifalase2282gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon' />
              <span className="userShowInfoTitle">Lasu Road Lagos</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input type="text" placeholder='FFalase' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>FullName</label>
                <input type="text" placeholder='Falase Femi' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='femifalase228@gmail.com' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='+2347013329953' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='Lasu Road Lagos' className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className='userUpdateImg' src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="UpdateImg" />
                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                <input type="file" id='file' style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
