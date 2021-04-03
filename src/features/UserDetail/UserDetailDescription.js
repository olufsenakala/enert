import React from 'react';
import { format } from 'date-fns';

const UserDetailDescription = ({profile}) => {
  let createDate;
  if (profile.createdAt) {
    createDate = format(profile.createdAt.toDate(), 'EEEE do LLL');
  }
  return(
    <>
      <div className="cp_info">
        <div className="abt__wrp">
          <h1 className="abt">
            About <span className="name">{profile.displayName}</span>
          </h1>
          <div className="cp_info__btns">
            <button className="back">&lt;-</button>
          </div>
        </div>
        <p className="desc">{profile.about}</p>
      </div>

      <div className="cp_more__info">
        <div className="cp_more__abt">
          <p className="txt">I am a: <b className="vl">{profile.occupation}</b></p>
          <p className="txt">
            Originally from: <b className="vl">{profile.origin || 'unknown city'}</b>
          </p>
          <p className="txt">
            Lives in: <b className="vl">{profile.city || 'unknown city'}</b>
          </p>
          <p className="txt">
            Member Since: <b className="vl">{createDate}</b>
          </p>
        </div>
        <div className="cp_intrst">
          <h2 className="cp_intrst__ttl">Interests</h2>
          {profile.interests ? 
          <ul className="cp_intrst__items">
            {profile.interests &&
              profile.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
          </ul> : <p>No interests</p>}
        </div>
      </div>
    </>
  )
}

export default UserDetailDescription;