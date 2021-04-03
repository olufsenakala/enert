import React from 'react';
import LazyLoad from 'react-lazyload';

const UserDetailPhotos = ({photos}) => {
  return(
    <div className="cp_photos">
      <div className="cp_pht__ttl__wrap">
        <h2 className="cp_photos__ttl">Photos</h2>
      </div>
      <div className="cp_pht__items">
      {photos && photos.length > 0 && photos.map(photo =>
        <div key={photo.id} className="cp_pht__item">
          <LazyLoad
            height={150}
            placeholder={<img className="pic" src="/pub_assets/guide3.png" alt="" />}
          >
            <img className="pic" src={photo.url} alt="" />
          </LazyLoad>

          <div className="cp_pht__icons">
            <img className="icn icn-main" src="/pub_assets/reply.png" alt="" />
            <img className="icn icn-delete" src="/pub_assets/following.png" alt="" />
          </div>
        </div>)}
        
      </div>
    </div>
  )
}

export default UserDetailPhotos;