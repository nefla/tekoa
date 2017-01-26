import Inferno from 'inferno'

const ChannelItem = ({ id, title, thumbnails, onClick }) => {
  let maxLength = 20
  title = title.length > maxLength
    ? title.substring(0, 20).concat('...')
    : title
  return (

      <div class='content-item'>
        <a href="#" onClick={e => onClick(e, id)}>
          <img src={thumbnails.high.url} />
        </a>
        <div class='content-item-details'>
          <h2 class='content-item-title'> {title} </h2>
          <button class='button button-small'>Playlists</button>
        </div>
      </div>

  )
}

export default ChannelItem
