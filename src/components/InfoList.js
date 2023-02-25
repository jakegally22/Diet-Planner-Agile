import React from 'react';
import '../stylesheets/infolist.css'
import { PieChart } from 'react-minimal-pie-chart';

const InfoList = (props) => {

  const findPercent = (type) => {
    const types = {
      fat: Number(props.data.totalFat),
      protein: Number(props.data.totalProtein),
      carb: Number(props.data.totalCarb),
    }

    if (Number(props.data.totalFat)+Number(props.data.totalProtein)+Number(props.data.totalCarb)!==0){
      return Math.round((types[type]/(Number(props.data.totalFat)+Number(props.data.totalProtein)+Number(props.data.totalCarb)))*100);
    }
    return 0;
    
  }

  const typeColor = {
    fat: "rgb(160, 192, 160)",
    protein: "rgb(128, 155, 135)",
    carb: "rgb(106, 128, 115)",
  }

  const typeName = {
    fat: "Fat",
    carb: "Carbs",
    protein: "Protein",
  }

  const typeList = ["fat", "protein", "carb"];

  return (
    <div  className="infolist">
      <div className="infolist-portion">
        <h1>{props.data.totalCal} Calories</h1>
        <hr/>
        <div className="infolist-info">
          <h2>Recommended</h2>
          <h2>{`${props.goal -140}-${props.goal}`} cals</h2>
        </div>
        <div className="infolist-info">
          <h2>Calories</h2>
          <h2>{props.data.totalCal} cals</h2>
        </div>
        <hr/>
        <div className="infolist-info-pie">
          <PieChart className="infolist-pie"
            data={[
              { title: 'Fat', value: Number(props.data.totalFat), color: typeColor.fat },
              { title: 'Protein', value: Number(props.data.totalProtein), color: typeColor.protein },
              { title: 'Carb', value: Number(props.data.totalCarb), color: typeColor.carb },
            ]}
          />;
          <div className="infolist-pie-info">
            {
              typeList.map((type) => {
                return <div className="infolist-info" key={type}>
                  <div className="infolist-pie-label">
                    <div className="infolist-pie-color" style={{backgroundColor: typeColor[type]}}></div>
                    <h2>{typeName[type]}</h2>
                  </div>
                  <h2>{findPercent(type)}%</h2>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div className="infolist-portion">
        <div className="infolist-info">
          <h2>Calories</h2>
          <h2>{props.data.totalCal} cals</h2>
        </div>
        <div className="infolist-info">
          <h2>Protein</h2>
          <h2>{props.data.totalProtein}g</h2>
        </div>
        <div className="infolist-info">
          <h2>Carbs</h2>
          <h2>{props.data.totalCarb}g</h2>
        </div>
        <div className="infolist-info">
          <h2>Fat</h2>
          <h2>{props.data.totalFat}g</h2>
        </div>
      </div>

    </div>
  );
}

export default InfoList;