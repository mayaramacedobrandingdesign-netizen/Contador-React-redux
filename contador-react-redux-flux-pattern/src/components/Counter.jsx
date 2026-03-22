import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
  //useSelector lê o valor guardado no estado global
  const count = useSelector((state) => state.count);

  //useDisopatch envia ações para o redux
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>Contador com React Redux</h1>
        <p className="subtitle">Gerenciamento de estado global com Flux Pattern</p>

        <div className="count-box">
          <span>{count}</span>
        </div>
        
        <div className="buttons"> 
          <button onClick={() => dispatch(decrement())}>Decrementar</button>
          <button onClick={() => dispatch(increment())}>Incrementar</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;