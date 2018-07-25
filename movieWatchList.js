const Pane = (props)=> {
  return (
    <div style={{margin:'1em'}} >
      <img width="150" src={props.Poster} />
      <div style={{display:'inline-block', marginLeft:10}} >
        <div style={{fontSize:'1.5em', fontWeight:'strong'}} >
          {props.Title}
        </div>
        <div>
          Genre: {props.Genre}<br />
          Director: {props.Director} <br />
          Actors: {props.Actors} <br />
          IMDB Ratings: {props.imdbRating}
        </div>
      </div>
      <hr />
    </div>
  );
};

const PaneList=(props) =>{
  return(
    <div>
      {props.lists.map(list => <Pane {...list} />)}
    </div>
  );
};

class InName extends React.Component{
  state = {
    imdbID: ''
  };

  handleSubmit= (event)=>{
    event.preventDefault();  //prevent reloading of page on submit, no loss of data
    axios.get(`https://www.omdbapi.com/?apikey=[use your own key]&i=${this.state.imdbID}`)
      .then(resp=>{
        this.props.onSubmit(resp.data);
      });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.imdbID}
          onChange={(event)=>this.setState({imdbID: event.target.value})}
          type="text" placeholder="IMDB ID" required/>
          <button type="submit">Add movie to watchlist</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component{
  state={
    lists: []
  };

  addInfo= (infor)=>{
    this.setState(prevState=>({
      lists: prevState.lists.concat(infor)
    }));
  };

  render(){
    return(
      <div>
        <InName onSubmit={this.addInfo}/>
        <PaneList lists={this.state.lists} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode)
