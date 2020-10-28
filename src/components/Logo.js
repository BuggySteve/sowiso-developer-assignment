import logo from "../logo-cl.svg";

export default function Logo() {
  return (
    <div className="flex justify-center py-8 md:py-12 animate-bounce-and-stop">
      <img src={logo} className="w-1/4" alt="logo" />
    </div>
  );
}
