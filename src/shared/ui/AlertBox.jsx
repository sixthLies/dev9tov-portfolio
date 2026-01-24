export const InfoBox = ({ data }) => {
  return (
    <div className="info">
      <div class="info-container">
        <div class="info-icon">i</div>
      </div>

      <div className="info__content">
        <h4 className="info__title">{data.title}</h4>
        <p className="info__text">{data.info}</p>
      </div>
    </div>
  )
}
