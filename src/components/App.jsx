import React, { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar/searchbar";
import { AppStyled } from './App.Styled'
import { ImageGallery } from "./ImageGallery/imageGallery";
import { getPhoto } from "./request/request";
import { Modal } from "./Modal/Modal";
import { Overlay } from "./Overlay/Overlay";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Notify } from "notiflix";
export function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [keyWords, setKeyWords] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [tags, setTags] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const newImages = await getPhoto(keyWords, page);
        setImages((prevImages) =>
          [...prevImages, ...newImages.hits]
        );
        setIsVisible(page < Math.ceil(newImages.totalHits / 12));
      }
      catch (error) {
        Notify.info(error.message);
      }
      finally {
        setIsLoading(false);
        if (page !== 1) {
          setTimeout(() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth"
            });
          }, 5)
        }
      }
    }


    if (keyWords === "") return;
    fetchData();


  }, [page, keyWords])


  const onLoadMore = () => {
    setPage(page => page + 1);
    setIsVisible(false);
  }

  const openModal = (event) => {
    setModalImage(event.target.dataset.img);
    setTags(event.target.alt);
  }

  const closeModal = () => {
    setModalImage("");
    setTags("");
  }

  const checkKeyWords = (keyWordsArg) => {
    if (keyWordsArg === "" || keyWordsArg === keyWords) {
      return;
    }
    setKeyWords(keyWordsArg);
    setPage(1);
    setImages([]);
    setIsVisible(false);
  }

  return (
    <AppStyled >
      <Searchbar setKeyWords={checkKeyWords} />
      <ImageGallery photos={images} openModal={openModal} />
      {modalImage !== "" &&
        <Overlay closeModal={closeModal}>
          <Modal modalImage={modalImage} tags={tags} />
        </Overlay>}
      {isVisible && <Button onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}
    </AppStyled>
  );

}
