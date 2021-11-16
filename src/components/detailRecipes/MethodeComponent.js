import styled from "styled-components";
import "../../styles/DetailRecipes.css";

const MethodContainer = styled.div`
  width: 50%;
  margin: 10px;
  text-align: left;
  padding: 0px 30px;
`;

const MethodeComponent = ({ detail }) => {
  const method = detail?.method

  return (
    <MethodContainer className="methode box border">
      <ol>
        {method?.map((curr, index) => (
          <div className="method">
            <li key={index}>{curr}</li>
          </div>
        ))}
      </ol>
    </MethodContainer>
  );
};

export default MethodeComponent;
