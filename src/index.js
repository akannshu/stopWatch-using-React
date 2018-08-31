import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class StopWatches extends React.Component{
  constructor(props){
    super(props);
    this.state={
      milisec: 0,
      min:0,
      sec:0,
      hours:0
    }
  }

    start(){
      this.strope = setInterval(() => {
        if(this.state.milisec === 1000){
          this.setState({
            milisec:0,
            sec:this.state.sec + 1
          });
        }
        if (this.state.sec === 60) {
                this.setState({
                    min: this.state.min + 1,
                    sec: 0
                });
            }

        if(this.state.min === 60){
          this.setState({
             hours: this.state.hours + 1,
             min: 0
          });
        }

        this.setState({
          milisec: (this.state.milisec + 1)
        });
      },1);
    }

    stop(){
        clearInterval(this.strope);
    }

    clearAll(){
      this.setState({
        milisec:0,
        min:0,
        sec:0,
        hours:0
      });
    }

    stylish(){
      if(this.state.hours <=9){
        this.setState({
          hours: '0' + this.state.hours
        })
      }
      if(this.state.min <= 9){
        this.setState({
          min: '0' + this.state.min
        })
      }
      if(this.state.sec <= 9){
        this.setState({
          sec: '0' + this.state.sec
        })
      }
        else{
          this.setState({
            sec: this.state.sec
          });
        }
    }
  render(){

        return(
             <div>
                <h1>Stop Watch</h1>
                    <h2>{this.state.hours}:{this.state.min}:{this.state.sec}:{this.state.milisec}</h2>
                    <button onClick={() => this.start()} class="hola">Start</button>
                    <button onClick={() => this.stop()}>StoP</button>
                    <button onClick={() => this.clearAll()}>Reset</button>
             </div>

    );
  }
};

ReactDOM.render(<StopWatches />, document.getElementById('root'));
