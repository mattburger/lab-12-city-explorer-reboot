import React from 'react';

class App extends React.Component{
  constuctor(props) {
    super(props);
    this.state = {
      stuff: [],
    };
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <Map />
        <Search />
        <Columns />
      </React.Fragment> 
    );
  }

}
class Header extends React.Component {
  constuctor(props) {
    super(props);
  }
  render(){
    return(
      <h1>
        City Explorer
      </h1>
    );
  }
}
class Map extends React.Component {
  constuctor(props) {
    super(props);
  }
}
class Search extends React.Component {
  constuctor(props) {
    super(props);
  }
}
export default App;
