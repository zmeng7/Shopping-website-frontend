import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">TAOBAO</div>

      <div className="nav-search">
        <input placeholder="搜索产品…" />
        <button>搜索</button>
      </div>

      <div className="nav-links">
        <span>分类</span>
        <span>购物车</span>
        <span>登录</span>
      </div>
    </div>
  );
}

export default Navbar;
