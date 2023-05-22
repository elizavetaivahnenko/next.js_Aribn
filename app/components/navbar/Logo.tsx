'use client';
import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
	// const router = useRouter();
	return(
		<Image alt="Logo"
			className="hidden md:block cursor-pointer"
			height="60"
			width="60"
			src="/images/logo.png"
		/>
	)
}
export default Logo;