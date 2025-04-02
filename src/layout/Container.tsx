import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="w-full px-36">
        {children}
    </div>
}

export default Container;