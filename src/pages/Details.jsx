import Header from "../components/Header";
import Details from "../components/Details";
import { Link } from "react-router-dom";


import React, { Component } from 'react'

export default class DetailsPage extends Component {
  render() {
    return (
        
      <div>
          <Header />
          <Details />
      </div>
    )
  }
}
