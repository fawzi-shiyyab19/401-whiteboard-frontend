import cookies from "react-cookies";

function Header({ x, loggedin }) {
  return (
    <div className="head">
      <h1>Fawzi Shiyyab White-Board</h1>
      {loggedin && (
        <div className="logee">
          <p>Welcome Back {cookies.load("name")}</p>
          <button onClick={x}>LogOut</button>
        </div>
      )}
    </div>
  );
}

export default Header;