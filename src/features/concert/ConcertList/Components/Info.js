import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

const Info = ({concert}) => {
  return (
    <>
      <div className="ct_name__wrap">
        <Item.Header as={Link} to={`/concerts/${concert.id}`} className="ct_name">
          {concert.title}
        </Item.Header>
        <p className="ct_description">
          {concert.description}
        </p>
      </div>
      <div className="ct_price__wrap">
        <h3 className="amnt">$250.00</h3>
        {/* <button 
          onClick={() => deleteConcert(concert.id)} 
          className="ct_view__btn"
          >
            Delete
        </button> */}
        
        <Link 
          to={`/concerts/${concert.id}`}
          className="ct_view__btn"
        >
          View
        </Link>
        
      </div>
    </>
  )
}

export default Info;