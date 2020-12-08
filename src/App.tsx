import React, { useReducer, MouseEvent, useCallback } from "react";
import { TElement, TMock } from "./mocks";
import { mock } from "./mocks";

const reducer = (state: TMock, action: string) => {
  switch (action) {
    case "MIN":
      return {
        ...state,
        data: state.data.sort((a, b) => a.id - b.id),
        isMin: !state.isMin,
      };
    case "MAX":
      return {
        ...state,
        data: state.data.sort((a, b) => b.id - a.id),
        isMin: !state.isMin,
      };
    case "NO_ALPHABET":
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
        isAlphabet: !state.isAlphabet,
      };
    case "ALPHABET":
      return {
        ...state,
        data: state.data.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        }),
        isAlphabet: !state.isAlphabet,
      };
    case "UPDATE":
      return { ...state };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, mock);
  const handleChecked = useCallback(
    (e: MouseEvent<HTMLInputElement>): void => {
      const {
        currentTarget: { checked, value },
      } = e;
      const { letters } = state;

      if (checked) {
        letters.push(value);
      } else {
        state.letters = letters.filter((elem) => elem !== value);
      }

      if (state.letters.length) {
        state.data = state.baseData.reduce(
          (acc: [] | TElement[], item: TElement) => {
            for (let letter of state.letters) {
              if (letter === item.name.charAt(0)) {
                acc = [...acc, item];
              }
            }
            return acc;
          },
          []
        );
      } else {
        state.data = state.baseData;
      }

      dispatch("UPDATE");
    },
    [state]
  );

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => (state.isMin ? dispatch("MAX") : dispatch("MIN"))}
            >
              ID
            </th>
            <th
              onClick={() =>
                state.isAlphabet
                  ? dispatch("ALPHABET")
                  : dispatch("NO_ALPHABET")
              }
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <label>
          А -{" "}
          <input
            type="checkbox"
            value="А"
            name="А"
            onClick={(e) => handleChecked(e)}
          />
        </label>
        <label>
          М -{" "}
          <input
            type="checkbox"
            value="М"
            name="М"
            onClick={(e) => handleChecked(e)}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
