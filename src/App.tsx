import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/heading.tsx";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("Oi");

  return (
    <div>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        necessitatibus consectetur quam. Quisquam sit facilis aliquam corrupti
        suscipit. A, dolorum. Enim, minima. Aut pariatur asperiores inventore
        blanditiis, dolore similique qui.
      </p>
    </div>
  );
}
