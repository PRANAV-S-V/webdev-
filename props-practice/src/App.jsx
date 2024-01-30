import React from "react";
import Card from "./Card";


function App(){
    return (
        <div>
        <h1>My Contacts</h1>
        <Card
          name="Abigail Morris"
          image="https://starktimes.com/wp-content/uploads/2022/02/Abigaiil-Morris-posing-for-a-photographer.jpg"
          email="bigmorris@gmail.com"
          number="345672"
          alt="Abigail Morris"
        />
        <Card
          name="Abella Danger"
          image="https://cdn.yostagram.com/2023/09/abella-danger-147.jpg"
          email="hottydanger@gmail.com"
          number="6996"
          alt="Abella Danger"
        />
        <Card
          name="Valentina Nappi"
          image="https://img.mensxp.com/media/content/2023/Jul/1_64bfe2f4d0d6d.jpeg"
          email="nappi@gmail.com"
          number="9669"
          alt="Valentina Nappi"
        />
        <Card
          name="Mia Malkova"
          image="https://img.mensxp.com/media/content/2023/Jul/5_64bfe36bb0d28.jpeg"
          email="miamalkova@gmail.com"
          number="9669"
          alt="Mia Malkova"
        />
        <Card
          name="Lana Rhoades"
          image="https://img.mensxp.com/media/content/2023/Jul/14_64bfe44b8ba4d.jpeg"
          email="cuttielana@gmail.com"
          number="1345"
          alt="Lana Rhoades"
        />
        <Card
          name="Mia Khalifa"
          image="https://img.mensxp.com/media/content/2023/Jul/23_64bfe547198e8.jpeg"
          email="miabig@gmail.com"
          number="1300135"
        />
        <Card
          name="Carmela Clutch"
          image="https://vilino.org/wp-content/uploads/2022/03/carmela-clutch.jpg"
          email="bustycarmela@gmail.com"
          number="99898"
        />
        <Card
          name="ExpressionQueen"
          image=""
          email="unknown@gmail.com"
          number="??????"
        />
      </div>
    );
}

export default App;