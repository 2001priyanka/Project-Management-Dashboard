import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../Config";
const HomeScreen = () => {
  const [houseData, setHouseData] = useState([]);
  // const [accessToken, setAccessToken] = useState(null);


  const getHouseData = async()=>{
    try {
      const res = await axios({
        url: "http://localhost:5000/api/users/register",
      });
    } catch (error) {
      
    }
  }
  const [cards, setCards] = useState([
    {
      name: "card1",
      name2: "Salad",
      img: (
        <img
          className="h-[250px] w-[300px]"
          src="https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"
        />
      ),
    },
    {
      name: "card2",
      name2: "Salad",
      img: (
        <img
          className="h-[250px] w-[300px]"
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg"
        />
      ),
    },
    {
      name: "card3",
      name2: "Salad",
      img: (
        <img
          className="h-[250px] w-[300px]"
          src="https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"
        />
      ),
    },
    {
      name: "card4",
      name2: "Salad",
      img: (
        <img
          className="h-[250px] w-[300px]"
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg"
        />
      ),
    },
    {
      name: "card5",
      name2: "Salad",
      img: (
        <img
          className="h-[250px] w-[300px]"
          src="https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"
        />
      ),
    },
  ]);

  return (
    <div>
      {cards.map((item, index) => (
        <div
          className="bg-white bg-gradient-to-r from-violet-500 to-fuchsia-500  "
          id="Homescreen"
          key={index}
        >
          <div className="flex justify-around">
            <div className="p-6"></div>
          </div>
          <div className="flex justify-evenly">
            <div className="shadow-lg bg-white p-8 cursor-pointer">
              {item.img}
              <div className="font-bold text-center mt-6"> {item.name}</div>
            </div>
            <div className="shadow-lg bg-white  p-8 cursor-pointer">
              {item.img}
              <div className="font-bold text-center mt-6">{item.name2}</div>
            </div>
            <div className="shadow-lg bg-white p-8 cursor-pointer">
              {item.img}
              <div className="font-bold text-center mt-6">{item.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
