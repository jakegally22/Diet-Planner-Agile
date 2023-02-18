




function WalkForm() {
    return (
      <div>
          
          <form action="/action_page.php" >
          
          <label for="fname1">How many steps you took?</label><br/>
          <input type="text" id="fname" name="fname" value="Please Enter"/><br/>
          <br/>
<label for="walks">which time of day:</label>
<br/>

<select id="walk" name="walk">
    <option value="morning">morning</option>
    <option value="afternoon">afternoon</option>
    <option value="evening">evening</option>
    <option value="Other">Other</option>
    <br/>
  </select>
  <br/>

  <input type="submit" class="btn w3-red"value="Submit"/>
  <br/>
  <br/>
  <p>Allow app to track steps:</p>
  <input type="submit" value="Allow" class="btn w3-red"></input>



  
      
    </form>
  
    </div>
    );
  }
  
  export default WalkForm;

