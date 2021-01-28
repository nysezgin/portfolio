import React from 'react'

export default function SingleContact({iconClass, info}) {
    return (
      <div className="contact__piece">
        <i className={"contact__icon " + iconClass}></i>
        <p className="contact__info">{info}</p>
      </div>
    );
}
