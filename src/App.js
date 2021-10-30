import React, { Component } from 'react';
import {Modal} from './components/Modal/Modal';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import {Searchbar} from './components/Searchbar/Searchbar';
import {Button} from './components/Button/Button';
import {MyLoader} from './components/Loader/Loader';
import s from './App.module.css';

class App extends Component {
  state = {
    selectedImage: '',
    arrayImage: [],
    inputValue: '',
    page: 1,
    error: false,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
   if (this.state.inputValue !== prevState.inputValue || this.state.page !== prevState.page) { 
      fetch(`https://pixabay.com/api/?key=24030089-eaaf496be91aa9ac1c5e468a6&q=${this.state.inputValue}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(res => this.setState({arrayImage: res.hits}))
      .then(() => this.setState({status: 'resolved'}))
      .catch(e => this.setState({error: true}));
    }
  }

  formSubmitHandler = ({inputValue}) => {
    if (inputValue.trim() !== '') {
      this.setState({inputValue, page: 1, status: 'pending'});
      return;
    }
    alert('Введіть текс для пошуку');
  };
  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
  };

  handleSelectImage = data => this.setState({selectedImage: data});

  closeModal = () => this.setState({selectedImage: ''});

  render() {
    const {selectedImage, arrayImage, status} = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmitHandler}/>
        {status === 'pending' && <MyLoader/>}
        {status === 'resolved' && <ImageGallery images={arrayImage} onSelect={this.handleSelectImage}/>}
        {(status === 'resolved' && arrayImage.length === 12) && <Button onClick={this.onClickButton}/>}
        {selectedImage && <Modal image={selectedImage} onClose={this.closeModal}/>}
      </div>
    );
  }
}

export default App;
