import React from 'react'

export default function SingleSkill({iconClass, label}) {
    return (
      <li className="skills__item">
        <i className={"skills__icon fab fa-" + iconClass}></i>
        <p className="skills__label">{label}</p>
      </li>
    );
}
