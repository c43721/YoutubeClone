import React from 'react';
import App from "../App/App.jsx";
import CommentForm from "../CommentForm/CommentForm";



     class Search extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              search: '',
              videoId: ''

            
          };
          this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            const search = this.setState({search: event.target.value});
            const videoId = this.setState({videoId: event.target.value});
        
            let homerun = this.props.videoId;
            console.log(homerun);
        }  
    //    handleChange()

          render() {
            return (
              <div>
                <input type="text"
                  value={this.state.search}
                  onChange={this.handleChange}/>
              </div>
            )}

            }
export default Search;