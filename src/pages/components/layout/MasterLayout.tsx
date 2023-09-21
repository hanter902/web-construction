import { FC, ReactNode } from "react"
import Topbar from "./Topbar";
import Navbar from "./Navbar";

interface Props {
    children: ReactNode;
}

const MasterLayout: FC<Props> = ({ children }): JSX.Element => {
    return (
        <div>
            <Topbar />
            <Navbar />

            {children}
        </div>
    )
}

export default MasterLayout;
