import React from "react";
import axios from "axios";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import "./main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.getData.bind(this);
    this.state = { data: [], filteredData: [], spinner: true };
  }

  async componentDidMount() {
    let res = await this.getData();
    this.setState(() => {
      return { data: res, filteredData: res };
    });
  }

  getData = async () => {
    const res = await axios.get("https://randomuser.me/api/?results=20");

    this.setState(() => {
      return { spinner: false };
    });
    return res.data.results;
  };

  avatars() {
    let arr = this.state.filteredData;

    return arr.map((item) => {
      const fullName = item.name.first + " " + item.name.last;
      const person = [{ name: fullName, picture: item.picture.large }];
      return <Avatar key={item.email} data={person} />;
    });
  }

  search = (term) => {
    let keyToSearch = "";
    if (/[a-zA-Z]/g) {
      keyToSearch = term;
    }

    let sorted = this.state.data.filter((item) => {
      return item.name.first.includes(keyToSearch);
    });

    this.setState(() => {
      return { filteredData: sorted };
    });
  };

  render() {
    return (
      <div>
        {this.state.spinner && <div className="spinner">Data is loading </div>}
        <SearchBar callback={this.search} />
        <div className="avatars"> {this.avatars()}</div>
      </div>
    );
  }
}

export default Main;
