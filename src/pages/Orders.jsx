import Card from "../components/Card";
import React from "react";
import axios from "axios";

function Orders() {


  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://622f6ba23ff58f023c2017b6.mockapi.io/orders"
        );
        setOrders(data.reduce((acc, cur) => [...acc, ...cur.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="content__info">
        <h1>Мои заказы</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(12)] : orders).map((obj, index) => (
              <Card
                {...obj}
                key={index}
                loading={isLoading}
              />
            ))}
      </div>
    </div>
  );
}

export default Orders;
