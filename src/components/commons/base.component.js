const { default: Navbar } = require("./navbar.component");

function DashboardBase() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="h-screen flex flex-row flex-wrap"></div>
        </div>
    )
}

export default DashboardBase;