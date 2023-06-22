type Props = {
  title:string,
  subTitle:string,
  img: string
}

const Banner = ({img, title, subTitle}:Props) => {
  return (
    <div className='banner'>
      <div className="banner-img">
        <img src={img} alt="imga banner" />
      </div>
      <div className="banner-text">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    </div>
  )
}

export default Banner
