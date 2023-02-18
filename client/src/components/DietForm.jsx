


function DietForm() {
    return (
      <div>
          
          <form action="/action_page.php" >
          
          <label for="cars">Choose a start range:</label>

<select name="caloriesStart" id="caloriesStart">
  <option value=">500">500</option>
  <option value="500-1000">500-1000</option>
  <option value="1000-1500">1000-1500</option>
  <option value="1500-2000">1500-2000</option>
  <option value="2000-2500">2000-2500</option>
  <option value="2500>">2500</option>
</select>

<label for="cars">Choose a end range:</label>
<select name="caloriesEnd" id="caloriesEnd">
  <option value=">500">500</option>
  <option value="500-1000">500-1000</option>
  <option value="1000-1500">1000-1500</option>
  <option value="1500-2000">1500-2000</option>
  <option value="2000-2500">2000-2500</option>
  <option value="2500>">2500</option>
</select>
<br/><br/>


<label for="cars">Choose a meal type:</label>
<select name="calories" id="calories">
  <option value="breakfast">breakfast</option>
  <option value="lunch">lunch</option>
  <option value="dinner">dinner</option>

</select>
<br/><br/>
{/* <input type="submit" value="Submit"/> */}
<button type="submit" class="btn w3-red">Submit</button>

  
      
    </form>
  
    </div>
    );
  }
  
  export default DietForm;
