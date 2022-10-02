import { Input } from "./Input";
import { Content } from "./Content";

export function Context() {
  console.log("context component 렌더링");
  return (
    <div>
      <Input />
      <Content />
    </div>
  );
}
