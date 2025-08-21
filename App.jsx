import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw, css } from "twind";

setup({});

const upAndDown = css.keyframes({
  "0%,100%": { transform: "translateZ(-100px) rotate(0deg)" },
  "50%": { transform: "translateZ(100px) rotate(90deg)" },
});

const App = () => (
  <aside
    className={tw`
      w-[300px] h-[300px] relative transform-style-preserve-3d
      perspective-[500px] rotate-x-[60deg] flex flex-wrap place-content-center
    `}
  >
    {Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className={tw`
          absolute inset-[calc(var(--s)*10px)]
          shadow-[inset_0_0_80px_#9acd32]
          clip-[polygon(20%_0%,0%_20%,30%_50%,0%_80%,20%_100%,50%_70%,80%_100%,100%_80%,70%_50%,100%_20%,80%_0%,50%_30%)]
          animate-[${upAndDown}_3s_infinite_ease-in-out_both]
        `}
        style={{ "--s": i }}
      />
    ))}
  </aside>
);

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
