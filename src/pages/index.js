import { useSelector } from "react-redux";
import { Container } from "../components/styles";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <Container key={fruit}>
          <p>{fruit}</p>
        </Container>
      ))}
    </div>
  );
};

export default FruitsPage;
