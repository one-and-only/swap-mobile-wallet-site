import Header from "./header";

/*const swapGradient: {from: string, to: string, deg: number} = {
  from: "#a760f8",
  to: "#21b8f4",
  deg: 45
};*/

export default function Home({ redirectReason }): JSX.Element {
  return (
    <div>
      <Header title="Swap Mobile Wallet" />
    </div>
  );
}
