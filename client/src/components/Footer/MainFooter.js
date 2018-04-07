import React from "react";
import style from "./style.css";


// const MainFooter = () => (
// <div ClassName="footerbase">
//   <footer>     
//         <p>Copyright &copy; Your Website 2018</p>     
//     </footer>
// </div>
// );

// export default MainFooter;

export default class MainFooter extends React.Component {
  render () {
      return <div className={style.style}>
        <footer>     
          <p>Copyright &copy; Your Website 2018</p>     
        </footer>

      </div>;
  }
}