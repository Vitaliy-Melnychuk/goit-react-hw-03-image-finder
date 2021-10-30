(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={GalleryItem:"ImageGalleryItem_GalleryItem__1yv9n",GalleryItemImage:"ImageGalleryItem_GalleryItemImage__2gowE"}},12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__jeGcT"}},13:function(e,t,a){e.exports={Button:"Button_Button__3jLt4"}},15:function(e,t,a){e.exports={Loader:"Loader_Loader__3B9_d"}},16:function(e,t,a){e.exports={App:"App_App__3Qz2b"}},21:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),i=(a(21),a(3)),l=a(4),s=a(6),u=a(5),h=a(9),m=a.n(h),p=a(0),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image;return Object(p.jsx)("div",{className:m.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:m.a.Modal,children:Object(p.jsx)("img",{src:e,alt:"gg"})})})}}]),a}(n.Component),g=a(10),b=a.n(g),j=function(e){var t=e.images,a=e.onSelect;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)("li",{className:b.a.GalleryItem,children:Object(p.jsx)("img",{src:e.webformatURL,alt:"gg",className:b.a.GalleryItemImage,onClick:function(){return a(e.largeImageURL)}})},e.id)}))})},f=a(12),y=a.n(f),S=function(e){var t=e.images,a=e.onSelect;return Object(p.jsx)("ul",{className:y.a.ImageGallery,children:Object(p.jsx)(j,{images:t,onSelect:a})})},_=a(7),v=a.n(_),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputChange=function(t){e.setState({inputValue:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({inputValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:v.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.SearchForm,children:[Object(p.jsx)("input",{type:"text",className:v.a.SearchFormInput,value:this.state.inputValue,onChange:this.handleInputChange,placeholder:"Search images and photos"}),Object(p.jsx)("button",{type:"submit",className:v.a.SearchFormButton})]})})}}]),a}(n.Component),I=a(13),x=a.n(I),k=function(e){var t=e.onClick;return Object(p.jsx)("button",{className:x.a.Button,onClick:function(){return t()},children:"Load more"})},w=a(14),C=a.n(w),F=a(15),B=a.n(F),G=function(){return Object(p.jsxs)("div",{className:B.a.Loader,children:["Loading",Object(p.jsx)(C.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})]})},N=a(16),V=a.n(N),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedImage:"",arrayImage:[],inputValue:"",page:1,error:!1,status:"idle"},e.formSubmitHandler=function(t){var a=t.inputValue;""===a.trim()?alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"):e.setState({inputValue:a,page:1,status:"pending"})},e.onClickButton=function(){e.setState((function(e){return{page:e.page+1,status:"pending"}}))},e.handleSelectImage=function(t){return e.setState({selectedImage:t})},e.closeModal=function(){return e.setState({selectedImage:""})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.inputValue===t.inputValue&&this.state.page===t.page||fetch("https://pixabay.com/api/?key=24030089-eaaf496be91aa9ac1c5e468a6&q=".concat(this.state.inputValue,"&page=").concat(this.state.page,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({arrayImage:e.hits})})).then((function(){return a.setState({status:"resolved"})})).catch((function(e){return a.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.arrayImage,n=e.status;return Object(p.jsxs)("div",{className:V.a.App,children:[Object(p.jsx)(O,{onSubmit:this.formSubmitHandler}),"pending"===n&&Object(p.jsx)(G,{}),"resolved"===n&&Object(p.jsx)(S,{images:a,onSelect:this.handleSelectImage}),"resolved"===n&&12===a.length&&Object(p.jsx)(k,{onClick:this.onClickButton}),t&&Object(p.jsx)(d,{image:t,onClose:this.closeModal})]})}}]),a}(n.Component),M=L;o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1ppc0",SearchForm:"Searchbar_SearchForm__UVQrw",SearchFormButton:"Searchbar_SearchFormButton__32JVO","SearchForm-button-label":"Searchbar_SearchForm-button-label__1h1eN",SearchFormInput:"Searchbar_SearchFormInput__2ndiJ"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1hWUU",Modal:"Modal_Modal__g8Juh"}}},[[43,1,2]]]);
//# sourceMappingURL=main.d38fdd7b.chunk.js.map