import React, { useState, Text, Component } from "react";
import ReactDOM from "react-dom";
import "../style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ReactList from "react-list";
import Book from "../sourceApa/book";
import OnlineImage from "../sourceApa/OnlineImage";
import Film from "../sourceApa/film";
import { Divider } from "antd";

class Mla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      resource: [
        "Website",
        "Book",
        "Journal",
        "Film",
        "Archive Material",
        "Artwork",
        "Blog",
        "E-Book Or PDF",
        "Broadcast",
        "Chapter of an Edited Book",
        "Conference Preceeding",
        "Edited Book",
        "Court Case",
        "Dictionary Entry",
        "Dissertation",
        "Email",
        "Encyclopedia Article",
        "Government Publication",
        "Interview",
        "Journal",
        "Magazine",
        "Music Or Recording",
        "Newspaper",
        "Online Image Or Video",
        "Patent",
        "Podcast",
        "Presentation",
        "Press Release",
        "Religious Text",
        "Report",
        "Software",
        "Website",
      ],
      website: false,
      book: false,
      journal: false,
      film: false,
    };
  }

  setStatesAll = (item) => {
    if (item == "Website") {
      this.setState({ website: true });
    } else if (item == "Book") {
      this.setState({ book: true });
    } else if (item == "Film") {
      this.setState({ film: true });
    }
  };
  render() {
    const { website } = this.state;
    return (
      <div>
        <p>Please Select the source type</p>
        <select className="select-source" id="source" name="source">
          {this.state.resource.map((item) => (
            <option
              value={item}
              key={item}
              onClick={() => this.setStatesAll(item)}
            >
              {item}
            </option>
          ))}
        </select>
        <Divider />
        <div>{this.state.website && <OnlineImage />}</div>
        <div>{this.state.book && <Book />}</div>
        <div>{this.state.film && <Film />}</div>
      </div>
    );
  }
}

export default Mla;
