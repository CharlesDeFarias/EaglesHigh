const serviceBox = (props) => {
  const {className, serviceTitle, serviceDescription, imgUrl, imgSrc, imgAlt, btnUrl, btnText} = props;
  return (
  <div class={className}>
    <div class="box">
      <a href= {imgUrl}>
        <img
          src={imgSrc}
          alt={imgAlt}
          class="image image-full"/>
      </a>
      <h3>{serviceTitle}</h3>
    <p> {serviceDescription}</p>
    <a href={btnUrl}class="button button-small"> {btnText}</a>
  </div>
</div>
)
}

export default serviceBox;