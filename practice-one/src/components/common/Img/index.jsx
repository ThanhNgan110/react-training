const Img = ({alt, urlIcon}) => {

    return <img  src={urlIcon} alt={`icon-${alt}`} />
}

export default Img;