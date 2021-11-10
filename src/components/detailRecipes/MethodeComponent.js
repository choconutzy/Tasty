import styled from "styled-components";
import "../../styles/DetailRecipes.css";

const MethodContainer = styled.div`
  width: 50%;
  margin: 10px;
  text-align: left;
  padding: 0px 30px;
`;

const MethodeComponent = () => {
  return (
    <MethodContainer className="methode box border">
      <ol>
        <div className="method">
          <li>
            Put the oil, onions, celery, carrots, potatoes and bay leaves in a
            big casserole dish, or two saucepans.
          </li>
        </div>
        <div className="method">
          <li>Fry gently until the onions are softened – about 10-15 mins.</li>
        </div>
        <div>
          <li>Fill the kettle and boil it.</li>
        </div>
        <div className="method">
          <li>
            Stir in the tomato purée, sugar, vinegar, chopped tomatoes and
            passata, then crumble in the stock cubes.
          </li>
        </div>
        <div className="method">
          <li>Add 1 litre boiling water and bring to a simmer.</li>
        </div>
        <div className="method">
          <li>
            Cover and simmer for 15 mins until the potato is tender, then remove
            the bay leaves.
          </li>
        </div>
        <div className="method">
          <li>
            Purée with a stick blender (or ladle into a blender in batches)until
            very smooth.
          </li>
        </div>
        <div className="method">
          <li>Season to taste and add a pinch more sugar if it needs it.</li>
        </div>
        <div className="method">
          <li>
            The soup can now be cooled and chilled for up to 2 days, or frozen
            for up to 3 months.
          </li>
        </div>
        <div className="method">
          <li>
            To serve, reheat the soup, stirring in the milk – try not to let it
            boil.Serve in small bowls with cheesy sausage rolls.
          </li>
        </div>
      </ol>
    </MethodContainer>
  );
};

export default MethodeComponent;
