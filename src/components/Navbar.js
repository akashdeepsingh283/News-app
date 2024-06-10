import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    let darkMode=()=>{
      let element=document.body;
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-white");
      let nav=document.querySelector(".navbar");
      nav.classList.toggle("navbar-dark");
      nav.classList.toggle("bg-body-tertiary");
      let navlink=document.querySelectorAll(".nav-link");
      navlink.forEach(element=>{
        element.classList.toggle("text-white");
      })
      let toggler=document.querySelector(".navbar-toggler-icon");
      toggler.classList.toggle("bg-white");
      let darkmode=document.querySelector(".darkmode");
      darkmode.classList.toggle("bg-dark");
      darkmode.classList.toggle("text-white");
      let btn=document.querySelector(".btn");
      btn.classList.toggle("btn-light");
      btn.classList.toggle("btn-dark");
      btn.textContent==="Dark Mode"?btn.textContent="Light Mode":btn.textContent="Dark Mode";

      let card=document.querySelectorAll(".card");
      card.forEach(element=>{
        element.classList.toggle("bg-dark");
        element.classList.toggle("text-white");
      })

    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsMonkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navspace" id="navbarSupportedContent">
            <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            </div>
            <div className="darkmode">
            <button onClick={darkMode} className="btn btn-dark" type="submit">Dark Mode</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
