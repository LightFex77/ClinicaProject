/* eslint-disable react/prop-types */
const HeaderBody = ({style, h1Text}) => {
    return (
        <div className = "header-body" style={style}> 
            <h1>{h1Text}</h1>
            <hr />
        </div>
    )
}

export default HeaderBody