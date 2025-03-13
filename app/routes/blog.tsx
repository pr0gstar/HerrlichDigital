import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const prefix =
    window.location.hostname === "localhost" ? " 🌶️ running local" : "";
  return [
    { title: `Blog - HerrlichDigital${prefix}` },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Blog() {
  return (
    <div className="relative px-[20vw]">
      <header>
        <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
          Blog
        </h2>
        <p className="text-lg font-medium text-gray-600 dark:text-slate-500 mt-2">
          Coming soon...
        </p>
      </header>
    </div>
  );
}
