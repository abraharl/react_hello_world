    import React from "react";
    import ReactDOM from "react-dom";

    //Hello World
    var HelloWorld = React.createClass({
      render: function() {
        return (<p>Hello {this.props.greetTarget}!</p>);
      }
    });

    ReactDOM.render(
      <HelloWorld greetTarget="Lee"/>,
      document.querySelector("#container")
    );

    //Button
    var Buttonify = React.createClass({
      render: function() {
        return (
          <div>
            <button type={this.props.behavior}>{this.props.children}</button>
          </div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <Buttonify behavior="Submit">Click Me</Buttonify>
      </div>,
      document.querySelector("#button")
    );

   //Letters 
   var Letter = React.createClass({
      render: function(){
        var letterStyle = {
            padding: "10px",
            margin: "10px",
            backgroundColor: this.props.bgcolor,
            color: "#333333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "32px",
            textAlign: "center",
        };
        return (
          <div style={letterStyle}>{this.props.children}</div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
      </div>,
      document.querySelector('#vowels')
    );

    //Color card
    var ColorSwatch = React.createClass({
      render: function(){
        var swatchStyle = {
          height: 150,
          backgroundColor: this.props.color
        };

        return (
          <div style={swatchStyle}></div>
        );
      }
    });

    var ColorLabel = React.createClass({
      render: function(){
        var labelStyle = {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          padding: 13,
          margin: 0
        };

        return (
          <p style={labelStyle}>{this.props.color}</p>
        );
      }
    });

    var ColorCard = React.createClass({
      render: function(){
        var cardStyle = {
          height: 200,
          width: 150,
          padding: 0,
          backgroundColor: "#FFFFFF",
          WebkitFilter: "drop-shadow(0px 0px 5px #666666)",
          filter: "drop-shadow(0px 0px 5px #666666)"
        };

        return (
          <div style={cardStyle}>
            <ColorSwatch color={this.props.color}/>
            <ColorLabel color={this.props.color}/>
          </div>
        );
      }
    });

    ReactDOM.render(
      <ColorCard color="#FFA737"/>,
      document.querySelector("#colorCard")
    );


    //Transitive properties
    var Display = React.createClass({
      render: function() {
        var style = {
          border: "dotted 1px #000000"
        };
        return(
          <div style={style}>
            <p>{this.props.color}</p>
            <p>{this.props.numb}</p>
            <p>{this.props.size}</p>
          </div>
        );
      }
    });

    var Label =  React.createClass({
      render: function() {
        return(<Display {...this.props}/>);
      }
    }); 
    var Shirt = React.createClass({
      render: function() {
        return(<Label {...this.props}/>);
      }
    });

    ReactDOM.render(
      <Shirt color="blue" numb="3" size="XL"></Shirt>,
      document.querySelector('#transProperty')
    );

    //Lightning Counter
    var LightningCounter = React.createClass({
      getInitialState: function() {
        return {
          strikes: 0
        }
      },
      render: function() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      },
      componentDidMount: function() {
        setInterval(this.timerTick, 1000);
      },
      timerTick: function() {
        this.setState({
          strikes: this.state.strikes + 100
        });
      }
    });

    var LightningCountDisplay = React.createClass({
      render: function() {
        var style = {
          width: 250,
          textAlign: "center",
          backgroundColor: "black",
          padding: 40,
          fontFamily: "sans-serif",
          color: "#999999",
          borderRadious: 10
        };
        return (
          <div style={style}>
            <LightningCounter/>
          </div>
        );
      }
    });
    
    ReactDOM.render(
      <LightningCountDisplay/>,
      document.querySelector('#lightning')
    );

    //dynamic circles
    var Circle = React.createClass({
      render: function() {
        var style = {
          padding: 10,
          margin: 20,
          display: "inline-block",
          backgroundColor: this.props.bgColor,
          borderRadius: "50%",
          width: 100,
          height: 100
        };

        return (
          <div style={style}>
          </div>
        )
      }
    });

    function showCircles() {
      var colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363', '#85FFC7', '#297373', '#FF8552', '#A40EFC']
      var circles = []

      for (var i = 0; i < colors.length; i++) {
        circles.push(<Circle key={i + colors[i]} bgColor={colors[i]}/>);
      }

      return circles;
    };

    ReactDOM.render(
      <div>{showCircles()}</div>,
      document.querySelector('#dynamicCircles')
    );

    //Counter
    var Counter = React.createClass({
      getInitialState: function() {
        return {
          count: 0
        };
      },
      render: function() {
        var backgroundStyle = {
          padding: 50,
          backgroundColor: "#FFC53A",
          width: 250,
          height: 100,
          borderRaidus: 10,
          textAlign: "center"
        };

        var buttonStyle = {
          fontSize: "1em",
          width: 30,
          height: 30,
          fontFamily: "sans-serif",
          color: "#333333",
          fontWeight: "bold",
          lineHeight: "3px"
        };

        return (
          <div style={backgroundStyle}>
            <CounterDisplay display={this.state.count}/>
            <PlusButton clickHandler={this.increase}/>
          </div>
        );
      },
      increase: function(e) {
        var currentCount = this.state.count;

        if (e.shiftKey) {
          currentCount += 10;
        }
        else {
          currentCount += 1;
        }

        this.setState ({
          count: currentCount
        });
      }
    });

    var CounterDisplay = React.createClass({
      render: function() {
        var textStyle  =  {
          fontSize: 72,
          fontFamily: "sans-serif",
          color: "#333333",
          fontWeight: "bold"
        };

        return (
          <div style={textStyle}>
            {this.props.display}
          </div>
        );
      }
    });

    var PlusButton = React.createClass({
      render: function () {
        return (<button onClick={this.props.clickHandler}>+</button>);
      }
    });

    ReactDOM.render (
      <div><Counter/></div>,
      document.querySelector('#counter')
    );

    //Colorizer
    var Colorizer = React.createClass({
      getInitialState: function() {
        return {
          color: '',
          bgColor: ''
        };
      },
      render: function() {
        var squareStyle = {
          backgroundColor: this.state.bgColor
        };

        var self = this;

        return (
          <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>

            <form onSubmit={this.setNewColor}>
              <input onChange={this.colorValue} 
                     placeholder="Enter a color Value" 
                     ref={function(el){self._input = el;}}></input>
              <button type="submit">go</button>
            </form>
          </div>
        );
      },
      colorValue: function(e) {
        this.setState({color: e.target.value});
      },
      setNewColor: function(e) {
        this.setState({bgColor: this.state.color});
        this._input.value = "";
        this._input.focus();

        e.preventDefault()
      }
    });

    ReactDOM.render(
      <Colorizer/>,
      document.querySelector('#colorizer')
    );