/* eslint-disable react/prop-types */
const HeaderBody = ({style, h1Text, hr}) => {
    return (
        <div className = "header-body" style={style}> 
            <h1>{h1Text}</h1>
            {!hr ? <hr /> : null}
        </div>
    )
}

export default HeaderBody