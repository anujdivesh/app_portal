import React, { useState } from 'react';
import "./L.TileLayer.BetterWMS";
import "leaflet-side-by-side";
import './style.css';
import {
  Button,Modal
} from "react-bootstrap";
import video2 from './video2.mp4';

const About = () => {

  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(true)
    e.currentTarget.blur()
  };
  const handleClose = () => setShow(false);

  const [show2, setShow2] = useState(false);
  const handleShow2 = (e) => {
    
    setShow2(true)
    e.currentTarget.blur()
  };

  const handleClose2 = () => setShow2(false);

  return (
<>
<video autoPlay loop muted
  style={{
    position:"absolute",
    width:"100%",
    left:"50%",
    top:"50%",
    height:"100%",
    objectFit:"cover",
    transform:"translate(-50%,-50%)",
    zIndex: "-1"

  }}
>
  <source src={video2} type="video/mp4"/>
</video>
<div className="sidebar">
<div className="container-fluid" style={{paddingTop:'20px'}}>
<div class="row" style={{paddingTop:'0%',display: 'flex',  justifyContent:'center', alignItems:'center'}}>
<div class="col-md-12 col-lg-2 col-xl-2">
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./maj.jpg")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>PREP II - Portal</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  This app was built as part of Pacific Resilience Programme II Project.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" onClick={()=> window.open("https://opm.gem.spc.int/prep")} style={{width:"60%"}}>Browse {">"}</button>
              </div>
            </div>
            </div>
<div class="col-md-12 col-lg-2 col-xl-2">
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./pop.png")}
                  class="img-fluid"
                  style={{width:"100%", height:"150px"}}
                  alt="loading.."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>Pacific Ocean Portal(Dev)</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  This app shows ocean products for the Pacific.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" onClick={()=> window.open("https://opm.gem.spc.int/pop")} style={{width:"60%"}}>Browse {">"}</button>
              </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-2 col-xl-2">
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./tcap1.png")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>TCAP - Portal</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  App was built as part of Tuvalu Coastal Adaptation Project
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" style={{width:"60%"}} onClick={()=> window.open("https://opm.gem.spc.int/tcap")}>Browse {">"}</button>
              </div>
            </div>
            </div>
           
          
            <div class="col-md-12 col-lg-2 col-xl-2">
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./pt.png")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>Pacific Tides</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  A mobile application for moon and tidal predictions.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" style={{width:"60%"}} onClick={()=> window.open("https://opm.gem.spc.int/pacifictides")}>Browse {">"}</button>
              </div>
            </div>
            </div>


            <div class="col-md-12 col-lg-2 col-xl-2">
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./buoy2.jpg")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>CIFDP - Portal</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  A high-resolution wave and inundation forecast for Fiji.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" onClick={()=> window.open("http://202.62.118.201:8080/")} style={{width:"60%"}}>Browse {">"}</button>
              </div>
            </div>
            </div>
</div>
<div class="row" style={{paddingTop:'1%',display: 'flex',  justifyContent:'center', alignItems:'center'}}>
<div class="col-md-12 col-lg-2 col-xl-2" >
<div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./ckk2.jpg")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>ECIKS (Demo) - Portal</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  This app shows inundation risks for Cook Islands.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" onClick={()=> window.open("https://opm.gem.spc.int/eciks")} style={{width:"60%"}}>Browse {">"}</button>
              </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-2 col-xl-2">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require("./pl.jpg")}
                  class="img-fluid"
                  alt="loading.."
                  style={{width:"100%", height:"150px"}}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{fontSize: "1.1vw"}}>MCAP - Portal</h5>
                <p class="card-text" style={{fontSize: "0.8vw"}}>
                  This app was developed under the Managing Coastal Acquifers Project.
                </p>
                <button type="button" class="btn btn-warning" style={{width:"30%", marginRight:'10%'}} onClick={handleShow}>Info </button>
                <button type="button" class="btn btn-primary" onClick={()=> window.open("https://opm.gem.spc.int/mcap")} style={{width:"60%"}}>Browse {">"}</button>
              </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-2 col-xl-2">
            </div>
            <div class="col-md-12 col-lg-2 col-xl-2">
            </div>
            <div class="col-md-12 col-lg-2 col-xl-2">
            </div>
</div>
</div>
</div>
<Modal show={show} onHide={handleClose} size="lg">
  <Modal.Header>
    <Modal.Title>Home of Ocean Sciences</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Desciption
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
<Modal show={show2} onHide={handleClose2} size="lg">
  <Modal.Header>
    <Modal.Title>Welcome back! Sign In</Modal.Title>
  </Modal.Header>
  <Modal.Body>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        </Modal.Body>
  <Modal.Footer>
    <Button variant="success" style={{width:'100%'}}>
      Login
    </Button>
  </Modal.Footer>
</Modal>
  </>
  );
};

export default About;
