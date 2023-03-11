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
    totalHits: 0,
    tags: '',
    isLoading: false
  }

  async componentDidUpdate(_, prevState) {

    if (prevState.keyWords !== this.state.keyWords) {
      this.setState({ isLoading: true, images: [], isVisible: false })
      try {
        let images = await getPhoto(this.state.keyWords, 1);
        const totalHits = images.totalHits;
        if (totalHits > 12) {
          images = images.hits;
          this.setState({ images, page: 1, isVisible: true, totalHits: Math.ceil(totalHits / 12) });
        }
        else {
          images = images.hits;
          this.setState({ images, page: 1, isVisible: false, totalHits: Math.ceil(totalHits / 12) });
        }
      }
      catch (err) {
        Notify.info(err.message);
      }
      finally {
        this.setState({ isLoading: false });
        return;
      }


    }
    if (this.state.page !== prevState.page && this.state.page !== 1) {
      this.setState({ isLoading: true })
      try {
        if (this.state.page > this.state.totalHits) {
          this.setState({ isVisible: false });
        }
        else if (this.state.page === this.state.totalHits) {
          let images = (await getPhoto(this.state.keyWords, this.state.page)).hits;
          images = [...this.state.images, ...images];
          this.setState({ images, isVisible: false });
        }
        else {
          let images = (await getPhoto(this.state.keyWords, this.state.page)).hits;
          images = [...this.state.images, ...images];
          this.setState({
            images, isVisible: true
          });

        }
      } catch (err) {
        console.log(err)
      }
      finally {
        this.setState({ isLoading: false });

      }

    }

  }
  onLoadMore = () => {
    this.setState({ page: this.state.page + 1, isVisible: false });

  }
  openModal = (event) => {
    if (event.target.tagName === 'IMG') {
      this.setState({ modalImage: event.target.dataset.img, tags: event.target.alt })
    }
  }
  closeModal = (event) => {
    if (event.target.classList.contains("overlay")) {
      this.setState({ modalImage: "", tags: "" });
    }
  }
  closeModalKeyDown = () => {
    this.setState({ modalImage: "", tags: "" });
  }
  setKeyWords = (event) => {
    event.preventDefault();
    if (event.currentTarget.elements.searchQuery.value !== "") {
      this.setState({ keyWords: event.currentTarget.elements.searchQuery.value });
    }
  }
  render() {
    return (
      <AppStyled >
        <Searchbar onSubmit={this.setKeyWords} />
        <ImageGallery photos={this.state.images} onClick={this.openModal} />
        {this.state.modalImage !== "" &&
          <Overlay onClick={this.closeModal} closeModalKeyDown={this.closeModalKeyDown}>
            <Modal modalImage={this.state.modalImage} tags={this.state.tags} />
          </Overlay>}
        {this.state.isVisible && <Button onLoadMore={this.onLoadMore} />}
        {this.state.isLoading && <Loader />}
      </AppStyled>
    );
  }
}
