import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div>
      <nav>
        <h1>Flickr Gallery</h1>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
