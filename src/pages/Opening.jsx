import React from 'react'

const Opening = ({showOpening}) => {
  return (
    <div className='opening'>
      <div className='opening_logo_container'>
        <div className={'opening_logo'}>
          <div className='logo_material'>
            <span>{"<"}</span>
            <span>{"Opening"}</span>
            <span>{"/>"}</span>
          </div>
          <span className="border_style_item_top"></span>
          <span className="border_style_item_bottom"></span>
          <span className="border_style_item_left"></span>
          <span className="border_style_item_right"></span>
        </div>
      </div>
    </div>
  )
}

export default Opening;