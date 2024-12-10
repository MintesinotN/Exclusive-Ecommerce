import React from 'react'

const Button = ({onclick,content,background,text,border}) => {
  return (
    <div onClick={onclick} className={`w-fit text-nowrap text-center px-12 py-3 text-lg rounded-sm cursor-pointer ${background} ${text} ${border}`}>
        {content}
    </div>
  )
}

export default Button