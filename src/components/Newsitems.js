import React, { Component } from 'react'

export default class Newsitems extends Component {
    
    
  render() {
    let{title,description,imageurl,newsurl}=this.props;
    return (
        <div className="card " style={{width: `${`18rem`}`}}>
        <img src={!imageurl?"https://c.ndtvimg.com/2021-06/9jubsjh_arunachal-pradeshgenericunsplash_625x300_11_June_21.jpg":imageurl}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} target="_blank" className="btn btn-primary btn btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}
