import Inferno from 'inferno'
import ChannelItem from './ChannelItem'

const ChannelGrid = ({ items, onItemClick, onPlaylistsClick }) => {
  const gridVisibility = 'show'
  return (
    <div class={`content-main ${gridVisibility} flat-scroll`}>
        {items.map(item => {
          return (
            <ChannelItem
              id={item.id}
              title={item.title}
              thumbnails={item.thumbnails}
              onClick={onItemClick}
              onPlaylistsClick={onPlaylistsClick}
            />
          )
        })}
    </div>
  )
}

export default ChannelGrid
