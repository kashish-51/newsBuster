import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description,imgUrl,newsUrl,author,date,source} = this.props;
    return (
<div className="card w-[18rem]">
  <div className="flex justify-end absolute right-0">
<span class="position-absolute   badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
  <img src={!imgUrl?"https://cdn.vox-cdn.com/thumbor/N9EBRZMSuj5bMksmQiSHuU7vnXU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951500/VRG_Illo_STK170_L_Normand_TimCook_Neutral.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read more</a>
  </div>
</div>      
    )
  }
}

export default NewsItems
