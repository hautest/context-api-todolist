import { Content } from "./Content";
import { Input } from "./Input";

export function Recoil() {
  console.log("recoil component 렌더링");
  return (
    <div>
      <Input />
      <Content />
    </div>
  );
}
