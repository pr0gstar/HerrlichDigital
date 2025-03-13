import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const prefix =
    window.location.hostname === "localhost" ? " 🌶️ running local" : "";
  return [
    { title: `HerrlichDigital - Loading${prefix}` },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-16">
      <h1>LOADING...</h1>
    </div>
  );
}
