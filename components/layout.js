const { Children } = require("react");

const Layout = ({ children, title="Amazon" }) => (
    <div>
        <header>header </header>
        <div>{children}</div>
        <footer >footer</footer>
    </div>
)


export default Layout;