import { inputAtom } from "./store";
import { useRecoilState } from "recoil";

export function Input() {
  console.log("input 렌더링");
  const [inputValue, setInputValue] = useRecoilState(inputAtom);
  return (
    <div>
      <label>Recoil input 입니당</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
