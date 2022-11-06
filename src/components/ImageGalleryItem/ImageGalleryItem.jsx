import { Item } from './ImageGalleryIte.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <Item className="gallery-item" key={item.id}>
      <img src={item.webformatURL} alt={item.user} />
    </Item>
  );
};
