const NameList = ({ names, className, onClicked }) => {

    return (
        <div className={`toggle-names ${className}`}>
            <h1 className='heading'>NAME LIST</h1>
           {names.map((name, index) => <h2 key={index} className='name' onClick={onClicked}>{name}</h2>)}
        </div>
    )
}

export default NameList;