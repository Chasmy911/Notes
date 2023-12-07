import React, { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { StyledLayout } from './layoutStyles';

const Layout: FC<PropsWithChildren> = () => {
	return (
		<StyledLayout>
			<Header />
			<Outlet />
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
