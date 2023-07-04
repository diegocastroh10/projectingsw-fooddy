'use client'

import { createContext, useState, ReactNode } from "react";

const initialValue = {
  collapsedSidebar: false,
  sidebarCollapseHandler: () => { },
};

export const SidebarContext = createContext(initialValue);

interface Props {
  children: ReactNode | ReactNode[];
};

const SidebarProvider = ({ children }: Props) => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  const sidebarCollapseHandler = () => {
    setCollapsedSidebar((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ collapsedSidebar, sidebarCollapseHandler }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider;

