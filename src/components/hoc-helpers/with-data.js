import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";


const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: false,
      error: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(this.props.getData !== prevProps.getData){
        this.update()
      }
    }

    componentDidMount() {
      console.log('componentDidMount WITH_DATA')
      this.update()
    }

    update(){
      console.log('UPDATE WITH_DATA')
      this.setState({
        loading: true,
        error: false
      })
      console.log(this.props.getData, 'this.props.getData')
      console.log(this.props.getData(), 'this.props.getData()')
      this.props.getData()
          .then((data) => {
            this.setState({
              data: data,
              loading:false
            });
          })
          .catch(()=>{
            this.setState({
              loading: false,
              error: true
            })
          })
    }

    render() {
      const { data, loading, error } = this.state;
      console.log(data, 'withData render()')

      if (loading) {
        return <Spinner />;
      }
      if (error){
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
