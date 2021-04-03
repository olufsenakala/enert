import React from 'react';

const UserDetailFollow = () => {
  return(
    <div className="cp_follow">
      <div className="cp_follow__tab">
        <span className="flw active">Followers</span>
        <span className="flw ">Following</span>
      </div>
      <div className="cp_follow__items">
        <div className="cp_follow__item">
          <img className="image" src="/pub_assets/bnr_sup.png" alt="" />
        </div>
        <div className="cp_follow__item">
          <img className="image" src="/pub_assets/bnr_sup.png" alt="" />
        </div>
        <div className="cp_follow__item">
          <img className="image" src="/pub_assets/bnr_sup.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default UserDetailFollow;