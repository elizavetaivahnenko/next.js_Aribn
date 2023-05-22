'use client';
import { useRouter } from "next/router"
import Image from "next/image";

const Avatar = () => {
	// const router= useRouter()
	return (
		<Image
			className="rounded-full"
			height="30"
			width="30"
			alt="Avatar"
			src="/images/placeholder.png"
		/>
	);
}

export default Avatar