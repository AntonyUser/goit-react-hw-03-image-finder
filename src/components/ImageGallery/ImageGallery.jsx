import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ itemList }) => {
  return (
    <>
      <List className="gallery">
        {itemList.map(item => {
          return <ImageGalleryItem item={item} key={item.id} />;
        })}
      </List>
    </>
  );
};
