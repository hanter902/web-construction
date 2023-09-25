import { FC, ReactNode } from "react"
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
    children: ReactNode;
}

const MasterLayout: FC<Props> = ({ children }): JSX.Element => {
    return (
        <div>
            <Topbar />
            <Navbar />

            {children}
            <Footer />
        </div>
    )
}

export default MasterLayout;
