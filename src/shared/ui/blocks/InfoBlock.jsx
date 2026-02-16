export const InfoBlock = ({ data }) => {
  return (
    <div className="info">
      <div className="info__marker">
        <div className="info__marker-icon">i</div>
      </div>

      <div className="info__content">
        <h4 className="info__title">{data.title}</h4>
        <p className="info__text">{data.info}</p>
      </div>
    </div>
  )
}
