import React from "react";
import { Searchbar } from "./Searchbar/searchbar";
import { AppStyled } from './App.Styled'
import { ImageGallery } from "./ImageGallery/imageGallery";
import { getPhoto } from "./request/request";
import { Modal } from "./Modal/Modal";
import { Overlay } from "./Overlay/Overlay";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Notify } from "notiflix";
export class App extends React.Component {
  state = {
    images: [],
    keyWords: '',
    modalImage: '',
    page: 1,
    isVisible: false,
    tags: '',
    isLoading: false
  }

  async componentDidUpdate(_, prevState) {

    if (prevState.keyWords !== this.state.keyWords || this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      try {
        let newImages = await getPhoto(this.state.keyWords, this.state.page);
        this.setState((prev) => {
          return {
            images: [...prev.images, ...newImages.hits], isVisible: this.state.page < Math.ceil(newImages.totalHits / 12)
          }
        })
      }
      catch (error) {
        Notify.info(error.message);
      }
      finally {
        this.setState({ isLoading: false });
        if (this.state.page !== prevState.page)
          setTimeout(() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: "smooth"
            });
          }, 5)
      }
    }
  }


  onLoadMore = () => {
    this.setState({ page: this.state.page + 1, isVisible: false });

  }
  openModal = (event) => {
    this.setState({ modalImage: event.target.dataset.img, tags: event.target.alt })
  }
  closeModal = () => {
    this.setState({ modalImage: "", tags: "" });
  }
  setKeyWords = (keyWords) => {
    if (keyWords === "" || keyWords === this.state.keyWords) {
      return;
    }
    this.setState({ keyWords, page: 1, images: [], isVisible: false });
  }
  render() {
    return (
      <AppStyled >
        <Searchbar setKeyWords={this.setKeyWords} />
        <ImageGallery photos={this.state.images} openModal={this.openModal} />
        {this.state.modalImage !== "" &&
          <Overlay closeModal={this.closeModal}>
            <Modal modalImage={this.state.modalImage} tags={this.state.tags} />
          </Overlay>}
        {this.state.isVisible && <Button onLoadMore={this.onLoadMore} />}
        {this.state.isLoading && <Loader />}
      </AppStyled>
    );
  }
}
