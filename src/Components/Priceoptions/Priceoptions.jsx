import Priceoption from "../priceoption/Priceoption";

const Priceoptions = () => {

  const priceoptions =  [
        {
          "id": 1,
          "name": "Fitness First",
          "features": ["Cardio Equipment", "Strength Training", "Group Classes"],
          "price": 50.00
        },
        {
          "id": 2,
          "name": "Powerhouse Gym",
          "features": ["Free Weights", "Personal Trainers", "Sauna"],
          "price": 60.00
        },
        {
          "id": 3,
          "name": "Healthy Habits Fitness ",
          "features": ["Yoga Studio", "Indoor Pool", "Nutrition Counseling"],
          "price": 45.00
        },
        {
          "id": 4,
          "name": "Elite Fitness Club",
          "features": ["Basketball Court", "Spinning Classes", "Childcare"],
          "price": 55.00
        },
        {
          "id": 5,
          "name": "Zen Wellness Center",
          "features": ["Meditation Classes", "Massage Therapy", "Steam Room"],
          "price": 65.00
        }
      ]
      

    return (
        <div>
            <h2>This is the Chuadanga gyms</h2>
           <div className="md:grid grid-cols-3 md:gap-10 md:p-6  ">
           {
               priceoptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
           </div>
            
        </div>
    );
};

export default Priceoptions;