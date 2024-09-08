import React from 'react';
//import '../styles/Index.css'; // Estilos específicos para la página Home
import 'bootstrap/dist/css/bootstrap.css';

//import ImageGallery from '../components/ImageGallery'; // Componente para la galería de imágenes
//import VideoGallery from '../components/VideoGallery'; // Componente para la galería de videos

const Index = () => {

  const handleReadMore = () => {
    console.log('Read more clicked');
  };

  return (
    <div className="main-layout">

      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>

      <section className="banner_main">
        <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="row">
                    <div className="col-md-7 offset-md-5">
                      <div className="text-bg">
                        <h1> Design <br />Of Furniture</h1>
                        <span>There are many variations of passages of Lorem Ipsum available</span>
                        <a className="read_more" href="#" onClick={handleReadMore}>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="row">
                    <div className="col-md-7 offset-md-5">
                      <div className="text-bg">
                        <h1> Design <br />Of Furniture</h1>
                        <span>There are many variations of passages of Lorem Ipsum available</span>
                        <a className="read_more" href="#" onClick={handleReadMore}>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption relative">
                  <div className="row">
                    <div className="col-md-7 offset-md-5">
                      <div className="text-bg">
                        <h1> Design <br />Of Furniture</h1>
                        <span>There are many variations of passages of Lorem Ipsum available</span>
                        <a className="read_more" href="#" onClick={handleReadMore}>Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>


      <div id="about" class="about">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About <span className="green">Us</span></h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <a className="read_more" href="#" onClick={handleReadMore}> Read More</a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure><img src="images/about.png" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our <span className="green">Services</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="service_box">
                    <i><img src="images/service1.png" alt="#" /></i>
                    <h3>Retina Ready</h3>
                    <p>many variations of passages <br />of Lorem Ipsum available,</p>
                  </div>
                </div>
                <div className="col-md-4 offset-md-1 col-sm-6">
                  <div className="service_box">
                    <i><img src="images/service2.png" alt="#" /></i>
                    <h3>Creative Elements</h3>
                    <p>many variations of passages <br />of Lorem Ipsum available,</p>
                  </div>
                </div>
                <div className="col-md-4 offset-md-3 col-sm-6 mar_top">
                  <div className="service_box">
                    <i><img src="images/service3.png" alt="#" /></i>
                    <h3>Easy-to-Use</h3>
                    <p>many variations of passages <br />of Lorem Ipsum available,</p>
                  </div>
                </div>
                <div className="col-md-4 offset-md-1 col-sm-6 mar_top">
                  <div className="service_box">
                    <i><img src="images/service4.png" alt="#" /></i>
                    <h3>Easy Import</h3>
                    <p>many variations of passages <br />of Lorem Ipsum available,</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <a className="read_more" href="#" onClick={handleReadMore}> Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="gallery" className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our <span className="green">gallery</span></h2>
                <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffer</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="gallery_text">
                <div className="galleryh3">
                  <h3>Interior Design</h3>
                  <p>of passages of Lorem <br />
                    Ipsum available <br />
                    , but the majority <br />
                    have suffer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery1.jpg" alt="#" /></figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery2.jpg" alt="#" /></figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery3.jpg" alt="#" /></figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery4.jpg" alt="#" /></figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_text">
                <div className="galleryh3">
                  <h3>Interior Design</h3>
                  <p>of passages of Lorem <br />
                    Ipsum available <br />
                    , but the majority <br />
                    have suffer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_text">
                <div className="galleryh3">
                  <h3>Interior Design</h3>
                  <p>of passages of Lorem <br />
                    Ipsum available <br />
                    , but the majority <br />
                    have suffer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery5.jpg" alt="#" /></figure>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure><img src="images/gallery6.jpg" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="design">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-5">
              <div id="design" className="carousel slide banner_design" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#design" data-slide-to="0" className="active"></li>
                  <li data-target="#design" data-slide-to="1"></li>
                  <li data-target="#design" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text_de">
                              <div className="titlepage">
                                <h2>New Ideas <span className="green">Design</span></h2>
                              </div>
                              <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text_de">
                              <div className="titlepage">
                                <h2>New Ideas <span className="green">Design</span></h2>
                              </div>
                              <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="text_de">
                              <div className="titlepage">
                                <h2>New Ideas <span className="green">Design</span></h2>
                              </div>
                              <p>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#design" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#design" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-7 pad_roght0">
              <div className="design_img">
                <figure><img src="images/desi.jpg" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest_news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Read Our <span className="green">Latest News</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <div id="new" className="news_box">
                <div className="news_img">
                  <figure><img src="images/blog1.jpg" alt="#" /></figure>
                </div>
                <div className="news_room">
                  <span>Post By :limelight</span>
                  <ul>
                    <li><a href="#" onClick={handleReadMore}>Like <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                    <li><a href="#" onClick={handleReadMore}>Comment <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                    <li><a href="#" onClick={handleReadMore}>Share <i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
                  </ul>
                  <h3>Interior Design</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div id="new" className="news_box">
                <div className="news_img mr_le">
                  <figure><img src="images/blog1.jpg" alt="#" /></figure>
                </div>
                <div className="news_room">
                  <span>Post By :limelight</span>
                  <ul>
                    <li><a href="#" onClick={handleReadMore}>Like <i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                    <li><a href="#" onClick={handleReadMore}>Comment <i className="fa fa-comments-o" aria-hidden="true"></i></a></li>
                    <li><a href="#" onClick={handleReadMore}>Share <i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
                  </ul>
                  <h3>Artictecture</h3>
                  <p>It is a long established fact that a reader will be distracted by the readable content  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <a className="read_more" href="#" onClick={handleReadMore}> Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonial" className="Testimonial">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-8 pad_left0">
              <div id="testimon" className="carousel slide banner_testimonial" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#testimon" data-slide-to="0" className="active"></li>
                  <li data-target="#testimon" data-slide-to="1"></li>
                  <li data-target="#testimon" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett1.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett2.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett1.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett2.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption relative">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett1.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="text_humai">
                              <i><img src="images/tett2.png" alt="#" /></i>
                              <span>HumouThere</span>
                              <p>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#testimon" role="button" data-slide="prev">
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#testimon" role="button" data-slide="next">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="titlepage">
                <h2>Testimonial</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="type" name="Name" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="type" name="Email" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" type="type" Message="Name" >Message</textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
