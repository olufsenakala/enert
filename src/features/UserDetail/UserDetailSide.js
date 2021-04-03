import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const UserDetailSide = ({profile, isCurrentUser}) => {
  // console.log(profile);
  return(
    <div className="cp_image__wrap">
      <div className="cp_img__flw">
        {isCurrentUser ? (
          <Link to='/dashboard/settings' 
            className="cp_img__flw__btn"
          >
            Edit Profile
          </Link>
        ) : (
          <button className="cp_img__flw__btn">Not Following</button>
        )}
        <h2 className="cp_img__flw__no">15K</h2>
      </div>
      <div className="cp_img__inr">
        <div className="cp_img__info">
          <div className="cp_img__info__item cp_img__flwrs">
            <span className="">
              <img className="image" src="/pub_assets/following.png" alt="" />
            </span>
            <p className="num">5</p>
          </div>
          <div className="cp_img__info__item cp_img__evnts">
            <span className="">
              <img className="image" src="/pub_assets/love.png" alt="" />
            </span>
            <p className="num">9</p>
          </div>
          <div className="cp_img__dp">
            <img 
              src="/pub_assets/prof.png" 
              alt="" 
            />
          </div>
        </div>
        <div className="cp_img">
          <LazyLoad
            height={150}
            placeholder={<img src='/pub_assets/pic1.png' alt="" />}
          >
            <img 
              className="image" 
              src={profile.photoURL || '/pub_assets/dp_main.png'} 
              alt="" 
            />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}

export default UserDetailSide;