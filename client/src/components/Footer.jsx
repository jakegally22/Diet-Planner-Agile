import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
<div>
  <br/>
  <br/>
  <br/>
        <footer class="w3-container w3-padding-16 w3-light-grey " >
  <h4>FOOTER</h4>
  <p>Powered by <a href="google.com" target="_blank">Nutrition Kings Inc</a></p>
      <p>Copyright ⓒ {year}</p>
    </footer>

    </div>
  );
}

export default Footer;
