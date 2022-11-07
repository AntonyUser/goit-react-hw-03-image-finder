import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

// const onClick = item => {
//   console.log(item);
// };

export const ImageGallery = ({ itemList, onClick }) => {
  return (
    <>
      <List className="gallery">
        {itemList.map(item => {
          return (
            <ImageGalleryItem item={item} key={item.id} onClick={onClick} />
          );
        })}
      </List>
    </>
  );
};

ImageGallery.propTypes = {
  itemList: PropTypes.array,
  onClick: PropTypes.func,
};
