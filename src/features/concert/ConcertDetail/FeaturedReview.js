import React from 'react';
import ftReviewImg from '../../../assets/dtl_cmt.png';

const FeaturedReview = () => {
  return (
    <div className="tc_review__wrap">
      <div className="tc_rv__head">
        <p className="featured">Hannah</p>
        <p className="review">4.5 of 5</p>
      </div>
      <div className="tc_rev__image">
        <img className="pic" src={ftReviewImg} alt=""/>
      </div>
      <div className="tc_rev">
        <h1 className="aps">"</h1>
        <h3 className="ttl">I just love Ecstacy!</h3>
        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit numquam a, temporibus.</p>
        
      </div>
    </div>
  )
}

export default FeaturedReview;