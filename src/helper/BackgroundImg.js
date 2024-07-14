import { Component } from "react";

class BackgroundImg extends Component {
constructor(props) {
super(props);
this.state = {
imgUrl: props.imgUrl,
};
}

render() {
const styles = {
header: {
  backgroundImage: "url(" + this.state.imgUrl + ")",
  height: "100svh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
},

  content: {
    height: "100%",
    width: "100%",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
  },
};

return (
  styles
);
}
}

export default BackgroundImg;